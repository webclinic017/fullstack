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
});