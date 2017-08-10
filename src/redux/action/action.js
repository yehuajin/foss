/**
 * Created by YEHUAJIN on 2017/6/28.
 */
//import fetch from 'isomorphic-fetch'
//import utils from '../../utils/tool.js'
export const NAV_DATA = 'NAV_DATA'
export const GET_FORM_DATA = 'GET_FORM_DATA'


//初始化数据
const getNavData = (navList, name)=>{
    return {
        type: NAV_DATA,
        json: navList,
        name: name
    }
}

const receivePosts = (json, name)=>{
    return {
        type: GET_FORM_DATA,
        fromDate: json,
        name: name
    }
}

//初始化nav数据
export const initNavList = (navList, name) => {
    return dispatch => {dispatch(getNavData(navList, name))};
}

//表单数据请求
export const getTableData = (target, url, postDate, name) => {
    //let path = target + url;
    return dispatch => {
        let json = {"total": 5212.0, "totalNum": 522, "currPage": "1", "s_honourdate": "", "productid": "", "data": [{"dfzt": "已兑付", "title": "北京房产抵押贷（1605）", "e_anddraw": "2017-07-28", "totallimit": 10000000.00, "productid": "9143", "honourdate": "20170729", "s_anddraw": "2017-04-20", "capitalid": "3304", "totalprofit": 1738.42, "sellmoney": 0.00, "duifudate": "20170729", "productname": "WT9143期"}, {"dfzt": "未兑付", "title": "友财泰山1号精选基金-桑尼能源股权", "e_anddraw": "20170627000000", "totallimit": 2900000.00, "productid": "2190", "s_anddraw": "20150629000000", "capitalid": "399", "totalprofit": 20.00, "duifudate": "20170628", "productname": "光伏应用龙头企业稀缺股权投资项目"}, {"dfzt": "未兑付", "title": "友财泰山1号精选基金-桑尼能源股权", "e_anddraw": "20170627000000", "totallimit": 100000.00, "productid": "2252", "s_anddraw": "20150629000000", "capitalid": "399", "totalprofit": 7.00, "duifudate": "20170628", "productname": "光伏应用龙头企业稀缺股权投资项目"}, {"dfzt": "未兑付", "title": "北京天星资本股权质押收益转让回购-3", "e_anddraw": "2017-06-26", "totallimit": 5000000.00, "productid": "5668", "honourdate": "20170627", "s_anddraw": "2016-09-30", "capitalid": "2339", "totalprofit": 37602.84, "duifudate": "20170627", "productname": "WT5668期"}, {"dfzt": "未兑付", "title": "北京天星资本股权质押收益转让回购-3", "e_anddraw": "2017-06-26", "totallimit": 5000000.00, "productid": "5669", "honourdate": "20170627", "s_anddraw": "2016-09-30", "capitalid": "2339", "totalprofit": 37602.84, "duifudate": "20170627", "productname": "WT5669期"}, {"dfzt": "未兑付", "title": "北京天星资本股权质押收益转让回购-3", "e_anddraw": "2017-06-26", "totallimit": 1074200.00, "productid": "5670", "honourdate": "20170627", "s_anddraw": "2016-09-30", "capitalid": "2339", "totalprofit": 8078.84, "duifudate": "20170627", "productname": "WT5670期"}, {"dfzt": "未兑付", "title": "股转贷资产（1046）", "e_anddraw": "2017-06-23", "totallimit": 2500000.00, "productid": "4937", "honourdate": "20170624", "s_anddraw": "2016-06-24", "capitalid": "1865", "totalprofit": 108903.87, "duifudate": "20170624", "productname": "WT4937期"}, {"dfzt": "未兑付", "title": "股转贷资产（1046）", "e_anddraw": "2017-06-23", "totallimit": 2500000.00, "productid": "4938", "honourdate": "20170624", "s_anddraw": "2016-06-24", "capitalid": "1865", "totalprofit": 108903.87, "duifudate": "20170624", "productname": "WT4938期"}, {"dfzt": "未兑付", "title": "股转贷资产（1046）", "e_anddraw": "2017-06-23", "totallimit": 2500000.00, "productid": "4939", "honourdate": "20170624", "s_anddraw": "2016-06-24", "capitalid": "1865", "totalprofit": 108903.87, "duifudate": "20170624", "productname": "WT4939期"}, {"dfzt": "未兑付", "title": "股转贷资产（1046）", "e_anddraw": "2017-06-23", "totallimit": 2500000.00, "productid": "4940", "honourdate": "20170624", "s_anddraw": "2016-06-24", "capitalid": "1865", "totalprofit": 108903.87, "duifudate": "20170624", "productname": "WT4940期"}], "pageSize": "10", "capitalid": "", "e_honourdate": ""};
        dispatch(receivePosts(json, name))
        //return fetch(path, {
        //    method: 'POST',
        //    mode: 'cors',
        //    'Content-Type': 'application/x-www-form-urlencoded',
        //    body: utils.paramHandle(postDate)
        //}).then(response => {
        //        if (response.ok) {
        //            response.json().then(json => dispatch(receivePosts(json, name)))
        //        } else {
        //            console.log("status", response.status);
        //        }
        //    }).catch(error => console.log(error))
    }
}
export const resetTableData = (name) => {
    return dispatch => {
        let json = '';
        dispatch(receivePosts(json, name))
    }
}



