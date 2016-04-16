/**
 * Main application routes
 */

'use strict';

var path = require('path');
var url = require('url');
var request = require('request');
var masterApi = require('./api/master');

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

    app.route('/trader/:usercode').get(function (req, res) {
        var usercode = req.params.usercode;

        request('http://www.tigerwit.com/action/public/v4/get_master_info?usercode='+usercode, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.info(body);
                body = JSON.parse(body);
                res.render('trader.html', {
                    master: body.data,
                    usercode: usercode
                });
            }
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
    // 交易品种
    app.route('/web/product/:subpage(forex|metal|oil|cfd)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_product.html', {
            pageInfo: pageInfo
        });
    });
    app.route('/web/product/trade').get(function(req,res){
        res.render('trade_tool.html');
    })

    // 资讯
    app.route('/web/information/:subpage(time|comment|market)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_information.html', {
            pageInfo: pageInfo
        });
    });

    // 关于老虎金融
    app.route('/web/about/:subpage(stp|team|report|control|tigerwit)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_about.html', {
            pageInfo: pageInfo
        });
    });

    // faq 常见问题在web文件下
    app.route('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)').get(function (req, res) {
        var subpage = req.params.subpage || 'protect';
        var pageInfo = {
            id: subpage
        };

        res.render('web_faq.html', {
            pageInfo: pageInfo
        });
    });

    // 代理合作
    app.route('/web/agent').get(function (req, res) {
        res.render('web_agent.html');
    });

    app.route('/web/mt4').get(function (req, res) {
        res.render('web_mt4.html');
    });

    app.route('/web/partner').get(function (req, res) {
        res.render('web/web-partner.html');
    });

    app.route('/study/:subpage(introduction|term|fundamental|skill|video)').get(function (req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };

        res.render('study.html', {
            pageInfo: pageInfo
        });
    });


    app.route('/api_test').get(function (req, res, next) {
        // accountApi.checkLogined(function (data) {
        //     console.info(data);
        //     if (data.is_succ) {
        //         res.json('sss');
        //     } else {
        //         next();
        //     }
        // });
        next();
    });

    // 页面跳转中
    app.route('/waiting').get(function (req, res) {
        res.render('waiting', {
        });
    });

    app.route('/:url(404|*)').get(function (req, res) {
        var viewFilePath = '404';
        var statusCode = 404;
        res.status(statusCode);
        res.render(viewFilePath, {}, function (err, html) {
            if (err) {
                return res.json(statusCode);
            }
            res. send(html);
        });
    });

};
