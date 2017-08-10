/**
 * Created by YEHUAJIN on 2017/6/27.
 */
//分模块设置页面路由，每个模块为一个数组
module.exports = [
    [
        {path: '/reports/index', component: require('./pages/reports/index.js')}
    ],
    [
        {path: '/home', component: require('./pages/home.js')}
    ]
];
