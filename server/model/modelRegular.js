module.exports = {
	/*
		{
			//require
			name : "",    //产品标题
			desc : "",   //副标题，显示交易时间信息
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
			//Optional
			max_desc : "", //有该值时，替换最高复制金额
			end_date_trade : "",  //结束交易时间  exam : '2016.5.19'
		}	
	*/
	products : [
		{
			id : "7",
			name : "【老虎&汇赢季盈 201604-1】",    //产品标题
			desc : "预约复制时间：即日起至2016.06.12 18:00:00",    //副标题，显示交易时间信息
			money_copy : "$5000-$20000",   //复制金额
			money_copy_max : "$100万", //最高复制金额 exam : '$4000'
			period : "3个月",      //复制封闭期
			withdraw_history : "25%",    //历史最高回撤
			profit_rate_wish : "60%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2016.6.12 18:00:00", //预约结束时间
			start_date_trade : '2016.6.13 00:00:00',  //开始交易时间
			end_date_trade : '2016.09.12 23:59:59',  //结束交易时间  exam : '2016.5.19'
			progress : 7, //投资进度 exam:50
		},
		{
			id : "6",			
			name : "【老虎&汇赢年盈 201604-1】",    //产品标题
			desc : "预约复制时间：即日起至2016.06.12 18:00:00",    //副标题，显示交易时间信息
			money_copy : "$30000-$100000",   //复制金额
			money_copy_max : "$500万", //最高复制金额 exam : '$4000'
			period : "1年",      //复制封闭期
			withdraw_history : "25%",    //历史最高回撤
			profit_rate_wish : "60%~80%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2016.6.12 18:00:00", //预约结束时间
			start_date_trade : '2016.6.13 00:00:00',  //开始交易时间
			end_date_trade : '2017.06.12 23:59:59',  //结束交易时间  exam : '2016.5.19'
			progress : 2, //投资进度 exam:50
		},
		{
			id : "5",			
			//require
			name : "【老虎&Elephant(Forex Management)】",    //产品标题
			desc : "账户交易时间：2016.05.16结束预约",   //副标题，显示交易时间信息
			money_copy : "$100000",   //复制金额   exam:'$10000'
			money_copy_max : "", //最高复制金额 exam : '$4000'
			period : "1个月",      //复制封闭期
			withdraw_history : "30%",    //历史最高回撤
			profit_rate_wish : "120%",  //预期年化收益率
			profit_rate_now : "128%", //实时年化收益率
			end_date_appoint : "2016.5.17",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.5.17",  //开始交易时间 exam:'2016.5.17'
			progress : 10 , //投资进度 exam:50
			//Optional
			end_date_trade : "",  //结束交易时间  exam : '2016.5.19'
			max_desc : "最多支持50名复制者"
		},
		{
			id : "4",			
			//require
			name : "【老虎&汇赢周盈 201604-3】",    //产品标题
			desc : "账户交易时间：2016.04.25—2016.04.29",   //副标题，显示交易时间信息
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "120%",  //预期年化收益率
			profit_rate_now : "0%", //实时年化收益率
			end_date_appoint : "2016.04.14 18:00:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.04.25 00:00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			//Optional
			end_date_trade : "2016.04.29 23:59:59"  //结束交易时间  exam : '2016.5.19'
		},
		{
			id : "3",
			//require
			name : "【老虎&汇赢周盈 201604-3】",    //产品标题
			desc : "账户交易时间：2016.04.25—2016.04.29",   //副标题，显示交易时间信息
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "120%",  //预期年化收益率
			profit_rate_now : "0%", //实时年化收益率
			end_date_appoint : "2016.04.14 18:00:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.04.25 00:00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			//Optional
			end_date_trade : "2016.04.29 23:59:59"  //结束交易时间  exam : '2016.5.19'
		},	
		{
			id : "2",
			//require
			name : "【老虎&汇赢周盈 201604-2】",    //产品标题
			desc : "账户交易时间：2016.04.18—2016.04.22",   //副标题，显示交易时间信息
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "78%",  //预期年化收益率
			profit_rate_now : "98%", //实时年化收益率
			end_date_appoint : "2016.04.17 18:00:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.04.18 00:00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			//Optional
			end_date_trade : "2016.04.22 23:59:59"  //结束交易时间  exam : '2016.5.19'
		},										
		{
			id : "1",
			//require
			name : "【老虎&汇赢周盈 201604-1】",    //产品标题
			desc : "账户交易时间：2016.04.11—2016.04.15",   //副标题，显示交易时间信息
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "78%",  //预期年化收益率
			profit_rate_now : "805%", //实时年化收益率
			end_date_appoint : "2016.04.8 18:00:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.04.11 00:00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			//Optional
			end_date_trade : "2016.04.15 23:59:59"  //结束交易时间  exam : '2016.5.19'
		}
	],
	judgeStatus : function(product){
        var status = "not_start";   //还未开始，查看详情
        var now = new Date();
        if(now < new Date(product.end_date_appoint)){
            status = "appoint";   //可以预约
        }else{
            status = "not_appoint"; //未开始交易，但不预约
            if(now > new Date(product.start_date_trade)){
                status = "tradding";  //正在交易
            }
            if(now > new Date(product.end_date_trade)){
                status = "end_trade"; //交易结束                    
            }
        }
        return status;			
	},
	getProduct : function(id){
		var _product = null;
		this.products.forEach(function(product, index){
			if(product.id == id){
				_product = product;
			}
		});
		return _product;
	},
	getMaxDesc : function(product){
		return  (product.max_desc || "最高总复制金额：" + product.money_copy_max);
	}
};