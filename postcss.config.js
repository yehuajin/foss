/**
 * Created by YEHUAJIN on 2017/6/27.
 */
module.exports = {//自动在浏览器中加前缀
    plugins: [
        require('autoprefixer')({
            browsers: ["last 5 versions"]
        })
    ]
}