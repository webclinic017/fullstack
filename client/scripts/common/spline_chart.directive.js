;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twSplineChart', twSplineChart);

    twSplineChart.$inject = [];

    function twSplineChart() {
        var options = {
                chart: {
                    type: 'spline',
                    backgroundColor: 'transparent',
                    height: 300
                },
                title: {
                    text: ''
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: false
                },
                xAxis: {
                    categories: [],
                    tickmarkPlacement: 'on',
                    title: {
                        enabled: false
                    }
                },
                yAxis: {
                    title: {
                        text: ''
                    },
                    visible: true,
                    labels: {
                        formatter: function () {
                            return this.value;
                        }
                    }
                },
                tooltip: {
                    split: true,
                    valueSuffix: ''
                },
                series: []
            };

        return {
            restrict: 'A',
            replace: true,
            scope: {
                bindChartOptions: '='
            },
            template: '<div></div>',
            link: function (scope, element, attrs) {

                scope.$watch('bindChartOptions', function (newVal, oldVal) {
                    if (newVal) {
                        // console.log(newVal);
                        options.xAxis.categories = newVal.xOptions;
                        options.series = newVal.dataOptions;

                        element.highcharts(options);
                    }
                });
                
            }
        }
    }
})();