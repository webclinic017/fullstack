;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('InvestLiverpoolController', InvestLiverpoolController);

    InvestLiverpoolController.$inject = ['$scope', 'lang', '$interval', '$timeout', '$state', 'account', '$cookies', '$location'];

    /**
     * @name InvestLiverpoolController
     * @desc
     */
    function InvestLiverpoolController($scope, lang, $interval, $timeout, $state, account, $cookies, $location) {
        $scope.competition = {}; //当前活动信息
        $scope.liverpool = {
            competition_key: $location.search().only_key || 'liverpoolleague',  // 应该从上个路径传递
            username: '',
            phone: '',
            phoneArea: {
                key: '',
                value: ''
            },
            code: '',
            phoneArea2: {
                key: '',
                value: ''
            }, // 手机区号+国家
        };
        $scope.codeBtnStatus = {            // 获取验证码按钮状态
            phone: {
                count: false,       // 点击状态 false 可点击；true 不可点击
                msg: '',            // 倒计时信息
                timer: undefined    // 定时器
            }
        }
        $scope.loginBtnStatus = true;       // 开通比赛账号按钮状态

        $scope.selectArea = selectArea;

        getCompetitionList();
        function getCompetitionList(){
            account.competitionList({only_key: $scope.liverpool.competition_key}).then(function(data){
                if (!data) return;
                if (data.is_succ) {
                    $scope.competition = data.data[0];
                } 
            })
        }
        function selectArea(target) {
            $scope.liverpool.phoneArea = {
                key: '+' + target.phone_code,
                value: target.phone_code
            }
            localStorage['phone_code'] = target.phone_code;
        }
        if (localStorage['phone_code']) {// 使用缓存的phone_code
            selectArea({ phone_code: localStorage['phone_code'] })
        }
        $scope.$watch('personal.phone', function(n){
            if(n){
                $scope.liverpool.phone = $scope.personal.phone;
                if($scope.personal.phone_code){
                    selectArea({ phone_code: $scope.personal.phone_code })
                }
            }
            
        })

        // 获取验证码
        $scope.getCaptcha = function (formName, name) {
            var type; // 类型
            var phone_code, account_num, msg, account_type; // 区号， 账号， msg

            if (!showPhoneVel()) { return };
            phone_code = $scope.liverpool.phoneArea.value;
            account_num = $scope.liverpool.phone;
            account_type = 1;
            msg = lang.text('tigerWitID.login.tip6_21')

            var token = $cookies['code_token'];
            type = 1;

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
                    obj.btns[lang.text("tigerWitID.confirm2")] = function () { };
                    $layer(obj);
                } else {
                    layer.msg(data.message);
                }
            });
        };
        $scope.liverpoolRegister = function (formName) {
            if (!$scope.loginBtnStatus) return;
            // 手机
            if (!showPhoneVel()) { return };
            if (!$scope.personal.phone && !($scope.liverpool.code)) {
                layer.msg(lang.text('tigerWitID.login.verificationCode'));     //请填写验证码
                return;
            }

            var para = {
                competition_key: $scope.liverpool.competition_key,
                username: $scope.liverpool.username
            };
            if(!$scope.personal.phone){
                para = angular.extend({
                    phone: $scope.liverpool.phone,
                    phone_code: $scope.liverpool.phoneArea.value,
                    code: $scope.liverpool.code
                }, para)
            }
            layer.load();
            $scope.loginBtnStatus = false;

            account.competitionOpenAccount(para).then(function (data) {
                layer.closeAll();
                $scope.loginBtnStatus = true;
                layer.msg(data.message);
                if (data.is_succ) {
                    $timeout(function(){
                        $state.go('space.center.index');
                    }, 2000)
                }
            })

        }
        // 验证昵称，手机号与区号
        function showPhoneVel() {
            if (!($scope.liverpool.username)) {
                layer.msg(lang.text("tigerWitID.settings.pleaseSetNickname"));     //请填写账号名称
                return false;
            }
            if (!($scope.liverpool.phoneArea.value)) {
                layer.msg(lang.text("tigerWitID.login.selectAreaCode")) // 请选择区号
                return false;
            }
            if (!($scope.liverpool.phone)) {
                layer.msg(lang.text("register8"));     //请填写手机号
                return false;
            }
            return true;
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
    }
})();
