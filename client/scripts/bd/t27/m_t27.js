$(function(){
  $("#reg_now").on('touchend',function(){
    $("#username").focus();
  });
  $("#deposit_now").on('touchend',function(){
    callNative({
      type:"checkLogin"
    });
    function tigerwitWeb(isLogin){
      /*已经登录*/
      if(isLogin === '1'){
        callNative({
          type:'deposit'
        });
      } else {
        $("#username").focus();
      }
    }
  });
});
