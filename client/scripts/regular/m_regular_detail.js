jQuery(function($){
	var $historyTab = $(".regular_detail_history_tab").find(".tab__item a");
    var $historyImg = $(".regular_detail_history_tab").find(".regular_detail_history_tab__img");
    var flagIndex = {};
    var index;

    for (var i=0; i<$historyTab.length; i++) {
        flagIndex[i] = true;
    }

    $historyTab.click(function () {
        index = $(this).parent().index();
        if (flagIndex[index]) {
            flagIndex[index] = false;
            $(this).find(".fa-angle-up").css("display", "none");
            $(this).find(".fa-angle-down").css("display", "block");
            $(this).parent().find(".regular_detail_history_tab__img").css("display", "block");
        } else {
            flagIndex[index] = true;
            $(this).find(".fa-angle-down").css("display", "none");
            $(this).find(".fa-angle-up").css("display", "block");
            $(this).parent().find(".regular_detail_history_tab__img").css("display", "none");
        }
        
    });

    var $body = $("body"); 
    var $regularBtn = $("#regular_detail_btn");
    var $modalBackdrop = $(".regular_modal__backdrop");
    var $modalWrapperLogin = $(".regular_modal__wrapper.is_login");
    var $modalWrapperNotLogin = $(".regular_modal__wrapper.not_login");
    var $modalBtn = $(".modal_btn");

    $regularBtn.click(function () {
        // tigerwitWeb("{\"type\": 1}");
        callNative({
          type:"checkLogin"
        });
    });

    $modalBtn.click(function () {
        $body.removeClass("modal-open");
        $modalBackdrop.css("display", "none");
        $modalWrapperLogin.css("display", "none");
        $modalWrapperNotLogin.css("display", "none");
    });

    // native 调用方法
    window.tigerwitWeb = function (oAction) {
        var login = JSON.parse(oAction).type;

        openMdl(login);
    }

    function openMdl (login) {
        $body.addClass("modal-open");
        $modalBackdrop.css("display", "block");

        if (login) {
            $modalWrapperLogin.css("display", "block");
        } else {
            $modalWrapperNotLogin.css("display", "block");
        }
    }
});