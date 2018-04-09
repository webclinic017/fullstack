;(function (w) {
    'use strict';

    var origin = ($.cookie && $.cookie("access_origin2")) ? $.cookie("access_origin2") : '/api';
    // console.log(origin);
    var apiUrl = {
        getUserInfo: origin + '/user/info',     // get
        register: origin + '/auth/register',     // post
        regOrLogin: origin + '/v2/auth/login',     // post
        getAssetInfo: origin + '/centre/asset',  // get
        getWalletBalance: origin + '/wallet/valid_balance',  // get
        withdrawWallet: origin + '/wallet/withdraw',  // post
        getPaymentRate: origin + '/payment/rates',     // get
        checkWithdrawLimit: origin + '/payment/withdraw/limits', // get
        getBankCard: origin + '/user/bank_card', // get
        withdraw: origin + '/payment/withdraw',  // post
        bindBankCard: origin + '/user/bank_card',  // put
        getCountries: origin + '/region/countries', // get
        getStateList: origin + '/region/provinces', // get
        getCitiesList: origin + '/region/cities', // get
        setToken: origin + '/validation/code_token', // post
        checkExists: origin + '/user/check_exists', // get
        getPhoneCode: origin + '/validation/send_code', // post
        getInviteList: origin + '/user/invites', // get
        setClueCustomer: origin + '/auth/page_signup', // post
        setInviteCode: origin + '/invite_code', // post
        //交易品种
        getSymbols: origin + '/symbols', //get
        // 荣耀王者活动
        checkLogined: origin + '/auth/check', // get
        getRedBagPool: origin + '/bonus/index', // get
        receiveRedbag: origin + '/bonus/receive', // put
        checkHonorStatus: origin + '/king/show', // get
        receiveHonor: origin + '/king/receive', // post
        exchangeHonor: origin + '/king/exchange', // post
        // 抽奖活动
        getPrizeChangce: origin + '/lucky_draw', // get
        drawPrize: origin + '/lucky_draw', // post

        // 三方接口
        thirdGetStatus: origin + '/third/user/auth_status', // get
        thirdRegister: origin + '/third/auth/register', //post
        thirdGetKycList: origin + '/third/user/kyc_map', // get
        thirdSetKyc: origin + '/third/user/kyc', //post
        thirdSetUserInfo: origin + '/third/user/auth_info', //put
        thirdUploadIdCard: origin + '/third/user/upload_base64_id_card', //put
        thirdSetPassword: origin + '/third/user/account', //post
        thirdChangePassword: origin + '/third/user/passwd', //put

        // 获取交易月报
        getMonReport: origin + '/user/monthly_report',     // get
        // 每日汇评
        getCommentList: origin + '/daily_comment/list',   // get
        getCommentDetails: origin + '/daily_comment/detail',   // get
        //挂单交易
        setPendingTrade: origin + '/pending_trade/add',  //post
        getRealQuote: origin + '/symbol/realtime',  //get
        //新春抽奖
        checkReward: origin + '/reward/check', //post
        joinReward: origin + '/reward/join', //post
        getRewardLst: origin + '/reward/list', //get
    };

    w.publicRequest = publicRequest;
    w.publicUploadFile = publicUploadFile;

    function publicRequest ($url, $method, $params) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
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
        function checkTokenCode (data) {
            // 100100,  // 令牌错误
            // 100101,  // 令牌已被列入黑名单   
            // 100102,  // 令牌过期    
            // 100103,  // 令牌验证失败  
            // 100104,  // 令牌未定义

            if (data.code >= 100100 && data.code <= 100199) {
                layer.open({
                    skin: 'msg',
                    content: "请重新登陆",
                    time: 2
                });
                toLogin();
            } else {
                return data;
            }
        }

        function toLogin () {
            setTimeout(function () {
                callNative({
                    type: "login"
                });
            }, 1000);
        }

        function errFunc (error) {
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
    function publicUploadFile ($url, $method, oForm) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
        
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
                        content: "请重新登陆",
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
})(window);