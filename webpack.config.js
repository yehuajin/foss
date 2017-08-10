/**
 * Created by YEHUAJIN on 2017/6/24.
 */
var path = require('path');
var webpack = require('webpack');
var ROOT_PATH = path.resolve(__dirname);
var htmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var es3ifyPlugin = require('es3ify-webpack-plugin');

config = {
    entry: {
        app: ["es5-shim", "es5-shim/es5-sham", 'babel-polyfill', path.resolve(__dirname, 'src/app.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js?'+ new Date().getTime()
    },
    module: {
        loaders: [
            {
                test: /\.js|jsx$/,
                loader:'babel-loader?stage=0',
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=100000&name=./src/img/[name].[ext]',
                    'image-webpack-loader'
                ]
            },
            {
                test: /(\.js|\.jsx)$/,
                loader: 'eslint-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: /(node_modules|src\\app.js|plugin|\.css$|\.less|\.scss$)/
            }

        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'template/index.html'),
            inject: 'body',
            title: '后台管理'
        }),
        new es3ifyPlugin()//,
        //new webpack.optimize.UglifyJsPlugin({//代码压缩
        //    compress: {
        //        warnings: false
        //    }
        //})

    ]

}

module.exports = config;