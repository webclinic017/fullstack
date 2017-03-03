if ($(".m_vue").attr("data-page") === "forget") {
    var phoneApp = new Vue({
        el: '#m_vue_forget',
        data: {
            step: 2,
            clickable: {
                submit: true
            },
            language: 'zh',
            bindData: {
                phone: '',
                code: '',
                pwdNew: '',
                pwdConfirm: ''
            },
            countDown: {
                show: false,
                noClick: false,
                message: ''
            },
            frontErr: {
                phone: {
                    show: false,
                    msg: ''
                },
                code: {
                    show: false,
                    msg: ''
                },
                pwdNew: {
                    show: false,
                    msg: ''
                },
                pwdConfirm: {
                    show: false,
                    msg: ''
                }
            },
            backErr: {
                show: false,
                msg: ''
            }
        },
        ready: function () {
            var self = this;

            if (getCookie('lang') === 'zh') {
                self.language = 'zh';
                self.countDown.message = '获取验证码';
            }
            if (getCookie('lang') === 'en') {
                self.language = 'en';
                self.countDown.message = 'Obtain verification code';
            }

            function getCookie (name) { 
                var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
             
                if(arr=document.cookie.match(reg)) {
                    return unescape(arr[2]);
                } else {
                    return null;
                }
            }
        },
        validators: {
            pwdConfirm:function (val,result) {
                return result;
            }
        },
        methods: {
            getCode: function (arg) {
                var self = this;
                self.$validate(true, function () {
                    // console.log(self.$validatorStep1.invalid);
                    // console.log(self.$validatorStep2.invalid);
                    if (arg === 'once') {
                       if (self.$validatorStep1.invalid) {
                            self.showFrontErr('phone');
                        } else {
                            self.clickable.submit = false;
                            self.sendCode('once');
                        }
                    }
                    if (arg === 'repeat') {
                        if (self.countDown.noClick) return;
                        self.sendCode('repeat');
                    }
                });
            },
            sendCode: function (arg) {
                var self = this;

                apiUrlResource.getVerifyCode.save({
                    phone: self.bindData.phone,
                    type: "pwd"
                }).then(function (response) {
                    self.clickable.submit = true;
                    var data = JSON.parse(response.data);
                    if (data.is_succ) {
                        if (arg === 'once') {
                            self.step++;
                        }
                        if (arg === 'repeat') {
                            self.countDown.show = true;
                            self.countDown.noClick = true;
                            var cont;
                            if (self.language === 'zh') {
                                cont = '发送成功';
                            }
                            if (self.language === 'en') {
                                cont = 'send successfully';
                            }
                            layer.open({
                                content: cont,
                                skin: 'msg',
                                time: 2 //2秒后自动关闭
                            });
                        }
                    } else {
                        layer.open({
                            content: data.error_msg,
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });
                    }
                }, function (err) {
                    self.clickable.submit = true;
                    console.log(error);
                    alert("请求失败");
                });
            },
            checkCode: function () {
                var self = this;
                self.$validate(true, function () {
                    // console.log(self.$validatorStep1.invalid);
                    // console.log(self.$validatorStep2.invalid);
                    if (self.$validatorStep2.invalid) {
                        self.showFrontErr('code');
                        self.showFrontErr('pwdNew');
                        self.showFrontErr('pwdConfirm');
                    } else {
                        self.clickable.submit = false;
                        apiUrlResource.checkCode.save({
                            phone: self.bindData.phone,
                            verify_code: self.bindData.code
                        }).then(function (response) {
                            var data = JSON.parse(response.data);
                            if (data.is_succ) {
                                self.setNewPassword();
                            } else {
                                self.clickable.submit = true;
                                layer.open({
                                    content: data.error_msg,
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                            }
                        }, function (err) {
                            self.clickable.submit = true;
                            console.log(error);
                            alert("请求失败");
                        });
                    }
                });
            },
            setNewPassword: function () {
                var self = this;
                apiUrlResource.setNewPassword.save({
                    phone: self.bindData.phone,
                    code: self.bindData.code,
                    new_pwd: self.bindData.pwdNew
                }).then(function (response) {
                    self.clickable.submit = true;
                    var data = JSON.parse(response.data);
                    if (data.is_succ) {
                        self.step++;
                    } else {
                        layer.open({
                            content: data.error_msg,
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });
                    }
                }, function (err) {
                    self.clickable.submit = true;
                    console.log(error);
                    alert("请求失败");
                });
            },
            toLogin: function () {
                callNative({
                    type: "login"
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
        computed: {
            pwdConfirm: function () {
                // console.info(this.password.pwdNew, this.password.pwdConfirm);
                return this.bindData.pwdNew === this.bindData.pwdConfirm;
            }
        }
    });
}
