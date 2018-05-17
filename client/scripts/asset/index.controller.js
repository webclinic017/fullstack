;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetIndexController', AssetIndexController);

    AssetIndexController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex', '$cookies', '$layer'];

    function AssetIndexController($rootScope, $scope, $modal, $state, asset, validator, forex, $cookies, $layer) {
        $scope.authenAsset = false; // 是否显示充值/提现页面
        $scope.authenAssetStatus = 0; // 0 loading, 1 新注册用户, 2 已开通体验金账户, 3 开通真实账户，身份审核中, 4 开通真实账户，身份审核被拒绝
        $scope.$watch('personal.dredged_type', function (newVal, oldVal) {
          if (newVal) {
            if ($scope.personal.passedAuthen) {
              $scope.authenAsset = true;
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
            }
          }
        });
    }
})();