;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountLoginController', AccountLoginController);

    AccountLoginController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies', 'lang', '$modal'];

    function AccountLoginController($scope, $interval, $timeout, $window, $state, account, validator, $cookies, lang, $modal) {
        $scope.loginType = 'pass';  // 登录方式 code ->验证码登录，pass ->密码登录
        $scope.loginStep2 = 1;      // 密码登录进行到哪一步
        $scope.loginStep3 = 2;      // 1邮箱登录2手机登录
        $scope.step1PasswordStatus = true;  // 验证码登录密码显示or隐藏
        $scope.step2PasswordStatus = true;  // 密码登录密码显示or隐藏
        $scope.forgetPasswordStatus = true; // 忘记密码设置密码显示or隐藏
        $scope.rememberLoginStatus = true;  // 记住登录状态
        $scope.loginBtnStatus = true;       // 登录按钮状态
        $scope.codeBtnStatus = {            // 获取验证码按钮状态
            phoneVePhone: {
                count: false,       // 点击状态 false 可点击；true 不可点击
                msg: '',            // 倒计时信息
                timer: undefined    // 定时器
            },
            forgetPhone: {
                count: false,
                msg: '',
                timer: undefined
            },
            forgetEmail: {
                count: false,
                msg: '',
                timer: undefined
            },
            emailVeEmail: {
                count: false,
                msg: '',
                timer: undefined
            }
        };
        // test
        // openWebAgmentModal(100403, function(resolve, e){
        //     // this 当前点击按钮
        //     console.log(this, resolve, e)
        //     layer.close(resolve.layIndex)
        // })

        $scope.account = {
            phonePwPhone: '',
            phoneVePhone: '',
            phoneVeCode: '',
            emailVeEmail: '',
            emailVeCode: '',
            step1Password: '',
            step2Password: '',
            forgetPhone: '',
            forgetEmail: '',
            forgetPhoneCode: '',
            forgetEmailCode: '',
            forgetPassword: '',
            phoneArea: {
                key: '',
                value: ''
            },
            phoneArea2: {
                key: '',
                value: ''
            }, // 手机区号+国家
        };
        $scope.selectArea = selectArea;
        function selectArea(target) {
            $scope.account.phoneArea = {
                key: '+' + target.phone_code,
                value: target.phone_code
            }
        }
        // 根据域名判断是否为cn
        if('cn.tigerwit.com,cndemo.tigerwit.com,w.dev.tigerwit.com'.indexOf(location.host)!= -1){
            selectArea({phone_code: 86})
        }
        var token;
        // console.log(lang.text("actLogin1"));
        account.setToken();
        $interval(function () {
            account.setToken();
        }, 300000);

        // 从 landing page 进入时
        $scope.account.phoneVePhone = $state.params.phone;
        // 验证码登录切换手机邮箱
        $scope.toggleLoginMethod = function (n) {
            $scope.loginStep3 = n;
        }

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
        $scope.getCaptcha = function (formName, name) {
            var type;
            var phone_code;

            // if ($scope[formName][phoneName].$invalid) {
            //     layer.msg(lang.text("actLogin3"));    //请填写手机号
            //     return;
            // }
            // if (!$scope.frontErr.phone.reg.test($scope.account[phoneName])) {
            //     layer.msg(lang.text("actLogin16"));     //请填写正确的手机号
            //     return;
            // }
            if($scope.loginStep3 == 2){
                if(!($scope.account.phoneArea.value)){
                    layer.msg(lang.text("tigerWitID.login.selectAreaCode"))
                    return;
                }
                phone_code = $scope.account.phoneArea.value;
                if ($scope[formName][name].$invalid) {
                    layer.msg(lang.text("actLogin16"));     //请填写正确的手机号
                    return;
                }
            }else if($scope.loginStep3 == 1){
                phone_code = ''
                if (!validator.regType.email.reg.test($scope[formName][name])) {
                    layer.msg(validator.regType.email.tip);     //请填写正确的邮箱
                    return;
                }
            }
            token = $cookies['code_token'];

            switch (name) {
                case 'phoneVePhone':
                case 'emailVeEmail':
                    type = 4;       // 登录
                    break;
                case 'forgetPhone':
                case 'forgetEmail':
                    type = 2;       // 忘记密码
                    break;
                default:
                    type = 0;
                    break;
            }

            account.sendCode($scope.account[name], token, type, phone_code).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    countDown(name);
                    sa.track('btn_register_code');
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 登录
        openWebAgmentModal(100402, function(resolve, e){
                    $scope.login(formName, 'is_agree');
                    layer.close(resolve.layIndex)
                })
        $scope.login = function (formName, is_agree) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg(lang.text("actLogin19"));       //请填写完整信息
                return;
            }

            // 神策统计 - 点击登录
            // if(!is_agree) {
            //     sa.track('click_login', {
            //         login_type: $scope.loginType == 'code' ? '验证码登录' : lang.text("actLogin2")
            //     });
            // }
            
            var para = {};
            para.remember = $scope.rememberLoginStatus ? 1 : 0;
            if ($scope.loginType == 'code') {
                para.login_type = 2;
                if($scope.loginStep3 == 1){
                    para = angular.extend({
                        account: $scope.account.emailVeEmail,
                        password: $scope.account.emailVeCode,
                    }, para);
                }else{
                    // 手机
                    para = angular.extend({
                        account: $scope.account.phoneVePhone,
                        password: $scope.account.phoneVeCode,
                        phone_code: $scope.account.phoneArea.value,

                    }, para);
                }
            } else {
                para.login_type = 1;
                if($scope.loginStep3 == 1){
                    para = angular.extend({
                        account: $scope.account.emailPwEmail,
                        password: account.encrypt($scope.account.step2Password),
                    }, para);
                }else{
                    // 手机
                    para = angular.extend({
                        account: $scope.account.phonePwPhone,
                        password: account.encrypt($scope.account.step2Password),
                        phone_code: $scope.account.phoneArea.value,

                    }, para);
                }
            }
            // (is_agree == "is_agree") && (para.is_agree = 1);
            layer.load();
            $scope.loginBtnStatus = false;

            account.login(para).then(function (data) {
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    $timeout(function () {
                        // console.log($cookies['user_code']);
                        var user_id = $cookies['user_code'];
                        // console.log(user_id);
                        if (user_id) {
                            sa.login(user_id);
                        }
                    }, 100);
                    // if (($scope.loginType == 'code') && data.data.initial && (data.data.initial == 1)) {
                    //     // 新用户
                    //     $scope.loginStep1 = 2;
                    //     $scope.$emit('relogin_info', 'is_register');

                    //     // 神策统计 - 登录
                    //     $timeout(function () {
                    //         sa.track('login', {
                    //             login_isNew: true,
                    //             login_type: '验证码登录'
                    //         });
                    //     }, 150);
                    //     return;
                    // }
                    $timeout(function () {
                        // 神策统计 - 登录
                        sa.track('login', {
                            login_isNew: false,
                            login_type: $scope.loginType == 'code' ? '验证码登录' : lang.text("actLogin2")
                        });

                        account.hasChecked = false;
                        var url = {
                            cn: 'cn.tigerwit.com,cndemo.tigerwit.com',
                            global: 'global.tigerwit.com,globaldemo.tigerwit.com',
                            local: 'w.tigerwit.com,w.dev.tigerwit.com'
                        };
                        
                        if (url.local.indexOf(location.host) != -1 || (data.data.area_id === '1' && url.cn.indexOf(location.host) != -1) || (data.data.area_id === '2' && url.global.indexOf(location.host) != -1)) {
                            $state.go('space.center.index', {reload: true});
                        } else {
                            if (data.data.area_id === '1') {
                                if (location.host.indexOf('demo') != -1) {
                                    location.href = 'https://globaldemo.tigerwit.com/space/#/space/center/index'
                                } else {
                                    location.href = 'https://global.tigerwit.com/space/#/space/center/index'
                                }
                            } else {
                                if (location.host.indexOf('demo') != -1) {
                                    location.href = 'https://cndemo.tigerwit.com/space/#/space/center/index'
                                } else {
                                    location.href = 'https://cn.tigerwit.com/space/#/space/center/index'
                                }
                            }
                        }

                        $scope.$emit('relogin_info');
                    }, 150);
                } else {
                    // 登录时，用户不存在，返回 code 为 100504
                    // if ((data.code == 100402) || (data.code == 100403)) {
                    //     openWebAgmentModal(data.code, function(resolve, e){
                    //         $scope.login(formName, 'is_agree');
                    //         layer.close(resolve.layIndex)
                    //     })
                    // } else {
                    layer.msg(data.message);
                    // }
                }
            });
        };
        // 验证码登录 新用户设置密码
        // $scope.setPassword = function (formName) {
        //     if (!$scope.loginBtnStatus) return;
        //     if ($scope[formName].$invalid) {
        //         layer.msg(lang.text('actLogin21')); //请输入密码
        //         return;
        //     }
        //     layer.load();
        //     $scope.loginBtnStatus = false;

        //     account.setPwdFirst($scope.account.step1Password).then(function (data) {
        //         // console.log(data);
        //         layer.closeAll();
        //         $scope.loginBtnStatus = true;

        //         if (data.is_succ) {
        //             $timeout(function () {
        //                 $scope.$emit('global.openDredgeMdl', {position: 'register'});
        //                 $state.go('space.center.index', {reload: true});
        //             }, 100);
                    
        //         } else {
        //             layer.msg(data.message);
        //         }
        //     });
        // };
        // 忘记密码页
        $scope.goForgetPassword = function () {
            $scope.loginStep2 = 2;
        };
        // 回到密码登陆页
        $scope.backPassword = function () {
            $scope.loginStep2 = 1;
        };
        // 忘记密码页 第二步
        $scope.goForgetPassword2 = function (formName, name, code) {
            if (!$scope.loginBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg(lang.text("actLogin19"));   //请填写完整信息
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;
            account.checkCode($scope.account[name], $scope.account[code],'', $scope.account.phoneArea.value).then(function (data) {
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
                layer.msg(lang.text("actLogin25"));     //请输入您的账户密码
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;
            var forgetPhone, forgetCode;
            if($scope.loginStep3 == 1){
                forgetPhone = $scope.account.forgetEmail;
                forgetCode = $scope.account.forgetEmailCode;
            }else{
                forgetPhone = $scope.account.forgetPhone;
                forgetCode = $scope.account.forgetPhoneCode;
            }
            account.setNewPwd(forgetPhone, forgetCode, $scope.account.forgetPassword, $scope.account.phoneArea.value).then(function (data) {
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