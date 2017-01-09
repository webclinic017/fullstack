if ($(".m_vue").attr("data-page") === "phone") {

    var phoneApp = new Vue({
        el: '#m_vue_phone',
        data: {
            phone: '',
            code: '',
            frontErr: {
                phone: {
                    show: false,
                    msg: ''
                },
            },
            backErr: {
                show: false,
                msg: ''
            },
            clickable:{
                submit:true
            }
        },
        methods: {
            loginMethods: function () {
                var self = this;

                self.$validate(true, function () {
                    /*如果所有条件都是false*/
                    if (!self.$validatorMethod.invalid) {
                        self.clickable.submit = false;
                        // var test = self.$resource('/action/public/v4/change_password');

                        apiUrlResource.changePwd.save({
                            origin_pwd: self.password.pwdOld,
                            new_pwd: self.password.pwdNew
                        }).then(function (response) {
                            self.clickable.submit = true;
                            var data = JSON.parse(response.data);

                            if (data.is_succ) {
                                layer.open({
                                    content: '修改成功',
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                            } else {
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
                            self.clickable.submit = true;
                            console.log(error);
                            alert("请求失败");
                        });
                    } else {
                        self.showFrontErr('pwdOld');
                        self.showFrontErr('pwdNew');
                        self.showFrontErr('pwdConfirm');
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
