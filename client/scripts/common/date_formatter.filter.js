(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('dateFormatter', dateFormatter);

    dateFormatter.$inject = ['utils'];
        
    // 可显示 UTC 时间或者本地时间
    function dateFormatter(utils) {
        return function (timestamp, type) {
            var date;
            
            if (typeof timestamp === 'undefined') return;
            
            if (typeof type === 'undefined') {
                date = utils.formatDate(timestamp);                
            } else {
                date = utils.formatDate(timestamp, type);
            }

            if (type === 'UTC') {
                return date.yearUTC + '/' + date.monthUTC + '/' + date.dayUTC + 
                        ' ' + date.hourUTC + ':' + date.minuteUTC + ' GMT';  
            } else {
                return date.year + '/' + date.month + '/' + date.day + ' ' + 
                        date.hour + ':' + date.minute;  
            }
        }
    }
})();