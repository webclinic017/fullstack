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

        getMastersList();

        function getMastersList (type, sort) {
            type = type ? type : '';
            $scope.$emit("showLoadingImg");
            $scope.masters.type = type;
            ranklist.getMastersList(type, sort).then(function (data) {
                // console.info(data);
                
                if (data.is_succ) {
                    $scope.$broadcast("hideLoadingImg");
                    $scope.rankList = data.data;

                    angular.forEach($scope.rankList, function (value, index) {
                        value.drawdown_abs = Math.abs(value.drawdown);
                    });
                }
            });
        }
    }
})();