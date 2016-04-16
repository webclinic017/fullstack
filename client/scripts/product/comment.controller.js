;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ProductCommentController', ProductCommentController);

    ProductCommentController.$inject = ['$scope', '$sce', 'utils', 'product'];

    function ProductCommentController($scope, $sce, utils, product) {

        $scope.commentList = [];
        $scope.marketList = [];

        getList();
        getMarketList();

        // 获取每日汇评
        function getList() {
            product.getProductComment().then(function (data) {
                $scope.commentList = data.posts;
            });

        }

        // 获取市场分析
        function getMarketList() {
            product.getProductMarket().then(function (data) {
                $scope.marketList = data.posts;

            });

        }
    }
})();
