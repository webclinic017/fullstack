;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('publicHttp', publicHttp);

    publicHttp.$inject = ['$http', '$rootScope', '$state', '$cookies', '$cookieStore', '$window', 'lang', '$location'];

    function publicHttp($http, $rootScope, $state, $cookies, $cookieStore, $window, lang, $location) {
        var service = {
            dealPublicRequest: dealPublicRequest
        };
        return service;

        function dealPublicRequest ($url, $method, $params) {
            $params = $params ? $params : {};
            var token = $cookies["token"] || '';
            $url = $url+"?token="+token;
            
            if ($method.toUpperCase() === 'GET') {
                return $http.get($url, {
                    params: $params
                }).then(function (data) {
                    // console.log(data);
                    return checkTokenCode(data);
                }, function (error) {
                    errFunc(error);
                });
            }

            if ($method.toUpperCase() === 'POST') {
                // console.log($params);
                return $http.post($url, $params).then(function (data) {
                    // console.log(data);
                    return checkTokenCode(data);
                }, function (error) {
                    errFunc(error);
                });
            }

            if ($method.toUpperCase() === 'PUT') {
                // console.log($params);
                return $http.put($url, $params).then(function (data) {
                    // console.log(data);
                    return checkTokenCode(data);
                }, function (error) {
                    errFunc(error);
                });
            }
        }

        function errFunc (error) {
            console.log(error);
            console.log("服务器异常");
            // layer.msg("服务器异常");
            // $window.location.href='/space/#/account/login';
        }

        // 检查返回的token code确定是不是要重新登陆
        function checkTokenCode (data) {
            // 100100,  // 令牌错误
            // 100101,  // 令牌已被列入黑名单   
            // 100102,  // 令牌过期    
            // 100103,  // 令牌验证失败  
            // 100104,  // 令牌未定义
            if (data.code >= 100100 && data.code <= 100199) {
                var path, u;
                if($window.location.host.indexOf('ibonline') != -1){
                    path = '/payment';
                    u='/payment/login';
                }
                else if($window.location.host.indexOf('dp') != -1){
                    path = '/payment';
                    u='/payment/login';
                }
                else {
                    // $state.go('account.subpage', {params: 'login'});
                    path = '/';
                    u='/space/#/account/login';
                    $rootScope.personalCookiesInfo.userCode = undefined;
                }
                $rootScope.writeCookie({nameKey: 'token', nameValue: '', expires: -1, path: path});
                $rootScope.writeCookie({nameKey: 'user_code', nameValue: '', expires: -1, path: path});
                $rootScope.writeCookie({nameKey: 'username', nameValue: '', expires: -1, path: path});
                $rootScope.writeCookie({nameKey: 'username_en', nameValue: '', expires: -1, path: path});
                $window.location.href=u;
                
            } else {
                return data;
            }
        }
    }
})();
