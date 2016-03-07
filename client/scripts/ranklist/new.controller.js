;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistNewController', RanklistNewController);

    RanklistNewController.$inject = ['$scope', '$state', 'ranklist'];

    function RanklistNewController($scope, $state, ranklist) {
        $scope.rankList = [];

        var param = $state.params.subpage;
        // console.info(param);
        ranklist.getMastersList(param).then(function (data) {
            // console.info(data);
            $scope.rankList = data;
        });
    }
})();