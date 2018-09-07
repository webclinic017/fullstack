;(function () {
  var dHeight = $(document).height();
  var wHeight = $(window).height();
  // console.log(wHeight,dHeight);

  $(window).scroll(function () {
    if ($(window).scrollTop() >= dHeight-wHeight) {
      $(".m_global_t35__float_box").css("display", "none");
    } else {
      $(".m_global_t35__float_box").css("display", "block");
    }
  });

  $("#m_global_t35_success_rewrite").on("click", function () {
    $("#m_global_t35_success").removeClass("active");
    $("#m_global_t35").addClass("active");
  });

  $(".m_global_t35_success__download span").on("click", function () {
    if (navigator.userAgent.toLowerCase().match(/android/)) {
      window.location.href = "https://play.google.com/store/apps/details?id=com.tigerwit.forex";
    } else {
      window.location.href = "https://itunes.apple.com/us/app/tigerwit/id1091437876?l=zh&ls=1&mt=8";
    }

    return false;
  });
})();