;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twPieChart', twPieChart);

    twPieChart.$inject = ['whiteLabel'];    

    function twPieChart(whiteLabel) {
        var col_color = whiteLabel.pieChart;
        var options = {
            chart: {
                type: 'pie',
                //spacing: 10,
                backgroundColor: 'rgba(0,0,0,0)'
            },

            title: {
                text: ''
            },

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            plotOptions: {
                pie: {
                    shadow: false,
                    cursor: 'pointer',
                    center: ['50%', '50%'],
                    borderWidth: 0,
                    states: {
                        hover: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: false
                    }
                }
            },

            tooltip: {
                enabled: false
            },

            series: [{
                data: []
            }]
        };

        return {
            restrict: 'A',
            replace: true,
            template: '<div class="pie_chart"><img src="/ngsrc/loading.gif"></div>',
            link: function (scope, element, attrs) {
                var $el = $(element);
                var type = attrs.pieType;

                if (type === 'master' || type === 'space') {
                    
                    angular.extend(options, {
                        tooltip: {
                            useHTML: true,
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            // pointFormat: '<b>{point.percentage:.2f}%</b>'
                            pointFormat: '<b>{point.y}</b>'
                        },

                        colors: col_color.colors,

                        legend: {
                            enabled: false
                        },

                        plotOptions: {
                            pie: {
                                allowPointSelect: false,
                                shadow: false,
                                center: ['50%', '50%'],
                                borderWidth: 2,
                                states: {
                                    hover: {
                                        enabled: false
                                    }
                                },
                                dataLabels: {
                                    enabled: false
                                }
                            }
                        },

                        series: [{
                            type: 'pie',
                            innerSize: '80%',
                            data: []
                        }]
                    });

                    scope.$on('paintPieChart', function (event, data) {

                        options.series[0].data = data;
                        $el.highcharts(options);
                    });
                }
            }    
        }
    }
})();