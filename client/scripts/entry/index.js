; (function () {
    // var swiper = new Swiper('.swiper-container', {
    //     pagination: {
    //         el: '.swiper-pagination',
    //         dynamicBullets: true
    //     },
    //     speed: 1000,
    //     autoplay: {
    //         delay: 5000,
    //         stopOnLastSlide: false,
    //         disableOnInteraction: true,
    //     },
    //     loop: true,
    //     effect: 'fade'
    // });
    $(function () {
        // 设置语言
        $.cookie('lang', 'en');
        new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 4000,
            speed: 1600,
            loop: true,
            effect: 'fade'
        });

        var $cont = document.querySelector('.cont');
        console.log($cont)
        var $elsArr = [].slice.call(document.querySelectorAll('.el'));
        var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

        setTimeout(function () {
            $cont.classList.remove('s--inactive');
        }, 200);

        $elsArr.forEach(function ($el) {
            $el.addEventListener('click', function () {
                if (this.classList.contains('s--active')) return;
                $cont.classList.add('s--el-active');
                this.classList.add('s--active');
            });
        });

        $closeBtnsArr.forEach(function ($btn) {
            $btn.addEventListener('click', function (e) {
                e.stopPropagation();
                $cont.classList.remove('s--el-active');
                document.querySelector('.el.s--active').classList.remove('s--active');
            });
        });

        var oHref = {
            www: {
                fca: 'https://www.tigerwit.co.uk',
                scb: '/cn',
                ib: 'https://global.tigerwit.com/bd/brand_proxy'
            },
            demo: {
                fca: 'https://demo.tigerwit.co.uk',
                scb: '/cn',
                ib: 'https://globaldemo.tigerwit.com/bd/brand_proxy',
            }
        }
        var domain = 'demo'
        if(location.host == 'www.tigerwit.com'){
            domain = 'www'
        }
        $('.btn_FCA').click(function(){
            window.location.href = oHref[domain].fca
        })
        $('.btn_SCB').click(function(){
            window.location.href = oHref[domain].scb
        })
        $('.btn_IB').click(function(){
            window.location.href = oHref[domain].ib
        })
        $('.btn_app_link').click(function(){
            layer.open({
                type: 1,
                title: '',
                closeBtn: 0,
                shadeClose: true,
                shade: 0.5,
                area: ['280px', '204px'],
                content: $('.layer_contentBox').html()
            });
        })
    })
}())

