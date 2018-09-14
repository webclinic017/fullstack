var withdrawTypeLst = {};  //支付方式列表
var withdrawAccount; //当前选择支付账号 交易账户为mt4 ID，零钱包设置为wallet
var eleWithdraw = {
  payAccountBtn: '#third_app_withdraw_account_btn',
  payAccountName: '#third_app_withdraw_account_name',
  payAccountTag: '#third_app_withdraw_account_tag',
  payAccountAmout: '#third_app_withdraw_account_amount',
  payAccountLst: '#third_app_withdraw_account_list'
};


$(eleWithdraw.payAccountBtn).on("tap", function (e) {
  openChangeAccountMdl({
    type: 'withdraw',
    title: '提现账户',
    currentAccount: withdrawAccount
  });
  return false;
});

function getWithdrawPlatform () {
  if (pageLoadStatus.withdraw) return;
  publicRequest('getThirdWithdrawPlatform', 'GET').then(function (data) {
    // console.log(data);
    pageLoadStatus.withdraw = true;
    if (!data) return;
    if (data.is_succ) {
      console.log(data);
      addWithdrawAccount(data.data);
    } else {
      pageLoadStatus.withdraw = false;
    }
  });
}

//提现列表
function addWithdrawAccount (lst) {
  var withdrawTemplate = {
    data: {
      lst: lst
    }
  }
  var html=bt('template_withdraw_account_type',withdrawTemplate);
  $(eleWithdraw.payAccountLst).html(html);
}