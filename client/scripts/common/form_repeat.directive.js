;
(function () {
    'use strict';

    /**
     * 自定义表单验证指令   
     *
     * 验证输入的内容与参考值是否相同
     */

    angular
        .module('fullstackApp')
        .directive('twformRepeat', twformRepeat);

    function twformRepeat() {
        return {
            restrict: 'A',
            require: '?ngModel',
            scope: {},
            link: function (scope, element, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }

                var referVal; 
                attrs.$observe('twformRepeat', function (value) {
                    referVal = value;

                    if (!ctrl.$isEmpty(value)) {
                        ctrl.$parsers[1](ctrl.$viewValue);
                    }
                });
                
                ctrl.$parsers.push(function (viewVal) {
                    
                    if (ctrl.$isEmpty(viewVal) || ctrl.$isEmpty(referVal)) {
                        ctrl.$setValidity('twformRepeat', true);
                        return undefined;
                    }

                    if (viewVal !== referVal) {
                        ctrl.$setValidity('twformRepeat', false);
                        return undefined;
                    } 
                    
                    ctrl.$setValidity('twformRepeat', true);
                    return viewVal;
                });
            }
        }
    }
})();