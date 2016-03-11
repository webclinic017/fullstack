;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twScaleBar', twScaleBar);

    twScaleBar.$inject = [];

    function twScaleBar() {
        return {
            restrict: 'A',
            replace: true,
            template: '<div class="scale_bar">'
                        + '<span class="scale_bar__info">'
                            + '{{ bar.number }} 笔 &nbsp;&nbsp;{{ bar.scale }}%'
                        + '</span>'
                        + '<span class="scale_bar__item"></span>'
                      + '</div>',
            link: function (scope, element, attrs) {
                // console.info(scope.bar);
                scope.bar.scale = (scope.bar.number/scope.bar.total_num*100).toFixed(2);

                var $el = element.find(".scale_bar__item");

                $el.width(scope.bar.scale + '%');
            }
        }
    }
})();