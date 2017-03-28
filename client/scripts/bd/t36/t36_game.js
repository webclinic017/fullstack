;(function () {
    var ele = {
        gameBox: ".t36_game",
        btnLogin: ".t36_game__page1 .btn-login",
        btnGoGame: ".t36_game__page1 .btn-togame",
        btnStartGame: ".t36_game__page2 .btn-start",
        gameChangce: ".t36_game__page2 .game_chance img",
        gameBoxPokeWrapper: ".t36_game_box_wrapper",
        gameBoxPokeBox: ".t36_game_box",
        gameBoxPokeLi: ".t36_game_box .t36_game_box__list li",
        gameBoxPoke: ".t36_game_box .t36_game_box__list li div",
        gameBoxPokeFill: ".t36_game_box .t36_game_box__list li div span",
        // gameBoxSelectPoke: ".t36_game_box .t36_game_box__list li span.select",
        // gameBoxReadyPoke: ".t36_game_box .t36_game_box__list li span.ready"
    };
    var pokeData = [];                      // 所有的扑克牌
    var selectPoke = [];                    // 游戏结束后选择的牌
    var selectPokePool = new Array();       // 备选的10张牌
    selectPokePool.length = 10;
    var oTimer = {
        timer0: null,timer1: null,timer2: null,timer3: null,timer4: null
    };
    var isSelectRightNum = 0;               // 选择确定数量
    var isGaming = false;                   // 正在游戏
    var wx_token = $.cookie('wx_token');
    var styleCfg = {};
    var gameChangce = 0;    // test

    if (wx_token) {
        $(ele.btnLogin).removeClass("active");
        $(ele.btnGoGame).addClass("active");
    } else {
        $(ele.btnGoGame).removeClass("active");
        $(ele.btnLogin).addClass("active");
    }

    /* set dom style */
    styleCfg.pokeWrapperHeight = $(ele.gameBoxPokeWrapper).height();
    styleCfg.pokeWrapperScale = styleCfg.pokeWrapperHeight/602;

    $(ele.gameBoxPokeWrapper).width(styleCfg.pokeWrapperScale*680);
    $(ele.btnStartGame).width(styleCfg.pokeWrapperScale*250);
    $(ele.btnStartGame).height(styleCfg.pokeWrapperScale*99);
    $(ele.btnStartGame).css({marginLeft: -styleCfg.pokeWrapperScale*250/2, top: styleCfg.pokeWrapperScale*412});

    $(ele.gameBoxPokeBox).width(styleCfg.pokeWrapperScale*430);
    $(ele.gameBoxPokeBox).height(styleCfg.pokeWrapperScale*115);
    $(ele.gameBoxPokeBox).css({marginLeft: -styleCfg.pokeWrapperScale*430/2, top: styleCfg.pokeWrapperScale*198});

    $(ele.gameBoxPokeLi).width(styleCfg.pokeWrapperScale*65);
    $(ele.gameBoxPokeLi).height(styleCfg.pokeWrapperScale*115);
    $(ele.gameBoxPokeLi).css({marginRight: styleCfg.pokeWrapperScale*26});

    styleCfg.pokeSingleWidth = styleCfg.pokeWrapperScale*50;
    styleCfg.pokeSingleHeight = styleCfg.pokeWrapperScale*53.333;

    $(ele.gameBoxPokeFill).width(styleCfg.pokeSingleWidth);
    $(ele.gameBoxPokeFill).height(styleCfg.pokeSingleHeight);
    $(ele.gameBoxPokeFill).css({
        backgroundSize: styleCfg.pokeWrapperScale*200+"px "+styleCfg.pokeWrapperScale*266.665+"px",
        marginTop: -styleCfg.pokeWrapperScale*50/2,
        marginLeft: -styleCfg.pokeWrapperScale*53.333/2,
        // backgroundPosition: -styleCfg.pokeSingleWidth+"px -"+styleCfg.pokeSingleHeight+"px"
    });
    
    $(ele.gameChangce).removeClass("active");
    $(ele.gameChangce).eq(gameChangce).addClass("active");
    /* set dom style end */

    // 初始化扑克牌坐标
    for (var i=0; i<4; i++) {
        for (var j=0; j<5; j++) {
            pokeData.push({x: i, y: j});
        }
    }
    // console.log(pokeData);
    // 初始化备选扑克牌
    for (var i=0; i<10; i++) {
        getOnePoke(i);
    }

    // 填充poke
    $.each($(ele.gameBoxPokeFill), function (index, value) {
        var scaleX = selectPokePool[index].split('_')[0];
        var scaleY = selectPokePool[index].split('_')[1];
        // $(value).html(selectPokePool[index]);
        $(value).css({
            backgroundPosition: -styleCfg.pokeSingleWidth*scaleX+"px -"+styleCfg.pokeSingleHeight*scaleY+"px"
        });
    });

    // 微信登陆
    $(ele.btnLogin).on("touchend", function () {
        console.log("to login");
        window.wxLongin();
    });

    // 马上抽奖
    $(ele.btnGoGame).on("touchend", function () {
        console.log("to page2");
        $(ele.gameBox).addClass("page2");
    });

    // 开始游戏
    $(ele.btnStartGame).on("touchend", function () {
        if (!isGaming) {
            isGaming = true;
            $(ele.btnStartGame).addClass("active");
            startGame();
        }
    });

    function startGame () {
        // 获取奖池情况 start

        var awardPool = {   // true -> 不存在, false -> 存在 
            first: false,
            second: false,
            third: false
        };
        var restOfAward = checkAwardPool(awardPool);
        // 获取奖池情况 end
        selectPoke = [];
        // console.log(selectPoke.length);
        // console.log(oTimer);
        for (var i=0; i<5; i++) {
            var time = getRandomNum(30, 600);
            var timer = "timer"+i;
            startTimer(i, time, timer, restOfAward);
        }
    }
    function startTimer (i, time, timer, restOfAward) {
        setTimeout(function () {
            setTimer(i, oTimer[timer], restOfAward);
        }, time);
    }

    // 随机选出一张扑克牌,并检测重复性
    function getOnePoke (pos, restOfAward) {
        restOfAward = restOfAward ? restOfAward : 0;
        var x = getRandomNum(0, 4);
        var y = getRandomNum(0, 5);
        var poke = x+"_"+y;
        var h = false;
        var ySelect = [                         // 记录前四张牌的y值
            {y: 0, num: 0},
            {y: 1, num: 0},
            {y: 2, num: 0},
            {y: 3, num: 0},
            {y: 4, num: 0}
        ];
        var ySelectSame = 1;
        $.each(selectPokePool, function (index, value) {
            if (index%2 === 0) {
                if (value === poke) {
                    h = true;
                }
            }
        });
        if ((pos%2 === 0) && !h) {
            isSelectRightNum = 0;

            // 0 -> 所有奖项都在
            if (restOfAward === 0) {
                isSelectRightNum = selectPoke.length;
            }
            // 6 -> 存在二、三等奖
            if (restOfAward === 6) {
                if ((selectPoke.length === 1) || (selectPoke.length === 2)) {
                    if (checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
            // 5 -> 存在一、三等奖
            if (restOfAward === 5) {
                if (selectPoke.length === 4) {
                    if (!checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
            // 2 -> 只存在二等奖
            if (restOfAward === 2) {
                if ((selectPoke.length === 1) || (selectPoke.length === 2) || (selectPoke.length === 3)) {
                    if (checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
            // 3 -> 只存在三等奖
            if (restOfAward === 3) {
                if ((selectPoke.length === 1) || (selectPoke.length === 2)) {
                    if (checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else if (selectPoke.length === 4) {
                    if (!checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
            // 7 -> 所有奖项都不存在
            if (restOfAward === 7) {
                if ((selectPoke.length === 1) || (selectPoke.length === 2) || (selectPoke.length === 3)) {
                    if (checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else if (selectPoke.length === 4) {
                    if (!checkPoke(y)) {
                        h = true;
                    } else {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
            // 1 -> 只存在一等奖,  4 -> 存在一、二等奖
            if ((restOfAward === 1) || (restOfAward === 4)) {
                if (selectPoke.length === 4) {
                    $.each(selectPoke, function (index, value) {
                        $.each(ySelect, function (index2, value2) {
                            if (value2.y === value.y) {
                                value2.num++;
                            }
                        });
                    });
                    // console.log(ySelect, selectPoke);
                    $.each(ySelect, function (index, value) {
                        if (value.num === 4) {
                            ySelectSame = 4;
                        }
                        if (value.num === 3) {
                            ySelectSame = 3;
                        }
                        if (value.num === 2) {
                            ySelectSame = 2;
                        }
                    });
                    if (ySelectSame === 1) {
                        if (restOfAward === 1) {
                            if (!checkPoke(y)) {
                                h = true;
                            } else {
                                isSelectRightNum = selectPoke.length;
                            }
                        } else {
                            isSelectRightNum = selectPoke.length;
                        }
                    } else if (ySelectSame === 2) {
                        if (checkPoke(y)) {
                            h = true;
                        } else {
                            isSelectRightNum = selectPoke.length;
                        }
                    } else if (ySelectSame === 3) {
                        $.each(ySelect, function (index, value) {
                            if (value.num === 3) {
                                if (y === value.y) {
                                    isSelectRightNum = selectPoke.length;
                                } else {
                                    h = true;
                                }
                            }
                        });
                    } else if (ySelectSame === 4) {
                        isSelectRightNum = selectPoke.length;
                    }
                } else {
                    isSelectRightNum = selectPoke.length;
                }
            }
        }
        
        if (h) {
            getOnePoke(pos, restOfAward);
        } else {
            selectPokePool[pos] = poke;
        }
        // console.log(poke, selectPokePool);
    }

    // 检测某张牌
    function checkPoke (y) {
        var sameBefore = false;
        $.each(selectPoke, function (index, value) {
            // console.log(y, value);
            if (y === value.y) {
                sameBefore = true;
            }
        });
        return sameBefore;
    }

    // Check award pool 
    function checkAwardPool(awardPool) {
        /*
         * restOfAward
         * 0 : 所有奖项都在
         * 1 : 只存在一等奖
         * 2 : 只存在二等奖
         * 3 : 只存在三等奖
         * 4 : 存在一、二等奖
         * 5 : 存在一、三等奖
         * 6 : 存在二、三等奖
         * 7 : 所有奖项都不存在
         */
        var restOfAward = 0;

        if (awardPool.first && awardPool.second && awardPool.third) {
            restOfAward = 7;
        }
        if (!awardPool.first && awardPool.second && awardPool.third) {
            restOfAward = 1;
        }
        if (awardPool.first && !awardPool.second && awardPool.third) {
            restOfAward = 2;
        }
        if (awardPool.first && awardPool.second && !awardPool.third) {
            restOfAward = 3;
        }
        if (!awardPool.first && !awardPool.second && awardPool.third) {
            restOfAward = 4;
        }
        if (!awardPool.first && awardPool.second && !awardPool.third) {
            restOfAward = 5;
        }
        if (awardPool.first && !awardPool.second && !awardPool.third) {
            restOfAward = 6;
        }
        return restOfAward;
    }

    // m 和 n 之间整数，包含m，不包含n
    function getRandomNum (m, n) {
        return Math.floor(Math.random()*(n-m)+m);
    }
    
    function setTimer (li, timer, restOfAward) {
        li = li ? li : 0;
        var s1 = li*2, s2 = li*2+1;
        var top1 = 0, top2 = 40;
        var speed = 5;
        var isTime = false;     // 是否关闭定时器
        var isSetTime = false;  // 是否设置了isTime
        var delayTime = getRandomNum(1000, 2000);
        var scaleX, scaleY;
        // console.log(restOfAward);
        timer = setInterval(function () {
            top1 = top1 - speed;
            top2 = top2 - speed;
            if (top1 <= -40) {
                getOnePoke(s1, restOfAward);

                scaleX = selectPokePool[s1].split('_')[0];
                scaleY = selectPokePool[s1].split('_')[1];
                // $(ele.gameBoxPokeFill).eq(s1).html(selectPokePool[s1]);
                $(ele.gameBoxPokeFill).eq(s1).css({
                    backgroundPosition: -styleCfg.pokeSingleWidth*scaleX+"px -"+styleCfg.pokeSingleHeight*scaleY+"px"
                });
            }
            if (top2 <= -40) {
                getOnePoke(s2, restOfAward);
                
                scaleX = selectPokePool[s2].split('_')[0];
                scaleY = selectPokePool[s2].split('_')[1];
                // $(ele.gameBoxPokeFill).eq(s2).html(selectPokePool[s2]);
                $(ele.gameBoxPokeFill).eq(s2).css({
                    backgroundPosition: -styleCfg.pokeSingleWidth*scaleX+"px -"+styleCfg.pokeSingleHeight*scaleY+"px"
                });
            }
            top1 = top1 <= -40 ? 40 : top1;
            top2 = top2 <= -40 ? 40 : top2;
            $(ele.gameBoxPoke).eq(s1).css('top', top1+'px');
            $(ele.gameBoxPoke).eq(s2).css('top', top2+'px');

            // delayTime后，isTime设为true
            if (!isSetTime) {
                isSetTime = true;
                setTimeout(function () {
                    isTime = true;
                }, delayTime);
            }
            // 停在span.select位置上
            if (isTime) {
                if (top1 === 0) {
                    // 已选择数量&选择确定数量
                    if (selectPoke.length !== isSelectRightNum) {
                        return;
                    }
                    // console.log(selectPoke, selectPokePool[s1]);
                    selectPoke.push({
                        x: Number(selectPokePool[s1].split('_')[0]),
                        y: Number(selectPokePool[s1].split('_')[1])
                    });
                    clearInterval(timer);
                    
                    if (selectPoke.length === 5) {
                        // console.log(selectPoke);
                        console.log("游戏结束");
                        // selectPoke = [
                        //     {x: 0, y:1},
                        //     {x: 1, y:1},
                        //     {x: 2, y:1},
                        //     {x: 3, y:1},
                        //     {x: 0, y:0}
                        // ];
                        isGaming = false;
                        $(ele.btnStartGame).removeClass("active");
                        judgeGameResult();
                    }
                }
            }
        }, 30);
    }

    function judgeGameResult () {
        var numberX = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0
        };
        var numberY = {
            "0": 0,
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0
        };
        var yIsFourSame = false;    // 有4个相同的y
        var yIsThreeSame = false;   // 有3个相同的y
        var yIsTwoSameNum = 0;      // 有2个相同的y的数量

        $.each(selectPoke, function (index, value) {
            var x = value.x+'';
            var y = value.y+'';
            numberX[x]++;
            numberY[y]++;
        });
        $.each(numberY, function (index, value) {
            if (numberY[index] === 4) {
                yIsFourSame = true;
            }
            if (numberY[index] === 3) {
                yIsThreeSame = true;
            }
            if (numberY[index] === 2) {
                yIsTwoSameNum++;
            }
        });
        // 一等奖 [K K K K A]
        if (yIsFourSame) {
            console.log("一等奖");
            return {
                key: 1,
                value: "一等奖"
            };
        }
        // 二等奖 [A K 10 Q J] 无位置、无花色要求顺子
        if (!(yIsThreeSame || yIsThreeSame || yIsTwoSameNum)) {
            console.log("二等奖");
            return {
                key: 2,
                value: "二等奖"
            };
        }
        // 三等奖 [K K K A A] [K K K A Q]
        if (yIsThreeSame) {
            console.log("三等奖");
            return {
                key: 3,
                value: "三等奖"
            };
        }
        console.log("未中奖");
        return {
            key: 0,
            value: "未中奖"
        }
    }
}());















