;
(function () {
  'use strict';

  angular
    .module('fullstackApp')
    .controller('WebProductController', WebProductController);

  WebProductController.$inject = ['$scope', '$cookies', '$location', 'product'];

  function WebProductController($scope, $cookies, $location, product) {
    var location = $location.$$absUrl.split('/');
    var curProduct = location[location.length - 1] || '';
    var symbolList;

    $scope.showFolder = true;  // 是否显示folder
    $scope.unfold = false;  // 展开状态
    // 展开
    $scope.unfoldFun = function () {
      $scope[curProduct] = symbolList
      $scope.unfold = true
    }
    // 折叠
    $scope.foldFun = function () {
      $scope[curProduct] = symbolList.slice(0, 6);
      $scope.unfold = false
    }

    if ('forex_oil_cfd_metal_stock'.indexOf(curProduct) != -1) {
      var params = {
        type: curProduct === 'oil' ? 'energy' : curProduct,
        detail: true
      }
      product.getWebSymbolList(params).then(function (res) {
        if (res.is_succ) {
          symbolList = res.data[params.type] || [];
          if(symbolList.length > 6){
            $scope[curProduct] = symbolList.slice(0, 6);
            $scope.showFolder = true;
          }else{
            $scope[curProduct] = symbolList;
            $scope.showFolder = false;
          }
        }
      });
    }
  }
})();
