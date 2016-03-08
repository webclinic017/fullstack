/**
 * master api
 * @desc 与高手相关的接口
 */

'use strict';

var request = require('request');
var _ = require('lodash');
var apiCfg = require('../config/environment').apiCfg;
request.debug = apiCfg.debug;
var options = apiCfg.options;

var master = {
    getMasters: getMasters
};

module.exports = master;

function getMasters(qsData, callback) {
    request(_.merge({
        url: '/api/v3/master/list',
        qs: qsData
    }, options), function (err, res, body) {
        if (err) {
           return console.error(err);
        }
        var data = JSON.parse(body);
        callback(data);
    });
}