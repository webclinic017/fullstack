
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

  if ($(this).attr("name") === 'province') {
    getCities($(this).find("option:selected").val())
  }
});
$(".third_app_bank__item select[name=city]").on("tap", function () {
  if (!$(".third_app_bank__item select[name=province]").val()) {
    openMessageMdl('请选择您的开户省');
    return false;
  }
});

$("#third_app_bank_btn").on("tap", function () {
  var card = $(".third_app_bank__item input[name=card]").val();
  var bank_name = $(".third_app_bank__item select[name=bank_name]").val();
  var province = $(".third_app_bank__item select[name=province]").val();
  var city = $(".third_app_bank__item select[name=city]").val();
  var address = $(".third_app_bank__item input[name=address]").val();
  var phone = $(".third_app_bank__item input[name=phone]").val();
  if (!card) {
    openMessageMdl('请填写银行卡号');
    return false;
  }
  if (!bank_name) {
    openMessageMdl('请选择您的银行名称');
    return false;
  }
  if (!province) {
    openMessageMdl('请选择您的开户省');
    return false;
  }
  if (!city) {
    openMessageMdl('请选择您的开户市');
    return false;
  }
  if (!address) {
    openMessageMdl('请填写支行名称');
    return false;
  }
  if (!phone) {
    openMessageMdl('请填写银行卡预留手机号');
    return false;
  }
  // console.log(card, bank_name, province, city, address, phone);
  openLoadingMdl();
  publicRequest('uploadThirdBankInfo', 'PUT', {
    country: personalInfo.region.world_code,
    card_no: card,
    bank_name: bank_name,
    province: province,
    city: city,
    bank_addr: address,
    phone: phone
  }).then(function (data) {
    closeAllMdl();
    if (!data) return;
    if (!data.is_succ) {
      openMessageMdl('添加成功');
      setTimeout(function () {
        console.log('backPrev');
        openThirdNative({
          type: "backPrev"
        });
      }, 1000);
    } else {
      openMessageMdl(data.message);
    }
  });
  return false;
});

setTimeout(function () {
  getBankNames();
  getProvinces();
}, 10)

function getBankNames () {
  publicRequest('getThirdBankNames', 'GET', {
    type: 1
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_bank_bank_name', 'name', 'code', data.data);
    }
  });
}
function getProvinces () {
  publicRequest('getThirdProvinces', 'GET', {
    country_code: 'CN'
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      setOptions('third_app_bank_province', 'name', 'code', data.data);
    }
  });
}
function getCities (parent_code) {
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

function refreshBankInfo () {
  $(".third_app_bank__item input[name=realname]").val(personalInfo.realname);
  $(".third_app_bank__item input[name=country]").val(personalInfo.region.world_name);
}