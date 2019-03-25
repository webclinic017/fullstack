;(function () {
  var page = "home";
  var links = {
    global: ["https://go.onelink.me/app/bf7bd611", "https://go.onelink.me/app/9bb7f7b2"],
    uk: ["https://go.onelink.me/app/3f3ad06f", "https://go.onelink.me/app/7130d5d9"]
  };
  changePage();
  $(".bd_lfc img[data-name=diff]."+pageInfo).css("display", "inline-block");
  $(".bd_lfc a[data-link=ios]").attr("href", links[pageInfo][0]);
  $(".bd_lfc a[data-link=android]").attr("href", links[pageInfo][1]);
  $(".bd_lfc_footer p."+pageInfo).css("display", "block");
  $(".bd_lfc *[data-page="+pageInfo+"]").css("display", "block");

  $(".bd_lfc_navbar li").on("click", function () {
    $(".bd_lfc_navbar li").removeClass("active");
    $(this).addClass("active");
    page = $(this).attr("data-page");
    changePage();
  });

  function changePage () {
    if (page === 'about') {
      $(".bd_lfc_navbar").removeClass("white");
      $(".bd_lfc_navbar").addClass("black");
    } else {
      $(".bd_lfc_navbar").removeClass("black");
      $(".bd_lfc_navbar").addClass("white");
    }
    $(".bd_lfc_page_wrapper").removeClass("active");
    $(".bd_lfc_page_wrapper."+page).addClass("active");
  }
})();