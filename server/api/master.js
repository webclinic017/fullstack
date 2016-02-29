/**
 * master api
 * @desc 与高手相关的接口
 */

var request = require('request');
var config = require('../config/environment');

var master = {
};

module.exports = master;

function getMasters(qsData, callback) {
    // var options = {
    //     method: 'GET',
    //     baseUrl: config.apiDomain,
    //     url: '/action/public/api/get_master_list',
    //     qs: qsData
    // };

    // request(options, function (err, res, body) {
    //     var data = JSON.parse(body);

    //     console.info('sss');
        
    //     if (data.is_succ) {
    //         callback(data.data);
    //     } else {
    //         console.log(data);
    //     }
    // }).on('error', function (err) {
    //     console.log(err);
    // });
}