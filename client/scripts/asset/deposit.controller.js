;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator', 'account'];

    function AssetDepositController($scope, $window, $cookies, $modal, $state, asset, validator, account) {

        $scope.deposit = {
            minAmount: 0,       // 最低充值金额
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            alipay: true,
            alipayAbleTip: false, 
            alipayTip: false,
            wallet: true,
            walletTip: false,
            type: $state.params.type || 'invest',
            amount: undefined
        };
        $scope.walletDepositSucc = false;
        $scope.walletAble = 0;
        $scope.alipayAble = 3000;   // 支付宝入金限额

        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };
        $scope.isDeposit = false;

        $scope.toDeposit = toDeposit;
        $scope.openDepositMdl = openDepositMdl;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.changeDepositType = changeDepositType;
        $scope.checkInputAmount = checkInputAmount;

        // 汇率
        asset.getFXRate().then(function (data) {
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
        // 获取零钱包 可用金额
        asset.walletCanWithdraw().then(function (data) {
            if (!data) return;
            // console.log(data);
            $scope.walletAble = data.data;
            if ($state.params.type === 'wallet') {
                $scope.deposit.amount = $scope.walletAble;
            }
        });
        // function openSystemMdl(type) {
        //     $modal.open({
        //         templateUrl: '/views/asset/verify_modal.html',
        //         size: 'sm',
        //         backdrop: true,
        //         controller: function ($scope, $modalInstance) {
        //             $scope.type = type;
        //             $scope.closeModal = closeModal;

        //             function closeModal() {
        //                 $modalInstance.dismiss();
        //             }
        //         }
        //     });
        // }
        
        // 充值  还未完成
        function toDeposit(amount) {
            
            var amount = $scope.deposit.amount;

            if (typeof amount === 'undefined') {
                showErr('amount');
                return;
            }
            amount = Number(amount).toFixed(2);

            // 获取开通状态
            var dredged_type = $scope.personal.dredged_type;
            // 未开通
            if(dredged_type == 'unknow'){
                $scope.$emit('global.openDredgeMdl', {
                    position: 'deposit',
                });
            } else if(dredged_type == 'demo'){
                layer.confirm('充值成功后，您的账户将由体验金账户升级为交易账户，体验金账户将失效', {
                    btn: ['取消', '继续'], //按钮
                    title: '提示'
                }, function () {
                    layer.closeAll();
                }, function () {
                    confirmDeposit();
                });
            } else {
                confirmDeposit();
            }
            
            function confirmDeposit() {
                if ($scope.deposit.type === 'invest' || $scope.deposit.type === 'alipay') {
                    // if ($scope.personal.profile_check != 3) {
                    //     openSystemMdl('deposit');
                    //     return;
                    // }
                    var platform = $scope.deposit.type === 'alipay' ? 4 : undefined;
                    var w = $window.open('/waiting');

                    asset.deposit(amount, platform).then(function(data) {
                        if (!data) return;
                        if (data.is_succ) {
                            var token = $cookies["token"] || '';
                            var url = data.data.url + '?token='+token;
                            openDepositMdl('depositFinish');
                            w.location = url;
                        } else {
                            layer.msg(data.message);
                            w.close();
                        }
                    });
                } else {
                    if ($scope.isDeposit) return;
                    $scope.isDeposit = true;

                    asset.walletDeposit(amount).then(function (data) {
                        // console.log(data);
                        $scope.isDeposit = false;
                        if (!data) return;
                        if (data.is_succ) {
                            $scope.walletDepositSucc = true;
                        } else {
                            layer.msg(data.message);
                        }
                    });
                }
            }
        }

        function changeDepositType (type) {
            $scope.deposit.alipayAbleTip = false;

            if (!$scope.deposit.alipay) {
                $scope.deposit.alipayAbleTip = true;
            }

            if (type === 'invest') {
                $scope.deposit.type = type;
            }
            if ((type === 'wallet') && $scope.deposit.wallet) {
                $scope.deposit.type = type;
            }
            if ((type === 'alipay') && $scope.deposit.alipay) {
                $scope.deposit.type = type;
                $scope.deposit.alipayAbleTip = true;
            }
        }
        function checkInputAmount () {
            // console.log($scope.deposit.amount, $scope.personal.wallet_balance, Number($scope.deposit.amount) > Number($scope.personal.wallet_balance));
            if (Number($scope.deposit.amount) > Number($scope.walletAble)) {
                $scope.deposit.wallet = false;
                
                if ($scope.deposit.type === 'wallet') {
                    $scope.deposit.type = 'invest';
                    $scope.deposit.walletTip = true;
                }
            } else {
                $scope.deposit.wallet = true;
                $scope.deposit.walletTip = false;
            }

            if (Number($scope.deposit.amount) > $scope.alipayAble) {
                $scope.deposit.alipay = false;
                $scope.deposit.alipayAbleTip = true;
                
                if ($scope.deposit.type === 'alipay') {
                    $scope.deposit.type = 'invest';
                    $scope.deposit.alipayTip = true;
                }
            } else {
                $scope.deposit.alipay = true;
                $scope.deposit.alipayTip = false;

                if ($scope.deposit.type !== 'alipay') {
                    $scope.deposit.alipayAbleTip = false;
                }
            }
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
