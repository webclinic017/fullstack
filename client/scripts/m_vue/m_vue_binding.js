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

            apiUrlResource.getSettingInfo.get({type: 'Profile'}).then(function (response) {
                var data = JSON.parse(response.data);
                // console.info(data);
                if (data.is_succ) {
                    self.settingInfo.phone = data.data.phone;
                    self.settingInfo.email = data.data.email;
                }
            }, function (error) {
                console.info(error);
            });
        },
        methods: {
            toStatePage: function (type, page) {
                var action_address = window.location.origin + "/m/wap/binding_" + type + "/" + page;
                console.info(action_address);
                callNative({
                    type: "openUrl",
                    url: action_address
                });
            }
        }
    });

}