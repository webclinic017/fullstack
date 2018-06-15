;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SingleAccountController', SingleAccountController);

        SingleAccountController.$inject = ['$rootScope', '$scope', '$interval', '$state', 'account', '$modal', '$location'];

    /**
     * @name SingleAccountController
     * @desc
     */
    function SingleAccountController($rootScope, $scope, $interval, $state, account, $modal, $location) {
        var summaryId;
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
        }) 
        $scope.accountInfo = {
            accountList: []
        }
        $scope.defaultSelectKey = {
            text: "account_name",   // 下拉列表数据的内容
            value: "mt4_id",    // 下拉列表数据的value
            type: "account_type"
        },
        
        // 监听账号id
        $scope.$watch('investSelect.id', function(n){
            if(!n) return;
            getAccountInfo();
        })
        //定时提取用户单个账号信息
        $scope.$watch('personal.profile_check', function () {
            getSingleAccountInfo();
        })

        function getSingleAccountInfo () {
            // console.log($scope.personal.profile_check);
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getAccountInfo();
                }, 5000);
            }
        }

        // 获取单个交易账户信息
        function getAccountInfo() {
            account.getAccountInfo($scope.investSelect.id).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    $scope.singleAccountInfo = data.data
                } 
            });
        }
        getAccountList();
        // 获取用户交易账户列表 TODO(方法要改)
        function getAccountList(){
            account.getDealAccountList().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    $scope.accountInfo.accountList = data.data; 
                    if($scope.accountInfo.accountList.length > 0){
                        // 当全局mt4_id为空
                        if(!$scope.investSelect.id){
                            $scope.investSelect.id = $scope.accountInfo.accountList[0].mt4_id
                            $scope.investSelect.type = $scope.accountInfo.accountList[0].account_type

                        }
                    }
                } 
            });
        }
        // 下拉选项变化时触发
        $scope.changeSelect=function(){
            angular.forEach($scope.accountInfo.accountList, function(val, key){
                if(val.mt4_id == $scope.investSelect.id) {
                    $scope.investSelect.type = val.account_type;
                    return
                }
            })
        } 
    }
})();
