;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twUploadHistoryFile', twUploadHistoryFile);

    function twUploadHistoryFile() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var api = '/action/public/v3/upload',
                    inputEle = element.find('#input'),
                    textEle = element.find('#textField');
                    
                inputEle.fileupload({
                    url: api,
                    done: function (e, data) {
                        textEle.val(data.files[0].name);
                        scope.$emit('uploadHistorySuccess', data.result);
                    },
                    fail: function (e, data) {
                        scope.$emit('uploadHistoryFail');
                    },
                    send: function () {
                        scope.$emit('uploadHistoryStart');
                    }
                });
            }
        };
    }
})();