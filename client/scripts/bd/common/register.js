;
(function () {
    /*生成token*/
    var token = null;

    function set_token() {
        publicRequest('setToken', 'POST').then(function (data) {
            if (!data) return;
            if (data.is_succ) {
                token = $.cookie("code_token");
            }
        });
    }

    set_token();

    /*token 5分钟过期*/
    setInterval(function () {
        set_token();
    }, 300000);

    $(function () {
        var oReg = {};

        function isRegSucceed() {
            var location = window.location.href.indexOf("/succ") >= 0;
            if (!!document.getElementById("regist_btn3") && location) {
                /*统计注册成功*/
                sa.track('btn_register_finish');
                window._czc && _czc.push(["_trackEvent", "活动页", "立即注册且成功"]);
                
                setTimeout(function () {
                    var user_code = $.cookie("user_code");
                    // console.log(user_code);
                    if (user_id) {
                        sa.login(user_id);
                    }
                }, 0);

                return true;
            }
        }

        function sendVerifyCode() {
            function isDisabled() {
                var flag = $("#verify_code_btn").hasClass("disable");
                if (flag) {
                    layer.msg('请一分钟后再试!');
                    return true;
                }
            }

            if (isDisabled()) return;

            var interval = null;

            if (!token) {
                sa.track('set_token_failed');
                layer.msg('网络异常,请刷新重试!');
            }

            /*loading层*/
            layer.load(1, {shade: false});
            publicRequest('getPhoneCode', 'POST', {
                phone: $("#telephone").val(),
                code_token: $.cookie("code_token"),
                type: 1
            }).then(function (data) {
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    /*提示*/
                    layer.msg('验证码已发送!');

                    /*统计代码*/
                    sa.track('btn_register_code');
                    _czc.push(["_trackEvent", "注册页", "获取验证码"]);

                    /*倒计时*/
                    if (Boolean(interval) == false) {
                        var duration = 59;
                        interval = setInterval(function () {
                            $("#verify_code_btn").addClass("disable").html(duration-- + "s");
                            if (duration <= 0) {
                                clearInterval(interval);
                                interval = null;
                                $("#verify_code_btn").removeClass("disable").html("重新获取");
                                duration = 59;
                                /*重新获取token*/
                                set_token();
                            }
                        }, 1000);
                    }
                } else {
                    set_token();
                    layer.msg('获取失败,请重试!');
                }
            });
        }

        function checkTel() {
            /*获取手机号*/
            var telephone = $("#telephone");
            var rPhone = telephone.val() ? telephone.val() : "";
            var isMobile = /^(13|14|15|17|18)\d{9}$/;
            var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
            if ((telephone.val() == "") || (!isMobile.test(telephone.val()) && !isPhone.test(telephone.val()))) {
                /*提示*/
                layer.msg('请输入有效的手机号');
                return false;
            } else {
                return true;
            }
        }

        function checkPassword() {
            var password = $("#password");
            var rPassword = password.val() ? password.val() : "";

            if (
                (password.val() == "") ||
                (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,15}$/.test(password.val()))
            ) {
                /*提示*/
                layer.msg('密码为6-15位字母、数字或符号组合');
                return false;
            } else {
                return true;
            }
        }

        function checkVerifyCode() {
            if ($("#verify_code").val() == "") {
                /*提示*/
                layer.msg('请输入验证码!');
                return false;
            } else {
                return true;
            }
        }

        function statistics(tel) {

            function getOrigin() {
                if (window.location.href.indexOf("/bd")) {
                    return "活动页"
                } else {
                    return "H5注册页"
                }
            }

            /*umeng*/
            _czc.push(["_trackEvent", getOrigin(), "免费注册"]);

            /*神策数据统计*/
            sa.track('btn_register_submit');

            console.log("统计代码执行完毕!")
        }

        /*获取url中携带信息并进行相关操作*/
        ;
        (function () {
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

            oReg.search_arr = getSearch();

            /*获取lp*/
            if (!oReg.search_arr.lp) {
                oReg.search_arr.lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();
            }

            /*电话*/
            if (oReg.search_arr.telephone) {
                $("#telephone").val(oReg.search_arr.telephone)
            }

            if (oReg.search_arr.floatbox && oReg.search_arr.floatbox == 'hide') {
                $(".h5_float_footer").fadeOut(50);
            }

            /*设置邀请源INVITE_CODE*/
            if (oReg.search_arr.user_code) {
                publicRequest('setInviteCode', 'POST', {
                    user_code: oReg.search_arr.user_code
                });
            }

            if (window.location.hostname === 'lonfx.tigerwit.com') {
                oReg.search_arr.pid = 'lonfx';
            }
            if (window.location.hostname === 'pandafx.tigerwit.com') {
                oReg.search_arr.pid = 'pandafx';
            }

            console.log(oReg);
        }());

        /*发送验证码*/
        ;
        (function () {
            var verify_code_btn = $("#verify_code_btn");
            verify_code_btn.on("click", function () {
                if (!checkTel()) return;
                /*检测手机号是否已经存在*/
                if (($("#telephone").val().trim() != "")) {
                    publicRequest('checkExists', 'GET', {
                        key: 3,
                        value: $("#telephone").val()
                    }).then(function (data) {
                        if (!data) return;
                        if (data.is_succ) {
                            if (data.data) {
                                layer.msg('此号码已注册!');
                            } else {
                                sendVerifyCode();
                            }
                        }
                    });
                }
            });
        }());

        /*提交按钮*/
        ;
        (function () {
            $("#submit_form").on("click", function () {
                if (!checkTel()) return;
                if (!checkVerifyCode()) return;
                if (!checkPassword()) return;

                /*loading层*/
                layer.load(1, {shade: false});
                /*统计*/
                statistics($("#telephone").val());

                publicRequest('register', 'POST', {
                    phone: $("#telephone").val() || "",
                    password: $("#password").val() || "",
                    verify_code: $("#verify_code").val() || "",
                    pid: oReg.search_arr.pid || "",
                    unit: oReg.search_arr.unit || "",
                    lp: oReg.search_arr.lp || "",
                    key: oReg.search_arr.key || "",
                    email: oReg.search_arr.email || ""
                }).then(function (data) {
                    if (!data) return;
                    layer.closeAll();
                    if (data.is_succ) {
                        /*跳转到注册成功页面*/
                        layer.msg('注册成功!');
                        /*统计注册成功*/
                        sa.track('btn_register_finish');
                        window._czc && _czc.push(["_trackEvent", "注册页", "立即注册且成功"]);
                    } else {
                        layer.msg(data.message);
                    }
                });
            });
        }());
    });
}());