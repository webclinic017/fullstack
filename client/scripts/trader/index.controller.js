;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderIndexController', TraderIndexController);

    TraderIndexController.$inject = ['$scope', '$location', '$state', 'trader', '$timeout', '$modal', '$rootScope'];

    function TraderIndexController($scope, $location, $state, trader, $timeout, $modal, $rootScope) {
        $scope.master = {};
        $scope.toCopy = toCopy;
        // $scope.toFollow = toFollow;
        // $scope.cancelFollow = cancelFollow;
        // $scope.isFollow = isFollow;
        var usercode,
            detailId,
            avaCopyAmount;

        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        getMasterInfo(usercode);
        getCopyRelation(usercode);
        // getFollowRelation(usercode);
        getAvaCopyAmount(usercode);

        // $scope.$on('$stateChangeStart', function (event, toState, toParams) {
        //     if (toParams.usercode !== usercode) {
        //         $timeout.cancel(detailId);
        //     }
        // });

        function getMasterInfo(usercode) {
            trader.getMasterInfo(usercode).then(function (data) {
                if (data.is_succ) {
                    $rootScope.master_info = data.data;
                    angular.extend($scope.master, data.data);
                    $scope.master.max_retract_percent = ($scope.master.max_retract * 100).toFixed(2);
                }
            });

            // detailId = $timeout(function () {
            //     getMasterDetail(usercode);
            // }, 5000);
        }

        // 关注关系
        function getFollowRelation(usercode) {
            $scope.$watch('userstatus.logined', function (newVal, oldVal) {
                if (newVal === true) {
                    trader.getFollowRelation(usercode).then(function (data) {
                        // console.info(data);
                        $scope.master.follow = data.follow;
                    });
                }
            });
        }

        function toFollow(action) {
            // 判断是否登陆
            if ($scope.userstatus.logined) {
                trader.follow(usercode, action).then(function (data) {
                    if (data.is_succ) {
                        getFollowRelation(usercode);
                    }
                });
            } else {
                openSystemMdl('login', '关注');
            }
        }

        function cancelFollow() {
            $scope.master.follow_text = '取消关注';
        }

        function isFollow() {
            $scope.master.follow_text = '已关注';
        }

        // 复制关系
        function getCopyRelation(usercode) {
            $scope.$watch('userstatus.logined', function (newVal, oldVal) {
                if (newVal === true) {
                    trader.getCopyRelation(usercode).then(function (data) {
                        // 本人是否复制高手，值为 null（未复制）或者数字（复制金额）
                        $scope.master.copied = data.data.copy_real;
                    });
                }
            });
        }

        // 获取可用复制金额
        function getAvaCopyAmount(usercode) {
            $scope.$watch('userstatus.logined', function (newVal, oldVal) {

                if (newVal === true) {
                    trader.getAvaCopyAmount(usercode).then(function (data) {
                        // console.info(data);
                        if (data.is_succ) {
                            avaCopyAmount = data.data.total_available;
                        } else {
                            avaCopyAmount = 0;
                        }
                    });
                }
            });
        }

        function toCopy() {
            // console.info($scope.personal.isumam);
            // 判断是否登录
            if ($scope.userstatus.logined) {
                // 判断资金是否处于封闭期
                if ($scope.personal.isumam) {
                    openSystemMdl('isumam');
                } else {
                    // 判断是否是高手
                    if ($scope.personal.master === 1) {
                        openSystemMdl('isMaster');
                    } else {
                        // 判断是否实名认证 //复制不需要实名认证
                        console.log($scope.personal.verify_status);
                        if ($scope.personal.verify_status > 5) {
                            var minCopyAmount = parseFloat($scope.master.min_copy_amount, 10);

                            if (typeof avaCopyAmount === 'undefined') {
                                console.log('getting available copy amount');
                                return;
                            }
                            avaCopyAmount = parseFloat(avaCopyAmount, 10);
                            // console.log(avaCopyAmount, minCopyAmount);
                            if (avaCopyAmount < minCopyAmount) {
                                openSystemMdl('amount', minCopyAmount);
                            } else {
                                openCopyMdl();
                            }
                        } else {
                            openSystemMdl('verify');
                        }
                    }
                }
            } else {
                openSystemMdl('login', '复制');
            }
        }

        // openSystemMdl('verify', '复制');
        function openSystemMdl(type, info) {
            $modal.open({
                templateUrl: '/views/trader/system_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type, // 系统弹窗类型：login, verify, isumam（封闭期） isMaster（已经是高手）, amount（可用复制金额不足）
                        info: info
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }

        function openCopyMdl() {

            $modal.open({
                templateUrl: '/views/trader/master_copy_modal.html',
                controller: 'TraderCopyController',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        // 对传递的参数名称做修改
                        $scope.master.minCopyAmount = $scope.master.min_copy_amount;

                        return {
                            copiedTrader: $scope.master,
                            avaCopyAmount: avaCopyAmount
                        }
                    }
                }
            });
        }
    }
})();