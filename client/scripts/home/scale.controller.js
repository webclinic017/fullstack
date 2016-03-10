;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeScaleController', HomeScaleController);

    HomeScaleController.$inject = ['$scope', 'asset'];

    function HomeScaleController($scope, asset) {
        $scope.hotScale = [];

        

        $scope.$watch('ngRepeatFinished', function() {
            asset.getHomeHotScale().then(function (data) {
                $scope.hotScale = data;
            });
        });
        
    }
})();