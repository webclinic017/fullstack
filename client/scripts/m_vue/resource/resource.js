/**
    var rootUrl = 'https://www.tigerwit.com';
    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}
 */

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
};

function dealApiUrlResource($url, $method, $params) {
    Vue.http.options.xhr = { withCredentials: true };
    var token = $.cookie("token") || '';
    $url = apiUrl[$url] + '?token='+token;
    $params = $params ? $params : {};

    if ($method.toUpperCase() === 'GET') {
        return Vue.resource($url).get($params).then(function (data) {
            // console.log(data.data);
            data = data.data;
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
        }, function (error) {
            errFunc(error);
        });
    }

    if ($method.toUpperCase() === 'PUT') {
        return Vue.resource($url).update($params).then(function (data) {
            // console.log(data.data);
            data = data.data;
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
        }, function (error) {
            errFunc(error);
        });
    }

    if ($method.toUpperCase() === 'POST') {
        return Vue.resource($url).save($params).then(function (data) {
            // console.log(data.data);
            data = data.data;
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
        }, function (error) {
            errFunc(error);
        });
    }
}

function errFunc (error) {
    console.log(error);
    layer.open({
        skin: 'msg',
        content: "服务器异常",
        time: 2
    });
}