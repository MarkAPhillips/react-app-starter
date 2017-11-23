/* eslint-disable */
const path = require('path');
const PACKAGE = require('./package.json');
const webpack = require('webpack');
const moment = require('moment');HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const childProcess = require('child_process');
const COMMIT = childProcess.execSync('git rev-parse --short HEAD').toString();
const ENV = process.env.npm_lifecycle_event;

var config = {};

config.entry = {
	app: ['./src/'],
	vendor: [],
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

/* Generates index.html file and injects the bundle.js file into it */
config.plugins.push(
	new HtmlWebpackPlugin({
		template: './src/index.html',
	})
);

/* Generate global variables that can be used throughout the application */
var buildDate = JSON.stringify(moment().format('DD-MM-YYYY HH:mm'));

var globals = {
	__BUILD__: {
		VERSION: JSON.stringify(PACKAGE.version),
		COMMIT: JSON.stringify(COMMIT),
		DATE: buildDate,
	},
};

config.plugins.push(new webpack.DefinePlugin(globals));
config.plugins.push(
	new webpack.optimize.CommonsChunkPlugin({
		names: ['vendor', 'manifest'],
	})
);

config.module = {
	rules: [
		{
			test: /\.jsx?$/,
			loader: 'eslint-loader',
			enforce: 'pre',
			exclude: /node_modules/,
		},
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
			test: /\.(svg|jpe?g|png|gif|ico)$/,
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
