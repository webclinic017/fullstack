if ($(".m_vue").attr("data-page") === "password") {

    var bindingApp = new Vue({
        el: '#m_vue_password',
        data: {
            
        },
        methods: {
            toStatePage: function (page) {
                var action_address = window.location.origin + "/m/wap/password_" + page + "/index";
                console.info(action_address);
                callNative({
                    type: "openUrl",
                    url: action_address
                });
            }
        }
    });

}
