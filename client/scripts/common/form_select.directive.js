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
                    console.log(scope)
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
