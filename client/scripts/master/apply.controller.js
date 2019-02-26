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
            condition: false // 是否满足申请高手条件
        };
        $scope.applyMaster = applyMaster;
        $scope.comfirmApplyMaster = comfirmApplyMaster;
        console.log($scope.investSelect)
        // 获取用户交易账户列表
        account.getDealAccountList().then(function (data) {
            $scope.applyInfo.loading = false;
            if (!data) return;
            if (data.is_succ) {
                var list;
                list = data.data.filter(function(item, index, self){
                    return item.account_type === 1
                })
                $scope.accountList = list; 
            } 
        });
        $scope.getMasterCondition = getMasterCondition;
        if($scope.investSelect.id !== ""){
            getMasterCondition($scope.investSelect.id)
        }
        function getMasterCondition(mt4_id) {
            $scope.selectAccount = mt4_id   // 选中账号mt4_id
            $scope.applyInfo.loading = true;
            trader.getMasterCondition(mt4_id).then(function (data) {
                $scope.applyInfo.loading = false;
                // console.log(data);
                if (data.is_succ) {
                    $scope.applyInfo.data = data.data;
                    // 判断申请资格
                    if ($scope.applyInfo.data.status == -1) {
                        $scope.applyInfo.condition = true;
                        for(var condit in $scope.applyInfo.data.condition){
                            if($scope.applyInfo.data.condition[condit].status  == 0){
                                $scope.applyInfo.condition = false;
                                return;
                            }
                        }
                    }
                }
            });
        }
        // 立即申请成为高手
        function applyMaster() {
            if ($scope.applyInfo.condition) {
                openApplyMdl('succ');
            } else {
                openApplyMdl('fail');
            }
        }

        function openApplyMdl(s) {
            // $scope.applyInfo.data.status = 3;
            if (s == 'succ') {
                var obj = {
                    title: $scope.lang.text("tigerWitID.master.applyMasterReminder"),
                    // msgClass: 'font-danger',
                    size: 'sm',
                    btnsClass: 'text-right',
                    // autoClose: true,
                    msg: $scope.lang.text("tigerWitID.master.sureAboutApply"),
                    btns: {}
                }
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function (oScope) {
                    $scope.applyInfo.data.status = 3;
                }
                $layer(obj)
            }
            if (s == 'fail') {
                var obj = {
                    title: $scope.lang.text("tigerWitID.master.applyMasterReminder"),
                    size: 'sm',
                    btnsClass: 'text-right',
                    msgClass: 'font-danger',
                    msg: $scope.lang.text("tigerWitID.master.sureAboutApply1"),
                    btns: {}
                };
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function(){};
                $layer(obj)
            }
        }
        // 申请高手确认成功
        function comfirmApplyMaster(){
            $scope.applyInfo.loading2 = true
            trader.applyMaster($scope.selectAccount).then(function (data) {
                $scope.applyInfo.loading2 = false
                var obj = {
                    title: $scope.lang.text("tigerWitID.master.applyMasterReminder"),
                    size: 'sm',
                    btnsClass: 'text-right',
                    msgClass: data.is_succ ? 'font-succ' : 'font-danger',
                    msg: data.is_succ ? $scope.lang.text("tigerWitID.master.applicationSubmitted") : data.message,
                    btns: {}
                }
                obj.btns[$scope.lang.text("tigerWitID.confirm")] = function () {};
                $layer(obj)
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
        // 取消修改
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
                    var obj = {
                        title: $scope.lang.text("tigerWitID.settings.error"),
                        size: 'sm',
                        msgClass: 'font-danger',
                        msg: data.message || $scope.lang.text("tigerWitID.settings.failModifyUsername"),
                        btns: {}
                    }
                    obj.btns[$scope.lang.text("tigerWitID.confirm")] = function () {}
                    $layer(obj)
                } else {
                    $scope.masterInfo.edit = false;
                    $scope.personal.username = $scope.masterInfo.username
                }
            });
        }
    }
})();
