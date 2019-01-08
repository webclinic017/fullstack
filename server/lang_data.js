'use strict';
var _ = require('lodash');

module.exports = function () {
    var envConfig = require('./get_env_config').envConfig;
    var company_name = envConfig.company_name;
    var url_path = envConfig.url_path;
    var companyConfig = {};
    var date = require('./tools').date;
    var app_version = company_name == 'tigerwit' ? 'global' : 'pandafx';
    var versionAndroidApp = require('./app_ctrl.config').getAppInfo(app_version)['cn'].android.app_info.url;
    var imagePath = require('./mutilang/imagePath');

    var data = {
        // image path
        image: imagePath,

        registerPath: {
            zh: url_path + '/space/#/account/register',
            en: url_path + '/space/#/account/register',
            vi: url_path + '/space/#/account/register',
            "zh-Hant": url_path + '/space/#/account/register'
        },
        companyNickName:{
            zh:"小老虎",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"小老虎",
            id:"TigerWit"
        },
        companyZhName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit"
        },
        companyEnName:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit"
        },
        title:{
            zh:"TigerWit",
            en:"TigerWit",
            vi:"TigerWit",
            "zh-Hant":"TigerWit",
            id:"TigerWit"
        },
        supportEmail:{
            zh:"",
            en:"",
            vi:"",
            "zh-Hant":"",
            id:""
        },
        ibEmail:{
            zh:"",
            en:"",
            vi:"",
            "zh-Hant":"",
            id:""
        },
        webSite:{
            zh:"www.tigerwit.com",
            en:"www.tigerwit.com",
            vi:"www.tigerwit.com",
            "zh-Hant":"www.tigerwit.com",
            id:"www.tigerwit.com"
        },
        webMt4Download:{
            zh:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            en:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            vi:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            "zh-Hant":"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe",
            id:"https://download.mql5.com/cdn/web/tiger.wit.group/mt4/tigerwit4setup.exe"
        },
        androidApp: {
            zh: versionAndroidApp,
            en: versionAndroidApp,
            vi: versionAndroidApp,
            "zh-Hant": versionAndroidApp,
            "id": versionAndroidApp
        },
        download:{
            zh:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            en:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            vi:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            "zh-Hant":"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex",
            id:"http://android.myapp.com/myapp/detail.htm?apkName=com.tigerwit.forex"
        },
        downloadGlobalIos:{
            zh:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            en:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            vi:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            "zh-Hant":"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton",
            id:"http://20805457p.rfihub.com/ca.gif?rb=36314&ca=20805457&_o=36314&_t=20805457&rd=http://hyperurl.co/4roggv?utm_source=website&utm_medium=appstorebutton"
        },
        downloadGlobalAndroid:{
            zh:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            en:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            vi:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            "zh-Hant":"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex",
            id:"http://20805458p.rfihub.com/ca.gif?rb=36314&ca=20805458&_o=36314&_t=20805458&rd=https://play.google.com/store/apps/details?id=com.tigerwit.forex"
        },
        fuzhirenshu:{
            en:"Copiers",
            zh:"复制人数",
            vi:"Những người sao chép",
            "zh-Hant":"復制人數",
            id:"Pengikut"
        },
        waihui:{
            en:"Forex",
            zh:"外汇",
            vi:"Sàn giao dịch Forex",
            "zh-Hant":"外匯",
            id:"Valas"
        },
        guijinshu:{
            en:"Precious metal",
            zh:"贵金属",
            vi:"Kim loại quý",
            "zh-Hant":"貴金屬",
            id:"Logam Mulia"
        },
        nengyuan:{
            en:"Energy",
            zh:"能源",
            vi:"Năng lượng",
            "zh-Hant":"能源",
            id:"Energi"
        },
        CFD:{
            en:"CFD",
            zh:"差价合约",
            vi:"CFD",
            "zh-Hant":"差價合約",
            id:"CFD"
        },
        faq:{
            en:"FAQ",
            zh:"常见问题",
            vi:"Câu hỏi thường gặp",
            "zh-Hant":"常見問題",
            id:"FAQ"
        },
        login:{
            en:"Login",
            zh:"登录",
            vi:"Đăng nhập",
            "zh-Hant":"登錄",
            id:"Masuk"
        },
        register:{
            en:"Open an account",
            zh:"注册",
            vi:"Mở tài khoản",
            "zh-Hant":"註冊",
            id:"Buka Akun"
        },
        signout:{
            en:"sign out",
            zh:"退出",
            vi:"Thoát ra",
            "zh-Hant":"退出",
            id:"Keluar"
        },
        password:{
            en:"Password",
            zh:"密码",
            vi:"Mật khẩu",
            "zh-Hant":"密碼",
            id:"Kata Sandi"
        },
        username:{
            en:"Username",
            zh:"昵称",
            vi:"Tên người dùng",
            "zh-Hant":"昵稱",
            id:"Nama Pengguna"
        },
        phone:{
            en:"Phone",
            zh:"手机号码",
            vi:"Điện thoại",
            "zh-Hant":"手機號碼",
            id:"Telepon"
        },
        email:{
            en:"E-mail",
            zh:"电子邮箱",
            vi:"E-mail",
            "zh-Hant":"電子郵箱",
            id:"mail"
        },
        verifycode:{
            en:"Verification code",
            zh:"验证码",
            vi:"Mã xác nhận",
            "zh-Hant":"驗證碼",
            id:"Kode Verifikasi"
        },
        openAccount:{
            en:"Opening an account",
            zh:"开立账户",
            vi:"Mở một tài khoản",
            "zh-Hant":"開立賬戶",
            id:"Pembukaan Akun"
        },
        depAndWith:{
            en:"Deposit and withdrawal",
            zh:"出入金",
            vi:"Nạp và rút tiền",
            "zh-Hant":"出入金",
            id:"Setor dan Tarik"
        },
        trading:{
            en:"Trading",
            zh:"交易",
            vi:"Giao dịch",
            "zh-Hant":"交易",
            id:"Transaksi"
        },
        platform:{
            en:"Platform",
            zh:"平台",
            vi:"Sân ga",
            "zh-Hant":"平臺",
            id:"Platform"
        },
        swapRate:{
            en:"Swaps",
            zh:"隔夜利息",
            vi:"Phí qua đêm",
            "zh-Hant":"隔夜利息",
            id:"Swap"
        },
        nodata:{
            en:"No data",
            zh:"暂无数据",
            vi:"Không có dữ liệu",
            "zh-Hant":"暫無數據",
            id:"Data tidak tersedia"
        },
        more:{
            en:"Click for More",
            zh:"点击查看更多信息",
            vi:"Nhấp để biết chi tiết",
            "zh-Hant":"點擊查看更多信息",
            id:"Klik untuk lebih lanjut"
        },
        fold:{
            en:"Fold",
            zh:"收起",
            vi:"Gặp lại",
            "zh-Hant":"收起",
            id:"Kelipatan"
        },
        navbar1:{
            en:"Home",
            zh:"首页",
            vi:"Home",
            "zh-Hant":"首頁",
            id:"Beranda"
        },
        navbar2:{
            en:"Copy trading",
            zh:"复制跟单",
            vi:"Copy giao dịch",
            "zh-Hant":"復制跟單",
            id:"Copy Trading"
        },
        navbar3:{
            en:"Follow a Master",
            zh:"高手跟单",
            vi:"Sao chép Bậc thầy",
            "zh-Hant":"高手跟單",
            id:"Ikuti seorang Master"
        },
        navbar4:{
            en:"Follow masters' move regularly",
            zh:"定期跟单",
            vi:"Follow masters' move regularly",
            "zh-Hant":"定期跟單",
            id:"Ikuti transaksi master secara teratur"
        },
        navbar5:{
            en:"Products",
            zh:"产品介绍",
            vi:"Sản phẩm",
            "zh-Hant":"產品介紹",
            id:"Produk"
        },
        navbar6:{
            en:"Foreign Exchange",
            zh:"外汇交易",
            vi:"Ngoại hối",
            "zh-Hant":"外匯交易",
            id:"Valuta Asing"
        },
        navbar7:{
            en:"Crude Oil",
            zh:"原油交易",
            vi:"Dầu thô",
            "zh-Hant":"原油交易",
            id:"Minyak Mentah"
        },
        navbar8:{
            en:"Precious Metals",
            zh:"贵金属交易",
            vi:"Kim loại quý",
            "zh-Hant":"貴金屬交易",
            id:"Logam Mulia"
        },
        navbar9:{
            en:"Contracts for Difference",
            zh:"指数差价合约",
            vi:"Hợp đồng chênh lệch",
            "zh-Hant":"指數差價合約",
            id:"Contracts for Difference"
        },
        navbar10:{
            en:"About us",
            zh:"关于TigerWit",
            vi:"Chúng tôi",
            "zh-Hant":"關於TigerWit",
            id:"Tentang Kami"
        },
        navbar11:{
            en:"About TigerWit",
            zh:"关于TigerWit",
            vi:"Về TigerWit",
            "zh-Hant":"關於TigerWit",
            id:"Tentang TigerWit"
        },
        navbar11_f:{
            en:"Company information",
            zh:"关于TigerWit",
            vi:"Về TigerWit",
            "zh-Hant":"關於TigerWit",
            id:"Informasi Perusahaan"
        },
        navbar16:{
            en:"App",
            zh:"下载APP",
            vi:"App",
            "zh-Hant":"下載APP",
            id:"App"
        },
        navbar_setCookie1:{
            en:"How we use cookies",
            zh:"我们如何使用cookies",
            vi:"Cách chúng tôi sử dụng Cookies",
            "zh-Hant":"我們如何使用cookies",
            id:"Bagaimana cara kami menggunakan cookie"
        },
        navbar_setCookie2:{
            en:"We use cookies for a number of reasons, such as keeping TigerWit sites reliable and secure, personalising content and ads, providing social media features and to analyse how our sites are used. See our ",
            zh:"我们使用网站功能所需的cookie，增强TigerWit官网的可靠性和安全性、展示个性化的内容和广告、提供社交媒体功能以及分析我们网站的使用方式。请参阅我们的",
            vi:"Chúng tôi sử dụng cookie vì một số lý do, chẳng hạn như giữ các trang TigerWit đáng tin cậy và bảo mật, cá nhân hóa nội dung và quảng cáo, cung cấp các tính năng truyền thông xã hội và phân tích cách trang web của chúng tôi được sử dụng ",
            "zh-Hant":"我們使用網站功能所需的cookie，增強TigerWit官網的可靠性和安全性、展示個性化的內容和廣告、提供社交媒體功能以及分析我們網站的使用方式。請參閱我們的",
            id:"Kami menggunakan cookie dengan berbagai alasan, seperti menjaga situs TigerWit tetap aman dan dapat dipercaya, menyesuaikan konten dan iklan, menyediakan fitur sosial media dan menganalisa bagaimana situs kami digunakan. Lihat…"
        },
        navbar_setCookie3:{
            en:"Cookie Policy",
            zh:"Cookie政策",
            vi:"Chính sách Cookies",
            "zh-Hant":"Cookie政策",
            id:"Kebijakan Cookie"
        },
        navbar_setCookie4:{
            en:" for more details",
            zh:"了解更多详情",
            vi:" nhiều chi tiết hơn",
            "zh-Hant":"了解更多詳情",
            id:"Untuk lebih jelasnya"
        },
        navbar_setCookie5:{
            en:"ACCEPT AND CONTINUE",
            zh:"接受并继续",
            vi:"Chấp nhận và tiếp tục",
            "zh-Hant":"接受並繼續",
            id:"Terima dan Lanjutkan"
        },
        foot1:{
            en:"Trading software",
            zh:"交易工具",
            vi:"Phần mềm giao dịch",
            "zh-Hant":"交易工具",
            id:"Platform Trading"
        },
        foot2:{
            en:"MT4 download",
            zh:"MT4 下载",
            vi:"Tải xuống MT4",
            "zh-Hant":"MT4 下載",
            id:"Unduh MT4"
        },
        foot3:{
            en:"MT4 web version",
            zh:"MT4 网页版",
            vi:"Phiên bản MT4 web",
            "zh-Hant":"MT4 網頁版",
            id:"MT4 versi situs web"
        },
        foot4:{
            en:"Learning center",
            zh:"学习中心",
            vi:"Hướng dẫn",
            "zh-Hant":"學習中心",
            id:"Pusat Edukasi"
        },
        foot7:{
            en:"Important information",
            zh:"条件和条款",
            vi:"Thông tin quan trọng",
            "zh-Hant":"條件和條款",
            id:"Informasi Penting"
        },
        foot8:{
            en:"Risk Disclosure Statement",
            zh:"风险披露书",
            vi:"Tuyên Bố Tiết Lộ Rủi Ro",
            "zh-Hant":"風險披露書",
            id:"Pernyataan Pemberitahuan Risiko"
        },
        foot9:{
            en:"Declaration by Client",
            zh:"客户声明",
            vi:"Tuyên bố của khách hàng",
            "zh-Hant":"客戶聲明",
            id:"Penyataan Klien"
        },
        foot10:{
            en:"User Instructions",
            zh:"用户交易须知",
            vi:"Sổ Tay Giao Dịch Của Người Dùng",
            "zh-Hant":"用戶交易須知",
            id:"Instruksi Pengguna"
        },
        foot11:{
            en:"Contact us",
            zh:"联系我们",
            vi:"Liên hệ chúng tôi",
            "zh-Hant":"聯系我們",
            id:"Hubungi Kami"
        },
        foot14:{
            en:"Support documents",
            zh:"帮助文档",
            vi:"Tài liệu hỗ trợ",
            "zh-Hant":"幫助文檔",
            id:"Dokumen pendukung"
        },
        foot15:{
            en:"Trade fees",
            zh:"交易费用",
            vi:"Phí giao dịch",
            "zh-Hant":"交易費用",
            id:"Biaya transaksi"
        },
        footlang:{
            en:"English",
            zh:"简体中文",
            vi:"Tiếng Việt",
            "zh-Hant":"繁體中文",
            id:"Bahasa Indonesia"
        },
        foot_38:{
            zh:"风险警告：",
            en:"Risk Warning: ",
            vi:"Cảnh báo rủi ro:",
            "zh-Hant":"風險警告：",
            id:"Peringatan Resiko: "
        },
        foot_39_1:{
            zh:"差价合约交易涉及风险，可能导致你的资本损失。TigerWit有限公司(巴哈马)由巴哈马证券委员会(SCB)监管，牌照号码SIA-F185。要访问TigerWit 有限公司(英国)的网站，请点击这里：",
            en:"Trading CFDs involves risk and can result in loss of your capital. TigerWit Limited (Bahamas) is regulated by Securities Commission of The Bahamas (SCB), license number SIA-F185. To access the website for TigerWit Limited (UK), which is authorised and regulated in the UK by the Financial Conduct Authority (FCA), please click here: ",
            vi:" Giao dịch CFD liên quan đến rủi ro và có thể dẫn đến mất vốn của bạn. TigerWit Limited (Bahamas) được quản lý bởi Ủy ban Chứng khoán Bahamas (SCB), số giấy phép SIA-F185. Để truy cập trang web cho TigerWit Limited (UK), được ủy quyền và quản lý tại Vương quốc Anh bởi Cơ quan quản lý tài chính (FCA), vui lòng bấm vào đây: ",
            "zh-Hant":"差價合約交易涉及風險，可能導致妳的資本損失。TigerWit有限公司(巴哈馬)由巴哈馬證券委員會(SCB)監管，牌照號碼SIA-F185。要訪問TigerWit 有限公司(英國)的網站，請點擊這裏：",
            id:"Perdagangan CFD memiliki resiko dan dapat mengakibatkan anda kehilangan modal. TigerWit Limited (Bahamas) teregulasi oleh Securities Commission of The Bahamas (SCB) dengan Nomor lisensi SIA-F185. Untuk mengakses situs TigerWit Limited (UK) yang juga telah diakui dan teregulasi oleh Financial Conduct Authority (FCA) silahkan klik: "
        },
        foot_39_2:{
            zh:"，TigerWit有限公司（英国）由英国金融市场行为监管局(FCA)授权和监管。",
            en:" ",
            vi:" ",
            "zh-Hant":"，TigerWit有限公司（英國）由英國金融市場行為監管局(FCA)授權和監管。",
            id:" "
        },
        foot_42:{
            zh:"你要在线咨询",
            en:"Which kind of consultation do you need?",
            vi:"Bạn cần loại tư vấn nào?",
            "zh-Hant":"妳要在線咨詢",
            id:"Konsultasi apa yang anda butuhkan?"
        },
        foot_43:{
            zh:"普通咨询",
            en:"Normal consultation",
            vi:"Tư vấn thông thường",
            "zh-Hant":"普通咨詢",
            id:"Konsultasi biasa"
        },
        foot_44:{
            zh:"我是普通用户，咨询交易相关的问题",
            en:"I'm a normal user,",
            vi:"Tôi là người dùng thông thường",
            "zh-Hant":"我是普通用戶，咨詢交易相關的問題",
            id:"Saya ada pengguna biasa"
        },
        foot_44_2:{
            zh:" ",
            en:"asking questions about transactions",
            vi:"Hỏi những câu hỏi về quá trình giao dịch",
            "zh-Hant":" ",
            id:"Bertanya mengenai transaksi"
        },
        foot_45:{
            zh:"代理商咨询",
            en:"Agent consultation",
            vi:"Đại lý tư vấn",
            "zh-Hant":"代理商咨詢",
            id:"Konsultasi Agen"
        },
        foot_46:{
            zh:"我是代理商或需要代理服务",
            en:"I’m a agent or need to consult ",
            vi:"tôi là một đại lý hoặc cần tham khảo ý kiến",
            "zh-Hant":"我是代理商或需要代理服務",
            id:"Saya adalah Agen atau saya ingin konsultasi"
        },
        foot_47:{
            zh:"咨询代理相关的问题",
            en:"the proxy service related questions",
            vi:"Các câu hỏi liên quan đến dịch vụ proxy",
            "zh-Hant":"咨詢代理相關的問題",
            id:"Pertanyaan terkait layanan proxy"
        },
        home64:{
            en:"Markets",
            zh:"交易产品",
            vi:"Các thị trường",
            "zh-Hant":"交易產品",
            id:"Pasar"
        },
        home65:{
            en:"Sell",
            zh:"卖出价",
            vi:"Bán",
            "zh-Hant":"賣出價",
            id:"Jual"
        },
        home66:{
            en:"Buy",
            zh:"买入价",
            vi:"Mua",
            "zh-Hant":"買入價",
            id:"Beli"
        },
        home67:{
            en:"Prices are indicative. No quotations are updated over Saturdays and Sundays.",
            zh:"订单报价实时更新，周六日停盘无报价。",
            vi:"Các mức giá đều mang tính biểu trưng. Không có chào giá nào được đưa ra vào Thứ 7 và Chủ nhật.",
            "zh-Hant":"訂單報價實時更新，周六日停盤無報價。",
            id:"Harga selalu berubah. Harga tidak akan diperbarui di hari sabtu dan minggu."
        },
        forex1:{
            en:"The Foreign Exchange Market is one of the world's largest single markets. In 2013, trading volumes reached $5.3 trillion dollars. Foreign exchange rate is mainly affected by international trade, national economy and the policy and influence of investment flows. As a result, the foreign exchange market information is more transparent, liquidity is better and there are more fair prices. Buy or sell transactions can be completed for 24 hours on weekdays. All the above advantages make Foreign Exchange Transaction deeply affected by large investment institutions and investors.",
            zh:"外汇市场是全球最大的单一市场之一。2013年交易量达5.3万亿美元。由于外汇汇率主要受国际间贸易、各国经济和政策以及投资流向的影响，所以外汇市场的信息更透明、流通性更好、价格更公平。其具有在工作日的所有24小时内双向交易的特点，深受大型投资机构和投资者的喜爱。",
            vi:"Thị trường ngoại hối là một trong những thị trường đơn lẻ lớn nhất thế giới. Trong năm 2013, khối lượng giao dịch đạt 5,3 nghìn tỷ đô la. Tỷ giá hối đoái chủ yếu bị ảnh hưởng bởi tình hình thương mại quốc tế, nền kinh tế quốc dân và chính sách và ảnh hưởng của dòng vốn đầu tư. Kết quả là, thông tin thị trường ngoại hối minh bạch hơn, thanh khoản tốt hơn và có giá hợp lý hơn. Thực hiện mua hoặc bán các giao dịch có thể được hoàn thành trong 24 giờ vào các ngày trong tuần. Tất cả những lợi thế trên làm cho giao dịch ngoại hối bị ảnh hưởng sâu sắc bởi các tổ chức đầu tư lớn và các nhà đầu tư.",
            "zh-Hant":"外匯市場是全球最大的單壹市場之壹。2013年交易量達5.3萬億美元。由於外匯匯率主要受國際間貿易、各國經濟和政策以及投資流向的影響，所以外匯市場的信息更透明、流通性更好、價格更公平。其具有在工作日的所有24小時內雙向交易的特點，深受大型投資機構和投資者的喜愛。",
            id:"Pasar valuta asing merupakan pasar keuangan terbesar di dunia. Pada tahun 2013, volume transaksi mencapai 5,3 triliun dolar. Nilai tukar pada valas banyak dipengaruhi oleh perdagangan internasional, ekonomi nasional dan kebijakan-kebijakan serta arah investasi. Hasilnya, pasar valuta asing menjadi pasar dengan informasi yang paling terbuka, transparan, dan sangat likuid. Transaksi Beli dan Jual dapat dilakukan selama 24 jam pada hari kerja. Karena itulah, perdagangan valuta asing menjadi sangat dipengaruhi oleh lembaga keuangan besar dan para investor."
        },
        forex3:{
            en:"Why trade foreign exchange in TigerWit?",
            zh:"为什么选择TigerWit？",
            vi:"Tại sao giao dịch ngoại hối trong TigerWit?",
            "zh-Hant":"為什麽選擇TigerWit？",
            id:"Mengapa memilih TigerWit sebagai tempat untuk bertransaksi valuta asing?"
        },
        forex4:{
            en:"TigerWit with simple, quick, efficient and safe cash depositing and withdrawal mode, TigerWit renders services of all major currency pairs and cross currency pairs. With the provision of more flexible, transparent and competitive foreign exchange agreement, TigerWit also provides a creative order following mode and serves as a bond to link investment masters and common investors.",
            zh:"TigerWit密切关注全球市场。出入金模式简单、快捷、高效、安全，涵盖所有主流货币对及交叉货币对。我们提供更灵活、更透明、更具竞争力的外汇合约，同时您还可以享受到TigerWit所提供的创新性的跟单交易模式，是连接高手和普通投资者的纽带。",
            vi:"TigerWit với chế độ rút tiền và kí quỹ đơn giản, nhanh chóng, hiệu quả và an toàn, TigerWit hiển thị các dịch vụ của tất cả các cặp tiền tệ chính và cặp tiền tệ chéo. Với việc cung cấp thỏa thuận ngoại hối linh hoạt, minh bạch và cạnh tranh hơn, TigerWit cũng mang đến bước đột phá khi đặt lệnh một cách sáng tạo theo trạng thái và đóng vai trò như một sợi dây để kết nối các bậc thầy và các nhà đầu tư phổ biến.",
            "zh-Hant":"TigerWit密切關註全球市場。出入金模式簡單、快捷、高效、安全，涵蓋所有主流貨幣對及交叉貨幣對。我們提供更靈活、更透明、更具競爭力的外匯合約，同時您還可以享受到TigerWit所提供的創新性的跟單交易模式，是連接高手和普通投資者的紐帶。",
            id:"TigerWit memiliki metode penyetoran dan penarikan dana yang sederhana, cepat, efisien dan aman, selain itu TigerWit juga menyediakan berbagai pilihan mata yang yang dapat ditransaksikan. Perjanjian dan ketentuan perdagangan valuta asing di TigerWit juga sangat fleksibel, transparan dan kompetitif. Dan terobosan terbaru dari TigerWit adalah memberikan layanan yang menghubungkan antara Investor dengan seorang Master trader."
        },
        forex5:{
            en:"TigerWit's advantages in foreign exchange trading",
            zh:"在TigerWit交易外汇的优势",
            vi:"Lợi thế của TigerWit trong giao dịch ngoại hối",
            "zh-Hant":"在TigerWit交易外匯的優勢",
            id:"Keunggulan bertransaksi valuta asing di TigerWit"
        },
        forex6:{
            en:"3 kinds of leverage are offered.",
            zh:"同时享受 3 种杠杆",
            vi:"3 loại đòn bẩy chúng tôi cung cấp.",
            "zh-Hant":"同時享受 3 種杠桿",
            id:"Memiiliki 3 pilihan daya ungkit."
        },
        forex7:{
            en:"We provide three different kinds of leverage, 50 times, 100 times, 200 times, allowing more flexibility for risk control and cash management requirements.",
            zh:"我们同时提供 50 倍，100 倍，200 倍三种不同的杠杆，更灵活的满足您对于风险把控，资金管理的需求。",
            vi:"Chúng tôi cung cấp ba loại đòn bẩy khác nhau, 50 lần, 100 lần, 200 lần, cho phép tính linh hoạt hơn khi có các yêu cầu quản lý rủi ro và quản lý tiền mặt.",
            "zh-Hant":"我們同時提供 50 倍，100 倍，200 倍三種不同的杠桿，更靈活的滿足您對於風險把控，資金管理的需求。",
            id:"Kami memiliki 3 jenis daya ungkit, yaitu 50, 100 dan 200. Yang membantu anda dalam menjaga resiko dan keuangan anda."
        },
        forex9:{
            en:"Follow masters' move",
            zh:"复制跟单交易",
            vi:"Sao chép hành động của bậc thầy",
            "zh-Hant":"復制跟單交易",
            id:"Ikuti transaksi Master"
        },
        forex10:{
            en:"TigerWit provides advanced and creative full-automatic order following system and gathers numerous investment masters with great profit-making capabilities. The investors have the ability to gain the earnings of the same proportion with the masters through following them. Masters can also gain more earnings through increasing their followers continuously.",
            zh:"TigerWit提供业内最先进，最具创新性的全自动复制跟单系统，并且汇聚众多颇具盈利能力的投资高手，投资者可通过复制高手交易获得同比例投资收益。高手也可通过不断增加跟随者而获得更多收益。",
            vi:"TigerWit cung cấp hệ thống theo thứ tự hoàn toàn tiên tiến, đầy sáng tạo và tập hợp nhiều nhà đầu tư chuyên nghiệp với khả năng tạo lợi nhuận lớn. Các nhà đầu tư có khả năng để đạt được thu nhập của cùng một tỷ lệ với các nhà đầu tư chính thông qua việc Sao chép họ. Các nhà đầu tư chính cũng có thể có được nhiều thu nhập hơn thông qua việc tăng số lượng người Sao chép của họ liên tục.",
            "zh-Hant":"TigerWit提供業內最先進，最具創新性的全自動復制跟單系統，並且匯聚眾多頗具盈利能力的投資高手，投資者可通過復制高手交易獲得同比例投資收益。高手也可通過不斷增加跟隨者而獲得更多收益。",
            id:"TigerWit menyediakan sistem copy-trading yang sangat mutakhir dan serba otomatis, serta menghadirkan banyak pilihan Master yang memiliki kemampuan untuk menghasilkan keuntungan. Investor dapat meraup keuntungan hanya dengan mengikuti setiap posisi Master. Sedangkan Master juga mendapat keuntungan dari jumlah pengikut yang terus bertambah."
        },
        forex13:{
            en:"Trading time",
            zh:"交易时间段",
            vi:"Thời gian giao dịch",
            "zh-Hant":"交易時間段",
            id:"Waktu transaksi"
        },
        forex14:{
            en:"TigerWit offers global trading and also provides financial services for clients continuously except the necessary inter-bank maintenance period per day.",
            zh:"TigerWit提供全球交易，除去每日必要的银行间维护时段，不间断的为我们的客户提供金融服务。",
            vi:"TigerWit cung cấp giao dịch toàn cầu và cũng cung cấp các dịch vụ tài chính cho khách hàng liên tục trừ thời gian bảo trì liên ngân hàng cần thiết mỗi ngày.",
            "zh-Hant":"TigerWit提供全球交易，除去每日必要的銀行間維護時段，不間斷的為我們的客戶提供金融服務。",
            id:"Setiap hari TigerWit aktif memberikan layanan transaksi keuangan global kepada klien, kecuali pada hari dimana ada penutupan layanan perbankan di negara tertentu."
        },
        forex15:{
            en:"How to achieve foreign exchange trade in TigerWit?",
            zh:"在TigerWit怎么做外汇交易?",
            vi:"Làm thế nào để đạt được giao dịch ngoại hối trong TigerWit?",
            "zh-Hant":"在TigerWit怎麽做外匯交易?",
            id:"Bagaimana cara kerja transaksi valuta asing di TigerWit?"
        },
        forex16:{
            en:"An investor of TigerWit sold one lot (eur/usd) around 10:00 on October 22, platform time of TigerWit at the position of 1.13450 by USD1000. ",
            zh:"某位TigerWit的投资者在TigerWit的平台时间 10 月 22 号 10 点左右，于 1.13450 位置左右动用 1000 美金卖出 1 手欧美（eur/usd）。",
            vi:"Một nhà đầu tư của TigerWit đã bán một lot (€ / usd) vào khoảng 10:00 ngày 22 tháng 10, thời gian nền tảng của TigerWit ở lệnh 1.13450 USD1000.",
            "zh-Hant":"某位TigerWit的投資者在TigerWit的平臺時間 10 月 22 號 10 點左右，於 1.13450 位置左右動用 1000 美金賣出 1 手歐美（eur/usd）。",
            id:"Seorang investor di TigerWit membuka posisi Jual pada mata uang EUR/USD sebesar 1 lot pada tanggal 22 oktober, jam 10:00. Pada jam tersebut platform TigerWit menunjukkan harga 1.13450 dengan saldo 1000 $."
        },
        forex17:{
            en:"On the second day, the trade was closed at the position of 1.1100 around 10:00 on October 23. ",
            zh:"到了第二日，10 月 23 日 10 点左右，于 1.1100 位置平仓了结，",
            vi:"Vào ngày thứ hai, giao dịch đóng cửa ở mức 1.1100 vào khoảng 10:00 ngày 23 tháng 10.",
            "zh-Hant":"到了第二日，10 月 23 日 10 點左右，於 1.1100 位置平倉了結，",
            id:"Keesokan harinya, transaksi Jual tersebut ditutup di harga 1.1100 pada tanggal 23 oktober, pukul 10:00."
        },
        forex18:{
            en:"The earnings obtained by the client is (1.13450-1.1100)*100000=USD2450, ",
            zh:"客户收益（1.13450-1.1100）*100000=2450 美元，",
            vi:" Thu nhập của khách hàng là (1.13450-1.1100) * 100000 = USD2450,",
            "zh-Hant":"客戶收益（1.13450-1.1100）*100000=2450 美元，",
            id:" Keuntungan yang dihasilkan oleh investor tersebut adalah (1.13450 - 1.100) * 100000 = 2,450 $"
        },
        forex19:{
            en:"the yield rate of which is 245%.",
            zh:"收益率 245%。",
            vi:" tỷ lệ lợi nhuận là 245%.",
            "zh-Hant":"收益率 245%。",
            id:" dimana persentase keuntungan mencapai 245%"
        },
        forex20:{
            en:"Introduction to TigerWit currency pairs",
            zh:"TigerWit货币对介绍",
            vi:"Giới thiệu về cặp tiền tệ TigerWit",
            "zh-Hant":"TigerWit貨幣對介紹",
            id:"Mengenal pasangan mata uang di TigerWit"
        },
        forex21:{
            en:"Product code",
            zh:"产品代码",
            vi:"Mã sản phẩm",
            "zh-Hant":"產品代碼",
            id:"Kode Produk"
        },
        forex22:{
            en:"Chinese name",
            zh:"中文名称",
            vi:" ",
            "zh-Hant":"中文名稱",
            id:"Nama"
        },
        forex23:{
            en:"Average spread",
            zh:"点差",
            vi:"Tỷ lệ chênh lệch giữa giá mua và bán",
            "zh-Hant":"點差",
            id:"Spread rata-rata"
        },
        forex24:{
            en:"points",
            zh:"平均点差",
            vi:"Đánh dấu",
            "zh-Hant":"平均點差",
            id:"Poin"
        },
        forex25:{
            en:"Leverage",
            zh:"杠杆",
            vi:"Đòn bẩy",
            "zh-Hant":"杠桿",
            id:"Daya Ungkit"
        },
        forex26:{
            en:"Quoted price",
            zh:"报价位",
            vi:"Báo giá",
            "zh-Hant":"報價位",
            id:"Harga Penawaran"
        },
        forex27:{
            en:"Minimum trading volume",
            zh:"最小交易量",
            vi:"Giao dịch tối thiểu",
            "zh-Hant":"最小交易量",
            id:"Volume transaksi minimum"
        },
        forex28:{
            en:"Per standard lot",
            zh:"每标准手",
            vi:"Theo lot chuẩn Giá trị hợp đồng",
            "zh-Hant":"每標準手",
            id:"Per lot standar"
        },
        forex29:{
            en:"Contract volume",
            zh:"合约量",
            vi:"Kích thước hợp đồng",
            "zh-Hant":"合約量",
            id:"Volume kontrak"
        },
        forex30:{
            en:"Trading time",
            zh:"交易时间",
            vi:"Thời gian giao dịch",
            "zh-Hant":"交易時間",
            id:"Waktu transaksi"
        },
        forex31:{
            en:"Five digits after the decimal point",
            zh:"小数点后五位",
            vi:"Năm chữ số sau dấu thập phân",
            "zh-Hant":"小數點後五位",
            id:"5 angka dibelakang koma"
        },
        forex32:{
            en:"Three digits after the decimal point",
            zh:"小数点后三位",
            vi:"Ba chữ số sau dấu thập phân",
            "zh-Hant":"小數點後三位",
            id:"3 angka dibelakang koma"
        },
        forex33:{
            en:"Floating point difference",
            zh:"浮动点差",
            vi:"Điểm chênh lệch tự do",
            "zh-Hant":"浮動點差",
            id:"Perbedaan poin floating"
        },
        forex34:{
            en:"24h quotation on trading day",
            zh:"交易日24小时报价",
            vi:"Báo giá 24h trong ngày giao dịch ",
            "zh-Hant":"交易日24小時報價",
            id:"24 jam penawaran di hari kerja"
        },
        forex35:{
            en:"Trading period: ",
            zh:"交易时段",
            vi:"Trading period",
            "zh-Hant":"交易時段",
            id:"Periode transaksi"
        },
        forex36:{
            en:"TigerWit also provides the trading products of cross currency pairs of the above major currency pairs.",
            zh:"TigerWit同时提供以上主流货币对的交叉货币对交易产品",
            vi:"TigerWit cũng cung cấp các sản phẩm giao dịch của các cặp tiền tệ chéo của các cặp tiền tệ chính trên.",
            "zh-Hant":"TigerWit同時提供以上主流貨幣對的交叉貨幣對交易產品",
            id:"Selain menyediakan pasangan mata uang utama, TigerWit juga menyediakan produk pasangan mata uang silang (Cross Currency pair)."
        },
        forex37:{
            en:"(next day)",
            zh:"(次日)",
            vi:"(ngày hôm sau)",
            "zh-Hant":"(次日)",
            id:"(Hari berikutnya)"
        },
        oil1:{
            en:"Crude oil, also known as 'black gold' is the main raw material in fuel and gasoline.Fuel and gasoline are the most important energy sources in the world. At present, oil is not only the largest in the global trade of goods, it is one of the most important global financial assets.",
            zh:"原油即石油，也称“黑色金子”，原油是燃油和汽油的主要原材料，是世界上最重要的一次能源之一。目前，原油不仅成为全球贸易中最大宗的商品，同时也是全球金融资产中最重要的交易标的物之一。",
            vi:"Dầu thô, còn được gọi là 'vàng đen' là nguyên liệu chính trong nhiên liệu và xăng. Nhiên liệu và xăng là nguồn năng lượng quan trọng nhất trên thế giới. Hiện tại, dầu mỏ không chỉ là lớn nhất trong thương mại toàn cầu của hàng hóa, đây là một trong những tài sản tài chính toàn cầu quan trọng nhất.",
            "zh-Hant":"原油即石油，也稱“黑色金子”，原油是燃油和汽油的主要原材料，是世界上最重要的壹次能源之壹。目前，原油不僅成為全球貿易中最大宗的商品，同時也是全球金融資產中最重要的交易標的物之壹。",
            id:"Minyak mentah, yang juga sering dikenal dengan nama “Emas Hitam” ini merupakan material yang sangat penting untuk bahan bakar dan bensin dimana keduanya merupakan sumber energi utama yang digunakan diseluruh dunia. Saat ini, minyak bukan hanya menjadi barang dagangan dengan transaksi terbesar di dunia saja, namun juga berperan penting sebagai aset keuangan global."
        },
        oil2:{
            en:"Why trade crude oil in TigerWit?",
            zh:"为什么在TigerWit原油交易",
            vi:"Vì sao giao dịch với dầu thô ở TigerWit?",
            "zh-Hant":"為什麽在TigerWit原油交易",
            id:"Kenapa bertransaksi Minyak Mentah di TigerWit?"
        },
        oil3:{
            en:"In addition to Brent crude oil and West Texas crude oil, both of which sees the largest trading volume in the world, TigerWit also provides US natural gas contracts.TigerWit wholeheartedly provides the clients with the flexible leverage, competitive point difference advantages and also obtains the quotation data sources from world-leading banks in the financial sector. Meanwhile, it also renders an innovative order following system.",
            zh:"TigerWit除了提供两大全球交易量最大的原油：布伦特原油和西德州原油合约以外，同时提供美国天然气合约。TigerWit竭诚为客户提供灵活的杠杆、具有竞争优势的点差，来源于全球金融界领先银行的报价。同时也提供创新性的跟单系统服务。",
            vi:"Ngoài dầu thô Brent và dầu thô Tây Texas, cả hai đều có khối lượng giao dịch lớn nhất trên thế giới, TigerWit cũng cung cấp các hợp đồng khí đốt tự nhiên của Mỹ.TigerWit luôn cố gắng cung cấp cho khách hàng mức đòn bẩy linh hoạt, điểm chênh lệch thấp và cũng có được báo giá với nguồn dữ liệu từ các ngân hàng hàng đầu thế giới trong lĩnh vực tài chính. Trong khi đó, điều này cũng cho thấy một hệ thống sao chép lệnh tiên tiến hơn.",
            "zh-Hant":"TigerWit除了提供兩大全球交易量最大的原油：布倫特原油和西德州原油合約以外，同時提供美國天然氣合約。TigerWit竭誠為客戶提供靈活的杠桿、具有競爭優勢的點差，來源於全球金融界領先銀行的報價。同時也提供創新性的跟單系統服務。",
            id:"Selain minyak mentah Brent dan Texas Barat, dimana keduanya memiliki volume transaksi terbesar di dunia. TigerWit juga menyediakan daya ungkit yang fleksibel, perbedaan selisih poin yang bersaing, dan memperoleh sumber harga penawaran dari bank-bank terkemuka di dunia dalam bidang keuangan kepada klien. Sementara itu, TigerWit juga menciptakan sistem transaksi salinan yang inovatif."
        },
        oil4:{
            en:"Advantages of TigerWit in crude oil trading",
            zh:"在TigerWit做原油交易的优势",
            vi:"Ưu điểm của TigerWit trong giao dịch với dầu thô",
            "zh-Hant":"在TigerWit做原油交易的優勢",
            id:"Keunggulan bertransaksi Minyak Mentah di TigerWit"
        },
        oil7:{
            en:"Low margin but high earnings",
            zh:"保证金低，收益高",
            vi:"Kí quỹ thấp nhưng thu nhập cao",
            "zh-Hant":"保證金低，收益高",
            id:"Margin yang rendah namun penghasilan tinggi"
        },
        oil8:{
            en:"The trading leverage of crude oil in TigerWit is as high as 50 times, thus consuming less margin. As a result, less investment cost is required, while the leverage can double that of the spot crude oil in China. The formula mode of international spot crude oil per ton is roughly USD 50 *current rate / (converted by 1000*weights and measures), while the cost formula mode of domestic spot crude oil is point difference + current price * 0.12%",
            zh:"在TigerWit做原油交易杠杆高达 50 倍以上，占用保证金更低。所以TigerWit所需的投资成本更低，而杠杆可超过国内现货原油的一倍以上。国际现货原油的成本折合到每吨的计算方式是：50 美金左右 * 当日汇率 / (1000 * 度量衡折换)。而国内现货原油的陈本计算方式是：点差 + 当日价格 * 0.12% 。",
            vi:"Đòn bẩy giao dịch dầu thô ở TigerWit cao tới 50 lần, do đó đòi hỏi ít số tiền kí quỹ hơn. Kết quả là, chi phí đầu tư cần thiết ít hơn, trong khi đòn bẩy có thể tăng gấp đôi so với dầu thô tại Trung Quốc. Công thức dầu thô giao ngay trên thị trường quốc tế tính theo tấn là 50 USD * tỷ giá hiện hành / (chuyển đổi bằng 1000 * trọng lượng và biện pháp), trong khi phương thức giá dầu thô tại chỗ là chênh lệch điểm + giá hiện tại * 0.12%",
            "zh-Hant":"在TigerWit做原油交易杠桿高達 50 倍以上，占用保證金更低。所以TigerWit所需的投資成本更低，而杠桿可超過國內現貨原油的壹倍以上。國際現貨原油的成本折合到每噸的計算方式是：50 美金左右 * 當日匯率 / (1000 * 度量衡折換)。而國內現貨原油的陳本計算方式是：點差 + 當日價格 * 0.12% 。",
            id:"Daya ungkit untuk Minyak Mentah di TigerWit adalah 50, sehingga margin yang dibutuhkan untuk trading lebih kecil, yang artinya biaya investasi yang diperlukan menjadi lebih rendah. Rumus untuk menghitung harga Minyak Mentah di pasar internasional adalah harga per ton kira-kira 50$ dikalikan dengan harga saat ini / (konversi 1000 x berat dan ukuran). Sedangka n rumus untuk menghitung harga minyak mentah lokal adalah selisih poin + harga saat ini x 0.12 %"
        },
        oil9:{
            en:"No commission charge",
            zh:"无手续费",
            vi:"Không phí hoa hồng",
            "zh-Hant":"無手續費",
            id:"Tidak dikenakan komisi"
        },
        oil10:{
            en:"No commission charge will be required for crude oil in TigerWit and only point difference will be charged. One lot is equivalent to about USD 50, equaling to 1000 barrels. Then 7.5 barrels equals to 1ton. Thus, it is converted as USD 0.37 /ton, equivalent to RMB 2.3/ton(Real time exchange rate).",
            zh:"在TigerWit做原油交易是不收取手续费的，仅收取点差，一手 50 美金左右等于 1000 桶，那 7.5 桶等于 1 吨，因此我们的折合到吨就是 0.37 美金/吨，差不多就是 2.3 人民币/吨（以实时汇率为准）。",
            vi:"TigerWit sẽ không yêu cầu phí hoa hồng khi giao dịch với dầu thô và chỉ điểm chênh lệch sẽ được tính phí. Một lot tương đương với khoảng 50 USD, tương đương với 1000 thùng. Sau đó 7,5 thùng bằng 1ton. Như vậy, nó được chuyển đổi thành 0,37 USD / tấn, tương đương với 2,3 NDT / tấn (tỷ giá hối đoái theo thời gian thực).",
            "zh-Hant":"在TigerWit做原油交易是不收取手續費的，僅收取點差，壹手 50 美金左右等於 1000 桶，那 7.5 桶等於 1 噸，因此我們的折合到噸就是 0.37 美金/噸，差不多就是 2.3 人民幣/噸（以實時匯率為準）。",
            id:"TigerWit tidak membebankan biaya komisi untuk setiap transaksi di Minyak Mentah (Crude Oil). 1 lot di Minyak Mentah setara dengan 50 $, sama dengan 1000 barel. Jika 7,5 barel memiliki berat 1 ton, maka harganya sekitar 0.37 $ / ton, yang setara dengan Rp. 5.365/ton (kurs Rp. 14.500)."
        },
        oil11:{
            en:"Easy loss stop",
            zh:"止损简便",
            vi:"Dừng lỗ dễ dàng",
            "zh-Hant":"止損簡便",
            id:"Mudah menutup posisi"
        },
        oil12:{
            en:"Loss can be stopped by only one-time setting, which will remain effective on the following day. As a result losses caused by forgetting setting will be greatly reduced.",
            zh:"TigerWit可以做到只需设置一次止损，隔天仍然有效，这样很大程度上避免了因忘记设置止损产生的亏损。",
            vi:"Dừng lỗ dễ dàng chỉ trong một lần cài đặt, và duy trì hiệu lực trong ngày tiếp theo. Kết quả là, các khoản lỗ do việc quên cài đặt sẽ được giảm thiểu đáng kể.",
            "zh-Hant":"TigerWit可以做到只需設置壹次止損，隔天仍然有效，這樣很大程度上避免了因忘記設置止損產生的虧損。",
            id:"Anda dapat mengatur S/L sesuai dengan strategi trading anda, agar terhindar dari kerugian yang lebih banyak."
        },
        oil13:{
            en:"Enter swap processing by data smoothing method.",
            zh:"采用数据平滑方式进行掉期处理",
            vi:"Thực hiện quá trình xử lí swap bằng phương pháp làm phẳng dữ liệu.",
            "zh-Hant":"采用數據平滑方式進行掉期處理",
            id:"Metode Data Smoothing untuk menghitung bunga."
        },
        oil14:{
            en:"Through cooperation with the most authoritative data provider, TigerWit applies the most advanced data smoothing mode in case of swap extension in dominant contract of international crude oil without water loss fees, rather than mandatory liquidation and position opening in China.",
            zh:"TigerWit与业内最权威的数据提供商合作，在国际原油主力合约发生掉期展期时，采用最先进的数据平滑处理，而非国内原油采用的强行平仓，开仓，无掉水费用。",
            vi:"Thông qua hợp tác với nhà cung cấp dữ liệu có thẩm quyền nhất, TigerWit áp dụng chế độ làm mịn dữ liệu tiên tiến nhất trong trường hợp gia hạn hoán đổi trong hợp đồng dầu thô quốc tế phổ biến mà không mất phí, thay vì bắt buộc thanh khoản và mở vị thế mở tại Trung Quốc.",
            "zh-Hant":"TigerWit與業內最權威的數據提供商合作，在國際原油主力合約發生掉期展期時，采用最先進的數據平滑處理，而非國內原油采用的強行平倉，開倉，無掉水費用。",
            id:"Di China, TigerWit bekerjasama dengan salah satu penyedia data terbesar untuk menerapkan metode data smoothing apabila terjadi penambahan beban bunga di kontrak Minyak Mentah. Dengan metode tersebut, klien tidak perlu takut akan adanya penambahan biaya baru."
        },
        oil15:{
            en:"Follow masters' move",
            zh:"复制跟单交易",
            vi:"Sao chép hành động của bậc thầy",
            "zh-Hant":"復制跟單交易",
            id:"Ikuti transaksi Master"
        },
        oil16:{
            en:"For inexperienced investors in crude oil trading, the move of the masters in crude oil trading can be followed directly, through which earnings of the same proportion can be realized and the trading risks of beginner investors are also reduced.",
            zh:"针对于一些对原油交易不熟悉的投资者，可选择原油交易的高手直接复制，即可同比例盈利，降低了初级投资者的交易风险。",
            vi:"Đối với các nhà đầu tư thiếu kinh nghiệm trong giao dịch với dầu thô, các hành động của các chủ đầu tư trong giao dịch dầu thô có thể được sao chép trực tiếp, qua đó giúp tạo ra thu nhập với cùng một tỷ lệ và rủi ro giao dịch của các nhà đầu tư mới bắt đầu cũng giảm.",
            "zh-Hant":"針對於壹些對原油交易不熟悉的投資者，可選擇原油交易的高手直接復制，即可同比例盈利，降低了初級投資者的交易風險。",
            id:"Untuk investor yang kurang memiliki pengalaman bertransaksi di Minyak Mentah, mereka tetap memiliki kesempatan untuk menghasilkan keuntungan dari transaksi Minyak Mentah dengan cara mengikuti Master yang memang ahli di bidangnya sehingga membantu meminimalkan resiko untuk investor pemula."
        },
        oil17:{
            en:"How to achieve crude oil trade in TigerWit?",
            zh:"在TigerWit怎么做原油交易？",
            vi:"Làm thế nào để đạt được thương mại dầu thô trong TigerWit?",
            "zh-Hant":"在TigerWit怎麽做原油交易？",
            id:"Bagaimana perhitungan transaksi Minyak Mentah di TigerWit?"
        },
        oil18:{
            en:"An investor of TigerWit sold one lot of West Texas crude oil (xti/usd) around 15:00 on October 23, platform time of TigerWit at the position of 45.890 by USD 1000.",
            zh:"某位TigerWit的投资者在TigerWit的平台时间 10 月 23 号 15 点左右，于 45.890位置左右动用 1000 美金卖出 1 手西德州原油（xti/usd）。",
            vi:"Một nhà đầu tư của TigerWit đã bán một lô dầu thô Tây Texas (xti / usd) vào khoảng 15:00 ngày 23 tháng 10, thời gian trên nền tảng của TigerWit ở vị thế 45.890 USD 1000.",
            "zh-Hant":"某位TigerWit的投資者在TigerWit的平臺時間 10 月 23 號 15 點左右，於 45.890位置左右動用 1000 美金賣出 1 手西德州原油（xti/usd）。",
            id:"Seorang investor di TigerWit membuka posisi Jual sebanyak 1 lot di Minyak Mentah Texas Barat (XTI/USD) pada tanggal 23, pukul 15:00. Pada saat itu harga berada di posisi 45.890 dengan saldo 1,000$. "
        },
        oil19:{
            en:"Around one hour later, the trade was closed at the position of 44.50 around 16:00 on October 23.",
            zh:"一个多小时后，10 月 23 日 16 点左右，于 44.50 位置平仓了结，",
            vi:"Khoảng một giờ sau đó, giao dịch đã đóng cửa ở vị thế 44.50 vào khoảng 16:00 ngày 23 tháng 10. ",
            "zh-Hant":"壹個多小時後，10 月 23 日 16 點左右，於 44.50 位置平倉了結，",
            id:"1 jam kemudian, transaksi tersebut ditutup di harga 44.50 pada tanggal 23 oktober, pukul 16:00. "
        },
        oil20:{
            en:"The earnings obtained by the client is (45.89-44.50)*1000=USD1390, ",
            zh:"客户收益（45.89-44.50）*1000=1390 美元，",
            vi:"Lợi nhuận của khách hàng là (45.89-44.50) * 1000 = USD1390, ",
            "zh-Hant":"客戶收益（45.89-44.50）*1000=1390 美元，",
            id:"Keuntungan yang didapatkan oleh klien tersebut adalah (45.89-44.50) * 1000 = 1,390 $ "
        },
        oil21:{
            en:"the yield rate of which is 139%.",
            zh:"收益率 139%。",
            vi:"tỷ lệ lãi suất là 139%.",
            "zh-Hant":"收益率 139%。",
            id:"dimana persentase keuntungan mencapai 139%."
        },
        oil22:{
            en:"Introduction to TigerWit energy products",
            zh:"TigerWit能源类交易产品介绍",
            vi:"Giới thiệu sản phẩm năng lượng TigerWit",
            "zh-Hant":"TigerWit能源類交易產品介紹",
            id:"Mengenal Produk-produk energi di TigerWit"
        },
        oil23:{
            en:"Product code",
            zh:"产品代码",
            vi:"Mã sản phẩm",
            "zh-Hant":"產品代碼",
            id:"Kode Produk"
        },
        oil24:{
            en:"Chinese name",
            zh:"中文名称",
            vi:"Chinese name",
            "zh-Hant":"中文名稱",
            id:"Nama"
        },
        oil25:{
            en:"Contract volume",
            zh:"合约量",
            vi:"Kích thước hợp đồng",
            "zh-Hant":"合約量",
            id:"Volume Kontrak"
        },
        oil26:{
            en:"Measurement unit",
            zh:"计量单位",
            vi:"Đơn vị đo",
            "zh-Hant":"計量單位",
            id:"Unit Pengukuran"
        },
        oil27:{
            en:"Minimum contract unit (standard lot)",
            zh:"最小合约单位(标准手)",
            vi:"Đơn vị nhỏ nhất hợp đồng (Lot tiêu chuẩn)",
            "zh-Hant":"最小合約單位(標準手)",
            id:"Unit kontrak minimum (lot standar)"
        },
        oil28:{
            en:"Maximum trading volume (lot)",
            zh:"最大交易量(手)",
            vi:"Giao dịch tối đa(lot)",
            "zh-Hant":"最大交易量(手)",
            id:"Volume transaksi maksimum (lot)"
        },
        oil29:{
            en:"Commission charge ($)",
            zh:"手续费($)",
            vi:"Phí hoa hồng($)",
            "zh-Hant":"手續費($)",
            id:"Biaya komisi"
        },
        oil30:{
            en:"Trading time (Beijing time)",
            zh:"交易时间(北京时间)",
            vi:"Thời gian giao dịch (Giờ Bắc Kinh)",
            "zh-Hant":"交易時間(北京時間)",
            id:"Waktu transaksi"
        },
        oil31:{
            en:"Quotation time (Beijing time)",
            zh:"报价时间(北京时间)",
            vi:"Thời gian Chào giá (Giờ Bắc Kinh)",
            "zh-Hant":"報價時間(北京時間)",
            id:"Jam Penawaran (Waktu Beijing)"
        },
        oil32:{
            en:"Product introduction",
            zh:"产品简介",
            vi:"Giới thiệu sản phẩm",
            "zh-Hant":"產品簡介",
            id:"Informasi Produk"
        },
        oil33:{
            en:"MBTU",
            zh:"百万英国热量单位",
            vi:"MBTU",
            "zh-Hant":"百萬英國熱量單位",
            id:"MBTU"
        },
        oil34:{
            en:"barrels",
            zh:"桶",
            vi:"thùng",
            "zh-Hant":"桶",
            id:"Barel"
        },
        oil35:{
            en:"USD",
            zh:"美元",
            vi:"USD",
            "zh-Hant":"美元",
            id:"USD"
        },
        metal1:{
            en:"They belong to the traditional safe-haven assets and with the progress of science and technology occupies an important position in the industrial market and also represents a safe commodity.",
            zh:"黄金和白银作为人类文明最古老、最传统、最被广泛认可的货币符号，属于传统的避险资产，随着科技的进步，其在工业生产中占据了重要的地位，同时具有避险兼商品的属性。",
            vi:"Các sản phẩm này thuộc về tài sản an toàn truyền thống và với sự tiến bộ của khoa học và công nghệ chiếm một vị trí quan trọng trong thị trường công nghiệp và cũng đại diện cho một mặt hàng an toàn.",
            "zh-Hant":"黃金和白銀作為人類文明最古老、最傳統、最被廣泛認可的貨幣符號，屬於傳統的避險資產，隨著科技的進步，其在工業生產中占據了重要的地位，同時具有避險兼商品的屬性。",
            id:"Sering dianggap sebagai aset berharga dan komoditas yang aman. Logam mulia juga berperan penting dalam teknologi dan industri."
        },
        metal2:{
            en:"What is spot gold and silver trading? ",
            zh:"什么是现货黄金、白银交易",
            vi:"Giao dịch vàng và bạc giao ngay là gì?",
            "zh-Hant":"什麽是現貨黃金、白銀交易",
            id:"Apa yang dimaksud dengan pasar fisik Emas dan Perak?"
        },
        metal3:{
            en:"Margin trade of spot gold and silver is also known as London gold and silver exchange. London gold and silver per standard lot is 100 ounces and 5000 ounces separately. What is different from New York gold futures period is spot gold. Swap and extension are not needed for spot silver. contract value and leverage are more flexible and the fund utilization rate is much higher. ",
            zh:"现货黄金与现货白银保证金交易亦称之为伦敦金，伦敦银。每标准手伦敦金为 100 盎司，每标准手白银为 5000 盎司，与纽约期金期银不同的是现货金，现货银无需掉期，展期，同时合约大小，杠杆更为灵活，资金利用率更高。",
            vi:"Giao dịch ký quỹ vàng giao ngay và bạc cũng được gọi là giao dịch vàng và bạc London. Giá Vàng và bạc của London trên mỗi lot tiêu chuẩn lần lượt là 100 ounce và 5000 ounce. Điều khác biệt so với hợp đồng kì hạn tương lai Vàng của New York là đây là giao dịch vàng giao ngay. Mức Swap và spread là không cần thiết cho giao dịch bạc giao ngay. Giá trị hợp đồng và đòn bẩy linh hoạt hơn và tỷ lệ sử dụng quỹ cao hơn nhiều.",
            "zh-Hant":"現貨黃金與現貨白銀保證金交易亦稱之為倫敦金，倫敦銀。每標準手倫敦金為 100 盎司，每標準手白銀為 5000 盎司，與紐約期金期銀不同的是現貨金，現貨銀無需掉期，展期，同時合約大小，杠桿更為靈活，資金利用率更高。",
            id:"Perdagangan fisik untuk emas dan perak sering kita ketahui dengan nama loco london gold and silver yaitu basis perdagangan dan penyelesaian emas dan perak internasional di London. Fisik emas dan perak London ini memiliki standar per lot masing-masing untuk kategori 100 ons dan 5000 ons. Yang membedakan antara perdagangan futures emas di New york dengan loco london ini adalah fisik emas. Dimana perdagangan emas di New York hanya akan berupa kontrak saja. Dengan begitu, daya ungkit dan nilai kontrak menjadi lebih fleksibel, otomatis dana yang diperdagangkan menjadi lebih tinggi. Untuk perak sendiri tidak akan dikenakan biaya bunga."
        },
        metal4:{
            en:"TigerWit's advantages in foreign exchange trading",
            zh:"在TigerWit交易黄金、白银的优势",
            vi:"Lợi thế của TigerWit trong giao dịch ngoại hối",
            "zh-Hant":"在TigerWit交易黃金、白銀的優勢",
            id:"Keunggulan bertransaksi valuta asing di TigerWit"
        },
        metal5:{
            en:"High leverage",
            zh:"杠杆高",
            vi:"Đòn bẩy cao",
            "zh-Hant":"杠桿高",
            id:"Daya ungkit yang tinggi"
        },
        metal6:{
            en:"TigerWit offers three kinds of leverage for flexible option and the leverage of spot silver is as high as 200 times.",
            zh:"TigerWit提供三种杠杆灵活选择，现货白银杠杆可高达 200 倍以上。",
            vi:"TigerWit cung cấp ba loại đòn bẩy cho tùy chọn linh hoạt và đòn bẩy của hợp đồng bạc giao ngay cao tới 200 lần.",
            "zh-Hant":"TigerWit提供三種杠桿靈活選擇，現貨白銀杠桿可高達 200 倍以上。",
            id:"TigerWit Menyediakan 3 jenis daya ungkit yang dapat dipilih. Untuk daya ungkit perak dapat mencapai hingga 1:200."
        },
        metal7:{
            en:"Low trading cost",
            zh:"交易成本低",
            vi:"Chi phí giao dịch thấp",
            "zh-Hant":"交易成本低",
            id:"Biaya trading yang rendah"
        },
        metal8:{
            en:"The cost of trading spot silver in TigerWit is as low as USD 1.29 / kg, equivalent to RMB 8.7 /kg. (the currency conversion will be subject to real-time rate)",
            zh:"TigerWit交易现货白银成本低至约1.29美元/千克，约8.7元人民币/千克。（人民币换算以实时汇率为准）",
            vi:"Chi phí giao dịch bạc tại TigerWit thấp tới 1,29 USD / kg, tương đương 8,7 NDT / kg. (tỷ giá chuyển đổi tiền tệ sẽ phải chịu lãi suất theo thời gian thực)",
            "zh-Hant":"TigerWit交易現貨白銀成本低至約1.29美元/千克，約8.7元人民幣/千克。（人民幣換算以實時匯率為準）",
            id:"Biaya untuk bertransaksi perak di TigerWit hanya berkisar 1.29 $/kg atau setara dengan Rp. 18.705/kg (kurs Rp. 14.500)"
        },
        metal9:{
            en:"Low threshold",
            zh:"低门槛",
            vi:"Mức kí quỹ ban đầu thấp",
            "zh-Hant":"低門檻",
            id:"Margin awal yang rendah"
        },
        metal10:{
            en:"Margin level than the domestic spot silver is 300 RMB, while the minimum trading margin for spot silver trading in TigerWit is as low as USD10.",
            zh:"比起国内现货白银300人民币保证金水平，TigerWit现货白银交易最小交易保证金仅为 10 美金。",
            vi:"Mức ký quỹ so với giao dịch bạc nội địa giao ngay là 300 RMB, trong khi margin giao dịch tối thiểu cho giao dịch bạc giao ngay tại TigerWit thấp chỉ còn 10 USD.",
            "zh-Hant":"比起國內現貨白銀300人民幣保證金水平，TigerWit現貨白銀交易最小交易保證金僅為 10 美金。",
            id:"Margin yang dibutuhkan untuk transaksi di pasar perak lokal adalah sekitar Rp. 635.200 (kurs yuan = Rp. 2.117) atau 43,80 $ (kurs Rp. 14.500). Sementara minimal margin untuk trading pasar perak hanya 10 $ saja."
        },
        metal11:{
            en:"Achieve gold and silver trading by one account",
            zh:"一个账户交易黄金、白银",
            vi:"Giao dịch với vàng và bạc bằng một tài khoản",
            "zh-Hant":"壹個賬戶交易黃金、白銀",
            id:"Trading Emas dan Perak hanya dengan 1 akun"
        },
        metal12:{
            en:"Given the restrictions of China's national conditions, most domestic exchanges can only trade spot silver but fail to trade gold. However, gold products fall into the trade category of greater importance in the international market. Given such situations, TigerWit can provide both silver and gold trading, rendering more independent choices for investors.",
            zh:"由于国内相关国情限制，国内大多数交易所仅能交易现货白银，而无法交易现货黄金，但黄金产品是国际市场上更为关注与重要的交易品种，而TigerWit同时提供白银与黄金交易，给广大投资者更为自主的选择。",
            vi:"Với những hạn chế về điều kiện quốc gia của Trung Quốc, hầu hết các sàn giao dịch trong nước chỉ có thể giao dịch bạc nhưng không giao dịch vàng. Tuy nhiên, các sản phẩm vàng rơi vào loại thương mại có tầm quan trọng lớn hơn trên thị trường quốc tế. Với những tình huống như vậy, TigerWit có thể cung cấp cả giao dịch bạc và vàng, thể hiện sự lựa chọn độc lập hơn cho các nhà đầu tư.",
            "zh-Hant":"由於國內相關國情限制，國內大多數交易所僅能交易現貨白銀，而無法交易現貨黃金，但黃金產品是國際市場上更為關註與重要的交易品種，而TigerWit同時提供白銀與黃金交易，給廣大投資者更為自主的選擇。",
            id:"Berdasarkan peraturan di China, kebanyakan bursa lokal hanya memperbolehkan transaksi perak. Sedangkan, produk emas di pasar internasional sangat penting dan sering diperdagangkan. Oleh karena itu, TigerWit menyediakan kesempatan untuk bertransaksi Perak dan Emas sekaligus sehingga dapat mempermudah investor."
        },
        metal13:{
            en:"Trading by MT4",
            zh:"使用 MT4 交易",
            vi:"Giao dịch bằng MT4",
            "zh-Hant":"使用 MT4 交易",
            id:"Trading menggunakan MT4"
        },
        metal14:{
            en:"TigerWit has adopted an extensively used and mature MT4 platform and launched an intelligent trading module, closely following the trend of the world’s financial market.",
            zh:"TigerWit采用全球广泛使用的成熟的MT4平台，开会智能交易模块，紧跟世界金融市场潮流。",
            vi:"TigerWit đã áp dụng nền tảng MT4 tiên tiến và được sử dụng rộng rãi và ra mắt một phương thức giao dịch thông minh, bắt kịp chặt chẽ xu thế của thị trường tài chính thế giới.",
            "zh-Hant":"TigerWit采用全球廣泛使用的成熟的MT4平臺，開會智能交易模塊，緊跟世界金融市場潮流。",
            id:"TigerWit telah ikut mengadopsi penggunaan platform MT4 yang saat ini telah digunakan secara luas dan menjadi platform favorit di pasar keuangan di dunia."
        },
        metal15:{
            en:"Follow masters' move",
            zh:"复制跟单交易",
            vi:"Sao chép hành động của bậc thầy",
            "zh-Hant":"復制跟單交易",
            id:"Ikuti transaksi Master"
        },
        metal16:{
            en:"TigerWit provides advanced and creative full-automatic order following system and gathers numerous investment masters with great profit-making capabilities. The investors have the ability to gain the earnings of the same proportion with the masters through following them. Masters can also gain more earnings through increasing their followers continuously.",
            zh:"TigerWit提供业内先进创新的全自动订单复制跟单系统，并且汇聚众多颇具盈利能力的投资高手，投资者可通过复制高手交易获得同比例投资收益。高手也可以通过不断增加跟随者而获得更多收益。",
            vi:"TigerWit cung cấp hện thống sao chép lệnh toàn diện, cao cấp và hoàn toàn tự động, cùng với việc tập hợp hàng loạt các nhà đầu tư chính với khả năng sinh lời lớn. Các nhà đầu tư có khả năng kiếm được lợi nhuận với mức tỷ lệ tương tụ như các bậc thầy thông qua việc sao chép họ. Các bậc thầy cũng có thể kiếm được nhiều lợi nhuận thông qua việc liên tục tăng số lượng người sao chép của họ.",
            "zh-Hant":"TigerWit提供業內先進創新的全自動訂單復制跟單系統，並且匯聚眾多頗具盈利能力的投資高手，投資者可通過復制高手交易獲得同比例投資收益。高手也可以通過不斷增加跟隨者而獲得更多收益。",
            id:"TigerWit menyediakan sistem copy-trading yang sangat mutakhir dan serba otomatis, serta menghadirkan banyak pilihan Master yang memiliki kemampuan untuk menghasilkan keuntungan. Investor dapat meraup keuntungan hanya dengan mengikuti setiap posisi Master. Sedangkan Master juga mendapat keuntungan dari jumlah pengikut yang terus bertambah."
        },
        metal17:{
            en:"Introduction to TigerWit precious metal products",
            zh:"TigerWit贵金属交易产品介绍",
            vi:"Giới thiệu các sản phẩm với kim loại quý từ TigerWit",
            "zh-Hant":"TigerWit貴金屬交易產品介紹",
            id:"Mengenal Produk-produk logam mulia di TigerWit"
        },
        metal18:{
            en:"Product code",
            zh:"产品代码",
            vi:"Mã sản phẩm",
            "zh-Hant":"產品代碼",
            id:"Kode Produk"
        },
        metal19:{
            en:"Chinese name",
            zh:"中文名称",
            vi:"Chinese name",
            "zh-Hant":"中文名稱",
            id:"Nama"
        },
        metal20:{
            en:"Point difference",
            zh:"点差",
            vi:"Điểm chênh lệch",
            "zh-Hant":"點差",
            id:"Selisih Poin"
        },
        metal21:{
            en:"average point difference",
            zh:"平均点差",
            vi:"điểm chênh lệch trung bình",
            "zh-Hant":"平均點差",
            id:"Selisih poin rata-rata"
        },
        metal22:{
            en:"Leverage",
            zh:"杠杆",
            vi:"Điểm chênh lệch (điểm chênh lệch trung bình)",
            "zh-Hant":"杠桿",
            id:"Daya Ungkit"
        },
        metal23:{
            en:"Quoted price",
            zh:"报价位",
            vi:"Báo giá",
            "zh-Hant":"報價位",
            id:"Harga Penawaran"
        },
        metal24:{
            en:"Minimum trading lots",
            zh:"最小交易手数",
            vi:"Giao dịch tối thiểu",
            "zh-Hant":"最小交易手數",
            id:"Lot Transaksi Minimum"
        },
        metal25:{
            en:"Contract volume per standard lot",
            zh:"每标准手合约量",
            vi:"Kích thước hợp đồng/lot tiêu chuẩn",
            "zh-Hant":"每標準手合約量",
            id:"Volume kontrak per lot standar"
        },
        metal26:{
            en:"Trading time",
            zh:"交易时间",
            vi:"Thời gian giao dịch",
            "zh-Hant":"交易時間",
            id:"Waktu transaksi"
        },
        metal27:{
            en:"Two digits after the decimal point",
            zh:"小数点后两位",
            vi:"Hai chữ số sau dấu thập phân",
            "zh-Hant":"小數點後兩位",
            id:"2 angka dibelakang koma"
        },
        metal28:{
            en:"Three digits after the decimal point",
            zh:"小数点后三位",
            vi:"Ba chữ số sau dấu phẩy thập phân",
            "zh-Hant":"小數點後三位",
            id:"3 angka dibelakang koma"
        },
        metal29:{
            en:"ounces",
            zh:"盎司",
            vi:"ounces",
            "zh-Hant":"盎司",
            id:"ons"
        },
        metal30:{
            en:"Trading period on the trading day",
            zh:"交易日交易时段",
            vi:"Thời gian giao dịch vào ngày giao dịch 06:00-05:00",
            "zh-Hant":"交易日交易時段",
            id:"Periode transaksi pada hari kerja"
        },
        platformTimeNote:{
            en:"Note: MT4 platform time is GMT + 3 time",
            zh:"注：MT4平台时间为GMT+3时间",
            vi:"Ghi chú: Thời gian nền tảng MT4 là GMT + 3 lần",
            "zh-Hant":"註：MT4平臺時間為GMT+3時間",
            id:"Catatan : Waktu Platform MT4 adalah GMT + 3"
        },
        cfd1:{
            en:"Stock index",
            zh:"股指",
            vi:"Chỉ số chứng khoán của",
            "zh-Hant":"股指",
            id:"Indeks saham"
        },
        cfd2:{
            en:"Contracts for differences",
            zh:"指数差价合约",
            vi:"Hợp đồng chênh lệch",
            "zh-Hant":"指數差價合約",
            id:"Contracts for differences"
        },
        cfd4:{
            en:"Contracts for Difference (CFD) can reflect the price changes of stock or index and offer the profits or losses caused by price changes. Contracts for difference is the most familiar trading tool to Chinese residents and in Reuter's Financial Glossary it is defined as trading mode in which exchange of physical commodities or securities is not involved and only the balance between settlement price and contract price is used for cash settlement.",
            zh:"差价合约（Contracts for Difference ，CFD）可以反映股票或指数的价格变化并提供价格变动所带来的盈利或亏损。路透金融词典中对差价合约的定义如下：泛指不涉及实物商品或证券的交换、仅以结算价与合约价的差额作现金结算的交易方式。",
            vi:"Hợp đồng chênh lệch (CFD) có thể phản ánh các thay đổi giá của cổ phiếu và chỉ số và đưa ra các mức lợi nhuận hoặc lỗ do thay đổi giá. Các hợp đồng chênh lệch là công cụ giao dịch phổ biến nhất với các cư dân Trung Quốc và trong phụ lục Từ Ngữ Tài Chính của Reuter đã định nghĩa chính là hình thái giao dịch trong đó không bao gồm việc trao đổi vật lý các loại hàng hóa hay chứng khoán và chỉ là số dư giữa giá hoán đổi và giá hợp đồng được sử dụng để hoán đổi tiền mặt.",
            "zh-Hant":"差價合約（Contracts for Difference ，CFD）可以反映股票或指數的價格變化並提供價格變動所帶來的盈利或虧損。路透金融詞典中對差價合約的定義如下：泛指不涉及實物商品或證券的交換、僅以結算價與合約價的差額作現金結算的交易方式。",
            id:"Contracts for Difference (CFD) dapat mencerminkan perubahan harga pada saham atau indeks dan menawarkan keuntungan atau kerugian akibat dari perubahan harga tersebut. Contracts for Difference merupakan alat perdagangan yang paling akrab bagi para investor dan dalam istilah Keuangan Reuter, didefinisikan sebagai mode perdagangan yang tidak melibatkan fisik komoditas atau sekuritas dan untuk penyelesaian tunai akan menghitung saldo antara penyelesaian harga dan harga kontrak "
        },
        cfd5:{
            en:"TigerWit's advantages in stock index and contracts for difference",
            zh:"在TigerWit做指数差价合约的优势",
            vi:"Lợi thế của TigerWit về các chỉ số chứng khoán và hợp đồng chênh lệch",
            "zh-Hant":"在TigerWit做指數差價合約的優勢",
            id:"Keunggulan dari TigerWit adalah Indeks Saham dan contracts for difference"
        },
        cfd6:{
            en:"Extensive products",
            zh:"产品丰富",
            vi:"Các sản phẩm đa dạng",
            "zh-Hant":"產品豐富",
            id:"Berbagai jenis produk"
        },
        cfd7:{
            en:"TigerWit offers the trading categories on global mainstream stock markets, including such mainstream stock index products as US Dollar Index, Nikkei and European blue chip index.",
            zh:"TigerWit提供全球主流股市交易品种，包含三大美指，日经，欧洲优选等等主流股指产品。",
            vi:"TigerWit mang đến các hạng mục giao dịch với các sản phẩm chính trên thị trường chứng khoán toàn cầu, bao gồm các sản phẩm chỉ số chứng khoán chính như chỉ số đô-la Mỹ, chỉ số Nikkei và chỉ số chứng khoán blue chip.",
            "zh-Hant":"TigerWit提供全球主流股市交易品種，包含三大美指，日經，歐洲優選等等主流股指產品。",
            id:"TigerWit menyediakan berbagai jenis kategori produk seperti pasar saham, indeks saham, indeks dolar amerika, Nikkei, dan indeks blue chip eropa."
        },
        cfd8:{
            en:"High fund utilization rate",
            zh:"资金利用率高",
            vi:"Tỷ lệ sử dụng quỹ cao",
            "zh-Hant":"資金利用率高",
            id:"Pemanfaatan dana yang tinggi"
        },
        cfd9:{
            en:"Margin level as low as 2% is offered",
            zh:"提供低至 2% 的保证金水平。",
            vi:"Mang đến mức margin thấp chỉ còn 2%",
            "zh-Hant":"提供低至 2% 的保證金水平。",
            id:"Margin yang dibutuhkan hanya sekitar 2%"
        },
        cfd10:{
            en:"Low threshold",
            zh:"门槛较低",
            vi:"Mức kí quỹ ban đầu thấp",
            "zh-Hant":"門檻較低",
            id:"Margin awal yang rendah"
        },
        cfd11:{
            en:"The extremely low entry threshold enables investors to take part without the need of tens of thousands of dollars that are needed by stock index futures.",
            zh:"参与门槛极低，无需如股指期货般需要数万美元计的入市门槛。",
            vi:"Mức kí quỹ ban đầu cực kì thấp giúp cho nhà đầu tư tham gia mà không cần hàng nghìn đô-la, vốn cần có khi tham gia vào thị trường chỉ số chứng khoán.",
            "zh-Hant":"參與門檻極低，無需如股指期貨般需要數萬美元計的入市門檻。",
            id:"Investor dapat melakukan transaksi di indeks saham berjangka dengan modal yang sangat rendah."
        },
        cfd12:{
            en:"Transparent quotation",
            zh:"报价透明",
            vi:"Chào giá minh bạch",
            "zh-Hant":"報價透明",
            id:"Penawaran harga yang transparan"
        },
        cfd13:{
            en:"TigerWit provides quotation of top banks, thus helping investors achieve price discovering.",
            zh:"TigerWit提供来顶级银行的报价，帮助投资者进行最优价格发现。",
            vi:"TigerWit cung cấp mức chào giá từ các ngân hàng hàng đầu, từ đó giúp các nhà đầu tư đạt được mức giá thiết lập.",
            "zh-Hant":"TigerWit提供來頂級銀行的報價，幫助投資者進行最優價格發現。",
            id:"TigerWit memberikan penawaran harga yang kompetitif dari bank-bank terkenal di dunia, agar investor mendapatkan harga terbaik."
        },
        cfd14:{
            en:"Follow masters' move",
            zh:"复制跟单交易",
            vi:"Sao chép hành động của bậc thầy",
            "zh-Hant":"復制跟單交易",
            id:"Ikuti transaksi Master"
        },
        cfd15:{
            en:"TigerWit provides advanced and creative full-automatic order following system and gathers numerous investment masters with great profit-making capabilities. The investors have the ability to gain the earnings of the same proportion with the masters through following them. Masters can also gain more earnings through increasing their followers continuously.",
            zh:"TigerWit提供业内先进创新的全自动订单复制跟单系统，并且汇聚众多颇具盈利能力的投资高手，投资者可通过复制高手交易获得同比例投资收益。高手也可以通过不断增加跟随者而获得更多收益。",
            vi:"TigerWit cung cấp một hệ thống sao chép lệnh tiên tiến và đột phá hoàn toàn tự động và tập hợp nhiều bậc thầy với khả năng sinh lời lớn. Các nhà đầu tư có khả năng đạt được mức lợi nhuận với cùng một tỷ lệ với bậc thầy thông qua việc sao chép họ. Những bậc thầy cũng có thể tăng thu nhập của mình thông qua việc liên tục tăng số lượng người sao chép của họ.",
            "zh-Hant":"TigerWit提供業內先進創新的全自動訂單復制跟單系統，並且匯聚眾多頗具盈利能力的投資高手，投資者可通過復制高手交易獲得同比例投資收益。高手也可以通過不斷增加跟隨者而獲得更多收益。",
            id:"TigerWit menyediakan sistem copy-trading yang sangat mutakhir dan serba otomatis, serta menghadirkan banyak pilihan Master yang memiliki kemampuan untuk menghasilkan keuntungan. Investor dapat meraup keuntungan hanya dengan mengikuti setiap posisi Master. Sedangkan Master juga mendapat keuntungan dari jumlah pengikut yang terus bertambah."
        },
        cfd16:{
            en:"How to achieve stock index trade in TigerWit?",
            zh:"在TigerWit怎么做股指交易?",
            vi:"Làm thế nào để giao dịch chỉ số chứng khoán với TigerWit?",
            "zh-Hant":"在TigerWit怎麽做股指交易?",
            id:"Bagaimana perhitungan transaksi indeks saham di TigerWit?"
        },
        cfd17:{
            en:"An investor of TigerWit bought one lot of European blue chip index (eusbx50) around 10:00 am EST on October 22, platform time of TigerWit at the position of 3260 by EUR 65.",
            zh:"某位TigerWit的投资者在TigerWit的平台时间 10 月 22 号 10 点左右，于 3260 位置左右动用 65 欧元买入 1 手欧洲绩优指数（eustx50）。",
            vi:"Một nhà đầu tư của TigerWit đã mua rất nhiều chỉ số chứng khoán blue chip châu Âu (eusbx50) vào khoảng 10:00 sáng EST vào ngày 22 tháng 10, thời gian trên nền tảng của TigerWit với vị thế 3260 65 EUR. ",
            "zh-Hant":"某位TigerWit的投資者在TigerWit的平臺時間 10 月 22 號 10 點左右，於 3260 位置左右動用 65 歐元買入 1 手歐洲績優指數（eustx50）。",
            id:"Seorang investor di TigerWit membuka posisi Beli di indeks saham blue chip eropa (EUSBX50) pada tanggal 22 oktober, pukul 10:00 pagi EST, pada saat itu posisi harga ada di 3260 EUR65."
        },
        cfd18:{
            en:"On the second day, the trade was closed at the position of 3440 around 14:00 pm EST on October 23.",
            zh:"到了第二日，10 月 23 日 14 点左右，于 3440 位置平仓了结，",
            vi:"Vào ngày thứ hai, giao dịch đã đóng cửa ở vị thế 3440 vào khoảng 14:00 pm EST vào ngày 23 tháng 10.",
            "zh-Hant":"到了第二日，10 月 23 日 14 點左右，於 3440 位置平倉了結，",
            id:"Keesokan harinya, transaksi tersebut ditutup di harga 3440 pada tanggal 23 oktober, pukul 14:00 EST. "
        },
        cfd19:{
            en:"The earnings obtained by the client is 3440 – 3260 = EUR180 ",
            zh:"客户收益 3440-3260=180 欧元，",
            vi:"Thu nhập của khách hàng là 3440 - 3260 = EUR180,",
            "zh-Hant":"客戶收益 3440-3260=180 歐元，",
            id:"Keuntungan yang dihasilkan oleh klien tersebut adalah 3440-3260 = 180 EUR. "
        },
        cfd20:{
            en:"the yield rate of which is 180/65/100% = 276%. ",
            zh:"收益率 180/65/100%=276%。",
            vi:" tỷ lệ lãi suất là 180/65/100% = 276 %.",
            "zh-Hant":"收益率 180/65/100%=276%。",
            id:"dimana persentase keuntungannya adalah 180/65/100% = 276%."
        },
        cfd21:{
            en:"Introduction to TigerWit financial stock index",
            zh:"TigerWit股指产品介绍",
            vi:"Giới thiệu về chỉ số chứng khoán tài chính TigerWit",
            "zh-Hant":"TigerWit股指產品介紹",
            id:"Mengenal indeks saham di TigerWit"
        },
        cfd22:{
            en:"Product code",
            zh:"产品代码",
            vi:"Mã sản phẩm",
            "zh-Hant":"產品代碼",
            id:"Kode Produk"
        },
        cfd23:{
            en:"Chinese name",
            zh:"中文名称",
            vi:"Chinese name",
            "zh-Hant":"中文名稱",
            id:"Nama"
        },
        cfd24:{
            en:"Contract volume",
            zh:"合约量",
            vi:"Kích thước hợp đồng",
            "zh-Hant":"合約量",
            id:"Volume Kontrak"
        },
        cfd26:{
            en:"Minimum contract unit (standard lot)",
            zh:"最小合约单位(标准手)",
            vi:"Đơn vị hợp đồng tối thiểu (lot tiêu chuẩn)",
            "zh-Hant":"最小合約單位(標準手)",
            id:"Unit kontrak minimum (lot standar)"
        },
        cfd27:{
            en:"Maximum trading volume (lot)",
            zh:"最大交易量(手)",
            vi:"Kích thước giao dịch tối đa (lot)",
            "zh-Hant":"最大交易量(手)",
            id:"Volume transaksi maksimum (lot)"
        },
        cfd28:{
            en:"Trading time (Beijing time)",
            zh:"交易时间(北京时间)",
            vi:"Kích thước giao dịch tối đa (lot)",
            "zh-Hant":"交易時間(北京時間)",
            id:"Waktu transaksi (Waktu Beijing)"
        },
        cfd29:{
            en:"Quotation time (Beijing time)",
            zh:"报价时间(北京时间)",
            vi:"Thời gian chào giá (Giờ Bắc Kinh)",
            "zh-Hant":"報價時間(北京時間)",
            id:"Waktu Penawaran (Waktu Beijing)"
        },
        cfd30:{
            en:"Product introduction",
            zh:"产品简介",
            vi:"Thời gian chào giá (Giờ Bắc Kinh)",
            "zh-Hant":"產品簡介",
            id:"Informasi Produk"
        },
        aboutb_1: {
            zh:"",
            en:"About Us",
            vi:"Về chúng tôi",
            "zh-Hant":"",
            id:"Tentang Kami"
        },
        aboutb_2: {
            zh:"",
            en:"Business name: TigerWit Limited",
            vi:"Tên Doanh Nghiệp: TigerWit Limited",
            "zh-Hant":"",
            id:"Nama Bisnis : TigerWit Limited"
        },
        aboutb_3: {
            zh:"",
            en:"Registration: The Bahamas, company number 198255 B",
            vi:"Đăng Ký: Tập đoàn Bahamas, số hiệu công ty 198255 B",
            "zh-Hant":"",
            id:"Registrasi: The Bahamas, Nomor Perusahaan 198255"
        },
        aboutb_4: {
            zh:"",
            en:"Financial Services Licence: TigerWit has obtained authoritative regulatory license from Financial Conduct Authority (FCA) and Securities Commission of The Bahamas (SCB), which authorises TigerWit to carry on a financial services business in British and Bahamas and other areas.TigerWit Limited (UK) and TigerWit Limited (Bahamas) are subsidiaries of TigerWit Holding Limited.TigerWit Limited (UK) is regulated by Financial Conduct Authority (FCA), license number 679941. TigerWit Limited (Bahamas) is regulated by Securities Commission of The Bahamas (SCB), license number SIA-F185.",
            vi:"Giấy phép Dịch vụ Tài chính: TigerWit đã nhận được giấy phép quản lý có thẩm quyền từ Cơ quan Quản lý Tài chính (FCA) và Ủy ban Chứng khoán của Bahamas (SCB), ủy quyền cho TigerWit thực hiện một doanh nghiệp dịch vụ tài chính ở Anh và Bahamas và các khu vực khác.TigerWit Limited (Anh) và TigerWit Limited (Bahamas) là các công ty con của TigerWit Holding Limited.TigerWit Limited (Anh) được quản lý bởi Cơ quan quản lý tài chính (FCA), số giấy phép 679941. TigerWit Limited (Bahamas) được quy định bởi Ủy ban chứng khoán của Bahamas (SCB), giấy phép số SIA-F185.",
            "zh-Hant":"",
            id:"Lisensi Layanan Keuangan: TigerWit telah memperoleh lisensi layanan keuangan dari Financial Conduct Authority (FCA) dan Securities Commission of The Bahamas (SCB), dimana kedua regulator tersebut memberikan wewenang kepada TigerWit untuk menjalankan bisnis layanan keuangan di Inggris dan Bahama dan daerah-daerah lainnya. TigerWit Limited (Inggris) dan TigerWit Limited (Bahamas) merupakan anak perusahaan dari TigerWit Holding Limited. TigerWit Limited (Inggris) diregulasi oleh Financial Conduct Authority (FCA) dengan nomor lisensi 679941. Sedangkan TigerWit Limited (Bahamas) diregulasi oleh Securities Commission of The Bahamas (SCB) dengan nomor lisensi SIA-F185."
        },
        aboutb_5: {
            zh:"",
            en:"Website: ",
            vi:"Trang Web: ",
            "zh-Hant":"",
            id:"Situs Web: "
        },
        aboutb_6: {
            zh:"",
            en:"Who We Are",
            vi:"Chúng tôi là ai",
            "zh-Hant":"",
            id:"Siapa Kami"
        },
        aboutb_7: {
            zh:"",
            en:"With a strong technological core built upon a philosophy of transparency, credibility and integrity, TigerWit offers its clients exceptional capabilities to trade in the markets.",
            vi:"Với cốt lõi công nghệ mạnh mẽ được xây dựng dựa trên triết lý về tính minh bạch, uy tín và tính toàn vẹn, TigerWit mang đến cho khách hàng của mình khả năng đặc biệt để giao dịch trên thị trường.",
            "zh-Hant":"",
            id:"Dengan menggunakan teknologi yang kuat dan dirancang atas dasar keterbukaan, kredibilitas dan Integritas, TigerWIt menawarkan pengalaman transaksi di pasar dengan kemampuan yang berbeda dengan yang lainna"
        },
        aboutb_8: {
            zh:"",
            en:"TigerWit’s founders are experienced individuals with successful backgrounds and a long history of achievement, who bring together a team of professionals with diverse academic and applied backgrounds experienced in trading Forex, CFD and spread betting, regulatory compliance, investment management, research & development of online platforms and global sales & marketing.",
            vi:"Những người sáng lập TigerWit là những cá nhân có kinh nghiệm với nền tảng thành công và lịch sử thành tích lâu đời, họ tập hợp một nhóm các chuyên gia với nền tảng học thuật và ứng dụng đa dạng có kinh nghiệm trong giao dịch Forex, CFD và đặt cược lan truyền, tuân thủ quy định, quản lý đầu tư, nghiên cứu & phát triển nền tảng bán hàng trực tuyến và tiếp thị toàn cầu.",
            "zh-Hant":"",
            id:"Para pendiri TigerWit merupakan individu yang memiliki latar belakang dan pengalaman yang sukses serta perjalanan yang panjang dimana mereka berhasil menggabungkan sekelompok tim yang profesional dan berpengalaman di dunia valuta asing, CFD, spread betting, peraturan, manajemen investasi, penelitian dan pengembangan platform online dan penjualan dan pemasaran global."
        },
        aboutb_9: {
            zh:"关于我们",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"關於我們",
            id:"__id__"
        },
        aboutb_10: {
            zh:"TigerWit是一家全球性的外汇交易服务科技创新平台，面向全球个人交易者、机构交易者提供科技智能化的在线交易解决方案。致力于「以科技升级为核心驱动力，不断革新外汇交易服务，打造公平透明、低成本、高效的优质交易环境，不断降低用户参与全球外汇市场的门槛，提升交易服务效率和用户参与体验。」",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"TigerWit是壹家全球性的外匯交易服務科技創新平臺，面向全球個人交易者、機構交易者提供科技智能化的在線交易解抉方案。致力於「以科技升級為核心驅動力，不斷革新外匯交易服務，打造公平透明、低成本、高效的優質交易環境，不斷降低用護慘與全球外匯市場的門檻，提升交易服務效率和用護慘與體驗。」",
            id:"__id__"
        },
        aboutb_11: {
            zh:"管理团队",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"管理團隊",
            id:"__id__"
        },
        aboutb_12: {
            zh:"TigerWit创始人具有丰富的外汇交易行业经验和行业成功背景，他们汇集了具有不同学术和应用背景的专业人士，分别在外汇交易、差价合约、监管合规性、投资管理、在线平台研发和全球营销等方面拥有丰富的经验。",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"TigerWit創始人具有豐富的外匯交易行業經驗和行業成功背景，他們匯集了具有不同學術和應用背景的專業人士，分別在外匯交易、差價合約、監管合規性、投資管理、在線平臺研發和全球營銷等方面擁有豐富的經驗。",
            id:"__id__"
        },
        aboutb_13: {
            zh:"所受监管",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"所受監管",
            id:"__id__"
        },
        aboutb_14: {
            zh:"TigerWit受巴哈马证券交易委员会（SCB）的授权和监管。",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"TigerWit受巴哈馬證券交易委員會（SCB）的授權和監管。",
            id:"__id__"
        },
        aboutb_15: {
            zh:"监管号：SIA-F185",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"監管號：SIA-F185",
            id:"__id__"
        },
        aboutb_16: {
            zh:"TigerWit受英国金融行为监管局（FCA）的授权和监管。",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"TigerWit受英國金融行為監管局（FCA）的授權和監管。",
            id:"__id__"
        },
        aboutb_17: {
            zh:"授权编号为：679941",
            en:"",
            vi:"^^-^^",
            "zh-Hant":"授權編號為：679941",
            id:"__id__"
        },
        about_1:{
            zh:"为何选择TigerWit",
            en:"What we do",
            vi:"Chúng ta làm gì",
            "zh-Hant":"為何選擇TigerWit",
            id:"Apa yang kami kerjakan"
        },
        about_2:{
            zh:"创新的交易系统",
            en:"Trading Platforms",
            vi:"Nền tảng giao dịch",
            "zh-Hant":"創新的交易系統",
            id:"Platform Trading"
        },
        about_3:{
            zh:"TigerWit为客户提供独一无二的交易体验，当用户的交易订单通过专有的在线和移动交易系统交付到市场，与其他经纪商相比，TigerWit更具优势。",
            en:"TigerWit provides its clients with an extraordinary trading experience delivered through its proprietary online and mobile trading platforms. This experience is unique and gives TigerWit an advantage in comparison to other brokers.",
            vi:"TigerWit cung cấp cho khách hàng của mình một trải nghiệm giao dịch bất thường được phân phối thông qua các nền tảng giao dịch trực tuyến và di động độc quyền của mình. Trải nghiệm này là duy nhất và mang lại lợi thế cho TigerWit so với các nhà môi giới khác.",
            "zh-Hant":"TigerWit為客戶提供獨壹無二的交易體驗，當用戶的交易訂單通過專有的在線和移動交易系統交付到市場，與其他經紀商相比，TigerWit更具優勢。",
            id:"TigerWit menyediakan pengalaman transaksi yang berbeda kepada klien yang disampaikan melalui platform perdagangan online dan seluler. Pengalaman unik ini memberikan keunggulan kepada TigerWit dibandingkan dengan broker lainnya"
        },
        about_4:{
            zh:"TigerWit通过自主研发的移动端交易系统，极大地简化了客户的操作，同时最大限度地保留用户使用习惯，从而使TigerWit将投资和开发全部集中在一个创新的交易环境中，避免为多个受众开发多个接口。",
            en:"TigerWit’s Apps simplify and streamline the client journey and minimise variability of user experience. This enables TigerWit to focus investment and development wholly on innovation within one dealing environment rather than having to maintain and develop multiple interfaces for multiple audiences.",
            vi:"Ứng dụng của TigerWit đơn giản hóa và hợp lý hóa hành trình của khách hàng và giảm thiểu sự thay đổi trải nghiệm người dùng. Điều này cho phép TigerWit tập trung đầu tư và phát triển hoàn toàn vào sự đổi mới trong một môi trường giao dịch thay vì phải duy trì và phát triển nhiều giao diện cho nhiều đối tượng.",
            "zh-Hant":"TigerWit通過自主研發的移動端交易系統，極大地簡化了客戶的操作，同時最大限度地保留用戶使用習慣，從而使TigerWit將投資和開發全部集中在壹個創新的交易環境中，避免為多個受眾開發多個接口。",
            id:"Aplikasi TigerWit menyederhanakan dan mempermudah penggunaan klien dan menimimalisir variabilias pengalaman klien. Dengan hal itu, TigerWit dapat fokus pada pengembangan dan pengelolaan investasi dan transaksi hanya dalam 1 lingkungan saja dtanpa harus mengelola dan mengelola dan mengembangkan berbagai jenis lingkungan untuk berbagai jenis klien."
        },
        about_5:{
            zh:"TigerWit金融服务",
            en:"Financial Services",
            vi:"Các dịch vụ tài chính",
            "zh-Hant":"TigerWit金融服務",
            id:"Layanan Keuangan"
        },
        about_6:{
            zh:"TigerWit提供自主交易账户，一般咨询和交易执行服务通过在线交易平台与流动性提供商提供。TigerWit的特定授权金融服务业务活动包括：",
            en:"TigerWit offers self-directed trading accounts, general advisory and trade execution services made through the online trading platform via liquidity providers. TigerWit’s specific authorised financial services business activities include: ",
            vi:"TigerWit cung cấp các tài khoản giao dịch tự điều khiển, các dịch vụ tư vấn chung và giao dịch được thực hiện thông qua sàn giao dịch trực tuyến thông qua các nhà cung cấp thanh khoản. Các hoạt động kinh doanh dịch vụ tài chính được ủy quyền cụ thể của TigerWit bao gồm:",
            "zh-Hant":"TigerWit提供自主交易賬戶，壹般咨詢和交易執行服務通過在線交易平臺與流動性提供商提供。TigerWit的特定授權金融服務業務活動包括：",
            id:"TigerWit menawarkan akun transaksi mandiri, penasehat umum dan layanan eksekusi transaksi yang diberikan melalui platform trading online via penyedia likuiditas.  "
        },
        about_7:{
            zh:"1.作为代理人或委托人处理外汇、差价合约、指数、大宗商品和衍生品；",
            en:"Dealing as agent or principal, in Forex, CFDs, indices, commodities and derivatives;",
            vi:"Hoạt động như đại lý hoặc người giám sát chính, trong Forex, CFD, chỉ số, hàng hóa và các loại phái sinh;",
            "zh-Hant":"1.作為代理人或委托人處理外匯、差價合約、指數、大宗商品和衍生品；",
            id:"Berdagang sebagai agen atau prinsipal di Valas, CFD, indeks, komoditas dan turunannya;"
        },
        about_8:{
            zh:"2.安排包含外汇、差价合约、指数、大宗商品和衍生品在内的证券交易；",
            en:"Arranging deals in securities including Forex, CFDs, indices, commodities and derivatives;",
            vi:"Sắp xếp các giao dịch chứng khoán bao gồm Forex, CFD, chỉ số, hàng hóa và phái sinh;",
            "zh-Hant":"2.安排包含外匯、差價合約、指數、大宗商品和衍生品在內的證券交易；",
            id:"Atur transaksi di dalam sekuritas termasuk Valas, CFD, indeks, komoditas dan turunannya; "
        },
        about_9:{
            zh:"3.酌情管理证券；",
            en:"Managing securities on a discretionary basis;",
            vi:"Quản lý chứng khoán trên cơ sở tùy ý;",
            "zh-Hant":"3.酌情管理證券；",
            id:"Mengelola sekuritas dengan bijaksana"
        },
        about_10:{
            zh:"4.证券咨询。",
            en:"Advising on securities.",
            vi:"Tư vấn về chứng khoán.",
            "zh-Hant":"4.證券咨詢。",
            id:"Memberikan nasihat di sekuritas"
        },
        about_11:{
            zh:"外汇、衍生品和差价合约交易的一般建议",
            en:"General advice in Forex, Derivatives and Contracts for Difference (CFDs)",
            vi:"Tư vấn chung trong Forex, phái sinh và hợp đồng chênh lệch (CFDs)",
            "zh-Hant":"外匯、衍生品和差價合約交易的壹般建議",
            id:"Nasihat umum di Valas, Derivatif dan Contracts for Difference (CFD)"
        },
        about_12:{
            zh:"TigerWit在非个性化的基础上为批发和零售客户提供一般建议。活动包括一般产品信息，研讨会/网络研讨会，通讯，一般知识和教育。",
            en:"TigerWit provides general advice to wholesale or retail clients on a non-personalised basis. Activities include general product information, seminars, webinars, newsletters, general knowledge and education.",
            vi:"TigerWit cung cấp tư vấn chung cho khách hàng bán buôn hoặc bán lẻ trên cơ sở không được cá nhân hóa. Các hoạt động bao gồm thông tin sản phẩm chung, hội thảo, hội thảo trên web, bản tin, kiến thức chung và giáo dục.",
            "zh-Hant":"TigerWit在非個性化的基礎上為批發和零售客戶提供壹般建議。活動包括壹般產品信息，研討會/網絡研討會，通訊，壹般知識和教育。",
            id:"TigerWit menyediakan rekomendasi atau saran umum kepada para klien pribadi atau klien besar dalam bentuk laporan informasi produk, seminar, webinar, buletin, pengetahuan umum dan edukasi"
        },
        about_13:{
            zh:"外汇、衍生品和差价合约的安排和交易",
            en:"Arranging and dealing Forex, Derivatives and Contracts for Difference (CFDs)",
            vi:"Sắp xếp và xử lý Forex, phái sinh và hợp đồng chênh lệch (CFDs)",
            "zh-Hant":"外匯、衍生品和差價合約的安排和交易",
            id:"Atur dan transaksi di Valas, Derivatif, dan Contracts for Difference (CFD)"
        },
        about_14:{
            zh:"TigerWit的在线交易平台通过场外交易代表客户执行交易。差价合约是使用交易平台提供买入和卖出价格的基础资产的金融工具。差价合约以主要货币，指数，贵金属和商品交易。",
            en:"TigerWit’s online trading platform executes a client’s trade on behalf of the client through an over-the-counter market transaction. CFDs are financial instruments using underlying assets with the buy and sell prices offered through the trading platform. CFDs are transacted in major currencies, Indices, precious metals and commodities.",
            vi:"Nền tảng giao dịch trực tuyến của TigerWit thực hiện giao dịch của khách hàng thay mặt cho khách hàng thông qua giao dịch thị trường không theo toa. CFD là công cụ tài chính sử dụng tài sản cơ bản với giá mua và bán được cung cấp thông qua sàn giao dịch. CFD được giao dịch bằng các đồng tiền chính, chỉ số, kim loại quý và hàng hóa.",
            "zh-Hant":"TigerWit的在線交易平臺通過場外交易代表客戶執行交易。差價合約是使用交易平臺提供買入和賣出價格的基礎資產的金融工具。差價合約以主要貨幣，指數，貴金屬和商品交易。",
            id:"Platform perdagangan online TigerWit akan melakukan transaksi perdagangan klien dengan atas nama klien melalui transaksi di pasar OTC. CFD adalah instrumen keuangan yang menawarkan harga beli dan harga jual melalui platform perdagangan. CFD ditransaksikan dalam bentuk Mata Uang utama, indeks, logam mulia dan komoditas"
        },
        about_15:{
            zh:"当市场开放时，每天24小时提供交易，并提供客户支持，语言，电话，聊天和电子邮件。",
            en:"Trading is offered 24 hours a day when markets are open.",
            vi:"Giao dịch được cung cấp 24 giờ mỗi ngày khi thị trường mở cửa.",
            "zh-Hant":"當市場開放時，每天24小時提供交易，並提供客戶支持，語言，電話，聊天和電子郵件。",
            id:"Transaksi dapat dilakukan selama 24 jam sehari ketika pasar buka"
        },
        about_16:{
            zh:"客户在线登录",
            en:"Client on-boarding",
            vi:"Khách hàng tham gia",
            "zh-Hant":"客戶在線登錄",
            id:"Orientasi Klien"
        },
        about_17:{
            zh:"客户在线使用过程中收集客户的姓名和身份进行KYC和MAL检查。将手机有关客户的信息，以确保产品符合客户的经验和风险特征。该过程可通过网站https://www.tigerwit.com查看。当客户被接受时，系统将在客户端建立账户，并为用户提供登录凭证。",
            en:"Clients are on-boarded using an on-line process that gathers the client’s name and identification in order to perform KYC and AML checks. Information about the client will be collected to ensure the product suits the client’s level of experience and risk profile. The process is available for viewing through the website https://global.tigerwit.com/",
            vi:"Khách hàng tham gia bằng cách sử dụng bộ xử lý trực tuyến thu thập tên và nhận dạng của khách hàng để thực hiện kiểm tra KYC và AML. Thông tin về khách hàng sẽ được thu thập để đảm bảo sản phẩm phù hợp với cấp độ kinh nghiệm và hồ sơ rủi ro của khách hàng. Quá trình này có sẵn để xem qua trang web https://global.tigerwit.com/",
            "zh-Hant":"客戶在線使用過程中收集客戶的姓名和身份進行KYC和MAL檢查。將手機有關客戶的信息，以確保產品符合客戶的經驗和風險特征。該過程可通過網站https://www.tigerwit.com查看。當客戶被接受時，系統將在客戶端建立賬戶，並為用戶提供登錄憑證。",
            id:"Klien meggunakan proses online untuk mengumpulkan nama dan identifikasi klien untuk dilakukan pemeriksaan KYC dan AML. Informasi mengenai klien akan dikumpulkan guna memastikan produk yang diberikan kepada klien sesuai dengan tingkat pengalaman dan profil risiko klien tersebut. Proses tersebut dapat dilihat secara online di Situs web https://global.tigerwit.com/"
        },
        about_17_1:{
            zh:" ",
            en:"When the client is accepted, the client’s account is established and login credentials are provided to the client.",
            vi:"Khi khách hàng được chấp nhận, tài khoản của khách hàng được thiết lập và thông tin xác thực đăng nhập được cung cấp cho khách hàng.",
            "zh-Hant":" ",
            id:"Ketika klien diterima, maka informasi rahasia akan dikirimkan kepada klien dan akun akan dibuat secara otomatis."
        },
        about_18:{
            zh:"客户资金安全",
            en:"Safety of Client Funds",
            vi:"An toàn của Quỹ khách hàng",
            "zh-Hant":"客戶資金安全",
            id:"Keamanan dana klien"
        },
        about_19:{
            zh:"当客户向TigerWit存入资金时，这些资金与TigerWit的资金完全隔离，并存放在独立的银行账户。保护客户的资金不被用于任何其他目的，并确保客户发起提现请求时可以快速无缝地提款。",
            en:"When clients deposit funds with TigerWit, those funds are segregated from TigerWit’s operating accounts. Client Segregated Accounts safeguard client funds and ensure quick and seamless withdrawals when requested by a client.",
            vi:"Khi khách hàng gửi tiền với TigerWit, các khoản tiền này được tách biệt khỏi tài khoản hoạt động của TigerWit. Tài khoản khách hàng tách biệt bảo vệ quỹ của khách hàng và đảm bảo rút tiền nhanh chóng và liền mạch khi khách hàng yêu cầu.",
            "zh-Hant":"當客戶向TigerWit存入資金時，這些資金與TigerWit的資金完全隔離，並存放在獨立的銀行賬戶。保護客戶的資金不被用於任何其他目的，並確保客戶發起提現請求時可以快速無縫地提款。",
            id:"Ketika klien melakukan pengisian dana dengan TigerWit, maka dana tersebut akan dimasukkan ke rekening terpisah dari rekening TigerWit. Rekening terpisah Klien akan dilindungi dan memastikan bahwa semua permohonan penarikan dana oleh klien dapat berjalan dengan cepat dan mulus"
        },
        about_20:{
            zh:"更多服务",
            en:"Why we do it",
            vi:"Tại sao chúng ta làm điều này",
            "zh-Hant":"更多服務",
            id:"Mengapa kami mengerjakannya"
        },
        about_21:{
            zh:"由于交易者有机会获利，自主交易者欣赏投机者对基础资产价格的变动。开户时，客户对账户内的所有资产保留合法和实益的所有权，并自行结算账户。TigerWit的交易平台允许客户访问与传统投资相比相关性较低的工具。",
            en:"Self-directed traders appreciate speculating on movements in the price of underlying assets. When opening an account, the client retains legal and beneficial ownership of all assets within the account and trades their account on their own discretionary basis. TigerWit’s trading platforms allows the client to access instruments with low correlation in comparison with traditional investing.",
            vi:"Các nhà giao dịch tự định hướng đánh giá cao sự đầu cơ vào giá của các tài sản cơ bản. Khi mở một tài khoản, khách hàng giữ quyền sở hữu hợp pháp và hưởng lợi của tất cả các tài sản trong tài khoản và giao dịch tài khoản của họ trên cơ sở tùy ý của riêng họ. Nền tảng giao dịch của TigerWit cho phép khách hàng truy cập các công cụ có tương quan thấp so với đầu tư truyền thống.",
            "zh-Hant":"由於交易者有機會獲利，自主交易者欣賞投機者對基礎資產價格的變動。開戶時，客戶對賬戶內的所有資產保留合法和實益的所有權，並自行結算賬戶。TigerWit的交易平臺允許客戶訪問與傳統投資相比相關性較低的工具。",
            id:"Biasanya seorang pedagang pribadi senang berspekulasi dengan pergerakan harga. Oleh karena itu, ketika mereka membuka sebuah akun, klien akan langsung memiliki semua produk untuk ditransaksikan di dalam sehingga klien bebas bertransaksi sesuai keinginannya. Platform perdagangan TigerWit memungkinkan klien untuk mengakses instrumen dengan korelasi yang rendah dibandingkan dengan investasi tradisional"
        },
        about_22:{
            zh:"TigerWit提供的主要功能包括：",
            en:"Key features of TigerWit’s offering includes: ",
            vi:"Các tính năng chính của chương trình TigerWit bao gồm",
            "zh-Hant":"TigerWit提供的主要功能包括：",
            id:"Fitur utama dari TigerWIt menawarkan :"
        },
        about_23:{
            zh:"波动性风险",
            en:"Exposure to volatility",
            vi:"Rủi ro so với độ biến động",
            "zh-Hant":"波動性風險",
            id:"Risiko Volatilitas"
        },
        about_24:{
            zh:"在当今的市场投资波动性是很重要的。",
            en:"Investments that can navigate volatility are important in today’s markets.",
            vi:"Các khoản đầu tư có thể điều khiển hướng biến động là điều quan trọng trong các thị trường hiện nay.",
            "zh-Hant":"在當今的市場投資波動性是很重要的。",
            id:"Investasi yang dapat mengikuti volatilitas sangat penting dalam kondisi pasar saat ini"
        },
        about_25:{
            zh:"金融工具",
            en:"Exposure to financial instruments",
            vi:"Khả năng rủi ro với các công cụ tài chính",
            "zh-Hant":"金融工具",
            id:"Instrumen Keuangan"
        },
        about_26:{
            zh:"货币，商品和指数享有高流动性，低成本，能在在上涨和下跌的市场中获利。",
            en:"Currencies, commodities and indices enjoy high liquidity, low cost and the ability to achieve results in both rising and falling markets.",
            vi:"Các loại tiền tệ, hàng hóa và chỉ số có tính thanh khoản cao, chi phí thấp và khả năng đạt được kết quả ở cả thị trường tăng và giảm.",
            "zh-Hant":"貨幣，商品和指數享有高流動性，低成本，能在在上漲和下跌的市場中獲利。",
            id:"Mata uang, Komoditas dan indeks saham memiliki likuiditas yang tinggi, biaya yang rendah dan kemampuan dalam mendapakan hasil saat pasar sedang naik ataupun turun"
        },
        about_27:{
            zh:"杠杆作用",
            en:"Leverage",
            vi:"Đòn bẩy",
            "zh-Hant":"杠桿作用",
            id:"Daya Ungkit"
        },
        about_28:{
            zh:"客户可采取与收益递增的目标杠杆头寸，但杠杆作用也可能导致损失增加。",
            en:"The client may take leveraged positions with the aim of increasing returns, but leverage can also lead to increased losses.",
            vi:"Khách hàng có thể nắm giữ các vị thế đòn bẩy với mục đích tăng lợi nhuận, nhưng đòn bẩy cũng có thể dẫn đến tổn thất tăng lên.",
            "zh-Hant":"客戶可采取與收益遞增的目標杠桿頭寸，但杠桿作用也可能導致損失增加。",
            id:"Klien dapat memanfaatkan Daya Ungkit untuk meningkatkan keuntungan, akan tetapi perlu dicatat bahwa daya ungkit juga dapat meningkatkan kerugian"
        },
        about_29:{
            zh:"多样化的方法",
            en:"Diversified approach",
            vi:"Cách tiếp cận đa dạng",
            "zh-Hant":"多樣化的方法",
            id:"Berbagai jenis pendekatan"
        },
        about_30:{
            zh:"广泛的交易方式和策略。",
            en:"A wide range of trading methods and strategies.",
            vi:"Một loạt các phương thức giao dịch và chiến lược.",
            "zh-Hant":"廣泛的交易方式和策略。",
            id:"Berbagai pilihan Metode dan strategi"
        },
        about_31:{
            zh:"一般市场风险因素的相关性较低",
            en:"Low correlation to general market risk factors",
            vi:"Tương quan thấp với các yếu tố rủi ro thị trường chung",
            "zh-Hant":"壹般市場風險因素的相關性較低",
            id:"Korelasi yang rendah dengan faktor risiko pasar"
        },
        about_32:{
            zh:"与传统资产类别（如股票和债券）相比绝对回报。",
            en:"Absolute returns compared to traditional asset classes such as equities and bonds.",
            vi:"Lợi nhuận tuyệt đối so với các loại tài sản truyền thống như cổ phiếu và trái phiếu.",
            "zh-Hant":"與傳統資產類別（如股票和債券）相比絕對回報。",
            id:"Keuntungan yang lebih tinggi dibandingkan dengan kelas aset seperti ekuitas dan obligasi"
        },
        about_33:{
            zh:"投资主体多元化",
            en:"Investment diversification",
            vi:"Đa dạng hóa đầu tư",
            "zh-Hant":"投資主體多元化",
            id:"Diversifikasi Investasi"
        },
        about_34:{
            zh:"上涨和下跌市场均有正回报潜力。",
            en:"Potential for positive returns in both rising and falling markets.",
            vi:"Tiềm năng lợi nhuận dương ở cả thị trường tăng và giảm.",
            "zh-Hant":"上漲和下跌市場均有正回報潛力。",
            id:"Potensi mendapatkan keuntungan positif dari naik dan turunnya pasar"
        },
        about_35:{
            zh:"透明灵活",
            en:"Transparent and flexible",
            vi:"Minh bạch và linh hoạt",
            "zh-Hant":"透明靈活",
            id:"Transparan dan Fleksibel"
        },
        about_36:{
            zh:"客户可以完全访问和保留对其资金的控制权。",
            en:"Clients have full access to and retain control of their funds.",
            vi:"Khách hàng có toàn quyền truy cập và giữ quyền kiểm soát tiền của họ.",
            "zh-Hant":"客戶可以完全訪問和保留對其資金的控制權。",
            id:"Klien memiliki akses penuh dan mengontrol dana mereka"
        },
        copyRule1:{
            zh:"TigerWit复制规则",
            en:"TigerWit copy rules",
            vi:"Quy chế sao chép của TigerWit",
            "zh-Hant":"TigerWit復制規則",
            id:"Peraturan Copy di TigerWit"
        },
        copyRule2:{
            zh:"复制账号",
            en:"Copy account",
            vi:"Tài khoản sao chép",
            "zh-Hant":"復制賬號",
            id:"Akun Copy"
        },
        copyRule2M:{
            zh:"复制账号：",
            en:"Copy account: ",
            vi:"Tài khoản sao chép: ",
            "zh-Hant":"復制賬號：",
            id:"Akun Copy: "
        },
        copyRule2_1:{
            zh:"系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
            en:"The system will use the specific account to copy Master, will be automatically generated when no copy account, all copy operations are performed using the specific copy account;",
            vi:"Hệ thống sẽ sử dụng tài khoản cụ thể để sao chép bậc thầy, sẽ được tạo tự động khi không có tài khoản sao chép, tất cả các thao tác sao chép được thực hiện bằng tài khoản sao chép cụ thể;",
            "zh-Hant":"系統將使用跟單專用賬號復制高手，無跟單賬號復制時將自動生成，所有復制操作均使用該跟單賬號進行；",
            id:"Sistem akan membuatkan akun khusus secara otomatis, untuk mengikuti seorang Master (apabila belum ada akun yang telah dibuka sebelumnya). Semua transaksi copy-trading akan menggunakan akun khusus tersebut;"
        },
        copyRule2_2:{
            zh:"复制高手",
            en:"Follow the Master",
            vi:"Sao chép bậc thầy",
            "zh-Hant":"復制高手",
            id:"Ikuti Master."
        },
        copyRule2_2M:{
            zh:"复制高手：",
            en:"Follow the Master: ",
            vi:"Sao chép bậc thầy: ",
            "zh-Hant":"復制高手：",
            id:"Ikuti Master: "
        },
        copyRule2_3:{
            zh:"您最多可以复制 10 位高手。每位交易高手的复制金额不同，您可以根据自己的账户情况选择高手进行复制。",
            en:"You can follow up to 10 masters. Each master has a different level of copying, and you can choose to copy it according to your account.",
            vi:"Bạn có thể sao chép tối đa 10 bậc thầy. Mỗi tổng thể có một mức sao chép khác nhau và bạn có thể chọn sao chép theo tài khoản của mình.",
            "zh-Hant":"您最多可以復制 10 位高手。每位交易高手的復制金額不同，您可以根據自己的賬戶情況選擇高手進行復制。",
            id:"Anda dapat mengikuti Master hingga 10 orang. Setiap master memiliki strategi yang berbeda-beda. Oleh karena itu anda dapat memilih Master dan menyesuaikannya dengan akun yang anda miliki."
        },
        copyRule3:{
            zh:"复制资金",
            en:"Copy funds",
            vi:"Sao chép quỹ",
            "zh-Hant":"復制資金",
            id:"Dana Copy"
        },
        copyRule3M:{
            zh:"复制资金：",
            en:"Copy funds: ",
            vi:"Sao chép quỹ: ",
            "zh-Hant":"復制資金：",
            id:"Dana Copy: "
        },
        copyRule4:{
            zh:"复制资金可自行设置，最小值不可低于高手的最低复制金额，最大值不可超过您账户的可用复制金额。",
            en:"The copy funds can be set by themselves. The minimum value cannot be lower than the minimum copy amount of the master. The maximum value cannot exceed the available copy amount of your account.",
            vi:"Các quỹ sao chép có thể được thiết lập một mình. Giá trị tối thiểu không thể thấp hơn số tiền bản sao tối thiểu của bản gốc. Giá trị tối đa không thể vượt quá số tiền bản sao có sẵn của tài khoản của bạn.",
            "zh-Hant":"復制資金可自行設置，最小值不可低於高手的最低復制金額，最大值不可超過您賬戶的可用復制金額。",
            id:"Modal yang dimasukkan tidak boleh lebih kecil daripada yang telah ditentukan oleh Master dan tidak boleh melebihi saldo yang tersedia di akun anda."
        },
        copyRule5:{
            zh:"* 可用复制资金=余额-已复制高手资金",
            en:"* Available copy funds = balance - copied master funds",
            vi:"* Các quỹ sao chép có sẵn = Số dư – sao chép quỹ bậc thầy",
            "zh-Hant":"* 可用復制資金=余額-已復制高手資金",
            id:"Saldo yang tersedia = Saldo - dana yang sudah dipakai untuk mengikuti Master"
        },
        copyRule6:{
            zh:"复制高手开仓",
            en:"Follow master open positions",
            vi:"Sao chép các lệnh đang mở của bậc thầy",
            "zh-Hant":"復制高手開倉",
            id:"Ikuti Posisi Master"
        },
        copyRule7:{
            zh:"1. 复制成功后，高手开仓，账户跟随高手同步开仓。",
            en:"1. Once the user has successfully followed the master, the master will open position and the user's account will begin to copy the master.",
            vi:"1. Sau khi người dùng đã sao chép thành công bậc thầy, bậc thầy sẽ mở các lệnh mở và tài khoản của người dùng sẽ bắt đầu sao chép bậc thầy.",
            "zh-Hant":"1. 復制成功後，高手開倉，賬戶跟隨高手同步開倉。",
            id:"1. Apabila anda telah berhasil mengikuti master, maka setiap posisi yang dibuka oleh Master akan terbuka juga di akun anda."
        },
        copyRule8:{
            zh:"* 用户跟单手数=（高手订单手数*跟单者资金）/高手余额",
            en:"* User open positions = (master's orders lot * follower funds) / master's balance",
            vi:"* Các vị thế mở của người dùng = (số lượng đơn đặt hàng của bậc thầy* số tiền sao chép) / số dư của tổng thể",
            "zh-Hant":"* 用戶跟單手數=（高手訂單手數*跟單者資金）/高手余額",
            id:"Posisi terbuka anda = (lot transaksi Master & saldo anda) / saldo Master"
        },
        copyRule9:{
            zh:"用户开仓可用保证金=跟单者资金-跟随高手的持仓单占用保证金+跟随高手持仓单的浮动的盈亏，",
            en:"User open trading available margin = follower funds - follow margin + follow profit and loss.",
            vi:"Người dùng mở giao dịch ký quỹ có sẵn = quỹ đi sao chép - theo margin + theo lãi và lỗ.",
            "zh-Hant":"用戶開倉可用保證金=跟單者資金-跟隨高手的持倉單占用保證金+跟隨高手持倉單的浮動的盈虧，",
            id:"Margin anda = Saldo anda - margin yang terpakai + Laba/rugi saat ini."
        },
        copyRule10:{
            zh:"当复制资金不足时，将不再跟随高手下单。",
            en:"when the copy of funds is insufficient, will no longer follow the master orders.",
            vi:"khi bản sao của quỹ không đủ, sẽ không còn tuân theo các lệnh chính.",
            "zh-Hant":"當復制資金不足時，將不再跟隨高手下單。",
            id:"ketika saldo untuk copy sudah tidak mencukupi, anda tidak dapat lagi mengikuti posisi Master."
        },
        copyRule11:{
            zh:"2. 高手极短时间内开仓后立即平仓，可能会导致跟单失败。",
            en:"2. If the master closes immediately after opening the position in a very short time, this may cause the order to fail.",
            vi:"2. Nếu tổng thể đóng ngay lập tức sau khi mở vị trí trong một thời gian rất ngắn, điều này có thể khiến cho lệnh thất bại.",
            "zh-Hant":"2. 高手極短時間內開倉後立即平倉，可能會導致跟單失敗。",
            id:"2. Kesalahan dapat terjadi apabila Master membuka dan menutup posisi dalam waktu yang singkat."
        },
        copyRule12:{
            zh:"3. 账户只复制高手开仓订单，高手的挂单交易不会复制，挂单成交会跟随开仓。",
            en:"3. User's account only follows the master's open positions, the master's pending order transaction will not be copied. When the pending order becomes position, the user's account will follow the open position.",
            vi:"3. Tài khoản của người dùng chỉ theo vị thế mở của bậc thầy, giao dịch lệnh chờ của bậc thầy sẽ không được sao chép. Khi lệnh chờ trở thành vị trí, tài khoản của người dùng sẽ theo vị thế mở.",
            "zh-Hant":"3. 賬戶只復制高手開倉訂單，高手的掛單交易不會復制，掛單成交會跟隨開倉。",
            id:"3. Semua transaksi Pending oleh Master tidak akan tercatat ke dalam akun anda, namun apabila transaksi Pending tersebut berubah menjadi posisi aktif, maka akun anda akan secara otomatis mengikuti posisi aktif tersebut."
        },
        copyRule13:{
            zh:"跟随高手平仓",
            en:"Follow the master to close the position",
            vi:"Thực hiện theo các bậc thầy để đóng vị thế",
            "zh-Hant":"跟隨高手平倉",
            id:"Ikuti Master"
        },
        copyRule14:{
            zh:"1. 复制成功后，高手平仓，账户会跟随高手同步平仓，该笔订单盈亏将会记入复制金额内。",
            en:"1. After successfully follow the master, when the master closes the position, the user's account will follow to close the position, and the order profit and loss will be recorded in the copy amount.",
            vi:"1. Sau khi thực hiện thành công bậc thầy, khi bậc thầy đóng vị trí, tài khoản của người dùng sẽ theo sau để đóng vị trí, và số tiền lãi và thua lỗ sẽ được ghi vào số tiền sao chép.",
            "zh-Hant":"1. 復制成功後，高手平倉，賬戶會跟隨高手同步平倉，該筆訂單盈虧將會記入復制金額內。",
            id:"1. Apabila anda telah berhasil mengikuti master, maka setiap posisi yang ditutup oleh Master akan tertutup juga di akun anda. Selanjutnya perhitungan laba atau rugi akan tercatat ke dalam sistem."
        },
        copyRule15:{
            zh:"2. 您可以手动平仓复制高手的订单，不会取消复制关系。",
            en:"2. You can manually close the follow position without canceling the following relationship.",
            vi:"2. Bạn có thể đóng vị trí sao chép theo cách thủ công mà không hủy bỏ mối quan hệ sau.",
            "zh-Hant":"2. 您可以手動平倉復制高手的訂單，不會取消復制關系。",
            id:"2. Anda juga dapat menutup posisi anda secara manual."
        },
        copyRule16:{
            zh:"3. 您可以修改订单状态，跟随高手开仓的订单可在APP中修改为：不跟随高手平仓。状态修改成功后，高手平仓，该笔订单将不会跟随平仓，由您手动平仓或设置止盈/止损平仓。",
            en:"3. You can modify the position status, the follow position can be modified in the APP as: Do not follow to close. After the status is successfully modified, the master closes the position, the order will not be closed, and you can manually close the position or set the take profit/stop loss to close the position.",
            vi:"3. Bạn có thể sửa đổi trạng thái vị trí, vị trí sau có thể được sửa đổi trong APP như sau: Không theo sau để đóng. Sau khi trạng thái được sửa đổi thành công, tổng thể đóng vị trí, thứ tự sẽ không bị đóng và bạn có thể đóng vị trí theo cách thủ công hoặc đặt mất lợi nhuận / dừng lỗ để đóng vị trí.",
            "zh-Hant":"3. 您可以修改訂單狀態，跟隨高手開倉的訂單可在APP中修改為：不跟隨高手平倉。狀態修改成功後，高手平倉，該筆訂單將不會跟隨平倉，由您手動平倉或設置止盈/止損平倉。",
            id:"3. Anda juga dapat mengubah status anda ke : tidak mengikuti penutupan posisi. Jika anda memilih status tersebut, maka setiap posisi yang terbuka oleh Master, harus ditutup oleh anda sendiri secara manual atau dengan cara memasang Stop Loss atau Take Profit."
        },
        copyRule17:{
            zh:"4. 您取消复制关系时，可自主选择强行平仓或者跟随高手平仓正在持仓中订单。",
            en:"4. When you cancel the follow relationship, you can choose to force the position to close or follow the master to close the order in the position.",
            vi:"4. Khi bạn hủy bỏ mối quan hệ tiếp theo, bạn có thể chọn để buộc vị trí đóng hoặc theo bậc thầy để đóng lệnh ở vị trí đó.",
            "zh-Hant":"4. 您取消復制關系時，可自主選擇強行平倉或者跟隨高手平倉正在持倉中訂單。",
            id:"4. Jika anda tidak lagi mengikuti Master, anda tetap dapat menutup posisi secara manual atau tetap menunggu posisi itu ditutup oleh Master."
        },
        copyRule18:{
            zh:"5. 用户复制高手所产生的盈利或亏损，网站不承担任何责任。",
            en:"5. TigerWit does not bear any responsibility for the profit or loss generated by the user following the master.",
            vi:"5. TigerWit không chịu bất kỳ trách nhiệm nào về lợi nhuận hoặc thua lỗ do người dùng tạo ra theo bậc thầy.",
            "zh-Hant":"5. 用戶復制高手所產生的盈利或虧損，網站不承擔任何責任。",
            id:"5. TigerWit tidak bertanggung jawab terhadap segala keuntungan dan kerugian yang ditimbulkan dari hasil transaksi antara anda dengan Master."
        },
        copyRule19:{
            zh:"复制高手盈利分成",
            en:"Following master profit commission",
            vi:"Sao chép lợi nhuận hoa hồng của bậc thầy",
            "zh-Hant":"復制高手盈利分成",
            id:"Komisi Master"
        },
        copyRule20:{
            zh:"1. 每月1日，系统对您跟随高手的情况进行统计并结算，扣除跟随该高手盈利部分的20%作为该高手的分成；每月10日，系统对高手进行分成结算。",
            en:"1. On the 1st of each month, the system counts and settles the user's follow situation, deducting 20% of the profit part as the commission of the master; on the 10th of each month, the system settles the commission for the master.",
            vi:"1. Vào ngày đầu tiên của mỗi tháng, hệ thống sẽ đếm và giải quyết tình huống sao chép của người dùng, trừ 20% phần lợi nhuận là hoa hồng của bậc thầy; vào ngày 10 mỗi tháng, hệ thống sẽ thanh toán hoa hồng cho bậc thầy.",
            "zh-Hant":"1. 每月1日，系統對您跟隨高手的情況進行統計並結算，扣除跟隨該高手盈利部分的20%作為該高手的分成；每月10日，系統對高手進行分成結算。",
            id:"1. Setiap tanggal 1, sistem akan otomatis menghitung dan membagikan komisi kepada Master sebesar 20% yang diambil dari total keuntungan yang anda dapatkan dari mengikuti Master tersebut. Kemudian setiap tanggal 10 sistem akan menyelesaikan seluruh komisi Master."
        },
        copyRule21:{
            zh:"2. 您取消复制关系选择强制平仓时，系统将对跟随该高手的所有订单进行统计并结算，扣除盈利部分的20%作为该高手分成。",
            en:"2. If the user cancels the follow relationship and selects 'Cancel following and force-close your order', the system will count and settle all orders following the master, deducting 20% of the profit portion as the commission of the master.",
            vi:"2. Nếu người dùng hủy bỏ mối quan hệ tiếp theo và chọn 'Huỷ theo sau và buộc đóng lệnh của bạn', hệ thống sẽ tính và thanh toán tất cả các đơn đặt hàng theo chủ, trừ 20% phần lợi nhuận như hoa hồng của bậc thầy.",
            "zh-Hant":"2. 您取消復制關系選擇強制平倉時，系統將對跟隨該高手的所有訂單進行統計並結算，扣除盈利部分的20%作為該高手分成。",
            id:"2. Apabila anda tidak ingin lagi mengikuti Master dan memilih “berhenti mengikuti dan tutup semua posisi terbuka”, sistem akan langsung menghitung dan membagikan komisi kepada Master sebesar 20% yang diambil dari total keuntungan yang anda dapatkan dari hasil mengikuti Master tersebut."
        },
        copyRule22:{
            zh:"3. 您取消复制关系选择跟随高手平仓时，系统将在跟随该高手的所有订单全部平仓后，对跟随该高手所有订单进行统计并结算，扣除总盈利的20%作为该高手分成。",
            en:"3. If the user cancels the following relationship and selects 'Cancel following but do not close order', when all the positions of following the master are closed, the system will count all the orders following the master and settle, deducting 20% of the profit portion as the commission of the master.",
            vi:"3. Nếu người dùng hủy bỏ mối quan hệ sau và chọn 'Hủy sao chép nhưng không đóng thứ tự', khi tất cả các vị trí theo sau tổng thể được đóng, hệ thống sẽ tính tất cả các đơn đặt hàng theo bậc thầy và thanh toán, trừ 20% phần lợi nhuận như ủy ban của bậc thầy.",
            "zh-Hant":"3. 您取消復制關系選擇跟隨高手平倉時，系統將在跟隨該高手的所有訂單全部平倉後，對跟隨該高手所有訂單進行統計並結算，扣除總盈利的20%作為該高手分成。",
            id:"3. Apabila anda tidak ingin lagi mengikuti Master dan memilih “berhenti mengikuti namun jangan tutup posisi terbuka”, sistem akan menunggu hingga seluruh posisi ditutup oleh master dan membagikan komisi kepada Master sebesar 20% yang diambil dari total keuntungan yang anda dapatkan dari mengikuti Master tersebut."
        },
        copyRule23:{
            zh:"4. 只要跟随高手开仓的订单，都会进行分成结算。",
            en:"4. As long as you open the position follow the master, the commission will be settled.",
            vi:"4. Miễn là bạn mở vị trí theo chủ, hoa hồng sẽ được giải quyết.",
            "zh-Hant":"4. 只要跟隨高手開倉的訂單，都會進行分成結算。",
            id:"4. Selama anda memiliki posisi yang dihasilkan dari mengikuti seorang Master, komisi akan dipotong secara otomatis."
        },
        copyRule24:{
            zh:"在决定复制高手时，您确认已经考虑了您的整体财务状况，包括财务承诺，并且您了解使用复制跟单服务具有高度投机性并且您可以承受巨大的损失用于复制高手。请注意，我们无法就任何特定投资，账户，投资组合或策略的表现提供任何保证。",
            en:"When deciding to follow masters, you confirm that you have considered your overall financial situation, including financial commitments, and that you understand that using copy-to-order services is highly speculative and you can afford potential losses for copying masters. Please note that we are unable to provide any guarantees regarding the performance of any particular investment, account, portfolio or strategy.",
            vi:"Khi quyết định sao chép bậc thầy, bạn xác nhận rằng bạn đã xem xét tình hình tài chính tổng thể của mình, bao gồm các cam kết tài chính và bạn hiểu rằng việc sử dụng dịch vụ sao chép theo đơn đặt hàng mang tính đầu cơ cao và bạn có khả năng thua lỗ. Xin lưu ý rằng chúng tôi không thể cung cấp bất kỳ đảm bảo nào về hiệu suất của bất kỳ khoản đầu tư, tài khoản, danh mục đầu tư hoặc chiến lược cụ thể nào.",
            "zh-Hant":"在決定復制高手時，您確認已經考慮了您的整體財務狀況，包括財務承諾，並且您了解使用復制跟單服務具有高度投機性並且您可以承受巨大的損失用於復制高手。請註意，我們無法就任何特定投資，賬戶，投資組合或策略的表現提供任何保證。",
            id:"Ketika anda memutuskan untuk mengikuti Master, artinya anda telah memperhitungkan kondisi dan situasi keuangan anda. Serta mengerti bahwa menggunakan jasa copy-trading memiliki resiko dan berpotensi kehilangan modal. TigerWit tidak menjamin segala hasil investasi, akun, portofolio maupun strategi."
        },
        copyRule25:{
            zh:"如您对规则有任何疑问，可发邮件至",
            en:"If you have any questions about the rules, please contact customer service or send e-mail to ",
            vi:"Nếu bạn có bất kỳ câu hỏi nào về quy tắc, vui lòng liên hệ với bộ phận dịch vụ khách hàng hoặc gửi e-mail đến ",
            "zh-Hant":"如您對規則有任何疑問，可發郵件至",
            id:"Apabila anda memiliki pertanyaan mengenai peraturan-peraturan tersebut, silahkan hubungi layanan pelanggan kami atau kirimkan email anda ke"
        },
        copyRule26:{
            zh:"进行咨询。",
            en:".",
            vi:".",
            "zh-Hant":"進行咨詢。",
            id:"."
        },
        "mt4-1":{
            en:"MT4 Software Download",
            zh:"MT4 交易软件下载",
            vi:"Tải Xuống Phần Mềm MT4",
            "zh-Hant":"MT4 交易軟件下載",
            id:"Unduh platform MT4"
        },
        "mt4-2":{
            en:" ",
            zh:"操作方便，高效易用",
            vi:" ",
            "zh-Hant":"操作方便，高效易用",
            id:" "
        },
        "mt4-3":{
            en:"MT4 trading platform can instantly view of gold, silver, foreign exchange, stock and futures market, and can be simulated trading. Powerful MT4 trading platform, the page is simple, easy to operate, the most important feature is easy to use opening positions, investors can only make a stop set for risk control. MT4 trading platform in addition to providing real-time quotes and trading functions, including 18 kinds of line drawing tool, 9 trading session chart options, 30 kinds of international popular technical indicators and sound warning prompt. Users can be the next single, open, limit orders, stop, only to win, view real-time news, announcements, warning, view the report, as well as data analysis and processing operations.",
            zh:"MT4 交易平台可以即时查看黄金、白银、外汇、股票、期货等行情，同时可以进行模拟交易。MT4 交易平台功能强大，页面简洁，操作方便，最主要的开仓平仓功能简单易用，投资者可以通过设置止赚止损来进行风险控制。MT4 交易平台除了提供实时行情和交易功能外，还包括 18 种画线工具、9 个交易时段图表选项、30 种国际流行技术指标和声音预警提示。用户可进行下单、平仓、限价单、止损、止赢、查看实时新闻、公告、预警、查看报表，以及数据分析和处理等操作。",
            vi:"Nền tảng giao dịch MT4 có thể hiển thị ngay lập tức thị trường vàng, bạc, ngoại hối, chứng khoán và thị trường kỳ hạn, và có thể tăng trưởng giao dịch. Nền tảng giao dịch MT4 mạnh mẽ, trang giao diện rất đơn giản, dễ vận hành, tính năng quan trọng nhất là dễ sử dụng các vị thế mở, nhà đầu tư chỉ có thể thiết lập cài đặt dừng lỗ để kiểm soát rủi ro. Nền tảng giao dịch MT4 ngoài việc cung cấp các báo giá và chức năng giao dịch theo thời gian thực, bao gồm 18 loại công cụ vẽ phân tích, 9 lựa chọn biểu đồ phiên giao dịch, 30 loại chỉ báo kỹ thuật phổ biến quốc tế và dấu nhắc cảnh báo âm thanh nhanh chóng. Người dùng có thể thực hiện mở, giới hạn dừng lỗ lệnh tiếp theo, chỉ để giành chiến thắng, xem tin tức trong thời gian thực, thông báo, cảnh báo, xem báo cáo, cũng như phân tích dữ liệu và xử lý hoạt động.",
            "zh-Hant":"MT4 交易平臺可以即時查看黃金、白銀、外匯、股票、期貨等行情，同時可以進行模擬交易。MT4 交易平臺功能強大，頁面簡潔，操作方便，最主要的開倉平倉功能簡單易用，投資者可以通過設置止賺止損來進行風險控制。MT4 交易平臺除了提供實時行情和交易功能外，還包括 18 種畫線工具、9 個交易時段圖表選項、30 種國際流行技術指標和聲音預警提示。用戶可進行下單、平倉、限價單、止損、止贏、查看實時新聞、公告、預警、查看報表，以及數據分析和處理等操作。",
            id:"Platform MT4 selain menampilkan harga pasar mata uang, emas, perak, saham dan futures juga dapat dipakai untuk virtual trading. Keunggulan dari platform MT4 adalah mudah digunakan, sederhana, mudah membuka posisi, dan investor dapat mengatur resiko. Selain itu juga terdapat banyak fungsi lainnya seperti 18 jenis alat gambar, 9 pilihan grafik, 30 jenis indikator teknikal yang populer di kalangan internasional, serta suara pesan pemberitahuan. Melalui platform MT4, pengguna dapat membuka dan menutup posisi, memasang posisi pending, mengatur stop loss dan take profit, membaca berita, mendapat pemberitahuan, peringatan, laporan, analisis data dan transaksi."
        },
        "mt4-4":{
            en:"MT4 For iPhone",
            zh:"iOS 下载",
            vi:"MT4 cho iPhone",
            "zh-Hant":"iOS 下載",
            id:"MT4 untuk iPhone"
        },
        "mt4-5":{
            en:"MT4 For Android",
            zh:"Android 下载",
            vi:"MT4 cho Android",
            "zh-Hant":"Android 下載",
            id:"MT4 untuk Android"
        },
        "mt4-6":{
            en:"MT4 For PC",
            zh:"PC端下载",
            vi:"MT4 cho PC",
            "zh-Hant":"PC端下載",
            id:"MT4 untuk PC"
        },
        trade_tool:{
            en:"en",
            zh:"zh",
            vi:"vi",
            "zh-Hant":"zh-Hant",
            id:"id"
        },
        sidebar1:{
            en:"Learning Center",
            zh:"学习中心",
            vi:"Trung tâm học tập",
            "zh-Hant":"學習中心",
            id:"Pusat Edukasi"
        },
        sidebar3:{
            en:"FAQ",
            zh:"常见问题",
            vi:"Câu hỏi thường gặp",
            "zh-Hant":"常見問題",
            id:"FAQ"
        },
        sidebar5:{
            en:"Open an account",
            zh:"开立账户",
            vi:"Mở tài khoản",
            "zh-Hant":"開立賬戶",
            id:"Buka Akun"
        },
        sidebar6:{
            en:"Deposit and withdrawal",
            zh:"出入金",
            vi:"Nạp và rút tiền",
            "zh-Hant":"出入金",
            id:"Setor dan Tarik"
        },
        sidebar7:{
            en:"Types of accounts",
            zh:"账户类型",
            vi:"Loại tài khoản",
            "zh-Hant":"賬戶類型",
            id:"Tipe Akun"
        },
        sidebar8:{
            en:"Trading",
            zh:"交易",
            vi:"Giao dịch",
            "zh-Hant":"交易",
            id:"Transaksi"
        },
        sidebar9:{
            en:"Platform",
            zh:"平台",
            vi:"Sân ga",
            "zh-Hant":"平臺",
            id:"Platform"
        },
        sidebar10:{
            en:"Swap Rate",
            zh:"隔夜利息",
            vi:"Phí qua đêm",
            "zh-Hant":"隔夜利息",
            id:"Tingkat Swap"
        },
        sidebar11:{
            en:"Videos",
            zh:"学习视频",
            vi:"Videos",
            "zh-Hant":"學習視頻",
            id:"Video"
        },
        sidebar12:{
            en:"Partner",
            zh:"合作伙伴",
            vi:"Đối tác",
            "zh-Hant":"合作夥伴",
            id:"Mitra"
        },
        sidebar13:{
            en:"Agent",
            zh:"代理合作",
            vi:"Các đại lý",
            "zh-Hant":"代理合作",
            id:"Agen"
        },
        sidebar14:{
            en:"Become Master",
            zh:"成为高手",
            vi:"Trở Thành Master",
            "zh-Hant":"成為高手",
            id:"Menjadi Master"
        },
        video1:{
            en:"Video",
            zh:"学习视频",
            vi:"Video",
            "zh-Hant":"學習視頻",
            id:"Video"
        },
        video2:{
            en:"TigerWit on CCTV",
            zh:"TigerWit首席策略分析师李彭为您解盘。",
            vi:"TigerWit on CCTV",
            "zh-Hant":"TigerWit首席策略分析師李彭為您解盤。",
            id:"TigerWit di CCTV"
        },
        traderIndex1:{
            en:"Follow",
            zh:"复制",
            vi:"Làm Theo",
            "zh-Hant":"復制",
            id:"Ikuti"
        },
        traderIndex2:{
            en:"COPIED",
            zh:"已复制",
            vi:"Sao chép",
            "zh-Hant":"已復制",
            id:"Ikuti"
        },
        traderIndex17:{
            en:"Statistics",
            zh:"数据统计",
            vi:"Số liệu thống kê",
            "zh-Hant":"數據統計",
            id:"Statistik"
        },
        traderIndex18:{
            en:"Open trades",
            zh:"当前交易",
            vi:"Các giao dịch mở",
            "zh-Hant":"當前交易",
            id:"Posisi terbuka"
        },
        traderIndex19:{
            en:"Trade history",
            zh:"历史交易",
            vi:"Lịch sử giao dịch",
            "zh-Hant":"歷史交易",
            id:"Riwayat transaksi"
        },
        amtCommon1:{
            zh:"可供下载的法律文件：",
            en:"Download Legal Documents: ",
            vi:"Tải về tài liệu pháp lý",
            "zh-Hant":"可供下載的法律文件：",
            id:"Download Legal Documents: "
        },
        amtIndex1:{
            zh:"条件和条款",
            en:"Conditions and Clauses",
            vi:"Điều kiện và điều khoản",
            "zh-Hant":"條件和條款",
            id:"Syarat dan Ketentuan"
        },
        amtIndex2:{
            zh:"版本生效日期：",
            en:"Valid from: ",
            vi:"Có giá trị từ: ",
            "zh-Hant":"版本生效日期：",
            id:"Berlaku sejak: "
        },
        amtIndex3:{
            zh:"2017年10月30日",
            en:"Oct. 30th, 2017",
            vi:"Ngày 30 tháng 10 năm 2017",
            "zh-Hant":"2017年10月30日",
            id:"30 Oktober 2017"
        },
        amtIndex4:{
            zh:"法律声明",
            en:"Legal Notices",
            vi:"Thông báo pháp lý",
            "zh-Hant":"法律聲明",
            id:"Pemberitahuan Hukum"
        },
        amtIndex5:{
            zh:"阅读有关使用本网站应遵守的条款和条件、声明及通知。",
            en:"Read the terms, conditions and notices regarding the use of this website.",
            vi:"Đọc các điều khoản, điều kiện và thông báo liên quan đến việc sử dụng trang web này.",
            "zh-Hant":"閱讀有關使用本網站應遵守的條款和條件、聲明及通知。",
            id:"Silahkan baca syarat dan ketentuan penggunaan website ini"
        },
        amtIndex6:{
            zh:"客户协议",
            en:"Client Agreement",
            vi:"Thỏa thuận khách hàng",
            "zh-Hant":"客戶協議",
            id:"Perjanjian Klien"
        },
        amtIndex7:{
            zh:"客户协议将约束TigerWit与您之间的关系。",
            en:"The Client Agreement will constrain the relationship between TigerWit and you.",
            vi:"Thỏa thuận khách hàng sẽ hạn chế mối quan hệ giữa TigerWit và bạn.",
            "zh-Hant":"客戶協議將約束TigerWit與您之間的關系。",
            id:"Perjanjian Klien akan menjembatani hubungan antara TigerWit dengan anda."
        },
        amtIndex8:{
            zh:"风险披露声明",
            en:"Risk Disclosure Notice",
            vi:"Thông báo tiết lộ rủi ro",
            "zh-Hant":"風險披露聲明",
            id:"Peringatan Resiko"
        },
        amtIndex9:{
            zh:"在您使用TigerWit服务之前，您必须根据您的情况和财务情况，慎重考虑您是否适合进行CFD交易。",
            en:"Before you use the TigerWit’s service, you must consider carefully whether you are suitable for CFD trading based on your circumstances and financial situation.",
            vi:"Trước khi bạn sử dụng dịch vụ của TigerWit, bạn phải cân nhắc kỹ liệu bạn có phù hợp với giao dịch CFD dựa trên hoàn cảnh và tình hình tài chính của bạn hay không.",
            "zh-Hant":"在您使用TigerWit服務之前，您必須根據您的情況和財務情況，慎重考慮您是否適合進行CFD交易。",
            id:"Sebelum anda menggunakan layanan TigerWit, anda harus mempertimbangkan apakah anda memenuhi syarat untuk bertransaksi di CFD berdasarkan kondisi dan situasi keuangan anda."
        },
        amtIndex10:{
            zh:"隐私政策和Cookie披露声明",
            en:"Privacy Policy and Cookie Disclosure",
            vi:"Chính sách bảo mật và tiết lộ cookie",
            "zh-Hant":"隱私政策和Cookie披露聲明",
            id:"Kebijakan Privasi dan Penggunaan Cookie"
        },
        amtIndex11:{
            zh:"本文档详述有关TigerWit管理个人资料的政策。",
            en:"This document describes the management of TigerWit Personal Data Policy in detail.",
            vi:"Tài liệu này mô tả chi tiết việc quản lý Chính sách dữ liệu cá nhân của TigerWit.",
            "zh-Hant":"本文檔詳述有關TigerWit管理個人資料的政策。",
            id:"Dokumen ini memaparkan secara rinci mengenai kebijakan pengelolaan data pribadi oleh TigerWit."
        },
        amtIndex12:{
            zh:"商业条件及条款",
            en:"Terms and Conditions of Business",
            vi:"Điều khoản và Điều kiện kinh doanh",
            "zh-Hant":"商業條件及條款",
            id:"Syarat dan Ketentuan Bisnis"
        },
        amtIndex13:{
            zh:"本文档详述TigerWit的金融服务指南，旨在帮助您决定是否使用我们提供的服务。",
            en:"This document describes TigerWit Limited Services Guide in detail, designed to help you decide whether to use the services we provide or not.",
            vi:"Tài liệu này mô tả chi tiết Hướng dẫn Dịch vụ Giới hạn TigerWit, được thiết kế để giúp bạn quyết định có sử dụng các dịch vụ chúng tôi cung cấp hay không.",
            "zh-Hant":"本文檔詳述TigerWit的金融服務指南，旨在幫助您決定是否使用我們提供的服務。",
            id:"Dokumen ini memaparkan secara rinci mengenai panduan layanan TigerWit Limited yang dirancang untuk membantu anda memutuskan apakah akan menggunakan layanan kami atau tidak."
        },
        amtIndex14:{
            zh:"负责任交易声明",
            en:"Trade Responsibly Notice",
            vi:"Thông báo trách nhiệm",
            "zh-Hant":"負責任交易聲明",
            id:"Peringatan Transaksi"
        },
        amtIndex15:{
            zh:"本文档旨在提醒您了解市场和知晓相关风险以及有效地利用杠杆优势。",
            en:"This document is designed to remind you of knowing the market, knowing the relative and using leverage advantage effectively.",
            vi:"Tài liệu này được thiết kế để nhắc nhở bạn về việc biết thị trường, biết mối quan hệ và sử dụng lợi thế đòn bẩy một cách hiệu quả.",
            "zh-Hant":"本文檔旨在提醒您了解市場和知曉相關風險以及有效地利用杠桿優勢。",
            id:"Dokumen ini dibuat untuk mengingatkan anda untuk memahami tentang pasar, dan pemanfaatan daya ungkit secara efektif."
        },
        amtIndex16:{
            zh:"交易条件声明",
            en:"Trading Conditions Notice",
            vi:"Điều kiện giao dịch",
            "zh-Hant":"交易條件聲明",
            id:"Peringatan Ketentuan Trading"
        },
        amtIndex17:{
            zh:"本文档详述不同的投资策略涉及不同程度的风险，旨在帮助您决定是否使用我们提供的服务。",
            en:"This document describes different investment strategies that involve varying degrees of risk in detail, designed to help you decide whether to use the services we provide or not.",
            vi:"Tài liệu này mô tả các chiến lược đầu tư khác nhau liên quan đến mức độ rủi ro khác nhau một cách chi tiết, được thiết kế để giúp bạn quyết định có nên sử dụng các dịch vụ mà chúng tôi cung cấp hay không.",
            "zh-Hant":"本文檔詳述不同的投資策略涉及不同程度的風險，旨在幫助您決定是否使用我們提供的服務。",
            id:"Dokumen ini memaparkan secara rinci mengenai berbagai jenis strategi investasi serta resiko yang dimilikinya, agar membantu anda memutuskan apakah akan menggunakannya atau tidak."
        },
        amtIndex18:{
            zh:"客户声明",
            en:"Declaration by Client",
            vi:"Tuyên bố của khách hàng",
            "zh-Hant":"客戶聲明",
            id:"Penyataan Klien"
        },
        amtIndex19:{
            zh:"阅读并了解TigerWit交易平台风险提示及免责条款。",
            en:"Read and understand the TigerWit Trading Risk Reminder and Exemption Clauses.",
            vi:"Đọc và hiểu các Nhắc nhở Rủi ro Giao dịch TigerWit và các Điều khoản Miễn.",
            "zh-Hant":"閱讀並了解TigerWit交易平臺風險提示及免責條款。",
            id:"Baca dan pahami Peringatan Resiko Trading dan Klausul Pengecualian TigerWit."
        },
        amtIndex20:{
            zh:"客户分类通知",
            en:"Client Categorization Notice",
            vi:"Thông báo Phân loại Khách hàng",
            "zh-Hant":"客戶分類通知",
            id:"Pemberitahuan Klasifikasi Klien"
        },
        amtIndex21:{
            zh:"查阅我们对客户的定义以及分类标准。",
            en:"Check the Definition of Client and Client Categorization Criteria.",
            vi:"Kiểm tra các tiêu chí phân loại khách hàng và định nghĩa.",
            "zh-Hant":"查閱我們對客戶的定義以及分類標準。",
            id:"Baca Definisi Klien dan Kriteria Klasifikasi Klien."
        },
        amtIndex22:{
            zh:"保护客户资金",
            en:"Protecting Client Funds",
            vi:"Bảo vệ quỹ khách hàng",
            "zh-Hant":"保護客戶資金",
            id:"Perlindungan Dana Klien"
        },
        amtIndex23:{
            zh:"本文档详述有关TigerWit保护您的资金所采取的措施。",
            en:"This document describes the measures taken by TigerWit to protect your funds in detail.",
            vi:"Tài liệu này mô tả các biện pháp được thực hiện bởi TigerWit để bảo vệ chi tiết tiền của bạn.",
            "zh-Hant":"本文檔詳述有關TigerWit保護您的資金所采取的措施。",
            id:"Dokumen ini memaparkan secara rinci mengenai bagaimana cara TigerWit melindungi dana anda."
        },
        amtIndex24:{
            zh:"订单执行政策",
            en:"Order Execution Policy",
            vi:"Chính sách thực thi lệnh",
            "zh-Hant":"訂單執行政策",
            id:"Kebijakan Eksekusi Order"
        },
        amtIndex25:{
            zh:"阅读并了解我们提供的与金融工具有关的执行政策的条款。此文档构成客户协议的一部分。 ",
            en:"Read and understand the terms which are about the Execution Policy of our financial instruments. This document is a part of the Client Agreement.",
            vi:"Đọc và hiểu các điều khoản về Chính sách thực thi của các công cụ tài chính của chúng tôi. Tài liệu này là một phần của Thỏa thuận khách hàng.",
            "zh-Hant":"閱讀並了解我們提供的與金融工具有關的執行政策的條款。此文檔構成客戶協議的壹部分。 ",
            id:"Baca dan pahami persyaratan dan kebijakan eksekusi instrumen keuangan kami. Dokumen ini merupakan bagian dari Perjanjian Klien."
        },
        amtIndex26:{
            zh:"利益冲突政策",
            en:"Conflicts of Interest Policy",
            vi:"Xung đột lợi ích chính sách",
            "zh-Hant":"利益沖突政策",
            id:"Kebijakan Konflik Kepentingan"
        },
        amtIndex27:{
            zh:"本文档详述当发现利益冲突时我们将采取的有效预防措施。",
            en:"This document describes the effective precautions we will take when Conflicts of Interest are found in detail.",
            vi:"Tài liệu này mô tả các biện pháp phòng ngừa hiệu quả mà chúng tôi sẽ thực hiện khi có Xung đột lợi ích được tìm thấy chi tiết.",
            "zh-Hant":"本文檔詳述當發現利益沖突時我們將采取的有效預防措施。",
            id:"Dokumen ini memaparkan secara rinci mengenai tindakan pencegahan yang akan diambil ketika terjadi Konflik Kepentingan."
        },
        amtIndex28:{
            zh:"投诉处理流程",
            en:"Complaint Handling Procedure",
            vi:"Thủ tục xử lý khiếu nại",
            "zh-Hant":"投訴處理流程",
            id:"Prosedur Penanganan Keluhan"
        },
        amtIndex29:{
            zh:"了解投诉处理的程序。",
            en:"Understand the Complaint Handling Procedure.",
            vi:"Hiểu thủ tục xử lý khiếu nại.",
            "zh-Hant":"了解投訴處理的程序。",
            id:"Memahami Prosedur Penanganan Keluhan."
        },
        amtIndex30:{
            zh:"复制交易说明",
            en:"Trade Copying Declaration",
            vi:"Tuyên bố sao chép thương mại",
            "zh-Hant":"復制交易說明",
            id:"Pernyataan Copy Trading"
        },
        amtIndex31:{
            zh:"阅读并了解TigerWit交易平台的跟单交易声明。",
            en:"Read and understand the TigerWit Trading Trade Copying Declaration.",
            vi:"Đọc và hiểu Tuyên bố sao chép thương mại TigerWit.",
            "zh-Hant":"閱讀並了解TigerWit交易平臺的跟單交易聲明。",
            id:"Baca dan pahami Pernyataan Copy Trading TigerWit."
        },
        amtLegal1:{
            zh:"声明",
            en:"Notice",
            vi:"Lưu Ý",
            "zh-Hant":"聲明",
            id:"Notice"
        },
        amtLegal2:{
            zh:"您访问本网站，即表示您同意和理解本网站所附的条款和条件和网站上的所有资料。对于TigerWit Limited的客户，本公司保留在不通知您的情况下随时修改这些条款和条件的权利。所以您有责任定期检查这些条款和条件。如果您在修改之后继续使用本网站，即构成您接受修改。",
            en:"By accessing this website, you signify your agreement with and understanding of the following Terms and Conditions pertaining to both this site and any material at it. For clients of TigerWit Limited, the Company reserves the right to change these Terms and Conditions at any time without notice to you. You are therefore responsible for regularly reviewing these Terms and Conditions. Continued use of this site following any such changes shall constitute your acceptance of such changes.",
            vi:"Bằng cách truy cập trang web này, bạn thể hiện sự đồng ý của bạn và sự hiểu biết về các Điều khoản và Điều kiện sau đây liên quan đến cả trang web này và bất kỳ tài liệu nào tại đây. Đối với khách hàng của TigerWit Limited, Công ty có quyền thay đổi các Điều khoản và Điều kiện này bất kỳ lúc nào mà không cần thông báo cho bạn. Do đó, bạn chịu trách nhiệm thường xuyên xem xét các Điều khoản và Điều kiện này. Việc tiếp tục sử dụng trang web này sau bất kỳ thay đổi nào như vậy sẽ là sự thể hiện bạn chấp nhận những thay đổi đó.",
            "zh-Hant":"您訪問本網站，即表示您同意和理解本網站所附的條款和條件和網站上的所有資料。對於TigerWit Limited的客戶，本公司保留在不通知您的情況下隨時修改這些條款和條件的權利。所以您有責任定期檢查這些條款和條件。如果您在修改之後繼續使用本網站，即構成您接受修改。",
            id:"By accessing this website, you signify your agreement with and understanding of the following Terms and Conditions pertaining to both this site and any material at it. For clients of TigerWit Limited, the Company reserves the right to change these Terms and Conditions at any time without notice to you. You are therefore responsible for regularly reviewing these Terms and Conditions. Continued use of this site following any such changes shall constitute your acceptance of such changes."
        },
        amtLegal3:{
            zh:"网站的归属",
            en:"Ownership of Site",
            vi:"Quyền sở hữu trang web",
            "zh-Hant":"網站的歸屬",
            id:"Ownership of Site"
        },
        amtLegal4:{
            zh:"本公司拥有并维护本网站。下载或以其他方式从本网站复制并不会将本网站上的任何软件和资料的所有权转移给您。您向本网站传输的全部内容将由本公司所有，可被本公司用于一切合法目的，并可在本公司认为正当的情况下进行披露，包括向监管本公司的所有法律或监管部门披露。本公司保留与本网站上全部材料的版权和商标相关所有权利，并将在法律允许的完全范围内履行这一权利。",
            en:"The Company owns and maintains this site. No act of downloading or otherwise copying from this site will transfer title to any software or material at this site to you. Anything that you transmit to this site becomes the property of the Company, may be used by the Company for any lawful purpose, and is further subject to disclosure as deemed appropriate by the Company, including to any legal or regulatory authority to which the Company is subject. The Company reserves all rights with respect to copyright and trademark ownership of all material at this site, and will enforce such rights to the full extent of the law.",
            vi:"Công ty sở hữu và duy trì trang web này. Việc tải xuống hoặc sao chép từ trang web này sẽ không chuyển tiêu đề tới bất kỳ phần mềm hoặc tài liệu nào trên trang web này cho bạn. Bất kỳ thứ gì bạn chuyển đến trang web này sẽ trở thành tài sản của Công ty, có thể được Công ty sử dụng cho bất kỳ mục đích hợp pháp nào và tiếp tục được tiết lộ khi Công ty cho là thích hợp, bao gồm bất kỳ cơ quan pháp lý hoặc quy định nào mà Công ty phụ thuộc vào. Công ty bảo lưu tất cả các quyền liên quan đến quyền sở hữu bản quyền và nhãn hiệu của tất cả tài liệu tại trang web này và sẽ thực thi các quyền đó trong phạm vi đầy đủ của pháp luật.",
            "zh-Hant":"本公司擁有並維護本網站。下載或以其他方式從本網站復制並不會將本網站上的任何軟件和資料的所有權轉移給您。您向本網站傳輸的全部內容將由本公司所有，可被本公司用於壹切合法目的，並可在本公司認為正當的情況下進行披露，包括向監管本公司的所有法律或監管部門披露。本公司保留與本網站上全部材料的版權和商標相關所有權利，並將在法律允許的完全範圍內履行這壹權利。",
            id:"The Company owns and maintains this site. No act of downloading or otherwise copying from this site will transfer title to any software or material at this site to you. Anything that you transmit to this site becomes the property of the Company, may be used by the Company for any lawful purpose, and is further subject to disclosure as deemed appropriate by the Company, including to any legal or regulatory authority to which the Company is subject. The Company reserves all rights with respect to copyright and trademark ownership of all material at this site, and will enforce such rights to the full extent of the law."
        },
        amtLegal5:{
            zh:"访问",
            en:"Access",
            vi:"Truy cập",
            "zh-Hant":"訪問",
            id:"Access"
        },
        amtLegal6:{
            zh:"本网站及其所包含的信息、工具和资料，倘若其分派、发布、提供或使用将违反本公司或其关联方在相关司法管辖区注册或许可要求的法律或法规，则相关信息、工具和资料不会直接向身为该司法管辖区公民或居民或居住者的任何人士或实体分派或计划分派或供其使用。",
            en:"This site and the information, tools and material contained in it are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject the Company or its affiliates to any registration or licensing requirement within such jurisdiction.",
            vi:"Trang web này và thông tin, công cụ và tài liệu chứa trong đó không được chuyển đến hoặc được phân phối hoặc sử dụng bởi bất kỳ cá nhân hoặc tổ chức nào là công dân hoặc cư dân hoặc ở bất kỳ khu vực pháp lý nào, nơi phân phối, xuất bản, cung cấp hoặc việc sử dụng sẽ trái với luật hoặc quy định hoặc sẽ ràng buộc Công ty hoặc các đối tác liên kết của Công ty với bất kỳ yêu cầu đăng ký hoặc cấp phép nào trong phạm vi quyền hạn đó.",
            "zh-Hant":"本網站及其所包含的信息、工具和資料，倘若其分派、發布、提供或使用將違反本公司或其關聯方在相關司法管轄區註冊或許可要求的法律或法規，則相關信息、工具和資料不會直接向身為該司法管轄區公民或居民或居住者的任何人士或實體分派或計劃分派或供其使用。",
            id:"This site and the information, tools and material contained in it are not directed to, or intended for distribution to or use by, any person or entity who is a citizen or resident of or located in any jurisdiction where such distribution, publication, availability or use would be contrary to law or regulation or which would subject the Company or its affiliates to any registration or licensing requirement within such jurisdiction."
        },
        amtLegal7:{
            zh:"担保免责声明和责任限制",
            en:"Disclaimer of Warranty and Limitation of Liability",
            vi:"Sự Chối Bỏ Trách Nhiệm Bảo Đảm Và Giới Hạn Trách Nhiệm Pháp Lý",
            "zh-Hant":"擔保免責聲明和責任限制",
            id:"Disclaimer of Warranty and Limitation of Liability"
        },
        amtLegal8:{
            zh:"本网站上的信息“依原样”提供。本公司不就任何目的对此处所提供材料的准确性作出（明示或暗示）保证，并明确不就任何特定目的而对材料的适销性和适合性作出保证。本公司对所有由第三方对任何您通过本网站获取信息的截取可能导致的损失或损害概不承担责任。尽管本网站对您提供的信息是从我们认为可靠的来源获取或编辑的，本公司不就任何特定目的保证您获取的任何信息或数据的准确性、有效性、时间性或完整性。本公司及其任何关联方的董事、管理人员和员工，或任何第三方供应商，不对由于本网站故障或中断，或由参与制作本网站的任何其他方的作为或不作为，或您获得的资料中包含的任何数据，或由于任何与您访问、不能访问，或使用本网站或这些资料等其他原因导致您产生的任何损失或损害而承担责任，无论引起这种原因的情况是否受本公司或任何提供软件服务支持供应商的控制。本公司在任何情况下对任何使用或不能使用本网站或网站的任何部分引起的附带的、偶发的、特殊的、惩罚或损害性赔偿不予担责，无论本公司是否已获悉此类损害发生的可能性，也无论采用何种行动形式，是否属于合同内、侵权（包括过失）、严格责任或其他。本网站所含信息仅以参考为目的。所以，对于不获授权发出此类要约或招揽，或相关要约或招揽可能属于非法的该司法管辖区，相关信息不应视作对相关司法管辖区任何人士的邀约或招揽，也不应被作为对任何特定投资的推荐买入、卖出或其他处理。我们强烈建议您在处理任何投资前获得独立的投资、金融、法律和税务建议。本网站上的任何内容均不得阅读或解释为构成本公司、或其任何关联方、董事、管理人员或员工所作的投资建议。对金融工具的投资性质是，不是所有金融工具都适合所有人，除非他们：",
            en:"The information on this site is provided \"As it is\". The Company does not warrant the accuracy of the materials provided herein, either expressly or impliedly, for any particular purpose and expressly disclaims any warranties of merchantability or fitness for a particular purpose. The Company will not be responsible for any loss or damage that could result from interception by third parties of any information made available to you via this site. Although the information provided to you on this site is obtained or compiled from sources we believe to be reliable, the Company cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose. Neither the Company, nor any of its affiliates, directors, officers or employees, nor any third party vendor will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of this site, or resulting from the act or omission of any other party involved in making this site or the data contained therein available to you, or from any other cause relating to your access to, inability to access, or use of the site or these materials, whether or not the circumstances giving rise to such cause may have been within the control of the Company or of any vendor providing software or services support. Under no circumstances will the Company be liable for any consequential, incidental, special, punitive or exemplary damages arising out of any use of or inability to use this site or any portion thereof, regardless of whether the Company has been apprised of the likelihood of such damages occurring and regardless of the form of action, whether in Contract, Tort (including negligence), Strict Liability, or otherwise. The information contained in this site is intended for information purposes only. Therefore, it should not be regarded as an offer or solicitation to any person in any jurisdiction in which such an offer or solicitation is not authorised or to any person to whom it would be unlawful to make such an offer or solicitation, nor regarded as recommendation to buy, sell or otherwise deal with any particular investment. You are strongly advised to obtain independent investment, financial, legal and tax advice before proceeding with any investment. Nothing in this site should be read or construed as constituting investment advice on the part of the Company, or any of its affiliates, directors, officers or employees. The nature of investment in Financial Instruments is such that not all Financial instruments are suitable for everyone unless they: ",
            vi:"Thông tin trên trang này được cung cấp \"Vì nó là\". Công ty không đảm bảo tính chính xác của các tài liệu được cung cấp ở đây, hoặc rõ ràng hoặc ngụ ý, cho bất kỳ mục đích cụ thể nào và từ chối rõ ràng bất kỳ sự bảo đảm nào về khả năng bán hàng hoặc sự thích hợp đối với một mục đích cụ thể. Công ty sẽ không chịu trách nhiệm cho bất kỳ tổn thất hoặc thiệt hại nào có thể phát sinh từ việc các bên thứ ba của bất kỳ thông tin nào được cung cấp cho bạn thông qua trang web này. Mặc dù thông tin được cung cấp cho bạn trên trang web này được thu thập hoặc biên soạn từ các nguồn mà chúng tôi cho là đáng tin cậy, Công ty không thể và không đảm bảo tính chính xác, hợp lệ, kịp thời hoặc đầy đủ của bất kỳ thông tin hoặc dữ liệu nào có sẵn cho bạn cho bất kỳ mục đích cụ thể nào. Không phải Công ty, cũng như bất kỳ chi nhánh, giám đốc, nhân viên hoặc nhân viên nào, cũng không phải bất kỳ nhà cung cấp bên thứ ba nào sẽ chịu trách nhiệm hoặc bất kỳ trách nhiệm nào về bất kỳ tổn thất hoặc thiệt hại nào bạn gặp phải trong trường hợp có sự cố hoặc gián đoạn trang web này hoặc do hành động hoặc thiếu sót của bất kỳ bên nào khác liên quan đến việc tạo trang web này hoặc dữ liệu chứa trong đó hoặc bất kỳ nguyên nhân nào khác liên quan đến quyền truy cập của bạn, không có khả năng truy cập hoặc sử dụng trang web hoặc các tài liệu này, có hay không hoàn cảnh gây ra nguyên nhân như vậy có thể nằm trong sự kiểm soát của Công ty hoặc của bất kỳ nhà cung cấp nào cung cấp hỗ trợ phần mềm hoặc dịch vụ. Trong mọi trường hợp, Công ty sẽ không chịu trách nhiệm về bất kỳ thiệt hại mang tính nhân quả logic, ngẫu nhiên, đặc biệt, khắc nghiệt hoặc làm mẫu phát sinh từ việc sử dụng hoặc không có khả năng sử dụng trang web này hoặc bất kỳ phần nào của trang web đó, bất kể Công ty đã được thông báo về khả năng như vậy thiệt hại xảy ra và bất kể hình thức hành động, cho dù trong hợp đồng, sai lầm của cá nhân (bao gồm sơ suất), trách nhiệm pháp lý nghiêm ngặt, hoặc các trường hợp khác. Thông tin trong trang này chỉ dành cho mục đích thông tin. Do đó, nó không nên được coi là lời đề nghị hoặc chào mời với bất kỳ người nào trong bất định chế nào trong đó đề nghị hoặc chào mời này không được ủy quyền hoặc cho bất kỳ người nào mà các lời đề nghị này là không hợp pháp khi đưa ra lời đề nghị hoặc chào mời đó để mua, bán hoặc nói cách khác quản lý bất kỳ khoản đầu tư cụ thể nào. Bạn nên có tư vấn đầu tư độc lập, tư vấn tài chính, pháp lý và thuế trước khi tiến hành khoản đầu tư bất kỳ. Không có nội dung nào trong trang web này được đọc hoặc hiểu là tư vấn đầu tư cấu thành một phần của Công ty hoặc bất kỳ chi nhánh, giám đốc, cán bộ hoặc nhân viên nào của Công ty. Bản chất của đầu tư vào Công cụ tài chính là không phải tất cả các công cụ tài chính đều phù hợp với mọi người trừ khi chúng: ",
            "zh-Hant":"本網站上的信息“依原樣”提供。本公司不就任何目的對此處所提供材料的準確性作出（明示或暗示）保證，並明確不就任何特定目的而對材料的適銷性和適合性作出保證。本公司對所有由第三方對任何您通過本網站獲取信息的截取可能導致的損失或損害概不承擔責任。盡管本網站對您提供的信息是從我們認為可靠的來源獲取或編輯的，本公司不就任何特定目的保證您獲取的任何信息或數據的準確性、有效性、時間性或完整性。本公司及其任何關聯方的董事、管理人員和員工，或任何第三方供應商，不對由於本網站故障或中斷，或由參與制作本網站的任何其他方的作為或不作為，或您獲得的資料中包含的任何數據，或由於任何與您訪問、不能訪問，或使用本網站或這些資料等其他原因導致您產生的任何損失或損害而承擔責任，無論引起這種原因的情況是否受本公司或任何提供軟件服務支持供應商的控制。本公司在任何情況下對任何使用或不能使用本網站或網站的任何部分引起的附帶的、偶發的、特殊的、懲罰或損害性賠償不予擔責，無論本公司是否已獲悉此類損害發生的可能性，也無論采用何種行動形式，是否屬於合同內、侵權（包括過失）、嚴格責任或其他。本網站所含信息僅以參考為目的。所以，對於不獲授權發出此類要約或招攬，或相關要約或招攬可能屬於非法的該司法管轄區，相關信息不應視作對相關司法管轄區任何人士的邀約或招攬，也不應被作為對任何特定投資的推薦買入、賣出或其他處理。我們強烈建議您在處理任何投資前獲得獨立的投資、金融、法律和稅務建議。本網站上的任何內容均不得閱讀或解釋為構成本公司、或其任何關聯方、董事、管理人員或員工所作的投資建議。對金融工具的投資性質是，不是所有金融工具都適合所有人，除非他們：",
            id:"The information on this site is provided \"As it is\". The Company does not warrant the accuracy of the materials provided herein, either expressly or impliedly, for any particular purpose and expressly disclaims any warranties of merchantability or fitness for a particular purpose. The Company will not be responsible for any loss or damage that could result from interception by third parties of any information made available to you via this site. Although the information provided to you on this site is obtained or compiled from sources we believe to be reliable, the Company cannot and does not guarantee the accuracy, validity, timeliness or completeness of any information or data made available to you for any particular purpose. Neither the Company, nor any of its affiliates, directors, officers or employees, nor any third party vendor will be liable or have any responsibility of any kind for any loss or damage that you incur in the event of any failure or interruption of this site, or resulting from the act or omission of any other party involved in making this site or the data contained therein available to you, or from any other cause relating to your access to, inability to access, or use of the site or these materials, whether or not the circumstances giving rise to such cause may have been within the control of the Company or of any vendor providing software or services support. Under no circumstances will the Company be liable for any consequential, incidental, special, punitive or exemplary damages arising out of any use of or inability to use this site or any portion thereof, regardless of whether the Company has been apprised of the likelihood of such damages occurring and regardless of the form of action, whether in Contract, Tort (including negligence), Strict Liability, or otherwise. The information contained in this site is intended for information purposes only. Therefore, it should not be regarded as an offer or solicitation to any person in any jurisdiction in which such an offer or solicitation is not authorised or to any person to whom it would be unlawful to make such an offer or solicitation, nor regarded as recommendation to buy, sell or otherwise deal with any particular investment. You are strongly advised to obtain independent investment, financial, legal and tax advice before proceeding with any investment. Nothing in this site should be read or construed as constituting investment advice on the part of the Company, or any of its affiliates, directors, officers or employees. The nature of investment in Financial Instruments is such that not all Financial instruments are suitable for everyone unless they: "
        },
        amtLegal9:{
            zh:"- 对投资事务有着深刻的了解。",
            en:"- are knowledgeable in investment matters. ",
            vi:"- am hiểu về các vấn đề đầu tư.",
            "zh-Hant":"- 對投資事務有著深刻的了解。",
            id:"- are knowledgeable in investment matters. "
        },
        amtLegal10:{
            zh:"- 能够承担投资的经济风险。",
            en:"- are able to bear the economic risk of the investment. ",
            vi:"- có thể chịu rủi ro kinh tế của khoản đầu tư.",
            "zh-Hant":"- 能夠承擔投資的經濟風險。",
            id:"- are able to bear the economic risk of the investment. "
        },
        amtLegal11:{
            zh:"- 了解有关的风险。",
            en:"- understand the risk involved.",
            vi:"- hiểu rủi ro liên quan.",
            "zh-Hant":"- 了解有關的風險。",
            id:"- understand the risk involved."
        },
        amtLegal12:{
            zh:"- 认为投资适合他们特定的投资目标和财务需要。",
            en:"- believe that the investment is suitable for their particular investment objective and financial needs.",
            vi:"- tin rằng đầu tư phù hợp với mục tiêu đầu tư cụ thể và nhu cầu tài chính của họ.",
            "zh-Hant":"- 認為投資適合他們特定的投資目標和財務需要。",
            id:"- believe that the investment is suitable for their particular investment objective and financial needs."
        },
        amtLegal13:{
            zh:"- 对投资的流动性没有需要",
            en:"- have no need for liquidity of investment. ",
            vi:"không cần thanh khoản đầu tư.",
            "zh-Hant":"- 對投資的流動性沒有需要",
            id:"- have no need for liquidity of investment. "
        },
        amtLegal14:{
            zh:"如果任何非专业投资者投资于金融工具，建议投资者只应当投入打算长期投资的数额的一部分。此外建议所有的投资者在投资于金融工具前应当寻求专业投资顾问的建议。",
            en:"Should any non-professional investor invests in Financial Instruments, it is advisable that only a part of the sums that the investor intents to invest for long-term should be so invested. It is also advisable that all investors should seek advice from a professional investment advisor before making any investment in Financial Instruments.",
            vi:"Nếu bất kỳ nhà đầu tư không chuyên nghiệp nào đầu tư vào Công cụ tài chính, thì chỉ một phần số tiền mà nhà đầu tư dự định đầu tư cho dài hạn nên được đầu tư. Tất cả các nhà đầu tư cũng được khuyến nghị nên tìm lời khuyên từ một cố vấn đầu tư chuyên nghiệp trước khi thực hiện bất kỳ khoản đầu tư nào vào Công cụ tài chính",
            "zh-Hant":"如果任何非專業投資者投資於金融工具，建議投資者只應當投入打算長期投資的數額的壹部分。此外建議所有的投資者在投資於金融工具前應當尋求專業投資顧問的建議。",
            id:"Should any non-professional investor invests in Financial Instruments, it is advisable that only a part of the sums that the investor intents to invest for long-term should be so invested. It is also advisable that all investors should seek advice from a professional investment advisor before making any investment in Financial Instruments."
        },
        amtLegal15:{
            zh:"链接网站",
            en:"Linked Sites",
            vi:"Các Trang liên kết",
            "zh-Hant":"鏈接網站",
            id:"Linked Sites"
        },
        amtLegal16:{
            zh:"本网站还包含由第三方管理和提供的网站链接。本公司并未审查本网站所链接网站发布的所有信息和材料，并就此免除责任。通过创建第三方的网站链接，并不代表本公司同意或推荐该网站提供的任何产品或服务。",
            en:"The site also contains links to Web sites controlled or offered by third parties. The Company has not reviewed, and hereby disclaims responsibility for, any information or materials posted at any of the sites linked to this site. By creating a link to a third-party Web site, the Company does not endorse or recommend any products or services offered on that Web site.",
            vi:"Trang web cũng chứa các liên kết đến các trang Web được kiểm soát hoặc cung cấp bởi các bên thứ ba. Công ty chưa xem xét và từ chối trách nhiệm đối với bất kỳ thông tin hoặc tài liệu nào được đăng tại bất kỳ trang web nào được liên kết với trang web này. Bằng cách tạo liên kết đến trang web của bên thứ ba, Công ty không xác nhận hoặc đề xuất bất kỳ sản phẩm hoặc dịch vụ nào được cung cấp trên trang Web đó.",
            "zh-Hant":"本網站還包含由第三方管理和提供的網站鏈接。本公司並未審查本網站所鏈接網站發布的所有信息和材料，並就此免除責任。通過創建第三方的網站鏈接，並不代表本公司同意或推薦該網站提供的任何產品或服務。",
            id:"The site also contains links to Web sites controlled or offered by third parties. The Company has not reviewed, and hereby disclaims responsibility for, any information or materials posted at any of the sites linked to this site. By creating a link to a third-party Web site, the Company does not endorse or recommend any products or services offered on that Web site."
        },
        amtLegal17:{
            zh:"安全",
            en:"Security",
            vi:"Bảo mật",
            "zh-Hant":"安全",
            id:"Keamanan"
        },
        amtLegal18:{
            zh:"如果您使用电子邮件与本公司联系，您应当注意互联网电子邮件的安全性是不确定的。您用未经加密的电子邮件发送敏感或保密信息，即接受互联网此类保密性的不确定和可能不足的风险。互联网并不100%的安全，某些人或许能够拦截和阅读您的详细资料。",
            en:"If you communicate with the Company by e-mail, you should note that the security of Internet e-mail is uncertain. By sending sensitive or confidential e-mail messages which are not encrypted you accept the risks of such uncertainty and possible lack of confidentiality over the Internet. The Internet is not 100% safe and someone may be able to intercept and read your details.",
            vi:"Nếu bạn giao tiếp với Công ty bằng e-mail, bạn nên lưu ý rằng tính bảo mật của e-mail Internet là không đảm bảo hoàn toàn. Khi gửi thư điện tử có nội dung nhạy cảm hoặc bảo mật không được mã hóa, bạn chấp nhận những rủi ro của sự thiếu đảm bảo và có thể thiếu tính bảo mật như vậy trên Internet. Internet không an toàn 100% và ai đó có thể chặn và đọc thông tin cá nhân của bạn.",
            "zh-Hant":"如果您使用電子郵件與本公司聯系，您應當註意互聯網電子郵件的安全性是不確定的。您用未經加密的電子郵件發送敏感或保密信息，即接受互聯網此類保密性的不確定和可能不足的風險。互聯網並不100%的安全，某些人或許能夠攔截和閱讀您的詳細資料。",
            id:"If you communicate with the Company by e-mail, you should note that the security of Internet e-mail is uncertain. By sending sensitive or confidential e-mail messages which are not encrypted you accept the risks of such uncertainty and possible lack of confidentiality over the Internet. The Internet is not 100% safe and someone may be able to intercept and read your details."
        },
        amtLegal19:{
            zh:"隐私",
            en:"Privacy",
            vi:"Sự riêng tư",
            "zh-Hant":"隱私",
            id:"Privacy"
        },
        amtLegal20:{
            zh:"您提供给我们的任何个人信息将被保密对待，只共享给本公司、本公司的关联方和本公司的业务伙伴，除非出于法规或法律程序要求，否则不会披露给任何第三方。本公司网站使用的追踪系统会搜集您所访问网页、您如何发现此网站、网站访问频率等详细资料；本公司获取这类资料，是为了改善本公司网站的内容，TigerWit也可通过适当的方式与您联系，为您提供本公司认为对您有用的信息。",
            en:"Any personal information you provide us will be treated as confidential and shared only within the Company, its affiliates and its business partners and will not be disclosed to any third party except under any regulatory or legal proceedings. Web site tracking systems may also collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits and so on. The information we obtain is used to improve the content of our web site and may be used by us to contact you, by any appropriate means, and to provide you with any information we believe may be useful to you.",
            vi:"Bất kỳ thông tin cá nhân nào bạn cung cấp cho chúng tôi sẽ được coi là bí mật và chỉ được chia sẻ trong Công ty, các chi nhánh và các đối tác kinh doanh của Công ty và sẽ không được tiết lộ cho bất kỳ bên thứ ba nào ngoại trừ trường hợp có bất kỳ thủ tục quy định hoặc pháp lý nào được tiến hành. Hệ thống sao chép trang web cũng có thể thu thập dữ liệu chi tiết các trang bạn đã truy cập, cách bạn biết đến trang web này, tần suất truy cập, v.v. Thông tin chúng tôi nhận được được sử dụng để cải thiện nội dung trang web của chúng tôi và có thể được chúng tôi sử dụng để liên lạc với bạn, bằng bất kỳ phương tiện phù hợp nào và cung cấp cho bạn bất kỳ thông tin nào mà chúng tôi tin rằng có thể hữu ích cho bạn.",
            "zh-Hant":"您提供給我們的任何個人信息將被保密對待，只共享給本公司、本公司的關聯方和本公司的業務夥伴，除非出於法規或法律程序要求，否則不會披露給任何第三方。本公司網站使用的追蹤系統會搜集您所訪問網頁、您如何發現此網站、網站訪問頻率等詳細資料；本公司獲取這類資料，是為了改善本公司網站的內容，TigerWit也可通過適當的方式與您聯系，為您提供本公司認為對您有用的信息。",
            id:"Any personal information you provide us will be treated as confidential and shared only within the Company, its affiliates and its business partners and will not be disclosed to any third party except under any regulatory or legal proceedings. Web site tracking systems may also collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits and so on. The information we obtain is used to improve the content of our web site and may be used by us to contact you, by any appropriate means, and to provide you with any information we believe may be useful to you."
        },
        amtLegal21:{
            zh:"适用法律和司法管辖区",
            en:"Applicable Law and Jurisdiction",
            vi:"Luật Và Định Chế Áp Dụng",
            "zh-Hant":"適用法律和司法管轄區",
            id:"Applicable Law and Jurisdiction"
        },
        amtLegal22:{
            zh:"TigerWit Limited的客户访问本网站，即代表您同意不考虑法律冲突原则。巴哈马法律将适用于所有与使用本网站有关的事宜。如有任何争议，您同意巴哈马具有排他性司法管辖权。在任何条款和条件无法执行的情况下，其余条款和条件不受损害，无法执行的条款和条件应由此类最接近无法执行条款或条件潜在意图的可执行条款和条件所替换。本协议并不替代或以任何方式修改您与本公司签署的任何其他协议。",
            en:"For clients of TigerWit Limited, by accessing this site, you agree that the laws of The Bahamas, without regard to Conflict of Laws principles thereof, will apply to all matters relating to the use of this site. In case of a dispute, you agree to the exclusive jurisdiction of The Bahamas. In the event any of the Terms and Conditions shall be held to be unenforceable, the remaining Terms and Conditions shall be unimpaired and the unenforceable Term or Condition shall be replaced by such enforceable Term or Condition as comes closest to the intention underlying the unenforceable Term or Condition. This Agreement does not replace or in any way amend any other agreement you have entered into with the Company.",
            vi:"Đối với khách hàng của TigerWit Limited, bằng cách truy cập trang web này, bạn đồng ý rằng luật của Bahamas, không liên quan đến Nguyên tắc xung đột pháp luật, sẽ áp dụng cho mọi vấn đề liên quan đến việc sử dụng trang web này. Trong trường hợp có tranh chấp, bạn đồng ý với thẩm quyền duy nhất của Bahamas. Trong trường hợp bất kỳ Điều khoản và Điều kiện nào không được thi hành, các Điều khoản và Điều kiện còn lại sẽ không bị thay đổi và Điều khoản hoặc Điều kiện không thể thi hành sẽ được thay thế bằng Điều khoản hoặc Điều kiện có hiệu lực như vậy gần với ý định cơ bản của Điều khoản hoặc Điều khoản Bất Khả Kháng. Thỏa thuận này không thay thế hoặc bằng bất kỳ cách nào sửa đổi bất kỳ thỏa thuận nào khác mà bạn đã ký kết với Công ty.",
            "zh-Hant":"TigerWit Limited的客戶訪問本網站，即代表您同意不考慮法律沖突原則。巴哈馬法律將適用於所有與使用本網站有關的事宜。如有任何爭議，您同意巴哈馬具有排他性司法管轄權。在任何條款和條件無法執行的情況下，其余條款和條件不受損害，無法執行的條款和條件應由此類最接近無法執行條款或條件潛在意圖的可執行條款和條件所替換。本協議並不替代或以任何方式修改您與本公司簽署的任何其他協議。",
            id:"For clients of TigerWit Limited, by accessing this site, you agree that the laws of The Bahamas, without regard to Conflict of Laws principles thereof, will apply to all matters relating to the use of this site. In case of a dispute, you agree to the exclusive jurisdiction of The Bahamas. In the event any of the Terms and Conditions shall be held to be unenforceable, the remaining Terms and Conditions shall be unimpaired and the unenforceable Term or Condition shall be replaced by such enforceable Term or Condition as comes closest to the intention underlying the unenforceable Term or Condition. This Agreement does not replace or in any way amend any other agreement you have entered into with the Company."
        },
        amtClient1:{
            zh:"序言",
            en:"Introduction",
            vi:"Giới thiệu",
            "zh-Hant":"序言",
            id:"Introduction"
        },
        amtClient2:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或”本公司”）在巴哈马国注册成立（注册证书编号 198255B）。我们 的 注 册 办 事 处 位 于 201 Church Street, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.1 TigerWit Limited (sau đây gọi tắt là TigerWit, Công ty hoặc 'Công ty') được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或”本公司”）在巴哈馬國註冊成立（註冊證書編號 198255B）。我們 的 註 冊 辦 事 處 位 於 201 Church Street, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtClient3:{
            zh:"确认书",
            en:"Acknowledgement",
            vi:"Thừa nhận",
            "zh-Hant":"確認書",
            id:"Acknowledgement"
        },
        amtClient4:{
            zh:"1.这是我们计划依赖的标准客户协议。客户承认，他/她已经阅读、理解并接受客户协议，包 括 附 件 A （ “ 风 险 披 露 声 明 ” ） 和 附 件 B（“TigerWit Vault”）。",
            en:"1.This is our standard Client Agreement which we intend to rely on. The client acknowledges that he/she has read, understood and accepted the Client Agreement including the Annex A (‘Risk Disclosure Notice’) and Annex B (‘TigerWit Vault’).",
            vi:"1.Đây là Hợp đồng (Thỏa thuận) khách hàng chuẩn mà chúng tôi áp dụng làm tiêu chuẩn căn cứ. Khách hàng thừa nhận rằng họ đã đọc, hiểu và chấp nhận Hợp đồng Khách Hàng bao gồm Phụ lục A (Thông báo Tiết lộ Rủi ro).",
            "zh-Hant":"1.這是我們計劃依賴的標準客戶協議。客戶承認，他/她已經閱讀、理解並接受客戶協議，包 括 附 件 A （ “ 風 險 披 露 聲 明 ” ） 和 附 件 B（“TigerWit Vault”）。",
            id:"1.This is our standard Client Agreement which we intend to rely on. The client acknowledges that he/she has read, understood and accepted the Client Agreement including the Annex A (‘Risk Disclosure Notice’) and Annex B (‘TigerWit Vault’)."
        },
        amtClient5:{
            zh:"签订本协议，即代表客户接受 TigerWit 的条款和条件、客户分类通知、订单执行政策条款以及利益冲突政策，和本公司网站发布的任何（法律或其他）信息（可由 TigerWit 不时修订）。",
            en:"By entering into this Agreement, the client accepts TigerWit's Terms and Conditions, the Client Categorisation Notice, the terms of the Order Execution Policy and Conflicts of Interest Policy, as well as any information (legal or otherwise) posted on the Firm's website, as may be amended by TigerWit from time to time.",
            vi:"Đây là Hợp đồng (Thỏa thuận) khách hàng chuẩn mà chúng tôi áp dụng làm tiêu chuẩn căn cứ. Khách hàng thừa nhận rằng họ đã đọc, hiểu và chấp nhận Hợp đồng Khách Hàng bao gồm Phụ lục A (Thông báo Tiết lộ Rủi ro).",
            "zh-Hant":"簽訂本協議，即代表客戶接受 TigerWit 的條款和條件、客戶分類通知、訂單執行政策條款以及利益沖突政策，和本公司網站發布的任何（法律或其他）信息（可由 TigerWit 不時修訂）。",
            id:"By entering into this Agreement, the client accepts TigerWit's Terms and Conditions, the Client Categorisation Notice, the terms of the Order Execution Policy and Conflicts of Interest Policy, as well as any information (legal or otherwise) posted on the Firm's website, as may be amended by TigerWit from time to time."
        },
        amtClient6:{
            zh:"2.通过接受客户协议，客户即与本公司订立具有约束力的法律协议。",
            en:"2.By accepting the Client Agreement the client enters into a binding legal agreement with the Firm.",
            vi:"2.Bằng cách chấp nhận Hợp đồng khách hàng, khách hàng ký một thỏa thuận pháp lý ràng buộc với Công ty.",
            "zh-Hant":"2.通過接受客戶協議，客戶即與本公司訂立具有約束力的法律協議。",
            id:"2.By accepting the Client Agreement the client enters into a binding legal agreement with the Firm."
        },
        amtClient7:{
            zh:"3.客户承认本公司的官方语言是英语。",
            en:"3.The client acknowledges that the Firm’s official language is the English language.",
            vi:"3.Bằng cách chấp nhận Hợp đồng khách hàng, khách hàng ký một thỏa thuận pháp lý ràng buộc với Công ty.",
            "zh-Hant":"3.客戶承認本公司的官方語言是英語。",
            id:"3.The client acknowledges that the Firm’s official language is the English language."
        },
        amtClient8:{
            zh:"客户协议范围",
            en:"Scope of Client Agreement",
            vi:"Phạm vi Hợp đồng khách hàng",
            "zh-Hant":"客戶協議範圍",
            id:"Scope of Client Agreement"
        },
        amtClient9:{
            zh:"1.客户协议构成 TigerWit 向客户提供投资和辅助服务的基础。",
            en:"1.The Client Agreement forms the basis on which TigerWit provides investment and ancillary services to the client.",
            vi:"1.Hợp đồng khách hàng là cơ sở để TigerWit cung cấp các dịch vụ đầu tư và hỗ trợ cho khách hàng.",
            "zh-Hant":"1.客戶協議構成 TigerWit 向客戶提供投資和輔助服務的基礎。",
            id:"1.The Client Agreement forms the basis on which TigerWit provides investment and ancillary services to the client."
        },
        amtClient10:{
            zh:"2.除非本公司自行裁量做出其他决定，否则客户协议是不可协商的，并且其效力高于 TigerWit 任何其他协议、约定、明示或暗示的声明。如果客户协议需要作出重大修订，应当向客户发出合理的通知。",
            en:"2.The Client Agreement is non-negotiable and overrides any other agreements,arrangements, express or implied statements made by TigerWit unless the Firm, in its sole discretion, determines otherwise. If the Client Agreement were to be materially amended, reasonable notice shall be given to the client.",
            vi:"2. Hợp đồng khách hàng không thể thương lượng và ghi đè bất kỳ thỏa thuận, sự sắp xếp, tuyên bố rõ ràng hoặc ẩn dụ nào khác được thực hiện bởi TigerWit trừ khi Công ty trong khả năng thẩm quyền của mình quyết định các điều khoản khác. Nếu các tài liệu Hợp đồng khách hàng được sửa đổi, thông báo hợp lý sẽ được gửi đến khách hàng.",
            "zh-Hant":"2.除非本公司自行裁量做出其他決定，否則客戶協議是不可協商的，並且其效力高於 TigerWit 任何其他協議、約定、明示或暗示的聲明。如果客戶協議需要作出重大修訂，應當向客戶發出合理的通知。",
            id:"2.The Client Agreement is non-negotiable and overrides any other agreements,arrangements, express or implied statements made by TigerWit unless the Firm, in its sole discretion, determines otherwise. If the Client Agreement were to be materially amended, reasonable notice shall be given to the client."
        },
        amtClient11:{
            zh:"3.巴哈马法律及法规无需客户或本公司签字，才能对客户和本公司产生法律效力。",
            en:"3.Laws and regulations of The Bahamas does not require the Client Agreement to be signed by either the client or the Firm in order for both the client and the Firm to be legally bound by it.",
            vi:"3.Luật và quy định của Bahamas không yêu cầu Hợp đồng khách hàng phải được ký bởi khách hàng hoặc Công ty để cả khách hàng và Công ty bị ràng buộc về mặt pháp lý bởi hợp đồng này.",
            "zh-Hant":"3.巴哈馬法律及法規無需客戶或本公司簽字，才能對客戶和本公司產生法律效力。",
            id:"3.Laws and regulations of The Bahamas does not require the Client Agreement to be signed by either the client or the Firm in order for both the client and the Firm to be legally bound by it."
        },
        amtClient12:{
            zh:"客户协议开始",
            en:"Commencement of the Client Agreement",
            vi:"Bắt đầu của Hợp đồng khách hàng",
            "zh-Hant":"客戶協議開始",
            id:"Commencement of the Client Agreement"
        },
        amtClient13:{
            zh:"1.一旦意向客户收到包含他的/她的个人交易账号和部分文件的电子邮件，则客户协议开始。相关文件包括条款和条件、订单执行政策、客户分类通知和利益冲突政策。",
            en:"1.The Client Agreement shall commence once the prospective client receives an e-mail that contains his/her personal trading account number and certain documents including the Terms and Conditions, the Order Execution Policy, the Client Categorization Notice and the Conflicts of Interest Policy. ",
            vi:"1.Hợp đồng khách hàng sẽ bắt đầu khi khách hàng tiềm năng nhận được e-mail chứa số tài khoản giao dịch cá nhân của anh / cô ấy và các tài liệu nhất định bao gồm các Điều khoản và Điều kiện, Chính sách thực thi lệnh, Thông báo phân loại khách hàng và Chính sách xung đột lợi ích.",
            "zh-Hant":"1.壹旦意向客戶收到包含他的/她的個人交易賬號和部分文件的電子郵件，則客戶協議開始。相關文件包括條款和條件、訂單執行政策、客戶分類通知和利益沖突政策。",
            id:"1.The Client Agreement shall commence once the prospective client receives an e-mail that contains his/her personal trading account number and certain documents including the Terms and Conditions, the Order Execution Policy, the Client Categorization Notice and the Conflicts of Interest Policy. "
        },
        amtClient14:{
            zh:"条款解释",
            en:"Interpretation of Terms",
            vi:"Diễn giải các Điều khoản",
            "zh-Hant":"條款解釋",
            id:"Interpretation of Terms"
        },
        amtClient15:{
            zh:"1.除非有相反的说明，客户协议中包含的术语应具有特定含义，并可酌情以单数或复数使用。",
            en:"1.Unless indicated to the contrary, the defined terms included in the Client Agreement shall have a specific meaning and may be used in the singular or plural as appropriate.",
            vi:"1.Trừ khi được chỉ định điều khoản ngược lại, các điều khoản được xác định trong Hợp đồng khách hàng sẽ có một ý nghĩa cụ thể và có thể được sử dụng dưới dạng số ít hay số nhiều một cách thích hợp.",
            "zh-Hant":"1.除非有相反的說明，客戶協議中包含的術語應具有特定含義，並可酌情以單數或復數使用。",
            id:"1.Unless indicated to the contrary, the defined terms included in the Client Agreement shall have a specific meaning and may be used in the singular or plural as appropriate."
        },
        amtClient16:{
            zh:"除非另有规定，本客户协议中使用的术语应具有 SCB 规则和条例赋予的相同含义。",
            en:"Unless otherwise defined the terms used in this Client Agreement shall have the same meaning given under SCB Rules and Regulations.",
            vi:"Trừ khi được định nghĩa khác, các điều khoản được sử dụng trong Hợp đồng khách hàng này sẽ có cùng ý nghĩa theo các Quy tắc và Quy định của SCB.",
            "zh-Hant":"除非另有規定，本客戶協議中使用的術語應具有 SCB 規則和條例賦予的相同含義。",
            id:"Unless otherwise defined the terms used in this Client Agreement shall have the same meaning given under SCB Rules and Regulations."
        },
        amtClient17:{
            zh:"授权代表- 指客户明确授权，代表他/她行事的自然人或法人。通过授权委托书记录上述关系，其副本由本公司持有。",
            en:"Authorised Representative - shall mean either the natural or legal person who is expressly authorised by the client to act on his/ her behalf. The above- mentioned relationship is documented through a Power of Attorney, a copy of which is held by the Firm.",
            vi:"Đại diện được ủy quyền - có nghĩa là người hoặc pháp nhân tự nhiên được khách hàng ủy quyền rõ ràng để hành động thay mặt họ. Mối quan hệ nói trên được ghi nhận thông qua Giấy ủy quyền, với một bản sao được công ty nắm giữ.",
            "zh-Hant":"授權代表- 指客戶明確授權，代表他/她行事的自然人或法人。通過授權委托書記錄上述關系，其副本由本公司持有。",
            id:"Authorised Representative - shall mean either the natural or legal person who is expressly authorised by the client to act on his/ her behalf. The above- mentioned relationship is documented through a Power of Attorney, a copy of which is held by the Firm."
        },
        amtClient18:{
            zh:"余额 - 指交易账户中可用于交易金融工具的资金。",
            en:"Balance - shall mean the funds available in a trading account that may be used for trading financial instruments.",
            vi:"Số dư - nghĩa là số tiền có sẵn trong tài khoản giao dịch có thể được sử dụng để giao dịch công cụ tài chính.",
            "zh-Hant":"余額 - 指交易賬戶中可用於交易金融工具的資金。",
            id:"Balance - shall mean the funds available in a trading account that may be used for trading financial instruments."
        },
        amtClient19:{
            zh:"余额货币 - 指交易账户用来计价的货币。应该注意的是，所有费用（包括差价、佣金和掉期）都是以该货币进行计算的。",
            en:"Balance Currency - shall mean the currency thatthe trading account is denominated in. It should be noted that all charges including spreads, commissions and swaps, are calculated in that currency.",
            vi:" Tiền Tệ của Số Dư- nghĩa là đơn vị tiền tệ mà tài khoản giao dịch sử dụng. Cần lưu ý rằng tất cả các khoản phí bao gồm spread, hoa hồng và swap, được tính bằng loại tiền tệ đó.",
            "zh-Hant":"余額貨幣 - 指交易賬戶用來計價的貨幣。應該註意的是，所有費用（包括差價、傭金和掉期）都是以該貨幣進行計算的。",
            id:"Balance Currency - shall mean the currency thatthe trading account is denominated in. It should be noted that all charges including spreads, commissions and swaps, are calculated in that currency."
        },
        amtClient20:{
            zh:"营业日- 指本公司开门营业的日子。",
            en:"Business Day - shall mean a day on which the Firm is open for business.",
            vi:"Ngày Làm Việc - nghĩa là ngày Công ty mở cửa làm việc.",
            "zh-Hant":"營業日- 指本公司開門營業的日子。",
            id:"Business Day - shall mean a day on which the Firm is open for business."
        },
        amtClient21:{
            zh:"客户- 指接受上述第 4.1 条所提到电子邮件的自然人或法人。",
            en:"Client - shall mean either the natural or legal person who received the e-mail referred to in clause 4.1, above.",
            vi:"Khách hàng - nghĩa là đại diện tự nhiên hoặc hợp pháp nhận được e-mail được đề cập trong điều 4.1, ở trên.",
            "zh-Hant":"客戶- 指接受上述第 4.1 條所提到電子郵件的自然人或法人。",
            id:"Client - shall mean either the natural or legal person who received the e-mail referred to in clause 4.1, above."
        },
        amtClient22:{
            zh:"客户协议 - 指本协议，其中包括条款和条件、订单执行政策、客户分类通知和利益冲突政策，以及发布在本公司网站上的任何信息（法律或其他），可能由 TigerWit 不时进行修改。",
            en:"Client Agreement - shall mean this agreement including the Terms and Conditions, Order Execution Policy, Client Categorisation Notice and Conflicts of Interest Policy, as well as any information (legal or otherwise) published on the Firm's website, as may be amended by TigerWit from time to time.",
            vi:"Hợp đồng khách hàng - có nghĩa là hợp đồng này bao gồm các Điều khoản và Điều kiện, Chính sách thực thi lệnh, Thông báo phân loại khách hàng và Chính sách xung đột lợi ích, cũng như bất kỳ thông tin nào (hợp pháp hoặc khác) được công bố trên trang web của Công ty. theo thời gian.",
            "zh-Hant":"客戶協議 - 指本協議，其中包括條款和條件、訂單執行政策、客戶分類通知和利益沖突政策，以及發布在本公司網站上的任何信息（法律或其他），可能由 TigerWit 不時進行修改。",
            id:"Client Agreement - shall mean this agreement including the Terms and Conditions, Order Execution Policy, Client Categorisation Notice and Conflicts of Interest Policy, as well as any information (legal or otherwise) published on the Firm's website, as may be amended by TigerWit from time to time."
        },
        amtClient23:{
            zh:"客户资金- 指根据 SCB 规则向 TigerWit 支付的资金，由 TigerWit 为客户持有。计算为客户在他/她的交易账户所存入资金，加上/减去任何未变现或已变现的盈亏，加上/减去任何客户应当向本公司支付的款项（反之亦然）。",
            en:"Client Money - shall mean money that is paid into TigerWit pursuant to the SCB’s rules and is held for the Client. It is calculated as money deposited by the Client in his/her Trading Account, plus/minus any unrealised or realised profit/loss, plus/minus any amount that is due by the Client to the Firm and vice versa.",
            vi:"Tiền của Khách hàng - có nghĩa là tiền được trả cho TigerWit theo quy định của SCB và được giữ cho khách hàng. Nó được tính như tiền gửi của Khách hàng trong Tài khoản giao dịch của mình, cộng / trừ bất kỳ khoản lãi / lỗ chưa được ghi vào hoặc được thực hiện, cộng / trừ bất kỳ số tiền nào do Khách hàng gửi đến Công ty và ngược lại.",
            "zh-Hant":"客戶資金- 指根據 SCB 規則向 TigerWit 支付的資金，由 TigerWit 為客戶持有。計算為客戶在他/她的交易賬戶所存入資金，加上/減去任何未變現或已變現的盈虧，加上/減去任何客戶應當向本公司支付的款項（反之亦然）。",
            id:"Client Money - shall mean money that is paid into TigerWit pursuant to the SCB’s rules and is held for the Client. It is calculated as money deposited by the Client in his/her Trading Account, plus/minus any unrealised or realised profit/loss, plus/minus any amount that is due by the Client to the Firm and vice versa."
        },
        amtClient24:{
            zh:"关闭头寸- 指与开设头寸相反的操作。",
            en:"Closed Position - shall mean the opposite of an open position.",
            vi:"Vị thế đóng - có nghĩa là trạng thái đối lập của một vị thế mở.",
            "zh-Hant":"關閉頭寸- 指與開設頭寸相反的操作。",
            id:"Closed Position - shall mean the opposite of an open position."
        },
        amtClient25:{
            zh:"差价合约 (CFD) - 指涉及以下内容的 CFD：现货外汇（“外汇”）、股票、现货金属、期货或任何可通过 TigerWit 交易平台进行交易的 CFD相关工具；可在 http://global.tigerwit.com.获得金融工具的完整列表。",
            en:"Contract for Difference (CFD) - shall mean a CFD on: spot foreign exchange (‘FX’), shares, indices, spot metals, futures or any other CFD related instrument that is available for trading through the TigerWit trading platform(s). A full list of the financial instruments is available online at http://global.tigerwit.com.",
            vi:"Hợp đồng Chênh Lệch (CFD)-có nghĩa là một Hợp Đồng CFD trên: thị trường ngoại hối giao ngay (FX), cổ phiếu, chỉ số, kim loại giao ngay, kì hạn và các sản phẩm liên quan đến CFD khác có thể được tìm thấy tại phần Mở Tài Khoản của TigerWit, có sẵn trên website tại địa chỉ http://global.tigerwit.com.",
            "zh-Hant":"差價合約 (CFD) - 指涉及以下內容的 CFD：現貨外匯（“外匯”）、股票、現貨金屬、期貨或任何可通過 TigerWit 交易平臺進行交易的 CFD相關工具；可在 http://global.tigerwit.com.獲得金融工具的完整列表。",
            id:"Contract for Difference (CFD) - shall mean a CFD on: spot foreign exchange (‘FX’), shares, indices, spot metals, futures or any other CFD related instrument that is available for trading through the TigerWit trading platform(s). A full list of the financial instruments is available online at http://global.tigerwit.com."
        },
        amtClient26:{
            zh:"账户净值 - 表示余额加/减任何未平仓头寸的利润/损失。",
            en:"Equity - shall mean the balance plus/minus any profit/loss that derives from any open positions.",
            vi:"Vốn thực hiện có- có nghĩa là số dư cộng / trừ bất kỳ khoản lãi / lỗ nào phát sinh từ bất kỳ vị thế mở nào.",
            "zh-Hant":"賬戶凈值 - 表示余額加/減任何未平倉頭寸的利潤/損失。",
            id:"Equity - shall mean the balance plus/minus any profit/loss that derives from any open positions."
        },
        amtClient27:{
            zh:"自由保证金 - 指可用于开立头寸的资金。计算方法如下：自由保证金=账户净值-保证金",
            en:"Free Margin - shall mean funds that are available for opening a position. It is calculated as: Free Margin = Equity – Margin.",
            vi:"Số tiền có thể giao dịch tiếp (free-margin) (số tiền kí quỹ - nghĩa là số tiền có sẵn để mở một vị thế. Nó được tính như sau: Số tiền có thể giao dịch tiếp (Free margin) = Số dư thực (Equity) - tiền đặt lệnh (Margin).",
            "zh-Hant":"自由保證金 - 指可用於開立頭寸的資金。計算方法如下：自由保證金=賬戶凈值-保證金",
            id:"Free Margin - shall mean funds that are available for opening a position. It is calculated as: Free Margin = Equity – Margin."
        },
        amtClient28:{
            zh:"SCB - 指巴哈马证券监察委员会及其运作的立法框架和规章制度。",
            en:"SCB - shall mean the Securities Commission of The Bahamas and the legislative framework from which it operates, it Rules and Regulations.",
            vi:"SCB - có nghĩa là Ủy ban Chứng khoán Bahamas và khung pháp lý mà nó điều hành, đó là Quy tắc và Quy định.",
            "zh-Hant":"SCB - 指巴哈馬證券監察委員會及其運作的立法框架和規章制度。",
            id:"SCB - shall mean the Securities Commission of The Bahamas and the legislative framework from which it operates, it Rules and Regulations."
        },
        amtClient29:{
            zh:"法律- 指英国或其他地区任何适用的法例、法律、监管、规则和操守。",
            en:"Law - shall mean any applicable statutes, laws, regulations, rules and codes of practice, whether in the United Kingdom or elsewhere.",
            vi:"Pháp luật - có nghĩa là bất kỳ điều luật, quy định, quy định, quy tắc và quy tắc có hiệu lực nào được áp dụng, cho dù ở Vương quốc Anh hay ở nơi khác.",
            "zh-Hant":"法律- 指英國或其他地區任何適用的法例、法律、監管、規則和操守。",
            id:"Law - shall mean any applicable statutes, laws, regulations, rules and codes of practice, whether in the United Kingdom or elsewhere."
        },
        amtClient30:{
            zh:"保证金 - 指为维持未平仓头寸而应在交易账户中保留的可用资金。",
            en:"Margin - shall mean the required funds available in a trading account for the purposes of maintaining an open position.",
            vi:"Margin - nghĩa là các khoản tiền cần thiết có sẵn trong tài khoản giao dịch nhằm mục đích duy trì một vị trí mở.",
            "zh-Hant":"保證金 - 指為維持未平倉頭寸而應在交易賬戶中保留的可用資金。",
            id:"Margin - shall mean the required funds available in a trading account for the purposes of maintaining an open position."
        },
        amtClient31:{
            zh:"保证金水平- 指账户净值与保证金比率，计算如下：保证金水平= 账户净值/保证金",
            en:"Margin Level - shall mean the Equity to Margin ratio calculated as: Margin Level = Equity / Margin",
            vi:"Mức ký quỹ (margin level) - có nghĩa là tỷ lệ vốn thực sở hữu (equity) so với số tiền đặt lệnh (margin) được tính như sau: Mức ký quỹ (Margin Level) = Vốn thực sở hữu (Equity)/ Số tiền đặt lệnh",
            "zh-Hant":"保證金水平- 指賬戶凈值與保證金比率，計算如下：保證金水平= 賬戶凈值/保證金",
            id:"Margin Level - shall mean the Equity to Margin ratio calculated as: Margin Level = Equity / Margin"
        },
        amtClient32:{
            zh:"匹配的主要经纪商- 匹配的主要经纪商指获准以做市商身份进行投资交易的投资公司，相关投资是 IFPRU 的指定投资，其自身介入买家和卖家的交易，从而让双边交易同时执行，并确保其作为做市商交易时仅执行客户的订单。",
            en:"Matched Principal Broker - A matched principal broker means an investment firm with permission to deal in investments as principal with respect to investments that are IFPRU designated investments, by interposing itself between the buyer and the seller to the transaction in such way that both sides are executed simultaneously, and ensures it deals as principal only to fulfil customer orders.",
            vi:"Nhà Môi Giới Chính Tương Ứng- Nhà môi giới Tương Ứng có nghĩa là một công ty đầu tư được phép giao dịch với các khoản vốn đầu tư được chỉ định bởi IFPRU, bằng cách can thiệp giữa người mua và người bán với giao dịch theo cách mà cả hai bên được thực hiện đồng thời, và đảm bảo nó giao dịch dưới dạng người đứng đầu chỉ để thực hiện các lệnh của khách hàng.",
            "zh-Hant":"匹配的主要經紀商- 匹配的主要經紀商指獲準以做市商身份進行投資交易的投資公司，相關投資是 IFPRU 的指定投資，其自身介入買家和賣家的交易，從而讓雙邊交易同時執行，並確保其作為做市商交易時僅執行客戶的訂單。",
            id:"Matched Principal Broker - A matched principal broker means an investment firm with permission to deal in investments as principal with respect to investments that are IFPRU designated investments, by interposing itself between the buyer and the seller to the transaction in such way that both sides are executed simultaneously, and ensures it deals as principal only to fulfil customer orders."
        },
        amtClient33:{
            zh:"未平仓头寸- 指任何尚未关闭的头寸。例如，一个未被相反空头头寸对冲的未平仓多头头寸，反之亦然。",
            en:"Open Position - shall mean any position that has not been closed. For example, an open long position not covered by the opposite short position and vice versa.",
            vi:"Vị thế mở - nghĩa là bất kỳ vị thế nào chưa bị đóng. Ví dụ, một vị thế mua không được bao gồm bởi vị thế bán đối lập và ngược lại.",
            "zh-Hant":"未平倉頭寸- 指任何尚未關閉的頭寸。例如，壹個未被相反空頭頭寸對沖的未平倉多頭頭寸，反之亦然。",
            id:"Open Position - shall mean any position that has not been closed. For example, an open long position not covered by the opposite short position and vice versa."
        },
        amtClient34:{
            zh:"场外交易 (OTC) - 指其交易受交易平台的商业条款和条件约束的所有金融工具的执行场所。",
            en:"Over-the-Counter (OTC) - shall mean the execution venue for any financial instruments whose trading is governed by the relevant Terms and Conditions of Business for the trading platforms.",
            vi:"Vị thế mở - nghĩa là bất kỳ vị thế nào chưa bị đóng. Ví dụ, một vị thế mua không được bao gồm bởi vị thế bán đối lập và ngược lại. được điều chỉnh bởi các Điều khoản và Điều kiện kinh doanh có liên quan cho các nền tảng giao dịch.",
            "zh-Hant":"場外交易 (OTC) - 指其交易受交易平臺的商業條款和條件約束的所有金融工具的執行場所。",
            id:"Over-the-Counter (OTC) - shall mean the execution venue for any financial instruments whose trading is governed by the relevant Terms and Conditions of Business for the trading platforms."
        },
        amtClient35:{
            zh:"意向客户- 指完成‘TigerWit 交易账户开户’部分申请表格的自然人和法人，开户表格可以在http://global.tigerwit.com.获取",
            en:"Prospective Client - shall mean either a natural or legal person who completed the application form that can be found under the ‘TigerWit Trading Account Opening’ section, available online at http://global.tigerwit.com.",
            vi:"Khách hàng tiềm năng - nghĩa là người tự nhiên hoặc pháp nhân đã hoàn thành mẫu đơn trong phần Mở tài khoản giao dịch TigerWit, có sẵn trực tuyến tại http://global.tigerwit.com.",
            "zh-Hant":"意向客戶- 指完成‘TigerWit 交易賬戶開戶’部分申請表格的自然人和法人，開戶表格可以在http://global.tigerwit.com.獲取",
            id:"Prospective Client - shall mean either a natural or legal person who completed the application form that can be found under the ‘TigerWit Trading Account Opening’ section, available online at http://global.tigerwit.com."
        },
        amtClient36:{
            zh:"交易账户 - 指客户为通过 TigerWit 交易平台交易金融工具而维护的、具有唯一编号的账户。",
            en:"Trading Account - shall mean the account, which has a unique number, maintained by a client for the purposes of trading financial instruments through the TigerWit trading platform(s).",
            vi:"Khách hàng tiềm năng - nghĩa là người tự nhiên hoặc pháp nhân đã hoàn thành mẫu đơn trong phần Mở tài khoản giao dịch TigerWit, có sẵn trực tuyến tại http://global.tigerwit.com.",
            "zh-Hant":"交易賬戶 - 指客戶為通過 TigerWit 交易平臺交易金融工具而維護的、具有唯壹編號的賬戶。",
            id:"Trading Account - shall mean the account, which has a unique number, maintained by a client for the purposes of trading financial instruments through the TigerWit trading platform(s)."
        },
        amtClient37:{
            zh:"条款和条件- 指“TigerWit 商业条款和条件”，管辖客户订单执行相关的行动；条款和条件可以在 http://global.tigerwit.com.获取",
            en:"Terms and Conditions - shall mean the ‘TigerWit Terms and Conditions of Business’ governing the actions that relate to the execution of the client’s orders; available online at http://global.tigerwit.com.",
            vi:"Khách hàng tiềm năng - nghĩa là người tự nhiên hoặc pháp nhân đã hoàn thành mẫu đơn trong phần Mở tài khoản giao dịch TigerWit, có sẵn trực tuyến tại http://global.tigerwit.com.",
            "zh-Hant":"條款和條件- 指“TigerWit 商業條款和條件”，管轄客戶訂單執行相關的行動；條款和條件可以在 http://global.tigerwit.com.獲取",
            id:"Terms and Conditions - shall mean the ‘TigerWit Terms and Conditions of Business’ governing the actions that relate to the execution of the client’s orders; available online at http://global.tigerwit.com."
        },
        amtClient38:{
            zh:"估值日 - 指资金的交付日期。",
            en:"Value Date - shall mean the delivery date of funds",
            vi:"Ngày Giá trị - có nghĩa là ngày chuyển tiền.",
            "zh-Hant":"估值日 - 指資金的交付日期。",
            id:"Value Date - shall mean the delivery date of funds"
        },
        amtClient39:{
            zh:"Vault 钱包- 指账户，拥有一个独一无二的号码，由客户保管用于从客户的交易账户存取资金。",
            en:"Vault - shall mean the account, which has a unique number, maintained by the client for the purposes of depositing and withdrawing funds to and from the client’s Trading Account.",
            vi:"Vault - nghĩa là tài khoản có số duy nhất, được khách hàng duy trì cho mục đích gửi và rút tiền đến và từ Tài khoản giao dịch của khách hàng.",
            "zh-Hant":"Vault 錢包- 指賬戶，擁有壹個獨壹無二的號碼，由客戶保管用於從客戶的交易賬戶存取資金。",
            id:"Vault - shall mean the account, which has a unique number, maintained by the client for the purposes of depositing and withdrawing funds to and from the client’s Trading Account."
        },
        amtClient40:{
            zh:"服务的提供",
            en:"Provision of Services",
            vi:"Điều khoản Cung Cấp Dịch vụ",
            "zh-Hant":"服務的提供",
            id:"Provision of Services"
        },
        amtClient41:{
            zh:"1.TigerWit 由 SCB 授权担任做市商。已授权的指定投资业务及其辅助服务的详情可以在SCB 登记簿中找到。",
            en:"1.TigerWit is authorised by the SCB to act as Principle. Details of our authorised designated investment business and ancillary services can be found on the SCB register.",
            vi:"1.TigerWit được SCB cho phép hoạt động theo Nguyên tắc của nó. Thông tin chi tiết về hoạt động kinh doanh đầu tư được chỉ định của chúng tôi và các dịch vụ phụ trợ có thể được trình bằng trong sổ đăng ký của SCB.",
            "zh-Hant":"1.TigerWit 由 SCB 授權擔任做市商。已授權的指定投資業務及其輔助服務的詳情可以在SCB 登記簿中找到。",
            id:"1.TigerWit is authorised by the SCB to act as Principle. Details of our authorised designated investment business and ancillary services can be found on the SCB register."
        },
        amtClient42:{
            zh:"2.TigerWit 只在执行基础上向客户提供多种金融工具，相关合约规范可在线查询，网址：http://global.tigerwit.com。",
            en:"2.TigerWit offers, on an execution-only basis, a number of financial instruments to the client the contract specifications of which are available online at http://global.tigerwit.com.",
            vi:"2.TigerWit cung cấp, trên cơ sở thực thi lệnh, một số công cụ tài chính cho khách hàng các thông số kỹ thuật hợp đồng trong đó có sẵn trực tuyến tại http://global.tigerwit.com.",
            "zh-Hant":"2.TigerWit 只在執行基礎上向客戶提供多種金融工具，相關合約規範可在線查詢，網址：http://global.tigerwit.com。",
            id:"2.TigerWit offers, on an execution-only basis, a number of financial instruments to the client the contract specifications of which are available online at http://global.tigerwit.com."
        },
        amtClient43:{
            zh:"3.本公司提供的金融工具的交易条件与执行 规 则 可 在 任 何 特 定 时 间 通 过 网 址http://global.tigerwit.com 在线查询。TigerWit 只限于执行委托运行，除非另有约定外，否则没有义务就客户交易决策的适当性进行监督或提出建议，因此即使在交易不适用于客户的情况下，本公司仍可按照客户接收的指令执行。",
            en:"3.The trading conditions and execution rules of the financial instruments on offer by the Firm can be found online at http://global.tigerwit.com at any given time. TigerWit operates on an execution only mandate and unless agreed otherwise is under no obligation to monitor or advise the client on the suitability of their trading decision, therefore, the Firm may execute an instruction received by the client even if such transaction is not suitable for the client.",
            vi:"3.Các điều kiện giao dịch và các quy tắc thực hiện của các công cụ tài chính được cung cấp bởi Công ty có thể được truy cập trực tuyến tại địa chỉ http://global.tigerwit.com tại bất kỳ thời điểm nào. TigerWit hoạt động trên một thực thi chỉ có nhiệm vụ và trừ khi có thoả thuận khác không có nghĩa vụ giám sát hoặc tư vấn cho khách hàng về sự phù hợp của quyết định giao dịch của họ, do đó, Công ty có thể thực hiện lệnh mà khách hàng nhận được ngay cả khi giao dịch đó không phù hợp với khách hàng. ",
            "zh-Hant":"3.本公司提供的金融工具的交易條件與執行 規 則 可 在 任 何 特 定 時 間 通 過 網 址http://global.tigerwit.com 在線查詢。TigerWit 只限於執行委托運行，除非另有約定外，否則沒有義務就客戶交易決策的適當性進行監督或提出建議，因此即使在交易不適用於客戶的情況下，本公司仍可按照客戶接收的指令執行。",
            id:"3.The trading conditions and execution rules of the financial instruments on offer by the Firm can be found online at http://global.tigerwit.com at any given time. TigerWit operates on an execution only mandate and unless agreed otherwise is under no obligation to monitor or advise the client on the suitability of their trading decision, therefore, the Firm may execute an instruction received by the client even if such transaction is not suitable for the client."
        },
        amtClient44:{
            zh:"向客户发出通知，TigerWit 保留随时修订交易条件及执行规则的权利。即便公司对交易条件和/或执行规则的任何部分作出修订，客户仍然受到客户协议，包括但不限于已经实施的任何修订的约束。",
            en:"Upon notice to the client, TigerWit reserves the right to amend, from time to time, both the trading conditions and execution rules. Even if the Firm amends any part of the trading conditions and/or execution rules the client continues to be bound by the Client Agreement, including but not limited to any amendments that have been implemented.",
            vi:"Theo thông báo cho khách hàng, TigerWit bảo lưu quyền sửa đổi, theo thời gian, cả hai điều kiện giao dịch và các quy tắc thực hiện. Ngay cả khi Công ty sửa đổi bất kỳ phần nào của các điều kiện giao dịch và / hoặc quy tắc thực thi, khách hàng vẫn tiếp tục bị ràng buộc bởi Hợp đồng khách hàng, bao gồm nhưng không giới hạn ở bất kỳ sửa đổi nào đã được thực hiện.",
            "zh-Hant":"向客戶發出通知，TigerWit 保留隨時修訂交易條件及執行規則的權利。即便公司對交易條件和/或執行規則的任何部分作出修訂，客戶仍然受到客戶協議，包括但不限於已經實施的任何修訂的約束。",
            id:"Upon notice to the client, TigerWit reserves the right to amend, from time to time, both the trading conditions and execution rules. Even if the Firm amends any part of the trading conditions and/or execution rules the client continues to be bound by the Client Agreement, including but not limited to any amendments that have been implemented."
        },
        amtClient45:{
            zh:"4.在任何情况下，TigerWit 都不应向客户提供投资意见或投资建议，或就交易发表意见。客户理解，如有必要应寻求与交易金融工具有关的独立意见，包括但不限于特定金融工具的交易、客户追求的投资策略、费用及税务影响。",
            en:"4.Under no circumstances, TigerWit shall provide investment advice or recommendation to the client or state an opinion in relation to a transaction. The client understands that if necessary, independent advice should be sought in relation to trading financial instruments, including but not limited to trading specific financial instruments, investment strategies pursued, charges and tax implications.",
            vi:"4.Theo thông báo cho khách hàng, TigerWit bảo lưu quyền sửa đổi, theo thời gian, cả hai điều kiện giao dịch và các quy tắc thực hiện. Ngay cả khi Công ty sửa đổi bất kỳ phần nào của các điều kiện giao dịch và / hoặc quy tắc thực thi, khách hàng vẫn tiếp tục bị ràng buộc bởi Hợp đồng khách hàng, bao gồm nhưng không giới hạn ở bất kỳ sửa đổi nào đã được thực hiện.",
            "zh-Hant":"4.在任何情況下，TigerWit 都不應向客戶提供投資意見或投資建議，或就交易發表意見。客戶理解，如有必要應尋求與交易金融工具有關的獨立意見，包括但不限於特定金融工具的交易、客戶追求的投資策略、費用及稅務影響。",
            id:"4.Under no circumstances, TigerWit shall provide investment advice or recommendation to the client or state an opinion in relation to a transaction. The client understands that if necessary, independent advice should be sought in relation to trading financial instruments, including but not limited to trading specific financial instruments, investment strategies pursued, charges and tax implications."
        },
        amtClient46:{
            zh:"5.TigerWit 可以不时及按其认为适当的频率，通过其网站或其他媒体发布包含金融市场状况等信息的资料（以下简称“信息资料”）。请留意，该信息资料仅视作营销传播，并不包含且不得解释为包含投资意见或投资建议，或任何金融工具交易的邀约或邀请。TigerWit 对于所提供信息的准确性或完整性不作任何声明或承担任何责任，也不对基于 TigerWit 的任何雇员、第三方等提供的声明、预测或其他信息所作任何投资产生的任何损失承担责任。该信息资料并未按照提倡投资研究独立性的法律要求编制，且在投资研究传播前不受任何交易禁止。信息资料中包含的所有意见表述如有更改恕不另行通知。任何意见都可能出自作者个人观点，不一定反映TigerWit 的意见。",
            en:"5.TigerWit, from time to time and as often as it deems appropriate, may issue material (‘the Information Material’), which contains information including but not limited to the conditions of the financial market, published via its website and other media. It should be noted the Information Material is considered to be marketingcommunication only and does not contain, and should not be construed as containing investment advice or an investment recommendation or, an offer of or solicitation for any transactions in financial instruments. TigerWit makes no representation and assumes no liability as to the accuracy or completeness of the information provided, nor any loss arising from any investment based on a statement, forecast or other information supplied by any employee of TigerWit, a third party or otherwise. The Information Material is not prepared in accordance with legal requirements promoting the independence of investment research and it is not subject to any prohibition on dealing ahead of the dissemination of investment research. All expressions of opinion included in the Information Material are subject to change without notice. Any opinions made may be personal to the author and may not reflect the opinions of TigerWit.",
            vi:"5. TigerWit, tùy từng thời điểm và thấy phù hợp, có thể phát hành tài liệu (Tài liệu Thông tin), chứa thông tin bao gồm nhưng không giới hạn ở các điều kiện của thị trường tài chính, được xuất bản qua trang web và các phương tiện khác. Cần lưu ý rằng Tài liệu Thông tin được coi là chỉ tiếp thị và không chứa và không được hiểu là có chứa lời khuyên đầu tư hoặc khuyến nghị đầu tư hoặc đề nghị hoặc chào mời bất kỳ giao dịch nào trong các công cụ tài chính. TigerWit không đại diện và không chịu trách nhiệm về tính chính xác hoặc đầy đủ của thông tin được cung cấp, cũng như bất kỳ tổn thất nào phát sinh từ bất kỳ khoản đầu tư nào dựa trên tuyên bố, dự báo hoặc thông tin khác được cung cấp bởi bất kỳ nhân viên nào của TigerWit hay bất kì một bên thứ ba hay bên nào khác. Thông Tin Tài Liệu không được chuẩn bị theo các điều kiện pháp luật cho biết sự độc lập của việc nghiên cứu và không thay đổi bất kì điều khoản nào của sự phổ biến nghiên cứu đầu tư. Tất cả các việc thể hiện ý kiến được bao gồm trong Tài Liệu Thông Tin có thể được thay đổi mà không cần có thông báo. Bất kì ý kiến nào được đưa có thể mang tính cá nhân từ tác giả và không thể hiện ý kiến của TigerWit.",
            "zh-Hant":"5.TigerWit 可以不時及按其認為適當的頻率，通過其網站或其他媒體發布包含金融市場狀況等信息的資料（以下簡稱“信息資料”）。請留意，該信息資料僅視作營銷傳播，並不包含且不得解釋為包含投資意見或投資建議，或任何金融工具交易的邀約或邀請。TigerWit 對於所提供信息的準確性或完整性不作任何聲明或承擔任何責任，也不對基於 TigerWit 的任何雇員、第三方等提供的聲明、預測或其他信息所作任何投資產生的任何損失承擔責任。該信息資料並未按照提倡投資研究獨立性的法律要求編制，且在投資研究傳播前不受任何交易禁止。信息資料中包含的所有意見表述如有更改恕不另行通知。任何意見都可能出自作者個人觀點，不壹定反映TigerWit 的意見。",
            id:"5.TigerWit, from time to time and as often as it deems appropriate, may issue material (‘the Information Material’), which contains information including but not limited to the conditions of the financial market, published via its website and other media. It should be noted the Information Material is considered to be marketingcommunication only and does not contain, and should not be construed as containing investment advice or an investment recommendation or, an offer of or solicitation for any transactions in financial instruments. TigerWit makes no representation and assumes no liability as to the accuracy or completeness of the information provided, nor any loss arising from any investment based on a statement, forecast or other information supplied by any employee of TigerWit, a third party or otherwise. The Information Material is not prepared in accordance with legal requirements promoting the independence of investment research and it is not subject to any prohibition on dealing ahead of the dissemination of investment research. All expressions of opinion included in the Information Material are subject to change without notice. Any opinions made may be personal to the author and may not reflect the opinions of TigerWit."
        },
        amtClient47:{
            zh:"6.客户理解不得通过其交易账户进行相关差价合约标的工具（或参考工具）的实际交割。",
            en:"6.The client understands that no physical delivery of a CFD’s underlying instrument (or reference instrument) that he/she traded through his/her trading account shall occur.",
            vi:"6.Khách hàng hiểu rằng sẽ không có việc giao hàng về mặt vật lý của một hợp đồng CFD tài sản cơ bản (hoặc công cụ tham chiếu) mà họ giao dịch thông qua tài khoản giao dịch của mình.",
            "zh-Hant":"6.客戶理解不得通過其交易賬戶進行相關差價合約標的工具（或參考工具）的實際交割。",
            id:"6.The client understands that no physical delivery of a CFD’s underlying instrument (or reference instrument) that he/she traded through his/her trading account shall occur."
        },
        amtClient48:{
            zh:"7.客户同意，TigerWit 仅仅是一个执行场所，是场外市场。",
            en:"7.The client accepts that TigerWit is the only execution venue, which is a Over-The-Counter market.",
            vi:"7.Khách hàng chấp nhận rằng TigerWit là địa điểm khớp lệnh duy nhất, là một thị trường Over-the Counter (giao dịch không qua sàn chứng khoán).",
            "zh-Hant":"7.客戶同意，TigerWit 僅僅是壹個執行場所，是場外市場。",
            id:"7.The client accepts that TigerWit is the only execution venue, which is a Over-The-Counter market."
        },
        amtClient49:{
            zh:"8.客户可以从星期日 12.00.01(GMT+0)至星期五 22.00.00(GMT+0)通过其交易账户交易。请留意，某些金融工具只能在特定的时段交易。客户在交易之前有责任查看相关工具的合约规范了解更多详情。本公司应通过内部电子邮件系统通知客户任何假期。",
            en:"8.The client may trade through his/her trading account from 12.00.01 (GMT+0) on a Sunday until 22.00.00 (GMT+0) on a Friday. It should be noted that trading of certain financial instruments occurs during specific timeframes; the client is responsible for looking at the contract specifications of such instruments for further details, prior to trading. The client shall be notified of any Firm holidays through the internal e-mailing system.",
            vi:"8. Khách hàng có thể giao dịch thông qua tài khoản giao dịch từ 12.00.01 (GMT+0) vào ngày Chủ Nhật đến 22.00.00 (GMT+0) vào Thứ 6. Lưu ý rằng giao dịch với một vài sản phẩm tài chính cụ thể diễn ra trong các khung thời gian cụ thể; khách hàng có trách nhiệm nghiên cứu điều kiện hợp đồng của các sản phẩm để biết thêm chi tiết, trước khi thực hiện giao dịch. Khách hàng sẽ được thông báo nếu có bất kì kì nghỉ nào của Công ty thông qua hệ thống email nội bộ.",
            "zh-Hant":"8.客戶可以從星期日 12.00.01(GMT+0)至星期五 22.00.00(GMT+0)通過其交易賬戶交易。請留意，某些金融工具只能在特定的時段交易。客戶在交易之前有責任查看相關工具的合約規範了解更多詳情。本公司應通過內部電子郵件系統通知客戶任何假期。",
            id:"8.The client may trade through his/her trading account from 12.00.01 (GMT+0) on a Sunday until 22.00.00 (GMT+0) on a Friday. It should be noted that trading of certain financial instruments occurs during specific timeframes; the client is responsible for looking at the contract specifications of such instruments for further details, prior to trading. The client shall be notified of any Firm holidays through the internal e-mailing system."
        },
        amtClient50:{
            zh:"9.为保护客户和本公司双方的正当利益，TigerWit 有权在任何时候拒绝向客户提供任何投资或辅助服务，而无需告知客户拒绝缘由。",
            en:"9.TigerWit in entitled to refuse the provision of any investment or ancillary service to the client, at any time, without being obliged to inform the client of the reasons to do so in order to protect the legitimate interests of both the client and the Firm.",
            vi:"9.TigerWit có quyền từ chối cung cấp bất kì sản phẩm hoặc dịch vụ hỗ trợ cho khách hàng, bất cứ lúc nào, không có nghĩa vụ thông báo cho khách hàng về lý do của việc này để bảo vệ lợi ích hợp pháp của cả khách hàng và Công ty.",
            "zh-Hant":"9.為保護客戶和本公司雙方的正當利益，TigerWit 有權在任何時候拒絕向客戶提供任何投資或輔助服務，而無需告知客戶拒絕緣由。",
            id:"9.TigerWit in entitled to refuse the provision of any investment or ancillary service to the client, at any time, without being obliged to inform the client of the reasons to do so in order to protect the legitimate interests of both the client and the Firm."
        },
        amtClient51:{
            zh:"客户分类",
            en:"Client Classification",
            vi:"Phân loại Khách Hàng",
            "zh-Hant":"客戶分類",
            id:"Client Classification"
        },
        amtClient52:{
            zh:"1.除非本公司另有约定，客户应被视为零售客户。",
            en:"1.Unless the Firm agrees otherwise, the client shall be treated as a Retail Client.",
            vi:"1.Nếu Công ty không đồng ý, khách hàng được phân loại như là một Khách Hàng Đơn Lẻ.",
            "zh-Hant":"1.除非本公司另有約定，客戶應被視為零售客戶。",
            id:"1.Unless the Firm agrees otherwise, the client shall be treated as a Retail Client."
        },
        amtClient53:{
            zh:"如果客户希望被重新分类为专业客户或合格对手方，则客户需要向本公司发出书面申请。公司在对客户作出定量及定性评估等情况审核后，应酌情考量上述申请。如客人个人情况发生变化，客户有责任告知公司。",
            en:"If a client desires to be re-classified as either a Professional Client or an Eligible Counterparty then the client needs to send the Firm a written request. The Firm shall consider such requests at its discretion after reviewing the client’s circumstances, including the quantitative and qualitative assessments. The client is responsible for notifying the Firm of his/her change of personal circumstances.",
            vi:"Nếu khách hàng muốn được phân loại lại là Khách hàng Chuyên nghiệp hoặc Đối tác Đủ điều kiện thì khách hàng cần gửi cho Công ty một yêu cầu bằng văn bản. Công ty sẽ xem xét các yêu cầu đó theo quyết định của mình sau khi xem xét hoàn cảnh của khách hàng, bao gồm các đánh giá định tính và định lượng. Khách hàng chịu trách nhiệm thông báo cho Công ty về việc thay đổi hoàn cảnh cá nhân của mình.",
            "zh-Hant":"如果客戶希望被重新分類為專業客戶或合格對手方，則客戶需要向本公司發出書面申請。公司在對客戶作出定量及定性評估等情況審核後，應酌情考量上述申請。如客人個人情況發生變化，客戶有責任告知公司。",
            id:"If a client desires to be re-classified as either a Professional Client or an Eligible Counterparty then the client needs to send the Firm a written request. The Firm shall consider such requests at its discretion after reviewing the client’s circumstances, including the quantitative and qualitative assessments. The client is responsible for notifying the Firm of his/her change of personal circumstances."
        },
        amtClient54:{
            zh:"根据 SCB 规则与条例，客户类别将确定提供给客户的保护级别。本公司将在同意重新分类申请之前，以书面方式通知客户他们丧失的某些监管保护。",
            en:"The type of client category will determine the level of protection afforded to the client under SCB Rule and Regulations. The Firm will notify the Client in writing to inform them of their loss of certain regulatory protections prior to agreeing a re- categorisation request.",
            vi:"Loại danh mục khách hàng sẽ xác định mức độ bảo vệ dành cho khách hàng theo Quy tắc và Quy định của SCB. Công ty sẽ thông báo cho Khách hàng bằng văn bản để thông báo cho họ về việc họ bị mất một số quy định bảo vệ trước khi đồng ý yêu cầu phân loại lại.",
            "zh-Hant":"根據 SCB 規則與條例，客戶類別將確定提供給客戶的保護級別。本公司將在同意重新分類申請之前，以書面方式通知客戶他們喪失的某些監管保護。",
            id:"The type of client category will determine the level of protection afforded to the client under SCB Rule and Regulations. The Firm will notify the Client in writing to inform them of their loss of certain regulatory protections prior to agreeing a re- categorisation request."
        },
        amtClient55:{
            zh:"2.客户受到客户分类通知的约束。更多详情可在线查询，网址：http://global.tigerwit.com。",
            en:"2.The client is bound by the Client Categorization Notice. Further details are available online at http://global.tigerwit.com.",
            vi:"2.Khách hàng bị ràng buộc bởi Thông báo Phân loại Khách hàng. Thông tin chi tiết có được trình bày trực tuyến tại http://global.tigerwit.com.",
            "zh-Hant":"2.客戶受到客戶分類通知的約束。更多詳情可在線查詢，網址：http://global.tigerwit.com。",
            id:"2.The client is bound by the Client Categorization Notice. Further details are available online at http://global.tigerwit.com."
        },
        amtClient56:{
            zh:"身份",
            en:"Capacity",
            vi:"Khả năng",
            "zh-Hant":"身份",
            id:"Capacity"
        },
        amtClient57:{
            zh:"1.TigerWit 将一直担任客户参与所有交易的做市商。",
            en:"1.TigerWit shall act, at all times, as principal for all trades entered into by a client.",
            vi:"1.TigerWit sẽ hành động, tại mọi thời điểm, như là một nhà điều hành cho tất cả các giao dịch được khách hàng tham gia vào.",
            "zh-Hant":"1.TigerWit 將壹直擔任客戶參與所有交易的做市商。",
            id:"1.TigerWit shall act, at all times, as principal for all trades entered into by a client."
        },
        amtClient58:{
            zh:"任何通过客户个人交易账户在线接收或通过电话接收、确认客户个人交易账号的指令都将被视为由客户传达。本公司无需确认该指令的真实性或传达该指令之人士的身份。由于第三方未经授权以客户名义发出的指令所造成的任何损失，本公司对此概不负责。",
            en:"Any instruction received online through a client's personal trading account or by telephone confirming a client's personal trading account number, will be deemed to be communicated by the client. The Firm is not required to confirm the authenticity of the instruction or the identity of the person communicating the instruction. The Firm shall not be liable for any loss arising from an instruction sent by a third party unauthorised to act on the client's behalf.",
            vi:"Bất kỳ hướng dẫn nào nhận được qua internet từ tài khoản giao dịch cá nhân của khách hàng hoặc qua điện thoại xác nhận số tài khoản giao dịch cá nhân của khách hàng, sẽ được coi là được giao tiếp bởi khách hàng. Công ty không bắt buộc phải xác nhận tính xác thực của hướng dẫn hoặc danh tính của người truyền đạt hướng dẫn. Công ty sẽ không chịu trách nhiệm pháp lý đối với bất kỳ tổn thất nào phát sinh từ lệnh được gửi bởi bên thứ ba trái phép để hành động thay mặt khách hàng.",
            "zh-Hant":"任何通過客戶個人交易賬戶在線接收或通過電話接收、確認客戶個人交易賬號的指令都將被視為由客戶傳達。本公司無需確認該指令的真實性或傳達該指令之人士的身份。由於第三方未經授權以客戶名義發出的指令所造成的任何損失，本公司對此概不負責。",
            id:"Any instruction received online through a client's personal trading account or by telephone confirming a client's personal trading account number, will be deemed to be communicated by the client. The Firm is not required to confirm the authenticity of the instruction or the identity of the person communicating the instruction. The Firm shall not be liable for any loss arising from an instruction sent by a third party unauthorised to act on the client's behalf."
        },
        amtClient59:{
            zh:"除非另有特别约定，本公司不接受授权代表作为客户。但授权代表可以代表客户向本公司发出交易指令。",
            en:"The Firm does not accept an authorised representative as a client, unless specifically agreed otherwise. However, the authorised representative may give trading instructions to the Firm on the client’s behalf.",
            vi:"Công ty không chấp nhận người đại diện được ủy quyền làm khách hàng, trừ khi có thỏa thuận cụ thể khác. Tuy nhiên, đại diện được ủy quyền có thể cung cấp hướng dẫn giao dịch cho Công ty thay mặt khách hàng.",
            "zh-Hant":"除非另有特別約定，本公司不接受授權代表作為客戶。但授權代表可以代表客戶向本公司發出交易指令。",
            id:"The Firm does not accept an authorised representative as a client, unless specifically agreed otherwise. However, the authorised representative may give trading instructions to the Firm on the client’s behalf."
        },
        amtClient60:{
            zh:"客户授权 TigerWit 以客户发出的任何指令为依据和/或按此行事，而无需本公司一方确认该指令的真实性或确认传达该指令人员的身份。",
            en:"The client authorises TigerWit to rely and/ or act on any instructions sent by the former, without the need on the Firm’s part for confirming the authenticity of the instruction or the identity of the person communicating the instruction.",
            vi:"Khách hàng ủy quyền cho TigerWit dựa vào và / hoặc hành động theo bất kỳ hướng dẫn nào được gửi bởi khách hàng, mà không cần Công ty xác nhận tính xác thực của hướng dẫn hoặc danh tính của người truyền đạt hướng dẫn.",
            "zh-Hant":"客戶授權 TigerWit 以客戶發出的任何指令為依據和/或按此行事，而無需本公司壹方確認該指令的真實性或確認傳達該指令人員的身份。",
            id:"The client authorises TigerWit to rely and/ or act on any instructions sent by the former, without the need on the Firm’s part for confirming the authenticity of the instruction or the identity of the person communicating the instruction."
        },
        amtClient61:{
            zh:"保证与担保",
            en:"Assurances and Guarantees",
            vi:"Bảo đảm và Bảo vệ",
            "zh-Hant":"保證與擔保",
            id:"Assurances and Guarantees"
        },
        amtClient62:{
            zh:"1.客户保证并担保：",
            en:"1.The client assures and guarantees that: ",
            vi:"1.Khách hàng chắc chắn và đảm bảo rằng: ",
            "zh-Hant":"1.客戶保證並擔保：",
            id:"1.The client assures and guarantees that: "
        },
        amtClient63:{
            zh:"根据下文第 10.1 条，该资金属于客户本人，不存在任何留置权、抵押、质押或其他产权负担；",
            en:"the Funds, according to clause 10.1 below, belong to the client and are free of any lien, charge, pledge or other encumbrance;",
            vi:"các Quỹ, theo khoản 10.1 dưới đây, thuộc về khách hàng và không có bất kỳ khoản phí, khoản phí, cam kết hoặc các trường hợp nào khác;",
            "zh-Hant":"根據下文第 10.1 條，該資金屬於客戶本人，不存在任何留置權、抵押、質押或其他產權負擔；",
            id:"the Funds, according to clause 10.1 below, belong to the client and are free of any lien, charge, pledge or other encumbrance;"
        },
        amtClient64:{
            zh:"根据下文第 10.1 条，该资金并非任何非法作为或不作为的直接或间接收益，亦非任何犯罪活动的产物；以及",
            en:"the Funds, according to clause 10.1 below, are not the direct or indirect proceeds of any illegal act or omission or product of any criminal activity; and",
            vi:"các Quỹ, theo khoản 10.1 dưới đây, không phải là tiền thu được trực tiếp hoặc gián tiếp của bất kỳ hành động hoặc thiếu sót bất hợp pháp hoặc sản phẩm của bất kỳ hoạt động tội phạm nào; và",
            "zh-Hant":"根據下文第 10.1 條，該資金並非任何非法作為或不作為的直接或間接收益，亦非任何犯罪活動的產物；以及",
            id:"the Funds, according to clause 10.1 below, are not the direct or indirect proceeds of any illegal act or omission or product of any criminal activity; and"
        },
        amtClient65:{
            zh:"客户代表其自身行事，并非第三方的代表或受托人，客户向本公司出具其信纳的文件规定相反的情况除外。",
            en:"he/she acts for his/herself and is not a representative or trustee of a third person, unless he/she produces to the satisfaction of the Firm documents to the contrary.",
            vi:"anh ta / cô ta hành động cho chính mình và không phải là người đại diện hoặc người được ủy thác của một người thứ ba, trừ khi anh ta / cô ta đáp ứng các yêu cầu tài liệu Công ty và ngược lại.",
            "zh-Hant":"客戶代表其自身行事，並非第三方的代表或受托人，客戶向本公司出具其信納的文件規定相反的情況除外。",
            id:"he/she acts for his/herself and is not a representative or trustee of a third person, unless he/she produces to the satisfaction of the Firm documents to the contrary."
        },
        amtClient66:{
            zh:"2.客户保证在(i)开户过程中以及(ii)交易账户存续期间发送给 TigerWit 的所有文件的真实性和有效性。",
            en:"The client guarantees the authenticity and validity of any document sent to TigerWit during (i) the account opening process and (ii) the life of the trading account.",
            vi:"2.Khách hàng đảm bảo tính xác thực và hiệu lực của bất kỳ tài liệu nào được gửi đến TigerWit trong (i) quy trình mở tài khoản và (ii) thời hạn sử dụng tài khoản giao dịch.",
            "zh-Hant":"2.客戶保證在(i)開戶過程中以及(ii)交易賬戶存續期間發送給 TigerWit 的所有文件的真實性和有效性。",
            id:"The client guarantees the authenticity and validity of any document sent to TigerWit during (i) the account opening process and (ii) the life of the trading account."
        },
        amtClient67:{
            zh:"客户资金",
            en:"Client Money",
            vi:"Tiền của Khách hàng",
            "zh-Hant":"客戶資金",
            id:"Client Money"
        },
        amtClient68:{
            zh:"1.除非另有说明，TigerWit 将客户资金存入巴哈马群岛境内或境外某一机构持有的一个或多个独立账户中，与本公司资金区分；这意味着客户资金将视为属于客户本人，在任何情况下本公司都不得在任何时候使用客户资金以履行其任何义务。客户资金将与属于其他客户的资金合并，因此一旦发生破产，个人客户无法就具体账户中的特定金额提出索赔。客户将针对整个客户资金池提出索赔。请留意，应根据适用的规则与条例开立、管理并运营独立账户。TigerWit 将向银行机构发出客户资金转账及转移的有关指令。如果客户有未平仓头寸，则本公司有权随时且在本公司自由裁量决定下，抵消本公司所持任何客户名下由于未平仓头寸而对客户资金产生的任何未变现亏损。实际上即表示，根据上述条件，本公司可以将未变现亏损的任何部分从投资级别机构转至 TigerWit 的账户。与此同时，TigerWit 可能会将未平仓头寸产生的任何未变现盈利从本公司账户转至投资级别机构持有的客户资金账户。",
            en:"1.Unless otherwise indicated, TigerWit will deposit any Client Money in one or more segregated account(s) held with an institution within or outside The Bahamas, separated from the Firm’s money; this means that Client Money is treated as belonging to the Client and under no circumstances the Firm will use Client Money, at any time, to meet any of its obligations. The Client Money will be pooled with money belonging to other Clients so an individual Client will not have a claim against a specific sum in a specific account, in the event of insolvency. A Client’s claim will be against the Client Money pool in general. It should be noted, that segregated account(s) will be established, maintained and operated according to the applicable rules and regulations. TigerWit will give instructions to the banking institution(s) regarding the transfer and movement(s) of the Client Money. If the Client has an Open Position the Firm reserves the right, at any time and at the Firm’s sole discretion, to set-off any unrealised losses incurred in respect of an Open Position against any of the Client Money that is held by the Firm to the Client’s credit. In effect, this means that the Firm based on the conditions referred to above may transfer any part of any unrealised losses from an investment-grade institution to an account of TigerWit. At the same time, TigerWit may transfer any unrealised profit incurred as a result of an Open Position from a Firm account to a Client Money account held in an investment- grade institution.",
            vi:"1.Trừ khi có quy định khác, TigerWit sẽ gửi bất kỳ khoản tiền nào của Khách hàng vào một hoặc nhiều (các) tài khoản tách biệt được tổ chức với một tổ chức trong hoặc ngoài Bahamas, tách biệt với tiền của Công ty; điều này có nghĩa là tiền của Khách hàng được coi là thuộc về Khách hàng và trong mọi trường hợp, Công ty sẽ sử dụng Tiền của Khách hàng, bất kỳ lúc nào, để đáp ứng mọi nghĩa vụ của mình.",
            "zh-Hant":"1.除非另有說明，TigerWit 將客戶資金存入巴哈馬群島境內或境外某壹機構持有的壹個或多個獨立賬戶中，與本公司資金區分；這意味著客戶資金將視為屬於客戶本人，在任何情況下本公司都不得在任何時候使用客戶資金以履行其任何義務。客戶資金將與屬於其他客戶的資金合並，因此壹旦發生破產，個人客戶無法就具體賬戶中的特定金額提出索賠。客戶將針對整個客戶資金池提出索賠。請留意，應根據適用的規則與條例開立、管理並運營獨立賬戶。TigerWit 將向銀行機構發出客戶資金轉賬及轉移的有關指令。如果客戶有未平倉頭寸，則本公司有權隨時且在本公司自由裁量決定下，抵消本公司所持任何客戶名下由於未平倉頭寸而對客戶資金產生的任何未變現虧損。實際上即表示，根據上述條件，本公司可以將未變現虧損的任何部分從投資級別機構轉至 TigerWit 的賬戶。與此同時，TigerWit 可能會將未平倉頭寸產生的任何未變現盈利從本公司賬戶轉至投資級別機構持有的客戶資金賬戶。",
            id:"1.Unless otherwise indicated, TigerWit will deposit any Client Money in one or more segregated account(s) held with an institution within or outside The Bahamas, separated from the Firm’s money; this means that Client Money is treated as belonging to the Client and under no circumstances the Firm will use Client Money, at any time, to meet any of its obligations. The Client Money will be pooled with money belonging to other Clients so an individual Client will not have a claim against a specific sum in a specific account, in the event of insolvency. A Client’s claim will be against the Client Money pool in general. It should be noted, that segregated account(s) will be established, maintained and operated according to the applicable rules and regulations. TigerWit will give instructions to the banking institution(s) regarding the transfer and movement(s) of the Client Money. If the Client has an Open Position the Firm reserves the right, at any time and at the Firm’s sole discretion, to set-off any unrealised losses incurred in respect of an Open Position against any of the Client Money that is held by the Firm to the Client’s credit. In effect, this means that the Firm based on the conditions referred to above may transfer any part of any unrealised losses from an investment-grade institution to an account of TigerWit. At the same time, TigerWit may transfer any unrealised profit incurred as a result of an Open Position from a Firm account to a Client Money account held in an investment- grade institution."
        },
        amtClient69:{
            zh:"2.巴哈马群岛境外持有的客户资金可能受该地区管辖，相应地，客户权利有所不同。TigerWit 对持有客户资金的任何银行机构的偿付能力、作为或不作为概不负责。但 TigerWit 将运用一切适当技能、谨慎勤勉地对客户资金存入机构进行选择、任用和定期审核。",
            en:"2.Client Money held outside The Bahamas may be subject to the jurisdiction of that territory and client rights may differ accordingly. TigerWit shall not be responsible for the solvency, act(s) or omission(s) of any banking institution with which Client Money is held. However, TigerWit will exercise all due skill, care and diligence in the selection, appointment and periodic review of the institution where the Client Money is deposited.",
            vi:"2.Tiền Khách Hàng được giữ bên ngoài Bahamas có thể phải chịu sự quản lý của lãnh thổ đó và quyền của khách hàng có thể khác nhau theo đó. TigerWit sẽ không chịu trách nhiệm về khả năng thanh toán, hành động hoặc thiếu sót của bất kỳ tổ chức ngân hàng nào mà Khách hàng được giữ tiền. Tuy nhiên, TigerWit sẽ thực hiện tất cả các chức năng, chăm sóc và nỗ lực trong việc lựa chọn, bổ nhiệm và đánh giá định kỳ của tổ chức nơi mà tiền gửi của khách hàng được gửi.",
            "zh-Hant":"2.巴哈馬群島境外持有的客戶資金可能受該地區管轄，相應地，客戶權利有所不同。TigerWit 對持有客戶資金的任何銀行機構的償付能力、作為或不作為概不負責。但 TigerWit 將運用壹切適當技能、謹慎勤勉地對客戶資金存入機構進行選擇、任用和定期審核。",
            id:"2.Client Money held outside The Bahamas may be subject to the jurisdiction of that territory and client rights may differ accordingly. TigerWit shall not be responsible for the solvency, act(s) or omission(s) of any banking institution with which Client Money is held. However, TigerWit will exercise all due skill, care and diligence in the selection, appointment and periodic review of the institution where the Client Money is deposited."
        },
        amtClient70:{
            zh:"3.TigerWit 没有义务向客户支付存入资金的利息。",
            en:"3.TigerWit is not obliged to pay interest to the client for the Funds deposited.",
            vi:"3.TigerWit không bắt buộc phải trả lãi cho khách hàng đối với các khoản Quỹ tiền gửi.",
            "zh-Hant":"3.TigerWit 沒有義務向客戶支付存入資金的利息。",
            id:"3.TigerWit is not obliged to pay interest to the client for the Funds deposited."
        },
        amtClient71:{
            zh:"4.未经客户许可，TigerWit 可以不时地对客户名下不同交易账户持有的资金进行合并。在任何情况下都不表示客户有权享有信贷融通。",
            en:"4.TigerWit may, from time to time, without the client’s permission merge the Funds held in different trading accounts under the client’s name. Under no circumstances does this imply that the client has the right to a credit facility.",
            vi:"4.TigerWit có thể, bất cứ khi nào mà không có sự cho phép của khách hàng, cho phép việc sát nhập các Quỹ được giữ trong các tài khoản giao dịch khác nhau dưới tên của khách hàng. Trong mọi trường hợp, điều này có nghĩa là khách hàng có quyền có một cơ sở tín dụng.",
            "zh-Hant":"4.未經客戶許可，TigerWit 可以不時地對客戶名下不同交易賬戶持有的資金進行合並。在任何情況下都不表示客戶有權享有信貸融通。",
            id:"4.TigerWit may, from time to time, without the client’s permission merge the Funds held in different trading accounts under the client’s name. Under no circumstances does this imply that the client has the right to a credit facility."
        },
        amtClient72:{
            zh:"5.在有可用资金的前提下，客户有权随时提取相关交易账户当中等于自由保证金资金的任何部分。",
            en:"5.The client has the right to withdraw to their vault, any part of the Funds equal to the free margin that is available in the relevant trading account, at any time, provided that there are Funds available.",
            vi:"5.Khách hàng có quyền rút tiền vào kho (vault) của họ, bất kỳ phần nào của Quỹ bằng với số tiền có thể đặt lệnh (free margin) có sẵn trong tài khoản giao dịch liên quan, bất kỳ lúc nào, miễn là trong Quỹ có sẵn.",
            "zh-Hant":"5.在有可用資金的前提下，客戶有權隨時提取相關交易賬戶當中等於自由保證金資金的任何部分。",
            id:"5.The client has the right to withdraw to their vault, any part of the Funds equal to the free margin that is available in the relevant trading account, at any time, provided that there are Funds available."
        },
        amtClient73:{
            zh:"6.客户同意，资金应在机构收到资金的起息日当天记入客户的资金库。存入客户交易账户的资金应扣除资金持有机构（或涉及该过程的中间人）向 TigerWit征收的或由 TigerWit 产生的任何转账费用或其他费用。",
            en:"6.The client accepts that the Funds shall be credited in his/her vault on value date on which the Funds are received by the Institution. The Funds deposited in a client's trading account shall be net of any transfer fees or other charges incurred by or charged to TigerWit that are imposed by the Institution (or intermediary involved in the process) that holds the Funds.",
            vi:"6.Khách hàng chấp nhận rằng Quỹ sẽ được ghi có vào kho tiền của mình vào ngày giá trị mà Quỹ nhận được từ Tổ chức.",
            "zh-Hant":"6.客戶同意，資金應在機構收到資金的起息日當天記入客戶的資金庫。存入客戶交易賬戶的資金應扣除資金持有機構（或涉及該過程的中間人）向 TigerWit征收的或由 TigerWit 產生的任何轉賬費用或其他費用。",
            id:"6.The client accepts that the Funds shall be credited in his/her vault on value date on which the Funds are received by the Institution. The Funds deposited in a client's trading account shall be net of any transfer fees or other charges incurred by or charged to TigerWit that are imposed by the Institution (or intermediary involved in the process) that holds the Funds."
        },
        amtClient74:{
            zh:"7.客户同意，只有当公司信纳资金已经由客户或其授权代表转出时，资金才能计入客户的资金库中。倘若本公司有合理理由相信资金由授权代表以外的第三方转出，则本公司有权拒收该资金并退还至汇款人处，需要扣除任何手续费或产生的其他费用。",
            en:"7.The client accepts that the Funds shall be credited in his/her vault only if the Firm is satisfied that the Funds have been sent by the client or his/her authorised representative. Where the Firm has reasonable grounds to believe that the Funds have been sent by a third party other than an authorised representative, the Firm has the right to reject the Funds and return them to the remitter’s source, net of any fees or other charges incurred.",
            vi:"7.Khách hàng chấp nhận rằng Quỹ chỉ được ghi có trong kho tiền của mình nếu Công ty hài lòng rằng Quỹ đã được khách hàng hoặc đại diện được ủy quyền của họ gửi. Trường hợp Công ty có cơ sở hợp lý để tin rằng Quỹ đã được gửi bởi bên thứ ba không phải là đại diện được ủy quyền, Công ty có quyền từ chối Quỹ và trả lại cho nguồn của người gửi, và bất kỳ khoản phí nào hoặc các khoản phí khác phát sinh.",
            "zh-Hant":"7.客戶同意，只有當公司信納資金已經由客戶或其授權代表轉出時，資金才能計入客戶的資金庫中。倘若本公司有合理理由相信資金由授權代表以外的第三方轉出，則本公司有權拒收該資金並退還至匯款人處，需要扣除任何手續費或產生的其他費用。",
            id:"7.The client accepts that the Funds shall be credited in his/her vault only if the Firm is satisfied that the Funds have been sent by the client or his/her authorised representative. Where the Firm has reasonable grounds to believe that the Funds have been sent by a third party other than an authorised representative, the Firm has the right to reject the Funds and return them to the remitter’s source, net of any fees or other charges incurred."
        },
        amtClient75:{
            zh:"8.客户同意，任何资金的提取应按照本公司最初接收资金所使用的同一汇款人和相同转账方式完成。在此情况下，TigerWit 应按要求退还扣除任何转账费用或其他扣费的资金。",
            en:"8.The client accepts that withdrawal of any part of the Funds shall be concluded using the same transfer method and the same remitter as the one from which the Firm originally received the Funds. Under such circumstances, TigerWit shall return the Funds requested net of any transfer fees or other charges incurred.",
            vi:"8.Khách hàng chấp nhận việc rút tiền của bất kỳ phần nào của Quỹ sẽ được hoàn thành bằng cách sử dụng cùng một phương thức chuyển tiền và cùng một người gửi tiền như công ty mà Công ty đã nhận được khoản tiền ban đầu. Trong những trường hợp như vậy, TigerWit sẽ trả lại cho các Quỹ số tiền đã được yêu cầu cho bất kỳ khoản phí chuyển khoản nào hoặc các khoản phí khác phát sinh.",
            "zh-Hant":"8.客戶同意，任何資金的提取應按照本公司最初接收資金所使用的同壹匯款人和相同轉賬方式完成。在此情況下，TigerWit 應按要求退還扣除任何轉賬費用或其他扣費的資金。",
            id:"8.The client accepts that withdrawal of any part of the Funds shall be concluded using the same transfer method and the same remitter as the one from which the Firm originally received the Funds. Under such circumstances, TigerWit shall return the Funds requested net of any transfer fees or other charges incurred."
        },
        amtClient76:{
            zh:"9.TigerWit 有权拒绝客户要求的使用特定转账方式的提款并有权提出替代方案。",
            en:"9.TigerWit reserves the right to decline a withdrawal that the client requested using a specific transfer method and has the right to suggest an alternative.",
            vi:"9.TigerWit có quyền từ chối lệnh rút tiền mà khách hàng đã yêu cầu sử dụng một phương thức chuyển khoản cụ thể và có quyền đề xuất phương án thay thế.",
            "zh-Hant":"9.TigerWit 有權拒絕客戶要求的使用特定轉賬方式的提款並有權提出替代方案。",
            id:"9.TigerWit reserves the right to decline a withdrawal that the client requested using a specific transfer method and has the right to suggest an alternative."
        },
        amtClient77:{
            zh:"10.如果 TigerWit 在任何时候对客户由于提款/存款所提供的文件不满意，则本公司有权将资金按原路退回，并扣除任何手续费或产生的其他费用。",
            en:"10.If, at any time, TigerWit is not satisfied with the documentation provided by the client in relation to a withdrawal/deposit, the Firm reserves the right to reverse the Funds to the source from where the funds where sent, net of any fees or other charges incurred.",
            vi:"10.Nếu bất kỳ lúc nào, TigerWit không chấp nhận tài liệu được khách hàng cung cấp liên quan đến việc rút tiền / gửi tiền, Công ty bảo lưu quyền chuyển ngược tiền trong Quỹ, các khoản phí và lệ phí khác có thể phát sinh về nguồn tiền gửi.",
            "zh-Hant":"10.如果 TigerWit 在任何時候對客戶由於提款/存款所提供的文件不滿意，則本公司有權將資金按原路退回，並扣除任何手續費或產生的其他費用。",
            id:"10.If, at any time, TigerWit is not satisfied with the documentation provided by the client in relation to a withdrawal/deposit, the Firm reserves the right to reverse the Funds to the source from where the funds where sent, net of any fees or other charges incurred."
        },
        amtClient78:{
            zh:"11.客户同意，机构可能出于任何原因退回资金。因此，本公司应立即将相应金额从交易账户中按原路退回，并扣除任何手续费或产生的其他费用。客户同意，这可能导致交易账户余额为负数。在此情况下，本公司可以如前文第 10.4 条所述合并不同交易账户中所持的资金。",
            en:"11.The client accepts that the Institution may reverse the Funds for any reason. As a result, the Firm shall immediately reverse the respective amount from the trading account to the source from where the Funds were sent, net of any fees or other charges incurred. The client accepts that this may result to a negative balance in the trading account. Under such circumstances, the Firm may merge the Funds held in different trading accounts as described in clause 10.4 above.",
            vi:"11.Khách hàng chấp nhận rằng Tổ chức có thể đảo ngược Quỹ vì bất kỳ lý do gì. Do đó, Công ty sẽ ngay lập tức đảo ngược số tiền tương ứng từ tài khoản giao dịch đến nguồn từ nơi mà các khoản tiền đã được gửi đi, bất kỳ khoản phí nào hoặc các khoản phí khác phát sinh. Khách hàng chấp nhận rằng điều này có thể dẫn đến số dư trở thành âm trong tài khoản giao dịch. Trong những trường hợp như vậy, Công ty có thể hợp nhất các Quỹ được nắm giữ trong các tài khoản giao dịch khác nhau như được mô tả trong điều 10.4 nêu trên.",
            "zh-Hant":"11.客戶同意，機構可能出於任何原因退回資金。因此，本公司應立即將相應金額從交易賬戶中按原路退回，並扣除任何手續費或產生的其他費用。客戶同意，這可能導致交易賬戶余額為負數。在此情況下，本公司可以如前文第 10.4 條所述合並不同交易賬戶中所持的資金。",
            id:"11.The client accepts that the Institution may reverse the Funds for any reason. As a result, the Firm shall immediately reverse the respective amount from the trading account to the source from where the Funds were sent, net of any fees or other charges incurred. The client accepts that this may result to a negative balance in the trading account. Under such circumstances, the Firm may merge the Funds held in different trading accounts as described in clause 10.4 above."
        },
        amtClient79:{
            zh:"12.客户同意，有关交易账户管理的任何申请 应 通 过 TigerWit 的 应 用 程 序 或 网 站(http://global.tigerwit.com)提出。",
            en:"12.The client accepts that any requests in relation to the administration of the trading account shall be made through TigerWit’s app or website (http://global.tigerwit.com).",
            vi:"12. Khách hàng chấp nhận rằng bất kỳ yêu cầu nào liên quan đến việc quản lý tài khoản giao dịch sẽ được thực hiện thông qua ứng dụng hoặc trang web của TigerWit (http://global.tigerwit.com).",
            "zh-Hant":"12.客戶同意，有關交易賬戶管理的任何申請 應 通 過 TigerWit 的 應 用 程 序 或 網 站(http://global.tigerwit.com)提出。",
            id:"12.The client accepts that any requests in relation to the administration of the trading account shall be made through TigerWit’s app or website (http://global.tigerwit.com)."
        },
        amtClient80:{
            zh:"13.TigerWit 应采取一切合理措施，确保客户已知晓“客户资金”章节中提及的任何申请进度，尤其是预期的处理时间以及是否需要任何或更多的文件（如缺少文件可能会延长处理时间）。",
            en:"13.TigerWit shall take all reasonable steps to ensure that the client is informed regarding the progress of any requests referred to in the ‘Client Money’ section, specifically in relation to the expected processing time and the need for any, or any further, documentation that if not in place may delay the processing.",
            vi:"13.TigerWit sẽ thực hiện tất cả các bước hợp lý để đảm bảo rằng khách hàng được thông báo về tiến độ của bất kỳ yêu cầu nào được đề cập trong phần Tiền Khách hàng , cụ thể liên quan đến thời gian xử lý dự kiến và nhu cầu cho bất kỳ hoặc bất kỳ tài liệu nào khác tại chỗ có thể trì hoãn việc xử lý.",
            "zh-Hant":"13.TigerWit 應采取壹切合理措施，確保客戶已知曉“客戶資金”章節中提及的任何申請進度，尤其是預期的處理時間以及是否需要任何或更多的文件（如缺少文件可能會延長處理時間）。",
            id:"13.TigerWit shall take all reasonable steps to ensure that the client is informed regarding the progress of any requests referred to in the ‘Client Money’ section, specifically in relation to the expected processing time and the need for any, or any further, documentation that if not in place may delay the processing."
        },
        amtClient81:{
            zh:"14.无论何时，一旦客户交易账户中的资金不足 15 美元（或等值外币），则 TigerWit 有权在通知相关客户后关闭该交易账户。",
            en:"14.If at any time the client’s trading account has Funds of less than USD 15 (or currency equivalent), TigerWit reserves the right to close the trading account, after notifying the client accordingly.",
            vi:"14.Nếu bất kỳ lúc nào tài khoản giao dịch của khách hàng có Quỹ dưới 15 USD (hoặc số tiền tương đương), TigerWit có quyền đóng tài khoản giao dịch, sau khi thông báo cho khách hàng tương ứng.",
            "zh-Hant":"14.無論何時，壹旦客戶交易賬戶中的資金不足 15 美元（或等值外幣），則 TigerWit 有權在通知相關客戶後關閉該交易賬戶。",
            id:"14.If at any time the client’s trading account has Funds of less than USD 15 (or currency equivalent), TigerWit reserves the right to close the trading account, after notifying the client accordingly."
        },
        amtClient82:{
            zh:"15.在以下情况下，本公司有权关闭客户资金余额无人提取的账户以及从独立客户银行账户中释放任何客户资金余额的账户：",
            en:"15.The Firm reserves the right to close an account in connection with an unclaimed client money balance and releasing any client money balances from segregated client bank accounts if: ",
            vi:"15.Công ty có quyền đóng tài khoản liên quan đến số dư tiền của khách hàng chưa được xác nhận và giải phóng số dư tiền của khách hàng từ các tài khoản ngân hàng khách hàng tách biệt nếu: ",
            "zh-Hant":"15.在以下情況下，本公司有權關閉客戶資金余額無人提取的賬戶以及從獨立客戶銀行賬戶中釋放任何客戶資金余額的賬戶：",
            id:"15.The Firm reserves the right to close an account in connection with an unclaimed client money balance and releasing any client money balances from segregated client bank accounts if: "
        },
        amtClient83:{
            zh:"客户账户中的余额六年内未发生变化；以及",
            en:"there has been no movement on the client's balance for a period of six years; and",
            vi:"không có biến động trên số dư của khách hàng trong khoảng thời gian sáu năm; và",
            "zh-Hant":"客戶賬戶中的余額六年內未發生變化；以及",
            id:"there has been no movement on the client's balance for a period of six years; and"
        },
        amtClient84:{
            zh:"本公司已发送书面通知至客户的最后所知地址，告知客户本公司不再将账户余额视为客户资金的意图，并给予客户 28 天时间提出索赔。",
            en:"the Firm has sent written notice to the client at the last known address informing the client of the Firm's intention of no longer treating that balance as client money, and giving the client 28 days to make a claim.",
            vi:"Công ty đã gửi thông báo bằng văn bản cho khách hàng tại địa chỉ được biết mới nhất để thông báo cho khách hàng về ý định của Công ty không còn xử lý số dư đó làm tiền của khách hàng và cho phép 28 ngày để khách hàng gửi yêu cầu rút tiền.",
            "zh-Hant":"本公司已發送書面通知至客戶的最後所知地址，告知客戶本公司不再將賬戶余額視為客戶資金的意圖，並給予客戶 28 天時間提出索賠。",
            id:"the Firm has sent written notice to the client at the last known address informing the client of the Firm's intention of no longer treating that balance as client money, and giving the client 28 days to make a claim."
        },
        amtClient85:{
            zh:"16.客户可以通过公司官方网站了解入金/出金的处理时间。",
            en:"16.The client can be informed about the processing times for deposit/withdrawals through the Firm’s official website.",
            vi:"16.Khách hàng có thể được thông báo về thời gian xử lý để gửi / rút tiền thông qua trang web chính thức của Công ty.",
            "zh-Hant":"16.客戶可以通過公司官方網站了解入金/出金的處理時間。",
            id:"16.The client can be informed about the processing times for deposit/withdrawals through the Firm’s official website."
        },
        amtClient86:{
            zh:"17.TigerWit 保留要求客户提供额外信息和/或文件的权利，以确定客户自己的入金/出金申请合法，并且有权拒绝其视为不合法的此类申请。此外客户认同，在此情况下此类申请的处理可能会有延迟。",
            en:"17.TigerWit reserves the right to request additional information and/or documentation to satisfy itself that the client’s requests concerning his/her deposits/withdrawals are legitimate, and reserves the right to reject such requests if it deems it illegitimate. Furthermore, the client accepts that under such circumstances there may be a delay in processing these requests.",
            vi:"17.TigerWit có quyền yêu cầu thông tin và / hoặc tài liệu bổ sung để đáp ứng yêu cầu của khách hàng liên quan đến tiền gửi / rút tiền của mình là hợp pháp và có quyền từ chối các yêu cầu đó nếu có dấu hiệu bất hợp pháp. Hơn nữa, khách hàng chấp nhận rằng trong những trường hợp như vậy có thể có sự chậm trễ trong việc xử lý các yêu cầu này.",
            "zh-Hant":"17.TigerWit 保留要求客戶提供額外信息和/或文件的權利，以確定客戶自己的入金/出金申請合法，並且有權拒絕其視為不合法的此類申請。此外客戶認同，在此情況下此類申請的處理可能會有延遲。",
            id:"17.TigerWit reserves the right to request additional information and/or documentation to satisfy itself that the client’s requests concerning his/her deposits/withdrawals are legitimate, and reserves the right to reject such requests if it deems it illegitimate. Furthermore, the client accepts that under such circumstances there may be a delay in processing these requests."
        },
        amtClient87:{
            zh:"费用",
            en:"Charges",
            vi:"Phí",
            "zh-Hant":"費用",
            id:"Charges"
        },
        amtClient88:{
            zh:"1.如果客户的交易账户在一个日历年内都处于不活跃状态，TigerWit 有权收取 15 美元（或等值外币）的账户管理年费，以便保持该交易账户的开放状态。",
            en:"1.If the client’s trading account is inactive for a calendar year, TigerWit reserves the right to charge an annual account maintenance fee of USD 15 (or currency equivalent) in order to maintain the trading account open.",
            vi:"1.Nếu tài khoản giao dịch của khách hàng không hoạt động trong một năm theo dương lịch, TigerWit có quyền tính phí duy trì tài khoản hàng năm là 15 USD (hoặc số tiền tương đương) để duy trì tài khoản giao dịch được thực hiện.",
            "zh-Hant":"1.如果客戶的交易賬戶在壹個日歷年內都處於不活躍狀態，TigerWit 有權收取 15 美元（或等值外幣）的賬戶管理年費，以便保持該交易賬戶的開放狀態。",
            id:"1.If the client’s trading account is inactive for a calendar year, TigerWit reserves the right to charge an annual account maintenance fee of USD 15 (or currency equivalent) in order to maintain the trading account open."
        },
        amtClient89:{
            zh:"2.客户在进行差价合约交易之前须先考虑任何适用的费用，如点差、佣金及掉期。客户应自行要求本公司提供有关上述费用的解释说明（如需要）。",
            en:"2.Prior to trading CFDs the client needs to consider any applicable charges such as spreads, commissions and swaps. The client is solely responsible for requiring clarifications from the Firm in relation to the above, if necessary.",
            vi:"2.Trước khi giao dịch CFD, khách hàng cần cân nhắc mọi khoản phí áp dụng như spread, hoa hồng và swap. Khách hàng tự chịu trách nhiệm về việc yêu cầu làm rõ Công ty liên quan đến các điều trên, nếu cần.",
            "zh-Hant":"2.客戶在進行差價合約交易之前須先考慮任何適用的費用，如點差、傭金及掉期。客戶應自行要求本公司提供有關上述費用的解釋說明（如需要）。",
            id:"2.Prior to trading CFDs the client needs to consider any applicable charges such as spreads, commissions and swaps. The client is solely responsible for requiring clarifications from the Firm in relation to the above, if necessary."
        },
        amtClient90:{
            zh:"3.客户应留意，并非所有费用均以货币形式表示（例如，费用可能以差价合约价值的百分比表示）；因此，客户需要确保其理解百分比等同的金额。",
            en:"3.The client should note that not all charges are represented in monetary terms (for example, charges may appear as a percentage of the value of a CFD); therefore, the client needs to ensure that he/ she understands the amount that the percentage amounts to.",
            vi:"3.Khách hàng nên lưu ý rằng không phải tất cả các khoản phí đều được thể hiện bằng các điều khoản tiền tệ (ví dụ: các khoản phí có thể xuất hiện dưới dạng phần trăm giá trị của CFD); do đó, khách hàng cần đảm bảo rằng họ hiểu số tiền mà số phần tram thể hiện.",
            "zh-Hant":"3.客戶應留意，並非所有費用均以貨幣形式表示（例如，費用可能以差價合約價值的百分比表示）；因此，客戶需要確保其理解百分比等同的金額。",
            id:"3.The client should note that not all charges are represented in monetary terms (for example, charges may appear as a percentage of the value of a CFD); therefore, the client needs to ensure that he/ she understands the amount that the percentage amounts to."
        },
        amtClient91:{
            zh:"4.TigerWit 保留随时更改适用于客户的任何费用的权利，无须另行通知客户。最新信息可在线查询，网址：http://global.tigerwit.com。",
            en:"4.TigerWit reserves the right to change, from time to time, any of the charges applicable to the client without prior written notice. The latest information shall be found online at http://global.tigerwit.com.",
            vi:"4.TigerWit có quyền thay đổi, theo thời gian, bất kỳ khoản phí nào áp dụng cho khách hàng mà không cần thông báo trước bằng văn bản. Thông tin mới nhất sẽ được trình bày trên internet tại http://global.tigerwit.com.",
            "zh-Hant":"4.TigerWit 保留隨時更改適用於客戶的任何費用的權利，無須另行通知客戶。最新信息可在線查詢，網址：http://global.tigerwit.com。",
            id:"4.TigerWit reserves the right to change, from time to time, any of the charges applicable to the client without prior written notice. The latest information shall be found online at http://global.tigerwit.com."
        },
        amtClient92:{
            zh:"5.客户应留意，所有适用的费用将即时从其交易账户当中扣划。",
            en:"5.The client should note that any applicable charges shall be instantly deducted from his/her trading account.",
            vi:"5.Khách hàng cần lưu ý rằng mọi khoản phí áp dụng sẽ được khấu trừ ngay lập tức từ tài khoản giao dịch của họ.",
            "zh-Hant":"5.客戶應留意，所有適用的費用將即時從其交易賬戶當中扣劃。",
            id:"5.The client should note that any applicable charges shall be instantly deducted from his/her trading account."
        },
        amtClient93:{
            zh:"6.可在线了解适用的点差，包含 TigerWit的溢价（如适用），以及进行交易时收取的佣金，网址：http://global.tigerwit.com。",
            en:"6.The applicable spreads, including TigerWit’s mark-up, if applicable, and commissions charged when placing a trade are available online at http://global.tigerwit.com.",
            vi:"6.Các khoản spread áp dụng bao gồm lợi nhuận gộp (mark-up) của TigerWit, nếu có, và hoa hồng được tính khi đặt giao dịch được trình bày tại http://global.tigerwit.com.",
            "zh-Hant":"6.可在線了解適用的點差，包含 TigerWit的溢價（如適用），以及進行交易時收取的傭金，網址：http://global.tigerwit.com。",
            id:"6.The applicable spreads, including TigerWit’s mark-up, if applicable, and commissions charged when placing a trade are available online at http://global.tigerwit.com."
        },
        amtClient94:{
            zh:"7.掉期是指因持有的未平仓头寸过夜而增加或扣除的利息。",
            en:"7.The swap is the interest added or deducted for holding an open position overnight.",
            vi:"7.Swap là lãi suất được cộng hoặc được khấu trừ để giữ một vị thế mở qua đêm.",
            "zh-Hant":"7.掉期是指因持有的未平倉頭寸過夜而增加或扣除的利息。",
            id:"7.The swap is the interest added or deducted for holding an open position overnight."
        },
        amtClient95:{
            zh:"8.根据持仓量和交易中所涉及的货币对利率，客户可能被计入或扣除融资；在服务器时间 23:59 收取掉期费用，产生的金额自动转换为客户余额的货币。",
            en:"8.Depending on the position held and the interest rates of the currency pair involved in a transaction the client may either be credited debited with financing; the operation is conducted at 23:59 server time and the resulting amount is automatically converted into the client’s balance currency.",
            vi:"8.Tùy thuộc vào vị thế được giữ và lãi suất của cặp tiền tệ liên quan đến giao dịch mà khách hàng có thể được ghi có ghi nợ bằng tài chính; hoạt động được tiến hành vào lúc 23:59 thời gian máy chủ và số tiền kết quả được tự động chuyển đổi thành tiền tệ cân bằng của khách hàng.",
            "zh-Hant":"8.根據持倉量和交易中所涉及的貨幣對利率，客戶可能被計入或扣除融資；在服務器時間 23:59 收取掉期費用，產生的金額自動轉換為客戶余額的貨幣。",
            id:"8.Depending on the position held and the interest rates of the currency pair involved in a transaction the client may either be credited debited with financing; the operation is conducted at 23:59 server time and the resulting amount is automatically converted into the client’s balance currency."
        },
        amtClient96:{
            zh:"9.星期五至星期一收取掉期费用一次，星期三至星期四掉期费用按三倍收取。应当注意的 是 ， TigerWit 按 自 己 的 利 率 收 取 费 用 ；TigerWit 的转仓利率是以彭博(Bloomberg)提供的隔夜利率计算。本公司会按照其认为必要的频率更新此类利率。",
            en:"9.From Friday to Monday swap is charged once and from Wednesday to Thursday swap is charged in triple size. It should be noted that TigerWit charges its own interest; the rollover interest rates of TigerWit are based on the overnight rate provided by Bloomberg. The Firm updates such rate as often as it deems necessary.",
            vi:"9.Tùy thuộc vào vị thế được giữ và lãi suất của cặp tiền tệ liên quan đến giao dịch mà khách hàng có thể được ghi có ghi nợ bằng tài chính; hoạt động được tiến hành vào lúc 23:59 thời gian máy chủ và số tiền kết quả được tự động chuyển đổi thành tiền tệ cân bằng của khách hàng.",
            "zh-Hant":"9.星期五至星期壹收取掉期費用壹次，星期三至星期四掉期費用按三倍收取。應當註意的 是 ， TigerWit 按 自 己 的 利 率 收 取 費 用 ；TigerWit 的轉倉利率是以彭博(Bloomberg)提供的隔夜利率計算。本公司會按照其認為必要的頻率更新此類利率。",
            id:"9.From Friday to Monday swap is charged once and from Wednesday to Thursday swap is charged in triple size. It should be noted that TigerWit charges its own interest; the rollover interest rates of TigerWit are based on the overnight rate provided by Bloomberg. The Firm updates such rate as often as it deems necessary."
        },
        amtClient97:{
            zh:"10.有关掉期的更多详情可在以下网站查询http://global.tigerwit.com， 或联络公司的客户服务部。",
            en:"10.Further information regarding swaps can be found on http://global.tigerwit.com, or by contacting the firm’s Customer Support Department.",
            vi:"10.Bạn có thể tìm thêm thông tin về các phí swap giao dịch trên http://global.tigerwit.com hoặc bằng cách liên hệ với Bộ phận hỗ trợ khách hàng của công ty.",
            "zh-Hant":"10.有關掉期的更多詳情可在以下網站查詢http://global.tigerwit.com， 或聯絡公司的客戶服務部。",
            id:"10.Further information regarding swaps can be found on http://global.tigerwit.com, or by contacting the firm’s Customer Support Department."
        },
        amtClient98:{
            zh:"责任",
            en:"Liability",
            vi:"Trách nhiệm pháp lý",
            "zh-Hant":"責任",
            id:"Liability"
        },
        amtClient99:{
            zh:"1.TigerWit 在所有时候均应真诚执行客户的交易。",
            en:"1.TigerWit shall, at all times, conclude client’s transactions in good faith.",
            vi:"1.TigerWit sẽ luôn luôn quyết định giao dịch của khách hàng với thiện chí.",
            "zh-Hant":"1.TigerWit 在所有時候均應真誠執行客戶的交易。",
            id:"1.TigerWit shall, at all times, conclude client’s transactions in good faith."
        },
        amtClient100:{
            zh:"2.对于某自然人或法人向本公司提供有关客户金融工具交易的执行信息时的任何作为或不作为，TigerWit 概不负责，除非该作为或不作为是 TigerWit 方面的疏忽或欺诈造成的。",
            en:"2.TigerWit bears no responsibility for any acts or omissions concluded by either a natural or legal person that provides the Firm with information in relation to the execution of the client’s transactions in financial instruments, unless such acts or omissions were the result of negligence or fraud on behalf of TigerWit.",
            vi:"2.TigerWit không chịu trách nhiệm đối với bất kỳ hành vi hoặc thiếu sót nào được đưa ra bởi một người tự nhiên hoặc pháp nhân cung cấp cho Công ty thông tin liên quan đến việc thực hiện giao dịch của khách hàng trong các công cụ tài chính, trừ khi hành động hoặc thiếu sót đó là kết quả của sự sơ suất hoặc gian lận thay mặt cho TigerWit.",
            "zh-Hant":"2.對於某自然人或法人向本公司提供有關客戶金融工具交易的執行信息時的任何作為或不作為，TigerWit 概不負責，除非該作為或不作為是 TigerWit 方面的疏忽或欺詐造成的。",
            id:"2.TigerWit bears no responsibility for any acts or omissions concluded by either a natural or legal person that provides the Firm with information in relation to the execution of the client’s transactions in financial instruments, unless such acts or omissions were the result of negligence or fraud on behalf of TigerWit."
        },
        amtClient101:{
            zh:"3.对于任何机会损失导致客户金融工具交易价值的下跌，不论其原因是什么，TigerWit 概不负责，但由于公司的蓄意作为或不作为直接导致的下跌除外。",
            en:"3.TigerWit bears no responsibility for any loss of opportunity that results in reduction in the value of the client’s transactions in financial instruments, regardless of the cause of such reduction, except to the extent that reduction occurred as a direct consequence of the Firm’s deliberate actions or omissions.",
            vi:"3.TigerWit không chịu trách nhiệm cho bất kỳ việc mất cơ hội nào dẫn đến giảm giá trị giao dịch của khách hàng với các sản phẩm tài chính, bất kể nguyên nhân của việc giảm là gì, ngoại trừ mức độ giảm xảy ra do hậu quả trực tiếp của các hành động có chủ ý của Công ty hoặc thiếu sót.",
            "zh-Hant":"3.對於任何機會損失導致客戶金融工具交易價值的下跌，不論其原因是什麽，TigerWit 概不負責，但由於公司的蓄意作為或不作為直接導致的下跌除外。",
            id:"3.TigerWit bears no responsibility for any loss of opportunity that results in reduction in the value of the client’s transactions in financial instruments, regardless of the cause of such reduction, except to the extent that reduction occurred as a direct consequence of the Firm’s deliberate actions or omissions."
        },
        amtClient102:{
            zh:"4.对于机构或其雇员的作为或不作为导致的任何损失，包括但不限于客户提供虚假或误导性信息的情况，TigerWit 概不负责。",
            en:"4.TigerWit bears no responsibility for any loss incurred as a result of the acts or omissions of the Institution or its employees, including but not limited to instances of false or misleading information provided by the client.",
            vi:"4.TigerWit không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh do hành vi hoặc thiếu sót của Tổ chức hoặc nhân viên, bao gồm nhưng không giới hạn trong các trường hợp thông tin sai lệch hoặc gây hiểu nhầm do khách hàng cung cấp.",
            "zh-Hant":"4.對於機構或其雇員的作為或不作為導致的任何損失，包括但不限於客戶提供虛假或誤導性信息的情況，TigerWit 概不負責。",
            id:"4.TigerWit bears no responsibility for any loss incurred as a result of the acts or omissions of the Institution or its employees, including but not limited to instances of false or misleading information provided by the client."
        },
        amtClient103:{
            zh:"补偿计划",
            en:"Compensation Scheme",
            vi:"Khung Bồi thường",
            "zh-Hant":"補償計劃",
            id:"Compensation Scheme"
        },
        amtClient104:{
            zh:"1.客户可以要求本公司提供规定补偿条件以及获得补偿所需手续的相关信息。",
            en:"1.A client may request the Firm to provide information about the conditions governing compensation and the formalities which to be satisfied to obtain compensation.",
            vi:"1.Khách hàng có thể yêu cầu Công ty cung cấp thông tin về các điều kiện chi phối bồi thường và các thủ tục được thỏa mãn để được bồi thường.",
            "zh-Hant":"1.客戶可以要求本公司提供規定補償條件以及獲得補償所需手續的相關信息。",
            id:"1.A client may request the Firm to provide information about the conditions governing compensation and the formalities which to be satisfied to obtain compensation."
        },
        amtClient105:{
            zh:"赔偿",
            en:"Indemnity",
            vi:"Bồi thường",
            "zh-Hant":"賠償",
            id:"Indemnity"
        },
        amtClient106:{
            zh:"1.如本公司在提供投资或辅助服务时因为(i)客 户 违 反 本 客 户 协 议 的 规 定 ， 或(ii) 客 户 向TigerWit 提供虚假或误导性信息等原因，给本公司招致任何费用，客户将向本公司作出赔偿或按要求作出赔偿。",
            en:"1.The client shall indemnify, or indemnify on demand, the Firm for any costs incurred under the provision of investment or ancillary services by the latter, including but not limited to (i) the client’s breach of the Client Agreement or (ii) false or misleading information provided by the client to TigerWit. ",
            vi:"1.Khách hàng sẽ bồi thường, hoặc bồi thường theo yêu cầu, Công ty về bất kỳ chi phí nào phát sinh từ việc cung cấp dịch vụ đầu tư hoặc phụ trợ, bao gồm nhưng không giới hạn (i) vi phạm Hợp đồng khách hàng hoặc (ii) sai hoặc thông tin gây hiểu lầm do khách hàng cung cấp cho TigerWit.",
            "zh-Hant":"1.如本公司在提供投資或輔助服務時因為(i)客 戶 違 反 本 客 戶 協 議 的 規 定 ， 或(ii) 客 戶 向TigerWit 提供虛假或誤導性信息等原因，給本公司招致任何費用，客戶將向本公司作出賠償或按要求作出賠償。",
            id:"1.The client shall indemnify, or indemnify on demand, the Firm for any costs incurred under the provision of investment or ancillary services by the latter, including but not limited to (i) the client’s breach of the Client Agreement or (ii) false or misleading information provided by the client to TigerWit. "
        },
        amtClient107:{
            zh:"客户协议期限",
            en:"Duration of the Client Agreement",
            vi:"Thạn của Hợp đồng khách hàng",
            "zh-Hant":"客戶協議期限",
            id:"Duration of the Client Agreement"
        },
        amtClient108:{
            zh:"1.本客户协议有效期自“客户协议生效”章节规定的日期起，直至下文第(17.1)条规定的终止或违约为止。",
            en:"1.The Client Agreement shall be effective from the day described in the ‘Commencement of the Client Agreement’ section, until its termination or default under clause (17.1) below.",
            vi:"1.Hợp đồng khách hàng sẽ có hiệu lực từ ngày được mô tả trong phần Bắt đầu của Hợp đồng khách hàng, cho đến khi nó chấm dứt hoặc mặc định theo khoản (17.1) dưới đây.",
            "zh-Hant":"1.本客戶協議有效期自“客戶協議生效”章節規定的日期起，直至下文第(17.1)條規定的終止或違約為止。",
            id:"1.The Client Agreement shall be effective from the day described in the ‘Commencement of the Client Agreement’ section, until its termination or default under clause (17.1) below."
        },
        amtClient109:{
            zh:"客户协议的通知与修订",
            en:"Notifications and Amendments to the Client Agreement",
            vi:"Thông báo và sửa đổi cho Hợp đồng khách hàng",
            "zh-Hant":"客戶協議的通知與修訂",
            id:"Notifications and Amendments to the Client Agreement"
        },
        amtClient110:{
            zh:"1.对于本章节规定的与本公司向客户提供服务有关的信息，倘若出现任何重大的变更，本公司将及时通知客户。",
            en:"1.The Firm will notify the client in good time about any material change to the information provided under this section which is relevant to a service that the Firm is providing to that client.",
            vi:"1.Công ty sẽ thông báo cho khách hàng vào thời điểm tốt về bất kỳ thay đổi quan trọng nào đối với thông tin được cung cấp trong phần này có liên quan đến dịch vụ mà Công ty đang cung cấp cho khách hàng đó.",
            "zh-Hant":"1.對於本章節規定的與本公司向客戶提供服務有關的信息，倘若出現任何重大的變更，本公司將及時通知客戶。",
            id:"1.The Firm will notify the client in good time about any material change to the information provided under this section which is relevant to a service that the Firm is providing to that client."
        },
        amtClient111:{
            zh:"2.TigerWit 保留随时修订客户协议中任何内容的权利，包括本公司认为根据有合法管辖权的监管机构发布的公告必须做出的修订。在此 情 况 下 ， 应 以 书 面 形 式 或 通 过 公 司 网 站(http://global.tigerwit.com)通知客户，客户保留接受或拒绝此类修订的权利。应当注意的是，客户的许可不适用于任何立即生效的修订。",
            en:"2.TigerWit reserves the right to amend, from time to time, any part of the Client Agreement, including where the Firm deems that such amendments are necessary given an announcement by a regulatory authority of a competent jurisdiction. Under such circumstances, the client shall be notified either in writing or through the Firm’s site (http://global.tigerwit.com) accordingly and shall reserve the right to accept or deny the amendments; it should be noted that the client’s consent is not required for any amendment to be effective immediately.",
            vi:"2.TigerWit có quyền sửa đổi, theo thời gian, bất kỳ phần nào của Hợp đồng khách hàng, bao gồm cả nơi Công ty cho rằng các sửa đổi đó là cần thiết do một cơ quan có thẩm quyền của một cơ quan có thẩm quyền công bố. Trong những trường hợp như vậy, khách hàng sẽ được thông báo bằng văn bản hoặc thông qua trang web của Công ty (http://global.tigerwit.com) cho phù hợp và sẽ bảo lưu quyền chấp nhận hoặc từ chối các sửa đổi; cần lưu ý rằng sự đồng ý của khách hàng là không cần thiết cho bất kỳ sửa đổi nào có hiệu lực ngay lập tức.",
            "zh-Hant":"2.TigerWit 保留隨時修訂客戶協議中任何內容的權利，包括本公司認為根據有合法管轄權的監管機構發布的公告必須做出的修訂。在此 情 況 下 ， 應 以 書 面 形 式 或 通 過 公 司 網 站(http://global.tigerwit.com)通知客戶，客戶保留接受或拒絕此類修訂的權利。應當註意的是，客戶的許可不適用於任何立即生效的修訂。",
            id:"2.TigerWit reserves the right to amend, from time to time, any part of the Client Agreement, including where the Firm deems that such amendments are necessary given an announcement by a regulatory authority of a competent jurisdiction. Under such circumstances, the client shall be notified either in writing or through the Firm’s site (http://global.tigerwit.com) accordingly and shall reserve the right to accept or deny the amendments; it should be noted that the client’s consent is not required for any amendment to be effective immediately."
        },
        amtClient112:{
            zh:"终止与违约",
            en:"Termination and Default",
            vi:"Chấm dứt và mặc định",
            "zh-Hant":"終止與違約",
            id:"Termination and Default"
        },
        amtClient113:{
            zh:"1.客户可以在前文“客户协议的通知与修订”章节规定的修订公告发出起十五(15)个营业日内，通过挂号邮寄方式向本公司总部发出通知终止本客户协议，前提是相关交易账户不存在未平仓交易且客户对 TigerWit 没有未偿还债务。",
            en:"1.The client may terminate the Client Agreement within 15 (fifteen) business days from the announcement of an amendment under the ‘Notification and Amendments to the Client Agreement section above, by sending a notification through registered post to the Firm’s Head Office, provided only that there are no open positions traded through the relevant trading account and the client has no outstanding obligations to TigerWit.",
            vi:"1.Khách hàng có thể chấm dứt Hợp đồng khách hàng trong vòng 15 (mười lăm) ngày làm việc kể từ khi thông báo sửa đổi theo Thông báo và Sửa đổi cho phần Hợp đồng khách hàng ở trên, bằng cách gửi thông báo qua bài đăng đã đăng ký đến Trụ sở của Công ty, miễn là không có vị thế mở giao dịch thông qua tài khoản giao dịch liên quan và khách hàng không có nghĩa vụ nào đối với TigerWit.",
            "zh-Hant":"1.客戶可以在前文“客戶協議的通知與修訂”章節規定的修訂公告發出起十五(15)個營業日內，通過掛號郵寄方式向本公司總部發出通知終止本客戶協議，前提是相關交易賬戶不存在未平倉交易且客戶對 TigerWit 沒有未償還債務。",
            id:"1.The client may terminate the Client Agreement within 15 (fifteen) business days from the announcement of an amendment under the ‘Notification and Amendments to the Client Agreement section above, by sending a notification through registered post to the Firm’s Head Office, provided only that there are no open positions traded through the relevant trading account and the client has no outstanding obligations to TigerWit."
        },
        amtClient114:{
            zh:"2.客户出于任何原因，可以提前七个营业日通过挂号邮寄方式向本公司总部发送指定有终止日期的书面通知终止本客户协议，前提是相 关 交 易 账 户 不 存 在 未 平 仓 交 易 且 客 户对TigerWit 没有未结清付款。",
            en:"2.The client may terminate the Client Agreement, for any reason, having provided a 7 (seven) business days written notice by sending a notification specifying the termination date through registered post to the Firm’s Head Office, provided only that there are no open positions traded through the relevant trading account and the client has no amounts due for payment to TigerWit.",
            vi:"2.Khách hàng có thể chấm dứt Hợp đồng khách hàng, vì bất kỳ lý do nào, miễn là gửi thông báo ngày chấm dứt cụ thể trước 7 ngày làm việc đến Trụ sở chính của Công ty đã nêu, miễn là không có các vị thế mở được giao dịch thông qua các tài khoản giao dịch liên quan và khách hàng không có khoản thanh toán nào đến hạn phải trả cho TigerWit.",
            "zh-Hant":"2.客戶出於任何原因，可以提前七個營業日通過掛號郵寄方式向本公司總部發送指定有終止日期的書面通知終止本客戶協議，前提是相 關 交 易 賬 戶 不 存 在 未 平 倉 交 易 且 客 戶對TigerWit 沒有未結清付款。",
            id:"2.The client may terminate the Client Agreement, for any reason, having provided a 7 (seven) business days written notice by sending a notification specifying the termination date through registered post to the Firm’s Head Office, provided only that there are no open positions traded through the relevant trading account and the client has no amounts due for payment to TigerWit."
        },
        amtClient115:{
            zh:"3.TigerWit 应至少提前七个营业日向客户发出指定有终止日期的书面通知，终止本客户协议。",
            en:"3.TigerWit may terminate the Client Agreement by giving the client at least 7 (seven) business days written notice, specifying the termination date.",
            vi:"3.TigerWit có thể chấm dứt Hợp đồng Khách hàng bằng cách gửi thông báo bằng văn bản cho khách hàng ít nhất 7 (bảy) ngày làm việc, nêu rõ ngày chấm dứt hợp đồng.",
            "zh-Hant":"3.TigerWit 應至少提前七個營業日向客戶發出指定有終止日期的書面通知，終止本客戶協議。",
            id:"3.TigerWit may terminate the Client Agreement by giving the client at least 7 (seven) business days written notice, specifying the termination date."
        },
        amtClient116:{
            zh:"4.客户同意，一旦下文第 17.5 条生效，TigerWit 保留通过向客户提供书面通知立即终止本客户协议的权利。",
            en:"4.The client accepts that TigerWit reserves the right to terminate the Client Agreement immediately by providing the former with a written notice, if clause 17.5, below, becomes effective.",
            vi:"4.Khách hàng chấp nhận rằng TigerWit có quyền chấm dứt Hợp đồng khách hàng ngay lập tức bằng cách cung cấp cho họ thông báo trước bằng văn bản, nếu điều 17.5 dưới đây, có hiệu lực.",
            "zh-Hant":"4.客戶同意，壹旦下文第 17.5 條生效，TigerWit 保留通過向客戶提供書面通知立即終止本客戶協議的權利。",
            id:"4.The client accepts that TigerWit reserves the right to terminate the Client Agreement immediately by providing the former with a written notice, if clause 17.5, below, becomes effective."
        },
        amtClient117:{
            zh:"5.在下列情况下，TigerWit 可以立即终止本客户协议：",
            en:"5.TigerWit may terminate the Client Agreement immediately, in the event of: ",
            vi:"5.TigerWit có thể chấm dứt Hợp đồng Khách hang ngay lập tức, trong trường hợp: ",
            "zh-Hant":"5.在下列情況下，TigerWit 可以立即終止本客戶協議：",
            id:"5.TigerWit may terminate the Client Agreement immediately, in the event of: "
        },
        amtClient118:{
            zh:"客户方面违反本客户协议的任何部分；",
            en:"a violation of any part of the Client Agreement on behalf of the client;",
            vi:"vi phạm bất kỳ phần nào của Hợp đồng khách hàng thay mặt cho khách hàng;",
            "zh-Hant":"客戶方面違反本客戶協議的任何部分；",
            id:"a violation of any part of the Client Agreement on behalf of the client;"
        },
        amtClient119:{
            zh:"与客户有关的破产或清盘程序发出的申请、命令、决议或其他公告；",
            en:"an issuance of an application, order, resolution or other announcement in relation to bankruptcy or winding-up proceedings that involve the client;",
            vi:"có đơn yêu cầu, lệnh, phán quyết hoặc thông báo khác liên quan đến việc phá sản hoặc thủ tục tố tụng liên quan đến khách hàng;",
            "zh-Hant":"與客戶有關的破產或清盤程序發出的申請、命令、決議或其他公告；",
            id:"an issuance of an application, order, resolution or other announcement in relation to bankruptcy or winding-up proceedings that involve the client;"
        },
        amtClient120:{
            zh:"客户死亡；以及",
            en:"a client’s death; and",
            vi:"khách hàng qua đời; và",
            "zh-Hant":"客戶死亡；以及",
            id:"a client’s death; and"
        },
        amtClient121:{
            zh:"基于本公司的合理怀疑，客户利用本公司参与任何类型的欺诈。",
            en:"a client involving the Firm in any type of fraud based on the Firm's reasonable suspicion.",
            vi:"một khách hàng liên quan đến Công ty trong bất kỳ hình thức gian lận nào dựa trên nghi ngờ hợp lý của Công ty.",
            "zh-Hant":"基於本公司的合理懷疑，客戶利用本公司參與任何類型的欺詐。",
            id:"a client involving the Firm in any type of fraud based on the Firm's reasonable suspicion."
        },
        amtClient122:{
            zh:"6.客户协议的终止并不代表客户的所有责任不复存在；客户对本公司仍承担以下支付责任：",
            en:"6.A termination of the Client Agreement shall not imply that any of the client’s responsibilities cease to exist; the latter shall still be liable to pay to the Firm: ",
            vi:"Việc chấm dứt Hợp đồng khách hàng sẽ không ẩn ý rằng bất kỳ trách nhiệm nào của khách hàng không còn tồn tại; sau này vẫn phải chịu trách nhiệm thanh toán cho Công ty: ",
            "zh-Hant":"6.客戶協議的終止並不代表客戶的所有責任不復存在；客戶對本公司仍承擔以下支付責任：",
            id:"6.A termination of the Client Agreement shall not imply that any of the client’s responsibilities cease to exist; the latter shall still be liable to pay to the Firm: "
        },
        amtClient123:{
            zh:"应付给 TigerWit 的任何金额；",
            en:"any amount that is due to TigerWit;",
            vi:"bất kỳ số tiền nào đến hạn thanh toán cho TigerWit;",
            "zh-Hant":"應付給 TigerWit 的任何金額；",
            id:"any amount that is due to TigerWit;"
        },
        amtClient124:{
            zh:"由于客户协议终止而向 TigerWit 收取的或由 TigerWit 产生的任何费用；以及",
            en:"any expenses that are incurred by or charged to TigerWit, as a result of the termination of the Client Agreement; and",
            vi:"bất kỳ chi phí nào phát sinh hoặc tính phí cho TigerWit, là kết quả của việc chấm dứt Hợp đồng khách hàng; và",
            "zh-Hant":"由於客戶協議終止而向 TigerWit 收取的或由 TigerWit 產生的任何費用；以及",
            id:"any expenses that are incurred by or charged to TigerWit, as a result of the termination of the Client Agreement; and"
        },
        amtClient125:{
            zh:"由于安排或和解而产生的任何损害或损失。",
            en:"any damage or loss that has arisen because of an arrangement or settlement.",
            vi:"3.bất kỳ thiệt hại hoặc tổn thất nào phát sinh do sắp xếp hoặc giải quyết.",
            "zh-Hant":"由於安排或和解而產生的任何損害或損失。",
            id:"any damage or loss that has arisen because of an arrangement or settlement."
        },
        amtClient126:{
            zh:"7.根据上文第 17.1 条，客户协议终止后，TigerWit 应立即将相关交易账户中的任何可用金额减去客户应付给本公司的任何未偿还金额后，转账至客户。",
            en:"7.Upon termination of the Client Agreement under clause 17.1, above, TigerWit shall immediately transfer to the client any amount available in the relevant trading account minus any outstanding amount that is due to the Firm by the client.",
            vi:"7.Khi khách hàng chấm dứt Thoả thuận theo điều khoản 17.1 ở trên, TigerWit sẽ chuyển ngay cho khách hàng bất kỳ số tiền nào có sẵn trong tài khoản giao dịch liên quan sau khi trừ đi số tiền chưa thanh toán mà Khách hàng còn nợ Công ty.",
            "zh-Hant":"7.根據上文第 17.1 條，客戶協議終止後，TigerWit 應立即將相關交易賬戶中的任何可用金額減去客戶應付給本公司的任何未償還金額後，轉賬至客戶。",
            id:"7.Upon termination of the Client Agreement under clause 17.1, above, TigerWit shall immediately transfer to the client any amount available in the relevant trading account minus any outstanding amount that is due to the Firm by the client."
        },
        amtClient127:{
            zh:"8.如果上文第 17.5 条生效，针对任何被认为与本公司或客户利益相悖的交易，TigerWit保留反向交易的权力。",
            en:"8.If clause 17.5, above, becomes effective TigerWit reserves the right to reverse any transactions that are deemed to be contrary to the Firm’s or the client’s interests.",
            vi:"8.Nếu điều khoản 17.5 ở trên, có hiệu lực, TigerWit có quyền đảo ngược bất kỳ giao dịch nào được coi là trái với lợi ích của Công ty hoặc của khách hàng.",
            "zh-Hant":"8.如果上文第 17.5 條生效，針對任何被認為與本公司或客戶利益相悖的交易，TigerWit保留反向交易的權力。",
            id:"8.If clause 17.5, above, becomes effective TigerWit reserves the right to reverse any transactions that are deemed to be contrary to the Firm’s or the client’s interests."
        },
        amtClient128:{
            zh:"风险披露",
            en:"Risk Disclosure",
            vi:"uyên bố Rủi ro",
            "zh-Hant":"風險披露",
            id:"Risk Disclosure"
        },
        amtClient129:{
            zh:"1.有关于差价合约交易所涉及的风险详情载于本协议附件。",
            en:"1.Details relating to the risks involved in trading CFDs are contained in the Annex to this Agreement.",
            vi:"1.Các chi tiết liên quan đến các rủi ro liên quan đến giao dịch CFD được nêu trong Phụ lục của Thỏa Thuận này.",
            "zh-Hant":"1.有關於差價合約交易所涉及的風險詳情載於本協議附件。",
            id:"1.Details relating to the risks involved in trading CFDs are contained in the Annex to this Agreement."
        },
        amtClient130:{
            zh:"保密与个人数据保护",
            en:"Confidentiality and Personal Data Protection",
            vi:"Bảo mật và Bảo vệ Dữ Liệu Khách Hàng",
            "zh-Hant":"保密與個人數據保護",
            id:"Confidentiality and Personal Data Protection"
        },
        amtClient131:{
            zh:"1.TigerWit Limited 在 巴哈马国注册总局注册；因此，任何客户的个人数据均由 TigerWit 依据巴哈马国的法律法规进行保存。",
            en:"1.TigerWit Limited is registered with the Registrar General's Department of The Bahamas; therefore, any clients’ personal data is kept by TigerWit according to the laws and regulations of The Bahamas.",
            vi:"1.Công ty TigerWit được đăng ký với Ủy ban Chứng khoán Bahamas; do đó, bất kỳ dữ liệu cá nhân của khách hàng được giữ bởi TigerWit tuân theo luật pháp và các quy định của Bahamas.",
            "zh-Hant":"1.TigerWit Limited 在 巴哈馬國註冊總局註冊；因此，任何客戶的個人數據均由 TigerWit 依據巴哈馬國的法律法規進行保存。",
            id:"1.TigerWit Limited is registered with the Registrar General's Department of The Bahamas; therefore, any clients’ personal data is kept by TigerWit according to the laws and regulations of The Bahamas."
        },
        amtClient132:{
            zh:"除了在有合法管辖权的监管机构要求的情况下，TigerWit 不得向第三方披露客户的任何保密信息；除非监管机构另有指示，TigerWit 将尽力基于“需者方知”原则进行披露。在此情况下，公司应明确告知第三方该信息的保密性质。",
            en:"TigerWit shall not disclose to a third party, any of its clients’ confidential information unless required to do so by a regulatory authority of a competent jurisdiction; TigerWit will endeavour, to make such disclosures on a ‘need-to-know’ basis, unless otherwise instructed by a regulatory authority. Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information.",
            vi:"TigerWit không được tiết lộ cho bên thứ ba, bất kỳ thông tin bí mật nào của khách hàng trừ khi được yêu cầu bởi một cơ quan quản lý có thẩm quyền; TigerWit sẽ nỗ lực, để thực hiện việc tiết lộ trong các trường hợp như vậy trên cơ sở sự cần biết, trừ khi được chỉ dẫn bởi một cơ quan quản lý. Trong những trường hợp như vậy, Công ty phải thông báo rõ ràng cho bên thứ ba về bản chất bảo mật của thông tin.",
            "zh-Hant":"除了在有合法管轄權的監管機構要求的情況下，TigerWit 不得向第三方披露客戶的任何保密信息；除非監管機構另有指示，TigerWit 將盡力基於“需者方知”原則進行披露。在此情況下，公司應明確告知第三方該信息的保密性質。",
            id:"TigerWit shall not disclose to a third party, any of its clients’ confidential information unless required to do so by a regulatory authority of a competent jurisdiction; TigerWit will endeavour, to make such disclosures on a ‘need-to-know’ basis, unless otherwise instructed by a regulatory authority. Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information."
        },
        amtClient133:{
            zh:"客户同意并许可，TigerWit 可以不定期地以合约方式聘用相关公司进行统计或提供其他服务，从而改善本公司的业务活动；因而部分或全部的客户个人数据可能会被披露。",
            en:"Clients accept and consent that TigerWit may, from time to time, contractually engage companies for statistical and/or other purposes in order to improve the Firm’s business activities; as a result, some or all of the clients’ personal data may be disclosed.",
            vi:"Khách hàng chấp nhận và đồng ý rằng TigerWit có thể, theo thời gian, cam kết về mặt hợp đồng với các công ty nhằm mục đích thống kê và / hoặc các mục đích khác để cải thiện hoạt động kinh doanh của Công ty; do đó, một số hoặc tất cả dữ liệu cá nhân của khách hàng có thể được tiết lộ.",
            "zh-Hant":"客戶同意並許可，TigerWit 可以不定期地以合約方式聘用相關公司進行統計或提供其他服務，從而改善本公司的業務活動；因而部分或全部的客戶個人數據可能會被披露。",
            id:"Clients accept and consent that TigerWit may, from time to time, contractually engage companies for statistical and/or other purposes in order to improve the Firm’s business activities; as a result, some or all of the clients’ personal data may be disclosed."
        },
        amtClient134:{
            zh:"您的个人信息可能保留在计算机记录中，并不会向其他方披露，以下基于“需者方知”原则获得明确允许的情况除外：",
            en:"Your personal information may be maintained on computer records and will not be disclosed to other parties except where we are expressly permitted to on a ‘need to know’ basis: ",
            vi:"Thông tin cá nhân của bạn có thể được lưu giữ trên hồ sơ máy tính và sẽ không được tiết lộ cho các bên khác ngoại trừ nơi chúng tôi được cho phép rõ ràng trên cơ sở cần biết cơ sở: ",
            "zh-Hant":"您的個人信息可能保留在計算機記錄中，並不會向其他方披露，以下基於“需者方知”原則獲得明確允許的情況除外：",
            id:"Your personal information may be maintained on computer records and will not be disclosed to other parties except where we are expressly permitted to on a ‘need to know’ basis: "
        },
        amtClient135:{
            zh:"- 为了向您提供服务，向持有客户资产的机构、其商业继承者以及签订协议的其他机构披露信息。",
            en:"- Disclose information to the institution holding client assets, their successors in business, and other institutions with which agreements are entered in order to provide you our services.",
            vi:"- Tiết lộ thông tin cho tổ chức nắm giữ tài sản của khách hàng, người kế nhiệm của họ trong kinh doanh và các tổ chức khác có thỏa thuận được nhập để cung cấp cho bạn các dịch vụ của chúng tôi.",
            "zh-Hant":"- 為了向您提供服務，向持有客戶資產的機構、其商業繼承者以及簽訂協議的其他機構披露信息。",
            id:"- Disclose information to the institution holding client assets, their successors in business, and other institutions with which agreements are entered in order to provide you our services."
        },
        amtClient136:{
            zh:"- 根据法律规定、或按 SCB 或其他监管机构的指示披露信息。",
            en:"- Disclose information as required by law or instructed by the SCB or other regulatory body.",
            vi:"- Tiết lộ thông tin theo yêu cầu của pháp luật hoặc được chỉ định bởi SCB hoặc cơ quan quản lý khác.",
            "zh-Hant":"- 根據法律規定、或按 SCB 或其他監管機構的指示披露信息。",
            id:"- Disclose information as required by law or instructed by the SCB or other regulatory body."
        },
        amtClient137:{
            zh:"- 向我们的合规顾问、审计员以及其他此类人员披露信息。",
            en:"- Disclose information to our compliance advisers, auditors and other such organisations.",
            vi:"- Tiết lộ thông tin cho các cố vấn giám sát, kiểm toán viên của chúng tôi và các tổ chức khác như vậy.",
            "zh-Hant":"- 向我們的合規顧問、審計員以及其他此類人員披露信息。",
            id:"- Disclose information to our compliance advisers, auditors and other such organisations."
        },
        amtClient138:{
            zh:"在此情况下，公司应明确告知第三方信息的保密性质。",
            en:"Under such circumstances the Firm shall expressly inform the third party regarding the confidential nature of the information.",
            vi:"Trong những trường hợp như vậy, Công ty phải thông báo rõ ràng cho bên thứ ba về tính chất bảo mật của thông tin.",
            "zh-Hant":"在此情況下，公司應明確告知第三方信息的保密性質。",
            id:"Under such circumstances the Firm shall expressly inform the third party regarding the confidential nature of the information."
        },
        amtClient139:{
            zh:"我们也可能将您的信息披露至本集团内的任何其他公司。",
            en:"We may also disclose your information to any other company within our Group.",
            vi:"Chúng tôi cũng có thể tiết lộ thông tin của bạn cho bất kỳ công ty nào khác trong Tập đoàn của chúng tôi.",
            "zh-Hant":"我們也可能將您的信息披露至本集團內的任何其他公司。",
            id:"We may also disclose your information to any other company within our Group."
        },
        amtClient140:{
            zh:"我们通过银行卡交易处理公司完成您账户内的存取款。该公司不得出于任何其他目的保留、分享、存储或使用个人身份信息。",
            en:"We use a card processing company for your deposits and withdrawals to and from your account. This company does not retain, share, store or use personally identifiable information for any other purposes.",
            vi:"Chúng tôi sử dụng một công ty xử lý thẻ cho các khoản tiền gửi và rút tiền của bạn đến và từ tài khoản của bạn. Công ty này không giữ lại, chia sẻ, lưu trữ hoặc sử dụng thông tin nhận dạng cá nhân cho bất kỳ mục đích nào khác.",
            "zh-Hant":"我們通過銀行卡交易處理公司完成您賬戶內的存取款。該公司不得出於任何其他目的保留、分享、存儲或使用個人身份信息。",
            id:"We use a card processing company for your deposits and withdrawals to and from your account. This company does not retain, share, store or use personally identifiable information for any other purposes."
        },
        amtClient141:{
            zh:"为了您账户的适当管理以及相关目的，我们可能不定期地传播非应邀实时金融促销（根据 SCB规则定义）。为了提升本公司的营销，我们可能会出于统计目的不定期地聘用相关公司；因而部分或全部的客户数据可能仅在匿名且汇总的基础上被披露。",
            en:"We may from time to time in the interests of proper administration of your account and for related purposes communicate an unsolicited real time financial promotion, as defined by SCB rules. We may from time to time engage companies for statistical purposes in order to improve the Firm’s marketing; as a result, some or all of the clients’ data may be disclosed on an anonymous and aggregated basis only.",
            vi:"Đôi khi, chúng tôi có thể quan tâm đến việc quản lý thích hợp tài khoản của bạn và cho các mục đích liên quan liên lạc với chương trình thúc đẩy tài chính thời trong thời gian thực không được yêu cầu, theo quy định của SCB. Đôi khi, chúng tôi có thể thu hút các công ty nhằm mục đích thống kê nhằm cải thiện hoạt động tiếp thị của Công ty; do đó, một số hoặc tất cả dữ liệu của khách hàng chỉ có thể được tiết lộ trên cơ sở ẩn danh và tổng hợp.",
            "zh-Hant":"為了您賬戶的適當管理以及相關目的，我們可能不定期地傳播非應邀實時金融促銷（根據 SCB規則定義）。為了提升本公司的營銷，我們可能會出於統計目的不定期地聘用相關公司；因而部分或全部的客戶數據可能僅在匿名且匯總的基礎上被披露。",
            id:"We may from time to time in the interests of proper administration of your account and for related purposes communicate an unsolicited real time financial promotion, as defined by SCB rules. We may from time to time engage companies for statistical purposes in order to improve the Firm’s marketing; as a result, some or all of the clients’ data may be disclosed on an anonymous and aggregated basis only."
        },
        amtClient142:{
            zh:"一旦您的情况发生变更，且如果您未能告知我们上述变更，我们不会为您档案中所保留的不准确信息承担责任。我们希望确保您的个人信息是准确且最新的。",
            en:"We cannot be held responsible for the information held on your file becoming inaccurate due to your change of circumstances if you fail to inform us of those changes. We want to make sure your personal information is accurate and up to date.",
            vi:"Chúng tôi không thể chịu trách nhiệm về thông tin được lưu giữ trong hồ sơ của bạn trở nên không chính xác do sự thay đổi hoàn cảnh của bạn nếu bạn không thông báo cho chúng tôi về những thay đổi đó. Chúng tôi muốn đảm bảo thông tin cá nhân của bạn chính xác và cập nhật. ",
            "zh-Hant":"壹旦您的情況發生變更，且如果您未能告知我們上述變更，我們不會為您檔案中所保留的不準確信息承擔責任。我們希望確保您的個人信息是準確且最新的。",
            id:"We cannot be held responsible for the information held on your file becoming inaccurate due to your change of circumstances if you fail to inform us of those changes. We want to make sure your personal information is accurate and up to date."
        },
        amtClient143:{
            zh:"您可以要求我们更正或删除您认为不准确的信息。",
            en:"You may ask us to correct or remove information you think is inaccurate.",
            vi:"Bạn có thể yêu cầu chúng tôi chỉnh sửa hoặc xóa thông tin bạn cho là không chính xác.",
            "zh-Hant":"您可以要求我們更正或刪除您認為不準確的信息。",
            id:"You may ask us to correct or remove information you think is inaccurate."
        },
        amtClient144:{
            zh:"我们会对我们的商业交易、客户分类以及金融促销记录保存至少五年。",
            en:"We keep records of our business transactions, clients’ categorisation and financial promotions, for at least five years.",
            vi:"Chúng tôi lưu giữ hồ sơ về các giao dịch kinh doanh của chúng tôi, phân loại khách hàng và các chương trình thúc đẩy tài chính, trong ít nhất năm năm.",
            "zh-Hant":"我們會對我們的商業交易、客戶分類以及金融促銷記錄保存至少五年。",
            id:"We keep records of our business transactions, clients’ categorisation and financial promotions, for at least five years."
        },
        amtClient145:{
            zh:"您可以申请一份我们持有的您的相关信息的副本。如果您索要全部或部分信息的副本，请写信 至 ： 收 件 人 ： 数 据 管 理 员 ， 地 址 为 201Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas.我们可能会就此项服务收取少量费用。",
            en:"You may request a copy of the information that we hold about you. If you would like a copy of all or some of the information please write to: The Data Controller, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas. We may make a small charge for this service.",
            vi:"Bạn có thể yêu cầu một bản sao thông tin mà chúng tôi có về bạn. Nếu bạn muốn một bản sao của tất cả hoặc một số thông tin xin vui lòng viết thư cho: Bộ điều khiển dữ liệu, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, Bahamas. Chúng tôi có thể tính một khoản phí nhỏ cho dịch vụ này.",
            "zh-Hant":"您可以申請壹份我們持有的您的相關信息的副本。如果您索要全部或部分信息的副本，請寫信 至 ： 收 件 人 ： 數 據 管 理 員 ， 地 址 為 201Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas.我們可能會就此項服務收取少量費用。",
            id:"You may request a copy of the information that we hold about you. If you would like a copy of all or some of the information please write to: The Data Controller, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas. We may make a small charge for this service."
        },
        amtClient146:{
            zh:"2.除了在有合法管辖权的监管机构要求的情况下，TigerWit 不得向第三方披露客户的任何保密信息；除非政府机构及其他机构另有指示，此类信息将基于“需者方知”原则进行披露，但须符合适用法律的规定。在此情况下，公司应明确告知第三方信息的保密性质。",
            en:"2.TigerWit shall not disclose to a third party, any of the client’s confidential information unless required to do so by a regulatory authority of a competent jurisdiction; such disclosure shall occur on a ‘need-to-know’ basis, unless otherwise instructed by, inter alia, any governmental body, subject to the provisions of applicable legislation. Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information.",
            vi:"2.TigerWit không được tiết lộ cho bên thứ ba, bất kỳ thông tin mật nào của khách hàng trừ khi được yêu cầu bởi một cơ quan quản lý có thẩm quyền; việc tiết lộ như vậy sẽ xảy ra trên cơ sở cần biết, trừ khi có hướng dẫn khác, liên quan đến nhau, bất kỳ cơ quan chính phủ nào, tuân thủ các quy định của pháp luật hiện hành. Trong những trường hợp như vậy, Công ty phải thông báo rõ ràng cho bên thứ ba về bản chất bảo mật của thông tin.",
            "zh-Hant":"2.除了在有合法管轄權的監管機構要求的情況下，TigerWit 不得向第三方披露客戶的任何保密信息；除非政府機構及其他機構另有指示，此類信息將基於“需者方知”原則進行披露，但須符合適用法律的規定。在此情況下，公司應明確告知第三方信息的保密性質。",
            id:"2.TigerWit shall not disclose to a third party, any of the client’s confidential information unless required to do so by a regulatory authority of a competent jurisdiction; such disclosure shall occur on a ‘need-to-know’ basis, unless otherwise instructed by, inter alia, any governmental body, subject to the provisions of applicable legislation. Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information."
        },
        amtClient147:{
            zh:"电话录音",
            en:"Recordings of Telephone Calls",
            vi:"Ghi âm các cuộc gọi điện thoại",
            "zh-Hant":"電話錄音",
            id:"Recordings of Telephone Calls"
        },
        amtClient148:{
            zh:"1.客户与本公司之间的任何电话通话（以下简称“电话录音”）内容可以被录音并保存为磁带录音或电子录音。客户同意，本公司有权使用其认为必要的电话录音，包括但不限于培训或监管目的的录音，或涉及到本公司、与任何争议有关的录音。",
            en:"1.The content of any telephone call (‘the Telephone Record’) between the client and the Firm may be recorded and saved as a magnetic or electronic record. The client agrees that the Firm has the right to use the Telephone Records as it deems necessary including but not limited to training or regulatory purposes or in connection with any dispute involving the Firm.",
            vi:"1.Nội dung của bất kỳ cuộc gọi điện thoại nào (Ghi âm cuộc gọi) giữa khách hàng và Công ty có thể được ghi lại và lưu dưới dạng bản ghi âm từ tính hoặc điện tử. Khách hàng đồng ý rằng Công ty có quyền sử dụng Bản ghi âm điện thoại khi thấy cần thiết bao gồm nhưng không giới hạn mục đích đào tạo hoặc quy định hoặc liên quan đến bất kỳ tranh chấp nào liên quan đến Công ty.",
            "zh-Hant":"1.客戶與本公司之間的任何電話通話（以下簡稱“電話錄音”）內容可以被錄音並保存為磁帶錄音或電子錄音。客戶同意，本公司有權使用其認為必要的電話錄音，包括但不限於培訓或監管目的的錄音，或涉及到本公司、與任何爭議有關的錄音。",
            id:"1.The content of any telephone call (‘the Telephone Record’) between the client and the Firm may be recorded and saved as a magnetic or electronic record. The client agrees that the Firm has the right to use the Telephone Records as it deems necessary including but not limited to training or regulatory purposes or in connection with any dispute involving the Firm."
        },
        amtClient149:{
            zh:"2.客户在电话通话期间发出的与金融工具交易相关的所有指示应具有决定性及约束力，但条款与条件第 5.11 条所述之条件被触发的情况除外。",
            en:"2.All instructions received from the client, during a telephone call, in relation to trading financial instruments shall be conclusive and binding unless conditions described in clause 5.11 of the Terms and Conditions are triggered.",
            vi:"2.Tất cả các hướng dẫn nhận được từ khách hàng, trong một cuộc gọi điện thoại, liên quan đến các công cụ tài chính giao dịch sẽ là kết luận và ràng buộc trừ khi các điều kiện được mô tả trong điều 5.11 của Điều khoản và Điều kiện được kích hoạt.",
            "zh-Hant":"2.客戶在電話通話期間發出的與金融工具交易相關的所有指示應具有決定性及約束力，但條款與條件第 5.11 條所述之條件被觸發的情況除外。",
            id:"2.All instructions received from the client, during a telephone call, in relation to trading financial instruments shall be conclusive and binding unless conditions described in clause 5.11 of the Terms and Conditions are triggered."
        },
        amtClient150:{
            zh:"3.根据法律或主管当局的监管机构规定，TigerWit 可以在未告知客户的情况下向主管当局的监管机构提供电话录音的副本。",
            en:"3.TigerWit may provide copies of such recordings of telephone calls as required by Law or to a regulatory authority of a competent authority, without informing the client.",
            vi:"3.TigerWit có thể cung cấp bản sao các bản ghi âm cuộc gọi điện thoại theo yêu cầu của Pháp luật hoặc cho cơ quan quản lý của cơ quan có thẩm quyền, mà không cần thông báo cho khách hàng.",
            "zh-Hant":"3.根據法律或主管當局的監管機構規定，TigerWit 可以在未告知客戶的情況下向主管當局的監管機構提供電話錄音的副本。",
            id:"3.TigerWit may provide copies of such recordings of telephone calls as required by Law or to a regulatory authority of a competent authority, without informing the client."
        },
        amtClient151:{
            zh:"利益冲突",
            en:"Conflicts of Interest",
            vi:"Xung đột lợi ích",
            "zh-Hant":"利益沖突",
            id:"Conflicts of Interest"
        },
        amtClient152:{
            zh:"1.客户接受，根据客户协议，当 TigerWit与客户存在或似乎存在竞争关系或干扰时，则可能产生利益冲突。",
            en:"1.The client accepts that a conflict of interest may arise when the interest of TigerWit competes or interferes, or appear to compete or interfere, with the client’s interests under the Client Agreement.",
            vi:"1.Khách hàng chấp nhận rằng xung đột lợi ích có thể phát sinh khi quyền lợi của TigerWit ảnh hưởng hoặc ngăn cản hoặc có vẻ ảnh hưởng hoặc ngăn cản, với lợi ích của khách hàng theo Hợp đồng khách hàng.",
            "zh-Hant":"1.客戶接受，根據客戶協議，當 TigerWit與客戶存在或似乎存在競爭關系或幹擾時，則可能產生利益沖突。",
            id:"1.The client accepts that a conflict of interest may arise when the interest of TigerWit competes or interferes, or appear to compete or interfere, with the client’s interests under the Client Agreement."
        },
        amtClient153:{
            zh:"2.具体而言，客户接受以下情况：",
            en:"2.Specifically, the client accepts that: ",
            vi:"2.Cụ thể, khách hàng chấp nhận rằng: ",
            "zh-Hant":"2.具體而言，客戶接受以下情況：",
            id:"2.Specifically, the client accepts that: "
        },
        amtClient154:{
            zh:"TigerWit 可以将客户指令的执行转让或转移至 TigerWit 公司集团的另一成员公司；",
            en:"TigerWit may assign or transfer the execution of the client’s instruction to another member company of the TigerWit Group of Companies;",
            vi:"TigerWit có thể chuyển nhượng hoặc chuyển giao việc thực hiện lệnh của khách hàng cho một công ty thành viên khác của Nhóm Công ty TigerWit;",
            "zh-Hant":"TigerWit 可以將客戶指令的執行轉讓或轉移至 TigerWit 公司集團的另壹成員公司；",
            id:"TigerWit may assign or transfer the execution of the client’s instruction to another member company of the TigerWit Group of Companies;"
        },
        amtClient155:{
            zh:"本公司可以同时执行不同客户发出的相互冲突的指令；",
            en:"the Firm may execute at the same time instructions by different clients that are opposite to one another;",
            vi:"Công ty có thể thực thi cùng lúc với các hướng dẫn khác nhau của các khách hàng khác nhau;",
            "zh-Hant":"本公司可以同時執行不同客戶發出的相互沖突的指令；",
            id:"the Firm may execute at the same time instructions by different clients that are opposite to one another;"
        },
        amtClient156:{
            zh:"本公司可以和其他金融工具发行方建立业务关系，包括但不限于交易关系，且本公司可以对此类工具具有经济利益；",
            en:"the Firm may establish business, including but not limited to trading relationships, with other issuers of financial instruments and the Firm may have a financial interest in such instruments;",
            vi:"Công ty có thể thành lập doanh nghiệp, bao gồm nhưng không giới hạn trong các mối quan hệ kinh doanh, với các tổ chức phát hành công cụ tài chính khác và Công ty có thể có lợi ích tài chính đối với các công cụ đó;",
            "zh-Hant":"本公司可以和其他金融工具發行方建立業務關系，包括但不限於交易關系，且本公司可以對此類工具具有經濟利益；",
            id:"the Firm may establish business, including but not limited to trading relationships, with other issuers of financial instruments and the Firm may have a financial interest in such instruments;"
        },
        amtClient157:{
            zh:"由于介绍客户，本公司可以向第三方支付佣金或任何其他相关费用。在此情况下，应相应地通知客户。",
            en:"the Firm may pay commission -or any other related fee- to a third party as a result of introducing the client. Under such circumstances the client shall be notified accordingly.",
            vi:"Công ty có thể trả tiền hoa hồng cho bất kỳ khoản phí liên quan nào khác - cho bên thứ ba như là kết quả của việc giới thiệu khách hàng. Trong những trường hợp như vậy, khách hàng sẽ được thông báo phù hợp.",
            "zh-Hant":"由於介紹客戶，本公司可以向第三方支付傭金或任何其他相關費用。在此情況下，應相應地通知客戶。",
            id:"the Firm may pay commission -or any other related fee- to a third party as a result of introducing the client. Under such circumstances the client shall be notified accordingly."
        },
        amtClient158:{
            zh:"3.更多详情请参阅 TigerWit 利益冲突政策；可在线查询，网址：http://global.tigerwit.com。客户可随时申请有关利益冲突政策的更多详情。",
            en:"3.For further details, please read the TigerWit Conflicts of Interest Policy; available online at http://global.tigerwit.com. The client may at any time request further details of the Conflicts of Interest policy.",
            vi:"3.Để biết thêm chi tiết, vui lòng đọc Chính sách về xung đột lợi ích của TigerWit; được trình bày trực tuyến tại http://global.tigerwit.com. Khách hàng có thể yêu cầu thêm bất kỳ thông tin chi tiết nào về chính sách Xung đột lợi ích bất kỳ lúc nào.",
            "zh-Hant":"3.更多詳情請參閱 TigerWit 利益沖突政策；可在線查詢，網址：http://global.tigerwit.com。客戶可隨時申請有關利益沖突政策的更多詳情。",
            id:"3.For further details, please read the TigerWit Conflicts of Interest Policy; available online at http://global.tigerwit.com. The client may at any time request further details of the Conflicts of Interest policy."
        },
        amtClient159:{
            zh:"直接联系许可",
            en:"Direct Contact Consent",
            vi:"Đồng ý liên hệ trực tiếp ",
            "zh-Hant":"直接聯系許可",
            id:"Direct Contact Consent"
        },
        amtClient160:{
            zh:"1.客户同意，TigerWit 不时收到的与客户协议有关或任何其他营销相关的通讯（如适用），均不违反客户根据客户协议项下的任何权利和义务。",
            en:"The client consents that any communication received by TigerWit, from time to time, in relation to the Client Agreement - or any other communication in relation to marketing (if applicable) - does not breach any of the client’s rights and obligations under the Client Agreement.",
            vi:"1.Khách hàng đồng ý rằng bất kỳ việc giao tiếp nào nhận được bởi TigerWit, theo thời gian, liên quan đến Hợp đồng khách hàng - hoặc bất kỳ liên lạc nào khác liên quan đến tiếp thị (nếu có) - không vi phạm bất kỳ quyền và nghĩa vụ nào của khách hàng trong Hợp Đồng Khách Hàng.",
            "zh-Hant":"1.客戶同意，TigerWit 不時收到的與客戶協議有關或任何其他營銷相關的通訊（如適用），均不違反客戶根據客戶協議項下的任何權利和義務。",
            id:"The client consents that any communication received by TigerWit, from time to time, in relation to the Client Agreement - or any other communication in relation to marketing (if applicable) - does not breach any of the client’s rights and obligations under the Client Agreement."
        },
        amtClient161:{
            zh:"声明与保证",
            en:"Representations and Warranties",
            vi:"Đại Diện và Bảo Đảm",
            "zh-Hant":"聲明與保證",
            id:"Representations and Warranties"
        },
        amtClient162:{
            zh:"1.客户声明，客户没有被胁迫或以其他方式被说服订立本客户协议。",
            en:"1.The client represents that he/ she has not been coerced or otherwise persuaded to enter into the Client Agreement.",
            vi:"1.Khách hàng cam kết rằng họ không bị ép buộc hoặc bị thuyết phục tham gia vào Hợp đồng khách hàng.",
            "zh-Hant":"1.客戶聲明，客戶沒有被脅迫或以其他方式被說服訂立本客戶協議。",
            id:"1.The client represents that he/ she has not been coerced or otherwise persuaded to enter into the Client Agreement."
        },
        amtClient163:{
            zh:"2.客户声明，客户（如为自然人）年满十八(18)周岁，或（如为法人）具有完全行为能力；因此，客户可以订立本客户协议。",
            en:"2.The client declares that he/ she is over 18 (eighteen) years of age (in case the client is a natural person) or has full capacity (in case the client is a legal person); therefore, the client may enter into the Client Agreement.",
            vi:"2.Khách hàng tuyên bố rằng anh ta / cô ta trên 18 (mười tám) tuổi (trong trường hợp khách hàng là một cơ thể người tự nhiên) hoặc có đủ năng lực (trong trường hợp khách hàng là pháp nhân); do đó, khách hàng có thể tham gia vào Hợp đồng khách hàng.",
            "zh-Hant":"2.客戶聲明，客戶（如為自然人）年滿十八(18)周歲，或（如為法人）具有完全行為能力；因此，客戶可以訂立本客戶協議。",
            id:"2.The client declares that he/ she is over 18 (eighteen) years of age (in case the client is a natural person) or has full capacity (in case the client is a legal person); therefore, the client may enter into the Client Agreement."
        },
        amtClient164:{
            zh:"3.客户同意，TigerWit 保留不提前发出书面通知即随时撤销管辖客户与其授权代表之间关系的任何授权书的权利。",
            en:"3.The client accepts that TigerWit reserves the right to revoke at any time, without prior written notice, any power of attorney documents that govern the relationship of the client with his/ her authorised representative.",
            vi:"3.Khách hàng chấp nhận rằng TigerWit có quyền thu hồi bất kỳ lúc nào mà không cần thông báo trước bằng văn bản, bất kỳ giấy ủy quyền nào điều chỉnh mối quan hệ của khách hàng với đại diện được ủy quyền của họ.",
            "zh-Hant":"3.客戶同意，TigerWit 保留不提前發出書面通知即隨時撤銷管轄客戶與其授權代表之間關系的任何授權書的權利。",
            id:"3.The client accepts that TigerWit reserves the right to revoke at any time, without prior written notice, any power of attorney documents that govern the relationship of the client with his/ her authorised representative."
        },
        amtClient165:{
            zh:"4.TigerWit 不从事任何可能被视为构成金融服务招揽的行为。客户声明，客户完全知晓订立本服务协议以及客户从事的任何交易活动的任何影响，包括但不限于客户所在的当地司法管辖区施加的任何限制、报告要求以及任何其他要求；且客户进一步保证遵守所有上述适用要求。",
            en:"4.TigerWit is not engaging in any action(s) which may be deemed to constitute a solicitation of financial services. The client declares that he/she is fully aware of any implications, including but not limited to any restrictions, reporting requirements, and any other requirement set by his/her local jurisdiction in relation to entering the Service Agreement and any trading activity he/she undertakes; and further undertakes to comply with all such applicable requirements.",
            vi:"4.TigerWit không tham gia vào bất kỳ (các) hành động nào có thể được coi là cấu thành việc gây quỹ dịch vụ tài chính. Khách hàng tuyên bố rằng họ hoàn toàn nhận thức được mọi ý nghĩa, bao gồm nhưng không giới hạn bất kỳ hạn chế, yêu cầu báo cáo và bất kỳ yêu cầu nào khác do cơ quan thẩm quyền địa phương của mình đặt ra liên quan đến việc tham gia Thỏa thuận dịch vụ và bất kỳ hoạt động giao dịch nào cam kết; và tiếp tục cam kết tuân thủ tất cả các yêu cầu áp dụng như vậy.",
            "zh-Hant":"4.TigerWit 不從事任何可能被視為構成金融服務招攬的行為。客戶聲明，客戶完全知曉訂立本服務協議以及客戶從事的任何交易活動的任何影響，包括但不限於客戶所在的當地司法管轄區施加的任何限制、報告要求以及任何其他要求；且客戶進壹步保證遵守所有上述適用要求。",
            id:"4.TigerWit is not engaging in any action(s) which may be deemed to constitute a solicitation of financial services. The client declares that he/she is fully aware of any implications, including but not limited to any restrictions, reporting requirements, and any other requirement set by his/her local jurisdiction in relation to entering the Service Agreement and any trading activity he/she undertakes; and further undertakes to comply with all such applicable requirements."
        },
        amtClient166:{
            zh:"5.客户声明，任何金融工具交易相对于客户的具体财务状况而言均属适当和/或合理，且客户已经或（如有必要）将会寻求独立的财务意见。",
            en:"5.The client declares that any trading in financial instruments is proportional and/ or reasonable to his/ her specific financial situation and that independent financial advice has been sought, or will be if necessary.",
            vi:"5.Khách hàng tuyên bố rằng bất kỳ giao dịch nào trong các công cụ tài chính đều cân xứng và / hoặc hợp lý đối với tình hình tài chính cụ thể của mình và tư vấn tài chính độc lập đã được khách hàng tìm đến, hoặc sẽ tìm đến nếu cần thiết.",
            "zh-Hant":"5.客戶聲明，任何金融工具交易相對於客戶的具體財務狀況而言均屬適當和/或合理，且客戶已經或（如有必要）將會尋求獨立的財務意見。",
            id:"5.The client declares that any trading in financial instruments is proportional and/ or reasonable to his/ her specific financial situation and that independent financial advice has been sought, or will be if necessary."
        },
        amtClient167:{
            zh:"6.客户同意，任何金融工具的交易只能通过 TigerWit 交易平台或 TigerWit 在任何特定时间向客户提供的其他平台进行。",
            en:"6.The client accepts that the trading of any transactions in financial instruments shall occur only through the TigerWit trading platforms(s) or other platform available to TigerWit at any given time to the client.",
            vi:"6.Khách hàng chấp nhận rằng giao dịch của bất kỳ giao dịch nào trong các công cụ tài chính chỉ xảy ra thông qua các sàn giao dịch TigerWit hoặc nền tảng khác có sẵn cho TigerWit tại bất kỳ thời điểm nào cho khách hàng.",
            "zh-Hant":"6.客戶同意，任何金融工具的交易只能通過 TigerWit 交易平臺或 TigerWit 在任何特定時間向客戶提供的其他平臺進行。",
            id:"6.The client accepts that the trading of any transactions in financial instruments shall occur only through the TigerWit trading platforms(s) or other platform available to TigerWit at any given time to the client."
        },
        amtClient168:{
            zh:"7.客户同意各金融工具的合同条款作为上述条款，可在以下网站查询 http://global.tigerwit.com。此外，客户同意本公司在未向客户发出事先书面通知情况下保留变更合同条款的权利。",
            en:"7.The client accepts the contract specifications for each financial instrument as such specifications, available online at http://global.tigerwit.com. In addition, the client accepts that the Firm reserves the right to change the contract specifications without giving him/ her prior written notice.",
            vi:"7.Khách hàng chấp nhận thông số kỹ thuật hợp đồng cho từng công cụ tài chính theo các thông số kỹ thuật như vậy, được trình bày tại http://global.tigerwit.com. Ngoài ra, khách hàng chấp nhận rằng Công ty bảo lưu quyền thay đổi các thông số hợp đồng mà không thông báo trước bằng văn bản cho anh ta / cô ta.",
            "zh-Hant":"7.客戶同意各金融工具的合同條款作為上述條款，可在以下網站查詢 http://global.tigerwit.com。此外，客戶同意本公司在未向客戶發出事先書面通知情況下保留變更合同條款的權利。",
            id:"7.The client accepts the contract specifications for each financial instrument as such specifications, available online at http://global.tigerwit.com. In addition, the client accepts that the Firm reserves the right to change the contract specifications without giving him/ her prior written notice."
        },
        amtClient169:{
            zh:"8.若客户由不止一个自然人或法人组成，客户在本客户协议项下的义务和责任应为共同和个别责任；在上述情况下，任何通讯包括但不限于通知或指令应解释为送达共同组成客户的全体自然人或法人。",
            en:"8.If client is more than one natural or legal persons, the client’s obligations and liability under the Client Agreement shall be joint and several; under the above-mentioned circumstances any communication, including but not limited to a notice and order, shall be construed as delivered to all natural or legal persons that together form the client.",
            vi:"8.Nếu một khách hàng là nhiều hơn một cá nhân tự nhiên hoặc pháp nhân, nghĩa vụ và trách nhiệm pháp lý của khách hàng theo Hợp đồng khách hàng sẽ là hợp đồng hợp tác của hai hay nhiều bên; trong các trường hợp nêu trên, bất kỳ thông tin nào, bao gồm nhưng không giới hạn trong một thông báo và trật tự, được hiểu là giao cho tất cả những người tự nhiên hoặc pháp nhân cùng nhau tạo thành khách hàng.",
            "zh-Hant":"8.若客戶由不止壹個自然人或法人組成，客戶在本客戶協議項下的義務和責任應為共同和個別責任；在上述情況下，任何通訊包括但不限於通知或指令應解釋為送達共同組成客戶的全體自然人或法人。",
            id:"8.If client is more than one natural or legal persons, the client’s obligations and liability under the Client Agreement shall be joint and several; under the above-mentioned circumstances any communication, including but not limited to a notice and order, shall be construed as delivered to all natural or legal persons that together form the client."
        },
        amtClient170:{
            zh:"9.客户接受，本公司应采取一切合理措施确保法律的遵守；上述合理措施应对客户具有约束力",
            en:"9.The client accepts that the Firm shall take all reasonable steps to ensure compliance with the Law ; such reasonable steps shall be binding upon the client",
            vi:"9.Khách hàng chấp nhận rằng Công ty sẽ thực hiện tất cả các bước hợp lý để đảm bảo tuân thủ Luật; các bước hợp lý như vậy sẽ ràng buộc khách hàng",
            "zh-Hant":"9.客戶接受，本公司應采取壹切合理措施確保法律的遵守；上述合理措施應對客戶具有約束力",
            id:"9.The client accepts that the Firm shall take all reasonable steps to ensure compliance with the Law ; such reasonable steps shall be binding upon the client"
        },
        amtClient171:{
            zh:"10.客户接受以下事实：TigerWit 对存入客户交易账户的客户到期应付 TigerWit 的任何金额拥有留置权。尽管本公司无需客户许可也能行使留置权，但本公司应相应地告知客户其意图。",
            en:"10.The client accepts the fact that TigerWit shall have a lien on any amount that is deposited in his/ her trading account that is due for payment by the former to the latter. Although the Firm does not need the client’s consent in order to exercise the lien the former shall notify the latter of its intention, accordingly.",
            vi:"10.Khách hàng chấp nhận điều thực tế là TigerWit sẽ có quyền nắm giữ bất kỳ khoản tiền nào được gửi vào tài khoản giao dịch của mình đến hạn thanh toán mà khách hàng nợ công ty. Mặc dù Công ty không cần sự đồng ý của khách hàng để thực hiện quyền thế chấp, nhưng theo đó, Công ty sẽ thông báo cho họ về ý định của mình.",
            "zh-Hant":"10.客戶接受以下事實：TigerWit 對存入客戶交易賬戶的客戶到期應付 TigerWit 的任何金額擁有留置權。盡管本公司無需客戶許可也能行使留置權，但本公司應相應地告知客戶其意圖。",
            id:"10.The client accepts the fact that TigerWit shall have a lien on any amount that is deposited in his/ her trading account that is due for payment by the former to the latter. Although the Firm does not need the client’s consent in order to exercise the lien the former shall notify the latter of its intention, accordingly."
        },
        amtClient172:{
            zh:"11.客户声明，如有到期应付给 TigerWit 的金额，则 TigerWit 有权从客户的交易账户中立即扣除相关金额。",
            en:"11.The client represents that if an amount is due for payment to TigerWit, the later shall be entitled to debit the relevant amount from the client’s trading account immediately.",
            vi:"11.Khách hàng tuyên bố rằng nếu một số tiền đến hạn thanh toán cho TigerWit, thì sau này sẽ được ghi nợ số tiền có liên quan từ tài khoản giao dịch của khách hàng ngay lập tức.",
            "zh-Hant":"11.客戶聲明，如有到期應付給 TigerWit 的金額，則 TigerWit 有權從客戶的交易賬戶中立即扣除相關金額。",
            id:"11.The client represents that if an amount is due for payment to TigerWit, the later shall be entitled to debit the relevant amount from the client’s trading account immediately."
        },
        amtClient173:{
            zh:"12.客户许可，如果客户的交易账户处于非活跃状态长达六个月且账户余额不足十五(15)美元或等值外币，则 TigerWit 可以单方面禁用该交易账户。客户可随时启用其交易账户；交易账户状态可以通过 TigerWit 的应用程序或网站(http://global.tigerwit.com)查看。",
            en:"12.The client consents that if his/ her trading account is inactive for six months and its balance is less than USD15 (fifteen), or currency equivalent, then TigerWit may at its discretion disable the trading account. The client may enable his/ her trading account, at any time; the status of a trading account can be viewed through TigerWit’s app or website (http://global.tigerwit.com).",
            vi:"12.Khách hàng đồng ý rằng nếu tài khoản giao dịch của họ không hoạt động trong sáu tháng và số dư của nó ít hơn 15 đô la (mười lăm) hoặc tương đương tiền, thì TigerWit có thể tùy ý vô hiệu hóa tài khoản giao dịch. Khách hàng có thể kích hoạt tài khoản giao dịch của mình, bất kỳ lúc nào; trạng thái của tài khoản giao dịch có thể được xem qua ứng dụng hoặc trang web của TigerWit (http://global.tigerwit.com).",
            "zh-Hant":"12.客戶許可，如果客戶的交易賬戶處於非活躍狀態長達六個月且賬戶余額不足十五(15)美元或等值外幣，則 TigerWit 可以單方面禁用該交易賬戶。客戶可隨時啟用其交易賬戶；交易賬戶狀態可以通過 TigerWit 的應用程序或網站(http://global.tigerwit.com)查看。",
            id:"12.The client consents that if his/ her trading account is inactive for six months and its balance is less than USD15 (fifteen), or currency equivalent, then TigerWit may at its discretion disable the trading account. The client may enable his/ her trading account, at any time; the status of a trading account can be viewed through TigerWit’s app or website (http://global.tigerwit.com)."
        },
        amtClient174:{
            zh:"不可抗力事件",
            en:"Force Majeur Event",
            vi:"Sự kiện bất khả kháng",
            "zh-Hant":"不可抗力事件",
            id:"Force Majeur Event"
        },
        amtClient175:{
            zh:"1.TigerWit 应依据其合理意见，确定已发生不可抗力事件；在此情况下，本公司应采取一切合理措施通知客户。",
            en:"1.TigerWit shall, in its reasonable opinion, determine that a force majeure event occurred; under such circumstances the Firm shall take all reasonable steps in order to inform the client.",
            vi:"1.TigerWit, theo ý kiến hợp lý của mình, xác định rằng một sự kiện bất khả kháng xảy ra; trong những trường hợp như vậy, Công ty sẽ thực hiện tất cả các bước hợp lý để thông báo cho khách hàng.",
            "zh-Hant":"1.TigerWit 應依據其合理意見，確定已發生不可抗力事件；在此情況下，本公司應采取壹切合理措施通知客戶。",
            id:"1.TigerWit shall, in its reasonable opinion, determine that a force majeure event occurred; under such circumstances the Firm shall take all reasonable steps in order to inform the client."
        },
        amtClient176:{
            zh:"2.不可抗力事件包括但不限于金融工具交易之后发生的任何自然、技术、政治、政府、社会、经济（包括但不限于暂停货币）等方面的事件或情况，而且交易进行当日无法预料到此类事件或情况的发生。除上述情况外，不可抗力事件还包括针对 TigerWit 服务器的非法操作事件，并且不在客户或 TigerWit 的控制范围内。",
            en:"2.A force majeure event is as an event or circumstance, including but not limited to any natural, technological, political, governmental, social, economic (including without limitation to the suspension of a currency) or similar event or circumstance that occurred after a transaction in a financial instrument occurred and such event or circumstance has not been anticipated at the date of entering into the transaction. In addition to the above, a force majeure event may include instances of illegitimate actions against the TigerWit servers that may be outside the control of with the client or TigerWit.",
            vi:"2.Sự kiện bất khả kháng là một sự kiện hoặc hoàn cảnh, bao gồm nhưng không giới hạn với bất kỳ sự kiện tự nhiên, công nghệ, chính trị, chính trị, xã hội, kinh tế (bao gồm nhưng không giới hạn việc đình chỉ tiền tệ) hoặc sự kiện hoặc hoàn cảnh tương tự xảy ra sau giao dịch trong một công cụ tài chính đã xảy ra và sự kiện hoặc hoàn cảnh đó chưa được dự đoán tại ngày giao dịch. Ngoài ra, một sự kiện bất khả kháng có thể bao gồm các trường hợp hành động bất hợp pháp đối với các máy chủ TigerWit có thể nằm ngoài tầm kiểm soát của khách hàng hoặc TigerWit.",
            "zh-Hant":"2.不可抗力事件包括但不限於金融工具交易之後發生的任何自然、技術、政治、政府、社會、經濟（包括但不限於暫停貨幣）等方面的事件或情況，而且交易進行當日無法預料到此類事件或情況的發生。除上述情況外，不可抗力事件還包括針對 TigerWit 服務器的非法操作事件，並且不在客戶或 TigerWit 的控制範圍內。",
            id:"2.A force majeure event is as an event or circumstance, including but not limited to any natural, technological, political, governmental, social, economic (including without limitation to the suspension of a currency) or similar event or circumstance that occurred after a transaction in a financial instrument occurred and such event or circumstance has not been anticipated at the date of entering into the transaction. In addition to the above, a force majeure event may include instances of illegitimate actions against the TigerWit servers that may be outside the control of with the client or TigerWit."
        },
        amtClient177:{
            zh:"3.如果 TigerWit 确定已发生不可抗力事件，在不影响客户根据客户协议项下任何其他权利的情况下，本公司可以：",
            en:"3.If TigerWit determines that a force majeure event occurred, without prejudice to any other rights of the client under the Client Agreement, the Firm may: ",
            vi:"3.Nếu TigerWit xác định rằng một sự kiện bất khả kháng xảy ra, không ảnh hưởng đến bất kỳ quyền nào khác của khách hàng theo Hợp đồng khách hàng, Công ty có thể: ",
            "zh-Hant":"3.如果 TigerWit 確定已發生不可抗力事件，在不影響客戶根據客戶協議項下任何其他權利的情況下，本公司可以：",
            id:"3.If TigerWit determines that a force majeure event occurred, without prejudice to any other rights of the client under the Client Agreement, the Firm may: "
        },
        amtClient178:{
            zh:"提高保证金规定额；",
            en:"increase margin requirements; and/ or",
            vi:"tăng yêu cầu ký quỹ; và / hoặc",
            "zh-Hant":"提高保證金規定額；",
            id:"increase margin requirements; and/ or"
        },
        amtClient179:{
            zh:"增加点差；",
            en:"increase spreads; and/ or",
            vi:"tăng spread; và / hoặc",
            "zh-Hant":"增加點差；",
            id:"increase spreads; and/ or"
        },
        amtClient180:{
            zh:"降低杠杆；",
            en:"decrease leverage; and/ or",
            vi:"tăng spread; và / hoặc",
            "zh-Hant":"降低杠桿；",
            id:"decrease leverage; and/ or"
        },
        amtClient181:{
            zh:"以真诚的方式按照本公司认为合理的价格关闭任何未平仓头寸；",
            en:"close-out, in good faith, any open positions at a price that the Firm considers reasonable; and/ or",
            vi:"sự khóa sổ, với thiện chí, bất kỳ vị thế mở nào với mức giá mà Công ty coi là hợp lý; và / hoặc",
            "zh-Hant":"以真誠的方式按照本公司認為合理的價格關閉任何未平倉頭寸；",
            id:"close-out, in good faith, any open positions at a price that the Firm considers reasonable; and/ or"
        },
        amtClient182:{
            zh:"申请对任何平仓的头寸作出修正；",
            en:"request amendments to any closed positions; and/ or",
            vi:"yêu cầu sửa đổi cho bất kỳ vị thế đóng cửa nào; và / hoặc",
            "zh-Hant":"申請對任何平倉的頭寸作出修正；",
            id:"request amendments to any closed positions; and/ or"
        },
        amtClient183:{
            zh:"暂停向客户提供投资和/或辅助服务；",
            en:"suspend the provision of investment and/ or ancillary services to the client; and/ or",
            vi:"đình chỉ việc cung cấp đầu tư và / hoặc dịch vụ hỗ trợ cho khách hàng; và / hoặc",
            "zh-Hant":"暫停向客戶提供投資和/或輔助服務；",
            id:"suspend the provision of investment and/ or ancillary services to the client; and/ or"
        },
        amtClient184:{
            zh:"对本客户协议中 TigerWit 不可能遵守的任何内容进行修订。",
            en:"amend any of the content of the Client Agreement on the basis that it is impossible for TigerWit to comply with it.",
            vi:"sửa đổi bất kỳ nội dung nào của Hợp đồng khách hàng trên cơ sở TigerWit không thể tuân thủ nó.",
            "zh-Hant":"對本客戶協議中 TigerWit 不可能遵守的任何內容進行修訂。",
            id:"amend any of the content of the Client Agreement on the basis that it is impossible for TigerWit to comply with it."
        },
        amtClient185:{
            zh:"除非是法律规定，为保护本公司的合法利益，TigerWit 有权随时拒绝向客户提供任何投资或辅助服务，而无需告知客户原因。",
            en:"Unless required by Law, TigerWit in entitled to refuse the provision of any investment or ancillary service to the client, at any time, without being obliged to inform the client of the reasons to do so in order to protect the legitimate interests of the Firm.",
            vi:"Trừ khi được luật pháp yêu cầu, TigerWit có quyền từ chối cung cấp bất kỳ khoản đầu tư hoặc dịch vụ hỗ trợ nào cho khách hàng, bất kỳ lúc nào mà không có nghĩa vụ thông báo cho khách hàng về lý do để làm như vậy để bảo vệ lợi ích hợp pháp của Công ty.",
            "zh-Hant":"除非是法律規定，為保護本公司的合法利益，TigerWit 有權隨時拒絕向客戶提供任何投資或輔助服務，而無需告知客戶原因。",
            id:"Unless required by Law, TigerWit in entitled to refuse the provision of any investment or ancillary service to the client, at any time, without being obliged to inform the client of the reasons to do so in order to protect the legitimate interests of the Firm."
        },
        amtClient186:{
            zh:"适用法律、管辖权与争议解决",
            en:"Governing Law, Jurisdiction and Dispute Resolution",
            vi:"Luật Quản lý, Thẩm Quyền và Giải Quyết Tranh Chấp",
            "zh-Hant":"適用法律、管轄權與爭議解決",
            id:"Governing Law, Jurisdiction and Dispute Resolution"
        },
        amtClient187:{
            zh:"1.客户可以向合规专员提出书面投诉，投诉地址为 201 Church Street, Sandyport, PO BoxSP 64368, Nassau, The Bahamas。如果客户仍不满意于 TigerWit 随后开展的调查与回复，客户可以联系巴哈马证券监察委员会。完整详情载于我们的内部投诉程序，可随时根据要求向客户提供。",
            en:"1.The client may raise a complaint in writing to the Compliance Officer, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas. If following TigerWit's subsequent investigation and response the client is still not satisfied he/she may contact the Securities Commission of The Bahamas. Full details are contained within our internal complaints procedure, which is available to the client on request at any time.",
            vi:"1.Khách hàng có thể khiếu nại bằng văn bản cho Cán bộ Kiểm Soát, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, Bahamas. Nếu sau việc điều tra và phản hồi tiếp theo của TigerWit, khách hàng vẫn không hài lòng họ có thể liên lạc với Ủy ban Chứng khoán Bahamas. Chi tiết đầy đủ được trình bày trong phần thủ tục khiếu nại nội bộ của chúng tôi, có sẵn cho khách hàng theo yêu cầu bất cứ lúc nào.",
            "zh-Hant":"1.客戶可以向合規專員提出書面投訴，投訴地址為 201 Church Street, Sandyport, PO BoxSP 64368, Nassau, The Bahamas。如果客戶仍不滿意於 TigerWit 隨後開展的調查與回復，客戶可以聯系巴哈馬證券監察委員會。完整詳情載於我們的內部投訴程序，可隨時根據要求向客戶提供。",
            id:"1.The client may raise a complaint in writing to the Compliance Officer, 201 Church Street, Sandyport, PO Box SP 64368, Nassau, The Bahamas. If following TigerWit's subsequent investigation and response the client is still not satisfied he/she may contact the Securities Commission of The Bahamas. Full details are contained within our internal complaints procedure, which is available to the client on request at any time."
        },
        amtClient188:{
            zh:"客户同意，本客户协议及本公司根据本协议提供的任何投资和/或辅助服务均适用于巴哈马国法律。",
            en:"The client accepts that the Client Agreement and any investment and/ or ancillary services provided under it by the Firm shall be governed by the Laws of The Bahamas.",
            vi:"Khách hàng chấp nhận rằng Hợp đồng khách hàng và mọi dịch vụ đầu tư và / hoặc phụ trợ do Công ty cung cấp sẽ được điều chỉnh bởi Luật của Bahamas.",
            "zh-Hant":"客戶同意，本客戶協議及本公司根據本協議提供的任何投資和/或輔助服務均適用於巴哈馬國法律。",
            id:"The client accepts that the Client Agreement and any investment and/ or ancillary services provided under it by the Firm shall be governed by the Laws of The Bahamas."
        },
        amtClient189:{
            zh:"2.可能涉及 TigerWit 和客户的任何诉讼与和解都应提交至巴哈马国的管辖法院解决。",
            en:"2.Any proceedings and their settlement that may involve TigerWit and the client shall take place in the competent courts of The Bahamas.",
            vi:"2.Bất kỳ thủ tục tố tụng nào và phán quyết của chúng có thể liên quan đến TigerWit và khách hàng sẽ diễn ra tại các tòa án có thẩm quyền của Bahamas.",
            "zh-Hant":"2.可能涉及 TigerWit 和客戶的任何訴訟與和解都應提交至巴哈馬國的管轄法院解決。",
            id:"2.Any proceedings and their settlement that may involve TigerWit and the client shall take place in the competent courts of The Bahamas."
        },
        amtClient190:{
            zh:"其他",
            en:"Miscellaneous",
            vi:"Khác",
            "zh-Hant":"其他",
            id:"Miscellaneous"
        },
        amtClient191:{
            zh:"1.除非另有明确指示，客户应以书面形式向公司发出任何通知、指令、申请或其他通讯，并应发送至 TigerWit 的办公室地址，见于网站“联系我们”页面(http://global.tigerwit.com)。向本公司发出的任何通知、指令、申请或其他通讯均自公司接收起生效。",
            en:"1.Unless specifically instructed otherwise any notice, instruction, request or other communication shall be given by the client to the Firm in writing and shall be sent to TigerWit’s office address, which appears on the ‘Contact Us’ page (http://global.tigerwit.com). Any notice, instruction, request or other communication sent to Firm shall be effective when received by the Firm.",
            vi:"1.Trừ khi được hướng dẫn cụ thể, mọi thông báo, hướng dẫn, yêu cầu hoặc thông tin liên lạc khác sẽ được khách hàng gửi cho Công ty bằng văn bản và sẽ được gửi đến địa chỉ văn phòng của TigerWit, được ghi trên trang Liên hệ với chúng tôi tại (http: //global.tigerwit .com). Mọi thông báo, hướng dẫn, yêu cầu hoặc thông tin liên lạc khác gửi đến Công ty sẽ có hiệu lực khi Công ty nhận được.",
            "zh-Hant":"1.除非另有明確指示，客戶應以書面形式向公司發出任何通知、指令、申請或其他通訊，並應發送至 TigerWit 的辦公室地址，見於網站“聯系我們”頁面(http://global.tigerwit.com)。向本公司發出的任何通知、指令、申請或其他通訊均自公司接收起生效。",
            id:"1.Unless specifically instructed otherwise any notice, instruction, request or other communication shall be given by the client to the Firm in writing and shall be sent to TigerWit’s office address, which appears on the ‘Contact Us’ page (http://global.tigerwit.com). Any notice, instruction, request or other communication sent to Firm shall be effective when received by the Firm."
        },
        amtClient192:{
            zh:"2.任何情况下客户都不得将其在本客户协议项下的任何权利和/或义务转让或转移至其他自然人或法人。",
            en:"2.The client shall not, under any circumstance, assign or transfer any of his/ her rights and/ or obligations under the Client Agreement to another natural or legal person.",
            vi:"2.Khách hàng sẽ không, trong bất kỳ trường hợp nào, chuyển nhượng hoặc chuyển giao bất kỳ quyền và / hoặc nghĩa vụ nào của mình theo Hợp đồng khách hàng cho một cá nhân tự nhiên hoặc pháp nhân khác.",
            "zh-Hant":"2.任何情況下客戶都不得將其在本客戶協議項下的任何權利和/或義務轉讓或轉移至其他自然人或法人。",
            id:"2.The client shall not, under any circumstance, assign or transfer any of his/ her rights and/ or obligations under the Client Agreement to another natural or legal person."
        },
        amtClient193:{
            zh:"3.本公司可以通过书面形式通知客户，将其在本客户协议项下的任何权利和/或义务全部或部分转让或转移至其他自然人或法人，前提是该自然人或法人同意遵守本客户协议。",
            en:"3.The Firm may, by way of written notice to the client, assign or transfer any of its rights and/ or obligations under the Client Agreement to another natural or legal person, in whole or in part provided that such natural or legal person agrees to abide by the Client Agreement.",
            vi:"3.Công ty có thể, bằng cách thông báo bằng văn bản cho khách hàng, chuyển nhượng hoặc chuyển giao bất kỳ quyền và / hoặc nghĩa vụ của mình theo Hợp đồng khách hàng cho một cá nhân hoặc pháp nhân khác, toàn bộ hoặc một phần với điều kiện là pháp nhân hoặc pháp nhân đó đồng ý tuân theo Hợp đồng khách hàng. ",
            "zh-Hant":"3.本公司可以通過書面形式通知客戶，將其在本客戶協議項下的任何權利和/或義務全部或部分轉讓或轉移至其他自然人或法人，前提是該自然人或法人同意遵守本客戶協議。",
            id:"3.The Firm may, by way of written notice to the client, assign or transfer any of its rights and/ or obligations under the Client Agreement to another natural or legal person, in whole or in part provided that such natural or legal person agrees to abide by the Client Agreement."
        },
        amtClient194:{
            zh:"4.如果出于任何原因，客户协议的一部分被有管辖权的法院认定为不具执行力，则该部分应从客户协议中分割出去，本客户协议的其余条款不受影响。",
            en:"4.If, for any reason, a part of the Client Agreement is deemed to be unenforceable by a court of a competent jurisdiction then such part shall be severed from the Client Agreement and the remainder of the Client Agreement shall remain unaffected.",
            vi:"4.Nếu, vì bất kỳ lý do nào, một phần của Hợp đồng khách hàng được coi là không thể thi hành bởi một tòa án có thẩm quyền thì phần đó sẽ bị cắt đứt khỏi Hợp đồng khách hàng và phần còn lại của Hợp đồng khách hàng sẽ không bị ảnh hưởng.",
            "zh-Hant":"4.如果出於任何原因，客戶協議的壹部分被有管轄權的法院認定為不具執行力，則該部分應從客戶協議中分割出去，本客戶協議的其余條款不受影響。",
            id:"4.If, for any reason, a part of the Client Agreement is deemed to be unenforceable by a court of a competent jurisdiction then such part shall be severed from the Client Agreement and the remainder of the Client Agreement shall remain unaffected."
        },
        amtClient195:{
            zh:"常见问题解答",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題解答",
            id:"FAQs"
        },
        amtClient196:{
            zh:"1.涉及本客户协议或 TigerWit 条款与条件的问题首先应向客户服务部咨询。",
            en:"1.Questions regarding this Client Agreement or TigerWit's Terms and Conditions should be addressed, in the first instance, to the Customer Support Department.",
            vi:"1.Các câu hỏi liên quan đến Hợp đồng khách hàng này hoặc Điều khoản và Điều kiện của TigerWit cần được giải quyết, ban đầu, được gửi đến Bộ phận Hỗ trợ Khách hàng.",
            "zh-Hant":"1.涉及本客戶協議或 TigerWit 條款與條件的問題首先應向客戶服務部咨詢。",
            id:"1.Questions regarding this Client Agreement or TigerWit's Terms and Conditions should be addressed, in the first instance, to the Customer Support Department."
        },
        amtClient197:{
            zh:"2.客户服务部",
            en:"2.Customer Support Department",
            vi:"2.Bộ Phận Hỗ Trợ Khách Hàng",
            "zh-Hant":"2.客戶服務部",
            id:"2.Customer Support Department"
        },
        amtClient199:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtClient200:{
            zh:"其他联系人",
            en:"Additional Contacts",
            vi:"Địa Chỉ Liên Hệ Bổ Sung",
            "zh-Hant":"其他聯系人",
            id:"Additional Contacts"
        },
        amtClient201:{
            zh:"1.交易部门",
            en:"1.Dealing Department",
            vi:"1.Phòng Xử Lý",
            "zh-Hant":"1.交易部門",
            id:"1.Dealing Department"
        },
        amtClient203:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtClient204:{
            zh:"2.合规部门",
            en:"2.Compliance Department",
            vi:"2.Phòng Giám Sát",
            "zh-Hant":"2.合規部門",
            id:"2.Compliance Department"
        },
        amtClient206:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtRisk1:{
            zh:"风险警告：差价合约（CFD）是复杂的金融产品，其中大部分没有设定到期日。因此，CFD 头寸在您选择关闭现有未平仓头寸之日到期。CFD是一种杠杆产品，会产生较高的风险并可能导致您损失全部的投资资本。因此，CFD 可能并不适合所有人士。您所承担的风险不应超过已经做好准备承担的损失。在决定进行交易之前，您应该确保了解所涉及的风险，并考虑自己的经验水平。如果有必要，您应该寻求独立建议。",
            en:"RISK WARNING: Contracts for Difference (‘CFDs’) are complex financial products, most of which have no set maturity date. Therefore, a CFD position matures on the date you choose to close an existing open position. CFDs, which are leveraged products, incur a high level of risk and can result in the loss of all of your invested capital. As a result, CFDs may not be suitable for all individuals. You should not risk more than you are prepared to lose. Before deciding to trade, you should ensure that you understand the risks involved and take into account your level of experience. You should seek independent advice, if necessary.",
            vi:"CẢNH BÁO RỦI RO: Contracts for Difference (‘CFDs’) là những sản phẩm tài chính phức tạp, hầu hết trong số đó không có ngày đáo hạn đã định. Do đó, một vị thế CFD đáo hạn vào ngày bạn chọn đóng một vị thế mở hiện tại. CFDs, là sản phẩm đòn bẩy, chịu rủi ro cao và có thể dẫn đến mất tất cả vốn đầu tư của bạn. Kết quả là, CFD có thể không phù hợp với tất cả các cá nhân. Bạn không nên mạo hiểm nhiều hơn bạn chuẩn bị để mất. Trước khi quyết định giao dịch, bạn nên đảm bảo rằng bạn hiểu những rủi ro có liên quan và tính đến mức độ kinh nghiệm của bạn. Bạn nên tìm tư vấn độc lập, nếu cần. ",
            "zh-Hant":"風險警告：差價合約（CFD）是復雜的金融產品，其中大部分沒有設定到期日。因此，CFD 頭寸在您選擇關閉現有未平倉頭寸之日到期。CFD是壹種杠桿產品，會產生較高的風險並可能導致您損失全部的投資資本。因此，CFD 可能並不適合所有人士。您所承擔的風險不應超過已經做好準備承擔的損失。在決定進行交易之前，您應該確保了解所涉及的風險，並考慮自己的經驗水平。如果有必要，您應該尋求獨立建議。",
            id:"RISK WARNING: Contracts for Difference (‘CFDs’) are complex financial products, most of which have no set maturity date. Therefore, a CFD position matures on the date you choose to close an existing open position. CFDs, which are leveraged products, incur a high level of risk and can result in the loss of all of your invested capital. As a result, CFDs may not be suitable for all individuals. You should not risk more than you are prepared to lose. Before deciding to trade, you should ensure that you understand the risks involved and take into account your level of experience. You should seek independent advice, if necessary."
        },
        amtRisk2:{
            zh:"本声明的范围",
            en:"Scope of This Notice",
            vi:"Phạm vi thông báo",
            "zh-Hant":"本聲明的範圍",
            id:"Scope of This Notice"
        },
        amtRisk3:{
            zh:"1.TigerWit Limited（以下简称“TigerWit”、“本公司”、“我们”）为您提供“风险披露声明”（“声明”），以帮助您了解交易差价合约（“CFD”）时可能会出现的风险。但是您需要牢记，该声明并没有包含交易 CFD 所涉及的所有风险和问题。客户（以下称为“客户”、“您”、和“您自己”）应仔细阅读“声明”和“客户协议”、“订单执行政策”以及您可通过我们的网站获取的文件和信息。",
            en:"1.TigerWit Limited (referred to as ‘TigerWit’, the ‘Firm’, ‘us’, ‘we’ and ‘our’) provides you with this ‘Risk Disclosure Notice’ (the ‘Notice’) to help you understand the risks that might arise when trading Contracts for Difference (‘CFDs’). However, you need to bear in mind that the Notice does not contain all the risks and aspects involved in trading CFDs. The Client (referred to as the ‘Client’, ‘you’, ‘your’ and ‘yourself’) should carefully read the Notice in conjunction with the ‘Client Agreement’, the ‘Order Execution Policy’ and the documentation and information available to you through our Website.",
            vi:"1.TigerWit Limited (được gọi là ‘TigerWit’, ‘Công ty’, ‘chúng tôi’, ‘chúng tôi’, và ‘của chúng tôi’) cung cấp cho bạn ‘Thông báo Tiết lộ Rủi ro’ (‘Thông báo’) để giúp bạn hiểu những rủi ro có thể phát sinh khi giao dịch Hợp đồng Chênh Lệch (‘CFD’). Tuy nhiên, bạn cần lưu ý rằng Thông basokhoong chứa tất cả các rủi ro và các khía cạnh liên quan đến giao dịch CFD. Khách hàng (được gọi là ‘Khách hàng’, ‘bạn’, ‘của bạn’ và ‘ bản thân bạn’) nên đọc kỹ Thông báo cùng với ‘Thỏa thuận khách hàng’, ‘ Chính sách thực hiện đơn hàng’ và tài liệu và thông tin có sẵn cho bạn thông qua trang web của chúng tôi. ",
            "zh-Hant":"1.TigerWit Limited（以下簡稱“TigerWit”、“本公司”、“我們”）為您提供“風險披露聲明”（“聲明”），以幫助您了解交易差價合約（“CFD”）時可能會出現的風險。但是您需要牢記，該聲明並沒有包含交易 CFD 所涉及的所有風險和問題。客戶（以下稱為“客戶”、“您”、和“您自己”）應仔細閱讀“聲明”和“客戶協議”、“訂單執行政策”以及您可通過我們的網站獲取的文件和信息。",
            id:"1.TigerWit Limited (referred to as ‘TigerWit’, the ‘Firm’, ‘us’, ‘we’ and ‘our’) provides you with this ‘Risk Disclosure Notice’ (the ‘Notice’) to help you understand the risks that might arise when trading Contracts for Difference (‘CFDs’). However, you need to bear in mind that the Notice does not contain all the risks and aspects involved in trading CFDs. The Client (referred to as the ‘Client’, ‘you’, ‘your’ and ‘yourself’) should carefully read the Notice in conjunction with the ‘Client Agreement’, the ‘Order Execution Policy’ and the documentation and information available to you through our Website."
        },
        amtRisk4:{
            zh:"2.您需要确保在知情的基础上，根据自身的知识和经验以及您的个人情况（包括但不限于您的财务状况）来作出交易 CFD 的所有决策。此外，您要确保了解 CFD 的性质以及交易 CFD所涉及所有风险和问题的程度。",
            en:"2.You need to ensure that any decision to engage in trading CFDs is made on an informed basis and in light of your knowledge and experience as well as to your personal circumstances (including but not limited to your financial position). In addition, you need to ensure that you understand the nature of CFDs and the extent of all risks and aspects involved in trading CFDs.",
            vi:"2.Bạn cần đảm bảo rằng mọi quyết định tham gia vào giaodijch CFD đều được thực hiện trên cơ sở thông tin và hiểu biết và kinh nghiệm cũng như hoàn cảnh cá nhân của bạn (bao gồm nhưng không giới hạn ở vị trí tài chính của bạn). Ngoài ra, bạn cần đảm bảo rằng bạn hiểu bẩn chất của CFD và mức độ rủi ro và khía cạnh liên quan đến giao dịch CFD. ",
            "zh-Hant":"2.您需要確保在知情的基礎上，根據自身的知識和經驗以及您的個人情況（包括但不限於您的財務狀況）來作出交易 CFD 的所有決策。此外，您要確保了解 CFD 的性質以及交易 CFD所涉及所有風險和問題的程度。",
            id:"2.You need to ensure that any decision to engage in trading CFDs is made on an informed basis and in light of your knowledge and experience as well as to your personal circumstances (including but not limited to your financial position). In addition, you need to ensure that you understand the nature of CFDs and the extent of all risks and aspects involved in trading CFDs."
        },
        amtRisk5:{
            zh:"3.请注意，CFD 是杠杆式金融产品，因此就这一点而论，交易 CFD 涉及较高的损失风险，价格变动受客户所使用杠杆的影响。例如，如果客户使用 50 倍杠杆，0.5%的变动将导致 25%的收益或亏损。尽管如此，由于“负余额保护”（“NBP”），您的损失不会超过您的初始投资。",
            en:"3.Please note that CFDs are leveraged financial products and therefore as such, trading CFDs involves a high risk of loss as price movements are influenced by the amount of leverage the client is using. For example, if a client is using 50 times leverage a movement of 0.5% will result in a gain or a loss of 25%. Nonetheless, as a result of the ‘Negative Balance Protection’ (‘NBP’) you may not lose more than your initial investment.",
            vi:"3.Xin lưu ý rằng CFD là các sản phẩm tài chính có đòn bẩy và do đó, các giao dịch CFD liên quan đến rủi ro thua lỗ cao do biến động giá bị ảnh hưởng bởi số tiền đòn bẩy mà khách hàng đang sử dụng. Ví du, nếu một khách hàng đang sử dụng 50 lần đòn bẩy một chuyển động là 0,5% sẽ dần tăng lên hoặc mất 25%. Tuy nhiên, do “Bảo vệ số dư âm” (‘NBP’), bạn có thể không bị mất nhiều hơn số tiền đầu tư ban đầu của bạn. ",
            "zh-Hant":"3.請註意，CFD 是杠桿式金融產品，因此就這壹點而論，交易 CFD 涉及較高的損失風險，價格變動受客戶所使用杠桿的影響。例如，如果客戶使用 50 倍杠桿，0.5%的變動將導致 25%的收益或虧損。盡管如此，由於“負余額保護”（“NBP”），您的損失不會超過您的初始投資。",
            id:"3.Please note that CFDs are leveraged financial products and therefore as such, trading CFDs involves a high risk of loss as price movements are influenced by the amount of leverage the client is using. For example, if a client is using 50 times leverage a movement of 0.5% will result in a gain or a loss of 25%. Nonetheless, as a result of the ‘Negative Balance Protection’ (‘NBP’) you may not lose more than your initial investment."
        },
        amtRisk6:{
            zh:"4.交易 CFD 并不适合所有人士。任何情况下，您所承担的风险不应超过已经做好准备承担的损失。",
            en:"4.Trading CFDs is not be appropriate for all persons. Under no circumstances, you should risk more than you are prepared to lose.",
            vi:"4.Giao dịch CFDs không phù hợp với tất cả mọi người. Trong mọi trường hợp, bạn nên mạo hiểm nhiền hơn bạn đã sẵn sàng để mất.",
            "zh-Hant":"4.交易 CFD 並不適合所有人士。任何情況下，您所承擔的風險不應超過已經做好準備承擔的損失。",
            id:"4.Trading CFDs is not be appropriate for all persons. Under no circumstances, you should risk more than you are prepared to lose."
        },
        amtRisk7:{
            zh:"5.对于本声明中未定义的任何术语，请参阅“客户协议”的附表 A（“词汇表”）。",
            en:"5.For any capitalised term, which has not been defined in the Notice, please refer to Schedule A (‘Glossary’) of the ‘Client Agreement’.",
            vi:"5.Đối với bất kỳ thuật ngữ viết hoa nào chưa được xác định trong Thông báo, vui lòng tham khảo Mục A (‘Bảng thuật ngữ’) của ‘Thỏa thuận khách hàng’.",
            "zh-Hant":"5.對於本聲明中未定義的任何術語，請參閱“客戶協議”的附表 A（“詞匯表”）。",
            id:"5.For any capitalised term, which has not been defined in the Notice, please refer to Schedule A (‘Glossary’) of the ‘Client Agreement’."
        },
        amtRisk8:{
            zh:"适当性评估",
            en:"Appropriateness Assessment",
            vi:"Đánh Giá Phù Hợp",
            "zh-Hant":"適當性評估",
            id:"Appropriateness Assessment"
        },
        amtRisk9:{
            zh:"1.在处理您的“开户表格”时，TigerWit 会对您进行 CFD 交易的适当性进行评估，并根据您提供给我们的信息确定您是否具备足够的知识和经验来了解交易 CFD 所涉及的风险。我们将通知您评估结果，但您仍然必须仔细考虑是否需要与我们交易 CFD。如果我们提醒，交易 CFD 可能不适合您，您应避免交易 CFD，直到获得足够的知识和经验，例如，您可以在真实环境中交易 CFD 之前在体验金账户上进行交易，并且充分熟悉相关风险。",
            en:"1.When processing your ‘Account Opening Form’ TigerWit carries out an assessment of your appropriateness to trade CFDs and determines, based on information you provide us with, if you have sufficient knowledge and experience to understand the risks involved in trading CFDs. We will inform you of the results of our assessment but this does not relieve you of the need to carefully consider whether to trade CFDs with us. If we warn you that trading CFDs may not be appropriate for you, then you should refrain from trading CFDs until you attain sufficient knowledge and experience, for example you may trade CFDs on a demo account prior to trading CFDs in a live environment and you acquainted yourself sufficiently with the relevant risks.",
            vi:"1.Khi xử lý ‘Biểu mẫu mở tài khoản’,TigerWit thực hiện đánh giá sự phù hợp của bạn để giao dịch CFD và xác định, dựa trên thông tin bạn cung cấp cho chúng tôi, nếu bạn có đủ kiến thức và kinh nghiệm để hiểu các rủi ro liên quan đến giao dịch CFD. Chúng tôi sẽ thông báo cho bạn kết quả đánh giá của chúng tôi nhưng điều này không giúp đỡ bạn về sự cần thiết phải cân nhắc kỹ lưỡng xem có nên giao dịch CFD với chúng tôi hay không. Nếu chúng tôi cảnh báo bạn rang giao dịch CFD có thể không phù hợp với bạn, bạn nên hạn chế giao dịch CFD cho đến khi bạn có đủ kiến thức và kinh nghiệm, ví dụ bạn có thể giao dịch CFD trên tài khoản demo trước khi giao dịch CFD trong môi trường sống và bạn đã quen cho mình đầy đủ với những rủi ro có liên quan. ",
            "zh-Hant":"1.在處理您的“開戶表格”時，TigerWit 會對您進行 CFD 交易的適當性進行評估，並根據您提供給我們的信息確定您是否具備足夠的知識和經驗來了解交易 CFD 所涉及的風險。我們將通知您評估結果，但您仍然必須仔細考慮是否需要與我們交易 CFD。如果我們提醒，交易 CFD 可能不適合您，您應避免交易 CFD，直到獲得足夠的知識和經驗，例如，您可以在真實環境中交易 CFD 之前在體驗金賬戶上進行交易，並且充分熟悉相關風險。",
            id:"1.When processing your ‘Account Opening Form’ TigerWit carries out an assessment of your appropriateness to trade CFDs and determines, based on information you provide us with, if you have sufficient knowledge and experience to understand the risks involved in trading CFDs. We will inform you of the results of our assessment but this does not relieve you of the need to carefully consider whether to trade CFDs with us. If we warn you that trading CFDs may not be appropriate for you, then you should refrain from trading CFDs until you attain sufficient knowledge and experience, for example you may trade CFDs on a demo account prior to trading CFDs in a live environment and you acquainted yourself sufficiently with the relevant risks."
        },
        amtRisk10:{
            zh:"CFD 的性质",
            en:"Nature of CFDs",
            vi:"Bản chất của CFDs",
            "zh-Hant":"CFD 的性質",
            id:"Nature of CFDs"
        },
        amtRisk11:{
            zh:"1.CFD 是用于交易签订协议时和结束协议时特定工具或货币价差的协议。CFD 使本公司的客户能复制交易特定货币或其他工具的经济效果，而无需实际拥有这些资产；您可在我们的网站上找到 TigerWit 所提供 CFD 的完整清单。",
            en:"1.CFDs are agreements to exchange the difference in value of a particular instrument or currency between the time at which the agreement is entered into and the time at which it is closed. CFDs allow the Firm’s Clients to replicate the economic effect of trading in particular currencies or other instruments without requiring actual ownership of those assets; a full list of the CFDs on offer by TigerWit is available on our Website.",
            vi:"1.CFDs là các thỏa thuận để trao đổi sự khác biệt về giá trị của một công cụ hoặc tiền tệ cụ thể giữa thời điểm thỏa thuận được ký kết và thời gian đóng cửa thỏa thuận. CFD cho phép Khách hàng của Công ty nhân rộng hiệu quả kinh tế của giao dịch bằng các loại tiền tệ cụ thể hoặc các công cụ khác mà không yêu cầu quyền sở hữu thực sự của các tài sản đó; danh sách đầy đủ các CFD do TigerWit cung cấp có sẵn trên trang web của chúng tôi. ",
            "zh-Hant":"1.CFD 是用於交易簽訂協議時和結束協議時特定工具或貨幣價差的協議。CFD 使本公司的客戶能復制交易特定貨幣或其他工具的經濟效果，而無需實際擁有這些資產；您可在我們的網站上找到 TigerWit 所提供 CFD 的完整清單。",
            id:"1.CFDs are agreements to exchange the difference in value of a particular instrument or currency between the time at which the agreement is entered into and the time at which it is closed. CFDs allow the Firm’s Clients to replicate the economic effect of trading in particular currencies or other instruments without requiring actual ownership of those assets; a full list of the CFDs on offer by TigerWit is available on our Website."
        },
        amtRisk12:{
            zh:"2.CFD 是场外交易（或“OTC”）的衍生产品交易；这意味着在任何时候 TigerWit 都是与客户进行交易的交易对方，与本公司签订的任何 CFD 交易，只能由我们来关闭。您开立或关闭交易的能力取决于我们交易平台的可用性。",
            en:"2.CFDs are derivative products traded off- exchange (or Over-the-Counter (‘OTC’)); this means TigerWit is at all times the counterparty to the Client trades and any CFD trades entered into with the Firm, can only be closed with us. Your ability to open and/or close trades is dependent on the availability of our trading platform(s).",
            vi:"2.CFD là các sản phẩm phái sinh được giao dịch ngoại hối (hoặc Over-the-Counter (‘OTC’)); điều này có nghĩa là TigerWit luôn là đối tác của các giaodijch Khách hàng và mọi giao dịch CFD được ký kết với Công ty, chỉ có thể đóng với chúng tôi. Khả năng mở và/ hoặc đóng giao dịch của bạn phụ thuộc vào sự sẵn có của (các) sàn giao dịch của chúng tôi.",
            "zh-Hant":"2.CFD 是場外交易（或“OTC”）的衍生產品交易；這意味著在任何時候 TigerWit 都是與客戶進行交易的交易對方，與本公司簽訂的任何 CFD 交易，只能由我們來關閉。您開立或關閉交易的能力取決於我們交易平臺的可用性。",
            id:"2.CFDs are derivative products traded off- exchange (or Over-the-Counter (‘OTC’)); this means TigerWit is at all times the counterparty to the Client trades and any CFD trades entered into with the Firm, can only be closed with us. Your ability to open and/or close trades is dependent on the availability of our trading platform(s)."
        },
        amtRisk13:{
            zh:"3.您了解自己无权实物交付您正在交易的CFD 基础工具（或参考工具），您在基础工具中也不会拥有权利（例如，如果您交易的是股票 CFD，此权利为投票权）。",
            en:"3.You understand that you are not entitled to the physical delivery of the underlying instrument (or reference instrument) of the CFDs you are trading and you have no rights in the underlying instrument (such as voting rights in case you are trading CFDs on shares).",
            vi:"3.Bạn hiểu rằng bạn không có quyền giao hàng vật lý của công cụ cơ bản (hoặc công cụ tham chiếu) của CFD mà bạn đang giao dịch và bạn không có quyền trong công cụ cơ bản (như quyền biểu quyết trong trường hợp bạn đang giao dịch CFD trên cổ phiếu).",
            "zh-Hant":"3.您了解自己無權實物交付您正在交易的CFD 基礎工具（或參考工具），您在基礎工具中也不會擁有權利（例如，如果您交易的是股票 CFD，此權利為投票權）。",
            id:"3.You understand that you are not entitled to the physical delivery of the underlying instrument (or reference instrument) of the CFDs you are trading and you have no rights in the underlying instrument (such as voting rights in case you are trading CFDs on shares)."
        },
        amtRisk14:{
            zh:"4.CFD 在一天当中会出现价格波动；CFD的价格变动由许多因素决定，包括但不限于市场信息的可用性。",
            en:"4.CFDs fluctuate in value during the day; the price movements of CFDs are determined by a number of factors including but not limited to availability of market information.",
            vi:"4.CFD biến động về giá trị trong ngày; biến động giá của CFD được xác định bởi một số yếu tố bao gồm nhưng không giới hạn ở tính sẵn có của thông tin thị trường. ",
            "zh-Hant":"4.CFD 在壹天當中會出現價格波動；CFD的價格變動由許多因素決定，包括但不限於市場信息的可用性。",
            id:"4.CFDs fluctuate in value during the day; the price movements of CFDs are determined by a number of factors including but not limited to availability of market information."
        },
        amtRisk15:{
            zh:"价格和成本",
            en:"Prices and Costs",
            vi:"Giá cả và chi phí",
            "zh-Hant":"價格和成本",
            id:"Prices and Costs"
        },
        amtRisk16:{
            zh:"1.我们交易平台产生的价格来自相关基础工具的价格，此价格由本公司从第三方流动性提供商获得。您与我们交易 CFD 的价格包括一个加价；这意味着我们提供的差价包括 (i) 从流动性提供商接收到的原始差价和 (ii) 加价（如果适用）。",
            en:"1.The prices generated by our trading platform(s) are derived from the prices of the relevant underlying instruments, which the Firm obtains from third party liquidity/ price providers. The prices of CFDs that you trade with us include a mark-up; this means that the spreads offered by us comprise of (i) the raw spreads received from liquidity/ price provider(s) and (ii) a mark-up (where applicable).",
            vi:"1.Giá được tạo ra bởi (các) nền tảng giao dịch của chúng tôi bắt nguồn từ giá của các công cụ cơ bản có liên quan mà Công ty thu được từ các nhà cung cấp liquidity/ giá của bên thứ ba. Giá CFD mà bạn giao dịch với chúng tôi bao gồm mark-up, có nghĩa là các khoản chênh lệch do chúng tôi cung cấp bao gồm (i) chênh lệch thô nhận được từ liquidity/ nhà cung cấp giá và (ii) mark-up (nếu có).",
            "zh-Hant":"1.我們交易平臺產生的價格來自相關基礎工具的價格，此價格由本公司從第三方流動性提供商獲得。您與我們交易 CFD 的價格包括壹個加價；這意味著我們提供的差價包括 (i) 從流動性提供商接收到的原始差價和 (ii) 加價（如果適用）。",
            id:"1.The prices generated by our trading platform(s) are derived from the prices of the relevant underlying instruments, which the Firm obtains from third party liquidity/ price providers. The prices of CFDs that you trade with us include a mark-up; this means that the spreads offered by us comprise of (i) the raw spreads received from liquidity/ price provider(s) and (ii) a mark-up (where applicable)."
        },
        amtRisk17:{
            zh:"2.为了交易某些 CFD，客户可能需要支付佣金或其他费用；您可以在我们的网站中查看详细的说明。对于本公司提供的所有类型 CFD，佣金（如果适用）和隔夜费用并不纳入本公司的报价中，而是直接向客户账户收取相关费用。如果存在隔夜费用，某些类型金融工具的未平仓头寸价格需要加上或减去在整个交易期间的每 日 隔 夜 费 用 （ 标 注 ： “掉 期 ”是 否 可 以 去掉？）。融资费用以现行市场利率为准。从星期一到星期五，每个工作日对掉期收取一次费用，星期三掉期收取三倍的费用，其中包括周末的费用；有关日常隔夜费用的详细信息，请访问我们的网站。",
            en:"2.For trading certain CFDs, the Client may be required to pay a commission and/ or other fees; these instances are described in detail in our Website. For all type of CFDs offered by the Firm, the commission (if applicable) and financing/ overnight fees are not incorporated into the Firm’s quoted prices and are instead charged explicitly to the Client Account(s). In the case of financing/ overnight fees, the value of opened positions in some types of financial instruments is increased or reduced by a daily financing fee ‘swap’ throughout the life of the trade. The financing fees are based on prevailing market interest rates. From Mondays to Fridays swap is charged once for every business day and on Wednesdays swap is charged in triple size in order to account for the weekend; details of daily financing/ overnight fees applied, are available in our Website.",
            vi:"2.Để giao dịch CFDs nhất định, Khách hàng có thể được yêu cầu trả hoa hồng và/ hoặc các khoản phí khác; những trường hợp này được mô tả chi tiết trong trang web của chúng tôi. Đối với tất cả các loại CFD do Công ty cung cấp, hoa hồng (nếu có) và phí tài chính/ qua đêm không được tính vào giá niêm yết của Công ty và thay vào đó được tính phí một cách rõ rang cho (các) Tài khoản Khách hàng. Trong trường hợp tài chính/ phí qua đêm, giá trị của các vị trí mở trong một số loại công cụ tài chính được tăng hoặc giảm bằng khoản phí tài chính hàng ngày ‘hoán đổi’ trong suốt thời gian giao dịch. Phí tài chính dựa trên lãi suất thị trường hiện hành. Từ thứ Hai đến thứ Sáu, phí hoán đổi được tính một lần cho mỗi ngày làm việc và vào ngày thứ Tư, hoán đổi được tính theo ba lần kích thước để tính vào cuối tuần; chi tiết về phí tài chính/ phí qua đêm hàng ngày được áp dụng, có sẵn trên trang web của chúng tôi.",
            "zh-Hant":"2.為了交易某些 CFD，客戶可能需要支付傭金或其他費用；您可以在我們的網站中查看詳細的說明。對於本公司提供的所有類型 CFD，傭金（如果適用）和隔夜費用並不納入本公司的報價中，而是直接向客戶賬戶收取相關費用。如果存在隔夜費用，某些類型金融工具的未平倉頭寸價格需要加上或減去在整個交易期間的每 日 隔 夜 費 用 （ 標 註 ： “掉 期 ”是 否 可 以 去掉？）。融資費用以現行市場利率為準。從星期壹到星期五，每個工作日對掉期收取壹次費用，星期三掉期收取三倍的費用，其中包括周末的費用；有關日常隔夜費用的詳細信息，請訪問我們的網站。",
            id:"2.For trading certain CFDs, the Client may be required to pay a commission and/ or other fees; these instances are described in detail in our Website. For all type of CFDs offered by the Firm, the commission (if applicable) and financing/ overnight fees are not incorporated into the Firm’s quoted prices and are instead charged explicitly to the Client Account(s). In the case of financing/ overnight fees, the value of opened positions in some types of financial instruments is increased or reduced by a daily financing fee ‘swap’ throughout the life of the trade. The financing fees are based on prevailing market interest rates. From Mondays to Fridays swap is charged once for every business day and on Wednesdays swap is charged in triple size in order to account for the weekend; details of daily financing/ overnight fees applied, are available in our Website."
        },
        amtRisk18:{
            zh:"3.TigerWit 在执行客户交易时充当做市商，本公司可能会从任何客户损失中获利。",
            en:"3.TigerWit acts as market maker when executing Client trades and the Firm may profit from any Client losses.",
            vi:"3.TigerWit đóng vai trò là nhà sản xuất thị trường khi thực hiện các giao dịch của Khách hàng và Công ty có thể hưởng lợi từ bất kỳ tổn thất nào của Khách hàng.",
            "zh-Hant":"3.TigerWit 在執行客戶交易時充當做市商，本公司可能會從任何客戶損失中獲利。",
            id:"3.TigerWit acts as market maker when executing Client trades and the Firm may profit from any Client losses."
        },
        amtRisk19:{
            zh:"4.您不应使用从任何信贷机构（包括银行贷款或其他方式）获得的钱来为您的账户提供资金。您应该明白，这将会显著增加您的总体风险。例如，如果您的交易出现损失，您仍然必须偿还所有借款金额以及所有利息或其他费用。因此，您绝不应使用这些借款资金进行任何交易，且绝不应依靠任何交易的利润来偿还这些金额。",
            en:"4.You should not fund your Account using money obtained from any credit facility (including bank loan or otherwise). You should understand that your overall risks will be significantly increased. For instance, if you incur a loss on your trades, you will still have to repay any amount borrowed plus any interest or other costs. Therefore, you shall never finance any trades on such borrowed money and you should never rely on being able to profit on any trade, in order to repay such amounts.",
            vi:"4.Bạn không nên nạp tiền vào Tài khoản của bạn bằng cách sử dụng tiền thu được từ bất kỳ cơ sở tín dụng nào (bao gồm cả khoản vay ngân hàng hoặc bằng cách khác). Bạn nên hiểu rằng rủi ro tổng thể của bạn sẽ được tăng lên đáng kể. Ví dụ, nếu bạn bị thua lỗ trên các giao dịch của mình, bạn sẽ vẫn phải hoàn trả bất kỳ số tiền nào được vay cộng với bất kỳ khoản lãi hoặc các chi phí nào khác. Do đó, bạn sẽ không bao giờ tài trợ bất kỳ giao dịch nào trên số tiền vay đó và bạn không nên dựa vào việc có thể kiếm lời trên bất kỳ giao dịch nào, để trả lại số tiền đó.",
            "zh-Hant":"4.您不應使用從任何信貸機構（包括銀行貸款或其他方式）獲得的錢來為您的賬戶提供資金。您應該明白，這將會顯著增加您的總體風險。例如，如果您的交易出現損失，您仍然必須償還所有借款金額以及所有利息或其他費用。因此，您絕不應使用這些借款資金進行任何交易，且絕不應依靠任何交易的利潤來償還這些金額。",
            id:"4.You should not fund your Account using money obtained from any credit facility (including bank loan or otherwise). You should understand that your overall risks will be significantly increased. For instance, if you incur a loss on your trades, you will still have to repay any amount borrowed plus any interest or other costs. Therefore, you shall never finance any trades on such borrowed money and you should never rely on being able to profit on any trade, in order to repay such amounts."
        },
        amtRisk20:{
            zh:"市场状况、所需保证金、杠杆和强平水平",
            en:"Market Conditions, Required Margin, Leverage and Stop-Out Levels.",
            vi:"Điều kiện thị trường, yêu cầu Margin, đòn bẩy và mức dừng.",
            "zh-Hant":"市場狀況、所需保證金、杠桿和強平水平",
            id:"Market Conditions, Required Margin, Leverage and Stop-Out Levels."
        },
        amtRisk21:{
            zh:"1.交易 CFD 使您能够利用杠杆来开立交易，其方式是预付交易总额的一小部分；这意味着相对较小的市场走势可能导致您的交易价值出现成比例的重大波动。为了计算保证金，使用的杠杆水平将是以下二者中的较低者：(i) 账户或 (ii) 交易的产品。此逻辑适用于我们所有的交易平台。",
            en:"1.Trading CFDs enables you to use leverage to open a trade by depositing a fraction of the total trade value; this means that a relatively small market movement may lead to a proportionately much larger movement in the value of your trade. For margin calculation purposes, the leverage level used will be the lower of: (i) the Account or (ii) symbol traded. This logic applies on all our trading platforms. ",
            vi:"1.Gaio dịch CFD cho phép bạn sử dụng đòn bẩy để mở một giao dịch bắng cách gửi một phần nhỏ của tổng giá trị giao dịch; điều này có nghĩa là một phong trào thị trường tương đối nhỏ có thể dẫn đến một phong trào lớn hơn nhiều trong giá trị của thương mại của bạn. Đối với mục đích tính toán Margin, mức đòn bẩy được sử dụng sẽ thaaso hơn; (i) Tài khoản hoặc (ii)biểu tượng được giao dịch. Logic này được áp dụng trên tất cả các nền tảng giao dịch của chúng tôi.",
            "zh-Hant":"1.交易 CFD 使您能夠利用杠桿來開立交易，其方式是預付交易總額的壹小部分；這意味著相對較小的市場走勢可能導致您的交易價值出現成比例的重大波動。為了計算保證金，使用的杠桿水平將是以下二者中的較低者：(i) 賬戶或 (ii) 交易的產品。此邏輯適用於我們所有的交易平臺。",
            id:"1.Trading CFDs enables you to use leverage to open a trade by depositing a fraction of the total trade value; this means that a relatively small market movement may lead to a proportionately much larger movement in the value of your trade. For margin calculation purposes, the leverage level used will be the lower of: (i) the Account or (ii) symbol traded. This logic applies on all our trading platforms. "
        },
        amtRisk22:{
            zh:"2.在开户过程中，默认杠杆设置为 1:50。您保留权利申请更高的杠杆，但这将由本公司裁量决定，并受到客户适当性评估结果的影响。",
            en:"2.During the account opening process the default leverage is set at 1:50. You reserve the right to request a higher leverage but this will be at the discretion of the Firm and subject to the Client’s appropriateness assessment.",
            vi:"2.Trong quá trình mở tài khoản đòn bẩy mặc định được đặt oqr 1:50. Bạn bảo lưu quyền yêu cần đòn bẩy cao hơn nhưng điều này sẽ tùy thuộc vào quyết định của Công ty và tùy thuộc vào đánh giá phù hợp của Khách hàng. ",
            "zh-Hant":"2.在開戶過程中，默認杠桿設置為 1:50。您保留權利申請更高的杠桿，但這將由本公司裁量決定，並受到客戶適當性評估結果的影響。",
            id:"2.During the account opening process the default leverage is set at 1:50. You reserve the right to request a higher leverage but this will be at the discretion of the Firm and subject to the Client’s appropriateness assessment."
        },
        amtRisk23:{
            zh:"3.金融市场可能会迅速波动，以反映本公司或您控制之外的事件；因此，价格将会变得不稳定。价格波动的一种形式是“跳空”，当价格从一个水平突然转变到另一个水平时，就会发生这种波动。这可能是由于某些原因（例如，在交易时间之内或之外意外的经济事件或市场公告）造成。因此，TigerWit 可能无法以您申请的价格执行指令。此外，如果价格向不利的方向变动，将对您的交易产生直接和实时的影响，并且可能引发自动强平。您所有的交易都有可能被强平，而不仅是产生损失的那些交易。",
            en:"3.Financial markets may fluctuate rapidly to reflect events that are outside the control of the Firm and/or your control; as a result, prices will become volatile. One form of price volatility is ‘gapping’, which occurs when there is a sudden shift in prices from one level to another. This can be caused, for example by unexpected economic events or market announcements, within or outside trading hours. Consequently, TigerWit may be unable to execute your instructions at the requested price. In addition, if prices move against you, this will have a direct and real time impact on your trades, which may be automatically stopped-out. It is possible that you all your trades will be stopped-out; not just the ones that are loss making.",
            vi:"3.Thị trường tài chính có thể biến động nhanh chóng để phản ánh các sự kiện nằm ngoài tầm kiểm soát của Công ty và / hoặc kiểm soát của bạn; kết quả là, giá sẽ trở nên dễ bay hơi. Một dạng biến động giá là 'gapping', xảy ra khi có sự thay đổi đột ngột về giá từ mức này sang cấp khác. Điều này có thể được gây ra, ví dụ như các sự kiện kinh tế bất ngờ hoặc thông báo thị trường, trong hoặc ngoài giờ giao dịch. Do đó, TigerWit có thể không thực hiện được các hướng dẫn của bạn với mức giá được yêu cầu. Ngoài ra, nếu giá di chuyển theo bạn, điều này sẽ có tác động trực tiếp và thời gian thực trên các giao dịch của bạn, điều này có thể tự động bị ngừng lại. Có thể tất cả các giao dịch của bạn sẽ bị ngừng lại; không chỉ là những người đang thua lỗ.",
            "zh-Hant":"3.金融市場可能會迅速波動，以反映本公司或您控制之外的事件；因此，價格將會變得不穩定。價格波動的壹種形式是“跳空”，當價格從壹個水平突然轉變到另壹個水平時，就會發生這種波動。這可能是由於某些原因（例如，在交易時間之內或之外意外的經濟事件或市場公告）造成。因此，TigerWit 可能無法以您申請的價格執行指令。此外，如果價格向不利的方向變動，將對您的交易產生直接和實時的影響，並且可能引發自動強平。您所有的交易都有可能被強平，而不僅是產生損失的那些交易。",
            id:"3.Financial markets may fluctuate rapidly to reflect events that are outside the control of the Firm and/or your control; as a result, prices will become volatile. One form of price volatility is ‘gapping’, which occurs when there is a sudden shift in prices from one level to another. This can be caused, for example by unexpected economic events or market announcements, within or outside trading hours. Consequently, TigerWit may be unable to execute your instructions at the requested price. In addition, if prices move against you, this will have a direct and real time impact on your trades, which may be automatically stopped-out. It is possible that you all your trades will be stopped-out; not just the ones that are loss making."
        },
        amtRisk24:{
            zh:"4.您应当注意，已经开始交易的账户，对您的杠杆水平进行任何更改都可能会立即影响您的未平仓头寸，并可能导致强平",
            en:"4.You should note that any changes made to your leverage level, on an already traded Account, can immediately affect your open positions and may result in a stop-out.",
            vi:"4.Bạn nên lưu ý rằng bất kỳ thay dổi nào được thực hiện đối với mức đòn bẩy của bạn, trên một tài khoản đã được giao dịch, có thể ảnh hưởng ngay lập tức đến các vị thế đang mở của bạn và có thể dẫn đến việc dừng hoạt động.",
            "zh-Hant":"4.您應當註意，已經開始交易的賬戶，對您的杠桿水平進行任何更改都可能會立即影響您的未平倉頭寸，並可能導致強平",
            id:"4.You should note that any changes made to your leverage level, on an already traded Account, can immediately affect your open positions and may result in a stop-out."
        },
        amtRisk25:{
            zh:"5.您有责任监控自己未平仓头寸所需的保证金，为避免强平，您可能需要为账户补充资金。",
            en:"5.It is your responsibility to monitor the required margin of your open positions and in order to avoid a stop-out you may have to fund your Account.",
            vi:"5.Bạn có trách nhiệm sao chép biên độ bắt buộc của các vị thế mở của mình và để tránh bị ngừng, bạn có thể phải chuyển tiền vào Tài khoản của mình.",
            "zh-Hant":"5.您有責任監控自己未平倉頭寸所需的保證金，為避免強平，您可能需要為賬戶補充資金。",
            id:"5.It is your responsibility to monitor the required margin of your open positions and in order to avoid a stop-out you may have to fund your Account."
        },
        amtRisk26:{
            zh:"6.有关详细信息，请参阅“订单执行政策”的“保证金和杠杆”小节。",
            en:"6.For further information, please refer to the ‘Margin and Leverage’ section of the ‘Order Execution Policy’.",
            vi:"6.Để biết thêm thông tin , vui lòng tham khảo mục ‘Margin và đòn bẩy’ của ‘ Chính sách thực hiện lệnh’.",
            "zh-Hant":"6.有關詳細信息，請參閱“訂單執行政策”的“保證金和杠桿”小節。",
            id:"6.For further information, please refer to the ‘Margin and Leverage’ section of the ‘Order Execution Policy’."
        },
        amtRisk27:{
            zh:"外汇和其他相关风险",
            en:"Foreign Exchange and Other Related Risks",
            vi:"Rủi ro ngoại hối và các rủi ro liên quan khác",
            "zh-Hant":"外匯和其他相關風險",
            id:"Foreign Exchange and Other Related Risks"
        },
        amtRisk28:{
            zh:"1.如果您交易的产品以您账户货币以外的货币进行计值，您将受到外汇价格变动的影响。由本公司使用交叉即期汇率计算客户账户计值货币与相关 CFD 货币的兑换。",
            en:"1.You will be impacted by foreign exchange movements, if you are trading in a product that is denominated in a currency other than the currency of your Account. Any currency conversion calculations are provided by the Firm to the Client in the currency in which the Client account is denominated and the currency of the relevant CFD, using the cross-spot rate.",
            vi:"1.Bạn sẽ bị ảnh hưởng bởi các phong trào ngoại hối, nếu bạn đang giao dịch bằng một sản phẩm có giá trị bằng đơn vị tiền tệ khác với đơn vị tiền tệ trong Tài khoản của bạn. Bất kỳ tính toán chuyển đổi tiền tệ nào được Công ty cung cấp cho Khách hàng bằng đơn vị tiền tệ trong đó tài khoản Khách hàng có mệnh giá và đơn vị tiền tệ của CFD có liên quan, sử dụng tỷ giá giao ngay.",
            "zh-Hant":"1.如果您交易的產品以您賬戶貨幣以外的貨幣進行計值，您將受到外匯價格變動的影響。由本公司使用交叉即期匯率計算客戶賬戶計值貨幣與相關 CFD 貨幣的兌換。",
            id:"1.You will be impacted by foreign exchange movements, if you are trading in a product that is denominated in a currency other than the currency of your Account. Any currency conversion calculations are provided by the Firm to the Client in the currency in which the Client account is denominated and the currency of the relevant CFD, using the cross-spot rate."
        },
        amtRisk29:{
            zh:"2.您的 CFD 交易能力也可能受到法律、法规、税务环境和其他因素变化的影响。",
            en:"2.Your capacity to trade CFDs may also be affected as a result of changes in the legal, regulatory, taxation environment and/or other.",
            vi:"2.Khả năng giao dịch CFD của bạn cũng có thể bị ảnh hưởng do các thay đổi trong môi trường pháp lý, quy chế, thuế và/ hoăc khác.",
            "zh-Hant":"2.您的 CFD 交易能力也可能受到法律、法規、稅務環境和其他因素變化的影響。",
            id:"2.Your capacity to trade CFDs may also be affected as a result of changes in the legal, regulatory, taxation environment and/or other."
        },
        amtRisk30:{
            zh:"技术风险",
            en:"Technical Risks",
            vi:"Rủi Ro Kỹ Thuật",
            "zh-Hant":"技術風險",
            id:"Technical Risks"
        },
        amtRisk31:{
            zh:"1.我们试图持续提供价格，并让您在我们网站上指明的交易期间访问我们的交易平台。但是，有些情况会导致无法访问交易平台。例如，电信/互联网连接不畅、系统错误和中断或其他因素的情况。以上情况可能会导致发布订单时的价格和本公司收到订单时的价格发生变化。此外，这些技术风险可能会严重影响您订单的执行情况。",
            en:"1.We try to generate prices continuously and provide you with access* to our trading platforms throughout the trading sessions as indicated on our Website. However, there are instances where this is not possible; for example, instances of poor telecommunication/ internet connectivity, system errors and outages and/or other factors. The above may cause prices to change between the time an order is placed and the time the order has been received by the Firm. In addition, these technical risks may significantly impact the execution of your orders.",
            vi:"1.Chúng tôi cố gắng tạo ra giá liên tục và cung cấp cho bạn quyền truy cập * vào các nền tảng giao dịch của chúng tôi trong suốt các phiên giao dịch như được nêu trên Trang web của chúng tôi. Tuy nhiên, có những trường hợp mà điều này là không thể; ví dụ, các trường hợp kết nối viễn thông / internet kém, lỗi hệ thống và mất điện và / hoặc các yếu tố khác. Các điều trên có thể khiến giá thay đổi giữa thời điểm đặt hàng và thời điểm Công ty nhận được đơn đặt hàng. Ngoài ra, những rủi ro kỹ thuật này có thể ảnh hưởng đáng kể đến việc thực hiện các đơn đặt hàng của bạn.",
            "zh-Hant":"1.我們試圖持續提供價格，並讓您在我們網站上指明的交易期間訪問我們的交易平臺。但是，有些情況會導致無法訪問交易平臺。例如，電信/互聯網連接不暢、系統錯誤和中斷或其他因素的情況。以上情況可能會導致發布訂單時的價格和本公司收到訂單時的價格發生變化。此外，這些技術風險可能會嚴重影響您訂單的執行情況。",
            id:"1.We try to generate prices continuously and provide you with access* to our trading platforms throughout the trading sessions as indicated on our Website. However, there are instances where this is not possible; for example, instances of poor telecommunication/ internet connectivity, system errors and outages and/or other factors. The above may cause prices to change between the time an order is placed and the time the order has been received by the Firm. In addition, these technical risks may significantly impact the execution of your orders."
        },
        amtRisk32:{
            zh:"*包括通过移动应用程序访问我们的交易平台",
            en:"* Access to our trading platforms includes access via mobile applications",
            vi:"* Access to our trading platforms includes access via mobile applications",
            "zh-Hant":"*包括通過移動應用程序訪問我們的交易平臺",
            id:"* Access to our trading platforms includes access via mobile applications"
        },
        amtRisk33:{
            zh:"客户资金",
            en:"Client Money",
            vi:"Tiền của Khách hàng",
            "zh-Hant":"客戶資金",
            id:"Client Money"
        },
        amtRisk34:{
            zh:"1.如果您被分类为零售客户，我们代表您持有的任何资金将保存在由位于巴哈马境内或境外的机构所持有的一个或多个独立账户中，这部分资金与本公司的资金是分开的。客户资金将与属于其他客户的资金汇集在一起（“综合账户”）；因此，如果出现破产的情况，个人客户将不能针对具体账户中的特定款项提出索赔。客户的索赔将针对综合账户中的客户资金。一般而言，由机构持有的账户（包括综合账户）面临各种风险，包括在机构违约的情况下被作为一 个账户处理的潜在风险。在这种情况下，可能会在不考虑综合账户最终利益拥有者的情况下实施国家存款保障计划。另一项风险可能是，如果 TigerWit 无法履行对其他客户的义务，则综合账户中的资金可能会受到 TigerWit 与此类客户的头寸相关义务的影响。如果 TigerWit用于保存客户资金的机构偿付能力部分或完全受到损害，任何损失将由您而非本公司来承担。如果任何此类机构出现违约，客户不得向本公司要求赔偿。",
            en:"1.If you are categorised as a retail client, any money that we hold on your behalf will be kept in one or more segregated accounts with an institution within or outside The Bahamas, separated from the Firm’s money. The Client Money will be pooled with money belonging to other Clients (the ‘Omnibus Account’); therefore, an individual Client will not have a claim against a specific sum in a specific account, in the event of insolvency. A Client’s claim may be against the Client Money in the Omnibus Account. In general, accounts held with institutions, including omnibus account(s), face various risks, including the potential risk of being treated as one (1) account in case the institution defaults. Under such circumstances, the enforcement of the national deposit guarantee scheme may be applied without consideration of the ultimate beneficial owners of the Omnibus Account. Another risk might be that the funds in the Omnibus Account may be exposed to obligations of TigerWit connected with the positions of other Clients in case TigerWit is unable to meet its obligations towards them. In the event that the solvency of the institution that TigerWit utilises to keep Client Money is partially or fully compromised, any loss shall be borne by you not us. In the event that any such institution defaults, the Client shall have no redress against the Firm.",
            vi:"1.Nếu bạn được phân loại là khách hàng bán lẻ, bất kỳ khoản tiền nào chúng tôi giữ thay mặt bạn sẽ được giữ trong một hoặc nhiều tài khoản riêng biệt với một tổ chức trong hoặc ngoài Bahamas, tách biệt với tiền của Công ty. Tiền khách hàng sẽ được gộp chung với tiền thuộc về các Khách hàng khác (‘Tài khoản Omnibus’); do đó, một Khách hàng cá nhân sẽ không có yêu cầu chống lại một khoản tiền cụ thể trong một tài khoản cụ thể, trong trường hợp mất khả năng thanh toán. Khiếu nại của Khách hàng có thể chống lại Tiền của Khách hàng trong Tài khoản Omnibus. Nói chung, các tài khoản được tổ chức với các tổ chức, bao gồm các tài khoản omnibus, phải đối mặt với nhiều rủi ro khác nhau, bao gồm rủi ro tiềm ẩn được coi là một (1) tài khoản trong trường hợp cơ sở mặc định. Trong những trường hợp như vậy, việc thực thi kế hoạch bảo lãnh tiền gửi quốc gia có thể được áp dụng mà không xem xét các chủ sở hữu có lợi cuối cùng của Tài khoản Omnibus. Một rủi ro khác có thể là tiền trong Tài khoản Omnibus có thể bị ràng buộc với các nghĩa vụ của TigerWit được kết nối với các vị trí của các Khách hàng khác trong trường hợp TigerWit không thể đáp ứng các nghĩa vụ của mình đối với họ. Trong trường hợp khả năng thanh toán của tổ chức mà TigerWit sử dụng để giữ cho Khách hàng Tiền bị tổn hại một phần hoặc toàn bộ, mọi tổn thất sẽ do bạn không phải chịu. Trong trường hợp bất kỳ tổ chức như vậy mặc định, Khách hàng sẽ không có sự cố đối với Công ty.",
            "zh-Hant":"1.如果您被分類為零售客戶，我們代表您持有的任何資金將保存在由位於巴哈馬境內或境外的機構所持有的壹個或多個獨立賬戶中，這部分資金與本公司的資金是分開的。客戶資金將與屬於其他客戶的資金匯集在壹起（“綜合賬戶”）；因此，如果出現破產的情況，個人客戶將不能針對具體賬戶中的特定款項提出索賠。客戶的索賠將針對綜合賬戶中的客戶資金。壹般而言，由機構持有的賬戶（包括綜合賬戶）面臨各種風險，包括在機構違約的情況下被作為壹 個賬戶處理的潛在風險。在這種情況下，可能會在不考慮綜合賬戶最終利益擁有者的情況下實施國家存款保障計劃。另壹項風險可能是，如果 TigerWit 無法履行對其他客戶的義務，則綜合賬戶中的資金可能會受到 TigerWit 與此類客戶的頭寸相關義務的影響。如果 TigerWit用於保存客戶資金的機構償付能力部分或完全受到損害，任何損失將由您而非本公司來承擔。如果任何此類機構出現違約，客戶不得向本公司要求賠償。",
            id:"1.If you are categorised as a retail client, any money that we hold on your behalf will be kept in one or more segregated accounts with an institution within or outside The Bahamas, separated from the Firm’s money. The Client Money will be pooled with money belonging to other Clients (the ‘Omnibus Account’); therefore, an individual Client will not have a claim against a specific sum in a specific account, in the event of insolvency. A Client’s claim may be against the Client Money in the Omnibus Account. In general, accounts held with institutions, including omnibus account(s), face various risks, including the potential risk of being treated as one (1) account in case the institution defaults. Under such circumstances, the enforcement of the national deposit guarantee scheme may be applied without consideration of the ultimate beneficial owners of the Omnibus Account. Another risk might be that the funds in the Omnibus Account may be exposed to obligations of TigerWit connected with the positions of other Clients in case TigerWit is unable to meet its obligations towards them. In the event that the solvency of the institution that TigerWit utilises to keep Client Money is partially or fully compromised, any loss shall be borne by you not us. In the event that any such institution defaults, the Client shall have no redress against the Firm."
        },
        amtRisk35:{
            zh:"不作建议",
            en:"No Advice",
            vi:"Không có lời khuyên",
            "zh-Hant":"不作建議",
            id:"No Advice"
        },
        amtRisk36:{
            zh:"1.TigerWit 可能不时（根据本公司认为适当 的 频 率 ） 发 布 或 分 发 第 三 方 材 料 （ “ 材料”），其中含有的信息包括但不限于通过我们网站和其他媒体发布的或您收到的金融市场状况的信息 。应当注意的是，该材料仅被视为营销沟通，不包含且不应被视为投资意见或投资建议或金融工具交易的要约或诱使；在作出任何交易决策之前，应由客户自行评估各自的情况。TigerWit 对所提供信息的准确性或完整性不承担任何责任，也不负责承担任何根据 TigerWit 员工、第三方或其他人员所提供的建议、预测或其他信息所进行的任何投资而产生的任何损失。本材料并非按照促进投资研究独立性的法律要求而编制，不受任何散播投资研究前交易禁令的约束。本材料中包含的所有意见表述如有更改，恕不另行通知。任何意见都是作者的个人观点，而不代表 TigerWit 的意见。",
            en:"1.TigerWit may, from time to time and as often as it deems appropriate, issue and/or distribute third party material (the ‘Material’), which contains information including but not limited to the conditions of the financial markets, posted through our Website and other media and/or received by you. It should be noted that the Material is considered to be marketing communication only and does not contain, and should not be construed as containing, investment advice and/or an investment recommendation and/or, an offer of or solicitation for any transactions in financial instruments; any decision to enter into a specific transaction shall be made by the Client following an assessment by him/herself of their situation. TigerWit makes no representation and assumes no liability as to the accuracy or completeness of the information provided, nor any loss arising from any investment based on a recommendation, forecast or other information supplied by any employee of TigerWit, a third party or otherwise. The Material is not prepared in accordance with legal requirements promoting the independence of investment research and it is not subject to any prohibition on dealing ahead of the dissemination of investment research. All expressions of opinion included in the Material are subject to change without notice. Any opinions made may be personal to the author and may not reflect the opinions of TigerWit.",
            vi:"1.TigerWit có thể, theo thời gian và thường xuyên xét thấy thích hợp, phát hành và / hoặc phân phối tài liệu của bên thứ ba ('Tài liệu'), chứa thông tin bao gồm nhưng không giới hạn ở các điều kiện của thị trường tài chính, được đăng trên trang web của chúng tôi và phương tiện truyền thông khác và / hoặc nhận được bởi bạn. Cần lưu ý rằng Tài liệu được coi là thông tin tiếp thị và không chứa và không được hiểu là có chứa, tư vấn đầu tư và / hoặc khuyến nghị đầu tư và / hoặc đề nghị hoặc chào mời bất kỳ giao dịch nào trong các công cụ tài chính ; bất kỳ quyết định nào để tham gia vào một giao dịch cụ thể sẽ do Khách hàng thực hiện sau khi được đánh giá bởi chính họ về tình hình của họ. TigerWit không đại diện và không chịu trách nhiệm về tính chính xác hoặc đầy đủ của thông tin được cung cấp, cũng như bất kỳ tổn thất nào phát sinh từ bất kỳ khoản đầu tư nào dựa trên đề xuất, dự báo hoặc thông tin khác được cung cấp bởi bất kỳ nhân viên nào của TigerWit. Các tài liệu không được chuẩn bị phù hợp với các yêu cầu pháp lý thúc đẩy sự độc lập của nghiên cứu đầu tư và nó không phải chịu bất kỳ lệnh cấm xử lý trước việc phổ biến nghiên cứu đầu tư. Tất cả các biểu thức của ý kiến ​​được bao gồm trong Tài liệu có thể thay đổi mà không cần thông báo. Bất kỳ ý kiến ​​nào có thể mang tính cá nhân đối với tác giả và có thể không phản ánh ý kiến ​​của TigerWit.",
            "zh-Hant":"1.TigerWit 可能不時（根據本公司認為適當 的 頻 率 ） 發 布 或 分 發 第 三 方 材 料 （ “ 材料”），其中含有的信息包括但不限於通過我們網站和其他媒體發布的或您收到的金融市場狀況的信息 。應當註意的是，該材料僅被視為營銷溝通，不包含且不應被視為投資意見或投資建議或金融工具交易的要約或誘使；在作出任何交易決策之前，應由客戶自行評估各自的情況。TigerWit 對所提供信息的準確性或完整性不承擔任何責任，也不負責承擔任何根據 TigerWit 員工、第三方或其他人員所提供的建議、預測或其他信息所進行的任何投資而產生的任何損失。本材料並非按照促進投資研究獨立性的法律要求而編制，不受任何散播投資研究前交易禁令的約束。本材料中包含的所有意見表述如有更改，恕不另行通知。任何意見都是作者的個人觀點，而不代表 TigerWit 的意見。",
            id:"1.TigerWit may, from time to time and as often as it deems appropriate, issue and/or distribute third party material (the ‘Material’), which contains information including but not limited to the conditions of the financial markets, posted through our Website and other media and/or received by you. It should be noted that the Material is considered to be marketing communication only and does not contain, and should not be construed as containing, investment advice and/or an investment recommendation and/or, an offer of or solicitation for any transactions in financial instruments; any decision to enter into a specific transaction shall be made by the Client following an assessment by him/herself of their situation. TigerWit makes no representation and assumes no liability as to the accuracy or completeness of the information provided, nor any loss arising from any investment based on a recommendation, forecast or other information supplied by any employee of TigerWit, a third party or otherwise. The Material is not prepared in accordance with legal requirements promoting the independence of investment research and it is not subject to any prohibition on dealing ahead of the dissemination of investment research. All expressions of opinion included in the Material are subject to change without notice. Any opinions made may be personal to the author and may not reflect the opinions of TigerWit."
        },
        amtRisk37:{
            zh:"2.TigerWit 不提供与投资或交易 CFD 有关的投资、财务、法律、税务、监管或其他建议。通过我们的网站、交易平台、营销、培训活动或其他方式提供给您的任何材料或信息或其他功能都是一般性的，不应将其视为适合您或根据您个人情况考虑得出的建议。在与我们进行CFD 交易之前，如果有必要，您应该向合格的顾问寻求独立的专业意见。",
            en:"2.TigerWit does not provide investment, financial, legal, tax, regulatory or other advice relating to investments or trading CFDs. Any material or information or other features, which may be provided to you through our Website, trading platforms, marketing or training events or otherwise, is generic and shall not be treated as advice appropriate for you or based on a consideration of your personal circumstances. You should seek independent professional advice from a suitably qualified advisor, if necessary, prior to engaging in trading CFD with us.",
            vi:"2.TigerWit không cung cấp tư vấn đầu tư, tài chính, pháp lý, thuế, quy định hoặc tư vấn khác liên quan đến đầu tư hoặc giao dịch CFD. Bất kỳ tài liệu hoặc thông tin hoặc các tính năng khác, có thể được cung cấp cho bạn thông qua trang web, nền tảng giao dịch, sự kiện tiếp thị hoặc đào tạo hoặc nói cách khác là chung chung và sẽ không được coi là lời khuyên phù hợp với bạn hoặc dựa trên việc xem xét hoàn cảnh cá nhân của bạn. Bạn nên tìm kiếm lời khuyên chuyên nghiệp độc lập từ",
            "zh-Hant":"2.TigerWit 不提供與投資或交易 CFD 有關的投資、財務、法律、稅務、監管或其他建議。通過我們的網站、交易平臺、營銷、培訓活動或其他方式提供給您的任何材料或信息或其他功能都是壹般性的，不應將其視為適合您或根據您個人情況考慮得出的建議。在與我們進行CFD 交易之前，如果有必要，您應該向合格的顧問尋求獨立的專業意見。",
            id:"2.TigerWit does not provide investment, financial, legal, tax, regulatory or other advice relating to investments or trading CFDs. Any material or information or other features, which may be provided to you through our Website, trading platforms, marketing or training events or otherwise, is generic and shall not be treated as advice appropriate for you or based on a consideration of your personal circumstances. You should seek independent professional advice from a suitably qualified advisor, if necessary, prior to engaging in trading CFD with us."
        },
        amtRisk38:{
            zh:"过往业绩",
            en:"Past Performance",
            vi:"cố vấn có trình độ phù hợp, nếu cần, trước khi tham gia giao dịch CFD với chúng tôi.Past Performance",
            "zh-Hant":"過往業績",
            id:"Past Performance"
        },
        amtRisk39:{
            zh:"1.CFD 的过往业绩、模拟或预测并不代表未来业绩。您应该注意到，随着标的资产市价向下（或向上）波动，您的投资价值可能会减少（以及增加）。",
            en:"1.Past performance, simulation or prediction of CFDs does not constitute an indication of future results. You should note that the value of your investment can decrease (as well as increase) as the market price of the underlying asset may fluctuate downwards (or upwards).",
            vi:"1.Hiệu suất, mô phỏng hoặc dự đoán trước đây của CFD không phải là dấu hiệu của các kết quả trong tương lai. Bạn nên lưu ý rằng giá trị đầu tư của bạn có thể giảm (cũng như tăng) khi giá thị trường của tài sản cơ bản có thể dao động xuống (hoặc trở lên).",
            "zh-Hant":"1.CFD 的過往業績、模擬或預測並不代表未來業績。您應該註意到，隨著標的資產市價向下（或向上）波動，您的投資價值可能會減少（以及增加）。",
            id:"1.Past performance, simulation or prediction of CFDs does not constitute an indication of future results. You should note that the value of your investment can decrease (as well as increase) as the market price of the underlying asset may fluctuate downwards (or upwards)."
        },
        amtRisk40:{
            zh:"更多信息",
            en:"Additional Information",
            vi:"Thông tin bổ sung",
            "zh-Hant":"更多信息",
            id:"Additional Information"
        },
        amtRisk41:{
            zh:"1.如需了解更多信息，或者您了解本风险披露、我们的商业条款和条件、客户协议，或者您不知道交易 CFD 将如何影响您的投资，您必须寻求独立顾问的帮助。",
            en:"1.For further information, or if you do understand this Risk Disclosure, our Terms and Conditions of Business, the Client Agreement, or you do not know how trading CFDs may affect your investments, you must seek independent counsel.",
            vi:"1.Để biết thêm thông tin, hoặc nếu bạn hiểu điều này, hoặc Điều khoản và Điều kiện kinh doanh, Thỏa thuận khách hàng, hoặc bạn không biết cách giao dịch CFD có thể ảnh hưởng đến khoản đầu tư của bạn, bạn phải tìm kiếm tư vấn độc lập. ",
            "zh-Hant":"1.如需了解更多信息，或者您了解本風險披露、我們的商業條款和條件、客戶協議，或者您不知道交易 CFD 將如何影響您的投資，您必須尋求獨立顧問的幫助。",
            id:"1.For further information, or if you do understand this Risk Disclosure, our Terms and Conditions of Business, the Client Agreement, or you do not know how trading CFDs may affect your investments, you must seek independent counsel."
        },
        amtCookie1:{
            zh:"本隐私政策和 Cookie 披露声明介绍 TigerWit（ 以 下 简 称 “ 本 公 司 ” ） 如 何 通 过www.tigerwit.com、global.tigerwit.com 以及其他相关网站和应用程序收集和使用信息。本隐私政策和 Cookie 披露声明不适用于其他机构和其他第三方运作的网站。",
            en:"This Privacy Policy and Cookie Disclosure describes how TigerWit (‘the Firm’) collects and uses information through its site www.tigerwit.com and global.tigerwit.com and any other related sites and applications. This Privacy Policy and Cookie Disclosure does not apply to websites operated by other organisations and other third parties.",
            vi:"Chính sách Riêng Tư và Tiết lộ Cookie này mô tả cách TigerWit (‘Công ty’) thu thập và sử dụng thông tin thông qua trang web www.tigerwit.com và global.tigerwit.com và mọi trang web và ứng dụng liên quan khác. Chính sách Bảo mật và Tiết lộ Cookie này không áp dụng cho các trang web do các tổ chức khác và các bên thứ ba khác điều hành.",
            "zh-Hant":"本隱私政策和 Cookie 披露聲明介紹 TigerWit（ 以 下 簡 稱 “ 本 公 司 ” ） 如 何 通 過www.tigerwit.com、global.tigerwit.com 以及其他相關網站和應用程序收集和使用信息。本隱私政策和 Cookie 披露聲明不適用於其他機構和其他第三方運作的網站。",
            id:"This Privacy Policy and Cookie Disclosure describes how TigerWit (‘the Firm’) collects and uses information through its site www.tigerwit.com and global.tigerwit.com and any other related sites and applications. This Privacy Policy and Cookie Disclosure does not apply to websites operated by other organisations and other third parties."
        },
        amtCookie2:{
            zh:"承诺",
            en:"Commitment",
            vi:"Cam kết",
            "zh-Hant":"承諾",
            id:"Commitment"
        },
        amtCookie3:{
            zh:"TigerWit 尊重其网站用户的隐私，因此，本公司承诺会采取一切合理措施为现有及未来客户、申请者和访客提供保障。",
            en:"TigerWit respects the privacy of any user that accesses its sites; therefore, the Firm is committed in taking all reasonable steps in safeguarding any existing or prospective clients, applicants and visitors.",
            vi:"TigerWit tôn trọng quyền riêng tư của bất kỳ người dùng nào truy cập vào các trang web của mình; do đó, Công ty cam kết thực hiện tất cả các bước hợp lý trong việc bảo vệ bất kỳ khách hàng hiện tại hoặc khách hàng tiềm năng, người đăng kí và khách truy cập.",
            "zh-Hant":"TigerWit 尊重其網站用戶的隱私，因此，本公司承諾會采取壹切合理措施為現有及未來客戶、申請者和訪客提供保障。",
            id:"TigerWit respects the privacy of any user that accesses its sites; therefore, the Firm is committed in taking all reasonable steps in safeguarding any existing or prospective clients, applicants and visitors."
        },
        amtCookie4:{
            zh:"申请",
            en:"Application",
            vi:"Đăng Kí",
            "zh-Hant":"申請",
            id:"Application"
        },
        amtCookie5:{
            zh:"要在 TigerWit 开设账户，您首先必须完整填写必要的资料，填妥申请表并将其发送给本公司。您需要在申请表上披露私人资料，以便本公司评估您的申请和遵守相关的法律法规。本公司也可能使用此类资料为您提供服务方面的信息。此外，我们可能通过电话、发送邮件或其他任何通信方式收集与您相关的资料；包括您注册使用本公司网站、预订本公司服务或在本公司网站或其他相关应用程序上开展活动时所输入的信息。",
            en:"In order to open an account with TigerWit, you must first complete and send an application form by completing the required information. By completing the application form you are requested to disclose private information in order to enable the Firm to evaluate your application and comply with relevant rules and regulations. This information may also be used by the Firm to inform you regarding its services. Moreover, information about you may also be collected by any correspondence made with us by phone, e-mail or otherwise; including information which you enter when you register to use our site, subscribe to our service or any other activities carried out on our website or any connected applications. ",
            vi:"Để mở một tài khoản với TigerWit, trước tiên bạn phải điền và gửi mẫu đơn bằng cách điền đầy đủ các thông tin cần thiết. Bằng cách hoàn thành mẫu đơn, bạn được yêu cầu tiết lộ thông tin cá nhân để cho phép Công ty đánh giá đơn đăng ký của bạn và tuân thủ các quy tắc và quy định có liên quan. Thông tin này cũng có thể được Công ty sử dụng để thông báo cho bạn về các dịch vụ của nó. Hơn nữa, thông tin về bạn cũng có thể được thu thập bởi bất kỳ mối liên quan nào được thực hiện với chúng tôi qua điện thoại, e-mail hoặc bằng cách khác; bao gồm thông tin bạn nhập khi đăng ký sử dụng trang web của chúng tôi, đăng ký dịch vụ của chúng tôi hoặc bất kỳ hoạt động nào khác được thực hiện trên trang web của chúng tôi hoặc bất kỳ ứng dụng được kết nối nào.",
            "zh-Hant":"要在 TigerWit 開設賬戶，您首先必須完整填寫必要的資料，填妥申請表並將其發送給本公司。您需要在申請表上披露私人資料，以便本公司評估您的申請和遵守相關的法律法規。本公司也可能使用此類資料為您提供服務方面的信息。此外，我們可能通過電話、發送郵件或其他任何通信方式收集與您相關的資料；包括您註冊使用本公司網站、預訂本公司服務或在本公司網站或其他相關應用程序上開展活動時所輸入的信息。",
            id:"In order to open an account with TigerWit, you must first complete and send an application form by completing the required information. By completing the application form you are requested to disclose private information in order to enable the Firm to evaluate your application and comply with relevant rules and regulations. This information may also be used by the Firm to inform you regarding its services. Moreover, information about you may also be collected by any correspondence made with us by phone, e-mail or otherwise; including information which you enter when you register to use our site, subscribe to our service or any other activities carried out on our website or any connected applications. "
        },
        amtCookie6:{
            zh:"保密性和保护客户个人数据",
            en:"Confidentiality and Client's Personal Data Protection",
            vi:"Bảo Mật Và Bảo Vệ Dữ Liệu Cá Nhân Của Khách Hàng",
            "zh-Hant":"保密性和保護客戶個人數據",
            id:"Confidentiality and Client's Personal Data Protection"
        },
        amtCookie7:{
            zh:"TigerWit Limited 在巴哈马国注册总局注册；因此，任何客户的个人数据均由TigerWit 依据巴哈马国的法律法规进行保存。",
            en:"TigerWit Limited is registered with the Registrar General's Department of The Bahamas; therefore, any clients’ personal data is kept by TigerWit according to the laws and regulations of The Bahamas.",
            vi:"TigerWit Limited được đăng ký với Tổng cục đăng ký Bahamas; do đó, bất kỳ dữ liệu cá nhân của khách hàng nào được TigerWit lưu giữ theo luật pháp và quy định của Bahamas.",
            "zh-Hant":"TigerWit Limited 在巴哈馬國註冊總局註冊；因此，任何客戶的個人數據均由TigerWit 依據巴哈馬國的法律法規進行保存。",
            id:"TigerWit Limited is registered with the Registrar General's Department of The Bahamas; therefore, any clients’ personal data is kept by TigerWit according to the laws and regulations of The Bahamas."
        },
        amtCookie8:{
            zh:"除了在有合法管辖权的监管机构要求的情况下，TigerWit 不得向第三方披露客户的任何保密信息；除非监管机构另有指示，TigerWit 将尽力基于“需者方知”原则进行披露。",
            en:"TigerWit shall not disclose to a third party, any of its clients’ confidential information unless required to do so by a regulatory authority of a competent jurisdiction; TigerWit will endeavour, to make such disclosures on a ‘need-to-know’ basis, unless otherwise instructed by a regulatory authority. ",
            vi:"TigerWit không được tiết lộ cho bên thứ ba, bất kỳ thông tin bí mật nào của khách hàng trừ khi được yêu cầu bởi một cơ quan quản lý có thẩm quyền; TigerWit sẽ nỗ lực, để thực hiện tiết lộ như vậy trên cơ sở 'cần biết', trừ khi được chỉ dẫn bởi một cơ quan quản lý.",
            "zh-Hant":"除了在有合法管轄權的監管機構要求的情況下，TigerWit 不得向第三方披露客戶的任何保密信息；除非監管機構另有指示，TigerWit 將盡力基於“需者方知”原則進行披露。",
            id:"TigerWit shall not disclose to a third party, any of its clients’ confidential information unless required to do so by a regulatory authority of a competent jurisdiction; TigerWit will endeavour, to make such disclosures on a ‘need-to-know’ basis, unless otherwise instructed by a regulatory authority. "
        },
        amtCookie9:{
            zh:"在此情况下，公司应明确告知第三方信息的保密性质。",
            en:"Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information.",
            vi:"Trong những trường hợp như vậy, Công ty phải thông báo rõ ràng cho bên thứ ba về bản chất bí mật của thông tin.",
            "zh-Hant":"在此情況下，公司應明確告知第三方信息的保密性質。",
            id:"Under such circumstances, the Firm shall expressly inform the third party regarding the confidential nature of the information."
        },
        amtCookie10:{
            zh:"客户同意并许可，TigerWit 可以不定期地出于统计或其他目的以合约方式聘用本公司，以提升本公司的业务活动；因而部分或全部的客户个人数据可能会被披露。",
            en:"Clients accept and consent that TigerWit may, from time to time, contractually engage companies for statistical and/or other purposes in order to improve the Firm’s business activities; as a result, some or all of the clients’ personal data may be disclosed.",
            vi:"Khách hàng chấp nhận và đồng ý rằng TigerWit có thể, theo thời gian, tham gia vào hợp đồng với các công ty nhằm mục đích thống kê và / hoặc các mục đích khác để cải thiện hoạt động kinh doanh của Công ty; do đó, một số hoặc tất cả dữ liệu cá nhân của khách hàng có thể được tiết lộ.",
            "zh-Hant":"客戶同意並許可，TigerWit 可以不定期地出於統計或其他目的以合約方式聘用本公司，以提升本公司的業務活動；因而部分或全部的客戶個人數據可能會被披露。",
            id:"Clients accept and consent that TigerWit may, from time to time, contractually engage companies for statistical and/or other purposes in order to improve the Firm’s business activities; as a result, some or all of the clients’ personal data may be disclosed."
        },
        amtCookie11:{
            zh:"披露您的信息",
            en:"Disclosure of your information",
            vi:"Tiết lộ thông tin của bạn",
            "zh-Hant":"披露您的信息",
            id:"Disclosure of your information"
        },
        amtCookie12:{
            zh:"我们可能与集团成员共享您的个人信息，这意味着任何子公司、最终控股公司及其各自的子公司都有可能收到这类信息。我们也可能将您的信息与若干第三方共享，包括商业合作伙伴、供应商、分包商和广告商。例如，为了提供客户所要求的服务，TigerWit 向办卡公司或银行等业务合作伙伴披露您的信息；这类第三方为遵守法律及其他义务也许会保存您的信息。",
            en:"We may share your personal information with any member of our group, which means any subsidiaries, ultimate holding companies and its respective subsidiaries may receive such information. We may also share your information with certain third parties including business partners, suppliers and sub-contractors and advertisers. In the event that TigerWit discloses information to business parties, for instance, card processing companies or banks, in order to effect the services requested by the clients; such third parties may store your information in order to comply with their legal and other obligations.",
            vi:"Chúng tôi có thể chia sẻ thông tin cá nhân của bạn với bất kỳ thành viên nào trong nhóm của chúng tôi, có nghĩa là bất kỳ công ty con, công ty nắm giữ cuối cùng nào và các công ty con tương ứng đều có thể nhận được thông tin đó. Chúng tôi cũng có thể chia sẻ thông tin của bạn với một số bên thứ ba bao gồm đối tác kinh doanh, nhà cung cấp và nhà thầu phụ và nhà quảng cáo. Trong trường hợp TigerWit tiết lộ thông tin cho các bên kinh doanh, ví dụ, các công ty xử lý thẻ hoặc ngân hàng, để thực hiện các dịch vụ theo yêu cầu của khách hàng; các bên thứ ba đó có thể lưu trữ thông tin của bạn để tuân thủ các nghĩa vụ pháp lý và các nghĩa vụ khác của họ.",
            "zh-Hant":"我們可能與集團成員共享您的個人信息，這意味著任何子公司、最終控股公司及其各自的子公司都有可能收到這類信息。我們也可能將您的信息與若幹第三方共享，包括商業合作夥伴、供應商、分包商和廣告商。例如，為了提供客戶所要求的服務，TigerWit 向辦卡公司或銀行等業務合作夥伴披露您的信息；這類第三方為遵守法律及其他義務也許會保存您的信息。",
            id:"We may share your personal information with any member of our group, which means any subsidiaries, ultimate holding companies and its respective subsidiaries may receive such information. We may also share your information with certain third parties including business partners, suppliers and sub-contractors and advertisers. In the event that TigerWit discloses information to business parties, for instance, card processing companies or banks, in order to effect the services requested by the clients; such third parties may store your information in order to comply with their legal and other obligations."
        },
        amtCookie13:{
            zh:"收集的个人信息类型",
            en:"Information we may collect about you",
            vi:"Thông tin chúng tôi có thể thu thập về bạn",
            "zh-Hant":"收集的個人信息類型",
            id:"Information we may collect about you"
        },
        amtCookie14:{
            zh:"本公司网站使用的追踪系统会搜集您所访问网页、您如何发现此网站、网站访问频率等详细资料；本公司获取这类资料，是为了改善本公司网站的内容，TigerWit 也可能通过适当的方式与您联系，为您提供本公司认为对您有用的信息。",
            en:"Tracking systems used on the Firm’s site(s) may collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits etc; this information is obtained in order to improve the content of the Firm’s site(s) and may also be used by TigerWit to contact you, through an appropriate mean, and provide you with any information the Firm believes to be useful.",
            vi:"Các hệ thống sao chép được sử dụng trên (các) trang web của Công ty có thể thu thập dữ liệu chi tiết các trang bạn đã truy cập, cách bạn khám phá trang web này, tần suất truy cập, v.v. thông tin này thu được để cải thiện nội dung của (các) trang web của Công ty và cũng có thể được TigerWit sử dụng để liên hệ với bạn, thông qua một phương tiện thích hợp và cung cấp cho bạn bất kỳ thông tin nào mà Công ty cho là hữu ích.",
            "zh-Hant":"本公司網站使用的追蹤系統會搜集您所訪問網頁、您如何發現此網站、網站訪問頻率等詳細資料；本公司獲取這類資料，是為了改善本公司網站的內容，TigerWit 也可能通過適當的方式與您聯系，為您提供本公司認為對您有用的信息。",
            id:"Tracking systems used on the Firm’s site(s) may collect data detailing the pages you have accessed, how you discovered this site, the frequency of visits etc; this information is obtained in order to improve the content of the Firm’s site(s) and may also be used by TigerWit to contact you, through an appropriate mean, and provide you with any information the Firm believes to be useful."
        },
        amtCookie15:{
            zh:"当您每次访问我们的网站，我们会自动收集互联网协议(IP)地址、登录信息、浏览器类型及版本、时区、拨打本公司服务热线的电话号码等信息。我们会通过第三方收集与您相关的信息，例如商业合作伙伴、分包商、广告公司、分析服务供应商、调查信息供应商、信用调查机构等。",
            en:"With regards to each of your visits to our site, we may, automatically collect information including internet protocol (IP) address, login information, browser type and version, time zone, phone numbers used to call our customer service number. We may receive information about you from third parties, for instance business partners, subcontractors, advertising networks, analytics providers, search information providers, credit reference agencies.",
            vi:"Đối với mỗi lượt truy cập vào trang web của chúng tôi, chúng tôi có thể tự động thu thập thông tin bao gồm địa chỉ giao thức internet (IP), thông tin đăng nhập, loại trình duyệt và phiên bản, múi giờ, số điện thoại được sử dụng để gọi đến số dịch vụ khách hàng của chúng tôi. Chúng tôi có thể nhận thông tin về bạn từ bên thứ ba, ví dụ như đối tác kinh doanh, nhà thầu phụ, mạng quảng cáo, nhà cung cấp phân tích, nhà cung cấp thông tin tìm kiếm, cơ quan tham chiếu tín dụng.",
            "zh-Hant":"當您每次訪問我們的網站，我們會自動收集互聯網協議(IP)地址、登錄信息、瀏覽器類型及版本、時區、撥打本公司服務熱線的電話號碼等信息。我們會通過第三方收集與您相關的信息，例如商業合作夥伴、分包商、廣告公司、分析服務供應商、調查信息供應商、信用調查機構等。",
            id:"With regards to each of your visits to our site, we may, automatically collect information including internet protocol (IP) address, login information, browser type and version, time zone, phone numbers used to call our customer service number. We may receive information about you from third parties, for instance business partners, subcontractors, advertising networks, analytics providers, search information providers, credit reference agencies."
        },
        amtCookie16:{
            zh:"选择/选择退出",
            en:"Choice/Opt-out",
            vi:"Chọn / Chọn không tham gia",
            "zh-Hant":"選擇/選擇退出",
            id:"Choice/Opt-out"
        },
        amtCookie17:{
            zh:"若您不想继续从本公司接收任何通讯，您可以根据 TigerWit 发送的每份通讯中的相关指示选择退出。纵然事实上你已经选择推出，但是TigerWit 保留在 TigerWit 认为必要时与您联系的权利。",
            en:"If you no longer wish to receive any communication from the Firm, you may opt-out of by following the relevant instructions included in each communication sent by TigerWit. TigerWit reserves the right to contact you, albeit the fact that you have opted out, in cases where TigerWit deems such contact as necessary.",
            vi:"Nếu bạn không còn muốn nhận bất kỳ thông tin liên lạc nào từ Công ty, bạn có thể chọn không tham gia bằng cách làm theo các hướng dẫn có liên quan được bao gồm trong mỗi thông báo được gửi bởi TigerWit. TigerWit có quyền liên lạc với bạn, mặc dù thực tế là bạn đã chọn không tham gia, trong trường hợp TigerWit coi như liên hệ đó là cần thiết.",
            "zh-Hant":"若您不想繼續從本公司接收任何通訊，您可以根據 TigerWit 發送的每份通訊中的相關指示選擇退出。縱然事實上妳已經選擇推出，但是TigerWit 保留在 TigerWit 認為必要時與您聯系的權利。",
            id:"If you no longer wish to receive any communication from the Firm, you may opt-out of by following the relevant instructions included in each communication sent by TigerWit. TigerWit reserves the right to contact you, albeit the fact that you have opted out, in cases where TigerWit deems such contact as necessary."
        },
        amtCookie18:{
            zh:"当本公司代理或服务供应商以外的第三方收集了您的个人信息，我们会向您告知此事，以便您在知情的情况下决定是否与该第三方分享您的信息。",
            en:"You shall be notified accordingly if your personal information is collected by any third party that is not our agent/ service provider, so you can make an informed decision as to whether or not you want to share your information with that party.",
            vi:"Bạn sẽ được thông báo một cách phù hợp nếu thông tin cá nhân của bạn được thu thập bởi bất kỳ bên thứ ba nào không phải là đại lý / nhà cung cấp dịch vụ của chúng tôi, vì vậy bạn có thể đưa ra quyết định về việc có muốn chia sẻ thông tin của bạn với bên đó hay không.",
            "zh-Hant":"當本公司代理或服務供應商以外的第三方收集了您的個人信息，我們會向您告知此事，以便您在知情的情況下決定是否與該第三方分享您的信息。",
            id:"You shall be notified accordingly if your personal information is collected by any third party that is not our agent/ service provider, so you can make an informed decision as to whether or not you want to share your information with that party."
        },
        amtCookie19:{
            zh:"Cookies",
            en:"Cookies",
            vi:"Cookies",
            "zh-Hant":"Cookies",
            id:"Cookies"
        },
        amtCookie20:{
            zh:"Cookie 是用于记录信息而保存在用户电脑中的小文本文件。TigerWit 在其网站上使用 cookie。",
            en:"A cookie is a small text file that is stored on a user's computer for record-keeping purposes. TigerWit uses cookies on its site(s).",
            vi:"Cookie là một tệp văn bản nhỏ được lưu trữ trên máy tính của người dùng cho mục đích lưu giữ hồ sơ. TigerWit sử dụng cookie trên (các) trang web của nó.",
            "zh-Hant":"Cookie 是用於記錄信息而保存在用戶電腦中的小文本文件。TigerWit 在其網站上使用 cookie。",
            id:"A cookie is a small text file that is stored on a user's computer for record-keeping purposes. TigerWit uses cookies on its site(s)."
        },
        amtCookie21:{
            zh:"TigerWit 使用会话 ID cookie 和持久 cookie。关闭 浏 览 器 不 会 让 会 话 ID cookie 结 束 。 持 久cookie 会在您的硬盘中保存一段时间。您可以根据互联网浏览器中“帮助”文件的指示删除持久 cookie。",
            en:"TigerWit uses both session ID cookies and persistent cookies. A session ID cookie does not expire when you close your browser. A persistent cookie remains on your hard drive for an extended period of time. You can remove persistent cookies by following directions provided in your Internet browser's ‘Help’ file.",
            vi:"TigerWit sử dụng cả cookie ID và cookie liên tục- persistent (không bị xóa khi đóng trình duyệt). Cookie ID không hết hạn khi bạn đóng trình duyệt của mình. Một cookie liên tục (persistent) vẫn còn trên ổ cứng của bạn trong một khoảng thời gian dài. Bạn có thể xóa cookie liên tục bằng cách làm theo các hướng dẫn được cung cấp trong file 'Trợ giúp' của trình duyệt Internet của bạn.",
            "zh-Hant":"TigerWit 使用會話 ID cookie 和持久 cookie。關閉 瀏 覽 器 不 會 讓 會 話 ID cookie 結 束 。 持 久cookie 會在您的硬盤中保存壹段時間。您可以根據互聯網瀏覽器中“幫助”文件的指示刪除持久 cookie。",
            id:"TigerWit uses both session ID cookies and persistent cookies. A session ID cookie does not expire when you close your browser. A persistent cookie remains on your hard drive for an extended period of time. You can remove persistent cookies by following directions provided in your Internet browser's ‘Help’ file."
        },
        amtCookie22:{
            zh:"TigerWit 出于统计的目的设置持久 cookie。持久cookie 可帮助本公司追踪和确定位置以及访问TigerWit 网站的用户的偏好，从而提升我们的服务体验。",
            en:"TigerWit sets a persistent cookie for statistical purposes. Persistent cookies also enable the Firm to track and target the location and the interests of users that access the TigerWit site(s) and to enhance the experience of services offered.",
            vi:"TigerWit đặt một cookie liên tục cho các mục đích thống kê. Cookie liên tục cũng cho phép Công ty sao chép và nhắm mục tiêu vị trí và sở thích của người dùng truy cập (các) trang web TigerWit và để nâng cao trải nghiệm của các dịch vụ được cung cấp.",
            "zh-Hant":"TigerWit 出於統計的目的設置持久 cookie。持久cookie 可幫助本公司追蹤和確定位置以及訪問TigerWit 網站的用戶的偏好，從而提升我們的服務體驗。",
            id:"TigerWit sets a persistent cookie for statistical purposes. Persistent cookies also enable the Firm to track and target the location and the interests of users that access the TigerWit site(s) and to enhance the experience of services offered."
        },
        amtCookie23:{
            zh:"若您拒绝 cookie，您依然可以使用 TigerWit 的网站，但是却无法使用开户网站提交您的申请表。",
            en:"If you reject cookies, you may still use the TigerWit sites, but you may not be able to use the online account opening website to submit your application form. ",
            vi:"Nếu bạn từ chối cookie, bạn vẫn có thể sử dụng các trang TigerWit, nhưng bạn không thể sử dụng trang web mở tài khoản trực tuyến để gửi mẫu đơn đăng ký của bạn.",
            "zh-Hant":"若您拒絕 cookie，您依然可以使用 TigerWit 的網站，但是卻無法使用開戶網站提交您的申請表。",
            id:"If you reject cookies, you may still use the TigerWit sites, but you may not be able to use the online account opening website to submit your application form. "
        },
        amtCookie24:{
            zh:"TigerWit 的部分商业合作伙伴也使用本公司网站的 cookie；TigerWit 无法访问或控制这类 cookie。",
            en:"Some of the TigerWit business partners use cookies on the Firm’s sites; TigerWit has no access or control over these cookies.",
            vi:"Một số đối tác kinh doanh của TigerWit sử dụng cookie trên các trang web của Công ty; TigerWit không có quyền truy cập hoặc kiểm soát các cookie này.",
            "zh-Hant":"TigerWit 的部分商業合作夥伴也使用本公司網站的 cookie；TigerWit 無法訪問或控制這類 cookie。",
            id:"Some of the TigerWit business partners use cookies on the Firm’s sites; TigerWit has no access or control over these cookies."
        },
        amtCookie25:{
            zh:"个人信息的安全性和保护措施",
            en:"Security and Protection of your personal information",
            vi:"Bảo Mật Và Bảo Vệ Thông Tin Cá Nhân Của Bạn",
            "zh-Hant":"個人信息的安全性和保護措施",
            id:"Security and Protection of your personal information"
        },
        amtCookie26:{
            zh:"您为注册成为网站用户或服务用户而提供的个人信息被归类为“注册信息”，有多种保护“注册信息”的方法。您可以通过您选择的用户名及密码访问您的“注册信息”。确保密码加密且仅本人知晓是您的个人责任。绝不能向他人泄露您的密码。“注册信息”被安全地存储在安全服务器中，只有获得授权的员工才能通过用户名和密码访问这类信息。本公司在所有个人信息发送给 TigerWit 时对其进行加密，并会尽一切努力防止未获授权者查看这类信息。即使提供给 TigerWit 的个人信息并非“注册信息”，也会将其存储在安全的服务器中，只有获得授权的员工才能通过用户名和密码访问这类信息，您个人无法访问这类信息，因此不会为了您修改这类信息而提供密码。",
            en:"The personal information that you provide in connection with registering yourself as a user of the sites or of the services is classified as ‘Registered Information. ‘Registered Information’ is protected in many ways. You can access your ‘Registered Information’ through a username and password selected by you. It is your responsibility to ensure that your password is encrypted and known only to you. Your password must not be revealed to anyone. ‘Registered Information’ is safely stored on secure servers that only authorised personnel have access to via a username and password. The Firm encrypts all personal information as it is transferred to TigerWit and thus makes all necessary effort to prevent unauthorised parties from viewing any such information. Personal information provided to TigerWit that is not ‘Registered Information’ also resides on secure servers and is again accessible only by authorised personnel via a username and password this information cannot be accessible by you, therefore no password shall be provided in order for you to modify this.",
            vi:"Thông tin cá nhân mà bạn cung cấp liên quan đến việc đăng ký bản thân với tư cách là người dùng trang web hoặc dịch vụ được phân loại là 'Thông tin đã đăng ký. ‘Thông tin đã đăng ký’ được bảo vệ theo nhiều cách. Bạn có thể truy cập ‘Thông tin đã đăng ký’ của mình thông qua tên người dùng và mật khẩu do bạn chọn. Bạn có trách nhiệm đảm bảo rằng mật khẩu của bạn được mã hóa và chỉ bạn biết. Mật khẩu của bạn không được tiết lộ cho bất kỳ ai. ‘Thông tin đã đăng ký’ được lưu trữ an toàn trên các máy chủ bảo mật chỉ cho phép nhân viên có quyền truy cập thông qua tên người dùng và mật khẩu. Công ty mã hóa tất cả thông tin cá nhân khi nó được chuyển sang TigerWit và do đó thực hiện mọi nỗ lực cần thiết để ngăn các bên trái phép xem bất kỳ thông tin nào như vậy. Thông tin cá nhân cung cấp cho TigerWit không phải là 'Thông tin đăng ký' cũng nằm trên máy chủ bảo mật và chỉ có thể truy cập được bởi nhân viên được ủy quyền thông qua tên người dùng và mật khẩu thông tin này không thể được truy cập bởi bạn vì thế sẽ không có mật khẩu được cung cấp để cho bạn sửa đổi.",
            "zh-Hant":"您為註冊成為網站用戶或服務用戶而提供的個人信息被歸類為“註冊信息”，有多種保護“註冊信息”的方法。您可以通過您選擇的用戶名及密碼訪問您的“註冊信息”。確保密碼加密且僅本人知曉是您的個人責任。絕不能向他人泄露您的密碼。“註冊信息”被安全地存儲在安全服務器中，只有獲得授權的員工才能通過用戶名和密碼訪問這類信息。本公司在所有個人信息發送給 TigerWit 時對其進行加密，並會盡壹切努力防止未獲授權者查看這類信息。即使提供給 TigerWit 的個人信息並非“註冊信息”，也會將其存儲在安全的服務器中，只有獲得授權的員工才能通過用戶名和密碼訪問這類信息，您個人無法訪問這類信息，因此不會為了您修改這類信息而提供密碼。",
            id:"The personal information that you provide in connection with registering yourself as a user of the sites or of the services is classified as ‘Registered Information. ‘Registered Information’ is protected in many ways. You can access your ‘Registered Information’ through a username and password selected by you. It is your responsibility to ensure that your password is encrypted and known only to you. Your password must not be revealed to anyone. ‘Registered Information’ is safely stored on secure servers that only authorised personnel have access to via a username and password. The Firm encrypts all personal information as it is transferred to TigerWit and thus makes all necessary effort to prevent unauthorised parties from viewing any such information. Personal information provided to TigerWit that is not ‘Registered Information’ also resides on secure servers and is again accessible only by authorised personnel via a username and password this information cannot be accessible by you, therefore no password shall be provided in order for you to modify this."
        },
        amtCookie27:{
            zh:"通过互联网传输信息并不总是 100%安全；我们将尽一切努力保护您的个人数据，但不能保证传输您的数据的安全性；您要自行承担传输数据的风险。一旦我们收到您的信息，我们会采用相应程序以及安全功能，尽量阻止未获授权的访问。另外，我们向您收集的数据可能会被传送到以及储存在巴哈马以外的地方。本公司或本公司供应商在巴哈马以外地区从事活动的员工也可处理这类信息。这类员工可能执行您的订单、处理您的支付情况以及提供支持服务（包括其他）。您提交个人数据，即表示您同意此类数据传送、储存及处理。本公司将采取一切可能的措施确保在安全并遵守此隐私政策的情况下处理您的数据。",
            en:"Transmission of information via the internet is not always completely secure; we will exercise all endeavours to protect your personal data yet we cannot guarantee the security of your data transmitted; any transmission is at your own risk. Once we have received your information we will use procedures and security features to try to prevent unauthorised access. Furthermore, the data we collect from you may be transferred to, and stored at, a destination outside The Bahamas. It may also be processed by staff operating outside The Bahamas who work for us or for one of our suppliers. Such staff maybe engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing and processing. The Firm will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.",
            vi:"Việc truyền tải thông tin qua internet không phải lúc nào cũng an toàn; chúng tôi sẽ thực hiện tất cả các nỗ lực để bảo vệ dữ liệu cá nhân của bạn nhưng chúng tôi không thể đảm bảo tính bảo mật của dữ liệu được truyền; bất kỳ sự truyền tải nào đều có nguy cơ đối với riêng bạn. Khi chúng tôi đã nhận được thông tin của bạn, chúng tôi sẽ sử dụng các thủ tục và tính năng bảo mật để cố gắng ngăn chặn truy cập trái phép. Hơn nữa, các dữ liệu chúng tôi thu thập từ bạn có thể được chuyển đến, và được lưu trữ tại, một điểm đến bên ngoài Bahamas. Thông tin cũng có thể được xử lý bởi nhân viên hoạt động bên ngoài The Bahamas, người làm việc cho chúng tôi hoặc cho một trong những nhà cung cấp của chúng tôi. Các nhân viên như vậy có thể tham gia, trong số những công việc khác, việc thực hiện các lệnh của bạn, xử lý các thông tin thanh toán của bạn và cung cấp các dịch vụ hỗ trợ. Bằng cách gửi dữ liệu cá nhân của bạn, bạn đồng ý với việc chuyển, lưu trữ và xử lý này. Công ty sẽ thực hiện tất cả các bước cần thiết một cách hợp lý để đảm bảo rằng dữ liệu của bạn được xử lý an toàn và tuân theo Chính sách bảo mật này.",
            "zh-Hant":"通過互聯網傳輸信息並不總是 100%安全；我們將盡壹切努力保護您的個人數據，但不能保證傳輸您的數據的安全性；您要自行承擔傳輸數據的風險。壹旦我們收到您的信息，我們會采用相應程序以及安全功能，盡量阻止未獲授權的訪問。另外，我們向您收集的數據可能會被傳送到以及儲存在巴哈馬以外的地方。本公司或本公司供應商在巴哈馬以外地區從事活動的員工也可處理這類信息。這類員工可能執行您的訂單、處理您的支付情況以及提供支持服務（包括其他）。您提交個人數據，即表示您同意此類數據傳送、儲存及處理。本公司將采取壹切可能的措施確保在安全並遵守此隱私政策的情況下處理您的數據。",
            id:"Transmission of information via the internet is not always completely secure; we will exercise all endeavours to protect your personal data yet we cannot guarantee the security of your data transmitted; any transmission is at your own risk. Once we have received your information we will use procedures and security features to try to prevent unauthorised access. Furthermore, the data we collect from you may be transferred to, and stored at, a destination outside The Bahamas. It may also be processed by staff operating outside The Bahamas who work for us or for one of our suppliers. Such staff maybe engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing and processing. The Firm will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy."
        },
        amtCookie28:{
            zh:"访问个人身份信息",
            en:"Access to Personally Identifiable Information",
            vi:"Truy cập thông tin nhận dạng cá nhân",
            "zh-Hant":"訪問個人身份信息",
            id:"Access to Personally Identifiable Information"
        },
        amtCookie29:{
            zh:"如果您的个人身份信息发生变更，您必须知会我们，请发送邮件至",
            en:"If your personally identifiable information changes, you must inform us accordingly; please e-mail us ",
            vi:"Nếu thông tin cá nhân của bạn thay đổi, bạn phải thông báo cho chúng tôi; xin vui lòng gửi e-mail cho chúng tôi đến địa chỉ ",
            "zh-Hant":"如果您的個人身份信息發生變更，您必須知會我們，請發送郵件至",
            id:"If your personally identifiable information changes, you must inform us accordingly; please e-mail us "
        },
        amtCookie30:{
            zh:"法律免责声明",
            en:"Legal Disclaimer",
            vi:"Tuyên Bố Từ Chối Trách Nhiệm Pháp Lý",
            "zh-Hant":"法律免責聲明",
            id:"Legal Disclaimer"
        },
        amtCookie31:{
            zh:"TigerWit 有权根据规则及条例，以及在本公司为了保护本公司权利或为了遵守政府、政府间或其他监管机构颁布、或与之相关的司法和其他程序、法庭判令、法律流程而认为有必要披露的情况下披露您的个人身份信息。对于本公司网站上的私人信息或其他信息被滥用或损失的情况，由于 TigerWit 对这类信息没有访问权或控制权，故 TigerWit 不承担任何责任。因为您的密码使用不当或被遗忘、疏忽大意或恶意干预等情况而导致您的个人信息被不法盗用或擅自使用，TigerWit 不承担责任。",
            en:"TigerWit reserves the right to disclose your personally identifiable information as required by rules and regulations and when the Firm believes that disclosure is necessary to protect our rights and/or to comply with any judicial and/or other proceedings, court order, legal process served or pursuant to governmental, intergovernmental and/or other regulatory bodies. TigerWit shall not be liable for misuse or loss of personal information and/or otherwise on the Firm’s sites that TigerWit does not have access to or control over. TigerWit will not be liable for unlawful or unauthorised use of your personal information due to misuse or misplacement of your passwords, negligent or malicious intervention and/or otherwise.",
            vi:"TigerWit bảo lưu quyền tiết lộ thông tin cá nhân của bạn theo yêu cầu của các quy tắc và quy định và khi Công ty tin rằng việc tiết lộ là cần thiết để bảo vệ quyền và / hoặc tuân thủ mọi thủ tục tố tụng và / hoặc thủ tục khác, lệnh của tòa, quy trình pháp lý được cung cấp hoặc theo cơ quan chính phủ, liên chính phủ và / hoặc các cơ quan quản lý khác. TigerWit sẽ không chịu trách nhiệm về việc lạm dụng hoặc mất thông tin cá nhân và / hoặc trên trang web của Công ty mà TigerWit không có quyền truy cập hoặc kiểm soát. TigerWit sẽ không chịu trách nhiệm về việc sử dụng trái phép hoặc trái phép thông tin cá nhân của bạn do lạm dụng hoặc đặt sai mật khẩu của bạn, sự can thiệp cẩu thả hoặc độc hại và / hoặc cách khác.",
            "zh-Hant":"TigerWit 有權根據規則及條例，以及在本公司為了保護本公司權利或為了遵守政府、政府間或其他監管機構頒布、或與之相關的司法和其他程序、法庭判令、法律流程而認為有必要披露的情況下披露您的個人身份信息。對於本公司網站上的私人信息或其他信息被濫用或損失的情況，由於 TigerWit 對這類信息沒有訪問權或控制權，故 TigerWit 不承擔任何責任。因為您的密碼使用不當或被遺忘、疏忽大意或惡意幹預等情況而導致您的個人信息被不法盜用或擅自使用，TigerWit 不承擔責任。",
            id:"TigerWit reserves the right to disclose your personally identifiable information as required by rules and regulations and when the Firm believes that disclosure is necessary to protect our rights and/or to comply with any judicial and/or other proceedings, court order, legal process served or pursuant to governmental, intergovernmental and/or other regulatory bodies. TigerWit shall not be liable for misuse or loss of personal information and/or otherwise on the Firm’s sites that TigerWit does not have access to or control over. TigerWit will not be liable for unlawful or unauthorised use of your personal information due to misuse or misplacement of your passwords, negligent or malicious intervention and/or otherwise."
        },
        amtCookie32:{
            zh:"本隐私声明的变更",
            en:"Changes in this Privacy Statement",
            vi:"Thay đổi trong Tuyên bố về quyền riêng tư này",
            "zh-Hant":"本隱私聲明的變更",
            id:"Changes in this Privacy Statement"
        },
        amtCookie33:{
            zh:"如果我们决定修改隐私政策，我们会公布对此隐私声明、页数以及任何我们认为合适的地方所做的修改，以便您了解我们所收集的信息类型、使用方式以及进行披露的情况。",
            en:"If we decide to change our privacy policy, we will post those changes to this privacy statement, the page, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.",
            vi:"Nếu chúng tôi quyết định thay đổi chính sách bảo mật của mình, chúng tôi sẽ đăng những thay đổi đó lên tuyên bố về quyền riêng tư, trang và các địa điểm khác mà chúng tôi cho là phù hợp để bạn biết thông tin nào chúng tôi thu thập, cách chúng tôi sử dụng và trong hoàn cảnh nào bất kỳ, chúng tôi tiết lộ nó.",
            "zh-Hant":"如果我們決定修改隱私政策，我們會公布對此隱私聲明、頁數以及任何我們認為合適的地方所做的修改，以便您了解我們所收集的信息類型、使用方式以及進行披露的情況。",
            id:"If we decide to change our privacy policy, we will post those changes to this privacy statement, the page, and other places we deem appropriate so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it."
        },
        amtCookie34:{
            zh:"我们保留随时修改此隐私声明的权利，请经常浏览此声明。如果我们对此政策做出重大调整，我们会以邮件或在网站首页发出通知的形式通知您。",
            en:"We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our home page.",
            vi:"Chúng tôi bảo lưu quyền sửa đổi tuyên bố về quyền riêng tư này bất kỳ lúc nào, vì vậy hãy thường xuyên xem xét nó. Nếu chúng tôi thực hiện các thay đổi quan trọng đối với chính sách này, chúng tôi sẽ thông báo cho bạn tại đây, qua email hoặc bằng thông báo trên trang chủ của chúng tôi.",
            "zh-Hant":"我們保留隨時修改此隱私聲明的權利，請經常瀏覽此聲明。如果我們對此政策做出重大調整，我們會以郵件或在網站首頁發出通知的形式通知您。",
            id:"We reserve the right to modify this privacy statement at any time, so please review it frequently. If we make material changes to this policy, we will notify you here, by email, or by means of a notice on our home page."
        },
        amtCookie35:{
            zh:"查询",
            en:"Enquiries",
            vi:"Thắc mắc",
            "zh-Hant":"查詢",
            id:"Enquiries"
        },
        amtCookie36:{
            zh:"如果您对隐私政策有何问题，请发送邮件至",
            en:"If you have any enquiries regarding the ‘Privacy Policy’ please e-mail ",
            vi:"Nếu bạn có bất kỳ câu hỏi nào liên quan đến ‘Chính sách bảo mật’, vui lòng gửi e-mail ",
            "zh-Hant":"如果您對隱私政策有何問題，請發送郵件至",
            id:"If you have any enquiries regarding the ‘Privacy Policy’ please e-mail "
        },
        amtBusiness1:{
            zh:"序言",
            en:"Introduction",
            vi:"Giới thiệu",
            "zh-Hant":"序言",
            id:"Introduction"
        },
        amtBusiness2:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或“本公司”）在 巴 哈 马 国 注 册 成 立 （ 注 册 证 书 编 号198255B）。我们的注册办事处位于 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.TigerWit Limited (sau đây gọi tắt là \"TigerWit\", \"Doanh nghiệp\" hoặc \"Công ty\") được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或“本公司”）在 巴 哈 馬 國 註 冊 成 立 （ 註 冊 證 書 編 號198255B）。我們的註冊辦事處位於 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtBusiness3:{
            zh:"确认书",
            en:"Acknowledgement",
            vi:"Thừa nhận",
            "zh-Hant":"確認書",
            id:"Acknowledgement"
        },
        amtBusiness4:{
            zh:"1.客户承认，他/她已经阅读、理解并接受“商业条款和条件（“条款和条件”），相关条款和条件构成客户协议的内容。",
            en:"1.The Client acknowledges that he/she read, understood and accepted the Terms and Conditions of Business (‘the Terms and Conditions’), which forms part of the Client Agreement.",
            vi:"1.Khách hàng thừa nhận rằng họ đã đọc, hiểu và chấp nhận các Điều khoản và Điều kiện Kinh doanh (‘Điều khoản và Điều kiện’), là một phần của Hợp đồng Khách hàng.",
            "zh-Hant":"1.客戶承認，他/她已經閱讀、理解並接受“商業條款和條件（“條款和條件”），相關條款和條件構成客戶協議的內容。",
            id:"1.The Client acknowledges that he/she read, understood and accepted the Terms and Conditions of Business (‘the Terms and Conditions’), which forms part of the Client Agreement."
        },
        amtBusiness5:{
            zh:"2.通过接受构成客户协议一部分的条款和条件，客户即与本公司订立具有约束力的法律协议。",
            en:"2.By accepting the Terms and Conditions, which form part of the Client Agreement, the client enters into a binding legal agreement with the Firm.",
            vi:"2.Bằng cách chấp nhận các Điều khoản và Điều kiện, là một phần của Hợp đồng Khách hàng, khách hàng kí kết vào một hợp động pháp lý ràng buộc với Công ty.",
            "zh-Hant":"2.通過接受構成客戶協議壹部分的條款和條件，客戶即與本公司訂立具有約束力的法律協議。",
            id:"2.By accepting the Terms and Conditions, which form part of the Client Agreement, the client enters into a binding legal agreement with the Firm."
        },
        amtBusiness6:{
            zh:"3.客户承认本公司的官方语言是英语。",
            en:"3.The client acknowledges that the Firm’s official language is the English language.",
            vi:"3.Khách hàng thừa nhận rằng ngôn ngữ chính thức của Công ty là ngôn ngữ tiếng Anh.",
            "zh-Hant":"3.客戶承認本公司的官方語言是英語。",
            id:"3.The client acknowledges that the Firm’s official language is the English language."
        },
        amtBusiness7:{
            zh:"商业条款和条件的范围",
            en:"Scope of the Terms and Conditions of Business",
            vi:"Phạm vi điều khoản và điều kiện kinh doanh",
            "zh-Hant":"商業條款和條件的範圍",
            id:"Scope of the Terms and Conditions of Business"
        },
        amtBusiness8:{
            zh:"1.这些条款和条件规定了 TigerWit 执行客户订单相关的所有操作。",
            en:"1.These Terms and Conditions govern all the actions in relation to the execution of the client’s orders by TigerWit.",
            vi:"1.Các Điều khoản và Điều kiện này chi phối tất cả các hành động liên quan đến việc thực hiện các lệnh của khách hàng bởi TigerWit.",
            "zh-Hant":"1.這些條款和條件規定了 TigerWit 執行客戶訂單相關的所有操作。",
            id:"1.These Terms and Conditions govern all the actions in relation to the execution of the client’s orders by TigerWit."
        },
        amtBusiness9:{
            zh:"2.除非本公司自行裁量做出其他决定，否则这些条款和条件是不可协商的，并且其效力高于 TigerWit 任何其他协议、约定、明示或暗示的声明。如果条款和条件发生实质性修改，应由 TigerWit 合理地通知客户。",
            en:"2.The Terms and Conditions are non- negotiable and override any other agreements, arrangements, express or implied statements made by TigerWit unless the Firm determines otherwise in its sole discretion. If the Terms and Conditions were to be materially amended, reasonable notice shall be given by TigerWit to the client.",
            vi:"2.Các Điều khoản và Điều kiện không thể thương lượng và ghi đè lên bất kỳ thỏa thuận, sắp xếp, tuyên bố rõ ràng hoặc ngụ ý nào khác được thực hiện bởi TigerWit trừ khi Công ty xác định theo quyết định riêng của mình. Nếu các Điều khoản và Điều kiện được sửa đổi vật chất, thông báo hợp lý sẽ được TigerWit cung cấp cho khách hàng.",
            "zh-Hant":"2.除非本公司自行裁量做出其他決定，否則這些條款和條件是不可協商的，並且其效力高於 TigerWit 任何其他協議、約定、明示或暗示的聲明。如果條款和條件發生實質性修改，應由 TigerWit 合理地通知客戶。",
            id:"2.The Terms and Conditions are non- negotiable and override any other agreements, arrangements, express or implied statements made by TigerWit unless the Firm determines otherwise in its sole discretion. If the Terms and Conditions were to be materially amended, reasonable notice shall be given by TigerWit to the client."
        },
        amtBusiness10:{
            zh:"条款解释",
            en:"Interpretation of Terms",
            vi:"Giải thích về Điều khoản",
            "zh-Hant":"條款解釋",
            id:"Interpretation of Terms"
        },
        amtBusiness11:{
            zh:"1.除非有相反的说明，条款和条件中包含的术语应具有特定含义，并可酌情以单数或复数形式使用。除非另有规定，本条款和条件中使用的术语应具有 SCB 规则和条例赋予的含义。",
            en:"1.Unless indicated to the contrary, the terms included in the Terms and Conditions shall have a specific meaning and may be used in the singular or plural as appropriate. Unless otherwise defined, the terms used in these terms and conditions shall have the meaning given by SCB rules and regulations.",
            vi:"1.Trừ khi có điều khoản gì trái ngược, các điều khoản trong Điều khoản và Điều Kiện sẽ có ý nghĩa cụ thể và có thể được sử dụng ở dạng số ít hoặc số nhiều nếu thích hợp. Trừ khi được định nghĩa khác, các điều khoản được sử dụng trong các điều khoản và điều kiện này sẽ có ý nghĩa được đưa ra bởi các quy tắc và quy định của SCB.",
            "zh-Hant":"1.除非有相反的說明，條款和條件中包含的術語應具有特定含義，並可酌情以單數或復數形式使用。除非另有規定，本條款和條件中使用的術語應具有 SCB 規則和條例賦予的含義。",
            id:"1.Unless indicated to the contrary, the terms included in the Terms and Conditions shall have a specific meaning and may be used in the singular or plural as appropriate. Unless otherwise defined, the terms used in these terms and conditions shall have the meaning given by SCB rules and regulations."
        },
        amtBusiness12:{
            zh:"卖价 - 指 TigerWit 愿意卖出 CFD 的价格。",
            en:"Ask - shall mean the price at which TigerWit is willing to sell a CFD.",
            vi:"Giá chào bán – có nghĩa là giá mà tại đó TigerWit sẵn sang bán một CED. ",
            "zh-Hant":"賣價 - 指 TigerWit 願意賣出 CFD 的價格。",
            id:"Ask - shall mean the price at which TigerWit is willing to sell a CFD."
        },
        amtBusiness13:{
            zh:"授权代表 - 指经由客户明确授权、代表他/她行动的人员。通过授权委托书记录上述关系，其副本由本公司持有。",
            en:"Authorised Representative - shall mean the person who is expressly authorised by the client to act on his/her behalf. The above-mentioned relationship is documented through a Power of Attorney, a copy of which is held by the Firm.",
            vi:"Đại diện được ủy quyền – có nghĩa là người được khách hàng ủy quyền rõ ràng để hành động thay mặt họ. Mối quan hệ nói trên được ghi nhận thông qua Giấy Ủy Quyền, một bản sao do Công ty nắm giữ.",
            "zh-Hant":"授權代表 - 指經由客戶明確授權、代表他/她行動的人員。通過授權委托書記錄上述關系，其副本由本公司持有。",
            id:"Authorised Representative - shall mean the person who is expressly authorised by the client to act on his/her behalf. The above-mentioned relationship is documented through a Power of Attorney, a copy of which is held by the Firm."
        },
        amtBusiness14:{
            zh:"余额 - 指交易账户中可用于提取的资金。",
            en:"Balance - shall mean the funds in a trading account that are available for withdrawal.",
            vi:"Số dư – có nghĩa là các khoản tiền trong tài khoản giao dịch có sẵn để rút tiền.",
            "zh-Hant":"余額 - 指交易賬戶中可用於提取的資金。",
            id:"Balance - shall mean the funds in a trading account that are available for withdrawal."
        },
        amtBusiness15:{
            zh:"余额货币 - 指交易账户用来计价的货币。应该注意的是，所有费用（包括差价、佣金和掉期）都是以该货币进行计算的。",
            en:"Balance Currency - hall mean the currency that the trading account is denominated in. It should be noted that all charges including spreads, commissions and swaps, are calculated in that currency.",
            vi:"Tiền Tệ Số Dư- có nghĩa là đơn vị tiền tệ mà tài khoản giao dịch được xác định. Cần lưu ý rằng tất cả các khoản phí bao gồm spread, tiền hoa hồng và spread, được tính bằng đơn vị tiền tệ đó.",
            "zh-Hant":"余額貨幣 - 指交易賬戶用來計價的貨幣。應該註意的是，所有費用（包括差價、傭金和掉期）都是以該貨幣進行計算的。",
            id:"Balance Currency - hall mean the currency that the trading account is denominated in. It should be noted that all charges including spreads, commissions and swaps, are calculated in that currency."
        },
        amtBusiness16:{
            zh:"基本货币 - 指货币对中的第一种货币。例如，在欧元兑美元货币对中，基本货币是欧元。",
            en:"Base Currency - shall mean the first currency represented in a currency pair. For example, in the EURUSD currency pair the base currency is the EUR.",
            vi:"Tiền Tệ Cơ Sở - nghĩa là đơn vị tiền tệ đầu tiên được thể hiện bằng một cặp tiền tệ. Ví dụ, trong cặp tiền tệ EURUSD, đồng tiền cơ sở là EUR.",
            "zh-Hant":"基本貨幣 - 指貨幣對中的第壹種貨幣。例如，在歐元兌美元貨幣對中，基本貨幣是歐元。",
            id:"Base Currency - shall mean the first currency represented in a currency pair. For example, in the EURUSD currency pair the base currency is the EUR."
        },
        amtBusiness17:{
            zh:"买价 - 指 TigerWit 愿意买入 CFD 的价格。",
            en:"Bid - shall mean the price at which TigerWit is willing to buy a CFD.",
            vi:"Giá chào mua – nghĩa là giá mà TigerWit sẵn sàng mua CFD.",
            "zh-Hant":"買價 - 指 TigerWit 願意買入 CFD 的價格。",
            id:"Bid - shall mean the price at which TigerWit is willing to buy a CFD."
        },
        amtBusiness18:{
            zh:"客户 - 指收到客户协议第 4.1 款中所述电子邮件的人士。",
            en:"Client - shall mean the person who received the e- mail referred to in paragraph 4.1 of the Client Agreement.",
            vi:"Khách hàng – nghĩa là người nhận được e-mail được đề cập trong đoạn 4.1 của Hợp đồng khách hàng. ",
            "zh-Hant":"客戶 - 指收到客戶協議第 4.1 款中所述電子郵件的人士。",
            id:"Client - shall mean the person who received the e- mail referred to in paragraph 4.1 of the Client Agreement."
        },
        amtBusiness19:{
            zh:"客户协议 - 指客户与本公司签订的协议，其中包括条款和条件、订单执行政策、客户分类通知和利益冲突政策，以及发布在本公司网站上的任何信息（法律或其他），可能由 TigerWit 不时进行修改。",
            en:"Client Agreement - shall mean the agreement entered into between a client and the Firm, including the Terms and Conditions, Order Execution Policy, Client Categorisation Notice, and Conflicts of Interest Policy, as well as any information (legal or otherwise) published on the Firm's website, as may be amended by TigerWit from time to time.",
            vi:"Hợp đồng khách hàng – nghĩa là thỏa thuận được ký kết giữa khách hàng và Công ty, bao gồm Điều Khoản và Điều Kiện, chính sách thực thi lệnh, Thông Báo Phân Loại Khách Hàng và Chính Sách Xung Đột Lợi Ích, cũng như bất kỳ thông tin nào (hợp pháp hoặc khác) được công bố trên Công ty trang web, có thể được TigerWit sửa đổi theo thời gian.",
            "zh-Hant":"客戶協議 - 指客戶與本公司簽訂的協議，其中包括條款和條件、訂單執行政策、客戶分類通知和利益沖突政策，以及發布在本公司網站上的任何信息（法律或其他），可能由 TigerWit 不時進行修改。",
            id:"Client Agreement - shall mean the agreement entered into between a client and the Firm, including the Terms and Conditions, Order Execution Policy, Client Categorisation Notice, and Conflicts of Interest Policy, as well as any information (legal or otherwise) published on the Firm's website, as may be amended by TigerWit from time to time."
        },
        amtBusiness20:{
            zh:"差价合约 (CFD) - 指涉及以下内容的 CFD：现货外汇（“外汇”）、股票、现货金属、期货或任何可通过 TigerWit 交易平台进行交易的 CFD相关工具；可在 http://global.tigerwit.com.获得金融工具的完整列表。",
            en:"Contract for Difference (CFD) - shall mean a CFD on: spot foreign exchange (‘FX’), shares, spot metals, futures or any other CFD related instrument that is available for trading through the TigerWit trading platform(s); a full list of the financial instruments which is available online at http://global.tigerwit.com.",
            vi:"Hợp Đồng Chênh Lệch (CFD) – có nghĩa là CFD trên: ngoại hối giao dịch ngay (‘FX’), cổ phiếu, kim loại, tương lai hoặc bất kỳ công cụ liên quan CFD nào khác có sẵn để giao dịch thông qua các sàn giao dịch TigerWit; một danh sách đầy đủ các công cụ tài chính có sẵn trực tuyến tại website: http:/global.tigerwit.com.",
            "zh-Hant":"差價合約 (CFD) - 指涉及以下內容的 CFD：現貨外匯（“外匯”）、股票、現貨金屬、期貨或任何可通過 TigerWit 交易平臺進行交易的 CFD相關工具；可在 http://global.tigerwit.com.獲得金融工具的完整列表。",
            id:"Contract for Difference (CFD) - shall mean a CFD on: spot foreign exchange (‘FX’), shares, spot metals, futures or any other CFD related instrument that is available for trading through the TigerWit trading platform(s); a full list of the financial instruments which is available online at http://global.tigerwit.com."
        },
        amtBusiness21:{
            zh:"公司行为 - 指证券发行者采取的任何行动，其上市证券与通过 TigerWit 交易平台交易的金融工具相关，包括但不限于以下情况：(i) 股票分拆，(ii) 合并，(iii) 配股，(iv) 兼并和收购以及 (v) 股利。",
            en:"Corporate Actions - shall mean any actions taken by an issuer, whose listed securities are associated with the financial instruments traded through the TigerWit trading platform(s), including, but not limited to instances of: (i) stock split, (ii) consolidation, (iii) rights issue, (iv) merger and takeover, and (v) dividends.",
            vi:"Hành động Công ty- có nghĩa là bất kỳ hành động nào của một tổ chức phát hành, có chứng thực được liệt kê có liên quan đến các công cụ tài chính được giao dịch thông qua các nền tảng giao dịch TigerWit, bao gồm, nhưng không giưới hạn trong các trường hợp: (i) chia cổ phiếu, (ii) sự hợp nhất, (iii) phát hành quyền mua cổ phiếu, (iv) sáp nhập và tiếp quản, và (v) tiền lãi cổ phần (cổ tức).",
            "zh-Hant":"公司行為 - 指證券發行者采取的任何行動，其上市證券與通過 TigerWit 交易平臺交易的金融工具相關，包括但不限於以下情況：(i) 股票分拆，(ii) 合並，(iii) 配股，(iv) 兼並和收購以及 (v) 股利。",
            id:"Corporate Actions - shall mean any actions taken by an issuer, whose listed securities are associated with the financial instruments traded through the TigerWit trading platform(s), including, but not limited to instances of: (i) stock split, (ii) consolidation, (iii) rights issue, (iv) merger and takeover, and (v) dividends."
        },
        amtBusiness22:{
            zh:"报价 - 指客户申请即时执行或挂单的价格。",
            en:"Declared Price - shall mean the price that the client requested for either an instant execution or pending order.",
            vi:"Giá đã khai báo – có nghĩa là giá mà khách hàng đã yêu cầu cho một lệnh thực hiện tức thời hoặc lệnh chờ.",
            "zh-Hant":"報價 - 指客戶申請即時執行或掛單的價格。",
            id:"Declared Price - shall mean the price that the client requested for either an instant execution or pending order."
        },
        amtBusiness23:{
            zh:"账户净值 - 表示余额加/减任何未平仓头寸的利润/损失。",
            en:"Equity - shall mean the balance plus/minus any profit/loss that derives from any open positions.",
            vi:"Vốn tức thời- có nghĩa là số dư cộng/ trừ bất kỳ khoản lãi/ lỗ nào phát sinh từ bất kỳ vị thế mở nào. ",
            "zh-Hant":"賬戶凈值 - 表示余額加/減任何未平倉頭寸的利潤/損失。",
            id:"Equity - shall mean the balance plus/minus any profit/loss that derives from any open positions."
        },
        amtBusiness24:{
            zh:"智能止损离场 - 指在保证金水平低于所需最低限度的情况下平掉具有最高保证金的头寸。",
            en:"Smart Stop Out - shall mean the closing of positions with the highest Margin, in the event the Margin Level falls below the required minimum.",
            vi:"Smart stop out – có nghĩa là đóng các vị thế có Ký quỹ cao nhất, trong trường hợp Mức ký quỹ giảm xuống dưới mức tối thiểu bắt buộc. ",
            "zh-Hant":"智能止損離場 - 指在保證金水平低於所需最低限度的情況下平掉具有最高保證金的頭寸。",
            id:"Smart Stop Out - shall mean the closing of positions with the highest Margin, in the event the Margin Level falls below the required minimum."
        },
        amtBusiness25:{
            zh:"SCB - 指巴哈马证券监察委员会及其运作的立法框架和规章制度。",
            en:"SCB - shall mean the Securities Commission of The Bahamas and the legislative framework from which it operates, it Rules and Regulations.",
            vi:"SCB – có nghĩa là Ủy ban Chứng khoán của Bahamas và khung pháp lý mà từ đó nó hoạt động, đó là Quy tắc và Quy định.",
            "zh-Hant":"SCB - 指巴哈馬證券監察委員會及其運作的立法框架和規章制度。",
            id:"SCB - shall mean the Securities Commission of The Bahamas and the legislative framework from which it operates, it Rules and Regulations."
        },
        amtBusiness26:{
            zh:"可用保证金 － 指可用于开立头寸的资金，计算方法如下：可用保证金＝净值-已用保证金",
            en:"Free Margin - shall mean funds that are available for opening a position and it is calculated as: Free Margin = Equity - Margin",
            vi:"Ký quỹ tự do – nghĩa là các quỹ có sẵn để mở một vị thế và được tính như sau: Ký Quỹ tự do = Vốn tức thời– Ký Quỹ",
            "zh-Hant":"可用保證金 － 指可用於開立頭寸的資金，計算方法如下：可用保證金＝凈值-已用保證金",
            id:"Free Margin - shall mean funds that are available for opening a position and it is calculated as: Free Margin = Equity - Margin"
        },
        amtBusiness27:{
            zh:"取消前有效 (GTC) - 指客户未指定到期日期和时间的挂单，该订单将在无限期内保持有效状态，直至完全或部分执行或被取消。",
            en:"Good ‘Til Cancelled (GTC) - shall mean a pending order for which the client did not specify an expiry date and time and such order shall remain valid for an indefinite time until fully or partially executed, or cancelled.",
            vi:"Good’ Til Cancelled (GTC) – có nghĩa là lệnh chờ mà khách hàng không chỉ định ngày và giờ hết hạn và lệnh đó sẽ vẫn còn hiệu lực trong một thời gian vô thời hạn cho đến khi được thực thi một phần hoặc toàn bộ hoặc hủy bỏ. ",
            "zh-Hant":"取消前有效 (GTC) - 指客戶未指定到期日期和時間的掛單，該訂單將在無限期內保持有效狀態，直至完全或部分執行或被取消。",
            id:"Good ‘Til Cancelled (GTC) - shall mean a pending order for which the client did not specify an expiry date and time and such order shall remain valid for an indefinite time until fully or partially executed, or cancelled."
        },
        amtBusiness28:{
            zh:"即时执行订单 - 指在客户通过 TigerWit 交易平台发送交易指令时，以屏幕上所显示的价格执行的订单。",
            en:"Instant Execution Order - shall mean an order that is executed at the price that appears on the screen at the time that the client sends the instruction for trading through TigerWit’s trading platform(s).",
            vi:"Lệnh Thực thi tức thì – có nghĩa là một lệnh được thực hiện ở mức giá xuất hiên trên màn hình tại thời điểm khách hàng gửi lệnh giao dịch thông qua các sàn giao dịch của TigerWit.",
            "zh-Hant":"即時執行訂單 - 指在客戶通過 TigerWit 交易平臺發送交易指令時，以屏幕上所顯示的價格執行的訂單。",
            id:"Instant Execution Order - shall mean an order that is executed at the price that appears on the screen at the time that the client sends the instruction for trading through TigerWit’s trading platform(s)."
        },
        amtBusiness29:{
            zh:"手 - 指代表交易量的单位。应该注意的是，1 手等于 100,000 单位的基本货币，例如，1 手欧元美元等于 100,000 欧元；因此，0.1 手是 10,000单位的基本货币。",
            en:"Lot - shall mean the unit that represents the volume of a transaction. It should be noted that 1 lot equals 100,000 units of base currency, for example 1 lot in EURUSD equals EUR 100,000; therefore, 0.1 of a lot is 10,000 units of base currency.",
            vi:"Lot – nghĩa là đơn vị thể hiện khối lượng giao dịch. Cần lưu ý rằng 1 lot bằng 100.000 đơn vị tiền tệ cơ bản, ví dụ 1 lot bằng EURUSD tương đương 100.000 EUR; do đó, 0,1 của rất nhiều là 10.000 đơn vị tiền tệ cơ sở. ",
            "zh-Hant":"手 - 指代表交易量的單位。應該註意的是，1 手等於 100,000 單位的基本貨幣，例如，1 手歐元美元等於 100,000 歐元；因此，0.1 手是 10,000單位的基本貨幣。",
            id:"Lot - shall mean the unit that represents the volume of a transaction. It should be noted that 1 lot equals 100,000 units of base currency, for example 1 lot in EURUSD equals EUR 100,000; therefore, 0.1 of a lot is 10,000 units of base currency."
        },
        amtBusiness30:{
            zh:"保证金 - 指为维持未平仓头寸而应在交易账户中保留的可用资金。",
            en:"Margin - shall mean the required funds available in a trading account for the purposes of maintaining an open position.",
            vi:"Ký Quỹ - nghĩa là các khoản tiền cần thiết có sẵn trong tài khoản giao dịch nhằm mục đích duy trì vị thế mở.",
            "zh-Hant":"保證金 - 指為維持未平倉頭寸而應在交易賬戶中保留的可用資金。",
            id:"Margin - shall mean the required funds available in a trading account for the purposes of maintaining an open position."
        },
        amtBusiness31:{
            zh:"保证金水平 - 指账户净值与保证金的比率。",
            en:"Margin Level - shall mean the Equity to Margin ratio.",
            vi:"Mức độ Ký quỹ - có nghĩa là tỷ lệ vốn chủ sở hữu so với tỷ lệ ký quỹ.",
            "zh-Hant":"保證金水平 - 指賬戶凈值與保證金的比率。",
            id:"Margin Level - shall mean the Equity to Margin ratio."
        },
        amtBusiness32:{
            zh:"做市商 - 指在金融工具中报出买入价和卖出价的公司或个人。",
            en:"Market Maker - shall mean the company, or the individual, that quotes both a buy and a sell price in a financial instrument.",
            vi:"Market Maker – có nghĩa là công ty hoặc cá nhân, chào giá cả giá mua và giá bán với một công cụ tài chính.",
            "zh-Hant":"做市商 - 指在金融工具中報出買入價和賣出價的公司或個人。",
            id:"Market Maker - shall mean the company, or the individual, that quotes both a buy and a sell price in a financial instrument."
        },
        amtBusiness33:{
            zh:"未平仓头寸 - 指任何尚未平仓的头寸。例如，一个未被相反空头头寸覆盖的未平仓多头头寸，反之亦然。",
            en:"Open Position - shall mean any position that has not been closed. For example, an open long position not covered by the opposite short position and vice versa.",
            vi:"Các lệnh đang mở - Nghĩa là bất kỳ vị thế nào chưa bị đóng. Ví dụ, một vị thế mở mua không được bao phủ bởi vị thế bán đối diện và ngược lại.",
            "zh-Hant":"未平倉頭寸 - 指任何尚未平倉的頭寸。例如，壹個未被相反空頭頭寸覆蓋的未平倉多頭頭寸，反之亦然。",
            id:"Open Position - shall mean any position that has not been closed. For example, an open long position not covered by the opposite short position and vice versa."
        },
        amtBusiness34:{
            zh:"场外交易 (OTC) - 指其交易受服务协议约束的所有金融工具的执行场所。",
            en:"Over-The-Counter (OTC) - shall mean the execution venue for any financial instruments whose trading is governed by the Service Agreement.",
            vi:"Over – the – Counter (OTC) – có nghĩa là địa điểm thực hiện cho bất kỳ công cụ tài chính nào mà giao dịch được điều chỉnh bởi thỏa thuận dịch vụ.",
            "zh-Hant":"場外交易 (OTC) - 指其交易受服務協議約束的所有金融工具的執行場所。",
            id:"Over-The-Counter (OTC) - shall mean the execution venue for any financial instruments whose trading is governed by the Service Agreement."
        },
        amtBusiness35:{
            zh:"挂单 - 指买入止损或卖出止损、买入限价或卖出限价或止损限价单。",
            en:"Pending Order - shall mean either a buy stop, or sell stop, or buy limit, or sell limit order or a stop-limit order.",
            vi:"Lệnh chờ - nghĩa là lệnh dừng mua hoặc bán hoặc mua giới hạn hoặc bán giới hạn hoặc lệnh giới hạn dừng.",
            "zh-Hant":"掛單 - 指買入止損或賣出止損、買入限價或賣出限價或止損限價單。",
            id:"Pending Order - shall mean either a buy stop, or sell stop, or buy limit, or sell limit order or a stop-limit order."
        },
        amtBusiness36:{
            zh:"报价 - TigerWit 通过交易平台发送的任何买价和卖价，这些价格受到本公司无法控制的情况的影响。",
            en:"Quotes - Any bid and ask prices transmitted by TigerWit, subject to instances outside the control of the Firm, through the trading platform(s).",
            vi:"Các chào giá– Bất kỳ giá chào mua và giá chào bán nào được TigerWit truyền đi, tùy thuộc vào các trường hợp ngoài tầm kiểm soát của Công ty, thông qua các sàn giao dịch.",
            "zh-Hant":"報價 - TigerWit 通過交易平臺發送的任何買價和賣價，這些價格受到本公司無法控制的情況的影響。",
            id:"Quotes - Any bid and ask prices transmitted by TigerWit, subject to instances outside the control of the Firm, through the trading platform(s)."
        },
        amtBusiness37:{
            zh:"风险披露通知 - 指客户协议附带的通知，其中包含 CFD 合约交易所涉及的风险详细信息。",
            en:"Risk Disclosure Notice - shall mean the Notice appended to the Client Agreement containing details of risks involved in the trading of CFDs.",
            vi:"Lưu ý Tiết lộ Thông tin rủi ro – nghĩa là Thông báo được them vào thỏa thuận khách hàng có chứa các chi tiết về rủi ro liên quan đến giao dịch CFD.",
            "zh-Hant":"風險披露通知 - 指客戶協議附帶的通知，其中包含 CFD 合約交易所涉及的風險詳細信息。",
            id:"Risk Disclosure Notice - shall mean the Notice appended to the Client Agreement containing details of risks involved in the trading of CFDs."
        },
        amtBusiness38:{
            zh:"止损 - 指为尽可能减少损失而附加到即时执行或挂单的指令。",
            en:"Stop Loss - shall mean an instruction that is attached to an instant execution or pending order for minimising loss.",
            vi:"Lệnh dừng lỗ - có nghĩa là một lệnh được gắn vào một lệnh thực thi tức thì hoặc lệnh chờ để giảm thiểu tổn thất.",
            "zh-Hant":"止損 - 指為盡可能減少損失而附加到即時執行或掛單的指令。",
            id:"Stop Loss - shall mean an instruction that is attached to an instant execution or pending order for minimising loss."
        },
        amtBusiness39:{
            zh:"止盈 - 指为确保盈利而附加到即时执行或挂单上的指令。",
            en:"Take Profit - shall mean an instruction that is attached to an instant execution or pending order for securing profit.",
            vi:"Chốt lời – nghĩa là một lệnh được đính kèm với lệnh thực thi tức thời hoặc lệnh chờ để đảm bảo lợi nhuận. ",
            "zh-Hant":"止盈 - 指為確保盈利而附加到即時執行或掛單上的指令。",
            id:"Take Profit - shall mean an instruction that is attached to an instant execution or pending order for securing profit."
        },
        amtBusiness40:{
            zh:"交易账户 - 指客户为通过 TigerWit 交易平台交易金融工具而持有的、具有唯一编号的账户。",
            en:"Trading Account - shall mean the account, which has a unique number, maintained by a client for the purposes of trading financial instruments through the TigerWit trading platform(s).",
            vi:"Tài khoản giao dịch – nghĩa là tài khoản có số duy nhất, được duy trì bởi khách hàng với mục đích giao dịch công cụ tài chính thông qua các nền tảng giao dịch TigerWit.",
            "zh-Hant":"交易賬戶 - 指客戶為通過 TigerWit 交易平臺交易金融工具而持有的、具有唯壹編號的賬戶。",
            id:"Trading Account - shall mean the account, which has a unique number, maintained by a client for the purposes of trading financial instruments through the TigerWit trading platform(s)."
        },
        amtBusiness41:{
            zh:"起息日 - 指资金的交付日期。",
            en:"Value Date - shall mean the delivery date of funds.",
            vi:"Ngày giá trị - có nghĩa là ngày chuyển tiền.",
            "zh-Hant":"起息日 - 指資金的交付日期。",
            id:"Value Date - shall mean the delivery date of funds."
        },
        amtBusiness42:{
            zh:"可变货币 - 指货币对中表示的第二种货币，例如在欧元兑美元货币对中，可变货币为美元。",
            en:"Variable Currency - shall mean the second currency represented in a currency pair, for example in the EURUSD currency pair the variable currency is the USD.",
            vi:"Đơn vị tiền tệ biến đổi – nghĩa là đơn vị tiền tệ thứ hai được thể hiện bang cặp tiền tệ, ví dụ trong cặp tiền EURUSD, tiền tệ biến đổi là USD.",
            "zh-Hant":"可變貨幣 - 指貨幣對中表示的第二種貨幣，例如在歐元兌美元貨幣對中，可變貨幣為美元。",
            id:"Variable Currency - shall mean the second currency represented in a currency pair, for example in the EURUSD currency pair the variable currency is the USD."
        },
        amtBusiness43:{
            zh:"电子交易",
            en:"Electronic Trading",
            vi:"Giao dịch điện tử.",
            "zh-Hant":"電子交易",
            id:"Electronic Trading"
        },
        amtBusiness44:{
            zh:"1.根据客户协议第 4.1 款，一旦服务协议开始客户应该：",
            en:"1.Once the Service Agreement commences according to paragraph 4.1 of the Client Agreement, the client shall: ",
            vi:"1.Khi Thỏa thuận dịch vụ khởi đầu theo đoạn 4.1 của Hợp đồng khách hàng, khách hàng sẽ: ",
            "zh-Hant":"1.根據客戶協議第 4.1 款，壹旦服務協議開始客戶應該：",
            id:"1.Once the Service Agreement commences according to paragraph 4.1 of the Client Agreement, the client shall: "
        },
        amtBusiness45:{
            zh:"下载并安装 http://global.tigerwit.com 在线提供的交易平台软件（“该软件”）；并",
            en:"download and install the trading platform(s) software (‘the Software’) available online at http://global.tigerwit.com; and,",
            vi:"tải xuống và cài đặt phần mềm giao dịch (‘phần mềm’) có sẵn trực tuyến tại http:/global.tigerwit.com; ",
            "zh-Hant":"下載並安裝 http://global.tigerwit.com 在線提供的交易平臺軟件（“該軟件”）；並",
            id:"download and install the trading platform(s) software (‘the Software’) available online at http://global.tigerwit.com; and,"
        },
        amtBusiness46:{
            zh:"通过电子邮件接收个人交易账户（“交易账户”），从而登录交易平台，以为交易金融工具而发送和/或修改指令。",
            en:"receive through an e-mail, personal access codes (‘the Access Codes’) to enable him/her to login to the trading platform(s) in order to send and/or modify instructions for the purposes of trading financial instruments.",
            vi:"và nhận được e-mail mã truy cập cá nhân để cho phép anh ta/ cô ta đăng nhập vào các nền tảng giao dịch để gửi và / hoặc sửa đổi hướng dẫn cho mục đích giao dịch công cụ tài chính.",
            "zh-Hant":"通過電子郵件接收個人交易賬戶（“交易賬戶”），從而登錄交易平臺，以為交易金融工具而發送和/或修改指令。",
            id:"receive through an e-mail, personal access codes (‘the Access Codes’) to enable him/her to login to the trading platform(s) in order to send and/or modify instructions for the purposes of trading financial instruments."
        },
        amtBusiness47:{
            zh:"2.该软件可能由 TigerWit 以外的一方所开发，可支持与本公司所使用协议兼容的数据安全协议。",
            en:"2.The Software, which may have been developed by a party other than TigerWit, supports data security protocols compatible with the protocols used by the Firm.",
            vi:"2.Phần mềm, có thể được phát triển bởi một bên không phải là TigerWit, hỗ trợ các giao thức bảo mật dữ liệu tương thích với các giao thức được Công ty sử dụng.",
            "zh-Hant":"2.該軟件可能由 TigerWit 以外的壹方所開發，可支持與本公司所使用協議兼容的數據安全協議。",
            id:"2.The Software, which may have been developed by a party other than TigerWit, supports data security protocols compatible with the protocols used by the Firm."
        },
        amtBusiness48:{
            zh:"3.客户应对使用其个人交易账户通过交易平台发送和/或收到的任何指令负全部责任。",
            en:"3.The client shall be solely responsible for any instructions sent and/or received through the trading platform(s) using his/her personal access codes",
            vi:"3.Khách hàng sẽ chịu trách nhiệm hoàn toàn về mọi hướng dẫn được gửi và / hoặc nhận được thông qua các sàn giao dịch để sử dụng mã truy cập cá nhân của mình.",
            "zh-Hant":"3.客戶應對使用其個人交易賬戶通過交易平臺發送和/或收到的任何指令負全部責任。",
            id:"3.The client shall be solely responsible for any instructions sent and/or received through the trading platform(s) using his/her personal access codes"
        },
        amtBusiness49:{
            zh:"4.客户应确保他/她的访问代码始终保密。在任何情况下，如果客户向其授权代理人以外的人员透露交易账户，或者任何人（通过非法或其他方式）获取客户的交易账户，则本公司对发生的任何损失概不负责，包括但不限于由于客户行为所引起的经济损失。",
            en:"4.The client shall ensure that his/her Access Codes remain confidential at all times. If, under any circumstances, the client reveals the Access Codes to a person other than his/her authorised representative, or that any person obtains (illegally or otherwise) a client's Access Codes, the Firm shall bear no responsibility for any loss that arises, including but not limited to financial loss, as a result of the client’s actions.",
            vi:"4.Khách hàng phải đảm bảo rằng Mã truy cập của họ luôn được giữ bí mật. Nếu, trong mọi trường hợp, khách hàng tiết lộ Mã truy cập cho một người không phải là người đại diện được ủy quyền của mình hoặc bất kỳ người nào nhận được mã truy cập của khách hàng (bất hợp pháp hoặc khác), Công ty sẽ không chịu trách nhiệm cho bất kỳ tổn thất phát sinh nào, bao gồm nhưng không giới hạn trong việc mất tài chính do hành động của khách hàng. ",
            "zh-Hant":"4.客戶應確保他/她的訪問代碼始終保密。在任何情況下，如果客戶向其授權代理人以外的人員透露交易賬戶，或者任何人（通過非法或其他方式）獲取客戶的交易賬戶，則本公司對發生的任何損失概不負責，包括但不限於由於客戶行為所引起的經濟損失。",
            id:"4.The client shall ensure that his/her Access Codes remain confidential at all times. If, under any circumstances, the client reveals the Access Codes to a person other than his/her authorised representative, or that any person obtains (illegally or otherwise) a client's Access Codes, the Firm shall bear no responsibility for any loss that arises, including but not limited to financial loss, as a result of the client’s actions."
        },
        amtBusiness50:{
            zh:"5.如果客户已经注意到有人因为交易或其他目的，在未经他/她明确同意的情况下使用访问代码，客户应立即通知 TigerWit。客户接受，如果有人登录到交易平台，TigerWit 无法识别其身份。",
            en:"5.The client shall immediately inform TigerWit if it comes to his/her attention that the Access Codes have been used, either for trading or other purposes, without his/her express consent. The client accepts that TigerWit is unable to identify any instances when a person is logging-in to the trading platform(s).",
            vi:"5.Khách hàng sẽ ngay lập tức thông báo cho TigerWit nếu họ chú ý rằng Mã truy cập đã được sử dụng, hoặc cho giao dịch hoặc cho các mục đích khác mà không có sự đồng ý rõ ràng của họ. Khách hàng chấp nhận rằng TigerWit không thể xác định bất kỳ trường hợp ào khi một người đang đăng nhập vào các nền tảng giao dịch. ",
            "zh-Hant":"5.如果客戶已經註意到有人因為交易或其他目的，在未經他/她明確同意的情況下使用訪問代碼，客戶應立即通知 TigerWit。客戶接受，如果有人登錄到交易平臺，TigerWit 無法識別其身份。",
            id:"5.The client shall immediately inform TigerWit if it comes to his/her attention that the Access Codes have been used, either for trading or other purposes, without his/her express consent. The client accepts that TigerWit is unable to identify any instances when a person is logging-in to the trading platform(s)."
        },
        amtBusiness51:{
            zh:"6.客户接受，为确保和/或恢复交易平台的有序运行，TigerWit 保留终止客户访问交易平台的权利，在这种情况下 TigerWit可以根据客户协议第 17.5 款酌情关闭客户的任何交易账户。",
            en:"6.The client accepts that TigerWit reserves the right to terminate the client’s access to the trading platform(s) in order to ensure and/ or restore the orderly operation of the trading platform(s) under such circumstances TigerWit may,at its discretion, close any of the client’s trading account(s), according to paragraph 17.5 of the Client Agreement.",
            vi:"6.Khách hàng chấp nhận rằng TigerWit có quyền chấm dứt quyền truy cập của khách hàng vào các nền tảng giao dịch để đảm bảo và / hoặc khôi phục hoạt động có trật tự của các sàn giao dịch trong những trường hợp như vậy, theo quyết định của mình, đóng bất kỳ tài khoản giao dịch nào của khách hàng, theo đoạn 17.5 của Thỏa thuận khách hàng. ",
            "zh-Hant":"6.客戶接受，為確保和/或恢復交易平臺的有序運行，TigerWit 保留終止客戶訪問交易平臺的權利，在這種情況下 TigerWit可以根據客戶協議第 17.5 款酌情關閉客戶的任何交易賬戶。",
            id:"6.The client accepts that TigerWit reserves the right to terminate the client’s access to the trading platform(s) in order to ensure and/ or restore the orderly operation of the trading platform(s) under such circumstances TigerWit may,at its discretion, close any of the client’s trading account(s), according to paragraph 17.5 of the Client Agreement."
        },
        amtBusiness52:{
            zh:"7.客户接受，如果客户自愿和/或非自愿参与和市场无效性无关的套利，包括但不限于潜伏套利和掉期套利，TigerWit 保留立即终止客户 访 问 交 易 平 台 的 权 利 ； 在 这 种 情 况 下 ，TigerWit 随后可以其自由裁量权根据客户协议第17.5 款的规定，手动执行客户的即时订单和/或关闭客户的任何交易账户。",
            en:"7.The client accepts that TigerWit reserves the right to immediately terminate the client’s access to the trading platform(s) in the event that the client voluntarily and/ or involuntarily partakes in arbitrage unrelated to market inefficiencies, including but not limited to, latency arbitrage and swap arbitrage; under such circumstances TigerWit may, at its discretion, subsequently execute the client’s instant order(s) manually and/or close any of the client’s trading account(s), in accordance with paragraph 17.5 of the Client Agreement.",
            vi:"7.Khách hàng chấp nhận rằng TigerWit có quyền chấm dứt ngay lập tức quyền truy cập của khách hàng vào các nền tảng giao dịch trong trường hợp khách hàng tự nguyện và / hoặc tự nguyện tham gia vào hoạt động giao dịch chênh lệch giá không liên quan đến sự thiếu hiệu quả của thị trường, bao gồm nhưng không giới hạn và giao dịch kiếm lời chênh lệch do swap, và kiếm lời chênh lệch do trễ ; trong những trường hợp như vậy, theo quyết định của mình, sau đó có thể thực hiện các lệnh tức thì của khách hàng nào, theo đoạn 17.5 của Hợp Đồng Khách hàng. ",
            "zh-Hant":"7.客戶接受，如果客戶自願和/或非自願參與和市場無效性無關的套利，包括但不限於潛伏套利和掉期套利，TigerWit 保留立即終止客戶 訪 問 交 易 平 臺 的 權 利 ； 在 這 種 情 況 下 ，TigerWit 隨後可以其自由裁量權根據客戶協議第17.5 款的規定，手動執行客戶的即時訂單和/或關閉客戶的任何交易賬戶。",
            id:"7.The client accepts that TigerWit reserves the right to immediately terminate the client’s access to the trading platform(s) in the event that the client voluntarily and/ or involuntarily partakes in arbitrage unrelated to market inefficiencies, including but not limited to, latency arbitrage and swap arbitrage; under such circumstances TigerWit may, at its discretion, subsequently execute the client’s instant order(s) manually and/or close any of the client’s trading account(s), in accordance with paragraph 17.5 of the Client Agreement."
        },
        amtBusiness53:{
            zh:"8.此外，客户接受，如果公司自由裁量确定客户自愿和/或非自愿滥用“ TigerWit 所提供的负余额保护”，包括但不限于使用他/她的交易账户来对冲他/她的风险（无论是在同一个人档案下还是与另一个客户相关），TigerWit 保留立即终止客户访问交易平台并追回客户所造成任何损失的权利；和/或根据客户协议第 17.5 款的规定，在特定时间段内要求撤回资金（尽管存在服务协议的任何规定），在此期间他/她无法进行交易。",
            en:"8.In addition, the client accepts that TigerWit reserves the right to immediately terminate the client’s access to the trading platform(s) and recover any losses caused by the client, in the event that the Firm determines, at its sole discretion, that the client voluntarily and/or involuntarily abuses the ‘Negative Balance Protection’ offered by TigerWit, by way of, but not limited to, hedging his/her exposure using his/her trading accounts, whether under the same profile or in connection with another client(s); and/or requesting a withdrawal of funds, notwithstanding any of the provisions of the Service Agreement, during a specific timeframe when the symbol he/she is trading is not available, in accordance with paragraph 17.5 of the Client Agreement.",
            vi:"8.Ngoài ra, khách hàng chấp nhận rằng TigerWit có quyền chấm dứt ngay lập tức quyền truy cập của khách hàng vào các sàn giao dịch của khách hàng và thu hồi bất kỳ tổn thất nào do khách hàng gây ra, trong trường hợp Công ty quyết định rằng khách hàng tự nguyện và / hoặc vô tình lạm dụng “ Bảo vệ phòng ngừa số dư âm” do TigerWit cung cấp, bằng cách, nhưng không giới hạn, bảo hiểm rủi ro của họ bằng cách sử dụng tài khoản giao dịch của họ, cho dù dưới cùng một hồ sơ hoặc liên quan đến một khách hàng khác; và / hoặc yêu cầu rút tiền, bất kể bất kỳ điều khoản nào của Thỏa thuận dịch vụ, trong một khung thời gian cụ thể khi biểu tượng giao dịch không có sẵn, theo đoạn 17.5 của Hợp Đồng Khách hàng.",
            "zh-Hant":"8.此外，客戶接受，如果公司自由裁量確定客戶自願和/或非自願濫用“ TigerWit 所提供的負余額保護”，包括但不限於使用他/她的交易賬戶來對沖他/她的風險（無論是在同壹個人檔案下還是與另壹個客戶相關），TigerWit 保留立即終止客戶訪問交易平臺並追回客戶所造成任何損失的權利；和/或根據客戶協議第 17.5 款的規定，在特定時間段內要求撤回資金（盡管存在服務協議的任何規定），在此期間他/她無法進行交易。",
            id:"8.In addition, the client accepts that TigerWit reserves the right to immediately terminate the client’s access to the trading platform(s) and recover any losses caused by the client, in the event that the Firm determines, at its sole discretion, that the client voluntarily and/or involuntarily abuses the ‘Negative Balance Protection’ offered by TigerWit, by way of, but not limited to, hedging his/her exposure using his/her trading accounts, whether under the same profile or in connection with another client(s); and/or requesting a withdrawal of funds, notwithstanding any of the provisions of the Service Agreement, during a specific timeframe when the symbol he/she is trading is not available, in accordance with paragraph 17.5 of the Client Agreement."
        },
        amtBusiness54:{
            zh:"9.客户接受，如果在信息从客户发送至本公司（或本公司授权的任何其他方）或从本公司（或本公司授权的任何其他方）发送至客户的过程中，某人通过未经授权的访问获得了任何信息（包括客户交易的相关信息），TigerWit将不承担任何责任；这种传送可能以电子或其他方式发生。",
            en:"9.The client accepts that TigerWit bears no responsibility if a person attains through unauthorised access any information, including information regarding client’s trading, whilst such information is being transmitted from the client to the Firm (or any other party authorised by the Firm) and vice versa; such transmission may either occur through electronic or other means.",
            vi:"9.Khách hàng chấp nhận rằng TigerWit không chịu trách nhiệm nếu người đó truy cập trái phép mọi thông tin, bao gồm thông tin liên quan đến giao dịch của khách hàng, trong khi thông tin đó được truyền từ khách hàng đến Công ty (hoặc bất kỳ bên nào khác được Công ty ủy quyền) và phó ngược lại; việc truyền tải như vậy có thể xảy ra thông qua phương tiện điện tử hoặc phương tiện khác.",
            "zh-Hant":"9.客戶接受，如果在信息從客戶發送至本公司（或本公司授權的任何其他方）或從本公司（或本公司授權的任何其他方）發送至客戶的過程中，某人通過未經授權的訪問獲得了任何信息（包括客戶交易的相關信息），TigerWit將不承擔任何責任；這種傳送可能以電子或其他方式發生。",
            id:"9.The client accepts that TigerWit bears no responsibility if a person attains through unauthorised access any information, including information regarding client’s trading, whilst such information is being transmitted from the client to the Firm (or any other party authorised by the Firm) and vice versa; such transmission may either occur through electronic or other means."
        },
        amtBusiness55:{
            zh:"10.客户接受，对因以下原因导致客户无法访问交易平台而引起的任何损失（包括但不限于经济损失），本公司概不负责：(i) 由于客户未能根据要求更新软件或(ii) 由于客户或公司原本可能控制的任何其他机械、软件、计算机、电信或电子系统故障。",
            en:"10.The client accepts that the Firm bears no responsibility for any loss, including but not limited to financial loss, incurred by the client due to the inability of the latter to access the trading platform(s) if this has been caused: (i) due to the Client’s failure to maintain the Software updated as required or (ii) due to any other mechanical, software, computer, telecommunications or electronic system failure that could have been controlled by either the client or the Firm.",
            vi:"10.Khách hàng chấp nhận rằng Công ty không chịu trách nhiệm về bất kỳ tổn thất nào, bao gồm nhưng không giới hạn đối với tổn thất tài chính, do khách hàng phát sinh do không có khả năng tiếp cận (các) nền tảng giao dịch nếu điều này đã được gây ra: (i ) do Khách hàng không thể cập nhật Phần mềm theo yêu cầu hoặc (ii) do bất kỳ lỗi cơ khí, phần mềm, máy tính, viễn thông hoặc hệ thống điện tử nào khác có thể được kiểm soát bởi khách hàng hoặc Công ty.",
            "zh-Hant":"10.客戶接受，對因以下原因導致客戶無法訪問交易平臺而引起的任何損失（包括但不限於經濟損失），本公司概不負責：(i) 由於客戶未能根據要求更新軟件或(ii) 由於客戶或公司原本可能控制的任何其他機械、軟件、計算機、電信或電子系統故障。",
            id:"10.The client accepts that the Firm bears no responsibility for any loss, including but not limited to financial loss, incurred by the client due to the inability of the latter to access the trading platform(s) if this has been caused: (i) due to the Client’s failure to maintain the Software updated as required or (ii) due to any other mechanical, software, computer, telecommunications or electronic system failure that could have been controlled by either the client or the Firm."
        },
        amtBusiness56:{
            zh:"11.TigerWit 负责维护其交易平台和其他相关系统的更新；因此，客户接受，本公司或相关第三方可能会不时进行维护工作，其中可能包括关闭、重新启动或刷新服务器，以确保交易平台或其他相关系统能高效运行；这些行为可能导致在一段时间内无法访问交易平台或其他相关系统。客户接受，本公司对因本款中提及的任何行为而造成的任何损失（包括经济损失）概不负责。",
            en:"11.TigerWit is responsible for maintaining its trading platform(s) and other related systems updated; therefore, the client accepts that the Firm or a relevant third party may, from time to time, perform maintenance that may include shutting down, restarting, or refreshing the servers to ensure the effective and efficient operation of the trading platform(s) or other related systems; these actions may cause the trading platform(s) or other related systems to being inaccessible for a period of time. The client accepts that the Firm bears no responsibility for any loss, including financial loss, caused due to any of the actions referred to in this paragraph.",
            vi:"11.TigerWit chịu trách nhiệm duy trì (các) nền tảng giao dịch và các hệ thống liên quan khác được cập nhật; do đó, khách hàng chấp nhận rằng Công ty hoặc bên thứ ba có liên quan, có thể, bất cứ lúc nào, thực hiện bảo trì có thể bao gồm tắt, khởi động lại hoặc làm mới các máy chủ để đảm bảo hoạt động hiệu quả và hiệu quả của (các) nền tảng giao dịch hoặc khác các hệ thống liên quan; những hành động này có thể gây ra (các) nền tảng giao dịch hoặc các hệ thống liên quan khác không thể truy cập được trong một khoảng thời gian. Khách hàng chấp nhận rằng Công ty không chịu trách nhiệm về bất kỳ tổn thất nào, bao gồm cả mất mát tài chính, gây ra do bất kỳ hành động nào được đề cập trong đoạn này.",
            "zh-Hant":"11.TigerWit 負責維護其交易平臺和其他相關系統的更新；因此，客戶接受，本公司或相關第三方可能會不時進行維護工作，其中可能包括關閉、重新啟動或刷新服務器，以確保交易平臺或其他相關系統能高效運行；這些行為可能導致在壹段時間內無法訪問交易平臺或其他相關系統。客戶接受，本公司對因本款中提及的任何行為而造成的任何損失（包括經濟損失）概不負責。",
            id:"11.TigerWit is responsible for maintaining its trading platform(s) and other related systems updated; therefore, the client accepts that the Firm or a relevant third party may, from time to time, perform maintenance that may include shutting down, restarting, or refreshing the servers to ensure the effective and efficient operation of the trading platform(s) or other related systems; these actions may cause the trading platform(s) or other related systems to being inaccessible for a period of time. The client accepts that the Firm bears no responsibility for any loss, including financial loss, caused due to any of the actions referred to in this paragraph."
        },
        amtBusiness57:{
            zh:"12.客户接受，TigerWit 并不是互联网服务或电力供应商；因此客户承认，根据客户协议第 6.1 款，如果由于互联网服务或电力故障直接或间接导致TigerWit 无法提供投资或辅助服务，本公司概不负责。",
            en:"12.The client accepts that TigerWit is not an internet service or electricity provider; consequently, the former accepts that TigerWit is not responsible for any failure to provide an investment or ancillary service, under paragraph 6.1 of the Client Agreement, if such failure arises as a direct or an indirect result of an internet service or electricity failure.",
            vi:"12.Khách hàng chấp nhận rằng TigerWit không phải là người cung cấp dịch vụ internet và điện, do đó, khách hàng, TigerWit không chịu trách nhiệm cho bất kỳ sự thất bại nào trong việc cung cấp một khoản đầu tư hoặc dịch vụ phụ trợ, theo khoản 6.1 của Hợp đồng Khách hàng, nếu thất bại phát sinh như một kết quả trực tiếp hoặc gián tiếp của dịch vụ internet hoặc mất điện.",
            "zh-Hant":"12.客戶接受，TigerWit 並不是互聯網服務或電力供應商；因此客戶承認，根據客戶協議第 6.1 款，如果由於互聯網服務或電力故障直接或間接導致TigerWit 無法提供投資或輔助服務，本公司概不負責。",
            id:"12.The client accepts that TigerWit is not an internet service or electricity provider; consequently, the former accepts that TigerWit is not responsible for any failure to provide an investment or ancillary service, under paragraph 6.1 of the Client Agreement, if such failure arises as a direct or an indirect result of an internet service or electricity failure."
        },
        amtBusiness58:{
            zh:"13.如果由于任何原因，导致客户无法访问交易平台从而发送交易金融工具的指令，他/她可以通过电话联系交易部门提出口头指令 ，但须遵守客户协议“电话录音”部分所述的限制。应当注意的是，如果客户的身份或指令的明确性未满足交易部操作员的要求，本公司保留拒绝此类口头指令的权利；在这种情况下，TigerWit 保留要求客户通过其他方式发送指令的权利。客户接受，在交易流量过大的时候，通过电话方式联系交易部门的人员可能会有一些延迟，特别是当发布重要市场公告的时候。",
            en:"13.If for any reason the client is unable to access the trading platform(s) in order to send an instruction for the purposes of trading financial instruments he/she may contact the Dealing Department by telephone on to place a verbal instruction, subject to the restrictions referred to in the ‘Recordings of Telephone Calls’ section of the Client Agreement. It should be noted that the Firm reserves the right to reject such verbal instruction when the operator of the Dealing Department is not satisfied with the client’s identity or clarity of instructions; under such circumstances, TigerWit reserves the right to request from the client to transmit an instruction through another mean. The client accepts that at times of excessive transaction flow there might be some delay in connecting over the telephone with a member of the Dealing Department, especially when there are important market announcements.",
            vi:"13.Nếu vì lý do nào đó, khách hàng không thể truy cập (các) sàn giao dịch để gửi hướng dẫn cho mục đích giao dịch công cụ tài chính, họ có thể liên hệ với Phòng Xử lý qua điện thoại theo số để đặt hướng dẫn bằng lời nói, tùy thuộc vào các hạn chế được đề cập trong phần 'Bản ghi cuộc gọi điện thoại' của Hợp Đồng Khách Hàng. Cần lưu ý rằng Công ty bảo lưu quyền từ chối chỉ dẫn bằng lời nói đó khi người điều hành Bộ phận Xử lý không hài lòng với danh tính của khách hàng hoặc sự rõ ràng của các hướng dẫn; trong những trường hợp như vậy, TigerWit bảo lưu quyền yêu cầu từ khách hàng để truyền tải một hướng dẫn thông qua một phương tiện khác. Khách hàng chấp nhận rằng vào những thời điểm luồng giao dịch quá mức có thể có sự chậm trễ trong việc kết nối qua điện thoại với một thành viên của Phòng Xử lý, đặc biệt khi có thông báo thị trường quan trọng.",
            "zh-Hant":"13.如果由於任何原因，導致客戶無法訪問交易平臺從而發送交易金融工具的指令，他/她可以通過電話聯系交易部門提出口頭指令 ，但須遵守客戶協議“電話錄音”部分所述的限制。應當註意的是，如果客戶的身份或指令的明確性未滿足交易部操作員的要求，本公司保留拒絕此類口頭指令的權利；在這種情況下，TigerWit 保留要求客戶通過其他方式發送指令的權利。客戶接受，在交易流量過大的時候，通過電話方式聯系交易部門的人員可能會有壹些延遲，特別是當發布重要市場公告的時候。",
            id:"13.If for any reason the client is unable to access the trading platform(s) in order to send an instruction for the purposes of trading financial instruments he/she may contact the Dealing Department by telephone on to place a verbal instruction, subject to the restrictions referred to in the ‘Recordings of Telephone Calls’ section of the Client Agreement. It should be noted that the Firm reserves the right to reject such verbal instruction when the operator of the Dealing Department is not satisfied with the client’s identity or clarity of instructions; under such circumstances, TigerWit reserves the right to request from the client to transmit an instruction through another mean. The client accepts that at times of excessive transaction flow there might be some delay in connecting over the telephone with a member of the Dealing Department, especially when there are important market announcements."
        },
        amtBusiness59:{
            zh:"14.客户理解并同意，TigerWit 是唯一的交易对手方，对于产品和服务旨在协助为客户提供平台的任何第三方软件和/或技术提供商，客户不会提出任何（包括因疏忽、违约或其他相关问题）法律诉讼（无论是否侵权）。",
            en:"14.The Client understands and agrees that TigerWit is the sole counterparty and therefore the Client will not bring any legal action, whether in tort, including negligence, breach of contract or otherwise, to any third-party software and/or technology providers whose products and services assist in providing the platform to the Client.",
            vi:"14.Khách hàng hiểu và đồng ý rằng TigerWit là đối tác duy nhất và do đó Khách hàng sẽ không mang bất kỳ hành động pháp lý nào, cho dù bị tra tấn, bao gồm sơ suất, vi phạm hợp đồng hoặc cách khác, cho bất kỳ nhà cung cấp phần mềm và / hoặc công nghệ nào có sản phẩm và cách dịch vụ hỗ trợ trong việc cung cấp nền tảng cho khách hàng.",
            "zh-Hant":"14.客戶理解並同意，TigerWit 是唯壹的交易對手方，對於產品和服務旨在協助為客戶提供平臺的任何第三方軟件和/或技術提供商，客戶不會提出任何（包括因疏忽、違約或其他相關問題）法律訴訟（無論是否侵權）。",
            id:"14.The Client understands and agrees that TigerWit is the sole counterparty and therefore the Client will not bring any legal action, whether in tort, including negligence, breach of contract or otherwise, to any third-party software and/or technology providers whose products and services assist in providing the platform to the Client."
        },
        amtBusiness60:{
            zh:"指令和订单",
            en:"Instructions and Orders",
            vi:"Hướng dẫn và Các Lệnh",
            "zh-Hant":"指令和訂單",
            id:"Instructions and Orders"
        },
        amtBusiness61:{
            zh:"1.TigerWit 关于交易平台的指令和订单的条款，可以参考附件 I 中的条款和条件 。",
            en:"1.The terms of TigerWit's instructions and orders relating to the trading platforms can be found in Annex I to these terms and conditions.",
            vi:"1.Các điều khoản của các hướng dẫn và lệnh của TigerWit liên quan đến các sàn giao dịch có thể được tìm thấy trong Phụ lục I đối với các điều khoản và điều kiện này.",
            "zh-Hant":"1.TigerWit 關於交易平臺的指令和訂單的條款，可以參考附件 I 中的條款和條件 。",
            id:"1.The terms of TigerWit's instructions and orders relating to the trading platforms can be found in Annex I to these terms and conditions."
        },
        amtBusiness62:{
            zh:"2.重要提示：",
            en:"2.mportant Notice: ",
            vi:"2.Thông báo quan trọng: ",
            "zh-Hant":"2.重要提示：",
            id:"2.mportant Notice: "
        },
        amtBusiness63:{
            zh:"对于某些工具、平台和/或司法管辖区，可能适用特定的杠杆限制。了解更多详情，请访问我们的网站。",
            en:"Specific leverage limits may apply to certain instruments, platform(s) and/or jurisdictions available. For more information please visit our website",
            vi:"Giới hạn đòn bẩy cụ thể có thể áp dụng cho một số công cụ, nền tảng và / hoặc khu vực pháp lý nhất định. ",
            "zh-Hant":"對於某些工具、平臺和/或司法管轄區，可能適用特定的杠桿限制。了解更多詳情，請訪問我們的網站。",
            id:"Specific leverage limits may apply to certain instruments, platform(s) and/or jurisdictions available. For more information please visit our website"
        },
        amtBusiness64:{
            zh:"本公司会根据具体情况，自由裁量修改客户所有或部分交易的保证金要求，并在合理的情况下通知客户。",
            en:"The Firm may, in its sole discretion, amend the margin requirements, on a case by case basis, on all or any transaction(s) of the Client, by providing the Client, where reasonable, with notice.",
            vi:"Để biết thêm thông tin, vui lòng truy cập trang web của chúng tôi Công ty có thể, sửa đổi các yêu cầu ký quỹ, trên cơ sở từng trường hợp, trên tất cả hoặc bất kỳ (các) giao dịch nào của Khách hàng, bằng cách cung cấp cho Khách hàng, nơi hợp lý, với thông báo .",
            "zh-Hant":"本公司會根據具體情況，自由裁量修改客戶所有或部分交易的保證金要求，並在合理的情況下通知客戶。",
            id:"The Firm may, in its sole discretion, amend the margin requirements, on a case by case basis, on all or any transaction(s) of the Client, by providing the Client, where reasonable, with notice."
        },
        amtBusiness65:{
            zh:"客户确认可以在 http://global.tigerwit.com 上找到有关固定差价账户的所有信息以及任何后续更新。此外，客户确认随时了解有关此事项的任何后续更新和/或修订由客户全权负责。",
            en:"The Client acknowledges that all information as well as any subsequent updates relating to Fixed Spread Accounts shall be found online at http://global.tigerwit.com. Further the Client acknowledges that it is their sole responsibility to remain informed of any subsequent updates and/or amendments on this matter.",
            vi:"Khách hàng thừa nhận rằng tất cả thông tin cũng như mọi cập nhật tiếp theo liên quan đến Tài khoản Spread cố định sẽ được tìm thấy trực tuyến tại http://global.tigerwit.com. Hơn nữa Khách hàng thừa nhận rằng đó là trách nhiệm duy nhất của họ để được thông báo về bất kỳ cập nhật tiếp theo và / hoặc sửa đổi về vấn đề này.",
            "zh-Hant":"客戶確認可以在 http://global.tigerwit.com 上找到有關固定差價賬戶的所有信息以及任何後續更新。此外，客戶確認隨時了解有關此事項的任何後續更新和/或修訂由客戶全權負責。",
            id:"The Client acknowledges that all information as well as any subsequent updates relating to Fixed Spread Accounts shall be found online at http://global.tigerwit.com. Further the Client acknowledges that it is their sole responsibility to remain informed of any subsequent updates and/or amendments on this matter."
        },
        amtBusiness66:{
            zh:"拒绝执行订单",
            en:"Refusal to Execute Orders",
            vi:"Từ chối Thực Thi Lệnh",
            "zh-Hant":"拒絕執行訂單",
            id:"Refusal to Execute Orders"
        },
        amtBusiness67:{
            zh:"1.客户接受，TigerWit 有权在不通知客户的前提下，随时拒绝提供任何投资或附属服务，包括但不限于执行交易金融工具的指令。",
            en:"1.The client accepts that TigerWit shall have the right, at any time, to refuse at its discretion the provision of any investment or ancillary service, including but not limited to the execution of instructions for the purposes of trading financial instruments, without providing notice to the client.",
            vi:"1.Khách hàng chấp nhận rằng TigerWit sẽ có quyền, bất cứ lúc nào, từ chối theo quyết định của mình đối với bất kỳ khoản đầu tư hoặc dịch vụ phụ trợ nào, bao gồm nhưng không giới hạn việc thực hiện các hướng dẫn cho mục đích giao dịch công cụ tài chính cho khách hàng.",
            "zh-Hant":"1.客戶接受，TigerWit 有權在不通知客戶的前提下，隨時拒絕提供任何投資或附屬服務，包括但不限於執行交易金融工具的指令。",
            id:"1.The client accepts that TigerWit shall have the right, at any time, to refuse at its discretion the provision of any investment or ancillary service, including but not limited to the execution of instructions for the purposes of trading financial instruments, without providing notice to the client."
        },
        amtBusiness68:{
            zh:"2.在某些情况下，上文第 7.1 款可能生效，包括但不限于以下情况：",
            en:"2.Paragraph 7.1, above, may come into force under certain circumstances, including but not limited to situations when: ",
            vi:"2.Đoạn 7.1, ở trên, có thể có hiệu lực trong một số trường hợp nhất định, bao gồm nhưng không giới hạn ỏ các tình huống khi:",
            "zh-Hant":"2.在某些情況下，上文第 7.1 款可能生效，包括但不限於以下情況：",
            id:"2.Paragraph 7.1, above, may come into force under certain circumstances, including but not limited to situations when: "
        },
        amtBusiness69:{
            zh:"3.TigerWit 有合理理由相信执行客户订单可能会：",
            en:"3.TigerWit has reasonable grounds to believe that the execution of a client’s order may: ",
            vi:"3.TigerWit có cơ sở hợp lý để tin rằng việc thực hiện lệnh của khách hàng có thể: ",
            "zh-Hant":"3.TigerWit 有合理理由相信執行客戶訂單可能會：",
            id:"3.TigerWit has reasonable grounds to believe that the execution of a client’s order may: "
        },
        amtBusiness70:{
            zh:"i. 影响市场的有序功能；",
            en:"i. affect the orderly function of the market;",
            vi:"i. ảnh hưởng đến chức năng có trật tự của thị trường;",
            "zh-Hant":"i. 影響市場的有序功能；",
            id:"i. affect the orderly function of the market;"
        },
        amtBusiness71:{
            zh:"ii. 构成对专属机密信息的滥用；",
            en:"ii. constitutes an abusive exploitation of privileged confidential information;",
            vi:"ii. cấu thành việc lạm dụng thông tin bí mật có đặc quyền lạm dụng;",
            "zh-Hant":"ii. 構成對專屬機密信息的濫用；",
            id:"ii. constitutes an abusive exploitation of privileged confidential information;"
        },
        amtBusiness72:{
            zh:"iii. 有助于非法资金的洗钱；",
            en:"iii. contributes to the laundering of illegal funds;",
            vi:"iii. góp phần vào việc rửa tiền bất hợp pháp;",
            "zh-Hant":"iii. 有助於非法資金的洗錢；",
            id:"iii. contributes to the laundering of illegal funds;"
        },
        amtBusiness73:{
            zh:"iv. 以任何方式影响交易平台的可靠性或有序运行；以及，",
            en:"iv. affects in any manner the reliability or orderly operation of the trading platform(s); and,",
            vi:"iv. ảnh hưởng đến bất kỳ cách nào hoạt động tin cậy hoặc có trật tự của (các) sàn giao dịch; và,",
            "zh-Hant":"iv. 以任何方式影響交易平臺的可靠性或有序運行；以及，",
            id:"iv. affects in any manner the reliability or orderly operation of the trading platform(s); and,"
        },
        amtBusiness74:{
            zh:"v. 客户的订单涉及购买金融工具，但相关交易账户的自由保证金不足以支付此类购买行为和任何适当的费用。",
            en:"v. the client’s order relates to the purchase of a financial instrument but there is insufficient free margin in the relevant trading account to cover such purchase and any applicable charges.",
            vi:"v. Lệnh của khách hàng liên quan đến việc mua một công cụ tài chính nhưng không có đủ số dư miễn phí trong tài khoản giao dịch liên quan để chi trả cho việc mua hàng đó và mọi khoản phí áp dụng.",
            "zh-Hant":"v. 客戶的訂單涉及購買金融工具，但相關交易賬戶的自由保證金不足以支付此類購買行為和任何適當的費用。",
            id:"v. the client’s order relates to the purchase of a financial instrument but there is insufficient free margin in the relevant trading account to cover such purchase and any applicable charges."
        },
        amtBusiness75:{
            zh:"4.如果发生技术或其他错误，TigerWit 保留拒绝执行挂单和/或修改订单开仓/平仓价的权利。",
            en:"4.TigerWit reserves the right to refuse the execution of a pending order and/or modify the opening/closing price of an order if a technical or other error occurs.",
            vi:"4.TigerWit bảo lưu quyền từ chối thực hiện lệnh chờ và / hoặc sửa đổi giá mở / đóng của lệnh nếu xảy ra lỗi kỹ thuât hoặc lỗi khác.",
            "zh-Hant":"4.如果發生技術或其他錯誤，TigerWit 保留拒絕執行掛單和/或修改訂單開倉/平倉價的權利。",
            id:"4.TigerWit reserves the right to refuse the execution of a pending order and/or modify the opening/closing price of an order if a technical or other error occurs."
        },
        amtBusiness76:{
            zh:"5.客户接受，如果触发了上述第 5.11 款所述的条件，本公司可能拒绝执行交易金融工具的指令。",
            en:"5.The client accepts that the Firm may refuse to execute an instruction for trading financial instruments, if conditions described in paragraph 5.11, above, are triggered.",
            vi:"5.Khách hàng chấp nhận rằng Công ty có thể từ chối thực hiện một lệnh để giao dịch các công cụ tài chính, nếu các điều khiệ được mô tả trong đoạn 5.11 ở trên, được kích hoạt. ",
            "zh-Hant":"5.客戶接受，如果觸發了上述第 5.11 款所述的條件，本公司可能拒絕執行交易金融工具的指令。",
            id:"5.The client accepts that the Firm may refuse to execute an instruction for trading financial instruments, if conditions described in paragraph 5.11, above, are triggered."
        },
        amtBusiness77:{
            zh:"6.客户接受，根据“拒绝执行订单”小节，如果 TigerWit 拒绝执行客户的订单，将不会影响客户协议中约定的客户义务。",
            en:"6.The client accepts that if TigerWit were to refuse the execution of a client’s order, under the ‘Refusal to Execute Orders’ section, the obligations of the client under the Client Agreement shall remain unaffected.",
            vi:"6.Khách hàng chấp nhận rằng nếu TigerWit từ chối thực hiện lệnh của khách hàng, trong phần “Từ chối thực hiện lệnh”, nghĩa vụ của khách hàng theo Hợp đồng khách hàng sẽ không bị ảnh hưởng.",
            "zh-Hant":"6.客戶接受，根據“拒絕執行訂單”小節，如果 TigerWit 拒絕執行客戶的訂單，將不會影響客戶協議中約定的客戶義務。",
            id:"6.The client accepts that if TigerWit were to refuse the execution of a client’s order, under the ‘Refusal to Execute Orders’ section, the obligations of the client under the Client Agreement shall remain unaffected."
        },
        amtBusiness78:{
            zh:"公司行为",
            en:"Corporate Actions",
            vi:"Động thái của công ty",
            "zh-Hant":"公司行為",
            id:"Corporate Actions"
        },
        amtBusiness79:{
            zh:"1.如 果 发 生 公 司 行 为 ， 客 户 接 受 ，TigerWit 保留对交易的价格和/或规模和/或任何相关交易的数量进行适当调整的权利；任何此类调整的目的是在发生公司行为之前保留客户和本公司的平等权利和义务。应当注意的是，这些调整对客户具有决定性和约束力；本公司将在合理可行的情况下尽快通知客户。",
            en:"1.If a corporate action materialises, the client accepts that TigerWit reserves the right to make appropriate adjustments to the value and/ or the size of a transaction and/ or number of any related transactions; any such adjustment aims in preserving the economic equivalent of the rights and obligations of both the client and the Firm immediately prior to a corporate action. It should be noted that these adjustments are conclusive and binding upon the client; the client will be informed accordingly by the Firm as soon as reasonably practicable.",
            vi:"1.Nếu động thái của công ty trở thành hiện thực, khách hàng chấp nhận rằng TigerWit có quyền thực hiện các điều chỉnh phù hợp với giá trị và / hoặc kích thước của giao dịch và / hoặc số lượng giao dịch có liên quan; bất kỳ điều chỉnh nào như vậy nhằm mục đích duy trì sự tương đương về kinh tế của các quyền và nghĩa vụ của cả khách hàng và Công ty ngay trước hành động của công ty. Cần lưu ý rằng những điều chỉnh này là kết luận và ràng buộc đối với khách hàng; khách hàng sẽ được Công ty thông báo ngay khi có thể thực hiện được một cách hợp lý.",
            "zh-Hant":"1.如 果 發 生 公 司 行 為 ， 客 戶 接 受 ，TigerWit 保留對交易的價格和/或規模和/或任何相關交易的數量進行適當調整的權利；任何此類調整的目的是在發生公司行為之前保留客戶和本公司的平等權利和義務。應當註意的是，這些調整對客戶具有決定性和約束力；本公司將在合理可行的情況下盡快通知客戶。",
            id:"1.If a corporate action materialises, the client accepts that TigerWit reserves the right to make appropriate adjustments to the value and/ or the size of a transaction and/ or number of any related transactions; any such adjustment aims in preserving the economic equivalent of the rights and obligations of both the client and the Firm immediately prior to a corporate action. It should be noted that these adjustments are conclusive and binding upon the client; the client will be informed accordingly by the Firm as soon as reasonably practicable."
        },
        amtBusiness80:{
            zh:"2.如 果 发 生 公 司 行 为 ， 客 户 接 受 ，TigerWit 应采取一切合理的步骤来复制市场条件。如果 TigerWit 自由裁量确定其无法公正地评估公司行为，本公司将保留关闭客户头寸的权利。",
            en:"2.If a corporate action materialises, the client accepts that TigerWit shall take all reasonable steps to replicate the market conditions. If TigerWit, in its sole discretion, warrants it is unable to fairly value a corporate action, the Firm shall reserve the right to close a client’s position.",
            vi:"2.Nếu hành động của công ty trở thành hiện thực, khách hàng chấp nhận rằng TigerWit sẽ thực hiện tất cả các bước hợp lý để nhân rộng các điều kiện thị trường. Nếu TigerWit, theo quyết định riêng của mình, đảm bảo rằng nó không thể đánh giá cao một hành động của công ty, Công ty sẽ bảo lưu quyền đóng vị thế của khách hàng.",
            "zh-Hant":"2.如 果 發 生 公 司 行 為 ， 客 戶 接 受 ，TigerWit 應采取壹切合理的步驟來復制市場條件。如果 TigerWit 自由裁量確定其無法公正地評估公司行為，本公司將保留關閉客戶頭寸的權利。",
            id:"2.If a corporate action materialises, the client accepts that TigerWit shall take all reasonable steps to replicate the market conditions. If TigerWit, in its sole discretion, warrants it is unable to fairly value a corporate action, the Firm shall reserve the right to close a client’s position."
        },
        amtBusiness81:{
            zh:"3.股利：在发放股票股利之前，TigerWit 将保留增加相关产品保证金水平的权利。客户应继续负责定期查询合同规范了解任何此类更改，相关内容请参见 http://global.tigerwit.com。",
            en:"3.Dividends: Prior to the release of a dividend for a share, TigerWit shall reserve the right to increase the Margin levels of the relevant symbol. The client shall remain responsible to regularly consult the contract specifications for any such changes, available at http://global.tigerwit.com",
            vi:"3.Chia cổ tức: Trước khi phát hành cổ tức cho một cổ phần, TigerWit sẽ bảo lưu quyền tăng mức ký quỹ của sản phẩm có liên quan. Khách hàng sẽ chịu trách nhiệm thường xuyên tham khảo các thông số hợp đồng cho bất kỳ thay đổi nào như vậy, có sẵn tại http://global.tigerwit.com",
            "zh-Hant":"3.股利：在發放股票股利之前，TigerWit 將保留增加相關產品保證金水平的權利。客戶應繼續負責定期查詢合同規範了解任何此類更改，相關內容請參見 http://global.tigerwit.com。",
            id:"3.Dividends: Prior to the release of a dividend for a share, TigerWit shall reserve the right to increase the Margin levels of the relevant symbol. The client shall remain responsible to regularly consult the contract specifications for any such changes, available at http://global.tigerwit.com"
        },
        amtBusiness82:{
            zh:"4.多头：在派息日前持有多头头寸的客户将以现金调整的形式收到适当的股利，记入相关交易账户。",
            en:"4.Long positions: A client holding a long position on the ex-div date will receive the applicable dividend in the form of a cash adjustment, credited to the relevant trading account.",
            vi:"4. Lệnh mua: Một khách hàng nắm giữ một vị thế mua vào ngày giao dịch cũ sẽ nhận cổ tức áp dụng dưới hình thức điều chỉnh tiền mặt, được ghi có vào tài khoản giao dịch có liên quan.",
            "zh-Hant":"4.多頭：在派息日前持有多頭頭寸的客戶將以現金調整的形式收到適當的股利，記入相關交易賬戶。",
            id:"4.Long positions: A client holding a long position on the ex-div date will receive the applicable dividend in the form of a cash adjustment, credited to the relevant trading account."
        },
        amtBusiness83:{
            zh:"5.空头：在派息日前持有空头头寸的客户将以现金调整的形式被扣除适当的股利，并从相关交易账户的自由账户净值划出。",
            en:"5.Short Positions: A client holding a short position on the ex-div date will be charged the applicable dividend in the form of a reverse cash adjustment, debited from the relevant trading account’s free equity.",
            vi:"5. Lệnh bán: Một khách hàng đang nắm giữ một vị thế bán vào ngày đến hạn chia cổ tức sẽ được tính cổ tức hiện hành dưới dạng điều chỉnh tiền mặt ngược, được ghi nợ từ vốn tự do của tài khoản giao dịch có liên quan.",
            "zh-Hant":"5.空頭：在派息日前持有空頭頭寸的客戶將以現金調整的形式被扣除適當的股利，並從相關交易賬戶的自由賬戶凈值劃出。",
            id:"5.Short Positions: A client holding a short position on the ex-div date will be charged the applicable dividend in the form of a reverse cash adjustment, debited from the relevant trading account’s free equity."
        },
        amtBusiness84:{
            zh:"6.如果客户在派息日前保持空头头寸，并且其交易账户中的自由账户净值不足以支付反向现金调整，TigerWit 保留对未平仓头寸进行平仓的权利。在这种情况下，应从交易账户余额中扣除相应的反向现金调整。",
            en:"6.In the event a client maintains a short position on the ex-div date and has insufficient free equity in their trading account to cover the reverse cash adjustment, TigerWit reserves the right to close the open position. Under such circumstances, the reverse cash adjustment shall be deducted from the trading account’s balance.",
            vi:"6. Trong trường hợp khách hàng duy trì một vị thế bán vào ngày đến hạn chia cổ tức và không có đủ vốn tự do trong tài khoản giao dịch của họ để trang trải điều chỉnh tiền mặt ngược lại, TigerWit có quyền đóng vị thế mở. Trong những trường hợp như vậy, điều chỉnh tiền mặt ngược sẽ được khấu trừ từ số dư của tài khoản giao dịch.",
            "zh-Hant":"6.如果客戶在派息日前保持空頭頭寸，並且其交易賬戶中的自由賬戶凈值不足以支付反向現金調整，TigerWit 保留對未平倉頭寸進行平倉的權利。在這種情況下，應從交易賬戶余額中扣除相應的反向現金調整。",
            id:"6.In the event a client maintains a short position on the ex-div date and has insufficient free equity in their trading account to cover the reverse cash adjustment, TigerWit reserves the right to close the open position. Under such circumstances, the reverse cash adjustment shall be deducted from the trading account’s balance."
        },
        amtBusiness85:{
            zh:"7.客户接受，如果在交易账户中没有保持足够的自由账户净值来覆盖空头头寸的反向现金调整，TigerWit 有权无需通知客户。",
            en:"7.The client accepts TigerWit retains no requirements to notify a client in the event a trading account maintains insufficient free equity to cover a reverse cash adjustment for a short position.",
            vi:"7. Khách hàng chấp nhận TigerWit không có yêu cầu phải thông báo cho khách hàng trong trường hợp tài khoản giao dịch duy trì không đủ vốn tự do để bù đắp điều chỉnh tiền măt cho lệnh bán.",
            "zh-Hant":"7.客戶接受，如果在交易賬戶中沒有保持足夠的自由賬戶凈值來覆蓋空頭頭寸的反向現金調整，TigerWit 有權無需通知客戶。",
            id:"7.The client accepts TigerWit retains no requirements to notify a client in the event a trading account maintains insufficient free equity to cover a reverse cash adjustment for a short position."
        },
        amtBusiness86:{
            zh:"8.股票分拆：在出现股票分拆的情况下，对客户头寸所进行的适当调整应反映在交易账户上，以便与所公布的股票分拆相符。",
            en:"8.Stock Splits: In the event of a stock-split, the appropriate adjustment on the client’s position shall be reflected on the trading account in accordance with the announced stock split.",
            vi:"8. Chia tách cổ phiếu: Trong trường hợp chia cổ phiếu, điều chỉnh thích hợp về vị thế của khách hàng sẽ được phản ánh trên tài khoản giao dịch theo phân chia cổ phiếu đã công bố.",
            "zh-Hant":"8.股票分拆：在出現股票分拆的情況下，對客戶頭寸所進行的適當調整應反映在交易賬戶上，以便與所公布的股票分拆相符。",
            id:"8.Stock Splits: In the event of a stock-split, the appropriate adjustment on the client’s position shall be reflected on the trading account in accordance with the announced stock split."
        },
        amtBusiness87:{
            zh:"9.配股：如果出现配股的情况，客户应接受以下两种选择中的一种；",
            en:"9.Rights Issue: In the event of a rights issue, the client shall receive the option to either;",
            vi:"9.Phát hành quyền mua cổ phiếu: Trong trường hợp có vấn đề về quyền, khách hàng sẽ nhận được tùy chọn này;",
            "zh-Hant":"9.配股：如果出現配股的情況，客戶應接受以下兩種選擇中的壹種；",
            id:"9.Rights Issue: In the event of a rights issue, the client shall receive the option to either;"
        },
        amtBusiness88:{
            zh:"a. 或者行使期权；或者",
            en:"a. exercise the rights option; or",
            vi:"a. thực hiện quyền lựa chọn; hoặc là",
            "zh-Hant":"a. 或者行使期權；或者",
            id:"a. exercise the rights option; or"
        },
        amtBusiness89:{
            zh:"b. 持有权利直至到期，不行使期权。",
            en:"b. hold the rights until maturity and not exercise the option.",
            vi:"b. giữ quyền cho đến khi hết hạn và không thực hiện tùy chọn.",
            "zh-Hant":"b. 持有權利直至到期，不行使期權。",
            id:"b. hold the rights until maturity and not exercise the option."
        },
        amtBusiness90:{
            zh:"10.碎股的股份调整",
            en:"10.Fractional Share Adjustments",
            vi:"10. Điều chỉnh cổ phiếu lẻ.",
            "zh-Hant":"10.碎股的股份調整",
            id:"10.Fractional Share Adjustments"
        },
        amtBusiness91:{
            zh:"如果公司行为导致出现碎股的头寸，TigerWit 有权自由裁量决定将未偿付的碎股部分作为现金调整记入客户的交易账户；该调整将执行除息日前最后交易日的收盘价。",
            en:"In the event a corporate action results in a fractional position, TigerWit reserves the right at its own discretion to credit the outstanding fractional component as a cash adjustment to be credited to the client’s trading account; the adjustment will be subject to the closing price on the last trading day prior to the ex-date.",
            vi:"Trong trường hợp kết quả hành động của công ty ở một vị thế lẻ, TigerWit có toàn quyền quyết định ghi có thành phần lẻ chưa thanh toán như một điều chỉnh tiền mặt được ghi có vào tài khoản giao dịch của khách hàng; việc điều chỉnh sẽ phải chịu giá đóng cửa vào ngày giao dịch cuối cùng trước ngày cũ.",
            "zh-Hant":"如果公司行為導致出現碎股的頭寸，TigerWit 有權自由裁量決定將未償付的碎股部分作為現金調整記入客戶的交易賬戶；該調整將執行除息日前最後交易日的收盤價。",
            id:"In the event a corporate action results in a fractional position, TigerWit reserves the right at its own discretion to credit the outstanding fractional component as a cash adjustment to be credited to the client’s trading account; the adjustment will be subject to the closing price on the last trading day prior to the ex-date."
        },
        amtBusiness92:{
            zh:"11.其他公司行为",
            en:"11.Other Corporate Actions",
            vi:"11.Các động thái khác của công ty.",
            "zh-Hant":"11.其他公司行為",
            id:"11.Other Corporate Actions"
        },
        amtBusiness93:{
            zh:"如果股票退市，将以最后交易的市场价格关闭客户的头寸。",
            en:"In the event of a share being de-listed, the client’s position will be closed at the last market price traded.",
            vi:"Trong trường hợp một cổ phiếu bị hủy niêm yết, vị thế của khách hàng sẽ bị đóng tại mức giá thị trường cuối cùng được giao dịch.",
            "zh-Hant":"如果股票退市，將以最後交易的市場價格關閉客戶的頭寸。",
            id:"In the event of a share being de-listed, the client’s position will be closed at the last market price traded."
        },
        amtBusiness94:{
            zh:"如果发生合并和收购（“并购”）、清偿、分拆或合并，导致股票以新名称进行交易，将以最后交易的市场价格关闭客户的头寸。",
            en:"In the event of a merger and acquisition (‘M&A’), tender, spin-off or merger resulting in the share trading under a new name, the client’s position will be closed at the last marker price traded.",
            vi:"Trong trường hợp sáp nhập và mua lại ('M & A'), đấu thầu, chuyển đổi hoặc sáp nhập dẫn đến giao dịch cổ phiếu dưới tên mới, vị thế của khách hàng sẽ bị đóng tại giá đánh dấu cuối cùng được giao dịch.",
            "zh-Hant":"如果發生合並和收購（“並購”）、清償、分拆或合並，導致股票以新名稱進行交易，將以最後交易的市場價格關閉客戶的頭寸。",
            id:"In the event of a merger and acquisition (‘M&A’), tender, spin-off or merger resulting in the share trading under a new name, the client’s position will be closed at the last marker price traded."
        },
        amtBusiness95:{
            zh:"TigerWit 不负责通知客户相关公司行为。",
            en:"TigerWit bears no responsibility for notifying the client regarding announcements of corporate actions.",
            vi:"TigerWit không chịu trách nhiệm thông báo cho khách hàng về các thông báo về hành động của công ty.",
            "zh-Hant":"TigerWit 不負責通知客戶相關公司行為。",
            id:"TigerWit bears no responsibility for notifying the client regarding announcements of corporate actions."
        },
        amtBusiness96:{
            zh:"投诉处理程序",
            en:"Complaints Handling Procedure",
            vi:"Thủ tục xử lý khiếu nại.",
            "zh-Hant":"投訴處理程序",
            id:"Complaints Handling Procedure"
        },
        amtBusiness97:{
            zh:"1.应首先向客户支持部门提交投诉。如果客户收到客服部门的回复，但认为需要进一步提出投诉，客户可以联系合规管理部门，详情请参阅本条款和条件第 12节。客服部门和合规管理部门应根据需要彻底检查所有投诉，同时考虑到本公司簿册和记录中包含的任何信息，包括但不限于客户的交易账户分类账。",
            en:"1.Complaints shall be addressed, in the first instance, to the Customer Support Department. If the client receives a response from the Customer Support Department but deems that the complaint needs to be raised further the client may contact the Compliance Department, details of which can be found on Section 12 of these Terms and Conditions. Both the Customer Support Department and the Compliance Department shall thoroughly examine any complaints as required, taking into account any information contained within the books and records of the Firm, including but not limited to the client’s trading account journal.",
            vi:"1. Khiếu nại sẽ được giải quyết, trong trường hợp đầu tiên, đến Bộ Phận Hỗ Trợ Khách Hàng. Nếu khách hàng nhận được phản hồi từ Bộ phận hỗ trợ Khách hàng nhưng cho rằng khiếu nại cần phải được nâng cao hơn, khách hàng có thể liên hệ với Phòng Tuân thủ, chi tiết có thể được tìm thấy trong mục 12 của các Điều khoản và Điều kiện này. Cả bộ phận hỗ trợ khách hàng và phòng Tuân thủ sẽ kiểm tra kỹ mọi khiếu nại theo yêu cầu, có tính đến bất kỳ thông tin nào có trong sách và hồ sơ của Công ty, bao gồm nhưng không giới hạn trong tạp chí tài khoản giao dịch của khách hàng.",
            "zh-Hant":"1.應首先向客戶支持部門提交投訴。如果客戶收到客服部門的回復，但認為需要進壹步提出投訴，客戶可以聯系合規管理部門，詳情請參閱本條款和條件第 12節。客服部門和合規管理部門應根據需要徹底檢查所有投訴，同時考慮到本公司簿冊和記錄中包含的任何信息，包括但不限於客戶的交易賬戶分類賬。",
            id:"1.Complaints shall be addressed, in the first instance, to the Customer Support Department. If the client receives a response from the Customer Support Department but deems that the complaint needs to be raised further the client may contact the Compliance Department, details of which can be found on Section 12 of these Terms and Conditions. Both the Customer Support Department and the Compliance Department shall thoroughly examine any complaints as required, taking into account any information contained within the books and records of the Firm, including but not limited to the client’s trading account journal."
        },
        amtBusiness98:{
            zh:"2.投诉应包括以下内容：",
            en:"2.A complaint shall include: ",
            vi:"2. Khiếu nại sẽ bao gồm:",
            "zh-Hant":"2.投訴應包括以下內容：",
            id:"2.A complaint shall include: "
        },
        amtBusiness99:{
            zh:"客户的名字和姓氏；客户的交易账号；受影响的交易订单号（如果适用）；问题出现的日期和时间；和问题描述。",
            en:"the client’s name and surname; the client’s trading account number; the affected transaction numbers, if applicable; the date and time that the issue arose; and a description of the issue.",
            vi:"Tên và họ của khách hàng; số tài khoản giao dịch của khách hàng; số giao dịch bị ảnh hưởng, nếu có; ngày và giờ mà vấn đề nảy sinh; và mô tả vấn đề.",
            "zh-Hant":"客戶的名字和姓氏；客戶的交易賬號；受影響的交易訂單號（如果適用）；問題出現的日期和時間；和問題描述。",
            id:"the client’s name and surname; the client’s trading account number; the affected transaction numbers, if applicable; the date and time that the issue arose; and a description of the issue."
        },
        amtBusiness100:{
            zh:"3.投诉不得包括以下内容：",
            en:"3.A complaint must not include: ",
            vi:"3. Khiếu nại không được bao gồm:",
            "zh-Hant":"3.投訴不得包括以下內容：",
            id:"3.A complaint must not include: "
        },
        amtBusiness101:{
            zh:"针对 TigerWit 或 TigerWit 员工的攻击性语言。",
            en:"offensive language directed either to TigerWit or an TigerWit employee.",
            vi:"ngôn ngữ xúc phạm hướng đến TigerWit hoặc nhân viên TigerWit.",
            "zh-Hant":"針對 TigerWit 或 TigerWit 員工的攻擊性語言。",
            id:"offensive language directed either to TigerWit or an TigerWit employee."
        },
        amtBusiness102:{
            zh:"其他",
            en:"Miscellaneous",
            vi:"Phụ lục.",
            "zh-Hant":"其他",
            id:"Miscellaneous"
        },
        amtBusiness103:{
            zh:"1.客户接受本公司所执行的所有订单均具有决定性和约束力。从执行订单开始，客户有两 (2) 个工作日的时间就(i) 价格，(ii) 成本，(iii) 速度和 (iv) 方法提出争议；此类争议需要以书面形式传达给本公司。",
            en:"1.The client accepts that all orders executed by the Firm shall be conclusive and binding. The client has 2 (two) business days, from the execution of an order, to dispute the execution (i) price, (ii) cost, (iii) speed, and (iv) method; such dispute needs to be communicated to the Firm in writing.",
            vi:"1. Khách hàng chấp nhận rằng tất cả các lệnh được thực hiện bởi Công ty sẽ là kết luận rang buộc. Khách hàng có 2 ngày làm việc, kể từ khi thực hiện lệnh, để tranh chấp về giá thực hiện (i), (ii) chi phí, (iii) tốc độ, và (iv) phương pháp; tranh chấp như vậy cần phải được thông báo cho Công ty bằng văn bản. ",
            "zh-Hant":"1.客戶接受本公司所執行的所有訂單均具有決定性和約束力。從執行訂單開始，客戶有兩 (2) 個工作日的時間就(i) 價格，(ii) 成本，(iii) 速度和 (iv) 方法提出爭議；此類爭議需要以書面形式傳達給本公司。",
            id:"1.The client accepts that all orders executed by the Firm shall be conclusive and binding. The client has 2 (two) business days, from the execution of an order, to dispute the execution (i) price, (ii) cost, (iii) speed, and (iv) method; such dispute needs to be communicated to the Firm in writing."
        },
        amtBusiness104:{
            zh:"2.除非另有特别约定，客户接受，对于通过客户交易账户交易的金融工具，本公司没有义务提供电子形式或其他形式的确认。",
            en:"2.Unless specifically agreed otherwise, the client accepts that the Firm is under no obligation to provide electronic, or other, confirmation in relation to financial instruments traded through the client’s trading account.",
            vi:"2. Trừ khi có sự đồng ý cụ thể nào khác, khách hàng chấp nhận rằng Công ty không có nghĩa vụ cung cấp điện toán hoặc xác nhận khác liên quan đến các công cụ tài chính được giao dịch thông qua tài khoản giao dịch của khách hàng.",
            "zh-Hant":"2.除非另有特別約定，客戶接受，對於通過客戶交易賬戶交易的金融工具，本公司沒有義務提供電子形式或其他形式的確認。",
            id:"2.Unless specifically agreed otherwise, the client accepts that the Firm is under no obligation to provide electronic, or other, confirmation in relation to financial instruments traded through the client’s trading account."
        },
        amtBusiness105:{
            zh:"3.除非另有特别约定，客户接受，对于通过客户交易账户交易的金融工具，本公司没有义务提供对账单。客户可以随时通过交易平台查看他/她的交易账户的当前和历史状态。",
            en:"3.Unless specifically agreed otherwise, the client accepts that TigerWit shall provide no statements of accounts in relation to financial instruments traded through the client’s trading account. The client may, at any time, review the current and historic state of his/her trading account via the trading platform(s).",
            vi:"3. Trừ trường hợp có sự đồng ý cụ thể nào khác, khách hàng chấp nhận rằng TigerWit sẽ không cung cấp báo cáo tài khoản liên quan đến các công cụ tài chính được giao dịch thông qua tài khoản giao dịch của khách hàng. Khách hàng có thể, bất cứ lúc nào, xem xét trạng thái hiện tại và lịch sử của tài khoản giao dịch của mình thông qua các sàn giao dịch. ",
            "zh-Hant":"3.除非另有特別約定，客戶接受，對於通過客戶交易賬戶交易的金融工具，本公司沒有義務提供對賬單。客戶可以隨時通過交易平臺查看他/她的交易賬戶的當前和歷史狀態。",
            id:"3.Unless specifically agreed otherwise, the client accepts that TigerWit shall provide no statements of accounts in relation to financial instruments traded through the client’s trading account. The client may, at any time, review the current and historic state of his/her trading account via the trading platform(s)."
        },
        amtBusiness106:{
            zh:"4.客户应定期查询交易平台的“帮助”菜单 或 “ 用 户 指 南 ” ； 如 果 发 生 冲 突 ， 除 非TigerWit 自由裁量做出决定，否则将以服务协议为准。",
            en:"4.The client shall regularly consult the ‘Help’ menu or User Guide of the trading platform(s); if a conflict arises the Service Agreement shall prevail unless TigerWit determines, in its sole discretion, otherwise.",
            vi:"4. Khách hàng sẽ thường xuyên tham khảo mục “Trợ Giúp” hoặc Hướng dẫn sử dụng các nền tảng giao dịch; nếu xung đột phát sinh Thỏa thuận dịch vụ sẽ được áp dụng trừ khi TigerWit xác định, nếu không thì theo quyết định của mình.",
            "zh-Hant":"4.客戶應定期查詢交易平臺的“幫助”菜單 或 “ 用 戶 指 南 ” ； 如 果 發 生 沖 突 ， 除 非TigerWit 自由裁量做出決定，否則將以服務協議為準。",
            id:"4.The client shall regularly consult the ‘Help’ menu or User Guide of the trading platform(s); if a conflict arises the Service Agreement shall prevail unless TigerWit determines, in its sole discretion, otherwise."
        },
        amtBusiness107:{
            zh:"5.客户接受本公司所执行的所有订单均具有决定性和约束力。从执行订单开始，客户有两 (2) 个工作日的时间就(i) 价格，(ii) 成本，(iii)速度和 (iv) 方法提出争议；这种争议需要以书面形式传达给本公司。",
            en:"5.The client accepts that all orders executed by the Firm shall be conclusive and binding. The client has 2 (two) business days, from the execution of an order, to dispute the execution (i) price, (ii) cost, (iii) speed, and (iv) method; such dispute needs to be communicated to the Firm in writing.",
            vi:"5. Khách hàng chấp nhận rằng tất cả các lệnh được thực hiện bởi Công ty sẽ là kết luận ràng buộc. Khách hàng có 2 ngày làm việc, kể từ khi thực hiện lệnh, để khiếu nại về giá thực hiện (i), (ii) chi phí, (iii) tốc độ, và (iv) phương pháp; những khiếu nại như vậy cần phải được thông báo cho Công ty bằng văn bản.",
            "zh-Hant":"5.客戶接受本公司所執行的所有訂單均具有決定性和約束力。從執行訂單開始，客戶有兩 (2) 個工作日的時間就(i) 價格，(ii) 成本，(iii)速度和 (iv) 方法提出爭議；這種爭議需要以書面形式傳達給本公司。",
            id:"5.The client accepts that all orders executed by the Firm shall be conclusive and binding. The client has 2 (two) business days, from the execution of an order, to dispute the execution (i) price, (ii) cost, (iii) speed, and (iv) method; such dispute needs to be communicated to the Firm in writing."
        },
        amtBusiness108:{
            zh:"6.除非另有特别约定，客户接受，对于通过客户交易账户交易的金融工具，本公司没有义务提供电子形式或其他形式的确认。",
            en:"6.Unless specifically agreed otherwise, the client accepts that the Firm is under no obligation to provide electronic, or other, confirmation in relation to financial instruments traded through the client’s trading account.",
            vi:"6.Trừ khi được thỏa thuận cụ thể khác, khách hàng chấp nhận rằng Công ty không có nghĩa vụ cung cấp điện tử hoặc xác nhận khác liên quan đến các công cụ tài chính được giao dịch thông qua tài khoản giao dịch của khách hàng.",
            "zh-Hant":"6.除非另有特別約定，客戶接受，對於通過客戶交易賬戶交易的金融工具，本公司沒有義務提供電子形式或其他形式的確認。",
            id:"6.Unless specifically agreed otherwise, the client accepts that the Firm is under no obligation to provide electronic, or other, confirmation in relation to financial instruments traded through the client’s trading account."
        },
        amtBusiness109:{
            zh:"7.客户应定期查询交易平台的“帮助”菜单 或 “ 用 户 指 南 ” ； 如 果 发 生 冲 突 ， 除 非TigerWit 自由裁量做出决定，否则将以服务协议为准。",
            en:"7.The client shall regularly consult the ‘Help’ menu or User Guide of the trading platform(s); if a conflict arises the Service Agreement shall prevail unless TigerWit determines, in its sole discretion, otherwise.",
            vi:"7.Khách hàng sẽ thường xuyên tham khảo mục ‘Trợ giúp’ hoặc Hướng dẫn sử dụng (các) nền tảng giao dịch; nếu xung đột phát sinh Thỏa thuận dịch vụ sẽ được áp dụng trừ khi TigerWit xác định, hoặc có các phán quyết khác theo quyết định riêng của mình.",
            "zh-Hant":"7.客戶應定期查詢交易平臺的“幫助”菜單 或 “ 用 戶 指 南 ” ； 如 果 發 生 沖 突 ， 除 非TigerWit 自由裁量做出決定，否則將以服務協議為準。",
            id:"7.The client shall regularly consult the ‘Help’ menu or User Guide of the trading platform(s); if a conflict arises the Service Agreement shall prevail unless TigerWit determines, in its sole discretion, otherwise."
        },
        amtBusiness110:{
            zh:"常见问题",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題",
            id:"FAQs"
        },
        amtBusiness111:{
            zh:"1.关于条款和条件的问题，首先应该提交给客服部门。",
            en:"1.Questions regarding the Terms and Conditions should be addressed, in the first instance, to the Customer Support Department.",
            vi:"1. Các câu hỏi liên quan đến các Điều khoản và Điều kiện cần được giải quyết, trong trường hợp đầu tiên, đến Bộ phận Hỗ trợ Khách hàng.",
            "zh-Hant":"1.關於條款和條件的問題，首先應該提交給客服部門。",
            id:"1.Questions regarding the Terms and Conditions should be addressed, in the first instance, to the Customer Support Department."
        },
        amtBusiness113:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtBusiness114:{
            zh:"其他联系人",
            en:"Additional Contacts",
            vi:"Địa chỉ liên hệ bổ sung",
            "zh-Hant":"其他聯系人",
            id:"Additional Contacts"
        },
        amtBusiness115:{
            zh:"1.交易部",
            en:"1.Dealing Department",
            vi:"1. Bộ phận kinh doanh",
            "zh-Hant":"1.交易部",
            id:"1.Dealing Department"
        },
        amtBusiness117:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtBusiness119:{
            zh:"合规管理部门电子邮件：",
            en:"Compliance Department Email: ",
            vi:"Bộ phận Giám Sát Điện Email: ",
            "zh-Hant":"合規管理部門電子郵件：",
            id:"Compliance Department Email: "
        },
        amtResponsibly1:{
            zh:"负责任地交易——理解涉及的风险",
            en:"Trade Responsibly – Understanding the risks involved",
            vi:"Lưu ý giao dịch có trách nhiệm - Hiểu các rủi ro liên quan",
            "zh-Hant":"負責任地交易——理解涉及的風險",
            id:"Trade Responsibly – Understanding the risks involved"
        },
        amtResponsibly2:{
            zh:"差价合约（CFD）是让交易者能在不拥有资产的情况下对资产价格的变动进行投机的衍生工具。由于十分复杂，CFD 具有高度的风险，尤其是对于首次交易者或未获得良好市场教育的投资者而言。",
            en:"Contracts for Difference (CFDs) are derivative instruments that allow traders to speculate on the changing values of an asset without taking ownership of that asset. Due to their complexity, trading CFDs carries a high level of risk, particularly for first-time traders or investors who are not well-educated about the markets.",
            vi:"Hợp đồng chênh lệch (CFDs) là các công cụ phái sinh cho phép các nhà đầu tư suy đoán về giá trị thay đổi của một tài sản mà không có quyền sở hữu tài sản đó. Do sự phức tạp của chúng, việc giao dịch CFD mang lại mức độ rủi ro cao, đặc biệt đối với các nhà đầu tư hoặc nhà đầu tư lần đầu tiên không được đào tạo tốt về thị trường.",
            "zh-Hant":"差價合約（CFD）是讓交易者能在不擁有資產的情況下對資產價格的變動進行投機的衍生工具。由於十分復雜，CFD 具有高度的風險，尤其是對於首次交易者或未獲得良好市場教育的投資者而言。",
            id:"Contracts for Difference (CFDs) are derivative instruments that allow traders to speculate on the changing values of an asset without taking ownership of that asset. Due to their complexity, trading CFDs carries a high level of risk, particularly for first-time traders or investors who are not well-educated about the markets."
        },
        amtResponsibly3:{
            zh:"了解市场和知晓相关风险，不能完全消除在 CFD 交易中的风险，但有助于您做出更加充分的决策，更有效地管理您的投资资金并使用充分的风险管理。如果您是交易新手，请访问我们的新手页面并注册体验金账户学习基础知识。体验金账户是免费的而且不受限制，旨在帮助您在无风险环境下练习交易或测试您的策略。",
            en:"Learning about the markets and understanding the risks involved does not entirely eliminate the risks inherent in CFD trading, but it may help you make more informed decisions, manage your invested funds more effectively and employ adequate risk management. If you are new to trading, visit our Getting Started page and register for a demo account to learn the basics. Demo accounts are free and unlimited, and are designed to help you practice trading or test your strategies in a risk-free environment.",
            vi:"Việc tìm hiểu về các thị trường và hiểu những rủi ro liên quan không loại bỏ hoàn toàn rủi ro trong giao dịch CFD, nhưng nó có thể giúp bạn đưa ra quyết định sáng suốt hơn, quản lý các quỹ đầu tư hiệu quả hơn và sử dụng quản lý rủi ro đầy đủ. Nếu bạn chưa quen với giao dịch, hãy truy cập trang Bắt đầu của chúng tôi và đăng ký một tài khoản demo để tìm hiểu các khái niệm cơ bản. Tài khoản Demo là miễn phí và không giới hạn và được thiết kế để giúp bạn thực hành giao dịch hoặc kiểm tra chiến lược của bạn trong một môi trường không có rủi ro.",
            "zh-Hant":"了解市場和知曉相關風險，不能完全消除在 CFD 交易中的風險，但有助於您做出更加充分的決策，更有效地管理您的投資資金並使用充分的風險管理。如果您是交易新手，請訪問我們的新手頁面並註冊體驗金賬戶學習基礎知識。體驗金賬戶是免費的而且不受限制，旨在幫助您在無風險環境下練習交易或測試您的策略。",
            id:"Learning about the markets and understanding the risks involved does not entirely eliminate the risks inherent in CFD trading, but it may help you make more informed decisions, manage your invested funds more effectively and employ adequate risk management. If you are new to trading, visit our Getting Started page and register for a demo account to learn the basics. Demo accounts are free and unlimited, and are designed to help you practice trading or test your strategies in a risk-free environment."
        },
        amtResponsibly4:{
            zh:"如何利用杠杆优势",
            en:"How to use leverage to your advantage",
            vi:"Cách sử dụng đòn bẩy để làm lợi thế của bạn",
            "zh-Hant":"如何利用杠桿優勢",
            id:"How to use leverage to your advantage"
        },
        amtResponsibly5:{
            zh:"通过利用杠杆交易，让交易者能控制超过他们初始投资的头寸。例如，如果你存入 1,000 美元到您的账户，用 1:200 的杠杆交易，将让您能控制 200,000 美元的头寸，如果市场向对您有利的方向变动，会让您的盈利最大化。",
            en:"Trading with the use of leverage enables traders to control positions that exceed the value of their initial investment. If, for example, you deposited $1,000 into your account, trading with a 1:200 leverage would allow you to control a $200,000 position, which would maximise your profits, were the market move in your favour.",
            vi:"Giao dịch với việc sử dụng đòn bẩy cho phép các nhà giao dịch kiểm soát các vị thế vượt quá giá trị đầu tư ban đầu của họ. Ví dụ: nếu bạn gửi 1.000 đô la vào tài khoản của mình, giao dịch với đòn bẩy 1: 200 sẽ cho phép bạn kiểm soát vị trí 200.000 đô la, điều này sẽ tối đa hóa lợi nhuận của bạn, là động thái của thị trường có lợi cho bạn.",
            "zh-Hant":"通過利用杠桿交易，讓交易者能控制超過他們初始投資的頭寸。例如，如果妳存入 1,000 美元到您的賬戶，用 1:200 的杠桿交易，將讓您能控制 200,000 美元的頭寸，如果市場向對您有利的方向變動，會讓您的盈利最大化。",
            id:"Trading with the use of leverage enables traders to control positions that exceed the value of their initial investment. If, for example, you deposited $1,000 into your account, trading with a 1:200 leverage would allow you to control a $200,000 position, which would maximise your profits, were the market move in your favour."
        },
        amtResponsibly6:{
            zh:"但如果市场向对您不利的方向变动，杠杆将会扩大您的亏损。为了让自己熟悉利用杠杆交易，您可以开设一个免费的体验金账户，并观察哪种杠杆最适合您的策略。",
            en:"If, however, the market moved in an unfavourable direction, leverage would increase your losses. To familiarise yourself with trading with the use of leverage, you may open a free demo account and see what leverage best suits your strategy.",
            vi:"Tuy nhiên, nếu thị trường chuyển động theo một hướng không thuận lợi, đòn bẩy sẽ làm tăng thiệt hại của bạn. Để tự làm quen với giao dịch với việc sử dụng đòn bẩy, bạn có thể mở một tài khoản demo miễn phí và xem đòn bẩy nào phù hợp nhất với chiến lược của bạn.",
            "zh-Hant":"但如果市場向對您不利的方向變動，杠桿將會擴大您的虧損。為了讓自己熟悉利用杠桿交易，您可以開設壹個免費的體驗金賬戶，並觀察哪種杠桿最適合您的策略。",
            id:"If, however, the market moved in an unfavourable direction, leverage would increase your losses. To familiarise yourself with trading with the use of leverage, you may open a free demo account and see what leverage best suits your strategy."
        },
        amtConditions1:{
            zh:"依据监管规则，TigerWit 提醒您应详细阅读本交易须知。除非您了解所签订的合约性质以及所面临之风险程度，否则不应冒然进行类似的衍生性金融商品交易，同时您应根据本身的条件和财务状况，自行衡量该产品是否适合进行投资。",
            en:"In accordance with the supervisory regulations, TigerWit reminds you to read these trading notes carefully. Unless you have learnt the nature of the contract concluded and the degree of potential risks to be confronted, it is not recommended to involve in trade of similar financial derivatives and clients are recommended to judge whether the product is suitable at his/her own discretion based on the conditions and financial status.",
            vi:"Theo quy định giám sát, TigerWit nhắc bạn đọc kỹ các ghi chú giao dịch này. Trừ khi bạn đã học được bản chất của hợp đồng được ký kết và mức độ rủi ro có thể phải đối mặt, không nên tham gia vào việc giao dịch các sản phẩm tài chính phái sinh tương tự và khách hàng được khuyến cáo tự mình đánh giá xem sản phẩm có phù hợp với hay không về điều kiện và tình trạng tài chính.Các chiến lược đầu tư khác nhau kéo theo những rủi ro tiềm ẩn ở các mức độ khác nhau.",
            "zh-Hant":"依據監管規則，TigerWit 提醒您應詳細閱讀本交易須知。除非您了解所簽訂的合約性質以及所面臨之風險程度，否則不應冒然進行類似的衍生性金融商品交易，同時您應根據本身的條件和財務狀況，自行衡量該產品是否適合進行投資。",
            id:"In accordance with the supervisory regulations, TigerWit reminds you to read these trading notes carefully. Unless you have learnt the nature of the contract concluded and the degree of potential risks to be confronted, it is not recommended to involve in trade of similar financial derivatives and clients are recommended to judge whether the product is suitable at his/her own discretion based on the conditions and financial status."
        },
        amtConditions2:{
            zh:"不同的投资策略涉及不同程度的风险，因此在决定是否使用该类投资策略时，客户应了解以下各点：",
            en:"Different investment strategies would expect risks of different degrees. Thus, before deciding whether to apply the investment strategy, the client should learn the following information.",
            vi:"Do đó, trước khi quyết định áp dụng chiến lược đầu tư, khách hàng nên tìm hiểu các thông tin sau.",
            "zh-Hant":"不同的投資策略涉及不同程度的風險，因此在決定是否使用該類投資策略時，客戶應了解以下各點：",
            id:"Different investment strategies would expect risks of different degrees. Thus, before deciding whether to apply the investment strategy, the client should learn the following information."
        },
        amtConditions3:{
            zh:"降低风险的指令或策略",
            en:"Functions or strategies to mitigate risks",
            vi:"Chức năng hoặc chiến lược để giảm thiểu rủi ro",
            "zh-Hant":"降低風險的指令或策略",
            id:"Functions or strategies to mitigate risks"
        },
        amtConditions4:{
            zh:"下达某些指令(例如“止损”或“止损-限价”)目的在将损失控制在特定金额范围内，但有可能并不总是见效，因为市场情况或技术限制可能致使上述指令难以执行。",
            en:"Provision of a certain functions (such as ‘stop loss’, or ‘stop loss-buy limit’) is to control the losses within a specific range. However, it may fail to produce the desired result given market situations or technical restrictions. In case of trade through (gap), the resting order (including stop loss, take profit, buy stop, sell stop, buy limit and sell limit) will become market order. ",
            vi:"Việc cung cấp một số chức năng nhất định (chẳng hạn như 'dừng lỗ' hoặc 'giới hạn mua- dừng lỗ') để kiểm soát các tổn thất trong một phạm vi cụ thể. Tuy nhiên, nó có thể không tạo ra kết quả mong muốn cho các tình huống thị trường hoặc các hạn chế kỹ thuật. Trong trường hợp giao dịch thông qua (khoảng cách), lệnh đặt lệnh (bao gồm dừng lỗ, chốt lời, dừng mua, dừng bán, mua giới hạn và bán giới hạn) sẽ trở thành lệnh thị trường.",
            "zh-Hant":"下達某些指令(例如“止損”或“止損-限價”)目的在將損失控制在特定金額範圍內，但有可能並不總是見效，因為市場情況或技術限制可能致使上述指令難以執行。",
            id:"Provision of a certain functions (such as ‘stop loss’, or ‘stop loss-buy limit’) is to control the losses within a specific range. However, it may fail to produce the desired result given market situations or technical restrictions. In case of trade through (gap), the resting order (including stop loss, take profit, buy stop, sell stop, buy limit and sell limit) will become market order. "
        },
        amtConditions5:{
            zh:"当穿价 (跳空) 时，挂单(含 stop loss、take profit、buy stop、sell stop、buy limit、sell limit) 将会变为市价单；穿价 (跳空)在快市（重大数据公布前后）或是市场清淡时都有可能发生，虽然设置了挂单，但仍有可能因为市场流通量的不同而成交在市场价。",
            en:"In case of fast market (before and after release of important data) or sluggish market, trade through (gap) may arise. Though resting order is set, a trade may be concluded at market price due to different market circulation.",
            vi:"Trong trường hợp thị trường nhanh (trước và sau khi phát hành dữ liệu quan trọng) hoặc thị trường chậm chạp, giao dịch thông qua (khoảng cách) có thể phát sinh. Mặc dù lệnh được thiết lập, một giao dịch có thể được kết luận theo giá thị trường do lưu thông thị trường khác nhau.",
            "zh-Hant":"當穿價 (跳空) 時，掛單(含 stop loss、take profit、buy stop、sell stop、buy limit、sell limit) 將會變為市價單；穿價 (跳空)在快市（重大數據公布前後）或是市場清淡時都有可能發生，雖然設置了掛單，但仍有可能因為市場流通量的不同而成交在市場價。",
            id:"In case of fast market (before and after release of important data) or sluggish market, trade through (gap) may arise. Though resting order is set, a trade may be concluded at market price due to different market circulation."
        },
        amtConditions6:{
            zh:"当重大数据或消息公布前后，市场价格常会出现大幅剧烈波动，在该情况下，各商品的挂价距离也会随之变大 。",
            en:"During the period before and after important data or information is released, market [rice may encounter sharp fluctuation. In such a situation, the gap of listing price of commodities may also become greater accordingly.",
            vi:"Trong khoảng thời gian trước và sau khi dữ liệu hoặc thông tin quan trọng được phát hành, thị trường [gạo có thể gặp phải sự dao động mạnh. Trong tình huống như vậy, khoảng cách giá niêm yết của hàng hóa cũng có thể trở nên lớn hơn.",
            "zh-Hant":"當重大數據或消息公布前後，市場價格常會出現大幅劇烈波動，在該情況下，各商品的掛價距離也會隨之變大 。",
            id:"During the period before and after important data or information is released, market [rice may encounter sharp fluctuation. In such a situation, the gap of listing price of commodities may also become greater accordingly."
        },
        amtConditions7:{
            zh:"建议客户在重大数据公布前，慎重考量做单交易的风险。",
            en:"Clients should give prudent consideration to potential risks thereof before important data are released.",
            vi:"Khách hàng nên cân nhắc cẩn thận trước những rủi ro tiềm ẩn trước khi dữ liệu quan trọng được phát hành.",
            "zh-Hant":"建議客戶在重大數據公布前，慎重考量做單交易的風險。",
            id:"Clients should give prudent consideration to potential risks thereof before important data are released."
        },
        amtConditions8:{
            zh:"价格",
            en:"Price",
            vi:"Giá bán",
            "zh-Hant":"價格",
            id:"Price"
        },
        amtConditions9:{
            zh:"在线系统中发布的价格不一定能反映更广大的市场。尽管本公司希望该价格与被俗称为银行间市场的价格合理相关，但本公司使用的价格可能与银行以及银行间市场的其他参与者的报价不同。",
            en:"Prices published in our online system may not reflect the general market.Although TigerWit hopes that the prices could be reasonably relevant with bank valuation, prices published in our online system may not be exactly the same as prices from interbank markets as well as other participants",
            vi:"Mặc dù TigerWit hy vọng rằng giá cả có thể có liên quan hợp lý với định giá ngân hàng, giá được công bố trong hệ thống trực tuyến của chúng tôi có thể không chính xác giống như giá thị trường liên ngân hàng cũng như những người tham gia khác",
            "zh-Hant":"在線系統中發布的價格不壹定能反映更廣大的市場。盡管本公司希望該價格與被俗稱為銀行間市場的價格合理相關，但本公司使用的價格可能與銀行以及銀行間市場的其他參與者的報價不同。",
            id:"Prices published in our online system may not reflect the general market.Although TigerWit hopes that the prices could be reasonably relevant with bank valuation, prices published in our online system may not be exactly the same as prices from interbank markets as well as other participants"
        },
        amtConditions10:{
            zh:"信息延迟",
            en:"Information delay",
            vi:"Trì hoãn thông tin",
            "zh-Hant":"信息延遲",
            id:"Information delay"
        },
        amtConditions11:{
            zh:"下单指令可能基于不同原因而导致延迟执行，例如客户端连接到 TigerWit 服务器间的网络技术导致下单指令传递延迟；或因无线或有线网络连接的信号较弱；或连接路径的中断等因素，均可能导致交易平台不能正常运作，致使客户端与本公司间的讯息传递延迟，未能以指定价位成交。交易前请确认与 TigerWit 服务器的链接是否正常。",
            en:"When clients place an order, the instructions may be delayed due to various reasons, such as: 1. When clients connect to TigerWit server, there might be web technology issues that delay the instructions of order placement. 2. Weak signal of wired and wireless networks. 3. Interruption of connection path. All these facts could result in abnormal function in trading platform, contributing to a delay of information transmission between clients and TigerWit server, which leads to orders could not be placed at desired prices. Please make sure the connection between clients and TigerWit server works well before place an order.",
            vi:"Khi khách hang đặt lệnh, hướng dẫn của họ có thể bị trì hoãn vì nhiều lý do khác nhau, chẳng hạn như: 1. Khi khách hàng kết nối với máy chủ TigerWit, có thể có sự cố kĩ thuật của web làm chậm trễ hướng dẫn đặt lệnh. 2. Tín hiệu của mạng có dây và không dây yếu. 3. Gián đoạn đường dẫn kết nối. Tất cả những sự kiện này có thể dẫn đến chức năng bất thường trong nền tảng giao dịch, góp phần vào sự chậm trễ truyền tải thông tin giữa khách hàng và máy chủ TigerWit, dẫn đến các lệnh không thể được đặt ở mức giá mong muốn. Vui lòng đảm bảo kết nối giữa máy khách và máy chủ TigerWit hoạt động tốt trước khi đặt lệnh.",
            "zh-Hant":"下單指令可能基於不同原因而導致延遲執行，例如客戶端連接到 TigerWit 服務器間的網絡技術導致下單指令傳遞延遲；或因無線或有線網絡連接的信號較弱；或連接路徑的中斷等因素，均可能導致交易平臺不能正常運作，致使客戶端與本公司間的訊息傳遞延遲，未能以指定價位成交。交易前請確認與 TigerWit 服務器的鏈接是否正常。",
            id:"When clients place an order, the instructions may be delayed due to various reasons, such as: 1. When clients connect to TigerWit server, there might be web technology issues that delay the instructions of order placement. 2. Weak signal of wired and wireless networks. 3. Interruption of connection path. All these facts could result in abnormal function in trading platform, contributing to a delay of information transmission between clients and TigerWit server, which leads to orders could not be placed at desired prices. Please make sure the connection between clients and TigerWit server works well before place an order."
        },
        amtConditions12:{
            zh:"点差扩大",
            en:"Spread Fluctuations",
            vi:"Biến độngSpread",
            "zh-Hant":"點差擴大",
            id:"Spread Fluctuations"
        },
        amtConditions13:{
            zh:"TigerWit 交易平台所有商品在市场剧烈波动或交易清淡时，点差将会随市场而有所变动。在重大数据公布期间，买卖价差可能会大幅提高，以真实反映当时市场的波动。TigerWit 强烈建议交易者在重大数据公布期间应特别谨慎从事交易，避免因市场巨幅震荡造成超出预期的损失。",
            en:"During the period of dramatic fluctuation in the market and slack season of trading, spreads among all types of commodities in TigerWit trading platform might vary in degree. During the announcement periods of industry data, spreads might be enlarged in order to align with actual market fluctuation. TigerWit strongly recommends that traders should be cautious in their trades during these periods, which could help them avoid unpredictable loss resulted from unstable market.",
            vi:"Trong giai đoạn biến động mạnh trên thị trường và thời gian giao dịch chững lại, spread giữa tất cả các loại hàng hóa trong nền tảng giao dịch TigerWit có thể khác nhau về mức độ. Trong thời gian công bố dữ liệu ngành, spread có thể được mở rộng để phù hợp với biến động thị trường thực tế. TigerWit đặc biệt khuyến nghị các nhà đầu tư nên thận trọng trong các giao dịch trong thời gian này, điều này có thể giúp họ tránh được sự mất mát không lường trước được do thị trường không ổn định.",
            "zh-Hant":"TigerWit 交易平臺所有商品在市場劇烈波動或交易清淡時，點差將會隨市場而有所變動。在重大數據公布期間，買賣價差可能會大幅提高，以真實反映當時市場的波動。TigerWit 強烈建議交易者在重大數據公布期間應特別謹慎從事交易，避免因市場巨幅震蕩造成超出預期的損失。",
            id:"During the period of dramatic fluctuation in the market and slack season of trading, spreads among all types of commodities in TigerWit trading platform might vary in degree. During the announcement periods of industry data, spreads might be enlarged in order to align with actual market fluctuation. TigerWit strongly recommends that traders should be cautious in their trades during these periods, which could help them avoid unpredictable loss resulted from unstable market."
        },
        amtConditions14:{
            zh:"滑点",
            en:"Slippage",
            vi:"Slippage (Trượt giá)",
            "zh-Hant":"滑點",
            id:"Slippage"
        },
        amtConditions15:{
            zh:"TigerWit 为客户提供最佳报价并依要求的价格成交。但有时因市场激烈震荡或交易量变化，可能造成滑点而难以成交，这种状况尤其在重大数据公布期间最为常见。",
            en:"TigerWit provides customers with the best price and make the deals at requested prices, but sometimes because of dramatic fluctuation in market or changes of trading volumes, it may result in slippage and difficulties to complete a deal, which is quite common during the announcement periods of industry data.",
            vi:"TigerWit cung cấp cho khách hàng mức giá tốt nhất và thực hiện giao dịch theo giá yêu cầu, nhưng đôi khi do sự biến động mạnh về thị trường hoặc thay đổi khối lượng giao dịch, điều này có thể dẫn đến tình trạng trượt giá và khó khăn trong việc hoàn thành giao dịch, điều khá phổ biến trong thời kì dữ liệu các ngành được công bố.",
            "zh-Hant":"TigerWit 為客戶提供最佳報價並依要求的價格成交。但有時因市場激烈震蕩或交易量變化，可能造成滑點而難以成交，這種狀況尤其在重大數據公布期間最為常見。",
            id:"TigerWit provides customers with the best price and make the deals at requested prices, but sometimes because of dramatic fluctuation in market or changes of trading volumes, it may result in slippage and difficulties to complete a deal, which is quite common during the announcement periods of industry data."
        },
        amtConditions16:{
            zh:"汇价跳空",
            en:"Exchange rate gap",
            vi:"Khoảng cách tỷ giá hối đoái",
            "zh-Hant":"匯價跳空",
            id:"Exchange rate gap"
        },
        amtConditions17:{
            zh:"每周的第一个交易日开盘价有可能与上周的最后一个交易日收盘价相同或不同。遇到重大数据公布期间或不可抗拒因素或经济指数事件改变市场对于某种货币价值的看法时，可能会出现较大幅度的跳空。交易者持有仓位或挂单过周末应注意汇价可能有跳空的情况。",
            en:"It happens that the opening price on the first trading day in a week may be different with the closing price on the last trading day in last week. The following causes may contribute to substantial gaps: The announcement periods of industry data, force majeure and economic index number events that may change how participants of the market consider the value of some certain currencies. Traders with positions or pending orders should be aware that gaps are likely to emerge during weekends.",
            vi:"Điều đó xảy ra là giá mở cửa trong ngày giao dịch đầu tiên trong một tuần có thể khác với giá đóng cửa vào ngày giao dịch cuối cùng trong tuần trước. Những nguyên nhân sau đây có thể góp phần vào những khoảng cách giá đáng kể: Thời gian công bố dữ liệu ngành, bất khả kháng và các biến số chỉ số kinh tế có thể thay đổi cách thức người tham gia thị trường xem xét giá trị của một số loại tiền nhất định. Nhà đầu tư có vị thế hoặc lệnh chờ cần lưu ý rằng những khoảng cách giá có khả năng xuất hiện vào cuối tuần.",
            "zh-Hant":"每周的第壹個交易日開盤價有可能與上周的最後壹個交易日收盤價相同或不同。遇到重大數據公布期間或不可抗拒因素或經濟指數事件改變市場對於某種貨幣價值的看法時，可能會出現較大幅度的跳空。交易者持有倉位或掛單過周末應註意匯價可能有跳空的情況。",
            id:"It happens that the opening price on the first trading day in a week may be different with the closing price on the last trading day in last week. The following causes may contribute to substantial gaps: The announcement periods of industry data, force majeure and economic index number events that may change how participants of the market consider the value of some certain currencies. Traders with positions or pending orders should be aware that gaps are likely to emerge during weekends."
        },
        amtConditions18:{
            zh:"系统报价风险(错价)",
            en:"Risk of System Quotation (Mispricing)",
            vi:"Rủi ro hệ thống báo giá (Mispricing-Báo giá sai)",
            "zh-Hant":"系統報價風險(錯價)",
            id:"Risk of System Quotation (Mispricing)"
        },
        amtConditions19:{
            zh:"客户与 TigerWit 进行交易，实际上是与不同的主要银行及金融机构提供的汇价进行买卖。网上交易技术并非万无一失，某些情况下，报价可能会受到干扰，导致报价错误。这种情况可能只持续很短时间。",
            en:"In fact, when customers trade through TigerWit, they are trading according to quotations provided by major banks and financial institutions. In some cases, these quotations might be subject to interference and wrong quotations due to some temporary issues of trading technology. Usually, these problems may only occur a short time.",
            vi:"Trên thực tế, khi khách hàng giao dịch qua TigerWit, họ đang giao dịch theo các báo giá do các ngân hàng và tổ chức tài chính lớn cung cấp. Trong một số trường hợp, các báo giá này có thể bị nhiễu và báo giá sai do một số vấn đề tạm thời của công nghệ giao dịch. Thông thường, những vấn đề này chỉ có thể xảy ra trong một thời gian ngắn.",
            "zh-Hant":"客戶與 TigerWit 進行交易，實際上是與不同的主要銀行及金融機構提供的匯價進行買賣。網上交易技術並非萬無壹失，某些情況下，報價可能會受到幹擾，導致報價錯誤。這種情況可能只持續很短時間。",
            id:"In fact, when customers trade through TigerWit, they are trading according to quotations provided by major banks and financial institutions. In some cases, these quotations might be subject to interference and wrong quotations due to some temporary issues of trading technology. Usually, these problems may only occur a short time."
        },
        amtConditions20:{
            zh:"TigerWit 建议客户一旦遇到上述情况，应该避免在最佳可成交价下单，此最佳可成交价之价格并不真实，成交价可能与实际市场价格相差颇大的点数。倘若成交价并非银行及金融机构提供给 TigerWit 的实际汇价，TigerWit 将对有关交易保留撤销的权利。交易一经撤销，视同未成交。",
            en:"TigerWit recommends that if customers encounter these situations, please avoid dealing at best prices, because these exchange prices might be untrue resulting in considerable spreads with the actual market prices. If the exchange prices are not the actual prices offered by banks and financial institutions, TigerWit has the right to revoke these orders. Once the orders are revoked, these transactions will be regarded as invalid ones.",
            vi:"TigerWit khuyến cáo rằng nếu khách hàng gặp phải những tình huống này, vui lòng tránh giao dịch ở mức giá tốt nhất, bởi vì giá hối đoái này có thể là không đúng sự thật dẫn đến chênh lệch đáng kể với giá thị trường thực tế. Nếu giá hối đoái không phải là giá thực tế được cung cấp bởi các ngân hàng và tổ chức tài chính, TigerWit có quyền thu hồi các lệnh này. Khi lệnh bị thu hồi, các giao dịch này sẽ bị coi là giao dịch không hợp lệ.",
            "zh-Hant":"TigerWit 建議客戶壹旦遇到上述情況，應該避免在最佳可成交價下單，此最佳可成交價之價格並不真實，成交價可能與實際市場價格相差頗大的點數。倘若成交價並非銀行及金融機構提供給 TigerWit 的實際匯價，TigerWit 將對有關交易保留撤銷的權利。交易壹經撤銷，視同未成交。",
            id:"TigerWit recommends that if customers encounter these situations, please avoid dealing at best prices, because these exchange prices might be untrue resulting in considerable spreads with the actual market prices. If the exchange prices are not the actual prices offered by banks and financial institutions, TigerWit has the right to revoke these orders. Once the orders are revoked, these transactions will be regarded as invalid ones."
        },
        amtConditions21:{
            zh:"请注意，虽然上述情况不常见，但建议客户在此情况下先暂停交易以避免相关的风险。",
            en:"Please note: although the situations mentioned above are relatively rare, TigerWit advices customers to halt the transaction to avoid related risks.",
            vi:"Xin lưu ý: mặc dù các tình huống nêu trên khá hiếm, TigerWit khuyên khách hàng phải tạm dừng giao dịch để tránh rủi ro liên quan.",
            "zh-Hant":"請註意，雖然上述情況不常見，但建議客戶在此情況下先暫停交易以避免相關的風險。",
            id:"Please note: although the situations mentioned above are relatively rare, TigerWit advices customers to halt the transaction to avoid related risks."
        },
        amtConditions22:{
            zh:"当系统报价发生错误时，客户可能无法交易，TigerWit 将尽可能在最短时间内以站内通知或mail 或手机短信发送的方式通知客户，并秉持着公平公正的交易原则，对错价的成交单不论盈亏，均予以回复、撤销或酌情处理。",
            en:"When quotations of system are incorrect, customers sometimes cannot complete trading, TigerWit will inform all the customers via system announcement, email or text as soon as possible. Following the trading principles of fairness and equitability, TigerWit may revoke mispriced deals regardless of profit or loss.",
            vi:"Khi các báo giá của hệ thống không chính xác, khách hàng đôi khi không thể hoàn tất giao dịch, TigerWit sẽ thông báo cho tất cả khách hàng thông qua hệ thống thông báo, email hoặc văn bản càng sớm càng tốt. Theo nguyên tắc sự công bằng và bình đẳng, TigerWit có thể thu hồi các giao dịch sai lệch bất kể lời hay thua lỗ.",
            "zh-Hant":"當系統報價發生錯誤時，客戶可能無法交易，TigerWit 將盡可能在最短時間內以站內通知或mail 或手機短信發送的方式通知客戶，並秉持著公平公正的交易原則，對錯價的成交單不論盈虧，均予以回復、撤銷或酌情處理。",
            id:"When quotations of system are incorrect, customers sometimes cannot complete trading, TigerWit will inform all the customers via system announcement, email or text as soon as possible. Following the trading principles of fairness and equitability, TigerWit may revoke mispriced deals regardless of profit or loss."
        },
        amtConditions23:{
            zh:"套汇和操控",
            en:"Arbitrage and control",
            vi:"Giao dịch chênh lệch giá và kiểm soát",
            "zh-Hant":"套匯和操控",
            id:"Arbitrage and control"
        },
        amtConditions24:{
            zh:"网络、连接延迟及报价上的误差有时会造成显示在 TigerWit 交易平台的报价无法准确地反映实时市场价格。“套汇(arbitrage)”及“剥头皮(scalping)”或因网络连接的延误而利用差价获利的行为，并不能存在于客户直接向做市商进行交易的场外交易市场中(OTC)。TigerWit 不允许客户在本公司的交易平台上进行此等套汇或利用网络连接延迟的投机行为。依靠因价格滞后带来的套汇机会进行的交易有可能会被撤销。对涉及上述交易的账户 TigerWit 保留处置权利，包含必要的修改和调整，TigerWit 可能依个别情况判断，要求交易员进行干预或对指令进行核准所有单据和/或终止有关客户的账户，而无须事先通知客户。对于因套汇及/或操控而产生的任何纠纷，TigerWit 将依据个别情况判断进行解决。TigerWit 保留提款扣留的权利直至以上的问题能够解决。于此陈述的任何行动或决议将不会损害或放弃 TigerWit 对阁下、阁下的公司和其职员的任何权利或赔偿。",
            en:"The internet, connection delay and error of quotations may cause prices published in TigerWit trading platform cannot reflect actual market prices. Profit taking behaviors that take advantage of price spread, such as arbitrage, scalping or utilizing the internet delay, are not allowed in Over The Counter (OTC) market that basically trade directly between two parties, without the supervision of an exchange. TigerWit do not allow any clients get involved in these opportunistic practices such as arbitrage or utilizing internet delay and etc. These transactions that resulted from arbitrage behavior based on price lag are very likely to be canceled. TigerWit reserves the rights of settlement for accounts that engage in the opportunistic practices above. These rights include necessary adjustments and modifications. TigerWit may estimate these practices depending on specific conditions then require dealers to intervene and examine the related accounts or close them when it is necessary, which does not need to inform clients in advance. In terms of disputes due to arbitrage and manipulation, TigerWit will resolve these cases basing on specific conditions. TigerWit reserves deposit detention rights until these issues could be solved. Practices or decisions mentioned here would not impair or give up any rights or compensation to you, your companies and employees by TigerWit.",
            vi:"Sự chậm trễ do kết nối Internet, và lỗi báo giá có thể khiến giá được công bố trên nền tảng giao dịch TigerWit không thể phản ánh giá thị trường thực tế. Hành vi kiếm lời từ lợi dụng chênh lệch giá, chẳng hạn như giao dịch chênh lệch giá (arbitrage, scalping hoặc lợi dụng sự chậm trễ internet, không được cho phép trong thị trường Over The Counter (OTC) trong đó cơ bản giao dịch trực tiếp giữa hai bên, mà không có sự giám sát của một cuộc trao đổi. TigerWit không cho phép bất kỳ khách hàng nào tham gia vào thủ thuật cơ hội như giao dịch chênh lệnh giá choặc sử dụng chậm trễ internet và vv. Các giao dịch có hành vi chênh lệch giá dựa trên chênh lệch giá rất có thể bị hủy bỏ. TigerWit có quyền giải quyết các tài khoản tham gia vào các hoạt động lợi dụng ở trên. Các quyền này bao gồm các điều chỉnh và sửa đổi cần thiết. TigerWit có thể ước tính các thực hành này tùy thuộc vào điều kiện cụ thể sau đó yêu cầu các đại lý can thiệp và kiểm tra các tài khoản liên quan hoặc đóng chúng khi cần thiết, không cần phải thông báo trước cho khách hàng. Về tranh chấp do chênh lệch và thao tác, TigerWit sẽ giải quyết những trường hợp này dựa trên các điều kiện cụ thể. TigerWit bảo lưu quyền tạm giữ tiền gửi cho đến khi những vấn đề này có thể được giải quyết. Các thao tác hoặc phán quyết được đề cập ở đây sẽ không ảnh hưởng hoặc từ bỏ bất kỳ quyền hoặc bồi thường nào cho bạn, các công ty và nhân viên của bạn bởi TigerWit.",
            "zh-Hant":"網絡、連接延遲及報價上的誤差有時會造成顯示在 TigerWit 交易平臺的報價無法準確地反映實時市場價格。“套匯(arbitrage)”及“剝頭皮(scalping)”或因網絡連接的延誤而利用差價獲利的行為，並不能存在於客戶直接向做市商進行交易的場外交易市場中(OTC)。TigerWit 不允許客戶在本公司的交易平臺上進行此等套匯或利用網絡連接延遲的投機行為。依靠因價格滯後帶來的套匯機會進行的交易有可能會被撤銷。對涉及上述交易的賬戶 TigerWit 保留處置權利，包含必要的修改和調整，TigerWit 可能依個別情況判斷，要求交易員進行幹預或對指令進行核準所有單據和/或終止有關客戶的賬戶，而無須事先通知客戶。對於因套匯及/或操控而產生的任何糾紛，TigerWit 將依據個別情況判斷進行解決。TigerWit 保留提款扣留的權利直至以上的問題能夠解決。於此陳述的任何行動或決議將不會損害或放棄 TigerWit 對閣下、閣下的公司和其職員的任何權利或賠償。",
            id:"The internet, connection delay and error of quotations may cause prices published in TigerWit trading platform cannot reflect actual market prices. Profit taking behaviors that take advantage of price spread, such as arbitrage, scalping or utilizing the internet delay, are not allowed in Over The Counter (OTC) market that basically trade directly between two parties, without the supervision of an exchange. TigerWit do not allow any clients get involved in these opportunistic practices such as arbitrage or utilizing internet delay and etc. These transactions that resulted from arbitrage behavior based on price lag are very likely to be canceled. TigerWit reserves the rights of settlement for accounts that engage in the opportunistic practices above. These rights include necessary adjustments and modifications. TigerWit may estimate these practices depending on specific conditions then require dealers to intervene and examine the related accounts or close them when it is necessary, which does not need to inform clients in advance. In terms of disputes due to arbitrage and manipulation, TigerWit will resolve these cases basing on specific conditions. TigerWit reserves deposit detention rights until these issues could be solved. Practices or decisions mentioned here would not impair or give up any rights or compensation to you, your companies and employees by TigerWit."
        },
        amtConditions25:{
            zh:"价位操纵",
            en:"Price manipulation",
            vi:"Thao túng giá",
            "zh-Hant":"價位操縱",
            id:"Price manipulation"
        },
        amtConditions26:{
            zh:"TigerWit 绝对禁止对其价格、执行及平台进行任何形式的操控，不接受客户“剥头皮”交易方式。",
            en:"TigerWit absolutely forbids any kinds of manipulation for prices, execution and platform, and does not accept any illegal trading modes such as scalping.",
            vi:"TigerWit hoàn toàn cấm bất kỳ loại thao tác nào thao túng giá, bàn khớp lệnh và nền tảng, và không chấp nhận bất kỳ chế độ giao dịch bất hợp pháp nào như scalping.",
            "zh-Hant":"TigerWit 絕對禁止對其價格、執行及平臺進行任何形式的操控，不接受客戶“剝頭皮”交易方式。",
            id:"TigerWit absolutely forbids any kinds of manipulation for prices, execution and platform, and does not accept any illegal trading modes such as scalping."
        },
        amtConditions27:{
            zh:"若 TigerWit 怀疑任何账户从事操控或不接受的交易方式，TigerWit 保留相关权利，对账户进行调查及覆核，并从涉嫌账户中扣除由相关活动所赚取的盈利款项，尤其是价格滞后带来的套汇机会进行的交易有可能会被撤销，调查及覆核期间账户可能被冻结交易，TigerWit 保留了结此类客户所有未平仓头寸以及关闭其账户的权利。对于涉嫌从事操控的账户，TigerWit 保留对相关账户进行必要更正或调整的权利。",
            en:"If TigerWit suspects any accounts are manipulating or doing unacceptable trading, we reserve related rights to investigate and audit these accounts and deduct profits earned in relevant transactions from accounts suspected. Especially, transactions of arbitrage resulted from price delay might be canceled investigated or frozen, TigerWit has the right to close open positions or accounts of these clients. For suspected accounts that manipulate prices, TigerWit has the rights to process necessary adjustment or modification.",
            vi:"Nếu TigerWit nghi ngờ bất kỳ tài khoản nào đang thao túng hoặc giao dịch không được chấp nhận, chúng tôi bảo lưu quyền liên quan để điều tra và kiểm tra các tài khoản này và khấu trừ lợi nhuận kiếm được trong các giao dịch có liên quan từ các tài khoản bị nghi ngờ. Đặc biệt, các giao dịch chênh lệch do việc trì hoãn giá có thể bị hủy bỏ điều tra hoặc bị đóng băng, TigerWit có quyền đóng các vị thế mở hoặc các tài khoản của các khách hàng này. Đối với các tài khoản nghi ngờ thao túng giá, TigerWit có quyền xử lý các điều chỉnh hoặc sửa đổi cần thiết.",
            "zh-Hant":"若 TigerWit 懷疑任何賬戶從事操控或不接受的交易方式，TigerWit 保留相關權利，對賬戶進行調查及覆核，並從涉嫌賬戶中扣除由相關活動所賺取的盈利款項，尤其是價格滯後帶來的套匯機會進行的交易有可能會被撤銷，調查及覆核期間賬戶可能被凍結交易，TigerWit 保留了結此類客戶所有未平倉頭寸以及關閉其賬戶的權利。對於涉嫌從事操控的賬戶，TigerWit 保留對相關賬戶進行必要更正或調整的權利。",
            id:"If TigerWit suspects any accounts are manipulating or doing unacceptable trading, we reserve related rights to investigate and audit these accounts and deduct profits earned in relevant transactions from accounts suspected. Especially, transactions of arbitrage resulted from price delay might be canceled investigated or frozen, TigerWit has the right to close open positions or accounts of these clients. For suspected accounts that manipulate prices, TigerWit has the rights to process necessary adjustment or modification."
        },
        amtConditions28:{
            zh:"交易与第三者参与",
            en:"Trade and third-party participation",
            vi:"Giao dịch và tham gia của bên thứ ba",
            "zh-Hant":"交易與第三者參與",
            id:"Trade and third-party participation"
        },
        amtConditions29:{
            zh:"客户有义务将密码保密存放，确保第三方无法以用户名称及密码进入平台取得客户在此平台账户的权利，在任何时候，交易应当由客户本人进行。无论是否出于自主权，客户将交易权力或对其账户的控制授予第三者，或根据任何第三者（交易代理人）的信息、建议或指令行事，风险由客户自行承担。TigerWit 不承担对客户所选择的交易代理人进行覆核或提供有关建议的任何责任。TigerWit 不就任何交易代理人作出任何声明或保证。TigerWit 不对客户因交易代理人的行为遭受的任何损失承担责任。",
            en:"Users have obligations to maintain their own passwords secrecy and confirm all the third parties are not able to login TigerWit or obtain rights of users in platform via users’ account names and passwords. In any cases, trading should be operated by users themselves only. If users authorize the usage of their account by any third party or trade according to others’ information, advice or instructions, no matter whether it is from users’ own decisions, the risks should be borne by users themselves. TigerWit is not responsible for any confirms or advice gave by third parties authorized by users. TigerWit does not offer any states or guarantees to any trading agents. TigerWit is not responsible for the loss of users caused by the practices of third parties.",
            vi:"Người dùng có nghĩa vụ duy trì bí mật mật khẩu của riêng mình và xác nhận tất cả các bên thứ ba không thể đăng nhập TigerWit hoặc có được quyền của người dùng trên nền tảng thông qua tên và mật khẩu của người dùng. Trong mọi trường hợp, giao dịch chỉ được vận hành bởi người dùng. Nếu người dùng ủy quyền việc sử dụng tài khoản của họ cho bất kỳ bên thứ ba hoặc giao dịch nào theo thông tin, lời khuyên hoặc hướng dẫn của người khác, cho dù đó là do quyết định của người dùng, thì rủi ro sẽ do chính người dùng gánh chịu. TigerWit không chịu trách nhiệm về bất kỳ xác nhận hoặc lời khuyên nào được cung cấp bởi các bên thứ ba được người dùng ủy quyền. TigerWit không cung cấp bất kỳ tuyên bố hoặc bảo đảm nào cho bất kỳ đại lý giao dịch nào. TigerWit không chịu trách nhiệm về sự mất mát của người dùng do các hoạt động của các bên thứ ba.",
            "zh-Hant":"客戶有義務將密碼保密存放，確保第三方無法以用戶名稱及密碼進入平臺取得客戶在此平臺賬戶的權利，在任何時候，交易應當由客戶本人進行。無論是否出於自主權，客戶將交易權力或對其賬戶的控制授予第三者，或根據任何第三者（交易代理人）的信息、建議或指令行事，風險由客戶自行承擔。TigerWit 不承擔對客戶所選擇的交易代理人進行覆核或提供有關建議的任何責任。TigerWit 不就任何交易代理人作出任何聲明或保證。TigerWit 不對客戶因交易代理人的行為遭受的任何損失承擔責任。",
            id:"Users have obligations to maintain their own passwords secrecy and confirm all the third parties are not able to login TigerWit or obtain rights of users in platform via users’ account names and passwords. In any cases, trading should be operated by users themselves only. If users authorize the usage of their account by any third party or trade according to others’ information, advice or instructions, no matter whether it is from users’ own decisions, the risks should be borne by users themselves. TigerWit is not responsible for any confirms or advice gave by third parties authorized by users. TigerWit does not offer any states or guarantees to any trading agents. TigerWit is not responsible for the loss of users caused by the practices of third parties."
        },
        amtConditions30:{
            zh:"交易平台时间",
            en:"Platform Trading Hours",
            vi:"Giờ giao dịch của nền tảng",
            "zh-Hant":"交易平臺時間",
            id:"Platform Trading Hours"
        },
        amtConditions31:{
            zh:"冬令时间：北京时间周一早上 6 点 15 分开盘，至周六早上 5 点收盘。",
            en:" ",
            vi:" ",
            "zh-Hant":"冬令時間：北京時間周壹早上 6 點 15 分開盤，至周六早上 5 點收盤。",
            id:" "
        },
        amtConditions32:{
            zh:"夏令时间：北京时间周一早上 5 点 15 分开盘，至周六早上 4 点收盘。",
            en:" ",
            vi:" ",
            "zh-Hant":"夏令時間：北京時間周壹早上 5 點 15 分開盤，至周六早上 4 點收盤。",
            id:" "
        },
        amtConditions33:{
            zh:"交易平台的报价来自银行及金融机构，所以开盘或收盘时间可能因银行及金融机构延长或提前结束报价而有所变动。开盘时的报价会依市场 价 格 而 有 所 调 整 或 报 价 可 能 受 到 干 扰 ，TigerWit 将在市场价格稳定后开盘。",
            en:"The quotations in TigerWit platform are offered by banks and financial institutions, thus, the hours of opening or closing quotations might start early or extend, because banks and financial institutions to do so. The opening quotations might be adjusted or affected due to the market quotations. TigerWit usually opens quotations under a stable market.",
            vi:"Các chào giá trong nền tảng TigerWit được cung cấp bởi các ngân hàng và tổ chức tài chính, do đó, giờ mở cửa hoặc đóng cửa các chào giá có thể bắt đầu sớm hoặc kéo dài, bởi vì các ngân hàng và các tổ chức tài chính làm như vậy. Các chào giá mở có thể được điều chỉnh hoặc bị ảnh hưởng do các chào giá của thị trường. TigerWit thường mở các chào giá dưới một thị trường ổn định.",
            "zh-Hant":"交易平臺的報價來自銀行及金融機構，所以開盤或收盤時間可能因銀行及金融機構延長或提前結束報價而有所變動。開盤時的報價會依市場 價 格 而 有 所 調 整 或 報 價 可 能 受 到 幹 擾 ，TigerWit 將在市場價格穩定後開盤。",
            id:"The quotations in TigerWit platform are offered by banks and financial institutions, thus, the hours of opening or closing quotations might start early or extend, because banks and financial institutions to do so. The opening quotations might be adjusted or affected due to the market quotations. TigerWit usually opens quotations under a stable market."
        },
        amtConditions34:{
            zh:"流通量",
            en:"Circulation",
            vi:"Lưu hành",
            "zh-Hant":"流通量",
            id:"Circulation"
        },
        amtConditions35:{
            zh:"交易者请注意，在开市后前几个小时的交易流通量通常较为清淡。市场清淡时买家及卖家较少，差价将会随着市场而有所变动。",
            en:"Traders please note: during a couple of hours around market opening, the amount of trading in circulation usually relatively small. At that time, the buyers and sellers are relatively few and spreads might be affected by the market.",
            vi:"Nhà đầu tư xin lưu ý: trong một vài giờ trong thời gian mở cửa thị trường, số lượng giao dịch đang lưu thông thường tương đối nhỏ. Vào thời điểm đó, người mua và người bán là tương đối ít và phí spread có thể bị ảnh hưởng bởi thị trường.",
            "zh-Hant":"交易者請註意，在開市後前幾個小時的交易流通量通常較為清淡。市場清淡時買家及賣家較少，差價將會隨著市場而有所變動。",
            id:"Traders please note: during a couple of hours around market opening, the amount of trading in circulation usually relatively small. At that time, the buyers and sellers are relatively few and spreads might be affected by the market."
        },
        amtConditions36:{
            zh:"保证金追加",
            en:"Margin call",
            vi:"Yêu cầu Bảo Chứng",
            "zh-Hant":"保證金追加",
            id:"Margin call"
        },
        amtConditions37:{
            zh:"保证金减少的情势可能会因买卖差价的变动而扩大，导致账户内可用保证金余额减少。假如保证金不足以维持任何开仓部位，账户可能会因为保证金不足而强制平仓。虽然持有长短仓令交易者觉得受市场变动的影响有限，实际上在任何时间买卖差价扩大而可用保证金不足，都可能出现全部仓位被强制平仓。",
            en:"Margin decreases may widen as the result of spreads and lead to the reduction of free margin left in the account. If the margin is insufficient to maintain all open positions, the account may need to close the position due to insufficient margin. Although traders who held both long and short positions may feel the impact is limited from the market changes, in fact, a margin call on all open positions may occur at any time when spreads are widening and the free margin is insufficient.",
            vi:"Các lần giảm số tiền kí quỹ có thể tăng lên do kết quả của spread và dẫn đến việc giảm số dư ký quỹ còn lại trong tài khoản. Nếu lợi nhuận không đủ để duy trì tất cả các vị thế mở, tài khoản có thể cần phải đóng vị thế do không đủ số dư. Mặc dù các nhà giao dịch nắm giữ cả vị thế mua và bán dài hạn có thể cảm thấy tác động từ các thay đổi từ thị trường bị giới hạn trên thực tế, một yêu cầu bảo chứng trên tất cả các vị thế mở có thể xảy ra bất kỳ lúc nào khi spread tăng lênh và mức margin có thể đặt lệnh không đủ.",
            "zh-Hant":"保證金減少的情勢可能會因買賣差價的變動而擴大，導致賬戶內可用保證金余額減少。假如保證金不足以維持任何開倉部位，賬戶可能會因為保證金不足而強制平倉。雖然持有長短倉令交易者覺得受市場變動的影響有限，實際上在任何時間買賣差價擴大而可用保證金不足，都可能出現全部倉位被強制平倉。",
            id:"Margin decreases may widen as the result of spreads and lead to the reduction of free margin left in the account. If the margin is insufficient to maintain all open positions, the account may need to close the position due to insufficient margin. Although traders who held both long and short positions may feel the impact is limited from the market changes, in fact, a margin call on all open positions may occur at any time when spreads are widening and the free margin is insufficient."
        },
        amtConditions38:{
            zh:"周末风险",
            en:"Risks over weekends",
            vi:"Rủi ro cuối tuần",
            "zh-Hant":"周末風險",
            id:"Risks over weekends"
        },
        amtConditions39:{
            zh:"在货币市场通常停止交易的周末（冬令时间：北京时间周六早上 5 点，至周一早上 6 点 15分，夏令时间：北京时间周六早上 4 点，至周一上午 5 点 15 分），可能会发生诸多情形、发展变化或事件。这可能会导致货币市场的开盘价与上个星期五下午收盘时的价格截然不同。",
            en:"When the markets are closed over the weekends and holidays all kinds of situations, developments, changes or big events may occur, which may lead to large gaps between the opening quotations and the closing quotations of Friday afternoon of the previous week.",
            vi:"Khi thị trường đóng cửa vào cuối tuần và ngày lễ, tất cả các tình huống, diễn biến, thay đổi hoặc sự kiện lớn có thể xảy ra, điều này có thể dẫn đến khoảng cách lớn giữa các báo giá mở và báo giá đóng cửa vào chiều thứ Sáu của tuần trước đó.",
            "zh-Hant":"在貨幣市場通常停止交易的周末（冬令時間：北京時間周六早上 5 點，至周壹早上 6 點 15分，夏令時間：北京時間周六早上 4 點，至周壹上午 5 點 15 分），可能會發生諸多情形、發展變化或事件。這可能會導致貨幣市場的開盤價與上個星期五下午收盤時的價格截然不同。",
            id:"When the markets are closed over the weekends and holidays all kinds of situations, developments, changes or big events may occur, which may lead to large gaps between the opening quotations and the closing quotations of Friday afternoon of the previous week."
        },
        amtConditions40:{
            zh:"本公司的客户不能在周末以及市场关闭的其他时间内使用在线系统来设定或更改指令。客户持有的仓位经过周末，为保护该持有的仓位所设置的止损指令，可能会在比停损指令指定的价格更糟的位置执行。",
            en:"Users in TigerWit cannot set up or change instructions through platform during weekends and closing time. If users hold the position during weekends, it is likely that the instructions would carry out at a worse price than the desired price in order to protect stop-loss instructions for holding positions.",
            vi:"Người dùng của TigerWit không thể thiết lập hoặc thay đổi hướng dẫn đặt lệnh thông qua nền tảng vào cuối tuần và giờ đóng cửa. Nếu người dùng giữ vị thế trong các ngày cuối tuần, có khả năng các hướng dẫn sẽ thực hiện ở mức giá thấp hơn giá mong muốn để bảo vệ hướng dẫn lệnh dừng lỗ cho các vị thế đang được nắm giữ.",
            "zh-Hant":"本公司的客戶不能在周末以及市場關閉的其他時間內使用在線系統來設定或更改指令。客戶持有的倉位經過周末，為保護該持有的倉位所設置的止損指令，可能會在比停損指令指定的價格更糟的位置執行。",
            id:"Users in TigerWit cannot set up or change instructions through platform during weekends and closing time. If users hold the position during weekends, it is likely that the instructions would carry out at a worse price than the desired price in order to protect stop-loss instructions for holding positions."
        },
        amtConditions41:{
            zh:"网络交易",
            en:"Online trading",
            vi:"Giao dịch trực tuyến",
            "zh-Hant":"網絡交易",
            id:"Online trading"
        },
        amtConditions42:{
            zh:"通过网络工具进行场外合约交易与在另一个电子交易系统进行的交易不同，也与在传统的市场中进行的交易不同。",
            en:"Trades placed in TigerWit platform on Over The Counter (OTC) contracts differ from that in other electronic trading platforms on traditional trading market",
            vi:"Các giao dịch được đặt trong nền tảng TigerWit trên các hợp đồng Over The Counter (OTC) khác với các giao dịch điện tử khác trên thị trường giao dịch truyền thống",
            "zh-Hant":"通過網絡工具進行場外合約交易與在另壹個電子交易系統進行的交易不同，也與在傳統的市場中進行的交易不同。",
            id:"Trades placed in TigerWit platform on Over The Counter (OTC) contracts differ from that in other electronic trading platforms on traditional trading market"
        },
        amtConditions43:{
            zh:"在网络交易系统中进行交易的客户，将暴露在与该系统有关的风险之中，包括硬件和软件故障和系统故障，就网络工具来说，包括单独的客户系统故障，以及连接平台和客户的通信基础设施（例如互联网）故障。",
            en:"Users of online trading platform engaged in the risks that are related with system condition including bugs in hardware, software and system. The internet tools are comprised of single system bugs of users and communication facilities bugs of TigerWit that connect platform and users, such as the internet.",
            vi:"Người dùng nền tảng giao dịch trực tuyến tham gia vào các rủi ro có liên quan đến tình trạng hệ thống bao gồm các lỗi trong phần cứng, phần mềm và hệ thống. Các công cụ internet bao gồm các lỗi hệ thống đơn lẻ của người dùng và các lỗi cơ sở truyền thông của TigerWit kết nối nền tảng và người dùng, chẳng hạn như internet.",
            "zh-Hant":"在網絡交易系統中進行交易的客戶，將暴露在與該系統有關的風險之中，包括硬件和軟件故障和系統故障，就網絡工具來說，包括單獨的客戶系統故障，以及連接平臺和客戶的通信基礎設施（例如互聯網）故障。",
            id:"Users of online trading platform engaged in the risks that are related with system condition including bugs in hardware, software and system. The internet tools are comprised of single system bugs of users and communication facilities bugs of TigerWit that connect platform and users, such as the internet."
        },
        amtConditions44:{
            zh:"手续费",
            en:"Commission charge",
            vi:"Phí hoa hồng",
            "zh-Hant":"手續費",
            id:"Commission charge"
        },
        amtConditions45:{
            zh:"在客户开始交易之前，客户应取得有关应缴的所有手续费与其他费用的详细信息。若有任何费用未于开户申请书中订明，客户亦应了解相关规定的费用。",
            en:"Before making any transactions, customers should obtain detailed information of all commissions and other fees payable. Users should be aware that TigerWit may pass on other charges or regulatory fees not specified in the account application.",
            vi:"Trước khi thực hiện bất kỳ giao dịch nào, khách hàng sẽ nhận được thông tin chi tiết về tất cả các khoản hoa hồng và các khoản phí khác phải trả. Người dùng cần lưu ý rằng TigerWit có thể chuyển các khoản phí khác hoặc các khoản phí pháp lý không được quy định trong đơn đăng ký tài khoản.",
            "zh-Hant":"在客戶開始交易之前，客戶應取得有關應繳的所有手續費與其他費用的詳細信息。若有任何費用未於開戶申請書中訂明，客戶亦應了解相關規定的費用。",
            id:"Before making any transactions, customers should obtain detailed information of all commissions and other fees payable. Users should be aware that TigerWit may pass on other charges or regulatory fees not specified in the account application."
        },
        amtConditions46:{
            zh:"断线时紧急异常处理申请",
            en:"Application for abnormal conditions",
            vi:"Đơn đăng kí cho điều kiện bất thường",
            "zh-Hant":"斷線時緊急異常處理申請",
            id:"Application for abnormal conditions"
        },
        amtConditions47:{
            zh:"当系统断线或发生异常状况时，建议客户先自行判定您的在仓单是否要平仓或取消挂单，当您一旦决定提出申请时，请至在线申请异常处理。",
            en:"When system occurs disconnection or abnormal conditions, we recommend that users should make the decision whether close the positions or not at the first place. Once users make up their mind, please operate the online application for abnormal conditions.",
            vi:"Khi hệ thống xảy ra ngắt kết nối hoặc điều kiện bất thường, chúng tôi khuyên người dùng nên đưa ra quyết định xem có đóng vị thế hay không ở vị thế đầu tiên. Sau khi người dùng quyết định, hãy vận hành đơn đăng kí trực tuyến cho các điều kiện bất thường.",
            "zh-Hant":"當系統斷線或發生異常狀況時，建議客戶先自行判定您的在倉單是否要平倉或取消掛單，當您壹旦決定提出申請時，請至在線申請異常處理。",
            id:"When system occurs disconnection or abnormal conditions, we recommend that users should make the decision whether close the positions or not at the first place. Once users make up their mind, please operate the online application for abnormal conditions."
        },
        amtConditions48:{
            zh:"注意事项说明：",
            en:"The announcement: ",
            vi:"Bản thông báo:",
            "zh-Hant":"註意事項說明：",
            id:"The announcement: "
        },
        amtConditions49:{
            zh:"1. 交易系统断线时，客户请致电客服电话，TigerWit 仅代为平仓或取消挂单，无法代为建立新仓或挂止损/停利单。",
            en:"1. While system disconnected, client needs to contact the support center. TigerWit only close the position or cancel the order on client's behalf, and will not open a new position or place the loss/take profit order for client.",
            vi:"1. Trong khi hệ thống bị ngắt kết nối, khách hàng cần liên hệ với trung tâm hỗ trợ. TigerWit chỉ đóng vị thế hoặc hủy lệnh thay mặt khách hàng và sẽ không mở một vị thế mới hoặc đặt lệnh thua lỗ / chốt lời cho khách hàng.",
            "zh-Hant":"1. 交易系統斷線時，客戶請致電客服電話，TigerWit 僅代為平倉或取消掛單，無法代為建立新倉或掛止損/停利單。",
            id:"1. While system disconnected, client needs to contact the support center. TigerWit only close the position or cancel the order on client's behalf, and will not open a new position or place the loss/take profit order for client."
        },
        amtConditions50:{
            zh:"2. TigerWit 客服代客户平仓时，因电话延迟和网络延迟，造成电话报价与最终成交价格并不完全一致，客户知晓并同意 TigerWit 的代为处理，此间价差由客户承担。TigerWit 只是作为代客执行交易的代理，并不是作为交易员给予客户报价。所以，当您在依规定的时间内提出紧急处理申请后，TigerWit 依据断线或报价异常期间之正确市场价格予以平仓处理。请注意:TigerWit 不接受指定价格平仓。",
            en:"2. When TigerWit support center closes the position on client’s behalf, the quotations in the phone call may not exactly aligned with final trading quotations due to the delay of phone call or the internet. Clients should be aware and agree the settlement of TigerWit and take the responsibilities of the spreads mentioned above. TigerWit is only an authorized agent to execute for client, and does not quote to client as a trader. Therefore, if you apply for the abnormal condition settlement during the effective time, TigerWit will close the position by the accurate price according to the price while system disconnection or abnormality occurs. Attention: TigerWit does not accept any assigned price to close the position.",
            vi:"2. Khi trung tâm hỗ trợ TigerWit đóng vị thế thay mặt khách hàng, các chào giá trong cuộc gọi điện thoại có thể không khớp chính xác với các chào giá giao dịch cuối cùng do sự chậm trễ của cuộc gọi điện thoại hoặc internet. Khách hàng cần phải nhận thức và đồng ý việc giải quyết của TigerWit và chịu trách nhiệm các khoản spread nêu trên. TigerWit chỉ là một đại lý được ủy quyền để thực hiện cho khách hàng và không báo giá cho khách hàng là một nhà giao dịch. Do đó, nếu bạn áp dụng cho việc giải quyết tình trạng bất thường trong thời gian hiệu lực, TigerWit sẽ đóng vị thế theo giá chính xác theo giá trong khi ngắt kết nối hệ thống hoặc bất thường xảy ra.",
            "zh-Hant":"2. TigerWit 客服代客戶平倉時，因電話延遲和網絡延遲，造成電話報價與最終成交價格並不完全壹致，客戶知曉並同意 TigerWit 的代為處理，此間價差由客戶承擔。TigerWit 只是作為代客執行交易的代理，並不是作為交易員給予客戶報價。所以，當您在依規定的時間內提出緊急處理申請後，TigerWit 依據斷線或報價異常期間之正確市場價格予以平倉處理。請註意:TigerWit 不接受指定價格平倉。",
            id:"2. When TigerWit support center closes the position on client’s behalf, the quotations in the phone call may not exactly aligned with final trading quotations due to the delay of phone call or the internet. Clients should be aware and agree the settlement of TigerWit and take the responsibilities of the spreads mentioned above. TigerWit is only an authorized agent to execute for client, and does not quote to client as a trader. Therefore, if you apply for the abnormal condition settlement during the effective time, TigerWit will close the position by the accurate price according to the price while system disconnection or abnormality occurs. Attention: TigerWit does not accept any assigned price to close the position."
        },
        amtConditions51:{
            zh:"3. 当您发出紧急处理申请之后切勿再对已申请的 单 子 做 任 何 平 仓 动 作 ， 若 有 此 情 形 ，TigerWit 仍将以依据断线或报价异常期间之正确市场价格予以平仓处理。",
            en:"3. After you apply for the abnormal condition settlement, please do not close any position that you applied for. If you still act in this way, TigerWit support center will still close the position by the accurate price according to the price while system disconnection or abnormality occurs.",
            vi:"3. Sau khi bạn áp dụng cho việc giải quyết tình trạng bất thường, xin vui lòng không đóng bất kỳ vị thế mà bạn áp dụng cho. Nếu bạn vẫn hoạt động theo cách này, trung tâm hỗ trợ TigerWit sẽ vẫn đóng vị thế theo giá chính xác theo giá trong khi ngắt kết nối hệ thống hoặc bất thường xảy ra.",
            "zh-Hant":"3. 當您發出緊急處理申請之後切勿再對已申請的 單 子 做 任 何 平 倉 動 作 ， 若 有 此 情 形 ，TigerWit 仍將以依據斷線或報價異常期間之正確市場價格予以平倉處理。",
            id:"3. After you apply for the abnormal condition settlement, please do not close any position that you applied for. If you still act in this way, TigerWit support center will still close the position by the accurate price according to the price while system disconnection or abnormality occurs."
        },
        amtConditions52:{
            zh:"常见问题解答",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題解答",
            id:"FAQs"
        },
        amtConditions53:{
            zh:"关于交易条件的问题首先传达给客户服务部。",
            en:"Questions regarding trading conditions should be addressed, in the first instance, to the Customer Support Department.",
            vi:"Các câu hỏi liên quan đến điều kiện giao dịch cần được giải quyết, trong lần đầu tiên, được gửi đến Bộ phận hỗ trợ khách hàng.",
            "zh-Hant":"關於交易條件的問題首先傳達給客戶服務部。",
            id:"Questions regarding trading conditions should be addressed, in the first instance, to the Customer Support Department."
        },
        amtConditions54:{
            zh:"客户服务部",
            en:"Customer Support Department",
            vi:"Bộ Phận Hỗ Trợ Khách Hàng",
            "zh-Hant":"客戶服務部",
            id:"Customer Support Department"
        },
        amtConditions56:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtConditions57:{
            zh:"其他联系人",
            en:"Additional Contacts",
            vi:"Địa Chỉ Liên Hệ Bổ Sung",
            "zh-Hant":"其他聯系人",
            id:"Additional Contacts"
        },
        amtConditions58:{
            zh:"TigerWit 合规部门",
            en:"TigerWit Compliance Department",
            vi:"Bộ Phận Giám Sát của TigerWit",
            "zh-Hant":"TigerWit 合規部門",
            id:"TigerWit Compliance Department"
        },
        amtConditions60:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtStatement1:{
            zh:"客户声明",
            en:"Declaration by Client",
            vi:"Tuyên bố của khách hàng",
            "zh-Hant":"客戶聲明",
            id:"Penyataan Klien"
        },
        amtStatement2:{
            zh:"本人已阅读跟随外汇交易的相关《风险披露书》、《TigerWit交易平台风险提示免责条款》，并已完全理解和接受上述文件的全部内容，清楚了解跟单交易的内容及可能出现的风险。本人的投资决策完全基于本人的独立自主判断做出，并自愿承担因此产生的相关风险和全部后果。",
            en:"I have read the Risk Disclosure Statement related to foreign exchange trade and Risk Warning and Exemptions for Trading on TigerWit Trading Platform, and have fully understood and accepted all contents contained in the above documents and learnt and acknowledged the contents and potential risks of order following trade. The investment decision of mine is made fully based on my independent judgment and I will bear all related risks and all consequences incurred thereby.",
            vi:"Tôi đã đọc Tuyên bố Tiết lộ Rủi ro liên quan đến giao dịch ngoại hối và Cảnh báo Rủi ro và Miễn trừ Giao dịch trên Sàn Giao dịch TigerWit, và đã hiểu và chấp nhận đầy đủ tất cả các nội dung trong các tài liệu trên và đã học và thừa nhận nội dung và rủi ro . Quyết định đầu tư của tôi được thực hiện hoàn toàn dựa trên phán quyết độc lập của tôi và tôi sẽ chịu mọi rủi ro liên quan và mọi hậu quả phát sinh từ đó.",
            "zh-Hant":"本人已閱讀跟隨外匯交易的相關《風險披露書》、《TigerWit交易平臺風險提示免責條款》，並已完全理解和接受上述文件的全部內容，清楚了解跟單交易的內容及可能出現的風險。本人的投資決策完全基於本人的獨立自主判斷做出，並自願承擔因此產生的相關風險和全部後果。",
            id:"I have read the Risk Disclosure Statement related to foreign exchange trade and Risk Warning and Exemptions for Trading on TigerWit Trading Platform, and have fully understood and accepted all contents contained in the above documents and learnt and acknowledged the contents and potential risks of order following trade. The investment decision of mine is made fully based on my independent judgment and I will bear all related risks and all consequences incurred thereby."
        },
        amtStatement3:{
            zh:"我同意并特此授权TigerWit作为我的委托人，自我点击“同意”此项授权之时起，以我的名义代我行使交易之权利，并同意采用跟单方式跟随我自选的“交易高手”的信号进行交易，由此产生的一切责任和风险均由我个人承担。",
            en:"I agree and hereby appoint TigerWit as my consignor, which will exercise the trading right on behalf of me after I clicked \"Agree\", and agree to make trade in the mode of following the \"trading master\" opted by me and all obligations and risks produced thereby shall be undertaken by myself.",
            vi:"Tôi đồng ý và chỉ định TigerWit làm người cung cấp dịch vụ của mình, sẽ thực hiện quyền giao dịch thay mặt cho tôi sau khi tôi nhấp vào \"Đồng ý\" và đồng ý giao dịch theo phương thức \"bậc thầy\" được tôi chọn và mọi nghĩa vụ và rủi ro do đó nảy sinh sẽ do chính tôi chịu trách nhiệm.",
            "zh-Hant":"我同意並特此授權TigerWit作為我的委托人，自我點擊“同意”此項授權之時起，以我的名義代我行使交易之權利，並同意采用跟單方式跟隨我自選的“交易高手”的信號進行交易，由此產生的壹切責任和風險均由我個人承擔。",
            id:"I agree and hereby appoint TigerWit as my consignor, which will exercise the trading right on behalf of me after I clicked \"Agree\", and agree to make trade in the mode of following the \"trading master\" opted by me and all obligations and risks produced thereby shall be undertaken by myself."
        },
        amtStatement4:{
            zh:"我已知晓TigerWit的跟单规则：按照跟随资金与“交易高手”账户资金等比例开仓，不足0.01的按照0.01开仓，开仓订单即为跟随订单。我已知晓在TigerWit开户的所有客户均可以成为TigerWit的“交易高手”，TigerWit对于其客户成为“交易高手”没有设定具体的条件和标准。",
            en:"I have acknowledged the following rules of TigerWit that position will be opened based on the proportion between following capital and capital in account of the \"trading master\" and that position will be opened based on that of 0.01 for those less than 0.01 and the open order would be the following order.I have known that all customers in the TigerWit's foreign exchange accounts can become a foreign exchange trading master, tiger foreign exchange for its customers to become a trading master did not set specific conditions and standards.",
            vi:"Tôi đã thừa nhận các quy tắc sau đây của TigerWit rằng vị thế sẽ được mở dựa trên tỷ lệ giữa vốn và vốn trong tài khoản của \"nhà giao dịch chính\" và vị thế đó sẽ được mở dựa trên 0.01 cho những lệnh nhỏ hơn 0.01 và lệnh mở sẽ là lệnh sao chép theo sau.NODE-loadERR",
            "zh-Hant":"我已知曉TigerWit的跟單規則：按照跟隨資金與“交易高手”賬戶資金等比例開倉，不足0.01的按照0.01開倉，開倉訂單即為跟隨訂單。我已知曉在TigerWit開戶的所有客戶均可以成為TigerWit的“交易高手”，TigerWit對於其客戶成為“交易高手”沒有設定具體的條件和標準。",
            id:"I have acknowledged the following rules of TigerWit that position will be opened based on the proportion between following capital and capital in account of the \"trading master\" and that position will be opened based on that of 0.01 for those less than 0.01 and the open order would be the following order.I have known that all customers in the TigerWit's foreign exchange accounts can become a foreign exchange trading master, tiger foreign exchange for its customers to become a trading master did not set specific conditions and standards."
        },
        amtStatement5:{
            zh:"我同意并授权TigerWit从我在任一自然月内已平仓的订单实时扣除20%利润，并于下一自然月15日前核对上一自然月整体盈利金额并核算佣金或奖金后，将其支付给“交易高手”作为跟单佣金或奖励。我确定已知晓跟单交易中存在的风险，知晓“交易高手”历史成绩或历史业绩不代表未来成绩或业绩，任何跟单操作导致的损失及责任由我个人承担。",
            en:"I agree and authorize TigerWit to deduct 20% profits in real time from the concluded order at any natural month and check the overall amount of profits of the previous natural month prior to the 15th day of the following month. The 20% profit is the only fee for “trading master”. In addition, after calculating the commissions or bonuses, they will be paid to the \"trading master\" as commissions or bonuses for the following orders. I have confirmed and acknowledged that there are risks in order following trading and also learned that the historical performance of the \"trading master\" does not represent performance in the future and that all losses and responsibilities incurred by order following shall be borne by myself.",
            vi:"Tôi đồng ý và ủy quyền cho TigerWit khấu trừ 20% lợi nhuận trong thời gian thực từ lệnh đã kết thúc vào bất kỳ tháng tự nhiên nào và kiểm tra tổng số lợi nhuận của tháng trước đó trước ngày 15 của tháng tiếp theo. Ngoài ra, sau khi tính tiền hoa hồng hoặc tiền thưởng, khoản tiền này sẽ được trả cho \"bậc thầy\" làm hoa hồng hoặc tiền thưởng cho các lệnh sao chép theo sau. Tôi đã xác nhận và thừa nhận rằng có những rủi ro trong giao dịch sau và cũng biết rằng hiệu suất trước đây trong quá khứ của \"bậc thầy\" không đại diện cho kết quả trong tương lai và tất cả các tổn thất và trách nhiệm phát sinh do lệnh sao chép sao chép sẽ do chính bản thân tôi chịu.",
            "zh-Hant":"我同意並授權TigerWit從我在任壹自然月內已平倉的訂單實時扣除20%利潤，並於下壹自然月15日前核對上壹自然月整體盈利金額並核算傭金或獎金後，將其支付給“交易高手”作為跟單傭金或獎勵。我確定已知曉跟單交易中存在的風險，知曉“交易高手”歷史成績或歷史業績不代表未來成績或業績，任何跟單操作導致的損失及責任由我個人承擔。",
            id:"I agree and authorize TigerWit to deduct 20% profits in real time from the concluded order at any natural month and check the overall amount of profits of the previous natural month prior to the 15th day of the following month. The 20% profit is the only fee for “trading master”. In addition, after calculating the commissions or bonuses, they will be paid to the \"trading master\" as commissions or bonuses for the following orders. I have confirmed and acknowledged that there are risks in order following trading and also learned that the historical performance of the \"trading master\" does not represent performance in the future and that all losses and responsibilities incurred by order following shall be borne by myself."
        },
        amtStatement6:{
            zh:"TigerWit交易平台风险提示及免责条款",
            en:"Risk Warning and Exemptions for Trading on TigerWit Trading Platform",
            vi:"Cảnh báo rủi ro và miễn trừ giao dịch trên nền tảng giao dịch TigerWit",
            "zh-Hant":"TigerWit交易平臺風險提示及免責條款",
            id:"Risk Warning and Exemptions for Trading on TigerWit Trading Platform"
        },
        amtStatement7:{
            zh:"1. TigerWit交易平台是从事为个人投资者提供全球化社交化投资平台， TigerWit向投资者提供的一切服务，均依托于法律法规之约束。",
            en:"1. TigerWit trading platform is a global social investment platform for individual investors and all services rendered by TigerWit are all in compliance with the law.",
            vi:"1. Nền tảng giao dịch TigerWit là một nền tảng đầu tư xã hội toàn cầu cho các nhà đầu tư cá nhân và tất cả các dịch vụ do TigerWit cung cấp đều tuân thủ luật pháp.",
            "zh-Hant":"1. TigerWit交易平臺是從事為個人投資者提供全球化社交化投資平臺， TigerWit向投資者提供的壹切服務，均依托於法律法規之約束。",
            id:"1. TigerWit trading platform is a global social investment platform for individual investors and all services rendered by TigerWit are all in compliance with the law."
        },
        amtStatement8:{
            zh:"2. TigerWit仅就跟单服务承担其责任，对于任何客户的任何操作（包括但不限于以“交易高手”之交易行为作为基础的跟单交易行为），其交易风险和交易结果均由客户自行承担。",
            en:"2. TigerWit shall bear responsibilities for the order following services rendered, while all trading risks and consequences incurred by any operation (including but not limited to order following trade based on the trading behaviors of the \"trading master\") of any clients shall be borne by the client.",
            vi:"2. TigerWit chịu trách nhiệm về lệnh dịch vụ sao chép lệnh được cung cấp, trong khi tất cả các rủi ro và hậu quả kinh doanh phát sinh từ bất kỳ hoạt động nào (bao gồm nhưng không giới hạn các lệnh giao dịch sao chép dựa trên hành vi giao dịch của \"bậc thầy\") của bất kỳ khách hàng nào sẽ do khách hàng chịu.",
            "zh-Hant":"2. TigerWit僅就跟單服務承擔其責任，對於任何客戶的任何操作（包括但不限於以“交易高手”之交易行為作為基礎的跟單交易行為），其交易風險和交易結果均由客戶自行承擔。",
            id:"2. TigerWit shall bear responsibilities for the order following services rendered, while all trading risks and consequences incurred by any operation (including but not limited to order following trade based on the trading behaviors of the \"trading master\") of any clients shall be borne by the client."
        },
        amtStatement9:{
            zh:"3. TigerWit不承担任何客户的任何交易盈亏风险或交易损失，除非有任何相反证据表明TigerWit对于某项交易应承担部分或全部风险或责任。",
            en:"3. TigerWit shall not bear any profit and loss risks in trading or trading losses, unless there is any evidence proving that TigerWit should assume partial or all risks or responsibilities for a certain trade.",
            vi:"3. TigerWit không chịu bất kỳ rủi ro lợi nhuận và lỗ nào khi giao dịch hoặc thua lỗ khi giao dịch, trừ khi có bất kỳ bằng chứng chứng minh rằng TigerWit nên chịu một phần hoặc toàn bộ rủi ro hoặc trách nhiệm đối với một giao dịch nhất định.",
            "zh-Hant":"3. TigerWit不承擔任何客戶的任何交易盈虧風險或交易損失，除非有任何相反證據表明TigerWit對於某項交易應承擔部分或全部風險或責任。",
            id:"3. TigerWit shall not bear any profit and loss risks in trading or trading losses, unless there is any evidence proving that TigerWit should assume partial or all risks or responsibilities for a certain trade."
        },
        amtStatement10:{
            zh:"4. TigerWit网站出现的任何信息包括但不限于评论、预测、图表、指标、理论、直接的或暗示的指示均只作为参考，您须对任何自主决定的行为负责。",
            en:"4. Any information on TigerWit's website, including but not limited to comment, forecast, charts, indicators, theories, explicit or implied instructions, is for reference only. The investor shall bear liabilities on his/her own for any independent decisions.",
            vi:"4. Bất kỳ thông tin nào trên trang web của TigerWit, bao gồm nhưng không giới hạn bình luận, dự báo, biểu đồ, chỉ số, lý thuyết, hướng dẫn rõ ràng hoặc ẩn ý nào, chỉ là để tham khảo. Chủ đầu tư tự chịu trách nhiệm về bất kỳ quyết định độc lập nào.",
            "zh-Hant":"4. TigerWit網站出現的任何信息包括但不限於評論、預測、圖表、指標、理論、直接的或暗示的指示均只作為參考，您須對任何自主決定的行為負責。",
            id:"4. Any information on TigerWit's website, including but not limited to comment, forecast, charts, indicators, theories, explicit or implied instructions, is for reference only. The investor shall bear liabilities on his/her own for any independent decisions."
        },
        amtStatement11:{
            zh:"5. TigerWit所提供之“交易高手”及相关信息，TigerWit保证其历史数据的准确性，TigerWit不对因上述资料全部或部分内容产生的或因依赖该资料而引致的任何损失承担任何责任。",
            en:"5. As for the \"trading masters\" and relevant information offered by TigerWit, TigerWit shall guarantee the accuracy of the historical data thereof, but shall not bear any liability for any losses caused by partial or all the above information or incurred by reliance on the above information.",
            vi:"5. Đối với \"bậc thầy \" và thông tin liên quan do TigerWit cung cấp, TigerWit phải đảm bảo tính chính xác của dữ liệu trong lịch sử, nhưng sẽ không chịu bất kỳ trách nhiệm nào đối với bất kỳ tổn thất nào phát sinh dựa trên một phần hoặc toàn bộ thông tin trên.",
            "zh-Hant":"5. TigerWit所提供之“交易高手”及相關信息，TigerWit保證其歷史數據的準確性，TigerWit不對因上述資料全部或部分內容產生的或因依賴該資料而引致的任何損失承擔任何責任。",
            id:"5. As for the \"trading masters\" and relevant information offered by TigerWit, TigerWit shall guarantee the accuracy of the historical data thereof, but shall not bear any liability for any losses caused by partial or all the above information or incurred by reliance on the above information."
        },
        amtStatement12:{
            zh:"6. TigerWit对于使用的跟单服务或无法使用跟单服务所导致的任何直接、间接、衍生或特别损害，不负任何赔偿责任，除非有任何相反证据表明TigerWit应对此承担责任。",
            en:"6. TigerWit shall not assume any liability for compensation for any direct, indirect, derived or special losses due to use or failure to use order following services, unless there is any evidence proving that TigerWit shall be responsible for such losses.",
            vi:"6. TigerWit không chịu trách nhiệm bồi thường cho bất kỳ tổn thất trực tiếp, gián tiếp, có nguồn gốc hoặc đặc biệt nào do sử dụng hoặc không sử dụng các dịch vụ sao chép sao chép lệnh giao dịch, trừ khi có bất kỳ bằng chứng nào chứng minh rằng TigerWit chịu trách nhiệm về những tổn thất đó.",
            "zh-Hant":"6. TigerWit對於使用的跟單服務或無法使用跟單服務所導致的任何直接、間接、衍生或特別損害，不負任何賠償責任，除非有任何相反證據表明TigerWit應對此承擔責任。",
            id:"6. TigerWit shall not assume any liability for compensation for any direct, indirect, derived or special losses due to use or failure to use order following services, unless there is any evidence proving that TigerWit shall be responsible for such losses."
        },
        amtStatement13:{
            zh:"7. TigerWit可能因合作方或网络提供商或电信部门的互联网软硬件设备故障或失灵、或人为操作疏忽而全部或部分中断、延迟、遗漏、误导或造成资料传输或储存上的错误、或遭第三人侵入系统篡改或伪造变造资料等，除非有相反证据否则TigerWit不承担任何责任。",
            en:"7. In case of partial or full interruption, delay, misdirection or wrong data transmission or storage due to malfunction or failure of Internet software and hardware devices or human errors, or in case of garbled or forged data by third-party invasion system, TigerWit shall not bear any liabilities unless there is any contrary evidence.",
            vi:"7. Trong trường hợp gián đoạn một phần hoặc toàn bộ, trì hoãn, chuyển hướng sai hoặc truyền dữ liệu sai hoặc lưu trữ do sự cố hoặc lỗi của phần mềm Internet và thiết bị phần cứng hoặc lỗi của con người hoặc trong trường hợp dữ liệu bị cắt xén hoặc giả mạo bởi hệ thống xâm nhập của bên thứ ba, TigerWit sẽ không chịu bất kỳ khoản nợ nào trừ khi có bất kỳ bằng chứng nào ngược lại.",
            "zh-Hant":"7. TigerWit可能因合作方或網絡提供商或電信部門的互聯網軟硬件設備故障或失靈、或人為操作疏忽而全部或部分中斷、延遲、遺漏、誤導或造成資料傳輸或儲存上的錯誤、或遭第三人侵入系統篡改或偽造變造資料等，除非有相反證據否則TigerWit不承擔任何責任。",
            id:"7. In case of partial or full interruption, delay, misdirection or wrong data transmission or storage due to malfunction or failure of Internet software and hardware devices or human errors, or in case of garbled or forged data by third-party invasion system, TigerWit shall not bear any liabilities unless there is any contrary evidence."
        },
        amtStatement14:{
            zh:"8. TigerWit在获得客户同意并授权的情况下，可以为客户开启跟单操作及进行跟单交易、按约定实时扣除客户跟单净利润盈利中的20%支付给“交易高手”作为佣金或奖励。客户已知晓并同意接受该跟单交易模式，接受利润扣除方案，并愿意接受该交易模式的交易风险。",
            en:"8. With the consent and authorization of the client, TigerWit can initiate order following operation, perform order following transactions and deduct 20% of net profits earned by the client by order following to pay to the \"trading master\" as commissions or bonuses. The client has acknowledged and agreed to accept this order following mode and the profit deduction scheme and is also willing to bear the trading risks caused thereby.",
            vi:"8. Với sự đồng ý và ủy quyền của khách hàng, TigerWit có thể kích hoạt hoạt động của lệnh sao chép theo sau, thực hiện các giao dịch sao chép và trừ 20% lợi nhuận ròng mà khách hàng thu được nhờ lệnh sao chép để trả cho \"bậc thầy \" làm hoa hồng hoặc tiền thưởng. Khách hàng đã thừa nhận và đồng ý chấp nhận lệnh này theo phương thức và phương án khấu trừ lợi nhuận và cũng sẵn sàng chịu rủi ro giao dịch do đó gây ra.",
            "zh-Hant":"8. TigerWit在獲得客戶同意並授權的情況下，可以為客戶開啟跟單操作及進行跟單交易、按約定實時扣除客戶跟單凈利潤盈利中的20%支付給“交易高手”作為傭金或獎勵。客戶已知曉並同意接受該跟單交易模式，接受利潤扣除方案，並願意接受該交易模式的交易風險。",
            id:"8. With the consent and authorization of the client, TigerWit can initiate order following operation, perform order following transactions and deduct 20% of net profits earned by the client by order following to pay to the \"trading master\" as commissions or bonuses. The client has acknowledged and agreed to accept this order following mode and the profit deduction scheme and is also willing to bear the trading risks caused thereby."
        },
        copytransaction0:{
            zh:"复制交易声明",
            en:"Trade Copying Declaration",
            vi:"Tuyên bố sao chép thương mại",
            "zh-Hant":"復制交易聲明",
            id:"Trade Copying Declaration"
        },
        copytransaction6:{
            zh:"TigerWit交易平台风险提示及免责条款",
            en:"Risk Warning and Exemptions for Trading on TigerWit Trading Platform",
            vi:"Cảnh báo rủi ro và miễn trừ giao dịch trên nền tảng giao dịch TigerWit",
            "zh-Hant":"TigerWit交易平臺風險提示及免責條款",
            id:"Risk Warning and Exemptions for Trading on TigerWit Trading Platform"
        },
        copytransaction7:{
            zh:"1. TigerWit交易平台是从事为个人投资者提供全球化社交化投资平台， TigerWit向投资者提供的一切服务，均依托于法律法规之约束。",
            en:"1. TigerWit trading platform is a global social investment platform for individual investors and all services rendered by TigerWit are all in compliance with the law.",
            vi:"1. Nền tảng giao dịch TigerWit là một nền tảng đầu tư xã hội toàn cầu cho các nhà đầu tư cá nhân và tất cả các dịch vụ do TigerWit cung cấp đều tuân thủ luật pháp.",
            "zh-Hant":"1. TigerWit交易平臺是從事為個人投資者提供全球化社交化投資平臺， TigerWit向投資者提供的壹切服務，均依托於法律法規之約束。",
            id:"1. TigerWit trading platform is a global social investment platform for individual investors and all services rendered by TigerWit are all in compliance with the law."
        },
        copytransaction8:{
            zh:"2. TigerWit仅就跟单服务承担其责任，对于任何客户的任何操作（包括但不限于以“交易高手”之交易行为作为基础的跟单交易行为），其交易风险和交易结果均由客户自行承担。",
            en:"2. TigerWit shall bear responsibilities for the order following services rendered, while all trading risks and consequences incurred by any operation (including but not limited to order following trade based on the trading behaviours of the \"trading master\") of any clients shall be borne by the client.",
            vi:"2. TigerWit chịu trách nhiệm về lệnh dịch vụ sao chép lệnh được cung cấp, trong khi tất cả các rủi ro và hậu quả kinh doanh phát sinh từ bất kỳ hoạt động nào (bao gồm nhưng không giới hạn các lệnh giao dịch sao chép dựa trên hành vi giao dịch của \"bậc thầy\") của bất kỳ khách hàng nào sẽ do khách hàng chịu.",
            "zh-Hant":"2. TigerWit僅就跟單服務承擔其責任，對於任何客戶的任何操作（包括但不限於以“交易高手”之交易行為作為基礎的跟單交易行為），其交易風險和交易結果均由客戶自行承擔。",
            id:"2. TigerWit shall bear responsibilities for the order following services rendered, while all trading risks and consequences incurred by any operation (including but not limited to order following trade based on the trading behaviours of the \"trading master\") of any clients shall be borne by the client."
        },
        copytransaction9:{
            zh:"3. TigerWit不承担任何客户的任何交易盈亏风险或交易损失，除非有任何相反证据表明TigerWit对于某项交易应承担部分或全部风险或责任。",
            en:"3. TigerWit shall not bear any profit and loss risks in trading or trading losses, unless there is any evidence proving that TigerWit should assume partial or all risks or responsibilities for a certain trade.",
            vi:"3. TigerWit không chịu bất kỳ rủi ro lợi nhuận và lỗ nào khi giao dịch hoặc thua lỗ khi giao dịch, trừ khi có bất kỳ bằng chứng chứng minh rằng TigerWit nên chịu một phần hoặc toàn bộ rủi ro hoặc trách nhiệm đối với một giao dịch nhất định.",
            "zh-Hant":"3. TigerWit不承擔任何客戶的任何交易盈虧風險或交易損失，除非有任何相反證據表明TigerWit對於某項交易應承擔部分或全部風險或責任。",
            id:"3. TigerWit shall not bear any profit and loss risks in trading or trading losses, unless there is any evidence proving that TigerWit should assume partial or all risks or responsibilities for a certain trade."
        },
        copytransaction10:{
            zh:"4. TigerWit网站出现的任何信息包括但不限于评论、预测、图表、指标、理论、直接的或暗示的指示均只作为参考，您须对任何自主决定的行为负责。",
            en:"4. Any information on TigerWit's website, including but not limited to comment, forecast, charts, indicators, theories, explicit or implied instructions, is for reference only. The investor shall bear liabilities on his/her own for any independent decisions.",
            vi:"4. Bất kỳ thông tin nào trên trang web của TigerWit, bao gồm nhưng không giới hạn bình luận, dự báo, biểu đồ, chỉ số, lý thuyết, hướng dẫn rõ ràng hoặc ẩn ý nào, chỉ là để tham khảo. Chủ đầu tư tự chịu trách nhiệm về bất kỳ quyết định độc lập nào.",
            "zh-Hant":"4. TigerWit網站出現的任何信息包括但不限於評論、預測、圖表、指標、理論、直接的或暗示的指示均只作為參考，您須對任何自主決定的行為負責。",
            id:"4. Any information on TigerWit's website, including but not limited to comment, forecast, charts, indicators, theories, explicit or implied instructions, is for reference only. The investor shall bear liabilities on his/her own for any independent decisions."
        },
        copytransaction11:{
            zh:"5. TigerWit所提供之“交易高手”及相关信息，TigerWit保证其历史数据的准确性，TigerWit不对因上述资料全部或部分内容产生的或因依赖该资料而引致的任何损失承担任何责任。",
            en:"5. As for the \"trading masters\" and relevant information offered by TigerWit, TigerWit shall guarantee the accuracy of the historical data thereof, but shall not bear any liability for any losses caused by partial or all the above information or incurred by reliance on the above information.",
            vi:"5. Đối với \"bậc thầy \" và thông tin liên quan do TigerWit cung cấp, TigerWit phải đảm bảo tính chính xác của dữ liệu trong lịch sử, nhưng sẽ không chịu bất kỳ trách nhiệm nào đối với bất kỳ tổn thất nào phát sinh dựa trên một phần hoặc toàn bộ thông tin trên.",
            "zh-Hant":"5. TigerWit所提供之“交易高手”及相關信息，TigerWit保證其歷史數據的準確性，TigerWit不對因上述資料全部或部分內容產生的或因依賴該資料而引致的任何損失承擔任何責任。",
            id:"5. As for the \"trading masters\" and relevant information offered by TigerWit, TigerWit shall guarantee the accuracy of the historical data thereof, but shall not bear any liability for any losses caused by partial or all the above information or incurred by reliance on the above information."
        },
        copytransaction12:{
            zh:"6. TigerWit对于使用的跟单服务或无法使用跟单服务所导致的任何直接、间接、衍生或特别损害，不负任何赔偿责任，除非有任何相反证据表明TigerWit应对此承担责任。",
            en:"6. TigerWit shall not assume any liability for compensation for any direct, indirect, derived or special losses due to use or failure to use order following services, unless there is any evidence proving that TigerWit shall be responsible for such losses.",
            vi:"6. TigerWit không chịu trách nhiệm bồi thường cho bất kỳ tổn thất trực tiếp, gián tiếp, có nguồn gốc hoặc đặc biệt nào do sử dụng hoặc không sử dụng các dịch vụ sao chép sao chép lệnh giao dịch, trừ khi có bất kỳ bằng chứng nào chứng minh rằng TigerWit chịu trách nhiệm về những tổn thất đó.",
            "zh-Hant":"6. TigerWit對於使用的跟單服務或無法使用跟單服務所導致的任何直接、間接、衍生或特別損害，不負任何賠償責任，除非有任何相反證據表明TigerWit應對此承擔責任。",
            id:"6. TigerWit shall not assume any liability for compensation for any direct, indirect, derived or special losses due to use or failure to use order following services, unless there is any evidence proving that TigerWit shall be responsible for such losses."
        },
        copytransaction13:{
            zh:"7. TigerWit可能因合作方或网络提供商或电信部门的互联网软硬件设备故障或失灵、或人为操作疏忽而全部或部分中断、延迟、遗漏、误导或造成资料传输或储存上的错误、或遭第三人侵入系统篡改或伪造变造资料等，除非有相反证据否则TigerWit不承担任何责任。",
            en:"7. In case of partial or full interruption, delay, misdirection or wrong data transmission or storage due to malfunction or failure of Internet software and hardware devices or human errors, or in case of garbled or forged data by third-party invasion system, TigerWit shall not bear any liabilities unless there is any contrary evidence.",
            vi:"7. Trong trường hợp gián đoạn một phần hoặc toàn bộ, trì hoãn, chuyển hướng sai hoặc truyền dữ liệu sai hoặc lưu trữ do sự cố hoặc lỗi của phần mềm Internet và thiết bị phần cứng hoặc lỗi của con người hoặc trong trường hợp dữ liệu bị cắt xén hoặc giả mạo bởi hệ thống xâm nhập của bên thứ ba, TigerWit sẽ không chịu bất kỳ khoản nợ nào trừ khi có bất kỳ bằng chứng nào ngược lại.",
            "zh-Hant":"7. TigerWit可能因合作方或網絡提供商或電信部門的互聯網軟硬件設備故障或失靈、或人為操作疏忽而全部或部分中斷、延遲、遺漏、誤導或造成資料傳輸或儲存上的錯誤、或遭第三人侵入系統篡改或偽造變造資料等，除非有相反證據否則TigerWit不承擔任何責任。",
            id:"7. In case of partial or full interruption, delay, misdirection or wrong data transmission or storage due to malfunction or failure of Internet software and hardware devices or human errors, or in case of garbled or forged data by third-party invasion system, TigerWit shall not bear any liabilities unless there is any contrary evidence."
        },
        copytransaction14:{
            zh:"8. TigerWit在获得客户同意并授权的情况下，可以为客户开启跟单操作及进行跟单交易、按约定实时扣除客户跟单净利润盈利中的20%支付给“交易高手”作为佣金或奖励。客户已知晓并同意接受该跟单交易模式，接受利润扣除方案，并愿意接受该交易模式的交易风险。",
            en:"8. With the consent and authorization of the client, TigerWit can initiate order following operation, perform order following transactions and deduct 20% of net profits earned by the client by order following to pay to the \"trading master\" as commissions or bonuses. The client has acknowledged and agreed to accept this order following mode and the profit deduction scheme and is also willing to bear the trading risks caused thereby.",
            vi:"8. Với sự đồng ý và ủy quyền của khách hàng, TigerWit có thể kích hoạt hoạt động của lệnh sao chép theo sau, thực hiện các giao dịch sao chép và trừ 20% lợi nhuận ròng mà khách hàng thu được nhờ lệnh sao chép để trả cho \"bậc thầy \" làm hoa hồng hoặc tiền thưởng. Khách hàng đã thừa nhận và đồng ý chấp nhận lệnh này theo phương thức và phương án khấu trừ lợi nhuận và cũng sẵn sàng chịu rủi ro giao dịch do đó gây ra.",
            "zh-Hant":"8. TigerWit在獲得客戶同意並授權的情況下，可以為客戶開啟跟單操作及進行跟單交易、按約定實時扣除客戶跟單凈利潤盈利中的20%支付給“交易高手”作為傭金或獎勵。客戶已知曉並同意接受該跟單交易模式，接受利潤扣除方案，並願意接受該交易模式的交易風險。",
            id:"8. With the consent and authorization of the client, TigerWit can initiate order following operation, perform order following transactions and deduct 20% of net profits earned by the client by order following to pay to the \"trading master\" as commissions or bonuses. The client has acknowledged and agreed to accept this order following mode and the profit deduction scheme and is also willing to bear the trading risks caused thereby."
        },
        copytransaction1:{
            zh:"客户声明",
            en:"Declaration by Client",
            vi:"Tuyên bố của khách hàng",
            "zh-Hant":"客戶聲明",
            id:"Penyataan Klien"
        },
        copytransaction2:{
            zh:"本人已阅读跟随外汇交易的相关《风险披露书》、《TigerWit交易平台风险提示免责条款》，并已完全理解和接受上述文件的全部内容，清楚了解跟单交易的内容及可能出现的风险。本人的投资决策完全基于本人的独立自主判断做出，并自愿承担因此产生的相关风险和全部后果。",
            en:"I have read the Risk Disclosure Statement related to foreign exchange trade and Risk Warning and Exemptions for Trading on TigerWit Trading Platform, and have fully understood and accepted all contents contained in the above documents and learnt and acknowledged the contents and potential risks of order following trade. The investment decision of mine is made fully based on my independent judgment and I will bear all related risks and all consequences incurred thereby.",
            vi:"Tôi đã đọc Tuyên bố Tiết lộ Rủi ro liên quan đến giao dịch ngoại hối và Cảnh báo Rủi ro và Miễn trừ Giao dịch trên Sàn Giao dịch TigerWit, và đã hiểu và chấp nhận đầy đủ tất cả các nội dung trong các tài liệu trên và đã học và thừa nhận nội dung và rủi ro . Quyết định đầu tư của tôi được thực hiện hoàn toàn dựa trên phán quyết độc lập của tôi và tôi sẽ chịu mọi rủi ro liên quan và mọi hậu quả phát sinh từ đó.",
            "zh-Hant":"本人已閱讀跟隨外匯交易的相關《風險披露書》、《TigerWit交易平臺風險提示免責條款》，並已完全理解和接受上述文件的全部內容，清楚了解跟單交易的內容及可能出現的風險。本人的投資決策完全基於本人的獨立自主判斷做出，並自願承擔因此產生的相關風險和全部後果。",
            id:"I have read the Risk Disclosure Statement related to foreign exchange trade and Risk Warning and Exemptions for Trading on TigerWit Trading Platform, and have fully understood and accepted all contents contained in the above documents and learnt and acknowledged the contents and potential risks of order following trade. The investment decision of mine is made fully based on my independent judgment and I will bear all related risks and all consequences incurred thereby."
        },
        copytransaction3:{
            zh:"我同意并特此授权TigerWit作为我的委托人，自我点击“同意”此项授权之时起，以我的名义代我行使交易之权利，并同意采用跟单方式跟随我自选的“交易高手”的信号进行交易，由此产生的一切责任和风险均由我个人承担。",
            en:"I agree and hereby appoint TigerWit as my consignor, which will exercise the trading right on behalf of me after I click \"Agree\", and agree to make trades in the mode of following the \"trading master\" opted by me and all obligations and risks produced thereby shall be undertaken by myself.",
            vi:"Tôi đồng ý và chỉ định TigerWit làm người cung cấp dịch vụ của mình, sẽ thực hiện quyền giao dịch thay mặt cho tôi sau khi tôi nhấp vào \"Đồng ý\" và đồng ý giao dịch theo phương thức \"bậc thầy\" được tôi chọn và mọi nghĩa vụ và rủi ro do đó nảy sinh sẽ do chính tôi chịu trách nhiệm.",
            "zh-Hant":"我同意並特此授權TigerWit作為我的委托人，自我點擊“同意”此項授權之時起，以我的名義代我行使交易之權利，並同意采用跟單方式跟隨我自選的“交易高手”的信號進行交易，由此產生的壹切責任和風險均由我個人承擔。",
            id:"I agree and hereby appoint TigerWit as my consignor, which will exercise the trading right on behalf of me after I click \"Agree\", and agree to make trades in the mode of following the \"trading master\" opted by me and all obligations and risks produced thereby shall be undertaken by myself."
        },
        copytransaction4:{
            zh:"我已知晓TigerWit的跟单规则：按照跟随资金与“交易高手”账户资金等比例开仓，不足0.01的按照0.01开仓，开仓订单即为跟随订单。我已知晓在TigerWit开户的所有客户均可以成为TigerWit的“交易高手”，TigerWit对于其客户成为“交易高手”没有设定具体的条件和标准。",
            en:"I have acknowledged the following rules of TigerWit that position will be opened based on the proportion between following capital and capital in account of the \"trading master\" and that position will be opened based on that of 0.01 for those less than 0.01 and the open order would be the following order.I have known that all customers in the TigerWit's foreign exchange accounts can become a foreign exchange trading master, tiger foreign exchange for its customers to become a trading master did not set specific conditions and standards.",
            vi:"Tôi đã thừa nhận các quy tắc sau đây của TigerWit rằng vị thế sẽ được mở dựa trên tỷ lệ giữa vốn và vốn trong tài khoản của \"nhà giao dịch chính\" và vị thế đó sẽ được mở dựa trên 0.01 cho những lệnh nhỏ hơn 0.01 và lệnh mở sẽ là lệnh sao chép theo sau.NODE-loadERR",
            "zh-Hant":"我已知曉TigerWit的跟單規則：按照跟隨資金與“交易高手”賬戶資金等比例開倉，不足0.01的按照0.01開倉，開倉訂單即為跟隨訂單。我已知曉在TigerWit開戶的所有客戶均可以成為TigerWit的“交易高手”，TigerWit對於其客戶成為“交易高手”沒有設定具體的條件和標準。",
            id:"I have acknowledged the following rules of TigerWit that position will be opened based on the proportion between following capital and capital in account of the \"trading master\" and that position will be opened based on that of 0.01 for those less than 0.01 and the open order would be the following order.I have known that all customers in the TigerWit's foreign exchange accounts can become a foreign exchange trading master, tiger foreign exchange for its customers to become a trading master did not set specific conditions and standards."
        },
        copytransaction5:{
            zh:"我同意并授权TigerWit从我在任一自然月内已平仓的订单实时扣除20%利润，并于下一自然月15日前核对上一自然月整体盈利金额并核算佣金或奖金后，将其支付给“交易高手”作为跟单佣金或奖励。我确定已知晓跟单交易中存在的风险，知晓“交易高手”历史成绩或历史业绩不代表未来成绩或业绩，任何跟单操作导致的损失及责任由我个人承担。",
            en:"I agree and authorize TigerWit to deduct 20% profits in real time from the concluded order at any natural month and check the overall amount of profits of the previous natural month prior to the 15th day of the following month. In addition, after calculating the commissions or bonuses, they will be paid to the \"trading master\" as commissions or bonuses for the following orders. I have confirmed and acknowledged that there are risks in order following trading and also learned that the historical performance of the \"trading master\" does not represent performance in the future and that all losses and responsibilities incurred by order following shall be borne by myself.",
            vi:"Tôi đồng ý và ủy quyền cho TigerWit khấu trừ 20% lợi nhuận trong thời gian thực từ lệnh đã kết thúc vào bất kỳ tháng tự nhiên nào và kiểm tra tổng số lợi nhuận của tháng trước đó trước ngày 15 của tháng tiếp theo. Ngoài ra, sau khi tính tiền hoa hồng hoặc tiền thưởng, khoản tiền này sẽ được trả cho \"bậc thầy\" làm hoa hồng hoặc tiền thưởng cho các lệnh sao chép theo sau. Tôi đã xác nhận và thừa nhận rằng có những rủi ro trong giao dịch sau và cũng biết rằng hiệu suất trước đây trong quá khứ của \"bậc thầy\" không đại diện cho kết quả trong tương lai và tất cả các tổn thất và trách nhiệm phát sinh do lệnh sao chép sao chép sẽ do chính bản thân tôi chịu.",
            "zh-Hant":"我同意並授權TigerWit從我在任壹自然月內已平倉的訂單實時扣除20%利潤，並於下壹自然月15日前核對上壹自然月整體盈利金額並核算傭金或獎金後，將其支付給“交易高手”作為跟單傭金或獎勵。我確定已知曉跟單交易中存在的風險，知曉“交易高手”歷史成績或歷史業績不代表未來成績或業績，任何跟單操作導致的損失及責任由我個人承擔。",
            id:"I agree and authorize TigerWit to deduct 20% profits in real time from the concluded order at any natural month and check the overall amount of profits of the previous natural month prior to the 15th day of the following month. In addition, after calculating the commissions or bonuses, they will be paid to the \"trading master\" as commissions or bonuses for the following orders. I have confirmed and acknowledged that there are risks in order following trading and also learned that the historical performance of the \"trading master\" does not represent performance in the future and that all losses and responsibilities incurred by order following shall be borne by myself."
        },
        amtCategorization1:{
            zh:"序言",
            en:"Introduction",
            vi:"Giới thiệu",
            "zh-Hant":"序言",
            id:"Introduction"
        },
        amtCategorization2:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或“本公司”）在 巴 哈 马 国 注 册 成 立 （ 注 册 证 书 编 号198255B）。我们的注册办事处位于 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.TigerWit Limited (sau đây gọi tắt là \"TigerWit\", \"Công ty\" hoặc \"Công ty\") được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或“本公司”）在 巴 哈 馬 國 註 冊 成 立 （ 註 冊 證 書 編 號198255B）。我們的註冊辦事處位於 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtCategorization3:{
            zh:"2.无论是哪一种客户类型，本公司均不向客户提供投资建议。",
            en:"2.The Firm does not offer investment advice to its Client regardless of client categorization.",
            vi:"2.Công ty không cung cấp tư vấn đầu tư cho Khách hàng của mình bất kể phân loại khách hàng.",
            "zh-Hant":"2.無論是哪壹種客戶類型，本公司均不向客戶提供投資建議。",
            id:"2.The Firm does not offer investment advice to its Client regardless of client categorization."
        },
        amtCategorization4:{
            zh:"3.本公司对“客户”的定义如下：",
            en:"3.The Firm will assume a person whom the Firm provides, intends to provide or has provided",
            vi:"3.Công ty sẽ đảm nhận một người mà Công ty cung cấp, dự định cung cấp hoặc đã cung cấp",
            "zh-Hant":"3.本公司對“客戶”的定義如下：",
            id:"3.The Firm will assume a person whom the Firm provides, intends to provide or has provided"
        },
        amtCategorization5:{
            zh:"（a）在从事受监管活动过程中提供、打算提供或已经提供服务的人士；",
            en:"(a) a service in the course of carrying on a regulated activity, or ",
            vi:"(a) một dịch vụ trong quá trình thực hiện một hoạt động được quy định, hoặc",
            "zh-Hant":"（a）在從事受監管活動過程中提供、打算提供或已經提供服務的人士；",
            id:"(a) a service in the course of carrying on a regulated activity, or "
        },
        amtCategorization6:{
            zh:"（b）或提供、打算提供、已经提供辅助性服务的人士，均属于本公司的“客户”。客户包括潜在客户。",
            en:"(b) an ancillary service, is a “Client” of the Firm. A “Client” includes a potential client.",
            vi:"(b) một dịch vụ phụ trợ, là một “Khách hàng” của Công ty. \"Khách hàng\" bao gồm khách hàng tiềm năng.",
            "zh-Hant":"（b）或提供、打算提供、已經提供輔助性服務的人士，均屬於本公司的“客戶”。客戶包括潛在客戶。",
            id:"(b) an ancillary service, is a “Client” of the Firm. A “Client” includes a potential client."
        },
        amtCategorization7:{
            zh:"根据巴哈马证券监察委员会对金融投资推广的规定，如果公司向某人或可能向某人推广金融服务，那么该人士就是公司所联系或批准的“客户”。",
            en:"In relation to the SCB’s Financial Promotion rules, a person to whom a financial promotion is or is likely to be communicated is a “Client” of the Firm that communicates or approves it.",
            vi:"Liên quan đến các quy tắc Khuyến mãi tài chính của SCB, một người quảng cáo tài chính hoặc có khả năng được cho là là “Khách hàng” của Công ty truyền đạt hoặc phê duyệt nó.",
            "zh-Hant":"根據巴哈馬證券監察委員會對金融投資推廣的規定，如果公司向某人或可能向某人推廣金融服務，那麽該人士就是公司所聯系或批準的“客戶”。",
            id:"In relation to the SCB’s Financial Promotion rules, a person to whom a financial promotion is or is likely to be communicated is a “Client” of the Firm that communicates or approves it."
        },
        amtCategorization8:{
            zh:"分类标准",
            en:"Categorization Criteria",
            vi:"Tiêu chí phân loại",
            "zh-Hant":"分類標準",
            id:"Categorization Criteria"
        },
        amtCategorization9:{
            zh:"1.客户分类有三种。不同的类别享受不同级别的保护。",
            en:"1.There are three Client categories. Each category has a different level of protection afforded to it.",
            vi:"1.Có ba loại Khách hàng. Mỗi loại có một mức độ bảo vệ khác nhau dành cho từng loại.",
            "zh-Hant":"1.客戶分類有三種。不同的類別享受不同級別的保護。",
            id:"1.There are three Client categories. Each category has a different level of protection afforded to it."
        },
        amtCategorization10:{
            zh:"本公司会对客户进行适当的调查问卷，需要客户配合回答相关问题，以便了解客户对希望开设的交易账户所具备的相关交易经验和知识。",
            en:"As part of the Firm’s account opening procedure the Firm conducts an Appropriateness Test where the Client is asked a number of questions to enable the Firm to assess the Client’s experience and knowledge of trading for the requested trading account you wish to open.",
            vi:"Là một phần của thủ tục mở tài khoản của Công ty, Công ty tiến hành Kiểm tra mức độ phù hợp trong đó Khách hàng được hỏi một số câu hỏi để cho phép Công ty đánh giá kinh nghiệm của Khách hàng và kiến thức giao dịch cho tài khoản giao dịch mà bạn muốn mở.",
            "zh-Hant":"本公司會對客戶進行適當的調查問卷，需要客戶配合回答相關問題，以便了解客戶對希望開設的交易賬戶所具備的相關交易經驗和知識。",
            id:"As part of the Firm’s account opening procedure the Firm conducts an Appropriateness Test where the Client is asked a number of questions to enable the Firm to assess the Client’s experience and knowledge of trading for the requested trading account you wish to open."
        },
        amtCategorization11:{
            zh:"本公司会将所有客户自动归类为零售客户，并在本公司的客户协议中通知客户。",
            en:"The Firm will automatically categorise all Clients as a Retail Client as notified to the Client within the Firm’s Client Agreement.",
            vi:"Công ty sẽ tự động phân loại tất cả Khách hàng là Khách hàng cá nhân như được thông báo cho Khách hàng trong Thỏa thuận khách hàng của công ty.",
            "zh-Hant":"本公司會將所有客戶自動歸類為零售客戶，並在本公司的客戶協議中通知客戶。",
            id:"The Firm will automatically categorise all Clients as a Retail Client as notified to the Client within the Firm’s Client Agreement."
        },
        amtCategorization12:{
            zh:"若客户希望被重新分类，需要联系本公司并通过书面方式提出重新分类的申请，以便于本公司考虑和审核。",
            en:"If the Client wishes to be re-classified then the client should contact the Firm in writing with his/her/their re-categorization request for the Firm’s consideration and review.",
            vi:"Nếu Khách hàng muốn được phân loại lại thì khách hàng nên liên hệ với Công ty bằng văn bản với yêu cầu phân loại lại của anh ấy/ chị ấy/họ để Công ty cân nhắc và xem xét.",
            "zh-Hant":"若客戶希望被重新分類，需要聯系本公司並通過書面方式提出重新分類的申請，以便於本公司考慮和審核。",
            id:"If the Client wishes to be re-classified then the client should contact the Firm in writing with his/her/their re-categorization request for the Firm’s consideration and review."
        },
        amtCategorization13:{
            zh:"本公司保留不时审核客户分类的权利，必要时可能进行重新分类。",
            en:"The Firm reserves the right to review the Client’s categorization from time to time and may re- categorise you if necessary.",
            vi:"Công ty có quyền xem xét phân loại Khách hàng theo thời gian và có thể phân loại lại bạn nếu cần.",
            "zh-Hant":"本公司保留不時審核客戶分類的權利，必要時可能進行重新分類。",
            id:"The Firm reserves the right to review the Client’s categorization from time to time and may re- categorise you if necessary."
        },
        amtCategorization14:{
            zh:"相关法律设定的客户分类标准如下：",
            en:"The categorization criteria set by the relevant legislation for Clients are as follows: ",
            vi:"Các tiêu chí phân loại được đặt ra bởi pháp luật liên quan cho Khách hàng như sau:",
            "zh-Hant":"相關法律設定的客戶分類標準如下：",
            id:"The categorization criteria set by the relevant legislation for Clients are as follows: "
        },
        amtCategorization15:{
            zh:"2.“零售客户”是指不属于专业客户或和资格交易对手的个人或公司。一般而言，零售客户被视为在投资领域并无相关经验或经验不足的客户。因此，根据 SCB 的规定，零售客户有权获得最高级别的保护。包括：客户资金独立于本公司自有资金；获得金融申诉服务机构和金融服务赔偿计划的保障。",
            en:"2.‘Retail Client’ is a client who is not a Professional Client or an Eligible Counterparty. Generally, a Retail Client is not considered to have relevant or sufficient experience for investment business. Therefore, Retail Clients are afforded with the highest level of protection under SCB regulation. Such protection includes the segregation of client money from the Firm’s own money along with access to the Financial Ombudsman Service and the Financial Services Compensation Scheme.",
            vi:"2.Khách hàng Lẻ ’là khách hàng không phải là Khách hàng Chuyên nghiệp hoặc Đối tác với tư cách Pháp lý. Nói chung, một Khách hàng Lẻ không được coi là có kinh nghiệm có liên quan hoặc đủ để đầu tư kinh doanh. Do đó, Khách hàng Lẻ được hưởng mức bảo hộ cao nhất theo quy định của SCB. Sự bảo vệ này bao gồm việc phân chia tiền của khách hàng từ tiền riêng của Công ty cùng với quyền truy cập vào Dịch vụ Thanh tra Tài chính và Đề án Bồi thường Dịch vụ Tài chính.",
            "zh-Hant":"2.“零售客戶”是指不屬於專業客戶或和資格交易對手的個人或公司。壹般而言，零售客戶被視為在投資領域並無相關經驗或經驗不足的客戶。因此，根據 SCB 的規定，零售客戶有權獲得最高級別的保護。包括：客戶資金獨立於本公司自有資金；獲得金融申訴服務機構和金融服務賠償計劃的保障。",
            id:"2.‘Retail Client’ is a client who is not a Professional Client or an Eligible Counterparty. Generally, a Retail Client is not considered to have relevant or sufficient experience for investment business. Therefore, Retail Clients are afforded with the highest level of protection under SCB regulation. Such protection includes the segregation of client money from the Firm’s own money along with access to the Financial Ombudsman Service and the Financial Services Compensation Scheme."
        },
        amtCategorization16:{
            zh:"3.“专业客户”是指固有专业客户（PerSe Professional Client ） 或 选 择 性 专 业 客 户（Elective Prefessional Client）。",
            en:"3.‘Professional Client’ is a client that is either a per se professional client or an elective professional client",
            vi:"3.Khách hàng chuyên nghiệp ’là một khách hàng là khách hàng chuyên nghiệp hoặc một khách hàng chuyên nghiệp tự chọn",
            "zh-Hant":"3.“專業客戶”是指固有專業客戶（PerSe Professional Client ） 或 選 擇 性 專 業 客 戶（Elective Prefessional Client）。",
            id:"3.‘Professional Client’ is a client that is either a per se professional client or an elective professional client"
        },
        amtCategorization17:{
            zh:"4.“固有专业客户”",
            en:"4.‘Per Se Professional Client’",
            vi:"4.‘Khách Hàng Chuyên Nghiệp Cá Nhân’",
            "zh-Hant":"4.“固有專業客戶”",
            id:"4.‘Per Se Professional Client’"
        },
        amtCategorization18:{
            zh:"固有专业客户包括以下范围：",
            en:" ",
            vi:" ",
            "zh-Hant":"固有專業客戶包括以下範圍：",
            id:" "
        },
        amtCategorization19:{
            zh:"A 在金融市场中需要经授权并接受监管而运营的实体，包括：(1) 信贷机构；(2) 投资公司；(3) 任何其他获得授权和监管的金融机构；(4) 保险公司；(5) 集 体 投 资 基 金 （ Collective investmentschemes）或该类基金的管理公司；(6) 退休基金和退休基金的管理公司；(7) 商品或商品衍生工具交易商；(8) 任何其他机构投资者。",
            en:"A Per se professional client is an entity required to be authorised to operate in the financial markets, including: (1) A credit institution; (2) An investment firm; (3) Any other authorised and regulated financial institution; (4) An insurance company; (5) A collective investment scheme or the management company of such a scheme; (6) A pension fund or the management company of a pension fund; (7) A commodity or commodity derivative dealer; (8) Any other institutional investor.",
            vi:"Một khách hàng chuyên nghiệp Cá Nhân là một thực thể được cho phép hoạt động trên thị trường tài chính, bao gồm: (1) Một tổ chức tín dụng; (2) Một công ty đầu tư; (3) Bất kỳ tổ chức tài chính được ủy quyền và quản lý nào khác; (4) Một công ty bảo hiểm; (5) Một dự án kế hoạch đầu tư tập thể hoặc công ty quản lý của một dự án như vậy; (6) Một quỹ hưu trí hoặc công ty quản lý quỹ hưu trí; (7) Một đại lý phái sinh hàng hóa hoặc hàng hóa; (8) Bất kỳ nhà đầu tư tổ chức nào khác.",
            "zh-Hant":"A 在金融市場中需要經授權並接受監管而運營的實體，包括：(1) 信貸機構；(2) 投資公司；(3) 任何其他獲得授權和監管的金融機構；(4) 保險公司；(5) 集 體 投 資 基 金 （ Collective investmentschemes）或該類基金的管理公司；(6) 退休基金和退休基金的管理公司；(7) 商品或商品衍生工具交易商；(8) 任何其他機構投資者。",
            id:"A Per se professional client is an entity required to be authorised to operate in the financial markets, including: (1) A credit institution; (2) An investment firm; (3) Any other authorised and regulated financial institution; (4) An insurance company; (5) A collective investment scheme or the management company of such a scheme; (6) A pension fund or the management company of a pension fund; (7) A commodity or commodity derivative dealer; (8) Any other institutional investor."
        },
        amtCategorization20:{
            zh:"B 满足以下任意两个要求的大型企业：（1）公司资产总额达 2000 万美元或以上；（2）净营业额达 4000 万美元或以上；（3）自有资金达 200 万美元或以上。",
            en:"A large undertaking meeting two of the following conditions size requirements on a company basis: (1) Balance sheet total of $20 million or over; (2) New turnover of $40 million or over; (3) Own funds of $2 million or more.",
            vi:"Một công việc kinh doanh lớn đáp ứng hai yêu cầu điều kiện về quy mô sau đây trên cơ sở tiêu chí công ty: (1) Tổng số dư của bảng cân đối là 20 triệu đô la trở lên; (2) Doanh thu mới từ 40 triệu đô la trở lên; (3) Các quỹ riêng từ 2 triệu đô la trở lên.",
            "zh-Hant":"B 滿足以下任意兩個要求的大型企業：（1）公司資產總額達 2000 萬美元或以上；（2）凈營業額達 4000 萬美元或以上；（3）自有資金達 200 萬美元或以上。",
            id:"A large undertaking meeting two of the following conditions size requirements on a company basis: (1) Balance sheet total of $20 million or over; (2) New turnover of $40 million or over; (3) Own funds of $2 million or more."
        },
        amtCategorization21:{
            zh:"C 满足以下条件的大型企业或机构：",
            en:"Or, a large undertaking meeting any of the following conditions: ",
            vi:"Hoặc, một công việc kinh doanh lớn đáp ứng bất kỳ điều kiện nào sau đây: ",
            "zh-Hant":"C 滿足以下條件的大型企業或機構：",
            id:"Or, a large undertaking meeting any of the following conditions: "
        },
        amtCategorization22:{
            zh:"(a) 现有（或前两年内任一时间拥有）已催缴股本或净资产不少于 5000 万美元（或在同时期内等值外币金额）的法人团体（包括有限责任公司合伙企业），或法人团体的控股公司或子公司；",
            en:"(a) A body corporate (including a limited liability partnership) which has (or any of whose holding companies or subsidiaries has) (or has had at any time during the previous two years) called up share capital or net assets, of at least $50 million (or its equivalent in any other currency at the relevant time);",
            vi:"(a) Một thực thể Công ty (bao gồm cả công ty trách nhiệm hữu hạn) đã (hoặc bất kỳ công ty mẹ hoặc công ty con nào có) (hoặc đã có tại bất kỳ thời điểm nào trong hai năm trước) gọi vốn cổ phần hoặc tài sản ròng, ít nhất 50 triệu đô la (hoặc tương đương với bất kỳ loại tiền tệ nào khác tại thời điểm thích hợp);",
            "zh-Hant":"(a)現有（或前兩年內任壹時間擁有）已催繳股本或凈資產不少於 5000 萬美元（或在同時期內等值外幣金額）的法人團體（包括有限責任公司合夥企業），或法人團體的控股公司或子公司；",
            id:"(a) A body corporate (including a limited liability partnership) which has (or any of whose holding companies or subsidiaries has) (or has had at any time during the previous two years) called up share capital or net assets, of at least $50 million (or its equivalent in any other currency at the relevant time);"
        },
        amtCategorization23:{
            zh:"(b) 符合以下任意两项标准的企业（或其控股公司或子公司）：(i) 公司资产总额达 1250 万美元；(ii) 净营业额达 2500 万美元；(iii) 同时期内员工平均数量为 250 人；",
            en:"(b) An undertaking that meets (or any of whose holding companies or subsidiaries meets) two of the following tests: (i) A balance sheet total of $12.5m; (ii) A net turnover of $25m; (iii) An average number of employees during the year of 250;",
            vi:"(b) Một cam kết đáp ứng (hoặc bất kỳ công ty mẹ hoặc công ty con nào đáp ứng) hai trong số các điều kiện kiểm tra sau đây: (i) Tổng giá trị bảng cân đối kế toán là $ 12.5m; (ii) Doanh thu thuần là 25 triệu đô la; (iii) Số lượng nhân viên trung bình trong năm là 250;",
            "zh-Hant":"(b)符合以下任意兩項標準的企業（或其控股公司或子公司）：(i) 公司資產總額達 1250 萬美元；(ii) 凈營業額達 2500 萬美元；(iii) 同時期內員工平均數量為 250 人；",
            id:"(b) An undertaking that meets (or any of whose holding companies or subsidiaries meets) two of the following tests: (i) A balance sheet total of $12.5m; (ii) A net turnover of $25m; (iii) An average number of employees during the year of 250;"
        },
        amtCategorization24:{
            zh:"(c) 现有（或前两年内任一时间拥有）净资产不少于 500 万美元（或在同时期内的等值外币金额）的合伙企业或非法人团体，且在有限合伙关系的情况下相关资产包含任何合伙人的负债；",
            en:"(c) A partnership or unincorporated association which has (or has had at any time during the previous two years) net assets of at least $5 million (or its equivalent in any other currency at the relevant time) and calculated in the case of a limited partnership without deducting loans owing to any of the partners;",
            vi:"(c) Đối tác hoặc một tổ chức không có tư cách pháp nhân (hoặc đã có bất kỳ lúc nào trong hai năm trước) tài sản ròng ít nhất 5 triệu đô la (hoặc tương đương với bất kỳ loại tiền tệ nào khác tại thời điểm thích hợp) và được tính trong trường hợp doanh nghiệp hợp danh hữu hạn, trong đó không khấu trừ các khoản vay của bất kỳ đối tác nào;",
            "zh-Hant":"(c)現有（或前兩年內任壹時間擁有）凈資產不少於 500 萬美元（或在同時期內的等值外幣金額）的合夥企業或非法人團體，且在有限合夥關系的情況下相關資產包含任何合夥人的負債；",
            id:"(c) A partnership or unincorporated association which has (or has had at any time during the previous two years) net assets of at least $5 million (or its equivalent in any other currency at the relevant time) and calculated in the case of a limited partnership without deducting loans owing to any of the partners;"
        },
        amtCategorization25:{
            zh:"(d) 现有（或前两年内任一时间拥有）净资产不少于 1000 万美元（或在同时期内的等值外币金额）信托的受托人（职业养老金计划、个人养老金计划或利益相关者养老金计划除外），此金额等于现金价值和信托资产指定投资的总和（含负债）；",
            en:"(d) A trustee of a trust (other than an occupational pension scheme, personal pension scheme or stakeholder pension scheme) which has (or has had at any time during the previous two years) assets of at least $10 million (or its equivalent in any other currency at the relevant time) calculated by aggregating the value of cash and designated investments forming part of the trust’s assets, but before deducting its liabilities;",
            vi:"(d) Người được ủy thác từ một sự ủy nhiệm (không phải là khung chế độ hưu bổng nghề nghiệp, chế độ hưu trí cá nhân hoặc chế độ hưu trí cho cổ đông ) có (hoặc đã có bất kỳ lúc nào trong hai năm trước) tài sản ít nhất 10 triệu đô la (hoặc tương đương với bất kỳ loại tiền tệ nào khác) vào thời điểm thích hợp) được tính bằng cách tổng hợp giá trị tiền mặt và các khoản đầu tư được chỉ định tạo thành một phần tài sản của tín thác, nhưng trước khi trừ đi các khoản nợ của nó;",
            "zh-Hant":"(d)現有（或前兩年內任壹時間擁有）凈資產不少於 1000 萬美元（或在同時期內的等值外幣金額）信托的受托人（職業養老金計劃、個人養老金計劃或利益相關者養老金計劃除外），此金額等於現金價值和信托資產指定投資的總和（含負債）；",
            id:"(d) A trustee of a trust (other than an occupational pension scheme, personal pension scheme or stakeholder pension scheme) which has (or has had at any time during the previous two years) assets of at least $10 million (or its equivalent in any other currency at the relevant time) calculated by aggregating the value of cash and designated investments forming part of the trust’s assets, but before deducting its liabilities;"
        },
        amtCategorization26:{
            zh:"(e) 信托的受托人（职业养老金计划、个人养老金计划或利益相关者养老金计划除外），现有（或前两年内任一时间拥有）（i）至少 50 名成员（ii）资产管理规模不少于 1000 万美元（或在同时期内的等值外币金额）",
            en:"(e) A trustee of a trust (other than an occupational pension scheme, personal pension scheme or stakeholder pension scheme where the scheme has (or has had at any time during the previous two years): (i) At least 50 members; and (ii) Assets under management of at least $10 million (or its equivalent in any other currency at the relevant time);",
            vi:"(e) Người được ủy thác từ một sự ủy thác (không phải là người hưởng chế độ hưu bổng nghề nghiệp, chế độ hưu trí cá nhân hoặc chương trình hưu trí của bên liên quan nơi chế độ này đã có (hoặc đã có bất kỳ lúc nào trong hai năm trước): (i) Ít nhất 50 thành viên và (ii) Tài sản được quản lý ít nhất 10 triệu đô la (hoặc tương đương với bất kỳ loại tiền tệ nào khác tại thời điểm thích hợp);",
            "zh-Hant":"(e) 信托的受托人（職業養老金計劃、個人養老金計劃或利益相關者養老金計劃除外），現有（或前兩年內任壹時間擁有）（i）至少 50 名成員（ii）資產管理規模不少於 1000 萬美元（或在同時期內的等值外幣金額）",
            id:"(e) A trustee of a trust (other than an occupational pension scheme, personal pension scheme or stakeholder pension scheme where the scheme has (or has had at any time during the previous two years): (i) At least 50 members; and (ii) Assets under management of at least $10 million (or its equivalent in any other currency at the relevant time);"
        },
        amtCategorization27:{
            zh:"(f) 地方政府或公共机关。",
            en:"(f) A local authority or public authority.",
            vi:"(f) Chính quyền địa phương hoặc cơ quan công quyền.",
            "zh-Hant":"(f)地方政府或公共機關。",
            id:"(f) A local authority or public authority."
        },
        amtCategorization28:{
            zh:"国家或地方政府、管理公债的公共机构、中央银行、国际性或跨国机构（例如世界银行、国际货币基金组织、ECP、欧洲投资银行）或其他类似的国际组织；",
            en:"A national or regional government, a public body that manages public debt, a central bank, an international or supernatural institution (such as the World Bank, the IMF, the ECP, the EIB) or another similar international organisation;",
            vi:"Chính phủ quốc gia hoặc khu vực, cơ quan công quyền quản lý nợ công, ngân hàng trung ương, tổ chức quốc tế hoặc tổ chức siêu lớn (như Ngân hàng Thế giới, IMF, ECP, EIB) hoặc một tổ chức quốc tế tương tự khác;",
            "zh-Hant":"國家或地方政府、管理公債的公共機構、中央銀行、國際性或跨國機構（例如世界銀行、國際貨幣基金組織、ECP、歐洲投資銀行）或其他類似的國際組織；",
            id:"A national or regional government, a public body that manages public debt, a central bank, an international or supernatural institution (such as the World Bank, the IMF, the ECP, the EIB) or another similar international organisation;"
        },
        amtCategorization29:{
            zh:"任何主业是投资于金融工具或指定投资（与公司其他业务相关的）的其他机构投资者。其中包括专门从事资产证券化或其他融资交易的实体。",
            en:"Another institutional investor whose main activity is to invest in financial instruments or designated investments (in relation to the firm’s other business). This includes entities dedicated to the securitisation of assets or other financing transactions.",
            vi:"Một nhà đầu tư tổ chức khác có hoạt động chính là đầu tư vào các công cụ tài chính hoặc các khoản đầu tư được chỉ định (liên quan đến doanh nghiệp khác của công ty). Điều này bao gồm các thực thể dành riêng cho việc chứng khoán hóa tài sản hoặc các giao dịch tài chính khác.",
            "zh-Hant":"任何主業是投資於金融工具或指定投資（與公司其他業務相關的）的其他機構投資者。其中包括專門從事資產證券化或其他融資交易的實體。",
            id:"Another institutional investor whose main activity is to invest in financial instruments or designated investments (in relation to the firm’s other business). This includes entities dedicated to the securitisation of assets or other financing transactions."
        },
        amtCategorization30:{
            zh:"5.“选择性专业客户”",
            en:"5.‘Elective Professional Client’",
            vi:"5.‘Khách Hàng Chuyên Nghiệp Được Chọn’",
            "zh-Hant":"5.“選擇性專業客戶”",
            id:"5.‘Elective Professional Client’"
        },
        amtCategorization31:{
            zh:"如果要被分为选择性专业客户，需要满足以下（1）和（3）的条件，且在适当情况下满足（2）的条件：",
            en:"A firm may treat a client as an elective professional client if it complies with (1) and (3) and, where applicable, (2): ",
            vi:"Công ty có thể coi khách hàng là khách hàng chuyên nghiệp được chọn nếu tuân thủ (1) và (3) và, nếu có, (2): ",
            "zh-Hant":"如果要被分為選擇性專業客戶，需要滿足以下（1）和（3）的條件，且在適當情況下滿足（2）的條件：",
            id:"A firm may treat a client as an elective professional client if it complies with (1) and (3) and, where applicable, (2): "
        },
        amtCategorization32:{
            zh:"(1)本公司根据预期交易或服务的性质对客户的专业资格、经验和知识进行充分评估，以认定客户有能力自行做出投资决定并了解其中的风险（“定性测试”）；",
            en:"(1) the firm undertakes an adequate assessment of the expertise, experience and knowledge of the client that gives reasonable assurance, in light of the nature of the transactions or services envisaged, that the client is capable of making his own investment decisions and understanding the risks involved (the \"qualitative test\");",
            vi:"(1) công ty cam kết đánh giá đầy đủ về chuyên môn, kinh nghiệm và kiến thức của khách hàng cho thấy sự đảm bảo hợp lý, do bản chất của các giao dịch hoặc dịch vụ được dự tính, rằng khách hàng có khả năng tự quyết định đầu tư và hiểu các rủi ro liên quan ( \"kiểm tra định tính\");",
            "zh-Hant":"(1)本公司根據預期交易或服務的性質對客戶的專業資格、經驗和知識進行充分評估，以認定客戶有能力自行做出投資決定並了解其中的風險（“定性測試”）；",
            id:"(1) the firm undertakes an adequate assessment of the expertise, experience and knowledge of the client that gives reasonable assurance, in light of the nature of the transactions or services envisaged, that the client is capable of making his own investment decisions and understanding the risks involved (the \"qualitative test\");"
        },
        amtCategorization33:{
            zh:"(2)在评估的过程中，需要至少满足以下其中两项标准：",
            en:"(2) in the course of that assessment, at least two of the following criteria are satisfied: ",
            vi:"(2) trong quá trình đánh giá đó, ít nhất hai tiêu chí sau đây được thỏa mãn:",
            "zh-Hant":"(2)在評估的過程中，需要至少滿足以下其中兩項標準：",
            id:"(2) in the course of that assessment, at least two of the following criteria are satisfied: "
        },
        amtCategorization34:{
            zh:"(i)客户在过去四个季度内以每季度 10次的平均频率在相关市场开展大规模交易；",
            en:"(i) The client has carried out transactions, in significant size, on the relevant market at an average frequency of 10 per quarter over the previous four quarters;",
            vi:"(i) Khách hàng đã thực hiện các giao dịch, với quy mô đáng kể, trên thị trường liên quan với tần suất trung bình là 10 mỗi quý trong bốn quý trước;",
            "zh-Hant":"(i)客戶在過去四個季度內以每季度 10次的平均頻率在相關市場開展大規模交易；",
            id:"(i) The client has carried out transactions, in significant size, on the relevant market at an average frequency of 10 per quarter over the previous four quarters;"
        },
        amtCategorization35:{
            zh:"(ii)客户金融工具投资组合的规模（包括现金存款及金融工具）超过 50 万美元；",
            en:"(ii) The size of the client’s financial instrument portfolio, defined as including cash deposits and financial instruments, exceeds $500,000;",
            vi:"(ii) Kích thước của danh mục đầu tư công cụ tài chính của khách hàng, được định nghĩa là bao gồm tiền gửi tiền mặt và công cụ tài chính, vượt quá 500.000 đô la;",
            "zh-Hant":"(ii)客戶金融工具投資組合的規模（包括現金存款及金融工具）超過 50 萬美元；",
            id:"(ii) The size of the client’s financial instrument portfolio, defined as including cash deposits and financial instruments, exceeds $500,000;"
        },
        amtCategorization36:{
            zh:"(iii)客户目前或曾经在金融领域工作一年，担任专业职务，其工作需要用到拟定交易或服务的相关知识；（“定量测试”），而且",
            en:"(iii) The client works or has worked in the financial sector for at least one year in a professional position, which requires knowledge of the transactions or services envisaged; (the “quantitative test”); and",
            vi:"(iii) Khách hàng làm việc hoặc đã làm việc trong lĩnh vực tài chính trong ít nhất một năm ở một vị trí chuyên nghiệp, đòi hỏi kiến thức về các giao dịch hoặc dịch vụ được dự kiến; (“kiểm tra định lượng”); và",
            "zh-Hant":"(iii)客戶目前或曾經在金融領域工作壹年，擔任專業職務，其工作需要用到擬定交易或服務的相關知識；（“定量測試”），而且",
            id:"(iii) The client works or has worked in the financial sector for at least one year in a professional position, which requires knowledge of the transactions or services envisaged; (the “quantitative test”); and"
        },
        amtCategorization37:{
            zh:"(3)并且遵循以下程序：",
            en:"(3) The following procedure is followed: ",
            vi:"(3) Các thủ tục sau đây được tuân theo:",
            "zh-Hant":"(3)並且遵循以下程序：",
            id:"(3) The following procedure is followed: "
        },
        amtCategorization38:{
            zh:"(i)客户必须以书面形式向本公司声明希望在一般情况下或仅在某种类型服务或某种类型交易的情况下被视为专业客户；",
            en:"(i) The client must state in writing to the firm that it wishes to be treated as a professional client either generally or in respect of a particular service or transaction or type of transaction or product;",
            vi:"(i) Khách hàng phải nêu rõ bằng văn bản với công ty rằng họ muốn được coi là khách hàng chuyên nghiệp nói chung hoặc đối với một dịch vụ hoặc giao dịch cụ thể hoặc loại giao dịch hoặc sản phẩm;",
            "zh-Hant":"(i)客戶必須以書面形式向本公司聲明希望在壹般情況下或僅在某種類型服務或某種類型交易的情況下被視為專業客戶；",
            id:"(i) The client must state in writing to the firm that it wishes to be treated as a professional client either generally or in respect of a particular service or transaction or type of transaction or product;"
        },
        amtCategorization39:{
            zh:"(ii)本公司必须向客户发出清晰的书面警告，说明客户可能失去保障以及投资者获得赔偿的权利；而且",
            en:"(ii) The firm must give the client a clear written warning of the protections and investor compensation rights the client may lose; and",
            vi:"(ii) Công ty phải cung cấp cho khách hàng một thông báo bằng văn bản rõ ràng về các biện pháp bảo vệ và quyền bồi thường của nhà đầu tư mà khách hàng có thể bị mất; và",
            "zh-Hant":"(ii)本公司必須向客戶發出清晰的書面警告，說明客戶可能失去保障以及投資者獲得賠償的權利；而且",
            id:"(ii) The firm must give the client a clear written warning of the protections and investor compensation rights the client may lose; and"
        },
        amtCategorization40:{
            zh:"(iii)客户必须在独立于合约的文件中作出书面声明，指出客户清楚失去保护的后果。",
            en:"(iii) The client must state in writing, in a separate document from the contract, that it is aware of the consequences of losing protections.",
            vi:"(iii) Khách hàng phải nêu bằng văn bản, trong một tài liệu riêng biệt ngoài hợp đồng, rằng họ nhận thức được hậu quả của việc mất sự bảo vệ.",
            "zh-Hant":"(iii)客戶必須在獨立於合約的文件中作出書面聲明，指出客戶清楚失去保護的後果。",
            id:"(iii) The client must state in writing, in a separate document from the contract, that it is aware of the consequences of losing protections."
        },
        amtCategorization41:{
            zh:"6.“合资格交易对手”",
            en:"6.‘Eligible Counterparty’",
            vi:"6.Đối Tác Đủ Điều Kiện Pháp Nhân",
            "zh-Hant":"6.“合資格交易對手”",
            id:"6.‘Eligible Counterparty’"
        },
        amtCategorization42:{
            zh:"合资格交易对手被分类为固有合资格交易对手或选择性合资格交易对手的客户。如果本公司为客户开展下列活动，则该客户只能是合资格交易对手：",
            en:"A client that is either a per se eligible or an elective eligible counterparty. Clients can only be an eligible counterparty if the firm is undertaking one of the following activities for them: ",
            vi:"Một khách hàng đủ điều kiện hoặc một đối tác đủ điều kiện được chọn. Khách hàng chỉ có thể là đối tác đủ điều kiện nếu công ty đang thực hiện một trong các hoạt động sau đây cho họ: ",
            "zh-Hant":"合資格交易對手被分類為固有合資格交易對手或選擇性合資格交易對手的客戶。如果本公司為客戶開展下列活動，則該客戶只能是合資格交易對手：",
            id:"A client that is either a per se eligible or an elective eligible counterparty. Clients can only be an eligible counterparty if the firm is undertaking one of the following activities for them: "
        },
        amtCategorization43:{
            zh:"(i)执行订单（代表客户达成买卖一个或多个金融工具的协议）；",
            en:"(i) Executing orders (acting to conclude agreements to buy or sell one or one financial instruments on behalf of clients);",
            vi:"(i) Thực hiện các lệnh (hành động ký kết các thỏa thuận mua hoặc bán một hoặc một công cụ tài chính thay mặt cho khách hàng);",
            "zh-Hant":"(i)執行訂單（代表客戶達成買賣壹個或多個金融工具的協議）；",
            id:"(i) Executing orders (acting to conclude agreements to buy or sell one or one financial instruments on behalf of clients);"
        },
        amtCategorization44:{
            zh:"(ii)交易客户自身的账户（交易自有资金，从而完成一个或多个金融工具的交易）；",
            en:"(ii) Dealing on their own account (trading against proprietary capital resulting in the conclusion of transactions in one or more financial instruments);",
            vi:"(ii) Vận hành tài khoản của mình (giao dịch với các loại vốn sở hữu dẫn đến kết luận giao dịch với một hoặc nhiều công cụ tài chính);",
            "zh-Hant":"(ii)交易客戶自身的賬戶（交易自有資金，從而完成壹個或多個金融工具的交易）；",
            id:"(ii) Dealing on their own account (trading against proprietary capital resulting in the conclusion of transactions in one or more financial instruments);"
        },
        amtCategorization45:{
            zh:"(iii)接受及传输订单。",
            en:"(iii) Receiving and transmitting orders.",
            vi:"(iii) Nhận và truyền các lệnh.",
            "zh-Hant":"(iii)接受及傳輸訂單。",
            id:"(iii) Receiving and transmitting orders."
        },
        amtCategorization46:{
            zh:"若本公司不进行此类交易，那么客户不能被划分为合资格交易对手。",
            en:"If the firm is not conducting any of these transactions then the client cannot be classed as an eligible counterparty.",
            vi:"Nếu công ty không thực hiện bất kỳ giao dịch nào trong số này thì khách hàng không thể được xếp vào nhóm đối tác đủ điều kiện.",
            "zh-Hant":"若本公司不進行此類交易，那麽客戶不能被劃分為合資格交易對手。",
            id:"If the firm is not conducting any of these transactions then the client cannot be classed as an eligible counterparty."
        },
        amtCategorization47:{
            zh:"7.“固有合资格交易对手”",
            en:"7.‘Per se Eligible Counterparty’",
            vi:"7.‘Đối tác Đủ Điều Kiện Pháp Lý’",
            "zh-Hant":"7.“固有合資格交易對手”",
            id:"7.‘Per se Eligible Counterparty’"
        },
        amtCategorization48:{
            zh:"固有合资格交易对手包括任意以下各方并且执行合资格交易对手的业务，除非且仅限于已被划分为另一类型：",
            en:"Each of the following is a per se eligible counterparty unless and to the extent it is given a different categorization: ",
            vi:"Mỗi điều sau đây là một điều kiện để trở thành một đối tác đủ tư cách pháp nhân trừ khi có các trong phạm vi được phân loại khác nhau:",
            "zh-Hant":"固有合資格交易對手包括任意以下各方並且執行合資格交易對手的業務，除非且僅限於已被劃分為另壹類型：",
            id:"Each of the following is a per se eligible counterparty unless and to the extent it is given a different categorization: "
        },
        amtCategorization49:{
            zh:"(1) 投资公司；(2) 信贷机构；(3) 保险公司；(4) 经 UCITS 指令或其管理公司授权的集合投资计划；(5) 退休基金或其管理公司；(6) 经同等监管机构授权或受其监管的其他金融机构；(7) 不受监管的企业；(8) 国家政府或其相应的办事处，包括管理公债的公共机构；(9) 中央银行；(10) 跨国机构。",
            en:"(1) An investment firm; (2) A credit institution; (3) An insurance company; (4) A collective investment scheme authorised under the UCITS Directive or its management company; (5) A pension fund or its management company; (6) Another financial institution authorised or regulated under an equivalent regulator; (7) An undertaking exempted from regulations; (8) A national government or its corresponding office, including a public body that deals with the public debt; (9) A central bank; (10) A supernational organisation.",
            vi:"(1) Một công ty đầu tư; (2) Tổ chức tín dụng; (3) Một công ty bảo hiểm; (4) Một kế hoạch đầu tư tập thể được ủy quyền theo Chỉ thị UCITS hoặc công ty quản lý của nó; (5) Quỹ hưu trí hoặc công ty quản lý quỹ hưu trí; (6) Một tổ chức tài chính khác được ủy quyền hoặc điều chỉnh theo một cơ quan quản lý tương đương; (7) Một cam kết được miễn quy định; (8) Một chính phủ quốc gia hoặc văn phòng tương ứng, bao gồm một cơ quan công xử lý nợ công; (9) Một ngân hàng trung ương; (10) Một tổ chức siêu quốc gia.",
            "zh-Hant":"(1) 投資公司；(2) 信貸機構；(3) 保險公司；(4) 經 UCITS 指令或其管理公司授權的集合投資計劃；(5) 退休基金或其管理公司；(6) 經同等監管機構授權或受其監管的其他金融機構；(7) 不受監管的企業；(8) 國家政府或其相應的辦事處，包括管理公債的公共機構；(9) 中央銀行；(10) 跨國機構。",
            id:"(1) An investment firm; (2) A credit institution; (3) An insurance company; (4) A collective investment scheme authorised under the UCITS Directive or its management company; (5) A pension fund or its management company; (6) Another financial institution authorised or regulated under an equivalent regulator; (7) An undertaking exempted from regulations; (8) A national government or its corresponding office, including a public body that deals with the public debt; (9) A central bank; (10) A supernational organisation."
        },
        amtCategorization50:{
            zh:"8.“选择性合资格交易对手”",
            en:"8.‘Elective Eligible Counterparty’",
            vi:"8.Đối tác Đủ Tư Cách Pháp Nhân Được Lựa Chọn",
            "zh-Hant":"8.“選擇性合資格交易對手”",
            id:"8.‘Elective Eligible Counterparty’"
        },
        amtCategorization51:{
            zh:"在下列情况下，公司可将客户视为选择性合资格交易对手：",
            en:"A firm may treat a client as an elective eligible counterparty if: ",
            vi:"Công ty có thể coi khách hàng là đối tác có tư cách pháp lý được chọn nếu:",
            "zh-Hant":"在下列情況下，公司可將客戶視為選擇性合資格交易對手：",
            id:"A firm may treat a client as an elective eligible counterparty if: "
        },
        amtCategorization52:{
            zh:"(1)客户是一家企业而且：",
            en:"(1) The client is an undertaking and: ",
            vi:"(1) Khách hàng là một công việc kinh doanh và:",
            "zh-Hant":"(1)客戶是壹家企業而且：",
            id:"(1) The client is an undertaking and: "
        },
        amtCategorization53:{
            zh:"(a)固有专业客户；",
            en:"(a) Is a per se professional client; or",
            vi:"(a) Là một khách hàng chuyên nghiệp; hoặc là",
            "zh-Hant":"(a)固有專業客戶；",
            id:"(a) Is a per se professional client; or"
        },
        amtCategorization54:{
            zh:"(2)公司获得意向交易对手确认，同意被视为合资格交易对手。",
            en:"(2) The firm has obtained express confirmation from the prospective counterparty that it agrees to be treated as an eligible counterparty.",
            vi:"Công ty đã nhận được xác nhận rõ ràng từ đối tác tiềm năng rằng họ đồng ý được coi là đối tác có tư cách pháp lý.",
            "zh-Hant":"(2)公司獲得意向交易對手確認，同意被視為合資格交易對手。",
            id:"(2) The firm has obtained express confirmation from the prospective counterparty that it agrees to be treated as an eligible counterparty."
        },
        amtCategorization55:{
            zh:"倘若满足上述条件和要求，选择性合资格交易对手的类型包括相应的机构。",
            en:"The categories of elective eligible counterparties include an equivalent undertaking provided the above conditions and requirements are satisfied.",
            vi:"Các loại phân loại của các đối tác với tư cách pháp lý bao gồm một công việc kinh doanh tương đương có các điều kiện và yêu cầu trên được thỏa mãn.",
            "zh-Hant":"倘若滿足上述條件和要求，選擇性合資格交易對手的類型包括相應的機構。",
            id:"The categories of elective eligible counterparties include an equivalent undertaking provided the above conditions and requirements are satisfied."
        },
        amtCategorization56:{
            zh:"申请不同的类型",
            en:"Request for Different Categorization",
            vi:"Yêu Cầu Phân Loại Khác",
            "zh-Hant":"申請不同的類型",
            id:"Request for Different Categorization"
        },
        amtCategorization57:{
            zh:"1.本公司允许专业客户或合资格交易对手申请重新分类，从而享受更高级别的保护。",
            en:"1.The Firm may allow a Professional Client or an Eligible Counterparty to request re- categorization as a Client that benefits from a higher degree of protection.",
            vi:"1.Công ty có thể cho phép Khách hàng Chuyên nghiệp hoặc Đối tác có tư cách pháp nhân yêu cầu phân loại lại với tư cách là Khách hàng được hưởng mức độ bảo vệ cao hơn.",
            "zh-Hant":"1.本公司允許專業客戶或合資格交易對手申請重新分類，從而享受更高級別的保護。",
            id:"1.The Firm may allow a Professional Client or an Eligible Counterparty to request re- categorization as a Client that benefits from a higher degree of protection."
        },
        amtCategorization58:{
            zh:"2.因此公司应通知被划分为专业客户或合资格交易对手的客户，无论本公司同意与否，客户都有权申请不同的类型。但是，如果客户准备考虑作出申请，公司只需要告知客户其有权申请不同的分类，包括保护级别可能降低。",
            en:"2.A firm will therefore notify a client that is categorised as a professional client or an eligible counterparty of its right to request a different categorization whether or not the firm will agree to such requests. However, a firm need only notify a client of a right to request a different categorization involving a lower level of protection if it is prepared to consider such requests",
            vi:"2.Do đó, công ty sẽ thông báo cho khách hàng được phân loại là khách hàng chuyên nghiệp hoặc đối tác có tư cách pháp nhân về quyền yêu cầu phân loại khác nhau cho dù công ty có đồng ý với yêu cầu đó hay không. Tuy nhiên, công ty chỉ cần thông báo cho khách hàng về quyền yêu cầu phân loại khác nhau liên quan đến mức bảo vệ thấp hơn nếu công ty có khả năng xem xét các yêu cầu đó",
            "zh-Hant":"2.因此公司應通知被劃分為專業客戶或合資格交易對手的客戶，無論本公司同意與否，客戶都有權申請不同的類型。但是，如果客戶準備考慮作出申請，公司只需要告知客戶其有權申請不同的分類，包括保護級別可能降低。",
            id:"2.A firm will therefore notify a client that is categorised as a professional client or an eligible counterparty of its right to request a different categorization whether or not the firm will agree to such requests. However, a firm need only notify a client of a right to request a different categorization involving a lower level of protection if it is prepared to consider such requests"
        },
        amtCategorization59:{
            zh:"3.当专业客户或合资格交易对手认为他/她/他们无法妥当评估或管理相关风险时，他/她/他们有责任要求获得更高级别的保护。",
            en:"3.It is the responsibility of a Professional Client or Eligible Counterparty to ask for a higher level of protection when he/she/they deems he/she/they are unable to properly assess or manage the risks involved.",
            vi:"3.Việc yêu cầu mức độ bảo vệ cao hơn khi cho rằng không thể đánh giá hoặc quản lý các rủi ro liên quan là trách nhiệm của một Khách hàng Chuyên nghiệp hoặc Đối tác Đủ Tư cách Pháp lý.",
            "zh-Hant":"3.當專業客戶或合資格交易對手認為他/她/他們無法妥當評估或管理相關風險時，他/她/他們有責任要求獲得更高級別的保護。",
            id:"3.It is the responsibility of a Professional Client or Eligible Counterparty to ask for a higher level of protection when he/she/they deems he/she/they are unable to properly assess or manage the risks involved."
        },
        amtCategorization60:{
            zh:"4.本公司会主动回应相关客户申请：",
            en:"4.The Firm may, either on its own initiative or at the request of the Client ",
            vi:"4.Công ty có thể, hoặc theo quyền hạn riêng của mình hoặc theo yêu cầu của Khách hàng",
            "zh-Hant":"4.本公司會主動回應相關客戶申請：",
            id:"4.The Firm may, either on its own initiative or at the request of the Client "
        },
        amtCategorization61:{
            zh:"(1) 将可能被划分成“固有合资格交易对手”的客户视为专业客户或零售客户；",
            en:"(1) treat as a professional client or a retail client a client that might otherwise be categorised as a per se eligible counterparty;",
            vi:"(1) áp dụng các điều khoản với một khách hàng người có thể là một cá nhân có tư cách pháp lý như là khách hàng chuyên nghiệp hoặc khách hàng lẻ;",
            "zh-Hant":"(1) 將可能被劃分成“固有合資格交易對手”的客戶視為專業客戶或零售客戶；",
            id:"(1) treat as a professional client or a retail client a client that might otherwise be categorised as a per se eligible counterparty;"
        },
        amtCategorization62:{
            zh:"(2) 将可能被划分成“固有专业客户”的客户视为零售客户；",
            en:"(2) treat as a retail client a client that might otherwise be categorised as a per se professional client;",
            vi:"(2) áp dụng các điều khoản như là một khách hàng lẻ với các khách hàng có thể được xem là một cá nhân khách hàng chuyên nghiệp;",
            "zh-Hant":"(2) 將可能被劃分成“固有專業客戶”的客戶視為零售客戶；",
            id:"(2) treat as a retail client a client that might otherwise be categorised as a per se professional client;"
        },
        amtCategorization63:{
            zh:"若是如此，将据此将客户重新分类。",
            en:"and if it does so, the client will be re-categorised accordingly.",
            vi:"và nếu có, khách hàng sẽ được phân loại lại tương ứng.",
            "zh-Hant":"若是如此，將據此將客戶重新分類。",
            id:"and if it does so, the client will be re-categorised accordingly."
        },
        amtCategorization64:{
            zh:"5.如果客户自身为合资格交易对手，申请作为公司的客户，其与公司所开展的业务受业务经营保护；若公司同意了该申请且没有明确要求将其视为零售客户，公司必须将合资格交易对手视为专业客户。",
            en:"5.If a per se eligible counterparty requests treatment as a client whose business with the firm is subject to conduct of business protections, but does not expressly request treatment as a retail client and the firm agrees to that request, the firm must treat that eligible counterparty as a professional client.",
            vi:"5.Nếu một cá nhân có tư cách pháp nhân yêu cầu được áp dụng các điều khoản với tư cách là khách hàng mà doanh nghiệp của họ phải tuân thủ các biện pháp bảo vệ doanh nghiệp, nhưng không yêu cầu được xem như là khách hàng lẻ và công ty đồng ý với yêu cầu đó, công ty phải làm việc với khách hàng có tư cách pháp lý đó như là một khách hàng chuyên nghiệp.",
            "zh-Hant":"5.如果客戶自身為合資格交易對手，申請作為公司的客戶，其與公司所開展的業務受業務經營保護；若公司同意了該申請且沒有明確要求將其視為零售客戶，公司必須將合資格交易對手視為專業客戶。",
            id:"5.If a per se eligible counterparty requests treatment as a client whose business with the firm is subject to conduct of business protections, but does not expressly request treatment as a retail client and the firm agrees to that request, the firm must treat that eligible counterparty as a professional client."
        },
        amtCategorization65:{
            zh:"6.(1)如果固有专业客户或固有合资格交易对手的一方申请，公司将其视为零售客户，倘若该客户与公司签订书面协议，明确适用的业务经营机制，公司不将其视为专业客户或合资格交易对手，则该客户将被划分为零售客户。",
            en:"6.(1) If, a per se professional client or a per se eligible counterparty requests treatment as a retail client, the client will be classified as a retail client if it enters into a written agreement with the firm to the effect that it will not be treated as a professional client or eligible counterparty for the purposes of the applicable conduct of business regime.",
            vi:"6.(1) Nếu khách hàng chuyên nghiệp hoặc khách hàng chuyên nghiệp đủ tư cách pháp nhân được coi là khách hàng lẻ, khách hàng sẽ được phân loại là khách hàng lẻ nếu họ ký thỏa thuận bằng văn bản với công ty có hiệu lực sẽ không được coi là khách hàng chuyên nghiệp hoặc đối tác có tư cách pháp lý nhằm mục đích thực hiện các chế độ kinh doanh.",
            "zh-Hant":"6.(1)如果固有專業客戶或固有合資格交易對手的壹方申請，公司將其視為零售客戶，倘若該客戶與公司簽訂書面協議，明確適用的業務經營機制，公司不將其視為專業客戶或合資格交易對手，則該客戶將被劃分為零售客戶。",
            id:"6.(1) If, a per se professional client or a per se eligible counterparty requests treatment as a retail client, the client will be classified as a retail client if it enters into a written agreement with the firm to the effect that it will not be treated as a professional client or eligible counterparty for the purposes of the applicable conduct of business regime."
        },
        amtCategorization66:{
            zh:"(2) 此协议必须说明重新分类的范畴，例如是否适用于一个或多个特定的服务或交易，是否适用于一类或多类产品或交易，或是否适用于一种或多种规定。",
            en:"(2) This agreement must specify the scope of the re-categorization, such as whether it applies to one or more particular services or transactions, to one or more types of product or transaction or to one or more rules.",
            vi:"(2) Thỏa thuận này phải chỉ định phạm vi phân loại lại, chẳng hạn như liệu nó có áp dụng cho một hoặc nhiều dịch vụ hoặc giao dịch cụ thể hay không, cho một hoặc nhiều loại sản phẩm hoặc giao dịch hoặc cho một hoặc nhiều quy tắc.",
            "zh-Hant":"(2) 此協議必須說明重新分類的範疇，例如是否適用於壹個或多個特定的服務或交易，是否適用於壹類或多類產品或交易，或是否適用於壹種或多種規定。",
            id:"(2) This agreement must specify the scope of the re-categorization, such as whether it applies to one or more particular services or transactions, to one or more types of product or transaction or to one or more rules."
        },
        amtCategorization67:{
            zh:"7.(1) 根据“与客户沟通”的原则，若本公司根据本节规定主动将客户重新分类，本公司应告知客户根据本节规定其所属的新类型。",
            en:"7.(1) In accordance with the principle ‘communications with clients’, if a firm at its own initiative re- categorises a client in accordance with this section, it should notify that client of its new category under this section.",
            vi:"7.(1) Theo nguyên tắc 'liên lạc với khách hàng', nếu một công ty có quyền phân loại lại khách hàng theo mục này, nó sẽ thông báo cho khách hàng về danh mục mới của mình trong phần này.",
            "zh-Hant":"7.(1) 根據“與客戶溝通”的原則，若本公司根據本節規定主動將客戶重新分類，本公司應告知客戶根據本節規定其所屬的新類型。",
            id:"7.(1) In accordance with the principle ‘communications with clients’, if a firm at its own initiative re- categorises a client in accordance with this section, it should notify that client of its new category under this section."
        },
        amtCategorization68:{
            zh:"(2) 若本公司已经与客户签订协议，在修正协议时也应将任何契约要求考虑在内。",
            en:"(2) If the firm already has an agreement with the client, it should also consider any contractual requirements concerning the amendment of that agreement.",
            vi:"(2) Nếu công ty đã có thỏa thuận với khách hàng, công ty cũng nên xem xét mọi yêu cầu hợp đồng liên quan đến việc sửa đổi thỏa thuận đó.",
            "zh-Hant":"(2) 若本公司已經與客戶簽訂協議，在修正協議時也應將任何契約要求考慮在內。",
            id:"(2) If the firm already has an agreement with the client, it should also consider any contractual requirements concerning the amendment of that agreement."
        },
        amtCategorization69:{
            zh:"8.根据本节规定，可为客户提供额外保护的方式包括：(1) 一般性重新分类；(2) 按每次交易重新分类；(3) 就一条或多条规定重新分类；(4) 就一项或多项特定服务或交易重新分类；(5) 就一类或多类产品或服务重新分类。",
            en:"8.The ways in which a client may be provided with additional protections under this section include re- categorization: (1) on a general basis; or (2) on a trade by trade basis; or (3) in respect of one or more specified rules; or (4) in respect of one or more particular services or transactions; or (5) in respect of one or more types of product or transaction.",
            vi:"8.Các cách thức mà khách hàng có thể được cung cấp các biện pháp bảo vệ bổ sung theo phần này bao gồm phân loại lại: (1) trên cơ sở chung; hoặc (2) trên giao dịch thương mại; hoặc (3) đối với một hoặc nhiều quy tắc được chỉ định; hoặc (4) đối với một hoặc nhiều dịch vụ hoặc giao dịch cụ thể; hoặc (5) đối với một hoặc nhiều loại sản phẩm hoặc giao dịch.",
            "zh-Hant":"8.根據本節規定，可為客戶提供額外保護的方式包括：(1) 壹般性重新分類；(2) 按每次交易重新分類；(3) 就壹條或多條規定重新分類；(4) 就壹項或多項特定服務或交易重新分類；(5) 就壹類或多類產品或服務重新分類。",
            id:"8.The ways in which a client may be provided with additional protections under this section include re- categorization: (1) on a general basis; or (2) on a trade by trade basis; or (3) in respect of one or more specified rules; or (4) in respect of one or more particular services or transactions; or (5) in respect of one or more types of product or transaction."
        },
        amtCategorization70:{
            zh:"9.根据本节规定将客户重新分类为零售客户，并不意味着客户将成为符合巴哈马证券监察委员会规定的合资格申诉人。",
            en:"9.Re-categorising a client as a retail client under this section does not necessarily mean it will become an eligible complainant under SCB rules.",
            vi:"9.Việc phân loại lại khách hàng là khách hàng lẻ theo phần này không có nghĩa là khách hàng sẽ trở thành người khiếu nại có tư cách pháp lý theo quy định của SCB.",
            "zh-Hant":"9.根據本節規定將客戶重新分類為零售客戶，並不意味著客戶將成為符合巴哈馬證券監察委員會規定的合資格申訴人。",
            id:"9.Re-categorising a client as a retail client under this section does not necessarily mean it will become an eligible complainant under SCB rules."
        },
        amtCategorization71:{
            zh:"10.如果本公司得知客户不再符合作为选择性专业客户分类的初始条件，公司将采取适当的行动。",
            en:"10.If the Firm becomes aware that a Client no longer fulfils the initial conditions that made him/her/them eligible for categorization as an Elective Professional Client, the firm will take the appropriate action.",
            vi:"10.Nếu Công ty nhận thức Khách hàng không còn đáp ứng các điều kiện ban đầu giúp họ đủ điều kiện để được phân loại là Khách hàng Chuyên nghiệp được lựa chọn, công ty sẽ thực hiện hành động thích hợp.",
            "zh-Hant":"10.如果本公司得知客戶不再符合作為選擇性專業客戶分類的初始條件，公司將采取適當的行動。",
            id:"10.If the Firm becomes aware that a Client no longer fulfils the initial conditions that made him/her/them eligible for categorization as an Elective Professional Client, the firm will take the appropriate action."
        },
        amtCategorization72:{
            zh:"11.适当行动包括将客户重新分类为零售客户，本公司会将重新分类的情况告知客户。",
            en:"11.Where the appropriate action involves re-categorising that client as a Retail Client, the Firm will notify that Client of its new categorization.",
            vi:"11.Khi hành động thích hợp liên quan đến việc phân loại lại khách hàng đó thành Khách hàng lẻ, Công ty sẽ thông báo cho Khách hàng về phân loại mới của mình.",
            "zh-Hant":"11.適當行動包括將客戶重新分類為零售客戶，本公司會將重新分類的情況告知客戶。",
            id:"11.Where the appropriate action involves re-categorising that client as a Retail Client, the Firm will notify that Client of its new categorization."
        },
        amtCategorization73:{
            zh:"保护权",
            en:"Protection Rights",
            vi:"Quyền bảo vệ",
            "zh-Hant":"保護權",
            id:"Protection Rights"
        },
        amtCategorization74:{
            zh:"1.零售客户 / 专业客户",
            en:"1.Retail Clients / Professional Clients",
            vi:"1.Khách hàng lẻ / Khách hàng chuyên nghiệp",
            "zh-Hant":"1.零售客戶 / 專業客戶",
            id:"1.Retail Clients / Professional Clients"
        },
        amtCategorization75:{
            zh:"当本公司将客户视为零售客户时，根据法规，他/她/他们将享有最高级别的保护，超过专业客户或合资格交易对手。",
            en:"Where the Firm treats the Client as a Retail Client, he/she/they will be afforded with the highest level of protection under the regulations, more so than a Professional Client or Eligible Counterparty.",
            vi:"Trường hợp Công ty phân loại Khách hàng với tư cách là Khách hàng lẻ, họ sẽ được cung cấp mức bảo vệ cao nhất theo quy định, nhiều hơn so với Khách hàng Chuyên nghiệp hoặc Đối tác có Tư cách Pháp Lý.",
            "zh-Hant":"當本公司將客戶視為零售客戶時，根據法規，他/她/他們將享有最高級別的保護，超過專業客戶或合資格交易對手。",
            id:"Where the Firm treats the Client as a Retail Client, he/she/they will be afforded with the highest level of protection under the regulations, more so than a Professional Client or Eligible Counterparty."
        },
        amtCategorization76:{
            zh:"例如，会向零售客户提供更多关于本公司、本公司产品、服务、收费及佣金方面的信息和披露资料。本公司需要确保客户文书的安全措施到位，将客户资金与本公司自有资金分离，根据巴哈马证券监察委员会的规定，客户资金应存放在指定的客户银行账户中。",
            en:"A Retail Client will for example be given more information and disclosures with regard to the Firm, its products, services, charges, and commission charges. The Firm is required to ensure the safeguarding of Client instruments and the segregation of Client money from the Firm’s own money which must be held in designated client bank accounts as per SCB rules.",
            vi:"Ví dụ, một Khách hàng lẻ sẽ được cung cấp thêm thông tin và tiết lộ liên quan đến Công ty, các sản phẩm, dịch vụ, chi phí và phí hoa hồng của Công ty. Công ty được yêu cầu để đảm bảo việc bảo vệ các công cụ của Khách hàng và phân tách tiền của Khách hàng từ tiền của Công ty phải được giữ trong các tài khoản ngân hàng của khách hàng được chỉ định theo các quy tắc của SCB.",
            "zh-Hant":"例如，會向零售客戶提供更多關於本公司、本公司產品、服務、收費及傭金方面的信息和披露資料。本公司需要確保客戶文書的安全措施到位，將客戶資金與本公司自有資金分離，根據巴哈馬證券監察委員會的規定，客戶資金應存放在指定的客戶銀行賬戶中。",
            id:"A Retail Client will for example be given more information and disclosures with regard to the Firm, its products, services, charges, and commission charges. The Firm is required to ensure the safeguarding of Client instruments and the segregation of Client money from the Firm’s own money which must be held in designated client bank accounts as per SCB rules."
        },
        amtCategorization77:{
            zh:"本公司必须遵守巴哈马证券监察委员会规定，以确保所有零售客户的资金得到保护及完全分隔。本公司将客户资金存放在独立的客户银行账户中，通过这种方式将客户资金与公司资金明确分离。分离客户资金可确保在本公司破产的情况下，扣除行政管理人处理和分派资金的成本后，在这些账户中存放的资金将退还给客户，而不被本公司的一般债权人视为可收回资产。",
            en:"The Firm must comply with SCB rules to ensure that all Retail Client money is protected and fully segregated. The Firm clearly distinguishes client money from its own by holding such funds in segregated client bank accounts. Segregation of client money ensures that in the event the Firm becomes insolvent, funds held in these accounts will be returned to the clients, minus the administrators’ cost in handling and distributing these funds, instead of being treated as recoverable assets by general creditors of the Firm.",
            vi:"Công ty phải tuân thủ các quy tắc của SCB để đảm bảo rằng tất cả tiền của Khách hàng bán lẻ được bảo vệ và phân tách hoàn toàn. Công ty phân biệt rõ ràng tiền của khách hàng bằng cách giữ các khoản tiền đó trong các tài khoản ngân hàng khách hàng tách biệt. Phân chia tiền của khách hàng đảm bảo rằng trong trường hợp Công ty không trả được nợ, tiền được giữ trong các tài khoản này sẽ được trả lại cho khách hàng, trừ đi chi phí quản lý và phân phối các khoản tiền này, thay vì được coi là tài sản có thể thu hồi của chủ nợ chung của Công ty.",
            "zh-Hant":"本公司必須遵守巴哈馬證券監察委員會規定，以確保所有零售客戶的資金得到保護及完全分隔。本公司將客戶資金存放在獨立的客戶銀行賬戶中，通過這種方式將客戶資金與公司資金明確分離。分離客戶資金可確保在本公司破產的情況下，扣除行政管理人處理和分派資金的成本後，在這些賬戶中存放的資金將退還給客戶，而不被本公司的壹般債權人視為可收回資產。",
            id:"The Firm must comply with SCB rules to ensure that all Retail Client money is protected and fully segregated. The Firm clearly distinguishes client money from its own by holding such funds in segregated client bank accounts. Segregation of client money ensures that in the event the Firm becomes insolvent, funds held in these accounts will be returned to the clients, minus the administrators’ cost in handling and distributing these funds, instead of being treated as recoverable assets by general creditors of the Firm."
        },
        amtCategorization78:{
            zh:"倘若代表本公司保存客户资金的银行停业清算（次级投资），零售客户将按照在清算银行存放总金额中所占比例分摊损失。",
            en:"In the event the Firm’s bank holding client money on behalf of the Firm goes into liquidation (secondary pooling), any losses would be shared by the Retail Client in proportion to their share of total funds held with a bank which has failed.",
            vi:"Trong trường hợp ngân hàng của Công ty nắm giữ tiền khách hàng thay mặt cho Công ty được thanh lý (gộp chung), bất kỳ tổn thất nào sẽ được Khách hàng lẻ chia sẻ tương ứng với tổng số tiền của họ được nắm giữ với một ngân hàng không thành công.",
            "zh-Hant":"倘若代表本公司保存客戶資金的銀行停業清算（次級投資），零售客戶將按照在清算銀行存放總金額中所占比例分攤損失。",
            id:"In the event the Firm’s bank holding client money on behalf of the Firm goes into liquidation (secondary pooling), any losses would be shared by the Retail Client in proportion to their share of total funds held with a bank which has failed."
        },
        amtCategorization79:{
            zh:"本公司有权作出假设，专业客户具有足够经验和知识，了解与本公司特定投资服务、交易或产品相关的风险，并知晓公司为此已对客户进行适宜性评估且将客户划分为专业客户。",
            en:"The Firm shall be entitled to assume that a Professional Client has the necessary experience and knowledge in order to understand the risks involved in relation to the Firm’s particular investment services, transactions, or products, for which the Client has been assessed for appropriateness and is classified as a Professional Client.",
            vi:"Công ty có quyền giả định rằng một khách hàng chuyên nghiệp có kinh nghiệm và kiến thức cần thiết để hiểu các rủi ro liên quan đến các dịch vụ đầu tư, giao dịch hoặc sản phẩm cụ thể của Công ty mà Khách hàng đã đánh giá tính thích hợp và được phân loại là một khách hàng chuyên nghiệp.",
            "zh-Hant":"本公司有權作出假設，專業客戶具有足夠經驗和知識，了解與本公司特定投資服務、交易或產品相關的風險，並知曉公司為此已對客戶進行適宜性評估且將客戶劃分為專業客戶。",
            id:"The Firm shall be entitled to assume that a Professional Client has the necessary experience and knowledge in order to understand the risks involved in relation to the Firm’s particular investment services, transactions, or products, for which the Client has been assessed for appropriateness and is classified as a Professional Client."
        },
        amtCategorization80:{
            zh:"专业客户享有的保护将少于零售客户。包括：专业客户可能会失去向监管机构投诉的权利。大型机构和受监管公司等部分专业客户和合资格交易对手不会被视为合资格申诉人。",
            en:"Professional Clients are afforded significantly fewer protections than those afforded to Retail Clients. Professional Clients may lose their right to refer complaints to the regulator. Some Professional Clients and Eligible Counterparties such as large institutions and regulated Firms will not be considered as an eligible complainant.",
            vi:"Khách hàng chuyên nghiệp được bảo vệ ít hơn đáng kể so mức bảo vệ dành cho Khách hàng lẻ. Khách hàng Chuyên nghiệp có thể mất quyền đưa đến đơn khiếu nại cho cơ quan quản lý. Một số Khách hàng Chuyên nghiệp và Đối tác Đủ tư cách pháp lý như các tổ chức lớn và Công ty được quy định sẽ không được coi là người khiếu nại có tư cách pháp nhân.",
            "zh-Hant":"專業客戶享有的保護將少於零售客戶。包括：專業客戶可能會失去向監管機構投訴的權利。大型機構和受監管公司等部分專業客戶和合資格交易對手不會被視為合資格申訴人。",
            id:"Professional Clients are afforded significantly fewer protections than those afforded to Retail Clients. Professional Clients may lose their right to refer complaints to the regulator. Some Professional Clients and Eligible Counterparties such as large institutions and regulated Firms will not be considered as an eligible complainant."
        },
        amtCategorization81:{
            zh:"本公司可能会为专业客户提供未经巴哈马证券监察委员会授权认可人士批准，且不符合巴哈马证券监察委员会所颁布规定的金融投资推广。作为专业客户，应能够了解投资于此类推广的风险，并对所涉及的风险作出适当评估。",
            en:"The Firm may provide Professional Clients with financial promotions that may not have been approved by an approved person authorised by the SCB and which may not conform to the rules issues by the SCB. As a Professional Client should be in a position to understand and make proper evaluation of the risks involved in investing in such promotions.",
            vi:"Công ty có thể cung cấp cho Khách hàng Chuyên nghiệp các chương trình khuyến mãi tài chính có thể không được chấp thuận bởi một người được ủy nhiệm được SCB ủy quyền và có thể không tuân thủ các vấn đề quy tắc của SCB. Một khách hàng chuyên nghiệp nên ở trong điều kiện để hiểu và có các đánh giá thích hợp các rủi ro liên quan đến việc đầu tư vào các chương trình khuyến mãi như vậy.",
            "zh-Hant":"本公司可能會為專業客戶提供未經巴哈馬證券監察委員會授權認可人士批準，且不符合巴哈馬證券監察委員會所頒布規定的金融投資推廣。作為專業客戶，應能夠了解投資於此類推廣的風險，並對所涉及的風險作出適當評估。",
            id:"The Firm may provide Professional Clients with financial promotions that may not have been approved by an approved person authorised by the SCB and which may not conform to the rules issues by the SCB. As a Professional Client should be in a position to understand and make proper evaluation of the risks involved in investing in such promotions."
        },
        amtCategorization82:{
            zh:"执行订单时，提供投资服务的投资公司和信贷机构必须采取所有的合理措施，以实现客户订单的“最佳执行”，即帮客户实现最佳结果。",
            en:"When executing orders, investment firms and credit institutions providing investment services must take all reasonable steps to achieve what is called “best execution” of the Client’s orders; that is, to obtain the best possible result for their Clients.",
            vi:"Khi thực hiện các lệnh, các công ty đầu tư và tổ chức tín dụng cung cấp dịch vụ đầu tư phải thực hiện tất cả các bước hợp lý để đạt được những gì được gọi là \" sự khớp lệnh tốt nhất\" các lệnh của Khách hàng; nghĩa là, để có được kết quả tốt nhất có thể cho Khách hàng của họ.",
            "zh-Hant":"執行訂單時，提供投資服務的投資公司和信貸機構必須采取所有的合理措施，以實現客戶訂單的“最佳執行”，即幫客戶實現最佳結果。",
            id:"When executing orders, investment firms and credit institutions providing investment services must take all reasonable steps to achieve what is called “best execution” of the Client’s orders; that is, to obtain the best possible result for their Clients."
        },
        amtCategorization83:{
            zh:"当本公司代表零售客户执行订单时，最佳结果应由代表金融工具价格以及相关执行成本的综合考虑决定，包括与订单执行直接相关的、客户产生的所有费用（包括执行场地费用、清算与结算费用以及向订单执行相关的第三方支付的其他费用）。请参阅 TigerWit 订单执行政策，了解更多信息。",
            en:"Where the Firm executes an order on behalf of a Retail Client, the best possible result shall be determined in terms of the total consideration, representing the price of the financial instrument and the costs related to execution, which shall include all expenses incurred by the Client which are directly related to the execution of the order, including execution venue fees, clearing and settlement fees and any other fees paid to third parties involved in the execution of the order. Further information can be found on TigerWit’s Order Execution Policy.",
            vi:"Trong trường hợp Công ty thực hiện một lệnh thay cho Khách hàng lẻ, kết quả tốt nhất có thể được xác định theo tổng giá trị, thể hiện giá của công cụ tài chính và chi phí liên quan đến việc thực hiện, bao gồm tất cả các chi phí phát sinh của Khách hàng có liên quan trực tiếp đến việc thực hiện lệnh, bao gồm phí địa điểm thực hiện, phí thanh toán bù trừ và phí thanh toán và bất kỳ khoản phí nào khác được thanh toán cho bên thứ ba liên quan đến việc thực hiện lệnh. Bạn có thể tìm thêm thông tin về Chính sách thực thi lệnh của TigerWit.",
            "zh-Hant":"當本公司代表零售客戶執行訂單時，最佳結果應由代表金融工具價格以及相關執行成本的綜合考慮決定，包括與訂單執行直接相關的、客戶產生的所有費用（包括執行場地費用、清算與結算費用以及向訂單執行相關的第三方支付的其他費用）。請參閱 TigerWit 訂單執行政策，了解更多信息。",
            id:"Where the Firm executes an order on behalf of a Retail Client, the best possible result shall be determined in terms of the total consideration, representing the price of the financial instrument and the costs related to execution, which shall include all expenses incurred by the Client which are directly related to the execution of the order, including execution venue fees, clearing and settlement fees and any other fees paid to third parties involved in the execution of the order. Further information can be found on TigerWit’s Order Execution Policy."
        },
        amtCategorization84:{
            zh:"为专业客户提供最佳执行时，公司无需将交易总成本视作为客户实现最佳执行的最重要因素。",
            en:"When providing Professional Client with best execution the Company is not required to prioritise the overall costs of the transaction as being the most important factor in achieving best execution for them.",
            vi:"Khi cung cấp cho Khách hàng Chuyên nghiệp kết quả chốt lệnh tốt nhất Công ty không bắt buộc phải ưu tiên chi phí tổng thể của giao dịch như là yếu tố quan trọng nhất trong việc đạt được việc khớp lệnh tốt nhất cho họ.",
            "zh-Hant":"為專業客戶提供最佳執行時，公司無需將交易總成本視作為客戶實現最佳執行的最重要因素。",
            id:"When providing Professional Client with best execution the Company is not required to prioritise the overall costs of the transaction as being the most important factor in achieving best execution for them."
        },
        amtCategorization85:{
            zh:"(a)提供投资服务的投资公司和信贷机构必须从客户处取得公司或信贷机构（视情况而定）所需的资料，用以了解客户基本的真实情况，以便有合理的依据相信及斟酌所提供服务和拟推荐交易的性质和范畴，或在过程中提供投资组合管理服务。相关信息需满足以下标准：(i) 信息符合客户的投资目标；(ii) 信息能说明客户有经济能力可承受任何与其投资目标一致的相关投资风险；(iii) 信息能说明客户具备必要的经验和知识，以便了解交易或投资组合管理所涉及的风险。当本公司向专业客户提供投资服务时，出于上文第(iii)款的目的，本公司有权假设，对于向已分类客户提供的产品、交易和服务，客户拥有必要的经验以及知识水平。另外在一定情况下，本公司应有权假设专业客户有经济能力可承受任何与其投资目标一致的相关投资风险。",
            en:"(a) Investment firms and credit institutions providing investment services must obtain from clients such information as is necessary for the firm or credit institution, as the case may be, to understand the essential facts about the client and to have a reasonable basis for believing, giving due consideration to the nature and extent of the service provided, that the specific transaction to be recommended, or entered into in the course of providing a portfolio management service, satisfies the following criteria: (i) It meets the investment objectives of the Client in question; (ii) It is such that the Client is able financially to bear any related investment risks consistent with his investment objectives; (iii) It is such that the client has the necessary experience and knowledge in order to understand risks involved in the transaction or in the management of his portfolio. Where the Firm provides an investment service to a Professional Client it shall be entitled to assume that, in relation to the products, transactions and services for which it is so classified, the Client has the necessary level of experience and knowledge for the purposes of paragraph (iii) above. In addition, under certain circumstances, the Firm shall be entitled to assume that a Professional Client is able financially to bear any investment risks consistent with its investment objectives.",
            vi:"(a) Các công ty đầu tư và tổ chức tín dụng cung cấp dịch vụ đầu tư phải có được từ khách hàng những thông tin cần thiết cho tổ chức tín dụng hoặc doanh nghiệp, để hiểu được các thông tin cần thiết về khách hàng và có cơ sở hợp lý để tin tưởng, mang đến sự đánh giá thích hợp với bản chất và mức độ của các dịch vụ được cung cấp, giao dịch cụ thể được giới thiệu, hoặc tham gia vào quá trình cung cấp dịch vụ quản lý danh mục đầu tư, thỏa mãn các tiêu chí sau: (i) Đáp ứng các mục tiêu đầu tư của Khách hàng được đề cập; (ii) Khách hàng có khả năng tài chính để chịu bất kỳ rủi ro đầu tư liên quan nào phù hợp với mục tiêu đầu tư của mình; (iii) Khách hàng có kinh nghiệm và kiến thức cần thiết để hiểu các rủi ro liên quan đến giao dịch hoặc trong việc quản lý danh mục đầu tư của mình. Trường hợp Công ty cung cấp dịch vụ đầu tư cho một Khách hàng Chuyên nghiệp, và có quyền giả định rằng, liên quan đến các sản phẩm, giao dịch và dịch vụ được phân loại, Khách hàng có trình độ và kinh nghiệm cần thiết cho các mục đích của đoạn (iii) ở trên. Ngoài ra, trong một số trường hợp, Công ty có quyền giả định rằng một khách hàng chuyên nghiệp có khả năng tài chính để chịu mọi rủi ro đầu tư phù hợp với mục tiêu đầu tư của mình.",
            "zh-Hant":"(a)提供投資服務的投資公司和信貸機構必須從客戶處取得公司或信貸機構（視情況而定）所需的資料，用以了解客戶基本的真實情況，以便有合理的依據相信及斟酌所提供服務和擬推薦交易的性質和範疇，或在過程中提供投資組合管理服務。相關信息需滿足以下標準：(i) 信息符合客戶的投資目標；(ii) 信息能說明客戶有經濟能力可承受任何與其投資目標壹致的相關投資風險；(iii) 信息能說明客戶具備必要的經驗和知識，以便了解交易或投資組合管理所涉及的風險。當本公司向專業客戶提供投資服務時，出於上文第(iii)款的目的，本公司有權假設，對於向已分類客戶提供的產品、交易和服務，客戶擁有必要的經驗以及知識水平。另外在壹定情況下，本公司應有權假設專業客戶有經濟能力可承受任何與其投資目標壹致的相關投資風險。",
            id:"(a) Investment firms and credit institutions providing investment services must obtain from clients such information as is necessary for the firm or credit institution, as the case may be, to understand the essential facts about the client and to have a reasonable basis for believing, giving due consideration to the nature and extent of the service provided, that the specific transaction to be recommended, or entered into in the course of providing a portfolio management service, satisfies the following criteria: (i) It meets the investment objectives of the Client in question; (ii) It is such that the Client is able financially to bear any related investment risks consistent with his investment objectives; (iii) It is such that the client has the necessary experience and knowledge in order to understand risks involved in the transaction or in the management of his portfolio. Where the Firm provides an investment service to a Professional Client it shall be entitled to assume that, in relation to the products, transactions and services for which it is so classified, the Client has the necessary level of experience and knowledge for the purposes of paragraph (iii) above. In addition, under certain circumstances, the Firm shall be entitled to assume that a Professional Client is able financially to bear any investment risks consistent with its investment objectives."
        },
        amtCategorization86:{
            zh:"(b)一旦发现问题，公司必须当即告知零售客户有关正确执行其订单的重大问题。",
            en:"(b) The Firm must inform retail clients of material difficulties relevant to the proper carrying out of their order(s) promptly upon becoming aware of the difficulty.",
            vi:"(b) Công ty phải thông báo cho khách hàng bán lẻ về những khó khăn vật chất liên quan đến việc thực hiện đúng (các) lệnh của họ ngay khi nhận thức được sự khó khăn.",
            "zh-Hant":"(b)壹旦發現問題，公司必須當即告知零售客戶有關正確執行其訂單的重大問題。",
            id:"(b) The Firm must inform retail clients of material difficulties relevant to the proper carrying out of their order(s) promptly upon becoming aware of the difficulty."
        },
        amtCategorization87:{
            zh:"(c)提供以下相关信息：(i) 多除了投资组合管理，对于订单执行的更多信息，零售客户应获得比专业客户更多的信息(ii) 对代表客户所进行的投资组合管理活动的定期报表，零售客户应获得比专业客户更频繁的信息",
            en:"(c) The Firm is required to provide Retail Clients; (i) With more information than Professional Clients as regards to the execution of orders, other than for portfolio management (ii) With periodic statements in respect of portfolio management activities carried out on their behalf, more frequently than for Professional Clients",
            vi:"(c) Công ty được yêu cầu cung cấp cho Khách hàng lẻ; (i) Với nhiều thông tin hơn các khách hàng chuyên nghiệp liên quan đến việc thực hiện các lệnh, ngoài quản lý danh mục đầu tư (ii) Với các báo cáo định kỳ về hoạt động quản lý danh mục được thực hiện thay mặt cho họ, thường xuyên hơn cho các khách hàng chuyên nghiệp",
            "zh-Hant":"(c)提供以下相關信息：(i) 多除了投資組合管理，對於訂單執行的更多信息，零售客戶應獲得比專業客戶更多的信息(ii) 對代表客戶所進行的投資組合管理活動的定期報表，零售客戶應獲得比專業客戶更頻繁的信息",
            id:"(c) The Firm is required to provide Retail Clients; (i) With more information than Professional Clients as regards to the execution of orders, other than for portfolio management (ii) With periodic statements in respect of portfolio management activities carried out on their behalf, more frequently than for Professional Clients"
        },
        amtCategorization88:{
            zh:"(d)若本公司向新的零售客户提供的是投资服务而非投资建议，本公司必须与客户签订基本书面协议，列明公司和客户的基本权利与义务。",
            en:"(d) If the Firm provides an investment service other than investment advice to a new Retail Client, the Firm must enter into a written basic agreement with the Client, setting out the essential rights and obligations of the Firm and the Client.",
            vi:"(d) Nếu Công ty cung cấp dịch vụ đầu tư không phải là tư vấn đầu tư cho Khách hàng lẻ mới, Công ty phải ký thỏa thuận cơ bản bằng văn bản với Khách hàng, nêu rõ các quyền và nghĩa vụ thiết yếu của Công ty và Khách hàng.",
            "zh-Hant":"(d)若本公司向新的零售客戶提供的是投資服務而非投資建議，本公司必須與客戶簽訂基本書面協議，列明公司和客戶的基本權利與義務。",
            id:"(d) If the Firm provides an investment service other than investment advice to a new Retail Client, the Firm must enter into a written basic agreement with the Client, setting out the essential rights and obligations of the Firm and the Client."
        },
        amtCategorization89:{
            zh:"(e)未经零售客户签字或采用等效替代机制，使其明确表示同意根据特定条款应用金融产品，本公司一概不得代表客户自身账户或另一个客户账户使用金融产品。",
            en:"(e) We shall not use financial instruments held by us on behalf of a Client for his/her own account or the account of another Client of ourselves, without the Client’s express consent to the use of the instruments on specified terms, as evidenced, in the case of a Retail Client, by his/her signature or equivalent alternative mechanism.",
            vi:"(e) Chúng tôi sẽ không tự ý sử dụng các công cụ tài chính mà chúng tôi nắm giữ đại diện cho Khách hàng trên tài khoản của chính họ hoặc tài khoản của Khách hàng khác mà không có sự đồng ý rõ ràng của Khách hàng đối với việc sử dụng các công cụ theo các điều khoản cụ thể, mà không có bằng chứng sự đồng ý của khách hàng, trong trường hợp Khách Hàng Lẻ, là chữ kí hoặc một bằng chứng tương đương.",
            "zh-Hant":"(e)未經零售客戶簽字或采用等效替代機制，使其明確表示同意根據特定條款應用金融產品，本公司壹概不得代表客戶自身賬戶或另壹個客戶賬戶使用金融產品。",
            id:"(e) We shall not use financial instruments held by us on behalf of a Client for his/her own account or the account of another Client of ourselves, without the Client’s express consent to the use of the instruments on specified terms, as evidenced, in the case of a Retail Client, by his/her signature or equivalent alternative mechanism."
        },
        amtCategorization90:{
            zh:"2.合资格交易对手",
            en:"2.Eligible Counterparties",
            vi:"2.Đối tác đủ tư cách pháp nhân.",
            "zh-Hant":"2.合資格交易對手",
            id:"2.Eligible Counterparties"
        },
        amtCategorization91:{
            zh:"若本公司将客户视为合资格交易对手，客户有权依法享有比专业客户更低的保护。以下情况除外：",
            en:"Where the Firm treats the Client as an Eligible Counterparty, the Client will be entitled to fewer protections under the law than he/she/they would be entitled to as a Professional Client. In particular, and in addition to the above: ",
            vi:"Trong trường hợp Công ty phân loại Khách hàng là Đối tác Đủ tư cách pháp nhân, Khách hàng sẽ được hưởng ít sự bảo vệ theo luật hơn là Khách hàng sẽ được quyền làm Khách hàng Chuyên nghiệp. Đặc biệt, và ngoài những điều trên:",
            "zh-Hant":"若本公司將客戶視為合資格交易對手，客戶有權依法享有比專業客戶更低的保護。以下情況除外：",
            id:"Where the Firm treats the Client as an Eligible Counterparty, the Client will be entitled to fewer protections under the law than he/she/they would be entitled to as a Professional Client. In particular, and in addition to the above: "
        },
        amtCategorization92:{
            zh:"(a)本公司在执行客户订单时，无需向客户提供最佳执行；",
            en:"(a) The Firm is not required to provide the Client with best execution in executing the Client’s orders;",
            vi:"(a) Công ty không bắt buộc phải cung cấp cho Khách hàng thực hiện tốt nhất trong việc thực hiện các lệnh của Khách hàng;",
            "zh-Hant":"(a)本公司在執行客戶訂單時，無需向客戶提供最佳執行；",
            id:"(a) The Firm is not required to provide the Client with best execution in executing the Client’s orders;"
        },
        amtCategorization93:{
            zh:"(b)本公司无需向客户披露有关本公司支付或收取的任何费用或佣金的情况；",
            en:"(b) The Firm is not required to disclose Client Information regarding any fees or commissions that the Firm pays or receives;",
            vi:"(b) Công ty không bắt buộc phải tiết lộ Thông tin Khách hàng về bất kỳ khoản phí hoặc hoa hồng nào mà Công ty trả hoặc nhận;",
            "zh-Hant":"(b)本公司無需向客戶披露有關本公司支付或收取的任何費用或傭金的情況；",
            id:"(b) The Firm is not required to disclose Client Information regarding any fees or commissions that the Firm pays or receives;"
        },
        amtCategorization94:{
            zh:"(c)本公司无需评估向客户所提供产品或服务的适用性或恰当性，但可以假设客户具备为自己选择最适宜产品或服务的专业知识，他/她/他们有实现投资目标的经济能力；",
            en:"(c) The Firm is not required to assess the suitability or appropriateness of a product or service that it provides to the Client but can assume that the Client has the expertise to choose the most appropriate product or service for him/her/them and that he/she/they is/are able financially to bear any investment objectives;",
            vi:"(c) Công ty không bắt buộc phải đánh giá tính phù hợp hoặc thích hợp của sản phẩm hoặc dịch vụ mà nó cung cấp cho Khách hàng nhưng có thể giả định rằng Khách hàng có chuyên môn để chọn sản phẩm hoặc dịch vụ phù hợp nhất cho họ và họ / họ có / có khả năng tài chính để thực hiện bất kỳ mục tiêu đầu tư nào;",
            "zh-Hant":"(c)本公司無需評估向客戶所提供產品或服務的適用性或恰當性，但可以假設客戶具備為自己選擇最適宜產品或服務的專業知識，他/她/他們有實現投資目標的經濟能力；",
            id:"(c) The Firm is not required to assess the suitability or appropriateness of a product or service that it provides to the Client but can assume that the Client has the expertise to choose the most appropriate product or service for him/her/them and that he/she/they is/are able financially to bear any investment objectives;"
        },
        amtCategorization95:{
            zh:"(d)本公司无需向客户提供有关本公司、其服务以及本公司酬劳安排的信息；",
            en:"(d) The Firm is not required to provide the Client information about the Firm, its services and the arrangements through which the Firm will be remunerated;",
            vi:"(d) Công ty không bắt buộc phải cung cấp thông tin cho Khách hàng về Công ty, các dịch vụ của Công ty và các thỏa thuận mà Công ty sẽ được trả thù lao;",
            "zh-Hant":"(d)本公司無需向客戶提供有關本公司、其服務以及本公司酬勞安排的信息；",
            id:"(d) The Firm is not required to provide the Client information about the Firm, its services and the arrangements through which the Firm will be remunerated;"
        },
        amtCategorization96:{
            zh:"(e)本公司无需向客户提供他/她/他们通过本公司所选择的产品或服务的相关风险披露；",
            en:"(e) The Firm is not required to provide the Client with risk disclosures on the products or services that he/she/they select/s from the Firm; and",
            vi:"(e) Công ty không bắt buộc phải cung cấp cho Khách hàng những tiết lộ rủi ro về các sản phẩm hoặc dịch vụ mà họ chọn / s từ Công ty; và",
            "zh-Hant":"(e)本公司無需向客戶提供他/她/他們通過本公司所選擇的產品或服務的相關風險披露；",
            id:"(e) The Firm is not required to provide the Client with risk disclosures on the products or services that he/she/they select/s from the Firm; and"
        },
        amtCategorization97:{
            zh:"(f)本公司无需向客户提供其订单的执行报告或其投资的管理报告。",
            en:"(f) The Firm is not required to provide reports to the Client on the execution of his/her/their orders or the management of his/her/their investments.",
            vi:"(f) Công ty không bắt buộc phải cung cấp báo cáo cho Khách hàng về việc thực hiện các lệnh của họ / hoặc lệnh của họ hoặc việc quản lý các khoản đầu tư của họ.",
            "zh-Hant":"(f)本公司無需向客戶提供其訂單的執行報告或其投資的管理報告。",
            id:"(f) The Firm is not required to provide reports to the Client on the execution of his/her/their orders or the management of his/her/their investments."
        },
        amtCategorization98:{
            zh:"常见问题解答",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題解答",
            id:"FAQs"
        },
        amtCategorization99:{
            zh:"1.关于此工作程序的问题首先传达给客户服务部。",
            en:"Questions regarding this procedure should be addressed, in the first instance, to the Customer Support Department.",
            vi:"Các câu hỏi liên quan đến thủ tục này nên được giải quyết, trong trường hợp đầu tiên, được gửi đến Bộ phận hỗ trợ khách hàng.",
            "zh-Hant":"1.關於此工作程序的問題首先傳達給客戶服務部。",
            id:"Questions regarding this procedure should be addressed, in the first instance, to the Customer Support Department."
        },
        amtCategorization100:{
            zh:"联系方式",
            en:"Contacts",
            vi:"LIÊN HỆ",
            "zh-Hant":"聯系方式",
            id:"Contacts"
        },
        amtCategorization101:{
            zh:"客户服务部：",
            en:"Customer Support Department: ",
            vi:"Bộ Phận Hỗ Trợ Khách Hàng: ",
            "zh-Hant":"客戶服務部：",
            id:"Customer Support Department: "
        },
        amtCategorization103:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtCategorization104:{
            zh:"合规部：",
            en:"Compliance Department: ",
            vi:"Bộ Phận Giám Sát: ",
            "zh-Hant":"合規部：",
            id:"Compliance Department: "
        },
        amtCategorization106:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtFunds1:{
            zh:"作为一家受监管的实体，TigerWit Limited 符合下列有关客户资金的监管要求：",
            en:"As a regulated entity, TigerWit Limited meets the following regulatory requirements relating to client funds: ",
            vi:"Là một thực thể có quy định, TigerWit Limited đáp ứng các yêu cầu pháp lý sau đây liên quan đến quỹ khách hàng:",
            "zh-Hant":"作為壹家受監管的實體，TigerWit Limited 符合下列有關客戶資金的監管要求：",
            id:"As a regulated entity, TigerWit Limited meets the following regulatory requirements relating to client funds: "
        },
        amtFunds2:{
            zh:"资金隔离",
            en:"Segregation of Funds",
            vi:"Phân chia các quỹ",
            "zh-Hant":"資金隔離",
            id:"Segregation of Funds"
        },
        amtFunds3:{
            zh:"所有存入 TigerWit 的客户资金与本公司自有的资金完全隔离，并存放在独立的银行账户。这确保了属于客户的资金不能被用于任何其他目的。我们的中期和年度财务报表接受外部审计，确保我们的操作尽可能按照最高的标准进行。",
            en:"All client funds deposited with TigerWit are fully segregated from the company’s own funds and are kept in separate bank accounts. This ensures that funds belonging to clients cannot be used for any other purpose. Our interim and annual financial reports are externally audited, ensuring that our operations are conducted to the highest possible standards.",
            vi:"Tất cả các quỹ của khách hàng được ký quỹ với TigerWit được tách biệt hoàn toàn khỏi các quỹ của chính công ty và được giữ trong các tài khoản ngân hàng riêng biệt. Điều này đảm bảo rằng các quỹ thuộc về khách hàng không thể được sử dụng cho bất kỳ mục đích nào khác. Báo cáo tài chính tạm thời và hàng năm của chúng tôi được kiểm toán bên ngoài, đảm bảo rằng các hoạt động của chúng tôi được thực hiện theo các tiêu chuẩn cao nhất có thể.",
            "zh-Hant":"所有存入 TigerWit 的客戶資金與本公司自有的資金完全隔離，並存放在獨立的銀行賬戶。這確保了屬於客戶的資金不能被用於任何其他目的。我們的中期和年度財務報表接受外部審計，確保我們的操作盡可能按照最高的標準進行。",
            id:"All client funds deposited with TigerWit are fully segregated from the company’s own funds and are kept in separate bank accounts. This ensures that funds belonging to clients cannot be used for any other purpose. Our interim and annual financial reports are externally audited, ensuring that our operations are conducted to the highest possible standards."
        },
        amtFunds4:{
            zh:"我们采取的其他措施",
            en:"Additional Measures We Take",
            vi:"Các Biện Pháp Bổ Sung Mà Chúng Tôi Thực Hiện",
            "zh-Hant":"我們采取的其他措施",
            id:"Additional Measures We Take"
        },
        amtFunds5:{
            zh:"TigerWit 与多家主要银行机构合作，客户资金被存放在银行，例如汇丰银行（HSBC）和澳洲联邦银行（CBA）等。内部限制确保了客户资金分散在不同的银行之间，同时会定期监控信用风险。客户资金仅存放在客户资金隔离受当地法律框架支持的司法管辖区。",
            en:"TigerWit is partnered with several major banking institutions, with client funds kept in banks such as HSBC and CBA. Internal limits ensure a diversification of client funds among banks, while credit risk is regularly monitored. Client funds are only kept in jurisdictions where segregation of client funds is supported by the local legal framework.",
            vi:"TigerWit hợp tác với một số tổ chức ngân hàng lớn, với các quỹ khách hàng được giữ tại các ngân hàng như HSBC và CBA. Các giới hạn nội bộ đảm bảo đa dạng hóa các quỹ khách hàng giữa các ngân hàng, trong khi rủi ro tín dụng thường xuyên được sao chép. Các quỹ của khách hàng chỉ được giữ ở các khu vực pháp lý, nơi sự phân chia các quỹ của khách hàng được hỗ trợ bởi khung pháp lý địa phương.",
            "zh-Hant":"TigerWit 與多家主要銀行機構合作，客戶資金被存放在銀行，例如匯豐銀行（HSBC）和澳洲聯邦銀行（CBA）等。內部限制確保了客戶資金分散在不同的銀行之間，同時會定期監控信用風險。客戶資金僅存放在客戶資金隔離受當地法律框架支持的司法管轄區。",
            id:"TigerWit is partnered with several major banking institutions, with client funds kept in banks such as HSBC and CBA. Internal limits ensure a diversification of client funds among banks, while credit risk is regularly monitored. Client funds are only kept in jurisdictions where segregation of client funds is supported by the local legal framework."
        },
        amtFunds6:{
            zh:"只要没有受到操纵且真诚接受，TigerWit 向所有客户提供负结余保护保证，作为客户协议的组成部分。我们承诺执行严格的政策，确保客户的损失永远不会超过他们的总入金。",
            en:"TigerWit offers Negative Balance Protection guarantee to all clients as part of the Client Agreement, as long as it is not manipulated and is accepted in good faith. We are committed to a strict policy ensuring that clients may never lose more than their total deposits.",
            vi:"TigerWit cung cấp cho khách hàng chính sách bảo vệ tránh số dư âm cho tất cả khách hàng như là một phần của Hợp đồng khách hàng, miễn là điều này không được thao túng và được chấp nhận với thiện chí. Chúng tôi cam kết một chính sách nghiêm ngặt đảm bảo rằng khách hàng không bao giờ có thể mất nhiều hơn tổng số tiền gửi của họ.",
            "zh-Hant":"只要沒有受到操縱且真誠接受，TigerWit 向所有客戶提供負結余保護保證，作為客戶協議的組成部分。我們承諾執行嚴格的政策，確保客戶的損失永遠不會超過他們的總入金。",
            id:"TigerWit offers Negative Balance Protection guarantee to all clients as part of the Client Agreement, as long as it is not manipulated and is accepted in good faith. We are committed to a strict policy ensuring that clients may never lose more than their total deposits."
        },
        amtExecution1:{
            zh:"序言",
            en:"Introduction",
            vi:"Giới thiệu",
            "zh-Hant":"序言",
            id:"Introduction"
        },
        amtExecution2:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或“本公司”）在 巴 哈 马 国 注 册 成 立 （ 注 册 证 书 编 号198255B）。我们的注册办事处位于 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.TigerWit Limited (sau đây gọi tắt là \"TigerWit\", \"Doanh nghiệp\" hoặc \"Công ty\") được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或“本公司”）在 巴 哈 馬 國 註 冊 成 立 （ 註 冊 證 書 編 號198255B）。我們的註冊辦事處位於 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtExecution3:{
            zh:"2.本订单执行政策（以下称“本政策”）构成客户协议的一部分。所以，您与本公司签署客户协议，即同意本公司所提供的与金融工具有关的执行政策的条款，本文件所载合同规范可在网站 http://global.tigerwit.com（“金融工具”）在线获取。",
            en:"2.This Order Execution Policy (hereinafter the “Policy”) forms part of the Client Agreement. Therefore, by entering into the Client Agreement with the Firm, you are also agreeing to the terms of our Order Execution Policy relating to financial instruments provided by the Firm, the contract specifications of which are available online at http://global.tigerwit.com (the \"Financial Instruments\"), as set out in this document. ",
            vi:"2.Chính sách Thực thi Lệnh này (sau đây gọi là “Chính sách”) là một phần của Hợp đồng Khách hàng. Do đó, bằng cách ký kết Hợp đồng Khách hàng với Công ty, bạn cũng đồng ý với các điều khoản của Chính sách Thực hiện Lệnh liên quan đến các công cụ tài chính do Công ty cung cấp, thông số hợp đồng có sẵn trên mạng tại http: //global.tigerwit. com (\"Công cụ tài chính\"), như được nêu trong tài liệu này.",
            "zh-Hant":"2.本訂單執行政策（以下稱“本政策”）構成客戶協議的壹部分。所以，您與本公司簽署客戶協議，即同意本公司所提供的與金融工具有關的執行政策的條款，本文件所載合同規範可在網站 http://global.tigerwit.com（“金融工具”）在線獲取。",
            id:"2.This Order Execution Policy (hereinafter the “Policy”) forms part of the Client Agreement. Therefore, by entering into the Client Agreement with the Firm, you are also agreeing to the terms of our Order Execution Policy relating to financial instruments provided by the Firm, the contract specifications of which are available online at http://global.tigerwit.com (the \"Financial Instruments\"), as set out in this document. "
        },
        amtExecution4:{
            zh:"除非另有规定，本政策中使用的术语应具有 SCB 条例赋予的相同含义。",
            en:"Unless otherwise defined, any defined terms in this Policy will have the same meaning given by SCB regulations. ",
            vi:"Trừ khi được định nghĩa khác, bất kỳ điều khoản nào được xác định trong Chính sách này sẽ có cùng ý nghĩa theo quy định của SCB.",
            "zh-Hant":"除非另有規定，本政策中使用的術語應具有 SCB 條例賦予的相同含義。",
            id:"Unless otherwise defined, any defined terms in this Policy will have the same meaning given by SCB regulations. "
        },
        amtExecution5:{
            zh:"范围和服务",
            en:"Scope and Services",
            vi:"Phạm vi và dịch vụ",
            "zh-Hant":"範圍和服務",
            id:"Scope and Services"
        },
        amtExecution6:{
            zh:"1.本政策从 2017 年 6 月起生效，适用于所有客户（零售和专业客户）。",
            en:"1.The Policy is effective from June 2017 and applies to all clients, retail and professional.",
            vi:"1.Chính sách có hiệu lực từ tháng 6 năm 2017 và áp dụng cho tất cả khách hàng, đơn lẻ và chuyên nghiệp.",
            "zh-Hant":"1.本政策從 2017 年 6 月起生效，適用於所有客戶（零售和專業客戶）。",
            id:"1.The Policy is effective from June 2017 and applies to all clients, retail and professional."
        },
        amtExecution7:{
            zh:"2.本政策在执行本公司提供的金融工具交易时适用。本公司所提供的金融工具为差价合约。本公司可裁量决定可用于交易的金融工具类型以及发布可进行交易的价格。本公司通过其交易平台向客户提供实时滚动价格“报价”，以及从第三方流动性供应商收到的可用数量（“市场深度”）细分。本公司始终是所有交易的对手方（或做市商）；所以如果客户决定在本公司开设金融工具头寸，该头寸只能通过本公司平仓。",
            en:"2.This Policy applies when executing transactions in the Financial Instruments provided by the Firm. The Financial Instruments provided by the Firm are Contracts for Difference. It is up to the Firm’s discretion to decide which types of Financial Instruments to make available and to publish the prices at which these can be traded. The Firm, through its trading platform, provides the client with live streaming prices, “Quotes”, along with a breakdown of the available volumes (“market depth”) as received from its third-party liquidity providers. The Firm is always the counterparty (or principal) to every trade; therefore, if the Client decides to open a position in a Financial Instrument with the Firm, that position can only be closed with the Firm.",
            vi:"2. Chính sách này áp dụng khi thực hiện giao dịch với các Công cụ tài chính do Công ty cung cấp là Hợp Đồng Chênh Lệch. Tùy theo quyết định của Công ty để quyết định loại Công cụ tài chính nào có sẵn và công bố giá mà tại đó chúng có thể được giao dịch. Công ty, thông qua nền tảng giao dịch, cung cấp cho khách hàng dòng giá trực tiếp, “Báo giá”, cùng với sự đột phá xuống của các khối lượng sẵn có (“độ sâu thị trường”) nhận được từ các nhà cung cấp thanh khoản của bên thứ ba. Công ty luôn là đối tác (hoặc người chịu trách nhiệm chính) cho mọi giao dịch; do đó, nếu Khách hàng quyết định mở một vị thế đối với Công cụ tài chính với Công ty, vị thế đó chỉ có thể được đóng lại với Công ty.",
            "zh-Hant":"2.本政策在執行本公司提供的金融工具交易時適用。本公司所提供的金融工具為差價合約。本公司可裁量決定可用於交易的金融工具類型以及發布可進行交易的價格。本公司通過其交易平臺向客戶提供實時滾動價格“報價”，以及從第三方流動性供應商收到的可用數量（“市場深度”）細分。本公司始終是所有交易的對手方（或做市商）；所以如果客戶決定在本公司開設金融工具頭寸，該頭寸只能通過本公司平倉。",
            id:"2.This Policy applies when executing transactions in the Financial Instruments provided by the Firm. The Financial Instruments provided by the Firm are Contracts for Difference. It is up to the Firm’s discretion to decide which types of Financial Instruments to make available and to publish the prices at which these can be traded. The Firm, through its trading platform, provides the client with live streaming prices, “Quotes”, along with a breakdown of the available volumes (“market depth”) as received from its third-party liquidity providers. The Firm is always the counterparty (or principal) to every trade; therefore, if the Client decides to open a position in a Financial Instrument with the Firm, that position can only be closed with the Firm."
        },
        amtExecution8:{
            zh:"订单类型的定义请参看附件 I 执行要素价格",
            en:"Order Type Definitions Please refer to Appendix I Execution Elements Prices",
            vi:"Định nghĩa Các Loại Lệnh Vui lòng tham khảo Phụ lục I Các Yếu Tố Thực Hiện Giá.",
            "zh-Hant":"訂單類型的定義請參看附件 I 執行要素價格",
            id:"Order Type Definitions Please refer to Appendix I Execution Elements Prices"
        },
        amtExecution9:{
            zh:"TigerWit 从部分世界领先的流动性供应商获得价格。拥有多个流动性供应商非常重要，尤其是在非正常的市场条件下，例如发生极端的波动时。在这些情况下，即使是一定数量的流动性供应商决定扩大点差或完全停止报价，本公司仍然能够向客户提供有竞争力的价格，对交易平台包括 TigerWit 的加价。其余的流动性供应商会继续竞相向 TigerWit 提供最佳的“买价”和“卖价”。",
            en:"TigerWit receives price feeds from some of the world’s leading liquidity providers. Having multiple liquidity providers is important especially during abnormal market conditions, such as times of extreme volatility. Under these conditions and even if a certain number of liquidity providers decide to widen the spreads or stop quoting prices at all, the Firm is still able to provide clients with competitive prices which for the trading platforms include TigerWit’s mark-up. The remaining liquidity providers shall continue competing to provide TigerWit the best ‘bid’ and ‘ask’ prices.",
            vi:"TigerWit nhận được nguồn cập nhật dữ liệu giá từ một số nhà cung cấp thanh khoản hàng đầu thế giới. Có nhiều nhà cung cấp thanh khoản là đặc biệt quan trọng là trong điều kiện thị trường bất thường, chẳng hạn như thời điểm thị trường cực kì biến động. Dưới những điều kiện này và ngay cả khi một số nhà cung cấp thanh khoản nhất định quyết định tăng spread giá hoặc ngừng đưa ra chào giá, Công ty vẫn có thể cung cấp cho khách hàng mức giá cạnh tranh cho nền tảng giao dịch bao gồm lợi nhuận gộp của TigerWit. Các nhà cung cấp thanh khoản còn lại sẽ tiếp tục cạnh tranh để cung cấp cho TigerWit giá 'giá chào bán' và ' giá mua' tốt nhất.",
            "zh-Hant":"TigerWit 從部分世界領先的流動性供應商獲得價格。擁有多個流動性供應商非常重要，尤其是在非正常的市場條件下，例如發生極端的波動時。在這些情況下，即使是壹定數量的流動性供應商決定擴大點差或完全停止報價，本公司仍然能夠向客戶提供有競爭力的價格，對交易平臺包括 TigerWit 的加價。其余的流動性供應商會繼續競相向 TigerWit 提供最佳的“買價”和“賣價”。",
            id:"TigerWit receives price feeds from some of the world’s leading liquidity providers. Having multiple liquidity providers is important especially during abnormal market conditions, such as times of extreme volatility. Under these conditions and even if a certain number of liquidity providers decide to widen the spreads or stop quoting prices at all, the Firm is still able to provide clients with competitive prices which for the trading platforms include TigerWit’s mark-up. The remaining liquidity providers shall continue competing to provide TigerWit the best ‘bid’ and ‘ask’ prices."
        },
        amtExecution10:{
            zh:"重新报价",
            en:"Re-quoting ",
            vi:"Chào giá lại",
            "zh-Hant":"重新報價",
            id:"Re-quoting "
        },
        amtExecution11:{
            zh:"这是在已提交“即时订单”之后向客户提供二次报价的做法；客户必须在执行订单前同意这一报价。如果客户原来指定的申请价格不能使用，TigerWit 将对“即时订单”重新报价。提供给客户的二次报价是 TigerWit 从第三方流动性供应商获得的次优价格。TigerWit 对“挂单”不予重新报价。",
            en:"This is the practice of providing a secondary quote to the client after an ‘instant order’ has been submitted; the client must agree to this quote before the order is executed. TigerWit will re- quote ‘instant orders’ if the requested price originally specified by the client is not available. The secondary quote provided to the client is the next available price received by TigerWit from its thirdparty liquidity providers. TigerWit does not requote ‘pending orders’",
            vi:"Đây là việc cung cấp một báo giá thứ cấp cho khách hàng sau khi một 'lệnh tức thì' đã được gửi; khách hàng phải đồng ý với báo giá này trước khi lệnh được thực thi. TigerWit sẽ báo lại 'các lệnh tức thì' nếu giá được yêu cầu ban đầu do khách hàng chỉ định không có sẵn. Báo giá thứ cấp được cung cấp cho khách hàng là giá sẵn có tiếp theo mà TigerWit nhận được từ các nhà cung cấp thanh khoản của bên thứ ba. TigerWit không yêu cầu 'lệnh chờ xử lý'",
            "zh-Hant":"這是在已提交“即時訂單”之後向客戶提供二次報價的做法；客戶必須在執行訂單前同意這壹報價。如果客戶原來指定的申請價格不能使用，TigerWit 將對“即時訂單”重新報價。提供給客戶的二次報價是 TigerWit 從第三方流動性供應商獲得的次優價格。TigerWit 對“掛單”不予重新報價。",
            id:"This is the practice of providing a secondary quote to the client after an ‘instant order’ has been submitted; the client must agree to this quote before the order is executed. TigerWit will re- quote ‘instant orders’ if the requested price originally specified by the client is not available. The secondary quote provided to the client is the next available price received by TigerWit from its thirdparty liquidity providers. TigerWit does not requote ‘pending orders’"
        },
        amtExecution12:{
            zh:"滑点",
            en:"Slippage",
            vi:"Slippage (trượt giá)",
            "zh-Hant":"滑點",
            id:"Slippage"
        },
        amtExecution13:{
            zh:"在订单被提交用于执行之时，客户申请的指定价格可能无法使用，所以订单的执行价将与客户申请的价格接近，或者存在几个点的差距。如果执行价格优于客户申请的价格，这被称为“正滑点”。相反，如果执行价格差于客户申请的价格，这被称为“负滑点”。请注意，“滑点”是正常的市场操作，也是外汇交易市场和股市在类似流动性和波动性因新闻发布、经济事件和市场开盘而发生变化的情况下的常规特征*。TigerWit 的自动执行软件不会根据与通过任何特定客户账户执行订单有关的个人参数操作。",
            en:"At the time that an order is presented for execution, the specific price requested by the client may not be available; therefore, the order will be executed close to or a number of pips away from the client’s requested price. If the execution price is better than the price requested by the client this is referred to as ‘positive slippage’. In contrast, if the execution price is worse than the price requested by the client this is referred to as ‘negative slippage’. Please be advised that ‘slippage’ is a normal market practise and a regular feature of the foreign exchange and stock markets under conditions* such as illiquidity and volatility due to news announcements, economic events and market openings. TigerWit’s automated execution software does not operate based on any individual parameters related to the execution of orders through any specific client accounts.",
            vi:"Vào thời điểm một lệnh được được ra để khớp lệnh, giá cụ thể theo yêu cầu của khách hàng có thể không có sẵn; do đó, lệnh này sẽ được khớp với mức gần với một số pip ra so với yêu cầu của khách hàng. Nếu giá khớp tốt hơn giá được khách hàng yêu cầu, điều này được gọi là 'trượt dương'. Ngược lại, nếu giá thực hiện thấp hơn giá mà khách hàng yêu cầu, điều này được gọi là \"trượt âm\". Xin lưu ý rằng 'trượt' là hoạt động thị trường bình thường và tính năng thường xuyên của thị trường ngoại hối và thị trường chứng khoán trong điều kiện * như tính thanh khoản và biến động do thông báo tin tức, sự kiện kinh tế và thị trường mở. Phần mềm khớp lệnh tự động của TigerWit không hoạt động dựa trên bất kỳ thông số riêng lẻ nào liên quan đến việc thực hiện các lệnh thông qua bất kỳ tài khoản khách hàng cụ thể nào.",
            "zh-Hant":"在訂單被提交用於執行之時，客戶申請的指定價格可能無法使用，所以訂單的執行價將與客戶申請的價格接近，或者存在幾個點的差距。如果執行價格優於客戶申請的價格，這被稱為“正滑點”。相反，如果執行價格差於客戶申請的價格，這被稱為“負滑點”。請註意，“滑點”是正常的市場操作，也是外匯交易市場和股市在類似流動性和波動性因新聞發布、經濟事件和市場開盤而發生變化的情況下的常規特征*。TigerWit 的自動執行軟件不會根據與通過任何特定客戶賬戶執行訂單有關的個人參數操作。",
            id:"At the time that an order is presented for execution, the specific price requested by the client may not be available; therefore, the order will be executed close to or a number of pips away from the client’s requested price. If the execution price is better than the price requested by the client this is referred to as ‘positive slippage’. In contrast, if the execution price is worse than the price requested by the client this is referred to as ‘negative slippage’. Please be advised that ‘slippage’ is a normal market practise and a regular feature of the foreign exchange and stock markets under conditions* such as illiquidity and volatility due to news announcements, economic events and market openings. TigerWit’s automated execution software does not operate based on any individual parameters related to the execution of orders through any specific client accounts."
        },
        amtExecution14:{
            zh:"* 请注意，这不是详尽清单。",
            en:"* Please note that this is not an exhaustive list.",
            vi:"* Xin lưu ý rằng đây không phải là danh sách đầy đủ",
            "zh-Hant":"* 請註意，這不是詳盡清單。",
            id:"* Please note that this is not an exhaustive list."
        },
        amtExecution15:{
            zh:"部分执行 如果当时市场上没有足够流动性的情况下，会部分地执行订单，以按照特定的价格执行整个订单。部分执行可能以不同的价格执行。",
            en:"Partial fills This is the practice of executing an order in parts if there is not enough liquidity in the market at the time in order to fill-in the full order at a specific price. Partial fills may be executed at different prices.",
            vi:"Điền một phần Đây là thực hành khớp một lệnh trong các bộ phận nếu không có đủ thanh khoản trên thị trường vào thời điểm đó để lấp đầy đủ vào một mức giá cụ thể. Việc điền một phần có thể được thực hiện ở các mức giá khác nhau.",
            "zh-Hant":"部分執行 如果當時市場上沒有足夠流動性的情況下，會部分地執行訂單，以按照特定的價格執行整個訂單。部分執行可能以不同的價格執行。",
            id:"Partial fills This is the practice of executing an order in parts if there is not enough liquidity in the market at the time in order to fill-in the full order at a specific price. Partial fills may be executed at different prices."
        },
        amtExecution16:{
            zh:"佣金",
            en:"Commission",
            vi:"Hoa hồng",
            "zh-Hant":"傭金",
            id:"Komisi"
        },
        amtExecution17:{
            zh:"客户在通过本平台交易基于外汇和金属的 CFD时，可能被收取佣金。更多信息可在本网页在线获取：http://global.tigerwit.com。",
            en:"Clients may be charged commission when trading CFDs on forex and metals through the platform. Further information is available online at: http://global.tigerwit.com. ",
            vi:"Khách hàng có thể bị tính phí hoa hồng khi giao dịch CFD trên ngoại hối và kim loại thông qua nền tảng này. Thông tin thêm có sẵn trực tuyến tại: http://global.tigerwit.com.",
            "zh-Hant":"客戶在通過本平臺交易基於外匯和金屬的 CFD時，可能被收取傭金。更多信息可在本網頁在線獲取：http://global.tigerwit.com。",
            id:"Clients may be charged commission when trading CFDs on forex and metals through the platform. Further information is available online at: http://global.tigerwit.com. "
        },
        amtExecution18:{
            zh:"加价",
            en:"Mark-up",
            vi:"Lợi Nhuận Gộp",
            "zh-Hant":"加價",
            id:"Mark-up"
        },
        amtExecution19:{
            zh:"客户在通过交易平台交易基于外汇、金属、石油、股票、指数和期货 CFD 时，会被收取加价。更 多 信 息 可 在 本 网 页 在 线 获 取 ：http://global.tigerwit.com。",
            en:"Clients shall be charged a mark-up on spread when trading CFDs on forex, metals, oil, equities, indices and futures through the trading platform. Further information is available online at: http://global.tigerwit.com. ",
            vi:"Khách hàng sẽ phải trả một khoản chênh lệch trên spread khi giao dịch CFD trên ngoại hối, kim loại, dầu, cổ phiếu, chỉ số và tương lai thông qua sàn giao dịch. Thông tin khác có tại: http://global.tigerwit.com.",
            "zh-Hant":"客戶在通過交易平臺交易基於外匯、金屬、石油、股票、指數和期貨 CFD 時，會被收取加價。更 多 信 息 可 在 本 網 頁 在 線 獲 取 ：http://global.tigerwit.com。",
            id:"Clients shall be charged a mark-up on spread when trading CFDs on forex, metals, oil, equities, indices and futures through the trading platform. Further information is available online at: http://global.tigerwit.com. "
        },
        amtExecution20:{
            zh:"订单类型",
            en:"Order Type",
            vi:"Loại Lệnh",
            "zh-Hant":"訂單類型",
            id:"Order Type"
        },
        amtExecution21:{
            zh:"执行即时订单",
            en:"Execution Instant Order(s)",
            vi:"(Các) Lệnh Khớp Tức Thì",
            "zh-Hant":"執行即時訂單",
            id:"Execution Instant Order(s)"
        },
        amtExecution22:{
            zh:"即时订单：这是在客户提交订单执行时以报价流所显示的“卖价”或“买价”（分别）买入或卖出的订单。",
            en:"Instant Order: this is an order to either buy or sell at the ‘ask’ or ‘bid’ price (respectively) as it appears in the quotes flow at the time the client presents the order for execution.",
            vi:"Lệnh khớp tức thì: đây là một loại lệnh để mua hoặc bán với giá 'yêu cầu' hoặc 'giá thầu' (tương ứng) khi nó xuất hiện trong luồng báo giá tại thời điểm khách đặt lệnh này để khớp lệnh.",
            "zh-Hant":"即時訂單：這是在客戶提交訂單執行時以報價流所顯示的“賣價”或“買價”（分別）買入或賣出的訂單。",
            id:"Instant Order: this is an order to either buy or sell at the ‘ask’ or ‘bid’ price (respectively) as it appears in the quotes flow at the time the client presents the order for execution."
        },
        amtExecution23:{
            zh:"挂单 止损单",
            en:"Pending Order(s) Stop Orders",
            vi:"(Các )Lệnh Dừng Lệnh Chờ",
            "zh-Hant":"掛單 止損單",
            id:"Pending Order(s) Stop Orders"
        },
        amtExecution24:{
            zh:"这是在市场到达“止损价格”时，立即买入或卖出的订单。一旦到达“止损价格”，“止损单”将被触发并被作为“市价单”对待。如果“止损单”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。对于基于外汇、现货金属、股票、指数和期货的CFD，“止损单”应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的止损单将被自动移除",
            en:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’ the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘stop orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Stop Orders placed within the current bidask spread will be automatically removed.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá dừng'. Khi thị trường đạt đến ‘giá dừng’, ‘lệnh dừng’ được kích hoạt và được coi là ‘lệnh thị trường’ *. Nếu 'lệnh dừng' không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’. Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, 'lệnh dừng' phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để chúng có giá trị. Lệnh dừng được đặt trong phạm vi giá thầu hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"這是在市場到達“止損價格”時，立即買入或賣出的訂單。壹旦到達“止損價格”，“止損單”將被觸發並被作為“市價單”對待。如果“止損單”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。對於基於外匯、現貨金屬、股票、指數和期貨的CFD，“止損單”應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的止損單將被自動移除",
            id:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’ the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘stop orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Stop Orders placed within the current bidask spread will be automatically removed."
        },
        amtExecution25:{
            zh:"止损",
            en:"Stop Loss",
            vi:"Dừng Lỗ",
            "zh-Hant":"止損",
            id:"Stop Loss"
        },
        amtExecution26:{
            zh:"这个订单是为了尽量减少亏损。一旦市场到达“止损价格”，该订单将被触发并被作为“市价单”对待*。如果“止损价格”没有被触发，将被系统保留在后面的日期。对于基于外汇、现货金属、股票、指数和期货的 CFD，“止损”单应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的“止损”单将被自动移除。",
            en:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘stop loss’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Stop Loss’ orders placed within the current bid-ask spread will be automatically removed.",
            vi:"Đây là một lệnh để giảm thiểu tổn thất. Khi thị trường đạt đến 'giá thua lỗ', lệnh được kích hoạt và được coi là 'lệnh thị trường' *. Nếu 'dừng lỗ' không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến ngày sau đó. Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, lệnh 'dừng lỗ' phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để các giá trị này hợp lệ. Các lệnh ‘Stop Loss ( Dừng Lỗ) được đặt trong phạm vi trong đó spread giá thầu hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"這個訂單是為了盡量減少虧損。壹旦市場到達“止損價格”，該訂單將被觸發並被作為“市價單”對待*。如果“止損價格”沒有被觸發，將被系統保留在後面的日期。對於基於外匯、現貨金屬、股票、指數和期貨的 CFD，“止損”單應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的“止損”單將被自動移除。",
            id:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘stop loss’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Stop Loss’ orders placed within the current bid-ask spread will be automatically removed."
        },
        amtExecution27:{
            zh:"限价单",
            en:"Limit Orders",
            vi:"Các Lệnh Giới Hạn",
            "zh-Hant":"限價單",
            id:"Limit Orders"
        },
        amtExecution28:{
            zh:"一旦市场到达“限制价格”时，立即买入或卖出的订单。一旦市场达到“限制价格”，“限价单”将以“限制价格”或更佳的价格触发和执行。如果“限制价格”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。对于基于外汇、现货金属、股票、指数和期货的 CFD，“限价单”应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的限价单将被自动移除。",
            en:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the ‘limit order’ is triggered and executed at the ‘limit price’ or better. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘limit orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Limit Orders placed within the current bid-ask spread will be automatically removed.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá giới hạn'. Khi thị trường đạt đến 'giới hạn giá', ‘lệnh giới hạn’ được kích hoạt và được thực hiện ở 'mức giá giới hạn' hoặc cao hơn. Nếu ‘lệnh giới hạn’ không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’. Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, 'lệnh giới hạn' phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để chúng có giá trị. Các lệnh giới hạn được đặt trong phạm vi chênh lệch giá thầu hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"壹旦市場到達“限制價格”時，立即買入或賣出的訂單。壹旦市場達到“限制價格”，“限價單”將以“限制價格”或更佳的價格觸發和執行。如果“限制價格”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。對於基於外匯、現貨金屬、股票、指數和期貨的 CFD，“限價單”應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的限價單將被自動移除。",
            id:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the ‘limit order’ is triggered and executed at the ‘limit price’ or better. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘limit orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Limit Orders placed within the current bid-ask spread will be automatically removed."
        },
        amtExecution29:{
            zh:"止盈",
            en:"Take Profit",
            vi:"Chốt Lời",
            "zh-Hant":"止盈",
            id:"Take Profit"
        },
        amtExecution30:{
            zh:"此订单是为了确保盈利。一旦市场到达“止盈价格”，该订单将被触发并被作为“限价单”对待。如果“止盈”没有被触发，将被系统保留到后面的日期。对于基于外汇、现货金属、股票、指数和期货的 CFD，“止盈”单应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的“止盈”单将被自动移除。",
            en:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘take profit’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Take Profit’ orders placed within the current bidask spread will be automatically removed.",
            vi:"Đây là một lệnh để đảm bảo lợi nhuận. Khi thị trường đạt đến 'giá lợi nhuận', lệnh được kích hoạt và được coi là 'lệnh giới hạn'. Nếu ‘take profit’ (chốt lời ) không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó. Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, lệnh ‘take profit’ (chốt lời) phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để các giá trị này hợp lệ. Các lệnh 'Chốt lời' được đặt trong phạm vi giá chào bán và chào mua hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"此訂單是為了確保盈利。壹旦市場到達“止盈價格”，該訂單將被觸發並被作為“限價單”對待。如果“止盈”沒有被觸發，將被系統保留到後面的日期。對於基於外匯、現貨金屬、股票、指數和期貨的 CFD，“止盈”單應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的“止盈”單將被自動移除。",
            id:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘take profit’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Take Profit’ orders placed within the current bidask spread will be automatically removed."
        },
        amtExecution31:{
            zh:"* 市价单",
            en:"* Market Order",
            vi:"* Lệnh Thị Trường",
            "zh-Hant":"* 市價單",
            id:"* Market Order"
        },
        amtExecution32:{
            zh:"这是以当前可获的市场价格买入或卖出的订单。系统自动合并从第三方流动性供应商收到的成交量，并按成交量加权平均价（VWAP）执行“市价单”，VWAP 是在执行时可用的最佳价格的平均值。如果“市价单”没有被触发，将受“取消前有效”部分所规定的条件约束。",
            en:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Cancelled’ section.",
            vi:"Đây là lệnh mua hoặc bán với giá thị trường hiện tại. Hệ thống sẽ tự động tổng hợp khối lượng nhận được từ nhà cung cấp thanh khoản của bên thứ ba và thực hiện ‘lệnh thị trường’ tại VWAP (‘Giá trung bình theo kích thước”) là mức giá trung bình và tốt nhất có sẵn tại thời điểm thực hiện. Khi 'lệnh thị trường' được kích hoạt, nó sẽ phải tuân theo các điều kiện được mô tả trong phần ‘Good’ ‘til Cancelled’ (Hết hạn).",
            "zh-Hant":"這是以當前可獲的市場價格買入或賣出的訂單。系統自動合並從第三方流動性供應商收到的成交量，並按成交量加權平均價（VWAP）執行“市價單”，VWAP 是在執行時可用的最佳價格的平均值。如果“市價單”沒有被觸發，將受“取消前有效”部分所規定的條件約束。",
            id:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Cancelled’ section."
        },
        amtExecution33:{
            zh:"取消前有效（简称“GTC”）（=到期）",
            en:"Good ‘til Cancelled (‘GTC’) (= Expiry)",
            vi:"Good ‘til Cancelled (‘GTC’) (= hết hạn)",
            "zh-Hant":"取消前有效（簡稱“GTC”）（=到期）",
            id:"Good ‘til Cancelled (‘GTC’) (= Expiry)"
        },
        amtExecution34:{
            zh:"这是客户可适用于“挂单”的执行设置。订单会保持“有效”并等待执行，直到订单被触发并作为市价单对待，或被客户取消时为止。",
            en:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client.",
            vi:"Đây là cài đặt thực khớp lệnh mà khách hàng có thể áp dụng cho 'các lệnh đang chờ xử lý'. Lệnh có thể vẫn còn 'đang hoạt động' và đang chờ xử lý cho đến khi lệnh được kích hoạt và được coi là lệnh thị trường hoặc bị hủy bởi khách hàng.",
            "zh-Hant":"這是客戶可適用於“掛單”的執行設置。訂單會保持“有效”並等待執行，直到訂單被觸發並作為市價單對待，或被客戶取消時為止。",
            id:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client."
        },
        amtExecution35:{
            zh:"挂单修改/取消",
            en:"Pending Order Modification/Cancellation",
            vi:"Điều chỉnh / Hủy lệnh đang chờ xử lý",
            "zh-Hant":"掛單修改/取消",
            id:"Pending Order Modification/Cancellation"
        },
        amtExecution36:{
            zh:"如果市场没有到达客户所指定的价格水平，客户可以修改或取消“挂单”。",
            en:"The client may modify/ cancel a ‘pending order’ if the market did not reach the level of the price specified by the client.",
            vi:"Khách hàng có thể chỉnh sửa / hủy một 'lệnh chờ' nếu thị trường không đạt đến mức giá mà khách hàng chỉ định.",
            "zh-Hant":"如果市場沒有到達客戶所指定的價格水平，客戶可以修改或取消“掛單”。",
            id:"The client may modify/ cancel a ‘pending order’ if the market did not reach the level of the price specified by the client."
        },
        amtExecution37:{
            zh:"注意：如上所述，大多数订单应由 TigerWit 的交易平台自动执行。但请注意，TigerWit 保留对于主要货币对的 100 手或以上的订单拥有自由裁量权，可全部或部分手动执行的权利。这一做法也适用于次要货币对的大规模订单。此外，在合理怀疑存在与市场失效无关的套利行为的情况下，本公司可自行手动执行订单，包括但不限于潜伏套利和掉期套利。",
            en:"NOTE: Most of the orders shall be automatically executed by TigerWit’s trading platform, as described above. But it should be noted that TigerWit reserves the right, at its absolute discretion, to manually execute in whole or in part an order of 100 lots or above, for major currency pairs. The same practice applies for orders of a significant size for minor currency pairs. In addition, orders may be manually executed at the discretion of the Firm in the event of a reasonable suspicion of arbitrage practices unrelated to market inefficiencies, including, but not limited to, latency arbitrage and swap arbitrage.",
            vi:"LƯU Ý: Hầu hết các lệnh sẽ được tự động thực hiện bởi nền tảng giao dịch của TigerWit, như được mô tả ở trên. Nhưng cần lưu ý rằng TigerWit bảo lưu quyền, trong thẩm quyền của mình, để khớp lệnh thủ công toàn bộ hoặc một phần lệnh từ 100 lô trở lên đối với các cặp tiền tệ lớn. Các tiến hành tương tự cũng áp dụng cho các lệnh có kích thước đáng kể đối với các cặp tiền tệ nhỏ. Ngoài ra, lệnh có thể được thực hiện theo quyết định của Công ty trong trường hợp có sự nghi ngờ hợp lý về các hành vi kinh doanh chênh lệch giá không liên quan đến sự thiếu hiệu quả của thị trường, bao gồm, nhưng không giới hạn, chênh lệch do độ trễ và swap.",
            "zh-Hant":"註意：如上所述，大多數訂單應由 TigerWit 的交易平臺自動執行。但請註意，TigerWit 保留對於主要貨幣對的 100 手或以上的訂單擁有自由裁量權，可全部或部分手動執行的權利。這壹做法也適用於次要貨幣對的大規模訂單。此外，在合理懷疑存在與市場失效無關的套利行為的情況下，本公司可自行手動執行訂單，包括但不限於潛伏套利和掉期套利。",
            id:"NOTE: Most of the orders shall be automatically executed by TigerWit’s trading platform, as described above. But it should be noted that TigerWit reserves the right, at its absolute discretion, to manually execute in whole or in part an order of 100 lots or above, for major currency pairs. The same practice applies for orders of a significant size for minor currency pairs. In addition, orders may be manually executed at the discretion of the Firm in the event of a reasonable suspicion of arbitrage practices unrelated to market inefficiencies, including, but not limited to, latency arbitrage and swap arbitrage."
        },
        amtExecution38:{
            zh:"市价单 市价单",
            en:"Market Order(s) Market Order",
            vi:"(Các) Lệnh Thị Trường Lệnh Thị Trường",
            "zh-Hant":"市價單 市價單",
            id:"Market Order(s) Market Order"
        },
        amtExecution39:{
            zh:"这是以当前可获的市场价格买入或卖出的订单。系统自动合并从第三方流动性供应商收到的成交量并按成交量加权平均价（VWAP）执行“市价单”，VWAP 是在执行时可用的最佳价格的平均值。",
            en:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution.",
            vi:"Đây là lệnh mua hoặc bán với giá thị trường hiện tại. Hệ thống sẽ tự động tổng hợp khối lượng nhận được từ nhà cung cấp thanh khoản của bên thứ ba và thực hiện ‘lệnh thị trường’ tại VWAP (‘Giá trung bình theo kích thước”) là mức giá trung bình và tốt nhất có sẵn tại thời điểm thực hiện.",
            "zh-Hant":"這是以當前可獲的市場價格買入或賣出的訂單。系統自動合並從第三方流動性供應商收到的成交量並按成交量加權平均價（VWAP）執行“市價單”，VWAP 是在執行時可用的最佳價格的平均值。",
            id:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution."
        },
        amtExecution40:{
            zh:"挂单 止损单",
            en:"Pending Order(s) Stop Orders",
            vi:"(Các) Lệnh Chờ Lệnh Dừng",
            "zh-Hant":"掛單 止損單",
            id:"Pending Order(s) Stop Orders"
        },
        amtExecution41:{
            zh:"这是在市场到达“止损价格”时，立即买入或卖出的订单。一旦到达“止损价格”，“止损单”将被触发并被作为“市价单”对待*。如果“止损价格”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。“止损单”的设置可以尽可能与当前市场价相近；没有限制。",
            en:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’, the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Stop orders’ can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá dừng'. Khi thị trường đạt đến ‘giá dừng’, ‘lệnh dừng’ được kích hoạt và được coi là ‘lệnh thị trường’ *. Nếu 'lệnh dừng' không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’ (Hết hạn). 'Lệnh dừng' có thể được đặt gần giá thị trường hiện tại nhất có thể; không có giới hạn.",
            "zh-Hant":"這是在市場到達“止損價格”時，立即買入或賣出的訂單。壹旦到達“止損價格”，“止損單”將被觸發並被作為“市價單”對待*。如果“止損價格”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。“止損單”的設置可以盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’, the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Stop orders’ can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution42:{
            zh:"止损",
            en:"Stop Loss",
            vi:"Dừng Lỗ",
            "zh-Hant":"止損",
            id:"Stop Loss"
        },
        amtExecution43:{
            zh:"这个订单是为了尽量减少亏损。一旦市场到达“止损价格”，该订单将被触发并被作为“市价单”对待*。如果“止损价格”没有被触发，将被系统保留在后面的日期。“止损单”可以设置尽可能与当前市场价相近；没有限制。",
            en:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. ‘Stop loss’ can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là một lệnh để giảm thiểu tổn thất. Khi thị trường đạt đến 'giá thua lỗ', lệnh được kích hoạt và được coi là 'lệnh thị trường' *. Nếu 'dừng lỗ' không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến ngày sau đó. 'Dừng lỗ' có thể được đặt càng gần với giá thị trường hiện tại càng tốt; không có giới hạn.",
            "zh-Hant":"這個訂單是為了盡量減少虧損。壹旦市場到達“止損價格”，該訂單將被觸發並被作為“市價單”對待*。如果“止損價格”沒有被觸發，將被系統保留在後面的日期。“止損單”可以設置盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. ‘Stop loss’ can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution44:{
            zh:"止损限价单",
            en:"Stop-Limit Order",
            vi:"Lệnh Dừng Giới Hạn",
            "zh-Hant":"止損限價單",
            id:"Stop-Limit Order"
        },
        amtExecution45:{
            zh:"指的是结合了止损单和限价单特性的订单。止损限价单将在市场到达给定的止损价之后在指定（或更佳）的价格执行。一旦到达止损价，止损限价单立即变成以限定或更佳的价格买入（或卖出）的限价单。",
            en:"Shall mean an order that combines the features of stop order with those of a limit order. A stop-limit order will be executed at a specified price (or better) after a given stop price has been reached. Once the stop price is reached, the stop-limit order becomes a limit order to buy (or sell) at the limit price or better.",
            vi:"Có nghĩa là một lệnh kết hợp các tính năng của lệnh dừng với lệnh của lệnh giới hạn. Lệnh dừng giới hạn sẽ được thực hiện ở một mức giá cụ thể (hoặc tốt hơn) sau khi đạt được giá dừng đã cho. Khi đạt đến giá dừng, lệnh giới hạn dừng sẽ trở thành lệnh giới hạn để mua (hoặc bán) ở mức giá giới hạn hoặc tốt hơn.",
            "zh-Hant":"指的是結合了止損單和限價單特性的訂單。止損限價單將在市場到達給定的止損價之後在指定（或更佳）的價格執行。壹旦到達止損價，止損限價單立即變成以限定或更佳的價格買入（或賣出）的限價單。",
            id:"Shall mean an order that combines the features of stop order with those of a limit order. A stop-limit order will be executed at a specified price (or better) after a given stop price has been reached. Once the stop price is reached, the stop-limit order becomes a limit order to buy (or sell) at the limit price or better."
        },
        amtExecution46:{
            zh:"* 市价单（“ 止损单”和“止损”可适用）",
            en:"* Market Order (Applicable for ‘Stop Orders’ and Stop Loss’)",
            vi:"* Lệnh thị trường (Áp dụng cho 'Lệnh dừng' và Dừng lỗ ')",
            "zh-Hant":"* 市價單（“ 止損單”和“止損”可適用）",
            id:"* Market Order (Applicable for ‘Stop Orders’ and Stop Loss’)"
        },
        amtExecution47:{
            zh:"这是以当前可获的市场价格买入或卖出的订单。系统自动合并从第三方流动性供应商收到的成交量，并按成交量加权平均价（VWAP）执行“市价单”，VWAP 是在执行时可用的最佳价格的平均值。一旦“市价单”被触发，将受“在指定日前有效”和“取消前有效”部分所规定的条件约束。",
            en:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Date’ and ‘Good ‘til Cancelled’ sections.",
            vi:"Đây là lệnh mua hoặc bán với giá thị trường hiện tại. Hệ thống sẽ tự động tổng hợp khối lượng nhận được từ nhà cung cấp thanh khoản của bên thứ ba và thực hiện ‘lệnh thị trường’ tại VWAP (‘Giá trung bình theo kích thước”) là mức giá trung bình và tốt nhất có sẵn tại thời điểm thực hiện. Khi ‘thứ tự thị trường’ được kích hoạt, nó sẽ phải tuân thủ các điều kiện được mô tả trong phần‘Good ‘til Date’ (Hiệu lực ' đến Ngày') và ‘Good ‘til Cancelled’ (Hiệu lực đến Hủy).",
            "zh-Hant":"這是以當前可獲的市場價格買入或賣出的訂單。系統自動合並從第三方流動性供應商收到的成交量，並按成交量加權平均價（VWAP）執行“市價單”，VWAP 是在執行時可用的最佳價格的平均值。壹旦“市價單”被觸發，將受“在指定日前有效”和“取消前有效”部分所規定的條件約束。",
            id:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Date’ and ‘Good ‘til Cancelled’ sections."
        },
        amtExecution48:{
            zh:"取消前有效（简称“GTC”）（=到期）",
            en:"Good ‘til Cancelled (‘GTC’) (= Expiry)",
            vi:"Good ‘til Cancelled (‘GTC’) (= hết hạn)",
            "zh-Hant":"取消前有效（簡稱“GTC”）（=到期）",
            id:"Good ‘til Cancelled (‘GTC’) (= Expiry)"
        },
        amtExecution49:{
            zh:"这是客户可适用于“挂单”的执行设置。订单会保持“有效”并等待执行，直到订单被触发并作为市价单对待，或被客户取消时为止。",
            en:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client.",
            vi:"Đây là cài đặt thực khớp lệnh mà khách hàng có thể áp dụng cho 'các lệnh đang chờ xử lý'. Lệnh có thể vẫn còn 'đang hoạt động' và đang chờ xử lý cho đến khi lệnh được kích hoạt và được coi là lệnh thị trường hoặc bị hủy bởi khách hàng.",
            "zh-Hant":"這是客戶可適用於“掛單”的執行設置。訂單會保持“有效”並等待執行，直到訂單被觸發並作為市價單對待，或被客戶取消時為止。",
            id:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client."
        },
        amtExecution50:{
            zh:"在指定日前有效（简称“GTD”）",
            en:"Good ‘til Date (‘GTD’)",
            vi:"Hiệu Lực Đến Ngày’(‘GTD’)",
            "zh-Hant":"在指定日前有效（簡稱“GTD”）",
            id:"Good ‘til Date (‘GTD’)"
        },
        amtExecution51:{
            zh:"这是一种执行设置，适用于通过交易平台交易的“挂单”。客户可以选择未来一个特定的日期，订单会保持“有效”和等待执行，直到这一日期为止。如果在预设的时间范围内订单没有触发，订单将会从系统删除。",
            en:"This is an execution setting that applies to ‘pending orders’ traded through the trading platform. The client may choose a specific date in the future until which the order shall remain ‘live’ and pending for execution. If the order is not triggered during this pre-determined timeframe it shall be deleted from the system.",
            vi:"Đây là cài đặt thực thi lệnh áp dụng cho 'các lệnh đang chờ xử lý' được giao dịch thông qua sàn giao dịch. Khách hàng có thể chọn một ngày cụ thể trong tương lai cho đến khi lệnh này sẽ vẫn còn 'đang hiệu lực' và đang chờ xử lý. Nếu lệnh không được kích hoạt trong khung thời gian được xác định trước này, nó sẽ bị xóa khỏi hệ thống.",
            "zh-Hant":"這是壹種執行設置，適用於通過交易平臺交易的“掛單”。客戶可以選擇未來壹個特定的日期，訂單會保持“有效”和等待執行，直到這壹日期為止。如果在預設的時間範圍內訂單沒有觸發，訂單將會從系統刪除。",
            id:"This is an execution setting that applies to ‘pending orders’ traded through the trading platform. The client may choose a specific date in the future until which the order shall remain ‘live’ and pending for execution. If the order is not triggered during this pre-determined timeframe it shall be deleted from the system."
        },
        amtExecution52:{
            zh:"限价单",
            en:"Limit Orders",
            vi:"Các Lệnh Giới Hạn",
            "zh-Hant":"限價單",
            id:"Limit Orders"
        },
        amtExecution53:{
            zh:"一旦市场到达“限制价格”时，立即买入或卖出的订单。一旦市场达到“限制价格”，订单将以“限制价格”或更佳的价格触发和执行。如果限价单只是获得部分执行，对未行使交易量将自动生成新的限价单，并在市场价格到达原来申请的“限制价格”时执行。如果“限制价格”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。对于基于外汇、现货金属、股票、指数和期货的 CFD，“限价单”应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的限价单将被自动移除。",
            en:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the order is triggered and executed at the ‘limit price’ or better. If the limit order is partially filled, a new Limit order will be automatically created for the outstanding volume and executed once the market price reaches the originally requested ‘limit price’. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘limit orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Limit Orders placed within the current bidask spread will be automatically removed.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá giới hạn'. Khi thị trường đạt đến 'giới hạn giá', lệnh được kích hoạt và được thực hiện ở 'giá giới hạn' hoặc cao hơn. Nếu lệnh giới hạn được điền một phần, một Lệnh giới hạn mới sẽ được tự động tạo cho khối lượng chưa thanh toán và được thực hiện khi giá thị trường đạt đến 'giá giới hạn' ban đầu được yêu cầu. Nếu ‘thứ tự giới hạn’ không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’ (Hết Hạn). Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, 'lệnh giới hạn' phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để chúng có giá trị. Các lệnh giới hạn được đặt trong phạm vi giá chào bán chào mua hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"壹旦市場到達“限制價格”時，立即買入或賣出的訂單。壹旦市場達到“限制價格”，訂單將以“限制價格”或更佳的價格觸發和執行。如果限價單只是獲得部分執行，對未行使交易量將自動生成新的限價單，並在市場價格到達原來申請的“限制價格”時執行。如果“限制價格”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。對於基於外匯、現貨金屬、股票、指數和期貨的 CFD，“限價單”應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的限價單將被自動移除。",
            id:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the order is triggered and executed at the ‘limit price’ or better. If the limit order is partially filled, a new Limit order will be automatically created for the outstanding volume and executed once the market price reaches the originally requested ‘limit price’. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. For CFDs on FX, spot metals, equities, indices and futures, ‘limit orders’ should be placed a minimum number of pips away from the current market price in order for these to be valid. Limit Orders placed within the current bidask spread will be automatically removed."
        },
        amtExecution54:{
            zh:"止盈",
            en:"Take Profit",
            vi:"Chốt Lời",
            "zh-Hant":"止盈",
            id:"Take Profit"
        },
        amtExecution55:{
            zh:"此订单是为了确保盈利。一旦市场到达“止盈价格”，该订单将被触发并被作为“限价单”对待。如果“止盈”没有被触发，将被系统保留到后面的日期。对于基于外汇、现货金属、股票、指数和期货的 CFD，“止盈”单应当设置离当前市价差距最小的点数，以使其有效。在当前买卖价差范围内设置的“止盈”单将被自动移除。",
            en:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘take profit’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Take Profit’ orders placed within the current bidask spread will be automatically removed.",
            vi:"Đây là một lệnh để đảm bảo lợi nhuận. Khi thị trường đạt đến 'giá lợi nhuận', lệnh được kích hoạt và được coi là 'lệnh giới hạn'. Nếu ‘take profit’ (chốt lời ) không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó. Đối với CFD trên FX, kim loại giao ngay, chứng khoán, chỉ số và tương lai, lệnh ‘take profit’ (chốt lời) phải được đặt số pip tối thiểu ra khỏi giá thị trường hiện tại để các giá trị này hợp lệ. Các lệnh 'Chốt lời' được đặt trong phạm vi giá chào bán và chào mua hiện tại sẽ tự động bị xóa.",
            "zh-Hant":"此訂單是為了確保盈利。壹旦市場到達“止盈價格”，該訂單將被觸發並被作為“限價單”對待。如果“止盈”沒有被觸發，將被系統保留到後面的日期。對於基於外匯、現貨金屬、股票、指數和期貨的 CFD，“止盈”單應當設置離當前市價差距最小的點數，以使其有效。在當前買賣價差範圍內設置的“止盈”單將被自動移除。",
            id:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. For CFDs on FX, spot metals, equities, indices and futures, ‘take profit’ orders should be placed a minimum number of pips away from the current market price in order for these to be valid. ‘Take Profit’ orders placed within the current bidask spread will be automatically removed."
        },
        amtExecution56:{
            zh:"挂单修改/取消",
            en:"Pending Order Modification/ Cancellation",
            vi:"Điều chỉnh / Hủy lệnh đang chờ xử lý",
            "zh-Hant":"掛單修改/取消",
            id:"Pending Order Modification/ Cancellation"
        },
        amtExecution57:{
            zh:"如果市场没有到达客户所指定的价格水平，而同时订单没有被取消， 客户可以修改订单。",
            en:"An order can be modified by the client if the market did not reach the price level specified by the client and the order was not cancelled in the meantime.",
            vi:"Lệnh có thể được khách hàng sửa đổi nếu thị trường không đạt đến mức giá do khách hàng chỉ định và lệnh không bị hủy trong thời gian chờ đợi.",
            "zh-Hant":"如果市場沒有到達客戶所指定的價格水平，而同時訂單沒有被取消， 客戶可以修改訂單。",
            id:"An order can be modified by the client if the market did not reach the price level specified by the client and the order was not cancelled in the meantime."
        },
        amtExecution58:{
            zh:"如果发生下列任一情况，订单将被取消：a. 客户在市场到达客户指定的价格前手动取消订单；或b. 客户设置了有效期而且已经到期；更多详情，请参考附件 II",
            en:"An order will be cancelled in the event any of the following occurs: a. if a client manually cancels an order prior to the market reaching the price level specified by the client; or b. if a client places an expiration time frame and this is reached; For further details, please refer to Appendix II",
            vi:"Một lệnh sẽ bị hủy trong trường hợp xảy ra bất kỳ điều sau đây: a. nếu một khách hàng tự hủy bỏ lệnh trước khi thị trường đạt đến mức giá do khách hàng chỉ định; hoặc b. nếu một khách hàng đặt một khung thời gian hết hạn và điều này đạt được; Để biết thêm chi tiết, vui lòng tham khảo Phụ lục II",
            "zh-Hant":"如果發生下列任壹情況，訂單將被取消：a. 客戶在市場到達客戶指定的價格前手動取消訂單；或b. 客戶設置了有效期而且已經到期；更多詳情，請參考附件 II",
            id:"An order will be cancelled in the event any of the following occurs: a. if a client manually cancels an order prior to the market reaching the price level specified by the client; or b. if a client places an expiration time frame and this is reached; For further details, please refer to Appendix II"
        },
        amtExecution59:{
            zh:"即时订单（即时）市",
            en:"Instant Order(s)",
            vi:"(Các )Lệnh Tức Thì",
            "zh-Hant":"即時訂單（即時）市",
            id:"Instant Order(s)"
        },
        amtExecution60:{
            zh:"价单",
            en:"(Instant) Market Order",
            vi:"Lệnh Thị Trường (Lập Tức)",
            "zh-Hant":"價單",
            id:"(Instant) Market Order"
        },
        amtExecution61:{
            zh:"这是以当前可获的市场价格买入或卖出的订单。系统自动合并从第三方流动性供应商收到的成交量，并按成交量加权平均价（VWAP）执行“市价单”，VWAP 是在执行时可用的最佳价格的平均值。",
            en:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution.",
            vi:"Đây là lệnh mua hoặc bán với giá thị trường hiện tại. Hệ thống sẽ tự động tổng hợp khối lượng nhận được từ nhà cung cấp thanh khoản của bên thứ ba và thực hiện ‘lệnh thị trường’ tại VWAP (‘Giá trung bình theo Kích Thước”) là mức giá trung bình và tốt nhất có sẵn tại thời điểm thực hiện.",
            "zh-Hant":"這是以當前可獲的市場價格買入或賣出的訂單。系統自動合並從第三方流動性供應商收到的成交量，並按成交量加權平均價（VWAP）執行“市價單”，VWAP 是在執行時可用的最佳價格的平均值。",
            id:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution."
        },
        amtExecution62:{
            zh:"挂单 止损单",
            en:"Pending Order(s) Stop Orders",
            vi:"(Các )Lệnh Chờ Lệnh Dừng",
            "zh-Hant":"掛單 止損單",
            id:"Pending Order(s) Stop Orders"
        },
        amtExecution63:{
            zh:"这是在市场到达“止损价格”时，立即买入或卖出的订单。一旦到达“止损价格”，“止损单”将被触发并被作为“市价单”对待*。如果“止损价格”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。“止损单”可以设置尽可能与当前市场价相近；没有限制。",
            en:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’, the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Stop orders’ can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá dừng'. Khi thị trường đạt đến ‘giá dừng’, ‘lệnh dừng’ được kích hoạt và được coi là ‘lệnh thị trường’ *. Nếu 'lệnh dừng' không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’ (Hết hạn). 'Lệnh dừng' có thể được đặt gần giá thị trường hiện tại nhất có thể; không có giới hạn.",
            "zh-Hant":"這是在市場到達“止損價格”時，立即買入或賣出的訂單。壹旦到達“止損價格”，“止損單”將被觸發並被作為“市價單”對待*。如果“止損價格”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。“止損單”可以設置盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to buy or sell once the market reaches the ‘stop price’. Once the market reaches the ‘stop price’, the ‘stop order’ is triggered and treated as a ‘market order’*. If the ‘stop order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Stop orders’ can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution64:{
            zh:"止损",
            en:"Stop Loss",
            vi:"Dừng Lỗ",
            "zh-Hant":"止損",
            id:"Stop Loss"
        },
        amtExecution65:{
            zh:"这个订单是为了尽量减少亏损。一旦到达“止损价格”，该订单将被触发并被作为“市价单”对待*。如果“止损价格”没有被触发，将被系统保留在后面的日期。“止损”单可以设置尽可能与当前市场价相近；没有限制。",
            en:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. ‘Stop loss’ orders can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là một lệnh để giảm thiểu lỗ. Khi thị trường đạt đến 'giá thua lỗ', lệnh được kích hoạt và được coi là 'lệnh thị trường' *. Nếu 'dừng lỗ' không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến ngày sau đó. Các lệnh 'Stop loss' có thể được đặt càng sát với giá thị trường hiện tại càng tốt; không có giới hạn.",
            "zh-Hant":"這個訂單是為了盡量減少虧損。壹旦到達“止損價格”，該訂單將被觸發並被作為“市價單”對待*。如果“止損價格”沒有被觸發，將被系統保留在後面的日期。“止損”單可以設置盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to minimise losses. Once the market reaches the ‘stop loss price’ the order is triggered and treated as a ‘market order’*. If the ‘stop loss’ is not triggered it shall remain in the system until a later date. ‘Stop loss’ orders can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution66:{
            zh:"限价单",
            en:"Limit Orders",
            vi:"Các Lệnh Giới Hạn",
            "zh-Hant":"限價單",
            id:"Limit Orders"
        },
        amtExecution67:{
            zh:"一旦市场到达“限制价格”时，立即买入或卖出的订单。一旦到达“限制价格”，此订单将被触发并在“限制价格”或更佳的价格执行。如果限价单只是获得部分执行，对未行使交易量将自动生成新的限价单，并在市场价格到达原来申请的“限制价格”时执行。如果“限制价格”没有被触发，将被系统保留到后面的日期，受“取消前有效”部分所规定的条件约束。“限价单”可以设置尽可能与当前市场价相近；没有限制。",
            en:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the order is triggered and executed at the ‘limit price’ or better. If the limit order is partially filled, a new Limit order will be automatically created for the outstanding volume and executed once the market price reaches the originally requested ‘limit price’. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Limit orders’ can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là lệnh mua hoặc bán khi thị trường đạt đến 'giá giới hạn'. Khi thị trường đạt đến 'giới hạn giá', lệnh được kích hoạt và được thực hiện ở 'giá giới hạn' hoặc cao hơn. Nếu lệnh giới hạn được điền một phần, một Lệnh giới hạn mới sẽ được tự động tạo cho khối lượng chưa thanh toán và được thực hiện khi giá thị trường đạt đến 'giá giới hạn' ban đầu được yêu cầu. Nếu ‘thứ tự giới hạn’ không được kích hoạt, nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó tùy thuộc vào các điều kiện được mô tả trong phần ‘Good‘ til Canceled ’ (Hết hạn). 'Lệnh giới hạn' có thể được đặt gần với giá thị trường hiện tại nhất có thể; không có giới hạn.",
            "zh-Hant":"壹旦市場到達“限制價格”時，立即買入或賣出的訂單。壹旦到達“限制價格”，此訂單將被觸發並在“限制價格”或更佳的價格執行。如果限價單只是獲得部分執行，對未行使交易量將自動生成新的限價單，並在市場價格到達原來申請的“限制價格”時執行。如果“限制價格”沒有被觸發，將被系統保留到後面的日期，受“取消前有效”部分所規定的條件約束。“限價單”可以設置盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to buy or sell once the market reaches the ‘limit price’. Once the market reaches the ‘limit price’ the order is triggered and executed at the ‘limit price’ or better. If the limit order is partially filled, a new Limit order will be automatically created for the outstanding volume and executed once the market price reaches the originally requested ‘limit price’. If the ‘limit order’ is not triggered it shall remain in the system until a later date subject to the conditions described in the ‘Good ‘til Cancelled’ section. ‘Limit orders’ can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution68:{
            zh:"止盈",
            en:"Take Profit",
            vi:"Chốt Lời",
            "zh-Hant":"止盈",
            id:"Take Profit"
        },
        amtExecution69:{
            zh:"此订单是为了确保盈利。一旦市场到达“止盈价格”，该订单将被触发并被作为“限价单”对待。如果“止盈”没有被触发，将被系统保留到后面的日期。“止盈”可以设置尽可能与当前市场价相近；没有限制。",
            en:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. ‘Take profit’ can be placed as close to the current market price as possible; there is no restriction.",
            vi:"Đây là một lệnh để đảm bảo lợi nhuận. Khi thị trường đạt đến 'giá lợi nhuận', lệnh được kích hoạt và được coi là 'lệnh giới hạn'. Nếu ‘take profit’ (Lệnh chốt lời) không được kích hoạt thì nó sẽ vẫn còn trong hệ thống cho đến một ngày sau đó. ‘Lệnh Chốt Lời’ có thể được đặt càng gần với giá thị trường hiện tại càng tốt; không có giới hạn.",
            "zh-Hant":"此訂單是為了確保盈利。壹旦市場到達“止盈價格”，該訂單將被觸發並被作為“限價單”對待。如果“止盈”沒有被觸發，將被系統保留到後面的日期。“止盈”可以設置盡可能與當前市場價相近；沒有限制。",
            id:"This is an order to secure profits. Once the market reaches the ‘take profit price’ the order is triggered and treated as a ‘limit order’. If the ‘take profit’ is not triggered it shall remain in the system until a later date. ‘Take profit’ can be placed as close to the current market price as possible; there is no restriction."
        },
        amtExecution70:{
            zh:"* （挂单）市价单",
            en:"* (Pending) Market Order",
            vi:"Lệnh Thị Trường ( Đang Chờ)",
            "zh-Hant":"* （掛單）市價單",
            id:"* (Pending) Market Order"
        },
        amtExecution71:{
            zh:"这是以当前可获的市场价格买入或卖出的订单。系统自动合并从第三方流动性供应商收到的成交量，并按成交量加权平均价（VWAP）执行“市价单”，VWAP 是在执行时可用的最佳价格的平均值。一旦“市价单”被触发，将受“在指定日前有效”和“取消前一直有效”部分所规定的条件约束。",
            en:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Date’ and ‘Good ‘til Cancelled’ sections.",
            vi:"Đây là lệnh mua hoặc bán với giá thị trường hiện tại. Hệ thống sẽ tự động tổng hợp khối lượng nhận được từ nhà cung cấp thanh khoản của bên thứ ba và thực hiện ‘lệnh thị trường’ tại VWAP (‘Giá trung bình theo kích thước”) là mức giá trung bình và tốt nhất có sẵn tại thời điểm thực hiện. Khi ‘thứ tự thị trường’ được kích hoạt, nó sẽ phải tuân thủ các điều kiện được mô tả trong phần‘Good ‘til Date’ (Hiệu lực ' đến Ngày') và ‘Good ‘til Cancelled’ (Hiệu lực đến Hủy).",
            "zh-Hant":"這是以當前可獲的市場價格買入或賣出的訂單。系統自動合並從第三方流動性供應商收到的成交量，並按成交量加權平均價（VWAP）執行“市價單”，VWAP 是在執行時可用的最佳價格的平均值。壹旦“市價單”被觸發，將受“在指定日前有效”和“取消前壹直有效”部分所規定的條件約束。",
            id:"This is an order to buy or sell at the current market price that is available. The system automatically aggregates the volume received from third party liquidity providers and executes the ‘market order’ at VWAP (‘Volume-Weighted Average Price’) that is the average and best available price at the time of the execution. Once the ‘market order’ is triggered it shall be subject to the conditions described in the ‘Good ‘til Date’ and ‘Good ‘til Cancelled’ sections."
        },
        amtExecution72:{
            zh:"取消前有效（简称“GTC”）（=到期）",
            en:"Good ‘til Cancelled (‘GTC’) (= Expiry)",
            vi:"Good ‘til Cancelled (‘GTC’) (=Hết hạn)",
            "zh-Hant":"取消前有效（簡稱“GTC”）（=到期）",
            id:"Good ‘til Cancelled (‘GTC’) (= Expiry)"
        },
        amtExecution73:{
            zh:"这是客户可适用于“挂单”的执行设置。订单会保持“有效”并等待执行，直到订单被触发并作为市价单对待，或被客户取消时为止。",
            en:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client.",
            vi:"Đây là cài đặt thực thi lệnh mà khách hàng có thể áp dụng cho 'các lệnh hàng đang chờ xử lý'. Lệnh có thể vẫn còn 'đang hoạt động' và đang chờ xử lý cho đến khi lệnh được kích hoạt và được coi là lệnh thị trường hoặc bị hủy bởi khách hàng.",
            "zh-Hant":"這是客戶可適用於“掛單”的執行設置。訂單會保持“有效”並等待執行，直到訂單被觸發並作為市價單對待，或被客戶取消時為止。",
            id:"This is an execution setting that the client may apply to ‘pending orders’. The order may remain ‘live’ and pending for execution until such time as the order is triggered and treated as a market order or cancelled by the client."
        },
        amtExecution74:{
            zh:"在指定日前有效（简称“GTD”）",
            en:"Good ‘til Date (‘GTD’)",
            vi:"Hiệu Lực Đến Ngày (‘GTD’)",
            "zh-Hant":"在指定日前有效（簡稱“GTD”）",
            id:"Good ‘til Date (‘GTD’)"
        },
        amtExecution75:{
            zh:"这是一种执行设置，适用于通过交易平台交易的“挂单”。客户可以选择未来一个特定的日期，订单会保持“有效”和等待执行，直到这一日期为止。如果在预设的时间范围内订单没有触发，订单将会从系统删除。",
            en:"This is an execution setting that applies to ‘pending orders’ traded through the trading platform. The client may choose a specific date in the future until which the order shall remain ‘live’ and pending for execution. If the order is not triggered during this pre-determined timeframe it shall be deleted from the system.",
            vi:"Đây là cài đặt thực thi lệnh áp dụng cho 'các lệnh đang chờ xử lý' được giao dịch thông qua sàn giao dịch. Khách hàng có thể chọn một ngày cụ thể trong tương lai cho đến khi lệnh vẫn còn 'đang hoạt động' và đang chờ xử lý. Nếu thứ tự không được kích hoạt trong khung thời gian được xác định trước này, nó sẽ bị xóa khỏi hệ thống.",
            "zh-Hant":"這是壹種執行設置，適用於通過交易平臺交易的“掛單”。客戶可以選擇未來壹個特定的日期，訂單會保持“有效”和等待執行，直到這壹日期為止。如果在預設的時間範圍內訂單沒有觸發，訂單將會從系統刪除。",
            id:"This is an execution setting that applies to ‘pending orders’ traded through the trading platform. The client may choose a specific date in the future until which the order shall remain ‘live’ and pending for execution. If the order is not triggered during this pre-determined timeframe it shall be deleted from the system."
        },
        amtExecution76:{
            zh:"挂单修改/取消",
            en:"Pending Order Modification/Cancellation",
            vi:"Điều Chỉnh Lệnh Chờ/Hủy",
            "zh-Hant":"掛單修改/取消",
            id:"Pending Order Modification/Cancellation"
        },
        amtExecution77:{
            zh:"如果市场没有到达客户所指定的价格水平，而同时订单没有被取消， 客户可以修改订单。如果发生下列任一情况，订单将被取消：a. 申请的价格与市场价格相差超过 50,000点；或b. 客户在市场到达客户指定的价格前手动取消订单；或c. 客户设置了有效期而且已经到期；或d. 尝试执行订单不成功超过 200 次。更多详情，请参考附件 II",
            en:"An order can be modified by the client if the market did not reach the price level specified by the client and the order was not cancelled in the meantime. An order will be cancelled in the event any of the following occurs: a. if the requested price is more than 50,000 pips from the market price; or b. if a client manually cancels an order prior to the market reaching the price level specified by the client; or c. if a client places an expiration time frame and this is reached; or d. after 200 unsuccessful attempts to execute the order. For further details, please refer to Appendix II",
            vi:"Một lệnh có thể được khách hàng sửa đổi nếu thị trường không đạt đến mức giá do khách hàng chỉ định và lệnh này không bị hủy trong thời gian chờ đợi. Một lệnh sẽ bị hủy trong trường hợp xảy ra bất kỳ điều sau đây: a. nếu giá được yêu cầu cao hơn 50.000 pip so với giá thị trường; hoặc b. nếu một khách hàng tự hủy bỏ lệnh trước khi thị trường đạt đến mức giá do khách hàng chỉ định; hoặc c. nếu một khách hàng đặt một khung thời gian hết hạn và đã đến thời hạn này; hoặc d. sau 200 lần thực hiện lệnh không thành công. Để biết thêm chi tiết, vui lòng tham khảo Phụ lục II",
            "zh-Hant":"如果市場沒有到達客戶所指定的價格水平，而同時訂單沒有被取消， 客戶可以修改訂單。如果發生下列任壹情況，訂單將被取消：a. 申請的價格與市場價格相差超過 50,000點；或b. 客戶在市場到達客戶指定的價格前手動取消訂單；或c. 客戶設置了有效期而且已經到期；或d. 嘗試執行訂單不成功超過 200 次。更多詳情，請參考附件 II",
            id:"An order can be modified by the client if the market did not reach the price level specified by the client and the order was not cancelled in the meantime. An order will be cancelled in the event any of the following occurs: a. if the requested price is more than 50,000 pips from the market price; or b. if a client manually cancels an order prior to the market reaching the price level specified by the client; or c. if a client places an expiration time frame and this is reached; or d. after 200 unsuccessful attempts to execute the order. For further details, please refer to Appendix II"
        },
        amtExecution78:{
            zh:"企业行动 派息",
            en:"Corporate Actions Dividends",
            vi:"Các Hành Động Chia Cổ Tức Công Ty",
            "zh-Hant":"企業行動 派息",
            id:"Corporate Actions Dividends"
        },
        amtExecution79:{
            zh:"TigerWit 保留在派息前增加保证金要求的权利。",
            en:"TigerWit reserves the right to increase margin requirements prior to the release of a dividend.",
            vi:"TigerWit có quyền tăng yêu cầu ký quỹ trước khi phát hành cổ tức.",
            "zh-Hant":"TigerWit 保留在派息前增加保證金要求的權利。",
            id:"TigerWit reserves the right to increase margin requirements prior to the release of a dividend."
        },
        amtExecution80:{
            zh:"长仓",
            en:"Long Positions",
            vi:"Các Vị Thế Mua",
            "zh-Hant":"長倉",
            id:"Long Positions"
        },
        amtExecution81:{
            zh:"持有长仓的客户在除息日将以现金调整形式收到派息（入金）。",
            en:"Clients holding long positions on the ex-div date will receive a dividend in the form of a cash adjustment (deposit).",
            vi:"Khách hàng nắm giữ các vị thế mua vào ngày giao dịch trước sẽ nhận cổ tức dưới hình thức điều chỉnh tiền mặt (tiền gửi).",
            "zh-Hant":"持有長倉的客戶在除息日將以現金調整形式收到派息（入金）。",
            id:"Clients holding long positions on the ex-div date will receive a dividend in the form of a cash adjustment (deposit)."
        },
        amtExecution82:{
            zh:"短仓",
            en:"Short Positions",
            vi:"Các Vị Thế Ngắn",
            "zh-Hant":"短倉",
            id:"Short Positions"
        },
        amtExecution83:{
            zh:"持有短仓的客户在除息日将以现金调整形式被收取派息（出金）。",
            en:"Clients holding short positions on the ex-div date will be charged the dividend amount in the form of a cash adjustment (withdrawal).",
            vi:"Khách hàng nắm giữ các vị thế ngắn vào ngày giao dịch cũ sẽ được tính số tiền cổ tức dưới hình thức điều chỉnh tiền mặt (rút tiền).",
            "zh-Hant":"持有短倉的客戶在除息日將以現金調整形式被收取派息（出金）。",
            id:"Clients holding short positions on the ex-div date will be charged the dividend amount in the form of a cash adjustment (withdrawal)."
        },
        amtExecution84:{
            zh:"注意：股票可作为派息提供。派息金额应当用股价来计算以确定现金调整额（请参看碎股调整）。",
            en:"NOTE: Stocks may be offered as a dividend. The dividend amount should be calculated using the share price to determine the cash adjustment (see fractional share adjustments).",
            vi:"LƯU Ý: Cổ phiếu có thể được chào bán như cổ tức. Số tiền cổ tức nên được tính bằng cách sử dụng giá cổ phiếu để xác định điều chỉnh tiền mặt (xem điều chỉnh tỷ lệ phân số).",
            "zh-Hant":"註意：股票可作為派息提供。派息金額應當用股價來計算以確定現金調整額（請參看碎股調整）。",
            id:"NOTE: Stocks may be offered as a dividend. The dividend amount should be calculated using the share price to determine the cash adjustment (see fractional share adjustments)."
        },
        amtExecution85:{
            zh:"碎股调整",
            en:"Fractional Share Adjustments",
            vi:"Điều chỉnh Cổ Phiếu Lẻ",
            "zh-Hant":"碎股調整",
            id:"Fractional Share Adjustments"
        },
        amtExecution86:{
            zh:"在本公司行动产生碎股的情况下，零碎部分会表示为现金调整，独立于非零碎头寸来处理。调整价值将等于零碎头寸乘以除息日前一天经调整的收盘价。",
            en:"In the event the corporate action results in a fractional position, the fractional component may be represented as a cash adjustment independent of the handling for the non-fractional position. The adjustment value will equal the fractional position times the adjusted closing price on the day prior to the ex-date.",
            vi:"Trong trường hợp kết quả hành động của công ty ở một vị thế lẻ, thành phần lẻ có thể được biểu diễn dưới dạng điều chỉnh tiền mặt độc lập với việc xử lý cho vị thế không lẻ. Giá trị điều chỉnh sẽ bằng với vị thế lẻ nhân với giá đóng cửa được điều chỉnh vào ngày trước ngày hết hạn.",
            "zh-Hant":"在本公司行動產生碎股的情況下，零碎部分會表示為現金調整，獨立於非零碎頭寸來處理。調整價值將等於零碎頭寸乘以除息日前壹天經調整的收盤價。",
            id:"In the event the corporate action results in a fractional position, the fractional component may be represented as a cash adjustment independent of the handling for the non-fractional position. The adjustment value will equal the fractional position times the adjusted closing price on the day prior to the ex-date."
        },
        amtExecution87:{
            zh:"股票拆分 正常股",
            en:"Stock Splits",
            vi:"Chia Tách Cổ Phiếu",
            "zh-Hant":"股票拆分 正常股",
            id:"Stock Splits"
        },
        amtExecution88:{
            zh:"票拆分",
            en:"Normal Stock Split",
            vi:"Chia Tách Cổ Phiếu Thông Thường",
            "zh-Hant":"票拆分",
            id:"Normal Stock Split"
        },
        amtExecution89:{
            zh:"由于不影响公司的市值，实施这一行动将使用公布的拆分比率反映客户原有的股份。请参考我们的网站了解更多信息：http://global.tigerwit. com。",
            en:"As there is no impact on the company’s market capitalisation the action carried out is to reflect the clients existing share position using the split ratio announced. Please see our website for more information: http://global.tigerwit.com. ",
            vi:"Vì không có tác động đến vốn hóa thị trường của công ty nên hành động được thực hiện là phản ánh vị thế cổ phiếu hiện tại của khách hàng bằng cách sử dụng tỷ lệ phân chia được công bố. Vui lòng xem trang web của chúng tôi để biết thêm thông tin: http://global.tigerwit.com.",
            "zh-Hant":"由於不影響公司的市值，實施這壹行動將使用公布的拆分比率反映客戶原有的股份。請參考我們的網站了解更多信息：http://global.tigerwit. com。",
            id:"As there is no impact on the company’s market capitalisation the action carried out is to reflect the clients existing share position using the split ratio announced. Please see our website for more information: http://global.tigerwit.com. "
        },
        amtExecution90:{
            zh:"反向股票拆分",
            en:"Reverse Stock Split",
            vi:"Phân Chia cổ phiếu ngược",
            "zh-Hant":"反向股票拆分",
            id:"Reverse Stock Split"
        },
        amtExecution91:{
            zh:"对公司市值不造成影响，客户的股份数需要调整以反映新的股价。请参考我们的网站了解更多信息：http://global.tigerwit.com。",
            en:"There is no impact on the company’s market cap and the clients’ positions need to be amended to reflect the new share price. Please see our website for more information: http://global.tigerwit.com. ",
            vi:"Không có tác động đến vốn thị trường của công ty và vị thế của khách hàng cần được sửa đổi để phản ánh giá cổ phiếu mới. Vui lòng xem trang web của chúng tôi để biết thêm thông tin: http://global.tigerwit.com.",
            "zh-Hant":"對公司市值不造成影響，客戶的股份數需要調整以反映新的股價。請參考我們的網站了解更多信息：http://global.tigerwit.com。",
            id:"There is no impact on the company’s market cap and the clients’ positions need to be amended to reflect the new share price. Please see our website for more information: http://global.tigerwit.com. "
        },
        amtExecution92:{
            zh:"供股",
            en:"Rights Issue",
            vi:"Phát Hành Quyền Mua Cổ Phiếu",
            "zh-Hant":"供股",
            id:"Rights Issue"
        },
        amtExecution93:{
            zh:"导致下列结果之一：供股交割、发行基于权利或现金调整的 CFD。",
            en:"Results in one of the following: Delivery of right security, issuance of CFD on the right or cash adjustment.",
            vi:"Kết quả từ một trong những điều sau đây: Việc cung cấp quyền bảo mật, phát hành CFD về quyền hoặc điều chỉnh tiền mặt.",
            "zh-Hant":"導致下列結果之壹：供股交割、發行基於權利或現金調整的 CFD。",
            id:"Results in one of the following: Delivery of right security, issuance of CFD on the right or cash adjustment."
        },
        amtExecution94:{
            zh:"虽然供股将为客户提供以折扣价购股的选择，但股价将由于股份增加稀释价值而被降低公告后防范做空股票的行动",
            en:"Although a rights issue will give the client an option of purchasing the share at a discounted price, the share price will be reduced also as the additional share will dilute the share value Action to prevent shorting of share after announcement",
            vi:"Mặc dù vấn đề phát hành quyền cổ phiếu sẽ mang lại cho khách hàng một tùy chọn mua cổ phần với mức giá chiết khấu, giá cổ phiếu sẽ được giảm cũng vì phần bổ sung sẽ pha loãng giá trị cổ phiếu Hành động để ngăn chặn việc thiếu cổ phần sau khi thông báo",
            "zh-Hant":"雖然供股將為客戶提供以折扣價購股的選擇，但股價將由於股份增加稀釋價值而被降低公告後防範做空股票的行動",
            id:"Although a rights issue will give the client an option of purchasing the share at a discounted price, the share price will be reduced also as the additional share will dilute the share value Action to prevent shorting of share after announcement"
        },
        amtExecution95:{
            zh:"最佳执行",
            en:"Best Execution",
            vi:"Khớp Lệnh Tốt Nhất",
            "zh-Hant":"最佳執行",
            id:"Best Execution"
        },
        amtExecution96:{
            zh:"1.当针对本公司报价执行客户订单时，本公司应考虑以下因素，采取一切合理措施为客户获得尽可能最佳的结果。 在为我们的客户执行交易时，价格、成本和货币转换最为重要。",
            en:"1.The Firm shall take all reasonable steps to obtain the best possible result for its clients taking into account the following factors when executing Clients orders against the Firm’s quoted prices. Prices, costs and currency conversion carry the highest importance when executing transactions for our clients.",
            vi:"1.Công ty sẽ thực hiện tất cả các bước hợp lý để có được kết quả tốt nhất có thể cho khách hàng của mình khi tính đến các yếu tố sau khi thực hiện lệnh của Khách hàng so với giá niêm yết của Công ty. Giá cả, chi phí và chuyển đổi tiền tệ mang lại tầm quan trọng cao nhất khi thực hiện giao dịch cho khách hàng của chúng tôi.",
            "zh-Hant":"1.當針對本公司報價執行客戶訂單時，本公司應考慮以下因素，采取壹切合理措施為客戶獲得盡可能最佳的結果。 在為我們的客戶執行交易時，價格、成本和貨幣轉換最為重要。",
            id:"1.The Firm shall take all reasonable steps to obtain the best possible result for its clients taking into account the following factors when executing Clients orders against the Firm’s quoted prices. Prices, costs and currency conversion carry the highest importance when executing transactions for our clients."
        },
        amtExecution97:{
            zh:"2.价格",
            en:"2.Price",
            vi:"2.Giá",
            "zh-Hant":"2.價格",
            id:"2.Price"
        },
        amtExecution98:{
            zh:"a) 买卖点差：对于任意特定金融工具，本公司将报出两个价格：客户可以买入（做多）该金融工具的较高价格（卖价），以及客户可以卖出（做空）该金融工具的较低价格（买价）；二者统称为本公司的价格。某个特定金融工具的较低价格和较高价格之差，就是“点差”，对于交易平台而言含有 TigerWit 的加价。",
            en:"a) Bid – Ask Spread: For any given Financial Instrument, the Firm will quote two prices: the higher price (ASK) at which the client can buy (go long) that Financial Instrument, and the lower price (BID) at which the client can sell (go short) that Financial Instrument; collectively referred to as the Firm’s prices. The difference between the lower and the higher price of a given Financial Instrument is the spread which for trading platform includes TigerWit’s mark-up.",
            vi:"a) Spread giá chào mua-chào bán: Đối với bất kỳ Công cụ tài chính cụ thể nào, Công ty sẽ báo giá hai mức giá: giá cao hơn (ASK) mà khách hàng có thể mua (vị thế mua) Công cụ tài chính đó và giá thấp hơn (BID) mà khách hàng có thể bán (vị thế bán) Công cụ tài chính đó; gọi chung là giá của Công ty. Sự khác biệt giữa giá thấp hơn và cao hơn của một Công cụ tài chính cụ thể là mức spread cho sàn giao dịch bao gồm lợi nhuận gộp của TigerWit.",
            "zh-Hant":"a) 買賣點差：對於任意特定金融工具，本公司將報出兩個價格：客戶可以買入（做多）該金融工具的較高價格（賣價），以及客戶可以賣出（做空）該金融工具的較低價格（買價）；二者統稱為本公司的價格。某個特定金融工具的較低價格和較高價格之差，就是“點差”，對於交易平臺而言含有 TigerWit 的加價。",
            id:"a) Bid – Ask Spread: For any given Financial Instrument, the Firm will quote two prices: the higher price (ASK) at which the client can buy (go long) that Financial Instrument, and the lower price (BID) at which the client can sell (go short) that Financial Instrument; collectively referred to as the Firm’s prices. The difference between the lower and the higher price of a given Financial Instrument is the spread which for trading platform includes TigerWit’s mark-up."
        },
        amtExecution99:{
            zh:"b) 挂单：针对未平仓空头头寸的买入限价单、买入止损单和止损/止盈但这类订单按照卖价执行。针对未平仓多头头寸的卖出限价单、卖出止损单和止损/止盈但这类订单按照买价执行。",
            en:"b) Pending Orders: Such orders as Buy Limit, Buy Stop and Stop Loss/Take profit for opened short position are executed at ASK price. Such orders as Sell Limit, Sell Stop and Stop Loss/Take profit for opened long position are executed at BID price.",
            vi:"b) Lệnh chờ: Các lệnh như Mua giới hạn, Dừng mua và Dừng lỗ / Chốt lời cho lệnh bán mở được thực hiện ở mức giá ASK (giá chào bán). Các lệnh như Bán giới hạn, Bán và Dừng lỗ / Chốt lời cho lệnh dài mở được thực hiện theo giá BID (giá chào mua)",
            "zh-Hant":"b) 掛單：針對未平倉空頭頭寸的買入限價單、買入止損單和止損/止盈但這類訂單按照賣價執行。針對未平倉多頭頭寸的賣出限價單、賣出止損單和止損/止盈但這類訂單按照買價執行。",
            id:"b) Pending Orders: Such orders as Buy Limit, Buy Stop and Stop Loss/Take profit for opened short position are executed at ASK price. Such orders as Sell Limit, Sell Stop and Stop Loss/Take profit for opened long position are executed at BID price."
        },
        amtExecution100:{
            zh:"c) 本公司特定金融工具的价格参考本公司从第三方流动性提供商获得的相关标的金融工具的价格计算。本公司按照技术和通讯连接允许的最大频率更新价格。本公司不会在公司营业时间（请参考下列执行场所） 外做任何报价，所以客户在这段时间不能下达订单。",
            en:"c) The Firm’s price for a given Financial Instrument is calculated by reference to the price of the relevant underlying financial instrument, which the Firm obtains from third party liquidity providers. The Firm updates its prices as frequently as the limitations of technology and communications links allow. The Firm will not quote any price outside Firm’s operations time (see execution venue below) therefore no orders can be placed by the Client during that time.",
            vi:"c) Giá của Công ty đối với một Công cụ tài chính cụ thể được tính bằng cách tham chiếu đến giá của công cụ tài chính cơ bản có liên quan mà Công ty thu được từ các nhà cung cấp thanh khoản của bên thứ ba. Công ty cập nhật giá của nó thường xuyên trong khả năng cho phép của các liên kết truyền thông và kĩ thuật. Công ty sẽ không báo giá bất kỳ giá nào ngoài thời gian hoạt động của Công ty (xem địa điểm thực hiện bên dưới) do đó không có lệnh nào có thể được Khách hàng đặt trong thời gian đó.",
            "zh-Hant":"c) 本公司特定金融工具的價格參考本公司從第三方流動性提供商獲得的相關標的金融工具的價格計算。本公司按照技術和通訊連接允許的最大頻率更新價格。本公司不會在公司營業時間（請參考下列執行場所） 外做任何報價，所以客戶在這段時間不能下達訂單。",
            id:"c) The Firm’s price for a given Financial Instrument is calculated by reference to the price of the relevant underlying financial instrument, which the Firm obtains from third party liquidity providers. The Firm updates its prices as frequently as the limitations of technology and communications links allow. The Firm will not quote any price outside Firm’s operations time (see execution venue below) therefore no orders can be placed by the Client during that time."
        },
        amtExecution101:{
            zh:"d) 对电子通讯网络（ECN）平台而言，交易价格通过电子执行系统直接从流动性供应商获得。本系统自动向选择的流动性供应商询价。对于价格，本公司按照从第三方流动性提供商获得的可用流动性（或“市场深度”）报出。本公司软件将自动以尽可能获得的最佳价格合并可用的流动性，并按照成交量加权平均价（VWAP）执行。",
            en:"d) For ECN platforms, trades prices are obtained directly from the liquidity providers through an electronic execution system. This system automatically requests a quote from a selection of liquidity providers. In conjunction with the price, the Firm quotes the available liquidity, (or ‘market depth’), as obtained from its third-party liquidity providers. The Firm’s software will automatically aggregate all available liquidity at the best possible prices available and fill at the VolumeWeighted Average Price (VWAP).",
            vi:"d) Đối với các nền tảng ECN, giá giao dịch được lấy trực tiếp từ các nhà cung cấp thanh khoản thông qua một hệ thống thực hiện điện tử. Hệ thống này tự động yêu cầu báo giá từ một lựa chọn các nhà cung cấp thanh khoản. Cùng với giá, Công ty báo giá tính thanh khoản có sẵn, (hoặc ‘độ sâu thị trường’), như được lấy từ các nhà cung cấp thanh khoản của bên thứ ba. Phần mềm của Công ty sẽ tự động tổng hợp tất cả các khoản thanh toán có sẵn với mức giá tốt nhất có thể có và điền vào Giá Khối lượng Trung bình (VWAP).",
            "zh-Hant":"d) 對電子通訊網絡（ECN）平臺而言，交易價格通過電子執行系統直接從流動性供應商獲得。本系統自動向選擇的流動性供應商詢價。對於價格，本公司按照從第三方流動性提供商獲得的可用流動性（或“市場深度”）報出。本公司軟件將自動以盡可能獲得的最佳價格合並可用的流動性，並按照成交量加權平均價（VWAP）執行。",
            id:"d) For ECN platforms, trades prices are obtained directly from the liquidity providers through an electronic execution system. This system automatically requests a quote from a selection of liquidity providers. In conjunction with the price, the Firm quotes the available liquidity, (or ‘market depth’), as obtained from its third-party liquidity providers. The Firm’s software will automatically aggregate all available liquidity at the best possible prices available and fill at the VolumeWeighted Average Price (VWAP)."
        },
        amtExecution102:{
            zh:"成本",
            en:"Costs",
            vi:"Các loại Chi phí",
            "zh-Hant":"成本",
            id:"Costs"
        },
        amtExecution103:{
            zh:"3.客户要开设某种类型金融工具的头寸，会被要求支付佣金或其他费用（如果适用）；金额披露在合同规范中，可在本公司网站上查看。",
            en:"3.For opening a position in some types of Financial Instruments the Client may be required to pay commission or other fees, if applicable; these amounts are disclosed in the contract specifications available in the Firm’s website.",
            vi:"3.Để mở một vị thế trong một số loại Công cụ Tài chính, Khách hàng có thể được yêu cầu trả hoa hồng hoặc các khoản phí khác, nếu có; những số tiền này được tiết lộ trong các thông số hợp đồng có sẵn trên trang web của Công ty.",
            "zh-Hant":"3.客戶要開設某種類型金融工具的頭寸，會被要求支付傭金或其他費用（如果適用）；金額披露在合同規範中，可在本公司網站上查看。",
            id:"3.For opening a position in some types of Financial Instruments the Client may be required to pay commission or other fees, if applicable; these amounts are disclosed in the contract specifications available in the Firm’s website."
        },
        amtExecution104:{
            zh:"a) 佣金：佣金将按固定的金额收取，可访问本公司网站 http://global.tigerwit.com 查看。",
            en:"a) Commissions: Commissions will be charged as a fixed amount and can be found on the Firm’s website at http://global.tigerwit.com.",
            vi:"a) Hoa hồng: Các khoản hoa hồng sẽ được tính như một số tiền cố định và có thể được tìm thấy trên trang web của Công ty tại http://global.tigerwit.com.",
            "zh-Hant":"a) 傭金：傭金將按固定的金額收取，可訪問本公司網站 http://global.tigerwit.com 查看。",
            id:"a) Commissions: Commissions will be charged as a fixed amount and can be found on the Firm’s website at http://global.tigerwit.com."
        },
        amtExecution105:{
            zh:"b) 融资费：如果有融资费产生，未平仓的某种类型金融工具的头寸将因合同期内每日融资费的“掉期”增加或减少。融资费按照主流市场利率执行，并会有变化。适用的每日融资费详情可在本公司网站上金融工具合约规范部分获取。",
            en:"b) Financing Fee: In the case of financing fees, the value of opened positions in some types of Financial Instruments is increased or reduced by a daily financing fee “swap” throughout the life of the contract. Financing fees are based on prevailing market interest rates, which may vary. Details of daily financing fees applied are available on the Financial Instruments Contracts Specifications section in the Firm’s website.",
            vi:"b) Phí tài chính: Trong trường hợp phí tài chính, giá trị của các vị thế mở trong một số loại Công cụ tài chính được tăng hoặc giảm bằng khoản phí tài chính hàng ngày “swap” trong suốt thời hạn của hợp đồng. Phí tài chính dựa trên lãi suất thị trường hiện hành, có thể thay đổi. Chi tiết về phí tài chính hàng ngày được áp dụng có sẵn trên phần Thông số Hợp đồng Công cụ Tài chính trong trang web của Công ty.",
            "zh-Hant":"b) 融資費：如果有融資費產生，未平倉的某種類型金融工具的頭寸將因合同期內每日融資費的“掉期”增加或減少。融資費按照主流市場利率執行，並會有變化。適用的每日融資費詳情可在本公司網站上金融工具合約規範部分獲取。",
            id:"b) Financing Fee: In the case of financing fees, the value of opened positions in some types of Financial Instruments is increased or reduced by a daily financing fee “swap” throughout the life of the contract. Financing fees are based on prevailing market interest rates, which may vary. Details of daily financing fees applied are available on the Financial Instruments Contracts Specifications section in the Firm’s website."
        },
        amtExecution106:{
            zh:"对于本公司提供的所有类型的金融工具，佣金和融资费不纳入本公司的报价，而是明确向客户账户收取。",
            en:"For all types of Financial Instruments that the Firm offers, the commission and financing fees are not incorporated into the Firm’s quoted price and are instead charged explicitly to the Client account.",
            vi:"Đối với tất cả các loại Công cụ tài chính mà Công ty cung cấp, phí hoa hồng và tài chính không được đưa vào giá niêm yết của Công ty và thay vào đó được tính phí rõ ràng trong phần Tài khoản Khách hàng.",
            "zh-Hant":"對於本公司提供的所有類型的金融工具，傭金和融資費不納入本公司的報價，而是明確向客戶賬戶收取。",
            id:"For all types of Financial Instruments that the Firm offers, the commission and financing fees are not incorporated into the Firm’s quoted price and are instead charged explicitly to the Client account."
        },
        amtExecution107:{
            zh:"4.币种转换",
            en:"4.Currency Conversion",
            vi:"4.Chuyển đổi ngoại tệ",
            "zh-Hant":"4.幣種轉換",
            id:"4.Currency Conversion"
        },
        amtExecution108:{
            zh:"本公司提供由客户的基础货币转换成相关金融工具币种的币种转换报价。这不会反映客户账户中实际的货币转换，而只是为了方便以基础货币进行计算。",
            en:"The Firm may provide a currency conversion quote from the Client’s base currency to the currency of the relevant Financial Instrument. This will not reflect and actual conversion of currency in the Client’s account, and serves the purpose of calculating consideration in the base currency only.",
            vi:"Công ty có thể cung cấp báo giá được chuyển đổi tiền tệ từ đơn vị tiền tệ gốc của Khách hàng sang đơn vị tiền tệ của Công cụ tài chính có liên quan. Điều này sẽ không phản ánh và chuyển đổi tiền tệ thực tế trong tài khoản của Khách hàng và chỉ nhằm mục đích các phép tính cân nhắc chỉ loại tiền cơ sở.",
            "zh-Hant":"本公司提供由客戶的基礎貨幣轉換成相關金融工具幣種的幣種轉換報價。這不會反映客戶賬戶中實際的貨幣轉換，而只是為了方便以基礎貨幣進行計算。",
            id:"The Firm may provide a currency conversion quote from the Client’s base currency to the currency of the relevant Financial Instrument. This will not reflect and actual conversion of currency in the Client’s account, and serves the purpose of calculating consideration in the base currency only."
        },
        amtExecution109:{
            zh:"执行速度",
            en:"Speed of Execution",
            vi:"Tốc Độ Khớp Lệnh",
            "zh-Hant":"執行速度",
            id:"Speed of Execution"
        },
        amtExecution110:{
            zh:"5.本公司极其重视客户订单的执行，并致力于在技术和通信连接的极限范围内提供高速的执行。无线连接或拨号连接，或客户端任何其他形式的不稳定链接，可能导致连通性差或连通中断，或缺乏信号强度，导致在使用本公司电子交易平台时，客户和本公司之间数据传输被延迟。",
            en:"5.The Firm places a significant importance when executing Client’s orders and strives to offer high speed of execution within the limitations of technology and communications links. The use of wireless connection or dial-up connection or any other form of unstable connection at the Client’s end, may result in poor or interrupted connectivity or lack of signal strength causing delays in the transmission of data between the Client and Firm’s when using the Firm’s electronic trading platform.",
            vi:"5.Công ty đặt tầm quan trọng đáng kể khi thực hiện các lệnh của Khách hàng và cố gắng cung cấp tốc độ khớp lệnh cao trong khả năng cho phép của các kết nối kĩ thuật và truyền phát. Việc sử dụng kết nối không dây hoặc kết nối quay số hoặc bất kỳ hình thức kết nối không ổn định nào khác ở đầu của Khách hàng có thể dẫn đến kết nối kém hoặc bị gián đoạn hoặc thiếu tín hiệu gây ra sự chậm trễ trong việc truyền dữ liệu giữa Khách hàng và Công ty khi sử dụng nền tảng giao dịch điện tử của Công ty.",
            "zh-Hant":"5.本公司極其重視客戶訂單的執行，並致力於在技術和通信連接的極限範圍內提供高速的執行。無線連接或撥號連接，或客戶端任何其他形式的不穩定鏈接，可能導致連通性差或連通中斷，或缺乏信號強度，導致在使用本公司電子交易平臺時，客戶和本公司之間數據傳輸被延遲。",
            id:"5.The Firm places a significant importance when executing Client’s orders and strives to offer high speed of execution within the limitations of technology and communications links. The use of wireless connection or dial-up connection or any other form of unstable connection at the Client’s end, may result in poor or interrupted connectivity or lack of signal strength causing delays in the transmission of data between the Client and Firm’s when using the Firm’s electronic trading platform."
        },
        amtExecution111:{
            zh:"执行的可能性",
            en:"Likelihood of Execution",
            vi:"Khả Năng Thực Hiện Lệnh",
            "zh-Hant":"執行的可能性",
            id:"Likelihood of Execution"
        },
        amtExecution112:{
            zh:"6.本公司在价格和可用数量方面有赖于第三方流动性提供商，所以客户订单的执行将取决于提供商的价格和可用的流动性。虽然客户下达的所有订单都由本公司安排执行，本公司保留拒绝任何类型订单的权利。",
            en:"6.The Firm relies on third party liquidity providers for prices and available volume, therefore execution of the Client’s orders will depend on the pricing and available liquidity of the providers. Although the Firm executes all orders placed by the Clients, it reserves the right to decline an order of any type.",
            vi:"6.Công ty dựa vào các nhà cung cấp thanh khoản của bên thứ ba về giá và khối lượng có sẵn, do đó việc thực hiện các lệnh của Khách hàng sẽ phụ thuộc vào giá cả và tính thanh khoản có sẵn của các nhà cung cấp. Mặc dù Công ty thực hiện tất cả các lệnh do Khách hàng đặt, nhưng Công ty có quyền từ chối lệnh thuộc bất kỳ loại nào.",
            "zh-Hant":"6.本公司在價格和可用數量方面有賴於第三方流動性提供商，所以客戶訂單的執行將取決於提供商的價格和可用的流動性。雖然客戶下達的所有訂單都由本公司安排執行，本公司保留拒絕任何類型訂單的權利。",
            id:"6.The Firm relies on third party liquidity providers for prices and available volume, therefore execution of the Client’s orders will depend on the pricing and available liquidity of the providers. Although the Firm executes all orders placed by the Clients, it reserves the right to decline an order of any type."
        },
        amtExecution113:{
            zh:"订单",
            en:"Orders",
            vi:"Các Loại Lệnh",
            "zh-Hant":"訂單",
            id:"Orders"
        },
        amtExecution114:{
            zh:"订单的市价单、买入限价单、卖出限价单、卖出止损单、买入止损单、止损单、止盈单以上面“订单执行”部分说明的方式执行。应当注意的是，在异常市场条件下，交易的执行价格可能与原来申请的价格显著不同。例如，这种情况在下列情况下可能发生：",
            en:"Market Order, Buy Limit, Sell Limit, Sell Stop, Buy Stop, Stop Loss, Take Profit on Financial Instrument are executed in the manner explained in ‘Order Execution’ section above. It should be noted that the price at which a trade is executed at may vary significantly from original requested price during abnormal market conditions. This may occur, for example, at the following cases: ",
            vi:"Lệnh thị trường, Giới hạn mua, Giới hạn bán, Dừng bán, Dừng mua, Dừng lỗ, Chốt lời trên Công cụ tài chính được thực hiện theo cách được giải thích trong phần ‘Thực Hiện lệnh’ ở trên. Cần lưu ý rằng giá mà tại đó một giao dịch được thực hiện tại có thể khác nhau đáng kể so với giá yêu cầu ban đầu trong điều kiện thị trường bất thường. Điều này có thể xảy ra, ví dụ, trong các trường hợp sau: ",
            "zh-Hant":"訂單的市價單、買入限價單、賣出限價單、賣出止損單、買入止損單、止損單、止盈單以上面“訂單執行”部分說明的方式執行。應當註意的是，在異常市場條件下，交易的執行價格可能與原來申請的價格顯著不同。例如，這種情況在下列情況下可能發生：",
            id:"Market Order, Buy Limit, Sell Limit, Sell Stop, Buy Stop, Stop Loss, Take Profit on Financial Instrument are executed in the manner explained in ‘Order Execution’ section above. It should be noted that the price at which a trade is executed at may vary significantly from original requested price during abnormal market conditions. This may occur, for example, at the following cases: "
        },
        amtExecution115:{
            zh:"a) 市场开市时，b) 新闻发布期间，c) 市场波动期间，价格可能剧烈上下波动，及远离报价，d) 价格快速变化，当价格在一个交易时段的涨跌导致根据相关交易所规则，交易被暂停或限制，e) 如果按照报价执行特定数量的流动性不足，",
            en:"a) During Market opening times, b) During news times, c) During volatile periods where prices may move significantly up or down and away from declared price, d) Where there is rapid price movement, if the price rises or falls in one trading session to such an extent that under the rules of the relevant exchange, trading is suspended or restricted, e) If there is insufficient liquidity for the execution of the specific volume at the declared price,",
            vi:"a) Trong thời gian mở cửa thị trường, b) Trong thời gian tin tức, c) Trong thời gian biến động, giá có thể tăng hoặc giảm đáng kể và khác xa giá đã khai báo, d) Trường hợp biến động giá nhanh, giá tăng hoặc giảm trong một phiên giao dịch mức độ như vậy theo các quy tắc của trao đổi có liên quan, giao dịch bị đình chỉ hoặc hạn chế, e) Nếu không có đủ thanh khoản để thực hiện khối lượng cụ thể ở mức giá đã khai báo,",
            "zh-Hant":"a) 市場開市時，b) 新聞發布期間，c) 市場波動期間，價格可能劇烈上下波動，及遠離報價，d) 價格快速變化，當價格在壹個交易時段的漲跌導致根據相關交易所規則，交易被暫停或限制，e) 如果按照報價執行特定數量的流動性不足，",
            id:"a) During Market opening times, b) During news times, c) During volatile periods where prices may move significantly up or down and away from declared price, d) Where there is rapid price movement, if the price rises or falls in one trading session to such an extent that under the rules of the relevant exchange, trading is suspended or restricted, e) If there is insufficient liquidity for the execution of the specific volume at the declared price,"
        },
        amtExecution116:{
            zh:"7.本公司将竭力向客户尽可能提供最佳价格，并尽一切努力和作出必要的安排。",
            en:"7.The Firm strives to provide the best possible price to its clients, and makes every effort and necessary arrangements to do so.",
            vi:"7.Công ty cố gắng cung cấp mức giá tốt nhất có thể cho khách hàng của mình và cố gắng hết sức và sắp xếp cần thiết để thực hiện điều đó.",
            "zh-Hant":"7.本公司將竭力向客戶盡可能提供最佳價格，並盡壹切努力和作出必要的安排。",
            id:"7.The Firm strives to provide the best possible price to its clients, and makes every effort and necessary arrangements to do so."
        },
        amtExecution117:{
            zh:"结算的可能性",
            en:"Likelihood of Settlement",
            vi:"Khả Năng Thanh Toán",
            "zh-Hant":"結算的可能性",
            id:"Likelihood of Settlement"
        },
        amtExecution118:{
            zh:"8.交易一旦执行，本公司就应当进行所有交易的结算。",
            en:"8.The Firm shall proceed to a settlement of all transactions upon execution of such transactions.",
            vi:"8.Công ty sẽ tiến hành thanh toán tất cả các giao dịch khi thực hiện các giao dịch đó.",
            "zh-Hant":"8.交易壹旦執行，本公司就應當進行所有交易的結算。",
            id:"8.The Firm shall proceed to a settlement of all transactions upon execution of such transactions."
        },
        amtExecution119:{
            zh:"订单规模",
            en:"Size of Order",
            vi:"Kích Thước Lệnh",
            "zh-Hant":"訂單規模",
            id:"Size of Order"
        },
        amtExecution120:{
            zh:"9.本交易平台上最小订单规模为 0.01 手。虽然对客户可以下达给本公司的最大订单规模没有限制，本公司保留依照与客户签订的协议中的说明拒绝订单的权利。",
            en:"9.The minimum size of an order is 0.01 lots on the trading platforms. Although there is no maximum size of an order where the Client can place with the Firm, the Firm reserves the right to decline an order as explained in the agreement entered with the Client.",
            vi:"9.Kích thước tối thiểu của một lệnh là 0.01 lot trên các sàn giao dịch. Mặc dù không có kích thước tối đa của một lệnh mà Khách hàng có thể đặt với Công ty, Công ty bảo lưu quyền từ chối một lệnh như được giải thích trong hợp đồng đã kí với Khách hàng.",
            "zh-Hant":"9.本交易平臺上最小訂單規模為 0.01 手。雖然對客戶可以下達給本公司的最大訂單規模沒有限制，本公司保留依照與客戶簽訂的協議中的說明拒絕訂單的權利。",
            id:"9.The minimum size of an order is 0.01 lots on the trading platforms. Although there is no maximum size of an order where the Client can place with the Firm, the Firm reserves the right to decline an order as explained in the agreement entered with the Client."
        },
        amtExecution121:{
            zh:"不论成交量如何，本公司都尽全力执行客户的订单。但如果可以实现，将以可用的最佳价格，因为市场流动性可能在执行时满足条件（请参看“执行的可能性”）。",
            en:"The Firm makes every effort to fill the order of the client irrespective of the volume. However, if this is achieved, it may be at the best available price, as the market liquidity may allow at the time of execution (See ‘Likelihood of Execution’).",
            vi:"Công ty thực hiện mọi nỗ lực để lấp đầy thứ tự của khách hàng bất kể khối lượng. Tuy nhiên, nếu điều này đạt được, nó có thể ở mức giá tốt nhất có sẵn, vì tính thanh khoản của thị trường có thể cho phép tại thời điểm thực hiện (Xem ‘Khả năng thực thi Lệnh’).",
            "zh-Hant":"不論成交量如何，本公司都盡全力執行客戶的訂單。但如果可以實現，將以可用的最佳價格，因為市場流動性可能在執行時滿足條件（請參看“執行的可能性”）。",
            id:"The Firm makes every effort to fill the order of the client irrespective of the volume. However, if this is achieved, it may be at the best available price, as the market liquidity may allow at the time of execution (See ‘Likelihood of Execution’)."
        },
        amtExecution122:{
            zh:"10.TigerWit 保留对合约数量设置上限，和/或对特定工具每个组合总的净持仓设限的权利。在这种情况下，本公司将尽一切可能的努力在此类情况发生前通知客户。",
            en:"10.TigerWit reserves the right to place a cap on the number of contracts and/ or limit on the total net position value per profile for a specific instrument. In such an event, the Firm will undertake all possible efforts to notify clients prior to such an event.",
            vi:"10.TigerWit có quyền đặt giới hạn về số lượng hợp đồng và / hoặc giới hạn trên tổng giá trị vị thế ròng trên mỗi cấu hình cho một sản phẩm cụ thể. Trong một sự kiện như vậy, Công ty sẽ thực hiện mọi nỗ lực có thể để thông báo cho khách hàng trước một sự kiện như vậy.",
            "zh-Hant":"10.TigerWit 保留對合約數量設置上限，和/或對特定工具每個組合總的凈持倉設限的權利。在這種情況下，本公司將盡壹切可能的努力在此類情況發生前通知客戶。",
            id:"10.TigerWit reserves the right to place a cap on the number of contracts and/ or limit on the total net position value per profile for a specific instrument. In such an event, the Firm will undertake all possible efforts to notify clients prior to such an event."
        },
        amtExecution123:{
            zh:"市场影响",
            en:"Market Impact",
            vi:"Ảnh Hưởng Thị Trường",
            "zh-Hant":"市場影響",
            id:"Market Impact"
        },
        amtExecution124:{
            zh:"11.某些因素可能快速影响标的金融工具的价格，而对金融工具所报出的实价来源于此。这些因素可能影响以上所列的部分因素。本公司将采取一切合理措施，以尽可能为客户获得最佳价格。",
            en:"11.Some factors may affect rapidly the price of the underlying financial instruments from which the quoted firm price for its Financial Instruments is derived. These factors may influence some of the factors listed above. The Firm will take all reasonable steps to obtain the best possible result for its Clients.",
            vi:"11.Một số yếu tố có thể ảnh hưởng nhanh đến giá của các công cụ tài chính cơ bản mà từ đó giá công ty được chào giá cho Công cụ tài chính được chào giá. Những yếu tố này có thể ảnh hưởng đến một số yếu tố được liệt kê ở trên. Công ty sẽ thực hiện tất cả các bước hợp lý để có được kết quả tốt nhất có thể cho Khách hàng của mình.",
            "zh-Hant":"11.某些因素可能快速影響標的金融工具的價格，而對金融工具所報出的實價來源於此。這些因素可能影響以上所列的部分因素。本公司將采取壹切合理措施，以盡可能為客戶獲得最佳價格。",
            id:"11.Some factors may affect rapidly the price of the underlying financial instruments from which the quoted firm price for its Financial Instruments is derived. These factors may influence some of the factors listed above. The Firm will take all reasonable steps to obtain the best possible result for its Clients."
        },
        amtExecution125:{
            zh:"本公司并没有穷尽考虑第 3.2 到 3.9 款所列的全部因素，而且出现以上因素的订单将不被视作优先考虑因素。",
            en:"The Firm does not consider the factors at paragraphs 3.2 to 3.9 exhaustive and the order in which the above factors are presented shall not be taken as priority factor.",
            vi:"Công ty không xem xét các yếu tố ở các đoạn từ 3.2 đến 3.9 đầy đủ và thứ tự các yếu tố trên được trình bày sẽ không được coi là yếu tố ưu tiên.",
            "zh-Hant":"本公司並沒有窮盡考慮第 3.2 到 3.9 款所列的全部因素，而且出現以上因素的訂單將不被視作優先考慮因素。",
            id:"The Firm does not consider the factors at paragraphs 3.2 to 3.9 exhaustive and the order in which the above factors are presented shall not be taken as priority factor."
        },
        amtExecution126:{
            zh:"不过，只要客户发出特定指示，本公司都应当确保客户的订单按照特定的指示获得执行。",
            en:"Nevertheless, whenever there is a specific instruction from the client the Firm shall make sure that the Client’s order shall be executed following the specific instruction.",
            vi:"Tuy nhiên, bất cứ khi nào có một hướng dẫn cụ thể từ khách hàng, Công ty sẽ đảm bảo rằng lệnh của Khách hàng sẽ được thực hiện theo hướng dẫn cụ thể.",
            "zh-Hant":"不過，只要客戶發出特定指示，本公司都應當確保客戶的訂單按照特定的指示獲得執行。",
            id:"Nevertheless, whenever there is a specific instruction from the client the Firm shall make sure that the Client’s order shall be executed following the specific instruction."
        },
        amtExecution127:{
            zh:"本公司将使用商业判断和基于市场上可获得信息的经验，并考虑下列规定的标准，确定以上因素的相对重要性：",
            en:"The Firm will determine the relative importance of the above factors by using its commercial judgment and experience in the light of the information available on the market and taking into account the criteria described below: ",
            vi:"Công ty sẽ xác định tầm quan trọng tương đối của các yếu tố trên bằng cách sử dụng đánh giá thương mại và kinh nghiệm của mình theo thông tin có sẵn trên thị trường và có tính đến các tiêu chí được mô tả dưới đây: ",
            "zh-Hant":"本公司將使用商業判斷和基於市場上可獲得信息的經驗，並考慮下列規定的標準，確定以上因素的相對重要性：",
            id:"The Firm will determine the relative importance of the above factors by using its commercial judgment and experience in the light of the information available on the market and taking into account the criteria described below: "
        },
        amtExecution128:{
            zh:"(a) 客户的特点，包括客户是零售投资者还是专业投资者的分类(b) 客户订单的特点(c) 作为订单标的金融工具的特点(d) 订单可能指示的执行场所的特点",
            en:"(a) the characteristics of the client including the categorisation of the client as retail or professional (b) the characteristics of the client’s order (c) the characteristics of the underlying financial instruments that are the subject of that order (d) the characteristics of the execution venues to which that order can be directed",
            vi:"(a) các đặc điểm của khách hàng bao gồm phân loại khách hàng là lẻ hoặc chuyên nghiệp (b) các đặc điểm của lệnh của khách hàng (c) đặc điểm của các công cụ tài chính cơ bản là chủ đề của lệnh đó (d) đặc điểm của các địa điểm thực hiện mà lệnh đó có thể được chuyển hướng",
            "zh-Hant":"(a) 客戶的特點，包括客戶是零售投資者還是專業投資者的分類(b) 客戶訂單的特點(c) 作為訂單標的金融工具的特點(d) 訂單可能指示的執行場所的特點",
            id:"(a) the characteristics of the client including the categorisation of the client as retail or professional (b) the characteristics of the client’s order (c) the characteristics of the underlying financial instruments that are the subject of that order (d) the characteristics of the execution venues to which that order can be directed"
        },
        amtExecution129:{
            zh:"客户可能的最佳结果将按照代表金融工具价格和相关执行成本的总成本进行判定，其中包括客户发生的与订单执行直接相关的所有费用。",
            en:"The best possible result for a client shall be determined in terms of the total consideration, representing the price of the financial instrument and the costs related to execution, which shall include all expenses incurred by the client which are directly related to the execution of the order.",
            vi:"Kết quả tốt nhất có thể cho khách hàng sẽ được xác định theo tổng giá trị, thể hiện giá của công cụ tài chính và chi phí liên quan đến việc thực hiện, bao gồm tất cả các chi phí phát sinh của khách hàng liên quan trực tiếp đến việc thực hiện lệnh.",
            "zh-Hant":"客戶可能的最佳結果將按照代表金融工具價格和相關執行成本的總成本進行判定，其中包括客戶發生的與訂單執行直接相關的所有費用。",
            id:"The best possible result for a client shall be determined in terms of the total consideration, representing the price of the financial instrument and the costs related to execution, which shall include all expenses incurred by the client which are directly related to the execution of the order."
        },
        amtExecution130:{
            zh:"执行场所",
            en:"Execution Venues",
            vi:"Địa điểm Thực Thi Lệnh",
            "zh-Hant":"執行場所",
            id:"Execution Venues"
        },
        amtExecution131:{
            zh:"执行场所是订单下达所在或本公司传输执行订单的实体。就本公司提供的金融工具订单而言，本公司始终充当做市商而不是客户的代理人；尽管本公司会将您的执行订单通过自己的电子通讯平台传输给第三方流动性提供商，但根据合同约定，本公司是您交易的唯一对手方，而且所有订单的执行都是以本公司的名义完成，所以本公司是客户订单唯一的执行地点。",
            en:"Execution Venues are the entities with which the orders are placed or to which the Firm transmits orders for execution. For the purposes of orders for the Financial Instrument provided by the Firm, the Firm acts as Principal and not as Agent on the Client’s behalf at all times; although the Firm may transmit your orders for execution to third party liquidity providers through its Electronic Communication Platform, contractually the Firm is the sole counterparty to your trades and any execution of orders is done in the Firm’s name, therefore the Firm is the sole Execution Venue for the execution of the Client’s orders.",
            vi:"Địa điểm thực hiện là các thực thể mà các lệnh được đặt hoặc Công ty truyền các lệnh để thực thi lệnh. Đối với mục đích của các lệnh cho Công cụ tài chính do Công ty cung cấp, Công ty hoạt động với tư cách là Hiệu trưởng và không phải là Đại lý thay mặt Khách hàng vào mọi lúc; mặc dù Công ty có thể truyền phát các lệnh của bạn để thực hiện cho các nhà cung cấp thanh khoản của bên thứ ba thông qua Nền tảng Giao tiếp Điện tử, Công ty là đối tác duy nhất cho các giao dịch của bạn và việc thực hiện các lệnh được thực hiện bằng tên của Công ty, do đó Công ty là Địa điểm Thực hiện duy nhất để thực hiện các lệnh của Khách hàng.",
            "zh-Hant":"執行場所是訂單下達所在或本公司傳輸執行訂單的實體。就本公司提供的金融工具訂單而言，本公司始終充當做市商而不是客戶的代理人；盡管本公司會將您的執行訂單通過自己的電子通訊平臺傳輸給第三方流動性提供商，但根據合同約定，本公司是您交易的唯壹對手方，而且所有訂單的執行都是以本公司的名義完成，所以本公司是客戶訂單唯壹的執行地點。",
            id:"Execution Venues are the entities with which the orders are placed or to which the Firm transmits orders for execution. For the purposes of orders for the Financial Instrument provided by the Firm, the Firm acts as Principal and not as Agent on the Client’s behalf at all times; although the Firm may transmit your orders for execution to third party liquidity providers through its Electronic Communication Platform, contractually the Firm is the sole counterparty to your trades and any execution of orders is done in the Firm’s name, therefore the Firm is the sole Execution Venue for the execution of the Client’s orders."
        },
        amtExecution132:{
            zh:"1.本公司营业时间：从格林威治时间星期天 22:00:01 到格林威治时间星期五 22:00:00。非工作时间：从格林威治时间星期五 22:00:01到格林威治时间星期天 22:00:00。本公司应通过交易终端的内部电子邮件系统通知客户任何假期。",
            en:"1.The Firm operation time: round–the–clock from 22:00:01 GMT Sunday through to 22:00:00 GMT Friday. Non-working periods: from 22:00:01 GMT Friday through 22.00.00 GMT Sunday. Holidays will be announced through the internal mail of the trading terminal supplied by the Firm.",
            vi:"1.Thời gian hoạt động của Công ty: tròn-đồng hồ từ 22:00:01 GMT Chủ Nhật đến 22:00:00 GMT Thứ Sáu. Thời gian không làm việc: từ 22:00:01 GMT Thứ Sáu đến 22.00.00 GMT Chủ Nhật. Ngày lễ sẽ được thông báo qua thư nội bộ của nhà giao dịch do Công ty cung cấp.",
            "zh-Hant":"1.本公司營業時間：從格林威治時間星期天 22:00:01 到格林威治時間星期五 22:00:00。非工作時間：從格林威治時間星期五 22:00:01到格林威治時間星期天 22:00:00。本公司應通過交易終端的內部電子郵件系統通知客戶任何假期。",
            id:"1.The Firm operation time: round–the–clock from 22:00:01 GMT Sunday through to 22:00:00 GMT Friday. Non-working periods: from 22:00:01 GMT Friday through 22.00.00 GMT Sunday. Holidays will be announced through the internal mail of the trading terminal supplied by the Firm."
        },
        amtExecution133:{
            zh:"2.根据上文第 3 款所述的因素，本公司严重依赖以上执行场所以及他们的相对重要性。本公司的政策规定需要保持此类内部流程和原则，从而确定这些因素的相对重要性，代表客户的最佳利益行事，并在与他们交易时尽 可 能 为 他 们 提 供 最 佳 结 果 （ 或 “ 最 佳 执行”）。",
            en:"2.The Firm places significant reliance to the above Execution Venue based on the above- mentioned factors set out at paragraph 3 and their relative importance. It is the Firm’s policy to maintain such internal procedures and principles in order to determine the relative importance of these factors and to act for the best interest of its Clients and provide them the best possible result (or “best execution”) when dealing with them.",
            vi:"2.Công ty có sự phụ thuộc đáng kể vào Địa điểm Thực Thi Lệnh ở trên dựa trên các yếu tố nêu trên được nêu tại khoản 3 và tầm quan trọng tương đối của chúng. Chính sách của Công ty là duy trì các quy trình và nguyên tắc nội bộ để xác định tầm quan trọng tương đối của các yếu tố này và hành động vì lợi ích tốt nhất của Khách hàng và cung cấp cho họ kết quả tốt nhất có thể (hoặc “thực hiện lệnh tốt nhất”) khi giao dịch với họ .",
            "zh-Hant":"2.根據上文第 3 款所述的因素，本公司嚴重依賴以上執行場所以及他們的相對重要性。本公司的政策規定需要保持此類內部流程和原則，從而確定這些因素的相對重要性，代表客戶的最佳利益行事，並在與他們交易時盡 可 能 為 他 們 提 供 最 佳 結 果 （ 或 “ 最 佳 執行”）。",
            id:"2.The Firm places significant reliance to the above Execution Venue based on the above- mentioned factors set out at paragraph 3 and their relative importance. It is the Firm’s policy to maintain such internal procedures and principles in order to determine the relative importance of these factors and to act for the best interest of its Clients and provide them the best possible result (or “best execution”) when dealing with them."
        },
        amtExecution134:{
            zh:"3.客户确认，与本公司进行的金融工具的交易不是在公认的交易所，而是通过本公司的交易平台进行，因此，它们可能使客户面临比在受监管的交易所交易更大的风险。 所以，在某些情况下（包括但不限于交易平台的技术错误），本公司可能不会执行订单，或可能修改订单的开仓或平仓价格。条款和条件以及交易规则完全由对手方（即本公司）创建。客户有义务在本公司交易平台的开放时间内，对任何给定金融工具的未平仓头寸进行平仓。客户还必须关闭所有与同一对手方（即本公司）原先订立的任何头寸。",
            en:"3.The Client acknowledges that the transactions entered in Financial Instruments with the Firm are not undertaken on a recognised exchange, rather they are undertaken through the Firm’s Trading Platform and, accordingly, they may expose the Client to greater risks than regulated exchange transactions. Therefore, the Firm may not execute an order, or it may change the opening or closing price of an order in certain cases including but not limited to instances of a technical failure of the trading platform. The terms and conditions and trading rules are established solely by the counterparty which in this case is the Firm. The Client is obliged to close an open position of any given Financial Instruments during the opening hours of the Firm’s Trading Platform. The Client also has to close any position with the same counterparty with whom it was originally entered into, thus the Firm.",
            vi:"3.Khách hàng thừa nhận rằng các giao dịch được nhập vào Công cụ tài chính với Công ty không được thực hiện trên sàn giao dịch được công nhận, thay vào đó chúng được thực hiện thông qua Nền tảng giao dịch của Công ty và theo đó, chúng có thể khiến Khách hàng gặp nhiều rủi ro hơn các giao dịch hối đoái được quy định. Do đó, Công ty có thể không thực hiện một lệnh, hoặc nó có thể thay đổi giá mở hoặc đóng của một lệnh trong một số trường hợp nhất định bao gồm nhưng không giới hạn trong các trường hợp sự cố kỹ thuật của sàn giao dịch. Các điều khoản và điều kiện và quy tắc giao dịch được thành lập chỉ bởi đối tác mà trong trường hợp này là Công ty. Khách hàng có nghĩa vụ đóng một vị thế mở của bất kỳ Công cụ tài chính cụ thể nào trong giờ mở cửa của Sàn giao dịch của Công ty. Khách hàng cũng phải đóng bất kỳ vị thế nào với cùng một đối tác mà họ đã được nhập vào ban đầu, do đó Công ty.",
            "zh-Hant":"3.客戶確認，與本公司進行的金融工具的交易不是在公認的交易所，而是通過本公司的交易平臺進行，因此，它們可能使客戶面臨比在受監管的交易所交易更大的風險。 所以，在某些情況下（包括但不限於交易平臺的技術錯誤），本公司可能不會執行訂單，或可能修改訂單的開倉或平倉價格。條款和條件以及交易規則完全由對手方（即本公司）創建。客戶有義務在本公司交易平臺的開放時間內，對任何給定金融工具的未平倉頭寸進行平倉。客戶還必須關閉所有與同壹對手方（即本公司）原先訂立的任何頭寸。",
            id:"3.The Client acknowledges that the transactions entered in Financial Instruments with the Firm are not undertaken on a recognised exchange, rather they are undertaken through the Firm’s Trading Platform and, accordingly, they may expose the Client to greater risks than regulated exchange transactions. Therefore, the Firm may not execute an order, or it may change the opening or closing price of an order in certain cases including but not limited to instances of a technical failure of the trading platform. The terms and conditions and trading rules are established solely by the counterparty which in this case is the Firm. The Client is obliged to close an open position of any given Financial Instruments during the opening hours of the Firm’s Trading Platform. The Client also has to close any position with the same counterparty with whom it was originally entered into, thus the Firm."
        },
        amtExecution135:{
            zh:"监控和审查",
            en:"Monitor and Review",
            vi:"Giám Sát và Kiểm Tra",
            "zh-Hant":"監控和審查",
            id:"Monitor and Review"
        },
        amtExecution136:{
            zh:"1.本公司将会定期监督和评估本政策和订单执行安排秩序的效果，尤其是本政策所说明流程的执行质量，从而尽可能向客户提供最佳结果。在适当情况下，本公司保留修改本政策任何缺陷和改善执行安排的的权利。",
            en:"1.The Firm will monitor and assess on a regular basis the effectiveness of this Policy and the order of its order execution arrangements and, in particular, the execution quality of the procedures explained in the Policy in order to deliver the best possible result for the client, and, where appropriate, the Firm reserves the right to correct any deficiencies in this Policy and make improvements to its execution arrangements.",
            vi:"1.Công ty sẽ sao chép và đánh giá thường xuyên tính hiệu quả của Chính sách này và thứ tự sắp xếp thực hiện các lệnh và đặc biệt là chất lượng thực hiện các thủ tục được giải thích trong Chính sách nhằm mang lại kết quả tốt nhất có thể cho khách hàng, và, nếu thích hợp, Công ty bảo lưu quyền sửa bất kỳ thiếu sót nào trong Chính sách này và thực hiện các cải thiện đối với các trình tự thực thi lệnh của nó.",
            "zh-Hant":"1.本公司將會定期監督和評估本政策和訂單執行安排秩序的效果，尤其是本政策所說明流程的執行質量，從而盡可能向客戶提供最佳結果。在適當情況下，本公司保留修改本政策任何缺陷和改善執行安排的的權利。",
            id:"1.The Firm will monitor and assess on a regular basis the effectiveness of this Policy and the order of its order execution arrangements and, in particular, the execution quality of the procedures explained in the Policy in order to deliver the best possible result for the client, and, where appropriate, the Firm reserves the right to correct any deficiencies in this Policy and make improvements to its execution arrangements."
        },
        amtExecution137:{
            zh:"2.此外，本公司将至少每年检查一次本政策及订单执行安排。当发生影响本公司继续使用本政策内规定场所，以持续尽可能为客户订单实现最佳执行结果的重大变化时，也将开展检查。",
            en:"2.In addition, Firm will review the Policy as well as its order execution arrangements at least annually. A review will also be carried out whenever a material change occurs that affects the ability of the Firm to continue to the best possible result for the execution of its client orders on a consistent basis using the venues included in this Policy.",
            vi:"2.Ngoài ra, Công ty sẽ xem xét Chính sách cũng như sắp xếp thực hiện lệnh của mình ít nhất hàng năm. Việc xem xét cũng sẽ được thực hiện bất cứ khi nào có thay đổi về vật chất ảnh hưởng đến khả năng của Công ty để tiếp tục kết quả tốt nhất có thể cho việc thực hiện các lệnh của khách hàng một cách nhất quán bằng cách sử dụng các địa điểm trong Chính sách này.",
            "zh-Hant":"2.此外，本公司將至少每年檢查壹次本政策及訂單執行安排。當發生影響本公司繼續使用本政策內規定場所，以持續盡可能為客戶訂單實現最佳執行結果的重大變化時，也將開展檢查。",
            id:"2.In addition, Firm will review the Policy as well as its order execution arrangements at least annually. A review will also be carried out whenever a material change occurs that affects the ability of the Firm to continue to the best possible result for the execution of its client orders on a consistent basis using the venues included in this Policy."
        },
        amtExecution138:{
            zh:"本公司将对其政策或订单执行安排的任何重大变动对客户发出通知。",
            en:"The Firm will notify its affected clients on any material changes in its Policy or order execution arrangements.",
            vi:"Công ty sẽ thông báo cho các khách hàng bị ảnh hưởng của mình về bất kỳ thay đổi vật chất nào trong Chính sách hoặc các thỏa thuận thực hiện lệnh của nó.",
            "zh-Hant":"本公司將對其政策或訂單執行安排的任何重大變動對客戶發出通知。",
            id:"The Firm will notify its affected clients on any material changes in its Policy or order execution arrangements."
        },
        amtExecution139:{
            zh:"客户同意书",
            en:"Client Consent",
            vi:"Khách Hàng Đồng Ý",
            "zh-Hant":"客戶同意書",
            id:"Client Consent"
        },
        amtExecution140:{
            zh:"1.在与客户建立业务关系时，本公司必须获得客户对本政策的事先同意。",
            en:"1.When establishing a business relation with the Client, the Firm is required to obtain the Client’s prior consent to this Policy.",
            vi:"1.Khi thiết lập quan hệ kinh doanh với Khách hàng, Công ty bắt buộc phải có được sự đồng ý trước của Khách hàng đối với Chính sách này.",
            "zh-Hant":"1.在與客戶建立業務關系時，本公司必須獲得客戶對本政策的事先同意。",
            id:"1.When establishing a business relation with the Client, the Firm is required to obtain the Client’s prior consent to this Policy."
        },
        amtExecution141:{
            zh:"2.客户与本公司签署本协议，即表示客户按照 6.1 款的规定给予同意书，即客户获知，对于所有就本公司提供金融工具而向本公司下达的所有订单，本公司充当做市商，而且本公司是非监管市场的唯一执行地点。",
            en:"2.By entering into the Client Agreement, the Client provides the consents referred to in paragraph 6.1 where the Client is informed that any orders placed with the Firm for the Financial Instruments offered by the Firm, the Firm acts as the principal and the Firm is the sole Execution Venue which is a non-regulated market.",
            vi:"2.Bằng cách kí kết Hợp đồng Khách hàng, Khách hàng cung cấp các thỏa thuận được đề cập trong đoạn 6.1, trong đó Khách hàng được thông báo rằng bất kỳ lệnh nào được đặt với Công ty cho Công cụ Tài chính do Công ty cung cấp, Công ty đóng vai trò là người đứng đầu và Công ty là đơn vị duy nhất Địa điểm Khớp Lệnh là một thị trường không quy định.",
            "zh-Hant":"2.客戶與本公司簽署本協議，即表示客戶按照 6.1 款的規定給予同意書，即客戶獲知，對於所有就本公司提供金融工具而向本公司下達的所有訂單，本公司充當做市商，而且本公司是非監管市場的唯壹執行地點。",
            id:"2.By entering into the Client Agreement, the Client provides the consents referred to in paragraph 6.1 where the Client is informed that any orders placed with the Firm for the Financial Instruments offered by the Firm, the Firm acts as the principal and the Firm is the sole Execution Venue which is a non-regulated market."
        },
        amtExecution142:{
            zh:"重要信息",
            en:"Important Information",
            vi:"Thông tin quan trọng",
            "zh-Hant":"重要信息",
            id:"Important Information"
        },
        amtExecution143:{
            zh:"1.对可用工具可能有特定的杠杆限制。了解更多信息，请访问本网站。",
            en:"1.There may be specific leverage limits on the instruments available. For more information please visit our website.",
            vi:"1.Có thể có giới hạn đòn bẩy cụ thể trên các công cụ có sẵn. Để biết thêm thông tin, vui lòng truy cập trang web của chúng tôi.",
            "zh-Hant":"1.對可用工具可能有特定的杠桿限制。了解更多信息，請訪問本網站。",
            id:"1.There may be specific leverage limits on the instruments available. For more information please visit our website."
        },
        amtExecution144:{
            zh:"2.某些交易可能不允许对冲。在这种情况下，客户再次开设同一工具的头寸，将会抵消原有未平仓头寸。",
            en:"2.On some trading platforms hedging may not be permitted. In the event a Client opens a second position on the same instrument, this will be netted-off against the existing open position.",
            vi:"2.Trên một số nền tảng hedging (giao dịch bảo hiểm) có thể không được phép. Trong trường hợp Khách hàng mở một vị thế thứ hai trên cùng một công cụ, điều này sẽ được bù trừ theo vị thế mở hiện tại.",
            "zh-Hant":"2.某些交易可能不允許對沖。在這種情況下，客戶再次開設同壹工具的頭寸，將會抵消原有未平倉頭寸。",
            id:"2.On some trading platforms hedging may not be permitted. In the event a Client opens a second position on the same instrument, this will be netted-off against the existing open position."
        },
        amtExecution145:{
            zh:"举例：如果客户开设 2 手欧元美元的多头，然后开设 1 手欧元美元的的空头，由于货币对相同，将会产生净头寸。这导致客户留下 1 手欧元美元的多头，并由于净额计算，在平仓时得到由 1 手头寸产生的盈亏。",
            en:"Example: If client has an open BUY position of 2 lots EURUSD and then enters a sell position of 1 lot EURUSD, these positions will net as they are the same currency pair, resulting in the client having a remaining position of BUY 1 lot EURUSD and a realized P/L from the 1 lot position closed due to the netting.",
            vi:"Ví dụ: Nếu khách hàng có một vị trí MUA mở là 2 lot EURUSD và sau đó nhập vào vị thế bán 1 lot EURUSD, các vị trí này sẽ ròng vì chúng là cùng một cặp tiền tệ, dẫn đến khách hàng có vị trí MUA 1 lot EURUSD và một P / L đã nhận ra từ 1 lot vị thế đã đóng do bù trừ ròng.",
            "zh-Hant":"舉例：如果客戶開設 2 手歐元美元的多頭，然後開設 1 手歐元美元的的空頭，由於貨幣對相同，將會產生凈頭寸。這導致客戶留下 1 手歐元美元的多頭，並由於凈額計算，在平倉時得到由 1 手頭寸產生的盈虧。",
            id:"Example: If client has an open BUY position of 2 lots EURUSD and then enters a sell position of 1 lot EURUSD, these positions will net as they are the same currency pair, resulting in the client having a remaining position of BUY 1 lot EURUSD and a realized P/L from the 1 lot position closed due to the netting."
        },
        amtExecution146:{
            zh:"3.CFD 在若干司法管辖区或国家没有销售资格。本政策不针对其发布、提供或分发将违反当地法律或法规的司法管辖区或国家，包括美国发布、提供或分发。本政策不构成购买或出售 CFD 的要约、邀请或招揽。未经事先书面许可，不得向任何其他人士（全部或部分）复制或披露相关内容。本政策并不构成评估客户交易差价合约（CFD）决策的唯一依据。",
            en:"3.CFDs are not eligible for sale in certain jurisdictions or countries. The Policy is not directed to any jurisdiction or country where its publication, availability or distribution would be contrary to local laws or regulations, including the United States of America. The Policy does not constitute an offer, invitation or solicitation to buy or sell CFDs. It may not be reproduced or disclosed (in whole or in part) to any other person without prior written permission. The Policy is not intended to constitute the sole basis for the evaluation of the client’s decision to trade in Contracts for Difference (CFDs).",
            vi:"3.CFD không đủ điều kiện pháp lý để bán tại một số quốc gia hoặc quốc gia nhất định. Chính sách không hướng đến bất kỳ khu vực định chế pháp lý hoặc quốc gia nào nơi việc xuất bản, tính khả dụng hoặc phân phối của nó sẽ trái với luật pháp hoặc quy định của địa phương, bao gồm cả Hoa Kỳ. Chính sách này không cấu thành đề nghị, lời mời hoặc yêu cầu mua hoặc bán CFD. Nó không được sao chép hoặc tiết lộ (toàn bộ hoặc một phần) cho bất kỳ người nào khác mà không có sự cho phép trước bằng văn bản. Chính sách không nhằm tạo cơ sở duy nhất cho việc đánh giá quyết định giao dịch của khách hàng trong Hợp đồng chênh lệch (CFDs).",
            "zh-Hant":"3.CFD 在若幹司法管轄區或國家沒有銷售資格。本政策不針對其發布、提供或分發將違反當地法律或法規的司法管轄區或國家，包括美國發布、提供或分發。本政策不構成購買或出售 CFD 的要約、邀請或招攬。未經事先書面許可，不得向任何其他人士（全部或部分）復制或披露相關內容。本政策並不構成評估客戶交易差價合約（CFD）決策的唯壹依據。",
            id:"3.CFDs are not eligible for sale in certain jurisdictions or countries. The Policy is not directed to any jurisdiction or country where its publication, availability or distribution would be contrary to local laws or regulations, including the United States of America. The Policy does not constitute an offer, invitation or solicitation to buy or sell CFDs. It may not be reproduced or disclosed (in whole or in part) to any other person without prior written permission. The Policy is not intended to constitute the sole basis for the evaluation of the client’s decision to trade in Contracts for Difference (CFDs)."
        },
        amtExecution147:{
            zh:"常见问题",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題",
            id:"FAQs"
        },
        amtExecution148:{
            zh:"1.关于政策问题首先传达给客户服务部。",
            en:"1.Questions regarding the Policy should be addressed, in the first instance, to the Customer Support Department.",
            vi:"1.Các câu hỏi liên quan đến Chính sách nên được giải quyết, trong trường hợp đầu tiên, được đến Bộ Phận Hỗ Trợ Khách Hàng.",
            "zh-Hant":"1.關於政策問題首先傳達給客戶服務部。",
            id:"1.Questions regarding the Policy should be addressed, in the first instance, to the Customer Support Department."
        },
        amtExecution149:{
            zh:"2.客户服务部",
            en:"2.Customer Support Department",
            vi:"2.Bộ Phận Hỗ Trợ Khách Hàng",
            "zh-Hant":"2.客戶服務部",
            id:"2.Customer Support Department"
        },
        amtExecution151:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtExecution152:{
            zh:"其他联系人",
            en:"Additional Contacts",
            vi:"Địa Chỉ Liên Hệ Bổ Sung",
            "zh-Hant":"其他聯系人",
            id:"Additional Contacts"
        },
        amtExecution153:{
            zh:"1.TigerWit 合规部门",
            en:"1.TigerWit Compliance Department",
            vi:"1.Bộ Phận Giám Sát TigerWIt",
            "zh-Hant":"1.TigerWit 合規部門",
            id:"1.TigerWit Compliance Department"
        },
        amtExecution155:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtConflicts1:{
            zh:"序言",
            en:"Introduction",
            vi:"Giới thiệu",
            "zh-Hant":"序言",
            id:"Introduction"
        },
        amtConflicts2:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或“本公司”）在 巴 哈 马 国 注 册 成 立 （ 注 册 证 书 编 号198255B）。我们的注册办事处位于 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.TigerWit Limited (sau đây gọi tắt là \"TigerWit\", \"Công ty\" hoặc \"Công ty\") được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或“本公司”）在 巴 哈 馬 國 註 冊 成 立 （ 註 冊 證 書 編 號198255B）。我們的註冊辦事處位於 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtConflicts3:{
            zh:"2.本公司向客户及潜在客户提供利益冲突政策（以下简称本“政策”）的摘要。",
            en:"2.The Company provides its clients and potential clients with a summary of its Conflicts of Interest Policy (hereinafter the “Policy”).",
            vi:"2.Công ty cung cấp cho khách hàng và khách hàng tiềm năng của mình một bản tóm tắt Chính sách giải quyết xung đột lợi ích (sau đây gọi là “Chính sách”).",
            "zh-Hant":"2.本公司向客戶及潛在客戶提供利益沖突政策（以下簡稱本“政策”）的摘要。",
            id:"2.The Company provides its clients and potential clients with a summary of its Conflicts of Interest Policy (hereinafter the “Policy”)."
        },
        amtConflicts4:{
            zh:"3.根据本政策，本公司须采取一切合理措施，发现并避免以下双方之间的利益冲突：",
            en:"3.Under this Policy, the Company is required to take all reasonable steps to detect and avoid conflicts of interest between: ",
            vi:"3.Theo Chính sách này, Công ty bắt buộc phải thực hiện tất cả các bước hợp lý để phát hiện và tránh xung đột lợi ích giữa:",
            "zh-Hant":"3.根據本政策，本公司須采取壹切合理措施，發現並避免以下雙方之間的利益沖突：",
            id:"3.Under this Policy, the Company is required to take all reasonable steps to detect and avoid conflicts of interest between: "
        },
        amtConflicts5:{
            zh:"(1) 本公司，包含其管理人员、员工、指定代表（或适用情况下的专职代理人）或受上述人员直接或间接管理的相关人士，与本公司客户之间的利益冲突；",
            en:"(1) the firm, including its managers, employee, appointed representatives (or where applicable tied agents), or any person directly or indirectly linked to them by control, and a client of the firm; or",
            vi:"(1) công ty, bao gồm các nhà quản lý, nhân viên, đại diện được chỉ định (hoặc tại địa điểm các đại lý của công ty (nếu có) ) hoặc bất kỳ người nào trực tiếp hoặc gián tiếp liên quan với họ bằng việc kiểm soát và khách hàng của công ty; hoặc là",
            "zh-Hant":"(1) 本公司，包含其管理人員、員工、指定代表（或適用情況下的專職代理人）或受上述人員直接或間接管理的相關人士，與本公司客戶之間的利益沖突；",
            id:"(1) the firm, including its managers, employee, appointed representatives (or where applicable tied agents), or any person directly or indirectly linked to them by control, and a client of the firm; or"
        },
        amtConflicts6:{
            zh:"(2) 本公司的某位客户与另一位客户之间的利益冲突。",
            en:"(2) one client of the firm and another client. ",
            vi:"(2) một khách hàng của công ty và một khách hàng khác.",
            "zh-Hant":"(2) 本公司的某位客戶與另壹位客戶之間的利益沖突。",
            id:"(2) one client of the firm and another client. "
        },
        amtConflicts7:{
            zh:"本公司承诺，在提供与此服务相关的投资服务及其他辅助服务时以诚信、公正、专业、符合客户最佳利益的方式行事且尤其遵守上述法律所规定的原则。",
            en:"The Company is committed to act honestly, fairly and professionally and in the best interests of its clients and to comply, in particular, with the principles set out in the above legislation when providing investment services and other ancillary services related to such services.",
            vi:"Công ty cam kết hành động trung thực, công bằng và chuyên nghiệp và vì lợi ích tốt nhất của khách hàng và tuân thủ các nguyên tắc được quy định trong luật trên khi cung cấp dịch vụ đầu tư và các dịch vụ thứ cấp khác liên quan đến các dịch vụ đó",
            "zh-Hant":"本公司承諾，在提供與此服務相關的投資服務及其他輔助服務時以誠信、公正、專業、符合客戶最佳利益的方式行事且尤其遵守上述法律所規定的原則。",
            id:"The Company is committed to act honestly, fairly and professionally and in the best interests of its clients and to comply, in particular, with the principles set out in the above legislation when providing investment services and other ancillary services related to such services."
        },
        amtConflicts8:{
            zh:"4.我们在此提供一份本政策的摘要，以便管理我们向客户承担责任时所涉及的利益冲突。",
            en:"4.We provide here a summary of the Policy we maintain in order to manage conflicts of interest in respect of the duties we owe to our clients.",
            vi:"4.Tại đây, chúng tôi cung cấp bản tóm tắt chính sách mà chúng tôi duy trì để giải quyết các xung đột lợi ích liên quan đến các nghĩa vụ mà chúng tôi chịu trách nhiệm với khách hàng của mình.",
            "zh-Hant":"4.我們在此提供壹份本政策的摘要，以便管理我們向客戶承擔責任時所涉及的利益沖突。",
            id:"4.We provide here a summary of the Policy we maintain in order to manage conflicts of interest in respect of the duties we owe to our clients."
        },
        amtConflicts9:{
            zh:"5.本政策无意且不会创建在不提供本政策的情况下不存在的任何第三方权利或义务，也不构成本公司与任何客户之间的任何合同内容。",
            en:"5.This Policy is not intended to, and does not, create third party rights or duties that would not already exist if the Policy had not been made available, nor does it form part of any contract between the Company and any client.",
            vi:"5.Chính sách này không nhằm mục đích, và không tạo ra các quyền hoặc nghĩa vụ của bên thứ ba mà không tồn tại nếu Chính sách chưa được cung cấp, cũng không phải là một phần của bất kỳ hợp đồng nào giữa Công ty và bất kỳ khách hàng nào.",
            "zh-Hant":"5.本政策無意且不會創建在不提供本政策的情況下不存在的任何第三方權利或義務，也不構成本公司與任何客戶之間的任何合同內容。",
            id:"5.This Policy is not intended to, and does not, create third party rights or duties that would not already exist if the Policy had not been made available, nor does it form part of any contract between the Company and any client."
        },
        amtConflicts10:{
            zh:"政策范围",
            en:"Scope of the Policy",
            vi:"Phạm Vi Của Chính Sách",
            "zh-Hant":"政策範圍",
            id:"Scope of the Policy"
        },
        amtConflicts11:{
            zh:"1.本政策根据 SCB 提供，其基准是您计划在 TigerWit 平台交易差价合约（“CFD”），CFD 是杠杆产品，涉及很高的风险，可能导致您亏损所有的投资资金。",
            en:"1.The Policy is provided to you in accordance with the SCB on the basis that you are proposing to trade with TigerWit in contracts for difference (‘CFDs’) which are leveraged products, incur a high level of risk and can result in the loss of all your invested capital",
            vi:"1.Chính sách được cung cấp cho bạn theo SCB trên cơ sở bạn đang đề nghị giao dịch với TigerWit trong các hợp đồng chênh lệch ('CFDs') là sản phẩm có đòn bẩy, chịu rủi ro cao và có thể dẫn đến mất tất cả vốn đầu tư của bạn.",
            "zh-Hant":"1.本政策根據 SCB 提供，其基準是您計劃在 TigerWit 平臺交易差價合約（“CFD”），CFD 是杠桿產品，涉及很高的風險，可能導致您虧損所有的投資資金。",
            id:"1.The Policy is provided to you in accordance with the SCB on the basis that you are proposing to trade with TigerWit in contracts for difference (‘CFDs’) which are leveraged products, incur a high level of risk and can result in the loss of all your invested capital"
        },
        amtConflicts12:{
            zh:"2.本文件旨在阐明 TigerWit 为识别及管理企业活动过程中可能产生的利益冲突而采用的方法。本政策适用于 TigerWit 所有董事、员工、本公司直接或间接关联人士（以下简称“相关人员”），并涉及与所有客户进行的一切互动行为。",
            en:"2.The purpose this document is to set out the Company’s approach to identifying and managing conflicts of interest which may arise during the course of its business activities. The Policy applies to all its directors, employees, any persons directly or indirectly linked to the Company (hereinafter called “related persons”) and refers to all interactions with all clients.",
            vi:"2.Mục đích của tài liệu này là trình bày cách thức tiếp cận của Công ty để xác định và giải quyết các xung đột lợi ích có thể phát sinh trong quá trình hoạt động kinh doanh của Công ty. Chính sách áp dụng cho tất cả các giám đốc, nhân viên, bất kỳ người nào liên quan trực tiếp hoặc gián tiếp với Công ty (sau đây gọi là \"người có liên quan\") và đề cập đến tất cả các tương tác với tất cả khách hàng.",
            "zh-Hant":"2.本文件旨在闡明 TigerWit 為識別及管理企業活動過程中可能產生的利益沖突而采用的方法。本政策適用於 TigerWit 所有董事、員工、本公司直接或間接關聯人士（以下簡稱“相關人員”），並涉及與所有客戶進行的壹切互動行為。",
            id:"2.The purpose this document is to set out the Company’s approach to identifying and managing conflicts of interest which may arise during the course of its business activities. The Policy applies to all its directors, employees, any persons directly or indirectly linked to the Company (hereinafter called “related persons”) and refers to all interactions with all clients."
        },
        amtConflicts13:{
            zh:"3.我们政策的目标是识别并防止本公司与客户之间或本公司不同客户之间可能产生的利益冲突。为实现这一目标，我们采用的利益冲突政策规定了相关程序、办法和管理措施。",
            en:"3.The aim of our Policy is to identify and prevent conflicts of interest which may arise between the Company and its clients or between one client and another. Accordingly, we have adopted a conflicts of interest policy setting out the procedures, practices and controls in place to achieve this.",
            vi:"3.Mục đích điều khoản Chính sách này của chúng tôi là xác định và ngăn chặn xung đột lợi ích có thể phát sinh giữa Công ty và khách hàng của mình hoặc giữa một khách hàng và một khách hàng khác. Theo đó, chúng tôi đã áp dụng một khung quy trình giải quyết xung đột lợi ích, các thủ tục và biện pháp kiểm soát tại chỗ để đạt được điều này.",
            "zh-Hant":"3.我們政策的目標是識別並防止本公司與客戶之間或本公司不同客戶之間可能產生的利益沖突。為實現這壹目標，我們采用的利益沖突政策規定了相關程序、辦法和管理措施。",
            id:"3.The aim of our Policy is to identify and prevent conflicts of interest which may arise between the Company and its clients or between one client and another. Accordingly, we have adopted a conflicts of interest policy setting out the procedures, practices and controls in place to achieve this."
        },
        amtConflicts14:{
            zh:"识别利益冲突",
            en:"Identification of Conflicts of Interest",
            vi:"Xác định xung đột lợi ích",
            "zh-Hant":"識別利益沖突",
            id:"Identification of Conflicts of Interest"
        },
        amtConflicts15:{
            zh:"1.为了能够识别投资服务、辅助服务或上述组合服务提供时所产生的可能损害客户利益的利益冲突类型，TigerWit 应顾及本公司、相关人员或受本公司直接或间接管理的相关人士是否处于以下任何一种情况，不论是否出于提供投资或辅助服务、投资活动或其他活动的原因：",
            en:"1.For the purposes of identifying the types of conflict of interest that arise in the course of providing investment and ancillary services or a combination thereof and whose existence may damage the interests of a client, the Company takes into account, whether the Company or a relevant person or a person directly or indirectly linked by control to the firm, is in any of the following situations, whether as a result of providing investment or ancillary services or investment activities or otherwise: ",
            vi:"1.Với mục đích xác định các loại xung đột lợi ích phát sinh trong quá trình cung cấp đầu tư và dịch vụ phụ trợ liên quan hoặc sự kết hợp của chúng và sự tồn tại của các yếu tố có thể làm tổn hại lợi ích của khách hàng, Công ty sẽ bao gồm việc Công ty hoặc người có liên quan hoặc một người trực tiếp hoặc gián tiếp liên quan đến công ty bằng cách kiểm soát công ty, trong bất kỳ trường hợp nào sau đây, cho dù là kết quả của việc cung cấp đầu tư hay dịch vụ phụ trợ hoặc hoạt động đầu tư hay các cách khác:",
            "zh-Hant":"1.為了能夠識別投資服務、輔助服務或上述組合服務提供時所產生的可能損害客戶利益的利益沖突類型，TigerWit 應顧及本公司、相關人員或受本公司直接或間接管理的相關人士是否處於以下任何壹種情況，不論是否出於提供投資或輔助服務、投資活動或其他活動的原因：",
            id:"1.For the purposes of identifying the types of conflict of interest that arise in the course of providing investment and ancillary services or a combination thereof and whose existence may damage the interests of a client, the Company takes into account, whether the Company or a relevant person or a person directly or indirectly linked by control to the firm, is in any of the following situations, whether as a result of providing investment or ancillary services or investment activities or otherwise: "
        },
        amtConflicts16:{
            zh:"(a) 本公司或相关人员可能在损害客户利益的情况下，获取经济利益或避免经济损失；",
            en:"(a) The Company or relevant person is likely to make a financial gain, or avoid a financial loss, at the expense of the client;",
            vi:"(a) Công ty hoặc người có liên quan có khả năng được hưởng lợi nhuận tài chính hoặc tránh mất mát tài chính, từ chi phí của khách hang chi trả;",
            "zh-Hant":"(a) 本公司或相關人員可能在損害客戶利益的情況下，獲取經濟利益或避免經濟損失；",
            id:"(a) The Company or relevant person is likely to make a financial gain, or avoid a financial loss, at the expense of the client;"
        },
        amtConflicts17:{
            zh:"(b) 为客户提供服务或代表客户进行交易的结果牵扯本公司或相关人士的利益，该结果明显与客户可获得的利益不同；",
            en:"(b) The Company or relevant person has an interest in the outcome of a service provided to the client or of a transaction carried out on behalf of the client, which is distinct from the client's interest in that outcome;",
            vi:"(b) Công ty hoặc người có liên quan có quan tâm đến kết quả của một dịch vụ được cung cấp cho khách hàng hoặc của một giao dịch được thực hiện trên danh nghĩa khách hàng, không phục vụ lợi ích của khách hàng trong kết quả đó;",
            "zh-Hant":"(b) 為客戶提供服務或代表客戶進行交易的結果牽扯本公司或相關人士的利益，該結果明顯與客戶可獲得的利益不同；",
            id:"(b) The Company or relevant person has an interest in the outcome of a service provided to the client or of a transaction carried out on behalf of the client, which is distinct from the client's interest in that outcome;"
        },
        amtConflicts18:{
            zh:"(c) 本公司或相关人员有经济上或其他方面的动机，试图向另一位客户或其它客户提供比该客户更优惠的待遇；",
            en:"(c) The Company or relevant person has a financial or other incentive to favour the interest of another client or group of clients over the interests of the client;",
            vi:"(c) Công ty hoặc người có liên quan có một ưu đãi tài chính hoặc ưu đãi khác nhằm mục đích có lợi cho lợi ích của một khách hàng hoặc một nhóm khách hàng khác thay vì lợi ích của khách hàng;",
            "zh-Hant":"(c) 本公司或相關人員有經濟上或其他方面的動機，試圖向另壹位客戶或其它客戶提供比該客戶更優惠的待遇；",
            id:"(c) The Company or relevant person has a financial or other incentive to favour the interest of another client or group of clients over the interests of the client;"
        },
        amtConflicts19:{
            zh:"(d) 本公司或相关人员与客户开展同一业务；",
            en:"(d) The Company or relevant person carries on the same business as the client;",
            vi:"(d) Công ty hoặc người có liên quan thực hiện cùng một công việc với tư cách khách hàng;",
            "zh-Hant":"(d) 本公司或相關人員與客戶開展同壹業務；",
            id:"(d) The Company or relevant person carries on the same business as the client;"
        },
        amtConflicts20:{
            zh:"(e) 本公司或相关人员就提供给客户的服务接收或将会接收除了客户以外的其它人士以金钱、商品或服务形式给予的赠予，这些赠予不是该服务相关的标准佣金或费用。",
            en:"(e) The Company or relevant person receives or will receive from a person other than the client an inducement in relation to a service provided to the client, in the form of monies, goods or services, other than the standard commission or fee for that service.",
            vi:"(e) Công ty hoặc người có liên quan nhận hoặc sẽ nhận được từ một người không phải là khách hàng một sự ưu đãi liên quan đến dịch vụ được cung cấp cho khách hàng, dưới hình thức tiền, hàng hóa hoặc dịch vụ, ngoài hoa hồng hoặc phí dịch vụ theo quy định chuẩn.",
            "zh-Hant":"(e) 本公司或相關人員就提供給客戶的服務接收或將會接收除了客戶以外的其它人士以金錢、商品或服務形式給予的贈予，這些贈予不是該服務相關的標準傭金或費用。",
            id:"(e) The Company or relevant person receives or will receive from a person other than the client an inducement in relation to a service provided to the client, in the form of monies, goods or services, other than the standard commission or fee for that service."
        },
        amtConflicts21:{
            zh:"管理利益冲突",
            en:"Managing Conflicts of Interest",
            vi:"Giải quyết xung đột lợi ích",
            "zh-Hant":"管理利益沖突",
            id:"Managing Conflicts of Interest"
        },
        amtConflicts22:{
            zh:"1.本公司已制定内部政策并设有内部合规部门，负责识别并管理潜在的利益冲突。本公司及内部合规部门还将更新相关内部程序，并确保遵守此类程序。",
            en:"1.The Company has set up internal policies and has an in-house Compliance Department that are responsible for identifying and managing potential conflicts of interests. The above will also update the relevant internal procedures and ensure compliance with such procedures.",
            vi:"1.Công ty đã thiết lập các chính sách nội bộ và có Phòng Giám sát nội bộ chịu trách nhiệm xác định và giải quyết các xung đột quyền lợi có thể xảy ra. Các bộ phận trên cũng sẽ cập nhật các thủ tục nội bộ có liên quan và đảm bảo tuân thủ các thủ tục đó.",
            "zh-Hant":"1.本公司已制定內部政策並設有內部合規部門，負責識別並管理潛在的利益沖突。本公司及內部合規部門還將更新相關內部程序，並確保遵守此類程序。",
            id:"1.The Company has set up internal policies and has an in-house Compliance Department that are responsible for identifying and managing potential conflicts of interests. The above will also update the relevant internal procedures and ensure compliance with such procedures."
        },
        amtConflicts23:{
            zh:"2.本公司维护并运行有效的组织及管理程序，以管理并防止已识别的利益冲突构成或引发客户利益的重大损失风险。本公司同样持续监视商业活动，以确保适当的内部管理。",
            en:"2.The Company maintains and operates effective organizational and administrative procedures to manage and prevent the identified conflicts of interest from constituting or giving rise to a material risk of damage to the interests of its clients. The Company also undertakes ongoing monitoring of business activities to ensure that internal controls are appropriate.",
            vi:"2.Công ty duy trì và vận hành các thủ tục tổ chức và hành chính hiệu quả để giải quyết và ngăn chặn các xung đột lợi ích được xác định từ việc hình thành hoặc gây ra nguy cơ thiệt hại vật chất cho lợi ích của khách hàng. Công ty cũng thực hiện giám sát liên tục các hoạt động kinh doanh để đảm bảo rằng các biện pháp kiểm soát nội bộ là phù hợp.",
            "zh-Hant":"2.本公司維護並運行有效的組織及管理程序，以管理並防止已識別的利益沖突構成或引發客戶利益的重大損失風險。本公司同樣持續監視商業活動，以確保適當的內部管理。",
            id:"2.The Company maintains and operates effective organizational and administrative procedures to manage and prevent the identified conflicts of interest from constituting or giving rise to a material risk of damage to the interests of its clients. The Company also undertakes ongoing monitoring of business activities to ensure that internal controls are appropriate."
        },
        amtConflicts24:{
            zh:"3.采取的措施旨在确保相关人员在从事涉及利益冲突的不同业务活动时，依照适应本公司或其集团规模和活动，且符合客户利益损失风险实质的独立性级别开展上述业务活动。",
            en:"3.The measures adopted are designed to ensure that relevant persons engaged in different business activities involving a conflict of interest carry on those activities at a level of independence at a level of independence appropriate to the size and activities of the firm and its Group, and to the materiality of the risk of damage to the interests of the client.",
            vi:"3.Các biện pháp áp dụng được thiết lập để đảm bảo rằng những người liên quan tham gia vào các hoạt động kinh doanh khác nhau liên quan đến xung đột lợi ích thực hiện các hoạt động đó ở mức độ độc lập phù hợp với quy mô và hoạt động của công ty và Tập đoàn, ở tính chất vật chất của nguy cơ làm ảnh hưởng đến các lợi ích của khách hàng.",
            "zh-Hant":"3.采取的措施旨在確保相關人員在從事涉及利益沖突的不同業務活動時，依照適應本公司或其集團規模和活動，且符合客戶利益損失風險實質的獨立性級別開展上述業務活動。",
            id:"3.The measures adopted are designed to ensure that relevant persons engaged in different business activities involving a conflict of interest carry on those activities at a level of independence at a level of independence appropriate to the size and activities of the firm and its Group, and to the materiality of the risk of damage to the interests of the client."
        },
        amtConflicts25:{
            zh:"一般而言，为了确保必要的独立性，本公司就利益冲突所遵循的程序与管理包含如下级别的措施：",
            en:"In general, the procedures and controls that the Company follows regarding conflicts of interest include the following measures to ensure the requisite degree of independence: ",
            vi:"Nói chung, các thủ tục và sự kiểm soát mà Công ty tuân theo liên quan đến các xung đột lợi ích bao gồm các biện pháp sau đây để đảm bảo mức độ độc lập cần thiết:",
            "zh-Hant":"壹般而言，為了確保必要的獨立性，本公司就利益沖突所遵循的程序與管理包含如下級別的措施：",
            id:"In general, the procedures and controls that the Company follows regarding conflicts of interest include the following measures to ensure the requisite degree of independence: "
        },
        amtConflicts26:{
            zh:"(a) 防止或管理参与涉及利益冲突活动的相关人员之间信息交流的有效程序，前提是该信息的交流可能损害一个或多个客户的利益；",
            en:"(a) Effective procedures to prevent or control the exchange of information between relevant persons engaged in activities involving a risk of a conflict of interest where the exchange of that information may harm the interests of one or more clients;",
            vi:"(a) Các thủ tục hiệu quả để ngăn chặn hoặc kiểm soát việc trao đổi thông tin giữa những người có liên quan tham gia vào các hoạt động liên quan đến nguy cơ xung đột lợi ích mà việc trao đổi thông tin đó có thể gây hại cho lợi ích của một hoặc nhiều khách hàng;",
            "zh-Hant":"(a) 防止或管理參與涉及利益沖突活動的相關人員之間信息交流的有效程序，前提是該信息的交流可能損害壹個或多個客戶的利益；",
            id:"(a) Effective procedures to prevent or control the exchange of information between relevant persons engaged in activities involving a risk of a conflict of interest where the exchange of that information may harm the interests of one or more clients;"
        },
        amtConflicts27:{
            zh:"(b) 针对主要职能涉及代表利益相冲突的客户开展活动或向其提供服务的相关人员，或以其他方式代表可能相冲突的不同利益（包括本公司利益在内）的相关人员进行单独监管；",
            en:"(b) The separate supervision of relevant persons whose principal functions involve carrying out activities on behalf of, or providing services to, clients whose interests may conflict, or who otherwise represent different interests that may conflict, including those of the Company;",
            vi:"(b) Sự giám sát riêng biệt của những người liên quan có chức năng chính tham gia vào việc thực hiện các hoạt động thay mặt hoặc cung cấp dịch vụ cho khách hàng có quyền lợi xung đột hoặc đại diện cho những lợi ích khác nhau có thể xung đột, bao gồm cả những lợi ích của Công ty;",
            "zh-Hant":"(b) 針對主要職能涉及代表利益相沖突的客戶開展活動或向其提供服務的相關人員，或以其他方式代表可能相沖突的不同利益（包括本公司利益在內）的相關人員進行單獨監管；",
            id:"(b) The separate supervision of relevant persons whose principal functions involve carrying out activities on behalf of, or providing services to, clients whose interests may conflict, or who otherwise represent different interests that may conflict, including those of the Company;"
        },
        amtConflicts28:{
            zh:"(c) 如果相关活动的开展可能会造成任何利益冲突，则取消主要参与一项活动的相关人员的报酬与主要参与另一项活动的不同相关人员的报酬或创造的收入之间的任何直接联系；",
            en:"(c) The removal of any direct link between the remuneration of relevant persons principally engaged in one activity and the remuneration of, or revenues generated by, different relevant persons principally engaged in another activity, where a conflict of interest may arise in relation to those activities;",
            vi:"(c) Việc loại bỏ bất kỳ liên kết trực tiếp nào giữa thù lao của người có liên quan chủ yếu tham gia vào một hoạt động và thù lao, hoặc doanh thu được tạo ra bởi những người có liên quan khác nhau chủ yếu tham gia vào hoạt động khác, trường hợp xung đột lợi ích có thể phát sinh liên quan đến các hoạt động đó;",
            "zh-Hant":"(c) 如果相關活動的開展可能會造成任何利益沖突，則取消主要參與壹項活動的相關人員的報酬與主要參與另壹項活動的不同相關人員的報酬或創造的收入之間的任何直接聯系；",
            id:"(c) The removal of any direct link between the remuneration of relevant persons principally engaged in one activity and the remuneration of, or revenues generated by, different relevant persons principally engaged in another activity, where a conflict of interest may arise in relation to those activities;"
        },
        amtConflicts29:{
            zh:"(d) 防止或限制任何人士对相关人员开展投资或辅助服务或活动造成不良影响的措施；",
            en:"(d) Measures to prevent or limit any person from exercising inappropriate influence over the way in which a relevant person carries out investment or ancillary services or activities;",
            vi:"(d) Các biện pháp ngăn chặn hoặc hạn chế bất kỳ người nào thực hiện ảnh hưởng không phù hợp theo cách thức mà một người có liên quan thực hiện đầu tư hoặc các dịch vụ phụ trợ hoặc các hoạt động;",
            "zh-Hant":"(d) 防止或限制任何人士對相關人員開展投資或輔助服務或活動造成不良影響的措施；",
            id:"(d) Measures to prevent or limit any person from exercising inappropriate influence over the way in which a relevant person carries out investment or ancillary services or activities;"
        },
        amtConflicts30:{
            zh:"(e) 如果某些参与可能妨碍对利益冲突的适当管理，则采取预防或管理相关人员同时或连续参与单独的投资或辅助服务或活动的措施。",
            en:"(e) Measures to prevent or control the simultaneous or sequential involvement of a relevant person in separate investment or ancillary services or activities where such involvement may impair the proper management of conflicts of interest.",
            vi:"(e) Các biện pháp ngăn chặn hoặc kiểm soát sự tham gia đồng thời hoặc tuần tự của một người có liên quan trong các hoạt động đầu tư hoặc dịch vụ phụ trợ riêng biệt hoặc sự tham gia có thể làm giảm sự quản lý thích hợp các xung đột lợi ích.",
            "zh-Hant":"(e) 如果某些參與可能妨礙對利益沖突的適當管理，則采取預防或管理相關人員同時或連續參與單獨的投資或輔助服務或活動的措施。",
            id:"(e) Measures to prevent or control the simultaneous or sequential involvement of a relevant person in separate investment or ancillary services or activities where such involvement may impair the proper management of conflicts of interest."
        },
        amtConflicts31:{
            zh:"4.为防止利益冲突而制定的部分政策及程序所示如下：",
            en:"4.Some of these policies and procedures established to prevent Conflicts of Interests are shown below: ",
            vi:"4.Một số chính sách và thủ tục được thiết lập để ngăn chặn Xung đột lợi ích được trình bày bên dưới: ",
            "zh-Hant":"4.為防止利益沖突而制定的部分政策及程序所示如下：",
            id:"4.Some of these policies and procedures established to prevent Conflicts of Interests are shown below: "
        },
        amtConflicts32:{
            zh:"- “需者方知”政策，管理保密信息或内部信息在集团内的传播",
            en:"- A ‘need to know’ policy governing the dissemination of confidential or inside information within the Group",
            vi:"- Một chính sách ‘cần biết’ quy định việc phát tán thông tin bảo mật hoặc nội bộ trong Tập đoàn",
            "zh-Hant":"- “需者方知”政策，管理保密信息或內部信息在集團內的傳播",
            id:"- A ‘need to know’ policy governing the dissemination of confidential or inside information within the Group"
        },
        amtConflicts33:{
            zh:"- 利用“防火墙”限制保密信息及内部信息在本公司流通，以及部门之间物理隔离",
            en:"- Chinese walls restricting the flow of confidential and inside information within our company, and physical separation of departments",
            vi:"- Các rào cản tại Trung Quốc hạn chế dòng của thông tin bảo mật và bên trong trong công ty chúng tôi, và sự phân chia vật lý giữa các phòng ban",
            "zh-Hant":"- 利用“防火墻”限制保密信息及內部信息在本公司流通，以及部門之間物理隔離",
            id:"- Chinese walls restricting the flow of confidential and inside information within our company, and physical separation of departments"
        },
        amtConflicts34:{
            zh:"- 管理电子数据访问的程序",
            en:"- Procedures governing access to electronic data",
            vi:"- Thủ tục điều chỉnh quyền truy cập vào dữ liệu điện tử",
            "zh-Hant":"- 管理電子數據訪問的程序",
            id:"- Procedures governing access to electronic data"
        },
        amtConflicts35:{
            zh:"- 职权分离，避免由一人兼任数职而可能产生的利益冲突",
            en:"- Segregation of duties that may give rise to conflicts of interest if carried on by the same individual",
            vi:"- Phân chia các nhiệm vụ có thể dẫn đến xung đột lợi ích nếu được thực hiện bởi cùng một cá nhân",
            "zh-Hant":"- 職權分離，避免由壹人兼任數職而可能產生的利益沖突",
            id:"- Segregation of duties that may give rise to conflicts of interest if carried on by the same individual"
        },
        amtConflicts36:{
            zh:"- 适用于相关人员自行投资时的个人账户交易规定",
            en:"- Personal account dealing requirements applicable to relevant persons in relation to their own investments",
            vi:"- Các yêu cầu giao dịch tài khoản cá nhân áp dụng cho người liên đới liên quan đến khoản đầu tư của họ",
            "zh-Hant":"- 適用於相關人員自行投資時的個人賬戶交易規定",
            id:"- Personal account dealing requirements applicable to relevant persons in relation to their own investments"
        },
        amtConflicts37:{
            zh:"- 礼品及赠予记录，登记某些福利的招揽、提供或收取",
            en:"- A gifts and inducements log registering the solicitation, offer or receipt of certain benefits",
            vi:"- Các món quà và các hình thức khuyến khích, kêu gọi đăng kí, đề nghị hoặc việc nhận các lợi ích nhất định",
            "zh-Hant":"- 禮品及贈予記錄，登記某些福利的招攬、提供或收取",
            id:"- A gifts and inducements log registering the solicitation, offer or receipt of certain benefits"
        },
        amtConflicts38:{
            zh:"- 除非提供董事会批准，禁止外部商业利益与集团就其高级职员与员工的利益产生冲突",
            en:"- The prohibition of external business interests conflicting with our interests as far as the Group’s officers and employees are concerned, unless board approval is provided",
            vi:"- Việc nghiêm cấm các lợi ích kinh doanh bên ngoài xung đột với lợi ích của chúng tôi theo ý kiến của các nhân viên và nhân viên của Nhóm có liên quan, trừ khi được hội đồng quản trị phê duyệt.",
            "zh-Hant":"- 除非提供董事會批準，禁止外部商業利益與集團就其高級職員與員工的利益產生沖突",
            id:"- The prohibition of external business interests conflicting with our interests as far as the Group’s officers and employees are concerned, unless board approval is provided"
        },
        amtConflicts39:{
            zh:"- 一项旨在限制因给予和接受赠予而引起利益冲突的政策",
            en:"- A policy designed to limit the conflict of interest arising from the giving and receiving of inducements",
            vi:"- Một chính sách được biên soạn để hạn chế xung đột lợi ích phát sinh từ việc cho và nhận các khoản khuyến mãi.",
            "zh-Hant":"- 壹項旨在限制因給予和接受贈予而引起利益沖突的政策",
            id:"- A policy designed to limit the conflict of interest arising from the giving and receiving of inducements"
        },
        amtConflicts40:{
            zh:"- 设立内部合规部门，就上述内容进行监督并向本公司董事会作出报告",
            en:"- Establishment of in-house Compliance Department to monitor and report on the above to the Company’s Board of Directors",
            vi:"- Thành lập Phòng Giám Sát nội bộ để sao chép và báo cáo ở trên cho Ban Giám đốc của Công ty",
            "zh-Hant":"- 設立內部合規部門，就上述內容進行監督並向本公司董事會作出報告",
            id:"- Establishment of in-house Compliance Department to monitor and report on the above to the Company’s Board of Directors"
        },
        amtConflicts41:{
            zh:"- 任命内部审计师，确保适当地维护制度和管理措施并向本公司董事会报告",
            en:"- Appointment of Internal auditor to ensure that appropriate systems and controls are maintained and report to the Company’s Board of Directors",
            vi:"- Bổ nhiệm kiểm toán viên nội bộ để đảm bảo rằng các hệ thống và kiểm soát thích hợp được duy trì và báo cáo cho Ban Giám đốc của Công ty",
            "zh-Hant":"- 任命內部審計師，確保適當地維護制度和管理措施並向本公司董事會報告",
            id:"- Appointment of Internal auditor to ensure that appropriate systems and controls are maintained and report to the Company’s Board of Directors"
        },
        amtConflicts42:{
            zh:"- 建立“四眼监控”原则，监督本公司活动",
            en:"- Establishment of the four-eyes principle in supervising the Company’s activities",
            vi:"- Thiết lập nguyên tắc bốn mắt trong việc giám sát hoạt động của Công ty",
            "zh-Hant":"- 建立“四眼監控”原則，監督本公司活動",
            id:"- Establishment of the four-eyes principle in supervising the Company’s activities"
        },
        amtConflicts43:{
            zh:"披露",
            en:"Disclosure",
            vi:"Tiết lộ",
            "zh-Hant":"披露",
            id:"Disclosure"
        },
        amtConflicts44:{
            zh:"1.如果本公司所作的安排不足以使其有合理信心确保能使客户的利益免受损害，而本公司意识到冲突，则在为客户承担投资业务前，将向该客户披露利益冲突的一般性质及来源。利益冲突的披露将以书面通知的方式进行，通知将包含足够细节以确保客户能够在发生利益冲突的情况下就服务作出明智决定。本公司识别的潜在利益冲突之详情载于本政策附件（可能不时修订）。",
            en:"1.Where arrangements made by the firm are not sufficient to ensure, with reasonable confidence, that risks of damage to the interests of the client will be prevented, the Company will, if it is aware of it, disclose the general nature and/or sources of conflicts of interest to a client prior to undertaking investment business for that client. The disclosure will be made by way of a written notice and will include sufficient detail to enable the client to take an informed decision with respect to the service in the context of which the conflict of interest arises. Details of potential conflicts of interest identified by the Firm are contained in the Annex to this Policy, which may be amended from time to time.",
            vi:"1.Trường hợp các hình thức tổ chức của công ty không đủ để đảm bảo, với sự đảm bảo có thể chấp nhận được, rằng nguy cơ thiệt hại đến lợi ích của khách hàng sẽ được ngăn chặn, Công ty sẽ, nếu nhận thức được điều này, sẽ tiết lộ bản chất và / hoặc nguồn gốc của xung đột lợi ích cho khách hàng trước khi tiến hành việc kinh doanh các khoản đầu tư với khách hàng đó. Việc tiết lộ sẽ được thực hiện bằng cách thông báo bằng văn bản và sẽ bao gồm đầy đủ chi tiết để cho phép khách hàng đưa ra quyết định sáng suốt đối với dịch vụ trong trường hợp xung đột lợi ích phát sinh. Chi tiết về xung đột lợi ích có thể phát sinh được Công ty xác định được nêu trong Phụ lục của Chính sách này, có thể được sửa đổi theo thời gian.",
            "zh-Hant":"1.如果本公司所作的安排不足以使其有合理信心確保能使客戶的利益免受損害，而本公司意識到沖突，則在為客戶承擔投資業務前，將向該客戶披露利益沖突的壹般性質及來源。利益沖突的披露將以書面通知的方式進行，通知將包含足夠細節以確保客戶能夠在發生利益沖突的情況下就服務作出明智決定。本公司識別的潛在利益沖突之詳情載於本政策附件（可能不時修訂）。",
            id:"1.Where arrangements made by the firm are not sufficient to ensure, with reasonable confidence, that risks of damage to the interests of the client will be prevented, the Company will, if it is aware of it, disclose the general nature and/or sources of conflicts of interest to a client prior to undertaking investment business for that client. The disclosure will be made by way of a written notice and will include sufficient detail to enable the client to take an informed decision with respect to the service in the context of which the conflict of interest arises. Details of potential conflicts of interest identified by the Firm are contained in the Annex to this Policy, which may be amended from time to time."
        },
        amtConflicts45:{
            zh:"如果本公司认为披露冲突不适用于冲突管理，我们可能会选择不再继续进行引起利益冲突的交易或事项。",
            en:"If the firm does not believe that disclosure is appropriate to manage the conflict, we may choose not to proceed with the transaction or matter giving rise to the conflict.",
            vi:"Nếu công ty không tin rằng thông tin tiết lộ là thích hợp để quản lý xung đột, chúng tôi có thể chọn không tiếp tục xử lý việc giao dịch hoặc vấn đề làm phát sinh xung đột.",
            "zh-Hant":"如果本公司認為披露沖突不適用於沖突管理，我們可能會選擇不再繼續進行引起利益沖突的交易或事項。",
            id:"If the firm does not believe that disclosure is appropriate to manage the conflict, we may choose not to proceed with the transaction or matter giving rise to the conflict."
        },
        amtConflicts46:{
            zh:"2.本公司保留在其认为适当的时候复核或修订其政策和安排的权利。有关本政策的更多详情可向我方咨询。",
            en:"2.The Company reserves the right to review and/or amend its Policy and arrangements whenever it deems this appropriate. Further information about the Policy is available upon request.",
            vi:"2.Công ty có quyền xem xét và / hoặc sửa đổi Chính sách và các thỏa thuận của mình bất cứ khi nào xét thấy phù hợp. Thông tin thêm về Chính sách có sẵn theo yêu cầu.",
            "zh-Hant":"2.本公司保留在其認為適當的時候復核或修訂其政策和安排的權利。有關本政策的更多詳情可向我方咨詢。",
            id:"2.The Company reserves the right to review and/or amend its Policy and arrangements whenever it deems this appropriate. Further information about the Policy is available upon request."
        },
        amtConflicts47:{
            zh:"常见问题解答",
            en:"Frequently Asked Questions",
            vi:"Các Câu Hỏi Thường Gặp",
            "zh-Hant":"常見問題解答",
            id:"Frequently Asked Questions"
        },
        amtConflicts48:{
            zh:"1.有关利益冲突政策的问题首先应向客户服务部咨询。",
            en:"1.Questions regarding the Conflicts of Interest Policy should be addressed, in the first instance, to the Customer Support Department.",
            vi:"1.Các câu hỏi về Chính sách xung đột lợi ích cần được giải quyết, đầu tiên được gửi đến Bộ Phận Hỗ Trợ Khách Hàng.",
            "zh-Hant":"1.有關利益沖突政策的問題首先應向客戶服務部咨詢。",
            id:"1.Questions regarding the Conflicts of Interest Policy should be addressed, in the first instance, to the Customer Support Department."
        },
        amtConflicts49:{
            zh:"2.客户服务部",
            en:"2.Customer Support Department",
            vi:"2.Bộ Phận Hỗ Trợ Khách Hàng",
            "zh-Hant":"2.客戶服務部",
            id:"2.Customer Support Department"
        },
        amtConflicts51:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtConflicts52:{
            zh:"其他联系人",
            en:"Additional Contacts",
            vi:"Địa Chỉ Bổ Sung",
            "zh-Hant":"其他聯系人",
            id:"Additional Contacts"
        },
        amtConflicts53:{
            zh:"TigerWit 合规部门",
            en:"TigerWit Compliance Department",
            vi:"Bộ Phận Giám Sát của TigerWit",
            "zh-Hant":"TigerWit 合規部門",
            id:"TigerWit Compliance Department"
        },
        amtConflicts55:{
            zh:"电子邮件：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電子郵件：",
            id:"Email: "
        },
        amtComplaint1:{
            zh:"投诉程序概述",
            en:"SUMMARY OF COMPLAINTS PROCEDURE",
            vi:"TÓM TẮT QUY TRÌNH GIẢI QUYẾT PHÀN NÀN",
            "zh-Hant":"投訴程序概述",
            id:"SUMMARY OF COMPLAINTS PROCEDURE"
        },
        amtComplaint2:{
            zh:"1) 我们将在收到您的投诉 48 小时内确认收到，并告知由哪位专业人员处理您的投诉。",
            en:"1) We will acknowledge your complaint within 48 hours of receipt and let you know which senior person will be dealing with your complaint.",
            vi:"1) Chúng tôi sẽ giải quyết khiếu nại, phàn nàn của bạn trong vòng 48 giờ tiếp nhận và cho bạn biết Chuyên viên nào đang giải quyết khiếu nại của bạn.",
            "zh-Hant":"1) 我們將在收到您的投訴 48 小時內確認收到，並告知由哪位專業人員處理您的投訴。",
            id:"1) We will acknowledge your complaint within 48 hours of receipt and let you know which senior person will be dealing with your complaint."
        },
        amtComplaint3:{
            zh:"2) 我们将调查您的投诉并努力在收到您投诉后的四（4）周内给您最终答复。如果我们在这段时间内不能给您最终答复，我们会向您发送最新情况。",
            en:"2) We will investigate your complaint and endeavor to send a final response to you within four (4) weeks of receipt of your complaint. If we are unable to provide you with a final response within this time we will send you an update.",
            vi:"2) Chúng tôi sẽ kiểm tra khiếu nại của bạn và nỗ lực để gửi đến cho bạn phản hồi cuối cùng trong vòng bốn (4) tuần sau khi nhận được khiếu nại của bạn. Nếu chúng tôi có thể đưa ra phản hồi cuối cùng trong khoảng thời gian này, chúng tôi sẽ gửi đến bạn cập nhật mới nhất.",
            "zh-Hant":"2) 我們將調查您的投訴並努力在收到您投訴後的四（4）周內給您最終答復。如果我們在這段時間內不能給您最終答復，我們會向您發送最新情況。",
            id:"2) We will investigate your complaint and endeavor to send a final response to you within four (4) weeks of receipt of your complaint. If we are unable to provide you with a final response within this time we will send you an update."
        },
        amtComplaint4:{
            zh:"3) 我们将努力在收到您的投诉八（8）周内给您最终答复。如果我们在这段时间内不能给您最终答复，我们会向您书面解释原因并告知您何时会给您最终答复。",
            en:"3) We will endeavor to send a final response to you within eight (8) weeks of receipt of your complaint. If we are unable to provide you with a final response within this time frame, we will write to you explaining why and advise you when you can expect a final response.",
            vi:"3) Chúng tôi sẽ cố gắng gửi đến bạn phản hồi cuối cùng trong vòng tám (8) tuần kể từ khi nhận được khiếu nại của bạn. Nếu chúng tôi không thể đưa ra phản hồi trong khung thời gian này, chúng tôi sẽ viết thư để giải thích lý do và thông báo thời hạn bạn có thể nhận được phản hồi cuối cùng.",
            "zh-Hant":"3) 我們將努力在收到您的投訴八（8）周內給您最終答復。如果我們在這段時間內不能給您最終答復，我們會向您書面解釋原因並告知您何時會給您最終答復。",
            id:"3) We will endeavor to send a final response to you within eight (8) weeks of receipt of your complaint. If we are unable to provide you with a final response within this time frame, we will write to you explaining why and advise you when you can expect a final response."
        },
        amtComplaint5:{
            zh:"4) 如果从您投诉之日起已经过去了超过八（8）周，并且未收到最终答复，或是您对已经收到的最终答复不满意，您有权将投诉送交巴哈马证券监察委员会（SCB），他们的联系方式如下：",
            en:"4) If more than eight (8) weeks from the date of your complaint has past and you haven’t received a final response, or you are dissatisfied with the final response you have received from us, you are entitled to refer your complaint to the Securities Commission of The Bahamas (SCB), they can be contacted at the following: ",
            vi:"4) Nếu hơn tám (8) tuần kể từ khi bạn gửi khiếu nại và bạn chưa nhận được phản hồi cuối cùng, hoặc bạn không hài lòng với phản hồi cuối cùng từ chúng tôi, bạn có quyền gửi khiếu nại của mình đến Ủy ban Chứng khoán Bahamas (SCB), bạn có thể liên hệ theo địa chỉ sau:",
            "zh-Hant":"4) 如果從您投訴之日起已經過去了超過八（8）周，並且未收到最終答復，或是您對已經收到的最終答復不滿意，您有權將投訴送交巴哈馬證券監察委員會（SCB），他們的聯系方式如下：",
            id:"4) If more than eight (8) weeks from the date of your complaint has past and you haven’t received a final response, or you are dissatisfied with the final response you have received from us, you are entitled to refer your complaint to the Securities Commission of The Bahamas (SCB), they can be contacted at the following: "
        },
        amtComplaint6:{
            zh:"http://www.scb.gov.bs/e_complaints.html",
            en:"http://www.scb.gov.bs/e_complaints.html",
            vi:"http://www.scb.gov.bs/e_complaints.html",
            "zh-Hant":"http://www.scb.gov.bs/e_complaints.html",
            id:"http://www.scb.gov.bs/e_complaints.html"
        },
        amtComplaint7:{
            zh:"Securities Commission of The Bahamas",
            en:"Securities Commission of The Bahamas",
            vi:"Ủy Ban Chứng khoán Bahamas",
            "zh-Hant":"Securities Commission of The Bahamas",
            id:"Securities Commission of The Bahamas"
        },
        amtComplaint8:{
            zh:"3rd Floor, Charlotte House",
            en:"3rd Floor, Charlotte House",
            vi:"Tầng 3, Charlotte House",
            "zh-Hant":"3rd Floor, Charlotte House",
            id:"3rd Floor, Charlotte House"
        },
        amtComplaint9:{
            zh:"Shirley and Charlotte",
            en:"Shirley and Charlotte Streets",
            vi:"Đường Shirley và Charlotte",
            "zh-Hant":"Shirley and Charlotte",
            id:"Shirley and Charlotte Streets"
        },
        amtComplaint10:{
            zh:"Streets PO Box N8347",
            en:"PO Box N8347",
            vi:"PO Box N8347",
            "zh-Hant":"Streets PO Box N8347",
            id:"PO Box N8347"
        },
        amtComplaint11:{
            zh:"Nassau, Bahamas",
            en:"Nassau, Bahamas",
            vi:"Nassau, Bahamas",
            "zh-Hant":"Nassau, Bahamas",
            id:"Nassau, Bahamas"
        },
        amtComplaint13:{
            zh:"电邮：",
            en:"Email: ",
            vi:"Email: ",
            "zh-Hant":"電郵：",
            id:"Email: "
        },
        amtComplaint14:{
            zh:"您必须在收到最终答复之日起六（6）个月内向金融申诉服务机构提交投诉。",
            en:"You must refer your complaint to the Financial Ombudsman within six (6) months of the date on the final response",
            vi:"Bạn phải gửi khiếu nại đến Thanh Tra Tài Chính trong vòng sáu (6) tháng kể từ ngày nhận được phản hồi cuối cùng.",
            "zh-Hant":"您必須在收到最終答復之日起六（6）個月內向金融申訴服務機構提交投訴。",
            id:"You must refer your complaint to the Financial Ombudsman within six (6) months of the date on the final response"
        },
        amtComplaint15:{
            zh:"序言",
            en:"INTRODUCTION",
            vi:"GIỚI THIỆU",
            "zh-Hant":"序言",
            id:"INTRODUCTION"
        },
        amtComplaint16:{
            zh:"1.TigerWit Limited（以下统称为“TigerWit”、“公司”或“本公司”）在 巴 哈 马 国 注 册 成 立 （ 注 册 证 书 编 号198255B）。我们的注册办事处位于 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈马证券监察委员会授权和监管（注册编号 SIA-F185）。",
            en:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185).",
            vi:"1.TigerWit Limited (sau đây gọi tắt là \"TigerWit\", \"Công ty\" hoặc \"Công ty\") được thành lập (Giấy chứng nhận thành lập số 198255B) trong Khối thịnh vượng chung Bahamas. Văn phòng đăng ký của chúng tôi là 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, Bahamas. TigerWit được ủy quyền và quản lý bởi Ủy ban Chứng khoán Bahamas (giấy phép số SIA-F185).",
            "zh-Hant":"1.TigerWit Limited（以下統稱為“TigerWit”、“公司”或“本公司”）在 巴 哈 馬 國 註 冊 成 立 （ 註 冊 證 書 編 號198255B）。我們的註冊辦事處位於 201 ChurchStreet, Sandyport, P. O. Box SP 64368.Nassau, TheBahamas。TigerWit 受巴哈馬證券監察委員會授權和監管（註冊編號 SIA-F185）。",
            id:"1.TigerWit Limited (hereinafter referred to as ‘TigerWit’, the ‘Firm’ or the 'Company') is incorporated (Certificate of Incorporation No. 198255B) in The Commonwealth of The Bahamas. Our registered office is 201 Church Street, Sandyport, P. O. Box SP 64368. Nassau, The Bahamas. TigerWit is authorised and regulated by the Securities Commission of The Bahamas (licence No. SIA-F185)."
        },
        amtComplaint17:{
            zh:"条款解释",
            en:"INTERPRETATION OF TERMS",
            vi:"GIẢI THÍCH CÁC ĐIỀU KHOẢN",
            "zh-Hant":"條款解釋",
            id:"INTERPRETATION OF TERMS"
        },
        amtComplaint18:{
            zh:"1.除非有相反的说明，本报告中包含的术语应具有特定含义，并可酌情以单数或复数使用（如恰当）。",
            en:"1.Unless indicated to the contrary, the terms included in this Report shall have a specific meaning and may be used in the singular or plural as appropriate.",
            vi:"1.Trừ khi được chỉ định ngược lại, các điều khoản trong Báo cáo này sẽ có ý nghĩa cụ thể và có thể được sử dụng ở dạng số ít hoặc số nhiều nếu thích hợp.",
            "zh-Hant":"1.除非有相反的說明，本報告中包含的術語應具有特定含義，並可酌情以單數或復數使用（如恰當）。",
            id:"1.Unless indicated to the contrary, the terms included in this Report shall have a specific meaning and may be used in the singular or plural as appropriate."
        },
        amtComplaint19:{
            zh:"2.客户: 指“客户协议”定义的“客户”，客户协议可在网页 http://global.tigerwit.com 查看。",
            en:"2.Client: Means the ‘client’ as defined in the ‘Client Agreement’ available online at http://global.tigerwit.com. ",
            vi:"2.Khách hàng: Có nghĩa là 'khách hàng' được xác định trong 'Thỏa thuận khách hàng' được trình bày tại http://global.tigerwit.com.",
            "zh-Hant":"2.客戶: 指“客戶協議”定義的“客戶”，客戶協議可在網頁 http://global.tigerwit.com 查看。",
            id:"2.Client: Means the ‘client’ as defined in the ‘Client Agreement’ available online at http://global.tigerwit.com. "
        },
        amtComplaint20:{
            zh:"投诉处理程序的范围",
            en:"SCOPE OF THE COMPLAINTS HANDLING PROCEDURE",
            vi:"PHẠM VI THỦ TỤC XỬ LÝ KHIẾU NẠI",
            "zh-Hant":"投訴處理程序的範圍",
            id:"SCOPE OF THE COMPLAINTS HANDLING PROCEDURE"
        },
        amtComplaint21:{
            zh:"1.本投诉处理程序（简称“本程序”）列出了在处理收到客户投诉时所使用的程序。",
            en:"1.The Complaints Handling Procedure (‘the Procedure’) sets out the processes employed when dealing with complaints received by clients.",
            vi:"1.Thủ tục Xử lý Khiếu nại (‘Thủ tục’) quy định các quy trình được sử dụng khi giải quyết các khiếu nại từ khách hàng",
            "zh-Hant":"1.本投訴處理程序（簡稱“本程序”）列出了在處理收到客戶投訴時所使用的程序。",
            id:"1.The Complaints Handling Procedure (‘the Procedure’) sets out the processes employed when dealing with complaints received by clients."
        },
        amtComplaint22:{
            zh:"投诉的定义",
            en:"DEFINITION OF A COMPLAINT",
            vi:"ĐỊNH NGHĨA KHIẾU NẠI",
            "zh-Hant":"投訴的定義",
            id:"DEFINITION OF A COMPLAINT"
        },
        amtComplaint23:{
            zh:"1.投诉是指客户对 TigerWit 提供的投资服务和/或辅助服务表示不满意。",
            en:"1.A complaint is an expression of dissatisfaction by a client regarding the provision of investment and/ or ancillary services provided by TigerWit.",
            vi:"1.Đơn khiếu nại là cách thức thể hiện sự không hài lòng của khách hàng về việc cung cấp các dịch vụ đầu tư và / hoặc dịch vụ phụ trợ do TigerWit cung cấp.",
            "zh-Hant":"1.投訴是指客戶對 TigerWit 提供的投資服務和/或輔助服務表示不滿意。",
            id:"1.A complaint is an expression of dissatisfaction by a client regarding the provision of investment and/ or ancillary services provided by TigerWit."
        },
        amtComplaint24:{
            zh:"2.投诉应当包括：",
            en:"2.A complaint shall include: ",
            vi:"2.Khiếu nại bao gồm:",
            "zh-Hant":"2.投訴應當包括：",
            id:"2.A complaint shall include: "
        },
        amtComplaint25:{
            zh:"客户姓名；客户的交易账号；受影响的订单号；问题出现的日期和时间；问题详情描述。",
            en:"the client’s name and surname; the client’s trading account number; the affected transaction numbers, if applicable; the date and time that the issue arose; and a description of the issue.",
            vi:"tên và họ của khách hàng; số tài khoản giao dịch của khách hàng; số giao dịch bị ảnh hưởng, nếu có; ngày và giờ phát sinh vấn đề; và trình bày vấn đề.",
            "zh-Hant":"客戶姓名；客戶的交易賬號；受影響的訂單號；問題出現的日期和時間；問題詳情描述。",
            id:"the client’s name and surname; the client’s trading account number; the affected transaction numbers, if applicable; the date and time that the issue arose; and a description of the issue."
        },
        amtComplaint26:{
            zh:"3.投诉不得包含针对 TigerWit 或 TigerWit员工的冒犯性语言。",
            en:"3.A complaint must not include offensive language directed either to TigerWit or an TigerWit employee.",
            vi:"3.Đơn khiếu nại không chứa ngôn ngữ xúc phạm hướng đến TigerWit hoặc nhân viên TigerWit.",
            "zh-Hant":"3.投訴不得包含針對 TigerWit 或 TigerWit員工的冒犯性語言。",
            id:"3.A complaint must not include offensive language directed either to TigerWit or an TigerWit employee."
        },
        amtComplaint27:{
            zh:"程序",
            en:"PROCEDURE",
            vi:"QUY TRÌNH",
            "zh-Hant":"程序",
            id:"PROCEDURE"
        },
        amtComplaint28:{
            zh:"1.所有投诉必须书面进行，且应当首先传达给客户服务部。如果客户收到客户服务部的答复，但认为应当进一步投诉，客户可要求客户服务部将投诉提交合规部，或直接联系合规部，该部门将独立和公正地展开调查。",
            en:"1.All complaints must be in writing and shall be addressed, in the first instance, to the Customer Support Department. If the client receives a response from Customer Support but deems that the complaint needs to be raised further the client may either ask Customer Support to escalate it to the Compliance Department or directly contact Compliance, which will independently and impartially investigate it.",
            vi:"1.Tất cả các khiếu nại phải bằng văn bản và sẽ được giải quyết, trong trường hợp đầu tiên, đến Bộ phận hỗ trợ khách hàng. Nếu khách hàng nhận được phản hồi từ bộ phận Hỗ trợ Khách hàng nhưng cho rằng khiếu nại cần được đưa lên cấp cao hơn, khách hàng có thể yêu cầu Bộ phận Hỗ trợ Khách hàng chuyển nó đến Phòng Kiểm Soát hoặc liên hệ trực tiếp với Bộ phận Kiểm Soát, sẽ là nơi điều tra công tâm và độc lập.",
            "zh-Hant":"1.所有投訴必須書面進行，且應當首先傳達給客戶服務部。如果客戶收到客戶服務部的答復，但認為應當進壹步投訴，客戶可要求客戶服務部將投訴提交合規部，或直接聯系合規部，該部門將獨立和公正地展開調查。",
            id:"1.All complaints must be in writing and shall be addressed, in the first instance, to the Customer Support Department. If the client receives a response from Customer Support but deems that the complaint needs to be raised further the client may either ask Customer Support to escalate it to the Compliance Department or directly contact Compliance, which will independently and impartially investigate it."
        },
        amtComplaint29:{
            zh:"2.客户服务部和合规部都应当按要求彻底调查所有投诉（对本公司文书和记录所含的所有信息进行考察，包括但不限于客户交易账户的日志），以获得公平的结论。",
            en:"2.Both the Customer Support Department and the Compliance Department shall thoroughly examine any complaints as required (taking into account any information contained within the books and records of the Firm, including but not limited to the client’s trading account journal) to reach a fair outcome.",
            vi:"2.Cả Bộ phận Hỗ trợ Khách hàng và Phòng Giám sát sẽ kiểm tra kỹ mọi khiếu nại theo yêu cầu (xem xét bất kỳ thông tin nào có trong sách và hồ sơ của Công ty, bao gồm nhưng không giới hạn trong lịch sử tài khoản giao dịch của khách hàng) để đạt được kết quả công bằng.",
            "zh-Hant":"2.客戶服務部和合規部都應當按要求徹底調查所有投訴（對本公司文書和記錄所含的所有信息進行考察，包括但不限於客戶交易賬戶的日誌），以獲得公平的結論。",
            id:"2.Both the Customer Support Department and the Compliance Department shall thoroughly examine any complaints as required (taking into account any information contained within the books and records of the Firm, including but not limited to the client’s trading account journal) to reach a fair outcome."
        },
        amtComplaint30:{
            zh:"3.客户服务部和合规部都必须：",
            en:"3.Both the Customer Support Department and the Compliance Department shall: ",
            vi:"3.Cả Bộ Phận Hỗ Trợ Khách Hàng và Giám Sát sẽ:",
            "zh-Hant":"3.客戶服務部和合規部都必須：",
            id:"3.Both the Customer Support Department and the Compliance Department shall: "
        },
        amtComplaint31:{
            zh:"(i) 在 48 小时内向客户发送初步的答复，",
            en:"(i) send an initial response to the client within 48 hours,",
            vi:"(i) gửi phản hồi ban đầu cho khách hàng trong vòng 48 giờ,",
            "zh-Hant":"(i) 在 48 小時內向客戶發送初步的答復，",
            id:"(i) send an initial response to the client within 48 hours,"
        },
        amtComplaint32:{
            zh:"(ii) 按照合理可行的方式尽快解决投诉，并",
            en:"(ii) resolve complaints as soon as reasonably practicable, and",
            vi:"(ii) giải quyết khiếu nại ngay khi có thể thực hiện hợp lý và",
            "zh-Hant":"(ii) 按照合理可行的方式盡快解決投訴，並",
            id:"(ii) resolve complaints as soon as reasonably practicable, and"
        },
        amtComplaint33:{
            zh:"(iii) 通知相应客户。",
            en:"(iii) inform the client accordingly.",
            vi:"(iii) thông báo cho khách hàng cho thích hợp.",
            "zh-Hant":"(iii) 通知相應客戶。",
            id:"(iii) inform the client accordingly."
        },
        amtComplaint34:{
            zh:"4.所有投诉都应保密。",
            en:"4.All complaints shall be treated confidentially.",
            vi:"4.Tất cả các khiếu nại sẽ được xử lý một cách bảo mật.",
            "zh-Hant":"4.所有投訴都應保密。",
            id:"4.All complaints shall be treated confidentially."
        },
        amtComplaint35:{
            zh:"常见问题",
            en:"FAQs",
            vi:"FAQs",
            "zh-Hant":"常見問題",
            id:"FAQs"
        },
        amtComplaint36:{
            zh:"1.关于此程序的问题首先传达给客户服务部。",
            en:"1.Questions regarding this Procedure should be addressed, in the first instance, to the Customer Service Department.",
            vi:"1.Các câu hỏi liên quan đến thủ tục này cần được giải quyết, trong trường hợp đầu tiên, đến Bộ Phận Dịch Vụ Khách Hàng.",
            "zh-Hant":"1.關於此程序的問題首先傳達給客戶服務部。",
            id:"1.Questions regarding this Procedure should be addressed, in the first instance, to the Customer Service Department."
        },
        amtComplaint37:{
            zh:"联系方式",
            en:"CONTACTS",
            vi:"LIÊN HỆ",
            "zh-Hant":"聯系方式",
            id:"CONTACTS"
        },
        amtComplaint38:{
            zh:"1.客户服务部",
            en:"1.Customer Support Department",
            vi:"1.Bộ Phận Hỗ Trỡ Khách Hàng",
            "zh-Hant":"1.客戶服務部",
            id:"1.Customer Support Department"
        },
        amtComplaint40:{
            zh:"电子邮件：",
            en:"E-mail: ",
            vi:"E-mail: ",
            "zh-Hant":"電子郵件：",
            id:"E-mail: "
        },
        amtComplaint41:{
            zh:"2.合规部门",
            en:"2.Compliance Department",
            vi:"2.Phòng Kiểm Soát",
            "zh-Hant":"2.合規部門",
            id:"2.Compliance Department"
        },
        amtComplaint43:{
            zh:"电子邮件：",
            en:"E-mail: ",
            vi:"E-mail: ",
            "zh-Hant":"電子郵件：",
            id:"E-mail: "
        },
        downloadApp:{
            title:{
                zh:"下载APP",
                en:"Download APP",
                vi:"Download APP",
                "zh-Hant":"下載APP",
                id:"Unduh APP"
            },
            tip1:{
                zh:"复制跟单",
                en:"Follow a master to trade",
                vi:"Làm theo một bậc thầy để giao dịch",
                "zh-Hant":"復制跟單",
                id:"Ikuti Master"
            },
            tip2:{
                zh:"无需精通外汇知识，跟着高手坐享其成",
                en:"No need to master forex knowledge, just follow a master and enjoy the profit.",
                vi:"Không cần thành thạo kiến thức forex, chỉ cần làm theo một bậc thầy và hưởng lợi nhuận.",
                "zh-Hant":"無需精通外匯知識，跟著高手坐享其成",
                id:"Anda tidak perlu menguasai semua pengetahuan tentang valas, cukup ikuti seorang Master dan nikmati hasilnya."
            },
            tip3:{
                zh:"支持Android2.3.3及以上",
                en:"Support Android2.3.3 and above",
                vi:"Phiên bản android hỗ trợ Android2.3.3 trở lên",
                "zh-Hant":"支持Android2.3.3及以上",
                id:"Mendukung versi Android 2.3.3 dan yang lebih baru"
            },
            tip4:{
                zh:"支持苹果iOS7.0及以上",
                en:"Support apple iOS7.0 and above",
                vi:"Hỗ trợ apple iOS7.0 trở lên",
                "zh-Hant":"支持蘋果iOS7.0及以上",
                id:"Mendukung versi iOS7.0 dan yang lebih baru"
            },
            tip5:{
                zh:"扫码轻松赚收益",
                en:"Scan QR code and take profit easily",
                vi:"Quét mã QR và nhận lợi nhuận dễ dàng",
                "zh-Hant":"掃碼輕松賺收益",
                id:"Pindai kode QR dan hasilkan uang dengan mudah"
            },
            tip6:{
                zh:"请使用手机浏览器扫描功能",
                en:"Please use the mobile browser scan function",
                vi:"Vui lòng sử dụng chức năng quét trình duyệt di động",
                "zh-Hant":"請使用手機瀏覽器掃描功能",
                id:"Mohon gunakan pemindai browser seluler"
            },
            tip15:{
                zh:"TigerWit APP 链接全球金融市场",
                en:"TigerWit APP Link to global financial markets",
                vi:"TigerWit APP Liên kết với các thị trường tài chính toàn cầu",
                "zh-Hant":"TigerWit APP 鏈接全球金融市場",
                id:"APP TigerWit menghubungkan anda ke pasar keuangan global"
            },
            tip16:{
                zh:"人人都是投资高手—你准备好了吗？",
                en:"Trade like a master—Are you ready for it?",
                vi:"Giao dịch như một bậc thầy - Bạn đã sẵn sàng chưa?",
                "zh-Hant":"人人都是投資高手—妳準備好了嗎？",
                id:"Trading layaknya seorang Master - Anda sudah siap?"
            },
            howChooseMaster:{
                zh:"如何选择高手",
                en:"How to choose a master",
                vi:"How to choose a master",
                "zh-Hant":"如何選擇高手",
                id:"Bagaimana cara memilih Master"
            },
            analysis:{
                zh:"每日汇评",
                en:"Analysis",
                vi:"Analysis",
                "zh-Hant":"每日匯評",
                id:"Analisis"
            },
            calendar:{
                zh:"财经日历",
                en:"Calendar",
                vi:"Calendar",
                "zh-Hant":"財經日歷",
                id:"Kalender"
            },
            guides:{
                zh:"交易指南",
                en:"Guides",
                vi:"Chỉ dẫn",
                "zh-Hant":"交易指南",
                id:"Panduan"
            },
            partners:{
                zh:"合作伙伴",
                en:"Partners",
                vi:"Đối tác",
                "zh-Hant":"合作夥伴",
                id:"Mitra"
            },
            agencies:{
                zh:"代理合作",
                en:"Partners",
                vi:"Các đại lý",
                "zh-Hant":"代理合作",
                id:"Mitra"
            },
            becomeMaster:{
                zh:"成为高手",
                en:"Become a master",
                vi:"Trở Thành Master",
                "zh-Hant":"成為高手",
                id:"Menjadi Master"
            },
            eliteTeam:{
                zh:"精英团队",
                en:"Elite team",
                vi:"Elite team",
                "zh-Hant":"精英團隊",
                id:"Tim Elit"
            },
            mediaReports:{
                zh:"媒体报道",
                en:"Media reports",
                vi:"Media reports",
                "zh-Hant":"媒體報道",
                id:"Laporan Media"
            },
            copyRegulations:{
                zh:"复制规则",
                en:"Copy Regulations",
                vi:"Quy chế sao chép",
                "zh-Hant":"復制規則",
                id:"Peraturan Copy"
            }
        },
        header:{
            education:{
                zh:"教育",
                en:"Education",
                vi:"Hỏi đáp",
                "zh-Hant":"教育",
                id:"Edukasi"
            },
            course:{
                zh:"教程",
                en:"Course",
                vi:"Khóa học",
                "zh-Hant":"教程",
                id:"Pelatihan"
            }
        },
        footer:{
            serviceTime:{
                zh:"客服电话（服务时间 8:00-22:00）",
                en:"Customer service telephone (service time from 8:00 to 22:00)",
                vi:"Số điện thoại dịch vụ chăm sóc khách hàng ( thời gian phục vụ từ 8:00 đến 22:00)",
                "zh-Hant":"客服電話（服務時間 8:00-22:00）",
                id:"Nomor telepon Layanan Pelanggan ( Waktu layanan dari jam 8:00 hingga 22:00)"
            },
            subscribeArticle:{
                zh:"订阅每日必读的投资干货",
                en:"Subscribe daily investment article",
                vi:"Sao chép bài viết đầu tư hàng ngày",
                "zh-Hant":"訂閱每日必讀的投資幹貨",
                id:"Langganan artikel investasi"
            },
            scb:{
                zh:"TigerWit受巴哈马证券交易委员会（SCB）的授权和监管，监管号：SIA-F185。",
                en:"TigerWit is authorized and supervised by Securities Commission of the Bahamas (SCB), the regulation number SIA-F185.",
                vi:"TigerWit is authorized and supervised by Securities Commission of the Bahamas (SCB), the regulation number SIA-F185.",
                "zh-Hant":"TigerWit受巴哈馬證券交易委員會（SCB）的授權和監管，監管號：SIA-F185。",
                id:"TigerWit disahkan dan diawasi oleh Securities Commission of the Bahamas (SCB) dengan nomor peraturan SIA-F185. "
            },
            fca:{
                zh:"TigerWit受英国金融行为监管局（FCA）的授权和监管，授权编号为：679941。",
                en:"TigerWit is authorized and supervised by Financial Conduct Authority (FCA), the authorization number 679941.",
                vi:"TigerWit is authorized and supervised by Financial Conduct Authority (FCA), the authorization number 679941.",
                "zh-Hant":"TigerWit受英國金融行為監管局（FCA）的授權和監管，授權編號為：679941。",
                id:"TigerWit disahkan dan diawasi oleh Financial Conduct Authority (FCA) dengan nomor otorisasi 679941."
            }
        },
        partner:{
            becomePartner:{
                zh:"诚招合作伙伴",
                en:"Become a TigerWit partner today",
                vi:"Trở thành đối tác của TigerWit hôm nay",
                "zh-Hant":"誠招合作夥伴",
                id:"Bergabunglah menjadi mitra TigerWit sekarang"
            },
            becomePartner_1:{
                zh:"运用新的技术建立和推广一个成功的本地或全球品牌是我们的愿景，这需要TigerWit与您共同实现。成为我们的代理商，您可以获得TigerWit所有工具支持，同时享受多项优秀代理商扶持计划，轻松实现合作共赢、财富共享。与我们合作，利用您富余的资源创造意想不到的价值！",
                en:"With TigerWit, the success of our partners comes from developing long-term profitable relationships. We aim to bring a fresh technological approach to an industry in need of change that benefits both partners and traders. Our innovative ‘Distributed Ledger Technology’ can provide you with an unique and significant advantage over your competitors. TigerWit’s distributed trading ledger is just the first step. Visit tech.tigerwit.com for more information on our blockchain technology.",
                vi:"Với TigerWit, sự thành công của các đối tác của chúng tôi đến từ việc phát triển các mối quan hệ có lợi nhuận lâu dài. Chúng tôi mong muốn mang đến một phương pháp tiếp cận công nghệ mới cho một ngành công nghiệp có nhu cầu thay đổi mang lại lợi ích cho cả đối tác và thương nhân. Công nghệ Ledger phân phối sáng tạo của chúng tôi có thể cung cấp cho bạn một lợi thế độc đáo và đáng kể so với các đối thủ cạnh tranh của bạn. Sổ cái giao dịch phân phối của TigerWit chỉ là bước đầu tiên. Truy cập tech.tigerwit.com để biết thêm thông tin về công nghệ blockchain của chúng tôi.",
                "zh-Hant":"運用新的技術建立和推廣壹個成功的本地或全球品牌是我們的願景，這需要TigerWit與您共同實現。成為我們的代理商，您可以獲得TigerWit所有工具支持，同時享受多項優秀代理商扶持計劃，輕松實現合作共贏、財富共享。與我們合作，利用您富余的資源創造意想不到的價值！",
                id:"Kesuksesan dari seluruh mitra kami berasal dari hubungan yang saling percaya dan menguntungkan. Kami hadir disini untuk memberikan perubahan dengan membawa teknologi baru yang dapat membantu seluruh pihak baik mitra, trader maupun investor. Inovasi yang membedakan kami dari kompetitor lainnya bernama “Teknologi Distributed Trading Ledger”. Teknologi ‘Distributed Trading Ledger’ merupakan langkah pertama kami untuk membawa perubahan. Untuk informasi lebih lengkap mengenai teknologi blockchain kami, silahkan kunjungi situs kami di tech.tigerwit.com."
            },
            joinUs:{
                zh:"加入我们",
                en:"Join us",
                vi:"Tham gia với chúng tôi",
                "zh-Hant":"加入我們",
                id:"GABUNG SEKARANG"
            },
            whyPartner:{
                zh:"为什么选择我们？",
                en:"Why partner with TigerWit?",
                vi:"Tại sao hợp tác với TigerWit?",
                "zh-Hant":"為什麽選擇我們？",
                id:"Mengapa harus bermitra dengan TigerWit?"
            },
            whyPartner_1:{
                zh:"让TigerWit的专家为您提供量身定制的解决方案",
                en:"Looking to grow your business? Let TigerWit’s experts deliver a solution tailored to you.",
                vi:"Bạn đang tìm kiếm cơ hội phát triển sự nghiệp của bạn? Hãy để những chuyên gia của TigerWit mang đến giải pháp phù hợp với bạn.",
                "zh-Hant":"讓TigerWit的專家為您提供量身定制的解決方案",
                id:"Ingin mengembangkan bisnis anda?Para ahli di TigerWit siap memberikan solusi terbaik untuk anda."
            },
            supportPlan:{
                zh:"优秀代理商扶持计划",
                en:"Excellent agency support plan",
                vi:"Một đối tác xuất sắc để hỗ trợ kế hoạch của bạn",
                "zh-Hant":"優秀代理商扶持計劃",
                id:"Dukungan penuh"
            },
            supportPlan_1:{
                zh:"薪资支持、客户服务支持、激励支持、返佣支持、培训支持、公关支持等丰富的扶持成长体系，帮您快速成为专业代理人，实现人生小目标！",
                en:"Rich support and growth systems, such as salary support, customer service support, incentive support, commission return support, training support, and public relations support, help you quickly become a professional agent to achieve your life goals!",
                vi:"Các hệ thống hỗ trợ và tăng trưởng phong phú, như hỗ trợ tiền lương, hỗ trợ dịch vụ khách hàng, hỗ trợ khuyến khích, hỗ trợ hoa hồng, hỗ trợ đào tạo và hỗ trợ quan hệ công chúng, giúp bạn nhanh chóng trở thành một đại lý chuyên nghiệp để đạt được mục tiêu cuộc sống của bạn!",
                "zh-Hant":"薪資支持、客戶服務支持、激勵支持、返傭支持、培訓支持、公關支持等豐富的扶持成長體系，幫您快速成為專業代理人，實現人生小目標！",
                id:"Dengan memberikan dukungan dan sistem yang mumpuni, seperti fasilitas gaji, layanan pelanggan, insentif, komisi, rebate, pelatihan, dan lain sebagainya. Semua fasilitas tersebut diberikan agar anda dapat menjadi seorang agen yang profesional."
            },
            customerPromotionSystem:{
                zh:"客户推广系统",
                en:"Customer promotion system",
                vi:"Hệ thống khuyến mãi khách hàng",
                "zh-Hant":"客戶推廣系統",
                id:"Bahan promosi"
            },
            customerPromotionSystem_1:{
                zh:"节庆日宣传图、二维码及推广链接、汇评咨询推文等一键获取，满足您多种推广需求，简单快捷！",
                en:"Get designed promotion photo, QR code, promotion link, strategy comments, and tweets to meet your needs, simple and fast!",
                vi:"Hệ thống khuyến mãi của khách hàngNhận ảnh quảng cáo được thiết kế, mã QR, liên kết quảng cáo, nhận xét chiến lược và tweet để đáp ứng nhu cầu của bạn, đơn giản và nhanh chóng!",
                "zh-Hant":"節慶日宣傳圖、二維碼及推廣鏈接、匯評咨詢推文等壹鍵獲取，滿足您多種推廣需求，簡單快捷！",
                id:"Anda dapat mendapatkan konten dan materi promosi seperti foto, kode promosi, kode QR, strategi promosi, dan lain sebagainya sesuai dengan kebutuhan anda."
            },
            safeReliable:{
                zh:"安全可靠",
                en:"Safe and reliable",
                vi:"An toàn và đáng tin cậy",
                "zh-Hant":"安全可靠",
                id:"Aman dan Terpercaya"
            },
            safeReliable_1:{
                zh:"团队汇集了具有不同学术和应用背景的专业人士，分别在外汇交易、差价合约、监管合规性、投资管理、在线平台研发和全球营销等方面拥有丰富的经验，为您的资金保驾护航！",
                en:"With a strong technological core built upon a philosophy of transparency, credibility and integrity, TigerWit offers its clients exceptional capabilities to trade in the markets.",
                vi:"Với cốt lõi công nghệ mạnh mẽ được xây dựng dựa trên triết lý minh bạch, uy tín và toàn vẹn, TigerWit mang đến cho khách hàng những khả năng đặc biệt để giao dịch trên thị trường. Những người sáng lập của TigerWit là những cá nhân có kinh nghiệm với thành công và lịch sử lâu dài, mang đến một đội ngũ chuyên gia với nhiều nền tảng học thuật và ứng dụng đa dạng. và bán hàng & tiếp thị toàn cầu.",
                "zh-Hant":"團隊匯集了具有不同學術和應用背景的專業人士，分別在外匯交易、差價合約、監管合規性、投資管理、在線平臺研發和全球營銷等方面擁有豐富的經驗，為您的資金保駕護航！",
                id:"Dengan menggunakan teknologi yang kuat dan dirancang atas dasar keterbukaan, kredibilitas dan Integritas, TigerWIt menawarkan pengalaman transaksi di pasar dengan kemampuan yang berbeda dengan yang lainnya."
            },
            whatOffer:{
                zh:"我们提供什么？",
                en:"What do we offer?",
                vi:"Chúng tôi cung cấp những gì?",
                "zh-Hant":"我們提供什麽？",
                id:"Apa yang kami berikan?"
            },
            whatOffer_1:{
                zh:"获得所有的工具和支持，以建立和推广一个成功的本地或全球品牌",
                en:"Access to all the tools and support your business needs to build and market a successful local or global brand.",
                vi:"Truy cập vào tất cả các công cụ và hỗ trợ doanh nghiệp của bạn cần xây dựng và quảng bá cho một thương hiệu địa phương và toàn cầu thành công.",
                "zh-Hant":"獲得所有的工具和支持，以建立和推廣壹個成功的本地或全球品牌",
                id:"Anda akan mendapatkan semua dukungan untuk keperluan membangun bisnis anda dengan sukses."
            },
            offer_1:{
                zh:"区块链技术",
                en:"Innovative distributed trading ledger",
                vi:"Sổ cái giao dịch phân phối cải tiến",
                "zh-Hant":"區塊鏈技術",
                id:"Teknologi inovatif “Distributed Trading Ledger”"
            },
            offer_2:{
                zh:"复制跟单模式",
                en:"Copy-trading technology",
                vi:"Công nghệ sao chép giao dịch",
                "zh-Hant":"復制跟單模式",
                id:"Fitur Copy-Trading"
            },
            offer_3:{
                zh:"24/5客户及技术支持",
                en:"24/5 client and technology support",
                vi:"24 giờ trên 5 ngày hỗ trợ khách hàng và công nghệ",
                "zh-Hant":"24/5客戶及技術支持",
                id:"Dukungan klien dan layanan pelanggan 24/5"
            },
            offer_4:{
                zh:"智能便捷的交易APP",
                en:"An easy-to-use, highly intuitive mobile trading app",
                vi:"Ứng dụng giao dịch di động trực quan, dễ sử dụng",
                "zh-Hant":"智能便捷的交易APP",
                id:"Aplikasi yang mudah digunakan dan intuitif"
            },
            offer_5:{
                zh:"快速简易传播",
                en:"Competitive spreads",
                vi:"Spreads cạnh tranh",
                "zh-Hant":"快速簡易傳播",
                id:"Spread yang bersaing"
            },
            offer_6:{
                zh:"深度市场流动性",
                en:"Deep market liquidity",
                vi:"Thanh khoản thị trường sâu",
                "zh-Hant":"深度市場流動性",
                id:"Likuiditas pasar yang tinggi"
            },
            offer_7:{
                zh:"独家合作伙伴英超利物浦",
                en:"Exclusive promotions with our partner, Liverpool FC",
                vi:"Chương trình khuyến mãi độc quyền với đối tác của chúng tôi, Liverpool FC",
                "zh-Hant":"獨家合作夥伴英超利物浦",
                id:"Promosi eksklusif dengan mitra kami yaitu Liverpool FC"
            },
            offer_8:{
                zh:"直观数据报告",
                en:"Advanced reporting",
                vi:"Báo cáo nâng cao",
                "zh-Hant":"直觀數據報告",
                id:"Laporan yang lengkap"
            },
            offer_9:{
                zh:"FCA、SCB监管",
                en:"Regulation by FCA and SCB",
                vi:"Quy định của FCA và SCB",
                "zh-Hant":"FCA、SCB監管",
                id:"Terdaftar dan Teregulasi oleh FCA dan SCB"
            },
            becomePartnerFlow:{
                zh:"成为合作伙伴流程",
                en:"Become a partner",
                vi:"Trở thành đối tác ",
                "zh-Hant":"成為合作夥伴流程",
                id:"Menjadi Mitra"
            },
            signUpAccount:{
                zh:"注册账户",
                en:"Sign up for an account",
                vi:"Đăng ký một tài khoản",
                "zh-Hant":"註冊賬戶",
                id:"Daftarkan akun"
            },
            overProbationPeriod:{
                zh:"完成磨合期条件",
                en:"Over the probation period",
                vi:"Trong thời gian chạy thử",
                "zh-Hant":"完成磨合期條件",
                id:"Masa Percobaan"
            },
            endTrial:{
                zh:"磨合结束，成为代理",
                en:"End of trial, become an official agent",
                vi:"Kết thúc thời gian chạy thử, trở thành đại lý chính thức",
                "zh-Hant":"磨合結束，成為代理",
                id:"Telah melewati masa percobaan, jadi Mitra resmi"
            },
            becomePartnerFlow_1:{
                zh:"请填写以下表格，我们将联系您提供更多的信息和回答任何问题。",
                en:"Please complete the form below and we will be in touch to provide more information and answer any questions.",
                vi:"Vui lòng điền vào mẫu dưới đây và chúng tôi sẽ liên hệ để cung cấp thêm thông tin và trả lời bất kỳ câu hỏi nào.",
                "zh-Hant":"請填寫以下表格，我們將聯系您提供更多的信息和回答任何問題。",
                id:"Mohon lengkapi formulir dibawah ini. "
            },
            becomePartnerFlow_2:{
                zh:"我们期待着您的信息。",
                en:"We look forward to hearing from you.",
                vi:"Chúng tôi mong muốn được nghe từ bạn.",
                "zh-Hant":"我們期待著您的信息。",
                id:"Kami siap menjawab semua pertanyaan dan memberikan informasi yang lebih baik untuk anda."
            },
            name:{
                zh:"姓名",
                en:"Name",
                vi:"Tên",
                "zh-Hant":"姓名",
                id:"Nama"
            },
            country:{
                zh:"国家",
                en:"Country",
                vi:"Quốc gia",
                "zh-Hant":"國家",
                id:"Negara"
            },
            email:{
                zh:"邮箱",
                en:"Email",
                vi:"Thư điện tử",
                "zh-Hant":"郵箱",
                id:"Email"
            },
            phone:{
                zh:"手机号",
                en:"Phone",
                vi:"Số điện thoại",
                "zh-Hant":"手機號",
                id:"Telepon"
            },
            message:{
                zh:"备注信息（选填）",
                en:"Message(optional)",
                vi:"Tin nhắn (tùy chon)",
                "zh-Hant":"備註信息（選填）",
                id:"Pesan"
            },
            complusoryInformation:{
                zh:"以下信息中邮箱和手机号必选一项填写",
                en:"You should fill in one of email address or phone number as complusory information.",
                vi:"Bạn nên điền vào một trong các địa chỉ email hoặc số điện thoại như thông tin bắt buộc.",
                "zh-Hant":"以下信息中郵箱和手機號必選壹項填寫",
                id:"anda harus mengisi alamat email atau nomor telepon."
            },
            sendAgent:{
                zh:"申请代理",
                en:"Send",
                vi:"Gửi",
                "zh-Hant":"申請代理",
                id:"Kirim"
            }
        }
    };

    function replaceTiger(str) {
        return JSON.parse(
            JSON.stringify(str)
                .replace(/TigerWit/g, "TigerWit")
                .replace(/tigerwit/g, "TigerWit")
                .replace(/tigerWit/g, "TigerWit")
                .replace(/老虎外汇/g, "TigerWit")
                .replace(/老虎外匯/g, "TigerWit")
        )
    }

    // 处理faq相关字段
    var faq = replaceTiger(require('./mutilang/faq'))
    var liverpool = replaceTiger(require('./mutilang/liverpool'))
    var medianewsandcontact = replaceTiger(require('./mutilang/medianewsandcontact'))
    var tobeMaster = replaceTiger(require('./mutilang/tobeMaster'))
    var tradeFee = replaceTiger(require('./mutilang/tradeFee'))

    // console.log(faq)
    var mInvite = replaceTiger(require('./mutilang/mInvite'))
    var mRegister = replaceTiger(require('./mutilang/mRegister'))
    // 三方开户
    var mThird = require('./mutilang/third')
    // 注册协议 agment_mdl.html
    var agment = replaceTiger(require('./mutilang/agment'))
    // 首页新UI
    var home = replaceTiger(require('./mutilang/home'))
    //关于我们非中文
    var aboutus = replaceTiger(require('./mutilang/aboutus'))
    // third h5
    var thirdH5 = replaceTiger(require('./mutilang/thirdH5'))

    return _.merge(
        data,
        faq,
        liverpool,
        medianewsandcontact,
        tobeMaster,
        tradeFee,
        mInvite,
        mRegister,
        mThird,
        agment,
        home,
        aboutus,
        thirdH5
    );
}; 
