;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadAvatar', ['api', '$cookies', twUploadAvatar]);

    function twUploadAvatar(api, $cookies) {
        return {
            restrict: 'A',
            scope: {
                filename: '='
            },
            link: function (scope, element, attrs) {
                var inputEle = element.find('input'),
                    imgEle = element.find('img'),
                    filename; // 头像路径
                var token = $cookies["token"] || '';
                var uploadUrl = api.account.uploadAvatarForm + "?token=" + token;

                // 首先赋值然后监听！！    
                filename = scope.filename;
                scope.$watch('filename', function (newVal, oldVal) {

                    if (newVal === oldVal) {
                        return;
                    }

                    if (typeof newVal !== 'undefined') {
                        filename = scope.filename;
                    }
                });

                inputEle.fileupload({
                    url: uploadUrl,
                    done: function (e) {
                        imgEle.attr('src', filename + '?timestamp=' + e.timeStamp);
                        scope.$emit('uploadAvatarSuccess');
                    },
                    fail: function (e, data) {
                        scope.$emit('uploadAvatarFail');

                    },
                    send: function () {
                        scope.$emit('uploadAvatarStart');
                    }
                });
            }
        };
    }
})();