;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('trader', trader);

    trader.$inject = ['$http', 'api', 'publicHttp', 'fun'];

    function trader($http, api, publicHttp, fun) {
        var o = api.trader;
        var service = {
            getMasterCurrent: getMasterCurrent,
            getMasterPastTrade: getMasterPastTrade,
            copy: copy,
            cancelCopy: cancelCopy,
            getAvaCopyAmount: getAvaCopyAmount,
            // getHistoricalRate: getHistoricalRate,
            // getMasterInfo: getMasterInfo,
            getMasterNewInfo: getMasterNewInfo,
            getMonthlySymbols: getMonthlySymbols,
            getMasterGrade: getMasterGrade,
            getMasterCondition: getMasterCondition,
            applyMaster: applyMaster,
            getmasterDayProfitRates: getmasterDayProfitRates,
            getMasterTradProfile: getMasterTradProfile
        };
        return service;

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
                offset: page,
                limit: pagesize,
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
        function cancelCopy(account_code, auto_delete) {
            return publicHttp.dealPublicRequest(o.cancelCopyApi, 'POST', {
                account_code: account_code,
                auto_delete: auto_delete
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
                user_code: usercode,

            });
        }

		/**
         * trader 获取历史收益率
         * @param user_code
         * @returns {*}
         */
        // function getHistoricalRate(user_code) {
        //     return publicHttp.dealPublicRequest(o.getHistoricalRateApi, 'GET', {
        //         user_code: user_code
        //     });
        // }

		/**
         * trader 获取高手的基本信息
         * @param user_code
         * @returns {*}
         */
        // function getMasterInfo(user_code) {
        //     return publicHttp.dealPublicRequest(o.getMasterInfoApi, 'GET', {
        //         user_code: user_code
        //     }).then(function (data) {
        //         //console.log(data);
        //         data.data.usercode = data.data.user_code;
        //         return data;
        //     });
        // }
		/**
         * trader 获取高手的基本信息
         * @param user_code
         * @returns {*}
         */
        function getMasterNewInfo(user_code) {
            return publicHttp.dealPublicRequest(o.getMasterNewInfoApi, 'GET', {
                user_code: user_code
            }).then(function (data) {
                //console.log(data);
                data.data.usercode = data.data.user_code;
                return data;
            });
        }
		/**
         * trader 获取高手交易信息
         * @param user_code
         * @returns {*}
         */
        function getMasterTradProfile(user_code) {
            return publicHttp.dealPublicRequest(o.getMasterTradProfileApi, 'GET', {
                user_code: user_code
            })
        }
        /**
         * trader 获取近三十天高手每日收益率列表
         * @param user_code
         * @returns {*}
         */
        function getmasterDayProfitRates(user_code) {
            return publicHttp.dealPublicRequest(o.getmasterDayProfitRatesApi, 'GET', {
                user_code: user_code,
                start_time: fun.subtr(fun.accDiv(Date.parse(new Date()), 1000), 365*24*60*60), // 取一年
                end_time: fun.accDiv(Date.parse(new Date()), 1000),
            })
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

        /**
         * trader 获取高手等级信息
         * @param user_code 
         * @param account_code  交易账户主键ID 
         *
         */
        function getMasterGrade(user_code, account_code) {
            return publicHttp.dealPublicRequest(o.getMasterGradeApi, 'GET', {
                user_code: user_code,
                account_code: account_code,
            });
        }

        /**
         * trader 高手申请条件检查
         *
         */
        function getMasterCondition(mt4_id) {
            return publicHttp.dealPublicRequest(o.getMasterConditionApi, 'GET', {
                mt4_id: mt4_id,
            });
        }

        /**
         * trader 高手申请
         *
         */
        function applyMaster(mt4_id) {
            return publicHttp.dealPublicRequest(o.applyMasterApi, 'POST', {
                mt4_id: mt4_id,
            });
        }
    }
})();