;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twHighestMatch', twHighestMatch);

    twHighestMatch.$inject = ['$timeout'];

    function twHighestMatch($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var $elem = element.children('li').children('div');
                var innerHeight = 300;
                $elem.each(function () {
                
                    // $timeout(function () {
                    //     console.log($(this).innerHeight())
                    // }, 300)
                    // console.log($(this).height())
                    if ($(this).innerHeight() > innerHeight) {
                        innerHeight = $(this).innerHeight();
                    }
                });
                // console.log(height)
                $elem.innerHeight(innerHeight);
                element.removeClass('none');
            }
        }
    }
})();