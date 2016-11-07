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
            //1，测试了IE并没有重现缓存ajax的情况
            //2,如果加no-cache,则不会有if-modify-since参数，则会导致每次都请求200数据，速度变慢
           // $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

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
        .config(['$sceDelegateProvider', function($sceDelegateProvider) {
           $sceDelegateProvider.resourceUrlWhitelist([
               // Allow same origin resource loads.
               'self',
               // Allow loading from our assets domain.  Notice the difference between * and **.
               'http://bd.tigerwit.com/**']);
        }])
        .run(['$rootScope', '$state', '$window', 'account', '$cookies', 
                function ($rootScope, $state, $window, account, $cookies) {
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
            // php接口要用http://proxy.tigerwit.com请求
            var phpUrlOrigin = "https://proxy.tigerwit.com";
            // var phpUrlOrigin = "http://wproxy.tigerwit.com";
            $rootScope.phpUrlOrigin = $cookies["company_name"] === 'tigerwit' ? phpUrlOrigin : '';

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
