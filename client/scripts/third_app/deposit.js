var depositTypeLst = {};  //支付方式列表
var depositType;  //当前选择支付方式
var depositAccount; //当前选择支付账号 交易账户为mt4 ID，零钱包设置为wallet
var deoisitCurrency = null; //支付货币
var depositBtnStatus = false; //支付按钮状态
var depositBankId;   //当前选择支付银行卡ID
var transferBase64 = {
  data: false
};
var eleDeposit = {
  payDeposit: '#third_app_deposit',
  payDepositMsg: '#third_app_deposit_message',
  payDepositMsgBtn: '#third_app_deposit_message_btn',
  payAccountBtn: '#third_app_deposit_account_btn',
  payAccountName: '#third_app_deposit_account_name',
  payAccountTag: '#third_app_deposit_account_tag',
  payTypeBtn: '#third_app_deposit_type_btn',
  payTypeName: '#third_app_deposit_type_name',
  payTypeTip: '#third_app_deposit_type_tip',
  payTypeDetail: '#third_app_deposit_type_detail',
  payBankInfo: '#third_app_deposit_bank',
  payBankName: '#third_app_deposit_bank_name',
  payBankNo: '#third_app_deposit_bank_no',
  payTransferInfo: '.third_app_deposit__transfer_info',
  payInvestInfo: '.third_app_deposit__invest_info',
  payTransferPic: '#third_app_deposit_transfer',
  payCurrency: '#third_app_deposit_currency',
  payOmipay: '#third_app_deposit_omipay',
  payDepositAmount: '#third_app_deposit_amount',
  payDepositBtn: '#third_app_deposit_btn',
  payDepositBtnTip: '#third_app_deposit_btn_tip',
  payDepositSubmitBtn: '#deposit_submit_btn',
  payDepositAmountWrapper: '#third_app_deposit_amount_wrapper',
  payDepositAmountWrapperMull: '#third_app_deposit_amount_wrapper_mull',
  paySelectBankInfo: '.third_app_deposit__select_bank_info',
  paySelectBankBtn: '#third_app_deposit_bank_select_btn',
  paySelectBankName: '#third_app_deposit_bank_select_name'
};
var depositTypeDetail = {
  bank: {
    text: lang.text("thirdH5.paymentRule"),
    url: window.location.origin + '/m/third/bank_rule'
  },
  cse_wallet: {
    text: lang.text("thirdH5.thirdParty"),
    url: window.location.origin + '/third_usage'
  },
  transfer: {
    text: lang.text("thirdH5.detailsRemittance"),
    url: window.location.origin + '/m/third/transfer'
  },
};
/*
 * 充值
 */
$(eleDeposit.payDepositBtn).on("tap", function () {
  if (!depositBtnStatus) return;
  hideBackErr();
  openLoadingMdl();
  if (selectKeyFromType('check_card')) {
    publicRequest('checkThirdDepositBank', 'PUT', {
      card_no: $(eleDeposit.payBankNo).val()
    }).then(function (data) {
      // console.log(data);
      if (data.is_succ) {
        confirmDeposit();
      } else {
        closeAllMdl();
        showBackErr(data.message);
      }
    });
  } else {
    confirmDeposit();
  }
  return false;
});
$(eleDeposit.payDepositMsgBtn).on("tap", function () {
  $(eleDeposit.payDeposit).css("display", "block");
  $(eleDeposit.payDepositMsg).removeClass('active');
  return false;
});
$(document).on("tap", "#third_app_deposit_cse_btn .btn", function () {
  var cAction = $(this).attr("data-action");
  closeAllMdl();
  openLoadingMdl();
  if (cAction) {
    window.location.href = cAction;
  } else {
    submitDeposit();
  }
  return false;
});
$(document).on("tap", eleDeposit.payDepositSubmitBtn, function () {
  closeAllMdl();
  openLoadingMdl();
  submitDeposit();
  return false;
});
function confirmDeposit () {
  if (depositType === 'transfer') {
    publicRequest('depositThirdTele', 'POST', {
      amount: Number($(eleDeposit.payDepositAmount).val()),
      file: transferBase64.data.src.split(',')[1],
      mt4_id: depositAccount !== 'wallet' ? Number(depositAccount) : undefined
    }).then(function (data) {
      // console.log(data);
      closeAllMdl();
      if (data.is_succ) {
        $(eleDeposit.payDeposit).css("display", "none");
        $(eleDeposit.payDepositMsg).addClass('active');
        $(eleDeposit.payDepositMsg).find('.wallet').removeClass('active');
        $(eleDeposit.payDepositMsg).find('.transfer').addClass('active');
      } else {
        showBackErr(data.message);
      }
    });
  } else if (depositType === 'cse_wallet') {
    var depositTemplate = {
      data: {
        title: selectKeyFromType('pop').title,
        content: selectKeyFromType('pop').content,
        notice: selectKeyFromType('pop').notice,
        link: selectKeyFromType('url')
      }
    };
    var html=bt('template_deposit_cse_wallet',depositTemplate);
    $("#third_app_middle_template").html(html);
    openMiddleMdl();
  } else if (depositType === 'wallet') {
    submitDeposit();
  } else {
    computeAmount();
  }
}
function computeAmount () {
  var amount = Number($(eleDeposit.payDepositAmount).val()).toFixed(2);
  var amountCur = (amount*deoisitCurrency.rate_in).toFixed(2);
  var amountFee = (amountCur*(selectKeyFromType('poundage').replace(/%/,'')*0.01)).toFixed(2);
  var desc = selectKeyFromType('poundage_desc') ? selectKeyFromType('poundage_desc').replace(/(^\s*)|(\s*$)/g, "") : "";
  var depositTemplate = {
    data: {
      type: 'deposit',
      rate: deoisitCurrency.rate_in,
      currencySymbol: deoisitCurrency.currency_symbol,
      currencyName: deoisitCurrency.currency_name,
      isFee: selectKeyFromType('poundage_status'),
      desc: desc,
      amountDollar: amount,
      amountCur: amountCur,
      amountFee: amountFee,
      amountTotal: selectKeyFromType('poundage_status') ? Number(amountCur)+Number(amountFee) : amountCur
    }
  }
  var html=bt('template_asset_confirm',depositTemplate);
  $("#third_app_bottom_template").html(html);
  openBottomMdl();
}
function submitDeposit () {
  var token = $.cookie('token') || '';
  var lang = $.cookie('lang') || '';
  if (selectKeyFromType('channel_type') === 2) {
    var mt4 = depositAccount !== 'wallet' ? Number(depositAccount) : "";
    var params = [
      'amount='+Number($(eleDeposit.payDepositAmount).val()),
      'platform='+selectKeyFromType('platform'),
      'mt4_id='+mt4,
      'bank_card_id='+depositBankId,
      'currency='+deoisitCurrency.currency,
      'lang='+lang,
      'token='+token
    ];
    window.location.href = setUrlParam(selectKeyFromType('url')) + params.join('&');
    return;
  }
  publicRequest('depositThird', 'POST', {
    amount: Number($(eleDeposit.payDepositAmount).val()),
    platform: selectKeyFromType('platform'),
    currency: deoisitCurrency.currency,
    mt4_id: depositAccount !== 'wallet' ? Number(depositAccount) : undefined
  }).then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (data.is_succ) {
      if (depositType === 'wallet') {
        $(eleDeposit.payDeposit).css("display", "none");
        $(eleDeposit.payDepositMsg).addClass('active');
        $(eleDeposit.payDepositMsg).find('.transfer').removeClass('active');
        $(eleDeposit.payDepositMsg).find('.wallet').addClass('active');
      } else {
        openLoadingMdl();
        window.location.href = setUrlParam(data.data.url) + 'token=' + token;
      }
    } else {
      showBackErr(data.message);
    }
  });
}
/*end*/
$(eleDeposit.payAccountBtn).on("tap", function (e) {
  openChangeAccountMdl({
    type: 'deposit',
    title: lang.text("thirdH5.rechargeTo"),
    currentAccount: depositAccount
  });
  return false;
});
$(eleDeposit.payTypeBtn).on("tap", openChangeDepositTypeMdl);
$(document).on("tap", "#third_app_bottom_template .deposit_type_item", function () {
  var cType = $(this).attr("data-type");
  var cAction = $(this).attr("data-action");
  // console.log(cAction);
  if (cAction === '2' || cType === depositType) return;
  $("#third_app_bottom_template .deposit_type_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
  changeDepositType(cType);
  return false;
});
$(document).on("tap", "#third_app_deposit_evidence_btn .btn", function () {
  var cAction = $(this).attr("data-action");
  closeAllMdl();
  if (cAction === 'evidence') {
    changePageIndex('3');
  }
  if (cAction === 'other') {
    openChangeDepositTypeMdl();
  } 
  return false;
});
$(eleDeposit.payTypeDetail).on("tap", function () {
  // console.log(depositTypeDetail[depositType].url);
  // openThirdNative({
  //   type: "openUrl",
  //   title: depositTypeDetail[depositType].text,
  //   url: depositTypeDetail[depositType].url
  // });
  window.location.href = depositTypeDetail[depositType].url;
  return false;
});
$(eleDeposit.payOmipay).find("span").on("tap", function () {
  $(eleDeposit.payDepositAmount).val($(this).attr("data-amount"));
  setDepositBtnStatus();
  return false;
});
$(eleDeposit.payDepositAmountWrapperMull).on("tap", "span", function () {
  $(eleDeposit.payDepositAmountWrapperMull).find("span").removeClass('active');
  $(this).addClass('active');
  $(eleDeposit.payDepositAmount).val($(this).attr("data-amount"));
  setDepositBtnStatus();
  return false;
});
$(eleDeposit.payTransferPic).find("input[name=file]").on('change', function(e) {
    var file = e.target.files[0];
    previewBase64(file, transferBase64);
    setTimeout(function () {
      // console.log(transferBase64);
      $(eleDeposit.payTransferPic).find(".img").empty().append(transferBase64.data);
      setDepositBtnStatus();
    }, 30);
});
//监听amout&bank
$(eleDeposit.payDepositAmount).on("input propertychange", function () {
  setDepositBtnStatus();
});
$(eleDeposit.payBankNo).on("input propertychange", function () {
  setDepositBtnStatus();
});
//选择银行卡
$(eleDeposit.paySelectBankBtn).on("tap", function () {
  openLoadingMdl();
  getBankLst({
    listType: 'bank_account',
    pageType: 'deposit',
    bankId: depositBankId,
    notInsertTemp: false
  });
  return false;
});

/*
 * 设置充值按钮状态
 * 需要调用的地方
 *    输入金额时、切换充值账号时、切换支付方式时、上传电汇凭证后、填写银行卡号、快捷支付点击金额时、转账选择银行卡后
 */
function setDepositBtnStatus () {
  var amount = Number($(eleDeposit.payDepositAmount).val());
  // console.log(amount, "f");
  //0.判断支付方式和充值账号
  if (!depositAccount || !depositType) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //1.入金凭证判断
  if (selectKeyFromType('evidence_status') !== 0) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //2.监听amout变化
  if (!amount || amount < selectKeyFromType('min') || (selectKeyFromType('max') < 0 || (selectKeyFromType('max') > 0 && amount > selectKeyFromType('max')))) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  };
  //3.钱包判断余额
  if (depositType === 'wallet' && amount > walletBalance) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //4.电汇判断凭证
  if (depositType === 'transfer' && !transferBase64.data) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //5.需要银行卡时判断银行卡信息
  if (selectKeyFromType('check_card') && !$(eleDeposit.payBankNo).val()) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //6.充值金额为100倍数
  if (depositType === 'omipay' && amount%100 !== 0) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  //7.转账
  if (selectKeyFromType('channel_type') === 2 && !depositBankId) {
    depositBtnStatus = false;
    $(eleDeposit.payDepositBtn).addClass('disabled');
    return;
  }
  depositBtnStatus = true;
  $(eleDeposit.payDepositBtn).removeClass('disabled');
}
//获取充值方式列表
function getDepositPlatform() {
  if (pageLoadStatus.deposit) return;
  publicRequest('getThirdDepositPlatform', 'GET', {os: os}).then(function (data) {
    // console.log(data);
    pageLoadStatus.deposit = true;
    if (!data) return;
    if (data.is_succ) {
      depositTypeLst = data.data;
      $.each(depositTypeLst, function (index, value) {
        if (value.default && !depositType) {
          changeDepositType(value.key);
        }
      });
    } else {
      pageLoadStatus.deposit = false;
    }
  });
}
//打开更改充值方式弹窗
function openChangeDepositTypeMdl () {
  var depositTemplate = {
    data: {
      title: lang.text("thirdH5.depositOptionsJ"),
      depositType: depositType,
      isToWallet: depositAccount === 'wallet' ? true : false,
      lst: depositTypeLst
    }
  }
  var html=bt('template_deposit_type',depositTemplate);
  $("#third_app_bottom_template").html(html);
  openBottomMdl();
  return false;
}
//更改充值方式
function changeDepositType (cType) {
  var desc = '', placeholder = '';
  depositType = cType;
  if (!cType) {
    $(eleDeposit.payTypeName).html(lang.text("thirdH5.pleaseSelect"));
    $(eleDeposit.payTypeTip).html(desc);
    $(eleDeposit.payDepositAmount).attr("placeholder", placeholder);
    setDepositBtnStatus();
    return;
  }
  deoisitCurrency = selectKeyFromType('currency')[0];
  //设置入金金额范围
  if (selectKeyFromType('min') > 0 && selectKeyFromType('max') > 0) {
    placeholder = selectKeyFromType('min')+"-"+selectKeyFromType('max')+"$";
  } else if (selectKeyFromType('min') > 0) {
    placeholder = lang.text("thirdH5.minimum")+selectKeyFromType('min')+"$";
  } else if (selectKeyFromType('max') > 0) {
    placeholder = lang.text("thirdH5.highest")+selectKeyFromType('max')+"$";
  }
  $(eleDeposit.payDepositAmount).attr("placeholder", placeholder);
  //支付方式name&tip
  if (depositType === 'wallet') {
    desc = lang.text("thirdH5.walletBalanceM") + '$'+walletBalance;
  } else {
    desc = selectKeyFromType('describe');
  }
  $(eleDeposit.payTypeName).html(selectKeyFromType('name'));
  $(eleDeposit.payTypeTip).html(desc);
  //支付方式details
  if (depositType === 'bank' || depositType === 'cse_wallet' || depositType === 'transfer') {
    $(eleDeposit.payTypeDetail).addClass('active');
    $(eleDeposit.payTypeDetail).html(depositTypeDetail[depositType].text+' >');
  } else {
    $(eleDeposit.payTypeDetail).removeClass('active');
  }
  //电汇凭证信息
  if (depositType === 'transfer') {
    $(eleDeposit.payTransferInfo).addClass('active');
  } else {
    $(eleDeposit.payTransferInfo).removeClass('active');
  }
  //网银提示信息
  if (depositType === 'bank') {
    $(eleDeposit.payInvestInfo).addClass('active');
  } else {
    $(eleDeposit.payInvestInfo).removeClass('active');
  }
  //设置快捷支付
  if (depositType === 'omipay') {
    $(eleDeposit.payOmipay).addClass('active');
  } else {
    $(eleDeposit.payOmipay).removeClass('active');
  }
  //设置汇率
  if (deoisitCurrency.currency !== 'USD') {
    $(eleDeposit.payCurrency).addClass('active');
    $(eleDeposit.payCurrency).find(".num").html(deoisitCurrency.rate_in);
    $(eleDeposit.payCurrency).find(".cur").html(deoisitCurrency.currency_name);
  } else {
    $(eleDeposit.payCurrency).removeClass('active');
  }
  //支付银行卡 0不需要 1需要 
  if (selectKeyFromType('check_card')) {
    $(eleDeposit.payBankName).html(personalInfo.realname);
    $(eleDeposit.payBankInfo).addClass('active');
  } else {
    $(eleDeposit.payBankInfo).removeClass('active');
  }
  //检测入金凭证
  if (selectKeyFromType('evidence_status') !== 0) {
    var depositTemplate = {
      data: {
        tip: selectKeyFromType('evidence_desc'),
        btnMsg: selectKeyFromType('evidence_status') === 1 ? lang.text("thirdH5.uploadVoucher") : lang.text("thirdH5.viewVoucher")
      }
    };
    var html=bt('template_deposit_upload_evidence',depositTemplate);
    $("#third_app_middle_template").html(html);
    openMiddleMdl();
  }
  //固定金额
  if (selectKeyFromType('amount_list').length) {
    $(eleDeposit.payDepositAmountWrapper).css({display: 'none'});
    $(eleDeposit.payDepositAmountWrapperMull).addClass('active');
    var html=bt('template_deposit_amount_list', {
      data: selectKeyFromType('amount_list')
    });
    $(eleDeposit.payDepositAmountWrapperMull).html(html);
    $(eleDeposit.payDepositAmount).val('');
  } else {
    $(eleDeposit.payDepositAmountWrapper).css({display: 'block'});
    $(eleDeposit.payDepositAmountWrapperMull).removeClass('active');
  }
  //转账
  if (selectKeyFromType('channel_type') === 2) {
    $(eleDeposit.paySelectBankInfo).addClass('active');
  } else {
    $(eleDeposit.paySelectBankInfo).removeClass('active');
  }
  setDepositBtnStatus();
}
//根据当前充值方式找到对应字段
function selectKeyFromType (name) {
  var result = null;
  $.each(depositTypeLst, function (index, value) {
    if (value.key === depositType) {
      result = value[name];
    }
  });
  return result;
}
//show Err
function showBackErr (msg) {
  $(eleDeposit.payDepositBtnTip).html(msg);
  $(eleDeposit.payDepositBtnTip).addClass('active');
}
//hide Err
function hideBackErr () {
  $(eleDeposit.payDepositBtnTip).html('');
  $(eleDeposit.payDepositBtnTip).removeClass('active');
}