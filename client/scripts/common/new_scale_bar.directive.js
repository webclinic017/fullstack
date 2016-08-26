;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('newScaleBar', newScaleBar);

    newScaleBar.$inject = [];

    function newScaleBar() {
        return {
            restrict: 'A',
            replace: true,
            template: '<div class="scale_bar">'
                        + '<span class="scale_bar__info">'
                        + '</span>'
                        + '<span class="scale_bar__item"></span>'
                      + '</div>',
            link: function (scope, element, attrs) {
                var el = {
                    info: element.find(".scale_bar__info"),
                    item: element.find(".scale_bar__item")
                }
                var type = attrs.type;
                // console.info(type);

                if (type === 'masterDetail' || type === 'investDetail') {

                    el.item.width(scope.bar.scale + '%');
                    el.info.html(scope.bar.number +' 笔 &nbsp;&nbsp;' + scope.bar.scale + '%');
                }

                if (type === 'spaceSidebar') {
                    scope.$watch('personal.infoDegree', function (newVal, oldVal, scope) {
                        if (newVal === oldVal) return;
                        // console.info(scope.personal);
                        el.item.width(scope.personal.infoDegree + '%');
                        el.info.html(scope.personal.infoDegree + '%');
                    });
                }
            }
        }
    }
})();