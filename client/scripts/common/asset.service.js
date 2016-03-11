;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('asset', asset);

    asset.$inject = ['$http'];

    function asset($http) {
        var service = {
            getHomeHotScale: getHomeHotScale
        };
        return service;


        /**
         * Asset Service 首页进度条、热闹的投资占比
         *
         * @method getHomeHotScale
         */
        function getHomeHotScale() {
            return $http.get('/data/asset-cate.json');
        }
    }
})();