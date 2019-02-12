const path = require('path');
const pkg = require('./package.json');
const pullAll = require('lodash/pullAll');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {};
const excludedPackages = ['express', 'express-graphql'];

function buildVendorBundle() {
  return pullAll(Object.keys(pkg.dependencies), excludedPackages);
}

config.entry = {
  app: ['@babel/polyfill', './src/'],
  vendor: buildVendorBundle(),
};

config.resolve = {
  extensions: ['.mjs', '.js', '.jsx'],
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

/* Generates index.html file and injects the bundle.js file into it */
config.plugins.push(new HtmlWebpackPlugin({
  template: './src/index.html',
}));

config.externals = ['tls', 'net', 'fs'];

config.optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /node_modules/,
        chunks: 'initial',
        name: 'vendor',
        enforce: true,
      },
    },
  },
};

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
      test: /\.(graphql|gql)$/,
      loader: 'graphql-tag/loader',
      exclude: /node_modules/,
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
