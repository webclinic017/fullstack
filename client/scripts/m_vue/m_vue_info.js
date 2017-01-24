if ($(".m_vue").attr("data-page") === "info") {

    var passwordApp = new Vue({
        el: '#m_vue_info',
        data: {
            settingInfo: {
                username: '',
                location: {
                    state_name: '',
                    city_name: ''
                },
                avatar: ''
            }
        },
        ready: function () {
            var self = this;

            apiUrlResource.getSettingInfo.get().then(function (response) {
                var data = JSON.parse(response.data);
                // console.info(data);
                if (data.is_succ) {
                    self.settingInfo.username = data.data.username;
                    self.settingInfo.location = {
                        state_name: data.data.region.state_name,
                        city_name: data.data.region.city_name
                    };
                    self.settingInfo.avatar = '/avatar/' + data.data.user_code + '_150.jpg?timestamp=' + new Date().getTime();
                }
            }, function (error) {
                console.info(error);
            });
        },
        methods: {
            toStatePage: function (page) {
                var action_address = window.location.origin + "/m/wap/info_" + page + "/index";
                var type = 'openUrl';
                if (page == 'avatar') {
                    type = 'uploadAvatar';
                }
                callNative({
                    type: type,
                    url: action_address
                });
            }
        }
    });
}
