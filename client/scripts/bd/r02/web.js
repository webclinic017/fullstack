;(function () {
  var $code = $(".web_r02 .code_box");

  if (window.location.origin.indexOf("cndemo.tigerwit.com") != -1) {
      $code.find(".demo").addClass("active");
  } else {
      $code.find(".www").addClass("active");
  }
})();