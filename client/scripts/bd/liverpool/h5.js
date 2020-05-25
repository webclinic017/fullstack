; (function () {
    var search_source = checkUserSource();
    /* 客户推广参数写入 */
    if (search_source) {
        publicRequest('setUserSource', 'POST', {
            source: JSON.stringify(search_source)
        });
    }
    // 查看规则
    $(".rulesBtn").on('click', function () {
        layer.open({
            type: 1,
            skin: "liverpool",
            shadeClose: false,
            content: $('#rulesCon').html()
        });
        try {
            callNative({
                type: "pull_down_refresh",
                show: false
            });
        } catch (e) { }
    })
    $('body').on('click', '.closed', function () {
        layer.closeAll();
        try {
            callNative({
                type: "pull_down_refresh",
                show: true
            });
        } catch (e) { }
    })
    var urlParams = getSearch();
    var gameInfo, only_key;
    only_key = urlParams.only_key;
    // 参加比赛逻辑
    $(".notParticipating").on('click', function () {
        if (isInTiger()) {
            try {
                callNative({
                    type: "open_liverpool_game",
                    only_key: only_key
                });
            } catch (e) { }
        } else if (isIOS() || isAndriod()) {
            location.href = "/";
        } else {
            location.href = "/space/#/space/liverpool?only_key=" + only_key;
        }
    })
    if (only_key) {
        getCompetitionList();
        getIpHandle();
    }
    var isCn;
    function getIpHandle() {
        getEmailPhone('', '', function () {
            isCn = JSON.parse(sessionStorage["systemMessage"]).ip_country_code === 'CN' || language == 'zh'; // ip || language
            if (isCn) {
                $('#competitionList li  div:nth-child(2)').remove();
            }
            competitionRanking();
        })
    }
    function getCompetitionList() {
        var api = isInTiger() ? 'competitionListApp' : 'competitionList';
        publicRequest(api, 'GET', {
            only_key: only_key
        }).then(function (data) {
            // console.log(data.data);
            if (data.is_succ) {
                data = data.data;
                // 传了标识就不需要循环
                // for (var i = 0; i < data.length; i++) {
                //     var obj = data[i];
                //     if(obj.only_key === ''){
                //         gameInfo = obj;
                //         return;
                //     }
                // }
                gameInfo = data[0];
                if (gameInfo) {
                    // 用户是否参加比赛
                    if (gameInfo.is_effective_date == 1 && gameInfo.is_open_account && !gameInfo.is_in_competition) {
                        $('.notParticipating').show();
                    }
                    // $('#gameTime').html(formatDate(new Date(gameInfo.trade_start), 'yyyy-MM-dd') + ' / ' + formatDate(new Date(gameInfo.trade_end), 'yyyy-MM-dd'))

                }
            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
    function competitionRanking() {
        var api = isInTiger() ? 'competitionRankingApp' : 'competitionRanking';
        publicRequest(api, 'GET', {
            // limit: 50,
            only_key: only_key
        }).then(function (data) {
            // console.log(data.data);
            if (data.is_succ) {
                var ranking = data.data.ranking;
                var html = '';
                $('#competitionList').html($('#competitionList li:first-child'));
                for (var i = 0; i < ranking.length; i++) {
                    var obj = ranking[i];
                    html += '<li>' +
                        '<div>#' + obj.ranking + '</div>';
                    if (!isCn) {
                        html += '<div><span><img src="/white_label/jack_icon/' + obj.world_code + '.png"></span><p>' + obj.world_name + '</p></div>'
                    }

                    // '<div>'+ obj.world_code +'</div>' +
                    html += '<div>' + obj.trade_account_memo + '</div>' +
                        '<div>' + (obj.profit_rate * 100).toFixed(2) + '%</div>' +
                        '</li>'
                }
                var personalRanking = data.data.personal_ranking;
                if (personalRanking && personalRanking[0]) {
                    html += '<li class="active">' +
                        '<div>#' + personalRanking[0].ranking + '</div>'
                    if (!isCn) {
                        html += '<div><span><img src="/white_label/jack_icon/' + personalRanking[0].world_code + '.png"></span><p>' + personalRanking[0].world_name + '</p></div>'
                    }
                    // '<div>'+ personalRanking[0].world_code +'</div>' +
                    html += '<div>' + personalRanking[0].trade_account_memo + '</div>' +
                        '<div>' + (personalRanking[0].profit_rate * 100).toFixed(2) + '%</div>' +
                        '</li>'
                }

                $('#competitionList').append(html);

            } else {
                layer.open({
                    content: data.message,
                    skin: 'msg',
                    time: 2
                });
            }
        });
    }
})();