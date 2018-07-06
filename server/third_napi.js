module.exports = function () {
  function ThirdPath (req) {
    var hostname = req.hostname;
    var urlPath = '';
    if (hostname.indexOf('w.dev.tigerwit.com') || hostname.indexOf('w.tigerwit.com') || hostname.indexOf('w.tmp.tigerwit.com')) {
      urlPath = 'http://'+hostname;
    } else {
      urlPath = 'https://'+hostname;
    }
    this.oPath = {
      register: urlPath + '/m/third/register',    //开户认证流程
      evidence: urlPath + '/m/deposit/evidence'   //入金凭证示例
    }
    
  }

  ThirdPath.prototype = {};

  return ThirdPath;
};