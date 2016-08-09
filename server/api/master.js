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

};

module.exports = master;