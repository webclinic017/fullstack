; (function () {
    $(function () {
        // 微信分享配置
        if (wx) {
            wxShareConfig({
                title: '王者归来，荣耀操盘 老虎外汇送大礼',
                subTitle: '王者归来，荣耀操盘 老虎外汇再送最高1000元美金红包和电竞专用手柄',
                shareLink: window.location.href,
                desc: '参与此活动最高1000元美金红包及手机电竞游戏专用手柄',
                img: window.location.origin + '/activity/logo.png',
                trackPage: window.location.pathname.replace(/\//gi, ''),
                debug: false
            });
        } else {
            console.log("微信配置错误");
        }

        var isInTigerApp = false;
        var isLogined = false;
        var recevieStatus = false;
        var bagList = {
            data: []
        };

        if (isInTiger()) {
            isInTigerApp = true;
            $(".btn-3").css("display", "none");

            publicRequest('checkLogined', 'GET').then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    isLogined = true;

                    getRedBagPool();
                    checkHonorStatus();
                } else {
                    initBagList();
                    insertTemp();
                }
            });
        } else {
            initBagList();
            insertTemp();
        }

        $(document).on('tap', '.btn-1.not_recevie', function () {
            // console.log(isInTigerApp);
            if (isInTigerApp) {
                if (isLogined) {
                    var id = $(this).attr("data-id");
                    var amount = $(this).attr("data-amount");
                    layer.open({
                        content: '本活动红包仅可4选1，确定选择'+amount+'美元红包吗？'
                        ,btn: ['确定', '取消']
                        ,yes: function(index){
                            layer.closeAll();
                            layer.open({type: 2,shadeClose: false});
                            publicRequest('receiveRedbag', 'PUT', {
                                id: id
                            }).then(function (data) {
                                // console.log(data);
                                layer.closeAll();
                                if (data.is_succ) {
                                    layer.open({
                                        content: '恭喜你已成功领取'+amount+'美元红包，赶紧去完成条件兑换把！',
                                        skin: 'msg',
                                        time: 2 //2秒后自动关闭
                                    });

                                    setTimeout(function () {
                                        window.location.reload();
                                    }, 1500);
                                } else {
                                    layer.open({
                                        content: data.message,
                                        skin: 'msg',
                                        time: 2 //2秒后自动关闭
                                    });
                                }
                            });
                        }
                    });
                } else {
                    layer.open({
                        content: '请先登录',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            } else {
                toOpenApp();
            }
            return false;
        });

        $(document).on('tap', '.btn-2.not_recevie', function () {
            // console.log(isInTigerApp);
            if (isInTigerApp) {
                if (isLogined) {
                    var status = $(".btn-2").attr("data-status");

                    if (status == 0) {
                        layer.open({type: 2,shadeClose: false});
                        // 领取
                        publicRequest('receiveHonor', 'POST').then(function (data) {
                            // console.log(data);
                            layer.closeAll();
                            if (data.is_succ) {
                                window.location.reload();
                            } else {
                                layer.open({
                                    content: data.message,
                                    skin: 'msg',
                                    time: 4
                                });
                            }
                        });
                    } else if (status == 2) {
                        // 兑换
                        layer.open({
                            type: 1,
                            content: '<div class="layer-adress-wrapper clearfix"><input class="layer-adress" placeholder="请输入收货地址"><span class="layer-adress-btn">提交</span></div>',
                            anim: 'up',
                            style: 'position:fixed; bottom:0; left:0; width: 100%; height: 30px; padding:20px 0; border:none;'
                        });
                    }
                } else {
                    layer.open({
                        content: '请先登录',
                        skin: 'msg',
                        time: 2 //2秒后自动关闭
                    });
                }
            } else {
                toOpenApp();
            }
            return false;
        });

        $(document).on('tap', '.layer-adress-btn', function () {
            var address = $(".layer-adress").val();

            if (address) {
                layer.closeAll();
                layer.open({type: 2,shadeClose: false});
                publicRequest('exchangeHonor', 'POST', {
                    address: address
                }).then(function (data) {
                    // console.log(data);
                    layer.closeAll();
                    if (data.is_succ) {
                        layer.open({
                            content: '官方将尽快为您邮寄奖品，请保持手机畅通。',
                            skin: 'msg',
                            time: 2 //2秒后自动关闭
                        });

                        setTimeout(function () {
                            window.location.reload();
                        }, 1500);
                        
                    } else {
                        layer.open({
                            content: data.message,
                            skin: 'msg',
                            time: 4
                        });
                    }
                });
            } else {
                layer.open({
                    content: '请输入收货地址',
                    skin: 'msg',
                    time: 2 //2秒后自动关闭
                });
            }
            
            return false;
        });
        
        $(document).on('tap', '.btn-3', function () {
            // console.log(isInTigerApp);
            if (!isInTigerApp) {
                toOpenApp();
            }
            return false;
        });

        function getRedBagPool () {
            publicRequest('getRedBagPool', 'GET', {
                offset: 0,
                limit: 1000,
                group: 'honorBag'
            }).then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    $.each(data.data.records, function (index, value) {
                        value.front_desc_fir = doDesc(value.pay_condition_desc).r1;
                        value.front_desc_sec = doDesc(value.pay_condition_desc).r2;
                        value.front_recevie_status = "立即领取";

                        if (value.is_receive == 1) {
                            value.front_recevie_status = "已领取";
                            recevieStatus = true;
                        }
                    });
                    bagList.data = data.data.records;
                    insertTemp();
                }
            });
        }

        function checkHonorStatus () {
            publicRequest('checkHonorStatus', 'GET').then(function (data) {
                // console.log(data);
                if (data.is_succ) {
                    if (data.data.status == 0) {
                        // 未领取
                        $(".btn-2").attr("data-status", 0);
                    } else if (data.data.status == 1) {
                        // 已领取
                        $(".btn-2").removeClass("not_recevie");
                        $(".btn-2").addClass("is_recevie");
                        $(".btn-2").html("已领取");
                        $(".btn-2").attr("data-status", 1);
                    } else if (data.data.status == 2) {
                        // 可兑换
                        $(".btn-2").html("立即兑换");
                        $(".btn-2").attr("data-status", 2);
                    } else if (data.data.status == 3) {
                        // 已兑换
                        $(".btn-2").removeClass("not_recevie");
                        $(".btn-2").addClass("is_recevie");
                        $(".btn-2").html("已兑换");
                        $(".btn-2").attr("data-status", 3);
                    } else if (data.data.status == 4) {
                        // 已失效
                        $(".btn-2").removeClass("not_recevie");
                        $(".btn-2").addClass("is_recevie");
                        $(".btn-2").html("已失效");
                        $(".btn-2").attr("data-status", 4);
                    }
                } else {
                    console.log(data.message);
                }
            });
        }

        function doDesc (desc) {
            var str = desc.split('(')[0];
            return {
                r1: str.split('，')[0],
                r2: str.split('，')[1]
            };
        }

        function toOpenApp () {
            // console.log(window.location);
            var o;
            if (window.location.origin.indexOf("www.tigerwit.com") != -1) {
                o = "www.tigerwit.com/bd/honor";
            } else {
                o = "demo.tigerwit.com/bd/honor";
            }
            openInApp(o);
        }

        function initBagList () {
            bagList.data = [
                {
                    amount: 1000,
                    front_desc_fir: "完成180手交易",
                    front_desc_sec: "兑换期限120天",
                    front_recevie_status: "立即领取"
                },
                {
                    amount: 500,
                    front_desc_fir: "完成90手交易",
                    front_desc_sec: "兑换期限120天",
                    front_recevie_status: "立即领取"
                },
                {
                    amount: 200,
                    front_desc_fir: "完成40手交易",
                    front_desc_sec: "兑换期限60天",
                    front_recevie_status: "立即领取"
                },
                {
                    amount: 100,
                    front_desc_fir: "完成25手交易",
                    front_desc_sec: "兑换期限60天",
                    front_recevie_status: "立即领取"
                }
            ];
        }

        function insertTemp () {
            //使用template模版
            var html=baidu.template('template_bag_list',bagList);
            //渲染
            $(".bag_list").html(html);

            if (recevieStatus) {
                $(".btn-1").removeClass("not_recevie");
                $(".btn-1").addClass("is_recevie");
            } else {
                $(".btn-1").removeClass("is_recevie");
                $(".btn-1").addClass("not_recevie");
            }
        }
    })
}())