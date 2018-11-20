; (function () {
    'use strict';

    module.exports = function (req, res) {
        var url = require('url');
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var access_origin = envConfig.access_origin || '';
        var access_origin2 = envConfig.access_origin2 || '';
        var cdn_url = envConfig.cdn_url || '';
        var is_cloned = envConfig.isCloned || '';
        var lang = url.parse(req.url, true).query.lang;
        var parseCookie = function(cookie){
            var cookies = {};
            if(!cookie){
                return cookies;
            };
            var list = cookie.split(';');
            for(let i = 0; i < list.length; i++){
                var pair = list[i].split('=');
                cookies[pair[0].trim()] = pair[1];
            }
            return cookies;
        }
        var cArr = [
            'company_name=' + company_name + '; path=/; domain=.tigerwit.com',
            'access_origin=' + access_origin + '; path=/; domain=.tigerwit.com',
            'access_origin2=' + access_origin2 + '; path=/; domain=.tigerwit.com',
            'cdn_url=' + cdn_url + '; path=/; domain=.tigerwit.com',
            'is_cloned=' + is_cloned + '; path=/; domain=.tigerwit.com',
        ];
        //global未设置语言时默认英文
        if (!lang && !parseCookie(req.headers.cookie).lang && (req.host.indexOf('global.tigerwit.com') != -1 || req.host.indexOf('globaldemo.tigerwit.com') != -1)) {
            cArr.push('lang=en; path=/; domain=.tigerwit.com');
        }
        if (lang) {
            //越南语本周兼容成英文，lang.js 同步修改 2018.11.20
            if (lang === 'vi') lang = 'en';
            //越南语翻译上线删除此配置
            // cArr.push('lang=en; path=/; domain=.tigerwit.com');
            cArr.push('lang='+lang+'; path=/; domain=.tigerwit.com');
        //越南语本周兼容成英文，lang.js 同步修改 2018.11.20
        } else if (parseCookie(req.headers.cookie).lang === 'vi') {
            cArr.push('lang=en; path=/; domain=.tigerwit.com');
        }
        //越南语翻译上线删除此配置
        // console.info(cArr);
        res.setHeader('Set-Cookie', cArr);
    };
})();
