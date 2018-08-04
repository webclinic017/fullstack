;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('PandaAssetController', PandaAssetController);

    PandaAssetController.$inject = ['$scope', '$window', '$cookies', '$modal', '$state', 'asset', 'validator', 'account', '$layer'];

    function PandaAssetController($scope, $window, $cookies, $modal, $state, asset, validator, account, $layer) {

        var depositType = {
            invest: "网银支付",
            tele: "电汇",
            wallet: "钱包",
            alipay: "支付宝"
        };
        $scope.deposit = {
            minAmount: 0,       // 最低充值金额
            FXRate: {
                // value: ,     // 汇率值
                // timestamp: ,
                // RMB:         // 折合人民币
            },
            type: $state.params.type || 'tele',
            amount: undefined,
            teleFile: undefined,    //电汇凭证
            submitBtn: true
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
        $scope.verifyInfo = {
            status: false,
            msg: '网络错误，请联系客服'
        };
        $scope.isLoading = false;
        $scope.toDeposit = toDeposit;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.checkInputAmount = checkInputAmount;
        $scope.openChangeDepTypeMdl = openChangeDepTypeMdl;

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
            }
        });
        // 获取钱包 可用金额
        asset.walletCanWithdraw().then(function (data) {
            if (!data) return;
            // console.log(data);
            $scope.walletAble = data.data;
            if ($state.params.type === 'wallet') {
                $scope.deposit.amount = $scope.walletAble;
            }
        });
        //获取认证状态
        account.getAuthStatus().then(function (data) {
            if (data.is_succ) {
                if (data.data.status == 6) {
                    $scope.verifyInfo = {
                        status: true,
                        msg: ''
                    };
                } else {
                    $scope.verifyInfo = {
                        status: false,
                        msg: '您还未认证通过，请登录熊猫外汇app提交认证或等待认证通过后即可入金',
                    };
                }
            } else {
                $scope.verifyInfo = {
                    status: false,
                    msg: data.message,
                };
            }
        });

        $scope.$on('panda.checkAuthenFlow', function (e, resolve) {
            
            if (resolve && resolve.ctrlName) {
                if (checkAuthenFlow()) {
                    resolve.callback()
                }
            } else {
                console.warn('call global.checkAuthenFlow error, due to no ctrlName')
            }
        })

        $scope.returnAsset = function () {
            $scope.walletDepositSucc = false;
            $scope.teleDepositSucc = false;
        };

        // 充值  还未完成
        function toDeposit(amount) {
            $scope.$emit('panda.checkAuthenFlow', {
                ctrlName: 'PandaAssetController',
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
                            var platform = $scope.deposit.type === 'alipay' ? 4 : undefined;
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
   
        function openChangeDepTypeMdl () {
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

        function changeDepositType(type) {
            $scope.deposit.type = type;
            $scope.depositTypeCN = depositType[$scope.deposit.type];
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
            } else {
                $scope.deposit.submitBtn = true;
            }
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

        // 校验认证状态，以及相关弹窗操作
        function checkAuthenFlow() {
            if ($scope.verifyInfo.status) {
                return true;
            } else {
                openMsgMdl({
                    size: 'sm',
                    btnsClass: 'text-right',
                    msg: $scope.verifyInfo.msg,
                    btns: {
                        '确定': function () { }
                    }
                })
                return false;
            }
        }

        function openMsgMdl (params) {
            $modal.open({
                templateUrl: '/views/template/$layer_modal.html',
                size: params.size || 'sm',
                backdrop: true,
                controller: ['$scope', '$modalInstance',function ($scope, $modalInstance) {
                    // 绑定参数
                    angular.extend($scope, params)
                    //$scope.loading = 0;   0 未loading；1 正在loading；2 loading完毕
                    $scope.loading = 0;
                    $scope.handler = function (value) {
                        var evaled = eval(value)
                        angular.isFunction(evaled) && evaled($scope)
                        if (!params.autoClose) {
                            closeModal()
                        }
                        
                    }

                    $scope.closeModal = closeModal
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }
    }
})();
