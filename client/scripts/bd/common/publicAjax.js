;(function (w) {
    'use strict';

    var origin = $.cookie("access_origin2") || '';
    var apiUrl = {
        getUserInfo: origin + '/user/info',     // get
        register: origin + '/auth/register',     // post
        thirdGetStatus: origin + '/third/auth/get_status', // get
        thirdRegister: origin + '/third/auth/register', //post
    };

    w.publicRequest = publicRequest;

    function publicRequest ($url, $method, $params) {
        var token = $.cookie("token") || '';
        $url = apiUrl[$url] + '?token='+token;
        $params = $params ? $params : {};
        
        return $.ajax({
            url: $url,
            type: $method.toUpperCase(),
            xhrFields: {
                withCredentials: true
            },
            data: $params,
            success: function (data) {
                // console.log(data);
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