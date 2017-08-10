/**
 * Created by YEHUAJIN on 2017/8/3.
 */
module.exports = {
    target: process.env.NODE_ENV !== 'production' ? '' : 'http://foss2.91wutong.com', //目标网站
    pageSize: 10,
    '兑付流水': {
        url: '/foss/TradeReport/HP/qryPage.ajax',
        queryData: [
            [{title: '开始日期：', name: 's_honourdate', type: 'date'},
            {title: '结束日期：', name: 'e_honourdate', type: 'date'},
            {title: '产品编号：', name: 'productid', type: 'text'},
            {title: '资产编号：', name: 'capitalid', type: 'text'}]//四个查询数据放在一个数组中
        ],
        list: [
            {name: '产品编号', field: 'productid'}, {name: '产品名称', field: 'productname'},
            {name: '关联资产名称', field: 'title'}, {name: '总金额', field: 'totallimit'},
            {name: '卖出金额', field: 'sellmoney'}, {name: '派息金额', field: 'totalprofit'},
            {name: '计息开始', field: 's_anddraw'}, {name: '计息结束', field: 'e_anddraw'},
            {name: '兑付日', field: 'honourdate'}, {name: '兑付状态', field: 'dfzt'}
        ]
    },
    '批量注册': {

    }
}
