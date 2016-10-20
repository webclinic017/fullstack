module.exports = {

    //定期跟单团队对应的历史交易图标
    a_history_images : {
        "team_zhangwei" : [
            'https://www.tigerwit.com/images/ranklist/zhangwei1.f0fb6efd.jpg',
            'https://www.tigerwit.com/images/ranklist/zhangwei2.2b371b95.jpg'
        ],
        "team_huiying" : [
            'https://www.tigerwit.com/images/ranklist/huixin1.96e5ad45.jpg',
            'https://www.tigerwit.com/images/ranklist/huixin2.5dec193f.jpg',
            'https://www.tigerwit.com/images/ranklist/huixin3.60915e4a.jpg',
            'https://www.tigerwit.com/images/ranklist/huixin4.f0c9794f.jpg',
            'https://www.tigerwit.com/images/ranklist/huixin5.9ea1c956.jpg'
        ],
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
            id : "11",
            name : "【MACD月盈201610-01】",    //产品标题
            money_copy : "$2000-$10000",   //复制金额
            money_copy_low : 2000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : null, //实时年化收益率
            end_date_appoint : "2016.10.14 18:00", //预约结束时间
            start_date_trade : '2016.10.17 00:00',  //开始交易时间
            end_date_trade : "2016.11.17 00:00",  //结束交易时间  exam : '2016.5.19'
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
            id : "10",
            name : "【MACD月盈201609-01】",    //产品标题
            money_copy : "$2000-$10000",   //复制金额
            money_copy_low : 2000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : null, //实时年化收益率
            end_date_appoint : "2016.09.09 18:00", //预约结束时间
            start_date_trade : '2016.09.12 00:00',  //开始交易时间
            end_date_trade : "2016.10.12 00:00",  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_macd", //文件名，团队介绍模块
            jiafang:"MACD", //甲方，操盘手，出现在agree里
            progress : 73, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        {
            id : "9",
            name : "【汇赢全球月盈 201608-2】",    //产品标题
            money_copy : "$5000-$20000",   //复制金额
            money_copy_low : 5000,          // money_copy 的最低复制金
            money_copy_high : 20000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : null, //实时年化收益率
            end_date_appoint : "2016.08.31 18:00", //预约结束时间
            start_date_trade : '2016.09.01 00:00',  //开始交易时间
            end_date_trade : '2016.10.01 00:00',  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_huiying", //文件名，团队介绍模块
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            progress : 83, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%(客户在该次复制交易中盈利达到10%时，结算一次)",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        {
            id : "8",
            name : "【汇赢全球月盈 201608-1】",    //产品标题
            money_copy : "$5000-$20000",   //复制金额
            money_copy_low : 5000,          // money_copy 的最低复制金
            money_copy_high : 20000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : "0%", //实时年化收益率
            end_date_appoint : "2016.07.29 18:00", //预约结束时间
            start_date_trade : '2016.08.01 00:00',  //开始交易时间
            end_date_trade : '2016.09.01 00:00',  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_huiying", //文件名，团队介绍模块
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            progress : 100, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%(客户在该次复制交易中盈利达到10%时，结算一次)",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        {
            id : "7",
            name : "【汇赢全球月盈 201606-1】",    //产品标题
            money_copy : "$5000-$20000",   //复制金额
            money_copy_low : 5000,          // money_copy 的最低复制金
            money_copy_high : 20000,          // money_copy 的最高复制金
            money_copy_max : "$30万", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "20%",    //历史最高回撤
            profit_rate_wish : "60%",  //预期年化收益率
            profit_rate_now : "17.04%", //实时年化收益率
            end_date_appoint : "2016.07.15 18:00", //预约结束时间
            start_date_trade : '2016.07.18 00:00',  //开始交易时间
            end_date_trade : '2016.08.18 00:00',  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_huiying", //文件名，团队介绍模块
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            progress : 100, //投资进度 exam:50
            desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
            desc_divide : "盈利金额的30%(客户在该次复制交易中盈利达到10%时，结算一次)",//报酬分成
            note : "无" //备注
            // spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
            // spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间     
        },
        // {
        //  id : "6",
        //  name : "【汇赢全球季盈 201604-1】",    //产品标题
        //  money_copy : "$5000-$20000",   //复制金额
        //  money_copy_max : "$100万", //最高复制金额 exam : '$4000'
        //  period : "3个月",      //复制封闭期
        //  withdraw_history : "25%",    //历史最高回撤
        //  profit_rate_wish : "60%",  //预期年化收益率
        //  profit_rate_now : null, //实时年化收益率
        //  end_date_appoint : "2017.07.12 18:00", //预约结束时间
        //  start_date_trade : '2017.07.13 00:00',  //开始交易时间
        //  end_date_trade : '2017.10.13 00:00',  //结束交易时间  exam : '2016.5.19'
        //  team_intro : "team_huiying", //文件名，团队介绍模块
        //  jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
        //  progress : 15, //投资进度 exam:50
        //  desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的15%时触发预警；亏损达到账户初始资金的20%时触发熔断，交易将会停止一周，一周后再开始交易；账户的清盘线设置在亏损30%。", //风险控制
        //  desc_divide : "盈利金额的30%",//报酬分成
        //  note : "无", //备注
        //  spe_desc_time : "即日起至预约总金额达到$50W",//特殊产品的进展状态
        //  spe_desc_trade : "预约总金额达到$50W后第二个交易日"//特殊产品的交易时间        
        // },
        // {
        //  id : "5",           
        //  name : "【汇赢全球年盈 201604-1】",    //产品标题
        //  money_copy : "$30000-$100000",   //复制金额
        //  money_copy_max : "$500万", //最高复制金额 exam : '$4000'
        //  period : "1年",      //复制封闭期
        //  withdraw_history : "25%",    //历史最高回撤
        //  profit_rate_wish : "60%~80%",  //预期年化收益率
        //  profit_rate_now : null, //实时年化收益率
        //  end_date_appoint : "2017.07.12 18:00", //预约结束时间
        //  start_date_trade : '2017.07.13 00:00',  //开始交易时间
        //  end_date_trade : '2018.07.13 00:00',  //结束交易时间  exam : '2016.5.19'
        //  jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
        //  team_intro : "team_huiying", //文件名，团队介绍模块
        //  desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的30%时触发预警；亏损达到账户初始资金的40%时触发熔断，交易将会停止一周，一周后再开始交易；账户的清盘线设置在亏损50%；账户亏损的部分，投资人承担30%，汇赢团队承担70%", //风险控制
        //  desc_divide : "盈利金额的40%",//报酬分成
        //  note : "无", //备注
        //  progress : 7, //投资进度 exam:50
        //  spe_desc_time : "即日起至预约总金额达到$50W",//特殊产品的进展状态
        //  spe_desc_trade : "预约总金额达到$50W后第二个交易日"//特殊产品的交易时间            
        // },
        {
            id : "4",           
            //require
            name : "【Elephant(Forex Management)】",    //产品标题
            money_copy : "$100000",   //复制金额   exam:'$10000'
            money_copy_low : 100000,          // money_copy 的最低复制金
            money_copy_high : 100000,          // money_copy 的最高复制金
            money_copy_max : "", //最高复制金额 exam : '$4000'
            period : "1个月",      //复制封闭期
            withdraw_history : "30%",    //历史最高回撤
            profit_rate_wish : "120%",  //预期年化收益率
            profit_rate_now : "128%", //实时年化收益率
            end_date_appoint : "2016.05.16 18:00",  //预约结束时间 exam:'2016.5.17'
            start_date_trade : "2016.05.17 00:00",  //开始交易时间 exam:'2016.5.17'
            progress : 50 , //投资进度 exam:50
            jiafang:"张伟(主操盘手)", //甲方，操盘手，出现在agree里
            desc_risk : "动用的杠杆不超过7倍，亏损超过账户初始资金的30%时触发预警，交易平台自动强制平掉所有头寸，停止交易，客户可以赎回剩余资金。", //风险控制
            desc_divide : "客户收益的30%作为交易团队的收益报酬，由交易平台自动从用户账户余额中划转给交易团队。每个月的第一个交易日结算上个月的账户盈亏。",//报酬分成
            note : "客户完全自负盈亏，经纪商与交易团队不对客户损失的资产做任何赔偿。", //备注         
            //Optional
            end_date_trade : "2016.06.17 00:00",  //结束交易时间  exam : '2016.5.19'
            team_intro : "team_zhangwei", //文件名，团队介绍模块
            max_desc : "最多支持50名复制者"
        },
        {
            id : "3",
            //require
            name : "【汇赢全球周盈 201604-3】",    //产品标题
            money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
            money_copy_low : 3000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
            money_copy_max : "$33万", //最高复制金额 exam : '$4000'
            period : "1周",      //复制封闭期
            withdraw_history : "15%",    //历史最高回撤
            profit_rate_wish : "120%",  //预期年化收益率
            profit_rate_now : "0%", //实时年化收益率
            end_date_appoint : "2016.04.14 18:00",  //预约结束时间 exam:'2016.5.17'
            start_date_trade : "2016.04.25 00:00",  //开始交易时间 exam:'2016.5.17'
            progress : "100", //投资进度 exam:50
            jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
            desc_risk : "动用杠杆不超过10倍，亏损达到账户初始资金的15%时，停止交易.", //风险控制
            desc_divide : "无",//报酬分成
            note : "客户交易成本为欧元4个点。", //备注            
            team_intro : "team_huiying", //文件名，团队介绍模块
            //Optional
            profit_rate_last : "98%",//上期年化收益率
            end_date_trade : "2016.04.30 00:00"  //结束交易时间  exam : '2016.5.19'

        },  
        {
            id : "2",
            //require
            name : "【汇赢全球周盈 201604-2】",    //产品标题
            money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
            money_copy_low : 3000,          // money_copy 的最低复制金
            money_copy_high : 10000,          // money_copy 的最高复制金
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
        {
            id : "1",
            //require
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