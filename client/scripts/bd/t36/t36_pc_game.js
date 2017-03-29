; (function () {
    $(function () {
        var layerId = null;
        $('#start_game').on('mousedown', function (e) {
            $(e.target).addClass('active');
        });
        $('#start_game').on('mouseup', function (e) {
            $(e.target).removeClass('active');
        });
        $('.showCode').on('click', function (e) {
            layerId = layer.open({
                type: 1,
                shade: false,
                closeBtn: 0,
                title: false,
                content: $('.layer_content').html(),
                style:"background:rgba(0,0,0,0)"
            });
            $('.layui-layer').css({
                'box-shadow':'none',
                'background':'rgba(0,0,0,0)'
            })
            $('.close_layer').click(function(){
                layer.closeAll();
            });
        });
    })
}());