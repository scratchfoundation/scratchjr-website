var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var routes = require('./server/routes.json');

// Prepare all entry points
var entry = {
    main: './src/main.jsx'
};
routes.forEach(function (route) {
    entry[route.view] = './src/views/' + route.view + '/' + route.view + '.jsx';
});

module.exports = {
	entry: entry,
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
                test: /\.scss$/,
                loader: 'style!css!autoprefixer-loader?browsers=last 3 versions!sass'
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