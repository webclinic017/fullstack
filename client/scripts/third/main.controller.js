;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ThirdMainController', ThirdMainController);

    ThirdMainController.$inject = ['$rootScope', '$scope', '$state', '$window', '$location', 'config', 'account', 'authorization', '$cookies', '$timeout', '$cookieStore', '$modal', '$layer', 'lang'];
    function ThirdMainController($rootScope, $scope, $state, $window, $location, config, account, authorization, $cookies, $timeout, $cookieStore, $modal, $layer, lang) {
        $scope.lang = lang;
        // main存储全局共享数据
        var main = $scope.main = $rootScope.main = {}

        main.thirdInfo = {
            userCode: $cookies["user_code"],
            userName: getCookie("username") || '',
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date()),
            third_mt4: $cookies["third_mt4"]
        };

        main.thirdLogout = thirdLogout;

        //获取domain
        $scope.getDomain = getDomain;
        // function () {
        //     // var domain = location.hostname.match(/\.\w+\.com/) ? location.hostname.match(/\.\w+\.com/)[0] : '.tigerwit.com';
        //     var domain = '.' + location.hostname.split('.').slice(-2).join('.');
        //     // console.log(url.match(/\.\w+\.com/)[0]);
        //     return domain;
        // }

        $rootScope.writeCookie = setCookie;
        // $scope.writeCookie = setCookie;
        // function writeCookie(params) {
        //     console.log(params);
        //     params.expires = params.expires || 30;
        //     params.path = params.path || '/';
        //     /**
        //      * params
        //      *      name: 名字
        //      *      value: 
        //      *      expires: 过期时间 单位天
        //      *      path
        //      *  */
        //     var oDate = new Date();
        //     oDate.setTime(oDate.getTime() + (params.expires * 24 * 60 * 60 * 1000));
        //     document.cookie = params.name + '=' + params.value + ';path=' + params.path + ';domain=' + $scope.getDomain() + ';expires=' + oDate.toUTCString();
        // }

        /**
         * google Analytics统计
         * 2019.09.12
         * facebook统计
         * 2019.10.14
         */
        $scope.toGtagEvent = toGtagEvent;

        /**
         * 友盟统计
         * 2019.02.18
         */
        $scope.toTrackEvent = function (category, action) {
            console.log(category, action);
            _czc.push(["_trackEvent", category, action]);
        };


        function thirdLogout() {
            account.logout().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    account.hasChecked = false;
                    $scope.writeCookie({ name: 'token', value: '', expires: -1, path: '/payment' });
                    $scope.writeCookie({ name: 'user_code', value: '', expires: -1, path: '/payment' });
                    $scope.writeCookie({ name: 'username', value: '', expires: -1, path: '/payment' });
                    $scope.writeCookie({ name: 'username_en', value: '', expires: -1, path: '/payment' });
                    $window.location.href = '/payment/login';
                }
            });
        }

        main.verifyInfo = {
            status: false,
            msg: '网络错误，请联系客服'
        };
        // 获取summary
        $scope.$on('main.getAssetInfo', function (e, resolve) {
            account.getAssetInfo().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    angular.extend($scope.main, data.data);
                    // var my_total_balance = (Number(data.data.balance) + Number(data.data.wallet_balance)).toFixed(2);
                    // angular.extend($scope.main, {
                    //     my_total_balance: my_total_balance
                    // });
                }
            });
        })
        account.checkLogined().then(function (logined) {
            if (logined) {
                // 获取资产信息、个人信息
                account.getPersonalInfo().then(function (data) {
                    console.log('info', data);
                    if (!data) return;
                    angular.extend($scope.main, data);
                });

                $scope.$emit('main.getAssetInfo')

                //获取认证状态
                account.getAuthStatus().then(function (data) {
                    if (data.is_succ) {
                        main.accountStatus = data.data.account_status;
                        if (data.data.status == 11) {
                            main.verifyInfo = {
                                status: true,
                                msg: ''
                            };
                        } else {
                            main.verifyInfo = {
                                status: false,
                                msg: '您还未认证通过，请登录App提交认证或等待认证通过后即可进行资金操作',
                            };
                        }
                    } else {
                        main.verifyInfo = {
                            status: false,
                            msg: data.message,
                        };
                    }
                });
            }
        });

        // 切换页面
        main.pageCtrl = 'deposit'
        main.switchPage = function (page) {
            main.pageCtrl = page
        }

        $scope.$on('global.checkAuthenFlow', function (e, resolve) {
            if (resolve && resolve.ctrlName) {
                if (checkAuthenFlow()) {
                    resolve.callback()
                }
            } else {
                console.warn('call global.checkAuthenFlow error, due to no ctrlName')
            }
        })

        // 校验认证状态，以及相关弹窗操作
        function checkAuthenFlow() {
            if (main.verifyInfo.status) {
                return true;
            } else {
                openMsgMdl({
                    size: 'sm',
                    btnsClass: 'text-right',
                    msgClass: 'font-danger',
                    msg: main.verifyInfo.msg,
                    btns: {
                        '确定': function () { }
                    }
                })
                return false;
            }
        }
        function openMsgMdl(params) {
            $modal.open({
                templateUrl: '/views/template/$layer_modal.html',
                size: params.size || 'sm',
                backdrop: true,
                controller: ['$scope', '$modalInstance', 'lang', function ($scope, $modalInstance, lang) {
                    $scope.lang = lang;
                    // 绑定参数
                    angular.extend($scope, params)
                    //$scope.loading = 0;   0 未loading；1 正在loading；2 loading完毕
                    $scope.loading = 0;
                    $scope.handler = function (value) {
                        var evaled = eval(value)
                        angular.isFunction(evaled) && evaled($scope)
                        if (!params.autoClose) {
                            closeModal()
                        }
                    }
                    $scope.closeModal = closeModal
                    function closeModal() {
                        $modalInstance.dismiss();
                    }
                }]
            });
        }
    }
})();
