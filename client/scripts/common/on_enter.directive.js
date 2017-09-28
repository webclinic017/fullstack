;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('onEnter', onEnter);
    function onEnter($document) {
        return {
            restrict: 'A',
            scope: {
                onEnter: '&onEnter'
            },
            link: function (scope, element, attrs) {
                element.on('keydown', function (e) {
                    if (e.keyCode == 13) {
                        scope.onEnter();
                    }
                });
            }
        }
    }
})();