;
(function () {
    'use strict';

    angular.module('fullstackApp')
        .controller('HomeIndexController', HomeIndexController);

    HomeIndexController.$inject = ['$scope', 'product', 'ranklist', '$cookies', '$location', 'account', '$timeout'];

    function HomeIndexController($scope, product, ranklist, $cookies, $location, account, $timeout) {
        var company = $cookies["company_name"];
        var userCode = $cookies["user_code"];

        // if (company && company === 'tigerwit') {
        //    layer.open({
        //        type: 1,
        //        skin: 'home_layer', //加上边框
        //        title: '',
        //        shade: 0.6,
        //        area: ['800px', '567px'], //宽高
        //        content: '<div class="content"><h4><span>老虎外汇杠杆水平调整公告</span></h4><p class="info"><span>尊敬的用户:</span><br>面临即将到来的美国大选,英国退欧公投后的不确定因素,老虎外汇基于对公司和客户负责的态度,在经过风险评估后,将采取以下必要措施:</p><p class="detail">2016年11月07日开市(北京时间11月07日凌晨5点)至11月12日休市,所有外汇货币对杠杆水平将调整为50:1;贵金属,大宗商品和CFD将调整为33:1<br>2016年11月14日开市(北京时间11月14日凌晨5点)至12月31日休市,所有GBP货币对,贵金属,大宗商品和CFD杠杆水平将调整为50:1</p><p class="end">老虎外汇保留因未来市场走向再度调整杠杆的权利。<br>请监测您在老虎外汇账户的保证金水平，并作出必要的更改。<br>感谢您对此次调整的理解。</p></div>',
        //        btn: '知道了'
        //    });
        // }

        if (!userCode && company && company === 'tigerwit') {
            account.getAdvertiseRecords('popup').then(function (data) {
                console.log(data);
                if (data.is_succ && data.data.length) {
                    data = data.data[0];
                    layer.open({
                        type: 1,
                        skin: 'home_redbag_layer', //加上边框
                        closeBtn: 0,
                        title: '',
                        shade: 0.6,
                        area: ['960px', '560px'], //宽高
                        content: '<div class="content"><a href="'+data.target_url+'"><img src="'+data.image_url+'"></a><div class="close" onclick="layer.closeAll();"></div></div>'
                    });
                }
            });
        }

        $scope.indexMasters = [];// 首页 第二模块的高手
        $scope.advertiseLst = [];

        // 此为index2 首页的高手信息
        ranklist.getMastersList().then(function (data) {
            // console.info(data);
            $scope.indexMasters = data.data.records.slice(0, 3);
        });

        function getUserParam() {
            var hostnameUrl = window.location.hostname;
            var href = window.location.href;
            var originUrl = window.location.origin;
            var domainUrl = hostnameUrl.substring(hostnameUrl.indexOf('.') + 1) || "tigerwit.com";
            var pid = '', lp = '', unit = '', key = '', aGET = {};
            var lp = window.location.pathname.replace(/[\/:]/g, "").toLowerCase();

            if (lp != "") {
                document.cookie = 'lp=' + lp + ';path=/;domain=' + domainUrl;
            }

            if (href.indexOf('?') != -1) {
                var aQuery = href.split('?')[1];
                if (aQuery.length > 0) {
                    var aBuf = aQuery.split("&");
                    for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
                        var aTmp = aBuf[i].split("=");
                        aGET[aTmp[0]] = aTmp[1];
                    }
                };
                pid = aGET['pid'] ? aGET['pid'] : "";
                unit = aGET['unit'] ? aGET['unit'] : "";
                key = aGET['key'] ? aGET['key'] : "";

                if (pid != '') {
                    // 清空重写
                    // console.log(domainUrl);
                    document.cookie = 'pid=' + null + ';path=/;domain=' + null;
                    document.cookie = 'unit=' + null + ';path=/;domain=' + null;
                    document.cookie = 'key=' + null + ';path=/;domain=' + null;

                    document.cookie = 'pid=' + pid + ';path=/;domain=' + domainUrl;

                    if (unit) {
                        document.cookie = 'unit=' + unit + ';path=/;domain=' + domainUrl;
                    }
                    if (key) {
                        document.cookie = 'key=' + key + ';path=/;domain=' + domainUrl;
                    }
                }
            }
        } getUserParam();

        // 轮播图信息
        $scope.getBannerSucc = false;

        getAdvertiseRecords();
        function getAdvertiseRecords () {
            account.getAdvertiseRecords('wheel').then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $scope.getBannerSucc = true;
                    $scope.advertiseLst = data.data;
                    if ($scope.advertiseLst.length > 0) {
                        $timeout(function () {
                            $scope.$emit('carousel-swiper');
                        });
                    }
                }
            });
        }

        // 报价服务
        $scope.quoteSymbols = [];
        $scope.spreadInfo = {};     // 点差
        $scope.userGroup = undefined;   // 用户所在组
        var socketPara = {
            websocketTigerUrl: location.hostname === 'www.tigerwit.com' ? 'wss://demo.tigerwit.com:4567' : 'wss://demo.tigerwit.com:4567',
            request_symbols: ['AUDUSD', 'XNGUSD', 'EURUSD', 'XTIUSD', 'GBPUSD', 'XBRUSD', 'NZDUSD', 'XAUUSD', 'USDCAD', 'XAGUSD', 'USDCHF', 'AUS200', 'USDJPY', 'JPN225'],
            request_symbols_zh: {
                AUDUSD: '澳元美元',
                XNGUSD: '天燃气',
                EURUSD: '欧元美元',
                XTIUSD: '西德州原油',
                GBPUSD: '英镑美元',
                XBRUSD: '布伦特原油',
                NZDUSD: '纽元美元',
                XAUUSD: '黄金',
                USDCAD: '美元加元',
                XAGUSD: '白银',
                USDCHF: '美元瑞郎',
                AUS200: '澳大利亚标准普尔200指数',
                USDJPY: '美元日元',
                JPN225: '日经指数',
            },
            user_name: "tiger",
            key: "WjIABSkfG96GL0z2",
            logined: false
        };
        var ws;
        initDefalutSymbol();
        function initDefalutSymbol () {
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
            getSpreadInfo();
        }

        function getSpreadInfo () {
            account.getSpreadInfo().then(function (data) {
                // console.log(data);
                $scope.spreadInfo = data.data;
                getUserGroup();
            });
        }

        function getUserGroup () {
            account.checkLogined().then(function (logined) {
                if (logined) {
                    account.getUserGroup().then(function (data) {
                        // console.log(data);
                        angular.forEach($scope.spreadInfo.spread_special_offset, function (value, key) {
                            if (data.data.group === key) {
                                $scope.userGroup = data.data.group;
                            }
                        });
                        connectSocket();
                    });
                } else {
                    connectSocket();
                }
            });
        }

        function connectSocket () {
            if ("WebSocket" in window) {
                ws = new WebSocket(socketPara.websocketTigerUrl);
                ws.onopen = function() {
                    ws_open();
                };
                ws.onmessage = function(res) {
                    ws_message(res);
                };
                ws.onclose = function(e) {
                    // websocket is closed.
                    console.log("Connection is closed...");
                    //console.log(e);
                    connectSocket();
                };
                ws.onerror = function(e){
                    // websocket is error.
                    console.log("Connection is error...");
                };
            } else {
                // The browser doesn't support WebSocket
                console.warn("WebSocket NOT supported by your Browser...");
            }
        }

        function ws_open () {
            var now_date = formatDate(new Date());
            var guid = new_guid();
            var shaObj = new jsSHA("SHA-1", "TEXT");
            shaObj.setHMACKey(socketPara.key, "TEXT");
            shaObj.update(now_date + socketPara.user_name + guid);
            var hmac = shaObj.getHMAC("HEX");
            var login_content = {"user_name": socketPara.user_name, "login_time": now_date, "guid": guid, "sign": hmac};
            var login_data = {"type": "login", "content": login_content};
            var msg = JSON.stringify(login_data);
            ws.send(msg);
        }

        function ws_message (res) {
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
                                commonSpread = $scope.spreadInfo.spread_common[$scope.spreadInfo.security[value.symbol]]/2;
                                if ($scope.userGroup) {
                                    var s = $scope.spreadInfo.spread_special_offset[$scope.userGroup[$scope.spreadInfo.security[value.symbol]]];
                                    groupSpread = s ? s/2 : 0;
                                }
                                var fix = '1';
                                spreadLength = quote[3].split('.')[1].length;
                                for (var i=0; i<spreadLength; i++) {
                                    fix = fix+'0';
                                }
                                commonSpread = commonSpread/fix;
                                groupSpread = groupSpread/fix;
                                buy = (Number(quote[3])+commonSpread+groupSpread).toFixed(spreadLength);
                                sell = (Number(quote[2])-commonSpread-groupSpread).toFixed(spreadLength);

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

        function ws_send_msg () {
            var init_symbols = {
                "type": "quote",
                "content":{
                    "symbols": socketPara.request_symbols
                }
            };
            ws.send(JSON.stringify(init_symbols));
            console.log("请求报价品种:" + JSON.stringify(init_symbols));
        }

        function formatDate (date) {
            var d = date.getFullYear()+'-'+todou((date.getMonth()+1))+'-'+todou(date.getDate());
            var t = todou(date.getHours())+':'+todou(date.getMinutes())+':'+todou(date.getSeconds());
            return d+' '+t;
        }

        function todou (n) {
            return n >= 10 ? ''+n : '0'+n; 
        }

        function new_guid () {
            var guid = "";
            for (var i = 1; i <= 32; i++){
              var n = Math.floor(Math.random()*16.0).toString(16);
              guid +=   n;
              if((i==8)||(i==12)||(i==16)||(i==20))
                guid += "-";
            }
            return guid;
        }

    }
})();
