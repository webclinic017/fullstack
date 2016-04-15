;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusCurrentController', BonusCurrentController);

    BonusCurrentController.$inject = ['$scope', 'asset'];

    function BonusCurrentController($scope, asset) {

        $scope.bonusSummary2 = [];
        $scope.currentList = [];

        asset.getBonus().then(function (data) {
            $scope.bonusSummary2 = data.data;
            console.info(data);
        });

        asset.getCopyMyDetail().then(function (data) {
            $scope.currentList = data.data;
            // console.info(data);
        });

    }
})();
