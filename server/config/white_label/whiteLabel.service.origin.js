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
        setChart();
        setLoginKey();
        return oWhiteLabel;
    }
    function setLoginKey() {
        var key = login_public_key;
        oWhiteLabel.loginKey = key;
    }
    function setChart() {
        switch (companyName) {
            case 'tigerwit':
                /*条形图*/
                oWhiteLabel.columnChart = {
                    /*正值的颜色*/
                    positive: '#f23244',
                    /*负值的颜色*/
                    negative: '#61cb28',
                    /*正值的背景颜色*/
                    positiveBg: '#fdf5f5',
                    /*负值的背景颜色*/
                    negativeBg: '#f9fbf4',
                    /*气泡框字体*/
                    toolTip: '#188afa',
                };
                /*区域图*/
                oWhiteLabel.areaChart = {
                    /*渐变色*/
                    colors: ['#74b9fd'],
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                };
                /*饼图*/
                oWhiteLabel.pieChart = {
                    /*渐变色*/
                    colors: ['#fff000', '#ebebeb'],
                    colors2: ['#BC6FFF', '#44BCFF', '#C5EF9B', '#7DF4DA', '#FFC86F']
                };
                break;
            case 'pkds':
                /*条形图*/
                oWhiteLabel.columnChart = {
                    /*正值的颜色*/
                    positive: '#c81527',
                    /*负值的颜色*/
                    negative: '#06ba82',
                    /*正值的背景颜色*/
                    positiveBg: '#f5d8db',
                    /*负值的背景颜色*/
                    negativeBg: '#dbf5ec',
                    /*气泡框字体*/
                    toolTip: '#d19b19',
                };
                /*区域图*/
                oWhiteLabel.areaChart = {
                    /*渐变色*/
                    colors: ['#d29d1d', '#fefdfa'],
                    fillColor: {
                        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                        stops: [
                            [0, Highcharts.getOptions().colors[1]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[3]).setOpacity(0).get('rgba')]
                        ]
                    },
                };
                /*饼图*/
                oWhiteLabel.pieChart = {
                    /*渐变色*/
                    colors: ['#c81527', '#ebebeb']
                };
                break;
            default:
                /*条形图*/
                oWhiteLabel.columnChart = {
                    /*正值的颜色*/
                    positive: '#f23244',
                    /*负值的颜色*/
                    negative: '#61cb28',
                    /*正值的背景颜色*/
                    positiveBg: '#fdf5f5',
                    /*负值的背景颜色*/
                    negativeBg: '#f9fbf4',
                    /*气泡框字体*/
                    toolTip: '#188afa',
                };
                break;
        }
    }
}());