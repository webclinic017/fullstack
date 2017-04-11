;(function (w) {
    'use strict';

    var origin = $.cookie("access_origin2") || '';
    var apiUrl = {
        getUserInfo: origin + '/user/info',     // get
    };

    w.publicRequest = publicRequest;

    function publicRequest ($url, $method, $params) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
        // $url = apiUrl[$url] + "?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RlbW9hcGkudGlnZXJ3aXQuY29tL2F1dGgvbG9naW4iLCJpYXQiOjE0OTE4ODAwODcsImV4cCI6MTQ5MTk2NjQ4NywibmJmIjoxNDkxODgwMDg3LCJqdGkiOiI1NGM2YWMwYTEyOWM2Zjk1OTk4OTg4ZjkzZWM0NzhlMSIsInN1YiI6NDA2fQ.oqXXuaoPbQijb4TeFVwBWDGivwuL2gwLQiUHGhPq5fE";
        $params = $params ? $params : {};
        
        return $.ajax({
            url: $url,
            type: $method.toUpperCase(),
            xhrFields: {
                withCredentials: true
            },
            data: $params,
            success: function (data) {
                console.log(data);
                if (data.code === 1000105) {
                    console.log(data.message);
                    layer.open({
                        skin: 'msg',
                        content: "请重新登陆",
                        time: 2
                    });
                } else {
                    return data;
                }
            },
            error: function (error) {
                console.log(error);
                layer.open({
                    skin: 'msg',
                    content: "服务器异常",
                    time: 2
                });
            }
        });
    }
})(window);