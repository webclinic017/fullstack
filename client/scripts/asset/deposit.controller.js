;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$modal', '$state', 'asset', 'validator', 'account'];

    function AssetDepositController($scope, $window, $modal, $state, asset, validator, account) {

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
        asset.getFXRate().then(function (data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                $scope.deposit.FXRate.value = data.data.in_rate;
            }
        });

        // 获取入金限制
        asset.getDepositLimit().then(function (data) {
            $scope.deposit.minAmount = parseInt(data.limit);
            $scope.deposit.isumam = data.isumam;

        });

        function openSystemMdl(type, info) {
            $modal.open({
                templateUrl: '/views/asset/verify_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type,
                        info: info
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        // 充值  还未完成s
        function toDeposit(amount) {
            console.log($scope.personal.verify_status);
            if ($scope.personal.verify_status < 6) {
                openSystemMdl('verify');
                return;
            }

            if ($scope.deposit.isumam === 1) {
                openDepositMdl('isumam');
                return;
            }
            var amount = $scope.deposit.amount;

            if (typeof amount === 'undefined') {
                showErr('amount');
                return;
            }
            amount = Number(amount).toFixed(2);

            var w = $window.open('/waiting');

            asset.deposit($scope.personal.mt4_id, amount).then(function (data) {

                var url;
                if (data && data.data && data.data.url) {
                    // 兼容IE
                    if (location.origin) {
                        url = location.origin + data.data.url;
                    } else {
                        url = location.protocol + "//" + location.hostname + data.data.url;
                    }

                    // url = 'https://www.tigerwit.com'+data.data.url;
                }
                if (url) {
                    openDepositMdl('depositFinish');
                    w.location = url;
                } else {
                    alert((data && data.error_msg) || '请求失败，请联系管理员。');
                    w.close();
                }
            });
        }

        function refresh() {
            $state.go('space.asset.subpage', {
                subpage: 'deposit'
            }, { reload: true });
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
                        _czc.push(["_trackEvent", "入金页面", "充值"]);

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
