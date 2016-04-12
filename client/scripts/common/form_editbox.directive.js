;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformEditbox', twformEditbox);

    /**
     * @name twformEditbox
     * @desc 高手简介等的 textarea 元素验错指令
     */
    function twformEditbox() {
        return {
            restrict: 'A',
            require: '?ngModel',
            scope: {
                ngModel: '=',
                words: '='
            },
            link: function (scope, element, attrs, controller) {
                scope.words = 0;

                var wordsLimit = parseInt(attrs.wordsLimit, 10);
                var dbcsReg = /[^\x00-\xff]/g;
                
                if (typeof controller === 'undefined') return;
                    
                if (controller.$isEmpty(wordsLimit)) return;

               
                // 初始化时设置 scope.words 的值
                scope.$watch('ngModel', function (newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }

                    if (newVal) {
                        scope.words = newVal.replace(dbcsReg, '**').length;

                        // 初始化时若超出字符限制执行
                        if (scope.words > wordsLimit) {
                            controller.$parsers[0](newVal);
                        }
                    }
                });

                controller.$parsers.push(function (viewVal) {
                    scope.words = viewVal.replace(dbcsReg, '**').length;

                    if (scope.words > wordsLimit) {
                        element.parent().find('.editbox__words_limit').addClass('font-danger');
                        controller.$setValidity('twformEditbox', false);
                        return undefined;
                    } else {
                        element.parent().find('.editbox__words_limit').removeClass('font-danger');
                        controller.$setValidity('twformEditbox', true);
                        return viewVal;
                    }
                });

                element.on('keydown', stopNewline);
                scope.$on('$destroy', function () {
                    element.off('keydown', stopNewline);
                });

                // 不许输入换行符
                function stopNewline(event) {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                    }
                }
            }
        };
    }
})();