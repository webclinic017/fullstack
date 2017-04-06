;(function(){
    'use strict';

    var envConfig = require('./get_env_config').envConfig;
    var URL_PATH = envConfig.url_path;
    var COMPANY = envConfig.company_name;

    function getBannerInfoAndroid () {
        var data = [
            {
                image: URL_PATH + "/activity/banner/banner1_redbag_20170314.png",
                url: URL_PATH + "/bd/t35",
                title: "活动详情"
            },
            {
                image: URL_PATH + "/activity/banner/banner2_20170314.png",
                url: URL_PATH + "/bd/t34",
                title: "活动详情"
            },
            {
                image: URL_PATH + "/activity/banner/banner3_20161028.png",
                url: URL_PATH + "/m/regular/detail/11",
                title: "【MACD月盈201610-01】"
            }
        ];

        if (COMPANY === 'pkds') {
            data = {};
        }
        return data;
    }
    function getBannerInfoIos () {
        var data = [
          {
            image: URL_PATH + "/activity/banner/banner1_redbag_20170314.png",
            url: URL_PATH + "/bd/t35",
            title: "活动详情"
          },
          {
            image: URL_PATH + "/activity/banner/banner2_20170314.png",
            url: URL_PATH + "/bd/t34",
            title: "活动详情"
          },
          {
            image: URL_PATH + "/activity/banner/banner3_20161028.png",
            url: URL_PATH + "/m/regular/detail/11",
            title: "【MACD月盈201610-01】"
          }
        ];

        if (COMPANY === 'pkds') {
            data = {};
        }
        return data;
    }

    function getPushBannerInfo () {
        var data = {
            image: URL_PATH + "/activity/banner/redbag_app_index.jpg",
            url: URL_PATH + "/bd/t35",
            title: "活动详情"
        };
        return data;
    }

    module.exports = {
        getBannerInfoAndroid: getBannerInfoAndroid,
        getBannerInfoIos: getBannerInfoIos,
        getPushBannerInfo: getPushBannerInfo
    };

    /*
    * README
    * 配置 napi 需要的图片、文字路径等信息
    * 
    * */
}());