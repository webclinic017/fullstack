var withdrawTypeLst = {};  //提现到列表
var withdrawAccount; //当前选择提现账号 交易账户为mt4 ID，零钱包设置为wallet
var withdrawType;   //当前选择提现到帐号
var withdrawBankId;   //当前选择提现到银行卡ID
var withdrawBtnStatus = false; //提现按钮状态
var canWithdrawAmount = 0; //可提现金额
var eleWithdraw = {
  payAccountBtn: '#third_app_withdraw_account_btn',
  payAccountName: '#third_app_withdraw_account_name',
  payAccountTag: '#third_app_withdraw_account_tag',
  payAccountAmout: '#third_app_withdraw_account_amount',
  payAccountLst: '#third_app_withdraw_account_list',
  payWithdrawBtn: '#third_app_withdraw_btn',
  payWithdrawAmount: '#third_app_withdraw_amount',
};
/*
 * 提现
 */
$(eleWithdraw.payWithdrawBtn).on("tap", function () {
  if (!withdrawBtnStatus) return;
  openLoadingMdl();
  
  return false;
});
/*
 * end
 */

$(eleWithdraw.payAccountBtn).on("tap", function (e) {
  openChangeAccountMdl({
    type: 'withdraw',
    title: '提现账户',
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
    $(eleWithdraw.payAccountLst).find("li[data-type=bank_select]").remove();
    setWithdrawBtnStatus();
  } else {
    openLoadingMdl();
    getBankLst();
  }
  return false;
});
$(document).on("tap", "#third_app_bottom_template .bank_item", function () {
  var cId = $(this).attr("data-id");
  var cNo = $(this).attr("data-no");
  var cName = $(this).attr("data-name");
  if (cId == withdrawBankId) return;
  $("#third_app_bottom_template .bank_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
  withdrawType = 'bank_account';
  withdrawBankId = cId;
  var tp = '<li class="s-select" data-type="bank_select"><p>'+cName+'('+cNo.substring(cNo.length-4)+')'+'</p></li>';
  $(eleWithdraw.payAccountLst).find("li").removeClass('active');
  $(eleWithdraw.payAccountLst).find("li[data-type=bank_account]").addClass('active').after(tp);
  return false;
});
//监听amout
$(eleWithdraw.payWithdrawAmount).on("input propertychange", function () {
  setWithdrawBtnStatus();
});

/*
 * 设置提现按钮状态
 * 需要调用的地方
 *    输入金额时、选择提现到帐号后
 *
 * 由于切换提现帐号后，提现到帐号要清空，所以切换提现帐号时不用设置，在渲染列表后需要调用一次
 */
function setWithdrawBtnStatus () {
  var amount = Number($(eleWithdraw.payWithdrawAmount).val());
  // console.log(amount, canWithdrawAmount, withdrawType, withdrawAccount);
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
  setWithdrawBtnStatus();
}
//获取银行列表
function getBankLst () {
  publicRequest('getThirdBankLst', 'GET').then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      var bankLstTemplate = {
        data: {
          id: withdrawBankId,
          lst: data.data
        }
      };
      var html=bt('template_withdraw_bank_list',bankLstTemplate);
      $("#third_app_bottom_template").html(html);
      openBottomMdl();
    } else {
      openMessageMdl(data.message);
    }
  });
}