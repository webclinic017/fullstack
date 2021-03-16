; (function () {
    'use strict';

    module.exports = function (req, res) {
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var access_origin = envConfig.access_origin || '';
        var access_origin2 = envConfig.access_origin2 || '';
        var cdn_url = envConfig.cdn_url || '';
        var is_cloned = envConfig.isCloned || '';
        // console.log(req.host)
        var domain = require('./utils').getDomain(req);

        res.cookie('company_name', company_name, { path: '/', domain: domain })
        res.cookie('access_origin', access_origin, { path: '/', domain: domain })
        res.cookie('access_origin2', access_origin2, { path: '/', domain: domain })
        res.cookie('cdn_url', cdn_url, { path: '/', domain: domain })
        res.cookie('is_cloned', is_cloned, { path: '/', domain: domain })

        var decideLang = require('./get_lang')(req, res).decideLang();
        var lang = decideLang == 'zh' ? 'cn' : decideLang;
        // lang肯定有值
        if (lang) {
            // 记录当前语言全局使用
            req.lang = lang;
            res.cookie('lang', lang, { path: '/', domain: domain })
        }
        // console.log(lang, res.cookie)
        // console.log('------domain------',domain)
        // console.log('------req.host------',req.host)
    };
})();
