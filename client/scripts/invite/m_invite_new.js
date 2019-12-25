; (function ($) {
    'use strict';

    /*设置邀请源INVITE_CODE*/
    var searcInfo = getSearch();
    if (searcInfo.user_code) {
        $.cookie('invite_code', searcInfo.user_code, { expires: 1, path: '/', domain: getDomain() });
        $.cookie('invite_status', 2, { expires: 1, path: '/', domain: getDomain() });
    }
    // 选择区号
    var areaCode = '86';
    var world_code = 'CN';
    var $areaCode = $('#areaCode')
    if ($areaCode[0]) {
        $areaCode.on('change', function (e) {
            areaCode = e.target.value;
            world_code = $(this).find('option:selected').data('code');
            $('#areaCodeShow').html(e.target.value ? '+' + e.target.value : 'Area Code')
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
    // 获取验证码
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
    });
    function checkTel() {
        /*获取手机号*/
        var telephone = $("#telephone");
        if ((telephone.val() == "")) {
            /*提示*/
            layer.open({
                content: lang.text('register.effcient'),
                skin: 'msg',
                anim: false,
                time: 1.2 /*1.2秒后自动关闭*/
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
    function sendVerifyCode() {
        var interval = null;
        /*loading层*/
        layer.open({ type: 2, shadeClose: false });
        publicRequest('getPhoneCode', 'POST', {
            account: $("#telephone").val(),
            account_type: 1,
            phone_code: areaCode,
            code_token: $.cookie("code_token"),
            type: 1
        }).then(function (data) {
            layer.closeAll();
            if (!data) return;
            if (data.is_succ) {
                /*提示*/
                layer.open({
                    content: lang.text('turntable.verificationCodeSent'),
                    skin: 'msg',
                    anim: false,
                    time: 1.2
                });

                /*倒计时*/
                if (Boolean(interval) == false) {
                    var duration = 60;
                    $("#verify_code_btn").removeClass("active");
                    $("#verify_code_btn_disabeld").addClass("active");
                    interval = setInterval(function () {
                        $("#verify_code_btn_disabeld i").html(--duration);
                        if (duration <= 0) {
                            clearInterval(interval);
                            interval = null;
                            $("#verify_code_btn_disabeld i").html(60);
                            $("#verify_code_btn").addClass("active");
                            $("#verify_code_btn_disabeld").removeClass("active");
                        }
                    }, 1000);
                }
            } else {
                // set_token();
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    anim: false,
                    time: 2
                });
            }
        });
    }
    //注册
    $("#submit_btn").on("touchend", function (e) {
        toRegister(e);
    });
    function toRegister(e, is_agree) {
        if (!checkTel()) return;
        if (!checkVerifyCode()) return;
        layer.open({ type: 2, shadeClose: false });
        publicRequest('regOrLogin', 'POST', {
            invite_code: searcInfo.user_code,
            invite_status: 2,
            account: $("#telephone").val(),
            account_type: 1,
            phone_code: areaCode || '86',
            world_code: world_code || 'CN',
            password: $("#verify_code").val(),
            login_type: 2, // 登录验证方式，1-密码登录，2-验证码登录 3-密码登录有验证码
            is_agree: is_agree == 'is_agree' ? 1 : 0
        }).then(function (data) {
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                window.location.href = window.location.origin + "/m/h5_register/succ";
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
    var $inviteBox = $(".m_invite_box_wrapper");
    var originalHeight=document.documentElement.clientHeight ||document.body.clientHeight;
    $inviteBox.css('height', (originalHeight - $inviteBox.offset().top)+'px');
}(jQuery));