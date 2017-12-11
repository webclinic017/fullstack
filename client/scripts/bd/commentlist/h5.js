;(function () {

    var $content = $(".m_commentlist");
    var $load = $(".m_commentlist_load span");
    var $detailsBtn = $(".m_commentlist__btn a");
    var comment_list = {
        comment_list: []
    };
    var page = 1;
    var limit = 10;

    $(".m_commentlist_load .load_btn").on("tap", function () {
        getCommentList();
        return false;
    });

    $(document).on("tap", ".m_commentlist__btn a", function () {
        if (isInTiger()) {
            var action_address = window.location.origin + $(this).attr("href");
            // console.info(action_address);
            callNative({
                type: "openUrl",
                url: action_address
            });
            return false;
        }
    });

    getCommentList();
    function getCommentList() {
        $load.removeClass("active");
        $(".m_commentlist_load .load").addClass("active");
        var offet = (page - 1)*limit;
        publicRequest('getCommentList', 'GET', {
            offset: offet,
            limit: limit
        }).then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                page++;
                comment_list = {
                    comment_list: comment_list.comment_list.concat(data.data.records)
                };
                insertComment();
                $load.removeClass("active");

                if (page > data.data.page_count) {
                    $(".m_commentlist_load .load_end").addClass("active");
                } else {
                    $(".m_commentlist_load .load_btn").addClass("active");
                }
            }
        });
    }

    function insertComment () {
        //使用template模版
        var html=baidu.template('template_comment_list',comment_list);
        //渲染
        $content.html(html);
    }
    
})();