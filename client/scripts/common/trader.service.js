;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('trader', trader);

    trader.$inject = ['$http', 'api', 'publicHttp'];

    function trader($http, api, publicHttp) {
        var o = api.trader;
        var service = {
            getMasterSummary: getMasterSummary,
            getMasterCurrent: getMasterCurrent,
            getMasterHistory: getMasterHistory,
            getMasterPastTrade: getMasterPastTrade,
            getMasterProfitLine: getMasterProfitLine,
            getMasterBarChart: getMasterBarChart,
            copy: copy,
            cancelCopy: cancelCopy,
            getAvaCopyAmount: getAvaCopyAmount,
            getCopyRelation: getCopyRelation,
            getHistoricalRate: getHistoricalRate,
            getCoopierChange: getCoopierChange,
            getMasterInfo: getMasterInfo,
            getMonthlySymbols: getMonthlySymbols
            // follow: follow,
            // getFollowRelation: getFollowRelation
        };
        return service;

        // return publicHttp.dealPublicRequest(o.getMastersListApi, 'GET', {
        //         sort_by: order,
        //         offset: offset,
        //         limit: limit
        //     });

        /**
         * Trader Service 获取高手交易概况
         * 高手主页
         *
         * @method getMasterSummary
         * @param {String} usercode
         */
        function getMasterSummary(usercode) {
            return $http.get(o.getMasterSummaryApi, {
                params: {
                    usercode: usercode
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
        function getMasterCurrent(usercode, page, pagesize, type) {
            return publicHttp.dealPublicRequest(o.getMasterCurrentApi, 'GET', {
                user_code: usercode,
                page: page,
                pagesize: pagesize,
                type: type
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
        function getMasterHistory(usercode, page, pagesize, type) {
            return $http.post(o.getMasterHistoryApi, {
                cros_user: usercode,
                page: page,
                pagesize: pagesize,
                type: type
            });
        }

        function getMasterPastTrade(usercode, page, pagesize, type) {
            return publicHttp.dealPublicRequest(o.getMasterPastTradeApi, 'GET', {
                user_code: usercode,
                offset: page,
                limit: pagesize
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
            return $http.get(o.getMasterProfitLineApi, {
                params: {
                    usercode: usercode
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
            return $http.post(o.getMasterBarChartApi, {
                cros_user: usercode
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
            return publicHttp.dealPublicRequest(o.copyApi, 'POST', {
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
        function cancelCopy(usercode, auto_delete) {
            return publicHttp.dealPublicRequest(o.cancelCopyApi, 'POST', {
                user_code: usercode,
                auto_delete: auto_delete,
                to: 'real'
            });
        }

        /**
         * Trader Service 获取可用复制金额
         * 高手主页
         *
         * @method getAvaCopyAmount
         * @param usercode 复制的高手的 usercode
         */
        function getAvaCopyAmount(usercode) {
            return publicHttp.dealPublicRequest(o.getAvaCopyAmountApi, 'GET', {
                user_code: usercode
            });
        }

        /**
         * Trader Service 获取与高手的复制关系的相关信息
         * 高手主页
         *
         * @method getCopyRelation
         * @param {String} usercode 复制的高手的 usercode
         */
        function getCopyRelation(usercode) {
            return $http.get(o.getCopyRelationApi, {
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
        // function follow(usercode, action) {
        //     return $http.get('/data/follow.json', {
        //         params: {
        //             usercode: usercode,
        //             action: action
        //         }
        //     });
        // }

        /**
         * Trader Service 获取与高手的关注关系
         * 高手主页
         *
         * @method getFollowRelation
         * @param {String} usercode 关注的高手的 usercode
         */
        // function getFollowRelation(usercode) {
        //     return $http.get('/data/follow_relation.json', {
        //         params: {
        //             usercode: usercode
        //         }
        //     });
        // }

		/**
         * trader 获取历史收益率
         * @param user_code
         * @returns {*}
         */
        function getHistoricalRate(user_code) {
            return publicHttp.dealPublicRequest(o.getHistoricalRateApi, 'GET', {
                user_code: user_code
            });
        }

		/**
		 * trader 获取高手变化图表
         * @param user_code
         * @returns {*}
         */
        function getCoopierChange(user_code) {
            return $http.get(o.getCoopierChangeApi, {
                params: {
                    user_code: user_code
                }
            });
        }

		/**
         * trader 获取高手的基本信息
         * @param user_code
         * @returns {*}
         */
        function getMasterInfo(user_code) {
            return publicHttp.dealPublicRequest(o.getMasterInfoApi, 'GET', {
                user_code: user_code
            }).then(function (data) {
                //console.log(data);
                data.data.usercode = data.data.user_code;
                return data;
            });
        }

		/**
         * trader 获取月交易品种
         * @param user_code MT4_ID
         * @param date 2016-9
         * @returns {*}
         */
        function getMonthlySymbols(user_code, date) {
            return publicHttp.dealPublicRequest(o.getMonthlySymbolsApi, 'GET', {
                user_code: user_code,
                date: date
            });
        }
    }
})();