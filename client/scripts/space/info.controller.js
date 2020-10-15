;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$rootScope','$scope', '$location', 'invest', '$state', 'account', 'config', 'redbag', 'invite', 'asset', '$modal'];

    /**
     * @name SpaceInfoController
     * @desc
     */
    function SpaceInfoController($rootScope,$scope, $location, invest, $state, account, config, redbag, invite, asset, $modal) {
        $scope.unreadLength = 0;        // 未读消息
        $scope.investSelect = {id: '', type: ''};   // 记录账号页面选中的账号
        $scope.inviteModuleStatus = false;
        // $scope.updatePaper = updatePaper;
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
            getModuleManagerment();
        }

        var url = $location.search();

        if (url.type && (url.type == 'new')) {
            $scope.$emit('global.openDredgeMdl', {position: 'register'});
        }

        //获取邀请好友模块权限
        function getModuleManagerment () {
            invite.getModuleManagerment().then(function (rs) {
                if (rs.is_succ) {
                    $scope.inviteModuleStatus = rs.data.is_show;
                }
            })
        }

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

        $scope.checkStockTrading = checkStockTrading;
        //检测订单是否符合拆合股需求
        function checkStockTrading (mt4_id) {
            invest.checkStockTrading(mt4_id).then(function (rs) {
                if (rs.is_succ && rs.message) {
                    $modal.open({
                        templateUrl: '/views/space/stock_modal.html',
                        size: 'sm',
                        backdrop: 'static',
                        controller: ['$scope', '$modalInstance', 'lang', function ($scope, $modalInstance, lang) {
                            $scope.message = rs.message;
                            $scope.lang = lang;
                            $scope.closeModal = closeModal;

                            function closeModal() {
                                $modalInstance.dismiss();
                            }
                        }]
                    });
                }
            });
        }

        // 初始化所需的全局数据
        function initialize() {
            account.getPersonalInfo().then(function (data) {
                if (!data) return;
                if (data.phone_verify === 0) {
                  $modal.open({
                      templateUrl: '/views/space/phoneVerify_modal.html',
                      size: 'lx',
                      backdrop: 'static',
                      controller: ['$scope', '$modalInstance', 'lang', function ($scope, $modalInstance, lang) {
                          $scope.message = "您还未验证手机号，为了您的账户安全，请尽快验证您注册的手机号。";
                          $scope.lang = lang;
                          $scope.closeModal = closeModal;
                          $scope.goVerify = goVerify;

                          function closeModal() {
                            $modalInstance.dismiss();
                          }

                          function goVerify(data) {
                            // authen.subpage
                            $state.go('authen.subpage', { subpage: "verification" })
                            $modalInstance.dismiss();
                          }
                      }]
                  });
                }
                //当前 默认登录的 MT4 信息，不主动切换一直是用这个
                $scope.investSelect.id = data.trade_account.mt4_id;
                $scope.investSelect.type = data.trade_account.account_type;
                checkStockTrading(data.trade_account.mt4_id);

                angular.extend($scope.personal, data, {
                    xsAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.xs + '?timestamp=' + (+new Date()),
                    smAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.sm + '?timestamp=' + (+new Date()),
                    mdAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.md + '?timestamp=' + (+new Date()),
                    lgAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.lg + '?timestamp=' + (+new Date())
                });
            });
            account.getFunctionSwitch().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    if (data.data.spaceAgentSwitch) {
                        checkAgent();
                    }
                }
            });
        }

        function checkAgent () {
            account.checkAgent().then(function (data) {
                if (!data) return;
                // console.log(data);
                angular.extend($scope.personal, {
                    is_agent: data.data.user_code ? true : false
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
                    msg = $scope.lang.text("tigerWitID.depositWithdrawal.tip60");
                    if (!ls) {
                        localStorage.setItem("evidence", date);
                        isModal = true;
                    }
                }
                if (data.data.evidence_code === 100604) {
                    msg = $scope.lang.text("tigerWitID.depositWithdrawal.tip61");
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
                        controller: function ($scope, $modalInstance, $state, lang) {
                            $scope.message = msg;
                            $scope.lang = lang;
                            $scope.closeModal = closeModal;

                            function closeModal() {
                                $modalInstance.dismiss();
                            }

                        }
                    });
                }

            });
        }
        // function updatePaper() {
            // $state.go('space.update.subpage', {subpage: 'realname'})
        // }
    }
})();
