;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('trader', trader);

    trader.$inject = ['$http'];

    function trader($http) {
        var service = {
            getMasterDetail: getMasterDetail,
            getMasterSummary: getMasterSummary,
            getMasterProfitLine: getMasterProfitLine
        };
        return service;

        function getMasterDetail (usercode) {
            return $http.get('/data/master_detail.json', {
                params: {
                    user_code: usercode
                }
            });
        }

        function getMasterSummary (usercode) {
            return $http.get('/data/master_summary.json', {
                params: {
                    user_code: usercode
                }
            });
        }

        /**
         * Trader Service 获取高手收益率变化曲线
         * 高手主页
         *
         * @method getMasterProfitLine
         * @param {String} usercode 曲线所属用户的 user code
         */
        function getMasterProfitLine(usercode) {
            return $http.get('v3/get_assets_noauth', {
                params: {
                    cros_user: usercode,
                    tiger_source: 'real'
                }
            });
        }
    }
})();