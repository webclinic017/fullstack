$(document).ready(function () {
    /*注册组件公用逻辑*/
    var lp = '';
    var pid = '';
    var unit = '';
    var key = '';
    var clickable = true;

    var hostnameUrl = window.location.hostname;
    var originUrl = window.location.origin;
    var domainUrl = hostnameUrl.substring(hostnameUrl.indexOf('.') + 1) || "tigerwit.com";
    // console.info(window.location);
    lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();
    if (lp != "") {
        document.cookie = 'lp=' + lp + ';path=/;domain=' + domainUrl;
    }

    if (window.location.href.indexOf("?") >= 0) {
        var aQuery = window.location.href.split("?");
        var aGET = {};
        if (aQuery.length > 1) {
            var aBuf = aQuery[1].split("&");
            for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                var aTmp = aBuf[i].split("=");
                aGET[aTmp[0]] = aTmp[1];
            }
        }
        pid = aGET['pid'] ? aGET['pid'] : "";
        unit = aGET['unit'] ? aGET['unit'] : "";
        key = aGET['key'] ? aGET['key'] : "";

        if (pid != "") {
            document.cookie = 'pid=' + pid + ';path=/;domain=' + domainUrl;
        }
        if (unit != "") {
            document.cookie = 'unit=' + unit + ';path=/;domain=' + domainUrl;
        }
        if (key != "") {
            document.cookie = 'key=' + key + ';path=/;domain=' + domainUrl;
        }
    }

    window.bdRegister = regist;
    function regist(info) {
        var input = $('#' + info.usernameId);
        var rName = input.val() ? input.val() : "";
        if (/^[\u4e00-\u9fa5A-Za-z\d]+$/.test(input.val())) {
            function checkLength(name) {
                var num = 0;
                for (var i = 0; i < name.length; i++) {
                    if (/^[\u4e00-\u9fa5]$/.test(name[i])) {
                        num += 2;
                    } else {
                        num++;
                    }
                }
                return num;
            }

            var username_length = parseInt(checkLength(input.val()));
            if (username_length < 4 || username_length > 16) {
                input.val(" 昵称应在4到16个字符之间").addClass("warning");
            }
        } else if (!(/^[\u4e00-\u9fa5A-Za-z\d]+$/.test(input.val()))) {
            input.val("昵称不合法").addClass("warning");
        }
        if ((input.val() == "") || (input.val() == "请填写昵称")) {
            input.val("请填写昵称").addClass("warning");
        }
        var input = $('#' + info.telephoneId);
        var rPhone = input.val() ? input.val() : "";
        var isMobile = /^(13|14|15|17|18)\d{9}$/;
        var isPhone = /^((0\d{2,4})-)?(\d{7,8})(-(\d{2,}))?$/;
        if ((input.val() == "") || (input.val() == "请填写有效的电话号码") || (!isMobile.test(input.val()) && !isPhone.test(input.val()))) {
            input.val("请填写有效的电话号码").addClass("warning");
        }
        var input = $('#' + info.emailId);
        var rEmail = input.val() ? input.val() : "";
        if ((input.val() == "") || (input.val() == "请填写有效的Email") || (!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(input.val()))) {
            input.val("请填写有效的Email").addClass("warning");
        }


        if ($(":input").hasClass("warning")) {
            return false;
        } else {
            //防止重复提交
            clickable = false;
            $('#' + info.targetId).html('<i class="loading fa fa-spinner"></i>正在跳转');

            /*
             品友DSP,负责人:蔡雪峰 添加日期：2016.7.12
             //删除此段代码时需要同时删除调用pyRegisterCvt (../t1/script/check.js)
             ==begin==
             */
            if (window.pyRegisterCvt) {
                window.pyRegisterCvt(rPhone);
            }
            /*
             品友DPS
             ==end==
             */

            // umeng
            _czc.push(["_trackEvent", "活动页", "免费注册"]);

            // 360            
            if (window._mvq) {
                _mvq.push(['$setGeneral', 'registered', '', rName, rPhone]);
            }

            // 神策数据统计
            sa.track('btn_register');

            var tmpForm = $("<form></form>");
            tmpForm.append("<input type='hidden' value='" + rName + "' name='username'/>");
            tmpForm.append("<input type='hidden' value='" + rPhone + "' name='phone'/>");
            tmpForm.append("<input type='hidden' value='" + rEmail + "' name='email'/>");
            tmpForm.append("<input type='hidden' value='" + lp + "' name='lp'/>");
            tmpForm.append("<input type='hidden' value='" + pid + "' name='pid'/>");
            tmpForm.append("<input type='hidden' value='" + unit + "' name='unit'/>");
            tmpForm.append("<input type='hidden' value='" + key + "' name='key'/>");
            tmpForm.appendTo("body");
            var returnurl;
            if (isPC()) {
                returnurl = originUrl + "/space/#/account/register?" + "name=" + rName + "&phone=" + rPhone + "&email=" + rEmail + "&lp=" + lp + "&pid=" + pid + "&unit=" + unit + "&key=" + key;
            } else {

                returnurl = originUrl + "/m/h5_register/reg?" + "name=" + rName + "&telephone=" + rPhone + "&email=" + rEmail + "&lp=" + lp + "&pid=" + pid + "&unit=" + unit + "&key=" + key;
            }
            jQuery.ajax({
                url: '/action/public/v3/page_signup',
                data: tmpForm.serialize(),
                type: "POST",
                success: function (data) {
                    location.href = returnurl;
                },
                error: function (err) {
                    location.href = returnurl;
                }
            });
            return true;
        }
    }

    $('#regist_btn').on("click", function (e) {
        if (!clickable) { return false }
        regist({
            usernameId: 'username',
            telephoneId: 'telephone',
            emailId: 'email',
            targetId: 'regist_btn'
        });
    });

    $('#float_regBtn').on("click", function () {
        if (!clickable) { return false }
        regist({
            usernameId: 'float_username',
            telephoneId: 'float_telephone',
            emailId: '',
            targetId: 'float_regBtn'
        });
    });

    // $(document.body).on("keyup", function (e) {
    //     if (e.keyCode == 13) {
    //         regist({
    //             usernameId: 'username',
    //             telephoneId: 'telephone',
    //             emailId: 'email',
    //             targetId: 'regist_btn'
    //         });
    //     }
    // });

    $(":input").focus(function () {
        if ($(this).hasClass("warning")) {
            $(this).val("");
            $(this).removeClass("warning");
        }
    });

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
});

//兼容placeholder
$(document).ready(function () {
    var doc = document,
        inputs = doc.getElementsByTagName('input'),
        supportPlaceholder = 'placeholder' in doc.createElement('input'),

        placeholder = function (input) {
            var text = input.getAttribute('placeholder'),
                defaultValue = input.defaultValue;
            if (defaultValue == '') {
                input.value = text
            }
            input.onfocus = function () {
                if (input.value === text) {
                    this.value = ''
                }
            };
            input.onblur = function () {
                if (input.value === '') {
                    this.value = text
                }
            }
        };

    if (!supportPlaceholder) {
        for (var i = 0, len = inputs.length; i < len; i++) {
            var input = inputs[i],
                text = input.getAttribute('placeholder');
            if (input.type === 'text' && text) {
                placeholder(input)
            }
        }
    }
});

; (function () {
    var floater = $('#float_register');

    window.onscroll = function (e) {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (!floater.hasClass('close')) {
            if (scrollTop <= 450) {
                floater.css({
                    bottom: '-120px'
                });
            } else {
                floater.css({
                    bottom: '0'
                });
            }
        }
    };

    $('#float_trigger').click(function () {
        floater.toggleClass("close");
        if (floater.hasClass('close')) {
            $(this).html("点击注册");
            floater.css({
                bottom: '-98px'
            });
        } else {
            $(this).html("点击收起");
            floater.css({
                bottom: '0'
            });
        }
    });
}());

