/**
 * Main application routes
 */

'use strict';

var path = require('path');
var url = require('url');
var request = require('request');
var querystring = require('querystring');
var masterApi = require('./api/master');
var report_sites = require('./report_site');
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
    URL_PATH = envConfig.url_path;
    COMPANY_NAME = envConfig.company_name;
    Lang = require('./lang')();
    setCompanyCookie = require('./set_company_cookie');
    global_modelRegular = require('./model/modelRegular')();
    gloal_modelRegularDetail = require('./model/modelRegularDetail');
    // console.log(global_modelRegular);
    setCompanyCookie(res);
}

function extendPublic(data, req) {
    var lang = new Lang(req);
    data["lang"] = lang;

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

    // 熊猫外汇页面路径
    app.route('/panda').get(function (req, res) {
        setEnvCf(req, res);
        res.render('panda', extendPublic({
            pageInfo: {
                id: "login"
            }
        }, req));
    });
    app.route('/panda/:subpage(login|asset)').get(function (req, res) {
        setEnvCf(req, res);
        res.render('panda', extendPublic({
            pageInfo: {
                id: req.params.subpage || ""
            }
        }, req));
    });

    app.route('/').get(function (req, res) {
        setEnvCf(req, res);

        if (isMobile(req)) {
            var cookieList = querystring.parse(req.headers.cookie, '; ');
            var trunPC = false;
            for (var name in cookieList) {
                // console.info(name);
                if (name === 'turnPC') {
                    trunPC = true;
                }
            }
            if (trunPC) {   // 回到电脑版
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
            } else {
                if (COMPANY_NAME === 'tigerwit') {
                    // res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex');
                    res.redirect('https://www.tigerwit.com/download');
                }
                if (COMPANY_NAME === 'pkds') {
                    // res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.parkerdawson.forex');
                    res.redirect('https://www.pkdsfx.com/download');
                }
            }
            if (COMPANY_NAME === 'lonfx') {
                // res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex');
                res.redirect('https://lonfx.tigerwit.com/download');
            }
            if (COMPANY_NAME === 'pandafx') {
                // res.redirect('http://a.app.qq.com/o/simple.jsp?pkgname=com.tigerwit.forex');
                res.redirect('https://pandafx.tigerwit.com/download');
            }
        } else {
            if (COMPANY_NAME === 'tigerwit') {
                if (req.query.label === 'Parkerdawson Co-operative Group Limited') {
                    res.redirect('https://www.pkdsfx.com/space/#/account/register');
                } else {
                    res.render('home.html', extendPublic({
                        pageInfo: {}
                    }, req));
                }
            }
            if (COMPANY_NAME === 'pkds') {
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
            }
            if (COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
                res.render('home.html', extendPublic({
                    pageInfo: {}
                }, req));
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
                    download: '打开APP 领$200体验金',
                    coInfo: "Tiger Financial Technology PTY. Ltd."
                }
            }
            res.render('m_vue/download.html', extendPublic(extendObj, req));
        } else {
            res.render('web/download.html', extendPublic({}, req));
        }
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
        if(subpage.indexOf('_') != -1){
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

    /*出入金流程*/
    app.route('/m/asset/:subpage(withdraw|cardlist|addcard1|addcard2|succ|fail)').get(function (req, res) {
        var subpage = req.params.subpage || 'withdraw';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_asset.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    /*出入金流程 新版*/
    app.route('/m/asset_new/:subpage(withdraw|cardlist|addcard1|addcard2|succ|fail)').get(function (req, res) {
        var subpage = req.params.subpage || 'withdraw';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_asset_new.html', extendPublic({
            pageInfo: pageInfo
        }, req));
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
        res.render('m_vue/m_about_us', extendPublic({}, req));
    });

    /* H5 充值中转页面 */
    
    app.route('/m/deposit/pay').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_deposit_pay', extendPublic({}, req));
    });

    // 第三方认证流程
    app.route('/m/third/register').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_third_verify', extendPublic({}, req));
    });
    app.route('/m/third/password').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_third_password', extendPublic({}, req));
    });

    // H5 空白页
    app.route('/m/blank').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_vue/m_blank', extendPublic({}, req));
    });

    /*--------------------APP-End-------------------------*/


    app.route('/trader/:usercode').get(function (req, res) {
        var usercode = req.params.usercode;
        var hostname = req.hostname;
        var hostArr = hostname.split('\.');
        // var apiOrigin = 'https://a.' + hostArr[hostArr.length - 2] + '.' + hostArr[hostArr.length - 1];
        var masterApiPath = '';
        if (process.env.COMPANY_NAME != 'tigerwit') {
            masterApiPath = process.env.URL_PATH + '/api';
        } else {
            var hostPrefix = hostArr[0];
            var hostPrefix2 = hostArr[1];
            // www.tigerwit.com
            // demo.tigerwit.com
            // w.tigerwit.com
            // w.dev.tigerwit.com

            // tigerwit.co.uk return hostname is ip 60.205.105.34
            if (hostname == '60.205.105.34') {
                masterApiPath = 'https://www.tigerwit.com/api'
            }
            else if (hostPrefix == 'demo' || hostPrefix2 == 'dev') {
                masterApiPath = 'https://demo.tigerwit.com/api'
            }
            else if (hostPrefix == 'www' || hostPrefix == 'w') {
                masterApiPath = 'https://www.tigerwit.com/api'
            }
        }
        // console.log('------masterApiPath', masterApiPath);
        setEnvCf(req, res);
        request(masterApiPath + '/master/trading_profile?user_code=' + usercode, function (error, response, body) {
            // request('https://www.tigerwit.com/action/public/v5/get_master_info?user_code=' + usercode, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
                console.info('-------body.data', body.data);
                res.render('web/trader.html', extendPublic({
                    master: body.data,
                    usercode: usercode
                }, req));
            }
        });
    });

    
    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become|comment)').get(function (req, res) {
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
    app.route('/web/about/:subpage(stp|team|report|control|tigerwit|partner)').get(function (req, res) {
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
    app.route('/web/agent/:subpage(proxy|become)').get(function (req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web/agent.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 条件和条款
    app.route('/web/blog/:subpage(agreement|risk|statement|notice|legal)').get(function (req, res) {
        var subpage = req.params.subpage || 'risk';
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

    app.route('/help').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web/help.html', extendPublic({}, req));
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

    //理财江湖
    app.route('/bd/t34').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit') {
            if (isMobile(req)) {
                res.render('bd/lake/h5.html', extendPublic({}, req));
            } else {
                res.render('bd/lake/web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 新手介绍页
    app.route('/bd/greenhand').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit') {
            if (isMobile(req)) {
                res.render('bd/greenhand/h5.html', extendPublic({}, req));
            } else {
                res.render('bd/greenhand/web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });
    // 直播落地页
    app.route('/bd/live').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit') {
            if (isMobile(req)) {
                res.render('bd/live/h5', extendPublic({}, req));
            } else {
                res.render('bd/live/web', extendPublic({}, req));
            }
        }
    });
    // 王者荣耀活动页
    app.route('/bd/honor').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit') {
            if (isMobile(req)) {
                res.render('bd/honor/h5', extendPublic({}, req));
            } else {
                res.render('bd/honor/web', extendPublic({}, req));
            }
        }
    });
    // 微信小游戏
    app.route('/bd/t31_game').get(function (req, res) {
        setEnvCf(req, res);
        res.render('bd/t31/h5.game.html', extendPublic({}, req))
    });
    
    // t33 作为固定推广链接，要更新最新的落地页到这个地址
    app.route('/bd/t33').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('bd/t36/h5.html', extendPublic({}, req))
            } else {
                res.render('bd/t36/web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    //红包活动
    // app.route('/bd/t35').get(function (req, res) {
    //     setEnvCf(req, res);
    //     if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
    //         if (isMobile(req)) {
    //             res.render('bd/t38/h5.html', extendPublic({}, req))
    //         } else {
    //             res.render('bd/t38/web.html', extendPublic({}, req));
    //         }
    //     } else {
    //         res.render('404.html', extendPublic({}, req));
    //     }
    // });
    // 11月份活动
    app.route('/bd/t35').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('bd/t36/h5.html', extendPublic({}, req))
            } else {
                res.render('bd/t36/web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 联众德州活动
    app.route('/bd/t36_game').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd/t36/h5.game.html', extendPublic({}, req))
        } else {
            res.render('bd/t36/web.game.html', extendPublic({}, req));
        }
    });

    // 品牌部活动 － 申请代理
    app.route('/bd/brand_proxy').get(function (req, res) {
        setEnvCf(req, res);
        res.render('bd/brand/proxy', extendPublic({
            in_phone: isMobile(req) ? 'y' : 'n'
        }, req));
    });

    // 抽奖活动
    app.route('/bd/prize').get(function (req, res) {
        // console.log(req.query.source);
        var s = req.query.source;

        recordAccessTimes.recordPrizeQrTimes('/prize_qr_times.txt', s, function (num) {
            
            setEnvCf(req, res);
            if (isMobile(req)) {
                res.render('bd/prize/h5.html', extendPublic({}, req));
            } else {
                if (COMPANY_NAME === 'tigerwit') {
                    res.render('bd/prize/web.html', extendPublic({
                        num: num
                    }, req));
                }
            }
        });
    });
    // 市场部 - 月报生成
    app.route('/bd/mon_report').get(function (req, res) {
        setEnvCf(req, res);
        res.render('bd/mon_report/index', extendPublic({}, req));
    });

    // cms 生成H5活动页
    app.route('/bd/object/:subpage').get(function (req, res) {
        var subpage = req.params.subpage;
        var numName = "number_"+subpage;
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

    // 一键原谅活动
    app.route('/bd/forgiveme').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('bd/forgive/h5.html', extendPublic({}, req))
            } else {
                res.render('bd/forgive/web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 四位一体
    app.route('/bd/4in1').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('bd/4in1/4in1_h5.html', extendPublic({}, req))
            } else {
                res.render('bd/4in1/4in1_web.html', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    /* 从 wap 项目迁移过来的功能 >> vue 项目 start*/
    /*
        设置     ->     info, password, binding, 
        忘记密码  ->     forget
    */
    app.route('/m/wap/:subpage(info|password|binding|forget)').get(function (req, res) {
        var subpage = req.params.subpage || 'info';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/index.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 基本信息修改 -> 头像、昵称、所在地
    app.route('/m/wap/info_avatar/:subpage(index)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';
        var pageInfo = {
            page: 'avatar',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_info.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/m/wap/info_username/:subpage(index)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';
        var pageInfo = {
            page: 'username',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_info.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/m/wap/info_location/:subpage(index)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';
        var pageInfo = {
            page: 'location',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_info.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 密码管理 -> 修改密码
    app.route('/m/wap/password_modify/:subpage(index)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';
        var pageInfo = {
            page: 'modify',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_password.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 绑定设置 -> 邮箱、手机号
    app.route('/m/wap/binding_email/:subpage(old|old_code|new|new_code|succ|fail)').get(function (req, res) {
        var subpage = req.params.subpage || 'old';
        var pageInfo = {
            page: 'email',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_binding.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/m/wap/binding_phone/:subpage(index)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';
        var pageInfo = {
            page: 'phone',
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_vue/m_vue_binding.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // FAQ
    app.route('/m/wap/faq/:subpage(index|simulate|real|depwith|type|transaction|mt4|overnight)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';

        setEnvCf(req, res);
        res.render('m_vue/m_vue_faq.html', extendPublic({
            pageInfo: subpage
        }, req));
    });

    // help
    app.route('/m/wap/help/:subpage(*)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';

        setEnvCf(req, res);
        res.render('m_vue/m_vue_help.html', extendPublic({
            pageInfo: subpage
        }, req));
    });

    /* end */

    // nodeAPI
    app.route('/napi').get(function (req, res) {
        setEnvCf(req, res);

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
            var system = req.query.system || req.query.os;
            var versionCode = req.query.version_code;
            var versinInfo = require('./app_ctrl.config');
            var currentVersionNumAndroid = versinInfo.getAppInfo().version_name.replace(/[v\.]/ig, "");
            var currentVersionNumIos = versinInfo.getAppInfoIos().version.replace(/[v\.]/ig, "");
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

            if (system == "android") {
                if (versionCode) {
                    if (versionCode < versinInfo.currentVersionCode) {
                        currentVersion = versinInfo.getAppInfo();
                    }
                } else {
                    // console.log(version, currentVersionNumAndroid);
                    var version = req.query.version.replace(/\./g, "");
                    if (Number(version) < Number(currentVersionNumAndroid)) {
                        currentVersion = versinInfo.getAppInfo();
                    }
                }
            } else if (system == "ios") {
                var version = versionCode.replace(/\./g, "");
                // console.log(version, currentVersionNumIos);
                if (Number(version) < Number(currentVersionNumIos)) {
                    currentVersion = versinInfo.getAppInfoIos();
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
        if (action == 'get_product') {
            var type = req.query.product_type;
            data = type ? require('./model/modelProduct.js')[type] : [] || {};
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
        res.render('404.html', extendPublic({}, req));
    });

};