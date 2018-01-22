;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http', '$rootScope', '$q', '$cookies', 'whiteLabel', 'api', 'publicHttp'];

    function account($http, $rootScope, $q, $cookies, whiteLabel, api, publicHttp) {
        var o = api.account;
        var service = {
            encrypt: encrypt,
            login: login,
            checkLogined: checkLogined,
            setToken: setToken,
            updataId: updataId,
            setUsername: setUsername,
            checkExist: checkExist,
            updataUserInfo: updataUserInfo,
            getRCaptcha: getRCaptcha,
            register: register,
            checkPhoneAndCaptcha: checkPhoneAndCaptcha,
            setNewPwd: setNewPwd,
            getPersonalInfo: getPersonalInfo,
            getPersonalInfoDegree: getPersonalInfoDegree,
            getAssetInfo: getAssetInfo,
            getUnreadLength: getUnreadLength,
            getNoticeList: getNoticeList,
            getAllRead: getAllRead,
            getSettingInfo: getSettingInfo,
            getLocation: getLocation,
            getWorlds: getWorlds,
            getStates: getStates,
            getCities: getCities,
            setBasicInfo: setBasicInfo,
            setPwd: setPwd,
            setPwdFirst: setPwdFirst,
            setPhone: setPhone,
            getVerifyStatus: getVerifyStatus,
            setKyc: setKyc,
            getKyc: getKyc,
            logout: logout,
            sendEmailCode: sendEmailCode,
            checkEmailCode: checkEmailCode,
            setBindEmail: setBindEmail,
            getSpreadInfo: getSpreadInfo,
            getUserGroup: getUserGroup,
            hasChecked: false,
            getAuthStatus: getAuthStatus, //获取认证状态    
            getAdvertiseRecords: getAdvertiseRecords        
        };
        var resolveValue;
        return service;

        /**
         * @name encrypt
         * @desc 密码加密
         */
        function encrypt(text) {
            var crypt = new JSEncrypt();
            var key = whiteLabel.loginKey;
            crypt.setKey(key);
            var textEnc = crypt.encrypt(text);
            return textEnc;
        }

        /**
         * @name login
         * @desc 登陆
         * @param {String} phone 手机号
         * @param {String} password 登录密码/验证码
         * @param {int} login_type 登录验证方式，1-密码登录，2-验证码登录
         * @param {int} remember 是否记住登录状态，1：是，0：否
         * 
         */
        function login(params) {

            return publicHttp.dealPublicRequest(o.loginApi, 'POST', params);
        }

        function checkLogined() {

            var deferred = $q.defer();
            if (!getCookie("user_code")) { //无cookie直接认为没登录
                setTimeout(function () {
                    deferred.resolve(false);
                }, 100);
            } else {
                if (service.hasChecked) {  //发过请求，只等结果即可。
                    checkResolve(deferred);
                } else {   //有cookie时，只发一次请求
                    service.hasChecked = true;
                    publicHttp.dealPublicRequest(o.checkLoginedApi, 'GET').then(function (data) {
                        if (data.is_succ) {
                            resolveValue = true;
                            deferred.resolve(true);
                        } else {
                            resolveValue = false;
                            deferred.resolve(false);
                        }
                    }, function () {
                        resolveValue = false;
                        deferred.resolve(false);
                    });
                }
            }
            
            return deferred.promise;

        }

        function getCookie(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            }
            else {
                return null;
            }
        }

        function checkResolve(def) {
            if (resolveValue == undefined) {
                setTimeout(function () {
                    checkResolve(def);
                }, 100);
            } else {
                setTimeout(function () {
                    def.resolve(resolveValue);
                }, 100)
            }
        }

        /**
         * @name setToken
         * @desc 进入注册页面设置 token 在获取手机验证码时回传
         */
        function setToken() {
            return publicHttp.dealPublicRequest(o.setTokenApi, 'POST');
        }

        /**
         * @name checkExist
         * @desc 检查号码、昵称是否已存在
         * @param {String} key 1:昵称, 2:邮箱, 3:手机号, 4:身份证号码
         * @param {String} number 可以是手机号、电子邮箱、身份证号码
         * @return {Object} {
         *   is_succ: true,
         *   data: true     // true 存在 false 不存在
         * }
         */
        function checkExist(key, number, mt4) {
            return publicHttp.dealPublicRequest(o.checkExistApi, 'GET', {
                key: key,
                value: number,
                mt4_id: mt4
            });
        }

        function updataUserInfo(params) {
            return publicHttp.dealPublicRequest(o.updataUserInfoApi, 'PUT', params)
        }

        /**
         * @name getRCaptcha
         * @desc 获取验证码
         * 验证码类型:type -> 1-注册,2-忘记密码,3-修改绑定,4-登录,5-申请代理验证码
         * 验证码方式:mode -> 1-短信(默认),2-语音
         */
        function getRCaptcha(phone, token, type, mode) {
            return publicHttp.dealPublicRequest(o.getRCaptchaApi, 'POST', {
                 phone: phone,
                 code_token: token,
                 type: type,
                 mode: mode
            });
        }

        /**
         * @name register
         * params
                phone: phone,
                verify_code: captcha,
                password: password,
                lp: lp,
                pid: pid,
                unit: unit,
                key: key
         * @desc 注册
         */
        function register(params) {

            return publicHttp.dealPublicRequest(o.registerApi, 'POST', params);
        }

        /**
         * @name checkPhoneAndCaptcha
         * @desc 检查验手机号与验证码是否匹配，忘记密码功能第一步
         * @return {Object} {
         *   is_succ: true,    // true 验证码正确 false 未发送验证码或者验证码错误
         * }
         */
        function checkPhoneAndCaptcha(phone, captcha) {
            return publicHttp.dealPublicRequest(o.checkPhoneAndCaptchaApi, 'POST', {
                phone: phone,
                code: captcha
            });
        }

        /**
         * @name setNewPwd
         * @desc 通过手机号码和验证码来设置新密码，忘记密码功能的第二步
         */
        function setNewPwd(phone, captcha, newPwd) {
            return publicHttp.dealPublicRequest(o.setNewPwdApi, 'PUT', {
                phone: phone,
                code: captcha,
                password: newPwd
            });
        }

        function getPersonalInfo() {

            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'GET').then(function (data) {
                if (!data) return false;
                var personal = {};

                angular.forEach(data.data, function (value, key) {

                    if (key === 'user_code') {
                        this['usercode'] = value;

                    } else {
                        this[key] = value;
                    }
                }, personal);

                return personal;
            });
        }

        /**
         * Account Service 获取用户信息完整度
         *
         * @method getPersonalInfoDegree
         */
        function getPersonalInfoDegree() {
            return publicHttp.dealPublicRequest(o.getPersonalInfoDegreeApi, 'GET');
        }

        /**
         * Account Service 获取资产信息
         * 余额、净值、浮动盈亏等
         *
         * @method getAssetInfo
         */
        function getAssetInfo() {
            return publicHttp.dealPublicRequest(o.getAssetInfoApi, 'GET', {
                type: 0
            });
        }

        /**
         * Account Service 获取未读消息数量
         *
         * @method getUnreadLength
         *
         */
        function getUnreadLength() {
            return publicHttp.dealPublicRequest(o.getUnreadLengthApi, 'GET');
        }

        /*
         * Account Service 获取消息通知列表
         *
         * @method getNoticeList
         *
         */
        function getNoticeList(offset, limit, type) {
            return publicHttp.dealPublicRequest(o.getNoticeListApi, 'GET', {
                offset: offset,
                limit: limit,
                type: type
            });
        }

        /*
         * Account Service 把所有消息标记为已读
         *
         * @method getAllRead
         *
         */
        function getAllRead(type) {
            return publicHttp.dealPublicRequest(o.getAllReadApi, 'PUT', {
                type: type
            });
        }

        /**
         * @name getSettingInfo
         * @desc setting 获取手机号码、邮箱等加密信息
         */
        function getSettingInfo() {
            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'GET').then(function (data) {
                if (!data) return false;
                if (data.is_succ) {
                    return data.data;
                }
            });
        }

        /**
         * @name getLocation
         * @desc 获取所在地
         * @return {Object} {
         *   username: ,
         *   world_code: ,
         *   world_name: ,
         *   state_code: ,  // 若非中国，为 null
         *   state_name: ,
         *   city_code: ,   // 若非中国，为 null
         *   city_name: ,
         *   desc:          //个性签名
         * }
         */
        function getLocation() {
            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'GET');
        }

        function getWorlds() {
            return publicHttp.dealPublicRequest(o.getWorldsApi, 'GET');
        }

        function getStates(countryCode) {
            return publicHttp.dealPublicRequest(o.getStatesApi, 'GET', {
                country_code: countryCode
            });
        }

        function getCities(stateCode) {
            return publicHttp.dealPublicRequest(o.getCitiesApi, 'GET', {
                parent_code: stateCode
            });
        }

        /**
         * @name setBasicInfo
         * @desc setting 模块设置基本信息
         */
        function setBasicInfo(username, world, state, city) {
            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'PUT', {
                username: username,
                world_code: world,
                state_code: state,
                city_code: city
            });
        }

        /**
         * @name setPwdFirst
         * @desc 首次 设置密码
         */
        function setPwdFirst(password) {
            return publicHttp.dealPublicRequest(o.setPwdApi, 'POST', {
                password: password
            });
        }

        /**
         * @name setPwd
         * @desc 个人中心 设置密码
         */
        function setPwd(oldPwd, newPwd) {
            return publicHttp.dealPublicRequest(o.setPwdApi, 'PUT', {
                old_passwd: oldPwd,
                new_passwd: newPwd,
                confirm_passwd: newPwd
            });
        }

        /**
         * @name setPhone
         * @desc setting 修改手机号码
         */
        function setPhone(phone, captcha) {
            return publicHttp.dealPublicRequest(o.setPhoneApi, 'PUT', {
                phone: phone,
                code: captcha
            });
        }

        /**
         * Account Service 退出
         *
         * @method logout
         */
        function logout() {
            return publicHttp.dealPublicRequest(o.logoutApi, 'POST');
        }

        /**
         * @name getVerifyStatus
         * @desc 获取实名认证状态
         */
        function getVerifyStatus() {
            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'GET');
        }

        /**
         * @name getKyc
         * @desc 获取KYC认证列表
         */
        function getKyc() {
            return publicHttp.dealPublicRequest(o.getKycApi, 'GET');
        }

        // 获取认证状态
        function getAuthStatus(params) {
            return publicHttp.dealPublicRequest(o.getAuthStatus, 'GET', params)
        }

        /**
         * @name setKyc
         * @desc 设置KYC认证列表
         */
        function setKyc(json) {
            return publicHttp.dealPublicRequest(o.setKycApi, 'POST', json);
        }

        /**
         * Account Service 发送邮箱验证码
         *
         * @method sendEmailCode
         *
         * @param {String} email 不传则向绑定邮箱发送
         */
        function sendEmailCode(email) {
            return publicHttp.dealPublicRequest(o.sendEmailCodeApi, 'POST', {
                email: email
            });
        }

        /**
         * Account Service 检测邮箱验证码是否正确
         *
         * @method checkEmailCode
         *
         * @param {String} email 不传则向绑定邮箱发送
         * @param {String} code 验证码
         */
        function checkEmailCode(code) {
            return publicHttp.dealPublicRequest(o.checkEmailCodeApi, 'POST', {
                code: code
            });
        }

        /**
         * Account Service 修改绑定邮箱
         *
         * @method setBindEmail
         *
         * @param {String} email 邮箱
         * @param {String} code 验证码
         */
        function setBindEmail(email, code) {
            return publicHttp.dealPublicRequest(o.setBindEmailApi, 'PUT', {
                email: email,
                code: code
            });
        }

        /**
         * Account Service 获取点差信息
         *
         * @method getSpreadInfo
         *
         */
        function getSpreadInfo() {
            return publicHttp.dealPublicRequest(o.getSpreadInfoApi, 'GET');
        }

        /**
         * Account Service 获取用户当前MT4组
         *
         * @method getUserGroup
         *
         */
        function getUserGroup() {
            return publicHttp.dealPublicRequest(o.getUserGroupApi, 'GET');
        }

        /**
         * Account Service 获取首页轮播图信息
         *
         * @method getAdvertiseRecords
         *      @params identifier    wheel 首页轮播图，popup 首页弹窗
         *
         */
        function getAdvertiseRecords (identifier) {
            return publicHttp.dealPublicRequest(o.getAdvertiseRecords, 'GET', {
                identifier: identifier
            });
        }

        function updataId(params){
            return publicHttp.dealPublicRequest(o.updataId, 'PUT', params);
        }

        function setUsername(params){
            return publicHttp.dealPublicRequest(o.setUsername, 'PUT', params);
        }
    }
})();