;
(function () {
    'use strict';

    angular.module('fullstackApp', [
        'ui.router',
        'ngCookies'
    ]);

    
    angular
        .module('fullstackApp')
        .config(['$httpProvider', function ($httpProvider) {
            // 解决 IE 缓存 Ajax 请求的问题
            $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

            $httpProvider.interceptors.push(['$q', 'config', function ($q, config) {
                return {
                    request: function (configParam) {       
                        configParam.timeout = config.httpTimeout;
                        // var reqUrl = configParam.url;

                        // if (/\.html$/.test(reqUrl) || /\.json$/.test(reqUrl)) {

                        // } else {
                        //     reqUrl = '/api/' + reqUrl;
                        // }

                        // configParam.url = reqUrl;
                        return configParam;
                    },
                    response: function (response) {
                        if (/\.html$/.test(response.config.url)) {
                            return response;
                        } else {
                            return response.data;
                        }
                    },
                    'responseError': function (response) {
                        return $q.reject(response);
                    }
                };
            }]);
        }])
        .run(['$rootScope', '$state', '$window', 'account', 
                function ($rootScope, $state, $window, account) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                
                // 未匹配的跳转到 404
                if (toState.name === '404') {
                    $window.location.replace('/404');
                }

                // 需要登录的调用 account 的 checkLogined 方法
                if (toState.authenticated) {
                    account.checkLogined().then(function (logined) {
                        if (!logined) {
                            $window.location.replace('/space/#/account/login');
                        }
                    });
                }
            });

            // pv 统计
            var pageUrl = $window.location.pathname + $window.location.hash;
            statPV(pageUrl);

            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams) {
                pageUrl = '/' + $state.href(toState, toParams);
                statPV(pageUrl);
            });

            function statPV(pageUrl) {
                // ga('send', 'pageview');

                // // 百度 pv 统计第二个参数必选且必须以 '/' 开头
                // _hmt.push(['_trackPageview', '/' + pageUrl]);    
            }
        }]);
})();