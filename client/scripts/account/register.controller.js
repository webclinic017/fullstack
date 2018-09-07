;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('AccountRegisterController', AccountRegisterController);

    AccountRegisterController.$inject = ['$scope', '$interval', '$timeout', '$window', '$state', 'account', 'validator', '$cookies', 'lang', '$modal'];

    function AccountRegisterController($scope, $interval, $timeout, $window, $state, account, validator, $cookies, lang, $modal) {
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
        // test
        // openWebAgmentModal(100403, function(resolve, e){
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
            emailText: '',
            emailCode: '',
            phoneArea: {
                key: '',
                value: ''
            },
            phoneArea2: {
                key: '',
                value: ''
            }, // 手机区号+国家(无用)
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
            var phone_code = '';

            // if ($scope[formName][name].$invalid) {
            //     layer.msg(lang.text("actLogin3"));    //请填写手机号
            //     return;
            // }
            
            if(name == 'step1Phone'){
                if(!($scope.account.phoneArea.value)){
                    layer.msg(lang.text("tigerWitID.login.selectAreaCode"))
                    return;
                }
                phone_code = $scope.account.phoneArea.value;
                if ($scope[formName][name].$invalid) {
                    layer.msg(lang.text("actLogin16"));     //请填写正确的手机号
                    return;
                }
            }else if(name == 'emailText'){
                phone_code = ''
                if (!validator.regType.email.reg.test($scope[formName][name])) {
                    layer.msg(lang.text("tigerWitID.login.enterCorrectEmail"));     //请填写正确的邮箱
                    return;
                }
            }

            token = $cookies['code_token'];

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
        // 注册
        $scope.register = function (formName, is_agree) {
            if (!$scope.registerBtnStatus) return;
            if(!($scope.account.country.value)){
                layer.msg(lang.text("tigerWitID.login.selectCountry"));
                return;
            }
            if ($scope[formName].$invalid) {
                layer.msg(lang.text("actLogin19"));       //请填写完整信息
                return;
            }

            // // 神策统计 - 点击登录
            if(!is_agree) {
                sa.track('click_login', {
                    login_type: $scope.loginType == 'code' ? '验证码登录' : lang.text("actLogin2")
                });
            }
            var para = {
                login_type: 2,
                lp: $state.params.lp,
                pid: $state.params.pid,
                unit: $state.params.unit,
                key: $state.params.key,
                country_code: $scope.account.country.value,
            };
            if($scope.registerStep3 == '2'){
                // 邮箱注册
                para = angular.extend({
                    account: $scope.account.emailText,
                    password: $scope.account.emailCode,
                },para);
            }else if($scope.registerStep3 == '1'){
                // 手机号注册
                para = angular.extend({
                    account: $scope.account.step1Phone,
                    password: $scope.account.step1Code,
                    phone_code: $scope.account.phoneArea.value,
                },para);
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
                    $scope.$emit('relogin_info', 'is_register');
                    return;
                }else {
                    if ((data.code == 100402) || (data.code == 100403)) {
                        openWebAgmentModal(data.code, function(resolve, e){
                            $scope.register(formName, 'is_agree');
                            layer.close(resolve.layIndex)
                        })
                    } else {
                        // 注册时，用户已存在，返回 code 为 100503
                        layer.msg(data.message);
                    }
                }
            });
        };
        // 验证码登录 新用户设置密码
        $scope.setPassword = function (formName) {
            if (!$scope.registerBtnStatus) return;
            if ($scope[formName].$invalid) {
                layer.msg(lang.text('tigerWitID.login.enterPassword')); //请输入密码
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
                        $state.go('space.center.index', {reload: true});
                    }, 100);
                    
                } else {
                    layer.msg(data.message);
                }
            });
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