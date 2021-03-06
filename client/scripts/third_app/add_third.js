
$(".third_app_bank__item input").on("input propertychange", function () {
  var info = $(this).val();
  // console.log(info, $(this).attr("name"));
  if (info) {
    $(".third_app_bank__item .name[data-name=" + $(this).attr("name") + "]").addClass('active');
  } else {
    $(".third_app_bank__item .name[data-name=" + $(this).attr("name") + "]").removeClass('active');
  }
});
$(".third_app_bank__item select").on("change", function () {
  // console.log($(this).find("option:selected").val());
  $(".third_app_bank__item input[name=" + $(this).attr("name") + "]").val($(this).find("option:selected").text());
  if ($(this).val()) {
    $(".third_app_bank__item .name[data-name=" + $(this).attr("name") + "]").addClass('active');
  } else {
    $(".third_app_bank__item .name[data-name=" + $(this).attr("name") + "]").removeClass('active');
  }
  // 第三方提示(私有功能)
  if ($(this).prop('id') === 'third_app_platform') {
    var tip = $(this).find("option:selected").data('tip');
    if (tip) {
      $('#third_app_platform_tip').text(tip)
    } else {
      $('#third_app_platform_tip').text('')
    }
  }

});

$("#third_app_bank_cancel").on("tap", function () {
  window.location.href = "/m/third/asset";
  return false;
});

$("#third_app_bank_btn").on("tap", function () {
  var platform = $(".third_app_bank__item select[name=platform]").val();
  var account = $(".third_app_bank__item input[name=account]").val();
  if (!platform) {
    openMessageMdl(lang.text("thirdH5.completeInfo"));
    return false;
  }
  if (!account) {
    openMessageMdl(lang.text("thirdH5.fillAccount"));
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
      openMessageMdl(lang.text("thirdH5.addSuccess"));
      setTimeout(function () {
        // console.log('backPrev');
        // openThirdNative({
        //   type: "backPrev"
        // });
        window.location.href = "/m/third/asset";
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

function getThirdPlatforms() {
  publicRequest('getThirdPlatforms', 'GET').then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_platform', 'name', 'id', data.data);
    }
  });
}