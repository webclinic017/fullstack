/**
    var rootUrl = 'https://www.tigerwit.com';
    get: {method: 'GET'},
    save: {method: 'POST'},
    query: {method: 'GET'},
    update: {method: 'PUT'},
    remove: {method: 'DELETE'},
    delete: {method: 'DELETE'}
 */

var rootUrl = '';
var apiUrl = {
    changePwdApi: rootUrl + '/action/public/v4/change_password',    //post
    getSettingInfoApi: rootUrl + '/action/public/v4/get_info',      //get
    getCodeApi: rootUrl + '/action/public/v3/get_phone_reg_code',   //post
    set_token: rootUrl + '/action/public/v3/set_token',             //get
    check_exsit: rootUrl + '/action/public/v4/exists',              //get
    changeTelBind: rootUrl + '/action/public/v3/set_my_bind_phone', //post
    getInfo: rootUrl + '/action/public/v4/get_info',                //get
    upload_avatar: rootUrl + '/action/public/v3/user_upload',       //get
    set_username: rootUrl + '/action/public/v4/set_username',       //post
    get_province: rootUrl + '/action/public/v4/statecode_list?world_code=CN', //get
    get_citys: rootUrl + '/action/public/v4/citycode_list',         //get
    set_region: rootUrl + '/action/public/v4/set_region',           //post
    sendEmailCodeApi: rootUrl + '/action/public/v3/send_email_code', //post
    checkEmailCodeApi: rootUrl + '/action/public/v3/check_email_code', // post
    saveEmailApi: rootUrl + '/action/public/v3/set_my_bind_email', //post
};
var apiUrlResource = {
    changePwd:  Vue.resource(apiUrl.changePwdApi),
    getSettingInfo: Vue.resource(apiUrl.getSettingInfoApi),
    getCode: Vue.resource(apiUrl.getCodeApi),
    set_token: Vue.resource(apiUrl.set_token),
    check_exsit: Vue.resource(apiUrl.check_exsit),
    changeTelBind: Vue.resource(apiUrl.changeTelBind),
    getInfo: Vue.resource(apiUrl.getInfo),
    upload_avatar: Vue.resource(apiUrl.upload_avatar),
    set_username: Vue.resource(apiUrl.set_username),
    get_province: Vue.resource(apiUrl.get_province),
    get_citys: Vue.resource(apiUrl.get_citys),
    set_region: Vue.resource(apiUrl.set_region),
    sendEmailCode: Vue.resource(apiUrl.sendEmailCodeApi),
    checkEmailCode: Vue.resource(apiUrl.checkEmailCodeApi),
    saveEmail: Vue.resource(apiUrl.saveEmailApi),
};