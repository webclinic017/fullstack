var envConfig = require('./../get_env_config').envConfig;
var URL_PATH = envConfig.url_path;
module.exports = {

    //定期跟单团队对应的历史交易图标
    a_history_images : {
        "team_zhangwei" : [
            URL_PATH + '/white_label/zhangwei1.jpg',
            URL_PATH + '/white_label/zhangwei2.jpg'
        ],
        "team_huiying" : [
            URL_PATH + '/white_label/huixin1.jpg',
            URL_PATH + '/white_label/huixin2.jpg',
            URL_PATH + '/white_label/huixin3.jpg',
            URL_PATH + '/white_label/huixin4.jpg',
            URL_PATH + '/white_label/huixin5.jpg'
        ],
        "team_macd" : [
            URL_PATH + '/white_label/MACD1.png'
        ]
    },  
    /*
        {
            //require
            name : "",    //产品标题
            money_copy : "",   //复制金额   exam:'$10000'
            money_copy_max : "", //最高复制金额 exam : '$4000'
            period : "",      //复制封闭期
            withdraw_history : "",    //历史最高回撤
            profit_rate_wish : "",  //预期年化收益率
            profit_rate_now : "", //实时年化收益率
            end_date_appoint : "",  //预约结束时间 exam:'2016.5.17'
            start_date_trade : "",  //开始交易时间 exam:'2016.5.17'
            progress : , //投资进度 exam:50
            jiafang:"", //甲方，操盘手，出现在agree里
            team_intro : "", //文件名，团队介绍模块
            desc_risk : "", //风险控制
            desc_divide : "",//报酬分成
            note : "", //备注
            //Optional
            max_desc : "", //有该值时，替换最高复制金额
            start_date_appoint : "", //开始预约时间 exam : "2016.5.12"
            end_date_trade : "",  //结束交易时间  exam : '2016.5.19'
            profit_rate_last : "",//上期年化收益率
            spe_desc_time : "",//特殊产品的进展状态
            spe_desc_trade : ""//特殊产品的交易时间
        }   
    */

    products : [
        
        {
            id : "12",
            name : "【lonfx月盈201611-01】",    //产品标题
            money_copy : "$2000-$10000",   //复制金额
            money_copy_low : 2000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : "0.00%", //实时年化收益率
            end_date_appoint : "2016.11.25 18:00", //预约结束时间
            start_date_trade : '2016.11.28 00:00',  //开始交易时间
            end_date_trade : "2016.12.28 00:00",  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_macd", //文件名，团队介绍模块
            jiafang:"MACD", //甲方，操盘手，出现在agree里
            progress : 22, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
    ],

    getHistoryImages: function () {
        return this.a_history_images;
    },
    getProducts: function () {
        return this.products;
    }
};