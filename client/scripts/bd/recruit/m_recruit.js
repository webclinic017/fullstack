;(function (){

    var content = {};
    var loading = false;

	$(document).on("tap", ".m_recruit_download a", function () {
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

    $(document).on("tap", ".m_recruit_info_btn .btn", function () {
        if (loading) return;
        content = {};
        var $content = $(".m_recruit_info_form [data-sign]");
        var success = true;

        $.each($content, function (idnex, value) {

            content[$(value).attr("name")] = $(value).val();
        });

        for (name in content) {
            if ((name !== 'address') && !content[name]) {
                success = false;
            }
        }
        console.log(content, success);

        if (success) {
            loading = true;

            publicRequest('recruitMaster', 'POST', content).then(function (data) {
                // console.log(data);
                loading = false;
                if (data.is_succ) {
                    if (isInTiger()) {
                        var action_address = window.location.origin + '/bd/recruit_master/complete';
                        // console.info(action_address);
                        callNative({
                            type: "openUrlOnce",
                            url: action_address
                        });
                    } else {
                        window.location.href = '/bd/recruit_master/complete';
                    }
                } else {
                    alert(data.message);
                }
            });
            
        } else {
            alert("请将信息填写完整!");
        }

        return false;
    });
})();