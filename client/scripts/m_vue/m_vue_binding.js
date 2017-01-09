if ($(".m_vue").attr("data-page") === "binding") {

    var bindingApp = new Vue({
        el: '#m_vue_binding',
        data: {
            settingInfo: {
                phone: '',
                email: ''
            }
        }
    });

}
