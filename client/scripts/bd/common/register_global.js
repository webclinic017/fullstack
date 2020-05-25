$(document).ready(function () {
  var oReg = {
    email: /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    source: /^DW_|D_|R_/i
  };
  var sendInfo = {
    count: 60,
    unable: false
  };
  /*获取查询字段*/
  // function getSearch() {
  //   var url = location.href;
  //   /*获取url中"?"符后的字串*/
  //   var theRequest = new Object();
  //   if (url.indexOf("?") != -1) {
  //       var str = url.split('?')[1];
  //       strs = str.split("&");
  //       for (var i = 0; i < strs.length; i++) {
  //           theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
  //       }
  //   }
  //   return theRequest;
  // }

  oReg.search_arr = getSearch();
  oReg.search_source = checkUserSource();
  /* 客户推广参数写入 */
  if (oReg.search_source) {
    publicRequest('setUserSource', 'POST', {
      source: JSON.stringify(search_source)
    });
  }
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
  if (oReg.search_arr.pid) {
    $.cookie('pid', oReg.search_arr.pid, { path: '/', domain: getDomain(), expires: 7 });
    // 清空重写
    $.cookie('ib_pid', '', { path: '/', domain: getDomain(), expires: -1 });
    $.cookie('unit', '', { path: '/', domain: getDomain(), expires: -1 });
    $.cookie('key', '', { path: '/', domain: getDomain(), expires: -1 });
    $.cookie('invite_status', 3, { path: '/', domain: getDomain(), expires: 7 });


    if (oReg.search_arr.unit) {
      $.cookie('unit', oReg.search_arr.unit, { path: '/', domain: getDomain(), expires: 7 });
    }
    if (oReg.search_arr.key) {
      $.cookie('key', oReg.search_arr.key, { path: '/', domain: getDomain(), expires: 7 });
    }
  }
  // 客户推广
  if (oReg.search_arr.ib_pid) {
    oReg.search_arr.pid = undefined;
    $.cookie("pid", "", { path: '/', domain: getDomain(), expires: -1 });
    $.cookie('ib_pid', oReg.search_arr.ib_pid, { expires: 1, path: '/', domain: getDomain() });
    $.cookie('invite_status', 1, { expires: 1, path: '/', domain: getDomain() });
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
    publicRequest('regOrLogin', 'POST', {
      ib_pid: oReg.search_arr.ib_pid || $.cookie('ib_pid') || null,
      invite_status: $.cookie('invite_status') || null,
      browser_id: $.cookie('BROWSER_ID') || null,
      account: $("#email").val(),
      account_type: 2,
      world_code: $("#country").val(),
      password: password,
      code: $("#verify_code").val(),
      login_type: 3,
      pid: oReg.search_arr.pid || null,
      unit: oReg.search_arr.unit || null,
      lp: oReg.search_arr.lp || null,
      key: oReg.search_arr.key || null,
      is_agree: is_agree == 'is_agree' ? 1 : 0,
      register_rule: JSON.stringify(oReg.search_source),
      // TODO 暂时
      referrer: document.referrer,
      href: location.href,
      cookie: document.cookie
    }).then(function (data) {
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