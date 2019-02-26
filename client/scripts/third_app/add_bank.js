
if (getUrlParam('world_code') === 'CN') {
  getBankNames();
  getProvinces();
  $(".third_app_bank__item.is_cn").css("display", "block");
} else {
  $(".third_app_bank__item.is_global").css("display", "block");
  if (getUrlParam('world_code') !== 'VN') {
    $(".third_app_bank__item.is_vn").css("display", "block");
  }
}

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

  if ($(this).attr("name") === 'province') {
    getCities($(this).find("option:selected").val())
  }
});
$(".third_app_bank__item select[name=city]").on("tap", function () {
  if (!$(".third_app_bank__item select[name=province]").val()) {
    openMessageMdl(lang.text("thirdH5.selectAccountPro"));
    return false;
  }
});

$("#third_app_bank_cancel").on("tap", function () {
  window.location.href = "/m/third/asset";
  return false;
});

$("#third_app_bank_btn").on("tap", function () {
  var card = $(".third_app_bank__item input[name=card]").val();
  var bank_name = $(".third_app_bank__item select[name=bank_name]").val();
  var province = $(".third_app_bank__item select[name=province]").val();
  var city = $(".third_app_bank__item select[name=city]").val();
  var address = $(".third_app_bank__item input[name=address]").val();
  var phone = $(".third_app_bank__item input[name=phone]").val();

  var bankOther = $(".third_app_bank__item input[name=bankOther]").val();
  var swift_code = $(".third_app_bank__item input[name=swift_code]").val();
  if (!card) {
    openMessageMdl(lang.text("thirdH5.enterCardNumber"));
    return false;
  }
  if (personalInfo.region.world_code === 'CN' && !bank_name) {
    openMessageMdl(lang.text("thirdH5.enterBankName"));
    return false;
  }
  if (personalInfo.region.world_code === 'CN' && !province) {
    openMessageMdl(lang.text("thirdH5.selectAccountPro"));
    return false;
  }
  if (personalInfo.region.world_code === 'CN' && !city) {
    openMessageMdl(lang.text("thirdH5.selectAccountCity"));
    return false;
  }
  if (!address) {
    openMessageMdl(lang.text("thirdH5.enterBranchBankName"));
    return false;
  }
  if (personalInfo.region.world_code === 'CN' && !phone) {
    openMessageMdl(lang.text("thirdH5.enterReservedPhoneNumber"));
    return false;
  }
  if (personalInfo.region.world_code !== 'CN' && !bankOther) {
    openMessageMdl("Fill in the opening account bank");
    return false;
  }
  if (personalInfo.region.world_code !== 'CN' && personalInfo.region.world_code !== 'VN' && !swift_code) {
    openMessageMdl("Please fill in the bank identification code");
    return false;
  }
  // console.log(card, bank_name, province, city, address, phone);
  var oParams = {
    country: personalInfo.region.world_code,
    card_no: card,
    bank_addr: address
  };
  if (personalInfo.region.world_code === 'CN') {
    oParams.bank_name = bank_name;
    oParams.province = province;
    oParams.city = city;
    oParams.phone = phone;
  } else {
    oParams.bank_name = bankOther;
    if (personalInfo.region.world_code !== 'VN') {
      oParams.swift_code = swift_code;
    }
  }
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

function getBankNames() {
  publicRequest('getThirdBankNames', 'GET', {
    type: 1
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_bank_bank_name', 'name', 'code', data.data);
    }
  });
}
function getProvinces() {
  publicRequest('getThirdProvinces', 'GET', {
    country_code: 'CN'
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_bank_province', 'name', 'code', data.data);
    }
  });
}
function getCities(parent_code) {
  // console.log(parent_code);
  $('#third_app_bank_city').html('');
  if (!parent_code) {
    $(".third_app_bank__item input[name=city").val('');
    $(".third_app_bank__item .name[data-name=city]").removeClass('active');
    return;
  }
  publicRequest('getThirdCities', 'GET', {
    parent_code: parent_code
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_bank_city', 'name', 'code', data.data);
    }
  });
}

function refreshBankInfo() {
  $(".third_app_bank__item input[name=realname]").val(personalInfo.realname);
  $(".third_app_bank__item input[name=country]").val(personalInfo.region.world_name);
}