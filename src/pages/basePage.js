/**
 * Created by YEHUAJIN on 2017/6/27.
 */
import React from 'react';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import Navigation from '../components/navigation/navigation.js';
import '../css/common.less';
import data from '../data.js'


class BasePage extends React.Component {
    static propTypes = {
        location: React.PropTypes.object,
        children: React.PropTypes.any
    }
    render() {
        let hideHeader = data.hideHeader.indexOf(this.props.location.pathname) !== -1;
        return (
            <div className="min-width">
                <Header hideHeader = {hideHeader ? 'hide' : ''} />
                <Navigation/>
                {this.props.children}
                <div className="cle"></div>
                <Footer />
            </div>

        );
    }
}

export default BasePage
