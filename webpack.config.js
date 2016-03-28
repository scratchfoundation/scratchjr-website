var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './src/main.jsx',
	externals: {
        'react': 'React',
        'react/addons': 'React',
        'react-dom': 'ReactDOM',
    },
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
            	test: /\.json$/,
	            loader: 'json-loader'
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