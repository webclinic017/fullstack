;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .controller('WebAgreementController', WebAgreementController);

    WebAgreementController.$inject = ['$scope', 'lang'];

    function WebAgreementController ($scope, lang) {
        $scope.listType = $(".agreement_common").attr("data-list-type");
        var agreementList = {
            legal: {
                zh: "声明,网站的归属,访问,担保免责声明和责任限制,链接网站,安全,隐私,适用法律和司法管辖区",
                en: "Notice,Ownership of Site,Access,Disclaimer of Warranty and Limitation of Liability,Linked Sites,Security,Privacy,Applicable Law and Jurisdiction",
                vi: "Lưu Ý,Quyền sở hữu trang web,Truy cập,Sự Chối Bỏ Trách Nhiệm Bảo Đảm Và Giới Hạn Trách Nhiệm Pháp Lý,Các Trang liên kết,Bảo mật,Sự riêng tư,Luật Và Định Chế Áp Dụng",
                "zh-Hant": "聲明,網站的歸屬,訪問,擔保免責聲明和責任限制,鏈接網站,安全,隱私,適用法律和司法管轄區",
                "id": "Notice,Ownership of Site,Access,Disclaimer of Warranty and Limitation of Liability,Linked Sites,Keamanan,Privacy,Applicable Law and Jurisdiction",
                "es": "Notificación,Propiedad del Sitio,Acceso,Descargo de Responsabilidades y Limitación de Responsabilidad,Sitios Enlazados,Seguridad,Privacidad,Jurisdicción y Ley Aplicable",
                "pt-BR": "Aviso,Propriedade do Site,Acesso,Isenção de Garantia e Limitação de Responsabilidade,Sites Vinculados,Segurança,Privacidade,Leis Aplicáveis e Jurisdição",
                "ar": "ملحوظة,ملكية الموقع الإلكتروني,الوصول,إخلاء المسؤولية عن الضمان وحدود المسؤولية,المواقع المرتبطة,الأمن,الخصوصية,القانون المعمول به والولاية القضائية"
            },
            client: {
                zh: "序言,确认书,客户协议范围,客户协议开始,条款解释,服务的提供,客户分类,身份,保证与担保,客户资金,费用,责任,补偿计划,赔偿,客户协议期限,客户协议的通知与修订,终止与违约,风险披露,保密与个人数据保护,电话录音,利益冲突,直接联系许可,声明与保证,不可抗力事件,适用法律、管辖权与争议解决,其他,常见问题解答,其他联系人",
                "en": "Introduction,Acknowledgement,Scope of Client Agreement,Commencement of the Client Agreement,Interpretation of Terms,Provision of Services,Client Classification,Capacity,Assurances and Guarantees,Client Money,Charges,Liability,Compensation Scheme,Indemnity,Duration of the Client Agreement,Notifications and Amendments to the Client Agreement,Termination and Default,Risk Disclosure,Confidentiality and Personal Data Protection,Recordings of Telephone Calls,Conflicts of Interest,Direct Contact Consent,Representations and Warranties,Force Majeur Event,Governing Law Jurisdiction and Dispute Resolution,Miscellaneous,FAQs,Additional Contacts",
                vi: "Giới thiệu,Thừa nhận,Phạm vi Hợp đồng khách hàng,Bắt đầu của Hợp đồng khách hàng,Diễn giải các Điều khoản,Điều khoản Cung Cấp Dịch vụ,Phân loại Khách Hàng,Khả năng,Bảo đảm và Bảo vệ,Tiền của Khách hàng,Phí,Trách nhiệm pháp lý,Khung Bồi thường,Bồi thường,Thạn của Hợp đồng khách hàng,Thông báo và sửa đổi cho Hợp đồng khách hàng,Chấm dứt và mặc định,uyên bố Rủi ro,Bảo mật và Bảo vệ Dữ Liệu Khách Hàng,Ghi âm các cuộc gọi điện thoại,Xung đột lợi ích,Đồng ý liên hệ trực tiếp,Đại Diện và Bảo Đảm,Sự kiện bất khả kháng,Luật Quản lý，Thẩm Quyền và Giải Quyết Tranh Chấp,Khác,FAQs,Liên hệ bổ sung",
                "zh-Hant": "序言,確認書,客戶協議範圍,客戶協議開始,條款解釋,服務的提供,客戶分類,身份,保證與擔保,客戶資金,費用,責任,補償計劃,賠償,客戶協議期限,客戶協議的通知與修訂,終止與違約,風險披露,保密與個人數據保護,電話錄音,利益沖突,直接聯系許可,聲明與保證,不可抗力事件,適用法律、管轄權與爭議解決,其他,常見問題解答,其他聯系人",
                "id": "Introduction,Acknowledgement,Scope of Client Agreement,Commencement of the Client Agreement,Interpretation of Terms,Provision of Services,Client Classification,Capacity,Assurances and Guarantees,Client Money,Charges,Liability,Compensation Scheme,Indemnity,Duration of the Client Agreement,Notifications and Amendments to the Client Agreement,Termination and Default,Risk Disclosure,Confidentiality and Personal Data Protection,Recordings of Telephone Calls,Conflicts of Interest,Direct Contact Consent,Representations and Warranties,Force Majeur Event,Governing Law, Jurisdiction and Dispute Resolution,Miscellaneous,FAQs,Additional Contacts",
                "es": "Introducción,Reconocimientos,Alcance Acuerdo Cliente,Inicio Acuerdo de Cliente,Interpretación de los Términos,Provisión de Servicios,Clasificación Clientes,Capacidad,Aseveraciones y Garantías,Dinero Clientes,Cargos,Responsabilidad,Esquema de Compensacion,Indemnización,Duración Acuerdo de Cliente,Notificaciones y modificaciones al acuerdo del cliente,Terminación y Default,Divulgación del Riesgo,Confidencialidad y Protección Datos Personales,Grabaciones de Llamadas Telefónicas,Conflictos de Interés,Consentimiento Contacto Directo,Representaciones y Garantías,Evento de Fuerza Mayor,Jurisdicción, Ley Gobierna y Resolución Disputas,Varios,PP.FF,Adicional Contacts",
                "pt-BR": "Introdução,Reconhecimento,Âmbito do Contrato do Cliente,Início do Contrato de Cliente,Interpretação dos Termos,Fornecimento de serviços,Classificação de clientes,Capacidade,Garantias,Dinheiro do Cliente,Cobranças,Responsabilidade,Esquema de compensação,Indenização,Duração do contrato do cliente,Notificações e alterações ao contrato de cliente,Rescisão e Default,Divulgação de Risco,Confidencialidade e Proteção de Dados Pessoais,Gravações de Chamadas Telefônicas,Conflitos de Interesse,Consentimento de Contato Direto,Representações e Garantias,Evento de Força Maior,Lei Aplicável, Jurisdição e Resolução de Conflitos,Diversos,FAQs,Contatos Adicionais",
                "ar": "مقدمة,إقرار,نطاق اتفاقية العميل,بدء اتفاقية العميل,تفسير المصطلحات,تقديم الخدمات,تصنيف العميل,الصفة,الكفالات والضمانات,أموال العميل,التكاليف,المسؤولية,برنامج التعويضات,التعويضات,مدة اتفاقية العميل,الإخطارات والتعديلات على اتفاقية العميل,الإنهاء والتقصير,الإفصاح عن المخاطر,السرية وحماية البيانات الشخصية,تسجيلات المكالمات الهاتفية,تضارب المصالح,الموافقة على الاتصال المباشر,الإقرارات والضمانات,أحداث القوة القاهرة,القانون الحاكم والاختصاص القضائي وحل المنازعات,متفرقات,الأسئلة المتكررة,بيانات اتصال إضافية"
            },
            risk: {
                zh: "本声明的范围,适当性评估,CFD 的性质,价格和成本,市场状况、所需保证金、杠杆和强平水平,外汇和其他相关风险,技术风险,客户资金,不作建议,过往业绩,更多信息",
                en: "Scope of This Notice,Appropriateness Assessment,Nature of CFDs,Prices and Costs,Market、Conditions、Required Margin Leverage and Stop-Out Levels,Foreign Exchange and Other Related Risks,Technical Risks,Client Money,No Advice,Past Performance,Additional Information",
                vi: "Scope of This Notice,Appropriateness Assessment,Nature of CFDs,Prices and Costs,Market、Conditions、Required Margin Leverage and Stop-Out Levels,Foreign Exchange and Other Related Risks,Technical Risks,Client Money,No Advice,Past Performance,Additional Information",
                "zh-Hant": "本聲明的範圍,適當性評估,CFD 的性質,價格和成本,市場狀況、所需保證金、杠桿和強平水平,外匯和其他相關風險,技術風險,客戶資金,不作建議,過往業績,更多信息",
                "id": "Scope of This Notice,Appropriateness Assessment,Nature of CFDs,Prices and Costs,Market Conditions,Required Margin, Leverage and Stop-Out Levels.,Foreign Exchange and Other Related Risks,Technical Risks,Client Money,No Advice,Past Performance,Additional Information",
                "es": "Alcance Notificación,Evaluación Idoneidad,Naturaleza de los CFDs,Precios y Costes,Condiciones de Mercado, Margen Requerido, Apalancamiento y Niveles Stop-Out.,Foreign Exchange y Otros Riesgos Relacionados,Riesgos Técnicos,Dinero del Cliente,No Asesoramiento,Rendimientos Pasados,Información Adicional",
                "pt-BR": "Âmbito deste aviso,Avaliação de Adequação,Natureza dos CFDs,Preços e custos,Condições de Mercado, Margem Necessária, Alavancagem e Níveis de Stop-Out.,Câmbio e outros riscos relacionados,Riscos Técnicos,Dinheiro do Cliente,Sem Conselho,Performance passada,Informação Adicional",
                "ar": "نطاق هذا البيان,تقييم الملاءمة,طبيعة عقود الفروقات,الأسعار والتكاليف,ظروف السوق والهامش المطلوب والرافعة المالية ومستويات الإغلاق الإجباري,مخاطر العملات الأجنبية والمخاطر الأخرى ذات الصلة,المخاطر الفنية,أموال العميل,لا مشورة,الأداء السابق,معلومات إضافية"
            },
            cookie: {
                zh: "承诺,申请,保密性和保护客户个人数据,披露您的信息,收集的个人信息类型,选择/选择退出,Cookie,个人信息的安全性和保护措施,访问个人身份信息,法律免责声明,本隐私声明的变更,查询",
                en: "Commitment,Application,Confidentiality and Client's Personal Data Protection,Disclosure of your information,Information we may collect about you,Choice/Opt-out,Cookies,Security and Protection of your personal information,Access to Personally Identifiable Information,Legal Disclaimer,Changes in this Privacy Statement,Enquiries",
                vi: "Cam kết,Đăng Kí,Bảo Mật Và Bảo Vệ Dữ Liệu Cá Nhân Của Khách Hàng,Tiết lộ thông tin của bạn,Thông tin chúng tôi có thể thu thập về bạn,Chọn / Chọn không tham gia,Cookies,Bảo Mật Và Bảo Vệ Thông Tin Cá Nhân Của Bạn,Truy cập thông tin nhận dạng cá nhân,Tuyên Bố Từ Chối Trách Nhiệm Pháp Lý,Thay đổi trong Tuyên bố về quyền riêng tư này,Thắc mắc",
                "zh-Hant": "承諾,申請,保密性和保護客戶個人數據,披露您的信息,收集的個人信息類型,選擇/選擇退出,Cookie,個人信息的安全性和保護措施,訪問個人身份信息,法律免責聲明,本隱私聲明的變更,查詢",
                "id": "Commitment,Application,Confidentiality and Client's Personal Data Protection,Disclosure of your information,Information we may collect about you,Choice/Opt-out,Cookies,Security and Protection of your personal information,Access to Personally Identifiable Information,Legal Disclaimer,Changes in this Privacy Statement,Enquiries",
                "es": "Compromiso,Solicitud,Confidencialidad y Protección Datos Personales Cliente,Divulgación de su información,Información que podemos recopilar sobre usted,Opción/Opt-out,Cookies,Seguridad y Protección de su información personal.,Acceso a información de identificación personal,Notas Legales,Cambios en esta Declaración de Privacidad,Consultas",
                "pt-BR": "Comprometimento,Aplicativo,Confidencialidade e Proteção de Dados Pessoais do Cliente,Divulgação de sua informação,Informações que podemos coletar sobre você,Escolha/Opt-out,Cookies,Segurança e Proteção da sua informação pessoal,Acesso a informações pessoalmente identificáveis,Isenção Legal,Alterações nesta declaração de privacidade,Inquéritos",
                "ar": "التزام,الطلب,السرية وحماية البيانات الشخصية للعملاء,الإفصاح عن المعلومات الخاصة بك,المعلومات التي يمكن أن نجمعها عنك,الخيار/ إلغاء الاشتراك,ملفات تعريف الارتباط,أمن وحماية معلوماتك الشخصية,الوصول إلى المعلومات المحددة للهوية الشخصية,إخلاء المسؤولية القانونية,التغييرات التي تطرأ على بيان الخصوصية هذا,الاستفسارات"
            },
            business: {
                zh: "序言,确认书,商业条款和条件的范围,条款解释,电子交易,指令和订单,拒绝执行订单,公司行为,投诉处理程序,其他,常见问题,其他联系人",
                en: "Introduction,Acknowledgement,Scope of the Terms and Conditions of Business,Interpretation of Terms,Electronic Trading,Instructions and Orders,Refusal to Execute Orders,Corporate Actions,Complaints Handling Procedure,Miscellaneous,FAQs,Additional Contacts",
                vi: "Giới thiệu,Thừa nhận,Phạm vi điều khoản và điều kiện kinh doanh,Giải thích về Điều khoản,Giao dịch điện tử,Hướng dẫn và Các Lệnh,Từ chối Thực Thi Lệnh,Động thái của công ty,Thủ tục xử lý khiếu nại,Phụ lục,FAQs,Địa chỉ liên hệ bổ sung",
                "zh-Hant": "序言,確認書,商業條款和條件的範圍,條款解釋,電子交易,指令和訂單,拒絕執行訂單,公司行為,投訴處理程序,其他,常見問題,其他聯系人",
                "id": "Introduction,Acknowledgement,Scope of the Terms and Conditions of Business,Interpretation of Terms,Electronic Trading,Instructions and Orders,Refusal to Execute Orders,Corporate Actions,Complaints Handling Procedure,Miscellaneous,FAQs,Additional Contacts",
                "es": "Introducción,Reconocimientos,Alcance de los Términos y Condiciones del Negocio,Interpretación de Términos,Trading Electrónico,Órdenes e Instrucciones,Negativa a Ejecutar Órdenes,Acciones Corporativas,GESTIÓN PROCEDIMIENTO RECLAMACIONES,Miscelánea,PP.FF,Contactos adicionales",
                "pt-BR": "Introdução,Reconhecimento,Âmbito dos Termos e Condições de Negócio,Interpretação dos Termos,Negociação Eletrônica,Instrucões e Ordens,Recusa a Executar Ordens,Ações corporativas,Procedimento de Tratamento de Reclamações,Diversos,FAQs,Contatos Adicionais",
                "ar": "مقدمة,إقرار,نطاق شروط وأحكام العمل,تفسير المصطلحات,التداول الإلكتروني,التعليمات والأوامر,رفض تنفيذ الأوامر,إجراءات الشركات,إجراءات التعامل مع الشكاوي,متفرقات,الأسئلة المتكررة,جهات اتصال إضافية"
            },
            responsibly: {
                zh: "负责任地交易——理解涉及的风险,如何利用杠杆优势",
                en: "Trade Responsibly – Understanding the risks involved,How to use leverage to your advantage",
                vi: "Lưu ý giao dịch có trách nhiệm - Hiểu các rủi ro liên quan,Cách sử dụng đòn bẩy để làm lợi thế của bạn",
                "zh-Hant": "負責任地交易——理解涉及的風險,如何利用杠桿優勢",
                "id": "Trade Responsibly – Understanding the risks involved,How to use leverage to your advantage",
                "es": "Opere Responsablemente – Comprendiendo los riesgos englobados,Cómo emplear el apalancamiento en su beneficio",
                "pt-BR": "Comércio Responsável - Entendimento os riscos envolvidos,Como usar a alavancagem para sua vantagem",
                "ar": "التداول بمسؤولية - فهم المخاطر المرتبطة بالتداول,كيف تستخدم الرافعة المالية لصالحك"
            },
            conditions: {
                zh: "降低风险的指令或策略,价格,信息延迟,点差扩大,滑点,汇价跳空,系统报价风险(错价),套汇和操控,价位操纵,交易与第三者参与,交易平台时间,流通量,保证金追加,周末风险,网络交易,手续费,断线时紧急异常处理申请,注意事项说明,常见问题解答,客户服务部,其他联系人",
                en: "Functions or strategies to mitigate risks,Price,Information delay,Spread Fluctuations,Slippage,Exchange rate gap,Risk of System Quotation (Mispricing),Arbitrage and control,Price manipulation,Trade and third-party participation,Platform Trading Hours,Circulation,Margin call,Risks over weekends,Online trading,Commission charge,Application for abnormal conditions,The announcement,FAQs,Customer Support Department,Additional Contacts",
                vi: "Chức năng hoặc chiến lược để giảm thiểu rủi ro,Giá bán,Trì hoãn thông tin,Biến độngSpread,Slippage (Trượt giá),Khoảng cách tỷ giá hối đoái,Rủi ro hệ thống báo giá (Mispricing-Báo giá sai),Giao dịch chênh lệch giá và kiểm soát,Thao túng giá,Giao dịch và tham gia của bên thứ ba,Giờ giao dịch của nền tảng,Lưu hành,Yêu cầu Bảo Chứng,Rủi ro cuối tuần,Giao dịch trực tuyến,Phí hoa hồng,Đơn đăng kí cho điều kiện bất thường,Bản thông báo,FAQs,Bộ Phận Hỗ Trợ Khách Hàng,Địa Chỉ Liên Hệ Bổ Sung",
                "zh-Hant": "降低風險的指令或策略,價格,信息延遲,點差擴大,滑點,匯價跳空,系統報價風險(錯價),套匯和操控,價位操縱,交易與第三者參與,交易平臺時間,流通量,保證金追加,周末風險,網絡交易,手續費,斷線時緊急異常處理申請,註意事項說明,常見問題解答,客戶服務部,其他聯系人",
                "id": "Functions or strategies to mitigate risks,Price,Information delay,Spread Fluctuations,Slippage,Exchange rate gap,Risk of System Quotation (Mispricing),Arbitrage and control,Price manipulation,Trade and third-party participation,Platform Trading Hours,Circulation,Margin call,Risks over weekends,Online trading,Commission charge,Application for abnormal conditions,The announcement,FAQs,Customer Support Department,Additional Contacts",
                "es": "Funciones y estrategias para mitigar riesgos,Precios,Retraso información,Spread Fluctuaciones,Slippage,Gap tipos de cambio,Riesgos del Sistema Cotizaciones (Mispricing),Arbitraje y control,Manipulación precios,Trade y participación terceros,Horarios Plataforma Trading,Circulación,Margen llamada,Riesgos fines de semana,Trading Online,Cargo comisiones,Solicitud condiciones anormales,El anuncio,PP.FF,Departamento de Soporte al Cliente,Contactos Adicionales",
                "pt-BR": "Funções ou estratégias para mitigar riscos,Preço,Atraso da informação,Flutuações Spread,Deslizamento,Diferença de taxa de câmbio,Risco de cotação do sistema (Mispricing),Arbitragem e controle,Manipulação de preços,Comércio e participação de terceiros,Horário de negociação da plataforma,Circulação,Chamada de margem,Riscos nos finais de semana,Comércio on-line,Comissão responsável,Aplicação para condições anormais,O anúncio,FAQs,Departamento de Suporte ao Cliente,Contatos Adicionais",
                "ar": "وظائف وإستراتيجيات لتقليل المخاطر,السعر,تأخير المعلومات,تقلبات فروق الأسعار,الانزلاق,فجوة سعر الصرف,مخاطر أسعار النظام (سوء التسعير),المراجحة والتحكم,التلاعب في الأسعار,التداول ومشاركة الأطراف الثالثة,مواعيد التداول على المنصة,التداول,طلب تغطية الهامش,مخاطر عطلات نهاية الأسبوع,التداول عبر الإنترنت,تكاليف العمولة,تطبيق الظروف غير الطبيعية,الإعلان,الأسئلة المتكررة,إدارة دعم العملاء,بيانات اتصال إضافية"
            },
            statement: {
                zh: "客户声明,TigerWit交易平台风险提示及免责条款",
                en: "Declaration by Client,Risk Warning and Exemptions for Trading on TigerWit Trading Platform",
                vi: "Tuyên bố của khách hàng,Cảnh báo rủi ro và miễn trừ giao dịch trên nền tảng giao dịch TigerWit",
                "zh-Hant": "客戶聲明,TigerWit交易平臺風險提示及免責條款",
                "id": "Penyataan Klien,Risk Warning and Exemptions for Trading on TigerWit Trading Platform",
                "es": "Declaración del Cliente,Advertencia del Riesgo y Exenciones para el Trading en la Plataforma de Trading TigerWit",
                "pt-BR": "Declaração do Cliente,Aviso de Risco e Isenções para Negociação na Plataforma de Negociação TigerWit",
                "ar": "إقرار  من العميل,التحذير بشأن المخاطر وإعفاءات التداول على منصة تداول TigerWit"
            },
            categorization: {
                zh: "序言,分类标准,申请不同的类型,保护权,常见问题解答,联系方式",
                en: "Introduction,Categorization Criteria,Request for Different Categorization,Protection Rights,FAQs,Contacts",
                vi: "Giới thiệu,Tiêu chí phân loại,Yêu Cầu Phân Loại Khác,Quyền bảo vệ,FAQs,LIÊN HỆ",
                "zh-Hant": "序言,分類標準,申請不同的類型,保護權,常見問題解答,聯系方式",
                "id": "Introduction,Categorization Criteria,Request for Different Categorization,Protection Rights,FAQs,Contacts",
                "es": "Introducción,Criterios Categorización,Solicitud Categorización Diferente,Derechos de Protección,PP.FF,Contactos",
                "pt-BR": "Introdução,Critérios de categorização,Pedido de Categorização Diferente,Direitos de Proteção,FAQs,Contatos",
                "ar": "مقدمة,معايير التصنيف,طلب الحصول على تصنيف مختلف,حقوق الحماية,الأسئلة المتكررة,بيانات الاتصال"
            },
            funds: {
                zh: "资金隔离,我们采取的其他措施",
                en: "Segregation of Funds,Additional Measures We Take",
                vi: "Phân chia các quỹ,Các Biện Pháp Bổ Sung Mà Chúng Tôi Thực Hiện",
                "zh-Hant": "資金隔離,我們采取的其他措施",
                "id": "Segregation of Funds,Additional Measures We Take",
                "es": "Segregación de los Fondos,Medidas Adicionales Adoptamos",
                "pt-BR": "Segregação de Fundos,Medidas Adicionais que Tomamos",
                "ar": "فصل الأموال,التدابير الإضافية التي نتخذها"
            },
            execution: {
                zh: "序言,范围和服务,最佳执行,执行场所,监控和审查,客户同意书,重要信息,常见问题,其他联系人",
                en: "Introduction,Scope and Services,Best Execution,Execution Venues,Monitor and Review,Client Consent,Important Information,FAQs,Additional Contacts",
                vi: "Giới thiệu,Phạm vi và dịch vụ,Khớp Lệnh Tốt Nhất,Địa điểm Thực Thi Lệnh,Giám Sát và Kiểm Tra,Khách Hàng Đồng Ý,Thông tin quan trọng,FAQs,Địa Chỉ Liên Hệ Bổ Sung",
                "zh-Hant": "序言,範圍和服務,最佳執行,執行場所,監控和審查,客戶同意書,重要信息,常見問題,其他聯系人",
                "id": "Introduction,Scope and Services,Best Execution,Execution Venues,Monitor and Review,Client Consent,Important Information,FAQs,Additional Contacts",
                "es": "Introducción,Alcance y Servicios,Mejor Ejecución,Venues Ejecución,Monitorizar y Revisar,Consentimiento del Cliente,Información Importante,PP.FF,Contactos Adicionales",
                "pt-BR": "Introdução,Âmbito e Serviços,Melhor Execução,Locais de Execução,Monitorar e Rever,Consentimento do Cliente,Informação importante,FAQs,Contatos Adicionais",
                "ar": "مقدمة,النطاق والخدمات,التنفيذ الأمثل,أماكن التنفيذ,الرقابة والمراجعة,موافقة العميل,معلومات مهمة,الأسئلة المتكررة,بيانات اتصال إضافية"
            },
            conflicts: {
                zh: "序言,政策范围,识别利益冲突,管理利益冲突,披露,常见问题解答,其他联系人",
                en: "Introduction,Scope of the Policy,Identification of Conflicts of Interest,Managing Conflicts of Interest,Disclosure,Frequently Asked Questions,Additional Contacts",
                vi: "Giới thiệu,Phạm Vi Của Chính Sách,Xác định xung đột lợi ích,Giải quyết xung đột lợi ích,Tiết lộ,Các Câu Hỏi Thường Gặp,Địa Chỉ Bổ Sung",
                "zh-Hant": "序言,政策範圍,識別利益沖突,管理利益沖突,披露,常見問題解答,其他聯系人",
                "id": "Introduction,Scope of the Policy,Identification of Conflicts of Interest,Managing Conflicts of Interest,Disclosure,Frequently Asked Questions,Additional Contacts",
                "es": "Introducción,Alcance de la Política,Identificación de Conflictos de Interés,Gestionando Conflictos de Interés,Divulgación,Preguntas Frecuentes,Contactos Adicionales",
                "pt-BR": "Introdução,Escopo da Política,Identificação de Conflitos de Interesse,Gerenciando Conflitos de Interesse,Divulgação,perguntas frequentes,Contatos Adicionais",
                "ar": "مقدمة,نطاق السياسة,تحديد تضارب المصالح,إدارة تضارب المصالح,الإفصاح,الأسئلة المتكررة,بيانات اتصال إضافية"
            },
            complaint: {
                zh: "投诉程序概述,序言,条款解释,投诉处理程序的范围,投诉的定义,程序,常见问题,联系方式",
                en: "SUMMARY OF COMPLAINTS PROCEDURE,INTRODUCTION,INTERPRETATION OF TERMS,SCOPE OF THE COMPLAINTS HANDLING PROCEDURE,DEFINITION OF A COMPLAINT,PROCEDURE,FAQs,CONTACTS",
                vi: "TÓM TẮT QUY TRÌNH GIẢI QUYẾT PHÀN NÀN,GIỚI THIỆU,GIẢI THÍCH CÁC ĐIỀU KHOẢN,PHẠM VI THỦ TỤC XỬ LÝ KHIẾU NẠI,ĐỊNH NGHĨA KHIẾU NẠI,QUY TRÌNH,FAQs,LIÊN HỆ",
                "zh-Hant": "投訴程序概述,序言,條款解釋,投訴處理程序的範圍,投訴的定義,程序,常見問題,聯系方式",
                "id": "SUMMARY OF COMPLAINTS PROCEDURE,Introduction,INTERPRETATION OF TERMS,SCOPE OF THE COMPLAINTS HANDLING PROCEDURE,DEFINITION OF A COMPLAINT,PROCEDURE,FAQs,CONTACTS",
                "es": "SUMARIO PROCEDIMIENTO RECLAMACIONES,Introducción,INTERPRETACIÓN DE LOS TÉRMINOS,ALCANCE PROCEDIMIENTO RESOLUCIÓN RECLAMACIONES,DEFINICIÓN DE UNA QUEJA,PROCEDIMIENTO,PP.FF,CONTACTOS",
                "pt-BR": "RESUMO DO PROCEDIMENTO DE RECLAMAÇÕES,Introdução,Interpretação dos Termos,ÂMBITO DO PROCEDIMENTO DE MANIPULAÇÃO DE RECLAMAÇÕES,DEFINIÇÃO DE UMA QUEIXA,PROCEDIMENTO,FAQs,Contatos",
                "ar": "ملخص إجراءات الشكاوي,مقدمة,تفسير المصطلحات,نطاق إجراءات التعامل مع الشكاوي,تعريف الشكوى,الإجراءات,الأسئلة المتكررة,جهات الاتصال"
            }
        };
        $scope.tabList = [];
        $scope.showScrollTop = false;

        setTabList();

        $(window).scroll(function () {
            $scope.$apply(function () {
                if ($(window).scrollTop() == 0) {
                    $scope.showScrollTop = false;
                } else {
                    $scope.showScrollTop = true;
                }   
            });
        });

        function setTabList () {
            // console.log(lang.currentLanguage());
            var lst = agreementList[$scope.listType][lang.currentLanguage()] ? agreementList[$scope.listType][lang.currentLanguage()].split(',') : agreementList[$scope.listType]["en"].split(',');
            angular.forEach(lst, function (value, index) {
                $scope.tabList.push({
                    title: value,
                    link: 'agreement'+index
                });
            });
        }

        $scope.toTop = function () {
            $("body,html").animate({ scrollTop: 0 }, 200);
        };
    }
})();