var bt=baidu.template;
var timer = null;
var personalInfo = {};
var thirdToken = getUrlParam("token") || '';
var os = getUrlParam("os") || '';

if (thirdToken) {
  $.cookie("token", thirdToken , { path: '/', domain: '.tigerwit.com'});
}

setTimeout(function () {
  getUserInfo();
}, 10);

//获取用户基本信息
function getUserInfo () {
  publicRequest('getThirdInfo', 'GET').then(function (data) {
    if (!data) return;
    if (data.is_succ) {
      personalInfo = data.data;
      refreshBankInfo && refreshBankInfo(); //添加银行卡页面更新姓名和国家
    }
  });
}
//处理时间戳
function dealTimestamp (timestamp) {
  var date = new Date(timestamp*1000);
  return date.getFullYear()+'-'+toDou(date.getMonth()+1)+'-'+toDou(date.getDate())+' '+toDou(date.getHours())+':'+toDou(date.getMinutes());
}
function toDou (n) {
  return n > 10 ? ''+n : '0'+n;
}
function closeAllMdl() {
  console.log('close');
  timer = setTimeout(function () {
    $("#third_app_template_wrapper").removeClass('active');
  }, 200);
  $("#third_app_bottom_template").css("bottom", "-400px");
  $("#third_app_middle_template").css({
    top: '100%',
    marginTop: '0px'
  });
  $("#third_app_loading_template").removeClass('active');
  return false;
}
//open loading modal
function openLoadingMdl () {
  $("#third_app_template_wrapper").addClass('active');
  clearTimeout(timer);
  timer = setTimeout(function () {
    $("#third_app_loading_template").addClass('active');
  }, 10);
}
//open message modal
function openMessageMdl(msg, notCloseWrapper) {
  //notCloseWrapper 此参数控制关闭弹窗范围 true时只关闭内层msg
  msg = msg || '网络错误';
  $("#third_app_template_wrapper").addClass('active');
  if (!notCloseWrapper) {
    $("#third_app_template_wrapper").css({
      background: 'rgba(0,0,0,0)'
    });
  }
  clearTimeout(timer);
  timer = setTimeout(function () {
    $("#third_app_message_template").addClass('active');
    $("#third_app_message_template p").html(msg);
    var w = document.getElementById("third_app_message_template").getElementsByTagName('p')[0].scrollWidth;
    var h = document.getElementById("third_app_message_template").getElementsByTagName('p')[0].scrollHeight;
    $("#third_app_message_template p").css({
      top: '50%',
      left: '50%',
      marginTop: '-'+parseInt(h/2)+'px',
      marginLeft: '-'+parseInt(w/2)+'px'
    });
  }, 10);

  setTimeout(function () {
    if (!notCloseWrapper) {
      $("#third_app_template_wrapper").removeClass('active');
      $("#third_app_template_wrapper").css({
        background: 'rgba(0,0,0,0.2)'
      });
    }
    $("#third_app_message_template").removeClass('active');
    $("#third_app_message_template p").css({
      top: '0',
      left: '0',
      marginTop: '0px',
      marginLeft: '0px'
    });
  }, 2000);
}
//open bottom modal
function openBottomMdl () {
  $("#third_app_template_wrapper").addClass('active');
  clearTimeout(timer);
  timer = setTimeout(function () {
    $("#third_app_bottom_template").css("bottom", "0px");
  }, 10);
}
//open middle modal
function openMiddleMdl () {
  $("#third_app_template_wrapper").addClass('active');
  clearTimeout(timer);
  timer = setTimeout(function () {
    var h = document.getElementById("third_app_middle_template").scrollHeight;
    $("#third_app_middle_template").css({
      top: '50%',
      marginTop: '-'+parseInt(h/2)+'px'
    });
  }, 10);
  return false;
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substring(1).match(reg);  //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
}