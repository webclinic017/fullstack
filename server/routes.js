/**
 * Main application routes
 */

'use strict';

var path = require('path');
var url = require('url');
var request = require('request');
var masterApi = require('./api/master');
var Lang = require('./lang')();

function extendPublic (data, req) {
    var lang = new Lang(req);
    data["lang"] = lang;

    if (lang.language === 'en') {
        data["lang_class"] = 'tw_en';
    } else {
        data["lang_class"] = '';
    }
    return data;
}

module.exports = function(app) {

    app.use('/api', require('./api'));

    // All undefined asset or api routes should return a 404
    // app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

    // All other routes should redirect to the index.html
    // app.route('/*').get((req, res) => {
    //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    // });

    // 个人中心
    app.route('/space/').get(function(req, res) {
        res.render('space', extendPublic({}, req));
    });

    app.route('/').get(function(req, res) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        var deviceAgent = req.headers["user-agent"].toLowerCase();
        var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
        request('/api/v3/isblock?ip=' + ip, function(data) {
            if (!data.isblock) {
                if (agentID) {
                    res.redirect('/wap/#');
                } else {
                    res.render('home.html', extendPublic({
                        pageInfo: {}
                    }, req));
                }
            } else {
                res.render('404', extendPublic({}, req))
            }
        })

    });


    app.route('/ranklist').get(function(req, res) {
        res.render('ranklist.html', extendPublic({}, req));
    });

    app.route('/regular').get(function(req, res){
        res.render('regular_list.html', extendPublic({
            model : require('./model/modelRegular')
        }, req));
    });
    app.route('/regular/detail/:subpage').get(function(req, res){
        res.render('regular_detail.html', extendPublic({
            model : require('./model/modelRegular'),
            detail_id : req.params.subpage || ""
        }, req))
    });
    app.route('/regular/agree/:subpage').get(function(req, res){
        res.render('regular_agree.html', extendPublic({
            model : require('./model/modelRegular'),
            detail_id : req.params.subpage || ""
        }, req));
    });
    app.route('/trader/:usercode').get(function(req, res) {
        var usercode = req.params.usercode;

        request('http://www.tigerwit.com/action/public/v4/get_master_info?usercode=' + usercode, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.info(body);
                body = JSON.parse(body);
                res.render('trader.html', extendPublic({
                    master: body.data,
                    usercode: usercode
                }, req));
            }
        });
    });

    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become|comment)').get(function(req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo = {
            id: subpage
        };

        res.render('web_copy.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 交易品种
    app.route('/web/product/:subpage(forex|metal|oil|cfd)').get(function(req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_product.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/web/product/trade').get(function(req, res) {
        res.render('trade_tool.html', extendPublic({}, req));
    })

    // 资讯
    app.route('/web/information/:subpage(time|comment|market)').get(function(req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_information.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 关于老虎金融
    app.route('/web/about/:subpage(stp|team|report|control|tigerwit)').get(function(req, res) {
        
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };

        res.render('web_about.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // faq 常见问题在web文件下
    app.route('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)').get(function(req, res) {
        var subpage = req.params.subpage || 'protect';
        var pageInfo = {
            id: subpage
        };

        res.render('web_faq.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 代理合作
    app.route('/web/agent/:subpage(proxy|become)').get(function(req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };
        res.render('web_agent.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/web/mt4').get(function(req, res) {
        res.render('web_mt4.html', extendPublic({}, req));
    });

    app.route('/web/partner').get(function(req, res) {
        res.render('web/web-partner.html', extendPublic({}, req));
    });

    app.route('/study/:subpage(introduction|term|fundamental|skill|video)').get(function(req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };

        res.render('study.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });


    app.route('/api_test').get(function(req, res, next) {
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

    app.route('/activity').get(function(req, res) {
        res.render('web-bonus1.html', extendPublic({}, req));
    });

    app.route('/activity/simulate426').get(function(req, res) {
        res.render('simulate-426.html', extendPublic({}, req));
    });

    // 页面跳转中
    app.route('/waiting').get(function(req, res) {
        res.render('waiting', {});
    });
    app.route('/bd/t29').get(function(req, res){
        res.render('bd_t29', extendPublic({}, req));
    });

    // nodeAPI
    app.route('/napi').get(function(req, res){
        var action = req.query.action;
        var model = require('./model/modelRegular');
        var page,pagesize,sum;
        var page_total = 0;
        var data = null;
        var data_pre = model['products'];
        var rs;
        var oError = null;
        if(action == "get_regular_list"){
            page = req.query.page || 1;
            pagesize = req.query.pagesize || 10;
            sum = data_pre.length;
            page_total = Math.ceil(sum/pagesize);
            if(page > page_total){
                oError = {
                    error_msg : "错误的页码"
                };
            }else{
                data = data_pre.slice((page-1)*pagesize, Math.min(page*pagesize, sum));
            }
        }
        if(action == "get_regular_detail"){
            var regular_id = req.query.regular_id;
            data_pre.forEach(function(product, index){
                if(product.id == regular_id){
                    data = product;
                }
            });
        }
        if(data){
            rs = {
                is_succ : true,
                error_code : 0,
                error_msg : "获取成功",   
                data : data            
            }
            if(page){
                rs.page = page;
                rs.sum = sum;
            }
        }else{
            rs = {
                is_succ : false,
                error_code : 1,
                error_msg : "获取失败"
            }
            if(oError){
                rs.error_msg = oError.error_msg;
            }
        }
        res.json(rs);
    });

    app.route('/:url(404|*)').get(function(req, res) {
        // var viewFilePath = '404';
        // var statusCode = 404;
        // res.status(statusCode);
        // res.render(viewFilePath, {}, function(err, html) {
        //     if (err) {
        //         return res.json(statusCode);
        //     }
        //     res.send(html);
        // });
        res.render('404.html', extendPublic({}, req));
    });

};