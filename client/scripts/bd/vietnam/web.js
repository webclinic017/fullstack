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
    var name = $(".form-item input[data-name=name]").val();
    var phone = $(".form-item input[data-name=phone]").val();
    var email = $(".form-item input[data-name=email]").val();
    console.log(phone, email)
    if (!name || !phone || !email) {
      layer.msg('Hãy điền đầy đủ thông tin');
      return;
    }
    if (!reg.email.test(email)) {
      layer.msg('Hộp thư định dạng sai lầm');
      return;
    }
    if (!reg.phone.test(phone)) {
      layer.msg('Định dạng sai số điện thoại di động');
      return;
    }
    layer.load(2);
    $.post('/api/v3/auth/page_signup', {
      username: name,
      phone: phone,
      email: email,
      lang: 'vi',
      pid: pid,
      unit: unit,
      key: key,
      lp: lp
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

  //获取url中的参数
  function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
  }
})();