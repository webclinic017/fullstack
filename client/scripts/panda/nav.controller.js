;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('PandaNavController', PandaNavController);

    PandaNavController.$inject = ['$scope','$cookies', '$timeout', 'config', 'account', '$window'];

    /**
     * @name PandaNavController
     * @desc
     */
    function PandaNavController($scope, $cookies, $timeout, config, account, $window) {
        $scope.pandaInfo = {
            userCode: $cookies["user_code"],
            userName: decodeURIComponent($cookies["username"] || ''),
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date())
        };

        $scope.pandaLogout = pandaLogout;

        // 退出
        function pandaLogout() {
            account.logout().then(function (data) {
                if (!data) return;
                if (data.is_succ) {

                    account.hasChecked = false;
                    $window.location.href = '/panda/login';
                }
            });
        }
    }
})();
