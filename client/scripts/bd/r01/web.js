;(function () {
    var $qrcode = $(".bd_r01 .bd_r01__qrcode");

    if (window.location.origin.indexOf("www.tigerwit.com") != -1) {
        $qrcode.find(".www").addClass("active");
    } else {
        $qrcode.find(".demo").addClass("active");
    }
})();