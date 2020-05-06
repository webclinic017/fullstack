/**
 * Main application routes
 */

'use strict';

var path = require('path');
var fs = require('fs');
var url = require('url');
var request = require('request');
var querystring = require('querystring');
var masterApi = require('./api/master');
// 常量数据
var report_sites = require('./report_site');
var depositBankList = require('./deposit_bank_list');
var depositEvidenceList = require('./deposit_evidence_list');

// var ACCESS_ORIGIN2 = require('./get_env_config').envConfig.access_origin2 || 'https://a.tigerwit.com';
var setCompanyCookie,
    envConfig,
    URL_PATH,
    COMPANY_NAME,
    Lang,
    global_modelRegular,
    gloal_modelRegularDetail;

var SetEnvConfig = require('./get_env_config').SetEnvConfig;
var recordAccessTimes = require('./record_access_times');

// TODO
function setEnvCf(req, res) {
    // 常量
    new SetEnvConfig(req);
    envConfig = require('./get_env_config').envConfig;
    COMPANY_NAME = envConfig.company_name;
    URL_PATH = envConfig.url_path;


    setCompanyCookie = require('./set_company_cookie');
    setCompanyCookie(req, res);  // 设置cookies

    Lang = require('./lang')();
    global_modelRegular = require('./model/modelRegular')();
    gloal_modelRegularDetail = require('./model/modelRegularDetail');
    // console.log(global_modelRegular);
}

function extendPublic(data, req) {
    var lang = new Lang(req);
    data["lang"] = lang;
    data["req"] = req;

    if (lang.language === 'en') {
        data["lang_class"] = 'tw_en';
    } else {
        data["lang_class"] = '';
    }
    return data;
}

function isMobile(req) {
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    //var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    return deviceAgent.match(/(iphone|ipod|ipad|android)/);
}

// function checkGlobalOrCN (req, res, u) {
//     // u 是需要跳转404的域名 cn/global
//     // console.log(req.protocol);
//     var ou = u === 'cn' ? 'cn.tigerwit.com,cndemo.tigerwit.com' : 'globaldemo.tigerwit.com,global.tigerwit.com';
//     if (ou.indexOf(req.host) != -1) {
//         res.redirect(req.protocol+'://'+req.host+'/404');
//     }
// }

module.exports = function (app) {

    app.use('/api', require('./api'));

    //添加百度验证  --徐萌
    // app.route('/baidu_verify_qTHsV5cQAY.html').get(function (req, res) {
    //     res.render('crawler/baidu_verify_FTypqEgrcU.html');
    // });
    //添加微信验证(没有)
    // app.route('/MP_verify_lcsRW9jGPf32n5Ka.txt').get(function (req, res) {
    //     res.render('../../client/MP_verify_lcsRW9jGPf32n5Ka.html');
    // });
    //爬虫配置
    app.route('/robots.txt').get(function (req, res) {
        res.set('Content-Type', 'text/plain');
        res.send('User-agent: *\nDisallow:\nAllow:/');
    });
    //google爬虫配置
    // app.route('/sitemap.xml').get(function (req, res) {
    //     res.set('Content-Type', 'text/xml');
    //     res.render('crawler/sitemap.xml');
    // });
    // All undefined asset or api routes should return a 404
    // app.route('/:url(api|auth|components|app|bower_components|assets)/*').get(errors[404]);

    // All other routes should redirect to the index.html
    // app.route('/*').get((req, res) => {
    //     res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    // });

    app.use('/:lang(en|zh)',require('./routers'));
    app.use('/',require('./routers'));

    // nodeAPI
    app.route('/napi').get(function (req, res) {
        setEnvCf(req, res);
        req.query.action = Array.isArray(req.query.action) ? req.query.action[1] : req.query.action;
        var action = req.query.action;
        // var model = require('./model/modelRegular');
        var napiConfigInfo = require('./app_napi.config.js');
        var page, pagesize;
        var offset, limit, sum;
        var page_total = 0;
        var data = null;
        var data_pre = global_modelRegular['products'];
        var rs;
        var oError = null;
        // 兼容老版本APP 获取分页数据
        if (action == "get_regular_list") {
            page = req.query.page || 1;
            pagesize = req.query.pagesize || 10;
            sum = data_pre.length;
            page_total = Math.ceil(sum / pagesize);
            if (page > page_total) {
                oError = {
                    error_msg: "错误的页码"
                };
            } else {
                var data_pre_new = [];
                var deepCopy = function (source) {
                    var result = source ? {} : source;
                    for (var key in source) {
                        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
                    }
                    return result;
                }

                for (var i = 0; i < data_pre.length; i++) {
                    var data_new_item = deepCopy(data_pre[i]);

                    data_new_item["name"] = data_new_item["name"].substring(1, data_new_item["name"].length - 1);
                    data_new_item["profit_rate_wish_year"] = data_new_item["profit_rate_wish"];
                    data_new_item["profit_rate_wish"] = Math.ceil(data_new_item["profit_rate_wish"].split("%")[0] / 12) + '%';
                    data_pre_new.push(data_new_item);
                }
                data = data_pre_new.slice((page - 1) * pagesize, Math.min(page * pagesize, sum));

            }
        }
        // 新的获取分页数据接口
        if (action == "get_regular_list_new") {
            offset = req.query.offset || 0;
            limit = req.query.limit || 10;
            sum = data_pre.length;
            page_total = Math.ceil(sum / limit);
            if (offset > sum) {
                oError = {
                    error_msg: "错误的页码"
                };
            } else {
                var data_pre_new = [];
                var deepCopy = function (source) {
                    var result = source ? {} : source;
                    for (var key in source) {
                        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
                    }
                    return result;
                }

                for (var i = 0; i < data_pre.length; i++) {
                    var data_new_item = deepCopy(data_pre[i]);

                    data_new_item["name"] = data_new_item["name"].substring(1, data_new_item["name"].length - 1);
                    data_new_item["profit_rate_wish_year"] = data_new_item["profit_rate_wish"];
                    data_new_item["profit_rate_wish"] = Math.ceil(data_new_item["profit_rate_wish"].split("%")[0] / 12) + '%';
                    data_pre_new.push(data_new_item);
                }
                var endPg = Number(offset) + Number(limit);
                data = data_pre_new.slice(offset, Math.min(endPg, sum));
                // console.log(data, endPg);
            }
        }
        if (action == "get_regular_detail") {
            var regular_id = req.query.regular_id;
            data_pre.forEach(function (product, index) {
                if (product.id == regular_id) {
                    data = product;
                }
            });
        }
        // APP更新版本信息已配置到CRM中，无需再从这里获取，此接口不再提供更新，只保留兼容老版本APP
        if (action == "version_check") {
            console.log(req.query);
            console.log('-----array-----', Array.isArray(req.query.lang));
            // www域名请求会重复携带query数据，这里临时做一下兼容
            req.query.lang = Array.isArray(req.query.lang) ? req.query.lang[1] : req.query.lang;
            req.query.action = Array.isArray(req.query.action) ? req.query.action[1] : req.query.action;
            req.query.os = Array.isArray(req.query.os) ? req.query.os[1] : req.query.os;
            req.query.type = Array.isArray(req.query.type) ? req.query.type[1] : req.query.type;
            req.query.version = Array.isArray(req.query.version) ? req.query.version[1] : req.query.version;
            var appType;   // global, uk, pandafx, old
            var appLanguage = req.query.lang || 'cn';
            appLanguage == 'zh' && (appLanguage = 'cn');
            appLanguage != 'cn' && (appLanguage = 'en');
            if (req.query.type) {
                appType = req.query.type;
            } else {
                if (COMPANY_NAME == 'tigerwit') {
                    appType = 'old';
                } else {
                    appType = 'pandafx';
                }
            }
            var system = req.query.os.toLowerCase();
            var versionNum = req.query.version.replace(/\./g, "");
            var versinInfo = require('./app_ctrl.config').getAppInfo(appType)[appLanguage];
            var currentVersionNum = versinInfo[system].app_info.version_name.replace(/[v\.]/ig, "");

            var currentVersion = {
                version_name: "",
                description: "",
                updated_description: "",
                url: "",
                force_update: false
            };
            // console.log(appType, system, Number(versionNum), Number(currentVersionNum));

            if (Number(versionNum) < Number(currentVersionNum)) {

                for (var key in versinInfo[system].app_info) {
                    currentVersion[key] = versinInfo[system].app_info[key];
                }
                //重命名
                if ((system == 'android') && (appType == 'old')) {
                    currentVersion.version_name = "V1.0.1";
                }
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
        if (action == "get_push_banner_info") {
            data = napiConfigInfo.getPushBannerInfo();
        }
        // 媒体报道
        if (action == "get_report_site") {
            offset = req.query.offset || 0;
            limit = req.query.limit || 10;
            sum = report_sites.length;
            page_total = Math.ceil(sum / limit);
            if (offset > sum) {
                oError = {
                    error_msg: "错误的页码"
                };
            } else {

                var endPg = Number(offset) + Number(limit);
                data = report_sites.slice(offset, Math.min(endPg, sum));
                // console.log(data, endPg);
            }
        }
        // 银行列表
        if (action == "get_deposit_bank") {
            data = depositBankList;
        }
        // 大额入金示例
        if (action == "get_deposit_evidence") {
            data = depositEvidenceList;
        }
        if (action == 'get_product') {
            var type = req.query.product_type;
            data = type ? require('./model/modelProduct.js')[type] : [] || {};
        }
        if (action == 'get_trade_fee') {
            data = require('./model/modelTradeFee.js') || {};
        }
        //控制某些功能或者页面开关
        if (action == "get_function_switch") {
            data = {
                spaceAgentSwitch: true,     //个人中心代理商后台入口
            };
        }
        // 获取邀请好友图片
        if (action == 'get_share_img') {
            (function(){
                var QRSynthesizer = require('./api/invite_img.js').QRSynthesizer
                var Synthesizer = new QRSynthesizer(req)
                Synthesizer.merge(function (output) {
                    if(output){
                        res.sendFile(output, function(err){
                            if(err){
                                console.log(err)
                            } else {
                                Synthesizer.clearOutput()
                                Synthesizer = null
                            }
                        });
                    } else {
                        res.json({
                            is_succ: false,
                            code: 1,
                            message: "参数错误"
                        })
                    }
                })
            }())
            return
        }
        if (data) {
            if (offset) {
                rs = {
                    is_succ: true,
                    code: 0,
                    message: "获取成功",
                    data: {
                        records: data,
                        page_count: page_total,
                        record_count: sum
                    }
                }
            } else {
                rs = {
                    is_succ: true,
                    code: 0,
                    message: "获取成功",
                    data: data
                }
            }
            if (page) {
                rs.page = page;
                rs.sum = sum;
            }
        } else {
            rs = {
                is_succ: false,
                code: 1,
                message: "获取失败"
            }
            if (oError) {
                rs.message = oError.error_msg;
            }
        }
        res.json(rs);
    });
    app.route('/third_napi').get(function (req, res) {
        var ThirdPath = require('./third_napi.js')()
        var data = new ThirdPath(req);
        var nError = null, rs = null;
        if (data) {
            rs = {
                is_succ: true,
                code: 0,
                message: "",
                data: data.oPath
            }
        } else {
            rs = {
                is_succ: false,
                code: 1,
                message: ""
            }
            if (nError) {
                rs.message = nError.error_msg;
            }
        }
        res.json(rs);
    });

    app.route('/:url(404|*)').get(function (req, res) {
        // var viewFilePath = '404';
        // var statusCode = 404;
        // res.status(statusCode);
        // res.render(viewFilePath, {}, function(err, html) {
        //     if (err) {
        //         return res.json(statusCode);
        //     }
        //     res.send(html);
        // });
        setEnvCf(req, res);
        res.render('404.html', extendPublic({}, req));
    });

};