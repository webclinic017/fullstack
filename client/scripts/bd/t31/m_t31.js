;(function () {
    'use strict';

    var isActive = false;
    var $btn = $(".m_t31__attention .btn");
    var $detail = $("#attention_detail");
    $btn.on("touchend",function () {
        console.log($detail[0].style.display == "block");
        $detail[0].style.display == "block"
            ? $detail.stop().slideUp(250)
            : $detail.stop().slideDown(300);
        return false;
    });
})();