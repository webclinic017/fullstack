/*
    web 活动页注册逻辑
*/
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

        /* 运营关于pid等信息存储要求：
            1.若链接中带有pid，所有相关字段信息清空重写
            2.若链接中未带有pid，则沿用原来信息
            3.每次重写pid等信息，存储时间为7天
            4.lp 每次都会更新到最新的页面来源（首页 lp=sy）
        */
        ;
        (function () {
            var lp = '';
            var pid = '';
            var unit = '';
            var key = '';

            var hostnameUrl = window.location.hostname;
            var domainUrl = hostnameUrl.substring(hostnameUrl.indexOf('.') + 1) || "tigerwit.com";
            var href = window.location.href;
            var oDate = new Date();
            var overdueDate = new Date();
            oDate.setTime(oDate.getTime() + (7 * 24 * 60 * 60 * 1000));
            overdueDate.setTime(oDate.getTime() - (7 * 24 * 60 * 60 * 1000));
            var expTime = ';expires='+oDate.toUTCString();
            var overdueExpTime = ';expires='+overdueDate.toUTCString();
            lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();
            if (lp != "") {
                document.cookie = 'lp=' + lp + ';path=/;domain=' + domainUrl+expTime;
            }
            /*获取查询字段*/
            function getSearch() {
                var aGET = {};
                if (href.indexOf('?') != -1) {
                    var aQuery = href.split('?')[1];
                    if (aQuery.length > 0) {
                        var aBuf = aQuery.split("&");
                        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                            var aTmp = aBuf[i].split("=");
                            aGET[aTmp[0]] = aTmp[1];
                        }
                    };
                    pid = aGET['pid'] ? aGET['pid'] : "";
                    unit = aGET['unit'] ? aGET['unit'] : "";
                    key = aGET['key'] ? aGET['key'] : "";

                    if (pid != '') {
                        // 清空重写
                        document.cookie = 'pid=' + null + ';path=/;domain=' + domainUrl+overdueExpTime;
                        document.cookie = 'unit=' + null + ';path=/;domain=' + domainUrl+overdueExpTime;
                        document.cookie = 'key=' + null + ';path=/;domain=' + domainUrl+overdueExpTime;
                        
                        document.cookie = 'pid=' + pid + ';path=/;domain=' + domainUrl+expTime;

                        if (unit) {
                            document.cookie = 'unit=' + unit + ';path=/;domain=' + domainUrl+expTime;
                        }
                        if (key) {
                            document.cookie = 'key=' + key + ';path=/;domain=' + domainUrl+expTime;
                        }
                    }
                }
                // console.log(aGET);
                return aGET;
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

            // console.log(oReg);
        }());

        //神策统计
        $("#telephone").on("click", function () {
            sa.track('inp_PN');
        });
        $("#verify_code").on("click", function () {
            sa.track('inp_code');
        });

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
                                sa.track('btn_register_code');
                            }
                        }
                    });
                }
            });
        }());

        /*提交按钮*/
        ;
        (function () {

            function toLogin (is_agree) {
                if (!checkTel()) return;
                if (!checkVerifyCode()) return;

                /*loading层*/
                layer.load(1, {shade: false});

                // 神策统计 - 点击登录
                if(!is_agree) {
                    sa.track('click_login', {
                        login_type: '验证码登录'
                    });
                }

                publicRequest('regOrLogin', 'POST', {
                    phone: $("#telephone").val() || null,
                    // password: $("#password").val() || null,
                    password: $("#verify_code").val() || null,
                    login_type: 2, // 登录验证方式，1-密码登录，2-验证码登录
                    pid: oReg.search_arr.pid || null,
                    unit: oReg.search_arr.unit || null,
                    lp: oReg.search_arr.lp || null,
                    key: oReg.search_arr.key || null,
                    email: oReg.search_arr.email || null,
                    is_agree: is_agree == 'is_agree' ? 1 : 0
                }).then(function (data) {
                    if (!data) return;
                    layer.closeAll();
                    if (data.is_succ) {
                        /*跳转到注册成功页面*/
                        layer.msg('注册成功!');
                        /*统计注册成功*/
                        sa.track('btn_register_finish');
                        // 神策统计 - 登录
                        sa.track('login', {
                            login_isNew: true,
                            login_type: '验证码登录'
                        });
                        window._czc && _czc.push(["_trackEvent", "注册页", "立即注册且成功"]);
                    } else {
                        if ((data.code == 100402) || (data.code == 100403)) {
                            openWebAgmentModal(data.code, function(resolve, e){
                                toLogin('is_agree');
                                layer.close(resolve.layIndex)
                            })
                        } else {
                            layer.msg(data.message);
                        }
                    }
                });
            }
            $("#submit_form").on("click", toLogin);
        }());
    });
}());