; (function () {
    'use strict';

    module.exports = function (res) {
        var envConfig = require('./get_env_config').envConfig;
        var company_name = envConfig.company_name;
        var access_origin = envConfig.access_origin || '';
        var access_origin2 = envConfig.access_origin2 || '';
        var cdn_url = envConfig.cdn_url || '';
        // console.log("cookies->"+company_name);
        // console.info(res);
        res.setHeader('Set-Cookie',
            [
                'company_name=' + company_name + '; path=/',
                'access_origin=' + access_origin + '; path=/',
                'access_origin2=' + access_origin2 + '; path=/',
                'cdn_url=' + cdn_url + '; path=/',
            ]);
    };
})();
