/**
 * Main application routes
 */

'use strict';

var path = require('path');
var url = require('url');
var request = require('request');
var masterApi = require('./api/master');
var Lang = require('./lang')();
var report_sites = require('./report_site');
var setCompanyCookie = require('./set_company_cookie');
var URL_PATH = process.env.URL_PATH;
var COMPANY_NAME = process.env.COMPANY_NAME;

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

function isMobile(req){
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    //var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    return deviceAgent.match(/(iphone|ipod|ipad|android)/);
}

module.exports = function(app) {

    app.use('/api', require('./api'));

    //添加百度验证  --徐萌
    app.route('/baidu_verify_qTHsV5cQAY.html').get(function(req, res){
        res.render('../../client/baidu_verify_qTHsV5cQAY.html');
    });
    //添加微信验证
    app.route('/MP_verify_lcsRW9jGPf32n5Ka.txt').get(function(req, res){
        res.render('../../client/MP_verify_lcsRW9jGPf32n5Ka.html');
    });
    //爬虫配置
    app.route('/robots.txt').get(function(req, res){
        res.set('Content-Type', 'text/plain');
        res.send('User-agent: *\nDisallow:\nAllow:/');
    });
    // All undefined asset or api routes should return a 404
    // app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

    // All other routes should redirect to the index.html
    // app.route('/*').get((req, res) => {
    //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    // });

    // 个人中心
    app.route('/space/').get(function(req, res) {
        setCompanyCookie(res);
        res.render('space', extendPublic({}, req));
    });

    app.route('/').get(function(req, res) {
        if (isMobile(req)) {
            if (COMPANY_NAME === 'tigerwit') {
                res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex');
            }
            if (COMPANY_NAME === 'pkds') {
                setCompanyCookie(res);
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
            }
        } else {
            setCompanyCookie(res);
            res.render('home.html', extendPublic({
                pageInfo: {}
            }, req));
        }
    });

    app.route('/ranklist').get(function(req, res) {
        setCompanyCookie(res);
        res.render('ranklist.html', extendPublic({}, req));
    });

    app.route('/download').get(function(req, res) {
        if (isMobile(req)) {
            res.render('m_download.html', extendPublic({}, req));
        } else {
            setCompanyCookie(res);
            res.render('web_download.html', extendPublic({}, req));
        }
    });

    /*定期跟单开始*/
    var global_modelRegular = require('./model/modelRegular');
    var gloal_modelRegularDetail = require('./model/modelRegularDetail');
    app.route('/regular').get(function(req, res){
        setCompanyCookie(res);
        res.render('regular_list.html', extendPublic({
            model : global_modelRegular
        }, req));
    });
    app.route('/regular/agree/:subpage').get(function(req, res){
        setCompanyCookie(res);
        res.render('regular_agree.html', extendPublic({
            model : global_modelRegular,
            detail_id : req.params.subpage || ""
        }, req));
    });
    app.route('/m/regular/agree/:subpage').get(function(req, res){
        setCompanyCookie(res);
        res.render('m_regular_agree.html', extendPublic({
            model : global_modelRegular,
            detail_id : req.params.subpage || ""
        }, req));
    });
    app.route('/regular/detail/:subpage').get(function(req, res){
        setCompanyCookie(res);
        res.render('regular_detail.html', extendPublic({
            model : gloal_modelRegularDetail(req.params.subpage || "")
        },req));
    });
    app.route('/m/regular/detail/:subpage').get(function(req, res){
        setCompanyCookie(res);
        res.render('m_regular_detail.html',extendPublic({
            model : gloal_modelRegularDetail(req.params.subpage || "")
        },req));
    });
    app.route('/m/regular/detail/team/:subpage').get(function(req, res){
        var team_html = global_modelRegular.getTeamHtmlName(req.params.subpage);
        setCompanyCookie(res);
        res.render('regular/'+ team_html +'.html',extendPublic({}, req));
    });
    app.route('/m/regular/detail/history/:subpage').get(function(req, res){
        var aImages = global_modelRegular.getTeamHistoryImages(req.params.subpage);
        setCompanyCookie(res);
        res.render('regular/m_regular_detail_history.html',extendPublic({
            model : {
                aImages : aImages
            }
        }, req));
    });

    /*定期跟单结束开始*/

    /*--------------------APP-Beagin---------------------*/
    /*注册相关页面*/
    app.route('/m/h5_register/:status(reg|succ|agreement)').get(function(req, res){
        var status = req.params.status || 'reg';
        var pageInfo = {
            status: status
        };
        setCompanyCookie(res);
        res.render('h5_register.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/m/register').get(function(req, res){
        setCompanyCookie(res);
        res.render("m_register01",extendPublic({}, req));
    });
    app.route('/m/register2').get(function(req, res){
        setCompanyCookie(res);
        res.render("m_register02",extendPublic({}, req));
    });
    app.route('/m/register3').get(function(req, res){
        setCompanyCookie(res);
        res.render("m_register03",extendPublic({}, req));
    });
    /*成为高手*/
    app.route('/m/agent/become').get(function(req, res){
        setCompanyCookie(res);
        res.render("m_agent_become",extendPublic({}, req));
    });

    /*定期跟单*/
    app.route('/m/regular/how').get(function(req, res){
        setCompanyCookie(res);
        res.render("m_regular_how",extendPublic({}, req));
    });

    /*出入金流程*/
    app.route('/m/asset/:subpage(withdraw|cardlist|addcard1|addcard2|succ|fail)').get(function(req, res) {
        var subpage = req.params.subpage || 'withdraw';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
        res.render('m_asset.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    /*邀请好友*/
    app.route('/m/invite01').get(function(req, res){
        setCompanyCookie(res);
        res.render('m_invite01', extendPublic({}, req));
    });

    app.route('/m/invite02').get(function(req, res){
        setCompanyCookie(res);
        res.render('m_invite02', extendPublic({}, req));
    });

    /*--------------------APP-End-------------------------*/


    app.route('/trader/:usercode').get(function(req, res) {
        var usercode = req.params.usercode;
        setCompanyCookie(res);
        request(URL_PATH + '/action/public/v5/get_master_info?user_code=' + usercode, function(error, response, body) {
        // request('https://www.tigerwit.com/action/public/v5/get_master_info?user_code=' + usercode, function(error, response, body) {
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

    // 条件和条款
    app.route('/web/blog/:subpage(risk|statement|notice)').get(function(req, res) {
        var subpage = req.params.subpage || 'risk';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
        res.render('web_blog.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become|comment)').get(function(req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
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
        setCompanyCookie(res);
        res.render('web_product.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/web/product/trade').get(function(req, res) {
        setCompanyCookie(res);
        res.render('trade_tool.html', extendPublic({}, req));
    })

    // 资讯
    app.route('/web/information/:subpage(time|comment|market)').get(function(req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
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
        setCompanyCookie(res);
        res.render('web_about.html', extendPublic({
            pageInfo: pageInfo,
            report_sites: report_sites
        }, req));
    });

    // faq 常见问题在web文件下
    app.route('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)').get(function(req, res) {
        var subpage = req.params.subpage || 'protect';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
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
        setCompanyCookie(res);
        res.render('web_agent.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/web/mt4').get(function(req, res) {
        setCompanyCookie(res);
        res.render('web_mt4.html', extendPublic({}, req));
    });

    app.route('/web/partner').get(function(req, res) {
        setCompanyCookie(res);
        res.render('web-partner.html', extendPublic({}, req));
    });

    app.route('/study/:subpage(introduction|term|fundamental|skill|video)').get(function(req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };
        setCompanyCookie(res);
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
        setCompanyCookie(res);
        res.render('web-bonus1.html', extendPublic({}, req));
    });

    app.route('/activity/simulate426').get(function(req, res) {
        setCompanyCookie(res);
        res.render('simulate-426.html', extendPublic({}, req));
    });

    // 页面跳转中
    app.route('/waiting').get(function(req, res) {
        setCompanyCookie(res);
        res.render('waiting', extendPublic({}, req));
    });
    app.route('/bd/t29').get(function(req, res){
        setCompanyCookie(res);
        res.render('bd_t29', extendPublic({}, req));
    });
    app.route('/bd/t30').get(function(req, res){
        setCompanyCookie(res);
        if(isMobile(req)){
            res.render('bd_m7', extendPublic({}, req))
        } else {
            res.render('bd_t30', extendPublic({}, req));
        }
    });
    app.route('/bd/t27').get(function(req, res){
        setCompanyCookie(res);
        if(isMobile(req)){
            res.render('bd_m_t27', extendPublic({}, req))
        } else {
            res.render('bd_t27', extendPublic({}, req));
        }
    });
    app.route('/bd/t31').get(function(req, res){
        setCompanyCookie(res);
        if(isMobile(req)){

            // 暂时把派克道森的H5强跳到pc页 同bd下check.js同时修改
            if (COMPANY_NAME === 'tigerwit') {
                res.render('bd_m_t31', extendPublic({}, req))
            }
            if (COMPANY_NAME === 'pkds') {
                res.render('bd_t31', extendPublic({}, req));
            }
        } else {
            res.render('bd_t31', extendPublic({}, req));
        }
    });
    app.route('/bd/t31_game').get(function(req, res){
        setCompanyCookie(res);
        res.render('bd_mt31_game', extendPublic({}, req))
    });
    // nodeAPI
    app.route('/napi').get(function(req, res){
        var action = req.query.action;
        var model = require('./model/modelRegular');
        var napiConfigInfo = require('./app_napi.config.js');
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
                var data_pre_new = [];
                var deepCopy = function(source) {
                    var result = source?{}:source;
                    for (var key in source) {
                      result[key] = typeof source[key]==='object'? deepCopy(source[key]): source[key];
                    }
                    return result;
                }

                for (var i=0; i<data_pre.length; i++) {
                    var data_new_item = deepCopy(data_pre[i]);

                    data_new_item["profit_rate_wish_year"] = data_new_item["profit_rate_wish"];
                    data_new_item["profit_rate_wish"] = Math.ceil(data_new_item["profit_rate_wish"].split("%")[0]/12)+'%';
                    data_pre_new.push(data_new_item);
                }
                data = data_pre_new.slice((page-1)*pagesize, Math.min(page*pagesize, sum));

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
        if (action == "version_check") {
            var system = req.query.system;
            var versionCode = req.query.version_code;
            var versinInfo = require('./app_ctrl.config');
            // var currentVersion = {
            //     version_name: "V2.0",
            //     description: "上线全新外汇产品，交互全新改版!",
            //     url: "http://www.tigerwit.com/download",
            //     force_update: true
            // };
            var currentVersion = {
                version_name: "",
                description: "",
                url: "",
                force_update: false
            };
            
            if(system == "android" && versionCode < versinInfo.currentVersionCode){
                currentVersion = versinInfo.getAppInfo();
            }
            data = currentVersion;
        }
        if (action == "get_banner_info") {
            var system = req.query.system;
            
            if (system == "android") {
                data = napiConfigInfo.getBannerInfoAndroid();
            } else {
                data = napiConfigInfo.getBannerInfoIos();
            }
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
