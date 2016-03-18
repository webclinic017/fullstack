;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformValidTxt', twformValidTxt);

    twformValidTxt.$inject = ['validator'];
    
    /**
     * twformValidTxt directive
     * @desc 自定义表单验证
     * 验证输入的文本（如：username）是否符合格式要求
     */
    function twformValidTxt(validator) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function (scope, element, attrs, controller) {
                var type = attrs.type,
                    minLen = attrs.minLen,
                    maxLen = attrs.maxLen;

                controller.$parsers.push(function (viewVal) {
                    var empty = controller.$isEmpty(viewVal);

                    if (empty) {
                        controller.$setValidity('twformValidTxt', true);
                        return undefined;
                    }

                    if (validator.isValidTxt(type, viewVal, minLen, maxLen)) {
                        controller.$setValidity('twformValidTxt', true);
                        return viewVal;
                    } else {
                        controller.$setValidity('twformValidTxt', false);
                        return undefined;
                    }
                });

            }
        };
    }
})();