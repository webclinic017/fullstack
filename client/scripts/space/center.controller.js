;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('CenterHomeController', CenterHomeController);

    CenterHomeController.$inject = ['$rootScope','$scope', '$location', '$interval', '$state', 'account', 'invite', '$timeout', 'config', 'redbag', 'trader'];

    /**
     * @name CenterHomeController
     * @desc
     */
    function CenterHomeController($rootScope,$scope, $location, $interval, $state, account, invite, $timeout, config, redbag, trader) {
        var summaryId;
        $scope.assetInfo = null

        //定时提取用户资产信息
        loopAsset();


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
                if (data.is_succ) {
                    $scope.assetInfo = data.data;
                } 
            });
        }
    }
})();
