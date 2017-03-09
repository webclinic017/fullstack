if ($(".m_vue").attr("data-page") === "faq") {
    console.log(ismobile());

    var bindingApp = new Vue({
        el: '#m_vue_faq',
        methods: {
            toStatePage: function (type, page) {
                var action_address = window.location.origin + "/m/wap/faq/" + type
                console.info(action_address);
                if (isInTiger()) {
                    callNative({
                        type: "openUrl",
                        url: action_address
                    });
                } else {
                    window.location.href = action_address;
                }
            }
        }
    });
}
