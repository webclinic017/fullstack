;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .factory('validator', validator);
    validator.$inject = ['lang'];
    function validator(lang) {
        var regType = {
            idNumber: {
                tip: lang.text("tigerWitID.tip.tip1"), // 身份证号为 15 或 18 位数字，最后一位为字母时用大写 X
                reg: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/
            },

            // phone: {
            //     tip: lang.text("tigerWitID.tip.tip2"), //手机号码为 1 开头的 11 位数字
            //     reg: /^1\d{10}$/
            // },
            // 为匹配国际手机号，前端不做限制
            phone: {
                tip: lang.text("actLogin16"), //请输入正确的手机号
                reg: /^[0-9]*$/
            },

            amount: {
                tip: lang.text("tigerWitID.tip.tip3"), // 输入的金额为大于零的整数或者小数（小数点后最多两位数字）
                reg: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
            },

            dbcs: {
                tip: lang.text("tigerWitID.tip.doubleByteCharacter"), // 包括汉字双字节字符
                reg: /[^\x00-\xff]/g,
                pattern: '[^\\x00-\\xff]'
            },

            email: {
                // tip: lang.text("tigerWitID.tip.tip4"),// 邮箱前缀由字母、数字、下划线、减号、点号组成，以字母、数字结尾
                tip: lang.text("tigerWitID.login.enterCorrectEmail"),// 请填写正确的邮箱
                reg: /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            },

            username: {
                tip: lang.text("tigerWitID.tip.tip5"), // 昵称包含2-16个字符，支持中英文、数字
                reg: /^[\u4e00-\u9fa5A-Za-z0-9]{2,16}$/
            },
            username_en: {
                tip: lang.text("tigerWitID.settings.tip14"),
                reg: /^[a-z_A-Z0-9-\./]+$/
            },

            school: {
                tip: lang.text("tigerWitID.tip.tip6"),// 学校名称包含 4-20 个字符，由汉字、字母组成，超过字符限制的用简称代替
                reg: /^[\u4e00-\u9fa5A-Za-z]+$/
            },

            // realname: {
            //     tip: lang.text("tigerWitID.tip.tip7"),// 真实姓名由2-20个汉字以及 · 号组成
            //     reg: /^([\u4e00-\u9fa5]{2,20}|[\u4e00-\u9fa5]{1,10}·[\u4e00-\u9fa5]{1,10})$/
            // },

            // 为匹配国际，前端不做限制
            realname: {
                tip: lang.text("tigerWitID.myAccount.fillName"),// 请输入真实姓名
                reg: /(^\s*)|(\s*$)/,    // 不能为空
            },

            bankCardNumber: {
                tip: lang.text("tigerWitID.tip.tip8"),// 银行卡卡号为 12-19 位数字
                reg: /^\d{12,19}$/
            },

            password: {
                tip: lang.text("tigerWitID.tip.tip9"),// 密码由字母、数字和符号两种及以上组合，长度为 6-15个字符
                // reg: /^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,20}$/
            },

            'zh-cn': {
                tip: lang.text("tigerWitID.tip.simplifiedChinese"),// 简体中文
                reg: /[\u4e00-\u9fa5]/,
                pattern: '[\\u4e00-\\u9fa5]'
            },

            en: {
                tip: lang.text("tigerWitID.tip.pleaseEnterEnglish"),// 请输入英文
                reg: /a-zA-Z/
            },

            symbol: {
                tip: lang.text("tigerWitID.tip.legalSymbol"),// 合法的符号
                reg: /[!@#$%^&*()_+]/
            }
        };

        var service = {
            regType: regType,
            isValidTxt: isValidTxt,
            isValidPwd: isValidPwd
        };
        return service;


        /**
         * @name isValidTxt
         * @desc 验证输入的文本是否有效
         * @param {String} type 类型（如：username）根据类型确定正则
         * @param {String} inputStr 输入文本
         * @param {Number} minLen maxLen 最小长度和最大长度
         */
        function isValidTxt(type, inputStr, minLen, maxLen) {
            var length,
                reg,
                dbcsReg,
                invalidMsg = '';

            reg = regType[type].reg;
            dbcsReg = regType.dbcs.reg;

            if (!reg.test(inputStr)) {
                invalidMsg = lang.text("tigerWitID.tip.containsIllegalChar");// 包含非法字符
                return false;
            }

            length = inputStr.replace(dbcsReg, '**').length;


            if (length < minLen || length > maxLen) {
                invalidMsg = lang.text("tigerWitID.tip.tip10");// 字符数不符合要求
                return false;
            }

            if (invalidMsg === '') {
                return true;
            }
        }

        function isValidPwd(string) {
            var invalidMsg = '',
                counter = 0;

            if (!/^[a-zA-Z0-9`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]{6,15}$/.test(string)) {
                invalidMsg = lang.text("tigerWitID.tip.tip11");// 位数不正确或者包含非法字符
            }

            if (string.search(/\d/) !== -1) {
                counter++;
            }

            if(string.search(/[`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]/) !== 1){
                counter++;
            }

            if (string.search(/[a-zA-Z]/) !== -1) {
                counter++;
            }

            if (counter < 2) {
                invalidMsg = lang.text("tigerWitID.tip.passwordWeak");// 密码强度过弱
            }

            if (invalidMsg === '') {
                return true;
            } else {
                return false;
            }
        }
    }
})();
