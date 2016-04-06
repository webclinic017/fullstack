;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', '$state', 'trader', '$timeout'];

    function TraderSummaryController($scope, $state, trader, $timeout) {
        $scope.summary = {};
        var usercode = $state.params.usercode;

        getMasterSummary(usercode);
        getMasterProfitLine(usercode);
        getMasterBarChart(usercode);

        function getMasterSummary (usercode) {
            trader.getMasterSummary(usercode).then(function (data) {
                $scope.summary = data;

                // 饼图绘制
                broadcastPieData();

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

        function getMasterProfitLine (usercode) {
            trader.getMasterProfitLine(usercode).then(function (data) {
                // console.info(data);
                $scope.$broadcast('paintLineChart', data.data);
            });
        }
        
        function getMasterBarChart (usercode) {
            trader.getMasterBarChart(usercode).then(function (data) {
                // console.info(data);
                $scope.bars = data;
                $scope.$broadcast('hideLoadingImg');
            });
        }
    }
})();