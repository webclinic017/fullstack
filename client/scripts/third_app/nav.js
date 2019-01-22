var pageIndex;  //当前页面 1 deposit, 2 withdraw, 3 evidence
var elePage = { //page ID
  deposit: '#page_deposit',
  withdraw: '#page_withdraw',
  evidence: '#page_evidence'
};
var ele = {
  nav: '#third_app_nav'
};
var pageLoadStatus = {  //页面脏检测
  deposit: false,
  withdraw: false,
  evidence: false,
};
var tradeAccountType = [lang.text("thirdH5.experienceAccount"), lang.text("thirdH5.tradingAccount"), lang.text("thirdH5.copyAccounts"), lang.text("thirdH5.masterAccount")];
var walletBalance = 0;
var tradeAccountLst = [];
$(document).on("tap", '#third_app_bottom_template, #third_app_middle_template, #third_app_loading_template, #third_app_message_template', function (e) {
  e.stopPropagation();
  e.preventDefault();
  return false;
});
$(document).on("tap", "#third_app_template_wrapper, .third_app_template_cancel", closeAllMdl);

setTimeout(function () {
  changePageIndex();
  getTradeAccount();
  getWalletBalance();
},10);

$(ele.nav).find('span').on('tap', function () {
  var currentPage = $(this).attr("data-page");
  changePageIndex(currentPage);
  return false;
});
$(document).on("tap", "#third_app_bottom_template .account_item", function () {
  var cType = $(this).attr("data-type");
  var cAccount = $(this).attr("data-account");
  var cName = $(this).attr("data-name");
  var cTag = $(this).attr("data-tag");
  var cAmount = $(this).attr("data-amount");
  if ((cType === 'deposit' && cAccount == depositAccount) || (cType === 'withdraw' && cAccount == withdrawAccount)) return;
  $("#third_app_bottom_template .account_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
  selectAccount(cType, cAccount, cName, cTag, cAmount);
  return false;
});

//选择账户后操作
function selectAccount(cType, cAccount, cName, cTag, cAmount) {
  if (cType === 'deposit') {
    depositAccount = cAccount;
    $(eleDeposit.payAccountName).html(cName);
    $(eleDeposit.payAccountTag).html(cTag);
    setDepositBtnStatus();
    //为钱包充值时，支付方式不能为钱包
    if (cAccount === 'wallet' && depositType === 'wallet') changeDepositType();
  }
  if (cType === 'withdraw') {
    withdrawAccount = cAccount;
    var aName = cAccount === 'wallet' ? lang.text("thirdH5.wallet") : lang.text("thirdH5.account");
    $(eleWithdraw.payAccountName).html(cName);
    $(eleWithdraw.payAccountTag).html(cTag);
    $(eleWithdraw.payAccountAmout).addClass('active');
    $(eleWithdraw.payAccountAmout).find(".name").html(aName);
    $(eleWithdraw.payAccountAmout).find(".num").html(cAmount);
    canWithdrawAmount = Number(cAmount) || 0;
    //为钱包充值时，支付方式不能为钱包
    addWithdrawAccount();
    checkWithdrawLimit();
  }
}

//获取零钱包可用余额
function getWalletBalance () {
  publicRequest('getThirdWalletBalance', 'GET').then(function (data) {
    // console.log(data);
    if (!data) return;
    if (data.is_succ) {
      walletBalance = data.data;
    }
  });
}
//获取交易账户列表
function getTradeAccount () {
  publicRequest('getThirdTradeAccount', 'GET').then(function (data) {
    // console.log(data);
    if (!data) return;
    if (data.is_succ) {
      tradeAccountLst = data.data;
      var deposit = true;
      var withdraw = true;
      if(depositAccount || withdrawAccount) {
        $.each(tradeAccountLst, function(index, value) {
          if(value.mt4_id == depositAccount) {
            selectAccount('deposit', value.mt4_id, value.account_name, tradeAccountType[value.account_type] || '', value.balance);
            deposit = false;
          }
          if(value.mt4_id == withdrawAccount) {
            selectAccount('withdraw', value.mt4_id, value.account_name, tradeAccountType[value.account_type] || '', value.balance);
            withdraw = false;
          }
        })
      }
     
      if(deposit) {
        selectAccount('deposit', tradeAccountLst[0].mt4_id, tradeAccountLst[0].account_name, tradeAccountType[tradeAccountLst[0].account_type] || '', tradeAccountLst[0].balance);
      };
      if(withdraw) {
        selectAccount('withdraw', tradeAccountLst[0].mt4_id, tradeAccountLst[0].account_name, tradeAccountType[tradeAccountLst[0].account_type] || '', tradeAccountLst[0].balance);
      }

    }
  });
}
function changePageIndex (page) {
  pageIndex = page || "1";
  $(ele.nav).find('span').removeClass('active');
  $.each($(ele.nav).find('span'), function (index, value) {
    if ($(value).attr("data-page") == pageIndex) {
      $(value).addClass('active');
    }
  });
  $.each(elePage, function (index, value) {
    $(value).removeClass('active');
  });
  switch (pageIndex) {
    case "1":
      $(elePage.deposit).addClass('active');
      getDepositPlatform();
      break;
    case "2": 
      $(elePage.withdraw).addClass('active');
      getWithdrawPlatform();
      break;
    case "3": 
      $(elePage.evidence).addClass('active');
      changeEvidencePageIndex();
      break;
  }
}
//打开更改充值/提现帐号弹窗
function openChangeAccountMdl (msg) {
  // console.log(msg);
  var depositTemplate = {
    data: {
      type: msg.type,   //deposit 充值，withdraw 提现
      title: msg.title,
      currentAccount: msg.currentAccount,
      tradeAccountType: tradeAccountType,
      walletBalance: walletBalance,
      lst: tradeAccountLst
    }
  }
  var html=bt('template_deposit_account',depositTemplate);
  $("#third_app_bottom_template").html(html);
  openBottomMdl();
  return false;
}
//获取银行列表
function getBankLst (params) {
  /**
   * params
   *  listType      列表类型 bank_account、third_account
   *  pageType      页面类型  deposit、withdraw
   *  bankId        已选中的银行卡ID
   *  notInsertTemp 是否加载弹窗 true、false
   *  */
  var listType = params.listType || '';
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
  publicRequest.apply(this, different[listType].params).then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (!data) return;
    if (data.is_succ) {
      var bankLstTemplate = {
        data: {
          type: listType,
          pageType: params.pageType,
          id: params.bankId,
          lst: data.data
        }
      };
      if (listType === 'bank_account') {
        withdrawBankList = data.data;
      }

      if (params.notInsertTemp) return;
      var html=bt(different[listType].id, bankLstTemplate);
      $("#third_app_bottom_template").html(html);
      openBottomMdl();
    } else {
      openMessageMdl(data.message);
    }
  });
}
//银行卡or第三方 选择、删除、添加
$(document).on("tap", "#third_app_bottom_template .bank_item", function () {
  var cId = $(this).attr("data-id");
  var cNo = $(this).attr("data-no");
  var cName = $(this).attr("data-name");
  var cType = $(this).attr("data-type");
  var cSelectId = $(this).attr("data-select-id");
  var cPageType = $(this).attr("data-page");
  if (cId == cSelectId) return;
  $("#third_app_bottom_template .bank_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
  if (cPageType == 'withdraw') {
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
  }
  if (cPageType == 'deposit') {
    depositBankId = cId;
    var tp = cName+'('+cNo.substring(cNo.length-4)+')';
    $(eleDeposit.paySelectBankName).html(tp);
    setDepositBtnStatus();
  }
  return false;
});
$(document).on("tap", "#third_app_bottom_template .third_app_template_del_bank", function () {
  var cId = $(this).attr("data-id");
  var cSelectId = $(this).attr("data-select-id");
  var cType = $(this).attr("data-type");
  var cPageType = $(this).attr("data-page");
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
      openMessageMdl(lang.text("thirdH5.deleteSuccessful"), true);
      $("#third_app_bottom_template .bank_item[data-id="+cId+"]").remove();
      if (cPageType === 'withdraw' && cId == cSelectId) {
        withdrawType = undefined;
        withdrawBankId = undefined;
        $(eleWithdraw.payAccountLst).find("li").removeClass('active');
        $(eleWithdraw.payAccountLst).find("li[data-select=bank_chosen]").remove();
        setWithdrawBtnStatus();
      }
      if (cPageType === 'deposit' && cId == cSelectId) {
        depositBankId = undefined;
        $(eleDeposit.paySelectBankName).html(lang.text("thirdH5.bankCardTip"));
        setDepositBtnStatus();
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
      link: '/m/third/add_bank?world_code='+personalInfo.region.world_code
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
