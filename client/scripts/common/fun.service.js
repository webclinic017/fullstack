;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('fun', fun);

    fun.$inject = ['$window', '$cookies'];

    function fun($window, $cookies) {

        var fun = {
            getPathName: function(){
                var pathname = $window.location.pathname;
                var cookLang = $cookies['lang'] === 'cn' ? 'zh' : ($cookies['lang'] || '');
                if (pathname.split('/')[1] === cookLang) {
                    pathname = pathname.substr((cookLang.length + 1))
                }
                return pathname;
            },
            /*获取Url查询字段 返回Object*/
            getSearch: getSearch,
            // 判断url是否含有参数
            setUrlParam: setUrlParam,

            // 删除url?后某个参数
            delQuery: function (queryKey) {
                var url = $window.location.href;    //页面url
                var beforeUrl;   //页面主地址（参数之前地址）
                if (url.indexOf("?") !== -1) {
                    beforeUrl = url.substr(0, url.indexOf("?"))
                } else {
                    return url;
                }
                var query = fun.getSearch();
                if (query[queryKey]) {
                    delete query[queryKey]
                } else {
                    return url;
                }
                var str = '';
                for (key in query) {
                    str += (key + '=' + query[key] + '&')
                }
                if (str) {
                    str = str.substring(0, str.length - 1);
                    str = '?' + str
                }
                return (beforeUrl + str)
            },
            // 截取路由的第一个语言参数，如果是则去掉
            // @params lang 准备切换的语言
            // @params cookieLang 当前的cookie语言
            switchParam: function (lang, cookieLang) {
                var url = this.delQuery('lang');
                var reg = new RegExp('/' + cookieLang + '/');
                var replaceStr = '/' + lang + '/';
                if (reg.test(url)) {
                    return url.replace(reg, replaceStr)
                } else {
                    var length = $window.location.origin.length;
                    return url.slice(0, length) + replaceStr + url.slice(length + 1)
                }
            },


            /**
            *防抖函数
            *@param fn 事件触发的操作
            *@param delay 多少毫秒内连续触发事件，不会执行
            *@returns {Function}
            */
            debounce: function (fn, delay) {
                var timer = null;
                return function () {
                    var self = this,
                        args = arguments;
                    timer && clearTimeout(timer);
                    timer = setTimeout(function () {
                        fn.apply(self, args);
                    }, delay);
                }
            },
            // 复制text到剪切板
            copyText: function (text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = 'fixed'
                textArea.style.background = 'transparent';
                textArea.style.boxShadow = 'none';
                textArea.style.border = 'none';
                textArea.style.outline = 'none';
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? '成功复制到剪贴板' : '该浏览器不支持点击复制到剪贴板';
                    console.log(msg);
                } catch (err) {
                    console.log('该浏览器不支持点击复制到剪贴板,请手动复制');
                }

                document.body.removeChild(textArea);
            },

            //js 加法计算
            //调用：accAdd(arg1,arg2)
            //返回值：arg1加arg2的精确结果
            accAdd: function (arg1, arg2) {
                var r1, r2, m;
                try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
                try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
                m = Math.pow(10, Math.max(r1, r2))
                return ((arg1 * m + arg2 * m) / m).toFixed(Math.max(r1, r2));
            },

            //js 减法计算
            //调用：subtr(arg1,arg2)
            //返回值：arg1减arg2的精确结果
            subtr: function (arg1, arg2) {
                var r1, r2, m, n;
                try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
                try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
                m = Math.pow(10, Math.max(r1, r2));
                //last modify by deeka
                //动态控制精度长度
                n = (r1 >= r2) ? r1 : r2;
                return ((arg1 * m - arg2 * m) / m).toFixed(Math.max(r1, r2));
            },

            //js 乘法函数
            //调用：accMul(arg1,arg2)
            //返回值：arg1乘以arg2的精确结果
            accMul: function (arg1, arg2) {
                var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
                try { m += s1.split(".")[1].length } catch (e) { }
                try { m += s2.split(".")[1].length } catch (e) { }
                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
            },

            //js 除法函数
            //调用：accDiv(arg1,arg2)
            //返回值：arg1除以arg2的精确结果
            accDiv: function (arg1, arg2) {
                var t1 = 0, t2 = 0, r1, r2;
                try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
                try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
                r1 = Number(arg1.toString().replace(".", ""))
                r2 = Number(arg2.toString().replace(".", ""))
                return (r1 / r2) * Math.pow(10, t2 - t1);
            },

            //js 余数函数
            //调用：accRem(arg1,arg2)
            //返回值：arg1%arg2的精确结果
            accRem: function (arg1, arg2) {
                var t1 = 0, t2 = 0, r1, r2;
                try { t1 = arg1.toString().split(".")[1].length } catch (e) { }
                try { t2 = arg2.toString().split(".")[1].length } catch (e) { }
                r1 = Number(arg1.toString().replace(".", ""))
                r2 = Number(arg2.toString().replace(".", ""))
                return ((r1 * Math.pow(10, t2)) % (r2 * Math.pow(10, t1))) / Math.pow(10, t2 + t1);
            }
        };
        return fun;
    }
})();