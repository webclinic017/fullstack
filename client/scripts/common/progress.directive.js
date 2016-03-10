;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twProgress', twProgress);

    function twProgress($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
                if (scope.$last === true) {
                    $timeout(function() {
                        var proLength = $('.progress').length;
                        var $scale = $('.scale');
                        var $circle = $('.circle');                   

                        for (var i = 0;  i < proLength; i++) {
                            $scale[i].style.height = "13px";
                            $scale[i].style.width = $circle[i].innerHTML;
                            $circle[i].style.left = $circle[i].innerHTML;
                        }
                        scope.$emit('ngRepeatFinished');
                    });
                }

            }
        }
    }
})();