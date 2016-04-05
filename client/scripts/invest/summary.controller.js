;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestSummaryController', InvestSummaryController);

    InvestSummaryController.$inject = ['$scope', 'invest'];

    function InvestSummaryController($scope, invest) {

        $scope.summary = {};

        getInvestSummary();
        getInvestProfitLine();
        getInvestBarChart();

        function getInvestSummary () {
            invest.getInvestSummary().then(function (data) {
                // console.info(data);
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

        function getInvestProfitLine () {
            invest.getInvestProfitLine().then(function (data) {
                $scope.$broadcast('paintLineChart', data.data);
            });
        }

        function getInvestBarChart () {
            invest.getInvestBarChart().then(function (data) {
                // console.info(data);
                $scope.bars = data;
                $scope.$broadcast('hideLoadingImg');
            });
        }
    }
})();