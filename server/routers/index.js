const app = require('express');
const router = app.Router();


var report_sites = require('../report_site');
// var ACCESS_ORIGIN2 = require('./get_env_config').envConfig.access_origin2 || 'https://a.tigerwit.com';
var setCompanyCookie,
    envConfig,
    URL_PATH,
    COMPANY_NAME,
    Lang,
    global_modelRegular,
    gloal_modelRegularDetail;

var SetEnvConfig = require('../get_env_config').SetEnvConfig;
var recordAccessTimes = require('../record_access_times');

// TODO
function setEnvCf(req, res) {
    new SetEnvConfig(req);
    envConfig = require('../get_env_config').envConfig;
    COMPANY_NAME = envConfig.company_name;
    setCompanyCookie = require('../set_company_cookie');
    setCompanyCookie(req, res);  // 设置cookies
    Lang = require('../lang')();
    URL_PATH = envConfig.url_path;
    global_modelRegular = require('../model/modelRegular')();
    gloal_modelRegularDetail = require('../model/modelRegularDetail');
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



// 个人中心
router.get('/space/',function (req, res) {
    setEnvCf(req, res);
    res.render('space', extendPublic({}, req));
});

router.get('/third_usage',function (req, res) {
    setEnvCf(req, res);
    res.render('web/third_usage', extendPublic({}, req));
});

// 熊猫外汇页面路径
// router.get('/panda',function (req, res) {
//     res.redirect('https://dp.tigerwit.com');
// });
// router.get('/panda/:subpage(login|asset)',function (req, res) {
//     res.redirect('https://dpdev.tigerwit.com');
// });
/*
 * 三方相关页面 start
 */
// 第三开户认证流程
router.get('/m/third/register',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_third_verify', extendPublic({}, req));
});
router.get('/m/third/password',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_third_password', extendPublic({}, req));
});
// 第三方充值提现相关页面
router.get('/m/third/payment/login',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/login.html', extendPublic({}, req));
});
router.get('/m/third/asset',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/asset.html', extendPublic({}, req));
});
router.get('/m/third/transfer',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/transfer.html', extendPublic({}, req));
});
router.get('/m/third/bank_rule',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/bank_rule.html', extendPublic({}, req));
});
router.get('/m/third/add_bank',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/add_bank.html', extendPublic({}, req));
});
router.get('/m/third/add_third',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/add_third.html', extendPublic({}, req));
});
router.get('/m/third/add_transfer',function (req, res) {
    setEnvCf(req, res);
    res.render('third_app/add_transfer.html', extendPublic({}, req));
});

/*
 * 三方相关页面 end
 */
// app.use('/', function (req, res, next) {
//     setEnvCf(req, res);
//     var allowPaths = ['/payment/login', '/payment/asset', '/payment/evidence', '/payment/cse_usage', '/waiting', '/napi']
//     if (req.hostname.indexOf('dp') != -1) {
//         // if(req.hostname.indexOf('w.dev.tigerwit.com') != -1) {
//         if (allowPaths.indexOf(req.originalUrl) != -1) {
//             var pageId = ''
//             if (req.originalUrl == allowPaths[0]) {
//                 pageId = 'login'
//             }
//             else if (req.originalUrl == allowPaths[1]) {
//                 pageId = 'asset'
//             }
//             else if (req.originalUrl == allowPaths[3]) {
//                 pageId = 'cse_usage'
//             }
//             else if (req.originalUrl == allowPaths[2]) {
//                 pageId = 'evidence'
//             }
//             else if (req.originalUrl == allowPaths[4]) {
//                 res.render('waiting', extendPublic({}, req));
//                 return
//             }
//             res.render('third/index', extendPublic({
//                 pageInfo: {
//                     id: pageId
//                 }
//             }, req));
//             return
//         } else if (req.originalUrl.indexOf(allowPaths[5]) != -1) {
//             next()
//         } else {
//             res.redirect('/payment/login');
//             return
//         }
//     } else {
//         next()
//     }
// })

// TODO
router.get('/',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        var queryArr = [];
        var redirectUrl = '/download';
        for (var key in req.query) {
            queryArr.push(key + "=" + req.query[key]);
        }
        if (queryArr.length) redirectUrl = redirectUrl + '?' + queryArr.join('&');
        res.redirect(redirectUrl);
        return;
    } else {
        if (COMPANY_NAME === 'tigerwit') {
            res.render('home.html', extendPublic({
                pageInfo: {}
            }, req));
            return;
        }
    }
});

router.get('/cn',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        if (COMPANY_NAME === 'tigerwit') {
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

router.get('/ranklist',function (req, res) {
    setEnvCf(req, res);
    res.render('web/ranklist.html', extendPublic({}, req));
});

router.get('/:downloadPage(download|download_t)',function (req, res) {
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
        // if (req.host.indexOf('global') == -1) {
        //     res.render('m_vue/download.html', extendPublic(extendObj, req));
        // }else{
        res.render('m_vue/download_global.html', extendPublic(extendObj, req));
        // }
    } else {
        res.render('web/download.html', extendPublic({}, req));
    }
});
router.get('/cndownload',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/download/index.html', extendPublic({}, req));
});
// 支付宝临时入金页面
router.get('/alipay/temp',function (req, res) {
    setEnvCf(req, res);
    res.render('web/alipay', extendPublic({}, req));
});

/*定期跟单开始*/
router.get('/regular',function (req, res) {
    setEnvCf(req, res);

    res.render('web/regular/list.html', extendPublic({
        model: global_modelRegular
    }, req));
});
router.get('/regular/agree/:subpage',function (req, res) {
    setEnvCf(req, res);
    res.render('web/regular/agree.html', extendPublic({
        model: global_modelRegular,
        detail_id: req.params.subpage || ""
    }, req));
});
router.get('/regular/detail/:subpage',function (req, res) {
    setEnvCf(req, res)
    res.render('web/regular/detail.html', extendPublic({
        model: gloal_modelRegularDetail(req.params.subpage || "")
    }, req));
});
router.get('/m/regular/agree/:subpage',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/regular/agree.html', extendPublic({
        model: global_modelRegular,
        detail_id: req.params.subpage || ""
    }, req));
});
router.get('/m/regular/detail/:subpage',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/regular/detail.html', extendPublic({
        model: gloal_modelRegularDetail(req.params.subpage || "")
    }, req));
});
router.get('/m/regular/detail/team/:subpage',function (req, res) {
    var subpage = req.params.subpage;
    if (subpage.indexOf('_') != -1) {
        subpage = subpage.split('_')[1];
    }
    // var team_html = global_modelRegular.getTeamHtmlName(req.params.subpage);
    setEnvCf(req, res);
    res.render('m_vue/regular/detail.team.' + subpage + '.html', extendPublic({}, req));
});
router.get('/m/regular/detail/history/:subpage',function (req, res) {
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
router.get('/m/h5_register/:status(reg|succ|agreement)',function (req, res) {
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
router.get('/m/agent/become',function (req, res) {
    setEnvCf(req, res);
    res.render("m_vue/m_agent_become", extendPublic({}, req));
});

/*定期跟单*/
router.get('/m/regular/how',function (req, res) {
    setEnvCf(req, res);
    res.render("m_vue/regular/how", extendPublic({}, req));
});

/*邀请好友*/
router.get('/m/invite01',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/invite/m_invite01', extendPublic({
        page: 'invite01'
    }, req));
});
router.get('/m/register_coupon',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/invite/m_invite01', extendPublic({
        page: 'register_coupon'
    }, req));
});
//邀请好友新H5 - 2019.12.20
router.get('/m/invite',function (req, res) {
    setEnvCf(req, res);
    res.render('invite/m_invite', extendPublic({}, req));
});

router.get('/m/invite02',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/invite/m_invite02', extendPublic({}, req));
});

/*H5 web 关于我们 英文页面*/
router.get('/m/web/about/us',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_about_us_en', extendPublic({}, req));
});

/*H5 关于我们*/
router.get('/m/about/us',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_about_us', extendPublic({}, req));
});
/*H5 复制规则*/
router.get('/m/copy/rule',function (req, res) {
    setEnvCf(req, res);
    res.render("m_vue/m_copy_rule", extendPublic({}, req));
});

/* H5 充值中转页面 */
router.get('/m/deposit/pay',function (req, res) {
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
router.get('/m/deposit/avoda',function (req, res) {
    setEnvCf(req, res);
    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_avoda', extendPublic({
        platform: platform,
    }, req));
});
router.get('/m/deposit/lcpag',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_deposit_lcpag', extendPublic({}, req));
});
router.get('/m/deposit/pay_select',function (req, res) {
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
router.get('/m/deposit/pay_select_v2',function (req, res) {
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
router.get('/m/deposit/pay_select_v3',function (req, res) {
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
//ccpay 支付页面 -- H5/web 共用 2020.04.08
router.get('/m/deposit/ccpay',function (req, res) {
    setEnvCf(req, res);
    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_ccpay', extendPublic({
        platform: platform
    }, req));
});
/* H5 充值成功 */
router.get('/m/deposit/success',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_deposit_succ', extendPublic({}, req));
});
// H5 入金凭证 （老虎和三方使用）
router.get('/m/deposit/evidence',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_deposit_evidence', extendPublic({}, req));
});

// H5 下载APP
router.get('/m/blank',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/m_blank', extendPublic({}, req));
});
// 打开APP
router.get('/to_app_website',function (req, res) {
    setEnvCf(req, res);
    res.render('m_vue/to_app_website', extendPublic({}, req));
});

/*--------------------APP-End-------------------------*/

router.get('/trader/:usercode',function (req, res) {
    setEnvCf(req, res);
    // console.log('---------cookies---------', req.headers.cookie);
    // var usercode = req.params.usercode;
    // var masterApiPath = req.protocol+'://'+req.hostname + '/api/v3';
    // console.log('------masterApiPath', masterApiPath);
    // console.log(req.protocol)

    // request({
    //     url: masterApiPath + '/master/trading_profile?user_code=' + usercode,
    //     headers: {
    //         'cookie': req.headers.cookie
    //     }
    // }, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         setEnvCf(req, res); //再次设置避免tigerwit和pandafx混乱
    //         body = JSON.parse(body);
    //         // console.info('-------body.data', body.data);
    //         res.render('web/trader.html', extendPublic({
    //             master: body.data,
    //             usercode: usercode
    //         }, req));
    //     }
    // })
    res.render('web/trader.html', extendPublic({}, req));

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
router.get('/web/deposit/evidence',function (req, res) {
    setEnvCf(req, res);
    res.render('web/evidence', extendPublic({}, req));
});

// 复制交易
router.get('/web/copy/:subpage(rules|select|become|comment|calendar)',function (req, res) {
    var subpage = req.params.subpage || 'rules';
    var pageInfo = {
        id: subpage
    };
    setEnvCf(req, res);
    res.render('web/copy.html', extendPublic({
        pageInfo: pageInfo
    }, req));
});
// Blog
router.get('/blog',function (req, res) {
    setEnvCf(req, res);
    res.render('blog/list.html', extendPublic({}, req));
});
router.get('/blog/:subpage(*)',function (req, res) {
    setEnvCf(req, res);
    res.render('blog/details.html', extendPublic({}, req));
});

// 交易品种
router.get('/web/product/:subpage(forex|metal|oil|cfd)',function (req, res) {
    var subpage = req.params.subpage || 'forex';
    var pageInfo = {
        id: subpage
    };
    setEnvCf(req, res);
    res.render('web/product.html', extendPublic({
        pageInfo: pageInfo
    }, req));
});

router.get('/web/product/trade',function (req, res) {
    setEnvCf(req, res);
    res.render('web/mt4_online.html', extendPublic({}, req));
})

// 关于老虎金融
router.get('/web/aboutus/:subpage(stp|team|report|control|companyinformation|partner|liverpool|medianewsandcontact|abouttigerwit|sitemap)',function (req, res) {
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
router.get('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)',function (req, res) {
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
router.get('/web/agent/:subpage(proxy|become|partner)',function (req, res) {
    var subpage = req.params.subpage || 'proxy';
    if (subpage == 'partner') {
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
// router.get('/web/agent/partner',function (req, res) {
//     var pageInfo = {
//         id: 'proxy'
//     };
//     setEnvCf(req, res);
//     res.render('web/agent.html', extendPublic({
//         pageInfo: pageInfo
//     }, req));
// });

// 条件和条款
router.get('/web/blog/:subpage(agreement|trade_fee)',function (req, res) {
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
router.get('/agreement/:subpage',function (req, res) {
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

router.get('/web/mt4',function (req, res) {
    setEnvCf(req, res);
    res.render('web/mt4.html', extendPublic({}, req));
});
// 弃用
router.get('/study/:subpage(introduction|term|fundamental|skill|video)',function (req, res) {
    var subpage = req.params.subpage || 'skill';
    var pageInfo = {
        id: subpage
    };
    setEnvCf(req, res);
    res.render('web/study.html', extendPublic({
        pageInfo: pageInfo
    }, req));
});

router.get('/web/help/:subpage(introduce|regular_web|regular_app|copy_web|copy_app|minMarket_app)',function (req, res) {
    var subpage = req.params.subpage || 'introduce';
    var pageInfo = {
        id: subpage
    };
    setEnvCf(req, res);
    res.render('web/help.html', extendPublic({
        pageInfo: pageInfo
    }, req));
});
router.get('/web/course/:subpage(*)',function (req, res) {
    var subpage = req.params.subpage || '';
    var pageInfo = {
        id: subpage
    };
    setEnvCf(req, res);
    res.render('web/course.html', extendPublic({
        pageInfo: pageInfo
    }, req));
});

router.get('/api_test',function (req, res, next) {
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
router.get('/waiting',function (req, res) {
    setEnvCf(req, res);
    res.render('waiting', extendPublic({}, req));
});
// 直播落地页 无用
router.get('/bd/live',function (req, res) {
    // checkGlobalOrCN(req, res, 'global');
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/live/h5', extendPublic({}, req));
    } else {
        res.render('bd/live/web', extendPublic({}, req));
    }
});

// t33 作为固定推广链接，要更新最新的落地页到这个地址(cn)
router.get('/bd/t33',function (req, res) {
    // checkGlobalOrCN(req, res, 'global');
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/t42/h5.html', extendPublic({}, req))
    } else {
        res.render('bd/t42/web.html', extendPublic({}, req));
    }
});

// 11月份活动(cn)
router.get('/bd/t35',function (req, res) {
    // checkGlobalOrCN(req, res, 'global');
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/t42/h5.html', extendPublic({}, req))
    } else {
        res.render('bd/t42/web.html', extendPublic({}, req));
    }
});
//越南推广活动 2019.02.24
router.get('/bd/vietnam',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/vietnam/web.html', extendPublic({}, req));
});
//越南红包页 2019.05.17
router.get('/bd/vietnam-bonus',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/vietnam/bonus.html', extendPublic({}, req));
});
//印尼推广活动 2019.02.27
router.get('/bd/indonesia',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/indonesia/web.html', extendPublic({}, req));
});
//印尼红包页 2019.05.17
router.get('/bd/indonesia-bonus',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/indonesia/bonus.html', extendPublic({}, req));
});

// liverpool比赛 2019.9.25
router.get('/global_traders_league',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/liverpool/h5.html', extendPublic({}, req));
});
router.get('/bd/lfceshot',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/liverpool/lfc.html', extendPublic({}, req));
});

//转盘抽奖页 2019.06.3
router.get('/bd/turntable',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/turntable/index.html', extendPublic({}, req));
});
// global活动页
router.get('/bonus',function (req, res) {
    // checkGlobalOrCN(req, res, 'cn');
    setEnvCf(req, res);

    if (isMobile(req)) {
        res.render('bd/g35/h5.html', extendPublic({}, req))
    } else {
        res.render('bd/g35/web.html', extendPublic({}, req));
    }
});
// 新增邮件-海外种子用户加群 
router.get('/whatsapp',function (req, res) {
    // checkGlobalOrCN(req, res, 'cn');
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/g36/h5.html', extendPublic({}, req))
    } else {
        res.render('bd/g36/web.html', extendPublic({}, req));
    }
});
// E-shot宣传页 2019.09.24
router.get('/bd/eshot/:subpage(*)',function (req, res) {
    setEnvCf(req, res);
    res.render('bd/eshot/h5.html', extendPublic({
        page: req.params.subpage
    }, req));
});
// 谷歌活动推广页 2019.10.10 / forextradinginv 复制页面 2019.11.29
router.get('/:main(forextrading|forextradinginv)/:page(home|partners|traders)/:subpage(*)',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        var mobile = '1';
    } else {
        var mobile = '0';
    }
    res.render('bd/forextrading/index.html', extendPublic({
        main: req.params.main,
        page: req.params.page,
        subpage: req.params.subpage,
        mobile: mobile
    }, req));
});
router.get('/bd/resurrection/:id',function (req, res) {
    var id = req.params.id;
    setEnvCf(req, res);
    res.render('bd/resurrection/index.html', extendPublic({
        id: id
    }, req));
})
router.get('/bd/resurrection/detail/:id',function (req, res) {
    var id = req.params.id;
    setEnvCf(req, res);
    res.render('bd/resurrection/detail.html', extendPublic({
        id: id
    }, req));
})
router.get('/grupo/creex',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        var page = 'mobile';
    } else {
        var page = 'web';
    }
    res.render('bd/creex/index.html', extendPublic({
        pageType: 'creex',
        page: page
    }, req));
});
router.get('/enbolsa',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        var page = 'mobile';
    } else {
        var page = 'web';
    }
    res.render('bd/creex/index.html', extendPublic({
        pageType: 'enbolsa',
        page: page,
    }, req));
});

// 市场部 - 月报生成 无用
router.get('/bd/mon_report',function (req, res) {
    // checkGlobalOrCN(req, res, 'global');
    setEnvCf(req, res);
    res.render('bd/mon_report/index', extendPublic({}, req));
});

// cms 生成H5活动页
router.get('/bd/object/:subpage',function (req, res) {
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
router.get('/bd/commentlist',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/commentlist/h5.html', extendPublic({}, req));
    } else {
        res.render('404.html', extendPublic({}, req));
    }
});
router.get('/bd/comment/:subpage',function (req, res) {
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
router.get('/bd/calendarlist',function (req, res) {
    setEnvCf(req, res);
    if (isMobile(req)) {
        res.render('bd/calendar/list.html', extendPublic({}, req));
    } else {
        res.render('404.html', extendPublic({}, req));
    }
});
router.get('/bd/calendar/:subpage',function (req, res) {
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
router.get('/m/wap/help/:subpage(*)',function (req, res) {
    var subpage = req.params.subpage || 'index';

    setEnvCf(req, res);
    res.render('m_vue/m_vue_help.html', extendPublic({
        pageInfo: subpage
    }, req));
});
// 为LFC做的两个网站 2019.03.18
router.get('/:subpage(global|uk)/LFC_TigerWit_Partnership',function (req, res) {
    var subpage = req.params.subpage || 'global';
    setEnvCf(req, res);
    res.render('bd/lfc/index.html', extendPublic({
        pageInfo: subpage
    }, req));
});


module.exports = router;