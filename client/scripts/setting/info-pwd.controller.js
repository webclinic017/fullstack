;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoPwdController', SettingInfoPwdController);

    SettingInfoPwdController.$inject = ['$scope', '$timeout', 'validator', 'account', '$window'];

    function SettingInfoPwdController($scope, $timeout, validator, account, $window) {
        $scope.password = {
            pwdOld: undefined,
            pwdNew: undefined,
            pwdConfirm: undefined,
            password: undefined     // 未设置过密码的新用户
        };

        $scope.frontErr = {
            pwdOld: {
                show: false
            },
            pwdNew: {
                show: false,
                tip: validator.regType.password.tip
            },
            pwdConfirm: {
                show: false
            },
            password: {
                show: false,
                tip: validator.regType.password.tip
            }

        };
        // 后端验错
        $scope.backErr = {
            pwdOld: {
                show: false,
                status: 0   // 默认 0，各种错误 1、2、3......
            },
            system: {
                show: false,
                status: 0,
                msg: ''
            }
        };
        $scope.clickable = true;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.submitForm = submitForm;
        $scope.submitFormNew = submitFormNew;
       
        function submitForm(formName) {
            showErr(formName, 'pwdOld');
            showErr(formName, 'pwdNew');
            showErr(formName, 'pwdConfirm');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable = false;
            account.setPwd($scope.password.pwdOld, $scope.password.pwdNew).then(function (data) {
                if (!data) return;
                console.log(data);

                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 1;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;
                        $scope.clickable = true;

                        //修改完密码让用户重新登录
                        account.logout().then(function (data) {
                            if (data.is_succ) {
                                // 神策数据统计
                                sa.logout(true);

                                account.hasChecked = false;
                                $scope.$emit('refresh_personal_cookies_info');
                                $window.location.href='/space/#/account/login';
                            }
                        });                      
                    }, 2000);
                } else {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 2;
                    $scope.clickable = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;                        
                    }, 3000);
                }
            });
            
        }

        function submitFormNew (formName) {
            showErr(formName, 'password');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable = false;
            account.setPwdFirst($scope.password.password).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 1;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;
                        $scope.clickable = true;

                        //修改完密码让用户重新登录
                        account.logout().then(function (data) {
                            if (data.is_succ) {
                                // 神策数据统计
                                sa.logout(true);

                                account.hasChecked = false;
                                $scope.$emit('refresh_personal_cookies_info');
                                $window.location.href='/space/#/account/login';
                            }
                        });                      
                    }, 2000);
                } else {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 2;
                    $scope.clickable = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;                        
                    }, 3000);
                }
            });
        }

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = false;
                // 重置状态为 0，隐藏后端错误
                $scope.backErr[controlName].status = 0;
            }
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }

            if ($scope[formName][controlName].$invalid) {
                // 前端验错未通过，不需要显示后端错误
                return;
            } else {

                if ($scope.backErr[controlName]) {
                    $scope.backErr[controlName].show = true;
                }
            }
        }
    }
})();