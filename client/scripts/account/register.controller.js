;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountRegisterController', AccountRegisterController);

    AccountRegisterController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies', 'lang', 'invite', '$layer', 'fun'];

    function AccountRegisterController($scope, $interval, $timeout, $window, $state, account, validator, $cookies, lang, invite, $layer, fun) {
        $scope.toGtagEvent('open_register_page_web');
        $scope.registerStep1 = 1;      // 验证码注册进行到哪一步
        $scope.registerStep3 = 1;      // 2邮箱验证码注册1手机验证码注册
        $scope.step1PasswordStatus = true;  // 验证码登录密码显示or隐藏
        // 滑动验证显示变量
        // $scope.sliderShow = false;
        // $scope.rememberLoginStatus = true;  // 记住登录状态
        $scope.registerBtnStatus = true;       // 登录按钮状态
        // 注册跳过验证
        $scope.registerSetPassword = false;
        $scope.isSendVoice = false;
        $scope.isSkipVerify = false;
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
        // $scope.area_id = ''; // 1为国内，2为国际区
        // test
        // openWebAgmentModal(100402, function(resolve, e){
        //     // this 当前点击按钮
        //     console.log(this, resolve, e)
        //     layer.close(resolve.layIndex)
        // })

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

        function selectPhoneArea(target) {
            $scope.account.phoneArea = {
                key: '+' + target.phone_code,
                value: target.phone_code
            }
            localStorage['phone_code'] = target.phone_code;
        }
        // 选择国家
        $scope.selectWorld = function (target) {
            $scope.toGtagEvent('select_country_register_web', { belong: 'tigerwit' })
            // $scope.toGtagEvent('click_country_register_web');
            if (target.code === 'CN') {
                $scope.registerStep3 = 1;
            }
            selectPhoneArea(target);
        }
        // 缓存区号
        if (localStorage['phone_code'] == '86') {
            $scope.account.country.key = lang.text("china");
            $scope.account.country.value = 'CN';
            $scope.selectWorld({ phone_code: 86, code: 'CN' })
        }
        var token;
        // console.log(lang.text("actLogin1"));
        $scope.is_send_voice = false;
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
            if ($scope.registerStep3 == 1) {
                if (!showPhoneVel()) { return };
                phone_code = $scope.account.phoneArea.value;
                account_num = $scope.account.step1Phone;
                account_type = 1;
                msg = lang.text('tigerWitID.login.tip6_21')
            } else if ($scope.registerStep3 == 2) {
                if (!showEmaliVel()) { return };
                phone_code = ''
                account_num = $scope.account.emailText;
                account_type = 2;
                msg = lang.text('tigerWitID.login.tip6_2')
            }

            token = $cookies['code_token'];
            var params = {
                account: account_num,
                code_token: token,
                type: type,
                phone_code: phone_code,
                account_type: account_type,
                world_code: $scope.account.country.value || undefined,
                referer: location.href
            }
            var all_sources = $cookies['all_sources'];
            if (all_sources) {
                params = angular.extend(params, JSON.parse(all_sources))
            }
            account.sendCode(params).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.toGtagEvent('click_get code_phone_web', { belong: 'tigerwit', get_code: 'Y' })
                    countDown(name);
                    $scope.isSendVoice = data.data.is_send_voice;
                    $scope.isSkipVerify = data.data.is_skip_verify;
                    var obj = {
                        title: lang.text('tigerWitID.login.verificationCodeSent'),
                        titleClass: 'account_login__layer-title',
                        msg: lang.text('tigerWitID.login.tip6_1') + msg + account_num + lang.text('tigerWitID.login.tip6_3'),
                        msgClass: 'account_login__layer-msg',
                        btns: {},
                        btnsClass: 'account_login__layer-btns'
                    }
                    obj.btns[lang.text("tigerWitID.confirm2")] = function () { };
                    $layer(obj);
                    // if (data.is_send_voice) {
                    //   $scope.isSendVoice = data.is_send_voice
                    //   // console.log($scope.is_send_voice)
                    // }
                } else {
                    $scope.toGtagEvent('click_get code_phone_web', { belong: 'tigerwit', get_code: 'N' })
                    layer.msg(data.message);
                }
            });
        };
        // 注册
        $scope.register = function (formName, is_agree) {
            if (!$scope.registerBtnStatus) return;
            if (!($scope.account.country.value)) {
                layer.msg(lang.text("tigerWitID.login.selectCountry"));
                return;
            }
            // if ($scope[formName].$invalid) {
            //     layer.msg(lang.text("actLogin19"));       //请填写完整信息
            //     return;
            // }
            var msg;
            var para = {
                login_type: 2,
                world_code: $scope.account.country.value,
                appsflyer_id: $cookies['APPSFLYER_ID'] || null,
                lp: getLp($state.params.lp)
                // TODO 暂时
                // referrer: document.referrer,
                // href: location.href,
                // cookie: document.cookie
                // step1Password
            };
            var all_sources = $cookies['all_sources'];
            if (all_sources) {
                para = angular.extend(para, JSON.parse(all_sources))
            }
            // if (registerType === 3) {
            //   // 密码注册
            //   if (!showPhoneVel()) { return };
            //   if ($scope.account.step1Password !== $scope.account.step2Password) {
            //     layer.msg(lang.text('tigerWitID.login.passwordsEnteredDoNotMatch'));     //两次输入的密码不一致
            //     return;
            //   }
            //   para = angular.extend({
            //       skip_verify: 1,
            //       account_type: 1,
            //       account: $scope.account.step1Phone,
            //       password: $scope.account.step1Password,
            //       phone_code: $scope.account.phoneArea.value,
            //   }, para);
            //   msg = lang.text('tigerWitID.login.tip8_2');
            // } else {
            if ($scope.registerStep3 == '2') {
                // 邮箱注册
                if (!showEmaliVel()) { return };
                if (!($scope.account.emailCode)) {
                    layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                    return;
                }
                para = angular.extend(para, {
                    account_type: 2,
                    account: $scope.account.emailText,
                    password: $scope.account.emailCode,
                });
                msg = lang.text('tigerWitID.login.tip8_21');
            } else if ($scope.registerStep3 == '1') {
                // 手机号注册
                if (!showPhoneVel()) { return };
                para = angular.extend(para, {
                    // skip_verify: is_agree === 1 ? 1 : 0,
                    account_type: 1,
                    account: $scope.account.step1Phone,
                    phone_code: $scope.account.phoneArea.value,
                });
                if ($scope.registerSetPassword) {
                  if ($scope.account.step1Password !== $scope.account.step2Password) {
                    layer.msg(lang.text('tigerWitID.login.passwordsEnteredDoNotMatch'));     //两次输入的密码不一致
                    return;
                  }
                  para = angular.extend(para, {
                      skip_verify: 1,
                      login_type: 3,
                      password: $scope.account.step1Password,
                  });
                } else {
                  // if (is_agree !== 1) {
                    if (!($scope.account.step1Code)) {
                        layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                        return;
                    }
                  // }
                  para = angular.extend(para, {
                      // skip_verify: is_agree === 1 ? 1 : 0,
                      // account_type: 1,
                      // account: $scope.account.step1Phone,
                      password: $scope.account.step1Code,
                      // phone_code: $scope.account.phoneArea.value,
                  });
                }

                msg = lang.text('tigerWitID.login.tip8_2');
            }
            (is_agree == "is_agree") && (para.is_agree = 1);
            layer.load();
            $scope.registerBtnStatus = false;

            account.register(para).then(function (data) {
                layer.closeAll();
                $scope.registerBtnStatus = true;

                if (data.is_succ) {
                    $scope.writeCookie({ name: 'token', value: data.data.token });
                    $scope.writeCookie({ name: 'user_code', value: data.data.user_code });
                    $scope.writeCookie({ name: 'username', value: data.data.username });
                    $scope.writeCookie({ name: 'username_en', value: data.data.username_en });
                    $scope.writeCookie({ name: 'world_code', value: para.world_code });

                    setGtagUserId(data.data.user_code)
                    // 新用户
                    if ($scope.registerSetPassword) {
                      $scope.skipSetPass();
                    }else{
                      $scope.registerStep1 = 2;
                    }
                    // $scope.area_id = data.data.area_id;
                    $scope.$emit('relogin_info', 'is_register');
                    // 神策统计 - 注册
                    $timeout(function () {
                        if ($scope.registerStep3 == '1') {
                            $scope.toGtagEvent('phone_register_success_web');
                        } else if ($scope.registerStep3 == '2') {
                            $scope.toGtagEvent('email_register_success_web');
                        }
                        $scope.getEmailPhone(true);
                    }, 100);
                    $timeout(function () {
                        $scope.toTrackEvent('Login and register', 'login_success');
                    }, 150);
                    return;
                } else {
                    if ((data.code == 100402) || (data.code == 100403)) {
                        openWebAgmentModal(data.code, function (resolve, e) {
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
                        obj.btns[lang.text('tigerWitID.login.goLogin')] = function () {
                            $state.go('account.subpage', { subpage: 'login' });
                        }
                        obj.btns[lang.text("tigerWitID.cancel")] = function () { };
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
            if ($scope.account.step1Password !== $scope.account.step2Password) {
                layer.msg(lang.text('tigerWitID.login.passwordsEnteredDoNotMatch'));     //两次输入的密码不一致
                return;
            }
            layer.load();
            $scope.registerBtnStatus = false;

            account.setPwdFirst($scope.account.step1Password).then(function (data) {
                layer.closeAll();
                $scope.registerBtnStatus = true;

                if (data.is_succ) {
                    $timeout(function () {
                        // $scope.$emit('global.openDredgeMdl', { position: 'register' });
                        // lang.globalOrCn($scope.area_id);
                        // $state.go('space.center');
                        window.location.href = "/space/#/center";
                    }, 100);

                } else {
                    layer.msg(data.message);
                }
            });
        };
        $scope.skipSetPass = function () {
            // $scope.$emit('global.openDredgeMdl', { position: 'register' });
            // lang.globalOrCn($scope.area_id);
            // $state.go('space.center');
            window.location.href = "/space/#/center";
        }

        // 获取验证码倒计时
        function countDown(codeType) {
            $scope.codeBtnStatus[codeType].count = true;
            $scope.codeBtnStatus[codeType].msg = 60;

            $interval.cancel($scope.codeBtnStatus[codeType].timer);
            $scope.codeBtnStatus[codeType].timer = $interval(function () {
                $scope.codeBtnStatus[codeType].msg--;

                if ($scope.codeBtnStatus[codeType].msg <= 0) {
                    $scope.codeBtnStatus[codeType].count = false;

                    $interval.cancel($scope.codeBtnStatus[codeType].timer);
                }
            }, 1000);
        }

        // 验证手机号与区号
        function showPhoneVel() {
            if (!($scope.account.phoneArea.value)) {
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
        function showEmaliVel() {
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
