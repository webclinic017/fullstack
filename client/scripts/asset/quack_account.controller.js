;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('QuackAccountController', QuackAccountController);

    QuackAccountController.$inject = ['$rootScope', '$scope'];

  function QuackAccountController($rootScope, $scope) {
    // $scope.personal.dredged_type = 'live';
    // $scope.personal.verify_status = 3;
    // $scope.$emit('quack.result', {authenAsset: 'true'})
    $scope.authenAssetStatus = 0; // 0 loading, 1 新注册用户, 2 已开通体验金账户, 3 开通真实账户，身份审核中, 4 开通真实账户，身份审核被拒绝 5.未更新证件
    $scope.$watch('personal.dredged_type', function (newVal, oldVal) {
      if (newVal) {
        var quackUnknow = false;  // 是否为新注册用户
        // console.log($scope.personal.verify_status)
        // 审核通过
        if ($scope.personal.passedAuthen) {
          $scope.$emit('quack.result')
        } else if ($scope.personal.dredged_type === 'unknow') { // 没开通
          $scope.authenAssetStatus = 1;
          quackUnknow = true;
          $scope.$emit('global.openDredgeMdl', {
            position: 'sidebar'
          });
        } else if ($scope.personal.verify_status == 5) {  // 待审核
          $scope.authenAssetStatus = 3;
        } else if ($scope.personal.verify_status == 4) { // 审核拒绝
          $scope.authenAssetStatus = 4;
        } else if ($scope.personal.dredged_type === 'demo') { // 模拟
          $scope.authenAssetStatus = 2;
        } else {
          $scope.authenAssetStatus = 2;
        }
        $scope.$emit('quack.unknow', {quackUnknow: quackUnknow})
      }
    });
  }
})();
