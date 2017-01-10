// var rootUrl = 'https://www.tigerwit.com';
// get: {method: 'GET'},
// save: {method: 'POST'},
// query: {method: 'GET'},
// update: {method: 'PUT'},
// remove: {method: 'DELETE'},
// delete: {method: 'DELETE'}

var rootUrl = '';
var apiUrl = {
    changePwdApi: rootUrl + '/action/public/v4/change_password', //post
    getSettingInfoApi: rootUrl + '/action/public/v4/get_info', //get
    getCodeApi: rootUrl + '/action/public/v3/get_phone_reg_code', //post
    set_token: rootUrl + '/action/public/v3/set_token',  //get
    changeTelBind: rootUrl + '/action/public/v3/set_my_bind_phone', //post
    getInfo: rootUrl + '/action/public/v4/get_info', //get
    upload_avatar: rootUrl + '/action/public/v3/user_upload', //get
    
};
var apiUrlResource = {
    changePwd:  Vue.resource(apiUrl.changePwdApi),
    getSettingInfo: Vue.resource(apiUrl.getSettingInfoApi),
    getCode: Vue.resource(apiUrl.getCodeApi),
    set_token: Vue.resource(apiUrl.set_token),
    changeTelBind: Vue.resource(apiUrl.changeTelBind),
    getInfo: Vue.resource(apiUrl.getInfo),
    upload_avatar: Vue.resource(apiUrl.upload_avatar),
};