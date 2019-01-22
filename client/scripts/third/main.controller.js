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
            userName: decodeURIComponent($cookies["username"] || ''),
            userAvatar: config.avatarCfg.path + $cookies["user_code"] + config.avatarCfg.md + '?timestamp=' + (+new Date()),
            third_mt4: $cookies["third_mt4"]
        };

        main.thirdLogout = thirdLogout;

        //获取domain
        $scope.getDomain = function () {
            var domain = location.hostname.match(/\.\w+\.com/) ? location.hostname.match(/\.\w+\.com/)[0] : '.tigerwit.com';
            // console.log(url.match(/\.\w+\.com/)[0]);
            return domain;
        }

        $scope.writeCookie = writeCookie;
        function writeCookie (params) {
            params.expires = params.expires || 30;
            params.path = params.path || '/';
            /**
             * params
             *      nameKey: 名字
             *      nameValue: 
             *      expires: 过期时间 单位天
             *      path
             *  */
            var oDate = new Date();
            oDate.setTime(oDate.getTime() + (params.expires * 24 * 60 * 60 * 1000));
            document.cookie = params.nameKey+'='+params.nameValue+';path='+params.path+';domain='+$scope.getDomain()+';expires='+oDate.toUTCString();
        } 

        function thirdLogout() {
            account.logout().then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    account.hasChecked = false;
                    writeCookie({nameKey: 'token', nameValue: '', expires: -1, path: '/payment'});
                    writeCookie({nameKey: 'user_code', nameValue: '', expires: -1, path: '/payment'});
                    writeCookie({nameKey: 'username', nameValue: '', expires: -1, path: '/payment'});
                    writeCookie({nameKey: 'username_en', nameValue: '', expires: -1, path: '/payment'});
                    $window.location.href = '/payment/login';
                }
            });
        }

        main.verifyInfo = {
            status: false,
            msg: '网络错误，请联系客服'
        };
        account.checkLogined().then(function (logined) {
            if (logined) {
                // 获取资产信息、个人信息
                account.getPersonalInfo().then(function (data) {
                    console.log('info', data);
                    if (!data) return;
                    angular.extend($scope.main, data);
                });

                account.getAssetInfo().then(function (data) {
                    if (!data) return;
                    if (data.is_succ) {
                        angular.extend($scope.main, data.data);
                        var my_total_balance = (Number(data.data.balance) + Number(data.data.wallet_balance)).toFixed(2);
                        angular.extend($scope.main, {
                            my_total_balance: my_total_balance
                        });
                    }
                });

                //获取认证状态
                account.getAuthStatus().then(function (data) {
                    if (data.is_succ) {
                        main.accountStatus = data.data.account_status;
                        if (data.data.status == 6) {
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
