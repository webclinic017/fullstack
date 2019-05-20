;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = [];

    function langData() {

        var lang_data = {
            "_comment_data": {
                "en": "this is comments, No translation required -- angularjs",
                "zh": "",
                "zh-Hant": "",
                "vi": "",
                "id": "",
                "es": "",
                "pt-BR": "this is comments, No translation required -- angularjs"
            },
            "china": {
                "zh": "中国",
                "en": "China",
                "vi": "Trung Quốc",
                "zh-Hant": "中國",
                "id": "China",
                "es": "China",
                "pt-BR": "China"
            },
            "footlang": {
                "zh": "简体中文",
                "en": "English",
                "vi": "Tiếng Việt",
                "zh-Hant": "繁體中文",
                "id": "Indonesia",
                "es": "English",
                "pt-BR": "Português"
            },
            "fuzhirenshu": {
                "en": "Copiers",
                "zh": "复制人数",
                "vi": "Người sao chép",
                "zh-Hant": "復制人數",
                "id": "Pengikut",
                "es": "Copiers",
                "pt-BR": "Copiadoras"
            },
            "password": {
                "en": "Password",
                "zh": "密码",
                "vi": "Mật Khẩu",
                "zh-Hant": "密碼",
                "id": "Kata Sandi",
                "es": "Contraseña",
                "pt-BR": "Senha"
            },
            "username": {
                "en": "Username",
                "zh": "昵称",
                "vi": "Tên Người dùng",
                "zh-Hant": "昵稱",
                "id": "Nama Pengguna",
                "es": "Nombre usuario",
                "pt-BR": "Username"
            },
            "phone": {
                "en": "Phone",
                "zh": "手机号码",
                "vi": "Số điện thoại",
                "zh-Hant": "手機號碼",
                "id": "Telepon",
                "es": "Teléfono",
                "pt-BR": "telefone"
            },
            "email": {
                "en": "E-mail",
                "zh": "电子邮箱",
                "vi": "Thư điện tử",
                "zh-Hant": "電子郵箱",
                "id": "E-mail",
                "es": "E-mail",
                "pt-BR": "E-mail"
            },
            "verifycode": {
                "en": "Verification code",
                "zh": "验证码",
                "vi": "Mã xác nhận",
                "zh-Hant": "驗證碼",
                "id": "Kode Verifikasi",
                "es": "Código verificación",
                "pt-BR": "Código de verificação"
            },
            "register6": {
                "en": "Obtain verification code",
                "zh": "获取验证码",
                "vi": "Nhận Mã xác nhận",
                "zh-Hant": "獲取驗證碼",
                "id": "Dapatkan Kode verifikasi",
                "es": "Obtener Cód. Verificación",
                "pt-BR": "Obter o código de verificação"
            },
            "register8": {
                "en": "Please enter phone number",
                "zh": "请输入手机号",
                "vi": "Vui lòng nhập số điện thoại",
                "zh-Hant": "請輸入手機號",
                "id": "Silahkan masukkan nomor telepon",
                "es": "Por favor, introduzca número de teléfono",
                "pt-BR": "Por favor insira o número de telefone"
            },
            "register9": {
                "en": "Please enter the verification code",
                "zh": "请输入验证码",
                "vi": "Vui lòng nhập mã xác nhận",
                "zh-Hant": "請輸入驗證碼",
                "id": "Silahkan masukkan kode verifikasi",
                "es": "Por favor, introduzca código verificación",
                "pt-BR": "Por favor, insira o código de verificação"
            },
            "register11": {
                "en": "Please enter password",
                "zh": "请输入密码",
                "vi": "Vui lòng nhập mật khẩu",
                "zh-Hant": "請輸入密碼",
                "id": "Silahkan masukkan kata sandi",
                "es": "Por favor, introduzca contraseña",
                "pt-BR": "Por favor insira a senha"
            },
            "register13": {
                "en": "Registration means that you have agreed the relevant regulations",
                "zh": "注册即同意",
                "vi": "Đăng ký có nghĩa rằng bạn đã đồng ý với những quy định liên quan ",
                "zh-Hant": "註冊即同意",
                "id": "Dengan mendaftar artinya anda telah menyetujui syarat dan ketentuan yang berlaku ",
                "es": "Registro significa ha aceptado las regulaciones relevantes",
                "pt-BR": "Registro significa que você concordou com os regulamentos relevantes"
            },
            "register14": {
                "en": "Risk Disclosure Statement",
                "zh": "风险披露书",
                "vi": "Tuyên Bố Tiết Lộ Rủi Ro",
                "zh-Hant": "風險披露書",
                "id": "Peringatan Resiko",
                "es": "Declaración Divulgación Riesgo",
                "pt-BR": "Declaração de Divulgação de Risco"
            },
            "register15": {
                "en": "Declaration by Client",
                "zh": "客户声明",
                "vi": "Tuyên Bố Của Khách Hàng",
                "zh-Hant": "客戶聲明",
                "id": "Penyataan Klien",
                "es": "Declaración Cliente",
                "pt-BR": "Declaração do Cliente"
            },
            "register16": {
                "en": "Trading Notes for Users",
                "zh": "用户交易须知",
                "vi": "Sổ Tay Giao Dịch Của Người Dùng",
                "zh-Hant": "用戶交易須知",
                "id": "Catatan trading untuk Pengguna",
                "es": "Notas Trading para Usuarios",
                "pt-BR": "Notas de Negociação para Usuários"
            },
            "register20": {
                "en": "Register now to receive $200",
                "zh": "立即注册 领取$1000",
                "vi": "Đăng ký ngay để nhận 200 đô la",
                "zh-Hant": "立即註冊 領取$1000",
                "id": "Daftar sekarang dan dapatkan 200 $",
                "es": "Regístrese ahora y reciba $200",
                "pt-BR": "Registre-se agora para receber US $ 200"
            },
            "register18": {
                "en": "Registered?",
                "zh": "已有账户？",
                "vi": "Bạn đã đăng ký?",
                "zh-Hant": "已有賬戶？",
                "id": "Daftar?",
                "es": "¿Registrado?",
                "pt-BR": "Registrado?"
            },
            "register19": {
                "en": "Log in now",
                "zh": "立即登录",
                "vi": "Đăng nhập ngay",
                "zh-Hant": "立即登錄",
                "id": "Masuk",
                "es": "Ingresar ahora",
                "pt-BR": "Conecte-se agora"
            },
            "traderSummary15": {
                "en": "No Data",
                "zh": "无数据",
                "vi": "Không dữ liệu",
                "zh-Hant": "無數據",
                "id": "Data tidak tersedia",
                "es": "No Data",
                "pt-BR": "sem dados"
            },
            "HoldingTrades1": {
                "en": "Operation",
                "zh": "操作",
                "vi": "Hoạt động",
                "zh-Hant": "操作",
                "id": "Transaksi",
                "es": "Operación",
                "pt-BR": "Operação"
            },
            "HoldingTrades2": {
                "en": "Open price",
                "zh": "开仓价",
                "vi": "Giá Mở",
                "zh-Hant": "開倉價",
                "id": "Harga buka",
                "es": "Precio Apertura",
                "pt-BR": "Preço de abertura"
            },
            "HoldingTrades3": {
                "en": "Current Price",
                "zh": "现价",
                "vi": "Giá Hiện Tại",
                "zh-Hant": "現價",
                "id": "Harga saat ini",
                "es": "Precio Actual",
                "pt-BR": "Preço atual"
            },
            "HoldingTrades4": {
                "en": "Holding Time",
                "zh": "持仓时间",
                "vi": "Thời gian chờ",
                "zh-Hant": "持倉時間",
                "id": "Lamanya posisi yang dibuka",
                "es": "Tiempo posición",
                "pt-BR": "Tempo de espera"
            },
            "HoldingTrades5": {
                "en": "Spread",
                "zh": "点数",
                "vi": "Spread",
                "zh-Hant": "點數",
                "id": "Spread",
                "es": "Spread",
                "pt-BR": "Spread"
            },
            "HoldingTrades6": {
                "en": "Profit",
                "zh": "收益",
                "vi": "Lợi nhuận",
                "zh-Hant": "收益",
                "id": "Laba",
                "es": "Beneficios",
                "pt-BR": "Lucro"
            },
            "HoldingTrades9": {
                "en": "No Data",
                "zh": "无数据",
                "vi": "Không dữ liệu",
                "zh-Hant": "無數據",
                "id": "Data tidak tersedia",
                "es": "No Data",
                "pt-BR": "sem dados"
            },
            "HoldingTrades10": {
                "en": "Note：Trades won't be shown here before 7 days.",
                "zh": "注：当前交易仅显示高手最近一周持仓订单。",
                "vi": "Lưu ý: Những giao dịch sẽ không được hiển thị trước 7 ngày.",
                "zh-Hant": "註：當前交易僅顯示高手最近壹周持倉訂單。",
                "id": "Catatan: Transaksi tidak akan ditampilkan sebelum 7 hari",
                "es": "Nota：Los Trades no se mostrarán aquí antes de 7 días.",
                "pt-BR": "Nota: As negociações não serão exibidas aqui antes de 7 dias."
            },
            "TradingHistory1": {
                "en": "Operation",
                "zh": "操作",
                "vi": "Hoạt động",
                "zh-Hant": "操作",
                "id": "Transaksi",
                "es": "Operación",
                "pt-BR": "Operação"
            },
            "TradingHistory2": {
                "en": "Open price",
                "zh": "开仓价",
                "vi": "Giá Mở",
                "zh-Hant": "開倉價",
                "id": "Harga buka",
                "es": "Precio apertura",
                "pt-BR": "Preço de abertura"
            },
            "TradingHistory3": {
                "en": "Close price",
                "zh": "平仓价",
                "vi": "Giá Đóng",
                "zh-Hant": "平倉價",
                "id": "Harga saat posisi ditutup",
                "es": "Precio cierre",
                "pt-BR": "Preço de fechamento"
            },
            "TradingHistory4": {
                "en": "Holding Time",
                "zh": "持仓时间",
                "vi": "Thời gian chờ",
                "zh-Hant": "持倉時間",
                "id": "Lamanya posisi yang dibuka",
                "es": "Tiempo posición",
                "pt-BR": "Tempo de espera"
            },
            "TradingHistory5": {
                "en": "Spread",
                "zh": "点数",
                "vi": "Spread",
                "zh-Hant": "點數",
                "id": "Spread",
                "es": "Spread",
                "pt-BR": "Spread"
            },
            "TradingHistory6": {
                "en": "Profit",
                "zh": "收益",
                "vi": "Lợi nhuận",
                "zh-Hant": "收益",
                "id": "Laba",
                "es": "Beneficios",
                "pt-BR": "Lucro"
            },
            "TradingHistory9": {
                "en": "No Data",
                "zh": "无数据",
                "vi": "Không dữ liệu",
                "zh-Hant": "無數據",
                "id": "Data tidak tersedia",
                "es": "No Data",
                "pt-BR": "sem dados"
            },
            "TradingHistory10": {
                "en": "ago",
                "zh": "前",
                "vi": "Cách đây",
                "zh-Hant": "前",
                "id": "Sebelumnya",
                "es": " ",
                "pt-BR": "atrás"
            },
            "actLogin1": {
                "zh": "快捷登录",
                "en": "Fast Login",
                "vi": "Đăng nhập nhanh",
                "zh-Hant": "快捷登錄",
                "id": "Masuk",
                "es": "Ingreso rápido",
                "pt-BR": "Login rápido"
            },
            "actLogin2": {
                "zh": "账号密码登录",
                "en": "Password Login",
                "vi": "Mật khẩu đăng nhập",
                "zh-Hant": "賬號密碼登錄",
                "id": "Kata sandi",
                "es": "Ingreso contraseña",
                "pt-BR": "Senha de acesso"
            },
            "actLogin3": {
                "zh": "请输入手机号码",
                "en": "Please Type in the Phone Number",
                "vi": "Vui lòng nhập số điện thoại",
                "zh-Hant": "請輸入手機號碼",
                "id": "Silahkan masukkan nomor telepon",
                "es": "Por favor, Escriba el Número de Teléfono",
                "pt-BR": "Favor digitar o Número de Telefone"
            },
            "actLogin4": {
                "zh": "请输入验证码",
                "en": "Please enter verification code",
                "vi": "Vui lòng nhập mã xác nhận",
                "zh-Hant": "請輸入驗證碼",
                "id": "Silahkan masukkan kode verifikasi",
                "es": "Por favor, introduzca código verificación",
                "pt-BR": "Favor inserir o código de digitação"
            },
            "actLogin10": {
                "zh": "提交代表您已阅读并同意",
                "en": "I accept the ",
                "vi": "Tôi đồng ý ",
                "zh-Hant": "提交代表您已閱讀並同意",
                "id": "Saya menerima ",
                "es": "Acepto el ",
                "pt-BR": "Eu aceito que"
            },
            "actLogin11": {
                "zh": "客户协议",
                "en": "Client Agreement",
                "vi": "Hợp Đồng Khách Hàng",
                "zh-Hant": "客戶協議",
                "id": "Perjanjian Klien",
                "es": "Acuerdo Cliente",
                "pt-BR": "Termos de condição"
            },
            "actLogin12": {
                "zh": "风险披露声明",
                "en": "Risk Disclosure",
                "vi": "Tuyên Bố Rủi Ro",
                "zh-Hant": "風險披露聲明",
                "id": "Peringatan Resiko",
                "es": "Divulgación del Riesgo",
                "pt-BR": "Divulgação de Risco"
            },
            "actLogin13": {
                "zh": "隐私政策",
                "en": "Privacy Policy ",
                "vi": "Điều Khoản Cá Nhân ",
                "zh-Hant": "隱私政策",
                "id": "Kebijakan Privasi",
                "es": "Política de Privacidad ",
                "pt-BR": "Política de Privacidade"
            },
            "actLogin14": {
                "zh": "法律声明",
                "en": "Legal Notices",
                "vi": "Thông Báo Pháp Lý",
                "zh-Hant": "法律聲明",
                "id": "Pemberitahuan Hukum",
                "es": "Notas Legales",
                "pt-BR": "Termos legais"
            },
            "actLogin15": {
                "zh": "及其他",
                "en": "and other ",
                "vi": "Và cái khác ",
                "zh-Hant": "及其他",
                "id": "Dan lainnya",
                "es": "y otros ",
                "pt-BR": "e outros"
            },
            "actLogin16": {
                "zh": "请输入正确的手机号码",
                "en": "Please Type in the correct Phone Number",
                "vi": "Vui lòng Nhập đúng số điện thoại",
                "zh-Hant": "請輸入正確的手機號碼",
                "id": "silahkan masukkan nomor telepon yang benar",
                "es": "Por favor, Escriba el Número de Teléfono correcto",
                "pt-BR": "Favor digitar o Número de Telefone correto"
            },
            "actLogin17": {
                "zh": "手机号",
                "en": "Phone",
                "vi": "Số điện thoại",
                "zh-Hant": "手機號",
                "id": "Telepon",
                "es": "Teléfono",
                "pt-BR": "telefone"
            },
            "actLogin19": {
                "zh": "请填写完整信息",
                "en": "Please Type in the complete information",
                "vi": "Vui lòng Nhập để hoàn thành thông tin",
                "zh-Hant": "請填寫完整信息",
                "id": "Mohon masukkan informasi yang lengkap",
                "es": "Por favor, Escriba la información completa",
                "pt-BR": "Favor digitar a informação completa"
            },
            "actLogin20": {
                "zh": "设置密码",
                "en": "Set Password",
                "vi": "Đặt Mật khẩu",
                "zh-Hant": "設置密碼",
                "id": "Atur kata sandi",
                "es": "Fijar Contraseña",
                "pt-BR": "Configurar senha"
            },
            "actLogin21": {
                "zh": "请输入密码",
                "en": "Please Type in the Password",
                "vi": "Vui lòng nhập mật khẩu",
                "zh-Hant": "請輸入密碼",
                "id": "Silahkan masukkan kata sandi",
                "es": "Por favor, Escriba la Contraseña ",
                "pt-BR": "Por favor digite a senha"
            },
            "actLogin22": {
                "zh": "密码",
                "en": "Password",
                "vi": "Mật khẩu",
                "zh-Hant": "密碼",
                "id": "Kata sandi",
                "es": "Contraseña",
                "pt-BR": "Senha"
            },
            "actLogin23": {
                "zh": "请为您的账户设置密码，6-15位字母、数字或符号组合",
                "en": "Please set a password for your account，6-15 bit of Letters, numbers, or combinations of symbols",
                "vi": "Vui lòng đặt mật khẩu cho tài khoản của bạn ， 6-15 bit chữ cái, số hoặc kết hợp các ký hiệu",
                "zh-Hant": "請為您的賬戶設置密碼，6-15位字母、數字或符號組合",
                "id": " Silahkan masukkan kata sandi untuk akun anda, kombinasi dari 6-15 huruf, angka dan simbol ",
                "es": "Por favor, cree una contraseña para su cuenta，use una combinación de 6-15 letras, números y símbolos",
                "pt-BR": "Favor configurar uma senha para sua conta, 6-15 num misto de letras, número ou combinações de símbolos"
            },
            "actLogin28": {
                "zh": "找回密码",
                "en": "Retrieve the password",
                "vi": "Truy xuất mật khẩu",
                "zh-Hant": "找回密碼",
                "id": "Dapatkan Kata sandi",
                "es": "Recuperar contraseña",
                "pt-BR": "Recuperar a senha"
            },
            "actLogin29": {
                "zh": "下一步",
                "en": "Next",
                "vi": "Tiếp theo",
                "zh-Hant": "下壹步",
                "id": "Selanjutnya",
                "es": "Siguiente",
                "pt-BR": "Próximo"
            },
            "actLogin29_1": {
                "zh": "上一步",
                "en": "Prev",
                "vi": "Quay lại",
                "zh-Hant": "上壹步",
                "id": "Sebelumnya",
                "es": "Prev",
                "pt-BR": "Anterior"
            },
            "actLogin30": {
                "zh": "完成修改",
                "en": "Submit",
                "vi": "Gửi đi",
                "zh-Hant": "完成修改",
                "id": "Kirim",
                "es": "Enviar",
                "pt-BR": "Enviar"
            },
            "actLogin31": {
                "zh": "新密码设置成功",
                "en": "The new password is set up successfully",
                "vi": "Mật khẩu mới đã được đặt thành công",
                "zh-Hant": "新密碼設置成功",
                "id": "Kata sandi baru berhasil di perbarui",
                "es": "Nueva contraseña fijada correctamente",
                "pt-BR": "A nova senha foi configurada com sucesso"
            },
            "actLogin32": {
                "zh": "重新登录",
                "en": "Re-register",
                "vi": "Đăng ký lại",
                "zh-Hant": "重新登錄",
                "id": "Daftar ulang",
                "es": "Re- registro",
                "pt-BR": "Re-registrar"
            },
            "actLogin33": {
                "zh": "完成注册",
                "en": "Complete",
                "vi": "Hoàn thành",
                "zh-Hant": "完成註冊",
                "id": "Selesai",
                "es": "Completar",
                "pt-BR": "Completo"
            },
            "actLogin34": {
                "zh": "跳过",
                "en": "Jump Over",
                "vi": "Nhảy qua",
                "zh-Hant": "跳過",
                "id": "Lewati",
                "es": "Saltar",
                "pt-BR": "Pular para"
            },
            "_comment_center": {
                "en": "this is comments, No translation required -- 通行证个人中心",
                "zh": "",
                "zh-Hant": "",
                "vi": "",
                "id": "",
                "es": "",
                "pt-BR": ""
            },
            "tigerWitID": {
                "title": {
                    "zh": "通行证账号",
                    "en": "TigerWitID",
                    "vi": "IDTigerWit",
                    "zh-Hant": "通行證帳號",
                    "id": "ID TigerWit",
                    "es": "TigerWit ID",
                    "pt-BR": "TigerWitID"
                },
                "titleM": {
                    "zh": "通行证账号：",
                    "en": "TigerWitID: ",
                    "vi": "IDTigerWit: ",
                    "zh-Hant": "通行證帳號：",
                    "id": "ID TigerWit: ",
                    "es": "TigerWit ID",
                    "pt-BR": "TigerWitID:"
                },
                "login": {
                    "login": {
                        "zh": "登录",
                        "en": "Login",
                        "vi": "Đăng nhập",
                        "zh-Hant": "登錄",
                        "id": "Masuk",
                        "es": "Ingresar",
                        "pt-BR": "Login"
                    },
                    "walletRecord": {
                        "zh": "钱包记录",
                        "en": "Wallet record",
                        "vi": "Hồ Sơ ví",
                        "zh-Hant": "錢包記錄",
                        "id": "Riwayat Dompet",
                        "es": "Historial Wallet",
                        "pt-BR": "Histórico da carteira"
                    },
                    "mt4Account": {
                        "zh": "MT4账户",
                        "en": "MT4 account",
                        "vi": "Tài khoản MT4",
                        "zh-Hant": "MT4帳戶",
                        "id": "Akun MT4",
                        "es": "Cuenta MT4",
                        "pt-BR": "Conta MT4"
                    },
                    "country": {
                        "zh": "国家",
                        "en": "Country",
                        "vi": "Quốc gia",
                        "zh-Hant": "國家",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País"
                    },
                    "passwordLogin": {
                        "zh": "密码登录",
                        "en": "Password Login",
                        "vi": "Mật khẩu",
                        "zh-Hant": "密碼登錄",
                        "id": "Kata sandi",
                        "es": "Ingreso contraseña",
                        "pt-BR": "Senha de acesso"
                    },
                    "enterPhoneNumber": {
                        "zh": "请输入手机号",
                        "en": "Please enter phone number",
                        "vi": "Vui lòng nhập số điện thoại",
                        "zh-Hant": "請輸入手機號",
                        "id": "Masukkan nomor telepon",
                        "es": "Por favor, introduzca número de teléfono",
                        "pt-BR": "Por favor insira o número de telefone"
                    },
                    "verifyWithEmail": {
                        "zh": "邮箱获取验证码",
                        "en": "Verify with email",
                        "vi": "Xác nhận bằng email",
                        "zh-Hant": "郵箱獲取驗證碼",
                        "id": "verifikasi melalui email",
                        "es": "Verificar con email",
                        "pt-BR": "Verificar com email"
                    },
                    "verifyWithPhoneNumber": {
                        "zh": "手机号获取验证码",
                        "en": "Verify with phone number",
                        "vi": "Xác nhận bằng số điện thoại",
                        "zh-Hant": "手機號獲取驗證碼",
                        "id": "verifikasi melalui nomor telepon",
                        "es": "Verificar con número de teléfono",
                        "pt-BR": "Verificar com número de telefone"
                    },
                    "verificationCode": {
                        "zh": "请输入验证码",
                        "en": "Please enter verification code",
                        "vi": "Vui lòng nhập mã xác nhận",
                        "zh-Hant": "請輸入驗證碼",
                        "id": "Silahkan masukkan kode verifikasi",
                        "es": "Por favor, introduzca código verificación",
                        "pt-BR": "Favor inserir o código de digitação"
                    },
                    "sendSMS": {
                        "zh": "获取验证码",
                        "en": "Send code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código"
                    },
                    "sendCode": {
                        "zh": "获取验证码",
                        "en": "Send code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código"
                    },
                    "keepMeLogin": {
                        "zh": "记住登录状态",
                        "en": "Keep me login",
                        "vi": "Nhớ đăng nhập",
                        "zh-Hant": "記住登錄狀態",
                        "id": "Tetap masuk",
                        "es": "Mantener ingresado",
                        "pt-BR": "Mantenha-me logado"
                    },
                    "enterAccountPhoneNo": {
                        "zh": "请输入您的账号或手机号",
                        "en": "Enter account/phone No",
                        "vi": "Nhập tài khoản/ số điện thoại",
                        "zh-Hant": "請輸入您的帳號或手機號",
                        "id": "Masukkan nomor akun/telepon",
                        "es": "Intro cuenta/nº teléfono",
                        "pt-BR": "Inserir conta/número de telefone"
                    },
                    "enterAccountPhoneNoOrEmail": {
                        "zh": "请输入您的账号、手机号或邮箱",
                        "en": "Enter account/phone No. or email",
                        "vi": "Nhập tài khoản/ số điện thoại hoặc email",
                        "zh-Hant": "請輸入您的帳號、手機號或郵箱",
                        "id": "Masukkan nomor akun/telepon atau email",
                        "es": "Intro cuenta/nº teléfono o email",
                        "pt-BR": "Inserir conta/número de telefone ou email"
                    },
                    "register": {
                        "zh": "注册",
                        "en": "Register",
                        "vi": "Đăng ký",
                        "zh-Hant": "註冊",
                        "id": "Daftar",
                        "es": "Registro",
                        "pt-BR": "Registro"
                    },
                    "tip1_1": {
                        "zh": "提交注册代表您已阅读并同意",
                        "en": "By clicking 'Register' you confirm that you have read and agree with ",
                        "vi": "Bằng cách nhấn nút ‘Đăng Ký’ bạn xác nhận rằng bạn đa đọc và đồng ý với ",
                        "zh-Hant": "提交註冊代表您已閱讀並同意",
                        "id": "Dengan menekan tombol “Daftar”, anda mengakui bahwa anda telah membaca dan setuju dengan",
                        "es": "Al hacer click ”Aceptar” confirma que ha leído y aceptado ",
                        "pt-BR": "Ao clicar em \"Registrar\" você confirma que leu e concorda com os"
                    },
                    "tip1_2": {
                        "zh": "客户协议",
                        "en": "Client Agreement",
                        "vi": "Hợp Đồng khách hàng",
                        "zh-Hant": "客戶協議",
                        "id": "Perjanjian Klien",
                        "es": "Acuerdo Cliente",
                        "pt-BR": "Termos de condição"
                    },
                    "tip1_3": {
                        "zh": "风险披露声明",
                        "en": "Risk Disclosure Notice",
                        "vi": "Thông Báo Tiết Lộ Rủi Ro",
                        "zh-Hant": "風險披露聲明",
                        "id": "Peringatan Resiko",
                        "es": "Notificación Divulgación Riesgo",
                        "pt-BR": "Termos de risco"
                    },
                    "tip1_4": {
                        "zh": "隐私政策",
                        "en": "Privacy Policy ",
                        "vi": "Chính Sách Cá Nhân ",
                        "zh-Hant": "隱私政策",
                        "id": "Kebijakan Privasi",
                        "es": "Política de Privacidad ",
                        "pt-BR": "Política de Privacidade"
                    },
                    "tip1_5": {
                        "zh": "及其他",
                        "en": "and any other ",
                        "vi": "Và nhũng cái khác ",
                        "zh-Hant": "及其他",
                        "id": "dan yang lain",
                        "es": "y cualquier otra ",
                        "pt-BR": "e quaisquer outros"
                    },
                    "tip1_6": {
                        "zh": "法律声明",
                        "en": "Legal Notices",
                        "vi": "Thông Báo Pháp Lý",
                        "zh-Hant": "法律聲明",
                        "id": "Pemberitahuan Hukum",
                        "es": "Notificación Legal",
                        "pt-BR": "Termos legais"
                    },
                    "alreadyHas": {
                        "zh": "已有TigerWit账号？",
                        "en": "Already have an account? ",
                        "vi": "Bạn đã sẵn sang để tạo tài khoản? ",
                        "zh-Hant": "已有TigerWit帳號？",
                        "id": "Sudah memiliki akun?",
                        "es": "¿Tiene ya una cuenta? ",
                        "pt-BR": "Já tem uma conta?"
                    },
                    "registerViaEmail": {
                        "zh": "切换到邮箱",
                        "en": "Register via email",
                        "vi": "Đăng ký qua email",
                        "zh-Hant": "切換到郵箱",
                        "id": "Daftar melalui email",
                        "es": "Registro vía email",
                        "pt-BR": "Cadastrar via email"
                    },
                    "registerViaPhoneNumber": {
                        "zh": "切换到手机号",
                        "en": "Register via phone number",
                        "vi": "Đăng ký qua số điện thoại",
                        "zh-Hant": "切換到手機號",
                        "id": "Daftar melalui nomor telepon",
                        "es": "Registro vía número teléfono",
                        "pt-BR": "Cadastrar via número de telefone"
                    },
                    "phoneNumExists": {
                        "zh": "手机号已存在",
                        "en": "The phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號已存在",
                        "id": "Nomor telepon ini telah terdaftar",
                        "es": "El número de teléfono ya existe",
                        "pt-BR": "O número de telefone já está cadastrado"
                    },
                    "tip2": {
                        "zh": "该手机号已存在，请更换手机号进行注册或前往登录。",
                        "en": "This phone number already exists. Please use another valid phone number for registration.",
                        "vi": "Số điện thoại này đã tồn tại. Vui lòng sử dụng một số điện thoại có hiệu lực để đăng ký.",
                        "zh-Hant": "該手機號已存在，請更換手機號進行註冊或前往登錄。",
                        "id": "Nomor telepon ini telah terdaftar, silahkan masukkan nomor telepon yang lain.",
                        "es": "Este número de teléfono ya existe. Por favor, use otro móvil válido para registro.",
                        "pt-BR": "Este número de telefone já existe. Favor usar outro número de telefone válido para registrar"
                    },
                    "setPasswordToStart": {
                        "zh": "设置密码，开启您的交易之路",
                        "en": "Set password to get started",
                        "vi": "Đặt mật khẩu để bắt đầu",
                        "zh-Hant": "設置密碼，開啟您的交易之路",
                        "id": "Atur Kata sandi untuk memulai",
                        "es": "Fijar contraseña para iniciarse",
                        "pt-BR": "Defina senha para começar"
                    },
                    "setPassword": {
                        "zh": "密码",
                        "en": "Set password",
                        "vi": "Đặt mật khẩu",
                        "zh-Hant": "密碼",
                        "id": "Atur Kata sandi",
                        "es": "Fijar contraseña",
                        "pt-BR": "Configurar senha"
                    },
                    "confirmPassword": {
                        "zh": "请确认密码",
                        "en": "Confirm password",
                        "vi": "Xác nhận mật khẩu",
                        "zh-Hant": "請確認密碼",
                        "id": "Konfirmasi Kata sandi",
                        "es": "Confirmar contraseña",
                        "pt-BR": "Confirme sua senha"
                    },
                    "done": {
                        "zh": "完成",
                        "en": "Done",
                        "vi": "Hoàn thành",
                        "zh-Hant": "完成",
                        "id": "Selesai",
                        "es": "Hecho",
                        "pt-BR": "Sair"
                    },
                    "skip": {
                        "zh": "跳过",
                        "en": "Skip",
                        "vi": "Bỏ qua",
                        "zh-Hant": "跳過",
                        "id": "Lewati",
                        "es": "Saltar",
                        "pt-BR": "Pular"
                    },
                    "verificationCodeLogin": {
                        "zh": "验证码登录",
                        "en": "Code Login",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼登錄",
                        "id": "Kode Masuk",
                        "es": "Ingreso Código",
                        "pt-BR": "Código de login"
                    },
                    "enterPassword": {
                        "zh": "请输入密码",
                        "en": "Please enter password",
                        "vi": "Vui lòng nhập mật khẩu",
                        "zh-Hant": "請輸入密碼",
                        "id": "Silahkan masukkan Kata sandi",
                        "es": "Por favor, introduzca contraseña",
                        "pt-BR": "Por favor insira a senha"
                    },
                    "loginWithEmail": {
                        "zh": "切换到邮箱",
                        "en": "Login with email",
                        "vi": "Truy cập bằng email",
                        "zh-Hant": "切換到郵箱",
                        "id": "Masuk melalui email",
                        "es": "Ingreso con email",
                        "pt-BR": "Entre com o email"
                    },
                    "loginWithMobile": {
                        "zh": "切换到手机号",
                        "en": "Login with mobile",
                        "vi": "Truy cập bằng số điện thoại",
                        "zh-Hant": "切換到手機號",
                        "id": "Masuk melalui seluler",
                        "es": "Ingreso con móvil",
                        "pt-BR": "Entre com o celular"
                    },
                    "forgetPassword": {
                        "zh": "忘记密码？",
                        "en": "Forget password?",
                        "vi": "Quên mật khẩu",
                        "zh-Hant": "忘記密碼？",
                        "id": "Lupa Kata sandi?",
                        "es": "¿Ha olvidado su contraseña?",
                        "pt-BR": "Esqueceu a senha?"
                    },
                    "tip3": {
                        "zh": "已使用SSL加密技术保护您的网络安全",
                        "en": "The TigerWit network is secured with SSL encryption technology",
                        "vi": "Mạng TigerWit được bảo mật bằng công nghệ mã hóa SSL",
                        "zh-Hant": "已使用SSL加密技術保護您的網酪安全",
                        "id": " Jaringan TigerWit dilindungi oleh teknologi enkripsi SSL ",
                        "es": "La red TigerWit es segura con tecnología de encriptación SSL",
                        "pt-BR": "A rede TigerWit é protegida com tecnologia de encriptação SSL"
                    },
                    "tip4": {
                        "zh": "该手机号没有注册过Tigerwit账号",
                        "en": "This phone number has not been registered",
                        "vi": "Số điện thoại này đã được đăng ký",
                        "zh-Hant": "該手機號沒有註冊過Tigerwit帳號",
                        "id": "Nomor telepon ini belum terdaftar",
                        "es": "Este número de teléfono no ha sido registrado",
                        "pt-BR": "Este número de telefone não está registrado"
                    },
                    "tip5": {
                        "zh": "该邮箱没有注册过Tigerwit账号",
                        "en": "This email has not been registered",
                        "vi": "Email này đã được đăng ký",
                        "zh-Hant": "該郵箱沒有註冊過Tigerwit帳號",
                        "id": "Email ini belum terdaftar",
                        "es": "Este email no ha sido registrado",
                        "pt-BR": "Este email não está registrado"
                    },
                    "selectAreaCode": {
                        "zh": "请选择区号",
                        "en": "Please select area code",
                        "vi": "Vui lòng chọn mã khu vực",
                        "zh-Hant": "請選擇區號",
                        "id": "Silahkan pilih kode area",
                        "es": "Por favor, seleccione código área",
                        "pt-BR": "Por favor selecione o código de área"
                    },
                    "countryRegion": {
                        "zh": "国家/地区",
                        "en": "Country/Region",
                        "vi": "Quốc gia/ khu vực",
                        "zh-Hant": "國家/地區",
                        "id": "Negara/Daerah",
                        "es": "País/Región",
                        "pt-BR": "País/Região"
                    },
                    "enterEmail": {
                        "zh": "请输入邮箱",
                        "en": "Please enter email",
                        "vi": "Vui lòng nhập email",
                        "zh-Hant": "請輸入郵箱",
                        "id": "Silahkan masukkan email",
                        "es": "Por favor, introduzca email",
                        "pt-BR": "Por favor, digite seu email"
                    },
                    "phoneNumber": {
                        "zh": "手机号",
                        "en": "Phone number",
                        "vi": "số điện thoại",
                        "zh-Hant": "手機號",
                        "id": "Telepon",
                        "es": "Número teléfono",
                        "pt-BR": "Numero de telefone"
                    },
                    "email": {
                        "zh": "邮箱",
                        "en": "Email",
                        "vi": "Thư điện tử",
                        "zh-Hant": "郵箱",
                        "id": "Email",
                        "es": "Email",
                        "pt-BR": "Email"
                    },
                    "selectCountry": {
                        "zh": "请选择国家/地区",
                        "en": "Please select country/region",
                        "vi": "Vui lòng chọn quốc gia/ khu vực",
                        "zh-Hant": "請選擇國家/地區",
                        "id": "Silahkan pilih Negara/Daerah",
                        "es": "Por favor, seleccione país/región",
                        "pt-BR": "Por favor selecione País/região"
                    },
                    "enterCorrectEmail": {
                        "zh": "请输入有效邮箱",
                        "en": "Please enter a valid email address",
                        "vi": "Vui lòng chọn địa chỉ email có hiệu lực",
                        "zh-Hant": "請輸入有效郵箱",
                        "id": "Mohon masukkan alamat email yang benar",
                        "es": "Por favor, introduzca email válido",
                        "pt-BR": "Por favor, digite um email valido"
                    },
                    "countryCode": {
                        "zh": "(国家/国家代码)",
                        "en": "(country/country code)",
                        "vi": "Quốc gia/ mã quốc gia",
                        "zh-Hant": "(國家/國家代碼)",
                        "id": "Negara/kode negara",
                        "es": "(país/código país)",
                        "pt-BR": "(país/código do país)"
                    },
                    "password": {
                        "zh": "密码",
                        "en": "Password",
                        "vi": "Mật khẩu",
                        "zh-Hant": "密碼",
                        "id": "Kata sandi",
                        "es": "Contraseña",
                        "pt-BR": "Senha"
                    },
                    "confirmPasswordj": {
                        "zh": "确认密码",
                        "en": "Confirm password",
                        "vi": "Xác nhận mật khẩu",
                        "zh-Hant": "確認密碼",
                        "id": "Konfirmasi Kata sandi",
                        "es": "Confirmar contraseña",
                        "pt-BR": "Confirme sua senha"
                    },
                    "notHaveAccount": {
                        "zh": "还没有TigerWit账号？",
                        "en": "Don’t have an account? ",
                        "vi": "Bạn không có tài khoản? ",
                        "zh-Hant": "還沒有TigerWit帳號？",
                        "id": "Belum memiliki akun? ",
                        "es": "¿No tiene una cuenta? ",
                        "pt-BR": "Não tem uma conta?"
                    },
                    "verificationCodeSent": {
                        "zh": "验证码已发送",
                        "en": "The verification code has been sent",
                        "vi": "Mã xác nhận đã được gửi",
                        "zh-Hant": "驗證碼已發送",
                        "id": "Kode verifikasi telah terkirim",
                        "es": "El código de verificación ha sido enviado",
                        "pt-BR": "O código de verificação foi enviado."
                    },
                    "tip6_1": {
                        "zh": "我们已将验证码发送至",
                        "en": "We have sent the verification code to ",
                        "vi": "Chúng tôi đã gửi mã xác nhận đến ",
                        "zh-Hant": "我們已將驗證碼發送至",
                        "id": "Kami telah mengirim Kode verifikasi ",
                        "es": "Hemos enviado el código de verificación a  ",
                        "pt-BR": "Mandamos o código de verificação para"
                    },
                    "tip6_2": {
                        "zh": "邮箱",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "郵箱",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " "
                    },
                    "tip6_21": {
                        "zh": "手机号：",
                        "en": "phone number: ",
                        "vi": "Số điện thoại: ",
                        "zh-Hant": "手機號：",
                        "id": "telepon: ",
                        "es": "número teléfono: ",
                        "pt-BR": "número de telefone:"
                    },
                    "tip6_3": {
                        "zh": " 请注意查收。",
                        "en": ", please check.",
                        "vi": ", Vui lòng kiểm tra.",
                        "zh-Hant": " 請註意查收。",
                        "id": ", silahkan cek.",
                        "es": ", por favor, compruebe.",
                        "pt-BR": ", favor checar."
                    },
                    "tip7_1": {
                        "zh": " ",
                        "en": "The ",
                        "vi": " ",
                        "zh-Hant": " ",
                        "id": " ",
                        "es": "El ",
                        "pt-BR": "O"
                    },
                    "tip7_2": {
                        "zh": "手机号",
                        "en": "phone number ",
                        "vi": "Số điện thoại ",
                        "zh-Hant": "手機號",
                        "id": "Telepon ",
                        "es": "número de teléfono ",
                        "pt-BR": "número de telefone"
                    },
                    "tip7_21": {
                        "zh": "邮箱",
                        "en": "email ",
                        "vi": "Thư điện tử ",
                        "zh-Hant": "郵箱",
                        "id": "email ",
                        "es": "email ",
                        "pt-BR": "email"
                    },
                    "tip7_3": {
                        "zh": "未注册",
                        "en": "is not registered",
                        "vi": "Không được đăng ký",
                        "zh-Hant": "未註冊",
                        "id": "belum terdaftar",
                        "es": "no está registrado",
                        "pt-BR": "não está registrado"
                    },
                    "tip9_1": {
                        "zh": "该",
                        "en": "This ",
                        "vi": "Đây là ",
                        "zh-Hant": "該",
                        "id": " ",
                        "es": "Este ",
                        "pt-BR": "Este"
                    },
                    "tip9_3": {
                        "zh": "没有注册过 TigerWit 账号，前往注册？",
                        "en": "has not been registered",
                        "vi": "Đã không được đăng ký",
                        "zh-Hant": "沒有註冊過 TigerWit 帳號，前往註冊？",
                        "id": "ini belum terdaftar",
                        "es": "no ha sido registrado",
                        "pt-BR": "não foi registrado"
                    },
                    "goRegister": {
                        "zh": "去注册",
                        "en": "Register",
                        "vi": "Đăng ký",
                        "zh-Hant": "去註冊",
                        "id": "Daftar",
                        "es": "Registro",
                        "pt-BR": "Registro"
                    },
                    "passwordsEnteredDoNotMatch": {
                        "zh": "两次输入的密码不一致",
                        "en": "The passwords entered do not match",
                        "vi": "Mật khẩu mà bạn nhập không trùng khớp",
                        "zh-Hant": "兩次輸入的密碼不壹致",
                        "id": "Kata sandi yang dimasukkan salah",
                        "es": "Las contraseñas introducidas no coinciden",
                        "pt-BR": "As senha sinseridas não correspondem"
                    },
                    "goLogin": {
                        "zh": "去登录",
                        "en": "Login",
                        "vi": "Truy cập",
                        "zh-Hant": "去登錄",
                        "id": "Masuk",
                        "es": "Ingreso",
                        "pt-BR": "Login"
                    },
                    "tip8_1": {
                        "zh": "该",
                        "en": "This ",
                        "vi": "Đây là",
                        "zh-Hant": "該",
                        "id": "Ini",
                        "es": "Este ",
                        "pt-BR": "Este"
                    },
                    "tip8_2": {
                        "zh": "手机号",
                        "en": "phone number ",
                        "vi": "Số điện thoại",
                        "zh-Hant": "手機號",
                        "id": "Telepon",
                        "es": "número de teléfono ",
                        "pt-BR": "número de telefone"
                    },
                    "tip8_21": {
                        "zh": "邮箱",
                        "en": "email ",
                        "vi": "thư điện tử ",
                        "zh-Hant": "郵箱",
                        "id": "Email",
                        "es": "email ",
                        "pt-BR": "email"
                    },
                    "tip8_3": {
                        "zh": "已存在，请更换",
                        "en": "already exists. Please use another valid ",
                        "vi": "đã tồn tại. Vui lòng sử dụng một cái khác có hiệu lực ",
                        "zh-Hant": "已存在，請更換",
                        "id": "Sudah terdaftar. Silahkan masukkan yang lain",
                        "es": "ya existe. Por favor, use otro válido ",
                        "pt-BR": ". Favor usar outro válido"
                    },
                    "tip8_4": {
                        "zh": "进行注册或直接登录。",
                        "en": "for registration.",
                        "vi": "để đăng ký",
                        "zh-Hant": "進行註冊或直接登錄。",
                        "id": "Untuk pendaftaran",
                        "es": "para registro",
                        "pt-BR": "para registrar."
                    },
                    "tip8_5": {
                        "zh": "已存在",
                        "en": "already exists",
                        "vi": "đã tồn tại",
                        "zh-Hant": "已存在",
                        "id": "Sudah terdaftar",
                        "es": "ya existe",
                        "pt-BR": "já existe"
                    },
                    "verificationCodej": {
                        "zh": "验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código verificación",
                        "pt-BR": "Código de verificação"
                    },
                    "tip11": {
                        "zh": "您可直接使用新密码进行登录。",
                        "en": "You can login directly using the new password.",
                        "vi": "Bạn có thể đăng nhập ngay lập tức bằng cách sử dụng mật khẩu mới.",
                        "zh-Hant": "您可直接使用新密碼進行登錄。",
                        "id": "Anda bisa langsung masuk hanya menggunakan kata sandi",
                        "es": "Puedes iniciar sesión directamente usando la nueva contraseña.",
                        "pt-BR": "Você pode logar diretamente usando a nova senha."
                    },
                    "tip10": {
                        "zh": "新密码设置成功",
                        "en": "The new password was set successfully",
                        "vi": "Mật khẩu mới đã được tạo thành công",
                        "zh-Hant": "新密碼設置成功",
                        "id": "Kata sandi yang baru berhasil diperbarui",
                        "es": "La nueva contraseña fue establecida con éxito",
                        "pt-BR": "A nova senha foi configurada com sucesso"
                    },
                    "title": {
                        "zh": "",
                        "en": "",
                        "vi": "",
                        "zh-Hant": "",
                        "id": "--",
                        "es": "",
                        "pt-BR": ""
                    },
                    "resetPasswordTip": {
                        "zh": "为了你的账号安全，TigerWit建议您定期重置登录密码",
                        "en": "Consider your account security, TigerWit suggests you reset your login password regularly.",
                        "vi": "Do vấn đề bảo mật tài khoản của bạn, TigerWit khuyến nghị bạn đặt lại mật khẩu của mình thường xuyên.",
                        "zh-Hant": "為了您的賬戶安全，TigerWit建議您定期重置登錄密碼",
                        "id": "Demi menjaga keamanan akun anda. TigerWit menyarankan anda untuk mengubah kata sandi anda secara berkala.",
                        "es": "Considere la seguridad de su cuenta; TigerWit le sugiere que resetee la contraseña de inicio sesión regularmente.",
                        "pt-BR": "Considere a segurança da sua conta, TigerWit sugere que você redefina sua senha de login regularmente."
                    },
                    "resetPassword": {
                        "zh": "重置密码",
                        "en": "Reset password",
                        "vi": "Đặt lại mật khẩu",
                        "zh-Hant": "重置密碼",
                        "id": "Atur ulang",
                        "es": "Resetear contraseña",
                        "pt-BR": "Redefinir senha"
                    },
                    "doResetPassword": {
                        "zh": "是否重置密码？",
                        "en": "Do you want to reset your password?",
                        "vi": "Bạn có muốn cài đặt lại mật khẩu của mình?",
                        "zh-Hant": "是否重置密碼？",
                        "id": "Atur Ulang kata sandi anda?",
                        "es": "¿Desea resetear su contraseña?",
                        "pt-BR": "Você quer redefinir sua senha?"
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
                        "pt-BR": "Comprovação de endereço"
                    },
                    "proofAddress": {
                        "zh": "上传地址证明",
                        "en": "Proof of Address",
                        "vi": "Địa chỉ xác thực",
                        "zh-Hant": "上傳地址證明",
                        "id": "Bukti Alamat",
                        "es": "Prueba de Dirección",
                        "pt-BR": "Comprovação de endereço"
                    },
                    "acceptFollow": {
                        "zh": "我们将接受以下文件：",
                        "en": "We will accept the following documents:",
                        "vi": "Chúng tôi sẽ chấp nhận những tài liệu sau:",
                        "zh-Hant": "我們將接受以下文件：",
                        "id": "Kami menerima dokumen sebagai berikut:",
                        "es": "Aceptaremos los siguientes documentos:",
                        "pt-BR": "Aceitaremos os seguintes documentos:"
                    },
                    "utilityBill": {
                        "zh": "电费单（水，煤气，电）",
                        "en": "Utility Bill (water, gas, electricity)",
                        "vi": "Hóa đơn tiện ích (nước, gas, điện)",
                        "zh-Hant": "電費單（水，煤氣，電）",
                        "id": "Tagihan bulanan (air, gas, listrik)",
                        "es": "Factura de servicios públicos (agua, gas, electricidad)",
                        "pt-BR": "Conta de serviços públicos (água, gás, eletricidade)."
                    },
                    "landlineTel": {
                        "zh": "固定电话费",
                        "en": "Landline telephone bill",
                        "vi": "Điện thoại cố định",
                        "zh-Hant": "固定電話費",
                        "id": "Tagihan telepon rumah",
                        "es": "Factura de telefonía fija",
                        "pt-BR": "Conta de telefônia fixa"
                    },
                    "bankStatement": {
                        "zh": "银行对帐单",
                        "en": "Bank statement",
                        "vi": "Bảng sao kê ngân hàng",
                        "zh-Hant": "銀行對帳單",
                        "id": "Rekening Bank",
                        "es": "Extracto de cuenta",
                        "pt-BR": "extrato bancário"
                    },
                    "noCan": {
                        "zh": "该文件不应超过3个月。 我们不接受手机账单，信用卡账单，发票或收据。",
                        "en": "The document should not be no more than 3 months old. We cannot accept mobile phone bills, credit card bills, invoices or receipts.",
                        "vi": "Tài liệu không quá 3 tháng. Chúng tôi không chấp nhận hóa đơn điện thoại, hoá đơn thẻ tín dụng, hóa đơn hoặc biên nhận.",
                        "zh-Hant": "該文件不應超過3個月。我們不接受手機賬單，信用卡賬單，發票或收據。",
                        "id": "Dokumen tidak boleh lebih dari 3 bulan. Kami tidak menerima tagihan telepon seluler, tagihan kartu kredit, faktur atau tanda terima.",
                        "es": "El documento no debe tener más de 3 meses de antigüedad. No podemos aceptar facturas de teléfonos móviles, facturas de tarjetas de crédito, facturas o recibos.",
                        "pt-BR": "O documento não deve ter mais de 3 meses da data atual. Não podemos aceitar contas de telefone celular, faturas de cartão de crédito, faturas ou recibos."
                    },
                    "uploadAddress": {
                        "zh": "上传地址证明",
                        "en": "Upload the proof of address",
                        "vi": "Tải lên bằng chứng địa chỉ ",
                        "zh-Hant": "上傳地址證明",
                        "id": "Mohon unggah bukti alamat",
                        "es": "Suba el comprobante de domicilio",
                        "pt-BR": "Faça o upload do comprovante de endereço"
                    },
                    "pUploadAddress": {
                        "zh": "请上传地址证明",
                        "en": "Please upload the proof of address",
                        "vi": "Vui lòng tải lên bằng chứng địa chỉ",
                        "zh-Hant": "請上傳地址證明",
                        "id": "Mohon unggah bukti alamat",
                        "es": "Por favor, cargue la prueba de dirección",
                        "pt-BR": "Por favor, faça o upload do comprovante de endereço"
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
                        "pt-BR": "Minha conta"
                    },
                    "updateID": {
                        "zh": "更新证件",
                        "en": "Update ID",
                        "vi": "Cập nhật ID",
                        "zh-Hant": "更新證件",
                        "id": "Perbarui ID",
                        "es": "Actualizar ID",
                        "pt-BR": "Atualizar ID"
                    },
                    "updateIDTip": {
                        "zh": "您的证件已过期，无法进行该操作，请及时上传有效证件。点击“更新证件”，即可完成相关操作。",
                        "en": "Your credential has expired and cannot be operated. Please upload your valid certificate in time. Click on the \"Update ID\" to complete the related operations.",
                        "vi": "Thông tin xác thực của bạn đã hết hạn và không thể hoạt động. Vui lòng tải lên chứng chỉ hợp lệ của bạn kịp thời. Nhấp vào \"Cập nhật ID\" để hoàn thành các hoạt động liên quan.",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。點擊“更新證件”，即可完成相關操作。",
                        "id": " Dokumen anda telah kadaluwarsa. Anda tidak dapat melakukan transaksi. Silahkan masukkan dokumen yang baru. Klik “Perbarui ID” untuk mengunggah dokumen.",
                        "es": "Su credencial ha caducado y no puede operar. Por favor, suba su certificado válido a tiempo. Haga clic en \"Actualizar ID\" para completar las operaciones relacionadas.",
                        "pt-BR": "Sua credencial expirou e não pode ser operada. Por favor carregue o seu certificado válido a tempo. Clique no \"Atualizar ID\" para concluir as operações relacionadas."
                    },
                    "updateIDTip2": {
                        "zh": "您的证件已过期，无法进行该操作，请及时上传有效证件。",
                        "en": "Your credential has expired and cannot be operated. Please upload your valid certificate in time.",
                        "vi": "Thông tin của bạn đã hết hạn và không thể hoạt động. Vui lòng cập nhật chứng chỉ có hiệu lực của bạn lên đúng thời gian.",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。",
                        "id": "Dokumen anda telah kadaluwarsa. Anda tidak dapat melakukan transaksi. Silahkan masukkan dokumen yang baru.",
                        "es": "Su credencial ha caducado y no puede operar. Por favor, suba su certificado válido a tiempo.",
                        "pt-BR": "Sua credencial expirou e não pode ser operada. Por favor carregue o seu certificado válido a tempo."
                    },
                    "totalAssets": {
                        "zh": "资产总额",
                        "en": "Total Assets",
                        "vi": "Tổng các Tài Sản",
                        "zh-Hant": "資產總額",
                        "id": "Total Aset",
                        "es": "Enviar comentarios",
                        "pt-BR": "Total de ativos"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": "Historial",
                        "pt-BR": "Total de Lotes"
                    },
                    "totalEarnings": {
                        "zh": "总盈利",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總盈利",
                        "id": "Total Penghasilan",
                        "es": "Guardadas",
                        "pt-BR": "Ganhos totais"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Beneficio Total ",
                        "pt-BR": "Taxa total de lucro"
                    },
                    "tradingAccount": {
                        "zh": "交易账户",
                        "en": "Trade Account",
                        "vi": "Tài Khoản Giao Dịch",
                        "zh-Hant": "交易賬戶",
                        "id": "Akun Transaksi",
                        "es": "Cuenta Trade",
                        "pt-BR": "Conta negociação"
                    },
                    "upgradeToLiveAccount": {
                        "zh": "升级到真实账户",
                        "en": "Upgrade to a live account",
                        "vi": "Nâng cấp lên tài khoản thực",
                        "zh-Hant": "升級到真實賬戶",
                        "id": "Perbarui ke Akun Live",
                        "es": "Upgrade a cuenta Real",
                        "pt-BR": "Atualizar para conta ativa"
                    },
                    "wallet": {
                        "zh": "钱包",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira"
                    },
                    "unactivated": {
                        "zh": "未激活",
                        "en": "Unactivated",
                        "vi": "Ngừng kích hoạt",
                        "zh-Hant": "未激活",
                        "id": "Belum Aktif",
                        "es": "Inactivado",
                        "pt-BR": "Desativado"
                    },
                    "deposit": {
                        "zh": "充值",
                        "en": "DEPOSIT",
                        "vi": "KÍ QUỸ",
                        "zh-Hant": "充值",
                        "id": "Setor",
                        "es": "DEPOSITAR",
                        "pt-BR": "Depósito"
                    },
                    "withdrawal": {
                        "zh": "提现",
                        "en": "WITHDRAWAL",
                        "vi": "RÚT",
                        "zh-Hant": "提現",
                        "id": "Tarik",
                        "es": "REEMBOLSAR",
                        "pt-BR": "Saque"
                    },
                    "exit": {
                        "zh": "退出",
                        "en": "EXIT",
                        "vi": "THOÁT",
                        "zh-Hant": "退出",
                        "id": "Keluar",
                        "es": "SALIR",
                        "pt-BR": "SAIR"
                    },
                    "grantCredit": {
                        "zh": "信用赠金",
                        "en": "Grant for credit",
                        "vi": "Cấp tín dụng",
                        "zh-Hant": "信用贈金",
                        "id": "Bonus Kredit",
                        "es": "Solicitar crédito",
                        "pt-BR": "Conceder crédito"
                    },
                    "freeDeposit": {
                        "zh": "可用保证金",
                        "en": "Free Deposit",
                        "vi": "Margin Tự Do",
                        "zh-Hant": "可用保證金",
                        "id": "Deposit Gratis",
                        "es": "Depósito Gratis",
                        "pt-BR": "Depósito livre"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin Level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel Margen",
                        "pt-BR": "Nível da margem"
                    },
                    "volume": {
                        "zh": "交易手数",
                        "en": "Volume",
                        "vi": "Giá trị",
                        "zh-Hant": "交易手數",
                        "id": "Volume",
                        "es": "Volumen",
                        "pt-BR": "Volume"
                    },
                    "tip1": {
                        "zh": "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易帐户。",
                        "en": "The earnings you gained with the master and the agent will be deposited in the wallet，You can choose to withdrawal or transfer to the trading account.",
                        "vi": "Thu nhập bạn kiếm được với bậc thầy và đại lý sẽ được gửi vào ví ， Bạn có thể chọn rút tiền hoặc chuyển khoản vào tài khoản giao dịch.",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易賬戶。",
                        "id": " Komisi yang anda dapatkan dari Master dan Agen anda akan dimasukkan ke Dompet. Anda dapat memindahkan dana tersebut ke akun trading atau ditarik ",
                        "es": "Las ganancias obtenidas vía Master o agente serán depositadas en su wallet，Puede seleccionar reembolsar o transferir a cuenta trading.",
                        "pt-BR": "Os ganhos que você ganhou com o mestre e o agente serão depositados na carteira，você pode optar por retirada ou transferir para a conta de negociação."
                    },
                    "quickOpenAccount": {
                        "zh": "快捷开户",
                        "en": "Open account",
                        "vi": "Mở tài khoản",
                        "zh-Hant": "快捷開戶",
                        "id": "Buka Akun",
                        "es": "Abrir cuenta",
                        "pt-BR": "Abrir uma conta"
                    },
                    "applyToMaster": {
                        "zh": "申请成为高手",
                        "en": "Apply to be a master",
                        "vi": "Chấp nhận như một bậc thầy",
                        "zh-Hant": "申請成為高手",
                        "id": "Daftar menjadi Master",
                        "es": "Solicitud ser un Master",
                        "pt-BR": "Solicitar para ser um mestre"
                    },
                    "tip2": {
                        "zh": "恭喜您已开通TigerWit体验金账户",
                        "en": "Congratulations on opening the TigerWit trail account",
                        "vi": "Chúc mừng bạn đã mở thành công tài khoản trải nghiệm trên TigerWit",
                        "zh-Hant": "恭喜您已開通TigerWit體驗金賬戶",
                        "id": "Selamat, anda telah membuka Akun Pengalaman",
                        "es": "Felicidades por abrir una cuenta de Práctica TigerWit",
                        "pt-BR": "Parabéns por abrir sua conta de teste TigerWit"
                    },
                    "tip3": {
                        "zh": "体验金账户体验期限为30天，过期后账户资金将被清除，建议尽快升级到真实账户。",
                        "en": "Your trail account is valid for 30 days. Virtual funds will be cleared from this account 30 days after opening. You can upgrade to a live account at any time.",
                        "vi": "Tài khoản trải nghiệm của bạn sẽ có hiệu lực trong 30 ngày. Tiền ảo sẽ bị xóa khỏi tài khoản này 30 ngày sau khi mở. Bạn có thể nâng cấp lên tài khoản thực bất kỳ lúc nào.",
                        "zh-Hant": "體驗金賬戶體驗期限為30天，過期後賬戶資金將被清除，建議盡快升級到真實賬戶。",
                        "id": "Akun pengelaman anda akan berlaku selama 30 hari. Dana virtual akan dihapus secara otomatis setelah 30 hari. Anda dapat membuka Akun Live kapanpun anda inginkan.",
                        "es": "Su cuenta de Práctica tiene una caducidad de 30 días. Los fondos virtuales se eliminarán de esta cuenta 30 días después de la apertura. Puede upgrade a cuenta Real en cualquier momento.",
                        "pt-BR": "Sua conta teste é válida por 30 dias. Fundos virtuais serão limpados de sua conta 30 dias após a abertura. Você pode fazer o upgrade para uma conta ativa a qualquer momento."
                    },
                    "tip4": {
                        "zh": "请注意：体验金账户资金及盈利不可提现。",
                        "en": "Please note: trail account funds and profits are not available.",
                        "vi": "Vui lòng chú ý: Quỹ và lợi nhuận của tài khoản trải nghiệm sẽ không có thực.",
                        "zh-Hant": "請註意：體驗金賬戶資金及盈利不可提現。",
                        "id": "Catatan: Saldo di akun pengalaman tidak tersedia.",
                        "es": "Por favor, note: los fondos de la cuenta de práctica y los beneficios no están disponibles.",
                        "pt-BR": "Favor notar: fundos e lucros da conta teste não estão disponíveis."
                    },
                    "tip5": {
                        "zh": "升级为真实账户只需完成以下操作：",
                        "en": "Upgrading to a live account only requires the following steps: ",
                        "vi": "Để nâng cấp lên thành tài khoản thực chỉ cần làm theo các bước sau:",
                        "zh-Hant": "升級為真實賬戶只需完成以下操作：",
                        "id": "Untuk memperbarui akun menjadi Akun Live, silahkan ikuti langkah berikut ini:",
                        "es": "Upgrade a cuenta Real sólo requiere los siguientes pasos: ",
                        "pt-BR": "Fazer o upgrade para uma conta ativa somente requer os seguintes passos:"
                    },
                    "tip6": {
                        "zh": "完整填写您的个人信息并通过审核；",
                        "en": "Complete and verify your personal information;",
                        "vi": "Hoàn thành và xác nhận thông tin cá nhân của bạn;",
                        "zh-Hant": "完整填寫您的個人信息並通過審核；",
                        "id": "Lengkapi dan verifikasi data anda.",
                        "es": "Complete y verifique su información personal;",
                        "pt-BR": "Complete e verifique suas informações pessoais;"
                    },
                    "depositToActivate": {
                        "zh": "充值激活账户。",
                        "en": "Deposit to activate the account.",
                        "vi": "Sao Chép.",
                        "zh-Hant": "充值激活賬戶。",
                        "id": "Isi dana untuk mengaktifkan akun",
                        "es": "Deposite para activar la cuenta.",
                        "pt-BR": "Deposite para ativar a conta."
                    },
                    "tip7": {
                        "zh": "TigerWit真实交易账户",
                        "en": "TigerWit Live trading account",
                        "vi": "Tài khoản giao dịch Thực của TigerWit",
                        "zh-Hant": "TigerWit真實交易賬戶",
                        "id": "Akun Trading Live TigerWit",
                        "es": "TigerWit Cuenta de Trading Real",
                        "pt-BR": "Conta de negociação do TigerWit Live"
                    },
                    "tip8": {
                        "zh": "您离交易还差两步：1.上传身份审核 2.入金",
                        "en": "You are two steps away from transaction: 1.Upload identity audit 2.Deposit",
                        "vi": "Bạn còn cách hai bước từ giao dịch: 1.Tải lên nhận dạng kiểm toán 2.Kí quỹ",
                        "zh-Hant": "您離交易還差兩步：1.上傳身份審核 2.入金",
                        "id": " Hanya perlu 2 langkah untuk bisa trading : 1. Unggah dokumen identitas, 2. Isi dana ",
                        "es": "Está Usted a dos pasos de la transacción: 1.Subir auditoría de identidad 2.Deposite",
                        "pt-BR": "Você está a duas etapas da transação: 1.Upload da auditoria de identidade 2.Depósito"
                    },
                    "tip9": {
                        "zh": "即刻入金，立即领取$1000红包！",
                        "en": "Deposit now to get $1000 coupon!",
                        "vi": "Gửi tiền ngay để nhận được 1000 đô la điểm thưởng",
                        "zh-Hant": "即刻入金，立即領取$1000紅包！",
                        "id": "Isi dana sekarang juga untuk mendapatkan kupon senilai 1000$",
                        "es": "¡Deposite ahora y obtenga un cupón de $1000!",
                        "pt-BR": "Deposite agora para receber cupom de $ 1000!"
                    },
                    "tip10": {
                        "zh": "TigerWit保护客户资金安全。",
                        "en": "TigerWit protect the safety of customer funds.",
                        "vi": "TigerWit bảo vệ quỹ an toàn của khách hàng",
                        "zh-Hant": "TigerWit保護客戶資金安全。",
                        "id": "TigerWit melindungi keamanan dana nasabah",
                        "es": "TigerWit protege la seguridad de los fondos de los clientes.",
                        "pt-BR": "A TigerWit protege a segurança dos fundos do cliente."
                    },
                    "tip11": {
                        "zh": "客户资金完全与公司资金隔离，保存在独立银行账户中，确保属于客户的资金不会被用于任何其他目的。",
                        "en": "Customer funds are completely segregated from company funds and kept in separate bank accounts to ensure that funds belonging to customers are not used for any other purpose.",
                        "vi": "Quỹ khách hàng được tách biệt hoàn toàn khỏi quỹ của công ty và được giữ trong các tài khoản ngân hàng riêng biệt để đảm bảo rằng các quỹ thuộc về khách hàng không được sử dụng cho bất kỳ mục đích nào khác.",
                        "zh-Hant": "客戶資金完全與公司資金隔離，保存在獨立銀行賬戶中，確保屬於客戶的資金不會被用於任何其他目的。",
                        "id": " Dana nasabah akan berada direkening yang terpisah dari rekening perusahaan untuk memastikan bahwa dana milik nasabah tidak digunakan untuk tujuan yang lain. ",
                        "es": "Los fondos de los clientes están completamente separados de los fondos de la compañía y se mantienen en cuentas bancarias segregadas para garantizar que los fondos de los clientes no se utilicen para ningún otro propósito.",
                        "pt-BR": "Os fundos dos clientes são completamente segregados dos fundos da empresa e mantidos em contas bancárias separadas para garantir que os fundos pertencentes aos clientes não sejam usados para qualquer outra finalidade."
                    },
                    "tip12": {
                        "zh": "去实名认证",
                        "en": "To complete ID verification",
                        "vi": "Hoàn thành xác nhận ID",
                        "zh-Hant": "去實名認證",
                        "id": "Lengkapi verifikasi ID",
                        "es": "Para completar la verificación ID",
                        "pt-BR": "Para concluir a verificação de identidade"
                    },
                    "tip13": {
                        "zh": "您尚未开通任何账户，请先开户",
                        "en": "You have not opened any account, please open it first",
                        "vi": "Bạn đã không mở bất kỳ tài khoản nào, vui lòng mở cái đầu tiên",
                        "zh-Hant": "您尚未開通任何賬戶，請先開戶",
                        "id": "Anda belum membuka akun. Silahkan buka akun terlebih dahulu",
                        "es": "No ha abierto ninguna cuenta, por favor, ábrala primero",
                        "pt-BR": "Você não abriu nenhuma conta, abra-a primeiro"
                    },
                    "tip14": {
                        "zh": "您当前的账户类型不支持使用该功能，请及时升级账户",
                        "en": "Your current account type does not support using this function, please update the account in time",
                        "vi": "Loại tài khoản hiện tại của bạn không hỗ trợ sử dụng chức năng này, vui lòng cập nhật tài khoản kịp thời",
                        "zh-Hant": "您當前的賬戶類型不支持使用該功能，請及時升級賬戶",
                        "id": " Jenis akun anda saat ini tidak dapat menggunakan fitur ini, silahkan perbarui akun anda.",
                        "es": "Su tipo de cuenta actual no admite el uso de esta función, actualice la cuenta a tiempo",
                        "pt-BR": "Seu tipo de conta atual não suporta o uso dessa função. Atualize a conta a tempo"
                    },
                    "tip15": {
                        "zh": "认证信息已提交，正在审核中",
                        "en": "The verification information has been submitted and is under review",
                        "vi": "Thông tin xác nhận đã được gửi đi và đang trong quá trình xem xét",
                        "zh-Hant": "認證信息已提交，正在審核中",
                        "id": "Data untuk verifikasi telah terkirim dan sedang dalam proses peninjauan",
                        "es": "La información de verificación ha sido enviada y está revisándose.",
                        "pt-BR": "As informações de verificação foram enviadas e estão sob revisão"
                    },
                    "auditHour": {
                        "zh": "审核时间",
                        "en": "Audit hour",
                        "vi": "Giờ kiểm toán",
                        "zh-Hant": "審核時間",
                        "id": "Jam Pemeriksaan",
                        "es": "Hora de auditoria",
                        "pt-BR": "Hora de auditoria"
                    },
                    "auditHourM": {
                        "zh": "审核时间：",
                        "en": "Audit hour: ",
                        "vi": "Giờ kiểm toán: ",
                        "zh-Hant": "審核時間：",
                        "id": "Jam pemeriksaan: ",
                        "es": "Hora de auditoria: ",
                        "pt-BR": "Hora de auditoria: "
                    },
                    "tip16": {
                        "zh": "工作日10:00-18:00：将在30分钟左右完成审核",
                        "en": "Your information has been succesfully submitted. ",
                        "vi": "Chúng tôi rất vui được thông báo với bạn rằng thông tin của bạn đã được gửi. ",
                        "zh-Hant": "工作日10:00-18:00：將在30分鐘左右完成審核",
                        "id": " Hari kerja 10:00 - 18:00: pemeriksaan biasanya selesai dalam waktu 30 menit ",
                        "es": "Le comunicamos que su información ha sido enviada. ",
                        "pt-BR": "Nós informamos com prazer que a sua informação foi enviada."
                    },
                    "tip17": {
                        "zh": "工作日18:00以后：将在21:00、23:00统一审核；23:00后认证的将在次日审核",
                        "en": "our compliance team will verify your account within 24 hours.",
                        "vi": "Nhóm giám sát của chúng tôi sẽ xác minh tài khoản của bạn trong vòng 24 giờ.",
                        "zh-Hant": "工作日18:00以後：將在21:00、23:00統壹審核；23:00後認證的將在次日審核",
                        "id": " Hari kerja setelah 18:00: akan diperiksa pukul 21:00 dan 23:00",
                        "es": "Nuestro equipo de compliance verificará su cuenta en una plazo de 24 horas.",
                        "pt-BR": "Nossa equipe de conformidade verificará sua conta em até 24 horas."
                    },
                    "tip18": {
                        "zh": "非工作日时间：将在10:00、16:00、22:00统一审核；22:00后认证的将在次日审核",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "非工作日時間：將在10:00、16:00、22:00統壹審核；22:00後認證的將在次日審核",
                        "id": " Sertifikasi setelah pukul 22:00 akan di periksa keesokan hari ",
                        "es": " ",
                        "pt-BR": " "
                    },
                    "tip19": {
                        "zh": "请留意查询您的审核状态。",
                        "en": "If there is any more information required, you will be contacted by phone or email shortly.",
                        "vi": "Nếu có thêm thông tin cần thiết, bạn sẽ được liên lạc qua điện thoại hoặc email.",
                        "zh-Hant": "請留意查詢您的審核狀態。",
                        "id": " Silahkan cek status peninjauan anda",
                        "es": "Si requerimos más información le contactaremos por teléfono o email.",
                        "pt-BR": "Se houver mais informações a serem solicitadas, você será contatado por telefone ou e-mail."
                    },
                    "accountNumber": {
                        "zh": "账号",
                        "en": "Account number",
                        "vi": "Số tài khoản",
                        "zh-Hant": "帳號",
                        "id": "Nomor Akun",
                        "es": "Número cuenta",
                        "pt-BR": "Número da conta"
                    },
                    "tip20": {
                        "zh": "恭喜您已开通TigerWit真实交易账户",
                        "en": "Congratulations on opening your TigerWit real transaction account",
                        "vi": "Chúc mừng bạn đã mở tài khoản giao dịch thật của TigerWit",
                        "zh-Hant": "恭喜您已開通TigerWit真實交易賬戶",
                        "id": " Selamat, anda telah membuka akun Live",
                        "es": "Felicidades por abrir su cuenta Real de transacciones TigerWit",
                        "pt-BR": "Parabéns por abrir sua conta de transações reais TigerWit"
                    },
                    "questionnaire": {
                        "zh": "投资信息确认",
                        "en": "Questionnaire",
                        "vi": "Bảng câu hỏi",
                        "zh-Hant": "投資信息確認",
                        "id": "Daftar Pertanyaan",
                        "es": "Cuestionario",
                        "pt-BR": "Questionário"
                    },
                    "tip21": {
                        "zh": "由于受最高监管的约束，需要您提供相关信息，我们只询问与开户相关的问题。您的资料始终保密，绝不公开。",
                        "en": "Due to the highest regulatory constraints, you need to provide relevant information, we only ask questions related to account opening. Your information is always confidential and never public.",
                        "vi": "Do các ràng buộc pháp lý cao nhất, bạn cần cung cấp thông tin liên quan, chúng tôi chỉ đặt câu hỏi liên quan đến việc mở tài khoản. Thông tin của bạn luôn được bảo mật và không bao giờ công khai.",
                        "zh-Hant": "由於受最高監管的約束，需要您提供相關信息，我們只詢問與開戶相關的問題。您的資料始終保密，絕不公開。",
                        "id": " Sesuai dengan persyaratan hukum, anda harus memberikan informasi yang valid, kami hanya akan mengajukan pertanyaan yang berkaitan dengan pembukaan akun. Informasi anda akan selalu terjaga dan aman.",
                        "es": "Debido a requisitos regulatorios, debe proporcionarnos información relevante; sólo hacemos preguntas relacionadas con la apertura de su cuenta. Su información es siempre confidencial y nunca se hará pública.",
                        "pt-BR": "Devido às mais altas restrições regulatórias, você precisa fornecer informações relevantes, só fazemos perguntas relacionadas à abertura de contas. Sua informação é sempre confidencial e nunca pública."
                    },
                    "occupationBelongsTo": {
                        "zh": "您的职业所属行业",
                        "en": "Your occupation belongs to",
                        "vi": "Nghề nghiệp của bạn thuộc về",
                        "zh-Hant": "您的職業所屬行業",
                        "id": "Pekerjaan anda",
                        "es": "Su ocupación se enmarca en",
                        "pt-BR": "Sua ocupação pertence a"
                    },
                    "tip22": {
                        "zh": "您已完成KYC认证，感谢您的参与，请继续完成下一步操作。",
                        "en": "You have completed KYC certification, thank you for your participation, please continue to complete the next step.",
                        "vi": "Bạn đã hoàn thành chứng nhận KYC, cảm ơn bạn đã tham gia, vui lòng tiếp tục hoàn tất bước tiếp theo.",
                        "zh-Hant": "您已完成KYC認證，感謝您的慘與，請繼續完成下壹步操作。",
                        "id": " Anda telah menyelesaikan verifikasi KYC, terima kasih atas partisipasinya, silahkan lanjutkan ke proses berikutnya. ",
                        "es": "Ha completado la certificación KYC, gracias por su colaboración; por favor, continúe para completar el siguiente paso.",
                        "pt-BR": "Você completou a certificação KYC, obrigado pela sua participação, por favor, continue a próxima etapa."
                    },
                    "tip24": {
                        "zh": "请确保证件边框完整、大小适中、字迹清晰、亮度均衡、证件信息与填写信息一致、证件未过期、已满18周岁。",
                        "en": "We require colour copies of a government-issued drive license, passport and ID card. For ID cards and drive license, we require copies of the card’s front and back.",
                        "vi": "Chúng tôi yêu cầu bản sao màu giấy phép lái xe cấp bởi chính phủ, hộ chiếu và thẻ ID. Với thẻ ID và bằng lái xe, chúng tôi yêu cầu bản sao mặt trước và mặt sau.",
                        "zh-Hant": "請確保證件邊框完整、大小適中、字迹清晰、亮度均衡、證件資訊與填寫資訊一致、證件未過期、已滿18周歲。",
                        "id": " Mohon masukkan informasi yang relevan. Pastikan bahwa ini adalah anda karena informasi ini tidak dapat diubah lagi apabila sudah masuk ke status peninjauan. ",
                        "es": "Requerimos copias a color emitidas por el gobierno de una licencia de conducir, pasaporte y/o tarjeta ID. Para las tarjetas ID y la licencia de conducir, requerimos copias de la parte delantera y trasera de la tarjeta.",
                        "pt-BR": "Nós exigimos cópias coloridas de uma carteira de motorista emitida pelo governo, passaporte e carteira de identidade. Para cartões de identificação e licença de unidade, exigimos cópias da frente e verso do cartão."
                    },
                    "realName": {
                        "zh": "真实姓名",
                        "en": "Real name",
                        "vi": "Tên thật",
                        "zh-Hant": "真實姓名",
                        "id": "Nama asli",
                        "es": "Nombre real",
                        "pt-BR": "Nome real"
                    },
                    "lastName": {
                        "zh": "姓",
                        "en": "last name",
                        "vi": "tên",
                        "zh-Hant": "姓",
                        "id": "Nama Depan",
                        "es": "Nombre real",
                        "pt-BR": " "
                    },
                    "firstName": {
                        "zh": "名",
                        "en": "first name",
                        "vi": "họ",
                        "zh-Hant": "名",
                        "id": "Nama Belakang",
                        "es": "Nombre real",
                        "pt-BR": " "
                    },
                    "fillName": {
                        "zh": "请输入真实姓名",
                        "en": "Please fill in name",
                        "vi": "Điền tên vào",
                        "zh-Hant": "請輸入真實姓名",
                        "id": "Silahkan masukkan nama",
                        "es": "Por favor, ingrese el nombre",
                        "pt-BR": "Por favor, preencher o nome"
                    },
                    "certificateType": {
                        "zh": "证件类型",
                        "en": "Certificate type",
                        "vi": "Loại chứng chỉ",
                        "zh-Hant": "證件類型",
                        "id": "Jenis dokumen",
                        "es": "Tipo de certificado",
                        "pt-BR": "Tipo de certificação"
                    },
                    "selectCertificateType": {
                        "zh": "请选择您的证件类型",
                        "en": "Please select type of certificate",
                        "vi": "Vui lòng chọn loại chứng chỉ",
                        "zh-Hant": "請選擇您的證件類型",
                        "id": "silahkan pilih Jenis dokumen",
                        "es": "Seleccione tipo de certificado",
                        "pt-BR": "Por favor, selecione o tipo de certificado"
                    },
                    "certificateNumber": {
                        "zh": "证件号码",
                        "en": "Certificate number",
                        "vi": "Số chứng chỉ",
                        "zh-Hant": "證件號碼",
                        "id": "Nomor dokumen",
                        "es": "Número certificado",
                        "pt-BR": "Número do certificado"
                    },
                    "fillCertificateNumber": {
                        "zh": "请输入证件号码",
                        "en": "Please fill in the ID number",
                        "vi": "Vui lòng nhập số ID",
                        "zh-Hant": "請輸入證件號碼",
                        "id": "Silahkan masukkan nomor ID",
                        "es": "Por favor, rellene el número ID",
                        "pt-BR": "Favor inserir seu número de identidade"
                    },
                    "certificateNumberExists": {
                        "zh": "证件号码已存在",
                        "en": "Certificate number already exists",
                        "vi": "Số chứng chỉ đã tồn tại",
                        "zh-Hant": "證件號碼已存在",
                        "id": "Nomor dokumen telah terdaftar",
                        "es": "El número de certificado ya existe",
                        "pt-BR": "Número de certificado existente"
                    },
                    "enterGender": {
                        "zh": "请输入性别",
                        "en": "Please enter gender",
                        "vi": "Vui lòng chọn giới tính",
                        "zh-Hant": "請輸入性別",
                        "id": "Silahkan masukkan jenis kelamin",
                        "es": "Por favor, ingrese género",
                        "pt-BR": "Favor inserir gênero"
                    },
                    "enterBirthday": {
                        "zh": "请输入您的生日",
                        "en": "Please enter birthday",
                        "vi": "Vui lòng chọ ngày sinh",
                        "zh-Hant": "請輸入您的生日",
                        "id": "Silahkan masukkan tanggal lahir",
                        "es": "Por favor, ingrese cumpleaños",
                        "pt-BR": "Favor inserir data de aniversário"
                    },
                    "birthday": {
                        "zh": "生日",
                        "en": "Birthday",
                        "vi": "Ngày sinh",
                        "zh-Hant": "生日",
                        "id": "Tanggal Lahir",
                        "es": "Cumpleaños",
                        "pt-BR": "Data de Aniversário"
                    },
                    "uploadFrontSide": {
                        "zh": "点击上传证件正面",
                        "en": "Upload front side",
                        "vi": "Tải lên mặt trước",
                        "zh-Hant": "點擊上傳證件正面",
                        "id": "Unggah halaman depan",
                        "es": "Cargar el lado frontal",
                        "pt-BR": "Carregar o lado da frente"
                    },
                    "submitFrontSide": {
                        "zh": "请提交证件正面",
                        "en": "Please submit front side",
                        "vi": "Vui lòng gửi mặt trước",
                        "zh-Hant": "請提交證件正面",
                        "id": "Silahkan kirim halaman depan",
                        "es": "Por favor, envíe la parte frontal",
                        "pt-BR": "Favor inserir tamanho da fonte"
                    },
                    "uploading": {
                        "zh": "正在上传",
                        "en": "Uploading",
                        "vi": "Đang tải lên",
                        "zh-Hant": "正在上傳",
                        "id": "Mengunggah",
                        "es": "Subiendo",
                        "pt-BR": "Atualizando"
                    },
                    "uploadSuccessfully": {
                        "zh": "上传成功",
                        "en": "Upload successfully",
                        "vi": "Tải thành công",
                        "zh-Hant": "上傳成功",
                        "id": "Unggah Sukses",
                        "es": "Subir con éxito",
                        "pt-BR": "Upload feito com sucesso"
                    },
                    "tip25": {
                        "zh": "提交失败！请提交小于 2MB 的图片",
                        "en": "Upload failed! Please submit pictures less than 2MB",
                        "vi": "Tải lên thất bại! Vui lòng gửi ảnh dung lượng ít hơn 2MB",
                        "zh-Hant": "提交失敗！請提交小於 2MB 的圖片",
                        "id": "Gagal mengunggah! Mohon kirim foto dengan ukuran dibawah 2MB",
                        "es": "¡Subida fallida! Por favor envíe imágenes de menos de 2MB",
                        "pt-BR": "Erro no upload! Favor enviar imagens com menos de 2MB"
                    },
                    "uploadBackSide": {
                        "zh": "点击上传证件反面",
                        "en": "Upload back side",
                        "vi": "Tải lên mặt sau",
                        "zh-Hant": "點擊上傳證件反面",
                        "id": "Unggah halaman belakang",
                        "es": "Cargar la parte trasera",
                        "pt-BR": "Carregar o verso"
                    },
                    "submitBackSide": {
                        "zh": "请提交证件背面",
                        "en": "Please submit back side",
                        "vi": "Vui lòng gửi mặt sau",
                        "zh-Hant": "請提交證件背面",
                        "id": "Silahkan kirim halaman belakang",
                        "es": "Por favor, envíe el reverso",
                        "pt-BR": "Favor inserir parte de trás"
                    },
                    "tip26": {
                        "zh": "目前只支持2MB的PNG、JPG格式",
                        "en": "Currently only 2MB PNG, JPG format is supported",
                        "vi": "Hiện tại, chỉ hỗ trợ định dạng PNG, JPG 2MB",
                        "zh-Hant": "目前只支持2MB的PNG、JPG格式",
                        "id": " Hanya mendukung format PNG, JPG dan maksimal 2MB",
                        "es": "Actualmente sólo se admiten 2MB PNG, formato JPG",
                        "pt-BR": "No momento, somente os formatos JPG e PNG de até 2MB são suportados"
                    },
                    "uploadWait": {
                        "zh": "文件上传中,请耐心等待",
                        "en": "Uploading, please wait a minute.",
                        "vi": "Đang tải lên, vui lòng đợi trong chốc lát.",
                        "zh-Hant": "文件上傳中,請耐心等待",
                        "id": "Sedang Mengunggah, mohon menunggu",
                        "es": "Cargando, por favor, espere un minuto.",
                        "pt-BR": "Fazendo upload, favor esperar um instante"
                    },
                    "systemBusy": {
                        "zh": "系统繁忙",
                        "en": "System is busy",
                        "vi": "Hệ thống đang bận",
                        "zh-Hant": "系統繁忙",
                        "id": "Sistem sedang sibuk",
                        "es": "El sistema esta ocupado",
                        "pt-BR": "Sistema está ocupado"
                    },
                    "tip27": {
                        "zh": "您上传的身份证正在审核中，审核通过后，我们将通过短信或邮件的方式通知您，请注意查收",
                        "en": "The ID card you uploaded is under review. After the audit, we will inform you by SMS or email, please note to check.",
                        "vi": "Thẻ ID bạn đã tải lên đang được xem xét. Sau khi kiểm toán, chúng tôi sẽ thông báo cho bạn bằng tin nhắn SMS hoặc email, xin lưu ý để kiểm tra.",
                        "zh-Hant": "您上傳的身份證正在審核中，審核通過後，我們將通過短信或郵件的方式通知您，請註意查收",
                        "id": "Dokumen anda sedang diperiksa. Setelah pemeriksaan, kami akan mengirimkan notifikasi melalui SMS atau email",
                        "es": "La tarjeta de identificación que subiste está bajo revisión. Después de la auditoría, le informaremos por SMS o email, por favor esté pendiente.",
                        "pt-BR": "O cartão de ID que você enviou está em revisão. Após a auditoria, iremos informá-lo por SMS ou e-mail, por favor, observe para verificar."
                    },
                    "tip28": {
                        "zh": "注意：审核期间并不影响您的正常交易",
                        "en": "Note: the audit period does not affect your normal transactions",
                        "vi": "Ghi chú: giai đoạn kiểm tra không ảnh hưởng đến các giao dịch bình thường của bạn",
                        "zh-Hant": "註意：審核期間並不影響您的正常交易",
                        "id": "Catatan : Proses pemeriksaan tidak akan mengganggu transaksi anda ",
                        "es": "Nota: el período de auditoría no afecta sus transacciones normales",
                        "pt-BR": "Nota: o período de auditoria não afeta suas transações normais"
                    },
                    "dear": {
                        "zh": "尊敬的",
                        "en": "Dear",
                        "vi": "Kính gửi",
                        "zh-Hant": "尊敬的",
                        "id": "Yang Terhormat,",
                        "es": "Estimado",
                        "pt-BR": "Caro/a"
                    },
                    "tip29": {
                        "zh": "您好，您上传的身份信息已经通过审核，请放心交易",
                        "en": "The identity information you uploaded has been approved. Please feel free to trade.",
                        "vi": "Thông tin danh tính bạn tải lên đã được chấp thuận. Vui long giao dịch.",
                        "zh-Hant": "您好，您上傳的身份信息已經通過審核，請放心交易",
                        "id": "Informasi identitas anda telah disetujui. Silahkan bertransaksi ",
                        "es": "La información de identidad subida ha sido aprobada. Por favor, puede empezar a operar cuando desee.",
                        "pt-BR": "As informações de identidade enviadas por você foram aprovadas. Por favor, sinta-se livre para negociar."
                    },
                    "transaction": {
                        "zh": "交易提醒",
                        "en": "Transaction",
                        "vi": "Giao dịch",
                        "zh-Hant": "交易提醒",
                        "id": "Transaksi",
                        "es": "Transacción",
                        "pt-BR": "Transação"
                    },
                    "system": {
                        "zh": "系统提醒",
                        "en": "System",
                        "vi": "Hệ thống",
                        "zh-Hant": "系統提醒",
                        "id": "Sistem",
                        "es": "Sistema",
                        "pt-BR": "Sistema"
                    },
                    "systemMessages": {
                        "zh": "系统消息",
                        "en": "System Messages",
                        "vi": "Tin nhắn hệ thống",
                        "zh-Hant": "系統消息",
                        "id": "Pesan Sistem",
                        "es": "Mensajes del Sistema",
                        "pt-BR": "Mensagens do sistema"
                    },
                    "tip34": {
                        "zh": "您的账户尚未完成认证审核，将无法进行交易和资金相关操作，点击此处完成审核。",
                        "en": "This account has not yet been certified, trading and money-related operations will not be possible，click here to complete the review.",
                        "vi": "Tài khoản này chưa được chứng nhận, giao dịch và các hoạt động liên quan đến tiền bạc sẽ không thể thực hiện được ， nhấp vào đây để hoàn thành việc xem xét.",
                        "zh-Hant": "您的賬戶尚未完成認證審核，將無法進行交易和資金相關操作，點擊此處完成審核。",
                        "id": " Akun ini belum diverifikasi, tidak dapat melakukan trading ataupun transaksi lainnya. Klik disini untuk verifikasi ",
                        "es": "Esta cuenta aún no ha sido certificada, las operaciones de trading y relacionadas con el dinero no serán posibles，haga clic aquí para completar la revisión.",
                        "pt-BR": "Esta conta ainda não foi certificada, operações comerciais e relacionadas a dinheiro não serão possíveis, clique aqui para concluir a revisão."
                    },
                    "tip35": {
                        "zh": "您当前账户为体验金账户，升级至真实账户只需两步：",
                        "en": "Your current account is an experiential account, which can be upgraded to live account in two steps: ",
                        "vi": "Tài khoản hiện tại của bạn là tài khoản trải nghiệm, có thể được nâng cấp lên tài khoản thực theo hai bước: ",
                        "zh-Hant": "您當前賬戶為體驗金賬戶，升級至真實賬戶只需兩步：",
                        "id": " Akun anda saat ini adalah akun demo. Anda dapat memperbarui akun anda menjadi akun live hanya dengan 2 langkah saja:",
                        "es": "Su cuenta actual es una cuenta de práctica, la cual puede convertirse en cuenta real en dos pasos: ",
                        "pt-BR": "Sua conta atual é uma conta experimental, que pode ser atualizada para a conta ativa em duas etapas:"
                    },
                    "tip36": {
                        "zh": "完整填写个人信息",
                        "en": "Complete personal information",
                        "vi": "Hoàn thành thông tin cá nhân",
                        "zh-Hant": "完整填寫個人信息",
                        "id": "Lengkapi informasi pribadi",
                        "es": "Complete Información personal ",
                        "pt-BR": "Informações pessoais completas"
                    },
                    "loginWithVerificationCode": {
                        "zh": "验证码登录",
                        "en": "Login with verification code",
                        "vi": "Đăng nhập bằng mã xác nhận",
                        "zh-Hant": "驗證碼登錄",
                        "id": "Masuk menggunakan Kode Verifikasi",
                        "es": "Iniciar sesión con código de verificación",
                        "pt-BR": "Login com código de verificação"
                    },
                    "loginAgain": {
                        "zh": "请重新登录",
                        "en": "Please login again",
                        "vi": "Vui lòng đăng nhập lại",
                        "zh-Hant": "請重新登錄",
                        "id": "Silahkan masuk kembali",
                        "es": "Por favor, vuelva a iniciar sesión",
                        "pt-BR": "Por favor faça login novamente"
                    },
                    "tip37": {
                        "zh": "外汇市场波动较大，基于您的年龄考虑，小老虎提醒您慎重交易。",
                        "en": "Foreign exchange market fluctuations, based on your age considerations, TigeWit reminds you to trade carefully.",
                        "vi": "Biến động của thị trường ngoại hối, dựa trên cân nhắc tuổi của bạn, TigeWit nhắc bạn giao dịch cẩn thận.",
                        "zh-Hant": "外匯市場波動較大，基於您的年齡考慮，小老虎提醒您慎重交易。",
                        "id": " Pasar valuta asing sangat berfluktuasi, oleh karena itu TigerWit mengingatkan anda untuk selalu berhati-hati dalam trading. ",
                        "es": "Las fluctuaciones del mercado de divisas, y en consideración de su edad, TigeWit le recuerda que debe operar responsablemente.",
                        "pt-BR": "Flutuações do mercado cambial, com base em suas considerações de idade, TigeWit lembra-lhe para negociar com cuidado."
                    },
                    "loginFailed": {
                        "zh": "登录失败",
                        "en": "Login failed",
                        "vi": "Đăng nhập lỗi",
                        "zh-Hant": "登錄失敗",
                        "id": "Gagal Masuk",
                        "es": "Error de inicio de sesion",
                        "pt-BR": "Falha na autenticação"
                    },
                    "loginSucc": {
                        "zh": "登录成功",
                        "en": "Login successfully",
                        "vi": "Đăng nhập thành công",
                        "zh-Hant": "登錄成功",
                        "id": "Berhasil Masuk",
                        "es": "Iniciar sesión correctamente",
                        "pt-BR": "Login com Sucesso"
                    },
                    "getFailedQuote": {
                        "zh": "获取报价失败",
                        "en": "Failed to get quote",
                        "vi": "Thất bại khi lấy bảng báo giá",
                        "zh-Hant": "獲取報價失敗",
                        "id": "Gagal mendapatkan harga",
                        "es": "Error al obtener la cotización",
                        "pt-BR": "Não foi possível obter cotação"
                    },
                    "requestQuotation": {
                        "zh": "请求报价品种",
                        "en": "Request for quotation",
                        "vi": "Yêu cầu bảng báo giá",
                        "zh-Hant": "請求報價品種",
                        "id": "Permintaan harga penawaran",
                        "es": "Solicitud cotización",
                        "pt-BR": "Solicitação de cotação"
                    },
                    "tip38": {
                        "zh": "开通真实账户后，将不再支持开通体验金账户",
                        "en": "After opening live account, it will no longer be supported to open trail account",
                        "vi": "Sau khi mở tài khoản thực, tài khoản sẽ không còn được hỗ trợ để mở tài khoản trải nghiệm",
                        "zh-Hant": "開通真實賬戶後，將不再支持開通體驗金賬戶",
                        "id": " Setelah membuka Akun Live, akun pengalaman anda tidak dapat lagi digunakan ",
                        "es": "Después de abrir una cuenta real, ya no será posible abrir una cuenta de práctica",
                        "pt-BR": "Depois de abrir uma conta ativa, ela não terá mais suporte para abrir a conta da trilha"
                    },
                    "experienceAccount": {
                        "zh": "体验金账户",
                        "en": "Trail account",
                        "vi": "Tài khoản trải nghiệm",
                        "zh-Hant": "體驗金賬戶",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta de práctica",
                        "pt-BR": "Conta teste"
                    },
                    "tip39_1": {
                        "zh": " ",
                        "en": "Resend(",
                        "vi": "Gửi lại(",
                        "zh-Hant": " ",
                        "id": "Kirim ulang",
                        "es": "Reenviar(",
                        "pt-BR": "Reenvio("
                    },
                    "tip39_2": {
                        "zh": "秒后重新获取",
                        "en": "s)",
                        "vi": "s)",
                        "zh-Hant": "秒後重新獲取",
                        "id": "s)",
                        "es": "s)",
                        "pt-BR": "s)"
                    },
                    "tip40_1": {
                        "zh": "由于您没有登录，无法",
                        "en": "You are not logged in, cannot ",
                        "vi": "Bạn không đăng nhập được, không thể ",
                        "zh-Hant": "由於您沒有登錄，無法",
                        "id": "Anda belum masuk, tidak dapat",
                        "es": "No ha iniciado sesión, no puede ",
                        "pt-BR": "Você não está logado, não é possível"
                    },
                    "tip40_2": {
                        "zh": "高手",
                        "en": " master",
                        "vi": " Bậc Thầy",
                        "zh-Hant": "高手",
                        "id": "Master",
                        "es": " master",
                        "pt-BR": "mestre"
                    },
                    "unableOperate_1": {
                        "zh": "无法进行",
                        "en": "Unable to operate ",
                        "vi": "Không thể hoạt động ",
                        "zh-Hant": "無法進行",
                        "id": "Tidak dapat melakukan transaksi ",
                        "es": "Incapaz operar",
                        "pt-BR": "Impossibilitado de operar"
                    },
                    "unableOperate_2": {
                        "zh": "操作",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": "操作",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " "
                    },
                    "agentManagement": {
                        "zh": "代理商管理后台",
                        "en": "Partners portal",
                        "vi": "Quản lý đại lý",
                        "zh-Hant": "代理商管理後臺",
                        "id": "Manajemen Agen",
                        "es": "Gestión Agente",
                        "pt-BR": "Gerenciamento de agente"
                    },
                    "unableCountry": {
                        "zh": "【暂不提供该国家的相关服务。】",
                        "en": "We are unable to offer trading <br> services for this country.",
                        "vi": "Chúng tôi không thể cung cấp dịch vụ giao dịch <br> cho quốc gia này.",
                        "zh-Hant": "【暫不提供該國家的相關服務。】",
                        "id": " Kami tidak menyediakan layanan trading <br> untuk negara ini ",
                        "es": "No podemos ofrecer servicios de trading <br> para este país.",
                        "pt-BR": "Nós somos incapazes de oferecer serviços de <br> negociação para este país."
                    },
                    "cardEgTitle": {
                        "zh": "拍摄示例",
                        "en": "Shooting examples",
                        "vi": "ví dụ vượt qua",
                        "zh-Hant": "拍攝示例",
                        "id": "Contoh Gambar",
                        "es": "Ejemplos ",
                        "pt-BR": "Enviando exemplos"
                    },
                    "cardEgTip1": {
                        "zh": "标准",
                        "en": "Standard",
                        "vi": "Tiêu chuẩn",
                        "zh-Hant": "標準",
                        "id": "Standar",
                        "es": "Estándar",
                        "pt-BR": "Padrão"
                    },
                    "cardEgTip2": {
                        "zh": "图像过小",
                        "en": "Picture small",
                        "vi": "Hình nhỏ",
                        "zh-Hant": "圖像過小",
                        "id": "Gambar terlalu kecil",
                        "es": "Imagen pequeña",
                        "pt-BR": "Imagem pequena"
                    },
                    "cardEgTip3": {
                        "zh": "图像模糊",
                        "en": "Picture fuzzy",
                        "vi": "Hình bị mờ",
                        "zh-Hant": "圖像模糊",
                        "id": "Gambar buram",
                        "es": "Imagen borrosa",
                        "pt-BR": "Imagem distorcida"
                    },
                    "cardEgTip4": {
                        "zh": "照片反光",
                        "en": "Picture reflective",
                        "vi": "Hình bị phản chiếu",
                        "zh-Hant": "照片反光",
                        "id": "Gambar memantulkan cahaya",
                        "es": "Imagen reflectante",
                        "pt-BR": "Imagem reflexiva"
                    },
                    "processM": {
                        "zh": "流程：",
                        "en": "Process:",
                        "vi": "Quá trình: ",
                        "zh-Hant": "流程：",
                        "id": "Proses:",
                        "es": "Procesar:",
                        "pt-BR": "Processo:"
                    },
                    "downloadContract": {
                        "zh": "下载协议",
                        "en": "download the contract",
                        "vi": "tải hợp đồng",
                        "zh-Hant": "下載協議",
                        "id": "Unduh Kontrak",
                        "es": "descargar contrato",
                        "pt-BR": "baixe o contrato"
                    },
                    "printSign": {
                        "zh": "打印纸质版 签署协议",
                        "en": "print to sign",
                        "vi": "in ra để kí",
                        "zh-Hant": "打印紙質版 簽署協議",
                        "id": "Cetak untuk tanda tangan",
                        "es": "imprimir para firmar",
                        "pt-BR": "imprimir para assinar"
                    },
                    "uploadContract": {
                        "zh": "拍照上传协议",
                        "en": "upload the signed contract",
                        "vi": "tải hợp đồng đã kí lên",
                        "zh-Hant": "拍照上傳協議",
                        "id": "Unggah kontrak yang sudah ditanda tangani",
                        "es": "suba el contrato firmado",
                        "pt-BR": "carregar o contrato assinado"
                    },
                    "uploadContract2": {
                        "zh": "上传协议",
                        "en": "upload the signed contract",
                        "vi": "Gửi lên Hợp Đồng",
                        "zh-Hant": "上傳協議",
                        "id": "Unggah Kontrak",
                        "es": "Subir el Contrato",
                        "pt-BR": "carregar o contrato assinado"
                    },
                    "uploadNote": {
                        "zh": "提示：请上传个人信息页、银行账户信息页和最后签名页。",
                        "en": "Tip: please upload the personal information page, bank account information page and the last signature page.",
                        "vi": "Lời khuyên: vui lòng tải lên trang thông tin cá nhân trang địa chỉ ngân hàng và chữ kí mới nhất.",
                        "zh-Hant": "提示：請上傳個人信息頁、銀行帳護信息頁和最後簽名頁。",
                        "id": "Tips : silahkan unggah halaman data pribadi, informasi rekening bank dan halaman terakhir yang bertanda tangan.",
                        "es": "Consejo: por favor, suba la página de información personal, la página de información cuenta de banco y la última página con la firma.",
                        "pt-BR": "Dica: faça o upload da página de informações pessoais, da página de informações da conta bancária e da última página de assinatura."
                    },
                    "downloadContractBtn": {
                        "zh": "点击下载协议",
                        "en": "Click download",
                        "vi": "Nhấp để tải",
                        "zh-Hant": "點擊下載協議",
                        "id": "Klik untuk unduh",
                        "es": "Click descarga",
                        "pt-BR": "Clique em download"
                    },
                    "saveSubmit": {
                        "zh": "保存并提交审核",
                        "en": "Save and submit",
                        "vi": "Lưu và nộp",
                        "zh-Hant": "保存並提交審核",
                        "id": "Simpan dan kirim",
                        "es": "Guardar y enviar",
                        "pt-BR": "Guardar e submeter"
                    },
                    "personalInformationPage": {
                        "zh": "个人信息页",
                        "en": "Personal information page",
                        "vi": "Trang thông tin cá nhân",
                        "zh-Hant": "個人信息頁",
                        "id": "Halaman data pribadi",
                        "es": "Página información personal",
                        "pt-BR": "Página de informações pessoais"
                    },
                    "bankAccountPage": {
                        "zh": "银行账户信息页",
                        "en": "Bank account information page",
                        "vi": "Trang địa chỉ ngân hàng",
                        "zh-Hant": "銀行帳護信息頁",
                        "id": "Halaman informasi rekening bank",
                        "es": "Página información cuenta banco",
                        "pt-BR": "Página de informações da conta bancária"
                    },
                    "bankAccountPageExplain": {
                        "zh": "（如没有，可不填写）",
                        "en": "(If not, you can leave it blank)",
                        "vi": "(Nếu không bạn có thể để trống nó)",
                        "zh-Hant": "（如沒有，可不填寫）",
                        "id": "(Jika tidak, kosongkan saja)",
                        "es": "(Si no, puede dejarlo en blanco)",
                        "pt-BR": "(Se não, você pode deixar em branco)"
                    },
                    "signaturePage": {
                        "zh": "签名页",
                        "en": "Signature page",
                        "vi": "Trang chữ kí",
                        "zh-Hant": "簽名頁",
                        "id": "Halaman bertanda tangan",
                        "es": "Página firma",
                        "pt-BR": "Página de assinatura"
                    },
                    "completelyUpload": {
                        "zh": "请完整上传个人信息页和签名页",
                        "en": "Please upload the personal information page and the signature page completely",
                        "vi": "Vui lòng tải lên đầy đủ trang thông tin cá nhân và trang chữ kí",
                        "zh-Hant": "請完整上傳個人信息頁和簽名頁",
                        "id": "Mohon unggah halaman data pribadi dan halaman bertanda tangan secara lengkap",
                        "es": "Por favor, suba la página de información personal y de la firma completamente",
                        "pt-BR": "Por favor carregue a página de informação pessoal e a página de assinatura completamente"
                    },
                    "contractSuccess": {
                        "zh": "协议提交成功",
                        "en": "The contract has been submitted successfully",
                        "vi": "Hợp đồng đã được gửi thành công",
                        "zh-Hant": "協議提交成功",
                        "id": "Kontrak telah berhasil dikirim",
                        "es": "El contrato ha sido enviado con éxito",
                        "pt-BR": "O contrato foi enviado com sucesso"
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
                        "pt-BR": "Número de identificação é 15 ou 18 dígitos, com um X maiúsculo quando para a última letra"
                    },
                    "tip2": {
                        "zh": "手机号码为 1 开头的 11 位数字",
                        "en": "The phone number is 11 digits beginning with 1",
                        "vi": "Số điện thoại là 11 chữ số bắt đầu bằng 1",
                        "zh-Hant": "手機號碼為 1 開頭的 11 位數字",
                        "id": " Nomor telepon dimulai dari angka 62",
                        "es": "El número de teléfono es de 11 dígitos, comenzando con 1",
                        "pt-BR": "O número de telefone é 11 dígitos começando com 1"
                    },
                    "tip3": {
                        "zh": "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        "en": "The input amount must be integer or decimal number greater than zero (no more than two digits after the decimal point)",
                        "vi": "Số tiền đầu vào phải là số nguyên hoặc số thập phân lớn hơn 0 (không quá hai chữ số sau dấu thập phân",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）",
                        "id": " Jumlah yang dimasukkan harus bulat dan lebih dari 0 (tidak melebihi 2 angka dibelakang koma)",
                        "es": "La cantidad de entrada debe ser un número entero o decimal mayor que cero (no más de dos dígitos después del punto decimal)",
                        "pt-BR": "O valor de entrada deve ser um número inteiro ou decimal maior que zero (não mais do que dois dígitos após o ponto decimal)"
                    },
                    "doubleByteCharacter": {
                        "zh": "双字节字符",
                        "en": "Double byte character",
                        "vi": "Ký tự byte kép",
                        "zh-Hant": "雙字節字符",
                        "id": "tipe byte ganda",
                        "es": "Carácter doble byte",
                        "pt-BR": "Caractere de byte duplo"
                    },
                    "tip4": {
                        "zh": "邮箱前缀由字母、数字、下划线、减号、点号组成，以字母、数字结尾",
                        "en": "The mailbox prefix consists of letters, Numbers, underscores, minus and dots, and ends with letters and Numbers",
                        "vi": "Tiền tố hộp thư bao gồm các chữ cái, số, dấu gạch dưới, dấu trừ và dấu chấm, và kết thúc bằng chữ cái và số",
                        "zh-Hant": "郵箱前綴由字母、數字、下劃線、減號、點號組成，以字母、數字結尾",
                        "id": " Prefiks kotak surat terdiri dari huruf, angka, garis bawah, minus dan titik, dan diakhiri dengan huruf dan angka",
                        "es": "El prefijo del mailbox consiste en letras, números, guiones bajos, puntos y menos, y termina con letras y números.",
                        "pt-BR": "O prefixo da caixa postal consiste em letras, números, sublinhados, menos e pontos, e termina com letras e números"
                    },
                    "tip5": {
                        "zh": "昵称包含2-16个字符，支持中英文、数字",
                        "en": "Username contains 2-16 characters, support Chinese, English and Numbers",
                        "vi": "Tên người dùng bao gồm 2 đến 16 ký tự, hỗ trợ ngôn ngữ Trung Quốc, Tiếng Anh, và số.",
                        "zh-Hant": "昵稱包含2-16個字符，支持中英文、數字",
                        "id": "Nama pengguna terdiri dari 2-16 huruf, yang dapat disusun dengan huruf alfabet dan angka.",
                        "es": "El nombre de usuario contiene 2-16 caracteres, compatibilidad con Chino, Inglés y Números",
                        "pt-BR": "O nome de utilizador contém 2-16 caracteres, suporta chinês, inglês e números"
                    },
                    "tip6": {
                        "zh": "学校名称包含 4-20 个字符，由汉字、字母组成，超过字符限制的用简称代替",
                        "en": "The school name contains 4-20 characters, which are composed of Chinese characters and letters, use abbreviations when character limit exceeded.",
                        "vi": "Tên trường có chứa 4-20 ký tự, bao gồm các ký tự và chữ cái Trung Quốc, sử dụng chữ viết tắt khi vượt quá giới hạn ký tự.",
                        "zh-Hant": "學校名稱包含 4-20 個字符，由漢字、字母組成，超過字符限制的用間稱代替",
                        "id": " Nama sekolah terdiri dari 4-20 huruf, yang dapat disusun dengan huruf alfabet, gunakan singkatan apabila nama melebihi batas karakter . ",
                        "es": "El nombre contiene de 4 a 20 caracteres, que se componen de caracteres y letras, usa abreviaturas cuando se excede el límite de caracteres.",
                        "pt-BR": "O nome da escola contém de 4 a 20 caracteres, compostos de caracteres e letras chinesas. Use abreviações quando o limite de caracteres for excedido."
                    },
                    "tip7": {
                        "zh": "真实姓名由2-20个汉字以及 · 号组成",
                        "en": "The real name consists of 2-20 Chinese characters and ‘·’symbol",
                        "vi": "Tên thật bao gồm 2 đến 20 ký tự và biểu tượng tiếng Trung Quốc.",
                        "zh-Hant": "真實姓名由2-20個漢字以及 · 號組成",
                        "id": "Nama Asli terdiri dari 2-20 huruf, yang dapat disusun dengan huruf alfabet dan simbol ‘·’",
                        "es": "El nombre real consta de 2 a 20 caracteres y el símbolo ‘·’",
                        "pt-BR": "O nome real é composto por 2 a 20 caracteres chineses e o símbolo \"·\""
                    },
                    "tip8": {
                        "zh": "银行卡卡号为 12-19 位数字",
                        "en": "Bank card number is 12-19 digits",
                        "vi": "Số tài khoản thẻ là 12 đến 19 chữ số",
                        "zh-Hant": "銀行卡卡號為 12-19 位數字",
                        "id": "Rekening bank terdiri dari 12-19 angka",
                        "es": "Número de tarjeta bancaria es 12-19 dígitos",
                        "pt-BR": "O número do cartão bancário possui 12-19 dígitos"
                    },
                    "tip9": {
                        "zh": "密码由字母、数字和符号两种及以上组合，长度为 6-15个字符",
                        "en": "A password consists of two or more combinations of letters, Numbers, and symbols and is 6-15 characters long",
                        "vi": "Mật khẩu bao gồm hai hoặc nhiều kết hợp chữ cái, số và ký hiệu và dài từ 6-15 ký tự",
                        "zh-Hant": "密碼由字母、數字和符號兩種及以上組合，長度為 6-15個字符",
                        "id": " Kata sandi terdiri dari 6-15 karakter, yang dapat disusun dengan huruf alfabet, angka, dan simbol ",
                        "es": "Una contraseña consta de dos o más combinaciones de letras, números y símbolos y tiene una longitud de 6-15 caracteres",
                        "pt-BR": "Uma senha consiste em duas ou mais combinações de letras, números e símbolos e tem de 6 a 15 caracteres"
                    },
                    "simplifiedChinese": {
                        "zh": "简体中文",
                        "en": "Simplified Chinese",
                        "vi": "Tiếng Trung giản Thể",
                        "zh-Hant": "間體中文",
                        "id": "Mandarin (sederhana)",
                        "es": "Chino Simplificado",
                        "pt-BR": "Chinês simplificado"
                    },
                    "pleaseEnterEnglish": {
                        "zh": "请输入英文",
                        "en": "Please enter English",
                        "vi": "vui lòng nhập Tiếng Anh",
                        "zh-Hant": "請輸入英文",
                        "id": "Mohon Gunakan huruf alfabet",
                        "es": "Por favor, ingrese Inglés",
                        "pt-BR": "Por favor, entre em inglês"
                    },
                    "legalSymbol": {
                        "zh": "合法的符号",
                        "en": "Legal symbol",
                        "vi": "Biểu Tượng pháp lý",
                        "zh-Hant": "合法的符號",
                        "id": "Simbol Hukum",
                        "es": "Simbolo legal",
                        "pt-BR": "Símbolo legal"
                    },
                    "containsIllegalChar": {
                        "zh": "包含非法字符",
                        "en": "Contains illegal characters",
                        "vi": "Bao gồm các ký tự không hợp lệ",
                        "zh-Hant": "包含非法字符",
                        "id": "Berisi karakter yang tidak diperbolehkan",
                        "es": "Contiene caracteres ilegales",
                        "pt-BR": "Contém caracteres ilegais"
                    },
                    "tip10": {
                        "zh": "字符数不符合要求",
                        "en": "The number of characters does not meet the requirement",
                        "vi": "Số lượng ký tự không đáp ứng yêu cầu",
                        "zh-Hant": "字符數不符合要求",
                        "id": " Jumlah karakter tidak sesuai ketentuan ",
                        "es": "El número de caracteres no cumple requisitos",
                        "pt-BR": "O número de caracteres não atende ao requisito"
                    },
                    "tip11": {
                        "zh": "位数不正确或者包含非法字符",
                        "en": "The number of digits is incorrect or contains illegal characters",
                        "vi": "Số chữ số không chính xác hoặc chứa ký tự không hợp lệ",
                        "zh-Hant": "位數不正確或者包含非法字符",
                        "id": " Jumlah angka salah atau berisi karakter yang tidak diperbolehkan ",
                        "es": "El número de dígitos es incorrecto o contiene caracteres ilegales",
                        "pt-BR": "O número de dígitos está incorreto ou contém caracteres ilegais"
                    },
                    "passwordWeak": {
                        "zh": "密码强度过弱",
                        "en": "Passwords are too weak",
                        "vi": "Mật khẩu quá yếu",
                        "zh-Hant": "密碼強度過弱",
                        "id": "Kata sandi lemah",
                        "es": "Las contraseñas son demasiado débiles",
                        "pt-BR": "As senhas são muito fracas"
                    },
                    "tip12_1": {
                        "zh": "请完成第",
                        "en": "Please complete question ",
                        "vi": "Vui lòng hoàn thành câu hỏi ",
                        "zh-Hant": "請完成第",
                        "id": "Silahkan jawab semua pertanyaan ",
                        "es": "Por favor, complete la pregunta ",
                        "pt-BR": "Favor complete a pergunta"
                    },
                    "tip12_2": {
                        "zh": "题：",
                        "en": ": ",
                        "vi": ": ",
                        "zh-Hant": "題：",
                        "id": ": ",
                        "es": ": ",
                        "pt-BR": ":"
                    },
                    "tip13_1": {
                        "zh": "是否有",
                        "en": "Is the ",
                        "vi": "Đây có phải là ",
                        "zh-Hant": "是否有",
                        "id": "adalah",
                        "es": "Es el ",
                        "pt-BR": "Seria a"
                    },
                    "tip13_2": {
                        "zh": "账号？",
                        "en": " account number?",
                        "vi": " Số tài khoản",
                        "zh-Hant": "帳號？",
                        "id": "Nomor akun?",
                        "es": " número de cuenta?",
                        "pt-BR": "número da conta"
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
                        "pt-BR": "Conta negociação"
                    },
                    "totalAssets": {
                        "zh": "资产总额",
                        "en": "Total Assets",
                        "vi": "Tổng các tài sản",
                        "zh-Hant": "資產總額",
                        "id": "Total Aset",
                        "es": "Total Activos",
                        "pt-BR": "Total de ativos"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": "Total Lotes",
                        "pt-BR": "Total de Lotes"
                    },
                    "totalEarnings": {
                        "zh": "总盈利",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總盈利",
                        "id": "Total Penghasilan",
                        "es": "Total Ganancias",
                        "pt-BR": "Ganhos totais"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tổng Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Total Tasa Beneficio",
                        "pt-BR": "Taxa total de lucro"
                    },
                    "tradingSubAccounts": {
                        "zh": "交易子账户",
                        "en": "Trade Sub-accounts",
                        "vi": "Giao Dịch Tài Khoản Phụ",
                        "zh-Hant": "交易子賬戶",
                        "id": "Akun Tambahan",
                        "es": "Trade Sub-cuentas",
                        "pt-BR": "Negociar sub-contas"
                    },
                    "createAccount": {
                        "zh": "新建账号",
                        "en": "Create account",
                        "vi": "Tạo Tài Khoản",
                        "zh-Hant": "新建帳號",
                        "id": "Buat Akun",
                        "es": "Crear Cuenta",
                        "pt-BR": "Criar conta"
                    },
                    "becomeMaster": {
                        "zh": "申请高手",
                        "en": "Become a master",
                        "vi": "Trở Thành Bậc Thầy",
                        "zh-Hant": "申請高手",
                        "id": "Menjadi Master",
                        "es": "Solicitud Máster",
                        "pt-BR": "Tornar-se um mestre"
                    },
                    "netAssetValue": {
                        "zh": "资产净值",
                        "en": "Equity",
                        "vi": "Vốn tức thời",
                        "zh-Hant": "資產凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade"
                    },
                    "floatingPL": {
                        "zh": "浮动盈亏",
                        "en": "Floating P/L",
                        "vi": "P/L Nổi",
                        "zh-Hant": "浮動盈虧",
                        "id": "P/L yang masih berjalan",
                        "es": "Flotante P/L",
                        "pt-BR": "P/L flutuante"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel Margen",
                        "pt-BR": "Nível da margem"
                    },
                    "depositToActivate": {
                        "zh": "充值激活账户",
                        "en": "Deposit to activate",
                        "vi": "Sao Chép",
                        "zh-Hant": "充值激活賬戶",
                        "id": "aktivasi refill",
                        "es": "Depositar y activar",
                        "pt-BR": "Depositar para ativar"
                    },
                    "openTrades": {
                        "zh": "当前交易",
                        "en": "Open Trades",
                        "vi": "Các Giao dịch Hiện tại",
                        "zh-Hant": "當前交易",
                        "id": "Posisi terbuka",
                        "es": "Trades Abiertos",
                        "pt-BR": "Negociações abertas"
                    },
                    "tip1": {
                        "zh": "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        "en": "The earnings you gained with the master and the agent will be deducted 20% to the master as a commission. Please refer to the details：",
                        "vi": "Lưu ý: 20% lợi nhuận bạn đạt được khi sao chép bậc thầy sẽ được trừ như là hoa hồng, vui lòng xem phần:",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考：",
                        "id": "Keuntungan yang anda dapatkan dari hasil mengikuti Master akan terpotong sebesar 20% untuk diberikan kepada Master sebagai bentuk komisi:",
                        "es": "El 20% del beneficio obtenido al seguir al Master será deducido como comisión. Por favor, referirse a:",
                        "pt-BR": "Os ganhos que você ganhou com o master e o agente serão deduzidos em 20% ao master como uma comissão. Por favor, consulte os detalhes:"
                    },
                    "modifyCopyAmount": {
                        "zh": "修改复制金额",
                        "en": "Modify the Copy Amount",
                        "vi": "Sửa đổi Số Tiền Sao Chép",
                        "zh-Hant": "修改復制金額",
                        "id": "Ubah jumlah Copy ",
                        "es": "Modificar Importe Copy",
                        "pt-BR": "Modifique o valor da cópia"
                    },
                    "availableAmount": {
                        "zh": "可用金额",
                        "en": "Available Amount",
                        "vi": "Số Tiền Có Sẵn",
                        "zh-Hant": "可用金額",
                        "id": "Saldo yang tersedia",
                        "es": "Importe Disponible",
                        "pt-BR": "Quantidade disponível"
                    },
                    "recommended": {
                        "zh": "建议复制金额",
                        "en": "Recommended",
                        "vi": "Đề nghị",
                        "zh-Hant": "建議復制金額",
                        "id": "Rekomendasi",
                        "es": "Recomendado",
                        "pt-BR": "Recomendado"
                    },
                    "recommendedM": {
                        "zh": "建议复制金额：",
                        "en": "Recommended: ",
                        "vi": "Đề nghị: ",
                        "zh-Hant": "建議復制金額：",
                        "id": "Rekomendasi",
                        "es": "Recomendado: ",
                        "pt-BR": "Recomendado:"
                    },
                    "tip2": {
                        "zh": "若复制金额低于建议复制金额，当高手下单手数较小时，可能会导致跟单失败。",
                        "en": "If the amount of the copy less than the recommended amount, the master's trade is too small, your follow order will be failed.",
                        "vi": "Nếu số lượng bản sao ít hơn số tiền được đề nghị, giao dịch của bậc thầy quá nhỏ, lệnh sao chép của bạn sẽ không thành công.",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時，可能會導致跟單失敗。",
                        "id": " Jika anda memasukkan dana untuk mengikuti Master dengan nilai dibawah rekomendasi, posisi tidak akan terbuka di akun anda apabila Lot trading master kecil. ",
                        "es": "Si el importe copy es inferior a la cantidad recomendada de réplica, cuando el volumen del master es pequeño, su orden de réplica pudiera fallar. ",
                        "pt-BR": "Se o valor da cópia for menor que o valor recomendado, a negociação do mestre é muito pequena, o seu pedido a seguir será reprovado."
                    },
                    "amountInsufficient": {
                        "zh": "可用金额不足",
                        "en": "Available amount is insufficient",
                        "vi": "Số tiền có sẵn không đủ",
                        "zh-Hant": "可用金額不足",
                        "id": "Saldo tidak mencukupi",
                        "es": "Importe disponible es insuficiente",
                        "pt-BR": "Quantidade disponível é insuficiente"
                    },
                    "goDeposit": {
                        "zh": "去充值",
                        "en": "deposit",
                        "vi": "Kí quỹ",
                        "zh-Hant": "去充值",
                        "id": "Setor",
                        "es": "depositar",
                        "pt-BR": "Depósito"
                    },
                    "cancelFollow": {
                        "zh": "取消复制",
                        "en": "Cancel follow",
                        "vi": "Hủy sao chép",
                        "zh-Hant": "取消復制",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar seguir",
                        "pt-BR": "Cancelar seguida"
                    },
                    "sureCancelFollow": {
                        "zh": "是否确定取消复制?",
                        "en": "Are you sure to cancel following ?",
                        "vi": "Bạn có chắc muốn hủy sao chép?",
                        "zh-Hant": "是否確定取消復制?",
                        "id": "Apakah anda yakin berhenti mengikuti?",
                        "es": "¿Seguro que desea cancelar siguiendo?",
                        "pt-BR": "Tem certeza de que quer cancelar a seguida ?"
                    },
                    "tip3": {
                        "zh": "若取消复制关系，您复制此高手的订单可以选择跟随高手平仓或立即强行平仓",
                        "en": "If you cancel the following relationship, the ordor you following the master can be position closing or compulsory position close.",
                        "vi": "Nếu bạn hủy bỏ mối quan hệ sao chép, lệnh bạn sao chép của bậc thầy có thể là đóng vị thế hoặc vị thế bắt buộc đóng.",
                        "zh-Hant": "若取消復制關系，您復制此高手的訂單可以選擇跟隨高手平倉或立即強行平倉",
                        "id": " Apabila anda berhenti mengikuti master, posisi yang masih terbuka dapat ditutup secara manual atau otomatis",
                        "es": "Si cancela la siguiente seguir, la orden que sigue al master puede ser cierre de posiciones o el cierre obligatorio.",
                        "pt-BR": "Se você cancelar o relacionamento a seguir, o pedido seguindo o mestre pode ser o fechamento da posição ou o fechamento obrigatório da posição."
                    },
                    "cancelFollowClose": {
                        "zh": "取消复制并跟随高手平仓",
                        "en": "Cancel and follow the close",
                        "vi": "Hủy và sao chép đóng lệnh",
                        "zh-Hant": "取消復制並跟隨高手平倉",
                        "id": "Berhenti ikuti dan ikuti Master menutup posisi",
                        "es": "Cancelar y seguir cierre.",
                        "pt-BR": "Cancelar e seguir para fechar"
                    },
                    "cancelForceFlat": {
                        "zh": "取消复制并强行平仓",
                        "en": "Cancel and force a flat",
                        "vi": "Hủy và đóng tất cả các lệnh",
                        "zh-Hant": "取消復制並強行平倉",
                        "id": "Berhenti ikuti dan tutup semua posisi terbuka",
                        "es": "Cancelar y forzar flat",
                        "pt-BR": "Cancelar e forçar um flat"
                    },
                    "successfullyCanceled": {
                        "zh": "取消复制成功",
                        "en": "Successfully canceled",
                        "vi": "Lệnh hủy thành công",
                        "zh-Hant": "取消復制成功",
                        "id": "Tidak lagi mengikuti Master",
                        "es": "Cancelado éxito",
                        "pt-BR": "Cancelado com sucesso"
                    },
                    "tip4": {
                        "zh": "成为TigerWit高手，获取20%盈利分成",
                        "en": "Become a tigerwit’s master, get 20% profit share",
                        "vi": "Để trở thành bậc thầy của TigerWit, nhận 20% chia sẻ lợi nhuận",
                        "zh-Hant": "成為TigerWit高手，獲取20%盈利分成",
                        "id": "Jadilah seorang Master di TigerWit dan hasilkan keuntungan hingga 20% ",
                        "es": "Conviértase en Master TigerWit, obtenga un 20% del beneficio",
                        "pt-BR": "Tornar-se um mestre da TigerWit, ganhe 20% da divisão de lucros"
                    },
                    "help": {
                        "zh": "帮助中心",
                        "en": "Help",
                        "vi": "Giúp đỡ",
                        "zh-Hant": "幫助中心",
                        "id": "Bantuan",
                        "es": "Ayuda",
                        "pt-BR": "Ajuda"
                    },
                    "contactCustomerService": {
                        "zh": "联系客服",
                        "en": "Contact Customer Service",
                        "vi": "Liên hệ Chăm sóc Khách Hàng",
                        "zh-Hant": "聯系客服",
                        "id": "Hubungi layanan pelanggan",
                        "es": "Contactar Servicio al Cliente",
                        "pt-BR": "Entre em contato com o serviço de atendimento ao cliente"
                    },
                    "masterAccount": {
                        "zh": "高手账号",
                        "en": "Master account",
                        "vi": "Tài khoản Bậc Thầy",
                        "zh-Hant": "高手帳號",
                        "id": "Akun Master",
                        "es": "Cuenta Master",
                        "pt-BR": "Conta principal"
                    },
                    "masterLevelCommission": {
                        "zh": "高手等级&佣金",
                        "en": "Master level & Commission",
                        "vi": "Cấp độ của Bậc Thầy và Hoa Hồng",
                        "zh-Hant": "高手等級&傭金",
                        "id": "Tingkat master dan Komisi",
                        "es": "Nivel del Master y comisión",
                        "pt-BR": "Nível do Mestre & Comissão"
                    },
                    "commission": {
                        "zh": "跟单佣金",
                        "en": "Commission",
                        "vi": "Hoa Hồng",
                        "zh-Hant": "跟單傭金",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês"
                    },
                    "tip5": {
                        "zh": "继续完成以下操作，即可开始交易：",
                        "en": "Continue to complete the following operations to start transaction: ",
                        "vi": "Tiếp tục hoàn tất các hoạt động sau để bắt đầu giao dịch: ",
                        "zh-Hant": "繼續完成以下操作，即可開始交易：",
                        "id": " Untuk mulai bertransaksi silahkan lengkapi proses berikutnya ",
                        "es": "Continuar para completar las siguientes operaciones e iniciar transacción: ",
                        "pt-BR": "Continuar para completar as seguintes operações para iniciar transação:"
                    },
                    "tip6": {
                        "zh": "您的开户信息已经发送至您的邮箱",
                        "en": "Your account information has been sent to your mailbox",
                        "vi": "Thông tin tài khoản của bạn đã được gửi vào hộp thư của bạn",
                        "zh-Hant": "您的開戶信息已經發送至您的郵箱",
                        "id": "Informasi Akun anda telah dikirim ke kotak surat anda",
                        "es": "La información de su cuenta ha sido enviada a su mailbox.",
                        "pt-BR": "Suas informações da conta foram enviados à sua caixa de entrada"
                    },
                    "lastMonthCommission": {
                        "zh": "上月分成",
                        "en": "Last month commission",
                        "vi": "Hoa hồng tháng trước",
                        "zh-Hant": "上月分成",
                        "id": "Komisi bulan lalu",
                        "es": "Comisión del mes pasado",
                        "pt-BR": "Comissão do último mês"
                    },
                    "tip7": {
                        "zh": "上一个自然月的分成数据",
                        "en": "Data for the last month commission",
                        "vi": "Dữ liệu hoa hồng tháng trước",
                        "zh-Hant": "上壹個自然月的分成數據",
                        "id": "Data Komisi bulan lalu",
                        "es": "Datos de la comisión del último mes.",
                        "pt-BR": "Dados de comissão do último mês"
                    },
                    "totalCommission": {
                        "zh": "获得分成总计",
                        "en": "Total commission",
                        "vi": "Tổng hoa hồng",
                        "zh-Hant": "獲得分成總計",
                        "id": "Total Komisi",
                        "es": "Comisión total",
                        "pt-BR": "Total de comissão:"
                    },
                    "tip8": {
                        "zh": "用户开户至今扣除的分成总和",
                        "en": "Total deductions commission of user from open account date",
                        "vi": "Tổng số tiền hoa hồng khấu trừ của người dùng từ ngày mở tài khoản",
                        "zh-Hant": "用戶開戶至今扣除的分成總和",
                        "id": " Total komisi yang dipotong sejak pembukaan akun ",
                        "es": "Total deducciones comisión del usuario desde la fecha apertura de la cuenta abierta.",
                        "pt-BR": "Comissão de deduções total do usuário da data de conta aberta"
                    },
                    "follower": {
                        "zh": "复制者",
                        "en": "Follower",
                        "vi": "Người sao chép",
                        "zh-Hant": "復制者",
                        "id": "Pengikut",
                        "es": "Seguidor",
                        "pt-BR": "Seguidor"
                    },
                    "gainCommission": {
                        "zh": "获得佣金",
                        "en": "Gain commission",
                        "vi": "Hoa hồng thu được",
                        "zh-Hant": "獲得傭金",
                        "id": "Komisi yang dihasilkan",
                        "es": "Ganancias comisión",
                        "pt-BR": "Comissão de ganho"
                    },
                    "deductedCommission": {
                        "zh": "扣除佣金 ",
                        "en": "Deducted commission",
                        "vi": "Hoa Hồng Đã Khấu Trừ",
                        "zh-Hant": "扣除傭金 ",
                        "id": "Komisi yang dipotong",
                        "es": "Comisión deducida",
                        "pt-BR": "Comissão deduzida"
                    },
                    "cancelCopyTransactions": {
                        "zh": "取消复制交易",
                        "en": "Cancel follow transactions",
                        "vi": "Hủy sao chép các giao dịch",
                        "zh-Hant": "取消復制交易",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar seguir transacciones",
                        "pt-BR": "Cancelar transações seguidas"
                    },
                    "cancelCopyFailed": {
                        "zh": "取消复制失败",
                        "en": "Cancel follow failed",
                        "vi": "Hủy sao chép thất bại",
                        "zh-Hant": "取消復制失敗",
                        "id": "Tidak dapat berhenti mengikuti",
                        "es": "Cancelar seguir error",
                        "pt-BR": "Cancelar seguida fracassou"
                    },
                    "enterCopyAmount": {
                        "zh": "请输入复制金额",
                        "en": "Please enter copy amount",
                        "vi": "Vui lòng nhập số tiền sao chép",
                        "zh-Hant": "請輸入復制金額",
                        "id": "Silahkan masukkan jumlah copy",
                        "es": "Por favor, ingrese el importe copy",
                        "pt-BR": "Por favor, insira o valor da cópia"
                    },
                    "minimumCopyAmount": {
                        "zh": "最小复制金额为",
                        "en": "The minimum copy amount is ",
                        "vi": "Hạn mức nhỏ nhất số tiền sao chép là ",
                        "zh-Hant": "最小復制金額為",
                        "id": "Minimum jumlah copy adalah",
                        "es": "El importe copy es ",
                        "pt-BR": "O valor mínimo da cópia é"
                    },
                    "availableCopyAmount": {
                        "zh": "可用复制金额",
                        "en": "Available",
                        "vi": "Hiện có",
                        "zh-Hant": "可用復制金額",
                        "id": "Tersedia",
                        "es": "Disponible",
                        "pt-BR": "Disponível"
                    },
                    "availableCopyAmountM": {
                        "zh": "可用复制金额：",
                        "en": "Available: ",
                        "vi": "Hiện có: ",
                        "zh-Hant": "可用復制金額：",
                        "id": "Tersedia: ",
                        "es": "Disponible: ",
                        "pt-BR": "Disponível:"
                    },
                    "remainingCopiableFunds": {
                        "zh": "高手剩余可复制金额",
                        "en": "Master remaining",
                        "vi": "Bậc Thầy còn lại",
                        "zh-Hant": "高手剩余可復制金額",
                        "id": "Master yang tersedia",
                        "es": "Master restante",
                        "pt-BR": "Ganhos do Mestre"
                    },
                    "remainingCopiableFundsM": {
                        "zh": "高手剩余可复制金额：",
                        "en": "Master remaining: ",
                        "vi": "Bậc Thầy còn lại: ",
                        "zh-Hant": "高手剩余可復制金額：",
                        "id": "Master yang tersedia",
                        "es": "Master restante: ",
                        "pt-BR": "Ganhos do Mestre:"
                    },
                    "tip9": {
                        "zh": "系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        "en": "TigerWit’s automated systems allow you to follow a TigerWit Master via your copy account. If you have not yet set up a copy account the system will generate one automatically for you and all following copy trades will beexecuted from this copy account.",
                        "vi": "Hệ thống tự động của TigerWit cho phép bạn sao chép Bậc Thầy của TigerWit qua tài khoản sao chép của bạn. Nếu bạn chưa thiết lập tài khoản sao chép, hệ thống sẽ tự động tạo một tài khoản cho bạn và tất cả các giao dịch sao chép sau sẽ được thực hiện từ tài khoản sao chép này.",
                        "zh-Hant": "系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；",
                        "id": " Sistem di TigerWit akan membuatkan akun copy secara otomatis untuk anda apabila anda belum pernah membuatnya. Dengan menggunakan Akun Copy, anda dapat mengikuti Master dan semua transaksi copy akan dilakukan melalui Akun Copy tersebut",
                        "es": "Los sistemas automatizados de TigerWit le permiten seguir a un Master TigerWit a través de su cuenta copy. Si aún no tiene una cuenta copy, el sistema le generará una automáticamente, donde todas las operaciones copy se ejecutarán.  ",
                        "pt-BR": "Os sistemas automatizados da TigerWit permitem que você siga um TigerWit Master através de sua conta de cópia. Se você ainda não tiver configurado uma conta de cópia, o sistema gerará uma automaticamente para você e todas as negociações com cópias a seguir serão executadas a partir dessa conta de cópia."
                    },
                    "tip10": {
                        "zh": "若复制金额低于建议复制金额，可能会导致跟单失败。",
                        "en": "You must enter a copy amount at least equal to the recommended copy amount or the order may not be executed.",
                        "vi": "Bạn phải nhập số tiền sao chép thấp nhất bằng với số tiền sao chép được đề nghị hoặc lệnh sẽ không được thực thi.",
                        "zh-Hant": "若復制金額低於建議復制金額，可能會導致跟單失敗。",
                        "id": "Anda harus memasukkan jumlah dana sesuai rekomendasi, jika tidak posisi bisa tidak tereksekusi ",
                        "es": "Debe introducir un importe copy al menos igual al recomendado; de lo contrario, la orden pudiera no ejecutarse.",
                        "pt-BR": "Você deve inserir um valor de cópia pelo menos igual ao valor de cópia recomendado ou o pedido pode não ser executado."
                    },
                    "tip11": {
                        "zh": "可用复制金额不足",
                        "en": "Available copy amount is insufficient",
                        "vi": "Số lượng sao chép có sẵn không đủ",
                        "zh-Hant": "可用復制金額不足",
                        "id": " Saldo yang tersedia tidak mencukupi ",
                        "es": "Importe disponible copy es insuficiente",
                        "pt-BR": "Valor de cópia disponível é insuficiente"
                    },
                    "confirm": {
                        "zh": "确认修改",
                        "en": "Confirm",
                        "vi": "Xác nhận",
                        "zh-Hant": "確認修改",
                        "id": "Konfirmasi ",
                        "es": "Confirmar",
                        "pt-BR": "Confirmar"
                    },
                    "tip12": {
                        "zh": "您的复制金额低于建议复制金额，有跟单失败的风险，仍然继续复制吗？",
                        "en": "Your copy amount is lower than the suggested copy amount, and there is a risk that the order will fail. Do you still copy?",
                        "vi": "Số tiền sao chép của bạn thấp hơn số tiền sao chép được đề xuất và có rủi ro là lệnh sẽ không thành công. Bạn vẫn sao chép?",
                        "zh-Hant": "您的復制金額低於建議復制金額，有跟單失敗的風險，仍然繼續復制嗎？",
                        "id": " Jumlah dana yang anda masukkan dibawah rekomendasi, ada kemungkinan posisi tidak tereksekusi. Apakah anda ingin melanjutkan copy?",
                        "es": "El importe de su copia es inferior al recomendado, y existe el riesgo de que la orden falle. ¿Desea continuar replicando?",
                        "pt-BR": "Seu valor de cópia é menor do que o valor de cópia sugerido e há um risco de que o pedido falhe. Você ainda copia?"
                    },
                    "suggestedAmount": {
                        "zh": "建议金额",
                        "en": "Suggested amount",
                        "vi": "Số tiền đề nghị",
                        "zh-Hant": "建議金額",
                        "id": "Jumlah yang disarankan",
                        "es": "Importe sugerido",
                        "pt-BR": "Valor sugerido"
                    },
                    "suggestedAmountM": {
                        "zh": "建议金额：",
                        "en": "Suggested amount: ",
                        "vi": "Số tiền đề nghị: ",
                        "zh-Hant": "建議金額：",
                        "id": "Jumlah yang disarankan",
                        "es": "Importe sugerido: ",
                        "pt-BR": "Valor sugerido:"
                    },
                    "copySuccess": {
                        "zh": "复制成功",
                        "en": "Follow success",
                        "vi": "Sao chép thành công",
                        "zh-Hant": "復制成功",
                        "id": "Berhasil mengikuti",
                        "es": "Seguir al éxito",
                        "pt-BR": "Siga o sucesso"
                    },
                    "copyAmountSucc": {
                        "zh": "复制金额修改成功",
                        "en": "Copy amount modified successfully",
                        "vi": "Đã thay đổi thành công số tiền sao chép",
                        "zh-Hant": "復制金額修改成功",
                        "id": "Berhasil mengubah jumlah dana",
                        "es": "Importe de la copia modificado con éxito",
                        "pt-BR": "Quantidade de cópias modificada com sucesso"
                    },
                    "tip13": {
                        "zh": "跟随高手平仓",
                        "en": "Follow master to close positions",
                        "vi": "Sao chép bậc thầy để đóng các vị thế",
                        "zh-Hant": "跟隨高手平倉",
                        "id": "Ikuti penutupan posisi oleh master",
                        "es": "Seguir Master cierre posiciones",
                        "pt-BR": "Siga o mestre para fechar posições"
                    },
                    "tip14": {
                        "zh": "不跟随平仓",
                        "en": "Don’t follow master to close positions",
                        "vi": "Không sao chép bậc thầy để đóng các vị thế",
                        "zh-Hant": "不跟隨平倉",
                        "id": "Jangan ikuti penutupan posisi oleh master",
                        "es": "No seguir al Master cierre posiciones",
                        "pt-BR": "Não siga o mestre para fechar posições"
                    },
                    "tip15": {
                        "zh": "该高手没有持仓订单",
                        "en": "The master has no position order",
                        "vi": "Bậc Thầy không có lệnh",
                        "zh-Hant": "該高手沒有持倉訂單",
                        "id": "Master tidak memiliki posisi saat ini ",
                        "es": "El Master no tiene posiciones",
                        "pt-BR": "O mestre não tem ordem de posição"
                    },
                    "detailInformation": {
                        "zh": "详情信息",
                        "en": "Detail information",
                        "vi": "Thông tin chi tiết",
                        "zh-Hant": "詳情信息",
                        "id": "Detail",
                        "es": "Información detallada",
                        "pt-BR": "Informações detalhadas"
                    },
                    "followedMaster": {
                        "zh": "所跟高手",
                        "en": "Followed master",
                        "vi": "Đã sao chép bậc thầy",
                        "zh-Hant": "所跟高手",
                        "id": "Master yang diikuti",
                        "es": "Master seguido",
                        "pt-BR": "Mestre seguido"
                    },
                    "copyAccount": {
                        "zh": "跟单账号",
                        "en": "Copy account",
                        "vi": "Tài khoản Sao Chép",
                        "zh-Hant": "跟單帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta copy",
                        "pt-BR": "Conta de cópia"
                    },
                    "enterAccountName": {
                        "zh": "请输入账号名称",
                        "en": "Please enter account name",
                        "vi": "Vui lòng nhập tên tài khoản",
                        "zh-Hant": "請輸入帳號名稱",
                        "id": "Silahkan masukkan Nama Akun",
                        "es": "Por favor, ingrese el nombre de la cuenta",
                        "pt-BR": "Por favor, insira o nome da conta"
                    },
                    "tip16": {
                        "zh": "账号名称包含2-8个字符，支持中英文，数字",
                        "en": "The account name contains 2-8 characters and supports both Chinese，English and Numbers.",
                        "vi": "Tên tài khoản bao gồm từ 2 đến 8 ký tự và được hỗ trợ cả tiếng Trung Quốc, Tiếng Anh và con số.",
                        "zh-Hant": "帳號名稱包含2-8個字符，支持中英文，數字",
                        "id": "terdiri dari 2-8 karakter, yang dapat disusun dengan huruf alfabet, dan angka",
                        "es": "El nombre de la cuenta contiene 2-8 caracteres y soporta Chino，Inglés y Números.",
                        "pt-BR": "O nome da conta contém de 2 a 8 caracteres e suporta caracteres chineses, ingleses e números."
                    },
                    "details": {
                        "zh": "查看详情",
                        "en": "Details",
                        "vi": "Chi Tiết",
                        "zh-Hant": "查看詳情",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes"
                    },
                    "depositActivation": {
                        "zh": "充值激活",
                        "en": "Deposit activation",
                        "vi": "Kích hoạt tiền gửi",
                        "zh-Hant": "充值激活",
                        "id": "Pengisian dana untuk aktivasi akun",
                        "es": "Activación de depósito",
                        "pt-BR": "Ativação de depósito"
                    },
                    "newSubAccountRules": {
                        "zh": "新建子账号规则",
                        "en": "New sub-account rules",
                        "vi": "Quy tắc tài khoản phụ mới",
                        "zh-Hant": "新建子帳號規則",
                        "id": "Peraturan untuk Akun Tambahan",
                        "es": "Nuevas reglas sub-cuentas",
                        "pt-BR": "Novas regras de subconta"
                    },
                    "tip17": {
                        "zh": "交易账户下最多支持免费创建七个账号；",
                        "en": "Up to 7 sub-accounts can be created for free under the trading account;",
                        "vi": "Có thể tạo tối đa 7 tài khoản phụ miễn phí trong tài khoản giao dịch;",
                        "zh-Hant": "交易賬戶下最多支持免費創建七個帳號；",
                        "id": " 1 akun transaksi dapat memiliki hingga 7 akun tambahan untuk berbagai keperluan;",
                        "es": "Se pueden crear hasta 7 subcuentas de forma gratuita en la cuenta de trading;",
                        "pt-BR": "Até 7 subcontas podem ser criadas gratuitamente na conta de negociação;"
                    },
                    "tip18": {
                        "zh": "新建子账号前需确保已充值激活所有已开通子账号",
                        "en": "Make sure that all the accounts have been deposited and activated before create new sub-account.",
                        "vi": "Đảm bảo rằng tất cả các tài khoản đã được gửi và kích hoạt trước khi tạo tài khoản phụ mới.",
                        "zh-Hant": "新建子帳號前需確保已充值激活所有已開通子帳號",
                        "id": " Pastikan semua akun telah diisi dana dan aktif sebelum membuat akun tambahan yang baru ",
                        "es": "Asegúrese de haber depositado y activado todas las cuentas antes de crear una nueva subcuenta.",
                        "pt-BR": "Certifique-se de que todas as contas foram depositadas e ativadas antes de criar uma nova subconta."
                    },
                    "createSubAccount": {
                        "zh": "创建子账号",
                        "en": "Create sub-account",
                        "vi": "Tạo tại khoản phụ",
                        "zh-Hant": "創建子帳號",
                        "id": "Buat akun tambahan",
                        "es": "Crear sub-cuenta",
                        "pt-BR": "Criar sub-conta"
                    },
                    "getVerificationInfo": {
                        "zh": "正在获取您的认证信息",
                        "en": "Getting your verification information",
                        "vi": "Nhận thông tin xác nhận của bạn",
                        "zh-Hant": "正在獲取您的認證信息",
                        "id": "Dapatkan informasi tentang status verifikasi anda ",
                        "es": "Obteniendo su información de verificación",
                        "pt-BR": "Obtendo suas informações de verificação"
                    },
                    "tip19": {
                        "zh": "子账号创建成功",
                        "en": "Subaccount was successfully created",
                        "vi": "Tài khoản phụ đã được tạo thành công",
                        "zh-Hant": "子帳號創建成功",
                        "id": "Anda berhasil membuat akun tambahan",
                        "es": "La subcuenta fue creada exitosamente",
                        "pt-BR": "Subconta foi criada com sucesso"
                    },
                    "tip20": {
                        "zh": "子账号创建成功，账号尚未激活，请及时充值",
                        "en": "The subaccount was successfully created. The account has not been activated yet. Please deposit in time.",
                        "vi": "Tài khoản phụ đã được tạo thành công. Tài khoản đã không được kích hoạt. Vui lòng gửi tiền đúng giờ.",
                        "zh-Hant": "子帳號創建成功，帳號尚未激活，請及時充值",
                        "id": "Akun tambahan berhasil dibuat. Silahkan isi dana untuk mengaktifkan akun tersebut..",
                        "es": "La subcuenta fue creada exitosamente. La cuenta aún no se ha activado. Por favor, deposite a tiempo.",
                        "pt-BR": "A subconta foi criada com sucesso. A conta ainda não foi ativada. Por favor, deposite a tempo."
                    },
                    "followerAmount": {
                        "zh": "跟随人数",
                        "en": "Follower amount",
                        "vi": "Số tiền của người sao chép",
                        "zh-Hant": "跟隨人數",
                        "id": "Jumlah pengikut",
                        "es": "Cantidad seguidores",
                        "pt-BR": "Quantidade de seguidor"
                    },
                    "tip21": {
                        "zh": "用户真实入金后平仓产生的收益总数",
                        "en": "Total earnings of closing position after deposit",
                        "vi": "Tổng số tiền kiếm được của lệnh đóng sau khi gửi tiền",
                        "zh-Hant": "用戶真實入金後平倉產生的收益總數",
                        "id": "Total keuntungan dari semua transaksi",
                        "es": "Ganancias totales posiciones cerradas después del depósito",
                        "pt-BR": "Lucro total da posição de fechamento após o depósito"
                    },
                    "tip22": {
                        "zh": "任何通过第三方作弊软件刷取好友邀请奖励，一经发现有权取消红包兑现奖励；",
                        "en": "Any cheating, if discovered by TigerWit, will be disqualified.",
                        "vi": "Bất kỳ hành vi gian lận nào,nếu bị phát hiện bởi TigerWit sẽ bị loại.",
                        "zh-Hant": "任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現有權取消紅包兌現獎勵；",
                        "id": "Akun akan didiskualifikasi apabila TigerWit menemukan segala bentuk kecurangan",
                        "es": "Cualquier trampa, si es descubierta por TigerWit, será descalificada.",
                        "pt-BR": "Qualquer trapaça, se descoberta pelo TigerWit, será desqualificada."
                    },
                    "tip23": {
                        "zh": "本活动最终解释权归所有。如有疑问，请咨询客服",
                        "en": "The final interpretation of this activity owned by TigerWit. If you have other questions，please contact TigerWit customer service.",
                        "vi": "Giải thích cuối cùng về hoạt động này thuộc về của TigerWit. Nếu bạn có câu hỏi khác, vui lòng liên hệ với dịch vụ khách hàng của TigerWit.",
                        "zh-Hant": "本活動最終解釋權歸所有。如有疑問，請咨詢客服",
                        "id": " Segala keputusan akhir ada di tangan TigerWit dan tidak dapat diganggu gugat. Apabila anda memiliki pertanyaan, silahkan hubungi Layanan Pelanggan",
                        "es": "La interpretación final de esta actividad corresponde a TigerWit. Para cualquier cuestión，por favor contacte con el Servicio al Cliente TigerWit.",
                        "pt-BR": "A interpretação final desta atividade pertence a TigerWit. Se você tiver outras dúvidas, entre em contato com o atendimento ao cliente TigerWit."
                    },
                    "deposited": {
                        "zh": "已入金",
                        "en": "Deposited",
                        "vi": "Đã gửi tiền",
                        "zh-Hant": "已入金",
                        "id": "Dana yang diisi",
                        "es": "Depositado",
                        "pt-BR": "Depositado"
                    },
                    "noDeposit": {
                        "zh": "未入金",
                        "en": "No Deposit",
                        "vi": "Không gửi tiền",
                        "zh-Hant": "未入金",
                        "id": "Belum ada pengisian dana",
                        "es": "No Depósitos",
                        "pt-BR": "Nenhum depósito"
                    },
                    "submit": {
                        "zh": "确认提交",
                        "en": "Submit",
                        "vi": "Gửi đi",
                        "zh-Hant": "確認提交",
                        "id": "Kirim",
                        "es": "Enviar",
                        "pt-BR": "Enviar"
                    },
                    "experienceAccount": {
                        "zh": "体验金账号",
                        "en": "Trail account",
                        "vi": "Tài khoản trải nghiệm",
                        "zh-Hant": "體驗金帳號",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta de práctica",
                        "pt-BR": "Conta teste"
                    },
                    "tradingAccount": {
                        "zh": "自主交易账号",
                        "en": "Trading account",
                        "vi": "Tài khoản giao dịch",
                        "zh-Hant": "自主交易帳號",
                        "id": "Akun Transaksi",
                        "es": "Cuenta de trading",
                        "pt-BR": "Conta de negociação"
                    },
                    "copyAccounts": {
                        "zh": "跟随账号",
                        "en": "Copy account",
                        "vi": "Tài khoản sao chép",
                        "zh-Hant": "跟隨帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta copy",
                        "pt-BR": "Conta de cópia"
                    },
                    "tradingAccountg": {
                        "zh": "交易账号",
                        "en": "Trading account",
                        "vi": "Tài khoản giao dịch",
                        "zh-Hant": "交易帳號",
                        "id": "Akun Transaksi",
                        "es": "Cuenta de trading",
                        "pt-BR": "Conta de negociação"
                    },
                    "chooseTradingAccount": {
                        "zh": "选择交易账户",
                        "en": "Choose trading account",
                        "vi": "Chọn tài khoản giao dịch",
                        "zh-Hant": "選擇交易賬戶",
                        "id": "Tutup Akun Transaksi",
                        "es": "seleccionar cuenta de trading",
                        "pt-BR": "Escolha uma conta de negociação"
                    },
                    "accountBalance": {
                        "zh": "账户余额",
                        "en": "Account balance",
                        "vi": "Số dư tài khoản",
                        "zh-Hant": "賬戶余額",
                        "id": "Saldo Akun",
                        "es": "Balance cuenta",
                        "pt-BR": "Saldo da conta"
                    },
                    "accountBalanceM": {
                        "zh": "账户余额：",
                        "en": "Account balance: ",
                        "vi": "Số dư tài khoản: ",
                        "zh-Hant": "賬戶余額：",
                        "id": "Saldo Akun: ",
                        "es": "Balance cuenta: ",
                        "pt-BR": "Saldo da conta:"
                    },
                    "tip24": {
                        "zh": "您的账户正在审核中, 请等待审核通过再进行此操作",
                        "en": "Account is under review, please re-operation after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng tái hoạt động sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中, 請等待審核通過再進行此操作",
                        "id": "Akun dalam peninjauan, silahkan transaksi kembali setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a operar después de enviar.",
                        "pt-BR": "Conta está sob revisão, por favor, re-operação após o envio"
                    },
                    "tip25": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行复制操作",
                        "en": "Account is under review, please re-follow after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng sao chép lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行復制操作",
                        "id": "Akun dalam peninjauan, silahkan ulangi mengikuti setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a seguir después de enviar.",
                        "pt-BR": "A conta está em revisão, siga novamente após o envio"
                    },
                    "tip26": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行提现操作",
                        "en": "Account is under review, please re-withdraw after submission",
                        "vi": "Tài khoản đang được xem xét , vui lòng rút tiền lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行提現操作",
                        "id": "Akun dalam peninjauan, silahkan lakukan penarikan ulang setelah peninjauan selesai",
                        "es": "La cuenta está en proceso de revisión, por favor, vuelva a reembolsar después de enviar.",
                        "pt-BR": "A conta está em revisão, reenvolva novamente após o envio"
                    },
                    "tip27": {
                        "zh": "您的账户正在审核中，请等待审核通过后再进行充值操作",
                        "en": "Account is under review, please re-deposit after submission",
                        "vi": "Tài khoản đang được xem xét, vui lòng gửi tiền lại sau khi nộp hồ sơ",
                        "zh-Hant": "您的賬戶正在審核中，請等待審核通過後再進行充值操作",
                        "id": "Akun dalam peninjauan, silahkan lakukan pengisian dana kembali setelah peninjauan selesai",
                        "es": "La cuenta está bajo revisión, vuelva a depositar después de la presentación",
                        "pt-BR": "A conta está em revisão, faça o depósito novamente após o envio"
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
                        "pt-BR": "Detalhes"
                    },
                    "netAssetValue": {
                        "zh": "资产净值",
                        "en": "Equity",
                        "vi": "Vốn tức thời",
                        "zh-Hant": "資產凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade"
                    },
                    "freeMargin": {
                        "zh": "可用保证金",
                        "en": "Free margin",
                        "vi": "Margin Tự Do",
                        "zh-Hant": "可用保證金",
                        "id": "Margin bebas",
                        "es": "Margen libre",
                        "pt-BR": "Margem livre"
                    },
                    "marginLevel": {
                        "zh": "保证金比例",
                        "en": "Margin level",
                        "vi": "Mức Margin",
                        "zh-Hant": "保證金比例",
                        "id": "Tingkat Margin",
                        "es": "Nivel de margen",
                        "pt-BR": "Nível da margem"
                    },
                    "marginLevelM": {
                        "zh": "保证金比例：",
                        "en": "Margin level: ",
                        "vi": "Mức Margin: ",
                        "zh-Hant": "保證金比例：",
                        "id": "Tingkat Margin: ",
                        "es": "Nivel de margen: ",
                        "pt-BR": "Nível da margem:"
                    },
                    "totalLots": {
                        "zh": "总交易手数",
                        "en": "Total Lots",
                        "vi": "Tổng Lot",
                        "zh-Hant": "總交易手數",
                        "id": "Total Lot",
                        "es": " Total Lotes",
                        "pt-BR": "Total de Lotes"
                    },
                    "historicalTotalEarning": {
                        "zh": "历史总收益",
                        "en": "History Total Earnings",
                        "vi": "Lịch Sử Tổng Thu Nhập",
                        "zh-Hant": "歷史總收益",
                        "id": "Riwayat Total Penghasilan",
                        "es": "Historial Ganancias Totales",
                        "pt-BR": "Histórico dos Ganhos Totais"
                    },
                    "floatingPL": {
                        "zh": "浮动盈亏",
                        "en": "Floating P/L",
                        "vi": "P/L Nổi",
                        "zh-Hant": "浮動盈虧",
                        "id": "P/L yang masih berjalan",
                        "es": "P/L Flotante",
                        "pt-BR": "P/L flutuante"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total Profit Rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Ganancia Total",
                        "pt-BR": "Taxa total de lucro"
                    },
                    "currentTrading": {
                        "zh": "当前交易",
                        "en": "Current Trading",
                        "vi": "Giao dịch Hiện tại",
                        "zh-Hant": "當前交易",
                        "id": "Posisi saat ini",
                        "es": "Trading Actual",
                        "pt-BR": "Negociações atuais"
                    },
                    "deducted20Note": {
                        "zh": "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        "en": "Note：The 20% profit that you gain by following the master will be deducted as commission. Please refer to: ",
                        "vi": "Lưu ý: 20% lợi nhuận bạn đạt được khi sao chép bậc thầy sẽ được trừ như là hoa hồng, vui lòng xem phần: ",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考：",
                        "id": "Catatan : Keuntungan yang anda dapatkan dari hasil mengikuti Master akan terpotong sebesar 20% untuk diberikan kepada Master sebagai bentuk komisi: ",
                        "es": "Nota：El 20% del beneficio obtenido al seguir al master será deducido como comisión. Por favor, referirse a:",
                        "pt-BR": "Nota: O lucro de 20% que você ganha seguindo o mestre será deduzido como comissão. Por favor, consulte:"
                    },
                    "operation": {
                        "zh": "操作",
                        "en": "Operation",
                        "vi": "Hoạt động",
                        "zh-Hant": "操作",
                        "id": "Transaksi",
                        "es": "Operación",
                        "pt-BR": "Operação"
                    },
                    "openPrice": {
                        "zh": "开仓价",
                        "en": "Open price",
                        "vi": "Giá Mở",
                        "zh-Hant": "開倉價",
                        "id": "Harga buka",
                        "es": "Precio de apertura",
                        "pt-BR": "Preço de abertura"
                    },
                    "currentPrice": {
                        "zh": "现价",
                        "en": "Current price",
                        "vi": "Giá Hiện Tại",
                        "zh-Hant": "現價",
                        "id": "Harga saat ini",
                        "es": "Precio actual",
                        "pt-BR": "Preço atual"
                    },
                    "profit": {
                        "zh": "收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "收益",
                        "id": "Laba",
                        "es": "Beneficios",
                        "pt-BR": "Lucro"
                    },
                    "autonomousTransaction": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading independiente",
                        "pt-BR": "Negociação Independente"
                    },
                    "copyTrade": {
                        "zh": "复制交易",
                        "en": "Follow masters' transaction mode",
                        "vi": "Sao chép bậc thầy’chế độ giao dịch",
                        "zh-Hant": "復制交易",
                        "id": "Status “Ikuti transaksi Master”",
                        "es": "Seguir modo transacción Master",
                        "pt-BR": "Seguir o modo de transação do mestre"
                    },
                    "cancel": {
                        "zh": "取消复制",
                        "en": "Cancel",
                        "vi": "Hủy",
                        "zh-Hant": "取消復制",
                        "id": "Batal",
                        "es": "Cancelar",
                        "pt-BR": "Cancelar"
                    },
                    "followOrders": {
                        "zh": "跟随持仓",
                        "en": "Follow orders",
                        "vi": "Sao chép các lệnh",
                        "zh-Hant": "跟隨持倉",
                        "id": "Ikuti Transaksi",
                        "es": "Seguir las órdenes",
                        "pt-BR": "Seguir ordens"
                    },
                    "canceledCopy": {
                        "zh": "已取消复制",
                        "en": "Canceled follow",
                        "vi": "Hủy sao chép",
                        "zh-Hant": "已取消復制",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelado seguir",
                        "pt-BR": "Cancelar seguida"
                    },
                    "copyAmount": {
                        "zh": "复制金额",
                        "en": "Copy amount",
                        "vi": "Sao chép tiền gửi",
                        "zh-Hant": "復制金額",
                        "id": "Jumlah Dana copy",
                        "es": "Importe copy",
                        "pt-BR": "Copiar valor"
                    },
                    "copyAmountM": {
                        "zh": "复制金额：",
                        "en": "Copy amount: ",
                        "vi": "Sao chép tiền gửi: ",
                        "zh-Hant": "復制金額：",
                        "id": "Jumlah Dana copy",
                        "es": "Importe copy: ",
                        "pt-BR": "Copiar valor:"
                    },
                    "lots": {
                        "zh": "交易量",
                        "en": "Lots",
                        "vi": "Lot",
                        "zh-Hant": "交易量",
                        "id": "Lot",
                        "es": "Lotes",
                        "pt-BR": "Lotes"
                    },
                    "fundsOccupying": {
                        "zh": "资金占用",
                        "en": "Funds Occupying",
                        "vi": "Quỹ Đang Sử Dụng",
                        "zh-Hant": "資金占用",
                        "id": "Dana terpakai",
                        "es": "Fondos Ocupando",
                        "pt-BR": "Fundos Ocupando"
                    },
                    "P_L": {
                        "zh": "订单盈亏",
                        "en": "P/L",
                        "vi": "P/L",
                        "zh-Hant": "訂單盈虧",
                        "id": "P/L",
                        "es": "P/L",
                        "pt-BR": "P/L"
                    },
                    "swap": {
                        "zh": "库存费",
                        "en": "Swap",
                        "vi": "Swap",
                        "zh-Hant": "庫存費",
                        "id": "Bunga",
                        "es": "Swap",
                        "pt-BR": "Inverter"
                    },
                    "commission": {
                        "zh": "手续费",
                        "en": "Commission",
                        "vi": "Hoa hồng",
                        "zh-Hant": "手續費",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês"
                    },
                    "profitRate": {
                        "zh": "收益率",
                        "en": "Profit Rate",
                        "vi": "Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "收益率",
                        "id": "Keuntungan rata-rata",
                        "es": "Tasa Beneficio ",
                        "pt-BR": "Taxa de lucro"
                    },
                    "investedFunds": {
                        "zh": "投入资金",
                        "en": "Invested Funds",
                        "vi": "Quỹ đã Đầu Tư",
                        "zh-Hant": "投入資金",
                        "id": "Dana yang diinvestasikan",
                        "es": "Fondos Invertidos",
                        "pt-BR": "Fundos Investidos"
                    },
                    "buy_gbpusd": {
                        "zh": "买入 英镑美元",
                        "en": "BUY GBPUSD",
                        "vi": "MUA GBPUSD",
                        "zh-Hant": "買入 英鎊美元",
                        "id": "BELI GBPUSD",
                        "es": "COMPRAR GBPUSD",
                        "pt-BR": "COMPRAR GBPUS$"
                    },
                    "includeCommissionSwap": {
                        "zh": "包含手续费、库存费",
                        "en": "Include commission and swap",
                        "vi": "Bao gồm hoa hồng và phí qua đêm",
                        "zh-Hant": "包含手續費、庫存費",
                        "id": "Termasuk komisi dan swap ",
                        "es": "Incluye comisión y swap",
                        "pt-BR": "Incluir comissão e inverter"
                    },
                    "orderNumber": {
                        "zh": "订单号",
                        "en": "Order Number",
                        "vi": "Số Lệnh",
                        "zh-Hant": "訂單號",
                        "id": "Nomor transaksi",
                        "es": "Número Orden",
                        "pt-BR": "Número do pedido"
                    },
                    "followMaster": {
                        "zh": "跟随高手",
                        "en": "Follow Master",
                        "vi": "Sao chép Bậc Thầy",
                        "zh-Hant": "跟隨高手",
                        "id": "Ikuti Master",
                        "es": "Seguir Master",
                        "pt-BR": "Seguir Mestre"
                    },
                    "openPriceg": {
                        "zh": "开仓价格",
                        "en": "Open Price",
                        "vi": "Giá Mở",
                        "zh-Hant": "開倉價格",
                        "id": "Harga buka",
                        "es": "Precio Apertura",
                        "pt-BR": "Preço de abertura"
                    },
                    "currentPriceg": {
                        "zh": "现在价格",
                        "en": "Current Price",
                        "vi": "Giá Hiện Tại",
                        "zh-Hant": "現在價格",
                        "id": "Harga saat ini",
                        "es": "Precio Actual",
                        "pt-BR": "Preço atual"
                    },
                    "margin": {
                        "zh": "交易金额",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "交易金額",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem"
                    },
                    "sL": {
                        "zh": "止损价格",
                        "en": "SL",
                        "vi": "SL",
                        "zh-Hant": "止損價格",
                        "id": "SL",
                        "es": "SL",
                        "pt-BR": "SL"
                    },
                    "tP": {
                        "zh": "止盈价格",
                        "en": "TP",
                        "vi": "TP",
                        "zh-Hant": "止盈價格",
                        "id": "TP",
                        "es": "TP",
                        "pt-BR": "TP"
                    },
                    "openTime": {
                        "zh": "开仓时间",
                        "en": "Open Time",
                        "vi": "Thời Gian Mở",
                        "zh-Hant": "開倉時間",
                        "id": "Waktu posisi dibuka",
                        "es": "Hora Apertura",
                        "pt-BR": "Preço de abertura"
                    },
                    "closeTime": {
                        "zh": "平仓时间",
                        "en": "Close Time",
                        "vi": "Thời Gian Đóng",
                        "zh-Hant": "平倉時間",
                        "id": "Waktu posisi ditutup",
                        "es": "Hora Cierre",
                        "pt-BR": "Tempo de fechamento"
                    },
                    "sL_TP": {
                        "zh": "止盈/止损",
                        "en": "SL/TP",
                        "vi": "SL/TP",
                        "zh-Hant": "止盈/止損",
                        "id": "SL/TP",
                        "es": "SL/TP",
                        "pt-BR": "SL/TP"
                    },
                    "close": {
                        "zh": "平仓",
                        "en": "Close",
                        "vi": "Đóng",
                        "zh-Hant": "平倉",
                        "id": "Tutup",
                        "es": "Cerrar",
                        "pt-BR": "Fechar"
                    },
                    "notSet": {
                        "zh": "未设置",
                        "en": "Not Set",
                        "vi": "Không Đặt",
                        "zh-Hant": "未設置",
                        "id": "Belum dipasang",
                        "es": "No establecido",
                        "pt-BR": "Não configurado"
                    },
                    "modifySL_TP": {
                        "zh": "修改止盈止损",
                        "en": "Modify the SL/TP",
                        "vi": "Sửa đổi SL/TP",
                        "zh-Hant": "修改止盈止損",
                        "id": "Ubah SL/TP",
                        "es": "Modificar el  SL/TP",
                        "pt-BR": "Modificar o SL/TP"
                    },
                    "expectedLoss": {
                        "zh": "预计亏损",
                        "en": "Expected Loss",
                        "vi": "Lỗ dự kiến",
                        "zh-Hant": "預計虧損",
                        "id": "Stop Loss ",
                        "es": "Pérdida Esperada",
                        "pt-BR": "Perda esperada"
                    },
                    "expectedProfit": {
                        "zh": "预计盈利",
                        "en": "Expected Profit",
                        "vi": "Số lợi nhuận mong đợi",
                        "zh-Hant": "預計盈利",
                        "id": "Take Profit",
                        "es": "Beneficio Esperado",
                        "pt-BR": "Lucro esperado"
                    },
                    "precautions": {
                        "zh": "注意事项：",
                        "en": "Precautions: ",
                        "vi": "Các biện pháp phòng ngừa: ",
                        "zh-Hant": "註意事項：",
                        "id": "Tindakan pencegahan: ",
                        "es": "Precauciones: ",
                        "pt-BR": "Precauções:"
                    },
                    "Price": {
                        "zh": "价格≤xx",
                        "en": "Price≤xx",
                        "vi": "Giá <xx",
                        "zh-Hant": "價格≤xx",
                        "id": "Harga <xx",
                        "es": "Precio≤xx",
                        "pt-BR": "Preço≤xx"
                    },
                    "tip1": {
                        "zh": "修改止盈/止损价格，参考范围以现在的价格为准",
                        "en": "Modify the SL / TP, the reference range to the current price shall prevail",
                        "vi": "Sửa đổi SL / TP, phạm vi tham chiếu đến giá hiện tại sẽ chiếm ưu thế",
                        "zh-Hant": "修改止盈/止損價格，慘考範圍以現在的價格為準",
                        "id": " Ubah SL / TP, sesuaikan dengan harga yang berjalan saat ini ",
                        "es": "Modifique el SL / TP, el rango de referencia al precio actual prevalecerá",
                        "pt-BR": "Modificar o SL/TP, o campo de referência ao preço atual deverá prevalecer"
                    },
                    "orderPrice": {
                        "zh": "挂单价",
                        "en": "Price",
                        "vi": "Giá",
                        "zh-Hant": "掛單價",
                        "id": "Harga",
                        "es": "Precio",
                        "pt-BR": "Preço"
                    },
                    "pendingOrder": {
                        "zh": "挂单",
                        "en": "Pending Order",
                        "vi": "Lệnh bảo lưu",
                        "zh-Hant": "掛單",
                        "id": "Transaksi Pending",
                        "es": "Orden pendiente",
                        "pt-BR": "Pedido pendente"
                    },
                    "volume": {
                        "zh": "手数",
                        "en": "Volume",
                        "vi": "Giá trị",
                        "zh-Hant": "手數",
                        "id": "Volume",
                        "es": "Volumen",
                        "pt-BR": "Volume"
                    },
                    "follow": {
                        "zh": "跟随",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "跟隨",
                        "id": "Ikuti",
                        "es": "Seguir",
                        "pt-BR": "Seguir"
                    },
                    "following": {
                        "zh": "跟随中",
                        "en": "Following",
                        "vi": "Đang sao chép",
                        "zh-Hant": "跟隨中",
                        "id": "Mengikuti",
                        "es": "Siguiendo",
                        "pt-BR": "Seguindo"
                    },
                    "tip2": {
                        "zh": "您还没有跟随过高手",
                        "en": "You have not followed the master yet",
                        "vi": "Bạn đã không sao chép bậc thầy",
                        "zh-Hant": "您還沒有跟隨過高手",
                        "id": "Anda belum mengikuti Master manapun",
                        "es": "Aún no has seguido al Master",
                        "pt-BR": "Você ainda não seguiu o mestre"
                    },
                    "noRecord": {
                        "zh": "没有取消高手记录",
                        "en": "No Record",
                        "vi": "Không có hồ sơ",
                        "zh-Hant": "沒有取消高手記錄",
                        "id": "Tidak ada catatan",
                        "es": "Sin registro",
                        "pt-BR": "Sem registro"
                    },
                    "masterPage": {
                        "zh": "高手主页",
                        "en": "Master Page",
                        "vi": "Trang của bậc thầy",
                        "zh-Hant": "高手主頁",
                        "id": "Halaman Master",
                        "es": "Página Master",
                        "pt-BR": "Página Mestre"
                    },
                    "buyEurusd": {
                        "zh": "买入欧元美元",
                        "en": "Buy EURUSD",
                        "vi": "Mua EURUSD",
                        "zh-Hant": "買入歐元美元",
                        "id": "Beli EURUSD",
                        "es": "Comprar EURUSD",
                        "pt-BR": "Comprar EURUS$"
                    },
                    "sellEurusd": {
                        "zh": "卖出欧元美元",
                        "en": "Sell EURUSD",
                        "vi": "Bán EURUSD",
                        "zh-Hant": "賣出歐元美元",
                        "id": "Jual EURUSD",
                        "es": "Vender EURUSD",
                        "pt-BR": "Vender EURUS$"
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
                        "pt-BR": "Histórico de Transações"
                    },
                    "operation": {
                        "zh": "操作",
                        "en": "Operation",
                        "vi": "Hoạt động",
                        "zh-Hant": "操作",
                        "id": "Transaksi",
                        "es": "Operación",
                        "pt-BR": "Operação"
                    },
                    "lots": {
                        "zh": "交易手数",
                        "en": "Lots",
                        "vi": "Lot",
                        "zh-Hant": "交易手數",
                        "id": "Lot",
                        "es": "Lotes",
                        "pt-BR": "Lotes"
                    },
                    "profit": {
                        "zh": "收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "收益",
                        "id": "Laba",
                        "es": "Beneficio",
                        "pt-BR": "Lucro"
                    },
                    "autonomousTransaction": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente",
                        "pt-BR": "Negociação Independente"
                    },
                    "portfolio": {
                        "zh": "投资组合",
                        "en": "Portfolio",
                        "vi": "Danh mục đầu tư",
                        "zh-Hant": "投資組合",
                        "id": "Portofolio",
                        "es": "Portfolio",
                        "pt-BR": "Portfólio"
                    },
                    "trading": {
                        "zh": "自主交易",
                        "en": "Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi",
                        "es": "Trading",
                        "pt-BR": "Trading"
                    },
                    "copy": {
                        "zh": "复制交易",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "復制交易",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia"
                    },
                    "closePrice": {
                        "zh": "平仓价",
                        "en": "Close price",
                        "vi": "Giá Đóng",
                        "zh-Hant": "平倉價",
                        "id": "Harga saat posisi ditutup",
                        "es": "Precio Cierre",
                        "pt-BR": "Preço de fechamento"
                    },
                    "margin": {
                        "zh": "投入资金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "投入資金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem"
                    },
                    "manualClose": {
                        "zh": "手动平仓",
                        "en": "Manual Close",
                        "vi": "Đóng Tự Động",
                        "zh-Hant": "手動平倉",
                        "id": "Penutupan secara manual",
                        "es": "Cierre Manual",
                        "pt-BR": "Fechamento Manual"
                    },
                    "t_P": {
                        "zh": "止盈平仓",
                        "en": "T/P",
                        "vi": "T/P",
                        "zh-Hant": "止盈平倉",
                        "id": "T/P",
                        "es": "T/P",
                        "pt-BR": "T/P"
                    },
                    "s_L": {
                        "zh": "止损平仓",
                        "en": "S/L",
                        "vi": "S/L",
                        "zh-Hant": "止損平倉",
                        "id": "S/L",
                        "es": "S/L",
                        "pt-BR": "S/L"
                    },
                    "copyProfit": {
                        "zh": "跟单收益",
                        "en": "Copy Profit",
                        "vi": "Sao Chép Lợi Nhuận",
                        "zh-Hant": "跟單收益",
                        "id": "Keuntungan Copy ",
                        "es": "Beneficios Copy ",
                        "pt-BR": "Cópia de lucros"
                    },
                    "totalEarnings": {
                        "zh": "总收益",
                        "en": "Total Earnings",
                        "vi": "Tổng Thu Nhập",
                        "zh-Hant": "總收益",
                        "id": "Total Penghasilan",
                        "es": "Ganancias Totales",
                        "pt-BR": "Ganhos totais"
                    },
                    "totalCopyBrokerage": {
                        "zh": "总计跟单分成",
                        "en": "Total Copy Brokerage",
                        "vi": "Tổng Số Mô Giới Sao Chép",
                        "zh-Hant": "總計跟單分成",
                        "id": "Total Broker Copy ",
                        "es": "Copy Total Brokerage",
                        "pt-BR": "Corretagem total de cópias"
                    },
                    "closedOrders": {
                        "zh": "平仓订单",
                        "en": "Closed Orders",
                        "vi": "Đóng các lệnh",
                        "zh-Hant": "平倉訂單",
                        "id": "Posisi tertutup",
                        "es": "Órdenes Cerradas",
                        "pt-BR": "Pedidos Fechados"
                    },
                    "zMargin": {
                        "zh": "占用资金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "占用資金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem"
                    },
                    "nonceProfit": {
                        "zh": "本次收益",
                        "en": "Profit",
                        "vi": "Lợi nhuận",
                        "zh-Hant": "本次收益",
                        "id": "Laba",
                        "es": "Beneficios ",
                        "pt-BR": "Lucro"
                    },
                    "details": {
                        "zh": "分成详情",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "分成詳情",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes"
                    },
                    "commission": {
                        "zh": "分成",
                        "en": "Commission",
                        "vi": "Hoa hồng",
                        "zh-Hant": "分成",
                        "id": "Komisi",
                        "es": "Comisión",
                        "pt-BR": "Comissão do último mês"
                    },
                    "autoClosing": {
                        "zh": "自动平仓",
                        "en": "Auto Closing",
                        "vi": "Đóng Tự Động",
                        "zh-Hant": "自動平倉",
                        "id": "Tutup otomatis",
                        "es": "Cierre Automático",
                        "pt-BR": "Fechamento automático"
                    },
                    "tip1": {
                        "zh": "已经全部加载完毕",
                        "en": "Has been fully loaded",
                        "vi": "Đã được tải hoàn toàn",
                        "zh-Hant": "已經全部加載完畢",
                        "id": "Berhasil dimuat",
                        "es": "Ha sido cargado completamente",
                        "pt-BR": "Foi totalmente carregado"
                    },
                    "totalProfitLoss": {
                        "zh": "累计收益",
                        "en": "Total Profit/Loss",
                        "vi": "Tổng Lợi Nhuận/ Lỗ Vốn",
                        "zh-Hant": "累計收益",
                        "id": "Total Laba/Rugi",
                        "es": "Total Beneficios/Pérdidas ",
                        "pt-BR": "Total Lucro/Perda"
                    },
                    "historyFollower": {
                        "zh": "历史复制者",
                        "en": "Accumulated followers",
                        "vi": "Tích lũy những người sao chép",
                        "zh-Hant": "歷史復制者",
                        "id": "Jumlah pengikut yang terkumpul",
                        "es": "Seguidores acumulados",
                        "pt-BR": "Seguidores acumulados"
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
                        "pt-BR": "Estatísticas de dados"
                    },
                    "transactionsProfile": {
                        "zh": "交易概况",
                        "en": "Transactions profile",
                        "vi": "Hồ sơ Giao Dịch",
                        "zh-Hant": "交易概況",
                        "id": "Data Transaksi",
                        "es": "Perfil transacciones",
                        "pt-BR": "Perfil de transações"
                    },
                    "closedOrders": {
                        "zh": "平仓交易",
                        "en": "Closed Orders",
                        "vi": "Các Lệnh Đã Đóng",
                        "zh-Hant": "平倉交易",
                        "id": "Posisi tertutup",
                        "es": "Órdenes Cerradas",
                        "pt-BR": "Pedidos Fechados"
                    },
                    "profitOrders": {
                        "zh": "盈利订单",
                        "en": "Profit",
                        "vi": "Lệnh Lời",
                        "zh-Hant": "盈利訂單",
                        "id": "Laba",
                        "es": "Beneficios",
                        "pt-BR": "Lucro"
                    },
                    "lossOrders": {
                        "zh": "亏损订单",
                        "en": "Loss",
                        "vi": "Lệnh Lỗ",
                        "zh-Hant": "虧損訂單",
                        "id": "Rugi",
                        "es": "Pérdidas",
                        "pt-BR": "Perdas"
                    },
                    "avgHoldingTime": {
                        "zh": "平均持仓时间",
                        "en": "Avg. holding time",
                        "vi": "Thời gian giữ trung bình",
                        "zh-Hant": "平均持倉時間",
                        "id": "Rentang waktu rata-rata posisi yang dibuka",
                        "es": "Tiempo medio posición",
                        "pt-BR": "Tempo médio de espera"
                    },
                    "avgHoldingTimeM": {
                        "zh": "平均持仓时间：",
                        "en": "Avg. holding time: ",
                        "vi": "Thời gian giữ trung bình: ",
                        "zh-Hant": "平均持倉時間：",
                        "id": "Rentang waktu rata-rata posisi yang dibuka: ",
                        "es": "Tiempo medio posición: ",
                        "pt-BR": "Tempo médio de espera:"
                    },
                    "maxDrawdown": {
                        "zh": "最大回撤",
                        "en": "Max Drawdown",
                        "vi": "Max Drawdown",
                        "zh-Hant": "最大回撤",
                        "id": "Drawdown maksimum",
                        "es": "Max Drawdown",
                        "pt-BR": "Rebaixamento máximo"
                    },
                    "avgNumberTransactionsPerMonth": {
                        "zh": "月平均交易次数",
                        "en": "Avg Number of Transactions per Month",
                        "vi": "Số Giao Dịch Trung Bình Mỗi Tháng",
                        "zh-Hant": "月平均交易次數",
                        "id": "Jumlah rata-rata transaksi setiap bulan",
                        "es": "Número Medio Transacciones Mes",
                        "pt-BR": "Número médio de Transações por Mês"
                    },
                    "maxProfitMargin": {
                        "zh": "最大盈利点差",
                        "en": "Max Profit Margin",
                        "vi": "Biên Lợi Nhuận Tối Đa",
                        "zh-Hant": "最大盈利點差",
                        "id": "Keuntungan Margin maksimum",
                        "es": "Máx Margen Beneficio",
                        "pt-BR": "Margem Máxima de Lucro"
                    },
                    "monthlyRateReturn": {
                        "zh": "月回报率",
                        "en": "Monthly Rate of Return",
                        "vi": "Tỷ Lệ Lợi Nhuận Mỗi Tháng",
                        "zh-Hant": "月回報率",
                        "id": "Keuntungan rata-rata setiap bulan",
                        "es": "Tasa Retorno Mensual",
                        "pt-BR": "Taxa mensal de retorno"
                    },
                    "totalProfitRate": {
                        "zh": "总收益率",
                        "en": "Total profit rate",
                        "vi": "Tỷ Suất Tổng Lợi Nhuận",
                        "zh-Hant": "總收益率",
                        "id": "Total rata-rata keuntungan",
                        "es": "Tasa Beneficio total",
                        "pt-BR": "Taxa total de lucro"
                    },
                    "tradingChart": {
                        "zh": "交易走势图",
                        "en": "Trading Chart",
                        "vi": "Biểu đồ giao dịch",
                        "zh-Hant": "交易走勢圖",
                        "id": "Grafik Transaksi",
                        "es": "Gráfico Trading",
                        "pt-BR": "Gráfico de Negociação"
                    },
                    "monthlyReturns": {
                        "zh": "月收益率",
                        "en": "Monthly returns",
                        "vi": "Hoàn trả hàng tháng",
                        "zh-Hant": "月收益率",
                        "id": "Pendapatan Bulanan",
                        "es": "Retorno Mensuales",
                        "pt-BR": "Retornos mensais"
                    },
                    "profitRate": {
                        "zh": "收益率",
                        "en": "Profit Rate",
                        "vi": "Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "收益率",
                        "id": "Keuntungan rata-rata",
                        "es": "Tasa Beneficio",
                        "pt-BR": "Taxa de lucro"
                    },
                    "profitRateM": {
                        "zh": "收益率：",
                        "en": "Profit Rate: ",
                        "vi": "Tỷ Suất Lợi Nhuận: ",
                        "zh-Hant": "收益率：",
                        "id": "Keuntungan rata-rata: ",
                        "es": "Tasa Beneficio: ",
                        "pt-BR": "Taxa de lucro:"
                    },
                    "mainTradingSymbols": {
                        "zh": "主要交易品种",
                        "en": "Monthly analytics",
                        "vi": "Phân tích hàng tháng",
                        "zh-Hant": "主要交易品種",
                        "id": "Analisis bulanan",
                        "es": "Analítics Mensuales",
                        "pt-BR": "Análise mensal"
                    },
                    "recommendation": {
                        "zh": "分类高手",
                        "en": "Recommendation",
                        "vi": "Sự giới thiệu",
                        "zh-Hant": "分類高手",
                        "id": "Rekomendasi ",
                        "es": "Recomendaciones",
                        "pt-BR": "Recomendação"
                    },
                    "highIncome": {
                        "zh": "收益高手",
                        "en": "Profitability",
                        "vi": "Khả năng Sinh Lời",
                        "zh-Hant": "收益高手",
                        "id": "Profitabilitas",
                        "es": "Rentabilidad",
                        "pt-BR": "Rentabilidade"
                    },
                    "revenueLeading": {
                        "zh": "收益领先 表现突出",
                        "en": "Revenue leading, outstanding performance",
                        "vi": "Doanh thu dẫn đầu, hiệu suất vượt trội",
                        "zh-Hant": "收益領先 表現突出",
                        "id": " Sedang memimpin, kinerja bagus ",
                        "es": "Líder en Ingresos, rendimientos sobresalientes",
                        "pt-BR": "Receita líder, excelente desempenho"
                    },
                    "steady": {
                        "zh": "稳健高手",
                        "en": "Steady",
                        "vi": "Vững chắc",
                        "zh-Hant": "穩健高手",
                        "id": "Stabil",
                        "es": "Estable",
                        "pt-BR": "Estável"
                    },
                    "incomeStable": {
                        "zh": "收益稳定 回撤率小",
                        "en": "Income stable，Retracement is small",
                        "vi": "Thu nhập ổn định, Retracement quá nhỏ",
                        "zh-Hant": "收益穩定 回撤率小",
                        "id": "Pendapatan stabil, rasio kecil ",
                        "es": "Renta estable，retroceso pequeño",
                        "pt-BR": "Renda estável, Retracement é pequeno"
                    },
                    "exact": {
                        "zh": "常胜高手",
                        "en": "Exact",
                        "vi": "Chính xác",
                        "zh-Hant": "常勝高手",
                        "id": "Ketepatan",
                        "es": "Exacto",
                        "pt-BR": "Exato"
                    },
                    "all": {
                        "zh": "综合高手",
                        "en": "All",
                        "vi": "Tất cả",
                        "zh-Hant": "綜合高手",
                        "id": "Semua",
                        "es": "Todos",
                        "pt-BR": "Tudo"
                    },
                    "highAccuracy": {
                        "zh": "交易稳定 准确率高",
                        "en": "High accuracy",
                        "vi": "Độ chính xác cao",
                        "zh-Hant": "交易穩定 準確率高",
                        "id": "Akurasi tinggi",
                        "es": "Alta precisión",
                        "pt-BR": "Alta precisão"
                    },
                    "historyFollow": {
                        "zh": "历史复制人数",
                        "en": "History Follow",
                        "vi": "Lịch sử Sao chép",
                        "zh-Hant": "歷史復制人數",
                        "id": "Riwayat Copy",
                        "es": "Seguir Historial",
                        "pt-BR": "Histórico de follow"
                    },
                    "last30DaysAccuracy": {
                        "zh": "近30天准确率",
                        "en": "Last 30 days accuracy",
                        "vi": "Chính xác 30 ngày qua",
                        "zh-Hant": "近30天準確率",
                        "id": "Akurasi selama 30 hari terakhir",
                        "es": "Precisión últimos 30 días.",
                        "pt-BR": "Precisão dos últimos 30 dias"
                    },
                    "more": {
                        "zh": "点击加载更多",
                        "en": "More",
                        "vi": "Nhiều hơn nữa",
                        "zh-Hant": "點擊加載更多",
                        "id": "Tampilkan lebih banyak",
                        "es": "Más",
                        "pt-BR": "Mais"
                    },
                    "pullDownToRefresh": {
                        "zh": "下拉可以刷新",
                        "en": "Pull down to refresh",
                        "vi": "Kéo xuống để làm mới",
                        "zh-Hant": "下拉可以刷新",
                        "id": "Tarik kebawah untuk memuat kembali",
                        "es": "Tire hacia abajo para refrescar",
                        "pt-BR": "Aperte para atualizar"
                    },
                    "loosenRefresh": {
                        "zh": "松开立即刷新",
                        "en": "Loosen the refresh",
                        "vi": "Nới lỏng làm mới",
                        "zh-Hant": "松開立即刷新",
                        "id": "Lepaskan untuk memuat kembali",
                        "es": "Aflojar la actualización",
                        "pt-BR": "Liberar a atualização"
                    },
                    "refreshingData": {
                        "zh": "正在刷新数据",
                        "en": "Refreshing data",
                        "vi": "Đang làm mới dữ liệu",
                        "zh-Hant": "正在刷新數據",
                        "id": "Muat ulang data",
                        "es": "Datos refrescar",
                        "pt-BR": "Atualizando dados"
                    },
                    "accuracy": {
                        "zh": "准确率",
                        "en": "Success rate",
                        "vi": "Tỷ lệ thành công",
                        "zh-Hant": "準確率",
                        "id": "Tingkat keberhasilan",
                        "es": "Tasa de éxito",
                        "pt-BR": "Taxa de sucesso"
                    },
                    "maximumOpen": {
                        "zh": "最大开仓",
                        "en": "Max. open order",
                        "vi": "Lệnh mở Tối đa",
                        "zh-Hant": "最大開倉",
                        "id": "Maksimal posisi terbuka",
                        "es": "Max. órdenes abiertas",
                        "pt-BR": "Ordem aberta máxima"
                    },
                    "totalClosingOrders": {
                        "zh": "总平仓交易",
                        "en": "Total closed orders",
                        "vi": "Tổng các lệnh đóng",
                        "zh-Hant": "總平倉交易",
                        "id": "Total posisi tertutup",
                        "es": "Total órdenes cerradas",
                        "pt-BR": "Total de pedidos fechados"
                    },
                    "longsWon": {
                        "zh": "成功做多交易",
                        "en": "Longs won",
                        "vi": "Lệnh Mua thắng",
                        "zh-Hant": "成功做多交易",
                        "id": "Posisi Buy Menang",
                        "es": "Largos ganados",
                        "pt-BR": "Ganhos longos"
                    },
                    "shortsWon": {
                        "zh": "成功做空交易",
                        "en": "Shorts won",
                        "vi": "Lệnh bán thắng",
                        "zh-Hant": "成功做空交易",
                        "id": "Posisi Sell Menang",
                        "es": "Cortos ganados",
                        "pt-BR": "Ganhos curtos"
                    },
                    "lastTradingDay": {
                        "zh": "上一交易日状况",
                        "en": "Last day traded",
                        "vi": "Ngày cuối cùng để giao dịch",
                        "zh-Hant": "上壹交易日狀況",
                        "id": "Terakhir transaksi",
                        "es": "Último día operado",
                        "pt-BR": "Último dia negociado"
                    },
                    "nearly7DaysRateReturn": {
                        "zh": "近七日交易状况",
                        "en": "7-day rate of return",
                        "vi": "Tỷ lệ lợi nhuận 7 ngày",
                        "zh-Hant": "近七日交易狀況",
                        "id": "Rata-rata keuntungan dalam 7 hari",
                        "es": "7-días Tasa Retorno ",
                        "pt-BR": "Taxa de retorno de 7-dias"
                    },
                    "numberMonthlyAverage": {
                        "zh": "月平均交易笔数",
                        "en": "Monthly avg.",
                        "vi": "Trung bình hàng tháng",
                        "zh-Hant": "月平均交易筆數",
                        "id": "Rata-rata bulanan",
                        "es": "Media Mensual",
                        "pt-BR": "Média mensal"
                    },
                    "maximumDrawdown": {
                        "zh": "最大跌幅",
                        "en": "Max drawdown",
                        "vi": "Max drawdown",
                        "zh-Hant": "最大跌幅",
                        "id": "Drawdown maksimum",
                        "es": "Max Drawdown  ",
                        "pt-BR": "Rebaixamento máximo"
                    },
                    "steadyg": {
                        "zh": "最大跌幅",
                        "en": "Stability",
                        "vi": "Sự ổn định",
                        "zh-Hant": "最大跌幅",
                        "id": "Stabilitas",
                        "es": "Estabilidad",
                        "pt-BR": "Estabilidade"
                    },
                    "follow": {
                        "zh": "复制高手",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "復制高手",
                        "id": "Ikuti",
                        "es": "Seguir ",
                        "pt-BR": "Seguir"
                    },
                    "tip1": {
                        "zh": "若复制金额低于建议复制金额，当高手下单手数较小时,可能会导致跟单失败。为了保障您的利益，最好填写建议复制金额。",
                        "en": "If the copy amount is lower than the recommended amount of replication, when the master single hand count is small, may lead to a single failure. In order to protect your interests, it is best to fill in the recommended copy amount.",
                        "vi": "Nếu số lượng sao chép thấp hơn số lượng sao chép được đề nghị, khi tổng số lượng bậc thầy nhỏ, có thể dẫn đến một lỗi duy nhất. Để bảo vệ lợi ích của bạn, tốt nhất bạn nên điền số tiền sao chép được đề xuất.",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時,可能會導致跟單失敗。為了保障您的利益，最好填寫建議復制金額。",
                        "id": " Jika anda memasukkan dana untuk mengikuti Master dengan nilai dibawah rekomendasi, posisi tidak akan terbuka di akun anda apabila Lot trading master kecil. Karena itu untuk memastikan keamanan margin anda, isilah dana sesuai dengan nilai yang direkomendasikan ",
                        "es": "Si el importe copy es inferior a la cantidad recomendada de réplica, cuando el volumen del master es pequeño pudiera da lugar a error. Para proteger sus intereses es recomendable ingresar el importe recomendado de copia.",
                        "pt-BR": "Se o valor da cópia for menor que a quantidade recomendada de replicação, quando a contagem de mão única principal for pequena, poderá levar a uma única falha. Para proteger seus interesses, é melhor preencher o valor da cópia recomendada."
                    },
                    "tip2": {
                        "zh": "可用金额不足，去充值",
                        "en": "Available amount is insufficient, deposit",
                        "vi": "Số tiền có sẵn không đủ, tiền gửi",
                        "zh-Hant": "可用金額不足，去充值",
                        "id": " Saldo tidak mencukupi, isi dana ",
                        "es": "Importe disponible es insuficiente, deposite",
                        "pt-BR": "Quantidade disponível é insuficiente, depósito"
                    },
                    "tip3": {
                        "zh": "复制高手成功",
                        "en": "Follow Successful",
                        "vi": "Sao chép thành công",
                        "zh-Hant": "復制高手成功",
                        "id": "Berhasil mengikuti",
                        "es": "Seguir Éxito",
                        "pt-BR": "Seguida com sucesso"
                    },
                    "cancelFollow": {
                        "zh": "解除跟随关系",
                        "en": "Cancel Follow",
                        "vi": "Hủy Sao chép",
                        "zh-Hant": "解除跟隨關系",
                        "id": "Berhenti mengikuti",
                        "es": "Cancelar Seguir",
                        "pt-BR": "Cancelar seguida"
                    },
                    "currentCopyAmount": {
                        "zh": "当前复制金额",
                        "en": "Current copy amount",
                        "vi": "Sao chép số tiền hiện tại",
                        "zh-Hant": "當前復制金額",
                        "id": "Jumlah dana copy saat ini",
                        "es": "Importe actual copy",
                        "pt-BR": "Quantia atual de cópia"
                    },
                    "currentCopyAmountM": {
                        "zh": "当前复制金额：",
                        "en": "Current copy amount: ",
                        "vi": "Sao chép số tiền hiện tại: ",
                        "zh-Hant": "當前復制金額：",
                        "id": " Jumlah dana copy saat ini",
                        "es": "Importe copy actual: ",
                        "pt-BR": "Quantia atual de cópia:"
                    },
                    "tigerWitCopyAgreements": {
                        "zh": "复制协议",
                        "en": "TigerWit Copy Agreements",
                        "vi": "Thỏa thuận Sao chép của TigerWit",
                        "zh-Hant": "復制協議",
                        "id": "Perjanjian Copy TigerWit",
                        "es": "Acuerdo Copy TigerWit",
                        "pt-BR": "Acordos de Cópia da TigerWit"
                    },
                    "tigerWitCopyAgreements1": {
                        "zh": "使用TigerWit复制跟单服务时，请您务必审慎阅读、充分理解以下协议内容：",
                        "en": "When you use TigerWit follow service, please make sure to read and fully understand the following contant of agreements: ",
                        "vi": "Khi bạn sử dụng dịch vụ sao chép của TigerWit, vui lòng đảm bảo rằng bạn đã đọc và thật sự hiểu các mục của thỏa thuận: ",
                        "zh-Hant": "使用TigerWit復制跟單服務時，請您務必審慎閱讀、充分理解以下協議內容：",
                        "id": "Mohon pastikan anda telah membaca dan mengerti sepenuhnya mengenai isi dari perjanjian ini sebelum menggunakan layanan Copy TigerWit.",
                        "es": "Cuando utilice el servicio copy de TigerWit, asegúrese de leer y comprender completamente el siguiente contenido de los acuerdos:: ",
                        "pt-BR": "Quando você usa o serviço TigerWit, por favor, certifique-se de ler e entender completamente o seguinte conteúdo dos acordos:"
                    },
                    "tigerWitCopyAgreements2": {
                        "zh": "1.系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        "en": "1. System will use the special copy account to follow masters, the special copy account will be generated if there is no one, and all copy operation will use this special account;",
                        "vi": "Hệ thống sẽ sử dụng tài khoản sao chép đặc biệt để sao chép bậc thầy, tài khoản sao chép đặc biệt sẽ được tạo nếu không có ai, và tất cả hoạt động sao chép sẽ sử dụng tài khoản đặc biệt này;",
                        "zh-Hant": "1.系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；",
                        "id": " Sistem di TigerWit akan membuatkan akun copy secara otomatis untuk anda apabila anda belum pernah membuatnya. Dengan menggunakan Akun Copy, anda dapat mengikuti Master dan semua transaksi copy akan dilakukan melalui Akun Copy tersebut ",
                        "es": "1. El sistema empleará una cuenta específica para copiar al Master. Se le generará una automáticamente si no tiene, donde se ejecutarán todos los trades replicados; ",
                        "pt-BR": "1. O sistema usará a conta de cópia especial para seguir os mestres, a conta de cópia especial será gerada se não houver ninguém e toda a operação de cópia usará essa conta especial;"
                    },
                    "tigerWitCopyAgreements3": {
                        "zh": "2.复制成功后，跟单账号自动跟随高手进行同步开平仓交易；",
                        "en": "2. After successful follow, the copy account will open orders with master synchronously;",
                        "vi": "Sauk hi sao chép thành công, tài khoản sao chép sẽ đồng bộ mở các lệnh với bậc thầy;",
                        "zh-Hant": "2.復制成功後，跟單帳號自動跟隨高手進行同步開平倉交易；",
                        "id": "2. Setelah berhasil mengikuti Master, Akun Copy akan membuka posisi sesuai dengan posisi Master.",
                        "es": "2. Después de seguir con éxito, la cuenta copy abrirá las órdenes con el Master de modo sincronizado;",
                        "pt-BR": "2. Após o sucesso, a conta de cópia abrirá pedidos com o mestre de forma síncrona;"
                    },
                    "tigerWitCopyAgreements4": {
                        "zh": "3.系统将定时对您跟随高手的情况进行统计并结算，扣除跟随该高手盈利部分的20%作为该高手佣金。",
                        "en": "3. System will statistics and settlement all the orders and deduct 20% as commission when you cancel and force a flat.",
                        "vi": "Hệ thống sẽ thống kê và thanh toán tất cả các lệnh và khấu trừ 20% lợi nhuận hoa hồng khi bạn hủy và buộc đóng hết các lệnh.",
                        "zh-Hant": "3.系統將定時對您跟隨高手的情況進行統計並結算，扣除跟隨該高手盈利部分的20%作為該高手傭金。",
                        "id": " 3. Ketika anda memilih “berhenti mengikuti master dan tutup semua posisi” Sistem akan langsung menghitung dan membagikan komisi sebesar 20% yang diambil dari total keuntungan dari posisi yang ditutup ",
                        "es": "3. El sistema realizará estadísticas y liquidará todas las órdenes y deducirá el 20% como comisión cuando cancele y forzar flat.",
                        "pt-BR": "3. Sistema irá estatísticas e liquidação de todas as ordens e deduzir 20% como comissão quando você cancelar e forçar um apartamento."
                    },
                    "tigerWitCopyAgreements5": {
                        "zh": "在决定复制高手时，您确认已经考虑了您的整体财务状况，包括财务承诺，并且您了解使用复制跟单服务具有高度投机性并且您可以承受巨大的损失用于复制高手。",
                        "en": "Before follow a master, please make sure you already consider your financial status and understand the copy service have highly speculative also could sustain a great loss.",
                        "vi": "Trước khi làm theo một bậc thầy, hãy chắc chắn rằng bạn đã xem xét tình trạng tài chính của bạn và hiểu các dịch vụ sao chép có tính đầu cơ cao cũng có thể duy trì số lỗ lớn.",
                        "zh-Hant": "在抉定復制高手時，您確認已經考慮了您的整體材務狀況，包括材務承諾，並且您了解使用復制跟單服務具有高度投機性並且您可以承受巨大的損失用於復制高手。",
                        "id": " Sebelum mengikuti Master, pastikan bahwa anda telah mempertimbangkan semua kondisi keuangan anda dan paham bahwa menggunakan layanan Copy memiliki resiko dan bersifat spekulatif serta dapat menimbulkan kehilangan modal.",
                        "es": "Cuando decide seguir a un Master, está confirmando que ha considerado su situación financiera general y entiende que el uso de servicios de copy-trading es altamente especulativo y pudiera conllevar pérdidas potenciales. ",
                        "pt-BR": "Antes de seguir um mestre, certifique-se de que você já considera seu status financeiro e entende que o serviço de cópia altamente especulativo também poderia sustentar uma grande perda."
                    },
                    "tigerWitCopyAgreements6": {
                        "zh": "请注意，我们无法就任何特定投资，账户，投资组合或策略的表现提供任何保证。",
                        "en": "Caution, we cannot provide any assurance of the performance of any specific investment, account, portfolio or strategy.",
                        "vi": "Thận trọng, chúng tôi không thể cung cấp bất kỳ sự đảm bảo nào về hiệu suất của bất kỳ đầu tư, tài khoản, danh mục đầu tư hoặc chiến lược cụ thể nào.",
                        "zh-Hant": "請註意，我們無法就任何特定投資，賬戶，投資組合或策略的表現提供任何保證。",
                        "id": " Peringatan, kami tidak menjamin segala hasil investasi, akun, portofolio, maupun strategi ",
                        "es": "Precaución, tenga presente que no ofrecemos garantías sobre el rendimiento de una inversión, cuenta, portfolio o estrategia en particular.",
                        "pt-BR": "Atenção, não podemos fornecer qualquer garantia do desempenho de qualquer investimento, conta, portfólio ou estratégia específica."
                    },
                    "tigerWitCopyAgreements7_1": {
                        "zh": "如您对协议有任何疑问，可拨打客服热线",
                        "en": "If you have any question about the copy regulations, please contact the service center ",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào về quy định sao chép, vui lòng liên hệ với trung tâm dịch vụ ",
                        "zh-Hant": "如您對協議有任何疑問，可撥打客服熱線",
                        "id": " Apabila anda memiliip pertanyaan mengenai peraturan copy, silahkan hubungi pusat layanan pelanggan",
                        "es": "Para cualquier consulta sobre las reglas, por favor, cotacte con el centro de servicio ",
                        "pt-BR": "Se tiver alguma dúvida sobre os regulamentos de cópia, entre em contato com o centro de atendimento"
                    },
                    "tigerWitCopyAgreements7_2": {
                        "zh": "进行咨询。",
                        "en": ".",
                        "vi": ".",
                        "zh-Hant": "進行咨詢。",
                        "id": ".",
                        "es": ".",
                        "pt-BR": "."
                    },
                    "copyRegulations": {
                        "zh": "《复制规则》",
                        "en": "Copy rule",
                        "vi": "Quy tắc sao chép",
                        "zh-Hant": "《復制規則》",
                        "id": "Peraturan Copy",
                        "es": "Reglas copy",
                        "pt-BR": "Regra de cópia"
                    },
                    "tip4": {
                        "zh": "指从当前日期开始最近七个自然日交易状况。",
                        "en": "Master’s return over previous 7 days of trading.",
                        "vi": "Lợi nhuận của bậc thầy trong 7 ngày giao dịch trước đó.",
                        "zh-Hant": "指從當前日期開始最近七個自然日交易狀況。",
                        "id": " Keuntungan Master 7 hari terakhir ",
                        "es": "Retorno Master previos 7 días de trading.",
                        "pt-BR": "O retorno da Master nos últimos 7 dias de negociação."
                    },
                    "tip5": {
                        "zh": "指该高手最后一次有交易行为的数据统计。",
                        "en": "Master’s return over previous trading day.",
                        "vi": "Lợi nhuận của bậc thầy trong những ngày trước đó.",
                        "zh-Hant": "指該高手最後壹次有交易行為的數據統計。",
                        "id": "Keuntungan master sebelumnya",
                        "es": "Retorno Master previo día de trading.",
                        "pt-BR": "Retorno do mestre ao longo do dia de negociação anterior."
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
                        "pt-BR": "Registros do Fundo"
                    },
                    "rechargeSuccess": {
                        "zh": "充值成功",
                        "en": "Recharge Success",
                        "vi": "Nạp tiền thêm thành công",
                        "zh-Hant": "充值成功",
                        "id": "Berhasil mengisi dana",
                        "es": "Recarga Éxito",
                        "pt-BR": "Recarga feita com sucesso"
                    },
                    "refusedWithdraw": {
                        "zh": "拒绝提现",
                        "en": "Refused to Withdraw",
                        "vi": "Từ chối Rút tiền",
                        "zh-Hant": "拒絕提現",
                        "id": "Penarikan ditolak",
                        "es": "Reembolso Rechazado",
                        "pt-BR": "Saque recusado"
                    },
                    "successfulWithdrawal": {
                        "zh": "提现成功",
                        "en": "Successful Withdrawal",
                        "vi": "Rút tiền thành công",
                        "zh-Hant": "提現成功",
                        "id": "Penarikan sukses",
                        "es": "Reembolso Éxito",
                        "pt-BR": "Saque Sucedido"
                    },
                    "cancelWithdrawal": {
                        "zh": "提现已撤销",
                        "en": "Cancel Withdrawal",
                        "vi": "Hủy Rút tiền",
                        "zh-Hant": "提現已撤銷",
                        "id": "Penarikan dibatalkan",
                        "es": "Cancelar reembolso",
                        "pt-BR": "Cancelar saque"
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
                        "pt-BR": "Carteira"
                    },
                    "details": {
                        "zh": "查看明细",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "查看明細",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes"
                    },
                    "manageBankCards": {
                        "zh": "管理银行卡",
                        "en": "Manage Bank Cards",
                        "vi": "Quản Lý Thẻ Ngân Hàng",
                        "zh-Hant": "管理銀行卡",
                        "id": "Atur rekening bank",
                        "es": "Gestionar Tarjetas Banco",
                        "pt-BR": "Gerenciar Cartões de banco"
                    },
                    "addBankCards": {
                        "zh": "添加银行卡",
                        "en": "Add Bank Cards",
                        "vi": "Thêm Tài khoản \"Ngân hàng\"",
                        "zh-Hant": "添加銀行卡",
                        "id": "Tambah rekening bank",
                        "es": "Añadir Tarjetas Banco ",
                        "pt-BR": "Adicionar cartões de banco"
                    },
                    "name": {
                        "zh": "持卡人",
                        "en": "Name",
                        "vi": "Họ Tên",
                        "zh-Hant": "持卡人",
                        "id": "Nama",
                        "es": "Nombre",
                        "pt-BR": "Nome"
                    },
                    "nameM": {
                        "zh": "持卡人：",
                        "en": "Name: ",
                        "vi": "Họ Tên: ",
                        "zh-Hant": "持卡人：",
                        "id": "Nama: ",
                        "es": "Nombre: ",
                        "pt-BR": "Nome:"
                    },
                    "cardholderName": {
                        "zh": "请输入持卡人姓名",
                        "en": "Type cardholder's name",
                        "vi": "Nhập tên chủ thẻ",
                        "zh-Hant": "請輸入持卡人姓名",
                        "id": " Nama pemilik rekening ",
                        "es": "Escriba nombre titular tarjeta",
                        "pt-BR": "Digite nome do portador do cartão"
                    },
                    "bankCountry": {
                        "zh": "银行国家",
                        "en": "Bank’s country",
                        "vi": "Quốc gia",
                        "zh-Hant": "銀行國家",
                        "id": "Negara Bank",
                        "es": "Banco País",
                        "pt-BR": "País do Banco"
                    },
                    "bankCountryM": {
                        "zh": "银行国家：",
                        "en": "Bank’s country: ",
                        "vi": "Quốc gia: ",
                        "zh-Hant": "銀行國家：",
                        "id": "Negara Bank: ",
                        "es": "Banco País: ",
                        "pt-BR": "País do Banco:"
                    },
                    "thirdAccNoSupport": {
                        "zh": "暂不支持",
                        "en": "Numbered Mode",
                        "vi": "Tạm không ủng hộ.",
                        "zh-Hant": "暫不支持",
                        "id": "Belum mendukung",
                        "es": "Modo números",
                        "pt-BR": "Modo numeral"
                    },
                    "pSelectThirdAccount": {
                        "zh": "请选择第三方平台",
                        "en": "请选择第三方平台",
                        "vi": "请选择第三方平台",
                        "zh-Hant": "請選擇協力廠商平臺",
                        "id": "Silahkan pilih platform pihak ketiga",
                        "es": "Por favor, seleccione una plataforma de terceros",
                        "pt-BR": "请选择第三方平台"
                    },
                    "thirdPartyAccount": {
                        "zh": "第三方账户",
                        "en": "Third-party accounts",
                        "vi": "Các tài khoản bên thứ 3",
                        "zh-Hant": "第三方賬戶",
                        "id": "Rekening pihak ke tiga",
                        "es": "Cuentas de terceros",
                        "pt-BR": "Conta de terceiros"
                    },
                    "manageThird": {
                        "zh": "管理第三方账户",
                        "en": "Manage",
                        "vi": "Quản lý",
                        "zh-Hant": "管理第三方賬戶",
                        "id": "Kelola",
                        "es": "Gestionar",
                        "pt-BR": "Gerenciar"
                    },
                    "addThirdAccount": {
                        "zh": "添加账户",
                        "en": "Add the third-party account",
                        "vi": "Thêm vào tài khoản bên thứ 3",
                        "zh-Hant": "添加賬戶",
                        "id": "Tambah Rekening pihak ke tiga",
                        "es": "Añadir la cuenta de terceros",
                        "pt-BR": "Adicione conta de terceiros"
                    },
                    "deleteThirdAccount": {
                        "zh": "删除账户",
                        "en": "Delete the third-party account",
                        "vi": "Xóa tài khoản bên thứ 3",
                        "zh-Hant": "刪除賬戶",
                        "id": "Hapus Rekening pihak ke tiga",
                        "es": "Eliminar la cuenta de terceros",
                        "pt-BR": "Apague conta de terceiros"
                    },
                    "deleteThirdAccountTip": {
                        "zh": "确定删除该账户？",
                        "en": "Are you sure to delete this account?",
                        "vi": "Bạn có chắc muốn xóa tài khoản này?",
                        "zh-Hant": "確定刪除該賬戶？",
                        "id": "Apakah anda yakin menghapus rekening ini?",
                        "es": "¿Estás seguro de eliminar esta cuenta?",
                        "pt-BR": "Tem certeza de que quer deletar esta conta?"
                    },
                    "switchThird": {
                        "zh": "切换第三方账户",
                        "en": "Switch",
                        "vi": "Chuyển đổi",
                        "zh-Hant": "切換賬戶",
                        "id": "Pindah",
                        "es": "Cambiar",
                        "pt-BR": "Trocar"
                    },
                    "pSelectBank": {
                        "zh": "请选择开户行",
                        "en": "Select opening account bank",
                        "vi": "Chọn mở một tài khoản ngân hàng",
                        "zh-Hant": "請選擇開戶行",
                        "id": "Pilih buka rekening bank",
                        "es": "Seleccione cuenta de apertura bancaria",
                        "pt-BR": "Selecione o banco de abertura de conta"
                    },
                    "selectBank": {
                        "zh": "选择开户行",
                        "en": "Select opening account bank",
                        "vi": "Chọn mở một tài khoản ngân hàng",
                        "zh-Hant": "選擇開戶行",
                        "id": " Pilih buka rekening bank ",
                        "es": "Seleccione cuenta de apertura bancaria",
                        "pt-BR": "Selecione o banco de abertura de conta"
                    },
                    "selectBankM": {
                        "zh": "选择开户行：",
                        "en": "Select opening account bank: ",
                        "vi": "Chọn mở một tài khoản ngân hàng: ",
                        "zh-Hant": "選擇開戶行：",
                        "id": " Pilih buka rekening bank",
                        "es": "Seleccione cuenta de apertura banco: ",
                        "pt-BR": "Selecione o banco de abertura de conta:"
                    },
                    "fillAccount": {
                        "zh": "请填写账号",
                        "en": "Fill in the account",
                        "vi": "Điền vào tài khoản",
                        "zh-Hant": "請填寫賬號",
                        "id": "Isi informasi",
                        "es": "Escriba la cuenta",
                        "pt-BR": "Preencha a conta"
                    },
                    "fillAccountM": {
                        "zh": "请填写账号：",
                        "en": "Fill in the account: ",
                        "vi": "Điền vào tài khoản: ",
                        "zh-Hant": "請填寫賬號：",
                        "id": "Isi informasi: ",
                        "es": "Escriba la cuenta: ",
                        "pt-BR": "Preencha a conta:"
                    },
                    "accountNameM": {
                        "zh": "账户名称：",
                        "en": "Account name: ",
                        "vi": "Tên tài khoản: ",
                        "zh-Hant": "賬戶名稱：",
                        "id": "Nama pemilik Rekening: ",
                        "es": "Nombre cuenta: ",
                        "pt-BR": "Nome da conta:"
                    },
                    "completeInfo": {
                        "zh": "请完善第三方账户信息",
                        "en": "Please complete third party account information",
                        "vi": "Vui lòng xóa thông tin tài khoản bên thứ ba",
                        "zh-Hant": "請完善第三方賬戶信息",
                        "id": "Silahkan lengkapi informasi rekening pihak ke tiga",
                        "es": "Por favor, complete información cuentas terceros",
                        "pt-BR": "Por favor complete informações da conta de terceiros"
                    },
                    "bankName": {
                        "zh": "请填写您的银行名称",
                        "en": "Bank name",
                        "vi": "Tên tài khoản ngân hàng",
                        "zh-Hant": "請填寫您的銀行名稱",
                        "id": "Nama Bank",
                        "es": "Nombre banco",
                        "pt-BR": "Nome do Banco"
                    },
                    "fillBank": {
                        "zh": "填写开户行",
                        "en": "Fill in the opening account bank",
                        "vi": "Tên ngân hàng (bằng tiếng Anh)",
                        "zh-Hant": "填寫開戶行",
                        "id": "Isi data pembukaan rekening bank",
                        "es": "Escriba cuenta banco apertura",
                        "pt-BR": "Preencha o banco da conta de abertura"
                    },
                    "fillBankM": {
                        "zh": "填写开户行：",
                        "en": "Fill in the opening account bank: ",
                        "vi": "Tên ngân hàng (bằng tiếng Anh): ",
                        "zh-Hant": "填寫開戶行：",
                        "id": " Isi data pembukaan rekening bank ",
                        "es": "Escriba cuenta banco apertura: ",
                        "pt-BR": "Preencher o banco de abertura de conta:"
                    },
                    "bankIdentificationCode": {
                        "zh": "银行机构鉴定代码",
                        "en": "Bank identification code",
                        "vi": "Mã nhận dạng ngân hàng",
                        "zh-Hant": "銀行機構鑒定代碼",
                        "id": "Kode identifikasi bank",
                        "es": "Código identificación banco",
                        "pt-BR": "Código de identificação do banco"
                    },
                    "bankIdentificationCodeM": {
                        "zh": "银行机构鉴定代码：",
                        "en": "Bank identification code: ",
                        "vi": "Mã nhận dạng ngân hàng ",
                        "zh-Hant": "銀行機構鑒定代碼：",
                        "id": " Kode identifikasi bank ",
                        "es": "Código identificación banco: ",
                        "pt-BR": "Código de identificação do banco:"
                    },
                    "fillBankIdentificationCode": {
                        "zh": "请填写您的银行机构鉴定代码",
                        "en": "Please fill in the bank identification code",
                        "vi": "Vui lòng điền vào mã nhận dạng ngân hàng",
                        "zh-Hant": "請填寫您的銀行機構鑒定代碼",
                        "id": "Silahkan masukkan kode identifikasi bank",
                        "es": "Por favor, rellene el código de identificación banco",
                        "pt-BR": "Por favor, preencha o código de identificação do banco"
                    },
                    "selectAccountPro": {
                        "zh": "请选择开户省",
                        "en": "Select opening account province",
                        "vi": "Chọn mở tài khoản tỉnh",
                        "zh-Hant": "請選擇開戶省",
                        "id": "Pilih provinsi",
                        "es": "Seleccione provincia apertura cuenta ",
                        "pt-BR": "Selecionar região da abertura de conta"
                    },
                    "selectAccountCity": {
                        "zh": "请选择开户市",
                        "en": "Select opening account city",
                        "vi": "Chọn mở tài khoản thành phố",
                        "zh-Hant": "請選擇開戶市",
                        "id": "Pilih kota",
                        "es": "Seleccione  ciudad apertura cuenta ",
                        "pt-BR": "Selecionar cidade da abertura de conta"
                    },
                    "enterBranchBankName": {
                        "zh": "请输入支行名称",
                        "en": "Enter branch bank name",
                        "vi": "Nhập tên chi nhánh ngân hàng",
                        "zh-Hant": "請輸入支行名稱",
                        "id": "Masukkan nama cabang bank",
                        "es": "Ingrese el nombre del banco",
                        "pt-BR": "Inserir nome da filial do banco"
                    },
                    "enterOpeningAccountAddress": {
                        "zh": "请输入开户地址",
                        "en": "Enter opening account address",
                        "vi": "Tỉnh",
                        "zh-Hant": "請輸入開戶地址",
                        "id": "Masukkan alamat rekening",
                        "es": "Ingrese la dirección de la cuenta de apertura",
                        "pt-BR": "Inserir endereço de abertura de conta"
                    },
                    "uploadIdentification": {
                        "zh": "上传身份证明",
                        "en": "Upload identification",
                        "vi": "Tải lên nhận dạng",
                        "zh-Hant": "上傳身份證明",
                        "id": "Unggah dokumen",
                        "es": "Subir identificación",
                        "pt-BR": "Fazer upload da identificação"
                    },
                    "clickUploadDocuments": {
                        "zh": "点击上传证件进行实名验证",
                        "en": "Upload",
                        "vi": "Tải lên",
                        "zh-Hant": "點擊上傳證件進行實名驗證",
                        "id": "klik untuk mengunggah dokumen",
                        "es": "Subir",
                        "pt-BR": "Upload"
                    },
                    "completeInformation": {
                        "zh": "完善资料",
                        "en": "Complete information",
                        "vi": "Hoàn thành thông tin",
                        "zh-Hant": "完善資料",
                        "id": "Lengkapi informasi",
                        "es": "Información completa",
                        "pt-BR": "Informação completa"
                    },
                    "bankAddress": {
                        "zh": "开户地址",
                        "en": "Opening account bank’s address",
                        "vi": "Tỉnh",
                        "zh-Hant": "開戶地址",
                        "id": "Alamat bank",
                        "es": "Dirección apertura cuenta banco.",
                        "pt-BR": "Endereço do banco de abertura de conta"
                    },
                    "bankAddressM": {
                        "zh": "开户地址：",
                        "en": "Opening account bank’s address: ",
                        "vi": "Tỉnh: ",
                        "zh-Hant": "開戶地址：",
                        "id": "Alamat bank",
                        "es": "Dirección apertura cuenta banco: ",
                        "pt-BR": "Endereço do banco de abertura de conta:"
                    },
                    "reservedPhoneNumber": {
                        "zh": "预留手机号",
                        "en": "Reserved phone number",
                        "vi": "Số điện thoại dự phòng",
                        "zh-Hant": "預留手機號",
                        "id": "Nomor telepon",
                        "es": "Número teléfono asignado",
                        "pt-BR": "Número de telefone reservado"
                    },
                    "reservedPhoneNumberM": {
                        "zh": "预留手机号：",
                        "en": "Reserved phone number: ",
                        "vi": "Số điện thoại dự phòng: ",
                        "zh-Hant": "預留手機號：",
                        "id": " Nomor telepon: ",
                        "es": "Número teléfono asignado: ",
                        "pt-BR": "Número de telefone reservado:"
                    },
                    "adding": {
                        "zh": "正在添加",
                        "en": "Adding",
                        "vi": "Đang thêm vào",
                        "zh-Hant": "正在添加",
                        "id": "Menambah",
                        "es": "Añadiendo",
                        "pt-BR": "Adicionando"
                    },
                    "bindingSuccess": {
                        "zh": "绑定成功",
                        "en": "Binding success",
                        "vi": "Liên kết thành công",
                        "zh-Hant": "邦定成功",
                        "id": "Pendaftaran sukses",
                        "es": "Éxito vincular",
                        "pt-BR": "Sucesso vinculativo"
                    },
                    "tip1": {
                        "zh": "因要求，请填写该银行卡的预留手机号",
                        "en": "Please fill in the reserved phone number of the bank card as required",
                        "vi": "Vui lòng điền số điện thoại dự phòng của thẻ ngân hàng theo yêu cầu",
                        "zh-Hant": "因要求，請填寫該銀行卡的預留手機號",
                        "id": "Silahkan masukkan nomor telepon yang terdaftar di bank ",
                        "es": "Por favor, rellene el número de teléfono reservado de la tarjeta bancaria como requerido",
                        "pt-BR": "Por favor, preencha o número de telefone reservado do cartão bancário, conforme necessário"
                    },
                    "tip2": {
                        "zh": "手机号绑定成功",
                        "en": "The phone number is bound successfully",
                        "vi": "Số điện thoại được liên kết thành công",
                        "zh-Hant": "手機號邦定成功",
                        "id": " Nomor telepon berhasil didaftarkan ",
                        "es": "El número de teléfono está enlazado con éxito",
                        "pt-BR": "O número de telefone está vinculado com sucesso"
                    },
                    "switchBankCard": {
                        "zh": "切换银行卡",
                        "en": "Switch bank card",
                        "vi": "Chuyển thẻ ngân hàng",
                        "zh-Hant": "切換銀行卡",
                        "id": "Pindah rekening bank",
                        "es": "Cambiar tarjeta bancaria",
                        "pt-BR": "Trocar cartão bancário"
                    },
                    "deleteBankCard": {
                        "zh": "删除银行卡",
                        "en": "Delete bank card",
                        "vi": "Xóa thẻ ngân hàng",
                        "zh-Hant": "刪除銀行卡",
                        "id": "Hapus rekening bank",
                        "es": "Borrar tarjeta bancaria",
                        "pt-BR": "Excluir cartão bancário"
                    },
                    "tip3": {
                        "zh": "确认删除本银行卡，如需再次使用需重新验证",
                        "en": "Confirm to delete this bank card. If it needs to be used again, it needs to be verified again",
                        "vi": "Xác nhận xóa thẻ ngân hàng này. Nếu nó cần phải được sử dụng một lần nữa, nó cần phải được xác minh lại",
                        "zh-Hant": "確認刪除本銀行卡，如需再次使用需重新驗證",
                        "id": " Konfirmasi untuk menghapus rekening bank. Dibutuhkan verifikasi ulang apabila anda ingin menggunakan rekening ini lagi. ",
                        "es": "Confirmar para eliminar esta tarjeta bancaria. Si necesita ser usada nuevamente, necesitaría ser verificada otra vez",
                        "pt-BR": "Confirme para eliminar este cartão bancário. Se precisar ser usado novamente, precisará ser verificado novamente"
                    },
                    "bindBankCard": {
                        "zh": "点击绑定银行卡",
                        "en": "Bind bank card",
                        "vi": "Liên kết tài khoản ngân hàng",
                        "zh-Hant": "點擊邦定銀行卡",
                        "id": "Daftarkan rekening bank",
                        "es": "Asociar tarjeta bancaria",
                        "pt-BR": "Vincular cartão bancário"
                    },
                    "walletBalance": {
                        "zh": "钱包总额",
                        "en": "Wallet balance",
                        "vi": "Số dư trong ví",
                        "zh-Hant": "錢包總額",
                        "id": "Saldo Dompet",
                        "es": "Balance Wallet",
                        "pt-BR": "Balanço da Carteira"
                    },
                    "bankCardList": {
                        "zh": "获取银行卡列表失败！",
                        "en": "Fail to access bank card list!",
                        "vi": "Không thể truy cập danh sách thẻ ngân hàng",
                        "zh-Hant": "獲取銀行卡列表失敗！",
                        "id": "Gagal mengakses daftar rekening bank",
                        "es": "¡Error acceso lista tarjetas banco!",
                        "pt-BR": "Falha ao acessar lista de cartão bancário"
                    },
                    "tip4_1": {
                        "zh": "银行卡 ",
                        "en": "The bank card ",
                        "vi": "Thẻ ngân hàng ",
                        "zh-Hant": "銀行卡 ",
                        "id": "Rekening bank ",
                        "es": "La tarjeta bancaria ",
                        "pt-BR": "O cartão bancário "
                    },
                    "tip4_2": {
                        "zh": " 绑定成功",
                        "en": " has been successfully bound",
                        "vi": " đã được liên kết thành công",
                        "zh-Hant": " 邦定成功",
                        "id": " telah berhasil didaftarkan",
                        "es": " ha sido asociada con éxito",
                        "pt-BR": "foi vinculado com sucesso"
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
                        "pt-BR": "Transferência bancária"
                    },
                    "addWireTransfer": {
                        "zh": "添加电汇账户",
                        "en": "Add wire transfer account",
                        "vi": "Thêm TK chuyển khoản NH",
                        "zh-Hant": "添加電匯賬戶",
                        "id": "Tambah rekening pengiriman uang",
                        "es": "Añadir cuenta de transferencia bancaria",
                        "pt-BR": "Adicionar conta para transferência bancária"
                    },
                    "clickDelete": {
                        "zh": "点击删除账户",
                        "en": "Click to delete",
                        "vi": "Nhấp để hủy",
                        "zh-Hant": "點擊删除帳戶",
                        "id": "Klik untuk hapus",
                        "es": "Haga clic para eliminar",
                        "pt-BR": "Clique para deletar"
                    },
                    "deleteWireTransfer": {
                        "zh": "删除电汇账户",
                        "en": "Delete wire transfer account",
                        "vi": "Xóa TK chuyển khoản ngân hàng",
                        "zh-Hant": "刪除電匯賬戶",
                        "id": "Hapus rekening pengiriman dana",
                        "es": "Eliminar cuenta de transferencia bancaria",
                        "pt-BR": "Deletar conta para transferência bancária"
                    },
                    "deleteThisAccount": {
                        "zh": "确认删除此账户？",
                        "en": "Delete this account?",
                        "vi": "Xóa tài khoản?",
                        "zh-Hant": "確認删除此帳戶？",
                        "id": "Hapus akun ini？",
                        "es": "¿Borrar esta cuenta?",
                        "pt-BR": "Deletar esta conta?"
                    },
                    "clickAddWireTransfer": {
                        "zh": "点击添加电汇账户",
                        "en": "Click to add wire transfer account",
                        "vi": "Thêm TK chuyển khoản NH",
                        "zh-Hant": "點擊添加電匯賬戶",
                        "id": "Klik untuk tambah rekening",
                        "es": "Haga clic para agregar cuenta transferencia bancaria",
                        "pt-BR": "Clique para adicionar uma conta de transferência bancária"
                    },
                    "manageWireTransfer": {
                        "zh": "管理电汇账户",
                        "en": "Manage",
                        "vi": "Quản lý",
                        "zh-Hant": "管理電匯賬戶",
                        "id": "Kelola",
                        "es": "Gestionar",
                        "pt-BR": "Gerenciar"
                    },
                    "cardNumber": {
                        "zh": "电汇账号",
                        "en": "Card number",
                        "vi": "Số Thẻ",
                        "zh-Hant": "電匯賬號",
                        "id": "Nomor rekening",
                        "es": "Número de tarjeta",
                        "pt-BR": "Número do cartão"
                    },
                    "cardNumberM": {
                        "zh": "电汇账号：",
                        "en": "Card number:",
                        "vi": "Số Thẻ:",
                        "zh-Hant": "電匯賬號：",
                        "id": "Nomor rekening:",
                        "es": "Número de tarjeta:",
                        "pt-BR": "Número do cartão:"
                    },
                    "bicSwiftCode": {
                        "zh": "BIC/Swift code",
                        "en": "BIC/Swift code",
                        "vi": "Mã BIC/Swift",
                        "zh-Hant": "BIC/Swift code",
                        "id": "BIC/Kode Swift",
                        "es": "Código BIC/Swift",
                        "pt-BR": "BIC/código Swift"
                    },
                    "bicSwiftCodeM": {
                        "zh": "BIC/Swift code：",
                        "en": "BIC/Swift code:",
                        "vi": "Mã BIC/Swift:",
                        "zh-Hant": "BIC/Swift code：",
                        "id": "BIC/Kode Swift:",
                        "es": "Código BIC/Swift:",
                        "pt-BR": "BIC/código Swift:"
                    },
                    "fillBicSwiftCode": {
                        "zh": "请填写 BIC/Swift code",
                        "en": "Please fill in BIC/Swift code",
                        "vi": "Xin điền vào Mã BIC/Swift",
                        "zh-Hant": "請填寫 BIC/Swift code",
                        "id": "Silahkan isi BIC/Kode Swift",
                        "es": "Por favor, rellene el código BIC/Swift",
                        "pt-BR": "Por favor preencha código Swift/BIC"
                    },
                    "chooseCountry": {
                        "zh": "请选择银行所在的国家",
                        "en": "Please choose country",
                        "vi": "Vui lòng chọn quốc gia",
                        "zh-Hant": "請選擇銀行所在的國家",
                        "id": "Silahkan pilih Negara",
                        "es": "Por favor seleccione país",
                        "pt-BR": "Por favor selecione um país"
                    },
                    "fillWithdrawAccount": {
                        "zh": "请填写电汇账号",
                        "en": "Please fill in withdraw account",
                        "vi": "Vui lòng điền tài khoản rút tiền",
                        "zh-Hant": "請填寫電匯賬號",
                        "id": "Silahkan isi akun penarikan",
                        "es": "Por favor, rellene la cuenta reembolso",
                        "pt-BR": "Por favor, preencha a conta para saque"
                    },
                    "fillBankName": {
                        "zh": "请输入银行的英文全称（包括支行名称）",
                        "en": "Fill bank English full name (include branch name)",
                        "vi": "Xin điền tên Tiếng Anh đầy đủ (gồm tên chi nhánh)",
                        "zh-Hant": "請輸入銀行的英文全稱（包括支行名稱）",
                        "id": "Silahkan isi nama bank (termasuk nama cabang)",
                        "es": "Nombre completo del banco en Inglés (incluya nombre sucursal)",
                        "pt-BR": "Preencha o nome completo do banco em inglês (inclua o nome da filial)"
                    },
                    "switchTransferAccount": {
                        "zh": "切换账户",
                        "en": "Switch account",
                        "vi": "Đổi TK chuyển khoản",
                        "zh-Hant": "切換電匯賬戶",
                        "id": "Alihkan akun",
                        "es": "Cambiar cuenta",
                        "pt-BR": "Trocar conta"
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
                        "pt-BR": "Cupom"
                    },
                    "available": {
                        "zh": "可用红包",
                        "en": "Available",
                        "vi": "Khả dụng",
                        "zh-Hant": "可用紅包",
                        "id": "Tersedia",
                        "es": "Disponible",
                        "pt-BR": "Disponível"
                    },
                    "records": {
                        "zh": "红包记录",
                        "en": "Records",
                        "vi": "Hồ sơ",
                        "zh-Hant": "紅包記錄",
                        "id": "Catatan",
                        "es": "Archivos",
                        "pt-BR": "Registros"
                    },
                    "automaticReceive": {
                        "zh": "自动领取红包",
                        "en": "Automatic Receive",
                        "vi": "Nhận Tự Động",
                        "zh-Hant": "自動領取紅包",
                        "id": "Diterima",
                        "es": "Recepción automática",
                        "pt-BR": "Recebimento Automático"
                    },
                    "exchangeValidUntil": {
                        "zh": "兑换有效期截止至",
                        "en": "Exchange valid until ",
                        "vi": "Trao đổi hợp lệ cho đến khi ",
                        "zh-Hant": "兌換有效期截止至",
                        "id": "Berlaku hingga",
                        "es": "Cambio válido hasta ",
                        "pt-BR": "Trocar validade"
                    },
                    "exchangeDate": {
                        "zh": "兑换日期：",
                        "en": "Exchange date: ",
                        "vi": "Thay đổi ngày: ",
                        "zh-Hant": "兌換日期：",
                        "id": "Batas waktu penukaran",
                        "es": "Fecha canje: ",
                        "pt-BR": "Trocar data:"
                    },
                    "exchanging": {
                        "zh": "兑换中",
                        "en": "Exchanging",
                        "vi": "Đang chuyển đổi",
                        "zh-Hant": "兌換中",
                        "id": "Menukar",
                        "es": "Canjeando",
                        "pt-BR": "Trocar"
                    },
                    "noCoupon": {
                        "zh": "暂无红包！",
                        "en": "No coupon!",
                        "vi": "Không có thưởng",
                        "zh-Hant": "暫無紅包！",
                        "id": "Kupon tidak tersedia",
                        "es": "¡No cupón!",
                        "pt-BR": "Nenhum cupom!"
                    },
                    "receiveTime": {
                        "zh": "可领取时间：",
                        "en": "Receive time: ",
                        "vi": "Thời gian nhận: ",
                        "zh-Hant": "可領取時間：",
                        "id": "Waktu penerimaan",
                        "es": "Hora recepción: ",
                        "pt-BR": "Hora de recebimento:"
                    },
                    "receiveNow": {
                        "zh": "立即领取",
                        "en": "Receive now",
                        "vi": "Nhận ngay bây giờ",
                        "zh-Hant": "立即領取",
                        "id": "Waktu penerimaan",
                        "es": "Recibir ahora",
                        "pt-BR": "Receba agora"
                    },
                    "receiving": {
                        "zh": "领取中",
                        "en": "Receiving",
                        "vi": "Đang nhận",
                        "zh-Hant": "領取中",
                        "id": "Menerima",
                        "es": "Recibiendo",
                        "pt-BR": "Recebendo"
                    },
                    "received": {
                        "zh": "已领取",
                        "en": "Received",
                        "vi": "Đã nhận",
                        "zh-Hant": "已領取",
                        "id": "Diterima",
                        "es": "Recibido",
                        "pt-BR": "Recebido"
                    },
                    "rewardFinished": {
                        "zh": "已领完",
                        "en": "Reward has been finished",
                        "vi": "Phần thưởng đã được trao",
                        "zh-Hant": "已領完",
                        "id": "Hadiah telah diberikan",
                        "es": "La recompensa ha sido terminada",
                        "pt-BR": "Recompensa foi terminada"
                    },
                    "availableCoupons": {
                        "zh": "距可领取还剩：",
                        "en": "Available coupons: ",
                        "vi": "Những điểm thưởng có hiệu lực: ",
                        "zh-Hant": "距可領取還剩：",
                        "id": "Kupon yang tersedia",
                        "es": "Disponible cupones: ",
                        "pt-BR": "Cupons disponíveis:"
                    },
                    "exchangeCouponSucc": {
                        "zh": "红包兑换成功",
                        "en": "Successful to exchange coupon",
                        "vi": "Trao đổi thưởng thành công",
                        "zh-Hant": "紅包兌換成功",
                        "id": "Berhasil menukar kupon",
                        "es": "Éxito canjear cupón",
                        "pt-BR": "Sucesso para trocar cupom"
                    },
                    "receiveCouponSucc": {
                        "zh": "红包领取成功",
                        "en": "Successful to receive coupon",
                        "vi": "Nhận thưởng thành công",
                        "zh-Hant": "紅包領取成功",
                        "id": "Berhasil menerima kupon",
                        "es": "Éxito recibir cupón",
                        "pt-BR": "Bem sucedido em receber cupom"
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
                        "pt-BR": "Convide amigos"
                    },
                    "inviteFriend": {
                        "zh": "邀请好友，赢取10美元",
                        "en": "Invite a friend and win 10 dollar",
                        "vi": "Mời bạn bè và nhận 10 đô la.",
                        "zh-Hant": "邀請好友，贏取10美元",
                        "id": "Ajak teman dan dapatkan 10 dolar",
                        "es": "Invite a un amigo y gane 10 dólares",
                        "pt-BR": "Convide um amigo e ganhe 10 dólares"
                    },
                    "invitedFriends": {
                        "zh": "当前邀请人数",
                        "en": "Invited Friends",
                        "vi": "Đã Mời bạn",
                        "zh-Hant": "當前邀請人數",
                        "id": "Ajak Teman",
                        "es": "Invitar Amigos",
                        "pt-BR": "Amigos Convidados"
                    },
                    "inviteFriendsRegulations": {
                        "zh": "邀请好友规则：",
                        "en": "Invite Friends Regulations: ",
                        "vi": "Quy Định Mời Bạn Bè: ",
                        "zh-Hant": "邀請好友規則：",
                        "id": "Peraturan dalam mengundang teman: ",
                        "es": "Regulación Invite a un Amigo: ",
                        "pt-BR": "Regulamento de convite a amigos:"
                    },
                    "tip1": {
                        "zh": "1、注册即获得邀请类红包“人从众”，邀请3名好友注册，且至少有1人入金并完成1手交易即可兑现, 每位用户仅可领取一次；",
                        "en": "1. A reward coupon will be delivered to your account when you registered, it can be cashed once you invited three friends and at least one of them deposited and had one lot transaction.",
                        "vi": "1. Một phiếu thưởng sẽ được gửi đến tài khoản của bạn khi bạn đăng ký, nó có thể được đổi thành tiền mặt khi bạn mời ba người bạn và ít nhất một người trong số họ gửi tiền và có một giao dịch rất nhiều.",
                        "zh-Hant": "1、註冊即獲得邀請類紅包“人從眾”，邀請3名好友註冊，且至少有1人入金並完成1手交易即可兌現, 每位用戶僅可領取壹次；",
                        "id": "1. Hadiah akan langsung dikirim ke akun anda apabila anda sudah terdaftar di sistem, dan hadiah tersebut dapat dicairkan apabila anda telah mengundang 3 teman lain dan salah satunya telah melakukan penyetoran dana serta bertransaksi minimal 1 lot.",
                        "es": "1. Un cupón de recompensa será enviado a su cuenta cuando se registre; podrá ser liquidado una vez que haya invitado a tres amigos y al menos uno de ellos haya depositado y haya operado un lote.",
                        "pt-BR": "1. Um cupom de recompensa será entregue em sua conta quando você se registrou, ele pode ser descontado uma vez que você convidou três amigos e pelo menos um deles depositou e teve uma transação de lote."
                    },
                    "tip2": {
                        "zh": "2、您只有通过邀请链接进行注册的好友才算有效；",
                        "en": "2. It can be effective only when your friend is registered by the invite link.",
                        "vi": "2. Nó sẽ có hiệu lực chỉ khi bạn bè của bạn đã được đăng ký bởi liên kết mời.",
                        "zh-Hant": "2、您只有通過邀請鏈接進行註冊的好友才算有效；",
                        "id": "2. Hanya berlaku apabila teman anda mendaftar melalui tautan yang anda kirimkan.",
                        "es": "2. Sólo se hace efectivo cuando sus amigos se registren vía el link de invitación. ",
                        "pt-BR": "2. Pode ser efetivo somente quando seu amigo é registrado pelo link de convite."
                    },
                    "tip3": {
                        "zh": "3、同一手机号，身份证号和银行卡号视为同一用户；",
                        "en": "3.Same cellphone, ID and bank card number will be treated as same user.",
                        "vi": "3. Số điện thoại di động, ID và số thẻ ngân hàng trùng khớp sẽ được coi là cùng một người dùng.",
                        "zh-Hant": "3、同壹手機號，身份證號和銀行卡號視為同壹用戶；",
                        "id": "3. Identitas, nomor telepon dan rekening bank yang sama akan dianggap sebagai satu orang saja.",
                        "es": "3. Mismo móvil, ID y número de tarjeta de banco serán tratados como el mismo usuario. ",
                        "pt-BR": "3.Same celular, ID e número do cartão bancário serão tratados como o mesmo usuário."
                    },
                    "tip4_1": {
                        "zh": "4、任何通过第三方作弊软件刷取好友邀请奖励，一经发现",
                        "en": "4. Any cheating, if discovered by ",
                        "vi": "4. Bất kỳ hành động gian lận nào, nếu bị phát hiện bởi ",
                        "zh-Hant": "4、任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現",
                        "id": "4. ",
                        "es": "4. Cualquier irregularidad, si fuera descubierta ",
                        "pt-BR": "4. Qualquer engano, se descoberto por"
                    },
                    "tip4_2": {
                        "zh": "有权取消红包兑现奖励；",
                        "en": ", will be disqualified.",
                        "vi": " sẽ bị loại.",
                        "zh-Hant": "有權取消紅包兌現獎勵；",
                        "id": " berhak untuk menghentikan dan membatalkan hadiah apabila terdapat kegiatan yang mencurigakan.",
                        "es": ", será descalificado.",
                        "pt-BR": ", será desclassificado."
                    },
                    "tip5_1": {
                        "zh": "5、本活动最终解释权归",
                        "en": "5. The final interpretation of this activity owned by ",
                        "vi": "5. ",
                        "zh-Hant": "5、本活動最終解釋權歸",
                        "id": "5. ",
                        "es": "5. Se reserva todos los derechos explicativos ",
                        "pt-BR": "5. A interpretação final desta atividade de propriedade"
                    },
                    "tip5_2": {
                        "zh": "所有。如有疑问，请咨询客服",
                        "en": ". If you have other questions，please contact ",
                        "vi": " bảo lưu quyền đưa ra giải thích cuối cùng về hoạt động giao dịch. Nếu bạn có bất kì câu hỏi nào, vui lòng liên hệ với số điện thoại bộ phận dịch vụ khách hàng của chúng tôi ",
                        "zh-Hant": "所有。如有疑問，請咨詢客服",
                        "id": " memliki semua hak dalam memutuskan keputusan yang mutlak dan tidak dapat diganggu gugat. Jika anda memiliki pertanyaan, silahkan hubungi pusat layanan pelanggan kami ",
                        "es": ". Para cualquier otra consulta，por favor contacte ",
                        "pt-BR": ". Se você tiver outras dúvidas, entre em contato como o"
                    },
                    "tip5_3": {
                        "zh": "。",
                        "en": " customer service.",
                        "vi": ".",
                        "zh-Hant": "。",
                        "id": ".",
                        "es": " servicio al cliente.",
                        "pt-BR": "serviço ao cliente."
                    },
                    "nameFriend": {
                        "zh": "好友昵称",
                        "en": "Name of friend",
                        "vi": "Tên của bạn",
                        "zh-Hant": "好友昵稱",
                        "id": "Nama teman",
                        "es": "Nombre amigo",
                        "pt-BR": "Nome do amigo"
                    },
                    "statusDeposit": {
                        "zh": "入金状态",
                        "en": "Status in deposit",
                        "vi": "Trạng thái gửi tiền",
                        "zh-Hant": "入金狀態",
                        "id": "Status Pengisian Dana",
                        "es": "Estatus depósito",
                        "pt-BR": "Status no depósito"
                    },
                    "statusTransactions": {
                        "zh": "是否完成交易",
                        "en": "Status in transactions",
                        "vi": "Trạng thái giao dịch",
                        "zh-Hant": "是否完成交易",
                        "id": "Status Transaksi",
                        "es": "Estatus transacciones",
                        "pt-BR": "Status nas transações"
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
                        "pt-BR": "Comissão do último mês"
                    },
                    "followingMaster": {
                        "zh": "当前复制高手",
                        "en": "Following the master",
                        "vi": "Đang sao chép bậc thầy",
                        "zh-Hant": "當前復制高手",
                        "id": "Sedang mengikuti Master",
                        "es": "Siguiendo al master",
                        "pt-BR": "Seguindo o mestre"
                    },
                    "deductedCommissionsLastMonth": {
                        "zh": "上月扣除分成",
                        "en": "The deducted commissions last month",
                        "vi": "Khấu trừ hoa hồng tháng trước",
                        "zh-Hant": "上月扣除分成",
                        "id": "Komisi yang dipotong bulan lalu",
                        "es": "La comisión deducida el mes pasado",
                        "pt-BR": "As comissões deduzidas no mês passado"
                    },
                    "totalCommissions": {
                        "zh": "扣除分成总计",
                        "en": "The total of commissions",
                        "vi": "Tổng hoa hồng",
                        "zh-Hant": "扣除分成總計",
                        "id": "Total komisi",
                        "es": "El total de comisiones",
                        "pt-BR": "O total de comissões"
                    },
                    "myFollowingStatus": {
                        "zh": "我的复制情况",
                        "en": "My Following status",
                        "vi": "Trạng thái sao chép của tôi",
                        "zh-Hant": "我的復制情況",
                        "id": "Status Copy Trading saya",
                        "es": "Mi estatus Siguiendo",
                        "pt-BR": "Meu status a seguir"
                    },
                    "tp1": {
                        "zh": "注：每月1号结算上一月分成",
                        "en": "Monthly commissions will be settled on the 1st of next month",
                        "vi": "Hoa hồng hàng tháng sẽ được thanh toán vào ngày 1 của tháng tiếp theo",
                        "zh-Hant": "註：每月1號結算上壹月分成",
                        "id": " Komisi bulanan akan dibagikan pada tanggal pertama di bulan berikutnya ",
                        "es": "Las comisiones mensuales será liquidadas el 1 de cada mes siguiente",
                        "pt-BR": "Comissões mensais serão liquidadas no dia 1 do próximo mês"
                    },
                    "nameMaster": {
                        "zh": "高手名称",
                        "en": "The name of master",
                        "vi": "Tên bậc thầy",
                        "zh-Hant": "高手名稱",
                        "id": "Nama Master",
                        "es": "El nombre del master",
                        "pt-BR": "O nome do mestre"
                    },
                    "deductedCommissions": {
                        "zh": "扣除分成",
                        "en": "The deducted commissions",
                        "vi": "Khấu trừ hoa hồng",
                        "zh-Hant": "扣除分成",
                        "id": "Komisi yang terpotong",
                        "es": "Las comisiones deducidas",
                        "pt-BR": "As comissões deduzidas"
                    },
                    "timeDeductingCommission": {
                        "zh": "扣除时间",
                        "en": "The time of deducting commission",
                        "vi": "Thời điểm khấu trừ hoa hồng",
                        "zh-Hant": "扣除時間",
                        "id": "Waktu komisi terpotong",
                        "es": "La hora deducción comisiones",
                        "pt-BR": "A hora de dedução de comissão"
                    },
                    "timeDeductingCommissionM": {
                        "zh": "扣除时间：",
                        "en": "The time of deducting commission: ",
                        "vi": "Thời điểm khấu trừ hoa hồng: ",
                        "zh-Hant": "扣除時間：",
                        "id": "Waktu komisi terpotong",
                        "es": "La hora deducción comisiones: ",
                        "pt-BR": "A hora de dedução da comissão:"
                    },
                    "accept": {
                        "zh": "同意协议",
                        "en": "Accept",
                        "vi": "Chấp nhận",
                        "zh-Hant": "同意協議",
                        "id": "Terima",
                        "es": "Aceptar",
                        "pt-BR": "Aceitar"
                    },
                    "cannotCopy": {
                        "zh": "无法进行复制操作",
                        "en": "Cannot follow",
                        "vi": "Không thể sao chép",
                        "zh-Hant": "無法進行復制操作",
                        "id": "Tidak dapat mengikuti",
                        "es": "No puede seguir",
                        "pt-BR": "Não pode seguir"
                    },
                    "cannotCopy1": {
                        "zh": "您的可用复制金额不足，无法复制高手",
                        "en": "Available amount is insufficient, cannot follow other master",
                        "vi": "Số tiền có sẵn là không đủ, không thể sao chép các nhà giao dịch khác",
                        "zh-Hant": "您的可用復制金額不足，無法復制高手",
                        "id": " Tidak dapat mengikuti Master lain, saldo tidak cukup ",
                        "es": "Cantidad disponible insuficiente, no puede seguir a otro Master",
                        "pt-BR": "Valor disponível é insuficiente, não pode seguir outro mestre"
                    },
                    "cannotCopy2_1": {
                        "zh": "高手最低复制金额为",
                        "en": "The minimum copy amount of the master is",
                        "vi": "Số tiền sao chép tối thiểu của bậc thầy là",
                        "zh-Hant": "高手最低復制金額為",
                        "id": "Jumlah minimun untuk mengikuti master ini adalah ",
                        "es": "La cantidad mínima copy del master es",
                        "pt-BR": "O valor mínimo de cópia do mestre é"
                    },
                    "cannotCopy2_2": {
                        "zh": " 请先充值",
                        "en": ", please deposit first",
                        "vi": "Vui lòng gửi tiền trước",
                        "zh-Hant": " 請先充值",
                        "id": ", Silahkan isi dana terlebih dahulu",
                        "es": ", por favor deposite primero",
                        "pt-BR": ", por favor, depositar primeiro"
                    },
                    "cannotCopy3": {
                        "zh": "您已经是高手了，无法复制其他高手",
                        "en": "You are already a master, cannot follow other master",
                        "vi": "Bạn đã là bậc thầy, không thể sao chép các bậc thầy khác",
                        "zh-Hant": "您已經是高手了，無法復制其他高手",
                        "id": "Anda adalah Master, tidak dapat mengikuti Master yang lain",
                        "es": "Ya eres un Master, no puedes seguir a otro Master.",
                        "pt-BR": "Você já é um mestre, não pode seguir outro mestre"
                    },
                    "cannotCopy4": {
                        "zh": "您的资金处于封闭期，无法使用复制功能",
                        "en": "Your funds are closed and cannot follow orders",
                        "vi": "Các quỹ của bạn đã được đóng và không thể theo các lệnh khác",
                        "zh-Hant": "您的資金處於封閉期，無法使用復制功能",
                        "id": "Dana anda tidak cukup, tidak dapat mengikuti transaksi",
                        "es": "Sus fondos están cerrados y no pueden seguir órdenes",
                        "pt-BR": "Seus fundos estão fechados e não podem seguir ordens"
                    },
                    "depositNow": {
                        "zh": "立即充值",
                        "en": "Deposit now",
                        "vi": "Gửi tiền ngay",
                        "zh-Hant": "立即充值",
                        "id": "Isi dana sekarang",
                        "es": "Depositar ahora",
                        "pt-BR": "Deposite agora"
                    },
                    "loginNow": {
                        "zh": "立即登录",
                        "en": "Login now",
                        "vi": "Đăng nhập ngay",
                        "zh-Hant": "立即登錄",
                        "id": "Masuk",
                        "es": "Inicia sesión ahora",
                        "pt-BR": "Conecte-se agora"
                    },
                    "tp2": {
                        "zh": "可用复制金额不足",
                        "en": "Available copy amount insufficient",
                        "vi": "Số tiền sao chép không đủ",
                        "zh-Hant": "可用復制金額不足",
                        "id": "Jumlah dana copy tidak mencukupi",
                        "es": "Importe copy disponible insuficiente",
                        "pt-BR": "Quantidade de cópias disponíveis insuficiente"
                    },
                    "follow": {
                        "zh": "关注",
                        "en": "Follow",
                        "vi": "Làm Theo",
                        "zh-Hant": "關註",
                        "id": "IKuti",
                        "es": "Seguir",
                        "pt-BR": "Seguir"
                    },
                    "unfollow": {
                        "zh": "取消关注",
                        "en": "Unfollow",
                        "vi": "Không sao chép",
                        "zh-Hant": "取消關註",
                        "id": "Berhenti mengikuti",
                        "es": "Dejar de seguir",
                        "pt-BR": "Parar de seguir"
                    },
                    "followed": {
                        "zh": "已关注",
                        "en": "Followed",
                        "vi": "Đã sao chép",
                        "zh-Hant": "已關註",
                        "id": "Yang diikuti",
                        "es": "Seguido",
                        "pt-BR": "Seguido"
                    }
                },
                "depositWithdrawal": {
                    "bankCardTransferTip": {
                        "zh": "注意：必须使用所选择的银行卡进行转账",
                        "en": "Notice: The selected bank card must be used for transfer.",
                        "vi": "Chú ý: Thẻ ngân hàng được chọn phải được sử dụng để chuyển khoản.",
                        "zh-Hant": "注意：必須使用所選擇的銀行卡進行轉賬",
                        "id": "Pemberitahuan. Rekening bank yang dipilih harus digunakan untuk pengiriman dana",
                        "es": "Aviso: La tarjeta bancaria seleccionada debe ser utilizada para la transferencia.",
                        "pt-BR": "Aviso: o cartão de banco selecionado deverá ser usado para transferir."
                    },
                    "title": {
                        "zh": "充值提现",
                        "en": "Deposit/Withdrawal",
                        "vi": "Gửi tiền/ Rút tiền",
                        "zh-Hant": "充值提現",
                        "id": "Setor/Tarik",
                        "es": "Depositar/Reembolsar",
                        "pt-BR": "depósito/saque"
                    },
                    "onlineBankingDepositRules": {
                        "zh": "网银入金规则",
                        "en": "Online banking deposit rules",
                        "vi": "Quy tắc gửi tiền ngân hàng trực tuyến",
                        "zh-Hant": "網銀入金規則",
                        "id": "Peraturan pengisian dana melalui online banking",
                        "es": "Reglas depósito bancarios online",
                        "pt-BR": "Regras de depósito bancário online"
                    },
                    "depositAccount": {
                        "zh": "充值账户",
                        "en": "Deposit account",
                        "vi": "Tài khoản gửi tiền",
                        "zh-Hant": "充值賬戶",
                        "id": "Isi Dana Akun",
                        "es": "Cuenta de depósito",
                        "pt-BR": "Conta de depósito"
                    },
                    "depositAccountJ": {
                        "zh": "充值账户",
                        "en": "Account",
                        "vi": "Tài khoản",
                        "zh-Hant": "充值賬戶",
                        "id": "Akun",
                        "es": "Cuenta",
                        "pt-BR": "Conta"
                    },
                    "switchAccount": {
                        "zh": "点击切换子账号",
                        "en": "Switch account",
                        "vi": "Chuyển tài khoản",
                        "zh-Hant": "點擊切換子帳號",
                        "id": "Pindah Akun",
                        "es": "Cambiar cuenta",
                        "pt-BR": "Trocar conta"
                    },
                    "depositAmount": {
                        "zh": "充值金额",
                        "en": "Deposit Amount",
                        "vi": "Số tiền gửi",
                        "zh-Hant": "充值金額",
                        "id": "Jumlah dana yang diisi",
                        "es": "Cantidad Depósito",
                        "pt-BR": "Depositar quantia"
                    },
                    "depositAmountJ": {
                        "zh": "充值金额",
                        "en": "Amount",
                        "vi": "Số tiền",
                        "zh-Hant": "充值金額",
                        "id": "Jumlah",
                        "es": "Cantidad",
                        "pt-BR": "Montante"
                    },
                    "depositAmountM": {
                        "zh": "充值金额：",
                        "en": "Deposit Amount: ",
                        "vi": "Số tiền gửi: ",
                        "zh-Hant": "充值金額：",
                        "id": "Jumlah dana yang diisi: ",
                        "es": "Importe Depósito: ",
                        "pt-BR": "Depositar quantia:"
                    },
                    "rechargeMethod": {
                        "zh": "充值方式",
                        "en": "Recharge Method",
                        "vi": "Phương thức nạp lại",
                        "zh-Hant": "充值方式",
                        "id": "Metode pengisian dana",
                        "es": "Método Recarga",
                        "pt-BR": "Método de recarda"
                    },
                    "walletAvailableAmount": {
                        "zh": "钱包可用余额",
                        "en": "Wallet Available Amount",
                        "vi": "Số Tiền Có Sẵn Trên Ví",
                        "zh-Hant": "錢包可用余額",
                        "id": "Saldo yang tersedia di Dompet",
                        "es": "Wallet Importe Disponible",
                        "pt-BR": "Quantia disponível na carteira"
                    },
                    "onlineBanking": {
                        "zh": "网银支付",
                        "en": "Payment of Internet Banking",
                        "vi": "Thanh toán ngân hàng trực tuyến",
                        "zh-Hant": "網銀支付",
                        "id": "Pembayaran melalui Internet Banking",
                        "es": "Pagos Banca Internet",
                        "pt-BR": "Pagamento pelo internet banking"
                    },
                    "deposit": {
                        "zh": "充值",
                        "en": "Deposit",
                        "vi": "Kí Quỹ",
                        "zh-Hant": "充值",
                        "id": "Setor",
                        "es": "Depositar",
                        "pt-BR": "Depósito"
                    },
                    "withdrawal": {
                        "zh": "提现",
                        "en": "Withdrawal",
                        "vi": "Rút tiền",
                        "zh-Hant": "提現",
                        "id": "Tarik",
                        "es": "Reembolsar",
                        "pt-BR": "Saque"
                    },
                    "withdrawAccount": {
                        "zh": "提现账户",
                        "en": "Withdraw account",
                        "vi": "Tài khoản rút tiền",
                        "zh-Hant": "提現賬戶",
                        "id": "Tarik dari akun",
                        "es": "Cuenta Reembolsar",
                        "pt-BR": "Conta de saque"
                    },
                    "withdrawAccountJ": {
                        "zh": "提现账户",
                        "en": "Account",
                        "vi": "Tài khoản",
                        "zh-Hant": "提現賬戶",
                        "id": "Akun",
                        "es": "Cuenta",
                        "pt-BR": "Conta"
                    },
                    "tradingAccount": {
                        "zh": "交易账户",
                        "en": "Trading account",
                        "vi": "Tài Khoản Giao Dịch",
                        "zh-Hant": "交易賬戶",
                        "id": "Akun transaksi",
                        "es": "Cuenta trading",
                        "pt-BR": "Conta de negociação"
                    },
                    "wallet": {
                        "zh": "钱包",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira"
                    },
                    "withdrawalToBankCard": {
                        "zh": "提现至银行卡",
                        "en": "Withdrawal to bank card",
                        "vi": "Rút tiền từ thẻ ngân hàng",
                        "zh-Hant": "提現至銀行卡",
                        "id": "Tarik ke rekening bank",
                        "es": "Reembolsar a tarjeta banco",
                        "pt-BR": "Retirada para cartão bancário"
                    },
                    "extractableAmount": {
                        "zh": "可提取金额",
                        "en": "Extractable amount",
                        "vi": "Số lượng có thể trích",
                        "zh-Hant": "可提取金額",
                        "id": "Jumlah dana yang dapat digunakan",
                        "es": "Cantidad extraíble",
                        "pt-BR": "Quantidade extraível"
                    },
                    "extractableAmountM": {
                        "zh": "可提取金额：",
                        "en": "Extractable amount: ",
                        "vi": "Số lượng có thể trích: ",
                        "zh-Hant": "可提取金額：",
                        "id": "Jumlah dana yang dapat digunakan: ",
                        "es": "Cantidad extraíble: ",
                        "pt-BR": "Quantidade extraível:"
                    },
                    "tip1": {
                        "zh": "提示：您还有持仓订单，请平仓后再提现如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice:You have position orders, please close out and then withdrawal If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn có lệnh giao dịch, vui lòng đóng và rút tiền Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với dịch vụ khách hàng ",
                        "zh-Hant": "提示：您還有持倉訂單，請平倉後再提現如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : Silahkan tutup semua posisi yang masih terbuka sebelum melakukan penarikan. Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Notificación:Tiene órdenes con posiciones, por favor cierre éstas y después reembolse.  Para cualquier cuestión, por favor, contacte con su gestor de cuenta o con el Servicio al Cliente",
                        "pt-BR": "Aviso:você tem ordens de posição, por favor, encerrar e, em seguida, retirada Se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente"
                    },
                    "tip2": {
                        "zh": "提示：您未实名认证，请完成实名认证，如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice:You don't have real-name authentication，please complete it If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn không có xác thực tên thật ， vui lòng hoàn thành nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với bộ phận dịch vụ khách hàng ",
                        "zh-Hant": "提示：您未實名認證，請完成實名認證，如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : Akun Anda belum melewati sertifikasi, mohon dilengkapi terlebih dahulu. Silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Notificación:No autentificación nombre real，por favor, contacte con su Gestor de Cuenta o con el Servicio al Cliente",
                        "pt-BR": "Aviso: você não tem autenticação de nome real，por favor preencha se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente"
                    },
                    "tip3": {
                        "zh": "提示：您还有正在复制的高手，请取消复制关系后再提现，如有疑问，请联系您的客户经理或联系客服",
                        "en": "Notice: You still have following masters,please cancel the follow relationship then withdraw the money If you have any questions, please contact your account manager or contact customer service ",
                        "vi": "Lưu ý: Bạn vẫn có quan hệ sao chép bậc thầy, vui lòng hủy bỏ mối quan hệ sau đó rút tiền Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với người quản lý tài khoản của bạn hoặc liên hệ với dịch vụ khách hàng ",
                        "zh-Hant": "提示：您還有正在復制的高手，請取消復制關系後再提現，如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": " Peringatan : anda masih mengikuti Master, mohon Berhenti mengikuti Master terlebih dahulu sebelum melakukan penarikan dana. Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami",
                        "es": "Notificación: Todavía sigue a masters,por favor, cancele la relación de seguimiento y después reembolse el dinero. Para cualquier cuestión, por favor, contacte con su Gestor de Cuenta o con el Servicio al Cliente ",
                        "pt-BR": "Aviso: Você ainda tem mestres seguidos, por favor, cancele o relacionamento a seguir, em seguida, retirar o dinheiro Se você tiver alguma dúvida, entre em contato com o gerente de sua conta ou entre em contato com o serviço ao cliente"
                    },
                    "tip4": {
                        "zh": "提现金额不能大于可提现金额",
                        "en": "Withdraw amount can not be greater than the extractable amount",
                        "vi": "Số tiền rút không thể lớn hơn số tiền có thể trích",
                        "zh-Hant": "提現金額不能大於可提現金額",
                        "id": " Jumlah penarikan dana tidak dapat melebihi saldo yang dapat digunakan ",
                        "es": "La cantidad retirada no puede ser mayor que la cantidad extraíble",
                        "pt-BR": "Valor do saque não pode ser maior do que o valor sacável."
                    },
                    "tip5": {
                        "zh": "现在提现会导致您的账户红包失效，是否继续提现？",
                        "en": "Now withdrawal will lead to lose efficacy for your reward,Whether or not to continue?",
                        "vi": "Bây giờ rút tiền sẽ dẫn đến mất hiệu lực cho phần thưởng của bạn,bạn có tiếp tục hay không?",
                        "zh-Hant": "現在提現會導致您的賬戶紅包失效，是否繼續提現？",
                        "id": " Penarikan akan membatalkan hadiah anda, apakah ingin terus melanjutkan? ",
                        "es": "Reembolsar ahora pudiera conllevar una pérdida de eficacia en su recompensa, ¿Desea continuar o no?",
                        "pt-BR": "Agora o saque levará a perda de eficácia para sua recompensa, deseja continuar?"
                    },
                    "tip6": {
                        "zh": "出金银行卡用户姓名必须与开户姓名一致",
                        "en": "The name of the bank card must be the same as the name of the account",
                        "vi": "Tên của thẻ ngân hàng phải trùng khớp với tên của tài khoản",
                        "zh-Hant": "出金銀行卡用戶姓名必須與開戶姓名壹致",
                        "id": " Nama pemilik rekening bank harus sama dengan nama pemilik akun ",
                        "es": "El nombre de la tarjeta bancaria debe ser el mismo que el nombre de la cuenta",
                        "pt-BR": "O nome do cartão bancário deve ser o mesmo que o nome da conta"
                    },
                    "tip7": {
                        "zh": "实名认证后才可以进行资金提现。",
                        "en": "You should have real-name authentication and then withdraw the money",
                        "vi": "Bạn bên có xác nhận tên thật và sau đó có thể rút tiền",
                        "zh-Hant": "實名認證後才可以進行資金提現。",
                        "id": "Sebelum melakukan penarikan uang, pastikan akun anda telah selesai diverifikasi",
                        "es": "Debe tener autenticación nombre real y luego reembolsar el dinero",
                        "pt-BR": "Você deve ter autenticação de nome real e, em seguida, retirar o dinheiro"
                    },
                    "tip8": {
                        "zh": "提现金额最少为20美金。",
                        "en": "At least $20 for the withdrawal.",
                        "vi": "Ít nhất 20 đô-la cho 1 lần rút tiền",
                        "zh-Hant": "提現金額最少為20美金。",
                        "id": "Minimal penarikan adalah 20$",
                        "es": "Al menos $20 para reembolsos.",
                        "pt-BR": "Pelo menos US $ 20 para a retirada."
                    },
                    "tip9": {
                        "zh": "出金金额最多为0.00美金",
                        "en": "Not better than $0 for your withdraw amount",
                        "vi": "Không nhiều hơn $ 0 cho số tiền rút của bạn",
                        "zh-Hant": "出金金額最多為0.00美金",
                        "id": " Jumlah penarikan harus lebih dari 0$ ",
                        "es": "No es mejor que $0 para importe reembolso",
                        "pt-BR": "Não melhor que $ 0 pelo seu valor de retirada"
                    },
                    "tip10": {
                        "zh": "未充值，体验金和盈利不可提取。",
                        "en": "Please top up otherwise the bonus and profit can't be withdraw.",
                        "vi": "Vui lòng nạp tiền nếu không, tiền thưởng và lợi nhuận không thể rút được.",
                        "zh-Hant": "未充值，體驗金和盈利不可提取。",
                        "id": " Silahkan tambah dana terlebih dahulu untuk menarik bonus dan keuntungan anda.",
                        "es": "Por favor, deposite, de lo contrario, la bonificación y el beneficio no se pueden retirar.",
                        "pt-BR": "Por favor, complete o bônus e o lucro não pode ser retirado."
                    },
                    "tip11": {
                        "zh": "存在复制关系，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        "en": "Please cancel the follow relationship, if you want to all withdrawal.",
                        "vi": "Vui lòng hủy bỏ mối quan hệ sao chép, nếu bạn muốn rút tiền.",
                        "zh-Hant": "存在復制關系，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。",
                        "id": " Sebelum menarik semua dana, pastikan anda telah berhenti mengikuti semua Master terlebih dahulu",
                        "es": "Por favor, cancele la relación de seguimiento, si desea reembolsar todo.",
                        "pt-BR": "Por favor, cancele a seguinte relação, se você quiser toda a retirada."
                    },
                    "cardNumber": {
                        "zh": "卡号",
                        "en": "Card Number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "卡號",
                        "id": "Nomor rekening",
                        "es": "Número Tarjeta",
                        "pt-BR": "Número do cartão"
                    },
                    "cardNumberM": {
                        "zh": "卡号：",
                        "en": "Card Number: ",
                        "vi": "Số tài khoản ngân hàng: ",
                        "zh-Hant": "卡號：",
                        "id": "Nomor rekening",
                        "es": "Número Tarjeta: ",
                        "pt-BR": "Número do cartão:"
                    },
                    "bank": {
                        "zh": "开户行",
                        "en": "Bank",
                        "vi": "Ngân hàng",
                        "zh-Hant": "開戶行",
                        "id": "Bank",
                        "es": "Banco",
                        "pt-BR": "Banco"
                    },
                    "name": {
                        "zh": "姓名",
                        "en": "Name",
                        "vi": "Tên",
                        "zh-Hant": "姓名",
                        "id": "Nama",
                        "es": "Nombre",
                        "pt-BR": "Nome"
                    },
                    "nameM": {
                        "zh": "姓名：",
                        "en": "Name:",
                        "vi": "Tên:",
                        "zh-Hant": "姓名：",
                        "id": "Nama:",
                        "es": "Nombre:",
                        "pt-BR": "Nome:"
                    },
                    "informationBankAccount": {
                        "zh": "添加银行卡",
                        "en": "The information of bank account",
                        "vi": "Thông tin tài khoản",
                        "zh-Hant": "添加銀行卡",
                        "id": "Informasi rekening bank ",
                        "es": "La información cuenta bancaria",
                        "pt-BR": "A informação da conta bancária"
                    },
                    "depositOptions": {
                        "zh": "支付方式",
                        "en": "Deposit Options",
                        "vi": "Các Phương thức gửi tiền",
                        "zh-Hant": "支付方式",
                        "id": "Metode pengisian dana",
                        "es": "Opciones Depósitos",
                        "pt-BR": "Opções de depósito"
                    },
                    "depositOptionsJ": {
                        "zh": "支付方式",
                        "en": "Options",
                        "vi": "Chọn lựa",
                        "zh-Hant": "支付方式",
                        "id": "Pilihan",
                        "es": "Opciones",
                        "pt-BR": "Opçōes"
                    },
                    "walletPayment": {
                        "zh": "钱包支付",
                        "en": "Wallet",
                        "vi": "Ví",
                        "zh-Hant": "錢包支付",
                        "id": "Dompet",
                        "es": "Wallet",
                        "pt-BR": "Carteira"
                    },
                    "availableAmount": {
                        "zh": "可用余额",
                        "en": "Available Amount",
                        "vi": "Số Tiền Có Sẵn",
                        "zh-Hant": "可用余額",
                        "id": "Saldo yang tersedia",
                        "es": "Importe Disponible",
                        "pt-BR": "Quantidade disponível"
                    },
                    "telegraphicTransfer": {
                        "zh": "电汇",
                        "en": "Telegraphic Transfer",
                        "vi": "Điện Chuyển Tiền",
                        "zh-Hant": "電匯",
                        "id": "Transfer antar bank",
                        "es": "Transferencia Telegráfica",
                        "pt-BR": "Transferência telegráfica"
                    },
                    "alipay": {
                        "zh": "支付宝",
                        "en": "Alipay",
                        "vi": "Alipay",
                        "zh-Hant": "支付寶",
                        "id": "Alipay",
                        "es": "Alipay",
                        "pt-BR": "Alipay"
                    },
                    "uploadCredentials": {
                        "zh": "上传电汇凭证",
                        "en": "Upload Credentials",
                        "vi": "Tải Lên Giấy Tờ Xác Nhận",
                        "zh-Hant": "上傳電匯憑證",
                        "id": " Unggah bukti setoran",
                        "es": "Subir Credenciales",
                        "pt-BR": "Carregar credenciais"
                    },
                    "uploadCredentialsJ": {
                        "zh": "上传电汇凭证",
                        "en": "Credentials",
                        "vi": "Giấy Tờ Xác Nhận",
                        "zh-Hant": "上傳電匯憑證",
                        "id": "Bukti setoran",
                        "es": "Credenciales",
                        "pt-BR": "Credenciais"
                    },
                    "uploadCredentialsTip1": {
                        "zh": "电汇通常需要3-5个工作日到账",
                        "en": "Usually takes 3-5 working days to arrive account",
                        "vi": "Thường mất 3-5 ngày làm việc để đến tài khoản",
                        "zh-Hant": "電匯通常需要3-5個工作日到帳",
                        "id": "Dana biasanya akan masuk ke akun dalam kurun waktu 3-5 hari kerja",
                        "es": "Normalmente, toma 3-5 días hábiles para llegar a la cuenta",
                        "pt-BR": "Normalmente leva 3-5 dias úteis para chegar a conta"
                    },
                    "tip12": {
                        "zh": "提示：手机端充值最低限额$50.00，每天最高限额$7000.00，充值成功后，到账时间约为10分钟，请耐心等待。如有问题，可在电脑端登录官网（）操作。",
                        "en": "The minimum deposit for mobile phones is $ 50.00，maximum daily limit of $ 7000.00. After the success of the deposit, the arrival time is about 10 minutes, please be patient.If there are problems, you can log on the computer side of the official website (www.tigerwit.com) operation.",
                        "vi": "Khoản tiền gửi tối thiểu cho điện thoại di động là $ 50,00 ， giới hạn tối đa hàng ngày là $ 7000.00. Sau khi thành công của tiền gửi, thời gian đến là khoảng 10 phút, hãy kiên nhẫn. Nếu có vấn đề, bạn có thể đăng nhập bằng máy tính của trang web chính thức (www.tigerwit.com) hoạt động.",
                        "zh-Hant": "提示：手機端充值最低限額$50.00，每天最高限額$7000.00，充值成功後，到帳時間約為10分鐘，請耐心等待。如有問題，可在電腦端登錄官網（）操作。",
                        "id": "Minimal pengisian dana melalui ponsel adalah 50$ dan maksimum sebesar 7000$. Dana biasanya akan masuk dalam kurun waktu 10 menit, mohon menunggu. Apabila mengalami masalah, anda dapat masuk melalui komputer ",
                        "es": "El depósito mínimo para teléfonos móviles es de $ 50.00，límite máximo diario de $ 7000.00. Después éxito en depósito, el tiempo de llegada es de aproximadamente 10 minutos; sea paciente, por favor. Si encontrara problemas, puede iniciar sesión en el ordenador en el sitio web oficial (www.tigerwit.com).",
                        "pt-BR": "O depósito mínimo para telefones celulares é de US $ 50,00, limite máximo diário de US $ 7000,00. Após o sucesso do depósito, o tempo de chegada é de cerca de 10 minutos, por favor, seja paciente.Se houver problemas, você pode fazer logon no lado do computador do site oficial (www.tigerwit.com) operação."
                    },
                    "accountBalance": {
                        "zh": "当前交易账户余额",
                        "en": "Account Balance",
                        "vi": "Số Dư Tài Khoản",
                        "zh-Hant": "當前交易賬戶余額",
                        "id": "Saldo Akun",
                        "es": "Saldo de la cuenta",
                        "pt-BR": "Saldo da conta"
                    },
                    "withdrawalAmount": {
                        "zh": "提现金额",
                        "en": "Withdrawal Amount",
                        "vi": "Số Tiền Rút",
                        "zh-Hant": "提現金額",
                        "id": "Jumlah Penarikan",
                        "es": "Cantidad de retiro",
                        "pt-BR": "Quantia do saque"
                    },
                    "withdrawalAmountJ": {
                        "zh": "提现金额",
                        "en": "Amount",
                        "vi": "Số Tiền",
                        "zh-Hant": "提現金額",
                        "id": "Jumlah",
                        "es": "Cantidad",
                        "pt-BR": "Montante"
                    },
                    "withdrawalAmountM": {
                        "zh": "提现金额：",
                        "en": "Withdrawal Amount: ",
                        "vi": "Số Tiền Rút: ",
                        "zh-Hant": "提現金額：",
                        "id": "Jumlah Penarikan",
                        "es": "Importe Reembolso: ",
                        "pt-BR": "Quantia do saque:"
                    },
                    "youCanWithdrawal": {
                        "zh": "可提现金额",
                        "en": "You Can Withdrawal",
                        "vi": "Bạn có thể rút tiền",
                        "zh-Hant": "可提現金額",
                        "id": "Dana dapat ditarik",
                        "es": "Usted Puede Rembolsar",
                        "pt-BR": "Você pode sacar"
                    },
                    "correctAmount": {
                        "zh": "请输入正确金额",
                        "en": "Please enter the correct amount",
                        "vi": "vui lòng nhập đúng số tiền",
                        "zh-Hant": "請輸入正確金額",
                        "id": "Mohon masukkan jumlah yang benar",
                        "es": "Por favor, ingrese la cantidad correcta",
                        "pt-BR": "Por favor insira o valor correto"
                    },
                    "tip13": {
                        "zh": "提示：当前不支持信用卡提现，请绑定储蓄卡。",
                        "en": "Do not support credit card cash withdrawal, please bind the savings card.",
                        "vi": "Không hỗ trợ rút tiền mặt bằng thẻ tín dụng, vui lòng liên kết thẻ tiết kiệm.",
                        "zh-Hant": "提示：當前不支持信用卡提現，請邦定儲蓄卡。",
                        "id": " Tidak mendukung penarikan ke kartu kredit, silahkan daftarkan nomor rekening tabungan anda terlebih dahulu. ",
                        "es": "No admite el retiro de efectivo con tarjeta de crédito, por favor, asocie la tarjeta débito.",
                        "pt-BR": "Não suporte a retirada de dinheiro do cartão de crédito, por favor, ligue o cartão de poupança."
                    },
                    "tip14": {
                        "zh": "每个账户每月拥有4次免费提现机会，超过4次每笔提现将收取xx手续费。",
                        "en": "Each account has 4 free opportunities per month, more than 4 times each will be charged xx fee.",
                        "vi": "Mỗi tài khoản có 4 cơ hội miễn phí mỗi tháng, nhiều hơn 4 lần mỗi lần sẽ bị tính phí xx.",
                        "zh-Hant": "每個賬戶每月擁有4次免費提現機會，超過4次每筆提現將收取xx手續費。",
                        "id": " Setiap akun dapat melakukan penarikan hingga 4 kali dalam 1 bulan, apabila melakukan penarikan lebih dari 4 kali dalam sebulan maka akan dikenakan biaya sebesar 1 $ per 1 kali penarikan. ",
                        "es": "Cada cuenta dispone de 4 oportunidades gratuitas por mes; más de 4 veces, se cobrará una tarifa xx por cada uno.",
                        "pt-BR": "Cada conta tem 4 oportunidades gratuitas por mês, mais de 4 vezes cada uma será cobrada xx taxa."
                    },
                    "bankCard": {
                        "zh": "银行卡",
                        "en": "Bank Card",
                        "vi": "Thẻ ngân hàng",
                        "zh-Hant": "銀行卡",
                        "id": "Rekening bank",
                        "es": "Tarjeta Banco",
                        "pt-BR": "Cartão bancário"
                    },
                    "bindUserBankCard": {
                        "zh": "请绑定认证用户本人的银行卡",
                        "en": "Please bind the user’s own bank card",
                        "vi": "Vui lòng liên kết thẻ ngân hàng của riêng người dùng",
                        "zh-Hant": "請邦定認證用戶本人的銀行卡",
                        "id": "Mohon daftarkan nomor rekening anda",
                        "es": "Por favor, asocie la propia tarjeta bancaria del usuario.",
                        "pt-BR": "Por favor, associe o bancário do usuário"
                    },
                    "enterCardNumber": {
                        "zh": "请填写银行卡号",
                        "en": "Card Number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "請填寫銀行卡號",
                        "id": "Nomor rekening",
                        "es": "Tarjeta Número",
                        "pt-BR": "Número do cartão"
                    },
                    "bankName": {
                        "zh": "银行名称",
                        "en": "Bank",
                        "vi": "Ngân hàng",
                        "zh-Hant": "銀行名稱",
                        "id": "Bank",
                        "es": "Banco",
                        "pt-BR": "Banco"
                    },
                    "bankNameM": {
                        "zh": "银行名称：",
                        "en": "Bank:",
                        "vi": "Ngân hàng:",
                        "zh-Hant": "銀行名稱：",
                        "id": "Bank:",
                        "es": "Banco:",
                        "pt-BR": "Banco:"
                    },
                    "branch": {
                        "zh": "支行名称",
                        "en": "Branch",
                        "vi": "Chi nhánh",
                        "zh-Hant": "支行名稱",
                        "id": "Cabang",
                        "es": "Sucursal",
                        "pt-BR": "Ramo"
                    },
                    "branchM": {
                        "zh": "支行名称：",
                        "en": "Branch: ",
                        "vi": "Chi nhánh: ",
                        "zh-Hant": "支行名稱：",
                        "id": "Cabang: ",
                        "es": "Sucursal: ",
                        "pt-BR": "Ramo:"
                    },
                    "province": {
                        "zh": "开户省",
                        "en": "Province",
                        "vi": "Tỉnh",
                        "zh-Hant": "開戶省",
                        "id": "Provinsi",
                        "es": "Provincia",
                        "pt-BR": "Região"
                    },
                    "provinceM": {
                        "zh": "开户省：",
                        "en": "Province: ",
                        "vi": "Tỉnh: ",
                        "zh-Hant": "開戶省：",
                        "id": "Provinsi",
                        "es": "Provincia: ",
                        "pt-BR": "Região:"
                    },
                    "city": {
                        "zh": "开户市",
                        "en": "City",
                        "vi": "Thành Phố",
                        "zh-Hant": "開戶市",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade"
                    },
                    "cityM": {
                        "zh": "开户市：",
                        "en": "City: ",
                        "vi": "Thành phố: ",
                        "zh-Hant": "開戶市：",
                        "id": "Kota",
                        "es": "Ciudad: ",
                        "pt-BR": "Cidade:"
                    },
                    "details": {
                        "zh": "明细",
                        "en": "Details",
                        "vi": "Chi tiết",
                        "zh-Hant": "明細",
                        "id": "Detail",
                        "es": "Detalles",
                        "pt-BR": "Detalhes"
                    },
                    "tip15": {
                        "zh": "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易账户",
                        "en": "The winner is divided into earnings and the agency’s commission income will be credited to the purse, which you can cash in or out of the trading account",
                        "vi": "Người chiến thắng được chia thành thu nhập và thu nhập hoa hồng của đại lý sẽ được ghi có vào ví, bạn có thể rút tiền vào hoặc ra khỏi tài khoản giao dịch",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易賬戶",
                        "id": " Hadiah akan dibagikan dan dikirim ke dompet masing-masing pemenang yang dapat ditarik atau dimasukkan ke akun transaksi ",
                        "es": "Cada ganadora es dividida en ganancias y la comisión de agencia será creditada, pudiendo ser retirada a, ó, desde la cuenta de trading",
                        "pt-BR": "O vencedor é dividido em ganhos e a receita de comissões da agência será creditada na bolsa, que você pode descontar ou retirar da conta de negociação"
                    },
                    "telegraphicTransferTip1": {
                        "zh": "不同银行在购汇和汇款中会收取不同的手续费（一般为手续费、电报费和中转行费用），对于购汇和汇款中产生的费用由客户自行承担，TigerWit不收取电汇入金手续费，入金金额将以实际到账为准。",
                        "en": "Different banks in the purchase of foreign exchange and remittances will charge different fees (usually fee, telegraph fee and transit costs), the costs incurred in the purchase of foreign exchange and remittance shall be borne by the customer, TigerWit does not charge wire transfer fees, deposit amount will be the actual account.",
                        "vi": "Các ngân hàng khác nhau trong việc mua ngoại tệ và kiều hối sẽ tính các khoản phí khác nhau (thường là phí, phí điện báo và chi phí quá cảnh), chi phí phát sinh khi mua ngoại tệ và chuyển tiền sẽ do khách hàng chịu, TigerWit không tính phí chuyển khoản ngân hàng , số tiền gửi sẽ là tài khoản thực.",
                        "zh-Hant": "不同銀行在購匯和匯款中會收取不同的手續費（壹般為手續費、電報費和中轉行費用），對於購匯和匯款中產生的費用由客戶自行承擔，TigerWit不收取電匯入金手續費，入金金額將以實際到帳為準。",
                        "id": " TigerWit tidak membebankan biaya transfer apapun, namun pembelian valutas asing dan pengiriman dana melalui bank akan dikenakan biaya yang berbeda-beda tergantung kebijakan bank tersebut, biaya akan ditanggung oleh nasabah. Dana yang diterima oleh TigerWit adalah dana yang telah dipotong biaya-biaya bank. ",
                        "es": "Cada banco por la compra de divisas y envíos cobra tarifas diferente (generalmente, comisiones, tarifas de telégrafo y costos de tránsito), los costes incurridos en la compra de divisas y remesas correrán a cargo del cliente, TigerWit no cobra tarifas de transferencia bancaria y acreditará el importe recibido del depósito en la cuenta real.",
                        "pt-BR": "Diferentes bancos na compra de divisas e remessas cobrará taxas diferentes (geralmente taxa, taxa de telégrafo e custos de trânsito), os custos incorridos na compra de divisas e remessa serão suportados pelo cliente, TigerWit não cobra taxas de transferência bancária , o valor do depósito será a conta real."
                    },
                    "telegraphicTransferTip2": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到帐，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to ensure that your deposit immediate arrived at the account, please note your trading account and telephone number in the application form so that we can contact you.",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để đảm bảo rằng khoản tiền gửi của bạn ngay lập tức đến tài khoản, vui lòng lưu ý tài khoản giao dịch và số điện thoại của bạn trong biểu mẫu đơn đăng ký để chúng tôi có thể liên hệ với bạn.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": " Kami tidak menerima pengisian dana secara tunai. Untuk memastikan bahwa pengisian dana anda berjalan dengan lancar, mohon masukkan nomor akun dan nomor telepon anda di dalam formulir pengisian dana. ",
                        "es": "Por favor, tenga en cuenta que no aceptamos pagos en efectivo directamente en nuestra cuenta bancaria. Para asegurarse de que su depósito llegue a la cuenta de inmediato, anote su cuenta de trading y su número de teléfono en el formulario de solicitud para que podamos contactarlo.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. A fim de garantir que seu depósito chegou imediatamente à conta, por favor, anote sua conta de negociação e número de telefone no formulário de inscrição para que possamos entrar em contato com você."
                    },
                    "telegraphicTransferTip3": {
                        "zh": "TigerWit接受美元汇款，汇款详情如下：",
                        "en": "TigerWit to receive US dollar remittance, remittance details are as follows：",
                        "vi": "TigerWit nhận tiền chuyển đô la Mỹ, chi tiết chuyển tiền như sau: ",
                        "zh-Hant": "TigerWit接受美元匯款，匯款詳情如下：",
                        "id": "TigerWit menerima pengiriman dalam bentuk dolar, detail pengiriman adalah sebagai berikut: ",
                        "es": "TigerWit recibir US dollar remittance, detalles de envío como a continuación：",
                        "pt-BR": "TigerWit para receber remessa de dólares, os detalhes de remessa são os seguintes:"
                    },
                    "telegraphicTransferTip4": {
                        "zh": "TigerWit将根据各国适用法律尽最大努力以实际行动配合反洗钱及反恐怖方面的所有法律法规，具体包括报告及冻结可疑资产等。TigerWit将不定期地查看账户记录以获取有洗钱嫌疑的交易证据，包括对如下几项的监控：",
                        "en": "TigerWit will do its best to cooperate with all laws and regulations on anti-money laundering and anti-terrorism, including reporting and freezing of suspicious assets, in accordance with the applicable laws of each country. TigerWit will view the account records from time to time to obtain evidence of transaction evidence of money laundering, including the following: ",
                        "vi": "TigerWit sẽ cố hết sức hợp tác với tất cả các luật và quy định về chống rửa tiền và chống khủng bố, bao gồm báo cáo và đóng băng các tài sản đáng ngờ, phù hợp với luật áp dụng của mỗi quốc gia. TigerWit sẽ xem hồ sơ tài khoản theo thời gian để có được bằng chứng về bằng chứng giao dịch về rửa tiền, bao gồm những điều sau đây: ",
                        "zh-Hant": "TigerWit將根據各國這用法律盡最大努力以實際行動配合反洗錢及反恐怖方面的所有法律法規，具體包括報告及凍結可疑資產等。TigerWit將不定期地查看賬戶記錄以獲取有洗錢嫌疑的交易證據，包括對如下幾項的監控：",
                        "id": "TigerWit selalu berkomitmen untuk mentaati seluruh peraturan dan hukum terutama mengenai anti pencucian uang dan anti teroris, dengan melaporkan dan membekukan aset yang mencurigakan. Sesuai dengan hukum di masing-masing negara, TigerWit akan memantau seluruh transaksi keuangan yang terjadi, dan untuk mencegah terjadi tindak pencucian uang dengan peraturan sebagai berikut:",
                        "es": "TigerWit hará todo lo posible por cooperar con todas las leyes y regulaciones contra el lavado de dinero y el antiterrorismo, incluidos reporting  y la congelación de activos sospechosos, de conformidad con las leyes aplicables de cada país. TigerWit analizará los registros de la cuenta de vez en cuando para obtener evidencias de posibles transacciones de lavado de dinero, que incluye lo siguiente: ",
                        "pt-BR": "A TigerWit fará o seu melhor para cooperar com todas as leis e regulamentos sobre lavagem de dinheiro e anti-terrorismo, incluindo denúncia e congelamento de ativos suspeitos, de acordo com as leis aplicáveis de cada país. TigerWit exibirá os registros da conta de tempos em tempos para obter evidências de provas de lavagem de dinheiro, incluindo o seguinte:"
                    },
                    "telegraphicTransferTip5": {
                        "zh": "账户资金出入情况。电汇入金的用户，提现时若金额低于电汇入金时金额，TigerWit只支持将提现金额提现至入金银行卡。",
                        "en": "Account funds access situation. If the deposit was made by wire transfer, funds may be withdrawn only by wire transfer to the same bank and to the same account from which it originated.",
                        "vi": "Tình trạng truy cập quỹ tài khoản. Nếu khoản tiền gửi được thực hiện bằng chuyển khoản ngân hàng, tiền có thể được rút chỉ bằng chuyển khoản ngân hàng đến cùng một ngân hàng và cho cùng một tài khoản mà từ đó nó được bắt nguồn.",
                        "zh-Hant": "賬戶資金出入情況。電匯入金的用戶，提現時若金額低於電匯入金時金額，TigerWit只支持將提現金額提現至入金銀行卡。",
                        "id": "Dana masuk dan dana keluar. Apabila pengisian dana dilakukan melalui transfer antar bank, maka dana hanya boleh ditarik ke rekening yang sama dengan rekening pengirim di awal . ",
                        "es": "Situación Acceso a los Fondos Cuenta. Si el depósito se realizó mediante transferencia bancaria, los fondos sólo se pueden retirar mediante transferencia bancaria al mismo banco y a la misma cuenta.",
                        "pt-BR": "Conta conta a situação de acesso. Se o depósito foi feito por transferência bancária, os fundos podem ser retirados apenas por transferência eletrônica para o mesmo banco e para a mesma conta da qual se originou."
                    },
                    "telegraphicTransferTip6": {
                        "zh": "电汇汇款方及收款方",
                        "en": "The remitter and The beneficiary of wire transfer",
                        "vi": "Người chuyển tiền và Người thụ hưởng chuyển khoản ngân hàng",
                        "zh-Hant": "電匯匯款方及收款方",
                        "id": "Pengirim dan Penerima transaksi transfer antar bank",
                        "es": "El remitente y El beneficiario de la transferencia bancaria",
                        "pt-BR": "O remetente e o beneficiário da transferência bancária"
                    },
                    "telegraphicTransferTip7": {
                        "zh": "除正常业务外的其他行为。",
                        "en": "Other than normal business.",
                        "vi": "Khác với kinh doanh bình thường.",
                        "zh-Hant": "除正常業務外的其他行為。",
                        "id": "Selain dari bisnis.",
                        "es": "Otro que no sea negocios normales",
                        "pt-BR": "Além de negócios normais."
                    },
                    "telegraphicTransferTip8_1": {
                        "zh": "如您有疑问，请",
                        "en": "If you have any questions, please ",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào, Vui lòng ",
                        "zh-Hant": "如您有疑問，請",
                        "id": "Apabila anda memiliki pertanyaan, silahkan",
                        "es": "Para cualquier consulta, por favor ",
                        "pt-BR": "Se você tiver quaisquer perguntas, favor"
                    },
                    "telegraphicTransferTip8_2": {
                        "zh": "点击此处",
                        "en": "click here ",
                        "vi": "nhấp vào đây ",
                        "zh-Hant": "點擊此處",
                        "id": "klik disini",
                        "es": "click aquí ",
                        "pt-BR": "clique aqui"
                    },
                    "telegraphicTransferTip8_3": {
                        "zh": "联系在线客服获得帮助。",
                        "en": "to contact the online customer service for help.",
                        "vi": "để liện hệ với dịch vụ chăm sóc khách hàng trực tuyến để yêu cầu giúp đỡ.",
                        "zh-Hant": "聯系在線客服獲得幫助。",
                        "id": "Untuk bantuan, silahkan hubungi layanan pelanggan.",
                        "es": "para contactar al servicio al cliente online y solicitar su ayuda.",
                        "pt-BR": "contactar o serviço de atendimento online para obter ajuda."
                    },
                    "beneficiaryName": {
                        "zh": "收款人名称（Company）：",
                        "en": "Beneficiary’s Name: ",
                        "vi": "Tên Người thụ hưởng: ",
                        "zh-Hant": "收款人名稱（Company）：",
                        "id": " Nama Penerima: ",
                        "es": "Nombre Beneficiario: ",
                        "pt-BR": "Nome do Beneficiário:"
                    },
                    "beneficiaryBank": {
                        "zh": "收款行所在国家（地区）：",
                        "en": "Beneficiary’s Bank Country(Region): ",
                        "vi": "Ngân hàng quốc gia của Người thụ hưởng (Khu vực: ",
                        "zh-Hant": "收款行所在國家（地區）：",
                        "id": " Negara bank penerima (Daerah): ",
                        "es": "Banco Beneficiario País(Región): ",
                        "pt-BR": "País do Banco do Beneficiário(Região):"
                    },
                    "australia": {
                        "zh": "澳大利亚",
                        "en": "AUSTRALIA",
                        "vi": "ÚC",
                        "zh-Hant": "澳大利亞",
                        "id": "AUSTRALIA",
                        "es": "AUSTRALIA",
                        "pt-BR": "AUSTRÁLIA"
                    },
                    "beneA_CNo": {
                        "zh": "收款人账号（Account）：",
                        "en": "Bene’s A/C/ No: ",
                        "vi": "Bene’s A/C? NO: ",
                        "zh-Hant": "收款人帳號（Account）：",
                        "id": "Nomor rekening Bene: ",
                        "es": "Bene’s A/C/ Nº: ",
                        "pt-BR": "Número da conta do Beneficiário:"
                    },
                    "swift": {
                        "zh": "收款银行机构鉴定代码（Swift）：",
                        "en": "Swift: ",
                        "vi": "Swift: ",
                        "zh-Hant": "收款銀行機構鑒定代碼（Swift）：",
                        "id": "Swift: ",
                        "es": "Swift: ",
                        "pt-BR": "Swift:"
                    },
                    "beneficiaryBankName": {
                        "zh": "收款人开户行（Bank）：",
                        "en": "Beneficiary’s Bank Name: ",
                        "vi": "Tên Ngân Hàng Của Người Thụ Hưởng: ",
                        "zh-Hant": "收款人開戶行（Bank）：",
                        "id": " Negara bank penerima: ",
                        "es": "Banco Beneficiario Nombre: ",
                        "pt-BR": "Nome do Banco do Beneficiário:"
                    },
                    "beneficiaryBankAddress": {
                        "zh": "银行地址（Address）：",
                        "en": "Beneficiary’s Bank Address: ",
                        "vi": "Địa Chỉ Ngân Hàng Của Người Thụ Hưởng: ",
                        "zh-Hant": "銀行地址（Address）：",
                        "id": "Alamat Bank Penerima: ",
                        "es": "Banco Beneficiario Dirección: ",
                        "pt-BR": "Endereço do Banco do Beneficiário:"
                    },
                    "bsb": {
                        "zh": "清算号（BSB）：",
                        "en": "BSB: ",
                        "vi": "BSB: ",
                        "zh-Hant": "清算號（BSB）：",
                        "id": "BSB: ",
                        "es": "BSB: ",
                        "pt-BR": "BSB:"
                    },
                    "beneficiaryAddress": {
                        "zh": "收款人地址（Address）：",
                        "en": "Beneficiary’s Address: ",
                        "vi": "Địa Chỉ Của Người Thụ Hưởng: ",
                        "zh-Hant": "收款人地址（Address）：",
                        "id": "Alamat Penerima dana: ",
                        "es": "Beneficiario Dirección: ",
                        "pt-BR": "Endereço do Beneficiário:"
                    },
                    "remittanceInformation": {
                        "zh": "汇款附言：",
                        "en": "Remittance Information: ",
                        "vi": "Thông Tin Chuyển Tiền: ",
                        "zh-Hant": "匯款附言：",
                        "id": "Informasi Pengirim: ",
                        "es": "Información Envío: ",
                        "pt-BR": "Informação de Remessa:"
                    },
                    "anti_MoneyLaunderingPolicy": {
                        "zh": "反洗钱政策：",
                        "en": "Anti-Money Laundering Policy: ",
                        "vi": "Chính Sách Chống Rửa Tiền: ",
                        "zh-Hant": "反洗錢政策：",
                        "id": "Kebijakan anti pencucian uang: ",
                        "es": "Política Anti Blanqueo Capitales: ",
                        "pt-BR": "Política Anti Lavagem de Dinheiro:"
                    },
                    "openTrades": {
                        "zh": "持仓",
                        "en": "Open Trades",
                        "vi": "Mở Các Giao Dịch",
                        "zh-Hant": "持倉",
                        "id": "Posisi terbuka",
                        "es": "Trades Abiertos",
                        "pt-BR": "Negociações abertas"
                    },
                    "margin": {
                        "zh": "已用保证金",
                        "en": "Margin",
                        "vi": "Margin",
                        "zh-Hant": "已用保證金",
                        "id": "Margin",
                        "es": "Margen",
                        "pt-BR": "Margem"
                    },
                    "equity": {
                        "zh": "账户净值",
                        "en": "Equity",
                        "vi": "Vốn thực",
                        "zh-Hant": "賬戶凈值",
                        "id": "Ekuitas",
                        "es": "Equity",
                        "pt-BR": "Equidade"
                    },
                    "allOrders": {
                        "zh": "全部订单",
                        "en": "All Orders",
                        "vi": "Tất Cả Các Lệnh",
                        "zh-Hant": "全部訂單",
                        "id": "Semua transaksi",
                        "es": "Todas Órdenes",
                        "pt-BR": "Todos pedidos"
                    },
                    "trading": {
                        "zh": "自主持仓",
                        "en": "Trading",
                        "vi": "Đang giao dịch",
                        "zh-Hant": "自主持倉",
                        "id": "Trading",
                        "es": "Trading",
                        "pt-BR": "Trading"
                    },
                    "copy": {
                        "zh": "跟单持仓",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "跟單持倉",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia"
                    },
                    "pending": {
                        "zh": "挂单",
                        "en": "Pending",
                        "vi": "Bảo lưu",
                        "zh-Hant": "掛單",
                        "id": "Pending",
                        "es": "Pendiente",
                        "pt-BR": "Pendente"
                    },
                    "buy": {
                        "zh": "买入",
                        "en": "Buy",
                        "vi": "Mua",
                        "zh-Hant": "買入",
                        "id": "Beli",
                        "es": "Comprar",
                        "pt-BR": "Comprar"
                    },
                    "sell": {
                        "zh": "卖出",
                        "en": "Sell",
                        "vi": "Bán",
                        "zh-Hant": "賣出",
                        "id": "Jual",
                        "es": "Vender",
                        "pt-BR": "Vender"
                    },
                    "copyMaster": {
                        "zh": "高手跟单",
                        "en": "Copy",
                        "vi": "Sao chép",
                        "zh-Hant": "高手跟單",
                        "id": "Ikuti",
                        "es": "Copy",
                        "pt-BR": "Cópia"
                    },
                    "noOrders": {
                        "zh": "没有订单",
                        "en": "No Orders",
                        "vi": "Không có lệnh",
                        "zh-Hant": "沒有訂單",
                        "id": "Tidak ada posisi",
                        "es": "No Órdenes",
                        "pt-BR": "Sem pedidos"
                    },
                    "toTrade": {
                        "zh": "去下个单",
                        "en": "To Trade",
                        "vi": "Giao dịch",
                        "zh-Hant": "去下個單",
                        "id": "Transaksi",
                        "es": "Para Trade",
                        "pt-BR": "Para trocar"
                    },
                    "followMaster": {
                        "zh": "逛逛高手榜",
                        "en": "Follow the Master",
                        "vi": "Sao chép Bậc Thầy",
                        "zh-Hant": "逛逛高手榜",
                        "id": "Ikuti Master",
                        "es": "Seguir al Master",
                        "pt-BR": "Siga o Mestre"
                    },
                    "notice": {
                        "zh": "提示",
                        "en": "Notice",
                        "vi": "Lưu ý",
                        "zh-Hant": "提示",
                        "id": "Pengumuman",
                        "es": "Notificación",
                        "pt-BR": "Aviso"
                    },
                    "paymentMethod": {
                        "zh": "选择支付方式",
                        "en": "Select payment method",
                        "vi": "Lựa chọn phương thức thanh toán",
                        "zh-Hant": "選擇支付方式",
                        "id": "Pilih metode pembayaran",
                        "es": "Seleccione medio pago",
                        "pt-BR": "Selecionar método de pagamento"
                    },
                    "walletBalance": {
                        "zh": "当前钱包余额",
                        "en": "Wallet balance",
                        "vi": "Số dư trong ví",
                        "zh-Hant": "當前錢包余額",
                        "id": "Saldo Dompet",
                        "es": "Balance Wallet",
                        "pt-BR": "Balanço da Carteira"
                    },
                    "walletBalanceM": {
                        "zh": "当前钱包余额：",
                        "en": "Wallet balance: ",
                        "vi": "Số dư trong ví: ",
                        "zh-Hant": "當前錢包余額：",
                        "id": "Saldo Dompet: ",
                        "es": "Balance Wallet: ",
                        "pt-BR": "Saldo da carteira:"
                    },
                    "confirmAccount": {
                        "zh": "为保证充值成功，请务必使用本人银行卡和账户",
                        "en": "In order to ensure successful deposit, please use your bank card and account",
                        "vi": "Để đảm bảo kí quỹ thành công, xin sử dụng thẻ và tài khoản ngân hàng của bạn",
                        "zh-Hant": "為保證充值成功，請務必使用本人銀行卡和賬戶",
                        "id": "Untuk memastikan pengisian dana berhasil, mohon gunakan rekening dan akun milik anda sendiri",
                        "es": "Para garabtizar un depósito correcto, por favor, use su tarjeta banco y cuenta",
                        "pt-BR": "Para garantir o depósito bem-sucedido, use seu cartão bancário e sua conta"
                    },
                    "tip16": {
                        "zh": "支付完成前，请不要关闭支付验证窗口",
                        "en": "Please don’t close the window until payment is completed",
                        "vi": "Vui lòng đừng đóng cửa sổ cho đến khi thanh toán đc hoàn thành",
                        "zh-Hant": "支付完成前，請不要關閉支付驗證窗口",
                        "id": "Jangan tutup jendela hingga verifikasi selesai",
                        "es": "Por favor, no cierre la ventana hasta que pago esté completado",
                        "pt-BR": "Por favor, não feche a janela até que o pagamento seja concluído"
                    },
                    "tip17": {
                        "zh": "支付完成后，请根据您支付的情况点击下面按钮",
                        "en": "After the payment is completed, please click the button below according to your payment situation",
                        "vi": "Sau khi thanh toán đã hoàn thành, vui lòng nhấp vào nút bên dưới theo tình hình thanh toán của bạn",
                        "zh-Hant": "支付完成後，請根據您支付的情況點擊下面按鈕",
                        "id": "Setelah pembayaran selesai, silahkan klik tombol dibawah ini untuk melihat status transaksi. ",
                        "es": "Una vez el pago es completado, por favor, haga click en el botón debajo en función de la situación de su pago",
                        "pt-BR": "Depois que o pagamento for concluído, clique no botão abaixo de acordo com sua situação de pagamento"
                    },
                    "runIntoProblem": {
                        "zh": "遇到问题",
                        "en": "Run into problem",
                        "vi": "Gặp rắc rối",
                        "zh-Hant": "遇到問題",
                        "id": "Mengalami masalah",
                        "es": "Problema encontrado",
                        "pt-BR": "Correr em problema"
                    },
                    "paymentSuccess": {
                        "zh": "支付成功",
                        "en": "Payment success",
                        "vi": "Thanh toán thành công",
                        "zh-Hant": "支付成功",
                        "id": "Pembayaran Sukses",
                        "es": "Pago éxito",
                        "pt-BR": "Sucesso do pagamento"
                    },
                    "equivalent": {
                        "zh": "折合",
                        "en": "Equivalent ",
                        "vi": "Tương đương ",
                        "zh-Hant": "折合",
                        "id": "Setara ",
                        "es": "Equivalente ",
                        "pt-BR": "Equivalente"
                    },
                    "about": {
                        "zh": "约",
                        "en": " about",
                        "vi": " khoảng",
                        "zh-Hant": "約",
                        "id": " Tentang",
                        "es": " sobre",
                        "pt-BR": "  sobre"
                    },
                    "uploadVoucher": {
                        "zh": "上传凭证",
                        "en": "Upload voucher",
                        "vi": "Tải lên",
                        "zh-Hant": "上傳憑證",
                        "id": "Unggah Dokumen",
                        "es": "Subir cupón",
                        "pt-BR": "Carregar comprovante"
                    },
                    "tip18": {
                        "zh": "您网银支付凭证正在审核中，无法充值，请等待审核通过后重试。",
                        "en": "Your e-payment voucher is under review and cannot be topped up. Please try again after passing the audit.",
                        "vi": "Phiếu thanh toán điện tử của bạn đang được xem xét và không thể được nạp tiền. Vui lòng thử lại sau khi vượt qua kiểm toán.",
                        "zh-Hant": "您網銀支付憑證正在審核中，無法充值，請等待審核通過後重試。",
                        "id": " Bukti setoran anda sedang dalam tahap pemeriksaan. Mohon menunggu hingga proses selesai sebelum melakukan transaksi yang lain. ",
                        "es": "Su comprobante de pago electrónico se está revisando y no se puede recargar. Por favor, inténtelo de nuevo después de pasar la auditoría.",
                        "pt-BR": "Seu comprovante de pagamento eletrônico está sendo analisado e não pode ser cobrado. Por favor, tente novamente depois de passar pela auditoria."
                    },
                    "tip19": {
                        "zh": "应监管要求，客户的网银入金会随机抽查入金凭证，如客户的某笔入金被抽查需要客户按照提示和要求上传凭证。",
                        "en": "According to the regulatory requirements, the customer's e-deposit will be randomly checked into the deposit voucher. For example, the customer needs to upload the voucher according to the tips and requirements when a certain amount of deposit is checked.",
                        "vi": "Theo yêu cầu quy định, tiền gửi điện tử của khách hàng sẽ được kiểm tra ngẫu nhiên vào chứng từ tiền gửi. Ví dụ: khách hàng cần tải lên giấy tờ xác nhận theo các mẹo và yêu cầu khi kiểm tra một số tiền nhất định.",
                        "zh-Hant": "應監管要求，客戶的網銀入金會隨機抽查入金憑證，如客戶的某筆入金被抽查需要客戶按照提示和要求上傳憑證。",
                        "id": "Berdasarkan peraturan, bukti setoran nasabah akan diperiksa apabila nasabah menyetorkan dana dengan jumlah tertentu.",
                        "es": "De acuerdo con los requisitos regulatorios, el depósito electrónico del cliente pudiera ser comprobado aleatoriamente. Por ejemplo, el cliente necesita cargar el cupón siguiendo los consejos y requisitos necesarios al verificar depósitos de un determinado importe.",
                        "pt-BR": "De acordo com os requisitos regulatórios, o depósito eletrônico do cliente será verificado aleatoriamente no comprovante de depósito. Por exemplo, o cliente precisa carregar o comprovante de acordo com as dicas e requisitos quando uma certa quantia de depósito é verificada."
                    },
                    "tip20": {
                        "zh": "客户出金时，如果有未上传和未审核通过的凭证，将限制客户出金，上传审核通过后可正常出金，没有未上传或者未审核的凭证客户可以正常出金。",
                        "en": "When the customer withdrawal, if there are unuploaded and unaudited vouchers, the customer will be restricted to withdrawal. After passing the examination, the funds will be withdrew normally. If there are no unuploaded or unaudited certificates, the customer can withdraw normally.",
                        "vi": "Khi khách hàng rút tiền, nếu chứng từ chưa được tải và chưa được kiểm toán, khách hàng sẽ bị hạn chế rút tiền. Sau khi vượt qua việc kiểm tra, số tiền sẽ được rút lại bình thường. Nếu không có chứng chỉ chưa được tải lên hoặc chưa được kiểm tra, khách hàng có thể rút tiền bình thường.",
                        "zh-Hant": "客戶出金時，如果有未上傳和未審核通過的憑證，將限制客戶出金，上傳審核通過後可正常出金，沒有未上傳或者未審核的憑證客戶可以正常出金。",
                        "id": "Ketika nasabah melakukan penarikan dana, namun pada saat pengisian dana di awal tidak melampirkan bukti setoran, maka nasabah belum bisa melakukan penarikan sampai bukti setoran awal diunggah dan selesai diperiksa. Apabila nasabah sudah mengunggah bukti setoran di awal, penarikan akan berlangsung tanpa kendala.",
                        "es": "Cuando el cliente reembolso, si hay cupones no subidos y no auditados, el cliente tendrá restringidos los reembolsos. Después de pasar auditoría, los fondos podrán ser reembolsados normalmente. Si no hay certificados sin cargar o sin auditar, el cliente puede reembolsar normalmente.",
                        "pt-BR": "Quando a retirada do cliente, se houver comprovantes não enviados e não auditados, o cliente será restrito ao saque. Depois de passar no exame, os fundos serão retirados normalmente. Se não houver certificados não enviados ou não-auditados, o cliente poderá retirar-se normalmente."
                    },
                    "tip21": {
                        "zh": "1、客户必须使用本人银行卡入金；",
                        "en": "1.The customer must use his bank card to deposit；",
                        "vi": "1. Khách hàng phải dung thẻ ngân hàng của họ để gửi tiền;",
                        "zh-Hant": "1、客戶必須使用本人銀行卡入金；",
                        "id": "1. Nasabah harus menggunakan rekening bank sendiri untuk mengisi dana;",
                        "es": "1.El cliente debe usar su tarjeta banco para depositar；",
                        "pt-BR": "O cliente 1.The deve usar seu cartão de banco para depositar;"
                    },
                    "tip22": {
                        "zh": "2、若使用他人银行卡，资金将被原路退回，客户需承担1.8%手续费；",
                        "en": "2.If customer use someone else's bank card, the money will be returned and the customer shall bear a charge of 1.8%;",
                        "vi": "2. Nếu khách hàng sử dụng thẻ ngân hàng của ai đó, tiền sẽ không được trả lại và khách hàng sẽ chịu phí phạt 1.8 %;",
                        "zh-Hant": "2、若使用他人銀行卡，資金將被原路退回，客戶需承擔1.8%手續費；",
                        "id": "2. Apabila nasabah menggunakan rekening bank milik orang lain, maka dana akan ditolak dan dikembalikan ke rekening awal. Nasabah akan dikenakan biaya sebesar 1,8%;",
                        "es": "2.Si el cliente utiliza la tarjeta bancaria de otra persona, el dinero será devuelto y el cliente deberá pagar un cargo del 1,8%;",
                        "pt-BR": "2. Se o cliente usar o cartão bancário de outra pessoa, o dinheiro será devolvido e o cliente arcará com uma taxa de 1,8%;"
                    },
                    "tip23": {
                        "zh": "3、若已产生交易订单，客户需在收到通知后1个工作日内全部平仓，否则系统将进行强制平仓。平仓后资金原路退回，账号将被关闭不予使用。",
                        "en": "3.If a trading order has been generated, the customer shall close all the positions within 1 working day after receiving the notice, otherwise the system will be forced to close the positions. The fund will be returned after closing the positions, and the account will be closed and not used.",
                        "vi": "3. Nếu lệnh giao dịch đã được tạo, khách hàng sẽ đóng tất cả các vị thế trong vòng 1 ngày làm việc sau khi nhận được thông báo, nếu không hệ thống sẽ bị buộc phải đóng các vị thế. Quỹ sẽ được trả lại sau khi đóng các vị thế, và tài khoản sẽ bị đóng và không được sử dụng.",
                        "zh-Hant": "3、若已產生交易訂單，客戶需在收到通知後1個工作日內全部平倉，否則系統將進行強制平倉。平倉後資金原路退回，帳號將被關閉不予使用。",
                        "id": "3. Semua posisi terbuka nasabah harus ditutup 1x24 jam (hari kerja) sejak nasabah menerima pesan pemberitahuan. Jika sudah melewati waktu yang ditentukan, sistem akan menutup secara otomatis posisi tersebut. Dana akan dikembalikan setelah posisi sudah tertutup sepenuhnya dan akun tidak dapat lagi digunakan.",
                        "es": "3.Si se ha generado una orden de trading, el cliente cerrará todas las posiciones dentro de 1 día hábil después de recibir el aviso, de lo contrario el sistema cerrará las posiciones. Los fondos se devolverán después de cerrar las posiciones, y la cuenta se cerrará y no podrá utilizarse.",
                        "pt-BR": "3. Se uma ordem de negociação foi gerada, o cliente deve fechar todas as posições dentro de 1 dia útil após receber o aviso, caso contrário o sistema será forçado a fechar as posições. O fundo será devolvido após o fechamento das posições, e a conta será fechada e não utilizada."
                    },
                    "tip24": {
                        "zh": "入金凭证要求及获取方式",
                        "en": "Requirements and methods of obtaining the deposit vouchers",
                        "vi": "Yêu cầu và phương pháp thu thập chứng từ tiền gửi",
                        "zh-Hant": "入金憑證要求及獲取方式",
                        "id": "Persyaratan bukti setoran",
                        "es": "Requisitos y métodos de obtención cupones de depósito.",
                        "pt-BR": "Requisitos e métodos de obtenção dos comprovantes de depósito"
                    },
                    "tip25": {
                        "zh": "1、入金凭证必须包含：账号姓名、账号号码、入金时间、金额",
                        "en": "1.The voucher must include: account name, account number, deposit time and amount",
                        "vi": "1. Chứng từ gửi tiền phải bao gồm: tên tài khoản, số tài khoản, thời gian gửi và số tiền",
                        "zh-Hant": "1、入金憑證必須包含：帳號姓名、帳號號碼、入金時間、金額",
                        "id": "1. Bukti setoran wajib melampirkan nama pemilik rekening, nomor rekening, waktu pengiriman dan jumlah pengiriman ",
                        "es": "1.El cupón debe incluir: nombre de cuenta, número de cuenta, hora depósito e importe",
                        "pt-BR": "1.O voucher deve incluir: nome da conta, número da conta, hora do depósito e valor"
                    },
                    "tip26": {
                        "zh": "2、入金凭证网银获取路径可咨询银行客服。",
                        "en": "2.Deposit certificate online banking access path can consult the bank customer service.",
                        "vi": "2. Đường dẫn truy cập ngân hàng trực tuyến chứng từ gửi tiền có thể là tài liệu chỉ dẫn cho bộ phận dịch vụ khách hàng của ngân hàng.",
                        "zh-Hant": "2、入金憑證網銀獲取路徑可咨詢銀行客服。",
                        "id": "2. Untuk pengisian dana melalui online banking bisa mendapatkan bukti setoran dari layanan pelanggan bank yang bersangkutan. ",
                        "es": "2.La ruta de acceso al certificado de depósitode banca online puede consultarse con el servicio de atención al cliente del banco.",
                        "pt-BR": "O trajeto de acesso da operação bancária do certificado 2.Deposit pode consultar o serviço ao cliente do banco. Usualmente toma 3-5 dias de trabalho para chegar a conta"
                    },
                    "bankCardNumber": {
                        "zh": "银行卡号",
                        "en": "Bank card number",
                        "vi": "Số tài khoản ngân hàng",
                        "zh-Hant": "銀行卡號",
                        "id": "Nomor rekening bank",
                        "es": "Número tarjeta bancaria",
                        "pt-BR": "Número do cartão bancário"
                    },
                    "tip27": {
                        "zh": "1、请务必使用填写的该银行卡进行网银支付；",
                        "en": "1.Please be sure to use the card that you filled to make online payment.",
                        "vi": "Vui lòng đảm bảo rằng bạn sử dụng thẻ mà bạn đã đăng ký phương thức thanh toán trực tuyến.",
                        "zh-Hant": "1、請務必使用填寫的該銀行卡進行網銀支付；",
                        "id": "1. Harap pastikan rekening yang anda gunakan telah terdaftar",
                        "es": "1.Asegúrese de usar la tarjeta que rellenó para realizar el pago online.",
                        "pt-BR": "1.Por favor, certifique-se de usar o cartão que você preencheu para fazer o pagamento online."
                    },
                    "tip28": {
                        "zh": "2、上传该笔入金凭证截图中银行卡号必须与该支付卡号一致，否则审核将被驳回，影响出金操作。",
                        "en": "2.The bank card number in the screenshot of the deposit voucher uploaded must be consistent with the payment card number, otherwise the audit will be rejected, affecting the withdrawal.",
                        "vi": "2. Số thẻ ngân hàng trong ảnh chụp màn hình của chứng từ gửi tiền được tải lên phải phù hợp với số thẻ thanh toán, nếu không việc kiểm tra sẽ bị từ chối, ảnh hưởng đến việc rút tiền.",
                        "zh-Hant": "2、上傳該筆入金憑證截圖中銀行卡號必須與該支付卡號壹致，否則審核將被駁回，影響出金操作。",
                        "id": "2. Bukti setoran yang diunggah harus sesuai dengan rekening yang telah didaftarkan, jika tidak maka akan ditolak dan tidak dapat melakukan penarikan. ",
                        "es": "2.El número de la tarjeta bancaria en la captura de pantalla del comprobante de depósito cargado debe coincidir con el número de la tarjeta de pago; de lo contrario, se rechazará la auditoría, lo que afectará el reembolso.",
                        "pt-BR": "2.O número do cartão bancário na captura de tela do comprovante de depósito enviado deve ser consistente com o número do cartão de pagamento, caso contrário, a auditoria será rejeitada, afetando a retirada."
                    },
                    "tip29": {
                        "zh": "如有其它疑问，请联系TigerWit客服：",
                        "en": "If you have any other questions, please contact TigerWit customer support: ",
                        "vi": "Nếu bạn có bất kì câu hỏi nào, vui lòng liên hệ với phòng chăm sóc khách hàng của TigerWit để được hỗ trợ: ",
                        "zh-Hant": "如有其它疑問，請聯系TigerWit客服：",
                        "id": "Apabila anda memiliki pertanyaan, silahkan hubungi layanan pelanggan TigerWit",
                        "es": "Para cualquier otra cuestión, por favor, contacte el Soporte al Cliente TigerWit: ",
                        "pt-BR": "Se você tiver quaisquer perguntas, por favor contate o suporte ao cliente da TigerWit"
                    },
                    "rate1": {
                        "zh": "今日汇率：1 美元",
                        "en": "Today's exchange rate: $1",
                        "vi": "Tỷ lệ chuyển đổi hôm nay: 1 đôla",
                        "zh-Hant": "今日匯率：1 美元",
                        "id": "Nilai tukar hari ini : 1$",
                        "es": "Tipo de cambio de hoy: $1",
                        "pt-BR": "Taxa de câmbio de hoje: US$1"
                    },
                    "currentWalletBalance": {
                        "zh": "当前钱包余额",
                        "en": "Current wallet balance",
                        "vi": "Số dư ví hiện tại",
                        "zh-Hant": "當前錢包余額",
                        "id": "Saldo dompet saat ini",
                        "es": "Balance wallet actual",
                        "pt-BR": "Saldo atual da carteira"
                    },
                    "paymentRule": {
                        "zh": "网银支付规则",
                        "en": "Rules for online banking payment",
                        "vi": "Quy tắc cho phương thức thanh toán trực tuyến",
                        "zh-Hant": "網銀支付規則",
                        "id": "Peraturan untuk pembayaran melalui online banking",
                        "es": "Reglas pagos banca online",
                        "pt-BR": "Regras para pagamento bancário online"
                    },
                    "thirdParty": {
                        "zh": "第三方充值教程",
                        "en": "Third party deposit tutorial",
                        "vi": "Hướng dẫn gửi tiền của bên thứ ba",
                        "zh-Hant": "第三方充值教程",
                        "id": "Cara mengisi dana melalui pihak ketiga",
                        "es": "Tutorial depósitos de terceros",
                        "pt-BR": "Tutorial de depósito por terceiros"
                    },
                    "useBankPay": {
                        "zh": "请使用该银行卡支付",
                        "en": "Please use this card to pay",
                        "vi": "Vui lòng sử dụng thẻ này để trả",
                        "zh-Hant": "請使用該銀行卡支付",
                        "id": "Mohon gunakan rekening ini untuk transaksi",
                        "es": "Por favor, use esta tarjeta para pagar",
                        "pt-BR": "Por favor use este cartão para pagar"
                    },
                    "paymentCurrency": {
                        "zh": "支付币种",
                        "en": "Currency",
                        "vi": "Tiền tệ",
                        "zh-Hant": "支付蔽種",
                        "id": "Mata Uang",
                        "es": "Divisa",
                        "pt-BR": "Moeda"
                    },
                    "replace": {
                        "zh": "更换",
                        "en": "Replace",
                        "vi": "Thay thế",
                        "zh-Hant": "更換",
                        "id": "Ganti",
                        "es": "Reemplazar",
                        "pt-BR": "Substituir"
                    },
                    "fillPayCardInfo": {
                        "zh": "填写支付银行卡信息",
                        "en": "Fill in the payment card information",
                        "vi": "Điền thông tin thẻ thanh toán",
                        "zh-Hant": "填寫支付銀行卡信息",
                        "id": "Isi informasi rekening pembayaran",
                        "es": "Complete la información de la tarjeta de pago",
                        "pt-BR": "Preencher as informações"
                    },
                    "clickUpload": {
                        "zh": "点击上传电汇凭证",
                        "en": "Click to upload wire transfer voucher",
                        "vi": "Nhấp để tải lên chứng từ chuyển khoản ngân hàng",
                        "zh-Hant": "點擊上傳電匯憑證",
                        "id": " Klik untuk mengunggah bukti setor ",
                        "es": "Haga clic para cargar el comprobante de transferencia bancaria.",
                        "pt-BR": "Clicar para fazer"
                    },
                    "tip30": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please be sure to fill in your transaction account in the attached column of the remittance form.",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để nhận được thanh toán của bạn kịp thời và chính xác, vui lòng đảm bảo điền vào tài khoản giao dịch của bạn trong cột đính kèm của biểu mẫu chuyển tiền.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。",
                        "id": "Perlu dicatat bahwa kami tidak menerima uang tunai untuk pengisian dana. Mohon pastikan anda telah mengisi formulir pengiriman dana secara lengkap dan akurat agar proses pengisian dana dapat berjalan dengan lancar. ",
                        "es": "Tenga en cuenta que no aceptamos pagos en efectivo directamente a nuestra cuenta bancaria. Para recibir su pago de manera oportuna y precisa, asegúrese de completar su cuenta de transacción en la columna adjunta del formulario de envío.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. Para receber seu pagamento em tempo e precisão, preencha sua conta de transação na coluna anexa do formulário de envio."
                    },
                    "tip31": {
                        "zh": "同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": "Please also provide your phone number so that we can get in touch with you.",
                        "vi": "Vui lòng cung cấp số điện thoại của bạn để chúng tôi có thể liên lạc với bạn.",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": "Mohon isi nomor telepon yang dapat dihubungi agar kami dapat menghubungi anda apabila terjadi kesalahan.",
                        "es": "También proporcione su número de teléfono para que podamos comunicarnos con usted.",
                        "pt-BR": "Por favor, forneça seu número de telefone para que possamos entrar em contato com você."
                    },
                    "remittancePostscript": {
                        "zh": "汇款附言：",
                        "en": "Remittance postscript: ",
                        "vi": "Bản ghi chuyển tiền: ",
                        "zh-Hant": "匯款附言：",
                        "id": "Informasi Pengirim: ",
                        "es": "Posdata de envíos remesas:",
                        "pt-BR": "PostScript de remessa:"
                    },
                    "tip32": {
                        "zh": "您的姓名拼音，交易账号：",
                        "en": "Your name spell, trading account number: ",
                        "vi": "Đánh vần tên của bạn, số tài khoản giao dich: ",
                        "zh-Hant": "您的姓名拼音，交易帳號：",
                        "id": "Nama sesuai identitas dan mudah dibaca, disertai dengan nomor akun anda: ",
                        "es": "Su nombre completo, número de cuenta trading: ",
                        "pt-BR": "Seu nome, número de conta comercial:"
                    },
                    "tip33": {
                        "zh": "充值已提交，到账约为10分钟，请耐心等待",
                        "en": "Deposit has been submitted, and will arrive account about 10 minutes. Please wait patiently",
                        "vi": "Tiền gửi đã được gửi và sẽ đến tài khoản khoảng 10 phút. Xin hãy kiên nhẫn chờ đợi",
                        "zh-Hant": "充值已提交，到帳約為10分鐘，請耐心等待",
                        "id": "Pengisian dana sedang diproses dan akan masuk ke akun dalam kurun waktu 10 menit. Mohon menunggu. ",
                        "es": "Se ha enviado el depósito, y llegará a la cuenta en unos 10 minutos. Por favor, espere pacientemente",
                        "pt-BR": "Depósito foi submetido, e vai chegar a conta de cerca de 10 minutos. Por favor, aguarde pacientemente"
                    },
                    "tip34": {
                        "zh": "大概需要3-5个工作日到账",
                        "en": "It will take about 3-5 working days to get to the account",
                        "vi": "Có thể mất từ 3 đến 5 ngày làm việc để lấy được tài khoản",
                        "zh-Hant": "大概需要3-5個工作日到帳",
                        "id": "Biasanya akan memakan waktu 3-5 hari untuk bisa masuk ke rekening anda",
                        "es": "Tardará alrededor de 3-5 días hábiles para llegar a la cuenta",
                        "pt-BR": "Demorará cerca de 3 a 5 dias úteis a chegar à conta"
                    },
                    "tip35": {
                        "zh": "电汇凭证已提交",
                        "en": "The wire transfer voucher has been submitted",
                        "vi": "Chứng từ chuyển khoản ngân hàng đã được gửi",
                        "zh-Hant": "電匯憑證已提交",
                        "id": "Bukti setoran telah dikirim",
                        "es": "El comprobante de transferencia bancaria ha sido enviado.",
                        "pt-BR": "O comprovante de transferência eletrônica foi enviado"
                    },
                    "toUpload": {
                        "zh": "待上传",
                        "en": "To upload",
                        "vi": "Tải lên",
                        "zh-Hant": "待上傳",
                        "id": "Unggah",
                        "es": "Para Subir",
                        "pt-BR": "Fazer upload"
                    },
                    "underReview": {
                        "zh": "审核中",
                        "en": "Under review",
                        "vi": "Đang được xem xét",
                        "zh-Hant": "審核中",
                        "id": "Dalam peninjauan",
                        "es": "Bajo revisión",
                        "pt-BR": "Sob revisão"
                    },
                    "successfully": {
                        "zh": "审核成功",
                        "en": "Successfully",
                        "vi": "Thành công",
                        "zh-Hant": "審核成功",
                        "id": "Sukses",
                        "es": "Con éxito",
                        "pt-BR": "Com sucesso"
                    },
                    "voucherConsiderations": {
                        "zh": "凭证注意事项",
                        "en": "Voucher considerations ",
                        "vi": "Xem xét giấy tờ xác nhận ",
                        "zh-Hant": "憑證註意事項",
                        "id": "Dalam pertimbangan",
                        "es": "Consideraciones cupones ",
                        "pt-BR": "Considerações de voucher"
                    },
                    "tip36": {
                        "zh": "凭证信息必须显示姓名、银行卡号、支付金额等内容",
                        "en": "The voucher information must show the name, bank card number, payment amount and other contents",
                        "vi": "Thông tin chứng từ phải thể hiện tên, số thẻ ngân hàng, số tiền thanh toán và các nội dung khác",
                        "zh-Hant": "憑證信息必須顯示姓名、銀行卡號、支付金額等內容",
                        "id": "Bukti setoran wajib melampirkan informasi seperti, nama, nomor rekening bank, jumlah yang dikirim dan keterangan lainnya. ",
                        "es": "La información del cupón debe mostrar el nombre, el número de la tarjeta bancaria, el importe pago y otros contenidos",
                        "pt-BR": "As informações do comprovante devem mostrar o nome, o número do cartão bancário, o valor do pagamento e outros conteúdos."
                    },
                    "tip37": {
                        "zh": "凭证信息必须为实名认证本人银行账户。",
                        "en": "The voucher information must be verified bank account of customer himself.",
                        "vi": "Giấy tờ xác nhận phải được xác nhận lại tài khoản ngân hàng của chính khách hàng.",
                        "zh-Hant": "憑證信息必須為實名認證本人銀行賬戶。",
                        "id": "Bukti setoran harus memiliki informasi yang sama dengan nama pemilik akun.",
                        "es": "La información del cupón debe ser la cuenta bancaria verificada del propio cliente.",
                        "pt-BR": "A informação do comprovante deve ser verificada conta bancária do próprio cliente."
                    },
                    "tip38": {
                        "zh": "未满足以上要求，审核将被驳回。",
                        "en": "If the above requirements are not met, the audit will be rejected.",
                        "vi": "Nếu các yêu cầu trên không được đáp ứng, kiểm toán sẽ bị từ chối.",
                        "zh-Hant": "未滿足以上要求，審核將被駁回。",
                        "id": "Apabila persyaratan-persyaratan tersebut tidak terpenuhi, maka proses ditolak.",
                        "es": "Si no se cumplen los requisitos anteriores, la auditoría será rechazada.",
                        "pt-BR": "Se os requisitos acima não forem cumpridos, a auditoria será rejeitada."
                    },
                    "tip39": {
                        "zh": "审核驳回后，支付金额将原路退还，产生的1.5%手续费由您自行承担。",
                        "en": "After the review is rejected, the payment amount will be returned to you, and the 1.5% commission fee will be borne by you.",
                        "vi": "Sau khi xem xét bị từ chối, số tiền thanh toán sẽ được trả lại cho bạn và phí hoa hồng 1,5% sẽ do bạn.",
                        "zh-Hant": "審核駁回後，支付金額將原路退還，產生的1.5%手續費由您自行承擔。",
                        "id": "Apabila transaksi ditolak, maka dana akan dikembalikan ke rekening awal. Nasabah akan dikenakan biaya sebesar 1,5% . ",
                        "es": "Después de que se rechace la revisión, se le devolverá el importe del pago y usted pagará una comisión del 1,5%.",
                        "pt-BR": "Depois que a revisão for rejeitada, o valor do pagamento será devolvido a você e a taxa de comissão de 1,5% será paga por você."
                    },
                    "tip40": {
                        "zh": "注意：充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        "en": "Note: after successful recharge, please upload the voucher in time. If it is not uploaded within two weeks, the transaction cannot be conducted.",
                        "vi": "Ghi chú: sau khi nạp lại tiền thành công, vui lòng tải lên giấy tờ xác nhận đúng thời điểm. Nếu giấy tờ xác nhận không được tải lên trong 2 tuần, giao dịch không thể thực hiện.",
                        "zh-Hant": "註意：充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。",
                        "id": "Catatan: setelah berhasil mengirim dana, pastikan anda juga mengunggah bukti setoran. Apabila bukti setoran tidak diunggah dalam waktu 2 minggu, maka nasabah tidak dapat melakukan transaksi apapun.",
                        "es": "Nota: después de una recarga con éxito, suba el cupón a tiempo. Si no se carga dentro de dos semanas, la transacción no se puede realizar.",
                        "pt-BR": "Nota: após a recarga bem sucedida, por favor, envie o comprovante no tempo. Se não for carregado dentro de duas semanas, a transação não poderá ser realizada."
                    },
                    "tip41": {
                        "zh": "＊代表必须上传凭证",
                        "en": "* represents must upload vouchers",
                        "vi": "* Người đại diện phải tải chứng từ lên",
                        "zh-Hant": "＊代表必須上傳憑證",
                        "id": "* Perwakilan harus mengunggah bukti setor",
                        "es": "* representa debe subir cupones",
                        "pt-BR": "* representa deve fazer o upload de vouchers"
                    },
                    "vouchersInstance": {
                        "zh": "查看凭证示例",
                        "en": "Vouchers instance",
                        "vi": "Ví dụ chứng từ",
                        "zh-Hant": "查看憑證示例",
                        "id": "Contoh Bukti Setoran",
                        "es": "Instancia cupones",
                        "pt-BR": "Instância do voucher"
                    },
                    "transactionSuccessful": {
                        "zh": "交易成功",
                        "en": "Transaction successful",
                        "vi": "Giao dịch thành công",
                        "zh-Hant": "交易成功",
                        "id": "Transaksi Berhasil",
                        "es": "Transacción éxito",
                        "pt-BR": "Transação sucedida"
                    },
                    "submitAudition": {
                        "zh": "提交审核",
                        "en": "Submit audition",
                        "vi": "Gửi kiểm toán",
                        "zh-Hant": "提交審核",
                        "id": "Coba kirim",
                        "es": "Enviar audición",
                        "pt-BR": "Enviar audição"
                    },
                    "noVouchers": {
                        "zh": "当前没有凭证",
                        "en": "No vouchers",
                        "vi": "Không có chứng từ",
                        "zh-Hant": "當前沒有憑證",
                        "id": "Tidak ada bukti setor",
                        "es": "No cupones",
                        "pt-BR": "Sem vouchers"
                    },
                    "tip42": {
                        "zh": "受最高监管的约束，需要您通过认证审核后方可进行充值操作",
                        "en": "Subject to the highest regulatory constraints, you need to pass the verification audit before deposit",
                        "vi": "Theo các ràng buộc pháp lý cao nhất, bạn cần phải vượt qua kiểm tra xác minh trước khi gửi tiền",
                        "zh-Hant": "受最高監管的約束，需要您通過認證審核後方可進行充值操作",
                        "id": " Sesuai peraturan, anda harus sudah melewati proses verifikasi sebelum melakukan pengisian dana ",
                        "es": "Sujeto a las restricciones reglamentarias más estrictas, debe pasar la auditoría de verificación antes de depositar",
                        "pt-BR": "Sujeito às mais altas restrições regulatórias, você precisa passar pela auditoria de verificação antes do depósito"
                    },
                    "withdrawalTo": {
                        "zh": "提现到",
                        "en": "Withdrawal to",
                        "vi": "Rút tiền",
                        "zh-Hant": "提現到",
                        "id": "Tarik ke ",
                        "es": "Reembolsar a",
                        "pt-BR": "Sacar em"
                    },
                    "tip43": {
                        "zh": "请填写您的真实CSE钱包账号",
                        "en": "Please fill out your true CSE wallet account",
                        "vi": "Vui lòng điền vào tài khoản ví điện tử CSE thực của bạn",
                        "zh-Hant": "請填寫您的真實CSE錢包帳號",
                        "id": "Silahkan masukkan Akun CSE anda ",
                        "es": "Por favor, rellene su verdadera cuenta de cartera CSE",
                        "pt-BR": "Por favor, preencha sua conta verdadeira carteira CSE"
                    },
                    "tip44": {
                        "zh": "请填写您的真实PayPal账号",
                        "en": "Please fill out your real PayPal account",
                        "vi": "Vui lòng điền vào tài khoản PayPal thực của bạn",
                        "zh-Hant": "請填寫您的真實PayPal帳號",
                        "id": " Silahkan masukkan rekening PayPal anda ",
                        "es": "Por favor, rellene su verdadera cuenta de PayPal",
                        "pt-BR": "Por favor, preencha sua conta PayPal real"
                    },
                    "tip45": {
                        "zh": "无法进行出金操作",
                        "en": "Cannot withdrawal",
                        "vi": "Không thể rút tiền",
                        "zh-Hant": "無法進行出金操作",
                        "id": "Tidak bisa menarik dana",
                        "es": "No puede reembolsar",
                        "pt-BR": "Não é possível sacar"
                    },
                    "goUncopy": {
                        "zh": "前往取消复制",
                        "en": "Go to unfollow",
                        "vi": "Chuyển đến không sao chép",
                        "zh-Hant": "前往取消復制",
                        "id": "Pindah ke Berhenti Mengikuti",
                        "es": "Ir a dejar de seguir",
                        "pt-BR": "Ir para deixar de seguir"
                    },
                    "goDeposit": {
                        "zh": "前往充值",
                        "en": "Go to deposit",
                        "vi": "Chuyển qua gửi tiền",
                        "zh-Hant": "前往充值",
                        "id": "Pindah ke Pengisian Dana",
                        "es": "Ir a depositar",
                        "pt-BR": "Vai depositar"
                    },
                    "tip46": {
                        "zh": "申请已提交，我们会在两个工作日内处理完毕",
                        "en": "The application has been submitted and will be processed within two working days",
                        "vi": "Đơn đăng ký đã được gửi và sẽ được xử lý trong vòng hai ngày làm việc",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢",
                        "id": " Permohonan telah terkirim dan akan diproses dalam kurun waktu 2 hari kerja ",
                        "es": "La solicitud ha sido enviada y será procesada en una plazo de dos días hábiles.",
                        "pt-BR": "O pedido foi submetido e será processado dentro de dois dias úteis"
                    },
                    "tip47": {
                        "zh": "到账时间约为10分钟，请耐心等待。",
                        "en": "The arrival time is about 10 minutes, please wait patiently.",
                        "vi": "Thời gian đến là khoảng 10 phút, hãy kiên nhẫn chờ đợi.",
                        "zh-Hant": "到帳時間約為10分鐘，請耐心等待。",
                        "id": " Dana akan masuk dalam 10 menit, mohon menunggu.",
                        "es": "El tiempo de llegada es de unos 10 minutos, por favor espere pacientemente.",
                        "pt-BR": "O tempo de chegada é de cerca de 10 minutos, por favor aguarde pacientemente."
                    },
                    "continueWithdraw": {
                        "zh": "继续提现",
                        "en": "Continue to withdraw",
                        "vi": "Tiếp tục rút tiền",
                        "zh-Hant": "繼續提現",
                        "id": "Lanjut ke Penarikan",
                        "es": "Continuar a reembolsar",
                        "pt-BR": "Continue a retirar"
                    },
                    "tip48": {
                        "zh": "如有疑问，请联系您的客户经理或联系客服",
                        "en": "If you have any questions, please contact your account manager or customer service",
                        "vi": "Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với tài khoản quản lý hoặc dịch vụ chăm sóc khách hàng",
                        "zh-Hant": "如有疑問，請聯系您的客戶經理或聯系客服",
                        "id": "Apabila anda memiliki pertanyaan, silahkan hubungi akun manajer anda atau hubungi layanan pelanggan kami ",
                        "es": "Si tiene alguna pregunta, por favor, contacte con un Gestor de Cuenta o con el servicio de Atención al Cliente.",
                        "pt-BR": "Se você tiver alguma dúvida, entre em contato com o gerente da sua conta ou com o atendimento ao cliente"
                    },
                    "tip49": {
                        "zh": "请输入出金金额",
                        "en": "Please enter withdrawal amount",
                        "vi": "Vui lòng nhập số tiền rút",
                        "zh-Hant": "請輸入出金金額",
                        "id": "Silahkan masukkan jumlah yang ingin ditarik",
                        "es": "Por favor ingrese importe reembolso",
                        "pt-BR": "Por favor insira o valor de retirada"
                    },
                    "tip50": {
                        "zh": "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        "en": "Entered amount should be Integer or decimal and greater than zero (No more than two digits after the decimal point)",
                        "vi": "Số tiền đã nhập phải là Số nguyên hoặc thập phân và lớn hơn 0 (Không quá hai chữ số sau dấu thập phân)",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）",
                        "id": " Jumlah yang dimasukkan harus bulat dan lebih dari 0 (tidak melebihi 2 angka dibelakang koma) ",
                        "es": "La cantidad ingresada debe ser un número entero o decimal y mayor que cero (no más de dos dígitos tras punto decimal)",
                        "pt-BR": "O valor inserido deve ser Inteiro ou decimal e maior que zero (Não mais do que dois dígitos após o ponto decimal)"
                    },
                    "tip51": {
                        "zh": "出金金额最多为",
                        "en": "Maximum withdrawal amount",
                        "vi": "Số tiền rút tối đa",
                        "zh-Hant": "出金金額最多為",
                        "id": "Jumlah maksimal yang dapat ditarik",
                        "es": "Importe máximo reembolsos",
                        "pt-BR": "Quantidade máxima de retirada"
                    },
                    "tip52": {
                        "zh": "出金金额最少为",
                        "en": "Minimum withdrawal amount",
                        "vi": "Số tiền rút tối thiểu",
                        "zh-Hant": "出金金額最少為",
                        "id": "Jumlah minimal yang dapat ditarik",
                        "es": "Importe mínimo reembolso",
                        "pt-BR": "Quantidade mínima de retirada"
                    },
                    "rate1d": {
                        "zh": "今日汇率：1 美元 =",
                        "en": "Today's exchange rate: $1 =",
                        "vi": "Tỉ lệ chuyển đổi ngày hôm nay: 1 đôla =",
                        "zh-Hant": "今日匯率：1 美元 =",
                        "id": "Nilai tukar hari ini : 1$ =",
                        "es": "Tipo de cambio de hoy: $1 =",
                        "pt-BR": "Taxa de câmbio de hoje: $1 ="
                    },
                    "r1d": {
                        "zh": "1 美元 =",
                        "en": "$1 =",
                        "vi": "1 đô la =",
                        "zh-Hant": "1 美元 =",
                        "id": "1$ =",
                        "es": "$1 =",
                        "pt-BR": "$1 ="
                    },
                    "withdrawing": {
                        "zh": "提现中",
                        "en": "Withdrawing",
                        "vi": "Đang rút tiền",
                        "zh-Hant": "提現中",
                        "id": "Penarikan",
                        "es": "Reembolsando",
                        "pt-BR": "Retirada"
                    },
                    "selectCurrency": {
                        "zh": "选择币种",
                        "en": "Select currency",
                        "vi": "Chọn tiền tệ",
                        "zh-Hant": "選擇蔽種",
                        "id": "Pilih Mata Uang",
                        "es": "Seleccione divisa",
                        "pt-BR": "Escolha a moeda"
                    },
                    "tip53": {
                        "zh": "通过实名认证后才可以进行资金提现。",
                        "en": "You can withdrawal only if you passed the verification.",
                        "vi": "Bạn có thể rút tiền chỉ khi bạn vượt qua xác nhận.",
                        "zh-Hant": "通過實名認證後才可以進行資金提現。",
                        "id": "Anda hanya dapat melakukan penarikan apabila akun anda sudah diverifikasi",
                        "es": "Puede retirarse sólo si pasó la verificación.",
                        "pt-BR": "Você pode retirar apenas se você passou a verificação."
                    },
                    "tip54": {
                        "zh": "充值后交易手数未满足活动规则要求，体验资金和充值前的盈利不可提取。",
                        "en": "The volume after deposit not meet the requirements of the activity rules, so experience money and profit before the recharge cannot be extracted.",
                        "vi": "Khối lượng sau khi tiền gửi không đáp ứng các yêu cầu của quy tắc hoạt động, do đó, số tiền trải nghiệm và lợi nhuận trước khi nạp tiền không thể được trích xuất.",
                        "zh-Hant": "充值後交易手數未滿足活動規則要求，體驗資金和充值前的盈利不可提取。",
                        "id": " Dana tidak dapat digunakan karena volume transaksi belum memenuhi persyaratan. ",
                        "es": "El volumen después del depósito no cumple con los requisitos de las reglas de actividad, por lo que, ni el experience money ni las ganancias pueden ser extraidas sin antes depositar.",
                        "pt-BR": "O volume após o depósito não atende aos requisitos das regras de atividade, portanto experimente dinheiro e lucros antes que a recarga não possa ser extraída."
                    },
                    "tip55": {
                        "zh": "存在复制关系的，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        "en": "If there is a follow relationship, the system will automatically deduct the copy amount when withdrawing. If you want to withdraw all the copies, please cancel the copy relationship manually first.",
                        "vi": "Nếu có mối quan hệ tiếp theo, hệ thống sẽ tự động khấu trừ số tiền sao chép khi rút tiền. Nếu bạn muốn rút tất cả các sao chép, trước tiên hãy hủy bỏ mối quan hệ sao chép.",
                        "zh-Hant": "存在復制關系的，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。",
                        "id": " Jika anda sedang mengikuti Master, sistem akan mengurangi saldo yang ada di akun copy ketika anda melakukan penarikan. Karenanya, apabila anda ingin menarik semua dana, pastikan anda telah berhenti mengikuti semua Master terlebih dahulu.",
                        "es": "Si hay una relación de seguimiento, el sistema deducirá automáticamente el importe copy al reembolsar. Si desea retirar todas las copias, primero cancele la relación de copia manualmente.",
                        "pt-BR": "Se houver um relacionamento a seguir, o sistema deduzirá automaticamente o valor da cópia ao sacar. Se você quiser retirar todas as cópias, cancele o relacionamento de cópia manualmente primeiro."
                    },
                    "voucher": {
                        "zh": "凭证记录",
                        "en": "Voucher",
                        "vi": "Chứng từ",
                        "zh-Hant": "憑證記錄",
                        "id": "Bukti Setor",
                        "es": "Cupón",
                        "pt-BR": "Voucher"
                    },
                    "tip56": {
                        "zh": "您有未上传的充值凭证，需上传历史充值凭证后才可继续使用网银支付功能。",
                        "en": "You have un-submit deposit voucher, you need to upload the history voucher before continue online payment.",
                        "vi": "Bạn đã hủy gửi chứng từ tiền gửi, bạn cần tải lên chứng từ lịch sử trước khi tiếp tục thanh toán trực tuyến.",
                        "zh-Hant": "您有未上傳的充值憑證，需上傳歷史充值憑證後才可繼續使用網銀支付功能。",
                        "id": " Anda wajib mengunggah bukti setor anda sebelum melakukan transaksi. ",
                        "es": "Tiene un comprobante de depósito sin enviar, debe cargar el historial comprobantes antes de continuar con el pago online.",
                        "pt-BR": "Você não enviou o comprovante de depósito, precisa fazer o upload do comprovante de histórico antes de continuar com o pagamento on-line."
                    },
                    "chooseOtherPayment": {
                        "zh": "选择其他支付方式",
                        "en": "Choose other payment methods",
                        "vi": "Chọn phương thức thanh toán khác",
                        "zh-Hant": "選擇其他支付方式",
                        "id": "Pilih metode pembayaran lainnya",
                        "es": "Seleccione otros medios de pago",
                        "pt-BR": "Escolher outros métodos de pagamento"
                    },
                    "fillPaymentCardInformation": {
                        "zh": "填写支付银行卡信息",
                        "en": "Fill in the payment card information",
                        "vi": "Điền vào thông tin thẻ thanh toán",
                        "zh-Hant": "填寫支付銀行卡信息",
                        "id": "Masukkan informasi rekening pembayaran anda",
                        "es": "Complete la información tarjeta de pago",
                        "pt-BR": "Preencher as informações"
                    },
                    "tip57": {
                        "zh": "当前支付方式最低充值金额为",
                        "en": "The minimum deposit amount of current payment method is",
                        "vi": "Số tiền gửi tối thiểu của phương thức thanh toán hiện tại là",
                        "zh-Hant": "當前支付方式最低充值金額為",
                        "id": " Minimum pengisian dana untuk metode ini adalah ",
                        "es": "El importe mínimo depósitos con medios de pago actuales es",
                        "pt-BR": "O valor do depósito mínimo do método de pagamento atual é"
                    },
                    "tip58": {
                        "zh": "当前支付方式最高充值金额为",
                        "en": "The maximum deposit amount of current payment method is",
                        "vi": "Số tiền gửi cao nhất của phương thức thanh toán hiện tại là",
                        "zh-Hant": "當前支付方式最高充值金額為",
                        "id": "Maksimum pengisian dana menggunakan metode ini adalah",
                        "es": "El importe máximo depósitos con medio de pago actual es",
                        "pt-BR": "O valor máximo de depósito do método de pagamento atual é"
                    },
                    "isThereAn": {
                        "zh": "是否有",
                        "en": "Is there an",
                        "vi": "Đây có phải là",
                        "zh-Hant": "是否有",
                        "id": "Apakah ada",
                        "es": "Hay un",
                        "pt-BR": "Existe um"
                    },
                    "uploadTeleTranVoucher": {
                        "zh": "请上传电汇凭证",
                        "en": "Upload telegraphic transfer voucher",
                        "vi": "Tải lên phiếu chuyển tiền điện báo",
                        "zh-Hant": "請上傳電匯憑證",
                        "id": " Unggah bukti setor ",
                        "es": "Cargar cupón de transferencia telegráfica",
                        "pt-BR": "Carregar comprovante de transferência telegráfica"
                    },
                    "depositPage": {
                        "zh": "入金页面",
                        "en": "Deposit page",
                        "vi": "Trang gửi tiền",
                        "zh-Hant": "入金頁面",
                        "id": "Halaman pengisian dana",
                        "es": "Página depósitos",
                        "pt-BR": "Página de depósito"
                    },
                    "enterBankCardNum": {
                        "zh": "请输入银行卡号",
                        "en": "Enter bank card number",
                        "vi": "Nhập vào số tài khoản ngân hàng",
                        "zh-Hant": "請輸入銀行卡號",
                        "id": "Masukkan rekening bank",
                        "es": "Enter número tarjeta banco",
                        "pt-BR": "Inserir número do cartão bancário"
                    },
                    "tip59_1": {
                        "zh": "折合",
                        "en": "Equivalent ",
                        "vi": "Tương đương ",
                        "zh-Hant": "折合",
                        "id": "Setara ",
                        "es": "Equivalente ",
                        "pt-BR": "Equivalente"
                    },
                    "tip59_2": {
                        "zh": "约：",
                        "en": " about: ",
                        "vi": " khoảng: ",
                        "zh-Hant": "約：",
                        "id": " Tentang: ",
                        "es": " sobre: ",
                        "pt-BR": "  sobre"
                    },
                    "tip60": {
                        "zh": "充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        "en": "Please upload deposit voucher within two weeks, otherwise, trading operations will not be possible.",
                        "vi": "Vui lòng tải lên chứng từ tiền gửi trong vòng hai tuần, nếu không, các hoạt động giao dịch sẽ không thể thực hiện được.",
                        "zh-Hant": "充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。",
                        "id": " Mohon unggah bukti setor paling lambat 2 minggu sejak pengisian dana, jika tidak maka nasabah tidak dapat melakukan transaksi apapun. ",
                        "es": "Por favor, cargue el comprobante de depósito dentro de un plazo de dos semanas; de lo contrario, no podrá hacer operaciones de trading.",
                        "pt-BR": "Por favor, faça o upload do comprovante de depósito dentro de duas semanas, caso contrário, as operações de negociação não serão possíveis."
                    },
                    "tip61": {
                        "zh": "您有入金凭证已超过一周未上传，请及时上传，否则将无法进行交易操作。",
                        "en": "You have not uploaded your voucher for more than a week, please upload it in time, otherwise you will not be able to trade.",
                        "vi": "Bạn chưa tải lên phiếu thưởng của mình trong hơn một tuần, vui lòng tải lên trong thời gian, nếu không bạn sẽ không thể giao dịch được.",
                        "zh-Hant": "您有入金憑證已超過壹周未上傳，請及時上傳，否則將無法進行交易操作。",
                        "id": " Anda belum mengunggah bukti setor selama lebih dari 1 minggu, mohon segera unggah bukti setor anda jika tidak, nasabah tidak lagi dapat melakukan transaksi apapun ",
                        "es": "Lleva más de una semana sin cargar su cupón; por favor, súbalo a tiempo, de lo contrario, no podrá hacer trading.",
                        "pt-BR": "Você não enviou o seu voucher por mais de uma semana, faça o upload no prazo, caso contrário você não poderá negociar."
                    },
                    "tip62_1": {
                        "zh": "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，",
                        "en": "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please fill in the wire transfer application form. ",
                        "vi": "Xin lưu ý rằng chúng tôi không chấp nhận thanh toán bằng tiền mặt trực tiếp vào tài khoản ngân hàng của chúng tôi. Để nhận được thanh toán của bạn kịp thời và chính xác, vui lòng điền vào biểu mẫu đăng ký chuyển khoản ngân hàng.",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行賬戶的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，",
                        "id": "Perlu dicatata bahwa kami tidak menerima pengisian dana secara tunai. Untuk memastikan bahwa pengisian dana anda berjalan dengan lancar, mohon isi formulir dibawah ini ",
                        "es": "Por favor, tenga presente que no aceptamos depósitos en efectivo directamente en nuestra cuenta de banco. Para recibir su pago de manera puntual y precisa, por favor complete el formulario de solicitud de transfer.",
                        "pt-BR": "Por favor, note que não aceitamos pagamentos em dinheiro diretamente em nossa conta bancária. Para receber seu pagamento em tempo e precisão, preencha o formulário de solicitação de transferência eletrônica."
                    },
                    "tip62_2": {
                        "zh": "请您务必在汇款附言一栏里填写您的交易账号。",
                        "en": " Please be sure to fill out your transaction account in the remittance slip.",
                        "vi": " Vui lòng đảm bảo điền vào tài khoản giao dịch của bạn trong phiếu chuyển tiền.",
                        "zh-Hant": "請您務必在匯款附言壹欄裏填寫您的交易帳號。",
                        "id": " Pastikan anda menuliskan nomor akun transaksi anda di bukti setoran.",
                        "es": " Asegúrese de rellenar su cuenta transacciones en el certificado de envío transfer.",
                        "pt-BR": "Por favor, não se esqueça de preencher sua conta de transação no recibo de remessa."
                    },
                    "tip62_3": {
                        "zh": "同时请提供您的电话号码，以便我们与您取得联系。",
                        "en": " Please also provide your phone number so that we can get in touch with you.",
                        "vi": " Vui lòng cung cấp số điện thoại của bạn để chúng tôi liên lạc với bạn.",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。",
                        "id": "Mohon isi nomor telepon yang dapat dihubungi agar kami dapat menghubungi anda apabila terjadi kesalahan",
                        "es": " Por favor, proporcione su número de teléfono para que podamos contactarle.",
                        "pt-BR": "Por favor, forneça seu número de telefone para que possamos entrar em contato com você."
                    },
                    "tip63_1": {
                        "zh": "出金",
                        "en": "The ",
                        "vi": "Cái ",
                        "zh-Hant": "出金",
                        "id": "Itu ",
                        "es": "La ",
                        "pt-BR": "O "
                    },
                    "tip63_2": {
                        "zh": "申请已提交，我们会在两个工作日内处理完毕",
                        "en": " withdrawal application has been submitted, and we will finish the processing within two working days.",
                        "vi": " đơn đăng ký rút tiền đã được gửi và chúng tôi sẽ hoàn tất việc xử lý trong vòng hai ngày làm việc.",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢",
                        "id": " Permohonan penarikan telah dikirim, kami akan menyelesaikan proses penarikan dalam waktu 2 hari kerja. ",
                        "es": " solicitud de reembolsos han sido enviadas, y finalizaremos el procesamiento en una plazo de dos días laborables.",
                        "pt-BR": " pedido de retirada foi submetido, e vamos terminar o processamento dentro de dois dias úteis."
                    },
                    "tip64_1": {
                        "zh": "出金金额最多为 ",
                        "en": "The maximum deposit amount is USD ",
                        "vi": "Số tiền gửi cao nhất là USD ",
                        "zh-Hant": "出金金額最多為 ",
                        "id": "Jumlah maksimum pengisian dana adalah $ ",
                        "es": "El importe máximo de depósitos es de USD ",
                        "pt-BR": "O valor máximo do depósito é US$ "
                    },
                    "tip64_2": {
                        "zh": " 美金",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": " 美金",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " "
                    },
                    "tip65_1": {
                        "zh": "出金金额最少为 ",
                        "en": "The minimum withdraw amount is USD ",
                        "vi": "Số tiền rút tối thiểu là USD ",
                        "zh-Hant": "出金金額最少為 ",
                        "id": "Jumlah minimum penarikan adalah $ ",
                        "es": "El importe mínimo Reembolsos es de USD ",
                        "pt-BR": "O valor mínimo de saque é US$ "
                    },
                    "tip65_2": {
                        "zh": " 美金",
                        "en": " ",
                        "vi": " ",
                        "zh-Hant": " 美金",
                        "id": " ",
                        "es": " ",
                        "pt-BR": " "
                    },
                    "depositStipulation": {
                        "zh": "入金规定",
                        "en": "Deposit stipulation",
                        "vi": "Quy định gửi tiền",
                        "zh-Hant": "入金規定",
                        "id": "Aturan Pengisian Dana",
                        "es": "Estipulaciones depósitos",
                        "pt-BR": "Estipulação de depósito"
                    },
                    "clientAccountM": {
                        "zh": "客户平台账号为：",
                        "en": "Account: ",
                        "vi": "tài khoản giao dịch của khách hàng là: ",
                        "zh-Hant": "客戶平臺賬號為：",
                        "id": "Platform Akun pelanggan adalah: ",
                        "es": "Cuenta plataforma cliente es: ",
                        "pt-BR": "Conta:"
                    },
                    "copyAccountPay": {
                        "zh": "复制此账号并支付",
                        "en": "Copy this account and pay",
                        "vi": "sao chép tài khoản và thanh toán",
                        "zh-Hant": "復制此賬號並支付",
                        "id": "Ikuti akun ini dan Bayar",
                        "es": "Copie esta cuenta y pague",
                        "pt-BR": "Copie esta conta e pague"
                    },
                    "isHasAvodaAccount": {
                        "zh": "是否拥有AVODA Pay账号",
                        "en": "Do you have an AVODA Pay account",
                        "vi": "Bạn có tài khoản AVODA Pay không?",
                        "zh-Hant": "是否擁有AVODA Pay賬號",
                        "id": "Apakah anda memiliki rekening AVODA PAY",
                        "es": "Do you have an AVODA Pay account",
                        "pt-BR": "Você tem uma conta AVODA Pay?"
                    },
                    "hasAvodaAccount": {
                        "zh": "是 — 直接填写基本信息进行充值",
                        "en": "Yes - Fill in the basic information directly to deposit",
                        "vi": "Có - Điền thông tin cơ bản để nạp tiền trực tiếp",
                        "zh-Hant": "是 — 直接填寫基本信息進行充值",
                        "id": "Ya - Masukkan informasi deposit",
                        "es": "Yes - Fill in the basic information directly to deposit",
                        "pt-BR": "Sim - Preencha as informações básicas diretamente para depositar"
                    },
                    "noAvodaAccount": {
                        "zh": "否 — 跳转AVODA Pay平台注册并充值",
                        "en": "No - Jump to AVODA Pay platform to register and deposit",
                        "vi": "Không - Đi đến nền tảng AVODA Pay để đăng kí và nạp tiền",
                        "zh-Hant": "否 — 跳轉AVODA Pay平臺註冊並充值",
                        "id": "Tidak - Masuk ke platform AVODA PAY untuk daftar dan deposit",
                        "es": "No - Jump to AVODA Pay platform to register and deposit",
                        "pt-BR": "Não - Salta para a plataforma AVODA Pay para registar e depositar"
                    }
                },
                "master": {
                    "precautions": {
                        "zh": "注意事项",
                        "en": "Precautions",
                        "vi": "Sự đề phòng",
                        "zh-Hant": "註意事項",
                        "id": "Tindakan pencegahan",
                        "es": "Precauciones: ",
                        "pt-BR": "Precauções"
                    },
                    "masterLevelInstructions": {
                        "zh": "高手等级说明",
                        "en": "Master Level Instructions",
                        "vi": "Hướng Dẫn Cấp Độ Của Bậc Thầy",
                        "zh-Hant": "高手等級說明",
                        "id": "Panduan Tingkat Master",
                        "es": "Instrucciones Nivel Master",
                        "pt-BR": "Instruções de nível mestre"
                    },
                    "tip1": {
                        "zh": "为了最大限度地规避交易风险，TigerWit根据高手等级限制可复制总额范围：",
                        "en": "In order to maximize the risk of dealing with the transaction, the TigerWit according master’s level limit to be followed Total range: ",
                        "vi": "Để tối đa hóa rủi ro giao dịch với giao dịch, TigerWit theo cấp độ của bậc thầy giới hạn theo phạm vi Tổng:",
                        "zh-Hant": "為了最大限度地規避交易風險，TigerWit根據高手等級限制可復制總額範圍：",
                        "id": " Untuk mengendalikan resiko, TigerWit akan membatasi tingkat serta dana yang dapat dikelola oleh master sesuai dengan kemampuannya:",
                        "es": "Para maximizar el riesgo de dealing con la transacción en relación con el importe actual del master y ajustar el uso del rango de apalancamiento: ",
                        "pt-BR": "Para maximizar o risco de lidar com a transação, o TigerWit de acordo com o limite de nível do mestre a ser seguido Faixa total:"
                    },
                    "tip2": {
                        "zh": "用户复制高手的复制资金不可超过高手当前账户级别的限额；",
                        "en": "The user’s copy of the funds shall not exceed the current account level limit",
                        "vi": "Sao chép tiền của người dùng không được vượt quá giới hạn cấp tài khoản hiện tại",
                        "zh-Hant": "用戶復制高手的復制資金不可超過高手當前賬戶級別的限額；",
                        "id": " Dana nasabah untuk mengikuti Master tidak boleh melebihi batas yang telah ditentukan untuk jenis akun ini ",
                        "es": "La copia de los fondos del usuario no debe exceder el límite de nivel de cuenta actual",
                        "pt-BR": "A cópia do usuário dos fundos não deve exceder o limite de nível da conta atual"
                    },
                    "tip3": {
                        "zh": "若当前累计复制资金量达到限额，系统将提醒高手进行账户升级，高手确认并更改账户级别后，用户方能继续复制；",
                        "en": "If the current cumulative amount of funds to meet the limit, the system will remind the master to upgrade the account, experts confirm and change the account level, the user can continue to copy",
                        "vi": "Nếu số tiền tích lũy hiện tại của các quỹ để đáp ứng các giới hạn, hệ thống sẽ nhắc nhở bậc thầy để nâng cấp tài khoản, các chuyên gia xác nhận và thay đổi cấp tài khoản, người dùng có thể tiếp tục sao chép",
                        "zh-Hant": "若當前累計復制資金量達到限額，系統將提醒高手進行賬戶升級，高手確認並更改賬戶級別後，用戶方能繼續復制；",
                        "id": " Apabila dana yang terkumpul sudah mencapai batas, sistem akan mengingatkan Master untuk memperbarui akunnya. Setelah melewati proses dan tingkat akun Master telah ditingkatkan, nasabah baru dapat mengikuti Master tersebut ",
                        "es": "Si la cantidad acumulada actual de fondos alcanza el límite, el sistema recordará al Master que haga un upgrade en la cuenta;  una vez confirmado y cambiado el nivel de la cuenta, el usuario puede seguir replicando",
                        "pt-BR": "Se o atual montante acumulado de fundos para atender o limite, o sistema irá lembrar o mestre para atualizar a conta, os especialistas confirmam e alterar o nível da conta, o usuário pode continuar a copiar"
                    },
                    "tip4": {
                        "zh": "高手只能使用账户级别内支持的杠杆进行交易，复制者跟随高手进行同杠杆开仓交易。",
                        "en": "The master can only use the account level to support the leverage of the transaction, the user to follow the master with the lever to open the transaction.",
                        "vi": "Bậc Thầy chỉ có thể sử dụng cấp độ tài khoản để hỗ trợ đòn bẩy của giao dịch, người dùng phải làm theo chủ với đòn bẩy để mở giao dịch.",
                        "zh-Hant": "高手只能使用賬戶級別內支持的杠桿進行交易，復制者跟隨高手進行同杠桿開倉交易。",
                        "id": " Master hanya dapat menggunakan daya ungkit yang telah disesuaikan dengan tingkat akun Master.Nasabah yang mengikuti Master juga akan disesuaikan daya ungkitnya setara dengan Master. ",
                        "es": "El master sólo puede usar el nivel de cuenta para soportar el apalancamiento de la transacción; el usuario para seguir al maestro con la palanca para abrir la transacción.",
                        "pt-BR": "O mestre só pode usar o nível de conta para suportar a alavancagem da transação, o usuário seguir o mestre com a alavanca para abrir a transação."
                    },
                    "masterLevel": {
                        "zh": "高手等级",
                        "en": "Master Level",
                        "vi": "Cấp độ bậc thầy",
                        "zh-Hant": "高手等級",
                        "id": "Tingkat Master",
                        "es": "Nivel Master",
                        "pt-BR": "Nivel do mestre"
                    },
                    "currentLevel": {
                        "zh": "当前类别",
                        "en": "Current Level",
                        "vi": "Cấp Độ Hiện Tại",
                        "zh-Hant": "當前類別",
                        "id": "Tingkat Saat ini",
                        "es": "Nivel Actual",
                        "pt-BR": "Nível atual"
                    },
                    "leverageRangeM": {
                        "zh": "杠杆使用范围：",
                        "en": "Leverage Range: ",
                        "vi": "Phạm Vi Đòn Bẩy: ",
                        "zh-Hant": "杠桿使用範圍：",
                        "id": "Daya ungkit",
                        "es": "Rango Apalancamiento: ",
                        "pt-BR": "Faixa de Alavancagem:"
                    },
                    "copyAmountLimitM": {
                        "zh": "复制金额限额：",
                        "en": "Copy Amount Limit: ",
                        "vi": "Số Tiền Sao Chép Giới Hạn: ",
                        "zh-Hant": "復制金額限額：",
                        "id": "Batasan Jumlah Copy",
                        "es": "Límite Importe Copy: ",
                        "pt-BR": "Copiar Limite de Quantia:"
                    },
                    "remainingCopyableAmountM": {
                        "zh": "剩余可复制金额：",
                        "en": "Remaining Copyable Amount: ",
                        "vi": "Duy Trì Số Tiền Sao Chép: ",
                        "zh-Hant": "剩余可復制金額：",
                        "id": "Sisa dana yang masih dimasukkan untuk Copy",
                        "es": "Importe Copiable Restante: ",
                        "pt-BR": "Valor restante copiável:"
                    },
                    "tip9": {
                        "zh": "成为TigerWit高手 获取更多收益",
                        "en": "Become a TigerWit’s master to get more income",
                        "vi": "Trở Thành Bậc Thầy của TigerWit để có thêm thu nhập",
                        "zh-Hant": "成為TigerWit高手 獲取更多收益",
                        "id": " Jadilah seorang Master di TigerWit dan dapatkan penghasilan tambahan ",
                        "es": "Conviértase en Master TigerWit y obtenga más ingresos",
                        "pt-BR": "Torne-se um mestre do TigerWit para obter mais renda"
                    },
                    "tip10": {
                        "zh": "榜单投资者被其他用户复制跟随，会获得复制者20%的盈利分成，",
                        "en": "The list of investors is copied by other users, will get 20% of the profits of the replicator,",
                        "vi": "Danh sách các nhà đầu tư được sao chép bởi những người dùng khác, sẽ nhận được 20% lợi nhuận của người sao chép,",
                        "zh-Hant": "榜單投資者被其他用戶復制跟隨，會獲得復制者20%的盈利分成，",
                        "id": " Daftar Master yang diikuti oleh nasabah, Master akan mendapatkan 20% dari total keuntungan yang dihasilkan oleh nasabah, ",
                        "es": "La lista de inversores es copiada por otros usuarios; obtendrá el 20% de las ganancias del replicador,",
                        "pt-BR": "A lista de investidores é copiada por outros usuários, terá 20% dos lucros do replicador,"
                    },
                    "tip11": {
                        "zh": "申请成为高手需达成以下条件",
                        "en": "Application to become a master to meet the following conditions",
                        "vi": "Đơn đăng kí để trở thành một bậc thầy để đáp ứng các điều kiện sau",
                        "zh-Hant": "申請成為高手需達成以下條件",
                        "id": " Untuk menjadi master, anda harus memenuhi kriteria sebagai berikut ",
                        "es": "Solicitud para convertirse en master debe cumplir las siguientes condiciones",
                        "pt-BR": "Para aplicar a Mestre, é necessario ter os seguintes requisitos"
                    },
                    "tip12": {
                        "zh": "开通TigerWit真实账户并完成实名认证",
                        "en": "Open the real account of the TigerWit and complete the verification",
                        "vi": "Mở tài khoản thực của TigerWit và hoàn thành xác minh",
                        "zh-Hant": "開通TigerWit真實賬戶並完成實名認證",
                        "id": " Buka akun Live di TigerWit dan selesaikan verifikasi",
                        "es": "Abra una cuenta real TigerWit y complete la verificación",
                        "pt-BR": "Abra a conta real do TigerWit e complete a verificação"
                    },
                    "tip13": {
                        "zh": "在TigerWit交易平台真实入金并连续自主交易20个以上工作日",
                        "en": "In the TigerWit trading platform deposit and continuous self-trading more than 20 working days",
                        "vi": "Trong nền tảng giao dịch TigerWit tiền gửi và tự giao dịch liên tục hơn 20 ngày làm việc",
                        "zh-Hant": "在TigerWit交易平臺真實入金並連續自主交易20個以上工作日",
                        "id": " Masukkan dana di platform trading TigerWit dan melakukan transaksi selama 20 hari kerja ",
                        "es": "Deposite en la plataforma de trading de TigerWit y haga trading directamente durante más de 20 días laborables.",
                        "pt-BR": "No depósito plataforma de negociação TigerWit e auto-negociação contínua mais de 20 dias úteis"
                    },
                    "tip14": {
                        "zh": "近30日收益率大于20%",
                        "en": "Nearly 30 days rate of return greater than 20%",
                        "vi": "Gần 30 ngày có tỷ lệ lợi nhuận lớn hơn 20%",
                        "zh-Hant": "近30日收益率大於20%",
                        "id": " Menghasilkan keuntungan lebih dari 20% dalam kurun waktu 30 hari",
                        "es": "Tasa retorno superior al 20% durante casi 30 días",
                        "pt-BR": "Taxa de retorno superior a 20%, nos quase 30 dias"
                    },
                    "tip15": {
                        "zh": "账户余额不得低于$500",
                        "en": "Account balance should not be less than $ 500",
                        "vi": "Số dư tài khoản không được nhỏ hơn 500 đô la",
                        "zh-Hant": "賬戶余額不得低於$500",
                        "id": " Menjaga Saldo akun agar tidak kurang dari 500$",
                        "es": "Saldo en cuenta no inferior a $ 500",
                        "pt-BR": "Saldo não deve ser menos que $ 500"
                    },
                    "tip16": {
                        "zh": "立即申请成为高手",
                        "en": "Apply Immediately",
                        "vi": "Đăng kí ngay lập lực",
                        "zh-Hant": "立即申請成為高手",
                        "id": "Daftar sekarang juga",
                        "es": "Solicitar Inmediatamente",
                        "pt-BR": "Aplicar imediatamente"
                    },
                    "tip17": {
                        "zh": "高手申请审核中，",
                        "en": "Is under review,",
                        "vi": "Đang được xem xét",
                        "zh-Hant": "高手申請審核中，",
                        "id": "Dalam proses peninjauan",
                        "es": "Está bajo revisión,",
                        "pt-BR": "Está sob revisão,"
                    },
                    "tip18": {
                        "zh": "请耐心等待",
                        "en": "Please wait patiently",
                        "vi": "Xin hãy kiên nhẫn chờ đợi",
                        "zh-Hant": "請耐心等待",
                        "id": "Mohon Menunggu",
                        "es": "Por favor, espere pacientemente",
                        "pt-BR": "Por favor, aguarde pacientemente"
                    },
                    "tip19": {
                        "zh": "高手申请由工作人员人工审核，我们会尽快完成审核并将结果通知您",
                        "en": "The master application is manually audited by the staff, and we will complete the review as soon as possible and inform the result",
                        "vi": "Đơn đăng kí bậc thầy được kiểm tra bởi nhân viên và chúng tôi sẽ hoàn thành việc xem xét càng sớm càng tốt và thông báo kết quả ",
                        "zh-Hant": "高手申請由工作人員人工審核，我們會盡快完成審核並將結果通知您",
                        "id": " Pengajuan aplikasi untuk menjadi Master akan diperiksa secara manual. Kami akan mengirimkan hasil peninjauan setelah proses pemeriksaan selesai dilakukan. ",
                        "es": "La solicitud para Master es auditada manualmente por el staff, y finalizaremos la revisión a la mayor brevedad y le informaremos del resultado",
                        "pt-BR": "O aplicativo mestre é manualmente auditado pela equipe, e nós completaremos a revisão o mais rápido possível e informaremos o resultado"
                    },
                    "tip20": {
                        "zh": "高手申请被拒绝",
                        "en": "The master application was rejected",
                        "vi": "Đơn đăng kí bậc thầy đã bị từ chối",
                        "zh-Hant": "高手申請被拒絕",
                        "id": " Permohonan untuk menjadi Master ditolak ",
                        "es": "Solicitud Master ha sido rechazada",
                        "pt-BR": "A aplicação para Mestre foi negada"
                    },
                    "tip21": {
                        "zh": "高手申请已通过审核",
                        "en": "The master application has been approved",
                        "vi": "Đơn đăng kí bậc thầy đã được phê duyệt",
                        "zh-Hant": "高手申請已通過審核",
                        "id": " Permohonan untuk menjadi Master disetujui ",
                        "es": "Solicitud Master ha sido aprobada",
                        "pt-BR": "A aplicação para Mestre foi aprovada"
                    },
                    "tip22": {
                        "zh": "恭喜您的高手申请已通过审核！",
                        "en": "Congratulations to your master application has been approved!",
                        "vi": "Xin chúc mừng đơn đăng kí bậc thầy của bạn đã được phê duyệt",
                        "zh-Hant": "恭喜您的高手申請已通過審核！",
                        "id": " Selamat, Permohonan untuk menjadi Master telah disetujui ",
                        "es": "¡Felicitaciones su Solicitud Master ha sido aprobada!",
                        "pt-BR": "Parabéns, a sua aplicação a mestre foi aprovada!"
                    },
                    "tip23": {
                        "zh": "您的交易账户已被推荐到高手榜，请重新登录后查看。",
                        "en": "Your trading account has been recommended to the master list. Please check back again.",
                        "vi": "Tài khoản giao dịch của bạn đã được đề xuất vào danh sách chính. Vui lòng kiểm tra lại.",
                        "zh-Hant": "您的交易賬戶已被推薦到高手榜，請重新登錄後查看。",
                        "id": " Akun transaksi anda direkomendasikan untuk menjadi Master. Silakan lihat lebih detail. ",
                        "es": "Su cuenta de trading ha sido recomendada en la lista maestra. Por favor, compruebe de nuevo.",
                        "pt-BR": "Sua conta de negociação foi recomendada para a lista principal. Por favor, volte novamente."
                    },
                    "tip24": {
                        "zh": "高手申请已成功提交",
                        "en": "The master application has been successfully submitted",
                        "vi": "Đơn đăng kí bậc thầy đã gửi thành công",
                        "zh-Hant": "高手申請已成功提交",
                        "id": "Pengajuan aplikasi berhasil dikirim",
                        "es": "Solicitud Master ha sido enviada con éxito.",
                        "pt-BR": "O aplicativo mestre foi submetido com sucesso"
                    },
                    "tip25": {
                        "zh": "我们会尽快进行审核，请耐心等待",
                        "en": "We will review as soon as possible, please be patient",
                        "vi": "Chúng tôi sẽ xem xét lại trong thời gian sớm nhất có thể, vui lòng kiên nhẫn",
                        "zh-Hant": "我們會盡快進行審核，請耐心等待",
                        "id": "Kami akan melakukan peninjauan, mohon menunggu",
                        "es": "Lo revisaremos lo antes posible, por favor sea paciente.",
                        "pt-BR": "Vamos rever o mais rapidamente possível, por favor seja paciente"
                    },
                    "tip26": {
                        "zh": "未达成高手申请条件",
                        "en": "Did not meet the requirements",
                        "vi": "Không đáp ứng các yêu cầu",
                        "zh-Hant": "未達成高手申請條件",
                        "id": "Tidak memenuhi kriteria",
                        "es": "No cumple los requisitos",
                        "pt-BR": "Não cumpriu os requisitos"
                    },
                    "tip27": {
                        "zh": "请继续努力",
                        "en": "Please keep working hard",
                        "vi": "Hãy tiếp tục cố gắng",
                        "zh-Hant": "請繼續努力",
                        "id": "Teruslah mencoba",
                        "es": "Por favor, siga intentándolo",
                        "pt-BR": "Por favor, continue trabalhando duro"
                    },
                    "masterLevels": {
                        "zh": "高手类别",
                        "en": "Master Level",
                        "vi": "Cấp độ bậc thầy",
                        "zh-Hant": "高手類別",
                        "id": "Tingkat Master",
                        "es": "Nivel Master",
                        "pt-BR": "Nivel do mestre"
                    },
                    "last30AaysYield": {
                        "zh": "近30天收益率",
                        "en": "Last 30 days yield",
                        "vi": "Lợi nhuận trong 30 ngày qua",
                        "zh-Hant": "近30天收益率",
                        "id": "Hasil selama 30 hari terakhir",
                        "es": "Retorno últimos 30 días",
                        "pt-BR": "Últimos 30 dias de rendimento"
                    },
                    "days30MaximumDrawdown": {
                        "zh": "近30天最大跌幅",
                        "en": "Last 30 days the maximum drawdown",
                        "vi": "maximum drawdown 30 ngày qua",
                        "zh-Hant": "近30天最大跌幅",
                        "id": " Maksimal Drawdown 30 hari terakhir",
                        "es": "Máximo drawdown últimos 30 días",
                        "pt-BR": "Máximo rebaixamento dos últimos 30 dias"
                    },
                    "lastTradingDay": {
                        "zh": "上一交易日",
                        "en": "Last day traded",
                        "vi": "Ngày cuối cùng để giao dịch",
                        "zh-Hant": "上壹交易日",
                        "id": "Terakhir transaksi",
                        "es": "Último día operado",
                        "pt-BR": "Último dia negociado"
                    },
                    "tip6": {
                        "zh": "为了最大限度地规避交易风险，TigerWit根据高手的当前跟随金额调整杠杆使用范围：",
                        "en": "In order to maximize the risk of dealing with the transaction, the tiger foreign exchange according to the current amount of the master to adjust the use of leverage range: ",
                        "vi": "để tối đa hóa rủi ro giao dịch với giao dịch, sàn giao dịch ngoại hối tiger theo số tiền hiện tại của bậc thầy để điều chỉnh việc sử dụng phạm vi đòn bẩy: ",
                        "zh-Hant": "為了最大限度地規避交易風險，TigerWit根據高手的當前跟隨金額調整杠桿使用範圍：",
                        "id": " Untuk mengendalikan resiko, TigerWit akan membatasi tingkat serta dana yang dapat dikelola oleh master sesuai dengan kemampuannya:",
                        "es": "Para maximizar el riesgo de dealing con la transacción en relación con el importe actual del master y ajustar el uso del rango de apalancamiento: ",
                        "pt-BR": "A fim de maximizar o risco de lidar com a transação, o câmbio de acordo com o valor atual do mestre para ajustar o uso da faixa de influência:"
                    },
                    "tip7": {
                        "zh": "当前跟随金额＞$20万，高手可使用100倍、50倍杠杆进行交易",
                        "en": "Current amount of follow > $200,000 , master can use 100, 50 times the lever to trade;",
                        "vi": "Số tiền sao chép hiện tại> 200.000 đô la, tổng thể có thể sử dụng đòn bẩy 100, 50 lần để giao dịch;",
                        "zh-Hant": "當前跟隨金額＞$20萬，高手可使用100倍、50倍杠桿進行交易",
                        "id": " Dana saat ini telah mencapai lebih dari 200.000$, Master hanya dapat menggunakan daya ungkit 50 atau 100 untuk dapat melakukan transaksi",
                        "es": "Importe actual siguiendo > $200,000 , master puede usar 100, 50 veces la palanca para operar;",
                        "pt-BR": "Quantidade atual de seguida > $ 200.000, mestre pode usar 100, 50 vezes a alavanca para o comércio;"
                    },
                    "tip8": {
                        "zh": "当前跟随金额≤$20万，高手可使用全部杠杆进行交易",
                        "en": " Current amount of follow ≤ $200,000 , master can use all the leverage to trade;",
                        "vi": "Số tiền hiện tại theo sau ≤ 200.000 đô la, bậc thầy có thể sử dụng tất cả đòn bẩy để giao dịch;",
                        "zh-Hant": "當前跟隨金額≤$20萬，高手可使用全部杠桿進行交易",
                        "id": " Dana saat ini ≤ 200,000$, master dapat menggunakan semua pilihan daya ungkit untuk melakukan transaksi; ",
                        "es": " Importe actual siguiendo ≤ $200,000 , master puede usar todo el apalancamiento para operar;",
                        "pt-BR": "Quantidade atual de seguida ≤ $ 200.000, mestre pode usar toda a alavancagem para o comércio;"
                    },
                    "masterSystem": {
                        "zh": "复制跟单系统",
                        "en": "’s fully-automated order-following system",
                        "vi": "Hệ thống theo thứ tự hoàn toàn tự động",
                        "zh-Hant": "復制跟單系統",
                        "id": "Sistem eksekusi transaksi secara otomatis ",
                        "es": "sistema totalmente automatizado de seguimiento de órdenes",
                        "pt-BR": "s totalmente automatizado sistema de seguimento de ordem"
                    },
                    "tip28": {
                        "zh": "直通全球资本市场",
                        "en": "Direct access to global capital markets",
                        "vi": "Truy cập trực tiếp vào thị trường vốn toàn cầu",
                        "zh-Hant": "直通全球資本市場",
                        "id": "Akses langsung ke pasar keuangan global ",
                        "es": "Acceso directo a los mercados globales de capitales",
                        "pt-BR": "Acesso direto aos mercados de capitais globais"
                    },
                    "tradeLikeMaster": {
                        "zh": "人人都是投资高手",
                        "en": "Everyone is the master of investment",
                        "vi": "Mọi người đều là bậc thầy về đầu tư",
                        "zh-Hant": "人人都是投資高手",
                        "id": " Semua orang ahli dalam berinvestasi",
                        "es": "Todo el mundo puede ser un master de las inversiones",
                        "pt-BR": "Todo mundo é o mestre do investimento"
                    },
                    "clickFollow": {
                        "zh": "一键复制",
                        "en": "Click to follow",
                        "vi": "Nhấp để sao chép",
                        "zh-Hant": "壹鍵復制",
                        "id": "Klik mengikuti",
                        "es": "Click para seguir",
                        "pt-BR": "Clique para seguir"
                    },
                    "enjoyProfits": {
                        "zh": "坐享其成",
                        "en": "Enjoy profits",
                        "vi": "Tận hưởng lợi nhuận",
                        "zh-Hant": "坐享其成",
                        "id": "Tận hưởng lợi nhuận",
                        "es": "Disfrute los beneficios",
                        "pt-BR": "Aproveite os lucros"
                    },
                    "highIncome": {
                        "zh": "收益率",
                        "en": "Profitability",
                        "vi": "Tỷ Suất Lợi Nhuận",
                        "zh-Hant": "收益率",
                        "id": "Profitabilitas",
                        "es": "Rentabilidad",
                        "pt-BR": "Rentabilidade"
                    },
                    "exact": {
                        "zh": "胜率",
                        "en": "Consistency",
                        "vi": "Tính nhất quán",
                        "zh-Hant": "勝率",
                        "id": "Konsistensi",
                        "es": "Consistencia",
                        "pt-BR": "Consistência"
                    },
                    "returnLast30D": {
                        "zh": "近30日收益率",
                        "en": "Return(last 30D)",
                        "vi": "Lời/lỗ(30 ngày gần nhất)",
                        "zh-Hant": "近30日收益率",
                        "id": "Keuntungan (30 hari terakhir)",
                        "es": "Retorno(últ. 30D)",
                        "pt-BR": "Retorno (últimos 30 dias)"
                    },
                    "accuracyLast30D": {
                        "zh": "近30日胜率",
                        "en": "Success rate",
                        "vi": "Tỷ lệ thành công",
                        "zh-Hant": "近30日勝率",
                        "id": "Tingkat keberhasilan",
                        "es": "Tasa éxito",
                        "pt-BR": "Taxa de sucesso"
                    },
                    "followers": {
                        "zh": "历史跟随者",
                        "en": "Followers",
                        "vi": "Người sao chép",
                        "zh-Hant": "歷史跟隨者",
                        "id": "Pengikut",
                        "es": "Seguidores",
                        "pt-BR": "Seguidores"
                    },
                    "performanceOf": {
                        "zh": "年表现",
                        "en": "Performance: ",
                        "vi": "Hiệu suất: ",
                        "zh-Hant": "年表現",
                        "id": "Kinerja: ",
                        "es": "Rendimiento: ",
                        "pt-BR": "Performance:"
                    },
                    "tip29": {
                        "zh": "数据将于每天北京时间00：00进行更新",
                        "en": "The data will be updated daily at 00:00GMT",
                        "vi": "Dữ liệu sẽ được nâng cấp hằng ngày vào lúc 12 giờ GMT",
                        "zh-Hant": "數據將於每天北京時間00：00進行更新",
                        "id": "data akan diperbarui setiap hari pada pukul 00:00 GMT",
                        "es": "Data actualizado diariamente a las 00:00GMT",
                        "pt-BR": "Os dados serão atualizados à 00:00GMT"
                    },
                    "tip30": {
                        "zh": "过往表现并不能完全代表未来交易的成功率，您需要做出理智的判断",
                        "en": "Past performance is no guarantee of future performance.",
                        "vi": "Hiệu suất trước đây không đảm bảo hiệu suất trong tương lai.",
                        "zh-Hant": "過往表現並不能完全代表未來交易的成功率，您需要做出理智的判斷",
                        "id": "Hasil kinerja di masa lampau tidak menjamin hasil di masa depan.",
                        "es": "Rendimientos pasados no garantizan futuros retornos.",
                        "pt-BR": "Performance passada não é garantia de performance futura."
                    },
                    "totalClosedOrders": {
                        "zh": "总平仓交易数",
                        "en": "Total Closed Orders",
                        "vi": "Đóng tất cả các lệnh",
                        "zh-Hant": "總平倉交易數",
                        "id": "Total posisi tertutup",
                        "es": "Total Órdenes Cerradas",
                        "pt-BR": "Total de pedidos fechados"
                    },
                    "buy": {
                        "zh": "多单",
                        "en": "BUY",
                        "vi": "MUA",
                        "zh-Hant": "多單",
                        "id": "BELI",
                        "es": "COMPRAR",
                        "pt-BR": "Comprar"
                    },
                    "buyD": {
                        "zh": "多单，",
                        "en": "BUY,",
                        "vi": "MUA,",
                        "zh-Hant": "多單，",
                        "id": "BELI,",
                        "es": "COMPRAR",
                        "pt-BR": "COMPRAR,"
                    },
                    "sell": {
                        "zh": "空单",
                        "en": "SELL",
                        "vi": "BÁN",
                        "zh-Hant": "空單",
                        "id": "JUAL",
                        "es": "VENDER",
                        "pt-BR": "Vender"
                    },
                    "sellD": {
                        "zh": "空单，",
                        "en": "SELL,",
                        "vi": "BÁN,",
                        "zh-Hant": "空單，",
                        "id": "JUAL,",
                        "es": "VENDER",
                        "pt-BR": "VENDER,"
                    },
                    "pleaseChooseAccount": {
                        "zh": "请选择账号：",
                        "en": "Please choose account: ",
                        "vi": "Vui lòng chọn tài khoản: ",
                        "zh-Hant": "請選擇帳號：",
                        "id": "Silahkan pilih akun",
                        "es": "Por favor, seleccione cuenta: ",
                        "pt-BR": "Por favor, escolha a conta:"
                    },
                    "masterRequirements": {
                        "zh": "未达成以下高手申请条件，请继续努力",
                        "en": "Did not meet the requirements, please keep working hard.",
                        "vi": "Không đáp ứng các yêu cầu, hãy tiếp tục làm việc chăm chỉ.",
                        "zh-Hant": "未達成以下高手申請條件，請繼續努力",
                        "id": " Tidak memenuhi kriteria. Teruslah mencoba ",
                        "es": "No cumple los requisitos, por favor, intentándolo.",
                        "pt-BR": "Não atendeu aos requisitos, por favor, continue trabalhando duro."
                    },
                    "masterRequirements1": {
                        "zh": "图片大小超过 2MB 请重新选择",
                        "en": "Image size over 2MB please re-select",
                        "vi": "Dung lượng hình ảnh hơn 20MB vui lòng chọn lại",
                        "zh-Hant": "圖片大小超過 2MB 請重新選擇",
                        "id": "Ukuran gambar melebihi 2MB, mohon unggah kembali",
                        "es": "Tamaño de imagen superior a 2MB; por favor, vuelva a seleccionar",
                        "pt-BR": "Tamanho da imagem superior a 2 MB, selecione novamente"
                    },
                    "masterRequirements2": {
                        "zh": "昵称使用规范：昵称应体现个人属性，避免选用官方化、敏感时政词汇、不雅词汇、广告名称、手机号码、社交联系方式等；",
                        "en": "Username specification: username should reflect personal attributes and avoid official, sensitive political vocabulary, indecent vocabulary, advertising name, mobile phone number, social contact information, etc.",
                        "vi": "Đặc tả tên người dùng: tên người dùng phải phản ánh các thuộc tính cá nhân và tránh từ vựng chính trị, nhạy cảm, từ vựng không đứng đắn, tên quảng cáo, số điện thoại di động, thông tin liên hệ xã hội, v.v.",
                        "zh-Hant": "昵稱使用規範：昵稱應體現個人屬性，避免選用官方化、敏感時政詞匯、不雅詞匯、廣告名稱、手機號碼、社交聯系方式等；",
                        "id": " Aturan pemilihan nama : Nama yang digunakan harus mencerminkan sifat atau karakter pribadi, hindari nama yang sensitif, tidak senonoh, nama berupa nomor telepon seluler,dan lain sebagainya . ",
                        "es": "Especificaciones nombre usuario: el nombre de usuario debe reflejar los atributos personales y evitar vocabulario oficial, político sensible, vocabulario indecente, marcas publicitarias, número de teléfono móvil, información contacto social media, etc.",
                        "pt-BR": "Especificação do nome de usuário: o nome de usuário deve refletir os atributos pessoais e evitar o vocabulário político oficial e sensível, o vocabulário indecente, o nome da publicidade, o número do celular, as informações de contato social, etc."
                    },
                    "masterRequirements3": {
                        "zh": "头像使用规范：头像禁止使用选用政治敏感图片、不雅图片、广告图片、品牌LOGO、广告物料等；",
                        "en": "Profile photo specification: it is prohibited to use politically sensitive images, indecent images, advertising images, brand logos, advertising materials, etc.",
                        "vi": "Đặc tả ảnh tiểu sử: cấm sử dụng hình ảnh nhạy cảm về mặt chính trị, hình ảnh không đứng đắn, hình ảnh quảng cáo, biểu tượng thương hiệu, tài liệu quảng cáo, v.v ...",
                        "zh-Hant": "頭像使用規範：頭像禁止使用選用政治敏感圖片、不雅圖片、廣告圖片、品牌LOGO、廣告物料等；",
                        "id": " Aturan penggunaan foto: Dilarang menggunakan foto yang sensitif, porno, logo/brand, konten iklan, dan lain sebagainya ... ",
                        "es": "Especificación foto perfil: está prohibido usar imágenes políticamente sensibles, imágenes indecentes, imágenes publicitarias, logotipos de marcas, materiales publicitarios, etc.",
                        "pt-BR": "Especificação de foto de perfil: é proibido usar imagens politicamente sensíveis, imagens indecentes, imagens publicitárias, logotipos de marcas, materiais publicitários, etc."
                    },
                    "masterRequirements4": {
                        "zh": "成为高手后昵称及头像将不能再次修改，请谨慎填写；",
                        "en": "The profile photo and username can’t be changed after became a master, please fill in carefully.",
                        "vi": "Không thể thay đổi ảnh tiểu sử và tên người dùng sau khi trở thành chủ nhân, vui lòng điền kỹ.",
                        "zh-Hant": "成為高手後昵稱及頭像將不能再次修改，請謹慎填寫；",
                        "id": " Nama dan foto profil tidak dapat diubah setelah menjadi seorang master, pertimbangkan dengan matang. ",
                        "es": "La foto de perfil y el nombre de usuario no se pueden cambiar siendo Master; tómese su tiempo.",
                        "pt-BR": "A foto do perfil e o nome de usuário não podem ser alterados depois de se tornar um mestre. Por favor, preencha com atenção."
                    },
                    "masterRequirements5": {
                        "zh": "违背以上情况，申请将会被驳回。",
                        "en": "In violation of the above, the application will be rejected.",
                        "vi": "Vi phạm các điều trên, đơn đăng ký sẽ bị từ chối.",
                        "zh-Hant": "違背以上情況，申請將會被駁回。",
                        "id": " Apabila melanggar peraturan diatas, permohonan aplikasi menjadi Master akan ditolak. ",
                        "es": "En violación de lo anterior, la solicitud será rechazada.",
                        "pt-BR": "Em violação do acima, o pedido será rejeitado."
                    },
                    "applyMasterReminder": {
                        "zh": "申请高手提醒",
                        "en": "Apply for master reminder",
                        "vi": "Lời nhắc Đăng kí bậc thầy",
                        "zh-Hant": "申請高手提醒",
                        "id": " Pemberitahuan status aplikasi Master ",
                        "es": "Solicite recordatorio Master",
                        "pt-BR": "Aplicar para lembrete mestre"
                    },
                    "sureAboutApply": {
                        "zh": "确定申请高手吗？",
                        "en": "Are you sure about applying?",
                        "vi": "Bạn có chắc chắn về việc áp dụng không?",
                        "zh-Hant": "確定申請高手嗎？",
                        "id": " Apakah anda yakin untuk mengajukan aplikasi? ",
                        "es": "¿Está seguro quiere iniciar solicitud?",
                        "pt-BR": "Você tem certeza sobre a aplicação?"
                    },
                    "sureAboutApply1": {
                        "zh": "未达成高手申请条件，请继续努力",
                        "en": "Did not meet the master application conditions, please keep trying",
                        "vi": "Không đáp ứng các điều kiện đăng ký bậc thầy, vui lòng tiếp tục thử",
                        "zh-Hant": "未達成高手申請條件，請繼續努力",
                        "id": " Tidak memenuhi kriteria master, Teruslah mencoba. ",
                        "es": "No cumple las condiciones Master; por favor, siga intentándolo",
                        "pt-BR": "Não atendeu às condições do aplicativo mestre, continue tentando"
                    },
                    "applicationSubmitted": {
                        "zh": "申请已提交！",
                        "en": "Application has been submitted!",
                        "vi": "Đơn đăng kí đã được gửi!",
                        "zh-Hant": "申請已提交！",
                        "id": "Permohonan aplikasi telah dikirim! ",
                        "es": "¡La solicitud ha sido enviada!",
                        "pt-BR": "A inscrição foi enviada!"
                    },
                    "copyTrading": {
                        "zh": "复制跟单交易模式，人人都是投资高手",
                        "en": "With TigerWit’s fully-automated copy-trading technology anyone can be the Master of their own trading",
                        "vi": "Với công nghệ giao dịch sao chép hoàn toàn tự động của TigerWit, bất kỳ ai cũng có thể là Bậc thầy Giao dịch của chính họ ",
                        "zh-Hant": "復制跟單交易模式，人人都是投資高手",
                        "id": "Dengan memanfaatkan teknologi copy-trading miliki TigerWit, siapapun bisa menghasilkan uang.",
                        "es": "Con la tecnología totalmente automatizada copy trading de TigerWit, usted también puede convertirse en una Master del Trading.",
                        "pt-BR": "Com a tecnologia de troca de cópias totalmente automatizada da TigerWit, qualquer um pode ser o mestre de suas próprias negociações"
                    },
                    "chooseMaster": {
                        "zh": "选择高手",
                        "en": "Choose a Master",
                        "vi": "Chọn Bậc thầy",
                        "zh-Hant": "選擇高手",
                        "id": "Pilih Master",
                        "es": "Seleccione un Master",
                        "pt-BR": "Escolha um mestre"
                    },
                    "clickCopy": {
                        "zh": "点击复制",
                        "en": "Copy with one click",
                        "vi": "Sao chép bằng 1 click",
                        "zh-Hant": "點擊復制",
                        "id": "Ikuti hanya dengan 1 klik",
                        "es": "Copy con un click",
                        "pt-BR": "Copiar com um clique"
                    },
                    "takeProfit": {
                        "zh": "开始交易",
                        "en": "Take profit",
                        "vi": "Nhận lợi nhuận",
                        "zh-Hant": "開始交易",
                        "id": "Hasilkan Keuntungan",
                        "es": "Obtenga beneficios ",
                        "pt-BR": "Obter lucros"
                    },
                    "selectMaster": {
                        "zh": "系统从三个维度来比较排列出高手列表，可根据自身需求来选择高手：",
                        "en": "Select the Master whose trades you wish to follow by comparing their performance using three different measurements: ",
                        "vi": "Chọn Bậc Thầy có giao dịch bạn muốn sao chép bằng cách so sánh hiệu suất của Họ bằng cách sử dụng ba phép đo khác nhau ",
                        "zh-Hant": "系統從三個維度來比較排列出高手列表，可根據自身需求來選擇高手：",
                        "id": "Bandingkan kinerja Master yang ingin anda ikuti dengan 3 cara pengukuran berbeda: ",
                        "es": "Seleccione los trades del Master que desee seguir comparando su rendimiento empleando tres métricas diferentes: ",
                        "pt-BR": "Selecione o Mestre cujos negócios você deseja seguir comparando seu desempenho usando três medidas diferentes: "
                    },
                    "selectMaster_1": {
                        "zh": "收益率--高手的整体收益率。",
                        "en": "Profitability – a Master’s overall return on investment. The top-ranked Master has generated the greatest overall profit over the selected time-period.",
                        "vi": "Khả năng sinh lời - lợi tức đầu tư tổng thể của Bậc Thầy. Bậc Thầy hàng đầu đã tạo ra lợi nhuận tổng thể lớn nhất trong khoảng thời gian đã chọn.",
                        "zh-Hant": "收益率--高手的整體收益率。",
                        "id": "Profitabilitas - Master dengan total keuntungan investasi. Master dengan peringkat teratas menghasilkan pengembalian investasi terbesar dalam rentang waktu yang dipilih.",
                        "es": "Rentabilidad – Retorno sobre inversión medio del Master. El Master en el top del ranking ha generado el mayor beneficio en el período de tiempo seleccionado.",
                        "pt-BR": "Rentabilidade - um retorno global do investimento. O mestre de primeira linha gerou o maior lucro global durante o período de tempo selecionado."
                    },
                    "selectMaster_2": {
                        "zh": "最大跌幅--高手的最大浮动亏损占比。",
                        "en": "Stability – a Master’s averaged rate of return. The top-ranked Master has created the greatest profit averaged over the selected time period.",
                        "vi": "Tính ổn định - tỷ lệ hoàn vốn trung bình của Bậc Thầy. Bậc Thầy hàng đầu đã tạo ra lợi nhuận lớn nhất được tính trung bình trong khoảng thời gian đã chọn.",
                        "zh-Hant": "最大跌幅--高手的最大浮動虧損占比。",
                        "id": "Stabilitas - Master dengan tingkat keuntungan investasi rata-rata. Master dengan peringkat teratas menghasilkan pengembalian investasi terbesar secara rata-rata dalam rentang waktu yang dipilih.",
                        "es": "Estabilidad – Tasa de retorno ponderada del Master. El Master top en el ranking ha creado el mayor beneficio ponderado en el período de tiempo seleccionado.",
                        "pt-BR": "Estabilidade - uma taxa média de retorno da Master. O mestre do topo do ranking criou o maior lucro médio durante o período de tempo selecionado."
                    },
                    "selectMaster_3": {
                        "zh": "准确率--高手平仓的订单中盈利订单的占比。",
                        "en": "Consistency - a Master’s overall ratio of winning to losing trades. The top-ranked Master has the highest ratio of winning to losing trades over the selected time-period.",
                        "vi": "Tính nhất quán - tỷ lệ thắng của tổng thể để thua các giao dịch. Bậc Thầy được xếp hạng cao nhất có tỷ lệ thắng thua cao nhất trong khoảng thời gian đã chọn.",
                        "zh-Hant": "準確率--高手平倉的訂單中盈利訂單的占比。",
                        "id": "Konsistensi - Master dengan total rasio transaksi menang dibandingkan dengan transaksi yang kalah. Master dengan peringkat teratas memiliki rasio transaksi menang yang paling tinggi dalam rentang waktu yang dipilih.",
                        "es": "Consistencia - el ratio de posiciones ganadoras frente a perdedoras del Master. El Master en el top del ranking tiene el mayor ratio de trades ganadores frente a perdedores en el período de tiempo seleccionado.",
                        "pt-BR": "Consistência - a proporção geral em ganhos e perdas nas negociações de um Master. O Master mais bem classificado tem a maior proporção de ganhos em negociações ao longo do período de tempo selecionado."
                    },
                    "qualifyMaster": {
                        "zh": "成为高手，你将满足以下条件：",
                        "en": "To qualify for Master status a trader must have met the following requirements: ",
                        "vi": "Để hội đủ điều kiện cho trạng thái Bậc Thầy, nhà giao dịch phải đáp ứng các yêu cầu sau: ",
                        "zh-Hant": "成為高手，妳將滿足以下條件：",
                        "id": "Untuk dapat menjadi seorang Master, anda harus memenuhi kriteria sebagai berikut: ",
                        "es": "Para calificar como Master estatus debe cumplir los siguientes requisitos: ",
                        "pt-BR": "Para se qualificar para o status de Mestre, um comerciante deve ter cumprido os seguintes requisitos: "
                    },
                    "qualifyMaster_1": {
                        "zh": "入金并连续自主交易20个工作日以上",
                        "en": "Self-trade more than 20 days",
                        "vi": "Tự giao dịch hơn 20 ngày",
                        "zh-Hant": "入金並連續自主交易20個工作日以上",
                        "id": "Telah melakukan transaksi dalam kurun waktu lebih dari 20 hari",
                        "es": "Operar directamente más de 20 días",
                        "pt-BR": "Comércio por mais de 20 dias"
                    },
                    "qualifyMaster_2": {
                        "zh": "近30日内的收益回报率大于20%",
                        "en": "Achieve a 30-day rate of return greater than 20%",
                        "vi": "Đạt được tỷ lệ lợi nhuận trong 30 ngày lớn hơn 20%",
                        "zh-Hant": "近30日內的收益回報率大於20%",
                        "id": "Menghasilkan keuntungan lebih dari 20% dalam kurun waktu 30 hari",
                        "es": "Obtener tasa retorno 30 días mayor del 20%",
                        "pt-BR": "Obtenha uma taxa de retorno de 30 dias maior que 20%"
                    },
                    "qualifyMaster_3": {
                        "zh": "账户余额不得低于500美金",
                        "en": "Maintain an account balance of at least USD500",
                        "vi": "Duy trì số dư tài khoản tối thiểu là 500 USD",
                        "zh-Hant": "賬戶余額不得低於500美金",
                        "id": "Menjaga saldo akun diatas 500 $",
                        "es": "Mantener un balance de cuenta de al menos USD500",
                        "pt-BR": "Manter um saldo de conta de pelo menos US $ 500"
                    },
                    "title": {
                        "zh": "",
                        "en": "",
                        "vi": "",
                        "zh-Hant": "",
                        "id": "",
                        "es": "",
                        "pt-BR": ""
                    },
                    "satisfiedConditions": {
                        "zh": "已满足条件",
                        "en": "Satisfied conditions",
                        "vi": "Các điều kiện thỏa mãn",
                        "zh-Hant": "已滿足條件",
                        "id": "Syarat terpenuhi",
                        "es": "Condiciones satisfechas",
                        "pt-BR": "Condições exigidas"
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
                        "pt-BR": "Primeiro login"
                    },
                    "tip1": {
                        "zh": "TigerWit交易账户支持开通多个子账号用于不同交易策略。",
                        "en": "TigerWit transaction account supports opening multiple sub-accounts for different transaction strategies.",
                        "vi": "Tài khoản giao dịch TigerWit hỗ trợ mở nhiều tài khoản phụ cho các chiến lược giao dịch khác nhau.",
                        "zh-Hant": "TigerWit交易賬戶支持開通多個子帳號用於不同交易策略。",
                        "id": "Anda dapat membuka akun tambahan baru di TigerWit yang dapat digunakan untuk strategi transaksi yang berbeda ",
                        "es": "La cuenta de transacciones de TigerWit permite la apertura de múltiples sub-cuentas para diferentes estrategias de trading.",
                        "pt-BR": "A conta de transações TigerWit suporta a abertura de várias subcontas para diferentes estratégias de transação."
                    },
                    "tip2": {
                        "zh": "您当前登录账号为上榜高手，系统已自动将账号身份定义为：",
                        "en": "You currently login the master account that on the masters list, the system has automatically defined the account identity as: ",
                        "vi": "Bạn hiện đang đăng nhập tài khoản chính trên danh sách chính, hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號為上榜高手，系統已自動將帳號身份定義為：",
                        "id": " Anda saat ini masuk menggunakan Akun Master yang terdaftar, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Ha iniciado sesión actualmente cuenta independiente de la lista master; el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Você atualmente faz login na conta principal que, na lista de mestres, o sistema definiu automaticamente a identidade da conta como: "
                    },
                    "tip7": {
                        "zh": "您当前登录账号存在跟随关系，系统已自动将账号身份定义为：",
                        "en": "Your current login account has a follow relationship, and the system has automatically defined the account identity as: ",
                        "vi": "tài khoản đăng nhập hiện tại của chúng tôi có mối quan hệ sao chép và hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號存在跟隨關系，系統已自動將帳號身份定義為：",
                        "id": " Akun anda saat ini sedang mengikuti Master, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Su cuenta de inicio actual tiene una relación de seguimiento; y el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Sua conta de login atual tem uma relação de acompanhamento e o sistema definiu automaticamente a identidade da conta como: "
                    },
                    "masterAccount": {
                        "zh": "高手账号",
                        "en": "Master account",
                        "vi": "tài khoản bậc thầy",
                        "zh-Hant": "高手帳號",
                        "id": "Akun Master",
                        "es": "Cuenta Master",
                        "pt-BR": "Conta principal"
                    },
                    "copyAccount": {
                        "zh": "跟单账号",
                        "en": "Copy account",
                        "vi": "Tài khoản Sao Chép",
                        "zh-Hant": "跟單帳號",
                        "id": "Sao Chép",
                        "es": "Cuenta Copy",
                        "pt-BR": "Conta de cópia"
                    },
                    "accountAccess": {
                        "zh": "账号权限",
                        "en": "Account access",
                        "vi": "Truy cập tài khoản",
                        "zh-Hant": "帳號權限",
                        "id": "Akses Akun",
                        "es": "Acceso cuenta",
                        "pt-BR": "Acesso a conta"
                    },
                    "accountAccessM": {
                        "zh": "账号权限：",
                        "en": "Account access: ",
                        "vi": "Truy cập tài khoản: ",
                        "zh-Hant": "帳號權限：",
                        "id": " Akses Akun ",
                        "es": "Acceso cuenta: ",
                        "pt-BR": "Acesso a conta: "
                    },
                    "independentTrading": {
                        "zh": "自主交易",
                        "en": "Independent Trading",
                        "vi": "Giao Dịch Độc Lập",
                        "zh-Hant": "自主交易",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente",
                        "pt-BR": "Negociação Independente"
                    },
                    "independentTrading0": {
                        "zh": "自主交易。",
                        "en": "Independent Trading.",
                        "vi": "Giao Dịch Độc Lập.",
                        "zh-Hant": "自主交易。",
                        "id": "Transaksi pribadi",
                        "es": "Trading Independiente.",
                        "pt-BR": "Negociação Independente."
                    },
                    "tip3": {
                        "zh": "仅用于高手跟单；",
                        "en": "Only used for following masters;",
                        "vi": "Chỉ được sử dụng để sao chép những bậc thầy",
                        "zh-Hant": "僅用於高手跟單；",
                        "id": "Hanya digunakan untuk mengikuti Master",
                        "es": "Sólo se usa para seguir Masters;",
                        "pt-BR": "Usado somente para seguir mestres;"
                    },
                    "applyToMaster": {
                        "zh": "申请成为高手。",
                        "en": "Apply to be a master.",
                        "vi": "Đăng kí làm bậc thầy",
                        "zh-Hant": "申請成為高手。",
                        "id": "Daftar menjadi Seorang Master",
                        "es": "Solicitar convertirte en Master.",
                        "pt-BR": "Aplicar para ser um mestre."
                    },
                    "tip4": {
                        "zh": "该账号不再支持自主开仓操作,历史自主开仓的订单支持手动平仓。",
                        "en": "This account no longer supports the operation of independent open position, and the orders of historical independent position opening support manual position closing.",
                        "vi": "Tài khoản này không còn hỗ trợ hoạt động của vị thế mở độc lập, và các lệnh của vị thế mở độc lập hỗ trợ đóng vị thế bằng tay.",
                        "zh-Hant": "該帳號不再支持自主開倉操作,歷史自主開倉的訂單支持手動平倉。",
                        "id": " Akun ini tidak mendukung transaksi pribadi, semua posisi yang telah terbuka sebelumnya dapat ditutup secara manual . ",
                        "es": "Esta cuenta ya no admite la operación de posición abierta independiente, y las órdenes de apertura de posición independiente histórica admiten el cierre manual de posición.",
                        "pt-BR": "Esta conta não suporta mais a operação de posição aberta independente, e as ordens de abertura de posições independentes históricas suportam o fechamento manual da posição."
                    },
                    "tip5": {
                        "zh": "为了不影响您自主开仓， 系统自动为您创建了自主交易账号。请在“我的-账户管理”查看。",
                        "en": "In order not to affect your independent open position, the system automatically created an independent trading account for you. Please check in Trade Account.",
                        "vi": "Để không ảnh hưởng đến vị thế mở độc lập của bạn, hệ thống sẽ tự động tạo một tài khoản giao dịch độc lập cho bạn. Vui lòng kiểm tra trong Tài khoản giao dịch.",
                        "zh-Hant": "為了不影響您自主開倉， 系統自動為您創建了自主交易帳號。請在“我的-賬戶管理”查看。",
                        "id": " Sistem akan membuatkan akun transaksi yang terpisah dari akun copy agar tidak menganggu akun saat ini. ",
                        "es": "Para no afectar su posición abierta independiente, el sistema le ha creado automáticamente una cuenta de trading independiente. Por favor, compruebe en Cuenta Trade.",
                        "pt-BR": "Para não afetar sua posição aberta independente, o sistema criou automaticamente uma conta de negociação independente para você. Por favor, verifique em conta comercial."
                    },
                    "tip6": {
                        "zh": "您当前登录账号为自主开仓，系统已自动将账号身份定义为：",
                        "en": "You currently login the independent account that on the masters list, the system has automatically defined the account identity as: ",
                        "vi": "Bạn hiện đang đăng nhập vào tài khoản độc lập có trong danh sách chính, hệ thống đã tự động xác định danh tính tài khoản là: ",
                        "zh-Hant": "您當前登錄帳號為自主開倉，系統已自動將帳號身份定義為：",
                        "id": " Anda saat ini masuk menggunakan Akun Transaksi yang mengikuti Master, sistem akan otomatis mengidentifikasi akun sebagai:",
                        "es": "Ha iniciado sesión actualmente cuenta independiente de la lista master, el sistema ha automáticamente definido la identidad de cuenta como: ",
                        "pt-BR": "Você atualmente faz o login na conta independente que na lista de mestres, o sistema definiu automaticamente a identidade da conta como: "
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
                        "pt-BR": "Símbolo"
                    },
                    "products": {
                        "zh": "交易品种",
                        "en": "Products",
                        "vi": "Sản phẩm",
                        "zh-Hant": "交易品種",
                        "id": "Produk",
                        "es": "Productos",
                        "pt-BR": "Produtos"
                    },
                    "productsM": {
                        "zh": "交易品种：",
                        "en": "Products: ",
                        "vi": "Sản phẩm: ",
                        "zh-Hant": "交易品種：",
                        "id": "Produk: ",
                        "es": "Productos: ",
                        "pt-BR": "Produtos: "
                    },
                    "newPrice": {
                        "zh": "最新价格",
                        "en": "New Price",
                        "vi": "Giá mới",
                        "zh-Hant": "最新價格",
                        "id": "Harga Baru",
                        "es": "Nuevo precio",
                        "pt-BR": "Novo preço"
                    },
                    "variation": {
                        "zh": "涨跌幅",
                        "en": "Variation",
                        "vi": "Sự thay đổi",
                        "zh-Hant": "漲跌幅",
                        "id": "Perbedaan",
                        "es": "Variación",
                        "pt-BR": "Variação"
                    },
                    "addProduct": {
                        "zh": "添加交易品种",
                        "en": "Add the Product",
                        "vi": "Thêm Sản Phẩm",
                        "zh-Hant": "添加交易品種",
                        "id": "Tambah produk",
                        "es": "Añadir el Producto",
                        "pt-BR": "Adicione o produto"
                    },
                    "forex": {
                        "zh": "外汇",
                        "en": "Forex",
                        "vi": "Forex",
                        "zh-Hant": "外匯",
                        "id": "Valas",
                        "es": "Forex",
                        "pt-BR": "Forex"
                    },
                    "metals": {
                        "zh": "贵金属",
                        "en": "Metals",
                        "vi": "Kim Loại",
                        "zh-Hant": "貴金屬",
                        "id": "Logam Mulia",
                        "es": "Metales",
                        "pt-BR": "Metais"
                    },
                    "oilEngrgy": {
                        "zh": "能源",
                        "en": "Oil&Engrgy",
                        "vi": "Dầu Và Năng Lượng",
                        "zh-Hant": "能源",
                        "id": "Minyak dan Energi",
                        "es": "Petróleo&Energía",
                        "pt-BR": "Petróleo&Energia"
                    },
                    "indices": {
                        "zh": "差价合约",
                        "en": "Indices",
                        "vi": "Chỉ số",
                        "zh-Hant": "差價合約",
                        "id": "Indeks",
                        "es": "Indices",
                        "pt-BR": "índices"
                    },
                    "fastTrade": {
                        "zh": "简单",
                        "en": "Fast Trade",
                        "vi": "Giao Dịch Nhanh",
                        "zh-Hant": "間單",
                        "id": "Transaksi Cepat",
                        "es": "Trade Rápido",
                        "pt-BR": "Negociação rápida"
                    },
                    "tip1": {
                        "zh": "您确定要买入xx手吗？",
                        "en": "Are you sure you want to order xx lot?",
                        "vi": "Bạn có chắc muốn đặt xx lot?",
                        "zh-Hant": "您確定要買入xx手嗎？",
                        "id": "Apakah anda yakin untuk mengambil xx lot?",
                        "es": "¿Seguro quiere vender xx lotes? ",
                        "pt-BR": "Tem certeza de que quer pedir lote xx?"
                    },
                    "successful": {
                        "zh": "开仓成功",
                        "en": "Successful",
                        "vi": "Thành Công",
                        "zh-Hant": "開倉成功",
                        "id": "Sukses",
                        "es": "Éxito",
                        "pt-BR": "Feito com sucesso"
                    },
                    "viewRecord": {
                        "zh": "查看交易记录",
                        "en": "View the Record",
                        "vi": "Xem Hồ Sơ",
                        "zh-Hant": "查看交易記錄",
                        "id": "Lihat Riwayat",
                        "es": "Ver el Registro",
                        "pt-BR": "Ver registros"
                    },
                    "advanced": {
                        "zh": "高级",
                        "en": "Advanced",
                        "vi": "Nâng cao",
                        "zh-Hant": "高級",
                        "id": "Mahir",
                        "es": "Avanzado",
                        "pt-BR": "Avançado"
                    },
                    "type": {
                        "zh": "交易方式",
                        "en": "Type",
                        "vi": "Loại",
                        "zh-Hant": "交易方式",
                        "id": "Tipe",
                        "es": "Tipo",
                        "pt-BR": "Tipo"
                    },
                    "marketExecution": {
                        "zh": "市价交易",
                        "en": "Market Execution",
                        "vi": "Khớp Lệnh Thị Trường",
                        "zh-Hant": "市價交易",
                        "id": "Transaksi Pasar",
                        "es": "Ejecución Mercado",
                        "pt-BR": "Execução de Mercado"
                    },
                    "pendingOrder": {
                        "zh": "挂单交易",
                        "en": "Pending Order",
                        "vi": "Lệnh Bảo Lưu",
                        "zh-Hant": "掛單交易",
                        "id": "Posisi Pending",
                        "es": "Orden Pendiente",
                        "pt-BR": "Pedido pendente"
                    },
                    "total": {
                        "zh": "合计",
                        "en": "Total",
                        "vi": "Tổng cộng",
                        "zh-Hant": "合計",
                        "id": "Total",
                        "es": "Total",
                        "pt-BR": "Total"
                    },
                    "selectMonth": {
                        "zh": "选择月份",
                        "en": "Select the Month",
                        "vi": "Chọn Tháng",
                        "zh-Hant": "選擇月份",
                        "id": "Pilih Bulan",
                        "es": "Seleccione el Mes",
                        "pt-BR": "Selecionar o mês"
                    },
                    "deadline": {
                        "zh": "截止时间",
                        "en": "Deadline",
                        "vi": "Hạn Chót",
                        "zh-Hant": "截止時間",
                        "id": "Batas Waktu",
                        "es": "Fecha límite",
                        "pt-BR": "Prazo de auditoria: Aproximadamente um dia útil"
                    },
                    "tradeTimes": {
                        "zh": "交易时间",
                        "en": "Trade times",
                        "vi": "Số lần giao dịch",
                        "zh-Hant": "交易時間",
                        "id": "Jam transaksi",
                        "es": "Horarios Trade",
                        "pt-BR": "Trade time"
                    },
                    "quotesTimes": {
                        "zh": "报价时间",
                        "en": "Quotes Times",
                        "vi": "Số lần báo giá",
                        "zh-Hant": "報價時間",
                        "id": "Waktu penawaran",
                        "es": "Horario Cotizaciones",
                        "pt-BR": "Quotes times"
                    },
                    "minimalSpread": {
                        "zh": "最小点差（近14天统计数据）",
                        "en": "Minimal Spread (Statistics for the last 14 days) ",
                        "vi": "Spread tối thiểu (Thống kê trong 14 ngày qua) ",
                        "zh-Hant": "最小點差（近14天統計數據）",
                        "id": " Minimal Spread （Statistik selama 14 hari terakhir）",
                        "es": "Minimal Spread Mínimos (Estadísticas para últimos 14 días) ",
                        "pt-BR": "Spread Mínimo (Estatísticas dos últimos 14 dias) "
                    },
                    "stopsLevel": {
                        "zh": "最低止损点数",
                        "en": "Stops Level",
                        "vi": "Cấp độ Dừng",
                        "zh-Hant": "最低止損點數",
                        "id": "Harga tutup",
                        "es": "Niveles Stops",
                        "pt-BR": "Stop level"
                    },
                    "contractSize": {
                        "zh": "合约数量",
                        "en": "Contract Size",
                        "vi": "Kích Thước Hợp Đồng",
                        "zh-Hant": "合約數量",
                        "id": "Jumlah lot",
                        "es": "Tamaño Contrato",
                        "pt-BR": "Tamanho do contrato"
                    },
                    "minimalVolume": {
                        "zh": "最小交易量",
                        "en": "Minimal Volume",
                        "vi": "Khối Lượng Tối Thiểu",
                        "zh-Hant": "最小交易量",
                        "id": "Minimal lot",
                        "es": "Volumen Mínimo",
                        "pt-BR": "Volume mínimo"
                    },
                    "maximalVolume": {
                        "zh": "最大交易量",
                        "en": "Maximal Volume",
                        "vi": "Khối Lượng Tối Đa",
                        "zh-Hant": "最大交易量",
                        "id": "Maksimal Lot",
                        "es": "Volumen Máximo",
                        "pt-BR": "Volume máximo"
                    },
                    "volumeStep": {
                        "zh": "交易量步长",
                        "en": "Volume Step",
                        "vi": "Khối Lượng Bước",
                        "zh-Hant": "交易量步長",
                        "id": "Jumlah transaksi",
                        "es": "Volumen Step",
                        "pt-BR": "Passo de volume"
                    },
                    "marginPercentage": {
                        "zh": "每标准手手续费",
                        "en": "Margin Percentage",
                        "vi": "Tỷ lệ Margin",
                        "zh-Hant": "每標準手手續費",
                        "id": "Persentase Margin",
                        "es": "Porcentaje Margen",
                        "pt-BR": "Porcentagem de Margem"
                    },
                    "swapSype": {
                        "zh": "库存费计算模式/保证金",
                        "en": "Swap Sype",
                        "vi": "Swap sype",
                        "zh-Hant": "庫存費計算模式/保證金",
                        "id": " sype Swap ",
                        "es": "Tipo Swap ",
                        "pt-BR": "Trocar Sype"
                    },
                    "swapLong": {
                        "zh": "买入库存费",
                        "en": "Swap Long",
                        "vi": "Swap Lệnh Mua",
                        "zh-Hant": "買入庫存費",
                        "id": "Swap Beli",
                        "es": "Swap Largo",
                        "pt-BR": "Inversão longa"
                    },
                    "swapShort": {
                        "zh": "卖出库存费",
                        "en": "Swap Short",
                        "vi": "Swap Lệnh Bán",
                        "zh-Hant": "賣出庫存費",
                        "id": "Swap Jual",
                        "es": "Swap Corto",
                        "pt-BR": "Inversão curta"
                    },
                    "openedToday": {
                        "zh": "今日开盘",
                        "en": "Opened Today",
                        "vi": "Mở ngày hôm nay",
                        "zh-Hant": "今日開盤",
                        "id": "Terbuka Hari ini",
                        "es": "Abierto Hoy",
                        "pt-BR": "Aberto hoje"
                    },
                    "closedYesterday": {
                        "zh": "昨日收盘",
                        "en": "Closed Yesterday",
                        "vi": "Đóng ngày hôm qua",
                        "zh-Hant": "昨日收盤",
                        "id": "Tertutup kemarin",
                        "es": "Cerrado Ayer",
                        "pt-BR": "Fechado ontem"
                    },
                    "fastOpen": {
                        "zh": "快速下单",
                        "en": "Fast Open",
                        "vi": "Mở Nhanh",
                        "zh-Hant": "快速下單",
                        "id": "Transaksi Cepat",
                        "es": "Abrir Rápido",
                        "pt-BR": "Abertura rápida"
                    },
                    "tip2": {
                        "zh": "挂单价格不能为空",
                        "en": "Pending price can not be empty",
                        "vi": "Giá bảo lưu không được trống",
                        "zh-Hant": "掛單價格不能為空",
                        "id": "Harga Pending tidak boleh kosong",
                        "es": "El precio pendiente no puede estar vacío",
                        "pt-BR": "O valor pendente não pode estar vazio"
                    },
                    "tip3": {
                        "zh": "您的账户尚未通过认证审核，请先完善资料。",
                        "en": "Incomplete for the information, please continue to improve.",
                        "vi": "Chưa đầy đủ thông tin, vui lòng tiếp tục cải thiện.",
                        "zh-Hant": "您的賬戶尚未通過認證審核，請先完善資料。",
                        "id": " Informasi kurang lengkap, lengkapi terlebih dahulu untuk melanjutkan. ",
                        "es": "Información Incompleta, por favor, continúe.",
                        "pt-BR": "Incompleta para a informação, por favor continue melhorando."
                    },
                    "closed": {
                        "zh": "闭市中",
                        "en": "Closed",
                        "vi": "Đóng",
                        "zh-Hant": "閉市中",
                        "id": "Tertutup",
                        "es": "Cerrado",
                        "pt-BR": "Fechado"
                    },
                    "mondayFriday": {
                        "zh": "周一至周五",
                        "en": "Monday - Friday",
                        "vi": "Thứ Hai – Thứ Sáu",
                        "zh-Hant": "周壹至周五",
                        "id": "Senin - Jumat",
                        "es": "Lunes - Viernes",
                        "pt-BR": "Segunda - Sexta feira"
                    },
                    "tip4": {
                        "zh": "只允许买0.01的倍数",
                        "en": "Only allow a multiple of 0.01",
                        "vi": "Chỉ cho phép một bội số của 0.01",
                        "zh-Hant": "只允許買0.01的倍數",
                        "id": " Hanya diizinkan untuk kelipatan 0,01 ",
                        "es": "Sólo se permite un múltiplo de 0.01",
                        "pt-BR": "Apenas é permitido um múltiplo de 0,01"
                    },
                    "tip5": {
                        "zh": "止损、止盈价格均无效",
                        "en": "S/L, T/P are invalid",
                        "vi": "S/L, T/P không hiệu lực",
                        "zh-Hant": "止損、止盈價格均無效",
                        "id": "S/L, T/P tidak valid",
                        "es": "S/L, T/P inválidos",
                        "pt-BR": "S/L, T/P são inválidos"
                    },
                    "tip6": {
                        "zh": "止损价格无效",
                        "en": "S/L is invalid",
                        "vi": "S/L không hiệu lực",
                        "zh-Hant": "止損價格無效",
                        "id": "S/L Tidak valid",
                        "es": "S/L inválido",
                        "pt-BR": "S/L é inválido"
                    },
                    "tip7": {
                        "zh": "挂单价必须远离市价至少50点",
                        "en": "The price must be at least 50 points away from the market price",
                        "vi": "Giá phải ít nhất 50 điểm so với giá thị trường",
                        "zh-Hant": "掛單價必須遠離市價至少50點",
                        "id": " Harga harus setidaknya selisih 50 poin dari harga pasar ",
                        "es": "El precio debe estar al menos a 50 puntos del precio de mercado",
                        "pt-BR": "O preço deve estar pelo menos 50 pontos distante do preço de mercado"
                    },
                    "tip8": {
                        "zh": "您确定要买入0.01手吗？",
                        "en": "Are you sure to buy 0.01 lots?",
                        "vi": "Bạn có chắc chắn mua 0.01 lot không?",
                        "zh-Hant": "您確定要買入0.01手嗎？",
                        "id": " Apakah anda yakin Beli 0,01 lot? ",
                        "es": "¿Está seguro de comprar 0.01 lotes?",
                        "pt-BR": "Você tem certeza de comprar 0,01 lotes?"
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
                        "pt-BR": "Configuraçōes"
                    },
                    "profile": {
                        "zh": "修改资料",
                        "en": "Profile",
                        "vi": "Hồ sơ",
                        "zh-Hant": "修改資料",
                        "id": "Profil",
                        "es": "Perfil",
                        "pt-BR": "Perfil"
                    },
                    "basicInformation": {
                        "zh": "基本资料",
                        "en": "Basic information",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "基本資料",
                        "id": "Informasi",
                        "es": "Información básica",
                        "pt-BR": "Informaçōes basicas"
                    },
                    "location": {
                        "zh": "所在地",
                        "en": "Location",
                        "vi": "Vị trí",
                        "zh-Hant": "所在地",
                        "id": "Lokasi",
                        "es": "Ubicación",
                        "pt-BR": "Localizaçāo"
                    },
                    "city": {
                        "zh": "省市",
                        "en": "City",
                        "vi": "Thành phố",
                        "zh-Hant": "省市",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade"
                    },
                    "county": {
                        "zh": "区县",
                        "en": "Country",
                        "vi": "Quốc gia",
                        "zh-Hant": "區縣",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País"
                    },
                    "alreadyBoundEmail": {
                        "zh": "您已经绑定了电子邮箱 ",
                        "en": "You have already bound the email ",
                        "vi": "Bạn đã đăng kí email ",
                        "zh-Hant": "您已經邦定了電子郵箱 ",
                        "id": "Email telah terdaftar",
                        "es": "Ya ha asociado el email  ",
                        "pt-BR": "Você já ligou o email "
                    },
                    "oldEmailVerificationCode": {
                        "zh": "旧邮箱验证码",
                        "en": "Old email verification code",
                        "vi": "Mã xác nhận email cũ",
                        "zh-Hant": "舊郵箱驗證碼",
                        "id": "Email kode verifikasi sudah tidak berlaku",
                        "es": "Código verificación email antigüo",
                        "pt-BR": "Código de verificação de e-mail antigo"
                    },
                    "clickGet": {
                        "zh": "获取验证码",
                        "en": "Click Get",
                        "vi": "Nhấp Nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Klik untuk mendapatkan",
                        "es": "Click Obtener",
                        "pt-BR": "Clique em Obter"
                    },
                    "newEmail": {
                        "zh": "新邮箱",
                        "en": "New email",
                        "vi": "Email mới",
                        "zh-Hant": "新郵箱",
                        "id": "Email baru",
                        "es": "Nuevo email",
                        "pt-BR": "Novo Email"
                    },
                    "change": {
                        "zh": "选择图片",
                        "en": "Change",
                        "vi": "Thay đổi",
                        "zh-Hant": "選擇圖片",
                        "id": "Ubah",
                        "es": "Cambiar",
                        "pt-BR": "Mudar"
                    },
                    "general": {
                        "zh": "基本信息",
                        "en": "General",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "基本信息",
                        "id": "Informasi dasar",
                        "es": "General",
                        "pt-BR": "Geral"
                    },
                    "userName": {
                        "zh": "用户名（当前）",
                        "en": "User Name(Current) ",
                        "vi": "Tên người dung (Hiện tại) ",
                        "zh-Hant": "用戶名（當前）",
                        "id": "Nama Pengguna(Saat ini) ",
                        "es": "Nombre Usuario(Actual) ",
                        "pt-BR": "Nome de usuário (atual) "
                    },
                    "userNameEn": {
                        "zh": "用户名（英文）",
                        "en": "User Name(English) ",
                        "vi": "Tên người dung (Tiếng Anh) ",
                        "zh-Hant": "用戶名（英文）",
                        "id": "Nama Pengguna(English) ",
                        "es": "Nombre Usuario(Inglés) ",
                        "pt-BR": "Nome de usuário (inglês) "
                    },
                    "userNameM": {
                        "zh": "用户名（当前）：",
                        "en": "User Name(Current): ",
                        "vi": "Tên người dung (Hiện tại): ",
                        "zh-Hant": "用戶名（當前）：",
                        "id": "Nama Pengguna(Saat ini): ",
                        "es": "Nombre Usuario(Actual): ",
                        "pt-BR": "Nome de usuário (atual): "
                    },
                    "userNameEnM": {
                        "zh": "用户名（英文）：",
                        "en": "User Name(English): ",
                        "vi": "Tên người dung (Tiếng Anh): ",
                        "zh-Hant": "用戶名（英文）：",
                        "id": "Nama Pengguna(English): ",
                        "es": "Nombre Usuario(Inglés): ",
                        "pt-BR": "Nome de Usuário (Inglês): "
                    },
                    "modify": {
                        "zh": "修改",
                        "en": "Modify",
                        "vi": "Sửa đổi",
                        "zh-Hant": "修改",
                        "id": "Ubah",
                        "es": "Modificar",
                        "pt-BR": "Modificar"
                    },
                    "country": {
                        "zh": "国 家",
                        "en": "Country",
                        "vi": "Quốc Gia",
                        "zh-Hant": "國 家",
                        "id": "Negara",
                        "es": "País",
                        "pt-BR": "País"
                    },
                    "countryM": {
                        "zh": "国 家：",
                        "en": "Country: ",
                        "vi": "Quốc gia: ",
                        "zh-Hant": "國 家：",
                        "id": "Negara: ",
                        "es": "País: ",
                        "pt-BR": "País: "
                    },
                    "setPhotos": {
                        "zh": "修改头像",
                        "en": "Set Photos",
                        "vi": "Đặt hình ảnh",
                        "zh-Hant": "修改頭像",
                        "id": "Atur Foto",
                        "es": "Establecer fotos",
                        "pt-BR": "Definir fotos"
                    },
                    "choosePhoto": {
                        "zh": "选择头像",
                        "en": "Choose a Photo",
                        "vi": "Chọn hình ảnh",
                        "zh-Hant": "選擇頭像",
                        "id": "Pilih Foto",
                        "es": "Elige una Foto",
                        "pt-BR": "Escolha uma foto"
                    },
                    "onlySupport": {
                        "zh": "只支持 jpg、png 格式且大小在 2MB 以内",
                        "en": "Only support JPG, PNG format and size within 2MB",
                        "vi": "Chỉ hỗ trợ định dạng và kích thước JPG, PNG trong phạm vi 2MB",
                        "zh-Hant": "只支持 jpg、png 格式且大小在 2MB 以內",
                        "id": "Hanya mendukung format JPG dan PNG, maksimal 2MB",
                        "es": "Sólo admite formato JPG, PNG y tamaño máximo 2MB",
                        "pt-BR": "Apenas suporte JPG, formato PNG e tamanho dentro de 2MB"
                    },
                    "security": {
                        "zh": "账户安全",
                        "en": "Security",
                        "vi": "Bảo mật",
                        "zh-Hant": "賬戶安全",
                        "id": "Keamanan",
                        "es": "Seguridad",
                        "pt-BR": "Segurança"
                    },
                    "passwordManagement": {
                        "zh": "密码管理",
                        "en": "Password Management",
                        "vi": "Quản lý Mật khẩu",
                        "zh-Hant": "密碼管理",
                        "id": "Pengaturan Kata Sandi",
                        "es": "Gestión Contraseñas",
                        "pt-BR": "Gerenciar senha"
                    },
                    "oldPassword": {
                        "zh": "原密码",
                        "en": "Old password",
                        "vi": "Mật khẩu cũ",
                        "zh-Hant": "原密碼",
                        "id": "Kata sandi Lama",
                        "es": "Contraseña anterior",
                        "pt-BR": "Senha antiga"
                    },
                    "newPassword": {
                        "zh": "新密码",
                        "en": "New password",
                        "vi": "Mật khẩu mới",
                        "zh-Hant": "新密碼",
                        "id": "Kata sandi Baru",
                        "es": "Nueva contraseña",
                        "pt-BR": "Nova senha"
                    },
                    "confirmNewPassword": {
                        "zh": "确认新密码",
                        "en": "Confirm new password",
                        "vi": "Xác nhận lại mật khẩu mới",
                        "zh-Hant": "確認新密碼",
                        "id": "Konfirmasi Kata sandi Baru",
                        "es": "Confirmar nueva contraseña",
                        "pt-BR": "Confirme nova senha"
                    },
                    "phoneNumberSettings": {
                        "zh": "手机号码设置",
                        "en": "Phone number settings",
                        "vi": "Cài đặt số điện thoại",
                        "zh-Hant": "手機號碼設置",
                        "id": "Pengaturan nomor telepon",
                        "es": "Ajustes número de teléfono",
                        "pt-BR": "Obtenha o código de verificação"
                    },
                    "boundPhoneXXX": {
                        "zh": "您已经绑定了手机号",
                        "en": "You have now bound phone number ",
                        "vi": "Bây giờ bạn đăng kí số điện thoại ",
                        "zh-Hant": "您已經邦定了手機號",
                        "id": "Anda telah mendaftarkan nomor telepon ",
                        "es": "Ha asignado ahora un número de teléfono ",
                        "pt-BR": "Configurações da caixa de correio "
                    },
                    "newPhoneNumber": {
                        "zh": "新手机号码",
                        "en": "New phone number",
                        "vi": "Số điện thoại mới",
                        "zh-Hant": "新手機號碼",
                        "id": "Nomor telepon baru",
                        "es": "Nuevo número de teléfono",
                        "pt-BR": "Aviso de carteira ativa"
                    },
                    "verificationCode": {
                        "zh": "验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código de verificación",
                        "pt-BR": "Carteira não suporta a ativação individual, após a abertura bem-sucedida da conta de transação, a carteira será ativada automaticamente."
                    },
                    "getVerificationCode": {
                        "zh": "获取验证码",
                        "en": "Get verification code",
                        "vi": "Nhận Mã xác nhận",
                        "zh-Hant": "獲取驗證碼",
                        "id": "Dapatkan Kode Verifikasi",
                        "es": "Cód. Verif. email antiguo",
                        "pt-BR": "Obtenha o código de verificação"
                    },
                    "mailboxSettings": {
                        "zh": "电子邮箱设置",
                        "en": "Mailbox settings",
                        "vi": "Cài đặt hộp thư",
                        "zh-Hant": "電子郵箱設置",
                        "id": "Pengaturan Kotak Surat",
                        "es": "Configuración mailbox",
                        "pt-BR": "Configurações da caixa de correio"
                    },
                    "notificationActivateWallet": {
                        "zh": "激活钱包提示",
                        "en": "Notice of active wallet",
                        "vi": "Thông báo về kích hoạt ví",
                        "zh-Hant": "激活錢包提示",
                        "id": " Pemberitahuan aktivasi dompet",
                        "es": "Aviso wallet activada",
                        "pt-BR": "Aviso de carteira ativa"
                    },
                    "notificationActivateWalletCon": {
                        "zh": "钱包不支持单独激活，交易类账户开通成功后，钱包将自动激活。",
                        "en": "Wallet does not support individual activation，after successful opening of transaction account, wallet will be automatically activated.",
                        "vi": "Wallet không hỗ trợ kích hoạt riêng lẻ ， sau khi mở tài khoản giao dịch thành công, ví tiền sẽ được kích hoạt tự động.",
                        "zh-Hant": "錢包不支持單獨激活，交易類賬戶開通成功後，錢包將自動激活。",
                        "id": " Dompet akan diaktivasi secara otomatis setelah berhasil membuka akun transaksi ",
                        "es": "Wallet no permite activación individual，después de abrir una cuenta de operaciones, su Wallet se activará automáticamente.",
                        "pt-BR": "Carteira não suporta a ativação individual, após a abertura bem-sucedida da conta de transação, a carteira será ativada automaticamente."
                    },
                    "openLiveAccount": {
                        "zh": "开通真实账户",
                        "en": "Live Account",
                        "vi": "Tài khoản Thực",
                        "zh-Hant": "開通真實賬戶",
                        "id": "Akun Live",
                        "es": "Cuenta Real",
                        "pt-BR": "conta ativa"
                    },
                    "openLiveAccountTip1": {
                        "zh": "开户即得$200交易红包，入金可获$800红包！",
                        "en": "Open a live account and receive a $200 coupon, deposit and receive $800 coupon.",
                        "vi": "Mở tài khoản thực và nhận phiếu thưởng $ 200, gửi tiền và nhận phiếu thưởng $ 800.",
                        "zh-Hant": "開戶即得$200交易紅包，入金可獲$800紅包！",
                        "id": " Buka akun live sekarang juga dan dapatkan kupon senilai 200$ dan 800$ ",
                        "es": "Abra una cuenta real y reciba un cupón de $200, deposite y reciba un cupón de $800.",
                        "pt-BR": "Abra uma conta ativa e receba um cupom de $ 200, deposite e receba cupom de $ 800."
                    },
                    "openLiveAccountTip2": {
                        "zh": "同时享受更多交易体验：",
                        "en": "You will enjoy more transaction experiences at the same time: ",
                        "vi": "Bạn sẽ tận hưởng nhiều trải nghiệm giao dịch hơn cùng một lúc: ",
                        "zh-Hant": "同時享受更多交易體驗：",
                        "id": "Anda akan merasakan pengalaman trading yang berbeda: ",
                        "es": "Disfrutará de más transacciones y experiencias al mismo tiempo: ",
                        "pt-BR": "Você desfrutará de mais experiências de transação ao mesmo tempo: "
                    },
                    "openLiveAccountTip3": {
                        "zh": "自由交易，享受灵活杠杆",
                        "en": "Freely trading, flexible level.",
                        "vi": "Tự do giao dịch, mức linh hoạt.",
                        "zh-Hant": "自由交易，享受靈活杠桿",
                        "id": " Bebas bertansaksi di tingkat yang diinginkan ",
                        "es": "Trading libre, niveles flexibles.",
                        "pt-BR": "Negociação livre, nível flexível."
                    },
                    "openLiveAccountTip4": {
                        "zh": "复制高手获得收益",
                        "en": "Get profit by following masters.",
                        "vi": "Nhận lợi nhuận bằng cách sao chép các bậc thầy.",
                        "zh-Hant": "復制高手獲得收益",
                        "id": " Dapatkan keuntungan hanya dengan mengikuti Master. ",
                        "es": "Obtenga beneficios siguiendo Masters.",
                        "pt-BR": "Obter lucro, seguindo mestres."
                    },
                    "openLiveAccountTip5": {
                        "zh": "申请成为高手获得盈利分成",
                        "en": "Apply for a master and obtain commissions.",
                        "vi": "Áp dụng cho một bậc thầy và nhận hoa hồng.",
                        "zh-Hant": "申請成為高手獲得盈利分成",
                        "id": " Jadilah seorang Master dan Dapatkan komisi ",
                        "es": "Solicite convertirse en Master y obtenga comisiones.",
                        "pt-BR": "Candidate-se a um mestre e obtenha comissões."
                    },
                    "freeOpening": {
                        "zh": "免费开通",
                        "en": "Free Opening",
                        "vi": "Mở tự do",
                        "zh-Hant": "免費開通",
                        "id": "Daftar Gratis",
                        "es": "Apertura Gratis",
                        "pt-BR": "Abertura Gratuita"
                    },
                    "openExperienceAccount": {
                        "zh": "开通体验金账户",
                        "en": "Open an trail account",
                        "vi": "Mở tài khoản trải nghiệm",
                        "zh-Hant": "開通體驗金賬戶",
                        "id": "Buka Akun Pengalaman",
                        "es": "Abrir una cuenta Práctica",
                        "pt-BR": "Abra uma conta para teste"
                    },
                    "openExperienceAccountTip1": {
                        "zh": "开户即送$10000交易体验金。",
                        "en": "Open the trail account and receive a $10000 virtual balance.",
                        "vi": "Mở tài khoản trải nghiệm và nhận số dư ảo 10.000 đô la.",
                        "zh-Hant": "開戶即送$10000交易體驗金。",
                        "id": " Buka Akun pengalaman dan dapatkan dana virtual senilai 10,000$ ",
                        "es": "Abra la cuenta de práctica y reciba $10000 virtuales de balance",
                        "pt-BR": "Abra a conta da trilha e receba um saldo virtual de $10.000."
                    },
                    "openExperienceAccountTip2": {
                        "zh": "只需一步，即刻享受",
                        "en": "Just one step, and you will enjoy: ",
                        "vi": "Chỉ một bước, và bạn sẽ hài lòng: ",
                        "zh-Hant": "只需壹步，即刻享受",
                        "id": "Hanya dengan 1 langkah saja, anda sudah bisa bertransaksi",
                        "es": "Un sólo paso, y disfrutará: ",
                        "pt-BR": "Apenas um passo e você irá desfrutar de: "
                    },
                    "openExperienceAccountTip3": {
                        "zh": "自由交易，灵活杠杆",
                        "en": "Freely trading, flexible level.",
                        "vi": "Tự do giao dịch, mức linh hoạt.",
                        "zh-Hant": "自由交易，靈活杠桿",
                        "id": " Bebas bertansaksi di tingkat yang diinginkan ",
                        "es": "Trading libre, niveles flexibles.",
                        "pt-BR": "Negociação livre, nível flexível."
                    },
                    "openExperienceAccountTip4": {
                        "zh": "不用承担任何风险",
                        "en": "Take no risk.",
                        "vi": "Không rủi ro.",
                        "zh-Hant": "不用承擔任何風險",
                        "id": "Tanpa resiko",
                        "es": "No tome riesgos.",
                        "pt-BR": "Não se arrisque."
                    },
                    "openAcount1": {
                        "zh": " ",
                        "en": "Live account",
                        "vi": "Tài khoản thực",
                        "zh-Hant": " ",
                        "id": "Akun Live",
                        "es": "Cuenta real",
                        "pt-BR": "conta ativa"
                    },
                    "openAcount2": {
                        "zh": " ",
                        "en": "Open a Live account and trade the markets you want, the way you want them.",
                        "vi": "Mở một tài khoản Thực và giao dịch với các thị trường bạn muốn, theo cách bạn muốn.",
                        "zh-Hant": " ",
                        "id": "Buka akun Live dan bertransaksilah di pasar manapun yang anda inginkan, dengan cara yang anda sukai",
                        "es": "Abra una cuenta Real y opere los mercados que quiere, del modo que desea.",
                        "pt-BR": "Abra uma conta do Live e negocie os mercados desejados, da maneira que você quiser."
                    },
                    "openAcount3": {
                        "zh": " ",
                        "en": "Key FX, precious metals, commodities and indices via CFD",
                        "vi": "Sản phẩm FX chính, các kim loại quý, hàng hóa và chỉ số thông qua CFD",
                        "zh-Hant": " ",
                        "id": "Valuta asing, logam mulia, komoditas, dan indeks saham melalui CFD",
                        "es": "FX, metales preciosos, commodities e índices vía CFDs",
                        "pt-BR": "Key FX, metais preciosos, commodities e índices via CFD"
                    },
                    "openAcount4": {
                        "zh": " ",
                        "en": "Trade on a smarter, personalised, highly intuitive app",
                        "vi": "Giao dịch trên ứng dụng thông minh, được cá nhân hóa, trực quan hơn",
                        "zh-Hant": " ",
                        "id": "Bertransaksilah di aplikasi yang lebih canggih, pintar dan intuitif",
                        "es": "Opere en una smart app personalizable e intuitiva",
                        "pt-BR": "Negocie em um aplicativo mais inteligente, personalizado e altamente intuitivo"
                    },
                    "openAcount5": {
                        "zh": " ",
                        "en": "Copy-trade by following a Master",
                        "vi": "Sao chép giao dịch bằng cách sao chép một Bậc Thầy",
                        "zh-Hant": " ",
                        "id": "Copy-Trade dengan mengikuti seorang Master",
                        "es": "Copy-trade siguiendo a un Master",
                        "pt-BR": "Copie o comércio seguindo um mestre"
                    },
                    "openAcount6": {
                        "zh": " ",
                        "en": "Become a Master and share your followers’ profits",
                        "vi": "Trở thành một Bậc Thầy và chia sẻ lợi nhuận của người sao chép của bạn",
                        "zh-Hant": " ",
                        "id": "Jadilah seorang Master dan dapatkan bagi hasil dari keuntungan investor yang mengikuti anda",
                        "es": "Conviértase en una master y comparta los beneficios de sus seguidores",
                        "pt-BR": "Torne-se um mestre e compartilhe os lucros de seus seguidores"
                    },
                    "openAcount7": {
                        "zh": " ",
                        "en": "Trading powered by blockchain",
                        "vi": "Giao dịch được hỗ trợ bởi blockchain",
                        "zh-Hant": " ",
                        "id": "Transaksi didukung oleh blockchain",
                        "es": "Trading powered by blockchain",
                        "pt-BR": "Negociação alimentada por blockchain"
                    },
                    "openAcount8": {
                        "zh": " ",
                        "en": "Open a Live account",
                        "vi": "Mở một tài khoản Thực",
                        "zh-Hant": " ",
                        "id": "Buka akun Live",
                        "es": "Abrir una cuenta Real",
                        "pt-BR": "Abra uma conta ativa"
                    },
                    "openAcount9": {
                        "zh": " ",
                        "en": "Trail account",
                        "vi": "Tài khoản Trải Nghiệm",
                        "zh-Hant": " ",
                        "id": "Akun Pengalaman",
                        "es": "Cuenta Práctica",
                        "pt-BR": "Conta teste"
                    },
                    "openAcount10": {
                        "zh": " ",
                        "en": "Open an trail account and practice trading in a risk-free environment with USD10,000of virtual funds.",
                        "vi": "Mở một tài khoản Trải nghiệm và thực hành giao dịch trong một môi trường phi rủi ro với 10,000 USD trong quỹ ảo.",
                        "zh-Hant": " ",
                        "id": "Buka akun Pengalaman dan berlatihlah transaksi tanpa risiko menggunakan dana virtual sebesar 10,000$",
                        "es": "Abra una cuenta demo y practique en una entorno sin riesgo con USD10,000 en fondos virtuales.",
                        "pt-BR": "Abra uma conta teste e pratique a negociação em um ambiente livre de risco com US$10.000 de fundos virtuais."
                    },
                    "openAcount11": {
                        "zh": " ",
                        "en": "Instant account-opening",
                        "vi": "Mở tài khoản ngay lập tức",
                        "zh-Hant": " ",
                        "id": "Pembukaan akun instan",
                        "es": "Apertura cuenta instantánea",
                        "pt-BR": "Abertura de conta instantânea"
                    },
                    "openAcount12": {
                        "zh": " ",
                        "en": "Practice risk-free trading with virtual funds",
                        "vi": "Thực hành giao dịch phi rủi ro với các quỹ ảo",
                        "zh-Hant": " ",
                        "id": "Berlatihlah transaksi tanpa risiko menggunakan dana virtual",
                        "es": "Practique trading sin riesgo con fondos virtuales.",
                        "pt-BR": "Pratique negociação sem risco com fundos virtuais"
                    },
                    "openAcount13": {
                        "zh": " ",
                        "en": "Upgrade quickly and easily to a Live account",
                        "vi": "Nâng cấp lên Tài khoản Thực nhanh chóng và dễ dàng",
                        "zh-Hant": " ",
                        "id": "Tingkatkan ke akun Live dengan cepat dan gampang",
                        "es": "Upgrade rápido y fácil a cuenta Real",
                        "pt-BR": "Atualize rápida e facilmente para uma conta ativa"
                    },
                    "openAcount14": {
                        "zh": " ",
                        "en": "Open an trail account",
                        "vi": "Mở một tài khoản Trải Nghiệm",
                        "zh-Hant": " ",
                        "id": "Buka akun Pengalaman",
                        "es": "Abrir una cuenta de Práctica",
                        "pt-BR": "Abra uma conta teste"
                    },
                    "provideService": {
                        "zh": "定制您的个性化服务",
                        "en": "To provide you with personalized service",
                        "vi": "cung cấp cho bạn dịch vụ cá nhân hóa",
                        "zh-Hant": "定制您的個性化服務",
                        "id": "Untuk menyediakan kepada anda layanan sesuai pribadi anda ",
                        "es": "Brindarle un servicio personalizado",
                        "pt-BR": "Para garantir a você um serviço personalizado"
                    },
                    "basicInformationg": {
                        "zh": "个人资料设置",
                        "en": "Basic information",
                        "vi": "Thông tin cơ bản",
                        "zh-Hant": "個人資料設置",
                        "id": "Informasi",
                        "es": "Información básica",
                        "pt-BR": "Informaçōes basicas"
                    },
                    "editPhotoPhone": {
                        "zh": "头像、联系方式等设置",
                        "en": "Edit photo, phone，ect",
                        "vi": "Chỉnh sửa hình ảnh, số điện thoại, v.v",
                        "zh-Hant": "頭像、聯系方式等設置",
                        "id": "Atur foto, Nomor telepon, dan lain-lain",
                        "es": "Editar foto, teléfono，etc",
                        "pt-BR": "Editar foto, telefone,   ect"
                    },
                    "photo": {
                        "zh": "头像",
                        "en": "Photo",
                        "vi": "Hình Ảnh",
                        "zh-Hant": "頭像",
                        "id": "Foto",
                        "es": "Foto",
                        "pt-BR": "Foto"
                    },
                    "iDVerification": {
                        "zh": "实名认证",
                        "en": "ID Verification",
                        "vi": "Xác nhận ID",
                        "zh-Hant": "實名認證",
                        "id": "Verifikasi ID",
                        "es": "Verificación ID",
                        "pt-BR": "ID de verificação"
                    },
                    "verifyPhone": {
                        "zh": "绑定手机",
                        "en": "Verify Your Phone",
                        "vi": "Xác nhận số điện thoại của bạn",
                        "zh-Hant": "邦定手機",
                        "id": "Verifikasi nomor telepon anda",
                        "es": "Verifica tu Teléfono",
                        "pt-BR": "Verifique seu telefone"
                    },
                    "tip1": {
                        "zh": "为了您的账户安全，请先验证身份",
                        "en": "To ensure your account is safe, please verify your identity first",
                        "vi": "Để đảm bảo tài khoản của bạn an toàn, trước tiên hãy xác minh danh tính của bạn",
                        "zh-Hant": "為了您的賬戶安全，請先驗證身份",
                        "id": " Untuk memastikan akun anda aman, silahkan verifikasi identitas anda terlebih dahulu ",
                        "es": "Para garantizar que su cuenta esté segura, por favor, primero verifique su identidad",
                        "pt-BR": "Para garantir que sua conta é segura, confirme sua identidade primeiro"
                    },
                    "tip2": {
                        "zh": "我们将向您的原手机号发送验证码",
                        "en": "We will send the verification code to the original phone",
                        "vi": "Chúng tôi sẽ gửi mã xác minh đến điện thoại ban đầu",
                        "zh-Hant": "我們將向您的原手機號發送驗證碼",
                        "id": " Kami akan mengiriman kode verifikasi ke ponsel anda ",
                        "es": "Le enviaremos el código de verificación al teléfono original.",
                        "pt-BR": "Vamos enviar o código de verificação para o telefone original"
                    },
                    "tip3": {
                        "zh": "身份验证通过后，方可进行下一步操作",
                        "en": "Need to verify before proceeding",
                        "vi": "Cần xác minh trước khi tiếp tục",
                        "zh-Hant": "身份驗證通過後，方可進行下壹步操作",
                        "id": " Silahkan verifikasi terlebih dahulu sebelum melanjutkan ",
                        "es": "Necesidad de verificar antes de proceder.",
                        "pt-BR": "Precisa verificar antes de prosseguir"
                    },
                    "enterVerificationCode": {
                        "zh": "请输入验证码",
                        "en": "Verification code",
                        "vi": "Mã xác nhận",
                        "zh-Hant": "請輸入驗證碼",
                        "id": "Kode Verifikasi",
                        "es": "Código de verificación",
                        "pt-BR": "Código de verificação"
                    },
                    "tip4": {
                        "zh": "如有其它疑问，请联系TigerWit客服",
                        "en": "If you have other questions，please contact TigerWit customer service",
                        "vi": "Nếu bạn có câu hỏi khác, vui lòng liên hệ với dịch vụ khách hàng TigerWit",
                        "zh-Hant": "如有其它疑問，請聯系TigerWit客服",
                        "id": " Jika anda memiliki pertanyaan lain, silahkan hubungi layanan pelanggan TigerWit ",
                        "es": "Para cualquier pregunta，por favor, contacte con el servicio de Atención al Cliente de TigerWit",
                        "pt-BR": "Se você tiver outras dúvidas, entre em contato com o atendimento ao cliente TigerWit"
                    },
                    "editEmail": {
                        "zh": "绑定邮箱",
                        "en": "Edit Email",
                        "vi": "Chỉnh sửa email",
                        "zh-Hant": "邦定郵箱",
                        "id": "Atur email",
                        "es": "Editar Email",
                        "pt-BR": "Editar email"
                    },
                    "verifyEmail": {
                        "zh": "验证邮箱",
                        "en": "Verify Your Email",
                        "vi": "Xác minh email của bạn",
                        "zh-Hant": "驗證郵箱",
                        "id": "Verifikasi Email",
                        "es": "Verifique Su Email",
                        "pt-BR": "Verifique seu email"
                    },
                    "tip5": {
                        "zh": "我们将向您的原邮箱发送验证码",
                        "en": "We will send the verification code to the original email",
                        "vi": "Chúng tôi sẽ gửi mã xác minh đến email ban đầu",
                        "zh-Hant": "我們將向您的原郵箱發送驗證碼",
                        "id": " Kami akan mengirimkan kode verifikasi ke email anda ",
                        "es": "Le enviaremos el código de verificación al email original.",
                        "pt-BR": "Enviaremos o código de verificação para o email original"
                    },
                    "completeInformation": {
                        "zh": "完善信息",
                        "en": "Complete information",
                        "vi": "hoàn thành thông tin",
                        "zh-Hant": "完善信息",
                        "id": "Lengkapi informasi",
                        "es": "Información completa",
                        "pt-BR": "Informação completa"
                    },
                    "tip6": {
                        "zh": "如实填写个人信息是核实您真实身份，保障您资金和账号安全，隐私信息的重要依据",
                        "en": "Truthfully filling in personal information is an important basis for verifying your true identity, ensuring the security of your funds and account number and privacy information",
                        "vi": "Việc điền thông tin cá nhân một cách trung thực là cơ sở quan trọng để xác minh danh tính thực sự của bạn, đảm bảo an toàn cho số tiền và số tài khoản cũng như thông tin bảo mật của bạn",
                        "zh-Hant": "如實填寫個人信息是核實您真實身份，保障您資金和帳號安全，隱私信息的重要依據",
                        "id": " Masukkan semua data pribadi anda secara benar. Supaya dana anda, nomor akun anda dan informasi pribadi anda aman. ",
                        "es": "Completar la información personal es una base importante para verificar su verdadera identidad, garantizar la seguridad de sus fondos, el número de cuenta y la  privacidad de su información",
                        "pt-BR": "Realmente preenchendo informações pessoais é uma base importante para verificar sua verdadeira identidade, garantindo a segurança de seus fundos e número de conta e informações de privacidade"
                    },
                    "setNickname": {
                        "zh": "设置昵称",
                        "en": "Set nickname",
                        "vi": "Đặt biệt danh",
                        "zh-Hant": "設置昵稱",
                        "id": "Atur Nama Pengguna",
                        "es": "Establecer nickname",
                        "pt-BR": "Definir apelido"
                    },
                    "tip7": {
                        "zh": "请设置昵称",
                        "en": "Please set a nickname for your account to help you get on the list",
                        "vi": "Vui lòng đặt biệt hiệu cho tài khoản của bạn để giúp bạn có được danh sách",
                        "zh-Hant": "請設置昵稱",
                        "id": " Silahkan masukkan nama pengguna untuk akun anda ",
                        "es": "Por favor, establece un nickname para tu cuenta para ayudarte a entrar en la lista",
                        "pt-BR": "Por favor, defina um apelido para sua conta para ajudá-lo a entrar na lista"
                    },
                    "pleaseSetNickname": {
                        "zh": "请为账户设置昵称",
                        "en": "Please set nickname",
                        "vi": "Vui lòng đặt biệt hiệu",
                        "zh-Hant": "請為賬戶設置昵稱",
                        "id": " Silahkan masukkan nama pengguna ",
                        "es": "Por favor, establece el nickname",
                        "pt-BR": "Por favor, defina apelido"
                    },
                    "nicknameHasBeenTaken": {
                        "zh": "昵称已存在",
                        "en": "The nickname has been taken",
                        "vi": "Biệt danh đã được đặt",
                        "zh-Hant": "昵稱已存在",
                        "id": "Nama pengguna tidak tersedia",
                        "es": "El nickname ya está empleado",
                        "pt-BR": "O apelido já está em uso"
                    },
                    "pEnterYourMail": {
                        "zh": "请输入您的邮箱",
                        "en": "Please enter your mail address",
                        "vi": "Vui lòng nhập địa chỉ email của bạn",
                        "zh-Hant": "請輸入您的郵箱",
                        "id": "Silahkan masukkan alamat email anda",
                        "es": "Por favor, ingrese su dirección de email",
                        "pt-BR": "Por favor, digite seu endereço de e-mail"
                    },
                    "PEnterYourMailg": {
                        "zh": "请输入您的电子邮箱",
                        "en": "Please enter your email address",
                        "vi": "Vui lòng nhập địa chỉ email của bạn.",
                        "zh-Hant": "請輸入您的電子郵箱",
                        "id": " Silahkan masukkan alamat email anda.",
                        "es": "Por favor, introduzca su dirección de email",
                        "pt-BR": "Por favor, indique o seu endereço de e-mail"
                    },
                    "emailFormatErr": {
                        "zh": "电子邮箱格式不正确",
                        "en": "E-mail format is incorrect",
                        "vi": "Định dạng email không chính xác",
                        "zh-Hant": "電子郵箱格式不正確",
                        "id": "Format email salah",
                        "es": "Formato de email es incorrecto",
                        "pt-BR": "Formato de email está incorreto"
                    },
                    "emailExists": {
                        "zh": "电子邮箱已存在",
                        "en": "E-mail address already exists",
                        "vi": "Địachỉ email đã tồn tại",
                        "zh-Hant": "電子郵箱已存在",
                        "id": " email telah terdaftar",
                        "es": "Dirección de email ya existe",
                        "pt-BR": "O endereço de e-mail já existe"
                    },
                    "sendVerificationToEmail": {
                        "zh": "发送验证码至邮箱",
                        "en": "Send code",
                        "vi": "Gửi mã",
                        "zh-Hant": "發送驗證碼至郵箱",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código"
                    },
                    "enterPhoneNum": {
                        "zh": "请输入您的手机号",
                        "en": "Please enter your phone number",
                        "vi": "Vui lòng nhập số điện thoại của bạn",
                        "zh-Hant": "請輸入您的手機號",
                        "id": "Silahkan masukkan nomor telepon anda",
                        "es": "Por favor, introduzca su número de teléfono",
                        "pt-BR": "Por favor, digite seu número de telefone"
                    },
                    "phoneNumErr": {
                        "zh": "手机号码不正确",
                        "en": "Phone number is not correct",
                        "vi": "Số điện thoại không đúng",
                        "zh-Hant": "手機號碼不正確",
                        "id": "Nomor telepon salah",
                        "es": "El número de teléfono no es correcto",
                        "pt-BR": "Número de telefone não está correto"
                    },
                    "phoneNumExists": {
                        "zh": "手机号已存在",
                        "en": "Phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號已存在",
                        "id": "Nomor telepon telah terdaftar",
                        "es": "El número de teléfono ya existe",
                        "pt-BR": "O número de telefone já existe"
                    },
                    "verifyPhoneg": {
                        "zh": "验证手机",
                        "en": "Verify phone",
                        "vi": "Xác minh số điện thoại",
                        "zh-Hant": "驗證手機",
                        "id": "Verifikasi Nomor telepon",
                        "es": "Verificar teléfono",
                        "pt-BR": "Verificar telefone"
                    },
                    "sendVerificationCode": {
                        "zh": "发送验证码",
                        "en": "Send code",
                        "vi": "Gửi mã",
                        "zh-Hant": "發送驗證碼",
                        "id": "Kirim kode",
                        "es": "Enviar código",
                        "pt-BR": "Enviar código"
                    },
                    "residentialAddress": {
                        "zh": "居住地址",
                        "en": "Residential address",
                        "vi": "Địa chỉ cư trú",
                        "zh-Hant": "居住地址",
                        "id": "Alamat rumah",
                        "es": "Dirección residencial",
                        "pt-BR": "Endereço residencial"
                    },
                    "selectProvincesCities": {
                        "zh": "请选择您的省/市",
                        "en": "Please select state/region",
                        "vi": "Vui lòng chọn bang/vùng",
                        "zh-Hant": "請選擇您的省/市",
                        "id": "Silahkan pilih daerah/provinsi",
                        "es": "Por favor elija estado/región",
                        "pt-BR": "Por favor insira estado/região"
                    },
                    "selectCityDistrict": {
                        "zh": "请选择您的市/区",
                        "en": "Please select city",
                        "vi": "Vui lòng chọn thành phố",
                        "zh-Hant": "請選擇您的市/區",
                        "id": "Silahkan pilih kota",
                        "es": "Por favor elija ciudad",
                        "pt-BR": "Por favor insira a cidade"
                    },
                    "enterAddress": {
                        "zh": "请输入完整居住地址",
                        "en": "Please enter full residential address",
                        "vi": "Vui lòng điền đầy đủ địa chỉ cư trú",
                        "zh-Hant": "請輸入完整居住地址",
                        "id": "Silahkan masukkan alamat lengkap anda",
                        "es": "Por favor ingrese la dirección residencial completa",
                        "pt-BR": "Por favor, digite o endereço residencial completo"
                    },
                    "openAccount": {
                        "zh": "请您先开通账户！",
                        "en": "Please open account first!",
                        "vi": "Vui lòng chọn mở tài khoản đầu tiên",
                        "zh-Hant": "請您先開通賬戶！",
                        "id": "Mohon buka akun terlebih dahulu",
                        "es": "Por favor, ¡Abra la cuenta primero!",
                        "pt-BR": "Por favor, abra a conta primeiro!"
                    },
                    "enterUsername": {
                        "zh": "请输入用户名",
                        "en": "Enter username",
                        "vi": "Nhập tên người dùng",
                        "zh-Hant": "請輸入用戶名",
                        "id": "Masukkan nama pengguna",
                        "es": "Introduzca su nombre de usuario",
                        "pt-BR": "Insira nome de usuário"
                    },
                    "noBindEmail": {
                        "zh": "您未绑定任何邮箱",
                        "en": "You haven’t bind any email",
                        "vi": "Bạn chưa liên kết bất kỳ email nào",
                        "zh-Hant": "您未邦定任何郵箱",
                        "id": "Anda belum mendaftarkan email apapun",
                        "es": "No has asociado ningún email",
                        "pt-BR": "Você não liga nenhum email"
                    },
                    "enterNewEmail": {
                        "zh": "请输入新邮箱",
                        "en": "Enter new email",
                        "vi": "Nhập email mới",
                        "zh-Hant": "請輸入新郵箱",
                        "id": "Masukkan email baru",
                        "es": "Ingrese nuevo email",
                        "pt-BR": "Insira um novo email"
                    },
                    "emailFormatError": {
                        "zh": "邮箱格式错误",
                        "en": "Email format error",
                        "vi": "Định dạng email lỗi",
                        "zh-Hant": "郵箱格式錯誤",
                        "id": "format email salah",
                        "es": "Error de formato email",
                        "pt-BR": "Erro no formato de e-mail"
                    },
                    "newEmailVerCode": {
                        "zh": "新邮箱验证码",
                        "en": "New email verification code",
                        "vi": "Mã xác nhận email mới",
                        "zh-Hant": "新郵箱驗證碼",
                        "id": "Kode Verifikasi email baru",
                        "es": "Nuevo email código de verificación ",
                        "pt-BR": "Novo código de verificação de email"
                    },
                    "passwordChangedSucc": {
                        "zh": "密码修改成功",
                        "en": "Password changed successfully",
                        "vi": "Thay đổi mật khẩu thành công",
                        "zh-Hant": "密碼修改成功",
                        "id": " Kata sandi berhasil diubah",
                        "es": "Contraseña cambiada con éxito",
                        "pt-BR": "Senha alterada com sucesso"
                    },
                    "enterNewPassword": {
                        "zh": "请输入新密码",
                        "en": "Enter new password",
                        "vi": "Nhập mật khẩu mới",
                        "zh-Hant": "請輸入新密碼",
                        "id": "Masukkan Kata sandi baru",
                        "es": "Introduzca nueva contraseña",
                        "pt-BR": "Digite uma nova senha"
                    },
                    "passwordsNoMatch": {
                        "zh": "两次输入密码不一致",
                        "en": "These passwords don’t match",
                        "vi": "Những mật khẩu này không khớp",
                        "zh-Hant": "兩次輸入密碼不壹致",
                        "id": " Kata sandi tidak sama",
                        "es": "Las contraseñas no coinciden",
                        "pt-BR": "Essas senhas não coincidem"
                    },
                    "enterNewPasswordAgain": {
                        "zh": "请再次输入新密码",
                        "en": "Enter new password again",
                        "vi": "Nhập mật khẩu mới lại lần nữa",
                        "zh-Hant": "請再次輸入新密碼",
                        "id": "Masukkan Kata sandi baru lagi",
                        "es": "Ingrese la nueva contraseña nuevamente",
                        "pt-BR": "Digite a nova senha novamente"
                    },
                    "oldPasswordNo": {
                        "zh": "输入的原密码不正确",
                        "en": "The old password entered is not correct",
                        "vi": "Mật khẩu cũ bạn nhập vào không đúng",
                        "zh-Hant": "輸入的原密碼不正確",
                        "id": "Kata sandi lama anda salah",
                        "es": "La contraseña anterior ingresada no es correcta",
                        "pt-BR": "A senha antiga digitada não está correta"
                    },
                    "enterOldPassword": {
                        "zh": "请输入原密码",
                        "en": "Enter old password",
                        "vi": "Nhập mật khẩu cũ",
                        "zh-Hant": "請輸入原密碼",
                        "id": "Masukkan Kata sandi yang lama",
                        "es": "Ingrese la contraseña vieja",
                        "pt-BR": "Digite sua senha antiga"
                    },
                    "phoneNumSetSucc": {
                        "zh": "手机号码修改成功",
                        "en": "The phone number was modified successfully",
                        "vi": "Số điện thoại đã được sửa đổi thành công",
                        "zh-Hant": "手機號碼修改成功",
                        "id": "Nomor telepon berhasil diubah ",
                        "es": "El número de teléfono fue modificado con éxito",
                        "pt-BR": "O número de telefone foi modificado com sucesso"
                    },
                    "verificationCodeNo": {
                        "zh": "验证码不正确",
                        "en": "The verification code is not correct",
                        "vi": "Mã xác nhận không đúng",
                        "zh-Hant": "驗證碼不正確",
                        "id": "Kode Verifikasi salah",
                        "es": "El código de verificación no es correcto",
                        "pt-BR": "O código de verificação não está correto"
                    },
                    "phoneNumberExists": {
                        "zh": "手机号码已存在",
                        "en": "The phone number already exists",
                        "vi": "Số điện thoại đã tồn tại",
                        "zh-Hant": "手機號碼已存在",
                        "id": "Nomor telepon telah terdaftar",
                        "es": "El número de teléfono ya existe.",
                        "pt-BR": "O número de telefone já está cadastrado"
                    },
                    "phoneNumNo": {
                        "zh": "手机号码格式不正确",
                        "en": "Incorrect format of phone number",
                        "vi": "Định dạng số điện thoại không đúng",
                        "zh-Hant": "手機號碼格式不正確",
                        "id": "Format Nomor telepon salah",
                        "es": "Formato incorrecto del número de teléfono",
                        "pt-BR": "Formato incorreto de número de telefone"
                    },
                    "enterNewPhoneNum": {
                        "zh": "请输入新手机号码",
                        "en": "Enter new phone number",
                        "vi": "Nhập vào số điện thoại mới",
                        "zh-Hant": "請輸入新手機號碼",
                        "id": "Masukkan Nomor telepon baru",
                        "es": "Introduce un nuevo número de teléfono",
                        "pt-BR": "Digite novo numero de telefone"
                    },
                    "carousel": {
                        "zh": "顶部轮播图",
                        "en": "Carousel",
                        "vi": "Băng chuyền",
                        "zh-Hant": "頂部輪播圖",
                        "id": "Karosel",
                        "es": "Carrusel",
                        "pt-BR": "Carrossel"
                    },
                    "popUpWindow": {
                        "zh": "弹窗图",
                        "en": "Pop-up window",
                        "vi": "Cửa sổ bật lên",
                        "zh-Hant": "彈窗圖",
                        "id": "Tampilan Jendela ",
                        "es": "Ventana emergente",
                        "pt-BR": "Janela de pop-up"
                    },
                    "tip8": {
                        "zh": "对不起,目前仅支持png和jpg格式图片!",
                        "en": "Sorry, currently only support PNG and JPG format pictures!",
                        "vi": "Xin lỗi, hiện tại chỉ hỗ trợ hình ảnh định dạng PNG và JPG!",
                        "zh-Hant": "對不起,目前僅支持png和jpg格式圖片!",
                        "id": "Maaf, saat ini hanya mendukung format PNG dan JPG ",
                        "es": "Lo sentimos, actualmente sólo soporta imágenes en formato PNG y JPG!",
                        "pt-BR": "Desculpe, atualmente só suportam imagens em formato PNG e JPG!"
                    },
                    "tip9": {
                        "zh": "对不起，暂时不支持大于2M的文件，请压缩后再试!",
                        "en": "Sorry, we do not support files larger than 2M, please try again after compression!",
                        "vi": "Rất tiếc, chúng tôi không hỗ trợ tệp lớn hơn 2M, vui lòng thử lại sau khi nén!",
                        "zh-Hant": "對不起，暫時不支持大於2M的文件，請壓縮後再試!",
                        "id": " Maaf, hanya mendukung ukuran dibawah 2MB, silahkan coba kembali ",
                        "es": "Lo sentimos, no admitimos archivos mayores de 2M, ¡Inténtelo de nuevo tras comprimir!",
                        "pt-BR": "Desculpe, não suportamos arquivos maiores que 2M, por favor tente novamente após a compactação!"
                    },
                    "failModifyUsername": {
                        "zh": "昵称修改失败",
                        "en": "Fail to modify the username",
                        "vi": "Không sửa đổi tên người dùng",
                        "zh-Hant": "昵稱修改失敗",
                        "id": " Gagal mengubah nama pengguna ",
                        "es": "Error modificar nombre de usuario",
                        "pt-BR": "Não modificar o nome de usuário"
                    },
                    "error": {
                        "zh": "错误提示",
                        "en": "Error",
                        "vi": "Lỗi",
                        "zh-Hant": "錯誤提示",
                        "id": "Terjadi kesalahan",
                        "es": "Error",
                        "pt-BR": "Erro"
                    },
                    "tip10": {
                        "zh": "您已是高手，不能再修改头像",
                        "en": "You already are a master, cannot modify the profile photo",
                        "vi": "Bạn đã là bậc thầy, không thể sửa đổi hình ảnh đại diện",
                        "zh-Hant": "您已是高手，不能再修改頭像",
                        "id": "Anda telah menjadi Master, tidak dapat mengubah foto profil",
                        "es": "Ya eres un master, no puedes modificar la foto de perfil.",
                        "pt-BR": "Você já é um mestre, não pode modificar a foto do perfil"
                    },
                    "tip11": {
                        "zh": "您已是高手，暂不能修改基本资料",
                        "en": "You already are a master, cannot modify the profile photo",
                        "vi": "Bạn đã là bậc thầy, không thể sửa đổi hình ảnh đại diện",
                        "zh-Hant": "您已是高手，暫不能修改基本資料",
                        "id": " Anda telah menjadi Master, tidak dapat mengubah foto profil ",
                        "es": "Ya eres un master, no puedes modificar la foto de perfil.",
                        "pt-BR": "Você já é um mestre, não pode modificar a foto do perfil"
                    },
                    "bindNewEmailSucc": {
                        "zh": "新邮箱绑定成功",
                        "en": "successful to bind the email",
                        "vi": "Hoàn thành đăng kí email",
                        "zh-Hant": "新郵箱邦定成功",
                        "id": " email Berhasil didaftarkan",
                        "es": "Éxito asociar email",
                        "pt-BR": "bem sucedido para ligar o email"
                    },
                    "tip12": {
                        "zh": "您上传的身份证照片审核被拒绝，请重新填写相关信息，被拒原因请查看系统消息。",
                        "en": "The verification of your id photo was rejected. Please fill in the related information again and check the system reminder for the reason of rejection.",
                        "vi": "Xác minh ảnh id của bạn đã bị từ chối. Vui lòng điền lại thông tin liên quan và kiểm tra lời nhắc hệ thống vì lý do từ chối.",
                        "zh-Hant": "您上傳的身份證照片審核被拒絕，請重新填寫相關信息，被拒原因請查看系統消息。",
                        "id": " Verifikasi foto anda ditolak. Mohon periksa kembali data yang dimasukkan dan pastikan anda telah membaca alasan penolakan. ",
                        "es": "La verificación de su foto en id ha sido rechazada. Vuelva a completar la información relacionada y verifique en el sistema para conocer el motivo del rechazo",
                        "pt-BR": "A confirmação da sua foto de identificação foi rejeitada. Por favor, preencha as informações relacionadas novamente e verifique o lembrete do sistema por motivo de rejeição."
                    },
                    "verificationSucc_1": {
                        "zh": " ",
                        "en": "The ",
                        "vi": "Đây ",
                        "zh-Hant": " ",
                        "id": "Itu",
                        "es": "La ",
                        "pt-BR": "O "
                    },
                    "verificationSucc_2": {
                        "zh": "认证信息提交成功",
                        "en": " verification information was submitted successfully",
                        "vi": " thông tin xác nhận đã đc gửi thành công",
                        "zh-Hant": "認證信息提交成功",
                        "id": "Data verifikasi telah dikirim",
                        "es": " información verificación ha sido enviada con éxito",
                        "pt-BR": " as informações de verificação foram enviadas com sucesso"
                    },
                    "mainlandResidentIdentityCard": {
                        "zh": "大陆居民身份证",
                        "en": "Mainland resident identity card",
                        "vi": "Chứng minh nhân dân đại lục",
                        "zh-Hant": "大陸居民身份證",
                        "id": "KTP",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Cartão de identidade de residente do continente"
                    },
                    "gAPermit": {
                        "zh": "港澳居民来往内地通行证",
                        "en": "Mainland Travel Permit for Hong Kong and Macao Residents",
                        "vi": "Giấy phép du lịch đại lục cho cư dân Hồng Kông và Macao",
                        "zh-Hant": "港澳居民來往內地通行證",
                        "id": " Izin wisata ke Hongkong dan Macao ",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Licença de viagem para residentes de Hong Kong e Macao"
                    },
                    "tPermit": {
                        "zh": "台湾居民来往大陆通行证 ",
                        "en": "Mainland travel permit for Taiwan residents",
                        "vi": "Giấy phép du lịch đại lục cho cư dân Đài Loan ",
                        "zh-Hant": "臺灣居民來往大陸通行證 ",
                        "id": " Izin wisata ke Taiwan ",
                        "es": "Tarjeta identidad residente País",
                        "pt-BR": "Licença de viagem para residentes de Taiwan"
                    },
                    "passport": {
                        "zh": "护照",
                        "en": "Passport",
                        "vi": "Hộ chiếu",
                        "zh-Hant": "護照",
                        "id": "Paspor",
                        "es": "Pasaporte",
                        "pt-BR": "Passaporte"
                    },
                    "driverLicense": {
                        "zh": "驾驶证",
                        "en": "Driver license",
                        "vi": "Bằng lái xe",
                        "zh-Hant": "駕駛證",
                        "id": "SIM",
                        "es": "Licencia conducir",
                        "pt-BR": "Carteira de motorista"
                    },
                    "iDCard": {
                        "zh": "身份证",
                        "en": "ID card",
                        "vi": "Chứng Minh Nhân Dân",
                        "zh-Hant": "身份證",
                        "id": "KTP",
                        "es": "Tarjeta ID",
                        "pt-BR": "Cartão de identificação"
                    },
                    "tip13": {
                        "zh": "您的年龄未满18周岁，不建议您进行外汇交易。",
                        "en": "You are under the age of 18 years old, foreign exchange transactions are not recommended.",
                        "vi": "Bạn dưới 18 tuổi, giao dịch ngoại hối không được khuyến khích.",
                        "zh-Hant": "您的年齡未滿18周歲，不建議您進行外匯交易。",
                        "id": "Anda masih berumur dibawah 18 tahun, tidak dapat melakukan transaksi valuta asing ",
                        "es": "Es menor de 18 años, las transacciones de foreign exchange no son adecuadas.",
                        "pt-BR": "Você tem menos de 18 anos, transações de câmbios internacionais não são recomendadas"
                    },
                    "idNumExists": {
                        "zh": "身份证号已存在",
                        "en": "ID number already exists",
                        "vi": "Số chứng minh nhân dân đã tồn tại",
                        "zh-Hant": "身份證號已存在",
                        "id": "Nomor identitas telah terdaftar",
                        "es": "Número ID ya existe",
                        "pt-BR": "Número de identificação já existe"
                    },
                    "submitSuccess": {
                        "zh": "提交成功",
                        "en": "Submit successfully",
                        "vi": "Đã gửi thành công",
                        "zh-Hant": "提交成功",
                        "id": "Berhasil terkirim",
                        "es": "Enviar éxito",
                        "pt-BR": "Enviar com sucesso"
                    },
                    "tip14": {
                        "zh": "英文昵称为2-18位英文字母",
                        "en": "Username can only contain 2-18 letters",
                        "vi": "Tên người dung chỉ bao gồm từ 2 đến 18 chữ cái",
                        "zh-Hant": "英文昵稱為2-18位英文字母",
                        "id": "Nama pengguna hanya dapat mengandung 2-18 huruf",
                        "es": "Nombre usuario sólo puede contener 2-18 letras",
                        "pt-BR": "Nome de usuário só pode conter de 2-18 letras"
                    },
                    "stateRegion": {
                        "zh": "省/市",
                        "en": "State/Region",
                        "vi": "Bang/Vùng",
                        "zh-Hant": "省/市",
                        "id": "Daerah/Provinsi",
                        "es": "Estado/Región",
                        "pt-BR": "Estado/região"
                    },
                    "regionCities": {
                        "zh": "市/区",
                        "en": "City",
                        "vi": "Thành phố",
                        "zh-Hant": "市/區",
                        "id": "Kota",
                        "es": "Ciudad",
                        "pt-BR": "Cidade"
                    },
                    "detailedAddress": {
                        "zh": "请输入您的详细地址（与身份证保持一致）",
                        "en": "Please enter detailed address (same as ID card)",
                        "vi": "Vui lòng nhập Địa chỉ cụ thể (Địa chỉ trên chứng minh thư)",
                        "zh-Hant": "請輸入您的詳細地址（與身份證保持一致）",
                        "id": "Silakan masuk alamat lengkap (Sesuai ID)",
                        "es": "Por favor ingrese dirección detallada(igual tarjeta ID)",
                        "pt-BR": "Por favor insira o endereço"
                    },
                    "zIPCode": {
                        "zh": "邮编",
                        "en": "ZIP Code",
                        "vi": "ZIP code",
                        "zh-Hant": "郵編",
                        "id": "Kode Pos",
                        "es": "Código ZIP",
                        "pt-BR": "CEP"
                    },
                    "enterStateRegion": {
                        "zh": "请输入您的省/市",
                        "en": "Please enter state/region",
                        "vi": "Vui lòng nhập bang/vùng",
                        "zh-Hant": "請輸入您的省/市",
                        "id": "Silakan masuk daerah/provinsi",
                        "es": "Por favor ingrese estado/región",
                        "pt-BR": "Por favor insira estado/região"
                    },
                    "enterRegionCities": {
                        "zh": "请输入您的市/区",
                        "en": "Please enter city",
                        "vi": "Vui lòng nhập thành phố",
                        "zh-Hant": "請輸入您的市/區",
                        "id": "Silakan masuk kota",
                        "es": "Por favor ingrese ciudad",
                        "pt-BR": "Por favor insira a cidade"
                    },
                    "enterZIPCode": {
                        "zh": "请输入邮政编码",
                        "en": "ZIP Code",
                        "vi": "ZIP code",
                        "zh-Hant": "请输入郵政編碼",
                        "id": "Kode Pos",
                        "es": "Código ZIP",
                        "pt-BR": "CEP"
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
                        "pt-BR": "Agente"
                    },
                    "completeInformation": {
                        "zh": "完善资料",
                        "en": "Complete information",
                        "vi": "Hoàn thành thông tin",
                        "zh-Hant": "完善資料",
                        "id": "Lengkapi informasi",
                        "es": "Complete información",
                        "pt-BR": "Informação completa"
                    },
                    "tradingExperience": {
                        "zh": "投资信息确认",
                        "en": "Questionnaire",
                        "vi": "Bảng câu hỏi",
                        "zh-Hant": "投資信息確認",
                        "id": "Daftar Pertanyaan",
                        "es": "Cuestionario",
                        "pt-BR": "Questionário"
                    },
                    "iDVerification": {
                        "zh": "实名认证",
                        "en": "ID Verification",
                        "vi": "Xác nhận ID",
                        "zh-Hant": "實名認證",
                        "id": "Verifikasi ID",
                        "es": "Verificación ID",
                        "pt-BR": "ID de verificação"
                    },
                    "activeSucc": {
                        "zh": "成功激活",
                        "en": "Successful activation",
                        "vi": "Kích hoạt thành công",
                        "zh-Hant": "成功激活",
                        "id": "Aktivasi Sukses",
                        "es": "Activación éxito",
                        "pt-BR": "Ativação bem sucedida"
                    },
                    "activeAgent": {
                        "zh": "激活代理商",
                        "en": "Activate agents",
                        "vi": "Kích hoạt các đại lý",
                        "zh-Hant": "激活代理商",
                        "id": "Aktifkan Agen",
                        "es": "Activar agentes",
                        "pt-BR": "Ativar Agentes"
                    },
                    "activeAgentFlow": {
                        "zh": "激活代理商产品流程",
                        "en": "Activate the agent product process",
                        "vi": "Kích hoạt quá trình sản phẩm đại lý",
                        "zh-Hant": "激活代理商產品流程",
                        "id": "Aktivasi proses produk agen",
                        "es": "Activar el proceso producto agente",
                        "pt-BR": "Ativar o processo do produto do agente"
                    },
                    "continueCertification": {
                        "zh": "继续认证",
                        "en": "Continuing certification",
                        "vi": "Tiếp tục xác nhận",
                        "zh-Hant": "繼續認證",
                        "id": "Lanjutkan sertifikasi",
                        "es": "Continuar certificación",
                        "pt-BR": "Certificação contínua"
                    },
                    "submittedSucc": {
                        "zh": "信息提交成功",
                        "en": "Information submitted successfully",
                        "vi": "Đã gửi thông tin thành công",
                        "zh-Hant": "信息提交成功",
                        "id": "Informasi berhasil dikirimkan",
                        "es": "Información enviada éxito",
                        "pt-BR": "Informações enviadas com sucesso"
                    },
                    "fillNameCoun": {
                        "zh": "请填写姓名和国家",
                        "en": "Please fill in your name and country",
                        "vi": "Vui lòng điền tên và quốc gia",
                        "zh-Hant": "請填寫姓名和國家",
                        "id": "Silahkan isi nama dan negara",
                        "es": "Por favor, introduzca su nombre y país",
                        "pt-BR": "Por favor, preencha seu nome e país"
                    },
                    "fillEmailPhone": {
                        "zh": "请填写邮箱或手机号",
                        "en": "Please fill in your email or phone number",
                        "vi": "Vui lòng điền vào email hoặc số điện thoại",
                        "zh-Hant": "請填寫郵箱或手機號",
                        "id": "Silahkan isi email dan nomor telepon",
                        "es": "Por favor, introduzca su email o número de teléfono",
                        "pt-BR": "Por favor, preencha o seu email ou número de telefone"
                    },
                    "unverified": {
                        "zh": "（未认证）",
                        "en": "(Unverified)",
                        "vi": "(Không xác nhận)",
                        "zh-Hant": "（未認證）",
                        "id": "(Belum verifikasi)",
                        "es": "(No verificado)",
                        "pt-BR": "(Não verificado)"
                    },
                    "rejected": {
                        "zh": "（已拒绝）",
                        "en": "(Rejected)",
                        "vi": "(Đã từ chối)",
                        "zh-Hant": "（已拒絕）",
                        "id": "(ditolak)",
                        "es": "(Rechazado)",
                        "pt-BR": "(Rejeitado)"
                    },
                    "pending": {
                        "zh": "（需要审核）",
                        "en": "(Pending)",
                        "vi": "(Chờ xử lý)",
                        "zh-Hant": "（需要審核）",
                        "id": "(Pending)",
                        "es": "(Pendiente)",
                        "pt-BR": "(Pendente)"
                    },
                    "approved": {
                        "zh": "（已通过）",
                        "en": "(Approved)",
                        "vi": "(Chấp nhận)",
                        "zh-Hant": "（已通過）",
                        "id": "(disetujui)",
                        "es": "(Aprobado)",
                        "pt-BR": "(Aprovado)"
                    },
                    "unknown": {
                        "zh": "（未知状态）",
                        "en": "(Unknown)",
                        "vi": "(Không rõ)",
                        "zh-Hant": "（未知狀態）",
                        "id": "(tidak diketahui)",
                        "es": "(Desconocido)",
                        "pt-BR": "(Desconhecido)"
                    },
                    "certificateExpired": {
                        "zh": "(证件过期)",
                        "en": "(Certificate expired)",
                        "vi": "(Hết hạn giấy tờ)",
                        "zh-Hant": "（證件過期）",
                        "id": "(Dokumen kadaluwarsa)",
                        "es": "(Certificado expirado)",
                        "pt-BR": "(Certificado expirado)"
                    }
                },
                "noMetNeed": {
                    "zh": "未达成",
                    "en": "unfinished",
                    "vi": "không đạt",
                    "zh-Hant": "未達成",
                    "id": "belum selesai",
                    "es": "no terminado",
                    "pt-BR": "não terminado"
                },
                "date": {
                    "zh": "日期",
                    "en": "Date",
                    "vi": "Ngày",
                    "zh-Hant": "日期",
                    "id": "Tanggal",
                    "es": "Fecha",
                    "pt-BR": "Data"
                },
                "dateM": {
                    "zh": "日期：",
                    "en": "Date: ",
                    "vi": "Ngày: ",
                    "zh-Hant": "日期：",
                    "id": "Tanggal: ",
                    "es": "Fecha: ",
                    "pt-BR": "Data: "
                },
                "types": {
                    "zh": "类型",
                    "en": "Types",
                    "vi": "Loại",
                    "zh-Hant": "類型",
                    "id": "Tipe",
                    "es": "Tipos",
                    "pt-BR": "Tipos"
                },
                "amount": {
                    "zh": "金额",
                    "en": "Amount",
                    "vi": "Số tiền",
                    "zh-Hant": "金額",
                    "id": "Jumlah",
                    "es": "Importe",
                    "pt-BR": "Montante"
                },
                "state": {
                    "zh": "状态",
                    "en": "State",
                    "vi": "Trạng thái",
                    "zh-Hant": "狀態",
                    "id": "Status",
                    "es": "Estado",
                    "pt-BR": "Estado"
                },
                "balance": {
                    "zh": "余额",
                    "en": "Balance",
                    "vi": "Số dư",
                    "zh-Hant": "余額",
                    "id": "Saldo",
                    "es": "Balance",
                    "pt-BR": "Balanço"
                },
                "delete": {
                    "zh": "删除",
                    "en": "Delete",
                    "vi": "Xóa",
                    "zh-Hant": "刪除",
                    "id": "Hapus",
                    "es": "Borrar",
                    "pt-BR": "Deletar"
                },
                "copy": {
                    "zh": "复制",
                    "en": "Follow",
                    "vi": "Sao chép",
                    "zh-Hant": "復制",
                    "id": "Ikuti",
                    "es": "Seguir",
                    "pt-BR": "Seguir"
                },
                "noData": {
                    "zh": "暂无数据！",
                    "en": "No data!",
                    "vi": "Không dữ liệu!",
                    "zh-Hant": "暫無數據！",
                    "id": "Data tidak tersedia!",
                    "es": "¡No data!",
                    "pt-BR": "Sem dados!"
                },
                "submit": {
                    "zh": "提交",
                    "en": "SUBMIT",
                    "vi": "GỬI ĐI",
                    "zh-Hant": "提交",
                    "id": "KIRIM",
                    "es": "ENVIAR",
                    "pt-BR": "Enviar"
                },
                "confirm": {
                    "zh": "确定",
                    "en": "Submit",
                    "vi": "Gửi đi",
                    "zh-Hant": "確定",
                    "id": "Kirim",
                    "es": "Enviar",
                    "pt-BR": "Enviar"
                },
                "confirm2": {
                    "zh": "确定",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "確定",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar"
                },
                "back": {
                    "zh": "返回",
                    "en": "Back",
                    "vi": "Quay trở lại",
                    "zh-Hant": "返回",
                    "id": "Kembali",
                    "es": "Atrás",
                    "pt-BR": "Voltar"
                },
                "edit": {
                    "zh": "修改",
                    "en": "Edit",
                    "vi": "Sửa đổi",
                    "zh-Hant": "修改",
                    "id": "Edit",
                    "es": "Editar",
                    "pt-BR": "Editar"
                },
                "add": {
                    "zh": "添加",
                    "en": "Add",
                    "vi": "Thêm vào",
                    "zh-Hant": "添加",
                    "id": "Tambah",
                    "es": "Añadir",
                    "pt-BR": "Adicionar"
                },
                "cancel": {
                    "zh": "取消",
                    "en": "Cancel",
                    "vi": "Hủy",
                    "zh-Hant": "取消",
                    "id": "Batalkan",
                    "es": "Cancelar",
                    "pt-BR": "Cancelar"
                },
                "continue": {
                    "zh": "继续",
                    "en": "Continue",
                    "vi": "Tiếp tục",
                    "zh-Hant": "繼續",
                    "id": "Lanjutkan",
                    "es": "Continuar",
                    "pt-BR": "Continuar"
                },
                "finish": {
                    "zh": "完成",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "完成",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar"
                },
                "search": {
                    "zh": "搜索",
                    "en": "Search",
                    "vi": "Tìm kiếm",
                    "zh-Hant": "搜索",
                    "id": "Cari",
                    "es": "Buscar",
                    "pt-BR": "Busca"
                },
                "pleaseSelect": {
                    "zh": "请选择",
                    "en": "Please select",
                    "vi": "Vui lòng chọn",
                    "zh-Hant": "請選擇",
                    "id": "Silahkan pilih",
                    "es": "Por favor, seleccione",
                    "pt-BR": "Por favor, selecione"
                },
                "systemPrompt": {
                    "zh": "系统提示",
                    "en": "The system prompt",
                    "vi": "Lời nhắc hệ thống",
                    "zh-Hant": "系統提示",
                    "id": "Pemberitahuan Sistem",
                    "es": "Aviso sistema ",
                    "pt-BR": "O prompt do sistema"
                },
                "systemPromptM": {
                    "zh": "系统提示：",
                    "en": "The system prompt: ",
                    "vi": "Lời nhắc hệ thống: ",
                    "zh-Hant": "系統提示：",
                    "id": " Pemberitahuan Sistem ",
                    "es": "Aviso del sistema: ",
                    "pt-BR": "O prompt do sistema "
                },
                "pleaseWait": {
                    "zh": "请稍等",
                    "en": "Please wait",
                    "vi": "Vui lòng chờ",
                    "zh-Hant": "請稍等",
                    "id": "Mohon Menunggu",
                    "es": "Por favor, espere",
                    "pt-BR": "Por favor, espere"
                },
                "before": {
                    "zh": "过去",
                    "en": "last",
                    "vi": "trước",
                    "zh-Hant": "過去",
                    "id": "terakhir",
                    "es": "último",
                    "pt-BR": "último"
                },
                "yes": {
                    "zh": "是",
                    "en": "Yes",
                    "vi": "Đồng ý",
                    "zh-Hant": "是",
                    "id": "Ya",
                    "es": "Sí",
                    "pt-BR": "Sim"
                },
                "no": {
                    "zh": "否",
                    "en": "No",
                    "vi": "Không",
                    "zh-Hant": "否",
                    "id": "Tidak",
                    "es": "No",
                    "pt-BR": "Não"
                },
                "submitting": {
                    "zh": "提交中",
                    "en": "Submitting",
                    "vi": "Đang gửi đi",
                    "zh-Hant": "提交中",
                    "id": "Sedang mengirim",
                    "es": "Enviando",
                    "pt-BR": "Enviando"
                },
                "name": {
                    "zh": "姓名",
                    "en": "Name",
                    "vi": "Tên",
                    "zh-Hant": "姓名",
                    "id": "Nama",
                    "es": "Nombre",
                    "pt-BR": "Nome"
                },
                "or": {
                    "zh": "或",
                    "en": "Or",
                    "vi": "Hoặc",
                    "zh-Hant": "或",
                    "id": "Atau",
                    "es": "or",
                    "pt-BR": "ou"
                },
                "revocation": {
                    "zh": "撤销",
                    "en": "withdrawal cancelation",
                    "vi": "Hủy rút tiền",
                    "zh-Hant": "撤銷",
                    "id": "Pembatalan penarikan",
                    "es": "cancelación reembolso",
                    "pt-BR": "Cancelamento de saque"
                },
                "select": {
                    "zh": "选择",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "選擇",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar"
                },
                "audit": {
                    "zh": "审核",
                    "en": "Audit",
                    "vi": "Kiểm toán",
                    "zh-Hant": "審核",
                    "id": "Pemeriksaan",
                    "es": "Auditar",
                    "pt-BR": "Auditar"
                },
                "prompt": {
                    "zh": "提示",
                    "en": "Prompt",
                    "vi": "Lời nhắc",
                    "zh-Hant": "提示",
                    "id": "Pemberitahuan",
                    "es": "Aviso",
                    "pt-BR": "Resposta"
                },
                "dollars": {
                    "zh": "美金",
                    "en": "Dollars",
                    "vi": "Đô la",
                    "zh-Hant": "美金",
                    "id": "Dolar",
                    "es": "Dólares",
                    "pt-BR": "Dólares"
                },
                "second": {
                    "zh": "秒",
                    "en": " Second",
                    "vi": " Thứ hai",
                    "zh-Hant": "秒",
                    "id": "Kedua",
                    "es": " Segundo",
                    "pt-BR": " Segundo"
                },
                "weeks": {
                    "zh": "周",
                    "en": " weeks",
                    "vi": " Tuần",
                    "zh-Hant": "周",
                    "id": "Mingguan",
                    "es": " semanas",
                    "pt-BR": "  semanas"
                },
                "month": {
                    "zh": "月",
                    "en": " month",
                    "vi": " Tháng",
                    "zh-Hant": "月",
                    "id": "Bulan",
                    "es": " mes",
                    "pt-BR": "  mês"
                },
                "year": {
                    "zh": "年",
                    "en": " year",
                    "vi": " Năm",
                    "zh-Hant": "年",
                    "id": "Tahun",
                    "es": " año",
                    "pt-BR": "  ano"
                },
                "day": {
                    "zh": "天",
                    "en": " Day",
                    "vi": " Ngày",
                    "zh-Hant": "天",
                    "id": "Hari",
                    "es": " Día",
                    "pt-BR": "  Dia"
                },
                "hour": {
                    "zh": "时",
                    "en": " Hour",
                    "vi": " Giờ",
                    "zh-Hant": "時",
                    "id": "Giờ",
                    "es": " Hora",
                    "pt-BR": "  Hora"
                },
                "Ahour": {
                    "zh": "小时",
                    "en": " Hour",
                    "vi": " Giờ",
                    "zh-Hant": "小時",
                    "id": "Jam",
                    "es": " Hora",
                    "pt-BR": "  Hora"
                },
                "minute": {
                    "zh": "分",
                    "en": " Minute",
                    "vi": " Phút",
                    "zh-Hant": "分",
                    "id": "Menit",
                    "es": " Minuto",
                    "pt-BR": "  Minuto"
                },
                "just": {
                    "zh": "刚刚",
                    "en": " just",
                    "vi": " Bây giờ",
                    "zh-Hant": "剛剛",
                    "id": "Hanya",
                    "es": " sólo",
                    "pt-BR": "  somente"
                },
                "areaCode": {
                    "zh": "区号",
                    "en": "Area",
                    "vi": "Khu vực",
                    "zh-Hant": "區號",
                    "id": "Area",
                    "es": "Area",
                    "pt-BR": "Área"
                },
                "provinces": {
                    "zh": "省份",
                    "en": "Provinces",
                    "vi": "Tỉnh thành",
                    "zh-Hant": "省份",
                    "id": "Provinsi",
                    "es": "Provincia",
                    "pt-BR": "Regiões"
                },
                "city": {
                    "zh": "城市",
                    "en": "City",
                    "vi": "Thành phố",
                    "zh-Hant": "城市",
                    "id": "Kota",
                    "es": "Ciudad",
                    "pt-BR": "Cidade"
                },
                "unknownError": {
                    "zh": "未知错误，请联系管理员",
                    "en": "Unknown error, please contact administrator",
                    "vi": "Lỗi không xác định, vui lòng liên hệ với quản trị viên",
                    "zh-Hant": "未知錯誤，請聯系管理員",
                    "id": "Terjadi kesalahan, silahkan hubungi pengelola ",
                    "es": "Error desconocido, por favor, contacte administrador",
                    "pt-BR": "Erro desconhecido, por favor contate o administrador"
                },
                "gender": {
                    "zh": "性别",
                    "en": "Gender",
                    "vi": "Giới tính",
                    "zh-Hant": "性別",
                    "id": "Jenis Kelamin ",
                    "es": "Género",
                    "pt-BR": "Gênero"
                },
                "query": {
                    "zh": "查询",
                    "en": "Query",
                    "vi": "Truy vấn",
                    "zh-Hant": "查詢",
                    "id": "Daftar Pertanyaan",
                    "es": "Consulta",
                    "pt-BR": "Inquerir"
                },
                "loading": {
                    "zh": "加载中",
                    "en": "Loading",
                    "vi": "Đang tải",
                    "zh-Hant": "加載中",
                    "id": "Memuat",
                    "es": "Cargando",
                    "pt-BR": "Carregando"
                },
                "noRemember": {
                    "zh": "暂无提醒！",
                    "en": "No remember!",
                    "vi": "Không nhớ!",
                    "zh-Hant": "暫無提醒！",
                    "id": "Tidak ingat!",
                    "es": "¡No recuerdo!",
                    "pt-BR": "Não lembro!"
                },
                "unfold": {
                    "zh": "展开",
                    "en": "Unfold",
                    "vi": "Mở ra",
                    "zh-Hant": "展開",
                    "id": "Membuka",
                    "es": "Desplegar",
                    "pt-BR": "Desdobrar"
                },
                "fold": {
                    "zh": "收起",
                    "en": "Fold",
                    "vi": "Gập lại",
                    "zh-Hant": "收起",
                    "id": "Tutup",
                    "es": "Ver menos",
                    "pt-BR": "Dobra"
                },
                "networkError": {
                    "zh": "网络错误",
                    "en": "Network error",
                    "vi": "Lỗi mạng",
                    "zh-Hant": "網酪錯誤",
                    "id": "Jaringan bermasalah",
                    "es": "Error red",
                    "pt-BR": "Erro na rede"
                },
                "signOut": {
                    "zh": "退出登录",
                    "en": "Sign out",
                    "vi": "Thoát",
                    "zh-Hant": "退出登錄",
                    "id": "Keluar",
                    "es": "Salir",
                    "pt-BR": "Sair"
                },
                "type": {
                    "zh": "类型",
                    "en": "Type",
                    "vi": "Loại",
                    "zh-Hant": "類型",
                    "id": "Tipe",
                    "es": "Tipo",
                    "pt-BR": "Tipo"
                },
                "account": {
                    "zh": "账号",
                    "en": "account",
                    "vi": "tài khoản",
                    "zh-Hant": "帳號",
                    "id": "Akun",
                    "es": "cuenta",
                    "pt-BR": "Conta"
                },
                "male": {
                    "zh": "男",
                    "en": "Male",
                    "vi": "Nam",
                    "zh-Hant": "男",
                    "id": "Laki-Laki",
                    "es": "Hombre ",
                    "pt-BR": "Masculino"
                },
                "female": {
                    "zh": "女",
                    "en": "Female",
                    "vi": "Nữ",
                    "zh-Hant": "女",
                    "id": "Perempuan",
                    "es": "Mujer",
                    "pt-BR": "Feminino"
                },
                "ok": {
                    "zh": "好的",
                    "en": "Confirm",
                    "vi": "Xác nhận",
                    "zh-Hant": "好的",
                    "id": "Konfirmasi",
                    "es": "Confirmar",
                    "pt-BR": "Confirmar"
                },
                "default": {
                    "zh": "默认",
                    "en": "Default",
                    "vi": "Mặc định",
                    "zh-Hant": "默認",
                    "id": " Default ",
                    "es": "Por defecto",
                    "pt-BR": "Padrão"
                },
                "lot": {
                    "zh": "手",
                    "en": " lots",
                    "vi": " lots",
                    "zh-Hant": "手",
                    "id": "lot",
                    "es": " lotes",
                    "pt-BR": " lotes"
                },
                "lot2": {
                    "zh": "笔",
                    "en": " orders",
                    "vi": " lệnh",
                    "zh-Hant": "筆",
                    "id": "Transaksi",
                    "es": " órdenes",
                    "pt-BR": " ordens"
                },
                "next": {
                    "zh": "下一页",
                    "en": "Next",
                    "vi": "Tiếp theo",
                    "zh-Hant": "下壹頁",
                    "id": "Selanjutnya",
                    "es": "Siguiente",
                    "pt-BR": "Próximo"
                },
                "previous": {
                    "zh": "上一页",
                    "en": "Previous",
                    "vi": "Trước đó",
                    "zh-Hant": "上壹頁",
                    "id": "Sebelumnya",
                    "es": "Previo",
                    "pt-BR": "Anterior"
                },
                "download": {
                    "zh": "下载",
                    "en": "Download",
                    "vi": "Tải về",
                    "zh-Hant": "下載",
                    "id": "Unduh",
                    "es": "Descargar",
                    "pt-BR": "download"
                },
                "getCodeAgain": {
                    "zh": "获取语音验证码",
                    "en": "Get code again",
                    "vi": "Nhận lại mã",
                    "zh-Hant": "獲取語音驗證碼",
                    "id": "Dapatkan kode",
                    "es": "Obtener código otra vez",
                    "pt-BR": "Obter código novamente"
                },
                "getVoiceCodeAgain": {
                    "zh": "再次获取语音",
                    "en": "Get voice code again",
                    "vi": "Nhận lại mã giọng nói",
                    "zh-Hant": "再次獲取語音",
                    "id": "Dapatkan kode suara",
                    "es": "Obtener código voz otra vez",
                    "pt-BR": "Obter o código de voz novamente"
                },
                "january": {
                    "zh": "一月",
                    "en": "Jan.",
                    "vi": "Tháng 1",
                    "zh-Hant": "壹月",
                    "id": "Januari",
                    "es": "Ene.",
                    "pt-BR": "Jan."
                },
                "february": {
                    "zh": "二月",
                    "en": "Feb.",
                    "vi": "Tháng 2",
                    "zh-Hant": "二月",
                    "id": "Februari",
                    "es": "Feb.",
                    "pt-BR": "Fev."
                },
                "march": {
                    "zh": "三月",
                    "en": "Mar.",
                    "vi": "Tháng 3",
                    "zh-Hant": "三月",
                    "id": "Maret",
                    "es": "Mar.",
                    "pt-BR": "Mar."
                },
                "april": {
                    "zh": "四月",
                    "en": "Apr.",
                    "vi": "Tháng 4",
                    "zh-Hant": "四月",
                    "id": "April",
                    "es": "Abr.",
                    "pt-BR": "Abr."
                },
                "may": {
                    "zh": "五月",
                    "en": "May",
                    "vi": "Tháng 5",
                    "zh-Hant": "五月",
                    "id": "Mei",
                    "es": "May.",
                    "pt-BR": "Mai."
                },
                "june": {
                    "zh": "六月",
                    "en": "Jun.",
                    "vi": "Tháng 6",
                    "zh-Hant": "六月",
                    "id": "Juni",
                    "es": "Jun.",
                    "pt-BR": "Jun."
                },
                "july": {
                    "zh": "七月",
                    "en": "Jul.",
                    "vi": "Tháng 7",
                    "zh-Hant": "七月",
                    "id": "Juli",
                    "es": "Jul.",
                    "pt-BR": "Jul."
                },
                "august": {
                    "zh": "八月",
                    "en": "Aug.",
                    "vi": "Tháng 8",
                    "zh-Hant": "八月",
                    "id": "Agustus",
                    "es": "Aug.",
                    "pt-BR": "Ago."
                },
                "september": {
                    "zh": "九月",
                    "en": "Sep.",
                    "vi": "Tháng 9",
                    "zh-Hant": "九月",
                    "id": "September",
                    "es": "Sep.",
                    "pt-BR": "Set."
                },
                "october": {
                    "zh": "十月",
                    "en": "Oct.",
                    "vi": "Tháng 10",
                    "zh-Hant": "十月",
                    "id": "Oktober",
                    "es": "Oct.",
                    "pt-BR": "Out."
                },
                "november": {
                    "zh": "十一月",
                    "en": "Nov.",
                    "vi": "Tháng 11",
                    "zh-Hant": "十壹月",
                    "id": "November",
                    "es": "Nov.",
                    "pt-BR": "Nov."
                },
                "december": {
                    "zh": "十二月",
                    "en": "Dec.",
                    "vi": "Tháng 12",
                    "zh-Hant": "十二月",
                    "id": "Desember",
                    "es": "Dec.",
                    "pt-BR": "Dez."
                }
            },
           
        };
        var data = Object.assign({
            "company": "tigerwit",
            "language": '',

            "companyCopyRules": {
                "zh": "https://www.tigerwit.com/web/copy/rules",
                "en": "https://www.tigerwit.com/web/copy/rules",
                "vi": "https://www.tigerwit.com/web/copy/rules",
                "zh-Hant": "https://www.tigerwit.com/web/copy/rules",
                "id": "https://www.tigerwit.com/web/copy/rules",
                "es": "https://www.tigerwit.com/web/copy/rules",
                "pt-BR": "https://www.tigerwit.com/web/copy/rules"
            },
            "companyNameEn": {
                "zh": "TigerWit",
                "en": "TigerWit",
                "vi": "TigerWit",
                "zh-Hant": "TigerWit",
                "id": "TigerWit",
                "es": "TigerWit",
                "pt-BR": "TigerWit"
            },
            "companyNameZh": {
                "zh": "TigerWit",
                "en": "TigerWit",
                "vi": "TigerWit",
                "zh-Hant": "TigerWit",
                "id": "TigerWit",
                "es": "TigerWit",
                "pt-BR": "TigerWit"
            },
            "webSite": {
                "zh": "www.tigerwit.com",
                "en": "www.tigerwit.com",
                "vi": "www.tigerwit.com",
                "zh-Hant": "www.tigerwit.com",
                "id": "www.tigerwit.com",
                "es": "www.tigerwit.com",
                "pt-BR": "www.tigerwit.com"
            },
        }, lang_data);

        return data;
    }
})();