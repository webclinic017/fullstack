;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('ranklist', ranklist);

    ranklist.$inject = ['$http'];

    function ranklist($http) {
        var service = {
            getMasters: getMasters,
            getCopiersList: getCopiersList
        };
        return service;

        /**
         * Ranklist Service 获取高手列表
         * 排行榜 
         *
         * @method getMasters
         * 
         */
        function getMasters() {
            // return $http.get('/data/masters.json', {
            // return $http.get('v3/master/list');
            return $http.get('master/list');
        }

        function getCopiersList (type) {
            return $http.get('/data/copiers.json');
        }
    }
})();