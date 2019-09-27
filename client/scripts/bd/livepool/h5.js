;(function () {
    $(".rulesBtn").on('click',function(){

        layer.open({
            type: 1,
            skin: "livepool",
            content: $('#rulesCon').html()
    });
    })
    
})();