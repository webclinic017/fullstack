;(function () {

    var $awardDrawBox = $(".m_prize_draw");
    var $award = $(".m_prize__award-bg");
    var $awardgroup = {
        "1": $(".m_prize__award-bg[data-prize=1]"),
        "2": $(".m_prize__award-bg[data-prize=2]"),
        "3": $(".m_prize__award-bg[data-prize=3]")
    }
    var $awardDrawBtn = $(".m_prize__award_btn span");
    var $awardList = $(".m_prize_list");
    var $awardRuleBtn = $(".m_prize_rule");
    var $awardTitle = $(".m_prize_title");

    var rangeTime = 5000;
    var currentAward = 2;
    var resAward = 3;
    var isDrawAward = false;
    var isInTigerApp = false;
    var prizeList = {
        lst_1: [
            {
                phone: '139****9108',
                award: '0.5'
            },
            {
                phone: '136****0823',
                award: '0.5'
            },
            {
                phone: '158****1764',
                award: '0.5'
            },
            {
                phone: '137****9992',
                award: '1'
            },
            {
                phone: '136****0962',
                award: '0.5'
            },
            {
                phone: '159****1198',
                award: '0.5'
            },
            {
                phone: '139****9068',
                award: '1'
            },
            {
                phone: '139****5585',
                award: '5'
            }
        ],
        lst_2: [
            {
                phone: '136****8864',
                award: '1'
            },
            {
                phone: '136****2619',
                award: '0.5'
            },
            {
                phone: '159****6886',
                award: '0.5'
            },
            {
                phone: '158****5408',
                award: '0.5'
            },
            {
                phone: '156****4667',
                award: '0.5'
            },
            {
                phone: '138****5676',
                award: '0.5'
            },
            {
                phone: '188****9007',
                award: '5'
            },
            {
                phone: '137****6623',
                award: '0.5'
            }
        ]
    };

    $awardgroup[currentAward].addClass("active");
    insertTemp();

    $(document).on("tap", ".close-btn", function () {
        layer.closeAll();
        return false;
    });

    $awardRuleBtn.on("tap", function () {
        openLayerModal($("#m_prize_layer-rule").html());
    });

    $awardDrawBtn.on("tap", function () {
        if (isDrawAward) return;
        if (isInTigerApp) {
            getDrawPrize();
        } else {
            toOpenApp();
        }
        return false;
    });

    if (!isInTiger()) {
        isInTigerApp = true;
        getPrizeChangce();
    } else {
        toOpenApp();
        $awardTitle.html("请前往APP参与抽奖!");
    }

    setInterval(function () {
        if ($awardDrawBox.hasClass("change")) {
            $awardDrawBox.removeClass("change");
        } else {
            $awardDrawBox.addClass("change");
        }
    }, 800);

    //获取今天开仓手数
    function getPrizeChangce () {
        publicRequest('getPrizeChangce', 'GET').then(function (data) {
            // console.log(data.data);
            if (data.is_succ) {
                if (data.data < 0.3) {
                    var n = (0.3 - data.data).toFixed(2);
                    $awardTitle.html("还差"+n+"手即可参加明日抽奖，快去完成交易吧！");
                } else {
                    $awardTitle.html("恭喜您已满足抽奖条件，明日记得来抽奖哟！");
                }
                
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
    //获取抽奖资格
    function getDrawPrize () {
        var s = getSearch().source ? {source: 1} : {};
        layer.open({type: 2});
        publicRequest('drawPrize', 'POST', s).then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (data.is_succ) {
                data = data.data;
                if (data.type == 0) {   // 中奖
                    if (data.amount == 5) {
                        resAward = 1;   // 一等奖
                    } else if (data.amount == 1) {
                        resAward = 1;   // 二等奖
                    } else if (data.amount == 0.5) {
                        resAward = 3;   // 三等奖
                    }
                    $(".m_prize_layer-sure .detail .dollar").html(data.data);
                    runDrawPrize();
                } else {    //不能抽奖
                    $(".m_prize_layer-message .detail p").removeClass("active");
                    if (data.type == 1) {
                        $(".m_prize_layer-message .detail .code1").addClass("active");
                    } else if (data.type == 2) {
                        $(".m_prize_layer-message .detail .code2").addClass("active");
                    } else if (data.type == 3) {
                        $(".m_prize_layer-message .detail .code3").addClass("active");
                    }
                    openLayerModal($("#m_prize_layer-msg").html());
                }
                
            }
        });
    }
    //抽奖
    function runDrawPrize () {
        isDrawAward = true;
        var startTime = (new Date()).getTime();
        
        drawPrize(startTime);
    }

    function drawPrize (startTime) {
        var endTime = (new Date()).getTime();
        var diffTime = endTime - startTime;
        var setTime;
        if (diffTime > rangeTime) {
            currentAward = resAward;
            console.log('end----'+diffTime+'----'+currentAward);
            $award.removeClass("active");
            $awardgroup[currentAward].addClass("active");

            setTimeout(function () {
                isDrawAward = false;
                openLayerModal($("#m_prize_layer-result").html());
            }, 100);
            return;
        }
        // setTime = 20;
        if (diffTime == 0) {
            setTime = 0;
        } else if (diffTime < (rangeTime/4)) {
            setTime = (rangeTime/2 - diffTime)/10;
        } else if (diffTime > (rangeTime/4*3)) {
            setTime = (diffTime-(rangeTime - diffTime))/10;
        } else {
            setTime = rangeTime/4/10;
        }
        
        setTimeout(function () {
            // console.log(currentAward);
            getCurrentAward();
            $award.removeClass("active");
            $awardgroup[currentAward].addClass("active");
            drawPrize(startTime);
        }, setTime);
    }

    // 随机转一次，返回中奖结果，(计算概率)
    // function computePrize () {
    //     var n = getRandomNum(1, 101);
        
    //     if (n <= 5) {
    //         return 1;
    //     }
    //     if (n > 5 && n <= 25) {
    //         return 2;
    //     }
    //     if (n > 25) {
    //         return 3;
    //     }
    // }

    // 轮转奖项
    function getCurrentAward () {
        var n = getRandomNum(1, 4);
        if (n == currentAward) {
            getCurrentAward();
        } else {
            currentAward = n;
        }
    }
    
    // min 和 max 之间整数，包含min，不包含max
    function getRandomNum (min, max) {
        return Math.floor(Math.random()*(max-min)+min);
    }

    // 中奖结果列表
    function insertTemp () {
        //使用template模版
        var html=baidu.template('template_prize_list',prizeList);
        //渲染
        $awardList.html(html);

        var $box1 = $(".m_prize_list__box.box_1");
        var $box2 = $(".m_prize_list__box.box_2");
        var box1Height = $box1.height();
        var box2Height = $box2.height();
        // console.log(box1Height, box2Height);
        $box1.css("top", 0);
        $box2.css("top", box1Height);
        scrollList($box1,$box2, box1Height, box2Height);
    }

    function scrollList(ele1, ele2, box1H, box2H) {
        var timer, scroll1H = 0, scroll2H = box1H;
        clearInterval(timer);
        timer = setInterval(function () {
            scroll1H--, scroll2H--;
            if (scroll1H < -box1H) scroll1H = box1H;
            if (scroll2H < -box2H) scroll2H = box2H;
            ele1.css("top", scroll1H);
            ele2.css("top", scroll2H);
        }, 30);
    }

    function openLayerModal (content) {
        layer.open({
            shadeClose: false,
            className: 'prize_layer',
            content: content
        });
    }
    
    function toOpenApp () {
        // console.log(window.location);
        var o;
        var s = getSearch().source ? '?source=1' : '';

        if (window.location.origin.indexOf("www.tigerwit.com") != -1) {
            o = "www.tigerwit.com/bd/prize"+s;
        } else {
            o = "demo.tigerwit.com/bd/prize"+s;
        }
        console.log(o);
        // openInApp(o);
    }
})();