;
(function () {
  twH5Loader('img_detect_container', 3, allLoaded)

  function allLoaded() {
    $(function () {
      // 微信分享配置
      if (wx) {
        wxShareConfig({
          title: '老虎外汇多重礼，700美金砸向你！',
          subTitle: '老虎外汇多重礼，700美金砸向你！',
          shareLink: window.location.href,
          desc: '注册老虎外汇，即享700美金大礼，你还在犹豫什么，马上行动起来！',
          img: window.location.origin + '/activity/logo.png',
          trackPage: window.location.pathname.replace(/\//gi, ''),
          debug: false
        });
      } else {
        console.log("微信配置错误")
      }

      // 兼容安卓键盘弹出BUG
      debugAndroidKey({
        focusSelector: '.section5 input',
        ctrlBox: '.redbag_regBox',
        focusCss: {
          marginTop: '15%'
        },
        focusFn: function () {
          //   $('.connect_us').hide();
        },
        blurCss: {
          marginTop: '65.5%'
        },
        blurFn: function () {
          //   $('.connect_us').show();
        },
      })

      function removeEff(index, except) {
        var hasEff = $('.section' + index + ' .animated');

        hasEff.each(function (index, item) {
          var classNames = $(item).attr('class').split(' ');
          var effName = '';
          var subIndex = null;
          $.each(classNames, function (index, item) {
            if (item == 'animated') {
              subIndex = index;
            }
            effName = classNames[subIndex + 1];
          });
          if (classNames.indexOf(except) < 0) {
            $(item).removeClass('animated');
            $(item).removeClass(effName);
          }
        });
      }

      function showBtn(index) {
        $(".registerNow" + index).fadeIn(300)
      }

      function hideBtn(index) {
        $(".registerNow" + index).fadeOut(500)
      }

      function addRegEff(index) {
        var effects = 'rotateIn_jello_fadeIn_flipInX_lightSpeedIn'.split('_');
        var effect = effects[parseInt(Math.random() * effects.length)];
        console.log(effect);
        setTimeout(function () {
          $(".section" + index).find('.registerNow').addClass('animated ' + effect)
        }, 500)
      }

      $('#dowebok').fullpage({
        navigation: true,
        navigationColor: "#fbd71f",
        navigationPosition: "left",
        //sectionsColor: ['#ccc', '#121212', '#fff', '#000', '#e0e0e0'],
        verticalCentered: false,
        afterRender: function () {
          $('.matters_btn').delay(700).fadeIn(800);
          /*页面按钮事件*/
          $(document.body).on("click", function (e) {
            var action = $(e.target).attr("data-action");
            var targetClass = $(e.target).attr("class");

            function openLay(which) {
              layer.open({
                shadeClose: true,
                content: $("#layer_contentBox").html(),
                style: 'padding:0;width:75%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
              });
              $('.layui-m-layercont').css('padding', 0)
              $.fn.fullpage.setAllowScrolling(false)
            }

            if (targetClass == "layui-m-layershade") {
              layer.closeAll();
              $.fn.fullpage.setAllowScrolling(true)
            }
            if (action == "matters") {
              openLay()
            }
            if (action == 'registerNow') {
              $.fn.fullpage.moveTo(5);
            }
          });

          $(".lake_layout").fadeIn(0);
        },
        afterLoad: function (anchorLink, index) {

          setTimeout(function () {
            addRegEff(index);
          }, index == 1 ? 200 : 900);
          // debug 安卓翻页
          offsetAction(index)
          //showBtn(index);
          if (index == 1) {
            $('.matters_btn').delay(700).fadeIn();
          }

          if (index == 2) {
            //offsetAction(index);
            $('.section2 .four_ways').fadeIn(1000);
            $('.section2 .line_title').find('h2').addClass('active');
            $('.section2 .line_title').find('p').addClass('active');
            $('.section2').find('.line').addClass('active');
            $('.section2').find('.common_ways').addClass('active');
            $('.section2 .common_ways').each(function (index, item) {
              setTimeout(function () {
                $(item).fadeIn(0)
                $(item).addClass('animated flipInX')
              }, (index + 1) * 220);
            })
          }

          if (index == 3) {
            $('.section3 .line_title').find('h2').addClass('active');
            $('.section3 .line_title').find('p').addClass('active');
            $('.section3').find('.line').addClass('active');
          }

          if (index == 4) {
            $('.section4 .line_title').find('h2').addClass('active');
            $('.section4 .line_title').find('p').addClass('active');
            $('.section4').find('.line').addClass('active');
          }
        },
        onLeave: function (index, direction) {
          if (index != 3) {
            removeEff(index);
          }
          hideBtn(index);
        }
      });
    })
  }
}());
