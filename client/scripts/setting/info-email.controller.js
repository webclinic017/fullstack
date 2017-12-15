;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoEmailController', SettingInfoEmailController);

    SettingInfoEmailController.$inject = ['$scope', '$timeout', 'account', '$interval', '$cookies'];

    function SettingInfoEmailController($scope, $timeout, account, $interval, $cookies) {
        // step1 => binding old Email , step2 => binding new Email
        $scope.step = 1;

        $scope.$watch('settingInfo', function (newVal, oldVal) {
            if (newVal !== oldVal) {
                $scope.step = newVal.email ? 1 : 2;
            }
        });
      
        $scope.emailInfo = {
            oldCode: '',
            newCode: '',
            newEmail: '',
            emailPattern: '/^([a-z0-9+_-]+)(.[a-z0-9+_-]+)*@([a-z0-9-]+.)+[a-z]{2,6}$/i'
        };
        $scope.frontErr = {
            oldCode: {
                show: false
            },
            newCode: {
                show: false
            },
            newEmail: {
                show: false
            }
        };
        $scope.backErr = {
            show: false,
            msg: ''
        };
        $scope.clickable = {
            oldCode: true,
            oldSubmit: true,
            newCode: true,
            newSubmit: true
        };
        $scope.countDownMsg = {
            oldMsg: '获取验证码',
            newMsg: '获取验证码'
        };

        $scope.showFrontErr = showFrontErr;
        $scope.hideFrontErr = hideFrontErr;
        $scope.getEmailCode = getEmailCode;
        $scope.checkEmailCode = checkEmailCode;
        $scope.setBindEmail = setBindEmail;

        function getEmailCode (type) {
            var email = '';
            if (type === 'new') {
                showFrontErr('newEmail');

                if ($scope.newEmailForm.newEmail.$invalid) {
                    return;
                }
                email = $scope.emailInfo.newEmail;
            }
            var token = $cookies['code_token'];
            account.sendCode(null, token, 3, 2).then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    if (type === 'old') {
                        $scope.clickable.oldCode = false;

                        countDown({
                            message: 'oldMsg',
                            time: 60,
                            callBack: function () {
                                $scope.countDownMsg.oldMsg = '获取验证码';
                                $scope.clickable.oldCode = true;
                            }
                        });
                    }
                    if (type === 'new') {
                        $scope.clickable.newCode = false;

                        countDown({
                            message: 'newMsg',
                            time: 60,
                            callBack: function () {
                                $scope.countDownMsg.newMsg = '获取验证码';
                                $scope.clickable.newCode = true;
                            }
                        });
                    }
                } else {
                    layer.msg(data.message, {
                        time: 2000
                    });
                }
            }); 
        }

        function checkEmailCode () {
            showFrontErr('oldCode');

            if ($scope.oldEmailForm.oldCode.$invalid) {
                return;
            }
            $scope.clickable.oldSubmit = false;

            account.checkEmailCode($scope.emailInfo.oldCode).then(function (data) {
                // console.info(data);
                $scope.clickable.oldSubmit = true;
                if (!data) return;
                if (data.is_succ) {
                    $scope.step++;
                } else {
                    layer.msg(data.message, {
                        time: 2000
                    });
                }
            });
        }

        function setBindEmail () {
            showFrontErr('newEmail');
            showFrontErr('newCode');

            if ($scope.newEmailForm.$invalid) {
                return;
            }
            $scope.clickable.newSubmit = false;
            account.setBindEmail($scope.emailInfo.newEmail, $scope.emailInfo.newCode).then(function (data) {
                
                $scope.clickable.newSubmit = true;
                if (!data) return;
                if (data.is_succ) {
                    layer.msg('新邮箱绑定成功', {
                        time: 2000
                    });
                    $scope.settingInfo.email = $scope.emailInfo.newEmail;
                    $scope.step = 1;

                    $timeout(function () {
                        window.location.reload();
                    }, 1000); 
                } else {
                    layer.msg(data.message, {
                        time: 2000
                    });
                }
            });
        }

        function countDown (info) {
            var message = info.message || null;
            var totalTime = info.time || 60;
            var callBack = info.callBack || null;
            var timer;
            $scope.countDownMsg[message] = totalTime;
            timer = $interval(function () {
                // console.info($scope.countDownMsg.oldMsg);
                $scope.countDownMsg[message]--;

                if ($scope.countDownMsg[message] <= 0) {
                    $interval.cancel(timer);
                    callBack && callBack();
                }
            }, 1000);
        }

        function showFrontErr (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name]["show"] = true;
            }
        }

        function hideFrontErr (name) {
            if ($scope.frontErr[name]) {
                $scope.frontErr[name]["show"] = false;
            }
        }
    }
})();