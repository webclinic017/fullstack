;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('ThirdLoginController', ThirdLoginController);

    ThirdLoginController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies'];

    function ThirdLoginController($scope, $interval, $timeout, $window, $state, account, validator, $cookies) {
        $scope.account = {
            mt4: '',
            password: '',
            remember: true,
            showPassword: false,
            loading: true
        };

        // 从 landing page 进入时
        $scope.account.mt4 = $state.params.mt4;

        // 清除loginStep1 手机号
        $scope.clearPhone = function (phone) {
            $scope.account[phone] = '';
        };
        // 是否记住登录状态
        $scope.changeLoginStatus = function (type) {
            $scope.account[type] = !$scope.account[type];
        };
        
        // 登录
        $scope.login = function (formName) {
            if (!$scope.account.loading) return;
            if ($scope[formName].$invalid) {
                layer.msg("请填写完整信息");
                return;
            }
            
            layer.load();
            $scope.account.loading = false;

            account.loginByMt4({
                mt4: $scope.account.mt4,
                password: $scope.account.password
            }).then(function (data) {
                layer.closeAll();
                $scope.account.loading = true;
                if (data.is_succ) {
                    $timeout(function () {
                        account.hasChecked = false;
                        $window.location.href = '/third/asset';
                    }, 100);
                } else {
                    layer.msg(data.message);
                }
            });
        };
    }
})();