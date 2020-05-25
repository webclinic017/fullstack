;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetDepositController', AssetDepositController);

    AssetDepositController.$inject = ['$rootScope', '$scope', '$window', '$document', '$cookies', '$modal', '$state', '$timeout', 'asset', 'validator', 'account', '$layer', 'previewImage', 'fun'];

    function AssetDepositController($rootScope, $scope, $window, $document, $cookies, $modal, $state, $timeout, asset, validator, account, $layer, previewImage, fun) {
        /**  2020.04.15 
         * 注意 这四个接口参数中的 platform 都已修改成取交易列表中的 payment_platform 字段
         *  api/v3/user/bank_card       //获取默认银行卡
            api/v3/user/bank_card/lists //银行卡列表
            api/v3/bank_names           //银行列表
            api/v3/user/bank_card       //绑定银行卡
         */
        if ($cookies["d&w_czc"] && (!localStorage["deposit_czc"] || localStorage["deposit_czc"] !== $cookies["d&w_czc"])) {
            $scope.toTrackEvent('Deposit/withdrawal', 'deposit');
            localStorage["deposit_czc"] = $cookies["d&w_czc"];
        }
        
        $scope.toGtagEvent('open_deposit_web');
        // 缓存当前父scope 给弹窗控制器使用
        $scope.parentScope = $scope;
        var parentScope = $scope;
        parentScope.hasChooseedCard = false
        parentScope.manageCardModalInstance = undefined;
        $scope.depositTypeLstArray = []; // 支付方式列表原数组 ng-repeat
        $scope.depositTypeLst = {}; // 支付方式列表
        $scope.deposit = {
            card: {},
            currency: null,     // 支付币种
            type: null,   // 支付方式
            amount: undefined,                  // 充值金额
            teleFile: undefined,    //电汇凭证
            submitBtn: false,                   // 充值按钮true/false
            isAbleDeposit: 0,    //是否能够入金（是否上传凭证）evidence  0不需要上传，1需要上传，2未审核
            depositCard: undefined,
            isNeedBank: 0,
            safetyCode: undefined   //信用卡安全码 (Noire通道)
        };
        $scope.currencyStatus = false; // 选择币种列表
        $scope.walletDepositSucc = false;
        $scope.teleDepositSucc = false;    // 上传凭证
        $scope.walletAble = 0;      //钱包余额
        $scope.src = [
            "/white_label/passport/04.png"
        ];
        $scope.$watch('selectWay.type', function (n) {
            if (!n) return;
            if (n === 'wallet') {
                $scope.accountIsWallet = true;
                if ($scope.deposit.type === 'wallet') {
                    angular.forEach($scope.depositTypeLst, function (value, index) {
                        // console.log(value, index,'1')
                        if (value.default) {
                            changeDepositTypeBefore(index)
                            return
                        }
                    })
                    // 如果还等于钱包
                    if ($scope.deposit.type === 'wallet') {
                        changeDepositTypeBefore(Object.keys($scope.depositTypeLst)[0])
                    }
                }
            } else {
                $scope.accountIsWallet = false;
            }
        })
        $scope.isLoading = false;
        $scope.toDeposit = toDeposit;
        $scope.openDepositMdl = openDepositMdl;
        $scope.openDepositRuleMdl = openDepositRuleMdl;
        $scope.checkInputAmount = checkInputAmount;
        $scope.openChangeDepTypeMdl = openChangeDepTypeMdl;
        $scope.toHelp = toHelp;
        $scope.openCurrency = openCurrency;
        $scope.selcetCurrency = selcetCurrency;
        // 获取默认银行卡
        $scope.getCard = getCard;
        // getCard();

        //绑定银行卡后获取银行卡信息
        $rootScope.$on('bindCardSuccess', function () {
            // 通知所有子控器 
            if (!parentScope.hasChooseedCard) {
                getCard()
            }
        });
        // 获取支付方式列表
        asset.getDepositPlatform().then(function (data) {
            if (data.is_succ) {
                // 因为使用此接口之前已经定义好了各支付方式的key，所以这里沿用以前的key，做一下替换
                $scope.depositTypeLstArray = data.data;
                var acquiesce = '';   // 避免充值类型赋值后再次赋值
                angular.forEach($scope.depositTypeLstArray, function (value, index) {
                    if (value.key === 'bank') value.key = 'invest';
                    if (value.key === 'transfer') value.key = 'tele';
                    if (value.key === 'cse_wallet') value.key = 'cseWallet';
                    //因为后台设置时线上设置的key设置成大写了，要做一下兼容，（＊）
                    if (value.key === 'Omipay') value.key = 'omipay';

                    if (value.default && !acquiesce) {
                        // $scope.deposit.type = ;
                        acquiesce = value.key;
                        // $timeout(function () {
                            // changeDepositTypeBefore(value.key)
                        // }, 50);
                        // console.log($scope.deposit.type)
                    }

                    $scope.depositTypeLst[value.key] = value;
                    // console.log($scope.depositTypeLst)
                });
                if(acquiesce){
                    changeDepositTypeBefore(acquiesce)
                }

                // 设置初始币种
                if ($scope.deposit.type) {
                    $scope.deposit.currency = $scope.depositTypeLst[$scope.deposit.type].currency.length ? $scope.depositTypeLst[$scope.deposit.type].currency[0] : null;
                }
            }
        });
        // 获取银行卡信息
        function getCard() {
            // 支付方式不同银行卡列表不同，所以提前清空
            $scope.deposit.card = {};
            if(!($scope.deposit.type && $scope.depositTypeLst[$scope.deposit.type].need_card === 1)){
                return 
            }
            var params = ($scope.depositTypeLst[$scope.deposit.type].channel_type === 1) ? {platform: $scope.depositTypeLst[$scope.deposit.type].payment_platform} : {};
            asset.getCard(params).then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ && data.data) {
                    $scope.deposit.card.id = data.data.id;
                    $scope.deposit.card.number = data.data.card_no;
                    $scope.deposit.card.bank_name = data.data.bank_name;
                    $scope.deposit.card.address = data.data.bank_addr;
                    $scope.deposit.card.province = data.data.province;
                    $scope.deposit.card.city = data.data.city;
                    $scope.deposit.card.bank_img = data.data.bank_img;
                    $scope.deposit.card.bank_code = data.data.bank_code;
                    $scope.deposit.card.phone = data.data.phone;
                    $scope.deposit.card.country = data.data.country_code;
                    // 判断是否为英文简称
                    $scope.deposit.card.is_short = /^[A-Za-z]/.test(data.data.bank_name);

                    checkInputAmount();

                }
            });
        }
        $scope.checkSafetyCode = function (value) {
            if (value != null) $scope.deposit.safetyCode = Number(value.toString().slice(0,6));
        }
        // 获取入金限制
        // 此接口限制合并到入金方式列表中，不再单独获取 2018.7.20
        // asset.getDepositLimit().then(function (data) {
        //     // console.log(data);
        //     if (!data) return;
        //     if (data.is_succ) {
        //         $scope.deposit.quota_full_notice = data.data.quota_full_notice;
        //         $scope.deposit.minAmount = parseInt(data.data.min);
        //         $scope.deposit.isAbleDeposit = data.data.evidence;
        //         // $scope.deposit.isAbleDeposit = 1;
        //         checkInputAmount();
        //         // 网银入金限制
        //         checkInvestLimit();
        //     }
        // });
        // 获取钱包 可用金额
        asset.walletCanWithdraw().then(function (data) {
            if (!data) return;
            // console.log(data);
            $scope.walletAble = data.data;
            if ($scope.deposit.type === 'wallet') {
                $scope.deposit.amount = $scope.walletAble;
            }
        });

        // 网银入金限制
        function checkInvestLimit() {
            if ($scope.deposit.isAbleDeposit === 1) {
                openDepositMdl('depositLimit', openChangeDepTypeMdl, {
                    msgTip: $scope.lang.text("tigerWitID.depositWithdrawal.tip56"),
                    msgBtn: $scope.lang.text("tigerWitID.depositWithdrawal.chooseOtherPayment"),
                    msgTitle: $scope.lang.text('tigerWitID.prompt')
                });
            }
            if ($scope.deposit.isAbleDeposit === 2) {
                openDepositMdl('depositLimitCheck');
            }
        }

        // 判断网银绑定银行卡
        function checkInvestBank() {
            if (!$scope.deposit.isNeedBank) return;
            if ($scope.deposit.isAbleDeposit !== 0) return;
            asset.checkInvestBank().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    if (data.data.depositCard) {
                        $scope.deposit.depositCard = data.data.depositCard;
                    } else {
                        openDepositMdl('bindBankCard', null, {
                            cardName: $scope.lang.isThird() ? $scope.main.realname : $scope.personal.realname,
                            msgTitle: $scope.lang.text('tigerWitID.depositWithdrawal.fillPayCardInfo')
                        });
                    }
                }
            });
        }
        // 输入框提示信息
        $scope.amountVerify = {
            show: false,
            tip: ''
        };
        // 选择倍数金额
        $scope.selectMoney = function (money) {
            console.log(money)
            $scope.deposit.amount = Number(money);
            checkInputAmount();
        }
        //判断按钮 deposit.submitBtn
        function checkInputAmount() {
            $scope.deposit.submitBtn = false;
            $scope.amountVerify.show = false;
            if ($scope.isLoading) return;
            if (!$scope.deposit.type || !$scope.deposit.amount) {
                // $scope.deposit.submitBtn = false;
                return;
            }
            var type = $scope.depositTypeLst[$scope.deposit.type]; // 当前支付方式内容
            // console.log(typeof $scope.deposit.amount)
            if ($scope.deposit.amount < Number(type.min)) {
                $scope.amountVerify.show = true;
                $scope.amountVerify.tip = $scope.lang.text('tigerWitID.depositWithdrawal.tip57') + type.min;
                return
            }
            if (type.max != "0.00") {
                if ($scope.deposit.amount > Number(type.max)) {
                    $scope.amountVerify.show = true;
                    $scope.amountVerify.tip = $scope.lang.text('tigerWitID.depositWithdrawal.tip58') + type.max;
                    return
                }
            }
            // 需要判断金额倍数时
            if (type.key === 'omipay') {
                var re = (/^[0-9]*[0-9]$/i);
                if (!(re.test($scope.deposit.amount) && $scope.deposit.amount % 100 === 0)) {
                    $scope.amountVerify.show = true;
                    $scope.amountVerify.tip = type.describe;
                    return
                }
            }
            // 支付方式为Noire 检查安全码
            if (type.key === 'Noire') {
                if (!$scope.deposit.safetyCode) {
                    $scope.deposit.submitBtn = false;
                    return;
                }
            }
            // 支付方式为钱包时
            if ($scope.deposit.type === 'wallet') {
                if (Number($scope.deposit.amount) > Number($scope.walletAble)) {
                    $scope.deposit.submitBtn = false;
                } else {
                    $scope.deposit.submitBtn = true;
                }
                return;
            }
            // 是否需要添加银行卡
            if ($scope.deposit.isNeedBank) {
                if ($scope.deposit.depositCard) {
                    $scope.deposit.submitBtn = true;
                } else {
                    $scope.deposit.submitBtn = false;
                }
                return;
            }
            // 转账or网银（判断是否需要添加银行卡）need_card兼容channel_type
            if (type.need_card === 1) {
                if ($scope.deposit.card.id) {
                    $scope.deposit.submitBtn = true;
                } else {
                    $scope.deposit.submitBtn = false;
                }
                return;
            }
            $scope.deposit.submitBtn = true;
        }

        // 切换充值方式前
        function changeDepositTypeBefore(type) {
            // console.log($scope.depositTypeLst, type)
            if (!type) return;
            var types = ['quick_3', 'Transfer', 'Bank2', 'USDT']
            if(types.indexOf(type) !== -1){
                var obj = {
                  title: $scope.lang.text('tigerWitID.prompt'),
                  msg: $scope.lang.text('tigerWitID.depositWithdrawal.transferQuick3Tip1') + '<br>'+ $scope.lang.text('tigerWitID.depositWithdrawal.transferQuick3Tip2') +'<br>' + $scope.lang.text('tigerWitID.depositWithdrawal.transferQuick3Tip3'),
                  msgClass: '',
                  btns: {}
                }
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function(){
                    changeDepositType(type)
                }
                $layer(obj);
            }else{
                changeDepositType(type)
            }
            
        }
         // 切换充值方式
         function changeDepositType(type) {
            $scope.deposit.depositCard = undefined;
            $scope.deposit.type = type;
            $scope.deposit.isNeedBank = $scope.depositTypeLst[$scope.deposit.type].check_card;
            $scope.deposit.isAbleDeposit = $scope.depositTypeLst[$scope.deposit.type].evidence_status;
            $scope.deposit.currency = $scope.depositTypeLst[$scope.deposit.type].currency.length ? $scope.depositTypeLst[$scope.deposit.type].currency[0] : null;
            if ($scope.depositTypeLst[$scope.deposit.type].amount_list.length) {
                $scope.deposit.amount = undefined;
            }
            checkInvestLimit();
            checkInputAmount();
            checkInvestBank();
            getCard();
        }


        // 切换充值方式弹窗
        function openChangeDepTypeMdl() {
            $modal.open({
                templateUrl: '/views/asset/deposit_dep_type_modal.html',
                size: $scope.lang.isEnglishArea() ? 'md' : 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            depositType: $scope.deposit.type,
                            walletAble: $scope.walletAble,
                            depositTypeLst: $scope.depositTypeLstArray,
                            isWallet: $scope.accountIsWallet
                        };
                    }
                },
                controller: function ($scope, $modalInstance, passedScope, lang) {
                    // console.log(passedScope);
                    $scope.deposit = {
                        type: passedScope.depositType,
                        walletAble: passedScope.walletAble,
                        depositTypeLst: passedScope.depositTypeLst
                    };
                    $scope.lang = lang;
                    $scope.isWallet = function (key) {
                        if (passedScope.isWallet) {
                            return key === 'wallet' ? "false" : "true"
                        } else {
                            return true
                        }
                    }
                    $scope.closeModal = closeModal;
                    $scope.selectType = selectType;
                    $scope.changeType = changeType;

                    function selectType(type, status) {
                        // console.log(type, status);
                        if (status === 2) return;
                        $scope.deposit.type = type;
                    }

                    function changeType() {
                        closeModal();
                        changeDepositTypeBefore($scope.deposit.type);
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
        function openCurrency(e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.currencyStatus = !$scope.currencyStatus;
        }
        function selcetCurrency(item) {
            $scope.currencyStatus = false;
            $scope.deposit.currency = item;
        }
        // 充值  还未完成
        function toDeposit() {
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
                        var mt4_id;
                        if ($scope.selectWay.type !== 'wallet') {
                            mt4_id = $scope.accountItem.mt4_id;
                        }
                        $scope.isLoading = true;
                        if (($scope.deposit.type !== 'tele')) {
                            //第三方支付
                            if ($scope.deposit.type === 'cseWallet') {
                                $scope.isLoading = false;
                                openDepositRuleMdl({
                                    type: 'cseMessage',
                                    tit: $scope.lang.text("tigerWitID.tip.tip13_1") + 'CSE Wallet' + $scope.lang.text("tigerWitID.tip.tip13_2"),
                                    pop: $scope.depositTypeLst[$scope.deposit.type].pop,
                                    url: $scope.depositTypeLst[$scope.deposit.type].url,
                                    callback: submitDeposit
                                });
                            } else if ($scope.deposit.type === 'wallet') {
                                submitDeposit();
                            } else {
                                if ($scope.deposit.isAbleDeposit === 0) {
                                    //2020.2.18修改 先调用入金接口，再弹窗提示
                                    submitDeposit();
                                } else {
                                    checkInvestLimit();
                                }
                            }

                            function computeAmount(amountDollar, amountRMB, amountFee, amountTotal) {
                                openDepositMdl('confirmDeposit', isAccount, {
                                    amountDollar: amountDollar,
                                    amountRMB: amountRMB,
                                    amountFee: amountFee,
                                    amountTotal: amountTotal,
                                    isFree: $scope.depositTypeLst[$scope.deposit.type].poundage_status,
                                    desc: $scope.depositTypeLst[$scope.deposit.type].poundage_desc,
                                    currency: $scope.deposit.currency,
                                    msgBtn: $scope.depositTypeLst[$scope.deposit.type].channel_type === 1 ? $scope.lang.text("tigerWitID.confirm") : $scope.lang.text("actLogin29")
                                });
                            }

                            function isAccount() {
                                // avoda
                                if ($scope.deposit.type === 'invest') {
                                    openDepositRuleMdl({
                                        type: 'HotMessage',
                                        tit: $scope.lang.text("tigerWitID.depositWithdrawal.isHasAvodaAccount"),
                                        pop: {
                                            content: $scope.lang.text("tigerWitID.depositWithdrawal.hasAvodaAccount") + '\n\r' + $scope.lang.text("tigerWitID.depositWithdrawal.noAvodaAccount")
                                        },
                                        url: $scope.depositTypeLst[$scope.deposit.type].url,
                                        callback: jumpUrl
                                    });
                                } else {
                                    jumpUrl()
                                }
                            }
                            function submitDeposit() {
                                var p = $scope.depositTypeLst[$scope.deposit.type].platform || undefined;
                                var c = $scope.deposit.currency ? $scope.deposit.currency.currency : undefined;
                                var cardId = $scope.depositTypeLst[$scope.deposit.type].need_card === 1 ? $scope.deposit.card.id : undefined;
                                var safetyCode = $scope.deposit.type === 'Noire' ? $scope.deposit.safetyCode : undefined;
                                var token = $cookies["token"] || '';
                                var lang = $cookies["lang"] || '';
                                asset.deposit(amount, p, c, mt4_id, cardId, safetyCode).then(function (data) {
                                    $scope.isLoading = false;
                                    if (!data) return;
                                    if (data.is_succ) {
                                        $scope.toGtagEvent('完成入金');
                                        if ($scope.deposit.type === 'wallet') {
                                            $scope.$emit('asset.transfer')
                                            $scope.walletDepositSucc = true;
                                        } else {
                                            $scope.jumpTargetUrl = fun.setUrlParam(data.data.url) + 'lang=' + lang + '&token=' + token;
                                            computeAmount(data.data.usd_amount,data.data.actual_amount,data.data.usd_poundage,data.data.pay_amount);
                                        }
                                        if ($scope.lang.isThird()) {
                                            $scope.$emit('main.getAssetInfo')
                                        }
                                    } else {
                                        layer.msg(data.message);
                                        if ($scope.deposit.type !== 'wallet') {
                                            w.close();
                                        }
                                    }
                                });
                            }
                            function jumpUrl () {
                                var p = $scope.depositTypeLst[$scope.deposit.type].platform || undefined;
                                var c = $scope.deposit.currency ? $scope.deposit.currency.currency : undefined;
                                var token = $cookies["token"] || '';
                                var lang = $cookies["lang"] || '';
                                var m = mt4_id ? mt4_id : '';
                                var w = $window.open('/waiting');
                                if ($scope.depositTypeLst[$scope.deposit.type].channel_type === 2) {
                                    openDepositMdl('depositFinish');
                                    var params = [
                                        'amount=' + amount,
                                        'platform=' + p,
                                        'mt4_id=' + m,
                                        'bank_card_id=' + $scope.deposit.card.id,
                                        'currency=' + c,
                                        'lang=' + lang,
                                        'token=' + token
                                    ];
                                    w.location = fun.setUrlParam($scope.depositTypeLst[$scope.deposit.type].url) + params.join('&');
                                    return;
                                }
                                openDepositMdl('depositFinish');
                                w.location = $scope.jumpTargetUrl;
                            }
                        }
                        if ($scope.deposit.type === 'tele') {
                            if (!$scope.deposit.teleFile) {
                                $scope.isLoading = false;
                                layer.msg($scope.lang.text("tigerWitID.depositWithdrawal.uploadTeleTranVoucher"));
                            } else {
                                asset.teleDeposit(amount, $scope.deposit.teleFile, mt4_id).then(function (data) {
                                    console.log(data);
                                    $scope.isLoading = false;
                                    if (data.is_succ) {
                                        $scope.toGtagEvent('完成入金');
                                        $scope.$emit('asset.transfer')
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
            // OpenChat();
            zE.activate();
        }
        // 入金相关的各种弹窗提示
        function openDepositMdl(type, callback, msgInfo) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            depositType: $scope.deposit.type,
                            userCode: $scope.lang.isThird() ? $scope.main.user_code : $scope.personal.user_code,
                        };
                    }
                },
                controller: function ($rootScope, $scope, passedScope, $modalInstance, $state, lang, fun) {
                    $scope.basicInfo = passedScope;
                    $scope.msgInfo = msgInfo || {};
                    $scope.type = type;
                    $scope.lang = lang;
                    $scope.closeModal = closeModal;
                    $scope.verify = verify;
                    // $scope.openChat = openChat;
                    $scope.depositSucc = depositSucc;
                    $scope.goOnDeposit = goOnDeposit;
                    $scope.gotoEvidence = gotoEvidence;
                    $scope.bindBankCard = bindBankCard;
                    $scope.copyUserCode = copyUserCode;
                    $scope.depositCard = {
                        backErr: false,
                        backMsg: '',
                        num: $scope.msgInfo.cardNum || undefined
                    };

                    // 去实名认证
                    function verify() {
                        $state.go('personal.setting.subpage({subpage: verify})');
                        closeModal();
                    }

                    // // 支付遇到问题
                    // function openChat() {
                    //     OpenChat();
                    //     closeModal();
                    // }

                    // 支付成功
                    function depositSucc() {
                        closeModal();
                    }

                    //继续入金
                    function goOnDeposit() {
                        callback && callback();
                        closeModal();
                    }
                    function copyUserCode() {
                        fun.copyText(passedScope.userCode);
                    }
                    // 绑定入金银行卡
                    function bindBankCard() {
                        if ($scope.depositCard.backErr) return;
                        if (!$scope.depositCard.num) {
                            $scope.depositCard.backErr = true;
                            $scope.depositCard.backMsg = lang.text("tigerWitID.depositWithdrawal.enterBankCardNum");
                            return
                        };
                        $scope.isLoading = true;
                        asset.bindInvestBank($scope.depositCard.num).then(function (data) {
                            // console.log(data);
                            $scope.isLoading = false;
                            if (data.is_succ) {
                                fillBankCard(data.data.depositCard);
                                closeModal();
                            } else {
                                $scope.depositCard.backErr = true;
                                $scope.depositCard.backMsg = data.message;
                            }
                        });
                    }
                    // 兼容第三方
                    function gotoEvidence() {
                        console.log($scope.main)
                        $rootScope.main.switchPage('evidence');
                        closeModal();
                    }
                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                    $scope.formatText = function (text) {
                        if (!text) return '';
                        var newText = text.replace(/(^\s*)|(\s*$)/g, "");
                        return newText;
                    }
                }
            });
        }

        function openDepositRuleMdl(params) {
            $modal.open({
                templateUrl: '/views/asset/deposit_modal.html',
                size: 'md',
                backdrop: 'static',
                controller: function ($scope, $modalInstance, $state, lang) {
                    $scope.type = params.type;
                    $scope.lang = lang;
                    $scope.msgInfo = {
                        msgTitle: params.tit || lang.text('tigerWitID.prompt'),
                        msgPopTitle: params.pop ? params.pop.title : '',
                        msgPopContent: params.pop ? params.pop.content : '',
                        msgUrl: params.url || ''
                    };
                    $scope.callback = params.callback || null;
                    $scope.closeModal = closeModal;
                    $scope.toUrl = function () {
                        var flag = window.open($scope.msgInfo.msgUrl);
                        if(flag == null) {
                            alert("Enable popup filtering in your browser!\n\n Please turn off this function temporarily!") ;  
                        }
                    };
                    function closeModal() {
                        $modalInstance.dismiss();
                    }

                }
            });
        }

        //填写完成银行卡号后回调
        function fillBankCard(card) {
            $scope.deposit.depositCard = card;
            checkInputAmount();
        }
    }
})();
