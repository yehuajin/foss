/**
 * Created by YEHUAJIN on 2017/7/24.
 */
import React from 'react';
import './navigation.less';
import { connect } from 'react-redux'
import {initNavList} from '../../redux/action/action.js'
import data from '../../data.js'


class Navigation extends React.Component{
    static propTypes = {
        navList: React.PropTypes.array,
        initNavList: React.PropTypes.func
    }
    componentWillMount() {
        this.props.initNavList(data.navList, 'navList');
    }

    ifActive(n, item){
        data.navList[0].navActive = n;
        data.navList[0].leftItem = item;
        data.navList[0].leftActive = data[item].list[0][1].name;
        data.navList[0].titleActive = data[item].list[0][0].name;
        let list = JSON.parse(JSON.stringify(data.navList))
        this.props.initNavList(list, 'navList');
    }
    render () {
        let navs = [];
        if(this.props.navList){
            this.props.navList.map((item, i)=>{
                if(i === 0){
                    return;
                }
                navs[i] = <li onClick={this.ifActive.bind(this, i, item.leftData)} key={i} className={i === this.props.navList[0].navActive ? 'link-active' : ''}>{item.name}</li>
            })
        }

        return (
            <ul className="min-width navBar white mv-px-5">
                {navs}
            </ul>
        )
    }
}
const getNavList = state => {
    return {
        navList: state.navList.navList
    }
}

export default connect(
    getNavList, {initNavList}
)(Navigation)
