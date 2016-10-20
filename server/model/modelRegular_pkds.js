module.exports = {

    //定期跟单团队对应的历史交易图标
    a_history_images : {
        "team_macd" : [
            'https://www.tigerwit.com/images/ranklist/MACD1.139e7345.png'
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
            id : "1",
            name : "【MACD月盈201611-01】",    //产品标题
            money_copy : "$2000-$10000",   //复制金额
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : null, //实时年化收益率
            start_date_appoint : "2016.10.25 18:00", //预约开始时间
            end_date_appoint : "2016.10.31 18:00", //预约结束时间
            start_date_trade : '2016.11.01 00:00',  //开始交易时间
            end_date_trade : "2016.11.30 00:00",  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_macd", //文件名，团队介绍模块
            jiafang:"MACD", //甲方，操盘手，出现在agree里
            progress : 5, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        {
            id : "2",
            name : "【MACD月盈201611-01】",    //产品标题
            money_copy : "$2000-$10000",   //复制金额
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : null, //实时年化收益率
            start_date_appoint : "2016.10.12 18:00", //预约开始时间
            end_date_appoint : "2016.10.31 18:00", //预约结束时间
            start_date_trade : '2016.11.01 00:00',  //开始交易时间
            end_date_trade : "2016.11.30 00:00",  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_macd", //文件名，团队介绍模块
            jiafang:"MACD", //甲方，操盘手，出现在agree里
            progress : 5, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        {
            id : "3",
            //require
            name : "【汇赢全球周盈 201604-2】",    //产品标题
            money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
            money_copy_max : "$33万", //最高复制金额 exam : '$4000'
            period : "1周",      //复制封闭期
            withdraw_history : "15%",    //历史最高回撤
            profit_rate_wish : "78%",  //预期年化收益率
            profit_rate_now : "98%", //实时年化收益率
            end_date_appoint : "2016.04.17 18:00",  //预约结束时间 exam:'2016.5.17'
            start_date_trade : "2016.04.18 00:00",  //开始交易时间 exam:'2016.5.17'
            progress : "100", //投资进度 exam:50
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            team_intro : "team_huiying", //文件名，团队介绍模块
            desc_risk : "动用杠杆不超过10倍，亏损达到账户初始资金的15%时，停止交易.", //风险控制
            desc_divide : "无",//报酬分成
            note : "客户交易成本为欧元4个点。", //备注            
            //Optional
            profit_rate_last : "805%",//上期年化收益率
            end_date_trade : "2016.04.23 00:00"  //结束交易时间  exam : '2016.5.19'
        },   
    ],

    getHistoryImages: function () {
        return this.a_history_images;
    },
    getProducts: function () {
        return this.products;
    }
};