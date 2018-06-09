const path = require('path');
const webpack = require('webpack');

const join = path.join.bind(null, __dirname, '..');

module.exports = {
  context: join('src'),
  devtool: false,
  entry: ['./vendor.js'],
  mode: 'development',
  module: {
    rules: [{
      exclude: [/node_modules/, /\.test\.jsx?$/],
      test: /\.jsx?$/,
      use: [{ loader: 'babel-loader' }],
    }],
  },
  output: {
    filename: 'vendor.js',
    library: 'vendor',
    path: join('dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.DllPlugin({
      path: join('dist', 'vendor-manifest.json'),
      name: 'vendor',
      context: join('dist'),
    }),
  ],
};
