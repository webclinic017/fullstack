;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('forex', forex);

    forex.$inject = ['$http', 'api'];

    function forex($http, api) {
        var o = api.forex;
        var service = {
            
        };
        return service;
       
    }
})();