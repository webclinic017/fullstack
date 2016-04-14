;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', '$location', '$state', 'trader', '$timeout'];

    function TraderSummaryController($scope, $location, $state, trader, $timeout) {
        $scope.summary = {};
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        getMasterSummary(usercode);
        getMasterProfitLine(usercode);
        getMasterBarChart(usercode);

        function getMasterSummary (usercode) {
            trader.getMasterSummary(usercode).then(function (data) {
                // console.info(data);
                if (data.is_succ) {
                    $scope.summary = data.data;
                }

                // 饼图绘制
                broadcastPieData();

                function broadcastPieData () {
                    var profitSum = [
                        ['盈利订单',$scope.summary.order_count.open_trade],
                        ['亏损订单',$scope.summary.order_count.loss_order]
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