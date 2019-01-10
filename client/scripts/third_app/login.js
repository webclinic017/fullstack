(function () {
  var isReady = true;
  $("#third_app_login_btn").on("tap", loginMt4);
  
  function loginMt4 () {
    if (!isReady) return;
    if (!$("#third_app_login_account").val() || !$("#third_app_login_password").val()) {
      alert(lang.text("thirdH5.enterNumPassword"));
    }
    isReady = false;
    $("#third_app_login_btn").css({opacity: 0.5});
    publicRequest('loginThird', 'POST', {
      mt4: $("#third_app_login_account").val(),
      password: $("#third_app_login_password").val()
    }).then(function (data) {
      isReady = true;
      $("#third_app_login_btn").css({opacity: 1});
      // console.log(data);
      if (!data) return;
      if (data.is_succ) {
        // console.log(data);
        window.location.href="/m/third/asset?token="+data.data.token;
      } else {
        alert(data.message);
      }
    });
    return false;
  }
})();