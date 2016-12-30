;
(function () {
    'use strict';
    /*loading*/
    layer.open({type: 2, shadeClose: false});

    $(function () {

        if(wx){
            // wxShareConfig({
            //     title: '老虎外汇 年终钜献',
            //     subTitle: '老虎外汇 年终钜献',
            //     shareLink: window.location.href,
            //     desc: '新用户注册可得200美金，交易可提取！',
            //     img: window.location.origin + '/activity/logo.png',
            //     trackPage: window.location.pathname.replace(/\//gi,''),
            //     debug: false
            // });

            //-------- t33_sub ------

            wxShareConfig({
                title: '金鸡贺岁 吉兆满盈',
                subTitle: '金鸡贺岁 吉兆满盈',
                shareLink: window.location.href,
                desc: '老虎外汇壕礼大放送，注册送200美金，交易可提现！',
                img: window.location.origin + '/activity/logo.png',
                trackPage: window.location.pathname.replace(/\//gi,''),
                debug: false
            });
        } else {
            console.log("微信配置错误")
        }

        function activePage1() {
            $('.section1 .matters_btn').fadeIn(500);
            $('.section1 .btn1').delay(100).fadeIn(500);
            $('.section1 .btn2').delay(300).fadeIn(500);
            $('.section1 .registerNow1').delay(500).slideDown(500);
        }

        function offsetAction(index){
            /*debug*/
            if(!isIOS() && isInTiger()){
                callNative({
                    type:'offset',
                    offset: index - 1
                })
            }
        }

        activePage1();

        function showBtn(index) {
            $(".registerNow" + index).fadeIn(300)
        }

        function hideBtn(index) {
            $(".registerNow" + index).fadeOut(500)
        }

        $('#dowebok').fullpage({
            navigation: true,
            navigationColor: "#fbd71f",
            navigationPosition: "right",
            sectionsColor: ['#ccc', '#121212', '#fff', '#0e0e0e', '#d850c'],
            verticalCentered: false,
            easing: 'easeOutBack',
            afterRender: function () {
                layer.closeAll();
                $(".m_t33_layout").fadeIn(50);

                /*页面按钮事件*/
                ;
                (function () {
                    $(document.body).on("tap", function (e) {
                        var action = $(e.target).attr("data-action");

                        function openLay(which) {
                            layer.open({
                                shadeClose: false,
                                content: $("#layer_contentBox").html(),
                                style: 'border:2px solid #e2aa6e; background-color:#d31b13; color:#fff;'
                            });
                            $(which).show().siblings().hide().siblings(".close_layer").show();
                            $.fn.fullpage.setAllowScrolling(false)
                        }

                        if (action == "close") {
                            layer.closeAll();
                            $.fn.fullpage.setAllowScrolling(true)
                        }
                        if (action == "matters") {
                            openLay(".matters_con")
                        } else if (action == "detail1") {
                            openLay(".detail1_con")
                        } else if (action == "detail2") {
                            openLay(".detail2_con")
                        } else if (action == "registerNow") {
                            $.fn.fullpage.moveTo(4);
                        }
                    });
                }());

                window.removeEventListener('resize');
            },
            afterLoad: function (anchorLink, index) {
                showBtn(index);
                if (index == 1) {
                    activePage1();
                    showBtn(1);

                }
                if (index == 2) {
                    $('.section2 h2 .five').addClass('active');
                    $('.section2 .five_ways .ways').addClass('active');
                    $('.section2 .five_ways .ways_1 .description').delay(500).fadeIn(500);
                    $('.section2 .five_ways .ways_2 .description').delay(700).fadeIn(500);
                    $('.section2 .five_ways .ways_3 .description').delay(900).fadeIn(500);
                    $('.section2 .five_ways .ways_4 .description').delay(1100).fadeIn(500);
                    $('.section2 .five_ways .ways_5 .description').delay(1300).fadeIn(500);
                    offsetAction(index)
                }
                if (index == 3) {
                    $(".fresh_tip").each(function (index, item) {
                        var height = $(item).height();
                        setTimeout(function () {
                            $(item).css({
                                top: index == 0 ? '15%' : 15 + index * 20 + '%'
                            });
                        }, index * 80);
                    });
                    offsetAction(index)
                }
                if (index == 4) {
                    $('input').blur();
                    offsetAction(index)
                }
            },
            onLeave: function (index, direction) {
                hideBtn(index);
                if (index == 1) {
                    activePage1();
                }
                if (index == 2) {
                    $('.section2 .five_ways .ways').removeClass('active');
                    $('.section2 .five_ways .ways .description').fadeOut();
                    $('.section2 h2 .five').removeClass('active');
                }
                if (index == 3) {

                }
                if (index == 4) {

                }
            }
        });
    });
}());