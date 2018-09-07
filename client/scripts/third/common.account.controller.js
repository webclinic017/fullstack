;
(function () {
  'use strict';

  angular.module('fullstackApp')
    .controller('CommonAccountxController', CommonAccountxController);

    CommonAccountxController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'account'];

  function CommonAccountxController($rootScope, $scope, $modal, $state, asset, account) {
    getDealAccountList();
    // 打开交易账号列表
    $scope.subAccountList = subAccountList;

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
          $scope.accountItem.mt4_id = list[0].mt4_id;
          $scope.accountItem.account_name = list[0].account_name;
          $scope.dealAccountList = list;
        }
      });
    }
    // 切换交易账户或钱包
    $scope.changeWithdrawType = function(type){
      $scope.common_acount.type = type;
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
            $scope.lang = lang;
            $scope.account = {
                accountItem: passedScope.accountItem,
                dealAccountList: passedScope.dealAccountList
            };
            $scope.accountType = {
              0: lang.text('tigerWitID.tradingAccount.experienceAccount') ,
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
