;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('trader', trader);

    trader.$inject = ['$http'];

    function trader($http) {
        var service = {
            getMasterDetail: getMasterDetail,
            getMasterSummary: getMasterSummary
        };
        return service;

        function getMasterDetail () {
            return $http.get('/data/master_detail.json');
        }

        function getMasterSummary () {
            return $http.get('/data/master_summary.json');
        }
    }
})();