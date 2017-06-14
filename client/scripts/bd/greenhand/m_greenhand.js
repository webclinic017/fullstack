;
(function () {
    twH5Loader('img_detect_container', 1, allLoaded)
    function allLoaded() {
        $(function () {
            // 微信分享配置
            if (wx) {
                wxShareConfig({
                    title: '老虎外汇多重礼，700美金砸向你！',
                    subTitle: '老虎外汇多重礼，700美金砸向你！',
                    shareLink: window.location.href,
                    desc: '【老虎外汇】缤纷夏日迎新季，开户即送$700豪礼红包，快来注册吧！',
                    img: window.location.origin + '/activity/logo.png',
                    trackPage: window.location.pathname.replace(/\//gi, ''),
                    debug: false
                });
            } else {
                console.log("微信配置错误")
            }

            // 兼容安卓键盘弹出
            if (!isIOS() || isAndriod()) {
                var focusFlag = false;
                var $element = $('.section5 input');
                var initClientHeight = getClientHeight();
                var focusClientHeight = null;
                var $reg_box = $('.redbag_regBox');

                $element.focus(function () {
                    focusFlag = true;
                    focusClientHeight = getClientHeight();
                    $reg_box.css({
                        marginTop: '15%'
                    });
                });
                $element.blur(function () {
                    focusFlag = false;
                    $reg_box.css({
                        marginTop: '54%'
                    });
                });

                window.addEventListener('resize', function () {
                    // console.log(getClientHeight());
                    setTimeout(function () {
                        if (getClientHeight() == focusClientHeight) {
                            $reg_box.css({
                                marginTop: '54%'
                            });
                        } else {
                            $reg_box.css({
                                marginTop: '15%'
                            });
                        }
                    }, 10);
                })
            }

            $('.slide_arrow2').on('tap', function () {
                $.fn.fullpage.moveTo(5);
            })


            function activePage(index) {
                var sec = $('.section' + index);
                sec.find('.text-trans').addClass('active');
                sec.find('.page_pic').addClass('active');
                if (index == 5) {
                    setTimeout(function () {
                        sec.find('.page_pic0').addClass('active');
                    }, 1000);
                    setTimeout(function () {
                        sec.find('.page_pic1').addClass('active');
                    }, 2000);
                }

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
            }

            function fadePage(index) {
                var sec = $('.section' + index);
                var textTrans = sec.find('.text-trans');
                var pagePic = sec.find('.page_pic');
                textTrans.addClass('fade');
                pagePic.addClass('fade');

                setTimeout(function () {
                    sec.find('.page_pic0').removeClass('active').removeClass('fade');
                    sec.find('.page_pic1').removeClass('active').removeClass('fade');
                    textTrans.removeClass('active').removeClass('fade');
                    pagePic.removeClass('active').removeClass('fade');
                }, 300);
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
                    $.fn.fullpage.moveTo(6);
                    // 阻止安卓键盘弹出
                    if (!isIOS() || isAndriod()) {
                        window.removeEventListener('resize');
                    } else {
                        window.removeEventListener('resize');
                    }
                },
                afterLoad: function (anchorLink, index) {
                    // debug 安卓翻页
                    offsetAction(index)
                    activePage(index);
                },
                onLeave: function (index, direction) {
                    fadePage(index)
                    setTimeout(function () {
                        activePage(index + 1);
                    }, 200);
                }
            });
        })
    }
}());