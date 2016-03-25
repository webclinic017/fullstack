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
            var mdAvatar = personal.mdAvatar;
            var lgAvatar = personal.lgAvatar;
            var index = mdAvatar.indexOf('?timestamp=');

            if (index !== -1) {
                mdAvatar = mdAvatar.slice(0, index);
                lgAvatar = lgAvatar.slice(0, index);
            }
            personal.mdAvatar = mdAvatar + '?timestamp=' + (+new Date());
            personal.lgAvatar = lgAvatar + '?timestamp=' + (+new Date());
        }
    }
})();