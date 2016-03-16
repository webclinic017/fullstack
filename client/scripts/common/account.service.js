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
            getAssetInfo: getAssetInfo
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
    }
})();