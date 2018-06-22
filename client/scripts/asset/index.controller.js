;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('AssetIndexController', AssetIndexController);

  AssetIndexController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex', '$cookies', '$layer', 'account'];

  function AssetIndexController($rootScope, $scope, $modal, $state, asset, validator, forex, $cookies, $layer, account) {
    $scope.authenAsset = true; // 是否显示充值/提现页面
    $scope.authenAssetStatus = 0; // 0 loading, 1 新注册用户, 2 已开通体验金账户, 3 开通真实账户，身份审核中, 4 开通真实账户，身份审核被拒绝
    // $scope.$watch('personal.dredged_type', function (newVal, oldVal) {
    //   if (newVal) {
    //     // console.log($scope.personal.verify_status)
    //     if ($scope.personal.passedAuthen) {
    //       $scope.authenAsset = true;
    //     } else if ($scope.personal.dredged_type === 'unknow') {
    //       $scope.authenAssetStatus = 1;
    //       $scope.$emit('global.openDredgeMdl', {
    //         position: 'sidebar'
    //       });
    //     } else if ($scope.personal.verify_status == 5) {
    //       $scope.authenAssetStatus = 3;
    //     } else if ($scope.personal.verify_status == 4) {
    //       $scope.authenAssetStatus = 4;
    //     } else if ($scope.personal.dredged_type === 'demo') {
    //       $scope.authenAssetStatus = 2;
    //     } else {
    //       $scope.authenAssetStatus = 2;
    //     }
    //   }
    // });

    $scope.accountItem = {
      account_name: '',
      mt4_id : ''
    }
    // 打开交易账号列表
    $scope.subAccountList = subAccountList;
    // 判断哪个页面显示账户选择
    $scope.$watch("", function(n){

    })
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
      $scope.stateParamsSubpage = toParams.subpage;
    })

    $scope.withdraw = {type : 'invest'};
    $scope.dealAccountList = [];
    // 获取用户交易账户信息
    account.getDealAccountList(1, 0).then(function (data) {
      if (!data) return;
      // console.info(data);
      if (data.is_succ) {
        var list = data.data;
        if(list.length == 0) {
          alert("抛出错误")
          return;
        }
        angular.forEach(list, function (value, index) {
            if(value.mt4_id == $scope.accountItem.mt4_id){
              $scope.accountItem.account_name = value.account_name;
              $scope.isMt4ID = true;
            }
        });
        if(!$scope.isMt4ID){
          $scope.accountItem.mt4_id = list[0].mt4_id;
          $scope.accountItem.account_name = list[0].account_name;
        }
        $scope.dealAccountList = list;
      }
    });
    // 切换交易账户或零钱包
    $scope.changeWithdrawType = function(type){
      $scope.withdraw.type = type;
    }
    function subAccountList(){
      $modal.open({
        templateUrl: '/views/asset/sub_account_list.html',
        size: 'sm',
        backdrop: 'static',
        resolve: {
            passedScope: function () {
                return {
                    accountItem: $scope.accountItem,
                    dealAccountList: $scope.dealAccountList
                };
            }
        },
        controller: function ($scope, $modalInstance, passedScope) {
            // console.log(passedScope);
            $scope.account = {
                accountItem: passedScope.accountItem,
                dealAccountList: passedScope.dealAccountList
            };
            $scope.accountType = {
              0: "体验金账号" ,
              1: "自主交易账号" ,
              2: "跟随账号" ,
              3: "高手账号" ,
            }
            $scope.closeModal = closeModal;
            $scope.selectType = selectType;
            $scope.changeType = changeType;

            function selectType(item) {
                $scope.account.accountItem.mt4_id = item.mt4_id;
                $scope.account.accountItem.account_name = item.account_name;
            }

            function changeType() {
                closeModal();
                changeAccount($scope.account.accountItem);
            }

            function closeModal() {
                $modalInstance.dismiss();
            }

        }
      });
    }
    function changeAccount(accountItem) {
      $scope.accountItem.mt4_id = accountItem.mt4_id;
      $scope.accountItem.account_name = accountItem.account_name;
      // $scope.deposit.currency = $scope.depositTypeLst[$scope.deposit.type].currency.length ? $scope.depositTypeLst[$scope.deposit.type].currency[0] : null;
    }
  }
})();
