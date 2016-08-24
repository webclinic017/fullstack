;
(function () {
	'use strict';

	angular.module('fullstackApp')
		.controller('TraderSummaryController', TraderSummaryController);

	TraderSummaryController.$inject = ['$scope', '$location', '$state', 'trader', '$timeout'];

	function TraderSummaryController($scope, $location, $state, trader, $timeout) {
		$scope.summary = {};
		var usercode;
		var absUrl = $location.absUrl();
		var regUsercode = /trader\/(\d+)\/#/;

		usercode = absUrl.match(regUsercode)[1];

		getMasterSummary(usercode);
		getMasterProfitLine(usercode);
		getMasterBarChart(usercode);
//--------------------------高手主页4.0重构--begin----------------------------------------

	/*----------------------------柱状图图-----------------------------*/
		rendColumnChart();
		function rendColumnChart() {
			/*调接口获取数据*/
			$scope.testdata = [
				{
					year: "2016年",
					data: [6, 1, -6, 3, 4, -5, 6, -2, 5, 4, 2, -4]
				},
				{
					year: "2015年",
					data: [-1, 1, -6, 3, 4, 0, 6, 0, 5, 4, 2, -4]
				},
				{
					year: "2014年",
					data: [-5, 1, -6, 3, 4, -5, 6, -2, 5, 4, 2, -4]
				}
			];

			/*让下拉框默认选中*/
			$scope.selected = $scope.testdata[0];

			$timeout(function () {
				$scope.$broadcast('rendColumnData', $scope.testdata[0].data);
			}, 1000);

			$scope.changeYear = function (year) {
				console.log(year);
				$scope.$broadcast('rendColumnData', year.data);
			};

			/*渲染表格*/
			var data = $scope.testdata;
		}

		function getYearAverage() {
			/*请求数据*/
			//todo 接口服务待加入
			trader.getYearAverage(usercode).then(function (data) {
				if (data.is_succ) {
					$scope.YearAverage = data.data;
				}

				//绘制柱形图

			});
		}

		/*----------------------------区域图-----------------------------*/
		//function getAreaSummary(usercode) {
		//    trader.getAreaData(usercode).then(function(data){
		//
		//    });
		//}

		$scope.areaData = [
			0.7921, 0.7922, 0.7934, 0.7918, 0.7915, 0.787, 0.7861, 0.7861, 0.7853, 0.7867,
			0.7827, 0.7834, 0.7766, 0.7751, 0.7739, 0.7767, 0.7802, 0.7788, 0.7828, 0.7816,
			0.7829, 0.783, 0.7829, 0.7781, 0.7811, 0.7831, 0.7826, 0.7855, 0.7855, 0.7845
		];

		$timeout(function () {
			$scope.$broadcast('rendAreaData', $scope.areaData);
		}, 1000);

		/*-----------------------BarChart------------------*/
		$scope.barData = [{
			name: 'John',
			data: [5]
		}, {
			name: 'Jane',
			data: [2]
		}, {
			name: 'Joe',
			data: [3]
		}, {
			name: 'mali',
			data: [6]
		}];

		$timeout(function () {
			$scope.$broadcast('rendBarData', $scope.barData);
		}, 1000);

		$scope.changeYearType = function () {
			$scope.$broadcast('rendBarData', $scope.barData);
			$scope.$broadcast('rendScaleBars', $scope.bars);
			console.log($scope.bars);
		};

//---------------------------------end------------------------------------------
		function getMasterSummary(usercode) {
			trader.getMasterSummary(usercode).then(function (data) {
				// console.info(data);
				if (data.is_succ) {
					$scope.summary = data.data;
				}

				// 饼图绘制
				broadcastPieData();

				function broadcastPieData() {
					var profitSum = [
						['盈利订单', $scope.summary.order_count.profit_order],
						['亏损订单', $scope.summary.order_count.loss_order]
					];
					// console.info(profitSum);
					$scope.$broadcast('paintPieChart', profitSum);
				}
			});
		}

		function getMasterProfitLine(usercode) {
			trader.getMasterProfitLine(usercode).then(function (data) {
				// console.info(data);
				$scope.$broadcast('paintLineChart', data.data);
			});
		}

		function getMasterBarChart(usercode) {
			trader.getMasterBarChart(usercode).then(function (data) {
				// console.info(data);
				$scope.bars = [];
				var symbolBar = {};

				$scope.$broadcast('hideLoadingImg');

				if (data.data_num.length <= 0) return;

				angular.forEach(data.data, function (data, index, array) {
					symbolBar[index] = {};
					symbolBar[index]["symbol_mod"] = index;
					symbolBar[index]["scale"] = data;
				});

				angular.forEach(data.data_num, function (data, index, array) {
					symbolBar[index]["number"] = data;
				});

				angular.forEach(symbolBar, function (data, index, array) {
					$scope.bars.push(data);
				});

				$timeout(function () {
					$scope.$broadcast('rendScaleBars', $scope.bars);
				});
			});
		}
	}
})();