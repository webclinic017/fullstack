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
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
        }) 
        $scope.accountInfo = {
            accountList: []
        }
        $scope.defaultSelect = {
            id: $state.params.mt4id,  // 默认id
            text: "account_name",   // 下拉列表数据的内容
            value: "mt4_id",    // 下拉列表数据的value
            type: "account_type"
        },
        //定时提取用户单个账号信息
        getSingleAccountInfo();


        function getSingleAccountInfo () {
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
            account.getAccountInfo($scope.defaultSelect.id).then(function (data) {
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
            getAccountInfo()
        } 
    }
})();
