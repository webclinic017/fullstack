const app = require('express');
const router = app.Router();


var report_sites = require('../report_site');
var recordAccessTimes = require('../record_access_times');


var envConfig = require('../get_env_config').envConfig;
var COMPANY_NAME = envConfig.company_name;

var global_modelRegular = require('../model/modelRegular')();
var gloal_modelRegularDetail = require('../model/modelRegularDetail');

var isMobile = require('../utils').isMobile;


// 个人中心
router.get('/space/', function (req, res) {
    res.render('space');
});

router.get('/third_usage', function (req, res) {
    res.render('web/third_usage');
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
router.get('/m/third/register', function (req, res) {
    res.render('m_vue/m_third_verify');
});
router.get('/m/third/password', function (req, res) {
    res.render('m_vue/m_third_password');
});
// 第三方充值提现相关页面
router.get('/m/third/payment/login', function (req, res) {
    res.render('third_app/login.html');
});
router.get('/m/third/asset', function (req, res) {
    res.render('third_app/asset.html');
});
router.get('/m/third/transfer', function (req, res) {
    res.render('third_app/transfer.html');
});
router.get('/m/third/bank_rule', function (req, res) {
    res.render('third_app/bank_rule.html');
});
router.get('/m/third/add_bank', function (req, res) {
    res.render('third_app/add_bank.html');
});
router.get('/m/third/add_third', function (req, res) {
    res.render('third_app/add_third.html');
});
router.get('/m/third/add_transfer', function (req, res) {
    res.render('third_app/add_transfer.html');
});
//邀请好友 定制活动 H5 - 2020.05.07 (pandafx)
router.get('/m/customize/invite', function (req, res) {
    res.render('invite/m_customize');
});
router.get('/m/customize/invite_come', function (req, res) {
    res.render('invite/m_customize_come');
});


// TODO
router.get('/', function (req, res) {

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
            res.render('home.html', {
                pageInfo: {}
            });
            return;
        }
    }
});

// router.get('/cn', function (req, res) {

//     if (isMobile(req)) {
//         if (COMPANY_NAME === 'tigerwit') {
//             res.redirect('/download');
//             return
//         }
//     } else {
//         if (COMPANY_NAME === 'tigerwit') {
//             res.render('home.html', {
//                 pageInfo: {}
//             });
//             return
//         }
//     }
// });

router.get('/ranklist', function (req, res) {
    res.render('web/ranklist.html');
});

router.get('/:downloadPage(download|download_t)', function (req, res) {
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
        //     res.render('m_vue/download.html', extendObj);
        // }else{
        res.render('m_vue/download_global.html', extendObj);
        // }
    } else {
        res.render('web/download.html');
    }
});
router.get('/cndownload', function (req, res) {

    res.render('bd/download/index.html');
});
// 支付宝临时入金页面
router.get('/alipay/temp', function (req, res) {

    res.render('web/alipay');
});

/*定期跟单开始*/
router.get('/regular', function (req, res) {


    res.render('web/regular/list.html', {
        model: global_modelRegular
    });
});
router.get('/regular/agree/:subpage', function (req, res) {

    res.render('web/regular/agree.html', {
        model: global_modelRegular,
        detail_id: req.params.subpage || ""
    });
});
router.get('/regular/detail/:subpage', function (req, res) {
    res.render('web/regular/detail.html', {
        model: gloal_modelRegularDetail(req.params.subpage || "")
    });
});
router.get('/m/regular/agree/:subpage', function (req, res) {

    res.render('m_vue/regular/agree.html', {
        model: global_modelRegular,
        detail_id: req.params.subpage || ""
    });
});
router.get('/m/regular/detail/:subpage', function (req, res) {

    res.render('m_vue/regular/detail.html', {
        model: gloal_modelRegularDetail(req.params.subpage || "")
    });
});
router.get('/m/regular/detail/team/:subpage', function (req, res) {
    var subpage = req.params.subpage;
    if (subpage.indexOf('_') != -1) {
        subpage = subpage.split('_')[1];
    }
    // var team_html = global_modelRegular.getTeamHtmlName(req.params.subpage);

    res.render('m_vue/regular/detail.team.' + subpage + '.html');
});
router.get('/m/regular/detail/history/:subpage', function (req, res) {
    var aImages = global_modelRegular.getTeamHistoryImages(req.params.subpage);

    res.render('m_vue/regular/detail.history.html', {
        model: {
            aImages: aImages
        }
    });
});

/*定期跟单结束开始*/

/*--------------------APP-Beagin---------------------*/
/*注册相关页面*/
router.get('/m/h5_register/:status(reg|succ|agreement)', function (req, res) {
    var status = req.params.status || 'reg';
    var pageInfo = {
        status: status
    };

    res.render('m_vue/register/index.html', {
        pageInfo: pageInfo
    });
});

/*成为高手*/
router.get('/m/agent/become', function (req, res) {

    res.render("m_vue/m_agent_become");
});

/*定期跟单*/
router.get('/m/regular/how', function (req, res) {

    res.render("m_vue/regular/how");
});

/*邀请好友*/
router.get('/m/invite01', function (req, res) {

    res.render('m_vue/invite/m_invite01', {
        page: 'invite01'
    });
});
router.get('/m/register_coupon', function (req, res) {

    res.render('m_vue/invite/m_invite01', {
        page: 'register_coupon'
    });
});
//邀请好友新H5 - 2019.12.20
router.get('/m/invite', function (req, res) {

    res.render('invite/m_invite');
});

router.get('/m/invite02', function (req, res) {

    res.render('m_vue/invite/m_invite02');
});

/*H5 web 关于我们 英文页面*/
router.get('/m/web/about/us', function (req, res) {

    res.render('m_vue/m_about_us_en');
});

/*H5 关于我们*/
router.get('/m/about/us', function (req, res) {

    res.render('m_vue/m_about_us');
});
/*H5 复制规则*/
router.get('/m/copy/rule', function (req, res) {

    res.render("m_vue/m_copy_rule");
});

/* H5 充值中转页面 */
router.get('/m/deposit/pay', function (req, res) {

    var platform = 'pc';
    var banklistStatus = 'static';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_pay', {
        platform: platform,
        banklistStatus: banklistStatus
    });
});
router.get('/m/deposit/avoda', function (req, res) {

    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_avoda', {
        platform: platform,
    });
});
router.get('/m/deposit/lcpag', function (req, res) {

    res.render('m_vue/m_deposit_lcpag');
});
router.get('/m/deposit/pay_select', function (req, res) {

    var banklistStatus = 'select';
    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_pay', {
        platform: platform,
        banklistStatus: banklistStatus
    });
});
router.get('/m/deposit/pay_select_v2', function (req, res) {

    var banklistStatus = 'selectV2';
    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_pay', {
        platform: platform,
        banklistStatus: banklistStatus
    });
});
router.get('/m/deposit/pay_select_v3', function (req, res) {

    var banklistStatus = 'selectV3';
    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_pay', {
        platform: platform,
        banklistStatus: banklistStatus
    });
});
//ccpay 支付页面 -- H5/web 共用 2020.04.08
router.get('/m/deposit/ccpay', function (req, res) {

    var platform = 'pc';
    if (isMobile(req)) {
        platform = 'mobile';
    }
    res.render('m_vue/m_deposit_ccpay', {
        platform: platform
    });
});
/* H5 充值成功 */
router.get('/m/deposit/success', function (req, res) {

    res.render('m_vue/m_deposit_succ');
});
// H5 入金凭证 （老虎和三方使用）
router.get('/m/deposit/evidence', function (req, res) {

    res.render('m_vue/m_deposit_evidence');
});

// H5 下载APP
router.get('/m/blank', function (req, res) {

    res.render('m_vue/m_blank');
});
// 打开APP
router.get('/to_app_website', function (req, res) {

    res.render('m_vue/to_app_website');
});

/*--------------------APP-End-------------------------*/

router.get('/trader/:usercode', function (req, res) {

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
    //          //再次设置避免tigerwit和pandafx混乱
    //         body = JSON.parse(body);
    //         // console.info('-------body.data', body.data);
    //         res.render('web/trader.html', {
    //             master: body.data,
    //             usercode: usercode
    //         });
    //     }
    // })
    res.render('web/trader.html');

    // request(masterApiPath + '/master/trading_profile?user_code=' + usercode, function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //          //再次设置避免tigerwit和pandafx混乱
    //         body = JSON.parse(body);
    //         console.info('-------body.data', body.data);
    //         res.render('web/trader.html', {
    //             master: body.data,
    //             usercode: usercode
    //         });
    //     }
    // });
});

// WEB 入金凭证
router.get('/web/deposit/evidence', function (req, res) {

    res.render('web/evidence');
});

// 复制交易
router.get('/web/copy/:subpage(rules|select|become|comment|calendar)', function (req, res) {
    var subpage = req.params.subpage || 'rules';
    var pageInfo = {
        id: subpage
    };

    res.render('web/copy.html', {
        pageInfo: pageInfo
    });
});
// Blog
router.get('/blog', function (req, res) {

    res.render('blog/list.html');
});
router.get('/blog/:subpage(*)', function (req, res) {

    res.render('blog/details.html');
});
// 交易品种简拼
router.get('/:subpage(forex-trading|metal-trading|oil-trading|cfd-trading|stock-trading)', function (req, res) {
    var subpage = req.params.subpage.substring(0, (req.params.subpage.length - 8)) || 'forex';
    var pageInfo = {
        id: subpage
    };

    res.render('web/product.html', {
        pageInfo: pageInfo
    });
});
// 交易品种
router.get('/web/product/:subpage(forex|metal|oil|cfd|stock)', function (req, res) {
    var subpage = req.params.subpage || 'forex';
    var pageInfo = {
        id: subpage
    };

    res.render('web/product.html', {
        pageInfo: pageInfo
    });
});

router.get('/web/product/trade', function (req, res) {

    res.render('web/mt4_online.html');
})

// 关于老虎金融
router.get('/web/aboutus/:subpage(stp|team|report|control|companyinformation|partner|liverpool|medianewsandcontact|abouttigerwit|sitemap)', function (req, res) {
    var subpage = req.params.subpage || 'forex';
    var pageInfo = {
        id: subpage
    };

    res.render('web/about.html', {
        pageInfo: pageInfo,
        report_sites: report_sites
    });
});

// faq 常见问题在web文件下
router.get('/web/faq/:subpage(protect|simulate|real|wad|type|deal|platform|interest)', function (req, res) {
    var subpage = req.params.subpage || 'protect';
    var pageInfo = {
        id: subpage
    };

    res.render('web/faq.html', {
        pageInfo: pageInfo
    });
});

// 代理合作
router.get('/web/agent/:subpage(proxy|become|partner)', function (req, res) {
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

    if (isMobile(req) && pageInfo.id == 'proxy') {
        res.render('bd/agent/promotion.html', {
            pageInfo: pageInfo
        });
    } else {
        res.render('web/agent.html', {
            pageInfo: pageInfo
        });
    }
});
//global代理
// router.get('/web/agent/partner',function (req, res) {
//     var pageInfo = {
//         id: 'proxy'
//     };
//     
//     res.render('web/agent.html', {
//         pageInfo: pageInfo
//     });
// });

// 条件和条款
router.get('/web/blog/:subpage(agreement|trade_fee)', function (req, res) {
    var subpage = req.params.subpage || 'trade_fee';
    var pageInfo = {
        id: subpage
    };

    res.render('web/blog.html', {
        pageInfo: pageInfo
    });
});
// 条件和条款--子项目
router.get('/agreement/:subpage', function (req, res) {
    var subpage = req.params.subpage;
    var pageInfo = {
        id: subpage
    };

    if (isMobile(req)) {
        res.render('web/m_agreement.html', {
            pageInfo: pageInfo
        });
    } else {
        res.render('web/agreement.html', {
            pageInfo: pageInfo
        });
    }

});

router.get('/web/mt4', function (req, res) {

    res.render('web/mt4.html');
});
// 弃用
router.get('/study/:subpage(introduction|term|fundamental|skill|video)', function (req, res) {
    var subpage = req.params.subpage || 'skill';
    var pageInfo = {
        id: subpage
    };

    res.render('web/study.html', {
        pageInfo: pageInfo
    });
});

router.get('/web/help/:subpage(introduce|regular_web|regular_app|copy_web|copy_app|minMarket_app)', function (req, res) {
    var subpage = req.params.subpage || 'introduce';
    var pageInfo = {
        id: subpage
    };

    res.render('web/help.html', {
        pageInfo: pageInfo
    });
});
router.get('/web/course/:subpage(*)', function (req, res) {
    var subpage = req.params.subpage || '';
    var pageInfo = {
        id: subpage
    };

    res.render('web/course.html', {
        pageInfo: pageInfo
    });
});

router.get('/api_test', function (req, res, next) {
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
router.get('/waiting', function (req, res) {

    res.render('waiting');
});
// 直播落地页 无用
router.get('/bd/live', function (req, res) {
    // checkGlobalOrCN(req, res, 'global');

    if (isMobile(req)) {
        res.render('bd/live/h5');
    } else {
        res.render('bd/live/web');
    }
});

// t33 作为固定推广链接，要更新最新的落地页到这个地址(cn)
router.get('/bd/t33', function (req, res) {
    // checkGlobalOrCN(req, res, 'global');

    if (isMobile(req)) {
        res.render('bd/t42/h5.html')
    } else {
        res.render('bd/t42/web.html');
    }
});

// 11月份活动(cn)
router.get('/bd/t35', function (req, res) {
    // checkGlobalOrCN(req, res, 'global');

    if (isMobile(req)) {
        res.render('bd/t42/h5.html')
    } else {
        res.render('bd/t42/web.html');
    }
});
//越南推广活动 2019.02.24
router.get('/bd/vietnam', function (req, res) {

    res.render('bd/vietnam/web.html');
});
//越南红包页 2019.05.17
router.get('/bd/vietnam-bonus', function (req, res) {

    res.render('bd/vietnam/bonus.html');
});
//印尼推广活动 2019.02.27
router.get('/bd/indonesia', function (req, res) {

    res.render('bd/indonesia/web.html');
});
//印尼红包页 2019.05.17
router.get('/bd/indonesia-bonus', function (req, res) {

    res.render('bd/indonesia/bonus.html');
});

// liverpool比赛 2019.9.25
router.get('/global_traders_league', function (req, res) {

    res.render('bd/liverpool/h5.html');
});
router.get('/bd/lfceshot', function (req, res) {

    res.render('bd/liverpool/lfc.html');
});

//转盘抽奖页 2019.06.3
router.get('/bd/turntable', function (req, res) {

    res.render('bd/turntable/index.html');
});
// global活动页
router.get('/bonus', function (req, res) {
    // checkGlobalOrCN(req, res, 'cn');


    if (isMobile(req)) {
        res.render('bd/g35/h5.html')
    } else {
        res.render('bd/g35/web.html');
    }
});
// 新增邮件-海外种子用户加群 
router.get('/whatsapp', function (req, res) {
    // checkGlobalOrCN(req, res, 'cn');

    if (isMobile(req)) {
        res.render('bd/g36/h5.html')
    } else {
        res.render('bd/g36/web.html');
    }
});
// E-shot宣传页 2019.09.24
router.get('/bd/eshot/:subpage(*)', function (req, res) {

    res.render('bd/eshot/h5.html', {
        page: req.params.subpage
    });
});
// 谷歌活动推广页 2019.10.10 / forextradinginv 复制页面 2019.11.29
router.get('/:main(forextrading|forextradinginv)/:page(home|partners|traders)/:subpage(*)', function (req, res) {

    if (isMobile(req)) {
        var mobile = '1';
    } else {
        var mobile = '0';
    }
    res.render('bd/forextrading/index.html', {
        main: req.params.main,
        page: req.params.page,
        subpage: req.params.subpage,
        mobile: mobile
    });
});
router.get('/bd/resurrection/:id', function (req, res) {
    var id = req.params.id;

    res.render('bd/resurrection/index.html', {
        id: id
    });
})
router.get('/bd/resurrection/detail/:id', function (req, res) {
    var id = req.params.id;

    res.render('bd/resurrection/detail.html', {
        id: id
    });
})
router.get('/grupo/creex', function (req, res) {

    if (isMobile(req)) {
        var page = 'mobile';
    } else {
        var page = 'web';
    }
    res.render('bd/creex/index.html', {
        pageType: 'creex',
        page: page
    });
});
router.get('/enbolsa', function (req, res) {

    if (isMobile(req)) {
        var page = 'mobile';
    } else {
        var page = 'web';
    }
    res.render('bd/creex/index.html', {
        pageType: 'enbolsa',
        page: page,
    });
});

// 市场部 - 月报生成 无用
router.get('/bd/mon_report', function (req, res) {
    // checkGlobalOrCN(req, res, 'global');

    res.render('bd/mon_report/index');
});

// cms 生成H5活动页
router.get('/bd/object/:subpage', function (req, res) {
    var subpage = req.params.subpage;
    var numName = "number_" + subpage;
    recordAccessTimes.readAccessTimes('/object_page_view.txt', numName, function (num) {
        // console.log(num);
        var pageInfo = {
            id: subpage,
            pageView: num || 0
        };

        res.render('bd/object/index.html', {
            pageInfo: pageInfo
        });
    });
});
// cms 生成H5 - 每日汇评
router.get('/bd/commentlist', function (req, res) {

    if (isMobile(req)) {
        res.render('bd/commentlist/h5.html');
    } else {
        res.render('404.html');
    }
});
router.get('/bd/comment/:subpage', function (req, res) {
    var subpage = req.params.subpage;
    var numName = "number_" + subpage;
    recordAccessTimes.readAccessTimes('/comment_page_view.txt', numName, function (num) {
        // console.log(num);
        var pageInfo = {
            id: subpage,
            pageView: num || 0
        };

        if (isMobile(req)) {
            res.render('bd/comment/h5.html', {
                pageInfo: pageInfo
            });
        } else {
            res.render('bd/comment/web.html', {
                pageInfo: pageInfo
            });
        }
    });
});
// H5 财经日历
router.get('/bd/calendarlist', function (req, res) {

    if (isMobile(req)) {
        res.render('bd/calendar/list.html');
    } else {
        res.render('404.html');
    }
});
router.get('/bd/calendar/:subpage', function (req, res) {

    if (isMobile(req)) {
        res.render('bd/calendar/detail.html', {
            id: req.params.subpage
        });
    } else {
        res.render('404.html');
    }
});

// help
router.get('/m/wap/help/:subpage(*)', function (req, res) {
    var subpage = req.params.subpage || 'index';


    res.render('m_vue/m_vue_help.html', {
        pageInfo: subpage
    });
});
// 为LFC做的两个网站 2019.03.18
router.get('/:subpage(global|uk)/LFC_TigerWit_Partnership', function (req, res) {
    var subpage = req.params.subpage || 'global';

    res.render('bd/lfc/index.html', {
        pageInfo: subpage
    });
});
// 阿拉伯语25美金活动 - 市场部 2020.6.30
router.get('/get-a-25-trading-bonus', function (req, res) {
    res.render('bd/25Bonus/trading.html');
});
router.get('/25bonus', function (req, res) {
    res.render('bd/25Bonus/rules.html');
});


module.exports = router;