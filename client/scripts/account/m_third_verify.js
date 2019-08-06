$(document).ready(function () {
    var ele = {
        wrapper: ".m_third",
        navbar: ".m_third .m_third_navbar",
        navbarStep1: ".m_third .m_third_navbar .m_third_navbar__progress li.num1",
        navbarStep2: ".m_third .m_third_navbar .m_third_navbar__progress li.num2",
        navbarStep3: ".m_third .m_third_navbar .m_third_navbar__progress li.num3",
        navbarStep4: ".m_third .m_third_navbar .m_third_navbar__progress li.num4",
        //开户
        index: ".m_third .m_third_index",
        indexDollar200: ".m_third .m_third_index .m_third_index__content .dollar200",
        indexBtn: ".m_third .m_third_index .m_third_index__btn .btn",
        //完善资料
        realnameInfo: ".m_third .m_third_realnameInfo",
        realnameInfoGender: ".m_third .m_third_realnameInfo .m_third_realnameInfo__male span",
        identityFirstname: ".m_third .m_third_identity .firstname",
        identityLastname: ".m_third .m_third_identity .lastname",
        identityRealname: ".m_third .m_third_identity .realname",
        realnameInfoEmail: ".m_third .m_third_realnameInfo .email",
        realnameInfoBirth: ".m_third .m_third_realnameInfo .birth",
        realnameInfoBtn: ".m_third .m_third_realnameInfo .m_third_realnameInfo__btn .btn",
        //完善地址
        addressInfo: ".m_third .m_third_addressInfo",
        addressInfoPostCode: ".m_third .m_third_addressInfo .post_code",
        addressInfoCountry: ".m_third .m_third_addressInfo .country",
        addressInfoAddress: ".m_third .m_third_addressInfo .address",
        addressInfoState: ".m_third .m_third_addressInfo .state_global .state",
        addressInfoCity: ".m_third .m_third_addressInfo .city_global .city",
        addressInfoSelect: ".m_third .m_third_addressInfo select",
        addressInfoRadioBtn: ".m_third .m_third_addressInfo .radio_wrapper span",
        addressInfoBtn: ".m_third .m_third_addressInfo .m_third_addressInfo__btn .btn",
        //投资信息确认
        investInfo: ".m_third .m_third_investInfo",
        investInfoBtn: ".m_third .m_third_investInfo .m_third_investInfo__btn .btn",
        //财务细节调查
        fundInfo: ".m_third .m_third_fundInfo",
        fundInfoBtn: ".m_third .m_third_fundInfo .m_third_fundInfo__btn .btn",
        //上传地址证明
        cardFile: ".m_third .m_third_card__pic .form input",
        cardSelect: ".m_third .m_third_card__wrapper select",
        address: ".m_third .m_third_address",
        addressCardType: ".m_third .m_third_address input.info.card_type",
        addressBtn: ".m_third .m_third_address .m_third_address__btn .btn",
        //上传身份证明
        identity: ".m_third .m_third_identity",
        identityCardType: ".m_third .m_third_identity input.info.card_type",
        identityCardNo: ".m_third .m_third_identity input.info.card_no",
        identityBtn: ".m_third .m_third_identity .m_third_identity__btn .btn",
        //待审核/审核通过
        submit: ".m_third .m_third_verify"

    };
    var eleIndex = {
        "0": "index",       //未开户
        '1': "islamic",     //伊斯兰协议 (TODO)
        "2": "realnameInfo",//完善资料
        '3': "addressInfo", //完善地址
        '4': "investInfo",  //投资信息确认(KYC)
        '5': "fundInfo",    //财务细节调查
        '6': "address",     //上传地址证明
        '7': "identity",    //上传身份证明
        '10': "submit",      //待审核
        '11': "submit"       //审核通过
    };
    var step = 0;
    var cardCountry;
    var kycInfo = {
        '0': {
            message: {},
            messageTmp: {}
        },
        '1': {
            message: {},
            messageTmp: {}
        }
    };
    var investmentGoals = false; //财务细节最后问题弹窗控制
    var gender = "1";   //性别
    var addressInfoRadio = {
        addressMonth: "1", //居住地满三个月
        nationality: "1",  //国籍
        taxResidency: "1" //税务地
    };
    var bt = baidu.template;
    var userCacheInfo = {};   //用户缓存信息
    var countryList = {
        data: null
    };
    var cardBaseFile = {    //证件
        front: false,
        back: false,
        addressOne: false,
        addressTwo: false
    };
    var addressTypeList = {
        data: [
            {
                key: lang.text('third.third_username14'),
                value: 1
            },
            {
                key: lang.text('third.third_username15'),
                value: 2
            },
            {
                key: lang.text('third.third_username16'),
                value: 3
            }
        ]
    };
    var cardTypeList = {
        cn: [
            {
                key: lang.text('third.third_username8'),
                value: 2
            },
            {
                key: lang.text('third.third_username9'),
                value: 0
            },
            {
                key: lang.text('third.third_username10'),
                value: 1
            },
            {
                key: lang.text('third.third_username11'),
                value: 3
            },
            {
                key: lang.text('third.third_username12'),
                value: 4
            }
        ],
        en: [
            {
                key: lang.text('third.third_username11'),
                value: 3
            },
            {
                key: lang.text('third.third_username12'),
                value: 4
            },
            {
                key: lang.text('third.third_username13'),
                value: 5
            }
        ]
    };
    // 请求当前用户认证到哪一步
    setUserCookie();

    function goStepPage() {
        // console.log(step);
        $.each(eleIndex, function (index, value) {
            $(ele[eleIndex[index]]).removeClass("active");
        });
        $(ele.wrapper).removeClass("bgm");
        $(ele.navbarStep1).removeClass("active");
        $(ele.navbarStep2).removeClass("active");
        $(ele.navbarStep3).removeClass("active");
        $(ele.navbarStep4).removeClass("active");
        $(ele[eleIndex[step]]).addClass("active");

        if (step == 0 || step == 10 || step == 11) {
            $(ele.wrapper).addClass("bgm");
        }
        if (step > 0) {
            $(ele.navbarStep1).addClass("active");
        }
        if (step > 3) {
            $(ele.navbarStep2).addClass("active");
        }
        if (step > 5) {
            $(ele.navbarStep3).addClass("active");
        }
        if (step > 7) {
            $(ele.navbarStep4).addClass("active");
        }
        //不支持图片上传
        if (step == 6 || step == 7) {
            var userAgent = navigator.userAgent.toLowerCase();
            var index = userAgent.indexOf("android");
            if (index >= 0) {
                var androidVersion = userAgent.slice(index + 8, index + 11);
                if (androidVersion <= 4.4) {
                    alert(lang.text('third.systemTip'));
                }
            }
        }
    }
    //设置用户信息
    function setUserCookie() {
        var user_id = getUrlParam("user_id") || '';
        var phone = getUrlParam("phone") || '';
        var private_key = getUrlParam("private_key") || '';
        var action = getUrlParam("action") || '';
        var sign = getUrlParam("sign") || '';

        var expiresDate = new Date();
        expiresDate.setTime(expiresDate.getTime() + (30 * 60 * 1000));  // 30分钟过期

        $.cookie("third_user_id", user_id, { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("third_phone", phone, { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("private_key", private_key, { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("action", action, { path: '/', domain: getDomain(), expires: expiresDate });
        $.cookie("sign", sign, { path: '/', domain: getDomain(), expires: expiresDate });

        // 需要去掉200体验金的三方：tubiaojia、juyoulicai
        if (private_key === 'tubiaojia' || private_key === 'juyoulicai') {
            $(ele.indexDollar200).css({ display: 'none' });
        }

        setTimeout(function () {
            getUserStatus();
        }, 300);
    }
    //获取当前认证状态
    function getUserStatus() {
        layer.open({ type: 2, shadeClose: false });
        publicRequest('thirdGetStatus', 'GET').then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (!data) return;
            if (data.is_succ) {
                step = data.data.status;
                //加载缓存
                if (step != 0) {
                    // console.log('Get Cache!!')
                    getUserCacheInfo();
                }
                $(ele.wrapper).addClass("active");
                goStepPage();
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
    //获取缓存信息
    function getUserCacheInfo() {
        publicRequest('thirdGetCacheInfo', 'GET').then(function (data) {
            if (!data) return;
            if (data.is_succ) {
                userCacheInfo = data.data;
                // console.log(userCacheInfo);
                //设置缓存信息
                $(ele.realnameInfoEmail).val(userCacheInfo.email);
                $(ele.identityFirstname).val(userCacheInfo.first_name);
                $(ele.identityLastname).val(userCacheInfo.last_name);
                $(ele.identityRealname).val(userCacheInfo.real_name);
                laydate.render({
                    elem: '#birth',
                    lang: lang.curLang() !== 'cn' ? 'en' : 'cn',
                    value: userCacheInfo.birth ? userCacheInfo.birth.substring(0, 4) + '-' + userCacheInfo.birth.substring(4, 6) + '-' + userCacheInfo.birth.substring(6, 8) : ''
                });
                if (userCacheInfo.gender !== '') {
                    gender = userCacheInfo.gender;
                    $(ele.realnameInfoGender).removeClass("active");
                    $(ele.realnameInfoGender + "[data-gender=" + userCacheInfo.gender + "]").addClass("active");
                }
                var identityType = userCacheInfo.world_code === 'CN' ? 'cn' : 'en';
                //请求相关列表
                getCountries();
                initStateInfo();
                getKycList('0');
                getKycList('1');
                updateFilesType('address');
                updateFilesType(identityType);
            }
        });
    }
    //第一步 --- 开户
    $(ele.indexBtn).on("tap", function () {
        openH5AgmentModal(100402, function (resolve, e) {
            layer.close(resolve.layIndex);
            layer.open({ type: 2, shadeClose: false });

            publicRequest('thirdRegister', 'POST').then(function (data) {
                console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    getUserStatus();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        });
        return false;
    });
    //第二步 --- 完善资料
    $(ele.realnameInfoBtn).on("tap", function (e) {
        e.preventDefault();
        if (
            // $(ele.realnameInfoFirstname).val() && 
            $(ele.realnameInfoBirth).val()
            && $(ele.realnameInfoEmail).val()) {
            layer.open({ type: 2, shadeClose: false });
            publicRequest('thirdSetUserInfo', 'PUT', {
                // first_name: $(ele.realnameInfoFirstname).val(),
                // last_name: $(ele.realnameInfoLastname).val(),
                gender: gender,
                birth: $(ele.realnameInfoBirth).val().replace(/-/g, ''),
                email: $(ele.realnameInfoEmail).val()
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = data.data.status;
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });
    // select gender
    $(ele.realnameInfoGender).on("tap", function (e) {
        gender = $(this).attr("data-gender");
        $(ele.realnameInfoGender).removeClass("active");
        $(this).addClass("active");
    });
    //第三步 --- 完善地址
    $(ele.addressInfoBtn).on("tap", function (e) {
        e.preventDefault();
        cardCountry = $(ele.addressInfoCountry).attr("data-type");
        var ready = false;
        var info = {
            world_code: cardCountry,
            nationality: addressInfoRadio.nationality == '0' ? cardCountry : $(".radio_select_wrapper input.nationality").attr("data-type"),
            tax_residency: addressInfoRadio.taxResidency == '0' ? cardCountry : $(".radio_select_wrapper input.taxResidency").attr("data-type"),
            type: addressInfoRadio.addressMonth,
            post_code: $(ele.addressInfoPostCode).val()
        };
        if (cardCountry === 'CN') {
            info.state_code = $(".m_third_addressInfo .state_cn .state").attr("data-type");
            info.city_code = $(".m_third_addressInfo .city_cn .city").attr("data-type");
            info.address = $(ele.addressInfoAddress).val();
            if (info.world_code && info.state_code && info.city_code && info.post_code && info.address) {
                ready = true;
            }
        } else {
            info.first_line_address = $(ele.addressInfoState).val();
            info.second_line_address = $(ele.addressInfoCity).val();
            info.town = $(ele.addressInfoAddress).val();
            if (info.world_code && info.first_line_address && info.post_code && info.town) {
                ready = true;
            }
        }
        // console.log(info);
        if (ready) {
            layer.open({ type: 2, shadeClose: false });
            publicRequest('thirdSetUserAddressInfo', 'PUT', info).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = data.data.status;
                    var cardType = info.world_code === 'CN' ? 'cn' : 'en';
                    updateFilesType(cardType);
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });
    //选择国家、省、市
    $(ele.addressInfoSelect).on('change', function (e) {
        var op = $(this).find('option:selected');
        if ($(op).val()) {
            $(this).prev().val($(op).text());
            $(this).prev().attr("data-type", $(op).val());
        } else {
            $(this).prev().val(undefined);
            $(this).prev().attr("data-type", undefined);
        }
        if ($(this).prev().hasClass('country')) {
            sameCurrentCountry("nationality");
            sameCurrentCountry("taxResidency");
            if ($(this).prev().attr("data-type") !== 'CN') {
                setGlobalCountry();
            } else {
                setCNCountry(true);
            }
        }
        if ($(this).prev().hasClass('state')) {
            $(".m_third_addressInfo .city_cn .city").val(undefined);
            $(".m_third_addressInfo .city_cn .city").attr("data-type", undefined);
            initCityInfo($(op).val());
        }
    });
    // 获取国家、地区列表
    function getCountries() {
        publicRequest('thirdCountries', 'GET').then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                countryList = {
                    data: data.data
                };
                //使用template模版
                var html = bt('template_country_info', countryList);
                //渲染
                $("#country_list").html(html);
                $("#nationality_list").html(html);
                $("#taxResidency_list").html(html);

                //设置缓存
                if (userCacheInfo.world_code && userCacheInfo.world_code !== 'BS') {
                    $.each(countryList.data, function (index, value) {
                        if (userCacheInfo.world_code == value.code) {
                            $(ele.addressInfoCountry).val(value.name);
                            cardCountry = userCacheInfo.world_code;
                            $(ele.addressInfoCountry).attr("data-type", cardCountry);
                            $("#country_list").find("option[value=" + cardCountry + "]").first().attr("selected", true);
                        }
                    });
                    if (cardCountry === 'CN') {
                        setCNCountry(true);
                    } else {
                        setGlobalCountry();
                    }
                } else if (lang.curLang() == 'cn') {
                    setCNCountry();
                } else {
                    setGlobalCountry();
                }
            }
        });
    }
    // 初始化省/区
    function initStateInfo() {
        publicRequest('thirdStateList', 'GET', {
            country_code: 'CN'
        }).then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                var stateList = {
                    data: data.data
                };
                //使用template模版
                var html = bt('template_country_info', stateList);
                //渲染
                $("#state_list").html(html);
            }
        });
    }
    // 初始化城市
    function initCityInfo(parentCode) {
        publicRequest('thirdCitiesList', 'GET', {
            parent_code: parentCode
        }).then(function (data) {
            // console.log(data);
            if (data.is_succ) {
                var cityList = {
                    data: data.data
                };
                //使用template模版
                var html = bt('template_country_info', cityList);
                //渲染
                $("#city_list").html(html);
            }
        });
    }
    // 地址预测暂时隐藏
    var fuzzySearch = {
        isFuzzySearch: false,   // 判断是填写还是查找
        show: false,   // 根据地址或邮编查找是否显示
        fuzzySearchList: [],   // 模糊搜索列表
        fuzzySearchCon: '',   // 模糊搜索内容
        layerIndex: ''
    }
    function setCNCountry(simp) {
        $(".m_third_addressInfo .state_cn").addClass('active');
        $(".m_third_addressInfo .city_cn").addClass('active');
        $(".m_third_addressInfo .state_global").removeClass('active');
        $(".m_third_addressInfo .city_global").removeClass('active');
        $(".m_third_addressInfo .switch_fuzzy_search").removeClass('active');
        $(".m_third_addressInfo .switch_fuzzy_search_input").removeClass('active');
        $(".m_third_addressInfo .switch_fuzzy_search_related").addClass('active');

        if (simp) return;
        $("#country_list").find("option[value=CN]").first().attr("selected", true);
        $(ele.addressInfoCountry).val('中国');
        $(ele.addressInfoCountry).attr("data-type", "CN");
    }
    function setGlobalCountry() {
        $(".m_third_addressInfo .state_cn").removeClass('active');
        $(".m_third_addressInfo .city_cn").removeClass('active');
        switchFuzzySearchAfter()
    }
    function switchFuzzySearchAfter() {
        if (fuzzySearch.show) {
            $(".m_third_addressInfo .switch_fuzzy_search").addClass('active');
            if (fuzzySearch.isFuzzySearch) {
                $(".m_third_addressInfo .state_global").removeClass('active');
                $(".m_third_addressInfo .city_global").removeClass('active');
                $(".m_third_addressInfo .switch_fuzzy_search_related").removeClass('active');
                $(".m_third_addressInfo .switch_fuzzy_search_input").addClass('active');
                $('#switchFuzzySearch').text(lang.text('third.enterAddressManually'))  // 手动输入地址
            } else {
                $(".m_third_addressInfo .state_global").addClass('active');
                $(".m_third_addressInfo .city_global").addClass('active');
                $(".m_third_addressInfo .switch_fuzzy_search_related").addClass('active');
                $(".m_third_addressInfo .switch_fuzzy_search_input").removeClass('active');

                $('#switchFuzzySearch').text(lang.text('third.autoAddressLookup'))
            }
        } else {
            $(".m_third_addressInfo .state_global").addClass('active');
            $(".m_third_addressInfo .city_global").addClass('active');
            $(".m_third_addressInfo .switch_fuzzy_search_related").addClass('active');
            $(".m_third_addressInfo .switch_fuzzy_search_input").removeClass('active');
            $(".m_third_addressInfo .switch_fuzzy_search").removeClass('active');

        }
    }
    var getAddressUrlTimer;
    $('#fuzzySearchAfter').on("tap", function (e) {
        e.preventDefault();
        fuzzySearch.layerIndex = layer.open({
            type: 1,
            skin: 'fuzzy_search',
            title: '',
            closeBtn: 0,
            shade: 0,
            content: '<div><div class="m_third_addressInfo__wrapper"><input class="info" type="text" placeholder="' + lang.text('third.addressOrPostalCode') + '" id="fuzzySearch"></div><ul id="fuzzySearchList" class="list"></ul></div>'
        });
        $("#fuzzySearchAfter").focus()
        $("#fuzzySearchList").hide()
    })
    $('body').on("input", "#fuzzySearch", function () {
        fuzzySearch.fuzzySearchCon = $(this).val()
        clearTimeout(getAddressUrlTimer)
        var params = {
            Key: 'GE86-EG48-RA51-EZ99',
            Text: fuzzySearch.fuzzySearchCon,
            Limit: 20,
            Language: lang.curLang(),
            Countries: $(ele.addressInfoCountry).attr("data-type")
        }
        getAddressUrlTimer = setTimeout(function () {
            fuzzySearchListTpl(params);
        }, 250)
    })
    $("#switchFuzzySearch").on('tap', function (e) {
        e.preventDefault();
        fuzzySearch.isFuzzySearch = !(fuzzySearch.isFuzzySearch);
        switchFuzzySearchAfter()
    })
    function fuzzySearchListTpl(params) {
        publicRequest('getAddressUrl', 'GET', params).then(function (data) {
            fuzzySearch.fuzzySearchList = data.Items;
            if (fuzzySearch.fuzzySearchList.length > 0) {
                var tpl = '';
                for (var i = 0; i < data.Items.length; i++) {
                    var ele = data.Items[i];
                    tpl += "<li data-index=" + i + ">" + ele.Text + "</li>"
                }
                $("#fuzzySearchList").empty().append(tpl)
                $("#fuzzySearchList").show()
            } else {
                $("#fuzzySearchList").empty();
                $("#fuzzySearchList").hide()

            }

        })
    }
    $("body").on('tap', '#fuzzySearchList li', function (e) {
        e.preventDefault();

        var item = fuzzySearch.fuzzySearchList[($(this).data('index'))]
        if (item.Type === 'Address') {
            if (item.Text) {
                var textArr = item.Text.split(',')
                if (textArr.length == 1) {
                    $(ele.addressInfoState).val(textArr[0]);
                }
                else if (textArr.length > 1) {
                    $(ele.addressInfoState).val(textArr[0]);
                    $(ele.addressInfoCity).val(textArr[1]);
                }
            }
            if (item.Description) {
                var descriptionArr = item.Description.split(',')
                if (descriptionArr.length == 1) {
                    $(ele.addressInfoAddress).val(descriptionArr[0]);
                }
                else if (descriptionArr.length == 2) {
                    $(ele.addressInfoAddress).val(descriptionArr[0]);
                    $(ele.addressInfoPostCode).val(descriptionArr[1]);
                }
                else if (descriptionArr.length > 2) {
                    $(ele.addressInfoAddress).val(descriptionArr[1]);
                    $(ele.addressInfoPostCode).val(descriptionArr[2]);
                }
            }
            fuzzySearch.show = false;
            switchFuzzySearchAfter();
            layer.close(fuzzySearch.layerIndex)
        } else {
            var params = {
                Text: fuzzySearch.fuzzySearchCon,
                Limit: 20,
                Language: lang.curLang(),
                Container: item.Id,
                Key: 'GE86-EG48-RA51-EZ99',
                Countries: $(ele.addressInfoCountry).attr("data-type")
            }
            fuzzySearchListTpl(params)
        }
    })


    // select radio_wrapper
    $(ele.addressInfoRadioBtn).on("tap", function (e) {
        e.preventDefault();
        var key = $(this).attr("data-key");
        var type = $(this).attr("data-type")
        addressInfoRadio[key] = $(this).attr("data-type");
        $(ele.addressInfoRadioBtn + "[data-key=" + key + "]").removeClass("active");
        $(this).addClass("active");
        if (key !== 'addressMonth') {
            if (type == '0') {
                $(".radio_select_wrapper[data-key=" + key + "]").removeClass("active");
                $(".radio_current_wrapper[data-key=" + key + "]").addClass("active");
                sameCurrentCountry(key);
            } else {
                $(".radio_current_wrapper[data-key=" + key + "]").removeClass("active");
                $(".radio_select_wrapper[data-key=" + key + "]").addClass("active");
            }
        }
    });
    function sameCurrentCountry(type) {
        $(".radio_current_wrapper[data-key=" + type + "]").html($("input.country").val());
    }
    //第四步 --- kyc
    $(ele.investInfoBtn).on("tap", function (e) {
        e.preventDefault();
        var msg = {};
        var json = kycInfo["0"].message;
        var next = true;
        // console.log(json);
        for (var name in json) {
            msg[name] = json[name];
            if (json.employment_status === 'self_employed') {
                if (name === 'position') continue;
            } else if (json.employment_status !== 'employed') {
                if (name === 'industry' || name === 'position') continue;
            }
            if (!json[name]) {
                next = false;
            }
        }
        if (msg.employment_status === "self_employed") {
            msg.position = undefined;
        } else if (msg.employment_status === "unemployed" || msg.employment_status === "retired") {
            msg.industry = undefined;
            msg.position = undefined;
        }
        if (next) {
            layer.open({ type: 2, shadeClose: false });
            publicRequest('thirdSetKyc', 'POST', msg).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) return;
                if (data.is_succ) {
                    step = data.data.status;
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });
    //第五步 --- 财务信息
    $(ele.fundInfoBtn).on("tap", function (e) {
        e.preventDefault();
        var json = kycInfo["1"].message;
        var next = true;
        // console.log(json);
        for (var name in json) {
            if (!json[name]) {
                next = false;
            }
        }
        if (next) {
            json.type = 1;
            if (investmentGoals) {
                submitFundInfo(json);
            } else {
                openFundInfoLayerMdl(json);
            }

        } else {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        }
    });
    function submitFundInfo(json) {
        layer.open({ type: 2, shadeClose: false });
        publicRequest('thirdSetKyc', 'POST', json).then(function (data) {
            // console.log(data);
            layer.closeAll();
            if (!data) return;
            if (data.is_succ) {
                step = data.data.status;
                goStepPage();
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
    function openFundInfoLayerMdl(force) {
        layer.open({
            content: $(".m_third_layer_temp").html()
            , btn: [lang.text('third.yes'), lang.text('third.no')]
            , yes: function (index) {
                if (force) {
                    layer.close(index);
                    submitFundInfo(force);
                } else {
                    investmentGoals = true;
                    layer.close(index);
                }
            }
        });
    }
    //获取KYC列表
    function getKycList(type) {
        publicRequest('thirdGetKycList', 'GET', { type: type }).then(function (data) {
            // console.log(data);
            if (!data) return;
            if (data.is_succ) {
                var kycList = {
                    data: data.data
                };
                var order = 1;
                // 添加序号
                $.each(kycList.data, function (index, value) {
                    kycInfo[type]["message"][value.name] = '';
                    if (value.type == 3) {
                        kycInfo[type]["messageTmp"][value.name] = {};
                    }
                    if (value.name === 'industry' || value.name === 'position') {
                        value.active = false;
                    } else {
                        value.active = true;
                    }
                    value.title = order + '.' + value.title;
                    order++;
                });
                // console.log(kycList);
                //使用template模版
                var html = bt('template_kyc_info', kycList);
                //渲染
                if (type == '0') {
                    $("#m_third_investInfo__template").html(html);

                    //下拉选择
                    $("#m_third_investInfo__template").on("change", ".m_third_kyc__single-select", function () {
                        selectKyc($(this), '0', 'select');
                    });
                    //单选
                    $("#m_third_investInfo__template").on("tap", ".m_third_kyc__single-list.radio label", function (e) {
                        e.preventDefault();
                        selectKyc($(this), '0', 'radio');
                        //kyc后两题 根据上一题的答案决定是否需要选择
                        if ($(this).attr("data-name") === 'employment_status') {
                            var a = $(this).find(".inp").attr("data-value")
                            if (a === 'employed') {
                                $(".m_third_kyc__single[data-name=industry]").addClass('active');
                                $(".m_third_kyc__single[data-name=position]").addClass('active');
                            } else if (a === 'self_employed') {
                                $(".m_third_kyc__single[data-name=industry]").addClass('active');
                                $(".m_third_kyc__single[data-name=position]").removeClass('active');
                            } else {
                                $(".m_third_kyc__single[data-name=industry]").removeClass('active');
                                $(".m_third_kyc__single[data-name=position]").removeClass('active');
                            }
                        }
                    });
                    //多选
                    $("#m_third_investInfo__template").on("tap", ".m_third_kyc__single .m_third_kyc__single-list.checkbox label", function (e) {
                        e.preventDefault();
                        selectKyc($(this), '0', 'checkbox');
                    });
                }
                if (type == '1') {
                    $("#m_third_fundInfo__template").html(html);

                    //下拉选择
                    $("#m_third_fundInfo__template").on("change", ".m_third_kyc__single-select", function () {
                        selectKyc($(this), '1', 'select');
                    });
                    //单选
                    $("#m_third_fundInfo__template").on("tap", ".m_third_kyc__single-list.radio label", function (e) {
                        e.preventDefault();
                        selectKyc($(this), '1', 'radio');
                        //最后一题弹窗
                        if ($(this).attr("data-name") === 'investment_goals') {
                            if ($(this).find(".inp").attr("data-value") === 'capital_preservation') {
                                investmentGoals = false;
                                openFundInfoLayerMdl();
                            } else {
                                investmentGoals = true;
                            }

                        }
                    });
                    //多选
                    $("#m_third_fundInfo__template").on("tap", ".m_third_kyc__single .m_third_kyc__single-list.checkbox label", function (e) {
                        e.preventDefault();
                        selectKyc($(this), '1', 'checkbox');
                    });
                }
            }
        });
    }
    function selectKyc(self, kycType, type) {
        if (kycType == '0') {
            var parent = "#m_third_investInfo__template";
        }
        if (kycType == '1') {
            var parent = "#m_third_fundInfo__template";
        }
        if (type === 'radio') {
            var name = self.attr("data-name");
            $(parent).find(".inp[data-name=" + name + "]").removeClass("active");
            self.find(".inp").addClass("active");
            kycInfo[kycType]["message"][name] = self.find(".inp").attr("data-value");
        }
        if (type === 'checkbox') {
            var inp = self.find(".inp");
            kycInfo[kycType]["message"][inp.attr("data-name")] = '';
            var arr = [];
            if (inp.hasClass("active")) {
                inp.removeClass("active");
                kycInfo[kycType]["messageTmp"][inp.attr("data-name")][inp.attr("data-value")] = false;
            } else {
                inp.addClass("active");
                kycInfo[kycType]["messageTmp"][inp.attr("data-name")][inp.attr("data-value")] = true;
            }

            $.each(kycInfo[kycType]["messageTmp"][inp.attr("data-name")], function (index, value) {
                if (value) {
                    arr.push(index);
                }
            });
            kycInfo[kycType]["message"][inp.attr("data-name")] = arr.join(',');
        }
        if (type === 'select') {
            kycInfo[kycType]["message"][self.attr("data-name")] = self.val();
        }
    }
    //第六步 --- 上传地址证明
    $(ele.addressBtn).on("tap", function (e) {
        e.preventDefault();
        var cardType = $(ele.addressCardType).attr("data-type");
        if (!cardType) {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        } else if (cardBaseFile.addressOne) {
            layer.open({ type: 2, shadeClose: false });
            publicRequest('thirdUploadAddress', 'POST', {
                cert_type: cardType,
                front: cardBaseFile.addressOne.src.split(',')[1],
                back: cardBaseFile.addressTwo ? cardBaseFile.addressTwo.src.split(',')[1] : undefined
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) {
                    // layer.closeAll();
                    return;
                }
                if (data.is_succ) {
                    layer.closeAll();
                    step = data.data.status;
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.third_username17'),
                skin: 'msg',
                time: 2
            });
        }
    });
    //第七步 --- 上传身份证件
    $(ele.identityBtn).on("tap", function (e) {
        e.preventDefault();
        var needTwo = true;    //是否需要两张图片
        var cardType = $(ele.identityCardType).attr("data-type");
        var cardNo = $(ele.identityCardNo).val();
        if (cardType != '0' && cardType != '4' && cardType != '5') {  //只需传一张
            needTwo = false;
        }
        var firstName, lastName;
        if(cardCountry == 'CN'){
            firstName = $(ele.identityRealname).val()
        }else{
            firstName = $(ele.identityFirstname).val()
            lastName = $(ele.identityLastname).val()
        }
        if (!cardType || !cardNo || !firstName) {
            layer.open({
                content: lang.text('third.fillInfoTip'),
                skin: 'msg',
                time: 2
            });
        } else if (cardBaseFile.front && (!needTwo || cardBaseFile.back)) {
            layer.open({ type: 2, shadeClose: false });
            publicRequest('thirdUploadIdCard', 'POST', {
                first_name: firstName,
                last_name: lastName,
                cert_type: cardType,
                id_no: cardNo,
                front: cardBaseFile.front.src.split(',')[1],
                back: cardBaseFile.back ? cardBaseFile.back.src.split(',')[1] : undefined
            }).then(function (data) {
                // console.log(data);
                layer.closeAll();
                if (!data) {
                    // layer.closeAll();
                    return;
                }
                if (data.is_succ) {
                    layer.closeAll();
                    step = data.data.status;
                    goStepPage();
                } else {
                    layer.open({
                        content: data.message,
                        skin: 'msg',
                        time: 2
                    });
                }
            });
        } else {
            layer.open({
                content: lang.text('third.uploadCard'),
                skin: 'msg',
                time: 2
            });
        }
    });

    //选择地址类型
    $(ele.cardSelect).on('change', function (e) {
        var op = $(this).find('option:selected');
        if ($(op).val()) {
            $(this).prev().val($(op).text());
            $(this).prev().attr("data-type", $(op).val());
        } else {
            $(this).prev().val(undefined);
            $(this).prev().attr("data-type", undefined);
        }
    });
    //选择地址文件
    $(ele.cardFile).on('change', function (e) {
        // console.log(e.target.files[0]);
        var file = e.target.files[0];
        var pageClass = "." + $(e.target).attr("data-page");
        preview(file, pageClass);
        previewBase64(file, $(e.target).attr("data-page"));
    });

    function updateFilesType(type) {
        if (type === 'address') {
            var list = addressTypeList;
            var id = 'address_type_list';
        } else {
            var list = {
                data: cardTypeList[type]
            };
            var id = 'identity_type_list';
            realnameSwitch(type)
        }
        //使用template模版
        var html = bt('template_card_info', list);
        //渲染
        $("#" + id).html(html);
    }
    // 国家切换时cn填写真实姓名，global显示姓 + 名
    function realnameSwitch(type){
        if(type == 'cn'){
            $(ele.identity + ' .global').removeClass('active');
            $(ele.identity + ' .cn').addClass('active');
        }else{
            $(ele.identity + ' .global').addClass('active');
            $(ele.identity + ' .cn').removeClass('active');
        }
    }

    function preview(file, pageClass) {
        var img = new Image(), url = img.src = URL.createObjectURL(file);
        var $img = $(img);
        var $imgWrapper = $('.m_third_card__pic').find(pageClass);
        img.onload = function () {
            URL.revokeObjectURL(url);

            if (img.width < img.height) {
                // $img.rotate(90);
                // $img.css("transform","rotate(90deg)");
                $img.width($imgWrapper.width());
                $img.height($imgWrapper.height());
                var x = $imgWrapper.width() / $img.height();
                var y = $imgWrapper.height() / $img.width();
                // console.log(x, y);
                $img.css("transform", "rotate(90deg) scale(" + y + "," + x + ")");
            }
            $imgWrapper.empty().append($img);
        };
    }
    function previewBase64(file, face) {
        // console.log(file.size);
        var quality = 1;
        if (file.size > 5 * 1024 * 1024) {  //大于 5M 压缩
            quality = 0.5
        }
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;

            $(img).on('load', function (e) {
                cardBaseFile[face] = new Image();
                renderImage(cardBaseFile[face], img, { maxWidth: 960, maxHeight: 960, quality: quality });

            });

        };
        reader.readAsDataURL(file);
    }

    function renderImage(target, img, options) {
        options = options || {};
        var imgWidth = img.naturalWidth, imgHeight = img.naturalHeight,
            width = options.width, height = options.height,
            maxWidth = options.maxWidth, maxHeight = options.maxHeight,
            doSquash = !this.blob || this.blob.type === 'image/jpeg';
        if (width && !height) {
            height = (imgHeight * width / imgWidth) << 0;
        } else if (height && !width) {
            width = (imgWidth * height / imgHeight) << 0;
        } else {
            width = imgWidth;
            height = imgHeight;
        }

        if (maxWidth && width > maxWidth) {
            width = maxWidth;
            height = (imgHeight * width / imgWidth) << 0;
        }
        if (maxHeight && height > maxHeight) {
            height = maxHeight;
            width = (imgWidth * height / imgHeight) << 0;
        }
        var opt = { width: width, height: height };
        for (var k in options) opt[k] = options[k];

        target.src = renderImageToDataURL(img, opt);
    }
    function renderImageToDataURL(img, options) {
        var width = options.width, height = options.height;
        var canvas = document.createElement("canvas");
        var iw = img.naturalWidth, ih = img.naturalHeight;
        var ctx = canvas.getContext('2d');
        ctx.save();
        canvas.width = width;
        canvas.height = height;

        var d = 1024; // size of tiling canvas
        var tmpCanvas = document.createElement('canvas');
        tmpCanvas.width = tmpCanvas.height = d;
        var tmpCtx = tmpCanvas.getContext('2d');
        var dw = Math.ceil(d * width / iw);
        var dh = Math.ceil(d * height / ih);
        var sy = 0;
        var dy = 0;

        while (sy < ih) {
            var sx = 0;
            var dx = 0;
            while (sx < iw) {
                tmpCtx.clearRect(0, 0, d, d);
                tmpCtx.drawImage(img, -sx, -sy);
                ctx.drawImage(tmpCanvas, 0, 0, d, d, dx, dy, dw, dh);
                sx += d;
                dx += dw;
            }
            sy += d;
            dy += dh;
        }

        ctx.restore();
        tmpCanvas = tmpCtx = null;

        return canvas.toDataURL("image/jpeg", options.quality || 0.5);
    }

    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substring(1).match(reg);  //匹配目标参数
        if (r != null) return decodeURIComponent(r[2]); return null; //返回参数值
    }
});