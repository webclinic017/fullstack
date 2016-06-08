;
(function () {
    'use strict';

    angular.module('fullstackApp').factory('langData', langData);

    langData.$inject = [];

    function langData () {
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
            "login8": {"en": "SSL login is adopted in TigerWit and data transmission is safe.", "zh": "您在老虎金融登录采用 SSL 登录方式数据传输安全"},
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
            "register18": {"en": "Registered?", "zh": "已有账户？"},
            "register19": {"en": "Log in now", "zh": "立即登录"},
        };

        return data;
    }
})();