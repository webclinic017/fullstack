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

        // 图表公用配置
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
                                data: [],
                                borderColor: chartBaseCfg.borderColor,
                                borderWidth: chartBaseCfg.borderWidth,
                                backgroundColor: chartBaseCfg.backgroundColor
                            }
                        ]
                    },
                    options: chartBaseCfg.options
                }
            },
            pieChart2: {
                ctx: $('#pie_chart2')[0].getContext("2d"),
                config: {
                    type: 'pie',
                    data: {
                        datasets: [
                            {
                                data: [],
                                borderColor: chartBaseCfg.borderColor,
                                borderWidth: chartBaseCfg.borderWidth,
                                backgroundColor: ['#ffab00', '#ff433a']
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
                                data: [],
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

        var renderedChart = {
            pieChart: undefined,
            pieChart2: undefined,
            ringChart: undefined,
        }

        function rendChart(ctx, config) {
            return new Chart(ctx, config)
        }

        function getMonData(user_code) {
            return publicRequest('getMonReport', 'GET', {
                user_code: user_code
            }).then(function (data) {
                if(!data){ return}
                if (data.is_succ) {
                    var res = data.data;
                    // console.log(res)
                    $('.mon_profit_text').html("$ " + res.total_profit)
                    // 渲染最最喜爱交易品种页
                    var pieChartData = [];
                    $.each(res.max_like, function (index, item) {
                        $($('.max-like')[index]).find('.max-like-name').html(item.symbol_cn)
                            .end().find('.max-like-lot').html(item.vols);
                        pieChartData.push(item.vols)
                    })
                    // $('.max-like').each(function (index, item) {
                    //     // console.log(index, res.max_like[index])
                    //     $(item).find('.max-like-name').html(res.max_like[index].symbol_cn)
                    //         .end().find('.max-like-lot').html(res.max_like[index].vols);
                    //     pieChartData.push(res.max_like[index].vols)
                    // })
                    $('.max-like-desc').html(res.max_like_desc)
                    chartMap.pieChart.config.data.datasets[0].data = pieChartData
                    if (renderedChart.pieChart) {
                        renderedChart.pieChart.update()
                    }

                    // 渲染收益最大交易品种页
                    var ringChartData = [];
                    $('.max-profit').each(function (index, item) {
                        // console.log(index, res.max_profit[index], item)
                        $(item).find('.max-profit-name').html(res.max_profit[index].symbol_cn)
                            .end().find('.max-profit-lot').html(res.max_profit[index].profits);
                        ringChartData.push(res.max_like[index].vols)
                    })
                    // console.log(ringChartData)
                    $('.max-profit-desc').html(res.max_profit_desc)
                    chartMap.ringChart.config.data.datasets[0].data = ringChartData
                    if (renderedChart.ringChart) {
                        renderedChart.ringChart.update()
                    }

                    // 渲染最常用交易页
                    var auto = res.auto
                    $('.auto-trade-profit').html(auto.profit)
                    $('.auto-trade-lot').html(auto.volume)
                    var copy = res.copy
                    $('.copy-trade-profit').html(copy.profit)
                    $('.copy-trade-lot').html(copy.volume)
                    $('.trade_way_desc').html(res.copy_auto_desc)
                    chartMap.pieChart2.config.data.datasets[0].data = [auto.volume, copy.volume]
                    if (renderedChart.pieChart2) {
                        renderedChart.pieChart2.update()
                    }
                }
            });
        }
        
        function errDo(){
            layer.closeAll()
            layer.open({
                content: 'Sorry~ 您暂时没有交易月报',
                skin: 'msg',
                anim: false,
                time: 30
            });
            $.fn.fullpage.setAllowScrolling(false)
        }

        $('#dowebok').fullpage({
            navigation: true,
            navigationColor: "#475c95",
            navigationPosition: "left",
            verticalCentered: false,
            afterRender: function () {
                $.fn.fullpage.moveTo(5);
                var user_code = getSearch().user_code
                if(!user_code){
                    errDo()
                } else {
                    getMonData(user_code).then(function(){
                        $('.check_now').fadeIn(500).on('tap', function () {
                            $.fn.fullpage.moveTo(2);
                        })
                    }).fail(function(err){
                        errDo()
                    })
                }
            },
            afterLoad: function (anchorLink, index) {
                // debug 安卓翻页
                offsetAction(index);
                if (index == 2) {
                    renderedChart.pieChart = rendChart(chartMap.pieChart.ctx, chartMap.pieChart.config)
                }
                if (index == 3) {
                    renderedChart.ringChart = rendChart(chartMap.ringChart.ctx, chartMap.ringChart.config)
                }
                if (index == 4) {
                    renderedChart.pieChart2 = rendChart(chartMap.pieChart2.ctx, chartMap.pieChart2.config)
                }
            },
            onLeave: function (index, nextIndex, direction) {

            }
        });
    }
}());