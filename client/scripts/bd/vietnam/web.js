; (function () {
  var reg = {
    email: /^\w+@\w+\.+\w+$/,
    phone: /^[\d+|+]?\d+?-?\d+$/
  };
  setSource();
  $("#btn-form").on("click", function () {
    var type = $(this).attr("data-type") || 'vi';
    var name = $(".form-item input[data-name=name]").val();
    var phone_code = $(".form-item select[data-name=phone_code]").val();
    var phone = $(".form-item input[data-name=phone]").val();
    var email = $(".form-item input[data-name=email]").val();
    // console.log(phone, email)
    var msgFront = {
      none: {
        vi: 'Hãy điền đầy đủ thông tin',
        id: 'Silakan isi informasinya'
      },
      email: {
        vi: 'Hộp thư định dạng sai lầm',
        id: 'Format kotak surat salah'
      },
      phone_code: {
        vi: 'Vui lòng chọn mã khu vực',
        id: 'Silahkan pilih kode area'
      },
      phone: {
        vi: 'Định dạng sai số điện thoại di động',
        id: 'Format nomor ponsel salah'
      },
    };
    if (!name || !phone || !email) {
      layer.msg(msgFront.none[type]);
      return;
    }
    if (!reg.email.test(email)) {
      layer.msg(msgFront.email[type]);
      return;
    }
    if (!phone_code) {
      layer.msg(msgFront.phone_code[type]);
      return;
    }
    if (!reg.phone.test(phone)) {
      layer.msg(msgFront.phone[type]);
      return;
    }
    layer.load(2);
    var params = {
      username: name,
      phone: phone,
      phone_code: phone_code,
      email: email,
      lang: type,
      lp: getLp(getSearch().lp),
      world_code: type == 'vi' ? 'VN' : 'ID'
    }
    var all_sources = $.cookie('all_sources');
    if (all_sources) {
      params = $.extend(params, JSON.parse(all_sources));
    }
    $.post('/api/v3/auth/page_signup', params).then(function (data) {
      // console.log(data);
      layer.closeAll();
      if (data.is_succ) {
        layer.msg(data.message);
      } else {
        layer.msg(data.message);
      }
    });
    return false;
  });

  // 获取区号列表
  publicRequest('getCountries', 'GET', { type: 1 }).then(function (data) {
    // console.log(data);
    if (data.is_succ) {
      var optionStr = ''
      for (var i = 0; i < data.data.length; i++) {
        optionStr += '<option value="' + data.data[i].phone_code + '">+' + data.data[i].phone_code + '</option>';
      }
      $(".form-item select[data-name='phone_code']").append(optionStr);
    }
  });
})();
