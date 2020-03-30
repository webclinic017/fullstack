(function () {
  if ($("#bd_resurrection").attr('data-page-id')) {
    getPhoneCode()
  }
  $("#login").on("click", login);
  $("#phone_code_select").on("change", function () {
    $('#phone_code').html($(this).val());
  });
  function login () {
    layer.open({ type: 2, shadeClose: false });
    publicRequest('regOrLogin', 'POST', {
      action: 'login',
      login_type: 1,
      account_type: 1,
      account: $("#phone").val(),
      password: encryptPassword($("#password").val()),
      phone_code: $("#phone_code").html()
    }).then(function (data) {
      layer.closeAll();
      if (!data) return;
      if (data.is_succ) {
        $.cookie('token', data.data.token , { path: '/', domain: getDomain()})
        location.href = "/bd/resurrection/detail/"+$("#bd_resurrection").attr("data-page-id");
      } else {
        layer.open({
          content: data.message,
          skin: 'msg',
          time: 2
        });
      }
    });
  }
  
  function getPhoneCode() {
    publicRequest('getCountries', 'GET').then(function (data) {
      if (data.is_succ) {
        var optionStr = '<option value=""></option>'
        for (var i = 0; i < data.data.length; i++) {
          optionStr += '<option value="' + data.data[i].phone_code + '">+' + data.data[i].phone_code + '('+ data.data[i].name +')' + '</option>';
        }
        $("#phone_code_select").append(optionStr);
      }
    });
  }
  var opened = false;
  $("#open").on("click", function () {
    if (opened) return;
    layer.open({ type: 2, shadeClose: false });
    publicRequest('receiveRedbagWeb', 'PUT', {
      id: $("#bd_resurrection_detail").attr('data-page-id')
    }).then(function (data) {
      layer.closeAll();
      if (!data) return;
      if (data.code >= 100100 && data.code <= 100199) {
        layer.open({
            skin: 'msg',
            content: data.message,
            time: 2
        });
        setTimeout(function () {
          location.href = "/bd/resurrection/"+$("#bd_resurrection_detail").attr("data-page-id");
        }, 1500);
        return;
      }
      opened = true;
      if (data.is_succ) {
        $("#redbag-closed").removeClass('active');
        $("#redbag-opened").addClass('active');
        $(".bd_resurrection_detail_tip").addClass('active');
        $(".bd_resurrection_detail_rules").addClass('active');
        //数据 TODO
        $(".dollar").html(data.data.amount);
        $(".date").html(data.data.valid_end);
        $(".lots").html(data.data.lot);
        
      } else {
        $(".message").html(data.message);
        $(".message").addClass('active');
      }
    });
  });
  // publicRequest('getRedbags', 'GET', function (data) {
  //   console.log(data)
  // })
  
})();