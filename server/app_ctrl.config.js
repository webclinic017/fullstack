;(function(){    'use strict';    var app_info = {        version_name : "V2.1.0",        description : "改版，体验更流畅",        url : "https://www.tigerwit.com/downloads/apk/tigerwit_v2.1.0.apk",        force_update : false    };    function getAppInfo(){        return app_info;    }    module.exports = getAppInfo;    /*    * README    * 配置app下载及其版本信息    * 路由 action == "version_check" 会调用此模块    * */}());