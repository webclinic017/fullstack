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
        if($scope.personal.has_master){
            $scope.ban = {
                msg: $scope.lang.text("tigerWitID.settings.tip10")
            }
        } else if($scope.personal.master_apply_status){
            $scope.ban = {
                msg: $scope.lang.text("tigerWitID.settings.tip10_1")
            }
        } else {
            $scope.ban = undefined
        }
        
        $scope.$on('uploadAvatarStart', function () {
            $scope.$apply(function () {
                $scope.avatar.status = 1;
            });
        });
        $scope.$on('uploadAvatarSuccess', function (e, data) {
            $scope.$apply(function () {
                // $scope.personal.addAvatarImg = data;
                $timeout(function(){
                    $scope.avatar.status = 2;
                    changeAvatar($scope.personal);
                }, 2000)
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