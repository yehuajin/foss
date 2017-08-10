/**
 * Created by YEHUAJIN on 2017/7/25.
 */
import React from 'react'
import classnames from 'classnames';
import './leftNav.less'
import { connect } from 'react-redux'
import data from '../../data.js'
import {initNavList, resetTableData} from '../../redux/action/action.js'
import ChildItem from './childItem.js'

let mythis;
class LeftNav extends React.Component{
    static propTypes = {
        navList: React.PropTypes.array
    }
    static childContextTypes = {
        changeTitleActive: React.PropTypes.func,
        changeLeftActive: React.PropTypes.func
    }
    getChildContext(){
        return {
            changeTitleActive: this.changeTitleActive,
            changeLeftActive: this.changeLeftActive
        }
    }
    componentDidMount(){//页面渲染完成时调用
        mythis = this;
    }

    changeTitleActive(titleName, leftName){
        if(data.navList[0].titleActive === titleName){
            data.navList[0].titleActive = '';
        }else{
            mythis.props.resetTableData('fromData');
            data.navList[0].leftActive = leftName;
            data.navList[0].titleActive = titleName;
        }
        let list = JSON.parse(JSON.stringify(data.navList))
        mythis.props.initNavList(list, 'navList');
    }
    changeLeftActive(leftName){
        mythis.props.resetTableData('fromData');
        data.navList[0].leftActive = leftName;
        let list = JSON.parse(JSON.stringify(data.navList))
        mythis.props.initNavList(list, 'navList');
    }
    render () {
        let itemList = [];
        if(this.props.navList){
            data[this.props.navList[0].leftItem].list.map((item, i)=>{
                itemList[i] = <Item pageName = {this.props.navList[0].leftActive} key={`list-${i}`} itemList = {item} active = {this.props.navList[0].titleActive}/>
            })
        }
        return (
            <div className="left-item-container f12 gray-333">
                <div className="item-list-container">
                    {this.props.navList ? data[this.props.navList[0].leftItem].title : ''}
                </div>
                {itemList}
            </div>
        )
    }
}
class Item extends React.Component{
    static propTypes = {
        itemList: React.PropTypes.array,
        active: React.PropTypes.string,
        pageName: React.PropTypes.string
    }
    static contextTypes = {
        changeTitleActive: React.PropTypes.func,
        pageName: React.PropTypes.string
    }

    changeTitle(titleName, leftName){
        if(this.context.changeTitleActive){
            this.context.changeTitleActive(titleName, leftName);
        }
    }

    render () {
        let itemList = [];
        this.props.itemList.map((item, i)=>{
            if(i !== 0){//默认第一个处于活动状态
                itemList[i] = <ChildItem key={`list-item-${i}`} classList = {this.props.pageName === item.name ? 'item-active list-item' : 'list-item'} name = {item.name} />
}
        })
        return (
            <div className = {classnames('list-container', this.props.active === this.props.itemList[0].name ? 'list-active' : '')}>
                <a className="list-title" onClick={this.changeTitle.bind(this, this.props.itemList[0].name, this.props.itemList[1].name)}>
                    {this.props.itemList[0].name}
                </a>
                {itemList}
            </div>
        )
    }
}

const getNavList = state => {
    return {
        navList: state.navList.navList
    }
}

export default connect(getNavList, {initNavList, resetTableData})(LeftNav)
