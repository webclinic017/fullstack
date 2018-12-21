;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('CommonAccountxController', CommonAccountxController);

    CommonAccountxController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'account'];

  function CommonAccountxController($rootScope, $scope, $modal, $state, asset, account) {
    $scope.$emit('quack.result')


  }
})();
