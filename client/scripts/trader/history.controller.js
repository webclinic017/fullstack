;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderHistoryController', TraderHistoryController);

    TraderHistoryController.$inject = ['$scope', '$state', 'trader'];

    function TraderHistoryController($scope, $state, trader) {
        $scope.orders = [];
        $scope.pagebar = {
            config: {
                // total: , // 总页数
                page: 1    
            },
            pages: [],
            pagesBtn: [],
            // selectPage: , bind to pagination.selectPage
            getList: getList           
        };

        var pagesize = 8;
        var usercode = $state.params.usercode;

        getList(1);

        function getList (page) {
            trader.getMasterHistory(usercode, page, pagesize).then(function (data) {
                // console.info(data);
                $scope.orders = data.data;

                $scope.$broadcast('hideLoadingImg');

                if ($scope.orders.length <= 0) return;
                
                angular.extend($scope.pagebar.config, {
                    total: getTotal(data.sum, pagesize),
                    page: page
                }); 
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
    }
})();