(function () {
  var bt=baidu.template;
  var transferLst = [
    {
      name: lang.text("thirdH5.beneficiaryName"),
      cont: 'TFSL'
    },
    {
      name: lang.text("thirdH5.beneficiaryBank"),
      cont: lang.text("thirdH5.australia")
    },
    {
      name: lang.text("thirdH5.beneA_CNo"),
      cont: '06443210678867'
    },
    {
      name: lang.text("thirdH5.swift"),
      cont: 'CTBAAU2S (CTBAAU2SXXX)'
    },
    {
      name: lang.text("thirdH5.beneficiaryBankName"),
      cont: 'COMMONWEALTH BANK OF AUSTRALIA SYDNEY'
    },
    {
      name: lang.text("thirdH5.beneficiaryBankAddress"),
      cont: '201 SUSSEX STREET FLOOR 27 SYDNEY NSW 2000 AUSTRALIA'
    },
    {
      name: lang.text("thirdH5.bsb"),
      cont: '064432'
    },
    {
      name: lang.text("thirdH5.beneficiaryAddress"),
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
    alert(lang.text("thirdH5.copySuccess"));
    return false;
  });
})();