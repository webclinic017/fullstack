;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderIndexController', TraderIndexController);

    TraderIndexController.$inject = ['$scope', '$state', 'trader', '$timeout', '$modal'];

    function TraderIndexController($scope, $state, trader, $timeout, $modal) {
        $scope.master = {};
        $scope.toCopy = toCopy;
        var usercode,
            detailId;

        $scope.$on('$stateChangeSuccess', function (event, toState, toParams) {
            usercode = toParams.usercode;
            // console.info(usercode);
            getMasterDetail(usercode);

            $scope.$on('$stateChangeStart', function (event, toState, toParams) {
                if (toParams.usercode !== usercode) {
                    $timeout.cancel(detailId);
                }
            });
        });



        function getMasterDetail (usercode) {
            trader.getMasterDetail(usercode).then(function (data) {
                // console.info(data);
                $scope.master = data;
            });

            detailId = $timeout(function () {
                getMasterDetail(usercode);
            }, 5000);
        }

        function toCopy () {
            openSystemMdl('verify');
        }

        function openSystemMdl(type, info) {
            $modal.open({
                templateUrl: '/views/trader/system_modal.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.modal = {
                        type: type, // 系统弹窗类型：login, verify, isMaster（已经是高手）, amount（可用复制金额不足）
                        info: info
                    };
                    $scope.closeModal = closeModal;

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }
            });
        }
    }
})();