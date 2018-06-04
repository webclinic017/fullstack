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
        $scope.totalDealAccount = {}; 
        $scope.dealAccountList = {}; 
        $scope.info = {
            account_name: undefined
        };
        // 获取交易账号信息与列表
        getAccountInfo();

        function getAccountInfo(){
            getVerifyStatus();
        }
        // 修改account_name
        $scope.editAccountName = function (dealAccount) {
            cancelEditAccountName();
            dealAccount.editName = true;
            $scope.info.account_name = dealAccount.account_name;
        }
        // 提交修改account_name
        $scope.confirmAccountName = function (dealAccount) {
            // 修改用户子账号name值
            account.setDealAccountName(dealAccount.mt4_id, $scope.info.account_name).then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    dealAccount.account_name = $scope.info.account_name; 
                    dealAccount.editName = false;
                } 

            });
        }
        //取消修改account_name
         function cancelEditAccountName () {
            angular.forEach($scope.dealAccountList, function (value, index) {
                value.editName = false;
            });
        }
        // var url = $location.search();
        
        // if (url.type && (url.type == 'new')) {
        //     $scope.$emit('global.openDredgeMdl', {position: 'register'});
        // }

        // 获取实名认证状态
        function getVerifyStatus () {

            //定时提取用户交易账户信息
            loopAccount();
        }

        function loopAccount() {
            // console.log($scope.personal.profile_check);
            getDealAccount();
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getDealAccount();
                }, 5000);
            }
        }

        function getDealAccount() {
            console.log(1)
            // 获取用户交易账户信息
            account.getDealAccountList().then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    $scope.dealAccountList = data.data; 
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
    }
})();
