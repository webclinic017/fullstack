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
                    title: '外汇交易怎么玩',
                    sub: [
                        {
                            param: 'how-whyForex',
                            title: '为什么要投资外汇？'
                        },
                        {
                            param: 'how-1min',
                            title: '1分钟掌握外汇名词概念'
                        },
                        {
                            param: 'how-5rule',
                            title: '5条黄金交易法则'
                        },
                    ]
                },
                {
                    title: 'TigerWit操作指南',
                    sub: 
                    isTigerSpecial() 
                    ? 
                    ([
                        {
                            param: 'operate-follow',
                            title: '如何进行高手跟单'
                        },
                        {
                            param: 'operate-withDep',
                            title: '如何进行出入金操作'
                        },
                        {
                            param: 'operate-authen',
                            title: '如何进行实名认证'
                        },
                        {
                            param: 'operate-wallet',
                            title: '什么是零钱包功能'
                        },
                        {
                            param: 'operate-redbag',
                            title: '红包在哪里查看，如何兑现红包？'
                        },
                        {
                            param: 'operate-invite',
                            title: '如何邀请好友？'
                        },
                    ]) 
                    : 
                    ([
                        {
                            param: 'operate-self',
                            title: '如何操作自主交易'
                        },
                        {
                            param: 'operate-follow',
                            title: '如何进行高手跟单'
                        },
                        {
                            param: 'operate-withDep',
                            title: '如何进行出入金操作'
                        },
                        {
                            param: 'operate-authen',
                            title: '如何进行实名认证'
                        },
                        {
                            param: 'operate-wallet',
                            title: '什么是零钱包功能'
                        },
                        {
                            param: 'operate-redbag',
                            title: '红包在哪里查看，如何兑现红包？'
                        },
                        {
                            param: 'operate-invite',
                            title: '如何邀请好友？'
                        },
                    ])
                },
                {
                    title: 'TigerWit帮助中心',
                    sub: [
                        {
                            param: 'center-copyRule',
                            title: '复制规则'
                        },
                        {
                            param: 'center-toBeMaster',
                            title: '成为高手'
                        },
                        {
                            param: 'center-symbol',
                            title: '交易品种介绍'
                        },
                        {
                            param: 'center-faq',
                            title: '常见问题解答'
                        },
                        {
                            param: 'center-lever',
                            title: '平台提供哪几种杠杆倍率，如何选择？'
                        }
                    ]
                }
            ]
            var companyName = $.cookie('company_name');
            if (companyName == 'pandafx') {
                $.each(origin, function (index, item) {
                    item.title = item.title.replace('TigerWit', '熊猫外汇')
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
