;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twDropdownFaq', twDropdownFaq);

    function twDropdownFaq($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
                

                $('.faq-public').find('i[class$=down]').hide();
                $('.faq-public').find('.faq-public__answer').hide();

                $('.faq-public__question').click(function() {
                    $(this).parent().find('.faq-public__answer').slideToggle();
                    $(this).children('i[class$=right]').toggle();
                    $(this).children('i[class$=down]').toggle();
                });
            }
        }
    }
})();