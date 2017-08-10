/**
 * Created by YEHUAJIN on 2017/8/3.
 */
import React from 'react'
import formdata from '../../formdata.js'
import { connect } from 'react-redux'
import {getTableData} from '../../redux/action/action.js'
import './table.less'

let formDate;
class Table extends React.Component{
    static propTypes = {
        getfromData: React.PropTypes.object
    }
    static contextTypes = {
        leftActive: React.PropTypes.string
    }

    componentWillMount(){
        formDate = formdata[this.context.leftActive] || formdata['兑付流水']
    }


    render () {

        let HeaderList = [];
        if(formDate && formDate.list){
            formDate.list.map(function(item, i){
                HeaderList[i] = <th key = {i}>{item.name}</th>
            })
        }
        let bodyList = [];
        if(this.props.getfromData){
            this.props.getfromData.data.map(function(item, i){
                bodyList[i] = <Tr key = {i} tdData = {item} />
            })
        }
        return (
            <div className="mt mb-6">
                <form>
                    <div>
                        <table className="table_2 wd-100">
                            <tbody>
                                <tr>
                                {HeaderList}
                                </tr>
                            </tbody>
                            <tbody>
                            {bodyList}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        )
    }
}

class Tr extends React.Component{
    static propTypes = {
        tdData: React.PropTypes.object
    }
    render () {
        let tdList = [];
        if(this.props.tdData && formDate){
            formDate.list.map((item, i)=>{
                tdList[i] = <td key = {2 * i + 1}>{this.props.tdData[item.field]}</td>
            })
        }
        return (
            <tr>
            {tdList}
            </tr>
        )
    }

}

const tableData = state => {
    return {
        getfromData: state.formDataList.fromData
    }
}
export default connect(tableData, {getTableData})(Table)
