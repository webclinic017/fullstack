/**
 * account api
 * @desc 与账户（account）相关的接口
 */

'use strict';
var request = require('request');
var _ = require('lodash');
var utils = require('./utils');
var apiCfg = require('../config/environment').apiCfg;
request.debug = apiCfg.debug;
var options = apiCfg.options;

var account = {
    checkLogined: checkLogined,
    getPersonalInfo: getPersonalInfo
};

module.exports = account;

/**
 * @name checkLogined
 * @desc 检查用户登录状态
 */
function checkLogined(callback) {
    request(_.merge({
        url: '/api/v1/checkd',
        headers: {
            Cookie: '_jzqx=1.1455704854.1455787222.1.jzqsr=wxl%2Etigerwit%2Ecom:9008|jzqct=/.-; lp=safe; _jzqckmp=1; _gat=1; Hm_lvt_e2d8c88ce38a79186b7acc81d614806c=1455609540,1455609631,1455609642; Hm_lpvt_e2d8c88ce38a79186b7acc81d614806c=1457507447; _qzja=1.1925652561.1453795791194.1456816002719.1457507444223.1457507444223.1457507446671..0.0.51.9; _qzjb=1.1457507444223.2.0.0.0; _qzjc=1; _qzjto=2.1.0; _jzqa=1.2037377541180985300.1455701256.1457429127.1457507444.13; _jzqc=1; _jzqb=1.2.10.1457507444.1; _ga=GA1.2.1452660498.1455701256; user=2|1:0|10:1457507657|4:user|44:MTg4NjMwNDA4ODd8ODcwN3wxfDg1MTA4OHw2NjE4ODY=|2de395b65bd3f386498d7e001c3242ba1f12bb43410504832bf5f9124685c94d; puser=%89%B8L%FD%1F%10%C9%F9%1F%DD%2Fh%AFJ%9C%C0%23f%A6%D5%F8%B3F%02R%9FF%BA%DB%E4bW; user_code=3103; laravel_session=eyJpdiI6IjhHNndJY3hcL201SWtPNFlaVSs5RGFRPT0iLCJ2YWx1ZSI6Ijd4Unl1WldJdUF6bjR6dko5Z1k0dERKUEc0ajJ1dlI1OEx2YzNGdmU1SEs1ajVHa2pwT3NDeGNJWXVtaEpiS2VrQ3NjVUxURjBPcFBVWFkxUjBoTkdRPT0iLCJtYWMiOiIzYjJhYzk0YmFlNzhkZGZjNWI4YWI3ZjBlOWUwODNhYTE1N2IxN2Q2NjYwMzQ4ZTNhY2MwYWUzZTA3YTk1OThiIn0%3D'
        }
    }, options), function (err, res, body) {
        if (err) {
            return console.error(err);
        }

        if (res.statusCode >= 200 && res.statusCode < 300 || res.statusCode == 304) {
            var data = JSON.parse(body);
            callback(data);
        } else {
            console.log('status code:', res.statusCode);
        }
    });
}

function getPersonalInfo(callback) {
    request(_.merge({
        url: '/api/v1/get_info',
        headers: {
            Cookie: '_jzqx=1.1455704854.1455787222.1.jzqsr=wxl%2Etigerwit%2Ecom:9008|jzqct=/.-; lp=safe; _jzqckmp=1; _gat=1; Hm_lvt_e2d8c88ce38a79186b7acc81d614806c=1455609540,1455609631,1455609642; Hm_lpvt_e2d8c88ce38a79186b7acc81d614806c=1457507447; _qzja=1.1925652561.1453795791194.1456816002719.1457507444223.1457507444223.1457507446671..0.0.51.9; _qzjb=1.1457507444223.2.0.0.0; _qzjc=1; _qzjto=2.1.0; _jzqa=1.2037377541180985300.1455701256.1457429127.1457507444.13; _jzqc=1; _jzqb=1.2.10.1457507444.1; _ga=GA1.2.1452660498.1455701256; user=2|1:0|10:1457507657|4:user|44:MTg4NjMwNDA4ODd8ODcwN3wxfDg1MTA4OHw2NjE4ODY=|2de395b65bd3f386498d7e001c3242ba1f12bb43410504832bf5f9124685c94d; puser=%89%B8L%FD%1F%10%C9%F9%1F%DD%2Fh%AFJ%9C%C0%23f%A6%D5%F8%B3F%02R%9FF%BA%DB%E4bW; user_code=3103; laravel_session=eyJpdiI6IjhHNndJY3hcL201SWtPNFlaVSs5RGFRPT0iLCJ2YWx1ZSI6Ijd4Unl1WldJdUF6bjR6dko5Z1k0dERKUEc0ajJ1dlI1OEx2YzNGdmU1SEs1ajVHa2pwT3NDeGNJWXVtaEpiS2VrQ3NjVUxURjBPcFBVWFkxUjBoTkdRPT0iLCJtYWMiOiIzYjJhYzk0YmFlNzhkZGZjNWI4YWI3ZjBlOWUwODNhYTE1N2IxN2Q2NjYwMzQ4ZTNhY2MwYWUzZTA3YTk1OThiIn0%3D'
        }
    }, options), function (err, res, body) {
        
        if (err) {
           return console.error(err);
        }
        
        var data = JSON.parse(body);
        callback(data);
    });
}