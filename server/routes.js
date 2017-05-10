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
var setCompanyCookie,
    envConfig,
    URL_PATH,
    COMPANY_NAME,
    Lang,
    global_modelRegular,
    gloal_modelRegularDetail;

var SetEnvConfig = require('./get_env_config').SetEnvConfig;

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
        res.render('ranklist.html', extendPublic({}, req));
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
            res.render('m_download.html', extendPublic(extendObj, req));
        } else {
            res.render('web_download.html', extendPublic({}, req));
        }
    });

    /*定期跟单开始*/
    app.route('/regular').get(function (req, res) {
        setEnvCf(req, res);

        res.render('regular_list.html', extendPublic({
            model: global_modelRegular
        }, req));
    });
    app.route('/regular/agree/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('regular_agree.html', extendPublic({
            model: global_modelRegular,
            detail_id: req.params.subpage || ""
        }, req));
    });
    app.route('/m/regular/agree/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_regular_agree.html', extendPublic({
            model: global_modelRegular,
            detail_id: req.params.subpage || ""
        }, req));
    });
    app.route('/regular/detail/:subpage').get(function (req, res) {
        setEnvCf(req, res)
        res.render('regular_detail.html', extendPublic({
            model: gloal_modelRegularDetail(req.params.subpage || "")
        }, req));
    });
    app.route('/m/regular/detail/:subpage').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_regular_detail.html', extendPublic({
            model: gloal_modelRegularDetail(req.params.subpage || "")
        }, req));
    });
    app.route('/m/regular/detail/team/:subpage').get(function (req, res) {
        var team_html = global_modelRegular.getTeamHtmlName(req.params.subpage);
        setEnvCf(req, res);
        res.render('regular/' + team_html + '.html', extendPublic({}, req));
    });
    app.route('/m/regular/detail/history/:subpage').get(function (req, res) {
        var aImages = global_modelRegular.getTeamHistoryImages(req.params.subpage);
        setEnvCf(req, res);
        res.render('regular/m_regular_detail_history.html', extendPublic({
            model: {
                aImages: aImages
            }
        }, req));
    });

    /*定期跟单结束开始*/

    /*--------------------APP-Beagin---------------------*/
    /*注册相关页面*/
    /*注册相关页面*/
    app.route('/m/h5_register/:status(reg|succ|agreement)').get(function (req, res) {
        var status = req.params.status || 'reg';
        var pageInfo = {
            status: status
        };
        setEnvCf(req, res);
        res.render('h5_register.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/m/register').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_register01", extendPublic({}, req));
    });
    app.route('/m/register2').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_register02", extendPublic({}, req));
    });
    app.route('/m/register3').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_register03", extendPublic({}, req));
    });
    /*成为高手*/
    app.route('/m/agent/become').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_agent_become", extendPublic({}, req));
    });

    /*定期跟单*/
    app.route('/m/regular/how').get(function (req, res) {
        setEnvCf(req, res);
        res.render("m_regular_how", extendPublic({}, req));
    });

    /*出入金流程*/
    app.route('/m/asset/:subpage(withdraw|cardlist|addcard1|addcard2|succ|fail)').get(function (req, res) {
        var subpage = req.params.subpage || 'withdraw';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('m_asset.html', extendPublic({
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
        res.render('m_asset_new.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    /*邀请好友*/
    app.route('/m/invite01').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_invite01', extendPublic({
            page: 'invite01'
        }, req));
    });
    app.route('/m/register_coupon').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_invite01', extendPublic({
            page: 'register_coupon'
        }, req));
    });

    app.route('/m/invite02').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_invite02', extendPublic({}, req));
    });

    /*H5 web 关于我们 英文页面*/
    app.route('/m/web/about/us').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_about_us', extendPublic({}, req));
    });

    /* H5 充值中转页面 */
    app.route('/m/deposit/test').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_deposit_test', extendPublic({}, req));
    });
    app.route('/m/deposit/pay').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_deposit_pay', extendPublic({}, req));
    });

    // 第三方认证流程
    app.route('/m/third/register').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_third_verify', extendPublic({}, req));
    });
    app.route('/m/third/password').get(function (req, res) {
        setEnvCf(req, res);
        res.render('m_third_password', extendPublic({}, req));
    });

    /*--------------------APP-End-------------------------*/


    app.route('/trader/:usercode').get(function (req, res) {
        var usercode = req.params.usercode;
        setEnvCf(req, res);
        console.log('URL_PATH',URL_PATH);
        request(URL_PATH + '/action/public/v5/get_master_info?user_code=' + usercode, function (error, response, body) {
            // request('https://www.tigerwit.com/action/public/v5/get_master_info?user_code=' + usercode, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.info('body.data',body.data);
                body = JSON.parse(body);
                res.render('trader.html', extendPublic({
                    master: body.data,
                    usercode: usercode
                }, req));
            }
        });
    });

    // 条件和条款
    app.route('/web/blog/:subpage(risk|statement|notice)').get(function (req, res) {
        var subpage = req.params.subpage || 'risk';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web_blog.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // 复制交易
    app.route('/web/copy/:subpage(rules|select|become|comment)').get(function (req, res) {
        var subpage = req.params.subpage || 'rules';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web_copy.html', extendPublic({
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
        res.render('web_product.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    app.route('/web/product/trade').get(function (req, res) {
        setEnvCf(req, res);
        res.render('trade_tool.html', extendPublic({}, req));
    })

    // 资讯
    app.route('/web/information/:subpage(time|comment|market)').get(function (req, res) {
        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web_information.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    // 关于老虎金融
    app.route('/web/about/:subpage(stp|team|report|control|tigerwit|partner)').get(function (req, res) {

        var subpage = req.params.subpage || 'forex';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('web_about.html', extendPublic({
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
        res.render('web_faq.html', extendPublic({
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
        res.render('web_agent.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/web/mt4').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web_mt4.html', extendPublic({}, req));
    });



    app.route('/study/:subpage(introduction|term|fundamental|skill|video)').get(function (req, res) {
        var subpage = req.params.subpage || 'skill';
        var pageInfo = {
            id: subpage
        };
        setEnvCf(req, res);
        res.render('study.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });

    app.route('/help').get(function (req, res) {
        setEnvCf(req, res);
        res.render('help_doc.html', extendPublic({}, req));
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

    app.route('/activity').get(function (req, res) {
        setEnvCf(req, res);
        res.render('web-bonus1.html', extendPublic({}, req));
    });

    app.route('/activity/simulate426').get(function (req, res) {
        setEnvCf(req, res);
        res.render('simulate-426.html', extendPublic({}, req));
    });

    // 页面跳转中
    app.route('/waiting').get(function (req, res) {
        setEnvCf(req, res);
        res.render('waiting', extendPublic({}, req));
    });

    app.route('/bd/yellow').get(function (req, res) {
        if (COMPANY_NAME === 'tigerwit') {
            setEnvCf(req, res);
            res.render('bd_m_yellow', extendPublic({}, req));
        }
    });

    //理财江湖
    app.route('/bd/t34').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit') {
            if (isMobile(req)) {
                res.render('bd_m_lake', extendPublic({}, req));
            } else {
                res.render('bd_lake', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    app.route('/bd/t29').get(function (req, res) {
        setEnvCf(req, res);
        res.render('bd_t29', extendPublic({}, req));
    });

    app.route('/bd/t30').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd_m7', extendPublic({}, req))
        } else {
            res.render('bd_t30', extendPublic({}, req));
        }
    });
    app.route('/bd/t27').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd_m_t27', extendPublic({}, req))
        } else {
            res.render('bd_t27', extendPublic({}, req));
        }
    });
    app.route('/bd/t31').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            // 暂时把派克道森的H5强跳到pc页 同bd下check.js同时修改
            if (COMPANY_NAME === 'tigerwit') {
                res.render('bd_m_t31', extendPublic({
                    pageInfo: ""
                }, req))
            }
            if (COMPANY_NAME === 'pkds') {
                res.render('bd_t31', extendPublic({}, req));
            }
        } else {
            res.render('bd_t31', extendPublic({}, req));
        }
    });

    app.route('/bd/t31_game').get(function (req, res) {
        setEnvCf(req, res);
        res.render('bd_mt31_game', extendPublic({}, req))
    });

    app.route('/bd/t32').get(function (req, res) {
        setEnvCf(req, res);

        // 暂时把派克道森的H5强跳到pc页 同bd下check.js同时修改
        if (COMPANY_NAME === 'tigerwit') {
            res.render('bd_m_t31', extendPublic({
                pageInfo: "t32"
            }, req))
        }
        if (COMPANY_NAME === 'pkds') {
            res.render('bd_t31', extendPublic({}, req));
        }

    });

    app.route('/bd/t32_t').get(function (req, res) {
        setEnvCf(req, res);
        // 暂时把派克道森的H5强跳到pc页 同bd下check.js同时修改
        if (COMPANY_NAME === 'tigerwit') {
            res.render('bd_m_t31', extendPublic({
                pageInfo: "t32_t"
            }, req))
        }
        if (COMPANY_NAME === 'pkds') {
            res.render('bd_t31', extendPublic({}, req));
        }

    });
    // t33 作为固定推广链接，要更新最新的落地页到这个地址
    app.route('/bd/:page(|t33_t|t33_a|t33_b)').get(function (req, res) {
        var pageId = req.params.page || 't33';
        setEnvCf(req, res);
        if (isMobile(req)) {
            if (COMPANY_NAME === 'tigerwit') {
                if (pageId == 't33') {
                    res.render('bd_m_t33', extendPublic({
                        regBtn_text: '领取赠金',
                        coInfo: "",
                        page: pageId,
                        sel_text: '首选'
                    }, req));
                } else {
                    res.render('bd_m_t33', extendPublic({
                        regBtn_text: '前往领取赠金',
                        coInfo: "Tiger Financial Technology PTY. Ltd.",
                        page: pageId,
                        sel_text: '优选'
                    }, req));
                }
            } else {
                res.render('bd_t33_sub', extendPublic({}, req));
            }
        } else {
            res.render('bd_t33_sub', extendPublic({}, req));
        }
    });

    app.route('/bd/t33').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('bd_m_t37', extendPublic({}, req))
            } else {
                res.render('bd_t37', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 红包活动
    app.route('/bd/t35').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
            // if (isMobile(req)) {
            //     res.render('bd_m_redbag', extendPublic({}, req));
            // } else {
            //     res.render('bd_redbag', extendPublic({}, req));
            // }
            if (isMobile(req)) {
                res.render('bd_m_t37', extendPublic({}, req))
            } else {
                res.render('bd_t37', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 红包活动4.24 活动
    app.route('/bd/t35_r').get(function (req, res) {
        setEnvCf(req, res);
        if (COMPANY_NAME === 'tigerwit' || COMPANY_NAME === 'lonfx' || COMPANY_NAME === 'pandafx') {
            if (isMobile(req)) {
                res.render('404.html', extendPublic({}, req));
            } else {
                res.render('bd_redbag_2', extendPublic({}, req));
            }
        } else {
            res.render('404.html', extendPublic({}, req));
        }
    });

    // 联众德州活动
    app.route('/bd/t36_game').get(function (req, res) {
        setEnvCf(req, res);
        if (isMobile(req)) {
            res.render('bd_mt36_game', extendPublic({}, req))
        } else {
            res.render('bd_pct36_game', extendPublic({}, req));
        }
    });

    // app.route('/bd/t37').get(function (req, res) {
    //     setEnvCf(req, res);
    //     if (isMobile(req)) {
    //         res.render('bd_m_t37', extendPublic({}, req))
    //     } else {
    //         res.render('bd_t37', extendPublic({}, req));
    //     }
    // });

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
        res.render('m_vue.html', extendPublic({
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
        res.render('m_vue_info.html', extendPublic({
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
        res.render('m_vue_info.html', extendPublic({
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
        res.render('m_vue_info.html', extendPublic({
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
        res.render('m_vue_password.html', extendPublic({
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
        res.render('m_vue_binding.html', extendPublic({
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
        res.render('m_vue_binding.html', extendPublic({
            pageInfo: pageInfo
        }, req));
    });
    // FAQ
    app.route('/m/wap/faq/:subpage(index|simulate|real|depwith|type|transaction|mt4|overnight)').get(function (req, res) {
        var subpage = req.params.subpage || 'index';

        setEnvCf(req, res);
        res.render('m_vue_faq.html', extendPublic({
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
        var page, pagesize, sum;
        var page_total = 0;
        var data = null;
        var data_pre = global_modelRegular['products'];
        var rs;
        var oError = null;
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
        if (action == "get_regular_detail") {
            var regular_id = req.query.regular_id;
            data_pre.forEach(function (product, index) {
                if (product.id == regular_id) {
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

            if (system == "android" && versionCode < versinInfo.currentVersionCode) {
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
        if (action == "get_push_banner_info") {
            data = napiConfigInfo.getPushBannerInfo();
        }
        // 媒体报道
        if (action == "get_report_site") {
            data = report_sites;
        }
        if (data) {
            rs = {
                is_succ: true,
                error_code: 0,
                error_msg: "获取成功",
                data: data
            }
            if (page) {
                rs.page = page;
                rs.sum = sum;
            }
        } else {
            rs = {
                is_succ: false,
                error_code: 1,
                error_msg: "获取失败"
            }
            if (oError) {
                rs.error_msg = oError.error_msg;
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