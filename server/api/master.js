/**
 * master api
 * @desc 与高手相关的接口
 */

'use strict';

var request = require('request');
var config = require('../config/environment');
var _ = require('lodash');

var master = {
    getMasters: getMasters
};

module.exports = master;

function getMasters(qsData, callback) {
    var options = {
        method: 'POST',
        baseUrl: config.apiUrlPref,
        url: '/action/public/api/get_master_list',
        qs: _.merge({
            action: 'get_master_list',
            private_key: 'juyoulicai',
            signature: '109d2bba2cc66149e5707767321fbae4'
        }, qsData)
    };

    request(options, function (err, res, body) {
        console.log(err);
        var data = JSON.parse(body);
        
        if (data.is_succ) {
            callback(data.data);
        } else {
            console.log(data);
        }
    });
}