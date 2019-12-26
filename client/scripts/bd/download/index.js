;
(function () {
    if (isWX()) {
        layer.open({
            type: 1,
            shadeClose: true,
            closeBtn: 0,
            resize: false,
            title: false,
            skin: 'wx__sensing',
            content: '<div class="layui-m-layer-wx__sensing-con"><img src="/white_label/download/sensing.png" alt=""><p>请用浏览器打开页面下载</p></div>'
        });
    }
}())