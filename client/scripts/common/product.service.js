;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('product', product);

    product.$inject = ['$http'];

    function product($http) {
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

            return $http.post('/blog/api/get_category_posts?id=86');

        }

        /**
         * Product Service 交易品种下的市场分析
         *
         * @method getProductMarket
         */
        function getProductMarket() {

            return $http.post('/blog/api/get_category_posts?id=90');

        }

    }
})();
