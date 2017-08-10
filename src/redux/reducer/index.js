/**
 * Created by YEHUAJIN on 2017/7/31.
 */
import Immutable from 'immutable'
import {NAV_DATA, GET_FORM_DATA} from '../action/action.js'


const defaultlState = Immutable.fromJS({})

//初始化导航数据
export const navList = (state = defaultlState, action = {}) => {
    switch(action.type){
        case NAV_DATA:
            state[action.name] = action.json;
            return Object.assign({}, state, action);
        default:
            return state
    }
}
//初始化导航数据
export const formDataList = (state = defaultlState, action = {}) => {
    switch(action.type){
        case GET_FORM_DATA:
            state[action.name] = action.fromDate;
            return Object.assign({}, state, action);
        default:
            return state
    }
}

