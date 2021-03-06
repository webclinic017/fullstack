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
            getWalletHistory: getWalletHistory,
            checkStockTrading: checkStockTrading,
            invalidStockTrade: invalidStockTrade
        };
        return service;

        /**
         * Invest Service 获取交易概况
         * 个人中心
         *
         * @method getMasterSummary
         * 
         */
        function getInvestSummary (mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestSummaryApi, 'GET', {
                mt4_id: mt4_id,
            });
        }

        /**
         * Invest Service 获取收益率变化曲线
         * 个人中心
         *
         * @method getInvestProfitLine
         * 
         */
        function getInvestProfitLine(mt4_id) {        
            return publicHttp.dealPublicRequest(o.getInvestProfitLineApi, 'GET', {
                mt4_id: mt4_id,
            });
        }

        /**
         * Invest Service 获取交易品种条形图
         * 个人中心
         *
         * @method getInvestBarChart
         * 
         */
        function getInvestBarChart(mt4_id) {
            // return $http.get('/data/bar_chart.json');
            return publicHttp.dealPublicRequest(o.getInvestBarChartApi, 'GET', {
                mt4_id: mt4_id,
            });
        }

        /*
         * Invest Service 获取自主交易持仓订单和订单概况
         * 个人中心
         *
         * @method getInvestCurrentData
         */
        function getInvestCurrentData(mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestCurrentDataApi, 'GET' ,{
                mt4_id: mt4_id,
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
        function getInvestCurrentTraders(mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestCurrentTradersApi, 'GET', {
                include_uncopy: 1,
                mt4_id: mt4_id
            });
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易持仓订单）
         * 个人中心
         *
         * @method getInvestCurrentDetails
         */
        function getInvestCurrentDetails(account_code, mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestCurrentDetailsApi, 'GET', {
                account_code: account_code,
                mt4_id: mt4_id,
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
        function getInvestHistoryData(mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestHistoryDataApi, 'GET', {
                mt4_id: mt4_id,
                offset: 0,
                limit: 1000
            });
        }

        /*
         * Invest Service 获取历史 copied traders 列表
         *
         * @method getCopiedTraders
         */
        function getInvestHistoryTraders(mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestHistoryTradersApi, 'GET', {
                mt4_id: mt4_id
            });
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易历史订单）
         *
         * @method getHistoryDetails
         */
        function getInvestHistoryDetails(account_code, offset, limit, mt4_id) {
            return publicHttp.dealPublicRequest(o.getInvestHistoryDetailsApi, 'GET', {
                mt4_id: mt4_id,
                account_code: account_code,
                offset: offset,
                limit: limit
            });
        }

        /**
         * Asset Service 查询钱包交易明细
         *
         * @method getWalletHistory
         *
         * @params offset   默认值0
         * @params limit    默认值10
         *
         */
        function getWalletHistory(offset, limit, direction) {
            return publicHttp.dealPublicRequest(o.getWalletHistoryApi, 'GET', {
                offset: offset,
                limit: limit,
                direction: direction,
            });
        }

        //检测交易订单是否需要拆合股提示
        function checkStockTrading (mt4_id) {
            return publicHttp.dealPublicRequest(o.checkStockTradingApi, 'GET', {
                mt4_id: mt4_id
            });
        }

        //持仓订单点击待处理查看不符合拆合股的详细提示
        // mt4_id	int	yes	mt4_id
        // ticket	int	yes	订单号
        function invalidStockTrade (mt4_id, ticket) {
            return publicHttp.dealPublicRequest(o.invalidStockTradeApi, 'GET', {
                mt4_id: mt4_id,
                ticket: ticket
            });
        }
       
    }
})();