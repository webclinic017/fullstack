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
            userNameEn: $cookies["username_en"] || '',
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date())
        };
        $scope.userstatus = { logined: false };
        $scope.lang = lang;

        // 临时头像预览
        $scope.uploadAvatarImg = '';

        $scope.personal = {};
        $scope.personal.is_live = '1';
        $scope.personal.updatePapers = {};
        $scope.process = {};
        $scope.worldList = [];  //  ----|
        // $scope.currentWorld = {}; ---| -- 选择国家
        // $scope.entryWorld = '';  ----|
        $scope.logout = logout;
        $scope.reloadLanguage = reloadLanguage;
        $scope.openDredgeMdl = openDredgeMdl;
        var globalScope = $scope;

        window.$scope = $scope;

        // 初始加载
        getUnreadLength();
        setInterval(function () {
            getUnreadLength();
        }, 30000);
        getEmailPhone();
        // 获取国家列表
        getWorlds();
        function getWorlds() {
            account.getWorlds().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (!data.is_succ) {
                    return;
                }
                $scope.worldList = data.data;
            });
        }
        // $scope.setWorld = function(world){
        //     $scope.currentWorld = world;
        // }
        /*******************global 事件系统************************/
        $scope.$on('$stateChangeStart', function (event, toState, toParams) {
            $scope.toState = toState
            // console.log('toState', toState)
            account.checkLogined().then(function (logined) {
                $scope.userstatus.logined = logined;
                if (logined) {
                    // initialize();
                    getUnreadLength();
                    account.getPersonalInfo().then(function (data) {
                        // console.log('info', data);
                        if (!data) return;
                        if(data.user_type){
                            accountInitializerTip(data.user_type);
                        }
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
        // 账号合并提醒
        // accountInitializerTip(1);
        function accountInitializerTip(type){
            $modal.open({
                templateUrl: '/views/account/account_Initializer_tip.html',
                size: 'sm',
                backdrop: true,
                controller: function ($scope, $modalInstance) {
                    $scope.historyType = type;
                    $scope.closeModal = closeModal;
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                },
            });
        }
        $scope.$on('refresh_personal_cookies_info', function (event, is_login, is_register) {
            // console.info('refresh_personal_cookies_info');
            if (is_login) {
                $rootScope.personalCookiesInfo = {
                    userCode: $cookies["user_code"],
                    userName: decodeURIComponent($cookies["username"] || ''),
                    userNameEn: $cookies["username_en"] || '',
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
                        userNameEn: $cookies["username_en"] || '',
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
            console.log(resolve.ctrlName);
            /**
             * resolve { ctrlName: 'globalController'[, callback]} 
             */
            if (resolve && resolve.ctrlName) {
                // console.log('global.getAuthStatus called by ' + resolve.ctrlName)
                getAuthStatus({
                    callback:resolve.callback
                })
            } else {
                console.warn('call global.getAuthStatus error, due to no ctrlName')
            }
        })
        $scope.$on('global.checkAuthenFlow', function (e, resolve) {
            /**
             * resolve { ctrlName: 'globalController'[, callback]} 
             */
            if (resolve && resolve.ctrlName) {
                // console.log('global.checkAuthenFlow called by ' + resolve.ctrlName)
                if (checkAuthenFlow($scope.dredged_type, resolve.ctrlName)) {
                    resolve.callback()
                }
            } else {
                console.warn('call global.checkAuthenFlow error, due to no ctrlName')
            }
        })
        $scope.$on('global.getUnReadMsgLength', function(e, resolve){
            if (resolve && resolve.ctrlName) {
                // console.log('global.getUnReadMsgLength called by ' + resolve.ctrlName)
                getUnreadLength(function(){
                    resolve.callback && resolve.callback()
                    $scope.$broadcast('global.getUnReadMsgLength.done', $scope.personal.unreadMsg)
                })
            } else {
                console.warn('call global.getUnReadMsgLength error, due to no ctrlName')
            }
        });
        /*******************global 事件系统************************/


        /*******************global functions*********************/
        // 获取新消息
        function getUnreadLength(callback) {
            if ($scope.userstatus.logined) {
                account.getUnreadLength().then(function (data) {
                    if (!data) return;
                    if (data.is_succ) {
                        $scope.unreadLength = ~~data.data.system + ~~data.data.trade;
                        angular.extend($scope.personal, {
                            unreadMsg: {
                                total: $scope.unreadLength,
                                trade: ~~data.data.trade,
                                system: ~~data.data.system
                            }
                        });
                        callback && callback()
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
            var d = new Date();
            d.setTime(d.getTime() + (-1*24*60*60*1000));
            document.cookie = 'lang=' + lang + '; path=/; expires='+d.toUTCString();
            document.cookie = 'lang=' + lang + '; path=/; domain=.tigerwit.com';
            location.reload();
        }
        //设置允许使用cookie
        $scope.getAllowCookie = function () {
            var allow = localStorage["allowUserCookie"];
            if (allow && allow === 'allow') {
                $scope.allowUseCookie = false;
            } else {
                $scope.allowUseCookie = true;
            }
        };
        $scope.setAllowCookie = function () {
            $scope.allowUseCookie = false;
            localStorage["allowUserCookie"] = 'allow';
        }
        //获取邮箱电话等信息
        function getEmailPhone() {
            console.log($cookies["sysMessage"]);
            if ($cookies["sysMessage"]) {
                $rootScope.sysMessage = JSON.parse($cookies["sysMessage"]);
            } else {
                var d = new Date();
                d.setTime(d.getTime() + (1*24*60*60*1000));
                account.getEmailPhone().then(function (data) {
                    console.log(data);
                    if (data.is_succ) {
                        $rootScope.sysMessage = data.data;
                        document.cookie = 'sysMessage=' + JSON.stringify(data.data) + '; path=/; domain=.tigerwit.com; expires='+d.toUTCString();
                    }
                });
            }
        }

        /*
         * 神策数据 统计
         * 2018.01.03 update
         */
        $scope.toTrackLoginSensorsdata = function () {    // 点击header登录按钮触发
            sa.track('btn_login');
        };
        $scope.toTrackBannerSensorsdata = toTrackBannerSensorsdata;
        window.toTrackBannerSensorsdata = toTrackBannerSensorsdata; //弹窗调用 index.controller.js
        function toTrackBannerSensorsdata (type, name, index) { // 点击广告位
            var param = {
                banner_client: 'pc',
                banner_name: name
            };
            if (type == 'focus') {      //轮播图
                param.banner_type = '顶部轮播图';
                param.banner_location = index+1;
            } else if (type == 'modal') {   //弹窗图
                param.banner_type = '弹窗图';
            }
            // console.log(param);
            // 神策数据统计
            sa.track('New_btn_banner', param);
        }
        $scope.toQuickPageviewSensorsdata = function (masterName) {    // 浏览高手页面
            sa.track('$pageview', {
                master_name: masterName
            });
        };
        $scope.toTrackPhoneSensorsdata = function () {  // 点击手机号码输入框
            sa.track('inp_PN');
        };
        $scope.toTrackEmailSensorsdata = function () {  // 点击邮箱输入框
            sa.track('inp_email');
        };
        $scope.toTrackCodeSensorsdata = function () {  // 点击验证码输入框
            sa.track('inp_code');
        };
        $scope.toTrackEmailCodeSensorsdata = function () {  // 点击邮箱验证码输入框
            sa.track('inp_email_code');
        };
        $scope.toAuthenTypeSensorsdata = toAuthenTypeSensorsdata;
        function toAuthenTypeSensorsdata (type) {  // 选择开户类型
            sa.track('New_Selectiontype', {
                account_type: type
            });
        }
        $scope.toAuthenCompleteSensorsdata = function (type) { //完成开户
            sa.track('New_Theaccount', {
                account_type: type
            });
        };

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
                controller: ['$scope', 'passedScope', '$modalInstance', '$state', '$timeout', '$location', '$layer', 'lang', function ($scope, passedScope, $modalInstance, $state, $timeout, $location, $layer, lang) {
                    $scope.closeModal = closeModal;
                    $scope.position = passedScope.position;
                    $scope.lang = lang;

                    $scope.dredge_type = 'all';
                    $scope.loading = {
                        demo: false
                    }
                    if (!window.location.origin) {
                        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
                    }

                    $scope.openDemo = function(){
                        globalScope.personal.is_live = '2'
                        $scope.loading.demo = true
                        getAuthStatus({
                            is_live: globalScope.personal.is_live
                        }).then(function(){
                            $scope.loading.demo = false
                            window.location.href = window.location.origin + '/space/#/authen/complete'
                            closeModal()
                            toAuthenTypeSensorsdata('体验金账户');
                        })
                    }
                    $scope.confirmLive = function () {
                        $modalInstance.dismiss()
                        $timeout(function(){
                            var obj = {
                                title: lang.text('tigerWitID.prompt'),
                                // msgClass: 'font-danger',
                                size: 'sm',
                                btnsClass: 'text-right',
                                msg: lang.text("tigerWitID.myAccount.tip38"),
                                autoClose: false,
                                btns: {}
                            }
                            obj.btns[lang.text("tigerWitID.cancel")] = function(){}
                            obj.btns[lang.text("tigerWitID.continue")] = function (oScope) {
                                globalScope.personal.is_live = '1'
                                oScope.loading = 1
                                getAuthStatus({
                                    is_live: globalScope.personal.is_live
                                }).then(function(){
                                    oScope.loading = 2
                                    window.location.href = window.location.origin + '/space/#/authen/'
                                    toAuthenTypeSensorsdata('真实账户');
                                })
                            }
                            $layer(obj)
                        }, 450)
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
        function getAuthStatus(para) {
            para = para || {};
            return account.getAuthStatus({
                is_live: para.is_live
            }).then(function (data) {
                if (!data) return;
                // console.log('global.getAuthStatus', data);
                if (data.is_succ) {
                    // 开户类型(体验金、真实)
                    // var verify_status = 2
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
                    if(accountStatus == '1'){
                        account.getIdcard().then(function (data) {
                            if (!data) return;
                            if (data.is_succ) {
                                angular.extend($scope.personal.updatePapers, data.data);
                            }
                        })
                    }
                    para.callback && angular.isFunction(para.callback) && para.callback(params)
                    return data
                }
            });
        }
        // 获取代理商认证状态
        $scope.$on('gloabl.agentAuthStatus', function (event, resolve) {
            account.getAgentAuthStatus().then(function (data) {
                if (!data) return;
                // console.log(data);
                if (data.is_succ) {
                    $scope.personal.agentAuthStatus = data.data;
                    resolve && resolve.callback()
                }
            });
        })
        // 校验认证状态，以及相关弹窗操作
        function checkAuthenFlow(dredged_type, ctrlName) {
            var dredged_type = $scope.personal.dredged_type;
            var verify_status = $scope.personal.verify_status;
            var passedAuthen = $scope.personal.passedAuthen;
            var reviewMsgMap = {
                "TraderIndexController": lang.text("tigerWitID.tradingAccount.tip25"),
                "AssetWithdrawController": lang.text("tigerWitID.tradingAccount.tip26"),
                "AssetDepositController": lang.text("tigerWitID.tradingAccount.tip27")
            }

            // 通过直接return
            if (passedAuthen) {
                return true
            } else {
                if (dredged_type == 'unknow') {
                    $scope.$emit('global.openDredgeMdl', {
                        position: ctrlName
                    });
                } else {
                    if (verify_status == 5) {
                        var obj = {
                            // title: '系统提示',
                            // msgClass: 'font-danger',
                            size: 'sm',
                            btnsClass: 'text-right',
                            msg: reviewMsgMap[ctrlName] || lang.text("tigerWitID.tradingAccount.tip24"),
                            btns: {}
                        }
                        obj.btns[lang.text("tigerWitID.confirm")] = function(){}
                        $layer(obj)
                    } else {
                        // 没有完成实名认证
                        $modal.open({
                            templateUrl: '/views/asset/verify_modal.html',
                            size: 'sm',
                            backdrop: true,
                            controller: function ($scope, $modalInstance, lang) {
                                $scope.closeModal = closeModal;
                                $scope.lang = lang;
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
