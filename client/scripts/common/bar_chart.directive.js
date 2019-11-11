; (function () {
	'use strict';

	angular.module('fullstackApp').directive('twBarChart', twBarChart);

	twBarChart.$inject = ['config', 'lang'];

	function twBarChart(config, lang) {
		var noData = config.highchartNoDataOptions;
		var options = {
			colors: ['#bfe103', '#ffc601', '#fc5401', '#41b6ea', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a', '#101010', '#61cb28', '#fff230', '#37bc9b', '#AC9711', '#188afa'],
			chart: {
				type: 'bar'
			},
			title: {
				text: ''
			},
			exporting: {
				enabled: false
			},
			legend: {
				align: 'center',
				itemWidth: 100,
				// reversed: lang.isAr(),
				// rtl: lang.isAr(),
				itemHoverStyle: {
					color: '#ffdd80'
				}
			},
			xAxis: {
				// reversed: lang.isAr(),
				categories: [lang.text('tigerWitID.symbolPage.productsM')],
				labels: {
					style: {
						color: '#101010'
					},
					enabled: false
				},
				title: {
					text: ''
				},
				gridLineColor: '#fff',
				tickWidth: 0,            //设置刻度标签宽度
				lineColor: '#ffffff',    //设置坐标颜色
				lineWidth: 0             //设置坐标宽度
			},
			yAxis: {
				min: 0,
				title: {
					text: ''
				},
				// opposite: lang.isAr(),
				labels: {
					style: {
						color: '#101010'
					},
					enabled: false
				},
				gridLineColor: '#fff'
			},
			tooltip: {
				pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
				shared: false,
				// reversed: lang.isAr(),
				hideDelay: 50
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				// reversed: lang.isAr(),
				bar: {
					pointPadding: 0.2,
					borderWidth: 0,
					pointWidth: 20,
					stacking: 'percent'
				}
			},
			series: []
		};
		return {
			restrict: 'EA',
			replace: true,
			template: '<div class="column_chart direction-ltr"><img src="/ngsrc/loading.gif"></div>',
			link: function (scope, element, attrs) {
				var type = attrs.type;

				if (type == 'subBar') {
					angular.extend(options, {
						colors: ['#75b110', '#e0191c'],
						xAxis: {
							// reversed: lang.isAr(),
							categories: ['trade types'],
							labels: {
								style: {
									color: '#101010'
								},
								enabled: false
							},
							title: {
								text: ''
							},
							gridLineColor: '#fff',
							tickWidth: 0,            //设置刻度标签宽度
							lineColor: '#ffffff',    //设置坐标颜色
							lineWidth: 0             //设置坐标宽度
						},
						tooltip: {
							pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
							shared: true
						},
					});
					scope.$on('rendSubBarData', function (event, data) {
						options.series = data;
						element.highcharts(options);
					});
				} else if (type == 'masterProfitBar') {
					angular.extend(options, {
						xAxis: {
							// reversed: lang.isAr(),
							categories: ['FX', 'Crypto', 'Indices', 'Metals', 'Commodities'],
							labels: {
								enabled: false
							},
							title: {
								text: ''
							},
							gridLineColor: '#fff',
							tickWidth: 0,            //设置刻度标签宽度
							lineColor: '#ffffff',    //设置坐标颜色
							lineWidth: 0             //设置坐标宽度
						},
						legend: {
							enabled: false
						},
						tooltip: {
							pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y:.2f}</b> ({point.percentage:.0f}%)<br/>',
							shared: true
						},
					});
					scope.$on('rendBarData', function (event, data) {
						options.series = data;
						element.highcharts(options);
					});
				 } else {
					scope.$on('rendBarData', function (event, data) {
						options.series = data;
						element.highcharts(options);
					});
				}
				scope.$on('hideBarData', function (event, data) {
					element.highcharts(noData);
				});

			}
		}
	}
})();
