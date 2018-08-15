;
(function () {
    'use strict';
    
    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['langData', '$location'];

    function lang (langData, $location) {

        var lang = {
            isCompany: function () {
                return langData["company"];
            },
            isDemo: function () {
                // console.log($location.host());
                if (($location.host().indexOf('demo.tigerwit.com') != -1) || ($location.host().indexOf('w.dev.tigerwit.com') != -1)) {
                    return true;
                } else {
                    return false;
                }
            },
            isEnglish: function () {
                return langData["language"] == 'en' ? true : false;
            },
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