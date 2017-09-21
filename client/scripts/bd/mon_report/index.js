;
(function () {
    twH5Loader('img_detect_container', 4, allLoaded)
    function allLoaded() {
        // 微信分享配置
        if (wx) {
            wxShareConfig({
                title: '【老虎带你炒外汇，轻松赚钱超酸爽】',
                subTitle: '【老虎带你炒外汇，轻松赚钱超酸爽】',
                shareLink: window.location.href,
                desc: '外汇投资选老虎，人人都是投资高手，一键跟单简单粗暴，老虎高手带你轻松赚钱！！',
                img: window.location.origin + '/activity/logo.png',
                trackPage: window.location.pathname.replace(/\//gi, ''),
                debug: false
            });
        } else {
            console.log("微信配置错误")
        }

        // 图标公用配置
        var chartBaseCfg = {
            borderColor: '#475b96',
            borderWidth: [3, 3, 3, 3],
            backgroundColor: ['#ffab00', '#003655', '#ff433a', '#8dc9d3'],

            options: {
                circumference: 2 * Math.PI,
                animation: {
                    animateRotate: true,
                    animateScale: true,
                }
            }
        }

        var chartMap = {
            pieChart: {
                ctx: $('#pie_chart')[0].getContext("2d"),
                config: {
                    type: 'pie',
                    data: {
                        datasets: [
                            {
                                data: [10, 20, 30, 10],
                                borderColor: chartBaseCfg.borderColor,
                                borderWidth: chartBaseCfg.borderWidth,
                                backgroundColor: chartBaseCfg.backgroundColor
                            }
                        ]
                    },
                    options: chartBaseCfg.options
                }
            },
            ringChart: {
                ctx: $('#ring_chart')[0].getContext("2d"),
                config: {
                    type: 'doughnut',
                    data: {
                        datasets: [
                            {
                                data: [10, 20, 30],
                                borderColor: chartBaseCfg.borderColor,
                                borderWidth: [2, 2, 2, 2],
                                backgroundColor: chartBaseCfg.backgroundColor
                            }
                        ]
                    },
                    options: chartBaseCfg.options
                }
            },
        }

        function rendChart(ctx, option) {
            return new Chart(ctx, option)
        }

        $('#dowebok').fullpage({
            navigation: true,
            navigationColor: "#475c95",
            navigationPosition: "left",
            verticalCentered: false,
            afterRender: function () {
                // $.fn.fullpage.moveTo(3);
            },
            afterLoad: function (anchorLink, index) {
                // debug 安卓翻页
                offsetAction(index);
                if (index == 2) {
                    rendChart(chartMap.pieChart.ctx, chartMap.pieChart.config)
                }
                if (index == 3) {
                    rendChart(chartMap.ringChart.ctx, chartMap.ringChart.config)
                }
            },
            onLeave: function (index, nextIndex, direction) {

            }
        });
    }
}());