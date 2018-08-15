;
(function () {
    'use strict';
    
    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['langData'];

    function lang (langData) {

        var lang = {
            isCompany: function () {
                return langData["company"];
            },
            isEnglish: function () {
                return langData["language"] == 'en' ? true : false;
            },
            text: function(name){
                var keys = name.split('.');
                var key = langData;
                for (var index = 0; index < keys.length; index++) {
                    key = key[keys[index]]       
                }
                var text;
                text = key[langData["language"]];
                return text;
            },
            image: function(name){
                return langData["language"] == 'zh' ? name : name + '-en';
            },
            background: function () {
                return langData["language"] == 'en' ? true : false;
            }
        };
        return lang;
    }
})();