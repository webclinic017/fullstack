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
            point: '', // forex metal energy cfd
            swap: '', // forex metal energy cfd
            fee: '', // forex metal energy cfd
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
            $scope.currentData[cate] = $scope.tradeFeeData[$scope.currentChecked[cate]] ?
                $scope.tradeFeeData[$scope.currentChecked[cate]] ||
                [] : []
            $scope.unfold[cate] = true
        }
        // 折叠
        $scope.fold = function (cate) {
            $scope.currentData[cate] = $scope.tradeFeeData[$scope.currentChecked[cate]] ?
                $scope.tradeFeeData[$scope.currentChecked[cate]].slice(0, 6) ||
                [] : []
            $scope.unfold[cate] = false
        }
        // 切换类型
        $scope.changeType = changeType;
        function changeType(cate, type) {
            if($scope.tradeFeeData[type]){
                $scope.currentChecked[cate] = type
                $scope.fold(cate)
                $scope.showFolder[cate] = $scope.tradeFeeData[type].length > 6;
            }else{
                getWebSymbolList(type, cate)
            } 
        }
        // 获取表格数据
        getWebSymbolList('forex');
        function getWebSymbolList(type, cate) {
            layer.load();
            product.getWebSymbolList({type: type, detail: true}).then(function (res) {
                // console.log(res)
                layer.closeAll();
                if (res.is_succ) {
                    $scope.tradeFeeData[type] = res.data[type];
                    if(cate){
                        changeType(cate, type)
                    }else{
                        changeType('point', 'forex')
                        changeType('swap', 'forex')
                        changeType('fee', 'cfd')
                    }
                }else{
                    layer.msg(res.message);
                }
            });
        }

    }
})();
