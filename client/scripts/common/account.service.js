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
            return $http.get('account/check_logined').then(function (data) {
            });
        }

        function getPersonalInfo() {
            return $http.get('account/get_personal_info').then(function (data) {
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