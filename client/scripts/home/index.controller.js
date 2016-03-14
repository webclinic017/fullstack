;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product'];

    function HomeIndexController($scope, product) {
        
        $scope.hotScale = [];   // 首页 投资者占比
        $scope.hotProduct =[];  // 首页 热门的投资产品类型
        $scope.starMaster =[];  // 首页 明星高手

        

        $scope.$watch('ngRepeatFinished', function() {
            product.getHomeHotScale().then(function (data) {
                $scope.hotScale = data;
            });
        });

        product.getHomeHotProduct().then(function (data) {
            $scope.hotProduct = data;
            // console.info(data);
        });

        product.getHomeStarMaster().then(function (data) {
            $scope.starMaster = data;
            // console.info(data);
        });
    }
})();