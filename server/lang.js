'use strict';

var querystring = require('querystring');

module.exports = function (app) {
    var language;

    app.use(function (req, res, next) {
        console.info(req.url + '&&&&');

        var cookieList = querystring.parse(req.headers.cookie, '; ');
        language = 'zh';

        for (var name in cookieList) {
            // console.info(name);
            if (name === 'lang') {
                language = cookieList[name];
            }
        }
        
        next();
    });
    
    var lang = {
        text: function(name){
            var text;
            text = this[name][language];
            return text;
        },
        image: function(name){
            return language == 'zh' ? name : name + '-en';
        },
        background: function () {
            return language == 'en' ? true : false;
        },
        test: {en: "testaaa", zh: "测试的"},
        language: {en: "english,hahaha...", zh: "我是中文"},
    
    
    };
    return lang;
};