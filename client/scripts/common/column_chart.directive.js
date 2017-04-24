;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twColumnChart', twColumnChart);

    twColumnChart.$inject = ['config','whiteLabel'];

    function twColumnChart(config,whiteLabel) {
        var col_color = whiteLabel.columnChart;
        var noData = config.highchartNoDataOptions;
        var options = {
            chart: {
                type: 'column',
                animation: false
            },
            title: {
                text: ''
            },
            /*X轴设置*/
            xAxis: {
                categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                lineColor: '#eee',
                tickColor: '#eee',
                labels: {
                    style: {
                        color: '#ccc'
                    }
                },
                plotLines: [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 0.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 1.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 2.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 3.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 4.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 5.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 6.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 7.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 8.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 9.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                },{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 5,
                    value: 10.5,  //x轴显示位置，一个标记为1
                    zIndex: 5
                }]
            },
            yAxis: {
                title: {
                    text: ''
                },
                gridLineWidth: 0,
                gridLineColor: '#fff',
                labels: {
                    style: {
                        color: '#101010'
                    },
                    formatter: function () {
                        var strVal = this.value + '';
                        if (strVal.indexOf('.') == -1) {
                            return strVal + '.00';
                        } else {
                            var arr = strVal.split('.');
                            if (arr[1].length == 2) {
                                return strVal;
                            } else {
                                return strVal + '0';
                            }
                        }
                    }
                },
                plotLines: [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
                    color: '#fff',
                    dashStyle: 'solid', //Dash,Dot,Solid,默认Solid
                    width: 0.5, // X中轴宽度,过大可能会遮挡真实数据
                    value: -0.5,  //y轴显示位置，一个标记为1
                    zIndex: 0
                }],
                plotBands: [{ //彩色带横跨绘图区，标志着轴间隔。
                    color: col_color.positiveBg,
                    from: 0,
                    to: 1000
                },{ //彩色带横跨绘图区，标志着轴间隔。
                    color: col_color.negativeBg,
                    from: 0,
                    to: -1000
                }]
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            Legend: {
                enabled: false,
                name: ''
            },
            tooltip: {
                name: '月收益率',
                formatter: function () {
                    return '<b style="color:#009dff;font-size:14px">' + this.y + '%<br>月收益率</b><br>' + this.x;
                },
                style: {
                    padding: 15
                }
            },
            series: [{
                color: col_color.positive, /*正值的颜色*/
                negativeColor: col_color.negative,//负值的颜色
                pointPadding: 0, //数据点之间的距离值
                groupPadding: 0, //分组之间的距离值
                borderWidth: 0,
                shadow: false,
                pointWidth: 74,//柱子距离值
                data: [],
                showInLegend: false
            }]
        };

        return {
            restrict: 'EA',
            replace: true,
            template: '<div class="column_chart"><img src="/ngsrc/loading.gif"></div>',
            link: function (scope, element, attrs) {
                var type = attrs.type;

                scope.$on('rendColumnData', function (event, data) {
                    var transformedData = [];
                    angular.forEach(data,function(item,index){
                        transformedData.push(parseInt(item));
                    });
                    options.series[0].data = transformedData;
                    element.highcharts(options);
                });
                scope.$on('hideColumnData', function (event, data) {
                    element.highcharts(noData);
                });
            }
        }
    }
})();