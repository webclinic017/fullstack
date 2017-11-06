;
(function () {
    twH5Loader('img_detect_container', 3, allLoaded)

    function allLoaded() {
        $(function () {
            // 微信分享配置
            
            if (wx && isTigerCo()) {
                wxShareConfig({
                    title: '外汇超级行情来袭，老虎外汇送1000美金给你',
                    subTitle: '外汇超级行情来袭，老虎外汇送1000美金给你',
                    shareLink: window.location.href,
                    desc: '外汇投资选老虎，人人都是投资高手，一键跟单简单粗暴，老虎高手带你轻松赚钱！！',
                    img: window.location.origin + '/activity/logo.png',
                    trackPage: window.location.pathname.replace(/\//gi, ''),
                    debug: false
                });
            } else {
                console.log("微信配置错误")
            }

            // 兼容安卓键盘弹出BUG
            debugAndroidKey({
                focusSelector: '.section3 input',
                ctrlBox: '.submit_form_box',
                focusCss: {
                    position: 'absolute',
                    top: '20%'
                },
                focusFn: function () {
                    //   $('.connect_us').hide();
                },
                blurCss: {
                    marginTop: '1.5rem',
                    position: 'initial'
                },
                blurFn: function () {
                    //   $('.connect_us').show();
                },
            })

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
                }, 300)
            }

            $('#dowebok').fullpage({
                navigation: true,
                navigationColor: "#fbd71f",
                navigationPosition: "left",
                //sectionsColor: ['#ccc', '#121212', '#fff', '#000', '#e0e0e0'],
                verticalCentered: false,
                afterRender: function () {
                    $('.matters_btn').delay(700).fadeIn(800);
                    function openLay(which) {
                        layer.open({
                            shadeClose: true,
                            content: $(which).html(),
                            style: 'padding:0;width:75%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
                        });
                        $('.layui-m-layercont').css('padding', 0)
                        $.fn.fullpage.setAllowScrolling(false)
                    }
                    /*页面按钮事件*/
                    $(document.body).on("tap", function (e) {
                        var action = $(e.target).attr("data-action");
                        var targetClass = $(e.target).attr("class");
                        if (targetClass == "layui-m-layershade") {
                            layer.closeAll();
                            $.fn.fullpage.setAllowScrolling(true)
                        }
                        if (action == "matters") {
                            setTimeout(function(){
                                openLay("#layer_contentBox")
                            },10)
                        }
                        if (action == "rule1") {
                            setTimeout(function(){
                                openLay("#layer_contentRule1")
                            },10)
                        }
                        if (action == "rule2") {
                            setTimeout(function(){
                                openLay("#layer_contentRule2")
                            },10)
                        }
                        if (action == 'registerNow') {
                            $.fn.fullpage.moveTo(3);
                        }
                    });

                    $(".lake_layout").fadeIn(0);
                },
                afterLoad: function (anchorLink, index) {

                    setTimeout(function () {
                        addRegEff(index);
                    }, index == 1 ? 200 : 900);
                    // debug 安卓翻页
                    offsetAction(index)
                    
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

    $(document).ready(function(){
        $('.open_tiger').click(function(e){
            console.log(e.target);
        });
    });
}());