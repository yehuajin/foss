/**
 * Created by YEHUAJIN on 2017/8/4.
 */
import React from 'react'
require('./laydate/laydate.js')
import './laydate/need/laydate.css'
import './laydate/skins/dahong/laydate.css'
import './laydate/skins/default/laydate.css'
import './laydate/skins/molv/laydate.css'

class Date extends React.Component{
    static propTypes = {
        id: React.PropTypes.string,
        name: React.PropTypes.string
    }
    componentDidMount(){
        laydate({
            elem: '#' + this.props.id,
            format: 'YYYYMMDD',
            min: laydate.now(-730), //-1代表昨天，-2代表前天，以此类推
            max: laydate.now(+3650) //+1代表明天，+2代表后天，以此类推
        })
    }
    dateChange(){
        document.getElementById(this.props.id).value = ''
    }
    render () {
        return (
            <input onChange={this.dateChange.bind(this)} className="laydate-icon" id={this.props.id} name = {this.props.name}/>
        )
    }
}

export default Date
