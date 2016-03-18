;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestHistoryController', InvestHistoryController);

    InvestHistoryController.$inject = ['$scope', 'invest'];

    function InvestHistoryController($scope, invest) {
        $scope.orderHistory = {};      // 自主交易历史订单概况
        $scope.orders = [];             // 自主交易历史订单
        $scope.traders = [];            // copied traders 列表
        $scope.showOrders = showOrders;
        $scope.showDetails = showDetails;

        getInvestHistoryData();
        getInvestHistoryTraders();

        function getInvestHistoryData () {
            invest.getInvestHistoryData().then(function (data) {
                // console.info(data);
                $scope.orderHistory = data.group_data;
                $scope.orders = data.data;

                $scope.$broadcast('hideLoadingImg');
            });
            
        }

        // 显示/隐藏自主交易历史订单
        function showOrders() {
            if ($scope.orderHistory.detailsShow) {
                $scope.orderHistory.detailsShow = false;
            } else {
                $scope.orderHistory.detailsShow = true;
            }
        }

        // 获取 copied traders 列表
        function getInvestHistoryTraders() {
            invest.getInvestHistoryTraders().then(function (data) {
                // console.info(data);
                $scope.traders = data.data;
                angular.forEach($scope.traders, function (value, key) {
                    $scope.traders[key].detailsShow = false;
                });
            });
        }

        // 显示/隐藏 copied traders 列表的详情（复制交易历史订单）
        function showDetails(trader) {
            if (trader.detailsShow) {
                trader.detailsShow = false;
            } else {

                // 若 copied traders 所属的 orders 为空，则请求数据
                if (!trader.orders) {
                    invest.getInvestHistoryDetails(trader.usercode).then(function (data) {
                        trader.orders = data.data;
                        // console.info(data);
                        $scope.$broadcast('hideLoadingImg');
                    });    
                }
                trader.detailsShow = true;
            }
        }
    }
})();