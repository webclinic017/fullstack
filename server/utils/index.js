module.exports = {
    getDomain: function (req) {
        // var domain = req.host.match(/\.\w+\.com/) ? req.host.match(/\.\w+\.com/)[0] : '.tigerwit.com';
        console.log('server/utils/index', req.host)
        return '.' + req.host.split('.').slice(-2).join('.');
    },
    isMobile: function (req) {
        var deviceAgent = req.headers["user-agent"].toLowerCase();
        //var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
        return deviceAgent.match(/(iphone|ipod|ipad|android)/);
    }
}