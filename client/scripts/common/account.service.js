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
            loginByMt4: loginByMt4,
            checkLogined: checkLogined,
            setToken: setToken,
            updataId: updataId,
            setUsername: setUsername,
            checkExist: checkExist,
            updataUserInfo: updataUserInfo,
            register: register,
            setNewPwd: setNewPwd,
            getPersonalInfo: getPersonalInfo,
            getPersonalInfoDegree: getPersonalInfoDegree,
            getAssetInfo: getAssetInfo,
            getAccountInfo: getAccountInfo,
            getTotalDealAccount: getTotalDealAccount,
            getDealAccountList: getDealAccountList,
            setDealAccountName: setDealAccountName,
            newSubAccount: newSubAccount,
            getUnreadLength: getUnreadLength,
            getNoticeList: getNoticeList,
            getAllRead: getAllRead,
            getSettingInfo: getSettingInfo,
            getLocation: getLocation,
            getWorlds: getWorlds,
            getStates: getStates,
            getCities: getCities,
            setBasicInfo: setBasicInfo,
            setBasicInfoNameEn: setBasicInfoNameEn,
            setBasicInfoName: setBasicInfoName,
            setPwd: setPwd,
            setAvatar: setAvatar,
            setPwdFirst: setPwdFirst,
            setPhone: setPhone,
            getVerifyStatus: getVerifyStatus,
            setKyc: setKyc,
            getKyc: getKyc,
            getAgentAuthStatus: getAgentAuthStatus,
            logout: logout,
            setBindEmail: setBindEmail,
            getSpreadInfo: getSpreadInfo,
            getUserGroup: getUserGroup,
            hasChecked: false,
            getAuthStatus: getAuthStatus, //获取认证状态    
            getAdvertiseRecords: getAdvertiseRecords,
            // sendEmailCode: sendEmailCode,
            // getRCaptcha: getRCaptcha,
            sendCode: sendCode,

            checkPhoneAndCaptcha: checkPhoneAndCaptcha,
            checkEmailCode: checkEmailCode,
            checkCode: checkCode,
            checkAgent: checkAgent,
            getFunctionSwitch: getFunctionSwitch,
            getIdcard: getIdcard,
            setAgentPromotion: setAgentPromotion,
            setUploadAddressProve: setUploadAddressProve,
        };
        var resolveValue;
        return service;

        /*
         * 控制某些功能开关接口   
         */
        function getFunctionSwitch() {
            return $http.get(o.getFunctionSwitch);
        }

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
         * @param {int} action 可选值：quick_login, register, login，默认值：quick_login
         * 
         */
        function login(params) {

            return publicHttp.dealPublicRequest(o.loginApi, 'POST', angular.extend({action: 'login'},params));
        }
        // 通过MT4登录
        function loginByMt4(params) {
            return publicHttp.dealPublicRequest(o.loginByMt4Api, 'POST', params);
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
        function checkExist(key, number, user_code) {
            return publicHttp.dealPublicRequest(o.checkExistApi, 'GET', {
                key: key,
                value: number,
                user_code: user_code
            });
        }
        // 完善信息
        function updataUserInfo(params) {
            return publicHttp.dealPublicRequest(o.updataUserInfoApi, 'PUT', params)
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

            return publicHttp.dealPublicRequest(o.registerApi, 'POST', angular.extend({action: 'register'},params));
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
         * 检测验证码是否正确
         * @param {String} account 
         * @param {Number} code 
         * @param {Number} account_type 1 手机号 2 邮箱 0 自动识别
         */
        function checkCode(account, code, account_type, phone_code) {
            return publicHttp.dealPublicRequest(o.checkCodeApi, 'POST', {
                account: account,
                code: code,
                account_type : account_type || 0,
                phone_code: phone_code,
            });
        }

        /**
         * @name setNewPwd
         * @desc 通过手机号码和验证码来设置新密码，忘记密码功能的第二步
         */
        function setNewPwd(account, captcha, newPwd, phone_code) {
            return publicHttp.dealPublicRequest(o.setNewPwdApi, 'PUT', {
                account: account,
                code: captcha,
                password: newPwd,
                phone_code: phone_code,
            });
        }

        function getPersonalInfo() {

            return publicHttp.dealPublicRequest(o.getPersonalInfoApi, 'GET').then(function (data) {
                if (!data) return false;
                var personal = {};

                angular.forEach(data.data, function (value, key) {

                    if (key === 'user_code') {
                        this['usercode'] = value;
                    }
                    this[key] = value;
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
         * Account Service 获取资产信息
         * 获取单个账户信息(资产净值，信用赠金，保证金)等
         *
         * @method getAccountInfo
         */
        function getAccountInfo(mt4_id) {
            return publicHttp.dealPublicRequest(o.getAccountInfoApi, 'GET', {
                type: 0,
                mt4_id: mt4_id
            });
        }

        /**
         * Account Service 获取交易账户信息
         * 总余额、总交易手数、总收益等
         *
         * @method getTotalDealAccount
         */
        function getTotalDealAccount() {
            return publicHttp.dealPublicRequest(o.getTotalDealAccountApi, 'GET');
        }

        /**
         * Account Service 获取交易账户列表
         * 交易账户类型、交易账户名称，交易账户MT4Id、浮动收益
         * show_asset 是否显示净值、浮动收益、保证金比例字段；0:不显示，1:显示；默认值:1
         * show_master_level 是否显示高手等级数据；0:不显示，1:显示；默认值:0
         *
         * @method getDealAccountList
         */
        function getDealAccountList(show_asset, show_master_level) {
            return publicHttp.dealPublicRequest(o.getDealAccountListApi, 'GET', {
                show_asset: show_asset,
                show_master_level: show_master_level
            });
        }

        /**
         * Account Service 修改交易账户名称
         * name值
         *
         * @method setDealAccountName
         */
        function setDealAccountName(mt4_id, account_name) {
            return publicHttp.dealPublicRequest(o.setDealAccountNameApi, 'PUT', {
                mt4_id: mt4_id,
                account_name: account_name
            });
        }

        /**
         * Account Service 添加子交易账户
         * name值
         *
         * @method newSubAccount
         */
        function newSubAccount() {
            return publicHttp.dealPublicRequest(o.newSubAccountApi, 'POST')
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

        function getWorlds(lang) {
            return publicHttp.dealPublicRequest(o.getWorldsApi, 'GET', {
                lang: lang
            });
        }

        function getStates(countryCode, lang) {
            return publicHttp.dealPublicRequest(o.getStatesApi, 'GET', {
                country_code: countryCode,
                lang: lang
            });
        }

        function getCities(stateCode, lang) {
            return publicHttp.dealPublicRequest(o.getCitiesApi, 'GET', {
                parent_code: stateCode,
                lang: lang
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
         * @name setBasicInfoNameEn
         * @desc setting 模块设置基本信息英文昵称
         */
        function setBasicInfoNameEn(username) {
            return publicHttp.dealPublicRequest(o.setUserNameEnApi, 'PUT', {
                username: username,
            });
        }
        
        /**
         * @name setBasicInfoName
         * @desc setting 模块设置基本信息中文昵称
         */
        function setBasicInfoName(username) {
            return publicHttp.dealPublicRequest(o.setUserNameApi, 'PUT', {
                username: username,
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
         * Account Service 修改头像
         *
         * @param {Number} file  (base64编码)
         */
        function setAvatar(file) {
            return publicHttp.dealPublicRequest(o.uploadAvatarForm, 'POST', {
                file: file
            });
        } 

        /**
         * @name setPhone
         * @desc setting 修改手机号码
         */
        function setPhone(phone_code, phone, captcha) {
            return publicHttp.dealPublicRequest(o.setPhoneApi, 'PUT', {
                phone_code: phone_code,
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
         * @name getAgentAuthStatus
         * @desc 获取代理商认证状态
         */
        function getAgentAuthStatus() {
            return publicHttp.dealPublicRequest(o.getAgentAuthStatusApi, 'GET');
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
        function getKyc(params) {
            return publicHttp.dealPublicRequest(o.getKycApi, 'GET', params);
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
         * @name getAgentPromotion
         * @desc 代理商推广
         */
        function setAgentPromotion(ib_pid) {
            return publicHttp.dealPublicRequest(o.setAgentPromotionApi, 'POST', {
                ib_pid: ib_pid
            });
        }
        
        /**
         * 发送验证码合并接口
         * @param {String} account 手机号
         * @param {String} code_token 
         * @param {Number} type 1-注册/绑定,2-忘记密码,3-修改绑定,4-登录,5-代理商申请
         * @param {Number} account_type 1-手机号,2-邮箱 0 自动识别
         */
        function sendCode(account, code_token, type, phone_code, account_type) {
            return publicHttp.dealPublicRequest(o.sendCodeApi, 'POST', {
                account: account,
                code_token: code_token,
                type: type,
                phone_code: phone_code,
                account_type: account_type || 0
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
        function getAdvertiseRecords(identifier) {
            return publicHttp.dealPublicRequest(o.getAdvertiseRecords, 'GET', {
                identifier: identifier
            });
        }

        function updataId(params) {
            return publicHttp.dealPublicRequest(o.updataId, 'PUT', params);
        }

        function setUsername(params){
            return publicHttp.dealPublicRequest(o.setUsername, 'PUT', params);
        }
        //判断是否是代理商
        function checkAgent(){
            return publicHttp.dealPublicRequest(o.checkAgentApi, 'GET');
        }
        //真实账户请求获取身份认证信息（更新证件接口）
        function getIdcard(){
            return publicHttp.dealPublicRequest(o.getIdcardApi, 'GET');
        }
        // 上传地址证明
        function setUploadAddressProve(params) {
            return publicHttp.dealPublicRequest(o.setUploadAddressProveApi, 'post', params);
        }
    }
})();