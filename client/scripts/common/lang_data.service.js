;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = ['$cookies'];

    function langData ($cookies) {
        var language = 'zh';
        var companyConfig = {
            companyNickName: "tigerwit",
            companyNameZh: "TigerWit",
            companyNameEn: "TigerWit",
            telephone: "400 - 809 - 8509",
            mt4Live: "TigerWit-Live",
            companyCopyRules: "https://www.tigerwit.com/web/copy/rules",
            webSite:"www.tigerwit.com",
        };
        
        angular.forEach($cookies, function (value, index) {

            if (index === 'lang') {
                // console.info(value, index);
                language = value === 'en' ? value : 'zh';

            }
            if (index === 'company_name') {
                if (value === 'lonfx') {
                    companyConfig = {
                        companyNickName: "lonfx",
                        companyNameZh: "莱恩",
                        companyNameEn: "lonfx",
                        telephone: "xxxx-xxx",
                        mt4Live: "TigerWit-Live",
                        companyCopyRules: "https://lonfx.tigerwit.com/web/copy/rules",
                        webSite:"lonfx.tigerwit.com",
                    };
                }
                if (value === 'pandafx') {
                    companyConfig = {
                        companyNickName: "pandafx",
                        companyNameZh: "熊猫外汇",
                        companyNameEn: "pandafx",
                        telephone: "xxxx-xxx",
                        mt4Live: "TigerWit-Live",
                        companyCopyRules: "https://pandafx.tigerwit.com/web/copy/rules",
                        webSite:"pandafx.tigerwit.com",
                    };
                }
                if (value === 'pkds') {
                    companyConfig = {
                        companyNickName: "pkds",
                        companyNameZh: "派克道森",
                        companyNameEn: "Pakerdawson",
                        telephone: "400 - 900 - 9296",
                        mt4Live: "Parkerdawson-Live",
                        companyCopyRules: "http://www.pkdsfx.com/web/copy/rules",
                        webSite:"www.pkdsfx.com",
                    };
                }
            } 
        });

        var data = {

            "companyCopyRules": {"zh": companyConfig.companyCopyRules, "en": companyConfig.companyCopyRules},
            "companyNameEn": {"zh":companyConfig.companyNameEn, "en": companyConfig.companyNameEn},
            "companyNameZh": {"zh":companyConfig.companyNameZh, "en": companyConfig.companyNameZh},
            "telephone": {"zh": companyConfig.telephone, "en": companyConfig.telephone},
            "mt4Live": {"zh": companyConfig.mt4Live, "en": companyConfig.mt4Live},
            "webSite": {"zh": companyConfig.webSite, "en": companyConfig.webSite},

            "company": companyConfig.companyNickName,
            "language": language,
            // 公用 public
            "lijifuzhi":{"en": "Copy now", "zh": "立即复制"},
            "fuzhi":{"zh": "复制", "en": "Copy"},
            "lijizhuce":{"en": "Register now", "zh": "立即注册"},
            "liaojiexiangqing": {"en": "Learn more", "zh": "了解详情"},
            "xuanzegaoshou": {"en": "Select a master", "zh": "选择高手"},
            "shouyilv": {"en": "yield rate", "zh": "收益率"},
            "zongshouyilv": {"en": "Total Return", "zh": "总收益率"},
            "fengxian": {"en": "risks", "zh": "风险"},
            "low": {"en": "low", "zh": "低"},
            "middle": {"en": "middle", "zh": "中"},
            "high": {"en": "high", "zh": "高"},
            "fuzhirenshu": {"en": "Copiers", "zh": "复制人数"},
            "lishifuzhirenshu": {"en": "Historical Copiers", "zh": "历史复制人数"},
            "zuidifuzhijine": {"en": "MIN copy", "zh": "最低复制金额"},
            "zoushitu": {"en": "Trend Chart", "zh": "走势图"},
            "zuidahuiche": {"en": "MAX drawdown", "zh": "最大回撤"},
            "waihui": {"en": "Foreign exchange", "zh": "外汇"},
            "guijinshu": {"en": "Precious metal", "zh": "贵金属"},
            "yuanyou": {"en": "Crude oil", "zh": "原油"},
            "faq": {"en": "FAQ", "zh": "常见问题"},
            "login": {"en": "Login", "zh": "登录"},
            "register": {"en": "Register", "zh": "注册"},
            "signout": {"en": "sign out", "zh": "退出"},
            "password": {"en": "Password", "zh": "密码"},
            "username": {"en": "Username", "zh": "昵称"},
            "phone": {"en": "Phone", "zh": "手机号码"},
            "email": {"en": "E-mail", "zh": "电子邮箱"},
            "verifycode": {"en": "Verification code", "zh": "验证码"},

            // 复制跟单 ranklist
            "rank1": {"en": "Ranking", "zh": "综合排名"},

            // 登录 login
            "login1": {"en": "Mobile No.", "zh": "手机号码"},
            "login2": {"en": "Please enter your account No.", "zh": "请输入账号"},
            "login3": {"en": "xx", "zh": "账号格式不正确"},
            "login4": {"en": "xx", "zh": "账号尚未注册"},
            "login5": {"en": "Please enter your password", "zh": "请输入密码"},
            "login6": {"en": "Log in automatically next time", "zh": "下次自动登陆"},
            "login7": {"en": "Forgot password", "zh": "忘记密码"},
            "login8": {"en": "SSL login is adopted in "+companyConfig.companyNameEn+" and data transmission is safe.", "zh": "您在"+companyConfig.companyNameZh+"登录采用 SSL 登录方式数据传输安全"},
            "login9": {"en": "Login", "zh": "登 录"},
            "login10": {"en": "Register", "zh": "注 册"},
            "login11": {"en": "Login...", "zh": "登录中"},
            "login12": {"en": "Login too much, please try again after 5 minutes", "zh": "登录次数过多，请 5 分钟后重试"},
            "login13": {"en": "account No. or password is wrong", "zh": "用户名或者密码错误"},
            "login14": {"en": "xx", "zh": "帐号已注销"},

            // 注册 register
            "register1": {"en": "Register an account", "zh": "注册账户"},
            "register2": {"en": "Real name certification", "zh": "实名认证"},
            "register3": {"en": "KYC authentication", "zh": "KYC 认证"},
            "register4": {"en": "Registration done", "zh": "完成注册"},
            "register5": {"en": "Confirm password", "zh": "确认密码"},
            "register6": {"en": "Obtain verification code", "zh": "获取验证码"},
            "register7": {"en": "Please enter username", "zh": "请输入昵称"},
            "register8": {"en": "Please enter your phone", "zh": "请输入手机号码"},
            "register9": {"en": "Please enter the verification code", "zh": "请输入验证码"},
            "register10": {"en": "Please enter your e-mail", "zh": "请输入电子邮箱"},
            "register11": {"en": "Please enter your password", "zh": "请输入密码"},
            "register12": {"en": "Please re-enter your password", "zh": "请再次输入密码"},
            "register13": {"en": "Registration means that you have agreed the relevant regulations", "zh": "注册即同意"},
            "register14": {"en": "Risk Disclosure Statement", "zh": "风险披露书"},
            "register15": {"en": "Declaration by Client", "zh": "客户声明"},
            "register16": {"en": "Trading Notes for Users", "zh": "用户交易须知"},
            "register17": {"en": "Register in 30s and open the journey to fortune", "zh": "30 秒注册 开启财富之旅"},
            "register20": {"en": "Register now to receive $200", "zh": "立即注册 领取$1000"},
            "register18": {"en": "Registered?", "zh": "已有账户？"},
            "register19": {"en": "Log in now", "zh": "立即登录"},

            // 复制跟单-数据统计 traderSummary
            "traderSummary1": {"en": "Summary", "zh": "交易概况"},
            "traderSummary2": {"en": "Accuracy", "zh": "准确率"},
            "traderSummary3": {"en": "Margin Cost", "zh": "最大保证金占用"},
            "traderSummary4": {"en": "Profit", "zh": "盈利订单"},
            "traderSummary5": {"en": "Lose", "zh": "亏损订单"},
            "traderSummary6": {"en": "Close Out", "zh": "平仓交易"},
            "traderSummary7": {"en": "Avg. Holding time", "zh": "平均持仓时间"},
            "traderSummary8": {"en": "Avg. Trades/Month", "zh": "月平均交易次数"},
            "traderSummary9": {"en": "Profitable/Month", "zh": "月回报率"},
            "traderSummary10": {"en": "Max Drawdown", "zh": "最大回撤"},
            "traderSummary11": {"en": "Largest Profit Spread", "zh": "最大盈利点差"},
            "traderSummary12": {"en": "Total Return", "zh": "总收益率"},
            "traderSummary13": {"en": "Trading Chart", "zh": "交易走势图"},
            "traderSummary14": {"en": "Main Symble", "zh": "主要交易品种"},
            "traderSummary15": {"en": "No Data", "zh": "无数据"},

            // 复制跟单-当前交易 HoldingTrades
            "HoldingTrades1": {"en": "Operation", "zh": "操作"},
            "HoldingTrades2": {"en": "Openning Price", "zh": "开仓价"},
            "HoldingTrades3": {"en": "Current Price", "zh": "现价"},
            "HoldingTrades4": {"en": "Holding Time", "zh": "持仓时间"},
            "HoldingTrades5": {"en": "Spread", "zh": "点数"},
            "HoldingTrades6": {"en": "Profit", "zh": "收益"},
            "HoldingTrades7": {"en": "Sell", "zh": "买跌"},
            "HoldingTrades8": {"en": "Buy", "zh": "买涨"},
            "HoldingTrades9": {"en": "No Data", "zh": "无数据"},
            "HoldingTrades10": {"en": "Note：Trades won't be shown here before 7 days.", "zh": "注：当前交易仅显示高手最近一周持仓订单"},
            "HoldingTrades11": {"en": "en", "zh": "zh"},
            
            // 复制跟单-历史交易 TradingHistory
            "TradingHistory1": {"en": "Operation", "zh": "操作"},
            "TradingHistory2": {"en": "Openning Price", "zh": "开仓价"},
            "TradingHistory3": {"en": "Closing Price", "zh": "平仓价"},
            "TradingHistory4": {"en": "Holding Time", "zh": "持仓时间"},
            "TradingHistory5": {"en": "Spread", "zh": "点数"},
            "TradingHistory6": {"en": "Profit", "zh": "收益"},
            "TradingHistory7": {"en": "Sell", "zh": "买跌"},
            "TradingHistory8": {"en": "Buy", "zh": "买涨"},
            "TradingHistory9": {"en": "No Data", "zh": "无数据"},
            "TradingHistory10": {"en": "ago", "zh": "前"},
            "TradingHistory11": {"en": "en", "zh": "zh"},

            // login 新版登录
            actLogin1: {zh: "快捷登录", en: "Fast Login"},
            actLogin2: {zh: "账号密码登录", en: "Password Login"},
            actLogin3: {zh: "请输入手机号码", en: "Please Type in the Phone Number"},
            actLogin4: {zh: "请输入验证码", en: "Verification Code"},
            actLogin5: {zh: "获取验证码", en: "Send SMS"},
            actLogin6: {zh: "后重新获取", en: "after resend"},
            actLogin7: {zh: "记住登录状态", en: "Remember login status"},
            actLogin8: {zh: "登录", en: "Login"},
            actLogin9: {zh: "未注册TigerWit的手机号，登录时将自动注册", en: "Logging in will turn to registration if the Phone Number hasn't been registered."},
            actLogin10: {zh: "提交代表您已阅读并同意", en: "I accept the"},
            actLogin11: {zh: "客户协议", en: "Client Agreement"},
            actLogin12: {zh: "风险披露声明", en: "Risk Disclosure"},
            actLogin13: {zh: "隐私政策", en: "Privacy Policy"},
            actLogin14: {zh: "法律声明", en: "Legal Notices"},
            actLogin15: {zh: "及其他", en: "and other"},
            actLogin16: {zh: "请输入正确的手机号码", en: "Please Type in the correct Phone Number"},
            actLogin17: {zh: "手机号", en: "Phone"},
            actLogin18: {zh: "校验码", en: "Verification Code"},
            actLogin19: {zh: "请填写完整信息", en: "Please Type in the complete information"},
            actLogin20: {zh: "设置密码", en: "Set Password"},
            actLogin21: {zh: "请输入密码", en: "Please Type in the Password"},
            actLogin22: {zh: "密码", en: "Password"},
            actLogin23: {zh: "请为您的账户设置密码，6-15位字母、数字或符号组合", en: "Please set a password for your account，6-15 bit of Letters, numbers, or combinations of symbols"},
            actLogin24: {zh: "请输入您的账号", en: "Please Type in the Phone Number"},
            actLogin25: {zh: "请输入您的账户密码", en: "Please Type in the Password"},
            actLogin26: {zh: "忘记密码", en: "Forget the Password?"},
            actLogin27: {zh: "*已使用SSL加密技术保护您的网络安全", en: "Secure your network with SSL encryption technology"},
            actLogin28: {zh: "找回密码", en: "Retrieve the password"},
            actLogin29: {zh: "下一步", en: "Next"},
            actLogin30: {zh: "完成修改", en: "Submit"},
            actLogin31: {zh: "新密码设置成功", en: "The new password is set up successfully"},
            actLogin32: {zh: "重新登录", en: "Re-register"},
            actLogin33: {zh: "完成注册", en: "Complete"},
            actLogin34: {zh: "跳过", en: "Jump Over"},
            actLogin35: {zh: "", en: ""},
            actLogin36: {zh: "", en: ""},
            actLogin37: {zh: "账号或手机号", en: "Account / Phone No"},
            actLogin38: {zh: "请输入您的账号或手机号", en: "Enter account / phone No"},
        };

        return data;
    }
})();