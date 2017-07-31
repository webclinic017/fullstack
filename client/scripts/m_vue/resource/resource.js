/**
    var rootUrl = 'https://www.tigerwit.com';
    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}
 */

;(function (w) {
    var rootUrl = $.cookie("access_origin2");
    // var rootUrl = '';
    var apiUrl = {
        // changePwdApi: rootUrl + '/action/public/v4/change_password',    //post
        changePwdApi: rootUrl + '/user/passwd',    //put
        // getSettingInfoApi: rootUrl + '/action/public/v4/get_info',      //get
        getSettingInfoApi: rootUrl + '/user/info',      //get
        // getCodeApi: rootUrl + '/action/public/v3/get_phone_reg_code',   //post
        getCodeApi: rootUrl + '/validation/send_phone_code',   //post
        // set_token: rootUrl + '/action/public/v3/set_token',             //get
        set_token: rootUrl + '/validation/code_token',             //post
        // check_exsit: rootUrl + '/action/public/v4/exists',              //get
        check_exsit: rootUrl + '/user/check_exists',              //get
        // changeTelBind: rootUrl + '/action/public/v3/set_my_bind_phone', //post
        changeTelBind: rootUrl + '/user/phone', //put
        upload_avatar: rootUrl + '/action/public/v3/user_upload',       //get
        // set_username: rootUrl + '/action/public/v4/set_username',       //post
        set_username: rootUrl + '/user/username',       //put
        // get_province: rootUrl + '/action/public/v4/statecode_list?world_code=CN', //get
        get_province: rootUrl + '/region/provinces', //get
        // get_citys: rootUrl + '/action/public/v4/citycode_list',         //get
        get_citys: rootUrl + '/region/cities',         //get
        // set_region: rootUrl + '/action/public/v4/set_region',           //post
        set_region: rootUrl + '/user/region',           //put
        // sendEmailCodeApi: rootUrl + '/action/public/v3/send_email_code', //post
        sendEmailCodeApi: rootUrl + '/validation/send_email_code', //post
        // checkEmailCodeApi: rootUrl + '/action/public/v3/check_email_code', // post
        checkEmailCodeApi: rootUrl + '/validation/check_email_code', // post
        // saveEmailApi: rootUrl + '/action/public/v3/set_my_bind_email', //post
        saveEmailApi: rootUrl + '/user/email', //put
        // checkCodeApi: rootUrl + '/action/public/v4/verifycode', //post
        checkCodeApi: rootUrl + '/validation/check_phone_code', //post
        // setNewPasswordApi: rootUrl + '/action/public/v4/change_password', //post
        setNewPasswordApi: rootUrl + '/forget_passwd', //put
        getWebProductInfoApi: '/napi?action=get_product', //get
    };
    w.dealApiUrlResource = dealApiUrlResource;
    w.getVueApi = getVueApi;

    function getVueApi(){
        return apiUrl;
    }
    
    function dealApiUrlResource($url, $method, $params) {
        Vue.http.options.xhr = { withCredentials: true };
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
        $params = $params ? $params : {};

        if ($method.toUpperCase() === 'GET') {
            return Vue.resource($url).get($params).then(function (data) {
                // console.log(data.data);
                data = data.data;
                return checkTokenCode(data);
            }, function (error) {
                errFunc(error);
            });
        }

        if ($method.toUpperCase() === 'PUT') {
            return Vue.resource($url).update($params).then(function (data) {
                // console.log(data.data);
                data = data.data;
                return checkTokenCode(data);
            }, function (error) {
                errFunc(error);
            });
        }

        if ($method.toUpperCase() === 'POST') {
            return Vue.resource($url).save($params).then(function (data) {
                // console.log(data.data);
                data = data.data;
                return checkTokenCode(data);
            }, function (error) {
                errFunc(error);
            });
        }
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

    function errFunc (error) {
        console.log(error);
        layer.open({
            skin: 'msg',
            content: "服务器异常",
            time: 2
        });
        toLogin();
    }

    function toLogin() {
        setTimeout(function () {
            callNative({
                type: "login"
            });
        }, 1000);
    }
})(window);