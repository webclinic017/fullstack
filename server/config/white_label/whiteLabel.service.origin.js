/*  README
    这个文件是在grunt-serve时生成

    生成流程如下:

    grunt读取 NODE -> server/config/whiteLabel.config.js中配置的当前公司名称
     |
    读取到当前目录中的whiteLabel.service.origin中的源文件
     |
    将whiteLabel.service.origin中的tigetwit字段替换为当前的白标公司名
     |
    生成whiteLabel.service.js -> 以生成一个angular颜色服务,用于个人中心,高手主页等图表颜色
     |
    本服务会配置各个公司的图表颜色,更改whiteLabel.service.origin才能使配置生效!
*/
; (function () {
    'use strict';
    angular.module('fullstackApp').factory('whiteLabel', whiteLabel);

    var oWhiteLabel = {};
    /*这个名字不需要更改,是由grunt自动生成的*/
    var companyName = 'tigerwit';
    var login_public_key = 'publicKey';

    function whiteLabel() {
        setLoginKey();
        return oWhiteLabel;
    }
    function setLoginKey() {
        var key = login_public_key;
        oWhiteLabel.loginKey = key;
    }
}());