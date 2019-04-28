module.exports = function (req, res) {
    var langArr = ['zh', 'cn', 'en', 'vi', 'zh-Hant', 'id', 'es'];
    var querystring = require("querystring");
    var defaultLang = {
        browserLang: browserLang,
        cookieLang: cookieLang,
        urlLang: urlLang,
        decideLang: decideLang
    }
    function browserLang() {
        var acceptLang = req.headers["accept-language"];
        var browserLang = '';
        if (acceptLang) {
            let lans = acceptLang
                .split(",")
                .map(lang => {
                    let [name, q = 1] = Object.keys(
                        querystring.parse(lang.trim(), ";q=")
                    );
                    return { name, q };
                })
                .sort((a, b) => b.q - a.q); // 并按照权重逆序排序

            // 循环检测 客户端的语言 lans
            for (let i = 0; i < lans.length; i++) {
                let { name } = lans[i];
                let content = name.toLowerCase().slice(0, 2);

                // 如果存在直接设置响应头并返回内容
                if (langArr.indexOf(content) !== -1) {
                    browserLang = content;
                    break
                }
            }
        }
        // ['zh', 'en', 'vi', 'zh', 'id']
        return browserLang;
    }
    function cookieLang() {
        var lang = '';
        var cookieLang;
        var cookieList = querystring.parse(req.headers.cookie, '; ');

        for (var name in cookieList) {
            // console.info(name);
            // 获取cookie中的lang
            if (name === 'lang') {
                if(cookieList[name] instanceof Array){
                    cookieLang = cookieList[name][0];
                } else {
                    cookieLang = cookieList[name];
                }
                break;
            }
        }
        if(cookieLang && langArr.indexOf(cookieLang) !== -1){
            lang = cookieLang;
        }
        // ['zh', cn', 'en', 'vi', 'zh-Hant', 'id']
        return lang;
    }
    function urlLang(){
        var url = require('url');
        var lang = ''
        var urlLang = url.parse(req.url, true).query.lang;
        if(urlLang && langArr.indexOf(urlLang) !== -1){
            lang = urlLang;
        }
        // ['zh', cn', 'en', 'vi', 'zh-Hant', 'id']
        return lang;
    }
    function decideLang(){
        var lang = 'zh';
        var urlL, cookieL, browserL;
        if(urlL == urlLang()){
            return urlL;
        }else if(cookieL == cookieLang()){
            return cookieL
        }else if(browserL == browserLang()){
            return browserL
        }else {
            return lang
        }
    }
    return defaultLang

}