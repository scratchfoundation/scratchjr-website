const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const sass = require('sass');

// PostCss
const autoprefixer = require('autoprefixer');
const postcssVars = require('postcss-simple-vars');

const routes = require('./src/routes.json');
const TemplateConfig = require('./src/template-config.js');

// Default to a production build; opt down to development only when asked
// (the dev server and staging deploys set NODE_ENV=development). webpack's
// mode also sets the bundle's process.env.NODE_ENV, so this flips React's
// dev/prod build to match.
const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';

// Prepare all entry points
const entry = {};
routes.forEach(route => {
    if (!route.redirect) {
        entry[route.name] = `./src/views/${route.name}/${route.name}.jsx`;
    }
});

module.exports = {
    mode: mode,
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].bundle.js',
        // Root-absolute so emitted bundles and assets resolve from any route,
        // including nested activity pages.
        publicPath: '/',
        assetModuleFilename: 'assets/[contenthash][ext]',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    // Bundles carry inlined small assets plus the React runtime; the default
    // 244 KiB hint isn't meaningful for this multi-page marketing site.
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
        {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    // Root-absolute urls (/images/...) are served from copied
                    // static assets at runtime; leave them untouched.
                    url: {filter: url => !url.startsWith('/')}
                }
            }, {
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        // autoprefixer reads its targets from .browserslistrc
                        plugins: [postcssVars(), autoprefixer()]
                    }
                }
            }]
        },
        {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    url: {filter: url => !url.startsWith('/')}
                }
            }, {
                loader: 'sass-loader',
                options: {
                    implementation: sass
                }
            }]
        },
        {
            // Inline small assets as data URIs and emit larger ones as
            // separate (cacheable) files. 8 KiB is webpack's default asset
            // threshold, matching common url-loader `limit` setups.
            test: /\.(png|jpg|gif|eot|svg|ttf|woff)$/i,
            type: 'asset'
        },
        {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
                sources: {
                    // Resolve (and inline) fragment-relative images, but leave
                    // root-absolute /images/... served from static as-is.
                    urlFilter: (attribute, value) => !value.startsWith('/')
                }
            }
        }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: 'static'
            }]
        })
    ].concat(routes
        .filter(route => !route.redirect)
        .map(route => new HtmlWebpackPlugin(Object.assign({}, TemplateConfig, {
            title: route.title,
            filename: `${route.name}.html`,
            chunks: [route.name],
            route: route
        })))
    )
};
