/*
 *  process.env 上的（如下）变量统一在这个文件中获取
        company_name:   公司名
        url_path:       url路径
        access_origin:  api（proxy）请求域名
        access_origin2: api（新版api，未来接口会全部迁过来）请求域名
 *  其他文件中要用，都要通过此文件获取，不再独自去读取process
 */

; (function () {
    'use strict';

    var envConfig = {
        company_name: process.env.COMPANY_NAME,
        url_path: process.env.URL_PATH,
        access_origin: process.env.ACCESS_ORIGIN,
        access_origin2: process.env.ACCESS_ORIGIN2,
        isCloned: false,
        cdn_url: 'https://web.tigerwit.com'
    };

    function SetEnvConfig(req) {
        // console.log(req.hostname);

        if (req.hostname === 'lonfx.tigerwit.com') {
            envConfig.company_name = 'lonfx';
            envConfig.url_path = 'https://lonfx.tigerwit.com';
            envConfig.access_origin = '';
        } else if (req.hostname === 'pandafx.tigerwit.com') {
            envConfig.company_name = 'pandafx';
            envConfig.url_path = 'https://pandafx.tigerwit.com';
            envConfig.access_origin = '';
        } else if (req.hostname === '60.205.105.34') { //百度克隆网站
            envConfig.company_name = 'tigerwit';
            envConfig.url_path = 'https://www.tigerwit.com';
            envConfig.isCloned = true;
        } else {
            envConfig.company_name = process.env.COMPANY_NAME;
            envConfig.url_path = process.env.URL_PATH;
            envConfig.access_origin = process.env.ACCESS_ORIGIN;
            envConfig.access_origin2 = process.env.ACCESS_ORIGIN2;
            envConfig.isCloned = false;
        }
    }

    module.exports = {
        envConfig: envConfig,
        SetEnvConfig: SetEnvConfig
    };
})();