;
(function () {
    // var $rotate = $(".bd_r01 .bd_r01__rotate_box");
    var $startBtn = $(".bd_r01 .bd_r01__rotate-btn");
    var $rotateBox = $(".bd_r01 .bd_r01__rotate-pic");
    // var $detail = $(".bd_r01 .bd_r01__focus-details");
    // var $condition = $(".bd_r01 .bd_r01__condition span");
    // var $list1 = $(".bd_r01 .bd_r01__lst-detail .list-1");
    // var $list2 = $(".bd_r01 .bd_r01__lst-detail .list-2");

    var time = 4000;
    var baseNum = 360/10;   //旋转角度基数 360/5
    var award = {   //奖项位置 奖励：逆时针第几份
        "1": 2,
        "2": 4,
        "3": 8,
        "4": 10,
        "5": 6,
        "6": 1,
        "7": 3,
        "8": 5,
        "9": 7,
        "10": 9,
    };
    var isDrawAward = false;
    var rewardCount = 0;
    var msg = "网络错误";
    var activityId = 18;
    var rewardId = 29;
    var activity = 'Spin the Wheel – Lucky Draw'; // 抽奖标识
    var rewardLst = [
        {
            phone: "139****3321",
            prize: "8.8"
        },
        {
            phone: "188****5552",
            prize: "8.8"
        },
        {
            phone: "137****9240",
            prize: "8.8"
        },
        {
            phone: "183****8797",
            prize: "18.8"
        },
        {
            phone: "150****3504",
            prize: "8.8"
        },
        {
            phone: "135****3728",
            prize: "8.8"
        },
        {
            phone: "136****7683",
            prize: "888.8"
        },
        {
            phone: "186****8951",
            prize: "8.8"
        },
        {
            phone: "186****1337",
            prize: "8.8"
        },
        {
            phone: "182****1112",
            prize: "8.8"
        },
        {
            phone: "133****4232",
            prize: "18.8"
        },
        {
            phone: "185****0268",
            prize: "88.8"
        },
        {
            phone: "189****1989",
            prize: "8.8"
        },
        {
            phone: "150****2015",
            prize: "8.8"
        },
        {
            phone: "157****9393",
            prize: "88.8"
        },
        {
            phone: "152****6667",
            prize: "8.8"
        },
        {
            phone: "188****4321",
            prize: "8.8"
        },
        {
            phone: "150****7820",
            prize: "888.8"
        },
        {
            phone: "135****1785",
            prize: "8.8"
        },
        {
            phone: "186****6317",
            prize: "8.8"
        },
        {
            phone: "183****6161",
            prize: "8.8"
        }
    ];
    // layer.open({
    //     shadeClose: true,
    //     content: $("#layer_download").html(),
    //     style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
    // });
    // setInterval(function () {
    //     if ($rotate.hasClass('active')) {
    //         $rotate.removeClass('active');
    //     } else {
    //         $rotate.addClass('active');
    //     }
    // }, 1000);
    checkReward();
    
    
    // getRewardLst();
    
    // $detail.on("tap", function () {
    //     layer.open({
    //         shadeClose: true,
    //         content: $("#layer_contentBox").html(),
    //         style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
    //     });
    //     $('.layui-m-layercont').css('padding', 0);
    //     return false;
    // });

    $startBtn.on("click", function () {
        if (isDrawAward) return;
            getDrawPrize();

        return false;
    });
    
    $("#toRegister").on("click", function () {
        layer.open({
            type: 1,
            shadeClose: true,
            content: $("#layer_register").html(),
            className: 'registerLayer',
            style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
        });
    })
    $("#toDownload").on("click", function () {
        layer.open({
            type: 1,
            shadeClose: true,
            content: $("#layer_download").html(),
            style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
        });
    })
    // function getRewardLst () {
        // publicRequest('getRewardLst', 'GET', {
        //     activity_id: activityId,
        //     reward_id: rewardId,
        //     limit: 7
        // }).then(function (data) {
        //     var lst = [];
        //     // console.log(data.data);
        //     if (data.is_succ) {
        //         lst = data.data;
        //         appendRewardLst(lst);
        //     }
        // });
    //     appendRewardLst();
    // }
    // 中奖列表
    // function appendRewardLst (list) {
    //     // console.log(list);
    //     if (list && list.length) {
    //         rewardLst = rewardLst.concat(list);  
    //     }
        
    //     $.each(rewardLst, function (index, value) {
    //         var dom = "<li>恭喜 "+value.phone+" 抽中 "+value.prize+" 美金</li>";
    //         $list1.append(dom);
    //         $list2.append(dom);
    //     });

    //     var h = $list1.height();
    //     // console.log(h);
    //     $list1.css({top: 0});
    //     $list2.css({top: h});
    //     startRow(h);
    // }

    // function startRow (h) {
    //     var t1, t2;

    //     setInterval(function () {
            
    //         t1 = $list1.position().top, t2 = $list2.position().top;
    //         t1--, t2--;

    //         if (t1 < -h) t1 = h;
    //         if (t2 < -h) t2 = h;

    //         $list1.css({top: t1});
    //         $list2.css({top: t2});
    //     }, 30);
    // }

    function checkReward () {
        $('#turntableStart').addClass('no-start').find('span').text('不可抽取');
        if($.cookie("token")){
            publicRequest('checkReward', 'POST', {
                activity_id: activityId,
                reward_id: rewardId,
                activity: activity
            }).then(function (data) {
                // console.log(data.data);
                if (data.is_succ) {
                    msg = data.data.message;
                    // $condition.html(data.data.message);
                    rewardCount = data.data.num;
                    if(rewardCount > 0){
                        $('#turntableStart').removeClass('no-start').find('span').text('开始抽奖')
                    }
                    
                } else {
                    msg = data.message;
                    // $condition.html(data.message);
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        }
        
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
            reward_id: rewardId,
            activity: activity
        };
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
                    var tmp = '';
                    if(data.data.type == 3){
                        tmp += "<div class='practicality'><img src='/white_label/bd/turntable/practicality-"+ data.data.prize_flag +".png' alt=''></div>"
                    }
                    tmp += "<h6 class='tit'>"+ data.data.reward_name +"</h6>"
                    // tmp +=  "<p class='con'>"+ +"</p>"

                    layer.open({
                        type: 1,
                        shadeClose: true,
                        className: 'winPrize',
                        content: $("#layer_download").html(),
                        style: 'padding:0;width:90%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
                    });
                    $('.winPrize .layer_download-con').html(tmp)
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

    // min 和 max 之间整数，包含min，不包含max
    function getRandomNum (min, max) {
        return Math.floor(Math.random()*(max-min)+min);
    }
}());