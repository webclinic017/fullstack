;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twMarquee', twMarquee);

    function twMarquee($document) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var speed = 80;
                var marquee = $('.marquee')[0];
                var marquee_con2 = $('.marquee_con2')[0];
                var marquee_con1 = $('.marquee_con1')[0];

                marquee_con2.innerHTML = marquee_con1.innerHTML;

                function Marquee() {
                    if (marquee_con1.offsetHeight - marquee.scrollTop <= 0) {
                        marquee.scrollTop = 0;
                    } else {
                        marquee.scrollTop++;
                    }
                }

                var MyMar = setInterval(Marquee,speed);
                marquee.onmouseover = function() {
                    clearInterval(MyMar);
                }; 
                marquee.onmouseout = function() {
                    MyMar = setInterval(Marquee,speed);
                };
                
            }
        }
    }
})();