;(function () {
    // console.log(pageView);
    var $title = $(".m_comment .m_comment__title");
    var $date = $(".m_comment .m_comment__date .date");
    var $author = $(".m_comment .m_comment__date .author");
    var $content = $(".m_comment .m_comment__content");
    var $visit = $(".m_comment .m_comment__read .num");
    var $focus = $(".m_comment .m_comment__focus");

    var visit, info;
    var pageData = {};
    var symbols;

    getSymbols();
    getCommentDetails();
    function getCommentDetails () {
        publicRequest('getCommentDetails', 'GET', {comment_id: pageView.id}).then(function (data) {
            // console.log(pageView);
            if (data.is_succ) {
                pageData = data.data;
                visit = Number(pageView.num)+Number(pageData.visit);

                $title.html(pageData.main_title);
                $date.html(pageData.issue_date);
                $author.html(pageData.analyst);
                $visit.html(visit);

                if (pageData.banner_image) {
                    $focus.addClass("active");
                    $focus.find("img").attr("src", pageData.banner_image);
                }

                insertComment();
            }
            
        });
    }

    function getSymbols () {
        publicRequest('getSymbols', 'GET').then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                symbols = data.data;
            }
        });
    }

    function insertComment () {
        $.each(pageData.comment_field, function (index, value) {
            value.image && (value.image = JSON.parse(value.image));
        });
        //使用template模版
        var html=baidu.template('template_comment_list',pageData);
        //渲染
        $content.html(html);
    }

    $content.on("tap", ".btn", function () {
        var action = $(this).attr("data-action");
        info = pageData.comment_field[action];
        // console.log(action, info);
        var symbolInfo = info.symbol; 
        var buySell = info.buy_sell == 0 ? '买入' : '卖出';

        $.each(symbols, function (index, value) {
            $.each(value, function (index2, value2) {
                if (info.symbol == index2) {
                    symbolInfo = value2+' ('+index2+')';
                }
            });
        });

        $(".m_comment_modal .symbol .info").html(symbolInfo);
        $(".m_comment_modal .buy_sell .info").html(buySell);
        $(".m_comment_modal .price .info").html(info.price);

        info.sl ? $(".m_comment_modal .sl").removeClass("none") && $(".m_comment_modal .sl .info").html(info.sl) : $(".m_comment_modal .sl").addClass("none");
        info.tp ? $(".m_comment_modal .tp").removeClass("none") && $(".m_comment_modal .tp .info").html(info.tp) : $(".m_comment_modal .tp").addClass("none");
        (info.expiration && info.expiration.indexOf('1970-01-01') == -1) ? $(".m_comment_modal .expiration").removeClass("none") && $(".m_comment_modal .expiration .info").html(info.expiration) : $(".m_comment_modal .expiration").addClass("none");

        layer.open({
            shadeClose: true,
            content: $("#m_comment_trade_modal").html(),
            skin: "comment"
        });

        return false;
    });

    $(".m_comment__content").on('tap', 'img', function () {
        // console.log($(this).attr("src"));
        callNative({
            type: "openImage",
            url : $(this).attr("src")
        });
        return false;
    });

    /*操作弹窗*/
    $(document).on("tap", ".layui-m-layer-comment .m_comment_modal .title span", function () {
        layer.closeAll();
        return false;
    });
    $(document).on("tap", ".layui-m-layer-comment .m_comment_modal .volume .volume_num .b", function () {
        
        var val = $(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val();
        if (val > 0.01) {
            val = (val - 0.01).toFixed(2);
            $(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val(val);
        }

        return false;
    });
    $(document).on("tap", ".layui-m-layer-comment .m_comment_modal .volume .volume_num .a", function () {
        
        var val = $(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val();
        if (val < 50) {
            val = (Number(val) + 0.01).toFixed(2);
            $(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val(val);
        }

        return false;
    });
    $(document).on("blur", ".layui-m-layer-comment .m_comment_modal .volume .volume_num input", function () {
        
        var val = $(this).val();
        if (val > 50) {
            $(this).val(50);
        }
        return false;
    });
    $(document).on("tap", ".layui-m-layer-comment .m_comment_modal .submit_btn", function () {
        
        $(".layui-m-layer-comment .m_comment_modal .btn_box span").removeClass("active");
        $(".layui-m-layer-comment .m_comment_modal .btn_box .loading_btn").addClass("active");

        // 计算截止时间
        var sDate = info.expiration;
        var cTime = 0;

        if (sDate && sDate.indexOf('1970-01-01') == -1) {
            var nTime = new Date().getTime();
            var sTime = new Date(sDate).getTime();
            cTime = parseInt((sTime - nTime)/1000);
        }
        var params = {};

        publicRequest('getRealQuote', 'GET', {
            symbol: info.symbol
        }).then(function (data) {
            if (data.is_succ) {
                if (info.buy_sell == 0) {   // 买入
                    if (info.price < data.data.ask) {
                        params.cmd = 2;     // buy limit
                    } else {
                        params.cmd = 4;     // buy stop
                    }
                }
                if (info.buy_sell == 1) {   // 卖出
                    if (info.price > data.data.bid) {
                        params.cmd = 3;     // sell limit
                    } else {
                        params.cmd = 5;     // sell stop
                    }
                }
                params.symbol = info.symbol;
                params.volume = $(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val();
                params.pending_price = info.price;
                info.tp && (params.tp = info.tp);
                info.sl && (params.sl = info.sl);
                (cTime && cTime > 0) && (params.expiration_time = cTime);
                // console.log(sDate, cTime, params);

                publicRequest('setPendingTrade', 'POST', params).then(function (data) {
                    // console.log(data);
                    if (data.is_succ) {
                        $(".layui-m-layer-comment .m_comment_modal .btn_box span").removeClass("active");
                        $(".layui-m-layer-comment .m_comment_modal .btn_box .record_btn").addClass("active");

                        $(".layui-m-layer-comment .m_comment_modal .title h4").html("挂单成功");
                        $(".layui-m-layer-comment .m_comment_modal .volume .volume_num").removeClass("active");
                        $(".layui-m-layer-comment .m_comment_modal .volume .info").html($(".layui-m-layer-comment .m_comment_modal .volume .volume_num input").val());
                        $(".layui-m-layer-comment .m_comment_modal .volume .info").addClass("active");
                    } else {
                        layer.closeAll();
                        layer.open({
                            skin: 'msg',
                            content: data.message,
                            time: 3
                        });
                    }
                });
            } else {
                layer.closeAll();
                layer.open({
                    skin: 'msg',
                    content: data.message,
                    time: 3
                });
            }
            
        });

        return false;
    });
    $(document).on("tap", ".layui-m-layer-comment .m_comment_modal .record_btn", function () {
        
        callNative({
            type: "back_pending_record"
        });
        return false;
    });

    // share
    if (!isInTiger()) {
        $(".share02_main__send_btn").css("display", "none");
    }
    var id_arr = [
        "send_invitation",
        "share_to_friends",
        "share_to_circle",
        "share_to_qFriend",
        "share_to_microBlog",
        "share_to_fb",
        "share_to_twitter",
        "share_to_linkin",
        "share_to_tumblr",
        "cancel_share",
        "share02_box",
        "get_award",
        "share_tel",
        "share02_modal"
    ];
    var layIndex;
    function nativeShare(type) {
        var callConfig = {
            type: type,
            title: '每日汇评',
            description: pageData.main_title || 'TigerWit 每日汇评，分析师李彭专栏',
            url: window.location.href
        };
        if (!isInTiger()) {
            console.log("当前不是APP环境");
        } else {
            callNative(callConfig);
        }
    }
    $(document).on('tap', '#send_invitation', function (e) {
        console.log(pageData.main_title);
        layIndex = layer.open({
            type: 1, 
            content: $('#share02_box').html(),
            anim: 'up',
            style: 'position:fixed; bottom:0; left:0; width: 100%; height: 350px; padding:10px 0; border:none;'
        });
        return false;
    });
    $(document).on('touchend', '.share02_modal', function (e) {
        var id = $(e.target).parent('span').attr('id');
        var type = undefined;
        if (id == id_arr[1]) {
            type = "wechat_friend";
        }
        else if (id == id_arr[2]) {
            type = "wechat_circle";
        }
        else if (id == id_arr[3]) {
            type = "qq";
        }
        else if (id == id_arr[4]) {
            type = "weibo";
        }
        // else if (id == id_arr[5]) {
        //     type = "facebook";
        // } 
        else if (id == id_arr[6]) {
            type = "twitter";
        } 
        else if (id == id_arr[7]) {
            type = "linkin";
        } 
        else if (id == id_arr[8]) {
            type = "tumblr";
        } 
        else if (id == id_arr[9]) {
            layer.close(layIndex);
            return false;
        } else {
            return false;
        }
        nativeShare(type);
        layer.close(layIndex);
    });
})();