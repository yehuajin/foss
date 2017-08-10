var webpack = require('webpack');
var express = require('express');
//var koa = require('koa');
var config = require('./webpack.config.hot.js');
var proxyMiddleware = require('http-proxy-middleware')

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	//publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	inline: true,
	progress: true,
	stats: {
		colors: true
	}
}));

//代理服务器
app.use('/foss', proxyMiddleware({
    target: 'http://foss2.91wutong.com',
    changeOrigin: true
}))

app.use(require('webpack-hot-middleware')(compiler));

//将其他路由，全部返回index.html
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

app.listen(8081, function() {
	console.log('正常打开8081端口')
});
