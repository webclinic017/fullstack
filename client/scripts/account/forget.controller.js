;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountForgetController', AccountForgetController);

    AccountForgetController.$inject = ['$scope', '$timeout', 'account', 'validator'];
    function AccountForgetController($scope, $timeout, account, validator) {
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
                status: 0    // 0, 1
            },
            captchaBtn: {
                show: false,
                status: 0
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

        function submitStep1Form(formName) {
            showErr(formName, 'phone');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }
            $scope.clickable.step1 = false;
            
            account.checkPhoneAndCaptcha($scope.account.phone, 
                    $scope.account.captcha).then(function (data) {
                
                if (data.is_succ) {
                    goNextStep();
                } else {

                    if (data.error_msg === '验证码不正确' || data.error_msg === '请先发送验证码') {
                        $scope.backErr.captcha.show = true;
                        $scope.backErr.captcha.status = 1;
                        $scope.clickable.step1 = true;
                    }
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

                if (data.is_succ) {
                    goNextStep();
                }
            });
        }

        function getCaptcha(formName) {
            showErr(formName, 'phone');

            if ($scope[formName]['phone'].$invalid) {
                return;
            }            

            $scope.clickable.captcha = false;

            var tmp;
            if ($scope.voiceCaptcha) {
                tmp = account.getSVoiceCaptcha($scope.account.phone, 'pwd');
            } else {
                tmp = account.getCaptcha($scope.account.phone);
            }
            tmp.then(function (data) {
                if (data.is_succ) {
                    $scope.startTimer();
                } else {

                    // 手机号码未注册
                    if (data.error_code === 3 || data.error_code === 4) {
                        $scope.backErr.phone.status = 1;
                        $scope.clickable.captcha = true;
                    }

                    if (data.error_code === 1 || data.error_code === 2 ||
                            data.error_code === 5) {
                        $scope.backErr.captchaBtn.show = true;
                        $scope.backErr.captchaBtn.status = data.error_code;

                        $timeout(function () {
                            $scope.backErr.captchaBtn.show = false;
                            $scope.backErr.captchaBtn.status = 0;
                            $scope.clickable.captcha = true;
                        }, 3000);
                    }
                }
            });
        }

        function hideErr(controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

            // 如果需要后端验错，这里是隐藏错误，所以把状态重置为后端未验证的状态
            if($scope.backErr[controlName]) {
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