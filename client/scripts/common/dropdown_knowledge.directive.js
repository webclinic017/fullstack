;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twDropdownKnowledge', twDropdownKnowledge);

    function twDropdownKnowledge () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
               var info = element.find(".info");
               var title = element.find(".title");
               var downArrow = element.find(".fa-chevron-down");
               var rightArrow = element.find(".fa-chevron-right");

               title.on("click", showDetails);

               function showDetails () {
                    var hasClassName;
                    hasClassName = info[0].className.indexOf('active');
                    // console.info(hasClassName);

                    if (hasClassName == -1) {
                        info.addClass("active");
                        rightArrow.removeClass("active");
                        downArrow.addClass("active");
                    } else {
                        info.removeClass("active");
                        downArrow.removeClass("active");
                        rightArrow.addClass("active");
                    }
               }
            }
        }
    }
})();