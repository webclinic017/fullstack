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

                mejs.MediaElementDefaults.pluginPath = mejs.Utility.getScriptPath(['mediaelement-and-player', 'vendor']);
                
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