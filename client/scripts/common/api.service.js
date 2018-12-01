;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('api', api);

    api.$inject = ['$cookies'];

    function api($cookies) {
        // php接口要用http://proxy.tigerwit.com请求

        var urlOrigin = $cookies["access_origin"] || '';    // node 中写入cookie
        var urlOrigin2 = $cookies["access_origin2"] || '/api';    // node 中写入cookie
        var o = urlOrigin;
        // console.log('urlOrigin2',urlOrigin2)
        urlOrigin2 = urlOrigin2 + '/v3';
        var account = {
            getPersonalInfoDegreeApi: urlOrigin2 + '/user/perfect_degree',
            loginByMt4Api: urlOrigin2 + '/login/mt4_account',
            loginApi: urlOrigin2 + '/auth/login',
            updataUserInfoApi: urlOrigin2 + '/user/auth_info',
            updataId: urlOrigin2 + '/user/update_idno',
            setUsername: urlOrigin2 + '/user/username',
            checkLoginedApi: urlOrigin2 + '/auth/check',
            setTokenApi: urlOrigin2 + '/validation/code_token',
            checkExistApi: urlOrigin2 + '/user/check_exists',
            registerApi: urlOrigin2 + '/auth/login',
            uploadIdCardBase64: urlOrigin2 + '/user/upload_base64_id_card',
            uploadIdCardForm: urlOrigin2 + '/user/upload_id_card',
            uploadAvatarForm: urlOrigin2 + '/user/upload_avatar',
            setNewPwdApi: urlOrigin2 + '/forget_passwd',
            getPersonalInfoApi: urlOrigin2 + '/user/info',
            setUserNameEnApi: urlOrigin2 + '/user/username_en',
            getAssetInfoApi: urlOrigin2 + '/account/summary',
            getAccountInfoApi: urlOrigin2 + '/trade_account/asset',
            getTotalDealAccountApi: urlOrigin2 + '/trade_account/summary',
            getDealAccountListApi: urlOrigin2 + '/trade_account/list',
            setDealAccountNameApi: urlOrigin2 + '/trade_account/name',
            newSubAccountApi: urlOrigin2 + '/trade_account/add',
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
            checkAgentApi: urlOrigin2 + '/auth/valid_agent',
            getAgentAuthStatusApi: urlOrigin2 + '/user/agent_auth_status',
            setAgentPromotionApi: urlOrigin2 + '/user/ib_agent',

            // getRCaptchaApi: urlOrigin2 + '/validation/send_phone_code',
            // sendEmailCodeApi: urlOrigin2 + '/validation/send_email_code',
            sendCodeApi: urlOrigin2 + '/validation/send_code', 

            // checkPhoneAndCaptchaApi: urlOrigin2 + '/validation/check_phone_code',
            // checkEmailCodeApi: urlOrigin2 + '/validation/check_email_code',
            checkCodeApi: urlOrigin2 + '/validation/check_code',

            setBindEmailApi: urlOrigin2 + '/user/email',
            getSpreadInfoApi: urlOrigin2 + '/spread_info',
            getUserGroupApi: urlOrigin2 + '/user/group',
            getAdvertiseRecords: urlOrigin2 + '/position/records',
            getFunctionSwitch: '/napi?action=get_function_switch',
            getIdcardApi: urlOrigin2 + '/user/idcard',
            getEmailPhone: urlOrigin2 + '/sys/messages'
        };
        var asset = {
            withdrawApi: urlOrigin2 + '/payment/withdraw',
            getCardApi: urlOrigin2 + '/user/bank_card',
            bindCardApi: urlOrigin2 + '/user/bank_card',
            bindCardPhoneApi: urlOrigin2 + '/user/bank_card/phone',
            getCardListApi: urlOrigin2 + '/user/bank_card/lists',
            deleteCardApi: urlOrigin2 + '/user/bank_card/destroy',
            cancelWithdrawApi: urlOrigin2 + '/payment/withdraw/cancel',
            getHistoryApi: urlOrigin2 + '/payment/histories',
            depositApi: urlOrigin2 + '/payment/deposit',
            getDepositLimitApi: urlOrigin2 + '/payment/deposit/limits',
            getDepositPlatformApi: urlOrigin2 + '/payment/deposit/platform',
            getWithdrawPlatformApi: urlOrigin2 + '/payment/withdraw_list',
            getFXRateApi: urlOrigin2 + '/payment/rates',
            getIsWithdrawApi: urlOrigin2 + '/payment/withdraw/limits',
            walletDepositApi: urlOrigin2 + '/wallet/deposit',
            walletWithdrawApi: urlOrigin2 + '/wallet/withdraw',
            walletCanWithdrawApi: urlOrigin2 + '/wallet/valid_balance',
            walletbalanceApi: urlOrigin2 + '/wallet/balance',
            getMasterBonusSummaryApi: urlOrigin2 + '/commission/master_profile',
            getCopierBonusSummaryApi: urlOrigin2 + '/commission/custom_profile',
            getMasterBonusListApi: urlOrigin2 + '/commission/master_settle',
            getCopierBonusListApi: urlOrigin2 + '/commission/custom_settle',
            getBonusDetailListApi: urlOrigin2 + '/commission/settle_info',
            getBanksApi: urlOrigin2 + '/bank_names',
            teleDepositApi: urlOrigin2 + '/payment/deposit/transfer',
            uploadPaymentEvidenceApi: urlOrigin2 + '/payment/evidence',
            getPaymentEvidenceApi: urlOrigin2 + '/payment/evidence_list',
            cancelPaymentEvidenceApi: urlOrigin2 + '/payment/evidence_cancel',
            checkEvidenceStatusApi: urlOrigin2 + '/payment/evidence_status',
            checkInvestBankApi: urlOrigin2 + '/payment/deposit_card'
        };
        var forex = {
            
        };
        var invest = {
            getInvestSummaryApi: urlOrigin2  + '/centre/trading_profile',
            getInvestProfitLineApi: urlOrigin2 + '/centre/trading_trend',
            getInvestBarChartApi: urlOrigin2 + '/centre/trading_symbols',
            getInvestCurrentDataApi: urlOrigin2 + '/centre/active/self_trades',  // 自主交易订单列表
            getInvestCurrentTradersApi: urlOrigin2 + '/centre/active/copy_masters', // 当前跟随的高手列表
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
            getCommentListApi: urlOrigin2 + '/daily_comment/list',   // get
            getCommentDetailsApi: urlOrigin2 + '/daily_comment/detail',   // get
            getWebProductInfoApi: '/napi?action=get_product',
            getWebTradeFeeInfoApi: '/napi?action=get_trade_fee',
            getSymbolListApi: urlOrigin2 + '/symbol/list'
        };
        var ranklist = {
            getMastersListApi: urlOrigin2 + '/master/list',
            getIndexMastersApi: urlOrigin2 + '/master/index',
            getOrderInfoApi: o + '/action/public/v3/closed_fund_leads' // 暂无 定期跟单预约
        };
        var trader = {
            getMasterCurrentApi: urlOrigin2 + '/master/active/trades', 
            getMasterPastTradeApi: urlOrigin2 + '/master/past/trades', //替换getMasterHistoryApi
            copyApi: urlOrigin2 + '/copy/copy',
            cancelCopyApi: urlOrigin2 + '/copy/uncopy',
            getAvaCopyAmountApi: urlOrigin2 + '/copy/valid_copy',
            getHistoricalRateApi: urlOrigin2 + '/master/monthly_profit_rates',
            getMasterInfoApi: urlOrigin2 + '/master/trading_profile',
            getMonthlySymbolsApi: urlOrigin2 + '/master/trading_symbols',
            getMasterGradeApi: urlOrigin2 + '/master/level',
            getMasterConditionApi: urlOrigin2 + '/master/condition',
            applyMasterApi: urlOrigin2 + '/master/apply'
        };

        var redbag = {
            getRedbagPoolApi: urlOrigin2 + '/bonus/index',
            getRedbagListApi: urlOrigin2 + '/bonus',
            receiveRedbagApi: urlOrigin2 + '/bonus/receive',
            exchangeRedbagApi: urlOrigin2 + '/bonus/exchange',
            getRedbagNumApi: urlOrigin2 + '/bonus/number',
            setRedbagReadedApi: urlOrigin2 + '/bonus/readed',
            //荣耀王者活动接口
            checkHonorStatusApi: urlOrigin2 + '/king/show',
            receiveHonorApi: urlOrigin2 + '/king/receive',
            exchangeHonorApi: urlOrigin2 + '/king/exchange',
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
