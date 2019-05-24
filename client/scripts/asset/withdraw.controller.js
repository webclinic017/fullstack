;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$rootScope', '$scope', '$modal', '$state', 'asset', 'validator', '$cookies', '$layer', '$document'];

    function AssetWithdrawController($rootScope, $scope, $modal, $state, asset, validator, $cookies, $layer, $document) {
        
        if ($cookies["d&w_czc"] && (!localStorage["withdraw_czc"] || localStorage["withdraw_czc"] !== $cookies["d&w_czc"])) {
            $scope.toTrackEvent('Deposit/withdrawal', 'withdrawal');
            localStorage["withdraw_czc"] = $cookies["d&w_czc"];
        }
        // 缓存当前父scope 给弹窗控制器使用
        $scope.parentScope = $scope;
        var parentScope = $scope;
        parentScope.hasChooseedCard = false
        parentScope.ThirdList = undefined;   // 第三方列表
        parentScope.TransferList = undefined;   // 电汇列表
        parentScope.manageCardModalInstance = undefined;
        var codeRage = [100602, 100605, 100608];

        var companyName = $cookies["company_name"];
        $scope.src = [
            "/white_label/passport/05.png",
            "/white_label/passport/06.png"
        ];
        $scope.message = {};
        // $scope.messageWallet = {};
        $scope.maxAmountInvest = 0;
        // $scope.maxAmountWallet = 0;
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
            third: {
                //id: ,    	    //主键ID
                //account: ,    	//账号-用来显示
                //account_f: ,    //完整账号-出金接口的third_account参数
                //third_type: ,   //第三方平台ID-出金接口的third_type参数
                //platform: ,    	//平台昵称
                //status: ,    	//状态：0不可用，1可用
                // withdraw_type: 1   // 是否需要添加银行卡1需要0不需要
            },
            transfer: {
                // id	
                // country	国家代码
                // bank_name	银行名称
                // cardholder_name	持卡人
                // swift_code	swift code
                // card_no	账号
            },
            type: '',   // invest, wallet
            mt4_id: '',
            accountType: 'bank',    // bank, cse
            thirdAccount: undefined,
            success: false,
            minAmount: companyName == 'tigerwit' ? 20 : 100,
            maxAmount: 0
        };
        $scope.withdrawTypeLst = {}; // 出金方式列表
        $scope.currencyStatus = false; // 选择币种列表
        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };
        $scope.withdrawMessageSucc = false;     // 判断出金状态接口请求情况
        layer.load(2);
        $scope.$watch('{id: accountItem.mt4_id, type: selectWay.type}', function (n) {
            if (n.type) {
                $scope.withdraw.type = n.type;
                if (n.type === 'wallet') {
                    $scope.accountIsWallet = true;
                    if ($scope.withdraw.accountType === 'wallet') {
                        changeWithdrawAccountType('bank');
                    }
                } else {
                    $scope.accountIsWallet = false;
                }
            }
            if (n.id) {
                $scope.withdraw.mt4_id = n.id
            }
            if (n.id && n.type) {
                getIsWithdraw()
            }

        }, true)
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.toWithdraw = toWithdraw;
        $scope.openWithdrawMdl = openWithdrawMdl;
        $scope.openThirdMdl = openThirdMdl;
        $scope.openTransferMdl = openTransferMdl;
        $scope.openManageThirdMdl = openManageThirdMdl;
        $scope.openManageTransferMdl = openManageTransferMdl;
        // $scope.changeWithdrawType = changeWithdrawType;
        $scope.openChangeWithTypeMdl = openChangeWithTypeMdl;
        $scope.openCurrency = openCurrency;
        $scope.selcetCurrency = selcetCurrency;
        $scope.getCard = getCard;

        // 获取账户列表(统一处理)
        getAssetCardList()
        function getAssetCardList(){
            if($scope.withdraw.accountType == 'transfer' && !($scope.withdraw.transfer.id)){
                // 获取默认电汇
                getTransfer();
            }else if($scope.withdraw.accountType == 'bank'){
                // 获取默认银行卡
                getCard();
            }else if($scope.withdraw.accountType == 'third_account'){
                // 获取默认第三方
                getThird();
            }
        }

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            // 通知所有子控器 
            if (!parentScope.hasChooseedCard) {
                getCard()
            }
        });
        //绑定第三方账户后获取账号信息
        $rootScope.$on('bindThirdSuccess', function () {
            // 通知所有子控器 
            getThird()
        });
        //绑定电汇获取账号信息
        $rootScope.$on('bindTransferSuccess', function () {
            // 通知所有子控器 
            getTransfer()
        });
        function noIsWalletId() {
            var mt4_id;
            if ($scope.withdraw.type !== 'wallet') {
                mt4_id = $scope.withdraw.mt4_id;
            }
            return mt4_id;
        }
        // 判断出金状态, 获取可提取的最大金额
        function getIsWithdraw() {
            asset.getIsWithdraw(undefined, noIsWalletId()).then(function (data) {
                layer.closeAll();
                if (!data) return;
                // console.info(data);
                $scope.withdrawMessageSucc = true;
                if (data.is_succ) {
                    if (data.code !== 0) {
                        if (codeRage.indexOf(data.code) == -1) data.code = 0;
                        $scope.message = {
                            is_succ: false,
                            error_msg: data.data.status_message
                        };
                        openWithdrawMdl({
                            type: 'withdrawFail',
                            code: data.code,
                            message: data.data.status_message
                        });
                        return;
                    }
                    if (data.data.status == 0) {
                        $scope.message = {
                            is_succ: false,
                            error_msg: data.data.status_message
                        };
                        // if ($scope.withdraw.type === 'invest') {
                        openWithdrawMdl({
                            type: 'withdrawFail',
                            message: data.data.status_message
                        });
                        // }
                    } else {
                        $scope.message = {
                            is_succ: true
                        };
                        $scope.withdrawNotice = data.data.notice;
                        $scope.maxAmountInvest = data.data.amount < 0 ? 0 : data.data.amount;
                        // if ($scope.withdraw.type === 'invest') {
                        $scope.withdraw.maxAmount = $scope.maxAmountInvest;
                        if (Number($scope.withdraw.amount) >= Number($scope.withdraw.maxAmount)) {
                            $scope.withdraw.amount = undefined
                        }
                        // }
                    }
                } else {
                    $scope.message = {
                        is_succ: false,
                        error_msg: data.message
                    };
                    // if ($scope.withdraw.type === 'invest') {
                    openWithdrawMdl({
                        type: 'withdrawFail',
                        message: data.message
                    });
                    // }
                }
            });
        }
        // wallet可出金金额
        // asset.walletCanWithdraw().then(function (data) {
        //     if (!data) return;
        //     // console.log(data);
        //     // $scope.withdrawMessageSucc = true;
        //     $scope.messageWallet = data;
        //     $scope.maxAmountWallet = data.data;
        //     if ($scope.withdraw.type === 'wallet') {
        //         $scope.withdraw.maxAmount = $scope.maxAmountWallet;
        //     }
        // });

        // 获取出金方式列表
        asset.getWithdrawPlatform().then(function (data) {
            if (data.is_succ) {
                // console.log(data.data);
                // 因为使用此接口之前已经定义好了各出金方式的key，所以这里沿用以前的key，做一下替换
                angular.forEach(data.data, function (value, index) {
                    if (value.key === 'bank_account') value.key = 'bank';
                    // if (value.key === 'third_account') {
                    //     angular.forEach(value.child, function (value2, index2) {
                    //         if (value2.key === 'cse_wallet') value2.key = 'cse';
                    //         $scope.withdrawTypeLst[value2.key] = value2;
                    //     });
                    // } else {
                    $scope.withdrawTypeLst[value.key] = value;
                    // }
                });

                // 设置初始币种
                $scope.withdraw.currency = $scope.withdrawTypeLst[$scope.withdraw.accountType].currency.length ? $scope.withdrawTypeLst[$scope.withdraw.accountType].currency[0] : null;
            }
        });

        // 获取银行卡信息
        function getCard() {
            // 为区分第三方银行卡信息切换提现方式后清空重新请求
            $scope.withdraw.card = {};
            var params = ($scope.withdraw.accountType === 'third_account') ? {platform: $scope.withdraw.third.third_type} : {};
            asset.getCard(params).then(function (data) {
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
                    $scope.withdraw.card.phone = data.data.phone;
                    $scope.withdraw.card.country = data.data.country_code;
                    // 判断是否为英文简称
                    $scope.withdraw.card.is_short = /^[A-Za-z]/.test(data.data.bank_name);
                }
            });
        }
        // 获取电汇账户信息
        function getTransfer() {
            asset.getCard({ type: 2 }).then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ && data.data) {
                    $scope.withdraw.transfer.id = data.data.id;
                    $scope.withdraw.transfer.country = data.data.country;
                    $scope.withdraw.transfer.bank_name = data.data.bank_name;
                    $scope.withdraw.transfer.cardholder_name = data.data.cardholder_name;
                    $scope.withdraw.transfer.card_no = data.data.card_no;
                    $scope.withdraw.transfer.bank_img = data.data.bank_img;
                    $scope.withdraw.transfer.bank_code = data.data.bank_code;
                }
            });
        }
        // 获取默认第三方信息
        function getThird() {
            // 为区分第三方银行卡信息切换提现方式后清空重新请求
            $scope.withdraw.third = {};
            asset.getDefaultThirdAccount().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ && data.data) {
                    $scope.withdraw.third.id = data.data.id;
                    $scope.withdraw.third.account = data.data.account;
                    $scope.withdraw.third.account_f = data.data.account_f;
                    $scope.withdraw.third.third_type = data.data.third_type;
                    $scope.withdraw.third.platform = data.data.platform;
                    $scope.withdraw.third.status = data.data.status;
                    $scope.withdraw.third.withdraw_type = data.data.withdraw_type;
                    if(data.data.withdraw_type == 1){
                        getCard();
                    }
                }
            });
        }
        function checkCardPhone(card) {
            if (!card.phone) {
                $modal.open({
                    templateUrl: '/views/asset/card_phone_modal.html',
                    size: 'md',
                    controller: ['$scope', '$modalInstance', 'validator', 'lang', function ($scope, $modalInstance, validator, lang) {
                        $scope.closeModal = $modalInstance.dismiss;
                        $scope.hideErr = hideErr;
                        $scope.showErr = showErr;
                        $scope.lang = lang;
                        $scope.card = card;
                        $scope.frontErr = {
                            phone: {
                                show: false,
                                reg: validator.regType.phone.reg,
                                tip: validator.regType.phone.tip
                            }
                        }
                        $scope.bindInfo = {
                            success: false,
                            loading: false,
                            phone: ''
                        }
                        $scope.backErr = {
                            show: false,
                            msg: ''
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

                        $scope.submitForm = function () {
                            showErr('phone')
                            if ($scope.cardForm.$invalid) {
                                return;
                            }
                            $scope.bindInfo.loading = true
                            asset.bindCardPhone(card.id, $scope.bindInfo.phone).then(function (data) {
                                $scope.bindInfo.loading = false
                                if (data.is_succ) {
                                    $scope.bindInfo.success = true;
                                    $scope.card.phone = $scope.bindInfo.phone
                                } else {
                                    $scope.backErr = {
                                        show: true,
                                        msg: data.message
                                    }
                                    setTimeout(function () {
                                        $apply(function () {
                                            $scope.backErr = {
                                                show: false,
                                                msg: data.message
                                            }
                                        })
                                    }, 2000)
                                }
                            })
                        }
                    }]
                })
                return false
            } else {
                return true
            }
        }


        // 添加第三方
        function openThirdMdl() {
            if (parentScope.manageCardModalInstance) {
                parentScope.manageCardModalInstance.dismiss()
            }
            // 检测认证状态
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetWithdrawController',
                callback: function () {
                    $modal.open({
                        templateUrl: '/views/asset/third_modal.html',
                        size: 'md',
                        resolve: {
                            passedScope: function () {
                                return {};
                            }
                        },
                        controller: 'AssetThirdController'
                    });
                }
            })
        }

        // 添加电汇
        function openTransferMdl() {
            if (parentScope.manageCardModalInstance) {
                parentScope.manageCardModalInstance.dismiss()
            }
            // 检测认证状态
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetWithdrawController',
                callback: function () {
                    $modal.open({
                        templateUrl: '/views/asset/transfer_modal.html',
                        size: 'md',
                        resolve: {
                            passedScope: function () {
                                return {
                                    personal: $scope.lang.isThird() ? $scope.main : $scope.personal,
                                    card: $scope.withdraw.transfer
                                };
                            }
                        },
                        controller: 'AssetTransferController'
                    });
                }
            })
        }

        // 管理第三方账号
        function openManageThirdMdl(type, third) {
            $modal.open({
                templateUrl: '/views/asset/manage_third_modal.html',
                size: 'md',
                backdrop: 'true',
                controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', 'lang', function ($scope, $modalInstance, $state, asset, $timeout, lang) {
                    parentScope.manageCardModalInstance = $modalInstance
                    $timeout(function () {
                        $scope.$broadcast('hideLoadingImg');
                    }, 0)
                    $scope.closeModal = closeModal;
                    $scope.manageType = type;
                    $scope.lang = lang;
                    $scope.openAddThirdModal = openThirdMdl
                    // $scope.errorTipStatus = false;
                    //刷新列表 
                    getThirdList($scope).then(function () {
                        $scope.thirdList = parentScope.thirdList
                    })

                    $scope.chooseThird = function (third) {
                        parentScope.withdraw.third.id = third.id;
                        parentScope.withdraw.third.account = third.account;
                        parentScope.withdraw.third.account_f = third.account_f;
                        parentScope.withdraw.third.third_type = third.third_type;
                        parentScope.withdraw.third.platform = third.platform;
                        parentScope.withdraw.third.status = third.status;
                        parentScope.withdraw.third.withdraw_type = third.withdraw_type;
                        if(third.withdraw_type == 1){
                            getCard();
                        }
                        // 更改选中状态
                        // parentScope.hasChooseedCard = true;
                        closeModal()
                    }

                    $scope.confirmDeleteThird = function (third) {
                        closeModal()
                        openManageThirdMdl('delete', third)
                    }

                    $scope.deleteThird = function () {
                        asset.destroyThirdAccount({ id: third.id }).then(function (data) {
                            if (data.is_succ) {
                                getThirdList($scope).then(function () {
                                    $scope.thirdList = parentScope.thirdList
                                    // if ($scope.thirdList.length == 0) {
                                    //     parentScope.withdraw.third = {}
                                    // }
                                })
                                getThird()
                                closeModal()
                            }
                        })
                    }
                    // function errorTip() {
                    //     $timeout(function () {
                    //         $scope.$broadcast('hideLoadingImg');
                    //     }, 0)
                    // }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }

        // 第三方列表
        function getThirdList(_scope) {
            _scope.$emit('showLoadingImg');
            return asset.getThirdAccountList({ limit: 100 }).then(function (data) {
                _scope.$broadcast('hideLoadingImg');
                if (!data) {
                    console.info('获取第三方列表失败！')
                    return
                }
                parentScope.thirdList = data.data.records;
            })
        }
        
        // 管理电汇账号
        function openManageTransferMdl(type, transfer) {
            $modal.open({
                templateUrl: '/views/asset/manage_transfer_modal.html',
                size: 'md',
                backdrop: 'true',
                controller: ['$scope', '$modalInstance', '$state', 'asset', '$timeout', 'lang', function ($scope, $modalInstance, $state, asset, $timeout, lang) {
                    parentScope.manageCardModalInstance = $modalInstance
                    $timeout(function () {
                        $scope.$broadcast('hideLoadingImg');
                    }, 0)
                    $scope.closeModal = closeModal;
                    $scope.manageType = type;
                    $scope.lang = lang;
                    $scope.openAddTransferModal = openTransferMdl
                    // $scope.errorTipStatus = false;
                    //刷新列表 
                    getTransferList($scope).then(function () {
                        $scope.transferList = parentScope.transferList
                    })

                    $scope.chooseTransfer = function (data) {
                        parentScope.withdraw.transfer.id = data.id;
                        parentScope.withdraw.transfer.country = data.country;
                        parentScope.withdraw.transfer.bank_name = data.bank_name;
                        parentScope.withdraw.transfer.cardholder_name = data.cardholder_name;
                        parentScope.withdraw.transfer.card_no = data.card_no;
                        parentScope.withdraw.transfer.bank_img = data.bank_img;
                        parentScope.withdraw.transfer.bank_code = data.bank_code;
                        closeModal()
                    }

                    $scope.confirmDeleteTransfer = function (transfer) {
                        closeModal()
                        openManageTransferMdl('delete', transfer)
                    }

                    $scope.deleteTransfer = function () {
                        asset.deleteCard(transfer.id, 2).then(function (data) {
                            if (data.is_succ) {
                                getTransferList($scope).then(function () {
                                    $scope.transferList = parentScope.transferList
                                    if ($scope.transferList.length == 0) {
                                        parentScope.withdraw.transfer = {}
                                    }
                                })
                                getTransfer()
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

        // 电汇列表
        function getTransferList(_scope) {
            _scope.$emit('showLoadingImg');
            return asset.getCardList({ type: 2 }).then(function (data) {
                _scope.$broadcast('hideLoadingImg');
                if (!data) {
                    console.info('获取电汇列表失败！')
                    return
                }
                parentScope.transferList = data.data;
            })
        }
        // 提现相关的各种弹窗提示
        function openWithdrawMdl(params) {
            // console.log(params);
            var withdraw = $scope.withdraw;
            // var isMessage = $scope.message;
            var parentScope = $scope;

            $modal.open({
                templateUrl: '/views/asset/withdraw_modal.html',
                size: 'sm',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state, lang) {
                    $scope.withdrawAmount = withdraw.amount;
                    $scope.closeModal = closeModal;
                    $scope.bindCard = bindCard;
                    $scope.params = params;
                    $scope.lang = lang;
                    // 绑定银行卡
                    function bindCard() {
                        closeModal();
                        // openCardMdl();
                    }

                    function closeModal(r) {
                        if (r) {
                            parentScope.clickable = true;
                        }
                        $modalInstance.dismiss();
                    }

                    $scope.delSpace = function (text) {
                        if (!text) return '';
                        var newText = text.replace(/(^\s*)|(\s*$)/g, "");
                        return newText;
                    }
                }
            });
        }

        // function changeWithdrawType(type) {
        //     $scope.withdraw.type = type;
        //     $scope.withdraw.maxAmount = type === 'invest' ? $scope.maxAmountInvest : $scope.maxAmountWallet;
        // }

        // 提现
        $scope.clickable = true;
        function toWithdraw() {
            // 通过认证
            $scope.$emit('global.checkAuthenFlow', {
                ctrlName: 'AssetWithdrawController',
                callback: function () {
                    if($scope.withdraw.card.country === 'CN'){
                        if ($scope.withdraw.accountType === 'bank' || ($scope.withdraw.accountType === 'third_account' && $scope.withdraw.third.withdraw_type === 1)) {
                            if (!checkCardPhone($scope.withdraw.card)) { return }
                        }
                    }
                    showErr('amount');
                    var withdrawForm = {
                        amount: true
                    }
                    $scope.$broadcast('getwithdrawForm', withdrawForm);
                    if (withdrawForm.amount) {
                        return;
                    }
                    if ($scope.clickable == false) {
                        return;
                    }

                    $scope.clickable = false;

                    var paramsAsset = {
                        amount: Number($scope.withdraw.amount).toFixed(2),
                        currency: $scope.withdraw.currency ? $scope.withdraw.currency.currency : undefined
                    };
                    if ($scope.withdraw.accountType === 'bank') {
                        paramsAsset.bank_card_id = $scope.withdraw.card.id;
                    } else if ($scope.withdraw.accountType === 'wallet') {
                        paramsAsset.third_type = $scope.withdrawTypeLst[$scope.withdraw.accountType].platform;
                    } else if ($scope.withdraw.accountType === 'third_account') {
                        paramsAsset.third_type = $scope.withdraw.third.third_type;
                        paramsAsset.third_account = $scope.withdraw.third.account_f;
                        if($scope.withdraw.third.withdraw_type === 1){
                            paramsAsset.bank_card_id = $scope.withdraw.card.id;
                        }
                    } else if($scope.withdraw.accountType === 'transfer'){
                        paramsAsset.third_type = $scope.withdrawTypeLst[$scope.withdraw.accountType].platform;
                        paramsAsset.bank_card_id = $scope.withdraw.transfer.id;
                    } else {
                        paramsAsset.third_type = $scope.withdrawTypeLst[$scope.withdraw.accountType].platform;
                        paramsAsset.third_account = $scope.withdraw.thirdAccount;
                    }

                    withdrawInvest(paramsAsset);
                }
            })
        }

        function withdrawInvest(paramsAsset) {
            asset.getIsWithdraw($scope.withdraw.amount, noIsWalletId()).then(function (data) {
                if (data.is_succ) {
                    if (data.code !== 0) {
                        if (codeRage.indexOf(data.code) == -1) data.code = 0;
                        openWithdrawMdl({
                            type: 'withdrawFail',
                            code: data.code,
                            message: data.data.status_message
                        });
                        return;
                    }
                    if (data.data.status == 0) {
                        openWithdrawMdl({
                            type: 'withdrawFail',
                            message: data.data.status_message
                        });
                    } else {
                        if (data.data.bonus == 0) {
                            var amount = Number($scope.withdraw.amount).toFixed(2);
                            var amountRMB = Number(amount * $scope.withdraw.currency.rate_out).toFixed(2);
                            openWithdrawMdl({
                                type: 'withdrawReady',
                                message: '',
                                amountDollar: amount,
                                amountRMB: amountRMB,
                                desc: $scope.withdrawNotice,
                                currency: $scope.withdraw.currency,
                                callback: data.data.status_message ? openWithdrawTip : withdraw,
                                callbackPara: data.data.status_message
                            });
                        } else {
                            $scope.clickable = true;
                            openWithdrawTip($scope.lang.text("tigerWitID.depositWithdrawal.tip5"));
                        }
                    }
                } else {
                    openWithdrawMdl({
                        type: 'withdrawFail',
                        message: data.message
                    });
                }

                function openWithdrawTip(tip) {
                    openWithdrawMdl({
                        type: 'withdrawTip',
                        message: tip,
                        callback: withdraw
                    });
                }

                function withdraw() {
                    paramsAsset.mt4_id = noIsWalletId();
                    asset.withdraw(paramsAsset).then(function (data) {
                        if (!data) return;
                        $scope.clickable = true;

                        if (data.is_succ) {
                            $scope.withdraw.success = true;
                            if ($scope.lang.isThird()) {
                                openWithdrawMdl({
                                    type: "withdrawSucc",
                                    message: ''
                                });
                                $scope.$emit('main.getAssetInfo')
                            } else {
                                if ($scope.withdraw.accountType === 'wallet') {
                                    openWithdrawMdl({
                                        type: "walletSuss",
                                        message: ''
                                    });
                                } else {
                                    openWithdrawMdl({
                                        type: "withdrawSucc",
                                        message: ''
                                    });
                                }

                                $state.go('space.asset.subpage', {
                                    subpage: 'withdraw',
                                    account: paramsAsset.mt4_id
                                }, { reload: true });
                            }
                        } else {
                            var msg = data.message;
                            openWithdrawMdl({
                                type: 'withdrawFail',
                                message: msg
                            });
                        }
                    });
                }
            });
        }

        // function withdrawWallet(paramsAsset) {

        //     var amount = Number($scope.withdraw.amount).toFixed(2);
        //     var amountRMB = Number(amount*$scope.withdraw.currency.rate_out).toFixed(2);
        //     openWithdrawMdl({
        //         type: 'withdrawReady',
        //         message: '',
        //         amountDollar: amount,
        //         amountRMB: amountRMB,
        //         desc: $scope.withdrawNotice,
        //         currency: $scope.withdraw.currency,
        //         callback: withdraw
        //     });

        //     function withdraw () {
        //         asset.walletWithdraw(paramsAsset).then(function (data) {
        //             // console.log(data);
        //             $scope.clickable = true;
        //             if (!data) return;
        //             if (data.is_succ) {
        //                 $scope.withdraw.success = true;
        //                 openWithdrawMdl({
        //                     type: "withdrawSucc",
        //                     message: ''
        //                 });

        //                 $state.go('space.asset.subpage', {
        //                     subpage: 'withdraw',
        //                     type: 'wallet'
        //                 }, { reload: true });
        //             } else {
        //                 var msg = data.message;
        //                 openWithdrawMdl({
        //                     type: 'withdrawFail',
        //                     message: msg
        //                 });
        //             }
        //         });
        //     }
        // }

        //选择币种
        $document.on('click', function () {
            $scope.$apply(function () {
                $scope.currencyStatus = false;
            });
        });
        function openCurrency(e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.currencyStatus = !$scope.currencyStatus;
        }
        function selcetCurrency(item) {
            $scope.currencyStatus = false;
            $scope.withdraw.currency = item;
        }

        function changeWithdrawAccountType(accountType) {
            $scope.withdraw.accountType = accountType;
            getAssetCardList();
            $scope.withdraw.currency = $scope.withdrawTypeLst[$scope.withdraw.accountType].currency.length ? $scope.withdrawTypeLst[$scope.withdraw.accountType].currency[0] : null;
        }
        //  切换提现方式
        function openChangeWithTypeMdl() {
            $modal.open({
                templateUrl: '/views/asset/withdraw_dep_type_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            withdrawType: $scope.withdraw.accountType,
                            withdrawTypeLst: $scope.withdrawTypeLst,
                            isWallet: $scope.accountIsWallet
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope, lang) {
                    // console.log(passedScope);
                    $scope.withdraw = {
                        accountType: passedScope.withdrawType,
                        withdrawTypeLst: passedScope.withdrawTypeLst
                    };
                    $scope.lang = lang;
                    $scope.closeModal = closeModal;
                    $scope.selectType = selectType;
                    $scope.changeType = changeType;
                    $scope.isWallet = function (key) {
                        if (passedScope.isWallet) {
                            return key === 'wallet' ? "false" : "true"
                        } else {
                            return true
                        }
                    }
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
