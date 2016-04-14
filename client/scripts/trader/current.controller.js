;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderCurrentController', TraderCurrentController);

    TraderCurrentController.$inject = ['$scope', '$location', 'trader', '$state', '$timeout'];

    function TraderCurrentController($scope, $location, trader, $state, $timeout) {
        $scope.orders = [];

        var listId;
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        getList();

        // 只要当前投资的所对应的 state 变化就要 cancel 轮询
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            $timeout.cancel(listId);
        });

        function getList () {
            trader.getMasterCurrent(usercode, 1, 10000).then(function (data) {
                // console.info(data);
                $scope.orders = data.data;

                $scope.$broadcast('hideLoadingImg');

                listId = $timeout(function () {                
                    getList();
                }, 5000);
            });
        }
    }
})();