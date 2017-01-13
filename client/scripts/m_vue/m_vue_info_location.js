if ($(".m_vue").attr("data-page") === "info_location") {
    new Vue({
        el: '#m_vue_info_location',
        data: {
            location: {
                state: [],
                citys: [],
            }
            , province: ''
            , city: ''
            , frontErr: {
                state: {
                    show: true,
                },
                city: {
                    show: true
                }
            }
            , backErr: {
                show: false,
                msg: ''
            }
            , step: 1
            , clickable: {
                submit: true
            }
        },

        created: function () {
            var self = this;
            apiUrlResource.get_province.get().then(function (response) {
                //  var data = response.data;
                var data = JSON.parse(response.data)
                if (data.is_succ) {
                    self.location.state = data.data;
                }
            }, function (error) {
                console.error(error);
                alert("请求失败");
            });
        },
        methods: {
            getOriginList: function () {
                var self = this;
                apiUrlResource.get_citys.get({
                    parent_code: self.province
                }).then(function (response) {
                    //  var data = response.data;
                    var data = JSON.parse(response.data)
                    if (data.is_succ) {
                        self.location.citys = data.data;
                    }
                }, function (error) {
                    console.error(error);
                    alert("请求失败");
                });
            },
            submitForm: function () {
                var self = this;
                self.$validate(true, function () {
                    if (!self.$checkLoca.invalid) {
                        self.clickable.submit = false;
                        apiUrlResource.set_region.save({
                            state_code: self.province,
                            city_code: self.city,
                            world_code: "CN"
                        }).then(function (response) {
                            self.clickable.submit = false;
                            var data = JSON.parse(response.data);
                            if (data.is_succ) {
                                // layer.open({
                                //     content: '提交成功！',
                                //     skin: 'msg',
                                //     time: 2 //2秒后自动关闭
                                // });
                                self.next()
                                self.clickable.submit = true;
                            } else {
                                self.backErr.show = true;
                                self.backErr.msg = data.error_msg;

                                setTimeout(function () {
                                    self.backErr = {
                                        show: false,
                                        msg: '',
                                    };
                                    self.clickable.submit = true;
                                }, 3000);
                            }
                        }, function (error) {
                            self.clickable.submit = true;
                            console.error(error);
                            alert("请求失败");
                        });
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
            },
            next:function(){
                this.step ++;
            }
        },
    });
}
