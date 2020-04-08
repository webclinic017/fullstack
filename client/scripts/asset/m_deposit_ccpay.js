$(document).ready(function () {
  var linkInfo = {
    BTC_USDT: null,
    ETH_USDT: null
  };
  var platform = $('.m_deposit_ccpay').attr('data-platform');
  layer.open({type: 2});
  getCCpayAddress();

  $('.btn-create').on('click', function () {
    layer.open({type: 2});
    var symbol = $(this).attr('data-symbol');
    publicRequest(platform === 'mobile' ? 'createCCpayAddressForApp' :'createCCpayAddress', 'POST', {
      symbol: symbol //BTC_USDT、ETH_USDT
    }).then(function (data) {
      // console.log(data);
      layer.closeAll();
      if (data.is_succ) {
        linkInfo[symbol] = data.data[symbol] || null;
      } else {
        layerMsg(data.message);
      }
    })
  })

  function getCCpayAddress () {
    publicRequest(platform === 'mobile' ? 'getCCpayAddressForApp' :'getCCpayAddress', 'GET').then(function (data) {
        // console.log(data);
        layer.closeAll();
        if (data.is_succ) {
          linkInfo = data.data;
          setLinkInfo();
        }
    })
  }
  function setLinkInfo () {
    for (var key in linkInfo) {
      if (linkInfo[key]) {
        $('.btn-create[data-symbol='+key+']').addClass('none');
        $('.link_info[data-symbol='+key+'] span').html(linkInfo[key]);
        $('.link_info[data-symbol='+key+'] input').val(linkInfo[key]);
        $('.link_info[data-symbol='+key+']').addClass('active');
      }
    }
  }

  $(document).on('click', '.btn-copy', function () {
    var key = $(this).attr('data-symbol');
    $('.link_info[data-symbol='+key+'] input').select();
    document.execCommand("Copy");
    layerMsg($('.copy_text').html());
    $('.link_info[data-symbol='+key+'] input').blur();
  });
});