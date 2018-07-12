;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$rootScope','$scope', '$location', '$interval', '$state', 'account', 'config', 'redbag', 'trader', 'asset', '$modal'];

    /**
     * @name SpaceInfoController
     * @desc
     */
    function SpaceInfoController($rootScope,$scope, $location, $interval, $state, account, config, redbag, trader, asset, $modal) {
        $scope.unreadLength = 0;        // 未读消息
        $scope.investSelect = {id: '', type: ''};   // 记录账号页面选中的账号
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
                // console.log(date, ls);
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
        // 账号合并提醒
        // accountInitializerTip();
        function accountInitializerTip(){
            $modal.open({
                templateUrl: '/views/space/account_Initializer_tip.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    
                    $scope.closeModal = closeModal;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                },
            });
        }
    }
})();
