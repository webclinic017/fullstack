;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('ranklist', ranklist);

    ranklist.$inject = ['$http', 'api'];

    function ranklist($http, api) {
        var o = api.ranklist;
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
            return $http.get(o.getMastersListApi, {
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
            return $http.get(o.getCopiersListApi);
        }

        /**
         * Ranklist Service 获取预约消息
         * 排行榜 
         *
         * @method getOrderInfo
         * 
         */
        function getOrderInfo(phone, title, username, amount) {
            return $http.post(o.getOrderInfoApi, {
                phone: phone,
                title: title,
                username: username,
                amount: amount
            });
        }
    }
})();