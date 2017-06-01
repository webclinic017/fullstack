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
            updataUserInfoApi: urlOrigin2 + '/user/auth_info',
            checkLoginedApi: urlOrigin2 + '/auth/check',
            // setTokenApi: o + '/action/public/v3/set_token',
            setTokenApi: urlOrigin2 + '/validation/code_token',
            // checkExistApi: o + '/action/public/v4/exists',
            checkExistApi: urlOrigin2 + '/user/check_exists',
            // getRCaptchaApi: o + '/action/public/v3/get_phone_reg_code',
            getRCaptchaApi: urlOrigin2 + '/validation/send_phone_code',
            // registerApi: o + '/action/public/v3/register',
            registerApi: urlOrigin2 + '/auth/register',
            uploadIdCardBase64: urlOrigin2 + '/user/upload_base64_id_card',
            uploadIdCardForm: urlOrigin2 + '/user/upload_id_card',
            // checkPhoneAndCaptchaApi: o + '/action/public/v4/verifycode',
            checkPhoneAndCaptchaApi: urlOrigin2 + '/validation/check_phone_code',
            // setNewPwdApi: o + '/action/public/v4/change_password',
            setNewPwdApi: urlOrigin2 + '/forget_passwd',
            // getPersonalInfoApi: o + '/action/public/v4/get_info',
            getPersonalInfoApi: urlOrigin2 + '/user/info',
            getAssetInfoApi: urlOrigin2 + '/centre/asset',
            getUnreadLengthApi: urlOrigin2 + '/notify/number',
            getNoticeListApi: o + '/action/public/v3/get_notify_list',
            getOneReadApi: o + '/action/public/v3/notify_mark_read',
            getAllReadApi: o + '/action/public/v3/notify_mark_all_read',
            getLocationApi: o + '/action/public/v4/basic_settings',
            // getWorldsApi: o + '/action/public/v4/worldcode_list',
            getWorldsApi: urlOrigin2 + '/region/countries',
            // getStatesApi: o + '/action/public/v4/statecode_list',
            getStatesApi: urlOrigin2 + '/region/provinces',
            // getCitiesApi: o + '/action/public/v4/citycode_list',
            getCitiesApi: urlOrigin2 + '/region/cities',
            setBasicInfoApi: o + '/action/public/v4/update_user_info',
            // setPwdApi: o + '/action/public/v4/change_password',
            setPwdApi: urlOrigin2 + '/user/passwd',
            // setPhoneApi: o + '/action/public/v3/set_my_bind_phone',
            setPhoneApi: urlOrigin2 + '/user/phone',
            // logoutApi: o + '/action/public/v3/logout',
            logoutApi: urlOrigin2 + '/auth/logout',
            verifyApi: o + '/action/public/v4/set_info',
            getKycApi: urlOrigin2 + '/user/kyc_map',
            // getKycApi: o + '/action/public/v4/get_kyc_info',
            getUserKycApi: o + '/action/public/v4/get_user_kyc_info',
            getAuthStatus: urlOrigin2 + '/user/auth_status',
            setKycApi: urlOrigin2 + '/user/kyc',
            checkMasterApi: o + '/action/public/v3/check_master',
            applyBecomeMasterApi: o + '/action/public/v3/apply_to_master',
            // sendEmailCodeApi: o + '/action/public/v3/send_email_code',
            sendEmailCodeApi: urlOrigin2 + '/validation/send_email_code',
            // checkEmailCodeApi: o + '/action/public/v3/check_email_code',
            checkEmailCodeApi: urlOrigin2 + '/validation/check_email_code',
            // setBindEmailApi: o + '/action/public/v3/set_my_bind_email'
            setBindEmailApi: urlOrigin2 + '/user/email',
            getSpreadInfoApi: urlOrigin2 + '/spread_info',
            getUserGroupApi: urlOrigin2 + '/user/group'
        };
        var asset = {
            // withdrawApi: o + '/action/public/v4/withdraw',
            withdrawApi: urlOrigin2 + '/payment/withdraw',
            // getCardApi: o + '/action/public/v4/query_bankcard',
            getCardApi: urlOrigin2 + '/user/bank_card',
            // bindCardApi: o + '/action/public/v4/binding_bankcard',
            bindCardApi: urlOrigin2 + '/user/bank_card',
            cancelWithdrawApi: o + '/action/public/v4/cancel_withdraw',
            getHistoryApi: o + '/action/public/v4/pay_history',
            depositApi: o + '/action/public/v4/pay',
            getDepositLimitApi: o + '/action/public/v4/pay_limit',
            // getFXRateApi: o + '/action/public/v4/get_parity',
            getFXRateApi: urlOrigin2 + '/payment/rates',
            // getIsWithdrawApi: o + '/action/public/v4/check_withdraw',
            getIsWithdrawApi: urlOrigin2 + '/payment/withdraw/limits',
            getMasterBonusSummaryApi: o + '/action/public/v4/master/profile',
            getCopierBonusSummaryApi: o + '/action/public/v4/copier/profile',
            getMasterBonusListApi: o + '/action/public/v4/master/copy_pay_list',
            getCopierBonusListApi: o + '/action/public/v4/copier/copy_pay_list',
            getBonusDetailListApi: o + '/action/public/v4/copy_pay_trade_list',
            walletDepositApi: urlOrigin2 + '/wallet/deposit',
            walletWithdrawApi: urlOrigin2 + '/wallet/withdraw',
            walletCanWithdrawApi: urlOrigin2 + '/wallet/valid_balance',
        };
        var forex = {
            getAssetApi: o + '/action/public/v3/get_usercenter_asset'
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
            getInvestHistoryDetailsApi: urlOrigin2 + '/centre/past/copy_trades',
            getWalletHistoryApi: urlOrigin2 + '/wallet/histories'
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
            getRedbagPoolApi: o + '/action/public/bonus/lists',
            getRedbagListApi: o + '/action/public/bonus/my_bonus',
            receiveRedbagApi: o + '/action/public/bonus/receive',
            exchangeRedbagApi: o + '/action/public/bonus/bonus_pay_condition',
            getRedbagNumApi: o + '/action/public/bonus/num',
            setRedbagReadedApi: o + '/action/public/bonus/readed'
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
