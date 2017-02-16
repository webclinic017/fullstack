/*
 *  getH5Config 定义在window上，用来配置H5页面公共的数据或方法
 *  TODO 目前是H5的出金页面引用并调用方法，如有需要可以打包到vendor.js
 */
(function () {
    'use strict';

    window.getH5Config = function () {
        var service = {
            banks: [
                {nameEN: 'icbc', nameZH: '中国工商银行'},
                {nameEN: 'ccb', nameZH: '中国建设银行'},
                {nameEN: 'cmb', nameZH: '招商银行'},
                {nameEN: 'abc', nameZH: '中国农业银行'},
                {nameEN: 'spdb', nameZH: '浦发银行'},
                {nameEN: 'hxb', nameZH: '华夏银行'},
                {nameEN: 'ceb', nameZH: '中国光大银行'},
                {nameEN: 'boc', nameZH: '中国银行'},
                {nameEN: 'psbc', nameZH: '中国邮政储蓄银行'},
                {nameEN: 'bcm', nameZH: '交通银行'},
                {nameEN: 'cmbc', nameZH: '中国民生银行'},
                {nameEN: 'gdb', nameZH: '广发银行'},
                {nameEN: 'sdb', nameZH: '深圳发展银行'},
                {nameEN: 'cib', nameZH: '兴业银行'},
                {nameEN: 'citic', nameZH: '中信银行'},
                {nameEN: 'pab', nameZH: '平安银行'},
                {nameEN: 'bob', nameZH: '北京银行'},
                {nameEN: 'srcb', nameZH: '上海农商银行'},
                {nameEN: 'bea', nameZH: '东亚银行'},
                {nameEN: 'nbcb', nameZH: '宁波银行'},
                {nameEN: 'bon', nameZH: '南京银行'},
                {nameEN: 'other', nameZH: '其他银行'}
            ],
            banks_new: [
                {nameEN: 'icbc', nameZH: '中国工商银行'},
                {nameEN: 'ccb', nameZH: '中国建设银行'},
                {nameEN: 'cmb', nameZH: '招商银行'},
                {nameEN: 'abc', nameZH: '中国农业银行'},
                {nameEN: 'spdb', nameZH: '浦发银行'},
                {nameEN: 'hxb', nameZH: '华夏银行'},
                {nameEN: 'ceb', nameZH: '中国光大银行'},
                {nameEN: 'boc', nameZH: '中国银行'},
                {nameEN: 'psbc', nameZH: '中国邮政储蓄银行'},
                {nameEN: 'bcm', nameZH: '交通银行'},
                {nameEN: 'cmbc', nameZH: '中国民生银行'},
                {nameEN: 'gdb', nameZH: '广发银行'},
                {nameEN: 'cib', nameZH: '兴业银行'},
                {nameEN: 'citic', nameZH: '中信银行'},
                {nameEN: 'pab', nameZH: '平安银行'},
                {nameEN: 'bea', nameZH: '东亚银行'},
                {nameEN: 'czbank', nameZH: '浙商银行'},
                {nameEN: 'citi', nameZH: '花旗银行'},
                {nameEN: 'hsbank', nameZH: '徽商银行'},
                {nameEN: 'egbank', nameZH: '恒丰银行'},
                {nameEN: 'hsbc', nameZH: '汇丰银行'},
                {nameEN: 'rcbank', nameZH: '农村商业银行'},
                {nameEN: 'ccbank', nameZH: '城市商业银行'}
            ]
        };

        return service;
    };
})();