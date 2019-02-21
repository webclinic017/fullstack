;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountLoginController', AccountLoginController);

    AccountLoginController.$inject = ['$scope', '$interval', '$timeout', '$rootScope', '$state', 'account', 'validator', '$cookies', 'lang', '$modal', '$layer'];

    function AccountLoginController($scope, $interval, $timeout, $rootScope, $state, account, validator, $cookies, lang, $modal, $layer) {
        $scope.loginType = 'pass';  // 登录方式 code ->验证码登录，pass ->密码登录
        $scope.loginStep2 = 1;      // 密码登录进行到哪一步
        $scope.loginStep3 = 2;      // 1邮箱登录2手机登录
        // $scope.step1PasswordStatus = true;  // 验证码登录密码显示or隐藏
        // $scope.step2PasswordStatus = true;  // 密码登录密码显示or隐藏
        // $scope.forgetPasswordStatus = true; // 忘记密码设置密码显示or隐藏
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
            // phonePwPhone: '', //---|
            // phoneVePhone: '', //---|--合为phonePhone
            // forgetPhone: '',  //---|
            phonePhone: '',
            phoneVeCode: '', 
            // emailVeEmail: '', //-----|
            // emailPwEmail: '', //-----|---合为emailEmail
            // forgetEmail: '',  //-----|
            emailEmali: '',
            emailVeCode: '',
            step1Password: '',
            step2Password: '',
            forgetPhoneCode: '',
            forgetEmailCode: '',
            forgetPassword: '',
            forgetPassword2: '',
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
        // 根据域名判断是否为cn 无用
        if(lang.hostIsCn()){
            selectArea({phone_code: 86})
        }
        var token;
        // console.log(lang.text("actLogin1"));

        // 从 landing page 进入时
        $scope.account.phonePhone = $state.params.phone;
        // 验证码登录切换手机邮箱
        $scope.toggleLoginMethod = function (n) {
            $scope.loginStep3 = n;
        }

        // 切换登录方式
        $scope.changeLoginType = function (loginType) {
            $scope.loginType = loginType;
        };
        // 清除loginStep1 手机号
        $scope.clearPhone = function (account_num) {
            $scope.account[account_num] = '';
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
            var type; // 类型
            var phone_code, account_num, msg, account_type = 0; // 区号， 账号， msg

            // if ($scope[formName][phoneName].$invalid) {
            //     layer.msg(lang.text("actLogin3"));    //请填写手机号
            //     return;
            // }
            // if (!$scope.frontErr.phone.reg.test($scope.account[phoneName])) {
            //     layer.msg(lang.text("actLogin16"));     //请填写正确的手机号
            //     return;
            // }
            // 手机登录
            if($scope.loginStep3 == 2){
                if(!showPhoneVel()){ return };
                phone_code = $scope.account.phoneArea.value;
                account_num = $scope.account.phonePhone;
                account_type = 1;
                msg = lang.text('tigerWitID.login.tip6_21')
            }else if($scope.loginStep3 == 1){
                if(!showEmaliVel()){ return };
                phone_code = '';
                account_num = $scope.account.emailEmali;
                account_type = 2;
                msg = lang.text('tigerWitID.login.tip6_2')
            }
            token = $cookies['code_token'];

            switch ($scope.loginStep2) {
                case 1:
                    type = 4;       // 登录
                    break;
                case 2:
                    type = 2;       // 忘记密码
                    break;
                default:
                    type = 0;
                    break;
            }

            account.sendCode(account_num, token, type, phone_code, account_type).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    countDown(name);
                    var obj = {
                        title: lang.text('tigerWitID.login.verificationCodeSent'),
                        titleClass: 'account_login__layer-title',
                        msg: lang.text('tigerWitID.login.tip6_1') + msg + account_num + lang.text('tigerWitID.login.tip6_3'),
                        msgClass: 'account_login__layer-msg',
                        btns: {},
                        btnsClass: 'account_login__layer-btns'
                    }
                    obj.btns[lang.text("tigerWitID.confirm2")] = function(){};
                    $layer(obj);
                    if( $scope.loginStep3 == 1){
                        sa.track('email_code')
                    }
                    sa.track('btn_register_code');
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 登录
        $scope.login = function (formName, is_agree) {
            if (!$scope.loginBtnStatus) return;
            // if ($scope[formName].$invalid) {
            //     layer.msg(lang.text("actLogin19"));       //请填写完整信息
            //     return;
            // }

            // 神策统计 - 点击登录
            if(!is_agree) {
                sa.track('click_login', {
                    login_type: $scope.loginType == 'code' ? '验证码登录' : lang.text("actLogin2")
                });
            }
            
            var msg;
            var para = {
                ib_pid: $cookies['ib_pid'] || null,  // 代理推广
                invite_status: $cookies['invite_status'] || null,
            };
            para.remember = $scope.rememberLoginStatus ? 1 : 0;
            // 验证码登录
            if ($scope.loginType == 'code') {
                para.login_type = 2;
                // 邮箱登录
                if ($scope.loginStep3 == 1){
                    if(!showEmaliVel()){ return };
                    if (!($scope.account.emailVeCode)) {
                        layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                        return;
                    }
                    para = angular.extend({
                        account_type: 2,
                        account: $scope.account.emailEmali,
                        password: $scope.account.emailVeCode,
                    }, para);
                    msg = lang.text('tigerWitID.login.tip7_21');
                } else {
                    // 手机
                    if(!showPhoneVel()){ return };
                    if (!($scope.account.phoneVeCode)) {
                        layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                        return;
                    }

                    para = angular.extend({
                        account_type: 1,
                        account: $scope.account.phonePhone,
                        password: $scope.account.phoneVeCode,
                        phone_code: $scope.account.phoneArea.value,

                    }, para);
                    msg = lang.text('tigerWitID.login.tip7_2');
                }
            } else {
                para.login_type = 1;
                if ($scope.loginStep3 == 1){
                    if(!showEmaliVel()){ return };
                    if (!($scope.account.step1Password)) {
                        layer.msg(lang.text('register11'));     //请填写密码
                        return;
                    }
                    para = angular.extend({
                        account_type: 2,
                        account: $scope.account.emailEmali,
                        password: account.encrypt($scope.account.step1Password),
                    }, para);
                    msg = lang.text('tigerWitID.login.tip7_21');
                } else {
                    // 手机
                    if(!showPhoneVel()){ return };
                    if (!($scope.account.step2Password)) {
                        layer.msg(lang.text('register11'));     //请填写密码
                        return;
                    }
                    para = angular.extend({
                        account_type: 1,
                        account: $scope.account.phonePhone,
                        password: account.encrypt($scope.account.step2Password),
                        phone_code: $scope.account.phoneArea.value,

                    }, para);
                    msg = lang.text('tigerWitID.login.tip7_2');
                }
            }
            (is_agree == "is_agree") && (para.is_agree = 1);
            layer.load();
            $scope.loginBtnStatus = false;

            account.login(para).then(function (data) {
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    $scope.writeCookie({nameKey: 'token', nameValue: data.data.token});
                    $scope.writeCookie({nameKey: 'user_code', nameValue: data.data.user_code});
                    $scope.writeCookie({nameKey: 'username', nameValue: data.data.username});
                    $scope.writeCookie({nameKey: 'username_en', nameValue: data.data.username_en});
                    // $scope.writeCookie({nameKey: 'user_code', nameValue: '1234'});
                    // $scope.writeCookie({nameKey: 'username', nameValue: '123k'});
                    // $scope.writeCookie({nameKey: 'username_en', nameValue: '22asd'});
                    $timeout(function () {
                        // console.log($cookies['user_code']);
                        var user_id = $cookies['user_code'];
                        // console.log(user_id);
                        if (user_id) {
                            sa.login(user_id);
                        }
                        $scope.getEmailPhone(true);
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
                        // lang.globalOrCn(data.data.area_id);
                        $scope.$emit('relogin_info');
                        window.location.href="/space/#/center";
                    }, 150);
                } else {
                    // 登录时，用户不存在，返回 code 为 100504
                    if(data.code == 100504) {
                        var obj = {
                            title: lang.text('tigerWitID.login.tip7_1') + msg + lang.text('tigerWitID.login.tip7_3'),
                            titleClass: 'account_login__layer-title',
                            msg: lang.text('tigerWitID.login.tip9_1') + msg + lang.text('tigerWitID.login.tip9_3'),
                            msgClass: 'account_login__layer-msg',
                            btns: {},
                            btnsClass: 'account_login__layer-btns'
                        }
                        obj.btns[lang.text('tigerWitID.login.goRegister')] = function(){
                            $state.go('account.subpage', {subpage: 'register'});
                        }
                        obj.btns[lang.text("tigerWitID.cancel")] = function(){};
                        $layer(obj)
                    } else if ((data.code == 100402) || (data.code == 100403)) {  // 未确认注册协议
                        openWebAgmentModal(data.code, function(resolve, e){
                            $scope.login(formName, 'is_agree');
                            layer.close(resolve.layIndex)
                        })
                    } else {
                        if(data.code == 100505){
                            
                        }
                        layer.msg(data.message);
                    }
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
            // if ($scope[formName].$invalid) {
            //     layer.msg(lang.text("actLogin19"));   //请填写完整信息
            //     return;
            // }
            var phone_code = null;
            var account_type = 0;
            if($scope.loginStep3 == 1){
                // 邮箱登录
                if(!showEmaliVel()){ return };
                if (!($scope.account.forgetEmailCode)) {
                    layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                    return;
                }
                phone_code = null;
                account_type = 2;
            } else {
                // 手机登录
                if(!showPhoneVel()){ return };
                if (!($scope.account.forgetPhoneCode)) {
                    layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                    return;
                }
                phone_code = $scope.account.phoneArea.value;
                account_type = 1;
            }
            layer.load();
            $scope.loginBtnStatus = false;
            account.checkCode($scope.account[name], $scope.account[code], account_type, phone_code).then(function (data) {
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
                layer.msg(lang.text("register11"));     //请输入密码
                return;
            }
            if($scope.account.forgetPassword !== $scope.account.forgetPassword2) {
                layer.msg(lang.text('tigerWitID.login.passwordsEnteredDoNotMatch'));     //两次输入的密码不一致
                return;
            }
            layer.load();
            $scope.loginBtnStatus = false;
            var forgetPhone, forgetCode;
            // 邮箱登录
            if($scope.loginStep3 == 1){
                forgetPhone = $scope.account.emailEmali;
                forgetCode = $scope.account.forgetEmailCode;
            }else{
                forgetPhone = $scope.account.phonePhone;
                forgetCode = $scope.account.forgetPhoneCode;
            }
            account.setNewPwd(forgetPhone, forgetCode, $scope.account.forgetPassword, $scope.account.phoneArea.value).then(function (data) {
                // console.log(data);
                layer.closeAll();
                $scope.loginBtnStatus = true;

                if (data.is_succ) {
                    var obj = {
                        title: lang.text('tigerWitID.login.tip10'),
                        titleClass: 'account_login__layer-title',
                        msg: lang.text('tigerWitID.login.tip11'),
                        msgClass: 'account_login__layer-msg',
                        btns: {},
                        btnsClass: 'account_login__layer-btns'
                    }
                    obj.btns[lang.text('tigerWitID.login.goLogin')] = function(){
                        $scope.loginStep2 = 1;
                    }
                    obj.btns[lang.text("tigerWitID.cancel")] = function(){};
                    $layer(obj)
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 重新登陆
        // $scope.goLogin = function () {
        //     $scope.loginStep2 = 1;
        // };


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
        // 验证手机号与区号
        function showPhoneVel () {
            if(!($scope.account.phoneArea.value)){
                layer.msg(lang.text("tigerWitID.login.selectAreaCode")) // 请选择区号
                return false;
            }
            if (!($scope.account.phonePhone)) {
                layer.msg(lang.text("register8"));     //请填写手机号
                return false;
            }
            return true;
        }

        // 验证邮箱
        function showEmaliVel () {
            if (!($scope.account.emailEmali)) {
                layer.msg(lang.text("tigerWitID.login.enterEmail"));     //请输入邮箱
                return false;
            }
            if (!validator.regType.email.reg.test($scope.account.emailEmali)) {
                layer.msg(validator.regType.email.tip);     //请填写正确的邮箱
                return false;
            }
            return true;
        }
    }
})();
