;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('TraderCopyController', TraderCopyController);

    TraderCopyController.$inject = ['$scope', '$timeout', '$modalInstance', 'trader', 
            'validator', 'passedScope'];

    function TraderCopyController($scope, $timeout, $modalInstance, trader, validator, 
            passedScope) {
        var copiedTrader = passedScope.copiedTrader;
        var avaCopyAmount = passedScope.avaCopyAmount;
        // console.info(copiedTrader);

        $scope.step = 1;
        $scope.copyTrade = {
            username: copiedTrader.username,          // 高手 username
            // avatar: copiedTrader.lgAvatar,         // 高手头像
            amount: copiedTrader.copied || undefined, // 需填写的复制金额，若已经复制则为本人复制高手的复制金额
            avaCopyAmount: avaCopyAmount || 0,
            minCopyAmount: copiedTrader.minCopyAmount
        };

        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.backErr = {
            system: {
                valid: true,
                show: false,
                status: 0   // 0, 1
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

        if (typeof avaCopyAmount === 'undefined') {
            getAvaCopyAmount();
        }
        
        // 获取可用复制金额
        function getAvaCopyAmount() {
            trader.getAvaCopyAmount().then(function (data) {
                $scope.copyTrade.avaCopyAmount = data.total_available;
            });
        }

        function submitForm() {
            showErr('amount');
            
            if ($scope.copyForm.$invalid) {
                return;
            } else {
                $scope.clickable.copy = false;

                trader.copy(copiedTrader.usercode, $scope.copyTrade.amount).then(function (data) {
                    // console.info(data);
                    $scope.clickable.copy = true;

                    if (data.is_succ) {
                        $scope.copyTrade.success = true;
                        copiedTrader.copied = $scope.copyTrade.amount;
                    } else {
                        $scope.copyTrade.success = false;

                        if (data.errCode === 4) {
                            $scope.backErr.system.show = true;
                            $scope.backErr.system.status = 1;    // 复制人数已达上限

                            $timeout(function () {
                                $scope.backErr.system.show = false;
                                $scope.backErr.system.status = 0;
                            }, 3000);
                        }

                        if (data.err_code === 7) {
                            $scope.backErr.system.show = true;
                            $scope.backErr.system.status = 2;    // 您没有权限复制该高手

                            $timeout(function () {
                                $scope.backErr.system.show = false;
                                $scope.backErr.system.status = 0;
                            }, 3000);
                        }

                        if (data.errCode === 6) {
                            $scope.backErr.system.show = true;
                            $scope.backErr.system.status = 3;    // 高手不能复制高手

                            $timeout(function () {
                                $scope.backErr.system.show = false;
                                $scope.backErr.system.status = 0;
                            }, 3000);
                        }

                        if (data.err_code === 12) {
                            $scope.backErr.system.show = true;
                            $scope.backErr.system.status = 4;    // 可复制保证金过小

                            $timeout(function () {
                                $scope.backErr.system.show = false;
                                $scope.backErr.system.status = 0;
                            }, 3000);
                        }

                        if (data.errCode === 2) {
                            $scope.backErr.system.show = true;
                            $scope.backErr.system.status = 5;    // 余额不足

                            $timeout(function () {
                                $scope.backErr.system.show = false;
                                $scope.backErr.system.status = 0;
                            }, 3000);
                        }
                    }
                }, function (err) {
                    $scope.clickable.copy = true;
                    console.info(err);
                });
            }
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