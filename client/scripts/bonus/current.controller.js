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
            // console.info(data);
        });

        asset.getCopyMyDetail().then(function (data) {
            $scope.currentList = data.data;


            angular.forEach($scope.currentList, function(data) {
                var date = new Date().getTime() / 1000;
                data.time = parseInt(date) - parseInt(data.time);
                return;
            });
        });

    }
})();
