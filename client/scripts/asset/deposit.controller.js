;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator', 'account', '$layer', 'previewImage'];

    function AssetDepositController($scope, $window, $cookies, $modal, $state, asset, validator, account, $layer, previewImage) {

        var depositType = {
            invest: "网银支付",
            tele: "电汇",
            wallet: "零钱包",
            alipay: "支付宝"
        };
        $scope.deposit = {
            minAmount: 0,       // 最低充值金额
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            notice: null,       // 网银入金后端提示
            quota_full_notice: null,    // 网银限额按钮提示
            type: $state.params.type || 'tele',
            amount: undefined,
            teleFile: undefined,    //电汇凭证
            submitBtn: true,
            isAbleDeposit: 0    //是否能够入金（是否上传凭证）evidence  0不需要上传，1需要上传，2未审核
        };
        $scope.depositTypeCN = depositType[$scope.deposit.type];
        $scope.walletDepositSucc = false;
        $scope.teleDepositSucc = false;
        $scope.walletAble = 0;
        $scope.alipayAble = 3000;   // 支付宝入金限额

        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.isLoading = false;
        $scope.toDeposit = toDeposit;
        $scope.openDepositMdl = openDepositMdl;
        $scope.openDepositRuleMdl = openDepositRuleMdl;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.checkInputAmount = checkInputAmount;
        $scope.openChangeDepTypeMdl = openChangeDepTypeMdl;
        $scope.toHelp = toHelp;

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
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                $scope.deposit.quota_full_notice = data.data.quota_full_notice;
                $scope.deposit.notice = data.data.notice;
                $scope.deposit.minAmount = parseInt(data.data.min);
                $scope.deposit.isAbleDeposit = data.data.evidence;
                // $scope.deposit.isAbleDeposit = 1;
                checkInputAmount();
                // 网银入金限制
                checkInvestLimit();
                
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

        function checkAuthenFlow() {
            var dredged_type = $scope.personal.dredged_type;
            var verify_status = $scope.personal.verify_status;
            var passedAuthen = $scope.personal.passedAuthen;

            // 通过直接return
            if (passedAuthen) {
                return true
            } else {
                if (dredged_type == 'unknow') {
                    $scope.$emit('global.openDredgeMdl', {
                        position: 'withdraw'
                    });
                } else {
                    // 关闭其余弹窗
                    if (parentScope.manageCardModalInstance) {
                        parentScope.manageCardModalInstance.dismiss()
                    }
                    if (verify_status == 5) {
                        $layer({
                            // title: '系统提示',
                            // msgClass: 'font-danger',
                            size: 'sm',
                            btnsClass: 'text-right',
                            msg: '您的账户正在审核中，请等待审核通过后再进行提现操作',
                            btns: {
                                '确定': function () { }
                            }
                        })
                    } else {
                        // 没有完成实名认证
                        $modal.open({
                            templateUrl: '/views/asset/verify_modal.html',
                            size: 'sm',
                            backdrop: true,
                            controller: function ($scope, $modalInstance) {
                                $scope.closeModal = closeModal;
                                $scope.dredgeType = dredgeType;

                                function closeModal() {
                                    $modalInstance.dismiss();
                                }
                            }
                        });
                    }
                }
                return false
            }
        }

        function checkInvestLimit () {
            if ($scope.deposit.type !== 'invest') return;
            if ($scope.deposit.isAbleDeposit === 1) {
                openDepositMdl('depositLimit', openChangeDepTypeMdl, {
                    msgTip: '您网银入金累计已超过$3000，需上传历史充值凭证后才可继续使用网银支付功能。',
                    msgBtn: '选择其他支付方式',
                    msgTitle: '提示'
                });
            }
            if ($scope.deposit.isAbleDeposit === 2) {
                openDepositMdl('depositLimitCheck');
            }
        }

        // 充值  还未完成
        function toDeposit(amount) {
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetDepositController',
                callback: function () {
                    var amount = $scope.deposit.amount;

                    if (typeof amount === 'undefined') {
                        showErr('amount');
                        return;
                    }
                    amount = Number(amount).toFixed(2);

                    confirmDeposit();
            
                    function confirmDeposit() {
                        $scope.isLoading = true;
                        if ($scope.deposit.type === 'invest' || $scope.deposit.type === 'alipay') {
                            //网银大额入金限制
                            if ($scope.deposit.type === 'invest') {
                                asset.getDepositLimit().then(function (data) {
                                    // console.log(data);
                                    if (!data) return;
                                    if (data.is_succ) {
                                        $scope.deposit.isAbleDeposit = data.data.evidence;
                                        if ($scope.deposit.isAbleDeposit === 0) {
                                            $scope.isLoading = false;
                                            var amountRMB = Number(amount*$scope.deposit.FXRate.value).toFixed(2);
                                            var amountFee = Number(amount*$scope.deposit.FXRate.value*0.02).toFixed(2);
                                            openDepositMdl('confirmDeposit', submitDeposit, {
                                                amountDollar: amount,
                                                amountRMB: amountRMB,
                                                amountFee: amountFee,
                                                amountTotal: Number(amountRMB) + Number(amountFee),
                                                msgBtn: '确认'
                                            });
                                        } else {
                                            $scope.isLoading = false;
                                            checkInvestLimit();
                                        }
                                    }
                                });
                            } else {
                                submitDeposit();
                            }

                            function submitDeposit() {
                                var platform = $scope.deposit.type === 'alipay' ? 4 : undefined;
                                var w = $window.open('/waiting');

                                asset.deposit(amount, platform).then(function (data) {
                                    $scope.isLoading = false;
                                    if (!data) return;
                                    if (data.is_succ) {
                                        var token = $cookies["token"] || '';
                                        var url = data.data.url + '?token=' + token;
                                        openDepositMdl('depositFinish');
                                        w.location = url;
                                    } else {
                                        layer.msg(data.message);
                                        w.close();
                                    }
                                });
                            }
                        } 
                        if ($scope.deposit.type === 'wallet') {

                            asset.walletDeposit(amount).then(function (data) {
                                $scope.isLoading = false;
                                // console.log(data);
                                if (!data) return;
                                if (data.is_succ) {
                                    $scope.walletDepositSucc = true;
                                } else {
                                    if ($scope.isDeposit) return;
                                    $scope.isDeposit = true;

                                    asset.walletDeposit(amount).then(function (data) {
                                        $scope.isLoading = false;
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
                            })
                        }
                    
                        if ($scope.deposit.type === 'tele') {
                            if (!$scope.deposit.teleFile) {
                                $scope.isLoading = false;
                                layer.msg('请上传电汇凭证');
                            } else {
                                asset.teleDeposit(amount, $scope.deposit.teleFile).then(function (data) {
                                    console.log(data);
                                    $scope.isLoading = false;
                                    if (data.is_succ) {
                                        $scope.teleDepositSucc = true;
                                    } else {
                                        layer.msg(data.message);
                                    }
                                });
                            }
                        }
                    }
                }
            })
        }
   

        function changeDepositType(type) {
            $scope.deposit.type = type;
            $scope.depositTypeCN = depositType[$scope.deposit.type];
            checkInvestLimit();
        }

        function checkInputAmount() {
            if ($scope.isLoading) return;
            if ($scope.deposit.type === 'wallet') {
                if (Number($scope.deposit.amount) > Number($scope.walletAble)) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
            } else if ($scope.deposit.type === 'alipay') {
                if (Number($scope.deposit.amount) > $scope.alipayAble) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
            } else if ($scope.deposit.type === 'invest') {
                if ($scope.deposit.isAbleDeposit != 0) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
            } else {
                $scope.deposit.submitBtn = true;
            }
        }

        function toHelp() {
            OpenChat();
        }

        // 入金相关的各种弹窗提示
        function openDepositMdl(type, callback, msgInfo) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.msgInfo = msgInfo || {};
                    $scope.type = type;
                    $scope.closeModal = closeModal;
                    $scope.verify = verify;
                    $scope.openChat = openChat;
                    $scope.depositSucc = depositSucc;
                    $scope.goOnDeposit = goOnDeposit;

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

                    //继续入金
                    function goOnDeposit () {
                        callback && callback();
                        closeModal();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }

        function openDepositRuleMdl(type) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'md',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.type = type;
                    $scope.msgInfo = {
                        msgTitle: '网银入金规则'
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }

        function openChangeDepTypeMdl () {
            $modal.open({
                templateUrl: '/views/asset/deposit_dep_type_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            depositType: $scope.deposit.type,
                            walletAble: $scope.walletAble
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope) {
                    console.log(passedScope);
                    $scope.deposit = {
                        type: passedScope.depositType,
                        walletAble: passedScope.walletAble
                    };
                    $scope.closeModal = closeModal;
                    $scope.selectType = selectType;
                    $scope.changeType = changeType;

                    function selectType (type) {
                        $scope.deposit.type = type;
                    }

                    function changeType () {
                        changeDepositType($scope.deposit.type);
                        checkInputAmount();
                        closeModal();
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
    }
})();
