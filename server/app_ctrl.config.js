;(function(){    'use strict';    var info = {        tigerwit: {            ios: {                app_info: {                    version_name : "V3.0.1",                    version : "V3.0.1",                    description: "新版本更新了服务协议；增加了电汇入金功能；提现银行卡管理功能优化。赶快更新享受新的交易体验！",                    updated_description: "70%的用户正在使用新版本",                    force_update : 1                }            },            android: {                currentVersionCode: 42,                app_info: {                    version_name : "V3.0.4",                    description: "本次更新：\n1.每日汇评功能上线，支持一键跟随挂单，用户可登录个人中心查看。\n2.细节功能优化",                    updated_description: "70%的用户正在使用新版本",                    url: "https://www.tigerwit.com/downloads/apk/tigerwit_v3.0.4.apk",                    force_update : false                }            }        },        pandafx: {            ios: {                app_info: {                    version_name : "",                    version : "",                    description: "",                    updated_description: "",                    force_update : 0                }            },            android: {                currentVersionCode: 18,                app_info: {                    version_name : "V1.5.4",                    description : "本次更新：\n1.优化支付；\n2.修复bug",                    updated_description: "68%的用户正在使用新版本",                    url : "https://pandafx.tigerwit.com/downloads/apk/pandafx_v1.5.4.apk",                    force_update : false                }            }        }    };    function getAppInfo(company){        return info[company];    }    module.exports = {        getAppInfo: getAppInfo    };    /*    * README    * 配置app下载及其版本信息    * 路由 action == "version_check" 会调用此模块    * */}());