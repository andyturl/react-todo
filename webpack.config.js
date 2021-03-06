var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/js/foundation.min.js',
        './app/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './app/components'),
            path.resolve(__dirname, './app/api')
        ],
        alias: {
            app: path.resolve(__dirname, 'app/'),
            applicationStyles: path.resolve(__dirname, 'app/styles/app.scss'),
            actions: path.resolve(__dirname, 'app/actions/actions.jsx'),
            reducers: path.resolve(__dirname, 'app/reducers/reducers.jsx'),
            configureStore: path.resolve(__dirname, 'app/store/configureStore.jsx')
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0']
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'sass-loader',
                    options: {
                        includePaths: [
                            path.resolve(__dirname, './node_modules/foundation-sites/scss')
                        ]
                    }
                }],
            }
        ]
    },
    devtool: 'cheap-module-source-map'
};