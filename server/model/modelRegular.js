'use strict';
// 获取配置公司信息
function getCompanyConfig () {
    var envConfig = require('./../get_env_config').envConfig;
    var company = envConfig.company_name;
    var oModelRegularCompany = require('./modelRegular_'+company);
    // console.log("regular=>"+company);
    return oModelRegularCompany;
}

module.exports = function () {
    return {
        //定期跟单团队对应的历史交易图标
        a_history_images : getCompanyConfig().getHistoryImages(),   
        // 定期跟单产品列表
        products : getCompanyConfig().getProducts(),

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
            if(product.start_date_appoint){
                desc = product.start_date_appoint + ' - ' + product.end_date_appoint;
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
        },
        getAppointCountdownTime: function (product) {  //获取预约倒计时时间
            var countdownInfo = {   // 倒计时信息
                "type": 1,       // 倒计时类型（satrt -> 开始预约，end -> 结束预约, over -> 预约结束）
                "time": 0             // 倒计时时间
            };

            if (product.start_date_appoint) {   // 存在开始预约时间 start_date_appoint
                var now = new Date();
                var startAppoint = new Date(product.start_date_appoint);
                var endAppoint = new Date(product.end_date_appoint);

                if(now < startAppoint){   //开始预约前
                    countdownInfo = {
                        type: 2,
                        time: startAppoint.getTime() - now.getTime()
                    };
                } else if (now < endAppoint){
                    countdownInfo = {
                        type: 3,
                        time: endAppoint.getTime() - now.getTime()
                    };
                }
            }

            return countdownInfo;
        }
    }
};
