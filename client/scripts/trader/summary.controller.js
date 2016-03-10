;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', 'trader', '$timeout'];

    function TraderSummaryController($scope, trader, $timeout) {
        $scope.summary = {};

        trader.getMasterSummary().then(function (data) {
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
    }
})();