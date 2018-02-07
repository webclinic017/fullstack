;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAlipayController', WebAlipayController);

    WebAlipayController.$inject = ['$scope', '$cookies', '$window', 'asset'];

    function WebAlipayController($scope, $cookies, $window, asset) {

        $scope.amount = undefined;

        $scope.toDepositAlipay = function () {
            var amount = $scope.amount ? Number($scope.amount) : undefined;

            if (!amount) {
                layer.msg('请输入入金金额');
                return;
            };
            var w = $window.open('/waiting');
            asset.deposit(amount, 4).then(function (data) {
                if (!data) {
                    w.close();
                    return;
                }
                if (data.is_succ) {
                    var token = $cookies["token"] || '';
                    var url = data.data.url + '?token=' + token;
                    w.location = url;
                } else {
                    layer.msg(data.message);
                    w.close();
                }
            });
        };
    }
})();
