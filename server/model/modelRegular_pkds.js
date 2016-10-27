var URL_PATH = process.env.URL_PATH;
module.exports = {

    //定期跟单团队对应的历史交易图标
    a_history_images : {
        "team_huiying" : [
            URL_PATH + '/white_label/huixin1.jpg',
            URL_PATH + '/white_label/huixin2.jpg',
            URL_PATH + '/white_label/huixin3.jpg',
            URL_PATH + '/white_label/huixin4.jpg',
            URL_PATH + '/white_label/huixin5.jpg'
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
            name : "【汇赢全球周盈 201604-1】",    //产品标题
            money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
            money_copy_low : 3000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
            money_copy_max : "$33万", //最高复制金额 exam : '$4000'
            period : "1周",      //复制封闭期
            withdraw_history : "15%",    //历史最高回撤
            profit_rate_wish : "78%",  //预期年化收益率
            profit_rate_now : "805%", //实时年化收益率
            end_date_appoint : "2016.04.08 18:00",  //预约结束时间 exam:'2016.5.17'
            start_date_trade : "2016.04.11 00:00",  //开始交易时间 exam:'2016.5.17'
            progress : "100", //投资进度 exam:50
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            team_intro : "team_huiying", //文件名，团队介绍模块
            desc_risk : "动用杠杆不超过10倍，亏损达到账户初始资金的15%时，停止交易.", //风险控制
            desc_divide : "无",//报酬分成
            note : "客户交易成本为欧元4个点。", //备注            
            //Optional
            end_date_trade : "2016.04.16 00:00"  //结束交易时间  exam : '2016.5.19'
        } 
    ],

    getHistoryImages: function () {
        return this.a_history_images;
    },
    getProducts: function () {
        return this.products;
    }
};