if ($(".m_vue").attr("data-page") === "binding") {

    var bindingApp = new Vue({
        el: '#m_vue_binding',
        data: {
            settingInfo: {
                phone: '',
                email: ''
            }
        },
        ready: function () {
            var self = this;

            dealApiUrlResource("getSettingInfoApi", "GET").then(function (data) {
                if (!data) return;
                if (data.is_succ) {
                    self.settingInfo.phone = data.data.phone;
                    self.settingInfo.email = data.data.email;
                }
            });
            // apiUrlResource.getSettingInfo.get({type: 'Profile'}).then(function (response) {
            //     var data = JSON.parse(response.data);
            //     // console.info(data);
            //     if (data.is_succ) {
            //         self.settingInfo.phone = data.data.phone;
            //         self.settingInfo.email = data.data.email;
            //     }
            // }, function (error) {
            //     console.info(error);
            // });
        },
        methods: {
            toStatePage: function (type, page) {
                if (page === 'old') {
                    var action_address = window.location.origin + "/m/wap/binding_" + type + "/" + page + '?email=' + this.settingInfo.email;
                } else {
                    var action_address = window.location.origin + "/m/wap/binding_" + type + "/" + page;
                }
                console.info(action_address);
                window.location.href = action_address;
                callNative({
                    type: "openUrl",
                    url: action_address
                });
            }
        },
        computed: {
            page: function () {
                return this.settingInfo.email ? 'old' : 'new';
            }
        }
    });

}
