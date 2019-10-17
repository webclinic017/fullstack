;
(function () {
    'use strict';

    angular.module('fullstackApp').directive('twLineChart', twLineChart);

    twLineChart.$inject = ['lang'];

    function twLineChart(lang) {
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
                    day: '%m/%d',
                    month: '%y/%m/%d',
                    year: '%y/%m',
                    week: '%m/%d'
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
                        title: {
                            text: ''
                        },

                        xAxis: {
                            reversed: lang.isAr(),
                            labels: {
                                enabled: false
                            },
                            lineWidth: 0,
                            tickLength: 0
                        },

                        yAxis: {
                            title: {
                                enabled: false
                            },
                            opposite: lang.isAr(),
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
                                var date = new Date(this.x);
                                var dateStr = date.getFullYear() + '/' +
                                        (date.getMonth() + 1) +'/' +
                                        (date.getDate());

                                return '<p style="color:' + this.series.color +
                                        ';"><span>'+ lang.text('tigerWitID.dataStatistics.profitRateM') +'</span></br><span>' +  this.y + '%</span></p>';
                            }
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
                        }
                    });

                    var line_chart = scope.rank.line_chart;
                    var data = Highcharts.map(line_chart, function (config) {
                        return {
                            x: config.timestamp * 1000,
                            y: config.value * 1
                        };
                    });

                    options.series[0].data = data;
                    element.highcharts(options);
                }

                // 高手主页
                if (type === 'masterDetail') {
                    angular.extend(options, {
                        title: {
                            text: ''
                        },
                        xAxis: {
                            reversed: lang.isAr(),
                            lineColor: '#f0f0f0',
                            tickColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            },
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                day: '%m/%d',
                                month: '%y/%m/%d',
                                year: '%y/%m',
                                week: '%m/%d'
                            }
                        },

                        yAxis: {
                            title: {
                                text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）'
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
                                var date = new Date(this.x);
                                var dateStr = date.getFullYear() + '/' +
                                        (date.getMonth() + 1) +'/' +
                                        (date.getDate());

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
                        title: {
                            text: ''
                        },
                        xAxis: {
                            reversed: lang.isAr(),
                            lineColor: '#f0f0f0',
                            tickColor: '#f0f0f0',
                            labels: {
                                style: {
                                    color: '#ccc'
                                }
                            },
                            type: 'datetime',
                            dateTimeLabelFormats: {
                                day: '%m/%d',
                                month: '%y/%m/%d',
                                year: '%y/%m',
                                week: '%m/%d'
                            }
                        },

                        yAxis: {
                            title: {
                                text: lang.text('tigerWitID.dataStatistics.profitRate') + '（%）'
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
                                var date = new Date(this.x);
                                var dateStr = date.getFullYear() + '/' +
                                        (date.getMonth() + 1) +'/' +
                                        (date.getDate());

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
            }
        }
    }
})();