jQuery(function($){
	var $historyTab = $(".regular_detail_history_tab").find(".tab__item a");
    var $historyImg = $(".regular_detail_history_tab").find(".regular_detail_history_tab__img");
    var flagIndex = {};
    var index,
        name,
        phone;
    var overHidden = false;

    for (var i=0; i<$historyTab.length; i++) {
        flagIndex[i] = true;
    }

    $historyTab.on('click', function () {
        index = $(this).parent().index();
        if (flagIndex[index]) {
            flagIndex[index] = false;
            $(this).find(".fa-angle-up").removeClass('active');
            $(this).find(".fa-angle-down").addClass('active');
            $(this).parent().find(".regular_detail_history_tab__img").addClass('active');
            $(this).parent().addClass("no-border");
        } else {
            flagIndex[index] = true;
            $(this).find(".fa-angle-down").removeClass('active');
            $(this).find(".fa-angle-up").addClass('active');
            $(this).parent().find(".regular_detail_history_tab__img").removeClass('active');
            $(this).parent().removeClass("no-border");
        }
        
    });

    $(".native_open_img img").on('click', function () {
        callNative({
            type: "openImage",
            url : $(this).attr("src")
        });
    });

    var $tabItem = $(".regular_detail_tab .tab__item").find("a");

    $tabItem.on('click', function  () {
        callNative({
            type: "openUrl",
            url : $(this).get(0).href
        });

        return false;
    });

    var $body = $("body"); 
    var $regularBtn = $("#regular_detail_btn");
    var $modalBackdrop = $(".regular_modal__backdrop");
    var $modalWrapperLogin = $(".regular_modal__wrapper");
    var $modalBtn = $(".modal_btn .btn");
    var $closeModalBtn = $(".regular_modal__content .regular-close span");
    var $username = $(".regular_detail_form__input.username");
    var $phone = $(".regular_detail_form__input.phone");
    var $modalCont = $(".regular_modal__content"),
        $modalInfo = $(".regular_modal__content.info"),
        $modalSucc = $(".regular_modal__content.success"),
        $modalFail = $(".regular_modal__content.fail");

    $('body').on('touchmove', function (event) {
        if (overHidden) {
            event.preventDefault();
        }
    });

    $regularBtn.on('click', function () {
        // callNative({
        //   type:"checkLogin"
        // });
        openMdl();
    });

    $closeModalBtn.on('click', function () {
        closeMdl();
    });
    $modalBackdrop.on('click', function () {
        closeMdl();
    });

    $modalBtn.on('click', function () {
        submitForm();
    });

    // native 调用方法
    // window.tigerwitWeb = function (sAction) {

    //     openMdl(sAction);
    // };

    function openMdl () {
        $modalCont.removeClass("active");
        $modalInfo.addClass("active");

        $body.addClass("modal-open");
        $modalBackdrop.addClass("active");
        $modalWrapperLogin.addClass("active");
        overHidden = true;

        setTimeout(function () {
            $modalWrapperLogin.addClass("in");
        }, 1);

        $username.val(name);
        $phone.val(phone);
    }

    function closeMdl () {
        $modalWrapperLogin.removeClass("in");

        setTimeout(function () {
            $body.removeClass("modal-open");
            $modalBackdrop.removeClass("active");
            $modalWrapperLogin.removeClass("active");
            overHidden = false;
        }, 350);
    }

    function submitForm () {
        if ($username.val() && $phone.val()) {
            setMessage();
        } else {
            alert("姓名和手机号不能为空");
        }
    }

    function setMessage () {
        $.post('/action/public/v3/closed_fund_leads', {
            phone: $phone.val(),
            title: $(".regular_detail").attr("data-title"),
            username: $username.val()
        }).then(function (data) {
            // console.info(data);
            if (data.error_code == 0) {
                $modalCont.removeClass("active");
                $modalSucc.addClass("active");
            } else {
                $modalCont.removeClass("active");
                $modalFail.addClass("active");
            }
        });
    }

    publicRequest('getUserInfo', 'GET').then(function (data) {
        if (!data) return;
        // console.log(data);
        if (data.is_succ) {
            name = data.data.realname;
            phone = data.data.phone;
        }
    });

    // $.get('/action/public/v4/get_info?type=Profile').then(function(result){
    //     result = JSON.parse(result);
    //     result = result.data;
    //     name = result.realname;
    //     phone = result.phone;
    // }, function (data) {
    //     console.info(data);
    // });

    var $agreementBtn = $(".checkbox-wrapper a");

    $agreementBtn.on('click', function () {
        callNative({
            type: "openUrl",
            url : $(this).get(0).href + '?name=' + encodeURIComponent($username.val())
        });

        return false;
    });
});