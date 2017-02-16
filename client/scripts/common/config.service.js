;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('config', config);

    function config() {
        var service = {
                httpTimeout: 30000,
                avatarCfg: {
                    path: '/avatar/',
                    xs: '_28.jpg',
                    sm: '_50.jpg',
                    md: '_80.jpg',
                    lg: '_150.jpg'
                },
                server: 'www',
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
                ],
                highchartNoDataOptions: {
                    title: {
                        text: '暂无记录'
                    },
                    yAxis: {
                        title: {
                            text: ''
                        },
                        gridLineWidth: 0,
                        gridLineColor: '#fff'
                    },
                    exporting: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    Legend: {
                        enabled: false,
                        name: ''
                    }
                }
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