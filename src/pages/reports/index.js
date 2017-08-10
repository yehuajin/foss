/**
 * Created by YEHUAJIN on 2017/7/27.
 */
import React from 'react'
import LeftNav from '../../components/leftNav/leftNav.js';
import Content from '../../components/content/content.js';
import { connect } from 'react-redux'

class Index extends React.Component{
    static propTypes = {
        navList: React.PropTypes.array
    }
    static childContextTypes = {
        leftActive: React.PropTypes.string
    }
    getChildContext(){
        return {
            leftActive: this.props.navList ? this.props.navList[0].leftActive : ''
        }
    }

    render () {
        return (
            <div>
                <LeftNav />
                <Content />
            </div>
        )
    }
}

const getNavList = state => {
    return {
        navList: state.navList.navList
    }
}

export default connect(getNavList)(Index)
