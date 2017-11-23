/* eslint-disable */
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');
const moment = require('moment');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const childProcess = require('child_process');
const commit = childProcess.execSync('git rev-parse --short HEAD').toString();

var config = {};

config.entry = {
	app: ['./src/'],
	vendor: Object.keys(pkg.dependencies),
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
config.plugins.push(
	new HtmlWebpackPlugin({
		template: './src/index.html',
	})
);

/* Generate global variables that can be used throughout the application */
var buildDate = JSON.stringify(moment().format('DD-MM-YYYY HH:mm'));

var globals = {
	__BUILD__: {
		VERSION: JSON.stringify(pkg.version),
		COMMIT: JSON.stringify(commit),
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
