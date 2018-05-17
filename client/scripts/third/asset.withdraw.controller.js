;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ThirdWithdrawController', ThirdWithdrawController);

        ThirdWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', '$cookies', '$layer'];

    function ThirdWithdrawController($rootScope, $scope, $modal, $state, asset, validator, $cookies, $layer) {
        // 缓存当前父scope 给弹窗控制器使用
        var parentScope = $scope;
        parentScope.hasChooseedCard = false
        parentScope.cardList = undefined;
        parentScope.manageCardModalInstance = undefined;

        var companyName = $cookies["company_name"];

        $scope.message = {};
        $scope.messageWallet = {};
        $scope.maxAmountInvest = 0;
        $scope.maxAmountWallet = 0;
        $scope.withdrawNotice = '';
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
            type: $state.params.type || 'invest',   // invest, wallet
            accountType: 'bank',    // bank, cse
            cseAccount: undefined,
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
        layer.load(2);

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.toWithdraw = toWithdraw;
        $scope.openWithdrawMdl = openWithdrawMdl;
        $scope.openCardMdl = openCardMdl;
        $scope.openManageCardMdl = openManageCardMdl;
        $scope.changeWithdrawType = changeWithdrawType;
        $scope.openChangeWithTypeMdl = openChangeWithTypeMdl;

        // 获取默认银行卡
        getCard();

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            // 通知所有子控器 
            if (!parentScope.hasChooseedCard) {
                getCard()
            }
        });

        // 汇率
        asset.getFXRate().then(function (data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                $scope.withdraw.FXRate.value = data.data.out_rate;
            }
        });
        // 判断出金状态, 获取可提取的最大金额
        asset.getIsWithdraw().then(function (data) {
            layer.closeAll();
            if (!data) return;
            // console.info(data);
            $scope.withdrawMessageSucc = true;
            if (data.is_succ) {
                if (data.data.status == 0) {
                    $scope.message = {
                        is_succ: false,
                        error_msg: data.data.status_message
                    };
                } else {
                    $scope.message = {
                        is_succ: true
                    };
                    $scope.withdrawNotice = data.data.notice;
                    $scope.maxAmountInvest = data.data.amount < 0 ? 0 : data.data.amount;
                    if ($scope.withdraw.type === 'invest') {
                        $scope.withdraw.maxAmount = $scope.maxAmountInvest;
                    }
                }

            } else {
                $scope.message = {
                    is_succ: false,
                    error_msg: data.message
                };
            }
        });
        // wallet可出金情况
        asset.walletCanWithdraw().then(function (data) {
            if (!data) return;
            // console.log(data);
            // $scope.withdrawMessageSucc = true;
            $scope.messageWallet = data;
            $scope.maxAmountWallet = data.data;
            if ($scope.withdraw.type === 'wallet') {
                $scope.withdraw.maxAmount = $scope.maxAmountWallet;
            }
        });

        // 获取银行卡信息
        function getCard() {
            asset.getCard().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ && data.data) {
                    $scope.withdraw.card.id = data.data.id;
                    $scope.withdraw.card.number = data.data.card_no;
                    $scope.withdraw.card.bank_name = data.data.bank_name;
                    $scope.withdraw.card.address = data.data.bank_addr;
                    $scope.withdraw.card.province = data.data.province;
                    $scope.withdraw.card.city = data.data.city;
                    $scope.withdraw.card.bank_img = data.data.bank_img;
                    $scope.withdraw.card.bank_code = data.data.bank_code;
                    // 判断是否为英文简称
                    $scope.withdraw.card.is_short = /^[A-Za-z]/.test(data.data.bank_name);
                }
            });
        }

        function openCardMdl() {
            if(parentScope.manageCardModalInstance){
                parentScope.manageCardModalInstance.dismiss()
            }
            // 检测认证状态
            $scope.$emit('main.checkAuthenFlow', {
                ctrlName: 'ThirdWithdrawController',
                callback: function () {
                    var personal = {
                        verified: $scope.main.verified,
                        realname: $scope.main.realname,
                        profile_check: $scope.main.profile_check,
                    };
                    $modal.open({
                        templateUrl: '/views/third/asset/card_modal.html',
                        size: 'md',
                        controller: 'ThirdCardController',
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
            })
        }

        function openManageCardMdl(type, card) {
            $modal.open({
                templateUrl: '/views/third/asset/manage_card_modal.html',
                size: 'md',
                backdrop: 'true',
                controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', function ($scope, $modalInstance, $state, asset, $timeout) {
                    parentScope.manageCardModalInstance = $modalInstance
                    $timeout(function () {
                        $scope.$broadcast('hideLoadingImg');
                    }, 0)
                    $scope.closeModal = closeModal;
                    $scope.manageType = type
                    $scope.openAddCardModal = openCardMdl
                    //刷新列表 
                    getCardList($scope).then(function () {
                        $scope.cardList = parentScope.cardList
                    })

                    $scope.chooseCard = function (card) {
                        console.log(card)
                        parentScope.withdraw.card.id = card.id;
                        parentScope.withdraw.card.number = card.card_no;
                        parentScope.withdraw.card.address = card.bank_addr;
                        parentScope.withdraw.card.province = card.province;
                        parentScope.withdraw.card.bank_name = card.bank_name;
                        parentScope.withdraw.card.bank_name_cn = card.bank_name_cn;
                        parentScope.withdraw.card.city = card.city;
                        parentScope.withdraw.card.bank_code = card.bank_code;
                        parentScope.withdraw.card.bank_img = card.bank_img;
                        // 更改选中状态
                        parentScope.hasChooseedCard = true;
                        // 判断是否为英文简称
                        parentScope.withdraw.card.is_short = /^[A-Za-z]/.test(card.bank_name);
                        closeModal()
                    }

                    $scope.confirmDeleteCard = function (card) {
                        closeModal()
                        openManageCardMdl('delete', card)
                    }

                    $scope.deleteCard = function () {
                        asset.deleteCard(card.id).then(function (data) {
                            if (data.is_succ) {
                                getCardList($scope).then(function () {
                                    $scope.cardList = parentScope.cardList
                                    if ($scope.cardList.length == 0) {
                                        parentScope.withdraw.card = {}
                                    }
                                })
                                getCard()
                                closeModal()
                            }
                        })
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }

        function getCardList(_scope) {
            _scope.$emit('showLoadingImg');
            return asset.getCardList().then(function (data) {
                _scope.$broadcast('hideLoadingImg');
                if (!data) {
                    console.info('获取银行卡列表失败！')
                    return
                }
                parentScope.cardList = data.data
            })
        }

        // 提现相关的各种弹窗提示
        function openWithdrawMdl(message) {
            var withdraw = $scope.withdraw;
            // var isMessage = $scope.message;

            $modal.open({
                templateUrl: '/views/third/asset/withdraw_modal.html',
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
                templateUrl: '/views/third/asset/withdraw_modal2.html',
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

        function changeWithdrawType(type) {
            $scope.withdraw.type = type;
            $scope.withdraw.maxAmount = type === 'invest' ? $scope.maxAmountInvest : $scope.maxAmountWallet;
        }

        // 提现
        $scope.clickable = true;
        function toWithdraw() {
            // 通过认证
            $scope.$emit('main.checkAuthenFlow', {
                ctrlName: 'ThirdWithdrawController',
                callback: function () {
                    showErr('amount');
                    // console.info($scope.withdrawForm.$invalid);
                    if ($scope.withdrawForm.$invalid) {
                        return;
                    }
                    if ($scope.clickable == false) {
                        return;
                    }

                    $scope.clickable = false;

                    if ($scope.withdraw.type === 'invest') {
                        withdrawInvest();
                    } else {
                        withdrawWallet();
                    }
                }
            })
        }

        function withdrawInvest() {
            asset.getIsWithdraw($scope.withdraw.amount).then(function (data) {
                // $scope.message = data;
                // console.info(data);
                if (data && data.is_succ) {
                    if (data.data.bonus == 0) {
                        withdraw();
                    } else {
                        layer.confirm('现在提现会导致您的账户红包失效，是否继续提现？', {
                            btn: ['取消', '继续提现'], //按钮
                        }, function () {
                            $scope.clickable = true;
                            layer.closeAll();
                        }, function () {
                            withdraw();
                        });
                    }
                } else {
                    // console.info($scope.message);
                    openMessageMdl();
                    $scope.clickable = true;
                }

                function withdraw() {
                    var paramsAsset = {
                        amount: Number($scope.withdraw.amount).toFixed(2)
                    };
                    if ($scope.withdraw.accountType === 'bank') {
                        paramsAsset.bank_card_id = $scope.withdraw.card.id;
                    } else {
                        paramsAsset.third_type = 1;
                        paramsAsset.third_account = $scope.withdraw.cseAccount;
                    }
                    asset.withdraw(paramsAsset).then(function (data) {
                        if (!data) return;
                        $scope.clickable = true;

                        if (data.is_succ) {
                            $scope.withdraw.success = true;
                            openWithdrawMdl("withdrawSucc");

                            $state.go('space.asset.subpage', {
                                subpage: 'withdraw',
                                type: 'invest'
                            }, { reload: true });
                        } else {
                            var msg = data.message;
                            openWithdrawMdl(msg);
                        }
                    });
                }
            });
        }

        function withdrawWallet() {
            asset.walletWithdraw($scope.withdraw.card.id, $scope.withdraw.amount).then(function (data) {
                // console.log(data);
                $scope.clickable = true;
                if (!data) return;
                if (data.is_succ) {
                    $scope.withdraw.success = true;
                    openWithdrawMdl("withdrawSucc");

                    $state.go('space.asset.subpage', {
                        subpage: 'withdraw',
                        type: 'wallet'
                    }, { reload: true });
                } else {
                    var msg = data.message;
                    openWithdrawMdl(msg);
                }
            });
        }
        
        function changeWithdrawAccountType (accountType) {
            $scope.withdraw.accountType = accountType;
        }

        function openChangeWithTypeMdl () {
            $modal.open({
                templateUrl: '/views/asset/withdraw_dep_type_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            withdrawType: $scope.withdraw.accountType
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope) {
                    console.log(passedScope);
                    $scope.withdraw = {
                        accountType: passedScope.withdrawType
                    };
                    $scope.closeModal = closeModal;
                    $scope.selectType = selectType;
                    $scope.changeType = changeType;

                    function selectType(accountType) {
                        $scope.withdraw.accountType = accountType;
                    }

                    function changeType() {
                        closeModal();
                        changeWithdrawAccountType($scope.withdraw.accountType);
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
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

        $scope.formatText = function (text) {
            if (!text) return '';
            var newText = text.replace(/\\r\\n/g, '<br>');
            return '6.' + newText;
        }
    }
})();
