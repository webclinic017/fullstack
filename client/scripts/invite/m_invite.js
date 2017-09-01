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
                        $("#telephone").addClass("warning").val("此号码已注册!");
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
                content: '请输入有效的手机号',
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
        // var versionName = getVersionName();
        // console.log('versionName=' + versionName);
        // var modalHeight = '250px';
        // $('.new_share').hide();
        // if (versionName && parseFloat(versionName) >= 2.2) {
        //     modalHeight = '350px';
        //     $('.new_share').show();
        // }
        var modalHeight = '350px';
        modalHeight = '350px';
        $('.new_share').show();
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
        tigerwit: '老虎外汇',
        pandafx: '熊猫外汇',
    }

    function nativeShare(type) {
        console.log(type);
        if (!isInTiger()) {
            console.log("当前不是APP环境");
            return
        }

        var callConfig = {
            type: type,
            title: "你投资，我出钱！注册就送200美金！",
            description: "我刚刚在"+ (coMap[getCoName()] || '老虎外汇') +"领了200美金，好东西必须分享，你也快来看看！",
            url: window.location.origin + "/m/invite01?user_code=" + ($.cookie("user_code") || '')
        };

        console.log(getCoName(),callConfig)
        callNative(callConfig);
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
        } else if (id == id_arr[6]) {
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
        var listBoxWidth = parseInt($("#invite_history_list").width()); //盒子宽度
        var picNumAble = parseInt((listBoxWidth - 60) / 30) + 1;    //可以容纳的头像数量
        var listWrapperLeft = "0px";
        // console.log(listBoxWidth, picNumAble);

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

                    if (picNumAble < list.list.length) {
                        $.each(list.list, function (index, value) {
                            value.left = (index*((listBoxWidth-60)/(list.list.length-1))).toFixed(2)+"px";
                        });
                    } else {
                        listWrapperLeft = (listBoxWidth-60-(list.list.length-1)*30)/2+"px";

                        $.each(list.list, function (index, value) {
                            value.left = index*30+"px";
                        });
                    }

                    var cBtn = ".share02_main__content .status .c";
                    $(".share02_main__content .info .num").html(data.data.record_count);
                    
                    if (data.data.bonus_status == 1) {
                        $(cBtn).html("不可兑换");
                    } else if (data.data.bonus_status == 2) {
                        $(cBtn).html("点击领取10美金");
                        $(cBtn).addClass("active");
                    } else if (data.data.bonus_status == 3) {
                        $(cBtn).html("已兑换");
                    } else if (data.data.bonus_status == 4) {
                        $(cBtn).html("已过期");
                    } else if (data.data.bonus_status == 5) {
                        $(cBtn).html("已失效");
                    }

                    /*模板引擎*/
                    baidu.template.LEFT_DELIMITER = '<$';
                    baidu.template.RIGHT_DELIMITER = '$>';
                    var list_str = baidu.template('invite_table', list);
                    $("#invite_history_list").html(list_str);

                    $("#invite_history_list .invite_pic_list").css("marginLeft", listWrapperLeft);

                    $.each($("#invite_history_list .invite_pic_list .item"), function (index, value) {
                        $(value).css("left", list.list[index].left);
                    });
                }
            });
        }

    }());
}(jQuery));