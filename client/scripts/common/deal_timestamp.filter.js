(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('dealTimestamp', dealTimestamp);

    dealTimestamp.$inject = [];
        
    // 可显示 UTC 时间或者本地时间
    function dealTimestamp() {
        return function (timestamp) {
            var date = new Date(timestamp*1000);
            var Y = date.getFullYear()+"-";
            var M = toDou(date.getMonth()+1)+"-";
            var D = toDou(date.getDate());
            var time = toDou(date.getHours())+":"+toDou(date.getMinutes())+":"+toDou(date.getSeconds());

            var dateFormat = Y+M+D+" "+time;

            return dateFormat;
        }

        function toDou (n) {
            return n < 10 ? '0'+n : ''+n;
        }
    }
})();