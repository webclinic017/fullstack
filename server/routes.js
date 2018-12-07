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
var report_sites = require('./report_site');
var depositBankList = require('./deposit_bank_list');
var depositEvidenceList = require('./deposit_evidence_list');
var ACCESS_ORIGIN2 = require('./get_env_config').envConfig.access_origin2 || 'https://a.tigerwit.com';
var setCompanyCookie,
    envConfig,
    URL_PATH,
    COMPANY_NAME,
    Lang,
    global_modelRegular,
    gloal_modelRegularDetail;

var SetEnvConfig = require('./get_env_config').SetEnvConfig;
var recordAccessTimes = require('./record_access_times');

function setEnvCf(req, res) {
    new SetEnvConfig(req);
    envConfig = require('./get_env_config').envConfig;
    COMPANY_NAME = envConfig.company_name;
    setCompanyCookie = require('./set_company_cookie');
    setCompanyCookie(req, res);
    Lang = require('./lang')();
    URL_PATH = envConfig.url_path;
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

function checkGlobalOrCN (req, res, u) {
    // u 是需要跳转404的域名 cn/global
    // console.log(req.protocol);
    var ou = u === 'cn' ? 'cn.tigerwit.com,cndemo.tigerwit.com' : 'globaldemo.tigerwit.com,global.tigerwit.com';
    if (ou.indexOf(req.host) != -1) {
        res.redirect(req.protocol+'://'+req.host+'/404');
    }
}

module.exports = function (app) {

    app.use('/api', require('./api'));

    //添加百度验证  --徐萌
    app.route('/baidu_verify_qTHsV5cQAY.html').get(function (req, res) {
        res.render('../../client/baidu_verify_qTHsV5cQAY.html');
    });
    //添加微信验证
    app.route('/MP_verify_lcsRW9jGPf32n5Ka.txt').get(function (req, res) {
        res.render('../../client/MP_verify_lcsRW9jGPf32n5Ka.html');
    });
    //爬虫配置
    app.route('/robots.txt').get(function (req, res) {
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
    app.route('/space/').get(function (req, res) {
        setEnvCf(req, res);
        res.render('space', extendPublic({}, req));
    });

    app.route('/third_usage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/third_usage', extendPublic({}, req));
    });

    // 熊猫外汇页面路径
    app.route('/panda').get(function (req, res) {
        res.redirect('https://dp.tigerwit.com');
    });
    app.route('/panda/:subpage(login|asset)').get(function (req, res) {
        res.redirect('https://dpdev.tigerwit.com');
    });
    /*
     * 三方相关页面 start
     */
    // 第三开户认证流程
    app.route('/m/third/register').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_third_verify', extendPublic({}, req));
    });
    app.route('/m/third/password').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_third_password', extendPublic({}, req));
    });
    // 第三方充值提现相关页面
    app.route('/m/third/payment/login').get(function (req, res) {
        setEnvCf(req, res);
        res.render('third_app/login.html', extendPublic({}, req));
    });
    app.route('/m/third/asset').get(function (req, res) {
        setEnvCf(req, res);
        res.render('third_app/asset.html', extendPublic({}, req));
    });
    app.route('/m/third/transfer').get(function (req, res) {
        setEnvCf(req, res);
        res.render('third_app/transfer.html', extendPublic({}, req));
    });
    app.route('/m/third/bank_rule').get(function (req, res) {
        setEnvCf(req, res);
        res.render('third_app/bank_rule.html', extendPublic({}, req));
    });
    app.route('/m/third/add_bank').get(function (req, res) {
        setEnvCf(req, res);
        res.render('third_app/add_bank.html', extendPublic({}, req));
    });

    /*
     * 三方相关页面 end
     */
    app.use('/', function(req, res, next){
        setEnvCf(req, res);
        var allowPaths = ['/payment/login', '/payment/asset', '/payment/evidence', '/payment/cse_usage', '/waiting', '/napi']
        // if(req.hostname.indexOf('dp') != -1) {
        if(req.hostname.indexOf('w.dev.tigerwit.com') != -1) {
            if(allowPaths.indexOf(req.originalUrl) != -1){
                var pageId = ''
                if(req.originalUrl == allowPaths[0]){
                    pageId = 'login'
                }
                else if(req.originalUrl == allowPaths[1]){
                    pageId = 'asset'
                } 
                else if(req.originalUrl == allowPaths[3]){
                    pageId = 'cse_usage'
                } 
                else if(req.originalUrl == allowPaths[2]){
                    pageId = 'evidence'
                } 
                else if(req.originalUrl == allowPaths[4]){
                    res.render('waiting', extendPublic({}, req));
                    return
                }
                res.render('third/index', extendPublic({
                    pageInfo: {
                        id: pageId
                    }
                }, req));
                return
            } else if(req.originalUrl.indexOf(allowPaths[5]) != -1){
                next()
            } else {
                res.redirect('/payment/login');
                return
            }
        } else {
            next()
        }
    })

    // TODO 可能需要改
    app.route('/').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            if (req.host.indexOf('global') != -1) {
                res.redirect('/download');
                return
            } else {
                res.redirect('/download');
                return
            }
        } else {
            if (COMPANY_NAME === 'tigerwit') {
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
                return
            }
        }
    });

    app.route('/cn').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            if (COMPANY_NAME === 'tigerwit') {
                res.redirect('https://cn.tigerwit.com/download');
                return
            }
        } else {
            if (COMPANY_NAME === 'tigerwit') {
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
                return
            }
        }
    });

    app.route('/ranklist').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/ranklist.html', extendPublic({}, req));
    });

    app.route('/:downloadPage(download|download_t)').get(function (req, res) {
        setEnvCf(req, res)
        var pageId = req.params.downloadPage;
        if (isMobile(req)) {
            var extendObj = {};
            if (pageId == 'download') {
                extendObj = {
                    regularTip: '收益同步',
                    download: '下载 APP',
                    coInfo: ""
                }
            } else {
                extendObj = {
                    regularTip: '订单同步',
                    download: '打开APP 领$10000体验金',
                    coInfo: "Tiger Financial Technology PTY. Ltd."
                }
            }
            // TODO 可能需要改
            if (req.host.indexOf('global') == -1) {
                res.render('m_vue/download.html', extendPublic(extendObj, req));
            }else{
                res.render('m_vue/download_global.html', extendPublic(extendObj, req));
            }
        } else {
            res.render('web/download.html', extendPublic({}, req));
        }
    });

    // 支付宝临时入金页面
    app.route('/alipay/temp').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/alipay', extendPublic({}, req));
    });

    /*定期跟单开始*/
    app.route('/regular').get(function (req, res) {
        setEnvCf(req, res);

        res.render('web/regular/list.html', extendPublic({
            model: global_modelRegular
        }, req));
    });
    app.route('/regular/agree/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/regular/agree.html', extendPublic({
            model: global_modelRegular,
            detail_id: req.params.subpage || ""
        }, req));
    });
    app.route('/regular/detail/:subpage').get(function (req, res) {
        setEnvCf(req, res)
        res.render('web/regular/detail.html', extendPublic({
            model: gloal_modelRegularDetail(req.params.subpage || "")
        }, req));
    });
    app.route('/m/regular/agree/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/regular/agree.html', extendPublic({
            model: global_modelRegular,
            detail_id: req.params.subpage || ""
        }, req));
    });
    app.route('/m/regular/detail/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/regular/detail.html', extendPublic({
            model: gloal_modelRegularDetail(req.params.subpage || "")
        }, req));
    });
    app.route('/m/regular/detail/team/:subpage').get(function (req, res) {
        var subpage = req.params.subpage;
        if (subpage.indexOf('_') != -1) {
            subpage = subpage.split('_')[1];
        }
        // var team_html = global_modelRegular.getTeamHtmlName(req.params.subpage);
        setEnvCf(req, res);
        res.render('m_vue/regular/detail.team.' + subpage + '.html', extendPublic({}, req));
    });
    app.route('/m/regular/detail/history/:subpage').get(function (req, res) {
        var aImages = global_modelRegular.getTeamHistoryImages(req.params.subpage);
        setEnvCf(req, res);
        res.render('m_vue/regular/detail.history.html', extendPublic({
            model: {
                aImages: aImages
            }
        }, req));
    });

    /*定期跟单结束开始*/

    /*--------------------APP-Beagin---------------------*/
    /*注册相关页面*/
    app.route('/m/h5_register/:status(reg|succ|agreement)').get(function (req, res) {
        var status = req.params.status || 'reg';
        var pageInfo = {
            status: status
        };
        setEnvCf(req, res);
        res.render('m_vue/register/index.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    /*成为高手*/
    app.route('/m/agent/become').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_vue/m_agent_become", extendPublic({}, req));
    });

    /*定期跟单*/
    app.route('/m/regular/how').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_vue/regular/how", extendPublic({}, req));
    });

    /*邀请好友*/
    app.route('/m/invite01').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/invite/m_invite01', extendPublic({
            page: 'invite01'
        }, req));
    });
    app.route('/m/register_coupon').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/invite/m_invite01', extendPublic({
            page: 'register_coupon'
        }, req));
    });

    app.route('/m/invite02').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/invite/m_invite02', extendPublic({}, req));
    });

    /*H5 web 关于我们 英文页面*/
    app.route('/m/web/about/us').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_about_us_en', extendPublic({}, req));
    });

    /*H5 关于我们*/
    app.route('/m/about/us').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_about_us', extendPublic({}, req));
    });
    /*H5 复制规则*/
    app.route('/m/copy/rule').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_vue/m_copy_rule", extendPublic({}, req));
    });

    /* H5 充值中转页面 */
    app.route('/m/deposit/pay').get(function (req, res) {
        setEnvCf(req, res);
        var platform = 'pc';
        var banklistStatus = 'static';
        if (isMobile(req)) {
            platform = 'mobile';
        }
        res.render('m_vue/m_deposit_pay', extendPublic({
            platform: platform,
            banklistStatus: banklistStatus
        }, req));
    });
    app.route('/m/deposit/pay_select').get(function (req, res) {
        setEnvCf(req, res);
        var banklistStatus = 'select';
        var platform = 'pc';
        if (isMobile(req)) {
            platform = 'mobile';
        }
        res.render('m_vue/m_deposit_pay', extendPublic({
            platform: platform,
            banklistStatus: banklistStatus
        }, req));
    });
    app.route('/m/deposit/pay_select_v2').get(function (req, res) {
        setEnvCf(req, res);
        var banklistStatus = 'selectV2';
        var platform = 'pc';
        if (isMobile(req)) {
            platform = 'mobile';
        }
        res.render('m_vue/m_deposit_pay', extendPublic({
            platform: platform,
            banklistStatus: banklistStatus
        }, req));
    });
    app.route('/m/deposit/pay_select_v3').get(function (req, res) {
        setEnvCf(req, res);
        var banklistStatus = 'selectV3';
        var platform = 'pc';
        if (isMobile(req)) {
            platform = 'mobile';
        }
        res.render('m_vue/m_deposit_pay', extendPublic({
            platform: platform,
            banklistStatus: banklistStatus
        }, req));
    });
    /* H5 充值成功 */
    app.route('/m/deposit/success').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_deposit_succ', extendPublic({}, req));
    });
    // H5 入金凭证 （老虎和三方使用）
    app.route('/m/deposit/evidence').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_deposit_evidence', extendPublic({}, req));
    });

    // H5 空白页
    app.route('/m/blank').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_blank', extendPublic({}, req));
    });
    // 打开APP
    app.route('/to_app_website').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/to_app_website', extendPublic({}, req));
    });

    /*--------------------APP-End-------------------------*/

    app.route('/trader/:usercode').get(function (req, res) {
        setEnvCf(req, res);
        console.log('---------cookies---------', req.headers.cookie);
        var usercode = req.params.usercode;
        var masterApiPath = URL_PATH + '/api/v3';
        console.log('------masterApiPath', masterApiPath);

        request({
            url: masterApiPath + '/master/trading_profile?user_code=' + usercode,
            headers: {
                'cookie': req.headers.cookie
            }
        }, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                setEnvCf(req, res); //再次设置避免tigerwit和pandafx混乱
                body = JSON.parse(body);
                console.info('-------body.data', body.data);
                res.render('web/trader.html', extendPublic({
                    master: body.data,
                    usercode: usercode
                }, req));
            }
        })


        // request(masterApiPath + '/master/trading_profile?user_code=' + usercode, function (error, response, body) {
        //     if (!error && response.statusCode == 200) {
        //         setEnvCf(req, res); //再次设置避免tigerwit和pandafx混乱
        //         body = JSON.parse(body);
        //         console.info('-------body.data', body.data);
        //         res.render('web/trader.html', extendPublic({
        //             master: body.data,
        //             usercode: usercode
        //         }, req));
        //     }
        // });
    });

    // WEB 入金凭证
    app.route('/web/deposit/evidence').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/evidence', extendPublic({}, req));
    });

    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become|comment|calendar)').get(function (req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/copy.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 交易品种
    app.route('/web/product/:subpage(forex|metal|oil|cfd)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/product.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/web/product/trade').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/mt4_online.html', extendPublic({}, req));
    })

    // 关于老虎金融
    app.route('/web/aboutus/:subpage(stp|team|report|control|companyinformation|partner|liverpool|medianewsandcontact|abouttigerwit)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/about.html', extendPublic({
            pageInfo: pageInfo,
            report_sites: report_sites
        }, req));
    });

    // faq 常见问题在web文件下
    app.route('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)').get(function (req, res) {
        var subpage = req.params.subpage || 'protect';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/faq.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 代理合作
    app.route('/web/agent/:subpage(proxy|become|partner)').get(function (req, res) {
        var subpage = req.params.subpage || 'proxy';
        if(subpage == 'partner') {
            var pageInfo = {
                id: 'proxy'
            };
        } else {
            var pageInfo = {
                id: subpage
            };
        }
        setEnvCf(req, res);
        if (isMobile(req) && pageInfo.id == 'proxy') {
            res.render('bd/agent/promotion.html', extendPublic({
                pageInfo: pageInfo
            }, req));
        } else {
            res.render('web/agent.html', extendPublic({
                pageInfo: pageInfo
            }, req));
        }
    });
    //global代理
    // app.route('/web/agent/partner').get(function (req, res) {
    //     var pageInfo = {
    //         id: 'proxy'
    //     };
    //     setEnvCf(req, res);
    //     res.render('web/agent.html', extendPublic({
    //         pageInfo: pageInfo
    //     }, req));
    // });

    // 条件和条款
    app.route('/web/blog/:subpage(agreement|trade_fee)').get(function (req, res) {
        var subpage = req.params.subpage || 'trade_fee';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/blog.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 条件和条款--子项目
    app.route('/agreement/:subpage').get(function (req, res) {
        var subpage = req.params.subpage;
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('web/m_agreement.html', extendPublic({
                pageInfo: pageInfo
            }, req));
        } else {
            res.render('web/agreement.html', extendPublic({
                pageInfo: pageInfo
            }, req));
        }

    });

    app.route('/web/mt4').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/mt4.html', extendPublic({}, req));
    });

    app.route('/study/:subpage(introduction|term|fundamental|skill|video)').get(function (req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/study.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/web/help/:subpage(introduce|regular_web|regular_app|copy_web|copy_app|minMarket_app)').get(function (req, res) {
        var subpage = req.params.subpage || 'introduce';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/help.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/web/course/:subpage(*)').get(function (req, res) {
        var subpage = req.params.subpage || '';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/course.html', extendPublic({
            pageInfo: pageInfo
        }, req));
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
        setEnvCf(req, res);
        res.render('waiting', extendPublic({}, req));
    });
    // 直播落地页
    app.route('/bd/live').get(function (req, res) {
        checkGlobalOrCN(req, res, 'global');
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/live/h5', extendPublic({}, req));
        } else {
            res.render('bd/live/web', extendPublic({}, req));
        }
    });

    // t33 作为固定推广链接，要更新最新的落地页到这个地址
    app.route('/bd/t33').get(function (req, res) {
        checkGlobalOrCN(req, res, 'global');
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/t42/h5.html', extendPublic({}, req))
        } else {
            res.render('bd/t42/web.html', extendPublic({}, req));
        }
    });
    
    // 11月份活动
    app.route('/bd/t35').get(function (req, res) {
        checkGlobalOrCN(req, res, 'global');
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/t42/h5.html', extendPublic({}, req))
        } else {
            res.render('bd/t42/web.html', extendPublic({}, req));
        }
    });
    // global活动页
    app.route('/bonus').get(function (req, res) {
        checkGlobalOrCN(req, res, 'cn');
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/g35/h5.html', extendPublic({}, req))
        } else {
            res.render('bd/g35/web.html', extendPublic({}, req));
        }
    });
    // 新增邮件-海外种子用户加群 
    app.route('/whatsapp').get(function (req, res) {
        checkGlobalOrCN(req, res, 'cn');
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/g36/h5.html', extendPublic({}, req))
        } else {
            res.render('bd/g36/web.html', extendPublic({}, req));
        }
    });

    
    // 市场部 - 月报生成
    app.route('/bd/mon_report').get(function (req, res) {
        checkGlobalOrCN(req, res, 'global');
        setEnvCf(req, res);
        res.render('bd/mon_report/index', extendPublic({}, req));
    });

    // cms 生成H5活动页
    app.route('/bd/object/:subpage').get(function (req, res) {
        var subpage = req.params.subpage;
        var numName = "number_" + subpage;
        recordAccessTimes.readAccessTimes('/object_page_view.txt', numName, function (num) {
            // console.log(num);
            var pageInfo = {
                id: subpage,
                pageView: num || 0
            };
            setEnvCf(req, res);
            res.render('bd/object/index.html', extendPublic({
                pageInfo: pageInfo
            }, req));
        });
    });
    // cms 生成H5 - 每日汇评
    app.route('/bd/commentlist').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/commentlist/h5.html', extendPublic({}, req));
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });
    app.route('/bd/comment/:subpage').get(function (req, res) {
        var subpage = req.params.subpage;
        var numName = "number_" + subpage;
        recordAccessTimes.readAccessTimes('/comment_page_view.txt', numName, function (num) {
            // console.log(num);
            var pageInfo = {
                id: subpage,
                pageView: num || 0
            };
            setEnvCf(req, res);
            if (isMobile(req)) {
                res.render('bd/comment/h5.html', extendPublic({
                    pageInfo: pageInfo
                }, req));
            } else {
                res.render('bd/comment/web.html', extendPublic({
                    pageInfo: pageInfo
                }, req));
            }
        });
    });
    // H5 财经日历
    app.route('/bd/calendarlist').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/calendar/list.html', extendPublic({}, req));
        } else {
            res.render('404.html', extendPublic({}, req));
        }    
    });
    app.route('/bd/calendar/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/calendar/detail.html', extendPublic({
                id: req.params.subpage
            }, req));
        } else {
            res.render('404.html', extendPublic({}, req));
        }    
    });

    // help
    app.route('/m/wap/help/:subpage(*)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';

        setEnvCf(req, res);
        res.render('m_vue/m_vue_help.html', extendPublic({
            pageInfo: subpage
        }, req));
    });

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