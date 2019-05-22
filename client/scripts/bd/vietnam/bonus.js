;(function () {
    getRedBagPool();
    function getRedBagPool(){
        // 获取红包状态
        layer.open({type: 2});
        $('#bonusStatus').empty();
        publicRequest('getRedBagPool', 'GET', {group: 'liverpool_cashback'}).then(function (data) {
            layer.closeAll();
            if (data.is_succ) {
                var dt = data.data.records;
                for (var i = 0; i < dt.length; i++) {
                    var liData = dt[i];
                    $('#bonusStatus').append(liHtml(liData))
                }
            }else{
                layerMsg(data.message)
            }
        });
    }

    function bonusStatusImg(is_receive){
        if(is_receive == 1){
            return '/white_label/bd/bonus/bonus-open.png'
        }else if(is_receive == 2){
            return '/white_label/bd/bonus/bonus-not-received.png'
        }else{
            return '/white_label/bd/bonus/bonus-cannot-used.png'
        }
    }
    function liHtml(liData){
        var cls = (liData.is_receive == 1 ? 'bonus-open' : '');
        return '<li data-id="'+ liData.id +'" data-isreceive="'+ liData.is_receive +'">' +
                    '<div class="'+ cls +'">' +
                        '<img src="'+ bonusStatusImg(liData.is_receive) +'">' +
                        '<span>$'+ liData.amount +'</span>' +
                    '</div>' +
                '</li>'
    }
    $('#bonusStatus').on('click', 'li', function(){
        var id = $(this).data('id');
        var isReceive = $(this).data('isreceive');
        if(isReceive && isReceive == 2){
            layer.open({type: 2});
            publicRequest('receiveRedbag', 'PUT', {id: id}).then(function (data) {
                layer.closeAll();
                if (data.is_succ) {
                    layerMsg(data.message);
                    getRedBagPool();
                }else{
                    layerMsg(data.message)
                }
            });
        }
    })
    
  })();