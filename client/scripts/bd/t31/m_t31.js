;(function () {
    'use strict';

    var isActive = false;
    var $btn = $(".m_t31__attention .btn");
    var $detail = $(".m_t31__attention .detail");

    var scrollHeight = $(".m_t31__rebox").offset().top;

    $btn.click(function () {
        
        isActive ? $detail.removeClass('active') : $detail.addClass('active');
        isActive = ! isActive;
    });

    $(document).scroll(function () {

        if ($(document).scrollTop() >= scrollHeight) {
            $(".m_t31__rebox").addClass("active");
        } else {
            $(".m_t31__rebox").removeClass("active");
        }
    });
})();