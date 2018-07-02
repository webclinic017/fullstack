;(function () {
  var dHeight = $(document).height();
  var wHeight = $(window).height();
  // console.log(wHeight,dHeight);

  $(window).scroll(function () {
    if ($(window).scrollTop() >= dHeight-wHeight) {
      $(".m_t42__float_box").css("display", "none");
    } else {
      $(".m_t42__float_box").css("display", "block");
    }
  });
  /*页面按钮事件*/
  $(document.body).on("tap", function (e) {
    var action = $(e.target).attr("data-action");
    var targetClass = $(e.target).attr("class");
    if (targetClass == "layui-m-layershade") {
        layer.closeAll();
    }
    if ((targetClass == "rule_close") || (targetClass == "fa fa-times")) {
        layer.closeAll();
        return false;
    }
    if (action == "matters") {
        setTimeout(function () {
            openLay("#layer_contentBox")
        }, 10)

        return false;
    }
    if (action == "rule1") {
        setTimeout(function () {
            openLay("#layer_contentRule1")
        }, 10)

        return false;
    }
    if (action == "rule2") {
        setTimeout(function () {
            openLay("#layer_contentRule2")
        }, 10)

        return false;
    }
  });

  function openLay(which) {
    layer.open({
        shadeClose: true,
        content: $(which).html(),
        style: 'padding:0;width:75%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
    });
    $('.layui-m-layercont').css('padding', 0)
  }
})();