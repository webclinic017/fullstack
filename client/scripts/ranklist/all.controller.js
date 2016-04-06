;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', '$state', 'ranklist'];

    function RanklistAllController($scope, $state, ranklist) {
        $scope.rankList = [];
        $scope.masters = {
            type: 'all'
        };
        $scope.getMastersList = getMastersList;

        getMastersList('all');

        function getMastersList (type) {
            $scope.$emit("showLoadingImg");

            ranklist.getMastersList(type).then(function (data) {
                // console.info(data);
                $scope.masters.type = type;
                $scope.$broadcast("hideLoadingImg");
                $scope.rankList = data.data;
            });
        }
    }
})();