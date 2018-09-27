module.exports = function () {
  function ThirdPath (req) {
    var hostname = req.hostname;
    var urlPath = '';
    if (hostname.indexOf('w.dev.tigerwit.com') != -1 || hostname.indexOf('w.tigerwit.com') != -1 || hostname.indexOf('w.tmp.tigerwit.com') != -1) {
      urlPath = 'http://'+hostname;
    } else {
      urlPath = 'https://'+hostname;
    }
    this.oPath = {
      register: urlPath + '/m/third/register',    //开户认证流程
      evidence: urlPath + '/m/deposit/evidence',   //入金凭证示例
      login: urlPath + '/m/third/login',  //进入出入金页面前MT4登录页
      asset: urlPath + '/m/third/asset'   //出入金
    }
    
  }

  ThirdPath.prototype = {};

  return ThirdPath;
};