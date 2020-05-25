;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('lang', lang);

    lang.$inject = ['langData', '$location', '$timeout', '$cookies'];

    function lang(langData, $location, $timeout, $cookies) {

        var language = 'en';
        var domain = '.' + location.hostname.split('.').slice(-2).join('.');
        var cookieLang = $cookies.lang; // cookieLang肯定会有值
        if (cookieLang) {
            language = cookieLang === 'cn' ? 'zh' : cookieLang;
        }
        langData["language"] = language;
        function setCookieLang(lang) {
            var d = new Date();
            d.setTime(d.getTime() + (-1 * 24 * 60 * 60 * 1000));
            document.cookie = 'lang=' + lang + '; path=/; expires=' + d.toUTCString();
            document.cookie = 'lang=' + lang + '; path=/; domain=' + domain;
            location.reload();
        }
        var lang = {
            isEnglishArea: function () {
                /**
                 * date: 2018.11.20
                 * 判断语言环境使用此方法，若需要单独对某地区进行特殊处理，再另行添加方法。
                 * 英语地区 en, vi
                 * 非英语地区 cn, zh-Hant
                 *  */
                var isEngArea = false;
                if (langData["language"] !== 'zh' && langData["language"] !== 'zh-Hant') {
                    isEngArea = true;
                }
                return isEngArea;
            },
            isAr: function (con) {
                /**
                 * date: 2019.8.26
                 * con 返回的内容，不传返回true
                 * 判断阿拉伯种类语言 ar。
                 *  */
                var bol = false;
                if(langData["language"] === 'ar'){
                    if(con){
                        bol = con;
                    }else{
                        bol = true;
                    }
                }
                return bol;
            },
            currentLanguage: function () {  //此方法只用来调整单个语言的特殊性，一般情况优先使用 isEnglishArea 方法
                return langData["language"];
            },
            text: function (name) {
                var keys = name.split('.');
                var key = langData;
                for (var index = 0; index < keys.length; index++) {
                    key = key[keys[index]]
                }
                var text;
                text = !key ? name : (key[langData["language"]] || name);
                return text;
            },
            image: function (name) {
                //涉及到angular目录中图片语言问题，此方法请参照node中修改 2019.10.22
                // 使用text方法
            },
            background: function () {
                //暂时未用到，若后期有涉及到angular目录中背景图语言问题，请参照node中使用image方法 2018.11.20
                return langData["language"] == 'en' ? true : false;
            },
            globalOrCn: function (area_id) {    //需要添加 .tigerwit.com 以外的域名访问，删除此逻辑 2019.01.15
                var url = {
                    cn: 'cn.tigerwit.com,cndemo.tigerwit.com',
                    global: 'global.tigerwit.com,globaldemo.tigerwit.com',
                    local: 'w.tigerwit.com,w.dev.tigerwit.com'
                };

                if (url.local.indexOf($location.host()) != -1 || (area_id == 1 && url.cn.indexOf($location.host()) != -1) || (area_id == 2 && url.global.indexOf($location.host()) != -1)) {
                    // state.go('space.center.index', {reload: true});
                    $timeout(function () {
                        window.location.href = "/space/#/center";
                    }, 100)
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
                if (($location.host().indexOf('demo' + domain) != -1) ||
                    ($location.host().indexOf('w.dev' + domain) != -1)) {
                    return true;
                } else {
                    return false;
                }
            },
            isCompany: function () {  //此方法废弃 2018.11.20
                return langData["company"];
            },
            // global与第三方设置语言
            reloadLanguage: setCookieLang,
            // 为合并第三方充值提现判断
            isThird: function () {
                return ($location.absUrl().indexOf('payment/asset') !== -1)
            },
            // 区分大区area_id 1：中国区
            hostIsCn: function () {
                return $cookies.area_id == 1;
                // return 'cn.tigerwit.com,cndemo.tigerwit.com,w.dev.tigerwit.com'.indexOf($location.host()) != -1;
            }
        };
        return lang;
    }
})();