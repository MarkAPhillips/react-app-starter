const path = require('path');
const pkg = require('./package.json');
const pullAll = require('lodash/pullAll');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {};

function buildVendorBundle() {
  return pullAll(Object.keys(pkg.dependencies), ['font-awesome']);
}

config.entry = {
  app: ['babel-regenerator-runtime', './src/'],
  vendor: buildVendorBundle(),
};

config.resolve = {
  extensions: ['.js', '.jsx'],
};

config.output = {
  path: path.join(__dirname, 'dist/'),
  filename: '[name].[chunkHash].js',
  chunkFilename: '[chunkHash].js',
  publicPath: '/',
};

config.devtool = 'source-map';
config.plugins = [];

/* Cleans the directory */
config.plugins.push(new CleanWebpackPlugin(['./dist']));
config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin());

/* Generates index.html file and injects the bundle.js file into it */
config.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.html',
}));

config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
  names: ['vendor', 'manifest'],
}));

config.module = {
  rules: [
    {
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      exclude: /node_modules/,
    },
    { test: /(\.css$)/, loaders: ['style-loader', 'css-loader'] },
    {
      test: /\.html$/,
      loader: 'html-loader',
    },
    {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.(jpe?g|png|gif|ico)$/,
      loader: 'url-loader?limit=100000',
    },
    {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      loader: 'file-loader',
      query: {
        name: '[hash].[ext]',
      },
    },
  ],
};

module.exports = config;
