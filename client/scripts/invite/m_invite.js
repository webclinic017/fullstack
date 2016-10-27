;(function ($) {
    'use strict';
    var DOM = {};

    function get_dom(oTarget, id_arr) {
        for (var i = 0; i < id_arr.length; i++) {
            oTarget["$" + id_arr[i]] = $("#" + id_arr[i])
        }
    }

    //讲要获取的DOM对象ID放入此数组
    var id_arr = [
        "send_invitation",
        "share_to_friends",
        "share_to_circle",
        "share02_box",
        "get_award",
        "share_tel"
    ];
    get_dom(DOM, id_arr);

    //红包页面
    DOM.$get_award.on("tap", function () {
        //获取手机号
        var telephone = DOM.$share_tel;
        var rPhone = telephone.val() ? telephone.val() : "";
        var isMobile = /^(13|14|15|17|18)\d{9}$/;
        var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
        if ((telephone.val() == "") || (!isMobile.test(telephone.val()) && !isPhone.test(telephone.val()))) {
            //提示
            layer.open({
                content: '请输入有效的手机号',
                skin: 'msg',
                anim:false,
                time: 1.2 //1.2秒后自动关闭
            });
        } else {
            //ajax
            //loading层
            layer.open({type: 2});

            setTimeout(function(){
                //关闭loading层
                layer.closeAll();
                //底部对话框
                layer.open({
                    content: '恭喜提交成功!',
                    btn: ['确认'],
                    skin: 'footer',
                    yes: function (index) {
                        layer.close(index);

                        //跳转到下载地址
                        window.location.href = "/";
                    }
                });
            },1000);
        }
        return false;
    });

    //邀请页
    DOM.$send_invitation.on("tap", function () {
        //页面层
        layer.open({
            type: 1
            , content: DOM.$share02_box.html()
            , anim: 'up'
            , style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
        });

        return false;
    });

    //发送到微信好友
    DOM.$share_to_friends.on("tap", function () {
        //todo


        return false;
    });

    //发送到朋友圈
    DOM.$share_to_circle.on("tap", function () {
        //todo


        return false;
    });
}(jQuery));