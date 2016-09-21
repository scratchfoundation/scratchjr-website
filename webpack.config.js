var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var routes = require('./src/routes.json');

// Prepare all entry points
var entry = {
    // common: [
    //     // Vendor
    //     'react',
    //     'react-dom'
    // ]
};
routes.forEach(function (route) {
    if (!route.redirect) {
        entry[route.name] = './src/views/' + route.name + '/' + route.name + '.jsx';
    }
});

module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: 'style!css!postcss-loader!sass'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss-loader'
        }, {
            test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/,
            loader: 'url-loader'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }]
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'static'
        }])
    ].concat(routes
        .filter(function (route) {return !route.redirect;})
        .map(function (route) {
            return new HtmlWebpackPlugin(Object.assign({}, require('./src/template-config.js'), {
                title: route.title,
                filename: route.name + '.html',
                route: route
            }));
        })
    )
};
