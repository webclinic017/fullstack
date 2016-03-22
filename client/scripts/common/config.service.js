;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('config', config);

    function config() {
        var service = {
            httpTimeout: 10000,
            avatarCfg: {
                path: '/avatar/',
                xs: '_28.jpg',
                sm: '_50.jpg',
                md: '_80.jpg',
                lg: '_150.jpg'
            },
            server: 'dev',
            getUrlPrefix: getUrlPrefix,
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
            ]
        };
        return service;

        function getUrlPrefix(server) {
            var urlPrefix = {
                main: ''
            };

            if (server === 'dev') {
                urlPrefix.main = 'http://dev.tigerwit.com';
            }

            if (server === 'www') {
                urlPrefix.main = 'https://www.tigerwit.com';
            }
            return urlPrefix;
        }
    }
})();
