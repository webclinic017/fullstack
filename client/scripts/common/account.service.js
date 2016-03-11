;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('account', account);

    account.$inject = ['$http'];

    function account($http) {
        var service = {
            checkLogined: checkLogined,
            getPersonalInfo: getPersonalInfo
        };
        return service;

        function checkLogined() {
            return $http.get('/api/v1/check').then(function (data) {
                if (data.is_succ) {
                    return true;
                } else {
                    return false;
                }
            });
        }

        function getPersonalInfo() {
            return $http.get('/api/v1/get_info').then(function (data) {
                var personal = {};

                angular.forEach(data, function (value, key) {

                    if (key === 'user_code') {
                        this['usercode'] = value;
                        
                    } else {
                        this[key] = value;
                    }
                }, personal);

                return personal;
            });
        }
    }
})();