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
        var domain = req.host.match(/\.\w+\.com/) ? req.host.match(/\.\w+\.com/)[0] : '.tigerwit.com';
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
            'company_name=' + company_name + '; path=/; domain='+domain,
            'access_origin=' + access_origin + '; path=/; domain='+domain,
            'access_origin2=' + access_origin2 + '; path=/; domain='+domain,
            'cdn_url=' + cdn_url + '; path=/; domain='+domain,
            'is_cloned=' + is_cloned + '; path=/; domain='+domain,
        ];
        // console.log(cArr);
        //global未设置语言时默认英文
        // if (!lang && !parseCookie(req.headers.cookie).lang && (req.host.indexOf('global.tigerwit.com') != -1 || req.host.indexOf('globaldemo.tigerwit.com') != -1)) {
        //     cArr.push('lang=en; path=/; domain='+domain);
        // }
        if (lang) {
            // cArr.push('lang=en; path=/; domain='+domain);
            cArr.push('lang='+lang+'; path=/; domain='+domain);
        }
        // console.info(cArr);
        res.setHeader('Set-Cookie', cArr);
    };
})();
