/**
 * Created by YEHUAJIN on 2017/8/3.
 */
import React from 'react'
import formdata from '../../formdata.js'
import Date from '../../../plugin/date/date.js'
import { connect } from 'react-redux'
import {getTableData} from '../../redux/action/action.js'
import './form.less'

let formDate;
let mythis;
class Form extends React.Component{
    static contextTypes = {
        leftActive: React.PropTypes.string
    }
    componentWillMount(){
        formDate = formdata[this.context.leftActive] || formdata['兑付流水']
    }
    componentDidMount(){
        mythis = this;
    }
    queryFormData(){
        let form = document.getElementById('queryForm');
        let commitDate = {};
        if(form && form.length){
            let len = form.length;
            for(let i = 0; i < len; i++){
                commitDate[form[i].name] = form[i].value;
            }
        }
        mythis.props.getTableData(formdata.target, formDate.url, commitDate, 'fromData');
    }
    render () {
        let trList = []
        formDate.queryData.map(function(item, i){
            trList[i] = <Tr key = {i} tdData = {item}/>
        })
        return (
            <div>
                <form className="queryForm" id="queryForm">
                    <div>
                        <table className='wd-100'>
                            <tbody>
                                {trList}
                            </tbody>
                        </table>
                        <div className="text-right mt">
                            <span>每页显示<input name="page-size" className="page-size" defaultValue={formdata.pageSize}/>条</span>
                            <span className="button" onClick={this.queryFormData.bind(this)}>查询</span>
                            <span className="button">导出</span>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

class Tr extends React.Component{
    static propTypes = {
        tdData: React.PropTypes.array
    }
    render () {
        let tdList = [];
        if(this.props.tdData){
            this.props.tdData.map(function(item, i){
                tdList[2 * i] = <td key = {2 * i}> {item.title}</td>
                if(item.type === 'date'){
                    tdList[2 * i + 1] = <td key = {2 * i + 1}> <Date name={item.name} type="date" id={item.name} /></td>
                }else{
                    tdList[2 * i + 1] = <td key = {2 * i + 1}> <input name={item.name} type={item.type} id={item.name} /></td>
                }
            })
        }
        return (
            <tr>
               {tdList}
            </tr>
        )
    }
}

export default connect(null, {getTableData})(Form)
