$(document).ready(function () {
  var osBlo = getSearch().os == 'web' ? true : false;
  var layerIndex;
  var isConfirm = false;
  var errMsg = '';
  var params = {
    order_no: getSearch().order_no,
    amount: $("#amount"),
    rec: $("#rec"),
    sender: $("#sender"),
    auth: $("#auth"),
    confirmBtn: $("#confirmBtn")
  };
  getOrderInfo();
  layerIndex = layer.open({type: 2})
  function getOrderInfo () {
    publicRequest(osBlo ? 'getLcpagOrderInfo' : 'getLcpagOrderInfoApp', 'GET', {
        order_no: params.order_no
    }).then(function (data) {
        layer.close(layerIndex);
        if (data.is_succ) {
            isConfirm = true;
            params.amount.html(data.data.amount);
            params.rec.html(data.data.recipient);
        } else {
          errMsg = data.message;
          layerMsg(errMsg);
        }
    })
  }

  params.confirmBtn.on("click", function () {
    if (!isConfirm) {
      layerMsg(errMsg);
      return;
    }
    layerIndex = layer.open({type: 2});
    publicRequest(osBlo ? 'postLcpagPay' : 'postLcpagPayApp', 'POST', {
      order_no: params.order_no,
      sender: params.sender.val(),
      auth: params.auth.val()
    }).then(function (data) {
        layer.close(layerIndex);
        if (data.is_succ) {
          if (osBlo) {
            location.href = '/space/#/space/asset/deposit'
          } else {
              location.href = '/m/deposit/success'
          }
        }else{
          layerMsg(data.message)
        }
    })
  });
});