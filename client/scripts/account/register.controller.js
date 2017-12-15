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
        $scope.account = {
            phone: undefined,
            captcha: undefined,
            password: undefined
        };

        // 前端错误
        $scope.frontErr = {
            phone: {
                show: false,
                reg: validator.regType.phone.reg
            },
            captcha: {
                show: false
            },
            password: {
                show: false,
                reg: validator.regType.password.reg,
                tip: validator.regType.password.tip
            }
        };

        // 后端错误
        $scope.backErr = {
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
        $scope.checkPhoneCode = checkPhoneCode;
        $scope.submitRegisterForm = submitRegisterForm;
        $scope.getCaptcha = getCaptcha;
        $scope.goNextStep = goNextStep;
        var token;

        // 设置 token 在获取手机验证码时提交该 token 解决更换 ip 批量注册的问题
        account.setToken();
        // 从 landing page 进入时
        // $scope.account.username = $state.params.name;
        $scope.account.phone = $state.params.phone;
        // $scope.account.email = $state.params.email;

        // if ($scope.account.username) {
        //     if (!validator.isValidTxt('username', $scope.account.username, 4, 20)) {
        //         $scope.account.username = undefined;
        //     }
        // }

        if ($scope.account.phone) {
            if (!validator.regType.phone.reg.test($scope.account.phone)) {
                $scope.account.phone = undefined;
            }
        }

        // if ($scope.account.email) {
        //     if (!validator.regType.email.reg.test($scope.account.email)) {
        //         $scope.account.email = undefined;
        //     }
        // }

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
                tmp = account.sendCode($scope.account.phone, token, 1, 2);
            } else {
                tmp = account.sendCode($scope.account.phone, token, 1);
            }

            tmp.then(function (data) {
                console.info(data);
                if (!data) return;
                if (data.is_succ) {
                    $scope.startTimer();
                } else {
                    $scope.clickable.captcha = true;
                    layer.msg(data.message);
                }
            });
        }

        function checkPhoneCode (formName) {
            showErr(formName, 'phone');
            showErr(formName, 'captcha');

            if ($scope[formName].$invalid) {
                return;
            }

            account.checkPhoneAndCaptcha($scope.account.phone, 
                    $scope.account.captcha).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    goNextStep();
                } else {

                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
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

            showErr(formName, 'password');

            if ($scope[formName].$invalid) {
                return;
            }

            // 神策数据统计
            sa.track('btn_register_submit');

            $scope.clickable.submit = false;
            account.register({
                phone: $scope.account.phone,
                verify_code: $scope.account.captcha,
                password: $scope.account.password,
                lp: $state.params.lp,
                pid: $state.params.pid,
                unit: $state.params.unit,
                key: $state.params.key
            }).then(function (data) {
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
