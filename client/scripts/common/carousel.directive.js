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
                    $('.carousel-inner div').eq(i).addClass('active').siblings().removeClass('active');
                    $('.carousel-indicators li').eq(i).addClass('current').siblings().removeClass('current');
                    i++;
                    if (i >= inLength) {
                        i = 0;
                    }
                }

                $('.carousel-indicators li').mouseover(function() {
                    clearInterval(interval);

                    var id = $(this).index();
                    console.info(id);

                    $('.carousel-inner div').eq(id).addClass('active').siblings().removeClass('active');
                    $('.carousel-indicators li').eq(id).addClass('current').siblings().removeClass('current');
                });
 
            }
        }
    }
})();