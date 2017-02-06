;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountLoginController', AccountLoginController);

    AccountLoginController.$inject = ['$scope', '$timeout', '$window', '$state', 'account'];

    function AccountLoginController($scope, $timeout, $window, $state, account) {
        $scope.account = {
            id: undefined,
            password: undefined,
            autoLogin: true
        };
        $scope.frontErr = {
            id: {
                show: false
            },
            password: {
                show: false
            }
        };
        $scope.backErr = {
            id: {
                show: false,
                status: 0  // 0, 1
            },

            system: {
                show: false,
                status: 0    // 0, 1, 2
            }
        };
        $scope.clickable = true;
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitForm = submitForm;

        var backUrl = $state.params.back;

        function submitForm(formName) {
            showErr(formName, 'id');
            showErr(formName, 'password');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable = false;

            var textEnc = account.encrypt($scope.account.password);
            // 首先对 password 加密
            // account.encrypt($scope.account.password).then(function (textEnc) {
                console.info($scope.account.id, textEnc, $scope.account.autoLogin);
                
                if (textEnc) {
                    account.login($scope.account.id, textEnc, $scope.account.autoLogin).then(function (data) {
                        if (!data.is_succ) {
                            
                            // id 错误
                            if (data.error_code === 1) {
                                $scope.backErr.id.show = true;
                                $scope.backErr.id.status = 1;
                            }
                            
                            if (data.error_code === 3) {
                                $scope.backErr.id.show = true;
                                $scope.backErr.id.status = 2;
                            }
                            // 帐号注销
                            if (data.error_code === 5) {
                                $scope.backErr.id.show = true;
                                $scope.backErr.id.status = 3;
                            }

                            // 系统错误
                            if (data.error_code === 2) {
                                $scope.backErr.system.show = true;
                                $scope.backErr.system.status = 1;

                                $timeout(function () {
                                    $scope.backErr.system.show = false;
                                    $scope.backErr.system.status = 0;
                                }, 3000);
                            }
                            
                            if (data.error_code === 4) {
                                $scope.backErr.system.show = true;
                                $scope.backErr.system.status = 2;

                                $timeout(function () {
                                    $scope.backErr.system.show = false;
                                    $scope.backErr.system.status = 0;
                                }, 3000);
                            }
                            $scope.clickable = true;
                        } else {
                            // umeng
                            _czc.push(["_trackEvent","登录框","登录成功"]);
                            
                            if (backUrl) {
                                $window.location.href = backUrl;
                            } else {
                                account.hasChecked = false;
                                $state.go('space.invest.subpage', {subpage: 'current', back: 'login'}, {reload: true});
                                $scope.$emit('relogin_info');

                            }
                        }
                    });
                }
            // });
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }

            if ($scope[formName][controlName].$invalid) {
                // 如果前端有错误就不显示后端错误
                return;
            }

            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = true;
            }
        }

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            // 如果需要后端验错，这里是隐藏错误，所以把状态重置为后端未验证的状态
            if($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = false;
                $scope.backErr[controlName].status = 0;
            }
        }
    }
})();