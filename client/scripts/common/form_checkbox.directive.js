;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twformCheckbox', twformCheckbox);


    function twformCheckbox() {
        return {
            restrict: 'A',
            scope: {
                bindModel: '='
            },
            link: function (scope, element, attrs) {
                var label = element.find('label');
                var notCheckedEl = $('<i class="fa fa-square-o"></i>');
                var checkedEl = $('<i class="fa fa-check-square"></i>');

                scope.$watch('bindModel', function (checked) {
                    
                    if (checked) {
                        label.append(checkedEl);
                        notCheckedEl.remove();
                    } else {
                        label.append(notCheckedEl);
                        checkedEl.remove();
                    }
                });
            }
        }
    }
})();