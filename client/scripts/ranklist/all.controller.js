;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('RanklistAllController', RanklistAllController);

    RanklistAllController.$inject = ['$scope', '$document', '$state', 'ranklist'];

    function RanklistAllController($scope, $document, $state, ranklist) {
        
        var pagesize = 9;
        $scope.rankOrder = 'last_total_profit_rate';
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
            }
            $scope.rankOrder = order ? order : 'last_total_profit_rate';
            getMastersList(1);
        }

        function getMastersList (page) {
            page = page ? page : 1;
            var offset = 9 * (page - 1);
            // $scope.ranklist = [];
            $scope.$broadcast('showLoadingImg');

            ranklist.getMastersList($scope.rankOrder, offset, 9).then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    data = data.data;
                    $scope.ranklist = data.records.slice(0,9);
                    $scope.$broadcast('hideLoadingImg');

                    // 最大跌幅＊100
                    angular.forEach($scope.ranklist, function (value, index) {
                        value.max_retract_percent = (value.max_retract * 100).toFixed(2);
                    });

                    if ($scope.ranklist.length <= 0) return;
                    angular.extend($scope.pagebar.config, {
                        total: getTotal(data.record_count, 9),
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