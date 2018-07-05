;(function (w) {
    'use strict';

    var origin = ($.cookie && $.cookie("access_origin2")) ? $.cookie("access_origin2") : '/api';
    var origin_app = '/api/app/v3';
    var origin_third = '/api/third/v3';
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
        getCountries: origin_app + '/region/countries', // get
        getStateList: origin_app + '/region/provinces', // get
        getCitiesList: origin_app + '/region/cities', // get
        setToken: origin + '/validation/code_token', // post
        checkExists: origin + '/user/check_exists', // get
        getPhoneCode: origin + '/validation/send_code', // post
        getInviteList: origin_app + '/user/invites', // get
        setClueCustomer: origin + '/auth/page_signup', // post
        setInviteCode: origin + '/invite_code', // post
        //交易品种
        getSymbols: origin_app + '/symbol/list', //get
        // 荣耀王者活动
        checkLogined: origin_app + '/auth/check', // get
        getRedBagPool: origin_app + '/bonus/index', // get
        receiveRedbag: origin_app + '/bonus/receive', // put
        checkHonorStatus: origin_app + '/king/show', // get
        receiveHonor: origin_app + '/king/receive', // post
        exchangeHonor: origin_app + '/king/exchange', // post
        // 抽奖活动
        getPrizeChangce: origin_app + '/lucky_draw', // get
        drawPrize: origin_app + '/lucky_draw', // post

        // 三方接口
        thirdGetStatus: origin_third + '/user/auth_status', // get
        thirdRegister: origin_third + '/auth/register', //post
        thirdGetKycList: origin_third + '/user/kyc_map', // get
        thirdSetKyc: origin_third + '/user/kyc', //post
        thirdSetUserInfo: origin_third + '/user/auth_info', //put
        thirdSetIdNo: origin_third + '/user/update_idno', //put
        thirdUploadIdCard: origin_third + '/user/upload_base64_id_card', //put
        thirdSetPassword: origin_third + '/user/account', //post
        thirdChangePassword: origin_third + '/user/passwd', //put
        thirdCountries: origin_third + '/region/countries', // get

        // 获取交易月报
        getMonReport: origin_app + '/user/monthly_report',     // get
        // 每日汇评
        getCommentList: origin_app + '/daily_comment/list',   // get
        getCommentDetails: origin_app + '/daily_comment/detail',   // get
        //挂单交易
        setPendingTrade: origin_app + '/pending_trade/add',  //post
        getRealQuote: origin_app + '/symbol/realtime',  //get
        //新春抽奖
        checkReward: origin_app + '/reward/check', //post
        joinReward: origin_app + '/reward/join', //post
        getRewardLst: origin_app + '/reward/list', //get
        // 申请高手
        recruitMaster: origin_app + '/master/auth_apply', //post
        // 刮奖活动 2018.4.20
        checkLotteryStatus: origin_app + '/activity/user_status', //get
        startLottery: origin_app + '/activity/scratch', //get
        shareLottery: origin_app + '/activity/share', //get
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