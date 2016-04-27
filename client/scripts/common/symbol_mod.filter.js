;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .filter('symbolMod', symbolMod);

    function symbolMod() {
        return function (symbol, lang) {
            if (symbol === undefined) {
                return;
            }

            symbol = symbol.toUpperCase();
            var notModList = ['GER30', 'AUS200', 'US30', 'USA500', 'NAS100', 
                    'FRA40', 'JPN225', 'SPA35', 'UK100', 'EUSTX50', 'HK50', 'XAGUSD', 
                    'XAUUSD', 'XTIUSD', 'XBRUSD', 'XNGUSD'];

            if (lang === 'zh') {
    
                if (notModList.indexOf(symbol) < 0 && symbol.length === 6) {
                    var firstSymbol = symbol.slice(0, 3);
                    var lastSymbol = symbol.slice(3);
                    var result = '';
                    
                    // first symbol
                    if (firstSymbol === 'AUD') {
                        result = result + '澳元/';
                    }

                    if (firstSymbol === 'CAD') {
                        result = result + '加元/';
                    }

                    if (firstSymbol === 'CHF') {
                        result = result + '瑞郎/';
                    }

                    if (firstSymbol === 'CNH') {
                        result = result + '人民币/';
                    }

                    if (firstSymbol === 'JPY') {
                        result = result + '日元/';
                    }

                    if (firstSymbol === 'NZD') {
                        result = result + '新西兰元/';
                    }

                    if (firstSymbol === 'USD') {
                        result = result + '美元/';
                    }

                    if (firstSymbol === 'EUR') {
                        result = result + '欧元/';
                    }

                    if (firstSymbol === 'GBP') {
                        result = result + '英镑/';
                    }

                    if (firstSymbol === 'HKD') {
                        result = result + '港元/';
                    }

                    // last symbol
                    if (lastSymbol === 'AUD') {
                        result = result + '澳元';
                        return result;
                    }

                    if (lastSymbol === 'CAD') {
                        result = result + '加元';
                        return result;
                    }

                    if (lastSymbol === 'CHF') {
                        result = result + '瑞郎';
                        return result;
                    }

                    if (lastSymbol === 'CNH') {
                        result = result + '人民币';
                        return result;
                    }

                    if (lastSymbol === 'JPY') {
                        result = result + '日元';
                        return result;
                    }

                    if (lastSymbol === 'NZD') {
                        result = result + '新西兰元';
                        return result;
                    }

                    if (lastSymbol === 'USD') {
                        result = result + '美元';
                        return result;
                    }

                    if (lastSymbol === 'EUR') {
                        result = result + '欧元';
                        return result;
                    }

                    if (lastSymbol === 'GBP') {
                        result = result + '英镑';
                        return result;
                    }

                    if (lastSymbol === 'HKD') {
                        result = result + '港元';
                        return result;
                    }
                }

                if (symbol === 'GER30') {
                    return '德国股指';
                }

                if (symbol === 'AUS200') {
                    return '澳洲股指';
                }

                if (symbol === 'US30') {
                    return '道琼斯工业指数';
                }

                if (symbol === 'USA500') {
                    return '标普 500';
                }

                if (symbol === 'NAS100') {
                    return '纳斯达克 100';
                }

                if (symbol === 'FRA40') {
                    return '法国股指';
                }

                if (symbol === 'JPN225') {
                    return '日本股指';
                }

                if (symbol === 'SPA35') {
                    return '西班牙股指';
                }

                if (symbol === 'UK100') {
                    return '英国富时 100';
                }

                if (symbol === 'EUSTX50') {
                    return '欧元区股指';
                }

                if (symbol === 'HK50') {
                    return '恒生指数';
                }

                if (symbol === 'XAGUSD') {
                    return '白银';
                }

                if (symbol === 'XAUUSD') {
                    return '黄金';
                }

                if (symbol === 'XTIUSD') {
                    return '西德州原油';
                }

                if (symbol === 'XBRUSD') {
                    return '布伦特原油';
                }

                if (symbol === 'XNGUSD') {
                    return '美燃气';
                }
            }

            if (lang === 'en') {

                if (notModList.indexOf(symbol) < 0 && symbol.length === 6) {
                    return symbol.slice(0, 3) + '/' + symbol.slice(3);
                }

                if (notModList.indexOf(symbol) >= 0) {
                    return symbol;
                }
            }
        }
    }
})();