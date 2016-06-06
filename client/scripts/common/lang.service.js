;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['$cookies', 'langData'];

    function lang ($cookies, langData) {
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
                text = langData[name][language];
                return text;
            },
            image: function(name){
                return language == 'zh' ? name : name + '-en';
            },
            background: function () {
                return language == 'en' ? true : false;
            }
        };
        return lang;
    }
})();