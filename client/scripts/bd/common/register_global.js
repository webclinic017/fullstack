$(document).ready(function () {
  var oReg = {
    email: /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    source: /^DW_|D_|R_/i
  };
  var sendInfo = {
    count: 60,
    unable: false
  };

  oReg.search_arr = getSearch();
  setSource();

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
  function checkEmail() {
    if (oReg.email.test($("#email").val().trim())) {
      return true;
    } else {
      openLayer(lang.text('registerJs.emailFormatError'));
      return false;
    }
  }
  //check code
  function checkVerifyCode() {
    if ($("#verify_code").val()) {
      return true;
    } else {
      openLayer(lang.text('thirdH5.fill_ver_code'));
      return false;
    }
  }

  publicRequest('getCountries', 'GET').then(function (data) {
    // console.log(data);
    if (data.is_succ) {
      var optionStr = ''
      for (var i = 0; i < data.data.length; i++) {
        optionStr += '<option value="' + data.data[i].code + '">' + data.data[i].name + '</option>';
      }
      $("#country").append(optionStr);
    }
  });
  //更改select color
  $("#country").on('change', function (e) {
    $(this).css('color', '#333');
  });
  function toRegister(is_agree) {
    if (!$("#country").val()) {
      openLayer(lang.text('registerJs.selectCountry'));
      return;
    }
    if (!checkEmail()) return;
    // 判断密码
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (!password) {
      openLayer(lang.text('register.enterPassword'));
      return
    }
    if (password != confirmPassword) {
      openLayer(lang.text('register.passwordsNoMatch'));
      return
    }
    if (!checkVerifyCode()) return;

    if (isMobile()) {
      layer.open({ type: 2 });
    } else {
      layer.load(0);
    }
    if (is_agree) {
      sa.track('click_register');
    }
    var params = {
      appsflyer_id: $.cookie('APPSFLYER_ID') || null,
      account: $("#email").val(),
      account_type: 2,
      world_code: $("#country").val(),
      password: password,
      code: $("#verify_code").val(),
      login_type: 3,
      is_agree: is_agree == 'is_agree' ? 1 : 0,
      // TODO 暂时
      // referrer: document.referrer,
      // href: location.href,
      // cookie: document.cookie
    }
    var all_sources = $.cookie('all_sources');
    if (all_sources) {
      params = $.extend(params, JSON.parse(all_sources));
    }
    publicRequest('regOrLogin', 'POST', params).then(function (data) {
      if (!data) return;
      if (data.is_succ) {
        layer.closeAll();
        openLayer(lang.text('registerJs.registerSucc'));
        setGtagUserId(data.data.user_code)
        if (!isMobile()) {
          $.cookie('token', data.data.token, { expires: 30, path: '/', domain: getDomain() });
          $.cookie('user_code', data.data.user_code, { expires: 30, path: '/', domain: getDomain() });
          $.cookie('username', data.data.username, { expires: 30, path: '/', domain: getDomain() });
          $.cookie('username_en', data.data.username_en, { expires: 30, path: '/', domain: getDomain() });
          $.cookie('world_code', $("#country").val(), { expires: 30, path: '/', domain: getDomain() });

          setTimeout(function () {
            toGtagEvent('email_register_success_web');
            window.location.href = '/space/#/center?type=new';
          }, 100);
        } else {
          setTimeout(function () {
            window.location.href = '/m/h5_register/succ';
          }, 100);
        }
      } else {
        if ((data.code == 100402) || (data.code == 100403)) {
          if (isMobile()) {
            openH5AgmentModal(data.code, function (resolve, e) {
              toRegister('is_agree');
              layer.close(resolve.layIndex)
            })
          } else {
            openWebAgmentModal(data.code, function (resolve, e) {
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

  function openLayer(msg) {
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

  function sendCode() {
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
          if (sendInfo.count <= 0) {
            sendInfo.unable = false;
            sendInfo.count = 60;
            $("#verify_code_btn").removeClass("unable");
            $("#verify_code_btn").html(lang.text('registerJs.resend'));
            clearInterval(timer);
          } else {
            $("#verify_code_btn").html(lang.text('registerJs.resend') + " (" + sendInfo.count + ")");
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