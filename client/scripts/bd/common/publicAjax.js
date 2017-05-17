;(function (w) {
    'use strict';

    var origin = $.cookie("access_origin2") || '';
    var apiUrl = {
        getUserInfo: origin + '/user/info',     // get
        register: origin + '/auth/register',     // post
        getAssetInfo: origin + '/centre/asset',  // get
        getWalletBalance: origin + '/wallet/valid_balance',  // get
        withdrawWallet: origin + '/wallet/withdraw',  // post
        getPaymentRate: origin + '/payment/rates',     // get
        checkWithdrawLimit: origin + '/payment/withdraw/limits', // get
        getBankCard: origin + '/user/bank_card', // get
        withdraw: origin + '/payment/withdraw',  // post
        bindBankCard: origin + '/user/bank_card',  // put
        getStateList: origin + '/region/provinces', // get
        getCitiesList: origin + '/region/cities', // get
        setToken: origin + '/validation/code_token', // post
        checkExists: origin + '/user/check_exists', // get
        getPhoneCode: origin + '/validation/send_phone_code', // post
        getInviteList: origin + '/user/invites', // get

        // 三方接口
        thirdGetStatus: origin + '/third/user/auth_status', // get
        thirdRegister: origin + '/third/auth/register', //post
        thirdGetKycList: origin + '/third/user/kyc_map', // get
        thirdSetKyc: origin + '/third/user/kyc', //post
        thirdSetUserInfo: origin + '/third/user/auth_info', //put
        thirdUploadIdCard: origin + '/third/user/upload_base64_id_card', //put
        thirdSetPassword: origin + '/third/user/account', //post
        thirdChangePassword: origin + '/third/user/passwd', //put
    };

    w.publicRequest = publicRequest;
    w.publicUploadFile = publicUploadFile;

    function publicRequest ($url, $method, $params) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
        $params = $params ? $params : {};
        
        return $.ajax({
            url: $url,
            type: $method.toUpperCase(),
            xhrFields: {
                withCredentials: true
            },
            data: $params,
            success: function (data) {
                // console.log(data);
                if (data.code === 100014) {
                    console.log(data.message);
                    layer.open({
                        skin: 'msg',
                        content: "请重新登陆",
                        time: 2
                    });
                } else {
                    return data;
                }
            },
            error: function (error) {
                console.log(error);
                layer.open({
                    skin: 'msg',
                    content: "服务器异常",
                    time: 2
                });
            }
        });
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
                    content: "服务器异常",
                    time: 2
                });
            }
        });
    }
})(window);