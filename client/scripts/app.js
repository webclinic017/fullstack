;
(function () {
    'use strict';

    angular.module('fullstackApp', [
        'ui.router',
        'ngCookies'
    ]);

    
    angular.module('fullstackApp').config(['$httpProvider', function ($httpProvider) {
        // 解决 IE 缓存 Ajax 请求的问题
        $httpProvider.defaults.headers.common['Cache-Control'] = 'no-cache';

        $httpProvider.interceptors.push(['$q', 'config', function ($q, config) {
            return {
                request: function (configParam) {       
                    configParam.timeout = config.httpTimeout;
                    var reqUrl = configParam.url;

                    if (/\.html$/.test(reqUrl) || /\.json$/.test(reqUrl)) {

                    } else {
                        reqUrl = '/api/' + reqUrl;
                    }

                    configParam.url = reqUrl;
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
    }]);
})();