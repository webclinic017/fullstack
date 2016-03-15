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
        .directive('twformMax', twformMax);

    function twformMax() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, ctrl) {
                if (!ctrl) {
                    return;
                }

                var max = -1;
                attrs.$observe('twformMax', function (value) {
                    var floatVal = parseFloat(value, 10);
                    max = isNaN(floatVal) ? -1 : floatVal;
                });


                ctrl.$parsers.push(function (viewVal) {

                    // 当其他验证规则未通过时，改验证规则的 $error 对应的属性值是 false
                    // 所以 $setValidity 为 true，同时返回 viewVal 而不是 undefined
                    // if (ctrl.$modelValue === undefined) {
                    //     ctrl.$setValidity('twformMax', true);
                    //     return viewVal;
                    // }

                    if (viewVal > max) {
                        ctrl.$setValidity('twformMax', false);
                        return undefined;
                    } else {
                        ctrl.$setValidity('twformMax', true);
                        return viewVal;
                    }
                });

            }
        }
    }
})();
