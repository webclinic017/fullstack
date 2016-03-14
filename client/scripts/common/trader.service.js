;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('trader', trader);

    trader.$inject = ['$http'];

    function trader($http) {
        var service = {
            getMasterDetail: getMasterDetail,
            getMasterSummary: getMasterSummary,
            getMasterCurrent: getMasterCurrent,
            getMasterHistory: getMasterHistory,
            getMasterProfitLine: getMasterProfitLine,
            getMasterBarChart: getMasterBarChart
        };
        return service;

        /**
         * Trader Service 获取高手基本信息
         * 高手主页
         *
         * @method getMasterDetail
         * @param {String} usercode 
         */
        function getMasterDetail (usercode) {
            return $http.get('/data/master_detail.json', {
                params: {
                    user_code: usercode
                }
            });
        }

        /**
         * Trader Service 获取高手交易概况
         * 高手主页
         *
         * @method getMasterSummary
         * @param {String} usercode
         */
        function getMasterSummary (usercode) {
            return $http.get('/data/master_summary.json', {
                params: {
                    user_code: usercode
                }
            });
        }

        /**
         * Trader Service 获取高手持仓订单
         * 高手主页
         *
         * @method getMasterCurrent
         * @param {Number} usercode
         * @param {Number} page  当前页
         * @param {Number} pagesize  每页显示数
         */
        function getMasterCurrent(usercode, page, pagesize) {
            return $http.post('/action/public/v3/get_master_order_noauth', {
                cros_user: usercode,
                page: page,
                pagesize: pagesize
            });
        }

        /**
         * Trader Service 获取高手历史交易
         * 高手主页
         *
         * @method getMasterHistory
         * @param {Number} usercode
         * @param {Number} page         当前页
         * @param {Number} pagesize     每页显示数
         */
        function getMasterHistory (usercode, page, pagesize) {
            return $http.post('/action/public/v3/get_history_noauth', {
                cros_user: usercode,
                page: page,
                pagesize: pagesize
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
            return $http.get('/api/v3/get_assets_noauth', {
                params: {
                    cros_user: usercode,
                    tiger_source: 'real'
                }
            });
        }

        /**
         * Trader Service 获取高手交易品种条形图
         * 高手主页
         *
         * @method getMasterBarChart
         * @param {String} usercode 曲线所属用户的 user code
         */
        function getMasterBarChart(usercode) {
            return $http.get('/data/bar_chart.json', {
                params: {
                    user_code: usercode
                }
            });
        }
    }
})();