;
(function () {
    $(function () {
        $('.alertor').click(function (e) {
            // var show = $(e.target).attr("data-show");
            console.log(123)
            layer.closeAll()
            layer.open({
                type: 1,
                skin: 'bd_fx168_layer',
                title: '',
                closeBtn: 0,
                shadeClose: true,
                shade: 0.5,
                // area: ['60'],
                content: $('.bd_fx168_detail_con').html()
            });

            return false
        })
    })
}())