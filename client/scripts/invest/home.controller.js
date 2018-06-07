;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestHomeController', InvestHomeController);

        InvestHomeController.$inject = ['$scope', '$interval', 'account', 'invite', '$timeout'];

    /**
     * @name InvestHomeController
     * @desc
     */
    function InvestHomeController($scope, $interval, account, invite, $timeout) {
        var summaryId;
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
        }) 
        $scope.totalDealAccount = {}; // 账户交易总详情
        $scope.dealAccountList = {};  // 账号列表
        // 获取交易账号信息与列表
        getAccountInfo();

        function getAccountInfo() {
            console.log($scope.personal.profile_check + "23")
            getDealAccount();
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getDealAccount();
                }, 5000);
            }
        }

        function getDealAccount() {
            // 获取用户交易账户信息
            account.getDealAccountList().then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    var list = data.data;
                    angular.forEach(list, function (value, index) {
                        if(value.mt4_id == $scope.info.mt4_id){
                            value.editName = true
                        }
                    });
                    $scope.dealAccountList = list; 
                } 
            });
            account.getTotalDealAccount().then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    $scope.totalDealAccount = data.data; 
                } 
            });
        }

        // 修改账户名称前端与后台的验证
        errorTip();
        // 记录当前修改的账户与修改的情况
        $scope.info = {
            mt4_id: undefined,
            account_name: undefined
        };

        $scope.editAccountNameTip = {
            focus: function(){
                // $scope.editAccountNameAwake.account_name.show = true;
            },
            change: function(){
                errorTip();
            }
        }

        // 修改account_name
        $scope.editAccountName = function (dealAccount) {
            cancelEditAccountName();
            dealAccount.editName = true;
            $scope.info = { 
                mt4_id: dealAccount.mt4_id,
                account_name: dealAccount.account_name
            }
        }
        // 提交修改account_name
        $scope.confirmAccountName = function (dealAccount, $invalid) {
            if(!$invalid){
                // 修改用户子账号name值
                account.setDealAccountName(dealAccount.mt4_id, $scope.info.account_name).then(function (data) {
                    if (!data) return;
                    // console.info(data);
                    if (data.is_succ) {
                        $scope.editAccountNameAwake.result.success = true;
                        dealAccount.account_name = $scope.info.account_name; 
                        // dealAccount.editName = false;
                    } else {
                        $scope.editAccountNameAwake.result.error = true;
                        $scope.editAccountNameAwake.account_name.show = false;
                        $scope.editAccountNameAwake.account_name.tip = data.message;
                    }

                });
            }
        }
        // 初始化报错信息
        function errorTip() {
            $scope.editAccountNameAwake = {
                account_name: {
                    show: true,
                    tip: ""
                },
                result: {
                    success: false,
                    error: false
                }
            }
        }
        //初始化account_name
         function cancelEditAccountName () {
            errorTip();
            angular.forEach($scope.dealAccountList, function (value, index) {
                value.editName = false;
            });
        }
    }
})();
