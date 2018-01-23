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
        /*定义全局变量*/
        var oReg = {};

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

        function isRegSucceed() {
            var location = window.location.href.indexOf("/succ") >= 0;
            if (!!document.getElementById("regist_btn3") && location) {
                /*统计注册成功*/
                sa.track('btn_register_finish');
                window._czc && _czc.push(["_trackEvent", "注册页", "立即注册且成功"]);

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

        function isInAgreement() {
            var location = window.location.href.indexOf("/agreement") >= 0;
            if (!!document.getElementsByClassName("h5_agreement_layout")[0] && location) {
                return true;
            }
        }

        function sendVerifyCode() {
            function isDisabled() {
                var flag = $("#verify_code_btn").hasClass("disable");
                if (flag) {
                    layer.open({
                        content: '请一分钟后再试!',
                        skin: 'msg',
                        anim: false,
                        time: 1.2 /*1.2秒后自动关闭*/
                    });
                    return true;
                }
            }

            if (isDisabled()) return;

            var interval = null;

            if (!token) {
                sa.track('set_token_failed');
                layer.open({
                    content: '网络异常,请刷新重试!',
                    skin: 'msg',
                    anim: false,
                    time: 2 /*1.2秒后自动关闭*/
                });
            }



            /*今日头条*/
            // if (window.location.pathname.indexOf('t33_b') != -1) {
            //     _taq.push({ convert_id: "55824901749", event_type: "view" })
            // }

            /*loading层*/
            layer.open({ type: 2, shadeClose: false });
            publicRequest('getPhoneCode', 'POST', {
                phone: $("#telephone").val(),
                code_token: $.cookie("code_token"),
                type: 1
            }).then(function (data) {
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    /*提示*/
                    layer.open({
                        content: '验证码已发送!',
                        skin: 'msg',
                        anim: false,
                        time: 1.2 /*1.2秒后自动关闭*/
                    });

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
                    layer.open({
                        content: '获取失败,请重试!',
                        skin: 'msg',
                        anim: false,
                        time: 2 /*3秒后自动关闭*/
                    });
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
                layer.open({
                    content: '请输入有效的手机号',
                    skin: 'msg',
                    anim: false,
                    time: 1.2 /*1.2秒后自动关闭*/
                });
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
                layer.open({
                    content: '密码为6-15位字母、数字或符号组合',
                    skin: 'msg',
                    anim: false,
                    time: 2 /*2秒后自动关闭*/
                });
                return false;
            } else {
                return true;
            }
        }

        function checkVerifyCode() {
            if ($("#verify_code").val() == "") {
                /*提示*/
                layer.open({
                    content: '请输入验证码!',
                    skin: 'msg',
                    anim: false,
                    time: 2 /*2秒后自动关闭*/
                });
                return false;
            } else {
                return true;
            }
        }

        /*判断是否在APP中,关闭相关层*/
        ;
        (function () {
            if (isInTiger()) {
                $(".h5_nav").css("display", "none");
                $(".h5_float_footer").css("display", "none");
            }
        }());

        /*h5 - footer关闭按钮*/
        ;
        (function () {
            $(".close").on('touchend', function () {
                $(".h5_float_footer").fadeOut(500);
            });
        }());

        /*密码可视按钮*/
        ;
        (function () {
            $(".password_btn").on("touchend", function () {
                /*切换试图可视状态*/
                $(".password_btn img").toggleClass("hide");
                /*更改input的type*/
                checkType()
            });

            /*封装更改input-type属性函数*/
            function checkType() {
                if ($(".password_btn img:eq(1)").hasClass("hide")) {
                    $("#password").attr("type", "text")
                } else {
                    $("#password").attr("type", "password")
                }
            }
        }());

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
            verify_code_btn.on("touchend", function () {
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
                                layer.open({
                                    content: '此号码已注册!',
                                    skin: 'msg',
                                    anim: false,
                                    time: 2 /*1.2秒后自动关闭*/
                                });
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

            function toRegister (is_agree) {
                if (!checkTel()) return;
                if (!checkVerifyCode()) return;
                // if (!checkPassword()) return;

                /*loading层*/
                layer.open({ type: 2, shadeClose: false });

                /*今日头条统计表单提交*/
                // if (window.location.pathname.indexOf('t33_a') != -1) {
                //     _taq.push({ convert_id: "55824929459", event_type: "form" })
                // }

                /*今日头条统计表单提交*/
                if (window.location.pathname.indexOf('t35') != -1) {
                    _taq.push({ convert_id: "81431259366", event_type: "form" })
                }

                // 神策统计 - 点击登录
                if(!is_agree) {
                    sa.track('click_login', {
                        login_type: '验证码登录'
                    });
                }
                
                publicRequest('regOrLogin', 'POST', {
                    phone: $("#telephone").val() || null,
                    // password: $("#password").val() || null,
                    password: $("#verify_code").val() || $("#password").val() || null,
                    login_type: 2, // 登录验证方式，1-密码登录，2-验证码登录
                    pid: oReg.search_arr.pid || null,
                    unit: oReg.search_arr.unit || null,
                    lp: oReg.search_arr.lp || null,
                    key: oReg.search_arr.key || null,
                    email: oReg.search_arr.email || null,
                    is_agree: is_agree == 'is_agree' ? 1 : 0
                }).then(function (data) {
                    console.log(data);
                    if (!data) return;
                    if (data.is_succ) {
                        // 神策统计 - 登录
                        sa.track('login', {
                            login_isNew: true,
                            login_type: '验证码登录'
                        });
                        /*跳转到注册成功页面*/
                        if (window.location.pathname.indexOf('t35') >= 0) {
                            var pandaDownloadUrl = '';
                            if (oReg.search_arr.panda_download_url) {
                                pandaDownloadUrl = "&panda_download_url="+oReg.search_arr.panda_download_url;
                            }
                            window.location.href = window.location.origin + "/m/h5_register/succ?origin=redbag"+pandaDownloadUrl;
                        } else {
                            window.location.href = window.location.origin + "/m/h5_register/succ";
                        }
                    } else {

                        if ((data.code == 100402) || (data.code == 100403)) {
                            openH5AgmentModal(data.code, function(resolve, e){
                                toRegister('is_agree');
                                layer.close(resolve.layIndex)
                            })
                        } else {
                            layer.closeAll();
                            layer.open({
                                content: data.message,
                                skin: 'msg',
                                anim: false,
                                time: 2 /*2秒后自动关闭*/
                            });
                        }
                        
                    }
                });

            }
            $("#submit_form").on("touchend", function () {
                toRegister();
            });
        }());

        /*注册成功页面*/
        if (isRegSucceed()) {
            /*第二页注册逻辑*/

            // 判断是否在红包页面，更改文字样式
            if (window.location.href.indexOf('redbag') >= 0) {
                $('.h5_register_main').find('.forNormalPage').css('display', 'none');
                $('.h5_register_main').find('.forRedbag').css('display', 'block');
            } else {
                $('.h5_register_main').find('.forNormalPage').css('display', 'block');
                $('.h5_register_main').find('.forRedbag').css('display', 'none');
            }
        }

        /*客户协议页面*/
        if (isInAgreement()) {

            $(".h5_agreement_content .h5_agreement_item .tit").on('tap', function () {
                var ad = $(this).attr("data-address");
                var action_address = window.location.origin +
                             "/agreement/"+ad;
                console.info(action_address);

                if (isInTiger()) {
                    callNative({
                        type: "openUrl",
                        url: action_address
                    });
                } else {
                    location.href = action_address;
                }
                return false;
                
            });
            
        }

        $('#regist_btn3').on('touchend',function(e){
            sa.track('DI_click', {
                page: window.location.href
            });
            if (oReg.search_arr.panda_download_url && oReg.search_arr.panda_download_url === 'oppo') {
                // pandafx download url of oppo
                window.location.href = "http://adsfs.oppomobile.com/mp/app/B/detail.html?im=$im1$&pkg=com.pandaforex.forex";
            } else {
                window.location.href = $(e.target).attr('data-url');
            }
        })
    });
}());