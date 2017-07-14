/**
 * 寻找DOM数据函数
 */
/**
 function getJSONData() {
  var tds = $('.table-personal tbody').find('td');
  var trs = $('.table-personal tbody').find('tr');

  // var names = ['name_en','name_zh','volum','min_volum','max_volum','trade_time','quote_time','desp'];
  // var names = ['name_en','name_zh','dot','lever','fixed','min_volum','standard_volum','trade_time'];
  var names = ['name_en', 'name_zh', 'volum', 'unit', 'min_volum', 'max_volum', 'charge', 'trade_time', 'quote_time', 'desp'];
  var result = [];
  var $index = 0;
  var temp = {}
  $.each(trs, function () {
    $.each(names, function (index, name) {
      console.log($index, name)
      temp[name] = tds[$index].innerHTML.trim();
      if (((~~$index % (~~names.length - 1)) == 0) && $index != 0) {
        console.log(temp)
        result.push(temp);
        temp = new Object();
      } else if ($index == tds.length) {
        result.push(temp);
      }
      $index++;
    })
  })
  console.log(JSON.stringify(result))
}
*/

var cfd = {
  zh: [
    {
      "name_en": "EUSTX50",
      "name_zh": "欧洲上市股票50指数",
      "volum": "1手＝5合约",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "周一－周五 14:00--04:00(次日)",
      "quote_time": "周一－周五 14:00--04:00(次日)",
      "desp": "也称欧洲绩优指数，欧元区蓝筹股股价指数"
    },
    {
      "name_en": "GER30",
      "name_zh": "德国dax指数",
      "volum": "1手＝1合约",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "周一－周五 14:00--04:00(次日)",
      "quote_time": "周一－周五 14:00--04:00(次日)"
    },
    {
      "desp": "德国30种法兰克福上市蓝筹股票指数经过算法后得出收益的指数",
      "name_en": "JPN225",
      "name_zh": "日经指数",
      "volum": "1手＝100合约",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "周一－周五 07:05--04:15(次日)"
    },
    {
      "quote_time": "周一－周五 07:00--04:15(次日)",
      "desp": "日经225只东京交易所上市股票指数",
      "name_en": "NAS100",
      "name_zh": "纳斯达克指数",
      "volum": "1手＝5合约",
      "min_volum": "1",
      "max_volum": "100"
    },
    {
      "trade_time": "周一－周五 06:00--04:15(次日)",
      "quote_time": "周一－周五 06:00--04:15(次日)",
      "desp": "基于高科技股票的指数",
      "name_en": "US30",
      "name_zh": "道琼斯指数",
      "volum": "1手＝1合约",
      "min_volum": "1"
    },
    {
      "max_volum": "100",
      "trade_time": "周一－周五 06:00--04:15(次日)",
      "quote_time": "周一－周五 06:00--04:15(次日)",
      "desp": "美国30家主要工业公司构成的股票指数",
      "name_en": "USA500",
      "name_zh": "标普500指数",
      "volum": "1手＝10合约"
    },
    {
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "周一－周五 06:00--04:15(次日)",
      "quote_time": "周一－周五 06:00--04:15(次日)",
      "desp": "美国500家领军企业构成的股票指数",
      "name_en": "HK50",
      "name_zh": "香港恒生50指数"
    }
  ],
  en: [
    {
      "name_en": "EUSTX50",
      "name_zh": "欧洲上市股票50指数",
      "volum": "1lot＝5contract",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "on Monday - on Friday 14:00--04:00(next day)",
      "quote_time": "on Monday - on Friday 14:00--04:00(next day)",
      "desp": "Also known as European blue chip index in Euro zone"
    },
    {
      "name_en": "GER30",
      "name_zh": "德国dax指数",
      "volum": "1lot＝1contract",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "on Monday - on Friday 14:00--04:00(next day)",
      "quote_time": "on Monday - on Friday 14:00--04:00(next day)"
    },
    {
      "desp": "Index of earnings obtained from 30 kinds of listed blue chip stock indexes in German.",
      "name_en": "JPN225",
      "name_zh": "日经指数",
      "volum": "1lot＝100contract",
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "on Monday - on Friday 07:05--04:15(next day)"
    },
    {
      "quote_time": "on Monday - on Friday 07:00--04:15(next day)",
      "desp": "Index of 225 stocks listed in Tokyo Stock Exchange",
      "name_en": "NAS100",
      "name_zh": "纳斯达克指数",
      "volum": "1lot＝5contract",
      "min_volum": "1",
      "max_volum": "100"
    },
    {
      "trade_time": "on Monday - on Friday 06:00--04:15(next day)",
      "quote_time": "on Monday - on Friday 06:00--04:15(next day)",
      "desp": "Index based on tech stock",
      "name_en": "US30",
      "name_zh": "道琼斯指数",
      "volum": "1lot＝1contract",
      "min_volum": "1"
    },
    {
      "max_volum": "100",
      "trade_time": "on Monday - on Friday 06:00--04:15(next day)",
      "quote_time": "on Monday - on Friday 06:00--04:15(next day)",
      "desp": "Stock index of 30 major industrial enterprises of USA",
      "name_en": "USA500",
      "name_zh": "标普500指数",
      "volum": "1lot＝10contract"
    },
    {
      "min_volum": "1",
      "max_volum": "100",
      "trade_time": "on Monday - on Friday 06:00--04:15(next day)",
      "quote_time": "on Monday - on Friday 06:00--04:15(next day)",
      "desp": "Stock index of 500 leading enterprises in USA",
      "name_en": "HK50",
      "name_zh": "香港恒生50指数"
    }
  ]
}

var forex = {
  zh: [
    {
      "name_en": "AUDUSD",
      "name_zh": "澳元美元",
      "dot": "2.5",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)"
    },
    {
      "name_en": "EURUSD",
      "name_zh": "欧元美元",
      "dot": "2",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000"
    },
    {
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "GBPUSD",
      "name_zh": "英镑美元",
      "dot": "2.2",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01"
    },
    {
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "NZDUSD",
      "name_zh": "纽元美元",
      "dot": "2.8",
      "lever": "50 100 200",
      "fixed": "小数点后五位"
    },
    {
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCAD",
      "name_zh": "美元加元",
      "dot": "2.7",
      "lever": "50 100 200"
    },
    {
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCHF",
      "name_zh": "美元瑞郞",
      "dot": "2.7"
    },
    {
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDJPY",
      "name_zh": "美元日元"
    },
    {
      "dot": "2",
      "lever": "50 100 200",
      "fixed": "小数点后三位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCNH"
    },
    {
      "name_zh": "离岸人民币",
      "dot": "浮动点差",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)"
    }
  ],
  en: [
    {
      "name_en": "AUDUSD",
      "name_zh": "澳元美元",
      "dot": "2.5",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)"
    },
    {
      "name_en": "EURUSD",
      "name_zh": "欧元美元",
      "dot": "2",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000"
    },
    {
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "GBPUSD",
      "name_zh": "英镑美元",
      "dot": "2.2",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01"
    },
    {
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "NZDUSD",
      "name_zh": "纽元美元",
      "dot": "2.8",
      "lever": "50 100 200",
      "fixed": "小数点后五位"
    },
    {
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCAD",
      "name_zh": "美元加元",
      "dot": "2.7",
      "lever": "50 100 200"
    },
    {
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCHF",
      "name_zh": "美元瑞郞",
      "dot": "2.7"
    },
    {
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDJPY",
      "name_zh": "美元日元"
    },
    {
      "dot": "2",
      "lever": "50 100 200",
      "fixed": "小数点后三位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)",
      "name_en": "USDCNH"
    },
    {
      "name_zh": "离岸人民币",
      "dot": "浮动点差",
      "lever": "50 100 200",
      "fixed": "小数点后五位",
      "min_volum": "0.01",
      "standard_volum": "100000",
      "trade_time": "交易日24小时报价</br>交易时段05:05--04:55(次日)"
    }
  ]
}

var oil = {
  zh: [
    {
      "name_en": "XNGUSD",
      "name_zh": "天然气",
      "volum": "百万英国热量单位",
      "unit": "美元",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "周一－周四 07:00--06:00(次日)</br>周五 07:00--05:00(次日)",
      "quote_time": "周一－周四 07:00--06:00(次日)</br>周五 07:00--05:00(次日)",
      "desp": "以NYMEX交易所美国天然气产品为基准的能源合约，天然气提供了美国四分之一左右的能源需求，同时可作为电力期权等产品的对冲工具"
    },
    {
      "name_en": "XTIUSD",
      "name_zh": "西德州原油",
      "volum": "1000 桶",
      "unit": "美元",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "周一－周五 06:00--05:00(次日)",
      "quote_time": "周一－周五 06:00--05:00(次日)"
    },
    {
      "desp": "以NYMEX交易所美国原油为基准的脱硫轻质原油合约，是全球两大原油基准产品之一，被用于多国原油产品的定价基准。也是世界上交易量最大的能源合约",
      "name_en": "XBRUSD",
      "name_zh": "布伦特原油",
      "volum": "1000 桶",
      "unit": "美元",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "周一－周五 08:00--05:00(次日)"
    }
  ],
  en: [
    {
      "name_en": "XNGUSD",
      "name_zh": "天然气",
      "volum": "MBTU",
      "unit": "USD",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "on Monday－on Thursday 07:00--06:00(next day)</br>on Friday 07:00--05:00(next day)",
      "quote_time": "on Monday－on Thursday 07:00--06:00(next day)</br>on Friday 07:00--05:00(next day)",
      "desp": "As for energy contract taking NYMEX US natural gas products as the benchmark, natural gas satisfies about 1/4 energy demands of the US and can also be used as hedging tool for such products as electricity option."
    },
    {
      "name_en": "XTIUSD",
      "name_zh": "西德州原油",
      "volum": "1000 barrels",
      "unit": "USD",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "on Monday－on Friday 06:00--05:00(next day)",
      "quote_time": "on Monday－on Friday 06:00--05:00(next day)"
    },
    {
      "desp": "Desulfurized light crude oil contract with NYMEX US crude oil as the benchmark is one of the two crude oil benchmarking products in the world and is applied by many countries as the pricing datum of crude oil products, which is also the energy contract with the largest trading volume in the world.",
      "name_en": "XBRUSD",
      "name_zh": "布伦特原油",
      "volum": "1000 barrels",
      "unit": "USD",
      "min_volum": "0.01",
      "max_volum": "20",
      "charge": "0",
      "trade_time": "on Monday－on Friday 08:00--05:00(next day)"
    }
  ]
}

var products = {
  oil: oil,
  cfd: cfd,
  forex: forex
}

module.export = function(type){
  return products[type]
}