;(function (){

    var content = {};
    var loading = false;
    var regExp = {
        id_no: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        phone: /^\d{11}$/,
        email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    };

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
            //校验正则
            if (!regExp.id_no.test(content.id_no)) {
                alert('身份证号码填写有误');
                return false;
            }
            if (!regExp.phone.test(content.phone)) {
                alert('手机号码填写有误');
                return false;
            }
            if (!regExp.email.test(content.email)) {
                alert('邮箱填写有误');
                return false;
            }

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