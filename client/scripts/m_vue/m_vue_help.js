if ($(".m_vue").attr("data-page") === "help") {
    var bindingApp = new Vue({
        el: '#m_vue_help',
        ready: function () {
            var TRIGGLE_EVENT = 'click';
            var HELP_ORIGIN = window.location.origin + '/m/wap/help/';

            function getAction(e) {
                return $(e.currentTarget).attr('data-action');
            }

            function openUrlInNative(url) {
                url = HELP_ORIGIN + url
                console.log(url);
                if (isInTiger()) {
                    callNative({
                        type: "openUrl",
                        url: url
                    });
                } else {
                    window.location.href = url;
                }
            }

            function animate(target, callback) {
                $(target).addClass('active');
                setTimeout(function () {
                    $(target).removeClass('active');
                    callback && callback();
                }, 400)
            }

            var $mainTitle = $('.m_vue_nav > li');
            $('.toggleSubTitle').on(TRIGGLE_EVENT, function (e) {
                var $curTg = $(e.currentTarget).parent();

                $.each($mainTitle, function (index, item) {
                    $(item)
                        .find('.m_vue_nav__sub').slideUp(500).removeClass('active').end()
                        .find('.m_vue_nav__enter').removeClass('active');
                });

                if (getAction(e) === 'toggleSubTitle') {
                    $curTg
                        .find('.m_vue_nav__sub').stop().slideToggle(500).toggleClass('active').end()
                        .find('.m_vue_nav__enter').toggleClass('active')
                }
            });

            $('.m_vue_nav__sub > li').on(TRIGGLE_EVENT, function (e) {
                var action_command = getAction(e).split('-');
                var action = action_command[0];
                var area = action_command[1];
                var param = action_command[2];

                if (action == 'goState') {
                    animate(e.currentTarget, function () {
                        openUrlInNative(area + '-' + param);
                    });
                }
            });
        },
        data: function () {
            var origin = [
                {
                    title: '?????????????????????',
                    sub: [
                        {
                            param: 'how-whyForex',
                            title: '???????????????????????????'
                        },
                        {
                            param: 'how-1min',
                            title: '1??????????????????????????????'
                        },
                        {
                            param: 'how-5rule',
                            title: '5?????????????????????'
                        },
                    ]
                },
                {
                    title: 'TigerWit????????????',
                    sub: 
                    isTigerSpecial() 
                    ? 
                    ([
                        {
                            param: 'operate-follow',
                            title: '????????????????????????'
                        },
                        {
                            param: 'operate-withDep',
                            title: '???????????????????????????'
                        },
                        {
                            param: 'operate-authen',
                            title: '????????????????????????'
                        },
                        {
                            param: 'operate-wallet',
                            title: '?????????????????????'
                        },
                        {
                            param: 'operate-redbag',
                            title: '?????????????????????????????????????????????'
                        },
                        {
                            param: 'operate-invite',
                            title: '?????????????????????'
                        },
                    ]) 
                    : 
                    ([
                        {
                            param: 'operate-self',
                            title: '????????????????????????'
                        },
                        {
                            param: 'operate-follow',
                            title: '????????????????????????'
                        },
                        {
                            param: 'operate-withDep',
                            title: '???????????????????????????'
                        },
                        {
                            param: 'operate-authen',
                            title: '????????????????????????'
                        },
                        {
                            param: 'operate-wallet',
                            title: '?????????????????????'
                        },
                        {
                            param: 'operate-redbag',
                            title: '?????????????????????????????????????????????'
                        },
                        {
                            param: 'operate-invite',
                            title: '?????????????????????'
                        },
                    ])
                },
                {
                    title: 'TigerWit????????????',
                    sub: [
                        {
                            param: 'center-copyRule',
                            title: '????????????'
                        },
                        {
                            param: 'center-toBeMaster',
                            title: '????????????'
                        },
                        {
                            param: 'center-symbol',
                            title: '??????????????????'
                        },
                        {
                            param: 'center-faq',
                            title: '??????????????????'
                        },
                        {
                            param: 'center-lever',
                            title: '???????????????????????????????????????????????????'
                        }
                    ]
                }
            ]
            var companyName = $.cookie('company_name');
            if (companyName == 'pandafx') {
                $.each(origin, function (index, item) {
                    item.title = item.title.replace('TigerWit', '????????????')
                })
            }
            return {
                titleList: origin
            }
        },
        methods: {
            toStatePage: function (type, page) {
                var action_address = window.location.origin + "/m/wap/faq/" + type
                console.info(action_address);
                return
                if (isInTiger()) {
                    callNative({
                        type: "openUrl",
                        url: action_address
                    });
                } else {
                    window.location.href = action_address;
                }
            }
        }
    });
}
