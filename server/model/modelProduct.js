/**
 * pull DOM数据
 */
/**
 function getJSONData() {
  // var names = ['name_en','name_zh','volum','min_volum','max_volum','trade_time','quote_time','desp'];
  // var names = ['name_en','name_zh','dot','lever','fixed','min_volum','standard_volum','trade_time'];
  // var names = ['name_en', 'name_zh', 'volum', 'unit', 'min_volum', 'max_volum', 'charge', 'trade_time', 'quote_time', 'desp'];
  
  (function(names){
    var trs = $('.table-personal tbody').find('tr');
      var result = [];
      $.each(trs, function(index, item){
          console.log('tritem',item)
          var temp = {};
          var tds = $(item).find('td');
          $.each(names, function(index, item){
              console.log('tditem',item)
              temp[item] = tds[index].innerHTML.trim();
          })
      console.log('temp',temp)
          result.push(temp);
      })
    console.log(JSON.stringify(result))
  }(names))
}
*/

var cfd = {
    cn: [{
        "name_en": "EUSTX50",
        "name_zh": "欧洲上市股票50指数",
        "volum": "1手＝5合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周四 15:00-05:00(次日) 周五 15:00-04:45（次日）",
        "quote_time": "周一－周四 15:00-05:00(次日) 周五 15:00-04:45（次日）",
        "desp": "也称欧洲绩优指数，欧元区蓝筹股股价指数"
    },
    {
        "name_en": "GER30",
        "name_zh": "德国dax指数",
        "volum": "1手＝1合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 15:00-05:00(次日)",
        "quote_time": "周一－周五 15:00-05:00(次日)",
        "desp": "德国30种法兰克福上市蓝筹股票指数经过算法后得出收益的指数"
    },
    {
        "name_en": "JPN225",
        "name_zh": "日经指数",
        "volum": "1手＝100合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 08:00-05:15（次日）",
        "quote_time": "周一－周五 08:00-05:15（次日）",
        "desp": "日经225只东京交易所上市股票指数"
    },
    {
        "name_en": "NAS100",
        "name_zh": "纳斯达克指数",
        "volum": "1手＝5合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "基于高科技股票的指数"
    },
    {
        "name_en": "US30",
        "name_zh": "道琼斯指数",
        "volum": "1手＝1合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "美国30家主要工业公司构成的股票指数"
    },
    {
        "name_en": "USA500",
        "name_zh": "标普500指数",
        "volum": "1手＝10合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周一－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "美国500家领军企业构成的股票指数"
    },
    {
        "name_en": "HK50",
        "name_zh": "香港恒生50指数",
        "volum": "1手＝10合约",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周一－周五 09:15-12:00, 13:00-16:30, 17:15-01:00（次日）",
        "quote_time": "周一－周五 09:15-12:00, 13:00-16:30, 17:15-01:00（次日）",
        "desp": "香港恒生 50 指数（HK50）由香港股票交易所上市的 50 家最大的上市公司的市值加权而得。该指数囊括 60% 的市值并包含了赫赫有名的公司，诸如汇丰集团、中国建设银行和中国移动"
    }
    ],
    en: [{
        "name_en": "EUSTX50",
        "name_zh": "欧洲上市股票50指数",
        "volum": "1lot＝5contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Thursday 15:00-05:00(next day) on Friday 15:00-04:45(next day)",
        "quote_time": "on Monday - on Thursday 15:00-05:00(next day) on Friday 15:00-04:45(next day)",
        "desp": "Also known as European blue chip index in Euro zone"
    },
    {
        "name_en": "GER30",
        "name_zh": "德国dax指数",
        "volum": "1lot＝1contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 15:00-05:00(next day)",
        "quote_time": "on Monday - on Friday 15:00-05:00(next day)",
        "desp": "Index of earnings obtained from 30 kinds of listed blue chip stock indexes in German."
    },
    {
        "name_en": "JPN225",
        "name_zh": "日经指数",
        "volum": "1lot＝100contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 08:00-05:15(next day)",
        "quote_time": "on Monday - on Friday 08:00-05:15(next day)",
        "desp": "Index of 225 stocks listed in Tokyo Stock Exchange"
    },
    {
        "name_en": "NAS100",
        "name_zh": "纳斯达克指数",
        "volum": "1lot＝5contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "quote_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "desp": "Index based on tech stock"
    },
    {
        "name_en": "US30",
        "name_zh": "道琼斯指数",
        "volum": "1lot＝1contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "quote_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "desp": "Stock index of 30 major industrial enterprises of USA"
    },
    {
        "name_en": "USA500",
        "name_zh": "标普500指数",
        "volum": "1lot＝10contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "quote_time": "on Monday - on Friday 07:00-05:15(next day) 05:30-06:00(next day)",
        "desp": "Stock index of 500 leading enterprises in USA"
    },
    {
        "name_en": "HK50",
        "name_zh": "香港恒生50指数",
        "volum": "1lot＝10contract",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "on Monday - on Friday 09:15-12:00, 13:00-16:30, 17:15-01:00(next day)",
        "quote_time": "on Monday - on Friday 09:15-12:00, 13:00-16:30, 17:15-01:00(next day)",
        "desp": "Hang Seng Midcap 50 Index (HK50) is acquired from the weighted average of the market value of 50 largest enterprises listed in Hong Kong Stock Exchange. The index includes 60% market value and involves well-known enterprises, such as HSBC Group, China Construction Bank and China Mobile"
    }
    ],
    vi: [{
        "name_en": "EUSTX50",
        "name_zh": "欧洲上市股票50指数",
        "volum": "1lot＝5hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 14: 00-04: 00 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 14: 00-04: 00 (ngày hôm sau)",
        "desp": "Còn được gọi là chỉ số chứng khoán blue chip châu Âu trong khu vực đồng Euro"
    },
    {
        "name_en": "GER30",
        "name_zh": "德国dax指数",
        "volum": "1lot＝1hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 15: 00-05: 00 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 15: 00-05: 00 (ngày hôm sau)",
        "desp": "Chỉ số lợi nhuận thu được từ 30 loại chỉ số chứng khoán blue chip niêm yết bằng tiếng Đức."
    },
    {
        "name_en": "JPN225",
        "name_zh": "日经指数",
        "volum": "1lot＝100hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 08: 00-05: 15 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 08: 00-05: 15 (ngày hôm sau)",
        "desp": "Chỉ số của 225 cổ phiếu niêm yết trên sàn giao dịch chứng khoán Tokyo"
    },
    {
        "name_en": "NAS100",
        "name_zh": "纳斯达克指数",
        "volum": "1lot＝5hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "desp": "Chỉ số dựa trên cổ phiếu công nghệ"
    },
    {
        "name_en": "US30",
        "name_zh": "道琼斯指数",
        "volum": "1lot＝1hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "desp": "Chỉ số chứng khoán của 30 doanh nghiệp công nghiệp lớn của Mỹ"
    },
    {
        "name_en": "USA500",
        "name_zh": "标普500指数",
        "volum": "1lot＝10hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "desp": "Chỉ số chứng khoán của 500 doanh nghiệp hàng đầu tại Mỹ"
    },
    {
        "name_en": "HK50",
        "name_zh": "香港恒生50指数",
        "volum": "1lot＝10hợp đồng",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "quote_time": "vào thứ Hai - vào thứ Sáu 07: 15-04: 15 (ngày hôm sau)",
        "desp": "Chỉ số Hang Seng Midcap 50 (HK50) được lấy từ mức trung bình số của giá trị thị trường của 50 doanh nghiệp lớn nhất được niêm yết trên Sở Giao dịch Chứng khoán Hồng Kông. Chỉ số này bao gồm 60% giá trị thị trường và bao gồm các doanh nghiệp nổi tiếng như Tập đoàn HSBC, Ngân hàng Xây dựng Trung Quốc và China Mobile"
    }
    ],
    "zh-Hant": [{
        "name_en": "EUSTX50",
        "name_zh": "歐洲上市股票50指數",
        "volum": "1手＝5合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周四 15:00-05:00(次日) 周五 15:00-04:45（次日）",
        "quote_time": "周壹－周四 15:00-05:00(次日) 周五 15:00-04:45（次日）",
        "desp": "也稱歐洲績優指數，歐元區藍籌股股價指數"
    },
    {
        "name_en": "GER30",
        "name_zh": "德國dax指數",
        "volum": "1手＝1合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 15:00-05:00(次日)",
        "quote_time": "周壹－周五 15:00-05:00(次日)",
        "desp": "德國30種法蘭克福上市藍籌股票指數經過算法後得出收益的指數"
    },
    {
        "name_en": "JPN225",
        "name_zh": "日經指數",
        "volum": "1手＝100合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 08:00-05:15（次日）",
        "quote_time": "周壹－周五 08:00-05:15（次日）",
        "desp": "日經225只東京交易所上市股票指數"
    },
    {
        "name_en": "NAS100",
        "name_zh": "納斯達克指數",
        "volum": "1手＝5合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "基於高科技股票的指數"
    },
    {
        "name_en": "US30",
        "name_zh": "道瓊斯指數",
        "volum": "1手＝1合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "美國30家主要工業公司構成的股票指數"
    },
    {
        "name_en": "USA500",
        "name_zh": "標普500指數",
        "volum": "1手＝10合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "quote_time": "周壹－周五 07:00-05:15（次日）05:30-06:00（次日)",
        "desp": "美國500家領軍企業構成的股票指數"
    },
    {
        "name_en": "HK50",
        "name_zh": "香港恒生50指數",
        "volum": "1手＝10合約",
        "min_volum": "1",
        "max_volum": "100",
        "trade_time": "周壹－周五 09:15-12:00, 13:00-16:30, 17:15-01:00（次日）",
        "quote_time": "周壹－周五 09:15-12:00, 13:00-16:30, 17:15-01:00（次日）",
        "desp": "香港恒生 50 指數（HK50）由香港股票交易所上市的 50 家最大的上市公司的市值加權而得。該指數囊括 60% 的市值並包含了赫赫有名的公司，諸如匯豐集團、中國建設銀行和中國移動"
    }
    ]


}

var forex = {
    cn: [{
        "name_en": "AUDUSD",
        "name_zh": "澳元美元",
        "dot": "2.5",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "EURUSD",
        "name_zh": "欧元美元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "GBPUSD",
        "name_zh": "英镑美元",
        "dot": "2.2",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "NZDUSD",
        "name_zh": "纽元美元",
        "dot": "2.8",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCAD",
        "name_zh": "美元加元",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCHF",
        "name_zh": "美元瑞郞",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "USDJPY",
        "name_zh": "美元日元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "小数点后三位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCNH",
        "name_zh": "离岸人民币",
        "dot": "浮动点差",
        "lever": "50 100 200",
        "fixed": "小数点后五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小时报价 交易时段06:00-06:00（次日）"
    }
    ],
    en: [{
        "name_en": "AUDUSD",
        "name_zh": "澳元美元",
        "dot": "2.5",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "EURUSD",
        "name_zh": "欧元美元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "GBPUSD",
        "name_zh": "英镑美元",
        "dot": "2.2",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "NZDUSD",
        "name_zh": "纽元美元",
        "dot": "2.8",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "USDCAD",
        "name_zh": "美元加元",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "USDCHF",
        "name_zh": "美元瑞郞",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "USDJPY",
        "name_zh": "美元日元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "Three digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    },
    {
        "name_en": "USDCNH",
        "name_zh": "离岸人民币",
        "dot": "Floating point difference",
        "lever": "50 100 200",
        "fixed": "Five digits after the decimal point",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "24h quotation on trading day Trading period:06:00-06:00(next day)"
    }
    ],
    vi: [{
        "name_en": "AUDUSD",
        "name_zh": "澳元美元",
        "dot": "2.5",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "EURUSD",
        "name_zh": "欧元美元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "GBPUSD",
        "name_zh": "英镑美元",
        "dot": "2.2",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "NZDUSD",
        "name_zh": "纽元美元",
        "dot": "2.8",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "USDCAD",
        "name_zh": "美元加元",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "USDCHF",
        "name_zh": "美元瑞郞",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "USDJPY",
        "name_zh": "美元日元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "Ba chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    },
    {
        "name_en": "USDCNH",
        "name_zh": "离岸人民币",
        "dot": "Floating point difference",
        "lever": "50 100 200",
        "fixed": "Năm chữ số sau dấu thập phân",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "Báo giá 24h trong ngày giao dịch Thời gian giao dịch: 05: 05-04: 55 (ngày hôm sau)"
    }
    ],
    "zh-Hant": [{
        "name_en": "AUDUSD",
        "name_zh": "澳元美元",
        "dot": "2.5",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "EURUSD",
        "name_zh": "歐元美元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "GBPUSD",
        "name_zh": "英鎊美元",
        "dot": "2.2",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "NZDUSD",
        "name_zh": "紐元美元",
        "dot": "2.8",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCAD",
        "name_zh": "美元加元",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCHF",
        "name_zh": "美元瑞郞",
        "dot": "2.7",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "USDJPY",
        "name_zh": "美元日元",
        "dot": "2",
        "lever": "50 100 200",
        "fixed": "小數點後三位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    },
    {
        "name_en": "USDCNH",
        "name_zh": "離岸人民幣",
        "dot": "浮動點差",
        "lever": "50 100 200",
        "fixed": "小數點後五位",
        "min_volum": "0.01",
        "standard_volum": "100000",
        "trade_time": "交易日24小時報價 交易時段06:00-06:00（次日）"
    }
    ]

}

var oil = {
    cn: [{
        "name_en": "XNGUSD",
        "name_zh": "天然气",
        "volum": "10000立方米/手",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周一－周五 07:00-06:00（次日）",
        "quote_time": "周一－周五 07:00-06:00（次日）",
        "desp": "天然气是代表石油和其他传统资源（如煤炭）的替代能源的燃料。 由于石油特别昂贵，天然气正成为“清洁”能源的既定来源，目前提供约三分之一的英国能源供应。"
    },
    {
        "name_en": "XTIUSD",
        "name_zh": "西德州原油",
        "volum": "1000 桶",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周一－周五 07:00-06:00（次日）",
        "quote_time": "周一－周五 07:00-06:00（次日）",
        "desp": "美国石油公司（Texas Light）或Texas Light Sweet公司是投资者在全球范围内用于确定特定等级石油价值的两个最重要的基准之一。 美国石油被认为是“甜”原油，因为它的硫浓度低于北海当量。 我们的石油差价合约允许我们的客户推测由全球供需影响决定的实时价格变动。"
    },
    {
        "name_en": "XBRUSD",
        "name_zh": "布伦特原油",
        "volum": "1000 桶",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周一－周五 09:00-06:00（次日）",
        "quote_time": "周一－周五 09:00-06:00（次日）",
        "desp": "北海石油是全球第二个重要的油价基准。 这种类型的油主要用于精炼成柴油和汽油。 我们的差价合约允许我们的客户推测美国石油的替代基准价格。"
    }
    ],
    en: [{
        "name_en": "XNGUSD",
        "name_zh": "天然气",
        "volum": "10000㎥/lot",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "on Monday－on Friday 07:00-06:00(next day)",
        "quote_time": "on Monday－on Friday 07:00-06:00(next day)",
        "desp": "Change: As for energy contract taking NYMEX US natural gas products as the benchmark, natural gas satisfies about 1/4 energy demands of the US and can also be used as hedging tool for such products as electricity option. To: Natural gas is a fuel representing an alternative energy source to oil and other traditional resources such as coal. As oil in particular becomes more expensive to access, natural gas is becoming an established source of ‘cleaner’ energy, currently providing around one third of the UK’s energy supply."
    },
    {
        "name_en": "XTIUSD",
        "name_zh": "西德州原油",
        "volum": "1000 barrels",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "on Monday－on Friday 07:00-06:00(next day)",
        "quote_time": "on Monday－on Friday 07:00-06:00(next day)",
        "desp": "Change: Desulfurized light crude oil contract with NYMEX US crude oil as the benchmark is one of the two crude oil benchmarking products in the world and is applied by many countries as the pricing datum of crude oil products, which is also the energy contract with the largest trading volume in the world. To: US Oil, or Texas Light Sweet, is one of the two most important benchmarks used globally by investors to determine the value of a barrel of a particular grade of oil. US oil is considered ‘sweet’ crude as it has a lower concentration of sulphur than its North Sea equivalent. Our Oil CFD’s allow our clients to speculate on real time price movements determined by the effects of global supply and demand."
    },
    {
        "name_en": "XBRUSD",
        "name_zh": "布伦特原油",
        "volum": "1000 barrels",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "on Monday－on Friday 09:00-06:00(next day)",
        "quote_time": "on Monday－on Friday 09:00-06:00(next day)",
        "desp": "Change: Commonly known as North Sea oil, which is also desulfurized light crude oil. Pricing datum of crude oil in Europe and one of the two major crude oil benchmarking products in the world, which can also be applied as hedging product against West Texas crude oil. To: North Sea Oil is the second important global benchmark for oil prices. This type of oil is mainly used to refine into diesel fuel and gasoline. Our CFD allows our clients to speculate on the price of this alternative benchmark to US Oil."
    }
    ],
    vi: [{
        "name_en": "XNGUSD",
        "name_zh": "天然气",
        "volum": "10000㎥/lot",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "quote_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "desp": "Khí tự nhiên là một loại nhiên liệu đại diên cho một nguồn năng lượng thay thế cho dầu mỏ và các nguồn tài nguyên truyền thống khác như than đá. Khi dầu đặc biệt trở nên đắt hơn để tiếp cận, khí tự nhiên đang trở thành nguồn năng lượng sạch hơn, hiện đang cung cấp khoảng 1/3 năng lượng của Vương Quốc Anh."
    },
    {
        "name_en": "XTIUSD",
        "name_zh": "西德州原油",
        "volum": "1000 thùng",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "quote_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "desp": "US Oil, hay Texas Light Sweer, là một trong hai tiêu chí quan trọng nhất được các nhà đầu tư sử dụng trên toàn cầu để xác định giá trị của một thùng dầu cấp đặc biệt. Dầu của Mỹ được coi là dầu thô “ngọt” vì nó có chứa hàm lượng lưu huỳnh thấp hơn so với tương đương với Biển Bắc. Dầu CFD của chúng tôi cho phép khách hàng của chúng tôi suy đoán về các biến động giá theo thời gian thực được xác định bởi ảnh hưởng của cung và cầu toàn cầu."
    },
    {
        "name_en": "XBRUSD",
        "name_zh": "布伦特原油",
        "volum": "1000 thùng",
        "unit": "USD",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "quote_time": "vào Thứ Hai-Thứ Sáu 06:00-05:00(ngày tiếp theo)",
        "desp": "Dầu biển Bắc là tiêu chuẩn quan trọng thứ hai toàn cầu về giá dầu. Loại dầu này chủ yếu được sử dụng để tinh chế thành nhiên liệu diesel và xăng. CFD của chúng tôi cho phép khách hàng của chúng tôi suy đoán về mức giá của tiêu chuẩn thay thế này đối với US Oil."
    }
    ],
    "zh-Hant": [{
        "name_en": "XNGUSD",
        "name_zh": "天然氣",
        "volum": "10000立方米/手",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周壹－周五 07:00-06:00（次日）",
        "quote_time": "周壹－周五 07:00-06:00（次日）",
        "desp": "天然氣是代表石油和其他傳統資源（如煤炭）的替代能源的燃料。 由於石油特別昂貴，天然氣正成為“清潔”能源的既定來源，目前提供約三分之壹的英國能源供應。"
    },
    {
        "name_en": "XTIUSD",
        "name_zh": "西德州原油",
        "volum": "1000 桶",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周壹－周五 07:00-06:00（次日）",
        "quote_time": "周壹－周五 07:00-06:00（次日）",
        "desp": "美國石油公司（Texas Light）或Texas Light Sweet公司是投資者在全球範圍內用於確定特定等級石油價值的兩個最重要的基準之壹。 美國石油被認為是“甜”原油，因為它的硫濃度低於北海當量。 我們的石油差價合約允許我們的客戶推測由全球供需影響決定的實時價格變動。"
    },
    {
        "name_en": "XBRUSD",
        "name_zh": "布倫特原油",
        "volum": "1000 桶",
        "unit": "美元",
        "min_volum": "0.01",
        "max_volum": "20",
        "charge": "0",
        "trade_time": "周壹－周五 09:00-06:00（次日）",
        "quote_time": "周壹－周五 09:00-06:00（次日）",
        "desp": "北海石油是全球第二個重要的油價基準。 這種類型的油主要用於精煉成柴油和汽油。 我們的差價合約允許我們的客戶推測美國石油的替代基準價格。"
    }
    ]

}

var metal = {
    cn: [
        {
            "name_en": "XAUUSD",
            "name_zh": "黄金",
            "dot": "4.5",
            "lever": "50 100 200",
            "fixed": "小数点后两位",
            "min_volum": "0.01",
            "standard_volum": "100 盎司",
            "trade_time": "交易日交易时段 07:00-06:00（次日）"
        },  
        {
            "name_en": "XAGUSD",
            "name_zh": "白银",
            "dot": "40",
            "lever": "50 100 200",
            "fixed": "小数点后三位",
            "min_volum": "0.01",
            "standard_volum": "5000 盎司",
            "trade_time": "交易日交易时段 07:00-06:00（次日）"
        },   
    ],
    en: [
        {
            "name_en": "XAUUSD",
            "name_zh": "黄金",
            "dot": "4.5",
            "lever": "50 100 200",
            "fixed": "Two digits after the decimal point",
            "min_volum": "0.01",
            "standard_volum": "100 ounces",
            "trade_time": "Trading period on the trading day 07:00-06:00(next day)"
        },
        {
            "name_en": "XAGUSD",
            "name_zh": "白银",
            "dot": "40",
            "lever": "50 100 200",
            "fixed": "Three digits after the decimal point",
            "min_volum": "0.01",
            "standard_volum": "5000 ounces",
            "trade_time": "Trading period on the trading day 07:00-06:00(next day)"
        },  
    ],
    vi: [
        {
            "name_en": "XAUUSD",
            "name_zh": "黄金",
            "dot": "4.5",
            "lever": "50 100 200",
            "fixed": "Hai chữ số sau dấu thập phân",
            "min_volum": "0.01",
            "standard_volum": "100 ounces",
            "trade_time": "Thời gian giao dịch vào ngày giao dịch 06:00-05:00 ( ngày tiếp theo"
        },
        {
            "name_en": "XAGUSD",
            "name_zh": "白银",
            "dot": "40",
            "lever": "50 100 200",
            "fixed": "Ba chữ số sau dấu phẩy thập phân",
            "min_volum": "0.01",
            "standard_volum": "5000 ounces",
            "trade_time": "Thời gian giao dịch vào ngày giao dịch 06:00-05:00 ( ngày tiếp theo"
        },  
    ],
    "zh-Hant": [
        {
            "name_en": "XAUUSD",
            "name_zh": "黃金",
            "dot": "4.5",
            "lever": "50 100 200",
            "fixed": "小數點後兩位",
            "min_volum": "0.01",
            "standard_volum": "100 盎司",
            "trade_time": "交易日交易時段 07:00-06:00（次日）"
        },  
        {
            "name_en": "XAGUSD",
            "name_zh": "白銀",
            "dot": "40",
            "lever": "50 100 200",
            "fixed": "小數點後三位",
            "min_volum": "0.01",
            "standard_volum": "5000 盎司",
            "trade_time": "交易日交易時段 07:00-06:00（次日）"
        },   
    ]

}

module.exports = {
    oil: oil,
    cfd: cfd,
    forex: forex,
    metal: metal
}
