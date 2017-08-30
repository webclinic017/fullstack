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
        userinfoName: ".m_third .m_third_userinfo .realname",
        userinfoIdNo: ".m_third .m_third_userinfo .id_no",
        userinfoEmail: ".m_third .m_third_userinfo .email",
        userinfoBtn: ".m_third .m_third_userinfo .m_third_userinfo__btn .btn",
        card: ".m_third .m_third_card",
        cardBtn: ".m_third .m_third_card .m_third_card__btn .btn",
        cardFile: ".m_third .m_third_card .m_third_card__pic .form input",
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
        "2": "userinfo",    // 已经kyc认证 -> 姓名、身份证号页面
        "3": "card",        // 已经填写真实姓名和身份证号 -> 身份证图片页面
        "4": "userinfo",    // 审核拒绝 -> 姓名、身份证号页面
        "5": "verify",      // 待审核 -> 审核中页面
        "6": "success",     // 审核通过 -> 审核成功，设置MT4密码页面
        "7": "complete",    // 已经开户 -> MT4 帐号设置成功页面
    };
    var kycInfo = {};
    var kycInfoTmp = {};
    var cardBaseFile = {
        front: false,
        back: false,
    };
    var cardStatus = {
        front: false,
        back: false,
    };
    var step = 0;
    var bt=baidu.template;
    var mt4Id = '';

    layer.open({type: 2, shadeClose: false});

    // 请求当前用户认证到哪一步
    setUserCookie();

    function setUserCookie () {
        var user_id = getUrlParam("user_id") || '';
        var phone = getUrlParam("phone") || '';
        var private_key = getUrlParam("private_key") || '';
        var action = getUrlParam("action") || '';
        var sign = getUrlParam("sign") || '';

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

        getUserStatus();
        getKycList();
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
    //     step = 6;
    //     $(ele.wrapper).addClass("active");
    //     goStepPage();
    // }, 1000);
    
    $(ele.indexBtn).on("tap", function () {
        layer.open({type: 2, shadeClose: false});

        publicRequest('thirdRegister', 'POST').then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (!data) return;
            if (data.is_succ) {
                step = 1;
                goStepPage();
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
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
                content: '请将信息填写完整',
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
                    placeholder: '请选择',
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

        if ($(ele.userinfoName).val() && $(ele.userinfoIdNo).val() && $(ele.userinfoEmail).val()) {
            publicRequest('thirdSetUserInfo', 'PUT', {
                email: $(ele.userinfoEmail).val(),
                realname: $(ele.userinfoName).val(),
                id_no: $(ele.userinfoIdNo).val()
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = 3;
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
                content: '请填写完整信息',
                skin: 'msg',
                time: 2
            });
        }
    });
    // card
    $(ele.cardFile).on('change', function(e) {
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
        // console.log($(ele.cardFile)[0].value, $(ele.cardFile)[1].value);
        // if ($(ele.cardFile)[0].value && $(ele.cardFile)[1].value) {
        if (cardBaseFile.front && cardBaseFile.back) {
            layer.open({type: 2, shadeClose: false});

            uploadCard('front');
            uploadCard('back');

            // var oFormFront = new FormData($(".m_third_card__pic .form" )[0]);
            // var oFormBack = new FormData($(".m_third_card__pic .form" )[1]);
            // oFormFront.append("face", "front");
            // oFormBack.append("face", "back");
            // uploadCard('front', oFormFront);
            // uploadCard('back', oFormBack);
        } else {
            layer.open({
                content: '请上传身份证',
                skin: 'msg',
                time: 2
            });
        }
    });

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

    // function uploadCard (type, oForm) {
    //     publicUploadFile('thirdUploadIdCard', 'PUT', oForm).then(function (data) {
    //         // console.log(data);
    //         layer.closeAll();
    //         if (!data) return;
    //         if (data.is_succ) {
    //             cardStatus[type] = true;

    //             if (cardStatus.front && cardStatus.back) {
    //                 layer.closeAll();
    //                 step = 5;
    //                 goStepPage();
    //             }
    //         } else {
    //             layer.closeAll();
    //             layer.open({
    //                 content: data.message,
    //                 skin: 'msg',
    //                 time: 2
    //             });
    //         }
    //     });
    // }
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

    function previewBase64(file, face) {
        var mpImg = new MegaPixImage(file);
        cardBaseFile[face]=new Image();
        mpImg.render(cardBaseFile[face], { maxWidth: 640, maxHeight: 640, quality: 0.5 });

    }
    // function previewBase64(file, face) {
    //     var reader = new FileReader();
    //     console.log(file.size);
    //     var scale = 1;
    //     var maxSize = 2*1024*1024;

    //     if (file.size > maxSize) {
    //         scale = Math.ceil(file.size/maxSize);
    //         console.log("to scale "+ scale);
    //     }

    //     reader.onload = function(e) {
    //         var img = new Image();
    //         img.src = e.target.result;
            
    //         $(img).on('load', function (e) {
    //             var canvas = document.createElement("canvas");
    //             canvas.width=img.width/scale;
    //             canvas.height=img.height/scale;
    //             var ctx = canvas.getContext('2d');
    //             console.log(img.width);
    //             console.log(img.height);
    //             ctx.drawImage(img,
    //                 0,//sourceX,
    //                 0,//sourceY,
    //                 img.width/scale,//sourceWidth,
    //                 img.height/scale//sourceHeight
    //             );

    //             var base64str=canvas.toDataURL("image/png");
    //             cardBaseFile[face] = base64str.split(',')[1];
    //         });
            
    //     };
    //     reader.readAsDataURL(file);
    // }

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
                    alert("您当前的手机版本不支持图片上传功能，请升级手机系统或更换手机。");
                }
            }  
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 4) {
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 5) {
            $(ele.wrapper).addClass("bgm");
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
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
    }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }



    // var $inp = $(".m_third_verify__test input");

    //  function preview1(file) {
    //     var img = new Image(), url = img.src = URL.createObjectURL(file)
    //     var $img = $(img)
    //     img.onload = function() {
    //         URL.revokeObjectURL(url)
    //         $('.m_third_verify__test-pic').empty().append($img)
    //     };
    // }
    // function preview2(file) {
    //     var reader = new FileReader()
    //     reader.onload = function(e) {
    //         console.log(e.target);
    //         var $img = $('<img>').attr("src", e.target.result)
    //         $('.m_third_verify__test-pic').empty().append($img)
    //     }
    //     reader.readAsDataURL(file)
    // }

    // $inp.on('change', function(e) {
    //     var file = e.target.files[0];
    //     preview2(file);
    // });



//     var origin = $.cookie("access_origin2") || '';
//     var token = $.cookie("token") || '';

//     $(".m_third_verify__btn").on("click", function () {
//         var oMyForm = new FormData($(".m_third_verify__test .form" )[0]);
//         // var file = $inp[0];

//         oMyForm.append("face", "front");
//         // oMyForm.append("file", file);
//         // console.log(oMyForm.get("face"));
//         // console.log(oMyForm.get("file"));

//         $.ajax({
//             url: origin+'/user/upload_id_card?token='+token,
//             type: 'POST',
//             xhrFields: {
//                 withCredentials: true
// 　　　　　　  },
//             data: oMyForm,
//             processData: false,
//             contentType: false,
//             success: function (data) {
//                 console.log(data);
//                 alert(1);
//             },
//             error: function (err) {
//                 console.log(err);
//                 alert(2);
//             }
//         });
//     });

});