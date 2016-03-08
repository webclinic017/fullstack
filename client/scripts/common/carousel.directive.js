;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twCarousel', twCarousel);

    function twCarousel($document) {

        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                
                var interval,
                    i = 0,
                    inLength = $('.carousel-inner div').length;


                slideRun();

                function slideRun () {
                    interval = setInterval(slide, 2000);
                }

                $('.carousel').mouseover(function() {
                    clearInterval(interval);
                });
                $('.carousel').mouseout(function() {
                    interval = setInterval(slide, 2000);
                });

                 function slide () {
                    var divStr = '.carousel-inner div:eq(' + i + ')';
                    $(divStr).show().siblings().hide();
                    var liStr = '.carousel-indicators li:eq(' + i + ')';
                    $(liStr).addClass('current').siblings().removeClass('current');
                    i++;
                    if (i >= inLength) {
                        i = 0;
                    }
                }

                $('.carousel-indicators li').click(function() {
                    var id = $(this).index();

                    var divSlide = '.carousel-inner div:eq(' + id + ')';
                    var liDot = '.carousel-indicators li:eq(' + id + ')';

                    $(divSlide).addClass('active').siblings().removeClass('active');
                    $(liDot).addClass('current').siblings().removeClass('current');


                });
 
            }
        }
    }
})();