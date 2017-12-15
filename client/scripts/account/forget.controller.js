;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountForgetController', AccountForgetController);

    AccountForgetController.$inject = ['$scope', '$timeout', '$cookies', 'account', 'validator'];
    function AccountForgetController($scope, $timeout, $cookies, account, validator) {
        $scope.step = 1;

        $scope.account = {
            phone: undefined,
            captcha: undefined,
            pwdNew: undefined,
            pwdConfirm: undefined
        };

        $scope.frontErr = {
            phone: {
                show: false,
                reg: validator.regType.phone.reg
            },
            captcha: {
                show: false
            },
            pwdNew: {
                show: false,
                tip: validator.regType.password.tip
            },
            pwdConfirm: {
                show: false
            }
        };
        $scope.backErr = {
            phone: {
                show: false,
                status: 0    // 0, 1
            },
            captcha: {
                show: false,
                msg: '',
                status: 0    // 0, 1
            },
            captchaBtn: {
                show: false,
                msg: ''
            },
            system: {
                show: false,
                msg: ''
            }
        };
        $scope.clickable = {
            captcha: true,      // 获取验证码按钮
            step1: true,        // 下一步按钮
            submit: true        // 提交按钮
        };
        $scope.voiceCaptcha = false;
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitStep1Form = submitStep1Form;
        $scope.submitStep2Form = submitStep2Form;
        $scope.getCaptcha = getCaptcha;
        var token;
        account.setToken();

        function submitStep1Form(formName) {
            showErr(formName, 'phone');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }
            $scope.clickable.step1 = false;

            account.checkPhoneAndCaptcha(
                $scope.account.phone,
                $scope.account.captcha
                
            ).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    goNextStep();
                } else {

                    $scope.backErr.captcha.show = true;
                    $scope.backErr.captcha.msg = data.message;
                    $scope.backErr.captcha.status = 1;
                    $scope.clickable.step1 = true;

                    $timeout(function () {
                        $scope.backErr.captcha.show = false;
                        $scope.backErr.captcha.msg = '';
                        $scope.backErr.captcha.status = 0;
                    }, 3000);
                }
            });
        }

        function submitStep2Form(formName) {
            showErr(formName, 'pwdNew');
            showErr(formName, 'pwdConfirm');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable.submit = false;
            account.setNewPwd($scope.account.phone, $scope.account.captcha,
                $scope.account.pwdNew).then(function (data) {
                    if (!data) return;

                    if (data.is_succ) {
                        goNextStep();
                    } else {
                        $scope.clickable.submit = true;
                        $scope.backErr.system = {
                            show: true,
                            msg: data.message
                        };

                        $timeout(function () {
                            $scope.backErr.system = {
                                show: false,
                                msg: ''
                            };
                        }, 3000);
                    }
                });
        }

        function getCaptcha(formName) {
            showErr(formName, 'phone');

            if ($scope[formName]['phone'].$invalid) {
                return;
            }

            $scope.clickable.captcha = false;
            token = $cookies['code_token'];
            var tmp;
            if ($scope.voiceCaptcha) {
                tmp = account.sendCode($scope.account.phone, token, 2);
            } else {
                tmp = account.sendCode($scope.account.phone, token, 2);
            }
            tmp.then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    $scope.startTimer();
                } else {

                    $scope.backErr.captchaBtn.show = true;
                    $scope.backErr.captchaBtn.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.captchaBtn.show = false;
                        $scope.backErr.captchaBtn.msg = '';
                        $scope.clickable.captcha = true;
                    }, 3000);
                }
            });
        }

        function hideErr(controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            // 如果需要后端验错，这里是隐藏错误，所以把状态重置为后端未验证的状态
            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = false;
                $scope.backErr[controlName].status = 0;
            }
        }

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }

            if ($scope[formName][controlName].$invalid) {
                return;
            }

            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = true;
            }
        }

        function goNextStep() {
            $scope.step++;
        }
    }
})();