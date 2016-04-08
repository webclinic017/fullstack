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


        getVerifyStatus();
        getAssetInfo();
        getInviteFriendsInfo(1);
        
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
            noticeId = $interval(function() {
                getUnreadLength();
            },30000);
        });


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
