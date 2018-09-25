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
var tradeAccountType = ["体验金账号", "自主交易账号", "跟随账号", "高手账号"];
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
  if ((cType === 'deposit' && cAccount == depositAccount) || (cType === 'withdraw' && cAccount == withdrawAccount)) return;
  $("#third_app_bottom_template .account_item").removeClass('active');
  $(this).addClass('active');
  closeAllMdl();
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
    var aName = cAccount === 'wallet' ? '钱包' : '账户';
    $(eleWithdraw.payAccountName).html(cName);
    $(eleWithdraw.payAccountTag).html(cTag);
    $(eleWithdraw.payAccountAmout).addClass('active');
    $(eleWithdraw.payAccountAmout).find(".name").html(aName);
    $(eleWithdraw.payAccountAmout).find(".num").html($(this).attr("data-amount"));
    canWithdrawAmount = Number($(this).attr("data-amount")) || 0;
    //为钱包充值时，支付方式不能为钱包
    addWithdrawAccount();
    checkWithdrawLimit();
  }
  return false;
});

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
