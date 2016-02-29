;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$scope', 'account'];

    /**
     * @name SpaceInfoController
     * @desc
     */ 
    function SpaceInfoController($scope, account) {
        account.getPersonalInfo().then(function () {
        });
    }
})();