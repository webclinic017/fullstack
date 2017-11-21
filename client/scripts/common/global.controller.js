;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$rootScope', '$scope', '$state', '$window', 'config', 'account', 'authorization', 'lang', '$cookies', '$timeout', 'redbag', '$cookieStore', '$modal', '$layer'];

    /**
     * @name GlobalController
     * @desc
     */
    function GlobalController($rootScope, $scope, $state, $window, config, account, authorization, lang, $cookies, $timeout, redbag, $cookieStore, $modal, $layer) {
        $rootScope.personalCookiesInfo = {
            userCode: $cookies["user_code"],
            userName: decodeURIComponent($cookies["username"] || ''),
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date())
        };
        $scope.userstatus = { logined: false };
        $scope.lang = lang;
        $scope.personal = {};
        $scope.personal.is_live = null;
        $scope.process = {};

        $scope.logout = logout;
        $scope.reloadLanguage = reloadLanguage;
        $scope.toTrackRegisterSensorsdata = toTrackRegisterSensorsdata;
        $scope.toTrackLoginSensorsdata = toTrackLoginSensorsdata;
        $scope.toTrackBannerSensorsdata = toTrackBannerSensorsdata;
        $scope.toQuickPageviewSensorsdata = toQuickPageviewSensorsdata;
        $scope.openDredgeMdl = openDredgeMdl;
        var globalScope = $scope;

        // 初始加载
        getUnreadLength();
        setInterval(function () {
            getUnreadLength();
        }, 30000);

        /*******************global 事件系统************************/
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
                        getAuthStatus()
                        $scope.$broadcast('global_controller_has_get_info');
                    });
                }
            });
        });
        $scope.$on('refresh_personal_cookies_info', function (event, is_login, is_register) {
            console.info('refresh_personal_cookies_info');
            if (is_login) {
                $rootScope.personalCookiesInfo = {
                    userCode: $cookies["user_code"],
                    userName: decodeURIComponent($cookies["username"] || ''),
                    userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date())
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
        $scope.$on('global.openDredgeMdl', function (e, resolve) {
            if (!resolve) { return }
            openDredgeMdl(resolve)
        })
        $scope.$on('global.getAuthStatus', function (e, resolve) {
            /**
             * resolve { ctrlName: 'globalController'[, callback]} 
             */
            if (resolve && resolve.ctrlName) {
                console.log('global.getAuthStatus called by ' + resolve.ctrlName)
                getAuthStatus(resolve.callback)
            } else {
                console.warn('call global.getAuthStatus error, due to no ctrlName')
            }
        })
        $scope.$on('global.checkAuthenFlow', function (e, resolve) {
            /**
             * resolve { ctrlName: 'globalController'[, callback]} 
             */
            if (resolve && resolve.ctrlName) {
                console.log('global.checkAuthenFlow called by ' + resolve.ctrlName)
                if (checkAuthenFlow($scope.dredged_type)) {
                    resolve.callback()
                }
            } else {
                console.warn('call global.checkAuthenFlow error, due to no ctrlName')
            }
        })
        /*******************global 事件系统************************/


        /*******************global functions*********************/
        // 获取新消息
        function getUnreadLength() {
            if ($scope.userstatus.logined) {
                account.getUnreadLength().then(function (data) {
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.unreadLength = ~~data.data.system + ~~data.data.trade;
                        angular.extend($scope.personal, {
                            unreadMsg: {
                                total: ~~data.data.system + ~~data.data.trade,
                                trade: ~~data.data.trade,
                                system: ~~data.data.system
                            }
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

        // 数据统计相关
        function toTrackRegisterSensorsdata() {
            // 神策数据统计
            sa.track('btn_register', {
                page: window.location.href
            });
        }
        function toTrackLoginSensorsdata() {
            // 神策数据统计
            sa.track('btn_login');
        }
        function toTrackBannerSensorsdata(title, index) {
            // umeng
            _czc.push(['_trackEvent', '首页Banner', '点击', index]);
            // 神策数据统计
            sa.track('btn_banner', {
                pc_banner_name: title,
                pc_banner_location: index
            });
        }
        function toQuickPageviewSensorsdata(masterName) {    // 浏览高手页面
            sa.track('$pageview', {
                master_name: masterName
            });
        }

        // 开户弹窗
        /**
         * openDredgeMdl
         * @param {*Object} resolve 
         * position redbag copy payment
         * userInfo personal
         */
        // openDredgeMdl('test')
        function openDredgeMdl(position) {
            $modal.open({
                templateUrl: '/views/account/dredge_modal.html',
                size: 'sm',
                backdrop: 'static',
                resolve: {
                    passedScope: function () {
                        return position
                    }
                },
                controller: ['$scope', 'passedScope', '$modalInstance', '$state', '$timeout', '$location', '$layer', function ($scope, passedScope, $modalInstance, $state, $timeout, $location, $layer) {
                    $scope.closeModal = closeModal;
                    $scope.position = passedScope.position;

                    $scope.dredge_type = 'all';

                    $scope.openDemo = function(){
                        globalScope.personal.is_live = '0'
                        window.location.href = location.origin + '/space/#/authen/complete'
                        closeModal()
                    }
                    $scope.confirmLive = function () {
                        $modalInstance.dismiss()
                        $layer({
                            title: '提示',
                            // msgClass: 'font-danger',
                            size: 'sm',
                            btnsClass: 'text-right',
                            msg: '开通真实账户后，将不再支持开通体验金账户',
                            btns: {
                                '取消': function () { },
                                '继续': function () {
                                    globalScope.personal.is_live = '1'
                                    window.location.href = location.origin + '/space/#/authen/investInfo'
                                }
                            }
                        })
                    }

                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }

        // 获取认证状态
        // status 1:没填kyc,2:没填写昵称邮箱,3:未上传过身份证,4:审核拒绝,5:待审核,6:审核通过,10:开户完成
        // account_status 0:没开通,1:真实,2:模拟
        // status=10只有在添加认证信息结束的时候我会返回10，app主动请求获取用户认证状态的最终状态是6(审核通过)不会有10
        function getAuthStatus(callback) {
            account.getAuthStatus({
                is_live: globalScope.personal.is_live
            }).then(function (data) {
                console.log('global.getAuthStatus', data);
                if (data.is_succ) {
                    // 开户类型(体验金、真实)
                    var verify_status = data.data.status
                    var accountStatus = data.data.account_status
                    var accountStatusMap = {
                        '0': 'unknow',
                        '1': 'live',
                        '2': 'demo',
                    }
                    // 是否通过认证
                    var passedAuthen = verify_status == 6
                    var params = {
                        verify_status: verify_status,
                        // 开通类型
                        dredged_type: accountStatusMap[accountStatus],
                        passedAuthen: passedAuthen
                    }
                    angular.extend($scope.personal, params);
                    callback && angular.isFunction(callback) && callback(params)
                }
            });
        }

        // 校验认证状态，以及相关弹窗操作
        function checkAuthenFlow(dredged_type) {
            var dredged_type = $scope.personal.dredged_type;
            var verify_status = $scope.personal.verify_status;
            var passedAuthen = $scope.personal.passedAuthen;

            // 通过直接return
            if (passedAuthen) {
                return true
            } else {
                if (dredged_type == 'unknow') {
                    $scope.$emit('global.openDredgeMdl', {
                        position: 'withdraw'
                    });
                } else {
                    if (verify_status == 5) {
                        $layer({
                            // title: '系统提示',
                            // msgClass: 'font-danger',
                            size: 'sm',
                            btnsClass: 'text-right',
                            msg: '您的账户正在审核中，请等待审核通过后再进行提现操作',
                            btns: {
                                '确定': function () { }
                            }
                        })
                    } else {
                        // 没有完成实名认证
                        $modal.open({
                            templateUrl: '/views/asset/verify_modal.html',
                            size: 'sm',
                            backdrop: true,
                            controller: function ($scope, $modalInstance) {
                                $scope.closeModal = closeModal;
                                $scope.dredged_type = dredged_type
                                function closeModal() {
                                    $modalInstance.dismiss();
                                }
                            }
                        });
                    }
                }
                return false
            }
        }
    }
})();
