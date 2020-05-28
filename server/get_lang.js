module.exports = function (req) {
    var langArr = ['zh', 'cn', 'en', 'vi', 'zh-Hant', 'id', 'es', 'pt-BR', 'ar'];
    var querystring = require("querystring");
    var defaultLang = {
        langArr: langArr,
        paramsLang: paramsLang,
        browserLang: browserLang,
        cookieLang: cookieLang,
        urlLang: urlLang,
        decideLang: decideLang
    }
    // 获取链接中语言参数
    function paramsLang() {
        // console.log('-----------lang------', req.params.lang)
        var lang = ''
        var paramsLang = req.params.lang;
        if (paramsLang && langArr.indexOf(paramsLang) !== -1) {
            lang = paramsLang;
        }
        return lang;
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
        // ['zh', 'en', 'vi', 'zh', 'id', 'ar']
        return browserLang;
    }
    // TODO req.cookies
    function cookieLang() {
        var lang = '';
        var cookieLang = req.cookies.lang;
        // var cookieList = querystring.parse(req.headers.cookie, '; ');
        // // 多个域名存在lang时为数组
        // if (cookieList['lang'] instanceof Array) {
        //     cookieLang = cookieList['lang'][0];
        // } else {
        //     cookieLang = cookieList['lang'];
        // }
        // console.log('---cookieLang---', cookieList)
        if (cookieLang && langArr.indexOf(cookieLang) !== -1) {
            lang = cookieLang;
        }
        // ['zh', cn', 'en', 'vi', 'zh-Hant', 'id', 'pt-BR', 'ar']
        return lang;
    }
    function urlLang() {
        var url = require('url');
        var lang = ''
        var urlLang = url.parse(req.url, true).query.lang;
        if (urlLang && langArr.indexOf(urlLang) !== -1) {
            lang = urlLang;
        }
        // ['zh', cn', 'en', 'vi', 'zh-Hant', 'id', 'pt-BR', 'ar']
        return lang;
    }
    function decideLang() {
        var lang = 'en';
        var paramsL, urlL, cookieL, browserL;
        if (paramsL = paramsLang()) {
            return paramsL;
        } else if (urlL = urlLang()) {
            return urlL;
        } else if (cookieL = cookieLang()) {
            return cookieL
        } else if (browserL = browserLang()) {
            return browserL
        } else {
            return lang
        }
    }
    return defaultLang

}