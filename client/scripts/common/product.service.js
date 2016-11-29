;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('product', product);

    product.$inject = ['$http', 'api'];

    function product($http, api) {
        var o = api.product;
        var service = {
            getProductComment: getProductComment,
            getProductMarket: getProductMarket
        };
        return service;


        /**
         * Product Service 交易品种下的每日汇评
         *
         * @method getProductComment
         */
        function getProductComment() {

            return $http.post(o.getProductCommentApi);

        }

        /**
         * Product Service 交易品种下的市场分析
         *
         * @method getProductMarket
         */
        function getProductMarket() {

            return $http.post(o.getProductMarketApi);

        }

    }
})();
