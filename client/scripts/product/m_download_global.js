; (function () {
    'use strict';
    /*loading*/
    layer.open({ type: 2, shadeClose: false });

    $(function () {
        // ; (function () {
        //     /*根据当前地址和操作系统更改下载链接*/
        //     var hrefIOS = '/',
        //         hrefAn = 'https://www.tigerwit.com/downloads/apk/tigerwit_v2.2.1.apk';
        //     if (window.location.href.indexOf("download_t") != -1) {
        //         var platform = 'Android';
        //         if (isIOS()) {
        //             $(".download_btn").attr("href", hrefIOS);
        //             platform = 'IOS'
        //         } else {
        //             $(".download_btn").attr("href", hrefAn);
        //         }
        //     }
        // }());

        (function () {
            $(".download_btn").on('touchend', function (e) {
                sa.track('DI_click', {
                    page: window.location.href
                });
                // console.log($(this).attr('data-url'))
                // window.location.href = $(this).attr('data-url');
            })
        }());

        function activePage1() {
            $('.section1 p').addClass("active");
        }
        activePage1();

        $("#next").on("touchend", function () {
            $.fn.fullpage.moveSectionDown();
        });
        // 回到电脑版，写入一个cookie
        $(".turn_pc").on("touchend", function () {
            document.cookie = "turnPC=true";
        });

        // function show_btn(index) {
        //     $("#download_btn" + index).delay(500).fadeIn(500);
        // }
        // function hide_btn(index) {
        //     $("#download_btn" + index).fadeOut(500);
        // }
        $(".more").on("click",'span', function(){
            $('.more').show();
            $('.limit_line').hide();
            $(this).parent().parent('li').children('.content').children('.limit_line').show();
            $(this).parent().hide();
        })
        $('#dowebok_global').fullpage({
            navigation: true,
            navigationColor: "#fbd71f",
            navigationPosition: "right",
            sectionsColor: ['#121212', '#fff', '#fff', '#FEE900', '#fff', '#212C3F', '#fff'],
            verticalCentered: false,
            afterRender: function () {
                layer.closeAll();
                $(".m_download_layout").css("display", "block")

            },
            afterLoad: function (anchorLink, index) {
                offsetAction(index);
                if (index == 1) {
                    activePage1();
                }
                if (index == 2) {
                    $('.section2 h5').addClass("active");
                    $('.section2 .line1').addClass("active");
                }
                if (index == 3) {
                    $('.section3 h5').addClass("active");
                    $('.section3 .line1').addClass("active");
                }
                if (index == 4) {
                    $('.section4 .line1').addClass("active");
                    $('.section4 .line2').addClass("active");
                    $('.section4 h5').addClass("active");
                }
                if (index == 5) {
                    $('.section5 h5').addClass("active");
                }
                if (index == 6) {
                    $('.section6').addClass("_active");
                    $('.section6 .line1').addClass("active");
                    $('.section6 h5').addClass("active");
                }
                if (index == 7) {
                    $('.section7 .line1').addClass("active");
                    $('.section7 h5').addClass("active");
                }
            },
            onLeave: function (index, direction) {
                if (index == '1') {
                    setTimeout(function () {
                        $('.section1 p').removeClass("active");
                    }, 500)
                }
                if (index == '2') {
                    setTimeout(function () {
                        $('.section2 h5').removeClass("active");
                        $('.section2 .line1').removeClass("active");
                    }, 1000)
                }
                if (index == '3') {
                    setTimeout(function () {
                        $('.section3 h5').removeClass("active");
                        $('.section3 .line1').removeClass("active");
                    }, 1000)
                }
                if (index == '4') {
                    setTimeout(function () {
                        $('.section4 .line1').removeClass("active");
                        $('.section4 .line2').removeClass("active");
                        $('.section4 h5').removeClass("active");
                    }, 1000)
                }
                if (index == 5) {
                    setTimeout(function () {
                        $('.section5 h5').removeClass("active");
                    }, 1000);
                }
                if (index == '6') {
                    setTimeout(function () {
                        $('.section6').removeClass("_active");
                        $('.section6 .line1').removeClass("active");
                        $('.section6 h5').removeClass("active");
                    }, 1000)
                }
                if (index == '7') {
                    setTimeout(function () {
                        $('.section7 .line1').removeClass("active");
                        $('.section7 h5').removeClass("active");
                    }, 1000)
                }
            }
        });
    });

}());