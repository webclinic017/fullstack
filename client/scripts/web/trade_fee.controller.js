;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('TradeFeeController', TradeFeeController);
    TradeFeeController.$inject = ['$scope', '$cookies', '$location', 'product'];
    function TradeFeeController($scope, $cookies, $location, product) {
        // 所有表格数据
        $scope.tradeFeeData = {}
        // 当前选中数据
        $scope.currentData = {
            point: [],
            swap: [],
            fee: []
        }
        // 当前选中状态
        $scope.currentChecked = {
            point: '', // forex metail nergy contrast
            swap: '', // forex metail nergy contrast
            fee: '', // forex metail nergy contrast
        }
        // 是否显示folder
        $scope.showFolder = {
            point: true,
            swap: true,
            fee: true
        }
        // 展开状态
        $scope.unfold = {
            point: false,
            swap: false,
            fee: false
        }
        // 展开
        $scope.unfold = function (cate) {
            $scope.currentData[cate] = $scope.tradeFeeData[cate][$scope.currentChecked[cate]] ?
                $scope.tradeFeeData[cate][$scope.currentChecked[cate]] ||
                [] : []
            $scope.unfold[cate] = true
        }
        // 折叠
        $scope.fold = function (cate, num) {
            $scope.currentData[cate] = $scope.tradeFeeData[cate][$scope.currentChecked[cate]] ?
                $scope.tradeFeeData[cate][$scope.currentChecked[cate]].slice(0, 6) ||
                [] : []
            $scope.unfold[cate] = false
        }
        // 切换类型
        $scope.changeType = changeType;
        function changeType(cate, type) {
            $scope.fold(cate)
            $scope.currentData[cate] = $scope.tradeFeeData[cate][type] ?
                $scope.tradeFeeData[cate][type].slice(0, 6) ||
                [] : []
            $scope.currentChecked[cate] = type
            $scope.showFolder[cate] = $scope.tradeFeeData[cate][type].length > 6;
            // console.log(cate, type, $scope.currentData[cate], $scope.showFolder)
        }
        // 获取表格数据
        var symbolList = [];
        getTradeFeeInfo();
        getSymbolList();
        function getTradeFeeInfo(cate, type) {
            product.getTradeFeeInfo().then(function (res) {
                // console.log(res)
                if (res.is_succ) {
                    $scope.tradeFeeData = res.data;
                    changeType('point', 'forex')
                    changeType('swap', 'forex')
                    changeType('fee', 'forex')
                }
            });
        }

        function getSymbolList () {
            product.getSymbolList().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    symbolList = data.data;
                }
                angular.forEach($scope.tradeFeeData.swap, function (value, index) {
                    angular.forEach(value, function (value2, index2) {
                        value2.swap_long = getSymbolSwap(value2.name, 'swap_long');
                        value2.swap_short = getSymbolSwap(value2.name, 'swap_short');
                    });
                });
                console.log($scope.tradeFeeData.swap);
            });
        }

        function getSymbolSwap (symbolName, swapName) {
            var res;
            angular.forEach(symbolList, function (value, index) {
                if (value.symbol.indexOf(symbolName) != -1) {
                    res = value[swapName];
                }
            })
            return res;
        }
    }
})();
