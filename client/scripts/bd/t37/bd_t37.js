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

    // $('.bd_t37').ripples({
    //     resolution: 512,
    //     dropRadius: 20,
    //     perturbance: 0.01,
    // });
})();