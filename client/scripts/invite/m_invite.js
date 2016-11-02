;(function ($) {
    'use strict';
    var DOM = {};

    /**
     * 通过传入id数组,返回以ID命名的jQuery对象
     * @param oTarget {} 要绑定到的对象
     * @param id_arr []
     */
    function get_dom(oTarget, id_arr) {
        for (var i = 0; i < id_arr.length; i++) {
            oTarget["$" + id_arr[i]] = $("#" + id_arr[i])
        }
    }

    /*讲要获取的DOM对象ID放入此数组*/
    var id_arr = [
        "send_invitation",
        "share_to_friends",
        "share_to_circle",
        "share02_box",
        "get_award",
        "share_tel"
    ];

    get_dom(DOM || {}, id_arr);

    /*红包页面*/
    $("#telephone").blur(function () {
        checkTel();
        if (($("#telephone").val().trim() != "") && !($("#telephone").hasClass("warning"))) {
            $.ajax({
                type: "get",
                url: "/api/v1/exists",
                data: {
                    key: $("#telephone").val(),
                    username: null
                },
                success: function (data) {
                    data = JSON.parse(data);
                    console.log(data);
                    if (data && data.data == true) {
                        $("#telephone").addClass("warning").val("此号码已注册!")
                    } else {
                        $("#telephone").removeClass("warning");
                    }
                }
            })
        }
    });
    DOM.$get_award.on("touchend", function () {
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
            var user_code = window.location.search;
            var redirectUrl = window.location.protocol +"//"+ window.location.hostname + "/m/h5_register" + user_code + "&telephone=" + telephone.val();
            /*跳转到下载地址*/
            window.location = redirectUrl;
            /*
                 //关闭层
                 layer.closeAll();
                 //底部对话框
                 layer.open({
                 content: '恭喜提交成功!',
                 btn: ['确认'],
                 skin: 'footer',
                 yes: function (index) {
                 layer.close(index);
                    }
                 });
             */
        }
        return false;
    });

    /*邀请页*/
    DOM.$send_invitation.on("tap", function () {
        /*页面层*/
        layer.open({
            type: 1
            , content: DOM.$share02_box.html()
            , anim: 'up'
            , style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
        });

        /*发送到微信好友*/
        $(".share_to_friends").on("touchend", function () {
            console.log("发送到微信好友");
            callNative({
                type: "wechat_friend",
                title: "你投资，我出钱！注册就送200美金！",
                description: "我刚刚在老虎外汇领了200美金，好东西必须分享，你也快来看看！",
                url: window.location.hostname + "/m/invite01?user_code=" + ($.cookie("user_code") || '')
            });
            return false;
        });

        /*发送到朋友圈*/
        $(".share_to_circle").on("touchend", function () {
            console.log("发送到微信朋友圈");
            callNative({
                type: "wechat_circle",
                title: "你投资，我出钱！注册就送200美金！",
                description: "我刚刚在老虎外汇领了200美金，好东西必须分享，你也快来看看！",
                url: window.location.hostname + "/m/invite01?user_code=" + ($.cookie("user_code") || '')
            });
            return false;
        });
        return false;
    });

    /*请求已邀请好友数据*/
    (function () {
        'use strict';
        if (!document.getElementById("m_share02_layout")) return false;
        getInviteInfo();
        /*获取邀请概览*/
        function getInviteInfo() {
            $.ajax({
                url: "/action/public/v3/get_invite_friends_info",
                type: "get",
                data: {
                    page: 1,
                    pagesize: 20
                },
                success: function (data) {
                    console.log(data);
                    if (data.is_succ == true) {
                        var list = {
                            list: data.data
                        };
                        /*模板引擎*/
                        baidu.template.LEFT_DELIMITER = '<$';
                        baidu.template.RIGHT_DELIMITER = '$>';
                        var list_str = baidu.template('invite_table', list);
                        $("#history_list").html(list_str);
                        $("#invited_amount").html(data.sum);
                        $("#invited_income").html(data.profit);
                    }
                }
            });
        }

    }());

}(jQuery));