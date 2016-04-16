;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product','ranklist'];

    function HomeIndexController($scope, product, ranklist) {

        $scope.hotScale = [];   // 首页 投资者占比
        $scope.hotProduct =[];  // 首页 热门的投资产品类型
        $scope.starMaster =[];  // 首页 明星高手
        $scope.homeMasters = [];// 首页 推荐的高手


        $scope.indexMasters = [];// 首页 第二模块的高手


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

        // 此为index2 首页的高手信息
        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.indexMasters = data.data.slice(0, 3);
        });

        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.homeMasters = data.data.slice(0, 3);
        });
    }
})();
