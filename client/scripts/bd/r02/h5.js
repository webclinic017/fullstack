;
(function () {
    var $rewardBtn = $(".bd_r02__reward_box .reward_btn");
    var $rewardBar = $(".bd_r02__reward_box .bar");
    var $rewardHook = $(".bd_r02__reward_box .hook");
    var $rewardChance = $(".bd_r02__reward_box .tit span");
    var $rewardCont = $(".bd_r02 .layer_bdr02_dollar .cont");
    var $rewardNum = $(".bd_r02 .layer_bdr02_dollar .num");
    var $rewardRuleBtn = $(".bd_r02 .bd_r02__rule");
    var isDrawAward = false;
    var isInTigerApp = false;
    var activityId = 12;
    var rewardId = 25;
    var rewardCount = 0;
    var message = '请前往APP参与活动';

    if (isInTiger()) {
      isInTigerApp = true;
      checkReward();
    } else {
      toOpenApp();
    }
    $rewardBtn.on("tap", function () {
      if (isInTigerApp) {
        getDrawPrize();
      } else {
        toOpenApp();
      }

      return false;
    });
    $rewardRuleBtn.on("tap", function () {
      layer.open({
        shadeClose: false,
        content: $("#layer_ruleBox").html(),
        style: 'padding:0;width:85%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
      });
      $('.layui-m-layercont').css('padding', 0);

      return false;
    });

    function checkReward () {
      publicRequest('checkReward', 'POST', {
          activity_id: activityId,
          reward_id: rewardId
      }).then(function (data) {
          // console.log(data.data);
          if (data.is_succ) {
            rewardCount = data.data.num;
            $rewardChance.html(data.data.num);
            message = data.data.message;
          } else {
            message = data.message;
          }
      });
    }

    function getDrawPrize () {
      if (isDrawAward) return;
      if (rewardCount <= 0) {
        layer.open({
            content: message,
            skin: 'msg',
            time: 2
        });
        return false;
      }
      layer.open({
        type: 2
      });
      isDrawAward = true;

      publicRequest('joinReward', 'POST', {
        activity_id: activityId,
        reward_id: rewardId
      }).then(function (data) {
        // console.log(data.data);
        layer.closeAll();
        if (data.is_succ) {
          checkReward();
          $rewardBar.css("height", "9rem");
          $rewardHook.css("top", "14rem");

          setTimeout(function () {
            $rewardHook.addClass("active");
            $rewardBar.css("height", "2rem");
            $rewardHook.css("top", "7rem");
          }, 1000);

          setTimeout(function () {
            isDrawAward = false;
            if (data.data.type === 1) {
              $rewardNum.html(data.data.prize);
            } else {
              $rewardCont.html(data.data.message);
            }
            
            layer.open({
              shadeClose: false,
              content: $("#layer_contentBox").html(),
              style: 'padding:0;width:85%;border-radius:0;color:#000;background:rgba(0,0,0,0);'
            });
            $('.layui-m-layercont').css('padding', 0);
          }, 1500);
        } else {
          isDrawAward = false;
          layer.open({
              content: data.message,
              skin: 'msg',
              time: 2
          });
        }
      });
    }

    function toOpenApp () {
      var o;
      // console.log(s);
      if (window.location.origin.indexOf("cndemo.tigerwit.com") != -1) {
          o = "cndemo.tigerwit.com/bd/r02";
      } else {
          o = "cn.tigerwit.com/bd/r02";
      }
      // console.log(o);
      if (isTigerCo()) {
          openInApp(o);
      }
    }
}());