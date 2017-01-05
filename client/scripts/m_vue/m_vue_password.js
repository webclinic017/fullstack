var passwordApp = new Vue({
    el: '#m_vue_password',
    data: {
        username: "",
        password: ""
    },
    validators: {
        username: function (val) {
            return /^[A-Za-z0-9_\-\u4e00-\u9fa5]{1,10}$/.test(val);
        },
        integer: function (val) {
            return /^[1-9]\d*$/.test(val);
        }
    },
    methods:{
        loginMethods: function () {
            var self = this;
            /**
             * 验证[username]表单元素。
             */
            self.$validate(true,function () {
                /*如果所有条件都是false*/
                if(!self.$validatorMethod.username.username && !self.$validatorMethod.password.integer){
                    alert("登录成功");
                }
            })
        }
    }
});