;
(function () {
    $(function () {
        $('.show-rule-btn').click(function (e) {
            var show = $(e.target).attr("data-show");
            layer.closeAll()
            layer.open({
                type: 1,
                skin: 'bd_tele_layer',
                title: '',
                closeBtn: 0,
                shadeClose: true,
                shade: 0,
                area: ['600px', '350px'],
                content: $('.bd_tele_detail_con.' + show).html()
            });
        })
    })
}())