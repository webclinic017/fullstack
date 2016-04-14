;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('BonusCurrentController', BonusCurrentController);

    BonusCurrentController.$inject = ['$scope', 'asset'];

    function BonusCurrentController($scope, asset) {

        $scope.currentList = [];

        asset.getBonus().then(function (data) {
            $scope.bonusSummary = data;
            console.info(data);
            $scope.bonusSummary.history_bonus = (($scope.bonusSummary.all_bonus * 100 -
                    $scope.bonusSummary.month_bonus * 100) / 100).toFixed(2);
        });

        asset.getCopyMyDetail().then(function (data) {
            $scope.currentList = data.data;
            console.info(data);
        });

    }
})();
