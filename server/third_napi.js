module.exports = function () {
  function ThirdPath (req) {
    var hostname = req.hostname;
    var urlPath = hostname;
    // console.log(hostname);
    if (hostname.indexOf('h5agent') !== -1) {
      urlPath = 'https://' + hostname;
    }

    this.oPath = {
      register: urlPath + '/m/third/register',    //开户认证流程
      evidence: urlPath + '/m/deposit/evidence'   //入金凭证示例
    }
    
  }

  ThirdPath.prototype = {};

  return ThirdPath;
};