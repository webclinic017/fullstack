module.exports = {
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
			//Optional
			max_desc : "", //有该值时，替换最高复制金额
			start_date_appoint : "", //开始预约时间 exam : "2016.5.12"
			end_date_trade : "",  //结束交易时间  exam : '2016.5.19'
		}	
	*/
	products : [
		{
			id : "6",
			name : "【老虎&汇赢季盈 201604-1】",    //产品标题
			money_copy : "$5000-$20000",   //复制金额
			money_copy_max : "$100万", //最高复制金额 exam : '$4000'
			period : "3个月",      //复制封闭期
			withdraw_history : "25%",    //历史最高回撤
			profit_rate_wish : "60%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2016.6.12 18:00", //预约结束时间
			start_date_trade : '2016.6.14 00:00',  //开始交易时间
			end_date_trade : '2016.9.13 00:))',  //结束交易时间  exam : '2016.5.19'
			team_intro : "team_huiying", //文件名，团队介绍模块
			jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
			progress : 10, //投资进度 exam:50
		},
		{
			id : "5",			
			name : "【老虎&汇赢年盈 201604-1】",    //产品标题
			money_copy : "$30000-$100000",   //复制金额
			money_copy_max : "$500万", //最高复制金额 exam : '$4000'
			period : "1年",      //复制封闭期
			withdraw_history : "25%",    //历史最高回撤
			profit_rate_wish : "60%~80%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2016.6.12 18:00", //预约结束时间
			start_date_trade : '2016.6.14 00:00',  //开始交易时间
			end_date_trade : '2017.6.13 00:00',  //结束交易时间  exam : '2016.5.19'
			jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
			team_intro : "team_huiying", //文件名，团队介绍模块
			progress : 5, //投资进度 exam:50
		},
		{
			id : "4",			
			//require
			name : "【老虎&Elephant(Forex Management)】",    //产品标题
			money_copy : "$100000",   //复制金额   exam:'$10000'
			money_copy_max : "", //最高复制金额 exam : '$4000'
			period : "1个月",      //复制封闭期
			withdraw_history : "30%",    //历史最高回撤
			profit_rate_wish : "120%",  //预期年化收益率
			profit_rate_now : "128%", //实时年化收益率
			end_date_appoint : "2016.5.17",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.5.17",  //开始交易时间 exam:'2016.5.17'
			progress : 50 , //投资进度 exam:50
			jiafang:"张伟(主操盘手)", //甲方，操盘手，出现在agree里
			//Optional
			end_date_trade : "2016.6.17",  //结束交易时间  exam : '2016.5.19'
			team_intro : "team_zhangwei", //文件名，团队介绍模块
			max_desc : "最多支持50名复制者"
		},
		{
			id : "3",
			//require
			name : "【老虎&汇赢周盈 201604-3】",    //产品标题
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "120%",  //预期年化收益率
			profit_rate_now : "0%", //实时年化收益率
			end_date_appoint : "2016.4.14 18:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.4.25 00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
			team_intro : "team_huiying", //文件名，团队介绍模块
			//Optional
			end_date_trade : "2016.04.30 00:00"  //结束交易时间  exam : '2016.5.19'
		},	
		{
			id : "2",
			//require
			name : "【老虎&汇赢周盈 201604-2】",    //产品标题
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "78%",  //预期年化收益率
			profit_rate_now : "98%", //实时年化收益率
			end_date_appoint : "2016.4.17 18:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.4.18 00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
			team_intro : "team_huiying", //文件名，团队介绍模块
			//Optional
			end_date_trade : "2016.4.23 00:00"  //结束交易时间  exam : '2016.5.19'
		},										
		{
			id : "1",
			//require
			name : "【老虎&汇赢周盈 201604-1】",    //产品标题
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
			money_copy_max : "$33万", //最高复制金额 exam : '$4000'
			period : "1周",      //复制封闭期
			withdraw_history : "15%",    //历史最高回撤
			profit_rate_wish : "78%",  //预期年化收益率
			profit_rate_now : "805%", //实时年化收益率
			end_date_appoint : "2016.4.8 18:00",  //预约结束时间 exam:'2016.5.17'
			start_date_trade : "2016.4.11 00:00",  //开始交易时间 exam:'2016.5.17'
			progress : "100", //投资进度 exam:50
			jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
			team_intro : "team_huiying", //文件名，团队介绍模块
			//Optional
			end_date_trade : "2016.4.16 00:00"  //结束交易时间  exam : '2016.5.19'
		}
	],
	//测试数据，各种状态
	// products : [
	// 	{
	// 		id : "7",
	// 		name : "【老虎&汇赢季盈 201604-1】",    //产品标题
	// 		desc : "预约复制时间：即日起至2016.06.12 18:00:00",    //副标题，显示交易时间信息
	// 		money_copy : "$5000-$20000",   //复制金额
	// 		money_copy_max : "$100万", //最高复制金额 exam : '$4000'
	// 		period : "3个月",      //复制封闭期
	// 		withdraw_history : "25%",    //历史最高回撤
	// 		profit_rate_wish : "60%",  //预期年化收益率
	// 		profit_rate_now : null, //实时年化收益率
	// 		end_date_appoint : "2016.6.12 18:00:00", //预约结束时间
	// 		start_date_trade : '2016.6.13 00:00:00',  //开始交易时间
	// 		end_date_trade : '2016.09.12 23:59:59',  //结束交易时间  exam : '2016.5.19'
	// 		team_intro : "team_huiying", //文件名，团队介绍模块
	// 		jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
	// 		progress : 7, //投资进度 exam:50
	// 		start_date_appoint : "2016.5.30 10:00:00"
	// 	},
	// 	{
	// 		id : "6",			
	// 		name : "【老虎&汇赢年盈 201604-1】",    //产品标题
	// 		desc : "预约复制时间：即日起至2016.06.12 18:00:00",    //副标题，显示交易时间信息
	// 		money_copy : "$30000-$100000",   //复制金额
	// 		money_copy_max : "$500万", //最高复制金额 exam : '$4000'
	// 		period : "1年",      //复制封闭期
	// 		withdraw_history : "25%",    //历史最高回撤
	// 		profit_rate_wish : "60%~80%",  //预期年化收益率
	// 		profit_rate_now : null, //实时年化收益率
	// 		end_date_appoint : "2016.6.12 18:00:00", //预约结束时间
	// 		start_date_trade : '2016.6.13 00:00:00',  //开始交易时间
	// 		end_date_trade : '2017.06.12 23:59:59',  //结束交易时间  exam : '2016.5.19'
	// 		jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
	// 		team_intro : "team_huiying", //文件名，团队介绍模块
	// 		progress : 2, //投资进度 exam:50
	// 		//start_date_appoint : "2016.5.10"

	// 	},
	// 	{
	// 		id : "5",			
	// 		//require
	// 		name : "【老虎&Elephant(Forex Management)】",    //产品标题
	// 		desc : "账户交易时间：2016.05.16结束预约",   //副标题，显示交易时间信息
	// 		money_copy : "$100000",   //复制金额   exam:'$10000'
	// 		money_copy_max : "", //最高复制金额 exam : '$4000'
	// 		period : "1个月",      //复制封闭期
	// 		withdraw_history : "30%",    //历史最高回撤
	// 		profit_rate_wish : "120%",  //预期年化收益率
	// 		profit_rate_now : "128%", //实时年化收益率
	// 		end_date_appoint : "2016.5.17",  //预约结束时间 exam:'2016.5.17'
	// 		start_date_trade : "2016.6.17",  //开始交易时间 exam:'2016.5.17'
	// 		progress : 10 , //投资进度 exam:50
	// 		jiafang:"张伟(主操盘手)", //甲方，操盘手，出现在agree里
	// 		//Optional
	// 		end_date_trade : "",  //结束交易时间  exam : '2016.5.19'
	// 		team_intro : "team_zhangwei", //文件名，团队介绍模块
	// 		max_desc : "最多支持50名复制者",
	// 		start_date_appoint : "2016.5.3"

	// 	},
	// 	{
	// 		id : "4",			
	// 		//require
	// 		name : "【老虎&汇赢周盈 201604-3】",    //产品标题
	// 		desc : "账户交易时间：2016.04.25—2016.04.29",   //副标题，显示交易时间信息
	// 		money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
	// 		money_copy_max : "$33万", //最高复制金额 exam : '$4000'
	// 		period : "1周",      //复制封闭期
	// 		withdraw_history : "15%",    //历史最高回撤
	// 		profit_rate_wish : "120%",  //预期年化收益率
	// 		profit_rate_now : "0%", //实时年化收益率
	// 		end_date_appoint : "2016.04.14 18:00:00",  //预约结束时间 exam:'2016.5.17'
	// 		start_date_trade : "2016.05.25 00:00:00",  //开始交易时间 exam:'2016.5.17'
	// 		progress : "100", //投资进度 exam:50
	// 		jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
	// 		team_intro : "team_huiying", //文件名，团队介绍模块
	// 		//Optional
	// 		end_date_trade : "2016.06.13 23:59:59"  //结束交易时间  exam : '2016.5.19'
	// 	},
	// 	{
	// 		id : "3",
	// 		//require
	// 		name : "【老虎&汇赢周盈 201604-3】",    //产品标题
	// 		desc : "账户交易时间：2016.04.25—2016.04.29",   //副标题，显示交易时间信息
	// 		money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
	// 		money_copy_max : "$33万", //最高复制金额 exam : '$4000'
	// 		period : "1周",      //复制封闭期
	// 		withdraw_history : "15%",    //历史最高回撤
	// 		profit_rate_wish : "120%",  //预期年化收益率
	// 		profit_rate_now : "0%", //实时年化收益率
	// 		end_date_appoint : "2016.04.14 18:00:00",  //预约结束时间 exam:'2016.5.17'
	// 		start_date_trade : "2016.04.25 00:00:00",  //开始交易时间 exam:'2016.5.17'
	// 		progress : "100", //投资进度 exam:50
	// 		jiafang:"赵海峰(主操盘手)", //甲方，操盘手，出现在agree里
	// 		team_intro : "team_huiying", //文件名，团队介绍模块
	// 		//Optional
	// 		end_date_trade : "2016.04.29 23:59:59"  //结束交易时间  exam : '2016.5.19'
	// 	}
	// ],	
	judgeStatus : function(product){
        var status;//预约开始前，查看详情
        var now = new Date();
        if(product.start_date_appoint && now < new Date(product.start_date_appoint)){   //开始预约前
        	status = "before_appoint";
        }else{
	        if(now < new Date(product.end_date_appoint)){ //开始预约
	            status = "start_appoint";  
	        }else{
	        	if(now < new Date(product.start_date_trade)){  //没开始交易
		            status = "end_appoint"; //未开始交易，但不预约
	        	}else{
		            if(now < new Date(product.end_date_trade)){
		                status = "tradding";  //正在交易
		            }else{
		            	status = "end_trade"; //交易结束
		            }
		        }
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
	},
	getTimeDesc : function(product){
		var status = this.judgeStatus(product);
		var desc = "";
		if(status == "before_appoint"){
			desc = "开放购买："+product.start_date_appoint;
		}
		if(status == "start_appoint"){
			desc = "预约复制时间：" + (product.start_date_appoint?product.start_date_appoint+' - ':"即日起至") + product.end_date_appoint;
		}
		if(status == "end_appoint"){
			desc = "预约已结束，敬请期待下一期";
		}
		if(status == "tradding" || status == "end_trade"){
			desc = "账户交易时间：" + product.start_date_trade + ' - ' + product.end_date_trade;
		}
		return desc;
	},
	getProfitText : function(product){
		var text = "";
		if(product.team_intro == "team_huiying"){
			text = "乙方无需向甲方支付委托费，";
		}
		if(product.team_intro == "team_zhangwei"){
			text = "乙方应将盈余部分按30%作为委托费支付给甲方，"
		}
		return text;
	}
};