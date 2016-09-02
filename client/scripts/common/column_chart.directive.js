;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twColumnChart', twColumnChart);

    twColumnChart.$inject = ['config'];

    function twColumnChart(config) {
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
                        color: '#101010'
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
                    width: 2,
                    value: 0,  //y轴显示位置，一个标记为1
                    zIndex: 5
                }],
                plotBands: [{ //彩色带横跨绘图区，标志着轴间隔。
                    color: '#fdf5f5',
                    from: 0,
                    to: 1000
                },{ //彩色带横跨绘图区，标志着轴间隔。
                    color: '#f9fbf4',
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
                },
                borderColor:'#188afa'
            },
            series: [{
                color: '#f23244', /*正值的颜色*/
                negativeColor: '#61cb28',//负值的颜色
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
                    options.series[0].data = data;
                    element.highcharts(options);
                });
                scope.$on('hideColumnData', function (event, data) {
                    element.highcharts(noData);
                });
            }
        }
    }
})();