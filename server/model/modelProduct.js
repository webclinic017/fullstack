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
        "trade_time": "周一－周五 07:00-06:00（次日）",
        "quote_time": "周一－周五 07:00-06:00（次日）",
        "desp": "以NYMEX交易所美国原油为基准的脱硫轻质原油合约，是全球两大原油基准产品之一，被用于多国原油产品的定价基准。也是世界上交易量最大的能源合约"
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
        "desp": "即是俗称的北海油，同样是脱硫轻质原油。是欧洲地区的原油定价基准，也是全球两大原油基准产品之一，可以用于与西德州原油进行对冲的产品"
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
        "trade_time": "on Monday－on Friday 07:00-06:00(next day)",
        "quote_time": "on Monday－on Friday 07:00-06:00(next day)",
        "desp": "Desulfurized light crude oil contract with NYMEX US crude oil as the benchmark is one of the two crude oil benchmarking products in the world and is applied by many countries as the pricing datum of crude oil products, which is also the energy contract with the largest trading volume in the world."
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
        "desp": "Commonly known as North Sea oil, which is also desulfurized light crude oil. Pricing datum of crude oil in Europe and one of the two major crude oil benchmarking products in the world, which can also be applied as hedging product against West Texas crude oil"
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
        "desp": "Đối với hợp đồng năng lượng lấy các sản phẩm khí tự nhiên của NYMEX Mỹ làm chuẩn mực, khí đốt tự nhiên đáp"
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
        "desp": "Đối với hợp đồng năng lượng lấy các sản phẩm khí tự nhiên của NYMEX Mỹ làm chuẩn mực, khí đốt tự nhiên đáp ứng khoảng 1/4 nhu cầu năng lượng của Mỹ và cũng có thể được sử dụng như công cụ bảo hiểm rủi ro cho các sản phẩm như hợp đồng tùy chọn với điện."
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
        "desp": "Thường được gọi là dầu Biển Bắc, cũng là dầu thô nhẹ được khử lưu huỳnh. Giá dầu thô của dầu thô ở châu Âu và một trong hai sản phẩm dầu thô chính trên thế giới, cũng có thể được áp dụng như sản phẩm bảo hiểm rủi ro chống lại dầu thô Tây Texas"
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
        "desp": "以NYMEX交易所美國天然氣產品為基準的能源合約，天然氣提供了美國四分之壹左右的能源需求，同時可作為電力期權等產品的對沖工具"
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
        "desp": "以NYMEX交易所美國原油為基準的脫硫輕質原油合約，是全球兩大原油基準產品之壹，被用於多國原油產品的定價基準。也是世界上交易量最大的能源合約"
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
        "desp": "即是俗稱的北海油，同樣是脫硫輕質原油。是歐洲地區的原油定價基準，也是全球兩大原油基準產品之壹，可以用於與西德州原油進行對沖的產品"
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
