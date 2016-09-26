;
(function() {
    'use strict';

    angular
        .module('fullstackApp')
        .directive('twCarousel', twCarousel);

    function twCarousel($document) {

        var options = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 4000,
            speed: 400,
            loop: true,
            lazyLoading : true,
            lazyLoadingOnTransitionStart : true
        };

        return {
            restrict: 'A',
            replace:true,
            link: function (scope, element, attrs) {
                var type = attrs.type;
                /**
                 * README - type
                 * @type {Window.Swiper|Swiper}
                 * type 可选参数 normal | gradient
                 * normal -> 普通的轮播图 -> [首页的banner,]
                 * gradient -> 渐变消失 -> [下载页的banner,]
                 */

                //console.log(type);
                if(type == 'normal') {
                    //option 不变
                    angular.extend(options,{
                        effect: 'coverflow'
                    });
                } else if(type == 'gradient'){
                    angular.extend(options,{
                        //effect: 'coverflow',
                        speed:1200,
                        effect: 'cube',
                        grabCursor: true,
                        cube: {
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 30,
                            shadowScale: 0.94,
                            parallax:true
                        }
                    });
                }

                var swiper = new Swiper('.swiper-container', options);
                // var interval,
                //     i = 0,
                //     inLength = $('.carousel-inner div').length;

                // slideRun();

                // function slideRun () {
                //     interval = setInterval(slide, 2000);
                // }

                // $('.carousel').mouseover(function() {
                //     clearInterval(interval);
                // });
                // $('.carousel').mouseout(function() {
                //     interval = setInterval(slide, 2000);
                // });

                // function slide () {
                //     $('.carousel-inner div').eq(i).addClass('active').siblings().removeClass('active');
                //     $('.carousel-indicators li').eq(i).addClass('current').siblings().removeClass('current');
                //     i++;
                //     if (i >= inLength) {
                //         i = 0;
                //     }
                // }

                // $('.carousel-indicators li').mouseover(function() {
                //     clearInterval(interval);

                //     var id = $(this).index();
                //     console.info(id);

                //     $('.carousel-inner div').eq(id).addClass('active').siblings().removeClass('active');
                //     $('.carousel-indicators li').eq(id).addClass('current').siblings().removeClass('current');
                // });
 
            }
        }
    }
})();