;
(function () {


    // 获取phonecode，默认值为 86
    var areaCode;
    var world_code;
    var urlSearch = getSearch();
    if(urlSearch.world_code = 'pt-br'){
        world_code = 'PT';
        areaCode = '351'
    }else if(urlSearch.world_code = 'id'){
        world_code = 'ID'
        areaCode = '62'
    }else{
        world_code = 'VN'
        areaCode = '84'
    }
    
    // 获取区号列表
    var areaCodes = [];
    getCountries();
    function getCountries(){
        publicRequest('getCountries', 'GET').then(function (data) {
            if(data.is_succ){
                areaCodes = data.data;
                if($('.registerLayer .areaCode')[0]){
                    setAreaCode($('.registerLayer .areaCode'));
                }
            }
        });
    }

    $("#toRegister").on("click", function () {
        setTimeout(function(){
            if(areaCodes.length > 0){
                setAreaCode($('.registerLayer .areaCode'))
            } 
            initRegister();
        }, 0)
        
    })
    function setAreaCode($html){
        var temp = "<option value=''>"+lang.text('register.areaCode')+"</option>"
        areaCodes.forEach(function(item){
            var selected = item.phone_code == areaCode ? 'selected' : ''
            temp += "<option "+ selected +" value="+ item.phone_code  +" data-code="+ item.code +">"+ '+' + item.phone_code+ " ("+ (item.name) +")" +"</option>"
        })
        $html.html(temp)
    }
    function initRegister(){
        function sendVerifyCode() {
            var verifyCodeBtn = $(".registerLayer .verify_code_btn");
            function isDisabled() {
                var flag = verifyCodeBtn.hasClass("disable");
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

            /*loading层*/
            layer.open({ type: 2, shadeClose: false });
            publicRequest('getPhoneCode', 'POST', {
                account: $(".registerLayer .telephone").val(),
                account_type: 1,
                phone_code: $('.registerLayer .areaCode').val(),
                type: 1
            }).then(function (data) {
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    /*提示*/
                    layer.open({
                        content: lang.text('register.codeSent'),
                        skin: 'msg',
                        anim: false,
                        time: 1.2 /*1.2秒后自动关闭*/
                    });

                    /*倒计时*/
                    if (Boolean(interval) == false) {
                        var duration = 59;
                        interval = setInterval(function () {
                            verifyCodeBtn.addClass("disable").html(duration-- + "s");
                            if (duration <= 0) {
                                clearInterval(interval);
                                interval = null;
                                verifyCodeBtn.removeClass("disable").html(lang.text('register.resendCode'));
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
            var telephone = $(".registerLayer .telephone");
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
            else if($('.registerLayer .areaCode')[0] && (!$('.registerLayer .areaCode').val())){
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
            var password = $(".registerLayer .password");
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
            if ($(".registerLayer .verify_code").val() == "") {
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

        /*发送验证码*/
        ;
        (function () {
            var verifyCodeBtn = $(".registerLayer .verify_code_btn");
            verifyCodeBtn.on("click", function () {
                if (!checkTel()) return;
                /*检测手机号是否已经存在*/
                if (($(".registerLayer .telephone").val().trim() != "")) {
                    publicRequest('checkExists', 'GET', {
                        key: 3,
                        value: $(".registerLayer .telephone").val()
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
        }());

        /*提交按钮*/
        ;
        (function () {
            $(".registerLayer").on('click', '.submit_form', toRegister);
            function toRegister (e, is_agree) {
                if (!checkTel()) return;
                if (!checkVerifyCode()) return;
                if (!checkPassword()) return;

                /*loading层*/
                layer.open({ type: 2, shadeClose: false });
                
                publicRequest('regOrLogin', 'POST', {
                    action: register,
                    account: $(".registerLayer .telephone").val() || null,
                    account_type: 1,
                    phone_code: $(".registerLayer .areaCode").val() || areaCode,
                    world_code: world_code,
                    code: $(".registerLayer .verify_code").val() || null,
                    password: $(".registerLayer .password").val() || null,
                    activity: 'Spin the Wheel – Lucky Draw',
                    login_type: 3, // 登录验证方式，1-密码登录，2-验证码登录 3-验证码密码都有
                    is_agree: is_agree == 'is_agree' ? 1 : 0
                }).then(function (data) {
                    // console.log(data);
                    if (!data) return;
                    if (data.is_succ) {
                        writeCookie({nameKey: 'token', nameValue: data.data.token});
                        writeCookie({nameKey: 'user_code', nameValue: data.data.user_code});
                        writeCookie({nameKey: 'username', nameValue: data.data.username});
                        writeCookie({nameKey: 'username_en', nameValue: data.data.username_en});
                        writeCookie({nameKey: 'world_code', nameValue: world_code});
                        layer.open({
                            content: lang.text('registerJs.registerSucc'),
                            skin: 'msg',
                            anim: false,
                            time: 2 /*1.2秒后自动关闭*/
                        });
                    } else {
                        if ((data.code == 100402) || (data.code == 100403)) {
                            openH5AgmentModal(data.code, function(resolve, e){
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
        }());
    }
}());
