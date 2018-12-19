var withdrawLimit = true;  //出金限制 false 不限制, true 限制
var withdrawTypeLst = {};  //提现到列表
var withdrawAccount; //当前选择提现账号 交易账户为mt4 ID，零钱包设置为wallet
var withdrawType;   //当前选择提现到帐号
var withdrawBankId;   //当前选择提现到银行卡ID
var withdrawBtnStatus = false; //提现按钮状态
var canWithdrawAmount = 0; //可提现金额
var withdrawNotice = ''; //提现提示语
var thirdThirdType = '';  // 第三方平台ID-出金接口的third_type参数
var thirdThirdAccount = '';  // 完整账号-出金接口的third_account参数
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
  payWithdrawSubmitBtn: '#withdraw_submit_btn'
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
  return false;
});
$(eleWithdraw.payWithdrawMsgBtn).on("tap", function () {
  $(eleWithdraw.payWithdraw).css("display", "block");
  $(eleWithdraw.payWithdrawMsg).removeClass('active');
  return false;
});
$(document).on("tap", eleWithdraw.payWithdrawSubmitBtn, function () {
  closeAllMdl();
  submitWithdraw();
  return false;
});

function confirmWithdraw () {
  var amount = Number($(eleWithdraw.payWithdrawAmount).val()).toFixed(2);
  var amountCur = (amount*selectKeyFromTypeForWithdraw('currency')[0].rate_out).toFixed(2);
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
  var html=bt('template_asset_confirm',depositTemplate);
  $("#third_app_bottom_template").html(html);
  openBottomMdl();
}
function submitWithdraw () {
  openLoadingMdl();
  var params = {
    amount: Number($(eleWithdraw.payWithdrawAmount).val()),
    currency: selectKeyFromTypeForWithdraw('currency')[0].currency,
    mt4_id: withdrawAccount !== 'wallet' ? withdrawAccount : undefined,
  }
  if(withdrawType === 'wallet') {
    params.third_type = selectKeyFromTypeForWithdraw('platform');
  } else if(withdrawType === 'bank_account') {
    params.bank_card_id = withdrawBankId;

  } else if(withdrawType === 'third_account'){
    params.third_type = thirdThirdType;
    params.third_account = thirdThirdAccount;
  }
  publicRequest('withdrawThird', 'POST', params).then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      $(eleWithdraw.payWithdraw).css("display", "none");
      $(eleWithdraw.payWithdrawMsg).addClass('active');
      if (withdrawType === 'wallet') {
        $(eleWithdraw.payWithdrawMsg).find('.bank').removeClass('active');
        $(eleWithdraw.payWithdrawMsg).find('.wallet').addClass('active');
      }
      if (withdrawType === 'bank_account' || withdrawType === 'third_account') {
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
    title: thirdH5.withdrawAccountJ,
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
    setWithdrawBtnStatus();
  } else {
    openLoadingMdl();
    getBankLst(cType);
  }
  return false;
});
$(document).on("tap", "#third_app_bottom_template .bank_item", function () {
  var cId = $(this).attr("data-id");
  var cNo = $(this).attr("data-no");
  var cName = $(this).attr("data-name");
  var cType = $(this).attr("data-type");
  if (cId == withdrawBankId) return;
  $("#third_app_bottom_template .bank_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
  withdrawType = cType;
  withdrawBankId = cId;
  if(withdrawType == 'third_account') {
    thirdThirdType = $(this).attr("data-third-type");
    thirdThirdAccount = $(this).attr("data-third-account");
  }
  var tp = '<li class="s-select" data-select="bank_chosen" data-type="'+ cType +'"><p>'+cName+'('+cNo.substring(cNo.length-4)+')'+'</p></li>';
  $(eleWithdraw.payAccountLst).find("li[data-select=bank_chosen]").remove();
  $(eleWithdraw.payAccountLst).find("li").removeClass('active');
  $(eleWithdraw.payAccountLst).find("li[data-type="+ withdrawType +"]").addClass('active').after(tp);
  setWithdrawBtnStatus();
  return false;
});
$(document).on("tap", "#third_app_bottom_template .third_app_template_del_bank", function () {
  var cId = $(this).attr("data-id");
  var cType = $(this).attr("data-type");
  openLoadingMdl();
  var different = {
    'bank_account': {
      params: ['delThirdBank', 'POST', {id: cId}]
    },
    'third_account': {
      params: ['destroyThirdAccount', 'POST', {id: cId}]
    }
  }
  publicRequest.apply(this, different[cType].params).then(function (data) {
    // console.log(data);
    $("#third_app_loading_template").removeClass('active');
    if (!data) return;
    if (data.is_succ) {
      openMessageMdl(thirdH5.deleteSuccessful, true);
      $("#third_app_bottom_template .bank_item[data-id="+cId+"]").remove();
      if (cId == withdrawBankId) {
        withdrawType = undefined;
        withdrawBankId = undefined;
        $(eleWithdraw.payAccountLst).find("li").removeClass('active');
        $(eleWithdraw.payAccountLst).find("li[data-select=bank_chosen]").remove();
        setWithdrawBtnStatus();
      }
    } else {
      openMessageMdl(data.message, true);
    }
  });
  return false;
});
$(document).on("tap", "#third_app_bottom_template .third_app_add_card", function () {
  var cType = $(this).attr("data-type");
  closeAllMdl();
  var different = {
    'bank_account': {
      link: '/m/third/add_bank'
    },
    'third_account': {
      link: '/m/third/add_third'
    }
  }
  // openThirdNative({
  //   type: "openUrl",
  //   title: "添加银行卡",
  //   url: window.location.origin + '/m/third/add_bank'
  // });
  window.location.href= different[cType].link;
  return false;
});
//监听amout
$(eleWithdraw.payWithdrawAmount).on("input propertychange", function () {
  setWithdrawBtnStatus();
});

function checkWithdrawLimit () {
  $(eleWithdraw.payWithdrawLLimit).removeClass('active');
  publicRequest('checkThirdWithdrawLimit', 'GET', {
    mt4_id: withdrawAccount !== 'wallet' ? withdrawAccount : undefined
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
        withdrawNotice = data.data.notice;
        withdrawLimit = false;
      }
      setWithdrawBtnStatus();
    }
  });
}

/*
 * 设置提现按钮状态
 * 需要调用的地方
 *    输入金额时、选择提现到帐号后、删除当前选择银行卡后
 *
 * 由于切换提现帐号后，提现到帐号要清空，所以切换提现帐号时不用设置，在渲染列表后需要调用一次
 */
function setWithdrawBtnStatus () {
  var amount = Number($(eleWithdraw.payWithdrawAmount).val());
  // console.log(amount, canWithdrawAmount, withdrawType, withdrawAccount);
  if (withdrawLimit) {
    withdrawBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  }
  //0.判断提现帐号和提现到帐号
  if (!withdrawType || !withdrawAccount) {
    withdrawBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  }
  //1.监听amout变化
  if (!amount || amount < 20 || amount > canWithdrawAmount) {
    depositBtnStatus = false;
    $(eleWithdraw.payWithdrawBtn).addClass('disabled');
    return;
  };

  withdrawBtnStatus = true;
  $(eleWithdraw.payWithdrawBtn).removeClass('disabled');
}

function getWithdrawPlatform () {
  if (pageLoadStatus.withdraw) return;
  publicRequest('getThirdWithdrawPlatform', 'GET').then(function (data) {
    // console.log(data);
    pageLoadStatus.withdraw = true;
    if (!data) return;
    if (data.is_succ) {
      // console.log(data);
      withdrawTypeLst = data.data;
      addWithdrawAccount();
    } else {
      pageLoadStatus.withdraw = false;
    }
  });
}

//添加提现列表
function addWithdrawAccount () {
  var withdrawTemplate = {
    data: {
      isToWallet: withdrawAccount === 'wallet' ? true : false,
      lst: withdrawTypeLst
    }
  }
  var html=bt('template_withdraw_account_type',withdrawTemplate);
  $(eleWithdraw.payAccountLst).html(html);
  //重新渲染提现到列表时，已选择的提现到帐号一律清空重置
  withdrawType = undefined;
  withdrawBankId = undefined;
  setWithdrawBtnStatus();
}
//获取银行列表
function getBankLst (withdrawType) {
  var withdrawType = withdrawType || '';
  var different = {
    'bank_account': {
      id: 'template_withdraw_bank_list',
      params: ['getThirdBankLst', 'GET']
    },
    // 获取第三方账号列表
    'third_account': {
      id: 'template_withdraw_third_list',
      params: ['getThirdAccountList', 'GET', {limit: 100}]
    }
  }
  // apply将数组转为参数传递
  publicRequest.apply(this, different[withdrawType].params).then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      var bankLstTemplate = {
        data: {
          type: withdrawType,
          id: withdrawBankId,
          lst: data.data
        }
      };

      var html=bt(different[withdrawType].id, bankLstTemplate);
      $("#third_app_bottom_template").html(html);
      openBottomMdl();
    } else {
      openMessageMdl(data.message);
    }
  });
}
//根据当前充值方式找到对应字段
function selectKeyFromTypeForWithdraw (name) {
  var result = null;
  $.each(withdrawTypeLst, function (index, value) {
    if (value.key === withdrawType) {
      result = value[name];
    }
  });
  return result;
}