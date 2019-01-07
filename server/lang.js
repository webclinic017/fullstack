'use strict';

module.exports = function () {

    function Lang(req) {
        var url = require('url');
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var clonedBaidu = envConfig.isCloned;
        var data = require('./lang_data.js')();
        var querystring = require('querystring');
        var cookieList = querystring.parse(req.headers.cookie, '; ');
        var language = 'zh', languageTemp = 'zh';
        var langArr = ['cn', 'en', 'vi', 'zh-Hant', 'id'];
        var parseCookie = function(cookie){
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
        for (var name in cookieList) {
            // console.info(name);
            if (name === 'lang') {
                if(cookieList[name] instanceof Array){
                    languageTemp = cookieList[name][0];
                } else {
                    languageTemp = cookieList[name];
                }
            }
        }
        if (!parseCookie(req.headers.cookie).lang && (req.host.indexOf('global.tigerwit.com') != -1 || req.host.indexOf('globaldemo.tigerwit.com') != -1)) {
            languageTemp = 'en';
        }
        if (url.parse(req.url, true).query.lang) {
            languageTemp = url.parse(req.url, true).query.lang;
        }
        for (var i=0;i<langArr.length;i++) {    //判断是否在语言包内
            // console.log(langArr[i], '-----language-----');
            if (langArr[i] === languageTemp) {
                language = languageTemp;
            }
        }
        this.language = language === 'cn' ? 'zh' : language;
        this.data = data;
        this.req = req;
        this.company_name = company_name;
        this.clonedBaidu = clonedBaidu;
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
                text = key[this.language] || 'NODE-loadERR';
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
                path = _this.data["image"][name][this.language];
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
        },
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