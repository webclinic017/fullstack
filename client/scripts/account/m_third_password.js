$(document).ready(function () {
    var $passwordDetail = $(".m_third_password .m_third_password__detail");
    var $passwordSuccess = $(".m_third_password .m_third_password__success");
    var $newPassword = $(".m_third_password .new_password");
    var $confirmPassword = $(".m_third_password .confirm_password");
    var $passwordBtn = $(".m_third_password .m_third_password__detail-btn .btn");
    var $passwordSuccBtn = $(".m_third_password .m_third_password__success-btn .btn");

    setUserCookie();

    $passwordBtn.on("tap", function (e) {
        e.preventDefault();
        if (!$newPassword.val()) {
            layer.open({
                content: '请填写新密码',
                skin: 'msg',
                time: 2
            });
        } else if (!$confirmPassword.val()) {
            layer.open({
                content: '请确认新密码',
                skin: 'msg',
                time: 2
            });
        } else if ($newPassword.val() !== $confirmPassword.val()) {
            layer.open({
                content: '两次输入不一致',
                skin: 'msg',
                time: 2
            });
        } else {
            layer.open({type: 2, shadeClose: false});

            publicRequest('thirdChangePassword', 'PUT', {
                new_passwd: $newPassword.val(),
                confirm_passwd: $confirmPassword.val()
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    $passwordDetail.removeClass("active");
                    $passwordSuccess.addClass("active");
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        }
    });

    $passwordSuccBtn.on("tap", function (e) {
        e.preventDefault();
        // var iframe = document.createElement('iframe');
        // iframe.style.display = 'none';
        // iframe.src = window.location.protocol+'//'+window.location.hostname+'/third/complete/changePassword';
        // document.body.appendChild(iframe);
        var r_href = window.location.protocol+'//'+window.location.hostname+'/third/complete/changePassword';
        window.location = r_href;
    });

    function setUserCookie () {
        var user_id = getUrlParam("user_id") || '';
        var mt4_id = getUrlParam("mt4_id") || '';
        var private_key = getUrlParam("private_key") || '';
        var action = getUrlParam("action") || '';
        var sign = getUrlParam("sign") || '';

        var expiresDate = new Date();
        expiresDate.setTime(expiresDate.getTime() + (30 * 60 * 1000));  // 30分钟过期
        
        $.cookie("third_user_id", user_id , { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("third_mt4_id", mt4_id , { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("private_key", private_key , { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("action", action , { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("sign", sign , { path: '/', domain: getDomain(), expires: expiresDate });
    }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }

});