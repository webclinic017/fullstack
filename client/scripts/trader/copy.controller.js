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
            avaCopyAmount: avaCopyAmount || undefined,
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
        
        if (typeof avaCopyAmount === 'undefined') {
            getAvaCopyAmount(copiedTrader.usercode);
        }
        
        // 获取可用复制金额
        function getAvaCopyAmount(usercode) {
            trader.getAvaCopyAmount(usercode).then(function (data) {
                $scope.copyTrade.avaCopyAmount = data.total_available;
            });
        }

        function submitForm() {
            showErr('amount');

            if (typeof $scope.copyTrade.avaCopyAmount === 'undefined') {
                console.log("getAvaCopyAmount");
                return;
            }
            
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

                        // 神策数据统计
                        sa.track('btn_click', {
                            btn_page: copiedTrader.usercode,
                            btn_name: '复制'
                        });

                    } else {
                        $scope.copyTrade.success = false;

                        $scope.backErr.system.show = true;
                        $scope.backErr.system.msg = data.error_msg;

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