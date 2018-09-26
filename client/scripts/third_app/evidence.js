var pageEvidenceIndex;  //当前页面 1 待上传, 2 审核中, 0 审核成功
var evidenceUploadFiles = {};
var eleEvidence = {
  payNav: '#third_app_evidence_navbar',
  payEvidenceExample: '#third_app_evidence_example',
  pageEvidenceDetails: '#third_app_evidence_details',
  pageEvidenceDetailsDefault: '#third_app_evidence_details_default'
};

$(eleEvidence.payNav).find('span').on('tap', function () {
  var currentPage = $(this).attr("data-page");
  changeEvidencePageIndex(currentPage);
  return false;
});
$(eleEvidence.payEvidenceExample).on('tap', function () {
  console.log(window.location.origin + '/m/deposit/evidence');
  openThirdNative({
    type: "openUrl",
    title: '凭证示例',
    url: window.location.origin + '/m/deposit/evidence'
  });
  return false;
});
$(eleEvidence.pageEvidenceDetails).on('change', 'input[name=file]', function (e) {
  var file = e.target.files[0];
  var result = {
    data: false
  };
  var id = $(this).attr("data-id");
  var action = $(this).attr("data-action");
  previewBase64(file, result);
  setTimeout(function () {
    // console.log(result);
    evidenceUploadFiles[id][action] = result.data.src;
    $(".third_app_evidence_file_btn[data-id="+id+"]").removeClass('active');
    $(".third_app_evidence_submit_btn[data-id="+id+"]").addClass('active');
    insertFile(id);
  }, 30);
});
$(eleEvidence.pageEvidenceDetails).on('tap', '.third_app_evidence_submit_btn', function () {
  var id = $(this).attr('data-id');
  uploadEvidence(id);
  return false;
});
$(eleEvidence.pageEvidenceDetails).on('tap', '.third_app_evidence_cancel_btn', function () {
  var id = $(this).attr('data-id');
  cancelEvidence(id);
  return false;
});


//切换凭证状态
function changeEvidencePageIndex (page) {
  pageEvidenceIndex = page || "1";
  $(eleEvidence.payNav).find('span').removeClass('active');
  $.each($(eleEvidence.payNav).find('span'), function (index, value) {
    if ($(value).attr("data-page") == pageEvidenceIndex) {
      $(value).addClass('active');
    }
  });
  getEvidenceList();
}
//获取凭证列表
function getEvidenceList () {
  openLoadingMdl();
  publicRequest('getThirdEvidenceLst', 'GET', {
    status: pageEvidenceIndex,
    offset: 0,
    limit: 1000
  }).then(function (data) {
    // console.log(data);
    closeAllMdl();
    if (data.is_succ) {
      $(eleEvidence.pageEvidenceDetailsDefault).removeClass('active');
      var evidenceLst = {
        data: {
          lst: data.data.records,
          pageEvidenceIndex: pageEvidenceIndex
        }
      }
      var html=bt('template_evidence_list',evidenceLst);
      $(eleEvidence.pageEvidenceDetails).html(html);
      $.each(data.data.records, function (index, value) {
        evidenceUploadFiles[value.id] = value.pic ? value.pic : [];
        insertFile(value.id);
      });
      if (!data.data.records.length) {
        $(eleEvidence.pageEvidenceDetailsDefault).addClass('active');
      }
    } else {
      $(eleEvidence.pageEvidenceDetailsDefault).addClass('active');
    }
  });
} 
//更新凭证文件
function insertFile (id) {
  var filseLst = {
    data: {
      fileImages: evidenceUploadFiles[id],
      id: id
    }
  }
  var temp = pageEvidenceIndex === '1' ? 'template_evidence_list_item' : 'template_evidence_list_item_2';
  var html=bt(temp,filseLst);
  $(document).find('.op-append-file[data-id='+id+']').html(html);
  // console.log(id, evidenceUploadFiles);
}
//提交凭证
function uploadEvidence (id) {
  openLoadingMdl();
  var arr = [];
  $.each(evidenceUploadFiles[id], function (index, value) {
    arr.push(value.split(',')[1]);
  });
  publicRequest('uploadThirdEvidence', 'POST', {
    file: arr,
    id: id
  }).then(function (data) {
    closeAllMdl();
    // console.log(data);
    if (data.is_succ) {
      changeEvidencePageIndex('1');
      openMessageMdl('提交成功');
    } else {
      openMessageMdl(data.message);
    }
  });
}
//取消凭证
function cancelEvidence (id) {
  openLoadingMdl();
  publicRequest('cancelThirdEvidence', 'POST', {
    id: id
  }).then(function (data) {
    closeAllMdl();
    console.log(data);
    if (data.is_succ) {
      changeEvidencePageIndex('2');
      openMessageMdl('撤销成功');
    } else {
      openMessageMdl(data.message);
    }
  });
}

