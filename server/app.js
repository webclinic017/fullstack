/**
 * Main application file
 */

'use strict';

var express = require('express');
var config = require('./config/environment');
var http = require('http');


// Setup server
var app = express();
var server = http.createServer(app);
// 一些区分环境中间件
require('./config/express')(app);
// 路由
require('./routes')(app);

startServer();

module.exports = app;

// Start server
function startServer() {

    app.angularFullstack = server.listen(config.port, config.ip, function() {
        console.log('Express server listening on %s:%d, in %s mode', 
                config.ip, config.port, app.get('env'));
    });
    
}