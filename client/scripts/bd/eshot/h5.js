;(function () {
  var page = $(".bd_eshot").attr("data-page");

  var pageInfo = {
    africa: {
      title: "Trade on a sleeker, smarter and highly-intuitive app",
      btnLive: "Open a live account",
      btnDemo: "Demo Account",
      btnHref: "/download?D_InvestingAFeshot=013",
      cont: "We have combined cutting-edge technology with convenience to ensure users can access global markets on a simple, sophisticated app that’s tailored for all traders. Our copy-trading options, and competitive Master trader commissions are accessible, transparent and simple.",
      icon1: "Trade FX globally",
      icon2: "Your choice of markets, the way you want to trade",
      icon3: "Innovative, easy to follow copy-trading options",
      icon4: "SCB and FCA regulated",
      icon5: "Efficient cash depositing and withdrawal mode",
      icon6: "Powered by blockchain",
      download: "Download the app today",
      footer: "Trading CFDs involves risk and can result in loss of your capit"
    },
    vietnam: {
      title: "Giao dịch trên một ứng dụng đẹp hơn, thông minh hơn, trực quan hơn",
      btnLive: "Mở tài khoản thật",
      btnDemo: "Tài khoản Trải nghiệm",
      btnHref: "/download?D_InvestingVNeshot=008",
      cont: "Chúng tôi đã kết hợp sự tiến bộ công nghệ và sự tiện ích để đảm bảo cho người dùng có thể truy cập và điều chỉnh ứng dụng giao dịch thị trường tài chính toàn cầu một cách đơn giản và tinh vi nhất. Việc tùy chọn sao chép giao dịch của chúng tôi cũng như hoa hồng cạnh tranh của các chuyên gia giao dịch sẽ được truy cập, đơn giản và minh bạch.",
      icon1: "Giao dịch ngoại hối toàn cầu",
      icon2: "Hãy giao dịch trong thị trường bạn muốn",
      icon3: "Quyền chọn Copy-trading đơn giản, sáng tạo",
      icon4: "Theo quy định SCB và FCA",
      icon5: "Gửi và rút tiền nhanh chóng, hiệu quả",
      icon6: "Nền tảng công nghệ BlockChain",
      download: "Tải ứng dụng ngay hôm nay",
      footer: "Giao dịch CFDs có thể rủi ro đến nguồn vốn của bạn"
    },
    indonesia: {
      title: "Trading melalui aplikasi yang canggih, pintar dan berintuitif tinggi",
      btnLive: "Buka Akun Live",
      btnDemo: "Akun Demo",
      btnHref: "/download?D_InvestingIDeshot=009",
      cont: "Kami telah menggabungkan teknologi mutakhir dengan kenyamanan trading untuk memastikan bahwa setiap pengguna kami dapat mengakses pasar dunia dengan mudah melalui aplikasi yang khusus didesain untuk semua trader.. Pilih copy-trading, serta komisi Master trader sangat mudah untuk diakses, transparan dan sederhana.",
      icon1: "Trading FX secara global",
      icon2: "Berbagai pilihan Pasar, bebas bertransaksi dengan metode apa saja",
      icon3: "Pilihan copy-trading yang inovatif dan mudah digunakan",
      icon4: "Teregulasi SCB dan FCA",
      icon5: "Metode deposit dan penarikan yang efisien",
      icon6: "Didukung oleh teknologi Blockchain",
      download: "Unduh aplikasinya sekarang juga",
      footer: "Trading CFD memiliki risiko dan dapat menghilangkan modal anda"
    },
    latam: {
      title: "Opere en una app más elegante, inteligente y altamente intuitiva",
      btnLive: "Abrir una cuenta",
      btnDemo: "Abrir una cuenta Demo",
      btnHref: "/download?D_InvestingLAeshot=010",
      cont: "cceden a los mercados globales en una aplicación simple y sofisticada que se adapta a todos los traders. Nuestras opciones de Copy Trading y las comisiones competitivas de Master Trader son accesibles, transparentes y simples.",
      icon1: "Trade FX a nivel mundial",
      icon2: "Su elección de mercados, la forma en que desea operar",
      icon3: "Opciones de trading fáciles de copiar e innovadoras",
      icon4: "Regulado por SCB e FCA",
      icon5: "Modo eficiente de depósito y retiro de dinero",
      icon6: "Impulsado por blockchain",
      download: "Descargue la aplicación ahora",
      footer: "El trading de CFD implica riesgos y puede resultar en la pérdida de su capital"
    },
    brazil: {
      title: "Opere en um app mais elegante, inteligente e altamente intuitivo",
      btnLive: "Abrir uma conta ativa",
      btnDemo: "Abrir uma conta Demo",
      btnHref: "/download?D_InvestingBReshot=011",
      cont: "Combinamos tecnologia de ponta para garantir que os usuários possam acessar os mercados globais em um aplicativo simples e sofisticado que se adapta a todos os comerciantes. Nossas opções de negociação de cópias e comissões competitivas do Master Trader são acessíveis, transparentes e simples. ",
      icon1: "Negocie FX globalmente",
      icon2: "Sua escolha de mercados, a maneira como você deseja operar",
      icon3: "Opções de negociação inovadoras e fáceis de seguir",
      icon4: "Regulamentado por SCB e FCA",
      icon5: "Modo eficiente de depósito e retirada de dinheiro",
      icon6: "Acionado por blockchain",
      download: "Baixe aplicativo agora",
      footer: "A negociação de CFDs envolve riscos e pode resultar na perda de seu capital"
    },
    mena: {
      title: "تداول على تطبيق أكثر تميزاً",
      btnLive: "حساب تجريبي",
      btnDemo: "افتح حساب حقيقي",
      btnHref: "/download?D_InvestingMENAeshot=012",
      cont: "لقد جمعنا بين أحدث التقنيات والراحة لضمان وصول المستخدمين إلى الأسواق العالمية من خلال تطبيق بسيط ومتطور مصمم خصيصًا لجميع المتداولين. خيارات النسخ بالتداول لدينا ، ولجان المتداولين الرئيسيين التنافسيين يمكن الوصول إليها وشفافة وبسيطة",
      icon1: "اختيارك للأسواق ، بالطريقة التي تريد التداول بها",
      icon2: "تداول الفوركس على مستوى العالم",
      icon3: "إشراف ورقابة من جانب هيئة FCA و SCB",
      icon4: "خيارات نسخ التداول مبتكرة وسهلة المتابعة",
      icon5: "مدعوم من تقنية البلوكشين",
      icon6: "كفاءة الإيداع النقدي ووضع السحب",
      download: "قم اليوم بتحميل التطبيق",
      footer: "ينطوي تداول عقود الفروقات على مخاطر ويمكن أن يؤدي إلى خسارة أموالك"
    }
  }

  $(".title").html(pageInfo[page].title);
  $(".btn_live").html(pageInfo[page].btnLive);
  $(".btn_demo").html(pageInfo[page].btnDemo);
  $(".btn_account").attr("href", pageInfo[page].btnHref);
  $(".content").html(pageInfo[page].cont);
  $(".download_title").html(pageInfo[page].download);
  $(".footer").html(pageInfo[page].footer);
  $(".list .info").addClass(page);
  $(".footer").addClass(page);

  $.each($(".list .info"), function (index, val) {
    $(val).html(pageInfo[page][$(val).attr("data-icon")]);
  })

  if (page === 'mena') {
    $(".bd_eshot").attr("dir", "rtl");
  }
})();