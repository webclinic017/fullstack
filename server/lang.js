'use strict';

module.exports = function () {

    function Lang(req) {
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var clonedBaidu = envConfig.isCloned;
        var data = require('./lang_data.js')();
        var decideLang = require('./get_lang')(req).decideLang();
        var language = decideLang === 'cn' ? 'zh' : decideLang;
        function parseCookie(cookie){
            var cookies = {};
            if(!cookie){
                return cookies;
            };
            var list = cookie.split(';');
            for(let i = 0; i < list.length; i++){
                var pair = list[i].split('=');
                cookies[pair[0].trim()] = pair[1];
            }
            return cookies;
        }
        this.language = language;
        this.data = data;
        this.req = req;
        this.company_name = company_name;
        this.clonedBaidu = clonedBaidu;
        // 根据areaId大区显示({"key": "中国区","value": 1},{"key": "国际区","value": 2},{"key": "英国区","value": 3})
        this.areaId = parseCookie(req.headers.cookie).area_id;
        // console.log(this.areaId, 'areaId')
        // return this;         
    }
    Lang.prototype = {
        isEnglishArea: function () {
            /**
             * date: 2018.11.20
             * 判断语言环境使用此方法，若需要单独对某地区进行特殊处理，再另行添加方法。
             * 英语地区 en, vi
             * 非英语地区 cn, zh-Hant
             *  */
            var isEngArea = false;
            if (this.language !== 'zh' && this.language !== 'zh-Hant') {
                isEngArea = true;
            }
            return isEngArea;
        },
        isAr: function (con) {
            /**
             * date: 2019.8.26
             * con 返回的内容，不传返回true
             * 判断阿拉伯种类语言 ar。
             *  */
            var bol = false;
            if(this.language === 'ar'){
                if(con){
                    bol = con;
                }else{
                    bol = true;
                }
            }
            return bol;
        },
        isZhTDK: function () {  //是否读取中文TDK
            /**
             * date: 2019.03.08
             * 链接分享到社交软件后会自动读取TDK，但可能不会读到cookie，添加此方法只是为了优先读取英文TDK
             * 分享软件 Skype等
             * 非英语地区 cn, zh-Hant
             *  */
            var isZhArea = false;
            if (this.language === 'zh' || this.language === 'zh-Hant') {
                isZhArea = true;
            }
            return {
                isZhArea: isZhArea,
                lang: this.language
            };
        },
        currentLanguage: function () {  //此方法只用来调整单个语言的特殊性，一般情况优先使用 isEnglishArea 方法
            return this.language;
        },
        text: function (name) {
            var _this = this;
            var text;
            var key = _this.data;
            var keys = name.split('.');
            for (var index = 0; index < keys.length; index++) {
                key = key[keys[index]]       
            }
            if (key) {
                //console.info('langData load successful!',data[name][this.language])
                text = key[_this.language] || 'NODE-loadERR';
            } else {
                console.error(' - - - langData load error! in word - ', name);
                text = 'NODE-loadERR'
            }
            return text;
        },
        image: function (name) {
            var _this = this;
            var path;
            if (_this.data["image"][name]) {
                path = _this.data["image"][name][_this.language];
            } else {

            }
            return path;
        },
        isDemo: function () {
            console.log(this.req.hostname);
            if ((this.req.hostname.indexOf('demo.tigerwit.com') != -1) || (this.req.hostname.indexOf('w.dev.tigerwit.com') != -1)) {
                return true;
            } else {
                return false;
            }
        }, //没用
        isVersion: function(version){
            var vMap = {
                global: 'tigerwell_global',
                special: 'tiger_special',
                uk: 'tigerwell_uk',
                pandafx: 'panda_app'
            }
            return this.req.headers['user-agent'].indexOf(vMap[version]) != -1;
        },
        isTigerSpecial: function(){
            // console.log("this.req.headers['user-agent']", this.req.headers['user-agent'])
            return this.req.headers['user-agent'].indexOf('tiger_special') != -1;
        },
        isCompany: function (name) {  //此方法废弃 2018.11.20
            var _this = this;
            if (_this.company_name == name) {
                return true;
            } else {
                return false;
            }
        },
        isCloned: function(){  //此方法废弃 2018.11.20
            return this.clonedBaidu;
        },
        background: function () {  //此方法废弃 2018.11.20 (背景图使用image方法)
            var _this = this;
            var backgroundName = {
                en: _this.language === 'en' ? 'en' : '',
                company: _this.company_name
            };
            return backgroundName;
        },
        // global的中英文与cn的中英文
        showScheme: function (cnEn, globalEn, cnCn, globalCn) {  //此方法废弃 2018.11.20
            var _this = this;
            // console.log(_this.req.host)
            if (_this.req.host.indexOf('global') != -1) {
                if (_this.language === 'en') {
                    return globalEn;
                } else {
                    return globalCn || globalEn;
                }
            } else {
                if (_this.language === 'en') {
                    return cnEn
                } else {
                    return cnCn || cnEn;
                }
            }
        },
        // 中文或者英文
        cnOrEn: function(cn, en) {  //此方法废弃 2018.11.20
            var _this = this;
            if (_this.language === 'en') {
                return en;
            } else {
                return cn;
            }
        }
    };
    return Lang;
};