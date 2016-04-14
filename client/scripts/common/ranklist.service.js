;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('ranklist', ranklist);

    ranklist.$inject = ['$http'];

    function ranklist($http) {
        var service = {
            getMastersList: getMastersList,
            getCopiersList: getCopiersList
        };
        return service;

        /**
         * Ranklist Service 获取高手列表
         * 排行榜 
         *
         * @method getMastersList
         * 
         */
        function getMastersList(type) {
            // return $http.get('/data/masters.json', {
            return $http.get('/action/public/v4/get_master_list', {
                params: {
                    order: type
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
    }
})();