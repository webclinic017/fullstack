;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', '$state', 'ranklist'];

    function RanklistAllController($scope, $state, ranklist) {
        $scope.rankList = [];

        // var param = $state.params.subpage;

        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.rankList = data.data;
        });
    }
})();