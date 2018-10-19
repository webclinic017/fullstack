;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoPhoneController', SettingInfoPhoneController);

    SettingInfoPhoneController.$inject = ['$scope', '$timeout', '$cookies', 'validator', 'account'];

    function SettingInfoPhoneController($scope, $timeout, $cookies, validator, account) {
        $scope.phone = {
            phone_code: {
                key: '+86',
                value: '86'
            },
            phoneNew: undefined,
            captcha: undefined
        };
        $scope.phone_test = {
            key: undefined,
            value: undefined
        }

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
                msg: ''
            },
            system: {
                show: false,
                status: 0,
                msg: ''
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
        $scope.selectWorld = selectWorld;
        var token;
        account.setToken();
        getWorlds();

        function getCaptcha() {
            showErr('phoneForm', 'phoneNew');

            if ($scope['phoneForm']['phoneNew'].$invalid) {
                return;
            }
            $scope.clickable.captcha = false;
            token = $cookies['code_token'];
            var tmp;
            if ($scope.voiceCaptcha) {
                tmp = account.sendCode($scope.phone.phoneNew, token, 3, '', 1);
            } else {
                tmp = account.sendCode($scope.phone.phoneNew, token, 3, '', 1);  
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
                        $scope.backErr.captchaBtn.msg = 0;
                        $scope.clickable.captcha = true;
                    }, 3000);
                }
            });
        }

        function getWorlds() {
            account.getWorlds(($scope.lang.isEnglish() ? 'en' : 'cn')).then(function (data) {
                if (!data) return;
                // console.log(data);
                if (!data.is_succ) {
                    return;
                }
                $scope.worlds = data.data;
            });
        }

        function selectWorld (target) {
            $scope.phone.phone_code = {
                key: '+'+target.phone_code,
                value: target.phone_code
            }
        }

        function submitForm(formName) {
            showErr(formName, 'phoneNew');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable.submit = false;
            account.setPhone($scope.phone.phone_code.value, $scope.phone.phoneNew, $scope.phone.captcha).then(function (data) {
                $scope.backErr.system.show = true;
                if (data.is_succ) {
                    $scope.backErr.system.status = 1;

                    // 神策数据统计
                    // 不再统计phone 和 email
                    // sa.setProfile({
                    //     phone: $scope.phone.phoneNew
                    // });
                    
                    $scope.settingInfo.phone = $scope.phone.phoneNew; 

                    $timeout(function () {
                        window.location.reload();
                    }, 1000); 
                } else {
                    $scope.backErr.system.status = 2;
                    $scope.backErr.system.msg = data.message;
                    $scope.clickable.submit = true;  
                }
                $timeout(function () {
                    $scope.backErr.system.show = false;
                    $scope.backErr.system.status = 0;
                    $scope.clickable.submit = true;
                }, 3000);  
                  
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