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
            getMasterBarChart: getMasterBarChart,
            copy: copy,
            cancelCopy: cancelCopy,
            getAvaCopyAmount: getAvaCopyAmount,
            getCopyRelation: getCopyRelation,
            follow: follow,
            getFollowRelation: getFollowRelation
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

        /**
         * Trader Service copy 某人
         * 高手主页
         *
         * @method copy
         * @param {String} usercode 复制高手的 usercode
         * @param {Number} amount 复制金额
         */
        function copy(usercode, amount) {
            return $http.post('/api/v1/copy', {
                user_code: usercode,
                amount: amount
            });
        }

        /**
         * Trader Service 取消 copy 某人
         * 高手主页
         *
         * @method cancelCopy
         * @param {String} usercode 复制高手的 user code
         * @param {Boolean} isClose 是否平仓
         * @param {String} copyType 模拟复制或者真实复制
         */
        function cancelCopy(usercode) {
            return $http.post('/api/v1/uncopy', {
                user_code: usercode,
                auto_delete: true,
                to: 'real'
            });
        }

        /**
         * Trader Service 获取可用复制金额
         * 高手主页
         *
         * @method getAvaCopyAmount
         */
        function getAvaCopyAmount() {
            return $http.get('/api/v1/copy_available_balance');
        }

        /**
         * Trader Service 获取与高手的复制关系的相关信息
         * 高手主页
         *
         * @method getCopyRelation
         * @param {String} usercode 复制的高手的 usercode
         */
        function getCopyRelation(usercode) {
            return $http.get('/api/v3/get_user_relationship', {
                params: {
                    cros_user: usercode
                }
            });
        }

        /**
         * Trader Service 关注 & 取消关注
         * 高手主页
         *
         * @method follow
         * @param {String} usercode 关注的高手的 usercode
         * @param {Number} action 0 取消关注 1 关注
         */
        function follow(usercode, action) {
            return $http.get('/data/follow.json', {
                params: {
                    usercode: usercode,
                    action: action
                }
            });
        }

        /**
         * Trader Service 获取与高手的关注关系
         * 高手主页
         *
         * @method getFollowRelation
         * @param {String} usercode 关注的高手的 usercode
         */
        function getFollowRelation(usercode) {
            return $http.get('/data/follow_relation.json', {
                params: {
                    usercode: usercode
                }
            });
        }
    }
})();