// var rootUrl = 'https://www.tigerwit.com';
var rootUrl = '';
var apiUrl = {
    changePwdApi: rootUrl + '/action/public/v4/change_password',
    getSettingInfoApi: rootUrl + '/action/public/v4/get_info',
};
var apiUrlResource = {
    changePwd:  Vue.resource(apiUrl.changePwdApi),
    getSettingInfo: Vue.resource(apiUrl.getSettingInfoApi)
};