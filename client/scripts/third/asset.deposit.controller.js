;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ThirdDepositController', ThirdDepositController);

    ThirdDepositController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator', 'account', '$layer', 'previewImage'];

    function ThirdDepositController($scope, $window, $cookies, $modal, $state, asset, validator, account, $layer, previewImage) {
        var depositType = {
            invest: "网银支付",
            tele: "电汇",
            wallet: "零钱包",
            alipay: "支付宝",
            cseWallet: "第三方支付"
        };
        $scope.deposit = {
            minAmount: 0,       // 最低充值金额
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            type: $state.params.type || 'invest',
            amount: undefined,
            teleFile: undefined,    //电汇凭证
            submitBtn: true,
            bankFile: [],    //入金凭证
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
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.checkInputAmount = checkInputAmount;
        $scope.openChangeDepTypeMdl = openChangeDepTypeMdl;
        $scope.checkImage = checkImage;
        $scope.uploadBankFile = uploadBankFile;

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
                $scope.deposit.minAmount = parseInt(data.data.min);
                $scope.deposit.isAbleDeposit = data.data.evidence;
                checkInputAmount();
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

        function checkImage(e, targetUrl) {
            previewImage.toLargeImage(e, targetUrl);
        }

        function uploadBankFile() {    //提交入金凭证
            console.log($scope.deposit.bankFile);
            if ($scope.deposit.bankFile.length) {
                asset.uploadPaymentEvidence($scope.deposit.bankFile).then(function (data) {
                    if (data.is_succ) {
                        layer.msg('上传成功');
                        asset.getDepositLimit().then(function (data) {
                            // console.log(data);
                            if (!data) return;
                            if (data.is_succ) {
                                $scope.deposit.minAmount = parseInt(data.data.min);
                                $scope.deposit.isAbleDeposit = data.data.evidence;
                                checkInputAmount();
                            }
                        });
                    } else {
                        layer.msg(data.message);
                    }
                });
            } else {
                layer.msg("请先选择需要上传的凭证");
            }
        }

        $scope.returnAsset = function () {
            $scope.walletDepositSucc = false;
            $scope.teleDepositSucc = false;
        };

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

        // 充值  还未完成
        function toDeposit(amount) {
            $scope.$emit('main.checkAuthenFlow', {
                ctrlName: 'ThirdDepositController',
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
                        if ($scope.deposit.type === 'invest' || $scope.deposit.type === 'alipay' || $scope.deposit.type === 'cseWallet') {
                            //网银大额入金限制
                            if ($scope.deposit.type === 'invest') {
                                asset.getDepositLimit().then(function (data) {
                                    // console.log(data);
                                    if (!data) return;
                                    if (data.is_succ) {
                                        $scope.deposit.isAbleDeposit = data.data.evidence;
                                        if ($scope.deposit.isAbleDeposit == 0) {

                                            if ((Number(amount) + Number(data.data.today_total)) >= 3000) {
                                                $scope.isLoading = false;
                                                openDepositMdl('confirmDeposit', submitDeposit, {
                                                    msgTip: '应监管要求，此笔支付成功后，当日累计支付超过3000美金，需提供入金凭证。入金凭证可以是含有姓名、卡号、支付金额的付款成功截图或银行流水单。',
                                                    msgBtn: '继续支付',
                                                    msgTitle: '提示'
                                                });
                                            } else {
                                                $scope.isLoading = false;
                                                openDepositMdl('confirmDeposit', submitDeposit, {
                                                    msgTip: '应监管要求，每日网银支付累计超过3000美金需上传入金凭证。您此次入金未到限额，点击“继续支付”可正常入金。',
                                                    msgBtn: '继续支付',
                                                    msgTitle: '规则说明'
                                                });
                                            }
                                        } else {
                                            $scope.isLoading = false;
                                            $scope.deposit.submitBtn = false;
                                        }
                                    }
                                });
                            } else if ($scope.deposit.type == 'cseWallet') {
                                $layer({
                                    title: '系统提示',
                                    // msgClass: 'font-danger',
                                    size: 'sm',
                                    btnsClass: 'text-right',
                                    msg: '是否有CSE Wallet帐号？',
                                    btns: {
                                        '是': function () {
                                            submitDeposit()
                                        },
                                        '否': function () {
                                            $scope.isLoading = false;
                                            window.open("https://www.csepay.com/zn/")
                                        }
                                    }
                                })
                            } else {
                                submitDeposit();
                            }

                            function submitDeposit() {
                                var depTypeCode = {
                                    alipay: 4,
                                    cseWallet: 17
                                }
                                var platform = depTypeCode[$scope.deposit.type];
                                var w = $window.open('/waiting');

                                asset.deposit(amount, platform).then(function (data) {
                                    $scope.isLoading = false;
                                    if (!data) return;
                                    if (data.is_succ) {
                                        var token = $cookies["token"] || '';
                                        var url = data.data.url + '?token=' + token;
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

        function openChangeDepTypeMdl() {
            $modal.open({
                templateUrl: '/views/template/deposit_dep_type_modal.html',
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

                    function selectType(type) {
                        $scope.deposit.type = type;
                    }

                    function changeType() {
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

        function changeDepositType(type) {
            $scope.deposit.type = type;
            $scope.depositTypeCN = depositType[$scope.deposit.type];
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

        // 入金相关的各种弹窗提示
        function openDepositMdl(type, callback, msgInfo) {
            $modal.open({
                templateUrl: '/views/third/asset/deposit_modal.html',
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
                        closeModal();
                    }

                    //继续入金
                    function goOnDeposit() {
                        callback && callback();
                        closeModal();
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }
    }
})();