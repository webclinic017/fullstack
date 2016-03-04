;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', 'account'];

    /**
     * @name GlobalController
     * @desc
     */ 
    function GlobalController($scope, account) {
        account.getPersonalInfo().then(function () {
        });
    }
})();