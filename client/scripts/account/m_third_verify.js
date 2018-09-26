$(document).ready(function () {
    var ele = {
        wrapper: ".m_third",
        navbar: ".m_third .m_third_navbar",
        navbarStep2: ".m_third .m_third_navbar .m_third_navbar__progress li.num1",
        navbarStep3: ".m_third .m_third_navbar .m_third_navbar__progress li.num2",
        navbarStep4: ".m_third .m_third_navbar .m_third_navbar__progress li.num3",
        index: ".m_third .m_third_index",
        indexDollar200: ".m_third .m_third_index .m_third_index__content .dollar200",
        indexBtn: ".m_third .m_third_index .m_third_index__btn .btn",
        kyc: ".m_third .m_third_kyc",
        kycSelect: ".m_third .m_third_kyc .m_third_kyc__single select",
        kycInpRadio: ".m_third .m_third_kyc .m_third_kyc__single .m_third_kyc__single-list.radio",
        kycInpCheckbox: ".m_third .m_third_kyc .m_third_kyc__single .m_third_kyc__single-list.checkbox",
        kycBtn: ".m_third .m_third_kyc .m_third_kyc__btn .btn",
        userinfo: ".m_third .m_third_userinfo",
        userinfoEmail: ".m_third .m_third_userinfo .email",
        userinfoCountry: ".m_third .m_third_userinfo .country",
        userinfoAddress: ".m_third .m_third_userinfo .address",
        userinfoSelect: ".m_third .m_third_userinfo select",
        userinfoBtn: ".m_third .m_third_userinfo .m_third_userinfo__btn .btn",
        username: ".m_third .m_third_username",
        usernameGender: ".m_third .m_third_username .m_third_username__male span",
        usernameName: ".m_third .m_third_username .realname",
        usernameCardType: ".m_third .m_third_username .card_type",
        usernameSelect: ".m_third .m_third_username select",
        usernameIdNo: ".m_third .m_third_username .id_no",
        usernameBirth: ".m_third .m_third_username .birth",
        usernameBtn: ".m_third .m_third_username .m_third_username__btn .btn",
        card: ".m_third .m_third_card",
        cardType: ".m_third .m_third_card .m_third_card__tip span",
        cardBtn: ".m_third .m_third_card .m_third_card__btn .btn",
        cardFile: ".m_third .m_third_card .m_third_card__pic .form input",
        cardBack: ".m_third .m_third_card .m_third_card__pic.back",
        cardFrontTip: ".m_third .m_third_card .m_third_card__pic.front .tip",
        cardBackTip: ".m_third .m_third_card .m_third_card__pic.back .tip",
        verify: ".m_third .m_third_verify",
        success: ".m_third .m_third_success",
        successPassword: ".m_third .m_third_success input.info",
        successBtn: ".m_third .m_third_success .m_third_success__btn .btn",
        complete: ".m_third .m_third_complete",
        completeMT4Id: ".m_third .m_third_complete .m_third_complete__id span",
        completeBtn: ".m_third .m_third_complete .m_third_complete__btn .btn"
    };
    var eleIndex = {
        "0": "index",       // 未注册 -> 首页
        "1": "kyc",         // 已注册 -> kyc 页面
        "2": "userinfo",    // 已经kyc认证 -> 填写完邮箱国家页面
        "3": "card",        // 已经填写真实姓名和身份证号 -> 身份证图片页面
        "4": "userinfo",    // 审核拒绝 -> 填写完邮箱国家页面
        "5": "verify",      // 待审核 -> 审核中页面
        "6": "success",     // 审核通过 -> 审核成功，设置MT4密码页面
        "7": "complete",    // 已经开户 -> MT4 账号设置成功页面
        "8": "username",    // 已经填写完邮箱国家 -> 姓名、身份证号页面 (新增逻辑)
    };
    var kycInfo = {};
    var kycInfoTmp = {};
    var gender = "1";
    var cardCountry = undefined;    //所选国家，生成证件类型列表
    var cardType = {    //证件类型
        key: undefined,
        value: undefined
    };
    var cardBaseFile = {    //证件
        front: false,
        back: false,
    };
    var cardStatus = {      //证件上传状态
        front: false,
        back: false,
    };
    var step = 0;
    var bt=baidu.template;
    var mt4Id = '';
    var company = '';

    layer.open({type: 2, shadeClose: false});

    // 请求当前用户认证到哪一步
    setUserCookie();

    function setUserCookie () {
        var user_id = getUrlParam("user_id") || '';
        var phone = getUrlParam("phone") || '';
        var private_key = getUrlParam("private_key") || '';
        var action = getUrlParam("action") || '';
        var sign = getUrlParam("sign") || '';
        company = private_key;

        var expiresDate = new Date();
        expiresDate.setTime(expiresDate.getTime() + (30 * 60 * 1000));  // 30分钟过期
        
        $.cookie("third_user_id", user_id , { path: '/', domain: '.tigerwit.com', expires: expiresDate });
        $.cookie("third_phone", phone , { path: '/', domain: '.tigerwit.com', expires: expiresDate });
        $.cookie("private_key", private_key , { path: '/', domain: '.tigerwit.com', expires: expiresDate });
        $.cookie("action", action , { path: '/', domain: '.tigerwit.com', expires: expiresDate });
        $.cookie("sign", sign , { path: '/', domain: '.tigerwit.com', expires: expiresDate });

        // 需要去掉200体验金的三方：tubiaojia、juyoulicai
        if (private_key === 'tubiaojia' || private_key === 'juyoulicai') {
            $(ele.indexDollar200).css({display: 'none'});
        }

        setTimeout(function () {
            getUserStatus();
            getKycList();
            getCountries();

            laydate.render({
                elem: '#birth',
                lang: lang.curLang() === 'en' ? 'en' : 'cn'
            });
        }, 300);
    }

    function getUserStatus() {
        publicRequest('thirdGetStatus', 'GET').then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (!data) return;
            if (data.is_succ) {
                step = data.data.status > 5 ? 5 : data.data.status;
                $(ele.wrapper).addClass("active");
                goStepPage();
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
    // setTimeout(function () {
    //     layer.closeAll();
    //     // getKycList();
    //     // getCountries();
    //     step = 3;
    //     $(ele.wrapper).addClass("active");
    //     goStepPage();

    //     laydate.render({
    //         elem: '#birth',
    //         lang: lang.curLang() === 'en' ? 'en' : 'cn'
    //     });
    // }, 1000);
    
    $(ele.indexBtn).on("tap", function () {
        openH5AgmentModal(100402, function(resolve, e){
            layer.close(resolve.layIndex);
            layer.open({type: 2, shadeClose: false});

            publicRequest('thirdRegister', 'POST').then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = 1;
                    goStepPage();
                    // 神策统计
                    sa.track('New_Selectiontype', {
                        account_type: '真实账户'
                    });
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        });
        return false;
    });

    $(ele.kycBtn).on("tap", function (e) {
        e.preventDefault();
        // console.log(kycInfo);
        var next = true;
        $.each(kycInfo, function (index, value) {
            if (!value) {
                next = false;
            }
        });
        if (next) {
            layer.open({type: 2, shadeClose: false});

            publicRequest('thirdSetKyc', 'POST', kycInfo).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = 2;
                    goStepPage();
                    // 神策统计
                    sa.track('New_information');
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });

    function getKycList () {
        publicRequest('thirdGetKycList', 'GET').then(function (data) {
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                var kycList = {
                    data: data.data
                };
                var order = 1;
                // 添加序号
                $.each(kycList.data, function (index, value) {
                    kycInfo[value.name] = '';
                    if (value.type == 3) {
                        kycInfoTmp[value.name] = {};
                    }

                    value.title = order+'.'+value.title;
                    order++;
                });
                // console.log(kycList);
                //使用template模版
                var html=bt('template_kyc_info',kycList);
                //渲染
                $(".m_third_kyc__template").html(html);

                // kyc 设置基本信息
                $(ele.kycSelect).selectOrDie({
                    placeholder: lang.text('third.select'),
                    customClass: 'm_third_kyc__single-select',
                    onChange: function(e){
                        kycInfo[$(this).attr("data-name")] = $(this).val();
                    }
                });
                // 单选
                $(ele.kycInpRadio).find("label").on("tap", function (e) {
                    e.preventDefault();
                    var name = $(this).attr("data-name");
                    $(ele.kycInpRadio).find(".inp[data-name="+name+"]").removeClass("active");
                    $(this).find(".inp").addClass("active");
                    kycInfo[name] = $(this).find(".inp").attr("data-value");
                });
                // 多选
                $(ele.kycInpCheckbox).find("label").on("tap", function (e) {
                    e.preventDefault();
                    var inp = $(this).find(".inp");
                    kycInfo[inp.attr("data-name")] = '';
                    var arr = [];

                    if (inp.hasClass("active")) {
                        inp.removeClass("active");
                        kycInfoTmp[inp.attr("data-name")][inp.attr("data-value")] = false;
                    } else {
                        inp.addClass("active");
                        kycInfoTmp[inp.attr("data-name")][inp.attr("data-value")] = true;
                    }

                    $.each(kycInfoTmp[inp.attr("data-name")], function (index, value) {
                        if (value) {
                            arr.push(index);
                        }
                    });
                    kycInfo[inp.attr("data-name")] = arr.join(',');
                });
            }
        });
    }
    // userinfo
    $(ele.userinfoBtn).on("tap", function (e) {
        e.preventDefault();
        // console.log($(ele.userinfoEmail).val(), $(ele.userinfoCountry).val(), $(ele.userinfoCountry).attr("data-country"), $(ele.userinfoAddress).val())
        if ($(ele.userinfoEmail).val() && $(ele.userinfoCountry).val() && $(ele.userinfoAddress).val()) {
            publicRequest('thirdSetUserInfo', 'PUT', {
                email: $(ele.userinfoEmail).val(),
                world_code: $(ele.userinfoCountry).attr("data-country"),
                address: $(ele.userinfoAddress).val()
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    cardCountry = $(ele.userinfoCountry).attr("data-country");
                    step = 8;
                    initCardTypeInfo();
                    goStepPage();
                    // 神策统计
                    // sa.track('New_Realname');
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });

    //选择国家
    $(ele.userinfoSelect).on('change', function (e) {
        var op = $(this).find('option:selected');
        // console.log($(op).val(), $(op).text());
        if ($(op).val()) {
            $(ele.userinfoCountry).val($(op).text());
            $(ele.userinfoCountry).attr("data-country", $(op).val());
        } else {
            $(ele.userinfoCountry).val(undefined);
        }
    });

    // 获取国家、地区列表
    function getCountries () {
        publicRequest('thirdCountries', 'GET').then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                var countryList = {
                    data: data.data
                };
                //使用template模版
                var html=bt('template_country_info',countryList);
                //渲染
                $(".m_third_userinfo select").html(html);

                if (lang.curLang() != 'en') {
                    $(".m_third_userinfo select").find("option[value=CN]").first().attr("selected", true);
                    $(ele.userinfoCountry).val('中国');
                    $(ele.userinfoCountry).attr("data-country", "CN");
                }
            }
        });
    }
    // username
    $(ele.usernameBtn).on("tap", function (e) {
        e.preventDefault();
        // console.log($(ele.usernameBirth).val().replace(/-/g, ''))
        if ($(ele.usernameName).val() && $(ele.usernameCardType).val() && $(ele.usernameIdNo).val() && $(ele.usernameBirth).val()) {
            publicRequest('thirdSetIdNo', 'PUT', {
                real_name: $(ele.usernameName).val(),
                gender: gender,
                idcard_type: $(ele.usernameCardType).attr("data-type"),
                id_no: $(ele.usernameIdNo).val(),
                birth: $(ele.usernameBirth).val().replace(/-/g, '')
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    // 同步证件类型
                    cardType = {
                        key: $(ele.usernameCardType).val(),
                        value: $(ele.usernameCardType).attr("data-type")
                    };
                    step = 3;
                    initCardInfo();
                    goStepPage();
                    // 神策统计
                    sa.track('New_Realname');
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });
    // select gender
    $(ele.usernameGender).on("tap", function (e) {
        gender = $(this).attr("data-gender");
        $(ele.usernameGender).removeClass("active");
        $(this).addClass("active");
    });
    // select card type
    $(ele.usernameSelect).on('change', function (e) {
        var op = $(this).find('option:selected');
        // console.log($(op).val(), $(op).text());
        if ($(op).val()) {
            $(ele.usernameCardType).val($(op).text());
            $(ele.usernameCardType).attr("data-type", $(op).val());
        } else {
            $(ele.usernameCardType).val(undefined);
        }
    });
    // 初始化证件类型
    function initCardTypeInfo () {
        var cardType = {
            data: {
                isCN: cardCountry === 'CN' ? true : false
            }
        };
        //使用template模版
        var html=bt('template_card_info',cardType);
        //渲染
        $(".m_third_username select").html(html);
    }
    // card
    $(ele.cardFile).on('change', function(e) {
        // console.log(e.target.files[0]);
        var file = e.target.files[0];
        var pageClass = "."+$(e.target).attr("data-page");
        preview(file, pageClass);
        previewBase64(file, $(e.target).attr("data-page"));
    });
    $(ele.cardBtn).on("tap", function (e) {
        e.preventDefault();
        cardStatus = {
            front: false,
            back: false,
        };

        if (cardType.value != '0') {  //只需传一张
            cardBaseFile.back = true;
            cardStatus.back = true;
        }
        // console.log($(ele.cardFile)[0].value, $(ele.cardFile)[1].value);
        // if ($(ele.cardFile)[0].value && $(ele.cardFile)[1].value) {
        if (cardBaseFile.front && cardBaseFile.back) {
            layer.open({type: 2, shadeClose: false});

            uploadCard('front');
            if (cardType.value == '0') {  //只需传一张
                uploadCard('back');
            }
            // console.log(cardBaseFile.front, cardBaseFile.back);
            
        } else {
            layer.open({
                content: lang.text('third.uploadCard'),
                skin: 'msg',
                time: 2
            });
        }
    });
    // 初始化证件页面
    function initCardInfo () {
        $(ele.cardType).html(cardType.key);

        if (cardType.value == '0') {
            $(ele.cardFrontTip).html(lang.text('third.frontCardTip'));
            $(ele.cardBackTip).html(lang.text('third.backCardTip'));
        } else {
            $(ele.cardBack).css("display", "none");
            $(ele.cardFrontTip).html(lang.text('third.cardTip'));
        }
    }

    // set Mt4 password
    $(ele.successBtn).on("tap", function (e) {
        e.preventDefault();
        var val = $(ele.successPassword).val();

        if (val) {
            publicRequest('thirdSetPassword', 'POST', {
                password: val
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = 7;
                    mt4Id = data.data.mt4_id;
                    $(ele.completeMT4Id).html(mt4Id);
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: '请设置MT4密码',
                skin: 'msg',
                time: 2
            });
        }
    });

    $(ele.completeBtn).on("tap", function (e) {
        e.preventDefault();
        // var iframe = document.createElement('iframe');
        // iframe.style.display = 'none';
        // iframe.src = window.location.protocol+'//'+window.location.hostname+'/third/complete/openAccount';
        // document.body.appendChild(iframe);
        var r_href = window.location.protocol+'//'+window.location.hostname+'/third/complete/openAccount';
        window.location = r_href;
    });

    function uploadCard (type) {
        publicRequest('thirdUploadIdCard', 'POST', {
            face: type,
            file: cardBaseFile[type].src.split(',')[1]
        }).then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (!data) {
                // layer.closeAll();
                return;
            }
            if (data.is_succ) {
                cardStatus[type] = true;

                if (cardStatus.front && cardStatus.back) {
                    layer.closeAll();
                    step = 5;
                    goStepPage();
                    // 神策统计
                    sa.track('New_uploadcard');
                }
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }

    function preview(file, pageClass) {
        var img = new Image(), url = img.src = URL.createObjectURL(file);
        var $img = $(img);
        var $imgWrapper = $('.m_third_card__pic').find(pageClass);
        img.onload = function() {
            URL.revokeObjectURL(url);
            
            if (img.width < img.height) {
                // $img.rotate(90);
                // $img.css("transform","rotate(90deg)");
                $img.width($imgWrapper.width());
                $img.height($imgWrapper.height());
                var x = $imgWrapper.width() / $img.height();
                var y = $imgWrapper.height() / $img.width();
                // console.log(x, y);
                $img.css("transform", "rotate(90deg) scale("+y+","+x+")");
            }
            $imgWrapper.empty().append($img);
        };
    }

    // function previewBase64(file, face) {
    //     var mpImg = new MegaPixImage(file);
    //     cardBaseFile[face]=new Image();
    //     mpImg.render(cardBaseFile[face], { maxWidth: 640, maxHeight: 640, quality: 0.5 });
    // }
    function previewBase64(file, face) {
        console.log(file.size);
        var quality = 1;
        if (file.size > 5*1024*1024) {  //大于 5M 压缩
            quality = 0.5
        }
        var reader = new FileReader();

        reader.onload = function(e) {
            var img = new Image();
            img.src = e.target.result;

            $(img).on('load', function (e) {
                cardBaseFile[face]=new Image();
                renderImage(cardBaseFile[face], img, { maxWidth: 960, maxHeight: 960, quality: quality });
            
            });
            
        };
        reader.readAsDataURL(file);
    }

    function renderImage (target, img, options) {
        options = options || {};
        var imgWidth = img.naturalWidth, imgHeight = img.naturalHeight,
            width = options.width, height = options.height,
            maxWidth = options.maxWidth, maxHeight = options.maxHeight,
            doSquash = !this.blob || this.blob.type === 'image/jpeg';
        if (width && !height) {
            height = (imgHeight * width / imgWidth) << 0;
        } else if (height && !width) {
            width = (imgWidth * height / imgHeight) << 0;
        } else {
            width = imgWidth;
            height = imgHeight;
        }
        
        if (maxWidth && width > maxWidth) {
            width = maxWidth;
            height = (imgHeight * width / imgWidth) << 0;
        }
        if (maxHeight && height > maxHeight) {
            height = maxHeight;
            width = (imgWidth * height / imgHeight) << 0;
        }
        var opt = { width : width, height : height };
        for (var k in options) opt[k] = options[k];

        target.src = renderImageToDataURL(img, opt);
    }
    function renderImageToDataURL (img, options) {
        var width = options.width, height = options.height;
        var canvas = document.createElement("canvas"); 
        var iw = img.naturalWidth, ih = img.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.save();
        canvas.width = width;
        canvas.height = height;

        var d = 1024; // size of tiling canvas
        var tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = tmpCanvas.height = d;
        var tmpCtx = tmpCanvas.getContext('2d');
        var dw = Math.ceil(d * width / iw);
        var dh = Math.ceil(d * height / ih);
        var sy = 0;
        var dy = 0;
        
        while (sy < ih) {
            var sx = 0;
            var dx = 0;
            while (sx < iw) {
                tmpCtx.clearRect(0, 0, d, d);
                tmpCtx.drawImage(img, -sx, -sy);
                ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
                sx += d;
                dx += dw;
            }
            sy += d;
            dy += dh;
        }

        ctx.restore();
        tmpCanvas = tmpCtx = null;

        return canvas.toDataURL("image/jpeg", options.quality || 0.5);
    }

    function goStepPage () {

        $.each(eleIndex, function (index, value) {
            $(ele[eleIndex[index]]).removeClass("active");
        });
        $(ele.wrapper).removeClass("bgm");
        $(ele.navbarStep2).removeClass("active");
        $(ele.navbarStep3).removeClass("active");
        $(ele.navbarStep4).removeClass("active");
        $(ele[eleIndex[step]]).addClass("active");

        if (step === 0) {
            $(ele.wrapper).addClass("bgm");
        }
        if (step === 1) {
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 2) {
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 3) {
            var userAgent = navigator.userAgent.toLowerCase();
            var index = userAgent.indexOf("android");
            if(index >= 0){  
                var androidVersion = userAgent.slice(index+8, index+11); 
                // console.log(userAgent);  
                // console.log(androidVersion);
                if (androidVersion <= 4.4) {
                    alert(lang.text('third.systemTip'));
                }
            }  
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
        }
        if (step === 4) {
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 5) {
            $(ele.wrapper).addClass("bgm");
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
            $(ele.navbarStep4).addClass("active");
        }
        if (step === 6) {
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
            $(ele.navbarStep4).addClass("active");
        }
        if (step === 7) {
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
            $(ele.navbarStep4).addClass("active");
        }
        if (step === 8) {
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
        }
    }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }
});