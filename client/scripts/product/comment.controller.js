;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ProductCommentController', ProductCommentController);

    ProductCommentController.$inject = ['$scope', '$sce', 'utils', 'product'];

    function ProductCommentController($scope, $sce, utils, product) {

        $scope.commentList = [];
        $scope.loading = true;
        var limit = 10;

        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getCommentList           
        };

        getCommentList();

        // 获取每日汇评
        function getCommentList(page) {
            page = page ? page : 1;
            var offset = (page - 1)*limit;
            product.getCommentList({
                offset: offset,
                limit: limit
            }).then(function (data) {
                // console.log(data);
                $scope.loading = false;
                if (data.is_succ) {
                    $scope.commentList = data.data.records;

                    angular.extend($scope.pagebar.config, {
                        total: data.data.page_count,
                        page: page
                    }); 
                }
            });

        }

    }
})();
