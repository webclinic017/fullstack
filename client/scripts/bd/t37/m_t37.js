;
(function () {
    twH5Loader('img_detect_container', 4, allLoaded)
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
                // console.log(effect);
                setTimeout(function () {
                    $(".section" + index).find('.registerNow').addClass('animated ' + effect)
                }, 500)
            }

            function activeWater(index) {
                if (isIOS()) {
                    $('.section' + index).ripples({
                        resolution: 150,
                        dropRadius: 10, //px
                        perturbance: 0.02,
                    });
                }
            }

            function removeWater(index) {
                $('.section' + index).ripples('destroy')
            }

            function showWater(index) {
                $('.section' + index).ripples('plau')
            }

            function hideWater(index) {
                $('.section' + index).ripples('pause')
            }

            function fadeCvs(index, callback) {
                $('.section' + index).find('canvas').fadeOut('slow', function () {
                    callback && callback();
                });
            }

            function openLay() {
                layer.open({
                    shadeClose: true,
                    content: $("#layer_contentBox").html(),
                    style: 'padding:0;border-radius:0;color:#fff;background:rgba(0,0,0,0);'
                });
                $('.layui-m-layercont').css('padding', 0)
                $.fn.fullpage.setAllowScrolling(false)
            }

            $('#dowebok').fullpage({
                navigation: true,
                navigationColor: "#fbd71f",
                navigationPosition: "left",
                verticalCentered: false,
                afterRender: function () {
                    $('.matters_btn').delay(700).fadeIn(800);
                    /*页面按钮事件*/
                    activeWater(1);
                    $(document.body).on("tap", function (e) {
                        var action = $(e.target).attr("data-action");
                        var targetClass = $(e.target).attr("class");

                        if (targetClass == "layui-m-layershade") {
                            layer.closeAll();
                            $.fn.fullpage.setAllowScrolling(true)
                        }
                        if (action == "matters") {
                            openLay()
                            return false;
                        }
                        if (action == 'registerNow') {
                            $.fn.fullpage.moveTo(5);
                        }
                        if (/activeWater/gi.test(action)) {
                            var index = action.split('-')[1];
                            activeWater(index);
                        }
                    });

                    $(".lake_layout").fadeIn(0);
                    // 阻止安卓键盘弹出
                    if (!isIOS() || isAndriod()) {
                        window.removeEventListener('resize');
                        $(window).on('resize', function () {
                            var cvs = document.createElement('canvas');
                            cvs.width = 0;
                            cvs.height = 0;
                            document.appendChild(cvs);
                        });
                    } else {
                        window.removeEventListener('resize');
                    }
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
                        activeWater(1);
                    }
                },
                onLeave: function (index, direction) {
                    setTimeout(function () {
                        removeWater(index);
                    }, 1000);
                    removeEff(index);
                    hideBtn(index);
                }
            });
        })
    }
}());