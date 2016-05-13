;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$state', '$window', 'config', 'account', 'authorization'];

    /**
     * @name GlobalController
     * @desc
     */
    function GlobalController($scope, $state, $window, config, account, authorization) {
        $scope.userstatus = {
            logined: false
        };

        $scope.personal = {};

        $scope.process = {};

        $scope.logout = logout;

        $scope.$on('$stateChangeStart', function (event, toState, toParams) {

            account.checkLogined().then(function (logined) {
                $scope.userstatus.logined = logined;
                // if (logined) {
                //     // initialize();
                //     getUnreadLength();
                // }
            });
        });

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
            // getUnreadLength();
            setInterval(function() {
                getUnreadLength();
            },30000);
        }

        // 获取新消息
        function getUnreadLength () {
            account.getUnreadLength().then(function(data) {
                $scope.unreadLength = data.num;

                angular.extend($scope.personal, {
                    unreadLength: $scope.unreadLength
                });
            });
            // $scope.$emit('refreshNoticeList');

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
