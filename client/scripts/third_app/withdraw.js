var withdrawLimit = true;  //出金限制 false 不限制, true 限制
var withdrawTypeLst = {};  //提现到列表
var withdrawAccount; //当前选择提现账号 交易账户为mt4 ID，零钱包设置为wallet
var withdrawType;   //当前选择提现到账号
var withdrawBankList;   //当前选择提现到银行卡列表
var withdrawBankId;   //当前选择提现到银行卡ID
var withdrawBtnStatus = false; //提现按钮状态
var canWithdrawAmount = 0; //可提现金额
var min_amount = 20; // 最小提现金额（来自接口）
var minAmount = min_amount;   // 最小提现金额(用于项目)
var withdrawNotice = ''; //提现提示语
var isCashIn = -1; //是否入金
var thirdThirdType = '';  // 第三方平台ID-出金接口的third_type参数
var thirdThirdAccount = '';  // 完整账号-出金接口的third_account参数
var thirdThirdWithdrawType = '';  // 第三方出金时withdraw_type参数 为1时需要银行卡
var thirdThirdWithdrawBankId = '';  // 第三方出金时withdraw_type参数为1时银行卡ID
var eleWithdraw = {
  payWithdraw: '#third_app_withdraw',
  payWithdrawMsg: '#third_app_withdraw_message',
  payWithdrawMsgBtn: '#third_app_withdraw_message_btn',
  payAccountBtn: '#third_app_withdraw_account_btn',
  payAccountName: '#third_app_withdraw_account_name',
  payAccountTag: '#third_app_withdraw_account_tag',
  payAccountAmout: '#third_app_withdraw_account_amount',
  payAccountLst: '#third_app_withdraw_account_list',
  payWithdrawBtn: '#third_app_withdraw_btn',
  payWithdrawAmount: '#third_app_withdraw_amount',
  payWithdrawLLimit: '#third_app_withdraw_limit',
  payWithdrawSubmitBtn: '#withdraw_submit_btn',
  payAccountLstBankAdd: "#third_app_withdraw__bank_add"
};
/*
 * 提现
 */
$(eleWithdraw.payWithdrawBtn).on("tap", function () {
  if (!withdrawBtnStatus) return;
  if (withdrawType === 'wallet') {
    submitWithdraw();
  } else {
    confirmWithdraw();
  }
  $("input").blur();
  return false;
});
$(eleWithdraw.payWithdrawMsgBtn).on("tap", function () {
  $(eleWithdraw.payWithdrawAmount).val('');
  $(eleWithdraw.payWithdraw).css("display", "block");
  $(eleWithdraw.payWithdrawMsg).removeClass('active');
  return false;
});
$(document).on("tap", eleWithdraw.payWithdrawSubmitBtn, function () {
  closeAllMdl();
  submitWithdraw();
  return false;
});

function confirmWithdraw() {
  if (withdrawType === 'bank_account') {
    if (!checkCardPhone(withdrawBankId)) {
      return
    }
  }
  if (withdrawType === 'third_account' && thirdThirdWithdrawType == 1) {
    if (!checkCardPhone(thirdThirdWithdrawBankId)) { return }
  }
  var amount = Number($(eleWithdraw.payWithdrawAmount).val()).toFixed(2);
  var amountCur = (amount * selectKeyFromTypeForWithdraw('currency')[0].rate_out).toFixed(2);
  var depositTemplate = {
    data: {
      type: 'withdraw',
      rate: selectKeyFromTypeForWithdraw('currency')[0].rate_out,
      currencySymbol: selectKeyFromTypeForWithdraw('currency')[0].currency_symbol,
      currencyName: selectKeyFromTypeForWithdraw('currency')[0].currency_name,
      desc: withdrawNotice,
      amountDollar: amount,
      amountCur: amountCur,
      amountTotal: amountCur
    }
  }
  var html = bt('template_asset_confirm', depositTemplate);
  $("#third_app_bottom_template").html(html);
  openBottomMdl();
}
function submitWithdraw() {
  openLoadingMdl();
  var params = {
    amount: Number($(eleWithdraw.payWithdrawAmount).val()),
    currency: selectKeyFromTypeForWithdraw('currency')[0].currency,
    mt4_id: withdrawAccount !== 'wallet' ? withdrawAccount : undefined,
  }
  if (withdrawType === 'wallet') {
    params.third_type = selectKeyFromTypeForWithdraw('platform');
  } else if (withdrawType === 'bank_account') {
    params.bank_card_id = withdrawBankId;

  } else if (withdrawType === 'third_account') {
    params.third_type = thirdThirdType;
    params.third_account = thirdThirdAccount;
    if (thirdThirdWithdrawType == 1) {
      params.bank_card_id = thirdThirdWithdrawBankId;
    }

  } else if (withdrawType === 'transfer') {
    params.third_type = selectKeyFromTypeForWithdraw('platform');
    params.bank_card_id = withdrawBankId;
  }

  publicRequest('withdrawThird', 'POST', params).then(function (data) {
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      $(eleWithdraw.payWithdraw).css("display", "none");
      $(eleWithdraw.payWithdrawMsg).addClass('active');
      if (withdrawType === 'wallet') {
        $(eleWithdraw.payWithdrawMsg).find('.bank').removeClass('active');
        $(eleWithdraw.payWithdrawMsg).find('.wallet').addClass('active');
      }
      if (withdrawType === 'bank_account' || withdrawType === 'third_account' || withdrawType === 'transfer') {
        $(eleWithdraw.payWithdrawMsg).find('.wallet').removeClass('active');
        $(eleWithdraw.payWithdrawMsg).find('.bank').addClass('active');
      }
    } else {
      openMessageMdl(data.message);
    }
  });
}
/*
 * end
 */

$(eleWithdraw.payAccountBtn).on("tap", function (e) {
  openChangeAccountMdl({
    type: 'withdraw',
    title: lang.text("thirdH5.withdrawAccountJ"),
    currentAccount: withdrawAccount
  });
  return false;
});
$(eleWithdraw.payAccountLst).on("tap", "li", function () {
  var cType = $(this).attr("data-type");
  // console.log(cType);
  if (cType === 'wallet') {
    if (cType === withdrawType) return;
    $(eleWithdraw.payAccountLst).find("li").removeClass('active');
    $(this).addClass('active');
    withdrawType = cType;
    withdrawBankId = undefined;
    $(eleWithdraw.payAccountLst).find("li[data-select=bank_chosen]").remove();
    $(eleWithdraw.payAccountLstBankAdd).empty();
    minAmount = 0.01;
    $(eleWithdraw.payWithdrawAmount).prop('placeholder', lang.text('thirdH5.minimum') + minAmount + '$');
    setWithdrawBtnStatus();
  } else {
    openLoadingMdl();
    getBankLst({
      listType: cType,
      pageType: 'withdraw',
      bankId: withdrawBankId,
      third_type: thirdThirdType,   // 第三方无账号平台需要
      notInsertTemp: false
    });
  }
  $("input").blur();
  return false;
});
// 当第三方账号withdraw_type为1时需要添加银行卡
$(eleWithdraw.payAccountLstBankAdd).on("tap", ".bank-account", function () {
  var cType = $(this).attr("data-type");
  // console.log(cType)
  openLoadingMdl();
  getBankLst({
    listType: cType,
    pageType: 'withdraw',
    bankId: thirdThirdWithdrawBankId,
    notInsertTemp: false,
    source: 'withdraw_type'   // 来源
  });
  $("input").blur();
  return false;
})
//监听amout
$(eleWithdraw.payWithdrawAmount).on("input propertychange", function () {
  setWithdrawBtnStatus();
});

function checkWithdrawLimit() {
  $(eleWithdraw.payWithdrawLLimit).removeClass('active');
  publicRequest('checkThirdWithdrawLimit', 'GET', {
    mt4_id: withdrawAccount !== 'wallet' ? withdrawAccount : undefined,
  }).then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      if (data.data.status == 0) {
        $(eleWithdraw.payAccountAmout).removeClass('active');
        $(eleWithdraw.payWithdrawLLimit).html(data.data.status_message)
        $(eleWithdraw.payWithdrawLLimit).addClass('active');
        openMessageMdl(data.data.status_message)
        withdrawLimit = true;
      } else {
        min_amount = data.data.min_amount;
        withdrawNotice = data.data.notice;
        isCashIn = data.data.bonus
        withdrawLimit = false;
      }
      setWithdrawBtnStatus();
    }
  });
}

// 检查银行卡绑定情况
function checkCardPhone(card) {
  var cardInfo = null;
  // console.log(card, withdrawBankList);
  $.each(withdrawBankList, function (index, value) {
    if (card == value.id) {
      cardInfo = value;
    }
  });
  if (cardInfo.country_code === 'CN' && !cardInfo.phone) {
    var html = bt('template_withdraw_bind_bank_phone', {
      data: {
        bankName: cardInfo.bank_name,
        bankCard: cardInfo.card_no
      }
    });
    $("#third_app_bottom_template").html(html);
    openBottomMdl();
    return false;
  } else {
    return true
  }
}
$(document).on('tap', '#bind_bank_phone_card', function () {
  $(this).focus();
});
$(document).on('tap', '#bind_bank_phone_btn', function () {
  // console.log($('#bind_bank_phone_card').val());
  var val = $('#bind_bank_phone_card').val();
  if (!val) return;
  closeAllMdl();
  openLoadingMdl(true);
  publicRequest('bindCardPhone', 'POST', {
    id: withdrawBankId,
    phone: val
  }).then(function (data) {
    closeAllMdl();
    // console.log(data);
    if (!data) return;
    if (data.is_succ) {
      openMessageMdl(lang.text("thirdH5.addSuccess"));
      getBankLst({
        listType: withdrawType,
        pageType: 'withdraw',
        bankId: withdrawBankId,
        notInsertTemp: true
      });
    } else {
      openMessageMdl(data.message);
    }
  });
});

/*
 * 设置提现按钮状态
 * 需要调用的地方
 *    输入金额时、选择提现到账号后、删除当前选择银行卡后
 *
 * 由于切换提现账号后，提现到账号要清空，所以切换提现账号时不用设置，在渲染列表后需要调用一次
 */
function setWithdrawBtnStatus() {
  var amount = Number($(eleWithdraw.payWithdrawAmount).val());
  // console.log(amount, canWithdrawAmount, withdrawType, withdrawAccount);
  if (withdrawLimit) {
    withdrawBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  }
  //0.判断提现账号和提现到账号
  if (!withdrawType || !withdrawAccount) {
    withdrawBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  }
  if (withdrawType === 'third_account' && thirdThirdWithdrawType == 1) {
    if (!thirdThirdWithdrawBankId) {
      withdrawBtnStatus = false;
      $(eleWithdraw.payWithdrawBtn).addClass('disabled');
      return;
    }
  }
  //1.监听amout变化
  if (!amount || amount < minAmount || amount > canWithdrawAmount) {
    depositBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  };

  withdrawBtnStatus = true;
  $(eleWithdraw.payWithdrawBtn).removeClass('disabled');
}

function getWithdrawPlatform() {
  if (pageLoadStatus.withdraw) return;
  publicRequest('getThirdWithdrawPlatform', 'GET').then(function (data) {
    // console.log(data);
    pageLoadStatus.withdraw = true;
    if (!data) return;
    if (data.is_succ) {
      withdrawTypeLst = data.data;
      addWithdrawAccount();
    } else {
      pageLoadStatus.withdraw = false;
    }
  });
}

//添加提现列表
function addWithdrawAccount() {
  var withdrawTemplate = {
    data: {
      isToWallet: withdrawAccount === 'wallet' ? true : false,
      lst: withdrawTypeLst
    }
  }
  var html = bt('template_withdraw_account_type', withdrawTemplate);
  $(eleWithdraw.payAccountLst).html(html);
  //重新渲染提现到列表时，已选择的提现到账号一律清空重置
  withdrawType = undefined;
  withdrawBankId = undefined;
  thirdThirdType = '';
  thirdThirdAccount = '';
  thirdThirdWithdrawBankId = '';
  thirdThirdWithdrawType = '';
  $(eleWithdraw.payAccountLstBankAdd).empty();
  setWithdrawBtnStatus();
}
//根据当前充值方式找到对应字段
function selectKeyFromTypeForWithdraw(name) {
  var result = null;
  $.each(withdrawTypeLst, function (index, value) {
    if (value.key === withdrawType) {
      result = value[name];
    }
  });
  return result;
}
