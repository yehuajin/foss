/**
 * Created by YEHUAJIN on 2017/8/3.
 */
import React from 'react'
import Table from '../table/table.js';
import Form from '../form/form.js';

class Content extends React.Component{
    render () {
        return (
            <div className = 'pl-p-190'>
                <Form />
                <Table />
            </div>
        )
    }
}

export default Content
