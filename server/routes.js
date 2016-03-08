/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var url = require('url');
var masterApi = require('./api/master');
var accountApi = require('./api/account');

module.exports = function (app) {
    app.use('/api', require('./api'));
    
    // All undefined asset or api routes should return a 404
    // app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

    // All other routes should redirect to the index.html
    // app.route('/*').get((req, res) => {
    //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    // });
    
    // 个人中心
    app.route('/space/').get(function (req, res) {
        res.render('space', {
        });
    });

    app.route('/').get(function (req, res) {
        

        res.render('home.html', {
            pageInfo: {
            }
        });
    });


    app.route('/ranklist').get(function (req, res) {

        res.render('ranklist.html', {
        });
    });

    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become)').get(function (req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo = {
            id: subpage
        };

        res.render('web_copy.html', {
            pageInfo: pageInfo
        });
    });

    // 交易
    app.route('/web/trade/:subpage(product|time|tool)').get(function (req, res) {
        var subpage = req.params.subpage || 'product';
        var pageInfo = {
            id: subpage
        };

        res.render('web_trade.html', {
            pageInfo: pageInfo
        });
    });

    app.route('/test').get(function (req, res, next) {
        accountApi.check(function (data) {
            if (data.is_succ) {
                res.json('sss');
            } else {
                next();
            }
        });
    });

    app.route('/*').get(errors[404]);
};