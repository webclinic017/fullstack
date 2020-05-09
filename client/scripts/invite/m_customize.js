; (function ($) {
    'use strict';
    var arrow = false;
    var allowCopy = false;
    var searchPara = getSearch() || {};
    var inviteLink = location.origin+'/m/customize/invite_come?'+(searchPara.lang?'lang='+searchPara.lang+'&':'')+'user_code=';

    getInviteInfo();
    
    if (searchPara.user_code) {
      setInviteSource(searchPara.user_code);
    } else {
      getUserInfo();
    }
    
    function getUserInfo () {
      publicRequest('getUserInfo', 'GET').then(function (data) {
        if (!data) return;
        if (data.is_succ) {
          setInviteSource(data.data.user_code);
        }
      });
    }
    function setInviteSource(user_code) {
      allowCopy = true;
      inviteLink = inviteLink+user_code;
      $(".copy_link").val(inviteLink);
      //生成image
      QrCodeWithLogo.toImage({
        image: document.getElementById('invite_face_code'),
        content: inviteLink,
        width: 180,
        nodeQrCodeOptions: {
            margin: 1
        },
        logo: {
            src: '/white_label/logo@2x.png',
            radius: 8,
            logoSize: 0.22
        }
      });
    }
    function getInviteInfo() {
      publicRequest('getInviteList', 'GET', {
          offset: 0,
          limit: 1000
      }).then(function (data) {
          if (!data) return;
          if (data.is_succ) {
              data = data.data;
              // $scope.bonusList = data.records;
              $('#invite_count').html(data.record_count);
              $('#invite_succ').html(data.success_count);
              $('#invite_reward').html(data.reward_amount);

              data.records.forEach(function (value, index) {
                var date = new Date(value.invite_time*1000);
                value.time = formatDate(date);
              });
              var records = {
                list: data.records
              };

              if (records.list.length) {
                  var list_str = baidu.template('invite_list', records);
                  $("#records_wrapper").html(list_str);
              }
          }
      });
    }
    //邀请二维码
    $(document).on('touchend', '#invite_face', function () {
      if (!allowCopy) return;
      layer.open({
        skin: 'content',
        content: $('#invite_code_wrapper').html()
      });
      return false;
    });
   
    //复制邀请链接
    $(document).on('touchend', '#invite_link', function () {
      if (!allowCopy) return;
      $('.copy_link').select();
      document.execCommand("Copy");
      layer.open({
          skin: 'msg',
          content: $('.copy_succ').html(),
          time: 2
      });
      $('.copy_link').blur();
    });

    // 查看记录列表
    $("#arrow_btn").on('tap', function () {
      arrow = !arrow;
      if (arrow) {
        $(this).addClass('active');
        $("#records_list").addClass('active');
      } else {
        $(this).removeClass('active');
        $("#records_list").removeClass('active');
      }
      return false;
    })

    function formatDate(date) {
      var d = date.getFullYear() + '-' + todou((date.getMonth() + 1)) + '-' + todou(date.getDate());
      var t = todou(date.getHours()) + ':' + todou(date.getMinutes()) + ':' + todou(date.getSeconds());
      return d + ' ' + t;
    }

    function todou(n) {
        return n >= 10 ? '' + n : '0' + n;
    }
}(jQuery));