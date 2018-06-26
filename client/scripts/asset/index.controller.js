;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('AssetIndexController', AssetIndexController);

  AssetIndexController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'account'];

  function AssetIndexController($rootScope, $scope, $modal, $state, asset, account) {
    $scope.authenAsset = false; // 是否显示充值/提现页面
    $scope.$on('quack.result', function(e, resolve){
      $scope.authenAsset = true;
      walletBalanceFun();
      getDealAccountList();
    })

    $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
      $scope.stateParamsSubpage = toParams.subpage;
    })
    // 被选中的账号
    $scope.accountItem = {
      account_name: '',
      mt4_id : $state.params.account
    }
    // 打开交易账号列表
    $scope.subAccountList = subAccountList;
    // 获取零钱包 金额
    function walletBalanceFun(){
      asset.walletbalance().then(function (data) {
        if (!data) return;
        // console.log(data);
        $scope.walletbalance = data.data.balance;
      });
    }

    $scope.selectWay = {
      type : ($state.params.account === 'wallet') ? 'wallet' : 'invest'
    };
    function getDealAccountList(){
      $scope.dealAccountList = [];
      // 获取用户交易账户信息
      account.getDealAccountList(1, 0).then(function (data) {
        if (!data) return;
        // console.info(data);
        if (data.is_succ) {
          var list = data.data;
          if(list.length == 0) {
            alert("请重新登录")
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
    }
    // 切换交易账户或零钱包
    $scope.changeWithdrawType = function(type){
      $scope.selectWay.type = type;
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
            $scope.confirmSelectType = confirmSelectType;

            function selectType(item) {
                $scope.account.accountItem = {
                  mt4_id : item.mt4_id,
                  account_name : item.account_name
                }
            }

            function closeModal() {
                $modalInstance.dismiss();
            }

            function confirmSelectType() {
              closeModal();
              passedScope.accountItem.mt4_id = $scope.account.accountItem.mt4_id;
              passedScope.accountItem.account_name = $scope.account.accountItem.account_name
            }
        }
      });
    }

  }
})();
