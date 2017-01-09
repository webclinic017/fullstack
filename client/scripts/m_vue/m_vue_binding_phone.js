if ($(".m_vue").attr("data-page") === "binding_phone") {

    var phoneApp = new Vue({
        el: '#m_vue_binding_phone',
        data: {
            phone: '',
            code: '',
            token: '',
            frontErr: {
                phone: {
                    show: false,
                    msg: ''
                },
                code: {
                    show: false,
                    msg: ''
                }
            },
            backErr: {
                show: false,
                msg: '',
                code:{
                    show:false,
                    msg:''
                }
            },
            clickable: {
                submit: true,
                code: true
            },
            codeBtn_msg:'发送验证码'
        },
        //生成token
        ready: function () {
            var self = this;
            //生成token
            apiUrlResource.set_token.save().then(function () {
                self.token = $.cookie('tiger_token')
            });
        },
        methods: {
            getCode: function () {
                var self = this;
                self.$validate('phone', function () {
                    if (!self.$checkTel.phone.phoneErr) {
                        self.clickable.code = false;
                        apiUrlResource.getCode.save({
                            phone: self.phone,
                            token: self.token
                        }).then(function (response) {
                            var data = JSON.parse(response.data);

                            if (data.is_succ) {
                                layer.open({
                                    content: '验证码已发送',
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                                //倒计时
                                var count = 59;
                                self.codeTimer = setInterval(function(){
                                    self.codeBtn_msg = count + 's';
                                    count --;
                                    if(count == 0){
                                        clearInterval(self.codeTimer);
                                        self.clickable.code = true;
                                        self.codeBtn_msg = '重新获取'
                                    }
                                },1000);

                            } else {
                                self.clickable.code = true;
                                self.backErr = {
                                    show: true,
                                    msg: data.error_msg
                                };

                                setTimeout(function () {
                                    self.backErr = {
                                        show: false,
                                        msg: ''
                                    };
                                }, 3000);
                            }
                        }, function (error) {
                            self.clickable.code = true;
                            console.log(error);
                            alert("请求失败");
                        });
                    } else {
                        self.showFrontErr('phone');
                    }
                });
            },
            submitMethod: function () {
                var self = this;
                self.$validate(true, function () {
                    if (!self.$checkTel.invalid) {
                        apiUrlResource.changeTelBind.save({
                            phone: self.phone,
                            phone_code: self.code
                        }).then(function (response) {
                            self.clickable.submit = false;
                            var data = response.data;
                            if (data.is_succ) {
                                layer.open({
                                    content: '提交成功！',
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                            } else {

                                self.backErr.show = {
                                    show: true,
                                    msg: data.error_msg
                                };

                                if (data.error_code === 2) {
                                    self.backErr.msg = '请输入正确的手机号码';
                                }

                                if (data.error_code === 3 || data.error_code === 1) {
                                    self.backErr.msg = '验证码错误';
                                }

                                if (data.error_code === 4) {
                                    self.backErr.msg = '不能绑定别人的手机号码'
                                }

                                self.clickable.submit = true;

                                setTimeout(function () {
                                    self.backErr = {
                                        show: false,
                                        msg: ''
                                    };
                                }, 3000);
                            }
                        }, function (error) {
                            self.clickable.submit = true;
                            console.log(error);
                            alert("请求失败");
                        });
                    } else {
                        self.showFrontErr('phone');
                        self.showFrontErr('code');
                    }
                });
            },
            showFrontErr: function (name) {
                var self = this;
                if (self.frontErr[name]) {
                    self.frontErr[name]["show"] = true;
                }
            },
            hideFrontErr: function (name) {
                var self = this;

                if (self.frontErr[name]) {
                    self.frontErr[name]["show"] = false;
                }
            }
        },
    });

}
