;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator'];

    function AssetDepositController($scope, $window, $cookies, $modal, $state, asset, validator) {

        $scope.deposit = {
            minAmount: 0,       // 最低充值金额
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
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                $scope.deposit.FXRate.value = data.data.in_rate;
            }
        });

        // 获取入金限制
        asset.getDepositLimit().then(function(data) {
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                $scope.deposit.minAmount = parseInt(data.data.min);
            }
        });
        // 充值  还未完成s
        function toDeposit(amount) {

            // if ($scope.deposit.isumam === 1) {
            //     openDepositMdl('isumam');
            //     return;
            // }
            var amount = $scope.deposit.amount;

            if (typeof amount === 'undefined') {
                showErr('amount');
                return;
            }
            amount = Number(amount).toFixed(2);

            var w = $window.open('/waiting');

            asset.deposit(amount).then(function(data) {
                console.log(data);
                if (!data) return;
                if (data.is_succ) {
                    var token = $cookies["token"] || '';
                    var url = data.data.url + '?order_no='+data.data.order_no+'&token='+token;
                    openDepositMdl('depositFinish');
                    w.location = url;
                } else {
                    layer.msg(data.message);
                    w.close();
                }
            });
        }

        function refresh() {
            $state.go('space.asset.subpage', {
                subpage: 'deposit'
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
                    $scope.depositSucc = depositSucc;

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

                    // 支付成功
                    function depositSucc() {
                        // umeng
                        _czc.push(["_trackEvent","入金页面","充值"]);

                        closeModal();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                        //refresh();
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
