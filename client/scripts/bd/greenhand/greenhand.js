(function () {
    $(document).ready(function () {
        $('.swiper-container').height(window.innerHeight - 70)
        var mySwiper = new Swiper('.swiper-container', {
            speed: 600,
            loop: true,    //可选选项，开启循环
            pagination: '.swiper-pagination',
            paginationClickable: true,
            keyboardControl: true,
            mousewheelControl: true,
            parallax:true,
            onSlideChangeStart: function (swiper) {
                // console.log('onslideChangeStart', swiper);
                if(swiper.activeIndex == 6){
                    $('.swiper-pagination').fadeOut(250);
                } else {
                    $('.swiper-pagination').fadeIn(250);
                }
            }
        })
        // mySwiper.slideTo(5, 300, false);//切换到第一个slide，速度为1秒
    });
}());