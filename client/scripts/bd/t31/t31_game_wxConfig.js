;(function () {
    'use strict';

    //获取cookie /判断用户是否已经登录
    var wx_token = $.cookie('wx_token');
    window.wx_game = {};
    window.wx_game.is_login = false;
    window.wx_game.userInfoHasLoaded = false;
    window.wx_game.awards = "";
    window.wx_game.game_can_start = false;
    window.wx_game.hit_num = 0;
    //检测微信环境
    window.wx_game.isWeixin = navigator.userAgent.toLowerCase().indexOf('micromessenger') != -1;

    if (!window.wx_game.isWeixin) {
        console.log("当前环境为普通浏览器");
        //干掉登录按钮
        $("#wxlogin").css("display", "none");
        //改变start按钮样式
        $("#start").css({
            "marginRight": "28.5%"
        });
    }

    if (!!wx_token) { //已经登录
        window.wx_game.is_login = true;
        window.wx_game.wx_token = wx_token;

        //干掉登录按钮
        $("#wxlogin").css("display", "none");
        //改变start按钮样式
        $("#start").css({
            "marginRight": "28.5%"
        });

        //去拿userInfo
        $.ajax({
            url: "/action/public/wx/userinfo",
            type: "post",
            beforeSend: function () {
                $("#land-tips").css("display", "block").html("正在获取您的信息!");
            },

            success: function (data) {
                data = JSON.parse(data);
                var info = data.data;
                if (data.is_succ == true) {

                    $("#land-tips").fadeOut(1000).html("您的信息已经获取成功!");

                    window.wx_game.userInfoHasLoaded = true;
                    window.wx_game.game_can_start = true;
                    window.wx_game.hit_num = info.hit || 0;

                    //填入用户信息
                    //设置头像
                    document.getElementById("user_avator").src = info.headimgurl;
                    //昵称
                    $("#username").html(info.nickname);
                    //历史最好成绩
                    $("#selfBst").html(info.best_result + "''");
                    $("#user_bst_score").html(info.best_result + "''");
                    //当前排名
                    $("#curRange").html(info.rank);
                    var rank = info.rank;

                    //更改奖品图标
                    if (rank == 1) {
                        $("#awardPic").attr("class","");
                        $("#awardPic").addClass("gameData_awardPic iphone");
                        window.wx_game.awards = "获得了iPhone 7"
                    } else if (rank > 1 && rank <= 10) {
                        $("#awardPic").attr("class","");
                        $("#awardPic").addClass("gameData_awardPic power");
                        window.wx_game.awards = "获得了美国队长移动电源"
                    } else {
                        $("#awardPic").attr("class","");
                        $("#awardPic").addClass("gameData_awardPic vip");
                        window.wx_game.awards = "系统随机赠送爱奇艺3个月会员资格"
                    }

                } else {
                    $("#land-tips").css("display", "block").html(data.error_msg + "<br/>即将刷新");
                    setTimeout(function () {
                        window.location.href = window.location.href;
                    }, 1500);
                }
            }
        });

    } else {
        console.log("用户还没有登录...")
    }

    $(function () {
        $.ajax({
            type: "post",
            url: "/action/public/wx/get_jssdk",
            data: {
                url: window.location.href
            },
            success: function (data) {
                var json = JSON.parse(data).data;
                wx.config({
                    debug: false,
                    appId: json.appId,
                    timestamp: json.timestamp,
                    nonceStr: json.nonceStr,
                    signature: json.signature,
                    jsApiList: [
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ'
                    ]
                });
            }
        });
    });

    wx.ready(function () {
        //console.log("wx_is_ready and hitDone event is binded");
        console.log("wechat share is ready");
        //获取“分享给朋友”按钮点击状态及自定义分享内容接口
        wx.onMenuShareAppMessage({
            title: "厉害了word微盘大师！",
            desc: "我在“微盘大师”中击败了" + window.wx_game.hit_num + "%的用户，" + window.wx_game.awards + "。哇咔咔！！！",
            link: window.location.href,
            imgUrl: window.location.protocol + "//" + window.location.hostname + "/activity/t31_game/share_pic_other.jpg",
            trigger: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        //获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
        wx.onMenuShareTimeline({
            title: "我在“微盘大师”中击败了" + window.wx_game.hit_num + "%的用户，" + window.wx_game.awards + "。哇咔咔！！！",
            desc: "我在“微盘大师”中击败了" + window.wx_game.hit_num + "%的用户，" + window.wx_game.awards + "。哇咔咔！！！",
            link: window.location.href,
            imgUrl: window.location.protocol + "//" + window.location.hostname + "/activity/t31_game/share_pic.jpg",
            trigger: function (res) {

            },
            success: function (res) {

            },
            cancel: function (res) {

            },
            fail: function (res) {
            }
        });

        wx.onMenuShareQQ({
            title: "厉害了word微盘大师！",
            desc: "我在“微盘大师”中击败了" + window.wx_game.hit_num + "%的用户，" + window.wx_game.awards + "。哇咔咔！！！",
            link: window.location.href,
            imgUrl: window.location.protocol + "//" + window.location.hostname + "/activity/t31_game/share_pic.jpg",
            trigger: function (res) {
            },
            complete: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
                alert(JSON.stringify(res));
            }
        });
    });
}());