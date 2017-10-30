$(function () {
  var imgs = $('.forgive_imgs')

  // 滚动特效节流阀
  var tap = 0;
  // 滚动特效
  $(document).scroll(function (e) {
    var sclTp = $(document).scrollTop()
    tap += 1
    if (tap >= 10) {
      tap = 0
      imgs.each(function (index, item) {
        // console.log(item)
        if (sclTp >= $(item).offset().top - 300) {
          $(item).addClass('active')
        } else {
          $(item).removeClass('active')
        }
      })
    }
  })

  // layer公用配置
  var openCfg = {
    type: 1,
    skin: 'forgive_layer_skin',
    title: '',
    closeBtn: 0,
    shadeClose: true,
    shade: 0.5
  }

  // 详情按钮
  $('.forgive__title').on('click', function () {
    layer.open(
      $.extend(openCfg, {
        area: ['520px', '600px'],
        content: $('.layer_content.detail').html()
      })
    )
  })

  // 一键原谅
  $('.forgive__btn').click(function () {
    layer.load(0, { shade: false }); //0代表加载的风格，支持0-2
    publicRequest('receiveRedbag', 'PUT', { id: 135 }).then(function (data) {
      layer.closeAll()
      console.log(data)
      if (data.is_succ) {
        layer.open(
          $.extend(openCfg, {
            area: ['520px', '240px'],
            content: $('.layer_content.confirm').html()
          })
        )
      } else {
        if(data.code >= 100100 && data.code <= 100199){
          if(confirm('请先登录再进行操作')){
            window.location.href = "/space/#/account/login"
          }
        }
        else if (data.message.indexOf('余额不足') != -1) {
          layer.open(
            $.extend(openCfg, {
              area: ['520px', '240px'],
              content: $('.layer_content.sorry').html()
            })
          )
        } 
        else {
          layer.open(
            $.extend(openCfg, {
              area: ['520px', '220px'],
              content: $('.layer_content.nofit').html()
            })
          )
        }
      }
    })
  })
  // 事件代理
  $(document).on('click', '.btn-down', function (e) {
    var action = $(e.target).attr('data-action');
    if (action == 'waiter') {
      OpenChat()
    }
    if (action == 'deposit') {
      window.location.href = "/space/#/space/asset/deposit"
    }
  })
  
})