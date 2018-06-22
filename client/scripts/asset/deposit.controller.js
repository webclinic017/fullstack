;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$scope', '$window', '$document', '$cookies', '$modal', '$state', 'asset', 'validator', 'account', '$layer', 'previewImage'];

    function AssetDepositController($scope, $window, $document, $cookies, $modal, $state, asset, validator, account, $layer, previewImage) {

        $scope.depositTypeLst = {}; // 支付方式列表
        $scope.deposit = {
            minAmount: 0,       // 网银最低充值金额
            currency: null,     // 支付币种
            quota_full_notice: null,    // 网银限额按钮提示
            type: $state.params.type || null,   // 充值类型
            amount: undefined,                  // 充值金额
            teleFile: undefined,    //电汇凭证
            submitBtn: false,                   // 充值按钮true/false
            isAbleDeposit: 0,    //是否能够入金（是否上传凭证）evidence  0不需要上传，1需要上传，2未审核
            depositCard: undefined
        };
        $scope.currencyStatus = false; // 选择币种列表
        $scope.walletDepositSucc = false;
        $scope.teleDepositSucc = false;
        $scope.walletAble = 0;      //零钱包余额

        $scope.isLoading = false;
        $scope.toDeposit = toDeposit;
        $scope.openDepositMdl = openDepositMdl;
        $scope.openDepositRuleMdl = openDepositRuleMdl;
        $scope.checkInputAmount = checkInputAmount;
        $scope.openChangeDepTypeMdl = openChangeDepTypeMdl;
        $scope.toHelp = toHelp;
        $scope.openCurrency = openCurrency;
        $scope.selcetCurrency = selcetCurrency;

        // 获取支付方式列表
        asset.getDepositPlatform().then(function (data) {
            if (data.is_succ) {
                // 因为使用此接口之前已经定义好了各支付方式的key，所以这里沿用以前的key，做一下替换
                angular.forEach(data.data, function (value, index) {
                    if (value.key === 'bank') value.key = 'invest';
                    if (value.key === 'transfer') value.key = 'tele';
                    if (value.key === 'cse_wallet') value.key = 'cseWallet';

                    if (value.default && !$scope.deposit.type) {
                        $scope.deposit.type = value.key;
                    }

                    $scope.depositTypeLst[value.key] = value;
                });
                
                // 设置初始币种
                if ($scope.deposit.type) {
                    $scope.deposit.currency = $scope.depositTypeLst[$scope.deposit.type].currency.length ? $scope.depositTypeLst[$scope.deposit.type].currency[0] : null;
                }
            }
        });

        // 获取入金限制
        asset.getDepositLimit().then(function (data) {
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                $scope.deposit.quota_full_notice = data.data.quota_full_notice;
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

        // 网银入金限制
        function checkInvestLimit () {
            if ($scope.deposit.type !== 'invest') return;
            if ($scope.deposit.isAbleDeposit === 1) {
                openDepositMdl('depositLimit', openChangeDepTypeMdl, {
                    msgTip: '您有未上传的充值凭证，需上传历史充值凭证后才可继续使用网银支付功能。',
                    msgBtn: '选择其他支付方式',
                    msgTitle: '提示'
                });
            }
            if ($scope.deposit.isAbleDeposit === 2) {
                openDepositMdl('depositLimitCheck');
            }
        }

        // 判断网银绑定银行卡
        function checkInvestBank () {
            if ($scope.deposit.type !== 'invest') return;
            asset.checkInvestBank().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    if (data.data.depositCard) {
                        $scope.deposit.depositCard = data.data.depositCard;
                        checkInputAmount();
                    } else {
                        openDepositMdl('bindBankCard', null, {
                            cardName: $scope.personal.realname,
                            msgTitle: '填写支付银行卡信息'
                        });
                    }
                }
            });
        }

        //判断按钮 deposit.submitBtn
        function checkInputAmount() {
            if ($scope.isLoading) return;
            if (!$scope.deposit.type || !$scope.deposit.amount) {
                $scope.deposit.submitBtn = false;
                return;
            }
            if ($scope.deposit.type === 'invest') {
                if (Number($scope.deposit.amount) < $scope.deposit.minAmount) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
                if (!$scope.deposit.depositCard) {
                    $scope.deposit.submitBtn = false;
                }
                return;
            }
            if ($scope.deposit.type === 'wallet') {
                if (Number($scope.deposit.amount) > Number($scope.walletAble)) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
                return;
            }
            $scope.deposit.submitBtn = true;
        }

        // 切换充值方式
        function changeDepositType(type) {
            $scope.deposit.type = type;
            $scope.deposit.currency = $scope.depositTypeLst[$scope.deposit.type].currency.length ? $scope.depositTypeLst[$scope.deposit.type].currency[0] : null;
            checkInvestLimit();
            checkInputAmount();
            checkInvestBank();
        }

        // 切换充值方式弹窗
        function openChangeDepTypeMdl () {
            $modal.open({
                templateUrl: '/views/asset/deposit_dep_type_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            depositType: $scope.deposit.type,
                            walletAble: $scope.walletAble,
                            depositTypeLst: $scope.depositTypeLst
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope) {
                    // console.log(passedScope);
                    $scope.deposit = {
                        type: passedScope.depositType,
                        walletAble: passedScope.walletAble,
                        depositTypeLst: passedScope.depositTypeLst
                    };
                    $scope.closeModal = closeModal;
                    $scope.selectType = selectType;
                    $scope.changeType = changeType;

                    function selectType(type) {
                        $scope.deposit.type = type;
                    }

                    function changeType() {
                        closeModal();
                        changeDepositType($scope.deposit.type);
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }

        //选择币种
        $document.on('click', function () {
            $scope.$apply(function () {
                $scope.currencyStatus = false;
            });
        });
        function openCurrency (e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.currencyStatus = !$scope.currencyStatus;
        }
        function selcetCurrency (item) {
            $scope.currencyStatus = false;
            $scope.deposit.currency = item;
        }

        // 充值  还未完成
        function toDeposit(amount) {
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetDepositController',
                callback: function () {
                    var amount = $scope.deposit.amount;

                    if (typeof amount === 'undefined') {
                        return;
                    }
                    amount = Number(amount).toFixed(2);

                    confirmDeposit();

                    function confirmDeposit() {
                        $scope.isLoading = true;
                        if (($scope.deposit.type !== 'wallet') && ($scope.deposit.type !== 'tele')) {
                            //第三方支付
                            if ($scope.deposit.type === 'cseWallet') {
                                $scope.isLoading = false;
                                openDepositRuleMdl({
                                    type: 'cseMessage',
                                    tit: '是否有CSE Wallet帐号？',
                                    pop: $scope.depositTypeLst[$scope.deposit.type].pop,
                                    url: $scope.depositTypeLst[$scope.deposit.type].url,
                                    callback: submitDeposit
                                });
                            } else if ($scope.deposit.type === 'invest') {
                                asset.getDepositLimit().then(function (data) {
                                    // console.log(data);
                                    if (!data) return;
                                    if (data.is_succ) {
                                        $scope.deposit.isAbleDeposit = data.data.evidence;
                                        $scope.isLoading = false;
                                        if ($scope.deposit.isAbleDeposit === 0) {
                                            computeAmount();
                                        } else {
                                            checkInvestLimit();
                                        }
                                    }
                                });
                            } else {
                                $scope.isLoading = false;
                                computeAmount();
                            }

                            function computeAmount () {
                                var poundage = $scope.depositTypeLst[$scope.deposit.type].poundage.substring(0, $scope.depositTypeLst[$scope.deposit.type].poundage.length-1)*0.01;
                                var amountRMB = Number(amount*$scope.deposit.currency.rate_in).toFixed(2);
                                var amountFee = Number(amountRMB*poundage).toFixed(2);
                                openDepositMdl('confirmDeposit', submitDeposit, {
                                    amountDollar: amount,
                                    amountRMB: amountRMB,
                                    amountFee: amountFee,
                                    amountTotal: $scope.depositTypeLst[$scope.deposit.type].poundage_status ? (Number(amountRMB) + Number(amountFee)).toFixed(2) : Number(amountRMB).toFixed(2),
                                    isFree: $scope.depositTypeLst[$scope.deposit.type].poundage_status,
                                    desc: $scope.depositTypeLst[$scope.deposit.type].poundage_desc,
                                    currency: $scope.deposit.currency,
                                    msgBtn: '确认'
                                });
                            }

                            function submitDeposit() {
                                var p = $scope.depositTypeLst[$scope.deposit.type].platform || undefined;
                                var c = $scope.deposit.currency ? $scope.deposit.currency.currency : undefined;
                                var w = $window.open('/waiting');

                                asset.deposit(amount, p, c).then(function (data) {
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
                    $scope.bindBankCard = bindBankCard;
                    $scope.depositCard = {
                        backErr: false,
                        backMsg: '',
                        num: msgInfo.cardNum || undefined
                    };

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
                    function goOnDeposit() {
                        callback && callback();
                        closeModal();
                    }
                    // 绑定入金银行卡
                    function bindBankCard () {
                        if ($scope.depositCard.backErr) return;
                        if (!$scope.depositCard.num) {
                            $scope.depositCard.backErr = true;
                            $scope.depositCard.backMsg = '请输入银行卡号';
                            return
                        };
                        asset.bindInvestBank($scope.depositCard.num).then(function (data) {
                            // console.log(data);
                            if (data.is_succ) {
                                checkInvestBank();
                                closeModal();
                            } else {
                                $scope.depositCard.backErr = true;
                                $scope.depositCard.backMsg = data.message;
                            }
                        });
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }

        function openDepositRuleMdl(params) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'md',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state) {
                    $scope.type = params.type;
                    $scope.msgInfo = {
                        msgTitle: params.tit || '提示',
                        msgPopTitle: params.pop ? params.pop.title : '',
                        msgPopContent: params.pop ? params.pop.content : '',
                        msgUrl: params.url || ''
                    };
                    $scope.callback = params.callback || null;
                    $scope.closeModal = closeModal;
                    $scope.toCse = function () {
                        window.open($scope.msgInfo.msgUrl);
                    };
                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }
    }
})();
