;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twColumnChart', twColumnChart);

    twColumnChart.$inject = ['config','whiteLabel', 'lang'];

    function twColumnChart(config, whiteLabel, lang) {
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
                categories: [lang.text('tigerWitID.january'), lang.text('tigerWitID.february'), lang.text('tigerWitID.march'), lang.text('tigerWitID.april'), lang.text('tigerWitID.may'), lang.text('tigerWitID.june'), lang.text('tigerWitID.july'), lang.text('tigerWitID.august'), lang.text('tigerWitID.september'), lang.text('tigerWitID.october'), lang.text('tigerWitID.november'), lang.text('tigerWitID.december')],
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
                    to: 1500
                },{ //彩色带横跨绘图区，标志着轴间隔。
                    color: col_color.negativeBg,
                    from: 0,
                    to: -1500
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
                name: lang.text('tigerWitID.dataStatistics.monthlyReturns'),
                formatter: function () {
                    return '<b style="color:#009dff;font-size:14px">' + this.y + '%<br>'+ lang.text('tigerWitID.dataStatistics.monthlyReturns') +'</b><br>' + this.x;
                },
                style: {
                    padding: 15
                }
            },
            series: [{
                color: lang.hostIsCn() ? col_color.positive : col_color.negative, /*正值的颜色*/
                negativeColor: lang.hostIsCn() ? col_color.negative : col_color.positive,//负值的颜色
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
                        transformedData.push(item);
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