;
(function () {
    'use strict';
    angular.module('TigerEntry', []);
    angular.module('TigerEntry').controller('EntryIndexController', EntryIndexController);
    EntryIndexController.$inject = ['$scope', '$location', '$timeout', '$http'];
    function EntryIndexController($scope, $location, $timeout, $http) {
        // 报价服务
        $scope.quoteSymbols = [];
        $scope.spreadInfo = {};     // 点差
        $scope.userGroup = undefined;   // 用户所在组
        var requestSymbols = [
            'EURUSD',
            'GBPUSD',
            'USDJPY',
            'XBRUSD',
            'XTIUSD',
            'XAUUSD',
            'EUSTX50',
            'JPN225'
        ];
        var forNormalSymbolZh = {
            EURUSD: '欧元美元',
            GBPUSD: '英镑美元',
            USDJPY: '美元日元',
            XBRUSD: '布伦特原油',
            XTIUSD: '西德州原油',
            XAUUSD: '黄金',
            EUSTX50: '欧洲上市股票50指数',
            JPN225: '日经指数',
        }
        // angular.forEach(forNormalSymbolZh, function (value, key) {
        //     requestSymbols.push(key);
        // });
        var socketPara = {
            websocketTigerUrl: (location.hostname === 'www.tigerwit.com' || location.hostname === 'www.tigerwit.co.uk') ? 'wss://quotephp.tigerwit.com:4567' : 'wss://demo.tigerwit.com:4567',
            request_symbols: requestSymbols,
            request_symbols_zh: forNormalSymbolZh,
            user_name: "tiger",
            key: "WjIABSkfG96GL0z2",
            logined: false
        };
        var ws;
        initDefalutSymbol();
        function initDefalutSymbol() {
            var symbol = {};
            angular.forEach(socketPara.request_symbols, function (value, index) {
                symbol = {
                    symbol: value,
                    symbol_zh: socketPara.request_symbols_zh[value],
                    type: undefined,    // 涨／跌
                    sell: '0.00',
                    buy: '0.00',
                    timestamp: 0
                };
                $scope.quoteSymbols.push(symbol);
            });
            connectSocket();
        }
        // function getSpreadInfo() {
        //     $http.get('/api/spread_info').then(function (data) {
        //         $scope.spreadInfo = data.data.data;
        //         connectSocket()
        //     });
        // }

        function connectSocket() {
            if ("WebSocket" in window) {
                ws = new WebSocket(socketPara.websocketTigerUrl);
                ws.onopen = function () {
                    ws_open();
                };
                ws.onmessage = function (res) {
                    ws_message(res);
                };
                ws.onclose = function (e) {
                    // websocket is closed.
                    console.log("Connection is closed...");
                    //console.log(e);
                    connectSocket();
                };
                ws.onerror = function (e) {
                    // websocket is error.
                    console.log("Connection is error...");
                };
            } else {
                // The browser doesn't support WebSocket
                console.warn("WebSocket NOT supported by your Browser...");
            }
        }

        function ws_open() {
            var now_date = formatDate(new Date());
            var guid = new_guid();
            var shaObj = new jsSHA("SHA-1", "TEXT");
            shaObj.setHMACKey(socketPara.key, "TEXT");
            shaObj.update(now_date + socketPara.user_name + guid);
            var hmac = shaObj.getHMAC("HEX");
            var login_content = { "user_name": socketPara.user_name, "login_time": now_date, "guid": guid, "sign": hmac };
            var login_data = { "type": "login", "content": login_content };
            var msg = JSON.stringify(login_data);
            ws.send(msg);
        }

        function ws_message(res) {
            var data = JSON.parse(res.data);
            // console.log(data);
            if (!socketPara.logined) {
                if (data['result'] == true) {
                    console.log("登录成功!");
                    socketPara.logined = true;
                    ws_send_msg();
                } else {
                    console.error("登录失败：" + data['msg']);
                }
            } else {
                if (data['result']) {
                    $scope.$apply(function () {
                        // console.log("收到报价：" + data['data']);
                        var quote = data['data'];
                        var buy, sell, spreadLength, commonSpread = 0, groupSpread = 0;
                        // console.log(quote);
                        angular.forEach($scope.quoteSymbols, function (value, index) {
                            if (value.symbol === quote[0]) {
                                value.type = quote[1];
                                value.timestamp = quote[4];
                                // 处理点差
                                // commonSpread = $scope.spreadInfo.spread_common[$scope.spreadInfo.security[value.symbol]] / 2;
                                // var fix = '1';
                                // spreadLength = quote[3].split('.')[1].length;
                                // for (var i = 0; i < spreadLength; i++) {
                                //     fix = fix + '0';
                                // }
                                // commonSpread = commonSpread / fix;
                                buy = Number(quote[3])
                                sell = Number(quote[2])

                                value.sell = sell;
                                value.buy = buy;
                            }
                        });
                    });
                } else {
                    console.error('获取报价失败：' + data['msg']);
                }
            }
        }

        function ws_send_msg() {
            var init_symbols = {
                "type": "quote",
                "content": {
                    "symbols": socketPara.request_symbols
                }
            };
            ws.send(JSON.stringify(init_symbols));
            console.log("请求报价品种:" + JSON.stringify(init_symbols));
        }

        function formatDate(date) {
            var d = date.getFullYear() + '-' + todou((date.getMonth() + 1)) + '-' + todou(date.getDate());
            var t = todou(date.getHours()) + ':' + todou(date.getMinutes()) + ':' + todou(date.getSeconds());
            return d + ' ' + t;
        }

        function todou(n) {
            return n >= 10 ? '' + n : '0' + n;
        }

        function new_guid() {
            var guid = "";
            for (var i = 1; i <= 32; i++) {
                var n = Math.floor(Math.random() * 16.0).toString(16);
                guid += n;
                if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
                    guid += "-";
            }
            return guid;
        }

    }
})();
