;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SingleAccountController', SingleAccountController);

        SingleAccountController.$inject = ['$rootScope', '$scope', '$interval', '$state', 'account', '$modal'];

    /**
     * @name SingleAccountController
     * @desc
     */
    function SingleAccountController($rootScope, $scope, $interval, $state, account, $modal) {
        var summaryId;
        $scope.accountInfo = {
            accountList: []
        }
        $scope.defaultSelect = {
            id: $state.params.mt4id,  // 默认id
            text: "account_name",
            value: "mt4_id"
        },
        //获取某账号的相关信息。更换用户时需要触发重置。
        getSingleAccountInfo();

        function getSingleAccountInfo(){
            getVerifyStatus();
        }

        // 获取实名认证状态
        function getVerifyStatus () {

            //定时提取用户单个账号信息
            loopSingleAccount();
        }
        // 切换交易账号弹窗


        function loopSingleAccount () {
            // console.log($scope.personal.profile_check);
            getAccountInfo();
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getAccountInfo();
                }, 5000);
            }
        }

        // 获取单个交易账户信息
        function getAccountInfo() {
            account.getAccountInfo().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    $scope.singleAccountInfo = data.data
                } 
            });
        }

        // 获取用户交易账户列表 TODO(方法要改)
        account.getDealAccountList().then(function (data) {
            if (!data) return;
            if (data.is_succ) {
                $scope.accountInfo.accountList = data.data; 
            } 
        });
    
        // $scope.changeSelect();
    
        
        // 下拉选项变化时触发
        $scope.changeSelect=function(){
              console.log(0)
        } 
    }
})();
