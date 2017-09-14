;(function () {

    $('.bd_t38_detail').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t38_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['600px', '475px'],
            content: $('.bd_t38_detail_con.c-1').html()
        });
    });
    $('.bd_t38_detail-2').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t38_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['600px', '400px'],
            content: $('.bd_t38_detail_con.c-2').html()
        });
    });
    $('.bd_t38_detail-3').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t38_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['600px', '320px'],
            content: $('.bd_t38_detail_con.c-3').html()
        });
    });
})();