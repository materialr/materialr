const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CSPWebpackPlugin = require('csp-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const join = path.join.bind(null, __dirname, '..');

module.exports = {
  context: join('src'),
  devtool: false,
  entry: ['./index.jsx'],
  module: {
    rules: [{
      exclude: [/node_modules/, /\.test\.jsx?$/],
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader' }],
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader', options: { includePaths: ['node_modules', 'src'] } },
        ],
      }),
    }],
  },
  output: {
    path: join('build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' },
      { from: 'google-analytics.js', to: 'google-analytics.js' },
      { from: 'service-worker.js', to: 'service-worker.js' },
    ]),
    new HtmlWebpackPlugin({ hash: true, template: 'index.html' }),
    new CSPWebpackPlugin({
      'base-uri': '\'self\'',
      'connect-src': ['\'self\''],
      'default-src': '\'none\'',
      'font-src': ['\'self\'', 'https://fonts.gstatic.com'],
      'form-action': '\'none\'',
      'img-src': ['\'self\'', 'https://lorempixel.com', 'data:', 'https://www.google-analytics.com'],
      'object-src': '\'none\'',
      'script-src': ['\'self\'', 'https://www.google-analytics.com'],
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
    new ExtractTextPlugin('bundle.css'),
    new UglifyJSPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
};
