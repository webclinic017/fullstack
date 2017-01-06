// var rootUrl = 'https://www.tigerwit.com';
var rootUrl = '';
var apiUrl = {
    changePwdApi: rootUrl + '/action/public/v4/change_password'
};
var apiUrlResource = {
    changePwd:  Vue.resource(apiUrl.changePwdApi)
};