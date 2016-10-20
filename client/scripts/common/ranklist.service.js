;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('ranklist', ranklist);

    ranklist.$inject = ['$http'];

    function ranklist($http) {
        var service = {
            getMastersList: getMastersList,
            getCopiersList: getCopiersList,
            getOrderInfo: getOrderInfo
        };
        return service;

        /**
         * Ranklist Service 获取高手列表
         * 排行榜 
         *
         * @method getMastersList
         * 
         */
        function getMastersList(order, page, pagesize) {
            // return $http.get('/data/masters.json', {
            return $http.get('/action/public/v5/get_master_list', {
                params: {
                    order: order,
                    page : page,
                    pagesize: pagesize
                }
            });
        }

        /**
         * Ranklist Service 获取复制者列表
         * 排行榜 
         *
         * @method getCopiersList
         * 
         */
        function getCopiersList (type) {
            return $http.get('/data/copiers.json');
        }

        /**
         * Ranklist Service 获取预约消息
         * 排行榜 
         *
         * @method getOrderInfo
         * 
         */
        function getOrderInfo(phone, title, username, amount) {
            return $http.post('/action/public/v3/closed_fund_leads', {
                phone: phone,
                title: title,
                username: username,
                amount: amount
            });
        }
    }
})();