const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CSPHtmlWebpackPlugin = require('csp-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const join = path.join.bind(null, __dirname, '..');

module.exports = {
  context: join('src'),
  devtool: false,
  entry: ['./index.jsx'],
  mode: 'production',
  module: {
    rules: [
      {
        exclude: [/node_modules/, /\.test\.jsx?$/],
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        exclude: [/\.test\.jsx?$/],
        include: [/node_modules\/@material/],
        test: /\.jsx?$/,
        use: [{ loader: 'babel-loader' }],
      },
      {
        enforce: 'pre',
        exclude: [/node_modules/],
        loader: 'import-glob-loader2',
        test: /\.scss$/,
      },
      {
        exclude: [/node_modules/],
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'sass-loader', options: { includePaths: ['node_modules', 'src'] } },
        ],
      },
      {
        include: [/node_modules\/@material/],
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: { includePaths: ['node_modules'] } },
        ],
      },
    ],
  },
  output: {
    path: join('build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ hash: true, template: 'index.html' }),
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: '404.html', to: '404.html' },
      { from: 'github-pages.js', to: 'github-pages.js' },
      { from: 'google-analytics.js', to: 'google-analytics.js' },
      { from: 'service-worker.js', to: 'service-worker.js' },
    ]),
    new CSPHtmlWebpackPlugin({
      'base-uri': '\'self\'',
      'connect-src': ['\'self\''],
      'default-src': '\'none\'',
      'font-src': ['\'self\'', 'https://fonts.gstatic.com'],
      'form-action': '\'none\'',
      'img-src': ['\'self\'', 'https://lorempixel.com', 'data:', 'https://www.google-analytics.com', 'https://www.googletagmanager.com'],
      'object-src': '\'none\'',
      'script-src': ['\'self\'', 'https://www.google-analytics.com', 'https://www.googletagmanager.com'],
      'style-src': ['\'self\'', 'https://fonts.googleapis.com'],
    }),
    new webpack.DllReferencePlugin({
      context: join('src'),
      // eslint-disable-next-line
      manifest: require(join('build', 'vendor-manifest.json')),
    }),
    new AddAssetHtmlPlugin({
      filepath: join('build', 'vendor.js'),
      hash: true,
      includeSourcemap: false,
    }),
    new MiniCssExtractPlugin(),
    new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
