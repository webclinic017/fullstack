'use strict';

var company_name = process.env.COMPANY_NAME;
var data = require('./lang_data.js')();
var querystring = require('querystring');
var WLInfo_data = require("./whiteLabelInfo_data");

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
        //判断当前公司,返回传入参数信息
        getCoInfo:function(info){
            if(WLInfo_data[info]){
                return WLInfo_data[info][company_name];
            } else {
                console.info('load companyInfo error');
                return 'error';
            }
        },
        text: function(name){
            var text;
            if(data[name]){
                //console.info('langData load successful!',data[name][this.language])
                text = data[name][this.language] || 'loadERR';
            } else {
                console.info(' - - - langData load error! in word - ',name);
                text = 'loadERR'
            }
            return text;
        },
        image: function(name){
            return this.language === 'zh' ? name : name + '-en';
        },
        background: function () {
            return this.language === 'en' ? true : false;
        }
    };
    return Lang;
};