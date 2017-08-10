/**
 * Created by YEHUAJIN on 2017/6/27.
 */
import React from 'react'
import classnames from 'classnames';
import './header.less'

class Header extends React.Component{
    static propTypes = {
        hideHeader: React.PropTypes.string
    }

    render () {

        return (
            <div className = {classnames('foss-header wd-100 f12 gray-333 min-width', this.props.hideHeader)} >
                <div className="foss-name-img"></div>
                <div className="foss-header-text">
                    当前工作日：
                    <span className="tx-red">2017-07-24</span>
                </div>
                <div className="foss-header-text">
                    <div className="welcomebox">
                        <span className="welcome">欢迎您，管理员</span>
                    </div>
                </div>
                <div className="foss-header-text">
                    IT值班人员：
                    <span className="tx-red">朱洪/刘欢</span>
                </div>
                <div className="foss-header-text">
                    电话：
                    <span className="tx-red">15618762915/15618762916</span>
                </div>
                <div className="hg-100 fr">
                    <a className="crLink cr-1">改密</a>
                    <a className="crLink cr-2">退出</a>
                </div>
            </div>
        )
    }
}
export default Header
