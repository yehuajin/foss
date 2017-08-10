/**
 * Created by YEHUAJIN on 2017/7/26.
 */
module.exports = {
    navList: [
        {navActive: 1, leftItem: 'zxgt', titleActive: '账户操作', leftActive: '账户注册'},
        {name: '直销柜台', leftData: 'zxgt'},
        {name: '资金管理', leftData: 'zjgl'},
        {name: '产品运营', leftData: 'cpyy'},
        {name: '市场运营', leftData: 'scyy'},
        {name: '组合管理', leftData: 'zhgl'},
        {name: '财务核算', leftData: 'cwhs'},
        {name: '高鸣财富', leftData: 'gmcf'},
        {name: '行政办公', leftData: 'xzbg'},
        {name: '客户管理', leftData: 'khgl'},
        {name: '系统管理', leftData: 'xtgl'}
    ],

    'zxgt': {//和navList的leftData值对应
        title: '直销柜台',
        list: [
            [
                {name: '账户操作', url: '/zxgt/index'},
                {name: '账户注册', url: '/zxgt/index'},
                {name: '批量注册', url: '/zxgt/index/page2'}],
            [
                {name: '交易查询', url: '/zxgt/index'},
                {name: '兑付流水', url: '/zxgt/index'},
                {name: '提现记录', url: '/zxgt/index/page2'}],
            [
                {name: '交易操作', url: '/zxgt/index'},
                {name: '余额上账', url: '/zxgt/index'},
                {name: '余额扣减', url: '/zxgt/index/page2'}]
        ]
    },
    'zjgl': {
        title: '资金管理',
        list: [
            [
                {name: '财务新增', url: '/zjgl/index'},
                {name: '平台三层', url: '/zjgl/index'},
                {name: '财务二层', url: '/zjgl/index/page2'}],
            [
                {name: '平台收支', url: '/zjgl/index'},
                {name: '平台收入', url: '/zjgl/index'},
                {name: '平台收入校准', url: '/zjgl/index/page2'}]
        ]
    },
    'cpyy': {
        title: '产品运营',
        list: [
            [
                {name: '银行存管', url: '/cpyy/index'},
                {name: '标的管理', url: '/cpyy/index'},
                {name: '标的资金查询', url: '/cpyy/index/page2'}],
            [
                {name: '大众资产管理', url: '/cpyy/index/page4'},
                {name: '资产列表', url: '/cpyy/index/page5'},
                {name: '产品列表', url: '/cpyy/index/page6'}]
        ]
    },
    'scyy': {
        title: '市场运营',
        list: [
            [
                {name: '市场运营', url: '/scyy/index'},
                {name: '市场运营', url: '/scyy/index'},
                {name: '市场运营1', url: '/scyy/index/page2'}],
            [
                {name: '市场运营1', url: '/scyy/index'},
                {name: '市场运营2', url: '/scyy/index'},
                {name: '市场运营3', url: '/scyy/index/page2'}]
        ]
    },
    'zhgl': {
        title: '组合管理',
        list: [
            [
                {name: '组合管理', url: '/zhgl/index'},
                {name: '组合管理', url: '/zhgl/index'},
                {name: '组合管理1', url: '/zhgl/index/page2'}],
            [
                {name: '组合管理1', url: '/zhgl/index'},
                {name: '组合管理2', url: '/zhgl/index'},
                {name: '组合管理3', url: '/zhgl/index/page2'}]
        ]
    },
    'cwhs': {
        title: '财务核算',
        list: [
            [
                {name: '财务核算', url: '/cwhs/index'},
                {name: '财务核算', url: '/cwhs/index'},
                {name: '财务核算1', url: '/cwhs/index/page2'}],
            [
                {name: '财务核算1', url: '/cwhs/index'},
                {name: '财务核算2', url: '/cwhs/index'},
                {name: '财务核算3', url: '/cwhs/index/page2'}]
        ]
    },
    'gmcf': {
        title: '高鸣财富',
        list: [
            [
                {name: '高鸣财富', url: '/gmcf/index'},
                {name: '高鸣财富1', url: '/gmcf/index'},
                {name: '高鸣财富2', url: '/gmcf/index/page2'}],
            [
                {name: '高鸣财富1', url: '/gmcf/index'},
                {name: '高鸣财富3', url: '/gmcf/index'},
                {name: '高鸣财富4', url: '/gmcf/index/page2'}]
        ]
    },
    'xzbg': {
        title: '行政办公',
        list: [
            [
                {name: '行政办公', url: '/xzbg/index'},
                {name: '行政办公', url: '/xzbg/index'},
                {name: '行政办公1', url: '/xzbg/index/page2'}],
            [
                {name: '行政办公1', url: '/xzbg/index'},
                {name: '行政办公2', url: '/xzbg/index'},
                {name: '行政办公3', url: '/xzbg/index/page2'}]
        ]
    },
    'khgl': {
        title: '客户管理',
        list: [
            [
                {name: '客户管理', url: '/khgl/index'},
                {name: '客户管理', url: '/khgl/index'},
                {name: '客户管理1', url: '/khgl/index/page2'}],
            [
                {name: '客户管理1', url: '/khgl/index'},
                {name: '客户管理2', url: '/khgl/index'},
                {name: '客户管理3', url: '/khgl/index/page2'}]
        ]
    },
    'xtgl': {
        title: '系统管理',
        list: [
            [
                {name: '系统管理', url: '/xtgl/index'},
                {name: '系统管理', url: '/xtgl/index'},
                {name: '系统管理1', url: '/xtgl/index/page2'}],
            [
                {name: '系统管理1', url: '/xtgl/index'},
                {name: '系统管理2', url: '/xtgl/index'},
                {name: '系统管理3', url: '/xtgl/index/index/page2'}]
        ]
    },
    //不显示头部的路径
    hideHeader: [
        '/home'
    ]

}

