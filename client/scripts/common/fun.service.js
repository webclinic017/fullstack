;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('fun', fun);

    fun.$inject = [];

    function fun() {

        var fun = {
            /*获取Url查询字段 返回Object*/
            getSearch: function () {
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
            setUrlParam: function (url) {
                if (url.split('?').length == 1) {
                    return url + '?'
                } else {
                    return url + '&'
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
                let r1, r2, m;
                try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
                try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
                m = Math.pow(10, Math.max(r1, r2))
                return ((arg1 * m + arg2 * m) / m).toFixed(Math.max(r1, r2));
            },

            //js 减法计算
            //调用：subtr(arg1,arg2)
            //返回值：arg1减arg2的精确结果
            subtr: function (arg1, arg2) {
                let r1, r2, m, n;
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
                let m = 0, s1 = arg1.toString(), s2 = arg2.toString();
                try { m += s1.split(".")[1].length } catch (e) { }
                try { m += s2.split(".")[1].length } catch (e) { }
                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
            },

            //js 除法函数
            //调用：accDiv(arg1,arg2)
            //返回值：arg1除以arg2的精确结果
            accDiv: function (arg1, arg2) {
                let t1 = 0, t2 = 0, r1, r2;
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
                let t1 = 0, t2 = 0, r1, r2;
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