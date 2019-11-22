;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twLineChart', twLineChart);

    twLineChart.$inject = ['lang', '$filter', 'fun'];

    function twLineChart(lang, $filter, fun) {
        var options = {
            chart: {
                type: 'line',
                // spacing: 10,
                backgroundColor: 'rgba(0,0,0,0)'
            },

            title: {
                text: ''
            },

            legend: {
                enabled: false
            },

            xAxis: {
                reversed: lang.isAr(),
                lineColor: '#777',
                tickColor: '#777',
                labels: {
                    style: {
                        color: '#999'
                    }
                },
                type: 'datetime',
                dateTimeLabelFormats: {
                    second: '%H:%M:%S',
                    minute: '%e. %b %H:%M',
                    hour: '%b/%e %H:%M',
                    day: '%Y-%m-%d',
                    week: '%e. %b',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },

            yAxis: {
                title: {
                    text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）',
                    style: {
                        color: '#999'
                    }
                },
                opposite: lang.isAr(),
                gridLineColor: '#777',
                labels: {
                    style: {
                        color: '#999'
                    }
                }
            },
            tooltip: {
                useHTML: true,
                reversed: lang.isAr(),
            },


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            plotOptions: {
                series: {
                    lineWidth: 2,
                    marker: {
                        lineColor: null,
                        radius: 0,
                        states: {
                            hover: {
                                radiusPlus: 0,
                                lineWidthPlus: 0
                            }
                        }
                    },
                    states: {
                        hover: {
                            lineWidthPlus: 0
                        }
                    }
                }
            },
            series: [{
                color: '#5d9cec',
                data: []
            }]
        };

        return {
            restrict: 'A',
            replace: true,
            template: '<div class="line_chart"><img src="/ngsrc/loading.gif"></div>',
            link: function (scope, element, attrs) {
                var type = attrs.type;
                
                // 高手列表
                if (type === 'masterList') {
                    options.series[0].data = [];
                    angular.extend(options, {

                        xAxis: {
                            reversed: lang.isAr(),
                            lineColor: '#777',
                            tickColor: '#777',
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                second: '%H:%M:%S',
                                minute: '%e. %b %H:%M',
                                hour: '%b/%e %H:%M',
                                day: '%Y-%m-%d',
                                week: '%e. %b',
                                month: '%Y-%m',
                                year: '%Y'
                            },
                            labels: {
                                enabled: false
                            },
                            lineWidth: 0,
                            tickLength: 0
                        },

                        yAxis: {
                            opposite: lang.isAr(),
                            gridLineColor: '#777',
                            title: {
                                enabled: false
                            },
                            labels: {
                                enabled: false
                            },
                            gridLineWidth: 0
                        },

                        tooltip: {
                            useHTML: true,
                            reversed: lang.isAr(),
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                            formatter: function () {
                                return '<p style="color:' + this.series.color +
                                        ';"><span>'+ lang.text('tigerWitID.dataStatistics.profitRateM') +'</span></br><span>' +  this.y + '%</span></p>';
                            }
                        },
                    });

                    var line_chart = scope.rank.line_chart;
                    var data = Highcharts.map(line_chart, function (config) {
                        return {
                            x: fun.accMul(config.timestamp, 1000),
                            y: config.value * 1
                        };
                    });

                    options.series[0].data = data;
                    element.highcharts(options);
                }

                // 高手主页
                if (type === 'masterDetail') {
                    angular.extend(options, {
                        xAxis: {
                            reversed: lang.isAr(),
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                second: '%H:%M:%S',
                                minute: '%e. %b %H:%M',
                                hour: '%b/%e %H:%M',
                                day: '%Y-%m-%d',
                                week: '%e. %b',
                                month: '%Y-%m',
                                year: '%Y'
                            },
                            lineColor: '#f0f0f0',
                            tickColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            }
                        },

                        yAxis: {
                            title: {
                                text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）',
                                style: {
                                    color: '#999'
                                }
                            },
                            opposite: lang.isAr(),
                            gridLineColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            }
                        },

                        tooltip: {
                            useHTML: true,
                            reversed: lang.isAr(),
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            formatter: function () {
                                var dateStr = $filter('date')(this.x, 'yyyy-MM-dd')

                                return '<p style="color:' + this.series.color + ';">' +
                                    dateStr + '</p><p style="color:' + this.series.color + ';"><span>' + lang.text('tigerWitID.dataStatistics.profitRateM') + 
                                    '</span><span>' + this.y + '%</span></p>';
                            }
                        },

                        plotOptions: {
                            series: {
                                lineWidth: 4,
                                marker: {
                                    lineColor: null,
                                    radius: 0,
                                    states: {
                                        hover: {
                                            radiusPlus: 0,
                                            lineWidthPlus: 0
                                        }
                                    }
                                },
                                states: {
                                    hover: {
                                        lineWidthPlus: 0
                                    }
                                }
                            }
                        }
                    });

                    scope.$on('paintLineChart', function (event, data) {

                        data = Highcharts.map(data, function (config) {
                            return {
                                x: config.timestamp * 1000,
                                y: config.value * 1
                            };
                        });

                        options.series[0].data = data;
                        element.highcharts(options);
                    });
                }

                // 个人中心
                if (type === 'investDetail') {
                    angular.extend(options, {
                        xAxis: {
                            reversed: lang.isAr(),
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                second: '%H:%M:%S',
                                minute: '%e. %b %H:%M',
                                hour: '%b/%e %H:%M',
                                day: '%Y-%m-%d',
                                week: '%e. %b',
                                month: '%Y-%m',
                                year: '%Y'
                            },
                            lineColor: '#f0f0f0',
                            tickColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            }
                        },

                        yAxis: {
                            title: {
                                text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）',
                                style: {
                                    color: '#999'
                                }
                            },
                            opposite: lang.isAr(),
                            gridLineColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            }
                        },

                        tooltip: {
                            useHTML: true,
                            reversed: lang.isAr(),
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            formatter: function () {
                                var dateStr = $filter('date')(this.x, 'yyyy-MM-dd')

                                return '<p style="color:' + this.series.color + ';">' +
                                    dateStr + '</p><p style="color:' + this.series.color + ';"><span>' + lang.text('tigerWitID.dataStatistics.profitRateM') + 
                                    '</span><span>' + this.y + '%</span></p>';
                            }
                        },

                        plotOptions: {
                            series: {
                                lineWidth: 4,
                                marker: {
                                    lineColor: null,
                                    radius: 0,
                                    states: {
                                        hover: {
                                            radiusPlus: 0,
                                            lineWidthPlus: 0
                                        }
                                    }
                                },
                                states: {
                                    hover: {
                                        lineWidthPlus: 0
                                    }
                                }
                            }
                        }
                    });

                    scope.$on('paintLineChart', function (event, data) {

                        data = Highcharts.map(data, function (config) {
                            return {
                                x: config.t * 1000,
                                y: config.v * 1
                            };
                        });

                        options.series[0].data = data;
                        element.highcharts(options);
                    });
                }
                // 高手详情
                if (type === 'masterSummaryDetail') {
                    function cutTen(that){
                        that.xAxis[0].setExtremes(
                            that.options.series[0].data[that.options.series[0].data.length - 10][0],
                            that.options.series[0].data[that.options.series[0].data.length - 1][0]
                        );
                    }
                    angular.extend(options, {
                        chart: {
                            type: 'line',
                            // spacing: 10,
                            backgroundColor: 'rgba(0,0,0,0)',
                            zoomType: 'x',
                            events: {
                                selection: function (event) {
                                    if(event.xAxis == undefined){
                                        cutTen(this)
                                        return false
                                    }
                                }
                            }
                        },
                        legend: {
                            enabled: true
                        },
                        xAxis: {
                            lineColor: '#f0f0f0',
                            tickColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                },
                            },
                            reversed: lang.isAr(),
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                second: '%H:%M:%S',
                                minute: '%e. %b %H:%M',
                                hour: '%b/%e %H:%M',
                                day: '%Y-%m-%d',
                                week: '%e. %b',
                                month: '%Y-%m',
                                year: '%Y'
                            },
                            // minTickInterval: 1000*60*60*24,
                            minRange: 1000*60*60*24*10
                        },

                        yAxis: {
                            title: {
                                text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）',
                                style: {
                                    color: '#999'
                                }
                            },
                            opposite: lang.isAr(),
                            gridLineColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            }
                        },

                        tooltip: {
                            useHTML: true,
                            reversed: lang.isAr(),
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            formatter: function () {
                                var dateStr = $filter('date')(this.x, 'yyyy-MM-dd')

                                return '<p style="color:' + this.series.color + ';">' +
                                dateStr + '</p><p style="color:' + this.series.color + ';"><span>' + this.series.name + 
                                    '</span><span>' + this.y + '%</span></p>';
                            }
                        },
                        scrollbar: {
                            enabled: true
                     
                        }
                    });

                    scope.$on('paintLineChart', function (event, data) {
                        // console.log(data)
                        // var data1 = Highcharts.map(data.average, function (config) {
                        //     return [fun.accMul(config.record_date, 1000), fun.accMul(config.profit_rate, 100)];
                        // });
                        // var data2 = Highcharts.map(data.personal, function (config) {
                        //     return [fun.accMul(config.record_date, 1000), fun.accMul(config.profit_rate, 100)];
                        // });
                        var data1 = [], data2 = [];
                        for(var i = 0; i < data.length; i++){
                            data1.push([fun.accMul(data[i].record_date, 1000), fun.accMul(data[i].average, 100)])
                            data2.push([fun.accMul(data[i].record_date, 1000), fun.accMul(data[i].personal, 100)])
                        }
                        // console.log(data1,data2)
                        options.series[0] = {
                            color: 'rgba(255, 134, 5, 1)',
                            name: lang.text('tigerWitID.master.mastersAverageReturn'),
                            data: data1
                        };
                        options.series[1] = {
                            color: 'rgba(80, 227, 194, 1)',
                            name: lang.text('tigerWitID.master.currentMasterReturn'),
                            data: data2
                        };
                        Highcharts.setOptions({
                            lang: {
                                resetZoom: lang.text('tigerWitID.reset') 
                            },
                        })
                        // console.dir(options)
                        element.highcharts(options, function(){
                            cutTen(this)
                        });
                    });
                }
            }
        }
    }
})();