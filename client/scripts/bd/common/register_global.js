$(document).ready(function () {
  var oReg = {
    email: /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  };
  var sendInfo = {
    count: 60,
    unable: false
  };

  /*获取查询字段*/
  function getSearch() {
    var url = location.href;
    /*获取url中"?"符后的字串*/
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.split('?')[1];
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
  }
  function getDomain() {
    var domain = location.hostname.match(/\.\w+\.com/) ? location.hostname.match(/\.\w+\.com/)[0] : '.tigerwit.com';
    // console.log(url.match(/\.\w+\.com/)[0]);
    return domain;
  }

  oReg.search_arr = getSearch();

  /*获取lp*/
  if (!oReg.search_arr.lp) {
      oReg.search_arr.lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();
  }

  /*电话*/
  if (oReg.search_arr.email) {
      $("#email").val(oReg.search_arr.email)
  }
  $("#submit_form").on("click", toRegister);
  $("#verify_code_btn").on("click", sendCode);

  /*神策统计*/
  $("#email").on("focus", function (e) {
    // console.log(e);
    sa.track('inp_email');
  });
  $("#verify_code").on("focus", function (e) {
    // console.log(e);
    sa.track('inp_email_code');
  });
  
  //check email
  function checkEmail () {
    if (oReg.email.test($("#email").val())) {
      return true;
    } else {
      openLayer('Email format error');
      return false;
    }
  }
  //check code
  function checkVerifyCode() {
    if ($("#verify_code").val()) {
      return true;
    } else {
      openLayer('Please enter your verification code');
      return false;
    }
  }

  // 客户推广
  if(oReg.search_arr.ib_pid) {
    $.cookie('ib_pid', oReg.search_arr.ib_pid, {expires: 1, path: '/', domain: getDomain()});
    $.cookie('invite_status', 1, {expires: 1, path: '/', domain: getDomain()});
  }
 
  function toRegister (is_agree) {
    if (!checkEmail()) return;
    if (!checkVerifyCode()) return;

    if (isMobile()) {
      layer.open({type: 2});
    } else {
      layer.load(0);
    }
    if (is_agree) {
      sa.track('click_register');
    }

    publicRequest('regOrLogin', 'POST', {
      ib_pid: $.cookie('ib_pid') || null,
      invite_status: $.cookie('invite_status') || null,
      account: $("#email").val(),
      account_type: 2,
      password: $("#verify_code").val(),
      login_type: 2,
      pid: oReg.search_arr.pid || null,
      unit: oReg.search_arr.unit || null,
      lp: oReg.search_arr.lp || null,
      key: oReg.search_arr.key || null,
      is_agree: is_agree == 'is_agree' ? 1 : 0
    }).then(function (data) {
      if (!data) return;
      if (data.is_succ) {
        layer.closeAll();
        openLayer("Register Successful");
      } else {
          if ((data.code == 100402) || (data.code == 100403)) {
            if (isMobile()) {
              openH5AgmentModal(data.code, function(resolve, e){
                toRegister('is_agree');
                layer.close(resolve.layIndex)
              })
            } else {
              openWebAgmentModal(data.code, function(resolve, e){
                toRegister('is_agree');
                layer.close(resolve.layIndex)
              })
            }
              
          } else {
              layer.closeAll();
              openLayer(data.message);
          }
        }
    });

    return false;
  }

  function openLayer (msg) {
    // console.log(msg);
    if (isMobile()) {
      layer.open({
        skin: 'msg',
        content: msg,
        time: 3
      });
    } else {
      layer.msg(msg);
    }
    
  }

  function sendCode () {
    if (sendInfo.unable) return;
    if (!checkEmail()) return;
    sendInfo.unable = true;
    sa.track('email_code');
    publicRequest('sendCode', 'POST', {
      account: $("#email").val(),
      type: 1
    }).then(function (data) {
      if (!data) return;
      if (data.is_succ) {
        $("#verify_code_btn").addClass("unable");
        var timer = setInterval(function () {
          sendInfo.count--;
          if (sendInfo.count<=0) {
            sendInfo.unable = false;
            sendInfo.count = 60;
            $("#verify_code_btn").removeClass("unable");
            $("#verify_code_btn").html("Resend");
            clearInterval(timer);
          } else {
            $("#verify_code_btn").html("Resend ("+sendInfo.count+")");
          }
        }, 1000);
      } else {
        sendInfo.unable = false;
        layer.closeAll();
        openLayer(data.message);
      }
    });
    
  }

  function isMobile() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    return deviceAgent.match(/(iphone|ipod|ipad|android)/);
  }
});