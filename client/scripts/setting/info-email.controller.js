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

        $scope.$watch('settingInfo.email', function (newVal, oldVal) {
            $scope.step = newVal ? 1 : 2;
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
        $scope.clickable = {
            oldCode: true,
            oldSubmit: true,
            newCode: true,
            newSubmit: true
        };
        $scope.countDownMsg = {
            oldMsg: $scope.lang.text("tigerWitID.settings.getVerificationCode"),
            newMsg: $scope.lang.text("tigerWitID.settings.getVerificationCode")
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
            console.log(email)
            var token = $cookies['code_token'];
            var params = {
                account: email || '',
                code_token: token,
                type: type === 'new' ? 3 : 4,
                phone_code: undefined,
                account_type: 2
            }
            account.sendCode(params).then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    if (type === 'old') {
                        $scope.clickable.oldCode = false;

                        countDown({
                            message: 'oldMsg',
                            time: 60,
                            callBack: function () {
                                $scope.countDownMsg.oldMsg = $scope.lang.text("tigerWitID.settings.getVerificationCode");
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
                                $scope.countDownMsg.newMsg = $scope.lang.text("tigerWitID.settings.getVerificationCode");
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

            account.checkCode(null, $scope.emailInfo.oldCode, 2).then(function (data) {
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
                    layer.msg($scope.lang.text("tigerWitID.settings.bindNewEmailSucc"), {
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