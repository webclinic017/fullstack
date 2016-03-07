;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistCopiersController', RanklistCopiersController);

    RanklistCopiersController.$inject = ['$scope', 'ranklist'];

    function RanklistCopiersController($scope, ranklist) {
        $scope.rankList = [];

        ranklist.getCopiersList().then(function (data) {
            // console.info(data);
            $scope.rankList = data;
        });
    }
})();