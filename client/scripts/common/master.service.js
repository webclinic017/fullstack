;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('master', master);

    master.$inject = ['$http'];

    function master($http) {
        var service = {
            getMasterInfo: getMasterInfo
        };
        return service;

        function getMasterInfo() {
        }
    }
})();