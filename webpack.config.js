var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');
var path=require('path');

module.exports = {
    context: __dirname +path.sep+'src',
    devtool: debug
        ? 'inline-sourcemap'
        : null,
    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    entry: '.'+path.sep+'js'+path.sep+'client.js',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)|(bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react', 'es2015', 'stage-0'
                    ],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path:path.join( __dirname , 'src'),
        filename: 'client.min.js'

    },
    plugins: debug
        ? []
        : [
            new webpack
                .optimize
                .DedupePlugin(),
            new webpack
                .optimize
                .OccurenceOrderPlugin(),
            new webpack
                .optimize
                .UglifyJsPlugin({mangle: false}),
            
        ]
}