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
                if (data.is_succ) {
                    $scope.summary = data.data;
                }

                // 饼图绘制
                broadcastPieData();

                function broadcastPieData () {
                    var profitSum = [
                        ['盈利订单',$scope.summary.profit_trade_count],
                        ['亏损订单',$scope.summary.loss_trade_count]
                    ];
                    // console.info(profitSum);
                    $scope.$broadcast('paintPieChart', profitSum);
                }
            });
        }

        function getInvestProfitLine () {
            invest.getInvestProfitLine().then(function (data) {
                // console.info(data);
                $scope.$broadcast('paintLineChart', data.data);
            });
        }

        function getInvestBarChart () {
            invest.getInvestBarChart().then(function (data) {
                console.info(data);
                $scope.bars = [];
                var symbolBar = {};

                $scope.$broadcast('hideLoadingImg');

                if (data.data.length <= 0) return;
                
                angular.forEach(data.data, function(data,index,array){
                    var symbol = data.symbol;
                    symbolBar[symbol] = {};
                    symbolBar[symbol]["symbol_mod"] = symbol;
                    symbolBar[symbol]["scale"] = data.rate;
                    symbolBar[symbol]["number"] = data.count; //count
                });
                angular.forEach(symbolBar, function(data,index,array){
                    $scope.bars.push(data);
                });
            });
        }
    }
})();