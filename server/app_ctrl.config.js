;(function(){    'use strict';    var envConfig = require('./get_env_config').envConfig;    var COMPANY_NAME = envConfig.company_name;        var currentVersionCode = 24;    var app_info = {        version_name : "V2.4.1",        // description : "1.独立“持仓”页面，查看交易数据一目了然。\n2.原“发现”页面内容整合为“帮助中心” \n3.充值功能优化，支持最低充值50美元 \n4.红包页面优化，过期红包、失效红包、已兑换红包归类至红包记录 \n5.高手交易数据优化 \n6.细节部分优化 \n7.已知问题修复\n如升级失败，请等候应用市场更新",        description: "如升级失败，请等候应用市场更新",        updated_description: "60%用户正在使用新版本",        // url : "https://www.tigerwit.com/downloads/apk/tigerwit_v2.5.0_tigerwit.apk",        url: "https://www.tigerwit.com/downloads/apk/tigerwit_v2.4.1_tigerwit.apk",        force_update : false    };    if (COMPANY_NAME === 'pkds') {        currentVersionCode = 2;        app_info = {            version_name : "V1.0.1",            description : "",            url : "https://www.pkdsfx.com/downloads/apk/parkerdawson_v1.0.1.apk",            force_update : false        };     }    function getAppInfo(){        return app_info;    }    module.exports = {        currentVersionCode: currentVersionCode,        getAppInfo: getAppInfo    };    /*    * README    * 配置app下载及其版本信息    * 路由 action == "version_check" 会调用此模块    * */}());