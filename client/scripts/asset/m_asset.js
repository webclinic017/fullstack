$(document).ready(function () {

    var isNext = false;
    // 可提现金额
    var canWithdrawBalance = 0;
    // 提现金额
    var widthdrawNum = 0;
    // 持卡人真实姓名
    var realname;

    // 出金多个页面共用一个js文件，通过class为m_withdraw的data-page属性区分不同页面
    var dataAttr = $(".m_withdraw").attr("data-page");
    // console.info(dataAttr);

    // 获取url search参数方法
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }

    /*
     * page1
     * 填写出金金额，获取当前汇率、可提现金额
     */
    if (dataAttr == "page1") {
        console.log("this is page1");
        getCurrentRate();
        getIsWithdraw();
    }
    
    // 获取当前汇率
    var $currentRate = $(".m_withdraw__home-rate span");

    function getCurrentRate () {
        $.get('/api/v1/get_parity').then(function (data) {
            console.info(data);
            data = JSON.parse(data);
            var rate = Number(data.outparity).toFixed(4);
            $currentRate.html(rate);
        }, function (err) {
            console.info(err);
        });
    }
    // 获取出金状态
    var $isWithdrawBalance = $(".m_withdraw__home-info .tip span");
    var $withdrawErrMsg = $(".m_withdraw__home-info .err_msg");

    function getIsWithdraw () {
        $.get('/action/public/v4/check_withdraw').then(function (data) {
            // console.info(data);
            data = JSON.parse(data);
            canWithdrawBalance = data.balance;

            $isWithdrawBalance.html(canWithdrawBalance);

            if (data.is_succ) {
                isNext = true;
            } else {
                isNext = false;
                $withdrawErrMsg.html(data.error_msg);
            }
        }, function (err) {
            console.info(err);
        });
    }

    // 跳转到银行卡列表页面
    var $toCardListBtn = $(".m_withdraw__home-btn .m_withdraw_btn");
    var $withdrawNum = $(".m_withdraw__home-info label .m_withdraw_num");

    $toCardListBtn.on("touchend", function () {
        if (isNext) {
            widthdrawNum = Number($withdrawNum.val());
            console.info("提现金额："+widthdrawNum, "可提现金额："+canWithdrawBalance);

            if (widthdrawNum >= 20) {
                if (widthdrawNum > canWithdrawBalance) {
                    console.info("提现金额大于可提现金额");
                } else {
                    toCardList();
                }
            } else {
                console.info("提现金额不能小于20美金");
            }
        }
    });

    function toCardList () {
        var action_address = window.location.origin + "/m/asset/cardlist?amount="+encodeURIComponent(widthdrawNum);
        console.info(action_address);
        callNative({
            type: "openUrl",
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

    // 跳转到绑定银行卡页面
    var $toAddCardBtn = $(".m_withdraw__cardlist .operateCard");

    $toAddCardBtn.on("touchend", function () {
        widthdrawNum = getUrlParam("amount");
        var action_address = window.location.origin + "/m/asset/addcard1?amount="+encodeURIComponent(widthdrawNum)+"&realname="+encodeURIComponent(realname);
        console.info(action_address);
        callNative({
            type: "openUrl",
            url: action_address
        });
    });

    // 获取真实姓名以及银行卡信息
    function getPersonalInfo () {
        $.get('/action/public/v4/get_info').then(function (data) {
            data = JSON.parse(data);
            
            if (data.is_succ) {
                realname = data.data.realname;
                getCard();
            }
        }, function (err) {
            console.log(err);
        });
    }
       
    function getCard() {
        $.get('/action/public/v4/query_bankcard').then(function (data) {
            console.info(data);
            data = JSON.parse(data);
            var cardInfo = {
                "cardList": []
            };
            var banks = getBanksInfo();

            if (data.is_succ) {
                cardInfo.cardList.push(data.data);
            } else {

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

            // baiduTemplate 模版 http://baidufe.github.io/BaiduTemplate/

            //使用baidu.template命名空间
            var bt=baidu.template;
            bt.LEFT_DELIMITER = '<$';
            bt.RIGHT_DELIMITER = '$>';

            //可以设置分隔符
            //bt.LEFT_DELIMITER='<!';
            //bt.RIGHT_DELIMITER='!>';

            //可以设置输出变量是否自动HTML转义
            //bt.ESCAPE = false;

            //最简使用方法
            var html=bt('template_cardlist',cardInfo);
            // console.info(cardInfo);

            //渲染
            $(".bankCard").html(html);
            
        }, function (err) {
            console.info(err);
        });
    }
 
    // getH5Config 方法是定义在window上的全局函数，用于获取一些公共的配置数据
    function getBanksInfo() {
        var banks = getH5Config().banks;
        return banks;
    }

    /*
     * page3
     * 绑定银行卡
     */
    var $realname = $(".m_withdraw__addcard-info input[name='realname']");

    if (dataAttr == "page3") {
        console.log("this is page3");
        getRealname();
    }

    function getRealname() {
        realname = getUrlParam("realname");
        console.info($realname);
        $realname.val(realname);
    }








});