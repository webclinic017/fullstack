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
            
            // 跨域请求资源携带cookie
            // $httpProvider.defaults.withCredentials = true;

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
            //    'http://bd.tigerwit.com/**'
            ]);
        }])
        // .config(['$locationProvider', function($locationProvider) {
        //     $locationProvider.html5Mode(true);
        //   }])
        // .config(['$compileProvider', function ($compileProvider) {
        //     $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|local|data):/);
        // }])
        .run(['$rootScope', '$state', '$window', 'account', 
                function ($rootScope, $state, $window, account) {
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
                
                // 未匹配的跳转到 404
                if (toState.name === '404') {
                    $window.location.replace('/404');
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
