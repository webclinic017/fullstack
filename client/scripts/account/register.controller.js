;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountRegisterController', AccountRegisterController);

    AccountRegisterController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies', 'lang', '$modal', '$layer'];

    function AccountRegisterController($scope, $interval, $timeout, $window, $state, account, validator, $cookies, lang, $modal, $layer) {
        $scope.registerStep1 = 1;      // 验证码注册进行到哪一步
        $scope.registerStep3 = 1;      // 2邮箱验证码注册1手机验证码注册
        $scope.step1PasswordStatus = true;  // 验证码登录密码显示or隐藏
        // $scope.rememberLoginStatus = true;  // 记住登录状态
        $scope.registerBtnStatus = true;       // 登录按钮状态
        $scope.codeBtnStatus = {            // 获取验证码按钮状态
            step1Phone: {
                count: false,       // 点击状态 false 可点击；true 不可点击
                msg: '',            // 倒计时信息
                timer: undefined    // 定时器
            },
            emailText: {
                count: false,
                msg: '',
                timer: undefined
            }
        };
        $scope.area_id = ''; // 1为国内，2为国际区
        // test
        openWebAgmentModal(100402, function(resolve, e){
            // this 当前点击按钮
            console.log(this, resolve, e)
            layer.close(resolve.layIndex)
        })


        $scope.account = {
            country: {
                key: '',
                value: ''
            }, 
            step1Phone: '',
            step1Code: '',
            step1Password: '',
            step2Password: '',
            emailText: '',
            emailCode: '',
            phoneArea: {
                key: '',
                value: ''
            },
            phoneArea2: {
                key: '',
                value: ''
            }, // 手机区号+国家(无用只为兼容指令)
        };
        $scope.selectArea = selectPhoneArea;
        function selectPhoneArea(target){
            $scope.account.phoneArea = {
                key: '+' + target.phone_code,
                value: target.phone_code
            }
        }
        // 选择国家
        $scope.selectWorld = function (target) {
            if(target.code === 'CN'){
                $scope.registerStep3 = 1;
            }
            selectPhoneArea(target);
        }
        // 根据域名判断是否为cn
        if('cn.tigerwit.com,cndemo.tigerwit.com,w.dev.tigerwit.com'.indexOf(location.host)!= -1){
            $scope.account.country.key = lang.text("china");
            $scope.account.country.value = 'CN';
            $scope.selectWorld({phone_code: 86, code: 'CN'})
        }
        var token;
        // console.log(lang.text("actLogin1"));
        account.setToken();
        $interval(function () {
            account.setToken();
        }, 300000);

        // 从 landing page 进入时
        $scope.account.step1Phone = $state.params.phone;
        // 验证码登录切换手机邮箱
        $scope.toggleLoginMethod = function (n) {
            $scope.registerStep3 = n;
        }

        // 清除registerStep1 手机号
        $scope.clearPhone = function (phone) {
            $scope.account[phone] = '';
        };
        // 切换密码显示or隐藏
        $scope.changePasswordStatus = function (status) {
            $scope[status] = !$scope[status];
        };
        // 是否记住登录状态
        // $scope.changeRememberLogin = function () {
        //     $scope.rememberLoginStatus = !$scope.rememberLoginStatus;
        // };
        // 获取验证码
        $scope.getCaptcha = function (formName, name) {
            var type = 1;
            var phone_code, account_num, msg, account_type = 0; // 区号， 账号， msg

            // if ($scope[formName][name].$invalid) {
            //     layer.msg(lang.text("actLogin3"));    //请填写手机号
            //     return;
            // }
            // 手机
            if($scope.registerStep3 == 1){
                if(!showPhoneVel()){ return };
                phone_code = $scope.account.phoneArea.value;
                account_num = $scope.account.step1Phone;
                account_type = 1;
                msg = lang.text('tigerWitID.login.tip6_21')
            }else if($scope.registerStep3 == 2){
                if(!showEmaliVel()){ return };
                phone_code = ''
                account_num = $scope.account.emailText;
                account_type = 2;
                msg = lang.text('tigerWitID.login.tip6_2')
            }

            token = $cookies['code_token'];

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
                    if( $scope.registerStep3 == 2){
                        sa.track('email_code')
                    }
                    sa.track('btn_register_code');
                } else {
                    layer.msg(data.message);
                }
            });
        };
        // 注册
        $scope.register = function (formName, is_agree) {
            if (!$scope.registerBtnStatus) return;
            if(!($scope.account.country.value)){
                layer.msg(lang.text("tigerWitID.login.selectCountry"));
                return;
            }
            // if ($scope[formName].$invalid) {
            //     layer.msg(lang.text("actLogin19"));       //请填写完整信息
            //     return;
            // }
            var msg;
            // // 神策统计 - 点击登录
            // if(!is_agree) {
            //     sa.track('click_login', {
            //         login_type: $scope.loginType == 'code' ? '验证码登录' : lang.text("actLogin2")
            //     });
            // }
            var para = {
                login_type: 2,
                lp: $state.params.lp,
                pid: $state.params.pid,
                unit: $state.params.unit,
                key: $state.params.key,
                world_code: $scope.account.country.value,
                ib_pid: $cookies['ib_pid'] || null,  // 代理推广
                invite_status: $cookies['invite_status'] || null,
            };
            if($scope.registerStep3 == '2'){
                // 邮箱注册
                if(!showEmaliVel()){ return };
                if (!($scope.account.emailCode)) {
                    layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                    return;
                }
                para = angular.extend({
                    account: $scope.account.emailText,
                    password: $scope.account.emailCode,
                },para);
                msg = lang.text('tigerWitID.login.tip8_21');
            }else if($scope.registerStep3 == '1'){
                // 手机号注册
                if(!showPhoneVel()){ return };
                if (!($scope.account.step1Code)) {
                    layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                    return;
                }
                para = angular.extend({
                    account: $scope.account.step1Phone,
                    password: $scope.account.step1Code,
                    phone_code: $scope.account.phoneArea.value,
                },para);
                msg = lang.text('tigerWitID.login.tip8_2');
            }
            (is_agree == "is_agree") && (para.is_agree = 1);
            layer.load();
            $scope.registerBtnStatus = false;

            account.register(para).then(function (data) {
                layer.closeAll();
                $scope.registerBtnStatus = true;

                if (data.is_succ) {
                    // 新用户
                    $scope.registerStep1 = 2;
                    $scope.area_id = data.data.area_id;
                    $scope.$emit('relogin_info', 'is_register');
                    // 神策统计 - 注册
                    $timeout(function () {
                        // console.log($cookies['user_code']);
                        var user_id = $cookies['user_code'];
                        // console.log(user_id);
                        if (user_id) {
                            sa.login(user_id);
                        }
                    }, 100);
                    $timeout(function () {
                        sa.track('login', {
                            login_isNew: true,
                            registration_type: $scope.registerStep3 == 1 ? "手机注册" : "邮箱注册"
                        });
                    }, 150);
                    return;
                }else {
                    if ((data.code == 100402) || (data.code == 100403)) {
                        openWebAgmentModal(data.code, function(resolve, e){
                            $scope.register(formName, 'is_agree');
                            layer.close(resolve.layIndex)
                        })
                    } else if (data.code == 100503) {
                        // 注册时，用户已存在，返回 code 为 100503
                        var obj = {
                            title: msg + lang.text('tigerWitID.login.tip8_5'),
                            titleClass: 'account_login__layer-title',
                            msg: lang.text('tigerWitID.login.tip8_1') + msg + lang.text('tigerWitID.login.tip8_3') + msg + lang.text('tigerWitID.login.tip8_4'),
                            msgClass: 'account_login__layer-msg',
                            btns: {},
                            btnsClass: 'account_login__layer-btns'
                        }
                        obj.btns[lang.text('tigerWitID.login.goLogin')] = function(){
                            $state.go('account.subpage', {subpage: 'login'});
                        }
                        obj.btns[lang.text("tigerWitID.cancel")] = function(){};
                        $layer(obj)
                    } else {
                        layer.msg(data.message);
                    }
                }
            });
        };
        // 验证码登录 新用户设置密码
        $scope.setPassword = function (formName) {
            if (!$scope.registerBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg(lang.text('register11')); //请输入密码
                return;
            }
            if($scope.account.step1Password !== $scope.account.step2Password) {
                layer.msg(lang.text('tigerWitID.login.passwordsEnteredDoNotMatch'));     //两次输入的密码不一致
                return;
            }
            layer.load();
            $scope.registerBtnStatus = false;

            account.setPwdFirst($scope.account.step1Password).then(function (data) {
                // console.log(data);
                layer.closeAll();
                $scope.registerBtnStatus = true;

                if (data.is_succ) {
                    $timeout(function () {
                        $scope.$emit('global.openDredgeMdl', {position: 'register'});
                        lang.globalOrCn($scope.area_id);
                    }, 100);
                    
                } else {
                    layer.msg(data.message);
                }
            });
        };
        $scope.skipSetPass = function(){
            $timeout(function () {
                sa.track('skip_register');
            }, 150);
            $scope.$emit('global.openDredgeMdl', {position: 'register'});
            lang.globalOrCn($scope.area_id);
        }

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
                layer.msg(lang.text("tigerWitID.login.selectAreaCode"))
                return false;
            }
            if (!($scope.account.step1Phone)) {
                layer.msg(lang.text("register8"));     //请填写手机号
                return false;
            }
            return true;
        }

        // 验证邮箱
        function showEmaliVel () {
            if (!($scope.account.emailText)) {
                layer.msg(lang.text("tigerWitID.login.enterEmail"));     //请输入邮箱
                return false;
            }
            if (!validator.regType.email.reg.test($scope.account.emailText)) {
                layer.msg(validator.regType.email.tip);     //请填写正确的邮箱
                return false;
            }
            return true;
        }
    }
})();