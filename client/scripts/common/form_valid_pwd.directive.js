;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformValidPwd', twformValidPwd);

    twformValidPwd.$inject = ['validator'];

    /* 
     * 自定义表单验证 
     *
     * 验证输入的密码是否符合格式要求（具体规则见 validator 服务），
     * 因为要求比较复杂，一个正则搞不定    
     */
    function twformValidPwd(validator) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, controller) {

                controller.$parsers.push(function (viewVal) {

                    if (controller.$isEmpty(viewVal)) {
                        controller.$setValidity('twformValidPwd', true);
                        return viewVal;
                    }

                    if (validator.isValidPwd(viewVal)) {
                        controller.$setValidity('twformValidPwd', true);
                        return viewVal;
                    } else {
                        controller.$setValidity('twformValidPwd', false);
                        return undefined;
                    }
                });

            }
        };
    }

})();