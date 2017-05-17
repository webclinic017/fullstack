;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('publicHttp', publicHttp);

    publicHttp.$inject = ['$http', '$state', '$cookies', '$cookieStore', '$window'];

    function publicHttp($http, $state, $cookies, $cookieStore, $window) {
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
                    if (data.code === 100014 || data.code === 100010) {
                        // token 权限错误
                        $window.location.href='/space/#/account/login';
                        $window.location.reload(true);
                    } else {
                        return data;
                    }
                }, function (error) {
                    errFunc(error);
                });
            }

            if ($method.toUpperCase() === 'POST') {
                // console.log($params);
                return $http.post($url, $params).then(function (data) {
                    // console.log(data);
                    if (data.code === 100014 || data.code === 100010) {
                        // token 权限错误
                        $window.location.href='/space/#/account/login';
                        $window.location.reload(true);
                    } else {
                        return data;
                    }
                }, function (error) {
                    errFunc(error);
                });
            }

            if ($method.toUpperCase() === 'PUT') {
                // console.log($params);
                return $http.put($url, $params).then(function (data) {
                    // console.log(data);
                    if (data.code === 100014 || data.code === 100010) {
                        // token 权限错误
                        $window.location.href='/space/#/account/login';
                        $window.location.reload(true);
                    } else {
                        return data;
                    }
                }, function (error) {
                    errFunc(error);
                });
            }
        }

        function errFunc (error) {
            console.log(error);
            layer.msg("服务器异常");
            $window.location.href='/space/#/account/login';
            $window.location.reload(true);
        }
    }
})();
