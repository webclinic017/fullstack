;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('api', api);

    api.$inject = ['$cookies'];

    function api($cookies) {
        // php接口要用http://proxy.tigerwit.com请求

        var urlOrigin = $cookies["access_origin"] || '';    // node 中写入cookie
        var urlOrigin2 = $cookies["access_origin2"] || '';    // node 中写入cookie
        var o = urlOrigin;
        // console.log('urlOrigin2',urlOrigin2)

        var account = {
            getPersonalInfoDegreeApi: urlOrigin2 + '/user/perfect_degree',
            // loginApi: o + '/action/public/v3/login',
            loginApi: urlOrigin2 + '/auth/login',
            // checkLoginedApi: o + '/action/public/v4/check',
            checkLoginedApi: urlOrigin2 + '/auth/check',
            // setTokenApi: o + '/action/public/v3/set_token',
            setTokenApi: urlOrigin2 + '/validation/code_token',
            // checkExistApi: o + '/action/public/v4/exists',
            checkExistApi: urlOrigin2 + '/user/check_exists',
            // getRCaptchaApi: o + '/action/public/v3/get_phone_reg_code',
            getRCaptchaApi: urlOrigin2 + '/validation/send_phone_code',
            // registerApi: o + '/action/public/v3/register',
            registerApi: urlOrigin2 + '/auth/register',
            // checkPhoneAndCaptchaApi: o + '/action/public/v4/verifycode',
            checkPhoneAndCaptchaApi: urlOrigin2 + '/validation/check_phone_code',
            // setNewPwdApi: o + '/action/public/v4/change_password',
            setNewPwdApi: urlOrigin2 + '/forget_passwd',
            // getPersonalInfoApi: o + '/action/public/v4/get_info',
            getPersonalInfoApi: urlOrigin2 + '/user/info',
            getAssetInfoApi: o + '/action/public/v4/get_usercenter_asset',
            getUnreadLengthApi: urlOrigin2 + '/notify/number',
            getNoticeListApi: urlOrigin2 + '/notify',
            getAllReadApi: urlOrigin2 + '/notify/read',
            // getWorldsApi: o + '/action/public/v4/worldcode_list',
            getWorldsApi: urlOrigin2 + '/region/countries',
            // getStatesApi: o + '/action/public/v4/statecode_list',
            getStatesApi: urlOrigin2 + '/region/provinces',
            // getCitiesApi: o + '/action/public/v4/citycode_list',
            getCitiesApi: urlOrigin2 + '/region/cities',
            // setPwdApi: o + '/action/public/v4/change_password',
            setPwdApi: urlOrigin2 + '/user/passwd',
            // setPhoneApi: o + '/action/public/v3/set_my_bind_phone',
            setPhoneApi: urlOrigin2 + '/user/phone',
            // logoutApi: o + '/action/public/v3/logout',
            logoutApi: urlOrigin2 + '/auth/logout',
            verifyApi: o + '/action/public/v4/set_info',
            getKycApi: o + '/action/public/v4/get_kyc_info',
            getUserKycApi: o + '/action/public/v4/get_user_kyc_info',
            setKycApi: o + '/action/public/v4/save_kyc_info',
            // checkMasterApi: o + '/action/public/v3/check_master',   // 弃用
            // applyBecomeMasterApi: o + '/action/public/v3/apply_to_master',// 弃用
            // sendEmailCodeApi: o + '/action/public/v3/send_email_code',
            sendEmailCodeApi: urlOrigin2 + '/validation/send_email_code',
            // checkEmailCodeApi: o + '/action/public/v3/check_email_code',
            checkEmailCodeApi: urlOrigin2 + '/validation/check_email_code',
            // setBindEmailApi: o + '/action/public/v3/set_my_bind_email'
            setBindEmailApi: urlOrigin2 + '/user/email'
        };
        var asset = {
            // withdrawApi: o + '/action/public/v4/withdraw',
            withdrawApi: urlOrigin2 + '/payment/withdraw',
            // getCardApi: o + '/action/public/v4/query_bankcard',
            getCardApi: urlOrigin2 + '/user/bank_card',
            // bindCardApi: o + '/action/public/v4/binding_bankcard',
            bindCardApi: urlOrigin2 + '/user/bank_card',
            cancelWithdrawApi: urlOrigin2 + '/payment/withdraw/cancel',
            getHistoryApi: urlOrigin2 + '/payment/histories',
            depositApi: urlOrigin2 + '/payment/deposit',
            getDepositLimitApi: urlOrigin2 + '/payment/deposit/limits',
            // getFXRateApi: o + '/action/public/v4/get_parity',
            getFXRateApi: urlOrigin2 + '/payment/rates',
            // getIsWithdrawApi: o + '/action/public/v4/check_withdraw',
            getIsWithdrawApi: urlOrigin2 + '/payment/withdraw/limits',
            getMasterBonusSummaryApi: urlOrigin2 + '/commission/master_profile',
            getCopierBonusSummaryApi: urlOrigin2 + '/commission/custom_profile',
            getMasterBonusListApi: urlOrigin2 + '/commission/master_settle',
            getCopierBonusListApi: urlOrigin2 + '/commission/custom_settle',
            getBonusDetailListApi: urlOrigin2 + '/commission/settle_info'
        };
        var forex = {
            
        };
        var invest = {
            getInvestSummaryApi: urlOrigin2  + '/centre/trading_profile',
            getInvestProfitLineApi: urlOrigin2 + '/centre/trading_trend',
            getInvestBarChartApi: urlOrigin2 + '/centre/trading_symbols',
            getInvestCurrentDataApi: urlOrigin2 + '/centre/active/self_trades',
            getInvestCurrentTradersApi: urlOrigin2 + '/centre/active/copy_masters',
            getInvestCurrentDetailsApi: urlOrigin2 + '/centre/active/copy_trades',
            getInvestHistoryDataApi: urlOrigin2 + '/centre/past/self_trades',
            getInvestHistoryTradersApi: urlOrigin2 + '/centre/past/copy_masters',
            getInvestHistoryDetailsApi: urlOrigin2 + '/centre/past/copy_trades'
        };
        var invite = {
            getInviteFriendsInfoApi: o + '/action/public/v3/get_invite_friends_info',
            setInviteFriendsLinkApi: o + '/action/public/v3/set_invite_code'
        };
        var market = {
            getVideoListApi: o + '/data/video_list.json',
            checkPhoneApi: o + '/action/public/v3/agent'
        };
        var product = {
            getProductCommentApi: '/blog/api/get_category_posts?id=86',
            getProductMarketApi: '/blog/api/get_category_posts?id=90'
        };
        var ranklist = {
            // getMastersListApi: o + '/action/public/v5/get_master_list',
            getMastersListApi: urlOrigin2 + '/master/list',
            getOrderInfoApi: o + '/action/public/v3/closed_fund_leads' // 暂无 定期跟单预约
        };
        var trader = { //迁移完毕
            getMasterCurrentApi: urlOrigin2 + '/master/active/trades', 
            getMasterPastTradeApi: urlOrigin2 + '/master/past/trades', //替换getMasterHistoryApi
            copyApi: urlOrigin2 + '/copy',
            cancelCopyApi: urlOrigin2 + '/uncopy',
            getAvaCopyAmountApi: urlOrigin2 + '/valid_copy',
            getHistoricalRateApi: urlOrigin2 + '/master/monthly_profit_rates',
            getCoopierChangeApi: o + '/action/public/v5/copy_change', //移除
            getMasterInfoApi: urlOrigin2 + '/master/trading_profile',
            getMonthlySymbolsApi: urlOrigin2 + '/master/trading_symbols' 
        };

        var redbag = {
            getRedbagPoolApi: urlOrigin2 + '/bonus/index',
            getRedbagListApi: urlOrigin2 + '/bonus',
            receiveRedbagApi: urlOrigin2 + '/bonus/receive',
            exchangeRedbagApi: urlOrigin2 + '/bonus/exchange'
        };

        var service = {
            account: account,
            asset: asset,
            forex: forex,
            invest: invest,
            invite: invite,
            market: market,
            product: product,
            ranklist: ranklist,
            trader: trader,
            redbag: redbag
        };
        return service;
    }
})();
