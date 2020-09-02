;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twNavbar', twNavbar);

    twNavbar.$inject = ['$window', '$cookies', 'fun'];

    function twNavbar($window, $cookies, fun) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var pathname = fun.getPathName();
                var url = pathname + $window.location.hash;   // 当前url
                var triggers = element.find('a[data-navbar-trigger]');  // 所有菜单
                triggers.each(function () {
                    var trigger = $(this);
                    var level = parseInt(trigger.attr('data-navbar-level'), 10) || 1;
                    var parent = trigger.parent('.h2').parent('li');
                    var href = trigger.attr('href');
                    // TODO教育类导航待优化
                    if (href === url) {
                        parent.addClass('active');
                        // 第一级导航
                        if (level === 1) {

                        } else if (level === 2) { // 第二级导航
                            parent = parent.parent('ul').parent('li');
                            parent.addClass('active');
                        } else if (level === 3) {  // 第三级导航

                        }
                    } else {
                        // parent.removeClass('active');
                    }
                })
                // triggers.each(function () {
                //     var trigger = $(this);
                //     // 该导航项包含几级，默认情况只有一级导航
                //     var level = parseInt(trigger.attr('data-navbar-level'), 10) || 1;
                //     var defaultNav = trigger.attr('data-default');
                //     var href = trigger.attr('href');
                //     var parent = trigger.parent('.h2').parent('li');
                //     var tmpUrl = url;
                //     if(defaultNav) {
                //         parent.removeClass('active');
                //         defaultNav = defaultNav.split(',');
                //         for(var i = 0; i < defaultNav.length; i++){
                //             if(url.slice(0, url.lastIndexOf('/')) == defaultNav[i]){
                //                 parent.addClass('active');
                //                 break
                //             }
                //         }
                //     } else {
                //         if (level === 1) {
                //             // 只有一级导航


                //         } else if (level === 2) {
                //             // 该导航项包含二级导航
                //             tmpUrl = url.slice(0, url.lastIndexOf('/'));
                //             href = href.slice(0, href.lastIndexOf('/'));
                //         } else if (level === 3) {
                //             // 包含三级导航
                //         }

                //         if (tmpUrl === href) {
                //             parent.addClass('active');
                //         }
                //          else {
                //             parent.removeClass('active');
                //         }
                //     }


                // });
            }
        };
    }
})();