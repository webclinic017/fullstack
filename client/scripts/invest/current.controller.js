;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestCurrentController', InvestCurrentController);

    InvestCurrentController.$inject = ['$scope', 'invest', '$timeout'];

    function InvestCurrentController($scope, invest, $timeout) {
        $scope.orderCurrent = {};
        $scope.orders = [];
        $scope.traders = [];
        $scope.showOrders = showOrders;
        $scope.showDetails = showDetails;

        var dataId;
        var tradersId;
        var detailsId;

        getData();
        getTraders();

        // 只要当前投资的所对应的 state 变化就要 cancel 轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            $timeout.cancel(dataId);
            $timeout.cancel(tradersId);
            $timeout.cancel(detailsId);
        });

        // 获取自主交易持仓订单和订单概况
        function getData() {
            invest.getInvestCurrentData().then(function (data) {
                $scope.orders = data.data;
                angular.extend($scope.orderCurrent, data.group_data);

                $scope.$broadcast('hideLoadingImg');
            });

            dataId = $timeout(function () {
                getData();
            }, 5000);
        }

        function getTraders() {
            invest.getInvestCurrentTraders().then(function (data) {
                // console.info(data);
                if (data.data.length <= 0) {
                    $scope.traders = [];
                    return;
                }

                angular.forEach(data.data, function (item, index) {

                    if (typeof $scope.traders[index] === 'undefined') {
                        $scope.traders[index] = {};
                    }

                    angular.forEach(item, function (value, key) {
                        $scope.traders[index][key] = value;
                    });
                });
            });

            tradersId = $timeout(function () {
                getTraders();
            }, 5000);
        }

        // 显示/隐藏自主交易历史订单
        function showOrders() {
            if ($scope.orderCurrent.detailsShow) {
                $scope.orderCurrent.detailsShow = false;
            } else {
                $scope.orderCurrent.detailsShow = true;
            }
        }

        // 显示或者隐藏 copied trader 的详情（复制交易持仓订单）
        function showDetails(trader) {
            if (trader.detailsShow) {
                trader.detailsShow = false;
                trader.orders = [];
                $timeout.cancel(detailsId);
            } else {
                $scope.$emit('showLoadingImg');
                trader.detailsShow = true;
                getDetails(trader);
            }
        }

        // 获取 copied traders 列表的详情（复制交易持仓订单）
        function getDetails(trader) {
            invest.getInvestCurrentDetails(trader.usercode).then(function (data) {
                trader.orders = data.data;

                $scope.$broadcast('hideLoadingImg');
            });

            detailsId = $timeout(function () {
                getDetails(trader);
            }, 5000);
        }
    }
})();