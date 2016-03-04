;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', 'master'];

    function RanklistAllController($scope, master) {
        $scope.rankList = [];

        master.getAllMastersList().then(function (data) {
            console.info(data);
            $scope.rankList = data;
        });
    }
})();