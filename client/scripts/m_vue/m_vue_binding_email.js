if ($(".m_vue").attr("data-page") === "binding_email") {

    var bindingApp = new Vue({
        el: '.m_vue_binding_email',
        data: {
            clickable: {
                submit: true
            },
            code: {
                old: '',
                new: ''
            },
            frontErr: {
                code: {
                    show: false,
                    msg: ''
                }
            },
            backErr: {
                show: false,
                msg: ''
            }
        },
        methods: {
            sendCode: function (arg) {
                var self = this;
                console.info(arg);
                if (arg === 'old') self.clickable.submit = false;
                apiUrlResource.sendEmailCode.save().then(function (response) {
                    self.clickable.submit = true;
                    var data = typeof response.data === 'object' ? response.data : JSON.parse(response.data);
                    console.info(data);
                    if (data.is_succ) {

                        if (arg === 'old') {
                            var action_address = window.location.origin + "/m/wap/binding_email/old_code?email=" + self.oldEmail;
                            console.info(action_address);
                            callNative({
                                type: "openUrl",
                                url: action_address
                            }); 
                        }

                        if (arg === 're_old') {
                            layer.open({
                                content: '发送成功',
                                skin: 'msg',
                                time: 2 //2秒后自动关闭
                            });
                        }                    
                    } else {
                        if (arg === 'old') {
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
                        if (arg === 're_old') {
                            layer.open({
                                content: data.error_msg,
                                skin: 'msg',
                                time: 2 //2秒后自动关闭
                            });
                        }
                    }
                }, function (error) {
                    self.clickable.submit = true;
                    console.log(error);
                    alert("请求失败");
                });
            },
            checkCode: function () {
                var self = this;

                self.$validate(true,function () {
                    /*如果所有条件都是false*/
                    if(!self.$validatorMethod.invalid){
                        self.clickable.submit = false;
                        apiUrlResource.checkEmailCode.save({code: self.code.old}).then(function (response) {
                            self.clickable.submit = true;
                            var data = response.data;
                            if (data.is_succ) {
                                var action_address = window.location.origin + "/m/wap/binding_email/new";
                                console.info(action_address);
                                callNative({
                                    type: "openUrl",
                                    url: action_address
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
                        self.showFrontErr('code');
                    }
                });
                
            },
            getUrlParam: function (name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                var r = window.location.search.substr(1).match(reg);  //匹配目标参数
                if (r != null) return unescape(r[2]); return null; //返回参数值
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
            oldEmail: function () {
                return this.getUrlParam('email');
            }
        }
    });

}
