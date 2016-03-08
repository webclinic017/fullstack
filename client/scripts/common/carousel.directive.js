;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twCarousel', twCarousel);

    function twCarousel($document) {
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