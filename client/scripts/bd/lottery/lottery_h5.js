; $(function () {
    var isReady = false;
    var haveChance = false;
    var message_popup = '网络错误，请稍后再试';
    var activityId = 3, rewardId = 3;
    var shareDesp = "邀请您参加老虎外汇的交易刮大奖活动，每日最高刮中99美金！";
    var shareTitle = "交易刮刮乐，好礼别错过";
    var shareLink = "https://www.tigerwit.com/bd/lottery";
    

    if (isInTiger()) {
        checkLottery();
    } else {
        $("#lottery_status_tip").html("请前往APP参与抽奖!");
    }

    window['lottery_native_share_succ'] = function(type) {
        publicRequest('shareLottery', 'GET').then(function (data) {
            if (data.is_succ) {
                checkLottery();
            }
        });
    }
    window['lottery_native_share_fail'] = function(type) {
        layer.open({
            skin: 'msg',
            content: '分享失败',
            time: 2
        });
    }
    
    $('#lottery_share').on('tap', function () {
        openH5ShareModal({
            modalTitle: shareTitle,
            shareTitle: shareTitle,
            desp: shareDesp,
            url: shareLink,
            // fn: function () {
            //     _czc.push(["_trackEvent", loca.pathname, "mon_report_share_btn"]);
            // }
            succ: 'lottery_native_share_succ',
            fail: 'lottery_native_share_fail',
        })
        return false
    })

    // 活动规则
    $("#lottery_rule").on("tap", function () {
        openLayerModal('lottery_layer', $("#m_lottery_layer-rule").html());
        return false;
    })
    // 弹窗提示
    $("#lottery_init").on("touchmove", function () {
        if (isReady) {
            layer.open({
                skin: 'msg',
                content: message_popup,
                time: 3
            });
        }
        return false;
    })

    function checkLottery () {
        publicRequest('checkLotteryStatus', 'GET', {
            activity_id: activityId,
            reward_id: rewardId
        }).then(function (data) {
            // console.log(data);
            isReady = true;
            if (data.is_succ) {
                var message = data.message;
                $("#lottery_status_tip").html(message.error_msg);

                if (message.is_succ) {
                    haveChance = true;
                    $("#lottery_init").addClass("active");
                    drawLottery();
                } else {
                    haveChance = false;
                    message_popup = message.message_popup;
                }
            }
        });
    }

    function drawLottery () {
        var img = new Image()
        img.src = '/white_label/lottery/h5_modal.png'
        img.onload = function () {
            var lottery = new LotteryCard(document.getElementById('lottery_cover'), {
                cover: img,
                size: 20, // 滑动区域大小
                percent: 40, // 激活百分比 到该值就显示结果
                resize: true, // canvas大小是否是可变的
            })
            lottery.on('start', function () {
                // lottery.setResult('/white_label/lottery/h5_award_bg.png')
                publicRequest('startLottery', 'GET', {
                    activity_id: activityId,
                    reward_id: rewardId
                }).then(function (data) {
                    if (data.is_succ) {
                        message_popup = data.data.message;
                        $("#lottery_result span").html(message_popup);
                    }
                });
            })
            lottery.on('end', function () {
                layer.open({
                    skin: 'msg',
                    content: message_popup,
                    time: 3
                });
            })
        }
    }

    function openLayerModal (className, content) {
        layer.open({
            shadeClose: true,
            className: className,
            content: content,
            shade: 'background-color: rgba(0,0,0,.2)'
        });
    }

    function toOpenApp () {
        // console.log(window.location);
        var o;

        if (window.location.origin.indexOf("www.tigerwit.com") != -1) {
            o = "www.tigerwit.com/bd/lottery";
        } else {
            o = "cndemo.tigerwit.com/bd/lottery";
        }
        // console.log(o);
        if (isTigerCo()) {
            openInApp(o);
        }
    }    
})