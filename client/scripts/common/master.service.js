;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('master', master);

    master.$inject = ['$http'];

    function master($http) {
        var service = {
            getAllMastersList: getAllMastersList
        };
        return service;

        function getAllMastersList () {
            return $http.get('/data/masters.json');
        }
    }
})();