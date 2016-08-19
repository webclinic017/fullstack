;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', '$document', '$state', 'ranklist'];

    function RanklistAllController($scope, $document, $state, ranklist) {
        
        $scope.search = {};
        $scope.ranklist = [];

        $scope.showSearchList = showSearchList;

        for (var i=0; i<14; i++) {
            var json = {
                usercode: 525100,
                name: "大洋彼岸的一条鱼",
                introduce: "求的吗贷",
                profit_rate: 300.58,
                dropdown_rate: 80.74,
                copiers: 245,
                last_week_copy_rate: 266,
            };
            $scope.ranklist.push(json);
        }

        function showSearchList (e, type) {
            e.stopPropagation();
            $scope.search = {};
            $scope.search[type] = true;
        }

        $document.on('click', function () {
            $scope.$apply(function () {
                $scope.search = {};
            });
        });
    }
})();