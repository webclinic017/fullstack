;(function () {

    $('.bd_t36_detail').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t36_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['800px', '475px'],
            content: $('.bd_t36_detail_con.c-1').html()
        });
    });
    $('.bd_t36_detail-2').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t36_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['800px', '500px'],
            content: $('.bd_t36_detail_con.c-2').html()
        });
    });
    $('.bd_t36_detail-3').click(function(){
        layer.open({
            type: 1,
            skin: 'bd_t36_layer',
            title: '',
            closeBtn: 0,
            shadeClose: true,
            shade: 0.5,
            area: ['800px', '420px'],
            content: $('.bd_t36_detail_con.c-3').html()
        });
    });
})();