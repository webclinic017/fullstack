;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http'];

    function account($http) {
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
            getAssetInfo: getAssetInfo,
            getUnreadLength: getUnreadLength,
            getNoticeCategory: getNoticeCategory,
            getNoticeList: getNoticeList,
            getOneRead: getOneRead,
            getAllRead: getAllRead,
            getSettingInfo: getSettingInfo,
            getLocation: getLocation,
            getStates: getStates,
            getCities: getCities,
            getTradeInfo: getTradeInfo,
            setBasicInfo: setBasicInfo,
            setPwd: setPwd,
            getSCaptcha: getSCaptcha,
            getSVoiceCaptcha: getSVoiceCaptcha,
            setPhone: setPhone,
            verify: verify,
            getVerifyStatus: getVerifyStatus,
            setKyc: setKyc,
            getKyc: getKyc,
            logout: logout,
            checkMaster: checkMaster,
            applyBecomeMaster: applyBecomeMaster
        };
        return service;

        /**
         * @name encrypt
         * @desc 密码加密
         */
        function encrypt(text) {
            return $http.get('/files/pub_v1.json').then(function (data) {
                var crypt = new JSEncrypt();
                var key = data;
                crypt.setKey(key);
                var textEnc = crypt.encrypt(text);
                return textEnc;
            });
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

            return $http.post('/action/public/v3/login', {
                account: id,
                password: password,
                expires: expires
            });
        }

        function checkLogined() {
            return $http.get('/api/v1/check').then(function (data) {
                if (data.is_succ) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        /**
         * @name setToken
         * @desc 进入注册页面设置 token 在获取手机验证码时回传
         */
        function setToken() {
            return $http.post('/action/public/v3/set_token');
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
            return $http.get('/api/v1/exists', {
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
            return $http.post('/action/public/v3/get_phone_reg_code', {
                phone: phone,
                token: token
            });
        }

        /**
         * @name getRVoiceCaptcha
         * @desc 获取语音验证码（注册功能）
         */
        function getRVoiceCaptcha(phone) {
            return $http.post('/action/public/v3/get_tigerwit_phone_sound_code', {
                phone: phone
            });
        }

        /**
         * @name register
         * @desc 注册
         */  
        function register(username, phone, captcha, email, password) {
            
            return $http.post('/action/public/v3/register', {
                username: username,
                phone: phone,
                verify_code: captcha,
                email: email,
                password: password
            });
        }

        /**
         * @name getCaptcha 
         * @desc 忘记密码功能使用该接口获取验证码（python 接口）
         * @return {Object} {
         *   error_code: 1, 2, 4（您未注册）, 5（短信发送失败）, 6（手机号码不正确）
         * }
         */
        function getCaptcha(phone) {
            return $http.get('/api/v1/verify', {
                params: {
                    phone: phone,
                    exists: true      // 给存在的手机发送验证码
                }
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
            return $http.post('/api/v1/verifycode', {
                phone: phone,
                verify_code: captcha
            });
        }

        /**
         * @name setNewPwd
         * @desc 通过手机号码和验证码来设置新密码，忘记密码功能的第二步
         */
        function setNewPwd(phone, captcha, newPwd) {
            return $http.post('/api/v1/change_password', {
                phone: phone,
                code: captcha,
                new_pwd: newPwd
            });
        }

        function getPersonalInfo() {
            return $http.get('/api/v1/get_info').then(function (data) {
                var personal = {};

                angular.forEach(data, function (value, key) {

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
         * Account Service 获取资产信息
         * 余额、净值、浮动盈亏等
         *
         * @method getAssetInfo
         */
        function getAssetInfo() {
            return $http.post('/action/public/v3/get_usercenter_asset');
        }
        /**
         * Account Service 获取未读消息数量
         *
         * @method getUnreadLength
         *
         */
        function getUnreadLength() {
            return  $http.get('/action/public/v3/get_notify_num');
        }

        /*
         * Account Service 获取消息分类
         *
         * @method getNoticeCategory
         *
         */
        function getNoticeCategory() {
            return $http.get('/action/public/v3/get_notify_cate');
        }

        /*
         * Account Service 获取消息通知列表
         *
         * @method getNoticeList
         *
         */
        function getNoticeList(page, pagesize) {
            return $http.get('/action/public/v3/get_notify_list', {
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
            return $http.get('/action/public/v3/notify_mark_read', {
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
            return $http.get('/action/public/v3/notify_mark_all_read');
        }

        /** 
         * @name getSettingInfo
         * @desc setting 获取手机号码、邮箱等加密信息
         */
        function getSettingInfo() {
            return $http.get('/api/v1/get_info', {
                params: {
                    type: 'Profile'
                }
            }).then(function (data) {
                if (data.is_succ) {
                    return {
                        username: data.username,
                        location: data.region,
                        phone: data.phone,
                        email: data.email,
                        verifiedStatus: data.profile_check || 0
                    }
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
            return $http.get('/api/v1/basic_settings');
        }

        function getStates(countryCode) {
            return $http.get('/api/v1/statecode_list', {
                params: {
                    world_code: countryCode
                }
            });
        }

        function getCities(stateCode) {
            return $http.get('/api/v1/citycode_list', {
                params: {
                    parent_code: stateCode
                }
            });
        }

        /**
         * @name getTradeInfo
         * @desc 获取交易特色、交易策略信息
         * @param {String} usercode 高手的 usercode
         */
        function getTradeInfo(usercode) {
            return $http.get('/api/v3/get_master_info', {
                params: {
                    cros_user: usercode
                }
            });
        }

        /**
         * @name setBasicInfo
         * @desc setting 模块设置基本信息
         */
        function setBasicInfo() {
            return $http.post('/xxx', {
            });
        }

        /**
         * @name setPwd
         * @desc 设置密码
         */
        function setPwd(oldPwd, newPwd) {
            return $http.post('/api/v1/change_password', {
                password: oldPwd,
                new_pwd: newPwd
            });
        }

        /**
         * @name getSCaptcha
         * @desc 获取验证码（setting 功能模块）
         */
        function getSCaptcha(phone) {
            return $http.post('/action/public/v3/get_phone_code', {
                phone: phone
            });
        }

        /**
         * @name getSVoiceCaptcha
         * @desc 获取语音验证码（setting 功能模块）
         */
        function getSVoiceCaptcha(phone, type) {
            return $http.post('/action/public/v3/get_phone_sound_code', {
                phone: phone,
                type: type
            });
        }

        /**
         * @name setPhone
         * @desc setting 修改手机号码
         */
        function setPhone(phone, captcha) {
            return $http.post('/action/public/v3/set_my_bind_phone', {
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
            return $http.get('/action/public/v3/logout');
        }
        /*
         * @name verify
         * @desc 实名认证
         */
        function verify(realname) {
            return $http.post('/api/v3/set_info', {
                real_name: realname
            });
        }

        /**
         * @name getVerifyStatus
         * @desc 获取实名认证状态
         */
        function getVerifyStatus() {
            return $http.get('/api/v1/get_info', {
                params: {
                    type: 'Profile'
                }
            }).then(function (data) {
                return {
                    status: data.profile_check || 0,
                    realname: data.realname,
                    idNumber: data.id_no
                }
            });
        }

        function getKyc() {

        }

        function setKyc() {
            
        }

        /**
         * Account Service 是否是高手、有无复制关系、有无交易记录
         * 申请成为高手
         *
         * @method checkMaster
         */
        function checkMaster () {
            return $http.post('/action/public/v3/check_master');
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
        function applyBecomeMaster (trade_exp, trade_model, min_copy_asset, trade_desc, history_file) {
            return $http.post('/action/public/v3/apply_to_master', {
                trade_exp: trade_exp,
                trade_model: trade_model,
                min_copy_asset: min_copy_asset,
                trade_desc: trade_desc,
                history_file: history_file
            });
        }
    }
})();