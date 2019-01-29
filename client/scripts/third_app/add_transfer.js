

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

});

$("#third_app_bank_cancel").on("tap", function () {
  window.location.href = "/m/third/asset";
  return false;
});

$("#third_app_bank_btn").on("tap", function () {
  var card = $(".third_app_bank__item input[name=card]").val();
  var realname = $(".third_app_bank__item input[name=realname]").val();
  var country = $(".third_app_bank__item select[name=country]").val();

  var bankOther = $(".third_app_bank__item input[name=bankOther]").val();
  var swift_code = $(".third_app_bank__item input[name=swift_code]").val();
  if (!card) {
    openMessageMdl(lang.text("thirdH5.fillWithdrawAccount"));
    return false;
  }
  if (!country) {
    openMessageMdl(lang.text("thirdH5.chooseCountry"));
    return false;
  }
  if (!bankOther) {
    openMessageMdl(lang.text("thirdH5.fillBankName"));
    return false;
  }
  if (!swift_code) {
    openMessageMdl(lang.text("thirdH5.fillBicSwiftCode"));
    return false;
  }
  // console.log(card, bank_name, province, city, address, phone);
  var oParams = {
    card_no: card,
    country: country,
    bank_name: bankOther,
    cardholder_name: realname,
    swift_code: swift_code,
    type: 2
  };
  openLoadingMdl();
  publicRequest('uploadThirdBankInfo', 'PUT', oParams).then(function (data) {
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
  getCountrys();
}, 10)

function getCountrys() {
  publicRequest('getCountries', 'GET').then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_country', 'name', 'code', data.data);
      $(".third_app_bank__item input[name=country]").val('CN');
      for (var index = 0; index < data.data.length; index++) {
        if (data.data[index].code == 'CN') {
          $(".third_app_bank__item input[name=country]").val(data.data[index].name);
          $(".third_app_bank__item select[name=country]").val(data.data[index].code);
          break;
        };

      }
    }
  });
}

function refreshBankInfo() {
  $(".third_app_bank__item input[name=realname]").val(personalInfo.realname);
}