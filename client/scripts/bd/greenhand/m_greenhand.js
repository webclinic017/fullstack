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

            // 兼容安卓键盘弹出BUG
            debugAndroidKey({
                focusSelector: '.section6 input',
                ctrlBox: '.greenhand_regBox',
                focusCss: {
                    top: '10%'
                },
                focusFn: function () {
                    $('.connect_us').hide();
                },
                blurCss: {
                    top: '41.29%'
                },
                blurFn: function () {
                    $('.connect_us').show();
                },
            })

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