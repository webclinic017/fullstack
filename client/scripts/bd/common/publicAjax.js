; (function (w) {
    'use strict';

    var origin = ($.cookie && $.cookie("access_origin2")) ? $.cookie("access_origin2") : '/api';
    var origin_app = '/api/app/v3';
    var origin_app2 = '/api/app/v4';
    var origin_third = '/api/third/v3';
    var origin_third2 = '/api/third/v4';
    origin = origin + '/v3';
    // console.log(origin);
    var apiUrl = {
        getUserInfo: origin_app + '/user/info',     // get
        register: origin_app + '/auth/register',     // post
        regOrLogin: origin + '/auth/login',     // post
        getAssetInfo: origin_app + '/centre/asset',  // get
        getWalletBalance: origin_app + '/wallet/valid_balance',  // get
        withdrawWallet: origin_app + '/wallet/withdraw',  // post
        getPaymentRate: origin_app + '/payment/rates',     // get
        checkWithdrawLimit: origin_app + '/payment/withdraw/limits', // get
        getBankCard: origin_app + '/user/bank_card', // get
        withdraw: origin_app + '/payment/withdraw',  // post
        bindBankCard: origin_app + '/user/bank_card',  // put
        getCountries: origin + '/region/countries', // get
        getStateList: origin + '/region/provinces', // get
        getCitiesList: origin + '/region/cities', // get
        setToken: origin + '/validation/code_token', // post
        checkExists: origin + '/user/check_exists', // get
        getPhoneCode: origin + '/validation/send_code', // post
        sendCode: origin + '/validation/send_code', // post
        getInviteList: origin_app + '/user/invites', // get
        setClueCustomer: origin + '/auth/page_signup', // post
        setInviteCode: origin + '/invite_code', // post
        // setCustomerPromotion: origin + '/user/ib_agent', // post
        getAvodaCode: origin + '/avoda/code', // post
        getAvodaPay: origin + '/avoda/pay', // post
        getAvodaCodeApp: origin_app + '/avoda/code', // post
        getAvodaPayApp: origin_app + '/avoda/pay', // post

        setUserSource: origin + '/user/source', //post
        getLcpagOrderInfo: origin + '/wallet/order_info', //get
        postLcpagPay: origin + '/lcpag/pay', //post
        getLcpagOrderInfoApp: origin_app + '/wallet/order_info', //get
        postLcpagPayApp: origin_app + '/lcpag/pay', //post
        getVersionCheck: origin + '/system/version_check', //get

        // liverpool比赛
        competitionList: origin + '/competition/list',
        competitionRanking: origin + '/competition/ranking',
        // app
        competitionListApp: origin_app + '/competition/list',
        competitionRankingApp: origin_app + '/competition/ranking',

        //交易品种
        getSymbols: origin_app + '/symbol/list', //get
        // 荣耀王者活动
        checkLogined: origin_app + '/auth/check', // get
        // 获取红包的状态
        getRedBagPool: origin_app + '/bonus/index', // get
        // 领取红包
        receiveRedbag: origin_app + '/bonus/receive', // put GET
        checkHonorStatus: origin_app + '/king/show', // get
        receiveHonor: origin_app + '/king/receive', // post
        exchangeHonor: origin_app + '/king/exchange', // post
        // 抽奖活动
        getPrizeChangce: origin_app + '/lucky_draw', // get
        drawPrize: origin_app + '/lucky_draw', // post
        receiveRedbagWeb: origin + '/bonus/receive', // put
        getRedbags: origin + '/bonus',

        // 三方接口
        thirdGetStatus: origin_third2 + '/user/auth_status', // get
        getIdTypeApi: origin_app2 + '/user/auth/id_type', // get
        thirdRegister: origin_third + '/auth/register', //post
        thirdGetKycList: origin_third2 + '/user/kyc_map', // get
        thirdSetKyc: origin_third2 + '/user/kyc', //post
        thirdSetUserInfo: origin_third2 + '/user/auth_info', //put
        thirdSetIdNo: origin_third + '/user/update_idno', //put
        // thirdUploadIdCard: origin_third + '/user/upload_base64_id_card', //put
        thirdSetPassword: origin_third + '/user/account', //post
        thirdChangePassword: origin_third + '/user/passwd', //put
        thirdCountries: origin_third + '/region/countries', // get
        thirdStateList: origin_third + '/region/provinces', // get
        thirdCitiesList: origin_third + '/region/cities', // get
        thirdGetCacheInfo: origin_third + '/user/auth_info', // get
        thirdUploadAddress: origin_third2 + '/user/upload_address_prove', //post
        thirdSetUserAddressInfo: origin_third2 + '/user/address', //put
        thirdUploadIdCard: origin_third2 + '/user/upload_id_card', //put
        getAddressUrl: 'https://services.postcodeanywhere.co.uk/Capture/Interactive/Find/v1.00/json3ex.ws', // 模糊搜索

        // 获取交易月报
        getMonReport: origin_app + '/user/monthly_report',     // get
        // 每日汇评
        getCommentList: origin_app + '/daily_comment/list',   // get
        getCommentDetails: origin_app + '/daily_comment/detail',   // get
        //挂单交易
        setPendingTrade: origin_app + '/pending_trade/add',  //post
        getRealQuote: origin_app + '/symbol/realtime',  //get
        //新春抽奖
        checkReward: origin + '/reward/check', //post
        joinReward: origin + '/reward/join', //post
        getRewardLst: origin + '/reward/list', //get
        // 申请高手
        recruitMaster: origin_app + '/master/auth_apply', //post
        // 刮奖活动 2018.4.20
        checkLotteryStatus: origin_app + '/activity/user_status', //get
        startLottery: origin_app + '/activity/scratch', //get
        shareLottery: origin_app + '/activity/share', //get
        //获取邮箱电话等信息
        getEmailPhone: origin + '/sys/messages',

        //第三方充值提现相关页面
        loginThird: origin + '/login/mt4_account',
        getThirdDepositPlatform: origin + '/payment/deposit/platform', //get
        getThirdTradeAccount: origin + '/trade_account/list', //get
        getThirdWalletBalance: origin + '/wallet/valid_balance', //get
        getThirdInfo: origin + '/user/info', //get
        depositThird: origin + '/payment/deposit', //post
        depositThirdTele: origin + '/payment/deposit/transfer', //post
        checkThirdDepositBank: origin + '/payment/deposit_card', //put
        getThirdEvidenceLst: origin + '/payment/evidence_list', //get
        uploadThirdEvidence: origin + '/payment/evidence', //post
        cancelThirdEvidence: origin + '/payment/evidence_cancel', //post
        getThirdWithdrawPlatform: origin + '/payment/withdraw_list', //get
        getThirdBankLst: origin + '/user/bank_card/lists', //get
        delThirdBank: origin + '/user/bank_card/destroy', //post
        getThirdBankNames: origin + '/bank_names', //get
        getThirdProvinces: origin + '/region/provinces', //get
        getThirdCities: origin + '/region/cities', //get
        uploadThirdBankInfo: origin + '/user/bank_card', //put
        checkThirdWithdrawLimit: origin + '/payment/withdraw/limits', //get
        withdrawThird: origin + '/payment/withdraw', //post
        getDefaultThirdAccount: origin + '/third/account',  //get
        getThirdPlatforms: origin + '/third/platforms', //get
        setThirdBindAccount: origin + '/third/accounts/bind',   //post
        getThirdAccountList: origin + '/third/accounts/lists',  //get
        destroyThirdAccount: origin + '/third/accounts/destroy',  //post
        bindCardPhone: origin + '/user/bank_card/phone',  //post

        getCCpayAddress: origin + '/ccpay/address', //get
        createCCpayAddress: origin + '/ccpay/address/create',   //post
        getCCpayAddressForApp: origin_app + '/ccpay/address', //get
        createCCpayAddressForApp: origin_app + '/ccpay/address/create',   //post
    };

    w.publicRequest = publicRequest;
    w.publicUploadFile = publicUploadFile;
    w.encryptPassword = encryptPassword;

    function publicRequest($url, $method, $params) {
        $url = apiUrl[$url];
        var t = '';
        try {
            t = getSearch().token;
        } catch (e) { }
        var token = t || $.cookie("token");
        if (token) {
            $url = setUrlParam($url) + 'token=' + token;
        }
        var user_code = $.cookie["user_code"] || '';
        if (user_code) {
            $url = setUrlParam($url) + 'user_id=' + user_code;
        }

        $params = $params ? $params : {};

        if ($method.toUpperCase() === 'GET') {
            return $.get($url, $params).then(function (data) {
                return checkTokenCode(data);
            }, function (error) {
                errFunc(error);
            });
        }
        if ($method.toUpperCase() === 'POST') {
            return $.post($url, $params).then(function (data) {
                return checkTokenCode(data);
            }, function (error) {
                errFunc(error);
            });
        }
        if ($method.toUpperCase() === 'PUT') {
            return $.ajax({
                url: $url,
                type: 'PUT',
                xhrFields: {
                    withCredentials: true
                },
                data: $params,
                success: function (data) {
                    // console.log(data);
                    return checkTokenCode(data);
                },
                error: function (error) {
                    errFunc(error);
                }
            });
        }

        // 检查返回的token code确定是不是要重新登陆
        function checkTokenCode(data) {
            // 100100,  // 令牌错误
            // 100101,  // 令牌已被列入黑名单   
            // 100102,  // 令牌过期    
            // 100103,  // 令牌验证失败  
            // 100104,  // 令牌未定义

            if (data.code >= 100100 && data.code <= 100199) {
                layer.open({
                    skin: 'msg',
                    content: lang.text('third.loginAgain'),
                    time: 2
                });
                toLogin();
            }
            return data;
        }

        function toLogin() {
            setTimeout(function () {
                try {
                    callNative({
                        type: "login"
                    });
                } catch (e) { }
                try {
                    openThirdNative({
                        type: "login"
                    });
                } catch (e) { }
            }, 1000);
        }

        function errFunc(error) {
            console.log(error);
            layer.open({
                skin: 'msg',
                content: "网络超时，请稍后再试",
                time: 2
            });
            toLogin();
        }
    }
    // 上传文件 form提交
    function publicUploadFile($url, $method, oForm) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token=' + token;

        return $.ajax({
            url: $url,
            type: $method.toUpperCase(),
            xhrFields: {
                withCredentials: true
            },
            data: oForm,
            processData: false,
            contentType: false,
            success: function (data) {
                // console.log(data);
                if (data.code === 100014) {
                    // console.log(data.message);
                    layer.open({
                        skin: 'msg',
                        content: lang.text('third.loginAgain'),
                        time: 2
                    });
                } else {
                    return data;
                }
            },
            error: function (err) {
                console.log(err);
                layer.open({
                    skin: 'msg',
                    content: "网络超时，请稍后再试",
                    time: 2
                });
            }
        });
    }

    /**
     * 后期考虑改为接口
     * live： https://global.tigerwitex.com/files/pub_v1.json
     * demo： https://globaldemo.beihaiwang123.com/files/pub_v1.json
     * 
     */
    var login_key_dev = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwyjx6cQ4AHOnmeIU15A+EvLk3V3oHv2YLp8nZBNqeg+uLPn2HyYF1/s/Mi2EZE2ypIFuvKiCX3ACrZuM55nJSTTjJzOfohh2tLMClLlbfHxdNyg8cotza4+iutrru2vy+kUWp0UuydNrjDJoVJwPXOkToLXjtOEofPmdzjLbE4QIDAQAB-----END PUBLIC KEY-----';
    var login_key_live = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN67wAcj1WL/scb9TuvawbqMABg2sYXdmLkzXYUK/qbZI168gpM1t4SqS2qxYuEy+a/rOQ/YokJy0Q+dwQBEUmRWd4//64D3shkMMPZ0VuQ67LmVbFzbaly9dEYbAkoKvd4qcVxG1qAYlPGAKVZjRbf3q6d1CGeUGQqoynofTZNwIDAQAB-----END PUBLIC KEY-----';
    function encryptPassword(text) {
        var login_key = /\.dev|\.beihaiwang123/.test(location.host) ? login_key_dev : login_key_live;
        var crypt = new JSEncrypt();
        crypt.setKey(login_key);
        var textEnc = crypt.encrypt(text);
        return textEnc;
    }
})(window);