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
            updataUserInfoApi: urlOrigin2 + '/user/auth_info',
            // registerApi: o + '/action/public/v3/register',
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
            getAssetInfoApi: o + '/action/public/v4/get_usercenter_asset',
            getUnreadLengthApi: o + '/action/public/v3/get_notify_num',
            getNoticeCategoryApi: o + '/action/public/v3/get_notify_cate',
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
            setBindEmailApi: urlOrigin2 + '/user/email'
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

        var redbag = {
            getRedbagPoolApi: o + '/action/public/bonus/lists',
            getRedbagListApi: o + '/action/public/bonus/my_bonus',
            receiveRedbagApi: o + '/action/public/bonus/receive',
            exchangeRedbagApi: o + '/action/public/bonus/bonus_pay_condition'
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
