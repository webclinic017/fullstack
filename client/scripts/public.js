;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('publicHttp', publicHttp);

    publicHttp.$inject = ['$http', '$state'];

    function publicHttp($http, $state) {
        var service = {
            dealPublicRequest: dealPublicRequest
        };
        return service;

        function dealPublicRequest ($url, $method, $params) {
            if ($method.toUpperCase() === 'GET') {
                return $http.get($url, {
                    params: $params
                }).then(function (data) {
                    console.log(data);
                    if (data.code === 1000105) {
                        // token 权限错误
                        $state.go('account.subpage', {subpage: 'login'});
                    } else {
                        return data;
                    }
                }, function (error) {
                    console.log(error);
                    layer.msg("服务器异常");
                    $state.go('account.subpage', {subpage: 'login'});
                });
            }

            if ($method.toUpperCase() === 'POST') {
                return $http.post($url, $params).then(function (data) {
                    // console.log(data);
                    return data;
                }, function (error) {
                    console.log(error);
                    layer.msg("服务器异常");
                    $state.go('account.subpage', {subpage: 'login'});
                });
            }
        }
    }
})();
