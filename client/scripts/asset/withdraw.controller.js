;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', 'forex', '$cookies', '$layer'];

    function AssetWithdrawController($rootScope, $scope, $modal, $state, asset, validator, forex, $cookies, $layer) {
        // 缓存当前父scope 给弹窗控制器使用
        var parentScope = $scope;
        parentScope.hasChooseedCard = false
        parentScope.cardList = undefined;

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
            type: $state.params.type || 'invest',
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

        // 获取默认银行卡
        getCard();

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            // 没有选中任何卡时刷新默认卡片
            if (!parentScope.hasChooseedCard) {
                getCard()
            }
            // 通知所有子控器 
            $rootScope.$broadcast('bindCardSuccess')
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
                    $scope.withdraw.card.bank = data.data.bank_name;
                    $scope.withdraw.card.address = data.data.bank_addr;
                    $scope.withdraw.card.province = data.data.province;
                    $scope.withdraw.card.city = data.data.city;
                    // 判断是否为英文简称
                    $scope.withdraw.card.is_short = /^[A-Za-z]/.test(data.data.bank_name);
                }
            });
        }

        /**
         * // 校验开户状态
         * @param {* 真实账户回调 } liveTodo 
         */
        function switchDredge(demotodo, liveTodo) {
            // 获取开通状态
            var dredged_type = $scope.personal.dredged_type;
            // 未开通
            if (dredged_type == 'unknow') {
                $scope.$emit('global.openDredgeMdl', {
                    position: 'withdraw'
                });
            } else if (dredged_type == 'demo') {
                // layer.msg('您当前是体验金账户，无法使用提现功能！');
                demotodo && demotodo()
            } else if (dredged_type == 'live') {
                liveTodo && liveTodo()
            }
        }

        function openCardMdl() {
            checkAuthen(function () {
                var personal = {
                    verified: $scope.personal.verified,
                    realname: $scope.personal.realname,
                    profile_check: $scope.personal.profile_check,
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
            }, 'binding')
        }

        function openManageCardMdl(type) {
            $modal.open({
                templateUrl: '/views/asset/manage_card_modal.html',
                size: 'md',
                backdrop: 'true',
                controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', function ($scope, $modalInstance, $state, asset, $timeout) {
                    $timeout(function () {
                        $scope.$broadcast('hideLoadingImg');
                    }, 0)
                    $scope.closeModal = closeModal;
                    $scope.manageType = type
                    $scope.openAddCardModal = openCardMdl
                    // 添加新的银行卡 刷新列表 
                    $scope.$on('bindCardSuccess', function () {
                        getCardList($scope).then(function () {
                            $scope.cardList = parentScope.cardList
                            isShortBankName($scope.cardList)
                        })
                    })
                    if (type != 'delete') {
                        // 获取银行卡列表
                        if (!parentScope.cardList) {
                            getCardList($scope).then(function () {
                                $scope.cardList = parentScope.cardList
                                isShortBankName($scope.cardList)
                            })
                        } else {
                            $scope.cardList = parentScope.cardList
                        }
                    }

                    function isShortBankName(list) {
                        angular.forEach(list, function (value) {
                            value.is_short = /^[A-Za-z]/.test(value.bank_name)
                        })
                    }

                    $scope.chooseCard = function (card) {
                        console.log(card)
                        parentScope.withdraw.card.id = card.id;
                        parentScope.withdraw.card.number = card.card_no;
                        parentScope.withdraw.card.bank = card.bank_name;
                        parentScope.withdraw.card.address = card.bank_addr;
                        parentScope.withdraw.card.province = card.province;
                        parentScope.withdraw.card.city = card.city;
                        // 更改选中状态
                        parentScope.hasChooseedCard = true;
                        // 判断是否为英文简称
                        parentScope.withdraw.card.is_short = /^[A-Za-z]/.test(card.bank_name);
                        closeModal()
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

        function openVerifyMdl(type) {
            // 没有完成实名认证
            $modal.open({
                templateUrl: '/views/asset/verify_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.closeModal = closeModal;
                    $scope.type = type;
                    $scope.dredgeType = 'unknow';

                    switchDredge(function () {
                        $scope.dredgeType = 'demo'
                    }, function () {
                        $scope.dredgeType = 'live'
                    })

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

        function changeWithdrawType(type) {
            $scope.withdraw.type = type;
            $scope.withdraw.maxAmount = type === 'invest' ? $scope.maxAmountInvest : $scope.maxAmountWallet;
        }

        function checkAuthen(finishTodo, type) {
            // 体验金账户未完成实名认证
            var verifyStatus = $scope.personal.verify_status
            if (!$scope.personal.finishVerify) {
                // 资料已经提交审核
                if (verifyStatus == 5) {
                    $layer({
                        // title: '系统提示',
                        // msgClass: 'font-danger',
                        size: 'sm',
                        btnsClass: 'text-right',
                        msg: '您的账户正在审核中，请等待审核通过后再进行充值操作',
                        btns: {
                            '确定': function () { }
                        }
                    })
                }
                // 未上传过身份证 或者 实名被拒绝
                if (verifyStatus < 5) {
                    openVerifyMdl(type || 'withdraw')
                }
            } else {
                finishTodo && finishTodo()
            }
        }

        // 提现
        $scope.clickable = true;
        function toWithdraw() {
            checkAuthen(function () {
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
                    asset.withdraw($scope.withdraw.amount, $scope.withdraw.card.id).then(function (data) {
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
            asset.walletWithdraw($scope.withdraw.amount).then(function (data) {
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
