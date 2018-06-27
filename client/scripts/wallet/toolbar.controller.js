;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WalletToolbarController', WalletToolbarController);

        WalletToolbarController.$inject = ['$scope', 'asset'];

    function WalletToolbarController($scope, asset) {

        // 获取零钱包 金额
        asset.walletbalance().then(function (data) {
            if (!data) return;
            // console.log(data);
            $scope.walletbalance = data.data.balance;
        });
    }
}());