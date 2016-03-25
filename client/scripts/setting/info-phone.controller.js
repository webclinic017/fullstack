;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoPhoneController', SettingInfoPhoneController);

    SettingInfoPhoneController.$inject = ['$scope', '$timeout', 'validator', 'account'];

    function SettingInfoPhoneController($scope, $timeout, validator, account) {
        $scope.phone = {
            phoneNew: undefined,
            captcha: undefined
        };

        $scope.frontErr = {
            phoneNew: {
                show: false,
                reg: validator.regType.phone.reg
            },
            captcha: {
                show: false
            }
        };

        $scope.backErr = {
            phoneNew: {
                show: false,
                status: 0
            },
            captcha: {
                show: false,
                status: 0
            },
            captchaBtn: {
                show: false,
                status: 0
            },
            system: {
                show: false,
                status: 0
            }
        };
        $scope.clickable = {
            captcha: true,  // 获取验证码按钮
            submit: true,      // 提交按钮
        };
        $scope.voiceCaptcha = false;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.getCaptcha = getCaptcha;
        $scope.submitForm = submitForm;


        function getCaptcha() {
            showErr('phoneForm', 'phoneNew');

            if ($scope['phoneForm']['phoneNew'].$invalid) {
                return;
            }
            $scope.clickable.captcha = false;
            var tmp;
            if ($scope.voiceCaptcha) {
                tmp = account.getSVoiceCaptcha($scope.phone.phoneNew);
            } else {
                tmp = account.getSCaptcha($scope.phone.phoneNew);    
            }

            tmp.then(function (data) {
                if (data.is_succ) {
                    $scope.startTimer();
                } else {

                    if (data.error_code === 3) {
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
            }, function (error) {
                console.log(error);
                $scope.clickable.captcha = true;
            });
        }

        function submitForm(formName) {
            showErr(formName, 'phoneNew');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable.submit = false;
            account.setPhone($scope.phone.phoneNew, $scope.phone.captcha).then(function (data) {

                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.status = 1;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.status = 0;
                        $scope.clickable.submit = true;
                    }, 3000);
                } else {
                    if (data.error_code === 3) {
                        $scope.backErr.captcha.status = 1;
                    }

                    if (data.error_code === 4) {
                        $scope.backErr.phoneNew.status = 1;
                    }
                    $scope.clickable.submit = true;
                }        
            });
        }

        function hideErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = false;
            }

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