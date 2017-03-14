;
(function () {
    $(function () {
        'use strict';
        twH5Loader('img_detect_container', 4, allLoaded)
        //allLoaded();
        function allLoaded() {
            $(function () {
                // 微信分享配置
                if (wx) {
                    wxShareConfig({
                        title: '老虎外汇多重礼，700美金砸向你！',
                        subTitle: '老虎外汇多重礼，700美金砸向你！',
                        shareLink: window.location.href,
                        desc: '注册老虎外汇，即享700美金大礼，你还在犹豫什么，马上行动起来！',
                        img: window.location.origin + '/activity/logo.png',
                        trackPage: window.location.pathname.replace(/\//gi, ''),
                        debug: false
                    });
                } else {
                    console.log("微信配置错误")
                }

                // 兼容安卓键盘弹出
                if (!isIOS()) {
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
                            marginTop: '60.5%'
                        });
                    });

                    window.addEventListener('resize', function () {
                        // console.log(getClientHeight());
                        setTimeout(function () {
                            if (getClientHeight() == focusClientHeight) {
                                $reg_box.css({
                                    marginTop: '60.5%'
                                });
                            } else {
                                $reg_box.css({
                                    marginTop: '15%'
                                });
                            }
                        }, 10);
                    })
                }

                function removeEff(index, except) {
                    var hasEff = $('.section' + index + ' .animated');

                    hasEff.each(function (index, item) {
                        var classNames = $(item).attr('class').split(' ');
                        var effName = '';
                        var subIndex = null;
                        $.each(classNames, function (index, item) {
                            if (item == 'animated') {
                                subIndex = index;
                            }
                            effName = classNames[subIndex + 1];
                        });
                        if (classNames.indexOf(except) < 0) {
                            $(item).removeClass('animated');
                            $(item).removeClass(effName);
                        }
                    });
                }

                function showBtn(index) {
                    $(".registerNow" + index).fadeIn(300)
                }

                function hideBtn(index) {
                    $(".registerNow" + index).fadeOut(500)
                }

                function addRegEff(index) {
                    var effects = 'rotateIn_jello_fadeIn_flipInX_lightSpeedIn'.split('_');
                    var effect = effects[parseInt(Math.random() * effects.length)];
                    console.log(effect);
                    setTimeout(function () {
                        $(".section" + index).find('.registerNow').addClass('animated ' + effect)
                    }, 500)
                }

                $('#dowebok').fullpage({
                    navigation: true,
                    navigationColor: "#fbd71f",
                    navigationPosition: "left",
                    sectionsColor: ['#ccc', '#121212', '#fff', '#000', '#e0e0e0'],
                    verticalCentered: false,
                    afterRender: function () {
                        $('.matters_btn').delay(700).fadeIn(800);
                        /*页面按钮事件*/
                        $(document.body).on("tap", function (e) {
                            var action = $(e.target).attr("data-action");
                            var targetClass = $(e.target).attr("class");
                            function openLay(which) {
                                layer.open({
                                    shadeClose: true,
                                    content: $("#layer_contentBox").html(),
                                    style: 'padding:0;width:75%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
                                });
                                $('.layui-m-layercont').css('padding',0)
                                $.fn.fullpage.setAllowScrolling(false)
                            }

                            if (targetClass == "layui-m-layershade") {
                                layer.closeAll();
                                $.fn.fullpage.setAllowScrolling(true)
                            }
                            if (action == "matters") {
                                openLay()
                            }
                            if (action == 'registerNow') {
                                $.fn.fullpage.moveTo(5);
                            }
                        });

                        $(".lake_layout").fadeIn(0);
                        // 阻止安卓键盘弹出
                        window.removeEventListener('resize');
                    },
                    afterLoad: function (anchorLink, index) {
                        setTimeout(function () {
                            addRegEff(index);
                        }, index == 1 ? 200 : 900);
                        // debug 安卓翻页
                        offsetAction(index)
                        //showBtn(index);
                        if (index == 1) {
                            $('.matters_btn').delay(700).fadeIn();
                        }

                        if (index == 2) {
                            //offsetAction(index);
                            $('.section2 .four_ways').fadeIn(1000);
                            $('.section2 .line_title').find('h2').addClass('active');
                            $('.section2 .line_title').find('p').addClass('active');
                            $('.section2').find('.line').addClass('active');
                            $('.section2').find('.common_ways').addClass('active');
                            $('.section2 .common_ways').each(function (index, item) {
                                setTimeout(function () {
                                    $(item).fadeIn(0)
                                    $(item).addClass('animated flipInX')
                                }, (index + 1) * 220);
                            })
                        }

                        if (index == 3) {
                            $('.section3').find('.sec3_ways').delay(200).fadeIn();
                            $('.section3').find('.sec3_ways').addClass('animated zoomIn');
                            $('.section3').find('.sec3_ways__box').addClass('animated rollIn');
                        }

                        if (index == 4) {
                            $('.section4 .line_title').find('h2').addClass('active');
                            $('.section4 .line_title').find('p').addClass('active');
                            $('.section4').find('.line').addClass('active');
                        }
                    },
                    onLeave: function (index, direction) {
                        if (index != 3) {
                            removeEff(index);
                        }
                        hideBtn(index);
                    }
                });
            })
        }
    })
}());