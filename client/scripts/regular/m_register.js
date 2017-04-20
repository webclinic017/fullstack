$(document).ready(function () {
    /*生成token*/
    $.ajax({
        type: "post",
        url: '/action/public/v3/set_token'
    });

    /*密码可视按钮点击事件*/
    $(".password_view").on("touchend", function () {
        /*切换试图可视状态*/
        $(".password_view img").toggleClass("hide");
        /*更改input的type*/
        checkType()
    });

    /*封装更改input-type属性函数*/
    function checkType() {
        if ($(".password_view img:eq(1)").hasClass("hide")) {
            $("#password").attr("type", "text")
        } else {
            $("#password").attr("type", "password")
        }
    }

    /*封装判断是否为pc客户端函数*/
    function isPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }

    /*读取cookie*/
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)) {
            return arr[2];
        } else {
            return null;
        }
    }

    /**
     * 跳转函数
     * 如果是手机端,那么调用原生方法进行跳转
     * 如果是PC那么直接进行页面跳转
     * @param action_address 要跳转的url地址
     */
    function skipTo(action_address) {
        if (isPC()) { /*如果是PC,直接跳转*/
            window.location.href = action_address;
        } else { /*如果是手机端,调用原生方法跳转*/
            callNative({
                type: "openUrl",
                url: action_address
            });
        }
        action_address = window.location.href;
    }

    $("#password").focus(function () {
        checkType();
    });

    $("input").focus(function () {
        //$(this).val("");
        //console.log(this);
        if ($(this).hasClass("warning")) {
            $(this).val("");
            $(this).removeClass("warning");
        }
    });

    $("#username").blur(function () {
        checkUserName();
        if (($("#username").val().trim() != "") && !($("#telephone").hasClass("warning"))) {
            $.ajax({
                type: "get",
                url: "/action/public/v4/exists",
                data: {
                    key: null,
                    username: $("#username").val()
                },
                success: function (data) {
                    data = JSON.parse(data);
                    console.log(data);
                    if (data && data.data == true) {
                        $("#username").addClass("warning").val("该昵称已存在!")
                    } else {
                        $("#username").removeClass("warning");
                    }
                }
            })
        }
    });

    function checkUserName(){
        var input = $('#username');
        var rName = input.val() ? input.val() : "";
        if ((input.val() == "")) {
            input.val("请填写昵称").addClass("warning");
        }
    }

    function checkTel(){
        var input = $('#telephone');
        var rPhone = input.val() ? input.val() : "";
        var isMobile = /^(13|14|15|17|18)\d{9}$/;
        var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
        if ((input.val() == "") || (input.val() == "请填写有效的电话号码")
            || (!isMobile.test(input.val()) && !isPhone.test(input.val()))) {
            input.val(" 请填写有效的电话号码").addClass("warning");
        }
    }

    $("#telephone").blur(function () {
        checkTel();
        if (($("#telephone").val().trim() != "") && !($("#telephone").hasClass("warning"))) {
            $.ajax({
                type: "get",
                url: "/action/public/v4/exists",
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

    $('#regist_btn').on("touchend", function () {
        /*检测用户名合法性*/
        checkUserName();

        /*检测号码合法性*/
        checkTel();

        var password = $("#password");
        var rPassword = password.val() ? password.val() : "";
        if ((password.val() == "") || (password.val() == "请填写有效的密码")
            || (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(password.val()))
        ) {
            $("#password").attr("type", "text").val(" 密码格式不正确").addClass("warning");
        }

        if ($(":input").hasClass("warning")) {
            return false;
        } else {
            // umeng
            callNative({
                "type":"umeng",
                "eventId":"register"
            });

            /*获取当前input的值*/
            var username = $('#username').val();
            var telephone = $('#telephone').val();
            var passCode = $('#password').val();
            /*跳转到注册码页面*/
            var action_address = window.location.href + "2?" +
                encodeURI(username) +
                "&" + telephone +
                "&" + base64encode(passCode);
            skipTo(action_address);
        }
    });

    (function () {
        /*判断地址包含?并且是在第二注册页,此段js运行*/
        if (!!(document.getElementById("regist_btn2"))) {
            /*第二注册页提交逻辑*/
            /*获取注册码*/
            /*获取url中的字段*/
            var registeInfo = window.location.href.split("?")[1].split("&");
            var username = decodeURI(registeInfo[0]);
            
            var telephone = registeInfo[1];
            var password = base64decode(registeInfo[2]);
            /*base64解密*/
            var verify_code_btn = $("#verify_code_btn");
            var interval = null;
            var email = null;
            var verify_code = null;

            verify_code_btn.on("touchend", function () {
                /*改变状态*/
                /*倒计时*/
                if (Boolean(interval) === false) {
                    var duration = 59;
                    interval = setInterval(function () {
                        verify_code_btn.addClass("disable").html(duration-- + "s后获取");
                        if (duration <= 0) {
                            clearInterval(interval);
                            interval = null;
                            verify_code_btn.removeClass("disable").html("重新获取");
                            duration = 59;
                        }
                    }, 1000);

                    if (!(verify_code_btn.hasClass("disable"))) {
                        /*请求后台接口*/
                        $.ajax({
                            type: "post",
                            url: "/action/public/v3/get_phone_reg_code",
                            data: {
                                phone: telephone,
                                token: getCookie("tiger_token")
                            },
                            success: function (data) {
                                console.log(data);
                            }
                        });
                    }
                }
            });
            

            $('#regist_btn2').on("touchend", function () {
                /*验证邮箱*/
                var input = $('#email');
                var rEmail = input.val() ? input.val() : "";
                if ((input.val() == "") || (input.val() == "请填写有效的Email") || (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(input.val()))) {
                    input.val(" 请填写有效的Email").addClass("warning");
                }

                if ($("#verify_code").val() === "") {
                    $("#verify_code").addClass("warning").val("请您输入验证码");
                }
                
                if (!($(":input").hasClass("warning"))) {
                    /*获取邮箱*/
                    email = $('#email').val();
                    verify_code = $("#verify_code").val();
                    // publicRequest('register', 'POST', {
                    //     username: username,
                    //     phone: telephone,
                    //     verify_code: verify_code,
                    //     email: email,
                    //     password: password,
                    //     lp: "",
                    //     pid: "",
                    //     unit: "",
                    //     key: ""
                    // }).then(function (data) {
                    //     if (!data) return;
                    //     // console.log(data);
                    //     if (data.is_succ) {
                    //         var action_address = window.location.href.replace("2", "3");
                    //         skipTo(action_address);
                    //     } else {
                    //         alert(data.message);
                    //     }
                    // });
                    $.ajax({
                        type: "post",
                        url: "/action/public/v3/register",
                        data: {
                            username: username,
                            phone: telephone,
                            verify_code: verify_code,
                            email: email,
                            password: password,
                            lp: "",
                            pid: "",
                            unit: "",
                            key: ""
                        },
                        success: function (data) {
                            console.log(data);
                            if (data.is_succ == true) {
                                var action_address = window.location.href.replace("2", "3");
                                skipTo(action_address);
                            } else if (data.error_code == 12) {
                                $("#verify_code").addClass("warning").val("验证码不正确");
                            } else if (data.error_code == 3) {
                                $("#verify_code").addClass("warning").val("手机号已存在");
                            } else {
                                alert(data.error_msg)
                            }
                        },
                        error: function (err) {
                            alert("error:" + err);
                        }
                    });
                }
            })
        }
    }());

    /*第三注册页,此段js生效*/
    if (!!document.getElementById("regist_btn3")) {
        /*第三页注册逻辑 - 对象*/
        var regist_page3 = {
            getMt4: function () {
                // publicRequest('getUserInfo', 'GET').then(function (data) {
                //     if (!data) return;
                //     // console.log(data);
                //     if (data.is_succ) {
                //         data = data.data;
                //         if (data.mt4_id) {
                //             $("#reg_MT4_number").html(data.mt4_id);
                //         } else {
                //             $("#reg_MT4_number").html("获取失败");
                //         }
                //     }
                // });
                $.ajax({
                    type: "get",
                    url: "/action/public/v4/get_info",
                    success: function (data) {
                        data = JSON.parse(data);
                        data = data.data;
                        console.log(data);
                        if (data.real_id) {
                            $("#reg_MT4_number").html(data.real_id);
                        } else {
                            $("#reg_MT4_number").html("获取失败");
                        }
                    },
                    error: function (err) {
                        $("#reg_MT4_number").html("获取失败");
                    }
                });
            },
            submit: function () {
                if (isPC()) { /*如果是PC,直接跳转*/
                    $("#regist_btn3").on("click", function () {
                        window.location.href = "http://www.tigerwit.com";
                    });
                } else {  /*如果是手机端,绑定touch,调用原生方法跳转*/
                    $("#regist_btn3").on("touchend", function () {
                        callNative({
                            type: "reg_login", /*跳转到手机登录页*/
                            url: ""
                        });
                    });
                }
            }
        };

        /*调用预定义方法*/
        regist_page3.getMt4();
        regist_page3.submit();
    }
});
