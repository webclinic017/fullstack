;
(function () {
    'use strict';
    /*loading*/
    layer.open({type: 2, shadeClose: false});

    $(function () {
        function activePage1() {
            $('.section1 .matters_btn').fadeIn(500);
            $('.section1 .btn1').delay(100).fadeIn(500);
            $('.section1 .btn2').delay(300).fadeIn(500);
            $('.section1 .registerNow1').delay(500).fadeIn(500);
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
                    $(document.body).on("touchend", function (e) {
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
                }
                if (index == 4) {
                    $('input').blur();
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