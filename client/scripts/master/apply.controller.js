;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('MasterApplyController', MasterApplyController);

    MasterApplyController.$inject = ['$scope', 'trader', '$layer', 'validator', 'account', '$cookies'];

    function MasterApplyController($scope, trader, $layer, validator, account, $cookies) {

        $scope.applyInfo = {
            loading: true,
            loading2: false,
            data: {},
            condition: false
        };
        $scope.applyMaster = applyMaster;
        $scope.comfirmApplyMaster = comfirmApplyMaster;

        getMasterCondition();
        // 模拟账号列表
        $scope.applyInfo.data.accountList = {}
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
                    // autoClose: true,
                    msg: '确定申请高手吗？',
                    btns: {
                        '确定': function (oScope) {
                            $scope.applyInfo.data.status = 3;
                        }
                    }
                })
            }
            if (s == 'fail') {
                $layer({
                    title: '申请高手提醒',
                    size: 'sm',
                    btnsClass: 'text-right',
                    msgClass: 'font-danger',
                    msg: '未达成高手申请条件，请继续努力',
                    btns: {
                        '确定': function () {

                        }
                    }
                })
            }
        }

        function comfirmApplyMaster(){
            $scope.applyInfo.loading2 = true
            trader.applyMaster().then(function (data) {
                $scope.applyInfo.loading2 = false
                $layer({
                    title: '申请高手提醒',
                    size: 'sm',
                    btnsClass: 'text-right',
                    msgClass: data.is_succ ? 'font-succ' : 'font-danger',
                    msg: data.is_succ ? '申请已提交！' : data.message,
                    btns: {
                        '确定': function () {}
                    }
                })
            });
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
