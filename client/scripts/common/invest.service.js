;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invest', invest);

    invest.$inject = ['$http', 'api', 'publicHttp'];

    function invest($http, api, publicHttp) {
        var o = api.invest;
        var service = {
            getInvestSummary: getInvestSummary,
            getInvestProfitLine: getInvestProfitLine,
            getInvestBarChart: getInvestBarChart,
            getInvestCurrentData: getInvestCurrentData,
            getInvestCurrentTraders: getInvestCurrentTraders,
            getInvestCurrentDetails: getInvestCurrentDetails,
            getInvestHistoryData: getInvestHistoryData,
            getInvestHistoryTraders: getInvestHistoryTraders,
            getInvestHistoryDetails: getInvestHistoryDetails,
            getWalletHistory: getWalletHistory
        };
        return service;

        /**
         * Invest Service 获取交易概况
         * 个人中心
         *
         * @method getMasterSummary
         * 
         */
        function getInvestSummary () {
            return publicHttp.dealPublicRequest(o.getInvestSummaryApi, 'GET');
        }

        /**
         * Invest Service 获取收益率变化曲线
         * 个人中心
         *
         * @method getInvestProfitLine
         * 
         */
        function getInvestProfitLine() {        
            return publicHttp.dealPublicRequest(o.getInvestProfitLineApi, 'GET');
        }

        /**
         * Invest Service 获取交易品种条形图
         * 个人中心
         *
         * @method getInvestBarChart
         * 
         */
        function getInvestBarChart() {
            // return $http.get('/data/bar_chart.json');
            return publicHttp.dealPublicRequest(o.getInvestBarChartApi, 'GET');
        }

        /*
         * Invest Service 获取自主交易持仓订单和订单概况
         * 个人中心
         *
         * @method getInvestCurrentData
         */
        function getInvestCurrentData() {
            return publicHttp.dealPublicRequest(o.getInvestCurrentDataApi, 'GET' ,{
                  page: 1,
                  pagesize: 1000
            });
        }

        /*
         * Invest Service 获取持仓 copied trader 列表
         * 个人中心
         *
         * @method getInvestCurrentTraders
         */
        function getInvestCurrentTraders() {
            return publicHttp.dealPublicRequest(o.getInvestCurrentTradersApi, 'GET');
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易持仓订单）
         * 个人中心
         *
         * @method getInvestCurrentDetails
         */
        function getInvestCurrentDetails(usercode) {
            return publicHttp.dealPublicRequest(o.getInvestCurrentDetailsApi, 'GET', {
                user_code: usercode
            });
        }

        /*
         * Invest Service 获取自主交易历史订单和订单概况
         * 需要登录，目前该接口返回全部数据不分页
         *
         * @method getHistoryData
         * @param {Number} page 当前页
         * @param {Number} pagesize 单页显示数
         */
        function getInvestHistoryData() {
            return publicHttp.dealPublicRequest(o.getInvestHistoryDataApi, 'GET', {
                offset: 0,
                limit: 1000
            });
        }

        /*
         * Invest Service 获取历史 copied traders 列表
         *
         * @method getCopiedTraders
         */
        function getInvestHistoryTraders() {
            return publicHttp.dealPublicRequest(o.getInvestHistoryTradersApi, 'GET');
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易历史订单）
         *
         * @method getHistoryDetails
         */
        function getInvestHistoryDetails(usercode, offset, limit) {
            return publicHttp.dealPublicRequest(o.getInvestHistoryDetailsApi, 'GET', {
                user_code: usercode,
                offset: offset,
                limit: limit
            });
        }

        /**
         * Asset Service 查询零钱包交易明细
         *
         * @method getWalletHistory
         *
         * @params offset   默认值0
         * @params limit    默认值10
         *
         */
        function getWalletHistory(offset, limit) {
            return publicHttp.dealPublicRequest(o.getWalletHistoryApi, 'GET', {
                offset: offset,
                limit: limit
            });
        }
       
    }
})();