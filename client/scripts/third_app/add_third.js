
$(".third_app_bank__item input").on("input propertychange", function () {
  var info = $(this).val();
  // console.log(info, $(this).attr("name"));
  if (info) {
    $(".third_app_bank__item .name[data-name="+$(this).attr("name")+"]").addClass('active');
  } else {
    $(".third_app_bank__item .name[data-name="+$(this).attr("name")+"]").removeClass('active');
  }
});
$(".third_app_bank__item select").on("change", function () {
  // console.log($(this).find("option:selected").val());
  $(".third_app_bank__item input[name="+$(this).attr("name")+"]").val($(this).find("option:selected").text());
  if ($(this).val()) {
    $(".third_app_bank__item .name[data-name="+$(this).attr("name")+"]").addClass('active');
  } else {
    $(".third_app_bank__item .name[data-name="+$(this).attr("name")+"]").removeClass('active');
  }

});

$("#third_app_bank_cancel").on("tap", function () {
  window.location.href="/m/third/asset";
  return false;
});

$("#third_app_bank_btn").on("tap", function () {
  var platform = $(".third_app_bank__item select[name=platform]").val();
  var account = $(".third_app_bank__item input[name=account]").val();
  if (!platform) {
    openMessageMdl(thirdH5.completeInfo);
    return false;
  }
  if (!account) {
    openMessageMdl(thirdH5.fillAccount);
    return false;
  }
  // console.log(account, platform);
  openLoadingMdl();
  publicRequest('setThirdBindAccount', 'POST', {
    platform: platform,
    account: account
  }).then(function (data) {
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      openMessageMdl(thirdH5.addSuccess);
      setTimeout(function () {
        // console.log('backPrev');
        // openThirdNative({
        //   type: "backPrev"
        // });
        window.location.href="/m/third/asset";
      }, 1000);
    } else {
      openMessageMdl(data.message);
    }
  });
  return false;
});

setTimeout(function () {
  getThirdPlatforms();
}, 10)

function getThirdPlatforms () {
  publicRequest('getThirdPlatforms', 'GET').then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_platform', 'name', 'id', data.data);
    }
  });
}
/*
 * 设置select模版
 *   id      select ID
 *   key     显示key
 *   value   用于提交的value
 *   lst     数据列表
 */
function setOptions (id, key, value, lst) {
  var optionTemplate = {
    data: {
      key: key,
      value: value,
      lst: lst
    }
  }
  var html=bt('template_add_bank_lst',optionTemplate);
  $("#"+id).html(html);
}