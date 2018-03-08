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
            var wWidth = $(window).width();
            var offsetTop = $(ev.target).offset().top - $(window).scrollTop() + $(ev.target).height()/2;
            var offsetLeft = $(ev.target).offset().left - $(window).scrollLeft() + $(ev.target).width()/2;
            var div = '<div class="img_modal_wrapper"><div class="img_modal" style="top: '+offsetTop+'px;left: '+offsetLeft+'px;"><img src="'+targetUrl+'"></div></div>';

            $("body").append(div);

            $(".img_modal img").load(function () {
                // console.log($('.img_modal img')[0].naturalWidth,$('.img_modal img')[0].naturalHeight);
                var wdS = "auto";
                var wdE = "auto";
                if ($('.img_modal img')[0].naturalWidth*wHeight*0.7/$('.img_modal img')[0].naturalHeight > wWidth*0.8) {
                    $('.img_modal').width(0);
                    $('.img_modal img').width("100%");
                    var mg = -wWidth*0.8/2;
                    wdS = "80%";
                    wdE = "0%";
                } else {
                   var mg = -$('.img_modal img')[0].naturalWidth*wHeight*0.7/$('.img_modal img')[0].naturalHeight/2;
                }

                setTimeout(function () {
                    $(".img_modal").css({
                        width: wdS,
                        height: '70%',
                        top: '15%',
                        left: '50%',
                        marginLeft: mg
                    });
                });

                $(".img_modal img").on('click', function (e) {
                    return false;
                });

                $(".img_modal_wrapper").on('click', function (e) {
                    var _this = this;

                    $(".img_modal").css({
                        width: wdE,
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
            });
        }   
    }
})();