;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('ProductCalendarController', ProductCalendarController);

    ProductCalendarController.$inject = ['$scope', '$sce', '$timeout', '$http'];

    function ProductCalendarController($scope, $sce, $timeout, $http) {

        $scope.weekList = ['日','一','二','三','四','五','六'];
        $scope.nowDate = {};
        $scope.dateList = [];
        $scope.selectDate = {};
        $scope.selectStr = '';
        $scope.newsInfo = [];

        var oDate = new Date();
        $scope.nowDate.year = oDate.getFullYear();
        $scope.nowDate.month = oDate.getMonth();
        $scope.nowDate.date = oDate.getDate();
        $scope.nowDate.day = oDate.getDay();

        $scope.checkDate = checkDate;
        $scope.toDou = toDou;

        $scope.$watch('selectStr', function (newVal, oldVal) {
            // console.log(newVal, oldVal);
            if (newVal && (newVal != oldVal)) {
                $scope.selectDate.year = Number(newVal.slice(0,4));
                $scope.selectDate.month = Number(newVal.slice(4,6))-1;
                $scope.selectDate.date = Number(newVal.slice(6,8));
                $scope.selectDate.day = new Date($scope.selectDate.year, $scope.selectDate.month, $scope.selectDate.date).getDay();
                console.log($scope.selectDate);
                setDateList($scope.selectDate);
                getInfo($scope.selectDate);
            }
        });

        $timeout(function () {
            checkDate($scope.nowDate);
        });

        function checkDate (target) {
            $scope.selectStr = target.year+toDou(target.month+1)+toDou(target.date);
            $scope.selectDate = target;
        }

        function setDateList (target) {
            if (!target) return;

            $scope.dateList = [];
            var startDate = target.date - target.day;

            for (var i=0; i<7; i++) {
                var single = getWeekDate(target.year, target.month, startDate+i);
                if (i == target.day) {
                    single.select = true;
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
            console.log(start, end);

            $http.get('https://api-prod.wallstreetcn.com/apiv1/finfo/calendars', {
                params: {
                    start: start,
                    end: end
                }
            }).then(function (data) {
                console.log(data);
                $scope.newsInfo = data.data.items;
            });
            // var d = new Date(1516923000000).getHours();
            // var ds = new Date(1516923000000).getMinutes();
            // console.log(d, ds);
        }

        function toDou (num) {
            return num < 10 ? '0'+num : ''+num;
        }

    }
})();
