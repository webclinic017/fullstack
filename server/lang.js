'use strict';

var company_name = process.env.COMPANY_NAME;
var data = require('./lang_data.js')();
var querystring = require('querystring');

module.exports = function () {

    function Lang (req){
        var cookieList = querystring.parse(req.headers.cookie, '; ');
        var language = 'zh';

        for (var name in cookieList) {
            // console.info(name);
            if (name === 'lang') {
                language = cookieList[name];
            }
        }     
        this.language = language;
        // return this;         
    }
    Lang.prototype = {
        isCompany: function (name) {
            if (company_name == name) {
                return true;
            } else {
                return false;
            }
        },
        text: function(name){
            var text;
            if(data[name]){
                //console.info('langData load successful!',data[name][this.language])
                text = data[name][this.language] || 'NODE-loadERR';
            } else {
                console.error(' - - - langData load error! in word - ',name);
                text = 'NODE-loadERR'
            }
            return text;
        },
        image: function(name){
            var path;
            if(data["image"][name]){
                path = data["image"][name][this.language];
            } else {

            }
            return path;
        },
        background: function () {
            var _this = this;
            var backgroundName = {
                en: _this.language === 'en' ? 'en' : '',
                company: company_name
            };
            return backgroundName;
        }
    };
    return Lang;
};