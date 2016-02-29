;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('config', config);

    function config() {
        var service = {
            httpTimeout: 10000,
            avatarCfg: {
                path: '/avatar/',
                xs: '_28.jpg',
                sm: '_50.jpg',
                md: '_80.jpg',
                lg: '_150.jpg'
            }
        };
        return service;
    }
})();
