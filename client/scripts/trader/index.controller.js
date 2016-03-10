;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderIndexController', TraderIndexController);

    TraderIndexController.$inject = ['$scope', 'trader'];

    function TraderIndexController($scope, trader) {
        $scope.master = {};

        trader.getMasterDetail().then(function (data) {
            $scope.master = data;
        });
    }
})();