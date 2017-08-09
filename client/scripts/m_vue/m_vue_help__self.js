/**
 * 包含移动端交易流程、跟随高手流程、出入金流程页面
 * 根据不同的data数据渲染不同页面的流程
 */
if ($(".m_vue").attr("data-page") === "helpSelf") {
    var helpSelfApp = new Vue({
        el: '#helpSelf',
        data: function () {
            var cn = $.cookie('company_name');
            return {
                triggleEvent: 'click', //配置当前触发事件
                flowData: [
                    {
                        imgSrc: [
                            'step1'
                        ],
                        desp: cn == 'tigerwit' ? '打开老虎外汇APP，在页面下方点击“自选”进入交易产品列表页面。如上图' : '打开熊猫外汇APP，在页面下方点击“自选”进入交易产品列表页面。如上图'
                    },
                    {
                        imgSrc: [
                            'step2.1',
                            'step2.2',
                            'step2.3'
                        ],
                        desp: '点击右上角“+”，添加自己喜欢的交易品种到列表中,方便用户查看和掌握交易行情。如上图'
                    },
                    {
                        imgSrc: [
                            'step3'
                        ],
                        desp: '点击自己喜欢的交易品种，随即进入该交易品种的详情页面。用户可在此查实时报价、K线图等信息，方便对交易进行分析和判断。如上图'
                    },
                    {
                        imgSrc: [
                            'step4'
                        ],
                        desp: '用户选定要交易的产品后，可以切换简单模式或高级模式。简单模式即快速下单；高级模式支持设置止盈止损价格、挂单等功能。如上图'
                    },
                    {
                        imgSrc: [
                            'step5.1',
                            'step5.2',
                            'step5.3'
                        ],
                        desp: '高级模式：输入交易手数、止损止盈数，即可根据判断点击“买跌”或“买涨”，完成交易。若用户想要查看交易盈亏情况，可在“交易”-“持仓”中进行查看。如上图'
                    },
                    {
                        imgSrc: [
                            'step6.2',
                            'step6',
                        ],
                        desp: '选择“挂单交易”，首先选择交易方向：买涨/买跌；设定挂单“价格”和“手数”；止盈止损价格根据操作可选定；下单后行情到达挂单价格即会成交。若用户想要查看挂单情况，可在“交易”-“持仓”-“挂单”中进行查看。如上图'
                    },
                ],
                followData: [
                    {
                        imgSrc: [
                            'step1'
                        ],
                        desp: cn == 'tigerwit' ? '打开老虎外汇APP，选择左下角“跟单”，在跟单页面中点击“高手跟单”，如上图:' : '打开熊猫外汇APP，选择左下角“跟单”，在跟单页面中点击“高手跟单”，如上图:'
                    },
                    {
                        imgSrc: [
                            'step2'
                        ],
                        desp: '在高手跟单页面中，系统会根据总收益率排列出投资高手的列表，用户可根据自身需 要进行选择，如上图:'
                    },
                    {
                        imgSrc: [
                            'step3'
                        ],
                        desp: '选定想要跟随的投资高手后，点击进入高手详情页面，可在此查看该高手的详细交易信息，包括最大跌幅、历史跟随人数、数据统计、当前交易情况、 历史交易情况，用户可进一步对该高手的实际交易能力进行分析和判断，如上图:'
                    },
                    {
                        imgSrc: [
                            'step4'
                        ],
                        desp: '当用户选定欲跟随的投资高手之后，即可点击“复制”进行高手跟单，点击“复制” 后会弹出对话框让用户输入所要复制的金额。(注:用户输入的复制金额额度不得小于最低复制金额)输入后点击确定完成复制跟单，如上图:'
                    },
                    {
                        imgSrc: [
                            'step5'
                        ],
                        desp: '成功复制跟单后，如果中途解除跟单操作，可以随时进入高手主页，选择“解除跟随关系”，根据个人意愿选择平仓条件，如上图:'
                    },
                ],
                withDepData: {
                    depData: [
                        {
                            imgSrc: [
                                'step1'
                            ],
                            desp: '点击进入“我的”板块，点击“充值/提现”，如上图:'
                        },
                        {
                            imgSrc: [
                                'step2.1',
                                'step2.2'
                            ],
                            desp: '进入“充值/提现”页面，默认“充值”标签，支付方式可以选择“网银支付”或“零钱包”支付，如上图:'
                        },
                        {
                            imgSrc: [
                                'step3'
                            ],
                            desp: '选择“网银支付”输入充值金额（单位：美元），根据“当日汇率”系统会自动折合人民币（注：最低入金额度50美元）；点击“确认充值”进去银联卡转账页面，填写银联卡号，逐步进行转账即可，如上图:'
                        },
                        {
                            imgSrc: [
                                'step4.1',
                                'step4.2'
                            ],
                            desp: '选择“零钱包支付”则进入零钱包支付流程，如上图:'
                        }
                    ],
                    withData: [
                        {
                            imgSrc: [
                                'step1'
                            ],
                            desp: '点击进入“我的”板块，点击页面 “充值/提现”，如上图:'
                        },
                        {
                            imgSrc: [
                                'step2.1',
                                'step2.2'
                            ],
                            desp: '进入“充值/提现”页面，选择“提现”标签，选择“交易账户”或“零钱包”提现，如上图:'
                        },
                        {
                            imgSrc: [
                                'step3.1',
                                'step3.2'
                            ],
                            desp: '选择“交易账户”提现，输入提现金额（单位：美元），根据“当日汇率”系统会自动折合人民币。（注：最低出金额度20美元，最大不得超过“交易账户“余额），输入完毕后选择提现银行卡并提交，如上图:',
                            desp2: '选择“零钱包”直接填写提现金额逐步操作即可。'
                        }
                    ]
                }
            }
        },
        ready: function () {
            var curFlow = $('#helpSelf').attr('data-flow');
            var TRIGGLE_EVENT = this.$data.triggleEvent;
            var hasAutoScrolled = false;
            // 总步数
            var totalStep;
            var vm = this;

            function getAction($target) {
                var actionCommand = $target.attr('data-action');
                actionCommand = actionCommand ? actionCommand.split('-') : [-1, -1]

                return {
                    actionName: actionCommand[0],
                    actionEle: actionCommand[1]
                }
            }

            function openUrlInNative(url) {
                console.log(url);
                if (isInTiger()) {
                    callNative({
                        type: "openUrl",
                        url: HELP_ORIGIN + url
                    });
                } else {
                    window.location.href = HELP_ORIGIN + url;
                }
            }

            // 记录当前被激活的li
            var activedLi = undefined;
            function active(target, callback) {
                $(target).addClass('active');
                activedLi = target;
                nextLoop(callback);
            }

            function fade(target, callback) {
                $(target).removeClass('active');
                callback && callback();
            }

            function nextLoop(callback) {
                setTimeout(function () {
                    callback && callback();
                }, 0);
            }

            function autoScroll(target) {
                if (!hasAutoScrolled) {
                    target.delay(300).animate({ scrollTop: 300 }, 500, 'swing', function () {
                        target.animate({ scrollTop: 0 }, 500, 'swing');
                    });
                    hasAutoScrolled = true;
                }
            }

            // 记录当前打开的layerbox和index
            var curLayBox = undefined;
            var curStep = 1;
            var layerIndex = {
                mobile: undefined,
                how: undefined,
                flow: undefined
                // ...
            }

            $('.helpSelf__item').on(TRIGGLE_EVENT, function (e) {
                var $curTg = $(e.currentTarget);
                var oAction = getAction($curTg);
                var action = oAction.actionEle;

                console.log('action', action);

                active(e.currentTarget, function () {
                    layerIndex[action] = layer.open({
                        shadeClose: false,
                        content: $("#layer_contentBox").find('.' + action).html() || '404',
                        style: 'padding:0;width:85%;border-radius:1rem;'
                    });
                    // 重置step
                    nextLoop(function () {
                        $('.viewport_flows').css({
                            left: 0
                        });
                        curStep = 1;
                    });

                    curLayBox = $('#layui-m-layer' + layerIndex[action]);
                    var $viewPort = curLayBox.find('.flowChart__viewport');
                    // 动态获取有多少step
                    totalStep = curLayBox.find('.viewport_flows__item').length;
                    // 自动滚动，让用户知道当前元素可以滚动
                    autoScroll($viewPort);

                    nextLoop(function () {
                        curLayBox.on(TRIGGLE_EVENT, function (e) {
                            var curTarget = $(e.target);
                            var oAction = getAction(curTarget);
                            var $nextPage = $(e.target);
                            var actionName = oAction.actionName;
                            var width, handle, previousBtn, nextBtn, closeBtn;

                            // console.log(oAction);
                            if (actionName == 'closelay') {
                                layer.close(layerIndex[oAction.actionEle]);
                                layer.closeAll();
                                fade(activedLi);
                            } else if (actionName == 'nextPage' || actionName == 'previousPage') {
                                width = $('.viewport_flows > li').width();
                                handle = curLayBox.find('.self_close');
                                previousBtn = handle.find('.previous');
                                nextBtn = handle.find('.next');
                                closeBtn = handle.find('.closer');

                                if (actionName == 'nextPage') {
                                    $('.viewport_flows').css({
                                        left: '-' + width * curStep + 'px'
                                    });
                                    curStep++
                                    if (curStep == totalStep) {
                                        nextBtn.hide();
                                        closeBtn.show();
                                    }
                                    if (curStep > 1) {
                                        previousBtn.show();
                                    }
                                } else if (oAction.actionName == 'previousPage') {
                                    closeBtn.hide();
                                    previousBtn.show();
                                    if (curStep > 1) {
                                        curStep--
                                    }
                                    if (curStep == 1) {
                                        previousBtn.hide();
                                    }
                                    if (curStep < totalStep) {
                                        nextBtn.show();
                                    }
                                    $('.viewport_flows').css({
                                        left: '-' + width * (curStep - 1) + 'px'
                                    });
                                }
                            }
                        })
                    });
                });
            });
        },
        methods: {

        }
    });
}
