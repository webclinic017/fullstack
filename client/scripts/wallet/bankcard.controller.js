;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('WalletBankcardController', WalletBankcardController);

    WalletBankcardController.$inject = ['$scope'];

    function WalletBankcardController($scope) {
        console.log(1)
    }
}());