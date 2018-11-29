;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AddAcountController', AddAcountController);

        AddAcountController.$inject = ['$scope', '$timeout', '$modalInstance', 'account' , '$state', 'lang'];

    function AddAcountController($scope, $timeout, $modalInstance, account, $state, lang) {
        // $scope.clickable = true;
        $scope.addAccountLogic = {
            msg: '',
            code: '',
            logic: 1,
            mt4_id: '',
            // account_name: ''
        };  // logic标题  0：子账号创建成功；1：新建账号规则；2：提示（有未入金账号）|| 提示（已满七个账号）
        $scope.closeModal = closeModal;
        $scope.lang = lang;
        function closeModal() {
            $modalInstance.dismiss();
        }
        // 创建子账号
        $scope.addAccount = addAccount;
        // 跳转充值页面
        $scope.depositActivate = depositActivate;
        // 修改账号名称
        // $scope.setAccountName = setAccountName;
        // $scope.showErr = showErr;
        $scope.closeModalReload = closeModalReload;
        function addAccount() {
            $scope.clickAddAccount = true;
            $timeout(function(){
                account.newSubAccount().then(function (data) {
                    $scope.clickAddAccount = false;
                    if (!data) return;
                    // console.info(data); 
                    if (data.is_succ) {
                        if(data.code === 0) {
                            $scope.addAccountLogic.logic = 0;
                            // $scope.addAccountLogic.mt4_id = data.mt4_id;
                        }else {
                            $scope.addAccountLogic.logic = 2;
                        }
                    } else {
                        $scope.addAccountLogic.logic = 2;
                    }
                    $scope.addAccountLogic.code = data.code;
                    $scope.addAccountLogic.msg = data.message;
                    if(data.data && data.data.inactive_account) {
                        $scope.addAccountLogic.mt4_id = data.data.inactive_account.mt4_id ? data.data.inactive_account.mt4_id : '';
                    }
                });
            }, 1000)
        }
        // 充值激活
        function depositActivate(){
            closeModal();
            $state.go("space.asset.subpage", {subpage: 'deposit', account: $scope.addAccountLogic.mt4_id});
        }
        function closeModalReload(){
            closeModal();
            window.location.reload()
        }
        // 修改账号名称
        // function setAccountName(invalid){
        //     if(!invalid){
        //         // 修改用户子账号name值

        //         $scope.formVerifyShow = false;
        //         $scope.clickable = false;
        //         account.setDealAccountName($scope.addAccountLogic.mt4_id, $scope.addAccountLogic.account_name).then(function (data) {
        //             $scope.clickable = true;
        //             if (!data) return;
        //             // console.info(data);
        //             if (data.is_succ) {
        //                 closeModal();
        //             } else {
        //                 $scope.setNameMsgShow = true;
        //                 $scope.setNameMsg = data.message;
        //             }
        //         });
        //     }
        // }
        // function showErr(){
        //     $scope.formVerifyShow = true;
        //     $scope.setNameMsgShow = false;
        //     $scope.setNameMsg = '';
        // }

    }
})();