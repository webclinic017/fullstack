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
                element.mediaelementplayer();
            }
        };
    }
})();