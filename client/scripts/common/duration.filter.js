;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('duration', duration);

    duration.$inject = ['lang'];

    function duration(lang) {
        return function (timestamp) {
            if (typeof timestamp == 'undefined') {
                return;
            }

            if (timestamp < 0) {
                return lang.text('tigerWitID.just');
            }

            if (timestamp < 60) {
                return timestamp + lang.text('tigerWitID.second');
            }

            if (timestamp < 60 * 60) {
                return Math.floor((timestamp / 60)) + lang.text('tigerWitID.minute');
            }

            if (timestamp < 60 * 60 *24) {
                return Math.floor((timestamp / (60 * 60))) + lang.text('tigerWitID.Ahour');
            }

            if (timestamp < 60 * 60 * 24 * 7) {
                return Math.floor((timestamp / (60 * 60 * 24))) + lang.text('tigerWitID.day');
            }

            if (timestamp < 60 * 60 * 24 * 7 * 30) {
                return Math.floor((timestamp / (60 * 60 * 24 * 7))) + lang.text('tigerWitID.weeks');
            }

            if (timestamp < 60 * 60 * 24 * 30 * 12) {
                return Math.floor((timestamp / (60 * 60 * 24 * 30))) + lang.text('tigerWitID.month');
            }            

            return Math.floor((timestamp / (60 * 60 * 24 * 30 * 12))) + lang.text('tigerWitID.year');
        }
    }
})();
