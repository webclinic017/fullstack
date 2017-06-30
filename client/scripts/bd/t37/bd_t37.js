;(function () {
    var $detail = $(".bd_t37_detail");

    $detail.on('click', function () {
        layer.open({
            type: 1,
            skin: 'bd_t37_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['800px', '575px'],
            content: ''
        });
    });

    $('.bd_t38_detail').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t38_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['600px', '475px'],
            content: $('.bd_t38_detail_con').html()
        });
    });
})();