;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('TraderCopyController', TraderCopyController);

    TraderCopyController.$inject = ['$scope', '$timeout', '$modalInstance', 'trader',
        'validator', 'passedScope'];

    function TraderCopyController($scope, $timeout, $modalInstance, trader, validator, passedScope) {
        var copiedTrader = passedScope.copiedTrader;
        var avaCopyInfo = passedScope.AvaCopyInfo || undefined;
        // console.log(copiedTrader,avaCopyInfo);

        $scope.copyTrade = {
            title: passedScope.title || '',
            username: copiedTrader.username,          // 高手 username
            // avatar: copiedTrader.lgAvatar,         // 高手头像
            amount: copiedTrader.copied || undefined, // 需填写的复制金额，若已经复制则为本人复制高手的复制金额
            minCopyAmount: 200,  
        };

        if(avaCopyInfo){
            angular.extend($scope.copyTrade, {
                avaCopyAmount: avaCopyInfo.usable || undefined,
                advice: avaCopyInfo.advice
            });
        } else {
            getAvaCopyAmount(copiedTrader.usercode);
        }

        // 获取可用复制金额
        function getAvaCopyAmount(usercode) {
            trader.getAvaCopyAmount(usercode).then(function (data) {
                $scope.copyTrade.avaCopyAmount = data.data.usable;
                $scope.copyTrade.advice = data.data.advice;
                $scope.calAmount();
            });
        }

        $scope.step = 1;

        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            },
            insufficient: {
                show: false,
                msg: '可用复制金额不足'
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
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;
        $scope.closeModal = closeModal;

        if ($scope.copyTrade.amount &&
            parseInt($scope.copyTrade.amount) < parseInt($scope.copyTrade.minCopyAmount)) {
            $scope.copyTrade.amount = 1000;
        }

        $scope.calAmount = function () {
            var usableAmount = Number($scope.copyTrade.avaCopyAmount);
            var amount = Number($scope.copyTrade.amount);
            if ($scope.copyTrade.amount > usableAmount || usableAmount < 200) {
                $scope.frontErr.insufficient.show = true;
            } else {
                $scope.frontErr.insufficient.show = false;
            }
        }

        function goStep(step) {
            $scope.step = step;
        }

        $scope.cancleSubmit = function () {
            $scope.step = 1;
        }

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
            console.log($scope.copyTrade.amount, Number($scope.copyTrade.advice));
            if (Number($scope.copyTrade.amount) < Number($scope.copyTrade.advice.split('.')[0])) {
                goStep(2);
            } else {
                // 如果通过直接提交表单
                submitForm();
            }
        }

        function submitForm() {
            $scope.clickable.copy = false;

            trader.copy(copiedTrader.usercode, $scope.copyTrade.amount).then(function (data) {
                // console.info(data);

                $scope.clickable.copy = true;

                if (data.is_succ) {
                    goStep(3);
                    copiedTrader.copied = $scope.copyTrade.amount;

                    // 神策数据统计
                    sa.track('btn_click', {
                        btn_page: copiedTrader.usercode,
                        btn_name: '复制'
                    });

                    $timeout(function () {
                        closeModal();
                    }, 800);
                } else {
                    goStep(1);

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

        $scope.closeModal = closeModal;
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