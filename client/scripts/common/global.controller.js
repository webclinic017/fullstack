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
        $scope.userstatus = {
            logined: false
        };

        $scope.personal = {};

        account.checkLogined().then(function (data) {
            
        });
        account.getPersonalInfo().then(function (data) {
            angular.extend($scope.personal, data);
        });
    }
})();