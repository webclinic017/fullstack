'use strict';
var _ = require('lodash');

module.exports = function () {
    var envConfig = require('./get_env_config').envConfig;
    var company_name = envConfig.company_name;
    var url_path = envConfig.url_path;
    var companyConfig = {};
    var date = require('./tools').date;
    var app_version = company_name == 'tigerwit' ? 'global' : 'pandafx';
    // var versionAndroidApp = require('./app_ctrl.config').getAppInfo(app_version)['cn'].android.app_info.url;
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
            es:"TigerWit",
            'pt-BR': 'TigerWit',
            "ar": "TigerWit"
        },
        companyZhName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit",
            'pt-BR': 'TigerWit',
            'ar': 'TigerWit'
        },
        companyEnName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit",
            'pt-BR': 'TigerWit',
            'ar': 'TigerWit'
        },
        title:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit",
            es:"TigerWit",
            'pt-BR': 'TigerWit',
            'ar': 'TigerWit'
        },
        webSite:{
            zh:"www.tigerwit.com",
            en:"www.tigerwit.com",
            vi:"www.tigerwit.com",
            "zh-Hant":"www.tigerwit.com",
            id:"www.tigerwit.com",
            es:"www.tigerwit.com",
            'pt-BR': 'www.tigerwit.com',
            'ar': 'www.tigerwit.com'
        },
        webMt4Download:{
            zh:"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            en:"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            vi:"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            "zh-Hant":"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            id:"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            es:"https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            'pt-BR': 'https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe',
            'ar': 'https://dlmt4.uytregfds.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe'
        },
        // androidApp: {
        //     zh: versionAndroidApp,
        //     en: versionAndroidApp,
        //     vi: versionAndroidApp,
        //     "zh-Hant": versionAndroidApp,
        //     id: versionAndroidApp,
        //     es: versionAndroidApp,
        //     'pt-BR': versionAndroidApp,
        //     'ar': versionAndroidApp
        // },
        download:{
            zh:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            en:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            vi:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            "zh-Hant":"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            id:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            es:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            'pt-BR': 'http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex',
            'ar': 'http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex'
        },
        downloadGlobalIos:{
            //http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton
            zh:"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            en:"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            vi:"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            "zh-Hant":"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            id:"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            es:"https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1",
            'pt-BR': 'https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1',
            'ar': 'https://apps.apple.com/us/app/tigerwit/id1448002193?l=zh&ls=1'
        },
        // downloadCnIos:{
        //     zh:"https://itunes.apple.com/cn/app/id1091437876",
        //     en:"https://itunes.apple.com/cn/app/id1091437876",
        //     vi:"https://itunes.apple.com/cn/app/id1091437876",
        //     "zh-Hant":"https://itunes.apple.com/cn/app/id1091437876",
        //     id:"https://itunes.apple.com/cn/app/id1091437876",
        //     es:"https://itunes.apple.com/cn/app/id1091437876",
        //     'pt-BR': 'https://itunes.apple.com/cn/app/id1091437876',
        //     'ar': 'https://itunes.apple.com/cn/app/id1091437876'
        // },
        downloadCnIos:{
            zh:"https://testflight.apple.com/join/7f18qRXE",
            en:"https://testflight.apple.com/join/7f18qRXE",
            vi:"https://testflight.apple.com/join/7f18qRXE",
            "zh-Hant":"https://testflight.apple.com/join/7f18qRXE",
            id:"https://testflight.apple.com/join/7f18qRXE",
            es:"https://testflight.apple.com/join/7f18qRXE",
            'pt-BR': 'https://testflight.apple.com/join/7f18qRXE',
            'ar': 'https://testflight.apple.com/join/7f18qRXE'
        },
        downloadGlobalAndroid:{
            //http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex
            zh:"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            en:"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            vi:"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            "zh-Hant":"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            id:"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            es:"https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            'pt-BR': 'https://play.google.com/store/apps/details?id=com.tigerwit.forex',
            'ar': 'https://play.google.com/store/apps/details?id=com.tigerwit.forex'
        },
        downloadGlobalApp:{
            zh: "/m/blank?system=global",
            en: "/m/blank?system=global",
            vi: "/m/blank?system=global",
            "zh-Hant": "/m/blank?system=global",
            "id": "/m/blank?system=global",
            es: "/m/blank?system=global",
            'pt-BR': '/m/blank?system=global',
            'ar': '/m/blank?system=global'
        },
        downloadCnApp:{
            zh: "/m/blank?system=cn",
            en: "/m/blank?system=cn",
            vi: "/m/blank?system=cn",
            "zh-Hant": "/m/blank?system=cn",
            "id": "/m/blank?system=cn",
            es: "/m/blank?system=cn",
            'pt-BR': '/m/blank?system=cn',
            'ar': '/m/blank?system=cn'
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
    // 复活节活动 只有中英文
    var resurrection = replaceTiger(require('./mutilang/resurrection'))

    return _.merge(
        data,
        lang_data,
        faq,
        mInvite,
        resurrection
    );
}; 
