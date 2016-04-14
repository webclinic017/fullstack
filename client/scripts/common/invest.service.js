;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('invest', invest);

    invest.$inject = ['$http'];

    function invest($http) {
        var service = {
            getInvestSummary: getInvestSummary,
            getInvestProfitLine: getInvestProfitLine,
            getInvestBarChart: getInvestBarChart,
            getInvestCurrentData: getInvestCurrentData,
            getInvestCurrentTraders: getInvestCurrentTraders,
            getInvestCurrentDetails: getInvestCurrentDetails,
            getInvestHistoryData: getInvestHistoryData,
            getInvestHistoryTraders: getInvestHistoryTraders,
            getInvestHistoryDetails: getInvestHistoryDetails
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
            return $http.get('/action/public/v4/get_user_data');
        }

        /**
         * Invest Service 获取收益率变化曲线
         * 个人中心
         *
         * @method getInvestProfitLine
         * 
         */
        function getInvestProfitLine() {        
            return $http.get('/action/public/v4/get_user_line_chart');
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
            return $http.get('/action/public/v4/get_user_symbol');
        }

        /*
         * Invest Service 获取自主交易持仓订单和订单概况
         * 个人中心
         *
         * @method getInvestCurrentData
         */
        function getInvestCurrentData() {
            return $http.post('/action/public/v4/get_usercenter_my_order_auth_list', {
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
            return $http.post('/action/public/v4/get_usercenter_order_auth_group');
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易持仓订单）
         * 个人中心
         *
         * @method getInvestCurrentDetails
         */
        function getInvestCurrentDetails(usercode) {
            return $http.post('/action/public/v3/get_usercenter_order_auth_group_list', {
                  user_code: usercode,
                  page: 1,
                  pagesize: 1000
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
            return $http.post('/action/public/v3/get_usercenter_my_history_auth_list', {
                page: 1,
                pagesize: 1000
            });
        }

        /*
         * Invest Service 获取历史 copied traders 列表
         *
         * @method getCopiedTraders
         */
        function getInvestHistoryTraders() {
            return $http.get('/action/public/v4/get_usercenter_history_auth_group');
        }

        /*
         * Invest Service 获取 copied traders 列表详情（复制交易历史订单）
         *
         * @method getHistoryDetails
         */
        function getInvestHistoryDetails(usercode) {
            return $http.post('/action/public/v3/get_usercenter_history_auth_group_list', {
                user_code: usercode,
                page: 1,
                pagesize: 1000
            });
        }
       
    }
})();