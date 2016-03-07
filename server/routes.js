/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');
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

    app.route('/').get(function (req, res) {
        

        res.render('home.html', {
            pageInfo: {
            }
        });
    });


    app.route('/ranklist').get(function (req, res) {
        var masters = [];

        masters = [
                {
                    username: '高手 1 号',
                    usercode: '222'
                }, {
                    username: '高手 2 号',
                    usercode: '222'
                }, {
                    username: '高手 3 号',
                    usercode: '222'
                }
        ]

        res.render('ranklist.html', {
            pageInfo: {
            },
            masters: masters
        });
    });

    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become)').get(function (req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo;

        switch (subpage) {
            case 'rules':
                pageInfo = {
                    id: 'rules',
                    title: '复制规则',
                    description: '',
                    keywords: '' 
                };
                break;

            case 'select':
                pageInfo = {
                    id: 'select',
                    title: '选择高手',
                    description: '',
                    keywords: '' 
                };
                break;

            case 'become':
                pageInfo = {
                    id: 'become',
                    title: '成为高手',
                    description: '',
                    keywords: '' 
                };
                break;
            default:
                break;
        }
        

        res.render('web_copy.html', {
            pageInfo: pageInfo
        });
    });
};