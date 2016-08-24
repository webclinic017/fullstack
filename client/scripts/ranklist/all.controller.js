;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', '$document', '$state', 'ranklist'];

    function RanklistAllController($scope, $document, $state, ranklist) {
        
        var pagesize = 9;
        $scope.rankOrder = '';
        $scope.search = {};
        $scope.ranklist = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getMastersList           
        };

        $scope.showSearchList = showSearchList;
        $scope.getMastersList = getMastersList;
        $scope.changeRankOrder = changeRankOrder;

        getMastersList();

        function changeRankOrder (order) {
            if (order) {
                if ($scope.rankOrder == order) return;
            } else {
                if ($scope.rankOrder == '') return;
            }
            $scope.rankOrder = order ? order : '';
            getMastersList();
        }

        function getMastersList (page) {
            page = page ? page : 1;
            // $scope.ranklist = [];
            $scope.$broadcast('showLoadingImg');

            ranklist.getMastersList($scope.rankOrder, page, pagesize).then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.ranklist = data.data;
                    $scope.$broadcast('hideLoadingImg');

                    if ($scope.ranklist.length <= 0) return;
                    angular.extend($scope.pagebar.config, {
                        total: getTotal(data.sum, pagesize),
                        page: page
                    }); 
                }
            });
        }

        function getTotal(sum, pagesize) {
            var total;
            sum = parseInt(sum, 10); // list item 总个数
            pagesize = parseInt(pagesize, 10); // 单页显示数

            if (sum % pagesize > 0) {
                total = parseInt(sum / pagesize) + 1;
            } else {
                total = parseInt(sum / pagesize);
            }
            return total;
        }

        function showSearchList (e, type) {
            e.stopPropagation();
            $scope.search = {};
            $scope.search[type] = true;
        }

        // $document.on('click', function () {
        //     $scope.$apply(function () {
        //         $scope.search = {};
        //     });
        // });
    }
})();