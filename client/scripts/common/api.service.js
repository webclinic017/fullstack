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
            loginApi: urlOrigin2 + '/auth/login',
            updataUserInfoApi: urlOrigin2 + '/user/auth_info',
            checkLoginedApi: urlOrigin2 + '/auth/check',
            setTokenApi: urlOrigin2 + '/validation/code_token',
            checkExistApi: urlOrigin2 + '/user/check_exists',
            getRCaptchaApi: urlOrigin2 + '/validation/send_phone_code',
            registerApi: urlOrigin2 + '/auth/register',
            uploadIdCardBase64: urlOrigin2 + '/user/upload_base64_id_card',
            uploadIdCardForm: urlOrigin2 + '/user/upload_id_card',
            uploadAvatarForm: urlOrigin2 + '/user/upload_avatar',
            checkPhoneAndCaptchaApi: urlOrigin2 + '/validation/check_phone_code',
            setNewPwdApi: urlOrigin2 + '/forget_passwd',
            getPersonalInfoApi: urlOrigin2 + '/user/info',
            getAssetInfoApi: urlOrigin2 + '/centre/asset',
            getUnreadLengthApi: urlOrigin2 + '/notify/number',
            getNoticeListApi: urlOrigin2 + '/notify',
            getAllReadApi: urlOrigin2 + '/notify/read',
            getWorldsApi: urlOrigin2 + '/region/countries',
            getStatesApi: urlOrigin2 + '/region/provinces',
            getCitiesApi: urlOrigin2 + '/region/cities',
            setPwdApi: urlOrigin2 + '/user/passwd',
            setPhoneApi: urlOrigin2 + '/user/phone',
            logoutApi: urlOrigin2 + '/auth/logout',
            getKycApi: urlOrigin2 + '/user/kyc_map',
            getAuthStatus: urlOrigin2 + '/user/auth_status',
            setKycApi: urlOrigin2 + '/user/kyc',
            sendEmailCodeApi: urlOrigin2 + '/validation/send_email_code',
            checkEmailCodeApi: urlOrigin2 + '/validation/check_email_code',
            setBindEmailApi: urlOrigin2 + '/user/email',
            getSpreadInfoApi: urlOrigin2 + '/spread_info',
            getUserGroupApi: urlOrigin2 + '/user/group',
            getAdvertiseRecords: urlOrigin2 + '/position/records',
        };
        var asset = {
            withdrawApi: urlOrigin2 + '/payment/withdraw',
            getCardApi: urlOrigin2 + '/user/bank_card',
            bindCardApi: urlOrigin2 + '/user/bank_card',
            cancelWithdrawApi: urlOrigin2 + '/payment/withdraw/cancel',
            getHistoryApi: urlOrigin2 + '/payment/histories',
            depositApi: urlOrigin2 + '/payment/deposit',
            getDepositLimitApi: urlOrigin2 + '/payment/deposit/limits',
            getFXRateApi: urlOrigin2 + '/payment/rates',
            getIsWithdrawApi: urlOrigin2 + '/payment/withdraw/limits',
            walletDepositApi: urlOrigin2 + '/wallet/deposit',
            walletWithdrawApi: urlOrigin2 + '/wallet/withdraw',
            walletCanWithdrawApi: urlOrigin2 + '/wallet/valid_balance',
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
            getInvestHistoryDetailsApi: urlOrigin2 + '/centre/past/copy_trades',
            getWalletHistoryApi: urlOrigin2 + '/wallet/histories'
        };
        var invite = {
            getInviteFriendsInfoApi: urlOrigin2 + '/user/invites',
            setInviteFriendsLinkApi: urlOrigin2 + '/invite_code'
        };
        var market = {
            getVideoListApi: o + '/data/video_list.json',
            checkPhoneApi: urlOrigin2 + '/agent'
        };
        var product = {
            getProductCommentApi: '/blog/api/get_category_posts?id=86',
            getProductMarketApi: '/blog/api/get_category_posts?id=90'
        };
        var ranklist = {
            getMastersListApi: urlOrigin2 + '/master/list',
            getOrderInfoApi: o + '/action/public/v3/closed_fund_leads' // 暂无 定期跟单预约
        };
        var trader = {
            getMasterCurrentApi: urlOrigin2 + '/master/active/trades', 
            getMasterPastTradeApi: urlOrigin2 + '/master/past/trades', //替换getMasterHistoryApi
            copyApi: urlOrigin2 + '/copy',
            cancelCopyApi: urlOrigin2 + '/uncopy',
            getAvaCopyAmountApi: urlOrigin2 + '/valid_copy',
            getHistoricalRateApi: urlOrigin2 + '/master/monthly_profit_rates',
            getMasterInfoApi: urlOrigin2 + '/master/trading_profile',
            getMonthlySymbolsApi: urlOrigin2 + '/master/trading_symbols' 
        };

        var redbag = {
            getRedbagPoolApi: urlOrigin2 + '/bonus/index',
            getRedbagListApi: urlOrigin2 + '/bonus',
            receiveRedbagApi: urlOrigin2 + '/bonus/receive',
            exchangeRedbagApi: urlOrigin2 + '/bonus/exchange',
            getRedbagNumApi: urlOrigin2 + '/bonus/number',
            setRedbagReadedApi: urlOrigin2 + '/bonus/readed'
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
