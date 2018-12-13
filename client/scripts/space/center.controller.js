;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('CenterHomeController', CenterHomeController);

    CenterHomeController.$inject = ['$rootScope','$scope', '$location', '$interval', '$state', 'account', 'invite', '$timeout', 'config', 'redbag', 'trader', '$modal', '$cookies'];

    /**
     * @name CenterHomeController
     * @desc
     */
    function CenterHomeController($rootScope,$scope, $location, $interval, $state, account, invite, $timeout, config, redbag, trader, $modal, $cookies) {
        var summaryId;
        $scope.ibPid = $cookies['ib_pid'];
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
        }) 
        $scope.assetInfo = null;
        $scope.notActiveModal = notActiveModal;
        $scope.src = [
            "/white_label/passport/01.png",
            "/white_label/passport/02.png",
            "/white_label/passport/03.png"
        ];
        //定时提取用户资产信息
        getAssetInfo();
        $scope.$watch('personal.profile_check', function (n) {
            loopAsset();
        })


        function loopAsset () {
            // console.log($scope.personal.profile_check);
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

        // 钱包未激活弹窗
        function notActiveModal() {
            $modal.open({
                templateUrl: '/views/space/not_active_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance, lang) {
                    $scope.lang = lang;
                    $scope.contentModal = {
                        title: lang.text("tigerWitID.settings.notificationActivateWallet"),
                        message: lang.text("tigerWitID.settings.notificationActivateWalletCon")
                    }
                    $scope.closeModal = closeModal;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            })
        }
    }
})();
