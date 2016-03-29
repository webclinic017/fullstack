;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ProductCommentController', ProductCommentController);

    ProductCommentController.$inject = ['$scope', 'utils', 'product'];

    function ProductCommentController($scope, utils, product) {

        $scope.pagebar = {
            config: {
                // total: , 总页数
                size: 3,
                page: 1
            },
            pages: [],
            //selectPage: , bind to pagination.selectPage
            getList: getList
        };
        $scope.page = 1;
        $scope.commentList = [];

        var pagesize = 5;

        getList(1);

        // 获取每日汇评
        function getList(page) {
            $scope.page = page;
            product.getProductComment(page, pagesize).then(function (data) {
                $scope.commentList = data;

                angular.extend($scope.pagebar.config, {
                    total: utils.getTotal(data.length, pagesize),
                    page: page
                });
            });
            
        }
    }
})();
