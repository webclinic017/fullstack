;
(function () {
    'use strict';
    
    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['langData'];

    function lang (langData) {

        var lang = {
            text: function(name){
                var text;
                text = langData[name][langData["language"]];
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