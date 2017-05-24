;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex', '$cookies'];

    function AssetWithdrawController($rootScope, $scope, $modal, $state, asset, validator, forex, $cookies) {
        var companyName = $cookies["company_name"];

        $scope.message = {};
        $scope.withdraw = {
            // amount: ,
            // succAmount: ,
            card: {
                //id: ,             // 银行卡 id
                //number: ,         // 卡号
                //bank: ,           // 银行名
                // address:         // 开户行
                // banken:          // 银行英文名
            },
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            success: false,
            minAmount: companyName == 'tigerwit' ? 20 : 100,
            maxAmount: 0
        };
        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };
        $scope.withdrawMessageSucc = false;     // 判断出金状态接口请求情况

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.toWithdraw = toWithdraw;
        $scope.openWithdrawMdl = openWithdrawMdl;
        $scope.openCardMdl = openCardMdl;


        getCard();

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            getCard();
        });
        // 汇率
        asset.getFXRate().then(function(data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                $scope.withdraw.FXRate.value = data.data.out_rate;
            }
        });

        // 判断出金状态, 获取可提取的最大金额
        asset.getIsWithdraw().then(function (data) {
            if (!data) return;
            // console.info(data);
            $scope.withdrawMessageSucc = true;
            if (data.is_succ) {
                $scope.message = {
                    is_succ: true
                };
                $scope.withdraw.maxAmount = data.data.amount < 0 ? 0 : data.data.amount;
            } else {
                $scope.message = {
                    is_succ: false,
                    error_msg: data.message
                };
            }
        });


        // 获取银行卡信息
        function getCard() {
            asset.getCard().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ) {
                    $scope.withdraw.card.id = data.data.id;
                    $scope.withdraw.card.number = data.data.card_no;
                    $scope.withdraw.card.bank = data.data.bank_name;
                    $scope.withdraw.card.address = data.data.bank_addr;
                    $scope.withdraw.card.province = data.data.province;
                    $scope.withdraw.card.city = data.data.city;
                }
            });
        }

        function openCardMdl() {
            var personal = {
                verified: $scope.personal.verified,
                realname: $scope.personal.realname
            };

            $modal.open({
                templateUrl: '/views/asset/card_modal.html',
                size: 'md',
                controller: 'AssetCardController',
                resolve: {
                    passedScope: function () {
                        return {
                            personal: personal,
                            card: $scope.withdraw.card
                        };
                    }
                }
            });
        }



        // 提现相关的各种弹窗提示
        function openWithdrawMdl(message) {
            var withdraw = $scope.withdraw;
            // var isMessage = $scope.message;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.isWithdrawSucc = withdraw.success;
                    $scope.withdrawAmount = withdraw.amount;
                    $scope.closeModal = closeModal;
                    $scope.bindCard = bindCard;
                    $scope.message = message;

                    // 绑定银行卡
                    function bindCard() {
                        closeModal();
                        openCardMdl();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function openMessageMdl() {
            var message = $scope.message;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal2.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.closeModal = closeModal;
                    $scope.message = message;
                    // console.info(message);

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        // 提现
        $scope.clickable = true;
        function toWithdraw() {
            showErr('amount');
            // console.info($scope.withdrawForm.$invalid);
            if ($scope.withdrawForm.$invalid) {
                return;
            }
            if ($scope.clickable == false) {
                return;
            }
            console.log('toWithdraw is click');
            $scope.clickable = false;
            // 判断是否可以出金
            asset.getIsWithdraw($scope.withdraw.amount).then(function (data) {
                // $scope.message = data;
                // console.info(data);
                if (data && data.is_succ) {
                    layer.confirm('现在提现会导致您的账户红包失效，是否继续提现？', {
                        btn: ['取消', '继续提现'], //按钮
                    }, function () {
                        $scope.clickable = true;
                        layer.closeAll();
                    }, function () {
                        asset.withdraw($scope.withdraw.amount, $scope.withdraw.card.id).then(function (data) {
                            if (!data) return;
                            $scope.clickable = true;

                            if (data.is_succ) {
                                $scope.withdraw.success = true;
                                openWithdrawMdl("withdrawSucc");

                                $state.go('space.asset.subpage', {
                                    subpage: 'withdraw'
                                }, { reload: true });
                            } else {
                                var msg = data.message;
                                openWithdrawMdl(msg);
                            }
                        });
                    });

                } else {
                    // console.info($scope.message);
                    openMessageMdl();
                    $scope.clickable = true;

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
