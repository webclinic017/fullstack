; (function () {
    // 查看规则
    $(".rulesBtn").on('click', function () {
        layer.open({
            type: 1,
            skin: "liverpool",
            content: $('#rulesCon').html()
        });
    })
    var urlParams = getSearch();
    var gameInfo, only_key;
    only_key = urlParams.only_key;
    // 参加比赛逻辑
    $(".notParticipating").on('click', function(){
        if(isInTiger()){
            try {
                callNative({
                    type: "open_liverpool_game",
                    only_key: only_key
                });
            } catch (e) {}
        }else if(isIOS() || isAndriod()){
            location.href = "/";
        }else{
            location.href = "/space/#/space/liverpool?only_key=" + only_key;
        }
    })
    if (only_key) {
        getCompetitionList();
        competitionRanking();
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
                    if (gameInfo.is_effective_date && !gameInfo.is_in_competition) {
                        $('.notParticipating').show();
                    }
                    // $('#gameTime').html(gameInfo.trade_end.substr(0, 10) + ' / ' + gameInfo.trade_start.substr(0, 10))

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
            limit: 10,
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
                        '<div>#' + (obj.ranking ? obj.ranking : lang.text('liverpool.noRankingYet')) + '</div>' +
                        // '<div><span><img src="/images/icons-forex-new/xauusd@2x.png"></span></div>' +
                        '<div>'+ obj.world_code +'</div>' +
                        '<div>' + obj.trade_account_memo + '</div>' +
                        '<div>' + (obj.profit_rate * 100).toFixed(2) + '%</div>' +
                        '</li>'
                }
                var personalRanking = data.data.personal_ranking;
                if (personalRanking && personalRanking[0]) {
                    html += '<li class="active">' +
                        '<div>#' + personalRanking[0].ranking + '</div>' +
                        // '<div><span><img src="/images/icons-forex-new/xauusd@2x.png"></span></div>' +
                        '<div>'+ personalRanking[0].world_code +'</div>' +
                        '<div>' + personalRanking[0].trade_account_memo + '</div>' +
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