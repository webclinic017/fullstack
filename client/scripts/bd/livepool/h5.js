; (function () {
    $(".rulesBtn").on('click', function () {
        layer.open({
            type: 1,
            skin: "livepool",
            content: $('#rulesCon').html()
        });
    })
    $("body").on('click', '.closed', function(){
        layer.closeAll()
    })
})();