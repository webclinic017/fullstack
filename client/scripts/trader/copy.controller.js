;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('TraderCopyController', TraderCopyController);

    TraderCopyController.$inject = ['$scope', '$timeout', '$modalInstance', 'trader',
        'validator', 'passedScope', 'lang', 'fun'];

    function TraderCopyController($scope, $timeout, $modalInstance, trader, validator, passedScope, lang, fun) {
        var copiedTrader = passedScope.copiedTrader;
        var avaCopyInfo = passedScope.AvaCopyInfo || undefined;
        // console.log(copiedTrader,avaCopyInfo);
        $scope.lang = lang;
        $scope.toGtagEvent = toGtagEvent;
        $scope.copyTrade = {
            title: passedScope.title || '',
            username: copiedTrader.username,          // 高手 username
            // avatar: copiedTrader.lgAvatar,         // 高手头像
            amount: undefined, // 需填写的复制金额，若已经复制则为本人复制高手的复制金额
            copied: copiedTrader.copied || undefined,   // 已经复制的金额
            minCopyAmount: Number(copiedTrader.minCopyAmount) || '',
            surplusAmount: passedScope.surplusAmount || undefined
        };
        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg,
                tip: validator.regType.amount.tip,
            },
            insufficient: {
                show: false,
                msg: lang.text('tigerWitID.tradingAccount.tip11')
            },
            tip: {
                show: false,
                msg: lang.text('tigerWitID.tradingAccount.tip28')  // '由于复制金额小于最佳金额，您可能无法成功复制该高手'
            }
        };

        $scope.backErr = {
            system: {
                valid: true,
                show: false,
                status: 0,   // 0, 1
                msg: ''
            }
        };
        $scope.clickable = {
            copy: true
        };
        if (avaCopyInfo) {
            angular.extend($scope.copyTrade, {
                avaCopyAmount: avaCopyInfo.usable || undefined,
                advice: avaCopyInfo.advice
            });
            getDefaultAmount();
            // $scope.copyTrade.amount = avaCopyInfo.advice;
        } else {
            getAvaCopyAmount(copiedTrader.usercode);
        }

        // if ($scope.copyTrade.title == 'modify') {
        //     getMasterGrade(copiedTrader.usercode);
        // }

        if (!$scope.copyTrade.surplusAmount) {
            getMasterGrade(copiedTrader.usercode);
        }

        // 获取可用复制金额
        function getAvaCopyAmount(usercode) {
            trader.getAvaCopyAmount(usercode).then(function (data) {
                $scope.copyTrade.copied = data.data.copy_amount;
                $scope.copyTrade.avaCopyAmount = data.data.usable;
                $scope.copyTrade.advice = data.data.advice || 0.00;
                $scope.copyTrade.minCopyAmount = Number(data.data.min_copy_amount);
                // $scope.copyTrade.amount = avaCopyInfo.advice;
                // calAmount();
                getDefaultAmount();
            });
        }

        // 获取高手剩余可复制金额 
        // 只有在修改时需要获取，复制高手时是通过 passedScope 传递获得
        function getMasterGrade(usercode) {
            trader.getMasterGrade(usercode).then(function (data) {
                // console.log(data);
                if (data.is_succ && data.code == 0) {
                    $scope.copyTrade.surplusAmount = data.data.available_amount || 0.00;
                }
            });
        }

        function getDefaultAmount() {
            if ($scope.copyTrade.copied) {
                setAmount($scope.copyTrade.copied)
            } else {
                var ava = Number($scope.copyTrade.avaCopyAmount);
                var adv = Number($scope.copyTrade.advice);
                var min = $scope.copyTrade.minCopyAmount;
                // console.log(ava, adv, min);
                if ((min < ava && ava < adv) || ava < min) {
                    setAmount(ava)
                }
                if (ava > adv) {
                    setAmount(adv)
                }
            }
        }

        // 流程控制
        $scope.step = 1;
        // 是否重新填写
        // $scope.hasCanceled = undefined;

        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;
        $scope.closeModal = closeModal;
        $scope.setAmount = setAmount;
        $scope.calAmount = calAmount;

        // if ($scope.copyTrade.amount &&
        //     parseInt($scope.copyTrade.amount) < $scope.copyTrade.minCopyAmount) {
        //     setAmount(1000)
        // }
        var calAmountDebounce = fun.debounce(function () {
            $scope.toGtagEvent('inp_copy_amount', { belong: 'tigerwit' })
        }, 300);
        function calAmount() {
            calAmountDebounce && calAmountDebounce();
            var usableAmount = Number($scope.copyTrade.avaCopyAmount);
            var amount = Number($scope.copyTrade.amount);
            if (amount > usableAmount || usableAmount < $scope.copyTrade.minCopyAmount) {
                $scope.frontErr.insufficient.show = true;
            } else {
                $scope.frontErr.insufficient.show = false;
            }
            if (amount >= $scope.copyTrade.minCopyAmount && amount < Number($scope.copyTrade.advice)) {
                $scope.frontErr.tip.show = true;
            } else {
                $scope.frontErr.tip.show = false;
            }
        }
        function setAmount(amount) {
            $scope.copyTrade.amount = Number(amount);

            calAmount()
        }
        function goStep(step) {
            $scope.step = step;
        }

        // $scope.cancleSubmit = function () {
        //     $scope.step = 1;
        //     $scope.hasCanceled = true;
        // }

        $scope.submitStep1 = function () {
            showErr('amount');

            if (typeof $scope.copyTrade.avaCopyAmount === 'undefined') {
                console.log("getAvaCopyAmount");
                return;
            }

            if ($scope.copyForm.$invalid) {
                return;
            }

            // 不是强制继续的时候检测建议交易金额
            // console.log((Number($scope.copyTrade.amount), Number($scope.copyTrade.advice.split('.')[0])), isForce);

            // if ((Number($scope.copyTrade.amount) <= Number($scope.copyTrade.advice.split('.')[0]))) {
            // && !isForce
            //     goStep(2);
            // } else {
            // 如果通过直接提交表单
            submitForm();
            // }
        }

        function submitForm() {
            $scope.clickable.copy = false;

            trader.copy(copiedTrader.usercode, $scope.copyTrade.amount).then(function (data) {
                // console.info(data);

                $scope.clickable.copy = true;

                if (data.is_succ) {
                    goStep(3);
                    // copiedTrader.copied = $scope.copyTrade.amount;
                    passedScope.callBack && passedScope.callBack($scope.copyTrade.amount);
                    // 神策数据统计
                    sa.track('btn_click', {
                        btn_page: copiedTrader.usercode,
                        btn_name: '复制'
                    });
                    $scope.toGtagEvent('copy_star_success_web', { key: copiedTrader.usercode, belong: 'tigerwit' })
                } else if (data.code == 100603) {
                    $scope.copyTrade.title = 'tip';
                    $scope.copyTrade.evidenceMsg = data.message;
                    goStep(4);
                } else {
                    // goStep(1);
                    // $scope.hasCanceled = false;

                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';

                    }, 3000);

                }
            }, function (err) {
                $scope.clickable.copy = true;
                console.info(err);
            });

        }
        function closeModal() {
            $modalInstance.dismiss();
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