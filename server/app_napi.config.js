;(function(){    'use strict';    var URL_PATH = process.env.URL_PATH;    var COMPANY = process.env.COMPANY_NAME;    function getBannerInfoAndroid () {        var data = [            {                image: URL_PATH + "/activity/banner/banner1_20161201.jpg",                url: URL_PATH + "/bd/t33",                title: "活动详情"            },            {                image: URL_PATH + "/activity/banner/banner2_20160930.png",                url: URL_PATH + "/bd/t33",                title: "活动详情"            },            {                image: URL_PATH + "/activity/banner/banner3_20161028.png",                url: URL_PATH + "/m/regular/detail/11",                title: "【MACD月盈201610-01】"            }        ];        if (COMPANY === 'pkds') {            data = {};        }        return data;    }    function getBannerInfoIos () {        var data = [          {            image: URL_PATH + "/activity/banner/banner1_20161201.jpg",            url: URL_PATH + "/bd/t33",            title: "活动详情"          },          {            image: URL_PATH + "/activity/banner/banner2_20160930.png",            url: URL_PATH + "/bd/t33",            title: "活动详情"          },          {            image: URL_PATH + "/activity/banner/banner3_20161028.png",            url: URL_PATH + "/m/regular/detail/11",            title: "【MACD月盈201610-01】"          }        ];        if (COMPANY === 'pkds') {            data = {};        }        return data;    }    module.exports = {        getBannerInfoAndroid: getBannerInfoAndroid,        getBannerInfoIos: getBannerInfoIos    };    /*    * README    * 配置 napi 需要的图片、文字路径等信息    *     * */}());