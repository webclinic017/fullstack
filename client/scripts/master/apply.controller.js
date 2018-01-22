;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('MasterApplyController', MasterApplyController);

    MasterApplyController.$inject = ['$scope', 'trader', '$layer', 'validator', 'account', '$cookies'];

    function MasterApplyController($scope, trader, $layer, validator, account, $cookies) {

        $scope.applyInfo = {
            loading: true,
            data: {},
            condition: false
        };
        $scope.applyMaster = applyMaster;

        getMasterCondition();

        function getMasterCondition() {
            trader.getMasterCondition().then(function (data) {
                $scope.applyInfo.loading = false;
                // console.log(data);
                if (data.is_succ) {
                    $scope.applyInfo.data = data.data;

                    // 判断申请资格
                    if ($scope.applyInfo.data.status == -1) {
                        if (($scope.applyInfo.data.one == 1) &&
                            ($scope.applyInfo.data.two == 1) &&
                            ($scope.applyInfo.data.three == 1) &&
                            ($scope.applyInfo.data.four == 1)) {
                            $scope.applyInfo.condition = true;
                        }
                    }
                }
            });
        }

        function applyMaster() {
            if ($scope.applyInfo.condition) {
                openApplyMdl('succ');
            } else {
                openApplyMdl('fail');
            }
        }

        function openApplyMdl(s) {
            if (s == 'succ') {
                $layer({
                    title: '申请高手提醒',
                    // msgClass: 'font-danger',
                    size: 'sm',
                    btnsClass: 'text-right',
                    autoClose: true,
                    msg: '确定提交高手申请吗？',
                    btns: {
                        '确定': function (oScope) {
                            oScope.loading = 1;
                            trader.applyMaster().then(function (data) {
                                // console.log(data);
                                oScope.loading = 2;
                                if (data.is_succ) {
                                    oScope.msg = "申请已提交";
                                    $scope.applyInfo.data.status = 3;
                                } else {
                                    oScope.msg = data.message;
                                }
                            });
                        }
                    }
                })
            }
            if (s == 'fail') {
                $layer({
                    title: '申请高手提醒',
                    size: 'sm',
                    btnsClass: 'text-right',
                    msg: '未达成高手申请条件，请继续努力',
                    btns: {
                        '确定': function () {

                        }
                    }
                })
            }

        }

        $scope.masterInfo = {
            edit: false,
            username: '',
            error: {
                invalid: false,
                invalid_tip: validator.regType.username.tip
            },
            loading: false
        }

        $scope.hideErr = function(){
            $scope.masterInfo.error.invalid = false;
        }
        $scope.editUsername = function () {
            $scope.masterInfo.edit = true;
        }
        $scope.cancelEdit = function () {
            $scope.masterInfo.edit = false;
            $scope.personal.username = decodeURIComponent($cookies["username"] || '')
        }
        $scope.comfirmEdit = function () {
            if (!validator.regType.username.reg.test($scope.personal.username)) {
                $scope.masterInfo.error.invalid = true
                return
            } else {
                $scope.masterInfo.error.invalid = false
            }

            $scope.masterInfo.loading = true

            account.setUsername({
                username: $scope.masterInfo.username
            }).then(function(data){
                $scope.masterInfo.loading = false
                if(!data.is_succ){
                    $layer({
                        title: '错误提示',
                        size: 'sm',
                        msgClass: 'font-danger',
                        msg: data.message || '昵称修改失败',
                        btns: {
                            '确定': function () {
    
                            }
                        }
                    })
                } else {
                    $scope.masterInfo.edit = false;
                    $scope.personal.username = $scope.masterInfo.username
                }
            });
        }
    }
})();
