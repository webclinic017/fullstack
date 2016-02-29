/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

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
        res.render('master_list.html', {
            pageInfo: {
            },
            masters: [
                {
                    username: '高手一号',
                    usercode: '0001'
                }, {
                    username: '高手二号',
                    usercode: '0002'
                }, {
                    username: '高手三xxx号',
                    usercode: '0003'
                }
            ]
        });
    });
};