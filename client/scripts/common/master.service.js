;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('master', master);

    master.$inject = ['$http'];

    function master($http) {
        var service = {
        };
        return service;
    }
})();