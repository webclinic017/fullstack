/**
 * account api
 * @desc 与账户（account）相关的接口
 */

'use strict';
var request = require('request');
var _ = require('lodash');
var apiCfg = require('../config/environment').apiCfg;
request.debug = apiCfg.debug;
var options = apiCfg.options;

var account = {
    check: check
};

module.exports = account;

/**
 * @name check
 * @desc 检查用户登录状态
 */
function check(callback) {
    request(_.merge({
        url: '/api/v1/check'
    }, options), function (err, res, body) {
        
        if (err) {
           return console.error(err);
        }
        
        var data = JSON.parse(body);
        callback(data);
    });
}