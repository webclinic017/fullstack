;
(function () {
    $(function () {
        $('.alertor').click(function (e) {
            layer.closeAll()
            layer.open({
                type: 1,
                skin: 'bd_fx168_layer',
                title: '',
                closeBtn: 0,
                shadeClose: true,
                shade: 0.5,
                area: ['700px', '600px'],
                content: $('.bd_fx168_detail_con').html()
            });
            $(window).resize(function(){
                $('.layui-layer.bd_fx168_layer').css("top", "20%")
            })
            setTimeout(function(){
                $('.layui-layer.bd_fx168_layer').css("top", "20%")
            }, 100)
            return false
        })
    })
}())