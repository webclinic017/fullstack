;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('ranklist', ranklist);

    ranklist.$inject = ['$http', 'api', 'publicHttp'];

    function ranklist($http, api, publicHttp) {
        var o = api.ranklist;
        var service = {
            getMastersList: getMastersList,
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
        function getMastersList(order, offset, limit) {
            return publicHttp.dealPublicRequest(o.getMastersListApi, 'GET', {
                order_by: 'desc',
                sort_by: order,
                offset: offset,
                limit: limit
            });
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