;
(function () {
    $(function () {
        // 'use strict';
        // var container = document.getElementById('img_detect_container');

        // var imgLoad = imagesLoaded(container, { background: true });

        // var count = 0;

        // var loading_bar = document.getElementById('loading_bar');

        // var loading_text = document.getElementById('loading_text');

        // var load_wrapper = document.getElementById('load_wrapper');

        // imgLoad.on('progress', function (imgLoad, image) {
        //     count++;
        //     var ratio = parseInt(count / 10 * 100) + '%';
        //     loading_bar.style.width = ratio;
        //     $('#loading_text').html('加载中...' + ratio);
        //     console.log('加载中...' + ratio);
        //     if (ratio == '100%') {
        //         $(load_wrapper).delay(100).fadeOut(500);
        //         allLoaded();
        //     }
        // });
        allLoaded()
        function allLoaded() {
            $(function () {
                function activePage1(when) {
                    $('.section1').find('.title').addClass('animated flip');

                    var flags = $('.section1 .five');

                    var flagEff = when ? 'animated flip' : 'animated tada';

                    setTimeout(function () {
                        flags.each(function (index, item) {
                            setTimeout(function () {
                                $(item).addClass(flagEff);
                            }, index * 250);
                        });
                    }, when ? 0 : 1000);
                    showBtn(1);
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

                setTimeout(function () {
                    activePage1();
                }, 500);

                $('.registerNow').on('tap', function (e) {
                    var action = $(e.target).attr("data-action");
                    if (action == "registerNow") {
                        $.fn.fullpage.moveTo(6);
                    }
                })

                $('#dowebok').fullpage({
                    navigation: true,
                    navigationColor: "#fbd71f",
                    navigationPosition: "right",
                    sectionsColor: ['aqua', '#121212', '#fff', '#000', '#e0e0e0'],
                    verticalCentered: false,
                    easing: 'easeInQuart',
                    afterRender: function () {
                        $(".lake_layout").fadeIn(0);
                    },
                    afterLoad: function (anchorLink, index) {
                        showBtn(index);
                        if (index == 1) {
                            activePage1(index);
                        }

                        if (index == 2) {
                            $('.section2').find('.text_ban').addClass('animated bounceIn')
                        }

                        if (index == 3) {
                            $('.section3').find('.text_ban').addClass('animated bounce');
                        }

                        if (index == 4) {
                            $('.section4').find('.text_ban').addClass('animated fadeInDown');
                        }

                        if (index == 5) {
                            $('.section5').find('.text_ban').addClass('animated zoomInDown');
                            $('input').focus(function (e) {
                                return false;
                            });
                        }
                    },
                    onLeave: function (index, direction) {
                        hideBtn(index);
                        removeEff(index, (index == 1 ? 'title' : null));
                    }
                });
            })
        }
    })
}());