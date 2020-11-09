;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoPhoneController', SettingInfoPhoneController);

    SettingInfoPhoneController.$inject = ['$scope', '$timeout', '$cookies', 'validator', 'account', 'fun'];

    function SettingInfoPhoneController($scope, $timeout, $cookies, validator, account, fun) {
        // step1 => binding old Phone , step2 => binding new Phone
        $scope.step = 1;

        $scope.phone = {
            oldCaptcha: '',
            phone_code: {
                key: '+86',
                value: '86'
            },
            phoneNew: '',
            captcha: ''
        };
        $scope.$watch('settingInfo.phone', function (newVal, oldVal) {

            $scope.step = newVal ? 1 : 2;
            if (newVal) {
                $scope.phone.phone_code = {
                    key: '+' + $scope.settingInfo.phone_code,
                    value: $scope.settingInfo.phone_code
                }
            }

        });
        // 为兼容下拉组件
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
            },
            oldCaptcha: {
                show: false
            }
        };

        $scope.backErr = {
            oldCaptcha: {
                show: false,
                status: 0
            },
            oldCaptchaBtn: {
                show: false,
                msg: ''
            },
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
            oldCaptcha: true,  // 获取验证码按钮
            oldSubmit: true,      // 提交按钮
            captcha: true,  // 获取验证码按钮
            submit: true,      // 提交按钮
        };
        $scope.voiceCaptcha = false;  // 语音验证码
        $scope.oldVoiceCaptcha = false;  // 语音验证码
        $scope.isSendVoice = false;
        $scope.isOldSendVoice = false;
        $scope.hideErr = hideErr;
        $scope.showErr = showErr;
        $scope.getCaptcha = getCaptcha;
        $scope.checkPhoneCode = checkPhoneCode;
        $scope.submitForm = submitForm;
        $scope.selectWorld = selectWorld;
        var token;
        getWorlds();
        $scope.validateInputCode = validateInputCode;
        $scope.validateInputPhone = validateInputPhone;

        var InputPhone = fun.debounce(function () {
            $scope.toGtagEvent('inp_change_phone_live_web', { belong: 'tigerwit' })
        }, 300);
        var InputVoicCode = fun.debounce(function () {
            $scope.toGtagEvent('inp_code_phone_change_web', { belong: 'tigerwit' })
        }, 300);
        function validateInputCode() {
          InputVoicCode && InputVoicCode()
        }
        function validateInputPhone() {
          InputPhone && InputPhone()
        }
        function getCaptcha(type) {
            token = $cookies['code_token'];

            if (type == 'new') {
                showErr('phoneForm', 'phoneNew');
                if ($scope['phoneForm']['phoneNew'].$invalid) {
                    return;
                }
                var params = {
                    world_code: $scope.personal.region.world_code,
                    account: $scope.phone.phoneNew,
                    code_token: token,
                    type: 3,
                    phone_code: $scope.phone.phone_code.value,
                    account_type: 1
                }
                account.sendCode(params).then(function (data) {
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.toGtagEvent('click_get code_account_phone_web', { belong: 'tigerwit', get_code_account: 'Y' })
                        $scope.isSendVoice = data.data.is_send_voice;
                        $scope.startTimer();
                    } else {
                        $scope.toGtagEvent('click_get code_account_phone_web', { belong: 'tigerwit', get_code_account: 'N' })
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
            if (type == 'old') {
                $scope.clickable.oldCaptcha = false;
                var params = {
                    world_code: $scope.personal.region.world_code,
                    account: '',
                    code_token: token,
                    type: 3,
                    phone_code: '',
                    account_type: 1
                }
                account.sendCode(params).then(function (data) {
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.toGtagEvent('click_get code_phone_change_web', { belong: 'tigerwit', get_code_change: 'Y' })
                        $scope.isOldSendVoice = data.data.is_send_voice;
                        $scope.oldStartTimer();
                    } else {
                        $scope.toGtagEvent('click_get code_phone_change_web', { belong: 'tigerwit', get_code_change: 'N' })
                        $scope.backErr.oldCaptchaBtn.show = true;
                        $scope.backErr.oldCaptchaBtn.msg = data.message;

                        $timeout(function () {
                            $scope.backErr.oldCaptchaBtn.show = false;
                            $scope.backErr.oldCaptchaBtn.msg = 0;
                            $scope.clickable.oldCaptcha = true;
                        }, 3000);
                    }
                });
            }


        }
        // 获取区号
        function getWorlds() {
            account.getWorlds({type: 1}).then(function (data) {
                if (!data) return;
                // console.log(data);
                if (!data.is_succ) {
                    return;
                }
                $scope.worlds = data.data;
            });
        }

        function selectWorld(target) {
            $scope.phone.phone_code = {
                key: '+' + target.phone_code,
                value: target.phone_code
            }
        }

        function checkPhoneCode(formName) {
            showErr(formName, 'oldCaptcha');

            if ($scope.oldPhoneForm.oldCaptcha.$invalid) {
                return;
            }
            $scope.clickable.oldSubmit = false;

            account.checkCode(null, $scope.phone.oldCaptcha, 1).then(function (data) {
                // console.info(data);
                $scope.clickable.oldSubmit = true;
                if (!data) return;
                if (data.is_succ) {
                  if ($scope.settingInfo.phone_verify == 0) {
                    window.location.reload();
                  } else {
                    $scope.step++;
                  }
                } else {
                    layer.msg(data.message, {
                        time: 2000
                    });
                }
            });
        }

        function submitForm(formName, is_info) {
            showErr(formName, 'phoneNew');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }

            // $scope.clickable.submit = false;
            account.setPhone($scope.phone.phone_code.value, $scope.phone.phoneNew, $scope.phone.captcha).then(function (data) {
                $scope.backErr.system.show = true;
                if (data.is_succ) {
                    $scope.toGtagEvent('click_submit_change_phone_web', { belong: 'tigerwit' })
                    if (is_info) {
                      $scope.clickable.submit = true;
                      $timeout(function () {
                          window.location.reload();
                      }, 1000);
                      return;
                    }
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
