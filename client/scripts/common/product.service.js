;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('product', product);

    product.$inject = ['$http'];

    function product($http) {
        var service = {
            getHomeHotProduct: getHomeHotProduct,
            getHomeHotScale: getHomeHotScale,
            getHomeStarMaster: getHomeStarMaster,
            getHomeMasters: getHomeMasters
        };
        return service;

        /**
         * Product Service 首页热门交易产品
         *
         * @method getHomeHotProduct
         */
        function getHomeHotProduct() {
            return $http.get('/data/home-product.json');
        }


        /**
         * Product Service 首页进度条、热闹的投资占比
         *
         * @method getHomeHotScale
         */
        function getHomeHotScale() {
            return $http.get('/data/asset-cate.json');
        }

        /**
         * Product Service 首页明星高手
         *
         * @method getHomeStarMaster
         */
        function getHomeStarMaster() {
            return $http.get('/data/star-master.json');
        }

        /**
         * Product Service 首页明星高手
         *
         * @method getHomeMasters
         */
        function getHomeMasters() {
            return $http.get('/data/masters.json');
        }
    }
})();