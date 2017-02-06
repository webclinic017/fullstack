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
        // console.info(o);

        var account = {
            getPersonalInfoDegreeApi: o + '/action/public/v4/user_perfect_degree',
            // loginApi: o + '/action/public/v3/login',
            loginApi: urlOrigin2 + '/auth/login',
            checkLoginedApi: o + '/action/public/v4/check',
            setTokenApi: o + '/action/public/v3/set_token',
            checkExistApi: o + '/action/public/v4/exists',
            getRCaptchaApi: o + '/action/public/v3/get_phone_reg_code',
            getRVoiceCaptchaApi: o + '/action/public/v3/get_tigerwit_phone_sound_code',
            registerApi: o + '/action/public/v3/register',
            getCaptchaApi: o + '/action/public/v3/get_phone_code',
            checkPhoneAndCaptchaApi: o + '/action/public/v4/verifycode',
            setNewPwdApi: o + '/action/public/v4/change_password',
            getPersonalInfoApi: o + '/action/public/v4/get_info',
            getAssetInfoApi: o + '/action/public/v4/get_usercenter_asset',
            getUnreadLengthApi: o + '/action/public/v3/get_notify_num',
            getNoticeCategoryApi: o + '/action/public/v3/get_notify_cate',
            getNoticeListApi: o + '/action/public/v3/get_notify_list',
            getOneReadApi: o + '/action/public/v3/notify_mark_read',
            getAllReadApi: o + '/action/public/v3/notify_mark_all_read',
            getSettingInfoApi: o + '/action/public/v4/get_info',
            getLocationApi: o + '/action/public/v4/basic_settings',
            getWorldsApi: o + '/action/public/v4/worldcode_list',
            getStatesApi: o + '/action/public/v4/statecode_list',
            getCitiesApi: o + '/action/public/v4/citycode_list',
            setBasicInfoApi: o + '/action/public/v4/update_user_info',
            setPwdApi: o + '/action/public/v4/change_password',
            getSCaptchaApi: o + '/action/public/v3/get_phone_code',
            getSVoiceCaptchaApi: o + '/action/public/v3/get_phone_sound_code',
            setPhoneApi: o + '/action/public/v3/set_my_bind_phone',
            logoutApi: o + '/action/public/v3/logout',
            verifyApi: o + '/action/public/v4/set_info',
            getVerifyStatusApi: o + '/action/public/v4/get_info',
            getKycApi: o + '/action/public/v4/get_kyc_info',
            getUserKycApi: o + '/action/public/v4/get_user_kyc_info',
            setKycApi: o + '/action/public/v4/save_kyc_info',
            checkMasterApi: o + '/action/public/v3/check_master',
            applyBecomeMasterApi: o + '/action/public/v3/apply_to_master',
            sendEmailCodeApi: o + '/action/public/v3/send_email_code',
            checkEmailCodeApi: o + '/action/public/v3/check_email_code',
            setBindEmailApi: o + '/action/public/v3/set_my_bind_email'
        };
        var asset = {
            withdrawApi: o + '/action/public/v4/withdraw',
            getCardApi: o + '/action/public/v4/query_bankcard',
            bindCardApi: o + '/action/public/v4/binding_bankcard',
            cancelWithdrawApi: o + '/action/public/v4/cancel_withdraw',
            getHistoryApi: o + '/action/public/v4/pay_history',
            depositApi: o + '/action/public/v4/pay',
            getDepositLimitApi: o + '/action/public/v4/pay_limit',
            getFXRateApi: o + '/action/public/v4/get_parity',
            getIsWithdrawApi: o + '/action/public/v4/check_withdraw',
            getMasterBonusSummaryApi: o + '/action/public/v4/master/profile',
            getCopierBonusSummaryApi: o + '/action/public/v4/copier/profile',
            getMasterBonusListApi: o + '/action/public/v4/master/copy_pay_list',
            getCopierBonusListApi: o + '/action/public/v4/copier/copy_pay_list',
            getBonusDetailListApi: o + '/action/public/v4/copy_pay_trade_list'
        };
        var forex = {
            getAssetApi: o + '/action/public/v3/get_usercenter_asset'
        };
        var invest = {
            getInvestSummaryApi: o + '/action/public/v4/get_user_data',
            getInvestProfitLineApi: o + '/action/public/v4/get_user_line_chart',
            getInvestBarChartApi: o + '/action/public/v4/get_user_symbol',
            getInvestCurrentDataApi: o + '/action/public/v4/get_usercenter_my_order_auth_list',
            getInvestCurrentTradersApi: o + '/action/public/v4/get_usercenter_order_auth_group',
            getInvestCurrentDetailsApi: o + '/action/public/v3/get_usercenter_order_auth_group_list',
            getInvestHistoryDataApi: o + '/action/public/v3/get_usercenter_my_history_auth_list',
            getInvestHistoryTradersApi: o + '/action/public/v4/get_usercenter_history_auth_group',
            getInvestHistoryDetailsApi: o + '/action/public/v3/get_usercenter_history_auth_group_list'
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
            getMastersListApi: o + '/action/public/v5/get_master_list',
            getCopiersListApi: o + '/data/copiers.json',
            getOrderInfoApi: o + '/action/public/v3/closed_fund_leads'
        };
        var trader = {
            getMasterSummaryApi: o + '/action/public/v4/get_master_data',
            getMasterCurrentApi: o + '/action/public/v3/get_master_order_noauth',
            getMasterHistoryApi: o + '/action/public/v3/get_history_noauth',
            getMasterProfitLineApi: o + '/action/public/v4/get_master_line_chart',
            getMasterBarChartApi: o + '/action/public/v3/get_master_symbol_count',
            copyApi: o + '/action/public/v4/copy',
            cancelCopyApi: o + '/action/public/v4/uncopy',
            getAvaCopyAmountApi: o + '/action/public/v4/copy_available_balance',
            getCopyRelationApi: o + '/action/public/v4/get_user_relationship',
            getHistoricalRateApi: o + '/action/public/v5/historical_rate',
            getCoopierChangeApi: o + '/action/public/v5/copy_change',
            getMasterInfoApi: o + '/action/public/v5/get_master_info',
            getMonthlySymbolsApi: o + '/action/public/v5/monthly_symbols'
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
            trader: trader
        };
        return service;
    }
})();
