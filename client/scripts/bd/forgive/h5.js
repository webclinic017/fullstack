$(function () {
  // 检测登录状态
  if (isInTiger()) {
    callNative({
      type: 'checkLogin'
    });
  }
  var imgs = $('.forgive_imgs')

  setTimeout(function () {
    imgs.each(function (index, item) {
      (function (index, item) {
        setTimeout(function () {
          $(item).addClass('active')
        }, index * 150)
      }(index, item))
    })
  }, 500)

  $('.forgive__btn').click(function () {
    // layer.open({
    //   style: 'padding:0;width:80%;border-radius:0;color:#000;background:rgba(0,0,0,0);',
    //   content: $('.layer_content.sorry').html()
    // });
    layer.open({type: 2});
    publicRequest('receiveRedbag', 'PUT', {id: 90}).then(function (data) {
      layer.closeAll()
      console.log(data)
      if(data.is_succ){
        layer.open({
          style: 'padding:0;width:80%;border-radius:0;color:#000;background:rgba(0,0,0,0);',
          content: $('.layer_content.confirm').html()
        });
      } else {
        $('.forgiveLayer .msg').html(data.message)

        layer.open({
          style: 'padding:0;width:80%;border-radius:0;color:#000;background:rgba(0,0,0,0);',
          content: $('.layer_content.nofit').html()
        });

        if (data.message.indexOf('余额') != -1) {
          $('.confirm-btn').hide()
          $('.deposit-btn').show()
        }
      }
    })
  })

  $(document).on('click', '.btn-down', function (e) {
    var action = $(e.target).attr('data-action');
    console.log(action)
    if (action == 'deposit') {
      if (isInTiger()) {
        callNative({
          type: 'deposit'
        });
      }
    }
  })

  $('.forgive__title').on('click', function () {
    layer.open({
      style: 'padding:0;width:80%;border-radius:0;color:#000;background:rgba(0,0,0,0);',
      content: $('.layer_content.detail').html()
    });
  })
})