$(document).ready(function () {

  var bt=baidu.template;
  var evidenceList = {};

  getEvidenceList();

  function getEvidenceList () {
    $.get('/napi', {
        action: 'get_deposit_evidence'
    }).then(function (data) {
        // console.log(data);
        evidenceList.data = data.data;
        //使用template模版
        var html=bt('template_list',evidenceList);
        $(".m_evidence__box").html(html);
    });
  }

  $(document).on('tap', '.m_evidence__item .title', function () {
    if ($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active');
    } else {
      $(this).parent().addClass('active');
    }
    return false;
  });

  $(".m_evidence__box").on('tap', 'img', function () {
    try {
      callNative({
        type: "openImage",
        url: window.location.origin + $(this).attr("src")
      });
    } catch (e) {}
    try {
      openThirdNative({
        type: "openImage",
        url: window.location.origin + $(this).attr("src")
      });
    } catch (e) {}
    return false;
  });
});