'use strict';
var _ = require('lodash');

module.exports = function () {
    var envConfig = require('./get_env_config').envConfig;
    var company_name = envConfig.company_name;
    var url_path = envConfig.url_path;
    var companyConfig = {};
    var date = require('./tools').date;
    var app_version = company_name == 'tigerwit' ? 'global' : 'pandafx';
    var versionAndroidApp = require('./app_ctrl.config').getAppInfo(app_version)['cn'].android.app_info.url;
    var imagePath = require('./mutilang/imagePath');

    var data = {
        // image path
        image: imagePath,

        companyNickName:{
            zh:"小老虎",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"小老虎",
            id:"TigerWit",
            es:"TigerWit"
        },
        companyZhName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit"
        },
        companyEnName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit"
        },
        title:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit"
        },
        webSite:{
            zh:"www.tigerwit.com",
            en:"www.tigerwit.com",
            vi:"www.tigerwit.com",
            "zh-Hant":"www.tigerwit.com",
            id:"www.tigerwit.com",
            es:"www.tigerwit.com"
        },
        webMt4Download:{
            zh:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            en:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            vi:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            "zh-Hant":"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            id:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            es:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe"
        },
        androidApp: {
            zh: versionAndroidApp,
            en: versionAndroidApp,
            vi: versionAndroidApp,
            "zh-Hant": versionAndroidApp,
            id: versionAndroidApp,
            es: versionAndroidApp
        },
        download:{
            zh:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            en:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            vi:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            "zh-Hant":"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            id:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            es:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex"
        },
        downloadGlobalIos:{
            zh:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            en:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            vi:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            "zh-Hant":"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            id:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            es:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton"
        },
        downloadCnIos:{
            zh:"https://itunes.apple.com/cn/app/id1091437876",
            en:"https://itunes.apple.com/cn/app/id1091437876",
            vi:"https://itunes.apple.com/cn/app/id1091437876",
            "zh-Hant":"https://itunes.apple.com/cn/app/id1091437876",
            id:"https://itunes.apple.com/cn/app/id1091437876",
            es:"https://itunes.apple.com/cn/app/id1091437876"
        },
        downloadGlobalAndroid:{
            zh:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            en:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            vi:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            "zh-Hant":"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            id:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            es:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex"
        },
        downloadGlobalApp:{
            zh: "/m/blank?system=global",
            en: "/m/blank?system=global",
            vi: "/m/blank?system=global",
            "zh-Hant": "/m/blank?system=global",
            "id": "/m/blank?system=global",
            es: "/m/blank?system=global"
        },
        downloadCnApp:{
            zh: "/m/blank?system=cn",
            en: "/m/blank?system=cn",
            vi: "/m/blank?system=cn",
            "zh-Hant": "/m/blank?system=cn",
            "id": "/m/blank?system=cn",
            es: "/m/blank?system=cn"
        }
    };

    function replaceTiger(str) {
        return JSON.parse(
            JSON.stringify(str)
                .replace(/TigerWit/g, "TigerWit")
                .replace(/tigerwit/g, "TigerWit")
                .replace(/tigerWit/g, "TigerWit")
                .replace(/老虎外汇/g, "TigerWit")
                .replace(/老虎外匯/g, "TigerWit")
        )
    }

    // 处理faq相关字段
    var lang_data = replaceTiger(require('./mutilang/lang_data'))
    var faq = replaceTiger(require('./mutilang/faq'))
    // console.log(faq)
    // 邀请好友
    var mInvite = replaceTiger(require('./mutilang/mInvite'))

    return _.merge(
        data,
        lang_data,
        faq,
        mInvite
    );
}; 
