;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .config(['$httpProvider', function ($httpProvider) {
            $httpProvider.defaults.withCredentials = false;
        }])
        .controller('ProductCalendarController', ProductCalendarController);

    ProductCalendarController.$inject = ['$scope', '$sce', '$timeout', '$http'];

    function ProductCalendarController($scope, $sce, $timeout, $http) {

        $scope.weekList = ['日','一','二','三','四','五','六'];
        $scope.countryList = [
            {
                key: '中国',
                value: 'CNY',
                select: false
            },
            {
                key: '美国',
                value: 'USD',
                select: false
            },
            {
                key: '加拿大',
                value: 'CAD',
                select: false
            },
            {
                key: '英国',
                value: 'GBP',
                select: false
            },
            {
                key: '澳大利亚',
                value: 'AUD',
                select: false
            },
            {
                key: '瑞士',
                value: 'CHF',
                select: false
            },
            {
                key: '日本',
                value: 'JPY',
                select: false
            },
            {
                key: '欧元区',
                value: 'EUR',
                select: false
            }
        ];
        $scope.starList = [
            {
                stars: 1,
                select: false
            },
            {
                stars: 2,
                select: false
            },
            {
                stars: 3,
                select: false
            }
        ];
        $scope.selectParams = {
            country: [],
            stars: []
        };
        $scope.nowDate = {};
        $scope.dateList = [];
        $scope.selectDate = {};
        $scope.selectStr = '';
        $scope.newsInfo = [];
        $scope.newsInfoTemp = [];
        $scope.selectBoxStatus = false;

        var selectDateTemp = {};    // 翻看上周or下周当作目标位

        var oDate = new Date();
        $scope.nowDate.year = oDate.getFullYear();
        $scope.nowDate.month = oDate.getMonth();
        $scope.nowDate.date = oDate.getDate();
        $scope.nowDate.day = oDate.getDay();

        $scope.checkDate = checkDate;
        $scope.setDateList = setDateList;
        $scope.showSelectBox = showSelectBox;
        $scope.dealNewsInfo = dealNewsInfo;
        $scope.showDetails = showDetails;
        $scope.toDou = toDou;
        $scope.getDetailTime = getDetailTime;

        $scope.$watch('selectStr', function (newVal, oldVal) {
            // console.log(newVal, oldVal);
            if (newVal && (newVal != oldVal)) {
                $scope.selectDate.year = Number(newVal.slice(0,4));
                $scope.selectDate.month = Number(newVal.slice(4,6))-1;
                $scope.selectDate.date = Number(newVal.slice(6,8));
                $scope.selectDate.day = new Date($scope.selectDate.year, $scope.selectDate.month, $scope.selectDate.date).getDay();
                // console.log($scope.selectDate);
                angular.extend(selectDateTemp, {}, $scope.selectDate);
                setDateList($scope.selectDate);
                getInfo($scope.selectDate);
            }
        });

        $timeout(function () {
            checkDate($scope.nowDate);
        });

        angular.element(document).on('click', function () {
            $scope.$apply(function () {
                $scope.selectBoxStatus = false;
                // console.log($scope.selectBoxStatus);
            });
        });

        function showSelectBox (e) {
            e.preventDefault();
            e.stopPropagation();
            $scope.selectBoxStatus = !$scope.selectBoxStatus;
        }

        function checkDate (target) {
            $scope.selectStr = target.year+toDou(target.month+1)+toDou(target.date);
            // $scope.selectDate = target;
        }

        function setDateList (target) {
            if (!target) return;
            if (typeof target === 'string') {
                if (target === 'prev') {
                    target = getWeekDate(selectDateTemp.year, selectDateTemp.month, selectDateTemp.date-7);
                }
                if (target === 'next') {
                    target = getWeekDate(selectDateTemp.year, selectDateTemp.month, selectDateTemp.date+7);
                }
                selectDateTemp = target;
            }

            $scope.dateList = [];
            var startDate = target.date - target.day;

            for (var i=0; i<7; i++) {
                var single = getWeekDate(target.year, target.month, startDate+i);
                if (i == target.day) {

                    if ((single.year == $scope.selectDate.year) && (single.month == $scope.selectDate.month) && (single.date == $scope.selectDate.date)) {
                        single.select = true;
                    }
                }

                $scope.dateList.push(single);
            }
            // console.log($scope.dateList);
        }

        function getWeekDate(year,month,date) {
            var weekDate = new Date(year,month,date);
            
            return {
                year: weekDate.getFullYear(),
                month: weekDate.getMonth(),
                date: weekDate.getDate(),
                day: weekDate.getDay()
            };
        }

        function getInfo (target) {
            var start = new Date(target.year,target.month,target.date,0,0,0).getTime()/1000;
            var end = new Date(target.year,target.month,target.date,23,59,59).getTime()/1000;
            // console.log(start, end);

            $http.get('https://api-prod.wallstreetcn.com/apiv1/finfo/calendars', {
                params: {
                    start: start,
                    end: end
                }
            }).then(function (data) {
                // console.log(data);
                $scope.newsInfoTemp = data.data.items;

                angular.forEach($scope.newsInfoTemp, function (value, index) {
                    value.tw_time = getTwTime(value.timestamp);
                    value.open = false;
                });

                dealNewsInfo();
            });   
        }

        function dealNewsInfo (target) {
            target && (target.select = !target.select);
            var country = [], star = [];
            $scope.newsInfo = [];

            angular.forEach($scope.countryList, function (value, index) {
                if (value.select) {
                    country.push(value.value);
                }
            });
            angular.forEach($scope.starList, function (value, index) {
                if (value.select) {
                    star.push(value.stars);
                }
            });

            angular.forEach($scope.newsInfoTemp, function (value, index) {
                if (country.length && star.length) {
                    if ((country.join(',').indexOf(value.currency) !== -1) && (star.join(',').indexOf(value.importance) !== -1)) {
                        $scope.newsInfo.push(value);
                    }
                } else if (country.length) {
                    if (country.join(',').indexOf(value.currency) !== -1) {
                        $scope.newsInfo.push(value);
                    }
                } else if (star.length) {
                    if (star.join(',').indexOf(value.importance) !== -1) {
                        $scope.newsInfo.push(value);
                    }
                } else {
                    $scope.newsInfo = $scope.newsInfoTemp;
                }
            });
        }

        function showDetails (news) {
            news.open = !news.open;

            if (!news.open) return;

            $http.get('https://api-sit.wallstreetcn.com/apiv1/finfo/'+news.calendar_key+'/detail').then(function (data) {
                // console.log(data);
                news.details = data.data;
                news.errMsg = false;
                news.bindChartOptions = data.data;

                if (data.code !== 20000) {
                    news.errMsg = data.message;
                }
                // draw chart
                if (data.data.items && data.data.items.length > 0) {
                    var xOptions = [];
                    var dataOptions = [
                        {
                            name: '预测值',
                            data: []
                        },
                        {
                            name: '公布值',
                            data: []
                        }
                    ];
                    angular.forEach(data.data.items, function (value, index) {
                        xOptions.unshift(value.human_date.slice(0,10));
                        var o = value.forecast ? parseFloat(value.forecast) : null;
                        var t = value.actual ? parseFloat(value.actual) : null;
                        dataOptions[0].data.unshift(o);
                        dataOptions[1].data.unshift(t);
                    });

                    news.bindChartOptions = {
                        xOptions: xOptions,
                        dataOptions: dataOptions
                    };
                } else {
                    news.bindChartOptions = {
                        xOptions: [],
                        dataOptions: []
                    };
                }
            });  
        }

        function getDetailTime (timestamp) {
            if (!timestamp) return '';
            var oD = new Date(timestamp*1000);

            return toDou(oD.getMonth()+1) + '-' + toDou(oD.getDate()) + ' ' + toDou(oD.getHours())+':'+toDou(oD.getMinutes());
        }

        function getTwTime (timestamp) {
            var oD = new Date(timestamp*1000);

            return toDou(oD.getHours())+':'+toDou(oD.getMinutes());
        } 

        function toDou (num) {
            return num < 10 ? '0'+num : ''+num;
        }

    }
})();
