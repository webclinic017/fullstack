$(document).ready(function () {

    var isNext = false;
    var isNextInvest = false;
    var isNextWallet = false;
    // 提示信息
    var alert_msg = '操作失败，请稍后再试';
    // 英文版 提示信息 暂时都显示同一提示
    var alert_msg_en = 'Operation Failed，please contact the admin';
    // 交易帐户可提现金额
    var canWithdrawBalance = 0;
    // 零钱包可提现金额
    var canWithdrawBalanceWallet = 0;
    // 提现金额
    var widthdrawNum = 0;
    var canWithdrawNum = 0;
    // 持卡人真实姓名
    var realname;
    // 已经绑定过的银行卡id号，若未绑定过，id为'';
    var id;
    // 银行卡正则
    var bankCardNumber = {
        tip: '银行卡卡号为 12-19 位数字',
        reg: /^\d{12,19}$/
    };
    // 出金类型
    var widthdrawType = 'invest';   // invest 交易帐户, wallet 零钱包
    // baiduTemplate 模版 http://baidufe.github.io/BaiduTemplate/

    //可以设置输出变量是否自动HTML转义
    //bt.ESCAPE = false;

    //使用baidu.template命名空间
    var bt=baidu.template;
    bt.LEFT_DELIMITER = '<$';
    bt.RIGHT_DELIMITER = '$>';

    // 出金多个页面共用一个js文件，通过class为m_withdraw的data-page属性区分不同页面
    var dataAttr = $(".m_withdraw").attr("data-page");
    // console.info(dataAttr);

    // 获取url search参数方法
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }

    // getH5Config 方法是定义在window上的全局函数，用于获取一些公共的配置数据
    function getBanksInfo() {
        var banks = getH5Config().banks_new;
        return banks;
    }
    // 判断是不是英文版 nodeResponseInfo是node返回的信息 定义在m_asset.html中
    function isEngLanguage () {
        return nodeResponseInfo.language === 'en' ? true : false;
    }

    /*
     * page1
     * 填写出金金额，获取当前汇率、可提现金额
     */
    var $currentRate = $(".m_withdraw__home-rate span");
    var $isWithdrawBalanceInvest = $(".m_withdraw__home-msg.invest span");
    var $withdrawErrMsgInvest = $(".m_withdraw__home-msg.invest");
    var $isWithdrawBalanceWallet = $(".m_withdraw__home-msg.wallet span");
    var $withdrawErrMsgWallet = $(".m_withdraw__home-msg.wallet");
    var $toCardListBtn = $(".m_withdraw__home-btn .m_withdraw_btn");
    var $withdrawNum = $(".m_withdraw__home-info label .m_withdraw_num");
    var $withdrawAccount = $(".m_withdraw__home-type .withdraw_account");
    var $withdrawInvest = $(".m_withdraw__home-type .withdraw_tip.invest");
    var $withdrawWallet = $(".m_withdraw__home-type .withdraw_tip.wallet");

    if (dataAttr == "page1") {
        console.log("this is page1");
        getCurrentRate();
        getIsWithdraw();
        getIsWithdrawWallet();
        getAssetInfo();
        getWithdrawType();
    }
    // 获取当前资产
    function getAssetInfo () {
        publicRequest('getAssetInfo', 'GET').then(function (data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                $withdrawInvest.find("span").html(data.data.balance);
                $withdrawWallet.find("span").html(data.data.wallet_balance);
                $(".choose_type .choose_type__single.invest .tip span").html(data.data.balance);
                $(".choose_type .choose_type__single.wallet .tip span").html(data.data.wallet_balance);
            }
        });
    }
    // 获取当前出金类型
    function getWithdrawType () {
        widthdrawType = getUrlParam('withdraw_type') ? getUrlParam('withdraw_type') : 'invest';
        changeWithdrawType();
    }
    
    // 获取当前汇率
    function getCurrentRate () {
        $.get('/action/public/v4/get_parity').then(function (data) {
            // console.info(data);
            data = JSON.parse(data);
            var rate = Number(data.data.outparity).toFixed(4);
            $currentRate.html(rate);
        }, function (err) {
            console.info(err);
        });
    }
    // 获取出金状态 交易帐户
    function getIsWithdraw () {
        $.get('/action/public/v4/check_withdraw').then(function (data) {
            // console.info(data);
            data = JSON.parse(data);
            canWithdrawBalance = data.balance;

            if (data.is_succ) {
                isNextInvest = true;
                $isWithdrawBalanceInvest.html(canWithdrawBalance);
            } else {
                isNextInvest = false;
                alert_msg = data.error_msg;
                $withdrawErrMsgInvest.html(alert_msg);
            }
            changeWithdrawType();
        }, function (err) {
            console.info(err);
        });
    }
    // 获取出金状态 零钱包
    function getIsWithdrawWallet () {
        publicRequest('getWalletBalance', 'GET').then(function (data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                canWithdrawBalanceWallet = data.data;
                isNextWallet = true;
                $isWithdrawBalanceWallet.html(canWithdrawBalanceWallet);
            } else {
                isNextWallet = false;
                $withdrawErrMsgWallet.html(data.message);
            }
            changeWithdrawType();
        });
        
    }
    // 设置出金类型
    function changeWithdrawType () {
        if (widthdrawType === 'invest') {
            $withdrawAccount.html('交易帐户');
            $withdrawWallet.removeClass('active');
            $withdrawInvest.addClass('active');
            $withdrawErrMsgWallet.removeClass("active");
            $withdrawErrMsgInvest.addClass("active");
            isNext = isNextInvest;
        }
        if (widthdrawType === 'wallet') {
            $withdrawAccount.html('零钱包');
            $withdrawInvest.removeClass('active');
            $withdrawWallet.addClass('active');
            $withdrawErrMsgInvest.removeClass("active");
            $withdrawErrMsgWallet.addClass("active");
            isNext = isNextWallet;
        }
        if (isNext) {
            $toCardListBtn.removeClass("disabled");
        } else {
            $toCardListBtn.addClass("disabled");
        }
    }


    $withdrawAccount.on("tap", function () {
        var $layerInvest = $(".choose_type .choose_type__single.invest");
        var $layerWallet = $(".choose_type .choose_type__single.wallet");
        $(".choose_type .choose_type__single").removeClass("active");
        if (widthdrawType === 'invest') {
            $layerInvest.addClass('active');
        }
        if (widthdrawType === 'wallet') {
            $layerWallet.addClass('active');
        }

        layer.open({
            className: 'm_asset_layer',
            content: $(".choose_type").html()
        });

        // layer 操作
        $(".m_asset_layer .choose_type__btn span").on("tap", function () {
            layer.closeAll();
            return false;
        });
        $(".m_asset_layer .choose_type__single.invest").on("tap", function () {
            $(".m_asset_layer .choose_type__single.wallet").removeClass("active")
            $(this).addClass("active");
            widthdrawType = 'invest';
            changeWithdrawType();
            layer.closeAll();
            return false;
        });
        $(".m_asset_layer .choose_type__single.wallet").on("tap", function () {
            $(".m_asset_layer .choose_type__single.invest").removeClass("active")
            $(this).addClass("active");
            widthdrawType = 'wallet';
            changeWithdrawType();
            layer.closeAll();
            return false;
        });

        return false;
    });

    // 跳转到银行卡列表页面
    $toCardListBtn.on("tap", function () {
        if (isNext) {
            widthdrawNum = Number($withdrawNum.val());
            canWithdrawNum = widthdrawType === 'invest' ? canWithdrawBalance : canWithdrawBalanceWallet;
            console.info("提现金额："+widthdrawNum, "可提现金额："+canWithdrawNum);

            if (widthdrawNum >= 20) {
                if (widthdrawNum > canWithdrawNum) {
                    console.info("提现金额不能大于可提现金额");
                    if (isEngLanguage()) {
                        layer.open({
                            content: alert_msg_en,
                            btn: "OK"
                        });
                    } else {
                        layer.open({
                            content: "提现金额不能大于可提现金额",
                            btn: "确定"
                        });
                    }
                    
                } else {
                    if (widthdrawType === 'invest') {
                        layer.open({
                            content: '现在提现会导致您的账户红包失效，是否继续提现？',
                            btn: ['继续提现', '取消'],
                            yes: function(index){
                                layer.closeAll();
                                toCardList();
                            },
                            no: function () {
                                layer.closeAll();
                            }
                        });
                    } else {
                        toCardList();
                    }
                }
            } else {
                console.info("提现金额不能小于20美金");
                
                if (isEngLanguage()) {
                    layer.open({
                        content: alert_msg_en,
                        btn: "OK"
                    });
                } else {
                    layer.open({
                        content: "提现金额不能小于20美金",
                        btn: "确定"
                    });
                }
            }
        }
        return false;
    });

    function toCardList () {
        var action_address = window.location.origin +
                             "/m/asset_new/cardlist?amount=" +
                             encodeURIComponent(widthdrawNum) +
                             "&withdraw_type=" +
                             encodeURIComponent(widthdrawType);
        console.info(action_address);
        callNative({
            type: "openUrlOnce",
            url: action_address
        });
    }

    /*
     * page2
     * 获取银行卡信息
     */

    if (dataAttr == "page2") {
        console.log("this is page2");
        getPersonalInfo();
    }

    // 获取真实姓名以及银行卡信息
    function getPersonalInfo () {
        publicRequest('getUserInfo', 'GET').then(function (data) {
            if (!data) return;
            // console.log(data);
            if (data.is_succ) {
                realname = data.data.realname;
                getCard();
            }
        });
        // $.get('/action/public/v4/get_info').then(function (data) {
        //     // data = JSON.parse(data);
        //     console.info(data);
        //     if (data.is_succ) {
        //         realname = data.data.realname;
        //         getCard();
        //     }
        // }, function (err) {
        //     console.log(err);
        // });
    }
       
    function getCard() {
        $.get('/action/public/v4/query_bankcard').then(function (data) {
            // console.info(data);
            data = JSON.parse(data);
            var cardInfo = {
                "cardList": []
            };
            var banks = getBanksInfo();

            if (data.is_succ) {
                cardInfo.cardList.push(data.data);
                id = data.data.id ? data.data.id : '';
            } else {
                id = '';
                console.log("获取银行卡列表信息失败了");
            }

            // 循环拿到的card信息，去和config中的bank信息比较，找到对应的中文name
            $.each(cardInfo.cardList, function (index, value) {
                value.bank_name_zh = undefined;
                value.realname = realname;

                $.each(banks, function (index2, value2) {
                    if (value.bank_name === value2.nameEN) {
                        value.bank_name_zh = value2.nameZH;
                    }
                });
                
                if (! value.bank_name_zh) {
                    console.log("banks信息中没找到此银行名称");
                }
            });

            //使用template模版
            var html=bt('template_cardlist',cardInfo);
            // console.info(cardInfo);

            //渲染
            $(".m_withdraw__cardlist").html(html);

            var $toAddCardBtn = $(".m_withdraw__cardlist .operateCard");
            var $withdrawBtn = $(".m_withdraw__cardlist .m_withdraw__cardlist-bank");
            widthdrawType = getUrlParam("withdraw_type");

            // 跳转到绑定银行卡页面
            $toAddCardBtn.on("tap", function () {
                widthdrawNum = getUrlParam("amount");
                
                var action_address = window.location.origin + 
                                     "/m/asset_new/addcard1?amount=" +
                                     encodeURIComponent(widthdrawNum) +
                                     "&realname="+encodeURIComponent(realname) +
                                     "&id="+encodeURIComponent(id) +
                                     "&withdraw_type="+encodeURIComponent(widthdrawType);
                console.info(action_address);
                callNative({
                    type: "openUrlOnce",
                    url: action_address
                });
                return false;
            });

            // 出金
            $withdrawBtn.on("tap", function () {
                widthdrawNum = getUrlParam("amount");

                //loading
                layer.open({
                    type: 2,
                    content: 'loading',
                    shadeClose: false
                });
                if (widthdrawType === 'invest') {
                    withdrawInvest();
                } else {
                    withdrawWallet();
                }
                
                return false;
            });
            
        }, function (err) {
            console.info(err);
        });
    }

    function withdrawInvest () {
        $.post('/action/public/v4/withdraw', {
            amount: widthdrawNum,
            id: id
        }).then(function (data) {
            layer.closeAll();
            // console.info(data);
            data = JSON.parse(data);
            if (data.is_succ) {
                var action_address = window.location.origin +
                             "/m/asset_new/succ";
                console.info(action_address);
                callNative({
                    type: "openUrlRefresh",
                    url: action_address
                });
            } else {
                var action_address = window.location.origin +
                             "/m/asset_new/fail?msg=" +
                             encodeURIComponent(data.error_msg);
                console.info(action_address);
                callNative({
                    type: "openUrlRefresh",
                    url: action_address
                });
            }
        }, function (err) {
            console.log("出金申请提交失败");
            var action_address = window.location.origin +
                             "/m/asset_new/fail";
            console.info(action_address);
            callNative({
                type: "openUrlRefresh",
                url: action_address
            });
        });
    }

    function withdrawWallet () {
        publicRequest('withdrawWallet', 'POST', {
            amount: widthdrawNum
        }).then(function (data) {
            if (!data) return;
            layer.closeAll();
            // console.log(data);
            if (data.is_succ) {
                var action_address = window.location.origin +
                             "/m/asset_new/succ";
                console.info(action_address);
                callNative({
                    type: "openUrlRefresh",
                    url: action_address
                });
            } else {
                var action_address = window.location.origin +
                             "/m/asset_new/fail?msg=" +
                             encodeURIComponent(data.message);
                console.info(action_address);
                callNative({
                    type: "openUrlRefresh",
                    url: action_address
                });
            }
        });
    }

    /*
     * page3
     * 绑定银行卡
     */
    var $realname = $(".m_withdraw__addcard-info input[name='realname']");
    var $cardnum = $(".m_withdraw__addcard-info input[name='cardnum']");
    var $addCardBtn1 = $(".m_withdraw__addcard-btn .card1_btn");
    var $realnameInfo = $(".m_withdraw__addcard-info i.fa");

    if (dataAttr == "page3") {
        console.log("this is page3");
        getRealname();
    }

    $cardnum.on('keyup mouseout input',function(){
      var $this = $(this),
        v = $this.val();
        /\S{5}/.test(v) && $this.val(v.replace(/\s/g,'').replace(/(.{4})/g, "$1 "));
        
        if (v.substring(v.length-1) === ' ') {
            $this.val(v.substring(0, v.length-1));
        }
    });

    $realnameInfo.on("tap", function () {
        layer.open({
            content: "<div style='padding-bottom: 10px;'>持卡人说明</div><div style='text-align: left; color: #666;'>为了您的账户资金安全，只能绑定持卡人本人的银行卡。<br>如有其它疑问，请联系"+nodeResponseInfo.company+"客服"+nodeResponseInfo.telephone+"</div>",
            btn: "确定"
        });
        return false;
    });

    // 跳转到绑定银行卡页面2
    $addCardBtn1.on("tap", function () {
        var cardNum = isSuccAddCard1();
        
        if (cardNum) {
            widthdrawNum = getUrlParam("amount");
            id = getUrlParam("id");
            widthdrawType = getUrlParam("withdraw_type");
            var action_address = window.location.origin + 
                                 "/m/asset_new/addcard2?amount=" + 
                                 encodeURIComponent(widthdrawNum) +
                                 "&realname="+encodeURIComponent(realname) +
                                 "&id="+encodeURIComponent(id) +
                                 "&cardnum="+encodeURIComponent(cardNum) +
                                 "&withdraw_type="+encodeURIComponent(widthdrawType);
            console.info(action_address);
            callNative({
                type: "openUrlOnce",
                url: action_address
            });
        } else {
            console.log("银行卡卡号输入不正确");
            if (isEngLanguage()) {
                layer.open({
                    content: alert_msg_en,
                    btn: "OK"
                });
            } else {
                layer.open({
                    content: "银行卡卡号输入不正确",
                    btn: "确定"
                });
            }
        }
        return false;
    });

    function getRealname() {
        realname = getUrlParam("realname");
        $realname.val(realname);
    }

    // 绑定银行卡第一步是否完成
    function isSuccAddCard1() {
        var cardNum = $cardnum.val().replace(/\s/g, '');
        var isLawful = cardNum.match(bankCardNumber.reg);
        
        if (isLawful) {
            return cardNum;
        } else {
            return false;
        }
    }

    /*
     * page4
     * 绑定银行卡2
     */
    var $bank = $(".m_withdraw__addcard-info select.bank");
    var $branch = $(".m_withdraw__addcard-info input[name='branch']");
    var $addCardBtn2 = $(".m_withdraw__addcard-btn .card2_btn");
    var $state = $(".m_withdraw__addcard-info select.state");
    var $city = $(".m_withdraw__addcard-info select.city");

    if (dataAttr == "page4") {
        console.log("this is page4");
        var number = getUrlParam("cardnum");
        setBankList();
        setStateList();
    }

    $state.on("change", function () {
        setCityList($state.val());
        return false;
    });

    // 选取时清除class
    $branch.on("focus", function () {
        $branch.parent().removeClass("err");
        return false;
    });

    // 跳转到银行卡列表页面
    $addCardBtn2.on("tap", function () {
        var banksInfo = isSuccAddCard2();

        if (banksInfo.bank && banksInfo.branch && banksInfo.state && banksInfo.city) {
            var id = getUrlParam("id");
            // 绑定银行卡
            $.post('/action/public/v4/binding_bankcard', {
                card_no: number,
                bank_name: banksInfo.bank,
                bank_addr: banksInfo.branch,
                province: banksInfo.state,
                city: banksInfo.city,
                id: id
            }).then(function (data) {
                // console.info(data);
                data = JSON.parse(data);
                if (data.is_succ) {
                    widthdrawNum = getUrlParam("amount");
                    widthdrawType = getUrlParam("withdraw_type");
                    var action_address = window.location.origin +
                             "/m/asset_new/cardlist?amount=" +
                             encodeURIComponent(widthdrawNum) +
                             "&withdraw_type="+encodeURIComponent(widthdrawType);
                    console.info(action_address);
                    callNative({
                        type: "openUrlOnce",
                        url: action_address
                    });
                } else {
                    console.log(data.error_msg);
                    layer.open({
                        content: data.error_msg,
                        btn: "确定"
                    });
                }
            });
        } else {
            // console.log("未填写银行名称、支行名称");
            if (isEngLanguage()) {
                layer.open({
                    content: alert_msg_en,
                    btn: "OK"
                });
            } else {
                layer.open({
                    content: "信息填写不正确",
                    btn: "确定"
                });
            } 
        }
        return false;
    });

    function setBankList() {
        var banksInfoLst = {
            banks: getBanksInfo()
        };
        var bank_name_en = '';
    
        //使用template模版
        var html=bt('template_banklist',banksInfoLst);

        $bank.html(html);

        getBankBin(number, function (err, data) {
            if (!err) {
                bank_name_en = data.bankCode.toLowerCase();

                $bank.find("option[value='"+bank_name_en+"']").attr("selected",true);
            }
        });
    }

    function setStateList () {
        $.get('/action/public/v4/statecode_list?world_code=CN', function (data) {
            data = JSON.parse(data);
            // console.info(data);
            var stateInfoLst = {
                state: data.data
            };
        
            //使用template模版
            var html=bt('template_statelist',stateInfoLst);

            $state.html(html);
        });
    }

    function setCityList (value) {
        $.get('/action/public/v4/citycode_list', {parent_code: value}, function (data) {
            data = JSON.parse(data);
            // console.info(data);
            var cityInfoLst = {
                city: data.data
            };
            console.info(cityInfoLst);
            //使用template模版
            var html=bt('template_citylist',cityInfoLst);

            $city.html(html);
        });
    }

    // 绑定银行卡第二步是否完成
    function isSuccAddCard2() {
        var bank = $bank.val();
        var branch = $branch.val();
        var state = $state.val();
        var city = $city.val();
        var isLawful = {
            bank: false,
            branch: false,
            state: false,
            city: false
        };

        if (bank) {
            isLawful.bank = bank;
        } else {
            console.log("请选择发卡银行");
        }

        if (branch) {
            isLawful.branch = branch;
        } else {
            $branch.parent().addClass("err");
            console.log("请填写支行名称");
        }

        if (state) {
            isLawful.state = state;
        } else {
            console.log("请选择开户省");
        }

        if (city) {
            isLawful.city = city;
        } else {
            console.log("请选择开户市");
        }
        console.info(isLawful);
        return isLawful;
    }

    /*
     * page5
     * 出金申请成功
     */
    var $succToPersonalPage = $(".m_withdraw__succ-btn .m_withdraw_btn");

    if (dataAttr == "page5") {
        console.log("this is page5");
    }

    $succToPersonalPage.on("tap", function () {
        console.log("成功了，前往个人中心");
        callNative({
            type: "back_personal",
            url: ""
        });
        return false;
    });

    /*
     * page6
     * 出金申请失败
     */
    var $failTip = $(".m_withdraw__fail-tip");
    var $failToPersonalPage = $(".m_withdraw__fail-btn .m_withdraw_btn");

    if (dataAttr == "page6") {
        console.log("this is page6");
        getFailMsg();
    }

    $failToPersonalPage.on("tap", function () {
        console.log("失败了，前往个人中心");
        callNative({
            type: "back_personal",
            url: ""
        });
        return false;
    });

    function getFailMsg () {
        var msg = getUrlParam("msg");

        if (msg) {
            if (isEngLanguage()) {
                $failTip.html(alert_msg_en);
            } else {
                $failTip.html(msg);
            }
        }
    }


});