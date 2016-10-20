;(function($){
    'use strict';

    function get_dom(oTarget,id_arr){
        for(var i=0; i<id_arr.length; i++){
            oTarget[id_arr[i]] = $("#"+id_arr[i])
        }
    }

    var DOM = {};
    var id_arr = ["send_invitation","share_to_friends","share_to_circle"];
    get_dom(DOM,id_arr);

    DOM.send_invitation.on("touchend",function(){
        //页面层
        layer.open({
            type: 1
            ,content: '<div class="share02_modal"><h5>分享好友投资,即获$20奖励</h5><span class="share_to_friends" id="share_to_friends">分享给微信好友</span><span class="share_to_circle" id="share_to_circle">分享到朋友圈</span></div>'
            ,anim: 'up'
            ,style: 'position:fixed; bottom:0; left:0; width: 100%; height: 200px; padding:10px 0; border:none;'
        });
    });

    //发送到微信好友
    DOM.share_to_friends.on("touchend",function(){
        //todo
    });

    //发送到朋友圈
    DOM.share_to_circle.on("touchend",function(){
        //todo
    });
}(jQuery));