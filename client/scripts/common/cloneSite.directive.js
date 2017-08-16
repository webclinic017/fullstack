/**
 * 用于百度克隆投放网站
 * 隐藏指令元素
 */
;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twCloneSite', twCloneSite);

    function twCloneSite() {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var hideHost = 'www.tigerwit.co.uk',
                    showHost = 'www.tigerwit.com__demo.tigerwit.com__w.tigerwit.com__w.dev.tigerwit.com',
                    currentHost = window.location.hostname;
                    // console.log('=-----hostname----=', currentHost);
                if (hideHost.indexOf(currentHost) != -1) {
                    element.hide();
                }
                else if (showHost.indexOf(currentHost) != -1) {
                    element.show();
                }
            }
        }
    }
})();