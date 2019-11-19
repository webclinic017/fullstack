;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = [];

    function langData() {

        var lang_data = {
            "productInfo": {
                "cfd": {
                    "EUSTX50": {
                        "en": "Also known as European blue chip index in Euro zone",
                        "zh": "也称欧洲绩优指数，欧元区蓝筹股股价指数",
                        "zh-Hant": "也稱歐洲績優指數，歐元區藍籌股股價指數",
                        "vi": "Còn được gọi là chỉ số chứng khoán blue chip châu Âu trong khu vực đồng Euro",
                        "id": "Juga dikenal dengan sebutan indeks blue chip Eropa di Zona Eropa",
                        "es": "También conocido como índice europeo blue chip en la zona euro",
                        "pt-BR": "Também conhecido como índice blue chip europeu na zona do euro",
                        "ar": "يعرف ايضا باسم مؤشر الاسهم الاوروبية بلو شيب في منطقة اليورو"
                    },
                    "GER30": {
                        "en": "Index of earnings obtained from 30 kinds of listed blue chip stock indexes in German.",
                        "zh": "德国30种法兰克福上市蓝筹股票指数经过算法后得出收益的指数",
                        "zh-Hant": "德國30種法蘭克福上市藍籌股票指數經過算法後得出收益的指數",
                        "vi": "Chỉ số lợi nhuận thu được từ 30 loại chỉ số chứng khoán blue chip niêm yết bằng tiếng Đức.",
                        "id": "Indeks pendapatan yang didapatkan dari 30 jenis indeks saham blue chip yang terdaftar di Jerman",
                        "es": "Índice de ganancias obtenidas de uma lista de 30 tipos de índices de acciones blue chip en Alemania",
                        "pt-BR": "Índice de lucros obtidos de uma lista de 30 tipos de índices de ações blue chip em Alemanha.",
                        "ar": "مؤشر الأرباح التي تم الحصول عليها من 30 نوعا من فهارس الأوراق المالية المدرجة في البورصة الألمانية"
                    },
                    "JPN225": {
                        "en": "Index of 225 stocks listed in Tokyo Stock Exchange",
                        "zh": "日经225只东京交易所上市股票指数",
                        "zh-Hant": "日經225只東京交易所上市股票指數",
                        "vi": "Chỉ số của 225 cổ phiếu niêm yết trên sàn giao dịch chứng khoán Tokyo",
                        "id": "Indeks dari 225 saham yang terdaftar di Bursa Saham Tokyo",
                        "es": "Índice de 225 acciones cotizadas en la Bolsa de Tokio",
                        "pt-BR": "Índice de 225 ações listadas na Bolsa de Valores de Tóquio",
                        "ar": "مؤشر 225 من الأسهم المدرجة في بورصة طوكيو"
                    },
                    "NAS100": {
                        "en": "Index based on tech stock",
                        "zh": "基于高科技股票的指数",
                        "zh-Hant": "基於高科技股票的指數",
                        "vi": "Chỉ số dựa trên cổ phiếu công nghệ",
                        "id": "Indeks berdasarkan harga saham di bidang teknologi",
                        "es": "Índice basado en acciones tecnológicas",
                        "pt-BR": "Índice baseado em ações tecnológicas",
                        "ar": "مؤشر يعتمد على اسهم التكنولوجيا"
                    },
                    "US30": {
                        "en": "Stock index of 30 major industrial enterprises of USA",
                        "zh": "美国30家主要工业公司构成的股票指数",
                        "zh-Hant": "美國30家主要工業公司構成的股票指數",
                        "vi": "Chỉ số chứng khoán của 30 doanh nghiệp công nghiệp lớn của Mỹ",
                        "id": "Indeks saham dari 30 jenis perusahaan industri terbesar di Amerika Serikat",
                        "es": "Índice de acciones de las 30 mayores empresas industriales de los Estados Unidos",
                        "pt-BR": "Índice de ações das 30 maiores empresas industriais dos EUA",
                        "ar": "مؤشر البورصة من 30 شركة صناعية كبرى في الولايات المتحدة الأمريكية"
                    },
                    "USA500": {
                        "en": "Stock index of 500 leading enterprises in USA",
                        "zh": "美国500家领军企业构成的股票指数",
                        "zh-Hant": "美國500家領軍企業構成的股票指數",
                        "vi": "Chỉ số chứng khoán của 500 doanh nghiệp hàng đầu tại Mỹ",
                        "id": "Indeks saham dari 500 perusahaan terbaik di Amerika Serikat",
                        "es": "Índice de acciones de las 500 empresas líderes en Estados Unidos.",
                        "pt-BR": "Índice de ações das 500 empresas líderes nos EUA",
                        "ar": "مؤشر البورصة من 500 شركة رائدة في الولايات المتحدة الأمريكية"
                    },
                    "HK50": {
                        "en": "Hang Seng Midcap 50 Index (HK50) is acquired from the weighted average of the market value of 50 largest enterprises listed in Hong Kong Stock Exchange. The index includes 60% market value and involves well-known enterprises, such as HSBC Group, China Construction Bank and China Mobile",
                        "zh": "香港恒生 50 指数（HK50）由香港股票交易所上市的 50 家最大的上市公司的市值加权而得。该指数囊括 60% 的市值并包含了赫赫有名的公司，诸如汇丰集团、中国建设银行和中国移动",
                        "zh-Hant": "香港恒生 50 指數（HK50）由香港股票交易所上市的 50 家最大的上市公司的市值加權而得。該指數囊括 60% 的市值並包含了赫赫有名的公司，諸如匯豐集團、中國建設銀行和中國移動",
                        "vi": "Chỉ số Hang Seng Midcap 50 (HK50) được lấy từ mức trung bình số của giá trị thị trường của 50 doanh nghiệp lớn nhất được niêm yết trên Sở Giao dịch Chứng khoán Hồng Kông. Chỉ số này bao gồm 60% giá trị thị trường và bao gồm các doanh nghiệp nổi tiếng như Tập đoàn HSBC, Ngân hàng Xây dựng Trung Quốc và China Mobile",
                        "id": "Indeks Midcap Hang Seng 50 (HK50) didapatkan dari nilai pasar rata-rata dari 50 jenis perusahaan terbesar yang terdaftar di Bursa Saham Hong Kong. Indeks tersebut menguasai 60% nilai pasar termasuk juga perusahaan-perusahaan besar yang terkenal seperti Grup HSBC, China Construction Bank dan China Mobile",
                        "es": "El índice Hang Seng Midcap 50 (HK50) se adquiere del promedio ponderado del valor de mercado de las 50 mayores empresas que cotizan en la Bolsa de Hong Kong. El índice incluye un valor de mercado del 60% e involucra a empresas conocidas, como el grupo HSBC, el Banco de Construcción de China y China Mobile ",
                        "pt-BR": "O índice Hang Seng Midcap 50 (HK50) é adquirido a partir da média ponderada do valor de mercado das 50 maiores empresas listadas na Bolsa de Valores de Hong Kong. O índice inclui 60% do valor de mercado e envolve empresas conhecidas, como o Grupo HSBC, o Banco de Construção da China e China Mobile ",
                        "ar": "يتم الحصول على مؤشر Hang Seng Midcap (HK50) من خلال  المتوسط ​​المرجح للقيمة السوقية لأكبر 50 شركة مدرجة في بورصة هونغ كونغ. ويشمل المؤشر 60٪ من القيمة السوقية ويشمل شركات معروفة ، مثل مجموعة HSBC,بنك الصين الاعمار و الصين للاتصالات"
                    }
                },
                "oil": {
                    "XNGUSD": {
                        "en": "Natural gas is a fuel representing an alternative energy source to oil and other traditional resources such as coal. As oil in particular becomes more expensive to access, natural gas is becoming an established source of ‘cleaner’ energy, currently providing around one third of the UK’s energy supply.",
                        "zh": "天然气是代表石油和其他传统资源（如煤炭）的替代能源的燃料。 由于石油特别昂贵，天然气正成为“清洁”能源的既定来源，目前提供约三分之一的英国能源供应。",
                        "zh-Hant": "天然氣是代表石油和其他傳統資源（如煤炭）的替代能源的燃料。 由於石油特別昂貴，天然氣正成為“清潔”能源的既定來源，目前提供約三分之壹的英國能源供應。",
                        "vi": "Khí tự nhiên là một loại nhiên liệu đại diên cho một nguồn năng lượng thay thế cho dầu mỏ và các nguồn tài nguyên truyền thống khác như than đá. Khi dầu đặc biệt trở nên đắt hơn để tiếp cận, khí tự nhiên đang trở thành nguồn năng lượng sạch hơn, hiện đang cung cấp khoảng 1/3 năng lượng của Vương Quốc Anh.",
                        "id": "Gas alam merupakan bahan bakar yang menjadi sumber energi alternatif selain minyak dan batu bara. Dimana minyak semakin lama semakin mahal untuk dijangkau, Gas alam menjadi pilihan yang tepat untuk membangun sumber energi yang lebih “bersih”. Gas alam menguasai 1/3 dari cadangan energi di Inggris",
                        "es": "El gas natural es un combustible que representa una fuente de energía alternativa al petróleo y otros recursos tradicionales como el carbón. A medida que el petróleo en particular se vuelve más caro de acceder, el gas natural se convierte en una fuente establecida de energía “más limpia”, que actualmente proporciona alrededor de un tercio de el suministro de energía del Reino Unido ",
                        "pt-BR": "O gás natural é um combustível que representa uma fonte alternativa de energia para o petróleo e outros recursos tradicionais, como o carvão. Como o petróleo se torna mais caro, o gás natural  se torna uma fonte estabelecida de energia “mais limpa”, fornecendo atualmente cerca de um terço da matriz energética do Reino Unido. ",
                        "ar": "الغاز الطبيعي هو الوقود الذي يمثل مصدرًا بديلاً للطاقة للنفط والموارد التقليدية الأخرى مثل الفحم. نظرًا لأن النفط على وجه الخصوص يصبح أكثر تكلفة للوصول اليه ، أصبح الغاز الطبيعي مصدرًا ثابتًا للطاقة\" النظيفة \"، التي توفر حاليًا حوالي ثلث إمدادات الطاقة في المملكة المتحدة"
                    },
                    "XTIUSD": {
                        "en": "US Oil, or Texas Light Sweet, is one of the two most important benchmarks used globally by investors to determine the value of a barrel of a particular grade of oil. US oil is considered ‘sweet’ crude as it has a lower concentration of sulphur than its North Sea equivalent. Our Oil CFD’s allow our clients to speculate on real time price movements determined by the effects of global supply and demand.",
                        "zh": "美国石油公司（Texas Light）或Texas Light Sweet公司是投资者在全球范围内用于确定特定等级石油价值的两个最重要的基准之一。 美国石油被认为是“甜”原油，因为它的硫浓度低于北海当量。 我们的石油差价合约允许我们的客户推测由全球供需影响决定的实时价格变动。",
                        "zh-Hant": "美國石油公司（Texas Light）或Texas Light Sweet公司是投資者在全球範圍內用於確定特定等級石油價值的兩個最重要的基準之壹。 美國石油被認為是“甜”原油，因為它的硫濃度低於北海當量。 我們的石油差價合約允許我們的客戶推測由全球供需影響決定的實時價格變動。",
                        "vi": "US Oil, hay Texas Light Sweer, là một trong hai tiêu chí quan trọng nhất được các nhà đầu tư sử dụng trên toàn cầu để xác định giá trị của một thùng dầu cấp đặc biệt. Dầu của Mỹ được coi là dầu thô “ngọt” vì nó có chứa hàm lượng lưu huỳnh thấp hơn so với tương đương với Biển Bắc. Dầu CFD của chúng tôi cho phép khách hàng của chúng tôi suy đoán về các biến động giá theo thời gian thực được xác định bởi ảnh hưởng của cung và cầu toàn cầu.",
                        "id": "Minyak AS, atau Texas Light Sweet, merupakan salah satu dari minyak dunia yang sangat penting dan para investor dunia menggunakannya sebagai pembanding harga dan kualitas minyak. Minyak AS ini disebut sebagai minyak mentah yang “manis” karena memiliki konsentrasi belerang yang lebih rendah dibandingkan dengan minyak North Sea (Laut Utara). Klien dapat melakukan transaksi, dimana pergerakan harga akan berjalan secara real-time pada produk CFD minyak kami. Pergerakan harga tersebut didasarkan pada efek penawaran dan permintaan dunia",
                        "es": "El petróleo estadounidense, o Texas Light Sweet, es uno de los dos puntos de referencia más importantes utilizados a nivel mundial por los inversores para determinar el valor de un barril de un tipo particular de petróleo. El petróleo estadounidense se considera crudo “dulce”, ya que tiene una menor concentración de azufre que su equivalente en el Mar del Norte. Nuestros CFD de petróleo permiten a nuestros clientes especular sobre los movimientos de precios en tiempo real determinados por los efectos de la oferta y la demanda global ",
                        "pt-BR": "O petróleo americano, ou o Texas Light Sweet, é um dos dois marcos mais importantes usados ​​mundialmente pelos investidores para determinar o valor de um barril de um tipo específico de petróleo. O petróleo dos EUA é considerado um petróleo cru “doce”, já que tem uma menor concentração de enxofre do que seu equivalente no Mar do Norte. Nossos CFDs de petróleo permitem que nossos clientes especulem sobre os movimentos de preços em tempo real determinados pelos efeitos da oferta e da demanda globais. ",
                        "ar": "النفط الأمريكي ، أو تكساس لايت سويت ، هو واحد من أهم معيارين يستخدمهما المستثمرون على مستوى العالم لتحديد قيمة برميل من فئة معينة من النفط. يعتبر النفط الأمريكي خامًا\" حلوًا \"حيث أن تركيزه أقل من الكبريت تفوق معادلته في بحر الشمال. تسمح العقود مقابل الفروقات النفطية الخاصة بنا لعملائنا بالمضاربة على تحركات الأسعار في الوقت الفعلي والتي تحددها تأثيرات العرض والطلب العالمي. "
                    },
                    "XBRUSD": {
                        "en": "North Sea Oil is the second important global benchmark for oil prices. This type of oil is mainly used to refine into diesel fuel and gasoline. Our CFD allows our clients to speculate on the price of this alternative benchmark to US Oil.",
                        "zh": "北海石油是全球第二个重要的油价基准。 这种类型的油主要用于精炼成柴油和汽油。 我们的差价合约允许我们的客户推测美国石油的替代基准价格。",
                        "zh-Hant": "北海石油是全球第二個重要的油價基準。 這種類型的油主要用於精煉成柴油和汽油。 我們的差價合約允許我們的客戶推測美國石油的替代基準價格。",
                        "vi": "Dầu biển Bắc là tiêu chuẩn quan trọng thứ hai toàn cầu về giá dầu. Loại dầu này chủ yếu được sử dụng để tinh chế thành nhiên liệu diesel và xăng. CFD của chúng tôi cho phép khách hàng của chúng tôi suy đoán về mức giá của tiêu chuẩn thay thế này đối với US Oil.",
                        "id": "Minyak North Sea (Laut Utara) adalah komoditas kedua terpenting di dunia, terutama dijadikan sebagai pembandingan harga minyak dunia. Tipe minyak ini banyak digunakan sebagai bahan bakar diesel atau bensin. Klien dapat melakukan transaksi pada produk CFD minyak kami sebagai alfternatif dari Minyak AS",
                        "es": "El petróleo del Mar del Norte es el segundo punto de referencia mundial importante para los precios del petróleo. Este tipo de petróleo se utiliza principalmente para refinarse en combustible diesel y gasolina. Nuestro CFD permite a nuestros clientes especular sobre el precio de este punto de referencia alternativo al petróleo de Estados Unidos",
                        "pt-BR": "O petróleo do Mar do Norte é a segunda maior referência mundial para os preços do petróleo. Esse tipo de óleo é usado principalmente para refinar-se em diesel ou em gasolina. Nosso CFD permite que nossos clientes especulem sobre o preço deste ponto de referência alternativo ao petróleo dos EUA ",
                        "ar": "يعتبر نفط بحر الشمال  ثاني مؤشر عالمي مهم لأسعار النفط. يستخدم هذا النوع من النفط بشكل أساسي للتكرير إلى وقود الديزل والبنزين. تسمح العقود مقابل الفروقات لعملائنا بالمضاربة على سعر هذا المؤشر البديل للنفط "
                    }
                }
            },
            "islamic_confirm": {
                "zh": "确认",
                "en": "Submit",
                "vi": "Gửi đi",
                "zh-Hant": "確認",
                "id": "Kirim",
                "es": "Enviar",
                "pt-BR": "Enviar",
                "ar": "إرسال"
            },
            "islamic_message1": {
                "zh": "伊斯兰体验金账户将使用与标准实时账户相同的点差、隔夜息、手续费。 您若想使用伊斯兰账户，需要开通真实伊斯兰账户进行无库存费交易。",
                "en": "Demo Islamic accounts use the same spreads, swaps and commissions as standard live accounts. You will need to open a live Islamic account for swap-free trading.",
                "vi": "Các tài khoản trải nghiệm Islamic sử dụng cùng mức spread, mức swap và hoa hồng như tiêu chuẩn của tài khoản thực. Bạn sẽ cần phải mở một tài khoản thực Islamic để giao dịch không mất phí swap.",
                "zh-Hant": "伊斯蘭體驗金賬戶將使用與標準實時賬戶相同的點差、隔夜息、手續費。 您若想使用伊斯蘭賬戶，需要開通真實伊斯蘭賬戶進行無庫存費交易。",
                "id": "Akun Islami Demo menggunakan spread, swap dan komisi yang sama seperti akun live standar. Untuk mendapatkan free-swap, anda dapat membuka akun islami live.",
                "es": "Las cuentas demo islámicas utilizan los mismos diferenciales, canjes y comisiones que las cuentas reales estándar. Deberá abrir una cuenta islámica en vivo para realizar transacciones sin swap.",
                "pt-BR": "As contas islâmicas de demonstração usam os mesmos spreads, swaps e comissões como contas ao vivo padrão. Você precisará abrir uma conta islâmica ao vivo para negociação sem swap.",
                "ar": "تستخدم الحسابات الإسلامية التجريبية نفس فروق الأسعار وفوائد التمديد والعمولات التي تستخدمها الحسابات القياسية الحقيقية. ستحتاج إلى فتح حساب إسلامي حقيقي حتى يمكنك الاستمتاع بالتداول الخالي من فوائد التمديد."
            },
            "islamic_message2": {
                "zh": "你有资格申请一个伊斯兰账户",
                "en": "You are eligible to apply for an Islamic account",
                "vi": "Bạn đủ điều kiện để đăng kí tài khoản Islamic.",
                "zh-Hant": "你有資格申請一個伊斯蘭賬戶",
                "id": "Anda dapat mengajukan aplikasi untuk mendapatkan akun Islami",
                "es": "Eres elegible para solicitar una cuenta islámica",
                "pt-BR": "Você é elegível para se candidatar a uma conta islâmica ",
                "ar": "أنت مؤهل لطلب حساب إسلامي."
            },
            "islamic_message3": {
                "zh": "TigerWit的伊斯兰账户支持有伊斯兰信仰的投资者。不收取隔夜费用，请参阅我们的",
                "en": "Traders of Islamic faith can take advantage of our TigerWit Islamic accounts. Trade swap-free on overnight positions. Time limits apply. Please see our ",
                "vi": "Nhà giao dịch Islamic có thể tận dụng tài khoản Islamic TigerWit của chúng tôi. Nhà giao dịch được giao dịch dịch miễn phí mức swap nhưng sẽ giới hạn thời gian áp dụng. Xin vui lòng xem các ",
                "zh-Hant": "TigerWit的伊斯蘭賬戶支持有伊斯蘭信仰的投資者。不收取隔夜費用，請參閱我們的",
                "id": "Untuk trader yang menganut agama Islam dapat memanfaatkan akun Islami TigerWit. Trader akan mendapatkan free-swap untuk posisi yang menginap. Silahkan lihat ",
                "es": "Los traders de divisas que profesen de la fe islámica , pueden aprovechar nuestras cuentas islámicas TigerWit. Trading libre de swaps en posiciones durante la noche. Se aplican límites de tiempo. Para mas información, por favor vea nuestros ",
                "pt-BR": "Os comerciantes da fé islâmica podem tirar proveito de nossas contas islâmicas TigerWit. Comércio livre de swap nas posições overnight. Os prazos são aplicáveis. Por favor, consulte nossos ",
                "ar": "يمكن للمتداولين المسلمين الاستفادة من حساب TigerWit الإسلامي. تداول بدون فوائد تمديد على المراكز التي يتم الاحتفاظ بها مفتوحة لليوم التالي. تسري الحدود الزمنية. يرجى الإطلاع على"
            },
            "islamic_message4": {
                "zh": "条款和条件",
                "en": "terms and conditions ",
                "vi": "điều khoản và điều kiện ",
                "zh-Hant": "條款和條件",
                "id": "syarat dan ketentuan ",
                "es": "términos y condiciones ",
                "pt-BR": "termos e condições ",
                "ar": "الشروط والأحكام "
            },
            "islamic_message4_1": {
                "zh": "。",
                "en": "for more information.",
                "vi": "của chúng tôi để biết thêm thông tin.",
                "zh-Hant": "。",
                "id": "lebih lanjut.",
                "es": ".",
                "pt-BR": "para mais informações.",
                "ar": "للحصول على المزيد من المعلومات"
            },
            "islamic_message5": {
                "zh": "你想继续申请伊斯兰账户吗?",
                "en": "Would you like to continue with the Islamic account application?",
                "vi": "Bạn có muốn tiếp tục đăng kí tài khoản Islamic? ",
                "zh-Hant": "你想繼續申請伊斯蘭賬戶嗎?",
                "id": "Apakah anda ingin melanjutkan aplikasi mendapatkan akun Islami?",
                "es": "¿Te gustaría continuar con la aplicación de la cuenta islámica? ",
                "pt-BR": "Você gostaria de continuar com o aplicativo de conta islâmica? ",
                "ar": "هل تريد الاستمرار في طلبك لحساب إسلامي؟"
            },
            "islamic_message6": {
                "zh": "是的",
                "en": "Yes",
                "vi": "Đồng ý",
                "zh-Hant": "是的",
                "id": "Ya",
                "es": "Sí",
                "pt-BR": "Sim",
                "ar": "نعم"
            },
            "islamic_message7": {
                "zh": "不",
                "en": "No",
                "vi": "Không",
                "zh-Hant": "不",
                "id": "Tidak",
                "es": "No",
                "pt-BR": "Não",
                "ar": "لا"
            },
            "islamic_message8": {
                "zh": "切换为伊斯兰账户",
                "en": "Request Islamic Account",
                "vi": "Yêu cầu tài khoản Islamic",
                "zh-Hant": "切換為伊斯蘭賬戶",
                "id": "Permintaan Akun Islami",
                "es": "equest Islamic Account",
                "pt-BR": "equest Islamic Account",
                "ar": "طلب حساب إسلامي"
            },
            "islamic_message9": {
                "zh": "切换为标准账户",
                "en": "Request Standard Account",
                "vi": "Yêu cầu tài khoản tiêu chuẩn",
                "zh-Hant": "切換為標準賬戶",
                "id": "Permintaan Akun Standar",
                "es": "Request Standard Account",
                "pt-BR": "Request Standard Account",
                "ar": "طلب حساب Standard"
            },
            "islamic_message10": {
                "zh": "申请伊斯兰账户",
                "en": "Apply for Islamic account",
                "vi": "Áp dụng cho tài khoản Islamic",
                "zh-Hant": "申請伊斯蘭賬戶",
                "id": "Dapatkan Akun Islami",
                "es": "Solicitar una cuenta islámica",
                "pt-BR": "Candidate-se a conta islâmica",
                "ar": "اطلب حساب إسلامي"
            },
            "islamic_message11": {
                "zh": "伊斯兰账户条款：",
                "en": "Conditions of an Islamic account.",
                "vi": "Các điều kiện của một tài khoản Islamic.",
                "zh-Hant": "伊斯蘭賬戶條款：",
                "id": "Ketentuan untuk Akun Islami",
                "es": "Condiciones de una cuenta islámica.",
                "pt-BR": "Condições de uma conta islâmica.",
                "ar": "شروط الحساب الإسلامي"
            },
            "islamic_message13": {
                "zh": "· 10天内不收取账户管理费；",
                "en": "· Swap free trading for 10 days",
                "vi": "· Giao dịch miễn phí mức swap trong vòng 10 ngày",
                "zh-Hant": "· 10天內不收取賬戶管理費；",
                "id": "· Free Swap selama 10 hari",
                "es": "· Intercambio comercial libre por 10 días",
                "pt-BR": "· Troca livre de negociação por 10 dias",
                "ar": "تداول خال من فوائد التمديد لمدة 10 أيام"
            },
            "islamic_message14": {
                "zh": "· 没有附加费用；",
                "en": "· No additional charges",
                "vi": "· Không tính thêm phí",
                "zh-Hant": "· 沒有附加費用；",
                "id": "· Tidak ada biaya tambahan",
                "es": "· Sin cargos adicionales",
                "pt-BR": "· Sem custos adicionais",
                "ar": "بدون تكاليف إضافية"
            },
            "islamic_message15": {
                "zh": "· 享受伊斯兰高手跟单；",
                "en": "· Islamic Copy Trading",
                "vi": "· Sao Chép Giao Dịch Islamic",
                "zh-Hant": "· 享受伊斯蘭高手跟單；",
                "id": "· Copy Trading Islami",
                "es": "· Comercio de copias islámicas",
                "pt-BR": "· Comércio de cópia islâmica",
                "ar": "تداول بنسخ الصفقات مطابق للشريعة الإسلامية"
            },
            "islamic_message16": {
                "zh": "· 所有子账号都可转换成伊斯兰账户 ",
                "en": "· All sub accounts will be converted to Islamic",
                "vi": "· Tất cả các tài khoản phụ sẽ được chuyển đổi sang Islamic",
                "zh-Hant": "· 所有子賬號都可轉換成伊斯z蘭賬戶",
                "id": "· Semua akun tambahan akan berubah menjadi Akun Islami",
                "es": "· Todas las subcuentas serán convertidas al islámico.",
                "pt-BR": "· Todas as subcontas serão convertidas em islâmicas",
                "ar": "جميع الحسابات الفرعية سيتم تحويلها إلى حسابات إسلامية"
            },
            "islamic_message17": {
                "zh": "条款摘要",
                "en": "Terms & Conditions Summary",
                "vi": "Tóm tắt các Điều khoản & Điều kiện",
                "zh-Hant": "條款摘要",
                "id": "Ringkasan Syarat & Ketentuan",
                "es": "Resumen de términos y condiciones",
                "pt-BR": "Resumo dos Termos e Condições",
                "ar": "ملخص الشروط والأحكام"
            },
            "islamic_message18": {
                "zh": "除了TigerWit条件和条款（包括商业条件和条款）适用于您的TigerWit交易账户外，还有以下条件适用：",
                "en": "In addition to the TigerWit Conditions and Clauses, including the Terms and Conditions of Business, which apply to your TigerWit trading account the following conditions will apply:",
                "vi": "Ngoài các Điều khoản và Điều kiện của TigerWit, bao gồm các Điều khoản và Điều kiện kinh doanh, áp dụng cho tài khoản giao dịch TigerWit của bạn, các điều kiện sau cũng sẽ được áp dụng:",
                "zh-Hant": "除了TigerWit條件和條款（包括商業條件和條款）適用於您的TigerWit交易賬戶外，還有以下條件適用：",
                "id": "Syarat dan Ketentuan ini merupakan tambahan kebijakan dari dokumen ketentuan dan klausul TigerWit, serta pada syarat dan ketentuan bisnis. Syarat dan ketentuan berlaku untuk akun transaksi TigerWit yaitu :",
                "es": "Además de las Condiciones y cláusulas de TigerWit, incluidos los Términos y Condiciones de Negocio, que se aplican a su cuenta de operaciones TigerWit, se aplicarán las siguientes condiciones:",
                "pt-BR": "Além das Condições e Cláusulas TigerWit, incluindo os Termos e Condições de Negócios, que se aplicam à sua conta de negociação TigerWit, as seguintes condições serão aplicadas:",
                "ar": "بالإضافة إلى شروط وأحكام شركة TigerWit، بما في ذلك شروط وأحكام العمل، والتي تسري على حساب التداول الخاص بك مع TigerWit، سوف تسري الشروط التالية:"
            },
            "islamic_message19": {
                "zh": "开仓后前十日无需支付隔夜息，展期费和佣金；",
                "en": "No swap charges, rollover fees or commissions will be applied to each new position for the first 10 days that the position is open.",
                "vi": "Không mất phí qua đêm, phí gia hạn lệnh hoặc hoa hồng. Chính sách này sẽ được áp dụng cho từng lệnh mới trong 10 ngày đầu tiên kể từ khi lệnh này được mở.",
                "zh-Hant": "開倉後前十日無需支付隔夜息，展期費和佣金；",
                "id": "Setiap posisi baru selama 10 hari sejak posisi dibuka tidak akan dikenakan biaya swap, biaya menginap ataupun komisi.",
                "es": "No se aplicarán cargos de swap, cargos por transferencia o cargos diarios a cada nueva posición durante los primeros 10 días que la posición esté abierta.",
                "pt-BR": "Não serão aplicadas taxas de swap, taxas de rollover ou comissões a cada nova posição nos primeiros 10 dias em que a posição estiver aberta.",
                "ar": "سوف يسري عدم وجود تكاليف تمديد أو رسوم تبييت أو عمولات على كل مركز جديد على أول 10 أيام يكون فيها المركز مفتوحًا."
            },
            "islamic_message20": {
                "zh": "若十日之后继续持仓，TigerWit将会就持仓单收取账户管理费直到平仓。对于每笔订单，如果您是全部持仓，将收取每笔订单的全额每日管理费；如果是部分持仓，将收取部分开仓的管理费。请参阅费用标准：",
                "en": "If the position remains open after 10 days, a daily administration fee will be applied by TigerWit until the position is closed. The administration fee will apply in full for each day or part thereof that a position remains open. Please see our fee’s below:",
                "vi": "Nếu lệnh vẫn mở sau 10 ngày, phí quản lí hàng ngày sẽ được TigerWit áp dụng cho đến khi lệnh này bị đóng. Phí này sẽ được áp dụng mỗi ngày hoặc trong thời gian mà lệnh vẫn mở. Xin vui lòng xem mức phí của chúng tôi dưới đây: ",
                "zh-Hant": "若十日之後繼續持倉，TigerWit將會就持倉單收取賬戶管理費直到平倉。對於每筆訂單，如果您是全部持倉，將收取每筆訂單的全額每日管理費；如果是部分持倉，將收取部分開倉的管理費。請參閱費用標準：",
                "id": "Apabila posisi terbuka telah melewati jangka waktu 10 hari, maka akan dikenakan biaya administrasi harian oleh TigerWit hingga posisi ditutup. Biaya administrasi akan berlaku setiap ataupun setengah hari. Berikut adalah biaya yang akan dibebankan setelah sepuluh hari :",
                "es": "Si la posición permanece abierta después de 10 días, TigerWit aplicará una tarifa de administración diaria de $ 25 por lote hasta que se cierre la posición. La tarifa de administración se aplicará en su totalidad por cada día o parte del mismo que una posición permanezca abierta.",
                "pt-BR": "Se a posição permanecer aberta após 10 dias, uma taxa de administração diária será aplicada pela TigerWit até que a posição seja fechada. A taxa de administração será aplicada integralmente para cada dia ou parte do mesmo que uma posição permanecer aberta. Por favor, veja nossa taxa abaixo:",
                "ar": "إذا ظل المركز مفتوحًا بعد مرور مدة 10 أيام، ستقوم TigerWit بتطبيق رسوم إدارية يوميًا إلى حين يتم إغلاق المركز. سيتم تطبيق الرسوم الإدارية بشكل كامل عن كل يوم أو أي جزء منه يظل فيه المركز مفتوحًا. يرجى الإطلاع على رسومنا أدناه:"
            },
            "islamic_message21": {
                "zh": "外汇、贵金属、能源、加密货币：每自然日每标准手收取$25；",
                "en": "Fx, Metals & Crypto’s: $25 per lot, per day.",
                "vi": "Fx, Kim loại & Tiền điện tử: 25USD/lot mỗi ngày.",
                "zh-Hant": "外匯、貴金屬、能源、加密貨幣：每自然日每標準手收取$25；",
                "id": "FX, Logam Mulia & Crypto: $ 25 per lot, per hari.",
                "es": " ",
                "pt-BR": "Fx, Metals & Crypto’s: $ 25 por lote, por dia.",
                "ar": "الفوركس والمعادن والعملات الرقمية المشفرة: 25 دولار لكل عقد في اليوم الواحد"
            },
            "islamic_message22": {
                "zh": "差价合约：每自然日每标准手$5。",
                "en": "Indices: $5 per lot, per day. ",
                "vi": "Chỉ số: 5USD/lot mỗi ngày.",
                "zh-Hant": "差價合約：每自然日每標準手$5。",
                "id": "Indeks Saham: $ 5 per lot, per hari.",
                "es": " ",
                "pt-BR": "Índices: US $ 5 por lote, por dia.",
                "ar": "المؤشرات: 5 دولار لكل عقد في اليوم الواحد"
            },
            "islamic_message23": {
                "zh": "任何现有TigerWit账户都可以切换为伊斯兰账户，若要转换账户类型，需达到以下条件：",
                "en": "Any existing TigerWit accounts will be converted to an Islamic account at the time that the new TigerWit Islamic account is open. As part of the conversion, all positions will be closed at the next available price for the relevant instrument(s), all funds will be moved to the Wallet and all existing copy trading arrangements will cease.",
                "vi": "Mọi tài khoản TigerWit hiện tại sẽ được chuyển đổi thành tài khoản Islamic ngay khi tài khoản Islamic TigerWit được mở. Vì là một phần của chuyển đổi, tất cả các lệnh sẽ được đóng ở mức giá khả dụng tiếp theo cho (các) sản phẩm có liên quan, tất cả tiền sẽ được chuyển sang Ví và tất cả các lệnh giao dịch sao chép hiện tại sẽ chấm dứt. ",
                "zh-Hant": "任何現有TigerWit賬戶都可以切換為伊斯蘭賬戶，若要轉換賬戶類型，需達到以下條件：",
                "id": "Setiap akun TigerWit yang ada akan dikonversikan ke dalam bentuk Akun Islami pada saat akun Islami TigerWit dibuka. Akibatnya, semua posisi akan ditutup pada harga instrumen masing-masing, semua dana akan dipindahkan ke Wallet dan semua transaksi copy yang ada akan dihentikan.",
                "es": "Todas las cuentas de TigerWit existentes se convertirán en una cuenta islámica en el momento en que la nueva cuenta de TigerWit Islamica esté abierta. No será posible revertir ninguna de estas cuentas a un formato de cuenta no islámico. Como parte de la conversión, todas las posiciones se cerrarán al siguiente precio disponible para el (los) instrumento (s) correspondiente (s), todos los fondos se transferirán a la Cartera y todos los acuerdos existentes de comercio tímido cesarán. ",
                "pt-BR": "Quaisquer contas TigerWit existentes serão convertidas em uma conta islâmica no momento em que a nova conta islâmica TigerWit for aberta. Como parte da conversão, todas as posições serão fechadas no próximo preço disponível para o (s) instrumento (s) relevante (s), todos os fundos serão movidos para a Wallet e todos os copy tradings existentes cessarão. ",
                "ar": "سيتم تحويل أي حسابات حالية مع TigerWit إلى حسابات إسلامية في الوقت الذي يكون فيه الحساب الإسلامي الجديد مع TigerWit مفتوحًا. كجزء من التحويل، سيتم إغلاق جميع المراكز وفقًا للسعر التالي المتاح بالنسبة للأداة (الأدوات) المالية ذات الصلة، وسيتم تحويل جميع الأموال إلى المحفظة وسيتم إيقاف جميع الترتيبات الحالية للتداول بنسخ الصفقات."
            },
            "islamic_message24": {
                "zh": "所有持仓单必须全部平仓；",
                "en": " ",
                "vi": " ",
                "zh-Hant": "所有持倉單必須全部平倉；",
                "id": " ",
                "es": " ",
                "pt-BR": " ",
                "ar": " "
            },
            "islamic_message25": {
                "zh": "所有跟随关系必须全部取消；",
                "en": " ",
                "vi": " ",
                "zh-Hant": "所有跟隨關係必須全部取消；",
                "id": " ",
                "es": " ",
                "pt-BR": " ",
                "ar": " "
            },
            "islamic_message26": {
                "zh": "所有子账户资金必须转移到钱包中",
                "en": " ",
                "vi": " ",
                "zh-Hant": "所有子賬戶資金必須轉移到錢包中",
                "id": " ",
                "es": " ",
                "pt-BR": " ",
                "ar": " "
            },
            "islamic_message27": {
                "zh": "关于跟单交易，伊斯兰账户只可以跟随伊斯兰账户高手。",
                "en": "In relation to copy trading, an Islamic account holder may only follow a Master account which also operates under the TigerWit Islamic account structure.",
                "vi": "Về giao dịch sao chép, chủ tài khoản Islamic chỉ có thể theo tài khoản của các Bậc thầy hoạt động theo cùng cấu trúc tài khoản Islamic TigerWit.",
                "zh-Hant": "關於跟單交易，伊斯蘭賬戶只可以跟隨伊斯蘭賬戶高手。",
                "id": "Sehubungan dengan copy trading, pemegang akun Islami hanya dapat mengikuti akun Master yang menggunakan akun Islami TigerWit.",
                "es": "En relación con el copy trading, el titular de una cuenta islámica solo puede seguir una cuenta maestra que también opera bajo la estructura de cuenta TigerWit Islamic. ",
                "pt-BR": "Em relação ao copy trading, um titular de conta islâmica só pode seguir uma conta principal que também opera sob a estrutura de conta islâmica do TigerWit. ",
                "ar": "فيما يتعلق بالتداول بنسخ الصفقات، لا يجوز لصاحب الحساب الإسلامي إتباع حسابات الأساتذة باستثناء حسابات الأساتذة التي تعمل تحت هيكل حسابات TigerWit الإسلامية."
            },
            "islamic_message28": {
                "zh": "我已阅读并接受伊斯兰账户的条件和条款。",
                "en": "I have read and accept the tßerms and conditions of an Islamic account",
                "vi": "Tôi đã đọc và chấp nhận các điều khoản và điều kiện của tài khoản Islamic",
                "zh-Hant": "我已閱讀並接受伊斯蘭賬戶的條件和條款。",
                "id": "Saya telah membaca dan menyetujui syarat dan ketentuan untuk Akun Islami",
                "es": "He leído y acepto los términos y condiciones de una cuenta islámica",
                "pt-BR": "Li e aceito os termos e condições de uma conta islâmica",
                "ar": "قد قرأت وأقبل شروط وأحكام الحساب الإسلامي."
            },
            "islamic_message29": {
                "zh": "申请伊斯兰账户",
                "en": "Apply",
                "vi": "Áp dụng",
                "zh-Hant": "申請伊斯蘭賬戶",
                "id": "Lanjutkan",
                "es": "Aplicar",
                "pt-BR": "Aplique",
                "ar": "تطبيق"
            },
            "islamic_message30": {
                "zh": "不，我想要标准账户",
                "en": "No I would like a standard account",
                "vi": "Không, tôi muốn có một tài khoản tiêu chuẩn",
                "zh-Hant": "不，我想要標準賬戶",
                "id": "Tidak, saya ingin menggunakan akun standar",
                "es": "No me gustaría una cuenta estándar",
                "pt-BR": "Não, eu gostaria de uma conta padrão",
                "ar": "لا، أنا أريد حساب Standard"
            },
            "islamic_message31": {
                "zh": "您当前的账户类型是【伊斯兰账户】，一旦您切换回标准账户, 您将无法重新激活您的伊斯兰账户类型。",
                "en": "Your current account type is [Islamic]. Once you convert to a back to a standard account, you will not be able to reactivate your Islamic account type again.",
                "vi": "Loại tài khoản hiện tại của bạn là [Islamic]. Một khi bạn chuyển đổi trở lại tài khoản chuẩn ban đầu, bạn sẽ không thể kích hoạt lại loại tài khoản Islamic của mình.",
                "zh-Hant": "您當前的賬戶類型是【伊斯蘭賬戶】，一旦您切換回標準賬戶, 您將無法重新激活您的伊斯蘭賬戶類型。",
                "id": "Akun anda saat ini adalah (Islami). Apabila anda merubah akun anda menjadi Akun Standar, maka anda tidak dapat lagi mengaktifkan kembali akun islami anda.",
                "es": "Su tipo de cuenta actual es [Islámico]. Una vez que realice la conversión a una cuenta estándar, no podrá reactivar su tipo de cuenta Islámica nuevamente. ",
                "pt-BR": "Seu tipo de conta atual é [islâmico]. Depois de converter para uma conta padrão, você não poderá reativar seu tipo de conta islâmica novamente. ",
                "ar": "نوع حسابك الحالي هو [إسلامي]. بمجرد أن تقوم بالتحويل مرة أخرى إلى الحساب من نوع Standard، لن يكون بمقدورك إعادة تنشيط حسابك الإسلامي مرة أخرى."
            },
            "islamic_message32": {
                "zh": "您当前的账户类型是【标准】，如果您切换为伊斯兰账户，您将享受在伊斯兰交易条件下的权益。",
                "en": "Your current account type is [Standard]. If you convert to an Islamic account, you will be able to enjoy the benefits of swap-free trading under Islamic trading conditions.",
                "vi": "Loại tài khoản hiện tại của bạn là [Tiêu chuẩn]. Nếu bạn chuyển đổi sang tài khoản Islamic, bạn sẽ có cơ hội giao dịch mà không mất phí Swap trong điều kiện giao dịch Islamic.",
                "zh-Hant": "您當前的賬戶類型是【標準】，如果您切換為伊斯蘭賬戶，您將享受在伊斯蘭交易條件下的權益。",
                "id": "Akun anda saat ini adalah (Standar). Apabila anda merubah akun anda menjadi Akun Islami, maka anda tidak dapat lagi menikmati free-swap. ",
                "es": "Su tipo de cuenta actual es [Estándar]. Si se convierte a una cuenta islámica, podrá disfrutar de los beneficios del intercambio sin swap bajo las condiciones comerciales islámicas. ",
                "pt-BR": "Seu tipo de conta atual é [Padrão]. Se você converter para uma conta islâmica, poderá aproveitar os benefícios do comércio livre de swap sob condições comerciais islâmicas.",
                "ar": "نوع حسابك الحالي هو [Standard]. إذا قمت بالتحويل إلى حساب إسلامي، سيكون بمقدورك الاستمتاع بمزايا التداول الخالي من فوائد التمديد بموجب شروط التداول الإسلامي."
            },
            "islamic_message33": {
                "zh": "您确定要继续吗?",
                "en": "Are you sure you would like to continue?",
                "vi": "Bạn có chắc chắn muốn tiếp tục không? ",
                "zh-Hant": "您確定要繼續嗎？",
                "id": "Apakah anda yakin ingin tetap melanjutkan? ",
                "es": "¿Está seguro de que desea continuar? ",
                "pt-BR": "Tem certeza de que gostaria de continuar?",
                "ar": "هل أنت متأكد من أنك تريد الاستمرار؟"
            },
            "_comment_data": {
                "en": "this is comments, No translation required -- angularjs",
                "zh": "",
                "zh-Hant": "",
                "vi": "",
                "id": "",
                "es": "",
                "pt-BR": "this is comments, No translation required -- angularjs",
                "ar": "this is comments, No translation required -- angularjs"
            },
            "china": {
                "zh": "中国",
                "en": "China",
                "vi": "Trung Quốc",
                "zh-Hant": "中國",
                "id": "China",
                "es": "China",
                "pt-BR": "China",
                "ar": "الصين"
            },
            "footlang": {
                "zh": "简体中文",
                "en": "English",
                "vi": "Tiếng Việt",
                "zh-Hant": "繁體中文",
                "id": "Indonesia",
                "es": "Español",
                "pt-BR": "Português",
                "ar": "العربية"
            },
            "fuzhirenshu": {
                "en": "Copiers",
                "zh": "复制人数",
                "vi": "Người sao chép",
                "zh-Hant": "復制人數",
                "id": "Pengikut",
                "es": "Copiers",
                "pt-BR": "Copiadoras",
                "ar": "المتابعون"
            },
            "password": {
                "en": "Password",
                "zh": "密码",
                "vi": "Mật Khẩu",
                "zh-Hant": "密碼",
                "id": "Kata Sandi",
                "es": "Contraseña",
                "pt-BR": "Senha",
                "ar": "كلمة المرور"
            },
            "username": {
                "en": "Username",
                "zh": "昵称",
                "vi": "Tên Người dùng",
                "zh-Hant": "昵稱",
                "id": "Nama Pengguna",
                "es": "Nombre usuario",
                "pt-BR": "Username",
                "ar": "اسم المستخدم"
            },
            "phone": {
                "en": "Phone",
                "zh": "手机号码",
                "vi": "Số điện thoại",
                "zh-Hant": "手機號碼",
                "id": "Telepon",
                "es": "Teléfono",
                "pt-BR": "telefone",
                "ar": "الهاتف"
            },
            "email": {
                "en": "E-mail",
                "zh": "电子邮箱",
                "vi": "Thư điện tử",
                "zh-Hant": "電子郵箱",
                "id": "E-mail",
                "es": "E-mail",
                "pt-BR": "E-mail",
                "ar": "البريد الإلكتروني"
            },
            "verifycode": {
                "en": "Verification code",
                "zh": "验证码",
                "vi": "Mã xác nhận",
                "zh-Hant": "驗證碼",
                "id": "Kode Verifikasi",
                "es": "Código verificación",
                "pt-BR": "Código de verificação",
                "ar": "رمز التحقق"
            },
            "register6": {
                "en": "Obtain verification code",
                "zh": "获取验证码",
                "vi": "Nhận Mã xác nhận",
                "zh-Hant": "獲取驗證碼",
                "id": "Dapatkan Kode verifikasi",
                "es": "Obtener Cód. Verificación",
                "pt-BR": "Obter o código de verificação",
                "ar": "احصل على رمز التحقق"
            },
            "register8": {
                "en": "Please enter phone number",
                "zh": "请输入手机号",
                "vi": "Vui lòng nhập số điện thoại",
                "zh-Hant": "請輸入手機號",
                "id": "Silahkan masukkan nomor telepon",
                "es": "Por favor, introduzca número de teléfono",
                "pt-BR": "Por favor insira o número de telefone",
                "ar": "يرجى إدخال رقم الهاتف"
            },
            "register9": {
                "en": "Please enter the verification code",
                "zh": "请输入验证码",
                "vi": "Vui lòng nhập mã xác nhận",
                "zh-Hant": "請輸入驗證碼",
                "id": "Silahkan masukkan kode verifikasi",
                "es": "Por favor, introduzca código verificación",
                "pt-BR": "Por favor, insira o código de verificação",
                "ar": "يرجى إدخال رمز التحقق"
            },
            "register11": {
                "en": "Please enter password",
                "zh": "请输入密码",
                "vi": "Vui lòng nhập mật khẩu",
                "zh-Hant": "請輸入密碼",
                "id": "Silahkan masukkan kata sandi",
                "es": "Por favor, introduzca contraseña",
                "pt-BR": "Por favor insira a senha",
                "ar": "يرجى إدخال كلمة المرور"
            },
            "register13": {
                "en": "Registration means that you have agreed the relevant regulations",
                "zh": "注册即同意",
                "vi": "Đăng ký có nghĩa rằng bạn đã đồng ý với những quy định liên quan ",
                "zh-Hant": "註冊即同意",
                "id": "Dengan mendaftar artinya anda telah menyetujui syarat dan ketentuan yang berlaku ",
                "es": "Registro significa ha aceptado las regulaciones relevantes",
                "pt-BR": "Registro significa que você concordou com os regulamentos relevantes",
                "ar": "يعني التسجيل أنك قد وافقت على القواعد التنظيمية ذات الصلة"
            },
            "register14": {
                "en": "Risk Disclosure Statement",
                "zh": "风险披露书",
                "vi": "Tuyên Bố Tiết Lộ Rủi Ro",
                "zh-Hant": "風險披露書",
                "id": "Peringatan Resiko",
                "es": "Declaración Divulgación Riesgo",
                "pt-BR": "Declaração de Divulgação de Risco",
                "ar": "بيان الإفصاح عن المخاطر"
            },
            "register15": {
                "en": "Declaration by Client",
                "zh": "客户声明",
                "vi": "Tuyên Bố Của Khách Hàng",
                "zh-Hant": "客戶聲明",
                "id": "Penyataan Klien",
                "es": "Declaración Cliente",
                "pt-BR": "Declaração do Cliente",
                "ar": "إقرار  من العميل"
            },
            "register16": {
                "en": "Trading Notes for Users",
                "zh": "用户交易须知",
                "vi": "Sổ Tay Giao Dịch Của Người Dùng",
                "zh-Hant": "用戶交易須知",
                "id": "Catatan trading untuk Pengguna",
                "es": "Notas Trading para Usuarios",
                "pt-BR": "Notas de Negociação para Usuários",
                "ar": "ملاحظات عن المتداول للمستخدمين"
            },
            "register20": {
                "en": "Register now to receive $200",
                "zh": "立即注册 领取$1000",
                "vi": "Đăng ký ngay để nhận 200 đô la",
                "zh-Hant": "立即註冊 領取$1000",
                "id": "Daftar sekarang dan dapatkan 200 $",
                "es": "Regístrese ahora y reciba $200",
                "pt-BR": "Registre-se agora para receber US $ 200",
                "ar": "سجل الآن لتحصل على 200 دولار"
            },
            "register18": {
                "en": "Registered?",
                "zh": "已有账户？",
                "vi": "Bạn đã đăng ký?",
                "zh-Hant": "已有賬戶？",
                "id": "Daftar?",
                "es": "¿Registrado?",
                "pt-BR": "Registrado?",
                "ar": "هل سجلت بالفعل؟"
            },
            "register19": {
                "en": "Log in now",
                "zh": "立即登录",
                "vi": "Đăng nhập ngay",
                "zh-Hant": "立即登錄",
                "id": "Masuk",
                "es": "Ingresar ahora",
                "pt-BR": "Conecte-se agora",
                "ar": "تسجيل الدخول الآن"
            },
            "traderSummary15": {
                "en": "No Data",
                "zh": "无数据",
                "vi": "Không dữ liệu",
                "zh-Hant": "無數據",
                "id": "Data tidak tersedia",
                "es": "No Data",
                "pt-BR": "sem dados",
                "ar": "ليس هناك بيانات"
            },
            "HoldingTrades1": {
                "en": "Operation",
                "zh": "操作",
                "vi": "Hoạt động",
                "zh-Hant": "操作",
                "id": "Transaksi",
                "es": "Operación",
                "pt-BR": "Operação",
                "ar": "العملية"
            },
            "HoldingTrades9": {
                "en": "No Data",
                "zh": "无数据",
                "vi": "Không dữ liệu",
                "zh-Hant": "無數據",
                "id": "Data tidak tersedia",
                "es": "No Data",
                "pt-BR": "sem dados",
                "ar": "ليس هناك بيانات"
            },
            "HoldingTrades10": {
                "en": "Note：Trades won't be shown here before 7 days.",
                "zh": "注：当前交易仅显示高手最近一周持仓订单。",
                "vi": "Lưu ý: Những giao dịch sẽ không được hiển thị trước 7 ngày.",
                "zh-Hant": "註：當前交易僅顯示高手最近壹周持倉訂單。",
                "id": "Catatan: Transaksi tidak akan ditampilkan sebelum 7 hari",
                "es": "Nota：Los Trades no se mostrarán aquí antes de 7 días.",
                "pt-BR": "Nota: As negociações não serão exibidas aqui antes de 7 dias.",
                "ar": "ملحوظة: لن يتم عرض المتداولين هنا قبل 7 أيام"
            },
            "actLogin1": {
                "zh": "快捷登录",
                "en": "Fast Login",
                "vi": "Đăng nhập nhanh",
                "zh-Hant": "快捷登錄",
                "id": "Masuk",
                "es": "Ingreso rápido",
                "pt-BR": "Login rápido",
                "ar": "تسجيل دخول سريع"
            },
            "actLogin2": {
                "zh": "账号密码登录",
                "en": "Password Login",
                "vi": "Mật khẩu đăng nhập",
                "zh-Hant": "賬號密碼登錄",
                "id": "Kata sandi",
                "es": "Ingreso contraseña",
                "pt-BR": "Senha de acesso",
                "ar": "كلمة مرور تسجيل الدخول"
            },
            "actLogin3": {
                "zh": "请输入手机号码",
                "en": "Please Type in the Phone Number",
                "vi": "Vui lòng nhập số điện thoại",
                "zh-Hant": "請輸入手機號碼",
                "id": "Silahkan masukkan nomor telepon",
                "es": "Por favor, Escriba el Número de Teléfono",
                "pt-BR": "Favor digitar o Número de Telefone",
                "ar": "يرجى كتابة رقم الهاتف"
            },
            "actLogin4": {
                "zh": "请输入验证码",
                "en": "Please enter verification code",
                "vi": "Vui lòng nhập mã xác nhận",
                "zh-Hant": "請輸入驗證碼",
                "id": "Silahkan masukkan kode verifikasi",
                "es": "Por favor, introduzca código verificación",
                "pt-BR": "Favor inserir o código de digitação",
                "ar": "يرجى إدخال رمز التحقق"
            },
            "actLogin10": {
                "zh": "提交代表您已阅读并同意",
                "en": "I accept the ",
                "vi": "Tôi đồng ý ",
                "zh-Hant": "提交代表您已閱讀並同意",
                "id": "Saya menerima ",
                "es": "Acepto el ",
                "pt-BR": "Eu aceito que",
                "ar": "أنا أقبل"
            },
            "actLogin11": {
                "zh": "客户协议",
                "en": "Client Agreement",
                "vi": "Hợp Đồng Khách Hàng",
                "zh-Hant": "客戶協議",
                "id": "Perjanjian Klien",
                "es": "Acuerdo Cliente",
                "pt-BR": "Termos de condição",
                "ar": "اتفاقية العميل"
            },
            "actLogin12": {
                "zh": "风险披露声明",
                "en": "Risk Disclosure",
                "vi": "Tuyên Bố Rủi Ro",
                "zh-Hant": "風險披露聲明",
                "id": "Peringatan Resiko",
                "es": "Divulgación del Riesgo",
                "pt-BR": "Divulgação de Risco",
                "ar": "الإفصاح عن المخاطر"
            },
            "actLogin13": {
                "zh": "隐私政策",
                "en": "Privacy Policy ",
                "vi": "Điều Khoản Cá Nhân ",
                "zh-Hant": "隱私政策",
                "id": "Kebijakan Privasi",
                "es": "Política de Privacidad ",
                "pt-BR": "Política de Privacidade",
                "ar": "سياسة الخصوصية"
            },
            "actLogin14": {
                "zh": "法律声明",
                "en": "Legal Notices",
                "vi": "Thông Báo Pháp Lý",
                "zh-Hant": "法律聲明",
                "id": "Pemberitahuan Hukum",
                "es": "Notas Legales",
                "pt-BR": "Termos legais",
                "ar": "البيانات القانونية"
            },
            "actLogin15": {
                "zh": "及其他",
                "en": "and other ",
                "vi": "Và cái khác ",
                "zh-Hant": "及其他",
                "id": "Dan lainnya",
                "es": "y otros ",
                "pt-BR": "e outros",
                "ar": "وغيرها"
            },
            "actLogin16": {
                "zh": "请输入正确的手机号码",
                "en": "Please Type in the correct Phone Number",
                "vi": "Vui lòng Nhập đúng số điện thoại",
                "zh-Hant": "請輸入正確的手機號碼",
                "id": "silahkan masukkan nomor telepon yang benar",
                "es": "Por favor, Escriba el Número de Teléfono correcto",
                "pt-BR": "Favor digitar o Número de Telefone correto",
                "ar": "يرجى كتابة رقم الهاتف الصحيح"
            },
            "actLogin17": {
                "zh": "手机号",
                "en": "Phone",
                "vi": "Số điện thoại",
                "zh-Hant": "手機號",
                "id": "Telepon",
                "es": "Teléfono",
                "pt-BR": "telefone",
                "ar": "الهاتف"
            },
            "actLogin19": {
                "zh": "请填写完整信息",
                "en": "Please Type in the complete information",
                "vi": "Vui lòng Nhập để hoàn thành thông tin",
                "zh-Hant": "請填寫完整信息",
                "id": "Mohon masukkan informasi yang lengkap",
                "es": "Por favor, Escriba la información completa",
                "pt-BR": "Favor digitar a informação completa",
                "ar": "يرجى إدخال المعلومات الكاملة"
            },
            "actLogin20": {
                "zh": "设置密码",
                "en": "Set Password",
                "vi": "Đặt Mật khẩu",
                "zh-Hant": "設置密碼",
                "id": "Atur kata sandi",
                "es": "Fijar Contraseña",
                "pt-BR": "Configurar senha",
                "ar": "إنشاء كلمة المرور"
            },
            "actLogin21": {
                "zh": "请输入密码",
                "en": "Please Type in the Password",
                "vi": "Vui lòng nhập mật khẩu",
                "zh-Hant": "請輸入密碼",
                "id": "Silahkan masukkan kata sandi",
                "es": "Por favor, Escriba la Contraseña ",
                "pt-BR": "Por favor digite a senha",
                "ar": "يرجى كتابة كلمة المرور"
            },
            "actLogin22": {
                "zh": "密码",
                "en": "Password",
                "vi": "Mật khẩu",
                "zh-Hant": "密碼",
                "id": "Kata sandi",
                "es": "Contraseña",
                "pt-BR": "Senha",
                "ar": "كلمة المرور"
            },
            "actLogin23": {
                "zh": "请为您的账户设置密码，6-15位字母、数字或符号组合",
                "en": "Please set a password for your account，6-15 bit of Letters, numbers, or combinations of symbols",
                "vi": "Vui lòng đặt mật khẩu cho tài khoản của bạn ， 6-15 bit chữ cái, số hoặc kết hợp các ký hiệu",
                "zh-Hant": "請為您的賬戶設置密碼，6-15位字母、數字或符號組合",
                "id": " Silahkan masukkan kata sandi untuk akun anda, kombinasi dari 6-15 huruf, angka dan simbol ",
                "es": "Por favor, cree una contraseña para su cuenta，use una combinación de 6-15 letras, números y símbolos",
                "pt-BR": "Favor configurar uma senha para sua conta, 6-15 num misto de letras, número ou combinações de símbolos",
                "ar": "يرجى إنشاء كلمة مرور لحسابك، 6-15 بت من الحروف أو الأرقام أو مزيج من الرموز"
            },
            "actLogin28": {
                "zh": "找回密码",
                "en": "Retrieve the password",
                "vi": "Truy xuất mật khẩu",
                "zh-Hant": "找回密碼",
                "id": "Dapatkan Kata sandi",
                "es": "Recuperar contraseña",
                "pt-BR": "Recuperar a senha",
                "ar": "استعادة كلمة المرور"
            },
            "actLogin29": {
                "zh": "下一步",
                "en": "Next",
                "vi": "Tiếp theo",
                "zh-Hant": "下壹步",
                "id": "Selanjutnya",
                "es": "Siguiente",
                "pt-BR": "Próximo",
                "ar": "التالي"
            },
            "actLogin29_1": {
                "zh": "上一步",
                "en": "Prev",
                "vi": "Quay lại",
                "zh-Hant": "上壹步",
                "id": "Sebelumnya",
                "es": "Prev",
                "pt-BR": "Anterior",
                "ar": "السابق"
            },
            "actLogin30": {
                "zh": "完成修改",
                "en": "Submit",
                "vi": "Gửi đi",
                "zh-Hant": "完成修改",
                "id": "Kirim",
                "es": "Enviar",
                "pt-BR": "Enviar",
                "ar": "إرسال"
            },
            "actLogin31": {
                "zh": "新密码设置成功",
                "en": "The new password is set up successfully",
                "vi": "Mật khẩu mới đã được đặt thành công",
                "zh-Hant": "新密碼設置成功",
                "id": "Kata sandi baru berhasil di perbarui",
                "es": "Nueva contraseña fijada correctamente",
                "pt-BR": "A nova senha foi configurada com sucesso",
                "ar": "تم إنشاء كلمة المرور الجديدة بنجاح"
            },
            "actLogin32": {
                "zh": "重新登录",
                "en": "Re-register",
                "vi": "Đăng ký lại",
                "zh-Hant": "重新登錄",
                "id": "Daftar ulang",
                "es": "Re- registro",
                "pt-BR": "Re-registrar",
                "ar": "إعادة التسجيل"
            },
            "actLogin33": {
                "zh": "完成注册",
                "en": "Complete",
                "vi": "Hoàn thành",
                "zh-Hant": "完成註冊",
                "id": "Selesai",
                "es": "Completar",
                "pt-BR": "Completo",
                "ar": "استكمال"
            },
            "actLogin34": {
                "zh": "跳过",
                "en": "Jump Over",
                "vi": "Nhảy qua",
                "zh-Hant": "跳過",
                "id": "Lewati",
                "es": "Saltar",
                "pt-BR": "Pular para",
                "ar": "تخطي"
            },
            "_comment_center": {
                "en": "this is comments, No translation required -- 通行证个人中心",
                "zh": "",
                "zh-Hant": "",
                "vi": "",
                "id": "",
                "es": "",
                "pt-BR": "",
                "ar": "this is comments, No translation required -- 通行证个人中心"
            },
            "tigerWitID": {
                "title": {
                    "zh": "通行证账号",
                    "en": "TigerWitID",
                    "vi": "IDTigerWit",
                    "zh-Hant": "通行證帳號",
                    "id": "ID TigerWit",
                    "es": "TigerWit ID",
                    "pt-BR": "TigerWitID",
                    "ar": "TigerWitID"
                },
                "titleM": {
                    "zh": "通行证账号：",
                    "en": "TigerWitID: ",
                    "vi": "IDTigerWit: ",
                    "zh-Hant": "通行證帳號：",
                    "id": "ID TigerWit: ",
                    "es": "TigerWit ID",
                    "pt-BR": "TigerWitID:",
                    "ar": "TigerWitID: "
                },
                "login": {
                    "login": {
                        "zh": "登录",
                        "en": "Login",
                        "vi": "Đăng nhập",
                        "zh-Hant": "登錄",
                        "id": "Masuk",
                        "es": "Ingresar",
                        "pt-BR": "Login",
                        "ar": "تسجيل الدخول"
                    },
                    "walletRecord": {
                        "zh": "钱包记录",
                        "en": "Wallet record",
                        "vi": "Hồ Sơ ví",
                        "zh-Hant": "錢包記錄",
                        "id": "Riwayat Dompet",
                        "es": "Historial Wallet",
                        "pt-BR": "Histórico da carteira",
                        "ar": "سجل المحفظة"
                    },
                    "mt4Account": {
                        "zh": "MT4账户",
                        "en": "MT4 account",
                        "vi": "Tài khoản MT4",
                        "zh-Hant": "MT4帳戶",
                        "id": "Akun MT4",
                        "es": "Cuenta MT4",
                        "pt-BR": "Conta MT4",
                        "ar": "حساب MT4"
                    },
                    "country": {
                        "zh": "国家",
                        "en": "Country",
                        "vi": "Quốc gia",
                        "zh-Hant": "國家",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País",
                        "ar": "البلد"
                    },
                    "passwordLogin": {
                        "zh": "密码登录",
                        "en": "Password Login",
                        "vi": "Mật khẩu",
                        "zh-Hant": "密碼登錄",
                        "id": "Kata sandi",
                        "es": "Ingreso contraseña",
                        "pt-BR": "Senha de acesso",
                        "ar": "كلمة مرور تسجيل الدخول"
                    },
                    "enterPhoneNumber": {
                        "zh": "请输入手机号",
                        "en": "Please enter phone number",
                        "vi": "Vui lòng nhập số điện thoại",
                        "zh-Hant": "請輸入手機號",
                        "id": "Masukkan nomor telepon",
                        "es": "Por favor, introduzca número de teléfono",
                        "pt-BR": "Por favor insira o número de telefone",
                        "ar": "يرجى إدخال رقم الهاتف"
                    },
                    "verifyWithEmail": {
                        "zh": "邮箱获取验证码",
                        "en": "Verify with email",
                        "vi": "Xác nhận bằng email",
                        "zh-Hant": "郵箱獲取驗證碼",
                        "id": "verifikasi melalui email",
                        "es": "Verificar con email",
                        "pt-BR": "Verificar com email",
                        "ar": "التحقق باستخدام البريد الإلكتروني"
                    },
                    "verifyWithPhoneNumber": {
                        "zh": "手机号获取验证码",
                        "en": "Verify with phone number",
                        "vi": "Xác nhận bằng số điện thoại",
                        "zh-Hant": "手機號獲取驗證碼",
                        "id": "verifikasi melalui nomor telepon",
                        "es": "Verificar con número de teléfono",
                        "pt-BR": "Verificar com número de telefone",
                        "ar": "التحقق باستخدام رقم الهاتف"
                    },
                    "verificationCode": {
                        "zh": "请输入验证码",
                        "en": "Please enter verification code",
                        "vi": "Vui lòng nhập mã xác nhận",
                        "zh-Hant": "請輸入驗證碼",
                        "id": "Silahkan masukkan kode verifikasi",
                        "es": "Por favor, introduzca código verificación",
                        "pt-BR": "Favor inserir o código de digitação",
                        "ar": "يرجى إدخال رمز التحقق"
                    },
                    "sendSMS": {
                        "zh": "获取验证码",
                        "en": "Send code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código",
                        "ar": "أرسل الرمز"
                    },
                    "sendCode": {
                        "zh": "获取验证码",
                        "en": "Send code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código",
                        "ar": "أرسل الرمز"
                    },
                    "keepMeLogin": {
                        "zh": "记住登录状态",
                        "en": "Keep me login",
                        "vi": "Nhớ đăng nhập",
                        "zh-Hant": "記住登錄狀態",
                        "id": "Tetap masuk",
                        "es": "Mantener ingresado",
                        "pt-BR": "Mantenha-me logado",
                        "ar": "احتفظ بتسجيل دخولي"
                    },
                    "enterAccountPhoneNo": {
                        "zh": "请输入您的账号或手机号",
                        "en": "Enter account/phone No",
                        "vi": "Nhập tài khoản/ số điện thoại",
                        "zh-Hant": "請輸入您的帳號或手機號",
                        "id": "Masukkan nomor akun/telepon",
                        "es": "Intro cuenta/nº teléfono",
                        "pt-BR": "Inserir conta/número de telefone",
                        "ar": "ادخل الحساب/ رقم الهاتف"
                    },
                    "enterAccountPhoneNoOrEmail": {
                        "zh": "请输入您的账号、手机号或邮箱",
                        "en": "Enter account/phone No. or email",
                        "vi": "Nhập tài khoản/ số điện thoại hoặc email",
                        "zh-Hant": "請輸入您的帳號、手機號或郵箱",
                        "id": "Masukkan nomor akun/telepon atau email",
                        "es": "Intro cuenta/nº teléfono o email",
                        "pt-BR": "Inserir conta/número de telefone ou email",
                        "ar": "ادخل الحساب/ رقم الهاتف أو البريد الإلكتروني"
                    },
                    "register": {
                        "zh": "注册",
                        "en": "Register",
                        "vi": "Đăng ký",
                        "zh-Hant": "註冊",
                        "id": "Daftar",
                        "es": "Registro",
                        "pt-BR": "Registro",
                        "ar": "التسجيل"
                    },
                    "tip1_1": {
                        "zh": "提交注册代表您已阅读并同意",
                        "en": "By clicking 'Register' you confirm that you have read and agree with ",
                        "vi": "Bằng cách nhấn nút ‘Đăng Ký’ bạn xác nhận rằng bạn đa đọc và đồng ý với ",
                        "zh-Hant": "提交註冊代表您已閱讀並同意",
                        "id": "Dengan menekan tombol “Daftar”, anda mengakui bahwa anda telah membaca dan setuju dengan ",
                        "es": "Al hacer click ”Aceptar” confirma que ha leído y aceptado ",
                        "pt-BR": "Ao clicar em \"Registrar\" você confirma que leu e concorda com os ",
                        "ar": "بموجب النقر على \"تسجيل\"، أنت تؤكد على أنك قد قرأت وتوافق على "
                    },
                    "tip1_2": {
                        "zh": "客户协议",
                        "en": "Client Agreement",
                        "vi": "Hợp Đồng khách hàng",
                        "zh-Hant": "客戶協議",
                        "id": "Perjanjian Klien",
                        "es": "Acuerdo Cliente",
                        "pt-BR": "Termos de condição",
                        "ar": "اتفاقية العميل"
                    },
                    "tip1_3": {
                        "zh": "风险披露声明",
                        "en": "Risk Disclosure Notice",
                        "vi": "Thông Báo Tiết Lộ Rủi Ro",
                        "zh-Hant": "風險披露聲明",
                        "id": "Peringatan Resiko",
                        "es": "Notificación Divulgación Riesgo",
                        "pt-BR": "Termos de risco",
                        "ar": "بيان الإفصاح عن المخاطر"
                    },
                    "tip1_4": {
                        "zh": "隐私政策",
                        "en": "Privacy Policy ",
                        "vi": "Chính Sách Cá Nhân ",
                        "zh-Hant": "隱私政策",
                        "id": "Kebijakan Privasi ",
                        "es": "Política de Privacidad ",
                        "pt-BR": "Política de Privacidade ",
                        "ar": "سياسة الخصوصية "
                    },
                    "tip1_5": {
                        "zh": "及其他",
                        "en": "and any other ",
                        "vi": "Và nhũng cái khác ",
                        "zh-Hant": "及其他",
                        "id": "dan yang lain ",
                        "es": "y cualquier otra ",
                        "pt-BR": "e quaisquer outros ",
                        "ar": "وأي وثائق أخرى من "
                    },
                    "tip1_6": {
                        "zh": "法律声明",
                        "en": "Legal Notices",
                        "vi": "Thông Báo Pháp Lý",
                        "zh-Hant": "法律聲明",
                        "id": "Pemberitahuan Hukum",
                        "es": "Notificación Legal",
                        "pt-BR": "Termos legais",
                        "ar": "البيانات القانونية"
                    },
                    "alreadyHas": {
                        "zh": "已有TigerWit账号？",
                        "en": "Already have an account? ",
                        "vi": "Bạn đã sẵn sang để tạo tài khoản? ",
                        "zh-Hant": "已有TigerWit帳號？",
                        "id": "Sudah memiliki akun?",
                        "es": "¿Tiene ya una cuenta? ",
                        "pt-BR": "Já tem uma conta?",
                        "ar": "هل لديك حساب بالفعل؟ "
                    },
                    "registerViaEmail": {
                        "zh": "切换到邮箱",
                        "en": "Register via email",
                        "vi": "Đăng ký qua email",
                        "zh-Hant": "切換到郵箱",
                        "id": "Daftar melalui email",
                        "es": "Registro vía email",
                        "pt-BR": "Cadastrar via email",
                        "ar": "التسجيل باستخدام البريد الإلكتروني"
                    },
                    "registerViaPhoneNumber": {
                        "zh": "切换到手机号",
                        "en": "Register via phone number",
                        "vi": "Đăng ký qua số điện thoại",
                        "zh-Hant": "切換到手機號",
                        "id": "Daftar melalui nomor telepon",
                        "es": "Registro vía número teléfono",
                        "pt-BR": "Cadastrar via número de telefone",
                        "ar": "التسجيل باستخدام رقم الهاتف"
                    },
                    "phoneNumExists": {
                        "zh": "手机号已存在",
                        "en": "The phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號已存在",
                        "id": "Nomor telepon ini telah terdaftar",
                        "es": "El número de teléfono ya existe",
                        "pt-BR": "O número de telefone já está cadastrado",
                        "ar": "رقم الهاتف موجود بالفعل"
                    },
                    "tip2": {
                        "zh": "该手机号已存在，请更换手机号进行注册或前往登录。",
                        "en": "This phone number already exists. Please use another valid phone number for registration.",
                        "vi": "Số điện thoại này đã tồn tại. Vui lòng sử dụng một số điện thoại có hiệu lực để đăng ký.",
                        "zh-Hant": "該手機號已存在，請更換手機號進行註冊或前往登錄。",
                        "id": "Nomor telepon ini telah terdaftar, silahkan masukkan nomor telepon yang lain.",
                        "es": "Este número de teléfono ya existe. Por favor, use otro móvil válido para registro.",
                        "pt-BR": "Este número de telefone já existe. Favor usar outro número de telefone válido para registrar",
                        "ar": "رقم الهاتف هذا موجود بالفعل. يرجى استخدام رقم هاتف صحيح آخر للتسجيل"
                    },
                    "setPasswordToStart": {
                        "zh": "设置密码，开启您的交易之路",
                        "en": "Set password to get started",
                        "vi": "Đặt mật khẩu để bắt đầu",
                        "zh-Hant": "設置密碼，開啟您的交易之路",
                        "id": "Atur Kata sandi untuk memulai",
                        "es": "Fijar contraseña para iniciarse",
                        "pt-BR": "Defina senha para começar",
                        "ar": "قم بإنشاء كلمة المرور للبدء"
                    },
                    "setPassword": {
                        "zh": "密码",
                        "en": "Set password",
                        "vi": "Đặt mật khẩu",
                        "zh-Hant": "密碼",
                        "id": "Atur Kata sandi",
                        "es": "Fijar contraseña",
                        "pt-BR": "Configurar senha",
                        "ar": "إنشاء كلمة المرور"
                    },
                    "confirmPassword": {
                        "zh": "请确认密码",
                        "en": "Confirm password",
                        "vi": "Xác nhận mật khẩu",
                        "zh-Hant": "請確認密碼",
                        "id": "Konfirmasi Kata sandi",
                        "es": "Confirmar contraseña",
                        "pt-BR": "Confirme sua senha",
                        "ar": "تأكيد كلمة المرور"
                    },
                    "done": {
                        "zh": "完成",
                        "en": "Done",
                        "vi": "Hoàn thành",
                        "zh-Hant": "完成",
                        "id": "Selesai",
                        "es": "Hecho",
                        "pt-BR": "Sair",
                        "ar": "تم"
                    },
                    "skip": {
                        "zh": "跳过",
                        "en": "Skip",
                        "vi": "Bỏ qua",
                        "zh-Hant": "跳過",
                        "id": "Lewati",
                        "es": "Saltar",
                        "pt-BR": "Pular",
                        "ar": "تخطي"
                    },
                    "verificationCodeLogin": {
                        "zh": "验证码登录",
                        "en": "Code Login",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼登錄",
                        "id": "Kode Masuk",
                        "es": "Ingreso Código",
                        "pt-BR": "Código de login",
                        "ar": "رمز تسجيل الدخول"
                    },
                    "enterPassword": {
                        "zh": "请输入密码",
                        "en": "Please enter password",
                        "vi": "Vui lòng nhập mật khẩu",
                        "zh-Hant": "請輸入密碼",
                        "id": "Silahkan masukkan Kata sandi",
                        "es": "Por favor, introduzca contraseña",
                        "pt-BR": "Por favor insira a senha",
                        "ar": "يرجى إدخال كلمة المرور"
                    },
                    "loginWithEmail": {
                        "zh": "切换到邮箱",
                        "en": "Login with email",
                        "vi": "Truy cập bằng email",
                        "zh-Hant": "切換到郵箱",
                        "id": "Masuk melalui email",
                        "es": "Ingreso con email",
                        "pt-BR": "Entre com o email",
                        "ar": "تسجيل الدخول باستخدام البريد الإلكتروني"
                    },
                    "loginWithMobile": {
                        "zh": "切换到手机号",
                        "en": "Login with mobile",
                        "vi": "Truy cập bằng số điện thoại",
                        "zh-Hant": "切換到手機號",
                        "id": "Masuk melalui seluler",
                        "es": "Ingreso con móvil",
                        "pt-BR": "Entre com o celular",
                        "ar": "تسجيل الدخول باستخدام الهاتف المحمول"
                    },
                    "forgetPassword": {
                        "zh": "忘记密码？",
                        "en": "Forget password?",
                        "vi": "Quên mật khẩu",
                        "zh-Hant": "忘記密碼？",
                        "id": "Lupa Kata sandi?",
                        "es": "¿Ha olvidado su contraseña?",
                        "pt-BR": "Esqueceu a senha?",
                        "ar": "هل نسيت كلمة المرور؟"
                    },
                    "tip3": {
                        "zh": "已使用SSL加密技术保护您的网络安全",
                        "en": "The TigerWit network is secured with SSL encryption technology",
                        "vi": "Mạng TigerWit được bảo mật bằng công nghệ mã hóa SSL",
                        "zh-Hant": "已使用SSL加密技術保護您的網酪安全",
                        "id": " Jaringan TigerWit dilindungi oleh teknologi enkripsi SSL ",
                        "es": "La red TigerWit es segura con tecnología de encriptación SSL",
                        "pt-BR": "A rede TigerWit é protegida com tecnologia de encriptação SSL",
                        "ar": "شبكة TigerWit مؤمنة ومحمية بفضل استخدام تكنولوجيا تشفير  SSL"
                    },
                    "tip4": {
                        "zh": "该手机号没有注册过Tigerwit账号",
                        "en": "This phone number has not been registered",
                        "vi": "Số điện thoại này đã được đăng ký",
                        "zh-Hant": "該手機號沒有註冊過Tigerwit帳號",
                        "id": "Nomor telepon ini belum terdaftar",
                        "es": "Este número de teléfono no ha sido registrado",
                        "pt-BR": "Este número de telefone não está registrado",
                        "ar": "رقم الهاتف هذا لم يتم تسجيله"
                    },
                    "tip5": {
                        "zh": "该邮箱没有注册过Tigerwit账号",
                        "en": "This email has not been registered",
                        "vi": "Email này đã được đăng ký",
                        "zh-Hant": "該郵箱沒有註冊過Tigerwit帳號",
                        "id": "Email ini belum terdaftar",
                        "es": "Este email no ha sido registrado",
                        "pt-BR": "Este email não está registrado",
                        "ar": "البريد الإلكتروني هذا لم يتم تسجيله"
                    },
                    "selectAreaCode": {
                        "zh": "请选择区号",
                        "en": "Please select area code",
                        "vi": "Vui lòng chọn mã khu vực",
                        "zh-Hant": "請選擇區號",
                        "id": "Silahkan pilih kode area",
                        "es": "Por favor, seleccione código área",
                        "pt-BR": "Por favor selecione o código de área",
                        "ar": "يرجى تحديد رمز المنطقة"
                    },
                    "countryRegion": {
                        "zh": "国家/地区",
                        "en": "Country/Region",
                        "vi": "Quốc gia/ khu vực",
                        "zh-Hant": "國家/地區",
                        "id": "Negara/Daerah",
                        "es": "País/Región",
                        "pt-BR": "País/Região",
                        "ar": "البلد/المنطقة"
                    },
                    "enterEmail": {
                        "zh": "请输入邮箱",
                        "en": "Please enter email",
                        "vi": "Vui lòng nhập email",
                        "zh-Hant": "請輸入郵箱",
                        "id": "Silahkan masukkan email",
                        "es": "Por favor, introduzca email",
                        "pt-BR": "Por favor, digite seu email",
                        "ar": "يرجى إدخال البريد الإلكتروني"
                    },
                    "phoneNumber": {
                        "zh": "手机号",
                        "en": "Phone number",
                        "vi": "số điện thoại",
                        "zh-Hant": "手機號",
                        "id": "Telepon",
                        "es": "Número teléfono",
                        "pt-BR": "Numero de telefone",
                        "ar": "رقم الهاتف"
                    },
                    "email": {
                        "zh": "邮箱",
                        "en": "Email",
                        "vi": "Thư điện tử",
                        "zh-Hant": "郵箱",
                        "id": "Email",
                        "es": "Email",
                        "pt-BR": "Email",
                        "ar": "البريد الإلكتروني"
                    },
                    "selectCountry": {
                        "zh": "请选择国家/地区",
                        "en": "Please select country/region",
                        "vi": "Vui lòng chọn quốc gia/ khu vực",
                        "zh-Hant": "請選擇國家/地區",
                        "id": "Silahkan pilih Negara/Daerah",
                        "es": "Por favor, seleccione país/región",
                        "pt-BR": "Por favor selecione País/região",
                        "ar": "يرجى تحديد البلد / المنطقة"
                    },
                    "enterCorrectEmail": {
                        "zh": "请输入有效邮箱",
                        "en": "Please enter a valid email address",
                        "vi": "Vui lòng chọn địa chỉ email có hiệu lực",
                        "zh-Hant": "請輸入有效郵箱",
                        "id": "Mohon masukkan alamat email yang benar",
                        "es": "Por favor, introduzca email válido",
                        "pt-BR": "Por favor, digite um email valido",
                        "ar": "يرجى إدخال عنوان بريد إلكتروني صحيح"
                    },
                    "countryCode": {
                        "zh": "(国家/国家代码)",
                        "en": "(country/country code)",
                        "vi": "Quốc gia/ mã quốc gia",
                        "zh-Hant": "(國家/國家代碼)",
                        "id": "Negara/kode negara",
                        "es": "(país/código país)",
                        "pt-BR": "(país/código do país)",
                        "ar": "(البلد/رمز البلد)"
                    },
                    "password": {
                        "zh": "密码",
                        "en": "Password",
                        "vi": "Mật khẩu",
                        "zh-Hant": "密碼",
                        "id": "Kata sandi",
                        "es": "Contraseña",
                        "pt-BR": "Senha",
                        "ar": "كلمة المرور"
                    },
                    "confirmPasswordj": {
                        "zh": "确认密码",
                        "en": "Confirm password",
                        "vi": "Xác nhận mật khẩu",
                        "zh-Hant": "確認密碼",
                        "id": "Konfirmasi Kata sandi",
                        "es": "Confirmar contraseña",
                        "pt-BR": "Confirme sua senha",
                        "ar": "تأكيد كلمة المرور"
                    },
                    "notHaveAccount": {
                        "zh": "还没有TigerWit账号？",
                        "en": "Don’t have an account? ",
                        "vi": "Bạn không có tài khoản? ",
                        "zh-Hant": "還沒有TigerWit帳號？",
                        "id": "Belum memiliki akun? ",
                        "es": "¿No tiene una cuenta? ",
                        "pt-BR": "Não tem uma conta?",
                        "ar": "أليس لديك حسابًا؟"
                    },
                    "verificationCodeSent": {
                        "zh": "验证码已发送",
                        "en": "The verification code has been sent",
                        "vi": "Mã xác nhận đã được gửi",
                        "zh-Hant": "驗證碼已發送",
                        "id": "Kode verifikasi telah terkirim",
                        "es": "El código de verificación ha sido enviado",
                        "pt-BR": "O código de verificação foi enviado.",
                        "ar": "تم إرسال رمز التحقق"
                    },
                    "tip6_1": {
                        "zh": "我们已将验证码发送至",
                        "en": "We have sent the verification code to ",
                        "vi": "Chúng tôi đã gửi mã xác nhận đến ",
                        "zh-Hant": "我們已將驗證碼發送至",
                        "id": "Kami telah mengirim Kode verifikasi ",
                        "es": "Hemos enviado el código de verificación a  ",
                        "pt-BR": "Mandamos o código de verificação para",
                        "ar": "قد أرسلت رمز التحقق إلى"
                    },
                    "tip6_2": {
                        "zh": "邮箱",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "郵箱",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": " "
                    },
                    "tip6_21": {
                        "zh": "手机号：",
                        "en": "phone number: ",
                        "vi": "Số điện thoại: ",
                        "zh-Hant": "手機號：",
                        "id": "telepon: ",
                        "es": "número teléfono: ",
                        "pt-BR": "número de telefone:",
                        "ar": "رقم الهاتف:"
                    },
                    "tip6_3": {
                        "zh": " 请注意查收。",
                        "en": ", please check.",
                        "vi": ", Vui lòng kiểm tra.",
                        "zh-Hant": " 請註意查收。",
                        "id": ", silahkan cek.",
                        "es": ", por favor, compruebe.",
                        "pt-BR": ", favor checar.",
                        "ar": "، يرجى التحقق"
                    },
                    "tip7_1": {
                        "zh": " ",
                        "en": "The ",
                        "vi": " ",
                        "zh-Hant": " ",
                        "id": " ",
                        "es": "El ",
                        "pt-BR": "O",
                        "ar": "الـ"
                    },
                    "tip7_2": {
                        "zh": "手机号",
                        "en": "phone number ",
                        "vi": "Số điện thoại ",
                        "zh-Hant": "手機號",
                        "id": "Telepon ",
                        "es": "número de teléfono ",
                        "pt-BR": "número de telefone",
                        "ar": "رقم الهاتف"
                    },
                    "tip7_21": {
                        "zh": "邮箱",
                        "en": "email ",
                        "vi": "Thư điện tử ",
                        "zh-Hant": "郵箱",
                        "id": "email ",
                        "es": "email ",
                        "pt-BR": "email",
                        "ar": "البريد الإلكتروني"
                    },
                    "tip7_3": {
                        "zh": "未注册",
                        "en": "is not registered",
                        "vi": "Không được đăng ký",
                        "zh-Hant": "未註冊",
                        "id": "belum terdaftar",
                        "es": "no está registrado",
                        "pt-BR": "não está registrado",
                        "ar": "غير مسجل"
                    },
                    "tip9_1": {
                        "zh": "该",
                        "en": "This ",
                        "vi": "Đây là ",
                        "zh-Hant": "該",
                        "id": " ",
                        "es": "Este ",
                        "pt-BR": "Este",
                        "ar": "هذا"
                    },
                    "tip9_3": {
                        "zh": "没有注册过 TigerWit 账号，前往注册？",
                        "en": "has not been registered",
                        "vi": "Đã không được đăng ký",
                        "zh-Hant": "沒有註冊過 TigerWit 帳號，前往註冊？",
                        "id": "ini belum terdaftar",
                        "es": "no ha sido registrado",
                        "pt-BR": "não foi registrado",
                        "ar": "لم يتم تسجيله"
                    },
                    "goRegister": {
                        "zh": "去注册",
                        "en": "Register",
                        "vi": "Đăng ký",
                        "zh-Hant": "去註冊",
                        "id": "Daftar",
                        "es": "Registro",
                        "pt-BR": "Registro",
                        "ar": "التسجيل"
                    },
                    "passwordsEnteredDoNotMatch": {
                        "zh": "两次输入的密码不一致",
                        "en": "The passwords entered do not match",
                        "vi": "Mật khẩu mà bạn nhập không trùng khớp",
                        "zh-Hant": "兩次輸入的密碼不壹致",
                        "id": "Kata sandi yang dimasukkan salah",
                        "es": "Las contraseñas introducidas no coinciden",
                        "pt-BR": "As senha sinseridas não correspondem",
                        "ar": "كلمتي المرور التي أدخلتهما غير متطابقتين"
                    },
                    "goLogin": {
                        "zh": "去登录",
                        "en": "Login",
                        "vi": "Truy cập",
                        "zh-Hant": "去登錄",
                        "id": "Masuk",
                        "es": "Ingreso",
                        "pt-BR": "Login",
                        "ar": "تسجيل الدخول"
                    },
                    "tip8_1": {
                        "zh": "该",
                        "en": "This ",
                        "vi": "Đây là",
                        "zh-Hant": "該",
                        "id": "Ini",
                        "es": "Este ",
                        "pt-BR": "Este",
                        "ar": "هذا"
                    },
                    "tip8_2": {
                        "zh": "手机号",
                        "en": "phone number ",
                        "vi": "Số điện thoại",
                        "zh-Hant": "手機號",
                        "id": "Telepon",
                        "es": "número de teléfono ",
                        "pt-BR": "número de telefone",
                        "ar": "رقم الهاتف"
                    },
                    "tip8_21": {
                        "zh": "邮箱",
                        "en": "email ",
                        "vi": "thư điện tử ",
                        "zh-Hant": "郵箱",
                        "id": "Email",
                        "es": "email ",
                        "pt-BR": "email",
                        "ar": "البريد الإلكتروني"
                    },
                    "tip8_3": {
                        "zh": "已存在，请更换",
                        "en": "already exists. Please use another valid ",
                        "vi": "đã tồn tại. Vui lòng sử dụng một cái khác có hiệu lực ",
                        "zh-Hant": "已存在，請更換",
                        "id": "Sudah terdaftar. Silahkan masukkan yang lain",
                        "es": "ya existe. Por favor, use otro válido ",
                        "pt-BR": ". Favor usar outro válido",
                        "ar": "موجود بالفعل يرجى استخدام آخر صحيح"
                    },
                    "tip8_4": {
                        "zh": "进行注册或直接登录。",
                        "en": "for registration.",
                        "vi": "để đăng ký",
                        "zh-Hant": "進行註冊或直接登錄。",
                        "id": "Untuk pendaftaran",
                        "es": "para registro",
                        "pt-BR": "para registrar.",
                        "ar": "للتسجيل"
                    },
                    "tip8_5": {
                        "zh": "已存在",
                        "en": "already exists",
                        "vi": "đã tồn tại",
                        "zh-Hant": "已存在",
                        "id": "Sudah terdaftar",
                        "es": "ya existe",
                        "pt-BR": "já existe",
                        "ar": "موجود بالفعل"
                    },
                    "verificationCodej": {
                        "zh": "验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código verificación",
                        "pt-BR": "Código de verificação",
                        "ar": "رمز التحقق"
                    },
                    "tip11": {
                        "zh": "您可直接使用新密码进行登录。",
                        "en": "You can login directly using the new password.",
                        "vi": "Bạn có thể đăng nhập ngay lập tức bằng cách sử dụng mật khẩu mới.",
                        "zh-Hant": "您可直接使用新密碼進行登錄。",
                        "id": "Anda bisa langsung masuk hanya menggunakan kata sandi",
                        "es": "Puedes iniciar sesión directamente usando la nueva contraseña.",
                        "pt-BR": "Você pode logar diretamente usando a nova senha.",
                        "ar": "يمكنك تسجيل الدخول مباشرة باستخدام كلمة المرور الجديدة"
                    },
                    "tip10": {
                        "zh": "新密码设置成功",
                        "en": "The new password was set successfully",
                        "vi": "Mật khẩu mới đã được tạo thành công",
                        "zh-Hant": "新密碼設置成功",
                        "id": "Kata sandi yang baru berhasil diperbarui",
                        "es": "La nueva contraseña fue establecida con éxito",
                        "pt-BR": "A nova senha foi configurada com sucesso",
                        "ar": "تم إنشاء كلمة المرور الجديدة بنجاح"
                    },
                    "title": {
                        "zh": "",
                        "en": "",
                        "vi": "",
                        "zh-Hant": "",
                        "id": "--",
                        "es": "",
                        "pt-BR": "",
                        "ar": ""
                    },
                    "resetPasswordTip": {
                        "zh": "为了你的账号安全，TigerWit建议您定期重置登录密码",
                        "en": "Consider your account security, TigerWit suggests you reset your login password regularly.",
                        "vi": "Do vấn đề bảo mật tài khoản của bạn, TigerWit khuyến nghị bạn đặt lại mật khẩu của mình thường xuyên.",
                        "zh-Hant": "為了您的賬戶安全，TigerWit建議您定期重置登錄密碼",
                        "id": "Demi menjaga keamanan akun anda. TigerWit menyarankan anda untuk mengubah kata sandi anda secara berkala.",
                        "es": "Considere la seguridad de su cuenta; TigerWit le sugiere que resetee la contraseña de inicio sesión regularmente.",
                        "pt-BR": "Considere a segurança da sua conta, TigerWit sugere que você redefina sua senha de login regularmente.",
                        "ar": "انتبه إلى أمان حسابك, وتنصحك TigerWit بتغيير كلمة مرور تسجيل الدخول الخاصة بك بانتظام."
                    },
                    "resetPassword": {
                        "zh": "重置密码",
                        "en": "Reset password",
                        "vi": "Đặt lại mật khẩu",
                        "zh-Hant": "重置密碼",
                        "id": "Atur ulang",
                        "es": "Resetear contraseña",
                        "pt-BR": "Redefinir senha",
                        "ar": "إعادة تعيين كلمة المرور"
                    },
                    "doResetPassword": {
                        "zh": "是否重置密码？",
                        "en": "Do you want to reset your password?",
                        "vi": "Bạn có muốn cài đặt lại mật khẩu của mình?",
                        "zh-Hant": "是否重置密碼？",
                        "id": "Atur Ulang kata sandi anda?",
                        "es": "¿Desea resetear su contraseña?",
                        "pt-BR": "Você quer redefinir sua senha?",
                        "ar": "هل تريد إعادة تعيين كلمة المرور الخاصة بك؟"
                    }
                },
                "authen": {
                    "address": {
                        "zh": "地址证明",
                        "en": "Proof of Address",
                        "vi": "Địa chỉ xác thực",
                        "zh-Hant": "地址證明",
                        "id": "Bukti Alamat",
                        "es": "Prueba de Dirección",
                        "pt-BR": "Comprovação de endereço",
                        "ar": "إثبات العنوان"
                    },
                    "proofAddress": {
                        "zh": "上传地址证明",
                        "en": "Proof of Address",
                        "vi": "Địa chỉ xác thực",
                        "zh-Hant": "上傳地址證明",
                        "id": "Bukti Alamat",
                        "es": "Prueba de Dirección",
                        "pt-BR": "Comprovação de endereço",
                        "ar": "إثبات العنوان"
                    },
                    "acceptFollow": {
                        "zh": "我们将接受以下文件：",
                        "en": "We will accept the following documents:",
                        "vi": "Chúng tôi sẽ chấp nhận những tài liệu sau:",
                        "zh-Hant": "我們將接受以下文件：",
                        "id": "Kami menerima dokumen sebagai berikut:",
                        "es": "Aceptaremos los siguientes documentos:",
                        "pt-BR": "Aceitaremos os seguintes documentos:",
                        "ar": "سوف نقبل الوثائق التالية:"
                    },
                    "utilityBill": {
                        "zh": "电费单（水，煤气，电）",
                        "en": "Utility Bill (water, gas, electricity)",
                        "vi": "Hóa đơn tiện ích (nước, gas, điện)",
                        "zh-Hant": "電費單（水，煤氣，電）",
                        "id": "Tagihan bulanan (air, gas, listrik)",
                        "es": "Factura de servicios públicos (agua, gas, electricidad)",
                        "pt-BR": "Conta de serviços públicos (água, gás, eletricidade).",
                        "ar": "فاتورة مرافق (مياه، غاز، كهرباء)"
                    },
                    "landlineTel": {
                        "zh": "固定电话费",
                        "en": "Landline telephone bill",
                        "vi": "Điện thoại cố định",
                        "zh-Hant": "固定電話費",
                        "id": "Tagihan telepon rumah",
                        "es": "Factura de telefonía fija",
                        "pt-BR": "Conta de telefônia fixa",
                        "ar": "فاتورة الهاتف الأرضي"
                    },
                    "bankStatement": {
                        "zh": "银行对账单",
                        "en": "Bank statement",
                        "vi": "Bảng sao kê ngân hàng",
                        "zh-Hant": "銀行對帳單",
                        "id": "Rekening Bank",
                        "es": "Extracto de cuenta",
                        "pt-BR": "extrato bancário",
                        "ar": "كشف حساب مصرفي"
                    },
                    "noCan": {
                        "zh": "该文件不应超过3个月。 我们不接受手机账单，信用卡账单，发票或收据。",
                        "en": "The document should not be no more than 3 months old. We cannot accept mobile phone bills, credit card bills, invoices or receipts.",
                        "vi": "Tài liệu không quá 3 tháng. Chúng tôi không chấp nhận hóa đơn điện thoại, hoá đơn thẻ tín dụng, hóa đơn hoặc biên nhận.",
                        "zh-Hant": "該文件不應超過3個月。我們不接受手機賬單，信用卡賬單，發票或收據。",
                        "id": "Dokumen tidak boleh lebih dari 3 bulan. Kami tidak menerima tagihan telepon seluler, tagihan kartu kredit, faktur atau tanda terima.",
                        "es": "El documento no debe tener más de 3 meses de antigüedad. No podemos aceptar facturas de teléfonos móviles, facturas de tarjetas de crédito, facturas o recibos.",
                        "pt-BR": "O documento não deve ter mais de 3 meses da data atual. Não podemos aceitar contas de telefone celular, faturas de cartão de crédito, faturas ou recibos.",
                        "ar": "يجب ألا يكون قد مر على تاريخ صدور الوثيقة أكثر من 3 أشهر. نحن لا نقبل فواتير الهاتف المحمول أو فواتير أو إيصالات البطاقة الائتمانية"
                    },
                    "uploadAddress": {
                        "zh": "上传地址证明",
                        "en": "Upload the proof of address",
                        "vi": "Tải lên bằng chứng địa chỉ ",
                        "zh-Hant": "上傳地址證明",
                        "id": "Mohon unggah bukti alamat",
                        "es": "Suba el comprobante de domicilio",
                        "pt-BR": "Faça o upload do comprovante de endereço",
                        "ar": "قم بتحميل إثبات العنوان"
                    },
                    "pUploadAddress": {
                        "zh": "请上传地址证明",
                        "en": "Please upload the proof of address",
                        "vi": "Vui lòng tải lên bằng chứng địa chỉ",
                        "zh-Hant": "請上傳地址證明",
                        "id": "Mohon unggah bukti alamat",
                        "es": "Por favor, cargue la prueba de dirección",
                        "pt-BR": "Por favor, faça o upload do comprovante de endereço",
                        "ar": "يرجى تحميل إثبات العنوان"
                    }
                },
                "myAccount": {
                    "title": {
                        "zh": "账户概况",
                        "en": "My Account",
                        "vi": "Tài khoản của tôi",
                        "zh-Hant": "賬戶概況",
                        "id": "Akun Saya",
                        "es": "Mi cuenta",
                        "pt-BR": "Minha conta",
                        "ar": "حسابي"
                    },
                    "updateID": {
                        "zh": "更新证件",
                        "en": "Update ID",
                        "vi": "Cập nhật ID",
                        "zh-Hant": "更新證件",
                        "id": "Perbarui ID",
                        "es": "Actualizar ID",
                        "pt-BR": "Atualizar ID",
                        "ar": "تحديث الهوية"
                    },
                    "updateIDTip": {
                        "zh": "您的证件已过期，无法进行该操作，请及时上传有效证件。点击“更新证件”，即可完成相关操作。",
                        "en": "Your credential has expired and cannot be operated. Please upload your valid certificate in time. Click on the \"Update ID\" to complete the related operations.",
                        "vi": "Thông tin xác thực của bạn đã hết hạn và không thể hoạt động. Vui lòng tải lên chứng chỉ hợp lệ của bạn kịp thời. Nhấp vào \"Cập nhật ID\" để hoàn thành các hoạt động liên quan.",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。點擊“更新證件”，即可完成相關操作。",
                        "id": " Dokumen anda telah kadaluwarsa. Anda tidak dapat melakukan transaksi. Silahkan masukkan dokumen yang baru. Klik “Perbarui ID” untuk mengunggah dokumen.",
                        "es": "Su credencial ha caducado y no puede operar. Por favor, suba su certificado válido a tiempo. Haga clic en \"Actualizar ID\" para completar las operaciones relacionadas.",
                        "pt-BR": "Sua credencial expirou e não pode ser operada. Por favor carregue o seu certificado válido a tempo. Clique no \"Atualizar ID\" para concluir as operações relacionadas.",
                        "ar": "انتهت صلاحية بيانات اعتمادك ولا يمكن استخدامها. يرجى تحميل شهادة صالحة في الموعد المحدد. انقر على \"تحديث الهوية\" لاستكمال العمليات ذات الصلة."
                    },
                    "updateIDTip2": {
                        "zh": "您的证件已过期，无法进行该操作，请及时上传有效证件。",
                        "en": "Your credential has expired and cannot be operated. Please upload your valid certificate in time.",
                        "vi": "Thông tin của bạn đã hết hạn và không thể hoạt động. Vui lòng cập nhật chứng chỉ có hiệu lực của bạn lên đúng thời gian.",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。",
                        "id": "Dokumen anda telah kadaluwarsa. Anda tidak dapat melakukan transaksi. Silahkan masukkan dokumen yang baru.",
                        "es": "Su credencial ha caducado y no puede operar. Por favor, suba su certificado válido a tiempo.",
                        "pt-BR": "Sua credencial expirou e não pode ser operada. Por favor carregue o seu certificado válido a tempo.",
                        "ar": "انتهت صلاحية بيانات اعتمادك ولا يمكن استخدامها. يرجى تحميل شهادة صالحة في الموعد المحدد."
                    },
                    "totalAssets": {
                        "zh": "资产总额",
                        "en": "Total Assets",
                        "vi": "Tổng các Tài Sản",
                        "zh-Hant": "資產總額",
                        "id": "Total Aset",
                        "es": "Enviar comentarios",
                        "pt-BR": "Total de ativos",
                        "ar": "إجمالي الأصول"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": "Historial",
                        "pt-BR": "Total de Lotes",
                        "ar": "إجمالي العقود"
                    },
                    "totalEarnings": {
                        "zh": "总盈利",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總盈利",
                        "id": "Total Penghasilan",
                        "es": "Guardadas",
                        "pt-BR": "Ganhos totais",
                        "ar": "إجمالي الأرباح"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Beneficio Total ",
                        "pt-BR": "Taxa total de lucro",
                        "ar": "إجمالي معدل الربح"
                    },
                    "tradingAccount": {
                        "zh": "交易账户",
                        "en": "Trade Account",
                        "vi": "Tài Khoản Giao Dịch",
                        "zh-Hant": "交易賬戶",
                        "id": "Akun Transaksi",
                        "es": "Cuenta Trade",
                        "pt-BR": "Conta negociação",
                        "ar": "حساب التداول"
                    },
                    "upgradeToLiveAccount": {
                        "zh": "升级到真实账户",
                        "en": "Upgrade to a live account",
                        "vi": "Nâng cấp lên tài khoản thực",
                        "zh-Hant": "升級到真實賬戶",
                        "id": "Perbarui ke Akun Live",
                        "es": "Upgrade a cuenta Real",
                        "pt-BR": "Atualizar para conta ativa",
                        "ar": "الترقية إلى حساب حقيقي"
                    },
                    "wallet": {
                        "zh": "钱包",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira",
                        "ar": "المحفظة"
                    },
                    "unactivated": {
                        "zh": "未激活",
                        "en": "Unactivated",
                        "vi": "Ngừng kích hoạt",
                        "zh-Hant": "未激活",
                        "id": "Belum Aktif",
                        "es": "Inactivado",
                        "pt-BR": "Desativado",
                        "ar": "غير مفعل"
                    },
                    "deposit": {
                        "zh": "充值",
                        "en": "DEPOSIT",
                        "vi": "KÍ QUỸ",
                        "zh-Hant": "充值",
                        "id": "Setor",
                        "es": "DEPOSITAR",
                        "pt-BR": "Depósito",
                        "ar": "الإيداع"
                    },
                    "withdrawal": {
                        "zh": "提现",
                        "en": "WITHDRAWAL",
                        "vi": "RÚT",
                        "zh-Hant": "提現",
                        "id": "Tarik",
                        "es": "REEMBOLSAR",
                        "pt-BR": "Saque",
                        "ar": "السحب"
                    },
                    "exit": {
                        "zh": "退出",
                        "en": "EXIT",
                        "vi": "THOÁT",
                        "zh-Hant": "退出",
                        "id": "Keluar",
                        "es": "SALIR",
                        "pt-BR": "SAIR",
                        "ar": "خروج"
                    },
                    "grantCredit": {
                        "zh": "信用赠金",
                        "en": "Grant for credit",
                        "vi": "Cấp tín dụng",
                        "zh-Hant": "信用贈金",
                        "id": "Bonus Kredit",
                        "es": "Solicitar crédito",
                        "pt-BR": "Conceder crédito",
                        "ar": "The copy is no longer in use"
                    },
                    "freeDeposit": {
                        "zh": "可用保证金",
                        "en": "Free Deposit",
                        "vi": "Margin Tự Do",
                        "zh-Hant": "可用保證金",
                        "id": "Deposit Gratis",
                        "es": "Depósito Gratis",
                        "pt-BR": "Depósito livre",
                        "ar": "إيداع مجاني"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin Level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel Margen",
                        "pt-BR": "Nível da margem",
                        "ar": "مستوى الهامش"
                    },
                    "volume": {
                        "zh": "交易手数",
                        "en": "Volume",
                        "vi": "Giá trị",
                        "zh-Hant": "交易手數",
                        "id": "Volume",
                        "es": "Volumen",
                        "pt-BR": "Volume",
                        "ar": "الحجم"
                    },
                    "tip1": {
                        "zh": "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易账户。",
                        "en": "The earnings you gained with the master and the agent will be deposited in the wallet，You can choose to withdrawal or transfer to the trading account.",
                        "vi": "Thu nhập bạn kiếm được với bậc thầy và đại lý sẽ được gửi vào ví ， Bạn có thể chọn rút tiền hoặc chuyển khoản vào tài khoản giao dịch.",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易賬戶。",
                        "id": " Komisi yang anda dapatkan dari Master dan Agen anda akan dimasukkan ke Dompet. Anda dapat memindahkan dana tersebut ke akun trading atau ditarik ",
                        "es": "Las ganancias obtenidas vía Master o agente serán depositadas en su wallet，Puede seleccionar reembolsar o transferir a cuenta trading.",
                        "pt-BR": "Os ganhos que você ganhou com o mestre e o agente serão depositados na carteira，você pode optar por retirada ou transferir para a conta de negociação.",
                        "ar": "سيتم إيداع الأرباح التي كسبتها مع الأستاذ والوكيل في المحفظة، يمكنك اختيار سحبها أو تحويلها إلى حساب التداول."
                    },
                    "quickOpenAccount": {
                        "zh": "快捷开户",
                        "en": "Open account",
                        "vi": "Mở tài khoản",
                        "zh-Hant": "快捷開戶",
                        "id": "Buka Akun",
                        "es": "Abrir cuenta",
                        "pt-BR": "Abrir uma conta",
                        "ar": "فتح حساب"
                    },
                    "applyToMaster": {
                        "zh": "申请成为高手",
                        "en": "Apply to be a master",
                        "vi": "Chấp nhận như một bậc thầy",
                        "zh-Hant": "申請成為高手",
                        "id": "Daftar menjadi Master",
                        "es": "Solicitud ser un Master",
                        "pt-BR": "Solicitar para ser um mestre",
                        "ar": "اطلب أن تصبح أستاذًا"
                    },
                    "tip2": {
                        "zh": "恭喜您已开通TigerWit体验金账户",
                        "en": "Congratulations on opening the TigerWit demo account",
                        "vi": "Chúc mừng bạn đã mở thành công tài khoản trải nghiệm trên TigerWit",
                        "zh-Hant": "恭喜您已開通TigerWit體驗金賬戶",
                        "id": "Selamat, anda telah membuka Akun Pengalaman",
                        "es": "Felicidades por abrir una cuenta de Práctica TigerWit",
                        "pt-BR": "Parabéns por abrir sua conta de teste TigerWit",
                        "ar": "خالص التهاني على فتح حسابك التجريبي مع TigerWit"
                    },
                    "tip3": {
                        "zh": "体验金账户体验期限为30天，过期后账户资金将被清除，建议尽快升级到真实账户。",
                        "en": "Your demo account is valid for 30 days. Virtual funds will be cleared from this account 30 days after opening. You can upgrade to a live account at any time.",
                        "vi": "Tài khoản trải nghiệm của bạn sẽ có hiệu lực trong 30 ngày. Tiền ảo sẽ bị xóa khỏi tài khoản này 30 ngày sau khi mở. Bạn có thể nâng cấp lên tài khoản thực bất kỳ lúc nào.",
                        "zh-Hant": "體驗金賬戶體驗期限為30天，過期後賬戶資金將被清除，建議盡快升級到真實賬戶。",
                        "id": "Akun pengelaman anda akan berlaku selama 30 hari. Dana virtual akan dihapus secara otomatis setelah 30 hari. Anda dapat membuka Akun Live kapanpun anda inginkan.",
                        "es": "Su cuenta de Práctica tiene una caducidad de 30 días. Los fondos virtuales se eliminarán de esta cuenta 30 días después de la apertura. Puede upgrade a cuenta Real en cualquier momento.",
                        "pt-BR": "Sua conta teste é válida por 30 dias. Fundos virtuais serão limpados de sua conta 30 dias após a abertura. Você pode fazer o upgrade para uma conta ativa a qualquer momento.",
                        "ar": "حسابك التجريبي صالح لمدة 30 يومًا. سيتم حذف الأموال الافتراضية من هذا الحساب بعد 30 يومًا من فتحه. يمكنك الترقية إلى حساب حقيقي في أي وقت."
                    },
                    "tip4": {
                        "zh": "请注意：体验金账户资金及盈利不可提现。",
                        "en": "Please note: demo account funds and profits are not available.",
                        "vi": "Vui lòng chú ý: Quỹ và lợi nhuận của tài khoản trải nghiệm sẽ không có thực.",
                        "zh-Hant": "請註意：體驗金賬戶資金及盈利不可提現。",
                        "id": "Catatan: Saldo di akun pengalaman tidak tersedia.",
                        "es": "Por favor, note: los fondos de la cuenta de práctica y los beneficios no están disponibles.",
                        "pt-BR": "Favor notar: fundos e lucros da conta teste não estão disponíveis.",
                        "ar": "يرجى الملاحظة: أموال وأرباح الحساب التجريبي غير متاحة"
                    },
                    "tip5": {
                        "zh": "升级为真实账户只需完成以下操作：",
                        "en": "Upgrading to a live account only requires the following steps: ",
                        "vi": "Để nâng cấp lên thành tài khoản thực chỉ cần làm theo các bước sau:",
                        "zh-Hant": "升級為真實賬戶只需完成以下操作：",
                        "id": "Untuk memperbarui akun menjadi Akun Live, silahkan ikuti langkah berikut ini:",
                        "es": "Upgrade a cuenta Real sólo requiere los siguientes pasos: ",
                        "pt-BR": "Fazer o upgrade para uma conta ativa somente requer os seguintes passos:",
                        "ar": "الترقية إلى حساب حقيقي لا تحتاج إلا للخطوات التالية:"
                    },
                    "tip6": {
                        "zh": "完整填写您的个人信息并通过审核；",
                        "en": "Complete and verify your personal information;",
                        "vi": "Hoàn thành và xác nhận thông tin cá nhân của bạn;",
                        "zh-Hant": "完整填寫您的個人信息並通過審核；",
                        "id": "Lengkapi dan verifikasi data anda.",
                        "es": "Complete y verifique su información personal;",
                        "pt-BR": "Complete e verifique suas informações pessoais;",
                        "ar": "استكمال معلوماتك الشخصية وتأكيدها؛"
                    },
                    "depositToActivate": {
                        "zh": "充值激活账户。",
                        "en": "Deposit to activate the account.",
                        "vi": "Sao Chép.",
                        "zh-Hant": "充值激活賬戶。",
                        "id": "Isi dana untuk mengaktifkan akun",
                        "es": "Deposite para activar la cuenta.",
                        "pt-BR": "Deposite para ativar a conta.",
                        "ar": "قم بالإيداع من أجل تنشيط الحساب."
                    },
                    "tip7": {
                        "zh": "TigerWit真实交易账户",
                        "en": "TigerWit Live trading account",
                        "vi": "Tài khoản giao dịch Thực của TigerWit",
                        "zh-Hant": "TigerWit真實交易賬戶",
                        "id": "Akun Trading Live TigerWit",
                        "es": "TigerWit Cuenta de Trading Real",
                        "pt-BR": "Conta de negociação do TigerWit Live",
                        "ar": "حساب تداول حقيقي من TigerWit"
                    },
                    "tip8": {
                        "zh": "您离交易还差两步：1.上传身份审核 2.入金",
                        "en": "You are two steps away from transaction: 1.Upload identity audit 2.Deposit",
                        "vi": "Bạn còn cách hai bước từ giao dịch: 1.Tải lên nhận dạng kiểm toán 2.Kí quỹ",
                        "zh-Hant": "您離交易還差兩步：1.上傳身份審核 2.入金",
                        "id": " Hanya perlu 2 langkah untuk bisa trading : 1. Unggah dokumen identitas, 2. Isi dana ",
                        "es": "Está Usted a dos pasos de la transacción: 1.Subir auditoría de identidad 2.Deposite",
                        "pt-BR": "Você está a duas etapas da transação: 1.Upload da auditoria de identidade 2.Depósito",
                        "ar": "أنت على بعد خطوتين فقط من التداول: 1- تحميل مراجعة الهوية  2- الإيداع"
                    },
                    "tip9": {
                        "zh": "即刻入金，立即领取$1000红包！",
                        "en": "Deposit now to get $1000 coupon!",
                        "vi": "Gửi tiền ngay để nhận được 1000 đô la điểm thưởng",
                        "zh-Hant": "即刻入金，立即領取$1000紅包！",
                        "id": "Isi dana sekarang juga untuk mendapatkan kupon senilai 1000$",
                        "es": "¡Deposite ahora y obtenga un cupón de $1000!",
                        "pt-BR": "Deposite agora para receber cupom de $ 1000!",
                        "ar": "قم بالإيداع الآن لتحصل على قسيمة بمبلغ 1000 دولار!"
                    },
                    "tip10": {
                        "zh": "TigerWit保护客户资金安全。",
                        "en": "TigerWit protect the safety of customer funds.",
                        "vi": "TigerWit bảo vệ quỹ an toàn của khách hàng",
                        "zh-Hant": "TigerWit保護客戶資金安全。",
                        "id": "TigerWit melindungi keamanan dana nasabah",
                        "es": "TigerWit protege la seguridad de los fondos de los clientes.",
                        "pt-BR": "A TigerWit protege a segurança dos fundos do cliente.",
                        "ar": "تحمي TigerWit سلامة وأمان أموال العملاء."
                    },
                    "tip11": {
                        "zh": "客户资金完全与公司资金隔离，保存在独立银行账户中，确保属于客户的资金不会被用于任何其他目的。",
                        "en": "Customer funds are completely segregated from company funds and kept in separate bank accounts to ensure that funds belonging to customers are not used for any other purpose.",
                        "vi": "Quỹ khách hàng được tách biệt hoàn toàn khỏi quỹ của công ty và được giữ trong các tài khoản ngân hàng riêng biệt để đảm bảo rằng các quỹ thuộc về khách hàng không được sử dụng cho bất kỳ mục đích nào khác.",
                        "zh-Hant": "客戶資金完全與公司資金隔離，保存在獨立銀行賬戶中，確保屬於客戶的資金不會被用於任何其他目的。",
                        "id": " Dana nasabah akan berada direkening yang terpisah dari rekening perusahaan untuk memastikan bahwa dana milik nasabah tidak digunakan untuk tujuan yang lain. ",
                        "es": "Los fondos de los clientes están completamente separados de los fondos de la compañía y se mantienen en cuentas bancarias segregadas para garantizar que los fondos de los clientes no se utilicen para ningún otro propósito.",
                        "pt-BR": "Os fundos dos clientes são completamente segregados dos fundos da empresa e mantidos em contas bancárias separadas para garantir que os fundos pertencentes aos clientes não sejam usados para qualquer outra finalidade.",
                        "ar": "يتم فصل أموال العملاء فصلاً تامًا عن أموال الشركة والاحتفاظ بها في حسابات مصرفية مستقلة من أجل ضمان عدم استخدام الأموال الخاصة بالعملاء في أي أغراض أخرى."
                    },
                    "tip12": {
                        "zh": "去实名认证",
                        "en": "To complete ID verification",
                        "vi": "Hoàn thành xác nhận ID",
                        "zh-Hant": "去實名認證",
                        "id": "Lengkapi verifikasi ID",
                        "es": "Para completar la verificación ID",
                        "pt-BR": "Para concluir a verificação de identidade",
                        "ar": "لاستكمال التحقق من الهوية"
                    },
                    "tip13": {
                        "zh": "您尚未开通任何账户，请先开户",
                        "en": "You have not opened any account, please open it first",
                        "vi": "Bạn đã không mở bất kỳ tài khoản nào, vui lòng mở cái đầu tiên",
                        "zh-Hant": "您尚未開通任何賬戶，請先開戶",
                        "id": "Anda belum membuka akun. Silahkan buka akun terlebih dahulu",
                        "es": "No ha abierto ninguna cuenta, por favor, ábrala primero",
                        "pt-BR": "Você não abriu nenhuma conta, abra-a primeiro",
                        "ar": "لم تفتح أي حساب، يرجى الفتح أولاً"
                    },
                    "tip14": {
                        "zh": "您当前的账户类型不支持使用该功能，请及时升级账户",
                        "en": "Your current account type does not support using this function, please update the account in time",
                        "vi": "Loại tài khoản hiện tại của bạn không hỗ trợ sử dụng chức năng này, vui lòng cập nhật tài khoản kịp thời",
                        "zh-Hant": "您當前的賬戶類型不支持使用該功能，請及時升級賬戶",
                        "id": " Jenis akun anda saat ini tidak dapat menggunakan fitur ini, silahkan perbarui akun anda.",
                        "es": "Su tipo de cuenta actual no admite el uso de esta función, actualice la cuenta a tiempo",
                        "pt-BR": "Seu tipo de conta atual não suporta o uso dessa função. Atualize a conta a tempo",
                        "ar": "نوع حسابك الحالي لا يدعم استخدام هذه الوظيفة، يرجى تحديث الحساب في الموعد المحدد."
                    },
                    "tip15": {
                        "zh": "认证信息已提交，正在审核中",
                        "en": "The verification information has been submitted and is under review",
                        "vi": "Thông tin xác nhận đã được gửi đi và đang trong quá trình xem xét",
                        "zh-Hant": "認證信息已提交，正在審核中",
                        "id": "Data untuk verifikasi telah terkirim dan sedang dalam proses peninjauan",
                        "es": "La información de verificación ha sido enviada y está revisándose.",
                        "pt-BR": "As informações de verificação foram enviadas e estão sob revisão",
                        "ar": "تم إرسال معلومات التحقق وهي الآن قيد المراجعة."
                    },
                    "auditHour": {
                        "zh": "审核时间",
                        "en": "Audit hour",
                        "vi": "Giờ kiểm toán",
                        "zh-Hant": "審核時間",
                        "id": "Jam Pemeriksaan",
                        "es": "Hora de auditoria",
                        "pt-BR": "Hora de auditoria",
                        "ar": "ساعة المراجعة"
                    },
                    "auditHourM": {
                        "zh": "审核时间：",
                        "en": "Audit hour: ",
                        "vi": "Giờ kiểm toán: ",
                        "zh-Hant": "審核時間：",
                        "id": "Jam pemeriksaan: ",
                        "es": "Hora de auditoria: ",
                        "pt-BR": "Hora de auditoria: ",
                        "ar": "ساعة المراجعة:"
                    },
                    "tip16": {
                        "zh": "工作日10:00-18:00：将在30分钟左右完成审核",
                        "en": "Your information has been succesfully submitted. ",
                        "vi": "Chúng tôi rất vui được thông báo với bạn rằng thông tin của bạn đã được gửi. ",
                        "zh-Hant": "工作日10:00-18:00：將在30分鐘左右完成審核",
                        "id": " Hari kerja 10:00 - 18:00: pemeriksaan biasanya selesai dalam waktu 30 menit ",
                        "es": "Le comunicamos que su información ha sido enviada. ",
                        "pt-BR": "Nós informamos com prazer que a sua informação foi enviada.",
                        "ar": "تم إرسال المعلومات الخاصة بك بنجاح"
                    },
                    "tip17": {
                        "zh": "工作日18:00以后：将在21:00、23:00统一审核；23:00后认证的将在次日审核",
                        "en": "our compliance team will verify your account within 24 hours.",
                        "vi": "Nhóm giám sát của chúng tôi sẽ xác minh tài khoản của bạn trong vòng 24 giờ.",
                        "zh-Hant": "工作日18:00以後：將在21:00、23:00統壹審核；23:00後認證的將在次日審核",
                        "id": " Hari kerja setelah 18:00: akan diperiksa pukul 21:00 dan 23:00",
                        "es": "Nuestro equipo de compliance verificará su cuenta en una plazo de 24 horas.",
                        "pt-BR": "Nossa equipe de conformidade verificará sua conta em até 24 horas.",
                        "ar": "سيقوم فريق الامتثال بالشركة بالتحقق من حسابك في غضون 24 ساعة."
                    },
                    "tip18": {
                        "zh": "非工作日时间：将在10:00、16:00、22:00统一审核；22:00后认证的将在次日审核",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "非工作日時間：將在10:00、16:00、22:00統壹審核；22:00後認證的將在次日審核",
                        "id": " Sertifikasi setelah pukul 22:00 akan di periksa keesokan hari ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": " "
                    },
                    "tip19": {
                        "zh": "请留意查询您的审核状态。",
                        "en": "If there is any more information required, you will be contacted by phone or email shortly.",
                        "vi": "Nếu có thêm thông tin cần thiết, bạn sẽ được liên lạc qua điện thoại hoặc email.",
                        "zh-Hant": "請留意查詢您的審核狀態。",
                        "id": " Silahkan cek status peninjauan anda",
                        "es": "Si requerimos más información le contactaremos por teléfono o email.",
                        "pt-BR": "Se houver mais informações a serem solicitadas, você será contatado por telefone ou e-mail.",
                        "ar": "إذا كانت هناك حاجة لمزيد من المعلومات، سيتم الاتصال بك عن طريق الهاتف أو البريد الإلكتروني في غضون فترة قصيرة."
                    },
                    "accountNumber": {
                        "zh": "账号",
                        "en": "Account number",
                        "vi": "Số tài khoản",
                        "zh-Hant": "帳號",
                        "id": "Nomor Akun",
                        "es": "Número cuenta",
                        "pt-BR": "Número da conta",
                        "ar": "رقم الحساب"
                    },
                    "tip20": {
                        "zh": "恭喜您已开通TigerWit真实交易账户",
                        "en": "Congratulations on opening your TigerWit real transaction account",
                        "vi": "Chúc mừng bạn đã mở tài khoản giao dịch thật của TigerWit",
                        "zh-Hant": "恭喜您已開通TigerWit真實交易賬戶",
                        "id": " Selamat, anda telah membuka akun Live",
                        "es": "Felicidades por abrir su cuenta Real de transacciones TigerWit",
                        "pt-BR": "Parabéns por abrir sua conta de transações reais TigerWit",
                        "ar": "خالص التهاني على فتح حساب التداول الحقيقي مع TigerWit"
                    },
                    "questionnaire": {
                        "zh": "投资信息确认",
                        "en": "Questionnaire",
                        "vi": "Bảng câu hỏi",
                        "zh-Hant": "投資信息確認",
                        "id": "Daftar Pertanyaan",
                        "es": "Cuestionario",
                        "pt-BR": "Questionário",
                        "ar": "استطلاع رأي"
                    },
                    "tip21": {
                        "zh": "由于受最高监管的约束，需要您提供相关信息，我们只询问与开户相关的问题。您的资料始终保密，绝不公开。",
                        "en": "Due to the highest regulatory constraints, you need to provide relevant information, we only ask questions related to account opening. Your information is always confidential and never public.",
                        "vi": "Do các ràng buộc pháp lý cao nhất, bạn cần cung cấp thông tin liên quan, chúng tôi chỉ đặt câu hỏi liên quan đến việc mở tài khoản. Thông tin của bạn luôn được bảo mật và không bao giờ công khai.",
                        "zh-Hant": "由於受最高監管的約束，需要您提供相關信息，我們只詢問與開戶相關的問題。您的資料始終保密，絕不公開。",
                        "id": " Sesuai dengan persyaratan hukum, anda harus memberikan informasi yang valid, kami hanya akan mengajukan pertanyaan yang berkaitan dengan pembukaan akun. Informasi anda akan selalu terjaga dan aman.",
                        "es": "Debido a requisitos regulatorios, debe proporcionarnos información relevante; sólo hacemos preguntas relacionadas con la apertura de su cuenta. Su información es siempre confidencial y nunca se hará pública.",
                        "pt-BR": "Devido às mais altas restrições regulatórias, você precisa fornecer informações relevantes, só fazemos perguntas relacionadas à abertura de contas. Sua informação é sempre confidencial e nunca pública.",
                        "ar": "بمقتضى أشد القيود التنظيمية، يجب عليك تقديم المعلومات ذات الصلة، نحن نسأل فقط أسئلة متعلقة بفتح الحساب. المعلومات الخاصة بك ستظل سرية دائمًا ولن يتم نشرها أبدًا."
                    },
                    "occupationBelongsTo": {
                        "zh": "您的职业所属行业",
                        "en": "Your occupation belongs to",
                        "vi": "Nghề nghiệp của bạn thuộc về",
                        "zh-Hant": "您的職業所屬行業",
                        "id": "Pekerjaan anda",
                        "es": "Su ocupación se enmarca en",
                        "pt-BR": "Sua ocupação pertence a",
                        "ar": "وظيفتك تنتمي إلى"
                    },
                    "tip22": {
                        "zh": "您已完成KYC认证，感谢您的参与，请继续完成下一步操作。",
                        "en": "You have completed KYC certification, thank you for your participation, please continue to complete the next step.",
                        "vi": "Bạn đã hoàn thành chứng nhận KYC, cảm ơn bạn đã tham gia, vui lòng tiếp tục hoàn tất bước tiếp theo.",
                        "zh-Hant": "您已完成KYC認證，感謝您的慘與，請繼續完成下壹步操作。",
                        "id": " Anda telah menyelesaikan verifikasi KYC, terima kasih atas partisipasinya, silahkan lanjutkan ke proses berikutnya. ",
                        "es": "Ha completado la certificación KYC, gracias por su colaboración; por favor, continúe para completar el siguiente paso.",
                        "pt-BR": "Você completou a certificação KYC, obrigado pela sua participação, por favor, continue a próxima etapa.",
                        "ar": "قد استكملت وثائق اعرف عميلك، نشكرك على المشاركة، يرجى المتابعة لاستكمال الخطوة التالية."
                    },
                    "tip24": {
                        "zh": "请确保证件边框完整、大小适中、字迹清晰、亮度均衡、证件信息与填写信息一致、证件未过期、已满18周岁。",
                        "en": "We require colour copies of a government-issued drive license, passport and ID card. For ID cards and drive license, we require copies of the card’s front and back.",
                        "vi": "Chúng tôi yêu cầu bản sao màu giấy phép lái xe cấp bởi chính phủ, hộ chiếu và thẻ ID. Với thẻ ID và bằng lái xe, chúng tôi yêu cầu bản sao mặt trước và mặt sau.",
                        "zh-Hant": "請確保證件邊框完整、大小適中、字迹清晰、亮度均衡、證件資訊與填寫資訊一致、證件未過期、已滿18周歲。",
                        "id": " Mohon masukkan informasi yang relevan. Pastikan bahwa ini adalah anda karena informasi ini tidak dapat diubah lagi apabila sudah masuk ke status peninjauan. ",
                        "es": "Requerimos copias a color emitidas por el gobierno de una licencia de conducir, pasaporte y/o tarjeta ID. Para las tarjetas ID y la licencia de conducir, requerimos copias de la parte delantera y trasera de la tarjeta.",
                        "pt-BR": "Nós exigimos cópias coloridas de uma carteira de motorista emitida pelo governo, passaporte e carteira de identidade. Para cartões de identificação e licença de unidade, exigimos cópias da frente e verso do cartão.",
                        "ar": "نحن نحتاج إلى صور ملونة لرخصة قيادة أو جواز سفر أو بطاقة هوية صادرة من جهة حكومية. بالنسبة لبطاقة الهوية ورخصة القيادة، نحن نحتاج إلى صور للوجهين الأمامي والخلفي للبطاقة."
                    },
                    "realName": {
                        "zh": "真实姓名",
                        "en": "Real name",
                        "vi": "Tên thật",
                        "zh-Hant": "真實姓名",
                        "id": "Nama asli",
                        "es": "Nombre real",
                        "pt-BR": "Nome real",
                        "ar": "الاسم الحقيقي"
                    },
                    "lastName": {
                        "zh": "姓",
                        "en": "last name",
                        "vi": "tên",
                        "zh-Hant": "姓",
                        "id": "Nama Depan",
                        "es": "Nombre real",
                        "pt-BR": "Sobrenome",
                        "ar": "الاسم الأخير"
                    },
                    "firstName": {
                        "zh": "名",
                        "en": "first name",
                        "vi": "họ",
                        "zh-Hant": "名",
                        "id": "Nama Belakang",
                        "es": "Nombre real",
                        "pt-BR": "Primeiro nome",
                        "ar": "الاسم "
                    },
                    "fillName": {
                        "zh": "请输入真实姓名",
                        "en": "Please fill in name",
                        "vi": "Điền tên vào",
                        "zh-Hant": "請輸入真實姓名",
                        "id": "Silahkan masukkan nama",
                        "es": "Por favor, ingrese el nombre",
                        "pt-BR": "Por favor, preencher o nome",
                        "ar": "يرجى إدخال الاسم"
                    },
                    "certificateType": {
                        "zh": "证件类型",
                        "en": "Certificate type",
                        "vi": "Loại chứng chỉ",
                        "zh-Hant": "證件類型",
                        "id": "Jenis dokumen",
                        "es": "Tipo de certificado",
                        "pt-BR": "Tipo de certificação",
                        "ar": "نوع الشهادة"
                    },
                    "selectCertificateType": {
                        "zh": "请选择您的证件类型",
                        "en": "Please select type of certificate",
                        "vi": "Vui lòng chọn loại chứng chỉ",
                        "zh-Hant": "請選擇您的證件類型",
                        "id": "silahkan pilih Jenis dokumen",
                        "es": "Seleccione tipo de certificado",
                        "pt-BR": "Por favor, selecione o tipo de certificado",
                        "ar": "يرجى تحديد نوع الشهادة"
                    },
                    "certificateNumber": {
                        "zh": "证件号码",
                        "en": "Certificate number",
                        "vi": "Số chứng chỉ",
                        "zh-Hant": "證件號碼",
                        "id": "Nomor dokumen",
                        "es": "Número certificado",
                        "pt-BR": "Número do certificado",
                        "ar": "رقم الشهادة"
                    },
                    "fillCertificateNumber": {
                        "zh": "请输入证件号码",
                        "en": "Please fill in the ID number",
                        "vi": "Vui lòng nhập số ID",
                        "zh-Hant": "請輸入證件號碼",
                        "id": "Silahkan masukkan nomor ID",
                        "es": "Por favor, rellene el número ID",
                        "pt-BR": "Favor inserir seu número de identidade",
                        "ar": "يرجى إدخال رقم الهوية"
                    },
                    "certificateNumberExists": {
                        "zh": "证件号码已存在",
                        "en": "Certificate number already exists",
                        "vi": "Số chứng chỉ đã tồn tại",
                        "zh-Hant": "證件號碼已存在",
                        "id": "Nomor dokumen telah terdaftar",
                        "es": "El número de certificado ya existe",
                        "pt-BR": "Número de certificado existente",
                        "ar": "رقم الشهادة موجود بالفعل"
                    },
                    "enterGender": {
                        "zh": "请输入性别",
                        "en": "Please enter gender",
                        "vi": "Vui lòng chọn giới tính",
                        "zh-Hant": "請輸入性別",
                        "id": "Silahkan masukkan jenis kelamin",
                        "es": "Por favor, ingrese género",
                        "pt-BR": "Favor inserir gênero",
                        "ar": "يرجى إدخال الجنس"
                    },
                    "enterBirthday": {
                        "zh": "请输入您的生日",
                        "en": "Please enter birthday",
                        "vi": "Vui lòng chọ ngày sinh",
                        "zh-Hant": "請輸入您的生日",
                        "id": "Silahkan masukkan tanggal lahir",
                        "es": "Por favor, ingrese cumpleaños",
                        "pt-BR": "Favor inserir data de aniversário",
                        "ar": "يرجى إدخال تاريخ الميلاد"
                    },
                    "birthday": {
                        "zh": "生日",
                        "en": "Birthday",
                        "vi": "Ngày sinh",
                        "zh-Hant": "生日",
                        "id": "Tanggal Lahir",
                        "es": "Cumpleaños",
                        "pt-BR": "Data de Aniversário",
                        "ar": "يوم الميلاد"
                    },
                    "uploadFrontSide": {
                        "zh": "点击上传证件正面",
                        "en": "Upload front side",
                        "vi": "Tải lên mặt trước",
                        "zh-Hant": "點擊上傳證件正面",
                        "id": "Unggah halaman depan",
                        "es": "Cargar el lado frontal",
                        "pt-BR": "Carregar o lado da frente",
                        "ar": "تحميل الوجه الأمامي"
                    },
                    "submitFrontSide": {
                        "zh": "请提交证件正面",
                        "en": "Please submit front side",
                        "vi": "Vui lòng gửi mặt trước",
                        "zh-Hant": "請提交證件正面",
                        "id": "Silahkan kirim halaman depan",
                        "es": "Por favor, envíe la parte frontal",
                        "pt-BR": "Favor inserir tamanho da fonte",
                        "ar": "يرجى إرسال الوجه الأمامي"
                    },
                    "uploading": {
                        "zh": "正在上传",
                        "en": "Uploading",
                        "vi": "Đang tải lên",
                        "zh-Hant": "正在上傳",
                        "id": "Mengunggah",
                        "es": "Subiendo",
                        "pt-BR": "Atualizando",
                        "ar": "التحميل"
                    },
                    "uploadSuccessfully": {
                        "zh": "上传成功",
                        "en": "Upload successfully",
                        "vi": "Tải thành công",
                        "zh-Hant": "上傳成功",
                        "id": "Unggah Sukses",
                        "es": "Subir con éxito",
                        "pt-BR": "Upload feito com sucesso",
                        "ar": "تم التحميل بنجاح"
                    },
                    "tip25": {
                        "zh": "提交失败！请提交小于 2MB 的图片",
                        "en": "Upload failed! Please submit pictures less than 2MB",
                        "vi": "Tải lên thất bại! Vui lòng gửi ảnh dung lượng ít hơn 2MB",
                        "zh-Hant": "提交失敗！請提交小於 2MB 的圖片",
                        "id": "Gagal mengunggah! Mohon kirim foto dengan ukuran dibawah 2MB",
                        "es": "¡Subida fallida! Por favor envíe imágenes de menos de 2MB",
                        "pt-BR": "Erro no upload! Favor enviar imagens com menos de 2MB",
                        "ar": "تعذر التحميل! يرجى إرسال صور ذو حجم أقل من 2 م.ب"
                    },
                    "uploadBackSide": {
                        "zh": "点击上传证件反面",
                        "en": "Upload back side",
                        "vi": "Tải lên mặt sau",
                        "zh-Hant": "點擊上傳證件反面",
                        "id": "Unggah halaman belakang",
                        "es": "Cargar la parte trasera",
                        "pt-BR": "Carregar o verso",
                        "ar": "تحميل الوجه الخلفي"
                    },
                    "submitBackSide": {
                        "zh": "请提交证件背面",
                        "en": "Please submit back side",
                        "vi": "Vui lòng gửi mặt sau",
                        "zh-Hant": "請提交證件背面",
                        "id": "Silahkan kirim halaman belakang",
                        "es": "Por favor, envíe el reverso",
                        "pt-BR": "Favor inserir parte de trás",
                        "ar": "يرجى إرسال الوجه الخلفي"
                    },
                    "tip26": {
                        "zh": "目前只支持2MB的PNG、JPG格式",
                        "en": "Currently only 2MB PNG, JPG format is supported",
                        "vi": "Hiện tại, chỉ hỗ trợ định dạng PNG, JPG 2MB",
                        "zh-Hant": "目前只支持2MB的PNG、JPG格式",
                        "id": " Hanya mendukung format PNG, JPG dan maksimal 2MB",
                        "es": "Actualmente sólo se admiten 2MB PNG, formato JPG",
                        "pt-BR": "No momento, somente os formatos JPG e PNG de até 2MB são suportados",
                        "ar": "في الوقت الحالي نحن ندعم فقط الصور بصيغتي JPG و PNG والتي لا يتجاوز حجمها 2 م.ب"
                    },
                    "uploadWait": {
                        "zh": "文件上传中,请耐心等待",
                        "en": "Uploading, please wait a minute.",
                        "vi": "Đang tải lên, vui lòng đợi trong chốc lát.",
                        "zh-Hant": "文件上傳中,請耐心等待",
                        "id": "Sedang Mengunggah, mohon menunggu",
                        "es": "Cargando, por favor, espere un minuto.",
                        "pt-BR": "Fazendo upload, favor esperar um instante",
                        "ar": "قيد التحميل، يرجى الانتظار دقيقة"
                    },
                    "systemBusy": {
                        "zh": "系统繁忙",
                        "en": "System is busy",
                        "vi": "Hệ thống đang bận",
                        "zh-Hant": "系統繁忙",
                        "id": "Sistem sedang sibuk",
                        "es": "El sistema esta ocupado",
                        "pt-BR": "Sistema está ocupado",
                        "ar": "النظام مشغول"
                    },
                    "tip27": {
                        "zh": "您上传的身份证正在审核中，审核通过后，我们将通过短信或邮件的方式通知您，请注意查收",
                        "en": "The ID card you uploaded is under review. After the audit, we will inform you by SMS or email, please note to check.",
                        "vi": "Thẻ ID bạn đã tải lên đang được xem xét. Sau khi kiểm toán, chúng tôi sẽ thông báo cho bạn bằng tin nhắn SMS hoặc email, xin lưu ý để kiểm tra.",
                        "zh-Hant": "您上傳的身份證正在審核中，審核通過後，我們將通過短信或郵件的方式通知您，請註意查收",
                        "id": "Dokumen anda sedang diperiksa. Setelah pemeriksaan, kami akan mengirimkan notifikasi melalui SMS atau email",
                        "es": "La tarjeta de identificación que subiste está bajo revisión. Después de la auditoría, le informaremos por SMS o email, por favor esté pendiente.",
                        "pt-BR": "O cartão de ID que você enviou está em revisão. Após a auditoria, iremos informá-lo por SMS ou e-mail, por favor, observe para verificar.",
                        "ar": "بطاقة الهوية التي قمت بتحميلها قيد المراجعة بعد المراجعة، سنقوم بإبلاغك عن طريق رسالة نصية قصيرة أو رسالة بريد إلكتروني، يرجى المراجعة."
                    },
                    "tip28": {
                        "zh": "注意：审核期间并不影响您的正常交易",
                        "en": "Note: the audit period does not affect your normal transactions",
                        "vi": "Ghi chú: giai đoạn kiểm tra không ảnh hưởng đến các giao dịch bình thường của bạn",
                        "zh-Hant": "註意：審核期間並不影響您的正常交易",
                        "id": "Catatan : Proses pemeriksaan tidak akan mengganggu transaksi anda ",
                        "es": "Nota: el período de auditoría no afecta sus transacciones normales",
                        "pt-BR": "Nota: o período de auditoria não afeta suas transações normais",
                        "ar": "ملحوظة: فترة المراجعة لا تؤثر على المعاملات الطبيعية الخاصة بك"
                    },
                    "dear": {
                        "zh": "尊敬的",
                        "en": "Dear",
                        "vi": "Kính gửi",
                        "zh-Hant": "尊敬的",
                        "id": "Yang Terhormat,",
                        "es": "Estimado",
                        "pt-BR": "Caro/a",
                        "ar": "عزيزي"
                    },
                    "tip29": {
                        "zh": "您好，您上传的身份信息已经通过审核，请放心交易",
                        "en": "The identity information you uploaded has been approved. Please feel free to trade.",
                        "vi": "Thông tin danh tính bạn tải lên đã được chấp thuận. Vui long giao dịch.",
                        "zh-Hant": "您好，您上傳的身份信息已經通過審核，請放心交易",
                        "id": "Informasi identitas anda telah disetujui. Silahkan bertransaksi ",
                        "es": "La información de identidad subida ha sido aprobada. Por favor, puede empezar a operar cuando desee.",
                        "pt-BR": "As informações de identidade enviadas por você foram aprovadas. Por favor, sinta-se livre para negociar.",
                        "ar": "تمت الموافقة على معلومات الهوية التي قمت بتحميلها يرجى عدم التردد في التداول"
                    },
                    "transaction": {
                        "zh": "交易提醒",
                        "en": "Transaction",
                        "vi": "Giao dịch",
                        "zh-Hant": "交易提醒",
                        "id": "Transaksi",
                        "es": "Transacción",
                        "pt-BR": "Transação",
                        "ar": "المعاملة"
                    },
                    "system": {
                        "zh": "系统提醒",
                        "en": "System",
                        "vi": "Hệ thống",
                        "zh-Hant": "系統提醒",
                        "id": "Sistem",
                        "es": "Sistema",
                        "pt-BR": "Sistema",
                        "ar": "النظام"
                    },
                    "systemMessages": {
                        "zh": "系统消息",
                        "en": "System Messages",
                        "vi": "Tin nhắn hệ thống",
                        "zh-Hant": "系統消息",
                        "id": "Pesan Sistem",
                        "es": "Mensajes del Sistema",
                        "pt-BR": "Mensagens do sistema",
                        "ar": "رسائل النظام"
                    },
                    "tip34": {
                        "zh": "您的账户尚未完成认证审核，将无法进行交易和资金相关操作，点击此处完成审核。",
                        "en": "This account has not yet been certified, trading and money-related operations will not be possible，click here to complete the review.",
                        "vi": "Tài khoản này chưa được chứng nhận, giao dịch và các hoạt động liên quan đến tiền bạc sẽ không thể thực hiện được ， nhấp vào đây để hoàn thành việc xem xét.",
                        "zh-Hant": "您的賬戶尚未完成認證審核，將無法進行交易和資金相關操作，點擊此處完成審核。",
                        "id": " Akun ini belum diverifikasi, tidak dapat melakukan trading ataupun transaksi lainnya. Klik disini untuk verifikasi ",
                        "es": "Esta cuenta aún no ha sido certificada, las operaciones de trading y relacionadas con el dinero no serán posibles，haga clic aquí para completar la revisión.",
                        "pt-BR": "Esta conta ainda não foi certificada, operações comerciais e relacionadas a dinheiro não serão possíveis, clique aqui para concluir a revisão.",
                        "ar": "لم يتم اعتماد هذا الحساب حتى الآن، لا يمكن إجراء التداول والعمليات المتعلقة بالأموال، انقر هنا لاستكمال المراجعة."
                    },
                    "tip35": {
                        "zh": "您当前账户为体验金账户，升级至真实账户只需两步：",
                        "en": "Your current account is an experiential account, which can be upgraded to live account in two steps: ",
                        "vi": "Tài khoản hiện tại của bạn là tài khoản trải nghiệm, có thể được nâng cấp lên tài khoản thực theo hai bước: ",
                        "zh-Hant": "您當前賬戶為體驗金賬戶，升級至真實賬戶只需兩步：",
                        "id": " Akun anda saat ini adalah akun demo. Anda dapat memperbarui akun anda menjadi akun live hanya dengan 2 langkah saja:",
                        "es": "Su cuenta actual es una cuenta de práctica, la cual puede convertirse en cuenta real en dos pasos: ",
                        "pt-BR": "Sua conta atual é uma conta experimental, que pode ser atualizada para a conta ativa em duas etapas:",
                        "ar": "حسابك الحالي هو حساب تجريبي، ويمكنك ترقيته إلى حساب حقيقي في خطوتين:"
                    },
                    "tip36": {
                        "zh": "完整填写个人信息",
                        "en": "Complete personal information",
                        "vi": "Hoàn thành thông tin cá nhân",
                        "zh-Hant": "完整填寫個人信息",
                        "id": "Lengkapi informasi pribadi",
                        "es": "Complete Información personal ",
                        "pt-BR": "Informações pessoais completas",
                        "ar": "استكمال معلوماتك الشخصية"
                    },
                    "loginWithVerificationCode": {
                        "zh": "验证码登录",
                        "en": "Login with verification code",
                        "vi": "Đăng nhập bằng mã xác nhận",
                        "zh-Hant": "驗證碼登錄",
                        "id": "Masuk menggunakan Kode Verifikasi",
                        "es": "Iniciar sesión con código de verificación",
                        "pt-BR": "Login com código de verificação",
                        "ar": "تسجيل الدخول باستخدام رمز التحقق"
                    },
                    "loginAgain": {
                        "zh": "请重新登录",
                        "en": "Please login again",
                        "vi": "Vui lòng đăng nhập lại",
                        "zh-Hant": "請重新登錄",
                        "id": "Silahkan masuk kembali",
                        "es": "Por favor, vuelva a iniciar sesión",
                        "pt-BR": "Por favor faça login novamente",
                        "ar": "يرجى تسجيل الدخول مرة أخرى"
                    },
                    "tip37": {
                        "zh": "外汇市场波动较大，基于您的年龄考虑，小老虎提醒您慎重交易。",
                        "en": "Foreign exchange market fluctuations, based on your age considerations, TigeWit reminds you to trade carefully.",
                        "vi": "Biến động của thị trường ngoại hối, dựa trên cân nhắc tuổi của bạn, TigeWit nhắc bạn giao dịch cẩn thận.",
                        "zh-Hant": "外匯市場波動較大，基於您的年齡考慮，小老虎提醒您慎重交易。",
                        "id": " Pasar valuta asing sangat berfluktuasi, oleh karena itu TigerWit mengingatkan anda untuk selalu berhati-hati dalam trading. ",
                        "es": "Las fluctuaciones del mercado de divisas, y en consideración de su edad, TigeWit le recuerda que debe operar responsablemente.",
                        "pt-BR": "Flutuações do mercado cambial, com base em suas considerações de idade, TigeWit lembra-lhe para negociar com cuidado.",
                        "ar": "تقلبات أسواق العملات الأجنبية، وفقًا لاعتبارات عمرك، تذكرك TigeWit بأن تتوخى الحرص في التداول."
                    },
                    "loginFailed": {
                        "zh": "登录失败",
                        "en": "Login failed",
                        "vi": "Đăng nhập lỗi",
                        "zh-Hant": "登錄失敗",
                        "id": "Gagal Masuk",
                        "es": "Error de inicio de sesion",
                        "pt-BR": "Falha na autenticação",
                        "ar": "تعذر تسجيل الدخول"
                    },
                    "loginSucc": {
                        "zh": "登录成功",
                        "en": "Login successfully",
                        "vi": "Đăng nhập thành công",
                        "zh-Hant": "登錄成功",
                        "id": "Berhasil Masuk",
                        "es": "Iniciar sesión correctamente",
                        "pt-BR": "Login com Sucesso",
                        "ar": "تم تسجيل الدخول بنجاح"
                    },
                    "getFailedQuote": {
                        "zh": "获取报价失败",
                        "en": "Failed to get quote",
                        "vi": "Thất bại khi lấy bảng báo giá",
                        "zh-Hant": "獲取報價失敗",
                        "id": "Gagal mendapatkan harga",
                        "es": "Error al obtener la cotización",
                        "pt-BR": "Não foi possível obter cotação",
                        "ar": "تعذر الحصول على سعر"
                    },
                    "requestQuotation": {
                        "zh": "请求报价品种",
                        "en": "Request for quotation",
                        "vi": "Yêu cầu bảng báo giá",
                        "zh-Hant": "請求報價品種",
                        "id": "Permintaan harga penawaran",
                        "es": "Solicitud cotización",
                        "pt-BR": "Solicitação de cotação",
                        "ar": "طلب سعر"
                    },
                    "tip38": {
                        "zh": "开通真实账户后，将不再支持开通体验金账户",
                        "en": "After opening live account, it will no longer be supported to open demo account",
                        "vi": "Sau khi mở tài khoản thực, tài khoản sẽ không còn được hỗ trợ để mở tài khoản trải nghiệm",
                        "zh-Hant": "開通真實賬戶後，將不再支持開通體驗金賬戶",
                        "id": " Setelah membuka Akun Live, akun pengalaman anda tidak dapat lagi digunakan ",
                        "es": "Después de abrir una cuenta real, ya no será posible abrir una cuenta de práctica",
                        "pt-BR": "Depois de abrir uma conta ativa, ela não terá mais suporte para abrir a conta da trilha",
                        "ar": "بعد فتح حساب حقيقي، لن يكون هناك دعم بعد ذلك لفتح حساب تجريبي"
                    },
                    "experienceAccount": {
                        "zh": "体验金账户",
                        "en": "Demo account",
                        "vi": "Tài khoản demo",
                        "zh-Hant": "體驗金賬戶",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta de práctica",
                        "pt-BR": "Conta teste",
                        "ar": "حساب تجريبي"
                    },
                    "tip39_1": {
                        "zh": " ",
                        "en": "Resend(",
                        "vi": "Gửi lại(",
                        "zh-Hant": " ",
                        "id": "Kirim ulang",
                        "es": "Reenviar(",
                        "pt-BR": "Reenvio(",
                        "ar": "إعادة الإرسال("
                    },
                    "tip39_2": {
                        "zh": "秒后重新获取",
                        "en": "s)",
                        "vi": "s)",
                        "zh-Hant": "秒後重新獲取",
                        "id": "s)",
                        "es": "s)",
                        "pt-BR": "s)",
                        "ar": "(S"
                    },
                    "tip40_1": {
                        "zh": "由于您没有登录，无法",
                        "en": "You are not logged in, cannot ",
                        "vi": "Bạn không đăng nhập được, không thể ",
                        "zh-Hant": "由於您沒有登錄，無法",
                        "id": "Anda belum masuk, tidak dapat",
                        "es": "No ha iniciado sesión, no puede ",
                        "pt-BR": "Você não está logado, não é possível",
                        "ar": "لم يتم تسجيل دخولك، لا يمكن"
                    },
                    "tip40_2": {
                        "zh": "高手",
                        "en": " master",
                        "vi": " Bậc Thầy",
                        "zh-Hant": "高手",
                        "id": "Master",
                        "es": " master",
                        "pt-BR": "mestre",
                        "ar": "أستاذ"
                    },
                    "unableOperate_1": {
                        "zh": "无法进行",
                        "en": "Unable to operate ",
                        "vi": "Không thể hoạt động ",
                        "zh-Hant": "無法進行",
                        "id": "Tidak dapat melakukan transaksi ",
                        "es": "Incapaz operar",
                        "pt-BR": "Impossibilitado de operar",
                        "ar": "يتعذر التشغيل"
                    },
                    "unableOperate_2": {
                        "zh": "操作",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "操作",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": " "
                    },
                    "agentManagement": {
                        "zh": "代理商管理后台",
                        "en": "Partners portal",
                        "vi": "Quản lý đại lý",
                        "zh-Hant": "代理商管理後臺",
                        "id": "Manajemen Agen",
                        "es": "Gestión Agente",
                        "pt-BR": "Gerenciamento de agente",
                        "ar": "بوابة الشركاء"
                    },
                    "unableCountry": {
                        "zh": "【暂不提供该国家的相关服务。】",
                        "en": "We are unable to offer trading <br> services for this country.",
                        "vi": "Chúng tôi không thể cung cấp dịch vụ giao dịch <br> cho quốc gia này.",
                        "zh-Hant": "【暫不提供該國家的相關服務。】",
                        "id": " Kami tidak menyediakan layanan trading <br> untuk negara ini ",
                        "es": "No podemos ofrecer servicios de trading <br> para este país.",
                        "pt-BR": "Nós somos incapazes de oferecer serviços de <br> negociação para este país.",
                        "ar": "لا يمكننا تقديم <br>خدمات التداول لهذا البلد."
                    },
                    "cardEgTitle": {
                        "zh": "拍摄示例",
                        "en": "Shooting examples",
                        "vi": "ví dụ vượt qua",
                        "zh-Hant": "拍攝示例",
                        "id": "Contoh Gambar",
                        "es": "Ejemplos ",
                        "pt-BR": "Enviando exemplos",
                        "ar": "أمثلة لالتقاط الصور"
                    },
                    "cardEgTip1": {
                        "zh": "标准",
                        "en": "Standard",
                        "vi": "Tiêu chuẩn",
                        "zh-Hant": "標準",
                        "id": "Standar",
                        "es": "Estándar",
                        "pt-BR": "Padrão",
                        "ar": "Standard"
                    },
                    "cardEgTip2": {
                        "zh": "图像过小",
                        "en": "Picture small",
                        "vi": "Hình nhỏ",
                        "zh-Hant": "圖像過小",
                        "id": "Gambar terlalu kecil",
                        "es": "Imagen pequeña",
                        "pt-BR": "Imagem pequena",
                        "ar": "الصورة صغيرة"
                    },
                    "cardEgTip3": {
                        "zh": "图像模糊",
                        "en": "Picture fuzzy",
                        "vi": "Hình bị mờ",
                        "zh-Hant": "圖像模糊",
                        "id": "Gambar buram",
                        "es": "Imagen borrosa",
                        "pt-BR": "Imagem distorcida",
                        "ar": "الصورة غير واضحة"
                    },
                    "cardEgTip4": {
                        "zh": "照片反光",
                        "en": "Picture reflective",
                        "vi": "Hình bị phản chiếu",
                        "zh-Hant": "照片反光",
                        "id": "Gambar memantulkan cahaya",
                        "es": "Imagen reflectante",
                        "pt-BR": "Imagem reflexiva",
                        "ar": "الصورة منعكسة"
                    },
                    "processM": {
                        "zh": "流程：",
                        "en": "Process:",
                        "vi": "Quá trình: ",
                        "zh-Hant": "流程：",
                        "id": "Proses:",
                        "es": "Procesar:",
                        "pt-BR": "Processo:",
                        "ar": "الإجراء:"
                    },
                    "downloadContract": {
                        "zh": "下载协议",
                        "en": "download the contract",
                        "vi": "tải hợp đồng",
                        "zh-Hant": "下載協議",
                        "id": "Unduh Kontrak",
                        "es": "descargar contrato",
                        "pt-BR": "baixe o contrato",
                        "ar": "تحميل العقد"
                    },
                    "printSign": {
                        "zh": "打印纸质版 签署协议",
                        "en": "print to sign",
                        "vi": "in ra để kí",
                        "zh-Hant": "打印紙質版 簽署協議",
                        "id": "Cetak untuk tanda tangan",
                        "es": "imprimir para firmar",
                        "pt-BR": "imprimir para assinar",
                        "ar": "اطبع لإدراج توقيعك"
                    },
                    "uploadContract": {
                        "zh": "拍照上传协议",
                        "en": "upload the signed contract",
                        "vi": "tải hợp đồng đã kí lên",
                        "zh-Hant": "拍照上傳協議",
                        "id": "Unggah kontrak yang sudah ditanda tangani",
                        "es": "suba el contrato firmado",
                        "pt-BR": "carregar o contrato assinado",
                        "ar": "تحميل العقد الموقع"
                    },
                    "uploadContract2": {
                        "zh": "上传协议",
                        "en": "upload the signed contract",
                        "vi": "Gửi lên Hợp Đồng",
                        "zh-Hant": "上傳協議",
                        "id": "Unggah Kontrak",
                        "es": "Subir el Contrato",
                        "pt-BR": "carregar o contrato assinado",
                        "ar": "تحميل العقد الموقع"
                    },
                    "rejectedReason": {
                        "zh": "协议被驳回，原因：",
                        "en": "The contract has been rejected. Reason: ",
                        "vi": "Hợp đồng đã bị từ chối. Lý do: ",
                        "zh-Hant": "協議被駁回，原因：",
                        "id": "Kontrak ditolak. Alasan: ",
                        "es": "El contrato ha sido rechazado. Razón: ",
                        "pt-BR": "O contrato foi rejeitado. Motivo: ",
                        "ar": "تم رفض العقد السبب:"
                    },
                    "tryAgain": {
                        "zh": "您可以重新尝试",
                        "en": "Please try again.",
                        "vi": "Vui lòng thử lại",
                        "zh-Hant": "您可以重新嘗試",
                        "id": "Silahkan coba kembali.",
                        "es": "Por favor, pruebe de nuevo",
                        "pt-BR": "Por favor, tente novamente.",
                        "ar": "يرجى إعادة المحاولة."
                    },
                    "uploadNote": {
                        "zh": "提示：请上传个人信息页、银行账户信息页和最后签名页。",
                        "en": "Tip: please upload the personal information page, bank account information page and the last signature page.",
                        "vi": "Lời khuyên: vui lòng tải lên trang thông tin cá nhân trang địa chỉ ngân hàng và chữ kí mới nhất.",
                        "zh-Hant": "提示：請上傳個人信息頁、銀行帳護信息頁和最後簽名頁。",
                        "id": "Tips : silahkan unggah halaman data pribadi, informasi rekening bank dan halaman terakhir yang bertanda tangan.",
                        "es": "Consejo: por favor, suba la página de información personal, la página de información cuenta de banco y la última página con la firma.",
                        "pt-BR": "Dica: faça o upload da página de informações pessoais, da página de informações da conta bancária e da última página de assinatura.",
                        "ar": "نصيحة: يرجى تحميل صفحة المعلومات الشخصية وصفحة معلومات الحساب المصرفي وصفحة التوقيع الأخير."
                    },
                    "downloadContractBtn": {
                        "zh": "点击下载协议",
                        "en": "Click download",
                        "vi": "Nhấp để tải",
                        "zh-Hant": "點擊下載協議",
                        "id": "Klik untuk unduh",
                        "es": "Click descarga",
                        "pt-BR": "Clique em download",
                        "ar": "انقر للتحميل"
                    },
                    "saveSubmit": {
                        "zh": "保存并提交审核",
                        "en": "Save and submit",
                        "vi": "Lưu và nộp",
                        "zh-Hant": "保存並提交審核",
                        "id": "Simpan dan kirim",
                        "es": "Guardar y enviar",
                        "pt-BR": "Guardar e submeter",
                        "ar": "حفظ وإرسال"
                    },
                    "personalInformationPage": {
                        "zh": "个人信息页",
                        "en": "Personal information page",
                        "vi": "Trang thông tin cá nhân",
                        "zh-Hant": "個人信息頁",
                        "id": "Halaman data pribadi",
                        "es": "Página información personal",
                        "pt-BR": "Página de informações pessoais",
                        "ar": "صفحة المعلومات الشخصية"
                    },
                    "bankAccountPage": {
                        "zh": "银行账户信息页",
                        "en": "Bank account information page",
                        "vi": "Trang địa chỉ ngân hàng",
                        "zh-Hant": "銀行帳護信息頁",
                        "id": "Halaman informasi rekening bank",
                        "es": "Página información cuenta banco",
                        "pt-BR": "Página de informações da conta bancária",
                        "ar": "صفحة معلومات الحساب المصرفي"
                    },
                    "bankAccountPageExplain": {
                        "zh": "（如没有，可不填写）",
                        "en": "(If not, you can leave it blank)",
                        "vi": "(Nếu không bạn có thể để trống nó)",
                        "zh-Hant": "（如沒有，可不填寫）",
                        "id": "(Jika tidak, kosongkan saja)",
                        "es": "(Si no, puede dejarlo en blanco)",
                        "pt-BR": "(Se não, você pode deixar em branco)",
                        "ar": "(إذا لم يكن موجودًا، يمكنك تركه فارغًا)"
                    },
                    "signaturePage": {
                        "zh": "签名页",
                        "en": "Signature page",
                        "vi": "Trang chữ kí",
                        "zh-Hant": "簽名頁",
                        "id": "Halaman bertanda tangan",
                        "es": "Página firma",
                        "pt-BR": "Página de assinatura",
                        "ar": "صفحة التوقيع"
                    },
                    "completelyUpload": {
                        "zh": "请完整上传个人信息页和签名页",
                        "en": "Please upload the personal information page and the signature page completely",
                        "vi": "Vui lòng tải lên đầy đủ trang thông tin cá nhân và trang chữ kí",
                        "zh-Hant": "請完整上傳個人信息頁和簽名頁",
                        "id": "Mohon unggah halaman data pribadi dan halaman bertanda tangan secara lengkap",
                        "es": "Por favor, suba la página de información personal y de la firma completamente",
                        "pt-BR": "Por favor carregue a página de informação pessoal e a página de assinatura completamente",
                        "ar": "يرجى تحميل صفحة المعلومات الشخصية وصفحة التوقيع بالكامل"
                    },
                    "contractSuccess": {
                        "zh": "协议提交成功",
                        "en": "The contract has been submitted successfully",
                        "vi": "Hợp đồng đã được gửi thành công",
                        "zh-Hant": "協議提交成功",
                        "id": "Kontrak telah berhasil dikirim",
                        "es": "El contrato ha sido enviado con éxito",
                        "pt-BR": "O contrato foi enviado com sucesso",
                        "ar": "تم إرسال العقد بنجاح"
                    }
                },
                "tip": {
                    "tip1": {
                        "zh": "身份证号为 15 或 18 位数字，最后一位为字母时用大写 X",
                        "en": "ID number is 15 or 18 digits, with a capital X when it for the last letter",
                        "vi": "Số ID là 15 hoặc 18 chữ số, với chữ X khi chữ cái cuối cùng",
                        "zh-Hant": "身份證號為 15 或 18 位數字，最後壹位為字母時用大寫 X",
                        "id": " Nomor ID terdiri dari 15 hingga 18 angka dan terdapat huruf X di digit terakhir ",
                        "es": "El número de identificación es de 15 o 18 dígitos, con una X mayúscula cuando aparece la última letra",
                        "pt-BR": "Número de identificação é 15 ou 18 dígitos, com um X maiúsculo quando para a última letra",
                        "ar": "يتكون رقم الهوية من 15 أو 18 رقمًا، مع حرف × كبير عندما يكون الحرف الأخير."
                    },
                    "tip2": {
                        "zh": "手机号码为 1 开头的 11 位数字",
                        "en": "The phone number is 11 digits beginning with 1",
                        "vi": "Số điện thoại là 11 chữ số bắt đầu bằng 1",
                        "zh-Hant": "手機號碼為 1 開頭的 11 位數字",
                        "id": " Nomor telepon dimulai dari angka 62",
                        "es": "El número de teléfono es de 11 dígitos, comenzando con 1",
                        "pt-BR": "O número de telefone é 11 dígitos começando com 1",
                        "ar": "رقم الهاتف يتكون من 11 عددًا ويبدأ بالعدد 1"
                    },
                    "tip3": {
                        "zh": "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        "en": "The input amount must be integer or decimal number greater than zero (no more than two digits after the decimal point)",
                        "vi": "Số tiền đầu vào phải là số nguyên hoặc số thập phân lớn hơn 0 (không quá hai chữ số sau dấu thập phân",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）",
                        "id": " Jumlah yang dimasukkan harus bulat dan lebih dari 0 (tidak melebihi 2 angka dibelakang koma)",
                        "es": "La cantidad de entrada debe ser un número entero o decimal mayor que cero (no más de dos dígitos después del punto decimal)",
                        "pt-BR": "O valor de entrada deve ser um número inteiro ou decimal maior que zero (não mais do que dois dígitos após o ponto decimal)",
                        "ar": "المبلغ الذي يتم إدخاله يجب أن يكون عددًا صحيحًا أو  رقمًا عشريًا وأكبر من الصفر (لا يحتوي على أكثر من رقمين بعد العلامة العشرية)."
                    },
                    "doubleByteCharacter": {
                        "zh": "双字节字符",
                        "en": "Double byte character",
                        "vi": "Ký tự byte kép",
                        "zh-Hant": "雙字節字符",
                        "id": "tipe byte ganda",
                        "es": "Carácter doble byte",
                        "pt-BR": "Caractere de byte duplo",
                        "ar": "رمز ذو بايت مزدوج"
                    },
                    "tip4": {
                        "zh": "邮箱前缀由字母、数字、下划线、减号、点号组成，以字母、数字结尾",
                        "en": "The mailbox prefix consists of letters, Numbers, underscores, minus and dots, and ends with letters and Numbers",
                        "vi": "Tiền tố hộp thư bao gồm các chữ cái, số, dấu gạch dưới, dấu trừ và dấu chấm, và kết thúc bằng chữ cái và số",
                        "zh-Hant": "郵箱前綴由字母、數字、下劃線、減號、點號組成，以字母、數字結尾",
                        "id": " Prefiks kotak surat terdiri dari huruf, angka, garis bawah, minus dan titik, dan diakhiri dengan huruf dan angka",
                        "es": "El prefijo del mailbox consiste en letras, números, guiones bajos, puntos y menos, y termina con letras y números.",
                        "pt-BR": "O prefixo da caixa postal consiste em letras, números, sublinhados, menos e pontos, e termina com letras e números",
                        "ar": "تتكون بادئة صندوق البريد من حروف وأرقام وشرطات تحتية وعلامة ناقص ونقاط، وتنتهي بحروف وأرقام."
                    },
                    "tip5": {
                        "zh": "昵称包含2-16个字符，支持中英文、数字",
                        "en": "Username contains 2-16 characters, support Chinese, English and Numbers",
                        "vi": "Tên người dùng bao gồm 2 đến 16 ký tự, hỗ trợ ngôn ngữ Trung Quốc, Tiếng Anh, và số.",
                        "zh-Hant": "昵稱包含2-16個字符，支持中英文、數字",
                        "id": "Nama pengguna terdiri dari 2-16 huruf, yang dapat disusun dengan huruf alfabet dan angka.",
                        "es": "El nombre de usuario contiene 2-16 caracteres, compatibilidad con Chino, Inglés y Números",
                        "pt-BR": "O nome de utilizador contém 2-16 caracteres, suporta chinês, inglês e números",
                        "ar": "يتكون اسم المستخدم من 2 إلى 16 رمزًا، ويدعم اللغة الصينية واللغة الإنجليزية والأرقام."
                    },
                    "tip6": {
                        "zh": "学校名称包含 4-20 个字符，由汉字、字母组成，超过字符限制的用简称代替",
                        "en": "The school name contains 4-20 characters, which are composed of Chinese characters and letters, use abbreviations when character limit exceeded.",
                        "vi": "Tên trường có chứa 4-20 ký tự, bao gồm các ký tự và chữ cái Trung Quốc, sử dụng chữ viết tắt khi vượt quá giới hạn ký tự.",
                        "zh-Hant": "學校名稱包含 4-20 個字符，由漢字、字母組成，超過字符限制的用間稱代替",
                        "id": " Nama sekolah terdiri dari 4-20 huruf, yang dapat disusun dengan huruf alfabet, gunakan singkatan apabila nama melebihi batas karakter . ",
                        "es": "El nombre contiene de 4 a 20 caracteres, que se componen de caracteres y letras, usa abreviaturas cuando se excede el límite de caracteres.",
                        "pt-BR": "O nome da escola contém de 4 a 20 caracteres, compostos de caracteres e letras chinesas. Use abreviações quando o limite de caracteres for excedido.",
                        "ar": "يتكون اسم المدرسة من 4 إلى 20 رمزًا، والتي تشمل رموزًا وحروفًا صينية، استخدم الاختصارات عندما يزيد الحد الأقصى للرموز."
                    },
                    "tip7": {
                        "zh": "真实姓名由2-20个汉字以及 · 号组成",
                        "en": "The real name consists of 2-20 Chinese characters and ‘·’symbol",
                        "vi": "Tên thật bao gồm 2 đến 20 ký tự và biểu tượng tiếng Trung Quốc.",
                        "zh-Hant": "真實姓名由2-20個漢字以及 · 號組成",
                        "id": "Nama Asli terdiri dari 2-20 huruf, yang dapat disusun dengan huruf alfabet dan simbol ‘·’",
                        "es": "El nombre real consta de 2 a 20 caracteres y el símbolo ‘·’",
                        "pt-BR": "O nome real é composto por 2 a 20 caracteres chineses e o símbolo \"·\"",
                        "ar": "يتكون الاسم الحقيقي من 2 إلى 20 رمزًا صينيًا و رمز ‘·’"
                    },
                    "tip8": {
                        "zh": "银行卡卡号为 12-19 位数字",
                        "en": "Bank card number is 12-19 digits",
                        "vi": "Số tài khoản thẻ là 12 đến 19 chữ số",
                        "zh-Hant": "銀行卡卡號為 12-19 位數字",
                        "id": "Rekening bank terdiri dari 12-19 angka",
                        "es": "Número de tarjeta bancaria es 12-19 dígitos",
                        "pt-BR": "O número do cartão bancário possui 12-19 dígitos",
                        "ar": "رقم البطاقة المصرفية يتكون من 12 إلى 19 عددًا."
                    },
                    "tip9": {
                        "zh": "密码由字母、数字和符号两种及以上组合，长度为 6-15个字符",
                        "en": "A password consists of two or more combinations of letters, Numbers, and symbols and is 6-15 characters long",
                        "vi": "Mật khẩu bao gồm hai hoặc nhiều kết hợp chữ cái, số và ký hiệu và dài từ 6-15 ký tự",
                        "zh-Hant": "密碼由字母、數字和符號兩種及以上組合，長度為 6-15個字符",
                        "id": " Kata sandi terdiri dari 6-15 karakter, yang dapat disusun dengan huruf alfabet, angka, dan simbol ",
                        "es": "Una contraseña consta de dos o más combinaciones de letras, números y símbolos y tiene una longitud de 6-15 caracteres",
                        "pt-BR": "Uma senha consiste em duas ou mais combinações de letras, números e símbolos e tem de 6 a 15 caracteres",
                        "ar": "تتكون كلمة المرور من مزيج يضم حرفين أو أكثر وأرقام ورموز ويتراوح طولها من 6 إلى 15 رمزًا."
                    },
                    "simplifiedChinese": {
                        "zh": "简体中文",
                        "en": "Simplified Chinese",
                        "vi": "Tiếng Trung giản Thể",
                        "zh-Hant": "間體中文",
                        "id": "Mandarin (sederhana)",
                        "es": "Chino Simplificado",
                        "pt-BR": "Chinês simplificado",
                        "ar": "الصينية المبسطة"
                    },
                    "pleaseEnterEnglish": {
                        "zh": "请输入英文",
                        "en": "Please enter English",
                        "vi": "vui lòng nhập Tiếng Anh",
                        "zh-Hant": "請輸入英文",
                        "id": "Mohon Gunakan huruf alfabet",
                        "es": "Por favor, ingrese Inglés",
                        "pt-BR": "Por favor, entre em inglês",
                        "ar": "يرجى الإدخال باللغة الإنجليزية"
                    },
                    "legalSymbol": {
                        "zh": "合法的符号",
                        "en": "Legal symbol",
                        "vi": "Biểu Tượng pháp lý",
                        "zh-Hant": "合法的符號",
                        "id": "Simbol Hukum",
                        "es": "Simbolo legal",
                        "pt-BR": "Símbolo legal",
                        "ar": "رمز قانوني"
                    },
                    "containsIllegalChar": {
                        "zh": "包含非法字符",
                        "en": "Contains illegal characters",
                        "vi": "Bao gồm các ký tự không hợp lệ",
                        "zh-Hant": "包含非法字符",
                        "id": "Berisi karakter yang tidak diperbolehkan",
                        "es": "Contiene caracteres ilegales",
                        "pt-BR": "Contém caracteres ilegais",
                        "ar": "يحتوي على رموز غير قانونية"
                    },
                    "tip10": {
                        "zh": "字符数不符合要求",
                        "en": "The number of characters does not meet the requirement",
                        "vi": "Số lượng ký tự không đáp ứng yêu cầu",
                        "zh-Hant": "字符數不符合要求",
                        "id": " Jumlah karakter tidak sesuai ketentuan ",
                        "es": "El número de caracteres no cumple requisitos",
                        "pt-BR": "O número de caracteres não atende ao requisito",
                        "ar": "عدد الرموز لا يستوفي الاشتراطات"
                    },
                    "tip11": {
                        "zh": "位数不正确或者包含非法字符",
                        "en": "The number of digits is incorrect or contains illegal characters",
                        "vi": "Số chữ số không chính xác hoặc chứa ký tự không hợp lệ",
                        "zh-Hant": "位數不正確或者包含非法字符",
                        "id": " Jumlah angka salah atau berisi karakter yang tidak diperbolehkan ",
                        "es": "El número de dígitos es incorrecto o contiene caracteres ilegales",
                        "pt-BR": "O número de dígitos está incorreto ou contém caracteres ilegais",
                        "ar": "عدد الأرقام غير صحيح أو يحتوي على رموز غير قانونية"
                    },
                    "passwordWeak": {
                        "zh": "密码强度过弱",
                        "en": "Passwords are too weak",
                        "vi": "Mật khẩu quá yếu",
                        "zh-Hant": "密碼強度過弱",
                        "id": "Kata sandi lemah",
                        "es": "Las contraseñas son demasiado débiles",
                        "pt-BR": "As senhas são muito fracas",
                        "ar": "كلمات المرور ضعيفة جدًا"
                    },
                    "tip12_1": {
                        "zh": "请完成第",
                        "en": "Please complete question ",
                        "vi": "Vui lòng hoàn thành câu hỏi ",
                        "zh-Hant": "請完成第",
                        "id": "Silahkan jawab semua pertanyaan ",
                        "es": "Por favor, complete la pregunta ",
                        "pt-BR": "Favor complete a pergunta",
                        "ar": "يرجى استكمال السؤال"
                    },
                    "tip12_2": {
                        "zh": "题：",
                        "en": ": ",
                        "vi": ": ",
                        "zh-Hant": "題：",
                        "id": ": ",
                        "es": ": ",
                        "pt-BR": ":",
                        "ar": ": "
                    },
                    "tip13_1": {
                        "zh": "是否有",
                        "en": "Is the ",
                        "vi": "Đây có phải là ",
                        "zh-Hant": "是否有",
                        "id": "adalah",
                        "es": "Es el ",
                        "pt-BR": "Seria a",
                        "ar": "هل"
                    },
                    "tip13_2": {
                        "zh": "账号？",
                        "en": " account number?",
                        "vi": " Số tài khoản",
                        "zh-Hant": "帳號？",
                        "id": "Nomor akun?",
                        "es": " número de cuenta?",
                        "pt-BR": "número da conta",
                        "ar": "رقم الحساب؟"
                    }
                },
                "tradingAccount": {
                    "title": {
                        "zh": "交易账户",
                        "en": "Trade Account",
                        "vi": "Tài Khoản Giao Dịch",
                        "zh-Hant": "交易賬戶",
                        "id": "Akun Transaksi",
                        "es": "Cuenta Trade",
                        "pt-BR": "Conta negociação",
                        "ar": "حساب التداول"
                    },
                    "totalAssets": {
                        "zh": "资产总额",
                        "en": "Total Assets",
                        "vi": "Tổng các tài sản",
                        "zh-Hant": "資產總額",
                        "id": "Total Aset",
                        "es": "Total Activos",
                        "pt-BR": "Total de ativos",
                        "ar": "إجمالي الأصول"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": "Total Lotes",
                        "pt-BR": "Total de Lotes",
                        "ar": "إجمالي العقود"
                    },
                    "totalEarnings": {
                        "zh": "总盈利",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總盈利",
                        "id": "Total Penghasilan",
                        "es": "Total Ganancias",
                        "pt-BR": "Ganhos totais",
                        "ar": "إجمالي الأرباح"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tổng Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Total Tasa Beneficio",
                        "pt-BR": "Taxa total de lucro",
                        "ar": "إجمالي معدل الربح"
                    },
                    "tradingSubAccounts": {
                        "zh": "交易子账户",
                        "en": "Trade Sub-accounts",
                        "vi": "Giao Dịch Tài Khoản Phụ",
                        "zh-Hant": "交易子賬戶",
                        "id": "Akun Tambahan",
                        "es": "Trade Sub-cuentas",
                        "pt-BR": "Negociar sub-contas",
                        "ar": "حسابات التداول الفرعية"
                    },
                    "createAccount": {
                        "zh": "新建账号",
                        "en": "Create account",
                        "vi": "Tạo Tài Khoản",
                        "zh-Hant": "新建帳號",
                        "id": "Buat Akun",
                        "es": "Crear Cuenta",
                        "pt-BR": "Criar conta",
                        "ar": "إنشاء حساب"
                    },
                    "becomeMaster": {
                        "zh": "申请高手",
                        "en": "Become a master",
                        "vi": "Trở Thành Bậc Thầy",
                        "zh-Hant": "申請高手",
                        "id": "Menjadi Master",
                        "es": "Solicitud Máster",
                        "pt-BR": "Tornar-se um mestre",
                        "ar": "انضم إلى كوكبة الأساتذة"
                    },
                    "netAssetValue": {
                        "zh": "资产净值",
                        "en": "Equity",
                        "vi": "Vốn tức thời",
                        "zh-Hant": "資產凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade",
                        "ar": "الرصيد"
                    },
                    "floatingPL": {
                        "zh": "浮动盈亏",
                        "en": "Floating P/L",
                        "vi": "P/L Nổi",
                        "zh-Hant": "浮動盈虧",
                        "id": "P/L yang masih berjalan",
                        "es": "Flotante P/L",
                        "pt-BR": "P/L flutuante",
                        "ar": "الخسارة/الربح غير المحقق"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel Margen",
                        "pt-BR": "Nível da margem",
                        "ar": "مستوى الهامش"
                    },
                    "depositToActivate": {
                        "zh": "充值激活账户",
                        "en": "Deposit to activate",
                        "vi": "Sao Chép",
                        "zh-Hant": "充值激活賬戶",
                        "id": "aktivasi refill",
                        "es": "Depositar y activar",
                        "pt-BR": "Depositar para ativar",
                        "ar": "قم بالإيداع للتنشيط"
                    },
                    "openTrades": {
                        "zh": "当前交易",
                        "en": "Open Trades",
                        "vi": "Các Giao dịch Hiện tại",
                        "zh-Hant": "當前交易",
                        "id": "Posisi terbuka",
                        "es": "Trades Abiertos",
                        "pt-BR": "Negociações abertas",
                        "ar": "الصفقات المفتوحة"
                    },
                    "tip1": {
                        "zh": "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        "en": "The earnings you gained with the master and the agent will be deducted 20% to the master as a commission. Please refer to the details：",
                        "vi": "Lưu ý: 20% lợi nhuận bạn đạt được khi sao chép bậc thầy sẽ được trừ như là hoa hồng, vui lòng xem phần:",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考：",
                        "id": "Keuntungan yang anda dapatkan dari hasil mengikuti Master akan terpotong sebesar 20% untuk diberikan kepada Master sebagai bentuk komisi:",
                        "es": "El 20% del beneficio obtenido al seguir al Master será deducido como comisión. Por favor, referirse a:",
                        "pt-BR": "Os ganhos que você ganhou com o master e o agente serão deduzidos em 20% ao master como uma comissão. Por favor, consulte os detalhes:",
                        "ar": "سيتم خصم عمولة للأستاذ مقدارها 20% من الأرباح التي كسبتها مع الأستاذ والوكيل. يرجى الرجوع إلى التفاصيل:"
                    },
                    "modifyCopyAmount": {
                        "zh": "修改复制金额",
                        "en": "Modify the Copy Amount",
                        "vi": "Sửa đổi Số Tiền Sao Chép",
                        "zh-Hant": "修改復制金額",
                        "id": "Ubah jumlah Copy ",
                        "es": "Modificar Importe Copy",
                        "pt-BR": "Modifique o valor da cópia",
                        "ar": "تعديل مبلغ النسخ"
                    },
                    "availableAmount": {
                        "zh": "可用金额",
                        "en": "Available Amount",
                        "vi": "Số Tiền Có Sẵn",
                        "zh-Hant": "可用金額",
                        "id": "Saldo yang tersedia",
                        "es": "Importe Disponible",
                        "pt-BR": "Quantidade disponível",
                        "ar": "المبلغ المتاح"
                    },
                    "recommended": {
                        "zh": "建议复制金额",
                        "en": "Recommended",
                        "vi": "Đề nghị",
                        "zh-Hant": "建議復制金額",
                        "id": "Rekomendasi",
                        "es": "Recomendado",
                        "pt-BR": "Recomendado",
                        "ar": "موصى به"
                    },
                    "recommendedM": {
                        "zh": "建议复制金额：",
                        "en": "Recommended: ",
                        "vi": "Đề nghị: ",
                        "zh-Hant": "建議復制金額：",
                        "id": "Rekomendasi",
                        "es": "Recomendado: ",
                        "pt-BR": "Recomendado:",
                        "ar": "موصى به:"
                    },
                    "tip2": {
                        "zh": "若复制金额低于建议复制金额，当高手下单手数较小时，可能会导致跟单失败。",
                        "en": "If the amount of the copy less than the recommended amount, the master's trade is too small, your follow order will be failed.",
                        "vi": "Nếu số lượng bản sao ít hơn số tiền được đề nghị, giao dịch của bậc thầy quá nhỏ, lệnh sao chép của bạn sẽ không thành công.",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時，可能會導致跟單失敗。",
                        "id": " Jika anda memasukkan dana untuk mengikuti Master dengan nilai dibawah rekomendasi, posisi tidak akan terbuka di akun anda apabila Lot trading master kecil. ",
                        "es": "Si el importe copy es inferior a la cantidad recomendada de réplica, cuando el volumen del master es pequeño, su orden de réplica pudiera fallar. ",
                        "pt-BR": "Se o valor da cópia for menor que o valor recomendado, a negociação do mestre é muito pequena, o seu pedido a seguir será reprovado.",
                        "ar": "إذا كان مبلغ النسخ أقل من المبلغ الموصى به، ستكون صفقة الأستاذ التي تنسخها أصغر مما ينبغي، ولن يمكن تنفيذ أمر المتابعة الخاص بك."
                    },
                    "amountInsufficient": {
                        "zh": "可用金额不足",
                        "en": "Available amount is insufficient",
                        "vi": "Số tiền có sẵn không đủ",
                        "zh-Hant": "可用金額不足",
                        "id": "Saldo tidak mencukupi",
                        "es": "Importe disponible es insuficiente",
                        "pt-BR": "Quantidade disponível é insuficiente",
                        "ar": "المبلغ المتاح غير كاف"
                    },
                    "goDeposit": {
                        "zh": "去充值",
                        "en": "deposit",
                        "vi": "Kí quỹ",
                        "zh-Hant": "去充值",
                        "id": "Setor",
                        "es": "depositar",
                        "pt-BR": "Depósito",
                        "ar": "الإيداع"
                    },
                    "cancelFollow": {
                        "zh": "取消复制",
                        "en": "Cancel follow",
                        "vi": "Hủy sao chép",
                        "zh-Hant": "取消復制",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar seguir",
                        "pt-BR": "Cancelar seguida",
                        "ar": "إلغاء المتابعة"
                    },
                    "sureCancelFollow": {
                        "zh": "是否确认取消复制?",
                        "en": "Are you sure to cancel following ?",
                        "vi": "Bạn có chắc muốn hủy sao chép?",
                        "zh-Hant": "是否確定取消復制?",
                        "id": "Apakah anda yakin berhenti mengikuti?",
                        "es": "¿Seguro que desea cancelar siguiendo?",
                        "pt-BR": "Tem certeza de que quer cancelar a seguida ?",
                        "ar": "هل أنت متأكد من أنك تريد إلغاء المتابعة؟"
                    },
                    "tip3": {
                        "zh": "若取消复制关系，您复制此高手的订单可以选择跟随高手平仓或立即强行平仓",
                        "en": "If you cancel the following relationship, the ordor you following the master can be position closing or compulsory position close.",
                        "vi": "Nếu bạn hủy bỏ mối quan hệ sao chép, lệnh bạn sao chép của bậc thầy có thể là đóng vị thế hoặc vị thế bắt buộc đóng.",
                        "zh-Hant": "若取消復制關系，您復制此高手的訂單可以選擇跟隨高手平倉或立即強行平倉",
                        "id": " Apabila anda berhenti mengikuti master, posisi yang masih terbuka dapat ditutup secara manual atau otomatis",
                        "es": "Si cancela la siguiente seguir, la orden que sigue al master puede ser cierre de posiciones o el cierre obligatorio.",
                        "pt-BR": "Se você cancelar o relacionamento a seguir, o pedido seguindo o mestre pode ser o fechamento da posição ou o fechamento obrigatório da posição.",
                        "ar": "إذا قمت بإلغاء علاقة المتابعة، فإن الأوامر التي تقوم بمتابعة الأستاذ فيها قد يتم إغلاقها أو إغلاق المركز بشكل إجباري."
                    },
                    "cancelFollowClose": {
                        "zh": "取消复制并跟随高手平仓",
                        "en": "Cancel and follow the close",
                        "vi": "Hủy và sao chép đóng lệnh",
                        "zh-Hant": "取消復制並跟隨高手平倉",
                        "id": "Berhenti ikuti dan ikuti Master menutup posisi",
                        "es": "Cancelar y seguir cierre.",
                        "pt-BR": "Cancelar e seguir para fechar",
                        "ar": "الإلغاء ومتابعة الإغلاق"
                    },
                    "cancelForceFlat": {
                        "zh": "取消复制并强行平仓",
                        "en": "Cancel and force a flat",
                        "vi": "Hủy và đóng tất cả các lệnh",
                        "zh-Hant": "取消復制並強行平倉",
                        "id": "Berhenti ikuti dan tutup semua posisi terbuka",
                        "es": "Cancelar y forzar flat",
                        "pt-BR": "Cancelar e forçar um flat",
                        "ar": "الإلغاء والخروج بدون ربح أو خسارة"
                    },
                    "successfullyCanceled": {
                        "zh": "取消复制成功",
                        "en": "Successfully canceled",
                        "vi": "Lệnh hủy thành công",
                        "zh-Hant": "取消復制成功",
                        "id": "Tidak lagi mengikuti Master",
                        "es": "Cancelado éxito",
                        "pt-BR": "Cancelado com sucesso",
                        "ar": "تم الإلغاء بنجاح"
                    },
                    "tip4": {
                        "zh": "成为TigerWit高手，获取20%盈利分成",
                        "en": "Become a tigerwit’s master, get 20% profit share",
                        "vi": "Để trở thành bậc thầy của TigerWit, nhận 20% chia sẻ lợi nhuận",
                        "zh-Hant": "成為TigerWit高手，獲取20%盈利分成",
                        "id": "Jadilah seorang Master di TigerWit dan hasilkan keuntungan hingga 20% ",
                        "es": "Conviértase en Master TigerWit, obtenga un 20% del beneficio",
                        "pt-BR": "Tornar-se um mestre da TigerWit, ganhe 20% da divisão de lucros",
                        "ar": "انضم إلى نخبة أساتذة tigerwit، احصل على حصة ربح 20%"
                    },
                    "help": {
                        "zh": "帮助中心",
                        "en": "Help",
                        "vi": "Giúp đỡ",
                        "zh-Hant": "幫助中心",
                        "id": "Bantuan",
                        "es": "Ayuda",
                        "pt-BR": "Ajuda",
                        "ar": "المساعدة"
                    },
                    "contactCustomerService": {
                        "zh": "联系客服",
                        "en": "Contact Customer Service",
                        "vi": "Liên hệ Chăm sóc Khách Hàng",
                        "zh-Hant": "聯系客服",
                        "id": "Hubungi layanan pelanggan",
                        "es": "Contactar Servicio al Cliente",
                        "pt-BR": "Entre em contato com o serviço de atendimento ao cliente",
                        "ar": "اتصل بخدمة العملاء"
                    },
                    "masterAccount": {
                        "zh": "高手账号",
                        "en": "Master account",
                        "vi": "Tài khoản Bậc Thầy",
                        "zh-Hant": "高手帳號",
                        "id": "Akun Master",
                        "es": "Cuenta Master",
                        "pt-BR": "Conta Princ",
                        "ar": "حساب الأستاذ"
                    },
                    "masterLevelCommission": {
                        "zh": "高手等级&佣金",
                        "en": "Master level & Commission",
                        "vi": "Cấp độ của Bậc Thầy và Hoa Hồng",
                        "zh-Hant": "高手等級&傭金",
                        "id": "Tingkat master dan Komisi",
                        "es": "Nivel del Master y comisión",
                        "pt-BR": "Nível do Mestre & Comissão",
                        "ar": "مستوى الأستاذ والعمولة"
                    },
                    "commission": {
                        "zh": "跟单佣金",
                        "en": "Commission",
                        "vi": "Hoa Hồng",
                        "zh-Hant": "跟單傭金",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês",
                        "ar": "العمولة"
                    },
                    "tip5": {
                        "zh": "继续完成以下操作，即可开始交易：",
                        "en": "Continue to complete the following operations to start transaction: ",
                        "vi": "Tiếp tục hoàn tất các hoạt động sau để bắt đầu giao dịch: ",
                        "zh-Hant": "繼續完成以下操作，即可開始交易：",
                        "id": " Untuk mulai bertransaksi silahkan lengkapi proses berikutnya ",
                        "es": "Continuar para completar las siguientes operaciones e iniciar transacción: ",
                        "pt-BR": "Continuar para completar as seguintes operações para iniciar transação:",
                        "ar": "الاستمرار لاستكمال عمليات المتابعة لبدء المعاملة:"
                    },
                    "tip6": {
                        "zh": "您的开户信息已经发送至您的邮箱",
                        "en": "Your account information has been sent to your mailbox",
                        "vi": "Thông tin tài khoản của bạn đã được gửi vào hộp thư của bạn",
                        "zh-Hant": "您的開戶信息已經發送至您的郵箱",
                        "id": "Informasi Akun anda telah dikirim ke kotak surat anda",
                        "es": "La información de su cuenta ha sido enviada a su mailbox.",
                        "pt-BR": "Suas informações da conta foram enviados à sua caixa de entrada",
                        "ar": "تم إرسال معلومات حسابك إلى بريدك الإلكتروني"
                    },
                    "lastMonthCommission": {
                        "zh": "上月分成",
                        "en": "Last month commission",
                        "vi": "Hoa hồng tháng trước",
                        "zh-Hant": "上月分成",
                        "id": "Komisi bulan lalu",
                        "es": "Comisión del mes pasado",
                        "pt-BR": "Comissão do último mês",
                        "ar": "عمولة الشهر الماضي"
                    },
                    "tip7": {
                        "zh": "上一个自然月的分成数据",
                        "en": "Data for the last month commission",
                        "vi": "Dữ liệu hoa hồng tháng trước",
                        "zh-Hant": "上壹個自然月的分成數據",
                        "id": "Data Komisi bulan lalu",
                        "es": "Datos de la comisión del último mes.",
                        "pt-BR": "Dados de comissão do último mês",
                        "ar": "بيانات عمولة الشهر الماضي"
                    },
                    "totalCommission": {
                        "zh": "获得分成总计",
                        "en": "Total commission",
                        "vi": "Tổng hoa hồng",
                        "zh-Hant": "獲得分成總計",
                        "id": "Total Komisi",
                        "es": "Comisión total",
                        "pt-BR": "Total de comissão:",
                        "ar": "إجمالي العمولة"
                    },
                    "tip8": {
                        "zh": "用户开户至今扣除的分成总和",
                        "en": "Total deductions commission of user from open account date",
                        "vi": "Tổng số tiền hoa hồng khấu trừ của người dùng từ ngày mở tài khoản",
                        "zh-Hant": "用戶開戶至今扣除的分成總和",
                        "id": " Total komisi yang dipotong sejak pembukaan akun ",
                        "es": "Total deducciones comisión del usuario desde la fecha apertura de la cuenta abierta.",
                        "pt-BR": "Comissão de deduções total do usuário da data de conta aberta",
                        "ar": "إجمالي العمولات المخصومة للمستخدم من تاريخ فتح الحساب"
                    },
                    "follower": {
                        "zh": "复制者",
                        "en": "Follower",
                        "vi": "Người sao chép",
                        "zh-Hant": "復制者",
                        "id": "Pengikut",
                        "es": "Seguidor",
                        "pt-BR": "Seguidor",
                        "ar": "متابع"
                    },
                    "gainCommission": {
                        "zh": "获得佣金",
                        "en": "Gain commission",
                        "vi": "Hoa hồng thu được",
                        "zh-Hant": "獲得傭金",
                        "id": "Komisi yang dihasilkan",
                        "es": "Ganancias comisión",
                        "pt-BR": "Comissão de ganho",
                        "ar": "ربح عمولة"
                    },
                    "deductedCommission": {
                        "zh": "扣除佣金 ",
                        "en": "Deducted commission",
                        "vi": "Hoa Hồng Đã Khấu Trừ",
                        "zh-Hant": "扣除傭金 ",
                        "id": "Komisi yang dipotong",
                        "es": "Comisión deducida",
                        "pt-BR": "Comissão deduzida",
                        "ar": "العمولة المخصومة"
                    },
                    "cancelCopyTransactions": {
                        "zh": "取消复制交易",
                        "en": "Cancel follow transactions",
                        "vi": "Hủy sao chép các giao dịch",
                        "zh-Hant": "取消復制交易",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar seguir transacciones",
                        "pt-BR": "Cancelar transações seguidas",
                        "ar": "إلغاء معاملات المتابعة"
                    },
                    "cancelCopyFailed": {
                        "zh": "取消复制失败",
                        "en": "Cancel follow failed",
                        "vi": "Hủy sao chép thất bại",
                        "zh-Hant": "取消復制失敗",
                        "id": "Tidak dapat berhenti mengikuti",
                        "es": "Cancelar seguir error",
                        "pt-BR": "Cancelar seguida fracassou",
                        "ar": "تعذر إلغاء المتابعة"
                    },
                    "enterCopyAmount": {
                        "zh": "请输入复制金额",
                        "en": "Please enter copy amount",
                        "vi": "Vui lòng nhập số tiền sao chép",
                        "zh-Hant": "請輸入復制金額",
                        "id": "Silahkan masukkan jumlah copy",
                        "es": "Por favor, ingrese el importe copy",
                        "pt-BR": "Por favor, insira o valor da cópia",
                        "ar": "يرجى إدخال مبلغ النسخ"
                    },
                    "minimumCopyAmount": {
                        "zh": "最小复制金额为",
                        "en": "The minimum copy amount is ",
                        "vi": "Hạn mức nhỏ nhất số tiền sao chép là ",
                        "zh-Hant": "最小復制金額為",
                        "id": "Minimum jumlah copy adalah",
                        "es": "El importe copy es ",
                        "pt-BR": "O valor mínimo da cópia é",
                        "ar": "الحد الأدنى لمبلغ النسخ هو"
                    },
                    "availableCopyAmount": {
                        "zh": "可用复制金额",
                        "en": "Available",
                        "vi": "Hiện có",
                        "zh-Hant": "可用復制金額",
                        "id": "Tersedia",
                        "es": "Disponible",
                        "pt-BR": "Disponível",
                        "ar": "متاح"
                    },
                    "availableCopyAmountM": {
                        "zh": "可用复制金额：",
                        "en": "Available: ",
                        "vi": "Hiện có: ",
                        "zh-Hant": "可用復制金額：",
                        "id": "Tersedia: ",
                        "es": "Disponible: ",
                        "pt-BR": "Disponível:",
                        "ar": "متاح:"
                    },
                    "remainingCopiableFunds": {
                        "zh": "高手剩余可复制金额",
                        "en": "Master remaining",
                        "vi": "Bậc Thầy còn lại",
                        "zh-Hant": "高手剩余可復制金額",
                        "id": "Master yang tersedia",
                        "es": "Master restante",
                        "pt-BR": "Ganhos do Mestre",
                        "ar": "الأستاذ المتبقي"
                    },
                    "remainingCopiableFundsM": {
                        "zh": "高手剩余可复制金额：",
                        "en": "Master remaining: ",
                        "vi": "Bậc Thầy còn lại: ",
                        "zh-Hant": "高手剩余可復制金額：",
                        "id": "Master yang tersedia",
                        "es": "Master restante: ",
                        "pt-BR": "Ganhos do Mestre:",
                        "ar": "الأستاذ المتبقي:"
                    },
                    "tip9": {
                        "zh": "系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        "en": "TigerWit’s automated systems allow you to follow a TigerWit Master via your copy account. If you have not yet set up a copy account the system will generate one automatically for you and all following copy trades will beexecuted from this copy account.",
                        "vi": "Hệ thống tự động của TigerWit cho phép bạn sao chép Bậc Thầy của TigerWit qua tài khoản sao chép của bạn. Nếu bạn chưa thiết lập tài khoản sao chép, hệ thống sẽ tự động tạo một tài khoản cho bạn và tất cả các giao dịch sao chép sau sẽ được thực hiện từ tài khoản sao chép này.",
                        "zh-Hant": "系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；",
                        "id": " Sistem di TigerWit akan membuatkan akun copy secara otomatis untuk anda apabila anda belum pernah membuatnya. Dengan menggunakan Akun Copy, anda dapat mengikuti Master dan semua transaksi copy akan dilakukan melalui Akun Copy tersebut",
                        "es": "Los sistemas automatizados de TigerWit le permiten seguir a un Master TigerWit a través de su cuenta copy. Si aún no tiene una cuenta copy, el sistema le generará una automáticamente, donde todas las operaciones copy se ejecutarán.  ",
                        "pt-BR": "Os sistemas automatizados da TigerWit permitem que você siga um TigerWit Master através de sua conta de cópia. Se você ainda não tiver configurado uma conta de cópia, o sistema gerará uma automaticamente para você e todas as negociações com cópias a seguir serão executadas a partir dessa conta de cópia.",
                        "ar": "تسمح أنظمة TigerWit الآلية لك بمتابعة أساتذة TigerWit عن طريق حساب النسخ. إذا لم تكن قد قمت بإنشاء حساب النسخ حتى الآن، سيقوم النظام بشكل آلي بإنشاء حساب لك وسيتم تنفيذ جميع أوامر نسخ صفقات المتابعة من حساب النسخ هذا."
                    },
                    "tip10": {
                        "zh": "若复制金额低于建议复制金额，可能会导致跟单失败。",
                        "en": "You must enter a copy amount at least equal to the recommended copy amount or the order may not be executed.",
                        "vi": "Bạn phải nhập số tiền sao chép thấp nhất bằng với số tiền sao chép được đề nghị hoặc lệnh sẽ không được thực thi.",
                        "zh-Hant": "若復制金額低於建議復制金額，可能會導致跟單失敗。",
                        "id": "Anda harus memasukkan jumlah dana sesuai rekomendasi, jika tidak posisi bisa tidak tereksekusi ",
                        "es": "Debe introducir un importe copy al menos igual al recomendado; de lo contrario, la orden pudiera no ejecutarse.",
                        "pt-BR": "Você deve inserir um valor de cópia pelo menos igual ao valor de cópia recomendado ou o pedido pode não ser executado.",
                        "ar": "يجب أن تقوم بإدخال مبلغ نسخ يكون على الأقل مساويًا لمبلغ النسخ الموصى به وإلا قد لا يتم تنفيذ الأمر."
                    },
                    "tip11": {
                        "zh": "可用复制金额不足",
                        "en": "Available copy amount is insufficient",
                        "vi": "Số lượng sao chép có sẵn không đủ",
                        "zh-Hant": "可用復制金額不足",
                        "id": " Saldo yang tersedia tidak mencukupi ",
                        "es": "Importe disponible copy es insuficiente",
                        "pt-BR": "Valor de cópia disponível é insuficiente",
                        "ar": "مبلغ النسخ المتاح غير كاف"
                    },
                    "confirm": {
                        "zh": "确认修改",
                        "en": "Confirm",
                        "vi": "Xác nhận",
                        "zh-Hant": "確認修改",
                        "id": "Konfirmasi ",
                        "es": "Confirmar",
                        "pt-BR": "Confirmar",
                        "ar": "تأكيد"
                    },
                    "tip12": {
                        "zh": "您的复制金额低于建议复制金额，有跟单失败的风险，仍然继续复制吗？",
                        "en": "Your copy amount is lower than the suggested copy amount, and there is a risk that the order will fail. Do you still copy?",
                        "vi": "Số tiền sao chép của bạn thấp hơn số tiền sao chép được đề xuất và có rủi ro là lệnh sẽ không thành công. Bạn vẫn sao chép?",
                        "zh-Hant": "您的復制金額低於建議復制金額，有跟單失敗的風險，仍然繼續復制嗎？",
                        "id": " Jumlah dana yang anda masukkan dibawah rekomendasi, ada kemungkinan posisi tidak tereksekusi. Apakah anda ingin melanjutkan copy?",
                        "es": "El importe de su copia es inferior al recomendado, y existe el riesgo de que la orden falle. ¿Desea continuar replicando?",
                        "pt-BR": "Seu valor de cópia é menor do que o valor de cópia sugerido e há um risco de que o pedido falhe. Você ainda copia?",
                        "ar": "مبلغ النسخ الخاص بك أقل من مبلغ النسخ المقترح، وهناك مخاطرة بأن يتعذر تنفيذ الأمر. هل ما تزال تقوم بالنسخ؟"
                    },
                    "suggestedAmount": {
                        "zh": "建议金额",
                        "en": "Suggested amount",
                        "vi": "Số tiền đề nghị",
                        "zh-Hant": "建議金額",
                        "id": "Jumlah yang disarankan",
                        "es": "Importe sugerido",
                        "pt-BR": "Valor sugerido",
                        "ar": "المبلغ المقترح"
                    },
                    "suggestedAmountM": {
                        "zh": "建议金额：",
                        "en": "Suggested amount: ",
                        "vi": "Số tiền đề nghị: ",
                        "zh-Hant": "建議金額：",
                        "id": "Jumlah yang disarankan",
                        "es": "Importe sugerido: ",
                        "pt-BR": "Valor sugerido:",
                        "ar": "المبلغ المقترح:"
                    },
                    "copySuccess": {
                        "zh": "复制成功",
                        "en": "Follow success",
                        "vi": "Sao chép thành công",
                        "zh-Hant": "復制成功",
                        "id": "Berhasil mengikuti",
                        "es": "Seguir al éxito",
                        "pt-BR": "Siga o sucesso",
                        "ar": "نجاح المتابعة"
                    },
                    "copyAmountSucc": {
                        "zh": "复制金额修改成功",
                        "en": "Copy amount modified successfully",
                        "vi": "Đã thay đổi thành công số tiền sao chép",
                        "zh-Hant": "復制金額修改成功",
                        "id": "Berhasil mengubah jumlah dana",
                        "es": "Importe de la copia modificado con éxito",
                        "pt-BR": "Quantidade de cópias modificada com sucesso",
                        "ar": "تم تعديل مبلغ النسخ بنجاح"
                    },
                    "tip13": {
                        "zh": "跟随高手平仓",
                        "en": "Follow master to close positions",
                        "vi": "Sao chép bậc thầy để đóng các vị thế",
                        "zh-Hant": "跟隨高手平倉",
                        "id": "Ikuti penutupan posisi oleh master",
                        "es": "Seguir Master cierre posiciones",
                        "pt-BR": "Siga o mestre para fechar posições",
                        "ar": "قم بمتابعة أحد الأساتذة لإغلاق المراكز"
                    },
                    "tip14": {
                        "zh": "不跟随平仓",
                        "en": "Don’t follow master to close positions",
                        "vi": "Không sao chép bậc thầy để đóng các vị thế",
                        "zh-Hant": "不跟隨平倉",
                        "id": "Jangan ikuti penutupan posisi oleh master",
                        "es": "No seguir al Master cierre posiciones",
                        "pt-BR": "Não siga o mestre para fechar posições",
                        "ar": "لا تقم بمتابعة أحد الأساتذة لإغلاق المراكز"
                    },
                    "tip15": {
                        "zh": "该高手没有持仓订单",
                        "en": "The master has no position order",
                        "vi": "Bậc Thầy không có lệnh",
                        "zh-Hant": "該高手沒有持倉訂單",
                        "id": "Master tidak memiliki posisi saat ini ",
                        "es": "El Master no tiene posiciones",
                        "pt-BR": "O mestre não tem ordem de posição",
                        "ar": "الأستاذ ليس لديه أمر مركز"
                    },
                    "detailInformation": {
                        "zh": "详情信息",
                        "en": "Detail information",
                        "vi": "Thông tin chi tiết",
                        "zh-Hant": "詳情信息",
                        "id": "Detail",
                        "es": "Información detallada",
                        "pt-BR": "Informações detalhadas",
                        "ar": "معلومات تفصيلية"
                    },
                    "followedMaster": {
                        "zh": "所跟高手",
                        "en": "Followed master",
                        "vi": "Đã sao chép bậc thầy",
                        "zh-Hant": "所跟高手",
                        "id": "Master yang diikuti",
                        "es": "Master seguido",
                        "pt-BR": "Mestre seguido",
                        "ar": "الأستاذ الذي يتم متابعته"
                    },
                    "copyAccount": {
                        "zh": "跟单账号",
                        "en": "Copy account",
                        "vi": "Tài khoản Sao Chép",
                        "zh-Hant": "跟單帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta copy",
                        "pt-BR": "Conta de cópia",
                        "ar": "نسخ حساب"
                    },
                    "enterAccountName": {
                        "zh": "请输入账号名称",
                        "en": "Please enter account name",
                        "vi": "Vui lòng nhập tên tài khoản",
                        "zh-Hant": "請輸入帳號名稱",
                        "id": "Silahkan masukkan Nama Akun",
                        "es": "Por favor, ingrese el nombre de la cuenta",
                        "pt-BR": "Por favor, insira o nome da conta",
                        "ar": "يرجى إدخال اسم الحساب"
                    },
                    "tip16": {
                        "zh": "账号名称包含2-8个字符，支持中英文，数字",
                        "en": "The account name contains 2-8 characters and supports both Chinese，English and Numbers.",
                        "vi": "Tên tài khoản bao gồm từ 2 đến 8 ký tự và được hỗ trợ cả tiếng Trung Quốc, Tiếng Anh và con số.",
                        "zh-Hant": "帳號名稱包含2-8個字符，支持中英文，數字",
                        "id": "terdiri dari 2-8 karakter, yang dapat disusun dengan huruf alfabet, dan angka",
                        "es": "El nombre de la cuenta contiene 2-8 caracteres y soporta Chino，Inglés y Números.",
                        "pt-BR": "Noma da conta contém 2 a 8 caracteres, suporta letras chinesas, inglesas e números.",
                        "ar": "يتكون اسم الحساب من 2 إلى 8 رموز، ويدعم اللغة الصينية واللغة الإنجليزية والأرقام."
                    },
                    "details": {
                        "zh": "查看详情",
                        "en": "Details",
                        "vi": "Chi Tiết",
                        "zh-Hant": "查看詳情",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes",
                        "ar": "التفاصيل"
                    },
                    "depositActivation": {
                        "zh": "充值激活",
                        "en": "Deposit activation",
                        "vi": "Kích hoạt tiền gửi",
                        "zh-Hant": "充值激活",
                        "id": "Pengisian dana untuk aktivasi akun",
                        "es": "Activación de depósito",
                        "pt-BR": "Ativação de depósito",
                        "ar": "تنشيط الإيداع"
                    },
                    "newSubAccountRules": {
                        "zh": "新建子账号规则",
                        "en": "New sub-account rules",
                        "vi": "Quy tắc tài khoản phụ mới",
                        "zh-Hant": "新建子帳號規則",
                        "id": "Peraturan untuk Akun Tambahan",
                        "es": "Nuevas reglas sub-cuentas",
                        "pt-BR": "Novas regras de subconta",
                        "ar": "قواعد الحساب الفرعي الجديد"
                    },
                    "tip17": {
                        "zh": "交易账户下最多支持免费创建七个账号；",
                        "en": "Up to 7 sub-accounts can be created for free under the trading account;",
                        "vi": "Có thể tạo tối đa 7 tài khoản phụ miễn phí trong tài khoản giao dịch;",
                        "zh-Hant": "交易賬戶下最多支持免費創建七個帳號；",
                        "id": " 1 akun transaksi dapat memiliki hingga 7 akun tambahan untuk berbagai keperluan;",
                        "es": "Se pueden crear hasta 7 subcuentas de forma gratuita en la cuenta de trading;",
                        "pt-BR": "Até 7 subcontas podem ser criadas gratuitamente na conta de negociação;",
                        "ar": "يمكن إنشاء حتى 7 حسابات فرعية مجانًا تحت حساب التداول؛"
                    },
                    "tip18": {
                        "zh": "新建子账号前需确保已充值激活所有已开通子账号",
                        "en": "Make sure that all the accounts have been deposited and activated before create new sub-account.",
                        "vi": "Đảm bảo rằng tất cả các tài khoản đã được gửi và kích hoạt trước khi tạo tài khoản phụ mới.",
                        "zh-Hant": "新建子帳號前需確保已充值激活所有已開通子帳號",
                        "id": " Pastikan semua akun telah diisi dana dan aktif sebelum membuat akun tambahan yang baru ",
                        "es": "Asegúrese de haber depositado y activado todas las cuentas antes de crear una nueva subcuenta.",
                        "pt-BR": "Certifique-se de que todas as contas foram depositadas e ativadas antes de criar uma nova subconta.",
                        "ar": "تأكد من أن جميع الحسابات قد تم الإيداع فيها وتنشيطها قبل إنشاء حساب فرعي جديد."
                    },
                    "createSubAccount": {
                        "zh": "创建子账号",
                        "en": "Create sub-account",
                        "vi": "Tạo tại khoản phụ",
                        "zh-Hant": "創建子帳號",
                        "id": "Buat akun tambahan",
                        "es": "Crear sub-cuenta",
                        "pt-BR": "Criar sub-conta",
                        "ar": "إنشاء حساب فرعي"
                    },
                    "getVerificationInfo": {
                        "zh": "正在获取您的认证信息",
                        "en": "Getting your verification information",
                        "vi": "Nhận thông tin xác nhận của bạn",
                        "zh-Hant": "正在獲取您的認證信息",
                        "id": "Dapatkan informasi tentang status verifikasi anda ",
                        "es": "Obteniendo su información de verificación",
                        "pt-BR": "Obtendo suas informações de verificação",
                        "ar": "الحصول على معلومات التحقق الخاصة بك"
                    },
                    "tip19": {
                        "zh": "子账号创建成功",
                        "en": "Subaccount was successfully created",
                        "vi": "Tài khoản phụ đã được tạo thành công",
                        "zh-Hant": "子帳號創建成功",
                        "id": "Anda berhasil membuat akun tambahan",
                        "es": "La subcuenta fue creada exitosamente",
                        "pt-BR": "Subconta foi criada com sucesso",
                        "ar": "تم إنشاء الحساب الفرعي بنجاح"
                    },
                    "tip20": {
                        "zh": "子账号创建成功，账号尚未激活，请及时充值",
                        "en": "The subaccount was successfully created. The account has not been activated yet. Please deposit in time.",
                        "vi": "Tài khoản phụ đã được tạo thành công. Tài khoản đã không được kích hoạt. Vui lòng gửi tiền đúng giờ.",
                        "zh-Hant": "子帳號創建成功，帳號尚未激活，請及時充值",
                        "id": "Akun tambahan berhasil dibuat. Silahkan isi dana untuk mengaktifkan akun tersebut..",
                        "es": "La subcuenta fue creada exitosamente. La cuenta aún no se ha activado. Por favor, deposite a tiempo.",
                        "pt-BR": "A subconta foi criada com sucesso. A conta ainda não foi ativada. Por favor, deposite a tempo.",
                        "ar": "تم إنشاء الحساب الفرعي بنجاح لم يتم تنشيط الحساب حتى الآن يرجى الإيداع في الوقت المحدد"
                    },
                    "followerAmount": {
                        "zh": "跟随人数",
                        "en": "Follower amount",
                        "vi": "Số tiền của người sao chép",
                        "zh-Hant": "跟隨人數",
                        "id": "Jumlah pengikut",
                        "es": "Cantidad seguidores",
                        "pt-BR": "Quantidade de seguidor",
                        "ar": "مبلغ المتابع"
                    },
                    "tip21": {
                        "zh": "用户真实入金后平仓产生的收益总数",
                        "en": "Total earnings of closing position after deposit",
                        "vi": "Tổng số tiền kiếm được của lệnh đóng sau khi gửi tiền",
                        "zh-Hant": "用戶真實入金後平倉產生的收益總數",
                        "id": "Total keuntungan dari semua transaksi",
                        "es": "Ganancias totales posiciones cerradas después del depósito",
                        "pt-BR": "Lucro total da posição de fechamento após o depósito",
                        "ar": "إجمالي الأرباح من إغلاق المركز بعد الإيداع"
                    },
                    "tip22": {
                        "zh": "任何通过第三方作弊软件刷取好友邀请奖励，一经发现有权取消红包兑现奖励；",
                        "en": "Any cheating, if discovered by TigerWit, will be disqualified.",
                        "vi": "Bất kỳ hành vi gian lận nào,nếu bị phát hiện bởi TigerWit sẽ bị loại.",
                        "zh-Hant": "任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現有權取消紅包兌現獎勵；",
                        "id": "Akun akan didiskualifikasi apabila TigerWit menemukan segala bentuk kecurangan",
                        "es": "Cualquier trampa, si es descubierta por TigerWit, será descalificada.",
                        "pt-BR": "Qualquer trapaça, se descoberta pelo TigerWit, será desqualificada.",
                        "ar": "إذا اكتشفت TigerWit وجود أي نوع من أنواع الغش، سيتم الاستبعاد."
                    },
                    "tip23": {
                        "zh": "本活动最终解释权归所有。如有疑问，请咨询客服",
                        "en": "The final interpretation of this activity owned by TigerWit. If you have other questions，please contact TigerWit customer service.",
                        "vi": "Giải thích cuối cùng về hoạt động này thuộc về của TigerWit. Nếu bạn có câu hỏi khác, vui lòng liên hệ với dịch vụ khách hàng của TigerWit.",
                        "zh-Hant": "本活動最終解釋權歸所有。如有疑問，請咨詢客服",
                        "id": " Segala keputusan akhir ada di tangan TigerWit dan tidak dapat diganggu gugat. Apabila anda memiliki pertanyaan, silahkan hubungi Layanan Pelanggan",
                        "es": "La interpretación final de esta actividad corresponde a TigerWit. Para cualquier cuestión，por favor contacte con el Servicio al Cliente TigerWit.",
                        "pt-BR": "A interpretação final desta atividade pertence a TigerWit. Se você tiver outras dúvidas, entre em contato com o atendimento ao cliente TigerWit.",
                        "ar": "تمتلك TigerWit حق التفسير النهائي لهذا النشاط. إذا كان لديك أي أسئلة تود طرحها، يرجى الاتصال بخدمة عملاء TigerWit."
                    },
                    "deposited": {
                        "zh": "已入金",
                        "en": "Deposited",
                        "vi": "Đã gửi tiền",
                        "zh-Hant": "已入金",
                        "id": "Dana yang diisi",
                        "es": "Depositado",
                        "pt-BR": "Depositado",
                        "ar": "تم الإيداع"
                    },
                    "noDeposit": {
                        "zh": "未入金",
                        "en": "No Deposit",
                        "vi": "Không gửi tiền",
                        "zh-Hant": "未入金",
                        "id": "Belum ada pengisian dana",
                        "es": "No Depósitos",
                        "pt-BR": "Nenhum depósito",
                        "ar": "لا يوجد إيداع"
                    },
                    "submit": {
                        "zh": "确认提交",
                        "en": "Submit",
                        "vi": "Gửi đi",
                        "zh-Hant": "確認提交",
                        "id": "Kirim",
                        "es": "Enviar",
                        "pt-BR": "Enviar",
                        "ar": "إرسال"
                    },
                    "experienceAccount": {
                        "zh": "体验金账号",
                        "en": "Demo account",
                        "vi": "Tài khoản demo",
                        "zh-Hant": "體驗金帳號",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta de práctica",
                        "pt-BR": "Conta teste",
                        "ar": "حساب تجريبي"
                    },
                    "tradingAccount": {
                        "zh": "自主交易账号",
                        "en": "Trading account",
                        "vi": "Tài khoản giao dịch",
                        "zh-Hant": "自主交易帳號",
                        "id": "Akun Transaksi",
                        "es": "Cuenta de trading",
                        "pt-BR": "Conta de negociação",
                        "ar": "حساب التداول"
                    },
                    "copyAccounts": {
                        "zh": "跟随账号",
                        "en": "Copy account",
                        "vi": "Tài khoản sao chép",
                        "zh-Hant": "跟隨帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta copy",
                        "pt-BR": "Conta de cópia",
                        "ar": "نسخ حساب"
                    },
                    "tradingAccountg": {
                        "zh": "交易账号",
                        "en": "Trading account",
                        "vi": "Tài khoản giao dịch",
                        "zh-Hant": "交易帳號",
                        "id": "Akun Transaksi",
                        "es": "Cuenta de trading",
                        "pt-BR": "Conta de negociação",
                        "ar": "حساب التداول"
                    },
                    "chooseTradingAccount": {
                        "zh": "选择交易账户",
                        "en": "Choose trading account",
                        "vi": "Chọn tài khoản giao dịch",
                        "zh-Hant": "選擇交易賬戶",
                        "id": "Tutup Akun Transaksi",
                        "es": "seleccionar cuenta de trading",
                        "pt-BR": "Escolha uma conta de negociação",
                        "ar": "اختر حساب تداول"
                    },
                    "accountBalance": {
                        "zh": "账户余额",
                        "en": "Account balance",
                        "vi": "Số dư tài khoản",
                        "zh-Hant": "賬戶余額",
                        "id": "Saldo Akun",
                        "es": "Balance cuenta",
                        "pt-BR": "Saldo da conta",
                        "ar": "رصيد الحساب"
                    },
                    "accountBalanceM": {
                        "zh": "账户余额：",
                        "en": "Account balance: ",
                        "vi": "Số dư tài khoản: ",
                        "zh-Hant": "賬戶余額：",
                        "id": "Saldo Akun: ",
                        "es": "Balance cuenta: ",
                        "pt-BR": "Saldo da conta:",
                        "ar": "رصيد الحساب:"
                    },
                    "tip24": {
                        "zh": "您的账户正在审核中, 请等待审核通过再进行此操作",
                        "en": "Account is under review, please re-operation after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng tái hoạt động sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中, 請等待審核通過再進行此操作",
                        "id": "Akun dalam peninjauan, silahkan transaksi kembali setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a operar después de enviar.",
                        "pt-BR": "Conta está sob revisão, por favor, re-operação após o envio",
                        "ar": "الحساب قيد المراجعة، يرجى انتظار الموافقة قبل المتابعة"
                    },
                    "tip25": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行复制操作",
                        "en": "Account is under review, please re-follow after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng sao chép lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行復制操作",
                        "id": "Akun dalam peninjauan, silahkan ulangi mengikuti setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a seguir después de enviar.",
                        "pt-BR": "A conta está em revisão, siga novamente após o envio",
                        "ar": "الحساب قيد المراجعة، يرجى إعادة المتابعة بعد الإرسال"
                    },
                    "tip26": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行提现操作",
                        "en": "Account is under review, please re-withdraw after submission",
                        "vi": "Tài khoản đang được xem xét , vui lòng rút tiền lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行提現操作",
                        "id": "Akun dalam peninjauan, silahkan lakukan penarikan ulang setelah peninjauan selesai",
                        "es": "La cuenta está en proceso de revisión, por favor, vuelva a reembolsar después de enviar.",
                        "pt-BR": "A conta está em revisão, reenvolva novamente após o envio",
                        "ar": "الحساب قيد المراجعة، يرجى إعادة السحب بعد الإرسال"
                    },
                    "tip27": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行充值操作",
                        "en": "Account is under review, please re-deposit after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng gửi tiền lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行充值操作",
                        "id": "Akun dalam peninjauan, silahkan lakukan pengisian dana kembali setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a depositar después de la presentación",
                        "pt-BR": "A conta está em revisão, faça o depósito novamente após o envio",
                        "ar": "الحساب قيد المراجعة، يرجى إعادة الإيداع بعد الإرسال"
                    }
                },
                "details": {
                    "title": {
                        "zh": "详情",
                        "en": "Details",
                        "vi": "Chi Tiết",
                        "zh-Hant": "詳情",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes",
                        "ar": "التفاصيل"
                    },
                    "netAssetValue": {
                        "zh": "资产净值",
                        "en": "Equity",
                        "vi": "Vốn tức thời",
                        "zh-Hant": "資產凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade",
                        "ar": "الرصيد"
                    },
                    "freeMargin": {
                        "zh": "可用保证金",
                        "en": "Free margin",
                        "vi": "Margin Tự Do",
                        "zh-Hant": "可用保證金",
                        "id": "Margin bebas",
                        "es": "Margen libre",
                        "pt-BR": "Margem livre",
                        "ar": "الهامش الحر"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel de margen",
                        "pt-BR": "Nível da margem",
                        "ar": "مستوى الهامش"
                    },
                    "marginLevelM": {
                        "zh": "保证金比例：",
                        "en": "Margin level: ",
                        "vi": "Mức Margin: ",
                        "zh-Hant": "保證金比例：",
                        "id": "Tingkat Margin: ",
                        "es": "Nivel de margen: ",
                        "pt-BR": "Nível da margem:",
                        "ar": "مستوى الهامش:"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": " Total Lotes",
                        "pt-BR": "Total de Lotes",
                        "ar": "إجمالي العقود"
                    },
                    "historicalTotalEarning": {
                        "zh": "历史总收益",
                        "en": "History Total Earnings",
                        "vi": "Lịch Sử Tổng Thu Nhập",
                        "zh-Hant": "歷史總收益",
                        "id": "Riwayat Total Penghasilan",
                        "es": "Historial Ganancias Totales",
                        "pt-BR": "Histórico dos Ganhos Totais",
                        "ar": "تاريخ إجمالي الأرباح"
                    },
                    "floatingPL": {
                        "zh": "浮动盈亏",
                        "en": "Floating P/L",
                        "vi": "P/L Nổi",
                        "zh-Hant": "浮動盈虧",
                        "id": "P/L yang masih berjalan",
                        "es": "P/L Flotante",
                        "pt-BR": "P/L flutuante",
                        "ar": "الخسارة/الربح غير المحقق"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Ganancia Total",
                        "pt-BR": "Taxa total de lucro",
                        "ar": "إجمالي معدل الربح"
                    },
                    "currentTrading": {
                        "zh": "当前交易",
                        "en": "Current Trading",
                        "vi": "Giao dịch Hiện tại",
                        "zh-Hant": "當前交易",
                        "id": "Posisi saat ini",
                        "es": "Trading Actual",
                        "pt-BR": "Negociações atuais",
                        "ar": "التداول الحالي"
                    },
                    "deducted20Note": {
                        "zh": "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        "en": "Note：The 20% profit that you gain by following the master will be deducted as commission. Please refer to: ",
                        "vi": "Lưu ý: 20% lợi nhuận bạn đạt được khi sao chép bậc thầy sẽ được trừ như là hoa hồng, vui lòng xem phần: ",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考：",
                        "id": "Catatan : Keuntungan yang anda dapatkan dari hasil mengikuti Master akan terpotong sebesar 20% untuk diberikan kepada Master sebagai bentuk komisi: ",
                        "es": "Nota：El 20% del beneficio obtenido al seguir al master será deducido como comisión. Por favor, referirse a:",
                        "pt-BR": "Nota: O lucro de 20% que você ganha seguindo o mestre será deduzido como comissão. Por favor, consulte:",
                        "ar": "ملحوظة: سيتم خصم نسبة 20% كعمولة من الأرباح التي تكسبها من متابعة الأستاذ. يرجى الرجوع إلى:"
                    },
                    "operation": {
                        "zh": "操作",
                        "en": "Operation",
                        "vi": "Hoạt động",
                        "zh-Hant": "操作",
                        "id": "Transaksi",
                        "es": "Operación",
                        "pt-BR": "Operação",
                        "ar": "العملية"
                    },
                    "openPrice": {
                        "zh": "开仓价",
                        "en": "Open price",
                        "vi": "Giá Mở",
                        "zh-Hant": "開倉價",
                        "id": "Harga buka",
                        "es": "Precio de apertura",
                        "pt-BR": "Preço de abertura",
                        "ar": "سعر الفتح"
                    },
                    "currentPrice": {
                        "zh": "当前价",
                        "en": "Current price",
                        "vi": "Giá Hiện Tại",
                        "zh-Hant": "當前價",
                        "id": "Harga saat ini",
                        "es": "Precio actual",
                        "pt-BR": "Preço atual",
                        "ar": "السعر الحالي"
                    },
                    "profit": {
                        "zh": "收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "收益",
                        "id": "Laba",
                        "es": "Beneficios",
                        "pt-BR": "Lucro",
                        "ar": "الربح"
                    },
                    "autonomousTransaction": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading independiente",
                        "pt-BR": "Negociação Independente",
                        "ar": "تداول مستقل"
                    },
                    "copyTrade": {
                        "zh": "复制交易",
                        "en": "Follow masters' transaction mode",
                        "vi": "Sao chép bậc thầy’chế độ giao dịch",
                        "zh-Hant": "復制交易",
                        "id": "Status “Ikuti transaksi Master”",
                        "es": "Seguir modo transacción Master",
                        "pt-BR": "Seguir o modo de transação do mestre",
                        "ar": "متابعة حالة معاملة الأستاذ"
                    },
                    "cancel": {
                        "zh": "取消复制",
                        "en": "Cancel",
                        "vi": "Hủy",
                        "zh-Hant": "取消復制",
                        "id": "Batal",
                        "es": "Cancelar",
                        "pt-BR": "Cancelar",
                        "ar": "إلغاء"
                    },
                    "followOrders": {
                        "zh": "跟随持仓",
                        "en": "Follow orders",
                        "vi": "Sao chép các lệnh",
                        "zh-Hant": "跟隨持倉",
                        "id": "Ikuti Transaksi",
                        "es": "Seguir las órdenes",
                        "pt-BR": "Seguir ordens",
                        "ar": "متابعة الأوامر"
                    },
                    "canceledCopy": {
                        "zh": "已取消复制",
                        "en": "Canceled follow",
                        "vi": "Hủy sao chép",
                        "zh-Hant": "已取消復制",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelado seguir",
                        "pt-BR": "Cancelar seguida",
                        "ar": "إلغاء المتابعة"
                    },
                    "copyAmount": {
                        "zh": "复制金额",
                        "en": "Copy amount",
                        "vi": "Sao chép tiền gửi",
                        "zh-Hant": "復制金額",
                        "id": "Jumlah Dana copy",
                        "es": "Importe copy",
                        "pt-BR": "Copiar valor",
                        "ar": "مبلغ النسخ"
                    },
                    "copyAmountM": {
                        "zh": "复制金额：",
                        "en": "Copy amount: ",
                        "vi": "Sao chép tiền gửi: ",
                        "zh-Hant": "復制金額：",
                        "id": "Jumlah Dana copy",
                        "es": "Importe copy: ",
                        "pt-BR": "Copiar valor:",
                        "ar": "مبلغ النسخ:"
                    },
                    "lots": {
                        "zh": "交易量",
                        "en": "Lots",
                        "vi": "Lot",
                        "zh-Hant": "交易量",
                        "id": "Lot",
                        "es": "Lotes",
                        "pt-BR": "Lotes",
                        "ar": "العقود"
                    },
                    "fundsOccupying": {
                        "zh": "资金占用",
                        "en": "Funds Occupying",
                        "vi": "Quỹ Đang Sử Dụng",
                        "zh-Hant": "資金占用",
                        "id": "Dana terpakai",
                        "es": "Fondos Ocupando",
                        "pt-BR": "Fundos Ocupando",
                        "ar": "الأموال تشغل"
                    },
                    "P_L": {
                        "zh": "订单盈亏",
                        "en": "P/L",
                        "vi": "P/L",
                        "zh-Hant": "訂單盈虧",
                        "id": "P/L",
                        "es": "P/L",
                        "pt-BR": "P/L",
                        "ar": "الربح/الخسارة"
                    },
                    "swap": {
                        "zh": "库存费",
                        "en": "adminstration fee",
                        "vi": "adminstration fee",
                        "zh-Hant": "庫存費",
                        "id": "Bunga",
                        "es": "adminstration fee",
                        "pt-BR": "Inverter",
                        "ar": "رسوم الإدارة"
                    },
                    "commission": {
                        "zh": "手续费",
                        "en": "Commission",
                        "vi": "Hoa hồng",
                        "zh-Hant": "手續費",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês",
                        "ar": "العمولة"
                    },
                    "profitRate": {
                        "zh": "收益率",
                        "en": "Profit Rate",
                        "vi": "Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "收益率",
                        "id": "Keuntungan rata-rata",
                        "es": "Tasa Beneficio ",
                        "pt-BR": "Taxa de lucro",
                        "ar": "معدل الربح"
                    },
                    "investedFunds": {
                        "zh": "投入资金",
                        "en": "Invested Funds",
                        "vi": "Quỹ đã Đầu Tư",
                        "zh-Hant": "投入資金",
                        "id": "Dana yang diinvestasikan",
                        "es": "Fondos Invertidos",
                        "pt-BR": "Fundos Investidos",
                        "ar": "الأموال المستثمرة"
                    },
                    "buy_gbpusd": {
                        "zh": "买入 英镑美元",
                        "en": "BUY GBPUSD",
                        "vi": "MUA GBPUSD",
                        "zh-Hant": "買入 英鎊美元",
                        "id": "BELI GBPUSD",
                        "es": "COMPRAR GBPUSD",
                        "pt-BR": "COMPRAR GBPUS$",
                        "ar": "شراء زوج GBPUSD"
                    },
                    "includeCommissionSwap": {
                        "zh": "包含手续费、库存费",
                        "en": "Include commission and swap",
                        "vi": "Bao gồm hoa hồng và phí qua đêm",
                        "zh-Hant": "包含手續費、庫存費",
                        "id": "Termasuk komisi dan swap ",
                        "es": "Incluye comisión y swap",
                        "pt-BR": "Incluir comissão e inverter",
                        "ar": "شاملاً العمولات وفوائد التمديد"
                    },
                    "orderNumber": {
                        "zh": "订单号",
                        "en": "Order Number",
                        "vi": "Số Lệnh",
                        "zh-Hant": "訂單號",
                        "id": "Nomor transaksi",
                        "es": "Número Orden",
                        "pt-BR": "Número do pedido",
                        "ar": "رقم الأمر"
                    },
                    "margin": {
                        "zh": "交易金额",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "交易金額",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem",
                        "ar": "الهامش"
                    },
                    "sL": {
                        "zh": "止损价格",
                        "en": "SL",
                        "vi": "SL",
                        "zh-Hant": "止損價格",
                        "id": "SL",
                        "es": "SL",
                        "pt-BR": "SL",
                        "ar": "إيقاف الخسارة"
                    },
                    "tP": {
                        "zh": "止盈价格",
                        "en": "TP",
                        "vi": "TP",
                        "zh-Hant": "止盈價格",
                        "id": "TP",
                        "es": "TP",
                        "pt-BR": "TP",
                        "ar": "جني الربح"
                    },
                    "openTime": {
                        "zh": "开仓时间",
                        "en": "Open Time",
                        "vi": "Thời Gian Mở",
                        "zh-Hant": "開倉時間",
                        "id": "Waktu posisi dibuka",
                        "es": "Hora Apertura",
                        "pt-BR": "Preço de abertura",
                        "ar": "وقت الفتح"
                    },
                    "closeTime": {
                        "zh": "平仓时间",
                        "en": "Close Time",
                        "vi": "Thời Gian Đóng",
                        "zh-Hant": "平倉時間",
                        "id": "Waktu posisi ditutup",
                        "es": "Hora Cierre",
                        "pt-BR": "Tempo de fechamento",
                        "ar": "وقت الإغلاق"
                    },
                    "sL_TP": {
                        "zh": "止盈/止损",
                        "en": "SL/TP",
                        "vi": "SL/TP",
                        "zh-Hant": "止盈/止損",
                        "id": "SL/TP",
                        "es": "SL/TP",
                        "pt-BR": "SL/TP",
                        "ar": "إيقاف الخسارة/ جني الربح"
                    },
                    "close": {
                        "zh": "平仓",
                        "en": "Close",
                        "vi": "Đóng",
                        "zh-Hant": "平倉",
                        "id": "Tutup",
                        "es": "Cerrar",
                        "pt-BR": "Fechar",
                        "ar": "إغلاق"
                    },
                    "notSet": {
                        "zh": "未设置",
                        "en": "Not Set",
                        "vi": "Không Đặt",
                        "zh-Hant": "未設置",
                        "id": "Belum dipasang",
                        "es": "No establecido",
                        "pt-BR": "Não configurado",
                        "ar": "لم يتم الإعداد"
                    },
                    "modifySL_TP": {
                        "zh": "修改止盈止损",
                        "en": "Modify the SL/TP",
                        "vi": "Sửa đổi SL/TP",
                        "zh-Hant": "修改止盈止損",
                        "id": "Ubah SL/TP",
                        "es": "Modificar el  SL/TP",
                        "pt-BR": "Modificar o SL/TP",
                        "ar": "تعديل مستوى إيقاف الخسارة/ جني الربح"
                    },
                    "expectedLoss": {
                        "zh": "预计亏损",
                        "en": "Expected Loss",
                        "vi": "Lỗ dự kiến",
                        "zh-Hant": "預計虧損",
                        "id": "Stop Loss ",
                        "es": "Pérdida Esperada",
                        "pt-BR": "Perda esperada",
                        "ar": "الخسارة المتوقعة"
                    },
                    "expectedProfit": {
                        "zh": "预计盈利",
                        "en": "Expected Profit",
                        "vi": "Số lợi nhuận mong đợi",
                        "zh-Hant": "預計盈利",
                        "id": "Take Profit",
                        "es": "Beneficio Esperado",
                        "pt-BR": "Lucro esperado",
                        "ar": "الربح المتوقع"
                    },
                    "precautions": {
                        "zh": "注意事项：",
                        "en": "Precautions: ",
                        "vi": "Các biện pháp phòng ngừa: ",
                        "zh-Hant": "註意事項：",
                        "id": "Tindakan pencegahan: ",
                        "es": "Precauciones: ",
                        "pt-BR": "Precauções:",
                        "ar": "الاحتياطات:"
                    },
                    "Price": {
                        "zh": "价格≤xx",
                        "en": "Price≤xx",
                        "vi": "Giá <xx",
                        "zh-Hant": "價格≤xx",
                        "id": "Harga <xx",
                        "es": "Precio≤xx",
                        "pt-BR": "Preço≤xx",
                        "ar": "السعر≤xx"
                    },
                    "tip1": {
                        "zh": "修改止盈/止损价格，参考范围以现在的价格为准",
                        "en": "Modify the SL / TP, the reference range to the current price shall prevail",
                        "vi": "Sửa đổi SL / TP, phạm vi tham chiếu đến giá hiện tại sẽ chiếm ưu thế",
                        "zh-Hant": "修改止盈/止損價格，慘考範圍以現在的價格為準",
                        "id": " Ubah SL / TP, sesuaikan dengan harga yang berjalan saat ini ",
                        "es": "Modifique el SL / TP, el rango de referencia al precio actual prevalecerá",
                        "pt-BR": "Modificar o SL/TP, o campo de referência ao preço atual deverá prevalecer",
                        "ar": "تعديل مستوى إيقاف الخسارة/ جني الربح، النطاق المرجعي للسعر الحالي سوف يسود"
                    },
                    "orderPrice": {
                        "zh": "挂单价",
                        "en": "Price",
                        "vi": "Giá",
                        "zh-Hant": "掛單價",
                        "id": "Harga",
                        "es": "Precio",
                        "pt-BR": "Preço",
                        "ar": "السعر"
                    },
                    "pendingOrder": {
                        "zh": "挂单",
                        "en": "Pending Order",
                        "vi": "Lệnh bảo lưu",
                        "zh-Hant": "掛單",
                        "id": "Transaksi Pending",
                        "es": "Orden pendiente",
                        "pt-BR": "Pedido pendente",
                        "ar": "أمر معلق"
                    },
                    "volume": {
                        "zh": "手数",
                        "en": "Volume",
                        "vi": "Giá trị",
                        "zh-Hant": "手數",
                        "id": "Volume",
                        "es": "Volumen",
                        "pt-BR": "Volume",
                        "ar": "الحجم"
                    },
                    "follow": {
                        "zh": "跟随",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "跟隨",
                        "id": "Ikuti",
                        "es": "Seguir",
                        "pt-BR": "Seguir",
                        "ar": "متابعة"
                    },
                    "following": {
                        "zh": "跟随中",
                        "en": "Following",
                        "vi": "Đang sao chép",
                        "zh-Hant": "跟隨中",
                        "id": "Mengikuti",
                        "es": "Siguiendo",
                        "pt-BR": "Seguindo",
                        "ar": "تتم المتابعة"
                    },
                    "tip2": {
                        "zh": "您还没有跟随过高手",
                        "en": "You have not followed the master yet",
                        "vi": "Bạn đã không sao chép bậc thầy",
                        "zh-Hant": "您還沒有跟隨過高手",
                        "id": "Anda belum mengikuti Master manapun",
                        "es": "Aún no has seguido al Master",
                        "pt-BR": "Você ainda não seguiu o mestre",
                        "ar": "لم تقم بمتابعة الأستاذ حتى الآن"
                    },
                    "noRecord": {
                        "zh": "没有取消高手记录",
                        "en": "No Record",
                        "vi": "Không có hồ sơ",
                        "zh-Hant": "沒有取消高手記錄",
                        "id": "Tidak ada catatan",
                        "es": "Sin registro",
                        "pt-BR": "Sem registro",
                        "ar": "لا تتوفر سجلات"
                    },
                    "masterPage": {
                        "zh": "高手主页",
                        "en": "Master Page",
                        "vi": "Trang của bậc thầy",
                        "zh-Hant": "高手主頁",
                        "id": "Halaman Master",
                        "es": "Página Master",
                        "pt-BR": "Página Mestre",
                        "ar": "صفحة الأستاذ"
                    },
                    "buyEurusd": {
                        "zh": "买入欧元美元",
                        "en": "Buy EURUSD",
                        "vi": "Mua EURUSD",
                        "zh-Hant": "買入歐元美元",
                        "id": "Beli EURUSD",
                        "es": "Comprar EURUSD",
                        "pt-BR": "Comprar EURUS$",
                        "ar": "شراء زوج EURUSD"
                    },
                    "sellEurusd": {
                        "zh": "卖出欧元美元",
                        "en": "Sell EURUSD",
                        "vi": "Bán EURUSD",
                        "zh-Hant": "賣出歐元美元",
                        "id": "Jual EURUSD",
                        "es": "Vender EURUSD",
                        "pt-BR": "Vender EURUS$",
                        "ar": "بيع زوج EURUSD"
                    }
                },
                "historyTransactions": {
                    "title": {
                        "zh": "历史交易",
                        "en": "History Transactions",
                        "vi": "Lịch Sử Giao Dịch",
                        "zh-Hant": "歷史交易",
                        "id": "Riwayat Transaksi",
                        "es": "Historial Transacciones",
                        "pt-BR": "Histórico de Transações",
                        "ar": "تاريخ المعاملات"
                    },
                    "operation": {
                        "zh": "操作",
                        "en": "Operation",
                        "vi": "Hoạt động",
                        "zh-Hant": "操作",
                        "id": "Transaksi",
                        "es": "Operación",
                        "pt-BR": "Operação",
                        "ar": "العملية"
                    },
                    "lots": {
                        "zh": "交易手数",
                        "en": "Lots",
                        "vi": "Lot",
                        "zh-Hant": "交易手數",
                        "id": "Lot",
                        "es": "Lotes",
                        "pt-BR": "Lotes",
                        "ar": "العقود"
                    },
                    "profit": {
                        "zh": "收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "收益",
                        "id": "Laba",
                        "es": "Beneficio",
                        "pt-BR": "Lucro",
                        "ar": "الربح"
                    },
                    "autonomousTransaction": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente",
                        "pt-BR": "Negociação Independente",
                        "ar": "تداول مستقل"
                    },
                    "portfolio": {
                        "zh": "投资组合",
                        "en": "Portfolio",
                        "vi": "Danh mục đầu tư",
                        "zh-Hant": "投資組合",
                        "id": "Portofolio",
                        "es": "Portfolio",
                        "pt-BR": "Portfólio",
                        "ar": "المحفظة الاستثمارية"
                    },
                    "proportion": {
                        "zh": "占比",
                        "en": "Proportion",
                        "vi": "Cơ cấu lệnh",
                        "zh-Hant": "佔比",
                        "id": "Perbandingan",
                        "es": "Proporción",
                        "pt-BR": "Proporção",
                        "ar": ""
                    },
                    "trading": {
                        "zh": "自主交易",
                        "en": "Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi",
                        "es": "Trading",
                        "pt-BR": "Trading",
                        "ar": "التداول"
                    },
                    "copy": {
                        "zh": "复制交易",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "復制交易",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia",
                        "ar": "نسخ"
                    },
                    "closePrice": {
                        "zh": "平仓价",
                        "en": "Close price",
                        "vi": "Giá đóng cửa",
                        "zh-Hant": "平倉價",
                        "id": "Harga penutupan",
                        "es": "Precio de cierre",
                        "pt-BR": "Preço de fechamento",
                        "ar": "سعر الإغلاق"
                    },
                    "margin": {
                        "zh": "投入资金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "投入資金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem",
                        "ar": "الهامش"
                    },
                    "manualClose": {
                        "zh": "手动平仓",
                        "en": "Manual Close",
                        "vi": "Đóng Tự Động",
                        "zh-Hant": "手動平倉",
                        "id": "Penutupan secara manual",
                        "es": "Cierre Manual",
                        "pt-BR": "Fechamento Manual",
                        "ar": "الإغلاق اليدوي"
                    },
                    "t_P": {
                        "zh": "止盈平仓",
                        "en": "T/P",
                        "vi": "T/P",
                        "zh-Hant": "止盈平倉",
                        "id": "T/P",
                        "es": "T/P",
                        "pt-BR": "T/P",
                        "ar": "جني الربح"
                    },
                    "s_L": {
                        "zh": "止损平仓",
                        "en": "S/L",
                        "vi": "S/L",
                        "zh-Hant": "止損平倉",
                        "id": "S/L",
                        "es": "S/L",
                        "pt-BR": "S/L",
                        "ar": "إيقاف الخسارة"
                    },
                    "copyProfit": {
                        "zh": "跟单收益",
                        "en": "Copy Profit",
                        "vi": "Sao Chép Lợi Nhuận",
                        "zh-Hant": "跟單收益",
                        "id": "Keuntungan Copy ",
                        "es": "Beneficios Copy ",
                        "pt-BR": "Cópia de lucros",
                        "ar": "ربح النسخ"
                    },
                    "totalEarnings": {
                        "zh": "总收益",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總收益",
                        "id": "Total Penghasilan",
                        "es": "Ganancias Totales",
                        "pt-BR": "Ganhos totais",
                        "ar": "إجمالي الأرباح"
                    },
                    "totalCopyBrokerage": {
                        "zh": "总计跟单分成",
                        "en": "Total Copy Brokerage",
                        "vi": "Tổng Số Mô Giới Sao Chép",
                        "zh-Hant": "總計跟單分成",
                        "id": "Total Broker Copy ",
                        "es": "Copy Total Brokerage",
                        "pt-BR": "Corretagem total de cópias",
                        "ar": "The copy is no longer in use"
                    },
                    "closedOrders": {
                        "zh": "平仓订单",
                        "en": "Closed Orders",
                        "vi": "Đóng các lệnh",
                        "zh-Hant": "平倉訂單",
                        "id": "Posisi tertutup",
                        "es": "Órdenes Cerradas",
                        "pt-BR": "Pedidos Fechados",
                        "ar": "الأوامر المغلقة"
                    },
                    "zMargin": {
                        "zh": "占用资金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "占用資金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem",
                        "ar": "الهامش"
                    },
                    "nonceProfit": {
                        "zh": "本次收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "本次收益",
                        "id": "Laba",
                        "es": "Beneficios ",
                        "pt-BR": "Lucro",
                        "ar": "الربح"
                    },
                    "details": {
                        "zh": "分成详情",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "分成詳情",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes",
                        "ar": "التفاصيل"
                    },
                    "commission": {
                        "zh": "分成",
                        "en": "Commission",
                        "vi": "Hoa hồng",
                        "zh-Hant": "分成",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês",
                        "ar": "العمولة"
                    },
                    "autoClosing": {
                        "zh": "自动平仓",
                        "en": "Auto Closing",
                        "vi": "Đóng Tự Động",
                        "zh-Hant": "自動平倉",
                        "id": "Tutup otomatis",
                        "es": "Cierre Automático",
                        "pt-BR": "Fechamento automático",
                        "ar": "الإغلاق التلقائي"
                    },
                    "tip1": {
                        "zh": "已经全部加载完毕",
                        "en": "Has been fully loaded",
                        "vi": "Đã được tải hoàn toàn",
                        "zh-Hant": "已經全部加載完畢",
                        "id": "Berhasil dimuat",
                        "es": "Ha sido cargado completamente",
                        "pt-BR": "Foi totalmente carregado",
                        "ar": "تم التحميل بشكل كامل"
                    },
                    "totalProfitLoss": {
                        "zh": "累计收益",
                        "en": "Total Profit/Loss",
                        "vi": "Tổng Lợi Nhuận/ Lỗ Vốn",
                        "zh-Hant": "累計收益",
                        "id": "Total Laba/Rugi",
                        "es": "Total Beneficios/Pérdidas ",
                        "pt-BR": "Total Lucro/Perda",
                        "ar": "إجمالي الربح/الخسارة"
                    },
                    "historyFollower": {
                        "zh": "历史复制者",
                        "en": "Accumulated followers",
                        "vi": "Tích lũy những người sao chép",
                        "zh-Hant": "歷史復制者",
                        "id": "Jumlah pengikut yang terkumpul",
                        "es": "Seguidores acumulados",
                        "pt-BR": "Seguidores acumulados",
                        "ar": "مجموع المتابعين"
                    }
                },
                "dataStatistics": {
                    "title": {
                        "zh": "数据统计",
                        "en": "Data statistics",
                        "vi": "Thống kê Dữ liệu",
                        "zh-Hant": "數據統計",
                        "id": "Statistik Data",
                        "es": "Estadísticas data",
                        "pt-BR": "Estatísticas de dados",
                        "ar": "إحصائيات البيانات"
                    },
                    "transactionsProfile": {
                        "zh": "交易概况",
                        "en": "Transactions profile",
                        "vi": "Hồ sơ Giao Dịch",
                        "zh-Hant": "交易概況",
                        "id": "Data Transaksi",
                        "es": "Perfil transacciones",
                        "pt-BR": "Perfil de transações",
                        "ar": "ملف المعاملات"
                    },
                    "closedOrders": {
                        "zh": "平仓交易",
                        "en": "Closed Orders",
                        "vi": "Các Lệnh Đã Đóng",
                        "zh-Hant": "平倉交易",
                        "id": "Posisi tertutup",
                        "es": "Órdenes Cerradas",
                        "pt-BR": "Pedidos Fechados",
                        "ar": "الأوامر المغلقة"
                    },
                    "profitOrders": {
                        "zh": "盈利订单",
                        "en": "Profit",
                        "vi": "Lệnh Lời",
                        "zh-Hant": "盈利訂單",
                        "id": "Laba",
                        "es": "Beneficios",
                        "pt-BR": "Lucro",
                        "ar": "الربح"
                    },
                    "lossOrders": {
                        "zh": "亏损订单",
                        "en": "Loss",
                        "vi": "Lệnh Lỗ",
                        "zh-Hant": "虧損訂單",
                        "id": "Rugi",
                        "es": "Pérdidas",
                        "pt-BR": "Perdas",
                        "ar": "خسارة"
                    },
                    "avgHoldingTime": {
                        "zh": "平均持仓时间",
                        "en": "Avg. holding time",
                        "vi": "Thời gian giữ trung bình",
                        "zh-Hant": "平均持倉時間",
                        "id": "Rentang waktu rata-rata posisi yang dibuka",
                        "es": "Tiempo medio posición",
                        "pt-BR": "Tempo médio de espera",
                        "ar": "متوسط زمن الاحتفاظ"
                    },
                    "avgHoldingTimeM": {
                        "zh": "平均持仓时间：",
                        "en": "Avg. holding time: ",
                        "vi": "Thời gian giữ trung bình: ",
                        "zh-Hant": "平均持倉時間：",
                        "id": "Rentang waktu rata-rata posisi yang dibuka: ",
                        "es": "Tiempo medio posición: ",
                        "pt-BR": "Tempo médio de espera:",
                        "ar": "متوسط زمن الاحتفاظ:"
                    },
                    "maxDrawdown": {
                        "zh": "最大回撤",
                        "en": "Max Drawdown",
                        "vi": "Max Drawdown",
                        "zh-Hant": "最大回撤",
                        "id": "Drawdown maksimum",
                        "es": "Max Drawdown",
                        "pt-BR": "Rebaixamento máximo",
                        "ar": "الحد الأقصى للهبوط"
                    },
                    "avgNumberTransactionsPerMonth": {
                        "zh": "月平均交易次数",
                        "en": "Avg Number of Transactions per Month",
                        "vi": "Số Giao Dịch Trung Bình Mỗi Tháng",
                        "zh-Hant": "月平均交易次數",
                        "id": "Jumlah rata-rata transaksi setiap bulan",
                        "es": "Número Medio Transacciones Mes",
                        "pt-BR": "Número médio de Transações por Mês",
                        "ar": "متوسط عدد المعاملات في الشهر"
                    },
                    "maxProfitMargin": {
                        "zh": "最大盈利点差",
                        "en": "Max Profit Margin",
                        "vi": "Biên Lợi Nhuận Tối Đa",
                        "zh-Hant": "最大盈利點差",
                        "id": "Keuntungan Margin maksimum",
                        "es": "Máx Margen Beneficio",
                        "pt-BR": "Margem Máxima de Lucro",
                        "ar": "الحد الأقصى لهامش الربح"
                    },
                    "monthlyRateReturn": {
                        "zh": "月回报率",
                        "en": "Monthly Rate of Return",
                        "vi": "Tỷ Lệ Lợi Nhuận Mỗi Tháng",
                        "zh-Hant": "月回報率",
                        "id": "Keuntungan rata-rata setiap bulan",
                        "es": "Tasa Retorno Mensual",
                        "pt-BR": "Taxa mensal de retorno",
                        "ar": "معدل العائد الشهري"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total profit rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Beneficio total",
                        "pt-BR": "Taxa total de lucro",
                        "ar": "إجمالي معدل الربح"
                    },
                    "tradingChart": {
                        "zh": "交易走势图",
                        "en": "Trading Chart",
                        "vi": "Biểu đồ giao dịch",
                        "zh-Hant": "交易走勢圖",
                        "id": "Grafik Transaksi",
                        "es": "Gráfico Trading",
                        "pt-BR": "Gráfico de Negociação",
                        "ar": "الرسم البياني للتداول"
                    },
                    "monthlyReturns": {
                        "zh": "月收益率",
                        "en": "Monthly returns",
                        "vi": "Hoàn trả hàng tháng",
                        "zh-Hant": "月收益率",
                        "id": "Pendapatan Bulanan",
                        "es": "Retorno Mensuales",
                        "pt-BR": "Retornos mensais",
                        "ar": "العوائد الشهرية"
                    },
                    "profitRate": {
                        "zh": "收益率",
                        "en": "Profit Rate",
                        "vi": "Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "收益率",
                        "id": "Keuntungan rata-rata",
                        "es": "Tasa Beneficio",
                        "pt-BR": "Taxa de lucro",
                        "ar": "معدل الربح"
                    },
                    "profitRateM": {
                        "zh": "收益率：",
                        "en": "Profit Rate: ",
                        "vi": "Tỷ Suất Lợi Nhuận: ",
                        "zh-Hant": "收益率：",
                        "id": "Keuntungan rata-rata: ",
                        "es": "Tasa Beneficio: ",
                        "pt-BR": "Taxa de lucro:",
                        "ar": "معدل الربح:"
                    },
                    "mainTradingSymbols": {
                        "zh": "主要交易品种",
                        "en": "Monthly analytics",
                        "vi": "Phân tích hàng tháng",
                        "zh-Hant": "主要交易品種",
                        "id": "Analisis bulanan",
                        "es": "Analítics Mensuales",
                        "pt-BR": "Análise mensal",
                        "ar": "التحليل الشهري"
                    },
                    "recommendation": {
                        "zh": "分类高手",
                        "en": "Recommendation",
                        "vi": "Sự giới thiệu",
                        "zh-Hant": "分類高手",
                        "id": "Rekomendasi ",
                        "es": "Recomendaciones",
                        "pt-BR": "Recomendação",
                        "ar": "توصية"
                    },
                    "highIncome": {
                        "zh": "收益高手",
                        "en": "Profitability",
                        "vi": "Khả năng Sinh Lời",
                        "zh-Hant": "收益高手",
                        "id": "Profitabilitas",
                        "es": "Rentabilidad",
                        "pt-BR": "Rentabilidade",
                        "ar": "الربحية"
                    },
                    "revenueLeading": {
                        "zh": "收益领先 表现突出",
                        "en": "Revenue leading, outstanding performance",
                        "vi": "Doanh thu dẫn đầu, hiệu suất vượt trội",
                        "zh-Hant": "收益領先 表現突出",
                        "id": " Sedang memimpin, kinerja bagus ",
                        "es": "Líder en Ingresos, rendimientos sobresalientes",
                        "pt-BR": "Receita líder, excelente desempenho",
                        "ar": "عائد أعلى، أداء رائع"
                    },
                    "steady": {
                        "zh": "稳健高手",
                        "en": "Steady",
                        "vi": "Vững chắc",
                        "zh-Hant": "穩健高手",
                        "id": "Stabil",
                        "es": "Estable",
                        "pt-BR": "Estável",
                        "ar": "ثابت"
                    },
                    "incomeStable": {
                        "zh": "收益稳定 回撤率小",
                        "en": "Income stable，Retracement is small",
                        "vi": "Thu nhập ổn định, Retracement quá nhỏ",
                        "zh-Hant": "收益穩定 回撤率小",
                        "id": "Pendapatan stabil, rasio kecil ",
                        "es": "Renta estable，retroceso pequeño",
                        "pt-BR": "Renda estável, Retracement é pequeno",
                        "ar": "الدخل مستقر ، الارتداد صغير"
                    },
                    "exact": {
                        "zh": "常胜高手",
                        "en": "Exact",
                        "vi": "Chính xác",
                        "zh-Hant": "常勝高手",
                        "id": "Ketepatan",
                        "es": "Exacto",
                        "pt-BR": "Exato",
                        "ar": "بالضبط"
                    },
                    "all": {
                        "zh": "综合高手",
                        "en": "All",
                        "vi": "Tất cả",
                        "zh-Hant": "綜合高手",
                        "id": "Semua",
                        "es": "Todos",
                        "pt-BR": "Tudo",
                        "ar": "الجميع"
                    },
                    "highAccuracy": {
                        "zh": "交易稳定 准确率高",
                        "en": "High accuracy",
                        "vi": "Độ chính xác cao",
                        "zh-Hant": "交易穩定 準確率高",
                        "id": "Akurasi tinggi",
                        "es": "Alta precisión",
                        "pt-BR": "Alta precisão",
                        "ar": "دقة عالية"
                    },
                    "historyFollow": {
                        "zh": "历史复制人数",
                        "en": "History Follow",
                        "vi": "Lịch sử Sao chép",
                        "zh-Hant": "歷史復制人數",
                        "id": "Riwayat Copy",
                        "es": "Seguir Historial",
                        "pt-BR": "Histórico de follow",
                        "ar": "تاريخ المتابعة"
                    },
                    "last30DaysAccuracy": {
                        "zh": "近30天准确率",
                        "en": "Last 30 days accuracy",
                        "vi": "Chính xác 30 ngày qua",
                        "zh-Hant": "近30天準確率",
                        "id": "Akurasi selama 30 hari terakhir",
                        "es": "Precisión últimos 30 días.",
                        "pt-BR": "Precisão dos últimos 30 dias",
                        "ar": "الدقة في أخر 30 يومًا"
                    },
                    "more": {
                        "zh": "点击加载更多",
                        "en": "More",
                        "vi": "Nhiều hơn nữa",
                        "zh-Hant": "點擊加載更多",
                        "id": "Tampilkan lebih banyak",
                        "es": "Más",
                        "pt-BR": "Mais",
                        "ar": "المزيد"
                    },
                    "pullDownToRefresh": {
                        "zh": "下拉可以刷新",
                        "en": "Pull down to refresh",
                        "vi": "Kéo xuống để làm mới",
                        "zh-Hant": "下拉可以刷新",
                        "id": "Tarik kebawah untuk memuat kembali",
                        "es": "Tire hacia abajo para refrescar",
                        "pt-BR": "Aperte para atualizar",
                        "ar": "اسحب لتحديث الصفحة"
                    },
                    "loosenRefresh": {
                        "zh": "松开立即刷新",
                        "en": "Loosen the refresh",
                        "vi": "Nới lỏng làm mới",
                        "zh-Hant": "松開立即刷新",
                        "id": "Lepaskan untuk memuat kembali",
                        "es": "Aflojar la actualización",
                        "pt-BR": "Liberar a atualização",
                        "ar": "حرر لتحديث للصفحة"
                    },
                    "refreshingData": {
                        "zh": "正在刷新数据",
                        "en": "Refreshing data",
                        "vi": "Đang làm mới dữ liệu",
                        "zh-Hant": "正在刷新數據",
                        "id": "Muat ulang data",
                        "es": "Datos refrescar",
                        "pt-BR": "Atualizando dados",
                        "ar": "بيانات التحديث"
                    },
                    "accuracy": {
                        "zh": "准确率",
                        "en": "Success rate",
                        "vi": "Tỷ lệ thành công",
                        "zh-Hant": "準確率",
                        "id": "Tingkat keberhasilan",
                        "es": "Tasa de éxito",
                        "pt-BR": "Taxa de sucesso",
                        "ar": "معدل النجاح"
                    },
                    "maximumOpen": {
                        "zh": "最大开仓",
                        "en": "Max. open order",
                        "vi": "Lệnh mở Tối đa",
                        "zh-Hant": "最大開倉",
                        "id": "Maksimal posisi terbuka",
                        "es": "Max. órdenes abiertas",
                        "pt-BR": "Ordem aberta máxima",
                        "ar": "الحد الأقصى للأوامر المفتوحة"
                    },
                    "totalClosingOrders": {
                        "zh": "总平仓交易",
                        "en": "Total closed orders",
                        "vi": "Tổng các lệnh đóng",
                        "zh-Hant": "總平倉交易",
                        "id": "Total posisi tertutup",
                        "es": "Total órdenes cerradas",
                        "pt-BR": "Total de pedidos fechados",
                        "ar": "إجمالي الأوامر المغلقة"
                    },
                    "longsWon": {
                        "zh": "成功做多交易",
                        "en": "Longs won",
                        "vi": "Lệnh Mua thắng",
                        "zh-Hant": "成功做多交易",
                        "id": "Posisi Buy Menang",
                        "es": "Largos ganados",
                        "pt-BR": "Ganhos longos",
                        "ar": "صفقات الشراء الرابحة"
                    },
                    "shortsWon": {
                        "zh": "成功做空交易",
                        "en": "Shorts won",
                        "vi": "Lệnh bán thắng",
                        "zh-Hant": "成功做空交易",
                        "id": "Posisi Sell Menang",
                        "es": "Cortos ganados",
                        "pt-BR": "Ganhos curtos",
                        "ar": "صفقات البيع الرابحة"
                    },
                    "lastTradingDay": {
                        "zh": "上一交易日状况",
                        "en": "Last day traded",
                        "vi": "Ngày cuối cùng để giao dịch",
                        "zh-Hant": "上壹交易日狀況",
                        "id": "Terakhir transaksi",
                        "es": "Último día operado",
                        "pt-BR": "Último dia negociado",
                        "ar": "أخر يوم تم فيه التداول"
                    },
                    "nearly7DaysRateReturn": {
                        "zh": "近七日交易状况",
                        "en": "7-day rate of return",
                        "vi": "Tỷ lệ lợi nhuận 7 ngày",
                        "zh-Hant": "近七日交易狀況",
                        "id": "Rata-rata keuntungan dalam 7 hari",
                        "es": "7-días Tasa Retorno ",
                        "pt-BR": "Taxa de retorno últimos 7 dias",
                        "ar": "معدل العائد لفترة 7 أيام"
                    },
                    "numberMonthlyAverage": {
                        "zh": "月平均交易笔数",
                        "en": "Monthly avg.",
                        "vi": "Trung bình hàng tháng",
                        "zh-Hant": "月平均交易筆數",
                        "id": "Rata-rata bulanan",
                        "es": "Media Mensual",
                        "pt-BR": "Média mensal",
                        "ar": "المتوسط المتحرك"
                    },
                    "maximumDrawdown": {
                        "zh": "最大跌幅",
                        "en": "Max drawdown",
                        "vi": "Max drawdown",
                        "zh-Hant": "最大跌幅",
                        "id": "Drawdown maksimum",
                        "es": "Max Drawdown  ",
                        "pt-BR": "Rebaixamento máximo",
                        "ar": "الحد الأقصى للهبوط"
                    },
                    "steadyg": {
                        "zh": "最大跌幅",
                        "en": "Stability",
                        "vi": "Sự ổn định",
                        "zh-Hant": "最大跌幅",
                        "id": "Stabilitas",
                        "es": "Estabilidad",
                        "pt-BR": "Estabilidade",
                        "ar": "استقرار"
                    },
                    "follow": {
                        "zh": "复制高手",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "復制高手",
                        "id": "Ikuti",
                        "es": "Seguir ",
                        "pt-BR": "Seguir",
                        "ar": "متابعة"
                    },
                    "tip1": {
                        "zh": "若复制金额低于建议复制金额，当高手下单手数较小时,可能会导致跟单失败。为了保障您的利益，最好填写建议复制金额。",
                        "en": "If the copy amount is lower than the recommended amount of replication, when the master single hand count is small, may lead to a single failure. In order to protect your interests, it is best to fill in the recommended copy amount.",
                        "vi": "Nếu số lượng sao chép thấp hơn số lượng sao chép được đề nghị, khi tổng số lượng bậc thầy nhỏ, có thể dẫn đến một lỗi duy nhất. Để bảo vệ lợi ích của bạn, tốt nhất bạn nên điền số tiền sao chép được đề xuất.",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時,可能會導致跟單失敗。為了保障您的利益，最好填寫建議復制金額。",
                        "id": " Jika anda memasukkan dana untuk mengikuti Master dengan nilai dibawah rekomendasi, posisi tidak akan terbuka di akun anda apabila Lot trading master kecil. Karena itu untuk memastikan keamanan margin anda, isilah dana sesuai dengan nilai yang direkomendasikan ",
                        "es": "Si el importe copy es inferior a la cantidad recomendada de réplica, cuando el volumen del master es pequeño pudiera da lugar a error. Para proteger sus intereses es recomendable ingresar el importe recomendado de copia.",
                        "pt-BR": "Se o valor da cópia for menor que a quantidade recomendada de replicação, quando a contagem de mão única principal for pequena, poderá levar a uma única falha. Para proteger seus interesses, é melhor preencher o valor da cópia recomendada.",
                        "ar": "إذا كان مبلغ النسخ أقل من المبلغ الموصى به للنسخ، عندما يكون عدد العقود في أمر الأستاذ صغيرًا، يمكن أن يؤدي ذلك إلى تعذر فتح المركز. ومن أجل حماية مصالحك، من الأفضل إيداع مبلغ النسخ الموصى به."
                    },
                    "tip2": {
                        "zh": "可用金额不足，去充值",
                        "en": "Available amount is insufficient, deposit",
                        "vi": "Số tiền có sẵn không đủ, tiền gửi",
                        "zh-Hant": "可用金額不足，去充值",
                        "id": " Saldo tidak mencukupi, isi dana ",
                        "es": "Importe disponible es insuficiente, deposite",
                        "pt-BR": "Quantidade disponível é insuficiente, depósito",
                        "ar": "المبلغ المتاح غير كاف، قم بالإيداع."
                    },
                    "tip3": {
                        "zh": "复制高手成功",
                        "en": "Follow Successful",
                        "vi": "Sao chép thành công",
                        "zh-Hant": "復制高手成功",
                        "id": "Berhasil mengikuti",
                        "es": "Seguir Éxito",
                        "pt-BR": "Seguida com sucesso",
                        "ar": "المتابعة ناجحة"
                    },
                    "cancelFollow": {
                        "zh": "解除跟随关系",
                        "en": "Cancel Follow",
                        "vi": "Hủy Sao chép",
                        "zh-Hant": "解除跟隨關系",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar Seguir",
                        "pt-BR": "Cancelar seguida",
                        "ar": "إلغاء المتابعة"
                    },
                    "currentCopyAmount": {
                        "zh": "当前复制金额",
                        "en": "Current copy amount",
                        "vi": "Sao chép số tiền hiện tại",
                        "zh-Hant": "當前復制金額",
                        "id": "Jumlah dana copy saat ini",
                        "es": "Importe actual copy",
                        "pt-BR": "Quantia atual de cópia",
                        "ar": "مبلغ النسخ الخالي"
                    },
                    "currentCopyAmountM": {
                        "zh": "当前复制金额：",
                        "en": "Current copy amount: ",
                        "vi": "Sao chép số tiền hiện tại: ",
                        "zh-Hant": "當前復制金額：",
                        "id": " Jumlah dana copy saat ini",
                        "es": "Importe copy actual: ",
                        "pt-BR": "Quantia atual de cópia:",
                        "ar": "مبلغ النسخ الخالي:"
                    },
                    "tigerWitCopyAgreements": {
                        "zh": "复制协议",
                        "en": "TigerWit Copy Agreements",
                        "vi": "Thỏa thuận Sao chép của TigerWit",
                        "zh-Hant": "復制協議",
                        "id": "Perjanjian Copy TigerWit",
                        "es": "Acuerdo Copy TigerWit",
                        "pt-BR": "Acordos de Cópia da TigerWit",
                        "ar": "اتفاقيات TigerWit للنسخ"
                    },
                    "tigerWitCopyAgreements1": {
                        "zh": "使用TigerWit复制跟单服务时，请您务必审慎阅读、充分理解以下协议内容：",
                        "en": "When you use TigerWit follow service, please make sure to read and fully understand the following contant of agreements: ",
                        "vi": "Khi bạn sử dụng dịch vụ sao chép của TigerWit, vui lòng đảm bảo rằng bạn đã đọc và thật sự hiểu các mục của thỏa thuận: ",
                        "zh-Hant": "使用TigerWit復制跟單服務時，請您務必審慎閱讀、充分理解以下協議內容：",
                        "id": "Mohon pastikan anda telah membaca dan mengerti sepenuhnya mengenai isi dari perjanjian ini sebelum menggunakan layanan Copy TigerWit.",
                        "es": "Cuando utilice el servicio copy de TigerWit, asegúrese de leer y comprender completamente el siguiente contenido de los acuerdos:: ",
                        "pt-BR": "Quando você usa o serviço TigerWit, por favor, certifique-se de ler e entender completamente o seguinte conteúdo dos acordos:",
                        "ar": "عندما تستخدم خدمة TigerWit للمتابعة، يرجى الحرص على القراءة والفهم الكامل لمحتوى الاتفاقيات التالية:"
                    },
                    "tigerWitCopyAgreements2": {
                        "zh": "1.系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        "en": "1. System will use the special copy account to follow masters, the special copy account will be generated if there is no one, and all copy operation will use this special account;",
                        "vi": "Hệ thống sẽ sử dụng tài khoản sao chép đặc biệt để sao chép bậc thầy, tài khoản sao chép đặc biệt sẽ được tạo nếu không có ai, và tất cả hoạt động sao chép sẽ sử dụng tài khoản đặc biệt này;",
                        "zh-Hant": "1.系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；",
                        "id": " Sistem di TigerWit akan membuatkan akun copy secara otomatis untuk anda apabila anda belum pernah membuatnya. Dengan menggunakan Akun Copy, anda dapat mengikuti Master dan semua transaksi copy akan dilakukan melalui Akun Copy tersebut ",
                        "es": "1. El sistema empleará una cuenta específica para copiar al Master. Se le generará una automáticamente si no tiene, donde se ejecutarán todos los trades replicados; ",
                        "pt-BR": "1. O sistema usará a conta de cópia especial para seguir os mestres, a conta de cópia especial será gerada se não houver ninguém e toda a operação de cópia usará essa conta especial;",
                        "ar": "1- سوف يستخدم النظام حساب النسخ الخاص لمتابعة الأساتذة، وسيتم إنشاء حساب النسخ الخاص إذا لم يكن هناك حساب موجود، وسوف تستخدم جميع عمليات النسخ هذا الحساب الخاص؛"
                    },
                    "tigerWitCopyAgreements3": {
                        "zh": "2.复制成功后，跟单账号自动跟随高手进行同步开平仓交易；",
                        "en": "2. After successful follow, the copy account will open orders with master synchronously;",
                        "vi": "Sauk hi sao chép thành công, tài khoản sao chép sẽ đồng bộ mở các lệnh với bậc thầy;",
                        "zh-Hant": "2.復制成功後，跟單帳號自動跟隨高手進行同步開平倉交易；",
                        "id": "2. Setelah berhasil mengikuti Master, Akun Copy akan membuka posisi sesuai dengan posisi Master.",
                        "es": "2. Después de seguir con éxito, la cuenta copy abrirá las órdenes con el Master de modo sincronizado;",
                        "pt-BR": "2. Após o sucesso, a conta de cópia abrirá pedidos com o mestre de forma síncrona;",
                        "ar": "2- بعد نجاح المتابعة، سيقوم حساب النسخ بفتح الأوامر مع الأستاذ في نفس الوقت بشكل متزامن؛"
                    },
                    "tigerWitCopyAgreements4": {
                        "zh": "3.系统将定时对您跟随高手的情况进行统计并结算，扣除跟随该高手盈利部分的20%作为该高手佣金。",
                        "en": "3. System will statistics and settlement all the orders and deduct 20% as commission when you cancel and force a flat.",
                        "vi": "Hệ thống sẽ thống kê và thanh toán tất cả các lệnh và khấu trừ 20% lợi nhuận hoa hồng khi bạn hủy và buộc đóng hết các lệnh.",
                        "zh-Hant": "3.系統將定時對您跟隨高手的情況進行統計並結算，扣除跟隨該高手盈利部分的20%作為該高手傭金。",
                        "id": " 3. Ketika anda memilih “berhenti mengikuti master dan tutup semua posisi” Sistem akan langsung menghitung dan membagikan komisi sebesar 20% yang diambil dari total keuntungan dari posisi yang ditutup ",
                        "es": "3. El sistema realizará estadísticas y liquidará todas las órdenes y deducirá el 20% como comisión cuando cancele y forzar flat.",
                        "pt-BR": "3. Sistema irá estatísticas e liquidação de todas as ordens e deduzir 20% como comissão quando você cancelar e forçar um apartamento.",
                        "ar": "3- سيقوم النظام بإجراء إحصائيات وتسوية لجميع الأوامر وخصم نسبة 20% كعمولة عندما تقوم بالإلغاء والخروج بدون ربح أو خسارة."
                    },
                    "tigerWitCopyAgreements5": {
                        "zh": "在决定复制高手时，您确认已经考虑了您的整体财务状况，包括财务承诺，并且您了解使用复制跟单服务具有高度投机性并且您可以承受巨大的损失用于复制高手。",
                        "en": "Before follow a master, please make sure you already consider your financial status and understand the copy service have highly speculative also could sustain a great loss.",
                        "vi": "Trước khi làm theo một bậc thầy, hãy chắc chắn rằng bạn đã xem xét tình trạng tài chính của bạn và hiểu các dịch vụ sao chép có tính đầu cơ cao cũng có thể duy trì số lỗ lớn.",
                        "zh-Hant": "在抉定復制高手時，您確認已經考慮了您的整體材務狀況，包括材務承諾，並且您了解使用復制跟單服務具有高度投機性並且您可以承受巨大的損失用於復制高手。",
                        "id": " Sebelum mengikuti Master, pastikan bahwa anda telah mempertimbangkan semua kondisi keuangan anda dan paham bahwa menggunakan layanan Copy memiliki resiko dan bersifat spekulatif serta dapat menimbulkan kehilangan modal.",
                        "es": "Cuando decide seguir a un Master, está confirmando que ha considerado su situación financiera general y entiende que el uso de servicios de copy-trading es altamente especulativo y pudiera conllevar pérdidas potenciales. ",
                        "pt-BR": "Antes de seguir um mestre, certifique-se de que você já considera seu status financeiro e entende que o serviço de cópia altamente especulativo também poderia sustentar uma grande perda.",
                        "ar": "قبل أن تتابع أي أستاذ، يرجى التأكد من أنك تضع بالفعل في حسبانك وضعك المالي وتفهم أن خدمة النسخ تعتمد بشدة على المضاربة ويمكن أن تؤدي إلى خسارة فادحة."
                    },
                    "tigerWitCopyAgreements6": {
                        "zh": "请注意，我们无法就任何特定投资，账户，投资组合或策略的表现提供任何保证。",
                        "en": "Caution, we cannot provide any assurance of the performance of any specific investment, account, portfolio or strategy.",
                        "vi": "Thận trọng, chúng tôi không thể cung cấp bất kỳ sự đảm bảo nào về hiệu suất của bất kỳ đầu tư, tài khoản, danh mục đầu tư hoặc chiến lược cụ thể nào.",
                        "zh-Hant": "請註意，我們無法就任何特定投資，賬戶，投資組合或策略的表現提供任何保證。",
                        "id": " Peringatan, kami tidak menjamin segala hasil investasi, akun, portofolio, maupun strategi ",
                        "es": "Precaución, tenga presente que no ofrecemos garantías sobre el rendimiento de una inversión, cuenta, portfolio o estrategia en particular.",
                        "pt-BR": "Atenção, não podemos fornecer qualquer garantia do desempenho de qualquer investimento, conta, portfólio ou estratégia específica.",
                        "ar": "تنبيه، نحن لا نستطيع تقديم أي ضمان بشأن أي حساب استثمار أو محفظة أو إستراتيجية محددة."
                    },
                    "tigerWitCopyAgreements7_1": {
                        "zh": "如您对协议有任何疑问，可拨打客服热线",
                        "en": "If you have any question about the copy regulations, please contact the service center ",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào về quy định sao chép, vui lòng liên hệ với trung tâm dịch vụ ",
                        "zh-Hant": "如您對協議有任何疑問，可撥打客服熱線",
                        "id": " Apabila anda memiliip pertanyaan mengenai peraturan copy, silahkan hubungi pusat layanan pelanggan",
                        "es": "Para cualquier consulta sobre las reglas, por favor, cotacte con el centro de servicio ",
                        "pt-BR": "Se tiver alguma dúvida sobre os regulamentos de cópia, entre em contato com o centro de atendimento",
                        "ar": "ذا كان لديك أي أسئلة تود طرحها حول لوائح النسخ، يرجى التكرم بالاتصال بمركز الخدمة"
                    },
                    "tigerWitCopyAgreements7_2": {
                        "zh": "进行咨询。",
                        "en": ".",
                        "vi": ".",
                        "zh-Hant": "進行咨詢。",
                        "id": ".",
                        "es": ".",
                        "pt-BR": ".",
                        "ar": "."
                    },
                    "copyRegulations": {
                        "zh": "《复制规则》",
                        "en": "Copy rule",
                        "vi": "Quy tắc sao chép",
                        "zh-Hant": "《復制規則》",
                        "id": "Peraturan Copy",
                        "es": "Reglas copy",
                        "pt-BR": "Regra de cópia",
                        "ar": "قاعدة النسخ"
                    },
                    "tip4": {
                        "zh": "指从当前日期开始最近七个自然日交易状况。",
                        "en": "Master’s return over previous 7 days of trading.",
                        "vi": "Lợi nhuận của bậc thầy trong 7 ngày giao dịch trước đó.",
                        "zh-Hant": "指從當前日期開始最近七個自然日交易狀況。",
                        "id": " Keuntungan Master 7 hari terakhir ",
                        "es": "Retorno Master previos 7 días de trading.",
                        "pt-BR": "O retorno da Master nos últimos 7 dias de negociação.",
                        "ar": "عائد الأستاذ خلال 7 أيام ماضية من التداول"
                    },
                    "tip5": {
                        "zh": "指该高手最后一次有交易行为的数据统计。",
                        "en": "Master’s return over previous trading day.",
                        "vi": "Lợi nhuận của bậc thầy trong những ngày trước đó.",
                        "zh-Hant": "指該高手最後壹次有交易行為的數據統計。",
                        "id": "Keuntungan master sebelumnya",
                        "es": "Retorno Master previo día de trading.",
                        "pt-BR": "Retorno do mestre ao longo do dia de negociação anterior.",
                        "ar": "عائد الأستاذ خلال اليوم السابق من التداول"
                    }
                },
                "fundRecords": {
                    "title": {
                        "zh": "资金记录",
                        "en": "Fund Records",
                        "vi": "Hồ sơ Quỹ",
                        "zh-Hant": "資金記錄",
                        "id": "Riwayat saldo ",
                        "es": "Historial Fondos",
                        "pt-BR": "Registros do Fundo",
                        "ar": "سجلات الأموال"
                    },
                    "rechargeSuccess": {
                        "zh": "充值成功",
                        "en": "Recharge Success",
                        "vi": "Nạp tiền thêm thành công",
                        "zh-Hant": "充值成功",
                        "id": "Berhasil mengisi dana",
                        "es": "Recarga Éxito",
                        "pt-BR": "Recarga feita com sucesso",
                        "ar": "نجاح إعادة الشحن"
                    },
                    "refusedWithdraw": {
                        "zh": "拒绝提现",
                        "en": "Refused to Withdraw",
                        "vi": "Từ chối Rút tiền",
                        "zh-Hant": "拒絕提現",
                        "id": "Penarikan ditolak",
                        "es": "Reembolso Rechazado",
                        "pt-BR": "Saque recusado",
                        "ar": "رفض السحب"
                    },
                    "successfulWithdrawal": {
                        "zh": "提现成功",
                        "en": "Successful Withdrawal",
                        "vi": "Rút tiền thành công",
                        "zh-Hant": "提現成功",
                        "id": "Penarikan sukses",
                        "es": "Reembolso Éxito",
                        "pt-BR": "Saque Sucedido",
                        "ar": "السحب ناجح"
                    },
                    "cancelWithdrawal": {
                        "zh": "提现已撤销",
                        "en": "Cancel Withdrawal",
                        "vi": "Hủy Rút tiền",
                        "zh-Hant": "提現已撤銷",
                        "id": "Penarikan dibatalkan",
                        "es": "Cancelar reembolso",
                        "pt-BR": "Cancelar saque",
                        "ar": "إلغاء السحب"
                    }
                },
                "wallet": {
                    "title": {
                        "zh": "钱包",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira",
                        "ar": "المحفظة"
                    },
                    "details": {
                        "zh": "查看明细",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "查看明細",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes",
                        "ar": "التفاصيل"
                    },
                    "manageBankCards": {
                        "zh": "管理银行卡",
                        "en": "Manage Bank Cards",
                        "vi": "Quản Lý Thẻ Ngân Hàng",
                        "zh-Hant": "管理銀行卡",
                        "id": "Atur rekening bank",
                        "es": "Gestionar Tarjetas Banco",
                        "pt-BR": "Gerenciar Cartões de banco",
                        "ar": "إدارة البطاقات المصرفية"
                    },
                    "addBankCards": {
                        "zh": "添加银行卡",
                        "en": "Add Bank Cards",
                        "vi": "Thêm Tài khoản \"Ngân hàng\"",
                        "zh-Hant": "添加銀行卡",
                        "id": "Tambah rekening bank",
                        "es": "Añadir Tarjetas Banco ",
                        "pt-BR": "Adicionar cartões de banco",
                        "ar": "أضف بطاقات مصرفية"
                    },
                    "name": {
                        "zh": "持卡人",
                        "en": "Name",
                        "vi": "Họ Tên",
                        "zh-Hant": "持卡人",
                        "id": "Nama",
                        "es": "Nombre",
                        "pt-BR": "Nome",
                        "ar": "الاسم"
                    },
                    "nameM": {
                        "zh": "持卡人：",
                        "en": "Name: ",
                        "vi": "Họ Tên: ",
                        "zh-Hant": "持卡人：",
                        "id": "Nama: ",
                        "es": "Nombre: ",
                        "pt-BR": "Nome:",
                        "ar": "الاسم:"
                    },
                    "cardholderName": {
                        "zh": "请输入持卡人姓名",
                        "en": "Type cardholder's name",
                        "vi": "Nhập tên chủ thẻ",
                        "zh-Hant": "請輸入持卡人姓名",
                        "id": " Nama pemilik rekening ",
                        "es": "Escriba nombre titular tarjeta",
                        "pt-BR": "Digite nome do portador do cartão",
                        "ar": "ادخل اسم صاحب البطاقة"
                    },
                    "bankCountry": {
                        "zh": "银行国家",
                        "en": "Bank’s country",
                        "vi": "Quốc gia",
                        "zh-Hant": "銀行國家",
                        "id": "Negara Bank",
                        "es": "Banco País",
                        "pt-BR": "País do Banco",
                        "ar": "بلد البنك"
                    },
                    "bankCountryM": {
                        "zh": "银行国家：",
                        "en": "Bank’s country: ",
                        "vi": "Quốc gia: ",
                        "zh-Hant": "銀行國家：",
                        "id": "Negara Bank: ",
                        "es": "Banco País: ",
                        "pt-BR": "País do Banco:",
                        "ar": "بلد البنك:"
                    },
                    "thirdAccNoSupport": {
                        "zh": "暂不支持",
                        "en": "Numbered Mode",
                        "vi": "Tạm không ủng hộ.",
                        "zh-Hant": "暫不支持",
                        "id": "Belum mendukung",
                        "es": "Modo números",
                        "pt-BR": "Modo numeral",
                        "ar": "الوضع المرقم"
                    },
                    "pSelectThirdAccount": {
                        "zh": "请选择第三方平台",
                        "en": "请选择第三方平台",
                        "vi": "请选择第三方平台",
                        "zh-Hant": "請選擇協力廠商平臺",
                        "id": "Silahkan pilih platform pihak ketiga",
                        "es": "Por favor, seleccione una plataforma de terceros",
                        "pt-BR": "请选择第三方平台",
                        "ar": "请选择第三方平台"
                    },
                    "thirdPartyAccount": {
                        "zh": "第三方账户",
                        "en": "Third-party accounts",
                        "vi": "Các tài khoản bên thứ 3",
                        "zh-Hant": "第三方賬戶",
                        "id": "Rekening pihak ke tiga",
                        "es": "Cuentas de terceros",
                        "pt-BR": "Conta de terceiros",
                        "ar": "حسابات طرف ثالث"
                    },
                    "manageThird": {
                        "zh": "管理第三方账户",
                        "en": "Manage",
                        "vi": "Quản lý",
                        "zh-Hant": "管理第三方賬戶",
                        "id": "Kelola",
                        "es": "Gestionar",
                        "pt-BR": "Gerenciar",
                        "ar": "إدارة"
                    },
                    "addThirdAccount": {
                        "zh": "添加账户",
                        "en": "Add the third-party account",
                        "vi": "Thêm vào tài khoản bên thứ 3",
                        "zh-Hant": "添加賬戶",
                        "id": "Tambah Rekening pihak ke tiga",
                        "es": "Añadir la cuenta de terceros",
                        "pt-BR": "Adicione conta de terceiros",
                        "ar": "أضف حساب الطرف الثالث"
                    },
                    "deleteThirdAccount": {
                        "zh": "删除账户",
                        "en": "Delete the third-party account",
                        "vi": "Xóa tài khoản bên thứ 3",
                        "zh-Hant": "刪除賬戶",
                        "id": "Hapus Rekening pihak ke tiga",
                        "es": "Eliminar la cuenta de terceros",
                        "pt-BR": "Apague conta de terceiros",
                        "ar": "احذف حساب الطرف الثالث"
                    },
                    "deleteThirdAccountTip": {
                        "zh": "确定删除该账户？",
                        "en": "Are you sure to delete this account?",
                        "vi": "Bạn có chắc muốn xóa tài khoản này?",
                        "zh-Hant": "確定刪除該賬戶？",
                        "id": "Apakah anda yakin menghapus rekening ini?",
                        "es": "¿Estás seguro de eliminar esta cuenta?",
                        "pt-BR": "Tem certeza de que quer deletar esta conta?",
                        "ar": "هل أنت متأكد من أنك تريد حذف هذا الحساب؟"
                    },
                    "switchThird": {
                        "zh": "切换第三方账户",
                        "en": "Switch",
                        "vi": "Chuyển đổi",
                        "zh-Hant": "切換賬戶",
                        "id": "Pindah",
                        "es": "Cambiar",
                        "pt-BR": "Trocar",
                        "ar": "تحويل"
                    },
                    "pSelectBank": {
                        "zh": "请选择开户行",
                        "en": "Select opening account bank",
                        "vi": "Chọn mở một tài khoản ngân hàng",
                        "zh-Hant": "請選擇開戶行",
                        "id": "Pilih buka rekening bank",
                        "es": "Seleccione cuenta de apertura bancaria",
                        "pt-BR": "Selecione o banco de abertura de conta",
                        "ar": "حدد بنك فتح الحساب"
                    },
                    "selectBank": {
                        "zh": "选择开户行",
                        "en": "Select opening account bank",
                        "vi": "Chọn mở một tài khoản ngân hàng",
                        "zh-Hant": "選擇開戶行",
                        "id": " Pilih buka rekening bank ",
                        "es": "Seleccione cuenta de apertura bancaria",
                        "pt-BR": "Selecione o banco de abertura de conta",
                        "ar": "حدد بنك فتح الحساب"
                    },
                    "selectBankM": {
                        "zh": "选择开户行：",
                        "en": "Select opening account bank: ",
                        "vi": "Chọn mở một tài khoản ngân hàng: ",
                        "zh-Hant": "選擇開戶行：",
                        "id": " Pilih buka rekening bank",
                        "es": "Seleccione cuenta de apertura banco: ",
                        "pt-BR": "Selecione o banco de abertura de conta:",
                        "ar": "حدد بنك فتح الحساب:"
                    },
                    "fillAccount": {
                        "zh": "请填写账号",
                        "en": "Fill in the account",
                        "vi": "Điền vào tài khoản",
                        "zh-Hant": "請填寫賬號",
                        "id": "Isi informasi",
                        "es": "Escriba la cuenta",
                        "pt-BR": "Preencha a conta",
                        "ar": "ادخل الحساب"
                    },
                    "fillAccountM": {
                        "zh": "请填写账号：",
                        "en": "Fill in the account: ",
                        "vi": "Điền vào tài khoản: ",
                        "zh-Hant": "請填寫賬號：",
                        "id": "Isi informasi: ",
                        "es": "Escriba la cuenta: ",
                        "pt-BR": "Preencha a conta:",
                        "ar": "ادخل الحساب:"
                    },
                    "accountNameM": {
                        "zh": "账户名称：",
                        "en": "Account name: ",
                        "vi": "Tên tài khoản: ",
                        "zh-Hant": "賬戶名稱：",
                        "id": "Nama pemilik Rekening: ",
                        "es": "Nombre cuenta: ",
                        "pt-BR": "Nome da conta:",
                        "ar": "اسم الحساب:"
                    },
                    "completeInfo": {
                        "zh": "请完善第三方账户信息",
                        "en": "Please complete third party account information",
                        "vi": "Vui lòng xóa thông tin tài khoản bên thứ ba",
                        "zh-Hant": "請完善第三方賬戶信息",
                        "id": "Silahkan lengkapi informasi rekening pihak ke tiga",
                        "es": "Por favor, complete información cuentas terceros",
                        "pt-BR": "Por favor complete informações da conta de terceiros",
                        "ar": "يرجى استكمال معلومات الحساب للطرف الثالث"
                    },
                    "bankName": {
                        "zh": "请填写您的银行名称",
                        "en": "Bank name",
                        "vi": "Tên tài khoản ngân hàng",
                        "zh-Hant": "請填寫您的銀行名稱",
                        "id": "Nama Bank",
                        "es": "Nombre banco",
                        "pt-BR": "Nome do Banco",
                        "ar": "اسم البنك"
                    },
                    "fillBank": {
                        "zh": "填写开户行",
                        "en": "Fill in the opening account bank",
                        "vi": "Tên ngân hàng (bằng tiếng Anh)",
                        "zh-Hant": "填寫開戶行",
                        "id": "Isi data pembukaan rekening bank",
                        "es": "Escriba cuenta banco apertura",
                        "pt-BR": "Preencha o banco da conta de abertura",
                        "ar": "ادخل بنك فتح الحساب"
                    },
                    "fillBankM": {
                        "zh": "填写开户行：",
                        "en": "Fill in the opening account bank: ",
                        "vi": "Tên ngân hàng (bằng tiếng Anh): ",
                        "zh-Hant": "填寫開戶行：",
                        "id": " Isi data pembukaan rekening bank ",
                        "es": "Escriba cuenta banco apertura: ",
                        "pt-BR": "Preencher o banco de abertura de conta:",
                        "ar": "ادخل بنك فتح الحساب:"
                    },
                    "bankIdentificationCode": {
                        "zh": "银行机构鉴定代码",
                        "en": "Bank identification code",
                        "vi": "Mã nhận dạng ngân hàng",
                        "zh-Hant": "銀行機構鑒定代碼",
                        "id": "Kode identifikasi bank",
                        "es": "Código identificación banco",
                        "pt-BR": "Código de identificação do banco",
                        "ar": "رمز معرف البنك"
                    },
                    "bankIdentificationCodeM": {
                        "zh": "银行机构鉴定代码：",
                        "en": "Bank identification code: ",
                        "vi": "Mã nhận dạng ngân hàng ",
                        "zh-Hant": "銀行機構鑒定代碼：",
                        "id": " Kode identifikasi bank ",
                        "es": "Código identificación banco: ",
                        "pt-BR": "Código de identificação do banco:",
                        "ar": "رمز معرف البنك:"
                    },
                    "fillBankIdentificationCode": {
                        "zh": "请填写您的银行机构鉴定代码",
                        "en": "Please fill in the bank identification code",
                        "vi": "Vui lòng điền vào mã nhận dạng ngân hàng",
                        "zh-Hant": "請填寫您的銀行機構鑒定代碼",
                        "id": "Silahkan masukkan kode identifikasi bank",
                        "es": "Por favor, rellene el código de identificación banco",
                        "pt-BR": "Por favor, preencha o código de identificação do banco",
                        "ar": "يرجى إدخال رمز معرف البنك"
                    },
                    "selectAccountPro": {
                        "zh": "请选择开户省",
                        "en": "Select opening account province",
                        "vi": "Chọn mở tài khoản tỉnh",
                        "zh-Hant": "請選擇開戶省",
                        "id": "Pilih provinsi",
                        "es": "Seleccione provincia apertura cuenta ",
                        "pt-BR": "Selecionar região da abertura de conta",
                        "ar": "حدد إقليم فتح الحساب"
                    },
                    "selectAccountCity": {
                        "zh": "请选择开户市",
                        "en": "Select opening account city",
                        "vi": "Chọn mở tài khoản thành phố",
                        "zh-Hant": "請選擇開戶市",
                        "id": "Pilih kota",
                        "es": "Seleccione  ciudad apertura cuenta ",
                        "pt-BR": "Selecionar cidade da abertura de conta",
                        "ar": "حدد مدينة فتح الحساب"
                    },
                    "enterBranchBankName": {
                        "zh": "请输入支行名称",
                        "en": "Enter branch bank name",
                        "vi": "Nhập tên chi nhánh ngân hàng",
                        "zh-Hant": "請輸入支行名稱",
                        "id": "Masukkan nama cabang bank",
                        "es": "Ingrese el nombre del banco",
                        "pt-BR": "Inserir nome da filial do banco",
                        "ar": "ادخل اسم فرع البنك"
                    },
                    "enterOpeningAccountAddress": {
                        "zh": "请输入开户地址",
                        "en": "Enter opening account address",
                        "vi": "Tỉnh",
                        "zh-Hant": "請輸入開戶地址",
                        "id": "Masukkan alamat rekening",
                        "es": "Ingrese la dirección de la cuenta de apertura",
                        "pt-BR": "Inserir endereço de abertura de conta",
                        "ar": "ادخل عنوان فتح الحساب"
                    },
                    "uploadIdentification": {
                        "zh": "上传身份证明",
                        "en": "Upload identification",
                        "vi": "Tải lên nhận dạng",
                        "zh-Hant": "上傳身份證明",
                        "id": "Unggah dokumen",
                        "es": "Subir identificación",
                        "pt-BR": "Fazer upload da identificação",
                        "ar": "تحميل الهوية"
                    },
                    "clickUploadDocuments": {
                        "zh": "点击上传证件进行实名验证",
                        "en": "Upload",
                        "vi": "Tải lên",
                        "zh-Hant": "點擊上傳證件進行實名驗證",
                        "id": "klik untuk mengunggah dokumen",
                        "es": "Subir",
                        "pt-BR": "Upload",
                        "ar": "تحميل"
                    },
                    "completeInformation": {
                        "zh": "完善资料",
                        "en": "Complete information",
                        "vi": "Hoàn thành thông tin",
                        "zh-Hant": "完善資料",
                        "id": "Lengkapi informasi",
                        "es": "Información completa",
                        "pt-BR": "Informação completa",
                        "ar": "استكمل المعلومات"
                    },
                    "bankAddress": {
                        "zh": "开户地址",
                        "en": "Opening account bank’s address",
                        "vi": "Tỉnh",
                        "zh-Hant": "開戶地址",
                        "id": "Alamat bank",
                        "es": "Dirección apertura cuenta banco.",
                        "pt-BR": "Endereço do banco de abertura de conta",
                        "ar": "عنوان بنك فتح الحساب"
                    },
                    "bankAddressM": {
                        "zh": "开户地址：",
                        "en": "Opening account bank’s address: ",
                        "vi": "Tỉnh: ",
                        "zh-Hant": "開戶地址：",
                        "id": "Alamat bank",
                        "es": "Dirección apertura cuenta banco: ",
                        "pt-BR": "Endereço do banco de abertura de conta:",
                        "ar": "عنوان بنك فتح الحساب:"
                    },
                    "reservedPhoneNumber": {
                        "zh": "预留手机号",
                        "en": "Reserved phone number",
                        "vi": "Số điện thoại dự phòng",
                        "zh-Hant": "預留手機號",
                        "id": "Nomor telepon",
                        "es": "Número teléfono asignado",
                        "pt-BR": "Número de telefone reservado",
                        "ar": "رقم الهاتف محجوز"
                    },
                    "reservedPhoneNumberM": {
                        "zh": "预留手机号：",
                        "en": "Reserved phone number: ",
                        "vi": "Số điện thoại dự phòng: ",
                        "zh-Hant": "預留手機號：",
                        "id": " Nomor telepon: ",
                        "es": "Número teléfono asignado: ",
                        "pt-BR": "Número de telefone reservado:",
                        "ar": "رقم الهاتف محجوز:"
                    },
                    "adding": {
                        "zh": "正在添加",
                        "en": "Adding",
                        "vi": "Đang thêm vào",
                        "zh-Hant": "正在添加",
                        "id": "Menambah",
                        "es": "Añadiendo",
                        "pt-BR": "Adicionando",
                        "ar": "إضافة"
                    },
                    "bindingSuccess": {
                        "zh": "绑定成功",
                        "en": "Binding success",
                        "vi": "Liên kết thành công",
                        "zh-Hant": "邦定成功",
                        "id": "Pendaftaran sukses",
                        "es": "Éxito vincular",
                        "pt-BR": "Sucesso vinculativo",
                        "ar": "نجاح الربط"
                    },
                    "tip1": {
                        "zh": "因要求，请填写该银行卡的预留手机号",
                        "en": "Please fill in the reserved phone number of the bank card as required",
                        "vi": "Vui lòng điền số điện thoại dự phòng của thẻ ngân hàng theo yêu cầu",
                        "zh-Hant": "因要求，請填寫該銀行卡的預留手機號",
                        "id": "Silahkan masukkan nomor telepon yang terdaftar di bank ",
                        "es": "Por favor, rellene el número de teléfono reservado de la tarjeta bancaria como requerido",
                        "pt-BR": "Por favor, preencha o número de telefone reservado do cartão bancário, conforme necessário",
                        "ar": "يرجى إدخال رقم الهاتف المحجوز للبطاقة المصرفية على النحو المطلوب"
                    },
                    "tip2": {
                        "zh": "手机号绑定成功",
                        "en": "The phone number is bound successfully",
                        "vi": "Số điện thoại được liên kết thành công",
                        "zh-Hant": "手機號邦定成功",
                        "id": " Nomor telepon berhasil didaftarkan ",
                        "es": "El número de teléfono está enlazado con éxito",
                        "pt-BR": "O número de telefone está vinculado com sucesso",
                        "ar": "تم ربط رقم الهاتف بنجاح"
                    },
                    "switchBankCard": {
                        "zh": "切换银行卡",
                        "en": "Switch bank card",
                        "vi": "Chuyển thẻ ngân hàng",
                        "zh-Hant": "切換銀行卡",
                        "id": "Pindah rekening bank",
                        "es": "Cambiar tarjeta bancaria",
                        "pt-BR": "Trocar cartão bancário",
                        "ar": "تحويل بطاقة مصرفية"
                    },
                    "deleteBankCard": {
                        "zh": "删除银行卡",
                        "en": "Delete bank card",
                        "vi": "Xóa thẻ ngân hàng",
                        "zh-Hant": "刪除銀行卡",
                        "id": "Hapus rekening bank",
                        "es": "Borrar tarjeta bancaria",
                        "pt-BR": "Excluir cartão bancário",
                        "ar": "احذف البطاقة المصرفية"
                    },
                    "tip3": {
                        "zh": "确认删除本银行卡，如需再次使用需重新验证",
                        "en": "Confirm to delete this bank card. If it needs to be used again, it needs to be verified again",
                        "vi": "Xác nhận xóa thẻ ngân hàng này. Nếu nó cần phải được sử dụng một lần nữa, nó cần phải được xác minh lại",
                        "zh-Hant": "確認刪除本銀行卡，如需再次使用需重新驗證",
                        "id": " Konfirmasi untuk menghapus rekening bank. Dibutuhkan verifikasi ulang apabila anda ingin menggunakan rekening ini lagi. ",
                        "es": "Confirmar para eliminar esta tarjeta bancaria. Si necesita ser usada nuevamente, necesitaría ser verificada otra vez",
                        "pt-BR": "Confirme para eliminar este cartão bancário. Se precisar ser usado novamente, precisará ser verificado novamente",
                        "ar": "قم بالتأكيد لحذف هذه البطاقة المصرفية إذا كانت هناك حاجة لاستخدامها مرة أخرى، ستكون هناك حاجة لتأكيدها مرة أخرى"
                    },
                    "bindBankCard": {
                        "zh": "点击绑定银行卡",
                        "en": "Bind bank card",
                        "vi": "Liên kết tài khoản ngân hàng",
                        "zh-Hant": "點擊邦定銀行卡",
                        "id": "Daftarkan rekening bank",
                        "es": "Asociar tarjeta bancaria",
                        "pt-BR": "Vincular cartão bancário",
                        "ar": "اربط بطاقة مصرفية"
                    },
                    "walletBalance": {
                        "zh": "钱包总额",
                        "en": "Wallet balance",
                        "vi": "Số dư trong ví",
                        "zh-Hant": "錢包總額",
                        "id": "Saldo Dompet",
                        "es": "Balance Wallet",
                        "pt-BR": "Balanço da Carteira",
                        "ar": "رصيد المحفظة"
                    },
                    "bankCardList": {
                        "zh": "获取银行卡列表失败！",
                        "en": "Fail to access bank card list!",
                        "vi": "Không thể truy cập danh sách thẻ ngân hàng",
                        "zh-Hant": "獲取銀行卡列表失敗！",
                        "id": "Gagal mengakses daftar rekening bank",
                        "es": "¡Error acceso lista tarjetas banco!",
                        "pt-BR": "Falha ao acessar lista de cartão bancário",
                        "ar": "تعذر الوصول إلى قائمة البطاقات المصرفية!"
                    },
                    "tip4_1": {
                        "zh": "银行卡 ",
                        "en": "The bank card ",
                        "vi": "Thẻ ngân hàng ",
                        "zh-Hant": "銀行卡 ",
                        "id": "Rekening bank ",
                        "es": "La tarjeta bancaria ",
                        "pt-BR": "O cartão bancário ",
                        "ar": "البطاقة المصرفية"
                    },
                    "tip4_2": {
                        "zh": " 绑定成功",
                        "en": " has been successfully bound",
                        "vi": " đã được liên kết thành công",
                        "zh-Hant": " 邦定成功",
                        "id": " telah berhasil didaftarkan",
                        "es": " ha sido asociada con éxito",
                        "pt-BR": "foi vinculado com sucesso",
                        "ar": "تم ربطها بنجاح"
                    }
                },
                "transfer": {
                    "wireTransfer": {
                        "zh": "电汇账户",
                        "en": "Wire transfer",
                        "vi": "Chuyển tiền",
                        "zh-Hant": "電匯賬戶",
                        "id": "Pengiriman antar bank",
                        "es": "Transferencia bancaria",
                        "pt-BR": "Transferência bancária",
                        "ar": "التحويل المصرفي"
                    },
                    "addWireTransfer": {
                        "zh": "添加电汇账户",
                        "en": "Add wire transfer account",
                        "vi": "Thêm TK chuyển khoản NH",
                        "zh-Hant": "添加電匯賬戶",
                        "id": "Tambah rekening pengiriman uang",
                        "es": "Añadir cuenta de transferencia bancaria",
                        "pt-BR": "Adicionar conta para transferência bancária",
                        "ar": "أضف حساب التحويل المصرفي"
                    },
                    "clickDelete": {
                        "zh": "点击删除账户",
                        "en": "Click to delete",
                        "vi": "Nhấp để hủy",
                        "zh-Hant": "點擊删除帳戶",
                        "id": "Klik untuk hapus",
                        "es": "Haga clic para eliminar",
                        "pt-BR": "Clique para deletar",
                        "ar": "انقر للحذف"
                    },
                    "deleteWireTransfer": {
                        "zh": "删除电汇账户",
                        "en": "Delete wire transfer account",
                        "vi": "Xóa TK chuyển khoản ngân hàng",
                        "zh-Hant": "刪除電匯賬戶",
                        "id": "Hapus rekening pengiriman dana",
                        "es": "Eliminar cuenta de transferencia bancaria",
                        "pt-BR": "Deletar conta para transferência bancária",
                        "ar": "حذف حساب التحويل المصرفي"
                    },
                    "deleteThisAccount": {
                        "zh": "确认删除此账户？",
                        "en": "Delete this account?",
                        "vi": "Xóa tài khoản?",
                        "zh-Hant": "確認删除此帳戶？",
                        "id": "Hapus akun ini？",
                        "es": "¿Borrar esta cuenta?",
                        "pt-BR": "Deletar esta conta?",
                        "ar": "حذف هذا الحساب؟"
                    },
                    "clickAddWireTransfer": {
                        "zh": "点击添加电汇账户",
                        "en": "Click to add wire transfer account",
                        "vi": "Thêm TK chuyển khoản NH",
                        "zh-Hant": "點擊添加電匯賬戶",
                        "id": "Klik untuk tambah rekening",
                        "es": "Haga clic para agregar cuenta transferencia bancaria",
                        "pt-BR": "Clique para adicionar uma conta de transferência bancária",
                        "ar": "انقر لإضافة حساب التحويل المصرفي"
                    },
                    "manageWireTransfer": {
                        "zh": "管理电汇账户",
                        "en": "Manage",
                        "vi": "Quản lý",
                        "zh-Hant": "管理電匯賬戶",
                        "id": "Kelola",
                        "es": "Gestionar",
                        "pt-BR": "Gerenciar",
                        "ar": "إدارة"
                    },
                    "cardNumber": {
                        "zh": "电汇账号",
                        "en": "Card number",
                        "vi": "Số Thẻ",
                        "zh-Hant": "電匯賬號",
                        "id": "Nomor rekening",
                        "es": "Número de tarjeta",
                        "pt-BR": "Número do cartão",
                        "ar": "رقم البطاقة"
                    },
                    "cardNumberM": {
                        "zh": "电汇账号：",
                        "en": "Card number:",
                        "vi": "Số Thẻ:",
                        "zh-Hant": "電匯賬號：",
                        "id": "Nomor rekening:",
                        "es": "Número de tarjeta:",
                        "pt-BR": "Número do cartão:",
                        "ar": "رقم البطاقة:"
                    },
                    "bicSwiftCode": {
                        "zh": "BIC/Swift code",
                        "en": "BIC/Swift code",
                        "vi": "Mã BIC/Swift",
                        "zh-Hant": "BIC/Swift code",
                        "id": "BIC/Kode Swift",
                        "es": "Código BIC/Swift",
                        "pt-BR": "BIC/código Swift",
                        "ar": "رمز BIC/Swift"
                    },
                    "bicSwiftCodeM": {
                        "zh": "BIC/Swift code：",
                        "en": "BIC/Swift code:",
                        "vi": "Mã BIC/Swift:",
                        "zh-Hant": "BIC/Swift code：",
                        "id": "BIC/Kode Swift:",
                        "es": "Código BIC/Swift:",
                        "pt-BR": "BIC/código Swift:",
                        "ar": "رمز BIC/Swift:"
                    },
                    "fillBicSwiftCode": {
                        "zh": "请填写 BIC/Swift code",
                        "en": "Please fill in BIC/Swift code",
                        "vi": "Xin điền vào Mã BIC/Swift",
                        "zh-Hant": "請填寫 BIC/Swift code",
                        "id": "Silahkan isi BIC/Kode Swift",
                        "es": "Por favor, rellene el código BIC/Swift",
                        "pt-BR": "Por favor preencha código Swift/BIC",
                        "ar": "يرجى إدخال رمز BIC/Swift"
                    },
                    "chooseCountry": {
                        "zh": "请选择银行所在的国家",
                        "en": "Please choose country",
                        "vi": "Vui lòng chọn quốc gia",
                        "zh-Hant": "請選擇銀行所在的國家",
                        "id": "Silahkan pilih Negara",
                        "es": "Por favor seleccione país",
                        "pt-BR": "Por favor selecione um país",
                        "ar": "يرجى تحديد البلد"
                    },
                    "fillWithdrawAccount": {
                        "zh": "请填写电汇账号",
                        "en": "Please fill in withdraw account",
                        "vi": "Vui lòng điền tài khoản rút tiền",
                        "zh-Hant": "請填寫電匯賬號",
                        "id": "Silahkan isi akun penarikan",
                        "es": "Por favor, rellene la cuenta reembolso",
                        "pt-BR": "Por favor, preencha a conta para saque",
                        "ar": "يرجى إدخال حساب السحب"
                    },
                    "fillBankName": {
                        "zh": "请输入银行的英文全称（包括支行名称）",
                        "en": "Fill bank English full name (include branch name)",
                        "vi": "Xin điền tên Tiếng Anh đầy đủ (gồm tên chi nhánh)",
                        "zh-Hant": "請輸入銀行的英文全稱（包括支行名稱）",
                        "id": "Silahkan isi nama bank (termasuk nama cabang)",
                        "es": "Nombre completo del banco en Inglés (incluya nombre sucursal)",
                        "pt-BR": "Preencha o nome completo do banco em inglês (inclua o nome da filial)",
                        "ar": "ادخل الاسم الكامل للبنك باللغة الإنجليزية (بما في ذلك اسم الفرع)"
                    },
                    "switchTransferAccount": {
                        "zh": "切换账户",
                        "en": "Switch account",
                        "vi": "Đổi TK chuyển khoản",
                        "zh-Hant": "切換電匯賬戶",
                        "id": "Alihkan akun",
                        "es": "Cambiar cuenta",
                        "pt-BR": "Trocar conta",
                        "ar": "تغيير الحساب"
                    }
                },
                "coupon": {
                    "title": {
                        "zh": "我的红包",
                        "en": "Coupon",
                        "vi": "Thưởng",
                        "zh-Hant": "我的紅包",
                        "id": "Kupon",
                        "es": "Cupón",
                        "pt-BR": "Cupom",
                        "ar": "قسيمة"
                    },
                    "available": {
                        "zh": "可用红包",
                        "en": "Available",
                        "vi": "Khả dụng",
                        "zh-Hant": "可用紅包",
                        "id": "Tersedia",
                        "es": "Disponible",
                        "pt-BR": "Disponível",
                        "ar": "متاح"
                    },
                    "records": {
                        "zh": "红包记录",
                        "en": "Records",
                        "vi": "Hồ sơ",
                        "zh-Hant": "紅包記錄",
                        "id": "Catatan",
                        "es": "Archivos",
                        "pt-BR": "Registros",
                        "ar": "السجلات"
                    },
                    "automaticReceive": {
                        "zh": "自动领取红包",
                        "en": "Automatic Receive",
                        "vi": "Nhận Tự Động",
                        "zh-Hant": "自動領取紅包",
                        "id": "Diterima",
                        "es": "Recepción automática",
                        "pt-BR": "Recebimento Automático",
                        "ar": "استلام آلي"
                    },
                    "exchangeValidUntil": {
                        "zh": "兑换有效期截止至",
                        "en": "Exchange valid until ",
                        "vi": "Trao đổi hợp lệ cho đến khi ",
                        "zh-Hant": "兌換有效期截止至",
                        "id": "Berlaku hingga",
                        "es": "Cambio válido hasta ",
                        "pt-BR": "Trocar validade",
                        "ar": "التبادل صالح حتى"
                    },
                    "exchangeDate": {
                        "zh": "兑换日期：",
                        "en": "Exchange date: ",
                        "vi": "Thay đổi ngày: ",
                        "zh-Hant": "兌換日期：",
                        "id": "Batas waktu penukaran",
                        "es": "Fecha canje: ",
                        "pt-BR": "Trocar data:",
                        "ar": "تاريخ التبادل"
                    },
                    "exchanging": {
                        "zh": "兑换中",
                        "en": "Exchanging",
                        "vi": "Đang chuyển đổi",
                        "zh-Hant": "兌換中",
                        "id": "Menukar",
                        "es": "Canjeando",
                        "pt-BR": "Trocar",
                        "ar": "تبادل"
                    },
                    "noCoupon": {
                        "zh": "暂无红包！",
                        "en": "No coupon!",
                        "vi": "Không có thưởng",
                        "zh-Hant": "暫無紅包！",
                        "id": "Kupon tidak tersedia",
                        "es": "¡No cupón!",
                        "pt-BR": "Nenhum cupom!",
                        "ar": "ليس هناك قسيمة!"
                    },
                    "receiveTime": {
                        "zh": "可领取时间：",
                        "en": "Receive time: ",
                        "vi": "Thời gian nhận: ",
                        "zh-Hant": "可領取時間：",
                        "id": "Waktu penerimaan",
                        "es": "Hora recepción: ",
                        "pt-BR": "Hora de recebimento:",
                        "ar": "وقت الاستلام:"
                    },
                    "receiveNow": {
                        "zh": "立即领取",
                        "en": "Receive now",
                        "vi": "Nhận ngay bây giờ",
                        "zh-Hant": "立即領取",
                        "id": "Waktu penerimaan",
                        "es": "Recibir ahora",
                        "pt-BR": "Receba agora",
                        "ar": "استلم الآن"
                    },
                    "receiving": {
                        "zh": "领取中",
                        "en": "Receiving",
                        "vi": "Đang nhận",
                        "zh-Hant": "領取中",
                        "id": "Menerima",
                        "es": "Recibiendo",
                        "pt-BR": "Recebendo",
                        "ar": "الاستلام"
                    },
                    "received": {
                        "zh": "已领取",
                        "en": "Received",
                        "vi": "Đã nhận",
                        "zh-Hant": "已領取",
                        "id": "Diterima",
                        "es": "Recibido",
                        "pt-BR": "Recebido",
                        "ar": "تم الاستلام"
                    },
                    "rewardFinished": {
                        "zh": "已领完",
                        "en": "Reward has been finished",
                        "vi": "Phần thưởng đã được trao",
                        "zh-Hant": "已領完",
                        "id": "Hadiah telah diberikan",
                        "es": "La recompensa ha sido terminada",
                        "pt-BR": "Recompensa foi terminada",
                        "ar": "تم إنهاء المكافأة"
                    },
                    "availableCoupons": {
                        "zh": "距可领取还剩：",
                        "en": "Available coupons: ",
                        "vi": "Những điểm thưởng có hiệu lực: ",
                        "zh-Hant": "距可領取還剩：",
                        "id": "Kupon yang tersedia",
                        "es": "Disponible cupones: ",
                        "pt-BR": "Cupons disponíveis:",
                        "ar": "قسائم متاحة:"
                    },
                    "exchangeCouponSucc": {
                        "zh": "红包兑换成功",
                        "en": "Successful to exchange coupon",
                        "vi": "Trao đổi thưởng thành công",
                        "zh-Hant": "紅包兌換成功",
                        "id": "Berhasil menukar kupon",
                        "es": "Éxito canjear cupón",
                        "pt-BR": "Sucesso para trocar cupom",
                        "ar": "قسيمة نجاح التبادل"
                    },
                    "receiveCouponSucc": {
                        "zh": "红包领取成功",
                        "en": "Successful to receive coupon",
                        "vi": "Nhận thưởng thành công",
                        "zh-Hant": "紅包領取成功",
                        "id": "Berhasil menerima kupon",
                        "es": "Éxito recibir cupón",
                        "pt-BR": "Bem sucedido em receber cupom",
                        "ar": "قسيمة نجاح الاستلام"
                    }
                },
                "inviteFriends": {
                    "title": {
                        "zh": "邀请好友",
                        "en": "Invite Friends",
                        "vi": "Mời Bạn Bè",
                        "zh-Hant": "邀請好友",
                        "id": "Ajak teman",
                        "es": "Invitar Amigos",
                        "pt-BR": "Convide amigos",
                        "ar": "ادعو أصدقائك"
                    },
                    "inviteFriend": {
                        "zh": "邀请好友，赢取10美元",
                        "en": "Invite a friend and win 10 dollar",
                        "vi": "Mời bạn bè và nhận 10 đô la.",
                        "zh-Hant": "邀請好友，贏取10美元",
                        "id": "Ajak teman dan dapatkan 10 dolar",
                        "es": "Invite a un amigo y gane 10 dólares",
                        "pt-BR": "Convide um amigo e ganhe 10 dólares",
                        "ar": "ادع أحد أصدقائك واربح 10 دولار"
                    },
                    "invitedFriends": {
                        "zh": "当前邀请人数",
                        "en": "Invited Friends",
                        "vi": "Đã Mời bạn",
                        "zh-Hant": "當前邀請人數",
                        "id": "Ajak Teman",
                        "es": "Invitar Amigos",
                        "pt-BR": "Amigos Convidados",
                        "ar": "الأصدقاء المدعوين"
                    },
                    "inviteFriendsRegulations": {
                        "zh": "邀请好友规则：",
                        "en": "Invite Friends Regulations: ",
                        "vi": "Quy Định Mời Bạn Bè: ",
                        "zh-Hant": "邀請好友規則：",
                        "id": "Peraturan dalam mengundang teman: ",
                        "es": "Regulación Invite a un Amigo: ",
                        "pt-BR": "Regulamento de convite a amigos:",
                        "ar": "لوائح دعوة الأصدقاء"
                    },
                    "tip1": {
                        "zh": "1、注册即获得邀请类红包“人从众”，邀请3名好友注册，且至少有1人入金并完成1手交易即可兑现, 每位用户仅可领取一次；",
                        "en": "1. A reward coupon will be delivered to your account when you registered, it can be cashed once you invited three friends and at least one of them deposited and had one lot transaction.",
                        "vi": "1. Một phiếu thưởng sẽ được gửi đến tài khoản của bạn khi bạn đăng ký, nó có thể được đổi thành tiền mặt khi bạn mời ba người bạn và ít nhất một người trong số họ gửi tiền và có một giao dịch rất nhiều.",
                        "zh-Hant": "1、註冊即獲得邀請類紅包“人從眾”，邀請3名好友註冊，且至少有1人入金並完成1手交易即可兌現, 每位用戶僅可領取壹次；",
                        "id": "1. Hadiah akan langsung dikirim ke akun anda apabila anda sudah terdaftar di sistem, dan hadiah tersebut dapat dicairkan apabila anda telah mengundang 3 teman lain dan salah satunya telah melakukan penyetoran dana serta bertransaksi minimal 1 lot.",
                        "es": "1. Un cupón de recompensa será enviado a su cuenta cuando se registre; podrá ser liquidado una vez que haya invitado a tres amigos y al menos uno de ellos haya depositado y haya operado un lote.",
                        "pt-BR": "1. Um cupom de recompensa será entregue em sua conta quando você se registrou, ele pode ser descontado uma vez que você convidou três amigos e pelo menos um deles depositou e teve uma transação de lote.",
                        "ar": "1- سيتم تسليم كوبون المكافأة إلى حسابك عندما تقوم بالتسجيل. ويمكنك سحبه نقدًا بعد أن تدعو ثلاثة من أصدقائك ويقوم واحد منهم على الأقل بالإيداع وبالدخول في صفقة حجمها عقد واحد."
                    },
                    "tip2": {
                        "zh": "2、您只有通过邀请链接进行注册的好友才算有效；",
                        "en": "2. It can be effective only when your friend is registered by the invite link.",
                        "vi": "2. Nó sẽ có hiệu lực chỉ khi bạn bè của bạn đã được đăng ký bởi liên kết mời.",
                        "zh-Hant": "2、您只有通過邀請鏈接進行註冊的好友才算有效；",
                        "id": "2. Hanya berlaku apabila teman anda mendaftar melalui tautan yang anda kirimkan.",
                        "es": "2. Sólo se hace efectivo cuando sus amigos se registren vía el link de invitación. ",
                        "pt-BR": "2. Pode ser efetivo somente quando seu amigo é registrado pelo link de convite.",
                        "ar": "2- لن تصبح المكافأة سارية إلا بعد أن يقوم صديقك بالتسجيل باستخدام رابط الدعوة الخاص بك."
                    },
                    "tip3": {
                        "zh": "3、同一手机号，身份证号和银行卡号视为同一用户；",
                        "en": "3.Same cellphone, ID and bank card number will be treated as same user.",
                        "vi": "3. Số điện thoại di động, ID và số thẻ ngân hàng trùng khớp sẽ được coi là cùng một người dùng.",
                        "zh-Hant": "3、同壹手機號，身份證號和銀行卡號視為同壹用戶；",
                        "id": "3. Identitas, nomor telepon dan rekening bank yang sama akan dianggap sebagai satu orang saja.",
                        "es": "3. Mismo móvil, ID y número de tarjeta de banco serán tratados como el mismo usuario. ",
                        "pt-BR": "3.Same celular, ID e número do cartão bancário serão tratados como o mesmo usuário.",
                        "ar": "3- سيتم التعامل مع نفس رقم الهاتف والهوية ورقم البطاقة المصرفية باعتبارهم نفس المستخدم."
                    },
                    "tip4_1": {
                        "zh": "4、任何通过第三方作弊软件刷取好友邀请奖励，一经发现",
                        "en": "4. Any cheating, if discovered by ",
                        "vi": "4. Bất kỳ hành động gian lận nào, nếu bị phát hiện bởi ",
                        "zh-Hant": "4、任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現",
                        "id": "4. ",
                        "es": "4. Cualquier irregularidad, si fuera descubierta ",
                        "pt-BR": "4. Qualquer engano, se descoberto por",
                        "ar": "4- إذا حالة من حالات الغش، إذا اكتشفت بواسطة"
                    },
                    "tip4_2": {
                        "zh": "有权取消红包兑现奖励；",
                        "en": ", will be disqualified.",
                        "vi": " sẽ bị loại.",
                        "zh-Hant": "有權取消紅包兌現獎勵；",
                        "id": " berhak untuk menghentikan dan membatalkan hadiah apabila terdapat kegiatan yang mencurigakan.",
                        "es": ", será descalificado.",
                        "pt-BR": ", será desclassificado.",
                        "ar": "، سيتم استبعادها,"
                    },
                    "tip5_1": {
                        "zh": "5、本活动最终解释权归",
                        "en": "5. The final interpretation of this activity owned by ",
                        "vi": "5. ",
                        "zh-Hant": "5、本活動最終解釋權歸",
                        "id": "5. ",
                        "es": "5. Se reserva todos los derechos explicativos ",
                        "pt-BR": "5. A interpretação final desta atividade de propriedade",
                        "ar": "5 حق التفسير النهائي لهذا النشاط تمتلكه"
                    },
                    "tip5_2": {
                        "zh": "所有。如有疑问，请咨询客服",
                        "en": ". If you have other questions，please contact ",
                        "vi": " bảo lưu quyền đưa ra giải thích cuối cùng về hoạt động giao dịch. Nếu bạn có bất kì câu hỏi nào, vui lòng liên hệ với số điện thoại bộ phận dịch vụ khách hàng của chúng tôi ",
                        "zh-Hant": "所有。如有疑問，請咨詢客服",
                        "id": " memliki semua hak dalam memutuskan keputusan yang mutlak dan tidak dapat diganggu gugat. Jika anda memiliki pertanyaan, silahkan hubungi pusat layanan pelanggan kami ",
                        "es": ". Para cualquier otra consulta，por favor contacte ",
                        "pt-BR": ". Se você tiver outras dúvidas, entre em contato como o",
                        "ar": ". إذا كان لديك أي أسئلة أخرى تود طرحها، يرجى التواصل مع"
                    },
                    "tip5_3": {
                        "zh": "。",
                        "en": " customer service.",
                        "vi": ".",
                        "zh-Hant": "。",
                        "id": ".",
                        "es": " servicio al cliente.",
                        "pt-BR": "serviço ao cliente.",
                        "ar": "خدمة العملاء"
                    },
                    "nameFriend": {
                        "zh": "好友昵称",
                        "en": "Name of friend",
                        "vi": "Tên của bạn",
                        "zh-Hant": "好友昵稱",
                        "id": "Nama teman",
                        "es": "Nombre amigo",
                        "pt-BR": "Nome do amigo",
                        "ar": "اسم الصديق"
                    },
                    "statusDeposit": {
                        "zh": "入金状态",
                        "en": "Status in deposit",
                        "vi": "Trạng thái gửi tiền",
                        "zh-Hant": "入金狀態",
                        "id": "Status Pengisian Dana",
                        "es": "Estatus depósito",
                        "pt-BR": "Status no depósito",
                        "ar": "الحالة في الإيداع"
                    },
                    "statusTransactions": {
                        "zh": "是否完成交易",
                        "en": "Status in transactions",
                        "vi": "Trạng thái giao dịch",
                        "zh-Hant": "是否完成交易",
                        "id": "Status Transaksi",
                        "es": "Estatus transacciones",
                        "pt-BR": "Status nas transações",
                        "ar": "الحالة في المعاملات"
                    }
                },
                "commission": {
                    "title": {
                        "zh": "复制和分成",
                        "en": "Commission",
                        "vi": "Hoa Hồng",
                        "zh-Hant": "復制和分成",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês",
                        "ar": "العمولة"
                    },
                    "followingMaster": {
                        "zh": "当前复制高手",
                        "en": "Following the master",
                        "vi": "Đang sao chép bậc thầy",
                        "zh-Hant": "當前復制高手",
                        "id": "Sedang mengikuti Master",
                        "es": "Siguiendo al master",
                        "pt-BR": "Seguindo o mestre",
                        "ar": "متابعة الأستاذ"
                    },
                    "deductedCommissionsLastMonth": {
                        "zh": "上月扣除分成",
                        "en": "The deducted commissions last month",
                        "vi": "Khấu trừ hoa hồng tháng trước",
                        "zh-Hant": "上月扣除分成",
                        "id": "Komisi yang dipotong bulan lalu",
                        "es": "La comisión deducida el mes pasado",
                        "pt-BR": "As comissões deduzidas no mês passado",
                        "ar": "العمولات المخصومة الشهر الماضي"
                    },
                    "totalCommissions": {
                        "zh": "扣除分成总计",
                        "en": "The total of commissions",
                        "vi": "Tổng hoa hồng",
                        "zh-Hant": "扣除分成總計",
                        "id": "Total komisi",
                        "es": "El total de comisiones",
                        "pt-BR": "O total de comissões",
                        "ar": "إجمالي العمولات"
                    },
                    "myFollowingStatus": {
                        "zh": "我的复制情况",
                        "en": "My Following status",
                        "vi": "Trạng thái sao chép của tôi",
                        "zh-Hant": "我的復制情況",
                        "id": "Status Copy Trading saya",
                        "es": "Mi estatus Siguiendo",
                        "pt-BR": "Meu status a seguir",
                        "ar": "حالة المتابعة الخاصة بي"
                    },
                    "tp1": {
                        "zh": "注：每月1号结算上一月分成",
                        "en": "Monthly commissions will be settled on the 1st of next month",
                        "vi": "Hoa hồng hàng tháng sẽ được thanh toán vào ngày 1 của tháng tiếp theo",
                        "zh-Hant": "註：每月1號結算上壹月分成",
                        "id": " Komisi bulanan akan dibagikan pada tanggal pertama di bulan berikutnya ",
                        "es": "Las comisiones mensuales será liquidadas el 1 de cada mes siguiente",
                        "pt-BR": "Comissões mensais serão liquidadas no dia 1 do próximo mês",
                        "ar": "سيتم تسوية العمولات الشهرية في اليوم الأول من الشهر القادم"
                    },
                    "nameMaster": {
                        "zh": "高手名称",
                        "en": "The name of master",
                        "vi": "Tên bậc thầy",
                        "zh-Hant": "高手名稱",
                        "id": "Nama Master",
                        "es": "El nombre del master",
                        "pt-BR": "O nome do mestre",
                        "ar": "اسم الأستاذ"
                    },
                    "deductedCommissions": {
                        "zh": "扣除分成",
                        "en": "The deducted commissions",
                        "vi": "Khấu trừ hoa hồng",
                        "zh-Hant": "扣除分成",
                        "id": "Komisi yang terpotong",
                        "es": "Las comisiones deducidas",
                        "pt-BR": "As comissões deduzidas",
                        "ar": "العمولات المخصومة"
                    },
                    "timeDeductingCommission": {
                        "zh": "扣除时间",
                        "en": "The time of deducting commission",
                        "vi": "Thời điểm khấu trừ hoa hồng",
                        "zh-Hant": "扣除時間",
                        "id": "Waktu komisi terpotong",
                        "es": "La hora deducción comisiones",
                        "pt-BR": "A hora de dedução de comissão",
                        "ar": "وقت خصم العمولة"
                    },
                    "timeDeductingCommissionM": {
                        "zh": "扣除时间：",
                        "en": "The time of deducting commission: ",
                        "vi": "Thời điểm khấu trừ hoa hồng: ",
                        "zh-Hant": "扣除時間：",
                        "id": "Waktu komisi terpotong",
                        "es": "La hora deducción comisiones: ",
                        "pt-BR": "A hora de dedução da comissão:",
                        "ar": "وقت خصم العمولة:"
                    },
                    "accept": {
                        "zh": "同意协议",
                        "en": "Accept",
                        "vi": "Chấp nhận",
                        "zh-Hant": "同意協議",
                        "id": "Terima",
                        "es": "Aceptar",
                        "pt-BR": "Aceitar",
                        "ar": "قبول"
                    },
                    "cannotCopy": {
                        "zh": "无法进行复制操作",
                        "en": "Cannot follow",
                        "vi": "Không thể sao chép",
                        "zh-Hant": "無法進行復制操作",
                        "id": "Tidak dapat mengikuti",
                        "es": "No puede seguir",
                        "pt-BR": "Não pode seguir",
                        "ar": "لا يمكن المتابعة"
                    },
                    "cannotCopy1": {
                        "zh": "您的可用复制金额不足，无法复制高手",
                        "en": "Available amount is insufficient, cannot follow other master",
                        "vi": "Số tiền có sẵn là không đủ, không thể sao chép các nhà giao dịch khác",
                        "zh-Hant": "您的可用復制金額不足，無法復制高手",
                        "id": " Tidak dapat mengikuti Master lain, saldo tidak cukup ",
                        "es": "Cantidad disponible insuficiente, no puede seguir a otro Master",
                        "pt-BR": "Valor disponível é insuficiente, não pode seguir outro mestre",
                        "ar": "المبلغ المتاح غير كاف، لا يمكن إتباع أساتذة آخرين"
                    },
                    "cannotCopy2_1": {
                        "zh": "高手最低复制金额为",
                        "en": "The minimum copy amount of the master is",
                        "vi": "Số tiền sao chép tối thiểu của bậc thầy là",
                        "zh-Hant": "高手最低復制金額為",
                        "id": "Jumlah minimun untuk mengikuti master ini adalah ",
                        "es": "La cantidad mínima copy del master es",
                        "pt-BR": "O valor mínimo de cópia do mestre é",
                        "ar": "الحد الأدنى لمبلغ النسخ لهذا الأستاذ هو"
                    },
                    "cannotCopy2_2": {
                        "zh": " 请先充值",
                        "en": ", please deposit first",
                        "vi": "Vui lòng gửi tiền trước",
                        "zh-Hant": " 請先充值",
                        "id": ", Silahkan isi dana terlebih dahulu",
                        "es": ", por favor deposite primero",
                        "pt-BR": ", por favor, depositar primeiro",
                        "ar": "، يرجى الإيداع أولاً"
                    },
                    "cannotCopy3": {
                        "zh": "您已经是高手了，无法复制其他高手",
                        "en": "You are already a master, cannot follow other master",
                        "vi": "Bạn đã là bậc thầy, không thể sao chép các bậc thầy khác",
                        "zh-Hant": "您已經是高手了，無法復制其他高手",
                        "id": "Anda adalah Master, tidak dapat mengikuti Master yang lain",
                        "es": "Ya eres un Master, no puedes seguir a otro Master.",
                        "pt-BR": "Você já é um mestre, não pode seguir outro mestre",
                        "ar": "أنت أستاذ بالفعل، لا يمكنك إتباع أستاذ آخر"
                    },
                    "cannotCopy4": {
                        "zh": "您的资金处于封闭期，无法使用复制功能",
                        "en": "Your funds are closed and cannot follow orders",
                        "vi": "Các quỹ của bạn đã được đóng và không thể theo các lệnh khác",
                        "zh-Hant": "您的資金處於封閉期，無法使用復制功能",
                        "id": "Dana anda tidak cukup, tidak dapat mengikuti transaksi",
                        "es": "Sus fondos están cerrados y no pueden seguir órdenes",
                        "pt-BR": "Seus fundos estão fechados e não podem seguir ordens",
                        "ar": "The copy is no longer in use"
                    },
                    "depositNow": {
                        "zh": "立即充值",
                        "en": "Deposit now",
                        "vi": "Gửi tiền ngay",
                        "zh-Hant": "立即充值",
                        "id": "Isi dana sekarang",
                        "es": "Depositar ahora",
                        "pt-BR": "Deposite agora",
                        "ar": "قم بالإيداع الآن"
                    },
                    "loginNow": {
                        "zh": "立即登录",
                        "en": "Login now",
                        "vi": "Đăng nhập ngay",
                        "zh-Hant": "立即登錄",
                        "id": "Masuk",
                        "es": "Inicia sesión ahora",
                        "pt-BR": "Conecte-se agora",
                        "ar": "تسجيل الدخول الآن"
                    },
                    "tp2": {
                        "zh": "可用复制金额不足",
                        "en": "Available copy amount insufficient",
                        "vi": "Số tiền sao chép không đủ",
                        "zh-Hant": "可用復制金額不足",
                        "id": "Jumlah dana copy tidak mencukupi",
                        "es": "Importe copy disponible insuficiente",
                        "pt-BR": "Quantidade de cópias disponíveis insuficiente",
                        "ar": "مبلغ النسخ المتاح غير كاف"
                    },
                    "follow": {
                        "zh": "关注",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "關註",
                        "id": "IKuti",
                        "es": "Seguir",
                        "pt-BR": "Seguir",
                        "ar": "متابعة"
                    },
                    "unfollow": {
                        "zh": "取消关注",
                        "en": "Unfollow",
                        "vi": "Không sao chép",
                        "zh-Hant": "取消關註",
                        "id": "Berhenti mengikuti",
                        "es": "Dejar de seguir",
                        "pt-BR": "Parar de seguir",
                        "ar": "إلغاء المتابعة"
                    },
                    "followed": {
                        "zh": "已关注",
                        "en": "Followed",
                        "vi": "Đã sao chép",
                        "zh-Hant": "已關註",
                        "id": "Yang diikuti",
                        "es": "Seguido",
                        "pt-BR": "Seguido",
                        "ar": "تمت المتابعة"
                    }
                },
                "depositWithdrawal": {
                    "transferQuick3Tip1": {
                        "zh": "1.页面所提供的转账信息将不定期更换，切勿重复使用。",
                        "en": "1. The transfer information provided on the page will be changed from time to time and should not be reused.",
                        "vi": "1. Thông tin chuyển được cung cấp trên trang sẽ được thay đổi theo thời gian và không nên được sử dụng lại.",
                        "zh-Hant": "1.頁面所提供的轉賬信息將不定期更換，切勿重複使用。",
                        "id": "1. Informasi transfer yang disediakan pada halaman akan berubah dari waktu ke waktu dan tidak boleh digunakan kembali.",
                        "es": "1. La información de transferencia provista en la página se cambiará de vez en cuando y no se debe reutilizar.",
                        "pt-BR": "1. As informações de transferência fornecidas na página serão alteradas de tempos em tempos e não devem ser reutilizadas.",
                        "ar": ". سيتم تغيير معلومات النقل المقدمة على الصفحة من وقت لآخر ويجب عدم إعادة استخدامها."
                    },
                    "transferQuick3Tip2": {
                        "zh": "2.转账时”转账备注”是验证资金来源的重要信息，请务必填写。",
                        "en": "2. \"Transfer Remarks\" of transfer is important information to verify the source of funds, please be sure to fill out.",
                        "vi": "2. \"Ghi chú chuyển khoản\" về chuyển khoản là thông tin quan trọng để xác minh nguồn tiền, vui lòng đảm bảo điền vào.",
                        "zh-Hant": "2.轉賬時”轉賬備註”是驗證資金來源的重要信息，請務必填寫。",
                        "id": "2. \"Keterangan Transfer\" dari transfer adalah informasi penting untuk memverifikasi sumber dana, pastikan untuk mengisi.",
                        "es": "2. Los \"Comentarios de transferencia\" de la transferencia son información importante para verificar la fuente de los fondos, asegúrese de completarlos.",
                        "pt-BR": "2. \"Transferir observações\" de transferência é uma informação importante para verificar a origem dos fundos, por favor, não se esqueça de preencher.",
                        "ar": "ملاحظات نقل \ نقل معلومات مهمة للتحقق من مصدر الأموال ، يرجى التأكد من ملء. ،"
                    },
                    "transferQuick3Tip3": {
                        "zh": "3.实际转账金额必须与订单一直，否则资金无法到账。",
                        "en": "3. The actual transfer amount must be the same as the order, otherwise the funds cannot be received.",
                        "vi": "3. Số tiền chuyển thực tế phải giống như đơn đặt hàng, nếu không tiền sẽ không thể nhận được.",
                        "zh-Hant": "3.實際轉賬金額必須與訂單一直，否則資金無法到賬。",
                        "id": "3. Jumlah transfer aktual harus sama dengan pesanan, jika tidak dana tidak dapat diterima.",
                        "es": "3. El monto real de la transferencia debe ser el mismo que el pedido, de lo contrario no se pueden recibir los fondos.",
                        "pt-BR": "3. O valor de transferência real deve ser o mesmo que o pedido, caso contrário, os fundos não poderão ser recebidos.",
                        "ar": "يجب أن يكون مبلغ التحويل الفعلي هو نفسه في امر التحويل ، وإلا لا يمكن استلام الأموال. "
                    },
                    "bankCardTransferTip": {
                        "zh": "注意：必须使用所选择的银行卡进行转账",
                        "en": "Notice: The selected bank card must be used for transfer.",
                        "vi": "Chú ý: Thẻ ngân hàng được chọn phải được sử dụng để chuyển khoản.",
                        "zh-Hant": "注意：必須使用所選擇的銀行卡進行轉賬",
                        "id": "Pemberitahuan. Rekening bank yang dipilih harus digunakan untuk pengiriman dana",
                        "es": "Aviso: La tarjeta bancaria seleccionada debe ser utilizada para la transferencia.",
                        "pt-BR": "Aviso: o cartão de banco selecionado deverá ser usado para transferir.",
                        "ar": "ملحوظة: يجب استخدام البطاقة المصرفية المختارة في التحويل."
                    },
                    "title": {
                        "zh": "充值提现",
                        "en": "Deposit/Withdrawal",
                        "vi": "Gửi tiền/ Rút tiền",
                        "zh-Hant": "充值提現",
                        "id": "Setor/Tarik",
                        "es": "Depositar/Reembolsar",
                        "pt-BR": "depósito/saque",
                        "ar": "الإيداع/السحب"
                    },
                    "onlineBankingDepositRules": {
                        "zh": "网银入金规则",
                        "en": "Online banking deposit rules",
                        "vi": "Quy tắc gửi tiền ngân hàng trực tuyến",
                        "zh-Hant": "網銀入金規則",
                        "id": "Peraturan pengisian dana melalui online banking",
                        "es": "Reglas depósito bancarios online",
                        "pt-BR": "Regras de depósito bancário online",
                        "ar": "قواعد الإيداع المصرفي عبر الإنترنت"
                    },
                    "depositAccount": {
                        "zh": "充值账户",
                        "en": "Deposit account",
                        "vi": "Tài khoản gửi tiền",
                        "zh-Hant": "充值賬戶",
                        "id": "Isi Dana Akun",
                        "es": "Cuenta de depósito",
                        "pt-BR": "Conta de depósito",
                        "ar": "حساب الإيداع"
                    },
                    "depositAccountJ": {
                        "zh": "充值账户",
                        "en": "Account",
                        "vi": "Tài khoản",
                        "zh-Hant": "充值賬戶",
                        "id": "Akun",
                        "es": "Cuenta",
                        "pt-BR": "Conta",
                        "ar": "الحساب"
                    },
                    "switchAccount": {
                        "zh": "点击切换子账号",
                        "en": "Switch account",
                        "vi": "Chuyển tài khoản",
                        "zh-Hant": "點擊切換子帳號",
                        "id": "Pindah Akun",
                        "es": "Cambiar cuenta",
                        "pt-BR": "Trocar conta",
                        "ar": "تغيير الحساب"
                    },
                    "depositAmount": {
                        "zh": "充值金额",
                        "en": "Deposit Amount",
                        "vi": "Số tiền gửi",
                        "zh-Hant": "充值金額",
                        "id": "Jumlah dana yang diisi",
                        "es": "Cantidad Depósito",
                        "pt-BR": "Depositar quantia",
                        "ar": "مبلغ الإيداع"
                    },
                    "depositAmountJ": {
                        "zh": "充值金额",
                        "en": "Amount",
                        "vi": "Số tiền",
                        "zh-Hant": "充值金額",
                        "id": "Jumlah",
                        "es": "Cantidad",
                        "pt-BR": "Montante",
                        "ar": "المبلغ"
                    },
                    "depositAmountM": {
                        "zh": "充值金额：",
                        "en": "Deposit Amount: ",
                        "vi": "Số tiền gửi: ",
                        "zh-Hant": "充值金額：",
                        "id": "Jumlah dana yang diisi: ",
                        "es": "Importe Depósito: ",
                        "pt-BR": "Depositar quantia:",
                        "ar": "مبلغ الإيداع:"
                    },
                    "rechargeMethod": {
                        "zh": "充值方式",
                        "en": "Recharge Method",
                        "vi": "Phương thức nạp lại",
                        "zh-Hant": "充值方式",
                        "id": "Metode pengisian dana",
                        "es": "Método Recarga",
                        "pt-BR": "Método de recarda",
                        "ar": "طريقة إعادة الشحن"
                    },
                    "walletAvailableAmount": {
                        "zh": "钱包可用余额",
                        "en": "Wallet Available Amount",
                        "vi": "Số Tiền Có Sẵn Trên Ví",
                        "zh-Hant": "錢包可用余額",
                        "id": "Saldo yang tersedia di Dompet",
                        "es": "Wallet Importe Disponible",
                        "pt-BR": "Quantia disponível na carteira",
                        "ar": "المبلغ المتاح في المحفظة"
                    },
                    "onlineBanking": {
                        "zh": "网银支付",
                        "en": "Payment of Internet Banking",
                        "vi": "Thanh toán ngân hàng trực tuyến",
                        "zh-Hant": "網銀支付",
                        "id": "Pembayaran melalui Internet Banking",
                        "es": "Pagos Banca Internet",
                        "pt-BR": "Pagamento pelo internet banking",
                        "ar": "مدفوعات الأعمال المصرفية عبر الإنترنت"
                    },
                    "deposit": {
                        "zh": "充值",
                        "en": "Deposit",
                        "vi": "Kí Quỹ",
                        "zh-Hant": "充值",
                        "id": "Setor",
                        "es": "Depositar",
                        "pt-BR": "Depósito",
                        "ar": "إيداع"
                    },
                    "withdrawal": {
                        "zh": "提现",
                        "en": "Withdrawal",
                        "vi": "Rút tiền",
                        "zh-Hant": "提現",
                        "id": "Tarik",
                        "es": "Reembolsar",
                        "pt-BR": "Saque",
                        "ar": "السحب"
                    },
                    "withdrawAccount": {
                        "zh": "提现账户",
                        "en": "Withdraw account",
                        "vi": "Tài khoản rút tiền",
                        "zh-Hant": "提現賬戶",
                        "id": "Tarik dari akun",
                        "es": "Cuenta Reembolsar",
                        "pt-BR": "Conta de saque",
                        "ar": "حساب السحب"
                    },
                    "withdrawAccountJ": {
                        "zh": "提现账户",
                        "en": "Account",
                        "vi": "Tài khoản",
                        "zh-Hant": "提現賬戶",
                        "id": "Akun",
                        "es": "Cuenta",
                        "pt-BR": "Conta",
                        "ar": "الحساب"
                    },
                    "tradingAccount": {
                        "zh": "交易账户",
                        "en": "Trading account",
                        "vi": "Tài Khoản Giao Dịch",
                        "zh-Hant": "交易賬戶",
                        "id": "Akun transaksi",
                        "es": "Cuenta trading",
                        "pt-BR": "Conta de negociação",
                        "ar": "حساب التداول"
                    },
                    "wallet": {
                        "zh": "钱包",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira",
                        "ar": "المحفظة"
                    },
                    "withdrawalToBankCard": {
                        "zh": "提现至银行卡",
                        "en": "Withdrawal to bank card",
                        "vi": "Rút tiền từ thẻ ngân hàng",
                        "zh-Hant": "提現至銀行卡",
                        "id": "Tarik ke rekening bank",
                        "es": "Reembolsar a tarjeta banco",
                        "pt-BR": "Retirada para cartão bancário",
                        "ar": "السحب إلى بطاقة مصرفية"
                    },
                    "extractableAmount": {
                        "zh": "可提取金额",
                        "en": "Extractable amount",
                        "vi": "Số lượng có thể trích",
                        "zh-Hant": "可提取金額",
                        "id": "Jumlah dana yang dapat digunakan",
                        "es": "Cantidad extraíble",
                        "pt-BR": "Quantidade extraível",
                        "ar": "المبلغ المسموح باستخراجه"
                    },
                    "extractableAmountM": {
                        "zh": "可提取金额：",
                        "en": "Extractable amount: ",
                        "vi": "Số lượng có thể trích: ",
                        "zh-Hant": "可提取金額：",
                        "id": "Jumlah dana yang dapat digunakan: ",
                        "es": "Cantidad extraíble: ",
                        "pt-BR": "Quantidade extraível:",
                        "ar": "المبلغ المسموح باستخراجه:"
                    },
                    "tip1": {
                        "zh": "提示：您还有持仓订单，请平仓后再提现如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice:You have position orders, please close out and then withdrawal If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn có lệnh giao dịch, vui lòng đóng và rút tiền Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với dịch vụ khách hàng ",
                        "zh-Hant": "提示：您還有持倉訂單，請平倉後再提現如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : Silahkan tutup semua posisi yang masih terbuka sebelum melakukan penarikan. Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Notificación:Tiene órdenes con posiciones, por favor cierre éstas y después reembolse.  Para cualquier cuestión, por favor, contacte con su gestor de cuenta o con el Servicio al Cliente",
                        "pt-BR": "Aviso:você tem ordens de posição, por favor, encerrar e, em seguida, retirada Se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente",
                        "ar": "ملحوظة: لديك أوامر خاصة بالمركز، يرجى الإغلاق وبعد ذلك السحب. إذا كان لديك أي أسئلة تود طرحها ، يرجى الاتصال بمدير حسابك أو بخدمة العملاء."
                    },
                    "tip2": {
                        "zh": "提示：您未实名认证，请完成实名认证，如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice:You don't have real-name authentication，please complete it If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn không có xác thực tên thật ， vui lòng hoàn thành nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với bộ phận dịch vụ khách hàng ",
                        "zh-Hant": "提示：您未實名認證，請完成實名認證，如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : Akun Anda belum melewati sertifikasi, mohon dilengkapi terlebih dahulu. Silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Notificación:No autentificación nombre real，por favor, contacte con su Gestor de Cuenta o con el Servicio al Cliente",
                        "pt-BR": "Aviso: você não tem autenticação de nome real，por favor preencha se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente",
                        "ar": "ملحوظة: ليس لديك مصادقة للاسم الحقيقي، يرجى استكماله. إذا كان لديك أي أسئلة تود طرحها ، يرجى الاتصال بمدير حسابك أو بخدمة العملاء."
                    },
                    "tip3": {
                        "zh": "提示：您还有正在复制的高手，请取消复制关系后再提现，如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice: You still have following masters,please cancel the follow relationship then withdraw the money If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn vẫn có quan hệ sao chép bậc thầy, vui lòng hủy bỏ mối quan hệ sau đó rút tiền Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với dịch vụ khách hàng ",
                        "zh-Hant": "提示：您還有正在復制的高手，請取消復制關系後再提現，如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : anda masih mengikuti Master, mohon Berhenti mengikuti Master terlebih dahulu sebelum melakukan penarikan dana. Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami",
                        "es": "Notificación: Todavía sigue a masters,por favor, cancele la relación de seguimiento y después reembolse el dinero. Para cualquier cuestión, por favor, contacte con su Gestor de Cuenta o con el Servicio al Cliente ",
                        "pt-BR": "Aviso: Você ainda tem mestres seguidos, por favor, cancele o relacionamento a seguir, em seguida, retirar o dinheiro Se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente",
                        "ar": "ملحوظة: ما يزال لديك أساتذة تقوم بمتابعتهم، يرجى إلغاء علاقة المتابعة ثم سحب الأموال بعد ذلك. إذا كان لديك أي أسئلة تود طرحها ، يرجى الاتصال بمدير حسابك أو بخدمة العملاء."
                    },
                    "tip4": {
                        "zh": "提现金额不能大于可提现金额",
                        "en": "Withdraw amount can not be greater than the extractable amount",
                        "vi": "Số tiền rút không thể lớn hơn số tiền có thể trích",
                        "zh-Hant": "提現金額不能大於可提現金額",
                        "id": " Jumlah penarikan dana tidak dapat melebihi saldo yang dapat digunakan ",
                        "es": "La cantidad retirada no puede ser mayor que la cantidad extraíble",
                        "pt-BR": "Valor do saque não pode ser maior do que o valor sacável.",
                        "ar": "لا يمكن أن يكون المبلغ المسحوب أكبر من المبلغ المسموح باستخراجه"
                    },
                    "tip5": {
                        "zh": "现在提现会导致您的账户红包失效，是否继续提现？",
                        "en": "Now withdrawal will lead to lose efficacy for your reward,Whether or not to continue?",
                        "vi": "Bây giờ rút tiền sẽ dẫn đến mất hiệu lực cho phần thưởng của bạn,bạn có tiếp tục hay không?",
                        "zh-Hant": "現在提現會導致您的賬戶紅包失效，是否繼續提現？",
                        "id": " Penarikan akan membatalkan hadiah anda, apakah ingin terus melanjutkan? ",
                        "es": "Reembolsar ahora pudiera conllevar una pérdida de eficacia en su recompensa, ¿Desea continuar o no?",
                        "pt-BR": "Agora o saque levará a perda de eficácia para sua recompensa, deseja continuar?",
                        "ar": "سيؤدي السحب الآن إلى فقدان كفاءة عائدك، هل تريد الاستمرار أو لا؟"
                    },
                    "tip6": {
                        "zh": "出金银行卡用户姓名必须与开户姓名一致",
                        "en": "The name of the bank card must be the same as the name of the account",
                        "vi": "Tên của thẻ ngân hàng phải trùng khớp với tên của tài khoản",
                        "zh-Hant": "出金銀行卡用戶姓名必須與開戶姓名壹致",
                        "id": " Nama pemilik rekening bank harus sama dengan nama pemilik akun ",
                        "es": "El nombre de la tarjeta bancaria debe ser el mismo que el nombre de la cuenta",
                        "pt-BR": "O nome do cartão bancário deve ser o mesmo que o nome da conta",
                        "ar": "يجب أن يكون اسم البطاقة المصرفية هو نفس اسم الحساب"
                    },
                    "tip7": {
                        "zh": "实名认证后才可以进行资金提现。",
                        "en": "You should have real-name authentication and then withdraw the money",
                        "vi": "Bạn bên có xác nhận tên thật và sau đó có thể rút tiền",
                        "zh-Hant": "實名認證後才可以進行資金提現。",
                        "id": "Sebelum melakukan penarikan uang, pastikan akun anda telah selesai diverifikasi",
                        "es": "Debe tener autenticación nombre real y luego reembolsar el dinero",
                        "pt-BR": "Você deve ter autenticação de nome real e, em seguida, retirar o dinheiro",
                        "ar": "يجب أن تتم مصادقة اسمك الحقيقي وبعد ذلك سحب أموالك"
                    },
                    "tip8": {
                        "zh": "提现金额最少为20美金。",
                        "en": "At least $20 for the withdrawal.",
                        "vi": "Ít nhất 20 đô-la cho 1 lần rút tiền",
                        "zh-Hant": "提現金額最少為20美金。",
                        "id": "Minimal penarikan adalah 20$",
                        "es": "Al menos $20 para reembolsos.",
                        "pt-BR": "Pelo menos US $ 20 para a retirada.",
                        "ar": "على الأقل 20 دولار للسحب"
                    },
                    "tip9": {
                        "zh": "出金金额最多为0.00美金",
                        "en": "Not better than $0 for your withdraw amount",
                        "vi": "Không nhiều hơn $ 0 cho số tiền rút của bạn",
                        "zh-Hant": "出金金額最多為0.00美金",
                        "id": " Jumlah penarikan harus lebih dari 0$ ",
                        "es": "No es mejor que $0 para importe reembolso",
                        "pt-BR": "Não melhor que $ 0 pelo seu valor de retirada",
                        "ar": "ليس أفضل من 0 دولار لمبلغ السحب"
                    },
                    "tip10": {
                        "zh": "未充值，体验金和盈利不可提取。",
                        "en": "Please top up otherwise the bonus and profit can't be withdraw.",
                        "vi": "Vui lòng nạp tiền nếu không, tiền thưởng và lợi nhuận không thể rút được.",
                        "zh-Hant": "未充值，體驗金和盈利不可提取。",
                        "id": " Silahkan tambah dana terlebih dahulu untuk menarik bonus dan keuntungan anda.",
                        "es": "Por favor, deposite, de lo contrario, la bonificación y el beneficio no se pueden retirar.",
                        "pt-BR": "Por favor, complete o bônus e o lucro não pode ser retirado.",
                        "ar": "يرجى إضافة الأموال وإلا لن يمكن سحب المكافأة والربح."
                    },
                    "tip11": {
                        "zh": "存在复制关系，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        "en": "Please cancel the follow relationship, if you want to all withdrawal.",
                        "vi": "Vui lòng hủy bỏ mối quan hệ sao chép, nếu bạn muốn rút tiền.",
                        "zh-Hant": "存在復制關系，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。",
                        "id": " Sebelum menarik semua dana, pastikan anda telah berhenti mengikuti semua Master terlebih dahulu",
                        "es": "Por favor, cancele la relación de seguimiento, si desea reembolsar todo.",
                        "pt-BR": "Por favor, cancele a seguinte relação, se você quiser toda a retirada.",
                        "ar": "يرجى إلغاء علاقة المتابعة، إذا كنت تريد السحب الكامل."
                    },
                    "cardNumber": {
                        "zh": "银行账号",
                        "en": "Bank account number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "銀行賬號",
                        "id": "Nomor rekening bank",
                        "es": "Número de cuenta bancaria",
                        "pt-BR": "Número da conta bancária",
                        "ar": "رقم البطاقة"
                    },
                    "cardNumberM": {
                        "zh": "银行账号：",
                        "en": "Bank account number: ",
                        "vi": "Số tài khoản ngân hàng: ",
                        "zh-Hant": "銀行賬號：",
                        "id": "Nomor rekening bank: ",
                        "es": "Número de cuenta bancaria: ",
                        "pt-BR": "Número da conta bancária: ",
                        "ar": "رقم البطاقة:"
                    },
                    "bank": {
                        "zh": "开户行",
                        "en": "Bank",
                        "vi": "Ngân hàng",
                        "zh-Hant": "開戶行",
                        "id": "Bank",
                        "es": "Banco",
                        "pt-BR": "Banco",
                        "ar": "البنك"
                    },
                    "name": {
                        "zh": "姓名",
                        "en": "Name",
                        "vi": "Tên",
                        "zh-Hant": "姓名",
                        "id": "Nama",
                        "es": "Nombre",
                        "pt-BR": "Nome",
                        "ar": "الاسم"
                    },
                    "nameM": {
                        "zh": "姓名：",
                        "en": "Name:",
                        "vi": "Tên:",
                        "zh-Hant": "姓名：",
                        "id": "Nama:",
                        "es": "Nombre:",
                        "pt-BR": "Nome:",
                        "ar": "الاسم:"
                    },
                    "informationBankAccount": {
                        "zh": "添加银行卡",
                        "en": "The information of bank account",
                        "vi": "Thông tin tài khoản",
                        "zh-Hant": "添加銀行卡",
                        "id": "Informasi rekening bank ",
                        "es": "La información cuenta bancaria",
                        "pt-BR": "A informação da conta bancária",
                        "ar": "معلومات الحساب المصرفي"
                    },
                    "depositOptions": {
                        "zh": "支付方式",
                        "en": "Deposit Options",
                        "vi": "Các Phương thức gửi tiền",
                        "zh-Hant": "支付方式",
                        "id": "Metode pengisian dana",
                        "es": "Opciones Depósitos",
                        "pt-BR": "Opções de depósito",
                        "ar": "خيارات الإيداع"
                    },
                    "depositOptionsJ": {
                        "zh": "支付方式",
                        "en": "Options",
                        "vi": "Chọn lựa",
                        "zh-Hant": "支付方式",
                        "id": "Pilihan",
                        "es": "Opciones",
                        "pt-BR": "Opçōes",
                        "ar": "الخيارات"
                    },
                    "walletPayment": {
                        "zh": "钱包支付",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包支付",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira",
                        "ar": "المحفظة"
                    },
                    "availableAmount": {
                        "zh": "可用余额",
                        "en": "Available Amount",
                        "vi": "Số Tiền Có Sẵn",
                        "zh-Hant": "可用余額",
                        "id": "Saldo yang tersedia",
                        "es": "Importe Disponible",
                        "pt-BR": "Quantidade disponível",
                        "ar": "المبلغ المتاح"
                    },
                    "telegraphicTransfer": {
                        "zh": "电汇",
                        "en": "Telegraphic Transfer",
                        "vi": "Điện Chuyển Tiền",
                        "zh-Hant": "電匯",
                        "id": "Transfer antar bank",
                        "es": "Transferencia Telegráfica",
                        "pt-BR": "Transferência telegráfica",
                        "ar": "التحويل المصرفي الإلكتروني"
                    },
                    "alipay": {
                        "zh": "支付宝",
                        "en": "Alipay",
                        "vi": "Alipay",
                        "zh-Hant": "支付寶",
                        "id": "Alipay",
                        "es": "Alipay",
                        "pt-BR": "Alipay",
                        "ar": "Alipay"
                    },
                    "uploadCredentials": {
                        "zh": "上传电汇凭证",
                        "en": "Upload Credentials",
                        "vi": "Tải Lên Giấy Tờ Xác Nhận",
                        "zh-Hant": "上傳電匯憑證",
                        "id": " Unggah bukti setoran",
                        "es": "Subir Credenciales",
                        "pt-BR": "Carregar credenciais",
                        "ar": "تحميل بيانات الاعتماد"
                    },
                    "uploadCredentialsJ": {
                        "zh": "上传电汇凭证",
                        "en": "Credentials",
                        "vi": "Giấy Tờ Xác Nhận",
                        "zh-Hant": "上傳電匯憑證",
                        "id": "Bukti setoran",
                        "es": "Credenciales",
                        "pt-BR": "Credenciais",
                        "ar": "بيانات الاعتماد"
                    },
                    "uploadCredentialsTip1": {
                        "zh": "电汇通常需要3-5个工作日到账",
                        "en": "Usually takes 3-5 working days to arrive account",
                        "vi": "Thường mất 3-5 ngày làm việc để đến tài khoản",
                        "zh-Hant": "電匯通常需要3-5個工作日到帳",
                        "id": "Dana biasanya akan masuk ke akun dalam kurun waktu 3-5 hari kerja",
                        "es": "Normalmente, toma 3-5 días hábiles para llegar a la cuenta",
                        "pt-BR": "Normalmente leva 3-5 dias úteis para chegar a conta",
                        "ar": "يستغرق الأمر عادة من 3 إلى 5 أيام عمل للوصول للحساب"
                    },
                    "tip12": {
                        "zh": "提示：手机端充值最低限额$50.00，每天最高限额$7000.00，充值成功后，到账时间约为10分钟，请耐心等待。如有问题，可在电脑端登录官网（）操作。",
                        "en": "The minimum deposit for mobile phones is $ 50.00，maximum daily limit of $ 7000.00. After the success of the deposit, the arrival time is about 10 minutes, please be patient.If there are problems, you can log on the computer side of the official website (www.tigerwit.com) operation.",
                        "vi": "Khoản tiền gửi tối thiểu cho điện thoại di động là $ 50,00 ， giới hạn tối đa hàng ngày là $ 7000.00. Sau khi thành công của tiền gửi, thời gian đến là khoảng 10 phút, hãy kiên nhẫn. Nếu có vấn đề, bạn có thể đăng nhập bằng máy tính của trang web chính thức (www.tigerwit.com) hoạt động.",
                        "zh-Hant": "提示：手機端充值最低限額$50.00，每天最高限額$7000.00，充值成功後，到帳時間約為10分鐘，請耐心等待。如有問題，可在電腦端登錄官網（）操作。",
                        "id": "Minimal pengisian dana melalui ponsel adalah 50$ dan maksimum sebesar 7000$. Dana biasanya akan masuk dalam kurun waktu 10 menit, mohon menunggu. Apabila mengalami masalah, anda dapat masuk melalui komputer ",
                        "es": "El depósito mínimo para teléfonos móviles es de $ 50.00，límite máximo diario de $ 7000.00. Después éxito en depósito, el tiempo de llegada es de aproximadamente 10 minutos; sea paciente, por favor. Si encontrara problemas, puede iniciar sesión en el ordenador en el sitio web oficial (www.tigerwit.com).",
                        "pt-BR": "O depósito mínimo para telefones celulares é de US $ 50,00, limite máximo diário de US $ 7000,00. Após o sucesso do depósito, o tempo de chegada é de cerca de 10 minutos, por favor, seja paciente.Se houver problemas, você pode fazer logon no lado do computador do site oficial (www.tigerwit.com) operação.",
                        "ar": "الحد الأدنى للإيداع بالنسبة للهواتف المحمولة هو  50 دولار، والحد الأقصى اليومي هو 7000 دولار بعد نجاح الإيداع، يكون وقت وصول الأموال للحساب حوالي 10 دقائق، يرجى التحلي بالصبر. إذا واجهت مشاكل، يمكنك الدخول إلى منطقة العميل في الموقع الإلكتروني الرسمي (www.tigerwit.com)."
                    },
                    "accountBalance": {
                        "zh": "当前交易账户余额",
                        "en": "Account Balance",
                        "vi": "Số Dư Tài Khoản",
                        "zh-Hant": "當前交易賬戶余額",
                        "id": "Saldo Akun",
                        "es": "Saldo de la cuenta",
                        "pt-BR": "Saldo da conta",
                        "ar": "رصيد الحساب"
                    },
                    "withdrawalAmount": {
                        "zh": "提现金额",
                        "en": "Withdrawal Amount",
                        "vi": "Số Tiền Rút",
                        "zh-Hant": "提現金額",
                        "id": "Jumlah Penarikan",
                        "es": "Cantidad de retiro",
                        "pt-BR": "Quantia do saque",
                        "ar": "المبلغ المسحوب"
                    },
                    "withdrawalAmountJ": {
                        "zh": "提现金额",
                        "en": "Amount",
                        "vi": "Số Tiền",
                        "zh-Hant": "提現金額",
                        "id": "Jumlah",
                        "es": "Cantidad",
                        "pt-BR": "Montante",
                        "ar": "المبلغ"
                    },
                    "withdrawalAmountM": {
                        "zh": "提现金额：",
                        "en": "Withdrawal Amount: ",
                        "vi": "Số Tiền Rút: ",
                        "zh-Hant": "提現金額：",
                        "id": "Jumlah Penarikan",
                        "es": "Importe Reembolso: ",
                        "pt-BR": "Quantia do saque:",
                        "ar": "مبلغ السحب:"
                    },
                    "youCanWithdrawal": {
                        "zh": "可提现金额",
                        "en": "You Can Withdrawal",
                        "vi": "Bạn có thể rút tiền",
                        "zh-Hant": "可提現金額",
                        "id": "Dana dapat ditarik",
                        "es": "Usted Puede Rembolsar",
                        "pt-BR": "Você pode sacar",
                        "ar": "يمكنك السحب"
                    },
                    "correctAmount": {
                        "zh": "请输入正确金额",
                        "en": "Please enter the correct amount",
                        "vi": "vui lòng nhập đúng số tiền",
                        "zh-Hant": "請輸入正確金額",
                        "id": "Mohon masukkan jumlah yang benar",
                        "es": "Por favor, ingrese la cantidad correcta",
                        "pt-BR": "Por favor insira o valor correto",
                        "ar": "يرجى إدخال المبلغ الصحيح"
                    },
                    "tip13": {
                        "zh": "提示：当前不支持信用卡提现，请绑定储蓄卡。",
                        "en": "Do not support credit card cash withdrawal, please bind the savings card.",
                        "vi": "Không hỗ trợ rút tiền mặt bằng thẻ tín dụng, vui lòng liên kết thẻ tiết kiệm.",
                        "zh-Hant": "提示：當前不支持信用卡提現，請邦定儲蓄卡。",
                        "id": " Tidak mendukung penarikan ke kartu kredit, silahkan daftarkan nomor rekening tabungan anda terlebih dahulu. ",
                        "es": "No admite el retiro de efectivo con tarjeta de crédito, por favor, asocie la tarjeta débito.",
                        "pt-BR": "Não suporte a retirada de dinheiro do cartão de crédito, por favor, ligue o cartão de poupança.",
                        "ar": "لا يتم دعم السحب النقدي عن طريق بطاقات الائتمان، يرجى ربط بطاقة ادخار."
                    },
                    "tip14": {
                        "zh": "每个账户每月拥有4次免费提现机会，超过4次每笔提现将收取xx手续费。",
                        "en": "Each account has 4 free opportunities per month, more than 4 times each will be charged xx fee.",
                        "vi": "Mỗi tài khoản có 4 cơ hội miễn phí mỗi tháng, nhiều hơn 4 lần mỗi lần sẽ bị tính phí xx.",
                        "zh-Hant": "每個賬戶每月擁有4次免費提現機會，超過4次每筆提現將收取xx手續費。",
                        "id": " Setiap akun dapat melakukan penarikan hingga 4 kali dalam 1 bulan, apabila melakukan penarikan lebih dari 4 kali dalam sebulan maka akan dikenakan biaya sebesar 1 $ per 1 kali penarikan. ",
                        "es": "Cada cuenta dispone de 4 oportunidades gratuitas por mes; más de 4 veces, se cobrará una tarifa xx por cada uno.",
                        "pt-BR": "Cada conta tem 4 oportunidades gratuitas por mês, mais de 4 vezes cada uma será cobrada xx taxa.",
                        "ar": "لكل مبلغ 4 فرص مجانية شهريًا، سيتم تحصيل رسوم مقدارها ×× في كل مرة تزيد عن 4 مرات المسموح بها مجانًا."
                    },
                    "bankCard": {
                        "zh": "银行卡",
                        "en": "Bank Card",
                        "vi": "Thẻ ngân hàng",
                        "zh-Hant": "銀行卡",
                        "id": "Rekening bank",
                        "es": "Tarjeta Banco",
                        "pt-BR": "Cartão bancário",
                        "ar": "البطاقة المصرفية"
                    },
                    "bindUserBankCard": {
                        "zh": "请绑定认证用户本人的银行卡",
                        "en": "Please bind the user’s own bank card",
                        "vi": "Vui lòng liên kết thẻ ngân hàng của riêng người dùng",
                        "zh-Hant": "請邦定認證用戶本人的銀行卡",
                        "id": "Mohon daftarkan nomor rekening anda",
                        "es": "Por favor, asocie la propia tarjeta bancaria del usuario.",
                        "pt-BR": "Por favor, associe o bancário do usuário",
                        "ar": "يرجى ربط البطاقة المصرفية المملوكة للمستخدم"
                    },
                    "enterCardNumber": {
                        "zh": "请填写银行卡号",
                        "en": "Card Number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "請填寫銀行卡號",
                        "id": "Nomor rekening",
                        "es": "Tarjeta Número",
                        "pt-BR": "Número do cartão",
                        "ar": "رقم البطاقة"
                    },
                    "bankName": {
                        "zh": "银行名称",
                        "en": "Bank",
                        "vi": "Ngân hàng",
                        "zh-Hant": "銀行名稱",
                        "id": "Bank",
                        "es": "Banco",
                        "pt-BR": "Banco",
                        "ar": "البنك"
                    },
                    "bankNameM": {
                        "zh": "银行名称：",
                        "en": "Bank:",
                        "vi": "Ngân hàng:",
                        "zh-Hant": "銀行名稱：",
                        "id": "Bank:",
                        "es": "Banco:",
                        "pt-BR": "Banco:",
                        "ar": "البنك:"
                    },
                    "branch": {
                        "zh": "支行名称",
                        "en": "Branch",
                        "vi": "Chi nhánh",
                        "zh-Hant": "支行名稱",
                        "id": "Cabang",
                        "es": "Sucursal",
                        "pt-BR": "Ramo",
                        "ar": "الفرع"
                    },
                    "branchM": {
                        "zh": "支行名称：",
                        "en": "Branch: ",
                        "vi": "Chi nhánh: ",
                        "zh-Hant": "支行名稱：",
                        "id": "Cabang: ",
                        "es": "Sucursal: ",
                        "pt-BR": "Ramo:",
                        "ar": "الفرع:"
                    },
                    "province": {
                        "zh": "开户省",
                        "en": "Province",
                        "vi": "Tỉnh",
                        "zh-Hant": "開戶省",
                        "id": "Provinsi",
                        "es": "Provincia",
                        "pt-BR": "Região",
                        "ar": "الإقليم"
                    },
                    "provinceM": {
                        "zh": "开户省：",
                        "en": "Province: ",
                        "vi": "Tỉnh: ",
                        "zh-Hant": "開戶省：",
                        "id": "Provinsi",
                        "es": "Provincia: ",
                        "pt-BR": "Região:",
                        "ar": "الإقليم:"
                    },
                    "city": {
                        "zh": "开户市",
                        "en": "City",
                        "vi": "Thành Phố",
                        "zh-Hant": "開戶市",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade",
                        "ar": "المدينة"
                    },
                    "cityM": {
                        "zh": "开户市：",
                        "en": "City: ",
                        "vi": "Thành phố: ",
                        "zh-Hant": "開戶市：",
                        "id": "Kota",
                        "es": "Ciudad: ",
                        "pt-BR": "Cidade:",
                        "ar": "المدينة:"
                    },
                    "details": {
                        "zh": "明细",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "明細",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes",
                        "ar": "التفاصيل"
                    },
                    "tip15": {
                        "zh": "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易账户",
                        "en": "The winner is divided into earnings and the agency’s commission income will be credited to the purse, which you can cash in or out of the trading account",
                        "vi": "Người chiến thắng được chia thành thu nhập và thu nhập hoa hồng của đại lý sẽ được ghi có vào ví, bạn có thể rút tiền vào hoặc ra khỏi tài khoản giao dịch",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易賬戶",
                        "id": " Hadiah akan dibagikan dan dikirim ke dompet masing-masing pemenang yang dapat ditarik atau dimasukkan ke akun transaksi ",
                        "es": "Cada ganadora es dividida en ganancias y la comisión de agencia será creditada, pudiendo ser retirada a, ó, desde la cuenta de trading",
                        "pt-BR": "O vencedor é dividido em ganhos e a receita de comissões da agência será creditada na bolsa, que você pode descontar ou retirar da conta de negociação",
                        "ar": "The copy is no longer in use"
                    },
                    "telegraphicTransferTip1": {
                        "zh": "不同银行在购汇和汇款中会收取不同的手续费（一般为手续费、电报费和中转行费用），对于购汇和汇款中产生的费用由客户自行承担，TigerWit不收取电汇入金手续费，入金金额将以实际到账为准。",
                        "en": "Different banks in the purchase of foreign exchange and remittances will charge different fees (usually fee, telegraph fee and transit costs), the costs incurred in the purchase of foreign exchange and remittance shall be borne by the customer, TigerWit does not charge wire transfer fees, deposit amount will be the actual account.",
                        "vi": "Các ngân hàng khác nhau trong việc mua ngoại tệ và kiều hối sẽ tính các khoản phí khác nhau (thường là phí, phí điện báo và chi phí quá cảnh), chi phí phát sinh khi mua ngoại tệ và chuyển tiền sẽ do khách hàng chịu, TigerWit không tính phí chuyển khoản ngân hàng , số tiền gửi sẽ là tài khoản thực.",
                        "zh-Hant": "不同銀行在購匯和匯款中會收取不同的手續費（壹般為手續費、電報費和中轉行費用），對於購匯和匯款中產生的費用由客戶自行承擔，TigerWit不收取電匯入金手續費，入金金額將以實際到帳為準。",
                        "id": " TigerWit tidak membebankan biaya transfer apapun, namun pembelian valutas asing dan pengiriman dana melalui bank akan dikenakan biaya yang berbeda-beda tergantung kebijakan bank tersebut, biaya akan ditanggung oleh nasabah. Dana yang diterima oleh TigerWit adalah dana yang telah dipotong biaya-biaya bank. ",
                        "es": "Cada banco por la compra de divisas y envíos cobra tarifas diferente (generalmente, comisiones, tarifas de telégrafo y costos de tránsito), los costes incurridos en la compra de divisas y remesas correrán a cargo del cliente, TigerWit no cobra tarifas de transferencia bancaria y acreditará el importe recibido del depósito en la cuenta real.",
                        "pt-BR": "Diferentes bancos na compra de divisas e remessas cobrará taxas diferentes (geralmente taxa, taxa de telégrafo e custos de trânsito), os custos incorridos na compra de divisas e remessa serão suportados pelo cliente, TigerWit não cobra taxas de transferência bancária , o valor do depósito será a conta real.",
                        "ar": "تقوم البنوك المختلفة التي تشترك في عمليات شراء العملات الأجنبية والحوالات بتحصيل رسوم مختلفة (رسوم المعالجة ورسوم التحويل المصرفي الإلكتروني ورسوم التحويل الأخرى)، وسوف يتحمل العميل جميع التكاليف المتكبدة في شراء العملات الأجنبية والحوالات، ولا تتقاضى شركة TigerWit رسوم تحويل مصرفي، وسيكون مبلغ الإيداع في الحساب هو المبلغ الفعلي المودع."
                    },
                    "telegraphicTransferTip2": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to ensure that your deposit immediate arrived at the account, please note your trading account and telephone number in the application form so that we can contact you.",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để đảm bảo rằng khoản tiền gửi của bạn ngay lập tức đến tài khoản, vui lòng lưu ý tài khoản giao dịch và số điện thoại của bạn trong biểu mẫu đơn đăng ký để chúng tôi có thể liên hệ với bạn.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": " Kami tidak menerima pengisian dana secara tunai. Untuk memastikan bahwa pengisian dana anda berjalan dengan lancar, mohon masukkan nomor akun dan nomor telepon anda di dalam formulir pengisian dana. ",
                        "es": "Por favor, tenga en cuenta que no aceptamos pagos en efectivo directamente en nuestra cuenta bancaria. Para asegurarse de que su depósito llegue a la cuenta de inmediato, anote su cuenta de trading y su número de teléfono en el formulario de solicitud para que podamos contactarlo.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. A fim de garantir que seu depósito chegou imediatamente à conta, por favor, anote sua conta de negociação e número de telefone no formulário de inscrição para que possamos entrar em contato com você.",
                        "ar": "يرجى ملاحظة أننا لا نقبل الدفع النقدي مباشرة إلى حسابنا المصرفي. من أجل ضمان أن الأموال التي أودعتها قد وصلت في الحال إلى حسابك، يرجى كتابة حساب التداول الخاص بك ورقم هاتفك في نموذج الطلب حتى نتمكن من الاتصال بك."
                    },
                    "telegraphicTransferTip3": {
                        "zh": "TigerWit接受美元汇款，汇款详情如下：",
                        "en": "TigerWit to receive US dollar remittance, remittance details are as follows：",
                        "vi": "TigerWit nhận tiền chuyển đô la Mỹ, chi tiết chuyển tiền như sau: ",
                        "zh-Hant": "TigerWit接受美元匯款，匯款詳情如下：",
                        "id": "TigerWit menerima pengiriman dalam bentuk dolar, detail pengiriman adalah sebagai berikut: ",
                        "es": "TigerWit recibir US dollar remittance, detalles de envío como a continuación：",
                        "pt-BR": "TigerWit para receber remessa de dólares, os detalhes de remessa são os seguintes:",
                        "ar": "تتلقى TigerWit الحوالات بالدولار الأمريكي، وتكون تفاصيل الحوالة على النحو التالي:"
                    },
                    "telegraphicTransferTip4": {
                        "zh": "TigerWit将根据各国适用法律尽最大努力以实际行动配合反洗钱及反恐怖方面的所有法律法规，具体包括报告及冻结可疑资产等。TigerWit将不定期地查看账户记录以获取有洗钱嫌疑的交易证据，包括对如下几项的监控：",
                        "en": "TigerWit will do its best to cooperate with all laws and regulations on anti-money laundering and anti-terrorism, including reporting and freezing of suspicious assets, in accordance with the applicable laws of each country. TigerWit will view the account records from time to time to obtain evidence of transaction evidence of money laundering, including the following: ",
                        "vi": "TigerWit sẽ cố hết sức hợp tác với tất cả các luật và quy định về chống rửa tiền và chống khủng bố, bao gồm báo cáo và đóng băng các tài sản đáng ngờ, phù hợp với luật áp dụng của mỗi quốc gia. TigerWit sẽ xem hồ sơ tài khoản theo thời gian để có được bằng chứng về bằng chứng giao dịch về rửa tiền, bao gồm những điều sau đây: ",
                        "zh-Hant": "TigerWit將根據各國這用法律盡最大努力以實際行動配合反洗錢及反恐怖方面的所有法律法規，具體包括報告及凍結可疑資產等。TigerWit將不定期地查看賬戶記錄以獲取有洗錢嫌疑的交易證據，包括對如下幾項的監控：",
                        "id": "TigerWit selalu berkomitmen untuk mentaati seluruh peraturan dan hukum terutama mengenai anti pencucian uang dan anti teroris, dengan melaporkan dan membekukan aset yang mencurigakan. Sesuai dengan hukum di masing-masing negara, TigerWit akan memantau seluruh transaksi keuangan yang terjadi, dan untuk mencegah terjadi tindak pencucian uang dengan peraturan sebagai berikut:",
                        "es": "TigerWit hará todo lo posible por cooperar con todas las leyes y regulaciones contra el lavado de dinero y el antiterrorismo, incluidos reporting  y la congelación de activos sospechosos, de conformidad con las leyes aplicables de cada país. TigerWit analizará los registros de la cuenta de vez en cuando para obtener evidencias de posibles transacciones de lavado de dinero, que incluye lo siguiente: ",
                        "pt-BR": "A TigerWit fará o seu melhor para cooperar com todas as leis e regulamentos sobre lavagem de dinheiro e anti-terrorismo, incluindo denúncia e congelamento de ativos suspeitos, de acordo com as leis aplicáveis de cada país. TigerWit exibirá os registros da conta de tempos em tempos para obter evidências de provas de lavagem de dinheiro, incluindo o seguinte:",
                        "ar": "سوف تبذل TigerWit قصارى جهدها للتعاون والامتثال لجميع القوانين واللوائح المتعلقة بمكافحة غسل الأموال ومكافحة الإرهاب، بما في ذلك الإبلاغ عن الأصول المشبوهة وتجميدها، وفقًا للقوانين المعمول بها في كل بلد من البلدان. وستقوم TigerWit بالإطلاع على سجلات الحساب من وقت لآخر من أجل الحصول على دليل على أن المعاملات غير مرتبطة بأنشطة غسل الأموال، بما في ذلك ما يلي:"
                    },
                    "telegraphicTransferTip5": {
                        "zh": "账户资金出入情况。电汇入金的用户，提现时若金额低于电汇入金时金额，TigerWit只支持将提现金额提现至入金银行卡。",
                        "en": "Account funds access situation. If the deposit was made by wire transfer, funds may be withdrawn only by wire transfer to the same bank and to the same account from which it originated.",
                        "vi": "Tình trạng truy cập quỹ tài khoản. Nếu khoản tiền gửi được thực hiện bằng chuyển khoản ngân hàng, tiền có thể được rút chỉ bằng chuyển khoản ngân hàng đến cùng một ngân hàng và cho cùng một tài khoản mà từ đó nó được bắt nguồn.",
                        "zh-Hant": "賬戶資金出入情況。電匯入金的用戶，提現時若金額低於電匯入金時金額，TigerWit只支持將提現金額提現至入金銀行卡。",
                        "id": "Dana masuk dan dana keluar. Apabila pengisian dana dilakukan melalui transfer antar bank, maka dana hanya boleh ditarik ke rekening yang sama dengan rekening pengirim di awal . ",
                        "es": "Situación Acceso a los Fondos Cuenta. Si el depósito se realizó mediante transferencia bancaria, los fondos sólo se pueden retirar mediante transferencia bancaria al mismo banco y a la misma cuenta.",
                        "pt-BR": "Conta conta a situação de acesso. Se o depósito foi feito por transferência bancária, os fundos podem ser retirados apenas por transferência eletrônica para o mesmo banco e para a mesma conta da qual se originou.",
                        "ar": "وضع الوصول لأموال الحساب إذا كان الإيداع قد تم عن طريق التحويل المصرفي، لا يمكن سحب الأموال إلا عن طريق التحويل المصرفي إلى نفس البنك ونفس الحساب الذي جاء منه الإيداع."
                    },
                    "telegraphicTransferTip6": {
                        "zh": "电汇汇款方及收款方",
                        "en": "The remitter and The beneficiary of wire transfer",
                        "vi": "Người chuyển tiền và Người thụ hưởng chuyển khoản ngân hàng",
                        "zh-Hant": "電匯匯款方及收款方",
                        "id": "Pengirim dan Penerima transaksi transfer antar bank",
                        "es": "El remitente y El beneficiario de la transferencia bancaria",
                        "pt-BR": "O remetente e o beneficiário da transferência bancária",
                        "ar": "مرسل الحوالة والشخص المستفيد من التحويل المصرفي"
                    },
                    "telegraphicTransferTip7": {
                        "zh": "除正常业务外的其他行为。",
                        "en": "Other than normal business.",
                        "vi": "Khác với kinh doanh bình thường.",
                        "zh-Hant": "除正常業務外的其他行為。",
                        "id": "Selain dari bisnis.",
                        "es": "Otro que no sea negocios normales",
                        "pt-BR": "Além de negócios normais.",
                        "ar": "بخلاف الأعمال العادية."
                    },
                    "telegraphicTransferTip8_1": {
                        "zh": "如您有疑问，请",
                        "en": "If you have any questions, please ",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào, Vui lòng ",
                        "zh-Hant": "如您有疑問，請",
                        "id": "Apabila anda memiliki pertanyaan, silahkan",
                        "es": "Para cualquier consulta, por favor ",
                        "pt-BR": "Se você tiver quaisquer perguntas, favor",
                        "ar": "إذا كانت لديك أي أسئلة، يرجى،"
                    },
                    "telegraphicTransferTip8_2": {
                        "zh": "点击此处",
                        "en": "click here ",
                        "vi": "nhấp vào đây ",
                        "zh-Hant": "點擊此處",
                        "id": "klik disini",
                        "es": "click aquí ",
                        "pt-BR": "clique aqui",
                        "ar": "النقر هنا"
                    },
                    "telegraphicTransferTip8_3": {
                        "zh": "联系在线客服获得帮助。",
                        "en": "to contact the online customer service for help.",
                        "vi": "để liện hệ với dịch vụ chăm sóc khách hàng trực tuyến để yêu cầu giúp đỡ.",
                        "zh-Hant": "聯系在線客服獲得幫助。",
                        "id": "Untuk bantuan, silahkan hubungi layanan pelanggan.",
                        "es": "para contactar al servicio al cliente online y solicitar su ayuda.",
                        "pt-BR": "contactar o serviço de atendimento online para obter ajuda.",
                        "ar": "للاتصال بخدمة العملاء عبر الإنترنت للحصول على المساعدة."
                    },
                    "beneficiaryName": {
                        "zh": "收款人名称（Company）：",
                        "en": "Beneficiary’s Name: ",
                        "vi": "Tên Người thụ hưởng: ",
                        "zh-Hant": "收款人名稱（Company）：",
                        "id": " Nama Penerima: ",
                        "es": "Nombre Beneficiario: ",
                        "pt-BR": "Nome do Beneficiário:",
                        "ar": "اسم المستفيد:"
                    },
                    "beneficiaryBank": {
                        "zh": "收款行所在国家（地区）：",
                        "en": "Beneficiary’s Bank Country(Region): ",
                        "vi": "Ngân hàng quốc gia của Người thụ hưởng (Khu vực: ",
                        "zh-Hant": "收款行所在國家（地區）：",
                        "id": " Negara bank penerima (Daerah): ",
                        "es": "Banco Beneficiario País(Región): ",
                        "pt-BR": "País do Banco do Beneficiário(Região):",
                        "ar": "بلد بنك المستفيد:"
                    },
                    "australia": {
                        "zh": "澳大利亚",
                        "en": "AUSTRALIA",
                        "vi": "ÚC",
                        "zh-Hant": "澳大利亞",
                        "id": "AUSTRALIA",
                        "es": "AUSTRALIA",
                        "pt-BR": "AUSTRÁLIA",
                        "ar": "أستراليا"
                    },
                    "beneA_CNo": {
                        "zh": "收款人账号（Account）：",
                        "en": "Bene’s A/C/ No: ",
                        "vi": "Bene’s A/C? NO: ",
                        "zh-Hant": "收款人帳號（Account）：",
                        "id": "Nomor rekening Bene: ",
                        "es": "Bene’s A/C/ Nº: ",
                        "pt-BR": "Número da conta do Beneficiário:",
                        "ar": "رقم حساب المستفيد:"
                    },
                    "swift": {
                        "zh": "收款银行机构鉴定代码（Swift）：",
                        "en": "Swift: ",
                        "vi": "Swift: ",
                        "zh-Hant": "收款銀行機構鑒定代碼（Swift）：",
                        "id": "Swift: ",
                        "es": "Swift: ",
                        "pt-BR": "Swift:",
                        "ar": "رمز  Swift:"
                    },
                    "beneficiaryBankName": {
                        "zh": "收款人开户行（Bank）：",
                        "en": "Beneficiary’s Bank Name: ",
                        "vi": "Tên Ngân Hàng Của Người Thụ Hưởng: ",
                        "zh-Hant": "收款人開戶行（Bank）：",
                        "id": " Negara bank penerima: ",
                        "es": "Banco Beneficiario Nombre: ",
                        "pt-BR": "Nome do Banco do Beneficiário:",
                        "ar": "اسم بنك المستفيد:"
                    },
                    "beneficiaryBankAddress": {
                        "zh": "银行地址（Address）：",
                        "en": "Beneficiary’s Bank Address: ",
                        "vi": "Địa Chỉ Ngân Hàng Của Người Thụ Hưởng: ",
                        "zh-Hant": "銀行地址（Address）：",
                        "id": "Alamat Bank Penerima: ",
                        "es": "Banco Beneficiario Dirección: ",
                        "pt-BR": "Endereço do Banco do Beneficiário:",
                        "ar": "عنوان بنك المستفيد:"
                    },
                    "bsb": {
                        "zh": "清算号（BSB）：",
                        "en": "BSB: ",
                        "vi": "BSB: ",
                        "zh-Hant": "清算號（BSB）：",
                        "id": "BSB: ",
                        "es": "BSB: ",
                        "pt-BR": "BSB:",
                        "ar": "رقم BSB:"
                    },
                    "beneficiaryAddress": {
                        "zh": "收款人地址（Address）：",
                        "en": "Beneficiary’s Address: ",
                        "vi": "Địa Chỉ Của Người Thụ Hưởng: ",
                        "zh-Hant": "收款人地址（Address）：",
                        "id": "Alamat Penerima dana: ",
                        "es": "Beneficiario Dirección: ",
                        "pt-BR": "Endereço do Beneficiário:",
                        "ar": "عنوان المستفيد:"
                    },
                    "remittanceInformation": {
                        "zh": "汇款附言：",
                        "en": "Remittance Information: ",
                        "vi": "Thông Tin Chuyển Tiền: ",
                        "zh-Hant": "匯款附言：",
                        "id": "Informasi Pengirim: ",
                        "es": "Información Envío: ",
                        "pt-BR": "Informação de Remessa:",
                        "ar": "معلومات الحوالة:"
                    },
                    "anti_MoneyLaunderingPolicy": {
                        "zh": "反洗钱政策：",
                        "en": "Anti-Money Laundering Policy: ",
                        "vi": "Chính Sách Chống Rửa Tiền: ",
                        "zh-Hant": "反洗錢政策：",
                        "id": "Kebijakan anti pencucian uang: ",
                        "es": "Política Anti Blanqueo Capitales: ",
                        "pt-BR": "Política Anti Lavagem de Dinheiro:",
                        "ar": "سياسة مكافحة غسل الأموال:"
                    },
                    "openTrades": {
                        "zh": "持仓",
                        "en": "Open Trades",
                        "vi": "Mở Các Giao Dịch",
                        "zh-Hant": "持倉",
                        "id": "Posisi terbuka",
                        "es": "Trades Abiertos",
                        "pt-BR": "Negociações abertas",
                        "ar": "الصفقات المفتوحة"
                    },
                    "margin": {
                        "zh": "已用保证金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "已用保證金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem",
                        "ar": "الهامش"
                    },
                    "equity": {
                        "zh": "账户净值",
                        "en": "Equity",
                        "vi": "Vốn thực",
                        "zh-Hant": "賬戶凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade",
                        "ar": "الرصيد"
                    },
                    "allOrders": {
                        "zh": "全部订单",
                        "en": "All Orders",
                        "vi": "Tất Cả Các Lệnh",
                        "zh-Hant": "全部訂單",
                        "id": "Semua transaksi",
                        "es": "Todas Órdenes",
                        "pt-BR": "Todos pedidos",
                        "ar": "جميع الأوامر"
                    },
                    "trading": {
                        "zh": "自主持仓",
                        "en": "Trading",
                        "vi": "Đang giao dịch",
                        "zh-Hant": "自主持倉",
                        "id": "Trading",
                        "es": "Trading",
                        "pt-BR": "Trading",
                        "ar": "التداول"
                    },
                    "copy": {
                        "zh": "跟单持仓",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "跟單持倉",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia",
                        "ar": "نسخ"
                    },
                    "pending": {
                        "zh": "挂单",
                        "en": "Pending",
                        "vi": "Bảo lưu",
                        "zh-Hant": "掛單",
                        "id": "Pending",
                        "es": "Pendiente",
                        "pt-BR": "Pendente",
                        "ar": "معلّق"
                    },
                    "buy": {
                        "zh": "买入",
                        "en": "Buy",
                        "vi": "Mua",
                        "zh-Hant": "買入",
                        "id": "Beli",
                        "es": "Comprar",
                        "pt-BR": "Comprar",
                        "ar": "شراء"
                    },
                    "sell": {
                        "zh": "卖出",
                        "en": "Sell",
                        "vi": "Bán",
                        "zh-Hant": "賣出",
                        "id": "Jual",
                        "es": "Vender",
                        "pt-BR": "Vender",
                        "ar": "بيع"
                    },
                    "copyMaster": {
                        "zh": "高手跟单",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "高手跟單",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia",
                        "ar": "نسخ"
                    },
                    "noOrders": {
                        "zh": "没有订单",
                        "en": "No Orders",
                        "vi": "Không có lệnh",
                        "zh-Hant": "沒有訂單",
                        "id": "Tidak ada posisi",
                        "es": "No Órdenes",
                        "pt-BR": "Sem pedidos",
                        "ar": "ليست هناك أوامر"
                    },
                    "toTrade": {
                        "zh": "去下个单",
                        "en": "To Trade",
                        "vi": "Giao dịch",
                        "zh-Hant": "去下個單",
                        "id": "Transaksi",
                        "es": "Para Trade",
                        "pt-BR": "Para trocar",
                        "ar": "لتداول"
                    },
                    "followMaster": {
                        "zh": "逛逛高手榜",
                        "en": "Follow the Master",
                        "vi": "Sao chép Bậc Thầy",
                        "zh-Hant": "逛逛高手榜",
                        "id": "Ikuti Master",
                        "es": "Seguir al Master",
                        "pt-BR": "Siga o Mestre",
                        "ar": "متابعة الأستاذ"
                    },
                    "notice": {
                        "zh": "提示",
                        "en": "Notice",
                        "vi": "Lưu ý",
                        "zh-Hant": "提示",
                        "id": "Pengumuman",
                        "es": "Notificación",
                        "pt-BR": "Aviso",
                        "ar": "ملحوظة"
                    },
                    "paymentMethod": {
                        "zh": "选择支付方式",
                        "en": "Select payment method",
                        "vi": "Lựa chọn phương thức thanh toán",
                        "zh-Hant": "選擇支付方式",
                        "id": "Pilih metode pembayaran",
                        "es": "Seleccione medio pago",
                        "pt-BR": "Selecionar método de pagamento",
                        "ar": "حدد طرق الدفع"
                    },
                    "walletBalance": {
                        "zh": "当前钱包余额",
                        "en": "Wallet balance",
                        "vi": "Số dư trong ví",
                        "zh-Hant": "當前錢包余額",
                        "id": "Saldo Dompet",
                        "es": "Balance Wallet",
                        "pt-BR": "Balanço da Carteira",
                        "ar": "رصيد المحفظة"
                    },
                    "walletBalanceM": {
                        "zh": "当前钱包余额：",
                        "en": "Wallet balance: ",
                        "vi": "Số dư trong ví: ",
                        "zh-Hant": "當前錢包余額：",
                        "id": "Saldo Dompet: ",
                        "es": "Balance Wallet: ",
                        "pt-BR": "Saldo da carteira:",
                        "ar": "رصيد المحفظة:"
                    },
                    "confirmAccount": {
                        "zh": "为保证充值成功，请务必使用本人银行卡和账户",
                        "en": "In order to ensure successful deposit, please use your bank card and account",
                        "vi": "Để đảm bảo kí quỹ thành công, xin sử dụng thẻ và tài khoản ngân hàng của bạn",
                        "zh-Hant": "為保證充值成功，請務必使用本人銀行卡和賬戶",
                        "id": "Untuk memastikan pengisian dana berhasil, mohon gunakan rekening dan akun milik anda sendiri",
                        "es": "Para garabtizar un depósito correcto, por favor, use su tarjeta banco y cuenta",
                        "pt-BR": "Para garantir o depósito bem-sucedido, use seu cartão bancário e sua conta",
                        "ar": "من أجل ضمان نجاح الإيداع، يرجى استخدام البطاقة المصرفية والحساب الخاصين بك"
                    },
                    "tip16": {
                        "zh": "支付完成前，请不要关闭支付验证窗口",
                        "en": "Please don’t close the window until payment is completed",
                        "vi": "Vui lòng đừng đóng cửa sổ cho đến khi thanh toán đc hoàn thành",
                        "zh-Hant": "支付完成前，請不要關閉支付驗證窗口",
                        "id": "Jangan tutup jendela hingga verifikasi selesai",
                        "es": "Por favor, no cierre la ventana hasta que pago esté completado",
                        "pt-BR": "Por favor, não feche a janela até que o pagamento seja concluído",
                        "ar": "يرجى عدم إغلاق النافذة حتى إتمام الدفع."
                    },
                    "tip17": {
                        "zh": "支付完成后，请根据您支付的情况点击下面按钮",
                        "en": "After the payment is completed, please click the button below according to your payment situation",
                        "vi": "Sau khi thanh toán đã hoàn thành, vui lòng nhấp vào nút bên dưới theo tình hình thanh toán của bạn",
                        "zh-Hant": "支付完成後，請根據您支付的情況點擊下面按鈕",
                        "id": "Setelah pembayaran selesai, silahkan klik tombol dibawah ini untuk melihat status transaksi. ",
                        "es": "Una vez el pago es completado, por favor, haga click en el botón debajo en función de la situación de su pago",
                        "pt-BR": "Depois que o pagamento for concluído, clique no botão abaixo de acordo com sua situação de pagamento",
                        "ar": "بعد إتمام الدفع، يرجى النقر على الزر أدناه وفقًا لحالة الدفع الخاصة بك."
                    },
                    "runIntoProblem": {
                        "zh": "遇到问题",
                        "en": "Run into problem",
                        "vi": "Gặp rắc rối",
                        "zh-Hant": "遇到問題",
                        "id": "Mengalami masalah",
                        "es": "Problema encontrado",
                        "pt-BR": "Correr em problema",
                        "ar": "تواجه مشكلة"
                    },
                    "paymentSuccess": {
                        "zh": "支付成功",
                        "en": "Payment success",
                        "vi": "Thanh toán thành công",
                        "zh-Hant": "支付成功",
                        "id": "Pembayaran Sukses",
                        "es": "Pago éxito",
                        "pt-BR": "Sucesso do pagamento",
                        "ar": "نجاح الدفع"
                    },
                    "equivalent": {
                        "zh": "折合",
                        "en": "Equivalent ",
                        "vi": "Tương đương ",
                        "zh-Hant": "折合",
                        "id": "Setara ",
                        "es": "Equivalente ",
                        "pt-BR": "Equivalente",
                        "ar": "معادل"
                    },
                    "about": {
                        "zh": "约",
                        "en": " about",
                        "vi": " khoảng",
                        "zh-Hant": "約",
                        "id": " Tentang",
                        "es": " sobre",
                        "pt-BR": "  sobre",
                        "ar": "نبذة مختصرة"
                    },
                    "uploadVoucher": {
                        "zh": "上传凭证",
                        "en": "Upload voucher",
                        "vi": "Tải lên",
                        "zh-Hant": "上傳憑證",
                        "id": "Unggah Dokumen",
                        "es": "Subir cupón",
                        "pt-BR": "Carregar comprovante",
                        "ar": "تحميل القسيمة"
                    },
                    "tip18": {
                        "zh": "您网银支付凭证正在审核中，无法充值，请等待审核通过后重试。",
                        "en": "Your e-payment voucher is under review and cannot be topped up. Please try again after passing the audit.",
                        "vi": "Phiếu thanh toán điện tử của bạn đang được xem xét và không thể được nạp tiền. Vui lòng thử lại sau khi vượt qua kiểm toán.",
                        "zh-Hant": "您網銀支付憑證正在審核中，無法充值，請等待審核通過後重試。",
                        "id": " Bukti setoran anda sedang dalam tahap pemeriksaan. Mohon menunggu hingga proses selesai sebelum melakukan transaksi yang lain. ",
                        "es": "Su comprobante de pago electrónico se está revisando y no se puede recargar. Por favor, inténtelo de nuevo después de pasar la auditoría.",
                        "pt-BR": "Seu comprovante de pagamento eletrônico está sendo analisado e não pode ser cobrado. Por favor, tente novamente depois de passar pela auditoria.",
                        "ar": "قسيمة الدفع الإلكتروني الخاصة بك قيد المراجعة ولا يمكن زيادة قيمتها. يرجى المحاولة مرة أخرى بعد اجتياز المراجعة."
                    },
                    "tip19": {
                        "zh": "应监管要求，客户的网银入金会随机抽查入金凭证，如客户的某笔入金被抽查需要客户按照提示和要求上传凭证。",
                        "en": "According to the regulatory requirements, the customer's e-deposit will be randomly checked into the deposit voucher. For example, the customer needs to upload the voucher according to the tips and requirements when a certain amount of deposit is checked.",
                        "vi": "Theo yêu cầu quy định, tiền gửi điện tử của khách hàng sẽ được kiểm tra ngẫu nhiên vào chứng từ tiền gửi. Ví dụ: khách hàng cần tải lên giấy tờ xác nhận theo các mẹo và yêu cầu khi kiểm tra một số tiền nhất định.",
                        "zh-Hant": "應監管要求，客戶的網銀入金會隨機抽查入金憑證，如客戶的某筆入金被抽查需要客戶按照提示和要求上傳憑證。",
                        "id": "Berdasarkan peraturan, bukti setoran nasabah akan diperiksa apabila nasabah menyetorkan dana dengan jumlah tertentu.",
                        "es": "De acuerdo con los requisitos regulatorios, el depósito electrónico del cliente pudiera ser comprobado aleatoriamente. Por ejemplo, el cliente necesita cargar el cupón siguiendo los consejos y requisitos necesarios al verificar depósitos de un determinado importe.",
                        "pt-BR": "De acordo com os requisitos regulatórios, o depósito eletrônico do cliente será verificado aleatoriamente no comprovante de depósito. Por exemplo, o cliente precisa carregar o comprovante de acordo com as dicas e requisitos quando uma certa quantia de depósito é verificada.",
                        "ar": "بمقتضى المتطلبات الرقابية والتنظيمية، سيتم فحص الإيداع الإلكتروني للعميل بشكل عشوائي في قسيمة الإيداع. على سبيل المثال، يتعين على العميل تحميل القسيمة وفقًا إلى النصائح والمتطلبات عندما يتم فحص مقدار معين من الإيداعات."
                    },
                    "tip20": {
                        "zh": "客户出金时，如果有未上传和未审核通过的凭证，将限制客户出金，上传审核通过后可正常出金，没有未上传或者未审核的凭证客户可以正常出金。",
                        "en": "When the customer withdrawal, if there are unuploaded and unaudited vouchers, the customer will be restricted to withdrawal. After passing the examination, the funds will be withdrew normally. If there are no unuploaded or unaudited certificates, the customer can withdraw normally.",
                        "vi": "Khi khách hàng rút tiền, nếu chứng từ chưa được tải và chưa được kiểm toán, khách hàng sẽ bị hạn chế rút tiền. Sau khi vượt qua việc kiểm tra, số tiền sẽ được rút lại bình thường. Nếu không có chứng chỉ chưa được tải lên hoặc chưa được kiểm tra, khách hàng có thể rút tiền bình thường.",
                        "zh-Hant": "客戶出金時，如果有未上傳和未審核通過的憑證，將限制客戶出金，上傳審核通過後可正常出金，沒有未上傳或者未審核的憑證客戶可以正常出金。",
                        "id": "Ketika nasabah melakukan penarikan dana, namun pada saat pengisian dana di awal tidak melampirkan bukti setoran, maka nasabah belum bisa melakukan penarikan sampai bukti setoran awal diunggah dan selesai diperiksa. Apabila nasabah sudah mengunggah bukti setoran di awal, penarikan akan berlangsung tanpa kendala.",
                        "es": "Cuando el cliente reembolso, si hay cupones no subidos y no auditados, el cliente tendrá restringidos los reembolsos. Después de pasar auditoría, los fondos podrán ser reembolsados normalmente. Si no hay certificados sin cargar o sin auditar, el cliente puede reembolsar normalmente.",
                        "pt-BR": "Quando a retirada do cliente, se houver comprovantes não enviados e não auditados, o cliente será restrito ao saque. Depois de passar no exame, os fundos serão retirados normalmente. Se não houver certificados não enviados ou não-auditados, o cliente poderá retirar-se normalmente.",
                        "ar": "عند قيام العميل بالسحب، إذا كانت هناك أي قسائم لم يتم تحميلها أو لم يتم مراجعتها، ستكون هناك قيود على السحب بالنسبة للعميل. بعد اجتياز الفحص، سيكون من الممكن سحب الأموال بشكل عادي. إذا لم تكن هناك أي شهادات لم يتم تحميلها أو لم يتم مراجعتها، يجوز للعميل السحب بشكل طبيعي."
                    },
                    "tip21": {
                        "zh": "1、客户必须使用本人银行卡入金；",
                        "en": "1.The customer must use his bank card to deposit；",
                        "vi": "1. Khách hàng phải dung thẻ ngân hàng của họ để gửi tiền;",
                        "zh-Hant": "1、客戶必須使用本人銀行卡入金；",
                        "id": "1. Nasabah harus menggunakan rekening bank sendiri untuk mengisi dana;",
                        "es": "1.El cliente debe usar su tarjeta banco para depositar；",
                        "pt-BR": "O cliente 1.The deve usar seu cartão de banco para depositar;",
                        "ar": "1- يجب على العميل استخدام بطاقته المصرفية في الإيداع؛"
                    },
                    "tip22": {
                        "zh": "2、若使用他人银行卡，资金将被原路退回，客户需承担1.8%手续费；",
                        "en": "2.If customer use someone else's bank card, the money will be returned and the customer shall bear a charge of 1.8%;",
                        "vi": "2. Nếu khách hàng sử dụng thẻ ngân hàng của ai đó, tiền sẽ không được trả lại và khách hàng sẽ chịu phí phạt 1.8 %;",
                        "zh-Hant": "2、若使用他人銀行卡，資金將被原路退回，客戶需承擔1.8%手續費；",
                        "id": "2. Apabila nasabah menggunakan rekening bank milik orang lain, maka dana akan ditolak dan dikembalikan ke rekening awal. Nasabah akan dikenakan biaya sebesar 1,8%;",
                        "es": "2.Si el cliente utiliza la tarjeta bancaria de otra persona, el dinero será devuelto y el cliente deberá pagar un cargo del 1,8%;",
                        "pt-BR": "2. Se o cliente usar o cartão bancário de outra pessoa, o dinheiro será devolvido e o cliente arcará com uma taxa de 1,8%;",
                        "ar": "2- إذا استخدم العميل البطاقة المصرفية الخاصة بشخص آخر، سيتم إعادة الأموال وسيتحمل العميل تكلفة مقدارها 1.8%."
                    },
                    "tip23": {
                        "zh": "3、若已产生交易订单，客户需在收到通知后1个工作日内全部平仓，否则系统将进行强制平仓。平仓后资金原路退回，账号将被关闭不予使用。",
                        "en": "3.If a trading order has been generated, the customer shall close all the positions within 1 working day after receiving the notice, otherwise the system will be forced to close the positions. The fund will be returned after closing the positions, and the account will be closed and not used.",
                        "vi": "3. Nếu lệnh giao dịch đã được tạo, khách hàng sẽ đóng tất cả các vị thế trong vòng 1 ngày làm việc sau khi nhận được thông báo, nếu không hệ thống sẽ bị buộc phải đóng các vị thế. Quỹ sẽ được trả lại sau khi đóng các vị thế, và tài khoản sẽ bị đóng và không được sử dụng.",
                        "zh-Hant": "3、若已產生交易訂單，客戶需在收到通知後1個工作日內全部平倉，否則系統將進行強制平倉。平倉後資金原路退回，帳號將被關閉不予使用。",
                        "id": "3. Semua posisi terbuka nasabah harus ditutup 1x24 jam (hari kerja) sejak nasabah menerima pesan pemberitahuan. Jika sudah melewati waktu yang ditentukan, sistem akan menutup secara otomatis posisi tersebut. Dana akan dikembalikan setelah posisi sudah tertutup sepenuhnya dan akun tidak dapat lagi digunakan.",
                        "es": "3.Si se ha generado una orden de trading, el cliente cerrará todas las posiciones dentro de 1 día hábil después de recibir el aviso, de lo contrario el sistema cerrará las posiciones. Los fondos se devolverán después de cerrar las posiciones, y la cuenta se cerrará y no podrá utilizarse.",
                        "pt-BR": "3. Se uma ordem de negociação foi gerada, o cliente deve fechar todas as posições dentro de 1 dia útil após receber o aviso, caso contrário o sistema será forçado a fechar as posições. O fundo será devolvido após o fechamento das posições, e a conta será fechada e não utilizada.",
                        "ar": "3- إذا تم إنشاء أمر التداول، يجب على العميل إغلاق جميع المراكز خلال يوم عمل (1) واحد بعد استلام الإخطار، وإلا سيضطر النظام لإغلاق المراكز. سيتم إعادة الأموال بعد إغلاق المراكز، وسيتم إغلاق الحساب ولن يتم استخدامه."
                    },
                    "tip24": {
                        "zh": "入金凭证要求及获取方式",
                        "en": "Requirements and methods of obtaining the deposit vouchers",
                        "vi": "Yêu cầu và phương pháp thu thập chứng từ tiền gửi",
                        "zh-Hant": "入金憑證要求及獲取方式",
                        "id": "Persyaratan bukti setoran",
                        "es": "Requisitos y métodos de obtención cupones de depósito.",
                        "pt-BR": "Requisitos e métodos de obtenção dos comprovantes de depósito",
                        "ar": "متطلبات وطرق الحصول على قسائم الإيداع:"
                    },
                    "tip25": {
                        "zh": "1、入金凭证必须包含：账号姓名、账号号码、入金时间、金额",
                        "en": "1.The voucher must include: account name, account number, deposit time and amount",
                        "vi": "1. Chứng từ gửi tiền phải bao gồm: tên tài khoản, số tài khoản, thời gian gửi và số tiền",
                        "zh-Hant": "1、入金憑證必須包含：帳號姓名、帳號號碼、入金時間、金額",
                        "id": "1. Bukti setoran wajib melampirkan nama pemilik rekening, nomor rekening, waktu pengiriman dan jumlah pengiriman ",
                        "es": "1.El cupón debe incluir: nombre de cuenta, número de cuenta, hora depósito e importe",
                        "pt-BR": "1.O voucher deve incluir: nome da conta, número da conta, hora do depósito e valor",
                        "ar": "1- يجب أن تتضمن القسيمة اسم الحساب ورقم الحساب ووقت الإيداع والمبلغ الذي تم إيداعه."
                    },
                    "tip26": {
                        "zh": "2、入金凭证网银获取路径可咨询银行客服。",
                        "en": "2.Deposit certificate online banking access path can consult the bank customer service.",
                        "vi": "2. Đường dẫn truy cập ngân hàng trực tuyến chứng từ gửi tiền có thể là tài liệu chỉ dẫn cho bộ phận dịch vụ khách hàng của ngân hàng.",
                        "zh-Hant": "2、入金憑證網銀獲取路徑可咨詢銀行客服。",
                        "id": "2. Untuk pengisian dana melalui online banking bisa mendapatkan bukti setoran dari layanan pelanggan bank yang bersangkutan. ",
                        "es": "2.La ruta de acceso al certificado de depósitode banca online puede consultarse con el servicio de atención al cliente del banco.",
                        "pt-BR": "O trajeto de acesso da operação bancária do certificado 2.Deposit pode consultar o serviço ao cliente do banco. Usualmente toma 3-5 dias de trabalho para chegar a conta",
                        "ar": "2- يمكن للمستخدمين الاتصال بخدمة عملاء البنك للحصول على قسيمة الإيداع."
                    },
                    "bankCardNumber": {
                        "zh": "银行卡号",
                        "en": "Bank card number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "銀行卡號",
                        "id": "Nomor rekening bank",
                        "es": "Número tarjeta bancaria",
                        "pt-BR": "Número do cartão bancário",
                        "ar": "رقم البطاقة المصرفية"
                    },
                    "tip27": {
                        "zh": "1、请务必使用填写的该银行卡进行网银支付；",
                        "en": "1.Please be sure to use the card that you filled to make online payment.",
                        "vi": "Vui lòng đảm bảo rằng bạn sử dụng thẻ mà bạn đã đăng ký phương thức thanh toán trực tuyến.",
                        "zh-Hant": "1、請務必使用填寫的該銀行卡進行網銀支付；",
                        "id": "1. Harap pastikan rekening yang anda gunakan telah terdaftar",
                        "es": "1.Asegúrese de usar la tarjeta que rellenó para realizar el pago online.",
                        "pt-BR": "1.Por favor, certifique-se de usar o cartão que você preencheu para fazer o pagamento online.",
                        "ar": "1- يرجى التأكد من استخدام البطاقة التي قدمتها لإجراء الدفع عبر الإنترنت."
                    },
                    "tip28": {
                        "zh": "2、上传该笔入金凭证截图中银行卡号必须与该支付卡号一致，否则审核将被驳回，影响出金操作。",
                        "en": "2.The bank card number in the screenshot of the deposit voucher uploaded must be consistent with the payment card number, otherwise the audit will be rejected, affecting the withdrawal.",
                        "vi": "2. Số thẻ ngân hàng trong ảnh chụp màn hình của chứng từ gửi tiền được tải lên phải phù hợp với số thẻ thanh toán, nếu không việc kiểm tra sẽ bị từ chối, ảnh hưởng đến việc rút tiền.",
                        "zh-Hant": "2、上傳該筆入金憑證截圖中銀行卡號必須與該支付卡號壹致，否則審核將被駁回，影響出金操作。",
                        "id": "2. Bukti setoran yang diunggah harus sesuai dengan rekening yang telah didaftarkan, jika tidak maka akan ditolak dan tidak dapat melakukan penarikan. ",
                        "es": "2.El número de la tarjeta bancaria en la captura de pantalla del comprobante de depósito cargado debe coincidir con el número de la tarjeta de pago; de lo contrario, se rechazará la auditoría, lo que afectará el reembolso.",
                        "pt-BR": "2.O número do cartão bancário na captura de tela do comprovante de depósito enviado deve ser consistente com o número do cartão de pagamento, caso contrário, a auditoria será rejeitada, afetando a retirada.",
                        "ar": "2- يجب أن يكون رقم البطاقة المصرفية في لقطة الشاشة لقسيمة الإيداع التي يتم تحميلها متطابقًا مع رقم بطاقة الدفع، وإلا سيتم رفض المراجعة، مما سيؤثر على السحب."
                    },
                    "tip29": {
                        "zh": "如有其它疑问，请联系TigerWit客服：",
                        "en": "If you have any other questions, please contact TigerWit customer support: ",
                        "vi": "Nếu bạn có bất kì câu hỏi nào, vui lòng liên hệ với phòng chăm sóc khách hàng của TigerWit để được hỗ trợ: ",
                        "zh-Hant": "如有其它疑問，請聯系TigerWit客服：",
                        "id": "Apabila anda memiliki pertanyaan, silahkan hubungi layanan pelanggan TigerWit",
                        "es": "Para cualquier otra cuestión, por favor, contacte el Soporte al Cliente TigerWit: ",
                        "pt-BR": "Se você tiver quaisquer perguntas, por favor contate o suporte ao cliente da TigerWit",
                        "ar": "إذا كان لديك أي أسئلة تود طرحها،يرجى الاتصال بفريق TigerWit لدعم العملاء:."
                    },
                    "rate1": {
                        "zh": "今日汇率：1 美元",
                        "en": "Today's exchange rate: $1",
                        "vi": "Tỷ lệ chuyển đổi hôm nay: 1 đôla",
                        "zh-Hant": "今日匯率：1 美元",
                        "id": "Nilai tukar hari ini : 1$",
                        "es": "Tipo de cambio de hoy: $1",
                        "pt-BR": "Taxa de câmbio de hoje: US$1",
                        "ar": "سعر الصرف اليوم: $ 1"
                    },
                    "currentWalletBalance": {
                        "zh": "当前钱包余额",
                        "en": "Current wallet balance",
                        "vi": "Số dư ví hiện tại",
                        "zh-Hant": "當前錢包余額",
                        "id": "Saldo dompet saat ini",
                        "es": "Balance wallet actual",
                        "pt-BR": "Saldo atual da carteira",
                        "ar": "الرصيد الحالي للمحفظة"
                    },
                    "paymentRule": {
                        "zh": "网银支付规则",
                        "en": "Rules for online banking payment",
                        "vi": "Quy tắc cho phương thức thanh toán trực tuyến",
                        "zh-Hant": "網銀支付規則",
                        "id": "Peraturan untuk pembayaran melalui online banking",
                        "es": "Reglas pagos banca online",
                        "pt-BR": "Regras para pagamento bancário online",
                        "ar": "قواعد المدفوعات المصرفية عبر الإنترنت"
                    },
                    "thirdParty": {
                        "zh": "第三方充值教程",
                        "en": "Third party deposit tutorial",
                        "vi": "Hướng dẫn gửi tiền của bên thứ ba",
                        "zh-Hant": "第三方充值教程",
                        "id": "Cara mengisi dana melalui pihak ketiga",
                        "es": "Tutorial depósitos de terceros",
                        "pt-BR": "Tutorial de depósito por terceiros",
                        "ar": "درس تعليمي عن كيفية الإيداع بواسطة طرف ثالث"
                    },
                    "useBankPay": {
                        "zh": "请使用该银行卡支付",
                        "en": "Please use this card to pay",
                        "vi": "Vui lòng sử dụng thẻ này để trả",
                        "zh-Hant": "請使用該銀行卡支付",
                        "id": "Mohon gunakan rekening ini untuk transaksi",
                        "es": "Por favor, use esta tarjeta para pagar",
                        "pt-BR": "Por favor use este cartão para pagar",
                        "ar": "يرجى استخدام هذه البطاقة للدفع"
                    },
                    "paymentCurrency": {
                        "zh": "支付币种",
                        "en": "Currency",
                        "vi": "Tiền tệ",
                        "zh-Hant": "支付蔽種",
                        "id": "Mata Uang",
                        "es": "Divisa",
                        "pt-BR": "Moeda",
                        "ar": "العملة"
                    },
                    "replace": {
                        "zh": "更换",
                        "en": "Replace",
                        "vi": "Thay thế",
                        "zh-Hant": "更換",
                        "id": "Ganti",
                        "es": "Reemplazar",
                        "pt-BR": "Substituir",
                        "ar": "استبدل"
                    },
                    "fillPayCardInfo": {
                        "zh": "填写支付银行卡信息",
                        "en": "Fill in the payment card information",
                        "vi": "Điền thông tin thẻ thanh toán",
                        "zh-Hant": "填寫支付銀行卡信息",
                        "id": "Isi informasi rekening pembayaran",
                        "es": "Complete la información de la tarjeta de pago",
                        "pt-BR": "Preencher as informações",
                        "ar": "ادخل معلومات بطاقة الدفع"
                    },
                    "clickUpload": {
                        "zh": "点击上传电汇凭证",
                        "en": "Click to upload wire transfer voucher",
                        "vi": "Nhấp để tải lên chứng từ chuyển khoản ngân hàng",
                        "zh-Hant": "點擊上傳電匯憑證",
                        "id": " Klik untuk mengunggah bukti setor ",
                        "es": "Haga clic para cargar el comprobante de transferencia bancaria.",
                        "pt-BR": "Clicar para fazer",
                        "ar": "انقر لتحميل قسيمة التحويل المصرفي"
                    },
                    "tip30": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please be sure to fill in your transaction account in the attached column of the remittance form.",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để nhận được thanh toán của bạn kịp thời và chính xác, vui lòng đảm bảo điền vào tài khoản giao dịch của bạn trong cột đính kèm của biểu mẫu chuyển tiền.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。",
                        "id": "Perlu dicatat bahwa kami tidak menerima uang tunai untuk pengisian dana. Mohon pastikan anda telah mengisi formulir pengiriman dana secara lengkap dan akurat agar proses pengisian dana dapat berjalan dengan lancar. ",
                        "es": "Tenga en cuenta que no aceptamos pagos en efectivo directamente a nuestra cuenta bancaria. Para recibir su pago de manera oportuna y precisa, asegúrese de completar su cuenta de transacción en la columna adjunta del formulario de envío.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. Para receber seu pagamento em tempo e precisão, preencha sua conta de transação na coluna anexa do formulário de envio.",
                        "ar": "يرجى ملاحظة أننا لا نقبل الدفع النقدي مباشرة إلى حسابنا المصرفي. حتى تتسلم المدفوعات المستحقة لك في الوقت المناسب وبشكل دقيق، يرجى التأكد من قيامك بإدخال حساب المعاملة الخاص بك في العمود المرفق بنموذج الحوالة."
                    },
                    "tip31": {
                        "zh": "同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": "Please also provide your phone number so that we can get in touch with you.",
                        "vi": "Vui lòng cung cấp số điện thoại của bạn để chúng tôi có thể liên lạc với bạn.",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": "Mohon isi nomor telepon yang dapat dihubungi agar kami dapat menghubungi anda apabila terjadi kesalahan.",
                        "es": "También proporcione su número de teléfono para que podamos comunicarnos con usted.",
                        "pt-BR": "Por favor, forneça seu número de telefone para que possamos entrar em contato com você.",
                        "ar": "يرجى أيضًا إمدادنا برقم هاتفك حتى نستطيع التواصل معك."
                    },
                    "remittancePostscript": {
                        "zh": "汇款附言：",
                        "en": "Remittance postscript: ",
                        "vi": "Bản ghi chuyển tiền: ",
                        "zh-Hant": "匯款附言：",
                        "id": "Informasi Pengirim: ",
                        "es": "Posdata de envíos remesas:",
                        "pt-BR": "PostScript de remessa:",
                        "ar": "حاشية الحوالة:"
                    },
                    "tip32": {
                        "zh": "您的姓名拼音，交易账号：",
                        "en": "Your name spell, trading account number: ",
                        "vi": "Đánh vần tên của bạn, số tài khoản giao dich: ",
                        "zh-Hant": "您的姓名拼音，交易帳號：",
                        "id": "Nama sesuai identitas dan mudah dibaca, disertai dengan nomor akun anda: ",
                        "es": "Su nombre completo, número de cuenta trading: ",
                        "pt-BR": "Seu nome, número de conta comercial:",
                        "ar": "اسمك، الاسم لفظيًا، رقم حساب التداول الخاص بك:"
                    },
                    "tip33": {
                        "zh": "充值已提交，到账约为10分钟，请耐心等待",
                        "en": "Deposit has been submitted, and will arrive account about 10 minutes. Please wait patiently",
                        "vi": "Tiền gửi đã được gửi và sẽ đến tài khoản khoảng 10 phút. Xin hãy kiên nhẫn chờ đợi",
                        "zh-Hant": "充值已提交，到帳約為10分鐘，請耐心等待",
                        "id": "Pengisian dana sedang diproses dan akan masuk ke akun dalam kurun waktu 10 menit. Mohon menunggu. ",
                        "es": "Se ha enviado el depósito, y llegará a la cuenta en unos 10 minutos. Por favor, espere pacientemente",
                        "pt-BR": "Depósito foi submetido, e vai chegar a conta de cerca de 10 minutos. Por favor, aguarde pacientemente",
                        "ar": "تم إرسال الإيداع، وسيصل المبلغ إلى الحساب بعد حوالي 10 دقائق. يرجى الانتظار بصبر."
                    },
                    "tip34": {
                        "zh": "大概需要3-5个工作日到账",
                        "en": "It will take about 3-5 working days to get to the account",
                        "vi": "Có thể mất từ 3 đến 5 ngày làm việc để lấy được tài khoản",
                        "zh-Hant": "大概需要3-5個工作日到帳",
                        "id": "Biasanya akan memakan waktu 3-5 hari untuk bisa masuk ke rekening anda",
                        "es": "Tardará alrededor de 3-5 días hábiles para llegar a la cuenta",
                        "pt-BR": "Demorará cerca de 3 a 5 dias úteis a chegar à conta",
                        "ar": "سوف يستغرق الأمر من 3 إلى 5 أيام عمل للوصول إلى الحساب."
                    },
                    "tip35": {
                        "zh": "电汇凭证已提交",
                        "en": "The wire transfer voucher has been submitted",
                        "vi": "Chứng từ chuyển khoản ngân hàng đã được gửi",
                        "zh-Hant": "電匯憑證已提交",
                        "id": "Bukti setoran telah dikirim",
                        "es": "El comprobante de transferencia bancaria ha sido enviado.",
                        "pt-BR": "O comprovante de transferência eletrônica foi enviado",
                        "ar": "تم إرسال قسيمة التحويل المصرفي."
                    },
                    "toUpload": {
                        "zh": "待上传",
                        "en": "To upload",
                        "vi": "Tải lên",
                        "zh-Hant": "待上傳",
                        "id": "Unggah",
                        "es": "Para Subir",
                        "pt-BR": "Fazer upload",
                        "ar": "لتحميل"
                    },
                    "underReview": {
                        "zh": "审核中",
                        "en": "Under review",
                        "vi": "Đang được xem xét",
                        "zh-Hant": "審核中",
                        "id": "Dalam peninjauan",
                        "es": "Bajo revisión",
                        "pt-BR": "Sob revisão",
                        "ar": "قيد المراجعة"
                    },
                    "successfully": {
                        "zh": "审核成功",
                        "en": "Successfully",
                        "vi": "Thành công",
                        "zh-Hant": "審核成功",
                        "id": "Sukses",
                        "es": "Con éxito",
                        "pt-BR": "Com sucesso",
                        "ar": "بنجاح"
                    },
                    "voucherConsiderations": {
                        "zh": "凭证注意事项",
                        "en": "Voucher considerations ",
                        "vi": "Xem xét giấy tờ xác nhận ",
                        "zh-Hant": "憑證註意事項",
                        "id": "Dalam pertimbangan",
                        "es": "Consideraciones cupones ",
                        "pt-BR": "Considerações de voucher",
                        "ar": "الأمور التي تتطلب الأخذ في الاعتبار بالنسبة القسيمة"
                    },
                    "tip36": {
                        "zh": "凭证信息必须显示姓名、银行卡号、支付金额等内容",
                        "en": "The voucher information must show the name, bank card number, payment amount and other contents",
                        "vi": "Thông tin chứng từ phải thể hiện tên, số thẻ ngân hàng, số tiền thanh toán và các nội dung khác",
                        "zh-Hant": "憑證信息必須顯示姓名、銀行卡號、支付金額等內容",
                        "id": "Bukti setoran wajib melampirkan informasi seperti, nama, nomor rekening bank, jumlah yang dikirim dan keterangan lainnya. ",
                        "es": "La información del cupón debe mostrar el nombre, el número de la tarjeta bancaria, el importe pago y otros contenidos",
                        "pt-BR": "As informações do comprovante devem mostrar o nome, o número do cartão bancário, o valor do pagamento e outros conteúdos.",
                        "ar": "يجب أن تتضمن معلومات القسيمة الاسم ورقم البطاقة المصرفية والمبلغ المدفوع والمحتويات الأخرى."
                    },
                    "tip37": {
                        "zh": "凭证信息必须为实名认证本人银行账户。",
                        "en": "The voucher information must be verified bank account of customer himself.",
                        "vi": "Giấy tờ xác nhận phải được xác nhận lại tài khoản ngân hàng của chính khách hàng.",
                        "zh-Hant": "憑證信息必須為實名認證本人銀行賬戶。",
                        "id": "Bukti setoran harus memiliki informasi yang sama dengan nama pemilik akun.",
                        "es": "La información del cupón debe ser la cuenta bancaria verificada del propio cliente.",
                        "pt-BR": "A informação do comprovante deve ser verificada conta bancária do próprio cliente.",
                        "ar": "يجب أن تكون معلومات القسيمة من نفس الحساب المصرفي الذي تم التحقق منه."
                    },
                    "tip38": {
                        "zh": "未满足以上要求，审核将被驳回。",
                        "en": "If the above requirements are not met, the audit will be rejected.",
                        "vi": "Nếu các yêu cầu trên không được đáp ứng, kiểm toán sẽ bị từ chối.",
                        "zh-Hant": "未滿足以上要求，審核將被駁回。",
                        "id": "Apabila persyaratan-persyaratan tersebut tidak terpenuhi, maka proses ditolak.",
                        "es": "Si no se cumplen los requisitos anteriores, la auditoría será rechazada.",
                        "pt-BR": "Se os requisitos acima não forem cumpridos, a auditoria será rejeitada.",
                        "ar": "إذا لم يتم استيفاء المتطلبات المذكورة أعلاه، سيتم رفض المراجعة."
                    },
                    "tip39": {
                        "zh": "审核驳回后，支付金额将原路退还，产生的1.5%手续费由您自行承担。",
                        "en": "After the review is rejected, the payment amount will be returned to you, and the 1.5% commission fee will be borne by you.",
                        "vi": "Sau khi xem xét bị từ chối, số tiền thanh toán sẽ được trả lại cho bạn và phí hoa hồng 1,5% sẽ do bạn.",
                        "zh-Hant": "審核駁回後，支付金額將原路退還，產生的1.5%手續費由您自行承擔。",
                        "id": "Apabila transaksi ditolak, maka dana akan dikembalikan ke rekening awal. Nasabah akan dikenakan biaya sebesar 1,5% . ",
                        "es": "Después de que se rechace la revisión, se le devolverá el importe del pago y usted pagará una comisión del 1,5%.",
                        "pt-BR": "Depois que a revisão for rejeitada, o valor do pagamento será devolvido a você e a taxa de comissão de 1,5% será paga por você.",
                        "ar": "بعد رفض المراجعة، سيتم رد المبلغ المدفوع إليك وستتحمل رسوم عمولة مقدارها 1.5%."
                    },
                    "tip40": {
                        "zh": "注意：充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        "en": "Note: after successful recharge, please upload the voucher in time. If it is not uploaded within two weeks, the transaction cannot be conducted.",
                        "vi": "Ghi chú: sau khi nạp lại tiền thành công, vui lòng tải lên giấy tờ xác nhận đúng thời điểm. Nếu giấy tờ xác nhận không được tải lên trong 2 tuần, giao dịch không thể thực hiện.",
                        "zh-Hant": "註意：充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。",
                        "id": "Catatan: setelah berhasil mengirim dana, pastikan anda juga mengunggah bukti setoran. Apabila bukti setoran tidak diunggah dalam waktu 2 minggu, maka nasabah tidak dapat melakukan transaksi apapun.",
                        "es": "Nota: después de una recarga con éxito, suba el cupón a tiempo. Si no se carga dentro de dos semanas, la transacción no se puede realizar.",
                        "pt-BR": "Nota: após a recarga bem sucedida, por favor, envie o comprovante no tempo. Se não for carregado dentro de duas semanas, a transação não poderá ser realizada.",
                        "ar": "ملحوظة: بعد إعادة الشحن بنجاح، يرجى تحميل الوثيقة في الموحد المحدد. إذا لم يتم التحميل في غضون أسبوعين، لا يمكن إتمام المعاملة."
                    },
                    "tip41": {
                        "zh": "＊代表必须上传凭证",
                        "en": "* represents must upload vouchers",
                        "vi": "* Người đại diện phải tải chứng từ lên",
                        "zh-Hant": "＊代表必須上傳憑證",
                        "id": "* Perwakilan harus mengunggah bukti setor",
                        "es": "* representa debe subir cupones",
                        "pt-BR": "* representa deve fazer o upload de vouchers",
                        "ar": "* يجب أن يتم تحميل القسائم"
                    },
                    "vouchersInstance": {
                        "zh": "查看凭证示例",
                        "en": "Vouchers instance",
                        "vi": "Ví dụ chứng từ",
                        "zh-Hant": "查看憑證示例",
                        "id": "Contoh Bukti Setoran",
                        "es": "Instancia cupones",
                        "pt-BR": "Instância do voucher",
                        "ar": "أمثلة على للقسائم"
                    },
                    "transactionSuccessful": {
                        "zh": "交易成功",
                        "en": "Transaction successful",
                        "vi": "Giao dịch thành công",
                        "zh-Hant": "交易成功",
                        "id": "Transaksi Berhasil",
                        "es": "Transacción éxito",
                        "pt-BR": "Transação sucedida",
                        "ar": "المعاملة ناجحة"
                    },
                    "submitAudition": {
                        "zh": "提交审核",
                        "en": "Submit audition",
                        "vi": "Gửi kiểm toán",
                        "zh-Hant": "提交審核",
                        "id": "Coba kirim",
                        "es": "Enviar audición",
                        "pt-BR": "Enviar audição",
                        "ar": "تقديم طلب الحصول على حساب حقيقي"
                    },
                    "noVouchers": {
                        "zh": "当前没有凭证",
                        "en": "No vouchers",
                        "vi": "Không có chứng từ",
                        "zh-Hant": "當前沒有憑證",
                        "id": "Tidak ada bukti setor",
                        "es": "No cupones",
                        "pt-BR": "Sem vouchers",
                        "ar": "ليست هناك قسائم"
                    },
                    "tip42": {
                        "zh": "受最高监管的约束，需要您通过认证审核后方可进行充值操作",
                        "en": "Subject to the highest regulatory constraints, you need to pass the verification audit before deposit",
                        "vi": "Theo các ràng buộc pháp lý cao nhất, bạn cần phải vượt qua kiểm tra xác minh trước khi gửi tiền",
                        "zh-Hant": "受最高監管的約束，需要您通過認證審核後方可進行充值操作",
                        "id": " Sesuai peraturan, anda harus sudah melewati proses verifikasi sebelum melakukan pengisian dana ",
                        "es": "Sujeto a las restricciones reglamentarias más estrictas, debe pasar la auditoría de verificación antes de depositar",
                        "pt-BR": "Sujeito às mais altas restrições regulatórias, você precisa passar pela auditoria de verificação antes do depósito",
                        "ar": "بمقتضى أشد القيود التنظيمية، يجب عليك اجتياز مراجعة التحقق قبل الإيداع."
                    },
                    "withdrawalTo": {
                        "zh": "提现到",
                        "en": "Withdrawal to",
                        "vi": "Rút tiền",
                        "zh-Hant": "提現到",
                        "id": "Tarik ke ",
                        "es": "Reembolsar a",
                        "pt-BR": "Sacar em",
                        "ar": "السحب إلى"
                    },
                    "tip43": {
                        "zh": "请填写您的真实CSE钱包账号",
                        "en": "Please fill out your true CSE wallet account",
                        "vi": "Vui lòng điền vào tài khoản ví điện tử CSE thực của bạn",
                        "zh-Hant": "請填寫您的真實CSE錢包帳號",
                        "id": "Silahkan masukkan Akun CSE anda ",
                        "es": "Por favor, rellene su verdadera cuenta de cartera CSE",
                        "pt-BR": "Por favor, preencha sua conta verdadeira carteira CSE",
                        "ar": "يرجى إدخال حساب محفظة CSE الحقيقي الخاص بك"
                    },
                    "tip44": {
                        "zh": "请填写您的真实PayPal账号",
                        "en": "Please fill out your real PayPal account",
                        "vi": "Vui lòng điền vào tài khoản PayPal thực của bạn",
                        "zh-Hant": "請填寫您的真實PayPal帳號",
                        "id": " Silahkan masukkan rekening PayPal anda ",
                        "es": "Por favor, rellene su verdadera cuenta de PayPal",
                        "pt-BR": "Por favor, preencha sua conta PayPal real",
                        "ar": "يرجى إدخال حساب PayPal الحقيقي الخاص بك"
                    },
                    "tip45": {
                        "zh": "无法进行出金操作",
                        "en": "Cannot withdrawal",
                        "vi": "Không thể rút tiền",
                        "zh-Hant": "無法進行出金操作",
                        "id": "Tidak bisa menarik dana",
                        "es": "No puede reembolsar",
                        "pt-BR": "Não é possível sacar",
                        "ar": "لا يمكن السحب"
                    },
                    "goUncopy": {
                        "zh": "前往取消复制",
                        "en": "Go to unfollow",
                        "vi": "Chuyển đến không sao chép",
                        "zh-Hant": "前往取消復制",
                        "id": "Pindah ke Berhenti Mengikuti",
                        "es": "Ir a dejar de seguir",
                        "pt-BR": "Ir para deixar de seguir",
                        "ar": "الذهاب إلى إلغاء المتابعة"
                    },
                    "goDeposit": {
                        "zh": "前往充值",
                        "en": "Go to deposit",
                        "vi": "Chuyển qua gửi tiền",
                        "zh-Hant": "前往充值",
                        "id": "Pindah ke Pengisian Dana",
                        "es": "Ir a depositar",
                        "pt-BR": "Vai depositar",
                        "ar": "الذهاب إلى الإيداع"
                    },
                    "tip46": {
                        "zh": "申请已提交，我们会在两个工作日内处理完毕",
                        "en": "The application has been submitted and will be processed within two working days",
                        "vi": "Đơn đăng ký đã được gửi và sẽ được xử lý trong vòng hai ngày làm việc",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢",
                        "id": " Permohonan telah terkirim dan akan diproses dalam kurun waktu 2 hari kerja ",
                        "es": "La solicitud ha sido enviada y será procesada en una plazo de dos días hábiles.",
                        "pt-BR": "O pedido foi submetido e será processado dentro de dois dias úteis",
                        "ar": "تم تقديم الطلب وسيتم معالجته في غضون يومين عمل."
                    },
                    "tip47": {
                        "zh": "到账时间约为10分钟，请耐心等待。",
                        "en": "The arrival time is about 10 minutes, please wait patiently.",
                        "vi": "Thời gian đến là khoảng 10 phút, hãy kiên nhẫn chờ đợi.",
                        "zh-Hant": "到帳時間約為10分鐘，請耐心等待。",
                        "id": " Dana akan masuk dalam 10 menit, mohon menunggu.",
                        "es": "El tiempo de llegada es de unos 10 minutos, por favor espere pacientemente.",
                        "pt-BR": "O tempo de chegada é de cerca de 10 minutos, por favor aguarde pacientemente.",
                        "ar": "وقت الوصول يصل إلى نحو 10 دقائق، يرجى الانتظار بصبر."
                    },
                    "continueWithdraw": {
                        "zh": "继续提现",
                        "en": "Continue to withdraw",
                        "vi": "Tiếp tục rút tiền",
                        "zh-Hant": "繼續提現",
                        "id": "Lanjut ke Penarikan",
                        "es": "Continuar a reembolsar",
                        "pt-BR": "Continue a retirar",
                        "ar": "الاستمرار في السحب"
                    },
                    "tip48": {
                        "zh": "如有疑问，请联系您的客户经理或联系客服",
                        "en": "If you have any questions, please contact your account manager or customer service",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với tài khoản quản lý hoặc dịch vụ chăm sóc khách hàng",
                        "zh-Hant": "如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": "Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Si tiene alguna pregunta, por favor, contacte con un Gestor de Cuenta o con el servicio de Atención al Cliente.",
                        "pt-BR": "Se você tiver alguma dúvida, entre em contato com o gerente da sua conta ou com o atendimento ao cliente",
                        "ar": "إذا كان لديك أي أسئلة تود طرحها ، يرجى الاتصال بمدير حسابك أو بخدمة العملاء."
                    },
                    "tip49": {
                        "zh": "请输入出金金额",
                        "en": "Please enter withdrawal amount",
                        "vi": "Vui lòng nhập số tiền rút",
                        "zh-Hant": "請輸入出金金額",
                        "id": "Silahkan masukkan jumlah yang ingin ditarik",
                        "es": "Por favor ingrese importe reembolso",
                        "pt-BR": "Por favor insira o valor de retirada",
                        "ar": "يرجى إدخال مبلغ السحب"
                    },
                    "tip50": {
                        "zh": "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        "en": "Entered amount should be Integer or decimal and greater than zero (No more than two digits after the decimal point)",
                        "vi": "Số tiền đã nhập phải là Số nguyên hoặc thập phân và lớn hơn 0 (Không quá hai chữ số sau dấu thập phân)",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）",
                        "id": " Jumlah yang dimasukkan harus bulat dan lebih dari 0 (tidak melebihi 2 angka dibelakang koma) ",
                        "es": "La cantidad ingresada debe ser un número entero o decimal y mayor que cero (no más de dos dígitos tras punto decimal)",
                        "pt-BR": "O valor inserido deve ser Inteiro ou decimal e maior que zero (Não mais do que dois dígitos após o ponto decimal)",
                        "ar": "المبلغ الذي يتم إدخاله يجب أن يكون عددًا صحيحًا أو  رقمًا عشريًا وأكبر من الصفر (لا يحتوي على أكثر من رقمين بعد العلامة العشرية)."
                    },
                    "tip51": {
                        "zh": "出金金额最多为",
                        "en": "Maximum withdrawal amount",
                        "vi": "Số tiền rút tối đa",
                        "zh-Hant": "出金金額最多為",
                        "id": "Jumlah maksimal yang dapat ditarik",
                        "es": "Importe máximo reembolsos",
                        "pt-BR": "Quantidade máxima de retirada",
                        "ar": "الحد الأقصى لمبلغ السحب"
                    },
                    "tip52": {
                        "zh": "出金金额最少为",
                        "en": "Minimum withdrawal amount",
                        "vi": "Số tiền rút tối thiểu",
                        "zh-Hant": "出金金額最少為",
                        "id": "Jumlah minimal yang dapat ditarik",
                        "es": "Importe mínimo reembolso",
                        "pt-BR": "Quantidade mínima de retirada",
                        "ar": "الحد الأدنى لمبلغ السحب"
                    },
                    "rate1d": {
                        "zh": "今日汇率：1 美元 =",
                        "en": "Today's exchange rate: $1 =",
                        "vi": "Tỉ lệ chuyển đổi ngày hôm nay: 1 đôla =",
                        "zh-Hant": "今日匯率：1 美元 =",
                        "id": "Nilai tukar hari ini : 1$ =",
                        "es": "Tipo de cambio de hoy: $1 =",
                        "pt-BR": "Taxa de câmbio de hoje: $1 =",
                        "ar": "سعر الصرف اليوم: $1 ="
                    },
                    "r1d": {
                        "zh": "1 美元 =",
                        "en": "$1 =",
                        "vi": "1 đô la =",
                        "zh-Hant": "1 美元 =",
                        "id": "1$ =",
                        "es": "$1 =",
                        "pt-BR": "$1 =",
                        "ar": "$1 ="
                    },
                    "withdrawing": {
                        "zh": "提现中",
                        "en": "Withdrawing",
                        "vi": "Đang rút tiền",
                        "zh-Hant": "提現中",
                        "id": "Penarikan",
                        "es": "Reembolsando",
                        "pt-BR": "Retirada",
                        "ar": "السحب"
                    },
                    "selectCurrency": {
                        "zh": "选择币种",
                        "en": "Select currency",
                        "vi": "Chọn tiền tệ",
                        "zh-Hant": "選擇蔽種",
                        "id": "Pilih Mata Uang",
                        "es": "Seleccione divisa",
                        "pt-BR": "Escolha a moeda",
                        "ar": "حدد العملة"
                    },
                    "tip53": {
                        "zh": "通过实名认证后才可以进行资金提现。",
                        "en": "You can withdrawal only if you passed the verification.",
                        "vi": "Bạn có thể rút tiền chỉ khi bạn vượt qua xác nhận.",
                        "zh-Hant": "通過實名認證後才可以進行資金提現。",
                        "id": "Anda hanya dapat melakukan penarikan apabila akun anda sudah diverifikasi",
                        "es": "Puede retirarse sólo si pasó la verificación.",
                        "pt-BR": "Você pode retirar apenas se você passou a verificação.",
                        "ar": "لا يمكنك السحب إلا بعد اجتياز التحقق."
                    },
                    "tip54": {
                        "zh": "充值后交易手数未满足活动规则要求，体验资金和充值前的盈利不可提取。",
                        "en": "The volume after deposit not meet the requirements of the activity rules, so experience money and profit before the recharge cannot be extracted.",
                        "vi": "Khối lượng sau khi tiền gửi không đáp ứng các yêu cầu của quy tắc hoạt động, do đó, số tiền trải nghiệm và lợi nhuận trước khi nạp tiền không thể được trích xuất.",
                        "zh-Hant": "充值後交易手數未滿足活動規則要求，體驗資金和充值前的盈利不可提取。",
                        "id": " Dana tidak dapat digunakan karena volume transaksi belum memenuhi persyaratan. ",
                        "es": "El volumen después del depósito no cumple con los requisitos de las reglas de actividad, por lo que, ni el experience money ni las ganancias pueden ser extraidas sin antes depositar.",
                        "pt-BR": "O volume após o depósito não atende aos requisitos das regras de atividade, portanto experimente dinheiro e lucros antes que a recarga não possa ser extraída.",
                        "ar": "الحجم بعد الإيداع لا يستوفي متطلبات قواعد النشاط، ولذلك لا يمكن استخراج أموال الحساب التجريبي والربح."
                    },
                    "tip55": {
                        "zh": "存在复制关系的，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        "en": "If there is a follow relationship, the system will automatically deduct the copy amount when withdrawing. If you want to withdraw all the copies, please cancel the copy relationship manually first.",
                        "vi": "Nếu có mối quan hệ tiếp theo, hệ thống sẽ tự động khấu trừ số tiền sao chép khi rút tiền. Nếu bạn muốn rút tất cả các sao chép, trước tiên hãy hủy bỏ mối quan hệ sao chép.",
                        "zh-Hant": "存在復制關系的，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。",
                        "id": " Jika anda sedang mengikuti Master, sistem akan mengurangi saldo yang ada di akun copy ketika anda melakukan penarikan. Karenanya, apabila anda ingin menarik semua dana, pastikan anda telah berhenti mengikuti semua Master terlebih dahulu.",
                        "es": "Si hay una relación de seguimiento, el sistema deducirá automáticamente el importe copy al reembolsar. Si desea retirar todas las copias, primero cancele la relación de copia manualmente.",
                        "pt-BR": "Se houver um relacionamento a seguir, o sistema deduzirá automaticamente o valor da cópia ao sacar. Se você quiser retirar todas as cópias, cancele o relacionamento de cópia manualmente primeiro.",
                        "ar": "إذا كانت هناك علاقة متابعة، سيقوم النظام تلقائيًا بخصم مبلغ النسخ عند السحب. إذا كنت تريد سحب جميع الأموال، يرجى إلغاء علاقة المتابعة يدويًا أولاً."
                    },
                    "voucher": {
                        "zh": "凭证记录",
                        "en": "Voucher",
                        "vi": "Chứng từ",
                        "zh-Hant": "憑證記錄",
                        "id": "Bukti Setor",
                        "es": "Cupón",
                        "pt-BR": "Voucher",
                        "ar": "القسيمة"
                    },
                    "tip56": {
                        "zh": "您有未上传的充值凭证，需上传历史充值凭证后才可继续使用网银支付功能。",
                        "en": "You have un-submit deposit voucher, you need to upload the history voucher before continue online payment.",
                        "vi": "Bạn đã hủy gửi chứng từ tiền gửi, bạn cần tải lên chứng từ lịch sử trước khi tiếp tục thanh toán trực tuyến.",
                        "zh-Hant": "您有未上傳的充值憑證，需上傳歷史充值憑證後才可繼續使用網銀支付功能。",
                        "id": " Anda wajib mengunggah bukti setor anda sebelum melakukan transaksi. ",
                        "es": "Tiene un comprobante de depósito sin enviar, debe cargar el historial comprobantes antes de continuar con el pago online.",
                        "pt-BR": "Você não enviou o comprovante de depósito, precisa fazer o upload do comprovante de histórico antes de continuar com o pagamento on-line.",
                        "ar": "هناك قسيمة إيداع لم تقم بتقديمها، يجب عليك تقديم البيانات المطلوبة قبل متابعة الدفع عبر الإنترنت."
                    },
                    "chooseOtherPayment": {
                        "zh": "选择其他支付方式",
                        "en": "Choose other payment methods",
                        "vi": "Chọn phương thức thanh toán khác",
                        "zh-Hant": "選擇其他支付方式",
                        "id": "Pilih metode pembayaran lainnya",
                        "es": "Seleccione otros medios de pago",
                        "pt-BR": "Escolher outros métodos de pagamento",
                        "ar": "اختر طرق دفع أخرى"
                    },
                    "fillPaymentCardInformation": {
                        "zh": "填写支付银行卡信息",
                        "en": "Fill in the payment card information",
                        "vi": "Điền vào thông tin thẻ thanh toán",
                        "zh-Hant": "填寫支付銀行卡信息",
                        "id": "Masukkan informasi rekening pembayaran anda",
                        "es": "Complete la información tarjeta de pago",
                        "pt-BR": "Preencher as informações",
                        "ar": "ادخل معلومات بطاقة الدفع"
                    },
                    "tip57": {
                        "zh": "当前支付方式最低充值金额为",
                        "en": "The minimum deposit amount of current payment method is",
                        "vi": "Số tiền gửi tối thiểu của phương thức thanh toán hiện tại là",
                        "zh-Hant": "當前支付方式最低充值金額為",
                        "id": " Minimum pengisian dana untuk metode ini adalah ",
                        "es": "El importe mínimo depósitos con medios de pago actuales es",
                        "pt-BR": "O valor do depósito mínimo do método de pagamento atual é",
                        "ar": "الحد الأقصى لمبلغ الإيداع لطريقة الدفع الحالية هو"
                    },
                    "tip58": {
                        "zh": "当前支付方式最高充值金额为",
                        "en": "The maximum deposit amount of current payment method is",
                        "vi": "Số tiền gửi cao nhất của phương thức thanh toán hiện tại là",
                        "zh-Hant": "當前支付方式最高充值金額為",
                        "id": "Maksimum pengisian dana menggunakan metode ini adalah",
                        "es": "El importe máximo depósitos con medio de pago actual es",
                        "pt-BR": "O valor máximo de depósito do método de pagamento atual é",
                        "ar": "الحد الأقصى لمبلغ الإيداع لطريقة الدفع الحالية هو"
                    },
                    "isThereAn": {
                        "zh": "是否有",
                        "en": "Is there an",
                        "vi": "Đây có phải là",
                        "zh-Hant": "是否有",
                        "id": "Apakah ada",
                        "es": "Hay un",
                        "pt-BR": "Existe um",
                        "ar": "هل هناك"
                    },
                    "uploadTeleTranVoucher": {
                        "zh": "请上传电汇凭证",
                        "en": "Upload telegraphic transfer voucher",
                        "vi": "Tải lên phiếu chuyển tiền điện báo",
                        "zh-Hant": "請上傳電匯憑證",
                        "id": " Unggah bukti setor ",
                        "es": "Cargar cupón de transferencia telegráfica",
                        "pt-BR": "Carregar comprovante de transferência telegráfica",
                        "ar": "تحميل قسيمة التحويل المصرفي الإلكتروني"
                    },
                    "depositPage": {
                        "zh": "入金页面",
                        "en": "Deposit page",
                        "vi": "Trang gửi tiền",
                        "zh-Hant": "入金頁面",
                        "id": "Halaman pengisian dana",
                        "es": "Página depósitos",
                        "pt-BR": "Página de depósito",
                        "ar": "صفحة الإيداع"
                    },
                    "enterBankCardNum": {
                        "zh": "请输入银行卡号",
                        "en": "Enter bank card number",
                        "vi": "Nhập vào số tài khoản ngân hàng",
                        "zh-Hant": "請輸入銀行卡號",
                        "id": "Masukkan rekening bank",
                        "es": "Enter número tarjeta banco",
                        "pt-BR": "Inserir número do cartão bancário",
                        "ar": "ادخل رقم البطاقة المصرفية"
                    },
                    "tip59_1": {
                        "zh": "折合",
                        "en": "Equivalent ",
                        "vi": "Tương đương ",
                        "zh-Hant": "折合",
                        "id": "Setara ",
                        "es": "Equivalente ",
                        "pt-BR": "Equivalente",
                        "ar": "معادل"
                    },
                    "tip59_2": {
                        "zh": "约：",
                        "en": " about: ",
                        "vi": " khoảng: ",
                        "zh-Hant": "約：",
                        "id": " Tentang: ",
                        "es": " sobre: ",
                        "pt-BR": "  sobre",
                        "ar": "نبذة مختصرة:"
                    },
                    "tip60": {
                        "zh": "充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        "en": "Please upload deposit voucher within two weeks, otherwise, trading operations will not be possible.",
                        "vi": "Vui lòng tải lên chứng từ tiền gửi trong vòng hai tuần, nếu không, các hoạt động giao dịch sẽ không thể thực hiện được.",
                        "zh-Hant": "充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。",
                        "id": " Mohon unggah bukti setor paling lambat 2 minggu sejak pengisian dana, jika tidak maka nasabah tidak dapat melakukan transaksi apapun. ",
                        "es": "Por favor, cargue el comprobante de depósito dentro de un plazo de dos semanas; de lo contrario, no podrá hacer operaciones de trading.",
                        "pt-BR": "Por favor, faça o upload do comprovante de depósito dentro de duas semanas, caso contrário, as operações de negociação não serão possíveis.",
                        "ar": "يرجى تحميل قسيمة الإيداع خلال أسبوعين، وإلا لن يمكن إجراء عمليات التداول."
                    },
                    "tip61": {
                        "zh": "您有入金凭证已超过一周未上传，请及时上传，否则将无法进行交易操作。",
                        "en": "You have not uploaded your voucher for more than a week, please upload it in time, otherwise you will not be able to trade.",
                        "vi": "Bạn chưa tải lên phiếu thưởng của mình trong hơn một tuần, vui lòng tải lên trong thời gian, nếu không bạn sẽ không thể giao dịch được.",
                        "zh-Hant": "您有入金憑證已超過壹周未上傳，請及時上傳，否則將無法進行交易操作。",
                        "id": " Anda belum mengunggah bukti setor selama lebih dari 1 minggu, mohon segera unggah bukti setor anda jika tidak, nasabah tidak lagi dapat melakukan transaksi apapun ",
                        "es": "Lleva más de una semana sin cargar su cupón; por favor, súbalo a tiempo, de lo contrario, no podrá hacer trading.",
                        "pt-BR": "Você não enviou o seu voucher por mais de uma semana, faça o upload no prazo, caso contrário você não poderá negociar.",
                        "ar": "لم تقم بتحميل القسيمة الخاصة بك لأكثر من أسبوع، يرجى تحميلها في الموعد المحدد، وإلا لن يكون بمقدورك التداول."
                    },
                    "tip62_1": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please fill in the wire transfer application form. ",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để nhận được thanh toán của bạn kịp thời và chính xác, vui lòng điền vào biểu mẫu đăng ký chuyển khoản ngân hàng.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，",
                        "id": "Perlu dicatata bahwa kami tidak menerima pengisian dana secara tunai. Untuk memastikan bahwa pengisian dana anda berjalan dengan lancar, mohon isi formulir dibawah ini ",
                        "es": "Por favor, tenga presente que no aceptamos depósitos en efectivo directamente en nuestra cuenta de banco. Para recibir su pago de manera puntual y precisa, por favor complete el formulario de solicitud de transfer.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. Para receber seu pagamento em tempo e precisão, preencha o formulário de solicitação de transferência eletrônica.",
                        "ar": "يرجى ملاحظة أننا لا نقبل الدفع النقدي مباشرة إلى حسابنا المصرفي. حتى تتسلم المدفوعات المستحقة لك في الوقت المناسب وبشكل دقيق، يرجى ملء نموذج طلب التحويل المصرفي."
                    },
                    "tip62_2": {
                        "zh": "请您务必在汇款附言一栏里填写您的交易账号。",
                        "en": " Please be sure to fill out your transaction account in the remittance slip.",
                        "vi": " Vui lòng đảm bảo điền vào tài khoản giao dịch của bạn trong phiếu chuyển tiền.",
                        "zh-Hant": "請您務必在匯款附言壹欄裏填寫您的交易帳號。",
                        "id": " Pastikan anda menuliskan nomor akun transaksi anda di bukti setoran.",
                        "es": " Asegúrese de rellenar su cuenta transacciones en el certificado de envío transfer.",
                        "pt-BR": "Por favor, não se esqueça de preencher sua conta de transação no recibo de remessa.",
                        "ar": "يرجى التأكد من إدخال حساب المعاملة الخاص بك في إيصال الحوالة."
                    },
                    "tip62_3": {
                        "zh": "同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": " Please also provide your phone number so that we can get in touch with you.",
                        "vi": " Vui lòng cung cấp số điện thoại của bạn để chúng tôi liên lạc với bạn.",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": "Mohon isi nomor telepon yang dapat dihubungi agar kami dapat menghubungi anda apabila terjadi kesalahan",
                        "es": " Por favor, proporcione su número de teléfono para que podamos contactarle.",
                        "pt-BR": "Por favor, forneça seu número de telefone para que possamos entrar em contato com você.",
                        "ar": "يرجى أيضًا إمدادنا برقم هاتفك حتى نستطيع التواصل معك."
                    },
                    "tip63_1": {
                        "zh": "出金",
                        "en": "The ",
                        "vi": "Cái ",
                        "zh-Hant": "出金",
                        "id": "Itu ",
                        "es": "La ",
                        "pt-BR": "O ",
                        "ar": "الـ"
                    },
                    "tip63_2": {
                        "zh": "申请已提交，我们会在两个工作日内处理完毕",
                        "en": " withdrawal application has been submitted, and we will finish the processing within two working days.",
                        "vi": " đơn đăng ký rút tiền đã được gửi và chúng tôi sẽ hoàn tất việc xử lý trong vòng hai ngày làm việc.",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢",
                        "id": " Permohonan penarikan telah dikirim, kami akan menyelesaikan proses penarikan dalam waktu 2 hari kerja. ",
                        "es": " solicitud de reembolsos han sido enviadas, y finalizaremos el procesamiento en una plazo de dos días laborables.",
                        "pt-BR": " pedido de retirada foi submetido, e vamos terminar o processamento dentro de dois dias úteis.",
                        "ar": "تم تقديم طلب السحب وسنقوم بإتمام المعالجة في غضون يومين عمل."
                    },
                    "tip64_1": {
                        "zh": "出金金额最多为 ",
                        "en": "The maximum deposit amount is USD ",
                        "vi": "Số tiền gửi cao nhất là USD ",
                        "zh-Hant": "出金金額最多為 ",
                        "id": "Jumlah maksimum pengisian dana adalah $ ",
                        "es": "El importe máximo de depósitos es de USD ",
                        "pt-BR": "O valor máximo do depósito é US$ ",
                        "ar": "الحد الأقصى لمبلغ الإيداع هو    USD"
                    },
                    "tip64_2": {
                        "zh": " 美金",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": " 美金",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": " "
                    },
                    "tip65_1": {
                        "zh": "出金金额最少为 ",
                        "en": "The minimum withdraw amount is USD ",
                        "vi": "Số tiền rút tối thiểu là USD ",
                        "zh-Hant": "出金金額最少為 ",
                        "id": "Jumlah minimum penarikan adalah $ ",
                        "es": "El importe mínimo Reembolsos es de USD ",
                        "pt-BR": "O valor mínimo de saque é US$ ",
                        "ar": "الحد الأقصى لمبلغ السحب هو    USD"
                    },
                    "tip65_2": {
                        "zh": " 美金",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": " 美金",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": " "
                    },
                    "depositStipulation": {
                        "zh": "入金规定",
                        "en": "Deposit stipulation",
                        "vi": "Quy định gửi tiền",
                        "zh-Hant": "入金規定",
                        "id": "Aturan Pengisian Dana",
                        "es": "Estipulaciones depósitos",
                        "pt-BR": "Estipulação de depósito",
                        "ar": "شروط الإيداع"
                    },
                    "clientAccountM": {
                        "zh": "客户平台账号为：",
                        "en": "Account: ",
                        "vi": "tài khoản giao dịch của khách hàng là: ",
                        "zh-Hant": "客戶平臺賬號為：",
                        "id": "Platform Akun pelanggan adalah: ",
                        "es": "Cuenta plataforma cliente es: ",
                        "pt-BR": "Conta:",
                        "ar": "الحساب:"
                    },
                    "copyAccountPay": {
                        "zh": "复制此账号并支付",
                        "en": "Copy this account and pay",
                        "vi": "sao chép tài khoản và thanh toán",
                        "zh-Hant": "復制此賬號並支付",
                        "id": "Ikuti akun ini dan Bayar",
                        "es": "Copie esta cuenta y pague",
                        "pt-BR": "Copie esta conta e pague",
                        "ar": "انسخ هذا الحساب وادفع"
                    },
                    "isHasAvodaAccount": {
                        "zh": "是否拥有AVODA Pay账号",
                        "en": "Do you have an AVODA Pay account",
                        "vi": "Bạn có tài khoản AVODA Pay không?",
                        "zh-Hant": "是否擁有AVODA Pay賬號",
                        "id": "Apakah anda memiliki rekening AVODA PAY",
                        "es": "Do you have an AVODA Pay account",
                        "pt-BR": "Você tem uma conta AVODA Pay?",
                        "ar": "هل لديك حساب AVODA Pay ؟"
                    },
                    "hasAvodaAccount": {
                        "zh": "是 — 直接填写基本信息进行充值",
                        "en": "Yes - Fill in the basic information directly to deposit",
                        "vi": "Có - Điền thông tin cơ bản để nạp tiền trực tiếp",
                        "zh-Hant": "是 — 直接填寫基本信息進行充值",
                        "id": "Ya - Masukkan informasi deposit",
                        "es": "Yes - Fill in the basic information directly to deposit",
                        "pt-BR": "Sim - Preencha as informações básicas diretamente para depositar",
                        "ar": "نعم - ادخل المعلومات الأساسية مباشرة من أجل الإيداع"
                    },
                    "noAvodaAccount": {
                        "zh": "否 — 跳转AVODA Pay平台注册并充值",
                        "en": "No - Jump to AVODA Pay platform to register and deposit",
                        "vi": "Không - Đi đến nền tảng AVODA Pay để đăng kí và nạp tiền",
                        "zh-Hant": "否 — 跳轉AVODA Pay平臺註冊並充值",
                        "id": "Tidak - Masuk ke platform AVODA PAY untuk daftar dan deposit",
                        "es": "No - Jump to AVODA Pay platform to register and deposit",
                        "pt-BR": "Não - Salta para a plataforma AVODA Pay para registar e depositar",
                        "ar": "لا - اذهب إلى منصة AVODA Pay للتسجيل والإيداع"
                    }
                },
                "master": {
                    "positionTime": {
                        "zh": "持仓",
                        "en": "Position ",
                        "vi": "Vị thế ",
                        "zh-Hant": "持倉",
                        "id": "Posisi ",
                        "es": "Posición ",
                        "pt-BR": "Posição ",
                        "ar": ""
                    },
                    "profitLoss": {
                        "zh": "止盈/止损",
                        "en": "Profit/Loss",
                        "vi": "Lời/Lỗ",
                        "zh-Hant": "止盈/止損",
                        "id": "untung/rugi",
                        "es": "Ganancias/Pérdidas",
                        "pt-BR": "Lucro/perda",
                        "ar": ""
                    },
                    "profit": {
                        "zh": "盈利",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "盈利",
                        "id": "Keuntungan",
                        "es": "Ganancia",
                        "pt-BR": "Lucro",
                        "ar": ""
                    },
                    "loss": {
                        "zh": "亏损",
                        "en": "Loss",
                        "vi": "Lỗ",
                        "zh-Hant": "虧損",
                        "id": "Kerugian",
                        "es": "Pérdida",
                        "pt-BR": "Perda",
                        "ar": ""
                    },
                    "starMasters": {
                        "zh": "明星高手",
                        "en": "Star Masters",
                        "vi": "Bậc thầy nổi bật",
                        "zh-Hant": "明星高手",
                        "id": "Master Pilihan",
                        "es": "Star Masters",
                        "pt-BR": "Mestre estrela",
                        "ar": ""
                    },
                    "profitCopiers": {
                        "zh": "跟随者收益",
                        "en": "Profit of copiers",
                        "vi": "Lợi nhuận của người theo dõi",
                        "zh-Hant": "跟隨者收益",
                        "id": "Keuntungan pengikuti",
                        "es": "Ganancias de Copiadores",
                        "pt-BR": "Ganancia dos copiadores",
                        "ar": ""
                    },
                    "copyGet1": {
                        "zh": "复制赠$",
                        "en": "Copy to get $",
                        "vi": "Sao chép để nhận ",
                        "zh-Hant": "複製贈$",
                        "id": "Copy untuk mendapatkan $",
                        "es": "Copy para obtener $",
                        "pt-BR": "Copy para obtener $",
                        "ar": ""
                    },
                    "copyGet2": {
                        "zh": " ",
                        "en": " ",
                        "vi": "$",
                        "zh-Hant": " ",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " ",
                        "ar": ""
                    },
                    "analytics": {
                        "zh": "数据统计",
                        "en": "Analytics",
                        "vi": "Đánh giá",
                        "zh-Hant": "數據統計",
                        "id": "Analisis",
                        "es": "Analítica",
                        "pt-BR": "Analítica",
                        "ar": ""
                    },
                    "recommendedMasters": {
                        "zh": "推荐高手",
                        "en": "Recommended Masters",
                        "vi": "Bậc thầy được đề xuất",
                        "zh-Hant": "推薦高手",
                        "id": "Rekomendasi Master",
                        "es": "Masters recomendados",
                        "pt-BR": "Mestre recomendados",
                        "ar": ""
                    },
                    "copiers": {
                        "zh": "跟随者",
                        "en": "Copiers",
                        "vi": "Người theo dõi",
                        "zh-Hant": "跟隨者",
                        "id": "Pengikut",
                        "es": "Copiadores",
                        "pt-BR": "Copiador",
                        "ar": ""
                    },
                    "willReceive1": {
                        "zh": "您将得到$",
                        "en": "You will receive $",
                        "vi": "Bạn sẽ nhận được ",
                        "zh-Hant": "您將得到$",
                        "id": "Anda akan menerima kupon senilai $",
                        "es": "Recibirá un cupón de $",
                        "pt-BR": "Você receberá un cupom de $",
                        "ar": ""
                    },
                    "willReceive2": {
                        "zh": "红包当您成功跟随该高手",
                        "en": " coupon while you copied this Master",
                        "vi": "$ coupon khi sao chép Bậc Thầy này",
                        "zh-Hant": "紅包當您成功跟隨該高手",
                        "id": " ketika mengikuti Master ini",
                        "es": " mientras copia a este Master",
                        "pt-BR": " enquanto copia este Mestre",
                        "ar": ""
                    },
                    "returnChart30": {
                        "zh": "收益率对比图",
                        "en": "Return comparison chart",
                        "vi": "Biểu đồ so sánh lợi nhuận",
                        "zh-Hant": "收益率對比圖",
                        "id": "Kembali ke grafik perbandingan",
                        "es": "Tabla de comparación de retornos",
                        "pt-BR": "Tabela de comparação de retorno",
                        "ar": ""
                    },
                    "currentMasterReturn": {
                        "zh": "当前高手收益率",
                        "en": "Current Master's Return",
                        "vi": "Lợi nhuận của bậc thầy hiện tại",
                        "zh-Hant": "當前高手收益率",
                        "id": "Keuntungan Master saat ini",
                        "es": "Retorno actual del Master",
                        "pt-BR": "Retorno atual do Mestre",
                        "ar": ""
                    },
                    "mastersAverageReturn": {
                        "zh": "所有高手平均收益率",
                        "en": "Masters' Average Return",
                        "vi": "Lợi nhuận trung bình của các bậc thầy",
                        "zh-Hant": "所有高手平均收益率",
                        "id": "Rata-rata keuntungan Master",
                        "es": "Retorno promedio de los Masters",
                        "pt-BR": "Retorno médio dos Mestres",
                        "ar": ""
                    },
                    "positions": {
                        "zh": "持仓单",
                        "en": "Positions",
                        "vi": "Các vị thế",
                        "zh-Hant": "持倉單",
                        "id": "Posisi",
                        "es": "Posiciones",
                        "pt-BR": "Posições",
                        "ar": ""
                    },
                    "closed": {
                        "zh": "历史单",
                        "en": "Closed",
                        "vi": "Đã đóng",
                        "zh-Hant": "歷史單",
                        "id": "Sudah ditutup",
                        "es": "Cerrada",
                        "pt-BR": "Fechadas",
                        "ar": ""
                    },
                    "data": {
                        "zh": "交易表现",
                        "en": "Data",
                        "vi": "Dữ liệu",
                        "zh-Hant": "交易表現",
                        "id": "Data",
                        "es": "Datos",
                        "pt-BR": "Dados",
                        "ar": ""
                    },
                    "best": {
                        "zh": "最佳",
                        "en": "Best",
                        "vi": "Tốt nhất",
                        "zh-Hant": "最佳",
                        "id": "Terbaik",
                        "es": "Mejor",
                        "pt-BR": "Melhor",
                        "ar": ""
                    },
                    "minimum": {
                        "zh": "最少",
                        "en": "Minimum",
                        "vi": "Tối thiểu",
                        "zh-Hant": "最少",
                        "id": "Minimal",
                        "es": "Mínimo",
                        "pt-BR": "Mínimo",
                        "ar": ""
                    },
                    "available": {
                        "zh": "可用",
                        "en": "Available",
                        "vi": "Khả dụng",
                        "zh-Hant": "可用",
                        "id": "Tersedia",
                        "es": "Disponible",
                        "pt-BR": "Disponível",
                        "ar": ""
                    },
                    "precautions": {
                        "zh": "注意事项",
                        "en": "Precautions",
                        "vi": "Sự đề phòng",
                        "zh-Hant": "註意事項",
                        "id": "Tindakan pencegahan",
                        "es": "Precauciones: ",
                        "pt-BR": "Precauções",
                        "ar": "الاحتياطات"
                    },
                    "masterLevelInstructions": {
                        "zh": "高手等级说明",
                        "en": "Master Level Instructions",
                        "vi": "Hướng Dẫn Cấp Độ Của Bậc Thầy",
                        "zh-Hant": "高手等級說明",
                        "id": "Panduan Tingkat Master",
                        "es": "Instrucciones Nivel Master",
                        "pt-BR": "Instruções de nível mestre",
                        "ar": "تعليمات مستوى الأستاذ"
                    },
                    "tip1": {
                        "zh": "为了最大限度地规避交易风险，TigerWit根据高手等级限制可复制总额范围：",
                        "en": "In order to maximize the risk of dealing with the transaction, the TigerWit according master’s level limit to be followed Total range: ",
                        "vi": "Để tối đa hóa rủi ro giao dịch với giao dịch, TigerWit theo cấp độ của bậc thầy giới hạn theo phạm vi Tổng:",
                        "zh-Hant": "為了最大限度地規避交易風險，TigerWit根據高手等級限制可復制總額範圍：",
                        "id": " Untuk mengendalikan resiko, TigerWit akan membatasi tingkat serta dana yang dapat dikelola oleh master sesuai dengan kemampuannya:",
                        "es": "Para maximizar el riesgo de dealing con la transacción en relación con el importe actual del master y ajustar el uso del rango de apalancamiento: ",
                        "pt-BR": "Para maximizar o risco de lidar com a transação, o TigerWit de acordo com o limite de nível do mestre a ser seguido Faixa total:",
                        "ar": "من أجل تجنب مخاطر التداول إلى أقصى حد، تقوم TigerWit بتحديد النطاق الإجمالي وفقًا لمستوى الأستاذ."
                    },
                    "tip2": {
                        "zh": "用户复制高手的复制资金不可超过高手当前账户级别的限额；",
                        "en": "The user’s copy of the funds shall not exceed the current account level limit",
                        "vi": "Sao chép tiền của người dùng không được vượt quá giới hạn cấp tài khoản hiện tại",
                        "zh-Hant": "用戶復制高手的復制資金不可超過高手當前賬戶級別的限額；",
                        "id": " Dana nasabah untuk mengikuti Master tidak boleh melebihi batas yang telah ditentukan untuk jenis akun ini ",
                        "es": "La copia de los fondos del usuario no debe exceder el límite de nivel de cuenta actual",
                        "pt-BR": "A cópia do usuário dos fundos não deve exceder o limite de nível da conta atual",
                        "ar": "لا يجوز أن يتجاوز نسخ الأموال من جانب المستخدمين عن الحد الأقصى للمستوى الحالي للحساب"
                    },
                    "tip3": {
                        "zh": "若当前累计复制资金量达到限额，系统将提醒高手进行账户升级，高手确认并更改账户级别后，用户方能继续复制；",
                        "en": "If the current cumulative amount of funds to meet the limit, the system will remind the master to upgrade the account, experts confirm and change the account level, the user can continue to copy",
                        "vi": "Nếu số tiền tích lũy hiện tại của các quỹ để đáp ứng các giới hạn, hệ thống sẽ nhắc nhở bậc thầy để nâng cấp tài khoản, các chuyên gia xác nhận và thay đổi cấp tài khoản, người dùng có thể tiếp tục sao chép",
                        "zh-Hant": "若當前累計復制資金量達到限額，系統將提醒高手進行賬戶升級，高手確認並更改賬戶級別後，用戶方能繼續復制；",
                        "id": " Apabila dana yang terkumpul sudah mencapai batas, sistem akan mengingatkan Master untuk memperbarui akunnya. Setelah melewati proses dan tingkat akun Master telah ditingkatkan, nasabah baru dapat mengikuti Master tersebut ",
                        "es": "Si la cantidad acumulada actual de fondos alcanza el límite, el sistema recordará al Master que haga un upgrade en la cuenta;  una vez confirmado y cambiado el nivel de la cuenta, el usuario puede seguir replicando",
                        "pt-BR": "Se o atual montante acumulado de fundos para atender o limite, o sistema irá lembrar o mestre para atualizar a conta, os especialistas confirmam e alterar o nível da conta, o usuário pode continuar a copiar",
                        "ar": "إذا كان المبلغ الإجمالي للأموال يستوفي الحد، سيقوم النظام بتذكير الأستاذ لترقية الحساب، يقوم الخبراء بالتأكيد وتغيير مستوى الحساب، يمكن للمستخدم مواصلة النسخ"
                    },
                    "tip4": {
                        "zh": "高手只能使用账户级别内支持的杠杆进行交易，复制者跟随高手进行同杠杆开仓交易。",
                        "en": "The master can only use the account level to support the leverage of the transaction, the user to follow the master with the lever to open the transaction.",
                        "vi": "Bậc Thầy chỉ có thể sử dụng cấp độ tài khoản để hỗ trợ đòn bẩy của giao dịch, người dùng phải làm theo chủ với đòn bẩy để mở giao dịch.",
                        "zh-Hant": "高手只能使用賬戶級別內支持的杠桿進行交易，復制者跟隨高手進行同杠桿開倉交易。",
                        "id": " Master hanya dapat menggunakan daya ungkit yang telah disesuaikan dengan tingkat akun Master.Nasabah yang mengikuti Master juga akan disesuaikan daya ungkitnya setara dengan Master. ",
                        "es": "El master sólo puede usar el nivel de cuenta para soportar el apalancamiento de la transacción; el usuario para seguir al maestro con la palanca para abrir la transacción.",
                        "pt-BR": "O mestre só pode usar o nível de conta para suportar a alavancagem da transação, o usuário seguir o mestre com a alavanca para abrir a transação.",
                        "ar": "يمكن للأستاذ استخدام الرافعة المالية التي يدعمها مستوى الحساب فقط. ويتبع المستخدم الأستاذ في استخدام نفس الرافعة المالية التي يستخدمها الأستاذ."
                    },
                    "masterLevel": {
                        "zh": "高手等级",
                        "en": "Master Level",
                        "vi": "Cấp độ bậc thầy",
                        "zh-Hant": "高手等級",
                        "id": "Tingkat Master",
                        "es": "Nivel Master",
                        "pt-BR": "Nivel do mestre",
                        "ar": "مستوى الأستاذ"
                    },
                    "currentLevel": {
                        "zh": "当前类别",
                        "en": "Current Level",
                        "vi": "Cấp Độ Hiện Tại",
                        "zh-Hant": "當前類別",
                        "id": "Tingkat Saat ini",
                        "es": "Nivel Actual",
                        "pt-BR": "Nível atual",
                        "ar": "المستوى الحالي"
                    },
                    "leverageRangeM": {
                        "zh": "杠杆使用范围：",
                        "en": "Leverage Range: ",
                        "vi": "Phạm Vi Đòn Bẩy: ",
                        "zh-Hant": "杠桿使用範圍：",
                        "id": "Daya ungkit",
                        "es": "Rango Apalancamiento: ",
                        "pt-BR": "Faixa de Alavancagem:",
                        "ar": "نطاق الرافعة المالية:"
                    },
                    "copyAmountLimitM": {
                        "zh": "复制金额限额：",
                        "en": "Copy Amount Limit: ",
                        "vi": "Số Tiền Sao Chép Giới Hạn: ",
                        "zh-Hant": "復制金額限額：",
                        "id": "Batasan Jumlah Copy",
                        "es": "Límite Importe Copy: ",
                        "pt-BR": "Copiar Limite de Quantia:",
                        "ar": "حد مبلغ النسخ:"
                    },
                    "remainingCopyableAmountM": {
                        "zh": "剩余可复制金额：",
                        "en": "Remaining Copyable Amount: ",
                        "vi": "Duy Trì Số Tiền Sao Chép: ",
                        "zh-Hant": "剩余可復制金額：",
                        "id": "Sisa dana yang masih dimasukkan untuk Copy",
                        "es": "Importe Copiable Restante: ",
                        "pt-BR": "Valor restante copiável:",
                        "ar": "المبلغ المتبقي القابل للنسخ:"
                    },
                    "tip9": {
                        "zh": "成为TigerWit高手 获取更多收益",
                        "en": "Become a TigerWit’s master to get more income",
                        "vi": "Trở Thành Bậc Thầy của TigerWit để có thêm thu nhập",
                        "zh-Hant": "成為TigerWit高手 獲取更多收益",
                        "id": " Jadilah seorang Master di TigerWit dan dapatkan penghasilan tambahan ",
                        "es": "Conviértase en Master TigerWit y obtenga más ingresos",
                        "pt-BR": "Torne-se um mestre do TigerWit para obter mais renda",
                        "ar": "انضم إلى نخبة أساتذة TigerWit واربح المزيد من الدخل"
                    },
                    "tip10": {
                        "zh": "榜单投资者被其他用户复制跟随，会获得复制者20%的盈利分成，",
                        "en": "The list of investors is copied by other users, will get 20% of the profits of the replicator,",
                        "vi": "Danh sách các nhà đầu tư được sao chép bởi những người dùng khác, sẽ nhận được 20% lợi nhuận của người sao chép,",
                        "zh-Hant": "榜單投資者被其他用戶復制跟隨，會獲得復制者20%的盈利分成，",
                        "id": " Daftar Master yang diikuti oleh nasabah, Master akan mendapatkan 20% dari total keuntungan yang dihasilkan oleh nasabah, ",
                        "es": "La lista de inversores es copiada por otros usuarios; obtendrá el 20% de las ganancias del replicador,",
                        "pt-BR": "A lista de investidores é copiada por outros usuários, terá 20% dos lucros do replicador,",
                        "ar": "يتم نسخ قائمة المستثمرين بواسطة مستخدمين آخرين، سيحصلون على 20% من أرباح الشخص الناسخ لصفقاتهم،"
                    },
                    "tip11": {
                        "zh": "申请成为高手需达成以下条件",
                        "en": "Application to become a master to meet the following conditions",
                        "vi": "Đơn đăng kí để trở thành một bậc thầy để đáp ứng các điều kiện sau",
                        "zh-Hant": "申請成為高手需達成以下條件",
                        "id": " Untuk menjadi master, anda harus memenuhi kriteria sebagai berikut ",
                        "es": "Solicitud para convertirse en master debe cumplir las siguientes condiciones",
                        "pt-BR": "Para aplicar a Mestre, é necessario ter os seguintes requisitos",
                        "ar": "يجب أن يستوفي طلب الراغب في أن يصبح أستاذًا الشروط التالية"
                    },
                    "tip12": {
                        "zh": "开通TigerWit真实账户并完成实名认证",
                        "en": "Open the real account of the TigerWit and complete the verification",
                        "vi": "Mở tài khoản thực của TigerWit và hoàn thành xác minh",
                        "zh-Hant": "開通TigerWit真實賬戶並完成實名認證",
                        "id": " Buka akun Live di TigerWit dan selesaikan verifikasi",
                        "es": "Abra una cuenta real TigerWit y complete la verificación",
                        "pt-BR": "Abra a conta real do TigerWit e complete a verificação",
                        "ar": "افتح حساب حقيقي مع TigerWit واستكمل إجراءات التحقق"
                    },
                    "tip13": {
                        "zh": "在TigerWit交易平台真实入金并连续自主交易20个以上工作日",
                        "en": "In the TigerWit trading platform deposit and continuous self-trading more than 20 working days",
                        "vi": "Trong nền tảng giao dịch TigerWit tiền gửi và tự giao dịch liên tục hơn 20 ngày làm việc",
                        "zh-Hant": "在TigerWit交易平臺真實入金並連續自主交易20個以上工作日",
                        "id": " Masukkan dana di platform trading TigerWit dan melakukan transaksi selama 20 hari kerja ",
                        "es": "Deposite en la plataforma de trading de TigerWit y haga trading directamente durante más de 20 días laborables.",
                        "pt-BR": "No depósito plataforma de negociação TigerWit e auto-negociação contínua mais de 20 dias úteis",
                        "ar": "في منصة تداول TigerWit وقم بالإيداع ومواصلة التداول بنفسك لفترة أكثر من 20 يوم عمل."
                    },
                    "tip14": {
                        "zh": "近30日收益率大于20%",
                        "en": "Nearly 30 days rate of return greater than 20%",
                        "vi": "Gần 30 ngày có tỷ lệ lợi nhuận lớn hơn 20%",
                        "zh-Hant": "近30日收益率大於20%",
                        "id": " Menghasilkan keuntungan lebih dari 20% dalam kurun waktu 30 hari",
                        "es": "Tasa retorno superior al 20% durante casi 30 días",
                        "pt-BR": "Taxa de retorno superior a 20%, nos quase 30 dias",
                        "ar": "تحقيق معدل عائد يزيد عن 20% مدة 30 يومًا تقريبًا"
                    },
                    "tip15": {
                        "zh": "账户余额不得低于$500",
                        "en": "Account balance should not be less than $ 500",
                        "vi": "Số dư tài khoản không được nhỏ hơn 500 đô la",
                        "zh-Hant": "賬戶余額不得低於$500",
                        "id": " Menjaga Saldo akun agar tidak kurang dari 500$",
                        "es": "Saldo en cuenta no inferior a $ 500",
                        "pt-BR": "Saldo não deve ser menos que $ 500",
                        "ar": "يجب ألا يقل رصيد الحساب عن 500 دولار"
                    },
                    "tip16": {
                        "zh": "立即申请成为高手",
                        "en": "Apply Immediately",
                        "vi": "Đăng kí ngay lập lực",
                        "zh-Hant": "立即申請成為高手",
                        "id": "Daftar sekarang juga",
                        "es": "Solicitar Inmediatamente",
                        "pt-BR": "Aplicar imediatamente",
                        "ar": "التطبيق فورًا"
                    },
                    "tip17": {
                        "zh": "高手申请审核中，",
                        "en": "Is under review,",
                        "vi": "Đang được xem xét",
                        "zh-Hant": "高手申請審核中，",
                        "id": "Dalam proses peninjauan",
                        "es": "Está bajo revisión,",
                        "pt-BR": "Está sob revisão,",
                        "ar": "قيد المراجعة،"
                    },
                    "tip18": {
                        "zh": "请耐心等待",
                        "en": "Please wait patiently",
                        "vi": "Xin hãy kiên nhẫn chờ đợi",
                        "zh-Hant": "請耐心等待",
                        "id": "Mohon Menunggu",
                        "es": "Por favor, espere pacientemente",
                        "pt-BR": "Por favor, aguarde pacientemente",
                        "ar": "يرجى الانتظار بصبر."
                    },
                    "tip19": {
                        "zh": "高手申请由工作人员人工审核，我们会尽快完成审核并将结果通知您",
                        "en": "The master application is manually audited by the staff, and we will complete the review as soon as possible and inform the result",
                        "vi": "Đơn đăng kí bậc thầy được kiểm tra bởi nhân viên và chúng tôi sẽ hoàn thành việc xem xét càng sớm càng tốt và thông báo kết quả ",
                        "zh-Hant": "高手申請由工作人員人工審核，我們會盡快完成審核並將結果通知您",
                        "id": " Pengajuan aplikasi untuk menjadi Master akan diperiksa secara manual. Kami akan mengirimkan hasil peninjauan setelah proses pemeriksaan selesai dilakukan. ",
                        "es": "La solicitud para Master es auditada manualmente por el staff, y finalizaremos la revisión a la mayor brevedad y le informaremos del resultado",
                        "pt-BR": "O aplicativo mestre é manualmente auditado pela equipe, e nós completaremos a revisão o mais rápido possível e informaremos o resultado",
                        "ar": "يراجع الموظفون طلب الأستاذ بشكل يدوي، وسنقوم بإتمام المراجعة وإبلاغك بالنتيجة في أسرع وقت ممكن"
                    },
                    "tip20": {
                        "zh": "高手申请被拒绝",
                        "en": "The master application was rejected",
                        "vi": "Đơn đăng kí bậc thầy đã bị từ chối",
                        "zh-Hant": "高手申請被拒絕",
                        "id": " Permohonan untuk menjadi Master ditolak ",
                        "es": "Solicitud Master ha sido rechazada",
                        "pt-BR": "A aplicação para Mestre foi negada",
                        "ar": "تم رفض طلب الأستاذ"
                    },
                    "tip21": {
                        "zh": "高手申请已通过审核",
                        "en": "The master application has been approved",
                        "vi": "Đơn đăng kí bậc thầy đã được phê duyệt",
                        "zh-Hant": "高手申請已通過審核",
                        "id": " Permohonan untuk menjadi Master disetujui ",
                        "es": "Solicitud Master ha sido aprobada",
                        "pt-BR": "A aplicação para Mestre foi aprovada",
                        "ar": "تمت الموافقة على طلب الأستاذ"
                    },
                    "tip22": {
                        "zh": "恭喜您的高手申请已通过审核！",
                        "en": "Congratulations to your master application has been approved!",
                        "vi": "Xin chúc mừng đơn đăng kí bậc thầy của bạn đã được phê duyệt",
                        "zh-Hant": "恭喜您的高手申請已通過審核！",
                        "id": " Selamat, Permohonan untuk menjadi Master telah disetujui ",
                        "es": "¡Felicitaciones su Solicitud Master ha sido aprobada!",
                        "pt-BR": "Parabéns, a sua aplicação a mestre foi aprovada!",
                        "ar": "خالص التهاني، تمت الموافقة على طلب الأستاذ الخاص بك!"
                    },
                    "tip23": {
                        "zh": "您的交易账户已被推荐到高手榜，请重新登录后查看。",
                        "en": "Your trading account has been recommended to the master list. Please check back again.",
                        "vi": "Tài khoản giao dịch của bạn đã được đề xuất vào danh sách chính. Vui lòng kiểm tra lại.",
                        "zh-Hant": "您的交易賬戶已被推薦到高手榜，請重新登錄後查看。",
                        "id": " Akun transaksi anda direkomendasikan untuk menjadi Master. Silakan lihat lebih detail. ",
                        "es": "Su cuenta de trading ha sido recomendada en la lista maestra. Por favor, compruebe de nuevo.",
                        "pt-BR": "Sua conta de negociação foi recomendada para a lista principal. Por favor, volte novamente.",
                        "ar": "تمت التوصية بإدراج حساب التداول الخاص بك في قائمة الأساتذة. يرجى المراجعة مرة أخرى."
                    },
                    "tip24": {
                        "zh": "高手申请已成功提交",
                        "en": "The master application has been successfully submitted",
                        "vi": "Đơn đăng kí bậc thầy đã gửi thành công",
                        "zh-Hant": "高手申請已成功提交",
                        "id": "Pengajuan aplikasi berhasil dikirim",
                        "es": "Solicitud Master ha sido enviada con éxito.",
                        "pt-BR": "O aplicativo mestre foi submetido com sucesso",
                        "ar": "تمت تقديم طلب الأستاذ الخاص بك بنجاح"
                    },
                    "tip25": {
                        "zh": "我们会尽快进行审核，请耐心等待",
                        "en": "We will review as soon as possible, please be patient",
                        "vi": "Chúng tôi sẽ xem xét lại trong thời gian sớm nhất có thể, vui lòng kiên nhẫn",
                        "zh-Hant": "我們會盡快進行審核，請耐心等待",
                        "id": "Kami akan melakukan peninjauan, mohon menunggu",
                        "es": "Lo revisaremos lo antes posible, por favor sea paciente.",
                        "pt-BR": "Vamos rever o mais rapidamente possível, por favor seja paciente",
                        "ar": "سنقوم بالمراجعة في أسرع وقت ممكن، يرجى التحلي بالصبر"
                    },
                    "tip26": {
                        "zh": "未达成高手申请条件",
                        "en": "Did not meet the requirements",
                        "vi": "Không đáp ứng các yêu cầu",
                        "zh-Hant": "未達成高手申請條件",
                        "id": "Tidak memenuhi kriteria",
                        "es": "No cumple los requisitos",
                        "pt-BR": "Não cumpriu os requisitos",
                        "ar": "لم يتم استيفاء الاشتراطات"
                    },
                    "tip27": {
                        "zh": "请继续努力",
                        "en": "Please keep working hard",
                        "vi": "Hãy tiếp tục cố gắng",
                        "zh-Hant": "請繼續努力",
                        "id": "Teruslah mencoba",
                        "es": "Por favor, siga intentándolo",
                        "pt-BR": "Por favor, continue trabalhando duro",
                        "ar": "يرجى مواصلة العمل بجد"
                    },
                    "masterLevels": {
                        "zh": "高手类别",
                        "en": "Master Level",
                        "vi": "Cấp độ bậc thầy",
                        "zh-Hant": "高手類別",
                        "id": "Tingkat Master",
                        "es": "Nivel Master",
                        "pt-BR": "Nivel do mestre",
                        "ar": "مستوى الأستاذ"
                    },
                    "last30AaysYield": {
                        "zh": "近30天收益率",
                        "en": "Last 30d return",
                        "vi": "Lợi nhuận 30 ngày trước",
                        "zh-Hant": "近30天收益率",
                        "id": "Keuntungan 30 hari terakhir",
                        "es": "Keuntungan 30 hari terakhir",
                        "pt-BR": "Retorno nos últimos 30 dias",
                        "ar": "العائد في أخر 30 يومًا"
                    },
                    "days30MaximumDrawdown": {
                        "zh": "近30天最大跌幅",
                        "en": "Last 30 days the maximum drawdown",
                        "vi": "maximum drawdown 30 ngày qua",
                        "zh-Hant": "近30天最大跌幅",
                        "id": " Maksimal Drawdown 30 hari terakhir",
                        "es": "Máximo drawdown últimos 30 días",
                        "pt-BR": "Máximo rebaixamento dos últimos 30 dias",
                        "ar": "الحد الأقصى للهبوط في أخر 30 يومًا"
                    },
                    "lastTradingDay": {
                        "zh": "上一交易日",
                        "en": "Last day traded",
                        "vi": "Ngày cuối cùng để giao dịch",
                        "zh-Hant": "上壹交易日",
                        "id": "Terakhir transaksi",
                        "es": "Último día operado",
                        "pt-BR": "Último dia negociado",
                        "ar": "أخر يوم تم فيه التداول"
                    },
                    "tip6": {
                        "zh": "为了最大限度地规避交易风险，TigerWit根据高手的当前跟随金额调整杠杆使用范围：",
                        "en": "In order to maximize the risk of dealing with the transaction, the tiger foreign exchange according to the current amount of the master to adjust the use of leverage range: ",
                        "vi": "để tối đa hóa rủi ro giao dịch với giao dịch, sàn giao dịch ngoại hối tiger theo số tiền hiện tại của bậc thầy để điều chỉnh việc sử dụng phạm vi đòn bẩy: ",
                        "zh-Hant": "為了最大限度地規避交易風險，TigerWit根據高手的當前跟隨金額調整杠桿使用範圍：",
                        "id": " Untuk mengendalikan resiko, TigerWit akan membatasi tingkat serta dana yang dapat dikelola oleh master sesuai dengan kemampuannya:",
                        "es": "Para maximizar el riesgo de dealing con la transacción en relación con el importe actual del master y ajustar el uso del rango de apalancamiento: ",
                        "pt-BR": "A fim de maximizar o risco de lidar com a transação, o câmbio de acordo com o valor atual do mestre para ajustar o uso da faixa de influência:",
                        "ar": "من أجل تجنب مخاطر التداول إلى أقصى حد، تقوم TigerWit بتحديد المبلغ الإجمالي للنسخ والرافعة المالية المستخدمة وفقًا لمستوى الأستاذ."
                    },
                    "tip7": {
                        "zh": "当前跟随金额＞$20万，高手可使用100倍、50倍杠杆进行交易",
                        "en": "Current amount of follow > $200,000 , master can use 100, 50 times the lever to trade;",
                        "vi": "Số tiền sao chép hiện tại> 200.000 đô la, tổng thể có thể sử dụng đòn bẩy 100, 50 lần để giao dịch;",
                        "zh-Hant": "當前跟隨金額＞$20萬，高手可使用100倍、50倍杠桿進行交易",
                        "id": " Dana saat ini telah mencapai lebih dari 200.000$, Master hanya dapat menggunakan daya ungkit 50 atau 100 untuk dapat melakukan transaksi",
                        "es": "Importe actual siguiendo > $200,000 , master puede usar 100, 50 veces la palanca para operar;",
                        "pt-BR": "Quantidade atual de seguida > $ 200.000, mestre pode usar 100, 50 vezes a alavanca para o comércio;",
                        "ar": "The copy is no longer in use"
                    },
                    "tip8": {
                        "zh": "当前跟随金额≤$20万，高手可使用全部杠杆进行交易",
                        "en": " Current amount of follow ≤ $200,000 , master can use all the leverage to trade;",
                        "vi": "Số tiền hiện tại theo sau ≤ 200.000 đô la, bậc thầy có thể sử dụng tất cả đòn bẩy để giao dịch;",
                        "zh-Hant": "當前跟隨金額≤$20萬，高手可使用全部杠桿進行交易",
                        "id": " Dana saat ini ≤ 200,000$, master dapat menggunakan semua pilihan daya ungkit untuk melakukan transaksi; ",
                        "es": " Importe actual siguiendo ≤ $200,000 , master puede usar todo el apalancamiento para operar;",
                        "pt-BR": "Quantidade atual de seguida ≤ $ 200.000, mestre pode usar toda a alavancagem para o comércio;",
                        "ar": "The copy is no longer in use"
                    },
                    "masterSystem": {
                        "zh": "复制跟单系统",
                        "en": "’s fully-automated order-following system",
                        "vi": "Hệ thống theo thứ tự hoàn toàn tự động",
                        "zh-Hant": "復制跟單系統",
                        "id": "Sistem eksekusi transaksi secara otomatis ",
                        "es": "sistema totalmente automatizado de seguimiento de órdenes",
                        "pt-BR": "s totalmente automatizado sistema de seguimento de ordem",
                        "ar": "نظام لمتابعة الأمر آلي بالكامل"
                    },
                    "tip28": {
                        "zh": "直通全球资本市场",
                        "en": "Direct access to global capital markets",
                        "vi": "Truy cập trực tiếp vào thị trường vốn toàn cầu",
                        "zh-Hant": "直通全球資本市場",
                        "id": "Akses langsung ke pasar keuangan global ",
                        "es": "Acceso directo a los mercados globales de capitales",
                        "pt-BR": "Acesso direto aos mercados de capitais globais",
                        "ar": "وصول مباشر لأسواق المال العالمية"
                    },
                    "tradeLikeMaster": {
                        "zh": "人人都是投资高手",
                        "en": "Everyone is the master of investment",
                        "vi": "Mọi người đều là bậc thầy về đầu tư",
                        "zh-Hant": "人人都是投資高手",
                        "id": " Semua orang ahli dalam berinvestasi",
                        "es": "Todo el mundo puede ser un master de las inversiones",
                        "pt-BR": "Todo mundo é o mestre do investimento",
                        "ar": "كل شخص هو سيد الاستثمار"
                    },
                    "clickFollow": {
                        "zh": "一键复制",
                        "en": "Click to follow",
                        "vi": "Nhấp để sao chép",
                        "zh-Hant": "壹鍵復制",
                        "id": "Klik mengikuti",
                        "es": "Click para seguir",
                        "pt-BR": "Clique para seguir",
                        "ar": "انقر للمتابعة"
                    },
                    "enjoyProfits": {
                        "zh": "坐享其成",
                        "en": "Enjoy profits",
                        "vi": "Tận hưởng lợi nhuận",
                        "zh-Hant": "坐享其成",
                        "id": "Tận hưởng lợi nhuận",
                        "es": "Disfrute los beneficios",
                        "pt-BR": "Aproveite os lucros",
                        "ar": "استمتع بالأرباح"
                    },
                    "highIncome": {
                        "zh": "收益率",
                        "en": "Return",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "收益率",
                        "id": "Keuntungan",
                        "es": "Retorno",
                        "pt-BR": "Retorno",
                        "ar": "الربحية"
                    },
                    "exact": {
                        "zh": "胜率",
                        "en": "Win rate",
                        "vi": "Tỷ lệ thắng",
                        "zh-Hant": "勝率",
                        "id": "Tingkat kemenangan",
                        "es": "Ganar ratios",
                        "pt-BR": "Taxa de acertos",
                        "ar": "الثبات"
                    },
                    "returnLast30D": {
                        "zh": "近30日收益率",
                        "en": "Return(last 30D)",
                        "vi": "Lời/lỗ(30 ngày gần nhất)",
                        "zh-Hant": "近30日收益率",
                        "id": "Keuntungan (30 hari terakhir)",
                        "es": "Retorno(últ. 30D)",
                        "pt-BR": "Retorno (últimos 30 dias)",
                        "ar": "العائد (أخر 30 يومًا)"
                    },
                    "accuracyLast30D": {
                        "zh": "近30日胜率",
                        "en": "Success rate",
                        "vi": "Tỷ lệ thành công",
                        "zh-Hant": "近30日勝率",
                        "id": "Tingkat keberhasilan",
                        "es": "Tasa éxito",
                        "pt-BR": "Taxa de sucesso",
                        "ar": "معدل النجاح"
                    },
                    "followers": {
                        "zh": "历史跟随者",
                        "en": "Followers",
                        "vi": "Người sao chép",
                        "zh-Hant": "歷史跟隨者",
                        "id": "Pengikut",
                        "es": "Seguidores",
                        "pt-BR": "Seguidores",
                        "ar": "المتابعين"
                    },
                    "performanceOf": {
                        "zh": "年表现",
                        "en": "Performance: ",
                        "vi": "Hiệu suất: ",
                        "zh-Hant": "年表現",
                        "id": "Kinerja: ",
                        "es": "Rendimiento: ",
                        "pt-BR": "Performance:",
                        "ar": "الأداء:"
                    },
                    "tip30": {
                        "zh": "过往表现并不能完全代表未来交易的成功率，您需要理智的做出判断。数据将会在每天北京时间8：00更新",
                        "en": "Past performance doesn't represent future performance.Data will updated daily at 00:00 GMT",
                        "vi": "cập nhaanjt hằng ngày vào lúc 00:00 GMT",
                        "zh-Hant": "過往的表現並不能完全代表未來交易的成功率，您需要理智的做出判斷。數據將會在每天00：00GMT更新",
                        "id": "Performa masa lalu tidak mewakili performa untuk masa depan. Data akan diperbarui setiap hari pukul 07:00 WIB",
                        "es": "El rendimiento pasado no representa el rendimiento futuro. Los datos se actualizarán diariamente a las 00:00 GMT",
                        "pt-BR": "O desempenho passado não representa o desempenho futuro. Os dados são atualizados diariamente às 00:00 GMT",
                        "ar": "الأداء في الماضي لا يضمن الأداء في المستقبل."
                    },
                    "totalClosedOrders": {
                        "zh": "总平仓交易数",
                        "en": "Total Closed Orders",
                        "vi": "Đóng tất cả các lệnh",
                        "zh-Hant": "總平倉交易數",
                        "id": "Total posisi tertutup",
                        "es": "Total Órdenes Cerradas",
                        "pt-BR": "Total de pedidos fechados",
                        "ar": "إجمالي الأوامر المغلقة"
                    },
                    "buy": {
                        "zh": "多单",
                        "en": "BUY",
                        "vi": "MUA",
                        "zh-Hant": "多單",
                        "id": "BELI",
                        "es": "COMPRAR",
                        "pt-BR": "Comprar",
                        "ar": "شراء"
                    },
                    "buyD": {
                        "zh": "多单，",
                        "en": "BUY,",
                        "vi": "MUA,",
                        "zh-Hant": "多單，",
                        "id": "BELI,",
                        "es": "COMPRAR",
                        "pt-BR": "COMPRAR,",
                        "ar": "شراء"
                    },
                    "sell": {
                        "zh": "空单",
                        "en": "SELL",
                        "vi": "BÁN",
                        "zh-Hant": "空單",
                        "id": "JUAL",
                        "es": "VENDER",
                        "pt-BR": "Vender",
                        "ar": "بيع"
                    },
                    "sellD": {
                        "zh": "空单，",
                        "en": "SELL,",
                        "vi": "BÁN,",
                        "zh-Hant": "空單，",
                        "id": "JUAL,",
                        "es": "VENDER",
                        "pt-BR": "VENDER,",
                        "ar": "بيع"
                    },
                    "pleaseChooseAccount": {
                        "zh": "请选择账号：",
                        "en": "Please choose account: ",
                        "vi": "Vui lòng chọn tài khoản: ",
                        "zh-Hant": "請選擇帳號：",
                        "id": "Silahkan pilih akun",
                        "es": "Por favor, seleccione cuenta: ",
                        "pt-BR": "Por favor, escolha a conta:",
                        "ar": "يرجى تحديد الحساب:"
                    },
                    "masterRequirements": {
                        "zh": "未达成以下高手申请条件，请继续努力",
                        "en": "Did not meet the requirements, please keep working hard.",
                        "vi": "Không đáp ứng các yêu cầu, hãy tiếp tục làm việc chăm chỉ.",
                        "zh-Hant": "未達成以下高手申請條件，請繼續努力",
                        "id": " Tidak memenuhi kriteria. Teruslah mencoba ",
                        "es": "No cumple los requisitos, por favor, intentándolo.",
                        "pt-BR": "Não atendeu aos requisitos, por favor, continue trabalhando duro.",
                        "ar": "أنت لا تستوفي الاشتراطات اللازمة، يرجى مواصلة العمل بجد."
                    },
                    "masterRequirements1": {
                        "zh": "图片大小超过 2MB 请重新选择",
                        "en": "Image size over 2MB please re-select",
                        "vi": "Dung lượng hình ảnh hơn 20MB vui lòng chọn lại",
                        "zh-Hant": "圖片大小超過 2MB 請重新選擇",
                        "id": "Ukuran gambar melebihi 2MB, mohon unggah kembali",
                        "es": "Tamaño de imagen superior a 2MB; por favor, vuelva a seleccionar",
                        "pt-BR": "Tamanho da imagem superior a 2 MB, selecione novamente",
                        "ar": "حجم الصورة أكبر من 2 م.ب، يرجى إعادة الاختيار."
                    },
                    "masterRequirements2": {
                        "zh": "昵称使用规范：昵称应体现个人属性，避免选用官方化、敏感时政词汇、不雅词汇、广告名称、手机号码、社交联系方式等；",
                        "en": "Username specification: username should reflect personal attributes and avoid official, sensitive political vocabulary, indecent vocabulary, advertising name, mobile phone number, social contact information, etc.",
                        "vi": "Đặc tả tên người dùng: tên người dùng phải phản ánh các thuộc tính cá nhân và tránh từ vựng chính trị, nhạy cảm, từ vựng không đứng đắn, tên quảng cáo, số điện thoại di động, thông tin liên hệ xã hội, v.v.",
                        "zh-Hant": "昵稱使用規範：昵稱應體現個人屬性，避免選用官方化、敏感時政詞匯、不雅詞匯、廣告名稱、手機號碼、社交聯系方式等；",
                        "id": " Aturan pemilihan nama : Nama yang digunakan harus mencerminkan sifat atau karakter pribadi, hindari nama yang sensitif, tidak senonoh, nama berupa nomor telepon seluler,dan lain sebagainya . ",
                        "es": "Especificaciones nombre usuario: el nombre de usuario debe reflejar los atributos personales y evitar vocabulario oficial, político sensible, vocabulario indecente, marcas publicitarias, número de teléfono móvil, información contacto social media, etc.",
                        "pt-BR": "Especificação do nome de usuário: o nome de usuário deve refletir os atributos pessoais e evitar o vocabulário político oficial e sensível, o vocabulário indecente, o nome da publicidade, o número do celular, as informações de contato social, etc.",
                        "ar": "مواصفات اسم المستخدم: يجب أن يعكس اسم المستخدم الخصائص الشخصية ولا يحتوي على أي مفردات رسمية أو مفردات ذات حساسية سياسة أو مفردات خادشة للحياء أو اسم إعلاني أو رقم هاتف محمول أو معلومات التواصل الاجتماعي وما إلى ذلك."
                    },
                    "masterRequirements3": {
                        "zh": "头像使用规范：头像禁止使用选用政治敏感图片、不雅图片、广告图片、品牌LOGO、广告物料等；",
                        "en": "Profile photo specification: it is prohibited to use politically sensitive images, indecent images, advertising images, brand logos, advertising materials, etc.",
                        "vi": "Đặc tả ảnh tiểu sử: cấm sử dụng hình ảnh nhạy cảm về mặt chính trị, hình ảnh không đứng đắn, hình ảnh quảng cáo, biểu tượng thương hiệu, tài liệu quảng cáo, v.v ...",
                        "zh-Hant": "頭像使用規範：頭像禁止使用選用政治敏感圖片、不雅圖片、廣告圖片、品牌LOGO、廣告物料等；",
                        "id": " Aturan penggunaan foto: Dilarang menggunakan foto yang sensitif, porno, logo/brand, konten iklan, dan lain sebagainya ... ",
                        "es": "Especificación foto perfil: está prohibido usar imágenes políticamente sensibles, imágenes indecentes, imágenes publicitarias, logotipos de marcas, materiales publicitarios, etc.",
                        "pt-BR": "Especificação de foto de perfil: é proibido usar imagens politicamente sensíveis, imagens indecentes, imagens publicitárias, logotipos de marcas, materiais publicitários, etc.",
                        "ar": "مواصفات صورة الملف الشخصي: يحظر استخدام الصور ذات الحساسية السياسية أو الصور الخادشة للحياء أو الصور الإعلانية أو شعارات العلامات التجارية أو المواد الإعلانية وما إلى ذلك."
                    },
                    "masterRequirements4": {
                        "zh": "成为高手后昵称及头像将不能再次修改，请谨慎填写；",
                        "en": "The profile photo and username can’t be changed after became a master, please fill in carefully.",
                        "vi": "Không thể thay đổi ảnh tiểu sử và tên người dùng sau khi trở thành chủ nhân, vui lòng điền kỹ.",
                        "zh-Hant": "成為高手後昵稱及頭像將不能再次修改，請謹慎填寫；",
                        "id": " Nama dan foto profil tidak dapat diubah setelah menjadi seorang master, pertimbangkan dengan matang. ",
                        "es": "La foto de perfil y el nombre de usuario no se pueden cambiar siendo Master; tómese su tiempo.",
                        "pt-BR": "A foto do perfil e o nome de usuário não podem ser alterados depois de se tornar um mestre. Por favor, preencha com atenção.",
                        "ar": "لا يمكن تغيير صورة الملف الشخصي واسم المستخدم بعد أن تصبح أستاذًا، يرجى الإدخال بعناية."
                    },
                    "masterRequirements5": {
                        "zh": "违背以上情况，申请将会被驳回。",
                        "en": "In violation of the above, the application will be rejected.",
                        "vi": "Vi phạm các điều trên, đơn đăng ký sẽ bị từ chối.",
                        "zh-Hant": "違背以上情況，申請將會被駁回。",
                        "id": " Apabila melanggar peraturan diatas, permohonan aplikasi menjadi Master akan ditolak. ",
                        "es": "En violación de lo anterior, la solicitud será rechazada.",
                        "pt-BR": "Em violação do acima, o pedido será rejeitado.",
                        "ar": "عند مخالفة البنود سالفة الذكر، سيتم رفض الطلب."
                    },
                    "applyMasterReminder": {
                        "zh": "申请高手提醒",
                        "en": "Apply for master reminder",
                        "vi": "Lời nhắc Đăng kí bậc thầy",
                        "zh-Hant": "申請高手提醒",
                        "id": " Pemberitahuan status aplikasi Master ",
                        "es": "Solicite recordatorio Master",
                        "pt-BR": "Aplicar para lembrete mestre",
                        "ar": "تذكير بالتقدم بطلب للأستاذ"
                    },
                    "sureAboutApply": {
                        "zh": "确定申请高手吗？",
                        "en": "Are you sure about applying?",
                        "vi": "Bạn có chắc chắn về việc áp dụng không?",
                        "zh-Hant": "確定申請高手嗎？",
                        "id": " Apakah anda yakin untuk mengajukan aplikasi? ",
                        "es": "¿Está seguro quiere iniciar solicitud?",
                        "pt-BR": "Você tem certeza sobre a aplicação?",
                        "ar": "هل أنت متأكد بشأن التقدم بطلبك؟"
                    },
                    "sureAboutApply1": {
                        "zh": "未达成高手申请条件，请继续努力",
                        "en": "Did not meet the master application conditions, please keep trying",
                        "vi": "Không đáp ứng các điều kiện đăng ký bậc thầy, vui lòng tiếp tục thử",
                        "zh-Hant": "未達成高手申請條件，請繼續努力",
                        "id": " Tidak memenuhi kriteria master, Teruslah mencoba. ",
                        "es": "No cumple las condiciones Master; por favor, siga intentándolo",
                        "pt-BR": "Não atendeu às condições do aplicativo mestre, continue tentando",
                        "ar": "أنت لا تستوفي شروط طلب الأستاذ، يرجى مواصلة المحاولة."
                    },
                    "applicationSubmitted": {
                        "zh": "申请已提交！",
                        "en": "Application has been submitted!",
                        "vi": "Đơn đăng kí đã được gửi!",
                        "zh-Hant": "申請已提交！",
                        "id": "Permohonan aplikasi telah dikirim! ",
                        "es": "¡La solicitud ha sido enviada!",
                        "pt-BR": "A inscrição foi enviada!",
                        "ar": "تم تقديم الطلبات!"
                    },
                    "copyTrading": {
                        "zh": "复制跟单交易模式，人人都是投资高手",
                        "en": "With TigerWit’s fully-automated copy-trading technology anyone can be the Master of their own trading",
                        "vi": "Với công nghệ giao dịch sao chép hoàn toàn tự động của TigerWit, bất kỳ ai cũng có thể là Bậc thầy Giao dịch của chính họ ",
                        "zh-Hant": "復制跟單交易模式，人人都是投資高手",
                        "id": "Dengan memanfaatkan teknologi copy-trading miliki TigerWit, siapapun bisa menghasilkan uang.",
                        "es": "Con la tecnología totalmente automatizada copy trading de TigerWit, usted también puede convertirse en una Master del Trading.",
                        "pt-BR": "Com a tecnologia para copiar as negociações totalmente automatizada da TigerWit, qualquer um pode ser o mestre de suas próprias negociações",
                        "ar": "مع تكنولوجيا التداول بنسخ الصفقات الآلية بالكامل والتي توفرها شركة  TigerWit، يمكن لأي شخص ربح الأموال."
                    },
                    "newhome_12": {
                        "zh": "在高手榜单中选择一位高手。",
                        "en": "Select a Master from the ranking table.",
                        "vi": "Chọn một Bậc thầy từ bảng xếp hạng.",
                        "zh-Hant": "在高手榜單中選擇壹位高手。",
                        "id": "Bebas memilih Master dari daftar peringkat",
                        "es": "Seleccione un Master del ranking",
                        "pt-BR": "Selecionar um Mestre pelo ranking.",
                        "ar": "اختر الأستاذ الذي يعجبك من قائمة التصنيف"
                    },
                    "newhome_13": {
                        "zh": "选择你想跟随的高手进行交易。",
                        "en": "Select the Master’s trade you want to follow.",
                        "vi": "Tiến hành sao chép giao dịch từ Bậc Thầy.",
                        "zh-Hant": "選擇妳想跟隨的高手進行交易。",
                        "id": "Pilih Master yang ingin anda ikuti.",
                        "es": "Seleccione el trade del Master que quiere seguir.",
                        "pt-BR": "Selecionar a negociação do Mestre que você quer seguir.",
                        "ar": "اختر صفقة الأستاذ التي تريد أن تتبعها"
                    },
                    "newhome_14": {
                        "zh": "设置订单值。",
                        "en": "Set your order value.",
                        "vi": "Cài đặt giá trị lệnh của bạn.",
                        "zh-Hant": "設置訂單值。",
                        "id": "Pilih nilai transaksi anda.",
                        "es": "Fije el valor de sus órdenes.",
                        "pt-BR": "Configurar seu valor de ordem.",
                        "ar": "حدد قيمة الأمر الخاص بك"
                    },
                    "newhome_15": {
                        "zh": "成为TigerWit高手，你将获得跟随者盈利的20%。",
                        "en": "Become a TigerWit Master and earn 20% commission on your followers’ profits.",
                        "vi": "Trở thành Bậc thầy TigerWit và nhận 20% hoa hồng lợi nhuận từ người sao chép.",
                        "zh-Hant": "成為TigerWit高手，妳將獲得跟隨者盈利的20%。",
                        "id": "Ayo jadi Master di TigerWit dan hasilkan komisi hingga 20% dari total keuntungan pengikut anda.",
                        "es": "Sea un TigerWit Máster y gane un 20% comisión sobre beneficio seguidores.",
                        "pt-BR": "Tornar-se um Mestre da TigerWit e ganhe 20% de comissão sobre os lucros de seus seguidores.",
                        "ar": "كن أحد أساتذة TigerWit واربح عمولة 20% على أرباح المتابعين لك"
                    },
                    "chooseMaster": {
                        "zh": "选择高手",
                        "en": "Choose a Master",
                        "vi": "Chọn Bậc thầy",
                        "zh-Hant": "選擇高手",
                        "id": "Pilih Master",
                        "es": "Seleccione un Master",
                        "pt-BR": "Escolha um mestre",
                        "ar": "اختر أحد الأساتذة"
                    },
                    "clickCopy": {
                        "zh": "点击复制",
                        "en": "Copy with one click",
                        "vi": "Sao chép bằng 1 click",
                        "zh-Hant": "點擊復制",
                        "id": "Ikuti hanya dengan 1 klik",
                        "es": "Copy con un click",
                        "pt-BR": "Copiar com um clique",
                        "ar": "انسخ بنقرة واحدة"
                    },
                    "takeProfit": {
                        "zh": "开始交易",
                        "en": "Take profit",
                        "vi": "Nhận lợi nhuận",
                        "zh-Hant": "開始交易",
                        "id": "Hasilkan Keuntungan",
                        "es": "Obtenga beneficios ",
                        "pt-BR": "Obter lucros",
                        "ar": "جني الربح"
                    },
                    "selectMaster": {
                        "zh": "系统从三个维度来比较排列出高手列表，可根据自身需求来选择高手：",
                        "en": "Select the Master whose trades you wish to follow by comparing their performance using three different measurements: ",
                        "vi": "Chọn Bậc Thầy có giao dịch bạn muốn sao chép bằng cách so sánh hiệu suất của Họ bằng cách sử dụng ba phép đo khác nhau ",
                        "zh-Hant": "系統從三個維度來比較排列出高手列表，可根據自身需求來選擇高手：",
                        "id": "Bandingkan kinerja Master yang ingin anda ikuti dengan 3 cara pengukuran berbeda: ",
                        "es": "Seleccione los trades del Master que desee seguir comparando su rendimiento empleando tres métricas diferentes: ",
                        "pt-BR": "Selecione o Mestre cujos negócios você deseja seguir comparando seu desempenho usando três medidas diferentes: ",
                        "ar": "حدد الأستاذ الذي تريد إتباع صفقاته من خلال مقارنة أداءه باستخدام ثلاثة مقاييس مختلفة:"
                    },
                    "selectMaster_1": {
                        "zh": "收益率--高手的整体收益率。",
                        "en": "Profitability – a Master’s overall return on investment. The top-ranked Master has generated the greatest overall profit over the selected time-period.",
                        "vi": "Khả năng sinh lời - lợi tức đầu tư tổng thể của Bậc Thầy. Bậc Thầy hàng đầu đã tạo ra lợi nhuận tổng thể lớn nhất trong khoảng thời gian đã chọn.",
                        "zh-Hant": "收益率--高手的整體收益率。",
                        "id": "Profitabilitas - Master dengan total keuntungan investasi. Master dengan peringkat teratas menghasilkan pengembalian investasi terbesar dalam rentang waktu yang dipilih.",
                        "es": "Rentabilidad – Retorno sobre inversión medio del Master. El Master en el top del ranking ha generado el mayor beneficio en el período de tiempo seleccionado.",
                        "pt-BR": "Rentabilidade - um retorno global do investimento. O mestre de primeira linha gerou o maior lucro global durante o período de tempo selecionado.",
                        "ar": "الربحية - العائد الكلي على الاستثمار للأستاذ. الأستاذ الأعلى تصنيفًا يكون هو الأستاذ الذي يحقق أعلى ربح إجمالي خلال الفترة الزمنية المحددة."
                    },
                    "selectMaster_2": {
                        "zh": "最大跌幅--高手的最大浮动亏损占比。",
                        "en": "Stability – a Master’s averaged rate of return. The top-ranked Master has created the greatest profit averaged over the selected time period.",
                        "vi": "Tính ổn định - tỷ lệ hoàn vốn trung bình của Bậc Thầy. Bậc Thầy hàng đầu đã tạo ra lợi nhuận lớn nhất được tính trung bình trong khoảng thời gian đã chọn.",
                        "zh-Hant": "最大跌幅--高手的最大浮動虧損占比。",
                        "id": "Stabilitas - Master dengan tingkat keuntungan investasi rata-rata. Master dengan peringkat teratas menghasilkan pengembalian investasi terbesar secara rata-rata dalam rentang waktu yang dipilih.",
                        "es": "Estabilidad – Tasa de retorno ponderada del Master. El Master top en el ranking ha creado el mayor beneficio ponderado en el período de tiempo seleccionado.",
                        "pt-BR": "Estabilidade - uma taxa média de retorno do mestre. O mestre do topo do ranking criou o maior lucro médio durante o período de tempo selecionado.",
                        "ar": "الاستقرار - متوسط معدل العائد للأستاذ. الأستاذ الأعلى تصنيفًا يكون هو الأستاذ الذي يحقق أعلى متوسط للربح خلال الفترة الزمنية المحددة."
                    },
                    "selectMaster_3": {
                        "zh": "准确率--高手平仓的订单中盈利订单的占比。",
                        "en": "Consistency - a Master’s overall ratio of winning to losing trades. The top-ranked Master has the highest ratio of winning to losing trades over the selected time-period.",
                        "vi": "Tính nhất quán - tỷ lệ thắng của tổng thể để thua các giao dịch. Bậc Thầy được xếp hạng cao nhất có tỷ lệ thắng thua cao nhất trong khoảng thời gian đã chọn.",
                        "zh-Hant": "準確率--高手平倉的訂單中盈利訂單的占比。",
                        "id": "Konsistensi - Master dengan total rasio transaksi menang dibandingkan dengan transaksi yang kalah. Master dengan peringkat teratas memiliki rasio transaksi menang yang paling tinggi dalam rentang waktu yang dipilih.",
                        "es": "Consistencia - el ratio de posiciones ganadoras frente a perdedoras del Master. El Master en el top del ranking tiene el mayor ratio de trades ganadores frente a perdedores en el período de tiempo seleccionado.",
                        "pt-BR": "Consistência - a proporção geral em ganhos e perdas nas negociações de um mestre. O mestre mais bem classificado tem a maior proporção de ganhos em negociações ao longo do período de tempo selecionado.",
                        "ar": "الثبات - المعدل الإجمالي للصفقات الرابحة والخاسرة للأستاذ. الأستاذ الأعلى تصنيفًا يكون هو الأستاذ الذي يحقق أعلى معدل للصفقات الرابحة مقابل الصفقات الخاسرة خلال الفترة الزمنية المحددة."
                    },
                    "qualifyMaster": {
                        "zh": "成为高手，你将满足以下条件：",
                        "en": "To qualify for Master status a trader must have met the following requirements: ",
                        "vi": "Để hội đủ điều kiện cho trạng thái Bậc Thầy, nhà giao dịch phải đáp ứng các yêu cầu sau: ",
                        "zh-Hant": "成為高手，妳將滿足以下條件：",
                        "id": "Untuk dapat menjadi seorang Master, anda harus memenuhi kriteria sebagai berikut: ",
                        "es": "Para calificar como Master estatus debe cumplir los siguientes requisitos: ",
                        "pt-BR": "Para se qualificar para o status de Mestre, um comerciante deve ter cumprido os seguintes requisitos: ",
                        "ar": "من أجل التأهل إلى منزلة الأستاذ، يجب على المتداول استيفاء الاشتراطات التالية:"
                    },
                    "qualifyMaster_1": {
                        "zh": "入金并连续自主交易20个工作日以上",
                        "en": "Self-trade more than 20 days",
                        "vi": "Tự giao dịch hơn 20 ngày",
                        "zh-Hant": "入金並連續自主交易20個工作日以上",
                        "id": "Telah melakukan transaksi dalam kurun waktu lebih dari 20 hari",
                        "es": "Operar directamente más de 20 días",
                        "pt-BR": "Negocie por mais de 20 dias",
                        "ar": "التداول بشكل ذاتي لمدة تزيد عن 20 يومًا"
                    },
                    "qualifyMaster_2": {
                        "zh": "近30日内的收益回报率大于20%",
                        "en": "Achieve a 30-day rate of return greater than 20%",
                        "vi": "Đạt được tỷ lệ lợi nhuận trong 30 ngày lớn hơn 20%",
                        "zh-Hant": "近30日內的收益回報率大於20%",
                        "id": "Menghasilkan keuntungan lebih dari 20% dalam kurun waktu 30 hari",
                        "es": "Obtener tasa retorno 30 días mayor del 20%",
                        "pt-BR": "Obtenha uma taxa de retorno nos últimos 30 dias maior que 20%",
                        "ar": "المحافظة على معدل عائد يزيد عن 20% لمدة 30 يومًا"
                    },
                    "qualifyMaster_3": {
                        "zh": "账户余额不得低于500美金",
                        "en": "Maintain an account balance of at least USD500",
                        "vi": "Duy trì số dư tài khoản tối thiểu là 500 USD",
                        "zh-Hant": "賬戶余額不得低於500美金",
                        "id": "Menjaga saldo akun diatas 500 $",
                        "es": "Mantener un balance de cuenta de al menos USD500",
                        "pt-BR": "Manter um saldo de conta de pelo menos US $500",
                        "ar": "المحافظة على ألا يقل رصيد الحساب عن 500 دولار أمريكي"
                    },
                    "title": {
                        "zh": "",
                        "en": "",
                        "vi": "",
                        "zh-Hant": "",
                        "id": "",
                        "es": "",
                        "pt-BR": "",
                        "ar": ""
                    },
                    "satisfiedConditions": {
                        "zh": "已满足条件",
                        "en": "Satisfied conditions",
                        "vi": "Các điều kiện thỏa mãn",
                        "zh-Hant": "已滿足條件",
                        "id": "Syarat terpenuhi",
                        "es": "Condiciones satisfechas",
                        "pt-BR": "Condições exigidas",
                        "ar": "تم استيفاء الشروط"
                    }
                },
                "oneLogin": {
                    "title": {
                        "zh": "第一次登陆",
                        "en": "First time login",
                        "vi": "Đăng nhập lần đầu",
                        "zh-Hant": "第壹次登六",
                        "id": "Masuk",
                        "es": "Primera vez Inicio de sesión ",
                        "pt-BR": "Primeiro login",
                        "ar": "تسجيل الدخول لأول مرة"
                    },
                    "tip1": {
                        "zh": "TigerWit交易账户支持开通多个子账号用于不同交易策略。",
                        "en": "TigerWit transaction account supports opening multiple sub-accounts for different transaction strategies.",
                        "vi": "Tài khoản giao dịch TigerWit hỗ trợ mở nhiều tài khoản phụ cho các chiến lược giao dịch khác nhau.",
                        "zh-Hant": "TigerWit交易賬戶支持開通多個子帳號用於不同交易策略。",
                        "id": "Anda dapat membuka akun tambahan baru di TigerWit yang dapat digunakan untuk strategi transaksi yang berbeda ",
                        "es": "La cuenta de transacciones de TigerWit permite la apertura de múltiples sub-cuentas para diferentes estrategias de trading.",
                        "pt-BR": "A conta de transações TigerWit suporta a abertura de várias subcontas para diferentes estratégias de transação.",
                        "ar": "يدعم حساب التداول الذي تقدمه TigerWit فتح حسابات فرعية متعددة لإستراتيجيات تداول مختلفة."
                    },
                    "tip2": {
                        "zh": "您当前登录账号为上榜高手，系统已自动将账号身份定义为：",
                        "en": "You currently login the master account that on the masters list, the system has automatically defined the account identity as: ",
                        "vi": "Bạn hiện đang đăng nhập tài khoản chính trên danh sách chính, hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號為上榜高手，系統已自動將帳號身份定義為：",
                        "id": " Anda saat ini masuk menggunakan Akun Master yang terdaftar, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Ha iniciado sesión actualmente cuenta independiente de la lista master; el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Você atualmente faz login na conta principal que, na lista de mestres, o sistema definiu automaticamente a identidade da conta como: ",
                        "ar": "أنت تسجل الدخول في الوقت الحالي لحساب الأستاذ المدرج في قائمة الأساتذة، وقام النظام بشكل آلي بتعريف هوية الحساب بأنها:"
                    },
                    "tip7": {
                        "zh": "您当前登录账号存在跟随关系，系统已自动将账号身份定义为：",
                        "en": "Your current login account has a follow relationship, and the system has automatically defined the account identity as: ",
                        "vi": "tài khoản đăng nhập hiện tại của chúng tôi có mối quan hệ sao chép và hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號存在跟隨關系，系統已自動將帳號身份定義為：",
                        "id": " Akun anda saat ini sedang mengikuti Master, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Su cuenta de inicio actual tiene una relación de seguimiento; y el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Sua conta de login atual tem uma relação de acompanhamento e o sistema definiu automaticamente a identidade da conta como: ",
                        "ar": "حساب تسجيل الدخول الحالي الخاص بك له علاقة متابعة، وقام النظام بشكل آلي بتعريف هوية الحساب بأنها:"
                    },
                    "masterAccount": {
                        "zh": "高手账号",
                        "en": "Master account",
                        "vi": "tài khoản bậc thầy",
                        "zh-Hant": "高手帳號",
                        "id": "Akun Master",
                        "es": "Cuenta Master",
                        "pt-BR": "Conta Princ",
                        "ar": "حساب الأستاذ"
                    },
                    "copyAccount": {
                        "zh": "跟单账号",
                        "en": "Copy account",
                        "vi": "Tài khoản Sao Chép",
                        "zh-Hant": "跟單帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta Copy",
                        "pt-BR": "Conta de cópia",
                        "ar": "نسخ حساب"
                    },
                    "accountAccess": {
                        "zh": "账号权限",
                        "en": "Account access",
                        "vi": "Truy cập tài khoản",
                        "zh-Hant": "帳號權限",
                        "id": "Akses Akun",
                        "es": "Acceso cuenta",
                        "pt-BR": "Acesso a conta",
                        "ar": "الوصول إلى الحساب"
                    },
                    "accountAccessM": {
                        "zh": "账号权限：",
                        "en": "Account access: ",
                        "vi": "Truy cập tài khoản: ",
                        "zh-Hant": "帳號權限：",
                        "id": " Akses Akun ",
                        "es": "Acceso cuenta: ",
                        "pt-BR": "Acesso a conta: ",
                        "ar": "الوصول إلى الحساب:"
                    },
                    "independentTrading": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente",
                        "pt-BR": "Negociação Independente",
                        "ar": "تداول مستقل"
                    },
                    "independentTrading0": {
                        "zh": "自主交易。",
                        "en": "Independent Trading.",
                        "vi": "Giao Dịch Độc Lập.",
                        "zh-Hant": "自主交易。",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente.",
                        "pt-BR": "Negociação Independente.",
                        "ar": "تداول مستقل."
                    },
                    "tip3": {
                        "zh": "仅用于高手跟单；",
                        "en": "Only used for following masters;",
                        "vi": "Chỉ được sử dụng để sao chép những bậc thầy",
                        "zh-Hant": "僅用於高手跟單；",
                        "id": "Hanya digunakan untuk mengikuti Master",
                        "es": "Sólo se usa para seguir Masters;",
                        "pt-BR": "Usado somente para seguir mestres;",
                        "ar": "تستخدم فقط للأساتذة التاليين؛"
                    },
                    "applyToMaster": {
                        "zh": "申请成为高手。",
                        "en": "Apply to be a master.",
                        "vi": "Đăng kí làm bậc thầy",
                        "zh-Hant": "申請成為高手。",
                        "id": "Daftar menjadi Seorang Master",
                        "es": "Solicitar convertirte en Master.",
                        "pt-BR": "Aplicar para ser um mestre.",
                        "ar": "اطلب أن تصبح أستاذًا"
                    },
                    "tip4": {
                        "zh": "该账号不再支持自主开仓操作,历史自主开仓的订单支持手动平仓。",
                        "en": "This account no longer supports the operation of independent open position, and the orders of historical independent position opening support manual position closing.",
                        "vi": "Tài khoản này không còn hỗ trợ hoạt động của vị thế mở độc lập, và các lệnh của vị thế mở độc lập hỗ trợ đóng vị thế bằng tay.",
                        "zh-Hant": "該帳號不再支持自主開倉操作,歷史自主開倉的訂單支持手動平倉。",
                        "id": " Akun ini tidak mendukung transaksi pribadi, semua posisi yang telah terbuka sebelumnya dapat ditutup secara manual . ",
                        "es": "Esta cuenta ya no admite la operación de posición abierta independiente, y las órdenes de apertura de posición independiente histórica admiten el cierre manual de posición.",
                        "pt-BR": "Esta conta não suporta mais a operação de posição aberta independente, e as ordens de abertura de posições independentes históricas suportam o fechamento manual da posição.",
                        "ar": "لم يعد الحساب يدعم عملية فتح المراكز بشكل مستقل، وتدعم أوامر الفتح التاريخي للمراكز بشكل مستقل الإغلاق اليدوي للمراكز."
                    },
                    "tip5": {
                        "zh": "为了不影响您自主开仓， 系统自动为您创建了自主交易账号。请在“我的-账户管理”查看。",
                        "en": "In order not to affect your independent open position, the system automatically created an independent trading account for you. Please check in Trade Account.",
                        "vi": "Để không ảnh hưởng đến vị thế mở độc lập của bạn, hệ thống sẽ tự động tạo một tài khoản giao dịch độc lập cho bạn. Vui lòng kiểm tra trong Tài khoản giao dịch.",
                        "zh-Hant": "為了不影響您自主開倉， 系統自動為您創建了自主交易帳號。請在“我的-賬戶管理”查看。",
                        "id": " Sistem akan membuatkan akun transaksi yang terpisah dari akun copy agar tidak menganggu akun saat ini. ",
                        "es": "Para no afectar su posición abierta independiente, el sistema le ha creado automáticamente una cuenta de trading independiente. Por favor, compruebe en Cuenta Trade.",
                        "pt-BR": "Para não afetar sua posição aberta independente, o sistema criou automaticamente uma conta de negociação independente para você. Por favor, verifique em conta comercial.",
                        "ar": "من أجل عدم التأثير على المركز المفتوح المستقل الخاص بك، قام النظام بشكل آلي بإنشاء حساب تداول مستقل لك. يرجى الدخول إلى حساب التداول"
                    },
                    "tip6": {
                        "zh": "您当前登录账号为自主开仓，系统已自动将账号身份定义为：",
                        "en": "You currently login the independent account that on the masters list, the system has automatically defined the account identity as: ",
                        "vi": "Bạn hiện đang đăng nhập vào tài khoản độc lập có trong danh sách chính, hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號為自主開倉，系統已自動將帳號身份定義為：",
                        "id": " Anda saat ini masuk menggunakan Akun Transaksi yang mengikuti Master, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Ha iniciado sesión actualmente cuenta independiente de la lista master, el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Você atualmente faz o login na conta independente que na lista de mestres, o sistema definiu automaticamente a identidade da conta como: ",
                        "ar": "أنت تسجل الدخول في الوقت الحالي للحساب المستقل المدرج في قائمة الأساتذة، وقام النظام بشكل آلي بتعريف هوية الحساب بأنها:"
                    }
                },
                "symbolPage": {
                    "symbol": {
                        "zh": "自选",
                        "en": "Symbol",
                        "vi": "Biểu tượng",
                        "zh-Hant": "自選",
                        "id": "Simbol",
                        "es": "Símbolo",
                        "pt-BR": "Símbolo",
                        "ar": "الرمز"
                    },
                    "products": {
                        "zh": "交易品种",
                        "en": "Products",
                        "vi": "Sản phẩm",
                        "zh-Hant": "交易品種",
                        "id": "Produk",
                        "es": "Productos",
                        "pt-BR": "Produtos",
                        "ar": "المنتجات"
                    },
                    "productsM": {
                        "zh": "交易品种：",
                        "en": "Products: ",
                        "vi": "Sản phẩm: ",
                        "zh-Hant": "交易品種：",
                        "id": "Produk: ",
                        "es": "Productos: ",
                        "pt-BR": "Produtos: ",
                        "ar": "المنتجات:"
                    },
                    "newPrice": {
                        "zh": "最新价格",
                        "en": "New Price",
                        "vi": "Giá mới",
                        "zh-Hant": "最新價格",
                        "id": "Harga Baru",
                        "es": "Nuevo precio",
                        "pt-BR": "Novo preço",
                        "ar": "السعر الجديد"
                    },
                    "variation": {
                        "zh": "涨跌幅",
                        "en": "Variation",
                        "vi": "Sự thay đổi",
                        "zh-Hant": "漲跌幅",
                        "id": "Perbedaan",
                        "es": "Variación",
                        "pt-BR": "Variação",
                        "ar": "تباين"
                    },
                    "addProduct": {
                        "zh": "添加交易品种",
                        "en": "Add the Product",
                        "vi": "Thêm Sản Phẩm",
                        "zh-Hant": "添加交易品種",
                        "id": "Tambah produk",
                        "es": "Añadir el Producto",
                        "pt-BR": "Adicione o produto",
                        "ar": "أضف المنتج"
                    },
                    "forex": {
                        "zh": "外汇",
                        "en": "FX",
                        "vi": "FX",
                        "zh-Hant": "外匯",
                        "id": "FX",
                        "es": "FX",
                        "pt-BR": "Forex",
                        "ar": "الفوركس"
                    },
                    "forexJ": {
                        "zh": "外汇",
                        "en": "Forex",
                        "vi": "Forex",
                        "zh-Hant": "外匯",
                        "id": "Valas",
                        "es": "Forex",
                        "pt-BR": "Forex",
                        "ar": "الفوركس"
                    },
                    "crypto": {
                        "zh": "虚拟货币",
                        "en": "Crypto",
                        "vi": "Crypto",
                        "zh-Hant": "虛擬貨幣",
                        "id": "Kripto",
                        "es": "Crypto",
                        "pt-BR": "Crypto",
                        "ar": ""
                    },
                    "metals": {
                        "zh": "贵金属",
                        "en": "Metals",
                        "vi": "Kim Loại",
                        "zh-Hant": "貴金屬",
                        "id": "Logam",
                        "es": "Metales",
                        "pt-BR": "Metais",
                        "ar": "المعادن"
                    },
                    "oilEngrgy": {
                        "zh": "能源",
                        "en": "Commodities",
                        "vi": "Hàng hóa",
                        "zh-Hant": "能源",
                        "id": "Komoditas",
                        "es": "Commodities",
                        "pt-BR": "Commodities",
                        "ar": "النفط والطاقة"
                    },
                    "indices": {
                        "zh": "差价合约",
                        "en": "Indices",
                        "vi": "Chỉ số",
                        "zh-Hant": "差價合約",
                        "id": "Indeks",
                        "es": "Indices",
                        "pt-BR": "índices",
                        "ar": "المؤشرات"
                    },
                    "fastTrade": {
                        "zh": "简单",
                        "en": "Fast Trade",
                        "vi": "Giao Dịch Nhanh",
                        "zh-Hant": "間單",
                        "id": "Transaksi Cepat",
                        "es": "Trade Rápido",
                        "pt-BR": "Negociação rápida",
                        "ar": "تداول سريع"
                    },
                    "tip1": {
                        "zh": "您确定要买入xx手吗？",
                        "en": "Are you sure you want to order xx lot?",
                        "vi": "Bạn có chắc muốn đặt xx lot?",
                        "zh-Hant": "您確定要買入xx手嗎？",
                        "id": "Apakah anda yakin untuk mengambil xx lot?",
                        "es": "¿Seguro quiere vender xx lotes? ",
                        "pt-BR": "Tem certeza de que quer pedir lote xx?",
                        "ar": "هل أنت متأكد من أنك تريد طلب ×× عقد؟"
                    },
                    "successful": {
                        "zh": "开仓成功",
                        "en": "Successful",
                        "vi": "Thành Công",
                        "zh-Hant": "開倉成功",
                        "id": "Sukses",
                        "es": "Éxito",
                        "pt-BR": "Feito com sucesso",
                        "ar": "ناجح"
                    },
                    "viewRecord": {
                        "zh": "查看交易记录",
                        "en": "View the Record",
                        "vi": "Xem Hồ Sơ",
                        "zh-Hant": "查看交易記錄",
                        "id": "Lihat Riwayat",
                        "es": "Ver el Registro",
                        "pt-BR": "Ver registros",
                        "ar": "عرض السجل"
                    },
                    "advanced": {
                        "zh": "高级",
                        "en": "Advanced",
                        "vi": "Nâng cao",
                        "zh-Hant": "高級",
                        "id": "Mahir",
                        "es": "Avanzado",
                        "pt-BR": "Avançado",
                        "ar": "متقدم"
                    },
                    "type": {
                        "zh": "交易方式",
                        "en": "Type",
                        "vi": "Loại",
                        "zh-Hant": "交易方式",
                        "id": "Tipe",
                        "es": "Tipo",
                        "pt-BR": "Tipo",
                        "ar": "النوع"
                    },
                    "marketExecution": {
                        "zh": "市价交易",
                        "en": "Market Execution",
                        "vi": "Khớp Lệnh Thị Trường",
                        "zh-Hant": "市價交易",
                        "id": "Transaksi Pasar",
                        "es": "Ejecución Mercado",
                        "pt-BR": "Execução de Mercado",
                        "ar": "تنفيذ السوق"
                    },
                    "pendingOrder": {
                        "zh": "挂单交易",
                        "en": "Pending Order",
                        "vi": "Lệnh Bảo Lưu",
                        "zh-Hant": "掛單交易",
                        "id": "Posisi Pending",
                        "es": "Orden Pendiente",
                        "pt-BR": "Pedido pendente",
                        "ar": "أمر معلق"
                    },
                    "total": {
                        "zh": "合计",
                        "en": "Total",
                        "vi": "Tổng cộng",
                        "zh-Hant": "合計",
                        "id": "Total",
                        "es": "Total",
                        "pt-BR": "Total",
                        "ar": "الإجمالي"
                    },
                    "selectMonth": {
                        "zh": "选择月份",
                        "en": "Select the Month",
                        "vi": "Chọn Tháng",
                        "zh-Hant": "選擇月份",
                        "id": "Pilih Bulan",
                        "es": "Seleccione el Mes",
                        "pt-BR": "Selecionar o mês",
                        "ar": "حدد الشهر"
                    },
                    "deadline": {
                        "zh": "截止时间",
                        "en": "Deadline",
                        "vi": "Hạn Chót",
                        "zh-Hant": "截止時間",
                        "id": "Batas Waktu",
                        "es": "Fecha límite",
                        "pt-BR": "Prazo de auditoria: Aproximadamente um dia útil",
                        "ar": "الموعد النهائي"
                    },
                    "tradeTimes": {
                        "zh": "交易时间",
                        "en": "Trade times",
                        "vi": "Số lần giao dịch",
                        "zh-Hant": "交易時間",
                        "id": "Jam transaksi",
                        "es": "Horarios Trade",
                        "pt-BR": "Trade time",
                        "ar": "أوقات التداول"
                    },
                    "quotesTimes": {
                        "zh": "报价时间",
                        "en": "Quotes Times",
                        "vi": "Số lần báo giá",
                        "zh-Hant": "報價時間",
                        "id": "Waktu penawaran",
                        "es": "Horario Cotizaciones",
                        "pt-BR": "Quotes times",
                        "ar": "أوقات حساب السعر"
                    },
                    "minimalSpread": {
                        "zh": "最小点差（近14天统计数据）",
                        "en": "Minimal Spread (Statistics for the last 14 days) ",
                        "vi": "Spread tối thiểu (Thống kê trong 14 ngày qua) ",
                        "zh-Hant": "最小點差（近14天統計數據）",
                        "id": " Minimal Spread （Statistik selama 14 hari terakhir）",
                        "es": "Minimal Spread Mínimos (Estadísticas para últimos 14 días) ",
                        "pt-BR": "Spread Mínimo (Estatísticas dos últimos 14 dias) ",
                        "ar": "الحد الأدنى لفرق السعر (إحصائيات أخر 14 يومًا)"
                    },
                    "stopsLevel": {
                        "zh": "最低止损点数",
                        "en": "Stops Level",
                        "vi": "Cấp độ Dừng",
                        "zh-Hant": "最低止損點數",
                        "id": "Harga tutup",
                        "es": "Niveles Stops",
                        "pt-BR": "Stop level",
                        "ar": "مستوى الإيقاف"
                    },
                    "contractSize": {
                        "zh": "合约数量",
                        "en": "Contract Size",
                        "vi": "Kích Thước Hợp Đồng",
                        "zh-Hant": "合約數量",
                        "id": "Jumlah lot",
                        "es": "Tamaño Contrato",
                        "pt-BR": "Tamanho do contrato",
                        "ar": "حجم العقد"
                    },
                    "minimalVolume": {
                        "zh": "最小交易量",
                        "en": "Minimal Volume",
                        "vi": "Khối Lượng Tối Thiểu",
                        "zh-Hant": "最小交易量",
                        "id": "Minimal lot",
                        "es": "Volumen Mínimo",
                        "pt-BR": "Volume mínimo",
                        "ar": "الحد الأدنى للحجم"
                    },
                    "maximalVolume": {
                        "zh": "最大交易量",
                        "en": "Maximal Volume",
                        "vi": "Khối Lượng Tối Đa",
                        "zh-Hant": "最大交易量",
                        "id": "Maksimal Lot",
                        "es": "Volumen Máximo",
                        "pt-BR": "Volume máximo",
                        "ar": "الحد الأقصى للحجم"
                    },
                    "volumeStep": {
                        "zh": "交易量步长",
                        "en": "Volume Step",
                        "vi": "Khối Lượng Bước",
                        "zh-Hant": "交易量步長",
                        "id": "Jumlah transaksi",
                        "es": "Volumen Step",
                        "pt-BR": "Passo de volume",
                        "ar": "خطوة الحجم"
                    },
                    "marginPercentage": {
                        "zh": "每标准手手续费",
                        "en": "Margin Percentage",
                        "vi": "Tỷ lệ Margin",
                        "zh-Hant": "每標準手手續費",
                        "id": "Persentase Margin",
                        "es": "Porcentaje Margen",
                        "pt-BR": "Porcentagem de Margem",
                        "ar": "النسبة المئوية للهامش"
                    },
                    "swapSype": {
                        "zh": "库存费计算模式/保证金",
                        "en": "Swap Sype",
                        "vi": "Swap sype",
                        "zh-Hant": "庫存費計算模式/保證金",
                        "id": " sype Swap ",
                        "es": "Tipo Swap ",
                        "pt-BR": "Trocar Sype",
                        "ar": "نوع فائدة التمديد"
                    },
                    "swapLong": {
                        "zh": "买入库存费",
                        "en": "Swap Long",
                        "vi": "Swap Lệnh Mua",
                        "zh-Hant": "買入庫存費",
                        "id": "Swap Beli",
                        "es": "Swap Largo",
                        "pt-BR": "Inversão longa",
                        "ar": "فائدة التمديد على صفقات الشراء"
                    },
                    "swapShort": {
                        "zh": "卖出库存费",
                        "en": "Swap Short",
                        "vi": "Swap Lệnh Bán",
                        "zh-Hant": "賣出庫存費",
                        "id": "Swap Jual",
                        "es": "Swap Corto",
                        "pt-BR": "Inversão curta",
                        "ar": "فائدة التمديد على صفقات البيع"
                    },
                    "openedToday": {
                        "zh": "今日开盘",
                        "en": "Opened Today",
                        "vi": "Mở ngày hôm nay",
                        "zh-Hant": "今日開盤",
                        "id": "Terbuka Hari ini",
                        "es": "Abierto Hoy",
                        "pt-BR": "Aberto hoje",
                        "ar": "تم الفتح اليوم"
                    },
                    "closedYesterday": {
                        "zh": "昨日收盘",
                        "en": "Closed Yesterday",
                        "vi": "Đóng ngày hôm qua",
                        "zh-Hant": "昨日收盤",
                        "id": "Tertutup kemarin",
                        "es": "Cerrado Ayer",
                        "pt-BR": "Fechado ontem",
                        "ar": "مغلق أمس"
                    },
                    "fastOpen": {
                        "zh": "快速下单",
                        "en": "Fast Open",
                        "vi": "Mở Nhanh",
                        "zh-Hant": "快速下單",
                        "id": "Transaksi Cepat",
                        "es": "Abrir Rápido",
                        "pt-BR": "Abertura rápida",
                        "ar": "فتح سريع"
                    },
                    "tip2": {
                        "zh": "挂单价格不能为空",
                        "en": "Pending price can not be empty",
                        "vi": "Giá bảo lưu không được trống",
                        "zh-Hant": "掛單價格不能為空",
                        "id": "Harga Pending tidak boleh kosong",
                        "es": "El precio pendiente no puede estar vacío",
                        "pt-BR": "O valor pendente não pode estar vazio",
                        "ar": "السعر المعلق لا يجوز أن يكون فارغًا"
                    },
                    "tip3": {
                        "zh": "您的账户尚未通过认证审核，请先完善资料。",
                        "en": "Incomplete for the information, please continue to improve.",
                        "vi": "Chưa đầy đủ thông tin, vui lòng tiếp tục cải thiện.",
                        "zh-Hant": "您的賬戶尚未通過認證審核，請先完善資料。",
                        "id": " Informasi kurang lengkap, lengkapi terlebih dahulu untuk melanjutkan. ",
                        "es": "Información Incompleta, por favor, continúe.",
                        "pt-BR": "Incompleta para a informação, por favor continue melhorando.",
                        "ar": "غير كامل للمعلومات، يرجى المواصلة للتحسين."
                    },
                    "closed": {
                        "zh": "闭市中",
                        "en": "Closed",
                        "vi": "Đóng",
                        "zh-Hant": "閉市中",
                        "id": "Tertutup",
                        "es": "Cerrado",
                        "pt-BR": "Fechado",
                        "ar": "مغلق"
                    },
                    "mondayFriday": {
                        "zh": "周一至周五",
                        "en": "Monday - Friday",
                        "vi": "Thứ Hai – Thứ Sáu",
                        "zh-Hant": "周壹至周五",
                        "id": "Senin - Jumat",
                        "es": "Lunes - Viernes",
                        "pt-BR": "Segunda - Sexta feira",
                        "ar": "الاثنين - الجمعة"
                    },
                    "tip4": {
                        "zh": "只允许买0.01的倍数",
                        "en": "Only allow a multiple of 0.01",
                        "vi": "Chỉ cho phép một bội số của 0.01",
                        "zh-Hant": "只允許買0.01的倍數",
                        "id": " Hanya diizinkan untuk kelipatan 0,01 ",
                        "es": "Sólo se permite un múltiplo de 0.01",
                        "pt-BR": "Apenas é permitido um múltiplo de 0,01",
                        "ar": "يسمح فقط بمضاعف 0.01"
                    },
                    "tip5": {
                        "zh": "止损、止盈价格均无效",
                        "en": "S/L, T/P are invalid",
                        "vi": "S/L, T/P không hiệu lực",
                        "zh-Hant": "止損、止盈價格均無效",
                        "id": "S/L, T/P tidak valid",
                        "es": "S/L, T/P inválidos",
                        "pt-BR": "S/L, T/P são inválidos",
                        "ar": "إيقاف الخسارة وجني الربح غير صالحان"
                    },
                    "tip6": {
                        "zh": "止损价格无效",
                        "en": "S/L is invalid",
                        "vi": "S/L không hiệu lực",
                        "zh-Hant": "止損價格無效",
                        "id": "S/L Tidak valid",
                        "es": "S/L inválido",
                        "pt-BR": "S/L é inválido",
                        "ar": "إيقاف الخسارة غير صالح"
                    },
                    "tip7": {
                        "zh": "挂单价必须远离市价至少50点",
                        "en": "The price must be at least 50 points away from the market price",
                        "vi": "Giá phải ít nhất 50 điểm so với giá thị trường",
                        "zh-Hant": "掛單價必須遠離市價至少50點",
                        "id": " Harga harus setidaknya selisih 50 poin dari harga pasar ",
                        "es": "El precio debe estar al menos a 50 puntos del precio de mercado",
                        "pt-BR": "O preço deve estar pelo menos 50 pontos distante do preço de mercado",
                        "ar": "يجب أن يكون السعر على بعد 50 نقطة على الأقل من سعر السوق."
                    },
                    "tip8": {
                        "zh": "您确定要买入0.01手吗？",
                        "en": "Are you sure to buy 0.01 lots?",
                        "vi": "Bạn có chắc chắn mua 0.01 lot không?",
                        "zh-Hant": "您確定要買入0.01手嗎？",
                        "id": " Apakah anda yakin Beli 0,01 lot? ",
                        "es": "¿Está seguro de comprar 0.01 lotes?",
                        "pt-BR": "Você tem certeza de comprar 0,01 lotes?",
                        "ar": "هل أنت متأكد من أنك تريد شراء 0.01 عقد؟"
                    }
                },
                "settings": {
                    "title": {
                        "zh": "账户设置",
                        "en": "Settings",
                        "vi": "Cài đặt",
                        "zh-Hant": "賬戶設置",
                        "id": "Pengaturan",
                        "es": "Ajustes",
                        "pt-BR": "Configuraçōes",
                        "ar": "الإعدادات"
                    },
                    "profile": {
                        "zh": "修改资料",
                        "en": "Profile",
                        "vi": "Hồ sơ",
                        "zh-Hant": "修改資料",
                        "id": "Profil",
                        "es": "Perfil",
                        "pt-BR": "Perfil",
                        "ar": "الملف الشخصي"
                    },
                    "basicInformation": {
                        "zh": "基本资料",
                        "en": "Basic information",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "基本資料",
                        "id": "Informasi",
                        "es": "Información básica",
                        "pt-BR": "Informaçōes basicas",
                        "ar": "معلومات أساسية"
                    },
                    "location": {
                        "zh": "所在地",
                        "en": "Location",
                        "vi": "Vị trí",
                        "zh-Hant": "所在地",
                        "id": "Lokasi",
                        "es": "Ubicación",
                        "pt-BR": "Localizaçāo",
                        "ar": "الموقع"
                    },
                    "city": {
                        "zh": "省市",
                        "en": "City",
                        "vi": "Thành phố",
                        "zh-Hant": "省市",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade",
                        "ar": "المدينة"
                    },
                    "county": {
                        "zh": "区县",
                        "en": "Country",
                        "vi": "Quốc gia",
                        "zh-Hant": "區縣",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País",
                        "ar": "البلد"
                    },
                    "alreadyBoundEmail": {
                        "zh": "您已经绑定了电子邮箱 ",
                        "en": "You have already bound the email ",
                        "vi": "Bạn đã đăng kí email ",
                        "zh-Hant": "您已經邦定了電子郵箱 ",
                        "id": "Email telah terdaftar",
                        "es": "Ya ha asociado el email  ",
                        "pt-BR": "Você já ligou o email ",
                        "ar": "قد ربطت بريدًا إلكترونيًا بالفعل"
                    },
                    "oldEmailVerificationCode": {
                        "zh": "旧邮箱验证码",
                        "en": "Old email verification code",
                        "vi": "Mã xác nhận email cũ",
                        "zh-Hant": "舊郵箱驗證碼",
                        "id": "Email kode verifikasi sudah tidak berlaku",
                        "es": "Código verificación email antigüo",
                        "pt-BR": "Código de verif. e-mail antigo",
                        "ar": "رمز التحقق للبريد الإلكتروني القديم"
                    },
                    "clickGet": {
                        "zh": "获取验证码",
                        "en": "Click Get",
                        "vi": "Nhấp Nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Klik untuk mendapatkan",
                        "es": "Click Obtener",
                        "pt-BR": "Clique em Obter",
                        "ar": "انقر على الحصول"
                    },
                    "newEmail": {
                        "zh": "新邮箱",
                        "en": "New email",
                        "vi": "Email mới",
                        "zh-Hant": "新郵箱",
                        "id": "Email baru",
                        "es": "Nuevo email",
                        "pt-BR": "Novo Email",
                        "ar": "بريد إلكتروني جديد"
                    },
                    "change": {
                        "zh": "选择图片",
                        "en": "Change",
                        "vi": "Thay đổi",
                        "zh-Hant": "選擇圖片",
                        "id": "Ubah",
                        "es": "Cambiar",
                        "pt-BR": "Mudar",
                        "ar": "تغيير"
                    },
                    "general": {
                        "zh": "基本信息",
                        "en": "General",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "基本信息",
                        "id": "Informasi dasar",
                        "es": "General",
                        "pt-BR": "Geral",
                        "ar": "عام"
                    },
                    "userName": {
                        "zh": "用户名（当前）",
                        "en": "User Name(Current) ",
                        "vi": "Tên người dung (Hiện tại) ",
                        "zh-Hant": "用戶名（當前）",
                        "id": "Nama Pengguna(Saat ini) ",
                        "es": "Nombre Usuario(Actual) ",
                        "pt-BR": "Nome de usuário (atual) ",
                        "ar": "اسم المستخدم (الحالي)"
                    },
                    "userNameEn": {
                        "zh": "用户名（英文）",
                        "en": "User Name(English) ",
                        "vi": "Tên người dung (Tiếng Anh) ",
                        "zh-Hant": "用戶名（英文）",
                        "id": "Nama Pengguna(English) ",
                        "es": "Nombre Usuario(Inglés) ",
                        "pt-BR": "Nome de usuário (inglês) ",
                        "ar": "اسم المستخدم (اللغة الإنجليزية)"
                    },
                    "userNameM": {
                        "zh": "用户名（当前）：",
                        "en": "User Name(Current): ",
                        "vi": "Tên người dung (Hiện tại): ",
                        "zh-Hant": "用戶名（當前）：",
                        "id": "Nama Pengguna(Saat ini): ",
                        "es": "Nombre Usuario(Actual): ",
                        "pt-BR": "Nome de usuário (atual): ",
                        "ar": "اسم المستخدم (الحالي):"
                    },
                    "userNameEnM": {
                        "zh": "用户名（英文）：",
                        "en": "User Name(English): ",
                        "vi": "Tên người dung (Tiếng Anh): ",
                        "zh-Hant": "用戶名（英文）：",
                        "id": "Nama Pengguna(English): ",
                        "es": "Nombre Usuario(Inglés): ",
                        "pt-BR": "Nome de Usuário (Inglês): ",
                        "ar": "اسم المستخدم (اللغة الإنجليزية):"
                    },
                    "modify": {
                        "zh": "修改",
                        "en": "Modify",
                        "vi": "Sửa đổi",
                        "zh-Hant": "修改",
                        "id": "Ubah",
                        "es": "Modificar",
                        "pt-BR": "Modificar",
                        "ar": "تعديل"
                    },
                    "country": {
                        "zh": "国 家",
                        "en": "Country",
                        "vi": "Quốc Gia",
                        "zh-Hant": "國 家",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País",
                        "ar": "البلد"
                    },
                    "countryM": {
                        "zh": "国 家：",
                        "en": "Country: ",
                        "vi": "Quốc gia: ",
                        "zh-Hant": "國 家：",
                        "id": "Negara: ",
                        "es": "País: ",
                        "pt-BR": "País: ",
                        "ar": "البلد:"
                    },
                    "setPhotos": {
                        "zh": "修改头像",
                        "en": "Set Photos",
                        "vi": "Đặt hình ảnh",
                        "zh-Hant": "修改頭像",
                        "id": "Atur Foto",
                        "es": "Establecer fotos",
                        "pt-BR": "Definir fotos",
                        "ar": "إعداد الصور"
                    },
                    "choosePhoto": {
                        "zh": "选择头像",
                        "en": "Choose a Photo",
                        "vi": "Chọn hình ảnh",
                        "zh-Hant": "選擇頭像",
                        "id": "Pilih Foto",
                        "es": "Elige una Foto",
                        "pt-BR": "Escolha uma foto",
                        "ar": "اختر صورة"
                    },
                    "onlySupport": {
                        "zh": "只支持 jpg、png 格式且大小在 2MB 以内",
                        "en": "Only support JPG, PNG format and size within 2MB",
                        "vi": "Chỉ hỗ trợ định dạng và kích thước JPG, PNG trong phạm vi 2MB",
                        "zh-Hant": "只支持 jpg、png 格式且大小在 2MB 以內",
                        "id": "Hanya mendukung format JPG dan PNG, maksimal 2MB",
                        "es": "Sólo admite formato JPG, PNG y tamaño máximo 2MB",
                        "pt-BR": "Apenas suporte JPG, formato PNG e tamanho dentro de 2MB",
                        "ar": "نحن ندعم فقط الصور بصيغتي JPG و PNG والتي لا يتجاوز حجمها 2 م.ب"
                    },
                    "security": {
                        "zh": "账户安全",
                        "en": "Security",
                        "vi": "Bảo mật",
                        "zh-Hant": "賬戶安全",
                        "id": "Keamanan",
                        "es": "Seguridad",
                        "pt-BR": "Segurança",
                        "ar": "الأمن"
                    },
                    "passwordManagement": {
                        "zh": "密码管理",
                        "en": "Password Management",
                        "vi": "Quản lý Mật khẩu",
                        "zh-Hant": "密碼管理",
                        "id": "Pengaturan Kata Sandi",
                        "es": "Gestión Contraseñas",
                        "pt-BR": "Gerenciar senha",
                        "ar": "إدارة كلمة المرور"
                    },
                    "oldPassword": {
                        "zh": "原密码",
                        "en": "Old password",
                        "vi": "Mật khẩu cũ",
                        "zh-Hant": "原密碼",
                        "id": "Kata sandi Lama",
                        "es": "Contraseña anterior",
                        "pt-BR": "Senha antiga",
                        "ar": "كلمة المرور القديمة"
                    },
                    "newPassword": {
                        "zh": "新密码",
                        "en": "New password",
                        "vi": "Mật khẩu mới",
                        "zh-Hant": "新密碼",
                        "id": "Kata sandi Baru",
                        "es": "Nueva contraseña",
                        "pt-BR": "Nova senha",
                        "ar": "كلمة المرور الجديدة"
                    },
                    "confirmNewPassword": {
                        "zh": "确认新密码",
                        "en": "Confirm new password",
                        "vi": "Xác nhận lại mật khẩu mới",
                        "zh-Hant": "確認新密碼",
                        "id": "Konfirmasi Kata sandi Baru",
                        "es": "Confirmar nueva contraseña",
                        "pt-BR": "Confirme nova senha",
                        "ar": "قم بالتأكيد على كلمة المرور الجديدة"
                    },
                    "phoneNumberSettings": {
                        "zh": "手机号码设置",
                        "en": "Phone number settings",
                        "vi": "Cài đặt số điện thoại",
                        "zh-Hant": "手機號碼設置",
                        "id": "Pengaturan nomor telepon",
                        "es": "Ajustes número de teléfono",
                        "pt-BR": "Obtenha o código de verificação",
                        "ar": "إعدادات رقم الهاتف"
                    },
                    "boundPhoneXXX": {
                        "zh": "您已经绑定了手机号",
                        "en": "You have now bound phone number ",
                        "vi": "Bây giờ bạn đăng kí số điện thoại ",
                        "zh-Hant": "您已經邦定了手機號",
                        "id": "Anda telah mendaftarkan nomor telepon ",
                        "es": "Ha asignado ahora un número de teléfono ",
                        "pt-BR": "Configurações da caixa de correio ",
                        "ar": "قد ربطت الآن رقم الهاتف"
                    },
                    "newPhoneNumber": {
                        "zh": "新手机号码",
                        "en": "New phone number",
                        "vi": "Số điện thoại mới",
                        "zh-Hant": "新手機號碼",
                        "id": "Nomor telepon baru",
                        "es": "Nuevo número de teléfono",
                        "pt-BR": "Aviso de carteira ativa",
                        "ar": "رقم الهاتف الجديد"
                    },
                    "verificationCode": {
                        "zh": "验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código de verificación",
                        "pt-BR": "Código de verificação",
                        "ar": "رمز التحقق"
                    },
                    "getVerificationCode": {
                        "zh": "获取验证码",
                        "en": "Get verification code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Dapatkan Kode Verifikasi",
                        "es": "Cód. Verif. email antiguo",
                        "pt-BR": "Obtenha o código de verificação",
                        "ar": "الحصول على رمز التحقق"
                    },
                    "mailboxSettings": {
                        "zh": "电子邮箱设置",
                        "en": "Mailbox settings",
                        "vi": "Cài đặt hộp thư",
                        "zh-Hant": "電子郵箱設置",
                        "id": "Pengaturan Kotak Surat",
                        "es": "Configuración mailbox",
                        "pt-BR": "Configurações da caixa de correio",
                        "ar": "إعدادات صندوق البريد"
                    },
                    "notificationActivateWallet": {
                        "zh": "激活钱包提示",
                        "en": "Notice of active wallet",
                        "vi": "Thông báo về kích hoạt ví",
                        "zh-Hant": "激活錢包提示",
                        "id": " Pemberitahuan aktivasi dompet",
                        "es": "Aviso wallet activada",
                        "pt-BR": "Aviso de carteira ativa",
                        "ar": "إخطار بشأن محفظة نشطة"
                    },
                    "notificationActivateWalletCon": {
                        "zh": "钱包不支持单独激活，交易类账户开通成功后，钱包将自动激活。",
                        "en": "Wallet does not support individual activation，after successful opening of transaction account, wallet will be automatically activated.",
                        "vi": "Wallet không hỗ trợ kích hoạt riêng lẻ ， sau khi mở tài khoản giao dịch thành công, ví tiền sẽ được kích hoạt tự động.",
                        "zh-Hant": "錢包不支持單獨激活，交易類賬戶開通成功後，錢包將自動激活。",
                        "id": " Dompet akan diaktivasi secara otomatis setelah berhasil membuka akun transaksi ",
                        "es": "Wallet no permite activación individual，después de abrir una cuenta de operaciones, su Wallet se activará automáticamente.",
                        "pt-BR": "Carteira não suporta a ativação individual, após a abertura bem-sucedida da conta de transação, a carteira será ativada automaticamente.",
                        "ar": "المحفظة لا تدعم التنشيط الفردي، سيتم تنشيط المحفظة بشكل آلي بعد فتح حساب التداول بنجاح."
                    },
                    "openLiveAccount": {
                        "zh": "开通真实账户",
                        "en": "Live Account",
                        "vi": "Tài khoản Thực",
                        "zh-Hant": "開通真實賬戶",
                        "id": "Akun Live",
                        "es": "Cuenta Real",
                        "pt-BR": "conta ativa",
                        "ar": "حساب حقيقي"
                    },
                    "openLiveAccountTip1": {
                        "zh": "开户即得$200交易红包，入金可获$800红包！",
                        "en": "Open a live account and receive a $200 coupon, deposit and receive $800 coupon.",
                        "vi": "Mở tài khoản thực và nhận phiếu thưởng $ 200, gửi tiền và nhận phiếu thưởng $ 800.",
                        "zh-Hant": "開戶即得$200交易紅包，入金可獲$800紅包！",
                        "id": " Buka akun live sekarang juga dan dapatkan kupon senilai 200$ dan 800$ ",
                        "es": "Abra una cuenta real y reciba un cupón de $200, deposite y reciba un cupón de $800.",
                        "pt-BR": "Abra uma conta ativa e receba um cupom de $ 200, deposite e receba cupom de $ 800.",
                        "ar": "افتح حساب حقيقي واحصل على قسيمة بمقدار 200 دولار، وقم بالإيداع واحصل على قسيمة بمقدار 800 دولار."
                    },
                    "openLiveAccountTip2": {
                        "zh": "同时享受更多交易体验：",
                        "en": "You will enjoy more transaction experiences at the same time: ",
                        "vi": "Bạn sẽ tận hưởng nhiều trải nghiệm giao dịch hơn cùng một lúc: ",
                        "zh-Hant": "同時享受更多交易體驗：",
                        "id": "Anda akan merasakan pengalaman trading yang berbeda: ",
                        "es": "Disfrutará de más transacciones y experiencias al mismo tiempo: ",
                        "pt-BR": "Você desfrutará de mais experiências de transação ao mesmo tempo: ",
                        "ar": "سوف تستمتع بالمزيد من خبرات التداول في نفس الوقت:"
                    },
                    "openLiveAccountTip3": {
                        "zh": "自由交易，享受灵活杠杆",
                        "en": "Freely trading, flexible level.",
                        "vi": "Tự do giao dịch, mức linh hoạt.",
                        "zh-Hant": "自由交易，享受靈活杠桿",
                        "id": " Bebas bertansaksi di tingkat yang diinginkan ",
                        "es": "Trading libre, niveles flexibles.",
                        "pt-BR": "Negociação livre, nível flexível.",
                        "ar": "التداول بحرية، مستوى مرن."
                    },
                    "openLiveAccountTip4": {
                        "zh": "复制高手获得收益",
                        "en": "Get profit by following masters.",
                        "vi": "Nhận lợi nhuận bằng cách sao chép các bậc thầy.",
                        "zh-Hant": "復制高手獲得收益",
                        "id": " Dapatkan keuntungan hanya dengan mengikuti Master. ",
                        "es": "Obtenga beneficios siguiendo Masters.",
                        "pt-BR": "Obter lucro, seguindo mestres.",
                        "ar": "اربح من خلال متابعة الأساتذة"
                    },
                    "openLiveAccountTip5": {
                        "zh": "申请成为高手获得盈利分成",
                        "en": "Apply for a master and obtain commissions.",
                        "vi": "Áp dụng cho một bậc thầy và nhận hoa hồng.",
                        "zh-Hant": "申請成為高手獲得盈利分成",
                        "id": " Jadilah seorang Master dan Dapatkan komisi ",
                        "es": "Solicite convertirse en Master y obtenga comisiones.",
                        "pt-BR": "Candidate-se a um mestre e obtenha comissões.",
                        "ar": "اطلب أن تصبح أستاذًا واحصل على عمولات"
                    },
                    "freeOpening": {
                        "zh": "免费开通",
                        "en": "Free Opening",
                        "vi": "Mở tự do",
                        "zh-Hant": "免費開通",
                        "id": "Daftar Gratis",
                        "es": "Apertura Gratis",
                        "pt-BR": "Abertura Gratuita",
                        "ar": "فتح مجاني"
                    },
                    "openExperienceAccount": {
                        "zh": "开通体验金账户",
                        "en": "Open an demo account",
                        "vi": "Mở tài khoản trải nghiệm",
                        "zh-Hant": "開通體驗金賬戶",
                        "id": "Buka Akun Pengalaman",
                        "es": "Abrir una cuenta Práctica",
                        "pt-BR": "Abra uma conta para teste",
                        "ar": "فتح حساب تجريبي"
                    },
                    "openExperienceAccountTip1": {
                        "zh": "开户即送$10000交易体验金。",
                        "en": "Open the demo account and receive a $10000 virtual balance.",
                        "vi": "Mở tài khoản trải nghiệm và nhận số dư ảo 10.000 đô la.",
                        "zh-Hant": "開戶即送$10000交易體驗金。",
                        "id": " Buka Akun pengalaman dan dapatkan dana virtual senilai 10,000$ ",
                        "es": "Abra la cuenta de práctica y reciba $10000 virtuales de balance",
                        "pt-BR": "Abra a conta da trilha e receba um saldo virtual de $10.000.",
                        "ar": "افتح حساب تجريبي واحصل على رصيد افتراضي مقداره 10.000 دولار."
                    },
                    "openExperienceAccountTip2": {
                        "zh": "只需一步，即刻享受",
                        "en": "Just one step, and you will enjoy: ",
                        "vi": "Chỉ một bước, và bạn sẽ hài lòng: ",
                        "zh-Hant": "只需壹步，即刻享受",
                        "id": "Hanya dengan 1 langkah saja, anda sudah bisa bertransaksi",
                        "es": "Un sólo paso, y disfrutará: ",
                        "pt-BR": "Apenas um passo e você irá desfrutar de: ",
                        "ar": "خطوة واحدة فقط، وسوف تستمتع بما يلي:"
                    },
                    "openExperienceAccountTip3": {
                        "zh": "自由交易，灵活杠杆",
                        "en": "Freely trading, flexible level.",
                        "vi": "Tự do giao dịch, mức linh hoạt.",
                        "zh-Hant": "自由交易，靈活杠桿",
                        "id": " Bebas bertansaksi di tingkat yang diinginkan ",
                        "es": "Trading libre, niveles flexibles.",
                        "pt-BR": "Negociação livre, nível flexível.",
                        "ar": "التداول بحرية، مستوى مرن."
                    },
                    "openExperienceAccountTip4": {
                        "zh": "不用承担任何风险",
                        "en": "Take no risk.",
                        "vi": "Không rủi ro.",
                        "zh-Hant": "不用承擔任何風險",
                        "id": "Tanpa resiko",
                        "es": "No tome riesgos.",
                        "pt-BR": "Não se arrisque.",
                        "ar": "التداول بدون مخاطرة."
                    },
                    "openAcount1": {
                        "zh": " ",
                        "en": "Live account",
                        "vi": "Tài khoản thực",
                        "zh-Hant": " ",
                        "id": "Akun Live",
                        "es": "Cuenta real",
                        "pt-BR": "conta ativa",
                        "ar": "حساب حقيقي"
                    },
                    "openAcount2": {
                        "zh": " ",
                        "en": "Open a Live account and trade the markets you want, the way you want them.",
                        "vi": "Mở một tài khoản Thực và giao dịch với các thị trường bạn muốn, theo cách bạn muốn.",
                        "zh-Hant": " ",
                        "id": "Buka akun Live dan bertransaksilah di pasar manapun yang anda inginkan, dengan cara yang anda sukai",
                        "es": "Abra una cuenta Real y opere los mercados que quiere, del modo que desea.",
                        "pt-BR": "Abra uma conta do Live e negocie os mercados desejados, da maneira que você quiser.",
                        "ar": "افتح حساب حقيقي واستمتع بالتداول في الأسواق التي تريدها بالطريقة التي تريدها."
                    },
                    "openAcount3": {
                        "zh": " ",
                        "en": "Key FX, precious metals, commodities and indices via CFD",
                        "vi": "Sản phẩm FX chính, các kim loại quý, hàng hóa và chỉ số thông qua CFD",
                        "zh-Hant": " ",
                        "id": "Valuta asing, logam mulia, komoditas, dan indeks saham melalui CFD",
                        "es": "FX, metales preciosos, commodities e índices vía CFDs",
                        "pt-BR": "Key FX, metais preciosos, commodities e índices via CFD",
                        "ar": "أهم أصول الفوركس والمعادن النفيسة والسلع والمؤشرات من خلال عقود الفروقات"
                    },
                    "openAcount4": {
                        "zh": " ",
                        "en": "Trade on a smarter, personalised, highly intuitive app",
                        "vi": "Giao dịch trên ứng dụng thông minh, được cá nhân hóa, trực quan hơn",
                        "zh-Hant": " ",
                        "id": "Bertransaksilah di aplikasi yang lebih canggih, pintar dan intuitif",
                        "es": "Opere en una smart app personalizable e intuitiva",
                        "pt-BR": "Negocie em um aplicativo mais inteligente, personalizado e altamente intuitivo",
                        "ar": "تداول على تطبيق يتميز بالذكاء وسهولة الاستخدام والطابع الشخصي"
                    },
                    "openAcount5": {
                        "zh": " ",
                        "en": "Copy-trade by following a Master",
                        "vi": "Sao chép giao dịch bằng cách sao chép một Bậc Thầy",
                        "zh-Hant": " ",
                        "id": "Copy-Trade dengan mengikuti seorang Master",
                        "es": "Copy-trade siguiendo a un Master",
                        "pt-BR": "Copie o comércio seguindo um mestre",
                        "ar": "استمتع بالتداول بنسخ الصفقات عن طريق متابعة أحد الأساتذة"
                    },
                    "openAcount6": {
                        "zh": " ",
                        "en": "Become a Master and share your followers’ profits",
                        "vi": "Trở thành một Bậc Thầy và chia sẻ lợi nhuận của người sao chép của bạn",
                        "zh-Hant": " ",
                        "id": "Jadilah seorang Master dan dapatkan bagi hasil dari keuntungan investor yang mengikuti anda",
                        "es": "Conviértase en una master y comparta los beneficios de sus seguidores",
                        "pt-BR": "Torne-se um mestre e compartilhe os lucros de seus seguidores",
                        "ar": "انضم إلى نخبة الأساتذة واحصل على نصيب من أرباح متابعيك"
                    },
                    "openAcount7": {
                        "zh": " ",
                        "en": "Trading powered by blockchain",
                        "vi": "Giao dịch được hỗ trợ bởi blockchain",
                        "zh-Hant": " ",
                        "id": "Transaksi didukung oleh blockchain",
                        "es": "Trading powered by blockchain",
                        "pt-BR": "Negociação alimentada por blockchain",
                        "ar": "التداول مدعوم من تكنولوجيا بلوك تشين."
                    },
                    "openAcount8": {
                        "zh": " ",
                        "en": "Open a Live account",
                        "vi": "Mở một tài khoản Thực",
                        "zh-Hant": " ",
                        "id": "Buka akun Live",
                        "es": "Abrir una cuenta Real",
                        "pt-BR": "Abra uma conta ativa",
                        "ar": "فتح حساب حقيقي"
                    },
                    "openAcount9": {
                        "zh": " ",
                        "en": "Demo account",
                        "vi": "Tài khoản demo",
                        "zh-Hant": " ",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta Práctica",
                        "pt-BR": "Conta teste",
                        "ar": "حساب تجريبي"
                    },
                    "openAcount10": {
                        "zh": " ",
                        "en": "Open an demo account and practice trading in a risk-free environment with USD10,000of virtual funds.",
                        "vi": "Mở một tài khoản Trải nghiệm và thực hành giao dịch trong một môi trường phi rủi ro với 10,000 USD trong quỹ ảo.",
                        "zh-Hant": " ",
                        "id": "Buka akun Pengalaman dan berlatihlah transaksi tanpa risiko menggunakan dana virtual sebesar 10,000$",
                        "es": "Abra una cuenta demo y practique en una entorno sin riesgo con USD10,000 en fondos virtuales.",
                        "pt-BR": "Abra uma conta teste e pratique a negociação em um ambiente livre de risco com US$10.000 de fundos virtuais.",
                        "ar": "افتح حساب تجريبي واستمتع بممارسة التداول في بيئة خالية من المخاطر مع رصيد افتراضي مقداره 10.000 دولار."
                    },
                    "openAcount11": {
                        "zh": " ",
                        "en": "Instant account-opening",
                        "vi": "Mở tài khoản ngay lập tức",
                        "zh-Hant": " ",
                        "id": "Pembukaan akun instan",
                        "es": "Apertura cuenta instantánea",
                        "pt-BR": "Abertura de conta instantânea",
                        "ar": "فتح الحساب فورًا"
                    },
                    "openAcount12": {
                        "zh": " ",
                        "en": "Practice risk-free trading with virtual funds",
                        "vi": "Thực hành giao dịch phi rủi ro với các quỹ ảo",
                        "zh-Hant": " ",
                        "id": "Berlatihlah transaksi tanpa risiko menggunakan dana virtual",
                        "es": "Practique trading sin riesgo con fondos virtuales.",
                        "pt-BR": "Pratique negociação sem risco com fundos virtuais",
                        "ar": "استمتع بممارسة التداول بدون مخاطر مع أموال افتراضية"
                    },
                    "openAcount13": {
                        "zh": " ",
                        "en": "Upgrade quickly and easily to a Live account",
                        "vi": "Nâng cấp lên Tài khoản Thực nhanh chóng và dễ dàng",
                        "zh-Hant": " ",
                        "id": "Tingkatkan ke akun Live dengan cepat dan gampang",
                        "es": "Upgrade rápido y fácil a cuenta Real",
                        "pt-BR": "Atualize rápida e facilmente para uma conta ativa",
                        "ar": "الترقية بسرعة وبسهولة إلى حساب حقيقي"
                    },
                    "openAcount14": {
                        "zh": " ",
                        "en": "Open an demo account",
                        "vi": "Mở một tài khoản Trải Nghiệm",
                        "zh-Hant": " ",
                        "id": "Buka akun Pengalaman",
                        "es": "Abrir una cuenta de Práctica",
                        "pt-BR": "Abra uma conta teste",
                        "ar": "فتح حساب تجريبي"
                    },
                    "openAccountNewTip1": {
                        "zh": "请选择账户类型",
                        "en": "Please select an account type",
                        "vi": "Hãy chọn kiểu tài khoản",
                        "zh-Hant": "請選擇帳戶類型",
                        "id": "Silakan pilih jenis akun",
                        "es": "Por favor, seleccione un tipo de cuenta",
                        "pt-BR": "Seleccione por favor um Tipo de conta",
                        "ar": "يرجى اختيار نوع الحساب"
                    },
                    "openAccountNewTip2": {
                        "zh": "身份信息",
                        "en": "Your Details",
                        "vi": "Thông tin của bạn",
                        "zh-Hant": "身份信息",
                        "id": "Data Anda",
                        "es": "Tus datos",
                        "pt-BR": "Seus dados",
                        "ar": "يور ديتايل"
                    },
                    "openAccountNewTip3": {
                        "zh": "请在下面填写您的个人信息以注册TigerWit真实账户。 开户将花费不到五分钟，并且您需要提供一些您的身份证明和地址证明的文档。",
                        "en": "Please enter your personal information below to register for a TigerWit Live account. Registration will take only a few minutes, and you will need some supporting documentation in order to provide your identity and address.",
                        "vi": "Vui lòng điền thông tin cá nhân của bạn để đăng kí mở tài khoản thực với TigerWit. Việc đăng kí sẽ mất khoảng vài phút, bạn cần cung cấp tài liệu để nhận diện và xác minh địa chỉ",
                        "zh-Hant": "請在下面填寫您的個人信息以註冊TigerWit真實賬戶。開戶將花費不到五分鐘，並且您需要提供一些您的身份證明和地址證明的文檔。",
                        "id": "Silahkan masukkan data diri anda untuk melakukan pendaftaran di TigerWit. Pendaftarakan akan memakan waktu kurang dari 5 menit dan mohon siapkan data identitas anda beserta bukti alamatnya",
                        "es": "Por favor, ingresa tu información personal a continuación para registrarse para cuenta real en TigerWit. Registrarte tomará menos de cinco minutos y necesitarás documentación de respaldo al proporcionarnos tu identidad y tu dirección.",
                        "pt-BR": "Por favor, digite suas informações pessoais abaixo para se registrar para uma conta real na TigerWit. O registro levará menos de cinco minutos e você precisará de documentação de apoio que nos comprove sua identidade e seu endereço.",
                        "ar": "يرجى إرسال معلوماتك الشخصية أدناه للتسجيل في حساب TigerWit حقيقي. سيستغرق التسجيل أقل من خمس دقائق وستقوم بتوثيق بعض المستندات الداعمة لإثبات هويتك وعنوانك"
                    },
                    "openAccountNewTip4": {
                        "zh": "地址细节",
                        "en": "Your Address Details",
                        "vi": "Địa chỉ của bạn",
                        "zh-Hant": "地址細節",
                        "id": "Data Alamat",
                        "es": "Datos de dirección",
                        "pt-BR": "Dados do Endereço",
                        "ar": "تفاصيل عنوانك"
                    },
                    "openAccountNewTip5": {
                        "zh": "请开始输入住址或邮编，我们的系统将自动获取您的地址",
                        "en": "Please start typing the first line of your address or post code and our system will auto-complete.",
                        "vi": "Vui lòng điền thông tin địa chỉ của bạn hoặc mã bưu điện, hệ thống của chúng tôi sẽ tự động hoàn tất đăng kí.",
                        "zh-Hant": "請開始輸入住址或郵編，我們的系統將自動獲取您的地址",
                        "id": "Silahkan masukkan alamat anda beserta kode pos dan sistem kami akan melakukan verifikasi secara otomatis",
                        "es": "Por favor, comienza a digitar la primera línea de tu dirección o código postal y nuestro sistema lo completará automáticamente",
                        "pt-BR": "Por favor, comece a digitar a primeira linha do seu endereço ou código postal e nosso sistema o completará automaticamente.",
                        "ar": "يرجى البدء في كتابة السطر الأول من عنوانك أو الرمز البريدي وسوف يكمل نظامنا الهعلومات تلقائيًا"
                    },
                    "openAccountNewTip6": {
                        "zh": "名",
                        "en": "First Name",
                        "vi": "Tên",
                        "zh-Hant": "名",
                        "id": "Nama depan",
                        "es": "Nombre",
                        "pt-BR": "Primeiro nome",
                        "ar": "الاسم "
                    },
                    "openAccountNewTip7": {
                        "zh": "姓",
                        "en": "Last Name",
                        "vi": "Tên lót  Họ",
                        "zh-Hant": "姓",
                        "id": "Nama belakang",
                        "es": "Apellido",
                        "pt-BR": "Sobrenome",
                        "ar": "الاسم الأخير"
                    },
                    "openAccountNewTip8": {
                        "zh": "第一行地址",
                        "en": "First line of address",
                        "vi": "Dòng thứ 1 của địa chỉ",
                        "zh-Hant": "第一行地址",
                        "id": "Alamat lengkap 1",
                        "es": "Primera línea de dirección",
                        "pt-BR": "Primeira linha de endereço",
                        "ar": "السطر الأول من عنوانك"
                    },
                    "openAccountNewTip9": {
                        "zh": "第二行地址（可选）",
                        "en": "Second line of address（optional）",
                        "vi": "Dòng thứ 2 của địa chỉ (tùy chọn)",
                        "zh-Hant": "第二行地址（可選）",
                        "id": "Alamat lengkap 2 (opsional)",
                        "es": "Segunda línea de dirección （opcional）",
                        "pt-BR": "Segunda linha de endereço(opcional)",
                        "ar": "السطر الثاني من عنوانك (اختياري)"
                    },
                    "openAccountNewTip10": {
                        "zh": "城镇/城市",
                        "en": "Town/City",
                        "vi": "Thị trấn/Thành phố",
                        "zh-Hant": "城鎮/城市",
                        "id": "Kota",
                        "es": "Pueblo / ciudad",
                        "pt-BR": "Cidade",
                        "ar": "القرية / المدينة"
                    },
                    "openAccountNewTip11": {
                        "zh": "您是否在你这个地址居住三个月以上？",
                        "en": "Have you lived here for more than three months?",
                        "vi": "Bạn đã sống ở đây hơn ba tháng?",
                        "zh-Hant": "您是否在你這個地址居住三個月以上？",
                        "id": "Sudahkah Anda tinggal di sini selama lebih dari tiga bulan?",
                        "es": "¿Has vivido aquí por más de tres meses?",
                        "pt-BR": "Você já morou neste endereço por mais de três meses?",
                        "ar": "هل عشت هنا لأكثر من ثلاثة أشهر؟"
                    },
                    "openAccountNewTip12": {
                        "zh": "您的国籍是否在您居住的国家以外的地方？",
                        "en": "Is your nationality anywhere other than your country of residence?",
                        "vi": "Bạn có quốc tịch nào khác ngoài quốc gia hiện đang cư trú không?",
                        "zh-Hant": "您的國籍是否在您居住的國家以外的地方？",
                        "id": "Apakah anda bertempat tinggal di daerah yang bukan asal Negara anda?",
                        "es": "Tu nacionalidad es diferente a la del país em que resides?",
                        "pt-BR": "A sua nacionalidade é diferente do seu país de residência?",
                        "ar": "هل جنسيتك في أي مكان آخر غير بلد إقامتك؟"
                    },
                    "openAccountNewTip13": {
                        "zh": "您的纳税地是否在您居住的国家以外的地方？",
                        "en": "Is your tax residency anywhere other than your country of residence?",
                        "vi": "Bạn có đóng thuế cư trú tại nơi nào khác ngoài quốc gia nơi bạn cư trú",
                        "zh-Hant": "您的納稅地是否在您居住的國家以外的地方？",
                        "id": "Apakah Pajak kewarganegaraan anda merupakan negara tempat asal anda?",
                        "es": "Es tu residencia fiscal (pagamento de tributos) en otro país diferente al que vives?",
                        "pt-BR": "É sua residência fiscal (pagamento de tributos) em outro país diferente ao que você mora?",
                        "ar": "هل إقامتك الضريبية في أي مكان آخر غير بلد إقامتك؟"
                    },
                    "openAccountNewTip14": {
                        "zh": "交易经验",
                        "en": "Trading experience and understanding",
                        "vi": "Kinh nghiệm và kiến thức giao dịch",
                        "zh-Hant": "交易經驗",
                        "id": "Pengalaman dan pemahaman trading",
                        "es": "Experiencia en trading y comprensión",
                        "pt-BR": "Experiência em trading e entendimento",
                        "ar": "خبرة وفهم التداول "
                    },
                    "openAccountNewTip15": {
                        "zh": "我们需要询问有关您的交易经验和您对我们产品的理解的一些问题。",
                        "en": "We need to ask some questions about your trading experience and your Understanding of our products.",
                        "vi": "Chúng tôi cần hỏi bạn một số câu hỏi về kinh nghiệm giao dịch và hiểu biết của bạn về các sản phẩm của chúng tôi.",
                        "zh-Hant": "我們需要詢問有關您的交易經驗和您對我們產品的理解的一些問題。",
                        "id": "Kami perlu mengetahui tentang pengalaman trading dan pemahaman produk-produk kami",
                        "es": "Necesitamos hacerte algunas preguntas sobre tu experiencia con trading y tu comprensión de nuestros productos.",
                        "pt-BR": "Precisamos fazer algumas perguntas sobre sua experiência com trading e seu entendimento de nossos produtos.",
                        "ar": "نحتاج إلى طرح بعض الأسئلة حول تجربتك في التداول وفهمك لمنتجاتنا"
                    },
                    "openAccountNewTip16": {
                        "zh": "财务细节",
                        "en": "Fund details",
                        "vi": "Chi tiết quỹ",
                        "zh-Hant": "財務細節",
                        "id": "Data Pendanaan",
                        "es": "Datos de los fondos",
                        "pt-BR": "Dados dos fundos",
                        "ar": "تفاصيل الاموال"
                    },
                    "openAccountNewTip17": {
                        "zh": "我们需要询问一些关于您财务方面的问题",
                        "en": "We need to ask some questions about your fund details of our products.",
                        "vi": "Chúng tôi cần hỏi bạn một số câu hỏi về quỹ giao dịch của bạn đối với các sản phẩm của chúng tôi",
                        "zh-Hant": "我們需要詢問一些關於您財務方面的問題",
                        "id": "Pertanyaan mengenai data pendanaan anda untuk produk-produk kami",
                        "es": "Precisamos hacerte algunas preguntas sobre detalles de los fondos aplicados en nuestros productos.",
                        "pt-BR": "Precisamos de fazer algumas perguntas sobre detalhes dos seus fundos aplicados em nossos produtos.",
                        "ar": "نحتاج إلى طرح بعض الأسئلة حول تفاصيل أموالك لمنتجاتنا."
                    },
                    "openAccountNewTip18": {
                        "zh": "上传地址证明",
                        "en": "Upload Proof of Address",
                        "vi": "Tải lên xác minh địa chỉ",
                        "zh-Hant": "上傳地址證明",
                        "id": "Unggah bukti alamat",
                        "es": "Cargar Comprobante de Dirección",
                        "pt-BR": "Carregar Comprovante de Residência",
                        "ar": "تحميل إثبات العنوان"
                    },
                    "openAccountNewTip19": {
                        "zh": "选择文档类型",
                        "en": "Select Document Type",
                        "vi": "Chọn loại tài liệu",
                        "zh-Hant": "選擇文檔類型",
                        "id": "Pilih Jenis Dokumen",
                        "es": "Seleccione el tipo de documento",
                        "pt-BR": "Selecione o tipo de documento",
                        "ar": "حدد نوع المستند"
                    },
                    "openAccountNewTip20": {
                        "zh": "电费单（水，煤气，电）",
                        "en": "Utility Bill(Water,Gas,Electriity)",
                        "vi": "Hóa đơn tiện ích (Nước, gas, điện,…)",
                        "zh-Hant": "電費單（水，煤氣，電）",
                        "id": "Tagihan Utilitas (Air, Listrik, Gas)",
                        "es": "Cuenta de servicios ( Agua, gas, electricidad)",
                        "pt-BR": "Conta de serviços (Água, gás, eletricidade)",
                        "ar": "فاتورة مرافق (مياه، غاز، كهرباء)"
                    },
                    "openAccountNewTip21": {
                        "zh": "固定电话费",
                        "en": "Landline Telephone Bill",
                        "vi": "Hóa đơn điện thoại bàn",
                        "zh-Hant": "固定電話費",
                        "id": "Tagihan telepon kabel",
                        "es": "Cuenta de teléfono fijo",
                        "pt-BR": "Conta de telefone fixo",
                        "ar": "فاتورة الهاتف الأرضي"
                    },
                    "openAccountNewTip22": {
                        "zh": "银行对账单",
                        "en": "Bank Statement",
                        "vi": "Bản sao kê ngân hàng",
                        "zh-Hant": "銀行對帳單",
                        "id": "Tagihan Bank",
                        "es": "Extracto bancario",
                        "pt-BR": "Extrato bancário",
                        "ar": "كشف حساب مصرفي"
                    },
                    "openAccountNewTip23": {
                        "zh": "差价合约是复杂的产品，存在高额亏损的风险。 只有在您通过应用风险控制（包括止损和止盈订单）来寻求最小化损失时，才应该继续使用该产品。",
                        "en": "CFDs are complex products which involve a high risk of losing your money. You should proceed only if you will seek to minimize losses by applying risk controls, including stop loss and take profit orders.",
                        "vi": "CFDs (Các chỉ số chứng khoán) là những sản phẩm phức tạp có nguy cơ mất tiền cao. Bạn chỉ nên tiến hành giao dịch nếu bạn biết cách áp dụng các biện pháp kiểm soát rủi ro, bao gồm cắt lỗ và chốt lời để giảm thiểu tổn thất.",
                        "zh-Hant": "差價合約是複雜的產品，存在高額虧損的風險。只有在您通過應用風險控制（包括止損和止盈訂單）來尋求最小化損失時，才應該繼續使用該產品。",
                        "id": "CFD adalah produk yang memiliki kompleksitas serta risiko yang tinggi dan dapat mengakibatkan anda kehilangan modal. Oleh karena itu anda selalu disarankan untuk meminimalisir kerugian anda dengan cara mengontrol risiko, termasuk penggunaan stop loss dan take profit.",
                        "es": "Los CFDs son productos complejos que conllevan un alto riesgo de perder su dinero. Debe proseguir solamente si intentará minimizar las pérdidas mediante la aplicación de control de riesgos, incluyendo operaciones del tipo stop loss o take profit.",
                        "pt-BR": "CFDs são produtos complexos que envolvem um alto risco de perder seu dinheiro. Você deve proceder somente se procurar minimizar as perdas aplicando controles de risco, incluindo stop loss e take profit orders.",
                        "ar": "العقود مقابل الفروقات هي منتجات معقدة تنطوي على مخاطر عالية لفقد أموالك. يجب عليك المتابعة فقط إذا كنت ستسعى لتقليل الخسائر إلى الحد الأدنى عن طريق تطبيق ضوابط المخاطر ، بما في ذلك وقف الخسارة وأوامر الربح."
                    },
                    "openAccountNewTip24": {
                        "zh": "如果您的承受风险能力较低，差价合约将不适合您。",
                        "en": "CFDs will not be appropriate for you if you are not prepared to accept any risk to your capital.",
                        "vi": "CFDs sẽ không phù hợp với bạn nếu bạn không sẵn sàng chấp nhận bất kỳ rủi ro nào đối với tiền vốn.",
                        "zh-Hant": "如果您的承受風險能力較低，差價合約將不適合您。",
                        "id": "CFD tidak cocok untuk anda apabila anda tidak siap menerima risiko. ",
                        "es": "Los CFDs no serán apropiados para usted si no está preparado para correr ningún riesgo con su capital.",
                        "pt-BR": "Os CFDs não serão apropriados para você se você não estiver preparado para aceitar qualquer risco ao seu capital.",
                        "ar": "لن تكون العقود مقابل الفروقات مناسبة لك إذا لم تكن مستعدًا لقبول أي مخاطرة برأسمالك"
                    },
                    "openAccountNewTip25": {
                        "zh": "你想继续吗?",
                        "en": "Would you like to continue?",
                        "vi": "Bạn có muốn tiếp tục không?",
                        "zh-Hant": "你想繼續嗎?",
                        "id": "Apakah anda yakin untuk melanjutkan?",
                        "es": "¿Le gustaría continuar?",
                        "pt-BR": "Você gostaria de continuar?",
                        "ar": "هل ترغب في الاستمرار؟"
                    },
                    "provideService": {
                        "zh": "定制您的个性化服务",
                        "en": "To provide you with personalized service",
                        "vi": "cung cấp cho bạn dịch vụ cá nhân hóa",
                        "zh-Hant": "定制您的個性化服務",
                        "id": "Untuk menyediakan kepada anda layanan sesuai pribadi anda ",
                        "es": "Brindarle un servicio personalizado",
                        "pt-BR": "Para garantir a você um serviço personalizado",
                        "ar": "حتى نقدم لك خدمة تكتسي بطابع شخصي"
                    },
                    "basicInformationg": {
                        "zh": "个人资料设置",
                        "en": "Basic information",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "個人資料設置",
                        "id": "Informasi",
                        "es": "Información básica",
                        "pt-BR": "Informaçōes basicas",
                        "ar": "معلومات أساسية"
                    },
                    "editPhotoPhone": {
                        "zh": "头像、联系方式等设置",
                        "en": "Edit photo, phone，ect",
                        "vi": "Chỉnh sửa hình ảnh, số điện thoại, v.v",
                        "zh-Hant": "頭像、聯系方式等設置",
                        "id": "Atur foto, Nomor telepon, dan lain-lain",
                        "es": "Editar foto, teléfono，etc",
                        "pt-BR": "Editar foto, telefone,   ect",
                        "ar": "تعديل الصورة، الهاتف ...الخ"
                    },
                    "photo": {
                        "zh": "头像",
                        "en": "Photo",
                        "vi": "Hình Ảnh",
                        "zh-Hant": "頭像",
                        "id": "Foto",
                        "es": "Foto",
                        "pt-BR": "Foto",
                        "ar": "صورة"
                    },
                    "iDVerification": {
                        "zh": "实名认证",
                        "en": "ID Verification",
                        "vi": "Xác nhận ID",
                        "zh-Hant": "實名認證",
                        "id": "Verifikasi ID",
                        "es": "Verificación ID",
                        "pt-BR": "ID de verificação",
                        "ar": "التحقق من الهوية"
                    },
                    "verifyPhone": {
                        "zh": "绑定手机",
                        "en": "Verify Your Phone",
                        "vi": "Xác nhận số điện thoại của bạn",
                        "zh-Hant": "邦定手機",
                        "id": "Verifikasi nomor telepon anda",
                        "es": "Verifica tu Teléfono",
                        "pt-BR": "Verifique seu telefone",
                        "ar": "قم بتأكيد هاتفك"
                    },
                    "tip1": {
                        "zh": "为了您的账户安全，请先验证身份",
                        "en": "To ensure your account is safe, please verify your identity first",
                        "vi": "Để đảm bảo tài khoản của bạn an toàn, trước tiên hãy xác minh danh tính của bạn",
                        "zh-Hant": "為了您的賬戶安全，請先驗證身份",
                        "id": " Untuk memastikan akun anda aman, silahkan verifikasi identitas anda terlebih dahulu ",
                        "es": "Para garantizar que su cuenta esté segura, por favor, primero verifique su identidad",
                        "pt-BR": "Para garantir que sua conta é segura, confirme sua identidade primeiro",
                        "ar": "من أجل ضمان أمان حسابك، يرجى تأكيد هويتك أولاً"
                    },
                    "tip2": {
                        "zh": "我们将向您的原手机号发送验证码",
                        "en": "We will send the verification code to the original phone",
                        "vi": "Chúng tôi sẽ gửi mã xác minh đến điện thoại ban đầu",
                        "zh-Hant": "我們將向您的原手機號發送驗證碼",
                        "id": " Kami akan mengiriman kode verifikasi ke ponsel anda ",
                        "es": "Le enviaremos el código de verificación al teléfono original.",
                        "pt-BR": "Vamos enviar o código de verificação para o telefone original",
                        "ar": "سنقوم بإرسال رمز التحقق إلى الهاتف الأصلي"
                    },
                    "tip3": {
                        "zh": "身份验证通过后，方可进行下一步操作",
                        "en": "Need to verify before proceeding",
                        "vi": "Cần xác minh trước khi tiếp tục",
                        "zh-Hant": "身份驗證通過後，方可進行下壹步操作",
                        "id": " Silahkan verifikasi terlebih dahulu sebelum melanjutkan ",
                        "es": "Necesidad de verificar antes de proceder.",
                        "pt-BR": "Precisa verificar antes de prosseguir",
                        "ar": "نحتاج إلى التحقق قبل الاستمرار"
                    },
                    "enterVerificationCode": {
                        "zh": "请输入验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "請輸入驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código de verificación",
                        "pt-BR": "Código de verificação",
                        "ar": "رمز التحقق"
                    },
                    "tip4": {
                        "zh": "如有其它疑问，请联系TigerWit客服",
                        "en": "If you have other questions，please contact TigerWit customer service",
                        "vi": "Nếu bạn có câu hỏi khác, vui lòng liên hệ với dịch vụ khách hàng TigerWit",
                        "zh-Hant": "如有其它疑問，請聯系TigerWit客服",
                        "id": " Jika anda memiliki pertanyaan lain, silahkan hubungi layanan pelanggan TigerWit ",
                        "es": "Para cualquier pregunta，por favor, contacte con el servicio de Atención al Cliente de TigerWit",
                        "pt-BR": "Se você tiver outras dúvidas, entre em contato com o atendimento ao cliente TigerWit",
                        "ar": "إذا كان لديك أي أسئلة أخرى تود طرحها، يرجى الاتصال بخدمة عملاء TigerWit"
                    },
                    "editEmail": {
                        "zh": "绑定邮箱",
                        "en": "Edit Email",
                        "vi": "Chỉnh sửa email",
                        "zh-Hant": "邦定郵箱",
                        "id": "Atur email",
                        "es": "Editar Email",
                        "pt-BR": "Editar email",
                        "ar": "تعديل البريد الإلكتروني"
                    },
                    "verifyEmail": {
                        "zh": "验证邮箱",
                        "en": "Verify Your Email",
                        "vi": "Xác minh email của bạn",
                        "zh-Hant": "驗證郵箱",
                        "id": "Verifikasi Email",
                        "es": "Verifique Su Email",
                        "pt-BR": "Verifique seu email",
                        "ar": "قم بتأكيد عنوان بريدك الإلكتروني"
                    },
                    "tip5": {
                        "zh": "我们将向您的原邮箱发送验证码",
                        "en": "We will send the verification code to the original email",
                        "vi": "Chúng tôi sẽ gửi mã xác minh đến email ban đầu",
                        "zh-Hant": "我們將向您的原郵箱發送驗證碼",
                        "id": " Kami akan mengirimkan kode verifikasi ke email anda ",
                        "es": "Le enviaremos el código de verificación al email original.",
                        "pt-BR": "Enviaremos o código de verificação para o email original",
                        "ar": "سنقوم بإرسال رمز التحقق إلى البريد الإلكتروني الأصلي"
                    },
                    "completeInformation": {
                        "zh": "完善信息",
                        "en": "Complete information",
                        "vi": "hoàn thành thông tin",
                        "zh-Hant": "完善信息",
                        "id": "Lengkapi informasi",
                        "es": "Información completa",
                        "pt-BR": "Informação completa",
                        "ar": "استكمل المعلومات"
                    },
                    "tip6": {
                        "zh": "如实填写个人信息是核实您真实身份，保障您资金和账号安全，隐私信息的重要依据",
                        "en": "Truthfully filling in personal information is an important basis for verifying your true identity, ensuring the security of your funds and account number and privacy information",
                        "vi": "Việc điền thông tin cá nhân một cách trung thực là cơ sở quan trọng để xác minh danh tính thực sự của bạn, đảm bảo an toàn cho số tiền và số tài khoản cũng như thông tin bảo mật của bạn",
                        "zh-Hant": "如實填寫個人信息是核實您真實身份，保障您資金和帳號安全，隱私信息的重要依據",
                        "id": " Masukkan semua data pribadi anda secara benar. Supaya dana anda, nomor akun anda dan informasi pribadi anda aman. ",
                        "es": "Completar la información personal es una base importante para verificar su verdadera identidad, garantizar la seguridad de sus fondos, el número de cuenta y la  privacidad de su información",
                        "pt-BR": "Realmente preenchendo informações pessoais é uma base importante para verificar sua verdadeira identidade, garantindo a segurança de seus fundos e número de conta e informações de privacidade",
                        "ar": "يعتبر إدخال المعلومات الشخصية بصدق وأمانة أساسًا مهمًا للتحقق من هويتك الحقيقية، مما يضمن أمان أموالك ورقم حسابك وخصوصياتك وبياناتك."
                    },
                    "setNickname": {
                        "zh": "设置昵称",
                        "en": "Set nickname",
                        "vi": "Đặt biệt danh",
                        "zh-Hant": "設置昵稱",
                        "id": "Atur Nama Pengguna",
                        "es": "Establecer nickname",
                        "pt-BR": "Definir apelido",
                        "ar": "إعداد اللقب"
                    },
                    "tip7": {
                        "zh": "请设置昵称",
                        "en": "Please set a nickname for your account to help you get on the list",
                        "vi": "Vui lòng đặt biệt hiệu cho tài khoản của bạn để giúp bạn có được danh sách",
                        "zh-Hant": "請設置昵稱",
                        "id": " Silahkan masukkan nama pengguna untuk akun anda ",
                        "es": "Por favor, establece un nickname para tu cuenta para ayudarte a entrar en la lista",
                        "pt-BR": "Por favor, defina um apelido para sua conta para ajudá-lo a entrar na lista",
                        "ar": "يرجى إنشاء لقب لحسابك للمساعدة في الظهور في القائمة"
                    },
                    "pleaseSetNickname": {
                        "zh": "请为账户设置昵称",
                        "en": "Please set nickname",
                        "vi": "Vui lòng đặt biệt hiệu",
                        "zh-Hant": "請為賬戶設置昵稱",
                        "id": " Silahkan masukkan nama pengguna ",
                        "es": "Por favor, establece el nickname",
                        "pt-BR": "Por favor, defina apelido",
                        "ar": "يرجى إنشاء لقب"
                    },
                    "nicknameHasBeenTaken": {
                        "zh": "昵称已存在",
                        "en": "The nickname has been taken",
                        "vi": "Biệt danh đã được đặt",
                        "zh-Hant": "昵稱已存在",
                        "id": "Nama pengguna tidak tersedia",
                        "es": "El nickname ya está empleado",
                        "pt-BR": "O apelido já está em uso",
                        "ar": "اللقب مستخدم بالفعل"
                    },
                    "pEnterYourMail": {
                        "zh": "请输入您的邮箱",
                        "en": "Please enter your mail address",
                        "vi": "Vui lòng nhập địa chỉ email của bạn",
                        "zh-Hant": "請輸入您的郵箱",
                        "id": "Silahkan masukkan alamat email anda",
                        "es": "Por favor, ingrese su dirección de email",
                        "pt-BR": "Por favor, digite seu endereço de e-mail",
                        "ar": "يرجى إدخال عنوانك البريدي"
                    },
                    "PEnterYourMailg": {
                        "zh": "请输入您的电子邮箱",
                        "en": "Please enter your email address",
                        "vi": "Vui lòng nhập địa chỉ email của bạn.",
                        "zh-Hant": "請輸入您的電子郵箱",
                        "id": " Silahkan masukkan alamat email anda.",
                        "es": "Por favor, introduzca su dirección de email",
                        "pt-BR": "Por favor, indique o seu endereço de e-mail",
                        "ar": "يرجى إدخال عنوان بريدك الإلكتروني"
                    },
                    "emailFormatErr": {
                        "zh": "电子邮箱格式不正确",
                        "en": "E-mail format is incorrect",
                        "vi": "Định dạng email không chính xác",
                        "zh-Hant": "電子郵箱格式不正確",
                        "id": "Format email salah",
                        "es": "Formato de email es incorrecto",
                        "pt-BR": "Formato de email está incorreto",
                        "ar": "تنسيق البريد الإلكتروني غير صحيح"
                    },
                    "emailExists": {
                        "zh": "电子邮箱已存在",
                        "en": "E-mail address already exists",
                        "vi": "Địachỉ email đã tồn tại",
                        "zh-Hant": "電子郵箱已存在",
                        "id": " email telah terdaftar",
                        "es": "Dirección de email ya existe",
                        "pt-BR": "O endereço de e-mail já existe",
                        "ar": "عنوان البريد الإلكتروني موجود بالفعل"
                    },
                    "sendVerificationToEmail": {
                        "zh": "发送验证码至邮箱",
                        "en": "Send code",
                        "vi": "Gửi mã",
                        "zh-Hant": "發送驗證碼至郵箱",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código",
                        "ar": "أرسل الرمز"
                    },
                    "enterPhoneNum": {
                        "zh": "请输入您的手机号",
                        "en": "Please enter your phone number",
                        "vi": "Vui lòng nhập số điện thoại của bạn",
                        "zh-Hant": "請輸入您的手機號",
                        "id": "Silahkan masukkan nomor telepon anda",
                        "es": "Por favor, introduzca su número de teléfono",
                        "pt-BR": "Por favor, digite seu número de telefone",
                        "ar": "يرجى إدخال رقم هاتفك"
                    },
                    "phoneNumErr": {
                        "zh": "手机号码不正确",
                        "en": "Phone number is not correct",
                        "vi": "Số điện thoại không đúng",
                        "zh-Hant": "手機號碼不正確",
                        "id": "Nomor telepon salah",
                        "es": "El número de teléfono no es correcto",
                        "pt-BR": "Número de telefone não está correto",
                        "ar": "رقم الهاتف غير صحيح"
                    },
                    "phoneNumExists": {
                        "zh": "手机号已存在",
                        "en": "Phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號已存在",
                        "id": "Nomor telepon telah terdaftar",
                        "es": "El número de teléfono ya existe",
                        "pt-BR": "O número de telefone já existe",
                        "ar": "رقم الهاتف موجود بالفعل"
                    },
                    "verifyPhoneg": {
                        "zh": "验证手机",
                        "en": "Verify phone",
                        "vi": "Xác minh số điện thoại",
                        "zh-Hant": "驗證手機",
                        "id": "Verifikasi Nomor telepon",
                        "es": "Verificar teléfono",
                        "pt-BR": "Verificar telefone",
                        "ar": "تأكيد الهاتف"
                    },
                    "sendVerificationCode": {
                        "zh": "发送验证码",
                        "en": "Send code",
                        "vi": "Gửi mã",
                        "zh-Hant": "發送驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código",
                        "ar": "أرسل الرمز"
                    },
                    "residentialAddress": {
                        "zh": "居住地址",
                        "en": "Residential address",
                        "vi": "Địa chỉ cư trú",
                        "zh-Hant": "居住地址",
                        "id": "Alamat rumah",
                        "es": "Dirección residencial",
                        "pt-BR": "Endereço residencial",
                        "ar": "عنوان محل الإقامة"
                    },
                    "selectProvincesCities": {
                        "zh": "请选择您的省/市",
                        "en": "Please select state/region",
                        "vi": "Vui lòng chọn bang/vùng",
                        "zh-Hant": "請選擇您的省/市",
                        "id": "Silahkan pilih daerah/provinsi",
                        "es": "Por favor elija estado/región",
                        "pt-BR": "Por favor insira estado/região",
                        "ar": "يرجى تحديد الولاية/المنطقة"
                    },
                    "selectCityDistrict": {
                        "zh": "请选择您的市/区",
                        "en": "Please select city",
                        "vi": "Vui lòng chọn thành phố",
                        "zh-Hant": "請選擇您的市/區",
                        "id": "Silahkan pilih kota",
                        "es": "Por favor elija ciudad",
                        "pt-BR": "Por favor insira a cidade",
                        "ar": "يرجى تحديد المدينة"
                    },
                    "enterAddress": {
                        "zh": "请输入完整居住地址",
                        "en": "Please enter full residential address",
                        "vi": "Vui lòng điền đầy đủ địa chỉ cư trú",
                        "zh-Hant": "請輸入完整居住地址",
                        "id": "Silahkan masukkan alamat lengkap anda",
                        "es": "Por favor ingrese la dirección residencial completa",
                        "pt-BR": "Por favor, digite o endereço residencial completo",
                        "ar": "يرجى إدخال العنوان الكامل لمحل الإقامة"
                    },
                    "openAccount": {
                        "zh": "请您先开通账户！",
                        "en": "Please open account first!",
                        "vi": "Vui lòng chọn mở tài khoản đầu tiên",
                        "zh-Hant": "請您先開通賬戶！",
                        "id": "Mohon buka akun terlebih dahulu",
                        "es": "Por favor, ¡Abra la cuenta primero!",
                        "pt-BR": "Por favor, abra a conta primeiro!",
                        "ar": "يرجى فتح حساب أولاً!"
                    },
                    "enterUsername": {
                        "zh": "请输入用户名",
                        "en": "Enter username",
                        "vi": "Nhập tên người dùng",
                        "zh-Hant": "請輸入用戶名",
                        "id": "Masukkan nama pengguna",
                        "es": "Introduzca su nombre de usuario",
                        "pt-BR": "Insira nome de usuário",
                        "ar": "أدخل اسم المستخدم"
                    },
                    "noBindEmail": {
                        "zh": "您未绑定任何邮箱",
                        "en": "You haven’t bind any email",
                        "vi": "Bạn chưa liên kết bất kỳ email nào",
                        "zh-Hant": "您未邦定任何郵箱",
                        "id": "Anda belum mendaftarkan email apapun",
                        "es": "No has asociado ningún email",
                        "pt-BR": "Você não liga nenhum email",
                        "ar": "لم تقم بربط أي بريد إلكتروني"
                    },
                    "enterNewEmail": {
                        "zh": "请输入新邮箱",
                        "en": "Enter new email",
                        "vi": "Nhập email mới",
                        "zh-Hant": "請輸入新郵箱",
                        "id": "Masukkan email baru",
                        "es": "Ingrese nuevo email",
                        "pt-BR": "Insira um novo email",
                        "ar": "أدخل بريدًا إلكترونيًا جديدًا"
                    },
                    "emailFormatError": {
                        "zh": "邮箱格式错误",
                        "en": "Email format error",
                        "vi": "Định dạng email lỗi",
                        "zh-Hant": "郵箱格式錯誤",
                        "id": "format email salah",
                        "es": "Error de formato email",
                        "pt-BR": "Erro no formato de e-mail",
                        "ar": "خطأ في تنسيق البريد الإلكتروني"
                    },
                    "newEmailVerCode": {
                        "zh": "新邮箱验证码",
                        "en": "New email verification code",
                        "vi": "Mã xác nhận email mới",
                        "zh-Hant": "新郵箱驗證碼",
                        "id": "Kode Verifikasi email baru",
                        "es": "Nuevo email código de verificación ",
                        "pt-BR": "Novo código de verificação de email",
                        "ar": "رمز التحقق للبريد الإلكتروني الجديد"
                    },
                    "passwordChangedSucc": {
                        "zh": "密码修改成功",
                        "en": "Password changed successfully",
                        "vi": "Thay đổi mật khẩu thành công",
                        "zh-Hant": "密碼修改成功",
                        "id": " Kata sandi berhasil diubah",
                        "es": "Contraseña cambiada con éxito",
                        "pt-BR": "Senha alterada com sucesso",
                        "ar": "تم تغيير كلمة المرور بنجاح"
                    },
                    "enterNewPassword": {
                        "zh": "请输入新密码",
                        "en": "Enter new password",
                        "vi": "Nhập mật khẩu mới",
                        "zh-Hant": "請輸入新密碼",
                        "id": "Masukkan Kata sandi baru",
                        "es": "Introduzca nueva contraseña",
                        "pt-BR": "Digite uma nova senha",
                        "ar": "أدخل كلمة المرور الجديدة"
                    },
                    "passwordsNoMatch": {
                        "zh": "两次输入密码不一致",
                        "en": "These passwords don’t match",
                        "vi": "Những mật khẩu này không khớp",
                        "zh-Hant": "兩次輸入密碼不壹致",
                        "id": " Kata sandi tidak sama",
                        "es": "Las contraseñas no coinciden",
                        "pt-BR": "Essas senhas não coincidem",
                        "ar": "كلمتي المرور غير متطابقتين"
                    },
                    "enterNewPasswordAgain": {
                        "zh": "请再次输入新密码",
                        "en": "Enter new password again",
                        "vi": "Nhập mật khẩu mới lại lần nữa",
                        "zh-Hant": "請再次輸入新密碼",
                        "id": "Masukkan Kata sandi baru lagi",
                        "es": "Ingrese la nueva contraseña nuevamente",
                        "pt-BR": "Digite a nova senha novamente",
                        "ar": "أدخل كلمة المرور الجديدة مرة أخرى"
                    },
                    "oldPasswordNo": {
                        "zh": "输入的原密码不正确",
                        "en": "The old password entered is not correct",
                        "vi": "Mật khẩu cũ bạn nhập vào không đúng",
                        "zh-Hant": "輸入的原密碼不正確",
                        "id": "Kata sandi lama anda salah",
                        "es": "La contraseña anterior ingresada no es correcta",
                        "pt-BR": "A senha antiga digitada não está correta",
                        "ar": "كلمة المرور القديمة المدخلة غير صحيحة"
                    },
                    "enterOldPassword": {
                        "zh": "请输入原密码",
                        "en": "Enter old password",
                        "vi": "Nhập mật khẩu cũ",
                        "zh-Hant": "請輸入原密碼",
                        "id": "Masukkan Kata sandi yang lama",
                        "es": "Ingrese la contraseña vieja",
                        "pt-BR": "Digite sua senha antiga",
                        "ar": "أدخل كلمة المرور القديمة"
                    },
                    "phoneNumSetSucc": {
                        "zh": "手机号码修改成功",
                        "en": "The phone number was modified successfully",
                        "vi": "Số điện thoại đã được sửa đổi thành công",
                        "zh-Hant": "手機號碼修改成功",
                        "id": "Nomor telepon berhasil diubah ",
                        "es": "El número de teléfono fue modificado con éxito",
                        "pt-BR": "O número de telefone foi modificado com sucesso",
                        "ar": "تم تعديل رقم الهاتف بنجاح"
                    },
                    "verificationCodeNo": {
                        "zh": "验证码不正确",
                        "en": "The verification code is not correct",
                        "vi": "Mã xác nhận không đúng",
                        "zh-Hant": "驗證碼不正確",
                        "id": "Kode Verifikasi salah",
                        "es": "El código de verificación no es correcto",
                        "pt-BR": "O código de verificação não está correto",
                        "ar": "رمز التحقق غير صحيح"
                    },
                    "phoneNumberExists": {
                        "zh": "手机号码已存在",
                        "en": "The phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號碼已存在",
                        "id": "Nomor telepon telah terdaftar",
                        "es": "El número de teléfono ya existe.",
                        "pt-BR": "O número de telefone já está cadastrado",
                        "ar": "رقم الهاتف موجود بالفعل"
                    },
                    "phoneNumNo": {
                        "zh": "手机号码格式不正确",
                        "en": "Incorrect format of phone number",
                        "vi": "Định dạng số điện thoại không đúng",
                        "zh-Hant": "手機號碼格式不正確",
                        "id": "Format Nomor telepon salah",
                        "es": "Formato incorrecto del número de teléfono",
                        "pt-BR": "Formato incorreto de número de telefone",
                        "ar": "تنسيق رقم الهاتف غير صحيح"
                    },
                    "enterNewPhoneNum": {
                        "zh": "请输入新手机号码",
                        "en": "Enter new phone number",
                        "vi": "Nhập vào số điện thoại mới",
                        "zh-Hant": "請輸入新手機號碼",
                        "id": "Masukkan Nomor telepon baru",
                        "es": "Introduce un nuevo número de teléfono",
                        "pt-BR": "Digite novo numero de telefone",
                        "ar": "ادخل رقم هاتف جديد"
                    },
                    "carousel": {
                        "zh": "顶部轮播图",
                        "en": "Carousel",
                        "vi": "Băng chuyền",
                        "zh-Hant": "頂部輪播圖",
                        "id": "Karosel",
                        "es": "Carrusel",
                        "pt-BR": "Carrossel",
                        "ar": "دائري"
                    },
                    "popUpWindow": {
                        "zh": "弹窗图",
                        "en": "Pop-up window",
                        "vi": "Cửa sổ bật lên",
                        "zh-Hant": "彈窗圖",
                        "id": "Tampilan Jendela ",
                        "es": "Ventana emergente",
                        "pt-BR": "Janela de pop-up",
                        "ar": "نافذة منسدلة"
                    },
                    "tip8": {
                        "zh": "对不起,目前仅支持png和jpg格式图片!",
                        "en": "Sorry, currently only support PNG and JPG format pictures!",
                        "vi": "Xin lỗi, hiện tại chỉ hỗ trợ hình ảnh định dạng PNG và JPG!",
                        "zh-Hant": "對不起,目前僅支持png和jpg格式圖片!",
                        "id": "Maaf, saat ini hanya mendukung format PNG dan JPG ",
                        "es": "Lo sentimos, actualmente sólo soporta imágenes en formato PNG y JPG!",
                        "pt-BR": "Desculpe, atualmente só suportam imagens em formato PNG e JPG!",
                        "ar": "معذرة، نحن ندعم فقط في الوقت الحالي الصور بصيغتي JPG و PNG!"
                    },
                    "tip9": {
                        "zh": "对不起，暂时不支持大于2M的文件，请压缩后再试!",
                        "en": "Sorry, we do not support files larger than 2M, please try again after compression!",
                        "vi": "Rất tiếc, chúng tôi không hỗ trợ tệp lớn hơn 2M, vui lòng thử lại sau khi nén!",
                        "zh-Hant": "對不起，暫時不支持大於2M的文件，請壓縮後再試!",
                        "id": " Maaf, hanya mendukung ukuran dibawah 2MB, silahkan coba kembali ",
                        "es": "Lo sentimos, no admitimos archivos mayores de 2M, ¡Inténtelo de nuevo tras comprimir!",
                        "pt-BR": "Desculpe, não suportamos arquivos maiores que 2M, por favor tente novamente após a compactação!",
                        "ar": "معذرة، نحن لا ندعم الملفات التي يزيد حجمها عن 2 م.ب، يرجى المحاولة مرة أخرى بعد ضغط الحجم!"
                    },
                    "failModifyUsername": {
                        "zh": "昵称修改失败",
                        "en": "Fail to modify the username",
                        "vi": "Không sửa đổi tên người dùng",
                        "zh-Hant": "昵稱修改失敗",
                        "id": " Gagal mengubah nama pengguna ",
                        "es": "Error modificar nombre de usuario",
                        "pt-BR": "Não modificar o nome de usuário",
                        "ar": "تعذر تعديل اسم المستخدم"
                    },
                    "error": {
                        "zh": "错误提示",
                        "en": "Error",
                        "vi": "Lỗi",
                        "zh-Hant": "錯誤提示",
                        "id": "Terjadi kesalahan",
                        "es": "Error",
                        "pt-BR": "Erro",
                        "ar": "خطأ"
                    },
                    "tip10": {
                        "zh": "您已是高手，不能再修改头像",
                        "en": "You already are a master, cannot modify the profile photo",
                        "vi": "Bạn đã là bậc thầy, không thể sửa đổi hình ảnh đại diện",
                        "zh-Hant": "您已是高手，不能再修改頭像",
                        "id": "Anda telah menjadi Master, tidak dapat mengubah foto profil",
                        "es": "Ya eres un master, no puedes modificar la foto de perfil.",
                        "pt-BR": "Você já é um mestre, não pode modificar a foto do perfil",
                        "ar": "أنت أستاذ بالفعل، لا يمكن تعديل صورة الملف الشخصي"
                    },
                    "tip11": {
                        "zh": "您已是高手，暂不能修改基本资料",
                        "en": "You already are a master, cannot modify the profile photo",
                        "vi": "Bạn đã là bậc thầy, không thể sửa đổi hình ảnh đại diện",
                        "zh-Hant": "您已是高手，暫不能修改基本資料",
                        "id": " Anda telah menjadi Master, tidak dapat mengubah foto profil ",
                        "es": "Ya eres un master, no puedes modificar la foto de perfil.",
                        "pt-BR": "Você já é um mestre, não pode modificar a foto do perfil",
                        "ar": "أنت أستاذ بالفعل، لا يمكن تعديل صورة الملف الشخصي"
                    },
                    "bindNewEmailSucc": {
                        "zh": "新邮箱绑定成功",
                        "en": "successful to bind the email",
                        "vi": "Hoàn thành đăng kí email",
                        "zh-Hant": "新郵箱邦定成功",
                        "id": " email Berhasil didaftarkan",
                        "es": "Éxito asociar email",
                        "pt-BR": "bem sucedido para ligar o email",
                        "ar": "تم ربط البريد الإلكتروني بنجاح"
                    },
                    "tip12": {
                        "zh": "您上传的身份证照片审核被拒绝，请重新填写相关信息，被拒原因请查看系统消息。",
                        "en": "The verification of your id photo was rejected. Please fill in the related information again and check the system reminder for the reason of rejection.",
                        "vi": "Xác minh ảnh id của bạn đã bị từ chối. Vui lòng điền lại thông tin liên quan và kiểm tra lời nhắc hệ thống vì lý do từ chối.",
                        "zh-Hant": "您上傳的身份證照片審核被拒絕，請重新填寫相關信息，被拒原因請查看系統消息。",
                        "id": " Verifikasi foto anda ditolak. Mohon periksa kembali data yang dimasukkan dan pastikan anda telah membaca alasan penolakan. ",
                        "es": "La verificación de su foto en id ha sido rechazada. Vuelva a completar la información relacionada y verifique en el sistema para conocer el motivo del rechazo",
                        "pt-BR": "A confirmação da sua foto de identificação foi rejeitada. Por favor, preencha as informações relacionadas novamente e verifique o lembrete do sistema por motivo de rejeição.",
                        "ar": "تم رفض التحقق من صورة هويتك يرجى إدخال المعلومات ذات الصلة مرة أخرى ومراجعة رسائل التذكير من النظام لمعرفة سبب الرفض."
                    },
                    "verificationSucc_1": {
                        "zh": " ",
                        "en": "The ",
                        "vi": "Đây ",
                        "zh-Hant": " ",
                        "id": "Itu",
                        "es": "La ",
                        "pt-BR": "O ",
                        "ar": "الـ"
                    },
                    "verificationSucc_2": {
                        "zh": "认证信息提交成功",
                        "en": " verification information was submitted successfully",
                        "vi": " thông tin xác nhận đã đc gửi thành công",
                        "zh-Hant": "認證信息提交成功",
                        "id": "Data verifikasi telah dikirim",
                        "es": " información verificación ha sido enviada con éxito",
                        "pt-BR": " as informações de verificação foram enviadas com sucesso",
                        "ar": "تم إرسال معلومات التحقق بنجاح"
                    },
                    "mainlandResidentIdentityCard": {
                        "zh": "大陆居民身份证",
                        "en": "Mainland resident identity card",
                        "vi": "Chứng minh nhân dân đại lục",
                        "zh-Hant": "大陸居民身份證",
                        "id": "KTP",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Cartão de identidade de residente do continente",
                        "ar": "بطاقة هوية المقيم في البر الرئيسي"
                    },
                    "gAPermit": {
                        "zh": "港澳居民来往内地通行证",
                        "en": "Mainland Travel Permit for Hong Kong and Macao Residents",
                        "vi": "Giấy phép du lịch đại lục cho cư dân Hồng Kông và Macao",
                        "zh-Hant": "港澳居民來往內地通行證",
                        "id": " Izin wisata ke Hongkong dan Macao ",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Licença de viagem para residentes de Hong Kong e Macao",
                        "ar": "تصريح سفر بر الصين الرئيسي بالنسبة للمقيمين في هونج كونج وماكاو"
                    },
                    "tPermit": {
                        "zh": "台湾居民来往大陆通行证 ",
                        "en": "Mainland travel permit for Taiwan residents",
                        "vi": "Giấy phép du lịch đại lục cho cư dân Đài Loan ",
                        "zh-Hant": "臺灣居民來往大陸通行證 ",
                        "id": " Izin wisata ke Taiwan ",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Licença de viagem para residentes de Taiwan",
                        "ar": "تصريح سفر بر الصين الرئيسي للمقيمين في تايوان"
                    },
                    "passport": {
                        "zh": "护照",
                        "en": "Passport",
                        "vi": "Hộ chiếu",
                        "zh-Hant": "護照",
                        "id": "Paspor",
                        "es": "Pasaporte",
                        "pt-BR": "Passaporte",
                        "ar": "جواز السفر"
                    },
                    "driverLicense": {
                        "zh": "驾驶证",
                        "en": "Driver license",
                        "vi": "Bằng lái xe",
                        "zh-Hant": "駕駛證",
                        "id": "SIM",
                        "es": "Licencia conducir",
                        "pt-BR": "Carteira de motorista",
                        "ar": "رخصة القيادة"
                    },
                    "iDCard": {
                        "zh": "身份证",
                        "en": "ID card",
                        "vi": "Chứng Minh Nhân Dân",
                        "zh-Hant": "身份證",
                        "id": "KTP",
                        "es": "Tarjeta ID",
                        "pt-BR": "Cartão de identificação",
                        "ar": "بطاقة الهوية"
                    },
                    "tip13": {
                        "zh": "您的年龄未满18周岁，不建议您进行外汇交易。",
                        "en": "You are under the age of 18 years old, foreign exchange transactions are not recommended.",
                        "vi": "Bạn dưới 18 tuổi, giao dịch ngoại hối không được khuyến khích.",
                        "zh-Hant": "您的年齡未滿18周歲，不建議您進行外匯交易。",
                        "id": "Anda masih berumur dibawah 18 tahun, tidak dapat melakukan transaksi valuta asing ",
                        "es": "Es menor de 18 años, las transacciones de foreign exchange no son adecuadas.",
                        "pt-BR": "Você tem menos de 18 anos, transações de câmbios internacionais não são recomendadas",
                        "ar": "عمرك أقل من 18 سنة، لا يوصى بالمشاركة في معاملات تداول العملات الأجنبية."
                    },
                    "idNumExists": {
                        "zh": "身份证号已存在",
                        "en": "ID number already exists",
                        "vi": "Số chứng minh nhân dân đã tồn tại",
                        "zh-Hant": "身份證號已存在",
                        "id": "Nomor identitas telah terdaftar",
                        "es": "Número ID ya existe",
                        "pt-BR": "Número de identificação já existe",
                        "ar": "رقم الهوية موجود بالفعل"
                    },
                    "submitSuccess": {
                        "zh": "提交成功",
                        "en": "Submit successfully",
                        "vi": "Đã gửi thành công",
                        "zh-Hant": "提交成功",
                        "id": "Berhasil terkirim",
                        "es": "Enviar éxito",
                        "pt-BR": "Enviar com sucesso",
                        "ar": "تم الإرسال بنجاح"
                    },
                    "tip14": {
                        "zh": "英文昵称为2-18位英文字母",
                        "en": "Username can only contain 2-18 letters",
                        "vi": "Tên người dung chỉ bao gồm từ 2 đến 18 chữ cái",
                        "zh-Hant": "英文昵稱為2-18位英文字母",
                        "id": "Nama pengguna hanya dapat mengandung 2-18 huruf",
                        "es": "Nombre usuario sólo puede contener 2-18 letras",
                        "pt-BR": "Nome de usuário só pode conter de 2-18 letras",
                        "ar": "يمكن أن يتكون اسم المستخدم من حرفين إلى 18 حرفًا فقط"
                    },
                    "stateRegion": {
                        "zh": "省/市",
                        "en": "State/Region",
                        "vi": "Bang/Vùng",
                        "zh-Hant": "省/市",
                        "id": "Daerah/Provinsi",
                        "es": "Estado/Región",
                        "pt-BR": "Estado/região",
                        "ar": "الولاية/المنطقة"
                    },
                    "regionCities": {
                        "zh": "市/区",
                        "en": "City",
                        "vi": "Thành phố",
                        "zh-Hant": "市/區",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade",
                        "ar": "المدينة"
                    },
                    "detailedAddress": {
                        "zh": "请输入您的详细地址（与身份证保持一致）",
                        "en": "Please enter detailed address (same as ID card)",
                        "vi": "Vui lòng nhập Địa chỉ cụ thể (Địa chỉ trên chứng minh thư)",
                        "zh-Hant": "請輸入您的詳細地址（與身份證保持一致）",
                        "id": "Silakan masuk alamat lengkap (Sesuai ID)",
                        "es": "Por favor ingrese dirección detallada(igual tarjeta ID)",
                        "pt-BR": "Por favor insira o endereço",
                        "ar": "يرجى إدخال عنوان تفصيلي (نفس العنوان المذكور في بطاقة الهوية)"
                    },
                    "zIPCode": {
                        "zh": "邮编",
                        "en": "ZIP Code",
                        "vi": "ZIP code",
                        "zh-Hant": "郵編",
                        "id": "Kode Pos",
                        "es": "Código ZIP",
                        "pt-BR": "CEP",
                        "ar": "الرمز البريدي"
                    },
                    "enterStateRegion": {
                        "zh": "请输入您的省/市",
                        "en": "Please enter state/region",
                        "vi": "Vui lòng nhập bang/vùng",
                        "zh-Hant": "請輸入您的省/市",
                        "id": "Silakan masuk daerah/provinsi",
                        "es": "Por favor ingrese estado/región",
                        "pt-BR": "Por favor insira estado/região",
                        "ar": "يرجى إدخال الولاية/المنطقة"
                    },
                    "enterRegionCities": {
                        "zh": "请输入您的市/区",
                        "en": "Please enter city",
                        "vi": "Vui lòng nhập thành phố",
                        "zh-Hant": "請輸入您的市/區",
                        "id": "Silakan masuk kota",
                        "es": "Por favor ingrese ciudad",
                        "pt-BR": "Por favor insira a cidade",
                        "ar": "يرجى إدخال المدينة"
                    },
                    "enterZIPCode": {
                        "zh": "请输入邮政编码",
                        "en": "ZIP Code",
                        "vi": "ZIP code",
                        "zh-Hant": "请输入郵政編碼",
                        "id": "Kode Pos",
                        "es": "Código ZIP",
                        "pt-BR": "CEP",
                        "ar": "الرمز البريدي"
                    },
                    "enterAddressManually": {
                        "zh": "手动输入地址",
                        "en": "Lookup doesn't work? Enter address manually",
                        "vi": "Tra cứu không thành công? Nhập địa chỉ thủ công",
                        "zh-Hant": "手動輸入地址",
                        "id": "Tidak ketemu alamatnya? masukkan alamat secara manual",
                        "es": "¿La búsqueda no funciona? Introduzca la dirección manualmente",
                        "pt-BR": "A pesquisa não funciona? Insira o endereço manualmente",
                        "ar": "البحث لا يعمل؟ أدخل العنوان يدويا"
                    },
                    "autoAddressLookup": {
                        "zh": "自动输入地址",
                        "en": "Auto address lookup",
                        "vi": "Tra cứu địa chỉ tự động",
                        "zh-Hant": "自動輸入地址",
                        "id": "Cari alamat otomatis",
                        "es": "Búsqueda automática de dirección",
                        "pt-BR": "Pesquisa de endereço automática",
                        "ar": "البحث التلقائي عن العنوان "
                    },
                    "addressOrPostalCode": {
                        "zh": "请输入第一行地址或邮编",
                        "en": "Start typing the first line of your address or postal code ",
                        "vi": "Bắt đầu nhập hàng đầu tiên địa chỉ của bạn hoặc mã bưu điện",
                        "zh-Hant": "請輸入第一行地址或郵編",
                        "id": "Masukkan alamat dan kode pos anda",
                        "es": "Comience ingresando la primera línea de su dirección o código postal",
                        "pt-BR": "Comece digitando a primeira linha do seu endereço ou código postal",
                        "ar": "ابدأ في كتابة السطر الأول من عنوانك أو الرمز البريدي"
                    },
                    "selectAddress": {
                        "zh": "请选择搜索的地址",
                        "en": "Please select the search address",
                        "vi": "Hãy chọn địa chỉ tìm kiếm",
                        "zh-Hant": "請選擇蒐索的地址",
                        "id": "Silakan pilih pencarian alamat",
                        "es": "Seleccione la dirección de búsqueda",
                        "pt-BR": "Selecione por favor o endereço de pesquisa",
                        "ar": "يرجى تحديد عنوان البحث"
                    }
                },
                "partner": {
                    "title": {
                        "zh": "代理商",
                        "en": "Agent",
                        "vi": "Đại lý",
                        "zh-Hant": "代理商",
                        "id": "Agen",
                        "es": "Agente",
                        "pt-BR": "Agente",
                        "ar": "الوكيل"
                    },
                    "title2": {
                        "zh": "代理商佣金总计",
                        "en": "Total agent commission",
                        "vi": "Ủy ban quản lý",
                        "zh-Hant": "代理商傭金總計",
                        "id": "Total komisi agensi",
                        "es": "Comisión del agente principal",
                        "pt-BR": "Comissão total DOS agentes",
                        "ar": "إجمالي عمولة الوكيل"
                    },
                    "completeInformation": {
                        "zh": "完善资料",
                        "en": "Complete information",
                        "vi": "Hoàn thành thông tin",
                        "zh-Hant": "完善資料",
                        "id": "Lengkapi informasi",
                        "es": "Complete información",
                        "pt-BR": "Informação completa",
                        "ar": "استكمل المعلومات"
                    },
                    "tradingExperience": {
                        "zh": "投资信息确认",
                        "en": "Questionnaire",
                        "vi": "Bảng câu hỏi",
                        "zh-Hant": "投資信息確認",
                        "id": "Daftar Pertanyaan",
                        "es": "Cuestionario",
                        "pt-BR": "Questionário",
                        "ar": "استطلاع رأي"
                    },
                    "iDVerification": {
                        "zh": "实名认证",
                        "en": "ID Verification",
                        "vi": "Xác nhận ID",
                        "zh-Hant": "實名認證",
                        "id": "Verifikasi ID",
                        "es": "Verificación ID",
                        "pt-BR": "ID de verificação",
                        "ar": "التحقق من الهوية"
                    },
                    "activeSucc": {
                        "zh": "成功激活",
                        "en": "Successful activation",
                        "vi": "Kích hoạt thành công",
                        "zh-Hant": "成功激活",
                        "id": "Aktivasi Sukses",
                        "es": "Activación éxito",
                        "pt-BR": "Ativação bem sucedida",
                        "ar": "تنشيط ناجح"
                    },
                    "activeAgent": {
                        "zh": "激活代理商",
                        "en": "Activate agents",
                        "vi": "Kích hoạt các đại lý",
                        "zh-Hant": "激活代理商",
                        "id": "Aktifkan Agen",
                        "es": "Activar agentes",
                        "pt-BR": "Ativar Agentes",
                        "ar": "تنشيط وكلاء"
                    },
                    "activeAgentFlow": {
                        "zh": "激活代理商产品流程",
                        "en": "Activate the agent product process",
                        "vi": "Kích hoạt quá trình sản phẩm đại lý",
                        "zh-Hant": "激活代理商產品流程",
                        "id": "Aktivasi proses produk agen",
                        "es": "Activar el proceso producto agente",
                        "pt-BR": "Ativar o processo do produto do agente",
                        "ar": "تنشيط عملية منتج الوكيل"
                    },
                    "continueCertification": {
                        "zh": "继续认证",
                        "en": "Continuing certification",
                        "vi": "Tiếp tục xác nhận",
                        "zh-Hant": "繼續認證",
                        "id": "Lanjutkan sertifikasi",
                        "es": "Continuar certificación",
                        "pt-BR": "Certificação contínua",
                        "ar": "مواصلة الاعتماد"
                    },
                    "submittedSucc": {
                        "zh": "信息提交成功",
                        "en": "Information submitted successfully",
                        "vi": "Đã gửi thông tin thành công",
                        "zh-Hant": "信息提交成功",
                        "id": "Informasi berhasil dikirimkan",
                        "es": "Información enviada éxito",
                        "pt-BR": "Informações enviadas com sucesso",
                        "ar": "تم تقديم المعلومات بنجاح"
                    },
                    "fillNameCoun": {
                        "zh": "请填写姓名和国家",
                        "en": "Please fill in your name and country",
                        "vi": "Vui lòng điền tên và quốc gia",
                        "zh-Hant": "請填寫姓名和國家",
                        "id": "Silahkan isi nama dan negara",
                        "es": "Por favor, introduzca su nombre y país",
                        "pt-BR": "Por favor, preencha seu nome e país",
                        "ar": "يرجى إدخال اسمك وبلدك"
                    },
                    "fillEmailPhone": {
                        "zh": "请填写邮箱或手机号",
                        "en": "Please fill in your email or phone number",
                        "vi": "Vui lòng điền vào email hoặc số điện thoại",
                        "zh-Hant": "請填寫郵箱或手機號",
                        "id": "Silahkan isi email dan nomor telepon",
                        "es": "Por favor, introduzca su email o número de teléfono",
                        "pt-BR": "Por favor, preencha o seu email ou número de telefone",
                        "ar": "يرجى إدخال بريدك الإلكتروني أو رقم هاتفك"
                    },
                    "unverified": {
                        "zh": "（未认证）",
                        "en": "(Unverified)",
                        "vi": "(Không xác nhận)",
                        "zh-Hant": "（未認證）",
                        "id": "(Belum verifikasi)",
                        "es": "(No verificado)",
                        "pt-BR": "(Não verificado)",
                        "ar": "(لم يتم التحقق منه)"
                    },
                    "rejected": {
                        "zh": "（已拒绝）",
                        "en": "(Rejected)",
                        "vi": "(Đã từ chối)",
                        "zh-Hant": "（已拒絕）",
                        "id": "(ditolak)",
                        "es": "(Rechazado)",
                        "pt-BR": "(Rejeitado)",
                        "ar": "(مرفوض)"
                    },
                    "pending": {
                        "zh": "（需要审核）",
                        "en": "(Pending)",
                        "vi": "(Chờ xử lý)",
                        "zh-Hant": "（需要審核）",
                        "id": "(Pending)",
                        "es": "(Pendiente)",
                        "pt-BR": "(Pendente)",
                        "ar": "(معلق)"
                    },
                    "approved": {
                        "zh": "（已通过）",
                        "en": "(Approved)",
                        "vi": "(Chấp nhận)",
                        "zh-Hant": "（已通過）",
                        "id": "(disetujui)",
                        "es": "(Aprobado)",
                        "pt-BR": "(Aprovado)",
                        "ar": "(معتمد)"
                    },
                    "unknown": {
                        "zh": "（未知状态）",
                        "en": "(Unknown)",
                        "vi": "(Không rõ)",
                        "zh-Hant": "（未知狀態）",
                        "id": "(tidak diketahui)",
                        "es": "(Desconocido)",
                        "pt-BR": "(Desconhecido)",
                        "ar": "(غير معروف)"
                    },
                    "certificateExpired": {
                        "zh": "(证件过期)",
                        "en": "(Certificate expired)",
                        "vi": "(Hết hạn giấy tờ)",
                        "zh-Hant": "（證件過期）",
                        "id": "(Dokumen kadaluwarsa)",
                        "es": "(Certificado expirado)",
                        "pt-BR": "(Certificado expirado)",
                        "ar": "(انتهت صلاحية الشهادة)"
                    }
                },
                "liverpool":{
                    "floatingRate": {
                        "zh": "浮动收益率",
                        "en": "Floating rate of return",
                        "vi": "Tỉ lệ thả nổi lợi nhuận",
                        "zh-Hant": "浮動收益率",
                        "id": "Keuntungan rata-rata",
                        "es": "Tasa de rendimiento flotante",
                        "pt-BR": "Taxa de retorno flutuante",
                        "ar": "معدل العائد العائم"
                    },
                    "checkRanking": {
                        "zh": "查看排名",
                        "en": "Read More",
                        "vi": "Đọc thêm",
                        "zh-Hant": "查看排名",
                        "id": "Lebih lanjut",
                        "es": "Lee mas",
                        "pt-BR": "Mais informação",
                        "ar": "اقرأ المزيد"
                    },
                    "enterLeague": {
                        "zh": "进入联赛",
                        "en": "Enter the league",
                        "vi": "Tham gia giải đấu",
                        "zh-Hant": "進入聯賽",
                        "id": "Masuk ke dalam Liga",
                        "es": "Entra en la liga",
                        "pt-BR": "Entre na liga",
                        "ar": "شارك في المسابقة"
                    },
                    "contestAccount": {
                        "zh": "比赛账号",
                        "en": "Contest account",
                        "vi": "Tài khoản cuộc thi",
                        "zh-Hant": "比賽賬號",
                        "id": "Akun Kontes",
                        "es": "Cuenta del concurso",
                        "pt-BR": "Conta do concurso",
                        "ar": "حساب المسابقة"
                    },
                    "": {
                        "zh": "",
                        "en": "",
                        "vi": "",
                        "zh-Hant": "",
                        "id": "",
                        "es": "",
                        "pt-BR": "",
                        "ar": ""
                    }
                },
                "noMetNeed": {
                    "zh": "未达成",
                    "en": "unfinished",
                    "vi": "không đạt",
                    "zh-Hant": "未達成",
                    "id": "belum selesai",
                    "es": "no terminado",
                    "pt-BR": "não terminado",
                    "ar": "غير مكتمل"
                },
                "date": {
                    "zh": "日期",
                    "en": "Date",
                    "vi": "Ngày",
                    "zh-Hant": "日期",
                    "id": "Tanggal",
                    "es": "Fecha",
                    "pt-BR": "Data",
                    "ar": "التاريخ"
                },
                "dateM": {
                    "zh": "日期：",
                    "en": "Date: ",
                    "vi": "Ngày: ",
                    "zh-Hant": "日期：",
                    "id": "Tanggal: ",
                    "es": "Fecha: ",
                    "pt-BR": "Data: ",
                    "ar": "التاريخ:"
                },
                "types": {
                    "zh": "类型",
                    "en": "Types",
                    "vi": "Loại",
                    "zh-Hant": "類型",
                    "id": "Tipe",
                    "es": "Tipos",
                    "pt-BR": "Tipos",
                    "ar": "الأنواع"
                },
                "amount": {
                    "zh": "金额",
                    "en": "Amount",
                    "vi": "Số tiền",
                    "zh-Hant": "金額",
                    "id": "Jumlah",
                    "es": "Importe",
                    "pt-BR": "Montante",
                    "ar": "المبلغ"
                },
                "state": {
                    "zh": "状态",
                    "en": "State",
                    "vi": "Trạng thái",
                    "zh-Hant": "狀態",
                    "id": "Status",
                    "es": "Estado",
                    "pt-BR": "Estado",
                    "ar": "الولاية"
                },
                "balance": {
                    "zh": "余额",
                    "en": "Balance",
                    "vi": "Số dư",
                    "zh-Hant": "余額",
                    "id": "Saldo",
                    "es": "Balance",
                    "pt-BR": "Balanço",
                    "ar": "الرصيد"
                },
                "delete": {
                    "zh": "删除",
                    "en": "Delete",
                    "vi": "Xóa",
                    "zh-Hant": "刪除",
                    "id": "Hapus",
                    "es": "Borrar",
                    "pt-BR": "Deletar",
                    "ar": "حذف"
                },
                "copy": {
                    "zh": "复制",
                    "en": "Follow",
                    "vi": "Sao chép",
                    "zh-Hant": "復制",
                    "id": "Ikuti",
                    "es": "Seguir",
                    "pt-BR": "Seguir",
                    "ar": "متابعة"
                },
                "copied": {
                    "en": "COPIED",
                    "zh": "已复制",
                    "vi": "Sao chép",
                    "zh-Hant": "已復制",
                    "id": "Ikuti",
                    "es": "COPIADO",
                    "pt-BR": "COPIADO",
                    "ar": "منسوخ"
                },
                "noData": {
                    "zh": "暂无数据！",
                    "en": "No data!",
                    "vi": "Không dữ liệu!",
                    "zh-Hant": "暫無數據！",
                    "id": "Data tidak tersedia!",
                    "es": "¡No data!",
                    "pt-BR": "Sem dados!",
                    "ar": "لا توجد بيانات!"
                },
                "submit": {
                    "zh": "提交",
                    "en": "SUBMIT",
                    "vi": "GỬI ĐI",
                    "zh-Hant": "提交",
                    "id": "KIRIM",
                    "es": "ENVIAR",
                    "pt-BR": "Enviar",
                    "ar": "أرسل"
                },
                "confirm": {
                    "zh": "确定",
                    "en": "Submit",
                    "vi": "Gửi đi",
                    "zh-Hant": "確定",
                    "id": "Kirim",
                    "es": "Enviar",
                    "pt-BR": "Enviar",
                    "ar": "إرسال"
                },
                "confirm2": {
                    "zh": "确定",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "確定",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar",
                    "ar": "تأكيد"
                },
                "back": {
                    "zh": "返回",
                    "en": "Back",
                    "vi": "Quay trở lại",
                    "zh-Hant": "返回",
                    "id": "Kembali",
                    "es": "Atrás",
                    "pt-BR": "Voltar",
                    "ar": "العودة"
                },
                "edit": {
                    "zh": "修改",
                    "en": "Edit",
                    "vi": "Sửa đổi",
                    "zh-Hant": "修改",
                    "id": "Edit",
                    "es": "Editar",
                    "pt-BR": "Editar",
                    "ar": "تعديل"
                },
                "add": {
                    "zh": "添加",
                    "en": "Add",
                    "vi": "Thêm vào",
                    "zh-Hant": "添加",
                    "id": "Tambah",
                    "es": "Añadir",
                    "pt-BR": "Adicionar",
                    "ar": "أضف"
                },
                "cancel": {
                    "zh": "取消",
                    "en": "Cancel",
                    "vi": "Hủy",
                    "zh-Hant": "取消",
                    "id": "Batalkan",
                    "es": "Cancelar",
                    "pt-BR": "Cancelar",
                    "ar": "إلغاء"
                },
                "continue": {
                    "zh": "继续",
                    "en": "Continue",
                    "vi": "Tiếp tục",
                    "zh-Hant": "繼續",
                    "id": "Lanjutkan",
                    "es": "Continuar",
                    "pt-BR": "Continuar",
                    "ar": "استمرار"
                },
                "finish": {
                    "zh": "完成",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "完成",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar",
                    "ar": "تأكيد"
                },
                "search": {
                    "zh": "搜索",
                    "en": "Search",
                    "vi": "Tìm kiếm",
                    "zh-Hant": "搜索",
                    "id": "Cari",
                    "es": "Buscar",
                    "pt-BR": "Busca",
                    "ar": "البحث"
                },
                "pleaseSelect": {
                    "zh": "请选择",
                    "en": "Please select",
                    "vi": "Vui lòng chọn",
                    "zh-Hant": "請選擇",
                    "id": "Silahkan pilih",
                    "es": "Por favor, seleccione",
                    "pt-BR": "Por favor, selecione",
                    "ar": "يرجى الاختيار"
                },
                "systemPrompt": {
                    "zh": "系统提示",
                    "en": "The system prompt",
                    "vi": "Lời nhắc hệ thống",
                    "zh-Hant": "系統提示",
                    "id": "Pemberitahuan Sistem",
                    "es": "Aviso sistema ",
                    "pt-BR": "O prompt do sistema",
                    "ar": "موجه النظام"
                },
                "systemPromptM": {
                    "zh": "系统提示：",
                    "en": "The system prompt: ",
                    "vi": "Lời nhắc hệ thống: ",
                    "zh-Hant": "系統提示：",
                    "id": " Pemberitahuan Sistem ",
                    "es": "Aviso del sistema: ",
                    "pt-BR": "O prompt do sistema ",
                    "ar": "موجه النظام:"
                },
                "pleaseWait": {
                    "zh": "请稍等",
                    "en": "Please wait",
                    "vi": "Vui lòng chờ",
                    "zh-Hant": "請稍等",
                    "id": "Mohon Menunggu",
                    "es": "Por favor, espere",
                    "pt-BR": "Por favor, espere",
                    "ar": "يرجى الانتظار"
                },
                "before": {
                    "zh": "过去",
                    "en": "last",
                    "vi": "trước",
                    "zh-Hant": "過去",
                    "id": "terakhir",
                    "es": "último",
                    "pt-BR": "último",
                    "ar": "الأخير"
                },
                "yes": {
                    "zh": "是",
                    "en": "Yes",
                    "vi": "Đồng ý",
                    "zh-Hant": "是",
                    "id": "Ya",
                    "es": "Sí",
                    "pt-BR": "Sim",
                    "ar": "نعم"
                },
                "no": {
                    "zh": "否",
                    "en": "No",
                    "vi": "Không",
                    "zh-Hant": "否",
                    "id": "Tidak",
                    "es": "No",
                    "pt-BR": "Não",
                    "ar": "لا"
                },
                "submitting": {
                    "zh": "提交中",
                    "en": "Submitting",
                    "vi": "Đang gửi đi",
                    "zh-Hant": "提交中",
                    "id": "Sedang mengirim",
                    "es": "Enviando",
                    "pt-BR": "Enviando",
                    "ar": "إرسال"
                },
                "name": {
                    "zh": "姓名",
                    "en": "Name",
                    "vi": "Tên",
                    "zh-Hant": "姓名",
                    "id": "Nama",
                    "es": "Nombre",
                    "pt-BR": "Nome",
                    "ar": "الاسم"
                },
                "or": {
                    "zh": "或",
                    "en": "Or",
                    "vi": "Hoặc",
                    "zh-Hant": "或",
                    "id": "Atau",
                    "es": "or",
                    "pt-BR": "ou",
                    "ar": "أو"
                },
                "revocation": {
                    "zh": "撤销",
                    "en": "withdrawal cancelation",
                    "vi": "Hủy rút tiền",
                    "zh-Hant": "撤銷",
                    "id": "Pembatalan penarikan",
                    "es": "cancelación reembolso",
                    "pt-BR": "Cancelamento de saque",
                    "ar": "إلغاء السحب"
                },
                "select": {
                    "zh": "选择",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "選擇",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar",
                    "ar": "تأكيد"
                },
                "audit": {
                    "zh": "审核",
                    "en": "Audit",
                    "vi": "Kiểm toán",
                    "zh-Hant": "審核",
                    "id": "Pemeriksaan",
                    "es": "Auditar",
                    "pt-BR": "Auditar",
                    "ar": "المراجعة"
                },
                "prompt": {
                    "zh": "提示",
                    "en": "Prompt",
                    "vi": "Lời nhắc",
                    "zh-Hant": "提示",
                    "id": "Pemberitahuan",
                    "es": "Aviso",
                    "pt-BR": "Resposta",
                    "ar": "سريع"
                },
                "dollars": {
                    "zh": "美金",
                    "en": "Dollars",
                    "vi": "Đô la",
                    "zh-Hant": "美金",
                    "id": "Dolar",
                    "es": "Dólares",
                    "pt-BR": "Dólares",
                    "ar": "دولار أمريكي"
                },
                "second": {
                    "zh": "秒",
                    "en": " Second",
                    "vi": " Thứ hai",
                    "zh-Hant": "秒",
                    "id": "Kedua",
                    "es": " Segundo",
                    "pt-BR": " Segundo",
                    "ar": "ثانيًا"
                },
                "weeks": {
                    "zh": "周",
                    "en": " weeks",
                    "vi": " Tuần",
                    "zh-Hant": "周",
                    "id": "Mingguan",
                    "es": " semanas",
                    "pt-BR": "  semanas",
                    "ar": "أسابيع"
                },
                "month": {
                    "zh": "月",
                    "en": " month",
                    "vi": " Tháng",
                    "zh-Hant": "月",
                    "id": "Bulan",
                    "es": " mes",
                    "pt-BR": "  mês",
                    "ar": "شهر"
                },
                "year": {
                    "zh": "年",
                    "en": " year",
                    "vi": " Năm",
                    "zh-Hant": "年",
                    "id": "Tahun",
                    "es": " año",
                    "pt-BR": "  ano",
                    "ar": "سنة"
                },
                "day": {
                    "zh": "天",
                    "en": " Day",
                    "vi": " Ngày",
                    "zh-Hant": "天",
                    "id": "Hari",
                    "es": " Día",
                    "pt-BR": "  Dia",
                    "ar": "اليوم"
                },
                "hour": {
                    "zh": "时",
                    "en": " Hour",
                    "vi": " Giờ",
                    "zh-Hant": "時",
                    "id": " Giờ",
                    "es": " Hora",
                    "pt-BR": " Horas",
                    "ar": "ساعة"
                },
                "Ahour": {
                    "zh": "小时",
                    "en": " Hour",
                    "vi": " Giờ",
                    "zh-Hant": "小時",
                    "id": " Jam",
                    "es": " Hora",
                    "pt-BR": " Horas",
                    "ar": "ساعة"
                },
                "minute": {
                    "zh": "分",
                    "en": " Minute",
                    "vi": " Phút",
                    "zh-Hant": "分",
                    "id": "Menit",
                    "es": " Minuto",
                    "pt-BR": "  Minuto",
                    "ar": "دقيقة"
                },
                "just": {
                    "zh": "刚刚",
                    "en": " just",
                    "vi": " Bây giờ",
                    "zh-Hant": "剛剛",
                    "id": "Hanya",
                    "es": " sólo",
                    "pt-BR": "  somente",
                    "ar": "فقط"
                },
                "areaCode": {
                    "zh": "区号",
                    "en": "Area",
                    "vi": "Khu vực",
                    "zh-Hant": "區號",
                    "id": "Area",
                    "es": "Area",
                    "pt-BR": "Área",
                    "ar": "المنطقة"
                },
                "provinces": {
                    "zh": "省份",
                    "en": "Provinces",
                    "vi": "Tỉnh thành",
                    "zh-Hant": "省份",
                    "id": "Provinsi",
                    "es": "Provincia",
                    "pt-BR": "Regiões",
                    "ar": "الأقاليم"
                },
                "city": {
                    "zh": "城市",
                    "en": "City",
                    "vi": "Thành phố",
                    "zh-Hant": "城市",
                    "id": "Kota",
                    "es": "Ciudad",
                    "pt-BR": "Cidade",
                    "ar": "المدينة"
                },
                "unknownError": {
                    "zh": "未知错误，请联系管理员",
                    "en": "Unknown error, please contact administrator",
                    "vi": "Lỗi không xác định, vui lòng liên hệ với quản trị viên",
                    "zh-Hant": "未知錯誤，請聯系管理員",
                    "id": "Terjadi kesalahan, silahkan hubungi pengelola ",
                    "es": "Error desconocido, por favor, contacte administrador",
                    "pt-BR": "Erro desconhecido, por favor contate o administrador",
                    "ar": "خطأ غير معروف، يرجى الاتصال بالمسؤول"
                },
                "gender": {
                    "zh": "性别",
                    "en": "Gender",
                    "vi": "Giới tính",
                    "zh-Hant": "性別",
                    "id": "Jenis Kelamin ",
                    "es": "Género",
                    "pt-BR": "Gênero",
                    "ar": "النوع"
                },
                "query": {
                    "zh": "查询",
                    "en": "Query",
                    "vi": "Truy vấn",
                    "zh-Hant": "查詢",
                    "id": "Daftar Pertanyaan",
                    "es": "Consulta",
                    "pt-BR": "Inquerir",
                    "ar": "استعلام"
                },
                "loading": {
                    "zh": "加载中",
                    "en": "Loading",
                    "vi": "Đang tải",
                    "zh-Hant": "加載中",
                    "id": "Memuat",
                    "es": "Cargando",
                    "pt-BR": "Carregando",
                    "ar": "قيد التحميل"
                },
                "noRemember": {
                    "zh": "暂无提醒！",
                    "en": "No remember!",
                    "vi": "Không nhớ!",
                    "zh-Hant": "暫無提醒！",
                    "id": "Tidak ingat!",
                    "es": "¡No recuerdo!",
                    "pt-BR": "Não lembro!",
                    "ar": "لا توجد رسائل!"
                },
                "unfold": {
                    "zh": "展开",
                    "en": "Unfold",
                    "vi": "Mở ra",
                    "zh-Hant": "展開",
                    "id": "Membuka",
                    "es": "Desplegar",
                    "pt-BR": "Desdobrar",
                    "ar": "فتح"
                },
                "fold": {
                    "zh": "收起",
                    "en": "Fold",
                    "vi": "Gập lại",
                    "zh-Hant": "收起",
                    "id": "Tutup",
                    "es": "Ver menos",
                    "pt-BR": "Dobra",
                    "ar": "طي"
                },
                "networkError": {
                    "zh": "网络错误",
                    "en": "Network error",
                    "vi": "Lỗi mạng",
                    "zh-Hant": "網酪錯誤",
                    "id": "Jaringan bermasalah",
                    "es": "Error red",
                    "pt-BR": "Erro na rede",
                    "ar": "خطأ في الشبكة"
                },
                "signOut": {
                    "zh": "退出登录",
                    "en": "Sign out",
                    "vi": "Thoát",
                    "zh-Hant": "退出登錄",
                    "id": "Keluar",
                    "es": "Salir",
                    "pt-BR": "Sair",
                    "ar": "تسجيل الخروج"
                },
                "type": {
                    "zh": "类型",
                    "en": "Type",
                    "vi": "Loại",
                    "zh-Hant": "類型",
                    "id": "Tipe",
                    "es": "Tipo",
                    "pt-BR": "Tipo",
                    "ar": "النوع"
                },
                "account": {
                    "zh": "账号",
                    "en": "account",
                    "vi": "tài khoản",
                    "zh-Hant": "帳號",
                    "id": "Akun",
                    "es": "cuenta",
                    "pt-BR": "Conta",
                    "ar": "الحساب"
                },
                "male": {
                    "zh": "男",
                    "en": "Male",
                    "vi": "Nam",
                    "zh-Hant": "男",
                    "id": "Laki-Laki",
                    "es": "Hombre ",
                    "pt-BR": "Masculino",
                    "ar": "ذكر"
                },
                "female": {
                    "zh": "女",
                    "en": "Female",
                    "vi": "Nữ",
                    "zh-Hant": "女",
                    "id": "Perempuan",
                    "es": "Mujer",
                    "pt-BR": "Feminino",
                    "ar": "أنثى"
                },
                "ok": {
                    "zh": "好的",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "好的",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar",
                    "ar": "تأكيد"
                },
                "default": {
                    "zh": "默认",
                    "en": "Default",
                    "vi": "Mặc định",
                    "zh-Hant": "默認",
                    "id": " Default ",
                    "es": "Por defecto",
                    "pt-BR": "Padrão",
                    "ar": "الافتراضي"
                },
                "lot": {
                    "zh": "手",
                    "en": " lots",
                    "vi": " lots",
                    "zh-Hant": "手",
                    "id": "lot",
                    "es": " lotes",
                    "pt-BR": " lotes",
                    "ar": "عقود"
                },
                "lot2": {
                    "zh": "笔",
                    "en": " orders",
                    "vi": " lệnh",
                    "zh-Hant": "筆",
                    "id": "Transaksi",
                    "es": " órdenes",
                    "pt-BR": " ordens",
                    "ar": "أوامر"
                },
                "next": {
                    "zh": "下一页",
                    "en": "Next",
                    "vi": "Tiếp theo",
                    "zh-Hant": "下壹頁",
                    "id": "Selanjutnya",
                    "es": "Siguiente",
                    "pt-BR": "Próximo",
                    "ar": "التالي"
                },
                "previous": {
                    "zh": "上一页",
                    "en": "Previous",
                    "vi": "Trước đó",
                    "zh-Hant": "上壹頁",
                    "id": "Sebelumnya",
                    "es": "Previo",
                    "pt-BR": "Anterior",
                    "ar": "السابق"
                },
                "download": {
                    "zh": "下载",
                    "en": "Download",
                    "vi": "Tải về",
                    "zh-Hant": "下載",
                    "id": "Unduh",
                    "es": "Descargar",
                    "pt-BR": "download",
                    "ar": "تحميل"
                },
                "getCodeAgain": {
                    "zh": "获取语音验证码",
                    "en": "Get code again",
                    "vi": "Nhận lại mã",
                    "zh-Hant": "獲取語音驗證碼",
                    "id": "Dapatkan kode",
                    "es": "Obtener código otra vez",
                    "pt-BR": "Obter código novamente",
                    "ar": "الحصول على الرمز مرة أخرى"
                },
                "getVoiceCodeAgain": {
                    "zh": "再次获取语音",
                    "en": "Get voice code again",
                    "vi": "Nhận lại mã giọng nói",
                    "zh-Hant": "再次獲取語音",
                    "id": "Dapatkan kode suara",
                    "es": "Obtener código voz otra vez",
                    "pt-BR": "Obter o código de voz novamente",
                    "ar": "الحصول على الرمز الصوتي مرة أخرى"
                },
                "january": {
                    "zh": "一月",
                    "en": "Jan.",
                    "vi": "Tháng 1",
                    "zh-Hant": "壹月",
                    "id": "Januari",
                    "es": "Ene.",
                    "pt-BR": "Jan.",
                    "ar": "يناير"
                },
                "february": {
                    "zh": "二月",
                    "en": "Feb.",
                    "vi": "Tháng 2",
                    "zh-Hant": "二月",
                    "id": "Februari",
                    "es": "Feb.",
                    "pt-BR": "Fev.",
                    "ar": "فبراير"
                },
                "march": {
                    "zh": "三月",
                    "en": "Mar.",
                    "vi": "Tháng 3",
                    "zh-Hant": "三月",
                    "id": "Maret",
                    "es": "Mar.",
                    "pt-BR": "Mar.",
                    "ar": "مارس"
                },
                "april": {
                    "zh": "四月",
                    "en": "Apr.",
                    "vi": "Tháng 4",
                    "zh-Hant": "四月",
                    "id": "April",
                    "es": "Abr.",
                    "pt-BR": "Abr.",
                    "ar": "أبريل"
                },
                "may": {
                    "zh": "五月",
                    "en": "May",
                    "vi": "Tháng 5",
                    "zh-Hant": "五月",
                    "id": "Mei",
                    "es": "May.",
                    "pt-BR": "Mai.",
                    "ar": "مايو"
                },
                "june": {
                    "zh": "六月",
                    "en": "Jun.",
                    "vi": "Tháng 6",
                    "zh-Hant": "六月",
                    "id": "Juni",
                    "es": "Jun.",
                    "pt-BR": "Jun.",
                    "ar": "يونيو"
                },
                "july": {
                    "zh": "七月",
                    "en": "Jul.",
                    "vi": "Tháng 7",
                    "zh-Hant": "七月",
                    "id": "Juli",
                    "es": "Jul.",
                    "pt-BR": "Jul.",
                    "ar": "يوليو"
                },
                "august": {
                    "zh": "八月",
                    "en": "Aug.",
                    "vi": "Tháng 8",
                    "zh-Hant": "八月",
                    "id": "Agustus",
                    "es": "Aug.",
                    "pt-BR": "Ago.",
                    "ar": "أغسطس"
                },
                "september": {
                    "zh": "九月",
                    "en": "Sep.",
                    "vi": "Tháng 9",
                    "zh-Hant": "九月",
                    "id": "September",
                    "es": "Sep.",
                    "pt-BR": "Set.",
                    "ar": "سبتمبر"
                },
                "october": {
                    "zh": "十月",
                    "en": "Oct.",
                    "vi": "Tháng 10",
                    "zh-Hant": "十月",
                    "id": "Oktober",
                    "es": "Oct.",
                    "pt-BR": "Out.",
                    "ar": "أكتوبر"
                },
                "november": {
                    "zh": "十一月",
                    "en": "Nov.",
                    "vi": "Tháng 11",
                    "zh-Hant": "十壹月",
                    "id": "November",
                    "es": "Nov.",
                    "pt-BR": "Nov.",
                    "ar": "نوفمبر"
                },
                "december": {
                    "zh": "十二月",
                    "en": "Dec.",
                    "vi": "Tháng 12",
                    "zh-Hant": "十二月",
                    "id": "Desember",
                    "es": "Dec.",
                    "pt-BR": "Dez.",
                    "ar": "ديسمبر"
                },
                "reset": {
                    "zh": "还原",
                    "en": "Reset",
                    "vi": "Cài đặt lại",
                    "zh-Hant": "還原",
                    "id": "Atur kembali",
                    "es": "Reiniciar",
                    "pt-BR": "Reiniciar",
                    "ar": "إعادة تعيين"
                },
            },
        };
        var indexBasePath = "/white_label";
        var data = angular.extend({
            "company": "tigerwit",
            "language": '',

            "companyCopyRules": {
                "zh": "https://www.tigerwit.com/web/copy/rules",
                "en": "https://www.tigerwit.com/web/copy/rules",
                "vi": "https://www.tigerwit.com/web/copy/rules",
                "zh-Hant": "https://www.tigerwit.com/web/copy/rules",
                "id": "https://www.tigerwit.com/web/copy/rules",
                "es": "https://www.tigerwit.com/web/copy/rules",
                "pt-BR": "https://www.tigerwit.com/web/copy/rules",
                "ar": "https://www.tigerwit.com/web/copy/rules"
            },
            "companyNameEn": {
                "zh": "TigerWit",
                "en": "TigerWit",
                "vi": "TigerWit",
                "zh-Hant": "TigerWit",
                "id": "TigerWit",
                "es": "TigerWit",
                "pt-BR": "TigerWit",
                "ar": "TigerWit"
            },
            "companyNameZh": {
                "zh": "TigerWit",
                "en": "TigerWit",
                "vi": "TigerWit",
                "zh-Hant": "TigerWit",
                "id": "TigerWit",
                "es": "TigerWit",
                "pt-BR": "TigerWit",
                "ar": "TigerWit"
            },
            "webSite": {
                "zh": "www.tigerwit.com",
                "en": "www.tigerwit.com",
                "vi": "www.tigerwit.com",
                "zh-Hant": "www.tigerwit.com",
                "id": "www.tigerwit.com",
                "es": "www.tigerwit.com",
                "pt-BR": "www.tigerwit.com",
                "ar": "www.tigerwit.com"
            },
            "imgPath": {
                "liverpoolSmOver": {
                    "en": indexBasePath + "/bd/liverpool/liverpool-sm-over-en.png",
                    "id": indexBasePath + "/bd/liverpool/liverpool-sm-over-id.png",
                    "zh": indexBasePath + "/bd/liverpool/liverpool-sm-over-zh.png",
                    "vi": indexBasePath + "/bd/liverpool/liverpool-sm-over-vi.png",
                    "zh-Hant": indexBasePath + "/bd/liverpool/liverpool-sm-over-zh-Hant.png",
                    "es": indexBasePath + "/bd/liverpool/liverpool-sm-over-es.png",
                    "pt-BR": indexBasePath + "/bd/liverpool/liverpool-sm-over-pt-BR.png",
                    "ar": indexBasePath + "/bd/liverpool/liverpool-sm-over-ar.png"
                },
                "liverpoolSm": {
                    "en": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "id": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "zh": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "vi": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "zh-Hant": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "es": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "pt-BR": indexBasePath + "/bd/liverpool/liverpool-sm.png",
                    "ar": indexBasePath + "/bd/liverpool/liverpool-sm-ar.png"
                } 
            }
        }, lang_data);

        return data;
    }
})();