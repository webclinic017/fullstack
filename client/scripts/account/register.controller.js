;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountRegisterController', AccountRegisterController);

    AccountRegisterController.$inject = ['$scope', '$timeout', '$state', '$cookies', 'account', 'validator'];

    function AccountRegisterController($scope, $timeout, $state, $cookies, account, validator) {
        $scope.step = 2;
        $scope.account = {
            phone: undefined,
            captcha: undefined,
            email: undefined,
            password: undefined,
            pwdConfirm: undefined,
            realId: undefined,     // 注册成功后生成的真实账号
            demoId: undefined,     // 注册成功后生成的模拟账号
        };

        // 前端错误
        $scope.frontErr = {
            username: {
                show: false,
                tip: validator.regType.username.tip
            },
            phone: {
                show: false,
                reg: validator.regType.phone.reg
            },
            captcha: {
                show: false
            },
            email: {
                show: false,
                reg: validator.regType.email.reg
            },
            password: {
                show: false,
                reg: validator.regType.password.reg,
                tip: validator.regType.password.tip
            },
            pwdConfirm: {
                show: false
            }
        };

        // 后端错误
        $scope.backErr = {
            username: {
                show: false,
                status: 0    //0, 1, 2
            },
            phone: {
                show: false,
                status: 0    //0, 1
            },
            captcha: {
                show: false,
                status: 0    // 0, 1
            },
            captchaBtn: {
                show: false,
                status: 0
            },
            email: {
                show: false,
                status: 0    //0, 1
            },
            system: {
                show: false,
                status: 0    // 0, 1, 2
            }
        };
        
        // 按钮是否可点击
        $scope.clickable = {
            captcha: true,  // 获取验证码按钮
            submit: true       // 提交按钮
        };
        $scope.voiceCaptcha = false;
        $scope.showErr = showErr;
        $scope.hideErr = hideErr;
        $scope.submitRegisterForm = submitRegisterForm;
        $scope.getCaptcha = getCaptcha;
        var token;
        
        // 设置 token 在获取手机验证码时提交该 token 解决更换 ip 批量注册的问题
        account.setToken();

        // 从 landing page 进入时
        // $scope.account.username = $state.params.name;
        // $scope.account.phone = $state.params.phone;
        // $scope.account.email = $state.params.email;

        // if ($scope.account.username) {
        //     if (!validator.isValidTxt('username', $scope.account.username, 4, 20)) {
        //         $scope.account.username = undefined;
        //     }
        // }

        // if ($scope.account.phone) {
        //     if (!validator.regType.phone.reg.test($scope.account.phone)) {
        //         $scope.account.phone = undefined;
        //     }
        // }

        // if ($scope.account.email) {
        //     if (!validator.regType.email.reg.test($scope.account.email)) {
        //         $scope.account.email = undefined;
        //     }
        // }

        // 监听 step 如果是注册成功则获取账户信息
        // $scope.$watch('step', function (newVal) {
        //     if (newVal === 2) {
        //         account.getLayoutInfo().then(function (data) {
        //             $scope.account.realId = data.real_id;
        //             $scope.account.demoId = data.demo_id;
        //         });
        //     }
        // });


        function checkUsernameExist() {
            account.checkExist('', $scope.account.username).then(function (data) {
                // 如果存在
                if (data.data) {
                    $scope.backErr.username.status = 1;
                } else {
                    $scope.backErr.username.status = 0;
                }
            });
        }

        function checkEmailExist() {
            account.checkExist($scope.account.email).then(function (data) {

                // 如果存在
                if (data.data) {
                    $scope.backErr.email.status = 1;
                } else {
                    $scope.backErr.email.status = 0;
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
                tmp = account.getRVoiceCaptcha($scope.account.phone);
            } else {
                token = $cookies['tiger_token'];
                tmp = account.getRCaptcha($scope.account.phone, token);    
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
                            data.error_code === 5 || data.error_code === 8) {
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

        function showErr(formName, controlName) {
            if ($scope.frontErr[controlName]) {
                $scope.frontErr[controlName].show = true;
            }

            if ($scope[formName][controlName].$invalid) {
                return;
            }

            if ($scope.backErr[controlName]) {
                $scope.backErr[controlName].show = true;

                if (controlName === 'username') {
                    checkUsernameExist();
                }

                if (controlName === 'email') {
                    checkEmailExist();
                }
            }
        }

        function goNextStep() {
            $scope.step ++;    
        }

        function submitRegisterForm(formName) {
            showErr(formName, 'username');
            showErr(formName, 'phone');
            showErr(formName, 'captcha');
            showErr(formName, 'email');
            showErr(formName, 'password');
            showErr(formName, 'pwdConfirm');

            if ($scope[formName].$invalid) {
                return;
            }

            $scope.clickable.submit = false;
            account.register($scope.account.username, 
                    $scope.account.phone,
                    $scope.account.captcha,
                    $scope.account.email, 
                    $scope.account.password).then(function (data) {
                    
                if (data.is_succ) {
                    // 成功   
                    goNextStep();
                    ga('send', 'event', 'register', 'register');
                    // google adwords
                    goog_report_conversion();
                    _hmt.push(['_trackEvent', 'account', 'register']);
                    _mvq.push(['$setGeneral', 'registered', '', $scope.account.username, $scope.account.phone]);
                } else {


                    // username 
                    if (data.error_code === 7) {
                        $scope.backErr.username.show = true;
                        $scope.backErr.username.status = 1;
                        $scope.clickable.submit = true;
                    }

                    if (data.error_code === 10) {
                        $scope.backErr.username.show = true;
                        $scope.backErr.username.status = 2;
                        $scope.clickable.submit = true;
                    }

                    // phone
                    if (data.error_code === 6) {
                        $scope.backErr.phone.show = true;
                        $scope.backErr.phone.status = 1;
                        $scope.clickable.submit = true;
                    }

                    // 验证码错误
                    if (data.error_code === 5 || data.error_code === 12) {
                        $scope.backErr.captcha.show = true;
                        $scope.backErr.captcha.status = 1;
                        $scope.clickable.submit = true;
                    }

                    // 系统错误
                    if (data.error_code === 4) {
                        $scope.backErr.system.show = true;
                        $scope.backErr.system.status = 1;

                        $timeout(function () {
                            $scope.backErr.system.show = false;
                            $scope.backErr.system.status = 0;
                            $scope.clickable.submit = true;
                        }, 3000);
                    }

                    if (data.error_code === 11) {
                        $scope.backErr.system.show = true;
                        $scope.backErr.system.status = 2;

                        $timeout(function () {
                            $scope.backErr.system.show = false;
                            $scope.backErr.system.status = 0;
                            $scope.clickable.submit = true;
                        }, 3000);
                    }
                }
            }, function (error) {
                console.log(error);
                $scope.clickable.submit = true;
            });
        }
    }
})();