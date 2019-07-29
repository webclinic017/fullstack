/**
 * input模拟下拉列表
 * show 列表是否显示
 */
;
(function () {

    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformSelectTwo', twformSelectTwo);

    function twformSelectTwo() {
        return {
            restrict: 'A',
            scope: {
                show: '='
            },
            link: function (scope, element, attrs) {
                var select = element;
                 var selector = {
                    input: 'input',
                    dropdown: 'ul'
                };
                // var dropdown = element.children(selector.dropdown);
                // var input = element.children(selector.input);
                // select.on('click', function (e) {
                //     e.stopPropagation();
                // });

                // select.on('blur', selector.input, function () {
                //     setTimeout(function () {
                //         dropdown.removeClass('active');    
                //     }, 150);
                // });
                $(document).on('click', function (e) {
                   if(!select.is(e.target) && select.has(e.target).length === 0){
                    scope.show = false; //要隐藏的
                    scope.$apply();
                   }
                });
                // select.on('click', selector.dropdown, function (e) {
                //     scope.show = true
                // });
                select.on('focus', selector.input, function (e) {
                    // console.log('focus')
                    scope.$apply(function () {
                        scope.show = true;
                    })
                });


                // select.on('contextmenu', selector.input, function (e) {
                //     e.preventDefault();
                // });

                // scope.$on('$destroy', function () {
                //     select.off();
                // });
            }
        }
    }
})();
