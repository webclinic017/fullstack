;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .service('previewImage', previewImage);

    previewImage.$inject = ['$http', '$window'];

    function previewImage($http, $window) {
        return {
            toLargeImage: toLargeImage
        }

        /*
         *  ev          操作对象
         *  targetUrl   图片地址
         */
        function toLargeImage (ev, targetUrl) {
            // console.log($(window).height());
            var wHeight = $(window).height();
            var offsetTop = $(ev.target).offset().top - $(window).scrollTop() + $(ev.target).height()/2;
            var offsetLeft = $(ev.target).offset().left - $(window).scrollLeft() + $(ev.target).width()/2;
            var div = '<div class="img_modal_wrapper"><div class="img_modal" style="top: '+offsetTop+'px;left: '+offsetLeft+'px;"><img src="'+targetUrl+'"></div></div>';

            $("body").append(div);

            console.log($('.img_modal img')[0].naturalWidth,$('.img_modal img')[0].naturalHeight);

            setTimeout(function () {
                $(".img_modal").css({
                    height: '70%',
                    top: '15%',
                    left: '50%',
                    marginLeft: -$('.img_modal img')[0].naturalWidth*wHeight*0.7/$('.img_modal img')[0].naturalHeight/2
                });
            });

            $(".img_modal img").on('click', function (e) {
                return false;
            });

            $(".img_modal_wrapper").on('click', function (e) {
                var _this = this;

                $(".img_modal").css({
                    height: 0,
                    top: offsetTop,
                    left: offsetLeft,
                    marginLeft: 0
                });

                setTimeout(function () {
                    $(_this).remove();
                }, 300);

                return false;
            })
        }   
    }
})();