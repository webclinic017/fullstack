;
(function () {
    'use strict';

    /**
     * 自定义表单验证指令   
     *
     * 最大值限制 
     */

    angular
        .module('fullstackApp')
        .directive('twformMin', twformMin);

    function twformMin() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }

                var min = 0;
                attrs.$observe('twformMin', function (value) {
                    var floatVal = parseFloat(value, 10);
                    min = isNaN(floatVal) ? 0 : floatVal;
                });

                ctrl.$parsers.push(function (viewVal) {

                    if (viewVal < min) {
                        ctrl.$setValidity('twformMin', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('twformMin', true);
                        return viewVal;
                    }
                });

            }
        }
    }    
        

})();