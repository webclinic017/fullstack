;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['$cookies'];

    function lang ($cookies) {
        var language = 'zh';
        
        angular.forEach($cookies, function (value, index) {

            if (index === 'lang') {
                // console.info(value, index);
                language = value;
            }
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
            language: {en: "english,hahaha...", zh: "我是中文"}
        };
        return lang;
    }
})();