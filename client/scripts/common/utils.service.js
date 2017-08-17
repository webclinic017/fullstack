;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .factory('utils', utils);

    utils.$inject = ['$http', '$window'];

    function utils($http, $window) {

        return {
            getTotal: getTotal,
            formatDate: formatDate,
            domainCheckerForBaidu: domainCheckerForBaidu
        };

        /*
         * Utils Service 数据分页时获取总页数
         *
         * @method getTotal
         * @param {Number} sum list item 总个数
         * @param {Number} pagesize 单页显示数
         */
        function getTotal(sum, pagesize) {
            var total;
            sum = parseInt(sum, 10); // list item 总个数
            pagesize = parseInt(pagesize, 10); // 单页显示数

            if (sum % pagesize > 0) {
                total = parseInt(sum / pagesize) + 1;
            } else {
                total = parseInt(sum / pagesize);
            }
            return total;
        }

        /*
         * Utils Service 格式化日期
         *
         * @method formatDate
         */
        function formatDate(timestamp, type) {
            var date = new Date(timestamp * 1000);
            var year = date.getFullYear();
            var yearUTC = date.getUTCFullYear();
            var month = date.getMonth() + 1;
            var monthUTC = date.getUTCMonth() + 1;
            month = modFormat(month);
            monthUTC = modFormat(monthUTC);
            var day = date.getDate();
            var dayUTC = date.getUTCDate();
            day = modFormat(day);
            dayUTC = modFormat(dayUTC);
            var hour = date.getHours();
            var hourUTC = date.getUTCHours();
            hour = modFormat(hour);
            hourUTC = modFormat(hourUTC);
            var minute = date.getMinutes();
            var minuteUTC = date.getUTCMinutes();
            minute = modFormat(minute);
            minuteUTC = modFormat(minuteUTC);
            var second = date.getSeconds();
            var secondUTC = date.getUTCSeconds();
            second = modFormat(second);
            secondUTC = modFormat(secondUTC);

            if (type === 'UTC') {
                return {
                    yearUTC: yearUTC,
                    monthUTC: monthUTC,
                    dayUTC: dayUTC,
                    hourUTC: hourUTC,
                    minuteUTC: minuteUTC,
                    secondUTC: secondUTC
                }
            } else {
                return {
                    year: year,
                    month: month,
                    day: day,
                    hour: hour,
                    minute: minute,
                    second: second
                }
            }
        }

        function modFormat(argu) {
            var argu = parseInt(argu);

            if (argu < 10) {
                argu = '0' + argu;
            }
            return argu;
        }
    }
})();