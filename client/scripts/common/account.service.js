;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http'];

    function account($http) {
        var service = {
            getPersonalInfo: getPersonalInfo
        };
        return service;

        function getPersonalInfo() {
            return $http.get('get_personal_info');
        }
    }
})();