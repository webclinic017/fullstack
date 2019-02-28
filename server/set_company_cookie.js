; (function () {
    'use strict';

    module.exports = function (req, res) {
        var envConfig = require('./get_env_config').envConfig;
        var decideLang = require('./get_lang')(req, res).decideLang();
        var company_name = envConfig.company_name;
        var access_origin = envConfig.access_origin || '';
        var access_origin2 = envConfig.access_origin2 || '';
        var cdn_url = envConfig.cdn_url || '';
        var is_cloned = envConfig.isCloned || '';
        var lang = '';
        var domain = req.host.match(/\.\w+\.com/) ? req.host.match(/\.\w+\.com/)[0] : '.tigerwit.com';
        var cArr = [
            'company_name=' + company_name + '; path=/; domain='+domain,
            'access_origin=' + access_origin + '; path=/; domain='+domain,
            'access_origin2=' + access_origin2 + '; path=/; domain='+domain,
            'cdn_url=' + cdn_url + '; path=/; domain='+domain,
            'is_cloned=' + is_cloned + '; path=/; domain='+domain,
        ];
        // console.log(decideLang);
       
        lang = decideLang == 'zh' ? 'cn' : decideLang

        if (lang) {
            // cArr.push('lang=en; path=/; domain='+domain);
            cArr.push('lang='+lang+'; path=/; domain='+domain);
        }
        // console.info(cArr);
        res.setHeader('Set-Cookie', cArr);
    };
})();
