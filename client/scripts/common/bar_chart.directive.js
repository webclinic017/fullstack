;(function () {
	'use strict';

	angular.module('fullstackApp').directive('twBarChart', twBarChart);

	twBarChart.$inject = [];

	function twBarChart() {
		var options = {
			colors: ['#bfe103', '#ffc601', '#fc5401', '#41b6ea', '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a'],
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
				itemDistance: 80,
				align: 'center',
				labelFormatter: function () {
					return this.name + ' (点击以隐藏/显示)';
				}
			},
			xAxis: {
				categories: ['交易品种:'],
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
				shared: true
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				reversed: true,
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
			template: '<div class="column_chart"><img src="/ngsrc/loading.gif"></div>',
			link: function (scope, element, attrs) {
				var type = attrs.type;

				if (type == 'subBar') {
					angular.extend(options, {
						colors: ['#75b110', '#e0191c'],
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
							enabled: false
						},
						xAxis: {
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
						yAxis: {
							min: 0,
							title: {
								text: ''
							},
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
							shared: true
						},
						credits: {
							enabled: false
						},
						plotOptions: {
							reversed: true,
							bar: {
								pointPadding: 0.2,
								borderWidth: 0,
								pointWidth: 20,
								stacking: 'percent'
							}
						},
						series: []
					});
					scope.$on('rendSubBarData', function (event, data) {
						options.series = data;
						element.highcharts(options);
					});
				} else {
					scope.$on('rendBarData', function (event, data) {
						options.series = data;
						element.highcharts(options);
					});
				}
			}
		}
	}
})();
