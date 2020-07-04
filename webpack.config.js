const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/app.js',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
		],
	},
	output: {
		path: __dirname + '/dist/assets/js',
		publicPath: '/assets/js',
		filename: '[name].[contenthash:8].min.js',
		chunkFilename: '[name].[contenthash:8].min.js',
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	optimization: {
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
	},
	plugins: [
		new HTMLWebpackPlugin({
			filename: __dirname + '/dist/template.html',
			template: './src/index.html',
		}),
		new CleanWebpackPlugin({
			cleanAfterEveryBuildPatterns: ['!static*.*'],
		}),
	],
};
