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

    // set_token();

    /*token 5分钟过期*/
    // setInterval(function () {
    //     set_token();
    // }, 300000);

    // setTimeout(function(){
    //     openH5AgmentModal(100402, function(resolve, e){
    //         toRegister('is_agree');
    //         layer.close(resolve.layIndex)
    //     })
    // }, 500)

    // 获取phonecode，默认值为 86
    var areaCode = '86'
    var world_code = 'CN'
    var areaCodes = []
    var $areaCode = $('#areaCode')
    if ($areaCode[0]) {
        $areaCode.on('change', function (e) {
            areaCode = e.target.value;
            world_code = $(this).find('option:selected').data('code');
            $('#areaCodeShow').html(e.target.value ? '+ ' + e.target.value : 'Area Code')
        })
        publicRequest('getCountries', 'GET', { type: 1 }).then(function (data) {
            var temp = "<option value=''>" + lang.text('register.areaCode') + "</option>"
            data.data.forEach(function (item) {
                var selected = item.phone_code == 86 ? 'selected' : ''
                temp += "<option " + selected + " value=" + item.phone_code + " data-code=" + item.code + ">" + '+' + item.phone_code + " (" + (item.name) + ")" + "</option>"
            })
            $('#areaCodeShow').html('+86')
            $areaCode.html(temp)
        });
    }

    $(function () {
        /*定义全局变量*/
        var oReg = {};
        oReg.search_arr = getSearch();

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
                return true;
            }
        }

        function isInAgreement() {
            var location = window.location.href.indexOf("/agreement") >= 0;
            if (!!document.getElementsByClassName("h5_agreement_layout")[0] && location) {
                return true;
            }
        }

        function sendVerifyCode(type) {
            function isDisabled() {
                var flag = $("#verify_code_btn").hasClass("disable");
                if (flag) {
                    layer.open({
                        content: lang.text('register.code'),
                        skin: 'msg',
                        anim: false,
                        time: 1.2 /*1.2秒后自动关闭*/
                    });
                    return true;
                }
            }

            if (isDisabled()) return;

            var interval = null;

            // if (!token) {
            //     layer.open({
            //         content: lang.text('register.networkErr'),
            //         skin: 'msg',
            //         anim: false,
            //         time: 2 /*1.2秒后自动关闭*/
            //     });
            // }



            /*今日头条*/
            // if (window.location.pathname.indexOf('t33_b') != -1) {
            //     _taq.push({ convert_id: "55824901749", event_type: "view" })
            // }

            /*loading层*/
            layer.open({ type: 2, shadeClose: false });
            var params = {
                account: $("#telephone").val(),
                account_type: 1,
                phone_code: areaCode,
                code_token: $.cookie("code_token"),
                type: type || 1,
                referer: location.href
            }
            var all_sources = $.cookie('all_sources');
            if (all_sources) {
                params = $.extend(params, JSON.parse(all_sources));
            }
            publicRequest('getPhoneCode', 'POST', params).then(function (data) {
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    /*提示*/
                    layer.open({
                        content: lang.text('turntable.verificationCodeSent'),
                        skin: 'msg',
                        anim: false,
                        time: 1.2 /*1.2秒后自动关闭*/
                    });

                    /*倒计时*/
                    if (Boolean(interval) == false) {
                        var duration = 59;
                        interval = setInterval(function () {
                            $("#verify_code_btn").addClass("disable").html(duration-- + "s");
                            if (duration <= 0) {
                                clearInterval(interval);
                                interval = null;
                                $("#verify_code_btn").removeClass("disable").html(lang.text('register.resendCode'));
                                duration = 59;
                                /*重新获取token*/
                                // set_token();
                            }
                        }, 1000);
                    }
                } else {
                    // set_token();
                    layer.open({
                        content: data.message,
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
            // var isMobile = /^(13|14|15|17|18)\d{9}$/;
            // var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
            // || (!isMobile.test(telephone.val()) && !isPhone.test(telephone.val()))
            if ((telephone.val() == "")) {
                /*提示*/
                layer.open({
                    content: lang.text('register.effcient'),
                    skin: 'msg',
                    anim: false,
                    time: 1.2 /*1.2秒后自动关闭*/
                });
                return false;
            }
            // 如果本注册页包含areaCode那么提示错误
            else if (!areaCode && $areaCode[0]) {
                /*提示*/
                layer.open({
                    content: lang.text('register.areaCodeErr'),
                    skin: 'msg',
                    anim: false,
                    time: 1.2 /*1.2秒后自动关闭*/
                });
                return false;
            }
            else {
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
                    content: lang.text('register.password'),
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
                    content: lang.text('register.code1'),
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
            // function getSearch() {
            //     var url = location.search;
            //     /*获取url中"?"符后的字串*/
            //     var theRequest = new Object();
            //     if (url.indexOf("?") != -1) {
            //         var str = url.substr(1);
            //         strs = str.split("&");
            //         for (var i = 0; i < strs.length; i++) {
            //             theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            //         }
            //     }
            //     return theRequest;
            // }

            // 代理商推广
            if (oReg.search_arr.origin === 'proxy') {
                $('#password').parent().remove();
                $('#confirmPassword').parent().remove();
            }
            setSource();
            /*电话*/
            if (oReg.search_arr.telephone) {
                $("#telephone").val(oReg.search_arr.telephone)
            }

            if (oReg.search_arr.floatbox && oReg.search_arr.floatbox == 'hide') {
                $(".h5_float_footer").fadeOut(50);
            }



            // console.log(oReg);
        }());

        /*发送验证码*/
        ;
        (function () {
            var verify_code_btn = $("#verify_code_btn");
            verify_code_btn.on("touchend", function () {
                if (!checkTel()) return;
                /*检测手机号是否已经存在*/
                if (($("#telephone").val().trim() != "")) {
                    // 代理商时
                    if (oReg.search_arr.origin === 'proxy') {
                        sendVerifyCode(6);
                    } else {
                        publicRequest('checkExists', 'GET', {
                            key: 3,
                            value: $("#telephone").val()
                        }).then(function (data) {
                            if (!data) return;
                            if (data.is_succ) {
                                if (data.data) {
                                    layer.open({
                                        content: lang.text('register.registerd'),
                                        skin: 'msg',
                                        anim: false,
                                        time: 2 /*1.2秒后自动关闭*/
                                    });
                                } else {
                                    sendVerifyCode();
                                }
                            }
                        });
                    }

                }
            });
        }());

        /*提交按钮*/
        ;
        (function () {
            function toRegister(e, is_agree) {
                if (!checkTel()) return;
                if ($('#password').length > 0) {
                    // 判断密码
                    var password = $('#password').val();
                    var confirmPassword = $('#confirmPassword').val();
                    if (!password) {
                        layer.open({
                            content: lang.text('register.enterPassword'),
                            skin: 'msg',
                            anim: false,
                            time: 2 /*1.2秒后自动关闭*/
                        });
                        return
                    }
                    if (password != confirmPassword) {
                        layer.open({
                            content: lang.text('register.passwordsNoMatch'),
                            skin: 'msg',
                            anim: false,
                            time: 2 /*1.2秒后自动关闭*/
                        });
                        return
                    }
                }
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
                var params = {
                    appsflyer_id: $.cookie('APPSFLYER_ID') || null,
                    account: $("#telephone").val() || null,
                    account_type: 1,
                    phone_code: areaCode || '86',
                    world_code: world_code || 'CN',
                    email: oReg.search_arr.email || null,
                    lp: getLp(oReg.search_arr.lp),
                    is_agree: is_agree == 'is_agree' ? 1 : 0,
                    // TODO 暂时
                    // referrer: document.referrer,
                    // href: location.href,
                    // cookie: document.cookie
                }
                var all_sources = $.cookie('all_sources');
                if (all_sources) {
                    params = $.extend(params, JSON.parse(all_sources));
                }
                if ($('#password').length > 0) {
                    params = $.extend(params, {
                        password: password,
                        code: $("#verify_code").val() || null,
                        login_type: 3, // 登录验证方式，1-密码登录，2-验证码登录 3-密码登录有验证码
                    })
                } else {
                    params = $.extend(params, {
                        password: $("#verify_code").val() || null,
                        login_type: 2, // 登录验证方式，1-密码登录，2-验证码登录 3-密码登录有验证码
                    })
                }
                publicRequest('regOrLogin', 'POST', params).then(function (data) {
                    // console.log(data);
                    if (!data) return;
                    if (data.is_succ) {
                        setGtagUserId(data.data.user_code)

                        /*跳转到注册成功页面*/
                        if (window.location.pathname.indexOf('t35') >= 0) {
                            var pandaDownloadUrl = '';
                            if (oReg.search_arr.panda_download_url) {
                                pandaDownloadUrl = "&panda_download_url=" + oReg.search_arr.panda_download_url;
                            }
                            window.location.href = window.location.origin + "/m/h5_register/succ?origin=redbag" + pandaDownloadUrl;
                        } else if (oReg.search_arr.origin === 'proxy') {
                            window.location.href = window.location.origin + "/m/h5_register/succ?origin=proxysucc";
                        } else {
                            window.location.href = window.location.origin + "/m/h5_register/succ";
                        }
                    } else {

                        if ((data.code == 100402) || (data.code == 100403)) {
                            openH5AgmentModal(data.code, function (resolve, e) {
                                toRegister(e, 'is_agree');
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
            $("#submit_form").on("touchend", function (e) {
                toRegister(e);
            });
        }());

        /*注册成功页面*/
        if (isRegSucceed()) {
            /*第二页注册逻辑*/

            // 判断是否在红包页面，更改文字样式
            if (oReg.search_arr.origin === 'redbag') {
                // $('.h5_register_main').find('.forNormalPage').css('display', 'none');
                $('.h5_register_main').find('.forRedbag').css('display', 'block');
            } else if (oReg.search_arr.origin === 'proxysucc') {
                // 代理商绑定成功
                $('.h5_register_main').find('.forProxySucc').css('display', 'block');
            } else {
                $('.h5_register_main').find('.forNormalPage').css('display', 'block');
                // $('.h5_register_main').find('.forRedbag').css('display', 'none');
            }
        }

        /*客户协议页面*/
        if (isInAgreement()) {

            $(".h5_agreement_content .h5_agreement_item .tit").on('tap', function () {
                var ad = $(this).attr("data-address");
                var action_address = window.location.origin +
                    "/agreement/" + ad;
                // console.info(action_address);

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
    });
}());