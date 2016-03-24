;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http'];

    function account($http) {
        var service = {
            checkLogined: checkLogined,
            getPersonalInfo: getPersonalInfo,
            getVerifyStatus: getVerifyStatus,
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
            setPhone: setPhone
        };
        return service;

        function checkLogined() {
            return $http.get('/api/v1/check').then(function (data) {
                if (data.is_succ) {
                    return true;
                } else {
                    return false;
                }
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
         * Account Service setting 获取实名认证状态
         *
         * @method getVerifyStatus
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
        function setPhone(phone, verifyCode) {
            return $http.post('/action/public/v3/set_my_bind_phone', {
                phone: phone,
                phone_code: verifyCode
            });
        }
    }
})();