var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var routes = require('./src/routes.json');

// Prepare all entry points
var entry = {};
routes.forEach(function (route) {
    entry[route.view] = './src/views/' + route.view + '/' + route.view + '.jsx';
});

module.exports = {
	entry: entry,
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'js/[name].bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loader: 'babel-loader',
				include: path.resolve(__dirname, 'src'),
				query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!postcss-loader!sass'
            },
            {
            	test: /\.json$/,
	            loader: 'json-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss-loader'
            },
            {
                test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
                loader: 'url-loader'
            },
            {
            	test: /\.less$/,
	   			loader: 'style!css!less'
            }
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: 'static'}
		])
	]
}
