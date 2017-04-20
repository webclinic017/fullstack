$(document).ready(function () {
    var ele = {
        wrapper: ".m_third",
        navbar: ".m_third .m_third_navbar",
        navbarStep2: ".m_third .m_third_navbar .m_third_navbar__progress li.num1",
        navbarStep3: ".m_third .m_third_navbar .m_third_navbar__progress li.num2",
        navbarStep4: ".m_third .m_third_navbar .m_third_navbar__progress li.num3",
        index: ".m_third .m_third_index",
        indexBtn: ".m_third .m_third_index .m_third_index__btn .btn",
        kyc: ".m_third .m_third_kyc",
        kycSelect: ".m_third .m_third_kyc .m_third_kyc__single select",
        kycInpRadio: ".m_third .m_third_kyc .m_third_kyc__single .m_third_kyc__single-list.radio",
        kycInpCheckbox: ".m_third .m_third_kyc .m_third_kyc__single .m_third_kyc__single-list.checkbox",
        kycBtn: ".m_third .m_third_kyc .m_third_kyc__btn .btn",
        userinfo: ".m_third .m_third_userinfo",
        userinfoBtn: ".m_third .m_third_userinfo .m_third_userinfo__btn .btn",
        card: ".m_third .m_third_card",
        cardFile: ".m_third .m_third_card .m_third_card__pic .form input",
        verify: ".m_third .m_third_verify",
        success: ".m_third .m_third_success",
        complete: ".m_third .m_third_complete"
    };
    var eleIndex = {
        "0": "index",       // 首页
        "1": "kyc",         // kyc 页面
        "2": "userinfo",    // 姓名、身份证号页面
        "3": "card",        // 身份证图片页面
        "4": "verify",      // 审核中
        "5": "success",     // 审核成功，设置MT4密码页面
        "6": "index",       // 审核失败，暂时回到首页
        "7": "complete",    // MT4 帐号设置成功页面
    };
    var kycInfo = {
        industry: '',
        income: '',
        interests_exp: '',
        trading_market: [],
        trading_target: [],
        risk: ''
    };
    var kycInfoTmp = {
        trading_market: {},
        trading_target: {}
    };
    var step = 0;

    layer.open({type: 2, shadeClose: false});

    // 请求当前用户认证到哪一步
    setTimeout(function () {
        layer.closeAll();
        step = 3;
        $(ele.wrapper).addClass("active");
        goStepPage();
    }, 1000);
    
    $(ele.indexBtn).on("tap", function () {
        step = 1;
        goStepPage();
    });

    // kyc 设置基本信息
    $(ele.kycSelect).selectOrDie({
        placeholder: '请选择',
        customClass: 'm_third_kyc__single-select',
        onChange: function(){
            kycInfo.industry = $(this).val();
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
        kycInfo[inp.attr("data-name")] = [];

        if (inp.hasClass("active")) {
            inp.removeClass("active");
            kycInfoTmp[inp.attr("data-name")][inp.attr("data-value")] = false;
        } else {
            inp.addClass("active");
            kycInfoTmp[inp.attr("data-name")][inp.attr("data-value")] = true;
        }

        $.each(kycInfoTmp[inp.attr("data-name")], function (index, value) {
            if (value) {
                kycInfo[inp.attr("data-name")].push(index);
            }
        });
    });
    $(ele.kycBtn).on("tap", function (e) {
        e.preventDefault();
        // console.log(kycInfo);
        var next = true;
        $.each(kycInfo, function (index, value) {

            if ((typeof value === 'string') && !value) {
                next = false;
            } else if (value.length === 0) {
                next = false;
            }
        });
        if (next) {
            layer.open({type: 2, shadeClose: false});

            setTimeout(function () {
                layer.closeAll();
                step = 2;
                goStepPage();
            }, 1000);
        } else {
            layer.open({
                content: '请将信息填写完整',
                skin: 'msg',
                time: 2
            });
        }
    });
    // userinfo
    $(ele.userinfoBtn).on("tap", function (e) {
        e.preventDefault();

        if (true) {
            layer.open({type: 2, shadeClose: false});

            setTimeout(function () {
                layer.closeAll();
                step = 3;
                goStepPage();
            }, 1000);
        } else {
            layer.open({
                content: '信息填写有误',
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
    });

    function preview(file, pageClass) {
        var img = new Image(), url = img.src = URL.createObjectURL(file);
        var $img = $(img);
        var $imgWrapper = $('.m_third_card__pic').find(pageClass);
        img.onload = function() {
            URL.revokeObjectURL(url);
            
                alert("width"+img.width);
                alert("heigh"+img.height);
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
    // function preview(file, pageClass) {
    //     var reader = new FileReader();
    //     var $imgWrapper = $('.m_third_card__pic').find(pageClass);
    //     reader.onload = function(e) {
    //         // console.log(e.target);
    //         var $img = $('<img>').attr("src", e.target.result);
    //         $imgWrapper.empty().append($img);
    //     }
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
            $(ele.navbarStep2).addClass("active");
        }
        if (step === 4) {
            $(ele.wrapper).addClass("bgm");
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
        }
        if (step === 5) {
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
            $(ele.navbarStep4).addClass("active");
        }
        if (step === 6) {
            $(ele.wrapper).addClass("bgm");
        }
        if (step === 7) {
            $(ele.navbarStep2).addClass("active");
            $(ele.navbarStep3).addClass("active");
            $(ele.navbarStep4).addClass("active");
        }
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