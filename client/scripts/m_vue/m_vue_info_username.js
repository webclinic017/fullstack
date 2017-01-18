if ($(".m_vue").attr("data-page") === "info_username") {
    var phoneApp = new Vue({
        el: '#m_vue_info_username',
        data: {
            frontErr: {
                username: {
                    show: false
                }
            }
            , backErr: {
                username: {
                    show: false,
                    status: '',
                    tip: ''
                }
            }
            , step: 1
            , clickable: {
                submit: true
            }
            , username: ''
        },

        created: function () {

        },
        ready: function () {
            var self = this;
        },
        methods: {
            submitInfoForm: function () {
                var self = this;
                self.$validate(true, function () {
                    if (!self.$checkUsername.invalid) {
                        self.clickable.submit = false;
                        apiUrlResource.set_username.save({
                            username: self.username
                        }).then(function (response) {
                            self.clickable.submit = false;
                            var data = typeof response.data === 'object' ? response.data : JSON.parse(response.data)
                            if (data.is_succ) {
                                layer.open({
                                    content: '提交成功！',
                                    skin: 'msg',
                                    time: 2 //2秒后自动关闭
                                });
                                self.clickable.submit = true;
                                //告诉app更新username
                                callNative({
                                    type: "change_name",
                                    name: self.username
                                });
                            } else {
                                self.backErr.username.show = true;
                                self.backErr.username.status = -1;
                                self.backErr.username.tip = data.error_msg;

                                setTimeout(function () {
                                    self.backErr.username = {
                                        show: false,
                                        tip: '',
                                        status: null
                                    };
                                    self.clickable.submit = true;
                                }, 2000);
                            }
                        }, function (error) {
                            self.clickable.submit = true;
                            console.log(error);
                            alert("请求失败");
                        });
                    }
                });

            },
            back_setting: function () {
                callNative({
                    type: "back_setting",
                    url: ""
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
