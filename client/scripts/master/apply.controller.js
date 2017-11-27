;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('MasterApplyController', MasterApplyController);

    MasterApplyController.$inject = ['$scope', 'trader', '$layer'];

    function MasterApplyController($scope, trader, $layer) {

        $scope.applyInfo = {
            loading: true,
            data: {},
            condition: false
        };
        $scope.applyMaster = applyMaster;

        getMasterCondition();
        
        function getMasterCondition () {
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

        function applyMaster () {
            if ($scope.applyInfo.condition) {
                openApplyMdl('succ');
            } else {
                openApplyMdl('fail');
            }
            
        }

        function openApplyMdl (s) {
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
                                    $scope.applyInfo.data.status = 0;
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
    }
})();
