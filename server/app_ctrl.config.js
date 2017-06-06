;(function(){    'use strict';    var envConfig = require('./get_env_config').envConfig;    var COMPANY_NAME = envConfig.company_name;        var currentVersionCode = 29;    var app_info = {        version_name : "V2.6.0",        // description : "1.独立“持仓”页面，查看交易数据一目了然。\n2.原“发现”页面内容整合为“帮助中心” \n3.充值功能优化，支持最低充值50美元 \n4.红包页面优化，过期红包、失效红包、已兑换红包归类至红包记录 \n5.高手交易数据优化 \n6.细节部分优化 \n7.已知问题修复\n如升级失败，请等候应用市场更新",        description: "本次更新\n1.优化注册/登录流程，注册流程更加便捷\n2.规范交易流程，认证审核通过后方可进行交易操作\n3.增加零钱包功能，高手分成与代理商佣金收益会存入零钱包，可以提现或划入交易账户\n4.复制高手资金最低降至$200\n5.已知问题修复\n最近更新\n优化支付功能，支持最高充值50000人民币（约7000美元）",        updated_description: "58%用户正在使用新版本",        // url : "https://www.tigerwit.com/downloads/apk/tigerwit_v2.5.0_tigerwit.apk",        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v2.6.0.apk",        force_update : false    };    if (COMPANY_NAME === 'pkds') {        currentVersionCode = 2;        app_info = {            version_name : "V1.0.1",            description : "",            url : "https://www.pkdsfx.com/downloads/apk/parkerdawson_v1.0.1.apk",            force_update : false        };     }    function getAppInfo(){        return app_info;    }    module.exports = {        currentVersionCode: currentVersionCode,        getAppInfo: getAppInfo    };    /*    * README    * 配置app下载及其版本信息    * 路由 action == "version_check" 会调用此模块    * */}());