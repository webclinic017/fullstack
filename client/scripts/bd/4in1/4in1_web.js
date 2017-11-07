;
(function () {
    $(function () {
        $('#show_details').click(function () {
            layer.open({
                type: 1,
                skin: 'bd_4in1_layer',
                title: '',
                closeBtn: 0,
                shadeClose: true,
                shade: 0.5,
                area: ['600px', '400px'],
                content: $('.bd_4in1_detail_con.c-1').html()
            });
        })
    })

    $('.bd_4in1__main-btn').click(function(){
        $('.bd_4in1').animate({scrollTop: '200px'}, 'normal', 'swing')
        $('#telephone').focus()
    })
}())