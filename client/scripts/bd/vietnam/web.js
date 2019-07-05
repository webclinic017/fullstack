;(function () {
  var reg = {
    email: /^\w+@\w+\.+\w+$/,
    phone: /^[\d+|+]?\d+?-?\d+$/
  };
  //lp unit key pid
  var pid = getUrlParam('pid') || '';
  var unit = getUrlParam('unit') || '';
  var key = getUrlParam('key') || '';
  var lp = getUrlParam('lp') || '';

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
    $.post('/api/v3/auth/page_signup', {
      username: name,
      phone: phone,
      phone_code: phone_code,
      email: email,
      lang: type,
      pid: pid,
      unit: unit,
      key: key,
      lp: lp,
      world_code: type == 'vi' ? 'VN' : 'ID'
    }).then(function (data) {
      // console.log(data);
      layer.closeAll();
      if (data.is_succ) {
        layer.msg(data.data);
      } else {
        layer.msg(data.message);
      }
    });
    return false;
  });

  // 获取区号列表
  publicRequest('getCountries', 'GET', {type: 1}).then(function (data) {
    // console.log(data);
    if (data.is_succ) {
        var optionStr = ''
        for (var i=0; i<data.data.length;i++) {
            optionStr += '<option value="'+data.data[i].phone_code+'">+'+data.data[i].phone_code+'</option>';
        }
        $(".form-item select[data-name='phone_code']").append(optionStr);
    }
  });

  //获取url中的参数
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
})();