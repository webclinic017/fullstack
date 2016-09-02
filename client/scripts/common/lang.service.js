;
(function () {
    'use strict';
    // var langData;
    // angular.forEach($cookies, function (value, index) {

    //     if (index === 'company_name') {
    //         langData = langData+'_'+value;
    //     } 
    // });
    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['$cookies', 'langData_tigerwit', 'langData_pkds'];

    function lang ($cookies, langData_tigerwit, langData_pkds) {
        var language = 'zh';
        var langData = langData_tigerwit;
        
        angular.forEach($cookies, function (value, index) {

            if (index === 'lang') {
                // console.info(value, index);
                language = value;
            }
            // if (index === 'company_name') {
            //     langData = langData+'_'+value;
            // } 
        });
        // console.info(langData);

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