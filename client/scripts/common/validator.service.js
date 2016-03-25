;
(function () {
    'use strict';

    angular
        .module('fullstackApp')
        .factory('validator', validator);

    function validator() {
        var regType = {
            idNumber: {
                tip: '身份证号为 15 或 18 位数字，最后一位为字母时用大写 X',
                reg: /(^\d{15}$)|(^\d{17}([0-9]|X)$)/
            },

            phone: {
                tip: '手机号码为 1 开头的 11 位数字',
                reg: /^1\d{10}$/
            },

            amount: {
                tip: '输入的金额为大于零的整数或者小数（小数点后最多两位数字）',
                reg: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/
            },

            dbcs: {
                tip: '双字节字符', // 包括汉字
                reg: /[^\x00-\xff]/g,
                pattern: '[^\\x00-\\xff]'
            },

            email: {
                tip: '邮箱前缀由字母、数字、下划线、减号、点号组成，以字母、数字结尾',
                reg: /^\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            },

            username: {
                tip: '昵称包含 4-16 个字符，由汉字、字母、数字组成',
                reg: /^[\u4e00-\u9fa5A-Za-z\d]+$/
            },

            school: {
                tip: '学校名称包含 4-20 个字符，由汉字、字母组成，超过字符限制的用简称代替',
                reg: /^[\u4e00-\u9fa5A-Za-z]+$/
            },

            realname: {
                tip: '姓名由 2-20 个汉字以及 . 号组成',
                reg: /^[\u4e00-\u9fa5\.]{2,20}$/
            },

            bankCardNumber: {
                tip: '银行卡卡号为 12-19 位数字',
                reg: /^\d{12,19}$/
            },

            password: {
                tip: '密码长度为 6-15 位，由字母、数字组成且必须同时包含两者'
            },

            'zh-cn': {
                tip: '简体中文',
                reg: /[\u4e00-\u9fa5]/,
                pattern: '[\\u4e00-\\u9fa5]'
            },

            en: {
                tip: '请输入英文',
                reg: /a-zA-Z/
            },

            symbol: {
                tip: "合法的符号",
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
                invalidMsg = '包含非法字符';
                return false;
            }

            length = inputStr.replace(dbcsReg, '**').length;


            if (length < minLen || length > maxLen) {
                invalidMsg = '字符数不符合要求';
                return false;
            }

            if (invalidMsg === '') {
                return true;
            }
        }

        function isValidPwd(string) {
            var invalidMsg = '',
                counter = 0;

            if (!/^[a-zA-Z0-9]{6,15}$/.test(string)) {
                invalidMsg = '位数不正确或者包含非法字符';
            }

            if (string.search(/\d/) !== -1) {
                counter++;
            }

            if (string.search(/[a-zA-Z]/) !== -1) {
                counter++;
            }

            if (counter < 2) {
                invalidMsg = '密码强度过弱';
            }

            if (invalidMsg === '') {
                return true;
            } else {
                return false;
            }
        }
    }
})();
