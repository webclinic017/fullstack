;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twProgress', twProgress);

    function twProgress($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var proLength = $('.progress').length;
                        var $scale = $('.scale');
                        var $num = $('.p-num');

                for (var i = 0;  i < proLength; i++) {
                    $scale[i].style.width = $num[i].innerHTML;
                }
            }
        }
    }
})();
