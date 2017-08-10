/**
 * Created by YEHUAJIN on 2017/6/27.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const AppRoutes = require('./appRouter.js');



function initProject() {
    var content = document.getElementById('appdiv');//获取模板页面上的元素
    //将组建插入到对应的dom节点上
    ReactDOM.render(
        AppRoutes,
        content
    )
}
initProject();