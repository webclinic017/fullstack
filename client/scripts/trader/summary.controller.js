;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('TraderSummaryController', TraderSummaryController);

    TraderSummaryController.$inject = ['$scope', '$location', 'trader', '$timeout', 'fun', 'lang'];

    function TraderSummaryController($scope, $location, trader, $timeout, fun, lang) {
        // $scope.summary = {};
        // $scope.bars = [];
        // $scope.isFirstLoad = true;
        var usercode;
        var absUrl = $location.absUrl();
        var regUsercode = /trader\/(\d+)(\/)?[#?]/;

        usercode = absUrl.match(regUsercode)[1];
        // 获取高手交易信息
        $scope.masterTradProfile = null;
        $scope.masterPieArr = null;
        $scope.masterlineArr = null;
        getMasterTradProfile(usercode)

        function getMasterTradProfile(usercode) {
            trader.getMasterTradProfile(usercode).then(function (data) {
                if (data && data.is_succ) {
                    $scope.masterTradProfile = data.data;

                    var col_color = {
                        /*渐变色*/
                        colors: ['#fff000', '#ebebeb'],
                        colors2: ['#BC6FFF', '#44BCFF', '#C5EF9B', '#7DF4DA', '#FFC86F']
                    };
                    $scope.masterPieArr = [
                        {
                            name: lang.text("tigerWitID.symbolPage.forex"),
                            y: fun.accMul($scope.masterTradProfile.forex_rate, 100),
                            color: col_color.colors2[0]
                        },
                        {
                            name: lang.text("tigerWitID.symbolPage.crypto"),
                            y: fun.accMul($scope.masterTradProfile.crypto_rate, 100),
                            color: col_color.colors2[1]
                        },
                        {
                            name: lang.text("tigerWitID.symbolPage.indices"),
                            y: fun.accMul($scope.masterTradProfile.cfd_rate, 100),
                            color: col_color.colors2[2]
                        },
                        {
                            name: lang.text("tigerWitID.symbolPage.metals"),
                            y: fun.accMul($scope.masterTradProfile.metal_rate, 100),
                            color: col_color.colors2[3]
                        },
                        {
                            name: lang.text("tigerWitID.symbolPage.oilEngrgy"),
                            y: fun.accMul($scope.masterTradProfile.energy_rate, 100),
                            color: col_color.colors2[4]
                        }
                    ]
                    $scope.masterlineArr = [{
                        name: lang.text("tigerWitID.master.loss"),
                        color: lang.hostIsCn() ? '#11c971' : '#ff605b',
                        data: [
                            fun.accMul($scope.masterTradProfile.forex_fail_rate, 100),
                            fun.accMul($scope.masterTradProfile.crypto_fail_rate, 100),
                            fun.accMul($scope.masterTradProfile.cfd_fail_rate, 100),
                            fun.accMul($scope.masterTradProfile.metal_fail_rate, 100),
                            fun.accMul($scope.masterTradProfile.energy_fail_rate, 100)
                        ]
                    }, {
                        name: lang.text("tigerWitID.master.profit"),
                        color: lang.hostIsCn() ? '#ff605b' : '#11c971',
                        data: [
                            fun.accMul($scope.masterTradProfile.forex_win_rate, 100),
                            fun.accMul($scope.masterTradProfile.crypto_win_rate, 100),
                            fun.accMul($scope.masterTradProfile.cfd_win_rate, 100),
                            fun.accMul($scope.masterTradProfile.metal_win_rate, 100),
                            fun.accMul($scope.masterTradProfile.energy_win_rate, 100)
                        ]
                    }]
                    // 空的不显示
                    for(var i = ($scope.masterPieArr.length-1); i >= 0; i--){
                        if($scope.masterPieArr[i].y == 0){
                            $scope.masterPieArr.splice(i, 1);
                            $scope.masterlineArr[0].data.splice(i,1);
                            $scope.masterlineArr[1].data.splice(i,1);
                        }
                    }
                    $timeout(function(){
                        $scope.$broadcast('rendBarData', $scope.masterlineArr);
                        $scope.$broadcast('paintPieChart', $scope.masterPieArr);
                    },100)
                    
                }
            });
        }

        /*数据解析函数*/
        // function parseData(type, data) {
        //     var targetArr = [];
        //     if (type == "column") {
        //         var count = 0;
        //         // var pin = data[0].t.split("-")[0];
        //         var pin = 2000; // 随便写的，确保先进入if
        //         data.forEach(function (item, index) {
        //             if (item.t.indexOf(pin) < 0) {
        //                 pin = item.t.split("-")[0];
        //                 /*往数组中新增一项*/
        //                 targetArr[count] = {
        //                     year: pin,
        //                     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        //                 };
        //                 for (var ii = 0; ii < data.length; ii++) {
        //                     if (data[ii].t.indexOf(targetArr[count].year) >= 0) {
        //                         targetArr[count].data[parseInt(data[ii].t.split("-")[1]) - 1] = data[ii].v;
        //                     }
        //                 }

        //                 count++;
        //             } else {
        //                 // 重复年份
        //             }
        //         });
        //     } else if (type == "area") {
        //         for (var i = 0; i < data.length; i++) {
        //             targetArr.push(parseFloat(data[i].v))
        //         }
        //     } else if (type == "") {

        //     }
        //     console.log(targetArr)
        //     return targetArr;
        // }

        /*-----------------------BarChart------------------*/
        // $scope.changeYearType = function () {
        //     $scope.$broadcast('rendBarData', $scope.barData);
        //     $scope.$broadcast('rendScaleBars', $scope.bars);
        //     // console.log($scope.bars);
        // };

        // //---------------------------------end------------------------------------------

        // $scope.changeMonSymbols = function (mon) {
        //     /*重置数据*/
        //     $scope.bars = [];
        //     $scope.barData = [];
        //     /*loading*/
        //     $scope.$broadcast('showLoadingImg');
        //     /*数据处理*/
        //     $scope.barsNowDate = mon;
        //     var year = mon.month.split('-')[0];
        //     var month = mon.month.split('-')[1].split('-')[0];
        //     var date = year + '-' + month;
        //     /*获取数据*/
        //     getMonthlySymbols(usercode, date);
        //     $scope.barsNowDate = mon;
        // };

        // getMonthlySymbols(usercode);
        // function getMonthlySymbols(usercode, date) {
        //     trader.getMonthlySymbols(usercode, date).then(function (data) {
        //         // console.log(data);
        //         if (!data.is_succ) {
        //             return false;
        //         }
        //         data = data.data;
        //         data.now_date = data.current_date.split(' ')[0].slice(0, 7);
        //         data.time = data.start_date.split(' ')[0].slice(0, 7);

        //         /*如果是首次加载,解析所有交易年份*/
        //         if ($scope.isFirstLoad) {
        //             $scope.monSymbols = parseMon(data.time, data.now_date);
        //             $scope.barsNowDate = $scope.monSymbols[0];
        //         }

        //         function parseMon(start, end) {
        //             var result = [];
        //             var starts = start.split('-');
        //             var ends = end.split('-');
        //             var staYear = parseInt(starts[0]);
        //             var staMon = parseInt(starts[1]);
        //             var endYear = parseInt(ends[0]);
        //             var endMon = parseInt(ends[1]);

        //             while (staYear <= endYear) {
        //                 if (staYear == endYear) {
        //                     while (staMon <= endMon) {
        //                         staMon = staMon < 10 ? '0' + staMon : staMon;
        //                         result.push({ month: staYear + '-' + staMon });
        //                         staMon++;
        //                     }
        //                     staYear++;
        //                 } else {
        //                     if (staMon > 12) {
        //                         staMon = 1;
        //                         staYear++;
        //                     }
        //                     staMon = staMon < 10 ? '0' + staMon : staMon;
        //                     result.push({ month: staYear + '-' + staMon });
        //                     staMon++;
        //                 }
        //             }

        //             result.reverse();
        //             return result;
        //         }

        //         function parseBar(data) {
        //             var barData = [];
        //             for (var i = 0; i < data.length; i++) {
        //                 var obj = {
        //                     name: '',
        //                     data: []
        //                 };
        //                 (function (item) {
        //                     obj.name = item.symbol;
        //                     obj.data[0] = item.total_rate;
        //                     // console.log(obj);
        //                     barData.push(obj)
        //                 }(data[i]))
        //             }
        //             // console.log(barData);
        //             return barData;
        //         }

        //         $scope.barData = parseBar(data.records);
        //         if (data.records.length <= 0) {
        //             $scope.$broadcast('hideBarData', $scope.barData);
        //         } else {
        //             $scope.$broadcast('rendBarData', $scope.barData);
        //         }
        //         angular.forEach(data.records, function (value, index) {
        //             var scale = ((value.avg_long_time / (value.avg_long_time + value.avg_short_time)) * 100).toFixed(2);
        //             value.scale = scale;
        //         });

        //         $scope.bars = data.records;

        //         $scope.$broadcast('hideLoadingImg');

        //         $timeout(function () {
        //             $scope.$broadcast('rendScaleBars', $scope.bars);
        //         });

        //         /*修改首次加载状态*/
        //         $scope.isFirstLoad = false;
        //     });
        // }
    }
})();

