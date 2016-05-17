;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$scope', '$location', '$interval', '$state', 'account', 'invite', '$timeout'];

    /**
     * @name SpaceInfoController
     * @desc
     */
    function SpaceInfoController($scope, $location, $interval, $state, account, invite, $timeout) {
        $scope.unreadLength = 0;        // 未读消息
        var summaryId;
        var noticeId;


       
        $scope.$on('relogin', function(){
            getOnceInfo();
        })

        //一次性获取用户的相关信息。更换用户时需要触发重置。
        getOnceInfo();

        function getOnceInfo(){
            getVerifyStatus();
            getInviteFriendsInfo(1);
            getPersonalInfoDegree();
        }

        //定时提取用户资产信息
        getAssetInfo();

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            angular.extend($scope.personal, {
                basic: toState.name.substring(6)
            });
        });

        // 取消轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            if (toState.name.indexOf('space') === -1) {
                $timeout.cancel(summaryId);
            }
        });

        // 检查新消息
        $scope.$on('refreshNoticeList', function() {
            console.log('refreshNoticlist jihuo');
            noticeId = $interval(function() {
                getUnreadLength();
            },30000);
        });

        // 获取基本信息完整度
        function getPersonalInfoDegree () {
            account.getPersonalInfoDegree().then(function (data) {
                // console.info(data);
                angular.extend($scope.personal, {
                    infoDegree: data.data.degree
                });
            });
        }

        // 获取实名认证状态
        function getVerifyStatus () {
            account.getVerifyStatus().then(function (data) {
                // console.info(data);
                angular.extend($scope.personal, {
                    verifiedStatus: data.status
                });
            });
        }

        // 获取个人资产概况
        function getAssetInfo() {
            account.getAssetInfo().then(function (data) {
                // console.info(data);
                angular.extend($scope.personal, data.data);
            });

            summaryId = $timeout(function () {
                getAssetInfo();
            }, 5000);
        }

        // 获取邀请好友数
        function getInviteFriendsInfo (page) {
            invite.getInviteFriendsInfo(page, 5).then(function (data) {
                // console.info(data);
                angular.extend($scope.personal, {
                    invite_sum: data.sum
                });
            });
        }
    }
})();
