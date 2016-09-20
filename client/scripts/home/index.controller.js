;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product','ranklist'];

    function HomeIndexController($scope, product, ranklist) {

        $scope.indexMasters = [];// 首页 第二模块的高手
        $scope.addUmeng = addUmeng; // 增加友盟统计

        // 此为index2 首页的高手信息
        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.indexMasters = data.data.slice(0, 3);
        });

        function addUmeng (label) {
            alert(label);
            console.info(123);
        }
        $scope.testStr = "teeee";
        $scope.test = function () {
            alert(113);
        };
    }
})();
