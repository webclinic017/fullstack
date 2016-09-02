'use strict';

var company_name = process.env.COMPANY_NAME;
var data_name = './lang_data_'+company_name+'.js';
var data = require(data_name)();
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
        isTiger: function () {
            if (company_name === 'tigerwit') {
                return true;
            } else {
                return false;
            }
        },
        text: function(name){
            var text;
            text = data[name][this.language];
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