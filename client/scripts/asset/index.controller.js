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

    // 交易成功隐藏卡片
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
      $scope.stateParamsSubpage = toParams.subpage;
    })
    $scope.$on('asset.transfer', function () {
      $scope.stateParamsSubpage = '';
    })
    // 被选中的账号
    $scope.accountItem = {
      account_name: '',
      mt4_id : $state.params.account
    }
    // 打开交易账号列表
    $scope.subAccountList = subAccountList;
    // 获取钱包 金额
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
            alert($scope.lang.text("tigerWitID.myAccount.loginAgain"))
            return;
          }
          if($scope.accountItem.mt4_id) {
            angular.forEach(list, function (value, index) {
              if(value.mt4_id == $scope.accountItem.mt4_id){
                $scope.accountItem.account_name = value.account_name;
                $scope.isMt4ID = true;
              }
            });
          }
          if(!$scope.isMt4ID){
            $scope.accountItem.mt4_id = list[0].mt4_id;
            $scope.accountItem.account_name = list[0].account_name;
          }
          $scope.dealAccountList = list;
        }
      });
    }
    // 切换交易账户或钱包
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
        controller: function ($scope, $modalInstance, passedScope, lang) {
            // console.log(passedScope);
            $scope.account = {
                accountItem: passedScope.accountItem,
                dealAccountList: passedScope.dealAccountList
            };
            $scope.lang = lang;
            $scope.accountType = {
              0: lang.text('tigerWitID.tradingAccount.experienceAccount'),
              1: lang.text('tigerWitID.tradingAccount.tradingAccount'),
              2: lang.text('tigerWitID.tradingAccount.copyAccounts'),
              3: lang.text('tigerWitID.tradingAccount.masterAccount'),
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
