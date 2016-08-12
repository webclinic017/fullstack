;$(document).ready(function () {
    /*
     1.判断是否登录
     是，判断2
     否，跳转至登录页面
     2.判断是否是高手
     是，按钮文字改为“已是高手”，按钮颜色变灰，不可点。
     否，判断3
     3.判断是否存在复制关系
     是，提示：无法申请成为高手。您存在复制关系，请取消后再进行此操作
     否。弹出信息弹框。判断4
     4.判断弹框必填项。
     必填项：交易经验、交易方式、最低跟随金额
     判断提醒：请选择交易经验、请选择交易方式、请选择最低跟随金额
     5.提交后提醒
     申请审核已提交，请您耐心等待。
     （提交后，结果返回后台）
     */

    /*按钮对象*/
    var become_apply_btn = $("#become_apply_btn");
    /*modal对象*/
    var become_modal = $("#become_modal");
    /*modal_mask对象*/
    var become_modal_mask = $("#become_modal_mask");
    /*取消按钮*/
    var cancel_btn = $("#close_btn");
    var sure_btn = $("#sure_btn");

    /*点击调用原生方法,检测登录状态,APP会返回一个带true/false的函数调用*/
    /*window.tigerwitWeb(true/false)*/
    become_apply_btn.on("touchend", function () {
        //window.tigerwitWeb(true);
        /*没有警告样式,或禁用,才能点击*/
        if (become_apply_btn.isOK()) {
            callNative({
                "type": "checkLogin"
            });
        }
    });

    /*become_apply_btn方法*/
    become_apply_btn.disable = function (msg) {
        become_apply_btn.css("background", "#fff").addClass("disable").html(msg);
    };
    become_apply_btn.enable = function (msg) {
        become_apply_btn.css("background", "#ffcc33").removeClass("disable").html(msg);
    };
    become_apply_btn.isOK = function () {
        if (become_apply_btn.hasClass("warning") || become_apply_btn.hasClass("disable")) {
            return false;
        } else {
            return true;
        }
    };

    /*-------modal_mask对象方法-----------*/
    become_modal_mask.create = function () {
        become_modal_mask.css({
            "background": "rgba(0,0,0,.4)", /*背景为0.6透明*/
            "position": "fixed",
            "left": "0",
            "top": "0",
            "width": $(window).width(),
            "height": $(window).height()
        })
    };

    /*点击mask关闭modal的功能函数*/
    become_modal_mask.closeModal = function () {
        /*如果点击在modal上,不关闭*/
        var isTouched = false;
        become_modal.on("touchstart", function () {
            isTouched = true;
        });

        /*点击mask的时候判断是否触摸了modal*/
        become_modal_mask.on("touchend", function () {
            if (!isTouched) { /*如果没有*/
                become_modal.closeModal();
                /*关闭modal和mask*/
            } else {
                isTouched = false;
                /*更改标记为没有触摸*/
            }
        });
    };

    /*-----------modal对象方法---------------*/
    /*关闭modal*/
    become_modal.closeModal = function () {
        become_modal.stop().slideUp(300);
        become_modal_mask.stop().fadeOut(300);
    };
    /*打开modal*/
    become_modal.openModal = function () {
        become_modal_mask.stop().fadeIn(300);
        become_modal.stop().slideDown(300);
    };

    /*cancel_btn*/
    cancel_btn.on("touchend", function () {
        become_modal_mask.closeModal();
        /*重置TIP的文字*/
        $("#modal_tips").html("必填项：交易经验、交易方式、最低跟随金额");
    });

    /*sure_btn*/
    sure_btn.isFilled = function () {
        var trade_exp = $('#trade_exp option:selected').val();
        console.log(trade_exp);
        var trade_way = $('#trade_ways option:selected').val();
        console.log(trade_way);
        var input = document.querySelector("#regular_money");
        if (trade_exp.trim() == "" || trade_way.trim() == "" || input.value.trim() == "") {
            return false;
        } else if (!(/^\d*$/.test(input.value)) || (input.value - 0) <= 0) {
            $("#modal_tips").html("跟随金额必须为有效数字哦~");
            return false;
        } else {
            return true;
        }
    };

    /*必填项：交易经验、交易方式、最低跟随金额*/
    /*判断提醒：请选择交易经验、请选择交易方式、请选择最低跟随金额 */
    sure_btn.on("touchend", function () {
        /*有禁用标记,禁止操作*/
        if (($("#modal_tips").hasClass("disable"))) {
            return false;
        }
        /*获取表单的值*/
        var input = document.querySelector("input");
        /*调用表单填写函数验证是否填写完成*/
        if (sure_btn.isFilled()) {
            $("#modal_tips").removeClass("warning").html("正在提交,请稍等...");
            /*发送到后台*/
            /*post('/action/public/v3/apply_to_master';*/
            $.post("/action/public/v3/apply_to_master",
                {
                    trade_exp: $('#trade_exp option:selected').val(),
                    trade_model: $('#trade_ways option:selected').val(),
                    min_copy_asset: input.value
                },
                function (data) {
                    data = eval('(' + data + ')');
                    //$("#modal_tips").html(data);
                    switch (data.error_code) {
                        case 0:
                            /*成功提交之后,阻止二次提交*/
                            $("#modal_tips").html("申请审核已提交，请您耐心等待").addClass("disable");
                            setTimeout(function () {
                                /*关闭modal*/
                                become_modal.closeModal();
                            }, 500);
                            break;
                        case 1:
                            /*成功提交之后,阻止二次提交*/
                            $("#modal_tips").html(data.error_msg);
                            setTimeout(function () {
                                callNative({
                                    "type": "checkLogin"
                                });
                            }, 300);
                            break;
                        case 6:
                            /*成功提交之后,阻止二次提交*/
                            $("#modal_tips").html("登录超时...即将跳转登录");
                            setTimeout(function () {
                                callNative({
                                    "type": "checkLogin"
                                });
                            }, 300);
                            break;
                        default :
                            $("#modal_tips").html(data.error_msg);
                            break;
                    }
                });
        } else {
            /*如果没有填写完成,添加警告样式*/
            $("#modal_tips").addClass("warning");
        }
    });

    window.tigerwitWeb = function (isLogin) {
        /*处理app返回信息*/
        isLogin = !!isLogin;
        /*已经登录*/
        if (isLogin) {
            /*如果已经登录 -> 判断是否是高手 ->是，按钮文字改为“已是高手”，按钮颜色变灰，不可点。*/
            become_apply_btn.html("正在查询,请稍等...");
            $.ajax({
                type: "post",
                url: '/action/public/v3/check_master',
                success: function (data) {
                    become_apply_btn.html("报名成为高手");
                    data = eval("("+data+")");
                    console.log(data);
                    if (data.master) { /*是高手*/
                        become_apply_btn.addClass("disabble").html("您已经是高手!");
                    } else if (!data.master) { /*不是高手/判断是否存在复制关系*/
                        if (data.copy) {
                            /*提示无法申请成为高手*/
                            become_apply_btn.disable("您存在复制关系，请取消后再进行此操作");
                        } else {
                            /*弹出modal,填写申请*/
                            become_modal_mask.create();
                            become_modal.openModal();

                            /*开启关闭modal功能*/
                            become_modal_mask.closeModal();
                        }
                    } else if(data.status == 0){
                        become_apply_btn.disable("您的资料正在审核中...");
                    } else if(data.status == 2){
                        become_apply_btn.disable("您已经是高手!");
                    }
                },
                error: function (err) {
                    become_apply_btn.addClass("warning").html("网络连接错误...");
                    setTimeout(function () {
                        become_apply_btn.removeClass("warning").html("重新报名");
                    }, 600)
                }
            });
        } else {
            /*调用原生方法登录*/
            setTimeout(function () {
                callNative({"type": "login"})
            }, 1);
        }
    };
});