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
                // console.info(data);
                $scope.$broadcast('paintLineChart', data.data);
            });
        }

        function getInvestBarChart () {
            invest.getInvestBarChart().then(function (data) {
                // console.info(data);
                $scope.bars = [];
                var symbolBar = {};

                $scope.$broadcast('hideLoadingImg');

                if (data.data_num.length <= 0) return;
                
                angular.forEach(data.data, function(data,index,array){
                    symbolBar[index] = {};
                    symbolBar[index]["symbol_mod"] = index;
                    symbolBar[index]["scale"] = data;
                });
                angular.forEach(data.data_num, function(data,index,array){
                    symbolBar[index]["number"] = data;
                });
                angular.forEach(symbolBar, function(data,index,array){
                    $scope.bars.push(data);
                });
            });
        }
    }
})();