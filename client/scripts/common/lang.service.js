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
                var keys = name.split('.');
                var key = langData;
                for (var index = 0; index < keys.length; index++) {
                    key = key[keys[index]]       
                }
                var text;
                text = !key ? name : (key[langData["language"]] || name);
                return text;
            },
            image: function(name){
                return langData["language"] == 'zh' ? name : name + '-en';
            },
            background: function () {
                return langData["language"] == 'en' ? true : false;
            },
            globalOrCn: function (area_id) {
                var url = {
                    cn: 'cn.tigerwit.com,cndemo.tigerwit.com',
                    global: 'global.tigerwit.com,globaldemo.tigerwit.com',
                    local: 'w.tigerwit.com,w.dev.tigerwit.com'
                };
                
                if (url.local.indexOf($location.host()) != -1 || (area_id == 1 && url.cn.indexOf($location.host()) != -1) || (area_id == 2 && url.global.indexOf($location.host()) != -1)) {
                    // state.go('space.center.index', {reload: true});
                    window.location.href="/space/#/center";
                } else {
                    if (area_id == 1) {
                        if ($location.host().indexOf('demo') != -1) {
                            location.href = 'https://cndemo.tigerwit.com/space/#/center'
                        } else {
                            location.href = 'https://cn.tigerwit.com/space/#/center'
                        }
                    } else {
                        if ($location.host().indexOf('demo') != -1) {
                            location.href = 'https://globaldemo.tigerwit.com/space/#/center'
                        } else {
                            location.href = 'https://global.tigerwit.com/space/#/center'
                        }
                    }
                }
            }
        };
        return lang;
    }
})();