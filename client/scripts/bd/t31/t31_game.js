;(function () {
    window.onload = function () {
        $("title").html("老虎外汇 - 微盘大师");
        function Stock_game(id) {
            //缓存this
            var _this = this;
            //获取DOM对象
            this.cvs = document.getElementById(id);
            this.ctx = this.cvs.getContext('2d');
            this.fall_btn = $("#fall_btn");
            this.rise_btn = $("#rise_btn");
            this.game_tips = $("#game-tips");
            this.real_score = $("#real_score");
            this.wxlogin = $("#wxlogin");
            this.start_game = $("#start");
            this.gp_start = $("#gp_start");
            this.gpStart = false;
            this.gp_game_rule = $("#gp_game_rule");
            this.game_box = $("#game_box");
            this.btns = $(".btns");
            this.loadding = $("#loadding");
            this.audio = $("#audio")[0];
            this.music_ctrl = $("#music_ctrl");
            this.bgm_pause = $("#bgm_pause");
            this.end_score = $("#end_score");
            this.end_page = $("#end_page");
            this.replay = $("#replay");
            this.replay_tip = $("#replay_tip");
            this.share = $("#share");
            this.wxshare_mask = $("#wxshare_mask");
            this.get_award = $("#get_award");
            this.get_award_now = $("#get_award_now");
            this.award_tips = $("#award_tips");
            this.award_tips_words = $("#tip_words");
            this.focus_tip = $("#focus_tip");
            this.end_tips = $("#end_tips");
            this.close_tip = $(".close_tip");
            this.close_award_tips = $("#close_award_tips");
            this.real_name = $("#real_name");
            this.real_tel = $("#real_tel");
            this.award_page = $("#award_page");
            this.award_back = $("#award_back");
            this.focusWx = $("#focusWx");
            this.dowload_app_1 = $("#download_app_1");
            this.dowload_app_2 = $("#download_app_2");
            this.award_tips_code = $("#award_tips_code");
            this.award_wx_login = $("#award_wx_login");

            // 获取当前画布宽、高 --> 设置canvas的数据宽高;
            this.cur_w = parseInt(getStyle(this.cvs, 'width'));
            this.cvs.width = this.cur_w;
            console.log('当前设备宽度 ->' + this.cur_w);
            this.cur_h = parseInt(getStyle(this.cvs, 'height'));
            this.cvs.height = this.cur_h;
            console.log('当前设备高度 ->' + this.cur_h);

            //获取计算后的属性 - 兼容
            function getStyle(obj, name) {
                if (obj.currentStyle) {
                    return obj.currentStyle[name];
                } else {
                    return getComputedStyle(obj, false)[name];
                }
            }

            //按钮控制
            (function (game) {
                //关闭按钮
                game.close_tip.on("touchend", function (e) {
                    $(e.target).parent().fadeOut(400);
                });

                //为按钮添加激活样式
                game.btns.on("touchstart", function (e) {
                    e.target.classList.add("active");
                });

                //为按钮移除激活样式
                game.btns.on("touchend", function (e) {
                    e.target.classList.remove("active");
                });

                //控制音乐播放暂停
                game.music_ctrl.on("touchend", function (e) {
                    game.bgm_pause.toggle();
                    if (getStyle(game.bgm_pause[0], "display") == "block") {
                        game.audio.pause();
                    } else {
                        game.audio.play();
                    }
                });

                //触发游戏开始
                game.start_game.on("touchend", function () {
                    //触发游戏开始
                    game.start_game.trigger("start_game");
                });

                //游戏界面中的开始按钮
                game.gp_start.on("touchend", function () {
                    //触发游戏开始
                    game.gpStart = true;
                    game.start_game.trigger("start_game");
                    game.gp_game_rule.fadeOut(500);
                });

                //微信登录
                game.wxlogin.on("touchend", function () {
                    window.wx_game.login()
                    // umeng
                    _czc.push(["_trackEvent", "微盘大师游戏首页", "微信登录按钮"]);
                });

                // 游戏结束页 app下载按钮
                game.dowload_app_1.on("touchend", function (e) {
                    // umeng
                    _czc.push(["_trackEvent", "微盘大师游戏结束页", "APP下载按钮"]);
                });

                // 申领奖励页 app下载按钮
                game.dowload_app_2.on("touchend", function (e) {
                    // umeng
                    _czc.push(["_trackEvent", "微盘大师申领奖励页", "APP下载按钮"]);
                });

                //返回上一页
                game.award_back.on("tap", function () {
                    //返回上一页
                    game.award_page.css({
                        "-webkit-transform": "rotate(-180deg)", /* Safari 和 Chrome */
                        "transform": "rotate(-180deg)"
                    });
                    setTimeout(function(){
                        game.game_box.css({
                            top: -_this.cur_h * 2 //定位到领取奖励页面
                        });
                    },200);
                    //恢复
                    setTimeout(function(){
                        game.award_page.css({
                            "-webkit-transform": "rotate(-45deg)", /* Safari 和 Chrome */
                            "transform": "rotate(-45deg)"
                        });
                    },500);
                    return false;
                });

                //分享按钮
                game.share.on("touchend", function (e) {

                    // umeng
                    _czc.push(["_trackEvent", "微盘大师游戏结束页", "战绩分享按钮"]);

                    if (window.wx_game.isWeixin) {
                        game.wxshare_mask.css({
                            "display": "block",
                            "top": 2 * game.cur_h
                        });
                    } else {
                        _this.wxshare_mask.css({
                            display: "block",
                            background: "rgba(255,255,255,0.95)"
                        }).html("<p>长按复制下方链接,去粘贴给好友吧</p><br/><p style='text-decoration:underline;'>" + window.location.href + "<p/>");
                    }
                    return false;
                });

                //分享按钮三个事件 /控制显示隐藏
                game.wxshare_mask.on("touchstart", function (e) {
                    game.wxshare_mask.touch_moved = false;
                });
                game.wxshare_mask.on("touchmove", function (e) {
                    game.wxshare_mask.touch_moved = true;
                });
                game.wxshare_mask.on("touchend", function (e) {
                    //alert(game.wxshare_mask.touch_moved);
                    if (game.wxshare_mask.touch_moved == true) {
                        return false;
                    } else {
                        setTimeout(function () {
                            game.wxshare_mask.fadeOut(500);
                        }, 500);
                    }
                });

                //关注微信按钮 ---> 变为t31活动页
                game.focusWx.on("touchend", function (e) {
                    //game.focus_tip.fadeIn(500);
                    window.location.href = "https://www.tigerwit.com/bd/t31?pid=WPDS";
                });

                // 领取奖励按钮
                game.get_award.on("touchend", function (e) {

                    // umeng
                    _czc.push(["_trackEvent", "微盘大师游戏结束页", "领取奖励按钮"]);

                    //定位到领取奖励页面
                    _this.game_box.css({
                        top: -_this.cur_h * 3
                    });
                    //禁止光标获得焦点
                    $("input").blur();

                    //做左右倾斜动画
                    game.award_page.css({
                        "-webkit-transform": "rotate(20deg)", /* Safari 和 Chrome */
                        "transform": "rotate(20deg)"
                    });

                    setTimeout(function () {
                        game.award_page.css({
                            "-webkit-transform": "rotate(0deg)", /* Safari 和 Chrome */
                            "transform": "rotate(0deg)"
                        });
                    }, 800);
                });

                //立即领取奖励按钮
                $(":input").focus(function (e) {
                    $(e.target).removeClass("warning");
                    $(e.target).val("");
                });
                game.get_award_now.on("touchend", function () {
                    var input = game.real_name;
                    var rName = input.val() ? input.val() : "";
                    if (/^[\u4e00-\u9fa5]+$/.test(input.val())) {
                        function checkLength(name) {
                            var num = 0;
                            for (var i = 0; i < name.length; i++) {
                                if (/^[\u4e00-\u9fa5]$/.test(name[i])) {
                                    num += 2;
                                } else {
                                    num++;
                                }
                            }
                            return num;
                        }

                        var username_length = parseInt(checkLength(input.val()));
                        if (username_length < 4 || username_length > 16) {
                            input.val("姓名应在2到16个字").addClass("warning");
                        }
                    } else if (!(/^[\u4e00-\u9fa5]+$/.test(input.val()))) {
                        input.val("姓名格式不正确").addClass("warning");
                    }
                    if ((input.val() == "") || (input.val() == "请填写姓名")) {
                        input.val(" 请填写真实姓名").addClass("warning");
                    }
                    var input = game.real_tel;
                    var rPhone = input.val() ? input.val() : "";
                    var isMobile = /^(13|14|15|17|18)\d{9}$/;
                    var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
                    if ((input.val() == "") || (input.val() == "请填写有效的电话号码") || (!isMobile.test(input.val()) && !isPhone.test(input.val()))) {
                        input.val(" 请填写有效的电话号码").addClass("warning");
                    }

                    if ($(":input").hasClass("warning")) {
                        return false;
                    } else {
                        /*
                         品友DSP,负责人:蔡雪峰 添加日期：2016.7.12
                         //删除此段代码时需要同时删除调用pyRegisterCvt (../t1/script/check.js)
                         ==begin==
                         */
                        if (window.pyRegisterCvt) {
                            window.pyRegisterCvt(rPhone);
                        }
                        /*
                         品友DPS
                         ==end==
                         */

                        // umeng
                        _czc.push(["_trackEvent", "微盘大师申领奖励页", "提交按钮"]);

                        if (window.location.search) {
                            _this.pid_words = window.location.search.split("pid=");
                            if (_this.pid_words) {
                                _this.pid = _this.pid_words[1].split("&")[0] || null;
                            }
                        }

                        //请求领取奖励接口
                        $.ajax({
                            url: "/action/public/wx/game_winner",
                            type: "post",
                            data: {
                                username: game.real_name.val(),
                                phone: game.real_tel.val(),
                                pid: _this.pid
                            },
                            beforeSend: function () {
                                game.award_tips.css({display: "block"});
                                game.award_tips_words.html("领取中...");
                            },
                            success: function (data) {
                                data = JSON.parse(data);
                                console.log(data);
                                if (data.is_succ == true) {
                                    game.award_tips.css({display: "block"});
                                    game.award_tips_words.html("我们已将您的历史最好成绩存入数据库中,活动结束后会公布排名,奖品将在活动结束后10个工作日内进行派发,请耐心等候~<br/>");
                                } else {
                                    if (data.error_msg == "登录超时或者没有登录") {
                                        var tip = "请微信登陆参与，<br/>活动奖励根据微信用户排名而定。";
                                        if (window.wx_game.isWeixin) {
                                            //显示微信登录按钮
                                            _this.award_wx_login.css("display", "block");
                                            //绑定事件 /跳回登录界面
                                            _this.award_wx_login.on("touchend", function () {
                                                window.wx_game.login();
                                                // umeng
                                                _czc.push(["_trackEvent", "微盘大师游戏首页", "微信登录按钮"]);
                                            });
                                            _this.award_tips_words.html(tip);
                                        } else {
                                            _this.award_tips.css("top", "20%");
                                            //清空words
                                            game.award_tips_words.html("");
                                            //显示二维码
                                            _this.award_tips_code.css("display", "block");
                                        }
                                        _this.award_tips.css({display: "block"});
                                    } else {
                                        game.award_tips.css({display: "block"});
                                        game.award_tips_words.html(data.error_msg);
                                    }
                                }
                            },
                            error: function () {
                                game.award_tips.css({display: "block"});
                                game.award_tips_words.html("网络错误");
                            }
                        });
                    }
                });
            }(this));

            // 自定义事件 开始游戏
            this.start_game.bind("start_game", function () {
                // umeng
                _czc.push(["_trackEvent", "微盘大师游戏页", "开始游戏按钮"]);

                if (window.wx_game.is_login) {
                    //绑定游戏可以开始事件 /因为要等待用户信息拉取成功才能开始
                    if (window.wx_game.game_can_start) {
                        gaming();
                    }
                } else {
                    gaming();
                }

                function gaming() {
                    //开启音乐
                    if (getStyle(_this.bgm_pause[0], "display") == "block") {
                        _this.audio.pause();
                    } else {
                        _this.audio.play();
                    }

                    //定位到游戏页面
                    _this.game_box.css({
                        top: -_this.cur_h
                    });

                    //重置内存数据
                    _this.isGameOver = false;
                    _this.block.create_interval = 1800;
                    _this.block.speed = 1;
                    _this.score_sec = 0;
                    _this.blocks = [];
                    _this.blood = {
                        color: _this.block_colors[0],
                        amount: 3,
                        w: 10,
                        h: 10,
                        pos_x: 20,
                        pos_y: 30
                    };

                    _this.miss_stu = false;

                    if (_this.gpStart == false) {
                        if (_this.FirstLoaded == false) {
                            //开启按钮控制 /防止重复绑定事件
                            _this.btn_ctrl();
                        }
                        return false;
                    } else {
                        console.log("游戏开始...");
                        _this.init(); //init之后firstLoad会变为true
                    }
                }
            });

            // 自定义事件 结束游戏
            this.game_box.bind("game_over", function () {
                console.log(_this.create_timer);
                //清理创建计时器
                _this.clear_TIMER();
                //显示分数
                _this.end_score.html(_this.score_sec + "''");
                //暂停音乐
                _this.audio.pause();
                console.log("游戏结束...");

                _this.game_tips.css({
                    display: "block"
                }).html("游戏结束");

                setTimeout(function () {
                    _this.game_tips.css({
                        display: "none"
                    }).html("");

                    //定位到结束页
                    _this.game_box.css({
                        top: -_this.cur_h * 2
                    });

                    _this.end_page.css({
                        transform: "rotate(360deg)",
                        "-ms-transform": "rotate(360deg)", /* IE 9 */
                        "-moz-transform": "rotate(360deg)", /* Firefox */
                        "-webkit-transform": "rotate(360deg)", /* Safari 和 Chrome */
                        "-o-transform": "rotate(360deg)"    /* Opera */
                    });

                    //保存游戏分数
                    $.ajax({
                        url: "/action/public/wx/save_result",
                        type: "post",
                        data: {result_time: _this.score_sec},
                        success: function (data) {
                            data = JSON.parse(data);
                            console.log(data);
                            if (data.is_succ == true) {
                                _this.end_tips.css({
                                    display: "none"
                                })
                            } else if (data.is_succ == false) {

                                if (window.wx_game.isWeixin) {
                                    //绑定登录(跳转到首页)
                                    _this.end_tips.on("tap", function () {
                                        //定位到结束页
                                        _this.game_box.css({
                                            top: 0
                                        });

                                        //关闭窗口
                                        _this.end_tips.css({
                                            display: "none"
                                        }).html("");
                                    });
                                }
                            }
                        }
                    });

                    //刷新成绩 /排
                    //数据库
                    $.ajax({
                        url: "/action/public/wx/userinfo",
                        type: "post",
                        success: function (data) {
                            data = JSON.parse(data);
                            var info = data.data;
                            if (data.is_succ == true) {
                                window.wx_game.hit_num = info.hit;
                                //历史最好成绩
                                $("#selfBst").html(info.best_result + "''");
                                $("#user_bst_score").html(info.best_result + "''");
                                //当前排名
                                $("#curRange").html(info.rank);
                                var rank = info.rank;

                                //更改奖品图标
                                if (rank == 1) {
                                    $("#awardPic").attr("class", "");
                                    $("#awardPic").addClass("gameData_awardPic iphone");
                                    window.wx_game.shareWords = "专治各种不服，" + window.wx_game.score_sec + "秒击败100%用户，获得iphone 7，还有谁？"
                                } else if (rank > 1 && rank <= 10) {
                                    $("#awardPic").attr("class", "");
                                    $("#awardPic").addClass("gameData_awardPic power");
                                    window.wx_game.shareWords = "轻轻松松" + window.wx_game.score_sec + "秒击败" + window.wx_game.hit_num + '%用户，获得"美国队长"移动电源，哇咔咔！'
                                } else {
                                    $("#awardPic").attr("class", "");
                                    $("#awardPic").addClass("gameData_awardPic vip");
                                    window.wx_game.shareWords = "再接再厉!" + window.wx_game.score_sec + "秒击败" + window.wx_game.hit_num + '%用户，获得爱奇艺季卡抽奖机会,GBM!!!'
                                }

                                //视图层
                                if (parseInt(_this.score_sec) > parseInt($("#selfBst").html())) {
                                    $("#selfBst").html(info.best_result + "''");
                                    $("#user_bst_score").html(info.best_result + "''");
                                    //将本次成绩挂到window上,用于成绩分享
                                    window.wx_game.score_sec = _this.score_sec;
                                }
                            }
                        }
                    });
                }, 600);

            });

            // 自定义事件 重新开始
            this.replay.bind("touchend", function () {
                //如果没登录就不给玩了!
                if (!window.wx_game.isWeixin) {
                    _this.replay_tip.fadeIn(500);
                    return false;
                }

                //定位到游戏页面
                _this.game_box.css({
                    top: -_this.cur_h
                });

                _this.end_page.css({
                    transform: "rotate(-360deg)",
                    "-ms-transform": "rotate(-360deg)", /* IE 9 */
                    "-moz-transform": "rotate(-360deg)", /* Firefox */
                    "-webkit-transform": "rotate(-360deg)", /* Safari 和 Chrome */
                    "-o-transform": "rotate(-360deg)"    /* Opera */
                });

                console.log("游戏将重新开始...");
                _this.start_game.trigger("start_game");
            });

            // 自定义事件 显示loadding
            this.loadding.bind("show_loadding", function () {
                console.log("loadding...");
                _this.loadding.css("display", "block");
            });

            // 自定义事件 隐藏loadding层
            this.loadding.bind("hide_loadding", function () {
                console.log("资源加载完成...");
                _this.loadding.css("display", "none");
            });

            //------------------------游戏参数配置--------------------start-------------------------
            //图片资源配置单
            this.resConfig = [
                {name: "fall_bar", path: "/activity/t31_game/game-fall_bar.png", ratio: 170 / 750},
                {name: "rise_bar", path: "/activity/t31_game/game-rise_bar.png", ratio: 170 / 750},
                {name: "blood1", path: "/activity/t31_game/game-blood1.png", ratio: 308 / 750},
                {name: "blood2", path: "/activity/t31_game/game-blood2.png", ratio: 308 / 750},
                {name: "blood3", path: "/activity/t31_game/game-blood3.png", ratio: 308 / 750}
            ];

            //首次加载flag
            this.isFirstLoad = true;

            //难度更新叠加时间初始值
            this.diff_wt = 0;
            //难度更新等待时间
            this.diff_dt = 3600;
            //速度更新叠加时间初始值
            this.diff_wt_v = 0;
            //速度更新时间
            this.diff_dt_v = 650;

            // 游戏状态
            this.FirstLoaded = false;
            this.isGameOver = false;

            // 初始化方块的配置单
            //var block_pos = this.cur_w / 3;
            this.block = {
                amount: 1,
                w: 80,
                h: 25,
                pos_x: 350,
                pos_y: 1,
                start_y: -25,
                color: '#ccc',
                //方块下落速度初始值
                speed: 1,
                //方块下落速度最大值
                speed_max: 5,
                //下落速度增加值 /越大速度递增越快
                speed_add: 0.02,
                //创建方块间隔时间
                create_interval: 1800,
                //创建方块最小值
                create_interval_min: 520,
                //每次创建时间递减值 /越大单位时间创建的方块数越多
                create_interval_cut: 80,
                //方块宽度区间
                w_range: {
                    min: 40,
                    max: 60
                },
                //方块x坐标区间
                pos_x_range: {
                    min: 50,
                    interval: 50,
                    max: this.cur_w
                },
                pos_x_arr: []
            };
            //用于存储产生的方块
            this.blocks = [];
            //方块的颜色数组
            this.block_colors = ['#ff3333', '#61cb28'];

            // 判定区间数据
            // 在初始化资源时生成

            //miss数据
            this.miss_stu = false;
            this.miss_color = ["#fff", "#ed6e4b"];
            //index=0 为miss的tip 其余都是正确tip
            this.tips = ["很遗憾~", "nice~", "cool!", "666", "32个赞!", "大人真乃神人", "厉害了~"];
            this.miss_tip = this.tips[0];
            this.right_tip = this.random_tip();

            // 分数数据
            this.score = 0;
            this.score_color = '#f23244';
            this.score_posX = this.cur_w - 200;
            this.score_posY = 28;
            //分数增长值
            this.score_curve = 100;
            //分数更新叠加时间
            this.score_wt = 0;
            //分数更新等待时间
            this.score_dt = 1000;
            this.score_sec = 0;

            //生命条数据
            this.blood = {
                color: this.block_colors[0],
                amount: 3,
                w: 10,
                h: 10,
                pos_x: 20,
                pos_y: 30
            };
        }

        //------------------------游戏参数配置-------------------end---------------------------------

        // 重置Stock_game的原型对象
        Stock_game.prototype = {
            constructor: Stock_game,
            // 初始化游戏方法-主循环-调用方法
            init: function () {
                var _this = this;
                //开启创建方块功能
                this.create_blocks();

                //开启键盘控制
                //this.key_ctrl();

                (function loop() {
                    // 更新数据
                    _this.updata();
                    //渲染画布
                    _this.render();
                    //开启miss判断
                    _this.MainController().judge_miss();

                    //开启游戏结束功能
                    _this.MainController().gameOverChecker();

                    // 原生动画引擎
                    var requestAnimationFrame = window.requestAnimationFrame
                        || window.mozRequestAnimationFrame
                        || window.webkitRequestAnimationFrame
                        || window.msRequestAnimationFrame
                        || setInterval;

                    //如果游戏结束,停止渲染
                    if (!_this.isGameOver) {
                        requestAnimationFrame(loop)
                    }
                })();

                //DEBUG 重复绑定事件
                this.FirstLoaded = true;
            },

            /**
             * 初始化资源
             * 资源加载 - 初始化资源尺寸
             * @param callback
             */
            initialRes: function (callback) {
                var imgs = {};
                var count = 0;
                var _this = this;
                var res = this.resConfig;
                // 每次有图片完成加载之后都执行这个函数，如果所有图片都加载完成则执行callback函数
                function loadHandler() {
                    count++;
                    if (count >= res.length) {
                        // 将拿到的图片资源放在游戏对象上
                        _this.imgs = imgs;

                        //生成配置单
                        //初始化方块的间隔
                        var block_width = imgs.rise_bar.width;
                        var amount = parseInt(_this.cur_w / block_width);
                        var interval = _this.cur_w / 15;
                        //console.log('方块间隔' + interval);
                        //console.log('当前屏幕最多方块数' + amount);
                        //动态生成方块位置数组
                        for (var i = 0; i < amount; i++) {
                            _this.block.pos_x_arr.push(parseInt(interval + block_width * i));
                        }

                        //初始化判断区间
                        var judgeInfo = {judgeTopRatio: 870 / 1333, judgeHeightRatio: 90 / 1333};
                        _this.judge_top = parseInt(_this.cur_h * judgeInfo.judgeTopRatio);
                        //console.log("判定区间的top"+_this.judge_top);
                        _this.judge_bottom = parseInt(_this.cur_h * (judgeInfo.judgeTopRatio + judgeInfo.judgeHeightRatio));
                        _this.judge_interval = _this.judge_bottom - _this.judge_top;

                        //初始化方块数组 -> 用于产生方块时候使用
                        _this.block_colors = [imgs.rise_bar, imgs.fall_bar];

                        //更改loading状态
                        _this.isLoadding = false;
                        _this.loadding.trigger("hide_loadding");
                        // 重新设置count
                        count = 0;
                    }
                }

                for (var i = 0; i < res.length; i++) {
                    _this.isLoadding = true;
                    // 遍历资源数组，创建img标签
                    var img = new Image();
                    //设置图片的宽度
                    img.width = res[i].ratio * _this.cur_w;

                    img.src = res[i].path;

                    img.addEventListener('load', function () {
                        loadHandler()
                    });
                    imgs[res[i].name] = img;
                }
            },
            //请求全屏
            launchFullScreen: function (element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
            },
            // 数据更新方法，用于更新实景中的各个事物数据
            updata: function () {
                this.updata_score();
                // 更新每个方块的数据
                this.updata_blocks();
                // 提升难度
                this.updata_difficulty();
            },
            updata_score: function () {
                // 更新分数
                this.score_wt += 16.67;
                if (this.score_wt >= this.score_dt) {
                    this.score_wt -= this.score_dt;
                    this.score += this.score_curve;
                    this.score_sec += 1;
                }
            },
            // 更新每个方块的数据
            updata_blocks: function () {
                for (var i = 0; i < this.blocks.length; i++) {
                    this.blocks[i].pos_y = this.block.pos_y > 0 ? this.blocks[i].pos_y += this.block.speed : this.blocks[i].pos_y -= this.blocks[i].pos_y;
                }
            },
            updata_difficulty: function () {
                var _this = this;
                //根据时间增加下落速度
                this.diff_wt_v += 16.67;

                if (this.diff_wt_v >= this.diff_dt_v) {
                    this.diff_wt_v -= this.diff_dt_v;
                    //增加下落速度
                    _this.block.speed = _this.block.speed < _this.block.speed_max ? _this.block.speed += _this.block.speed_add : _this.block.speed;
                    console.log("当前速度----" + _this.block.speed)
                }

                this.diff_wt += 17;
                if (this.diff_wt >= this.diff_dt) {
                    this.diff_wt -= this.diff_dt;
                    //减少创建间隔时间
                    console.log("创建计时器更新");
                    //清理创建计时器
                    this.clear_TIMER();
                    //更改间隔时间
                    _this.block.create_interval = _this.block.create_interval > _this.block.create_interval_min ? _this.block.create_interval -= _this.block.create_interval_cut : _this.block.create_interval;
                    console.log('当前创建时间为----' + _this.block.create_interval);
                    //重启计时器
                    _this.create_blocks();
                }
            },
            //创建方块
            create_blocks: function () {
                var _this = this;
                function create(){
                    // 创建方块的颜色
                    var index = Math.round(Math.random());
                    var block_color = _this.block_colors[index];
                    var block = {
                        w: _this.block.w,
                        h: _this.block.h,
                        pos_x: _this.block.pos_x_arr[parseInt(Math.random() * (_this.block.pos_x_arr.length))],
                        pos_y: _this.block.start_y,
                        color: block_color,
                        speed: _this.block.speed,
                        judge_st: 0 //0为nothing -1为判断错误 -2为miss 1为正确
                    };

                    _this.blocks.push(block);
                    //console.log(_this.block.create_interval);
                    console.log("当前方块数 -> " + _this.blocks.length);
                }
                //create();
                _this.create_timer = setInterval(function () {
                    // 间隔一定时间新创建一个方块
                    create();
                }, _this.block.create_interval)
            },
            //渲染每个方块
            render_blocks: function () {
                //遍历blocks数组
                for (var i = 0; i < this.blocks.length; i++) {
                    //this.ctx.fillStyle = this.blocks[i].color;
                    //this.ctx.fillRect(this.blocks[i].pos_x, this.blocks[i].pos_y, this.blocks[i].w, this.blocks[i].h);
                    //console.log(this.blocks[i].color.height);
                    var block_height = parseInt(this.blocks[i].color.width * (45 / 170));
                    this.ctx.drawImage(this.blocks[i].color, this.blocks[i].pos_x, this.blocks[i].pos_y, this.blocks[i].color.width, block_height);
                }
                //产生一次,清理一次内存
                this.clear_RAM("normal");
            },
            //render_bloods: function () {
            //    this.ctx.fillStyle = this.blood.color;
            //    for (var i = 0; i < this.blood.amount; i++) {
            //        var start_x = this.blood.pos_x + i * (this.blood.w + this.blood.interval);
            //        this.ctx.fillRect(start_x, this.blood.pos_y, this.blood.w, this.blood.h);
            //    }
            //},
            //随机取出一个正确提示语
            random_tip: function () {
                this.right_tip = this.tips[1 + parseInt(Math.random() * (this.tips.length - 1))];
            },
            render_missTip: function () {
                var _this = this;
                if (this.miss_stu == true) {
                    this.ctx.fillStyle = this.miss_color[0];
                    this.ctx.font = '25px square';
                    this.ctx.fillText(this.miss_tip, this.cur_w / 2 - 25, this.cur_h / 2);
                    setTimeout(function () {
                        _this.miss_stu = false;
                    }, 120)
                } else if (this.miss_stu == "right") {
                    this.ctx.fillStyle = this.miss_color[1];
                    this.ctx.font = '25px square';
                    this.ctx.fillText(this.right_tip, this.cur_w / 2 - (20 * this.right_tip.length / 2 + 1), this.cur_h / 2);
                    setTimeout(function () {
                        _this.miss_stu = false;
                    }, 380)
                }
            },
            render_score: function () {
                this.real_score.html(this.score_sec + "''")
            },
            render_blood: function () {
                //根据当前的生命值数 绘制不同的图片
                var amount = this.blood.amount;
                //console.log(this.imgs);
                var bloodImg = null;
                if (amount <= 1) {
                    bloodImg = this.imgs.blood1;
                } else if (amount == 2) {
                    bloodImg = this.imgs.blood2;
                } else {
                    bloodImg = this.imgs.blood3;
                }

                var blood_height = parseInt(bloodImg.width * (55 / 308));
                this.ctx.drawImage(bloodImg, this.blood.pos_x, this.blood.pos_y, bloodImg.width, blood_height);
            },
            //清理内存
            clear_RAM: function (type) {
                if (this.blocks.length <= 0) return;
                if (type == 'normal') {
                    //第一个方块的pos_y超过设定高度的时候,清除掉
                    if (this.blocks[0].pos_y >= (this.judge_top + 100)) {
                        this.blocks.shift();
                    }
                } else if (type == 'now') {
                    this.blocks.shift();
                }
            },
            //清理计时器
            clear_TIMER: function () {
                var count = 1;
                while (count > 0) {
                    console.log("计时器清理" + count + "次");
                    clearInterval(this.create_timer);
                    count--;
                }
                count = 1;
            },
            // 渲染到画布，用于绘制景物
            render: function () {
                this.ctx.textBaseline = 'top';
                // 清除之前绘制图形
                this.ctx.clearRect(0, 0, this.cur_w + 1000, this.cur_h);
                // 绘制判定区间
                //this.ctx.fillStyle = "#fff";
                //this.ctx.fillRect(0, this.judge_top, this.cur_w, this.judge_interval);

                //绘制方块
                this.render_blocks();

                //绘制血槽
                this.render_blood();

                //绘制miss
                this.render_missTip();

                //绘制分数
                this.render_score();
            },
            //控制组
            MainController: function () {
                var _this = this;

                function find_block() {
                    if (_this.blood.amount <= 0 || _this.blocks.length <= 0) {
                        return;
                    }
                    return 0;
                }

                function decrease_blood() {
                    _this.blood.amount = _this.blood.amount > 0 ? _this.blood.amount - 1 : _this.blood.amount;
                    console.log('当前生命值----------' + _this.blood.amount);
                    if (_this.blood.amount <= 0) {
                        _this.isGameOver = true;
                        //触发gameover事件
                        _this.game_box.trigger("game_over");
                    }
                }

                function increase_score() {
                    _this.score += 150;
                }

                return {
                    /**
                     * 判定当前方块的坐标
                     * 返回坐标是否在判定区间内的布尔值
                     */
                    judge_coord: function () {
                        if (_this.blood.amount <= 0 || _this.blocks.length <= 0) {
                            return;
                        }

                        var index = find_block();
                        var block_height = parseInt(_this.blocks[index].color.width * (45 / 170));
                        //按键按下的时候获得当前第一个block的坐标
                        var y_coord = _this.blocks[index].pos_y;

                        if ((y_coord + block_height >= _this.judge_top) && (y_coord <= _this.judge_bottom)) {
                            return true;
                        } else {
                            return false;
                        }
                    },
                    /**
                     * 获取当前的按钮或者按健所对应的值
                     * 返回布尔值
                     * 涨为1
                     * 跌为0
                     */
                    judge_color: function () {
                        if (_this.blood.amount <= 0 || _this.blocks.length <= 0) {
                            return;
                        }
                        var index = find_block();
                        var cur_color = _this.blocks[index].color;
                        cur_color = cur_color == _this.block_colors[index] ? 1 : 0;
                        return cur_color;
                    },
                    /** 生命条
                     * decrease_blood
                     */
                    decrease_blood: decrease_blood,
                    //miss
                    /**
                     * 判断方块下落时的miss状态
                     * 改变方块的judge_st
                     */
                    judge_miss: function () {
                        if (_this.blood.amount <= 0 || _this.blocks.length <= 0) {
                            return;
                        }

                        //var block_height = parseInt(_this.blocks[0].color.width * (45 / 170));

                        if (_this.blocks[0].pos_y > _this.judge_bottom) {
                            _this.blocks[0].judge_st = -2;
                            // 更改miss状态
                            _this.miss_stu = true;
                            _this.blocks.shift();
                            decrease_blood();
                        }
                    },
                    /**
                     * 判断按键时候方块下落时的miss状态
                     * 改变方块的judge_st
                     */
                    judge_acMiss: function () {
                        if (_this.blood.amount <= 0 || _this.blocks.length <= 0) {
                            return;
                        }

                        if (_this.blocks[0].pos_y < _this.judge_top) {
                            _this.blocks[0].judge_st = -2;
                            // 更改miss状态
                            _this.miss_stu = true;
                        }
                    },
                    //分数
                    increase_score: increase_score,
                    /**
                     * 停止所有的计时器,updata 游戏不再执行
                     * 收集游戏数据
                     */
                    gameOverChecker: function () {
                        if (_this.isGameOver) {
                            _this.clear_TIMER()
                        }
                    }
                };
            },
            //控制页面中按钮的动作
            /**
             * 涨跌代码在判断颜色函数中会用到
             */
            btn_ctrl: function () {
                var MC = this.MainController();
                var _this = this;
                this.fall_btn.on('touchstart', function () {

                    if (_this.blocks.length < 1) {
                        return false;
                    }

                    //添加激活样式
                    var color_flag = MC.judge_color();
                    var coord_flag = MC.judge_coord();
                    MC.judge_acMiss();

                    if (color_flag == 0 && coord_flag) {
                        //判断正确
                        MC.increase_score();
                        _this.random_tip();
                        _this.miss_stu = "right";
                    } else {
                        //减分
                        MC.decrease_blood();
                    }
                });

                this.rise_btn.on('touchstart', function () {

                    if (_this.blocks.length < 1) {
                        return false;
                    }

                    color_flag = MC.judge_color();
                    coord_flag = MC.judge_coord();
                    MC.judge_acMiss();
                    if (color_flag == 1 && coord_flag) {
                        //判断正确
                        MC.increase_score();
                        _this.random_tip();
                        _this.miss_stu = "right";
                    } else {
                        MC.decrease_blood();
                    }
                });

                this.fall_btn.on('touchend', function () {
                    //判断完成,清除第一个方块
                    _this.clear_RAM('now');
                });

                this.rise_btn.on('touchend', function () {
                    //判断完成,清除第一个方块
                    _this.clear_RAM('now');
                });
            }
        };

        //1477929600000 十一月一日时间戳
        if(Date.parse("Nov 1, 2016") > Date.now()){
            //游戏实例化 /传入画布id
            var stock_game = new Stock_game('cvs');
            //加载资源并开始游戏
            stock_game.initialRes();
        } else {
            console.log("活动已结束!");
            //更改land_page的样式 /land_page_end未公布
            //$("#land_page").attr("class"," ");
            //$("#land_page").attr("class","land_page_end clearfix");
            ////$("#award_list").html();
            //
            ////如果公布名单,自动滚动
            //if($("#land_page").hasClass("land_page_end_pub")){
            //    function getStyle(obj, name) {
            //        if (obj.currentStyle) {
            //            return obj.currentStyle[name];
            //        } else {
            //            return getComputedStyle(obj, false)[name];
            //        }
            //    }
            //    var scroll_box = $("#auto_scroll_box");
            //    var box_height = getStyle(scroll_box[0],"top");
            //    scroll_box.addClass("active");
            //    scroll_box.on("touchstart",function(){
            //        scroll_box.removeClass("active");
            //        //console.log(getStyle(scroll_box[0],"top"));
            //    });
            //    scroll_box.on("touchmove",function(){
            //        //scroll_box.addClass("active");
            //    });
            //    scroll_box.on("touchend",function(){
            //        //scroll_box.css("top","0px");
            //    });
            //}
        }
    };
}());