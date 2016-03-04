;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twLineChart', twLineChart);

    twLineChart.$inject = ['master']

    function twLineChart(master) {
        var options = {};

        return {
            restrict: 'A',
            replace: true,
            template: '<div class="line_chart"><img src="/ngsrc/loading.gif"></div>',
            link: function (scope, element, attrs) {
                var type = attrs.type;
                
                // 高手列表
                if (type === 'masterList') {
                }
            }
        }
    }
})();