;
(function () {
    twH5Loader('img_detect_container', 4, getMonData)

    var loca = window.location
    var renderedChart = {
        pieChart: undefined,
        pieChart2: undefined,
        ringChart: undefined,
    }

    // 获取当前日期
    var date = new Date;
    var year = date.getFullYear();
    var cur_month = date.getMonth() + 1;
    var cur_date = year + '.' + cur_month;

    // 排行结果
    var rank_result = {};

    // 图表数据，将在 readyChartsData 方法中生成
    var chartMap = {}

    // 获取信息
    var user_code = decodeURIComponent(getSearch().user_code);
    // 在分享页面为 true
    var hasShared = getSearch().shared == 1;

    if (!isInTiger() && (loca.hostname == 'www.tigerwit.com' || loca.hostname == 'demo.tigerwit.com')) {
        if(!hasShared){
            openInApp(loca.hostname + loca.pathname + loca.search)
        }
    }

    function initFullPage(afterLoad) {
        $('.section1').find('.date').html(cur_date);
        $('#dowebok').fullpage({
            navigation: true,
            navigationColor: "#475c95",
            navigationPosition: "left",
            verticalCentered: false,
            afterRender: function () {
                // $.fn.fullpage.moveTo(5)
            },
            afterLoad: afterLoad || null
        });
    }

    // 当有数据的时候会传给 initFullPage 使用
    function afterLoad(anchorLink, index) {
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
    }

    // 渲染图表
    function rendChart(ctx, config) {
        return new Chart(ctx, config)
    }

    // 提示错误
    function errWarning() {
        layer.closeAll()
        layer.open({
            content: 'Sorry~ 您暂时没有交易月报',
            skin: 'msg',
            anim: false,
            time: 120
        });
    }

    // user_code 加密
    function encrypt(text) {
        var keyMap = {
            demo: '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCwyjx6cQ4AHOnmeIU15A+EvLk3V3oHv2YLp8nZBNqeg+uLPn2HyYF1/s/Mi2EZE2ypIFuvKiCX3ACrZuM55nJSTTjJzOfohh2tLMClLlbfHxdNyg8cotza4+iutrru2vy+kUWp0UuydNrjDJoVJwPXOkToLXjtOEofPmdzjLbE4QIDAQAB-----END PUBLIC KEY-----',
            live: '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN67wAcj1WL/scb9TuvawbqMABg2sYXdmLkzXYUK/qbZI168gpM1t4SqS2qxYuEy+a/rOQ/YokJy0Q+dwQBEUmRWd4//64D3shkMMPZ0VuQ67LmVbFzbaly9dEYbAkoKvd4qcVxG1qAYlPGAKVZjRbf3q6d1CGeUGQqoynofTZNwIDAQAB-----END PUBLIC KEY-----'
        }
        var crypt = new JSEncrypt();
        var isLive = loca.hostname.indexOf('www.tigerwit.com') != -1;
        var key = isLive ? keyMap['live'] : keyMap['demo'];
        crypt.setKey(key);
        var textEnc = crypt.encrypt(text);
        return textEnc;
    }

    // 分享功能
    function share(hasShared) {
        // 我在老虎外汇投资，成绩超过98%网友获得印钞工人称号
        var shareDesp = "我在老虎外汇投资, 成绩超过" + rank_result.rank + "网友获得" + rank_result.title + "称号";
        var shareTitle = '我在老虎外汇' + cur_month + '月的投资报告';
        var shareLink = loca.origin + '/bd/mon_report' + '?shared=1&user_code=' + encodeURIComponent(encrypt($.cookie('user_code') || ''));
        // console.log(shareDesp, shareTitle, shareLink)
        // console.log(shareLink)
        if (isInTiger) {
            $('.share').on('tap', function () {
                openH5ShareModal({
                    modalTitle: shareTitle,
                    shareTitle: shareTitle,
                    desp: shareDesp,
                    url: shareLink,
                })
                return false
            })
        }

        // 微信分享配置
        if (wx) {
            wxShareConfig({
                title: shareTitle,
                subTitle: shareTitle,
                shareLink: shareLink,
                desc: shareDesp,
                img: loca.origin + '/activity/logo.png',
                debug: false
            });
        } else {
            console.log("微信配置错误")
        }
    }

    // 移除DOM元素
    function removeSection(toRemove) {
        $.each(toRemove, function (index, item) {
            $(item).remove()
        })
    }

    // 准备图表数据
    function readyChartsData(res) {
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

        // 三个图表的数据
        chartMap = {
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

        // 盈亏
        $('.mon_profit_text').html("$ " + res.total_profit)

        // 渲染最最喜爱交易品种页
        var pieChartData = [];
        $.each(res.max_like, function (index, item) {
            $($('.max-like')[index]).find('.max-like-name').html(item.symbol_cn)
                .end().find('.max-like-lot').html(item.vols);
            pieChartData.push(item.vols)
        })
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

    // 生成最后一页数据(最终战绩)
    function rendSumReport(rank, total_profit, hasShared) {
        var traderTypeMap = {
            "money_maker": {
                rank: 98,
                title: '印钞工人'
            },
            "old_driver": {
                rank: 80,
                title: '吸金老司机'
            },
            "house_keeper": {
                rank: 70,
                title: '优秀管家婆'
            },
            "good_investor": {
                rank: 60,
                title: '投资小能手'
            },
            "pi_master": {
                rank: 30,
                title: '屁胡高手'
            },
            "baby": {
                rank: 0,
                title: '捡钱小宝宝'
            },
        }

        var result = {}

        $.each(traderTypeMap, function (key, value) {
            if (~~rank >= value.rank) {
                $('.mon-rank-num').html(result.rank)
                result["rank"] = rank + '%'
                result["title"] = value.title
                result["path"] = '/' + key + '.png'
                return false
            }
        })
        rank_result = result;

        $('.mon_profit_text').html("$ " + total_profit)

        $('.report-result-title').html(result.title)
        $('.mon-rank-num').html(result.rank)
        // 渲染插画
        $('.rank-comic').attr('src', '/images/bd_mon_report' + result.path)

        var section5 = $('.section5').find('.slogan').hide().end()
        var path = loca.pathname
        if (hasShared) {
            section5.find('.bd').show().on('tap', function () {
                // 统计下载/跳转
                sa.track('mon_report_redirect_btn_inshared', {
                    path: path
                });
                _czc.push(["_trackEvent", path, "mon_report_redirect_btn_sharedPage"]);
                loca.href = loca.origin + "/bd/t35?from=mon_report_shared";
                return false
            });
        } else {
            section5.find('.share').show().on('tap', function () {
                // 统计分享
                sa.track('mon_report_share_btn', {
                    path: path
                });
                _czc.push(["_trackEvent", path, "mon_report_share_btn"]);
                return false
            })
        }
        share(hasShared)
    }

    // 无数据报错
    function noDataErr(hasShared) {
        removeSection([
            '.section2',
            '.section3',
            '.section4',
            '.section5',
        ])
        $('section1').find('.slide_arrow2').hide()
        initFullPage(hasShared ? null : afterLoad)
        // 提示错误
        errWarning()
    }

    // 获取数据
    function getMonData() {
        // 检测登录状态
        if (isInTiger()) {
            callNative({
                type: 'checkLogin'
            });
        }

        var loaderIndex = layer.open({
            type: 2,
            content: '正在生成月报...'
        });

        publicRequest('getMonReport', 'GET', {
            user_code: hasShared ? user_code : null,
            token: getSearch().token
        }).then(function (data) {
            if (!data) { return }
            var res = data.data
            if (data.is_succ) {
                if (res.length == 0) {
                    noDataErr()
                } else {
                    if (hasShared) {
                        // 移除前四页
                        removeSection([
                            '.section1',
                            '.section2',
                            '.section3',
                            '.section4',
                        ])
                    } else {
                        readyChartsData(res)
                        $('.check_now').fadeIn(500).on('tap', function () {
                            $.fn.fullpage.moveTo(2);
                        })
                    }
                    // 渲染最后一页数据（是/不是分享页都需要渲染）
                    rendSumReport(res.rank, res.total_profit, hasShared)
                    initFullPage(hasShared ? null : afterLoad)
                }
            } else {
                noDataErr(hasShared)
            }
            layer.close(loaderIndex)
        }).fail(function () {
            noDataErr(hasShared)
        })
    }
}());