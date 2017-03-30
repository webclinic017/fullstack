;(function () {
    var ele = {
        gameBox: ".t36_game",
        btnLogin: ".t36_game__page1 .btn-login",
        btnGoGame: ".t36_game__page1 .btn-togame",
        btnTip: ".t36_game__page1 .btn-tip",
        btnStartGame: ".t36_game__page2 .btn-start",
        winnerList: ".t36_game__page2 .t36_game__page2-list ul.content",
        winnerListEmpty: ".t36_game__page2 .t36_game__page2-list div.content",
        gameChance: ".t36_game__page2 .game_chance img",
        gameBoxPokeWrapper: ".t36_game_box_wrapper",
        gameBoxPokeBox: ".t36_game_box",
        gameBoxPokeLi: ".t36_game_box .t36_game_box__list li",
        gameBoxPoke: ".t36_game_box .t36_game_box__list li div",
        gameBoxPokeFill: ".t36_game_box .t36_game_box__list li div span",
        phoneInp: ".t36_game__page3 .telephone input",
        codeInp: ".t36_game__page3 .verify_code input",
        passwordInp: ".t36_game__page3 .password input",
        btnVerCode: ".t36_game__page3 .verify_code_btn",
        btnRegister: ".t36_game__page3 .btn-register",
        registerBox: ".t36_game__page3 .t36_game__page3-reg"
    };
    var ajaxApi = {
        getGameInfo: '/action/public/wx/texas_holdem_info',         // 获取游戏信息
        saveGameResult: '/action/public/wx/texas_holdem_winning',   // 保存游戏信息
        gameWinnerList: '/action/public/wx/winning_lists',          // 中奖列表
        register: '/action/public/wx/texas_holdem_register',        // 注册
        setToken: '/action/public/v3/set_token',                    // 设置token
        getVerifyCode: '/action/public/v3/get_phone_reg_code',      // 获取验证码
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
    var isVerifyCode = false;               // 不可发送验证码
    var isRegister = false;
    var styleCfg = {};
    var gameInfoCfg = {
        gameChance: 0,     // 剩余游戏次数
        isWinAward: false,  // 是否中奖
        isGetAward: false,  // 是否领奖
        firstAwardNum: 0,
        secondAwardNum: 0,
        ThirdAwardNum: 0,
        isGameTime: false    // 是否是游戏时间
    };
    var oReg = {};
    var clientHeight = 0;
    var winnerListHtml = '';
    var tiger_token = null;
    var wx_token = $.cookie('wx_token');

    set_token();
    /*token 5分钟过期*/
    setInterval(function () {
        set_token();
    }, 300000);

    if (wx_token) {
        $(ele.btnLogin).removeClass("active");
        $(ele.btnGoGame).addClass("active");
        
        getGameInfo(true);
    } else {
        $(ele.btnGoGame).removeClass("active");
        $(ele.btnLogin).addClass("active");
    }

    // 微信分享配置
    if (wx) {
        wxShareConfig({
            title: '【抽奖赢福利】老虎外汇助力CMPT德扑赛事线上抽奖活动',
            subTitle: '老虎外汇多重礼，700美金砸向你！',
            shareLink: window.location.href,
            desc: '牌场失意，汇场得意，你观赛未猜中冠军依然还有机会，来老虎外汇再试试你的手气！',
            img: window.location.origin + '/activity/logo.png',
            trackPage: window.location.pathname.replace(/\//gi, ''),
            debug: false
        });
    } else {
        console.log("微信配置错误");
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

    setLayerStyle();

    clientHeight = getClientHeight();
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

    // 获取查询字段
    oReg.search_arr = getSearch();
    /*获取lp*/
    if (!oReg.search_arr.lp) {
        oReg.search_arr.lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();
    }
    
    // 获取中奖信息列表
    getWinnerList();

    // 微信登陆
    $(ele.btnLogin).on("tap", function () {
        console.log("to login");
        window.wxLongin();
    });
    // 马上抽奖
    $(ele.btnGoGame).on("tap", function () {
        console.log("to page2");
        $(ele.gameBox).addClass("page2");
    });
    // 注意事项
    $(ele.btnTip).on("tap", function (e) {
        layer.open({
            content: $("#layer-tip").html(),
            className: "page1-tip-layer",
            shadeClose: false,
            btn: ""
        });
        return false;
    });
    // close layer
    $(document).on("tap", ".page-msg-layer .layui-m-layercont .close", function () {
        layer.closeAll();
        return false;
    });

    // 开始游戏
    /*
     * 1.正在游戏中 isGaming
     * 2.是否是游戏时间 gameInfoCfg.isGameTime
     * 3.剩余游戏次数 gameInfoCfg.gameChance
     * 4.中奖情况&领奖情况 gameInfoCfg.isWinAward & gameInfoCfg.isGetAward
     * 5.奖池情况
     */
    $(ele.btnStartGame).on("tap", function () {
        if (!isGaming) {
            getGameInfo();
            isGaming = true;
            $(ele.btnStartGame).addClass("active");
        }
        return false;
    });

    // 获取验证码
    $(ele.btnVerCode).on("tap", function () {
        if (isVerifyCode) return;
        isVerifyCode = true;

        if (tiger_token) {
            // umeng
            _czc && _czc.push(["_trackEvent","t36_game注册","获取验证码"]);
            // 神策数据统计
            sa && sa.track('btn_register_code');
            sendVerifyCode();
        } else {
            sa && sa.track('set_token_failed');
            layer.open({
                content: '网络异常,请刷新重试!',
                skin: 'msg',
                time: 2
            });
        }
    });
    // register
    $(ele.btnRegister).on("tap", function () {
        var phone = $(ele.phoneInp).val();
        var code = $(ele.codeInp).val();
        var password = $(ele.passwordInp).val();
        // console.log(phone, code, password);
        if (phone && code && password) {
            register();
        } else {
            layer.open({
                content: '请填写注册信息!',
                skin: 'msg',
                time: 2
            });
        }
        return false;
    });

    // 监听安卓键盘事件
    if (!isIOS() || isAndriod()) {
        // console.log(clientHeight);
        $(window).resize(function(){
            if (getClientHeight() < clientHeight) {
                $(ele.registerBox).css({
                    marginTop: '-30%'
                });
            } else {
                $(ele.registerBox).css({
                    marginTop: '0'
                });
            }
        });
    }

    // set layer msg style
    function setLayerStyle () {
        styleCfg.layerContentWidth = $("body").width()*0.9 > 640 ? 640 : $("body").width()*0.9;
        styleCfg.layerContentHeight = styleCfg.layerContentWidth/777*616;
        // console.log(styleCfg.layerContentHeight);
    }

    // 设置剩余游戏次数
    function setGameChance () {
        $(ele.gameChance).removeClass("active");
        $(ele.gameChance).eq(gameInfoCfg.gameChance).addClass("active");
    }

    function getGameInfo (initialize) {
        initialize = initialize ? initialize : false;
        layer.closeAll();
        layer.open({
            type: 2,
            shadeClose: false
        });

        $.get(ajaxApi.getGameInfo).then(function (data) {
            data = JSON.parse(data);
            // console.log(data);
            layer.closeAll();
            
            if (data.is_succ) {
                gameInfoCfg.isGameTime = data.data.game_date || false;
                gameInfoCfg.gameChance = data.data.can_play_num || 0;
                gameInfoCfg.isWinAward = data.data.winning;
                gameInfoCfg.isGetAward = data.data.accept_the_prize;
                gameInfoCfg.firstAwardNum = data.data.level_1;
                gameInfoCfg.secondAwardNum = data.data.level_2;
                gameInfoCfg.ThirdAwardNum = data.data.level_3;

                // 判断游戏条件
                checkGameCondition(initialize);
            } else {
                canGame();
                layer.open({
                    content: data.error_msg,
                    skin: 'msg',
                    time: 2
                });
            }
        }, function (err) {
            console.log(err);
            layer.closeAll();
            canGame();
            layer.open({
                content: '信息获取失败',
                skin: 'msg',
                time: 2
            });
        });
    }
    
    function checkGameCondition (initialize) {
        if (initialize) {
            setGameChance();
        }
        if (gameInfoCfg.isGameTime) {   // 判断游戏时间
            if (initialize) {
                if (gameInfoCfg.isWinAward) {   // 是否中奖
                    if (gameInfoCfg.isGetAward) {   // 是否领奖
                        openLayerMsg({
                            btnArr: ['我知道了'],
                            content: '您已中奖<br>且领取过奖励'
                        });
                    } else {
                        openLayerMsg({
                            btnArr: ['马上领奖'],
                            content: '您已中奖<br>请前往注册领取',
                            yesFunc: function () {
                                layer.closeAll();
                                $(ele.gameBox).addClass("page3");
                            }
                        });
                    }
                }
            } else {
                if (gameInfoCfg.gameChance) {   // 判断剩余游戏次数
                    startGame();
                } else {
                    console.log("游戏剩余次数为0");
                    canGame();
                    if (gameInfoCfg.isWinAward) {   // 是否中奖
                        if (gameInfoCfg.isGetAward) {   // 是否领奖
                            openLayerMsg({
                                title: '机会已用尽',
                                btnArr: ['我知道了'],
                                content: '您已中奖<br>且领取过奖励'
                            });
                        } else {
                            openLayerMsg({
                                title: '机会已用尽',
                                btnArr: ['马上领奖'],
                                content: '您有中奖未领取<br>请前往注册领取',
                                yesFunc: function () {
                                    layer.closeAll();
                                    $(ele.gameBox).addClass("page3");
                                }
                            });
                        }
                    } else {
                        openLayerMsg({
                            title: '机会已用尽',
                            yesFunc: function () {
                                layer.closeAll();
                                $(ele.gameBox).addClass("page3");
                            }
                        });
                    }
                }
            }
        } else {
            console.log("未到游戏时间");
            if (initialize) return;
            canGame();
            openLayerMsg({
                btnArr: [],
                title: '别心急',
                content: '现在还未到<br>开始抽奖时间'
            });
        }
    }

    function openLayerMsg (config) {
        config      = config || {};
        var tit     = config.title || '温馨提示';
        var cont    = config.content || '老虎外汇<br>为您准备了一份薄礼';
        var btnArr  = config.btnArr || ['注册领红包'];
        var yesFunc = config.yesFunc || function () {layer.closeAll();};
        var noFunc  = config.noFunc || function () {ayer.closeAll();};
        layer.open({
            content: '<i class="close"></i><p class="tit">'+ tit +'</p><p class="cont">'+ cont +'</p><p class="tip">详情咨询老虎外汇400-809-8509</p>',
            className: "page-msg-layer",
            style: 'height: '+styleCfg.layerContentHeight+'px',
            shadeClose: false,
            btn: btnArr,
            yes: function () {
                yesFunc();
            },
            no: function () {
                noFunc();
            }
        });
    }

    function canGame () {
        isGaming = false;
        $(ele.btnStartGame).removeClass("active");
    }

    function startGame () {
        // 获取奖池情况 start
        var awardPool = {   // true -> 不存在, false -> 存在 
            first: false,
            second: false,
            third: false
        };
        if (gameInfoCfg.isWinAward || gameInfoCfg.isGetAward) {
            awardPool = { 
                first: true,
                second: true,
                third: true
            };
        } else {
            if (gameInfoCfg.firstAwardNum >= 2) {
                awardPool.first = true;
            }
            if (gameInfoCfg.secondAwardNum >= 10) {
                awardPool.second = true;
            }
            if (gameInfoCfg.ThirdAwardNum >= 20) {
                awardPool.third = true;
            }
        }
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
        var top1 = 0, top2 = 42;
        var speed = 6;
        var isTime = false;     // 是否关闭定时器
        var isSetTime = false;  // 是否设置了isTime
        var delayTime = getRandomNum(2000, 3000);
        var scaleX, scaleY, result;
        // console.log(restOfAward);
        timer = setInterval(function () {
            top1 = top1 - speed;
            top2 = top2 - speed;
            if (top1 <= -42) {
                getOnePoke(s1, restOfAward);

                scaleX = selectPokePool[s1].split('_')[0];
                scaleY = selectPokePool[s1].split('_')[1];
                // $(ele.gameBoxPokeFill).eq(s1).html(selectPokePool[s1]);
                $(ele.gameBoxPokeFill).eq(s1).css({
                    backgroundPosition: -styleCfg.pokeSingleWidth*scaleX+"px -"+styleCfg.pokeSingleHeight*scaleY+"px"
                });
            }
            if (top2 <= -42) {
                getOnePoke(s2, restOfAward);
                
                scaleX = selectPokePool[s2].split('_')[0];
                scaleY = selectPokePool[s2].split('_')[1];
                // $(ele.gameBoxPokeFill).eq(s2).html(selectPokePool[s2]);
                $(ele.gameBoxPokeFill).eq(s2).css({
                    backgroundPosition: -styleCfg.pokeSingleWidth*scaleX+"px -"+styleCfg.pokeSingleHeight*scaleY+"px"
                });
            }
            top1 = top1 <= -42 ? 42 : top1;
            top2 = top2 <= -42 ? 42 : top2;
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
                        result = judgeGameResult();
                        saveGameResult(result);
                    }
                }
            }
        }, 30);
    }
    
    function saveGameResult (result) {
        layer.open({
            type: 2,
            shadeClose: false
        });
        var text = result.key+'';
        var key = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDN67wAcj1WL/scb9TuvawbqMABg2sYXdmLkzXYUK/qbZI168gpM1t4SqS2qxYuEy+a/rOQ/YokJy0Q+dwQBEUmRWd4//64D3shkMMPZ0VuQ67LmVbFzbaly9dEYbAkoKvd4qcVxG1qAYlPGAKVZjRbf3q6d1CGeUGQqoynofTZNwIDAQAB-----END PUBLIC KEY-----';
        var crypt = new JSEncrypt();
        crypt.setKey(key);
        var textEnc = crypt.encrypt(text);
        $.post(ajaxApi.saveGameResult, {level: textEnc}).then(function (data) {
            data = JSON.parse(data);
            // console.log(data);
            if (data.is_succ) {
                canGame();
                layer.closeAll();
                gameInfoCfg.gameChance = data.can_play_num || 0;
                setGameChance();
                if (gameInfoCfg.gameChance > 0) {
                    if (result.key > 0) {
                        openLayerMsg({
                            title: '恭喜您',
                            content: '获得'+result.value+'<br>$'+result.bag+'红包',
                            btnArr: ['继续抽奖', '马上领奖'],
                            noFunc: function () {
                                layer.closeAll();
                                $(ele.gameBox).addClass("page3");
                            }
                        });
                    } else {
                        openLayerMsg({
                            title: '很遗憾',
                            content: '听说下一次<br>中奖几率会更高',
                            btnArr: ['再来一次']
                        });
                    }
                } else {
                    if (result.key > 0) {
                        openLayerMsg({
                            title: '恭喜您',
                            content: '获得'+result.value+'<br>$'+result.bag+'红包还未领取',
                            btnArr: ['马上领奖'],
                            yesFunc: function () {
                                layer.closeAll();
                                $(ele.gameBox).addClass("page3");
                            }
                        });
                    } else {
                        openLayerMsg({
                            title: '机会已用尽',
                            yesFunc: function () {
                                layer.closeAll();
                                $(ele.gameBox).addClass("page3");
                            }
                        });
                    }
                }
            } else {
                canGame();
                layer.closeAll();
                layer.open({
                    content: data.error_msg,
                    skin: 'msg',
                    time: 2
                });
            }
        }, function (err) {
            console.log(err);
            canGame();
            layer.closeAll();
            layer.open({
                content: '游戏存储失败',
                skin: 'msg',
                time: 2
            });
        });
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
                value: "一等奖",
                bag: 500
            };
        }
        // 二等奖 [A K 10 Q J] 无位置、无花色要求顺子
        if (!(yIsThreeSame || yIsThreeSame || yIsTwoSameNum)) {
            console.log("二等奖");
            return {
                key: 2,
                value: "二等奖",
                bag: 300
            };
        }
        // 三等奖 [K K K A A] [K K K A Q]
        if (yIsThreeSame) {
            console.log("三等奖");
            return {
                key: 3,
                value: "三等奖",
                bag: 200
            };
        }
        console.log("未中奖");
        return {
            key: 0,
            value: "未中奖",
            bag: 0
        };
    }

    function getWinnerList () {
        $.get(ajaxApi.gameWinnerList, {
            page: 1,
            pagesize: 1000
        }).then(function (data) {
            data = JSON.parse(data);
            // console.log(data);
            if (data.is_succ) {
                winnerListHtml = "";
                $.each(data.data, function (index, value) {
                    var li = "<li class='clearfix'><span>"+value.nickname+"</span><span>$"+value.amount+"</span></li>";
                    winnerListHtml+=li;
                });
                if (winnerListHtml) {
                    $(ele.winnerList).html(winnerListHtml);
                    $(ele.winnerListEmpty).removeClass("active");
                    $(ele.winnerList).addClass("active");
                } else {
                    $(ele.winnerListEmpty).addClass("active");
                    $(ele.winnerList).removeClass("active");
                }
            }
        }, function (err) {
            console.log(err);
            $(ele.winnerListEmpty).addClass("active");
            $(ele.winnerList).removeClass("active");
        });
    }

    // register
    function set_token() {
        $.ajax({
            type: "post",
            url: ajaxApi.setToken,
            success: function () {
                tiger_token = $.cookie("tiger_token");
            }
        });
    }
    function sendVerifyCode () {
        $.post(ajaxApi.getVerifyCode, {
            phone: $(ele.phoneInp).val(),
            token: tiger_token
        }).then(function (data) {
            data = JSON.parse(data);
            // console.log(data);
            if (data.is_succ) {
                layer.open({
                    content: '验证码发送成功!',
                    skin: 'msg',
                    time: 2
                });
                countDownTime();
            } else {
                isVerifyCode = false;
                layer.open({
                    content: data.error_msg,
                    skin: 'msg',
                    time: 2
                });
            }
        }, function (err) {
            console.log(err);
            isVerifyCode = false;
            layer.open({
                content: '验证码发送失败!',
                skin: 'msg',
                time: 2
            });
        });
    }
    function register () {
        if (isRegister) return;
        isRegister = true;
        layer.closeAll();
        layer.open({
            type: 2,
            shadeClose: false
        });
        // 神策数据统计
        sa && sa.track('btn_register_submit');
        $.post(ajaxApi.register, {
            phone: $(ele.phoneInp).val() || "",
            password: $(ele.passwordInp).val() || "",
            verify_code: $(ele.codeInp).val() || "",
            pid: oReg.search_arr.pid || "",
            unit: oReg.search_arr.unit || "",
            lp: oReg.search_arr.lp || "",
            key: oReg.search_arr.key || "",
            email: oReg.search_arr.email || ""
        }).then(function (data) {
            data = JSON.parse(data);
            // console.log(data);
            isRegister = true;
            layer.closeAll();
            if (data.is_succ) {
                // umeng
                _czc.push(["_trackEvent","t36_game注册","立即注册且成功"]);
                // 神策数据统计
                sa.track('btn_register_finish');
                layer.open({
                    content: '注册成功!',
                    skin: 'msg',
                    time: 2
                });
                console.log("to page4");
                $(ele.gameBox).addClass("page4");
            } else {
                layer.open({
                    content: data.error_msg,
                    skin: 'msg',
                    time: 2
                });
            }
        }, function (err) {
            console.log(err);
            isRegister = false;
            layer.closeAll();
            layer.open({
                content: '注册失败!',
                skin: 'msg',
                time: 2
            });
        });
    }
    function countDownTime () {
        var time = 59;
        var countTimer = null;
        $(ele.btnVerCode).html(time);

        countTimer = setInterval(function () {
            time--;
            if (time <= 0) {
                $(ele.btnVerCode).html("验证码");
                isVerifyCode = false;
                clearInterval(countTimer);
            } else {
                $(ele.btnVerCode).html(time);
            }
        }, 1000);
    }
    /*获取查询字段*/
    function getSearch() {
        var url = location.search;
        /*获取url中"?"符后的字串*/
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
}());















