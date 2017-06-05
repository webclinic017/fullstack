;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$rootScope', '$scope', '$state', '$window', 'config', 'account', 'authorization', 'lang', '$cookies', '$timeout', 'redbag'];

    /**
     * @name GlobalController
     * @desc
     */
    function GlobalController($rootScope, $scope, $state, $window, config, account, authorization, lang, $cookies, $timeout, redbag) {
        $scope.userstatus = {
            logined: false
        };

        $scope.lang = lang;

        $scope.personal = {};

        $scope.process = {};

        $scope.logout = logout;
        $scope.reloadLanguage = reloadLanguage;
        $scope.toTrackRegisterSensorsdata = toTrackRegisterSensorsdata;
        $scope.toTrackLoginSensorsdata = toTrackLoginSensorsdata;
        $scope.toTrackBannerSensorsdata = toTrackBannerSensorsdata;

        $rootScope.personalCookiesInfo = {
            userCode: $cookies["user_code"],
            userName: decodeURIComponent($cookies["username"] || ''),
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date())
        };

        $scope.$on('$stateChangeStart', function (event, toState, toParams) {

            account.checkLogined().then(function (logined) {
                $scope.userstatus.logined = logined;
                if (logined) {
                    // initialize();
                    getUnreadLength();
                    account.getPersonalInfo().then(function (data) {
                        // console.log('info', data);
                        if (!data) return;
                        angular.extend($scope.personal, data, {
                            profile_check_ready: true,
                            xsAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.xs + '?timestamp=' + (+new Date()),
                            smAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.sm + '?timestamp=' + (+new Date()),
                            mdAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.md + '?timestamp=' + (+new Date()),
                            lgAvatar: config.avatarCfg.path + data.usercode + config.avatarCfg.lg + '?timestamp=' + (+new Date())
                        });
                        if (data.profile_check != 3) {
                            getAuthStatus();
                        }
                        $scope.$broadcast('global_controller_has_get_info');
                    });
                }
            });
        });

        getUnreadLength();
        setInterval(function () {
            getUnreadLength();
        }, 30000);

        // account.checkLogined().then(function (logined) {
        //     $scope.userstatus.logined = logined;
        //     if (logined) {
        //         initialize();

        //     }
        // });
        function getAuthStatus() {
            account.getAuthStatus().then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    angular.extend($scope.personal, {
                        verify_status: parseInt(data.data.status)
                    });
                }
            });
        }

        $scope.$on('refresh_personal_cookies_info', function (event, is_login, is_register) {
            console.info('refresh_personal_cookies_info');
            if (is_login) {
                $rootScope.personalCookiesInfo = {
                    userCode: $cookies["user_code"],
                    userName: decodeURIComponent($cookies["username"] || ''),
                    userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md
                };
            } else {
                $rootScope.personalCookiesInfo.userCode = undefined;
            }
        });

        $scope.$on('relogin_info', function (event, arg) {
            // 注册时获取默认头像
            if (arg && arg === 'is_register') {
                $timeout(function () {
                    $rootScope.personalCookiesInfo = {
                        userCode: $cookies["user_code"],
                        userName: decodeURIComponent($cookies["username"] || ''),
                        userAvatar: config.avatarCfg.path + 'male' + config.avatarCfg.md
                    };
                }, 100);
            } else {
                $timeout(function () {
                    // console.info($cookies);
                    // console.info($cookies["user_code"]);
                    $scope.$emit('refresh_personal_cookies_info', 'login');
                }, 100);
            }
            getUnreadLength();
        });

        // 获取新消息
        function getUnreadLength() {
            if ($scope.userstatus.logined) {
                account.getUnreadLength().then(function (data) {
                    // console.log(data);
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.unreadLength = data.data;

                        angular.extend($scope.personal, {
                            unreadLength: $scope.unreadLength
                        });
                    }
                });
            }
        }

        // 退出
        function logout() {
            account.logout().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    // 神策数据统计
                    sa.logout(true);

                    account.hasChecked = false;
                    $window.location.href = '/space/#/account/login';

                    $scope.$emit('refresh_personal_cookies_info');

                }
            });
        }

        // change language into English or Chinese
        function reloadLanguage(lang) {
            document.cookie = 'lang=' + lang + '; path=/';
            location.reload();
        }

        function toTrackRegisterSensorsdata() {
            // 神策数据统计
            sa.track('btn_register');
        }
        function toTrackLoginSensorsdata() {
            // 神策数据统计
            sa.track('btn_login');
        }
        function toTrackBannerSensorsdata(event, title, index) {
            // console.info(event.target.href, title, index);
            // umeng
            _czc.push(['_trackEvent', '首页Banner', '点击', index]);
            // 神策数据统计
            sa.track('btn_banner', {
                banner_title: title,
                banner_url: event.target.href,
                banner_index: index
            });
        }
    }
})();
