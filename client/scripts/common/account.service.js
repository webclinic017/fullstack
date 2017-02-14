;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http', '$rootScope', '$q', '$cookies', 'whiteLabel', 'api'];

    function account($http, $rootScope, $q, $cookies, whiteLabel, api) {
        var o = api.account;
        var service = {
            encrypt: encrypt,
            login: login,
            checkLogined: checkLogined,
            setToken: setToken,
            checkExist: checkExist,
            getRCaptcha: getRCaptcha,
            getRVoiceCaptcha: getRVoiceCaptcha,
            register: register,
            getCaptcha: getCaptcha,
            checkPhoneAndCaptcha: checkPhoneAndCaptcha,
            setNewPwd: setNewPwd,
            getPersonalInfo: getPersonalInfo,
            getPersonalInfoDegree: getPersonalInfoDegree,
            getAssetInfo: getAssetInfo,
            getUnreadLength: getUnreadLength,
            getNoticeCategory: getNoticeCategory,
            getNoticeList: getNoticeList,
            getOneRead: getOneRead,
            getAllRead: getAllRead,
            getSettingInfo: getSettingInfo,
            getLocation: getLocation,
            getWorlds: getWorlds,
            getStates: getStates,
            getCities: getCities,
            setBasicInfo: setBasicInfo,
            setPwd: setPwd,
            getSCaptcha: getSCaptcha,
            getSVoiceCaptcha: getSVoiceCaptcha,
            setPhone: setPhone,
            verify: verify,
            getVerifyStatus: getVerifyStatus,
            setKyc: setKyc,
            getKyc: getKyc,
            getUserKyc: getUserKyc,
            logout: logout,
            checkMaster: checkMaster,
            applyBecomeMaster: applyBecomeMaster,
            sendEmailCode: sendEmailCode,
            checkEmailCode: checkEmailCode,
            setBindEmail: setBindEmail,
            hasChecked: false
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
         */
        function login(id, password, expires) {

            if (expires) {
                expires = 1;
            } else {
                expires = 0;
            }

            return $http.post(o.loginApi, {
                account: id,
                password: password,
                // expires: expires
                remember: expires
            });
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
                    $http.get(o.checkLoginedApi).then(function (data) {
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
            return $http.post(o.setTokenApi);
        }

        /**
         * @name checkExist
         * @desc 检查号码、昵称是否已存在
         * @param {String} number 可以是手机号、电子邮箱、身份证号码
         * @param {String} username 昵称
         * @return {Object} {
         *   is_succ: true,
         *   data: true     // true 存在 false 不存在
         * }
         */
        function checkExist(number, username) {
            return $http.get(o.checkExistApi, {
                params: {
                    key: number,
                    username: username
                }
            });
        }

        /**
         * @name getRCaptcha
         * @desc 获取验证码（注册功能）
         */
        function getRCaptcha(phone, token) {
            return $http.post(o.getRCaptchaApi, {
                phone: phone,
                token: token
            });
        }

        /**
         * @name getRVoiceCaptcha
         * @desc 获取语音验证码（注册功能）
         */
        function getRVoiceCaptcha(phone) {
            return $http.post(o.getRVoiceCaptchaApi, {
                phone: phone
            });
        }

        /**
         * @name register
         * @desc 注册
         */
        function register(username, phone, captcha, email, password, lp, pid, unit, key) {

            return $http.post(o.registerApi, {
                username: username,
                phone: phone,
                verify_code: captcha,
                email: email,
                password: password,
                lp: lp,
                pid: pid,
                unit: unit,
                key: key
            });
        }

        /**
         * @name getCaptcha
         * @desc 忘记密码功能使用该接口获取验证码（python 接口）改为php接口 2016.11.01
         * @return {Object} {
         *   error_code: 1, 2, 4（您未注册）, 5（短信发送失败）, 6（手机号码不正确）
         * }
         */
        function getCaptcha(phone) {
            return $http.post(o.getCaptchaApi, {
                phone: phone,
                type: "pwd"      // 找回密码
            });
        }

        /**
         * @name checkPhoneAndCaptcha
         * @desc 检查验手机号与验证码是否匹配，忘记密码功能第一步
         * @return {Object} {
         *   is_succ: true,    // true 验证码正确 false 未发送验证码或者验证码错误
         * }
         */
        function checkPhoneAndCaptcha(phone, captcha) {
            return $http.post(o.checkPhoneAndCaptchaApi, {
                phone: phone,
                verify_code: captcha
            });
        }

        /**
         * @name setNewPwd
         * @desc 通过手机号码和验证码来设置新密码，忘记密码功能的第二步
         */
        function setNewPwd(phone, captcha, newPwd) {
            return $http.post(o.setNewPwdApi, {
                phone: phone,
                code: captcha,
                new_pwd: newPwd
            });
        }

        function getPersonalInfo() {
            return $http.get(o.getPersonalInfoApi).then(function (data) {
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
            return $http.get(o.getPersonalInfoDegreeApi);
        }

        /**
         * Account Service 获取资产信息
         * 余额、净值、浮动盈亏等
         *
         * @method getAssetInfo
         */
        function getAssetInfo() {
            return $http.post(o.getAssetInfoApi);
        }

        /**
         * Account Service 获取未读消息数量
         *
         * @method getUnreadLength
         *
         */
        function getUnreadLength() {
            return $http.get(o.getUnreadLengthApi);
        }

        /*
         * Account Service 获取消息分类
         *
         * @method getNoticeCategory
         *
         */
        function getNoticeCategory() {
            return $http.get(o.getNoticeCategoryApi);
        }

        /*
         * Account Service 获取消息通知列表
         *
         * @method getNoticeList
         *
         */
        function getNoticeList(page, pagesize) {
            return $http.get(o.getNoticeListApi, {
                params: {
                    page: page,
                    pagesize: pagesize
                }
            });
        }

        /*
         * Account Service 把单条消息标记为已读
         *
         * @method getOneRead
         *
         */
        function getOneRead(id) {
            return $http.get(o.getOneReadApi, {
                params: {
                    id: id     // 此id为获取消息通知列表中的id
                }
            });
        }

        /*
         * Account Service 把所有消息标记为已读
         *
         * @method getAllRead
         *
         */
        function getAllRead() {
            return $http.get(o.getAllReadApi);
        }

        /**
         * @name getSettingInfo
         * @desc setting 获取手机号码、邮箱等加密信息
         */
        function getSettingInfo() {
            return $http.get(o.getSettingInfoApi, {
                params: {
                    type: 'Profile'
                }
            }).then(function (data) {
                if (data.is_succ) {
                    data = data.data;
                    return angular.extend(data, {
                        username: data.username,
                        location: data.region,
                        phone: data.phone,
                        email: data.email,
                        verifiedStatus: data.profile_check || 0
                    });
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
            return $http.get(o.getLocationApi);
        }

        function getWorlds() {
            return $http.get(o.getWorldsApi);
        }

        function getStates(countryCode) {
            return $http.get(o.getStatesApi, {
                params: {
                    world_code: countryCode
                }
            });
        }

        function getCities(stateCode) {
            return $http.get(o.getCitiesApi, {
                params: {
                    parent_code: stateCode
                }
            });
        }

        /**
         * @name setBasicInfo
         * @desc setting 模块设置基本信息
         */
        function setBasicInfo(username, world, state, city, special, strategy, desc) {
            return $http.post(o.setBasicInfoApi, {
                username: username,
                world_code: world,
                state_code: state,
                city_code: city,
                special: special,
                strategy: strategy,
                desc: desc
            });
        }

        /**
         * @name setPwd
         * @desc 设置密码
         */
        function setPwd(oldPwd, newPwd) {
            return $http.post(o.setPwdApi, {
                origin_pwd: oldPwd,
                new_pwd: newPwd
            });
        }

        /**
         * @name getSCaptcha
         * @desc 获取验证码（setting 功能模块）
         */
        function getSCaptcha(phone) {
            return $http.post(o.getSCaptchaApi, {
                phone: phone
            });
        }

        /**
         * @name getSVoiceCaptcha
         * @desc 获取语音验证码（setting 功能模块）
         */
        function getSVoiceCaptcha(phone, type) {
            return $http.post(o.getSVoiceCaptchaApi, {
                phone: phone,
                type: type
            });
        }

        /**
         * @name setPhone
         * @desc setting 修改手机号码
         */
        function setPhone(phone, captcha) {
            return $http.post(o.setPhoneApi, {
                phone: phone,
                phone_code: captcha
            });
        }

        /**
         * Account Service 退出
         *
         * @method logout
         */
        function logout() {
            return $http.get(o.logoutApi);
        }

        /*
         * @name verify
         * @desc 实名认证
         */
        function verify(realname) {
            return $http.post(o.verifyApi, {
                real_name: realname
            });
        }

        /**
         * @name getVerifyStatus
         * @desc 获取实名认证状态
         */
        function getVerifyStatus() {
            return $http.get(o.getVerifyStatusApi, {
                params: {
                    type: 'Profile'
                }
            }).then(function (data) {
                
                if (data.is_succ) {
                    data = data.data;
                    
                    return {
                        status: data.profile_check || 0,
                        realname: data.realname,
                        idNumber: data.id_no
                    }
                } else {
                    return {};
                }
                
            });
        }

        /**
         * @name getKyc
         * @desc 获取KYC认证列表
         */
        function getKyc() {
            return $http.get(o.getKycApi);
        }

        /**
         * @name getUserKyc
         * @desc 获取KYC认证列表
         */
        function getUserKyc() {
            return $http.get(o.getUserKycApi);
        }

        /**
         * @name setKyc
         * @desc 设置KYC认证列表
         */
        function setKyc(json) {
            return $http.post(o.setKycApi, json);
        }

        /**
         * Account Service 是否是高手、有无复制关系、有无交易记录
         * 申请成为高手
         *
         * @method checkMaster
         */
        function checkMaster() {
            return $http.post(o.checkMasterApi);
        }

        /**
         * Account Service 申请成为高手
         * 申请成为高手
         *
         * @method applyBecomeMaster
         *
         * @param {String} trade_exp 交易经验
         * @param {String} trade_model 交易方式
         * @param {String} min_copy_asset 最低跟随资金
         * @param {String} trade_desc 交易策略描述
         * @param {file} history_file 上传文件  单独调接口
         */
        function applyBecomeMaster(trade_exp, trade_model, min_copy_asset, trade_desc, history_file) {
            return $http.post(o.applyBecomeMasterApi, {
                trade_exp: trade_exp,
                trade_model: trade_model,
                min_copy_asset: min_copy_asset,
                trade_desc: trade_desc,
                history_file: history_file
            });
        }

        /**
         * Account Service 发送邮箱验证码
         *
         * @method sendEmailCode
         *
         * @param {String} email 不传则向绑定邮箱发送
         */
        function sendEmailCode(email) {
            return $http.post(o.sendEmailCodeApi, {
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
            return $http.post(o.checkEmailCodeApi, {
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
            return $http.post(o.setBindEmailApi, {
                email: email,
                code: code
            });
        }
    }
})();