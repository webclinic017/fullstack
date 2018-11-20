;
(function () {
    'use strict';
    
    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['langData', '$location'];

    function lang (langData, $location) {

        var lang = {
            isEnglishArea: function () {
                /**
                 * date: 2018.11.20
                 * 判断语言环境使用此方法，若需要单独对某地区进行特殊处理，再另行添加方法。
                 * 英语地区 en, vi
                 * 非英语地区 cn, zh-Hant
                 *  */
                var isEngArea = false;
                if (langData["language"] === 'en' || langData["language"] === 'vi') {
                    isEngArea = true;
                }
                return isEngArea;
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
                //暂时未用到，不做处理，若后期有涉及到angular目录中图片语言问题，此方法请参照node中修改 2018.11.20
                return langData["language"] == 'zh' ? name : name + '-en';
            },
            background: function () {
                //暂时未用到，若后期有涉及到angular目录中背景图语言问题，请参照node中使用image方法 2018.11.20
                return langData["language"] == 'en' ? true : false;
            },
            // 登录注册时跳转
            globalOrCn: function (state, area_id) {
                var url = {
                    cn: 'cn.tigerwit.com,cndemo.tigerwit.com',
                    global: 'global.tigerwit.com,globaldemo.tigerwit.com',
                    local: 'w.tigerwit.com,w.dev.tigerwit.com'
                };
                
                if (url.local.indexOf($location.host()) != -1 || (area_id == 1 && url.cn.indexOf($location.host()) != -1) || (area_id == 2 && url.global.indexOf($location.host()) != -1)) {
                    state.go('space.center.index', {reload: true});
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
            },
            isDemo: function () {
                // console.log($location.host());
                if (($location.host().indexOf('demo.tigerwit.com') != -1) || ($location.host().indexOf('w.dev.tigerwit.com') != -1)) {
                    return true;
                } else {
                    return false;
                }
            },
            isCompany: function () {  //此方法废弃 2018.11.20
                return langData["company"];
            }
        };
        return lang;
    }
})();