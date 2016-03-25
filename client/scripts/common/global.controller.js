;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$state', 'config', 'account'];

    /**
     * @name GlobalController
     * @desc
     */ 
    function GlobalController($scope, $state, config, account) {
        $scope.userstatus = {
            logined: false
        };

        $scope.personal = {};

        $scope.logout = logout;

        account.checkLogined().then(function (logined) {
            $scope.userstatus.logined = logined;
            if (logined) {
                initialize();
            }
        });
        

        // 初始化所需的全局数据
        function initialize() {
            account.getPersonalInfo().then(function (data) {
                angular.extend($scope.personal, data, {
                    xsAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.xs,    
                    smAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.sm,    
                    mdAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.md,    
                    lgAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.lg
                });
            });
        }

        // 退出
        function logout() {
            account.logout().then(function (data) {
                if (data.is_succ) {
                    $state.go('account.subpage', {subPage: 'login'});
                }
            });
        }


    }
})();