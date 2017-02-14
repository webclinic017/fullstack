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
            show: false,
            msg: ''
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
                // console.info($scope.account.id, textEnc, $scope.account.autoLogin);
                
                if (textEnc) {
                    account.login($scope.account.id, textEnc, $scope.account.autoLogin).then(function (data) {
                        if (!data.is_succ) {
                            
                            $scope.backErr.show = true;
                            $scope.backErr.msg = data.message;

                            $timeout(function () {
                                $scope.backErr.show = false;
                                $scope.backErr.msg = '';
                            }, 3000);
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
                    }, function (err) {
                        console.log(err);
                        $scope.backErr.show = true;
                        $scope.backErr.msg = "接口请求失败";

                        $timeout(function () {
                            $scope.backErr.show = false;
                            $scope.backErr.msg = '';
                        }, 3000);
                        $scope.clickable = true;
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