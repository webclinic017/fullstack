'use strict';

module.exports = function () {

    function Lang(req) {
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var clonedBaidu = envConfig.isCloned;
        var data = require('./lang_data.js')();
        var querystring = require('querystring');
        var cookieList = querystring.parse(req.headers.cookie, '; ');
        var language = 'zh';

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
        this.language = language;
        this.data = data;
        this.req = req;
        this.company_name = company_name;
        this.clonedBaidu = clonedBaidu;
        // return this;         
    }
    Lang.prototype = {
        isCompany: function (name) {
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
        text: function (name) {
            var _this = this;
            var text;
            if (_this.data[name]) {
                //console.info('langData load successful!',data[name][this.language])
                text = _this.data[name][this.language] || 'NODE-loadERR';
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
        }
    };
    return Lang;
};