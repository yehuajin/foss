var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

//定义地址
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_PLUG = path.resolve(ROOT_PATH, 'plugin'); //__dirname 中的plugin目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app.js'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, '/dist'); //发布文件所存放的目录


module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            path.resolve(__dirname, 'src/app.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js?'+ new Date().getTime()
    },
    module: {
        loaders: [{
            test: /\.js|jsx$/,
            loader:'react-hot-loader!jsx-loader!babel-loader?stage=0',
            exclude: [path.resolve(__dirname, 'node_modules')]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
            exclude: [path.resolve(__dirname, 'node_modules')]
        },
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader!less-loader',
            exclude: [path.resolve(__dirname, 'node_modules')]
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader',
            exclude: [path.resolve(__dirname, 'node_modules')]
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=[name].[ext]',
            include: [APP_PATH, APP_PLUG]
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^(node_modules)$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            include: [APP_PATH, APP_PLUG]
        }
            ,
            {
            test: /(\.js|\.jsx)$/,
            loader: 'eslint-loader',
            include: [path.resolve(__dirname, 'src')],
            exclude: /(node_modules|src\\app.js|plugin|\.css$|\.less|\.scss$)/
        }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            //process.argv：当前进程的命令行参数数组。
            //process.env：指向当前shell的环境变量，比如process.env.HOME。
            'process.env': {
                NODE_ENV: JSON.stringify('development') //定义编译环境
            }
        }),
        new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: 'index.html', //生成的html存放路径，相对于 path
            template: path.resolve(__dirname, 'template/index.html'), //html模板路径
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.less', '.scss', '.css'] //后缀名自动补全
    }
};
