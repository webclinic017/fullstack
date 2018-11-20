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
        var language = 'zh';
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
                    language = cookieList[name][0];
                } else {
                    language = cookieList[name];
                }
            }
        }
        if (!parseCookie(req.headers.cookie).lang && (req.host.indexOf('global.tigerwit.com') != -1 || req.host.indexOf('globaldemo.tigerwit.com') != -1)) {
            language = 'en';
        }
        if (url.parse(req.url, true).query.lang) {
            language = url.parse(req.url, true).query.lang;
        }
        this.language = language === 'cn' ? 'zh' : language;
        this.data = data;
        this.req = req;
        this.company_name = company_name;
        this.clonedBaidu = clonedBaidu;
        // return this;         
    }
    Lang.prototype = {
        isCompany: function (name) {  // 暂时无用
            var _this = this;
            if (_this.company_name == name) {
                return true;
            } else {
                return false;
            }
        },
        isDemo: function () {
            console.log(this.req.hostname);
            if ((this.req.hostname.indexOf('demo.tigerwit.com') != -1) || (this.req.hostname.indexOf('w.dev.tigerwit.com') != -1)) {
                return true;
            } else {
                return false;
            }
        },
        isCloned: function(){
            return this.clonedBaidu;
        },
        isTigerSpecial: function(){
            // console.log("this.req.headers['user-agent']", this.req.headers['user-agent'])
            return this.req.headers['user-agent'].indexOf('tiger_special') != -1;
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
        currentLanguage: function () {
            return this.language;
        },
        isEnglish: function () {
            return this.language == 'en' ? true : false;
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
        background: function () {
            var _this = this;
            var backgroundName = {
                en: _this.language === 'en' ? 'en' : '',
                company: _this.company_name
            };
            return backgroundName;
        },
        // global的中英文与cn的中英文
        showScheme: function (cnEn, globalEn, cnCn, globalCn) {
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
        cnOrEn: function(cn, en) {
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