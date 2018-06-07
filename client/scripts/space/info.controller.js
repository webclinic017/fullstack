;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$rootScope','$scope', '$location', '$interval', '$state', 'account', 'invite', '$timeout', 'config', 'redbag', 'trader', 'asset', '$modal'];

    /**
     * @name SpaceInfoController
     * @desc
     */
    function SpaceInfoController($rootScope,$scope, $location, $interval, $state, account, invite, $timeout, config, redbag, trader, asset, $modal) {
        $scope.unreadLength = 0;        // 未读消息
        $scope.masterGradeInfo = {};    // 高手等级信息
        var summaryId;
        var noticeId;

        //一次性获取用户的相关信息。更换用户时需要触发重置。
        getOnceInfo();
        initialize();

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            angular.extend($scope.personal, {
                basic: toState.name.substring(6)
            });
        });

        function getOnceInfo(){
            getVerifyStatus();
            getRedBagNum();
            checkEvidenceStatus();
        }

        var url = $location.search();
        
        if (url.type && (url.type == 'new')) {
            $scope.$emit('global.openDredgeMdl', {position: 'register'});
        }

        // 如果是高手账号，则获取高手等级
        $scope.$watch('personal.is_master', function (newVal, oldVal) {
            // console.log(newVal, oldVal);
            if (newVal) {
                getMasterGrade();
            }
        });

        // 检查新消息
        $scope.$on('refreshNoticeList', function() {
            console.log('refreshNoticlist jihuo');
            noticeId = $interval(function() {
                getUnreadLength();
            },30000);
        });

        // 获取未读红包数
        function getRedBagNum () {
            redbag.getRedbagNum().then(function (data) {
                if (!data) return;
                // console.log(data);
                angular.extend($scope.personal, {
                    redbagUnreadNum: data.data
                });
            });
        }

        // 初始化所需的全局数据
        function initialize() {
            account.getPersonalInfo().then(function (data) {
                if (!data) return;
                angular.extend($scope.personal, data, {
                    xsAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.xs + '?timestamp=' + (+new Date()),
                    smAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.sm + '?timestamp=' + (+new Date()),
                    mdAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.md + '?timestamp=' + (+new Date()),
                    lgAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.lg + '?timestamp=' + (+new Date())
                });
            });

        }

        // 获取实名认证状态
        function getVerifyStatus () {
            account.getVerifyStatus().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    data = data.data;
                    angular.extend($scope.personal, {
                        verifiedStatus: data.profile_check || 0
                    });

                    //定时提取用户资产信息
                    loopAsset();

                    $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                        angular.extend($scope.personal, {
                            basic: toState.name.substring(6)
                        });
                    });
                    $scope.$on('$stateChangeStart', function (event, toState, toParams) {
                        // console.log(toState.name);
                        if (toState.name.indexOf('center') === -1) {
                            $interval.cancel(summaryId);
                        } else {
                            loopAsset();
                        }
                    });
                }
            });
        }

        function loopAsset () {
            // console.log($scope.personal.profile_check);
            getAssetInfo();
            if ($scope.personal.profile_check == 3) {
                $interval.cancel(summaryId);
                summaryId = $interval(function () {
                    getAssetInfo();
                }, 5000);
            }
        }

        // 获取个人资产概况
        function getAssetInfo() {
            account.getAssetInfo().then(function (data) {
                if (!data) return;
                // console.info(data);
                if (data.is_succ) {
                    angular.extend($scope.personal, data.data);
                    var my_total_balance = (Number(data.data.balance)+Number(data.data.wallet_balance)).toFixed(2);
                    angular.extend($scope.personal, {
                        my_total_balance: my_total_balance
                    });
                } 
            });
        }

        // 获取高手等级
        function getMasterGrade () {
            trader.getMasterGrade($scope.personal.usercode).then(function (data) {
                // console.log(data);
                if (data.is_succ && data.code == 0) {
                    $scope.masterGradeInfo = data.data;
                    $scope.masterGradeInfo.scale = (($scope.masterGradeInfo.follow_amount - $scope.masterGradeInfo.available_amount) / $scope.masterGradeInfo.follow_amount * 100).toFixed(2)+'%';
                }
            });
        }

        //检查凭证状态
        function checkEvidenceStatus () {
            var isModal = false;
            var msg = '';
            asset.checkEvidenceStatus().then(function (data) {
                var date = new Date().getDate();
                var ls = localStorage.getItem("evidence");
                console.log(date, ls);
                if (data.data.evidence_code === 100605) {
                    msg = '充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。';
                    if (!ls) {
                        localStorage.setItem("evidence", date);
                        isModal = true;
                    }
                }
                if (data.data.evidence_code === 100604) {
                    msg = '您有入金凭证已超过一周未上传，请及时上传，否则将无法进行交易操作';
                    if (!ls || ls < date) {
                        localStorage.setItem("evidence", date);
                        isModal = true;
                    }
                }
                // console.log(data);
                if (isModal) {
                    $modal.open({
                        templateUrl: '/views/space/evidence_modal.html',
                        size: 'sm',
                        backdrop: 'static',
                        controller: function ($scope, $modalInstance, $state) {
                            $scope.message = msg;
                            
                            $scope.closeModal = closeModal;
                            
                            function closeModal() {
                                $modalInstance.dismiss();
                            }
        
                        }
                    });
                }
                
            });
        }
    }
})();
