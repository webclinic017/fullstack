;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$window', 'config', 'account'];

    /**
     * @name GlobalController
     * @desc
     */ 
    function GlobalController($scope, $window, config, account) {
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
            getUnreadLength();
        }

        // 获取新消息
        function getUnreadLength () {
            account.getUnreadLength().then(function(data) {
                $scope.unreadLength = data.num;

                angular.extend($scope.personal, {
                    unreadLength: $scope.unreadLength
                });
            });
            $scope.$emit('refreshNoticeList');
        }

        // 退出
        function logout() {
            account.logout().then(function (data) {
                if (data.is_succ) {
                    $window.location.href='/space/#/account/login';
                }
            });
        }


    }
})();