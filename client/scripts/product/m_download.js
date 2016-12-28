; (function () {
    'use strict';
    /*loading*/
    layer.open({ type: 2, shadeClose: false });

    $(function () {
        ; (function () {
            /*根据当前地址和操作系统更改下载链接*/
            var hrefIOS = '/',
                hrefAn = 'https://www.tigerwit.com/downloads/apk/tigerwit_v2.2.1.apk';
            if (window.location.href.indexOf("download_t") != -1) {
                var platform = 'Android';
                if (isIOS()) {
                    $(".download_btn").attr("href", hrefIOS);
                    platform = 'IOS'
                } else {
                    $(".download_btn").attr("href", hrefAn);
                }

                $(".download_btn").on('touchend', function () {
                    _czc.push(["_trackEvent", "PID=JRTT&platform=" + platform, "下载APP"]);
                });
            }
        } ());

        function activePage1() {
            $('.section1').addClass("_active");
            $('.section1 h5 span').addClass("active");
            $('.section1 p').addClass("active");
        }
        activePage1();

        $("#next").on("touchend", function () {
            $.fn.fullpage.moveSectionDown();
        });

        function show_btn(index) {
            $("#download_btn" + index).delay(500).fadeIn(500);
        }
        function hide_btn(index) {
            $("#download_btn" + index).fadeOut(500);
        }

        $('#dowebok').fullpage({
            navigation: true,
            navigationColor: "#fbd71f",
            navigationPosition: "right",
            sectionsColor: ['#121212', '#121212', '#fbd71f', '#0e0e0e', '#000000'],
            verticalCentered: false,
            afterRender: function () {
                layer.closeAll();
                $(".m_download_layout").css("display", "block")
            },
            afterLoad: function (anchorLink, index) {
                if (index == 1) {
                    activePage1();
                }
                if (index == 2) {
                    show_btn(2);
                    $('.section2').addClass("_active");
                    $('.section2 h5').addClass("active");
                    $('.section2 .line1').addClass("active");
                    $('.section2 .line2').addClass("active");
                }
                if (index == 3) {
                    show_btn(3);
                    $('.section3').addClass("_active");
                    $('.section3 h5').addClass("active");
                    $('.section3 p').addClass("active");
                }
                if (index == 4) {
                    show_btn(4);
                    $('.section4').addClass("_active");
                    $('.section4 .img_box').addClass("active");
                    $('.section4 .line1').addClass("active");
                    $('.section4 .line2').addClass("active");
                    $('.section4 .circle').delay(500).fadeIn(500);
                }
                if (index == 5) {
                    $('.section5').addClass("_active");
                    $("#download_btn").addClass("active");
                }
            },
            onLeave: function (index, direction) {
                if (index == '1') {
                    setTimeout(function () {
                        $('.section1').removeClass("_active");
                        $('.section1 h5 span').removeClass("active");
                        $('.section1 p').removeClass("active");
                    }, 500)
                }
                if (index == '2') {
                    hide_btn(2);
                    setTimeout(function () {
                        $('.section2').removeClass("_active");
                        $('.section2 h5').removeClass("active");
                        $('.section2 p').removeClass("active");
                    }, 1000)
                }
                if (index == '3') {
                    setTimeout(function () {
                        $('.section3').removeClass("_active");
                    }, 1000)
                    hide_btn(3)
                }
                if (index == '4') {
                    hide_btn(4);
                    setTimeout(function () {
                        $('.section4').removeClass("_active");
                        $('.section4 .img_box').removeClass("active");
                        $('.section4 .line1').removeClass("active");
                        $('.section4 .line2').removeClass("active");
                        $('.section4 .circle').fadeOut(100);
                    }, 1000)
                }
                if (index == 5) {
                    setTimeout(function () {
                        $('.section5').delay(500).removeClass("_active");
                    }, 1000);
                }
            }
        });
    });

} ());