$(document).ready(function () {
    var getCode = $('#getCode');
    var submitAvoda = $('#submitAvoda');
    var InterValObj; //timer变量，控制时间   
    var curCount;//当前剩余秒数
    var codeSent = false; // 不可重复点击获取验证码
    var submitMis = false; // 不可重复点击提交
    var count = 6; //重新获取时间
    var reg = /^[0-9]*$/;
    var params = {
        order_no: getSearch().order_no,
        aname: $("input[name='name']"),
        card: $("input[name='card']"),
        id_card: $("input[name='id_card']"),
        phone: $("input[name='phone']"),
        code: $("input[name='code']"),
    }
    getCode.on('click', function () {
        if (!codeSent) {
            if(!params.order_no){
                layerMsg(lang.text('thirdH5.recreate_order'))
                return
            }
           if(!params.aname.val()){
                layerMsg(lang.text('thirdH5.fill_name'))
                return
            }
            if(!params.card.val()){
                layerMsg(lang.text('thirdH5.enterCardNumber'))
                return
            }
            if(!params.id_card.val()){
                layerMsg(lang.text('thirdH5.fill_id_num'))
                return
            }
            if(!params.phone.val()){
                layerMsg(lang.text('thirdH5.fill_phone'))
                return
            }
            if(!reg.test(params.phone.val())){
                layerMsg(lang.text('thirdH5.fill_correct_phone'))
                return
            }
            codeSent = true;
            publicRequest('getAvodaCode', 'post', {
                order_no: params.order_no,
                name: params.aname.val(),
                card: params.card.val(),
                id_card: params.id_card.val(),
                phone: params.phone.val(),
            }).then(function (data) {

                if (data.is_succ) {
                    window.clearInterval(InterValObj);
                    curCount = count;
                    getCode.text(lang.text('thirdH5.verificationCodeSent') + '（' + curCount + '）')
                    InterValObj = setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
                }
                else {
                    codeSent = false;
                    layerMsg(data.message)
                }
            })
        }
    })
    submitAvoda.on('click', function () {
        if (!submitMis) {
            if(!params.order_no){
                layerMsg(lang.text('thirdH5.recreate_order'))
                return
            }
            if(!params.code.val()){
                layerMsg(lang.text('thirdH5.fill_ver_code'))
                return
            }
            submitMis = true;
            publicRequest('getAvodaPay', 'post', {
                order_no: params.order_no,
                code: params.code.val()
            }).then(function (data) {

                submitMis = false;
                if (data.is_succ) {
                    if(platform == 'pc'){
                        location.href = '/space/#/space/asset/deposit'
                    }else if(platform == 'mobile'){
                        location.href = '/m/deposit/success'
                    }
                }else{
                    layerMsg(data.message)
                }
            })
        }

    })

    function layerMsg(message){
        layer.open({
            skin: 'msg',
            content: message,
            time: 2
        })
    }
    //timer处理函数
    function SetRemainTime() {
        if (curCount == 0) {
            window.clearInterval(InterValObj);//停止计时器
            getCode.text(lang.text('thirdH5.mRegister05'));
            codeSent = false;
        }
        else {
            curCount--;
            getCode.text(lang.text('thirdH5.verificationCodeSent') + '（' + curCount + '）');
        }
    }
});