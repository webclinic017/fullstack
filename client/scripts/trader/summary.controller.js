;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', '$state', 'trader', '$timeout'];

    function TraderSummaryController($scope, $state, trader, $timeout) {
        $scope.summary = {};
        var usercode = $state.params.usercode;

        trader.getMasterSummary(usercode).then(function (data) {
            $scope.summary = data;

            // 饼图绘制
            if ($scope.summary.order_sum === undefined) {
                $scope.$watch('summary.order_sum', function (value) {

                    if (value === undefined) {
                        return;
                    } else {
                        broadcastPieData();
                    }
                });
            } else {

                $timeout(function () {
                    broadcastPieData();
                }, 1000);            
            }

            function broadcastPieData () {
                var profitSum = [
                    ['盈利订单',$scope.summary.profit_order],
                    ['亏损订单',$scope.summary.loss_order]
                ];
                // console.info(profitSum);
                $scope.$broadcast('paintPieChart', profitSum);
            }
        });

        trader.getMasterProfitLine(usercode).then(function (data) {
            // console.info(data);
            $scope.$broadcast('paintLineChart', data.data);
        });
        
        trader.getMasterBarChart(usercode).then(function (data) {
            // console.info(data);
            $scope.bars = data;
        });
    }
})();