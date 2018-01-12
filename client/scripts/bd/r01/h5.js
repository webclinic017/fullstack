;
(function () {
    var $rotate = $(".bd_r01 .bd_r01__rotate_box");
    var $startBtn = $(".bd_r01 .bd_r01__rotate-btn");
    var $rotateBox = $(".bd_r01 .bd_r01__rotate-pic");
    var $detail = $(".bd_r01 .bd_r01__focus-details");
    var $condition = $(".bd_r01 .bd_r01__condition span");
    var $list = $(".bd_r01 .bd_r01__lst-detail");

    var time = 4000;
    var baseNum = 72;   //旋转角度基数 360/5
    var award = {   //奖项位置
        "1": 5,
        "2": 1,
        "3": 4,
        "4": 3,
        "5": 2
    };
    var isInTigerApp = false;
    var isDrawAward = false;
    var rewardCount = 0;
    var msg = "网络错误";
    var activityId = 1;
    var rewardId = 1;

    setInterval(function () {
        if ($rotate.hasClass('active')) {
            $rotate.removeClass('active');
        } else {
            $rotate.addClass('active');
        }
    }, 1000);

    if (isInTiger()) {
        isInTigerApp = true;
        checkReward();
    } else {
        toOpenApp();
        $condition.html("请前往APP参与活动");
    }
    getRewardLst();
    
    $detail.on("tap", function () {
        layer.open({
            shadeClose: true,
            content: $("#layer_contentBox").html(),
            style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
        });
        $('.layui-m-layercont').css('padding', 0);
        return false;
    });

    $startBtn.on("tap", function () {
        if (isDrawAward) return;
        if (isInTigerApp) {
            getDrawPrize();
        } else {
            toOpenApp();
        }

        return false;
    });
    
    function getRewardLst () {
        publicRequest('getRewardLst', 'GET', {
            activity_id: activityId,
            reward_id: rewardId,
            limit: 4
        }).then(function (data) {
            var lst = [];
            // console.log(data.data);
            if (data.is_succ) {
                lst = data.data;
                appendRewardLst(lst);
            }
        });
    }

    function appendRewardLst (list) {
        console.log(list);
        if (list && list.length) {
            $.each(list, function (index, value) {
                var dom = "<li>恭喜 "+value.phone+" 抽中 "+value.prize+" 美金</li>";
                $list.append(dom);
            });

            if (list.length >= 4) {
                $list.append("<li>......</li>");
            }
        } else {
            $list.append("<li>敬请期待...</li>");
        }
    }

    function checkReward () {
        publicRequest('checkReward', 'POST', {
            activity_id: activityId,
            reward_id: rewardId
        }).then(function (data) {
            // console.log(data.data);
            if (data.is_succ) {
                msg = data.data.message;
                $condition.html(data.data.message);
                rewardCount = data.data.num;
            } else {
                msg = data.message;
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }

    function getDrawPrize () {
        if (rewardCount <= 0) {
            layer.open({
                content: msg,
                skin: 'msg',
                time: 2
            });
            return false;
        }
        isDrawAward = true;
        layer.open({
            type: 2
        });
        var s = {
            activity_id: activityId,
            reward_id: rewardId
        };
        getSearch().source && (s.source = 1);
        publicRequest('joinReward', 'POST', s).then(function (data) {
            // console.log(data.data);
            layer.closeAll();
            if (data.is_succ) {
                var n = data.data.prize_flag;
                var min = (award[n]-1)*baseNum+10, max = award[n]*baseNum-10;
                var randomNumSin = getRandomNum(min, max);
                var randomNum = randomNumSin + 360*5;
                // console.log(min, max, randomNumSin);
                $rotateBox.css("transition", "all 3s ease-in-out");
                $rotateBox.css("transform", "rotate("+randomNum+"deg)");
                $rotateBox.css("-webkit-transform", "rotate("+randomNum+"deg)");
                
                setTimeout(function() {
                    $rotateBox.css("transition", "all 0s");
                    $rotateBox.css("transform", "rotate("+randomNumSin+"deg)");
                    $rotateBox.css("-webkit-transform", "rotate("+randomNumSin+"deg)");
                    isDrawAward = false;

                    checkReward();
                    $(".layer_contentBox2 .layer_bdr01_dollar .num").html(data.data.prize);
                    layer.open({
                        shadeClose: false,
                        content: $("#layer_contentBox2").html(),
                        style: 'padding:0;width:85%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
                    });
                    $('.layui-m-layercont').css('padding', 0);
                }, 3000);
            } else {
                isDrawAward = false;
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }

    function toOpenApp () {
        var o;
        var s = getSearch().source ? '?source=1' : '';
        // console.log(s);
        if (window.location.origin.indexOf("www.tigerwit.com") != -1) {
            o = "www.tigerwit.com/bd/r01"+s;
        } else {
            o = "demo.tigerwit.com/bd/r01"+s;
        }
        // console.log(o);
        if (isTigerCo()) {
            openInApp(o);
        }
    }

    // min 和 max 之间整数，包含min，不包含max
    function getRandomNum (min, max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
}());