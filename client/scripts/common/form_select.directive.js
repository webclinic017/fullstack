/**
 * input模拟下拉列表
 * 传递参数
 * no-active  因禁用readonly所以添加no-active增加是否可点击效果 true不可点击
 * data-value
 * data-bind-model
 * data-disabled 对象字符串 列表中不可点击的内容，若disabled为true，不可点击，弹出msg提示
 */
;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformSelect', twformSelect);

    function twformSelect() {
        return {
            restrict: 'A',
            scope: {
                bindModel: '='
            },
            link: function (scope, element, attrs) {
                var selector = {
                    input: 'input',
                    dropdown: 'ul'
                };
                var select = element.parent();
                var dropdown = element;
                
                select.on('click', function (e) {
                    // console.log($(e.target).is('input[no-active]'));
                    if(!($(e.target).is("input[no-active='true']"))){
                        dropdown.addClass('active');
                    }   // input 有no-active属性则不可点击，相当于disabled

                    e.stopPropagation();
                });

                // select.on('blur', selector.input, function () {
                //     setTimeout(function () {
                //         dropdown.removeClass('active');    
                //     }, 150);
                // });
                $(document).on('click', function () {
                    setTimeout(function () {
                        dropdown.removeClass('active');    
                    }, 150);
                });
                select.on('click', selector.dropdown, function (e) {
                    var target = $(e.target);
                    var disabled = angular.fromJson(target.attr('data-disabled') && target.attr('data-disabled').replace(': ,', ': false,'));
                    // console.log(target.attr('data-disabled'))
                    if(disabled && disabled.disabled) {
                        layer.msg(disabled.msg)
                        return
                    }
                    if (target.is('span[data-value]')) {
                        scope.bindModel.key = target.text();
                        scope.bindModel.value = target.attr('data-value');
                        setTimeout(function () {
                            dropdown.removeClass('active');    
                        }, 150);
                        scope.$apply();
                    }
                });

                // select.on('keydown', selector.input, function (e) {
                //     e.preventDefault();
                // });

                select.on('contextmenu', selector.input, function (e) {
                    e.preventDefault();
                });

                scope.$on('$destroy', function () {
                    select.off();
                });
            }
        }
    }
})();
