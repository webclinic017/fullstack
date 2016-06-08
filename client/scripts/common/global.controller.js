;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$scope', '$state', '$window', 'config', 'account', 'authorization', 'lang'];

    /**
     * @name GlobalController
     * @desc
     */
    function GlobalController($scope, $state, $window, config, account, authorization, lang) {
        $scope.userstatus = {
            logined: false
        };

        $scope.lang = lang;

        $scope.personal = {};

        $scope.process = {};

        $scope.logout = logout;
        $scope.reloadLanguage = reloadLanguage;

        $scope.$on('$stateChangeStart', function (event, toState, toParams) {

            account.checkLogined().then(function (logined) {
                $scope.userstatus.logined = logined;
                // if (logined) {
                //     // initialize();
                //     getUnreadLength();
                // }
            });
        });

        getUnreadLength();
        setInterval(function() {
            getUnreadLength();
        },30000);

        account.checkLogined().then(function (logined) {
            $scope.userstatus.logined = logined;
            if (logined) {
                initialize();

            }
        });

        $scope.$on('relogin_info', function(){
            initialize();
            getUnreadLength();
        });

        // 初始化所需的全局数据
        function initialize() {
            account.getPersonalInfo().then(function (data) {
                angular.extend($scope.personal, data, {
                    xsAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.xs + '?timestamp=' + (+new Date()),
                    smAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.sm + '?timestamp=' + (+new Date()),
                    mdAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.md + '?timestamp=' + (+new Date()),
                    lgAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.lg + '?timestamp=' + (+new Date())
                });
            });

        }

        // 获取新消息
        function getUnreadLength () {
            account.checkLogined().then(function (logined) {
                if(!logined){
                    return;
                }
                account.getUnreadLength().then(function(data) {
                    $scope.unreadLength = data.num;

                    angular.extend($scope.personal, {
                        unreadLength: $scope.unreadLength
                    });
                });
            });
            // $scope.$emit('refreshNoticeList');

        }

        // 退出
        function logout() {
            account.logout().then(function (data) {
                if (data.is_succ) {
                    account.hasChecked = false;
                    $window.location.href='/space/#/account/login';
                }
            });
        }

        // change language into English or Chinese
        function reloadLanguage (lang) {
            document.cookie = 'lang=' + lang + '; path=/';
            location.reload();
        }

    }
})();
