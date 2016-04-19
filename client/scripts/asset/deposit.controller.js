;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$modal', '$state', 'asset', 'validator'];

    function AssetDepositController($scope, $window, $modal, $state, asset, validator) {

        $scope.deposit = {
            minAmount: 200,       // 最低充值金额
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            }
        };

        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.toDeposit = toDeposit;
        $scope.openDepositMdl = openDepositMdl;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;

        // 汇率
        asset.getFXRate().then(function(data) {
            $scope.deposit.FXRate.value = data.parity;

        });
        // 充值  还未完成s
        function toDeposit(amount) {
            var amount = $scope.deposit.amount;

            if (typeof amount === 'undefined') {
                showErr('amount');
                return;
            }
            amount = Number(amount).toFixed(2);

            var w = $window.open('/waiting');

            asset.deposit(amount).then(function(data) {
                openDepositMdl('depositFinish');
                w.location = data.url;
            });
        }

        function refresh() {
            $state.go('space.asset.type', {
                type: 'deposit'
            }, {reload: true});
        }

        // 入金相关的各种弹窗提示
        function openDepositMdl(type) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.type = type;
                    $scope.closeModal = closeModal;
                    $scope.verify = verify;
                    $scope.openChat = openChat;

                    // 去实名认证
                    function verify() {
                        $state.go('personal.setting.subpage({subpage: verify})');
                        closeModal();
                    }

                    // 支付遇到问题
                    function openChat() {
                        OpenChat();
                        closeModal();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                        refresh();
                    }

                }
            });
        }

        function hideErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = false;
            }
        }

        function showErr(name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name].show = true;
            }
        }
    }
})();
