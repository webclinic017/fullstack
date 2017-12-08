// point
var point = {
    forex: [
        {
            "name": "AUDCAD",
            "min": "2",
            "average": "3",
            "tiger": "1.6"
        },
        {
            "name": "AUDCHF",
            "min": "2",
            "average": "3",
            "tiger": "1.6"
        },
        {
            "name": "AUDJPY",
            "min": "2",
            "average": "2.7",
            "tiger": "1.6"
        },
        {
            "name": "AUDNZD",
            "min": "2",
            "average": "3",
            "tiger": "1.6"
        },
        {
            "name": "AUDUSD",
            "min": "2",
            "average": "2.2",
            "tiger": "1.6"
        },
        {
            "name": "CADCHF",
            "min": "2",
            "average": "2.9",
            "tiger": "1.6"
        },
        {
            "name": "CADJPY",
            "min": "2",
            "average": "2.8",
            "tiger": "1.6"
        },
        {
            "name": "CHFJPY",
            "min": "2",
            "average": "3.1",
            "tiger": "1.6"
        },
        {
            "name": "EURAUD",
            "min": "2",
            "average": "2.9",
            "tiger": "1.6"
        },
        {
            "name": "EURCHF",
            "min": "2",
            "average": "2.5",
            "tiger": "1.6"
        },
        {
            "name": "EURGBP",
            "min": "2",
            "average": "2.4",
            "tiger": "1.6"
        },
        {
            "name": "EURJPY",
            "min": "2",
            "average": "2.4",
            "tiger": "1.6"
        },
        {
            "name": "EURNZD",
            "min": "1.6",
            "average": "3.7",
            "tiger": "1.6"
        },
        {
            "name": "EURUSD",
            "min": "1.8",
            "average": "1.9",
            "tiger": "1.6"
        },
        {
            "name": "EURCAD",
            "min": "2",
            "average": "2.9",
            "tiger": "1.6"
        },
        {
            "name": "GBPAUD",
            "min": "2",
            "average": "3.8",
            "tiger": "1.6"
        },
        {
            "name": "GBPCAD",
            "min": "2",
            "average": "3.6",
            "tiger": "1.6"
        },
        {
            "name": "GBPUSD",
            "min": "1.8",
            "average": "2.3",
            "tiger": "1.6"
        },
        {
            "name": "GBPNZD",
            "min": "1.6",
            "average": "4.3",
            "tiger": "1.6"
        },
        {
            "name": "GBPJPY",
            "min": "2",
            "average": "3",
            "tiger": "1.6"
        },
        {
            "name": "GBPCHF",
            "min": "2",
            "average": "2.8",
            "tiger": "1.6"
        },
        {
            "name": "NZDCAD",
            "min": "2",
            "average": "3.2",
            "tiger": "1.6"
        },
        {
            "name": "NZDCHF",
            "min": "2",
            "average": "3.2",
            "tiger": "1.6"
        },
        {
            "name": "NZDJPY",
            "min": "2",
            "average": "3",
            "tiger": "1.6"
        },
        {
            "name": "NZDUSD",
            "min": "2",
            "average": "2.4",
            "tiger": "1.6"
        },
        {
            "name": "USDCNH",
            "min": "1.6",
            "average": "5.4",
            "tiger": "1.6"
        },
        {
            "name": "USDCAD",
            "min": "2",
            "average": "2.4",
            "tiger": "1.6"
        },
        {
            "name": "USDCHF",
            "min": "2",
            "average": "2.5",
            "tiger": "1.6"
        },
        {
            "name": "USDJPY",
            "min": "1.8",
            "average": "1.9",
            "tiger": "1.6"
        }
    ],
    metal: [
        {
            "name": "XAUUSD",
            "min": "3.1",
            "average": "3.7",
            "tiger": "2.8"
        },
        {
            "name": "XAGUSD",
            "min": "30",
            "average": "35.8",
            "tiger": "28"
        },
    ],
    nergy: [
        {
            "name": "XNGUSD",
            "min": "5.5",
            "average": "8.1",
            "tiger": "1.5"
        },
        {
            "name": "XBRUSD",
            "min": "1.9",
            "average": "3.2",
            "tiger": "1.5"
        },
        {
            "name": "XTIUSD",
            "min": "1.9",
            "average": "3.2",
            "tiger": "1.5"
        }
    ],
    contrast: [
        {
            "name": "EUSTX50",
            "min": "10",
            "average": "15.6",
            "tiger": "0"
        },
        {
            "name": "GER30",
            "min": "3",
            "average": "7.4",
            "tiger": "0"
        },
        {
            "name": "HK50",
            "min": "0",
            "average": "61.1",
            "tiger": "0"
        },
        {
            "name": "JPN225",
            "min": "40",
            "average": "81.8",
            "tiger": "0"
        },
        {
            "name": "NAS100",
            "min": "9",
            "average": "10.3",
            "tiger": "0"
        },
        {
            "name": "US30",
            "min": "19",
            "average": "21.4",
            "tiger": "0"
        }
    ]
}

// 库存费
var swap = {
    forex: [
        {
            "name": "AUDCAD",
            "min": "USD",
            "tiger": "1.4 ",
            "commission": "-3.3 "
        },
        {
            "name": "AUDCHF",
            "min": "USD",
            "tiger": "4.8 ",
            "commission": "-7.2 "
        },
        {
            "name": "AUDJPY",
            "min": "USD",
            "tiger": "3.3 ",
            "commission": "-5.4 "
        },
        {
            "name": "AUDNZD",
            "min": "USD",
            "tiger": "-4.6 ",
            "commission": "2.6 "
        },
        {
            "name": "AUDUSD",
            "min": "USD",
            "tiger": "2.7 ",
            "commission": "-4.9 "
        },
        {
            "name": "CADCHF",
            "min": "USD",
            "tiger": "2.6 ",
            "commission": "-5.0 "
        },
        {
            "name": "CADJPY",
            "min": "USD",
            "tiger": "1.1 ",
            "commission": "-3.1 "
        },
        {
            "name": "CHFJPY",
            "min": "USD",
            "tiger": "-3.4 ",
            "commission": "1.2 "
        },
        {
            "name": "EURAUD",
            "min": "USD",
            "tiger": "-7.8 ",
            "commission": "5.9 "
        },
        {
            "name": "EURCHF",
            "min": "USD",
            "tiger": "0.7 ",
            "commission": "-3.1 "
        },
        {
            "name": "EURGBP",
            "min": "USD",
            "tiger": "-3.9 ",
            "commission": "0.4 "
        },
        {
            "name": "EURJPY",
            "min": "USD",
            "tiger": "-1.6 ",
            "commission": "-0.6 "
        },
        {
            "name": "EURNZD",
            "min": "USD",
            "tiger": "-14.0 ",
            "commission": "11.0 "
        },
        {
            "name": "EURUSD",
            "min": "USD",
            "tiger": "-1.9 ",
            "commission": "0.6 "
        },
        {
            "name": "EURCAD",
            "min": "USD",
            "tiger": "-4.3 ",
            "commission": "2.4 "
        },
        {
            "name": "GBPAUD",
            "min": "USD",
            "tiger": "-7.4 ",
            "commission": "5.5 "
        },
        {
            "name": "GBPCAD",
            "min": "USD",
            "tiger": "-2.7 ",
            "commission": "0.7 "
        },
        {
            "name": "GBPUSD",
            "min": "USD",
            "tiger": "0.6 ",
            "commission": "-1.9 "
        },
        {
            "name": "GBPNZD",
            "min": "USD",
            "tiger": "-14.9 ",
            "commission": "12.4 "
        },
        {
            "name": "GBPJPY",
            "min": "USD",
            "tiger": "1.1 ",
            "commission": "-3.5 "
        },
        {
            "name": "GBPCHF",
            "min": "USD",
            "tiger": "4.3 ",
            "commission": "-6.9 "
        },
        {
            "name": "NZDCAD",
            "min": "USD",
            "tiger": "4.3 ",
            "commission": "-6.4 "
        },
        {
            "name": "NZDCHF",
            "min": "USD",
            "tiger": "7.3 ",
            "commission": "-10.0 "
        },
        {
            "name": "NZDJPY",
            "min": "USD",
            "tiger": "6.0 ",
            "commission": "-8.4 "
        },
        {
            "name": "NZDUSD",
            "min": "USD",
            "tiger": "5.4 ",
            "commission": "-7.9 "
        },
        {
            "name": "USDCNH",
            "min": "USD",
            "tiger": "-16.8 ",
            "commission": "-14.0 "
        },
        {
            "name": "USDCAD",
            "min": "USD",
            "tiger": "-2.7 ",
            "commission": "0.8 "
        },
        {
            "name": "USDCHF",
            "min": "USD",
            "tiger": "1.6 ",
            "commission": "-4.0 "
        },
        {
            "name": "USDJPY",
            "min": "USD",
            "tiger": "0.1 ",
            "commission": "-1.3 "
        }
    ],
    metal: [
        {
            "name": "XAUUSD",
            "min": "USD",
            "tiger": "-1.7 ",
            "commission": "-0.3 "
        },
        {
            "name": "XAGUSD",
            "min": "USD",
            "tiger": "-1.4 ",
            "commission": "-1.0 "
        }
    ],
    nergy: [
        {
            "name": "XNGUSD",
            "min": "USD",
            "tiger": "-60.0 ",
            "commission": "5.1 "
        },
        {
            "name": "XBRUSD",
            "min": "USD",
            "tiger": "-15.0 ",
            "commission": "5.1 "
        },
        {
            "name": "XTIUSD",
            "min": "USD",
            "tiger": "-20.0 ",
            "commission": "2.0 "
        }
    ],
    contrast: [
        {
            "name": "EUSTX50",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        },
        {
            "name": "GER30",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        },
        {
            "name": "HK50",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        },
        {
            "name": "JPN225",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        },
        {
            "name": "NAS100",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        },
        {
            "name": "US30",
            "min": "USD",
            "tiger": "-5.85 ",
            "commission": "-3.5 "
        }
    ]
}

// fee
var fee = {
    // 本无此分类，仅为保持数据结构一致，前端处理方便
    forex: [
        {
            "name": "AUS200",
            "spread": "200",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "EUSTX50",
            "spread": "100",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "GER30",
            "spread": "70",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "HK50",
            "spread": "1000",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "JPN225",
            "spread": "500",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "SPA35",
            "spread": "600",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "NAS100",
            "spread": "100",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "UK100",
            "spread": "600",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "US30",
            "spread": "280",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "USA500",
            "spread": "60",
            "addedSpread": "0",
            "commission": "$10"
        },
        {
            "name": "FRA40",
            "spread": "100",
            "addedSpread": "0",
            "commission": "$10"
        }
    ]
}

module.exports = {
    point: point,
    swap: swap,
    fee: fee
}