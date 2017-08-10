/**
 * Created by fulv on 2017/6/27.
 */
import React from 'react'

class Tool extends React.Component {
    static paramHandle(obj){
        let str = '';
        if(obj){
            for(let o in obj){
                str += ('&' + o + '=' + obj[o])
            }
        }
        return str.substring(1);
    }

}

export default Tool
