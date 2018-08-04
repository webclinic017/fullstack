;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestHomeController', InvestHomeController);

        InvestHomeController.$inject = ['$scope', '$interval', 'account', 'invite', '$timeout', '$state', '$modal'];

    /**
     * @name InvestHomeController
     * @desc
     */
    function InvestHomeController($scope, $interval, account, invite, $timeout, $state, $modal) {
        var summaryId;
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
        }) 
        $scope.totalDealAccount = {}; // 账户交易总详情
        $scope.dealAccountList = {};  // 账号列表
        $scope.detailsUrl = function(id, type){
            $scope.investSelect.id = id;
            $scope.investSelect.type = type;
            $state.go('space.center.invest.subpage',({ subpage: 'current' }))
        }
        // 记录当前修改的账户与修改的情况
        $scope.info = {
            mt4_id: undefined,
            account_name: undefined,
            clickEdit: true  // 正在修改的账号未保存时不能点击其他修改
        };
        // 获取交易账号信息与列表
        getDealAccount();
        $scope.$watch('personal.profile_check', function () {
            getAccountInfo();
        })

        function getAccountInfo() {
            // console.log($scope.personal.profile_check)
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getDealAccount();
                }, 5000);
            }
        }

        function getDealAccount() {
            // 获取用户交易账户信息
            account.getDealAccountList(1, 1).then(function (data) {
                if (!data) return;
                console.info(data);
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

        $scope.editAccountNameTip = {
            focus: function(){
                // $scope.editAccountNameAwake.account_name.show = true;
                // 修改name时停止列表轮询
                $interval.cancel(summaryId);
                $scope.info.clickEdit = false
            },
            change: function(){
                errorTip();
            }
        }
        // 正在修改某个账户时不能点击修改(info.clickEdit)
        // 修改account_name
        $scope.editAccountName = function (dealAccount) {
            // console.log("修改")
            // 初始化数据
            cancelEditAccountName();
            dealAccount.editName = true;
            $scope.info.mt4_id = dealAccount.mt4_id;
            $scope.info.account_name = dealAccount.account_name
        }
        // $scope.editAccountName = null
        // 提交修改account_name
        $scope.confirmAccountName = function (dealAccount, $invalid) {
            // console.log("提交")
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
                    $scope.info.clickEdit = true;
                    getAccountInfo();

                });
            }
        }
        // 初始化报错信息验证
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

        // 新建子账号
        $scope.newSubAccount = function(){
            $modal.open({
                templateUrl: '/views/invest/new_sub_account.html',
                controller: 'AddAcountController',
                size: 'sm',
                backdrop: true
            });
        }
    }
})();
