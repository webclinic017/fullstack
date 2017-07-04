;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twMedia', twMedia);

    function twMedia($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var type = attrs.type;
                // flash 文件放在同域下，跨域播放有问题
                if (location.hostname === "www.tigerwit.com") {
                    mejs.MediaElementDefaults.pluginPath = "https://www.tigerwit.com/scripts/"
                } else if (location.hostname === "demo.tigerwit.com") {
                    mejs.MediaElementDefaults.pluginPath = "https://demo.tigerwit.com/scripts/"
                } else {
                    mejs.MediaElementDefaults.pluginPath = mejs.Utility.getScriptPath(['mediaelement-and-player', 'vendor']);
                }
                
                mejs.MediaElementDefaults.flashScriptAccess = 'always';
                
                if (type === 'studyVideo') {
                    
                    scope.$watch(scope.modal, function (scope, oldVal, newVal) {

                        if (newVal) {
                            element.mediaelementplayer();
                        }
                    });
                }else {
                    element.mediaelementplayer();
                }
                
            }
        };
    }
})();