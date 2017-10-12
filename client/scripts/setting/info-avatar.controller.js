;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoAvatarController', SettingInfoAvatarController);

    SettingInfoAvatarController.$inject = ['$scope', '$timeout', 'account'];

    function SettingInfoAvatarController($scope, $timeout, account) {
        $scope.avatar = {
            status: 0             
        };
        
        $scope.$on('uploadAvatarStart', function () {
            $scope.$apply(function () {
                $scope.avatar.status = 1;
            });
        });
        $scope.$on('uploadAvatarSuccess', function () {
            $scope.$apply(function () {
                $scope.avatar.status = 2;
                changeAvatar($scope.personal);
            });
        });
        $scope.$on('uploadAvatarFail', function () {
            $scope.$apply(function () {
                $scope.avatar.status = 3;
            });
        });

        function changeAvatar(personal) {
            var mdAvatar = personal.mdAvatar.replace(/\?timestamp=.*/g,'');
            var lgAvatar = personal.lgAvatar.replace(/\?timestamp=.*/g,'');
            personal.mdAvatar = mdAvatar + '?timestamp=' + (+new Date());
            personal.lgAvatar = lgAvatar + '?timestamp=' + (+new Date());

            $scope.$emit('refresh_personal_cookies_info', 'login');
        }
    }
})();