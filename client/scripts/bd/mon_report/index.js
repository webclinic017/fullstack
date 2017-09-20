;
(function () {
    twH5Loader('img_detect_container', 4, allLoaded)
    function allLoaded() {
        $(function () {
            // 微信分享配置
            if (wx) {
                wxShareConfig({
                    title: '【老虎带你炒外汇，轻松赚钱超酸爽】',
                    subTitle: '【老虎带你炒外汇，轻松赚钱超酸爽】',
                    shareLink: window.location.href,
                    desc: '外汇投资选老虎，人人都是投资高手，一键跟单简单粗暴，老虎高手带你轻松赚钱！！',
                    img: window.location.origin + '/activity/logo.png',
                    trackPage: window.location.pathname.replace(/\//gi, ''),
                    debug: false
                });
            } else {
                console.log("微信配置错误")
            }

            $('.slide_arrow2').on('tap', function () {
                $.fn.fullpage.moveTo(6);
            })

            function activePage(index) {
                var sec = $('.section' + index);
                // sec.find('.text-trans').addClass('active');
                sec.addClass('act');
                sec.find('.page_pic').addClass('active');
                if (index == 5) {
                    setTimeout(function () {
                        sec.find('.page_pic0').addClass('active');
                        sec.find('.page_pic1').addClass('active');
                    }, 800);
                }
            }

            function fadePage(index) {
                var sec = $('.section' + index);
                var textTrans = sec.find('.text-trans');
                var pagePic = sec.find('.page_pic');
                // sec.addClass('fade');
                // sec.addClass('fade');

                setTimeout(function () {
                    sec.find('.page_pic0').removeClass('active');
                    sec.find('.page_pic1').removeClass('active');
                    // textTrans.removeClass('active').removeClass('fade');
                    // pagePic.removeClass('active').removeClass('fade');
                    sec.removeClass('act');
                }, 500);
            }

            $('#dowebok').fullpage({
                navigation: true,
                navigationColor: "#fbd71f",
                navigationPosition: "left",
                verticalCentered: false,
                afterRender: function () {
                    setTimeout(function () {
                        activePage(1);
                    }, 200);
                    $.fn.fullpage.moveTo(2);
                },
                afterLoad: function (anchorLink, index) {
                    // debug 安卓翻页
                    offsetAction(index);
                    // activePage(index);
                    if (index == 6) {
                        $('.slide_arrow2').hide();
                        $('.connect_us').css({
                            right: '40%',
                            bottom: '18%'
                        });
                        $('.risk_tip').addClass('active');
                    } else {
                        $('.slide_arrow2').show();
                        $('.connect_us').css({
                            right: '4%',
                            bottom: '2%'
                        });
                    }

                    activePage(index)
                },
                onLeave: function (index, nextIndex, direction) {
                    // console.log(arguments);
                    fadePage(index);
                    if (direction == 'up') {
                        setTimeout(function () {
                            activePage(index - 1)
                        }, 200);
                    }
                    else if (direction == 'down') {
                        setTimeout(function () {
                            activePage(index + 1)
                        }, 200);
                    }
                    if (index == 6) {
                        $('.connect_us').css({
                            right: '4%',
                            bottom: '2%'
                        });
                    }
                }
            });
        })
    }
}());