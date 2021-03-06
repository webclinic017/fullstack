;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('CenterHomeController', CenterHomeController);

    CenterHomeController.$inject = ['$rootScope','$scope', '$location', '$interval', '$state', 'account', 'invite', '$timeout', 'config', 'redbag', 'trader', '$modal', '$cookies', 'fun'];

    /**
     * @name CenterHomeController
     * @desc
     */
    function CenterHomeController($rootScope,$scope, $location, $interval, $state, account, invite, $timeout, config, redbag, trader, $modal, $cookies, fun) {
        var summaryId, competitionListId;
        // var search_arr = fun.getSearch();
        var _all_sources = $cookies['all_sources'], all_sources = {};
        if (_all_sources) {
            all_sources = JSON.parse(_all_sources)
        }
        $scope.cookiesParams = {
            ib_pid: all_sources['ib_pid'],
            // ib_pid: search_arr.ib_pid || all_sources['ib_pid'],
            invite_status: all_sources['invite_status']
        }
        $scope.$on('$destroy',function(){  
            $interval.cancel(summaryId);  
            $interval.cancel(competitionListId);  
        }) 
        $scope.assetInfo = null;
        $scope.notActiveModal = notActiveModal;
        $scope.src = [
            "/white_label/passport/01.png",
            "/white_label/passport/02.png",
            "/white_label/passport/03.png"
        ];
        $scope.competitionList = [];
        //定时提取用户资产信息
        getAssetInfo();
        getCompetitionList();
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
        function getCompetitionList(){
            function time(){
                account.competitionList().then(function(data){
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.competitionList = data.data;
                    } 
                })
            }
            time();
            competitionListId = $interval(function(){
                time();
            }, 5000)
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
