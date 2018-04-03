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
                code: {
                    show: false,
                    msg: ''
                }
            },
            clickable: {
                getCode: true,
                submit: true,
                code: true
            },
            step: 1,
            codeBtn_msg: '重新获取',
            exsit: true,
        },
        //生成token
        ready: function () {
            var self = this;
            //生成token
            dealApiUrlResource("set_token", "POST").then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    self.token = $.cookie('code_token');
                }
            });
            // apiUrlResource.set_token.save().then(function () {
            //     self.token = $.cookie('tiger_token')
            // });
        },
        methods: {
            check_exsit: function () {
                var self = this;
                self.$validate('phone', function () {
                    if (!self.$checkTel.phone.phoneErr) { //指定通过校验的validator
                        dealApiUrlResource("check_exsit", "GET", {
                            key: 3,
                            value: self.phone
                        }).then(function (data) {
                            // console.log(data);
                            if (data.is_succ) {
                                if (data.data) {

                                    self.backErr = {
                                        show: true,
                                        msg: '此号码已存在！'
                                    }
                                    self.exsit = true;
                                    setTimeout(function () {
                                        self.backErr = {
                                            show: false,
                                            msg: ''
                                        };
                                    }, 3000);
                                } else {
                                    self.exsit = false;
                                    // self.getCode();
                                }
                            }
                        });
                        // apiUrlResource.check_exsit.get({
                        //     key: self.phone,
                        //     username: null
                        // }).then(function (response) {

                        //     var data = JSON.parse(response.data);

                        //     if (data.data) {

                        //         self.backErr = {
                        //             show: true,
                        //             msg: '此号码已存在！'
                        //         }
                        //         self.exsit = true;
                        //         setTimeout(function () {
                        //             self.backErr = {
                        //                 show: false,
                        //                 msg: ''
                        //             };
                        //         }, 3000);
                        //     } else {
                        //         self.exsit = false;
                        //         self.getCode();
                        //     }
                        // }, function (error) {
                        //     console.log(error);
                        //     alert("请求失败");
                        // });
                    } else {
                        self.showFrontErr('phone');
                    }
                });
            },

            getCode: function () {
                var self = this;
                //console.log(!self.$checkTel.phone.phoneErr);
                self.$validate('phone', function () {
                    if (!self.$checkTel.phone.phoneErr && !self.exsit) {
                        self.clickable.code = false;
                        dealApiUrlResource("getCodeApi", "POST", {
                            account: self.phone,
                            code_token: self.token,
                            type: 3,
                            account_type: 1
                        }).then(function (data) {
                            self.clickable.code = false;
                            if (data.is_succ) {

                                if (self.step == 1) {
                                    self.nextStep(2);
                                } else if (self.step == 2) {
                                    layer.open({
                                        content: '验证码已发送！',
                                        time: 2,
                                        skin:'msg'
                                    })
                                }
                                var count = 59;
                                self.codeTimer = setInterval(function () {
                                    self.codeBtn_msg = count + 's';
                                    count--;
                                    if (count == 0) {
                                        clearInterval(self.codeTimer);
                                        self.clickable.code = true;
                                        self.codeBtn_msg = '重新获取'
                                    }
                                }, 1000);

                            } else {
                                self.clickable.code = true;

                                self.backErr = {
                                    show: true,
                                    msg: data.message
                                };

                                setTimeout(function () {
                                    self.backErr = {
                                        show: false,
                                        msg: ''
                                    };
                                }, 3000);
                            }
                        });
                        // apiUrlResource.getCode.save({
                        //     phone: self.phone,
                        //     token: self.token
                        // }).then(function (response) {
                        //     var data = JSON.parse(response.data);
                        //     self.clickable.code = false;
                        //     if (data.is_succ) {

                        //         if (self.step == 1) {
                        //             self.nextStep(2);
                        //         } else if (self.step == 2) {
                        //             layer.open({
                        //                 content: '验证码已发送！',
                        //                 time: 2,
                        //                 skin:'msg'
                        //             })
                        //         }
                        //         var count = 59;
                        //         self.codeTimer = setInterval(function () {
                        //             self.codeBtn_msg = count + 's';
                        //             count--;
                        //             if (count == 0) {
                        //                 clearInterval(self.codeTimer);
                        //                 self.clickable.code = true;
                        //                 self.codeBtn_msg = '重新获取'
                        //             }
                        //         }, 1000);

                        //     } else {
                        //         self.clickable.code = true;

                        //         self.backErr = {
                        //             show: true,
                        //             msg: data.error_msg
                        //         };

                        //         setTimeout(function () {
                        //             self.backErr = {
                        //                 show: false,
                        //                 msg: ''
                        //             };
                        //         }, 3000);
                        //     }
                        // }, function (error) {
                        //     self.clickable.code = true;
                        //     console.log(error);
                        //     alert("请求失败");
                        // });
                    } else {
                        self.showFrontErr('phone');
                    }
                });
            },

            submitMethod: function () {
                var self = this;
                self.$validate(true, function () {
                    if (!self.$checkTel.invalid) {
                        self.clickable.submit = false;
                        dealApiUrlResource("changeTelBind", "PUT", {
                            phone: self.phone,
                            code: self.code
                        }).then(function (data) {
                            console.log(data);
                            if (!data) return;
                            if (data.is_succ) {
                                callNative({
                                    type: "hide_back"
                                });
                                self.nextStep(3);
                            } else {
                                self.backErr = {
                                    show: true,
                                    msg: data.message
                                };

                                self.clickable.submit = true;

                                setTimeout(function () {
                                    self.backErr = {
                                        show: false,
                                        msg: ''
                                    };
                                }, 3000);
                            }
                        });
                        // apiUrlResource.changeTelBind.save({
                        //     phone: self.phone,
                        //     phone_code: self.code
                        // }).then(function (response) {
                        //     var data = response.data;
                        //     if (data.is_succ) {
                        //         callNative({
                        //             type: "hide_back"
                        //         });
                        //         self.nextStep(3);
                        //     } else {

                        //         self.backErr.show = {
                        //             show: true,
                        //             msg: data.error_msg
                        //         };

                        //         if (data.error_code === 1) {
                        //             self.backErr.msg = '参数错误';
                        //         }

                        //         if (data.error_code === 2) {
                        //             self.backErr.msg = '请输入正确的手机号码';
                        //         }

                        //         if (data.error_code === 3) {
                        //             self.backErr.msg = '验证码错误';
                        //         }

                        //         if (data.error_code === 4) {
                        //             self.backErr.msg = '不能绑定别人的手机号码'
                        //         }

                        //         self.clickable.submit = true;

                        //         setTimeout(function () {
                        //             self.backErr = {
                        //                 show: false,
                        //                 msg: ''
                        //             };
                        //         }, 3000);
                        //     }
                        // }, function (error) {
                        //     self.clickable.submit = true;
                        //     console.log(error);
                        //     alert("请求失败");
                        // });
                    } else {
                        self.showFrontErr('phone');
                        self.showFrontErr('code');
                    }
                });
            },
            re_login:function(){
                callNative({
                    type: "back_personal_login"
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
            },
            nextStep: function (step) {
                this.step = step;
            }
        },
    });

}
