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
		rendColumnChart(usercode);

		function rendColumnChart(usercode) {
			/*调接口获取数据*/
			trader.getHistoricalRate(usercode).then(function (return_data) {
				if (return_data.error_code == 0) {
					//console.log(return_data);
					var data = return_data.data;
					/*解析数据*/
					$scope.columnData = parseData("column", data);
					//console.log($scope.columnData);
					/*让下拉框默认选中数据最后一项*/
					$scope.selected = $scope.columnData[$scope.columnData.length - 1];
					//渲染到图表
					$scope.$broadcast('rendColumnData', $scope.columnData[$scope.columnData.length - 1].data);
					//change事件
					$scope.changeYear = function (year) {
						//console.log(year);
						$scope.selected = year;
						$scope.$broadcast('rendColumnData', year.data);
					};
				}
			});
		}

		/*数据解析函数*/
		function parseData(type, data) {
			var targetArr = [];
			if (type == "column") {
				var count = 0;
				var pin = data[0].t.split("-")[0];
				data.forEach(function (item, index) {
					if (item.t.indexOf(pin) < 0) {
						count++;
						pin = item.t.split("-")[0];
					} else {
						/*往数组中新增一项*/
						targetArr[count] = {
							year: pin,
							data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
						};
						for (var ii = 0; ii < data.length; ii++) {
							if (data[ii].t.indexOf(targetArr[count].year) >= 0) {
								targetArr[count].data[parseInt(data[ii].t.split("-")[1]) - 1] = data[ii].v
							}
						}
					}
				});
			} else if (type == "area") {
				for (var i = 0; i < data.length; i++) {
					targetArr.push(parseFloat(data[i].v))
				}
			} else if(type == ""){

			}
			return targetArr;
		}

		/*----------------------------区域图-----------------------------*/
		//function getAreaSummary(usercode) {
		//    trader.getAreaData(usercode).then(function(data){
		//
		//    });
		//}

		rendAreaChart(usercode);
		function rendAreaChart(usercode) {
			trader.getCoopierChange(usercode).then(function (return_data) {
				//console.log(return_data);
				//console.log(parseData("area",return_data.data));
				if(return_data.error_code == 0){
					$scope.areaData = parseData("area",return_data.data);
					$scope.$broadcast('rendAreaData', $scope.areaData);
				} else {
					console.log(return_data.error_msg)
				}
			});
		}

		rendMasterInfo(usercode);
		function rendMasterInfo(usercode){
			trader.getMasterInfo(usercode).then(function(return_data){
				//console.log(return_data);
				if(return_data.is_succ){
					$scope.master_info = return_data.data;
				}
			});
		}

		/*-----------------------BarChart------------------*/

		//$scope.barData = [{
		//	name: 'John',
		//	data: [5]
		//}, {
		//	name: 'Jane',
		//	data: [2]
		//}, {
		//	name: 'Joe',
		//	data: [3]
		//}, {
		//	name: 'mali',
		//	data: [6]
		//}];


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

				function parseBar(data){
					var barData = [];
					for(var key in data){
						var obj = {
							name:'',
							data:[]
						};
						(function(key){
							obj.name = key;
							obj.data[0] = data[key];
							console.log(obj);
							barData.push(obj)
						}(key))
					}
					console.log(barData);
					return barData;
				}

				$scope.$broadcast('rendBarData', parseBar(data.data));

				console.info(data);
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