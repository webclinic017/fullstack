/*
    web 活动页注册逻辑
*/
;
(function () {
    /*生成token*/
    // var token = null;

    // function set_token() {
    //     publicRequest('setToken', 'POST').then(function (data) {
    //         if (!data) return;
    //         if (data.is_succ) {
    //             token = $.cookie("code_token");
    //         }
    //     });
    // }
    /*
        获取domain
    */
    // function getDomain() {
    //     // var domain = location.hostname.match(/\.\w+\.com/) ? location.hostname.match(/\.\w+\.com/)[0] : '.tigerwit.com';
    //     var domain = '.' + location.hostname.split('.').slice(-2).join('.');
    //     // console.log(url.match(/\.\w+\.com/)[0]);
    //     return domain;
    // }

    // set_token();

    // /*token 5分钟过期*/
    // setInterval(function () {
    //     set_token();
    // }, 300000);

    $(function () {
        var oReg = {};

        function sendVerifyCode(type) {
            function isDisabled() {
                var flag = $("#verify_code_btn").hasClass("disable");
                if (flag) {
                    layer.msg('请一分钟后再试!');
                    return true;
                }
            }

            if (isDisabled()) return;

            var interval = null;

            /*loading层*/
            layer.load(1, { shade: false });
            var params = {
                account: $("#telephone").val(),
                account_type: 1,
                code_token: $.cookie("code_token"),
                type: type || 1
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
                    layer.msg('验证码已发送!');

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
                                // set_token();
                            }
                        }, 1000);
                    }
                } else {
                    // set_token();
                    layer.msg(data.message || '获取失败,请重试!');
                }
            });
        }

        function checkTel() {
            /*获取手机号*/
            var telephone = $("#telephone");
            var rPhone = telephone.val() ? telephone.val() : "";
            var isMobile = /^1\d{10}$/;
            if ((telephone.val() == "") || !isMobile.test(telephone.val().trim())) {
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
                (!/^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,15}$/.test(password.val().trim()))
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
        };
        (function () {
            oReg.search_arr = getSearch();
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
            verify_code_btn.on("click", function () {
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
                                    layer.msg('此号码已注册!');
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

            // publicRequest('getCountries', 'GET').then(function (data) {
            //     // console.log(data);
            //     if (data.is_succ) {
            //         var optionStr = ''
            //         for (var i=0; i<data.data.length;i++) {
            //             optionStr += '<option value="'+data.data[i].code+'">'+data.data[i].name+'</option>';
            //         }
            //         $("#country").append(optionStr);
            //     }
            // });

            function toLogin(e, is_agree) {
                // if (!$("#country").val()) {
                //     layer.msg('请选择国家/大区!');
                //     return;
                // }
                if (!checkTel()) return;

                // 判断密码
                var password = $('#password').val();
                var confirmPassword = $('#confirmPassword').val();
                if (!password) {
                    layer.msg('请输入密码');
                    return
                }
                if (password != confirmPassword) {
                    layer.msg('两次输入密码不一致');
                    return
                }

                if (!checkVerifyCode()) return;

                /*loading层*/
                layer.load(1, { shade: false });
                var params = {
                    appsflyer_id: $.cookie('APPSFLYER_ID') || null,
                    account: $("#telephone").val() || null,
                    account_type: 1,
                    phone_code: '86',
                    world_code: 'CN',
                    password: password,
                    code: $("#verify_code").val() || null,
                    login_type: 3, // 登录验证方式，1-密码登录，2-验证码登录 3-密码登录有验证码
                    email: oReg.search_arr.email || null,
                    lp: oReg.search_arr.lp || window.location.pathname.replace(/[\/:]/g, "").toLowerCase(),
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
                publicRequest('regOrLogin', 'POST', params).then(function (data) {
                    if (!data) return;
                    layer.closeAll();
                    if (data.is_succ) {
                        /*跳转到注册成功页面*/
                        layer.msg('注册成功!');
                        $.cookie('token', data.data.token, { expires: 30, path: '/', domain: getDomain() });
                        $.cookie('user_code', data.data.user_code, { expires: 30, path: '/', domain: getDomain() });
                        $.cookie('username', data.data.username, { expires: 30, path: '/', domain: getDomain() });
                        $.cookie('username_en', data.data.username_en, { expires: 30, path: '/', domain: getDomain() });
                        $.cookie('world_code', 'CN', { expires: 30, path: '/', domain: getDomain() });

                        setGtagUserId(data.data.user_code)
                        setTimeout(function () {
                            toGtagEvent('phone_register_success_web');
                            window.location.href = '/space/#/center?type=new';
                        }, 100);
                    } else {
                        if ((data.code == 100402) || (data.code == 100403)) {
                            openWebAgmentModal(data.code, function (resolve, e) {
                                toLogin(e, 'is_agree');
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