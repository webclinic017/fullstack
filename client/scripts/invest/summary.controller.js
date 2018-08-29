;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestSummaryController', InvestSummaryController);

    InvestSummaryController.$inject = ['$scope', 'invest', '$state'];

    function InvestSummaryController($scope, invest, $state) {

        $scope.summary = {};

        $scope.$watch('investSelect.id', function(n){
            if(!n) return;
            $scope.$broadcast('showLoadingImg');
            getInvestSummary();
            getInvestProfitLine();
            getInvestBarChart();
        })

        function getInvestSummary () {
            invest.getInvestSummary($scope.investSelect.id).then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.summary = data.data;
                }

                // 饼图绘制
                broadcastPieData();

                function broadcastPieData () {
                    var profitSum = [
                        [$scope.lang.text("tigerWitID.dataStatistics.profitOrders"),$scope.summary.profit_trade_count],
                        [$scope.lang.text("tigerWitID.dataStatistics.lossOrders"),$scope.summary.loss_trade_count]
                    ];
                    // console.info(profitSum);
                    $scope.$broadcast('paintPieChart', profitSum);
                }
            });
        }

        function getInvestProfitLine () {
            invest.getInvestProfitLine($scope.investSelect.id).then(function (data) {
                // console.info(data);
                $scope.$broadcast('paintLineChart', data.data);
            });
        }

        function getInvestBarChart () {
            invest.getInvestBarChart($scope.investSelect.id).then(function (data) {
                // console.info(data);
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