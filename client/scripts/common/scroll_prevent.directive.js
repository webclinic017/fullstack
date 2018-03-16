;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twScrollPrevent', twScrollPrevent);

    function twScrollPrevent($document) {
        return {
            restrict: 'AE',
            link: function (scope, element, attrs) {
                var isFF = navigator.userAgent.toLowerCase().indexOf("firefox") >= 0;
                var ele = element[0]
                if (isFF) {
                    // ele.addEventListener('DOMMouseScroll', function (e) {
                    //     ele.scrollTop += e.detail
                    //     e.preventDefault();
                    // }, false);
                } else {
                    ele.onmousewheel = function (e) {
                        var children = element.children()
                        var contentHeight = 0;
                        children.each(function (index, child) {
                            contentHeight += jQuery(child).height()
                        })
                        if (element.height() < contentHeight) {
                            e = e || window.event;
                            ele.scrollTop -= e.wheelDelta
                            e.returnValue = false;
                        }
                    }
                }
            }
        }
    }
})();