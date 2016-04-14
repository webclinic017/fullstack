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
            getHomeMasters: getHomeMasters,
            getProductComment: getProductComment,
            getIndexMasters: getIndexMasters
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

        /**
         * Product Service 交易品种下的每日汇评
         *
         * @method getProductComment
         */
        function getProductComment(page, pagesize) {
            // return $http.get('/data/product-comment.json', {
            //     params: {
            //         page: page,
            //         pagesize: pagesize
            //     }
            // });

            return $http.get('https://www.tigerwit.com/blog/archives/category/market_comment/lipeng?json=1', {
                params: {
                    page: page,
                    pagesize: pagesize
                }
            });

        }

        /**
         * Product Service 首页第二块高手
         *
         * @method getIndexMasters
         */
        function getIndexMasters() {
            return $http.get('/data/index2-master.json');
        }

    }
})();
