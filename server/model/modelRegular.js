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
			id : "7",
			name : "【老虎&汇赢月盈 201606-1】",    //产品标题
			money_copy : "$5000-$20000",   //复制金额
			money_copy_max : "$30万", //最高复制金额 exam : '$4000'
			period : "1个月",      //复制封闭期
			withdraw_history : "20%",    //历史最高回撤
			profit_rate_wish : "60%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2016.07.15 18:00", //预约结束时间
			start_date_trade : '2016.07.18 00:00',  //开始交易时间
			end_date_trade : '2016.08.18 00:00',  //结束交易时间  exam : '2016.5.19'
			team_intro : "team_huiying", //文件名，团队介绍模块
			jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
			progress : 37, //投资进度 exam:50
			desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的10%时触发预警；亏损达到账户初始资金的15%时触发熔断，交易将会停止1-3天，然后再开始交易；账户的清盘线设置在亏损20%。", //风险控制
			desc_divide : "盈利金额的30%(客户在该次复制交易中盈利达到10%时，结算一次)",//报酬分成
			note : "无" //备注
			// spe_desc_time : "即日起至预约总金额达到$30W",//特殊产品的进展状态
			// spe_desc_trade : "预约总金额达到$30W后第二个交易日"//特殊产品的交易时间		
		},
		{
			id : "6",
			name : "【老虎&汇赢季盈 201604-1】",    //产品标题
			money_copy : "$5000-$20000",   //复制金额
			money_copy_max : "$100万", //最高复制金额 exam : '$4000'
			period : "3个月",      //复制封闭期
			withdraw_history : "25%",    //历史最高回撤
			profit_rate_wish : "60%",  //预期年化收益率
			profit_rate_now : null, //实时年化收益率
			end_date_appoint : "2017.07.12 18:00", //预约结束时间
			start_date_trade : '2017.07.13 00:00',  //开始交易时间
			end_date_trade : '2017.10.13 00:00',  //结束交易时间  exam : '2016.5.19'
			team_intro : "team_huiying", //文件名，团队介绍模块
			jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
			progress : 15, //投资进度 exam:50
			desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的15%时触发预警；亏损达到账户初始资金的20%时触发熔断，交易将会停止一周，一周后再开始交易；账户的清盘线设置在亏损30%。", //风险控制
			desc_divide : "盈利金额的30%",//报酬分成
			note : "无", //备注
			spe_desc_time : "即日起至预约总金额达到$50W",//特殊产品的进展状态
			spe_desc_trade : "预约总金额达到$50W后第二个交易日"//特殊产品的交易时间		
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
			end_date_appoint : "2017.07.12 18:00", //预约结束时间
			start_date_trade : '2017.07.13 00:00',  //开始交易时间
			end_date_trade : '2018.07.13 00:00',  //结束交易时间  exam : '2016.5.19'
			jiafang:"汇赢全球基金管理公司", //甲方，操盘手，出现在agree里
			team_intro : "team_huiying", //文件名，团队介绍模块
			desc_risk : "动用杠杆不超过10倍；亏损达到账户初始资金的30%时触发预警；亏损达到账户初始资金的40%时触发熔断，交易将会停止一周，一周后再开始交易；账户的清盘线设置在亏损50%；账户亏损的部分，投资人承担30%，汇赢团队承担70%", //风险控制
			desc_divide : "盈利金额的40%",//报酬分成
			note : "无", //备注
			progress : 7, //投资进度 exam:50
			spe_desc_time : "即日起至预约总金额达到$50W",//特殊产品的进展状态
			spe_desc_trade : "预约总金额达到$50W后第二个交易日"//特殊产品的交易时间			
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
			name : "【老虎&汇赢周盈 201604-3】",    //产品标题
			money_copy : "$3000-$10000",   //复制金额   exam:'$10000'
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
			name : "【老虎&汇赢周盈 201604-2】",    //产品标题
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
		if(product.spe_desc_time){
			desc = "预约复制时间：" + this.getAppointTime(product);
		}		
		return desc;
	},
	getAppointTime : function(product){
		var desc = "";
		if(product.end_date_appoint){
			desc = "即日起至" + product.end_date_appoint;
		}
		if(product.spe_desc_time){
			desc = product.spe_desc_time;
		}
		return desc;
	},
	getTradeTime : function(product){
		var desc = "";
		if(product.start_date_trade){
			desc += product.start_date_trade;
		}
		if(product.end_date_trade){
			desc += ' - ' +  product.end_date_trade;
		}
		if(product.spe_desc_trade){
			desc = product.spe_desc_trade;
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
	},
	getTeamHtmlName : function(team_intro){
		//regular_detail_team_huiying.html
		return "m_regular_detail_" + (team_intro || "");
	},
	getTeamHistoryImages : function(team_intro){
		var aImages = this.a_history_images[team_intro] || [];
		return aImages;
	}
};