;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderCurrentController', TraderCurrentController);

    TraderCurrentController.$inject = ['$scope', '$location', 'trader', '$state', '$timeout'];

    function TraderCurrentController($scope, $location, trader, $state, $timeout) {
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

        var pagesize = 10;
        var listId;
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        getList(1);

        // 只要当前投资的所对应的 state 变化就要 cancel 轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            $timeout.cancel(listId);
        });

        function getList (page) {
            page = page ? page : 1;
            var offset = (page - 1) * 10;
            var limit = 10;
            // console.log(page);
            trader.getMasterCurrent(usercode, offset, limit).then(function (data) {
                console.info(data);
                data = data.data;
                $scope.orders = data.records;

                $scope.$broadcast('hideLoadingImg');

                $timeout.cancel(listId);
                listId = $timeout(function () {         
                    getList(page);
                }, 5000);

                if ($scope.orders.length <= 0) return;
                angular.extend($scope.pagebar.config, {
                    total: getTotal(data.record_count, pagesize),
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