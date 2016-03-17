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


        getCard();

        // 获取可提取的最大金额
        forex.getAsset().then(function(data) {
            $scope.withdraw.maxAmount = data.data.balance;
        });

        // 获取银行卡信息
        function getCard() {
            asset.getCard().then(function(data) {
                if (data.is_succ) {
                    $scope.withdraw.card.id = data.id;
                    $scope.withdraw.card.number = data.card_id;
                    $scope.withdraw.card.bank = data.bank_name;
                    $scope.withdraw.card.address = data.bank_addr;
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

    }
})();