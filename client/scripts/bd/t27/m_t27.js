$(function () {
  $("#reg_now").on('touchend', function () {
    $('html, body').animate({scrollTop: 222}, 'fast');
    setTimeout(function () {
      $("#username").focus();
    }, 100);
  });
  function tigerwitWeb(isLogin) {
    /*已经登录*/
    if (isLogin == '1') {
      callNative({
        type: 'deposit'
      });
    } else {
      $('html, body').animate({scrollTop: 200}, 'fast');
      $("#username").focus();
    }
  }
  window.tigerwitWeb = tigerwitWeb;  
  $("#deposit_now").on('touchend', function () {
    callNative({
      type: "checkLogin"
    });

  });
});
