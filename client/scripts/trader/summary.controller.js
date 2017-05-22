;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', '$location', '$state', 'trader', '$timeout'];

    function TraderSummaryController($scope, $location, $state, trader, $timeout) {
        $scope.summary = {};
        $scope.bars = [];
        $scope.isFirstLoad = true;
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)\/#/;

        usercode = absUrl.match(regUsercode)[1];

        // getMasterBarChart(usercode);
//--------------------------高手主页4.0重构--begin----------------------------------------
        /*----------------------------柱状图图-----------------------------*/
        rendColumnChart(usercode);

        function rendColumnChart(usercode) {
            /*调接口获取数据*/
            trader.getHistoricalRate(usercode).then(function (return_data) {
                // console.log(return_data);
                if (return_data.code == 0 && return_data.data.length > 0) {
                    //console.log(return_data);
                    var data = return_data.data;
                    /*解析数据*/
                    $scope.columnData = parseData("column", data);
                    // console.log($scope.columnData);
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
                } else {
                    $scope.$broadcast('hideColumnData');
                }
            });
        }

        /*数据解析函数*/
        function parseData(type, data) {
            var targetArr = [];
            if (type == "column") {
                var count = 0;
                // var pin = data[0].t.split("-")[0];
                var pin = 2000; // 随便写的，确保先进入if
                data.forEach(function (item, index) {
                    if (item.t.indexOf(pin) < 0) {
                        pin = item.t.split("-")[0];
                        /*往数组中新增一项*/
                        targetArr[count] = {
                            year: pin,
                            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                        };
                        for (var ii = 0; ii < data.length; ii++) {
                            if (data[ii].t.indexOf(targetArr[count].year) >= 0) {
                                targetArr[count].data[parseInt(data[ii].t.split("-")[1]) - 1] = data[ii].v;
                            }
                        }

                        count++;
                    } else {
                        // 重复年份
                    }
                });
            } else if (type == "area") {
                for (var i = 0; i < data.length; i++) {
                    targetArr.push(parseFloat(data[i].v))
                }
            } else if (type == "") {

            }
            return targetArr;
        }

        /*----------------------------区域图-----------------------------*/
        rendAreaChart(usercode);
        function rendAreaChart(usercode) {
            trader.getCoopierChange(usercode).then(function (return_data) {
                // console.log(return_data);
                $scope.areaDataInfo = return_data;
                //console.log(parseData("area",return_data.data));
                if (return_data.error_code == 0) {
                    $scope.areaData = parseData("area", return_data.data);
                    $scope.$broadcast('rendAreaData', $scope.areaData);
                } else {
                    console.log(return_data.error_msg)
                }
            });
        }

        /*-----------------------BarChart------------------*/
        $scope.changeYearType = function () {
            $scope.$broadcast('rendBarData', $scope.barData);
            $scope.$broadcast('rendScaleBars', $scope.bars);
            // console.log($scope.bars);
        };

//---------------------------------end------------------------------------------

        //getMonthlySymbols(usercode);

        $scope.changeMonSymbols = function (mon) {
            /*重置数据*/
            $scope.bars = [];
            $scope.barData = [];
            /*loading*/
            $scope.$broadcast('showLoadingImg');
            /*数据处理*/
            $scope.barsNowDate = mon;
            var year = mon.month.split('年')[0];
            var month = mon.month.split('年')[1].split('月')[0];
            var date = year + '-' + month;
            /*获取数据*/
            getMonthlySymbols(usercode, date);
            $scope.barsNowDate = mon;
        };

        getMonthlySymbols(usercode);
        function getMonthlySymbols(usercode, date) {
            trader.getMonthlySymbols(usercode, date).then(function (data) {
                // console.log(data);
                if (!data.is_succ) {
                    return false;
                }
                data = data.data;
                data.now_date = data.current_date.split(' ')[0].slice(0,7);
                data.time = data.start_date.split(' ')[0].slice(0,7);

                /*如果是首次加载,解析所有交易年份*/
                if ($scope.isFirstLoad) {
                    $scope.monSymbols = parseMon(data.time, data.now_date);
                    $scope.barsNowDate = $scope.monSymbols[0];
                }

                function parseMon(start, end) {
                    var result = [];
                    var starts = start.split('-');
                    var ends = end.split('-');
                    var staYear = parseInt(starts[0]);
                    var staMon = parseInt(starts[1]);
                    var endYear = parseInt(ends[0]);
                    var endMon = parseInt(ends[1]);

                    while (staYear <= endYear) {
                        if (staYear == endYear) {
                            while (staMon <= endMon) {
                                staMon = staMon < 10 ? '0' + staMon : staMon;
                                result.push({month: staYear + '年' + staMon + '月'});
                                staMon++;
                            }
                            staYear ++;
                        } else {
                            if (staMon > 12) {
                                staMon = 1;
                                staYear++;
                            }
                            staMon = staMon < 10 ? '0' + staMon : staMon;
                            result.push({month: staYear + '年' + staMon + '月'});
                            staMon++;
                        }
                    }

                    result.reverse();
                    return result;
                }

                function parseBar(data) {
                    var barData = [];
                    for (var i = 0; i < data.length; i++) {
                        var obj = {
                            name: '',
                            data: []
                        };
                        (function (item) {
                            obj.name = item.symbol;
                            obj.data[0] = item.total_rate;
                            // console.log(obj);
                            barData.push(obj)
                        }(data[i]))
                    }
                    // console.log(barData);
                    return barData;
                }

                $scope.barData = parseBar(data.records);
                if (data.records.length <= 0) {
                    $scope.$broadcast('hideBarData', $scope.barData);
                } else {
                    $scope.$broadcast('rendBarData', $scope.barData);
                }
                angular.forEach(data.records, function (value, index) {
                    var scale = (value.short_count / (value.long_count + value.short_count) * 100).toFixed(2);
                    value.scale = scale;
                });

                $scope.bars = data.records;

                $scope.$broadcast('hideLoadingImg');

                $timeout(function () {
                    $scope.$broadcast('rendScaleBars', $scope.bars);
                });

                /*修改首次加载状态*/
                $scope.isFirstLoad = false;
            });
        }
    }
})();

