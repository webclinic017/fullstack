module.exports = function () {
  function ThirdPath (req) {
    var hostname = req.hostname;
    var protocol = req.protocol || 'http';
    var urlPath = protocol+'://'+hostname;
    // console.log(req.protocol);
    this.oPath = {
      register: urlPath + '/m/third/register',    //开户认证流程
      evidence: urlPath + '/m/deposit/evidence'   //入金凭证示例
    }
    
  }

  ThirdPath.prototype = {};

  return ThirdPath;
};