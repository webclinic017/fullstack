;(function () {
  if (isMobile()) {
    openInApp();
  } else {
    window.location.href = '/space/#/center';
  }

  function isMobile() {
    var deviceAgent = window.navigator.userAgent.toLowerCase();
    //var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    return deviceAgent.match(/(iphone|ipod|ipad|android)/);
  }
})();