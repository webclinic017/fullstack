;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('SpaceInfoController', SpaceInfoController);

    SpaceInfoController.$inject = ['$scope', '$location', 'account', 'invite', '$timeout'];

    /**
     * @name SpaceInfoController
     * @desc
     */ 
    function SpaceInfoController($scope, $location, account, invite, $timeout) {
        
        var summaryId;

        getVerifyStatus();
        getAssetInfo();
        getInviteFriendsInfo(1);

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            angular.extend($scope.personal, {
                basic: toState.name.substring(6)
            });
            // console.info($scope.personal.basic);
        });

        // 取消轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            if (toState.name.indexOf('space') === -1) {
                $timeout.cancel(summaryId);
            }
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
                angular.extend($scope.personal, data.data);
                // console.info($scope.personal);
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