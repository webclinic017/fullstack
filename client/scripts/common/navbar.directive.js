;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twNavbar', twNavbar);

    twNavbar.$inject = ['$window'];

    function twNavbar($window) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var url = $window.location.pathname + $window.location.hash;
                var triggers = element.find('a[data-navbar-trigger]');
                
                triggers.each(function () {
                    var trigger = $(this);
                    var level = parseInt(trigger.attr('data-navbar-level'), 10);
                    var href = trigger.attr('href');
                    var parent = trigger.parent('li');
                    var tmpUrl = url;
                    
                    if (level === 1) {
                        tmpUrl = url.slice(0, url.lastIndexOf('/'));
                        href = href.slice(0, href.lastIndexOf('/'));
                    }

                    if (tmpUrl === href) {
                        parent.addClass('active');
                    } else {
                        parent.removeClass('active');
                    }
                });
            }
        };
    }
})();