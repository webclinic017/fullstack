; (function ($) {
    'use strict';
    var DOM = {};
    var layIndex = undefined;

    /*讲要获取的DOM对象ID放入此数组*/
    var id_arr = [
        "send_invitation",
        "share_to_friends",
        "share_to_circle",
        "share_to_qFriend",
        "share_to_qZone",
        "share_to_microBlog",
        "share_to_fb",
        "share_to_ins",
        "share_to_twitter",
        "cancel_share",
        "share02_box",
        "get_award",
        "share_tel",
        "share02_modal"
    ];

    /**
     * 通过传入id数组,返回以ID命名的jQuery对象
     * @param oTarget {} 要绑定到的对象
     * @param id_arr []
     */
    function get_dom(oTarget, id_arr) {
        for (var i = 0, len = id_arr.length; i < len; i++) {
            oTarget["$" + id_arr[i]] = $("#" + id_arr[i])
        }
    }

    get_dom(DOM || {}, id_arr);

    /*红包页面*/
    $("#telephone").blur(function () {
        if (($("#telephone").val().trim() != "") && !($("#telephone").hasClass("warning"))) {
            publicRequest('checkExists', 'GET', {
                key: 3,
                value: $("#telephone").val()
            }).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    if (data.data) {
                        $("#telephone").addClass("warning").val(lang.text('invite.registerd'));
                    } else {
                        $("#telephone").removeClass("warning");
                    }
                }
            });
            // $.ajax({
            //     type: "get",
            //     url: "/action/public/v4/exists",
            //     data: {
            //         key: $("#telephone").val(),
            //         username: null
            //     },
            //     success: function (data) {
            //         data = JSON.parse(data);
            //         console.log(data);
            //         if (data && data.data == true) {
            //             $("#telephone").addClass("warning").val("此号码已注册!")
            //         } else {
            //             $("#telephone").removeClass("warning");
            //         }
            //     }
            // })
        }
    });

    DOM['$get_award'].on("touchend", function () {
        /*获取手机号*/
        var telephone = DOM.$share_tel;
        var rPhone = telephone.val() ? telephone.val() : "";
        var isMobile = /^(13|14|15|17|18)\d{9}$/;
        var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
        if ((telephone.val() == "") || (!isMobile.test(telephone.val()) && !isPhone.test(telephone.val()))) {
            /*提示*/
            layer.open({
                content: lang.text('invite.effcient'),
                skin: 'msg',
                anim: false,
                time: 1.2 /*1.2秒后自动关闭*/
            });
        } else {
            var user_code = window.location.search || "?";
            var redirectUrl = window.location.protocol + "//" + window.location.hostname + "/m/h5_register/reg" + user_code + "&telephone=" + telephone.val();
            window.location = redirectUrl;
        }
        return false;
    });

    /*邀请页*/
    DOM['$send_invitation'].on("tap", function () {
        if (isInTiger()) {
            callNative({
                type: 'checkLogin'
            });
        } else {
            invitation();
        }
        return false;
    });

    function invitation() {
        var modalHeight = '350px';
        /*页面层*/
        layIndex = layer.open({
            type: 1
            , content: DOM['$share02_box'].html()
            , anim: 'up'
            , style: 'position:fixed; bottom:0; left:0; width: 100%; height: ' + modalHeight + '; padding:10px 0; border:none;'
        });
    }

    window.tigerwitWeb = function (isLogin) {
        if (isLogin == 1) {
            invitation();
        }
    };

    var coMap = {
        tigerwit: lang.text('tiger'),
        pandafx: lang.text('pandafx'),
    }

    function nativeShare(type) {
        var callConfig = {
            type: type,
            title: lang.text('invite.share2'),
            description: lang.text('invite.share3') + (lang.curLang('zh') ? coMap[getCoName()] : '') + lang.text('invite.share1'),
            url: window.location.origin + "/m/invite01?user_code=" + ($.cookie("user_code") || ''),
            imgUrl: window.location.origin + "/napi?action=get_share_img&user_code=" + ($.cookie("user_code") || '') + ".png",
        };
        if (!isInTiger()) {
            console.log("当前不是APP环境");
        } else {
            callNative(callConfig);
        }
        console.log(getCoName(), callConfig)
    }

    $(document).on('touchend', '.share02_modal', function (e) {
        var id = $(e.target).parent('span').attr('id');
        var type = undefined;
        if (id == id_arr[1]) {
            type = "wechat_friend";
        }
        else if (id == id_arr[2]) {
            type = "wechat_circle";
        }
        else if (id == id_arr[3]) {
            type = "qq";
        }
        else if (id == id_arr[4]) {
            type = "qzone";
        }
        else if (id == id_arr[5]) {
            type = "weibo";
        } 
        else if (id == id_arr[6]) {
            type = "facebook";
        } 
        else if (id == id_arr[7]) {
            type = "instagram";
        } 
        else if (id == id_arr[8]) {
            type = "twitter";
        } 
        else if (id == id_arr[9]) {
            layer.close(layIndex);
            return false;
        } else {
            return false;
        }
        nativeShare(type);
        layer.close(layIndex);
    });

    /*请求已邀请好友数据*/
    (function () {
        'use strict';
        if (!document.getElementById("m_share02_layout")) return false;

        var list = {
            list: []
        };

        $(document).on('touchend', '.share02_main__content .status .c.active', function (e) {
            callNative({
                type: 'back_red_packet'
            });
        });

        getInviteInfo();
        /*获取邀请概览*/
        function getInviteInfo() {

            publicRequest('getInviteList', 'GET', {
                offset: 0,
                limit: 1000
            }).then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    list.list = data.data.records;

                    var cBtn = ".share02_main__content .status .c";
                    $(".share02_main__content .info .num").html(data.data.record_count);

                    if (data.data.bonus_status == 1) {
                        $(cBtn).html(lang.text('invite.Unexchangeable'));
                    } else if (data.data.bonus_status == 2) {
                        $(cBtn).html(lang.text('invite.get$10'));
                        $(cBtn).addClass("active");
                    } else if (data.data.bonus_status == 3) {
                        $(cBtn).html(lang.text('invite.Exchanged'));
                    } else if (data.data.bonus_status == 4) {
                        $(cBtn).html(lang.text('invite.Expired'));
                    } else if (data.data.bonus_status == 5) {
                        $(cBtn).html(lang.text('invite.Lapsed'));
                    }

                    /*模板引擎*/
                    baidu.template.LEFT_DELIMITER = '<$';
                    baidu.template.RIGHT_DELIMITER = '$>';

                    if (list.list.length) {
                        var list_str = baidu.template('invite_table', list);
                        $("#invite_history_list").html(list_str);

                    } else {
                        $("#invite_history_list .init").addClass("active");
                    }
                }
            });
        }
    }());
}(jQuery));