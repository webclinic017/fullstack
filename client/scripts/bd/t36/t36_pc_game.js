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
                shade: true,
                closeBtn: 0,
                title: false,
                content: $('.layer_content').html(),
                style: "background:rgba(0,0,0,0.65)"
            });
            $('.t36_pc_layout').css({
                '-webkit-filter': 'blur(10px)',
                'filter': 'blur(10px)'
            })
            $('.layui-layer-shade').css({
                'background': 'rgba(0,0,0,0.5)'
            })
            $('.layui-layer').css({
                'box-shadow': 'none',
                'background': 'rgba(0,0,0,0)'
            })
            $('.close_layer').click(function () {
                layer.closeAll();
                $('.t36_pc_layout').css({
                    '-webkit-filter': 'blur(0px)',
                    'filter': 'blur(0px)'
                })
            });
        });

        // 获取中奖列表
        $.ajax({
            url: '/action/public/wx/winning_lists',
            type: 'get',
            success: function (data) {
                var res = JSON.parse(data);
                if (res.is_succ == true) {
                    var list = {
                        list: res.data
                    };
                    /*模板引擎*/
                    baidu.template.LEFT_DELIMITER = '<$';
                    baidu.template.RIGHT_DELIMITER = '$>';
                    var list_str = baidu.template('award_table', list);
                    $("#award_list").html(list_str);

                    if(res.data.length >= 1){
                        $('.matters').css({
                        top: 1900 + (res.data.length - 1) * 40 + 'px'
                    })
                    }
                }
            },
        })
    })
}());