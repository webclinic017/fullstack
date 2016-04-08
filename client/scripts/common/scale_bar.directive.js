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
                    el.item.width('88%');
                    el.info.html('88%');
                }
            }
        }
    }
})();