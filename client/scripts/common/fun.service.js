;
(function () {
    'use strict';
    
    angular.module('fullstackApp').factory('fun', fun);

    fun.$inject = [];

    function fun () {

        var fun = {
            /*获取Url查询字段 返回Object*/
            getSearch: function() {
                var url = location.search;
                /*获取url中"?"符后的字串*/
                var theRequest = new Object();
                if (url.indexOf("?") != -1) {
                    var str = url.substr(1);
                    var strs = str.split("&");
                    for (var i = 0; i < strs.length; i++) {
                        theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
                    }
                }
                return theRequest;
            },
            // 判断url是否含有参数
            setUrlParam: function(url) {
                if(url.split('?').length == 1){
                    return url + '?'
                }else{
                    return url + '&'
                }
            }
        };
        return fun;
    }
})();