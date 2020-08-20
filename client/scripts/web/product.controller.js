;
(function () {
  'use strict';

  angular
    .module('fullstackApp')
    .controller('WebProductController', WebProductController);

  WebProductController.$inject = ['$scope', '$cookies', '$location', 'product'];

  function WebProductController($scope, $cookies, $location, product) {
    var location = $location.$$absUrl.split('/');
    var curUrlKey = location[location.length - 1] || '';
    var compatibility = {
      'forex-trading': 'forex',
      'oil-trading': 'energy',
      'cfd-trading': 'cfd',
      'precious-metal-trading': 'metal',
      'stock-trading': 'stock'
    }
    var curProduct = compatibility[curUrlKey];

    // console.log(location, curProduct)
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
    if (curProduct) {
      var params = {
        type: curProduct,
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
