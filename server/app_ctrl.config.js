;(function(){    'use strict';    var envConfig = require('./get_env_config').envConfig;    var COMPANY_NAME = envConfig.company_name;        var currentVersionCode = 23;    var app_info = {        version_name : "V2.4.0",        description : "1.红包活动上线\n2.充值功能优化，支持更高限额支付方式\n3.其他已知问题修复\n如升级失败，请到应用市场更新最新版本",        updated_description: "62%用户正在使用新版本",        url : "https://www.tigerwit.com/downloads/apk/tigerwit_v2.4.0_JRTT.apk",        force_update : false    };    if (COMPANY_NAME === 'pkds') {        currentVersionCode = 2;        app_info = {            version_name : "V1.0.1",            description : "",            url : "https://www.pkdsfx.com/downloads/apk/parkerdawson_v1.0.1.apk",            force_update : false        };     }    function getAppInfo(){        return app_info;    }    module.exports = {        currentVersionCode: currentVersionCode,        getAppInfo: getAppInfo    };    /*    * README    * 配置app下载及其版本信息    * 路由 action == "version_check" 会调用此模块    * */}());