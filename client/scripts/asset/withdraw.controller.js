;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('AssetWithdrawController', AssetWithdrawController);

    AssetWithdrawController.$inject = ['$scope', 'asset', 'validator', 'forex'];

    function AssetWithdrawController($scope, asset, validator, forex) {

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
            success: false,
            minAmount: 0,
            maxAmount: 0
        };
        $scope.frontErr = {
            amount: {
                show: false,
                reg: validator.regType.amount.reg
            }
        };

        $scope.showErr = showErr;
        $scope.hideErr = hideErr;

        forex.getAsset().then(function(data) {
            $scope.withdraw.maxAmount = data.data.balance;
        });

        function toWithdraw(amount) {
            if (typeof amount === 'undefined') {
                showErr(amount);
                return;
            }

            amount = Number(amount).toFixed(2);

            // 该做这儿了
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