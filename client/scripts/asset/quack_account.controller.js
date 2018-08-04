;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('QuackAccountController', QuackAccountController);

    QuackAccountController.$inject = ['$rootScope', '$scope'];

  function QuackAccountController($rootScope, $scope) {

    // $scope.$emit('quack.result', {authenAsset: 'true'})
    $scope.authenAssetStatus = 0; // 0 loading, 1 新注册用户, 2 已开通体验金账户, 3 开通真实账户，身份审核中, 4 开通真实账户，身份审核被拒绝
    $scope.$watch('personal.dredged_type', function (newVal, oldVal) {
      if (newVal) {
        // console.log($scope.personal.verify_status)
        if ($scope.personal.passedAuthen) {
          $scope.$emit('quack.result', {authenAsset: 'true'})
        } else if ($scope.personal.dredged_type === 'unknow') {
          $scope.authenAssetStatus = 1;
          $scope.$emit('global.openDredgeMdl', {
            position: 'sidebar'
          });
        } else if ($scope.personal.verify_status == 5) {
          $scope.authenAssetStatus = 3;
        } else if ($scope.personal.verify_status == 4) {
          $scope.authenAssetStatus = 4;
        } else if ($scope.personal.dredged_type === 'demo') {
          $scope.authenAssetStatus = 2;
        } else {
          $scope.authenAssetStatus = 2;
        }
      }
    });
  }
})();
