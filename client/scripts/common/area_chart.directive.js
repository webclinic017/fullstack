(function () {
    'use strict';

    angular.module('fullstackApp').directive('twAreaChart', twAreaChart);

    twAreaChart.$inject = [];

    function twAreaChart() {
        Highcharts.setOptions({
            lang:{
                resetZoom:'恢复缩放',
                resetZoomTitle:'恢复缩放'
            }
        });
        var options = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: ''
            },
            subtitle: {
                text: ''
            },
            xAxis: {
                type: '',
                title:{
                    text:''
                },
                tickWidth:0,        //设置刻度标签宽
                labels : {
                    style: {
                        color: '#101010'
                    },
                    enabled:false
                },
                gridLineColor: '#fff',
                lineColor:'#ffffff',//设置坐标颜色
                lineWidth:0        //设置坐标宽度
            },
            yAxis: {
                title:{
                    text:''
                },
                gridLineColor: '#fff',
                labels : {
                    style: {
                        color: '#101010'
                    },
                    enabled:false
                },
                tickWidth:0 //设置刻度标签宽
            },
            tooltip: {
                // borderColor: '#eeeeee',
                // name:'月收益率',
                // formatter: function () {
                //     return '<b style="color:#009dff;font-size:12px">选取以放大<br/>' + this.y + '</b>';
                // }
                enabled: false
            },
            exporting: {
                enabled:false
            },
            legend: {
                enabled: false
            },
            credits: {
                enabled:false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },
            series: [{
                type: 'area',
                data: []
            }]
        };
        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="column_chart"><img src="/ngsrc/loading.gif"></div>',
            link: function (scope, element, attrs) {
                var type = attrs.type;
                scope.$on('rendAreaData', function (event, data) {
                    options.series[0].data = data;
                    element.highcharts(options);
                });
            }
        }
    }
})();