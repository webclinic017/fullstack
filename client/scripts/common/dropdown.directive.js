;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twDropdown', twDropdown);

    function twDropdown($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
                element.hover(function () {
                    $(this).addClass('open');
                }, function () {
                    $(this).removeClass('open');
                });
            }
        }
    }
})();