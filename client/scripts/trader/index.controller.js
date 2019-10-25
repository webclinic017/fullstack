;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderIndexController', TraderIndexController);

    TraderIndexController.$inject = ['$scope', '$location', '$state', 'trader', '$timeout', '$modal', '$rootScope'];

    function TraderIndexController($scope, $location, $state, trader, $timeout, $modal, $rootScope) {
        $scope.master = {};
        $scope.masterGradeInfo = {};
        $scope.toCopy = toCopy;
        var usercode,
            detailId,
            AvaCopyInfo,
            avaCopyAmount;

        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)(\/)?[#?]/;

        $scope.openMasterGradeMdl = openMasterGradeMdl;

        usercode = absUrl.match(regUsercode)[1];
        
        getMasterInfo(usercode);
        getAvaCopyAmount(usercode);
        getMasterGrade(usercode);

        // $scope.$on('$stateChangeStart', function (event, toState, toParams) {
        //     if (toParams.usercode !== usercode) {
        //         $timeout.cancel(detailId);
        //     }
        // });

        function getMasterInfo(usercode) {
            trader.getMasterInfo(usercode).then(function (data) {
                // console.log('getMasterInfo',data)
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

        // 获取可用复制金额 复制关系
        function getAvaCopyAmount(usercode) {
            $scope.$watch('userstatus.logined', function (newVal, oldVal) {

                if (newVal === true) {
                    trader.getAvaCopyAmount(usercode).then(function (data) {
                        // console.info(data);
                        if (data.is_succ) {
                            $scope.master.copied = data.data.is_copy;
                            avaCopyAmount = data.data.usable;
                            $scope.master.avaCopyAmount = data.data.usable;
                            $scope.master.min_copy_amount = data.data.min_copy_amount;
                            AvaCopyInfo = data.data;
                        } else {
                            // 如果是false的话需要弹出提示且不能复制TODO
                            avaCopyAmount = 0;
                        }
                    });
                }
            });
        }

        // 获取高手等级信息
        function getMasterGrade (usercode) {
            trader.getMasterGrade(usercode).then(function (data) {
                // console.log(data);
                if (data.is_succ && data.code == 0) {
                    $scope.masterGradeInfo = data.data;
                }
            });
        }

        // console.info($scope.personal.isumam);
        function toCopy() {
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
                        // 获取开通状态
                        var dredged_type = $scope.personal.dredged_type;
                        if(dredged_type) {
                            // 未开通
                            if (dredged_type === 'unknow') {
                                $scope.$emit('global.openDredgeMdl', {
                                    position: 'TraderIndexController',
                                });
                                // 体验金
                            } else if (dredged_type === 'demo') {
                                openSystemMdl('verify');
                            } else {
                                var replication_protocol = localStorage['replication_protocol'];
                                if(replication_protocol){
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
                                }else{
                                    copyProtocolMdl();
                                }
                            }

                        }
                    }
                }
            } else {
                openSystemMdl('login', $scope.lang.text("tigerWitID.copy"));
            }
        }

        // openSystemMdl('verify', '复制');
        function openSystemMdl(type, info) {
            $modal.open({
                templateUrl: '/views/web/trader/system_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance, lang) {
                    $scope.lang = lang;
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
                templateUrl: '/views/invest/copy_modal.html',
                controller: 'TraderCopyController',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        // 对传递的参数名称做修改
                        $scope.master.minCopyAmount = $scope.master.min_copy_amount;

                        return {
                            copiedTrader: $scope.master,
                            AvaCopyInfo: AvaCopyInfo,
                            surplusAmount: $scope.masterGradeInfo.available_amount,
                            title: 'copy'
                        }
                    }
                }
            });
        }

        function openMasterGradeMdl() {
            $modal.open({
                templateUrl: '/views/web/trader/master_grade_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return {
                            gradeList: $scope.masterGradeInfo.all_master_level
                        };
                    }
                },    
                controller: function ($scope, passedScope, $modalInstance, lang) {
                    $scope.lang = lang;
                    $scope.gradeList = passedScope.gradeList;

                    $scope.closeModal = closeModal;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
        // 复制协议
        // copyProtocolMdl()
        function copyProtocolMdl(){
            $modal.open({
                templateUrl: '/views/web/trader/copy_protocol_modal.html',
                size: 'sm',
                resolve: {
                    passedScope: function () {
                        return {
                            
                        };
                    }
                },    
                controller: function ($scope, passedScope, $modalInstance, lang) {
                    $scope.lang = lang;
                    $scope.closeModal = closeModal;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                    // 同意协议
                    $scope.agreeProtocol = function(){
                        closeModal();
                        localStorage['replication_protocol'] = 1;
                        $timeout(function(){toCopy()}, 500)
                        
                    }
                }
            });
        }
    }
})();