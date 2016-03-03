/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
var url = require('url');
var masterApi = require('./api/master');

module.exports = function (app) {
    app.use('/api', require('./api'));
    
    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    // app.route('/*').get((req, res) => {
    //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    // });
    
    // 个人中心
    app.route('/space/').get(function (req, res) {
        res.render('space', {
        });
    });

    app.route('/master/list').get(function (req, res) {
        var masters = [];
        var rank_type = url.parse(req.url, true).query.type;
        // console.info(rank_type);

        res.render('master_list.html', {
            pageInfo: {
                rank_type: rank_type
            },
            masters: [
                {
                    username: '高手 1 号',
                    usercode: '222',
                    link: '/avatar/525091_150.jpg',
                    number: 1,
                    address: '中国',
                    copiers_sum: 21,
                    copy_money_min: '10.00',
                    drawdown: 52,
                    profit_rate: '122',
                    profit_copiers: '8888.88'
                }, {
                    username: '高手 2 号',
                    usercode: '222'
                }, {
                    username: '高手 3 号',
                    usercode: '222'
                }
            ]
        });
    });
};