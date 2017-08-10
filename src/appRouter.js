/**
 * Created by YEHUAJIN on 2017/6/27.
 */
import React from 'react'
import {Route, Router, Redirect, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import BasePage from './pages/basePage.js';
import store from './redux/store/store.js';
import Index from './pages/reports/index.js';

let menulist = [];

function addMenu(list) {
    list.forEach(function (menu, index) {
        if (menu.component) {
            menulist.push(
                <Route key={index} path={menu.path} component={menu.component}/>
            );
        }
    });
}

require('./appMenulist').forEach(function (list) {//将所有的页面放到路由里
    addMenu(list);
});

const AppRoutes = (
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route indexRoute={{component: Index}} component={BasePage}>
                {menulist}
                <Redirect from='*' to='/reports/index' />
            </Route>
        </Router>
    </Provider>
);

export default AppRoutes
