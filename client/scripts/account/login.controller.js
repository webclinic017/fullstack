;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountLoginController', AccountLoginController);

    AccountLoginController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies'];

    function AccountLoginController($scope, $interval, $timeout, $window, $state, account, validator, $cookies) {
        $scope.loginType = 'code';  // 登录方式 code ->验证码登录，pass ->密码登录
        $scope.loginStep1 = 1;      // 验证码登录进行到哪一步
        $scope.loginStep2 = 1;      // 密码登录进行到哪一步
        $scope.step1PasswordStatus = true;  // 验证码登录密码显示or隐藏
        $scope.step2PasswordStatus = true;  // 密码登录密码显示or隐藏
        $scope.forgetPasswordStatus = true; // 忘记密码设置密码显示or隐藏
        $scope.rememberLoginStatus = true;  // 记住登录状态
        $scope.loginBtnStatus = true;       // 登录按钮状态
        $scope.codeBtnStatus = {            // 获取验证码按钮状态
            step1Phone: {
                count: false,       // 点击状态 false 可点击；true 不可点击
                msg: '',            // 倒计时信息
                timer: undefined    // 定时器
            },
            forgetPhone: {
                count: false,
                msg: '',
                timer: undefined
            }
        };

        $scope.frontErr = {
            phone: {
                reg: validator.regType.phone.reg
            }
        };

        $scope.account = {
            step1Phone: '',
            step1Code: '',
            step1Password: '',
            step2Phone: '',
            step2Password: '',
            forgetPhone: '',
            forgetCode: '',
            forgetPassword: ''
        };
        var token;

        account.setToken();
        $interval(function () {
            account.setToken();
        }, 300000);

        // 从 landing page 进入时
        $scope.account.step1Phone = $state.params.phone;


        // 切换登录方式
        $scope.changeLoginType = function (loginType) {
            $scope.loginType = loginType;
        };
        // 清除loginStep1 手机号
        $scope.clearPhone = function (phone) {
            $scope.account[phone] = '';
        };
        // 切换密码显示or隐藏
        $scope.changePasswordStatus = function (status) {
            $scope[status] = !$scope[status];
        };
        // 是否记住登录状态
        $scope.changeRememberLogin = function () {
            $scope.rememberLoginStatus = !$scope.rememberLoginStatus;
        };
        // 获取验证码
        $scope.getCaptcha = function (formName, phoneName) {
            var type;

            if ($scope[formName][phoneName].$invalid) {
                layer.msg("请填写手机号");
                return;
            }
            if (!$scope.frontErr.phone.reg.test($scope.account[phoneName])) {
                layer.msg("请填写正确的手机号");
                return;
            }

            token = $cookies['code_token'];

            switch (phoneName) {
                case 'step1Phone':
                    type = 4;       // 登录
                    break;
                case 'forgetPhone':
                    type = 2;       // 忘记密码
                    break;
                default:
                    type = 0;
                    break;
            }

            account.getRCaptcha($scope.account[phoneName], token, type).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    countDown(phoneName);
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 登录
        $scope.login = function (formName) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg("请填写完整信息");
                return;
            }

            var para = {};
            if ($scope.loginType == 'code') {
                para = {
                    phone: $scope.account.step1Phone,
                    password: $scope.account.step1Code,
                    login_type: 2,
                    remember: $scope.rememberLoginStatus ? 1 : 0,
                    lp: $state.params.lp,
                    pid: $state.params.pid,
                    unit: $state.params.unit,
                    key: $state.params.key
                };
            } else {
                para = {
                    phone: $scope.account.step2Phone,
                    password: account.encrypt($scope.account.step2Password),
                    login_type: 1,
                    remember: $scope.rememberLoginStatus ? 1 : 0
                };
            }
            layer.load();
            $scope.loginBtnStatus = false;

            account.login(para).then(function (data) {
                // console.log(data);
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    if (($scope.loginType == 'code') && data.data.initial && (data.data.initial == 1)) {
                        // 新用户
                        $scope.loginStep1 = 2;
                        $scope.$emit('relogin_info', 'is_register');
                        return;
                    }
                    $timeout(function () {
                        account.hasChecked = false;
                        $state.go('space.center.index', {reload: true});
                        $scope.$emit('relogin_info');
                    }, 100);
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 验证码登录 新用户设置密码
        $scope.setPassword = function (formName) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg("请输入密码");
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;

            account.setPwdFirst($scope.account.step1Password).then(function (data) {
                // console.log(data);
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    $timeout(function () {
                        $state.go('space.center.index', {reload: true});
                    }, 100);
                    
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 忘记密码页
        $scope.goForgetPassword = function () {
            $scope.loginStep2 = 2;
        };
        // 忘记密码页 第二步
        $scope.goForgetPassword2 = function (formName) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg("请填写完整信息");
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;

            account.checkPhoneAndCaptcha($scope.account.forgetPhone, $scope.account.forgetCode).then(function (data) {
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    $scope.loginStep2 = 3;
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 忘记密码 设置密码
        $scope.setForgetPassword = function (formName) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg("请输入密码");
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;

            account.setNewPwd($scope.account.forgetPhone, $scope.account.forgetCode, $scope.account.forgetPassword).then(function (data) {
                // console.log(data);
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    $scope.loginStep2 = 4;
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 重新登陆
        $scope.goLogin = function () {
            $scope.loginStep2 = 1;
        };


        // 获取验证码倒计时
        function countDown (codeType) {
            $scope.codeBtnStatus[codeType].count = true;
            $scope.codeBtnStatus[codeType].msg = 60;

            $interval.cancel($scope.codeBtnStatus[codeType].timer);
            $scope.codeBtnStatus[codeType].timer = $interval(function () {
                $scope.codeBtnStatus[codeType].msg --;

                if ($scope.codeBtnStatus[codeType].msg <= 0) {
                    $scope.codeBtnStatus[codeType].count = false;

                    $interval.cancel($scope.codeBtnStatus[codeType].timer);
                }
            }, 1000);
        }
    }
})();