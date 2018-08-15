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
        var cArr = [
            'company_name=' + company_name + '; path=/; domain=.tigerwit.com',
            'access_origin=' + access_origin + '; path=/; domain=.tigerwit.com',
            'access_origin2=' + access_origin2 + '; path=/; domain=.tigerwit.com',
            'cdn_url=' + cdn_url + '; path=/; domain=.tigerwit.com',
            'is_cloned=' + is_cloned + '; path=/; domain=.tigerwit.com',
        ];
        if (lang) {
            cArr.push('lang='+lang+'; path=/; domain=.tigerwit.com');
        }
        // console.info(cArr);
        res.setHeader('Set-Cookie', cArr);
    };
})();
