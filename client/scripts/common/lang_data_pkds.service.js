;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData_pkds', langData_pkds);

    langData_pkds.$inject = [];

    function langData_pkds () {
        var data = {
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
            "login1": {"en": "Mobile No. /MT4 account No./e-mail", "zh": "手机号码/MT4账号/电子邮箱"},
            "login2": {"en": "Please enter your account No.", "zh": "请输入账号"},
            "login3": {"en": "xx", "zh": "账号格式不正确"},
            "login4": {"en": "xx", "zh": "账号尚未注册"},
            "login5": {"en": "Please enter your password", "zh": "请输入密码"},
            "login6": {"en": "Log in automatically next time", "zh": "下次自动登陆"},
            "login7": {"en": "Forgot password", "zh": "忘记密码"},
            "login8": {"en": "SSL login is adopted in parkerdawson and data transmission is safe.", "zh": "您在派克道森登录采用 SSL 登录方式数据传输安全"},
            "login9": {"en": "Login", "zh": "登 录"},
            "login10": {"en": "Register", "zh": "注 册"},
            "login11": {"en": "Login...", "zh": "登录中"},
            "login12": {"en": "Login too much, please try again after 5 minutes", "zh": "登录次数过多，请 5 分钟后重试"},
            "login13": {"en": "account No. or password is wrong", "zh": "用户名或者密码错误"},

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
            "register20": {"en": "Register now to receive $100", "zh": "立即注册 领取$100"},
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
            "TradingHistory11": {"en": "en", "zh": "zh"}
        };

        return data;
    }
})();