(function () {
  var bt=baidu.template;
  var transferLst = [
    {
      name: '收款人名称（Company）：',
      cont: 'TFSL'
    },
    {
      name: '收款行所在国家（地区）：',
      cont: '澳大利亚AUSTRALIA'
    },
    {
      name: '收款人账号（Account）：',
      cont: '06443210678867'
    },
    {
      name: '收款银行机构鉴定代码（Swift）：',
      cont: 'CTBAAU2S (或CTBAAU2SXXX)'
    },
    {
      name: '收款人开户行（Bank）：',
      cont: 'COMMONWEALTH BANK OF AUSTRALIA SYDNEY'
    },
    {
      name: '银行地址（Address）：',
      cont: '201 SUSSEX STREET FLOOR 27 SYDNEY NSW 2000 AUSTRALIA'
    },
    {
      name: '清算号（BSB）：',
      cont: '064432'
    },
    {
      name: '收款人地址（Address）：',
      cont: 'No. 201  Church Street Sandyport P. O. Box SP 64638 Nassau, Bahamas'
    }
  ];
  var dataTemp = {
    data: transferLst
  };
  var html=bt('template_transfer_info',dataTemp);
  $(".third_app_static__transfer-details").html(html);

  $(document).on("tap", '.third_app_static__transfer-details .copy', function () {
    openThirdNative({
      type: "copy",
      content: $(this).attr("data-details"),
    });
    alert("复制成功");
    return false;
  });
})();