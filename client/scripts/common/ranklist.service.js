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

        function getMastersList (type) {
            return $http.get('/data/masters.json', {
                params: {
                    type: type
                }
            });
        }

        function getCopiersList (type) {
            return $http.get('/data/copiers.json');
        }
    }
})();