/**
 * Created by YEHUAJIN on 2017/8/3.
 */
import React from 'react'

class ChildItem extends React.Component{
    static propTypes = {
        classList: React.PropTypes.string,
        name: React.PropTypes.string
    }
    static contextTypes = {
        changeLeftActive: React.PropTypes.func
    }
    changeLeft(name){
        if(this.context.changeLeftActive){
            this.context.changeLeftActive(name);
        }
    }

    render(){
        return (
            <a className={this.props.classList} onClick = {this.changeLeft.bind(this, this.props.name)}>{this.props.name}</a>
        )
    }
}

export default ChildItem
