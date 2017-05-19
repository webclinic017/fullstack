;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountRegisterController', AccountRegisterController);

    AccountRegisterController.$inject = ['$scope', '$timeout', '$state', '$cookies', 'account', 'validator'];

    function AccountRegisterController($scope, $timeout, $state, $cookies, account, validator) {
        $scope.progress = {
            step: 1
        };
        //截止到16号，交易大赛不可报名。
        $scope.showGame = new Date().getTime() < new Date(2016,4,16).getTime() ? true : false;
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
                msg: ''
            },
            email: {
                show: false,
                status: 0    //0, 1
            },
            system: {
                show: false,
                msg: ''
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
        $scope.goNextStep = goNextStep;
        var token;

        // 设置 token 在获取手机验证码时提交该 token 解决更换 ip 批量注册的问题
        account.setToken();
        // 从 landing page 进入时
        $scope.account.username = $state.params.name;
        $scope.account.phone = $state.params.phone;
        $scope.account.email = $state.params.email;

        if ($scope.account.username) {
            if (!validator.isValidTxt('username', $scope.account.username, 4, 20)) {
                $scope.account.username = undefined;
            }
        }

        if ($scope.account.phone) {
            if (!validator.regType.phone.reg.test($scope.account.phone)) {
                $scope.account.phone = undefined;
            }
        }

        if ($scope.account.email) {
            if (!validator.regType.email.reg.test($scope.account.email)) {
                $scope.account.email = undefined;
            }
        }

        // 监听 $scope.progress.step 如果是注册成功则获取账户信息
        $scope.$watch('progress.step', function (newVal) {
            if (newVal === 4) {
                account.getPersonalInfo().then(function (data) {
                    $scope.account.realId = data.real_id;
                    $scope.account.demoId = data.demo_id;
                });
            }
        });

        function checkUsernameExist() {
            account.checkExist(1, $scope.account.username).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    // 如果存在
                    if (data.data) {
                        $scope.backErr.username.status = 1;
                    } else {
                        $scope.backErr.username.status = 0;
                    }
                }
            });
        }

        function checkEmailExist() {
            account.checkExist(2, $scope.account.email).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    // 如果存在
                    if (data.data) {
                        $scope.backErr.email.status = 1;
                    } else {
                        $scope.backErr.email.status = 0;
                    }
                }
            });
        }

        function getCaptcha(formName) {
            showErr(formName, 'phone');

            if ($scope[formName]['phone'].$invalid) {
                return;
            }

            // umeng
            _czc.push(["_trackEvent","注册页","获取验证码"]);
            
            // 神策数据统计
            sa.track('btn_register_code');
            
            $scope.clickable.captcha = false;
            token = $cookies['code_token'];
            var tmp;
            if ($scope.voiceCaptcha) {
                tmp = account.getRCaptcha($scope.account.phone, token, 1, 2);
            } else {
                tmp = account.getRCaptcha($scope.account.phone, token, 1);
            }

            tmp.then(function (data) {
                // console.info(data);
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
            // console.info($scope.progress.step);
            $scope.progress.step ++;
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

            // 神策数据统计
            sa.track('btn_register_submit');

            $scope.clickable.submit = false;
            account.register(
                $scope.account.username,
                $scope.account.phone,
                $scope.account.captcha,
                $scope.account.email,
                $scope.account.password,
                $state.params.lp,
                $state.params.pid,
                $state.params.unit,
                $state.params.key
            ).then(function (data) {
                $scope.clickable.submit = true;
                if (!data) return;
                if (data.is_succ) {
                    $scope.$emit('relogin_info', 'is_register');

                    // umeng
                    _czc.push(["_trackEvent","注册页","立即注册且成功"]);

                    // 神策数据统计
                    sa.track('btn_register_finish');
                    
                    $timeout(function () {
                        var user_id = $cookies['user_code'];
                        // console.log(user_id);
                        if (user_id) {
                            sa.login(user_id);
                        }

                        // 成功
                        goNextStep();
                    }, 300);
                    
                    window._hmt && _hmt.push(['_trackEvent', 'account', 'register']);
                    window._mvq && _mvq.push(['$setGeneral', 'registered', '', $scope.account.username, $scope.account.phone]);


                } else {

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
    }
})();
