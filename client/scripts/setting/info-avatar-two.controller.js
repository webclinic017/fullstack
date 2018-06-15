;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('SettingInfoAvatarTwoController', SettingInfoAvatarTwoController);

        SettingInfoAvatarTwoController.$inject = ['$scope', '$timeout', 'account', '$layer'];

    function SettingInfoAvatarTwoController($scope, $timeout, account, $layer) {
        $scope.selectHeadImg = {
            avatar: undefined,  // 准备提交的base64头像
            // msg: ""    // 报错信息
            
        }  
        // 显示报错信息 
        $scope.backErr = {
            system: {
                show: false,
                msg: ''
            }
        };
        $scope.$watch('personal.has_master', function(){
            if($scope.personal.has_master){
                $scope.ban = {
                    msg: '您已是高手，不能再修改头像'
                }
            } else {
                $scope.ban = undefined
            }
        })
        $scope.$watch("selectHeadImg.avatar", function(n) {
            if (n) {
                $scope.showSubmit = false    // 是否显示提交按钮
            } else {
                $scope.showSubmit = true
            }
        })
        $scope.clickable = true;  // 显示提交中。。。
        $scope.submitAvatar = function() {
            $scope.clickable = false;
            if(!$scope.selectHeadImg.avatar){
                return
            }
            account.setAvatar($scope.selectHeadImg.avatar).then(function(data){
                if (data.is_succ) {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = "提交成功";
                    $timeout(function(){
                        $scope.selectHeadImg.avatar = undefined;
                        changeAvatar($scope.personal);
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 2000)
                }else {
                    $scope.backErr.system.show = true;
                    $scope.backErr.system.msg = data.message;

                    $timeout(function () {
                        $scope.backErr.system.show = false;
                        $scope.backErr.system.msg = '';
                    }, 3000);
                }
                $scope.clickable = true;
            })
        } 
        function changeAvatar(personal) {
            var mdAvatar = personal.mdAvatar.replace(/\?timestamp=.*/g,'');
            var lgAvatar = personal.lgAvatar.replace(/\?timestamp=.*/g,'');
            personal.mdAvatar = mdAvatar + '?timestamp=' + (+new Date());
            personal.lgAvatar = lgAvatar + '?timestamp=' + (+new Date());

            $scope.$emit('refresh_personal_cookies_info', 'login');
        }
    }
})();