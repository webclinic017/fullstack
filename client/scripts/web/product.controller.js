;
(function() {
  'use strict';

  angular
    .module('fullstackApp')
    .controller('WebProductController', WebProductController);

  WebProductController.$inject = ['$scope', '$cookies', '$location', 'product'];

  function WebProductController($scope, $cookies, $location, product) {
    var lang = $cookies['lang'] || 'zh';
    var location = $location.$$absUrl.split('/');
   	var curProduct = location[location.length - 1] || '';

    if('forex_oil_cfd'.indexOf(curProduct) != -1){
    	product.getProductInfo({product_type: curProduct}).then(function(res){
    		if(res.is_succ){
    			$scope[curProduct] = res.data[lang];
    			// console.log($scope[curProduct], curProduct)
    		}
    	});
    }
  }
})();
