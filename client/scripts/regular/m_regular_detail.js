jQuery(function($){
	var $historyTab = $(".regular_detail_history_tab").find(".tab__item a");
    var $historyImg = $(".regular_detail_history_tab").find(".regular_detail_history_tab__img");
    var flagIndex = {};
    var index;

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
    var $modalBtn = $(".modal_btn");

    $regularBtn.on('click', function () {
        callNative({
          type:"checkLogin"
        });
    });

    $modalBtn.on('click', function () {
        $body.removeClass("modal-open");
        $modalBackdrop.removeClass("active");
        $modalWrapperLogin.removeClass("active");
    });

    // native 调用方法
    window.tigerwitWeb = function (sAction) {

        openMdl(sAction);
    };

    function openMdl (login) {

        if (login == '1') {
            $body.addClass("modal-open");
            $modalBackdrop.addClass("active");
            $modalWrapperLogin.addClass("active");
        }
    }
});