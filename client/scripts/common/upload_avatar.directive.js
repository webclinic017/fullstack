;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadAvatar', twUploadAvatar);

    function twUploadAvatar() {
        return {
            restrict: 'A',
            scope: {
                filename: '='
            },
            link: function (scope, element, attrs) {
                var api = '/action/public/v3/user_upload',
                    inputEle = element.find('input'),
                    imgEle = element.find('img'),
                    filename; // 头像路径

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
                    url: api,
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