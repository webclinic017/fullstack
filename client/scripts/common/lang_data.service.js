;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = ['$cookies'];

    function langData ($cookies) {
        var language = 'zh';
        
        angular.forEach($cookies, function (value, index) {

            if (index === 'lang') {
                // console.info(value, index);
                language = value === 'cn' ? 'zh' : value;

            }
        });

        var data = {
            "company": "tigerwit",
            "language": language,
            // 公用 public
            companyCopyRules: {
                zh: "https://www.tigerwit.com/web/copy/rules",
                en: "https://www.tigerwit.com/web/copy/rules",
                vi: "^^-^^",
                "zh-Hant": "https://www.tigerwit.com/web/copy/rules"
            },
            companyNameEn: {
                zh: "TigerWit",
                en: "TigerWit",
                vi: "^^-^^",
                "zh-Hant": "TigerWit"
            },
            companyNameZh: {
                zh: "TigerWit",
                en: "TigerWit",
                vi: "^^-^^",
                "zh-Hant": "TigerWit"
            },
            telephone: {
                zh: "400-809-8509",
                en: "400-809-8509",
                vi: "^^-^^",
                "zh-Hant": "400-809-8509"
            },
            mt4Live: {
                zh: "TigerWit-Live",
                en: "TigerWit-Live",
                vi: "^^-^^",
                "zh-Hant": "TigerWit-Live"
            },
            webSite: {
                zh: "www.tigerwit.com",
                en: "www.tigerwit.com",
                vi: "^^-^^",
                "zh-Hant": "www.tigerwit.com"
            },
            china: {
                zh: "中国",
                en: "China",
                vi: "China",
                "zh-Hant": "中國"
            },
            lijifuzhi: {
                en: "Copy now",
                zh: "立即复制",
                vi: "^^-^^",
                "zh-Hant": "立即復制"
            },
            fuzhi: {
                zh: "复制",
                en: "Copy",
                vi: "^^-^^",
                "zh-Hant": "復制"
            },
            lijizhuce: {
                en: "Register now",
                zh: "立即注册",
                vi: "^^-^^",
                "zh-Hant": "立即註冊"
            },
            liaojiexiangqing: {
                en: "Learn more",
                zh: "了解详情",
                vi: "^^-^^",
                "zh-Hant": "了解詳情"
            },
            xuanzegaoshou: {
                en: "Select a master",
                zh: "选择高手",
                vi: "^^-^^",
                "zh-Hant": "選擇高手"
            },
            shouyilv: {
                en: "yield rate",
                zh: "收益率",
                vi: "^^-^^",
                "zh-Hant": "收益率"
            },
            zongshouyilv: {
                en: "Total Return",
                zh: "总收益率",
                vi: "^^-^^",
                "zh-Hant": "總收益率"
            },
            fengxian: {
                en: "risks",
                zh: "风险",
                vi: "^^-^^",
                "zh-Hant": "風險"
            },
            low: {
                en: "low",
                zh: "低",
                vi: "^^-^^",
                "zh-Hant": "低"
            },
            middle: {
                en: "middle",
                zh: "中",
                vi: "^^-^^",
                "zh-Hant": "中"
            },
            high: {
                en: "high",
                zh: "高",
                vi: "^^-^^",
                "zh-Hant": "高"
            },
            fuzhirenshu: {
                en: "Copiers",
                zh: "复制人数",
                vi: "^^-^^",
                "zh-Hant": "復制人數"
            },
            lishifuzhirenshu: {
                en: "Historical Copiers",
                zh: "历史复制人数",
                vi: "^^-^^",
                "zh-Hant": "歷史復制人數"
            },
            zuidifuzhijine: {
                en: "MIN copy",
                zh: "最低复制金额",
                vi: "^^-^^",
                "zh-Hant": "最低復制金額"
            },
            zoushitu: {
                en: "Trend Chart",
                zh: "走势图",
                vi: "^^-^^",
                "zh-Hant": "走勢圖"
            },
            zuidahuiche: {
                en: "MAX drawdown",
                zh: "最大回撤",
                vi: "^^-^^",
                "zh-Hant": "最大回撤"
            },
            waihui: {
                en: "Foreign exchange",
                zh: "外汇",
                vi: "^^-^^",
                "zh-Hant": "外匯"
            },
            guijinshu: {
                en: "Precious metal",
                zh: "贵金属",
                vi: "^^-^^",
                "zh-Hant": "貴金屬"
            },
            yuanyou: {
                en: "Crude oil",
                zh: "原油",
                vi: "^^-^^",
                "zh-Hant": "原油"
            },
            faq: {
                en: "FAQ",
                zh: "常见问题",
                vi: "^^-^^",
                "zh-Hant": "常見問題"
            },
            login: {
                en: "Login",
                zh: "登录",
                vi: "^^-^^",
                "zh-Hant": "登錄"
            },
            register: {
                en: "Register",
                zh: "注册",
                vi: "^^-^^",
                "zh-Hant": "註冊"
            },
            signout: {
                en: "sign out",
                zh: "退出",
                vi: "^^-^^",
                "zh-Hant": "退出"
            },
            password: {
                en: "Password",
                zh: "密码",
                vi: "^^-^^",
                "zh-Hant": "密碼"
            },
            username: {
                en: "Username",
                zh: "昵称",
                vi: "^^-^^",
                "zh-Hant": "昵稱"
            },
            phone: {
                en: "Phone",
                zh: "手机号码",
                vi: "^^-^^",
                "zh-Hant": "手機號碼"
            },
            email: {
                en: "E-mail",
                zh: "电子邮箱",
                vi: "^^-^^",
                "zh-Hant": "電子郵箱"
            },
            verifycode: {
                en: "Verification code",
                zh: "验证码",
                vi: "^^-^^",
                "zh-Hant": "驗證碼"
            },
            rank1: {
                en: "Ranking",
                zh: "综合排名",
                vi: "^^-^^",
                "zh-Hant": "綜合排名"
            },
            login1: {
                en: "Mobile No.",
                zh: "手机号码",
                vi: "^^-^^",
                "zh-Hant": "手機號碼"
            },
            login2: {
                en: "Please enter your account No.",
                zh: "请输入账号",
                vi: "^^-^^",
                "zh-Hant": "請輸入賬號"
            },
            login3: {
                en: "xx",
                zh: "账号格式不正确",
                vi: "^^-^^",
                "zh-Hant": "賬號格式不正確"
            },
            login4: {
                en: "xx",
                zh: "账号尚未注册",
                vi: "^^-^^",
                "zh-Hant": "賬號尚未註冊"
            },
            login6: {
                en: "Log in automatically next time",
                zh: "下次自动登陆",
                vi: "^^-^^",
                "zh-Hant": "下次自動登陸"
            },
            login7: {
                en: "Forgot password",
                zh: "忘记密码",
                vi: "^^-^^",
                "zh-Hant": "忘記密碼"
            },
            login8: {
                en: "SSL login is adopted in TigerWit and data transmission is safe.",
                zh: "您在TigerWit登录采用 SSL 登录方式数据传输安全",
                vi: "^^-^^",
                "zh-Hant": "您在TigerWit登錄采用 SSL 登錄方式數據傳輸安全"
            },
            login9: {
                en: "Login",
                zh: "登 录",
                vi: "^^-^^",
                "zh-Hant": "登 錄"
            },
            login10: {
                en: "Register",
                zh: "注 册",
                vi: "^^-^^",
                "zh-Hant": "註 冊"
            },
            login11: {
                en: "Login...",
                zh: "登录中",
                vi: "^^-^^",
                "zh-Hant": "登錄中"
            },
            login12: {
                en: "Login too much, please try again after 5 minutes",
                zh: "登录次数过多，请 5 分钟后重试",
                vi: "^^-^^",
                "zh-Hant": "登錄次數過多，請 5 分鐘後重試"
            },
            login13: {
                en: "account No. or password is wrong",
                zh: "用户名或者密码错误",
                vi: "^^-^^",
                "zh-Hant": "用戶名或者密碼錯誤"
            },
            login14: {
                en: "xx",
                zh: "账号已注销",
                vi: "^^-^^",
                "zh-Hant": "賬號已註銷"
            },
            register1: {
                en: "Register an account",
                zh: "注册账户",
                vi: "^^-^^",
                "zh-Hant": "註冊賬戶"
            },
            register2: {
                en: "Real name certification",
                zh: "实名认证",
                vi: "^^-^^",
                "zh-Hant": "實名認證"
            },
            register3: {
                en: "KYC authentication",
                zh: "KYC 认证",
                vi: "^^-^^",
                "zh-Hant": "KYC 認證"
            },
            register4: {
                en: "Registration done",
                zh: "完成注册",
                vi: "^^-^^",
                "zh-Hant": "完成註冊"
            },
            register5: {
                en: "Confirm password",
                zh: "确认密码",
                vi: "^^-^^",
                "zh-Hant": "確認密碼"
            },
            register6: {
                en: "Obtain verification code",
                zh: "获取验证码",
                vi: "^^-^^",
                "zh-Hant": "獲取驗證碼"
            },
            register7: {
                en: "Please enter username",
                zh: "请输入昵称",
                vi: "^^-^^",
                "zh-Hant": "請輸入昵稱"
            },
            register8: {
                en: "Please enter phone number",
                zh: "请输入手机号",
                vi: "^^-^^",
                "zh-Hant": "請輸入手機號"
            },
            register9: {
                en: "Please enter the verification code",
                zh: "请输入验证码",
                vi: "^^-^^",
                "zh-Hant": "請輸入驗證碼"
            },
            register10: {
                en: "Please enter your e-mail",
                zh: "请输入电子邮箱",
                vi: "^^-^^",
                "zh-Hant": "請輸入電子郵箱"
            },
            register11: {
                en: "Please enter password",
                zh: "请输入密码",
                vi: "^^-^^",
                "zh-Hant": "請輸入密碼"
            },
            register12: {
                en: "Please re-enter your password",
                zh: "请再次输入密码",
                vi: "^^-^^",
                "zh-Hant": "請再次輸入密碼"
            },
            register13: {
                en: "Registration means that you have agreed the relevant regulations",
                zh: "注册即同意",
                vi: "^^-^^",
                "zh-Hant": "註冊即同意"
            },
            register14: {
                en: "Risk Disclosure Statement",
                zh: "风险披露书",
                vi: "^^-^^",
                "zh-Hant": "風險披露書"
            },
            register15: {
                en: "Declaration by Client",
                zh: "客户声明",
                vi: "^^-^^",
                "zh-Hant": "客戶聲明"
            },
            register16: {
                en: "Trading Notes for Users",
                zh: "用户交易须知",
                vi: "^^-^^",
                "zh-Hant": "用戶交易須知"
            },
            register17: {
                en: "Register in 30s and open the journey to fortune",
                zh: "30 秒注册 开启财富之旅",
                vi: "^^-^^",
                "zh-Hant": "30 秒註冊 開啟財富之旅"
            },
            register20: {
                en: "Register now to receive $200",
                zh: "立即注册 领取$1000",
                vi: "^^-^^",
                "zh-Hant": "立即註冊 領取$1000"
            },
            register18: {
                en: "Registered?",
                zh: "已有账户？",
                vi: "^^-^^",
                "zh-Hant": "已有賬戶？"
            },
            register19: {
                en: "Log in now",
                zh: "立即登录",
                vi: "^^-^^",
                "zh-Hant": "立即登錄"
            },
            traderSummary1: {
                en: "Summary",
                zh: "交易概况",
                vi: "^^-^^",
                "zh-Hant": "交易概況"
            },
            traderSummary2: {
                en: "Success rate",
                zh: "准确率",
                vi: "^^-^^",
                "zh-Hant": "準確率"
            },
            traderSummary3: {
                en: "Margin Cost",
                zh: "最大保证金占用",
                vi: "^^-^^",
                "zh-Hant": "最大保證金占用"
            },
            traderSummary4: {
                en: "Profit",
                zh: "盈利订单",
                vi: "^^-^^",
                "zh-Hant": "盈利訂單"
            },
            traderSummary5: {
                en: "Lose",
                zh: "亏损订单",
                vi: "^^-^^",
                "zh-Hant": "虧損訂單"
            },
            traderSummary6: {
                en: "Close Out",
                zh: "平仓交易",
                vi: "^^-^^",
                "zh-Hant": "平倉交易"
            },
            traderSummary7: {
                en: "Avg. Holding time",
                zh: "平均持仓时间",
                vi: "^^-^^",
                "zh-Hant": "平均持倉時間"
            },
            traderSummary8: {
                en: "Avg. Trades/Month",
                zh: "月平均交易次数",
                vi: "^^-^^",
                "zh-Hant": "月平均交易次數"
            },
            traderSummary9: {
                en: "Profitable/Month",
                zh: "月回报率",
                vi: "^^-^^",
                "zh-Hant": "月回報率"
            },
            traderSummary10: {
                en: "Max Drawdown",
                zh: "最大回撤",
                vi: "^^-^^",
                "zh-Hant": "最大回撤"
            },
            traderSummary11: {
                en: "Largest Profit Spread",
                zh: "最大盈利点差",
                vi: "^^-^^",
                "zh-Hant": "最大盈利點差"
            },
            traderSummary12: {
                en: "Total Return",
                zh: "总收益率",
                vi: "^^-^^",
                "zh-Hant": "總收益率"
            },
            traderSummary13: {
                en: "Trading Chart",
                zh: "交易走势图",
                vi: "^^-^^",
                "zh-Hant": "交易走勢圖"
            },
            traderSummary14: {
                en: "Main Symble",
                zh: "主要交易品种",
                vi: "^^-^^",
                "zh-Hant": "主要交易品種"
            },
            traderSummary15: {
                en: "No Data",
                zh: "无数据",
                vi: "^^-^^",
                "zh-Hant": "無數據"
            },
            HoldingTrades1: {
                en: "Operation",
                zh: "操作",
                vi: "^^-^^",
                "zh-Hant": "操作"
            },
            HoldingTrades2: {
                en: "Open price",
                zh: "开仓价",
                vi: "^^-^^",
                "zh-Hant": "開倉價"
            },
            HoldingTrades3: {
                en: "Current Price",
                zh: "现价",
                vi: "^^-^^",
                "zh-Hant": "現價"
            },
            HoldingTrades4: {
                en: "Holding Time",
                zh: "持仓时间",
                vi: "^^-^^",
                "zh-Hant": "持倉時間"
            },
            HoldingTrades5: {
                en: "Spread",
                zh: "点数",
                vi: "^^-^^",
                "zh-Hant": "點數"
            },
            HoldingTrades6: {
                en: "Profit",
                zh: "收益",
                vi: "^^-^^",
                "zh-Hant": "收益"
            },
            HoldingTrades7: {
                en: "Sell",
                zh: "买跌",
                vi: "^^-^^",
                "zh-Hant": "買跌"
            },
            HoldingTrades8: {
                en: "Buy",
                zh: "买涨",
                vi: "^^-^^",
                "zh-Hant": "買漲"
            },
            HoldingTrades9: {
                en: "No Data",
                zh: "无数据",
                vi: "^^-^^",
                "zh-Hant": "無數據"
            },
            HoldingTrades10: {
                en: "Note：Trades won't be shown here before 7 days.",
                zh: "注：当前交易仅显示高手最近一周持仓订单",
                vi: "^^-^^",
                "zh-Hant": "註：當前交易僅顯示高手最近壹周持倉訂單"
            },
            HoldingTrades11: {
                en: "en",
                zh: "zh",
                vi: "^^-^^",
                "zh-Hant": "zh"
            },
            TradingHistory1: {
                en: "Operation",
                zh: "操作",
                vi: "^^-^^",
                "zh-Hant": "操作"
            },
            TradingHistory2: {
                en: "Open price",
                zh: "开仓价",
                vi: "^^-^^",
                "zh-Hant": "開倉價"
            },
            TradingHistory3: {
                en: "Close price",
                zh: "平仓价",
                vi: "^^-^^",
                "zh-Hant": "平倉價"
            },
            TradingHistory4: {
                en: "Holding Time",
                zh: "持仓时间",
                vi: "^^-^^",
                "zh-Hant": "持倉時間"
            },
            TradingHistory5: {
                en: "Spread",
                zh: "点数",
                vi: "^^-^^",
                "zh-Hant": "點數"
            },
            TradingHistory6: {
                en: "Profit",
                zh: "收益",
                vi: "^^-^^",
                "zh-Hant": "收益"
            },
            TradingHistory7: {
                en: "Sell",
                zh: "买跌",
                vi: "^^-^^",
                "zh-Hant": "買跌"
            },
            TradingHistory8: {
                en: "Buy",
                zh: "买涨",
                vi: "^^-^^",
                "zh-Hant": "買漲"
            },
            TradingHistory9: {
                en: "No Data",
                zh: "无数据",
                vi: "^^-^^",
                "zh-Hant": "無數據"
            },
            TradingHistory10: {
                en: "ago",
                zh: "前",
                vi: "^^-^^",
                "zh-Hant": "前"
            },
            TradingHistory11: {
                en: "en",
                zh: "zh",
                vi: "^^-^^",
                "zh-Hant": "zh"
            },
            actLogin1: {
                zh: "快捷登录",
                en: "Fast Login",
                vi: "^^-^^",
                "zh-Hant": "快捷登錄"
            },
            actLogin2: {
                zh: "账号密码登录",
                en: "Password Login",
                vi: "^^-^^",
                "zh-Hant": "賬號密碼登錄"
            },
            actLogin3: {
                zh: "请输入手机号码",
                en: "Please Type in the Phone Number",
                vi: "^^-^^",
                "zh-Hant": "請輸入手機號碼"
            },
            actLogin4: {
                zh: "请输入验证码",
                en: "Please enter verification code",
                vi: "^^-^^",
                "zh-Hant": "請輸入驗證碼"
            },
            actLogin5: {
                zh: "获取验证码",
                en: "Send code",
                vi: "^^-^^",
                "zh-Hant": "獲取驗證碼"
            },
            actLogin6: {
                zh: "后重新获取",
                en: "after resend",
                vi: "^^-^^",
                "zh-Hant": "後重新獲取"
            },
            actLogin7: {
                zh: "记住登录状态",
                en: "Remember login status",
                vi: "^^-^^",
                "zh-Hant": "記住登錄狀態"
            },
            actLogin8: {
                zh: "登录",
                en: "Login",
                vi: "^^-^^",
                "zh-Hant": "登錄"
            },
            actLogin9: {
                zh: "未注册TigerWit的手机号，登录时将自动注册",
                en: "Logging in will turn to registration if the Phone Number hasn't been registered.",
                vi: "^^-^^",
                "zh-Hant": "未註冊TigerWit的手機號，登錄時將自動註冊"
            },
            actLogin10: {
                zh: "提交代表您已阅读并同意",
                en: "I accept the ",
                vi: "^^-^^",
                "zh-Hant": "提交代表您已閱讀並同意"
            },
            actLogin11: {
                zh: "客户协议",
                en: "Client Agreement",
                vi: "^^-^^",
                "zh-Hant": "客戶協議"
            },
            actLogin12: {
                zh: "风险披露声明",
                en: "Risk Disclosure",
                vi: "^^-^^",
                "zh-Hant": "風險披露聲明"
            },
            actLogin13: {
                zh: "隐私政策",
                en: "Privacy Policy ",
                vi: "^^-^^",
                "zh-Hant": "隱私政策"
            },
            actLogin14: {
                zh: "法律声明",
                en: "Legal Notices",
                vi: "^^-^^",
                "zh-Hant": "法律聲明"
            },
            actLogin15: {
                zh: "及其他",
                en: "and other ",
                vi: "^^-^^",
                "zh-Hant": "及其他"
            },
            actLogin16: {
                zh: "请输入正确的手机号码",
                en: "Please Type in the correct Phone Number",
                vi: "^^-^^",
                "zh-Hant": "請輸入正確的手機號碼"
            },
            actLogin17: {
                zh: "手机号",
                en: "Phone",
                vi: "^^-^^",
                "zh-Hant": "手機號"
            },
            actLogin18: {
                zh: "校验码",
                en: "Verification code",
                vi: "^^-^^",
                "zh-Hant": "校驗碼"
            },
            actLogin19: {
                zh: "请填写完整信息",
                en: "Please Type in the complete information",
                vi: "^^-^^",
                "zh-Hant": "請填寫完整信息"
            },
            actLogin20: {
                zh: "设置密码",
                en: "Set Password",
                vi: "^^-^^",
                "zh-Hant": "設置密碼"
            },
            actLogin21: {
                zh: "请输入密码",
                en: "Please Type in the Password",
                vi: "^^-^^",
                "zh-Hant": "請輸入密碼"
            },
            actLogin22: {
                zh: "密码",
                en: "Password",
                vi: "^^-^^",
                "zh-Hant": "密碼"
            },
            actLogin23: {
                zh: "请为您的账户设置密码，6-15位字母、数字或符号组合",
                en: "Please set a password for your account，6-15 bit of Letters, numbers, or combinations of symbols",
                vi: "^^-^^",
                "zh-Hant": "請為您的賬戶設置密碼，6-15位字母、數字或符號組合"
            },
            actLogin24: {
                zh: "请输入您的账号",
                en: "Please Type in the Phone Number",
                vi: "^^-^^",
                "zh-Hant": "請輸入您的賬號"
            },
            actLogin25: {
                zh: "请输入您的账户密码",
                en: "Please Type in the Password",
                vi: "^^-^^",
                "zh-Hant": "請輸入您的賬戶密碼"
            },
            actLogin26: {
                zh: "忘记密码",
                en: "Forget the Password?",
                vi: "^^-^^",
                "zh-Hant": "忘記密碼"
            },
            actLogin27: {
                zh: "*已使用SSL加密技术保护您的网络安全",
                en: "Secure your network with SSL encryption technology",
                vi: "^^-^^",
                "zh-Hant": "*已使用SSL加密技術保護您的網絡安全"
            },
            actLogin28: {
                zh: "找回密码",
                en: "Retrieve the password",
                vi: "^^-^^",
                "zh-Hant": "找回密碼"
            },
            actLogin29: {
                zh: "下一步",
                en: "Next",
                vi: "^^-^^",
                "zh-Hant": "下壹步"
            },
            actLogin29_1: {
                zh: "上一步",
                en: "Prev",
                vi: "^^-^^",
                "zh-Hant": "上壹步"
            },
            actLogin30: {
                zh: "完成修改",
                en: "Submit",
                vi: "^^-^^",
                "zh-Hant": "完成修改"
            },
            actLogin31: {
                zh: "新密码设置成功",
                en: "The new password is set up successfully",
                vi: "^^-^^",
                "zh-Hant": "新密碼設置成功"
            },
            actLogin32: {
                zh: "重新登录",
                en: "Re-register",
                vi: "^^-^^",
                "zh-Hant": "重新登錄"
            },
            actLogin33: {
                zh: "完成注册",
                en: "Complete",
                vi: "^^-^^",
                "zh-Hant": "完成註冊"
            },
            actLogin34: {
                zh: "跳过",
                en: "Jump Over",
                vi: "^^-^^",
                "zh-Hant": "跳過"
            },
            actLogin35: {
                zh: "",
                en: "",
                vi: "^^-^^",
                "zh-Hant": ""
            },
            actLogin36: {
                zh: "",
                en: "",
                vi: "^^-^^",
                "zh-Hant": ""
            },
            actLogin37: {
                zh: "账号或手机号",
                en: "Account / Phone No",
                vi: "^^-^^",
                "zh-Hant": "賬號或手機號"
            },
            actLogin38: {
                zh: "请输入您的账号或手机号",
                en: "Enter account / phone No",
                vi: "^^-^^",
                "zh-Hant": "請輸入您的賬號或手機號"
            },

            // 通行证个人中心
            tigerWitID: {
                title: {
                    zh: "通行证账号",
                    en: "TigerWitID",
                    vi: "^^-^^",
                    "zh-Hant": "通行證帳號"
                },
                titleM: {
                    zh: "通行证账号：",
                    en: "TigerWitID: ",
                    vi: "^^-^^",
                    "zh-Hant": "通行證帳號："
                },
                login: {
                    login: {
                        zh: "登录",
                        en: "Login",
                        vi: "--",
                        "zh-Hant": "登錄"
                    },
                    country: {
                        zh: "国家",
                        en: "Country",
                        vi: "--",
                        "zh-Hant": "國家"
                    },
                    fastLogin: {
                        zh: "快捷登录",
                        en: "Fast Login",
                        vi: "--",
                        "zh-Hant": "快捷登錄"
                    },
                    passwordLogin: {
                        zh: "密码登录",
                        en: "Password Login",
                        vi: "--",
                        "zh-Hant": "密碼登錄"
                    },
                    enterPhoneNumber: {
                        zh: "请输入手机号",
                        en: "Please enter phone number",
                        vi: "--",
                        "zh-Hant": "請輸入手機號"
                    },
                    verifyWithEmail: {
                        zh: "邮箱获取验证码",
                        en: "Verify with email",
                        vi: "--",
                        "zh-Hant": "郵箱獲取驗證碼"
                    },
                    verifyWithPhoneNumber: {
                        zh: "手机号获取验证码",
                        en: "Verify with phone number",
                        vi: "--",
                        "zh-Hant": "手機號獲取驗證碼"
                    },
                    verificationCode: {
                        zh: "请输入验证码",
                        en: "Please enter verification code",
                        vi: "--",
                        "zh-Hant": "請輸入驗證碼"
                    },
                    sendSMS: {
                        zh: "获取验证码",
                        en: "Send code",
                        vi: "--",
                        "zh-Hant": "獲取驗證碼"
                    },
                    sendCode: {
                        zh: "获取验证码",
                        en: "Send code",
                        vi: "--",
                        "zh-Hant": "獲取驗證碼"
                    },
                    keepMeLogin: {
                        zh: "记住登录状态",
                        en: "Keep me login",
                        vi: "--",
                        "zh-Hant": "記住登錄狀態"
                    },
                    enterAccountPhoneNo: {
                        zh: "请输入您的账号或手机号",
                        en: "Enter account/phone No",
                        vi: "--",
                        "zh-Hant": "請輸入您的帳號或手機號"
                    },
                    enterAccountPhoneNoOrEmail: {
                        zh: "请输入您的账号、手机号或邮箱",
                        en: "Enter account/phone No. or email",
                        vi: "--",
                        "zh-Hant": "請輸入您的帳號、手機號或郵箱"
                    },
                    register: {
                        zh: "注册",
                        en: "Register",
                        vi: "--",
                        "zh-Hant": "註冊"
                    },
                    tip1_1: {
                        zh: "提交注册代表您已阅读并同意",
                        en: "By clicking 'Register' you confirm that you have read and agree with ",
                        vi: "--",
                        "zh-Hant": "提交註冊代表您已閱讀並同意"
                    },
                    tip1_2: {
                        zh: "客户协议",
                        en: "Client Agreement",
                        vi: "--",
                        "zh-Hant": "客護協議"
                    },
                    tip1_3: {
                        zh: "风险披露声明",
                        en: "Risk Disclosure Notice",
                        vi: "--",
                        "zh-Hant": "風險披露聲明"
                    },
                    tip1_4: {
                        zh: "隐私政策",
                        en: "Privacy Policy ",
                        vi: "--",
                        "zh-Hant": "隱私政策"
                    },
                    tip1_5: {
                        zh: "及其他",
                        en: "and any other ",
                        vi: "--",
                        "zh-Hant": "及其他"
                    },
                    tip1_6: {
                        zh: "法律声明",
                        en: "Legal Notices",
                        vi: "--",
                        "zh-Hant": "法律聲明"
                    },
                    alreadyHas: {
                        zh: "已有TigerWit账号？",
                        en: "Already have an account? ",
                        vi: "--",
                        "zh-Hant": "已有TigerWit帳號？"
                    },
                    registerViaEmail: {
                        zh: "切换到邮箱",
                        en: "Register via email",
                        vi: "--",
                        "zh-Hant": "切換到郵箱"
                    },
                    registerViaPhoneNumber: {
                        zh: "切换到手机号",
                        en: "Register via phone number",
                        vi: "--",
                        "zh-Hant": "切換到手機號"
                    },
                    phoneNumExists: {
                        zh: "手机号已存在",
                        en: "The phone number already exists",
                        vi: "--",
                        "zh-Hant": "手機號已存在"
                    },
                    tip2: {
                        zh: "该手机号已存在，请更换手机号进行注册或前往登录。",
                        en: "This phone number already exists. Please use another valid phone number for registration.",
                        vi: "--",
                        "zh-Hant": "該手機號已存在，請更換手機號進行註冊或前往登錄。"
                    },
                    setPasswordToStart: {
                        zh: "设置密码，开启您的交易之路",
                        en: "Set password to get started",
                        vi: "--",
                        "zh-Hant": "設置密碼，開啟您的交易之路"
                    },
                    setPassword: {
                        zh: "密码",
                        en: "Set password",
                        vi: "--",
                        "zh-Hant": "密碼"
                    },
                    confirmPassword: {
                        zh: "请确认密码",
                        en: "Confirm password",
                        vi: "--",
                        "zh-Hant": "請確認密碼"
                    },
                    done: {
                        zh: "完成",
                        en: "Done",
                        vi: "--",
                        "zh-Hant": "完成"
                    },
                    skip: {
                        zh: "跳过",
                        en: "Skip",
                        vi: "--",
                        "zh-Hant": "跳過"
                    },
                    verificationCodeLogin: {
                        zh: "验证码登录",
                        en: "Code Login",
                        vi: "--",
                        "zh-Hant": "驗證碼登錄"
                    },
                    enterPassword: {
                        zh: "请输入密码",
                        en: "Please enter password",
                        vi: "--",
                        "zh-Hant": "請輸入密碼"
                    },
                    loginWithEmail: {
                        zh: "切换到邮箱",
                        en: "Login with email",
                        vi: "--",
                        "zh-Hant": "切換到郵箱"
                    },
                    loginWithMobile: {
                        zh: "切换到手机号",
                        en: "Login with mobile",
                        vi: "--",
                        "zh-Hant": "切換到手機號"
                    },
                    forgetPassword: {
                        zh: "忘记密码？",
                        en: "Forget password?",
                        vi: "--",
                        "zh-Hant": "忘記密碼？"
                    },
                    tip3: {
                        zh: "已使用SSL加密技术保护您的网络安全",
                        en: "The TigerWit network is secured with SSL encryption technology",
                        vi: "--",
                        "zh-Hant": "已使用SSL加密技術保護您的網酪安全"
                    },
                    tip4: {
                        zh: "该手机号没有注册过Tigerwit账号",
                        en: "This phone number has not been registered",
                        vi: "--",
                        "zh-Hant": "該手機號沒有註冊過Tigerwit帳號"
                    },
                    tip5: {
                        zh: "该邮箱没有注册过Tigerwit账号",
                        en: "This email has not been registered",
                        vi: "--",
                        "zh-Hant": "該郵箱沒有註冊過Tigerwit帳號"
                    },
                    selectAreaCode: {
                        zh: "请选择区号",
                        en: "Please select area code",
                        vi: "--",
                        "zh-Hant": "請選擇區號"
                    },
                    countryRegion: {
                        zh: "国家/地区",
                        en: "Country/Region",
                        vi: "--",
                        "zh-Hant": "國家/地區"
                    },
                    enterEmail: {
                        zh: "请输入邮箱",
                        en: "Please enter email",
                        vi: "--",
                        "zh-Hant": "請輸入郵箱"
                    },
                    phoneNumber: {
                        zh: "手机号",
                        en: "Phone number",
                        vi: "--",
                        "zh-Hant": "手機號"
                    },
                    email: {
                        zh: "邮箱",
                        en: "Email",
                        vi: "--",
                        "zh-Hant": "郵箱"
                    },
                    selectCountry: {
                        zh: "请选择国家/地区",
                        en: "Please select country/region",
                        vi: "--",
                        "zh-Hant": "請選擇國家/地區"
                    },
                    enterCorrectEmail: {
                        zh: "请输入有效邮箱",
                        en: "Please enter a valid email address",
                        vi: "--",
                        "zh-Hant": "請輸入有效郵箱"
                    },
                    countryCode: {
                        zh: "(国家/国家代码)",
                        en: "(country/country code)",
                        vi: "--",
                        "zh-Hant": "(國家/國家代碼)"
                    },
                    password: {
                        zh: "密码",
                        en: "Password",
                        vi: "--",
                        "zh-Hant": "密碼"
                    },
                    confirmPasswordj: {
                        zh: "确认密码",
                        en: "Confirm password",
                        vi: "--",
                        "zh-Hant": "確認密碼"
                    },
                    notHaveAccount: {
                        zh: "还没有TigerWit账号？",
                        en: "Don’t have an account? ",
                        vi: "--",
                        "zh-Hant": "還沒有TigerWit帳號？"
                    },
                    verificationCodeSent: {
                        zh: "验证码已发送",
                        en: "The verification code has been sent",
                        vi: "--",
                        "zh-Hant": "驗證碼已發送"
                    },
                    tip6_1: {
                        zh: "我们已将验证码发送至",
                        en: "We have sent the verification code to",
                        vi: "--",
                        "zh-Hant": "我們已將驗證碼發送至"
                    },
                    tip6_2: {
                        zh: "邮箱",
                        en: " ",
                        vi: "--",
                        "zh-Hant": "郵箱"
                    },
                    tip6_21: {
                        zh: "手机号：",
                        en: " phone number: ",
                        vi: "--",
                        "zh-Hant": "手機號："
                    },
                    tip6_3: {
                        zh: " 请注意查收。",
                        en: ", please check.",
                        vi: "--",
                        "zh-Hant": " 請註意查收。"
                    },
                    tip7_1: {
                        zh: " ",
                        en: "The ",
                        vi: "--",
                        "zh-Hant": " "
                    },
                    tip7_2: {
                        zh: "手机号",
                        en: "phone number ",
                        vi: "--",
                        "zh-Hant": "手機號"
                    },
                    tip7_21: {
                        zh: "邮箱",
                        en: "email ",
                        vi: "--",
                        "zh-Hant": "郵箱"
                    },
                    tip7_3: {
                        zh: "未注册",
                        en: "is not registered",
                        vi: "--",
                        "zh-Hant": "未註冊"
                    },
                    tip9_1: {
                        zh: "该",
                        en: "This ",
                        vi: "--",
                        "zh-Hant": "該"
                    },
                    tip9_3: {
                        zh: "没有注册过 TigerWit 账号，前往注册？",
                        en: "has not been registered",
                        vi: "--",
                        "zh-Hant": "沒有註冊過 TigerWit 帳號，前往註冊？"
                    },
                    goRegister: {
                        zh: "去注册",
                        en: "Register",
                        vi: "--",
                        "zh-Hant": "去註冊"
                    },
                    passwordsEnteredDoNotMatch: {
                        zh: "两次输入的密码不一致",
                        en: "The passwords entered do not match",
                        vi: "--",
                        "zh-Hant": "兩次輸入的密碼不壹致"
                    },
                    goLogin: {
                        zh: "去登录",
                        en: "Login",
                        vi: "--",
                        "zh-Hant": "去登錄"
                    },
                    tip8_1: {
                        zh: "该",
                        en: "This ",
                        vi: "--",
                        "zh-Hant": "該"
                    },
                    tip8_2: {
                        zh: "手机号",
                        en: "phone number ",
                        vi: "--",
                        "zh-Hant": "手機號"
                    },
                    tip8_21: {
                        zh: "邮箱",
                        en: "email ",
                        vi: "--",
                        "zh-Hant": "郵箱"
                    },
                    tip8_3: {
                        zh: "已存在，请更换",
                        en: "already exists. Please use another valid ",
                        vi: "--",
                        "zh-Hant": "已存在，請更換"
                    },
                    tip8_4: {
                        zh: "进行注册或直接登录。",
                        en: "for registration.",
                        vi: "--",
                        "zh-Hant": "進行註冊或直接登錄。"
                    },
                    tip8_5: {
                        zh: "已存在",
                        en: "already exists",
                        vi: "--",
                        "zh-Hant": "已存在"
                    },
                    verificationCodej: {
                        zh: "验证码",
                        en: "Verification code",
                        vi: "--",
                        "zh-Hant": "驗證碼"
                    },
                    tip11: {
                        zh: "您可直接使用新密码进行登录。",
                        en: "You can login directly using the new password.",
                        vi: "--",
                        "zh-Hant": "您可直接使用新密碼進行登錄。"
                    },
                    tip10: {
                        zh: "新密码设置成功",
                        en: "The new password was set successfully",
                        vi: "--",
                        "zh-Hant": "新密碼設置成功"
                    },
                    title: {
                        zh: "",
                        en: "",
                        vi: "--",
                        "zh-Hant": ""
                    }
                },
                myAccount: {
                    title: {
                        zh: "账户概况",
                        en: "My Account",
                        vi: "--",
                        "zh-Hant": "帳護概況"
                    },
                    updateID: {
                        zh: "更新证件",
                        en: "Update ID",
                        vi: "--",
                        "zh-Hant": "更新證件"
                    },
                    updateIDTip: {
                        zh: "您的证件已过期，无法进行该操作，请及时上传有效证件。点击“更新证件”，即可完成相关操作。",
                        en: "Your credential has expired and cannot be operated. Please upload your valid certificate in time. Click on the \"Update ID\" to complete the related operations.",
                        vi: "--",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。點擊“更新證件”，即可完成相關操作。"
                    },
                    updateIDTip2: {
                        zh: "您的证件已过期，无法进行该操作，请及时上传有效证件。",
                        en: "Your credential has expired and cannot be operated. Please upload your valid certificate in time.",
                        vi: "--",
                        "zh-Hant": "您的證件已過期，無法進行該操作，請及時上傳有效證件。"
                    },
                    totalAssets: {
                        zh: "资产总额",
                        en: "Total Assets",
                        vi: "--",
                        "zh-Hant": "資產總額"
                    },
                    totalLots: {
                        zh: "总交易手数",
                        en: "Total Lots",
                        vi: "--",
                        "zh-Hant": "總交易手數"
                    },
                    totalEarnings: {
                        zh: "总盈利",
                        en: "Total Earnings",
                        vi: "--",
                        "zh-Hant": "總盈利"
                    },
                    totalProfitRate: {
                        zh: "总收益率",
                        en: "Total Profit Rate",
                        vi: "--",
                        "zh-Hant": "總收益率"
                    },
                    tradingAccount: {
                        zh: "交易账户",
                        en: "Trade Account",
                        vi: "--",
                        "zh-Hant": "交易帳護"
                    },
                    upgradeToLiveAccount: {
                        zh: "升级到真实账户",
                        en: "Upgrade to a live account",
                        vi: "--",
                        "zh-Hant": "升級到真實帳護"
                    },
                    wallet: {
                        zh: "钱包",
                        en: "Wallet",
                        vi: "--",
                        "zh-Hant": "錢包"
                    },
                    unactivated: {
                        zh: "未激活",
                        en: "Unactivated",
                        vi: "--",
                        "zh-Hant": "未激活"
                    },
                    deposit: {
                        zh: "充值",
                        en: "DEPOSIT",
                        vi: "--",
                        "zh-Hant": "充值"
                    },
                    withdrawal: {
                        zh: "提现",
                        en: "WITHDRAWAL",
                        vi: "--",
                        "zh-Hant": "提現"
                    },
                    exit: {
                        zh: "退出",
                        en: "EXIT",
                        vi: "--",
                        "zh-Hant": "退出"
                    },
                    grantCredit: {
                        zh: "信用赠金",
                        en: "Grant for credit",
                        vi: "--",
                        "zh-Hant": "信用贈金"
                    },
                    freeDeposit: {
                        zh: "可用保证金",
                        en: "Free Deposit",
                        vi: "--",
                        "zh-Hant": "可用保證金"
                    },
                    marginLevel: {
                        zh: "保证金比例",
                        en: "Margin Level",
                        vi: "--",
                        "zh-Hant": "保證金比例"
                    },
                    volume: {
                        zh: "交易手数",
                        en: "Volume",
                        vi: "--",
                        "zh-Hant": "交易手數"
                    },
                    tip1: {
                        zh: "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易帐户。",
                        en: "The earnings you gained with the master and the agent will be deposited in the wallet，You can choose to withdrawal or transfer to the trading account.",
                        vi: "--",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易帳護。"
                    },
                    quickOpenAccount: {
                        zh: "快捷开户",
                        en: "Open account",
                        vi: "--",
                        "zh-Hant": "快捷開護"
                    },
                    applyToMaster: {
                        zh: "申请成为高手",
                        en: "Apply to be a master",
                        vi: "--",
                        "zh-Hant": "申請成為高手"
                    },
                    tip2: {
                        zh: "恭喜您已开通TigerWit体验金账户",
                        en: "Congratulations on opening the TigerWit experience account",
                        vi: "--",
                        "zh-Hant": "恭喜您已開通TigerWit體驗金帳護"
                    },
                    tip3: {
                        zh: "体验金账户体验期限为30天，过期后账户资金将被清除，建议尽快升级到真实账户。",
                        en: "Your experience account is valid for 30 days. Virtual funds will be cleared from this account 30 days after opening. You can upgrade to a live account at any time.",
                        vi: "--",
                        "zh-Hant": "體驗金帳護體驗期限為30天，過期後帳護資金將被清除，建議盡快升級到真實帳護。"
                    },
                    tip4: {
                        zh: "请注意：体验金账户资金及盈利不可提现。",
                        en: "Please note: experience account funds and profits are not available.",
                        vi: "--",
                        "zh-Hant": "請註意：體驗金帳護資金及盈利不可提現。"
                    },
                    tip5: {
                        zh: "升级为真实账户只需完成以下操作：",
                        en: "Upgrading to a live account only requires the following steps: ",
                        vi: "--",
                        "zh-Hant": "升級為真實帳護只需完成以下操作："
                    },
                    tip6: {
                        zh: "完整填写您的个人信息并通过审核；",
                        en: "Complete and verify your personal information;",
                        vi: "--",
                        "zh-Hant": "完整填寫您的個人信息並通過審核；"
                    },
                    depositToActivate: {
                        zh: "充值激活账户。",
                        en: "Deposit to activate the account.",
                        vi: "--",
                        "zh-Hant": "充值激活帳護。"
                    },
                    tip7: {
                        zh: "TigerWit真实交易账户",
                        en: "TigerWit Live trading account",
                        vi: "--",
                        "zh-Hant": "TigerWit真實交易帳護"
                    },
                    tip8: {
                        zh: "您离交易还差两步：1.上传身份审核 2.入金",
                        en: "You are two steps away from transaction: 1.Upload identity audit 2.Deposit",
                        vi: "--",
                        "zh-Hant": "您離交易還差兩步：1.上傳身份審核 2.入金"
                    },
                    tip9: {
                        zh: "即刻入金，立即领取$1000红包！",
                        en: "Deposit now to get $1000 coupon!",
                        vi: "--",
                        "zh-Hant": "即刻入金，立即領取$1000紅包！"
                    },
                    tip10: {
                        zh: "TigerWit保护客户资金安全。",
                        en: "TigerWit protect the safety of customer funds.",
                        vi: "--",
                        "zh-Hant": "TigerWit保護客護資金安全。"
                    },
                    tip11: {
                        zh: "客户资金完全与公司资金隔离，保存在独立银行账户中，确保属于客户的资金不会被用于任何其他目的。",
                        en: "Customer funds are completely segregated from company funds and kept in separate bank accounts to ensure that funds belonging to customers are not used for any other purpose.",
                        vi: "--",
                        "zh-Hant": "客護資金完全與公司資金隔離，保存在獨立銀行帳護中，確保屬於客護的資金不會被用於任何其他目的。"
                    },
                    tip12: {
                        zh: "去实名认证",
                        en: "To complete ID verification",
                        vi: "--",
                        "zh-Hant": "去實名認證"
                    },
                    tip13: {
                        zh: "您尚未开通任何账户，请先开户",
                        en: "You have not opened any account, please open it first",
                        vi: "--",
                        "zh-Hant": "您尚未開通任何帳護，請先開護"
                    },
                    tip14: {
                        zh: "您当前的账户类型不支持使用该功能，请及时升级账户",
                        en: "Your current account type does not support using this function, please update the account in time",
                        vi: "--",
                        "zh-Hant": "您當前的帳護類型不支持使用該功能，請及時升級帳護"
                    },
                    tip15: {
                        zh: "认证信息已提交，正在审核中",
                        en: "The verification information has been submitted and is under review",
                        vi: "--",
                        "zh-Hant": "認證信息已提交，正在審核中"
                    },
                    auditHour: {
                        zh: "审核时间",
                        en: "Audit hour",
                        vi: "--",
                        "zh-Hant": "審核時間"
                    },
                    auditHourM: {
                        zh: "审核时间：",
                        en: "Audit hour: ",
                        vi: "--",
                        "zh-Hant": "審核時間："
                    },
                    tip16: {
                        zh: "工作日10:00-18:00：将在30分钟左右完成审核",
                        en: "Work day 10:00-18:00: the review will be completed in about 30 minutes",
                        vi: "--",
                        "zh-Hant": "工作日10:00-18:00：將在30分鐘左右完成審核"
                    },
                    tip17: {
                        zh: "工作日18:00以后：将在21:00、23:00统一审核；23:00后认证的将在次日审核",
                        en: "Working days after 18:00: it will be reviewed at 21:00 and 23:00.",
                        vi: "--",
                        "zh-Hant": "工作日18:00以後：將在21:00、23:00統壹審核；23:00後認證的將在次日審核"
                    },
                    tip18: {
                        zh: "非工作日时间：将在10:00、16:00、22:00统一审核；22:00后认证的将在次日审核",
                        en: "Certification after 23:00 will be reviewed the next day",
                        vi: "--",
                        "zh-Hant": "非工作日時間：將在10:00、16:00、22:00統壹審核；22:00後認證的將在次日審核"
                    },
                    tip19: {
                        zh: "请留意查询您的审核状态。",
                        en: "Please check your audit status.",
                        vi: "--",
                        "zh-Hant": "請留意查詢您的審核狀態。"
                    },
                    accountNumber: {
                        zh: "账号",
                        en: "Account number",
                        vi: "--",
                        "zh-Hant": "帳號"
                    },
                    tip20: {
                        zh: "恭喜您已开通TigerWit真实交易账户",
                        en: "Congratulations on opening your TigerWit real transaction account",
                        vi: "--",
                        "zh-Hant": "恭喜您已開通TigerWit真實交易帳護"
                    },
                    questionnaire: {
                        zh: "投资信息确认",
                        en: "Questionnaire",
                        vi: "--",
                        "zh-Hant": "投資信息確認"
                    },
                    tip21: {
                        zh: "由于受最高监管的约束，需要您提供相关信息，我们只询问与开户相关的问题。您的资料始终保密，绝不公开。",
                        en: "Due to the highest regulatory constraints, you need to provide relevant information, we only ask questions related to account opening. Your information is always confidential and never public.",
                        vi: "--",
                        "zh-Hant": "由於受最高監管的約束，需要您提供相關信息，我們只詢問與開護相關的問題。您的資料始終保密，絕不公開。"
                    },
                    occupationBelongsTo: {
                        zh: "您的职业所属行业",
                        en: "Your occupation belongs to",
                        vi: "--",
                        "zh-Hant": "您的職業所屬行業"
                    },
                    tip22: {
                        zh: "您已完成KYC认证，感谢您的参与，请继续完成下一步操作。",
                        en: "You have completed KYC certification, thank you for your participation, please continue to complete the next step.",
                        vi: "--",
                        "zh-Hant": "您已完成KYC認證，感謝您的慘與，請繼續完成下壹步操作。"
                    },
                    tip24: {
                        zh: "因监管要求，请您提供相关信息。请确认是您本人，审核通过后不可修改。",
                        en: "Please provide relevant information due to regulatory requirements. Please confirm that it is you, and it cannot be modified after passing the audit.",
                        vi: "--",
                        "zh-Hant": "因監管要求，請您提供相關信息。請確認是您本人，審核通過後不可修改。"
                    },
                    realName: {
                        zh: "真实姓名",
                        en: "Real name",
                        vi: "--",
                        "zh-Hant": "真實姓名"
                    },
                    fillName: {
                        zh: "请输入真实姓名",
                        en: "Please fill in name",
                        vi: "--",
                        "zh-Hant": "請輸入真實姓名"
                    },
                    certificateType: {
                        zh: "证件类型",
                        en: "Certificate type",
                        vi: "--",
                        "zh-Hant": "證件類型"
                    },
                    selectCertificateType: {
                        zh: "请选择您的证件类型",
                        en: "Please select type of certificate",
                        vi: "--",
                        "zh-Hant": "請選擇您的證件類型"
                    },
                    certificateNumber: {
                        zh: "证件号码",
                        en: "Certificate number",
                        vi: "--",
                        "zh-Hant": "證件號碼"
                    },
                    fillCertificateNumber: {
                        zh: "请输入证件号码",
                        en: "Please fill in the ID number",
                        vi: "--",
                        "zh-Hant": "請輸入證件號碼"
                    },
                    certificateNumberExists: {
                        zh: "证件号码已存在",
                        en: "Certificate number already exists",
                        vi: "--",
                        "zh-Hant": "證件號碼已存在"
                    },
                    enterGender: {
                        zh: "请输入性别",
                        en: "Please enter gender",
                        vi: "--",
                        "zh-Hant": "請輸入性別"
                    },
                    enterBirthday: {
                        zh: "请输入您的生日",
                        en: "Please enter birthday",
                        vi: "--",
                        "zh-Hant": "請輸入您的生日"
                    },
                    birthday: {
                        zh: "生日",
                        en: "Birthday",
                        vi: "--",
                        "zh-Hant": "生日"
                    },
                    uploadFrontSide: {
                        zh: "点击上传证件正面",
                        en: "Upload front side",
                        vi: "--",
                        "zh-Hant": "點擊上傳證件正面"
                    },
                    submitFrontSide: {
                        zh: "请提交证件正面",
                        en: "Please submit front side",
                        vi: "--",
                        "zh-Hant": "請提交證件正面"
                    },
                    uploading: {
                        zh: "正在上传",
                        en: "Uploading",
                        vi: "--",
                        "zh-Hant": "正在上傳"
                    },
                    uploadSuccessfully: {
                        zh: "上传成功",
                        en: "Upload successfully",
                        vi: "--",
                        "zh-Hant": "上傳成功"
                    },
                    tip25: {
                        zh: "提交失败！请提交小于 2MB 的图片",
                        en: "Upload failed! Please submit pictures less than 2MB",
                        vi: "--",
                        "zh-Hant": "提交失敗！請提交小於 2MB 的圖片"
                    },
                    uploadBackSide: {
                        zh: "点击上传证件反面",
                        en: "Upload back side",
                        vi: "--",
                        "zh-Hant": "點擊上傳證件反面"
                    },
                    submitBackSide: {
                        zh: "请提交证件背面",
                        en: "Please submit back side",
                        vi: "--",
                        "zh-Hant": "請提交證件背面"
                    },
                    tip26: {
                        zh: "目前只支持2MB的PNG、JPG格式",
                        en: "Currently only 2MB PNG, JPG format is supported",
                        vi: "--",
                        "zh-Hant": "目前只支持2MB的PNG、JPG格式"
                    },
                    uploadWait: {
                        zh: "文件上传中,请耐心等待",
                        en: "Uploading, please wait a minute.",
                        vi: "--",
                        "zh-Hant": "文件上傳中,請耐心等待"
                    },
                    systemBusy: {
                        zh: "系统繁忙",
                        en: "System is busy",
                        vi: "--",
                        "zh-Hant": "系統繁忙"
                    },
                    tip27: {
                        zh: "您上传的身份证正在审核中，审核通过后，我们将通过短信或邮件的方式通知您，请注意查收",
                        en: "The ID card you uploaded is under review. After the audit, we will inform you by SMS or email, please note to check.",
                        vi: "--",
                        "zh-Hant": "您上傳的身份證正在審核中，審核通過後，我們將通過短信或郵件的方式通知您，請註意查收"
                    },
                    tip28: {
                        zh: "注意：审核期间并不影响您的正常交易",
                        en: "Note: the audit period does not affect your normal transactions",
                        vi: "--",
                        "zh-Hant": "註意：審核期間並不影響您的正常交易"
                    },
                    dear: {
                        zh: "尊敬的",
                        en: "Dear",
                        vi: "--",
                        "zh-Hant": "尊敬的"
                    },
                    tip29: {
                        zh: "您好，您上传的身份信息已经通过审核，请放心交易",
                        en: "The identity information you uploaded has been approved. Please feel free to trade.",
                        vi: "--",
                        "zh-Hant": "您好，您上傳的身份信息已經通過審核，請放心交易"
                    },
                    transaction: {
                        zh: "交易提醒",
                        en: "Transaction",
                        vi: "--",
                        "zh-Hant": "交易提醒"
                    },
                    system: {
                        zh: "系统提醒",
                        en: "System",
                        vi: "--",
                        "zh-Hant": "系統提醒"
                    },
                    systemMessages: {
                        zh: "系统消息",
                        en: "System messages",
                        vi: "--",
                        "zh-Hant": "系統消息"
                    },
                    tip34: {
                        zh: "您的账户尚未完成认证审核，将无法进行交易和资金相关操作，点击此处完成审核。",
                        en: "This account has not yet been certified, trading and money-related operations will not be possible，click here to complete the review.",
                        vi: "--",
                        "zh-Hant": "您的帳護尚未完成認證審核，將無法進行交易和資金相關操作，點擊此處完成審核。"
                    },
                    tip35: {
                        zh: "您当前账户为体验金账户，升级至真实账户只需两步：",
                        en: "Your current account is an experiential account, which can be upgraded to live account in two steps: ",
                        vi: "--",
                        "zh-Hant": "您當前帳護為體驗金帳護，升級至真實帳護只需兩步："
                    },
                    tip36: {
                        zh: "完整填写个人信息",
                        en: "Complete personal information",
                        vi: "--",
                        "zh-Hant": "完整填寫個人信息"
                    },
                    loginWithVerificationCode: {
                        zh: "验证码登录",
                        en: "Login with verification code",
                        vi: "--",
                        "zh-Hant": "驗證碼登錄"
                    },
                    loginAgain: {
                        zh: "请重新登录",
                        en: "Please login again",
                        vi: "--",
                        "zh-Hant": "請重新登錄"
                    },
                    tip37: {
                        zh: "外汇市场波动较大，基于您的年龄考虑，小老虎提醒您慎重交易。",
                        en: "Foreign exchange market fluctuations, based on your age considerations, TigeWit reminds you to trade carefully.",
                        vi: "--",
                        "zh-Hant": "外匯市場波動較大，基於您的年齡考慮，小老虎提醒您慎重交易。"
                    },
                    loginFailed: {
                        zh: "登录失败",
                        en: "Login failed",
                        vi: "--",
                        "zh-Hant": "登錄失敗"
                    },
                    loginSucc: {
                        zh: "登录成功",
                        en: "Login successfully",
                        vi: "--",
                        "zh-Hant": "登錄成功"
                    },
                    getFailedQuote: {
                        zh: "获取报价失败",
                        en: "Failed to get quote",
                        vi: "--",
                        "zh-Hant": "獲取報價失敗"
                    },
                    requestQuotation: {
                        zh: "请求报价品种",
                        en: "Request for quotation",
                        vi: "--",
                        "zh-Hant": "請求報價品種"
                    },
                    tip38: {
                        zh: "开通真实账户后，将不再支持开通体验金账户",
                        en: "After opening live account, it will no longer be supported to open experience account",
                        vi: "--",
                        "zh-Hant": "開通真實帳護後，將不再支持開通體驗金帳護"
                    },
                    experienceAccount: {
                        zh: "体验金账户",
                        en: "Experience account",
                        vi: "--",
                        "zh-Hant": "體驗金帳護"
                    },
                    tip39_1: {
                        zh: " ",
                        en: "Resend(",
                        vi: "--",
                        "zh-Hant": " "
                    },
                    tip39_2: {
                        zh: "秒后重新获取",
                        en: "s)",
                        vi: "--",
                        "zh-Hant": "秒後重新獲取"
                    },
                    tip40_1: {
                        zh: "由于您没有登录，无法",
                        en: "You are not logged in, cannot ",
                        vi: "--",
                        "zh-Hant": "由於您沒有登錄，無法"
                    },
                    tip40_2: {
                        zh: "高手",
                        en: " master",
                        vi: "--",
                        "zh-Hant": "高手"
                    },
                    unableOperate_1: {
                        zh: "无法进行",
                        en: "Unable to operate ",
                        vi: "--",
                        "zh-Hant": "無法進行"
                    },
                    unableOperate_2: {
                        zh: "操作",
                        en: " ",
                        vi: "--",
                        "zh-Hant": "操作"
                    },
                    agentManagement: {
                        zh: "代理商管理后台",
                        en: "Agent management",
                        vi: "--",
                        "zh-Hant": "代理商管理後臺"
                    },
                    unableCountry: {
                        zh: "【暂不提供该国家的相关服务。】",
                        en: "We are unable to offer trading <br> services for this country.",
                        vi: "--",
                        "zh-Hant": "【暫不提供該國家的相關服務。】"
                    },
                    cardEgTitle: {
                        zh: "拍摄示例",
                        en: "Shooting examples",
                        vi: "--",
                        "zh-Hant": "拍攝示例"
                    },
                    cardEgTip1: {
                        zh: "标准",
                        en: "Standard",
                        vi: "--",
                        "zh-Hant": "標準"
                    },
                    cardEgTip2: {
                        zh: "图像过小",
                        en: "Picture small",
                        vi: "--",
                        "zh-Hant": "圖像過小"
                    },
                    cardEgTip3: {
                        zh: "图像模糊",
                        en: "Picture fuzzy",
                        vi: "--",
                        "zh-Hant": "圖像模糊"
                    },
                    cardEgTip4: {
                        zh: "照片反光",
                        en: "Picture reflective",
                        vi: "--",
                        "zh-Hant": "照片反光"
                    }
                },
                tip: {
                    tip1: {
                        zh: "身份证号为 15 或 18 位数字，最后一位为字母时用大写 X",
                        en: "ID number is 15 or 18 digits, with a capital X when it for the last letter",
                        vi: "--",
                        "zh-Hant": "身份證號為 15 或 18 位數字，最後壹位為字母時用大寫 X"
                    },
                    tip2: {
                        zh: "手机号码为 1 开头的 11 位数字",
                        en: "The phone number is 11 digits beginning with 1",
                        vi: "--",
                        "zh-Hant": "手機號碼為 1 開頭的 11 位數字"
                    },
                    tip3: {
                        zh: "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        en: "The input amount must be integer or decimal number greater than zero (no more than two digits after the decimal point)",
                        vi: "--",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）"
                    },
                    doubleByteCharacter: {
                        zh: "双字节字符",
                        en: "Double byte character",
                        vi: "--",
                        "zh-Hant": "雙字節字符"
                    },
                    tip4: {
                        zh: "邮箱前缀由字母、数字、下划线、减号、点号组成，以字母、数字结尾",
                        en: "The mailbox prefix consists of letters, Numbers, underscores, minus and dots, and ends with letters and Numbers",
                        vi: "--",
                        "zh-Hant": "郵箱前綴由字母、數字、下劃線、減號、點號組成，以字母、數字結尾"
                    },
                    tip5: {
                        zh: "昵称包含2-16个字符，支持中英文、数字",
                        en: "Username contains 2-16 characters, support Chinese, English and Numbers",
                        vi: "--",
                        "zh-Hant": "昵稱包含2-16個字符，支持中英文、數字"
                    },
                    tip6: {
                        zh: "学校名称包含 4-20 个字符，由汉字、字母组成，超过字符限制的用简称代替",
                        en: "The school name contains 4-20 characters, which are composed of Chinese characters and letters, use abbreviations when character limit exceeded.",
                        vi: "--",
                        "zh-Hant": "學校名稱包含 4-20 個字符，由漢字、字母組成，超過字符限制的用間稱代替"
                    },
                    tip7: {
                        zh: "真实姓名由2-20个汉字以及 · 号组成",
                        en: "The real name consists of 2-20 Chinese characters and ‘·’symbol",
                        vi: "--",
                        "zh-Hant": "真實姓名由2-20個漢字以及 · 號組成"
                    },
                    tip8: {
                        zh: "银行卡卡号为 12-19 位数字",
                        en: "Bank card number is 12-19 digits",
                        vi: "--",
                        "zh-Hant": "銀行卡卡號為 12-19 位數字"
                    },
                    tip9: {
                        zh: "密码由字母、数字和符号两种及以上组合，长度为 6-15个字符",
                        en: "A password consists of two or more combinations of letters, Numbers, and symbols and is 6-15 characters long",
                        vi: "--",
                        "zh-Hant": "密碼由字母、數字和符號兩種及以上組合，長度為 6-15個字符"
                    },
                    simplifiedChinese: {
                        zh: "简体中文",
                        en: "Simplified Chinese",
                        vi: "--",
                        "zh-Hant": "間體中文"
                    },
                    pleaseEnterEnglish: {
                        zh: "请输入英文",
                        en: "Please enter English",
                        vi: "--",
                        "zh-Hant": "請輸入英文"
                    },
                    legalSymbol: {
                        zh: "合法的符号",
                        en: "Legal symbol",
                        vi: "--",
                        "zh-Hant": "合法的符號"
                    },
                    containsIllegalChar: {
                        zh: "包含非法字符",
                        en: "Contains illegal characters",
                        vi: "--",
                        "zh-Hant": "包含非法字符"
                    },
                    tip10: {
                        zh: "字符数不符合要求",
                        en: "The number of characters does not meet the requirement",
                        vi: "--",
                        "zh-Hant": "字符數不符合要求"
                    },
                    tip11: {
                        zh: "位数不正确或者包含非法字符",
                        en: "The number of digits is incorrect or contains illegal characters",
                        vi: "--",
                        "zh-Hant": "位數不正確或者包含非法字符"
                    },
                    passwordWeak: {
                        zh: "密码强度过弱",
                        en: "Passwords are too weak",
                        vi: "--",
                        "zh-Hant": "密碼強度過弱"
                    },
                    tip12_1: {
                        zh: "请完成第",
                        en: "Please complete question ",
                        vi: "--",
                        "zh-Hant": "請完成第"
                    },
                    tip12_2: {
                        zh: "题：",
                        en: ": ",
                        vi: "--",
                        "zh-Hant": "題："
                    },
                    tip13_1: {
                        zh: "是否有",
                        en: "Is the ",
                        vi: "--",
                        "zh-Hant": "是否有"
                    },
                    tip13_2: {
                        zh: "账号？",
                        en: " account number?",
                        vi: "--",
                        "zh-Hant": "帳號？"
                    }
                },
                tradingAccount: {
                    title: {
                        zh: "交易账户",
                        en: "Trade Account",
                        vi: "--",
                        "zh-Hant": "交易帳護"
                    },
                    totalAssets: {
                        zh: "资产总额",
                        en: "Total Assets",
                        vi: "--",
                        "zh-Hant": "資產總額"
                    },
                    totalLots: {
                        zh: "总交易手数",
                        en: "Total Lots",
                        vi: "--",
                        "zh-Hant": "總交易手數"
                    },
                    totalEarnings: {
                        zh: "总盈利",
                        en: "Total Earnings",
                        vi: "--",
                        "zh-Hant": "總盈利"
                    },
                    totalProfitRate: {
                        zh: "总收益率",
                        en: "Total Profit Rate",
                        vi: "--",
                        "zh-Hant": "總收益率"
                    },
                    tradingSubAccounts: {
                        zh: "交易子账户",
                        en: "Trade Sub-accounts",
                        vi: "--",
                        "zh-Hant": "交易子帳護"
                    },
                    createAccount: {
                        zh: "新建账号",
                        en: "Create account",
                        vi: "--",
                        "zh-Hant": "新建帳號"
                    },
                    becomeMaster: {
                        zh: "申请高手",
                        en: "Become a master",
                        vi: "--",
                        "zh-Hant": "申請高手"
                    },
                    netAssetValue: {
                        zh: "资产净值",
                        en: "Equity",
                        vi: "--",
                        "zh-Hant": "資產凈值"
                    },
                    floatingPL: {
                        zh: "浮动盈亏",
                        en: "Floating P/L",
                        vi: "--",
                        "zh-Hant": "浮動盈虧"
                    },
                    marginLevel: {
                        zh: "保证金比例",
                        en: "Margin level",
                        vi: "--",
                        "zh-Hant": "保證金比例"
                    },
                    depositToActivate: {
                        zh: "充值激活账户",
                        en: "Deposit to activate",
                        vi: "--",
                        "zh-Hant": "充值激活帳護"
                    },
                    openTrades: {
                        zh: "当前交易",
                        en: "Open Trades",
                        vi: "--",
                        "zh-Hant": "當前交易"
                    },
                    tip1: {
                        zh: "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        en: "The earnings you gained with the master and the agent will be deducted 20% to the master as a commission. Please refer to the details：",
                        vi: "--",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考："
                    },
                    modifyCopyAmount: {
                        zh: "修改复制金额",
                        en: "Modify the Copy Amount",
                        vi: "--",
                        "zh-Hant": "修改復制金額"
                    },
                    availableAmount: {
                        zh: "可用金额",
                        en: "Available Amount",
                        vi: "--",
                        "zh-Hant": "可用金額"
                    },
                    recommended: {
                        zh: "建议复制金额",
                        en: "Recommended",
                        vi: "--",
                        "zh-Hant": "建議復制金額"
                    },
                    recommendedM: {
                        zh: "建议复制金额：",
                        en: "Recommended: ",
                        vi: "--",
                        "zh-Hant": "建議復制金額："
                    },
                    tip2: {
                        zh: "若复制金额低于建议复制金额，当高手下单手数较小时，可能会导致跟单失败。",
                        en: "If the amount of the copy less than the recommended amount, the master's trade is too small, your follow order will be failed.",
                        vi: "--",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時，可能會導致跟單失敗。"
                    },
                    amountInsufficient: {
                        zh: "可用金额不足",
                        en: "Available amount is insufficient",
                        vi: "--",
                        "zh-Hant": "可用金額不足"
                    },
                    goDeposit: {
                        zh: "去充值",
                        en: "deposit",
                        vi: "--",
                        "zh-Hant": "去充值"
                    },
                    cancelFollow: {
                        zh: "取消复制",
                        en: "Cancel follow",
                        vi: "--",
                        "zh-Hant": "取消復制"
                    },
                    sureCancelFollow: {
                        zh: "是否确定取消复制?",
                        en: "Are you sure to cancel following ?",
                        vi: "--",
                        "zh-Hant": "是否確定取消復制?"
                    },
                    tip3: {
                        zh: "若取消复制关系，您复制此高手的订单可以选择跟随高手平仓或立即强行平仓",
                        en: "If you cancel the following relationship, the ordor you following the master can be position closing or compulsory position close.",
                        vi: "--",
                        "zh-Hant": "若取消復制關系，您復制此高手的訂單可以選擇跟隨高手平倉或立即強行平倉"
                    },
                    cancelFollowClose: {
                        zh: "取消复制并跟随高手平仓",
                        en: "Cancel and follow the close",
                        vi: "--",
                        "zh-Hant": "取消復制並跟隨高手平倉"
                    },
                    cancelForceFlat: {
                        zh: "取消复制并强行平仓",
                        en: "Cancel and force a flat",
                        vi: "--",
                        "zh-Hant": "取消復制並強行平倉"
                    },
                    successfullyCanceled: {
                        zh: "取消复制成功",
                        en: "Successfully canceled",
                        vi: "--",
                        "zh-Hant": "取消復制成功"
                    },
                    tip4: {
                        zh: "成为老虎外汇高手，获取20%盈利分成",
                        en: "Become a tigerwit’s master, get 20% profit share",
                        vi: "--",
                        "zh-Hant": "成為老虎外匯高手，獲取20%盈利分成"
                    },
                    help: {
                        zh: "帮助中心",
                        en: "Help",
                        vi: "--",
                        "zh-Hant": "幫助中心"
                    },
                    contactCustomerService: {
                        zh: "联系客服",
                        en: "Contact Customer Service",
                        vi: "--",
                        "zh-Hant": "聯系客服"
                    },
                    masterAccount: {
                        zh: "高手账号",
                        en: "Master account",
                        vi: "--",
                        "zh-Hant": "高手帳號"
                    },
                    masterLevelCommission: {
                        zh: "高手等级&佣金",
                        en: "Master level & Commission",
                        vi: "--",
                        "zh-Hant": "高手等級&傭金"
                    },
                    commission: {
                        zh: "跟单佣金",
                        en: "Commission",
                        vi: "--",
                        "zh-Hant": "跟單傭金"
                    },
                    tip5: {
                        zh: "继续完成以下操作，即可开始交易：",
                        en: "Continue to complete the following operations to start transaction: ",
                        vi: "--",
                        "zh-Hant": "繼續完成以下操作，即可開始交易："
                    },
                    tip6: {
                        zh: "您的开户信息已经发送至您的邮箱",
                        en: "Your account information has been sent to your mailbox",
                        vi: "--",
                        "zh-Hant": "您的開護信息已經發送至您的郵箱"
                    },
                    lastMonthCommission: {
                        zh: "上月分成",
                        en: "Last month commission",
                        vi: "--",
                        "zh-Hant": "上月分成"
                    },
                    tip7: {
                        zh: "上一个自然月的分成数据",
                        en: "Data for the last month commission",
                        vi: "--",
                        "zh-Hant": "上壹個自然月的分成數據"
                    },
                    totalCommission: {
                        zh: "获得分成总计",
                        en: "Total commission",
                        vi: "--",
                        "zh-Hant": "獲得分成總計"
                    },
                    tip8: {
                        zh: "用户开户至今扣除的分成总和",
                        en: "Total deductions commission of user from open account date",
                        vi: "--",
                        "zh-Hant": "用護開護至今扣除的分成總和"
                    },
                    follower: {
                        zh: "复制者",
                        en: "Follower",
                        vi: "--",
                        "zh-Hant": "復制者"
                    },
                    gainCommission: {
                        zh: "获得佣金",
                        en: "Gain commission",
                        vi: "--",
                        "zh-Hant": "獲得傭金"
                    },
                    deductedCommission: {
                        zh: "扣除佣金 ",
                        en: "Deducted commission",
                        vi: "--",
                        "zh-Hant": "扣除傭金 "
                    },
                    cancelCopyTransactions: {
                        zh: "取消复制交易",
                        en: "Cancel follow transactions",
                        vi: "--",
                        "zh-Hant": "取消復制交易"
                    },
                    cancelCopyFailed: {
                        zh: "取消复制失败",
                        en: "Cancel follow failed",
                        vi: "--",
                        "zh-Hant": "取消復制失敗"
                    },
                    enterCopyAmount: {
                        zh: "请输入复制金额",
                        en: "Please enter copy amount",
                        vi: "--",
                        "zh-Hant": "請輸入復制金額"
                    },
                    minimumCopyAmount: {
                        zh: "最小复制金额为",
                        en: "The minimum copy amount is ",
                        vi: "--",
                        "zh-Hant": "最小復制金額為"
                    },
                    availableCopyAmount: {
                        zh: "可用复制金额",
                        en: "Available",
                        vi: "--",
                        "zh-Hant": "可用復制金額"
                    },
                    availableCopyAmountM: {
                        zh: "可用复制金额：",
                        en: "Available: ",
                        vi: "--",
                        "zh-Hant": "可用復制金額："
                    },
                    remainingCopiableFunds: {
                        zh: "高手剩余可复制金额",
                        en: "Master remaining",
                        vi: "--",
                        "zh-Hant": "高手剩余可復制金額"
                    },
                    remainingCopiableFundsM: {
                        zh: "高手剩余可复制金额：",
                        en: "Master remaining: ",
                        vi: "--",
                        "zh-Hant": "高手剩余可復制金額："
                    },
                    tip9: {
                        zh: "系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        en: "TigerWit’s automated aystems allow you to follow a TigerWit Master via your copy account. If you have not yet set up a copy account the system will generate one automatically for you and all following copy trades will beexecuted from this copy account.",
                        vi: "--",
                        "zh-Hant": "系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；"
                    },
                    tip10: {
                        zh: "若复制金额低于建议复制金额，可能会导致跟单失败。",
                        en: "You must enter a copy amount at least equal to the recommended copy amount or the order may not be executed.",
                        vi: "--",
                        "zh-Hant": "若復制金額低於建議復制金額，可能會導致跟單失敗。"
                    },
                    tip11: {
                        zh: "可用复制金额不足",
                        en: "Available copy amount is insufficient",
                        vi: "--",
                        "zh-Hant": "可用復制金額不足"
                    },
                    confirm: {
                        zh: "确认修改",
                        en: "Confirm",
                        vi: "--",
                        "zh-Hant": "確認修改"
                    },
                    tip12: {
                        zh: "您的复制金额低于建议复制金额，有跟单失败的风险，仍然继续复制吗？",
                        en: "Your copy amount is lower than the suggested copy amount, and there is a risk that the order will fail. Do you still copy?",
                        vi: "--",
                        "zh-Hant": "您的復制金額低於建議復制金額，有跟單失敗的風險，仍然繼續復制嗎？"
                    },
                    suggestedAmount: {
                        zh: "建议金额",
                        en: "Suggested amount",
                        vi: "--",
                        "zh-Hant": "建議金額"
                    },
                    suggestedAmountM: {
                        zh: "建议金额：",
                        en: "Suggested amount: ",
                        vi: "--",
                        "zh-Hant": "建議金額："
                    },
                    copySuccess: {
                        zh: "复制成功",
                        en: "Follow success",
                        vi: "--",
                        "zh-Hant": "復制成功"
                    },
                    copyAmountSucc: {
                        zh: "复制金额修改成功",
                        en: "Copy amount modified successfully",
                        vi: "--",
                        "zh-Hant": "復制金額修改成功"
                    },
                    tip13: {
                        zh: "跟随高手平仓",
                        en: "Follow master to close positions",
                        vi: "--",
                        "zh-Hant": "跟隨高手平倉"
                    },
                    tip14: {
                        zh: "不跟随平仓",
                        en: "Don’t follow master to close positions",
                        vi: "--",
                        "zh-Hant": "不跟隨平倉"
                    },
                    tip15: {
                        zh: "该高手没有持仓订单",
                        en: "The master has no position order",
                        vi: "--",
                        "zh-Hant": "該高手沒有持倉訂單"
                    },
                    detailInformation: {
                        zh: "详情信息",
                        en: "Detail information",
                        vi: "--",
                        "zh-Hant": "詳情信息"
                    },
                    followedMaster: {
                        zh: "所跟高手",
                        en: "Followed master",
                        vi: "--",
                        "zh-Hant": "所跟高手"
                    },
                    copyAccount: {
                        zh: "跟单账号",
                        en: "Copy account",
                        vi: "--",
                        "zh-Hant": "跟單帳號"
                    },
                    enterAccountName: {
                        zh: "请输入账号名称",
                        en: "Please enter account name",
                        vi: "--",
                        "zh-Hant": "請輸入帳號名稱"
                    },
                    tip16: {
                        zh: "账号名称包含2-8个字符，支持中英文，数字",
                        en: "The account name contains 2-8 characters and supports both Chinese，English and Numbers.",
                        vi: "--",
                        "zh-Hant": "帳號名稱包含2-8個字符，支持中英文，數字"
                    },
                    details: {
                        zh: "查看详情",
                        en: "Details",
                        vi: "--",
                        "zh-Hant": "查看詳情"
                    },
                    depositActivation: {
                        zh: "充值激活",
                        en: "Deposit activation",
                        vi: "--",
                        "zh-Hant": "充值激活"
                    },
                    newSubAccountRules: {
                        zh: "新建子账号规则",
                        en: "New sub-account rules",
                        vi: "--",
                        "zh-Hant": "新建子帳號規則"
                    },
                    tip17: {
                        zh: "交易账户下最多支持免费创建七个账号；",
                        en: "Up to 7 sub-accounts can be created for free under the trading account;",
                        vi: "--",
                        "zh-Hant": "交易帳護下最多支持免費創建七個帳號；"
                    },
                    tip18: {
                        zh: "新建子账号前需确保已充值激活所有已开通子账号",
                        en: "Make sure that all the accounts have been deposited and activated before create new sub-account.",
                        vi: "--",
                        "zh-Hant": "新建子帳號前需確保已充值激活所有已開通子帳號"
                    },
                    createSubAccount: {
                        zh: "创建子账号",
                        en: "Create sub-account",
                        vi: "--",
                        "zh-Hant": "創建子帳號"
                    },
                    getVerificationInfo: {
                        zh: "正在获取您的认证信息",
                        en: "Getting your verification information",
                        vi: "--",
                        "zh-Hant": "正在獲取您的認證信息"
                    },
                    tip19: {
                        zh: "子账号创建成功",
                        en: "Subaccount was successfully created",
                        vi: "--",
                        "zh-Hant": "子帳號創建成功"
                    },
                    tip20: {
                        zh: "子账号创建成功，账号尚未激活，请及时充值",
                        en: "The subaccount was successfully created. The account has not been activated yet. Please deposit in time.",
                        vi: "--",
                        "zh-Hant": "子帳號創建成功，帳號尚未激活，請及時充值"
                    },
                    followerAmount: {
                        zh: "跟随人数",
                        en: "Follower amount",
                        vi: "--",
                        "zh-Hant": "跟隨人數"
                    },
                    tip21: {
                        zh: "用户真实入金后平仓产生的收益总数",
                        en: "Total earnings of closing position after deposit",
                        vi: "--",
                        "zh-Hant": "用護真實入金後平倉產生的收益總數"
                    },
                    tip22: {
                        zh: "任何通过第三方作弊软件刷取好友邀请奖励，一经发现有权取消红包兑现奖励；",
                        en: "Any cheating, if discovered by TigerWit, will be disqualified.",
                        vi: "--",
                        "zh-Hant": "任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現有權取消紅包兌現獎勵；"
                    },
                    tip23: {
                        zh: "本活动最终解释权归所有。如有疑问，请咨询客服",
                        en: "The final interpretation of this activity owned by TigerWit. If you have other questions，please contact TigerWit customer service.",
                        vi: "--",
                        "zh-Hant": "本活動最終解釋權歸所有。如有疑問，請咨詢客服"
                    },
                    deposited: {
                        zh: "已入金",
                        en: "Deposited",
                        vi: "--",
                        "zh-Hant": "已入金"
                    },
                    noDeposit: {
                        zh: "未入金",
                        en: "No Deposit",
                        vi: "--",
                        "zh-Hant": "未入金"
                    },
                    submit: {
                        zh: "确认提交",
                        en: "Submit",
                        vi: "--",
                        "zh-Hant": "確認提交"
                    },
                    experienceAccount: {
                        zh: "体验金账号",
                        en: "Experience account",
                        vi: "--",
                        "zh-Hant": "體驗金帳號"
                    },
                    tradingAccount: {
                        zh: "自主交易账号",
                        en: "Trading account",
                        vi: "--",
                        "zh-Hant": "自主交易帳號"
                    },
                    copyAccounts: {
                        zh: "跟随账号",
                        en: "Copy account",
                        vi: "--",
                        "zh-Hant": "跟隨帳號"
                    },
                    tradingAccountg: {
                        zh: "交易账号",
                        en: "Trading account",
                        vi: "--",
                        "zh-Hant": "交易帳號"
                    },
                    chooseTradingAccount: {
                        zh: "选择交易账户",
                        en: "Choose trading account",
                        vi: "--",
                        "zh-Hant": "選擇交易帳護"
                    },
                    accountBalance: {
                        zh: "账户余额",
                        en: "Account balance",
                        vi: "--",
                        "zh-Hant": "帳護余額"
                    },
                    accountBalanceM: {
                        zh: "账户余额：",
                        en: "Account balance: ",
                        vi: "--",
                        "zh-Hant": "帳護余額："
                    },
                    tip24: {
                        zh: "您的账户正在审核中, 请等待审核通过再进行此操作",
                        en: "Account is under review, please re-operation after submission",
                        vi: "--",
                        "zh-Hant": "您的帳護正在審核中, 請等待審核通過再進行此操作"
                    },
                    tip25: {
                        zh: "您的账户正在审核中，请等待审核通过后再进行复制操作",
                        en: "Account is under review, please re-follow after submission",
                        vi: "--",
                        "zh-Hant": "您的帳護正在審核中，請等待審核通過後再進行復制操作"
                    },
                    tip26: {
                        zh: "您的账户正在审核中，请等待审核通过后再进行提现操作",
                        en: "Account is under review, please re-withdraw after submission",
                        vi: "--",
                        "zh-Hant": "您的帳護正在審核中，請等待審核通過後再進行提現操作"
                    },
                    tip27: {
                        zh: "您的账户正在审核中，请等待审核通过后再进行充值操作",
                        en: "Account is under review, please re-deposit after submission",
                        vi: "--",
                        "zh-Hant": "您的帳護正在審核中，請等待審核通過後再進行充值操作"
                    }
                },
                details: {
                    title: {
                        zh: "详情",
                        en: "Details",
                        vi: "--",
                        "zh-Hant": "詳情"
                    },
                    netAssetValue: {
                        zh: "资产净值",
                        en: "Equity",
                        vi: "--",
                        "zh-Hant": "資產凈值"
                    },
                    freeMargin: {
                        zh: "可用保证金",
                        en: "Free margin",
                        vi: "--",
                        "zh-Hant": "可用保證金"
                    },
                    marginLevel: {
                        zh: "保证金比例",
                        en: "Margin level",
                        vi: "--",
                        "zh-Hant": "保證金比例"
                    },
                    marginLevelM: {
                        zh: "保证金比例：",
                        en: "Margin level: ",
                        vi: "--",
                        "zh-Hant": "保證金比例："
                    },
                    totalLots: {
                        zh: "总交易手数",
                        en: "Total Lots",
                        vi: "--",
                        "zh-Hant": "總交易手數"
                    },
                    historicalTotalEarning: {
                        zh: "历史总收益",
                        en: "History Total Earnings",
                        vi: "--",
                        "zh-Hant": "歷史總收益"
                    },
                    floatingPL: {
                        zh: "浮动盈亏",
                        en: "Floating P/L",
                        vi: "--",
                        "zh-Hant": "浮動盈虧"
                    },
                    totalProfitRate: {
                        zh: "总收益率",
                        en: "Total Profit Rate",
                        vi: "--",
                        "zh-Hant": "總收益率"
                    },
                    currentTrading: {
                        zh: "当前交易",
                        en: "Current Trading",
                        vi: "--",
                        "zh-Hant": "當前交易"
                    },
                    deducted20Note: {
                        zh: "注：您复制高手的盈利部分将会扣除20%作为佣金给高手。详情请参考：",
                        en: "Note：The 20% profit that you gain by following the master will be deducted as commission. Please refer to: ",
                        vi: "--",
                        "zh-Hant": "註：您復制高手的盈利部分將會扣除20%作為傭金給高手。詳情請慘考："
                    },
                    operation: {
                        zh: "操作",
                        en: "Operation",
                        vi: "--",
                        "zh-Hant": "操作"
                    },
                    openPrice: {
                        zh: "开仓价",
                        en: "Open price",
                        vi: "--",
                        "zh-Hant": "開倉價"
                    },
                    currentPrice: {
                        zh: "现价",
                        en: "Current price",
                        vi: "--",
                        "zh-Hant": "現價"
                    },
                    profit: {
                        zh: "收益",
                        en: "Profit",
                        vi: "--",
                        "zh-Hant": "收益"
                    },
                    autonomousTransaction: {
                        zh: "自主交易",
                        en: "Independent Trading",
                        vi: "--",
                        "zh-Hant": "自主交易"
                    },
                    copyTrade: {
                        zh: "复制交易",
                        en: "Follow masters' transaction mode",
                        vi: "--",
                        "zh-Hant": "復制交易"
                    },
                    cancel: {
                        zh: "取消复制",
                        en: "Cancel",
                        vi: "--",
                        "zh-Hant": "取消復制"
                    },
                    followOrders: {
                        zh: "跟随持仓",
                        en: "Follow orders",
                        vi: "--",
                        "zh-Hant": "跟隨持倉"
                    },
                    canceledCopy: {
                        zh: "已取消复制",
                        en: "Canceled follow",
                        vi: "--",
                        "zh-Hant": "已取消復制"
                    },
                    copyAmount: {
                        zh: "复制金额",
                        en: "Copy amount",
                        vi: "--",
                        "zh-Hant": "復制金額"
                    },
                    copyAmountM: {
                        zh: "复制金额：",
                        en: "Copy amount: ",
                        vi: "--",
                        "zh-Hant": "復制金額："
                    },
                    lots: {
                        zh: "交易量",
                        en: "Lots",
                        vi: "--",
                        "zh-Hant": "交易量"
                    },
                    fundsOccupying: {
                        zh: "资金占用",
                        en: "Funds Occupying",
                        vi: "--",
                        "zh-Hant": "資金占用"
                    },
                    P_L: {
                        zh: "订单盈亏",
                        en: "P/L",
                        vi: "--",
                        "zh-Hant": "訂單盈虧"
                    },
                    swap: {
                        zh: "库存费",
                        en: "Swap",
                        vi: "--",
                        "zh-Hant": "庫存費"
                    },
                    commission: {
                        zh: "手续费",
                        en: "Commission",
                        vi: "--",
                        "zh-Hant": "手續費"
                    },
                    profitRate: {
                        zh: "收益率",
                        en: "Profit Rate",
                        vi: "--",
                        "zh-Hant": "收益率"
                    },
                    investedFunds: {
                        zh: "投入资金",
                        en: "Invested Funds",
                        vi: "--",
                        "zh-Hant": "投入資金"
                    },
                    buy_gbpusd: {
                        zh: "买入 英镑美元",
                        en: "BUY GBPUSD",
                        vi: "--",
                        "zh-Hant": "買入 英鎊美元"
                    },
                    includeCommissionSwap: {
                        zh: "包含手续费、库存费",
                        en: "Include commission and swap",
                        vi: "--",
                        "zh-Hant": "包含手續費、庫存費"
                    },
                    orderNumber: {
                        zh: "订单号",
                        en: "Order Number",
                        vi: "--",
                        "zh-Hant": "訂單號"
                    },
                    followMaster: {
                        zh: "跟随高手",
                        en: "Follow Master",
                        vi: "--",
                        "zh-Hant": "跟隨高手"
                    },
                    openPriceg: {
                        zh: "开仓价格",
                        en: "Open Price",
                        vi: "--",
                        "zh-Hant": "開倉價格"
                    },
                    currentPriceg: {
                        zh: "现在价格",
                        en: "Current Price",
                        vi: "--",
                        "zh-Hant": "現在價格"
                    },
                    margin: {
                        zh: "交易金额",
                        en: "Margin",
                        vi: "--",
                        "zh-Hant": "交易金額"
                    },
                    sL: {
                        zh: "止损价格",
                        en: "SL",
                        vi: "--",
                        "zh-Hant": "止損價格"
                    },
                    tP: {
                        zh: "止盈价格",
                        en: "TP",
                        vi: "--",
                        "zh-Hant": "止盈價格"
                    },
                    openTime: {
                        zh: "开仓时间",
                        en: "Open Time",
                        vi: "--",
                        "zh-Hant": "開倉時間"
                    },
                    closeTime: {
                        zh: "平仓时间",
                        en: "Close Time",
                        vi: "--",
                        "zh-Hant": "平倉時間"
                    },
                    sL_TP: {
                        zh: "止盈/止损",
                        en: "SL/TP",
                        vi: "--",
                        "zh-Hant": "止盈/止損"
                    },
                    close: {
                        zh: "平仓",
                        en: "Close",
                        vi: "--",
                        "zh-Hant": "平倉"
                    },
                    notSet: {
                        zh: "未设置",
                        en: "Not Set",
                        vi: "--",
                        "zh-Hant": "未設置"
                    },
                    modifySL_TP: {
                        zh: "修改止盈止损",
                        en: "Modify the SL/TP",
                        vi: "--",
                        "zh-Hant": "修改止盈止損"
                    },
                    expectedLoss: {
                        zh: "预计亏损",
                        en: "Expected Loss",
                        vi: "--",
                        "zh-Hant": "預計虧損"
                    },
                    expectedProfit: {
                        zh: "预计盈利",
                        en: "Expected Profit",
                        vi: "--",
                        "zh-Hant": "預計盈利"
                    },
                    precautions: {
                        zh: "注意事项：",
                        en: "Precautions: ",
                        vi: "--",
                        "zh-Hant": "註意事項："
                    },
                    Price: {
                        zh: "价格≤xx",
                        en: "Price≤xx",
                        vi: "--",
                        "zh-Hant": "價格≤xx"
                    },
                    tip1: {
                        zh: "修改止盈/止损价格，参考范围以现在的价格为准",
                        en: "Modify the SL / TP, the reference range to the current price shall prevail",
                        vi: "--",
                        "zh-Hant": "修改止盈/止損價格，慘考範圍以現在的價格為準"
                    },
                    orderPrice: {
                        zh: "挂单价",
                        en: "Price",
                        vi: "--",
                        "zh-Hant": "掛單價"
                    },
                    pendingOrder: {
                        zh: "挂单",
                        en: "Pending Order",
                        vi: "--",
                        "zh-Hant": "掛單"
                    },
                    volume: {
                        zh: "手数",
                        en: "Volume",
                        vi: "--",
                        "zh-Hant": "手數"
                    },
                    follow: {
                        zh: "跟随",
                        en: "Follow",
                        vi: "--",
                        "zh-Hant": "跟隨"
                    },
                    following: {
                        zh: "跟随中",
                        en: "Following",
                        vi: "--",
                        "zh-Hant": "跟隨中"
                    },
                    tip2: {
                        zh: "您还没有跟随过高手",
                        en: "You have not followed the master yet",
                        vi: "--",
                        "zh-Hant": "您還沒有跟隨過高手"
                    },
                    noRecord: {
                        zh: "没有取消高手记录",
                        en: "No Record",
                        vi: "--",
                        "zh-Hant": "沒有取消高手記錄"
                    },
                    masterPage: {
                        zh: "高手主页",
                        en: "Master Page",
                        vi: "--",
                        "zh-Hant": "高手主頁"
                    },
                    buyEurusd: {
                        zh: "买入欧元美元",
                        en: "Buy EURUSD",
                        vi: "--",
                        "zh-Hant": "買入歐元美元"
                    },
                    sellEurusd: {
                        zh: "卖出欧元美元",
                        en: "Sell EURUSD",
                        vi: "--",
                        "zh-Hant": "賣出歐元美元"
                    }
                },
                historyTransactions: {
                    title: {
                        zh: "历史交易",
                        en: "History Transactions",
                        vi: "--",
                        "zh-Hant": "歷史交易"
                    },
                    operation: {
                        zh: "操作",
                        en: "Operation",
                        vi: "--",
                        "zh-Hant": "操作"
                    },
                    lots: {
                        zh: "交易手数",
                        en: "Lots",
                        vi: "--",
                        "zh-Hant": "交易手數"
                    },
                    profit: {
                        zh: "收益",
                        en: "Profit",
                        vi: "--",
                        "zh-Hant": "收益"
                    },
                    autonomousTransaction: {
                        zh: "自主交易",
                        en: "Independent Trading",
                        vi: "--",
                        "zh-Hant": "自主交易"
                    },
                    portfolio: {
                        zh: "投资组合",
                        en: "Portfolio",
                        vi: "--",
                        "zh-Hant": "投資組合"
                    },
                    trading: {
                        zh: "自主交易",
                        en: "Trading",
                        vi: "--",
                        "zh-Hant": "自主交易"
                    },
                    copy: {
                        zh: "复制交易",
                        en: "Copy",
                        vi: "--",
                        "zh-Hant": "復制交易"
                    },
                    closePrice: {
                        zh: "平仓价",
                        en: "Close price",
                        vi: "--",
                        "zh-Hant": "平倉價"
                    },
                    margin: {
                        zh: "投入资金",
                        en: "Margin",
                        vi: "--",
                        "zh-Hant": "投入資金"
                    },
                    manualClose: {
                        zh: "手动平仓",
                        en: "Manual Close",
                        vi: "--",
                        "zh-Hant": "手動平倉"
                    },
                    t_P: {
                        zh: "止盈平仓",
                        en: "T/P",
                        vi: "--",
                        "zh-Hant": "止盈平倉"
                    },
                    s_L: {
                        zh: "止损平仓",
                        en: "S/L",
                        vi: "--",
                        "zh-Hant": "止損平倉"
                    },
                    copyProfit: {
                        zh: "跟单收益",
                        en: "Copy Profit",
                        vi: "--",
                        "zh-Hant": "跟單收益"
                    },
                    totalEarnings: {
                        zh: "总收益",
                        en: "Total Earnings",
                        vi: "--",
                        "zh-Hant": "總收益"
                    },
                    totalCopyBrokerage: {
                        zh: "总计跟单分成",
                        en: "Total Copy Brokerage",
                        vi: "--",
                        "zh-Hant": "總計跟單分成"
                    },
                    closedOrders: {
                        zh: "平仓订单",
                        en: "Closed Orders",
                        vi: "--",
                        "zh-Hant": "平倉訂單"
                    },
                    zMargin: {
                        zh: "占用资金",
                        en: "Margin",
                        vi: "--",
                        "zh-Hant": "占用資金"
                    },
                    nonceProfit: {
                        zh: "本次收益",
                        en: "Profit",
                        vi: "--",
                        "zh-Hant": "本次收益"
                    },
                    details: {
                        zh: "分成详情",
                        en: "Details",
                        vi: "--",
                        "zh-Hant": "分成詳情"
                    },
                    commission: {
                        zh: "分成",
                        en: "Commission",
                        vi: "--",
                        "zh-Hant": "分成"
                    },
                    autoClosing: {
                        zh: "自动平仓",
                        en: "Auto Closing",
                        vi: "--",
                        "zh-Hant": "自動平倉"
                    },
                    tip1: {
                        zh: "已经全部加载完毕",
                        en: "Has been fully loaded",
                        vi: "--",
                        "zh-Hant": "已經全部加載完畢"
                    },
                    totalProfitLoss: {
                        zh: "累计收益",
                        en: "Total Profit/Loss",
                        vi: "--",
                        "zh-Hant": "累計收益"
                    },
                    historyFollower: {
                        zh: "历史复制者",
                        en: "Accumulated followers",
                        vi: "--",
                        "zh-Hant": "歷史復制者"
                    }
                },
                dataStatistics: {
                    title: {
                        zh: "数据统计",
                        en: "Data statistics",
                        vi: "--",
                        "zh-Hant": "數據統計"
                    },
                    transactionsProfile: {
                        zh: "交易概况",
                        en: "Transactions profile",
                        vi: "--",
                        "zh-Hant": "交易概況"
                    },
                    closedOrders: {
                        zh: "平仓交易",
                        en: "Closed Orders",
                        vi: "--",
                        "zh-Hant": "平倉交易"
                    },
                    profitOrders: {
                        zh: "盈利订单",
                        en: "Profit",
                        vi: "--",
                        "zh-Hant": "盈利訂單"
                    },
                    lossOrders: {
                        zh: "亏损订单",
                        en: "Loss",
                        vi: "--",
                        "zh-Hant": "虧損訂單"
                    },
                    avgHoldingTime: {
                        zh: "平均持仓时间",
                        en: "Avg. holding time",
                        vi: "--",
                        "zh-Hant": "平均持倉時間"
                    },
                    avgHoldingTimeM: {
                        zh: "平均持仓时间：",
                        en: "Avg. holding time: ",
                        vi: "--",
                        "zh-Hant": "平均持倉時間："
                    },
                    maxDrawdown: {
                        zh: "最大回撤",
                        en: "Max Drawdown",
                        vi: "--",
                        "zh-Hant": "最大回撤"
                    },
                    avgNumberTransactionsPerMonth: {
                        zh: "月平均交易次数",
                        en: "Avg Number of Transactions per Month",
                        vi: "--",
                        "zh-Hant": "月平均交易次數"
                    },
                    maxProfitMargin: {
                        zh: "最大盈利点差",
                        en: "Max Profit Margin",
                        vi: "--",
                        "zh-Hant": "最大盈利點差"
                    },
                    monthlyRateReturn: {
                        zh: "月回报率",
                        en: "Monthly Rate of Return",
                        vi: "--",
                        "zh-Hant": "月回報率"
                    },
                    totalProfitRate: {
                        zh: "总收益率",
                        en: "Total profit rate",
                        vi: "--",
                        "zh-Hant": "總收益率"
                    },
                    tradingChart: {
                        zh: "交易走势图",
                        en: "Trading Chart",
                        vi: "--",
                        "zh-Hant": "交易走勢圖"
                    },
                    monthlyReturns: {
                        zh: "月收益率",
                        en: "Monthly returns",
                        vi: "--",
                        "zh-Hant": "月收益率"
                    },
                    profitRate: {
                        zh: "收益率",
                        en: "Profit Rate",
                        vi: "--",
                        "zh-Hant": "收益率"
                    },
                    profitRateM: {
                        zh: "收益率：",
                        en: "Profit Rate: ",
                        vi: "--",
                        "zh-Hant": "收益率："
                    },
                    mainTradingSymbols: {
                        zh: "主要交易品种",
                        en: "Monthly analytics",
                        vi: "--",
                        "zh-Hant": "主要交易品種"
                    },
                    recommendation: {
                        zh: "分类高手",
                        en: "Recommendation",
                        vi: "--",
                        "zh-Hant": "分類高手"
                    },
                    highIncome: {
                        zh: "收益高手",
                        en: "Profitability",
                        vi: "--",
                        "zh-Hant": "收益高手"
                    },
                    revenueLeading: {
                        zh: "收益领先 表现突出",
                        en: "Revenue leading, outstanding performance",
                        vi: "--",
                        "zh-Hant": "收益領先 表現突出"
                    },
                    steady: {
                        zh: "稳健高手",
                        en: "Steady",
                        vi: "--",
                        "zh-Hant": "穩健高手"
                    },
                    incomeStable: {
                        zh: "收益稳定 回撤率小",
                        en: "Income stable，Retracement is small",
                        vi: "--",
                        "zh-Hant": "收益穩定 回撤率小"
                    },
                    exact: {
                        zh: "常胜高手",
                        en: "Exact",
                        vi: "--",
                        "zh-Hant": "常勝高手"
                    },
                    all: {
                        zh: "综合高手",
                        en: "All",
                        vi: "--",
                        "zh-Hant": "綜合高手"
                    },
                    highAccuracy: {
                        zh: "交易稳定 准确率高",
                        en: "High accuracy",
                        vi: "--",
                        "zh-Hant": "交易穩定 準確率高"
                    },
                    historyFollow: {
                        zh: "历史复制人数",
                        en: "History Follow",
                        vi: "--",
                        "zh-Hant": "歷史復制人數"
                    },
                    last30DaysAccuracy: {
                        zh: "近30天准确率",
                        en: "Last 30 days accuracy",
                        vi: "--",
                        "zh-Hant": "近30天準確率"
                    },
                    more: {
                        zh: "点击加载更多",
                        en: "More",
                        vi: "--",
                        "zh-Hant": "點擊加載更多"
                    },
                    pullDownToRefresh: {
                        zh: "下拉可以刷新",
                        en: "Pull down to refresh",
                        vi: "--",
                        "zh-Hant": "下拉可以刷新"
                    },
                    loosenRefresh: {
                        zh: "松开立即刷新",
                        en: "Loosen the refresh",
                        vi: "--",
                        "zh-Hant": "松開立即刷新"
                    },
                    refreshingData: {
                        zh: "正在刷新数据",
                        en: "Refreshing data",
                        vi: "--",
                        "zh-Hant": "正在刷新數據"
                    },
                    accuracy: {
                        zh: "准确率",
                        en: "Success rate",
                        vi: "--",
                        "zh-Hant": "準確率"
                    },
                    maximumOpen: {
                        zh: "最大开仓",
                        en: "Max. open order",
                        vi: "--",
                        "zh-Hant": "最大開倉"
                    },
                    totalClosingOrders: {
                        zh: "总平仓交易",
                        en: "Total closed orders",
                        vi: "--",
                        "zh-Hant": "總平倉交易"
                    },
                    longsWon: {
                        zh: "成功做多交易",
                        en: "Longs won",
                        vi: "--",
                        "zh-Hant": "成功做多交易"
                    },
                    shortsWon: {
                        zh: "成功做空交易",
                        en: "Shorts won",
                        vi: "--",
                        "zh-Hant": "成功做空交易"
                    },
                    lastTradingDay: {
                        zh: "上一交易日状况",
                        en: "Last day traded",
                        vi: "--",
                        "zh-Hant": "上壹交易日狀況"
                    },
                    nearly7DaysRateReturn: {
                        zh: "近七日交易状况",
                        en: "7-day rate of return",
                        vi: "--",
                        "zh-Hant": "近七日交易狀況"
                    },
                    numberMonthlyAverage: {
                        zh: "月平均交易笔数",
                        en: "Monthly avg.",
                        vi: "--",
                        "zh-Hant": "月平均交易筆數"
                    },
                    maximumDrawdown: {
                        zh: "最大跌幅",
                        en: "Max drawdown",
                        vi: "--",
                        "zh-Hant": "最大跌幅"
                    },
                    steadyg: {
                        zh: "最大跌幅",
                        en: "Stability",
                        vi: "--",
                        "zh-Hant": "最大跌幅"
                    },
                    follow: {
                        zh: "复制高手",
                        en: "Follow",
                        vi: "--",
                        "zh-Hant": "復制高手"
                    },
                    tip1: {
                        zh: "若复制金额低于建议复制金额，当高手下单手数较小时,可能会导致跟单失败。为了保障您的利益，最好填写建议复制金额。",
                        en: "If the copy amount is lower than the recommended amount of replication, when the master single hand count is small, may lead to a single failure. In order to protect your interests, it is best to fill in the recommended copy amount.",
                        vi: "--",
                        "zh-Hant": "若復制金額低於建議復制金額，當高手下單手數較小時,可能會導致跟單失敗。為了保障您的利益，最好填寫建議復制金額。"
                    },
                    tip2: {
                        zh: "可用金额不足，去充值",
                        en: "Available amount is insufficient, deposit",
                        vi: "--",
                        "zh-Hant": "可用金額不足，去充值"
                    },
                    tip3: {
                        zh: "复制高手成功",
                        en: "Follow Successful",
                        vi: "--",
                        "zh-Hant": "復制高手成功"
                    },
                    cancelFollow: {
                        zh: "解除跟随关系",
                        en: "Cancel Follow",
                        vi: "--",
                        "zh-Hant": "解除跟隨關系"
                    },
                    currentCopyAmount: {
                        zh: "当前复制金额",
                        en: "Current copy amount",
                        vi: "--",
                        "zh-Hant": "當前復制金額"
                    },
                    currentCopyAmountM: {
                        zh: "当前复制金额：",
                        en: "Current copy amount: ",
                        vi: "--",
                        "zh-Hant": "當前復制金額："
                    },
                    tigerWitCopyAgreements: {
                        zh: "复制协议",
                        en: "TigerWit Copy Agreements",
                        vi: "--",
                        "zh-Hant": "復制協議"
                    },
                    tigerWitCopyAgreements1: {
                        zh: "使用TigerWit复制跟单服务时，请您务必审慎阅读、充分理解以下协议内容：",
                        en: "When you use TigerWit follow service, please make sure to read and fully understand the following contant of agreements: ",
                        vi: "--",
                        "zh-Hant": "使用TigerWit復制跟單服務時，請您務必審慎閱讀、充分理解以下協議內容："
                    },
                    tigerWitCopyAgreements2: {
                        zh: "1.系统将使用跟单专用账号复制高手，无跟单账号复制时将自动生成，所有复制操作均使用该跟单账号进行；",
                        en: "1. System will use the special copy account to follow masters, the special copy account will be generated if there is no one, and all copy operation will use this special account;",
                        vi: "--",
                        "zh-Hant": "1.系統將使用跟單專用帳號復制高手，無跟單帳號復制時將自動生成，所有復制操作均使用該跟單帳號進行；"
                    },
                    tigerWitCopyAgreements3: {
                        zh: "2.复制成功后，跟单账号自动跟随高手进行同步开平仓交易；",
                        en: "2. After successful follow, the copy account will open orders with master synchronously;",
                        vi: "--",
                        "zh-Hant": "2.復制成功後，跟單帳號自動跟隨高手進行同步開平倉交易；"
                    },
                    tigerWitCopyAgreements4: {
                        zh: "3.系统将定时对您跟随高手的情况进行统计并结算，扣除跟随该高手盈利部分的20%作为该高手佣金。",
                        en: "3. System will statistics and settlement all the orders and deduct 20% as commission when you cancel and force a flat.",
                        vi: "--",
                        "zh-Hant": "3.系統將定時對您跟隨高手的情況進行統計並結算，扣除跟隨該高手盈利部分的20%作為該高手傭金。"
                    },
                    tigerWitCopyAgreements5: {
                        zh: "在决定复制高手时，您确认已经考虑了您的整体财务状况，包括财务承诺，并且您了解使用复制跟单服务具有高度投机性并且您可以承受巨大的损失用于复制高手。",
                        en: "Before follow a master, please make sure you already consider your financial status and understand the copy service have highly speculative also could sustain a great loss.",
                        vi: "--",
                        "zh-Hant": "在抉定復制高手時，您確認已經考慮了您的整體材務狀況，包括材務承諾，並且您了解使用復制跟單服務具有高度投機性並且您可以承受巨大的損失用於復制高手。"
                    },
                    tigerWitCopyAgreements6: {
                        zh: "请注意，我们无法就任何特定投资，账户，投资组合或策略的表现提供任何保证。",
                        en: "Caution, we cannot provide any assurance of the performance of any specific investment, account, portfolio or strategy.",
                        vi: "--",
                        "zh-Hant": "請註意，我們無法就任何特定投資，帳護，投資組合或策略的表現提供任何保證。"
                    },
                    tigerWitCopyAgreements7_1: {
                        zh: "如您对协议有任何疑问，可拨打客服热线",
                        en: "If you have any question about the copy regulations, please contact the service center ",
                        vi: "--",
                        "zh-Hant": "如您對協議有任何疑問，可撥打客服熱線"
                    },
                    tigerWitCopyAgreements7_2: {
                        zh: "进行咨询。",
                        en: ".",
                        vi: "--",
                        "zh-Hant": "進行咨詢。"
                    },
                    copyRegulations: {
                        zh: "《复制规则》",
                        en: "Copy rule",
                        vi: "--",
                        "zh-Hant": "《復制規則》"
                    },
                    tip4: {
                        zh: "指从当前日期开始最近七个自然日交易状况。",
                        en: "Master’s return over previous 7 days of trading.",
                        vi: "--",
                        "zh-Hant": "指從當前日期開始最近七個自然日交易狀況。"
                    },
                    tip5: {
                        zh: "指该高手最后一次有交易行为的数据统计。",
                        en: "Master’s return over previous trading day.",
                        vi: "--",
                        "zh-Hant": "指該高手最後壹次有交易行為的數據統計。"
                    }
                },
                fundRecords: {
                    title: {
                        zh: "资金记录",
                        en: "Fund Records",
                        vi: "--",
                        "zh-Hant": "資金記錄"
                    },
                    rechargeSuccess: {
                        zh: "充值成功",
                        en: "Recharge Success",
                        vi: "--",
                        "zh-Hant": "充值成功"
                    },
                    refusedWithdraw: {
                        zh: "拒绝提现",
                        en: "Refused to Withdraw",
                        vi: "--",
                        "zh-Hant": "拒絕提現"
                    },
                    successfulWithdrawal: {
                        zh: "提现成功",
                        en: "Successful Withdrawal",
                        vi: "--",
                        "zh-Hant": "提現成功"
                    },
                    cancelWithdrawal: {
                        zh: "提现已撤销",
                        en: "Cancel Withdrawal",
                        vi: "--",
                        "zh-Hant": "提現已撤銷"
                    }
                },
                wallet: {
                    title: {
                        zh: "钱包",
                        en: "Wallet",
                        vi: "--",
                        "zh-Hant": "錢包"
                    },
                    details: {
                        zh: "查看明细",
                        en: "Details",
                        vi: "--",
                        "zh-Hant": "查看明細"
                    },
                    manageBankCards: {
                        zh: "管理银行卡",
                        en: "Manage Bank Cards",
                        vi: "--",
                        "zh-Hant": "管理銀行卡"
                    },
                    addBankCards: {
                        zh: "添加银行卡",
                        en: "Add Bank Cards",
                        vi: "--",
                        "zh-Hant": "添加銀行卡"
                    },
                    name: {
                        zh: "持卡人",
                        en: "Name",
                        vi: "--",
                        "zh-Hant": "持卡人"
                    },
                    nameM: {
                        zh: "持卡人：",
                        en: "Name: ",
                        vi: "--",
                        "zh-Hant": "持卡人："
                    },
                    cardholderName: {
                        zh: "请输入持卡人姓名",
                        en: "Type cardholder's name",
                        vi: "--",
                        "zh-Hant": "請輸入持卡人姓名"
                    },
                    bankCountry: {
                        zh: "银行国家",
                        en: "Bank’s country",
                        vi: "--",
                        "zh-Hant": "銀行國家"
                    },
                    bankCountryM: {
                        zh: "银行国家：",
                        en: "Bank’s country: ",
                        vi: "--",
                        "zh-Hant": "銀行國家："
                    },
                    pSelectBank: {
                        zh: "请选择开户行",
                        en: "Select opening account bank",
                        vi: "--",
                        "zh-Hant": "請選擇開護行"
                    },
                    selectBank: {
                        zh: "选择开户行",
                        en: "Select opening account bank",
                        vi: "--",
                        "zh-Hant": "選擇開護行"
                    },
                    selectBankM: {
                        zh: "选择开户行：",
                        en: "Select opening account bank: ",
                        vi: "--",
                        "zh-Hant": "選擇開護行："
                    },
                    bankName: {
                        zh: "请填写您的银行名称",
                        en: "Bank name",
                        vi: "--",
                        "zh-Hant": "請填寫您的銀行名稱"
                    },
                    fillBank: {
                        zh: "填写开户行",
                        en: "Fill in the opening account bank",
                        vi: "--",
                        "zh-Hant": "填寫開護行"
                    },
                    fillBankM: {
                        zh: "填写开户行：",
                        en: "Fill in the opening account bank: ",
                        vi: "--",
                        "zh-Hant": "填寫開護行："
                    },
                    bankIdentificationCode: {
                        zh: "银行机构鉴定代码",
                        en: "Bank identification code",
                        vi: "--",
                        "zh-Hant": "銀行機構鑒定代碼"
                    },
                    bankIdentificationCodeM: {
                        zh: "银行机构鉴定代码：",
                        en: "Bank identification code: ",
                        vi: "--",
                        "zh-Hant": "銀行機構鑒定代碼："
                    },
                    fillBankIdentificationCode: {
                        zh: "请填写您的银行机构鉴定代码",
                        en: "Please fill in the bank identification code",
                        vi: "--",
                        "zh-Hant": "請填寫您的銀行機構鑒定代碼"
                    },
                    selectAccountPro: {
                        zh: "请选择开户省",
                        en: "Select opening account province",
                        vi: "--",
                        "zh-Hant": "請選擇開護省"
                    },
                    selectAccountCity: {
                        zh: "请选择开户市",
                        en: "Select opening account city",
                        vi: "--",
                        "zh-Hant": "請選擇開護市"
                    },
                    enterBranchBankName: {
                        zh: "请输入支行名称",
                        en: "Enter branch bank name",
                        vi: "--",
                        "zh-Hant": "請輸入支行名稱"
                    },
                    enterOpeningAccountAddress: {
                        zh: "请输入开户地址",
                        en: "Enter opening account address",
                        vi: "--",
                        "zh-Hant": "請輸入開護地址"
                    },
                    uploadIdentification: {
                        zh: "上传身份证明",
                        en: "Upload identification",
                        vi: "--",
                        "zh-Hant": "上傳身份證明"
                    },
                    clickUploadDocuments: {
                        zh: "点击上传证件",
                        en: "Click to upload documents",
                        vi: "--",
                        "zh-Hant": "點擊上傳證件"
                    },
                    completeInformation: {
                        zh: "完善资料",
                        en: "Complete information",
                        vi: "--",
                        "zh-Hant": "完善資料"
                    },
                    bankAddress: {
                        zh: "开户地址",
                        en: "Opening account bank’s address",
                        vi: "--",
                        "zh-Hant": "開護地址"
                    },
                    bankAddressM: {
                        zh: "开户地址：",
                        en: "Opening account bank’s address: ",
                        vi: "--",
                        "zh-Hant": "開護地址："
                    },
                    reservedPhoneNumber: {
                        zh: "预留手机号",
                        en: "Reserved phone number",
                        vi: "--",
                        "zh-Hant": "預留手機號"
                    },
                    reservedPhoneNumberM: {
                        zh: "预留手机号：",
                        en: "Reserved phone number: ",
                        vi: "--",
                        "zh-Hant": "預留手機號："
                    },
                    adding: {
                        zh: "正在添加",
                        en: "Adding",
                        vi: "--",
                        "zh-Hant": "正在添加"
                    },
                    bindingSuccess: {
                        zh: "绑定成功",
                        en: "Binding success",
                        vi: "--",
                        "zh-Hant": "邦定成功"
                    },
                    tip1: {
                        zh: "因要求，请填写该银行卡的预留手机号",
                        en: "Please fill in the reserved phone number of the bank card as required",
                        vi: "--",
                        "zh-Hant": "因要求，請填寫該銀行卡的預留手機號"
                    },
                    tip2: {
                        zh: "手机号绑定成功",
                        en: "The phone number is bound successfully",
                        vi: "--",
                        "zh-Hant": "手機號邦定成功"
                    },
                    switchBankCard: {
                        zh: "切换银行卡",
                        en: "Switch bank card",
                        vi: "--",
                        "zh-Hant": "切換銀行卡"
                    },
                    deleteBankCard: {
                        zh: "删除银行卡",
                        en: "Delete bank card",
                        vi: "--",
                        "zh-Hant": "刪除銀行卡"
                    },
                    tip3: {
                        zh: "确认删除本银行卡，如需再次使用需重新验证",
                        en: "Confirm to delete this bank card. If it needs to be used again, it needs to be verified again",
                        vi: "--",
                        "zh-Hant": "確認刪除本銀行卡，如需再次使用需重新驗證"
                    },
                    bindBankCard: {
                        zh: "点击绑定银行卡",
                        en: "Bind bank card",
                        vi: "--",
                        "zh-Hant": "點擊邦定銀行卡"
                    },
                    walletBalance: {
                        zh: "钱包总额",
                        en: "Wallet balance",
                        vi: "--",
                        "zh-Hant": "錢包總額"
                    },
                    bankCardList: {
                        zh: "获取银行卡列表失败！",
                        en: "Fail to access bank card list!",
                        vi: "--",
                        "zh-Hant": "獲取銀行卡列表失敗！"
                    },
                    tip4_1: {
                        zh: "银行卡 ",
                        en: "The bank card ",
                        vi: "--",
                        "zh-Hant": "銀行卡 "
                    },
                    tip4_2: {
                        zh: " 绑定成功",
                        en: " has been successfully bound",
                        vi: "--",
                        "zh-Hant": " 邦定成功"
                    }
                },
                coupon: {
                    title: {
                        zh: "我的红包",
                        en: "Coupon",
                        vi: "--",
                        "zh-Hant": "我的紅包"
                    },
                    available: {
                        zh: "可用红包",
                        en: "Available",
                        vi: "--",
                        "zh-Hant": "可用紅包"
                    },
                    records: {
                        zh: "红包记录",
                        en: "Records",
                        vi: "--",
                        "zh-Hant": "紅包記錄"
                    },
                    automaticReceive: {
                        zh: "自动领取红包",
                        en: "Automatic Receive",
                        vi: "--",
                        "zh-Hant": "自動領取紅包"
                    },
                    exchangeValidUntil: {
                        zh: "兑换有效期截止至",
                        en: "Exchange valid until ",
                        vi: "--",
                        "zh-Hant": "兌換有效期截止至"
                    },
                    exchangeDate: {
                        zh: "兑换日期：",
                        en: "Exchange date: ",
                        vi: "--",
                        "zh-Hant": "兌換日期："
                    },
                    exchanging: {
                        zh: "兑换中",
                        en: "Exchanging",
                        vi: "--",
                        "zh-Hant": "兌換中"
                    },
                    noCoupon: {
                        zh: "暂无红包！",
                        en: "No coupon!",
                        vi: "--",
                        "zh-Hant": "暫無紅包！"
                    },
                    receiveTime: {
                        zh: "可领取时间：",
                        en: "Receive time: ",
                        vi: "--",
                        "zh-Hant": "可領取時間："
                    },
                    receiveNow: {
                        zh: "立即领取",
                        en: "Receive now",
                        vi: "--",
                        "zh-Hant": "立即領取"
                    },
                    receiving: {
                        zh: "领取中",
                        en: "Receiving",
                        vi: "--",
                        "zh-Hant": "領取中"
                    },
                    received: {
                        zh: "已领取",
                        en: "Received",
                        vi: "--",
                        "zh-Hant": "已領取"
                    },
                    rewardFinished: {
                        zh: "已领完",
                        en: "Reward has been finished",
                        vi: "--",
                        "zh-Hant": "已領完"
                    },
                    availableCoupons: {
                        zh: "距可领取还剩：",
                        en: "Available coupons: ",
                        vi: "--",
                        "zh-Hant": "距可領取還剩："
                    },
                    exchangeCouponSucc: {
                        zh: "红包兑换成功",
                        en: "Successful to exchange coupon",
                        vi: "--",
                        "zh-Hant": "紅包兌換成功"
                    },
                    receiveCouponSucc: {
                        zh: "红包领取成功",
                        en: "Successful to receive coupon",
                        vi: "--",
                        "zh-Hant": "紅包領取成功"
                    }
                },
                inviteFriends: {
                    title: {
                        zh: "邀请好友",
                        en: "Invite Friends",
                        vi: "--",
                        "zh-Hant": "邀請好友"
                    },
                    inviteFriend: {
                        zh: "邀请好友，赢取10美元",
                        en: "Invite a friend and win 10 dollar",
                        vi: "--",
                        "zh-Hant": "邀請好友，贏取10美元"
                    },
                    invitedFriends: {
                        zh: "当前邀请人数",
                        en: "Invited Friends",
                        vi: "--",
                        "zh-Hant": "當前邀請人數"
                    },
                    inviteFriendsRegulations: {
                        zh: "邀请好友规则：",
                        en: "Invite Friends Regulations: ",
                        vi: "--",
                        "zh-Hant": "邀請好友規則："
                    },
                    tip1: {
                        zh: "1、注册即获得邀请类红包“人从众”，邀请3名好友注册，且至少有1人入金并完成1手交易即可兑现, 每位用户仅可领取一次；",
                        en: "1. A reward coupon will be delivered to your account when you registered, it can be cashed once you invited three friends and at least one of them deposited and had one lot transaction.",
                        vi: "--",
                        "zh-Hant": "1、註冊即獲得邀請類紅包“人從眾”，邀請3名好友註冊，且至少有1人入金並完成1手交易即可兌現, 每位用護僅可領取壹次；"
                    },
                    tip2: {
                        zh: "2、您只有通过邀请链接进行注册的好友才算有效；",
                        en: "2. It can be effective only when your friend is registered by the invite link.",
                        vi: "--",
                        "zh-Hant": "2、您只有通過邀請鏈接進行註冊的好友才算有效；"
                    },
                    tip3: {
                        zh: "3、同一手机号，身份证号和银行卡号视为同一用户；",
                        en: "3.Same cellphone, ID and bank card number will be treated as same user.",
                        vi: "--",
                        "zh-Hant": "3、同壹手機號，身份證號和銀行卡號視為同壹用護；"
                    },
                    tip4_1: {
                        zh: "4、任何通过第三方作弊软件刷取好友邀请奖励，一经发现",
                        en: "4.Any cheating, if discovered by ",
                        vi: "--",
                        "zh-Hant": "4、任何通過第三方作弊軟件刷取好友邀請獎勵，壹經發現"
                    },
                    tip4_2: {
                        zh: "有权取消红包兑现奖励；",
                        en: ", will be disqualified.",
                        vi: "--",
                        "zh-Hant": "有權取消紅包兌現獎勵；"
                    },
                    tip5_1: {
                        zh: "5、本活动最终解释权归",
                        en: "5.The final interpretation of this activity owned by ",
                        vi: "--",
                        "zh-Hant": "5、本活動最終解釋權歸"
                    },
                    tip5_2: {
                        zh: "所有。如有疑问，请咨询客服",
                        en: ". If you have other questions，please contact ",
                        vi: "--",
                        "zh-Hant": "所有。如有疑問，請咨詢客服"
                    },
                    tip5_3: {
                        zh: "。",
                        en: " customer service.",
                        vi: "--",
                        "zh-Hant": "。"
                    },
                    nameFriend: {
                        zh: "好友昵称",
                        en: "Name of friend",
                        vi: "--",
                        "zh-Hant": "好友昵稱"
                    },
                    statusDeposit: {
                        zh: "入金状态",
                        en: "Status in deposit",
                        vi: "--",
                        "zh-Hant": "入金狀態"
                    },
                    statusTransactions: {
                        zh: "是否完成交易",
                        en: "Status in transactions",
                        vi: "--",
                        "zh-Hant": "是否完成交易"
                    }
                },
                commission: {
                    title: {
                        zh: "复制和分成",
                        en: "Commission",
                        vi: "--",
                        "zh-Hant": "復制和分成"
                    },
                    followingMaster: {
                        zh: "当前复制高手",
                        en: "Following the master",
                        vi: "--",
                        "zh-Hant": "當前復制高手"
                    },
                    deductedCommissionsLastMonth: {
                        zh: "上月扣除分成",
                        en: "The deducted commissions last month",
                        vi: "--",
                        "zh-Hant": "上月扣除分成"
                    },
                    totalCommissions: {
                        zh: "扣除分成总计",
                        en: "The total of commissions",
                        vi: "--",
                        "zh-Hant": "扣除分成總計"
                    },
                    myFollowingStatus: {
                        zh: "我的复制情况",
                        en: "My Following status",
                        vi: "--",
                        "zh-Hant": "我的復制情況"
                    },
                    tp1: {
                        zh: "注：每月1号结算上一月分成",
                        en: "Monthly commissions will be settled on the 1st of next month",
                        vi: "--",
                        "zh-Hant": "註：每月1號結算上壹月分成"
                    },
                    nameMaster: {
                        zh: "高手名称",
                        en: "The name of master",
                        vi: "--",
                        "zh-Hant": "高手名稱"
                    },
                    deductedCommissions: {
                        zh: "扣除分成",
                        en: "The deducted commissions",
                        vi: "--",
                        "zh-Hant": "扣除分成"
                    },
                    timeDeductingCommission: {
                        zh: "扣除时间",
                        en: "The time of deducting commission",
                        vi: "--",
                        "zh-Hant": "扣除時間"
                    },
                    timeDeductingCommissionM: {
                        zh: "扣除时间：",
                        en: "The time of deducting commission: ",
                        vi: "--",
                        "zh-Hant": "扣除時間："
                    },
                    accept: {
                        zh: "同意协议",
                        en: "Accept",
                        vi: "--",
                        "zh-Hant": "同意協議"
                    },
                    cannotCopy: {
                        zh: "无法进行复制操作",
                        en: "Cannot follow",
                        vi: "--",
                        "zh-Hant": "無法進行復制操作"
                    },
                    cannotCopy1: {
                        zh: "您的可用复制金额不足，无法复制高手",
                        en: "Available amount is insufficient, cannot follow other master",
                        vi: "--",
                        "zh-Hant": "您的可用復制金額不足，無法復制高手"
                    },
                    cannotCopy2_1: {
                        zh: "高手最低复制金额为",
                        en: "The minimum copy amount of the master is ",
                        vi: "--",
                        "zh-Hant": "高手最低復制金額為"
                    },
                    cannotCopy2_2: {
                        zh: " 请先充值",
                        en: ", please deposit first",
                        vi: "--",
                        "zh-Hant": " 請先充值"
                    },
                    cannotCopy3: {
                        zh: "您已经是高手了，无法复制其他高手",
                        en: "You are already a master, cannot follow other master",
                        vi: "--",
                        "zh-Hant": "您已經是高手了，無法復制其他高手"
                    },
                    cannotCopy4: {
                        zh: "您的资金处于封闭期，无法使用复制功能",
                        en: "Your funds are closed and cannot follow orders",
                        vi: "--",
                        "zh-Hant": "您的資金處於封閉期，無法使用復制功能"
                    },
                    depositNow: {
                        zh: "立即充值",
                        en: "Deposit now",
                        vi: "--",
                        "zh-Hant": "立即充值"
                    },
                    loginNow: {
                        zh: "立即登录",
                        en: "Login now",
                        vi: "--",
                        "zh-Hant": "立即登錄"
                    },
                    tp2: {
                        zh: "可用复制金额不足",
                        en: "Available copy amount insufficient",
                        vi: "--",
                        "zh-Hant": "可用復制金額不足"
                    },
                    follow: {
                        zh: "关注",
                        en: "Follow",
                        vi: "--",
                        "zh-Hant": "關註"
                    },
                    unfollow: {
                        zh: "取消关注",
                        en: "Unfollow",
                        vi: "--",
                        "zh-Hant": "取消關註"
                    },
                    followed: {
                        zh: "已关注",
                        en: "Followed",
                        vi: "--",
                        "zh-Hant": "已關註"
                    }
                },
                depositWithdrawal: {
                    title: {
                        zh: "充值提现",
                        en: "Deposit/Withdrawal",
                        vi: "--",
                        "zh-Hant": "充值提現"
                    },
                    onlineBankingDepositRules: {
                        zh: "网银入金规则",
                        en: "Online banking deposit rules",
                        vi: "--",
                        "zh-Hant": "網銀入金規則"
                    },
                    depositAccount: {
                        zh: "充值账户",
                        en: "Deposit account",
                        vi: "--",
                        "zh-Hant": "充值帳護"
                    },
                    depositAccountJ: {
                        zh: "充值账户",
                        en: "Account",
                        vi: "--",
                        "zh-Hant": "充值帳護"
                    },
                    switchAccount: {
                        zh: "点击切换子账号",
                        en: "Switch account",
                        vi: "--",
                        "zh-Hant": "點擊切換子帳號"
                    },
                    depositAmount: {
                        zh: "充值金额",
                        en: "Deposit Amount",
                        vi: "--",
                        "zh-Hant": "充值金額"
                    },
                    depositAmountJ: {
                        zh: "充值金额",
                        en: "Amount",
                        vi: "--",
                        "zh-Hant": "充值金額"
                    },
                    depositAmountM: {
                        zh: "充值金额：",
                        en: "Deposit Amount: ",
                        vi: "--",
                        "zh-Hant": "充值金額："
                    },
                    rechargeMethod: {
                        zh: "充值方式",
                        en: "Recharge Method",
                        vi: "--",
                        "zh-Hant": "充值方式"
                    },
                    walletAvailableAmount: {
                        zh: "钱包可用余额",
                        en: "Wallet Available Amount",
                        vi: "--",
                        "zh-Hant": "錢包可用余額"
                    },
                    onlineBanking: {
                        zh: "网银支付",
                        en: "Payment of Internet Banking",
                        vi: "--",
                        "zh-Hant": "網銀支付"
                    },
                    deposit: {
                        zh: "充值",
                        en: "Deposit",
                        vi: "--",
                        "zh-Hant": "充值"
                    },
                    withdrawal: {
                        zh: "提现",
                        en: "Withdrawal",
                        vi: "--",
                        "zh-Hant": "提現"
                    },
                    withdrawAccount: {
                        zh: "提现账户",
                        en: "Withdraw account",
                        vi: "--",
                        "zh-Hant": "提現帳護"
                    },
                    withdrawAccountJ: {
                        zh: "提现账户",
                        en: "Account",
                        vi: "--",
                        "zh-Hant": "提現帳護"
                    },
                    tradingAccount: {
                        zh: "交易账户",
                        en: "Trading account",
                        vi: "--",
                        "zh-Hant": "交易帳護"
                    },
                    wallet: {
                        zh: "钱包",
                        en: "Wallet",
                        vi: "--",
                        "zh-Hant": "錢包"
                    },
                    withdrawalToBankCard: {
                        zh: "提现至银行卡",
                        en: "Withdrawal to bank card",
                        vi: "--",
                        "zh-Hant": "提現至銀行卡"
                    },
                    extractableAmount: {
                        zh: "可提取金额",
                        en: "Extractable amount",
                        vi: "--",
                        "zh-Hant": "可提取金額"
                    },
                    extractableAmountM: {
                        zh: "可提取金额：",
                        en: "Extractable amount: ",
                        vi: "--",
                        "zh-Hant": "可提取金額："
                    },
                    tip1: {
                        zh: "提示：您还有持仓订单，请平仓后再提现如有疑问，请联系您的客户经理或联系客服（400 - 809 - 8509）",
                        en: "Notice:You have position orders, please close out and then withdrawal If you have any questions, please contact your account manager or contact customer service (400 - 809 - 8509)",
                        vi: "--",
                        "zh-Hant": "提示：您還有持倉訂單，請平倉後再提現如有疑問，請聯系您的客護經理或聯系客服（400 - 809 - 8509）"
                    },
                    tip2: {
                        zh: "提示：您未实名认证，请完成实名认证，如有疑问，请联系您的客户经理或联系客服（400 - 809 - 8509）",
                        en: "Notice:You don't have real-name authentication，please complete it If you have any questions, please contact your account manager or contact customer service (400 - 809 - 8509)",
                        vi: "--",
                        "zh-Hant": "提示：您未實名認證，請完成實名認證，如有疑問，請聯系您的客護經理或聯系客服（400 - 809 - 8509）"
                    },
                    tip3: {
                        zh: "提示：您还有正在复制的高手，请取消复制关系后再提现，如有疑问，请联系您的客户经理或联系客服（400 - 809 - 8509）",
                        en: "Notice: You still have following masters,please cancel the follow relationship then withdraw the money If you have any questions, please contact your account manager or contact customer service (400 - 809 - 8509)",
                        vi: "--",
                        "zh-Hant": "提示：您還有正在復制的高手，請取消復制關系後再提現，如有疑問，請聯系您的客護經理或聯系客服（400 - 809 - 8509）"
                    },
                    tip4: {
                        zh: "提现金额不能大于可提现金额",
                        en: "Withdraw amount can not be greater than the extractable amount",
                        vi: "--",
                        "zh-Hant": "提現金額不能大於可提現金額"
                    },
                    tip5: {
                        zh: "现在提现会导致您的账户红包失效，是否继续提现？",
                        en: "Now withdrawal will lead to lose efficacy for your reward,Whether or not to continue?",
                        vi: "--",
                        "zh-Hant": "現在提現會導致您的帳護紅包失效，是否繼續提現？"
                    },
                    tip6: {
                        zh: "出金银行卡用户姓名必须与开户姓名一致",
                        en: "The name of the bank card must be the same as the name of the account",
                        vi: "--",
                        "zh-Hant": "出金銀行卡用護姓名必須與開護姓名壹致"
                    },
                    tip7: {
                        zh: "实名认证后才可以进行资金提现。",
                        en: "You should have real-name authentication and then withdraw the money",
                        vi: "--",
                        "zh-Hant": "實名認證後才可以進行資金提現。"
                    },
                    tip8: {
                        zh: "提现金额最少为20美金。",
                        en: "At least $20 for the withdrawal.",
                        vi: "--",
                        "zh-Hant": "提現金額最少為20美金。"
                    },
                    tip9: {
                        zh: "出金金额最多为0.00美金",
                        en: "Not better than $0 for your withdraw amount",
                        vi: "--",
                        "zh-Hant": "出金金額最多為0.00美金"
                    },
                    tip10: {
                        zh: "未充值，体验金和盈利不可提取。",
                        en: "Please top up otherwise the bonus and profit can't be withdraw.",
                        vi: "--",
                        "zh-Hant": "未充值，體驗金和盈利不可提取。"
                    },
                    tip11: {
                        zh: "存在复制关系，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        en: "Please cancel the follow relationship,if you want to all withdrawal",
                        vi: "--",
                        "zh-Hant": "存在復制關系，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。"
                    },
                    cardNumber: {
                        zh: "卡号",
                        en: "Card Number",
                        vi: "--",
                        "zh-Hant": "卡號"
                    },
                    cardNumberM: {
                        zh: "卡号：",
                        en: "Card Number: ",
                        vi: "--",
                        "zh-Hant": "卡號："
                    },
                    bank: {
                        zh: "开户行",
                        en: "Bank",
                        vi: "--",
                        "zh-Hant": "開護行"
                    },
                    name: {
                        zh: "姓名",
                        en: "Name",
                        vi: "--",
                        "zh-Hant": "姓名"
                    },
                    informationBankAccount: {
                        zh: "添加银行卡",
                        en: "The information of bank account",
                        vi: "--",
                        "zh-Hant": "添加銀行卡"
                    },
                    depositOptions: {
                        zh: "支付方式",
                        en: "Deposit Options",
                        vi: "--",
                        "zh-Hant": "支付方式"
                    },
                    depositOptionsJ: {
                        zh: "支付方式",
                        en: "Options",
                        vi: "--",
                        "zh-Hant": "支付方式"
                    },
                    walletPayment: {
                        zh: "钱包支付",
                        en: "Wallet",
                        vi: "--",
                        "zh-Hant": "錢包支付"
                    },
                    availableAmount: {
                        zh: "可用余额",
                        en: "Available Amount",
                        vi: "--",
                        "zh-Hant": "可用余額"
                    },
                    telegraphicTransfer: {
                        zh: "电汇",
                        en: "Telegraphic Transfer",
                        vi: "--",
                        "zh-Hant": "電匯"
                    },
                    alipay: {
                        zh: "支付宝",
                        en: "Alipay",
                        vi: "--",
                        "zh-Hant": "支付寶"
                    },
                    uploadCredentials: {
                        zh: "上传电汇凭证",
                        en: "Upload Credentials",
                        vi: "--",
                        "zh-Hant": "上傳電匯憑證"
                    },
                    uploadCredentialsJ: {
                        zh: "上传电汇凭证",
                        en: "Credentials",
                        vi: "--",
                        "zh-Hant": "上傳電匯憑證"
                    },
                    uploadCredentialsTip1: {
                        zh: "电汇通常需要3-5个工作日到账",
                        en: "Usually takes 3-5 working days to arrive account",
                        vi: "--",
                        "zh-Hant": "電匯通常需要3-5個工作日到帳"
                    },
                    tip12: {
                        zh: "提示：手机端充值最低限额$50.00，每天最高限额$7000.00，充值成功后，到账时间约为10分钟，请耐心等待。如有问题，可在电脑端登录官网（）操作。客户热线：xxxx",
                        en: "The minimum deposit for mobile phones is $ 50.00，maximum daily limit of $ 7000.00. After the success of the deposit, the arrival time is about 10 minutes, please be patient.If there are problems, you can log on the computer side of the official website (www.tigerwit.com) operation.Customer Hotline:400-xxx-xxx",
                        vi: "--",
                        "zh-Hant": "提示：手機端充值最低限額$50.00，每天最高限額$7000.00，充值成功後，到帳時間約為10分鐘，請耐心等待。如有問題，可在電腦端登錄官網（）操作。客護熱線：xxxx"
                    },
                    accountBalance: {
                        zh: "当前交易账户余额",
                        en: "Account Balance",
                        vi: "--",
                        "zh-Hant": "當前交易帳護余額"
                    },
                    withdrawalAmount: {
                        zh: "提现金额",
                        en: "Withdrawal Amount",
                        vi: "--",
                        "zh-Hant": "提現金額"
                    },
                    withdrawalAmountJ: {
                        zh: "提现金额",
                        en: "Amount",
                        vi: "--",
                        "zh-Hant": "提現金額"
                    },
                    withdrawalAmountM: {
                        zh: "提现金额：",
                        en: "Withdrawal Amount: ",
                        vi: "--",
                        "zh-Hant": "提現金額："
                    },
                    youCanWithdrawal: {
                        zh: "可提现金额",
                        en: "You Can Withdrawal",
                        vi: "--",
                        "zh-Hant": "可提現金額"
                    },
                    correctAmount: {
                        zh: "请输入正确金额",
                        en: "Please enter the correct amount",
                        vi: "--",
                        "zh-Hant": "請輸入正確金額"
                    },
                    tip13: {
                        zh: "提示：当前不支持信用卡提现，请绑定储蓄卡。",
                        en: "Do not support credit card cash withdrawal, please bind the savings card.",
                        vi: "--",
                        "zh-Hant": "提示：當前不支持信用卡提現，請邦定儲蓄卡。"
                    },
                    tip14: {
                        zh: "每个账户每月拥有4次免费提现机会，超过4次每笔提现将收取xx手续费。",
                        en: "Each account has 4 free opportunities per month, more than 4 times each will be charged xx fee.",
                        vi: "--",
                        "zh-Hant": "每個帳護每月擁有4次免費提現機會，超過4次每筆提現將收取xx手續費。"
                    },
                    bankCard: {
                        zh: "银行卡",
                        en: "Bank Card",
                        vi: "--",
                        "zh-Hant": "銀行卡"
                    },
                    bindUserBankCard: {
                        zh: "请绑定认证用户本人的银行卡",
                        en: "Please bind the user’s own bank card",
                        vi: "--",
                        "zh-Hant": "請邦定認證用護本人的銀行卡"
                    },
                    enterCardNumber: {
                        zh: "请填写银行卡号",
                        en: "Card Number",
                        vi: "--",
                        "zh-Hant": "請填寫銀行卡號"
                    },
                    bankName: {
                        zh: "银行名称",
                        en: "Bank",
                        vi: "--",
                        "zh-Hant": "銀行名稱"
                    },
                    branch: {
                        zh: "支行名称",
                        en: "Branch",
                        vi: "--",
                        "zh-Hant": "支行名稱"
                    },
                    branchM: {
                        zh: "支行名称：",
                        en: "Branch: ",
                        vi: "--",
                        "zh-Hant": "支行名稱："
                    },
                    province: {
                        zh: "开户省",
                        en: "Province",
                        vi: "--",
                        "zh-Hant": "開護省"
                    },
                    provinceM: {
                        zh: "开户省：",
                        en: "Province: ",
                        vi: "--",
                        "zh-Hant": "開護省："
                    },
                    city: {
                        zh: "开户市",
                        en: "City",
                        vi: "--",
                        "zh-Hant": "開護市"
                    },
                    cityM: {
                        zh: "开户市：",
                        en: "City: ",
                        vi: "--",
                        "zh-Hant": "開護市："
                    },
                    details: {
                        zh: "明细",
                        en: "Details",
                        vi: "--",
                        "zh-Hant": "明細"
                    },
                    tip15: {
                        zh: "高手分成收益与代理商佣金收益会存入钱包，您可以提现或划入交易账户",
                        en: "The winner is divided into earnings and the agency’s commission income will be credited to the purse, which you can cash in or out of the trading account",
                        vi: "--",
                        "zh-Hant": "高手分成收益與代理商傭金收益會存入錢包，您可以提現或劃入交易帳護"
                    },
                    telegraphicTransferTip1: {
                        zh: "不同银行在购汇和汇款中会收取不同的手续费（一般为手续费、电报费和中转行费用），对于购汇和汇款中产生的费用由客户自行承担，老虎外汇不收取电汇入金手续费，入金金额将以实际到账为准。",
                        en: "Different banks in the purchase of foreign exchange and remittances will charge different fees (usually fee, telegraph fee and transit costs), the costs incurred in the purchase of foreign exchange and remittance shall be borne by the customer, TigerWit does not charge wire transfer fees, deposit amount will be the actual account.",
                        vi: "--",
                        "zh-Hant": "不同銀行在購匯和匯款中會收取不同的手續費（壹般為手續費、電報費和中轉行費用），對於購匯和匯款中產生的費用由客護自行承擔，老虎外匯不收取電匯入金手續費，入金金額將以實際到帳為準。"
                    },
                    telegraphicTransferTip2: {
                        zh: "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到帐，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。同时请提供您的电话号码，以便我们与您取得联系。",
                        en: "Please note that we do not accept cash payments directly to our bank account. In order to ensure that your deposit immediate arrived at the account, please note your trading account and telephone number in the application form so that we can contact you.",
                        vi: "--",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行帳護的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。同時請提供您的電話號碼，以便我們與您取得聯系。"
                    },
                    telegraphicTransferTip3: {
                        zh: "老虎外汇接受美元汇款，汇款详情如下：",
                        en: "TigerWit to receive US dollar remittance, remittance details are as follows：",
                        vi: "--",
                        "zh-Hant": "老虎外匯接受美元匯款，匯款詳情如下："
                    },
                    telegraphicTransferTip4: {
                        zh: "老虎外汇将根据各国适用法律尽最大努力以实际行动配合反洗钱及反恐怖方面的所有法律法规，具体包括报告及冻结可疑资产等。老虎外汇将不定期地查看账户记录以获取有洗钱嫌疑的交易证据，包括对如下几项的监控：",
                        en: "TigerWit will do its best to cooperate with all laws and regulations on anti-money laundering and anti-terrorism, including reporting and freezing of suspicious assets, in accordance with the applicable laws of each country. TigerWit will view the account records from time to time to obtain evidence of transaction evidence of money laundering, including the following: ",
                        vi: "--",
                        "zh-Hant": "老虎外匯將根據各國這用法律盡最大努力以實際行動配合反洗錢及反恐怖方面的所有法律法規，具體包括報告及凍結可疑資產等。老虎外匯將不定期地查看帳護記錄以獲取有洗錢嫌疑的交易證據，包括對如下幾項的監控："
                    },
                    telegraphicTransferTip5: {
                        zh: "账户资金出入情况。电汇入金的用户，提现时若金额低于电汇入金时金额，老虎外汇只支持将提现金额提现至入金银行卡。",
                        en: "Account funds access situation. If the deposit was made by wire transfer, funds may be withdrawn only by wire transfer to the same bank and to the same account from which it originated.",
                        vi: "--",
                        "zh-Hant": "帳護資金出入情況。電匯入金的用護，提現時若金額低於電匯入金時金額，老虎外匯只支持將提現金額提現至入金銀行卡。"
                    },
                    telegraphicTransferTip6: {
                        zh: "电汇汇款方及收款方",
                        en: "The remitter and The beneficiary of wire transfer",
                        vi: "--",
                        "zh-Hant": "電匯匯款方及收款方"
                    },
                    telegraphicTransferTip7: {
                        zh: "除正常业务外的其他行为。",
                        en: "Other than normal business.",
                        vi: "--",
                        "zh-Hant": "除正常業務外的其他行為。"
                    },
                    telegraphicTransferTip8_1: {
                        zh: "如您有疑问，请",
                        en: "If you have any questions, please ",
                        vi: "--",
                        "zh-Hant": "如您有疑問，請"
                    },
                    telegraphicTransferTip8_2: {
                        zh: "点击此处",
                        en: "click here ",
                        vi: "--",
                        "zh-Hant": "點擊此處"
                    },
                    telegraphicTransferTip8_3: {
                        zh: "联系在线客服获得帮助。",
                        en: "to contact the online customer service for help.",
                        vi: "--",
                        "zh-Hant": "聯系在線客服獲得幫助。"
                    },
                    beneficiaryName: {
                        zh: "收款人名称（Company）：",
                        en: "Beneficiary’s Name: ",
                        vi: "--",
                        "zh-Hant": "收款人名稱（Company）："
                    },
                    beneficiaryBank: {
                        zh: "收款行所在国家（地区）：",
                        en: "Beneficiary’s Bank Country( Region): ",
                        vi: "--",
                        "zh-Hant": "收款行所在國家（地區）："
                    },
                    australia: {
                        zh: "澳大利亚",
                        en: "AUSTRALIA",
                        vi: "--",
                        "zh-Hant": "澳大利亞"
                    },
                    beneA_CNo: {
                        zh: "收款人账号（Account）：",
                        en: "Bene’s A/C/ No: ",
                        vi: "--",
                        "zh-Hant": "收款人帳號（Account）："
                    },
                    swift: {
                        zh: "收款银行机构鉴定代码（Swift）：",
                        en: "Swift: ",
                        vi: "--",
                        "zh-Hant": "收款銀行機構鑒定代碼（Swift）："
                    },
                    beneficiaryBankName: {
                        zh: "收款人开户行（Bank）：",
                        en: "Beneficiary’s Bank Name: ",
                        vi: "--",
                        "zh-Hant": "收款人開護行（Bank）："
                    },
                    beneficiaryBankAddress: {
                        zh: "银行地址（Address）：",
                        en: "Beneficiary’s Bank Address: ",
                        vi: "--",
                        "zh-Hant": "銀行地址（Address）："
                    },
                    bsb: {
                        zh: "清算号（BSB）：",
                        en: "BSB: ",
                        vi: "--",
                        "zh-Hant": "清算號（BSB）："
                    },
                    beneficiaryAddress: {
                        zh: "收款人地址（Address）：",
                        en: "Beneficiary’s Address: ",
                        vi: "--",
                        "zh-Hant": "收款人地址（Address）："
                    },
                    remittanceInformation: {
                        zh: "汇款附言：",
                        en: "Remittance Information: ",
                        vi: "--",
                        "zh-Hant": "匯款附言："
                    },
                    anti_MoneyLaunderingPolicy: {
                        zh: "反洗钱政策：",
                        en: "Anti-Money Laundering Policy: ",
                        vi: "--",
                        "zh-Hant": "反洗錢政策："
                    },
                    openTrades: {
                        zh: "持仓",
                        en: "Open Trades",
                        vi: "--",
                        "zh-Hant": "持倉"
                    },
                    margin: {
                        zh: "已用保证金",
                        en: "Margin",
                        vi: "--",
                        "zh-Hant": "已用保證金"
                    },
                    equity: {
                        zh: "账户净值",
                        en: "Equity",
                        vi: "--",
                        "zh-Hant": "帳護凈值"
                    },
                    allOrders: {
                        zh: "全部订单",
                        en: "All Orders",
                        vi: "--",
                        "zh-Hant": "全部訂單"
                    },
                    trading: {
                        zh: "自主持仓",
                        en: "Trading",
                        vi: "--",
                        "zh-Hant": "自主持倉"
                    },
                    copy: {
                        zh: "跟单持仓",
                        en: "Copy",
                        vi: "--",
                        "zh-Hant": "跟單持倉"
                    },
                    pending: {
                        zh: "挂单",
                        en: "Pending",
                        vi: "--",
                        "zh-Hant": "掛單"
                    },
                    buy: {
                        zh: "买入",
                        en: "Buy",
                        vi: "--",
                        "zh-Hant": "買入"
                    },
                    sell: {
                        zh: "卖出",
                        en: "Sell",
                        vi: "--",
                        "zh-Hant": "賣出"
                    },
                    copyMaster: {
                        zh: "高手跟单",
                        en: "Copy",
                        vi: "--",
                        "zh-Hant": "高手跟單"
                    },
                    noOrders: {
                        zh: "没有订单",
                        en: "No Orders",
                        vi: "--",
                        "zh-Hant": "沒有訂單"
                    },
                    toTrade: {
                        zh: "去下个单",
                        en: "To Trade",
                        vi: "--",
                        "zh-Hant": "去下個單"
                    },
                    followMaster: {
                        zh: "逛逛高手榜",
                        en: "Follow the Master",
                        vi: "--",
                        "zh-Hant": "逛逛高手榜"
                    },
                    notice: {
                        zh: "提示",
                        en: "Notice",
                        vi: "--",
                        "zh-Hant": "提示"
                    },
                    paymentMethod: {
                        zh: "选择支付方式",
                        en: "Select payment method",
                        vi: "--",
                        "zh-Hant": "選擇支付方式"
                    },
                    walletBalance: {
                        zh: "当前钱包余额",
                        en: "Wallet balance",
                        vi: "--",
                        "zh-Hant": "當前錢包余額"
                    },
                    walletBalanceM: {
                        zh: "当前钱包余额：",
                        en: "Wallet balance: ",
                        vi: "--",
                        "zh-Hant": "當前錢包余額："
                    },
                    tip16: {
                        zh: "支付完成前，请不要关闭支付验证窗口",
                        en: "Please don’t close the window until payment is completed",
                        vi: "--",
                        "zh-Hant": "支付完成前，請不要關閉支付驗證窗口"
                    },
                    tip17: {
                        zh: "支付完成后，请根据您支付的情况点击下面按钮",
                        en: "After the payment is completed, please click the button below according to your payment situation",
                        vi: "--",
                        "zh-Hant": "支付完成後，請根據您支付的情況點擊下面按鈕"
                    },
                    runIntoProblem: {
                        zh: "遇到问题",
                        en: "Run into problem",
                        vi: "--",
                        "zh-Hant": "遇到問題"
                    },
                    paymentSuccess: {
                        zh: "支付成功",
                        en: "Payment success",
                        vi: "--",
                        "zh-Hant": "支付成功"
                    },
                    equivalent: {
                        zh: "折合",
                        en: "Equivalent",
                        vi: "--",
                        "zh-Hant": "折合"
                    },
                    about: {
                        zh: "约",
                        en: "about",
                        vi: "--",
                        "zh-Hant": "約"
                    },
                    uploadVoucher: {
                        zh: "上传凭证",
                        en: "Upload voucher",
                        vi: "--",
                        "zh-Hant": "上傳憑證"
                    },
                    tip18: {
                        zh: "您网银支付凭证正在审核中，无法充值，请等待审核通过后重试。",
                        en: "Your e-payment voucher is under review and cannot be topped up. Please try again after passing the audit.",
                        vi: "--",
                        "zh-Hant": "您網銀支付憑證正在審核中，無法充值，請等待審核通過後重試。"
                    },
                    tip19: {
                        zh: "应监管要求，客户的网银入金会随机抽查入金凭证，如客户的某笔入金被抽查需要客户按照提示和要求上传凭证。",
                        en: "According to the regulatory requirements, the customer's e-deposit will be randomly checked into the deposit voucher. For example, the customer needs to upload the voucher according to the tips and requirements when a certain amount of deposit is checked.",
                        vi: "--",
                        "zh-Hant": "應監管要求，客護的網銀入金會隨機抽查入金憑證，如客護的某筆入金被抽查需要客護按照提示和要求上傳憑證。"
                    },
                    tip20: {
                        zh: "客户出金时，如果有未上传和未审核通过的凭证，将限制客户出金，上传审核通过后可正常出金，没有未上传或者未审核的凭证客户可以正常出金。",
                        en: "When the customer withdrawal, if there are unuploaded and unaudited vouchers, the customer will be restricted to withdrawal. After passing the examination, the funds will be withdrew normally. If there are no unuploaded or unaudited certificates, the customer can withdraw normally.",
                        vi: "--",
                        "zh-Hant": "客護出金時，如果有未上傳和未審核通過的憑證，將限制客護出金，上傳審核通過後可正常出金，沒有未上傳或者未審核的憑證客護可以正常出金。"
                    },
                    tip21: {
                        zh: "1、客户必须使用本人银行卡入金；",
                        en: "1.The customer must use his bank card to deposit;",
                        vi: "--",
                        "zh-Hant": "1、客護必須使用本人銀行卡入金；"
                    },
                    tip22: {
                        zh: "2、若使用他人银行卡，资金将被原路退回，客户需承担1.8%手续费；",
                        en: "2.If customer use someone else's bank card, the money will be returned and the customer shall bear a charge of 1.8%;",
                        vi: "--",
                        "zh-Hant": "2、若使用他人銀行卡，資金將被原路退回，客護需承擔1.8%手續費；"
                    },
                    tip23: {
                        zh: "3、若已产生交易订单，客户需在收到通知后1个工作日内全部平仓，否则系统将进行强制平仓。平仓后资金原路退回，账号将被关闭不予使用。",
                        en: "3.If a trading order has been generated, the customer shall close all the positions within 1 working day after receiving the notice, otherwise the system will be forced to close the positions. The fund will be returned after closing the positions, and the account will be closed and not used.",
                        vi: "--",
                        "zh-Hant": "3、若已產生交易訂單，客護需在收到通知後1個工作日內全部平倉，否則系統將進行強制平倉。平倉後資金原路退回，帳號將被關閉不予使用。"
                    },
                    tip24: {
                        zh: "入金凭证要求及获取方式",
                        en: "Requirements and methods of obtaining the deposit vouchers",
                        vi: "--",
                        "zh-Hant": "入金憑證要求及獲取方式"
                    },
                    tip25: {
                        zh: "1、入金凭证必须包含：账号姓名、账号号码、入金时间、金额",
                        en: "1.The voucher must include: account name, account number, deposit time and amount",
                        vi: "--",
                        "zh-Hant": "1、入金憑證必須包含：帳號姓名、帳號號碼、入金時間、金額"
                    },
                    tip26: {
                        zh: "2、入金凭证网银获取路径可咨询银行客服。",
                        en: "2.Deposit certificate online banking access path can consult the bank customer service.",
                        vi: "--",
                        "zh-Hant": "2、入金憑證網銀獲取路徑可咨詢銀行客服。"
                    },
                    bankCardNumber: {
                        zh: "银行卡号",
                        en: "Bank card number",
                        vi: "--",
                        "zh-Hant": "銀行卡號"
                    },
                    tip27: {
                        zh: "1、请务必使用填写的该银行卡进行网银支付；",
                        en: "1.Please be sure to use the card that you filled to make online payment.",
                        vi: "--",
                        "zh-Hant": "1、請務必使用填寫的該銀行卡進行網銀支付；"
                    },
                    tip28: {
                        zh: "2、上传该笔入金凭证截图中银行卡号必须与该支付卡号一致，否则审核将被驳回，影响出金操作。",
                        en: "2.The bank card number in the screenshot of the deposit voucher uploaded must be consistent with the payment card number, otherwise the audit will be rejected, affecting the withdrawal.",
                        vi: "--",
                        "zh-Hant": "2、上傳該筆入金憑證截圖中銀行卡號必須與該支付卡號壹致，否則審核將被駁回，影響出金操作。"
                    },
                    tip29: {
                        zh: "如有其它疑问，请联系TigerWit客服：",
                        en: "If you have any other questions, please contact TigerWit customer support: ",
                        vi: "--",
                        "zh-Hant": "如有其它疑問，請聯系TigerWit客服："
                    },
                    rate1: {
                        zh: "今日汇率：1 美元",
                        en: "Today's exchange rate: $1",
                        vi: "--",
                        "zh-Hant": "今日匯率：1 美元"
                    },
                    currentWalletBalance: {
                        zh: "当前钱包余额",
                        en: "Current wallet balance",
                        vi: "--",
                        "zh-Hant": "當前錢包余額"
                    },
                    paymentRule: {
                        zh: "网银支付规则",
                        en: "Rules for online banking payment",
                        vi: "--",
                        "zh-Hant": "網銀支付規則"
                    },
                    thirdParty: {
                        zh: "第三方充值教程",
                        en: "Third party deposit tutorial",
                        vi: "--",
                        "zh-Hant": "第三方充值教程"
                    },
                    useBankPay: {
                        zh: "请使用该银行卡支付",
                        en: "Please use this card to pay",
                        vi: "--",
                        "zh-Hant": "請使用該銀行卡支付"
                    },
                    paymentCurrency: {
                        zh: "支付币种",
                        en: "Currency",
                        vi: "--",
                        "zh-Hant": "支付蔽種"
                    },
                    replace: {
                        zh: "更换",
                        en: "Replace",
                        vi: "--",
                        "zh-Hant": "更換"
                    },
                    fillPayCardInfo: {
                        zh: "填写支付银行卡信息",
                        en: "Fill in the payment card information",
                        vi: "--",
                        "zh-Hant": "填寫支付銀行卡信息"
                    },
                    clickUpload: {
                        zh: "点击上传电汇凭证",
                        en: "Click to upload wire transfer voucher",
                        vi: "--",
                        "zh-Hant": "點擊上傳電匯憑證"
                    },
                    tip30: {
                        zh: "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，请您务必在汇款附言一栏里填写您的交易账号。",
                        en: "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please be sure to fill in your transaction account in the attached column of the remittance form.",
                        vi: "--",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行帳護的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，請您務必在匯款附言壹欄裏填寫您的交易帳號。"
                    },
                    tip31: {
                        zh: "同时请提供您的电话号码，以便我们与您取得联系。",
                        en: "Please also provide your phone number so that we can get in touch with you.",
                        vi: "--",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。"
                    },
                    remittancePostscript: {
                        zh: "汇款附言：",
                        en: "Remittance postscript: ",
                        vi: "--",
                        "zh-Hant": "匯款附言："
                    },
                    tip32: {
                        zh: "您的姓名拼音，交易账号：",
                        en: "Your name spell, trading account number: ",
                        vi: "--",
                        "zh-Hant": "您的姓名拼音，交易帳號："
                    },
                    tip33: {
                        zh: "充值已提交，到账约为10分钟，请耐心等待",
                        en: "Deposit has been submitted, and will arrive account about 10 minutes. Please wait patiently",
                        vi: "--",
                        "zh-Hant": "充值已提交，到帳約為10分鐘，請耐心等待"
                    },
                    tip34: {
                        zh: "大概需要3-5个工作日到账",
                        en: "It will take about 3-5 working days to get to the account",
                        vi: "--",
                        "zh-Hant": "大概需要3-5個工作日到帳"
                    },
                    tip35: {
                        zh: "电汇凭证已提交",
                        en: "The wire transfer voucher has been submitted",
                        vi: "--",
                        "zh-Hant": "電匯憑證已提交"
                    },
                    toUpload: {
                        zh: "待上传",
                        en: "To upload",
                        vi: "--",
                        "zh-Hant": "待上傳"
                    },
                    underReview: {
                        zh: "审核中",
                        en: "Under review",
                        vi: "--",
                        "zh-Hant": "審核中"
                    },
                    successfully: {
                        zh: "审核成功",
                        en: "Successfully",
                        vi: "--",
                        "zh-Hant": "審核成功"
                    },
                    voucherConsiderations: {
                        zh: "凭证注意事项",
                        en: "Voucher considerations	",
                        vi: "--",
                        "zh-Hant": "憑證註意事項"
                    },
                    tip36: {
                        zh: "凭证信息必须显示姓名、银行卡号、支付金额等内容",
                        en: "The voucher information must show the name, bank card number, payment amount and other contents",
                        vi: "--",
                        "zh-Hant": "憑證信息必須顯示姓名、銀行卡號、支付金額等內容"
                    },
                    tip37: {
                        zh: "凭证信息必须为实名认证本人银行账户。",
                        en: "The voucher information must be verified bank account of customer himself.",
                        vi: "--",
                        "zh-Hant": "憑證信息必須為實名認證本人銀行帳護。"
                    },
                    tip38: {
                        zh: "未满足以上要求，审核将被驳回。",
                        en: "If the above requirements are not met, the audit will be rejected",
                        vi: "--",
                        "zh-Hant": "未滿足以上要求，審核將被駁回。"
                    },
                    tip39: {
                        zh: "审核驳回后，支付金额将原路退还，产生的1.5%手续费由您自行承担。",
                        en: "After the review is rejected, the payment amount will be returned to you, and the 1.5% commission fee will be borne by you.",
                        vi: "--",
                        "zh-Hant": "審核駁回後，支付金額將原路退還，產生的1.5%手續費由您自行承擔。"
                    },
                    tip40: {
                        zh: "注意：充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        en: "Note: after successful recharge, please upload the voucher in time. If it is not uploaded within two weeks, the transaction cannot be conducted.",
                        vi: "--",
                        "zh-Hant": "註意：充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。"
                    },
                    tip41: {
                        zh: "＊代表必须上传凭证",
                        en: "* represents must upload vouchers",
                        vi: "--",
                        "zh-Hant": "＊代表必須上傳憑證"
                    },
                    vouchersInstance: {
                        zh: "查看凭证示例",
                        en: "Vouchers instance",
                        vi: "--",
                        "zh-Hant": "查看憑證示例"
                    },
                    transactionSuccessful: {
                        zh: "交易成功",
                        en: "Transaction successful",
                        vi: "--",
                        "zh-Hant": "交易成功"
                    },
                    submitAudition: {
                        zh: "提交审核",
                        en: "Submit audition",
                        vi: "--",
                        "zh-Hant": "提交審核"
                    },
                    noVouchers: {
                        zh: "当前没有凭证",
                        en: "No vouchers",
                        vi: "--",
                        "zh-Hant": "當前沒有憑證"
                    },
                    tip42: {
                        zh: "受最高监管的约束，需要您通过认证审核后方可进行充值操作",
                        en: "Subject to the highest regulatory constraints, you need to pass the verification audit before deposit",
                        vi: "--",
                        "zh-Hant": "受最高監管的約束，需要您通過認證審核後方可進行充值操作"
                    },
                    withdrawalTo: {
                        zh: "提现到",
                        en: "Withdrawal to",
                        vi: "--",
                        "zh-Hant": "提現到"
                    },
                    tip43: {
                        zh: "请填写您的真实CSE钱包账号",
                        en: "Please fill out your true CSE wallet account",
                        vi: "--",
                        "zh-Hant": "請填寫您的真實CSE錢包帳號"
                    },
                    tip44: {
                        zh: "请填写您的真实PayPal账号",
                        en: "Please fill out your real PayPal account",
                        vi: "--",
                        "zh-Hant": "請填寫您的真實PayPal帳號"
                    },
                    tip45: {
                        zh: "无法进行出金操作",
                        en: "Cannot withdrawal",
                        vi: "--",
                        "zh-Hant": "無法進行出金操作"
                    },
                    goUncopy: {
                        zh: "前往取消复制",
                        en: "Go to unfollow",
                        vi: "--",
                        "zh-Hant": "前往取消復制"
                    },
                    goDeposit: {
                        zh: "前往充值",
                        en: "Go to deposit",
                        vi: "--",
                        "zh-Hant": "前往充值"
                    },
                    tip46: {
                        zh: "申请已提交，我们会在两个工作日内处理完毕",
                        en: "The application has been submitted and will be processed within two working days",
                        vi: "--",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢"
                    },
                    tip47: {
                        zh: "到账时间约为10分钟，请耐心等待。",
                        en: "The arrival time is about 10 minutes, please wait patiently.",
                        vi: "--",
                        "zh-Hant": "到帳時間約為10分鐘，請耐心等待。"
                    },
                    continueWithdraw: {
                        zh: "继续提现",
                        en: "Continue to withdraw",
                        vi: "--",
                        "zh-Hant": "繼續提現"
                    },
                    tip48: {
                        zh: "如有疑问，请联系您的客户经理或联系客服",
                        en: "If you have any questions, please contact your account manager or customer service",
                        vi: "--",
                        "zh-Hant": "如有疑問，請聯系您的客護經理或聯系客服"
                    },
                    tip49: {
                        zh: "请输入出金金额",
                        en: "Please enter withdrawal amount",
                        vi: "--",
                        "zh-Hant": "請輸入出金金額"
                    },
                    tip50: {
                        zh: "输入的金额为大于零的整数或者小数（小数点后最多两位数字）",
                        en: "Entered amount should be Integer or decimal and greater than zero (No more than two digits after the decimal point)",
                        vi: "--",
                        "zh-Hant": "輸入的金額為大於零的整數或者小數（小數點後最多兩位數字）"
                    },
                    tip51: {
                        zh: "出金金额最多为",
                        en: "Maximum withdrawal amount",
                        vi: "--",
                        "zh-Hant": "出金金額最多為"
                    },
                    tip52: {
                        zh: "出金金额最少为",
                        en: "Minimum withdrawal amount",
                        vi: "--",
                        "zh-Hant": "出金金額最少為"
                    },
                    rate1d: {
                        zh: "今日汇率：1 美元 =",
                        en: "Today's exchange rate: $1 =",
                        vi: "--",
                        "zh-Hant": "今日匯率：1 美元 ="
                    },
                    r1d: {
                        zh: "1 美元 =",
                        en: "$1 =",
                        vi: "--",
                        "zh-Hant": "1 美元 ="
                    },
                    withdrawing: {
                        zh: "提现中",
                        en: "Withdrawing",
                        vi: "--",
                        "zh-Hant": "提現中"
                    },
                    selectCurrency: {
                        zh: "选择币种",
                        en: "Select currency",
                        vi: "--",
                        "zh-Hant": "選擇蔽種"
                    },
                    tip53: {
                        zh: "通过实名认证后才可以进行资金提现。",
                        en: "You can withdrawal only if you passed the verification.",
                        vi: "--",
                        "zh-Hant": "通過實名認證後才可以進行資金提現。"
                    },
                    tip54: {
                        zh: "充值后交易手数未满足活动规则要求，体验资金和充值前的盈利不可提取。",
                        en: "The volume after deposit not meet the requirements of the activity rules, so experience money and profit before the recharge cannot be extracted.",
                        vi: "--",
                        "zh-Hant": "充值後交易手數未滿足活動規則要求，體驗資金和充值前的盈利不可提取。"
                    },
                    tip55: {
                        zh: "存在复制关系的，提现时系统自动扣除复制金额，若要全部提现，请先手动取消复制关系。",
                        en: "If there is a follow relationship, the system will automatically deduct the copy amount when withdrawing. If you want to withdraw all the copies, please cancel the copy relationship manually first.",
                        vi: "--",
                        "zh-Hant": "存在復制關系的，提現時系統自動扣除復制金額，若要全部提現，請先手動取消復制關系。"
                    },
                    voucher: {
                        zh: "凭证记录",
                        en: "Voucher",
                        vi: "--",
                        "zh-Hant": "憑證記錄"
                    },
                    tip56: {
                        zh: "您有未上传的充值凭证，需上传历史充值凭证后才可继续使用网银支付功能。",
                        en: "You have un-submit deposit voucher, you need to upload the history voucher before continue online payment.",
                        vi: "--",
                        "zh-Hant": "您有未上傳的充值憑證，需上傳歷史充值憑證後才可繼續使用網銀支付功能。"
                    },
                    chooseOtherPayment: {
                        zh: "选择其他支付方式",
                        en: "Choose other payment methods",
                        vi: "--",
                        "zh-Hant": "選擇其他支付方式"
                    },
                    fillPaymentCardInformation: {
                        zh: "填写支付银行卡信息",
                        en: "Fill in the payment card information",
                        vi: "--",
                        "zh-Hant": "填寫支付銀行卡信息"
                    },
                    tip57: {
                        zh: "当前支付方式最低充值金额为",
                        en: "The minimum deposit amount of current payment method is",
                        vi: "--",
                        "zh-Hant": "當前支付方式最低充值金額為"
                    },
                    tip58: {
                        zh: "当前支付方式最高充值金额为",
                        en: "The maximum deposit amount of current payment method is",
                        vi: "--",
                        "zh-Hant": "當前支付方式最高充值金額為"
                    },
                    isThereAn: {
                        zh: "是否有",
                        en: "Is there an",
                        vi: "--",
                        "zh-Hant": "是否有"
                    },
                    uploadTeleTranVoucher: {
                        zh: "请上传电汇凭证",
                        en: "Upload telegraphic transfer voucher",
                        vi: "--",
                        "zh-Hant": "請上傳電匯憑證"
                    },
                    depositPage: {
                        zh: "入金页面",
                        en: "Deposit page",
                        vi: "--",
                        "zh-Hant": "入金頁面"
                    },
                    enterBankCardNum: {
                        zh: "请输入银行卡号",
                        en: "Enter bank card number",
                        vi: "--",
                        "zh-Hant": "請輸入銀行卡號"
                    },
                    tip59_1: {
                        zh: "折合",
                        en: "Equivalent to",
                        vi: "--",
                        "zh-Hant": "折合"
                    },
                    tip59_2: {
                        zh: "约：",
                        en: ": ",
                        vi: "--",
                        "zh-Hant": "約："
                    },
                    tip60: {
                        zh: "充值成功后请及时上传凭证，若超过两周未上传，将无法进行交易操作。",
                        en: "Please upload deposit voucher within two weeks, otherwise, trading operations will not be possible.",
                        vi: "--",
                        "zh-Hant": "充值成功後請及時上傳憑證，若超過兩周未上傳，將無法進行交易操作。"
                    },
                    tip61: {
                        zh: "您有入金凭证已超过一周未上传，请及时上传，否则将无法进行交易操作。",
                        en: "You have not uploaded your voucher for more than a week, please upload it in time, otherwise you will not be able to trade.",
                        vi: "--",
                        "zh-Hant": "您有入金憑證已超過壹周未上傳，請及時上傳，否則將無法進行交易操作。"
                    },
                    tip62_1: {
                        zh: "请注意，我们不接受直接支付到我们银行账户的现金付款。为了您的注资能及时、准确到账，在填写电汇申请单时，",
                        en: "Please note that we do not accept cash payments directly to our bank account. In order to receive your payment timely and accurately, please fill in the wire transfer application form. ",
                        vi: "--",
                        "zh-Hant": "請註意，我們不接受直接支付到我們銀行帳護的現金付款。為了您的註資能及時、準確到帳，在填寫電匯申請單時，"
                    },
                    tip62_2: {
                        zh: "请您务必在汇款附言一栏里填写您的交易账号。",
                        en: " Please be sure to fill out your transaction account in the remittance slip.",
                        vi: "--",
                        "zh-Hant": "請您務必在匯款附言壹欄裏填寫您的交易帳號。"
                    },
                    tip62_3: {
                        zh: "同时请提供您的电话号码，以便我们与您取得联系。",
                        en: " Please also provide your phone number so that we can get in touch with you.",
                        vi: "--",
                        "zh-Hant": "同時請提供您的電話號碼，以便我們與您取得聯系。"
                    },
                    tip63_1: {
                        zh: "出金",
                        en: "The ",
                        vi: "--",
                        "zh-Hant": "出金"
                    },
                    tip63_2: {
                        zh: "申请已提交，我们会在两个工作日内处理完毕",
                        en: " withdrawal application has been submitted, and we will finish the processing within two working days.",
                        vi: "--",
                        "zh-Hant": "申請已提交，我們會在兩個工作日內處理完畢"
                    },
                    tip64_1: {
                        zh: "出金金额最多为 ",
                        en: "The maximum deposit amount is USD ",
                        vi: "--",
                        "zh-Hant": "出金金額最多為 "
                    },
                    tip64_2: {
                        zh: " 美金",
                        en: " ",
                        vi: "--",
                        "zh-Hant": " 美金"
                    },
                    tip65_1: {
                        zh: "出金金额最少为 ",
                        en: "The minimum withdraw amount is USD ",
                        vi: "--",
                        "zh-Hant": "出金金額最少為 "
                    },
                    tip65_2: {
                        zh: " 美金",
                        en: " ",
                        vi: "--",
                        "zh-Hant": " 美金"
                    },
                    depositStipulation: {
                        zh: "入金规定",
                        en: "Deposit stipulation",
                        vi: "--",
                        "zh-Hant": "入金規定"
                    }
                },
                master: {
                    precautions: {
                        zh: "注意事项",
                        en: "Precautions",
                        vi: "--",
                        "zh-Hant": "註意事項"
                    },
                    masterLevelInstructions: {
                        zh: "高手等级说明",
                        en: "Master Level Instructions",
                        vi: "--",
                        "zh-Hant": "高手等級說明"
                    },
                    tip1: {
                        zh: "为了最大限度地规避交易风险，老虎外汇根据高手等级限制可复制总额范围：",
                        en: "In order to maximize the risk of dealing with the transaction, the TigerWit according master’s level limit to be followed Total range: ",
                        vi: "--",
                        "zh-Hant": "為了最大限度地規避交易風險，老虎外匯根據高手等級限制可復制總額範圍："
                    },
                    tip2: {
                        zh: "用户复制高手的复制资金不可超过高手当前账户级别的限额；",
                        en: "The user’s copy of the funds shall not exceed the current account level limit",
                        vi: "--",
                        "zh-Hant": "用護復制高手的復制資金不可超過高手當前帳護級別的限額；"
                    },
                    tip3: {
                        zh: "若当前累计复制资金量达到限额，系统将提醒高手进行账户升级，高手确认并更改账户级别后，用户方能继续复制；",
                        en: "If the current cumulative amount of funds to meet the limit, the system will remind the master to upgrade the account, experts confirm and change the account level, the user can continue to copy",
                        vi: "--",
                        "zh-Hant": "若當前累計復制資金量達到限額，系統將提醒高手進行帳護升級，高手確認並更改帳護級別後，用護方能繼續復制；"
                    },
                    tip4: {
                        zh: "高手只能使用账户级别内支持的杠杆进行交易，复制者跟随高手进行同杠杆开仓交易。",
                        en: "The master can only use the account level to support the leverage of the transaction, the user to follow the master with the lever to open the transaction.",
                        vi: "--",
                        "zh-Hant": "高手只能使用帳護級別內支持的杠桿進行交易，復制者跟隨高手進行同杠桿開倉交易。"
                    },
                    masterLevel: {
                        zh: "高手等级",
                        en: "Master Level",
                        vi: "--",
                        "zh-Hant": "高手等級"
                    },
                    currentLevel: {
                        zh: "当前类别",
                        en: "Current Level",
                        vi: "--",
                        "zh-Hant": "當前類別"
                    },
                    leverageRangeM: {
                        zh: "杠杆使用范围：",
                        en: "Leverage Range: ",
                        vi: "--",
                        "zh-Hant": "杠桿使用範圍："
                    },
                    copyAmountLimitM: {
                        zh: "复制金额限额：",
                        en: "Copy Amount Limit: ",
                        vi: "--",
                        "zh-Hant": "復制金額限額："
                    },
                    remainingCopyableAmountM: {
                        zh: "剩余可复制金额：",
                        en: "Remaining Copyable Amount: ",
                        vi: "--",
                        "zh-Hant": "剩余可復制金額："
                    },
                    tip9: {
                        zh: "成为老虎外汇高手 获取更多收益",
                        en: "Become a TigerWit’s master to get more income",
                        vi: "--",
                        "zh-Hant": "成為老虎外匯高手 獲取更多收益"
                    },
                    tip10: {
                        zh: "榜单投资者被其他用户复制跟随，会获得复制者20%的盈利分成，",
                        en: "The list of investors is copied by other users, will get 20% of the profits of the replicator,",
                        vi: "--",
                        "zh-Hant": "榜單投資者被其他用護復制跟隨，會獲得復制者20%的盈利分成，"
                    },
                    tip11: {
                        zh: "申请成为高手需达成以下条件",
                        en: "Application to become a master to meet the following conditions",
                        vi: "--",
                        "zh-Hant": "申請成為高手需達成以下條件"
                    },
                    tip12: {
                        zh: "开通老虎外汇真实账户并完成实名认证",
                        en: "Open the real account of the TigerWit and complete the verification",
                        vi: "--",
                        "zh-Hant": "開通老虎外匯真實帳護並完成實名認證"
                    },
                    tip13: {
                        zh: "在老虎外汇交易平台真实入金并连续自主交易20个以上工作日",
                        en: "In the TigerWit trading platform deposit and continuous self-trading more than 20 working days",
                        vi: "--",
                        "zh-Hant": "在老虎外匯交易平臺真實入金並連續自主交易20個以上工作日"
                    },
                    tip14: {
                        zh: "近30日收益率大于20%",
                        en: "Nearly 30 days rate of return greater than 20%",
                        vi: "--",
                        "zh-Hant": "近30日收益率大於20%"
                    },
                    tip15: {
                        zh: "账户余额不得低于$500",
                        en: "Account balance should not be less than $ 500",
                        vi: "--",
                        "zh-Hant": "帳護余額不得低於$500"
                    },
                    tip16: {
                        zh: "立即申请成为高手",
                        en: "Apply Immediately",
                        vi: "--",
                        "zh-Hant": "立即申請成為高手"
                    },
                    tip17: {
                        zh: "高手申请审核中，",
                        en: "Is under review,",
                        vi: "--",
                        "zh-Hant": "高手申請審核中，"
                    },
                    tip18: {
                        zh: "请耐心等待",
                        en: "Please wait patiently",
                        vi: "--",
                        "zh-Hant": "請耐心等待"
                    },
                    tip19: {
                        zh: "高手申请由工作人员人工审核，我们会尽快完成审核并将结果通知您",
                        en: "The master application is manually audited by the staff, and we will complete the review as soon as possible and inform the result",
                        vi: "--",
                        "zh-Hant": "高手申請由工作人員人工審核，我們會盡快完成審核並將結果通知您"
                    },
                    tip20: {
                        zh: "高手申请被拒绝",
                        en: "The master application was rejected",
                        vi: "--",
                        "zh-Hant": "高手申請被拒絕"
                    },
                    tip21: {
                        zh: "高手申请已通过审核",
                        en: "The master application has been approved",
                        vi: "--",
                        "zh-Hant": "高手申請已通過審核"
                    },
                    tip22: {
                        zh: "恭喜您的高手申请已通过审核！",
                        en: "Congratulations to your master application has been approved!",
                        vi: "--",
                        "zh-Hant": "恭喜您的高手申請已通過審核！"
                    },
                    tip23: {
                        zh: "您的交易账户已被推荐到高手榜，请重新登录后查看。",
                        en: "Your trading account has been recommended to the master list. Please check back again.",
                        vi: "--",
                        "zh-Hant": "您的交易帳護已被推薦到高手榜，請重新登錄後查看。"
                    },
                    tip24: {
                        zh: "高手申请已成功提交",
                        en: "The master application has been successfully submitted",
                        vi: "--",
                        "zh-Hant": "高手申請已成功提交"
                    },
                    tip25: {
                        zh: "我们会尽快进行审核，请耐心等待",
                        en: "We will review as soon as possible, please be patient",
                        vi: "--",
                        "zh-Hant": "我們會盡快進行審核，請耐心等待"
                    },
                    tip26: {
                        zh: "未达成高手申请条件",
                        en: "Did not meet the requirements",
                        vi: "--",
                        "zh-Hant": "未達成高手申請條件"
                    },
                    tip27: {
                        zh: "请继续努力",
                        en: "Please keep working hard",
                        vi: "--",
                        "zh-Hant": "請繼續努力"
                    },
                    masterLevels: {
                        zh: "高手类别",
                        en: "Master Level",
                        vi: "--",
                        "zh-Hant": "高手類別"
                    },
                    last30AaysYield: {
                        zh: "近30天收益率",
                        en: "Last 30 days yield",
                        vi: "--",
                        "zh-Hant": "近30天收益率"
                    },
                    days30MaximumDrawdown: {
                        zh: "近30天最大跌幅",
                        en: "Last 30 days the maximum drawdown",
                        vi: "--",
                        "zh-Hant": "近30天最大跌幅"
                    },
                    lastTradingDay: {
                        zh: "上一交易日",
                        en: "Last day traded",
                        vi: "--",
                        "zh-Hant": "上壹交易日"
                    },
                    tip6: {
                        zh: "为了最大限度地规避交易风险，老虎外汇根据高手的当前跟随金额调整杠杆使用范围：",
                        en: "In order to maximize the risk of dealing with the transaction, the tiger foreign exchange according to the current amount of the master to adjust the use of leverage range: ",
                        vi: "--",
                        "zh-Hant": "為了最大限度地規避交易風險，老虎外匯根據高手的當前跟隨金額調整杠桿使用範圍："
                    },
                    tip7: {
                        zh: "当前跟随金额＞$20万，高手可使用100倍、50倍杠杆进行交易",
                        en: "Current amount of follow > $200,000 , master can use 100, 50 times the lever to trade;",
                        vi: "--",
                        "zh-Hant": "當前跟隨金額＞$20萬，高手可使用100倍、50倍杠桿進行交易"
                    },
                    tip8: {
                        zh: "当前跟随金额≤$20万，高手可使用全部杠杆进行交易",
                        en: " Current amount of follow ≤ $200,000 , master can use all the leverage to trade;",
                        vi: "--",
                        "zh-Hant": "當前跟隨金額≤$20萬，高手可使用全部杠桿進行交易"
                    },
                    masterSystem: {
                        zh: "复制跟单系统",
                        en: "’s fully-automated order-following system",
                        vi: "--",
                        "zh-Hant": "復制跟單系統"
                    },
                    tip28: {
                        zh: "直通全球资本市场",
                        en: "Direct access to global capital markets",
                        vi: "--",
                        "zh-Hant": "直通全球資本市場"
                    },
                    tradeLikeMaster: {
                        zh: "人人都是投资高手",
                        en: "Everyone is the master of investment",
                        vi: "--",
                        "zh-Hant": "人人都是投資高手"
                    },
                    clickFollow: {
                        zh: "一键复制",
                        en: "Click to follow",
                        vi: "--",
                        "zh-Hant": "壹鍵復制"
                    },
                    enjoyProfits: {
                        zh: "坐享其成",
                        en: "Enjoy profits",
                        vi: "--",
                        "zh-Hant": "坐享其成"
                    },
                    highIncome: {
                        zh: "收益率",
                        en: "Profitability",
                        vi: "--",
                        "zh-Hant": "收益率"
                    },
                    exact: {
                        zh: "胜率",
                        en: "Consistency",
                        vi: "--",
                        "zh-Hant": "勝率"
                    },
                    returnLast30D: {
                        zh: "近30日收益率",
                        en: "Return(last 30D)",
                        vi: "--",
                        "zh-Hant": "近30日收益率"
                    },
                    accuracyLast30D: {
                        zh: "近30日胜率",
                        en: "Success rate",
                        vi: "--",
                        "zh-Hant": "近30日勝率"
                    },
                    followers: {
                        zh: "历史跟随者",
                        en: "Followers",
                        vi: "--",
                        "zh-Hant": "歷史跟隨者"
                    },
                    performanceOf: {
                        zh: "年表现",
                        en: "Performance: ",
                        vi: "--",
                        "zh-Hant": "年表現"
                    },
                    tip29: {
                        zh: "数据将于每天北京时间00：00进行更新",
                        en: "The data will be updated daily at 00:00GMT",
                        vi: "--",
                        "zh-Hant": "數據將於每天北京時間00：00進行更新"
                    },
                    tip30: {
                        zh: "过往表现并不能完全代表未来交易的成功率，您需要做出理智的判断",
                        en: "Past performance is no guarantee of future performance.",
                        vi: "--",
                        "zh-Hant": "過往表現並不能完全代表未來交易的成功率，您需要做出理智的判斷"
                    },
                    totalClosedOrders: {
                        zh: "总平仓交易数",
                        en: "Total Closed Orders",
                        vi: "--",
                        "zh-Hant": "總平倉交易數"
                    },
                    buy: {
                        zh: "多单",
                        en: "BUY",
                        vi: "--",
                        "zh-Hant": "多單"
                    },
                    sell: {
                        zh: "空单",
                        en: "SELL",
                        vi: "--",
                        "zh-Hant": "空單"
                    },
                    pleaseChooseAccount: {
                        zh: "请选择账号：",
                        en: "Please choose account: ",
                        vi: "--",
                        "zh-Hant": "請選擇帳號："
                    },
                    masterRequirements: {
                        zh: "未达成以下高手申请条件，请继续努力",
                        en: "Did not meet the requirements, please keep working hard.",
                        vi: "--",
                        "zh-Hant": "未達成以下高手申請條件，請繼續努力"
                    },
                    masterRequirements1: {
                        zh: "图片大小超过 2MB 请重新选择",
                        en: "Image size over 2MB please re-select",
                        vi: "--",
                        "zh-Hant": "圖片大小超過 2MB 請重新選擇"
                    },
                    masterRequirements2: {
                        zh: "昵称使用规范：昵称应体现个人属性，避免选用官方化、敏感时政词汇、不雅词汇、广告名称、手机号码、社交联系方式等；",
                        en: "Username specification: username should reflect personal attributes and avoid official, sensitive political vocabulary, indecent vocabulary, advertising name, mobile phone number, social contact information, etc.",
                        vi: "--",
                        "zh-Hant": "昵稱使用規範：昵稱應體現個人屬性，避免選用官方化、敏感時政詞匯、不雅詞匯、廣告名稱、手機號碼、社交聯系方式等；"
                    },
                    masterRequirements3: {
                        zh: "头像使用规范：头像禁止使用选用政治敏感图片、不雅图片、广告图片、品牌LOGO、广告物料等；",
                        en: "Profile photo specification: it is prohibited to use politically sensitive images, indecent images, advertising images, brand logos, advertising materials, etc.",
                        vi: "--",
                        "zh-Hant": "頭像使用規範：頭像禁止使用選用政治敏感圖片、不雅圖片、廣告圖片、品牌LOGO、廣告物料等；"
                    },
                    masterRequirements4: {
                        zh: "成为高手后昵称及头像将不能再次修改，请谨慎填写；",
                        en: "The profile photo and username can’t be changed after became a master, please fill in carefully.",
                        vi: "--",
                        "zh-Hant": "成為高手後昵稱及頭像將不能再次修改，請謹慎填寫；"
                    },
                    masterRequirements5: {
                        zh: "违背以上情况，申请将会被驳回。",
                        en: "In violation of the above, the application will be rejected.",
                        vi: "--",
                        "zh-Hant": "違背以上情況，申請將會被駁回。"
                    },
                    applyMasterReminder: {
                        zh: "申请高手提醒",
                        en: "Apply for master reminder",
                        vi: "--",
                        "zh-Hant": "申請高手提醒"
                    },
                    sureAboutApply: {
                        zh: "确定申请高手吗？",
                        en: "Are you sure about applying?",
                        vi: "--",
                        "zh-Hant": "確定申請高手嗎？"
                    },
                    sureAboutApply1: {
                        zh: "未达成高手申请条件，请继续努力",
                        en: "Did not meet the master application conditions, please keep trying",
                        vi: "--",
                        "zh-Hant": "未達成高手申請條件，請繼續努力"
                    },
                    applicationSubmitted: {
                        zh: "申请已提交！",
                        en: "Application has been submitted!",
                        vi: "--",
                        "zh-Hant": "申請已提交！"
                    },
                    copyTrading: {
                        zh: "复制跟单交易模式，人人都是投资高手",
                        en: "With TigerWit’s fully-automated copy-trading technology anyone can be the Master of their own trading",
                        vi: "--",
                        "zh-Hant": "復制跟單交易模式，人人都是投資高手"
                    },
                    chooseMaster: {
                        zh: "选择高手",
                        en: "Choose a Master",
                        vi: "--",
                        "zh-Hant": "選擇高手"
                    },
                    clickCopy: {
                        zh: "点击复制",
                        en: "Copy with one click",
                        vi: "--",
                        "zh-Hant": "點擊復制"
                    },
                    takeProfit: {
                        zh: "开始交易",
                        en: "Take profit",
                        vi: "--",
                        "zh-Hant": "開始交易"
                    },
                    selectMaster: {
                        zh: "系统从三个维度来比较排列出高手列表，可根据自身需求来选择高手：",
                        en: "Select the Master whose trades you wish to follow by comparing their performance using three different measurements: ",
                        vi: "--",
                        "zh-Hant": "系統從三個維度來比較排列出高手列表，可根據自身需求來選擇高手："
                    },
                    selectMaster_1: {
                        zh: "收益率——高手的整体收益率。",
                        en: "Profitability – a Master’s overall return on investment. The top-ranked Master has generated the greatest overall profit over the selected time-period.",
                        vi: "--",
                        "zh-Hant": "收益率——高手的整體收益率。"
                    },
                    selectMaster_2: {
                        zh: "最大跌幅-高手的最大浮动亏损占比。",
                        en: "Stability – a Master’s averaged rate of return. The top-ranked Master has created the greatest profit averaged over the selected time period.",
                        vi: "--",
                        "zh-Hant": "最大跌幅-高手的最大浮動虧損占比。"
                    },
                    selectMaster_3: {
                        zh: "准确率：高手平仓的订单中盈利订单的占比。",
                        en: "Consistency: a Master’s overall ratio of winning to losing trades. The top-ranked Master has the highest ratio of winning to losing trades over the selected time-period.",
                        vi: "--",
                        "zh-Hant": "準確率：高手平倉的訂單中盈利訂單的占比。"
                    },
                    qualifyMaster: {
                        zh: "成为高手，你将满足以下条件：",
                        en: "To qualify for Master status a trader must have met the following requirements: ",
                        vi: "--",
                        "zh-Hant": "成為高手，妳將滿足以下條件："
                    },
                    qualifyMaster_1: {
                        zh: "入金并连续自主交易20个工作日以上；",
                        en: "Self-trade more than 20 days",
                        vi: "--",
                        "zh-Hant": "入金並連續自主交易20個工作日以上；"
                    },
                    qualifyMaster_2: {
                        zh: "近30日内的收益回报率大于20%",
                        en: "Achieve a 30-day rate of return greater than 20%",
                        vi: "--",
                        "zh-Hant": "近30日內的收益回報率大於20%"
                    },
                    qualifyMaster_3: {
                        zh: "账户余额不得低于500美金",
                        en: "Maintain an account balance of at least USD500",
                        vi: "--",
                        "zh-Hant": "帳護余額不得低於500美金"
                    },
                    title: {
                        zh: "",
                        en: "",
                        vi: "--",
                        "zh-Hant": ""
                    }
                },
                oneLogin: {
                    title: {
                        zh: "第一次登陆",
                        en: "First time login",
                        vi: "--",
                        "zh-Hant": "第壹次登六"
                    },
                    tip1: {
                        zh: "TigerWit交易账户支持开通多个子账号用于不同交易策略。",
                        en: "TigerWit transaction account supports opening multiple sub-accounts for different transaction strategies.",
                        vi: "--",
                        "zh-Hant": "TigerWit交易帳護支持開通多個子帳號用於不同交易策略。"
                    },
                    tip2: {
                        zh: "您当前登录账号为上榜高手，系统已自动将账号身份定义为：",
                        en: "You currently login the master account that on the masters list, the system has automatically defined the account identity as: ",
                        vi: "--",
                        "zh-Hant": "您當前登錄帳號為上榜高手，系統已自動將帳號身份定義為："
                    },
                    tip7: {
                        zh: "您当前登录账号存在跟随关系，系统已自动将账号身份定义为：",
                        en: "Your current login account has a follow relationship, and the system has automatically defined the account identity as: ",
                        vi: "--",
                        "zh-Hant": "您當前登錄帳號存在跟隨關系，系統已自動將帳號身份定義為："
                    },
                    masterAccount: {
                        zh: "高手账号",
                        en: "Master account",
                        vi: "--",
                        "zh-Hant": "高手帳號"
                    },
                    copyAccount: {
                        zh: "跟单账号",
                        en: "Copy account",
                        vi: "--",
                        "zh-Hant": "跟單帳號"
                    },
                    accountAccess: {
                        zh: "账号权限",
                        en: "Account access",
                        vi: "--",
                        "zh-Hant": "帳號權限"
                    },
                    accountAccessM: {
                        zh: "账号权限：",
                        en: "Account access: ",
                        vi: "--",
                        "zh-Hant": "帳號權限："
                    },
                    independentTrading: {
                        zh: "自主交易",
                        en: "Independent Trading",
                        vi: "--",
                        "zh-Hant": "自主交易"
                    },
                    independentTrading0: {
                        zh: "自主交易。",
                        en: "Independent Trading.",
                        vi: "--",
                        "zh-Hant": "自主交易。"
                    },
                    tip3: {
                        zh: "仅用于高手跟单；",
                        en: "Only used for following masters;",
                        vi: "--",
                        "zh-Hant": "僅用於高手跟單；"
                    },
                    applyToMaster: {
                        zh: "申请成为高手。",
                        en: "Apply to be a master.",
                        vi: "--",
                        "zh-Hant": "申請成為高手。"
                    },
                    tip4: {
                        zh: "该账号不再支持自主开仓操作,历史自主开仓的订单支持手动平仓。",
                        en: "This account no longer supports the operation of independent open position, and the orders of historical independent position opening support manual position closing.",
                        vi: "--",
                        "zh-Hant": "該帳號不再支持自主開倉操作,歷史自主開倉的訂單支持手動平倉。"
                    },
                    tip5: {
                        zh: "为了不影响您自主开仓， 系统自动为您创建了自主交易账号。请在“我的-账户管理”查看。",
                        en: "In order not to affect your independent open position, the system automatically created an independent trading account for you. Please check in Trade Account.",
                        vi: "--",
                        "zh-Hant": "為了不影響您自主開倉， 系統自動為您創建了自主交易帳號。請在“我的-帳護管理”查看。"
                    },
                    tip6: {
                        zh: "您当前登录账号为自主开仓，系统已自动将账号身份定义为：",
                        en: "You currently login the independent account that on the masters list, the system has automatically defined the account identity as: ",
                        vi: "--",
                        "zh-Hant": "您當前登錄帳號為自主開倉，系統已自動將帳號身份定義為："
                    }
                },
                symbolPage: {
                    symbol: {
                        zh: "自选",
                        en: "Symbol",
                        vi: "--",
                        "zh-Hant": "自選"
                    },
                    products: {
                        zh: "交易品种",
                        en: "Products",
                        vi: "--",
                        "zh-Hant": "交易品種"
                    },
                    newPrice: {
                        zh: "最新价格",
                        en: "New Price",
                        vi: "--",
                        "zh-Hant": "最新價格"
                    },
                    variation: {
                        zh: "涨跌幅",
                        en: "Variation",
                        vi: "--",
                        "zh-Hant": "漲跌幅"
                    },
                    addProduct: {
                        zh: "添加交易品种",
                        en: "Add the Product",
                        vi: "--",
                        "zh-Hant": "添加交易品種"
                    },
                    forex: {
                        zh: "外汇",
                        en: "Forex",
                        vi: "--",
                        "zh-Hant": "外匯"
                    },
                    metals: {
                        zh: "贵金属",
                        en: "Metals",
                        vi: "--",
                        "zh-Hant": "貴金屬"
                    },
                    oilEngrgy: {
                        zh: "能源",
                        en: "Oil&Engrgy",
                        vi: "--",
                        "zh-Hant": "能源"
                    },
                    indices: {
                        zh: "差价合约",
                        en: "Indices",
                        vi: "--",
                        "zh-Hant": "差價合約"
                    },
                    fastTrade: {
                        zh: "简单",
                        en: "Fast Trade",
                        vi: "--",
                        "zh-Hant": "間單"
                    },
                    tip1: {
                        zh: "您确定要买入xx手吗？",
                        en: "Are you sure you want to order xx lot?",
                        vi: "--",
                        "zh-Hant": "您確定要買入xx手嗎？"
                    },
                    successful: {
                        zh: "开仓成功",
                        en: "Successful",
                        vi: "--",
                        "zh-Hant": "開倉成功"
                    },
                    viewRecord: {
                        zh: "查看交易记录",
                        en: "View the Record",
                        vi: "--",
                        "zh-Hant": "查看交易記錄"
                    },
                    advanced: {
                        zh: "高级",
                        en: "Advanced",
                        vi: "--",
                        "zh-Hant": "高級"
                    },
                    type: {
                        zh: "交易方式",
                        en: "Type",
                        vi: "--",
                        "zh-Hant": "交易方式"
                    },
                    marketExecution: {
                        zh: "市价交易",
                        en: "Market Execution",
                        vi: "--",
                        "zh-Hant": "市價交易"
                    },
                    pendingOrder: {
                        zh: "挂单交易",
                        en: "Pending Order",
                        vi: "--",
                        "zh-Hant": "掛單交易"
                    },
                    total: {
                        zh: "合计",
                        en: "Total",
                        vi: "--",
                        "zh-Hant": "合計"
                    },
                    selectMonth: {
                        zh: "选择月份",
                        en: "Select the Month",
                        vi: "--",
                        "zh-Hant": "選擇月份"
                    },
                    deadline: {
                        zh: "截止时间",
                        en: "Deadline",
                        vi: "--",
                        "zh-Hant": "截止時間"
                    },
                    tradeTimes: {
                        zh: "交易时间",
                        en: "Trade times",
                        vi: "--",
                        "zh-Hant": "交易時間"
                    },
                    quotesTimes: {
                        zh: "报价时间",
                        en: "Quotes Times",
                        vi: "--",
                        "zh-Hant": "報價時間"
                    },
                    minimalSpread: {
                        zh: "最小点差（近14天统计数据）",
                        en: "Minimal Spread（Statistics for the last 14 days）",
                        vi: "--",
                        "zh-Hant": "最小點差（近14天統計數據）"
                    },
                    stopsLevel: {
                        zh: "最低止损点数",
                        en: "Stops Level",
                        vi: "--",
                        "zh-Hant": "最低止損點數"
                    },
                    contractSize: {
                        zh: "合约数量",
                        en: "Contract Size",
                        vi: "--",
                        "zh-Hant": "合約數量"
                    },
                    minimalVolume: {
                        zh: "最小交易量",
                        en: "Minimal Volume",
                        vi: "--",
                        "zh-Hant": "最小交易量"
                    },
                    maximalVolume: {
                        zh: "最大交易量",
                        en: "Maximal Volume",
                        vi: "--",
                        "zh-Hant": "最大交易量"
                    },
                    volumeStep: {
                        zh: "交易量步长",
                        en: "Volume Step",
                        vi: "--",
                        "zh-Hant": "交易量步長"
                    },
                    marginPercentage: {
                        zh: "每标准手手续费",
                        en: "Margin Percentage",
                        vi: "--",
                        "zh-Hant": "每標準手手續費"
                    },
                    swapSype: {
                        zh: "库存费计算模式/保证金",
                        en: "Swap Sype",
                        vi: "--",
                        "zh-Hant": "庫存費計算模式/保證金"
                    },
                    swapLong: {
                        zh: "买入库存费",
                        en: "Swap Long",
                        vi: "--",
                        "zh-Hant": "買入庫存費"
                    },
                    swapShort: {
                        zh: "卖出库存费",
                        en: "Swap Short",
                        vi: "--",
                        "zh-Hant": "賣出庫存費"
                    },
                    openedToday: {
                        zh: "今日开盘",
                        en: "Opened Today",
                        vi: "--",
                        "zh-Hant": "今日開盤"
                    },
                    closedYesterday: {
                        zh: "昨日收盘",
                        en: "Closed Yesterday",
                        vi: "--",
                        "zh-Hant": "昨日收盤"
                    },
                    fastOpen: {
                        zh: "快速下单",
                        en: "Fast Open",
                        vi: "--",
                        "zh-Hant": "快速下單"
                    },
                    tip2: {
                        zh: "挂单价格不能为空",
                        en: "Pending price can not be empty",
                        vi: "--",
                        "zh-Hant": "掛單價格不能為空"
                    },
                    tip3: {
                        zh: "您的账户尚未通过认证审核，请先完善资料。",
                        en: "Incomplete for the information, please continue to improve.",
                        vi: "--",
                        "zh-Hant": "您的帳護尚未通過認證審核，請先完善資料。"
                    },
                    closed: {
                        zh: "闭市中",
                        en: "Closed",
                        vi: "--",
                        "zh-Hant": "閉市中"
                    },
                    mondayFriday: {
                        zh: "周一至周五",
                        en: "Monday - Friday",
                        vi: "--",
                        "zh-Hant": "周壹至周五"
                    },
                    tip4: {
                        zh: "只允许买0.01的倍数",
                        en: "Only allow a multiple of 0.01",
                        vi: "--",
                        "zh-Hant": "只允許買0.01的倍數"
                    },
                    tip5: {
                        zh: "止损、止盈价格均无效",
                        en: "S/L, T/P are invalid",
                        vi: "--",
                        "zh-Hant": "止損、止盈價格均無效"
                    },
                    tip6: {
                        zh: "止损价格无效",
                        en: "S/L is invalid",
                        vi: "--",
                        "zh-Hant": "止損價格無效"
                    },
                    tip7: {
                        zh: "挂单价必须远离市价至少50点",
                        en: "The price must be at least 50 points away from the market price",
                        vi: "--",
                        "zh-Hant": "掛單價必須遠離市價至少50點"
                    },
                    tip8: {
                        zh: "您确定要买入0.01手吗？",
                        en: "Are you sure to buy 0.01 lots?",
                        vi: "--",
                        "zh-Hant": "您確定要買入0.01手嗎？"
                    }
                },
                settings: {
                    title: {
                        zh: "账户设置",
                        en: "Settings",
                        vi: "--",
                        "zh-Hant": "帳護設置"
                    },
                    profile: {
                        zh: "修改资料",
                        en: "Profile",
                        vi: "--",
                        "zh-Hant": "修改資料"
                    },
                    basicInformation: {
                        zh: "基本资料",
                        en: "Basic information",
                        vi: "--",
                        "zh-Hant": "基本資料"
                    },
                    location: {
                        zh: "所在地",
                        en: "Location",
                        vi: "--",
                        "zh-Hant": "所在地"
                    },
                    city: {
                        zh: "省市",
                        en: "City",
                        vi: "--",
                        "zh-Hant": "省市"
                    },
                    county: {
                        zh: "区县",
                        en: "County",
                        vi: "--",
                        "zh-Hant": "區縣"
                    },
                    alreadyBoundEmail: {
                        zh: "您已经绑定了电子邮箱 ",
                        en: "You have already bound the email ",
                        vi: "--",
                        "zh-Hant": "您已經邦定了電子郵箱 "
                    },
                    oldEmailVerificationCode: {
                        zh: "旧邮箱验证码",
                        en: "Old email verification code",
                        vi: "--",
                        "zh-Hant": "舊郵箱驗證碼"
                    },
                    clickGet: {
                        zh: "获取验证码",
                        en: "Click Get",
                        vi: "--",
                        "zh-Hant": "獲取驗證碼"
                    },
                    newEmail: {
                        zh: "新邮箱",
                        en: "New email",
                        vi: "--",
                        "zh-Hant": "新郵箱"
                    },
                    change: {
                        zh: "选择图片",
                        en: "Change",
                        vi: "--",
                        "zh-Hant": "選擇圖片"
                    },
                    general: {
                        zh: "基本信息",
                        en: "General",
                        vi: "--",
                        "zh-Hant": "基本信息"
                    },
                    userName: {
                        zh: "用户名（中文）",
                        en: "User Name(Chines)",
                        vi: "--",
                        "zh-Hant": "用護名（中文）"
                    },
                    userNameEn: {
                        zh: "用户名（英文）",
                        en: "User Name(English)",
                        vi: "--",
                        "zh-Hant": "用護名（英文）"
                    },
                    userNameM: {
                        zh: "用户名（中文）：",
                        en: "User Name(Chines): ",
                        vi: "--",
                        "zh-Hant": "用護名（中文）："
                    },
                    userNameEnM: {
                        zh: "用户名（英文）：",
                        en: "User Name(English): ",
                        vi: "--",
                        "zh-Hant": "用護名（英文）："
                    },
                    modify: {
                        zh: "修改",
                        en: "Modify",
                        vi: "--",
                        "zh-Hant": "修改"
                    },
                    country: {
                        zh: "国 家",
                        en: "Country",
                        vi: "--",
                        "zh-Hant": "國 家"
                    },
                    countryM: {
                        zh: "国 家：",
                        en: "Country: ",
                        vi: "--",
                        "zh-Hant": "國 家："
                    },
                    setPhotos: {
                        zh: "修改头像",
                        en: "Set Photos",
                        vi: "--",
                        "zh-Hant": "修改頭像"
                    },
                    choosePhoto: {
                        zh: "选择头像",
                        en: "Choose a Photo",
                        vi: "--",
                        "zh-Hant": "選擇頭像"
                    },
                    onlySupport: {
                        zh: "只支持 jpg、png 格式且大小在 2MB 以内",
                        en: "Only support JPG, PNG format and size within 2MB",
                        vi: "--",
                        "zh-Hant": "只支持 jpg、png 格式且大小在 2MB 以內"
                    },
                    security: {
                        zh: "账户安全",
                        en: "Security",
                        vi: "--",
                        "zh-Hant": "帳護安全"
                    },
                    passwordManagement: {
                        zh: "密码管理",
                        en: "Password Management",
                        vi: "--",
                        "zh-Hant": "密碼管理"
                    },
                    oldPassword: {
                        zh: "原密码",
                        en: "Old password",
                        vi: "--",
                        "zh-Hant": "原密碼"
                    },
                    newPassword: {
                        zh: "新密码",
                        en: "New password",
                        vi: "--",
                        "zh-Hant": "新密碼"
                    },
                    confirmNewPassword: {
                        zh: "确认新密码",
                        en: "Confirm new password",
                        vi: "--",
                        "zh-Hant": "確認新密碼"
                    },
                    phoneNumberSettings: {
                        zh: "手机号码设置",
                        en: "Phone number settings",
                        vi: "--",
                        "zh-Hant": "手機號碼設置"
                    },
                    boundPhoneXXX: {
                        zh: "您已经绑定了手机号",
                        en: "You have now bound phone number ",
                        vi: "--",
                        "zh-Hant": "您已經邦定了手機號"
                    },
                    newPhoneNumber: {
                        zh: "新手机号码",
                        en: "New phone number",
                        vi: "--",
                        "zh-Hant": "新手機號碼"
                    },
                    verificationCode: {
                        zh: "验证码",
                        en: "Verification code",
                        vi: "--",
                        "zh-Hant": "驗證碼"
                    },
                    getVerificationCode: {
                        zh: "获取验证码",
                        en: "Get verification code",
                        vi: "--",
                        "zh-Hant": "獲取驗證碼"
                    },
                    mailboxSettings: {
                        zh: "电子邮箱设置",
                        en: "Mailbox settings",
                        vi: "--",
                        "zh-Hant": "電子郵箱設置"
                    },
                    notificationActivateWallet: {
                        zh: "激活钱包提示",
                        en: "Notice of active wallet",
                        vi: "--",
                        "zh-Hant": "激活錢包提示"
                    },
                    notificationActivateWalletCon: {
                        zh: "钱包不支持单独激活，交易类账户开通成功后，钱包将自动激活。",
                        en: "Wallet does not support individual activation，after successful opening of transaction account, wallet will be automatically activated.",
                        vi: "--",
                        "zh-Hant": "錢包不支持單獨激活，交易類帳護開通成功後，錢包將自動激活。"
                    },
                    openLiveAccount: {
                        zh: "开通真实账户",
                        en: "Live Account",
                        vi: "--",
                        "zh-Hant": "開通真實帳護"
                    },
                    openLiveAccountTip1: {
                        zh: "开户即得$200交易红包，入金可获$800红包！",
                        en: "Open a live account and receive a $200 coupon, deposit and receive $800 coupon.",
                        vi: "--",
                        "zh-Hant": "開護即得$200交易紅包，入金可獲$800紅包！"
                    },
                    openLiveAccountTip2: {
                        zh: "同时享受更多交易体验：",
                        en: "You will enjoy more transaction experiences at the same time：",
                        vi: "--",
                        "zh-Hant": "同時享受更多交易體驗："
                    },
                    openLiveAccountTip3: {
                        zh: "自由交易，享受灵活杠杆",
                        en: "Freely trading, flexible lever.",
                        vi: "--",
                        "zh-Hant": "自由交易，享受靈活杠桿"
                    },
                    openLiveAccountTip4: {
                        zh: "复制高手获得收益",
                        en: "Get profit by following masters.",
                        vi: "--",
                        "zh-Hant": "復制高手獲得收益"
                    },
                    openLiveAccountTip5: {
                        zh: "申请成为高手获得盈利分成",
                        en: "Apply for a master and obtain commissions.",
                        vi: "--",
                        "zh-Hant": "申請成為高手獲得盈利分成"
                    },
                    freeOpening: {
                        zh: "免费开通",
                        en: "Free Opening",
                        vi: "--",
                        "zh-Hant": "免費開通"
                    },
                    openExperienceAccount: {
                        zh: "开通体验金账户",
                        en: "Open an experience account",
                        vi: "--",
                        "zh-Hant": "開通體驗金帳護"
                    },
                    openExperienceAccountTip1: {
                        zh: "开户即送$10000交易体验金。",
                        en: "Open the experience account and receive a $10000 virtual balance.",
                        vi: "--",
                        "zh-Hant": "開護即送$10000交易體驗金。"
                    },
                    openExperienceAccountTip2: {
                        zh: "只需一步，即刻享受",
                        en: "Just one step, and you will enjoy: ",
                        vi: "--",
                        "zh-Hant": "只需壹步，即刻享受"
                    },
                    openExperienceAccountTip3: {
                        zh: "自由交易，灵活杠杆",
                        en: "Freely trading, flexible lever.",
                        vi: "--",
                        "zh-Hant": "自由交易，靈活杠桿"
                    },
                    openExperienceAccountTip4: {
                        zh: "不用承担任何风险",
                        en: "Take no risk.",
                        vi: "--",
                        "zh-Hant": "不用承擔任何風險"
                    },
                    provideService: {
                        zh: "定制您的个性化服务",
                        en: "To provide you with personalized service",
                        vi: "--",
                        "zh-Hant": "定制您的個性化服務"
                    },
                    basicInformationg: {
                        zh: "个人资料设置",
                        en: "Basic information",
                        vi: "--",
                        "zh-Hant": "個人資料設置"
                    },
                    editPhotoPhone: {
                        zh: "头像、联系方式等设置",
                        en: "Edit photo, phone，ect",
                        vi: "--",
                        "zh-Hant": "頭像、聯系方式等設置"
                    },
                    photo: {
                        zh: "头像",
                        en: "Photo",
                        vi: "--",
                        "zh-Hant": "頭像"
                    },
                    iDVerification: {
                        zh: "实名认证",
                        en: "ID Verification",
                        vi: "--",
                        "zh-Hant": "實名認證"
                    },
                    verifyPhone: {
                        zh: "绑定手机",
                        en: "Verify Your Phone",
                        vi: "--",
                        "zh-Hant": "邦定手機"
                    },
                    tip1: {
                        zh: "为了您的账户安全，请先验证身份",
                        en: "To ensure your account is safe, please verify your identity first",
                        vi: "--",
                        "zh-Hant": "為了您的帳護安全，請先驗證身份"
                    },
                    tip2: {
                        zh: "我们将向您的原手机号发送验证码",
                        en: "We will send the verification code to the original phone",
                        vi: "--",
                        "zh-Hant": "我們將向您的原手機號發送驗證碼"
                    },
                    tip3: {
                        zh: "身份验证通过后，方可进行下一步操作",
                        en: "Need to verify before proceeding",
                        vi: "--",
                        "zh-Hant": "身份驗證通過後，方可進行下壹步操作"
                    },
                    enterVerificationCode: {
                        zh: "请输入验证码",
                        en: "Verification code",
                        vi: "--",
                        "zh-Hant": "請輸入驗證碼"
                    },
                    tip4: {
                        zh: "如有其它疑问，请联系老虎外汇客服",
                        en: "If you have other questions，please contact TigerWit customer service",
                        vi: "--",
                        "zh-Hant": "如有其它疑問，請聯系老虎外匯客服"
                    },
                    editEmail: {
                        zh: "绑定邮箱",
                        en: "Edit Email",
                        vi: "--",
                        "zh-Hant": "邦定郵箱"
                    },
                    verifyEmail: {
                        zh: "验证邮箱",
                        en: "Verify Your Email",
                        vi: "--",
                        "zh-Hant": "驗證郵箱"
                    },
                    tip5: {
                        zh: "我们将向您的原邮箱发送验证码",
                        en: "We will send the verification code to the original email",
                        vi: "--",
                        "zh-Hant": "我們將向您的原郵箱發送驗證碼"
                    },
                    completeInformation: {
                        zh: "完善信息",
                        en: "Complete information",
                        vi: "--",
                        "zh-Hant": "完善信息"
                    },
                    tip6: {
                        zh: "如实填写个人信息是核实您真实身份，保障您资金和账号安全，隐私信息的重要依据",
                        en: "Truthfully filling in personal information is an important basis for verifying your true identity, ensuring the security of your funds and account number and privacy information",
                        vi: "--",
                        "zh-Hant": "如實填寫個人信息是核實您真實身份，保障您資金和帳號安全，隱私信息的重要依據"
                    },
                    setNickname: {
                        zh: "设置昵称",
                        en: "Set nickname",
                        vi: "--",
                        "zh-Hant": "設置昵稱"
                    },
                    tip7: {
                        zh: "请为账户设置昵称，有助于您登上高手榜",
                        en: "Please set a nickname for your account to help you get on the list",
                        vi: "--",
                        "zh-Hant": "請為帳護設置昵稱，有助於您登上高手榜"
                    },
                    pleaseSetNickname: {
                        zh: "请为账户设置昵称",
                        en: "Please set nickname",
                        vi: "--",
                        "zh-Hant": "請為帳護設置昵稱"
                    },
                    nicknameHasBeenTaken: {
                        zh: "昵称已存在",
                        en: "The nickname has been taken",
                        vi: "--",
                        "zh-Hant": "昵稱已存在"
                    },
                    pEnterYourMail: {
                        zh: "请输入您的邮箱",
                        en: "Please enter your mail address",
                        vi: "--",
                        "zh-Hant": "請輸入您的郵箱"
                    },
                    PEnterYourMailg: {
                        zh: "请输入您的电子邮箱",
                        en: "Please enter your email address",
                        vi: "--",
                        "zh-Hant": "請輸入您的電子郵箱"
                    },
                    emailFormatErr: {
                        zh: "电子邮箱格式不正确",
                        en: "E-mail format is incorrect",
                        vi: "--",
                        "zh-Hant": "電子郵箱格式不正確"
                    },
                    emailExists: {
                        zh: "电子邮箱已存在",
                        en: "E-mail address already exists",
                        vi: "--",
                        "zh-Hant": "電子郵箱已存在"
                    },
                    sendVerificationToEmail: {
                        zh: "发送验证码至邮箱",
                        en: "Send code",
                        vi: "--",
                        "zh-Hant": "發送驗證碼至郵箱"
                    },
                    enterPhoneNum: {
                        zh: "请输入您的手机号",
                        en: "Please enter your phone number",
                        vi: "--",
                        "zh-Hant": "請輸入您的手機號"
                    },
                    phoneNumErr: {
                        zh: "手机号码不正确",
                        en: "Phone number is not correct",
                        vi: "--",
                        "zh-Hant": "手機號碼不正確"
                    },
                    phoneNumExists: {
                        zh: "手机号已存在",
                        en: "Phone number already exists",
                        vi: "--",
                        "zh-Hant": "手機號已存在"
                    },
                    verifyPhoneg: {
                        zh: "验证手机",
                        en: "Verify phone",
                        vi: "--",
                        "zh-Hant": "驗證手機"
                    },
                    sendVerificationCode: {
                        zh: "发送验证码",
                        en: "Send code",
                        vi: "--",
                        "zh-Hant": "發送驗證碼"
                    },
                    residentialAddress: {
                        zh: "居住地址",
                        en: "Residential address",
                        vi: "--",
                        "zh-Hant": "居住地址"
                    },
                    selectProvincesCities: {
                        zh: "请选择省/市",
                        en: "Please select provinces/cities",
                        vi: "--",
                        "zh-Hant": "請選擇省/市"
                    },
                    selectCityDistrict: {
                        zh: "请选择市/区",
                        en: "Please select city/district",
                        vi: "--",
                        "zh-Hant": "請選擇市/區"
                    },
                    enterAddress: {
                        zh: "请输入完整居住地址",
                        en: "Please enter full residential address",
                        vi: "--",
                        "zh-Hant": "請輸入完整居住地址"
                    },
                    openAccount: {
                        zh: "请您先开通账户！",
                        en: "Please open account first!",
                        vi: "--",
                        "zh-Hant": "請您先開通帳護！"
                    },
                    enterUsername: {
                        zh: "请输入用户名",
                        en: "Enter username",
                        vi: "--",
                        "zh-Hant": "請輸入用護名"
                    },
                    noBindEmail: {
                        zh: "您未绑定任何邮箱",
                        en: "You haven’t bind any email",
                        vi: "--",
                        "zh-Hant": "您未邦定任何郵箱"
                    },
                    enterNewEmail: {
                        zh: "请输入新邮箱",
                        en: "Enter new email",
                        vi: "--",
                        "zh-Hant": "請輸入新郵箱"
                    },
                    emailFormatError: {
                        zh: "邮箱格式错误",
                        en: "Email format error",
                        vi: "--",
                        "zh-Hant": "郵箱格式錯誤"
                    },
                    newEmailVerCode: {
                        zh: "新邮箱验证码",
                        en: "New email verification code",
                        vi: "--",
                        "zh-Hant": "新郵箱驗證碼"
                    },
                    passwordChangedSucc: {
                        zh: "密码修改成功",
                        en: "Password changed successfully",
                        vi: "--",
                        "zh-Hant": "密碼修改成功"
                    },
                    enterNewPassword: {
                        zh: "请输入新密码",
                        en: "Enter new password",
                        vi: "--",
                        "zh-Hant": "請輸入新密碼"
                    },
                    passwordsNoMatch: {
                        zh: "两次输入密码不一致",
                        en: "These passwords don’t match",
                        vi: "--",
                        "zh-Hant": "兩次輸入密碼不壹致"
                    },
                    enterNewPasswordAgain: {
                        zh: "请再次输入新密码",
                        en: "Enter new password again",
                        vi: "--",
                        "zh-Hant": "請再次輸入新密碼"
                    },
                    oldPasswordNo: {
                        zh: "输入的原密码不正确",
                        en: "The old password entered is not correct",
                        vi: "--",
                        "zh-Hant": "輸入的原密碼不正確"
                    },
                    enterOldPassword: {
                        zh: "请输入原密码",
                        en: "Enter old password",
                        vi: "--",
                        "zh-Hant": "請輸入原密碼"
                    },
                    phoneNumSetSucc: {
                        zh: "手机号码修改成功",
                        en: "The phone number was modified successfully",
                        vi: "--",
                        "zh-Hant": "手機號碼修改成功"
                    },
                    verificationCodeNo: {
                        zh: "验证码不正确",
                        en: "The verification code is not correct",
                        vi: "--",
                        "zh-Hant": "驗證碼不正確"
                    },
                    phoneNumberExists: {
                        zh: "手机号码已存在",
                        en: "The phone number already exists",
                        vi: "--",
                        "zh-Hant": "手機號碼已存在"
                    },
                    phoneNumNo: {
                        zh: "手机号码格式不正确",
                        en: "Incorrect format of phone number",
                        vi: "--",
                        "zh-Hant": "手機號碼格式不正確"
                    },
                    enterNewPhoneNum: {
                        zh: "请输入新手机号码",
                        en: "Enter new phone number",
                        vi: "--",
                        "zh-Hant": "請輸入新手機號碼"
                    },
                    carousel: {
                        zh: "顶部轮播图",
                        en: "Carousel",
                        vi: "--",
                        "zh-Hant": "頂部輪播圖"
                    },
                    popUpWindow: {
                        zh: "弹窗图",
                        en: "Pop-up window",
                        vi: "--",
                        "zh-Hant": "彈窗圖"
                    },
                    tip8: {
                        zh: "对不起,目前仅支持png和jpg格式图片!",
                        en: "Sorry, currently only support PNG and JPG format pictures!",
                        vi: "--",
                        "zh-Hant": "對不起,目前僅支持png和jpg格式圖片!"
                    },
                    tip9: {
                        zh: "对不起，暂时不支持大于2M的文件，请压缩后再试!",
                        en: "Sorry, we do not support files larger than 2M, please try again after compression!",
                        vi: "--",
                        "zh-Hant": "對不起，暫時不支持大於2M的文件，請壓縮後再試!"
                    },
                    failModifyUsername: {
                        zh: "昵称修改失败",
                        en: "Fail to modify the username",
                        vi: "--",
                        "zh-Hant": "昵稱修改失敗"
                    },
                    error: {
                        zh: "错误提示",
                        en: "Error",
                        vi: "--",
                        "zh-Hant": "錯誤提示"
                    },
                    tip10: {
                        zh: "您已是高手，不能再修改头像",
                        en: "You already are a master, cannot modify the profile photo",
                        vi: "--",
                        "zh-Hant": "您已是高手，不能再修改頭像"
                    },
                    tip11: {
                        zh: "您已是高手，暂不能修改基本资料",
                        en: "You already are a master, cannot modify the profile photo",
                        vi: "--",
                        "zh-Hant": "您已是高手，暫不能修改基本資料"
                    },
                    bindNewEmailSucc: {
                        zh: "新邮箱绑定成功",
                        en: "successful to bind the email",
                        vi: "--",
                        "zh-Hant": "新郵箱邦定成功"
                    },
                    tip12: {
                        zh: "您上传的身份证照片审核被拒绝，请重新填写相关信息，被拒原因请查看系统消息。",
                        en: "The verification of your id photo was rejected. Please fill in the related information again and check the system reminder for the reason of rejection.",
                        vi: "--",
                        "zh-Hant": "您上傳的身份證照片審核被拒絕，請重新填寫相關信息，被拒原因請查看系統消息。"
                    },
                    verificationSucc_1: {
                        zh: " ",
                        en: "The ",
                        vi: "--",
                        "zh-Hant": " "
                    },
                    verificationSucc_2: {
                        zh: "认证信息提交成功",
                        en: " verification information was submitted successfully",
                        vi: "--",
                        "zh-Hant": "認證信息提交成功"
                    },
                    mainlandResidentIdentityCard: {
                        zh: "大陆居民身份证",
                        en: "Mainland resident identity card",
                        vi: "--",
                        "zh-Hant": "大六居民身份證"
                    },
                    gAPermit: {
                        zh: "港澳居民来往内地通行证",
                        en: "Mainland Travel Permit for Hong Kong and Macao Residents",
                        vi: "--",
                        "zh-Hant": "港澳居民來往內地通行證"
                    },
                    tPermit: {
                        zh: "台湾居民来往大陆通行证 ",
                        en: "Mainland travel permit for Taiwan residents",
                        vi: "--",
                        "zh-Hant": "臺灣居民來往大六通行證 "
                    },
                    passport: {
                        zh: "护照",
                        en: "Passport",
                        vi: "--",
                        "zh-Hant": "護照"
                    },
                    driverLicense: {
                        zh: "驾驶证",
                        en: "Driver’s license",
                        vi: "--",
                        "zh-Hant": "駕駛證"
                    },
                    iDCard: {
                        zh: "身份证",
                        en: "ID card",
                        vi: "--",
                        "zh-Hant": "身份證"
                    },
                    tip13: {
                        zh: "您的年龄未满18周岁，不建议您进行外汇交易。",
                        en: "You are under the age of 18 years old, foreign exchange transactions are not recommended.",
                        vi: "--",
                        "zh-Hant": "您的年齡未滿18周歲，不建議您進行外匯交易。"
                    },
                    idNumExists: {
                        zh: "身份证号已存在",
                        en: "ID number already exists",
                        vi: "--",
                        "zh-Hant": "身份證號已存在"
                    },
                    submitSuccess: {
                        zh: "提交成功",
                        en: "Submit successfully",
                        vi: "--",
                        "zh-Hant": "提交成功"
                    },
                    tip14: {
                        zh: "英文昵称为2-18位英文字母",
                        en: "Username can only contain 2-18 letters",
                        vi: "--",
                        "zh-Hant": "英文昵稱為2-18位英文字母"
                    }
                },
                date: {
                    zh: "日期",
                    en: "Date",
                    vi: "^^-^^",
                    "zh-Hant": "日期"
                },
                dateM: {
                    zh: "日期：",
                    en: "Date: ",
                    vi: "^^-^^",
                    "zh-Hant": "日期："
                },
                types: {
                    zh: "类型",
                    en: "Types",
                    vi: "^^-^^",
                    "zh-Hant": "類型"
                },
                amount: {
                    zh: "金额",
                    en: "Amount",
                    vi: "^^-^^",
                    "zh-Hant": "金額"
                },
                state: {
                    zh: "状态",
                    en: "State",
                    vi: "^^-^^",
                    "zh-Hant": "狀態"
                },
                balance: {
                    zh: "余额",
                    en: "Balance",
                    vi: "^^-^^",
                    "zh-Hant": "余額"
                },
                delete: {
                    zh: "删除",
                    en: "Delete",
                    vi: "^^-^^",
                    "zh-Hant": "刪除"
                },
                copy: {
                    zh: "复制",
                    en: "Follow",
                    vi: "^^-^^",
                    "zh-Hant": "復制"
                },
                noData: {
                    zh: "暂无数据！",
                    en: "No data!",
                    vi: "^^-^^",
                    "zh-Hant": "暫無數據！"
                },
                submit: {
                    zh: "提交",
                    en: "SUBMIT",
                    vi: "^^-^^",
                    "zh-Hant": "提交"
                },
                confirm: {
                    zh: "确定",
                    en: "Submit",
                    vi: "^^-^^",
                    "zh-Hant": "確定"
                },
                confirm2: {
                    zh: "确定",
                    en: "Confirm",
                    vi: "^^-^^",
                    "zh-Hant": "確定"
                },
                back: {
                    zh: "返回",
                    en: "Back",
                    vi: "^^-^^",
                    "zh-Hant": "返回"
                },
                edit: {
                    zh: "修改",
                    en: "Edit",
                    vi: "^^-^^",
                    "zh-Hant": "修改"
                },
                add: {
                    zh: "添加",
                    en: "Add",
                    vi: "^^-^^",
                    "zh-Hant": "添加"
                },
                cancel: {
                    zh: "取消",
                    en: "Cancel",
                    vi: "^^-^^",
                    "zh-Hant": "取消"
                },
                continue: {
                    zh: "继续",
                    en: "Continue",
                    vi: "^^-^^",
                    "zh-Hant": "繼續"
                },
                finish: {
                    zh: "完成",
                    en: "Confirm",
                    vi: "^^-^^",
                    "zh-Hant": "完成"
                },
                search: {
                    zh: "搜索",
                    en: "Search",
                    vi: "^^-^^",
                    "zh-Hant": "搜索"
                },
                pleaseSelect: {
                    zh: "请选择",
                    en: "Please select",
                    vi: "^^-^^",
                    "zh-Hant": "請選擇"
                },
                systemPrompt: {
                    zh: "系统提示",
                    en: "The system prompt",
                    vi: "^^-^^",
                    "zh-Hant": "系統提示"
                },
                systemPromptM: {
                    zh: "系统提示：",
                    en: "The system prompt: ",
                    vi: "^^-^^",
                    "zh-Hant": "系統提示："
                },
                pleaseWait: {
                    zh: "请稍等",
                    en: "Please wait",
                    vi: "^^-^^",
                    "zh-Hant": "請稍等"
                },
                yes: {
                    zh: "是",
                    en: "Yes",
                    vi: "^^-^^",
                    "zh-Hant": "是"
                },
                no: {
                    zh: "否",
                    en: "No",
                    vi: "^^-^^",
                    "zh-Hant": "否"
                },
                submitting: {
                    zh: "提交中",
                    en: "Submitting",
                    vi: "^^-^^",
                    "zh-Hant": "提交中"
                },
                name: {
                    zh: "姓名",
                    en: "Name",
                    vi: "^^-^^",
                    "zh-Hant": "姓名"
                },
                or: {
                    zh: "或",
                    en: "Or",
                    vi: "^^-^^",
                    "zh-Hant": "或"
                },
                revocation: {
                    zh: "撤销",
                    en: "Revocation",
                    vi: "^^-^^",
                    "zh-Hant": "撤銷"
                },
                select: {
                    zh: "选择",
                    en: "Confirm",
                    vi: "^^-^^",
                    "zh-Hant": "選擇"
                },
                audit: {
                    zh: "审核",
                    en: "Audit",
                    vi: "^^-^^",
                    "zh-Hant": "審核"
                },
                prompt: {
                    zh: "提示",
                    en: "Prompt",
                    vi: "^^-^^",
                    "zh-Hant": "提示"
                },
                dollars: {
                    zh: "美金",
                    en: "Dollars",
                    vi: "^^-^^",
                    "zh-Hant": "美金"
                },
                second: {
                    zh: "秒",
                    en: " Second",
                    vi: "^^-^^",
                    "zh-Hant": "秒"
                },
                weeks: {
                    zh: "周",
                    en: " weeks ",
                    vi: "^^-^^",
                    "zh-Hant": "周"
                },
                month: {
                    zh: "月",
                    en: " month",
                    vi: "^^-^^",
                    "zh-Hant": "月"
                },
                year: {
                    zh: "年",
                    en: " year",
                    vi: "^^-^^",
                    "zh-Hant": "年"
                },
                day: {
                    zh: "天",
                    en: " Day",
                    vi: "^^-^^",
                    "zh-Hant": "天"
                },
                hour: {
                    zh: "时",
                    en: " Hour",
                    vi: "^^-^^",
                    "zh-Hant": "時"
                },
                Ahour: {
                    zh: "小时",
                    en: " Hour",
                    vi: "^^-^^",
                    "zh-Hant": "小時"
                },
                minute: {
                    zh: "分",
                    en: " Minute",
                    vi: "^^-^^",
                    "zh-Hant": "分"
                },
                just: {
                    zh: "刚刚",
                    en: " just",
                    vi: "^^-^^",
                    "zh-Hant": "剛剛"
                },
                areaCode: {
                    zh: "区号",
                    en: "Area",
                    vi: "^^-^^",
                    "zh-Hant": "區號"
                },
                provinces: {
                    zh: "省份",
                    en: "Provinces",
                    vi: "^^-^^",
                    "zh-Hant": "省份"
                },
                city: {
                    zh: "城市",
                    en: "City",
                    vi: "^^-^^",
                    "zh-Hant": "城市"
                },
                unknownError: {
                    zh: "未知错误，请联系管理员",
                    en: "Unknown error, please contact administrator",
                    vi: "^^-^^",
                    "zh-Hant": "未知錯誤，請聯系管理員"
                },
                gender: {
                    zh: "性别",
                    en: "Gender",
                    vi: "^^-^^",
                    "zh-Hant": "性別"
                },
                query: {
                    zh: "查询",
                    en: "Query",
                    vi: "^^-^^",
                    "zh-Hant": "查詢"
                },
                loading: {
                    zh: "加载中",
                    en: "Loading",
                    vi: "^^-^^",
                    "zh-Hant": "加載中"
                },
                noRemember: {
                    zh: "暂无提醒！",
                    en: "No remember!",
                    vi: "^^-^^",
                    "zh-Hant": "暫無提醒！"
                },
                unfold: {
                    zh: "展开",
                    en: "Unfold",
                    vi: "^^-^^",
                    "zh-Hant": "展開"
                },
                fold: {
                    zh: "收起",
                    en: "Fold",
                    vi: "^^-^^",
                    "zh-Hant": "收起"
                },
                networkError: {
                    zh: "网络错误",
                    en: "Network error",
                    vi: "^^-^^",
                    "zh-Hant": "網酪錯誤"
                },
                signOut: {
                    zh: "退出登录",
                    en: "Sign out",
                    vi: "^^-^^",
                    "zh-Hant": "退出登錄"
                },
                type: {
                    zh: "类型",
                    en: "Type",
                    vi: "^^-^^",
                    "zh-Hant": "類型"
                },
                account: {
                    zh: "账号",
                    en: "account",
                    vi: "^^-^^",
                    "zh-Hant": "帳號"
                },
                male: {
                    zh: "男",
                    en: "Male",
                    vi: "^^-^^",
                    "zh-Hant": "男"
                },
                female: {
                    zh: "女",
                    en: "Female",
                    vi: "^^-^^",
                    "zh-Hant": "女"
                },
                ok: {
                    zh: "好的",
                    en: "Confirm",
                    vi: "^^-^^",
                    "zh-Hant": "好的"
                },
                default: {
                    zh: "默认",
                    en: "Default",
                    vi: "^^-^^",
                    "zh-Hant": "默認"
                },
                lot: {
                    zh: "手",
                    en: " lots",
                    vi: "^^-^^",
                    "zh-Hant": "手"
                },
                lot2: {
                    zh: "笔",
                    en: " orders",
                    vi: "^^-^^",
                    "zh-Hant": "筆"
                },
                next: {
                    zh: "下一页",
                    en: "Next",
                    vi: "^^-^^",
                    "zh-Hant": "下壹頁"
                },
                previous: {
                    zh: "上一页",
                    en: "Previous",
                    vi: "^^-^^",
                    "zh-Hant": "上壹頁"
                },
                download: {
                    zh: "下载",
                    en: "Download",
                    vi: "^^-^^",
                    "zh-Hant": "下載"
                },
                getCodeAgain: {
                    zh: "获取语音验证码",
                    en: "Get code again",
                    vi: "^^-^^",
                    "zh-Hant": "獲取語音驗證碼"
                },
                getVoiceCodeAgain: {
                    zh: "再次获取语音",
                    en: "Get voice code again",
                    vi: "^^-^^",
                    "zh-Hant": "再次獲取語音"
                },
                january: {
                    zh: "一月",
                    en: "January",
                    vi: "^^-^^",
                    "zh-Hant": "壹月"
                },
                february: {
                    zh: "二月",
                    en: "February",
                    vi: "^^-^^",
                    "zh-Hant": "二月"
                },
                march: {
                    zh: "三月",
                    en: "March",
                    vi: "^^-^^",
                    "zh-Hant": "三月"
                },
                april: {
                    zh: "四月",
                    en: "April",
                    vi: "^^-^^",
                    "zh-Hant": "四月"
                },
                may: {
                    zh: "五月",
                    en: "May",
                    vi: "^^-^^",
                    "zh-Hant": "五月"
                },
                june: {
                    zh: "六月",
                    en: "June",
                    vi: "^^-^^",
                    "zh-Hant": "六月"
                },
                july: {
                    zh: "七月",
                    en: "July",
                    vi: "^^-^^",
                    "zh-Hant": "七月"
                },
                august: {
                    zh: "八月",
                    en: "August",
                    vi: "^^-^^",
                    "zh-Hant": "八月"
                },
                september: {
                    zh: "九月",
                    en: "September",
                    vi: "^^-^^",
                    "zh-Hant": "九月"
                },
                october: {
                    zh: "十月",
                    en: "October",
                    vi: "^^-^^",
                    "zh-Hant": "十月"
                },
                november: {
                    zh: "十一月",
                    en: "November",
                    vi: "^^-^^",
                    "zh-Hant": "十壹月"
                },
                december: {
                    zh: "十二月",
                    en: "December",
                    vi: "^^-^^",
                    "zh-Hant": "十二月"
                }
            },
        };

        return data;
    }
})();