;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .factory('principal', principal);

    principal.$inject = ['$q', '$http', '$timeout','account'];

    function principal($q, $http, $timeout,account) {
        var _identify = undefined;
        var _authenticated = false;
        var _apiCheckLogin = '/api/v1/check';

        return {
            isIdentityResolved: function () {
                return angular.isDefined(_identify);
            },
            isLogined: function () {
                return angular.isDefined(_identify) && _identify !== null &&
                        _identify;
            },
            isAuthenticated: function () {
                return _authenticated;
            },
            isInRole: function (role) {

                if (!_authenticated || !_identify.roles) {
                    return false;
                }
                return _identify.roles.indexOf(role) != -1;
            },
            isInAnyRole: function (roles) {
                
                if (!_authenticated || !_identify.roles) {
                    return false;
                }

                for (var i = 0; i < roles.length; i++) {
                    
                    if (this.isInRole(roles[i])) {
                        return true;
                    }
                }
            },
            authenticate: function (identity) {
                _identify = identity;
                _authenticated = identity != null;
            },
            identity: function (force) {
                var deferred = $q.defer();

                if (force) {
                    _identify = undefined;
                }

                // $http.get(_apiCheckLogin).then(function (data) {
                account.checkLogined().then(function(data){
                    if (data) {
                        //_authenticated = true;
                        _identify = true;
                    } else {
                        _identify = false;
                    }
                    deferred.resolve(_identify);
                }, function () {
                    _identify = null;
                    _authenticated = false;
                    deferred.resolve(_identify);
                });
                return deferred.promise;
            }
        }
    }
})();

(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .factory('authorization', authorization);

    authorization.$inject = ['$rootScope', '$state', 'principal'];

    function authorization($rootScope, $state, principal) {
        var service = {
            authorize: authorize
        };
        return service;

        function authorize() {
            return principal.identity().then(function (data) {
                var isLogined = principal.isLogined();

                if (!isLogined) {
                    return false;
                } else {
                    return true;
                }
            });
        }
    }
})();