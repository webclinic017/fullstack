;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('forex', forex);

    forex.$inject = ['$http', 'api'];

    function forex($http, api) {
        var o = api.forex;
        var service = {
            getAsset: getAsset
        };
        return service;

        /**
         * Forex Service 获取投资外汇的资产信息
         * 余额、净值、浮动盈亏等
         *
         * @method getAsset
         */
        function getAsset() {
            return $http.post(o.getAssetApi);
        }
       
    }
})();