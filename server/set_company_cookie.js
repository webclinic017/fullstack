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
            'company_name=' + company_name + '; path=/',
            'access_origin=' + access_origin + '; path=/',
            'access_origin2=' + access_origin2 + '; path=/',
            'cdn_url=' + cdn_url + '; path=/',
            'is_cloned=' + is_cloned + '; path=/',
        ];
        if (lang) {
            cArr.push('lang='+lang+'; path=/');
        }
        // console.info(cArr);
        res.setHeader('Set-Cookie', cArr);
    };
})();
