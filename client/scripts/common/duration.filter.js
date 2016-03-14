;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('duration', duration);

    function duration() {
        return function (timestamp) {
            if (typeof timestamp == 'undefined') {
                return;
            }

            if (timestamp < 0) {
                return -1;
            }

            if (timestamp < 60) {
                return timestamp + '秒';
            }

            if (timestamp < 60 * 60) {
                return Math.round((timestamp / 60)) + '分钟';
            }

            if (timestamp < 60 * 60 *24) {
                return Math.round((timestamp / (60 * 60))) + '小时';
            }

            if (timestamp < 60 * 60 * 24 * 7) {
                return Math.round((timestamp / (60 * 60 * 24))) + '天';
            }

            return Math.round((timestamp / (60 * 60 * 24 * 7))) + '周';
        }
    }
})();